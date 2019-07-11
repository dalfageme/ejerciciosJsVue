let persona = {
    nombre: "David",
    evaluacion: [
        {
            asignatura: "mates",
            nota: 1
        },
        {
            asignatura: "mates2",
            nota: 2
        },
        {
            asignatura: "mates3",
            nota: 3
        },
    ],
    media: function(){
        return this.evaluacion.reduce(((previo, actual) =>  previo + actual.nota), 0) / this.evaluacion.length;
    }
}

console.log(persona.media());