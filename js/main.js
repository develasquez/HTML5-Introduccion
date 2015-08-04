$(function () {
	$(".contenedor").height(window.innerHeight);


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
            '   <div class="detalle">'+dia.fecha+'</div>',
            '   <div class="detalle">',
            '       <img src="img/'+dia.imagen+'" ></div>',
            '   <div class="detalle">',
            '       <div class="temp1">'+dia.maxima+'</div>',
            '       <div class="temp2">'+dia.minima+'</div>',
            '   </div>',
            '   <div class="detalle">'+dia.humedad+'</div>',
            '</li>'
        ].join("\n");
    }