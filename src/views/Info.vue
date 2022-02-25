<template>
    <div>
        <Merkato />
        <MerkatoNews />
        <Merkato-2 />
        <Onlymerkato />
    </div>
</template>
<script>
import Merkato from '../Components/Content/Merkato.vue'
import MerkatoNews from '../Components/Content/MerkatoNews.vue'
import Merkato2 from '../Components/Content/Merkato2.vue'
import Onlymerkato from '../Components/Content/Onlymerkato.vue'

export default {
  components: { Merkato, MerkatoNews, Merkato2, Onlymerkato},
    name:'Info',
}
</script>
<style scoped>

</style>

