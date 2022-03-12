<template>
  <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100" style="margin-top: 110px;">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <form @submit.prevent="createUser">
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Register:</p>
          </div>
          <hr>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" required v-model="form.email" name="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <!-- <label class="form-label" for="form3Example3">Email address</label> -->
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" required v-model="form.password" name="password" id="form3Example4" minlength="8" class="form-control form-control-lg"
              placeholder="Enter password" />
            <!-- <label class="form-label" for="form3Example4">Password</label> -->
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
             <!-- Submit button -->
          <div v-if="this.error">Error ocurred: {{ this.error }}</div>
          <button class="btn btn-primary" type="submit">Register</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>
        </form>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
<img src="@/assets/registerlogo.png" class="img-fluid"
          alt="Sample image" style="height:320px">
      </div>
    </div>
  </div>
</section>
</template>

<script>
import apiRequest from "@/utility/apiRequest";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
 methods: {
    async createUser() {
      try {
        await apiRequest.registerUser(this.form.email, this.form.password);
        this.$router.replace({ name: "Home" });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>
