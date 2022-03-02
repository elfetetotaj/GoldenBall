<template>
    <div>
        <AboutUs />
        <AboutJob />
        <Team />
    </div>
</template>
<script>

import AboutUs from '@/components/About/AboutUs.vue'
import AboutJob from '@/components/About/AboutJob.vue'
import Team from '@/components/About/Team.vue'

export default {
  components: {AboutUs, AboutJob, Team},
    name:'About',
}
</script>
<style scoped>

</style>