<template>
  <div class="row justify-contect-center">
    <div class="col-md-6">
      <h3 class="text-center">Create Player</h3>
      <form @submit.prevent="">
        <div class="form-group">
          <label for="">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="player.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="">Last Name</label>
          <input
            type="text"
            class="form-control"
            v-model="player.lastName"
            required
          />
        </div>
        <div class="form-group">
          <label for="">birthday</label>
          <input
            type="number"
            class="form-control"
            v-model="player.birthday"
            required
          />
        </div>
        <div class="form-group">
          <label for="">Position</label>
          <input
            type="text"
            class="form-control"
            v-model="player.position"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-danger btn-block">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      player: {
        name: "",
        lastName: "",
        birthday: "",
        position: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      var apiURL = "http://localhost:4000/api/create-player";
      axios
        .post(apiURL, this.player)
        .then(() => {
          this.$router.push("/view");
          this.player = {
            name: "",
            lastName: "",
            birthday: "",
            position: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>