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
            <div class="row">
            <div class="col-md-8">
  <b-carousel
     id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    :interval="4000"
      controls
      indicators
  >
    <b-carousel-slide v-for = "pic in photographs" v-bind:key="pic.url"
      v-bind:caption="pic.caption"
     v-bind:img-src="'http://18.191.40.18/u/'+pic.url"
    ></b-carousel-slide>
  </b-carousel>
            </div>
            <div class="col-md-4">
                 <h4 class="card-title">{{name}} <i>({{scientificName}})</i></h4>
                 <div class="big4">
             <i>{{othernames}}</i>
            </div>
                 <div class="big4" v-if = "venomType == 'Highly Venomous' " style="color:red;">
            <b>{{venomType}}</b>
            </div>
            <div class="big4" v-if = "venomType == 'Mildly Venomous' " style="color:orange;">
            <b>{{venomType}}</b>
            </div>
             <div class="big4" v-if = "venomType == 'Non Venomous' " style="color:green;">
            <b>{{venomType}}</b>
            </div>
             <div class="big4">
             <b>Regional Names:</b> {{rname}}
            </div>
            <div class="big4">
             <b>Family:</b> {{family}}
            </div>
             <div class="big4">
             <b>Distribution:</b> {{distribution}}
            </div>
            <div class="big4">
             WLPA: {{wlpa}}
            </div>
             <div class="big4">
             IUCN: {{iucn}}
            </div>
            </div>
            </div>
            <br><br>
            <div class="big4">
             <b>Scalation:</b> <span v-html="characteristics"></span>
            </div>
            <div class="big4">
             <b>Morphology:</b> <span v-html="description"></span>
            </div>
             <div class="big4">
             <b>States:</b> <a v-for="s in states" v-bind:key="s">{{s}},&nbsp;</a>
            </div>
          </div>
          <hr>
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
      characteristics: '',
      description: '',
      family: '',
      venomType: '',
      caption: '',
      author: '',
      occurence: '',
      othernames: '',
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
      photos: [],
      banners: ['//placehold.it/1200x600', '//placehold.it/1200x600/333/fff', '//placehold.it/1200x600/cc2222']
    }
  },
  mounted: function () {
    this.getAll()
  },
  methods: {
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
        var tempr = []
        var tempt = []
        for (var j = 0; j < d.photographs.length; j++) {
          var tyz = {
            _id: d.photographs[j]._id,
            author: d.photographs[j].author,
            caption: d.photographs[j].caption,
            url: d.photographs[j].url
          }
          var ty = 'http://18.191.40.18/u/' + d.photographs[j].url
          tempr.push(tyz)
          tempt.push(ty)
        }
        this.photographs = tempr
        console.log(tempt)
        this.photos = tempt
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.loading = true
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
          shortdes: this.shortdes
        }
        // headers: {
        //   Authorization: localStorage.getItem("token")
        // }
      })
        .then(response => {
          alert('Successfully Updated Data')
          this.loading = false
          this.getAll()
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

<style>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  width: 20%;
}
.big4 {
 margin-bottom: 10px;
}
p {
    margin-top: 0;
    margin-bottom: 1px!important;
}
</style>
