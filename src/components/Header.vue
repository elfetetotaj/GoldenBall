<template>
  <div class="container-flex">
    <nav class="navbar navbar" style="background-color: white">
      <div class="dropdown d-xl-none d-lg-none mr-auto">
        <!-- <img src="https://png.icons8.com/windows/32/000000/menu.png" data-toggle="dropdown" data-target="#navd" aria-haspopup="true" aria-expanded="false"> -->
        <div class="dropdown-menu hb" aria-labelledby="navd">
          <router-link class="dropdown-item" to="/">Home</router-link>
          <router-link class="dropdown-item" to="/info">Merkato</router-link>
          <router-link class="dropdown-item" to="/contact">Contact</router-link>
          <router-link class="dropdown-item" to="/about">About</router-link>
          <router-link class="dropdown-item" to="/register">Register</router-link>
          <router-link class="dropdown-item" to="/login">Login</router-link>
        </div>
      </div>
      <!--Logo-->
      <a class="navbar-brand py-0 pl-5">
        <img src="@/assets/logo.png" width="50" height="50" />
      </a>
      <!--Header navigation-->
      <span class="navbar-item bc d-none d-xl-block d-lg-block py-0">
        <router-link class="pl-5" to="/">Home</router-link>
        <router-link class="pl-5" to="/info">Merkato</router-link>
        <router-link class="pl-5" to="/contact">Contact</router-link>
        <router-link class="pl-5" to="/about">About</router-link>
        <router-link class="pl-5" to="/register">Register</router-link>
        <router-link class="pl-5" to="/login">Login</router-link>
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
nav {
  z-index: 100;
}
.navbar {
  border-bottom: 1px solid #dcdcdc;
  background-color: #f8f8f8;
}

.close {
  position: relative;
  bottom: 20px;
  left: 10px;
  font-size: 31px;
  color: #000;
}
.navbar-item.bc a {
  font-size: 17px;
  text-decoration: none;
  color: black;
}

.navbar-item.bc a:hover,
.navbar-item.bc a:active {
  color: #ffd700;
}
.btn-sm {
  border-radius: 0;
}
</style>
