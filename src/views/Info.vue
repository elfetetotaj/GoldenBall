<template>
    <div>
        <Merkato />
        <MerkatoNews />
        <Merkato-2 />
        <Onlymerkato />
    </div>
</template>
<script>
import Merkato from '../Components/Merkato'
import MerkatoNews from '../Components/MerkatoNews.vue'
import Merkato2 from '../Components/Merkato2.vue'
import Onlymerkato from '../Components/Onlymerkato.vue'

export default {
  components: { Merkato, MerkatoNews, Merkato2, Onlymerkato},
    name:'Info',
}
</script>
<style scoped>

</style>

