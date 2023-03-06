let array = ["a", "b", "c", "d", "e"];
let num = 5;
array.forEach( array => {
    
    console.log("Indice: "+ num +" Letra: " + array);
    num = num-1;
    if (num==0) {
        console.log("Fin");
    }
});