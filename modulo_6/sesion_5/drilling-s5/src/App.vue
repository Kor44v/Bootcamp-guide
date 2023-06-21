<template>
  <div id="app">
  <div class="container">
    <div class="row justify-content-center align-items-center g-2">
      <div class="col-5 justify-content-center">
          <Login v-if="!auth" @auth='autorizar'  />
          <div v-if="auth">
          <div >Bienvenido {{user}}</div>
          <Info  :data_api='info'/>

          </div>
      </div>

      

      <!-- <div class="col">
      </div> -->
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Login from "@/components/Login.vue"
import Info from './components/Info.vue'

export default {
  name: 'App',
  data() {
    return {
      info:{},
      auth:false,
      user:''
    }
  },
  methods: {
    autorizar(auth){
      this.auth=auth
    }
  },
  mounted() {

  },
  created(){
    axios
    .get('https://studio-ghibli-films-api.herokuapp.com/api/')
    .then(resp=>{
      this.info = resp
    })
    .catch(err=>{
      console.log(err)
    })

    },
  components: {
    Login,
    Info,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
