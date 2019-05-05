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
            this.$http.get('https://randomuser.me/api/?results=50')
                .then((resp) => {
                    console.log(resp);
                    this.personas = resp.body.results;
                })
        }
    },
});