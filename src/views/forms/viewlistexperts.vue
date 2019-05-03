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
          <h4 class="card-title mb-0">Snake List</h4>
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
                  <template id="dis" slot="distribution" slot-scope="item">
                    <div v-for="d in item.item.experts" v-bind:key="d">{{d.name}}</div>
                  </template>
                  <template id="chr" slot="description" slot-scope="item">
                     <router-link :to="'/snakedetails/' + item.item._id">View Details</router-link>
                  </template>
                  <!-- <template id="pdcy" slot="characteristics" slot-scope="item">
                  <button class="btn btn-danger" @click="deleteSnake(item)">Delete</button>
                  </template>
                  <template id="_id" slot="_id" slot-scope="item">
                  <router-link class="btn btn-success" :to="'/editsnake/' + item.value">Edit</router-link>
                  </template> -->
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
      fields: [
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'distribution',
          sortable: true,
          label: 'Experts'
        },
        {
          key: 'scientificName',
          sortable: true
        },
        {
          key: 'family',
          sortable: true
        },
        // {
        //   key: '_id',
        //   label: 'Edit',
        //   sortable: true
        // },
        // {
        //   key: 'characteristics',
        //   label: 'Delete',
        //   sortable: true
        // },
        {
          key: 'description',
          label: 'View'
        }
      ],
      currentPage: 1,
      perPage: 20,
      filter: null,
      striped: true,
      loading: false,
      username: localStorage.getItem('username'),
      is_admin: localStorage.getItem('is_admin'),
      id: localStorage.getItem('id')
    }
  },
  mounted: function () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
      axios({
        url: 'http://18.191.40.18/snake/all/',
        method: 'GET'
      }).then(response => {
        console.log(response.data.data)
        this.items = response.data.data
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },

    deleteSnake: function (item) {
      var vm = this
      vm.item = item.item._id
      this.loading = true
      axios({
        method: 'DELETE',
        // headers: {
        //             Authorization: localStorage.getItem("token")
        //         },
        url: 'http://18.191.40.18/snake/',
        data: {
          id: vm.item
        }
      }).then(response => {
        alert('Successfully Deleted Snake')
        this.getList()
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.loading = false
      })
    }
  }
}
</script>
