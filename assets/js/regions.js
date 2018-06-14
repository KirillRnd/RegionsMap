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
var dataSin={"RU-ALT":["Алтайский край","22"],"RU-AMU":["Амурская область","28"]};
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
	}).then(function(val) {
		  //random_color(value,"RU-MOS");
		dataSheet=[{NameId: "RU-ALT", value: 0},{NameId: "RU-AMU", value: 1},{NameId: "RU-ARK", value: 2},{NameId: "RU-AST", value: 3},{NameId: "RU-BEL", value: 4},{NameId: "RU-BRY", value: 5},{NameId: "RU-VLA", value: 6},{NameId: "RU-VGG", value: 7},{NameId: "RU-VLG", value: 8},{NameId: "RU-VOR", value: 9},{NameId: "RU-YEV", value: 10},{NameId: "RU-ZAB", value: 11},{NameId: "RU-IVA", value: 12},{NameId: "RU-IRK", value: 13},{NameId: "RU-KB", value: 14},{NameId: "RU-KGD", value: 15},{NameId: "RU-KLU", value: 16},{NameId: "RU-KAM", value: 17},{NameId: "RU-KC", value: 18},{NameId: "RU-KEM", value: 19},{NameId: "RU-KIR", value: 20},{NameId: "RU-KOS", value: 21},{NameId: "RU-KDA", value: 22},{NameId: "RU-KYA", value: 23},{NameId: "RU-KGN", value: 24},{NameId: "RU-KRS", value: 25},{NameId: "RU-LEN", value: 26},{NameId: "RU-LIP", value: 27},{NameId: "RU-MAG", value: 28},{NameId: "RU-MOS", value: 29},{NameId: "RU-MUR", value: 30},{NameId: "RU-NIZ", value: 31},{NameId: "RU-NGR", value: 32},{NameId: "RU-NVS", value: 33},{NameId: "RU-OMS", value: 34},{NameId: "RU-ORE", value: 35},{NameId: "RU-ORL", value: 36},{NameId: "RU-PNZ", value: 37},{NameId: "RU-PER", value: 38},{NameId: "RU-PRI", value: 39},{NameId: "RU-PSK", value: 40},{NameId: "RU-AD", value: 41},{NameId: "RU-AL", value: 42},{NameId: "RU-BA", value: 43},{NameId: "RU-BU", value: 44},{NameId: "RU-DA", value: 45},{NameId: "RU-IN", value: 46},{NameId: "RU-KL", value: 47},{NameId: "RU-KR", value: 48},{NameId: "RU-KO", value: 49},{NameId: "RU-ME", value: 50},{NameId: "RU-MO", value: 51},{NameId: "RU-SA", value: 52},{NameId: "RU-SE", value: 53},{NameId: "RU-TA", value: 54},{NameId: "RU-TY", value: 55},{NameId: "RU-KK", value: 56},{NameId: "RU-ROS", value: 57},{NameId: "RU-RYA", value: 58},{NameId: "RU-SAM", value: 59},{NameId: "RU-SAR", value: 60},{NameId: "RU-SAK", value: 61},{NameId: "RU-SVE", value: 62},{NameId: "RU-SMO", value: 63},{NameId: "RU-STA", value: 64},{NameId: "RU-TAM", value: 65},{NameId: "RU-TVE", value: 66},{NameId: "RU-TOM", value: 67},{NameId: "RU-TUL", value: 68},{NameId: "RU-TYU", value: 69},{NameId: "RU-UD", value: 70},{NameId: "RU-ULY", value: 71},{NameId: "RU-KHA", value: 72},{NameId: "RU-CHE", value: 73},{NameId: "RU-CE", value: 74},{NameId: "RU-CU", value: 75},{NameId: "RU-CHU", value: 76},{NameId: "RU-YAR", value: 77},{NameId: "RU-SPE", value: 78},{NameId: "RU-MOW", value: 79},{NameId: "RU-NEN", value: 80},{NameId: "RU-KHM", value: 81},{NameId: "RU-YAN", value: 82},{NameId: "RU-SEV", value: 83},{NameId: "RU-KRY", value: 84}];
		//dataSheet["RU-MOS"]={"value":5};
		var rules=define_rules(dataSheet,{"type": "interval",	"target" : "value",
			properties: {
				number:{
					fullnumber:4,
					division:"auto",
				},
				type:{colortype:"gradient",color1:"rgba(173, 192, 255, 0,8)",color2:"rgba(0, 46, 194, 0,8)"}
			}
		});
		  ///console.log("???");
		manage_color(val,dataSheet,rules);
		$("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",
 
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
 
        data: dataSheet,
 
        fields: [
            { name: "NameId", type: "text", width: 150},
            { name: "value", type: "number", width: 50 },
            { type: "control" }
        ]
    });
	});

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
		  case "identity":
		    if (options[el.target]!=undefined) if (options[el.target]==el.properties.value){
				color=el.color;
			}
		    break;
		  default:
			
		}
	});
	return color;
}

