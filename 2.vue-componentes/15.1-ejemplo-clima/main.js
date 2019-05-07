//Componente de Ciudad
Vue.component('ciudad',{
    template: '#ciudad-template',
    props:{
        nombre: String,
        clima: Object,
        general: Object,
        pais: String
    },
    filters: {
        capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        }
      }
      
})



//Vue.js

//Crear la instancia

const vm = new Vue({
    el: 'main',
    data: {
        nombreCiudad:'',
        ciudad: false
    },
    methods: {
        consultarCiudad(){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.nombreCiudad}&appid=26a0e69be1e88f0787140de3f4ea3dd4&units=metric&lang=es`)
                .then((resp) =>{
                    this.ciudad = resp.data;
                })
        }
    }
});