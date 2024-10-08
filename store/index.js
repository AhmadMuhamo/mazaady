export const state = () => ({
  categories: [],
  subCategories: [],
  allOptions: []
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_SUBCATEGORIES(state, subCategories) {
    state.subCategories = subCategories
  },
  SET_OPTIONS(state, allOptions) {
    state.allOptions = allOptions
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
  }
}