function manage_color(objectManager,data,rules) {
	function LookingForId(array1, NameId) {
	  var ans = null;
	  array1.forEach(function(element) {
		  if (element["NameId"]==NameId){
			 ans = element;
		  }
	  });
	  return ans;
	}

	objectManager.objects.each(function (object) {
		var objArr=LookingForId(data,object.id);
		if (objArr != null){
			var NeccColor = find_color_in_arrofobj(objArr,rules);
		    object.options.fillColor=(NeccColor===undefined)?"rgb(200,200,200)":NeccColor; 
		} 
	});
	
}
function define_rules(data,options){   //data={"RU-ALT":{"value":0},"RU-AMU":{"value":1}} ;  options={	"type": "",	"target" : "...", properties: {number:{fullnumber:4,description:"auto"},type:{colortype:"gradient",sorttype:"identity",color1:"rgba(173, 192, 255, 0,8)",color2:"rgba(0, 46, 194, 0,8)"}}}
var rules=[];
if (typeof data != "object") {
	console.log('Неверный формат данных! должен быть "object". Смотри документация о входных данных');
	return;
	}
if (typeof options != "object") {
	console.log('Неверный формат данных! должен быть "object". Смотри документация о правилах отбора');
	return;
	}
if (options.target === undefined) {
	console.log('Неверный формат свойств! должен присутствовать "target". Смотри документация о правилах отбора');
	return;
	}			
if (options.type === undefined) {
	console.log('Неверный формат свойств! должен присутствовать "type". Смотри документация о правилах отбора');
	return;
	}
	
	var arrofvar=[];
			/*for (var key in data) {
			    if (arrofvar.indexOf(data[key][options.target]) == -1) arrofvar.push(data[key][options.target]);//добавлены все виды данной переменной
			}	*/
			data.forEach(function(element) {
				if (arrofvar.indexOf(element[options.target]) == -1) arrofvar.push(element[options.target]);
			});
	switch (options.type) {
		  case "interval":
		    
			if (options.properties  === undefined) {rules = create_rules_interval(arrofvar,{fullnumber:4,division:"auto"},{colortype:"gradient",sorttype:"identity",color1:"rgba(173, 192, 255, 0,8)",color2:"rgba(0, 46, 194, 0,8)"})}
			else {
				var num = options.properties.number;
				var prop = options.properties.type;
				if (num === undefined) num = {fullnumber:4,division:"auto"};
				if (prop === undefined) prop = {colortype:"gradient",color1:"rgba(173, 192, 255, 0,8)",color2:"rgba(0, 46, 194, 0,8)"};
				prop.target=options.target;
				rules = create_rules_interval(arrofvar,num,prop);
			}	
			break;
		  case "identity":
		    if (options.properties  === undefined) {rules = create_rules_identity(arrofvar,{},{colortype:"random",sorttype:options})}
			else {
				var num = {fullnumber:arrofvar.length,division:"auto"} ;
				
				var prop = options.properties.type;
				if (prop === undefined) prop = {colortype:"random"};
				prop.target=options.target;
				rules = create_rules_identity(arrofvar,num,prop);
			}
			break;
		  default:
		    console.log('Неверный тип! Смотри документация о правилах отбора');
			return null;
		}
return rules;		
}
function create_rules_identity(arrofvar,numbers,options){
 if ((arrofvar===undefined)|| (numbers===undefined) || (options===undefined)) {
	 console.log("Incorrect callback");
	 return null;
	 }
 var rules = [];

	switch (options.colortype){
		case "gradient":
			var rainbow = new Rainbow(); 
			rainbow.setNumberRange(0, numbers.fullnumber-1);
			rainbow.setSpectrum(rgbaToHex(options.color1), rgbaToHex(options.color2));
		
			arrofvar.forEach(function(el,i){
					var rgba = hexToRGBA(rainbow.colourAt(i),0.8);
					rules.push({
						"type": "identity",   
						"target" : options.target,
						"properties" :{
							"value": el,
							},
						"color": rgba,
					});
				});
		break;
		case "random":
			if (numbers.division === undefined){
				arrofvar.forEach(function(el){
					
					rules.push({
						"type": "identity",   
						"target" : options.target,
						"properties" :{
							"value": el,
							},
						"color": random_rgba(0.8),
					});
				});
			}
		break;  
		default:
		return null
	 }
	
	
 
 return rules;
}
function create_rules_interval(arrofvar,numbers,options){
	if ((arrofvar===undefined)|| (numbers===undefined) || (options===undefined)) {
		 console.log("Incorrect callback");
		 return null;
		 }
	var rules = [];

	var list=[];
	
	switch (numbers.division){
		case "auto": 	//на равные размеры
			var size = Math.floor(arrofvar.length/numbers.fullnumber);
			arrofvar.sort(function(a, b) {
				return a - b;
			});
			for (i=0;i<numbers.fullnumber-1;i++){	
				list.push({leftvl:arrofvar[i*size],rightvl:arrofvar[(i+1)*size],});
			}
			list.push({leftvl:arrofvar[i*size],rightvl:arrofvar[arrofvar.length-1],});//азбивается неравномерно, последний всегда остается немного больше
		break;
		case "step":	//с заданным шагом
			var max = arrofvar.max();
			var min = arrofvar.min();
			var lv = min;
			var step = numbers.step;
			while(lv < max) {
			  list.push({leftvl:lv,rightvl:lv+step,});
			  lv+=step;
			}
		break;
		case "defined": //пользовательские
			list = numbers.list;
		break;  
		default:
		return;
	 }
	switch (options.colortype){
		case "gradient"://градиентная раскраска
			var rainbow = new Rainbow(); 
			rainbow.setNumberRange(0, list.length-1);
			rainbow.setSpectrum(rgbaToHex(options.color1), rgbaToHex(options.color2));
			
			list.forEach(function(el,i){
				var rgba = hexToRGBA(rainbow.colourAt(i),0.8);
				rules.push({
					"type": "interval",   
					"target" : options.target,
					"properties" :{
						"leftvl": el.leftvl,
						"rightvl": el.rightvl,
						},
					"color": rgba,
				});
			});
		break;
		case "random"://случайная раскраска
			
			
			list.forEach(function(el){
				
				rules.push({
					"type": "interval",   
					"target" : options.target,
					"properties" :{
						"leftvl": el.leftvl,
						"rightvl": el.rightvl,
						},
					"color": random_rgba(0.8),
				});
			});
			
		break;  
		default:
		return;
	 }
	
	
 
 return rules;
}
function random_color(objectManager,objectId) {
	try{
		objectManager.objects.each(function (object) {
			object.options.fillColor=random_rgba(0.8);  
		});
	}
	catch(err){
	}
}

