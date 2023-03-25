import Vue from "vue";
import Vuex from "vuex";
import http from "../axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      hold: [

      ],
      progress: [

      ],
      review: [

      ],
      approved: [

      ],
  },
  mutations: {
    SET_HOLD(state, payload) {
      state.hold.push(payload);
    },
    SET_PROGRESS(state, payload) {
      state.progress.push(payload);
    },
    SET_REVIEW(state, payload) {
      state.review.push(payload);
    },
    SET_APPROVED(state, payload) {
      state.approved.push(payload);
    },
    UPDATE_HOLD(state, payload) {
      state.hold = payload;
    },
    UPDATE_PROGRESS(state, payload) {
      state.progress = payload;
    },
    UPDATE_REVIEW(state, payload) {
      state.review = payload;
    },
    UPDATE_APPROVED(state, payload) {
      state.approved = payload;
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    signIn({ commit }, payload) {
      http.post("/users/login/", payload).then(resp => {
        localStorage.setItem("access_token", `${resp.data.token}`);
      });
    },
    // eslint-disable-next-line no-unused-vars
    signUp({ commit }, payload) {
      http.post("/users/create/", payload).then(resp => {
        localStorage.setItem("access_token", `${resp.data.token}`);
      });
    },
    getCards({ dispatch }) {
      http
        .get("/cards/")
        .then(res => dispatch("sortCards", res.data))
        .catch(() => {
          return "err";
        });
    },
    deleteCard({ dispatch }, id) {
      http
        .delete(`/cards/${id}`)
        .then(() => {
          dispatch("getCards");
        })
        .catch(() => {
          return "err";
        });
    },
    createCard({ dispatch }, payload) {
      http.post("/cards/", payload).then(() => {
        dispatch("getCards");
      });
    },
    sortCards({ commit }, payload) {
      commit("UPDATE_HOLD", []);
      commit("UPDATE_PROGRESS", []);
      commit("UPDATE_REVIEW", []);
      commit("UPDATE_APPROVED", []);
      payload.forEach(i => {
        switch (i.row) {
          case "0":
            commit("SET_HOLD", i);
            break;
          case "1":
            commit("SET_PROGRESS", i);
            break;
          case "2":
            commit("SET_REVIEW", i);
            break;
          case "3":
            commit("SET_APPROVED", i);
            break;
        }
      });
    },
    // eslint-disable-next-line no-unused-vars
    updateCards({ dispatch }, cards) {
      cards.val.forEach(i => {
        http
          .patch(`/cards/${i.id}/`, {
            row: cards.id,
            seq_num: i.seq_num,
            text: i.text
          })
          .then(() => {
            dispatch("getCards");
          })
          .catch(() => {
            return "err";
          });
      });
    }
  },
  modules: {}
});
/////////////////////
