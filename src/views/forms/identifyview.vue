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
          <h4 class="card-title mb-0">Snake Reports List</h4>
            <div class="justify-content-centermy-1 row">
                 <b-form-fieldset horizontal label="Rows per page" class="col-6">
                  <b-form-select :options="[{text:20,value:20},{text:30,value:30},{text:50,value:50}]" v-model="perPage">
                  </b-form-select>
                </b-form-fieldset>

                <b-form-fieldset horizontal label="Filter" class="col-6">
                  <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                </b-form-fieldset>
              </div>
              <template>
                <b-table striped hover :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter" style="font-weight: 200;">
                  <template id="pdcy" slot="photo" slot-scope="item" style="text-align:center;"><img v-bind:src="'http://18.191.40.18/u/'+item.item.photo" width="20%" height="auto">
                  </template>
                  <template id="pdcy" slot="issnakebite" slot-scope="item">
                  <a v-if="item.item.issnakebite == true">Just for Knowledge</a><a v-else>Snakebite Case</a>
                  </template>
                   <template id="pdcy" slot="didadminreply" slot-scope="item">
                    <!-- <router-link :to="'/view/' + item.item._id">Approve</router-link> -->
                   <button class="btn btn-primary" v-if="item.item.didadminreply == false" style="color:white;"> <router-link :to="'/identifyreply/' + item.item._id" style="color:white;text-decoration: none;">Reply Now</router-link></button>
                   <button class="btn btn-warning" v-if="item.item.didadminreply == true">Already Replied</button>
                  </template>
                   <template id="pdcy" slot="_id" slot-scope="item">
                  <button class="btn btn-danger" @click="deleteLocation(item)">Delete</button>
                  </template>
                </b-table>
              </template>
               <div class="justify-content-center row my-1">
                <b-pagination size="md" :total-rows="this.items.length" :per-page="perPage" v-model="currentPage" />
              </div>
        </div>
     </div>
    </div>
  </div>
  </section>
 </template>
<script lang="js">
import axios from 'axios'
export default {
  name: 'news',
  data () {
    return {
      items: [],
      itemsnew: [],
      fields: [
        {
          key: 'timeofincident',
          sortable: true
        },
        {
          key: 'where',
          label: 'Location'
        },
        {
          key: 'issnakebite',
          sortable: true
        },
        {
          key: 'photo',
          label: 'Images',
          sortable: true,
          tdClass: 'nameOfTheClass'
        },
        {
          key: 'didadminreply',
          label: 'Reply'
        },
        {
          key: '_id',
          label: 'Delete',
          sortable: true
        }
      ],
      currentPage: 1,
      perPage: 20,
      filter: null,
      striped: true,
      loading: false
    }
  },
  mounted: function () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
      axios({
        url: 'http://18.191.40.18/adminreply/all',
        method: 'GET',
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      }).then(response => {
        this.items = response.data.data
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
    deleteLocation: function (item) {
      var vm = this
      vm.item = item.item._id
      this.loading = true
      axios({
        method: 'GET',
        headers: {
          'x-auth-token': localStorage.getItem('token')
        },
        url: 'http://18.191.40.18/adminreply/delete',
        params: {
          id: vm.item
        }
      }).then(response => {
        this.getList()
        alert('Successfully Deleted Reports')
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
.nameOfTheClass {
  max-width: 250px;
}
</style>
