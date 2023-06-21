<template>
  <div>
    <button @click='getInfo' class="btn btn-success">Ingresar datos</button>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <div v-if="fullName!=' '" class="card p-4 sombra">
            <h1>Bienvenid@ {{fullName}}</h1>
            <p>Aquí podrás encontrar información de películas de anime de Studio Ghibli</p>
            <button @click="limpiar" class="btn btn-warning">Limpiar información</button>
          </div>
          <div v-if="fullName!=' '">
            <Info></Info>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Info from '@/components/Informacion.vue'
export default {
  name: "welcome-comp",
  data() {
    return {
      name:'',
      lastName:'',
    };
  },
  props: {},
  computed:{
    fullName(){
      return this.name + ' ' + this.lastName
    }
  },
  methods: {
    getInfo(){
      this.name=prompt('Ingresa tu nombre')
      this.lastName=prompt('Ingresa tu apellido')
      console.log(this.name,this.lastName)
    },
    limpiar(){
      this.name=''
      this.lastName=''
    }
  },
  components:{
    Info
  },
};
</script>

<style lang="css" scoped>
.sombra{
  box-shadow: rgba(204, 0, 255, 0.2) 0px 7px 29px 0px;
}

</style>