<template lang="html">

  <section class="forms">
    <div class="row">
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
            <h4 class="card-title">Enter the details</h4>
            <form class="form-sample" @submit="onSubmit">
              <p class="card-description">
                <strong>Basic info</strong>
              </p>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Snake Name" description="Snake Name" label-for="input14">
                    <b-form-input type="text" v-model="name"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group description="Scientic Name" horizontal label="Scientic Name">
                    <b-form-input type="text" v-model="scientificName"></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <!-- <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Regional Names" description="Regional Names">
                    <b-form-select v-model="selected" :options="GenderSelect" placeholder="Select Gender"/>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group horizontal label="Date of birth" description="DD/MM/YYYY">
                    <b-form-input></b-form-input>
                  </b-form-group>
                </div>
              </div> -->
                 <div class="row" v-for="(det, index) in reginonalNames" :key="index">
                    <div class="col-md-6">
                    <b-form-group horizontal label="State">
                    <b-form-input type="text" v-model="det.state"></b-form-input>
                  </b-form-group>
                  </div>
                    <div class="col-md-6">
                    <b-form-group horizontal label="Name">
                    <b-form-input type="text" v-model="det.name"></b-form-input>
                  </b-form-group>
                  </div>
                                            <!-- <button class="close" @click.prevent="reginonalNames.splice(index, 1)">&times;</button> -->
                  </div>
                <a @click="addNewDetect"><i>Add Another Names</i></a>
                <hr>
              <p class="card-description">
                <strong>Other Info</strong>
              </p>
               <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Distribution">
                    <b-form-input type="text" v-model="distribution"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <!-- <b-form-group horizontal label="Membership">
                    <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent">
                      <b-form-radio value="Free">Free</b-form-radio>
                      <b-form-radio value="Professional">Professional</b-form-radio>
                    </b-form-radio-group>
                  </b-form-group> -->
                   <b-form-group horizontal label="Venom Type">
                    <b-form-input type="text" v-model="venomType"></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Family" label-for="input15">
                    <b-form-input type="text"  v-model="family"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group horizontal label="Characteristics" label-for="input16">
                    <b-form-input type="text"  v-model="characteristics"></b-form-input>
                  </b-form-group>
                </div>
              </div>
               <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Description" label-for="input15">
                    <b-form-input type="text"  v-model="description"></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <input type="file" @change="onFileChanged">
                <b-button variant="primary" class="btn-fw" type="submit">Submit</b-button>
              <!-- <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Address 2" label-for="input17">
                    <b-form-input type="text" id="input17"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group horizontal label="Pincode" label-for="input18">
                    <b-form-input type="text" id="input18"></b-form-input>
                  </b-form-group>
                </div>
              </div> -->
              <!-- <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="City" label-for="input19">
                    <b-form-input type="text" id="input19"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group horizontal label="Country">
                    <b-form-select v-model="selected" :options="countries"/>
                  </b-form-group>
                </div>
              </div> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios'
export default {
  name: 'forms',
  data () {
    return {
      file: null,
      id: '',
      name: '',
      scientificName: '',
      distribution: '',
      characteristics: '',
      description: '',
      family: '',
      venomType: '',
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: {'C': '3PO'}, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      GenderSelect: [
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' }
      ],
      Category: [
        { value: 'a', text: 'Category 1' },
        { value: 'b', text: 'Category 2' },
        { value: 'c', text: 'Category 3' },
        { value: 'd', text: 'Category 4' },
        { value: 'e', text: 'Category 5' }
      ],
      countries: [
        { value: 'America', text: 'America' },
        { value: 'Italy', text: 'Italy' },
        { value: 'Russia', text: 'Russia' },
        { value: 'China', text: 'China' },
        { value: 'Britain', text: 'Britain' }
      ],
      reginonalNames: [{
        name: null,
        state: null
      }],
      selectedFile: null
    }
  },
  methods: {
    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
    },
    addNewDetect: function () {
      this.reginonalNames.push({
        name: null,
        state: null
      })
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
      axios({
        method: 'post',
        url: 'http://18.191.40.18/snake/',
        data: {
          name: this.name,
          scientificName: this.scientificName,
          reginonalNames: this.reginonalNames,
          distribution: this.distribution,
          characteristics: this.characteristics,
          description: this.description,
          venomType: this.venomType,
          family: this.family
        }
        // headers: {
        //   Authorization: localStorage.getItem("token")
        // }
      })
        .then(response => {
          console.log(response.data.data._id)
          this.id = response.data.data._id
          let formData = new FormData()
          formData.append('id', response.data.data._id)
          formData.append('photo', this.selectedFile)
          console.log(formData)
          axios({
            method: 'post',
            url: 'http://18.191.40.18/snake/image',
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          alert('Success')
          // this.resetFormFields()
        })
        .catch(e => {
          console.log(e.message)
          this.errors.push(e)
        })
      // axios.post('http://13.233.146.113/aesgs',formData,
      //     {
      //           headers: {
      //               'Content-Type': 'multipart/form-data'
      //           }
      //         }
      //       ) .then(response => {
      //         alert("Success")
      //      this.loadData();
      //      this.resetFormFields();
      //      this.errors = [];
      //   })
      //   .catch(e => {
      //     console.log('FAILURE!!');
      //    alert("Failure");

      //   });
      // var data = {}
    }
  }
}
</script>

<style scoped lang="scss">
.forms {
}
</style>
