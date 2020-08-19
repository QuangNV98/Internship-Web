import axios from "axios";

const state = {
    cities: [],
    districts: [],
    wards: []
};

const getters = {
    allCities: (state) => state.cities,
    allDistricts: (state) => state.districts,
    allWards: (state) => state.wards
};

const actions = {
    async fetchCities({ commit }) {
        const response = await axios.get('https://thongtindoanhnghiep.co/api/city');
        commit('setCities', response.data.LtsItem);
    },
    async fetchDistrictsByCity({ commit }, idCity) {
        const response = await axios.get(`https://thongtindoanhnghiep.co/api/city/${idCity}/district`);
        commit('setDistricts', response.data);
    },
    async fetchWards({ commit }, idDistrict) {
        const response = await axios.get(`https://thongtindoanhnghiep.co/api/district/${idDistrict}/ward`);
        commit('setWards', response.data);
    }
};

const mutations = {
    setCities: (state, cities) => (state.cities = cities),
    setDistricts: (state, districts) => (state.districts = districts),
    setWards: (state, wards) => (state.wards = wards)
};

export default {
    state,
    getters,
    actions,
    mutations
}