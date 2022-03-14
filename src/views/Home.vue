<template>
  <div>
    <Slider />
    <News />
  </div>
</template>
<script>
import Slider from "@/components/HomePage/Slider.vue";
import News from "@/components/HomePage/News.vue";
export default {
  name: "Home",
  components: {
    Slider,
    News,
  },
};
</script>
<style scoped></style>
