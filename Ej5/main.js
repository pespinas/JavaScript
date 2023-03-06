function random(){
   let num = Math.round(Math.random());
   let resultado = "Cara";
    if (num == 0) {
        resultado = "Cruz";
    }
    return resultado;
}
function random2(){
    let num = Math.round(Math.random());
     switch (num) {
        case 0:
            console.log("Cruz");
            break;
     
        default:
            console.log("Cara");
            break;
     }
 }
 //Bonito bonito
 function random3(){
    let num = Math.round(Math.random());
    return (num == 0) ? "Cruz":"Cara";
 }

console.log(random());
random2();
console.log(random3());