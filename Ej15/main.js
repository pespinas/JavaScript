let emoji = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
let beti = [];
document.addEventListener("DOMContentLoaded", function() {
    push();
    unshift();
    insert();
    pop();
    shift();
    remove();
    numeros.setAttribute("max", "0");
    numeros2.setAttribute("max", "0");
});
const numeros = document.getElementById("quantity");
const numeros2 = document.getElementById("quantity2");

function check(){
    numeros.setAttribute("max", beti.length);
    numeros2.setAttribute("max", beti.length);
}
function push() {
    const boton = document.getElementById("push");
    boton.addEventListener("click", function() {
        let num = Math.round(Math.random()*(emoji.length-1));
        beti.push(emoji[num]);
        document.getElementById("foo").innerHTML = beti;
        check();
    });
}

function unshift() {
    const boton = document.getElementById("unshift");
    boton.addEventListener("click", function() {
        let num = Math.round(Math.random()*(emoji.length-1));
        beti.unshift(emoji[num]);
        document.getElementById("foo").innerHTML = beti;
        check();
    });
}

function insert() {
    const boton = document.getElementById("insert");
    boton.addEventListener("click", function() {
        let i = document.getElementById('quantity').value;
        let num = Math.round(Math.random()*(emoji.length-1));
        beti.splice(i,0,emoji[num]);
        document.getElementById("foo").innerHTML = beti;
        check();
    });
}

function pop() {
    const boton = document.getElementById("pop");
    boton.addEventListener("click", function() {
        beti.pop();
        document.getElementById("foo").innerHTML = beti;
        check();
    });
}
function shift() {
    const boton = document.getElementById("shift");
    boton.addEventListener("click", function() {
        beti.shift();
        document.getElementById("foo").innerHTML = beti;
        check();
    });
}
function remove() {
    const boton = document.getElementById("remove");
    boton.addEventListener("click", function() {
        let i = document.getElementById('quantity2').value;
        beti.splice(i,1);
        document.getElementById("foo").innerHTML = beti;
        check();
    });
}

