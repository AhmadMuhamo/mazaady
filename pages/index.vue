<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card class="logo pa-4 d-flex justify-center">
        <v-row>
          <v-col cols="12">
            <label>Main Category</label>
            <v-autocomplete
              v-model="category"
              :loading="loadingCategories"
              :items="categories"
              placeholder="Select Main Category"
              item-text="name"
              return-object
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="12">
            <label>Sub Category</label>
            <v-autocomplete
              v-model="subCategory"
              :items="subCategories"
              placeholder="Select Sub Category"
              item-text="name"
              return-object
              outlined
              hide-details
              @update:modelValue="fetchCatProperties"
            />
          </v-col>
          <v-col v-if="loadingProperties" cols="12">
            <v-skeleton-loader type="list-item, list-item, list-item" />
          </v-col>
          <template v-else-if="catProperties.length">
            <v-col v-for="prop in catProperties" :key="prop.id" cols="12">
              <label>{{ prop.name }}</label>
              <v-text-field
                v-if="!prop.options.length"
                v-model="properties[prop.slug]"
                outlined
                hide-details
              ></v-text-field>
              <template v-else>
                <v-autocomplete
                  v-model="properties[prop.slug]"
                  :items="prop.options"
                  placeholder="Select Option"
                  item-text="name"
                  return-object
                  outlined
                  hide-details
                />
                <v-autocomplete
                  v-if="childProps[prop.slug]?.length"
                  v-model="childProperties[prop.slug]"
                  class="mt-2"
                  :items="childProps[prop.slug]"
                  placeholder="Select Option"
                  item-text="name"
                  return-object
                  outlined
                  hide-details
                />
              </template>
            </v-col>
          </template>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      category: {},
      subCategory: {},
      properties: {},
      childProperties: {},
      childProps: {},
      subCategories: [],
      test: {},
      loadingCategories: true,
      loadingProperties: false
    }
  },
  computed: {
    categories() {
      return this.$store.getters.GET_CATEGORIES
    },
    catProperties: {
      get() {
        return this.$store.getters.GET_CATPROPS
      },
      set(val) {
        this.$store.commit('SET_CATPROPS', val)
      }
    }
  },
  watch: {
    category: {
      deep: true,
      handler(cat) {
        this.subCategories = cat.children
        this.subCategory = {}
        this.catProperties = {}
      }
    },
    subCategory() {
      this.fetchCatProperties()
    },
    properties: {
      deep: true,
      async handler(val) {
        for (const key in val) {
          if (val[key].child) {
            this.childProps[key] = await this.$store.dispatch('fetchChildProps', val[key].id)
            this.$forceUpdate()
          }
        }
      }
    }
  },
  async created() {
    this.loadingCategories = true
    await this.$store.dispatch('fetchCategories')
    this.loadingCategories = false
  },
  methods: {
    async fetchCatProperties() {
      this.loadingProperties = true
      this.properties = {}
      this.childProperties = {}
      await this.$store.dispatch('fetchCatProperties', this.subCategory.id)
      this.loadingProperties = false
    }
  }
}
</script>
