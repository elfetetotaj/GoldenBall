<template>
  <div class="container">
    <h2>News list</h2>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="field in fields" :key="field">
            <th scope="row">1</th>
            <td>{{ field.title }}</td>
            <td>{{ field.description }}</td>
            <td>
              <div class="btn-group">
                <a type="button" href="http://localhost:8079/createPlayer" class="btn btn-primary">Add</a>
                <a class="btn btn-success">Edit</a>
                <a class="btn btn-danger"> Delete </a>
              </div>
            </td>
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
      this.newsList = await apiRequest.getNewsList();
    },
  },
  data() {
    return {
      fields: [],
    };
  },
};
</script>
