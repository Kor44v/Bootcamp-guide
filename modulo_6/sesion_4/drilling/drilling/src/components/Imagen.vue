<template>
  <div class="foto">
    <div  v-for="(image, index) in galleria" :key="index">
      <img :src="image.url" alt="" @click="mostrarDesc(index)">
    </div>
  </div>
</template>

<script>
export default {
  name: "imagen-comp",
  data() {
    return {};
  },
  props: {
    galleria:{
      type:Array,
      required:true
    }
  },
  methods: {
    mostrarDesc(index){
      this.$emit('mostrarDesc',index)
    }
  },
};
</script>

<style scoped>
.foto{
  max-height:850px;
  overflow:auto;
}
</style>