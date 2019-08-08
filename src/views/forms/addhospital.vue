<template lang="html">

  <section class="news">
    <div class="row">
      <div id='loadingmessage' style="text-align:center;margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 100%; height: 100%; background-color: white; z-index: 30001; opacity: 0.8;" v-if="loading">
                            <p style="position: absolute; color: White; top: 40%; left: 40%;">
                                <img src='../../assets/snakes.gif' /></p>
                        </div>
      <!-- <div class="col-md-6 d-flex align-items-stretch grid-margin">
        <div class="row flex-grow">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Default form</h4>
                <p class="card-description">
                  Basic form layout
                </p>
                <form class="forms-sample">
                  <b-form-group label="Email"  label-for="input1">
                    <b-form-input type="email" id="input1" placeholder="Email address"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password"  label-for="input2">
                    <b-form-input type="password" id="input2" placeholder="Password"></b-form-input>
                  </b-form-group>
                  <b-button type="submit" variant="success" class="mr-2">Submit</b-button>
                  <b-button variant="light">Cancel</b-button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Horizontal Form</h4>
                <p class="card-description">
                  Horizontal form layout
                </p>
                <form class="forms-sample">
                  <form class="forms-sample">
                    <b-form-group horizontal label="Email"  label-for="input3">
                      <b-form-input type="email" id="input3" placeholder="Email address"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Password"  label-for="input4">
                      <b-form-input type="password" id="input4" placeholder="Password"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="success" class="mr-2">Submit</b-button>
                    <b-button variant="light">Cancel</b-button>
                  </form>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic form</h4>
            <p class="card-description">
              Basic form elements
            </p>
            <form class="forms-sample">
              <b-form-group label="Name"  label-for="input5">
                <b-form-input type="text" id="input5" placeholder="Name"></b-form-input>
              </b-form-group>
              <b-form-group label="Email address"  label-for="input6">
                <b-form-input type="email" id="input6" placeholder="Email"></b-form-input>
              </b-form-group>
              <b-form-group label="Password"  label-for="input7">
                <b-form-input type="password" id="input7" placeholder="Password"></b-form-input>
              </b-form-group>
              <b-form-group label="Upload file" label-for="input8">
                <b-form-file v-model="file" id="inpu8" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
              </b-form-group>
              <b-form-group label="City"  label-for="input9">
                <b-form-input type="text" id="input9" placeholder="Location"></b-form-input>
              </b-form-group>
              <b-form-group label="Message"  label-for="input10">
                <b-form-textarea id="input10" v-model="text" placeholder="Message" :rows="3" :max-rows="6"></b-form-textarea>
              </b-form-group>
              <b-button type="submit" variant="success" class="mr-2">Submit</b-button>
              <b-button variant="light">Cancel</b-button>
            </form>
          </div>
        </div>
      </div> -->
      <!-- <div class="col-md-5 d-flex align-items-stretch">
        <div class="row flex-grow">
          <div class="col-12 grid-margin">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Basic input groups</h4>
                <p class="card-description">
                  Basic bootstrap input groups
                </p>
                <b-form-group>
                  <b-input-group prepend="@">
                    <b-form-input placeholder="Username"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group append="@">
                    <b-form-input placeholder="Username"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group prepend="$" append=".00">
                    <b-form-input></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend">
                      <span>$</span>
                    </b-input-group-text>
                    <b-input-group-text slot="prepend">
                      <span>00.0</span>
                    </b-input-group-text>
                    <b-form-input type="text" placeholder="Enter Amount"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </div>
            </div>
          </div> -->
          <!-- <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Colored input groups</h4>
                <p class="card-description">
                  Input groups with colors
                </p>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend" class="bg-info text-white">
                      <span>@</span>
                    </b-input-group-text>
                    <b-form-input placeholder="Username"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-form-input placeholder="Username"></b-form-input>
                    <b-input-group-text slot="append" class="bg-info text-white">
                      <span>@</span>
                    </b-input-group-text>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend" class="bg-info text-white">
                      <span>$</span>
                    </b-input-group-text>
                    <b-form-input></b-form-input>
                    <b-input-group-text slot="append" class="bg-info text-white">
                      <span>.00</span>
                    </b-input-group-text>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend" class="bg-secondary text-primary">
                      <span>$</span>
                    </b-input-group-text>
                    <b-input-group-text slot="prepend" class="bg-secondary text-primary">
                      <span>00.0</span>
                    </b-input-group-text>
                    <b-form-input type="text" placeholder="Enter Amount"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="col-md-7 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Input size</h4>
            <p class="card-description">
              This is the default bootstrap form layout
            </p>
            <b-form-group label="Large Input" label-for="input11">
              <b-form-input type="text" id="input11" placeholder="Username" size="lg"></b-form-input>
            </b-form-group>
            <b-form-group label="Default Input" label-for="input11">
              <b-form-input type="text" id="input11" placeholder="Username"></b-form-input>
            </b-form-group>
            <b-form-group label="Small Input" label-for="input11">
              <b-form-input type="text" id="input11" placeholder="Username" size="sm"></b-form-input>
            </b-form-group>
          </div>
          <div class="card-body">
            <h4 class="card-title">Selectize</h4>
            <b-form-group label="Small Input" label-for="input11">
              <b-form-select v-model="selected" :options="options" size="sm" />
            </b-form-group>
            <b-form-group label="Default Input" label-for="input11">
              <b-form-select v-model="selected" :options="options" />
            </b-form-group>
            <b-form-group label="Large Input" label-for="input11">
              <b-form-select v-model="selected" :options="options" size="lg" />
            </b-form-group>
          </div>
        </div>
      </div> -->
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Add Hospital</h4>
            <form class="form-sample" @submit="onSubmit">
              <p class="card-description">
                <strong>Basic info</strong>
              </p>
              <p style="color:red;">{{error}}</p>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Name">
                    <b-form-input type="text" v-model="name" required=""></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group horizontal label="Latitude">
                    <b-form-input type="text" v-model="lat" required=""></b-form-input>
                  </b-form-group>
                  </div>
                  </div>
                       <div class="row">
                          <div class="col-md-6">
                  <b-form-group horizontal label="Longitude">
                    <b-form-input type="text" v-model="lon" required=""></b-form-input>
                  </b-form-group>
                </div>
                    <div class="col-md-6">
                       <b-form-group horizontal label="DistrictName">
                   <b-form-input type="text" v-model="district" required=""></b-form-input>
                   </b-form-group>
                  </div>
                    <div class="col-md-6">
                    <b-form-group horizontal label="State">
                    <b-form-input type="text" v-model="state" required=""></b-form-input>
                  </b-form-group>
                  </div>
                   <div class="col-md-6">
                       <b-form-group horizontal label="Address">
                   <b-form-input type="text" v-model="address" required=""></b-form-input>
                   </b-form-group>
                  </div>
                    <div class="col-md-6">
                    <b-form-group horizontal label="MobileNo">
                    <b-form-input type="text" v-model="mobileno" required=""></b-form-input>
                  </b-form-group>
                  </div>
                   <div class="col-md-6">
                    <b-form-group horizontal label="Category">
                    <b-form-select v-model="category" class="mb-3">
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                    <option value="Not for profit">Not for profit</option>
                    </b-form-select>
                  </b-form-group>
                  </div>
                   <div class="col-md-6">
                    <b-form-group horizontal label="Notes">
                    <b-form-input type="text" v-model="notes" required=""></b-form-input>
                  </b-form-group>
                  </div>
                  </div>
                <hr>
                <b-button variant="primary" class="btn-fw" type="submit">Submit</b-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios'
