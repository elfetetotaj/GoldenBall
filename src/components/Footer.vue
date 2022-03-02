<template>
  <!-- FOOTER -->
  <footer class="w-100 py-4 flex-shrink-0">
    <div class="container py-4">
      <div class="row gy-4 gx-5">
        <div class="col-lg-4 col-md-6">
          <h5 class="h1 text-white"><b>Golden Ball</b></h5>
          <p class="small text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <p class="small text-muted mb-0">
            &copy; Copyrights. All rights reserved.
            <a class="text-primary" href="/">GoldenBall</a>
          </p>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="text-white mb-3">Quick links</h5>
          <ul class="list-unstyled text-muted">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Get started</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="text-white mb-3">Quick links</h5>
          <ul class="list-unstyled text-muted">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Get started</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-3">Newsletter</h5>
          <p class="small text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
body {
  background: #2a2e32;
}

.text-small {
  font-size: 0.9rem;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

a:hover,
a:focus {
  text-decoration: none;
}

.form-control {
  background: #212529;
  border-color: #545454;
}

.form-control:focus {
  background: #212529;
}

footer {
  background: #212529;
}

body,
html {
  height: 100%;
}
</style>