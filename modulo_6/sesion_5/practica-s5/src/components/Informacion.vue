<template>
  <div>
    <div class="alert alert-primary" role="alert">
      A continuación hay un listado con los nombres de las películas
    </div>
    <div class="mb-3">
      <select v-model="filmSelected" class="form-select form-select-lg" name="" id="">
        <option value=" " selected>Selecciona una película</option>
        <option v-for="(film,index) in filmNames" :value="film" :key="index">{{film}}</option>
      </select>
    </div>
    <Card :film="film"></Card>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/CardInfo.vue'
export default {
  name: "informacion-comp",
  created() {
    this.getData()
  },
  data() {
    return {
      films:[],
      filmNames:[],
      filmSelected:' '
    };
  },
  props: {},
  computed:{
    film(){
      let result = this.films.find((film)=>film.name===this.filmSelected)
      if (result){
        return result
      }else{
        return {}
      }
    }
  },
  methods: {
    getData(){
      axios
      .get('https://studio-ghibli-films-api.herokuapp.com/api/')
      .then(json=>{console.log(json)
        for(let film in json.data){
          this.filmNames.push(this.capitalizeFirstLetter(film))
          let myFilm={
            name:this.capitalizeFirstLetter(film),
            data:json.data[film]
          }
          this.films.push(myFilm)
        }
      })
    },
    capitalizeFirstLetter(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
  },
  components:{
    Card
  }


};
</script>

<style  scoped></style>