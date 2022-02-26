<template>
    <div>
        <AboutUs />
        <AboutJob />
        <Team />
    </div>
</template>
<script>

import AboutUs from '../Components/About/AboutUs.vue'
import AboutJob from '../Components/About/AboutJob.vue'
import Team from '../Components/About/Team.vue'

export default {
  components: {AboutUs, AboutJob, Team},
    name:'About',
}
</script>
<style scoped>

</style>