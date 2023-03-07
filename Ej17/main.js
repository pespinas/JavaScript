
$(document).ready(function() {
    let player = 0;
    let computer = 0;
    let armasComputer = ["piedra","papel","tijeras"];
    let num;

    $('#piedra').click(function() {
        batalla("piedra",compArma());
    });

    $('#papel').click(function() {
        batalla("papel",compArma());
    });

    $('#tijeras').click(function() {
        batalla("tijeras",compArma());
    });
    $('#reset').click(function() {
        player = 0;
        computer = 0;
        $('#reset').css('visibility','hidden');
        $('#final').text("Elije tu arma:").css('visibility', 'visible');
        $('#result').text("Vas: "+player+" a "+computer).css('visibility', 'visible');
        mostrar(0);
    });

    function mostrar(x){
        if (x == 1) {
            $('#piedra').css('visibility', 'hidden');
            $('#papel').css('visibility', 'hidden');
            $('#tijeras').css('visibility', 'hidden');
        }
        else{
            $('#piedra').css('visibility', 'visible');
            $('#papel').css('visibility', 'visible');
            $('#tijeras').css('visibility', 'visible');
        }

    }
    function puntuacion(p) {
        
        console.log(player + " y " + computer);
        $('#result').text("Vas: "+player+" a "+computer).css('visibility', 'visible'); 

        if(player != '3' && computer != '3' ){
            (p=="1")? player++:computer++;
        }
        else{
            if(player == '3'){
                $('#final').text("Has ganado crack "+player+" a "+computer).css('visibility', 'visible'); 
                $('#reset').css('visibility', 'visible');
                $('#resetImg').attr("src", "img/win.jpg");
                mostrar(1);
                
            }
            else if(computer == '3'){
                $('#final').text("Has perdido crack "+player+" a "+computer).css('visibility', 'visible');
                $('#reset').css('visibility', 'visible'); 
                $('#resetImg').attr("src", "img/lose.jpg");
                mostrar(1);
            }
        }
    }
    function batalla(play,comp){
        $('#empate').css('visibility', 'hidden');
        console.log(play+"-----"+comp);
        if((play == "piedra" && comp == "tijeras")
        ||(play == "papel" && comp == "piedra")
        ||(play == "tijeras" && comp == "papel")){
            puntuacion("1");
        }
        else if(play == comp){
            $('#empate').text("Empate dale otra vez").css('visibility', 'visible');
        }
        else{
            puntuacion("0");
        }
    }

    function compArma() {
        
        num = Math.floor(Math.random() * 3);
        return armasComputer[num];
        
    }

});