function random_rgba(tr) {
    var o = Math.round, r = Math.random, s = 255;
	var op = (tr === undefined)?r().toFixed(1):tr;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + op + ')';
}
function hexToRGBA(hex, opacity) {
    return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(opacity||1).join(',') + ')';
}
function trim (str) {
  return str.replace(/^\s+|\s+$/gm,'');
}

function rgbaToHex (rgba) {
    var parts = rgba.substring(rgba.indexOf("(")).split(","),
        r = parseInt(trim(parts[0].substring(1)), 10),
        g = parseInt(trim(parts[1]), 10),
        b = parseInt(trim(parts[2]), 10),
        a = parseFloat(trim(parts[3].substring(0, parts[3].length - 1))).toFixed(2);

		r=r.toString(16);
		g=g.toString(16);
		b=b.toString(16);
		
    return ('#' + ((r.length == 2)?"":"0") + r + ((g.length == 2)?"":"0") + g + ((b.length == 2)?"":"0")+ b /*+ (a * 255).toString(16).substring(0,2)*/);
}

Array.prototype.max = function(){

    return Math.max.apply( Math, this );

};

Array.prototype.min = function(){
    return Math.min.apply( Math, this);
};

String.prototype.synonymsId = function(data){
	for (key in data) {
		if (data[key].indexOf(String(this)) != -1) return key;
//console.log(String(this));
	}		
    return null;
};