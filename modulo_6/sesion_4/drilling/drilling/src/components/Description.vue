<template>
    <div class="row">
        <div class="col">
          <img :src="dataGallery.url" alt="">
          <div>
            autor:{{dataGallery.author}}
          </div>
        </div>
        <button @click="clean" type="">Cerrar</button>
        <div class="col">
          {{dataGallery.desc}}
        </div>
  </div>
</template>

<script>
export default {
  name: "desc-comp",
  data() {
    return {};
  },
  props: {
    dataGallery:{
      type:Object,
      required:true
    }
  },
  methods: {
    clean(){
      this.$emit('clean')
    }
  },
};
</script>

<style lang="scss" scoped></style>