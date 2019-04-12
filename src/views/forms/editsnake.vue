<template lang="html">

  <section class="news">
    <div class="row">
      <div id='loadingmessage' style="text-align:center;margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 100%; height: 100%; background-color: white; z-index: 30001; opacity: 0.8;" v-if="loading">
                            <p style="position: absolute; color: White; top: 40%; left: 40%;">
                                <img src='../../assets/snakes.gif' /></p>
                        </div>
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Edit the details</h4>
                       <form class="form-sample" @submit="onSubmit">
              <p class="card-description">
                <strong>Basic info</strong>
              </p>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Common Name" description="Common Name" label-for="input14">
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
                 <!-- <div class="row" v-for="(det, index) in reginonalNames" :key="index">
                    <div class="col-md-6">
                    <b-form-group horizontal label="State">
                    <b-form-input type="text" v-model="det.state"></b-form-input>
                  </b-form-group>
                  </div>
                    <div class="col-md-6">
                    <b-form-group horizontal label="Regional Name">
                    <b-form-input type="text" v-model="det.name"></b-form-input>
                  </b-form-group>
                  </div>
                  </div>
                <a @click="addNewDetect" style="color:red;"><i>Add Another State</i></a> -->
                       <div class="row">
                              <div class="col-md-6">
                  <b-form-group description="Other Names" horizontal label="Other Names">
                    <b-form-input type="text" v-model="othernames"></b-form-input>
                  </b-form-group>
                </div>
                    <div class="col-md-6">
                       <b-form-group horizontal label="State">
                  <v-select multiple v-model="states" :options="option"></v-select>
                   </b-form-group>
                  </div>
                    <div class="col-md-6">
                    <b-form-group horizontal label="Regional Name">
                    <b-form-input type="text" v-model="rname"></b-form-input>
                  </b-form-group>
                  </div>
                  </div>
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
                    <b-form-select v-model="venomType" class="mb-3">
      <option value="Highly Venomous">Highly Venomous</option>
      <option value="Mildly Venomous">Mildly Venomous</option>
      <option value="Non Venomous">Non Venomous</option>
    </b-form-select>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Family" >
                      <b-form-select v-model="family" class="mb-3">
     <option>Acrochordus</option>
<option>Ahaetulla</option>
<option>Amphiesma</option>
<option>Archelaphe</option>
<option>Argyrogena</option>
<option>Argyrophis</option>
<option>Atretium</option>
<option>Blythia</option>
<option>Boiga</option>
<option>Brachyophidium</option>
<option>Bungarus</option>
<option>Calamaria</option>
<option>Calliophis</option>
<option>Cantoria</option>
<option>Cerberus</option>
<option>Chrysopelea</option>
<option>Coelognathus</option>
<option>Coronella</option>
<option>Cyclophiops</option>
<option>Daboia</option>
<option>Dendrelaphis</option>
<option>Dieurostus</option>
<option>Dryocalamus</option>
<option>Echis</option>
<option>Elachistodon</option>
<option>Elaphe</option>
<option>Enhydris</option>
<option>Eryx</option>
<option>Euprepiophis</option>
<option>Ferania</option>
<option>Fordonia</option>
<option>Fowlea</option>
<option>Gerarda</option>
<option>Gerrhopilus</option>
<option>Gloydius</option>
<option>Gongylosoma</option>
<option>Gonyosoma</option>
<option>Grypotyphlops</option>
<option>Hebius</option>
<option>Herpetoreas</option>
<option>Homalopsis</option>
<option>Hydrophis</option>
<option>Hypnale</option>
<option>Hypsiscopus</option>

