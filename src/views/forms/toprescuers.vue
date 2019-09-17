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
          <h4 class="card-title mb-0">Top Users</h4>
        
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
                   {{item.item.user.username}}
                  </template>
                   <template id="pdcy" slot="user" slot-scope="item">
                   {{item.item.user.email}}
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
      fields: [
        {
          key: '_id',
          sortable: true,
          label: 'Username'
        },
        {
          key: 'count',
          label: 'Count'
        },
        {
          key: 'user',
          label: 'Email'
        }
      ],
      json_fields: {
        "Username": "username",
        "Email": "email"
      },
      json_data: [],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8"
          }
        ]
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
        url: 'http://18.191.40.18/user/allstats',
        method: 'GET'
      }).then(response => {
        this.items = response.data.data.topusers
        this.loading = false
      }).catch(e => {
        console.log(e)
        this.loading = false
      })
    },
  }
}
</script>
