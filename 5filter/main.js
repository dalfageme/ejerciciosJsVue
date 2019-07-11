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
    },
    {
        nombre: 'Irene',
        edad: 19
    }
];


let personasConI = personas.filter((p) => {
    return p.nombre.toLowerCase().includes("i");
});

console.log(personasConI);