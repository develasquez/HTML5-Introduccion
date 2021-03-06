# CSS3

CSS es el mecanismo mediante el cual añadimos etilos visuales al documento. La versión 3 incorpora cambios importantes que permiten aplicar estilos especiales, antes de css3 habia que utilizar imagenes o otros trucos para aplicar estos estilos.

Te recomiendo que veas las guias de diseño de Google para el 2015 [aquí](https://www.google.com/design/spec/style/color.html)

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
	+ __inline-block__: El valor para display de los elementos div, Section, ul y otros similares es __block__ lo que genera que el elemento utilice por defecto el 100% del ancho del documento, en lo que respecta a su espacio de ubicación, a pesar de que se establece un width menor. Utilizando __display__:_inline-block_; es posible establecer que el elemento utilice solo el width establecido alineandose con los demas elementos que contengan esta propiedad en caso que estos caigan en el ancho del documento.   

	Como dato especial, los elementos con __display__:_inline-block_; poseen un espacio de 1px a su alrededor lo que provoca que si estableces 50% para cada uno los elementos no se mantiene en la misma linea, existen distintas tecnicas para eliminar este espacio, una de ellas es poner un &lt;!-- Comentario --&gt; entre ellos.

	```HTML
		<div class="inline_block_content">
			<div class="inline_block">
				Hola 1
			</div><!--
			--><div class="inline_block">
				Hola 2
			</div><!--
			--><div class="inline_block">
				Hola 3
			</div>
		</div>
	```

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

### Compatibilidad de flex box navegadores. [ver en Can I Use](http://caniuse.com/#feat=flexbox) 
_Chile 89.66%	+	5.01% (con prefijo)	=	94.67% _

|Chrome		|Safari		|Firefox	|Opera			|IE				|Android	|iOS		|
|---		|---		|---		|---			|---			|---		|---		|
|20- (old) 	|3.1+ (old) | 2-21 (old)| 12.1+ (new) 	|10 (tweener) 	|2.1+ (old) | 3.2+ (old)|
|21+ (new) 	|6.1+ (new) | 22+ (new) | 				|11+ (new) 		|4.4+ (new) | 7.1+ (new)|


## Unidades de Medida

Para establecer los atributos css son necesarias las unidades de medida, en css las mas importantes son:

+ __%__: Porcentaje, representa un valor de porcentaje respecto al padre del alemento, 
+ __Px__: Pixeles, repesenta el valor en pixeles para la propiedad en custion, es la minima unidad de medida.
+ __Em__: Ems, representa un tamaño relativo el que en teoría a los pixeles que s requieren para representar una M (Mayúscula), como referencia suele represental 16px, si el tamaño de la fuente del documento es cambiado por medio de __font-size__ el valor de __Em__ cambia. Un __Em__ asume el tamaño segun el tamaño de la fuente del elemento padre, por lo tanto el documento puede tener una fuante de 16px , pero tamaño de la fuente establecida para el padre del elemento establecido en __Em__  si es de 12px el __Em__ valdrá 12px.

Esta unidad de medida es muy util para dimencionar elementos que se visualizaran tanto en desktop como en moviles, ya que en moviles el tamaño es un Em puede variar en pixeles segun el tipo de pantalla (Retina Display, Pantallas pequeñas, Full HD).

+ __Rem__: Root Ems (Nuevo en css3), tiene la misma lógica que los __Em__, sin embargo su tamaño relativo se establece tomando en concideración el tamaño de la fuente principal del documento.

## Nuevos Atributos.

* __Bordear-radious__: 
Esta nueva funcionalidad permite establecer bordes redondeados a los elementos que utilizan el modelo de caja.

```CSS
	.caja{
		border-radius: 16px;
		border: solid 4px lime;

		padding: 1em;
		box-sizing: border-box;
	}
```
Tambien esta propiedad nos sirve para crear elementos circulares.

```CSS
	.btnBkn{
		border-radius: 50%;
		width: 64px;
		height: 64px;
		background-color: red;
		text-align: center;
		line-height: 2em;
		color: white;
		font-size: 2em;
		font-weight: bold;
	}
```
### __Box-shadow__ : 
Esta propiedad permite establecer sombras a los elementos que utilizan el modelo de caja, el uso de este atrubuto consta de 4 valores.
1. Color
2. Posición la derecha
3. Posición a la izquierda
4. Difuminación

```CSS
	.btnBknShadow{
		box-shadow: #A2A2A2 2px 3px 5px;
	}
```

### __Text-shadow__: Esta propiedad permite establecer sombra al texto contenido en el elemento, 

```CSS
	h1.txtCool{
		text-shadow: #04F 2px 2px 3px;
	}
```
### __Transform__ : 
Este atributo es muy poderoso, ya que permite transformar en muchos aspectos un elemento, las posibilidades son:
	1. Scale: Permite cambiar la escala del elemento, Valores entre 0.0 , 1.0 (Valor 100%) o más.
	2. Rotate: Permite rotal el elemento en los 365 grados, valor de tipo __deg__.
	3. Translate: Permite trasladar en los cuatro sentidos se deben establecer 2 valores &lt;derecha&gt;px &lt;altura&gt;px 
	4. Skew: Permite establecer la inclinación del elemento expresada en grados con valor valor de tipo __deg__.

```CSS
	.zoom_1_5{
		-moz-transform: scale(1.5);
		-webkit-transform: scale(1.5);
		-o-transform: scale(1.5);
		-ms-transform: scale(1.5);
		transform: scale(1.5);
	}
	.grados45{
		-moz-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	.desplazar{
		-moz-transform: translateX(-50px) translateY(18px);
		-webkit-transform: translateX(-50px) translateY(18px);
		-o-transform: translateX(-50px) translateY(18px);
		-ms-transform: translateX(-50px) translateY(18px);
		transform: translateX(-50px) translateY(18px);
	}
	.enchular{
		-moz-transform: skewX(25deg) skewY(-6deg);
		-webkit-transform: skewX(25deg) skewY(-6deg);
		-o-transform: skewX(25deg) skewY(-6deg);
		-ms-transform: skewX(25deg) skewY(-6deg);
		transform: skewX(25deg) skewY(-6deg);
	}
	.toditos{
		-moz-transform: scale(1.5) rotate(128deg) translateX(25px) translateY(-60px) skewX(25deg) skewY(-6deg);
		-webkit-transform: scale(1.5) rotate(128deg) translateX(25px) translateY(-60px) skewX(25deg) skewY(-6deg);
		-o-transform: scale(1.5) rotate(128deg) translateX(25px) translateY(-60px) skewX(25deg) skewY(-6deg);
		-ms-transform: scale(1.5) rotate(128deg) translateX(25px) translateY(-60px) skewX(25deg) skewY(-6deg);
		transform: scale(1.5) rotate(128deg) translateX(25px) translateY(-60px) skewX(25deg) skewY(-6deg);
	}
```
### __Transitions__: 
Este atributo permite establecer la animación que se realizará al cambiar un determinado atributo del elemento, es decir, se establece un atributo (o todos usando _all_) el tiempo de duración de la animación y la cuarva de ejecución de la animación. 
	
```CSS
	.element{
		height: 150px;
		background-color: #ABDCEF;
			
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		width: auto;
		max-width: 700px;
		margin: 15% auto;
		transition: transform .3s ease-out,  opacity .2s linear , rotateX .5s, scaleX .5s, scaleY .1s;
		transform: translate(0,-100%) perspective( 300px ) rotateX(40deg) scaleX(.45) scaleY(0); 
	}

	.wow{
  		transform: translate(0,0%) perspective( 600px ) rotateX(0deg) scaleX(1) scaleY(1);
	}

```

|Animación|	Descripción|
|---|---|
|ease|	Valor por defecto. especifica una animación que inicia suvemente luego rapido y termina lentamente.(equivale a cubic-bezier(0.25,0.1,0.25,1))|
|linear|	especifica una animación que conserva la misma velocidad de principio a fin (equivalen a cubic-bezier(0,0,1,1))|
|ease-in|	especifica una animación que inicia lentamente (equivalent to cubic-bezier(0.42,0,1,1))|
|ease-out|	especifica una animación que termina lentamente (equivalent to cubic-bezier(0,0,0.58,1))|
|ease-in-out|	especifica una animación que inicia y termina lentamente (equivalent to cubic-bezier(0.42,0,0.58,1))|
|cubic-bezier(n,n,n,n)|	puedes defnir tus propios valores de velocidad con cubic-bezier. los valores posibles van entre 0.0 y 1.0|
|initial|	Establece esta propiedad segun el valor por defecto para el navegador|
|inherit|	Establece el valor segun lo tenga establecido si elemento padre|

![Chrome Nimations](https://raw.githubusercontent.com/develasquez/HTML5-Introduccion/master/curva%20animaci%C3%B3n.png)


### __Animation__: 
Permite asociar una animación a un elemento, establecida mediante keyframes, los cuales establecen el estado del elemento dado un determinado porcentaje de avance de la animación.

```CSS
	.full {
	  margin: 0 auto;
	  position:absolute;
	  animation: aFull .3s linear; 
	  animation-iteration-count: 1;
	  animation-fill-mode: forwards;
	}

	@keyframes aFull {
	  0% {
	  	top:25%;
	    left: 37.5%;
	    width:25%;
	  }
	  100% {
	    top:0;
	    left: 0; 
	    width:100%;
	    height:100%;
	  }
	}
```

```CSS
	.loader{
		border: solid 6px #000;
		border-top: solid 6px #fff;
		width: 32px;
		height: 32px;
		border-radius: 50%;
  		animation: loader 4s infinite ease-in-out;
	}
		
	@keyframes loader {
		0% {
		
		    transform: rotate(0deg);
		    border: solid 6px red;
			border-top: solid 6px #fff;
		}
		20%{
			border: solid 6px blue;
			border-top: solid 6px #fff;
			 transform: rotate(360deg);
		}
		40%{
			border: solid 6px green;
			border-top: solid 6px #fff;
			 transform: rotate(720deg);	
		}
		60%{
			border: solid 6px yellow;
			border-top: solid 6px #fff;
			 transform: rotate(1080deg);
		}
		80%{
			border: solid 6px orange;
			border-top: solid 6px #fff;
			 transform: rotate(1440deg);
		}
		100% {
			border: solid 6px grey;
			border-top: solid 6px #fff;
		    transform: rotate(1800deg);

		}
	}

```
### __Gradientes__ : 
Permite crear degradados nativos sin la necesidad de utilizar imagenes.
Les recomiendo utilizar [Gradiente Generator](http://www.colorzilla.com/gradient-editor/).


```CSS
	.grad1{
		background: red;
  		background: linear-gradient(red, orange);
	}
```

```CSS
	.grad2{
		background: #87e0fd; /* Old browsers */
		background: -moz-linear-gradient(top,  #87e0fd 0%, #53cbf1 40%, #05abe0 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#87e0fd), color-stop(40%,#53cbf1), color-stop(100%,#05abe0)); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(top,  #87e0fd 0%,#53cbf1 40%,#05abe0 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(top,  #87e0fd 0%,#53cbf1 40%,#05abe0 100%); /* Opera 11.10+ */
		background: -ms-linear-gradient(top,  #87e0fd 0%,#53cbf1 40%,#05abe0 100%); /* IE10+ */
		background: linear-gradient(to bottom,  #87e0fd 0%,#53cbf1 40%,#05abe0 100%); /* W3C */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87e0fd', endColorstr='#05abe0',GradientType=0 ); /* IE6-9 */
	}
```

```CSS
	.grad3{
		background: #6db3f2;
		background: -moz-linear-gradient(top,  #6db3f2 0%, #54a3ee 50%, #3690f0 51%, #1e69de 100%);
		background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#6db3f2), color-stop(50%,#54a3ee), color-stop(51%,#3690f0), color-stop(100%,#1e69de));
		background: -webkit-linear-gradient(top,  #6db3f2 0%,#54a3ee 50%,#3690f0 51%,#1e69de 100%);
		background: -o-linear-gradient(top,  #6db3f2 0%,#54a3ee 50%,#3690f0 51%,#1e69de 100%);
		background: -ms-linear-gradient(top,  #6db3f2 0%,#54a3ee 50%,#3690f0 51%,#1e69de 100%);
		background: linear-gradient(to bottom,  #6db3f2 0%,#54a3ee 50%,#3690f0 51%,#1e69de 100%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6db3f2', endColorstr='#1e69de',GradientType=0 );
	}
```


### __Font Faces__ : 
Esta funcionalidad es fantastica ya que permite utilizar las fuentes que queramos en nuestro proyecto sin la limitación de que el usuario la tenga que tener instalada en su sistema operativo. Hay muchas galerias de fuentes pero una de las mas conocidas es [Google Fonts](https://www.google.com/fonts).

```CSS
	@font-face {
	  font-family: 'FontAwesome';
	  src: url('./fonts/fontawesome-webfont.eot?v=4.1.0');
	  src: url('./fonts/fontawesome-webfont.eot?#iefix&v=4.1.0') format('embedded-opentype'), url('./fonts/fontawesome-webfont.woff?v=4.1.0') format('woff'), url('./fonts/fontawesome-webfont.ttf?v=4.1.0') format('truetype'), url('./fonts/fontawesome-webfont.svg?v=4.1.0#fontawesomeregular') format('svg');
	  font-weight: normal;
	  font-style: normal;
	}
```
### __Media Querys__: 
En sistesis un media query es un IF en el CSS, lo que permite aplicar ciertos estilos cuendo se cuemple con el criterio.
Lean [MDN - Media Query](https://developer.mozilla.org/es/docs/CSS/Media_queries)

```HTML
	<!-- CSS media query on a link element -->
	<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
	<!-- CSS media query within a style sheet -->
	<style>
	@media (max-width: 600px) {
	  .facet_sidebar {
	    display: none;
	  }
	}
	</style>
```


```CSS
	@media screen and (max-width: 320px) {

	}
	@media screen and (min-width: 320px) and (max-width: 640px){
	
	}
	@media screen and (min-width: 640px) and (max-width: 768px){
	   
	}
	@media screen and (min-width: 768px) {

	}

	@media all and (min-width: 1440px) {

	}

```

### __Grid Sistemas__
	* Como Funcionan [1](https://css-tricks.com/dont-overthink-it-grids/) - [2](http://www.sitepoint.com/understanding-css-grid-systems/)
	* [Bootstrap](http://getbootstrap.com/css/#grid)
	* [Ingrid](http://piira.se/projects/ingrid/)
	* Otros [unsemantic](http://unsemantic.com/) [getskeleton](http://getskeleton.com/)

### __Pre Procesadores Css__ : Se esta convietiendo en una tendencia creciente, permite crear CSS de forma más comoda, con menos codigo y más limpia.

* __SaSS__ : [http://sass-lang.com/guide](http://sass-lang.com/guide)
* __Stylus__: [https://github.com/stylus/stylus](https://github.com/stylus/stylus)
* _Stylus_ + __Nib__: [http://nibstyl.us/docs/](http://nibstyl.us/docs/)

```CSS
	button
  	  border-radius 1px 2px / 3px 4px

	button
	  border-radius 5px

	button
	  border-radius bottom 10px
```

```CSS
	button {
	  -webkit-border-radius: 1px 2px/3px 4px;
	  -moz-border-radius: 1px 2px/3px 4px;
	  border-radius: 1px 2px/3px 4px;
	}
	button {
	  -webkit-border-radius: 5px;
	  -moz-border-radius: 5px;
	  border-radius: 5px;
	}
	button {
	  -moz-border-radius-topleft: 10px;
	  -webkit-border-top-left-radius: 10px;
	  border-top-left-radius: 10px;
	  -moz-border-radius-bottomright: 10px;
	  -webkit-border-bottom-right-radius: 10px;
	  border-bottom-right-radius: 10px;
	}
```


Pruebas 

.contenedor>(header>(h1{Hoy}))+div>.pronostico>(.grados+.textPronostivo>h3)+.flex.detPronostico>(.maxima.flex(div*4)+.minima.flex(div*4))

.contenedor>(header>(h1{Por Días}))+ul.dias>(li.diaLista>((.detalle.dia{LUN $})+(.detalle.icono>img)+(.detalle>(.temp1{16°}+.temp2{1°}))+(.detalle.humedad{10%})))*5


```JS
	$(".contenedor").height(window.innerHeight);
```

```HTML
	   <div class="contenedor hoy">
       <header>
           <h1>Hoy</h1>
       </header>
           <div > 
               <div class="pronostico">
                   <div class="grados">10°</div>
                   <div class="textPronostivo">
                       <h3>Muy Muboso</h3>
                   </div>
                   <div class=" detPronostico">
                       <div class="maxima flex">
                           <div class="temp">16°</div>
                           <div class="enLetras">hoy <br> Parc. soleado </div>
                           <div class="datos"> Sensación <br> térmica <br> Humedad <br> Visivilidad</div>
                           <div class="datos"> 10° <br> <br> 62% <br> 9km </div>
                       </div>
                       <div class="minima flex">
                           <div class="temp">1°</div>
                           <div class="enLetras">Esta Noche  <br> Despejado   </div>
                           <div class="datos">Barómetro <br> Viento <br> Indice UV </div>
                           <div class="datos">1023 mb <br> 0 km/h <br> 2 (Mín)</div>
                       </div>
                   </div>
               </div>
           </div>
   		</div>
        <div class="contenedor">
            <header>
                <h1>Por Días</h1>
            </header>
                <ul class="dias">
                    <li class="diaLista flex">
                        <div class="detalle">LUN 10</div>
                        <div class="detalle">
                            <img src="img/sunny.png" alt="Sol"></div>
                        <div class="detalle">
                            <div class="temp1">16°</div>
                            <div class="temp2">1°</div>
                        </div>
                        <div class="detalle">10%</div>
                    </li>
                    <li class="diaLista flex">
                        <div class="detalle">MAR 11</div>
                        <div class="detalle">
                            <img src="img/snow4.png" alt="Sol"></div>
                        <div class="detalle">
                            <div class="temp1">16°</div>
                            <div class="temp2">1°</div>
                        </div>
                        <div class="detalle">10%</div>
                    </li>
                    <li class="diaLista flex">
                        <div class="detalle">MIE 12</div>
                        <div class="detalle">
                            <img src="img/tstorm1.png" alt="Sol"></div>
                        <div class="detalle">
                            <div class="temp1">16°</div>
                            <div class="temp2">1°</div>
                        </div>
                        <div class="detalle">10%</div>
                    </li>
                    <li class="diaLista flex">
                        <div class="detalle">JUE 13</div>
                        <div class="detalle">
                            <img src="img/sleet.png" alt="Sol"></div>
                        <div class="detalle">
                            <div class="temp1">16°</div>
                            <div class="temp2">1°</div>
                        </div>
                        <div class="detalle">10%</div>
                    </li>
                    <li class="diaLista flex">
                        <div class="detalle">VIE 14</div>
                        <div class="detalle">
                            <img src="img/sunny.png" alt="Sol"></div>
                        <div class="detalle">
                            <div class="temp1">16°</div>
                            <div class="temp2">1°</div>
                        </div>
                        <div class="detalle">10%</div>
                    </li>
                </ul>
        </div>
```

```CSS	
	html{
	    height: 100%;
	}
	body{
	    background: #000;
	    background: linear-gradient(#000, #333);
	    background-repeat: no-repeat;
	    background-attachment: fixed;
	    height: 100%;
	}

	.contenedor{
	    color: #fff;
	    height: 100%;
	    width: 50%;

	}
	header{
	  padding:1rem;
	  margin-bottom: 1rem;  
	}
	header h1{
	    font-weight: 100;
	    margin: 0 0 0 1rem;
	}

	/* Hoy */
	.hoy{
	    background-image: url("../img/Nublado_Sol.png");
	    background-size: 100% 100%;
	    font-weight:100;
	    text-shadow:#000 1px 1px 5px;
	}
	.grados{
	    margin-left:1rem;
	    
	    font-size:900%;
	}
	.detPronostico{
	  margin:1rem;
	}
	.textPronostivo{
	    margin-left: 1rem;
	}
	.pronostico{
	  position: absolute;
	  bottom: 0;
	  margin-bottom: 2rem;
	  width: 100%;
	}
	.temp{
	    font-size:200%;
	    width: 15%;
	}
	.enLetras{
	    width:35%;
	}
	.datos{
	    width:20%;
	}

	/* Por días */

	.dias{
	    list-style: none;
	    padding: 0;
	}
	.diaLista{
	    background-color: #242424;
	    box-sizing: border-box;
	    height: 6rem;
	    margin: 1rem;
	    border-radius: 8px;
	    box-shadow: #555 1px 3px 12px;
	}

	.flex{
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-flex-flow: row wrap;
	    justify-content: space-around;
	}
	.detalle{
	    box-sizing: border-box;
	    padding: 1.3rem 0 2rem 0;
	    text-align: center;
	    width: 25%;
	    text-shadow: #555 1px 3px 12px;;

	}


	.detalle img{
	    width: 75%;
	    max-width: 72px;
	}

	.temp1{
	    font-size: 1.3em;
	}


	.temp2{
	    color: #A2A2A2;
	}


	/* Media Querys*/


	@media screen and (max-width: 320px) {
	   .contenedor {
	        width : 100%;
	   }
	}

	@media screen and (min-width: 320px) and (max-width: 640px){
	      .contenedor {
	        width : 100%;
	   
	        /* height: 100%; */
	}
```
