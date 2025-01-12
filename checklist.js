const agregar = document.getElementById("agregar");
const nueva_tarea = document.getElementById("tarea");
const lista_tarea = document.getElementById("lista");

let tareas = [];

agregar.addEventListener("click", () => {
    const new_tarea = nueva_tarea.value;
    if (new_tarea){
        tareas.push(new_tarea);
        reinicio();
        nueva_tarea.value = "";
    }
});

function reinicio () {
    lista_tarea.innerHTML = "";
    tareas.forEach((tarea) => {
        const list = document.createElement ("li");
        list.textContext = tarea;
        lista_tarea.appendChild(list)
    });
}