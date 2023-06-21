<template>
  <div>
    <h4>Nombre</h4>
    <p>{{dataPersonajes.name}}</p>
    <h4>Genero</h4>
    <p>{{dataPersonajes.gender}}</p>
    <h4>Altura</h4>
    <p>{{dataPersonajes.height}}</p>
    <h4>Número de películas</h4>
    <p>{{dataPersonajes.films.length}} </p>
    

  </div>
</template>

// //TODO:Es probable que el movie data de arriba no vaya ahi

<script>


export default {
  name: "personajeEspecifico-comp",
  created() {
    this.getCharacter(this.id)
  },
  data() {
    return {
      dataPersonajes:{},
      movieData:{},
    };
  },
  props: {
    id:{
      type:String,
      required:true
    }
  },
  methods: {
    
      getCharacter(value){     //TODO:Esta funcion al parecer va en personajesEsp.vue

      fetch(`https://swapi.dev/api/people/${value}`)
      .then(resp=>resp.json())
      .then(json=>{
        this.dataPersonajes=json
      })
      .catch(error=>{
        console.log(error)
      })
  },
  //TODO:Aprender a hacer peticiones con async await
  // async getMovie(url){
  //   let response = await fetch(`${url}`)
  //   let data= await response.json()
  //   console.log(data)
  //   return this.movieData = data.title  }
  },
};
</script>

<style lang="scss" scoped></style>