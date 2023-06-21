<template>
  <div>
  <button @click="getData()" type="button"  class="btn btn-primary">Ver más</button>
    <div class="row">
        <div class="border" style="width:300px;margin:10px" v-for="(personaje,index) in data" :key="index" >
          <a @click="redirectTo(index+1)">
          <div>
            <h4 :value="index">{{personaje.name}}</h4>
          </div>
          </a>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "info-comp",
  created() {
    try{
      this.getData(1)
    }
    catch{
      throw new Error
    }
  },
  data() {
    return {
      data:[],
      page:1
    };
  },
  props: {},
  methods: {
    getData(){
      fetch(`https://swapi.dev/api/people?page=${this.page}`)
      .then(resp=>resp.json())
      .then(json=>{
        let result = json.results
        result.forEach(personaje=>{
          this.data.push(personaje)
        })
        console.log(this.data)
        this.page++
        })
      .catch(err=>console.log(err))
    },
    redirectTo(i){
      this.$router.push(`/personajes/${i}`)
    }
  },



};
</script>

<style scoped>
</style>