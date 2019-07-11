let personas = [
    {
        nombre: 'Steven',
        edad: 24,
    },
    {
        nombre: 'Miriam',
        edad: 19
    },
    {
        nombre: 'Irene',
        edad: 19
    },
    {
        nombre: 'Dario',
        edad: 20,
    },
    {
        nombre: 'David',
        edad: 22
    },
];


let personaConD = personas.find((p) => {
    console.log(p.nombre);
    return p.nombre.toLowerCase().startsWith("d");
});

console.log(personaConD);