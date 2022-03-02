<template>
    <div>
        <LeagueTable />
        <LeagueTable2 />
    </div>
</template>
<script>


import LeagueTable from '@/components/Table/LeagueTable.vue'
import LeagueTable2 from '@/components/Table/LeagueTable2.vue'

export default {
  components: {LeagueTable, LeagueTable2},
    name:'Table',
}
</script>
<style scoped>

</style>