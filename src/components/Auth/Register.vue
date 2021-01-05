<template>
  <div class="register">
    <b-form class="inputSpace" @submit.prevent="onSubmit">
      <b-form-group label="User Id" label-for="id" label-cols-sm="2">
        <b-input v-model="formData.id" id="id" />
      </b-form-group>
      <b-form-group label="Password" label-cols-sm="2">
        <b-input
          type="password"
          v-model="formData.password"
          label-cols-sm="4"
        />
      </b-form-group>
      <b-form-group label="email" label-cols-sm="2">
        <b-input type="email" v-model="formData.email" />
      </b-form-group>
      <b-form-group label="name" label-cols-sm="2">
        <b-input v-model="formData.name" label-cols-sm="4" />
      </b-form-group>
      <b-form-group label="phone" label-cols-sm="2">
        <b-input v-model="formData.phone" label-cols-sm="4" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <label>{{ this.errMsg }}</label>
    </b-form>
  </div>
</template>

<script>
import httpUtil from "~/utils/httpUtil";
export default {
  data() {
    return {
      errMsg: "",
      formData: {
        id: "",
        password: "",
        email: "",
        name: "",
        phone: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      let formData = this._.cloneDeep(this.formData);
      // 유효성 확인

      let paramCheck = this.validateInput(formData);
      if (paramCheck.err) {
        this.errMsg = paramCheck.msg;
        return;
      }

      const resp = await httpUtil.post("/api/authenticate/register", formData);
      console.log(resp);
    },
    validateInput(formData) {
      if (!(formData.password && formData.password.length > 4)) {
        return { err: true, msg: "invalid password" };
      }

      if (!(formData.id && formData.id.length > 4)) {
        return { err: true, msg: "invalid id" };
      }
      if (!(formData.email && formData.email.length > 4)) {
        return { err: true, msg: "invalid email" };
      }
      return { err: false };
    },
  },
};
</script>

<style scoped>
.register {
  text-align: -webkit-center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.register .inputSpace {
  max-width: 500px;
  min-height: 300px;
}
</style>