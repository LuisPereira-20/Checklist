const agregar = document.getElementById("agregar");
const nueva_tarea = document.getElementById("tarea");
const lista_tarea = document.getElementById("lista");

let tareas = [];

agregar.addEventListener("click", () => {
    const tarea = nueva_tarea.value;
    if (tarea){
        tareas.push(tarea);
        reinicio();
        nueva_tarea.value = "";
    }
});

function reinicio () {
    
}