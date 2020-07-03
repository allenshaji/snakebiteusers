<template lang="html">
  <!-- <b-navbar class="fixed-top" toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <h6 style="margin-top:25px;">IndianSnakebite Initiative</h6>
    </div>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="header-links">
        <b-nav-item href="#"><i class="mdi mdi-image-filter"></i>SnakeBite Initiative - Welcome Back!!</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        </b-nav-item-dropdown> 
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <div class="count-indicator">
              <i class="icon mdi mdi-settings"></i>
            </div>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout()">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->
  <div class="navv">
<b-navbar  toggleable="lg" type="dark" variant="">
   <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <a href="/"><b-nav-text><h3 style="color:black;font-weight:bold;margin-left:20px;">Indian Snakebite Initiative</h3><br><h9 style="color:black;margin-left:20px;">Welcome {{username}}</h9></b-nav-text></a>
      <b-collapse is-nav id="nav_collapse">
      
      <b-nav-item href="#" class="mx-auto"></b-nav-item>
      <b-nav-item class="navvink"  href="/">Home</b-nav-item>
      <!-- <b-nav-item  class="navvink"><router-link to="FAQ"><strong>FAQ</strong></router-link></b-nav-item>
      <b-nav-item  class="navvink"><router-link to="News"><strong>News</strong></router-link></b-nav-item>
      <b-nav-item  class="navvink"><router-link to="Aboutus"><strong>About Us</strong></router-link></b-nav-item>
      -->
      <b-nav-item-dropdown class="navvink" v-bind:text="username" style="color:#000000!important;" right>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout()">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
     </b-collapse>
     </b-navbar-nav toggleable="lg"> 
   <b-navbar-brand>
       <a href="Home">  <img src="http://snakebiteinitiative.in/static/img/isilogo.1b920a2.jpg" style="margin-left:20px; width:100px; height:auto;"/></a>
      </b-navbar-brand>
  </b-navbar>
</div>
</template>

<script lang="js">
import axios from 'axios'
import store from '../../store'
export default {
  name: 'app-header',
    data () {
    return {
      username: localStorage.getItem('username')
    }
  },
  methods: {
    logout () {
      axios
        .get(`http://api.wildlifeconflict.com/user/logout`, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(response => {
          localStorage.removeItem('token')
          localStorage.removeItem('username')
          localStorage.removeItem('is_admin')
          localStorage.removeItem('id')
          store.commit('logoutUser')
          this.$router.push({ name: 'login' })
        })
        .catch(e => {
          localStorage.removeItem('token')
          localStorage.removeItem('username')
          localStorage.removeItem('is_admin')
          localStorage.removeItem('id')
          store.commit('logoutUser')
          this.$router.push({ name: 'login' })
        })
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
    background: linear-gradient(88deg, #ffffff, #ffffff);
    padding: 10px 10px 10px 10px;
}

.navbar .nav-text .h3{
  text-align:center;
}
.navbar-toggler{
    background-color:black  !important;
}
.navvink{
  color:black !important;
  hover:black  !important;
}
.nav-item a{
  color:black  !important;
  hover:black  !important;
}
a:hover{
  color:black  !important;
}
@media (min-width: 1281px) {
  .navbar-expand-lg .navbar-nav .nav-link  .nav-item  {
  
    margin-right: 15px;
    margin-left: 15px;
    padding-left:100px; 
     
}
}
@media (min-width: 1025px) and (max-width: 1280px) {
  .navbar-expand-lg .navbar-nav .nav-link  .nav-item .nav-text .h3 {
  
    margin-right: 15px;
    margin-left: 15px;
    padding-left:200px;
    font-size:12px;
    text-align:center;  
}
}
@media (min-width: 768px) and (max-width:1024px) {
  .navbar-expand-lg .navbar-nav .nav-link  .nav-item  .nav-text .h3{
   
    margin-right: 15px;
    margin-left: 15px;
    padding-left:150px; 
}
}
@media (min-width: 481px) and (max-width: 767px) {
  .navbar-expand-lg .navbar-nav .nav-link  .nav-item {
  
    margin-right: 15px;
    margin-left: 15px;
    padding-left:100px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
   .navbar-expand-lg .navbar-nav .nav-link  .nav-item {
  
    margin-right: 15px;
    margin-left: 15px;
    padding-left:100px;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  hover-color:black  !important;
     text-decoration: none;
}
a {
  color: black;
  font-weight:normal !important;
  font-size:16px !important;
  
}
a:hover{
  color:black !important;
}
 a :hover{
    text-decoration: none !important;
}
</style>
