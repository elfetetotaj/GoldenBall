<template>
  <div class="container">
    <h2>Contact list</h2>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="field in fields" :key="field">
            <th scope="row">1</th>
            <td>{{ field.name }}</td>
            <td>{{ field.email }}</td>
            <td>{{ field.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
th {
  text-align: center;
}
</style>
<script>
import apiRequest from "../utility/apiRequest";
import axios from "axios";
export default {
  props: {
    contact: Object,
  },
  components: {},
  created() {
    axios
      .get(`http://localhost:4000/contact/get`)
      .then((response) => {
        this.fields = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    async fetchContact() {
      this.contactList = await apiRequest.getContact();
    },
  },
  data() {
    return {
      fields: [],
    };
  },
};
</script>
