<template lang="html">

 <section class="widgets">
  <div class="row">
   <div id='loadingmessage' style="text-align:center;margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 100%; height: 100%; background-color: white; z-index: 30001; opacity: 0.8;" v-if="loading">
                            <p style="position: absolute; color: White; top: 40%; left: 40%;">
                                <img src='../../assets/snakes.gif' /></p>
                        </div>
    <div class="col-md-12 grid-margin">
      <div class="card">
        <div class="card-body">
              <h4 class="card-title mb-0">Users Map</h4><br>
           <div id="map"></div>
           
             
        </div>
     </div>
    </div>
  </div>
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
      loading: false,
    }
  },
  mounted: function () {
    this.loadMap()
  },
  methods: {
    loadMap () {
      this.loading = true
      var mapCanvas = document.getElementById('map')
      var mapOptions = {
        // eslint-disable-next-line
        center: new google.maps.LatLng(20.5937, 78.9629),
        zoom: 5,
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
          this.loading = false;
        }
      }).catch(e => {
        this.loading = false;
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
