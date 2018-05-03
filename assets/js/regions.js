geojson = {
        region: {
            title: 'Регион',
            items: [ {
                id: 'RU',
                title: 'Россия'
            }]
        }
}
var objectManager;
var dataSheet;
ymaps.ready(init);


function init() {
   
    var myMap = new ymaps.Map('map', {
        zoom: 3,
        center: [65.311239, 96.157760],
        controls: []
    });
	objectManager = new ymaps.ObjectManager();
	
    // Создадим менеджер объектов.
    
    // Загрузим регионы.
    ymaps.borders.load('RU', {
    lang: 'ru'
	}).then(function (geojson) {
		var options = {
                // Стандартный вид текста будет темный с белой обводкой.
                labelDefaults: 'dark',
                // Цвет заливки.
                fillColor: 'rgba(27, 125, 190, 0.7)',
                // Цвет обводки.
                strokeColor: 'rgba(255, 255, 255, 0.8)'
            };
		var features = geojson.features.map(function (feature) {
			var AddFeat = {type: "Feature"};
			AddFeat.geometry={type: "Polygon"};
			AddFeat.geometry.coordinates=feature.geometry.coordinates;
			AddFeat.id = feature.properties.iso3166;
			AddFeat.options = options;
			
			return AddFeat;
		});
		
		objectManager.add(JSON.stringify(features));
		  
		
		
		myMap.geoObjects.add(objectManager);
		//console.log(objectManager);
		return objectManager;
	}).then(function(value) {
		  //random_color(value,"RU-MOS");
		dataSheet={};
		dataSheet["RU-MOS"]={"value":5};
		rule=[
			{
				"type": "interval",   //[leftvl,rightvl)
				"target" : "value",
				"properties" :{
					"leftvl": 0,
					"rightvl": 10
					},
				"color": random_rgba(),
			},
			{
				"type": "interval",   //[leftvl,rightvl)
				"target" : "value",	  //название искомог свойства
				"properties" :{       //свои для каждого типа
					"leftvl": 10,
					"rightvl": 20
					},
				"color": random_rgba(),
			},	
			];
		  
		manage_color(value,dataSheet,rule);
	});
	 myMap.geoObjects.add(objectManager);

   /* $.ajax({
        // В файле data.json заданы геометрия, опции и данные меток .
        url: "regions.json"
    }).done(function(data) {
        objectManager.add(data);
    }).then(function(data) { 
		random_color(objectManager,"RU-MOS");
    });*/
	  
	
	
}
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function find_color_in_arrofobj(options,rules) {
	var color = undefined;
	if (options !=undefined) rules.forEach(function(el) {
		switch (el.type) {
		  case "interval":
			if (options[el.target]!=undefined) if ((options[el.target]>=el.properties.leftvl) &&  (options[el.target]<el.properties.rightvl)){
				color=el.color;
			}
			break;
		  default:
			
		}
	});
	return color;
}

function manage_color(objectManager,data,rules) {
	
	objectManager.objects.each(function (object) {
		var NeccColor = find_color_in_arrofobj(data[object.id],rules);
		object.options.fillColor=(NeccColor===undefined)?"rgb(200,200,200)":NeccColor;  
	});
	
}
function transform_to_obj(data){
	switch (typeof data) {
	  case object:
		alert( 'Маловато' );
		break;
	  case string:
		try {
			
		}
		catch(err){
		}
		manage_color(objectManager,JSON.parse(data));
		break;
	  default:
		console.log("Неверный формат данных");
	}
}

function random_color(objectManager,objectId) {
	try{
		objectManager.objects.each(function (object) {
			object.options.fillColor=random_rgba();  
		});
	}
	catch(err){
	}
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}