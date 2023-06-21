<template>
  <div id="app">
    <div class="container">
      <div class="row">
      
        <div class="col">
        <Imagen :galleria='gallery' @mostrarDesc='mostrar'></Imagen>

        </div>
        <div class="col">
        <desc-comp :dataGallery='selectedImg' @clean='borrar' v-if="selectedImg.url != undefined"></desc-comp>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Imagen from "@/components/Imagen.vue"
import Desc from "@/components/Description.vue"

export default {
  name: 'App',
  data() {
    return {
      gallery:[
        {url:"https://picsum.photos/id/684/600/400",author:'Julio',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet magna aliquam erat consequat vehicula. Curabitur viverra non odio vitae porta. Fusce lectus augue, hendrerit hendrerit consequat et, consequat eget purus. Duis lacinia ligula ac urna efficitur, nec maximus magna blandit. Vestibulum tincidunt ligula vel ligula mollis, at consectetur lacus consectetur. In condimentum tellus nisl. Mauris non fermentum metus. Sed et ipsum sed nisi vestibulum imperdiet eu vel justo. Aliquam pharetra elit turpis, ac lobortis elit pulvinar quis. Aenean luctus nunc sit amet diam maximus convallis. Donec nisi elit, pellentesque eu sollicitudin id, fermentum nec lacus. Etiam dapibus massa a tristique porttitor. Phasellus lacinia tempus lacus, eget vehicula sem ullamcorper sed. Aenean malesuada accumsan eros, in dictum ipsum bibendum non'},
        {url:"https://picsum.photos/id/685/600/400",author:'Julio2',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet magna aliquam erat consequat vehicula. Curabitur viverra non odio vitae porta. Fusce lectus augue, hendrerit hendrerit consequat et, consequat eget purus. Duis lacinia ligula ac urna efficitur, nec maximus magna blandit. Vestibulum tincidunt ligula vel ligula mollis, at consectetur lacus consectetur. In condimentum tellus nisl. Mauris non fermentum metus. Sed et ipsum sed nisi vestibulum imperdiet eu vel justo. Aliquam pharetra elit turpis, ac lobortis elit pulvinar quis. Aenean luctus nunc sit amet diam maximus convallis. Donec nisi elit, pellentesque eu sollicitudin id, fermentum nec lacus. Etiam dapibus massa a tristique porttitor. Phasellus lacinia tempus lacus, eget vehicula sem ullamcorper sed. Aenean malesuada accumsan eros, in dictum ipsum bibendum non'},
        {url:"https://picsum.photos/id/686/600/400",author:'Julio3',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet magna aliquam erat consequat vehicula. Curabitur viverra non odio vitae porta. Fusce lectus augue, hendrerit hendrerit consequat et, consequat eget purus. Duis lacinia ligula ac urna efficitur, nec maximus magna blandit. Vestibulum tincidunt ligula vel ligula mollis, at consectetur lacus consectetur. In condimentum tellus nisl. Mauris non fermentum metus. Sed et ipsum sed nisi vestibulum imperdiet eu vel justo. Aliquam pharetra elit turpis, ac lobortis elit pulvinar quis. Aenean luctus nunc sit amet diam maximus convallis. Donec nisi elit, pellentesque eu sollicitudin id, fermentum nec lacus. Etiam dapibus massa a tristique porttitor. Phasellus lacinia tempus lacus, eget vehicula sem ullamcorper sed. Aenean malesuada accumsan eros, in dictum ipsum bibendum non'}
      ],
      selectedImg:{}
    }
  },
  methods: {
    mostrar(index){
      this.selectedImg=this.gallery[index]
    },
    borrar(){
      this.selectedImg={}
    }
  },
  components: {
    Imagen,
    'desc-comp':Desc,
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
