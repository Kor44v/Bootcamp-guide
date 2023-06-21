<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <games-comp :games="games" @borrar='eliminarGame'></games-comp>
  </div>
</template>

<script>
import Games from './components/Games.vue'

export default {
  name: 'App',
  data() {
    return {
      games: ["Arena of valor", "Pokemon Unite", "Donkey Kong", "Heroesof the storm", "Valorant"]
    }
  },
  methods:{
    eliminarGame(index){
      this.games.splice(index,1)
    }
  },
  components: {
    'games-comp':Games
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
