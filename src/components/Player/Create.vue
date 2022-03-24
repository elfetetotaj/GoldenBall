<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-5">
        <br />
        <h2>Create Player</h2>
        <br />
        <br />
        <br />
        <form @submit.prevent="createPlayer">
          <div class="form-group">
            <StringInput v-model="form.name" placeholder="Name" type="text" minlength="3" required/>
          </div>
          <div class="form-group">
            <StringInput v-model="form.lastName" placeholder="Last Name" type="text" minlength="3" required/>
          </div>
          <div class="form-group">
            <StringInput v-model="form.position" placeholder="Position" type="text" minlength="3" required/>
          </div>
          <div class="form-group">
            <NumberInput v-model="form.goals" placeholder="Goals" type="number" minlength="3" required/>
          </div>

          <div class="form-group">
            <StringInput v-model="form.price" placeholder="Price" type="text" required />
          </div>
          <div class="form-group">
            <StringInput v-model="form.team" placeholder="Team" type="text" minlength="3" required/>
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
import apiRequest from "../../utility/apiRequest";
import StringInput from "@/components/form/StringInput.vue";
import NumberInput from "@/components/form/NumberInput.vue";

export default {
  components: {
    StringInput,
    NumberInput,
  },
  data() {
    return {
      form: {
        name: "",
        lastName: "",
        position: "",
        goals: 0,
        price: "",
        team: "",
      },
      error: null,
    };
  },
  methods: {
    async createPlayer() {
       await apiRequest.createPlayer({ ...this.form });
      this.$router.push({ name: "PlayerList"});
    },
  },
};
</script>
