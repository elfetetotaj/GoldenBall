<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- <router-link  :to="{ name: 'Home' }"
        ><a class="navbar-brand"
          ><img
            src="@/assets/logo.png"
            class="d-inline-block align-center"
            style="width: 40px"
          />
          GoldenBall</a
        ></router-link
      > -->
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
          <li class="nav-item mr-2">
            <router-link class="nav-link" :to="{ name: 'Info' }"
              >Merkato</router-link
            >
          </li>
          <li class="nav-item mr-2">
            <router-link class="nav-link" :to="{ name: 'Table' }"
              >Tables</router-link
            >
          </li>
          <li class="nav-item mr-2">
            <router-link class="nav-link" :to="{ name: 'Country' }"
              >Counties</router-link
            >
          </li>
          <li class="nav-item mr-2">
            <router-link class="nav-link" :to="{ name: 'Contact' }"
              >Contact</router-link
            >
          </li>
          <li class="nav-item mr-2">
            <router-link class="nav-link" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
          <li
            class="nav-item"
            v-if="
              this.$store.state.user.claims &&
              this.$store.state.user.claims.admin
            "
          >
            <router-link class="nav-link" :to="{ name: 'Admin' }"
              >Administration</router-link
            >
          </li>
        </div>
        <div class="navbar-nav navbar-right">
          <ul class="navbar-nav mr-auto"></ul>
          <ul class="navbar-nav ml-auto">
            <template v-if="user.data && user.data.email">
              <div class="nav-item">
                <li id="loggedin" class="nav-link">
                  Hello {{ user.data.email }}
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
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </nav>
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
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
.navbar {
  margin-bottom: 0px !important;
  border: 0px !important;
}
#loggedin {
  margin-top: 5px;
}
.navbar-brand {
  padding: 5px 15px !important;
}
</style>
