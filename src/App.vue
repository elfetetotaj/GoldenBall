<template>
  <div id="app">
    <Header/>
    <router-view />
    <Footer />
  </div>
</template>


<script>


import Header from '@/Components/Header.vue'
import Footer from '@/Components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
