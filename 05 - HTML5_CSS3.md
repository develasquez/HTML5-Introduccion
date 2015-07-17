# CSS3

CSS es el mecanismo mediante el cual añadimos etilos visuales al documento. La versión 3 incorpora cambios importantes que permiten aplicar estilos especiales, antes de css3 habia que utilizar imagenes o otros trucos para aplicar estos estilos.


# Selectores

Cunando queremos aplicar un determinado estilo a uno o mas elementos debemos llegar a estos mediante selectores.

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

* __Por Atributo__: Es posible llegar a un elemento mediante alguno de sus atributos, para ello se debe especificar el stributo entre corchetes '[type="email"]'

	```CSS
		input[type="email"]{
			border-color:red;
		}
		a[href*="tecnova"]:link{
			color: green;
		}
	```

* __Por Otros medios__: 
	
	+ __:contains__ : Selecciona elementos que contenga el texto indicado.

	```CSS
		p:contains("HTML"){
			....
		}
	```

	+ __:First__ : Es posible obtener el primero de los elementos que coincidan con algun criterio de selectores.

	```CSS
		.entradas:first{
			width:100%;
			margin:1em;
			border : solid 1px #ccc;
			border-radious: 8px;
		}
	```	


	+ __:Last__ : Aplica de la misma forma que __:first__

* Odd
* Even
* 
* >
* :Focus

* Modelo de Caja
* Border
* Padding
* Margin
* Display
* Box-sizing
* Unidades de Medida
* %
* Px
* Em
* Rem
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