<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-5">
        <br>
        <h2>Create Player</h2>
        <br>
        <br>
        <br>
        <form @submit.prevent="createPlayer">
          <div class="form-group">
            <StringInput v-model="form.name" placeholder="Name" />
          </div>
          <div class="form-group">
            <StringInput v-model="form.lastName" placeholder="Last Name"/>
          </div>
          <div class="form-group">
            <StringInput v-model="form.position" placeholder="Position"/>
          </div>
          <div class="form-group">
            <NumberInput v-model="form.goals" placeholder="Goals" />
          </div>

          <div class="form-group">
            <NumberInput v-model="form.price" placeholder="Price"/>
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
import StringInput from "../../Components/form/StringInput.vue";
import NumberInput from "../../Components/form/NumberInput.vue";

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
        goals: "",
        price: "",
      },
      error: null,
    };
  },
  methods: {
    async createPlayer() {
      const newPlayer = await apiRequest.createPlayer({ ...this.form });
      this.$router.push({ name: "Players", params: { id: newPlayer._id } });
    },
  },
};
</script>
