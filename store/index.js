export const state = () => ({
  categories: [],
  catProperties: []
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_PROPERTIES(state, propterties) {
    state.catProperties = propterties
  },
  SET_CATPROPS(state, properties) {
    state.catProperties = properties
  }
}
export const getters = {
  GET_CATEGORIES(state) {
    return state.categories
  },
  GET_CATPROPS(state) {
    return state.catProperties
  }
}
export const actions = {
  async fetchCategories({ commit }) {
    const apiKey = this.$config.apiKey
    try {
      const res = await this.$axios.get('get_all_cats', {
        headers: { 'private-key': apiKey }
      })
      commit('SET_CATEGORIES', res.data.data.categories)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error trying to fetch categories.', error.message)
    }
  },
  async fetchCatProperties({ commit }, id) {
    const apiKey = this.$config.apiKey
    try {
      const res = await this.$axios.get(`properties?cat=${id}`, {
        headers: { 'private-key': apiKey }
      })
      commit('SET_PROPERTIES', res.data.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error trying to fetch categories.', error.message)
    }
  },
  async fetchChildProps({ commit }, id) {
    const apiKey = this.$config.apiKey
    try {
      const res = await this.$axios.get(`get-options-child/${id}`, {
        headers: { 'private-key': apiKey }
      })
      return res.data.data[0].options
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error trying to fetch categories.', error.message)
    }
  }
}
