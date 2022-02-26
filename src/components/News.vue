<template>
  <section class="dark">
    <div class="container py-4">
      <article class="postcard dark blue">
        <a class="postcard__img_link" href="#">
          <img
            class="postcard__img"
            src="@/assets/news1.jpg"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text">
          <h1 class="postcard__title blue"><a href="#">Manchester United F.C.</a></h1>
          <div class="postcard__subtitle small">
            <time datetime="2020-05-25 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>Wed, February 23th 2021
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            Manchester United managed to hold Atletico Madrid to a 1-1 draw on Wednesday night and they have Anthony Elanga to thank.United 
            were dreadful for the vast majority of the first leg in their Champions League last 16 tie, with Joao Felix giving the hosts the 
            lead after just six minutes with a bullet diving header. Atletico proceeded to dominate and contain United and had plenty of chances 
            to put the game, and perhaps even the tie, to bed but were unable to take them.
          </div>
        </div>
      </article>
      <article class="postcard light red">
        <a class="postcard__img_link" href="#">
          <img
            class="postcard__img"
            src="@/assets/news2.jpg"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text text-dark">
          <h1 class="postcard__title red"><a href="#">To Real Madrid Transfer Rumors</a></h1>
          <div class="postcard__subtitle small">
            <time datetime="2020-05-25 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>Thur, February 24th 2021
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            He later insisted, while speaking Spanish in a pitch-side interview with Movistar, that the outcome of the 
            game will not impact his future, which he claimed was still undecided. "I've not decided my future," said Mbappe. 
            "I play for Paris Saint-Germain, one of the best clubs in the world. "This game to influence my future? No. I've 
            not decided. I give my best and then we will see what happens next season."
          </div>
        </div>
      </article>
      <article class="postcard dark green">
        <a class="postcard__img_link" href="#">
          <img
            class="postcard__img"
            src="@/assets/news3.jpg"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text">
          <h1 class="postcard__title green"><a href="#">Multi-million euro deal for new Bernabeu</a></h1>
          <div class="postcard__subtitle small">
            <time datetime="2020-05-25 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>Thur, February 24th 2021
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            The agreement is with one of the leading organisations in the sector, who work alongside some of the world's biggest venues. 
            According to Voz Populi, the deal will allow the US company to use up to 20 percent of the exploitation of the stadium, 
            adding to their impressive portfolio. The stadium is already designed to be used for football, but also for the women's team and basketball.
          </div>
        </div>
      </article>
      
    </div>
  </section>
</template>


<script>
export default {
  name: "News",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
/* This pen */
@import '../style/news.css'
</style>