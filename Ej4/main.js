
const arrow = () =>{
    let nom = "Pau";
    let ape = "Espinas";
    return nom + " " + ape;
    
}
console.log(arrow());

function si(x){
    let nom = "Pau";
    let ape = "Espinas-Romero";
    console.log(nom + "-" + ape + "-" +x);
}
si(true);

function infinito(...x){
    x.forEach(element => console.log(element));
}
infinito("1","2","3","4","5");