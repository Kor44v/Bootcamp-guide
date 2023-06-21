<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-6 shadow rounded p-3">
        <form action="">
          <h2 class="text-center mb-3">Contacto</h2>
          <p class="text-center">Para contactarnos puedes escribirnos.</p>
          <div class="mb-3">
            <label for="name" class="form-label">Nombre Completo</label>
            <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo</label>
            <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo">
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contacto-view",
  created() {},
  data() {
    return {
      
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>