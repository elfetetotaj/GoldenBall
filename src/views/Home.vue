<template>
    <div>
        <Slider />
        <News />
    </div>
</template>
<script>
import Slider from '../Components/HomePage/Slider.vue'
import News from '../Components/News.vue'
export default {
  components: { Slider, News },
    name:'Home',
}
</script>
<style scoped>

</style>

