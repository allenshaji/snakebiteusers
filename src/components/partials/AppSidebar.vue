<template lang="html">

  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar" v-if="is_admin == 'true'">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <!-- <div class="profile-image"> <img src="../../assets/images/faces/face4.jpg" alt="image"/> <span class="online-status online"></span> </div> -->
            <div class="profile-name">
              <p class="name" style="text-transform:capitalize;">{{username}}</p>
              <p class="designation">Admin</p>
              <div class="badge badge-teal mx-auto mt-3">Online</div>
            </div>
          </div>
        </li>
        <li class="nav-item"><router-link class="nav-link" to="/"><img class="menu-icon" src="../../assets/images/menu_icons/01.png" alt="menu icon"><span class="menu-title">Dashboard</span></router-link></li>
        <!-- <li class="nav-item"><router-link class="nav-link" to="/widgets/"><img class="menu-icon" src="../../assets/images/menu_icons/02.png" alt="menu icon"><span class="menu-title">Widgets</span></router-link></li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'sample-pages'">
            <img class="menu-icon" src="../../assets/images/menu_icons/08.png" alt="menu icon"><span class="menu-title">Sample Pages</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="sample-pages">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" to="/login/">login</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/register/">register</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/404/">404</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/500/">500</router-link></li>
            </ul>
          </b-collapse>
        </li> -->
        <!-- <li class="nav-item">
          <span class="nav-link" v-b-toggle="'ui-components'">
            <img class="menu-icon" src="../../assets/images/menu_icons/03.png" alt="menu icon"><span class="menu-title">UI Components</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="ui-components">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" to="/buttons/">Button</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/badges/">Badges</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/breadcrumbs/">Breadcrumbs</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/carousel/">Carousel</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/dropdowns/">Dropdowns</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/typography/">Typography</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/paginations/">Paginations</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/tooltips/">Tooltips</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/progress/">Progress</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/tabs/">Tabs</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/modals/">Modals</router-link></li>
            </ul>
          </b-collapse>
        </li> -->
        <!-- <li class="nav-item"><router-link class="nav-link" to="/tables/"><img class="menu-icon" src="../../assets/images/menu_icons/06.png" alt="menu icon"><span class="menu-title">Tables</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/icons/"><img class="menu-icon" src="../../assets/images/menu_icons/07.png" alt="menu icon"><span class="menu-title">Icons</span></router-link></li> -->
                  <!-- <li class="nav-item"><router-link class="nav-link" to="/rescuermap/"><img class="menu-icon" src="../../assets/images/menu_icons/09.png" alt="menu icon"><span class="menu-title">Rescuer Map</span></router-link></li>
                  <li class="nav-item"><router-link class="nav-link" to="/usermap/"><img class="menu-icon" src="../../assets/images/menu_icons/05.png" alt="menu icon"><span class="menu-title">Users Map</span></router-link></li> -->
        <li class="nav-item"><router-link class="nav-link" to="/forms/"><img class="menu-icon" src="../../assets/images/menu_icons/04.png" alt="menu icon"><span class="menu-title">Add Snakes</span></router-link></li>
         <!-- <li class="nav-item"><router-link class="nav-link" to="/viewlist/"><img class="menu-icon" src="../../assets/images/menu_icons/07.png" alt="menu icon"><span class="menu-title">View Snakes</span></router-link></li> -->
          <li class="nav-item"><router-link class="nav-link" to="/userlist/"><img class="menu-icon" src="../../assets/images/menu_icons/05.png" alt="menu icon"><span class="menu-title">All Users</span></router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/newuserlist/"><img class="menu-icon" src="../../assets/images/menu_icons/02.png" alt="menu icon"><span class="menu-title">New Users</span></router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/rescuerlist/"><img class="menu-icon" src="../../assets/images/menu_icons/03.png" alt="menu icon"><span class="menu-title">Rescuer List</span></router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/rescuerapproval/"><img class="menu-icon" src="../../assets/images/menu_icons/06.png" alt="menu icon"><span class="menu-title">Approve Rescuers</span></router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/locations/"><img class="menu-icon" src="../../assets/images/menu_icons/01.png" alt="menu icon"><span class="menu-title">Snake Reports</span></router-link></li>
           <li class="nav-item"><router-link class="nav-link" to="/snakebitemanagement/"><img class="menu-icon" src="../../assets/images/menu_icons/03.png" alt="menu icon"><span class="menu-title">Snakebite Management</span></router-link></li>
            <!-- <li class="nav-item"><router-link class="nav-link" to="/viewsnakebitemanagement/"><img class="menu-icon" src="../../assets/images/menu_icons/07.png" alt="menu icon"><span class="menu-title">Snakebite Management List</span></router-link></li> -->
           <li class="nav-item"><router-link class="nav-link" to="/addexperts/"><img class="menu-icon" src="../../assets/images/menu_icons/08.png" alt="menu icon"><span class="menu-title">Add Snake Experts</span></router-link></li>
            <!-- <li class="nav-item"><router-link class="nav-link" to="/expertslist/"><img class="menu-icon" src="../../assets/images/menu_icons/09.png" alt="menu icon"><span class="menu-title">Experts List</span></router-link></li> -->
             <li class="nav-item"><router-link class="nav-link" to="/snakebitereports/"><img class="menu-icon" src="../../assets/images/menu_icons/09.png" alt="menu icon"><span class="menu-title">Snakebite Reports List</span></router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/addhospital/"><img class="menu-icon" src="../../assets/images/menu_icons/01.png" alt="menu icon"><span class="menu-title">Add Hospital</span></router-link></li>
               <li class="nav-item"><router-link class="nav-link" to="/viewhospital/"><img class="menu-icon" src="../../assets/images/menu_icons/06.png" alt="menu icon"><span class="menu-title">View Hospital</span></router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/identifyview/"><img class="menu-icon" src="../../assets/images/menu_icons/09.png" alt="menu icon"><span class="menu-title">Identification Help</span></router-link></li>
                 <li class="nav-item"><router-link class="nav-link" to="/pendinghospital/"><img class="menu-icon" src="../../assets/images/menu_icons/07.png" alt="menu icon"><span class="menu-title">Approve Hospitals</span></router-link></li>
                 
      </ul>
    </nav>
 <nav class="sidebar sidebar-offcanvas" id="sidebar" v-else>
          <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <!-- <div class="profile-image"> <img src="../../assets/images/faces/face4.jpg" alt="image"/> <span class="online-status online"></span> </div> -->
            <div class="profile-name">
              <p class="name" style="text-transform:capitalize;">{{username}}</p>
              <p class="designation">User</p>
              <div class="badge badge-teal mx-auto mt-3">Online</div>
            </div>
          </div>
        </li>
        <li class="nav-item"><router-link class="nav-link" to="/"><img class="menu-icon" src="../../assets/images/menu_icons/01.png" alt="menu icon"><span class="menu-title">Dashboard</span></router-link></li>
      </ul>
    </nav>
  </section>

</template>

<script lang="js">
export default {
  name: 'app-sidebar',
  data () {
    return {
      username: localStorage.getItem('username'),
      is_admin: localStorage.getItem('is_admin')
    }
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {

}
</style>
