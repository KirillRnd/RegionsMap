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
	  multipaint(value,"RU-MOS");
	});
	 myMap.geoObjects.add(objectManager);

   /* $.ajax({
        // В файле data.json заданы геометрия, опции и данные меток .
        url: "regions.json"
    }).done(function(data) {
        objectManager.add(data);
    }).then(function(data) { 
		multipaint(objectManager,"RU-MOS");
    });*/
	  
	
	
}
function multipaint(objectManager,objectId) {
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
function get_random_color() {
	randomcolor="#"+((1<<24)*Math.random()|0).toString(16); 
	//генерация hex-кода вида #000000-#FFFFFF		
	return randomcolor;
	}	