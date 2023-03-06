function sumar(...x){
    let result = 0;
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        result = result + element;
    }
    return result;
}
console.log(sumar(2,2,2,2,2,2));

function elDNI(nom,ape1,ape2){
    console.log(nom+" "+ape1+" "+ape2);
}
elDNI("Pau","Espinas","Romero");

function hermanoMayor(...x){
    let mayorNum = 0;
    for (let i = 0; i < x.length; i++) {
        const e = x[i];
        mayorNum = (mayorNum < e) ? e:mayorNum; 
    }
    return mayorNum;
}
console.log(hermanoMayor(1,2,3,4,52,6,7));