import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

var api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/ben/blog'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []

  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    }

  },
  actions: {
    async getPosts({ commit }) {
      let res = await api.get("")
      console.log(res.data)
      commit('setPosts', res.data)
    }


  }
})
