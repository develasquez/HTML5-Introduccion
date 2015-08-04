# Javascript HTML5

## Por que Javascript?

Muchos al pensae que hablamos de html 5 piensan que no es  necesario aprender javascript sin embargo, el potencial mas grande de esta tecnologia senobtiene utilizando las tes herramientas.

## Que es Js?

Javasript es un lenguaje de scripting creado en 1995 por netscape, el cual permite interactuar con nuestra pagina mediante el DOM , Document Object Model, que es la representacion de todos los elementos del documento como objetos javascript.

Sin embargo javascript dejo de ser un lenguaje 100% para la web, y debido a su versatilidad y facilidad de implementación hoy es utilizado para un sin numero de plataformas. Tenemos javascript en la web del lado del cliente, javascript del lado del servidor como php, C#, js corre del lado del servidor con __Node.js__, sive para desarrollar aplicaciones nativas para dispositivos moviles, desarrollar aplicaciones para Smart Watchs, Smart TVs, Drones, robots, refrigerdores, etc...

por lo tanto nos conviene prestarle mucha atención a Javascript, que es el segun Stack Overflow, el lenguaje más consultado durante el 2014.

## Nuevo en HTML 5

Algunas de las nuevas funcionalidades de HTML 5 son:

### Storage

Antes de Html 5 la única forma que teniamos de almacenar infrormación en el navegador del cliente eran las tan odiadas cookies, las cuales son muy limitadas, ya que solo pueden almacenar 4kb de información cada una. 

#### Key-value storage

* __Session Storage__: Permite almacenar hasta 5mb de información en cada una, en session storage la información permanece mientras la ventana del navegador este abierta.

```JS
	sessionStorage.setItem("nombreUsuario","Felipe Velasquez")

	var nombre = sessionStorage.getItem("nombreUsuario");

```
* __Local Storage__: Permite almacenar hasta 5mb en cada una, esta información permanecera en el tiempo, y no se borra al cerrar el navegador.

```JS
	localStorage.setItem("infoPermanente","AHFSJHVJSD2342343jbhj23423$$");

	var Token = localStorage.getItem("infoPermanente");
```
La información contenida en este tipo de variables es de tipo string por lo tanto si quieres guardar Objetos Javascript (JSON), es necesario parsear los datos.

```JS
	var obj = {
		nombre: "Felipe",
		apellido: "Velasquez",
		edad: 29
	};
	localStorage.setItem("datos",JSON.stringify(obj));

	var obj = JSON.parse(localStorage.getItem("datos"));
```

#### Database storage

