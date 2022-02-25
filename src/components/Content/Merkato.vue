<template>
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-lg-6">
          <!-- Section Heading-->
          <div
            class="section_heading text-center wow fadeInUp"
            data-wow-delay="0.2s"
            style="
              visibility: visible;
              animation-delay: 0.2s;
              animation-name: fadeInUp;
            "
          >
            <br />
            <h3>Merkato Summer For 2022</h3>
            <hr>
            <p>Lastest Price For Best Players</p><hr>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Single Advisor-->
        <div class="col-12 col-sm-6 col-lg-3">
          <div
            class="single_advisor_profile wow fadeInUp"
            data-wow-delay="0.2s"
            style="
              visibility: visible;
              animation-delay: 0.2s;
              animation-name: fadeInUp;
            "
          >
            <!-- Team Thumb-->
            <div class="advisor_thumb">
              <img src="@/assets/avatar1.jpg" alt="" />
            </div>
            <!-- Team Details-->
            <div class="single_advisor_details_info">
              <h5>Cristano Ronaldo</h5>
              <p class="designation">Juventus F.C.</p>
              <p class="designation"><strong>Price: $60.000.000</strong></p>
            </div>
          </div>
        </div>
        <!-- Single Advisor-->
        <div class="col-12 col-sm-6 col-lg-3">
          <div
            class="single_advisor_profile wow fadeInUp"
            data-wow-delay="0.3s"
            style="
              visibility: visible;
              animation-delay: 0.3s;
              animation-name: fadeInUp;
            "
          >
            <!-- Team Thumb-->
            <div class="advisor_thumb">
              <img src="@/assets/avatar2.jpg" alt="" />
            </div>
            <!-- Team Details-->
            <div class="single_advisor_details_info">
              <h5>Lionel Messi</h5>
              <p class="designation">FC Barcelona</p>
              <p class="designation"><strong>Price: $80.000.000</strong></p>
            </div>
          </div>
        </div>
        <!-- Single Advisor-->
        <div class="col-12 col-sm-6 col-lg-3">
          <div
            class="single_advisor_profile wow fadeInUp"
            data-wow-delay="0.4s"
            style="
              visibility: visible;
              animation-delay: 0.4s;
              animation-name: fadeInUp;
            "
          >
            <!-- Team Thumb-->
            <div class="advisor_thumb">
              <img src="@/assets/avatar3.jpg" alt="" />
            </div>
            <!-- Team Details-->
            <div class="single_advisor_details_info">
              <h5>Neymar JR.</h5>
              <p class="designation">Paris Saint-Germain F.C.</p>
              <p class="designation"><strong>Price: $100.000.000</strong></p>
            </div>
          </div>
        </div>
        <!-- Single Advisor-->
        <div class="col-12 col-sm-6 col-lg-3">
          <div
            class="single_advisor_profile wow fadeInUp"
            data-wow-delay="0.5s"
            style="
              visibility: visible;
              animation-delay: 0.5s;
              animation-name: fadeInUp;
            "
          >
            <!-- Team Thumb-->
            <div class="advisor_thumb">
              <img src="@/assets/avatar4.jpg" alt="" />
            </div>
            <!-- Team Details-->
            <div class="single_advisor_details_info">
              <h5>Scott McTominay</h5>
              <p class="designation">Manchester United F.C.</p>
              <p class="designation"><strong>Price: $75.000.000</strong></p>
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
body {
  margin-top: 20px;
  background: #eee;
}
.single_advisor_profile {
  position: relative;
  margin-bottom: 50px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  z-index: 1;
  border-radius: 15px;
  -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
  box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
}
.single_advisor_profile .advisor_thumb {
  position: relative;
  z-index: 1;
  border-radius: 15px 15px 0 0;
  margin: 0 auto;
  padding: 30px 30px 0 30px;
  background-color: #3f43fd;
  overflow: hidden;
}
.single_advisor_profile .advisor_thumb::after {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  position: absolute;
  width: 150%;
  height: 80px;
  bottom: -45px;
  left: -25%;
  content: "";
  background-color: #ffffff;
  -webkit-transform: rotate(-15deg);
  transform: rotate(-15deg);
}
@media only screen and (max-width: 575px) {
  .single_advisor_profile .advisor_thumb::after {
    height: 160px;
    bottom: -90px;
  }
}
.single_advisor_profile .advisor_thumb .social-info {
  position: absolute;
  z-index: 1;
  width: 100%;
  bottom: 0;
  right: 30px;
  text-align: right;
}
.single_advisor_profile .advisor_thumb .social-info a {
  font-size: 14px;
  color: #020710;
  padding: 0 5px;
}
.single_advisor_profile .advisor_thumb .social-info a:hover,
.single_advisor_profile .advisor_thumb .social-info a:focus {
  color: #3f43fd;
}
.single_advisor_profile .advisor_thumb .social-info a:last-child {
  padding-right: 0;
}
.single_advisor_profile .single_advisor_details_info {
  position: relative;
  z-index: 1;
  padding: 30px;
  text-align: right;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  border-radius: 0 0 15px 15px;
  background-color: #ffffff;
}
.single_advisor_profile .single_advisor_details_info::after {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 3px;
  background-color: #3f43fd;
  content: "";
  top: 12px;
  right: 30px;
}
.single_advisor_profile .single_advisor_details_info h6 {
  margin-bottom: 0.25rem;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_advisor_profile .single_advisor_details_info h5 {
    font-size: 14px;
  }
}
.single_advisor_profile .single_advisor_details_info p {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  margin-bottom: 0;
  font-size: 14px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_advisor_profile .single_advisor_details_info p {
    font-size: 12px;
  }
}
.single_advisor_profile:hover .advisor_thumb::after,
.single_advisor_profile:focus .advisor_thumb::after {
  background-color: #070a57;
}
.single_advisor_profile:hover .advisor_thumb .social-info a,
.single_advisor_profile:focus .advisor_thumb .social-info a {
  color: #ffffff;
}
.single_advisor_profile:hover .advisor_thumb .social-info a:hover,
.single_advisor_profile:hover .advisor_thumb .social-info a:focus,
.single_advisor_profile:focus .advisor_thumb .social-info a:hover,
.single_advisor_profile:focus .advisor_thumb .social-info a:focus {
  color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info,
.single_advisor_profile:focus .single_advisor_details_info {
  background-color: #070a57;
}
.single_advisor_profile:hover .single_advisor_details_info::after,
.single_advisor_profile:focus .single_advisor_details_info::after {
  background-color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info h5,
.single_advisor_profile:focus .single_advisor_details_info h5 {
  color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info p,
.single_advisor_profile:focus .single_advisor_details_info p {
  color: #ffffff;
}
</style>