<template>
  <section class="carousel">
    <div id="heroControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#heroControls" class="active" data-slide-to="0"></li>
        <li data-target="#heroControls" data-slide-to="1"></li>
        <li data-target="#heroControls" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="img-fluid" src="@/assets/slider1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="@/assets/slider2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="@/assets/slider3.jpg" alt="Third slide">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Slider'
}
</script>

<style scoped>
@media screen and (min-width: 769px) {
  
.img-fluid[data-v-638b41bc] {
    min-width: 800px !important;
}
}
.img-fluid {
    max-width: 100%;
    height: auto;
}

ol.carousel-indicators li {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid black;
}

ol.carousel-indicators li.active {
  background: #dbf0fa;
}
</style>
