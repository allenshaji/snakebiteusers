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
              <div class="col-md-4">
                 <h4 class="card-title"><b>Location:</b> {{items.where}}</h4>
                 <!-- <div class="big4">
             <i>{{othernames}}</i>
            </div> -->
            </div>
            <div class="col-md-4">
             <b>Time of Incident:</b> {{items.timeofincident}}
            </div>
            <div class="col-md-4">
             <b>Added By:</b> {{items.added_by.email}}
            </div>
            <div class="big4">
             <img v-bind:src="'http://13.126.210.153/u/'+items.photo" width="100%" height="auto">
            </div>
             </div>
             </div>
             </div>
             </div>
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Reply Now</h4>
                       <form class="form-sample" @submit="onSubmit">
              <!-- <p class="card-description">
                <strong>Basic info</strong>
              </p> -->
              <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Name" description="Name" label-for="input14">
                    <b-form-input type="text" v-model="name"></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group description="Venomtype" horizontal label="Venon Type">
                    <b-form-input type="text" v-model="venomType"></b-form-input>
                  </b-form-group>
                </div>
              </div>
                       <div class="row">
                              <div class="col-md-6">
                  <b-form-group description="Reply" horizontal label="Reply">
                    <b-form-input type="text" v-model="reply"></b-form-input>
                  </b-form-group>
                </div>
                    <div class="col-md-6">
                    <b-form-group horizontal label="Description">
                    <b-form-input type="text" v-model="description"></b-form-input>
                  </b-form-group>
                  </div>
                  </div>
                <hr>
                <b-button variant="primary" class="btn-fw" type="submit" style="float:right;">Reply Now</b-button>
            </form>
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
      items: [],
      name: '',
      venomType: '',
      reply: '',
      description: '',
      loading: false
    }
  },
  mounted: function () {
    this.getAll()
  },
  methods: {
    getAll () {
      this.loading = true
      axios({
        url: 'http://13.126.210.153/adminreply/',
        method: 'GET',
        params: {
          id: this.id
        }
      }).then(response => {
        this.items = response.data.data
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
        url: 'http://13.126.210.153/adminreply/',
        data: {
          id: this.id,
          name: this.name,
          venomtype: this.venomType,
          reply: this.reply,
          details: this.description
        },
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      })
        .then(response => {
          alert('Successfully Updated Data')
          this.$router.push('/identifyview')
          this.loading = false
        })
        .catch(e => {
          this.loading = false
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
