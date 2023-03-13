let estadoComida=100;
let estadoJuego=100;
let estadoLucha=100;
let estadoDormir=100;
let estadoVida=100;
let barraComida = $('#cBarra');
let barraJuego = $('#jBarra');
let barraLucha = $('#lBarra');
let barraDormir = $('#dBarra');
let barraVida = $('#pBarra');
let txtDormir = $('#txtDormir');
let txtComida= $('#txtComer');
let txtJuego= $('#txtJugar');
let txtLucha= $('#txtLuchar');
let txtVida= $('#txtPokemon');
let intervalo = 3000; // 10 segundo

$(document).ready(function() {
    // Definimos la función que se ejecutará cada intervalo de tiempo
    $('.comer1, .comer2, .comer3').click(function() {
       comer($(this).val());
       updateBarra();
     });

    $('.jugar1, .jugar2').click(function() {
        jugar($(this).val());
        updateBarra();
    });
    $('.luchar1, .luchar2').click(function() {
        luchar($(this).val());
        updateBarra();
    });
    $('.dormir1, .dormir2').click(function() {
        dormir($(this).val());
        updateBarra();
    });
    

});
let restar = setInterval(function() {
    estadoComida -= Math.floor(Math.random() * 3) + 1;
    estadoDormir -= Math.floor(Math.random() * 3) + 1;
    estadoJuego -= Math.floor(Math.random() * 3) + 1;
    estadoLucha -= Math.floor(Math.random() * 3) + 1;
    updateBarra();
    // Si la variable llega a cero, detenemos el intervalo
    if (estadoComida <= 0 && estadoDormir <= 0 && estadoJuego <= 0 && estadoLucha <= 0) {
        clearInterval(restar);
    }
}, intervalo);
function updateBarra() {
        ceroEnjoyer(barraComida,txtComida,estadoComida);
        ceroEnjoyer(barraDormir,txtDormir,estadoDormir);
        ceroEnjoyer(barraJuego,txtJuego,estadoJuego);
        ceroEnjoyer(barraLucha,txtLucha,estadoLucha);
        ceroEnjoyer(barraVida,txtVida,estadoVida);
    }
    function ceroEnjoyer(name,txt,num){
        if(num <= 0){
            name.val(0);
            txt.text(0);
        }
        else{
            name.val(num);
            txt.text(num+"%"); 
        }
    }

    function añadir(c,l,j,d,v) {
        if (estadoComida < 100) {
            if (estadoComida+c >= 100) {
                estadoComida=100;
            }
            else if(estadoComida<0){
                estadoComida=0;
            }
            else{
                estadoComida+=c;
            }
        }
        if (estadoLucha < 100) {
            if (estadoLucha+l >= 100) {
                estadoLucha=100;
            }
            else if(estadoLucha<0){
                estadoLucha=0;
            }
            else{
                estadoLucha+=l;
            }
        }
        if (estadoJuego < 100) {
            if (estadoJuego+j >= 100) {
                estadoJuego=100;
            }
            else if(estadoJuego<0){
                estadoJuego=0;
            }
            else{
                estadoJuego+=j;
            }
        }
        if (estadoDormir < 100) {
            if (estadoDormir+d >= 100) {
                estadoDormir=100;
            }
            else if(estadoDormir<0){
                estadoDormir=0;
            }
            else{
                estadoDormir+=d;
            }
        }
        if (estadoVida < 100 || v < 0) {
            if (estadoVida+v >= 100) {
                estadoVida=100;
            }
            else if(estadoVida<0){
                estadoVida=0;
            }
            else{
                estadoVida+=v;
            }
        }
    }

    function comer(fruta) {
        switch (fruta) {
            case "zydra":
                añadir(10,-5,-5,-10,5);
                break;
            case "manzana":
                añadir(5,-1,-3,-3,3);
                break;
            case "meloc":
                añadir(1,-1,-1,-5,2);
                break; 
        }
    }
    function jugar(juego) {
       if(juego == "furbo"){
        añadir(-10,0,10,-10,-1);
       }
       else{
        añadir(-5,0,5,-5,-2);
       }
    }
    function luchar(lucha) {
        if(lucha == "boxing"){
            añadir(-5,1,0,-5,-1,-5);
        }
        else{
            añadir(-10,5,0,-10,-10);
        }
     }
     function dormir(dormir) {
        if(dormir == "siesta"){
            añadir(-1,-1,-1,5,1);
        }
        else{
            añadir(-5,-5,-5,10,5);
        }
     }
