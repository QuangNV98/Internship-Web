import Vuex from 'vuex'
import Vue from 'vue'
import places from './modules/places'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      places
    }
})
