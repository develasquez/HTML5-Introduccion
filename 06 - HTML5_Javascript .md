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
+ IndexedDB
+ Objectstore Blob support
+ Objectstore ArrayBuffer support
+ Web SQL Database : (_The Web SQL Database specification is no longer being updated and has been replaced by IndexedDB. Because at least 3 vendors have shipped implementations of this specification we still include it in this test_).

```JS
	var db= window.openDatabase("laBase", "1.0", "laBase", 5 * 1024 * 1024);
	
```


Geolocation
Device Orientation
Device Motion

Full screen support
Web Notifications

Access the webcam
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

Server-Sent Events

__Beacon__:The Beacon specification defines an interface that web developers can use to asynchronously transfer small HTTP data from the User Agent to a web server.

	navigator.sendBeacon("/log", analyticsData);

XMLHttpRequest Level 2

### Upload files
	* Response type support
		+ Text response type
		+ Document response type
		+ ArrayBuffer response type
		+ Blob response type

#### WebSocket
Basic socket communication
ArrayBuffer and Blob



### User interaction

#### Drag and drop

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
