//Vue.js

//Crear la instancia

const vm = new Vue({
    el: 'main',
    data: {
        laborales: [
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes"
        ],
        tareas: [{
                nombre: "Hacer la tarea",
                prioridad: "Baja"
            },
            {
                nombre: "Aprender Vue y Firebase",
                prioridad: "Alta"
            }
        ],
        persona: {
            nombre: "Ana",
            profesion: "Desarrollo de software",
            ciudad: "Barquisimeto"
        }
    }
});