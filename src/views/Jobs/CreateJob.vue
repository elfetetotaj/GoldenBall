<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-5">
        <br />
        <h2>Create Job</h2>
        <br />
        <br />
        <br />
        <form @submit.prevent="createJobs">
          <div class="form-group">
            <StringInput
              v-model="form.name"
              placeholder="Title"
              type="text"
              minlength="3"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              type="text"
              minlength="3"
              v-model="form.description"
              placeholder="Description"
              class="form-control"
              id="texting"
              required
            ></textarea>
          </div>
          <br />
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
    async createJobs() {
      await apiRequest.createJobs({ ...this.form });
      this.$router.push({ name: "JobList" });
    },
  },
};
</script>
