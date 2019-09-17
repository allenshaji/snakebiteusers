<template lang="html">
  <section class="dashboard">
    <div class="row">
      <div id='loadingmessage' style="text-align:center;margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 100%; height: 100%; background-color: white; z-index: 30001; opacity: 0.8;" v-if="loading">
                            <p style="position: absolute; color: White; top: 40%; left: 40%;">
                                <img src='../assets/snakes.gif' /></p>
                        </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
                <router-link to="/usermap">
              <div class="float-left">
                <i class="mdi mdi-nature-people text-success icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">App Users</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_total_users}}</h3>
                </div>
              </div></router-link>
            </div>
             <router-link to="/usermap">
            <p class="text-muted mt-3">
              <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> View Details
            </p></router-link>
          </div>
        </div>
       
      </div> 
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
                <router-link to="/rescuermap">
              <div class="float-left">
                <i class="mdi mdi-human-child text-info icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Snake Rescuers</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_total_rescuer}}</h3>
                </div>
              </div></router-link>
            </div>
              <router-link to="/rescuermap">
            <p class="text-muted mt-3">
              <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> View Map
            </p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
                <router-link to="/snakereports">
              <div class="float-left">
                <i class="mdi mdi-account-location text-danger icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Snake Rescues</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_total_locations}}</h3>
                </div>
              </div></router-link>
            </div>
              <router-link to="/snakereports">
            <p class="text-muted mt-3">
              <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> View Map
            </p>
            </router-link>
          </div>
        </div>
        
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
               <router-link to="/identifyview">
              <div class="float-left">
                <i class="mdi mdi-poll-box text-warning icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Identification Help</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_identify}}</h3>
                </div>
              </div></router-link>
            </div>
             <router-link to="/identifyview">
            <p class="text-muted mt-3">
              <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> View Details
            </p>
            </router-link>
          </div>
        </div>
      </div>
      
    </div>
    <div class="row">
       <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
                <router-link to="/hospitalmap">
              <div class="float-left">
                <i class="mdi mdi-hospital text-danger icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Listed Hospitals</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_hospital}}</h3>
                </div>
              </div></router-link>
            </div>
             <router-link to="/hospitalmap">
            <p class="text-muted mt-3">
              <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> View Map
            </p></router-link>
          </div>
        </div>
       
      </div> 


 <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
                <router-link to="/snakebitereports">
              <div class="float-left">
                <i class="mdi mdi-receipt text-warning icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Reported Snakebites</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_total_experts}}</h3>
                </div>
              </div></router-link>
            </div>
              <router-link to="/snakebitereports">
            <p class="text-muted mt-3">
              <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> View Details
            </p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
                <router-link to="/viewlist">
              <div class="float-left">
                <i class="mdi mdi-rotate-right-variant text-teal icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Listed Snakes</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_snakes}}</h3>
                </div>
              </div></router-link>
            </div>
              <router-link to="/viewlist">
            <p class="text-muted mt-3">
              <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> View Details
            </p>
            </router-link>
          </div>
        </div>
        
      </div>


      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
               <router-link to="/expertslist">
              <div class="float-left">
                <i class="mdi mdi-phone-in-talk text-info icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Snake Experts</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_total_experts}}</h3>
                </div>
              </div></router-link>
            </div>
             <router-link to="/expertslist">
            <p class="text-muted mt-3">
              <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> View Details
            </p>
            </router-link>
          </div>
        </div>
      </div>


    </div>
        <div class="row">
               <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
              <div style="text-align:center;font-size:16px;font-weight:500">
               Human - Snake Conflict Mitigation : ISRN Stats Report 2019<br>
              </div>
             
            </div>
          </div>
        </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <p style="text-align:left;font-size:16px;font-weight:500;padding-bottom:10px;"> <i class="mdi mdi-account-check text-success icon-sm"></i>&emsp;Top users of {{monthname}} </p>
             <table class="table table-hover">
  <tbody>
    <tr v-for="qw in stats.topusers">
      <th scope="row">{{qw.user.name}}</th>
      <td>{{qw.count}}</td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
      </div>
      
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
             <p style="text-align:left;font-size:16px;font-weight:500;padding-bottom:10px;"> <i class="mdi mdi-rotate-right-variant text-warning icon-sm"></i>&emsp;Top Common Snakes {{year}} </p>
           <table class="table table-hover">
  <tbody>
    <tr v-for="qw in stats.topsnakesyear">
      <th scope="row">{{qw.snake.name}}</th>
      <td>{{qw.count}}</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </div>

  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <p style="text-align:left;font-size:16px;font-weight:500;padding-bottom:10px;"><i class="mdi mdi-human-child text-info icon-sm"></i>&emsp;Top users of {{year}} </p>
             <table class="table table-hover">
  <tbody>
    <tr v-for="qw in stats.topusersyear">
      <th scope="row">{{qw.user.name}}</th>
      <td>{{qw.count}}</td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
      </div>

    </div>
    <!-- <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Manage Tickets</h5>
            <div class="fluid-container">
              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-1">
                  <img class="img-sm rounded-circle" src="../assets/images/faces/face1.jpg" alt="profile image">
                </div>
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">James :</p>
                    <p class="font-weight-medium mr-1 mb-0">[#23047]</p>
                    <p class="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                  <p class="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sequi a, nostrum.</p>
                  <div class="row text-muted d-flex">
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Last responded :</p>
                      <p class="Last-responded mr-2 mb-0">3 hours ago</p>
                    </div>
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Due in :</p>
                      <p class="Last-responded mr-2 mb-0">2 Days</p>
                    </div>
                  </div>
                </div>
                <div class="ticket-actions col-2">
                  <div class="btn-group dropdown">
                    <button type="button" class="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><i class="fa fa-reply fa-fw"></i>Quick reply</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-history fa-fw"></i>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-1">
                  <img class="img-sm rounded-circle" src="../assets/images/faces/face2.jpg" alt="profile image">
                </div>
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Stella :</p>
                    <p class="font-weight-medium mr-1 mb-0">[#23135]</p>
                    <p class="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente.</p>
                  </div>
                  <p class="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptates fuga quae?</p>
                  <div class="row text-muted d-flex">
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Last responded :</p>
                      <p class="Last-responded mr-2 mb-0">3 hours ago</p>
                    </div>
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Due in :</p>
                      <p class="Last-responded mr-2 mb-0">2 Days</p>
                    </div>
                  </div>
                </div>
                <div class="ticket-actions col-2">
                  <div class="btn-group dropdown">
                    <button type="button" class="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><i class="fa fa-reply fa-fw"></i>Quick reply</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-history fa-fw"></i>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-1">
                  <img class="img-sm rounded-circle" src="../assets/images/faces/face3.jpg" alt="profile image">
                </div>
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">John Doe :</p>
                    <p class="font-weight-medium mr-1 mb-0">[#23246]</p>
                    <p class="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <p class="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <div class="row text-muted d-flex">
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Last responded :</p>
                      <p class="Last-responded mr-2 mb-0">3 hours ago</p>
                    </div>
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Due in :</p>
                      <p class="Last-responded mr-2 mb-0">2 Days</p>
                    </div>
                  </div>
                </div>
                <div class="ticket-actions col-2">
                  <div class="btn-group dropdown">
                    <button type="button" class="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><i class="fa fa-reply fa-fw"></i>Quick reply</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-history fa-fw"></i>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-1">
                  <img class="img-sm rounded-circle" src="../assets/images/faces/face4.jpg" alt="profile image">
                </div>
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Marques Brownlee :</p>
                    <p class="font-weight-medium mr-1 mb-0">[#23047]</p>
                    <p class="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                  <p class="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sequi a, nostrum.</p>
                  <div class="row text-muted d-flex">
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Last responded :</p>
                      <p class="Last-responded mr-2 mb-0">3 hours ago</p>
                    </div>
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Due in :</p>
                      <p class="Last-responded mr-2 mb-0">2 Days</p>
                    </div>
                  </div>
                </div>
                <div class="ticket-actions col-2">
                  <div class="btn-group dropdown">
                    <button type="button" class="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><i class="fa fa-reply fa-fw"></i>Quick reply</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-history fa-fw"></i>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ticket-card mt-3 pb-2">
                <div class="col-1">
                  <img class="img-sm rounded-circle" src="../assets/images/faces/face5.jpg" alt="profile image">
                </div>
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Marina John :</p>
                    <p class="font-weight-medium mr-1 mb-0">[#23034]</p>
                    <p class="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi amet totam, dignissimos fugiat voluptates, ab magni, necessitatibus excepturi inventore, mollitia ipsa quaerat aliquam.</p>
                  </div>
                  <p class="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae animi omnis, a?</p>
                  <div class="row text-muted d-flex">
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Last responded :</p>
                      <p class="Last-responded mr-2 mb-0">3 hours ago</p>
                    </div>
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Due in :</p>
                      <p class="Last-responded mr-2 mb-0">2 Days</p>
                    </div>
                  </div>
                </div>
                <div class="ticket-actions col-2">
                  <div class="btn-group dropdown">
                    <button type="button" class="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><i class="fa fa-reply fa-fw"></i>Quick reply</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-history fa-fw"></i>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script lang="js">
import axios from 'axios'
var marker
export default {
  name: 'dashboard',
  data () {
    return {
      records: [],
      items: [],
      oMarker: [],
      stats: '',
      monthname: '',
      year: '',
      loading: false
    }
  },
  mounted: function () {
    this.loadStats()
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date();
this.monthname = monthNames[d.getMonth()];
this.year = d.getFullYear();
  },
  methods: {
    loadStats () {
      this.loading = true
      axios({
        url: 'http://18.191.40.18/user/stats',
        method: 'GET'
      }).then(response => {
        this.stats = response.data.data
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
  }
}
</script>

<style scoped lang="scss">
a:hover {
    color: #212529;
    text-decoration: none;
}
a {
  color: #212529;
}
</style>
