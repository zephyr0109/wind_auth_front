<template>
  <div class="login">
    <h1>Wind Auth Service</h1>
    <b-form @submit="onSubmit" class="form w100p h100p">
      <b-form-group label="User Id" label-for="userId">
        <b-form-input id="id" v-model="formData.id"></b-form-input>
      </b-form-group>
      <b-form-group label="Password" label-for="secvalue">
        <b-form-input
          id="secvalue"
          type="password"
          v-model="formData.password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Sign in</b-button>
      <b-button type="reset" @click="movePage('register')"> Sign up</b-button>
    </b-form>
  </div>
</template>

<script>
import httpUtils from "~/utils/httpUtil";
export default {
  data() {
    return {
      formData: {
        id: "",
        password: "",
      },
    };
  },
  methods: {
    onInputChange(event) {
      console.log(event);
    },
    async onSubmit(event) {
      event.preventDefault();

      let url = "/api/authenticate/signin";
      let response = await httpUtils.post(url, this.formData);
      console.log(response);
      console.log(this.formData.password);
      console.log(this.formData.id);
    },
    movePage(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style scope>
.login {
  min-width: 100px;
  min-height: 100px;
}
.login > .form {
  text-align: left;
}
</style>