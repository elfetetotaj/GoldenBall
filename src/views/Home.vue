<template>
  <div>
    <Slider />
    <News />
    <Calander />
  <div v-if="user"> Hello {{user.data && user.data.email}}</div>
  </div>
</template>
<script>
import Slider from "@/Components/HomePage/Slider.vue";
import News from "@/Components/News.vue";
import Calander from "@/Components/Calander.vue";
import {mapGetters} from 'vuex';

export default {
  name: "Home",
  components: 
  { 
      Slider, News, Calander,
  },

  computed: {
      ...mapGetters({
          user: "user",
      }),
  },
};
</script>
<style scoped>
</style>

