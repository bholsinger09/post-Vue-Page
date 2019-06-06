import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


let foodapi = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "8120134b8a361912934e53e415fffd2c",
    "x-app-id": "814a7db9"
  }
});

var api = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/ben/logs'
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []

  },
  mutations: {
    setPosts(state, data) {
      state.posts = data
    }

  },

  actions: {
    async sendPost({ commit, dispatch }) {
      let res = await api.get('')
      console.log(res.data)
      dispatch('sendPost', res.data)
    },

    async handleSubmit({ commit, dispatch }) {
      try {
        let res = await api.post("", {});
        dispatch('', res.data.foods)
        // this.results = res.data.foods;
      } catch (err) {
        // this.error = "Invalid Search"
      }
    }


  }
})
