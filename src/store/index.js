import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      hold: [
          {
              id: 0,
              text: 'killer deploy technologies'
          },
          {
              id: 1,
              text: 'killer deploy technologies'
          },
          {
              id: 2,
              text: 'killer deploy technologies'
          },
      ],
      progress: [
          {
              id: 0,
              text: 'killer deploy technologies'
          },
          {
              id: 1,
              text: 'killer deploy technologies'
          },
          {
              id: 2,
              text: 'killer deploy technologies'
          },
      ],
      review: [
          {
              id: 0,
              text: 'killer deploy technologies'
          },
          {
              id: 1,
              text: 'killer deploy technologies'
          },
          {
              id: 2,
              text: 'killer deploy technologies'
          },
      ],
      approved: [
          {
              id: 0,
              text: 'killer deploy technologies'
          },
          {
              id: 1,
              text: 'killer deploy technologies'
          },
          {
              id: 2,
              text: 'killer deploy technologies'
          },
      ]
  },
  mutations: {
      updateHold(state, payload){
          state.hold = payload;
          console.log(state);
      },
      updateProgress(state, payload){
          state.progress = payload
      },
      updateReview(state, payload){
          state.review = payload
      },
      updateApproved(state, payload){
          state.approved = payload
      }
  },
  actions: {
    signIn(payload) {
      axios.post('http://trello.backend.tests.nekidaem.ru/api/v1/users/login/', {username: payload.username, password: payload.password})
          .then(resp => {
            console.log(resp)
          })
    },

  },
  modules: {}
});

// headers['Authorization'] = `Bearer ${ token }`;