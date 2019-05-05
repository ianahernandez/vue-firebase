//Vue.js

//Crear la instancia

const vm = new Vue({
    el: 'main',
    data: {
        personas: []
    },
    mounted() {
        this.cargarPersonas()
    },
    methods: {
        cargarPersonas() {
            axios.get('https://randomuser.me/api/?results=50')
                .then((resp) => {
                    this.personas = resp.data.results;
                })
        }
    },
});