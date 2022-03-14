<template>
  <!-- Navigation -->
  <div>
    <header class="topbar">
      <div class="container"></div>
    </header>
    <nav
      class="navbar navbar-expand-lg navbar-nav mr-auto navbar-dark mx-background-top-linear"
      style="background: linear-gradient(45deg, #ff0000 48%, #1b1e21 48%);margin-bottom: 0px;
element.style {
    background: linear-gradient(45deg, rgb(255, 0, 0) 48%, rgb(27, 30, 33) 48%);
    margin-bottom: 0px;
    border-radius: 0px;"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarResponsive"
          style="font-size:font-size: 16px;position: inherit;
          "
        >
          <ul class="navbar-nav ml-auto">
            <router-link :to="{ name: 'Home' }" style="color: white"
              ><a class="navbar-brand"
                ><img
                  src="@/assets/logo.png"
                  class="d-inline-block align-center"
                  style="width: 40px"
                />
                Golden Ball</a
              ></router-link
            >

            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'Info' }"
                style="color: white"
                >Merkato</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'Table' }"
                style="color: white"
                >Tables</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'Country' }"
                style="color: white"
                >Counties</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'Contact' }"
                style="color: white"
                >Contact</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'About' }"
                style="color: white"
                >About</router-link
              >
            </li>
            <li>
              <b-nav-item-dropdown id="dropdown-dropright" dropright text="Administration" right>
                <b-dropdown-item><router-link :to="{name: 'PlayerList'}">Players</router-link></b-dropdown-item>
                <b-dropdown-item><router-link :to="{name: 'NewsList'}">News</router-link></b-dropdown-item>
                <b-dropdown-item><router-link :to="{name: 'ContactList'}">Contact</router-link></b-dropdown-item>
                <b-dropdown-item><router-link :to="{name: 'PlayerList'}">Players</router-link></b-dropdown-item>
              </b-nav-item-dropdown>
            </li>
          </ul>
        <div class="navbar-nav navbar-right navbar-collapse">
          <ul class="navbar-nav mr-auto"></ul>
          <ul class="navbar-nav ml-auto">
            <template v-if="user.data && user.data.email">
              <div class="nav-item">
                <li id="loggedin" class="nav-link">
                  Hi! {{ user.data.email }}
                </li>
              </div>
              <div class="nav-item">
                <li id="loggedin" class="nav-link" @click="handleLogout">
                  Logout
                </li>
              </div>
            </template>
            <template v-else>
              <li class="nav-item">
                <router-link :to="{ name: 'Login' }" class="nav-link"
                  >Login</router-link
                >
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Register' }" class="nav-link"
                  >Register</router-link
                >
              </li>
            </template>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { getAuth, signOut } from "@firebase/auth";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "user",
      claims: "claims",
    }),
  },
  methods: {
    async handleLogout() {
      await signOut(getAuth());
    },
  },
};
</script>
<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #f7f7f7;
}

.nav-item {
  margin-top: 4px;
}
.navbar-brand {
  padding: 5px 15px !important;
}
.navbar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 5px;
}

/*
headeer top
*/
.topbar {
  background-color: #212529;
  padding: 0;
}

.topbar .container .row {
  margin: -7px;
  padding: 0;
}

.topbar .container .row .col-md-12 {
  padding: 0;
}

.topbar p {
  margin: 0;
  display: inline-block;
  font-size: 13px;
  color: #f1f6ff;
}

.topbar p > i {
  margin-right: 5px;
}
.topbar p:last-child {
  text-align: right;
}

header .navbar {
  margin-bottom: 0;
}

.topbar li.topbar {
  display: inline;
  padding-right: 18px;
  line-height: 52px;
  transition: all 0.3s linear;
}

.topbar li.topbar:hover {
  color: #1bbde8;
}

.topbar ul.info i {
  color: #131313;
  font-style: normal;
  margin-right: 8px;
  display: inline-block;
  position: relative;
  top: 4px;
}

.topbar ul.info li {
  float: right;
  padding-left: 30px;
  color: #ffffff;
  font-size: 13px;
  line-height: 44px;
}

.topbar ul.info i span {
  color: #aaa;
  font-size: 13px;
  font-weight: 400;
  line-height: 50px;
  padding-left: 18px;
}

ul.social-network {
  border: none;
  margin: 0;
  padding: 0;
}

ul.social-network li {
  border: none;
  margin: 0;
}

ul.social-network li i {
  margin: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
  border: 0px solid #2d2d2d;
  padding: 5px 0 0;
  width: 32px;
  display: inline-block;
  text-align: center;
  height: 32px;
  vertical-align: baseline;
  color: #000;
}

ul.social-network {
  list-style: none;
  margin: 5px 0 10px -25px;
  float: right;
}

.waves-effect {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  will-change: opacity, transform;
  transition: 0.3s ease-out;
  color: #fff;
}
a {
  color: #0a0a0a;
  text-decoration: none;
}

li {
  list-style-type: none;
}
.bg-image-full {
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.bg-dark {
  background-color: #222 !important;
}

.mx-background-top-linear {
  background: -webkit-linear-gradient(45deg, #54d400 48%, #1b1e21 48%);
  background: -webkit-linear-gradient(left, #54d400 48%, #1b1e21 48%);
  background: linear-gradient(45deg, #54d400 48%, #1b1e21 48%);
}
</style>
