<template>
    <div>
        <Slider />
        <News />
        <Calander/>
    </div>
</template>
<script>
import Slider from '../Components/HomePage/Slider.vue'
import News from '../Components/News.vue'
import Calander from '../Components/Calander.vue'
export default {
  components: { Slider, News, Calander },
    name:'Home',
}
</script>
<style scoped>

</style>