<option>Indotyphlops</option>
<option>Laticauda</option>
<option>Liopeltis</option>
<option>Lycodon</option>
<option>Lytorhynchus</option>
<option>Macropisthodon</option>
<option>Macrovipera</option>
<option>Malayopython</option>
<option>Melanophidium</option>
<option>Melanophidium</option>
<option>Myriopholis</option>
<option>Naja</option>
<option>Oligodon</option>
<option>Ophiophagus</option>
<option>Oreocryptophis</option>
<option>Ovophis</option>
<option>Pareas</option>
<option>Platyceps</option>
<option>Platyplectrurus</option>
<option>Plectrurus</option>
<option>Protobothrops</option>
<option>Psammodynastes</option>
<option>Psammophis</option>
<option>Pseudoplectrurus</option>
<option>Pseudoxenodon</option>
<option>Ptyas</option>
<option>Python</option>
<option>Rhabdophis</option>
<option>Rhabdops</option>
<option>Rhinophis</option>
<option>Sibynophis</option>
<option>Sinomicrurus</option>
<option>Sinonatrix</option>
<option>Spalerosophis</option>
<option>Stoliczkia</option>
<option>Teretrurus</option>
<option>Trachischium</option>
<option>Trimeresurus</option>
<option>Tropidolaemus</option>
<option>Uropeltis</option>
<option>Wallaceophis</option>
<option>Wallophis</option>
<option>Xenochrophis</option>
<option>Xenopeltis</option>
<option>Xylophis</option>
    </b-form-select>
                  </b-form-group>
                </div>
                 <div class="col-md-6">
                  <b-form-group horizontal label="Occurence" >
                    <b-form-select v-model="occurence" class="mb-3">
      <option value="Common">Common</option>
      <option value="Uncommon">Uncommon</option>
      <option value="Rare">Rare</option>
    </b-form-select>
                  </b-form-group>
                </div>
              </div>
                         <div class="row">
                              <div class="col-md-6">
                  <b-form-group horizontal label="WLPA" >
                    <b-form-select v-model="wlpa" class="mb-3">
      <option value="Schedule  -I">Schedule  -I</option>
      <option value="Schedule  -II">Schedule  -II</option>
      <option value="Schedule  -III">Schedule  -III</option>
       <option value="Schedule  -IV">Schedule  -IV</option>
      <option value="Not Listed">Not Listed</option>
      <option value="Vulnerable (VU)">Vulnerable (VU)</option>
       <option value="Near Threatened (NT)">Near Threatened (NT)</option>
      <option value="Conservation Dependent (CD)">Conservation Dependent (CD)</option>
      <option value="Extinct (EX)">Extinct (EX)</option>
      <option value="Non Venomous">Extinct in the Wild (EW)</option>
    </b-form-select>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group horizontal label="IUCN" >
                     <b-form-select v-model="iucn" class="mb-3">
      <option value="Not Evaluated (NE)">Not Evaluated (NE)</option>
      <option value="Data Deficient (DD)">Data Deficient (DD)</option>
      <option value="Least Concern (LC)">Least Concern (LC)</option>
       <option value="Critically Endangered (CR)">Critically Endangered (CR)</option>
      <option value="Endangered (EN)">Endangered (EN)</option>
      <option value="Vulnerable (VU)">Vulnerable (VU)</option>
       <option value="Near Threatened (NT)">Near Threatened (NT)</option>
      <option value="Conservation Dependent (CD)">Conservation Dependent (CD)</option>
      <option value="Extinct (EX)">Extinct (EX)</option>
      <option value="Non Venomous">Extinct in the Wild (EW)</option>
    </b-form-select>
                  </b-form-group>
                </div>
                </div>
                          <div class="row">
                              <div class="col-md-6">
                  <b-form-group horizontal label="Scalation" >
                    <vue-editor v-model="characteristics"></vue-editor>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group horizontal label="Description" >
                    <vue-editor v-model="description" required=""></vue-editor>
                  </b-form-group>
                </div>
                </div>
                 <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Short Description" >
                    <vue-editor v-model="shortdes" required=""></vue-editor>
                  </b-form-group>
                </div>
                 <div class="col-md-6">
                       <b-form-group horizontal label="Assign to Expert">
                  <v-select multiple v-model="experts" :options="expert" required=""></v-select>
                   </b-form-group>
                  </div>
                </div>
                <!-- <div class="row">
                <div class="col-md-4">
                  <input type="file" accept="image/*" id="file" ref="file" required="" @change="onFileChanged">
             <div id="preview">
           <img v-if="url" :src="url" />
            </div>
             </div>
            <div class="col-md-4">
                  <b-form-group horizontal label="Caption" label-for="input15">
                    <b-form-input type="text"  v-model="caption"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-4">
                  <b-form-group horizontal label="Author" label-for="input15">
                    <b-form-input type="text"  v-model="author"></b-form-input>
                  </b-form-group>
                </div>
              </div> -->
                <b-button variant="primary" class="btn-fw" type="submit" style="float:right;">Update Data</b-button>
            </form>
          </div>
          <hr>
                  <div class="card-body">
                   <h4 class="card-title">Add New Images</h4>
                   <form class="form-sample" @submit="imagesubmit">
                  <div class="row">
                <div class="col-md-3">
                  <input type="file" accept="image/*" id="file" ref="file" required="" @change="onFileChanged">
             <div id="preview">
           <img v-if="url" :src="url" />
            </div>
             </div>
            <div class="col-md-3">
                  <b-form-group horizontal label="Caption" label-for="input15">
                    <b-form-input type="text"  v-model="caption"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-3">
                  <b-form-group horizontal label="Author" label-for="input15">
                    <b-form-input type="text"  v-model="author"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-3"> <b-button variant="primary" class="btn-fw" type="submit">Add New Image</b-button></div>
              </div>
              </form>
                </div>
                <hr>
                  <div class="card-body">
                   <h4 class="card-title">View Images</h4>
                  <div class="row" v-for = "pic in photographs" v-bind:key="pic.url" style="margin-top:20px;">
                <div class="col-md-4">
                  <img v-bind:src="'http://18.191.40.18/u/'+pic.url" height="auto" width="100%" />
             </div>
             <div class="col-md-4">
                <button class="btn btn-danger" @click="deleteImage(pic)">Delete</button>
             </div>
              </div>
                </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios'
