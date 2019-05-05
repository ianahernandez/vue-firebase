// Componentes
Vue.component('mis-tareas', {
    template: `<ul><li v-for="tarea in tareas" v-text="tarea.title"></li></ul>`,
    data() {
        return {
            tareas: []
        }
    },
    mounted() {
        this.cargarTareas()
    },
    methods: {
        cargarTareas() {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then((resp) => {
                    this.tareas = resp.data;
                });
        }
    },
});

//Vue.js

//Crear la instancia

const vm = new Vue({
    el: 'main',
});