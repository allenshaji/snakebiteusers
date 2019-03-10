<template lang="html">

 <section class="widgets">
  <div class="row">
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
                <b-table striped hover :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter" style="font-weight: 200;"> <template id="pdcy" slot="characteristics" slot-scope="item">
                  <button class="btn btn-danger" @click="deleteSnake(item)">Delete</button>
                  </template>
                  <template id="_id" slot="_id" slot-scope="item">
                  <router-link class="btn btn-success" :to="'/editsnake/' + item.value">Edit</router-link>
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
          key: 'name',
          sortable: true
        },
        {
          key: 'distribution',
          sortable: true
        },
        {
          key: 'scientificName',
          sortable: true
        },
        {
          key: 'venomType',
          sortable: true
        },
        {
          key: 'family',
          sortable: true
        },
        {
          key: '_id',
          label: 'Edit',
          sortable: true
        },
        {
          key: 'characteristics',
          label: 'Delete',
          sortable: true
        }
      ],
      currentPage: 1,
      perPage: 20,
      filter: null,
      striped: true
    }
  },
  mounted: function () {
    this.getList()
  },
  methods: {
    getList () {
      axios({
        url: 'http://18.191.40.18/snake/all/',
        method: 'GET'
      }).then(response => {
        console.log(response.data.data)
        this.items = response.data.data
      }).catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
    deleteSnake: function (item) {
      var vm = this
      vm.item = item.item._id
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
        alert('Successfully Approved Item')
        this.getList()
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
