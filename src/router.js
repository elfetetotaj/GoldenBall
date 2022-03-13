import Vue from "vue";
import VueRouter from "vue-router";
import { onAuthStateChanged, getAuth } from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "./views/Home.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "./views/Contact.vue"),
  },
  {
    path: "/table",
    name: "Table",
    component: () =>
      import(/* webpackChunkName: "table" */ "./views/Table.vue"),
  },
  {
    path: "/country",
    name: "Country",
    component: () =>
      import(/* webpackChunkName: "country" */ "./views/Country.vue"),
  },
  {
    path: "/info",
    name: "Info",
    component: () => import(/* webpackChunkName: "info" */ "./views/Info.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "./views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "./views/Login.vue"),
  },
  {
    path: "/createPlayer",
    name: "CreatePlayer",
    component: () =>
      import(
        /* webpackChunkName: "createPlayer" */ "./views/Players/CreatePlayer.vue"
      ),
  },
  {
    path: "/updatePlayer/:id",
    name: "UpdatePlayer",
    component: () =>
      import(
        /* webpackChunkName: "updatePlayer" */ "./views/Players/UpdatePlayer.vue"
      ),
  },
  {
    path: "/playerList",
    name: "PlayerList",
    component: () =>
      import(
        /* webpackChunkName: "playerList" */ "./views/Players/PlayerList.vue"
      ),
  },
  {
    path: "/admin",
    name: "Admin",
    meta: {
      isAdmin: true,
    },
    component: () =>
      import(/* webpackChunkName: "admin" */ "./views/Admin.vue"),
  },
  {
    path: "/createNews",
    name: "CreateNew",
    component: () =>
      import(/* webpackChunkName: "createNews" */ "./views/News/CreateNew.vue"),
  },
  {
    path: "/newsList",
    name: "NewsList",
    component: () =>
      import(/* webpackChunkName: "newsList" */ "./views/News/NewsList.vue"),
  },
  {
    path: "/contactList",
    name: "ContactList",
    component: () =>
      import(/* webpackChunkName: "contactList" */ "./views/ContactList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  onAuthStateChanged(getAuth(), async (user) => {
    const shouldBeLoggedIn = (record) =>
      record.meta.isAuthenticated || record.meta.isAdmin;

    if (to.matched.some((record) => shouldBeLoggedIn(record))) {
      if (!user) {
        next("/login");
      } else {
        const tokenResult = await getAuth().currentUser.getIdTokenResult();
        const isAdmin = tokenResult.claims.admin;
        if (isAdmin && to.matched.some((record) => !record.meta.isAdmin)) {
          next("/admin");
        } else if (to.matched.some((record) => record.meta.isAdmin)) {
          if (!tokenResult.claims.admin) {
            next("/");
          } else {
            next();
          }
        } else {
          next();
        }
      }
    } else {
      next();
    }
  });
});

export default router;
