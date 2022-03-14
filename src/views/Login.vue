<template>
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="@/assets/loginlogo.png" class="img-fluid"
          alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form @submit.prevent="loginUser">
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in:</p>
          </div>
          <hr>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" required v-model="form.email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <!-- <label class="form-label" for="form3Example3">Email address</label> -->
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" required v-model="form.password" id="form3Example4" minlength="6" class="form-control form-control-lg"
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
            <button type="submit" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
</template>
<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
    async loginUser() {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(
          auth,
          this.form.email,
          this.form.password
        );
      } catch (err) {
        this.error = err;
      }
      this.$router.replace({ name: "Home" });
    },
  },
};
</script>
