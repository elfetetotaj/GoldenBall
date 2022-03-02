<template>
    <div>
        <Merkato />
        <MerkatoNews />
        <Merkato-2 />
        <Onlymerkato />
    </div>
</template>
<script>
import Merkato from '@/components/Content/Merkato.vue'
import MerkatoNews from '@/components/Content/MerkatoNews.vue'
import Merkato2 from '@/components/Content/Merkato2.vue'
import Onlymerkato from '@/components/Content/Onlymerkato.vue'

export default {
  components: { Merkato, MerkatoNews, Merkato2, Onlymerkato},
    name:'Info',
}
</script>
<style scoped>

</style>

