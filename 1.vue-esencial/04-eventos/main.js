//Vue.js

//Crear la instancia

const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'Aprender Vuejs',
            'Aprender ES6',
            'Publicar algo diario'
        ]
    },
    methods: {
        agregarTarea() {
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
});

//Vanilla JavaScript

// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value = '';
// }