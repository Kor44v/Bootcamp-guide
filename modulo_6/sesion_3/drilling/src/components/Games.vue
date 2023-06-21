<template lang="">
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(game, index) in games" :key="index">
      <th>{{index+1}}</th>
      <td>{{game}}</td>
      <td> <button @click='eliminar(index)' class="btn btn-primary">Borrar</button> </td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<script>
export default {
    name:'games-component',
    props:{
        games:{
            type:Array,
            required:true
        }
    },
    methods:{
        eliminar(index){
            this.$emit('borrar',index)
        }
    }
}
</script>
<style lang="">
    
</style>