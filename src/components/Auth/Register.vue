<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="User Id">
        <b-input v-model="formData.id" />
      </b-form-group>
      <b-form-group label="Password">
        <b-input v-model="formData.password" type="password" />
      </b-form-group>
      <b-form-group>
        <b-input v-model="formData.email" />
      </b-form-group>
      <b-form-group>
        <b-input v-model="formData.name" />
      </b-form-group>
      <b-form-group>
        <b-input v-model="formData.phone" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import httpUtil from "~/utils/httpUtil";
export default {
  data() {
    return {
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
      console.log(this.formData);
      const resp = await httpUtil.post(
        "/api/authenticate/register",
        this.formData
      );
      console.log(resp);
    },
  },
};
</script>

<style scoped>
</style>