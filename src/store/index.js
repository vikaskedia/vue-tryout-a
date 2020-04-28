import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const API_URL = "http://localhost:3000"
import createCache from 'vuex-cache';

export default new Vuex.Store({
  state: {
    studentList: [],
    dialogVisibility: false,
    dialogStatus: 0, // 0: add, 1: edit
    updateStudent: {}
  },
  mutations: {
    setStudentList(state, data) {
      state.studentList = data
    },
    updateDialogVisibility(state, status) {
      state.dialogVisibility = status
    },
    updateStudentList(state, newStudent) {
      state.studentList.push(newStudent)
    },
    updateDialogStatus(state, status) {
      state.dialogStatus = status
    },
    setUpdateStudent(state, data) {
      state.updateStudent = data
    }
  },
  actions: {
    getStudentList({ commit }) {
      axios.get(`${API_URL}/students`).then(result => {
        commit("setStudentList", result.data)
      })
    },
    addStudent({ commit, state }, data) {
      axios.post(`${API_URL}/students`, data).then(result => {
        state.dialogVisibility = false
        const newStudent = result.data
        commit("updateStudentList", newStudent)
      })
    },
    updateStudent({ state }, data) {
      axios.put(`${API_URL}/students/${data.id}`, data).then(() => {
        state.dialogVisibility = false
      })
    },
    async deleteStudent(_, id) {
      await axios.delete(`${API_URL}/students/${id}`)
    }
  },
  modules: {
  },
  plugins: [createCache()],
})
