# Forms

## Detalles

Los formularios son uno de los elementos que más cambios han sufrido en lo que respecta a HTML5, incluyendo una gran cantidad de nuevos formatos de elementos de entrada de datos.

![W3C](http://www.w3.org/Icons/w3c_home)  
[W3C Recomendation](http://www.w3.org/TR/html5/forms.html#forms) 


### Inputs

`ATRIBUTOS`
	
> __placeholder__ ="" : Establece el texto de ayuda o guía para el campo

> __readonly__ : Establece el campo como de solo lectura

> __required__ : Establece el campo como obligatorio

 **Teléfono** _(type=tel)_

 	<input type="tel" name="Celular" pattern='^(\+569[6-9][0-9]{7})$' placeholder="+569********">

 **URL** _(type=url)_

 	<input type="url" name="Referencia" list="urls">
	<datalist id="urls">
		<option label="HTML 5 TAG REFERENCE" value="http://goo.gl/k66HIe">
		<option label="Animate your HTML5" value="http://goo.gl/TIsmyv">
		<option label="The Latest in HTML" value="http://goo.gl/Q9vxE9">
	</datalist>

 **E-mail**  _(type=email)_
	
	<input type="email" name="address" placeholder="felipe.velasquez@tecnova.cl">

 **Date**  _(type=date)_

 	<input type="date" min="2015-07-01" max="2015-07-31">

 **Time**  _(type=time)_

 	<input type="time" max="21:00" min="06:00" step="60" value="00:00">

 **Number**  _(type=number)_

 	<input type="number" min="0" step="0.01" >

 **Range**  _(type=range)_

 	<input type="range" min="100" max="700" step="9.09090909" value="509.090909">

 	<input type="range" min="-100" max="100" value="0" step="10" list="powers">
	<datalist id="powers">
	 <option value="0">
	 <option value="-30">
	 <option value="30">
	 <option value="++50">
	</datalist>

 **Color**  _(type=color)_

 	<input type="color">

 **Reset Button**  _(type=reset)_

	<input type="reset">
