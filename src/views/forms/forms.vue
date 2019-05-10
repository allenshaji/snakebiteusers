<template lang="html">

  <section class="news">
    <div class="row">
      <div id='loadingmessage' style="text-align:center;margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 100%; height: 100%; background-color: white; z-index: 30001; opacity: 0.8;" v-if="loading">
                            <p style="position: absolute; color: White; top: 40%; left: 40%;">
                                <img src='../../assets/snakes.gif' /></p>
                        </div>
      <!-- <div class="col-md-6 d-flex align-items-stretch grid-margin">
        <div class="row flex-grow">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Default form</h4>
                <p class="card-description">
                  Basic form layout
                </p>
                <form class="forms-sample">
                  <b-form-group label="Email"  label-for="input1">
                    <b-form-input type="email" id="input1" placeholder="Email address"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password"  label-for="input2">
                    <b-form-input type="password" id="input2" placeholder="Password"></b-form-input>
                  </b-form-group>
                  <b-button type="submit" variant="success" class="mr-2">Submit</b-button>
                  <b-button variant="light">Cancel</b-button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Horizontal Form</h4>
                <p class="card-description">
                  Horizontal form layout
                </p>
                <form class="forms-sample">
                  <form class="forms-sample">
                    <b-form-group horizontal label="Email"  label-for="input3">
                      <b-form-input type="email" id="input3" placeholder="Email address"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Password"  label-for="input4">
                      <b-form-input type="password" id="input4" placeholder="Password"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="success" class="mr-2">Submit</b-button>
                    <b-button variant="light">Cancel</b-button>
                  </form>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic form</h4>
            <p class="card-description">
              Basic form elements
            </p>
            <form class="forms-sample">
              <b-form-group label="Name"  label-for="input5">
                <b-form-input type="text" id="input5" placeholder="Name"></b-form-input>
              </b-form-group>
              <b-form-group label="Email address"  label-for="input6">
                <b-form-input type="email" id="input6" placeholder="Email"></b-form-input>
              </b-form-group>
              <b-form-group label="Password"  label-for="input7">
                <b-form-input type="password" id="input7" placeholder="Password"></b-form-input>
              </b-form-group>
              <b-form-group label="Upload file" label-for="input8">
                <b-form-file v-model="file" id="inpu8" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
              </b-form-group>
              <b-form-group label="City"  label-for="input9">
                <b-form-input type="text" id="input9" placeholder="Location"></b-form-input>
              </b-form-group>
              <b-form-group label="Message"  label-for="input10">
                <b-form-textarea id="input10" v-model="text" placeholder="Message" :rows="3" :max-rows="6"></b-form-textarea>
              </b-form-group>
              <b-button type="submit" variant="success" class="mr-2">Submit</b-button>
              <b-button variant="light">Cancel</b-button>
            </form>
          </div>
        </div>
      </div> -->
      <!-- <div class="col-md-5 d-flex align-items-stretch">
        <div class="row flex-grow">
          <div class="col-12 grid-margin">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Basic input groups</h4>
                <p class="card-description">
                  Basic bootstrap input groups
                </p>
                <b-form-group>
                  <b-input-group prepend="@">
                    <b-form-input placeholder="Username"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group append="@">
                    <b-form-input placeholder="Username"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group prepend="$" append=".00">
                    <b-form-input></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend">
                      <span>$</span>
                    </b-input-group-text>
                    <b-input-group-text slot="prepend">
                      <span>00.0</span>
                    </b-input-group-text>
                    <b-form-input type="text" placeholder="Enter Amount"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </div>
            </div>
          </div> -->
          <!-- <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Colored input groups</h4>
                <p class="card-description">
                  Input groups with colors
                </p>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend" class="bg-info text-white">
                      <span>@</span>
                    </b-input-group-text>
                    <b-form-input placeholder="Username"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-form-input placeholder="Username"></b-form-input>
                    <b-input-group-text slot="append" class="bg-info text-white">
                      <span>@</span>
                    </b-input-group-text>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend" class="bg-info text-white">
                      <span>$</span>
                    </b-input-group-text>
                    <b-form-input></b-form-input>
                    <b-input-group-text slot="append" class="bg-info text-white">
                      <span>.00</span>
                    </b-input-group-text>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend" class="bg-secondary text-primary">
                      <span>$</span>
                    </b-input-group-text>
                    <b-input-group-text slot="prepend" class="bg-secondary text-primary">
                      <span>00.0</span>
                    </b-input-group-text>
                    <b-form-input type="text" placeholder="Enter Amount"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="col-md-7 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Input size</h4>
            <p class="card-description">
              This is the default bootstrap form layout
            </p>
            <b-form-group label="Large Input" label-for="input11">
              <b-form-input type="text" id="input11" placeholder="Username" size="lg"></b-form-input>
            </b-form-group>
            <b-form-group label="Default Input" label-for="input11">
              <b-form-input type="text" id="input11" placeholder="Username"></b-form-input>
            </b-form-group>
            <b-form-group label="Small Input" label-for="input11">
              <b-form-input type="text" id="input11" placeholder="Username" size="sm"></b-form-input>
            </b-form-group>
          </div>
          <div class="card-body">
            <h4 class="card-title">Selectize</h4>
            <b-form-group label="Small Input" label-for="input11">
              <b-form-select v-model="selected" :options="options" size="sm" />
            </b-form-group>
            <b-form-group label="Default Input" label-for="input11">
              <b-form-select v-model="selected" :options="options" />
            </b-form-group>
            <b-form-group label="Large Input" label-for="input11">
              <b-form-select v-model="selected" :options="options" size="lg" />
            </b-form-group>
          </div>
        </div>
      </div> -->
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body" v-if = "id == ''">
            <h4 class="card-title">Enter the details</h4>
            <form class="form-sample" @submit="onSubmit">
              <p style="color:red;">{{err}}</p>
              <p class="card-description">
                <strong>Basic info</strong>
              </p>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Common Name" description="Common Name" label-for="input14">
                    <b-form-input type="text" v-model="name" required></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group description="Scientic Name" horizontal label="Scientic Name">
                    <b-form-input type="text" v-model="scientificName" required></b-form-input>
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
                  <b-form-group horizontal label="Genus" >
                      <b-form-select v-model="genus" class="mb-3">
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
                    <vue-editor v-model="description" ></vue-editor>
                  </b-form-group>
                </div>
                </div>
                 <div class="row">
                <div class="col-md-6">
                  <b-form-group horizontal label="Short Description" >
                    <vue-editor v-model="shortdes"></vue-editor>
                  </b-form-group>
                </div>
                 <div class="col-md-6">
                       <b-form-group horizontal label="Assign to Expert">
                  <v-select multiple v-model="experts" :options="expert" ></v-select>
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
                <b-button variant="primary" class="btn-fw" type="submit">Submit</b-button>
            </form>
          </div>
           <div class="card-body" v-if = "id != ''">
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
      file: null,
      id: '',
      ids: '',
      name: '',
      scientificName: '',
      othernames: '',
      distribution: '',
      characteristics: '',
      description: '',
      shortdes: '',
      family: '',
      venomType: '',
      caption: '',
      author: '',
      occurence: '',
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ],
      GenderSelect: [
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' }
      ],
      Category: [
        { value: 'a', text: 'Category 1' },
        { value: 'b', text: 'Category 2' },
        { value: 'c', text: 'Category 3' },
        { value: 'd', text: 'Category 4' },
        { value: 'e', text: 'Category 5' }
      ],
      countries: [
        { value: 'America', text: 'America' },
        { value: 'Italy', text: 'Italy' },
        { value: 'Russia', text: 'Russia' },
        { value: 'China', text: 'China' },
        { value: 'Britain', text: 'Britain' }
      ],
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
      value: null,
      option: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar', 'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'],
      selected: '',
      states: [],
      rname: '',
      wlpa: '',
      iucn: '',
      items: [],
      experts: [],
      expert: [],
      err: '',
      genus: ''
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
        console.log(response.data.data)
        this.items = response.data.data
        var temp = []
        for (var i = 0; i < this.items.length; i++) {
          var ty = this.items[i].name
          temp.push(ty)
        }
        this.expert = temp
        this.loading = false
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
    addNewImages: function () {
      this.snakeImages.push({
        snakes: null,
        credits: null
      })
    },
    resetForm () {
      this.err = ''
      this.author = ''
      this.caption = ''
      this.selectedFile = ''
      this.url = ''
      this.file = null
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
      var temp = []
      for (var i = 0; i < this.items.length; i++) {
        for (var j = 0; j < this.experts.length; j++) {
          if (this.items[i].name === this.experts[j]) {
            var ty = this.items[i]._id
            temp.push(ty)
          }
        }
      }
      console.log(temp)
      axios({
        method: 'post',
        url: 'http://18.191.40.18/snake/',
        data: {
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
          genus: this.genus,
          experts: temp
        }
        // headers: {
        //   Authorization: localStorage.getItem("token")
        // }
      })
        .then(response => {
          this.id = response.data.data._id
          alert('Successfully added')
          this.loading = false
        })
        .catch(e => {
          this.loading = false
          this.err = e.response.data.msg
          alert(this.err)
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
          this.loading = false
        })
        .catch(e => {
          alert('Too Large image!! Failed')
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
