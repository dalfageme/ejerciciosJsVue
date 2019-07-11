let personas = [
    {
        nombre: 'David',
        edad: 22
    },
    {
        nombre: 'Steven',
        edad: 24,
    },
    {
        nombre: 'Miriam',
        edad: 19
    }
];

personas.sort((p1, p2) => {
    return  p1.nombre > p2.nombre ? 1 : -1; 
});

let sonMayores = personas.every((p) => {
    console.log(p.nombre);
    return p.edad > 18;
});

console.log(sonMayores ? 'son mayores' : 'no son mayores');
console.log(personas);

let presentaciones = personas.map( p => {
    return `Hola soy ${p.nombre} y tengo ${p.edad} años`
});

console.log(presentaciones);