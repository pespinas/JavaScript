let al = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
let al2 = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];

for (let i = 0; i < al.length; i++) {

    if (al[i] != "🍔" && al[i] !="🌯" && al[i] !="🍣" && al[i] !="🍕") {
        al[i] = "🍺";   
    }
}
console.log(al);
console.log("------------------------------");
al2.fill("🍺", 4);
console.log(al2);
console.log("------------------------------");


/////////////////////////////////////////////////////////////////////
let pina = ["🍕","🍕","🍍","🍕","🍕"];
const found = pina.find(element => element == "🍍");
if (found == "🍍") {
    console.log("Piña encontrada "+pina);
    const pipsa = pina.filter((item) => item == '🍕')
    console.log("Piña eliminada "+pipsa);
}
console.log("------------------------------");
/////////////////////////////////////////////////////////////////////
let limon = ["🍓","🍋","🍓","🍋","🍓"];
//🍄
limon.forEach(function (value, i) {
    if (value == "🍓") {
        limon[i] = "🍄";
    }
});
console.log(limon);
console.log("------------------------------");
/////////////////////////////////////////////////////////////////////

//🥵 Si añades mas valores siguiendo el patron tambien funciona, gracias al i=3
let hot = ["🌶️","🥛","🌶️","🥛","🌶️","🥛"];
hot.forEach(function (value, i) {
    if (value == "🌶️") {
        hot.splice(i+1, 0, '🥵'); 
        if(i == 3){
            hot.splice(hot.length-1, 0, '🥵'); 
        }
    }
});
 console.log(hot);
 console.log("------------------------------");


let cartas = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
// cartas.forEach(function (value, i) {
//     if (value == "🎴" && cartas[i+1] != "🃏" && cartas[i+1] == "🎴") {
//             cartas.splice(i+1, 0, '🃏');
//     }
// });
for (let i = 0; i < cartas.length; i++) {
    if (cartas[i] == "🎴" && cartas[i+1] != "🃏" && cartas[i+1] == "🎴") {
        cartas.splice(i+1, 0, '🃏');
    }
}
console.log(cartas);




