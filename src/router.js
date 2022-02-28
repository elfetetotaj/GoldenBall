import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home.vue');
const Contact = () => import('@/views/Contact.vue');
const Info = () => import('@/views/Info.vue');
const Table = () => import('@/views/Table.vue');
const Country = () => import('@/views/Country.vue');
const About = () => import('@/views/About.vue');
const Register = () => import('@/views/Register.vue');
const Login = () => import ('@/views/Login.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/country',
      name: 'Country',
      component: Country
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  mode: 'history'
})
