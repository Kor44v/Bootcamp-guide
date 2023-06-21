<template>
  <div>
        <div class="p-5 shadow rounded">
    <form action="">
          <label for="" class="form-label">Usuario</label>
          <input v-model="user" type="text"
            class="form-control" name="" id="user" aria-describedby="helpId" placeholder="Username" aria-placeholder="">

          <label for="" class="form-label mt-3">Contraseña</label>
          <input v-model="psw" type="password"
            class="form-control" name="" id="psw" aria-describedby="helpId" placeholder="Password">
        <div class="d-grid gap-2">
          <button type="submit" name="" id="" @click.prevent="auth(user,psw)" class="btn btn-primary mt-4">Login</button>
        </div>
    </form>
        </div>

  </div>
</template>

<script>
export default {
  name: "login-comp",
  created() {},
  data() {
    return {
      user:'',
      psw:'',
      authVar:false,
    };
  },
  props: {},
  methods: {
    auth(user,psw){
      console.log(user,psw)
      if(user=='admin'&&psw=='admin'){
        alert('validacion valida')
        this.authVar=true;
        this.$emit('auth',this.authVar)  
      }
      

    }
  },
};
</script>

<style lang="scss" scoped></style>