

$(document).ready(function() {
    var estado = "apagado";
    $('#boton').click(function() {
        if (estado === "apagado") {
            $('#imgBoton').attr('src','img/bon.jpg');
            $('#bombilla').attr('src','img/on.jpg');
            $('#valores').show();
            estado = "encendido";
        }
        else{
            $('#imgBoton').attr('src','img/boff.jpg');
            $('#bombilla').attr('src','img/off.jpg');
            $('#valores').hide();
            estado = "apagado"
        }
    });
    $('#zoom').on('input', function() {
        var valor = $(this).val();
        console.log("aaa");
        $('#bombilla').css('transform','scale(0.'+valor+')');

    });
    $('#luz').on('input', function() {
        var valor = $(this).val();
        $('#bombilla').css('opacity','0.'+valor+'0');

    });
  });