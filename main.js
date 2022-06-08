const app = new Vue({
    el:'#root',
    data:{
      logoApp:'https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png',
      userAvatar:'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
      url:'https://api.themoviedb.org/3/search/movie?',
      api_key:'f7a6afff378df2e871aa6b039aab48be',
      search:'',
      movieData:'null'
    },
    mounted(){

    },
    methods:{
        cercaTitolo(query){

            const url = this.url + 'api_key=' + this.api_key + '&query=' + query
            axios
            .get(url)
            .then((film)=>{
                this.movieData = film.data
                console.log(this.movieData);
                this.search=''
            })
        },

        posterFilm(path){

            if(!path){
                return `https://christopherscottdesigner.files.wordpress.com/2014/05/this-poster-is-not-available-christopher-scott1.jpg`
            } else {
                return`https://image.tmdb.org/t/p/w185/${path}`
            }
        },
        flags(code){
            if(code=='en') code = 'usa'
            return `https://countryflagsapi.com/png/${code}`

        },

        stelle(voto){
              return parseInt(voto / 2)
        }

    }
})


/*
Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. 
Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
	1.	Titolo
	2.	Titolo Originale
	3.	Lingua
Voto

/*

Milestone 2:
Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote :P)
Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca 
dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

*/
