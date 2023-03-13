//estados
let estadoComida = 100;
let estadoJuego = 100;
let estadoLucha = 100;
let estadoDormir = 100;
let estadoVida = 100;
//barras
let barraComida = $("#cBarra");
let barraJuego = $("#jBarra");
let barraLucha = $("#lBarra");
let barraDormir = $("#dBarra");
let barraVida = $("#pBarra");
//texto
let txtDormir = $("#txtDormir");
let txtComida = $("#txtComer");
let txtJuego = $("#txtJugar");
let txtLucha = $("#txtLuchar");
let txtVida = $("#txtPokemon");
//imagen
let imagen = $("#pokemon");
//tiempo s
let intervalo = 3000;

$(document).ready(() => {
  $(".comer1, .comer2, .comer3, .jugar1, .jugar2, .luchar1, .luchar2, .dormir1, .dormir2").click(function(){
    accionBoton($(this).val())
    updateBarra();
  });
});

let restar = setInterval(function(){
  estadoComida -= random(3);
  estadoDormir -= random(3);
  estadoJuego -= random(3);
  estadoLucha -= random(3);
  updateBarra();
  estadoImagen(estadoVida);
  if (
    estadoComida <= 0 &&
    estadoDormir <= 0 &&
    estadoJuego <= 0 &&
    estadoLucha <= 0
  ) {
    estadoVida -= 5;
    updateBarra();
    estadoImagen(estadoVida);
    if(estadoVida == 0){
        if (imagen.attr('src') == 'img/entrenar.png') {
            setTimeout(function() {
                alert("Muelto");
                location.reload();
              }, 1000);    
        }
            clearInterval(restar)
    }
  }
}, intervalo);

function random(n) {
    return Math.floor(Math.random() * n) + 1;
}
function updateBarra() {
  actualizarValores(barraComida, txtComida, estadoComida);
  actualizarValores(barraDormir, txtDormir, estadoDormir);
  actualizarValores(barraJuego, txtJuego, estadoJuego);
  actualizarValores(barraLucha, txtLucha, estadoLucha);
  actualizarValores(barraVida, txtVida, estadoVida);
  estadoImagen(estadoVida);
}

function actualizarValores(name, txt, num) {
  if (num <= 0) {
    name.val(0);
    txt.text(0+"%");
  } else {
    name.val(num);
    txt.text(num + "%");
  }
}

function añadir(c, l, j, d, v) {
  if (estadoComida < 100) {
    if (estadoComida + c >= 100) {
      estadoComida = 100;
    } else if (estadoComida < 0) {
      estadoComida = 0;
    } else {
      estadoComida += c;
    }
  }
  if (estadoLucha < 100) {
    if (estadoLucha + l >= 100) {
      estadoLucha = 100;
    } else if (estadoLucha < 0) {
      estadoLucha = 0;
    } else {
      estadoLucha += l;
    }
  }
  if (estadoJuego < 100) {
    if (estadoJuego + j >= 100) {
      estadoJuego = 100;
    } else if (estadoJuego < 0) {
      estadoJuego = 0;
    } else {
      estadoJuego += j;
    }
  }
  if (estadoDormir < 100) {
    if (estadoDormir + d >= 100) {
      estadoDormir = 100;
    } else if (estadoDormir < 0) {
      estadoDormir = 0;
    } else {
      estadoDormir += d;
    }
  }
  if (estadoVida < 100 || v < 0) {
    if (estadoVida + v >= 100) {
      estadoVida = 100;
    } else if (estadoVida < 0) {
      estadoVida = 0;
    } else {
      estadoVida += v;
    }
  }
}
function accionBoton(x) {
    switch (x) {
        case "zydra":
            añadir(10, -5, -5, -10, 5);
            break;
        case "manzana":
            añadir(5, -1, -3, -3, 3);
            break;
        case "meloc":
            añadir(1, -1, -1, -5, 2);
            break;
        case "furbo":
            añadir(-10, 0, 10, -10, -1);
            break;
        case "coxe":
            añadir(-5, 0, 5, -5, -2);
            break;
        case "boxing":
            añadir(-5, 1, 0, -5, -1, -5);
            break;
        case "espada":
            añadir(-10, 5, 0, -10, -10);
            break;
        case "siesta":
            añadir(-1, -1, -1, 5, 1);
            break;
        case "dormir":
            añadir(-5, -5, -5, 10, 5);
            break;
    }
}

function estadoImagen(vida) {
    if (vida > 70) {
        imagen.attr('src','img/feliz.png');
    } else if (vida <= 70 && vida > 50) {
        imagen.attr('src','img/normal.png');
    } else if (vida <= 50 && vida > 30) {
        imagen.attr('src','img/disgustado.png');
    } else if (vida <= 30 && vida > 0) {
        imagen.attr('src','img/enfadado.png');
    }
    else if (vida == 0){
        imagen.attr('src','img/entrenar.png');
    }
}