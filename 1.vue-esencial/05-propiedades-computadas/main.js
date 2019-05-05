//Vue.js

//Crear la instancia

const vm = new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola mundo',
        nuevaTarea: null,
        tareas: [{
                titulo: 'Aprender Vuejs',
                prioridad: true,
                antiguedad: 23
            },
            {
                titulo: 'Aprender ES6',
                prioridad: false,
                antiguedad: 135
            },
            {
                titulo: 'Publicar todos los dias',
                prioridad: true,
                antiguedad: 8
            }
        ]
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad: 0
            });
            this.nuevaTarea = null
        }
    },
    computed: {
        mensajeAlreves() {
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad() {
            return this.tareas.filter(tarea => tarea.prioridad);
        },
        tareasPorAntiguedad() {
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
});