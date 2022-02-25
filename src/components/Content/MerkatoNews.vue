<template>
  <section>
    <div class="container mt-1 mb-5" style="background-color: black">
      <div class="row no-gutters">
        <div class="col-md-4 col-lg-4">
          <img src="@/assets/meknews1.jpg" />
        </div>
        <div class="col-md-8 col-lg-8">
          <div class="d-flex flex-column">
            <div
              class="
                d-flex
                flex-row
                justify-content-between
                align-items-center
                p-5
                bg-dark
                text-white
              "
            >
              <h3 class="display-5">
                Kylian Mbappé - Paris Saint-Germain F.C.
              </h3>
            </div>
            <div class="p-3 bg-black text-white">
              <h6>Odds to win this transfer are:</h6>
            </div>
            <div class="d-flex flex-row text-white">
              <div class="p-4 bg-success text-center skill-block">
                <h4><strong>50%</strong></h4>
                <h6><b>Real Madrid</b></h6>
              </div>
              <div class="p-3 bg-dark text-center text-black skill-block">
                <h4>30%</h4>
                <h6>Barcelona</h6>
              </div>
              <div class="p-3 bg-dark text-center skill-block">
                <h4>15%</h4>
                <h6>Manchester United</h6>
              </div>
              <div class="p-3 bg-dark text-center text-black skill-block">
                <h4>5%</h4>
                <h6>Others</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "Info",
};
</script>



<style scoped>
img {
  width: 100%;
  height: 100%;
}

.bg-black {
  background: #000;
}

.skill-block {
  width: 30%;
}

@media (min-width: 991px) and (max-width: 1200px) {
  .skill-block {
    padding: 32px !important;
  }
}

@media (min-width: 1200px) {
  .skill-block {
    padding: 56px !important;
  }
}

body {
  background-color: #eeeeee;
}
</style>