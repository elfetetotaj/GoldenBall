<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-5">
        <br />
        <h2>Update Player</h2>
        <br />
        <form @submit.prevent="editlayer">
          <div class="form-group">
            <StringInput v-model="form.name" placeholder="Name" />
          </div>
          <div class="form-group">
            <StringInput v-model="form.lastName" placeholder="Last Name" />
          </div>
          <div class="form-group">
            <StringInput v-model="form.position" placeholder="Position" />
          </div>
          <div class="form-group">
            <NumberInput v-model="form.goals" placeholder="Goals" />
          </div>

          <div class="form-group">
            <NumberInput v-model="form.price" placeholder="Price" />
          </div>
          <br />
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Update</button>
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
        price: 0,
      },
      error: null,
    };
  },
  methods: {
    async updatePlayer() {
      const updatePlayer = await apiRequest.updatePlayer({ ...this.form });
      this.$router.push({
        name: "PlayerList",
        params: { id: updatePlayer._id },
      });
    },
  },
};
</script>
