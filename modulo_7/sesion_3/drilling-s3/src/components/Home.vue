<template>
  <div>
    <div class="container">
      <div class="row p-5 bg-dark text-white border border-5">
        <div class="col text-center">
          <h1>Open Music</h1>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <h2 class="mb-5">Categorías</h2>
        <div class="col-2">
          <router-link to="/pop" class="btn btn-success w-100">Pop</router-link>
          </div>
        <div class="col-2">
          <router-link to="/rock" class="btn btn-success w-100">Rock</router-link>
          </div>
        <div class="col-2">
          <router-link to="/rap" class="btn btn-success w-100">Rap</router-link>
          </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home-view",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>

</style>