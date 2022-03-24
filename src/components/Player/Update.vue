<template>
  <section>
    <div v-if="this.player" class="row justify-content-center">
      <div class="col-8 col-md-6 col-lg-5">
        <br />
        <h2>Upload photo for Player</h2>
        <br />
        <h1>{{this.player.name}} {{this.player.lastName}}</h1>
        <Dropzone
          :playerId="this.$route.params.id"
          :initialFiles="player.files"
        />
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "../../utility/apiRequest";

import Dropzone from "@/components/form/Dropzone";

export default {
  components: {
   
    Dropzone,
  },
  computed: {
    src() {
      const filename = this.realEstate.files?.split(";")[0];

      return filename ? `http://localhost:4000/static/${filename}` : null;
    },
  },
  created() {
    this.fetchPlayer();
  },
  data() {
    return {
     player: null,
    };
  },
  methods: {
    async fetchPlayer() {
      this.player = await apiRequest.getPlayer(this.$route.params.id);
    },
  },
};
</script>
