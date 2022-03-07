<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-5">
        <br>
        <h2>Create News</h2>
        <br>
        <br>
        <br>
        <form @submit.prevent="createNews">
          <div class="form-group">
            <StringInput v-model="form.title" placeholder="Title" />
          </div>
          <div class="form-group">
            <StringInput v-model="form.description" placeholder="Description"/>
          </div>
<br>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Publish</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../../utility/apiRequest/";
import StringInput from "@/components/form/StringInput.vue";

export default {
  components: {
    StringInput,
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
      error: null,
    };
  },
  methods: {
    async createNews() {
      const newNews = await apiRequest.createNews({ ...this.form });
      this.$router.push({ name: "News", params: { id: newNews._id } });
    },
  },
};
</script>
