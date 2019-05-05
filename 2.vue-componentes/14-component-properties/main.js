//Componente autor

Vue.component('autor', {
    props: ['nombre'],
    template: `<h1>{{nombre}}</h1>`,
    mounted() {
        // Las prps son accesibles desde this
        console.log(this.nombre);
    },
})

//Vue.js

//Crear la instancia

const vm = new Vue({
    el: 'main',
    data: {
        autor: 'Ana Hernández'
    }
});