//Vue.js

//Crear la instancia

const vm = new Vue({
    el: 'main',
    data: {
        busqueda: '',
        minimo: 5,
        juegos: [{
                titulo: 'Battlefield 1',
                genero: 'FPS',
                puntuacion: 9
            },
            {
                titulo: 'Civilizacion VI',
                genero: 'Estrategia',
                puntuacion: 10
            },
            {
                titulo: 'Crash Bandicoot',
                genero: 'Aventura',
                puntuacion: 8
            }
        ]

    },
    computed: {
        mejoresJuegos() {
            return this.juegos.filter(juego => juego.puntuacion >= this.minimo)
        },
        buscarJuegos() {
            return this.juegos.filter(juego => juego.titulo.includes(this.busqueda));
        }
    }
});