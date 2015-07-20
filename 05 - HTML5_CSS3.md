# CSS3

CSS es el mecanismo mediante el cual añadimos etilos visuales al documento. La versión 3 incorpora cambios importantes que permiten aplicar estilos especiales, antes de css3 habia que utilizar imagenes o otros trucos para aplicar estos estilos.


# Selectores

Cunando queremos aplicar un determinado estilo a uno o mas elementos debemos llegar a estos mediante selectores.
Puedes verlos todos en la web de la [W3C](http://www.w3.org/TR/css3-selectors/#selectors)


* __Por tipo__ : Podemos llegar al elemento mediante su tipo HTML, input , div, p, section, etc...

```CSS
	input{
		border-color:blue;
	}
	p{
		padding:1em;
		color: #a2a2a2;
		font-style:italic;
	}
	h1, h2, h3 {
		margin:5px;
	}
```

* __Por Clase__: Este es el selector mas utilizado, ya que permite llegar al elemento mediante su atributo "__class__",para ello se debe anteponer "__.__"(punto) al nombre de la calse del elemento en la hoja de estilos.

```CSS
	.campoPrincipal{
		border-color:blue;
	}
	.parrafoTecnova{
		padding:1em;
		color: #a2a2a2;
		font-style:italic;
	}
	.tituloTecnova {
		margin:5px;
	}
```
* __Por Id__: Es posible llegar a los elementos mediante su Id, para ello se debe anteponer "__#__" al id del elemento en la hoja de estilos.

```CSS
	#txtPrincipal{
		border-color:blue;
	}
	#parrafoDeclaracion{
		padding:1em;
		color: #a2a2a2;
		font-style:italic;
	}
	#tituloPrincipal {
		margin:5px;
	}
```

* __Por Atributo__: Es posible llegar a un elemento mediante alguno de sus atributos, para ello se debe especificar el stributo entre corchetes [type="email"]

```CSS
		input[type="email"]{
			border-color:red;
		}
		a[href*="tecnova"]:link{
			color: green;
		}
```

+ __E:contains__ : Selecciona elementos que contenga el texto indicado.

```CSS
		p:contains("HTML"){
			....
		}
```

+ __E:first-child__ : Es posible obtener el primero de los elementos que coincidan con algun criterio de selectores dentro del padre.

```CSS
		.entradas:first-child{
			width:100%;
			margin:1em;
			border : solid 1px #ccc;
			border-radious: 8px;
		}
```	

+ __E:last-child__ : Aplica de la misma forma que __:first-child__, para seleccionar el último elemento dentro del padre.

+ __E:nth-child > 1,2, ...,  Odd / Even__ : 

```CSS
		li:nth-child(odd) {
		    background: #CCCCCC;
		    color: #fff;
		}

		li:nth-child(even) {
		    background: #A2A2A2;
		    color: #000;

		}

		li:nth-child(1) {
		    background: #000;
		    color: #fff;

		}
```
+ __E::before, ::after__ : Generan un pseudo elemento antes o despues (respectivamente) del elemento seleccionado, a este pseudo elemento se le aplicaran los estilos indicados.

```CSS
	.comentario::after{
		width:16px;
		height:16px;
		background-image:url("colaDeComentatio.png");
	}
```

+ __E:focus__: Este selector se ejecuta cuando el elemento en cuestion obtiene el foco.
	
```CSS
		.btn:focus{
			background-color:#A2A2A2;
		}	
```
+ __E:hover__: Este selector se ejecuta cuando el mouse pasa sobre el elemento en cuestion.
	
```CSS
		.articulo:hover{
			background-color:#D1D1D1;
		}	
```
+ __E + F__: Este selector aplica al elemento imediatamente contiguo (F).

+ __E > F__: Elemento hijo(F) del elemento E.

## Modelo de Caja

<center>
![modelo de caja](https://raw.githubusercontent.com/develasquez/HTML5-Introduccion/master/modelo_caja.png)
</center>

El modelo de caja es la base de la maquetación CSS, permite establecer la apariencia de los distintos elementos que componen el documento. Aprender a manejor este modelo nos permitira hacer practicamente cualquier forma dentro de una web.

Se basa en que cada elemento sujeto a este modelo posee propiedades espaciales que pueden ser modificadas mediante CSS.

__Position__: Cada elemento sujeto al modelo de caja posee una __posición__(_position_) respecto al documento, esta posición por defecto es alineada a la izquierda, posicionando un elemento despues del otro. La posición es posible cambiarta mediante el atributo '__position__: _absolute_ | _relative_ | _fixed_ | ... ;', al establecer los atributos top y left , es posible modificar la posicion de forma manual.

__Margin__: El margen del elemento es incoloro y establece el espacio que tendra reservado este elemento respecto a su contexto. Este valor puede ser positivo y negativo, si se establece positivo, el elemento se separara del sus elementos contiguos, si se establece negativo se acercara a sus elementos contiguos.

__Border__: El borde del elemento puede poseer un color, froma, tamaño y tipo de trazo.

```CSS
	.caja{
		border: solid 2px #000;
		border-radious: 1em;
	}
	.caja2{
		border: dashed 2px #FF00FF;
	}
	.caja3{
		border-top: solid 0px #000;
		border-left: Solid 2px #CCC;
		border-bottom: double 2px #000;
		border-right: none;
	}
```
__Padding__: El Acorchado o relleno del elememento es lo que separa el borde del contenido, este espacio es incoloro, se puede establecer de forma global para los 4 lados o de forma independiente por lado, por defecto al establecer el __padding__ del elemento el width y el height aumentan en razon del padding establecido. Para evitar esto y mantener el ancho y alto sin modificaciones, se debe establecer el atributo '__box-sizing__: _border-box_'.

```CSS
	.caja{
		width: 100px;
		height: 100px;
		padding: 16px;
		background-color:#f7f7f7;
	}
	.caja2{
		width: 100px;
		height: 100px;
		padding: 16px;
		box-sizing:border-box;
		background-color:#f7f7f7;
	}
```

* Display

	+ __flex__ : El modulo de diseño Flexbox tiene como objetivo proveer una via mas eficiante para el diseño del layout en el documento, alinear y distribuir espacios entre los items en el contenedor, incluso cuando su tamaño es desconocido o dinamico , por eso el nombre flex.

```HTML
	<div class="flex">
		<div class="item">
			Hola 1
		</div>
		<div class="item">
			Hola 2
		</div>
		<div class="item">
			Hola 3
		</div>
	</div>
```
```CSS
		.flex{
			display: -webkit-box;
			display: -moz-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-flex-flow: row wrap;
			justify-content: space-around;
		}
		.item{
			width: 33.333%;
			
			/* Optional */
			height: 150px;
			min-width: 150px;
			background: tomato;
		}
```





|Chrome		|Safari		|Firefox	|Opera			|IE				|Android	|iOS		|
|---		|---		|---		|---			|---			|---		|---		|
|21+ (new) 	|3.1+ (old) | 2-21 (old)| 12.1+ (new) 	|10 (tweener) 	|2.1+ (old) | 3.2+ (old)|
|20- (old) 	|6.1+ (new) | 22+ (new) | 				|11+ (new) 		|4.4+ (new) | 7.1+ (new)|


## Unidades de Medida

Para establecer los atributos css son necesarias las unidades de medida, en css las mas importantes son:

+ __%__: Porcentaje, representa un valor de porcentaje respecto al padre del alemento, 
+ __Px__: Pixeles, repesenta el valor en pixeles para la propiedad en custion, es la minima unidad de medida.
+ __Em__: Ems, representa un tamaño relativo el que en teoría a los pixeles que s requieren para representar una M (Mayúscula), como referencia suele represental 16px, si el tamaño de la fuente del documento es cambiado por medio de __font-size__ el valor de __Em__ cambia. Un __Em__ asume el tamaño segun el tamaño de la fuente del elemento padre, por lo tanto el documento puede tener una fuante de 16px , pero tamaño de la fuente establecida para el padre del elemento establecido en __Em__  si es de 12px el __Em__ valdrá 12px.

Esta unidad de medida es muy util para dimencionar elementos que se visualizaran tanto en desktop como en moviles, ya que en moviles el tamaño es un Em puede variar en pixeles segun el tipo de pantalla (Retina Display, Pantallas pequeñas, Full HD).

+ __Rem__: Root Ems (Nuevo en css3), tiene la misma lógica que los __Em__, sin embargo su tamaño relativo se establece tomando en concideración el tamaño de la fuente principal del documento.

* Bordear-radious
* Box-shadow
* Text-shadow
* Transform
* Transiciones
* Animations
* Key Frames
* Gradientes
* Font Faces
* Media Querys
*  Mas populares
* Portrait
* Land Scape
* 320
* 480
* 720
* 1024
* Print
* Pre Procesadores Css
* Grid Sistemas
* Bootstrap
* Ingrid
* Otros 


:valid
:invalid
:optional
:required
:in-range
:out-of-range
:read-write
:read-only