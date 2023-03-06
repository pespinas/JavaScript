function cambiame(parrafo) {
    let result = parrafo.replace(/a/g, "o");
    return result;
}

console.log(cambiame("Hola buenas tardes miarma"));

function argentino(x){
    let y = x.startsWith("aca");
    return y;

}
console.log(argentino("academia"));
console.log(argentino("escuela"));

function abuelo(x){
   dice = (x == "Hola") ?  x.repeat(3):"No te entiendo";
   return dice;
}
console.log(abuelo("Hola"));
console.log(abuelo("EEEEEe"));