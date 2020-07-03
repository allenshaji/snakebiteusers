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
          <h4 class="card-title mb-0">User List</h4>
          <div v-if="items.length > 0">
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
                 <template id="pdcy" slot="_id" slot-scope="item">
                    <!-- <router-link :to="'/view/' + item.item._id">Approve</router-link> -->
                   <button class="btn btn-primary" @click="approve(item)" v-if="item.item.status == false">Approve</button>
                   <button class="btn btn-warning" v-if="item.item.status == true">Already Approved</button>
                  </template>
                </b-table>
              </template>
               <div class="justify-content-center row my-1">
                <b-pagination size="md" :total-rows="this.items.length" :per-page="perPage" v-model="currentPage" />
              </div>
              </div>
              <div v-else>
                <p style="padding-top:10px;padding-bottom:10px">

                  Good job admin!! All users are approved

                </p>


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
      fields: [
        {
          key: 'username',
          sortable: true
        },
        {
          key: 'name'
        },
        {
          key: 'phone',
          sortable: true
        },
        {
          key: 'email',
          sortable: true
        },
        {
          key: '_id',
          label: 'Approve',
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
        url: 'http://13.126.210.153/users/new/',
        method: 'GET'
      }).then(response => {
        this.items = response.data.data
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
    approve: function (item) {
      var vm = this
      vm.item = item.item._id
      axios({
        method: 'POST',
        // headers: {
        //             Authorization: localStorage.getItem("token")
        //         },
        url: 'http://13.126.210.153/user/activate',
        data: {
          id: vm.item
        }
      }).then(response => {
        alert('User was successfully Approved')
        this.getList()
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
