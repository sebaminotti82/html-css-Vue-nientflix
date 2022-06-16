const app = new Vue({
    el:'#root',
    data:{
            logo:'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png',
            avatar:'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
            urlFilm:'https://api.themoviedb.org/3/search/movie?',
            urlSerie:'https://api.themoviedb.org/3/search/tv?',
            genreList:'https://api.themoviedb.org/3//genre/movie/list',
            sfondo:'https://www.youmovies.it/wp-content/uploads/2021/04/Nertflix-1.jpg',
            api:'f7a6afff378df2e871aa6b039aab48be',
            film:'',
            serie:'',
            listaFilm:[],
            listaSerie:[],
            generi:[],
            filmList:[],
            seleziona:'',
           
    },
    methods:{
      searchFilm(query){
            const url = this.urlFilm+'api_key='+this.api+'&query='+query
            axios
            .get(url)
            .then(el=>{
                this.listaFilm = el.data.results
                console.log(this.listaFilm);
                this.film=''
                
            })
           
      },
      searchSerie(query){
            const url = this.urlSerie+'api_key='+this.api+'&query='+query
            axios
            .get(url)
            .then(el=>{
                this.listaSerie = el.data.results
                console.log(this.listaSerie);
                this.serie=''
                
            })
       
      },
      locandinaFilm(path){
          if(!path){
              return 'https://christopherscottdesigner.files.wordpress.com/2014/05/this-poster-is-not-available-christopher-scott1.jpg'
          }else {
              return `https://image.tmdb.org/t/p/w342/${path}`
          }
      },

       voto(stella){
           return  parseInt(stella / 2)
       },
       
       flag(code){
            if(code=='en')code='usa'
            if(code=='ja')code=='JP'
           return`https://countryflagsapi.com/png/${code}`
       },
     
       
       
    },
   
      
        

   
    
   


  //FINE
})