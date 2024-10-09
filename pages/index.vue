<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card v-if="!formSubmitted" class="logo pa-4 d-flex justify-center">
        <v-row>
          <v-col cols="12">
            <label class="required">Main Category</label>
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
            <label class="required">Sub Category</label>
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
                cla
                mt-2
                placeholder="Insert Value"
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
                <v-text-field
                  v-if="properties[prop.slug]?.slug === 'other'"
                  v-model="otherValues[prop.slug]"
                  class="mt-2"
                  outlined
                  hide-details
                  placeholder="Specify Value"
                ></v-text-field>
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
            <v-col cols="12">
              <v-btn size="x-large" class="white--text" block variant="flat" color="indigo" @click="submitForm">
                SUBMIT
              </v-btn>
            </v-col>
          </template>
        </v-row>
      </v-card>
      <template v-else>
        <MzTable :payload="payload" />
        <v-btn class="mt-5 white--text" color="grey" size="x-large" block @click="formSubmitted = false">Back</v-btn>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import MzTable from '@/components/mzTable.vue'
export default {
  name: 'IndexPage',
  components: {
    MzTable
  },
  data() {
    return {
      category: {},
      subCategory: {},
      properties: {},
      childProperties: {},
      childProps: {},
      subCategories: [],
      otherValues: {},
      loadingCategories: true,
      loadingProperties: false,
      formSubmitted: false,
      payload: []
    }
  },
  computed: {
    categories() {
      return this.$store.getters.GET_CATEGORIES
    },
    catProperties: {
      get() {
        return this.$store.getters.GET_PROPERTIES
      },
      set(val) {
        this.$store.commit('SET_PROPERTIES', val)
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
    subCategory(val) {
      if (val.id) {
        this.fetchCatProperties()
      }
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
    },
    submitForm() {
      this.payload = [
        {
          name: 'Category',
          value: this.category.name
        },
        {
          name: 'Sub Category',
          value: this.subCategory.name
        }
      ]
      for (const key in this.properties) {
        this.payload.push({
          name: key,
          value:
            typeof this.properties[key] === 'string'
              ? this.properties[key]
              : this.properties[key].name === 'Other'
              ? this.otherValues[key]
              : this.properties[key].name
        })
      }
      this.formSubmitted = true
    }
  }
}
</script>
<style lang="scss">
.required {
  &:after {
    content: '*';
    color: darken(#ff0000, 7);
    padding-left: 5px;
  }
}
</style>
