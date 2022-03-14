<template>
  <div class="container">
    <h2>Player list</h2>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Price</th>
            <th>Goals</th>
            <th>Team</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="field in fields" :key="field._id">
            <th scope="row">1</th>
            <td>{{ field.name }}</td>
            <td>{{ field.lastName }}</td>
            <td>{{ field.price }}</td>
            <td>{{ field.goals }}</td>
            <td>{{ field.team }}</td>
            <td>
              <div class="btn-group">
                <a
                  type="button"
                  href="http://localhost:8079/createPlayer"
                  class="btn btn-primary"
                  >Add</a
                >
                <!-- <a><router-link
                  class="btn btn-primary"
                  :to="{ name: 'UpdatePlayer', params: { id: player._id } }"
                  >View</router-link
                ></a> -->
                <button
                  type="button"
                  class="btn btn-danger ml-2"
                  @click.prevent="deletePlayer(field._id)"
                >
                  Delete
                </button>
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
import { mapGetters } from 'vuex';
// import createPlayer from '../../utility/apiRequest/player/createPlayer';
export default {
  props: {
    player: Object,
  },
  components: {},
  async created() {
    const result = await apiRequest.playerList();
      this.$store.dispatch("fetchPlayers", result);
  },
  methods: {
    // async fetchPlayer() {
    //   this.playerList = await apiRequest.getPlayerList();
    // },
    async deletePlayer(fieldId) {
      await apiRequest.deletePlayer(fieldId);

      const result = await apiRequest.playerList();
      this.$store.dispatch("fetchPlayers", result);
    },
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      fields: "playersList",
    }),
        
    src() {
      const filename = this.player.files?.split(";")[0];

      return filename ? `http://localhost:4000/static/${filename}` : null;
    },
  },
};
</script>
