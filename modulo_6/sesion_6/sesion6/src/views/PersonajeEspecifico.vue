<template>
  <div>
    <perE :id="id"></perE>
  </div>
</template>

<script>
import PersonajeEspe from '@/components/PersonajeEsp.vue'


export default {
  name: "personajeEs-view",
  created() {},
  data() {
    return {
    };
  },
  props: ['id'],
  // computed:{
  //   id(){
  //     return this.$route.params.id
  //   }
  // },

  methods: {

  },
  components:{
    'perE':PersonajeEspe
  }
};
</script>

<style lang="scss" scoped></style>