+ [IndexedDB](http://www.w3.org/TR/IndexedDB/)

+ Web SQL Database : Esta funacionalidad es muy interesante ya que permite almacenar hasta 50 MB de datos estructurados en tablas, las cuales se pueden consultar mediante sentencias SQL.

```JS
	var db= window.openDatabase("laBase", "1.0", "laBase", 5 * 1024 * 1024);

	db.transaction(function(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS laTabla (id INTEGER PRIMARY KEY AUTOINCREMENT, Nombre, Tipo, observacion)');
     });
	db_select_all_laTabla= function(fun) {
        db.transaction(function(tx) {
            var sql = 'select id, Nombre, Tipo, observacion from laTabla';
            tx.executeSql(sql, [], fun);
        })
    };
    db_select_laTabla= function( id, fun) {
        db.transaction(function(tx) {
            var sql = 'select id, Nombre, Tipo, observacion from laTabla where  id = ?';
            tx.executeSql(sql, [id], fun);
        })
    };
    db_insert_laTabla= function(  Nombre, Tipo, observacion, fun) {
        db.transaction(function(tx) {
            tx.executeSql('INSERT INTO laTabla ( Nombre, Tipo, observacion ) values (?,?,?) ',[ Nombre, Tipo, observacion],fun);
        });
    };
    db_delete_laTabla= function( id, fun) {
        db.transaction(function(tx) {
            
            var sql = 'delete from laTabla where  id = ?';
            tx.executeSql(sql, [id], fun);
        });
    };
	
```


#### Geolocation

Permite obtener las coordenadas GPS del dispositivo utilizando distitnas alternativas. 

* Wifi (500 M)
* Triangulacion Celular (10 M)
* Sensor GPS. (1 M)

```CSS
	#mapa_canvas{
	width:50%;
	height:50%;
	}
```

```HTML
	<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
	<div id="mapa_canvas"></div>
```

```JS
	navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var coordenadas = new google.maps.LatLng(lat,lon);
        var divMapa = document.getElementById("mapa_canvas");
        var opciones ={
            zoom :16,
            center:coordenadas,
            mapTypeId:google.maps.MapTypeId.ROADMAP
            }
        mapa = new google.maps.Map(divMapa,opciones);
        var opcionesMarker = {
            position:coordenadas,
            map:mapa,
            title:'Tecnova'
            }
        var marker= new google.maps.Marker(opcionesMarker)
        }, function(err){});
```
#### Device Orientation

Dentro de las posibilidades de HTML5 esta la interacción con el hardware, en especial, con el de 

```CSS
	.logo {
      width:275px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      padding: 15px;
    }
    
    .container {
      -webkit-perspective: 300; perspective: 300;
    }
```
```HTML
	<div class="container">
    	<img src="http://www.html5rocks.com/en/tutorials/device/orientation/html5_logo.png" id="imgLogo" class="logo">
  	</div>
```

```JS
	init();
    function init() {
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(eventData) {
          // gamma is the left-to-right tilt in degrees, where right is positive
          var tiltLR = eventData.gamma;
          
          // beta is the front-to-back tilt in degrees, where front is positive
          var tiltFB = eventData.beta;
          
          // alpha is the compass direction the device is facing in degrees
          var dir = eventData.alpha
         
          deviceOrientationHandler(tiltLR, tiltFB, dir);
          }, false);
      } else {
        alert("Orientación no soportada :(")
      }
    }
  
    function deviceOrientationHandler(tiltLR, tiltFB, dir) {
      var logo = document.getElementById("imgLogo");
      //logo.style.webkitTransform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
      //logo.style.MozTransform = "rotate("+ tiltLR +"deg)";
      logo.style.transform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
    }
    
    
    // Some other fun rotations to try...
    //var rotation = "rotate3d(0,1,0, "+ (tiltLR*-1)+"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
    //var rotation = "rotate("+ tiltLR +"deg) rotate3d(0,1,0, "+ (tiltLR*-1)+"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
```

__Gamepad control__ : The Gamepad specification defines a low-level interface that represents gamepad devices.

	function runAnimation()
	{
	    window.requestAnimationFrame(runAnimation);

	    var gamepads = navigator.getGamepads();

	    for (var i = 0; i < gamepads.length; ++i)
	    {
	        var pad = gamepads[i];
	        // todo; simple demo of displaying pad.axes and pad.buttons
	    }
	}
	window.requestAnimationFrame(runAnimation); 


__Pointer Events__ : This document defines events and related interfaces for handling hardware agnostic pointer input from devices including a mouse, pen, touchscreen, etc.. For compatibility with existing mouse based content, this specification also describes a mapping to fire [DOM-LEVEL-3-EVENTS] Mouse Events for other pointer device types.

__Pointer Lock__ : This specification defines an API that provides scripted access to raw mouse movement data while locking the target of mouse events to a single element and removing the cursor from view. This is an essential input mode for certain classes of applications, especially first person perspective 3D applications and 3D modeling software.


## Offline resources
__Application Cache__: Permite visualizar contenido en modo off line , por medio de la declaracion en un archivo CACHE MANIFEST
	
	CACHE MANIFEST
	NETWORK:
	comm.cgi
	CACHE:
	style/default.css
	images/sound-icon.png
	images/background.png

__Service Workers__: This specification defines an API that allows Web application authors to spawn background workers running scripts in parallel to their main page. This allows for thread-like operation with message-passing as the coordination mechanism.

## Comunicaciones


* __Beacon__:The Beacon specification defines an interface that web developers can use to asynchronously transfer small HTTP data from the User Agent to a web server.

	navigator.sendBeacon("/log", analyticsData);

* __XMLHttpRequest Level 2__


```JS
	$(function(){
		ajax("http://desamovil.cl/temperaturaCiudades/55ba8d0b85f8844065844456.json",function (response) {
			procesaSemana(response);
		})
	})

	function  ajax(url,_fun){

	    var xhr = new XMLHttpRequest();
	    xhr.open("GET", url, true);
	    xhr.onreadystatechange = function() {
	      if (xhr.readyState == 4) {
	        var resp = JSON.parse(xhr.responseText);
	      _fun(resp)
	      }
	    }
	    xhr.send();
  	}
	
	

	procesaSemana = function (ciudad) {
		for (var i = 0; i < 5; i++) {
			var temperaturas = ciudad.data[0].temperaturas[i];
			var dia ={
				fecha : ciudad.data[0].fechas[i],
				imagen : ciudad.data[0].iconos[i].split(",")[1],
				minima : temperaturas.split("/")[0],
				maxima : temperaturas.split("/")[1],
				humedad : '0%'

			}
			$(".dias").append(masDia(dia));
		};
	}

	masDia = function (dia) {

		return [
			'<li class="diaLista flex">',
	        '	<div class="detalle">'+dia.fecha+'</div>',
			'	<div class="detalle">',
			'		<img src="img/'+dia.imagen+'" ></div>',
	        '	<div class="detalle">',
	        '		<div class="temp1">'+dia.maxima+'</div>',
	        '		<div class="temp2">'+dia.minima+'</div>',
	        '	</div>',
	        '	<div class="detalle">'+dia.humedad+'</div>',
	        '</li>'
		].join("\n");
	}
```

* __Full screen support__: Permite acceder a als funcionalidad de pantalla completa.

```CSS
	body:-webkit-full-screen {
	  width: 100%;
	  height: 100%;	
	}
```


```JS
	$("body").on("dblclick",function () {
        var elem = $("body")[0];
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
    })
```


* __Web Notifications__: Permite crear notificaciones que se visualizaran fuera del navegador.

```JS
	if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                var notification = new Notification("23°", {body:"El pronistico para hoy es Soleado",icon:"img/despejado.png"});
            }
        });
    }
```



* __Access the webcam__

```HTML
	<video src="" id="videoElement"></video>
```

```JS
	var video = document.querySelector("#videoElement");
 
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
     
    if (navigator.getUserMedia) {       
        navigator.getUserMedia({video: true},
                function(stream) {
                    video.src = window.URL.createObjectURL(stream);
                }, 
                function(){
                }
        );
    }

 ``` 

### WebSocket
 
* Basic socket communication.
	[Node.JS](https://nodejs.org/)


### User interaction

### Drag and drop

* draggable attribute
* dropzone attribute

* Events
	+ ondrag event
	+ ondragstart event
	+ ondragenter event
	+ ondragover event
	+ ondragleave event
	+ ondragend event
	+ ondrop event
