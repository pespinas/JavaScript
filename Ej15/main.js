let emoji = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
let beti = [];
document.addEventListener("DOMContentLoaded", function() {
    push();
    unshift();
    insert();
    numeros.setAttribute("max", "0");
});
const numeros = document.getElementById("quantity");


function push() {
    const boton = document.getElementById("push");
    boton.addEventListener("click", function() {
        
        let num = Math.round(Math.random()*(emoji.length-1));
        console.log(num);
        beti.push(emoji[num]);
        document.getElementById("foo").innerHTML = beti;
        numeros.setAttribute("max", beti.length);
    });
}

function unshift() {
    const boton = document.getElementById("unshift");
    boton.addEventListener("click", function() {
        
        let num = Math.round(Math.random()*emoji.length);
        beti.unshift(emoji[num]);
        document.getElementById("foo").innerHTML = beti;
    });
}

function insert() {
    const boton = document.getElementById("insert");
    boton.addEventListener("click", function() {
        
        let num = Math.round(Math.random()*emoji.length-1);
        beti.splice(i,0,emoji[num]);
        document.getElementById("foo").innerHTML = beti;
    });
}

