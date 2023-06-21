
<template>
    <div>
    <div class="row justify-content-center">
      <div class="col-10">
        <div v-for="(artista,index) in rap" :key="index" class="d-inline-block m-5 item-align-center">
          <div>
            <div class="card shadow">
              <img class="card-img-top" :src="artista.image" alt="Title"  style="width:190px">
              <div class="card-body">
                <h4 class="card-title">{{artista.artist}}</h4>
                <p class="card-text">{{artista.album}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "rap-comp",
  created() {},
  data() {
    return {};
  },
  computed:{
    ...mapState(['rap'])
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>