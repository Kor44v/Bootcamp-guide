<template>
  <div>

  <div class="mb-3">
    <input type="text" class="form-control" id="name" v-model="tarea" placeholder="Ingresa una tarea">
    <button type="submit" @click.prevent="agregarTarea" class="btn btn-primary"> Agregar</button>
    <ul v-for="(tarea,index) in tareas" :key="index">
      <li>{{tarea}} <button class="btn btn-primary" type="" @click.prevent="eliminarTarea(index)" >Elimnar</button>
        <button type="" class="btn btn-warning" @click.prevent="editarTarea(index)">Editar</button>
      </li> 
    </ul>
  </div>    

  </div>
</template>

<script>
export default {
  name: "tarea-comp",
  data() {
    return {
      tarea:'',
      tareas:[],
    };
  },
  props: {},
  methods: {
    agregarTarea(){
      this.tareas.push(this.tarea)
      this.tarea=''
    },
    eliminarTarea(index){
      this.tareas.splice(index,1)
    },
    editarTarea(index){
      
      // console.log(typeof index)
      let tareaEditada = prompt('Editar tarea',this.tareas[index])
      // let arrayEditado=[...this.tareas]
      // arrayEditado[index]=tareaEditada
      // this.tareas=arrayEditado

      this.tareas.splice(index,1,tareaEditada)
    }
  },
};

</script>

<style lang="scss" scoped></style>