import { VueEditor } from 'vue2-editor'
import Multiselect from 'vue-multiselect'
import vSelect from 'vue-select'
export default {
  name: 'news',
  components: {
    VueEditor,
    Multiselect,
    vSelect
  },
  data () {
    return {
      name: '',
      lat: '',
      lon: '',
      district: '',
      state: '',
      address: '',
      mobileno: '',
      loading: false,
      error: '',
      category: '',
      notes: ''
    }
  },
  watch: {
    name: function () {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.name + '&key=AIzaSyArDc0ju05bFkYGy4D90Dv9bAYl9hII5Ws')
        .then(response => {
          if (response.data.results.length === 0) {
            this.address = ''
            this.state = ''
          } else {
            this.district = response.data.results[0].address_components[0].long_name
            this.address = response.data.results[0].formatted_address
            this.lat = response.data.results[0].geometry.location.lat
            this.lon = response.data.results[0].geometry.location.lng
            for (var i = 0; i <= response.data.results[0].address_components.length; i++) {
              if (response.data.results[0].address_components[i].types[0] === 'administrative_area_level_1') {
                this.state = response.data.results[0].address_components[i].long_name
              }
            }
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  methods: {
    resetForm () {
      this.name = ''
      this.lat = ''
      this.lon = ''
      this.district = ''
      this.state = ''
      this.address = ''
      this.mobileno = ''
      this.error = ''
      this.category = ''
      this.notes = ''
    },
    onSubmit (evt) {
      evt.preventDefault()
      // let formData = new FormData()
      // formData.append('name', this.name)
      // formData.append('scientificName', this.scientificName)
      // // formData.append('reginonalNames', this.reginonalNames)
      // formData.append('distribution', this.distribution)
      // formData.append('characteristics', this.characteristics)
      // formData.append('description', this.description)
      // formData.append('family', this.family)
      // formData.append('venomType', this.venomType)
      this.loading = true
      axios({
        method: 'post',
        url: 'http://18.191.40.18/hospital/',
        data: {
          name: this.name,
          lat: this.lat,
          lon: this.lon,
          Districtname: this.district,
          State: this.state,
          address: this.address,
          mobileno: this.mobileno,
          category: this.category,
          notes: this.notes
        },
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      })
        .then(response => {
          this.resetForm()
          alert('Successfully Added Hospital')
          this.loading = false
        })
        .catch(e => {
          this.loading = false
          console.log(e.response.data.msg)
          this.error = e.response.data.msg
          alert('Failed')
        })
    }
  }
}
</script>

<style scoped lang="scss">
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  width: 20%;
}
</style>
