<template>
  <div class="container">
    <br />
    <div class="row">
      <h2>Jobs list</h2>
      <div class="btn-group">
        <a
          type="button"
          href="http://localhost:8079/createJobs"
          class="btn btn-primary"
          >Add</a
        >
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="field in fields" :key="field">
            <td>{{ field.name }}</td>
            <td>{{ field.description }}</td>
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
import apiRequest from "../../utility/apiRequest";
import axios from "axios";
export default {
   props: {
    job: Object,
  },
  components: {},
  created() {
    axios
      .get(`http://localhost:4000/job/get`)
      .then((response) => {
        this.fields = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    async fetchJob() {
      this.jobsList = await apiRequest.jobsList();
    },
  },
  data() {
    return {
      fields: [],
    };
  },
};
</script>
