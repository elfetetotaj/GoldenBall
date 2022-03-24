<template>
  <div class="container">
    <br />
    <div class="row">
      <h2>News list</h2>
      <div class="btn-group">
        <a
          type="button"
          href="http://localhost:8079/createNews"
          class="btn btn-primary"
          >Add</a
        >
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="field in fields" :key="field">
            <td>{{ field.title }}</td>
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
    news: Object,
  },
  components: {},
  created() {
    axios
      .get(`http://localhost:4000/news/list`)
      .then((response) => {
        this.fields = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    async fetchews() {
      this.newsList = await apiRequest.newsList();
    },
  },
  data() {
    return {
      fields: [],
    };
  },
};
</script>
