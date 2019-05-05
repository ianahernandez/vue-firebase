Vue.component('candidato', {
    //props: ['nombre', 'correo', 'imagen'],
    props: {
        nombre: {
            type: [Array, String],
            required: true
        },
        correo: {
            type: String,
            default: 'ana@mail.com'
        },
        imagen: {
            type: String
        },
        location: {
            type:Object,
            default(){
                return {
                    ciudad: 'Valencia'
                }
            } 
        } 
    },
    template: '#candidato-template'
});


//Vue.js

//Crear la instancia

const vm = new Vue({
    el: 'main',
    data: {
        candidatos: []
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=50')
                .then((resp) => {
                    this.candidatos = resp.data.results;
                })
        }
    },
    mounted() {
        this.obtenerCandidatos();
    },
});