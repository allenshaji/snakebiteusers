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
            <h4 class="card-title">Snakebite Information Management System</h4>
            <form class="form-sample" @submit="onSubmit">
              <p class="card-description">
                <strong>Enter details</strong>
              </p>
              <p style="color:red;">{{error}}</p>
              <div class="row">
                <div class="col-md-3">
                  <b-form-group horizontal label="Date">
                    <b-form-input type="date" v-model="cdate" required=""></b-form-input>
                  </b-form-group>
                </div>
                 <div class="col-md-3">
                       <b-form-group horizontal label="State">
                  <v-select v-model="states" :options="option"></v-select>
                   </b-form-group>
                  </div>
                <div class="col-md-6">
                       <b-form-group horizontal label="Activity at the time of bite">
                     <b-form-select v-model="activity" class="mb-3">
                    <option value="Farm work">Farm work</option>
                    <option value="Sleeping in house">Sleeping in house</option>
                    <option value="House hold activity">House hold activity</option>
                    <option value="Walking outside">Walking outside</option>
                    <option value="Others">Others</option>
                    <option value="No info available">No info available</option>
                    </b-form-select>
                  </b-form-group>
                  </div>
                  </div>
                       <div class="row">
                           <div class="col-md-12">
                  <b-form-group horizontal label="Link to news">
                    <b-form-input type="text" v-model="link" required=""></b-form-input>
                  </b-form-group>
                  </div>
                          <div class="col-md-6">
                  <b-form-group horizontal label="Notes by Observer">
                    <b-form-textarea id="input10" v-model="notes" placeholder="Notes" :rows="3" :max-rows="6"></b-form-textarea>
                  </b-form-group>
                </div>
                   
                   
                   <div class="col-md-6">
                       <b-form-group horizontal label="Traditional Healing">
                     <b-form-select v-model="healing" class="mb-3">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </b-form-select>
                  </b-form-group>
                  </div>
                   <div class="col-md-4">
                       <b-form-group horizontal label="Affected People">
                   <b-form-input type="number" v-model="affectedpeople" required=""></b-form-input>
                   </b-form-group>
                  </div>
                    <div class="col-md-4">
                    <b-form-group horizontal label="Status">
                   <b-form-select v-model="status" class="mb-3">
                    <option value="Died">Died</option>
                    <option value="Referred">Referred</option>
                    <option value="Unconscious">Unconscious</option>
                     <option value="Not Known">Not Known</option>
                    </b-form-select>
                  </b-form-group>
                  </div>
                    <div class="col-md-4">
                       <b-form-group horizontal label="Hospitalized">
                     <b-form-select v-model="hospitalized" class="mb-3">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </b-form-select>
                  </b-form-group>
                  </div>
                  </div>
                <hr>
                <b-button variant="primary" class="btn-fw" type="submit">Submit</b-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import axios from 'axios'
import { VueEditor } from 'vue2-editor'
import Multiselect from 'vue-multiselect'
import vSelect from 'vue-select'
export default {
  name: 'news',
  components: {
    VueEditor,
    Multiselect,
    vSelect
  },
  data () {
    return {
      cdate: '',
      link: '',
      notes: '',
      healing: '',
      affectedpeople: '',
      status: '',
      loading: false,
      error: '',
      option: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar', 'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'],
      selected: '',
      states: '',
      activity: '',
      hospitalized: '',
    }
  },
  methods: {
    resetForm () {
      this.cdate = ''
      this.link = ''
      this.notes = ''
      this.healing = ''
      this.affectedpeople = ''
      this.status = ''
      this.states = ''
      this.activity = ''
      this.error = ''
      this.hospitalized = ''
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
      this.loading = true
      axios({
        method: 'post',
        url: 'http://18.191.40.18/snakebiteinfo/',
        data: {
          createddate: this.cdate,
          linktonews: this.link,
          note: this.notes,
          tradition: this.healing,
          affectedpeople: this.affectedpeople,
          status: this.status,
          state: this.states,
          activity: this.activity,
          hospitalized: this.hospitalized
        },
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      })
        .then(response => {
          this.resetForm()
          alert('Successfully Added')
          this.loading = false
        })
        .catch(e => {
          this.loading = false
          console.log(e.response.data.msg)
          this.error = e.response.data.msg
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
