# HTML5 Audio y Video

## Detalles

Los Tags Audio y Video, son nuevos en HTML5, y representan unos de los elementos más importantes en lo que define a la generacion HTML5, ya que al usar los tags Audio y Video es posible reemplazar a flash totalmente en la web.

![W3C](http://www.w3.org/Icons/w3c_home)  
[W3C Recomendation - Audio](http://www.w3.org/TR/html5/embedded-content-0.html#audio)

[W3C Recomendation - Video](http://www.w3.org/TR/html5/embedded-content-0.html#video) 

## Audio

EL tag audio es utilizado para embeber contenido de tipo audio en un documento HTML, este puede soportar una gran cantidad de origenes de audio, representados por el atributo "src" o por multiples tags &lt;source&gt;

### Autoplay

	<!-- Audio simple auto iniciadble-->
	<audio src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" autoplay>
	  Tu navegador no soporta el elemento Audio.
	</audio>

### Tracks

	<!-- Reproduccion de audio con titulos -->
	<audio src="foo.ogg">
	  <track kind="captions" src="foo.en.vtt" srclang="en" label="English">
	  <track kind="captions" src="foo.sv.vtt" srclang="sv" label="Svenska">
	</audio>

### Sources

	<audio controls="controls">
  		Tu navegador no soporta el elemento Audio.
  		<source src="foo.wav" type="audio/wav">
	</audio>
## Atributos

* __autoplay__ : Si se especifica en true el audio se reproducirá automaticamente.
* __autobuffer__ _Obsoleto_: El audio comenzara a descargarce automaticamente, en caso no tener la 
* __buffered__ : Permite determinar el rango de tiempo que ha sido almacenado en el buffer del archivo de medios.
* __controls__ : Permite que el navegador despliege controles para manejar el audio en reproducción , incluyendo el volumen, punto de reproducción , play y pause.  
* __loop__ : Establece que al llegar al final de la reproducción esta comenzara nuevamente desde el inicio.
* __muted__ : Establece que el audio iniciara silenciado.
* __played__ : Establece el rango de tiempo que se ha reproducido.
* __preload__ : (none, metadata, auto, empty) Ermite establecer si el contenido se precargara desde que se despliega el documento.
* __src__ : La Url del audio embebido, Ojo con las politicas de acceso HTTP, este atributo es opcional cuando se encuentra la etiqueta &lt;source&gt;  

* __volume__ : Permite obtener o estabelecer el volumen del audio en reproducción, se represent en un rango desde 0.0 (Silencio) hasta 1.0 (Maximo Volumen).

### Codecs

+ PCM audio
+ AAC
+ MP3
+ Ogg Vorbis
+ Ogg Opus
+ WebM with Vorbis
+ WebM with Opus


#### Compatibilidad con Navegadores (Desktop)

|Funcionalidad 		| Chrome	| Firefox (Gecko) 	| Internet Explorer	| Opera		| Safari	|
|---				|---		|---				|---				|---		|---		|
|__Soporte Básico__	| 3.0 		|	3.5 (1.9.1) 	| 	9.0				| 10.5 		| 3.1 		|
|__autoplay__ 		| 3.0 		|	3.5 (1.9.1) 	| 	9.0				| 10.5 		| 3.1 		|
|__buffered__ 		| ? 		|	4.0  (2.0) 		| 	? 				| ? 		| ? 		|
|__controls__ 		| 3.0 		|	3.5 (1.9.1) 	| 	9.0				| 10.5 		| 3.1 		|
|__loop__ 	 		| 3.0 		|	11.0 (11.0) 	|	9.0				| 10.5 		| 3.1 		|
|__muted__ 	 		| ?			|	11.0 (11.0) 	|	?				| ?			| ? 		|
|__played__ 		| ?			|	15.0 (15.0) 	|	?				| ?			| ? 		|
|__preload__ 		| 3.0 		|	4.0 (2.0) 	 	|	9.0				| (Yes) 	| 3.1 		|
|__src__ 			| 3.0 		|	3.5 (1.9.1) 	|	9.0 			| 10.5 		| 3.1 		|


	 	 	 	 	 
---

## Video

EL tag video es utilizado para embeber contenido de tipo audio en un documento HTML, este puede soportar una gran cantidad de origenes de audio, representados por el atributo "src" o por multiples tags &lt;source&gt;

	<!-- Ejemplo de video sencillo -->
	<video src="videofile.ogg" autoplay poster="posterimage.jpg">
	  Lo sentimos tu navegador no soporta video nativo en HTML5, 
	  pero no te preocupes lo puedes <a href="videofile.ogg">descargar</a>
	  podras verlo en tu reproductor favorito!
	</video>

	<!-- Video con subtitlos -->
	<video src="foo.ogg">
	  <track kind="subtitles" src="foo.en.vtt" srclang="en" label="English">
	  <track kind="subtitles" src="foo.sv.vtt" srclang="sv" label="Svenska">
	</video>

### Atributos
	
* __autoplay__ : Si se especifica en true el audio se reproducirá automaticamente.
* __autobuffer__ _Obsoleto_: El audio comenzara a descargarce automaticamente, en caso no tener la 
* __buffered__ : Permite determinar el rango de tiempo que ha sido almacenado en el buffer del archivo de medios.
* __controls__ : Permite que el navegador despliege controles para manejar el audio en reproducción , incluyendo el volumen, punto de reproducción , play y pause.
* __crossorigin__ (anonymous, use-credentials, ): Permite establecer el tipo y las credenciales necesarias para la obtencionndel video en el servidor remoto.
* __height__: Establece la altura de la caja de video.   
* __loop__ : Establece que al llegar al final de la reproducción esta comenzara nuevamente desde el inicio.
* __muted__ : Establece que el audio iniciara silenciado.
* __played__ : Establece el rango de tiempo que se ha reproducido.
* __preload__ : (none, metadata, auto, empty) Ermite establecer si el contenido se precargara desde que se despliega el documento.
* __poster__: Url de la imagen que se desplegara antes que el usuario le de play, si no se establecera se vera el primer frame disponible.
* __src__ : La Url del audio embebido, este atributo es opcional cuando se encuentra la etiqueta &lt;source&gt;  

* __width__: Establece el ancho de la caja de video.

### Soporte en el Servidor
Si el MIME type para el video no esta correctamente establecido en el servidor, es posible que el video no pueda ser reproducido y desplegara una cuadro gris con una X (si JavaScript esta habilitado).

### Codecs

+ MPEG-4 ASP
+ H.264
+ Ogg Theora
+ WebM con VP8
+ WebM con VP9

|Formato	|IE 9	|FF 4.0b11 	|Saf 5	|Chrome 9	|Opera 11	|
|---		|---	|---		|---	|	---		|			|
|H.264/MP4	|__Si__	|No			|__Si__	|	__Si__	|No			|
|WebM		|No		|	__Si__	|	No	|	__Si__	|	__Si__	|
|Ogg/Theora	|No		|	__Si__	|	No	|	__Si__	|	__Si__	|


#### Compatibilidad con Navegadores (Desktop)

|Feature			|Chrome	|Firefox (Gecko)	|Internet Explorer	|Opera	|Safari	|
|---				|---	|---				|---				|---	|---	|
|__Soporte Básico__	|	3.0 |	3.5 (1.9.1) 	|	9.0 			|	10.5|	3.1 |
|__autoplay__		|	3.0 |	3.5 (1.9.1) 	|	9.0 			|	10.5|	3.1 |
|__buffered__		|	?	|	4.0 (2.0) 		|	? 				|	Yes |	?	|
|__controls__		|	3.0 |	3.5 (1.9.1) 	|	9.0 			|	10.5|	3.1 |
|__crossorigin__	|	?	|	12.0 (12.0) 	|	? 				|	? 	|	?	|
|__loop__			|	3.0 |	11.0 (11.0) 	|	9.0 			|	10.5|	3.1 |
|__muted__			|	30.0|	11.0 (11.0) 	|	10.0 			|	Yes |	5.0 |
|__played__			|	?	|	15.0 (15.0) 	|	? 				|	Yes |	?	|
|__poster__			|	3.0 |	3.6 (1.9.2) 	|	9.0 			|	10.5|	3.1 |
|__preload__		|	3.0 |	4.0 (2.0) 	 	|	9.0 			|	Yes |	3.1 |
|__src__			|	3.0 |	3.5 (1.9.1) 	|	9.0 			|	10.5|	3.1 |


[Más sobre Video](http://www.html5rocks.com/en/tutorials/video/basics/)