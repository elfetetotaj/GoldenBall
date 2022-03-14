<template>
  <section class="dark">
    <div class="container py-4">
      <article class="postcard dark blue" v-for="field in fields" :key="field">
        <a class="postcard__img_link" href="#">
          <img
            class="postcard__img"
            src="@/assets/news1.jpg"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text">
          <h1 class="postcard__title blue">
            <a href="#">{{ field.title }}</a>
          </h1>
          <div class="postcard__subtitle small">
            <time datetime="2020-05-25 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>{{ field.date }}
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">{{ field.description }}}</div>
        </div>
      </article>
      <article class="postcard light red" v-for="field in fields" :key="field">
        <a class="postcard__img_link" href="#">
          <img
            class="postcard__img"
            src="@/assets/news2.jpg"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text text-dark">
          <h1 class="postcard__title red">
            <a href="#">{{ field.title }}</a>
          </h1>
          <div class="postcard__subtitle small">
            <time datetime="2020-05-25 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>{{ field.date }}
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">{{ field.description }}}</div>
        </div>
      </article>
      <article class="postcard dark green" v-for="field in fields" :key="field">
        <a class="postcard__img_link" href="#">
          <img
            class="postcard__img"
            src="@/assets/news3.jpg"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text">
          <h1 class="postcard__title green">
            <a href="#">{{ field.title }}</a>
          </h1>
          <div class="postcard__subtitle small">
            <time datetime="2020-05-25 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>{{ field.date }}
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">{{ field.description }}}</div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  props: {
    news: Object,
  },
  components: {},
  created() {
    axios
      .get(`http://localhost:4000/news/list`)
      .then((response) => {
        this.fields = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  data() {
    return {
      fields: [],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
/* This pen */
@import "../../style/news.css";
</style>
