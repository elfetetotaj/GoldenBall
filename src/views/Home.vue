<template>
    <div>
        <Slider />
        <h2>Hello from home</h2>
        <Contact-form />
    </div>
</template>
<script>
import Slider from '../Components/HomePage/Slider.vue'
import ContactForm from '../Components/ContactPage/ContactForm.vue'
export default {
  components: { Slider, ContactForm },
    name:'Home',
}
</script>
<style scoped>

</style>