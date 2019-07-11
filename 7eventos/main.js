window.addEventListener("load", () => {
    console.log('Ventana cargada correctamente');

    let aniadirTarea  = document.getElementById('aniadirTarea');
    let inputTarea = document.getElementById('nombreTarea');
    let lista = document.getElementById('tareas');

    aniadirTarea.addEventListener('click', ()=> {
        let nombreTarea = inputTarea.value; // tomar valor del input

        let li = document.createElement('li'); // <li> </li>
        li.innerText = nombreTarea; // <li> nombre tarea </li>
        lista.appendChild(li); // añadir el li a la lista

        inputTarea.value = ""; // resetear valor del input
    })
});