import { VueEditor } from 'vue2-editor'
import vSelect from 'vue-select'
export default {
  name: 'news',
  props: ['id'],
  components: {
    VueEditor,
    vSelect
  },
  data () {
    return {
      file: null,
      ids: '',
      name: '',
      scientificName: '',
      distribution: '',
      othernames: '',
      characteristics: '',
      description: '',
      family: '',
      venomType: '',
      caption: '',
      author: '',
      occurence: '',
      reginonalNames: [{
        name: null,
        state: null
      }],
      snakeImages: [{
        snakes: null,
        credits: null
      }],
      selectedFile: null,
      url: '',
      loading: false,
      photographs: [],
      fid: '',
      option: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar', 'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'],
      selected: '',
      states: [],
      rname: '',
      wlpa: '',
      iucn: '',
      shortdes: '',
      items1: [],
      experts: [],
      expert: []
    }
  },
  mounted: function () {
    this.getExperts()
  },
  methods: {
    getExperts () {
      this.loading = true
      axios({
        url: 'http://18.191.40.18/user/experts',
        method: 'GET'
      }).then(response => {
        this.items1 = response.data.data
        var temp = []
        for (var i = 0; i < this.items1.length; i++) {
          var ty = this.items1[i].name
          temp.push(ty)
        }
        this.expert = temp
        this.loading = false
        this.getAll()
      }).catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
      this.url = URL.createObjectURL(this.selectedFile)
    },
    addNewDetect: function () {
      this.reginonalNames.push({
        name: null,
        state: null
      })
    },
    resetForm () {
      this.author = ''
      this.caption = ''
      this.selectedFile = ''
      this.url = ''
      this.file = null
    },
    getAll () {
      this.loading = true
      console.log(this.items1)
      axios({
        url: 'http://18.191.40.18/snake/' + this.id,
        method: 'POST'
      }).then(response => {
        this.items = response.data.data
        var d = this.items
        this.fid = d._id
        this.name = d.name
        this.scientificName = d.scientificName
        this.distribution = d.distribution
        this.characteristics = d.characteristics
        this.description = d.description
        this.venomType = d.venomType
        this.family = d.family
        this.occurence = d.occurence
        this.states = d.states
        this.wlpa = d.wlpa
        this.iucn = d.iucn
        this.shortdes = d.shortdes
        this.rname = d.rname
        this.othernames = d.othernames
        var temp = []
        if (d.experts.length > 0) {
          for (var p = 0; p < this.items1.length; p++) {
            for (var i = 0; i < d.experts.length; i++) {
              console.log(d.experts[i])
              console.log(this.items1[p]._id)
              if (d.experts[i] === this.items1[p]._id) {
                var ty = this.items1[p].name
                temp.push(ty)
              }
            }
          }
        }
        console.log(temp)
        this.experts = temp
        // var temp = []
        // for (var i = 0; i < d.reginonalNames.length; i++) {
        //   var ty = {
        //     name: d.reginonalNames[i].name,
        //     state: d.reginonalNames[i].state
        //   }
        //   temp.push(ty)
        // }
        // this.reginonalNames = temp
        var tempr = []
        for (var j = 0; j < d.photographs.length; j++) {
          var tyz = {
            _id: d.photographs[j]._id,
            author: d.photographs[j].author,
            caption: d.photographs[j].caption,
            url: d.photographs[j].url
          }
          tempr.push(tyz)
        }
        this.photographs = tempr
        console.log(this.photographs)
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.loading = true
      var temp = []
      for (var i = 0; i < this.items1.length; i++) {
        for (var j = 0; j < this.experts.length; j++) {
          if (this.items1[i].name === this.experts[j]) {
            var ty = this.items1[i]._id
            temp.push(ty)
          }
        }
      }
      axios({
        method: 'post',
        url: 'http://18.191.40.18/snake/edit',
        data: {
          id: this.id,
          name: this.name,
          scientificName: this.scientificName,
          states: this.states,
          rname: this.rname,
          distribution: this.distribution,
          characteristics: this.characteristics,
          description: this.description,
          venomType: this.venomType,
          family: this.family,
          occurence: this.occurence,
          wlpa: this.wlpa,
          iucn: this.iucn,
          shortdes: this.shortdes,
          othernames: this.othernames,
          experts: temp
        }
        // headers: {
        //   Authorization: localStorage.getItem("token")
        // }
      })
        .then(response => {
          alert('Successfully Updated Data')
          this.loading = false
          this.getExperts()
        })
        .catch(e => {
          this.loading = false
          alert('Failed')
        })
    },
    imagesubmit (evt) {
      evt.preventDefault()
      this.loading = true
      let formData = new FormData()
      formData.append('id', this.id)
      formData.append('photo', this.selectedFile)
      formData.append('caption', this.caption)
      formData.append('author', this.author)
      axios({
        method: 'post',
        url: 'http://18.191.40.18/snake/image/',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          alert('Image Added Successfully')
          this.resetForm()
          this.getAll()
          this.loading = false
        })
        .catch(e => {
          alert('Too Large image!! Failed')
          this.loading = false
        })
    },
    deleteImage: function (item) {
      console.log(item)
      var vm = this
      vm.item = item._id
      this.loading = true
      axios({
        method: 'POST',
        // headers: {
        //             Authorization: localStorage.getItem("token")
        //         },
        url: 'http://18.191.40.18/snake/remove/image/',
        data: {
          id: vm.fid,
          pid: vm.item
        }
      }).then(response => {
        alert('Successfully Deleted Snake Image')
        this.getAll()
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.loading = false
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
