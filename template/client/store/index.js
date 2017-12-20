import Vue from 'vue'
import Vuex from 'vuex'

import ui from 'store/ui'
import options from 'store/options'
/*! scaffold:import:module */

Vue.use(Vuex)

const modules = {
  /*! scaffold:insert:module */
  ui,
  options
}

const getters = {
}

const store = new Vuex.Store({
  modules,
  getters
})

export default store
