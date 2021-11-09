
//let arrayE = [1, 2, 3, 4,5, 6];
//arrayE.map(x => x*x).forEach(x => console.log(x))



let moment = require('moment');

let Fechas = require("./fechas");
let birthday = moment("13/02/1991", "DD/MM/YYYY");

let fecha = new Fechas(birthday);





/*
let num = 10000;
let obj= {};
for (let index = 0; index < num.length; index++) {
    let numRandom = Math.ceil(Math.random()*20)
    obj[numRandom] = obj[numRandom] ? obj[numRandom] +1 : 1;
};
*/
/*
const products = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.9 },
];

let res = products.reduce(( prev, obj, i )=>{
    if (i == 0) {
        return {
            nombre: obj.nombre,
            total: obj.precio,
            minor: obj,
            mayor: obj,
        };
    }else{
        let minor = prev.minor.precio < obj.precio ? prev.minor : obj;
        let mayor = prev.mayor.precio < obj.precio ? prev.mayor : obj;
        return {
            nombre: prev.nombre + ', ' +obj.nombre,
            total: parseFloat((prev.total + obj.precio).toFixed(2)),
            minor,
            mayor
        }
        
    }
}

, {});

res.promedio = parseFloat( (res.total / products.length).toFixed(2))

console.log('Respondo ', res);
*/









console.log( " Mi getToDay", fecha.getToDay())
console.log( " Mi getMyBirth", fecha.getMyBirth())
console.log( " Mi diffYears", fecha.diffYears())
console.log( " Mi diffDays", fecha.diffDays())
console.log( " Mi getDifference months", fecha.getDifference('months'));
