<template lang="html">

  <section class="login" style="padding-top:100px;">
    <div class="wrapper d-flex align-items-center auth login-full-bg">
       <div id='loadingmessage' style="text-align:center;margin: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; width: 100%; height: 100%; background-color: white; z-index: 30001; opacity: 0.8;" v-if="loading">
                            <p style="position: absolute; color: White; top: 30%; left: 45%;">
                                <img src='../../assets/spinner.gif' /></p>
                        </div>
      <div class="row w-100">
        <div class="col-lg-6 mx-auto">
          <div class="auth-form-dark text-left p-5">
            <h2>Login</h2>
            <h4 class="font-weight-light">Hello! let's get started</h4>
            <div v-if="err">
            <div>
              <b-alert show :duration="duration">{{err}}</b-alert>
            </div>
          </div>
            <form class="pt-5">
              <form @submit="onSubmit">
                <div class="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" v-model="login.username" required="" aria-describedby="emailHelp" placeholder="Username">
                  <i class="mdi mdi-account"></i>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="login.password" required="">
                  <i class="mdi mdi-eye"></i>
                </div>
                <div class="mt-5">
                  <!-- <a class="btn btn-block btn-warning btn-lg font-weight-medium" href="../../index.html">Login</a> -->
                   <button type="submit" class="btn btn-success btn-lg btn-block">Sign In</button>
                </div>
                <div class="mt-3 text-center">
                  <a href="#" class="auth-link text-white">Forgot password?</a>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import axios from 'axios'
import store from '../../store'
export default {
  name: 'login',
  data () {
    return {
      login: {},
      errors: [],
      duration: 200,
      err: '',
      loading: false
    }
  },
  methods: {
    onSubmit (evt) {
      this.loading = true
      evt.preventDefault()
      axios
        .post(`http://13.126.210.153/user/login/`, this.login)
        .then(response => {
          store.commit('loginUser')
          localStorage.setItem('token', response.data.data.token)
          localStorage.setItem('username', response.data.data.username)
          localStorage.setItem('is_admin', response.data.data.is_admin)
          localStorage.setItem('id', response.data.data.id)
          this.$router.push('/')
        })
        .catch(e => {
          this.loginError = true
          this.err = e.response.data.msg
          this.errors.push(e)
          this.loading = false
        })
    }
  }
}
</script>

<style>
.main-panel {
  width: calc(100% - 0px);
  min-height: calc(100vh - 58px);
}
</style>
