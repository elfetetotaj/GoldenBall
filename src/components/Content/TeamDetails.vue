<template>
  <!-- Single Advisor-->
  <div class="col-12 col-sm-6 col-lg-3">
    <div
      class="single_advisor_profile wow fadeInUp"
      data-wow-delay="0.2s"
      style="
        visibility: visible;
        animation-delay: 0.2s;
        animation-name: fadeInUp;
      "
    >
      <!-- Team Thumb-->
      <div class="advisor_thumb">
        <img v-if="src"
        :src="src" alt="" />
      </div>
      <!-- Team Details-->
      <div class="single_advisor_details_info">
        <h5>{{player.name}} {{player.lastName}}</h5>
        <p class="designation">{{player.position}}</p>
        <p class="designation"><strong>{{player.price}}</strong></p>
      </div>
    </div>
  </div>
</template>
<script>
import apiRequest from "../../utility/apiRequest";
import axios from "axios";
export default {
  props: {
    player: Object,
  },
  components: {},
  created() {
    axios
      .get(`http://localhost:4000/player/list`)
      .then((response) => {
        this.players = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    async fetchPlayer() {
      this.playerList = await apiRequest.getPlayerList();
    },
  },
  data() {
    return {
      players: [],
    };
  },
  computed: {
    src() {
      const filename = this.player.files?.split(";")[0];

      return filename ? `http://localhost:4000/static/${filename}` : null;
    },
  },
};
</script>
