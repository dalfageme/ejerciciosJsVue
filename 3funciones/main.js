function media(){
    let data = Array.from(arguments);
    let suma = data.reduce((prev, current) => prev + current, 0);
    let media = suma / data.length;
    return media;

}

function mayorDeEdad(edad = 0){
    console.log('edad', edad);
    return edad >= 18;
}

console.log(mayorDeEdad(20));
console.log(media(2, 1, 5, 20));

let repeticiones = 1;
let numeroRepeticiones = 3;
let tiempoRepeticion = 2;

let idInterval = setInterval(() => {
    if(repeticiones >= numeroRepeticiones){
        clearInterval(idInterval);
    }
    console.log('Esto se repite cada 4 segundos');
    repeticiones++;
}, tiempoRepeticion * 1000)

// let idTimeout = setTimeout(() => {
//     console.log('Este codigo se ejecutará pasados 4 segundos una única vez')
// }, 4 * 1000)

// console.log('id timeout', idTimeout);
console.log('id intervalo', idInterval);


// NO HACER ESTO NUNCA JAMÁS
let i = 0;
while( i < 5){
    setTimeout(() => console.log("HOLA"), tiempoRepeticion * i * 1000)
    i++;
}
