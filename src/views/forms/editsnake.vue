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
                  </div>
                <a @click="addNewDetect" style="color:red;"><i>Add Another Names</i></a>
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
                   <b-form-group horizontal label="Venom Type">
                    <b-form-input type="text" v-model="venomType"></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Family" >
                    <b-form-input type="text"  v-model="family"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group horizontal label="Scalation" >
                    <b-form-input type="text"  v-model="characteristics"></b-form-input>
                  </b-form-group>
                </div>
              </div>
               <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Description" >
                    <vue-editor v-model="description" required=""></vue-editor>
                  </b-form-group>
                </div>
                </div>
                <b-button variant="primary" class="btn-fw" type="submit">Update Details</b-button>
            </form>
          </div>
                  <div class="card-body">
                   <h4 class="card-title">Add Images</h4>
                   <form class="form-sample" @submit="imagesubmit">
                  <div class="row">
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
              </div>
               <b-button variant="primary" class="btn-fw" type="submit">Submit</b-button>
              </form>
                </div>
                  <div class="card-body">
                   <h4 class="card-title">View Images</h4>
                  <div class="row" v-for = "pic in photographs" style="margin-top:20px;">
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
export default {
  name: 'news',
  props: ['id'],
  components: {
    VueEditor
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
      fid: ''
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
        this.characteristics = d.characteistics
        this.description = d.description
        this.venomType = d.venomType
        this.family = d.family
        var temp = []
        for (var i = 0; i < d.reginonalNames.length; i++) {
          var ty = {
            name: d.reginonalNames[i].name,
            state: d.reginonalNames[i].state
          }
          temp.push(ty)
        }
        this.reginonalNames = temp
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
      axios({
        method: 'post',
        url: 'http://18.191.40.18/snake/edit',
        data: {
          id: this.id,
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
          alert('Successfully Editted Data')
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
          alert('Success')
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
        alert('Successfully Deleted Snake')
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
