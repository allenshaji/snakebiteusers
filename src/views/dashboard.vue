<template lang="html">
  <section class="dashboard">
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-cube text-danger icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Total Hospitals</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_hospital}}</h3>
                </div>
              </div>
            </div>
            <!-- <p class="text-muted mt-3">
              <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth
            </p> -->
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-receipt text-warning icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Total Users</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_total_users}}</h3>
                </div>
              </div>
            </div>
            <!-- <p class="text-muted mt-3">
              <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales
            </p> -->
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-poll-box text-teal icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Total Rescuers</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_total_rescuer}}</h3>
                </div>
              </div>
            </div>
            <!-- <p class="text-muted mt-3">
              <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales
            </p> -->
          </div>
        </div>
        
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-account-location text-info icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Total Reports</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{stats.count_total_locations}}</h3>
                </div>
              </div>
            </div>
            <!-- <p class="text-muted mt-3">
              <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
            </p> -->
          </div>
        </div>
      </div>
    </div>
        <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
               Top Users of Month<br>
                <i class="mdi mdi-account-location text-info icon-lg"></i>
              </div>
              <div class="float-right">
                <!-- <p class="card-text text-right">Total Hospitals</p> -->
                <p v-for="qw in stats.topusers">{{qw.user.name}} / {{qw.count}}</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0"></h3>
                </div>
              </div>
            </div>
            <!-- <p class="text-muted mt-3">
              <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth
            </p> -->
          </div>
        </div>
      </div>
      
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                Top Snakes of Month<br>
               <i class="mdi mdi-poll-box text-teal icon-lg"></i>
              </div>
              <div class="float-right">
                 <p v-for="qw in stats.topsnakes">{{qw.snake.name}} / {{qw.count}}</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0"></h3>
                </div>
              </div>
            </div>
            <!-- <p class="text-muted mt-3">
              <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
           <div id="map"></div>
          <!-- <div class="card-body">
            <h5 class="card-title mb-4">Orders</h5>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">Order No</th>
                    <th class="border-bottom-0">Product Name</th>
                    <th class="border-bottom-0">Purchased On</th>
                    <th class="border-bottom-0">Shipping Status</th>
                    <th class="border-bottom-0">Payment Method</th>
                    <th class="border-bottom-0">Payment Status</th>
                    <th class="border-bottom-0"></th>
                    <th class="border-bottom-0"></th>
                    <th class="border-bottom-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>034</td>
                    <td>Iphone 7</td>
                    <td>12 May 2017</td>
                    <td>Dispatched</td>
                    <td>Credit card</td>
                    <td><label class="badge badge-teal">Approved</label></td>
                    <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                    <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                  </tr>
                  <tr>
                    <td>035</td>
                    <td>Galaxy S8</td>
                    <td>15 May 2017</td>
                    <td>Dispatched</td>
                    <td>Internet banking</td>
                    <td><label class="badge badge-warning">Pending</label></td>
                    <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                    <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                  </tr>
                  <tr>
                    <td>036</td>
                    <td>Amazon Echo</td>
                    <td>17 May 2017</td>
                    <td>Dispatched</td>
                    <td>Credit card</td>
                    <td><label class="badge badge-teal">Approved</label></td>
                    <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                    <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                  </tr>
                  <tr>
                    <td>037</td>
                    <td>Google Pixel</td>
                    <td>17 May 2017</td>
                    <td>Dispatched</td>
                    <td>Cash on delivery</td>
                    <td><label class="badge badge-danger">Rejected</label></td>
                    <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                    <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                  </tr>
                  <tr>
                    <td>038</td>
                    <td>Mac Mini</td>
                    <td>19 May 2017</td>
                    <td>Dispatched</td>
                    <td>Debit card</td>
                    <td><label class="badge badge-teal">Approved</label></td>
                    <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                    <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> -->
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
      stats: ''
    }
  },
  mounted: function () {
    this.loadMap()
    this.loadStats()
  },
  methods: {
    loadStats () {
      this.loading = true
      axios({
        url: 'http://18.191.40.18/user/stats/',
        method: 'GET'
      }).then(response => {
        this.stats = response.data.data
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
    loadMap () {
      var mapCanvas = document.getElementById('map')
      var mapOptions = {
        // eslint-disable-next-line
        center: new google.maps.LatLng(20.5937, 78.9629),
        zoom: 4,
        // eslint-disable-next-line
        mapTypeId: google.maps.MapTypeId.HYBRID
      }
      var vm = this
      // eslint-disable-next-line
      vm.map = new google.maps.Map(mapCanvas, mapOptions)
      axios({
        url: 'http://18.191.40.18/location/all/',
        method: 'GET'
      }).then(response => {
        this.items = response.data.data
        this.records = response.data.data.records
        for (var i = 0; i < this.records.length; i++) {
          var id = this.records[i]._id
          var lat = this.records[i].location[0]
          var lon = this.records[i].location[1]
          var sit = this.records[i].situation
          var snake = this.records[i].snake.name
          var user = this.records[i].user.name
          // eslint-disable-next-line
          var latlngset = new google.maps.LatLng(lon, lat)
          var iconBase = 'http://leopardtechlabs.com/fred.png'
          // eslint-disable-next-line
          marker = new google.maps.Marker({
            map: vm.map,
            position: latlngset,
            icon: iconBase
          })
          vm.oMarker[i] = {
            m: marker,
            c: id
          }
          var content =
            '<table><tr><td colspan=2 style="padding-left:10px;"><p style="color:#ff6907;">' + lat +
            '<a style="color:#333333">&emsp;&emsp;&emsp;' + lon +
            '</a></p><p style="font-size:18px;color:#333333;font-weight:500"><b>' + snake +
            '</b></p><p style="color:#333333;size:12px;">' + sit +
            '</p><p style="color:#333333;size:12px;">Reported by&emsp;' + user + '</p></td></tr></table>'
          // eslint-disable-next-line
          var infowindow = new google.maps.InfoWindow()
          // eslint-disable-next-line
          google.maps.event.addListener(marker, 'click',
            (function (marker, content, infowindow) {
              return function () {
                infowindow.setContent(content)
                infowindow.open(vm.map, marker)
              }
            })(marker, content, infowindow)
          )
        }
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    }
  }
}
</script>

<style scoped lang="scss">
#map {
  height: 600px;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
