# HTML5

## Detalles

El Objetivo de este tutorial es servir como material de apoyo para el curso de introducción a HTML5.
Presenta de forma breve algunos de los nuevos elementos y funcionalidades de HTML5.
La información y ejemplos estan basados en la documentacion oficial provisto por la [World Wide Web Consortium](http://www.w3.org/)

![W3C](http://www.w3.org/Icons/w3c_home)  
[W3C Recomendation](http://www.w3.org/TR/html5/forms.html#forms) 

## Doctype

> El DOCTYPE es requerido por razones historicas. cuando es omitido los navegadores utilizan diferentes formas de renderizar el contenido, omitirlo es incompatible con alunas especificaciones. Incluir el DOCTYPE en el documento asegura que el navegador intentara utilizar las especificaciones necesarias para una correcta implementacion.

__HTML 5__

	<!DOCTYPE html>

__HTML 4.01 Strict__

_Esta delaración contiene todos los atributos y elementos de HTML, pero NO INCLUYE los elementos descontinuados y de representación (como font). Los Frameset no estan permitidos._

	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
						"http://www.w3.org/TR/html4/strict.dtd">

__HTML 4.01 Transitional__

_Esta delaración contiene todos los atributos y elementos de HTML, pero INCLUYE los elementos descontinuados y de representación (como font). Los Frameset no estan permitidos._

	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
						"http://www.w3.org/TR/html4/loose.dtd">

__HTML 4.01 Frameset__

_Esta declaración es igual a HTML 4.01 Transitional, pero permite el uso de framesets._

	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" 
					"http://www.w3.org/TR/html4/frameset.dtd">

__XHTML 1.0 Strict__

_Esta delaración contiene todos los atributos y elementos de HTML, pero NO INCLUYE los elementos descontinuados (como font). Los Frameset no estan permitidos. Este doctype permite escribir el contenido en XML correctamente formado._

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
					"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

__XHTML 1.0 Transitional__

_Esta delaración contiene todos los atributos y elementos de HTML, INCLUDING presentational and deprecated elements (como font). Los Frameset no estan permitidos. Este doctype permite escribir el contenido en XML correctamente formado._

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
					"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

__XHTML 1.0 Frameset__

_Esta declaración es igual a XHTML 1.0 Transitional, pero permite el uso de framesets._

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" 
					"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">

__XHTML 1.1__

_Esta declaración es igual a XHTML 1.0 Strict, pero te permite añadir módulos (por ejemplo para poveer soporte a ruby para lenguajes del este Asiático)._

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" 
					"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">


## Meta Tags
__Lang__ : _Es utilizado para definir en que idioma esta escrito el documento (Muy útil para los motores de búsqueda)_

	<html lang="es">

__Charset__ : _Es utilizado para establecer el conjunto de caracteres a utilizar en el documento, si deseas utilizar , Acentos, Ñ's, y otros caracteres especiales debes utilizar UTF-8 , otro que es utilizado comunmente es iso-8859-1._ 

_UTF-8 is a multibyte encoding that can represent any Unicode character. ISO 8859-1 is a single-byte encoding that can represent the first 256 Unicode characters. Both encode ASCII exactly the same way._

	<meta charset='utf-8' />

__Viewport__ : _Este meta tag es en especial utilizado para tener una mejor relación con los dispositivos moviles, ya que adapta el ancho del documento al ancho de la pantalla , evitando que el usuario deba hacer zoom para poder leer el contenido del documento, tambien establece la escala en la que se va a mostrar y si puede o no hacer zoom el usuario, __la implementacion de este metatag varia en algunos dispositivos tanto por modelo o marca__ _

	<meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">

__HandheldFriendly__ : _Este Tag era ulitizado originalmente para reconocer las paginas adaptadas para móviles en los navegadores de AvantGo (Palm OS), sin embargo hoy se utiliza solo con el objetivo de declarar que el documento es compatible con moviles. Se desconoce el rango de navegadores que soporta este tag __Viewport cumple actualmente con este objetivo__ _

	<meta name="HandheldFriendly" content="True">


__MobileOptimized__ : _Esta es otra manera en la que se prtendia identificar el documento con contenido móvil, El objetivo principal era establecer el ancho requerido para representar de forma correcta el contenido. Se desconoce el rango de navegadores que soporta este tag. __Viewport cumple actualmente con este objetivo__ _ 

	<meta name="MobileOptimized" content="320"/>  

__mobile-web-app-capable__ : _ Si el atributo __content__ esta en 'yes' , el documento sera ejecutado en pantalla completa, de lo contrario no. El uso por defecto es para mostrar contenido web como una aplicación en Safari. _
_ Puedes saber si la pagina se esta deplegando en pantalla completa utilizando window.navigator.standalone mediante javascript._

	<meta name="mobile-web-app-capable" content="yes">

__description__:Es un atributo que provee el significado conciso del documento en cuestión. El Meta description es comunmente utilizado por los motores de búsqueda para mostrar una vista previa del contenido de la pagina en los reslutados de dicha búsqueda.

Este no posee un largo en caracteres definido , sin embargo los motores de búsquea los truncan al rededor de los 160 caracteres.

	<meta name="description" content="">

## Elementos Utiles

_Podemos establecer el icono que tendra nuestra web cuando la guarden como acceso directo desde el launcher del dispositivo.

	<link rel="apple-touch-icon" href="apple-touch-icon-iphone.png">
	<link rel="apple-touch-icon" sizes="76x76" href="touch-icon-ipad.png">
	<link rel="apple-touch-icon" sizes="120x120" href="touch-icon-iphone-retina.png">
	<link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad-retina.png">

HTML Semántico
	
* __body__: 
* __article__:
* __section__:
* __nav__:
* __aside__:
* __h1, h2, h3, h4, h5, and h6__:
* __header__:
* __footer__:
* __address__:

```HTML
	<article itemscope itemtype="http://schema.org/BlogPosting">
	 <header>
	  <h1 itemprop="headline">The Very First Rule of Life</h1>
	  <p><time itemprop="datePublished" datetime="2009-10-09">3 days ago</time></p>
	  <link itemprop="url" href="?comments=0">
	 </header>
	 <p>If there's a microphone anywhere near you, assume it's hot and
	 sending whatever you're saying to the world. Seriously.</p>
	 <p>...</p>
	 <section>
	  <h1>Comments</h1>
	  <article itemprop="comment" itemscope itemtype="http://schema.org/UserComments" id="c1">
	   <link itemprop="url" href="#c1">
	   <footer>
	    <p>Posted by: <span itemprop="creator" itemscope itemtype="http://schema.org/Person">
	     <span itemprop="name">George Washington</span>
	    </span></p>
	    <p><time itemprop="commentTime" datetime="2009-10-10">15 minutes ago</time></p>
	   </footer>
	   <p>Yeah! Especially when talking about your lobbyist friends!</p>
	  </article>
	  <article itemprop="comment" itemscope itemtype="http://schema.org/UserComments" id="c2">
	   <link itemprop="url" href="#c2">
	   <footer>
	    <p>Posted by: <span itemprop="creator" itemscope itemtype="http://schema.org/Person">
	     <span itemprop="name">George Hammond</span>
	    </span></p>
	    <p><time itemprop="commentTime" datetime="2009-10-10">5 minutes ago</time></p>
	   </footer>
	   <p>Hey, you have the same first name as me.</p>
	  </article>
	 </section>
	</article>
```HTML

Inputs
Meta data
Boilerplate 
Descargar y entender boilerplate.
Zen Koding / Emmet
Cheatcheet
Snippets
Como crear
Mi código Favorito
Consideraciones Móviles
Meta Tags
No Usar Tablas
Framework
JQuery Mobile
Ionic
Mobile Boilerplate
