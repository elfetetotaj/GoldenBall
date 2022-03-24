<template>
  <div class="bg-white py-5">
    <h1 style="text-align: left; text-indent: 110px">Available Jobs</h1>
    <hr />
    <div class="container py-5">
      <div class="row align-items-center mb-5" v-for="field in fields" :key="field">
        <div class="col-lg-6 order-2 order-lg-1">
          <i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
          <h2 class="font-weight-light">{{field.name}}</h2>
          <p class="font-italic text-muted mb-4">
           {{field.description}}
          </p>
          <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm"
            >Learn More</a
          >
        </div>
        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
          <img
            src="@/assets/jobs1.jpg"
            alt=""
            class="img-fluid mb-4 mb-lg-0"
            style="border-radius: 35px; border: 1px solid black"
          />
        </div>
      </div>
      <hr />
      <div class="row align-items-center  mb-5" v-for="field in fields" :key="field">
        <div class="col-lg-5 px-5 mx-auto">
          <img
            src="@/assets/jobs2.jpg"
            style="border-radius: 35px; border: 1px solid black"
            alt=""
            class="img-fluid mb-4 mb-lg-0"
          />
        </div>
        <div class="col-lg-6">
          <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
          <h2 class="font-weight-light">{{ field.name}}</h2>
          <p class="font-italic text-muted mb-4">
           {{ field.description }}
          </p>
          <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm"
            >Learn More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    jobs: Object,
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
  data() {
    return {
      fields: [],
    };
  },
};
</script>

<style scoped></style>
