<template>
  <div>
    <div class="d-flex align-center justify-space-between">
      <div class="d-flex align-center justify-space-around">
        <v-chip outlined color="#FF951D" class="active">Products</v-chip>
        <v-chip outlined class="mx-4" color="#E0E0E0">Articles</v-chip>
        <v-chip outlined color="#E0E0E0">Reviews</v-chip>
      </div>
      <v-btn class="mz-btn">
        <svg class="mr-1" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.5 16.5C13.625 16.5 17 13.125 17 9C17 4.875 13.625 1.5 9.5 1.5C5.375 1.5 2 4.875 2 9C2 13.125 5.375 16.5 9.5 16.5Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M6.5 9H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.5 12V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Add Review
      </v-btn>
    </div>
    <h1 class="my-3">Products <span>( 12 )</span></h1>
    <Product v-for="product in products" :key="product.id" :product="product" class="my-7" />
  </div>
</template>
<script>
import Product from '@/components/Product.vue'
export default {
  name: 'Products',
  components: {
    Product
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss">
.v-chip {
  border-radius: 14px !important;
  padding: 5px 25px;
  &.v-chip--outlined.v-chip.v-chip.active {
    background-color: #fff5e9 !important;
    font-weight: 700;
  }
  &:not(.active) {
    color: #828282 !important;
  }
}
h1 {
  display: flex;
  align-items: center;
  span {
    font-weight: 400;
    font-size: 14px;
    color: #828282;
    margin-left: 10px;
  }
}
</style>
