<template>
  <div class="product">
    <div class="image-container">
      <img :src="require(`@/static/${product.image}`)" alt="Product Image" />
      <div class="badge" :style="{ 'background-color': product.type === 'auction' ? '#d20653' : '#ff951d' }">
        <span>{{ product.type === 'auction' ? 'Live Auction' : 'Hot Sale' }}</span>
      </div>
    </div>
    <div class="product-body ml-4">
      <p class="title">Six-piece clothing set (blouse - pants - hat and ...</p>
      <p class="price my-2">
        Starting Price <span>{{ product.price }} EGP</span>
      </p>
      <div class="d-flex align-center justify-space-between">
        <p class="mr-3">Lot Starts In</p>
        <div class="stats-chip">{{ product.duration.days }} <span>Days</span></div>
        <div class="stats-chip mx-3">{{ product.duration.hours }} <span>Hours</span></div>
        <div class="stats-chip">{{ product.duration.minutes }} <span>Minutes</span></div>
      </div>
    </div>
    <div class="product-actions ml-auto mr-3">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        :fill="product.isLiked ? '#d20653' : 'none'"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.38 3.10001 10.99 3.98001 12 5.34001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001C22 15.69 15.52 19.82 12.62 20.81Z"
          :stroke="product.isLiked ? '#d20653' : '#292D32'"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.product {
  display: flex;
  align-items: center;
  .image-container {
    position: relative;
    .badge {
      position: absolute;
      bottom: 6px;
      right: 0;
      background-color: $primary-color;
      padding: 10px 20px;
      border-top-left-radius: 28px;
      border-bottom-right-radius: 28px;
      span {
        color: white;
        font-size: 12px;
      }
    }
  }
  .product-body {
    p {
      font-size: 18px;
      font-weight: 400;
      &.title {
        color: #333333;
        text-transform: capitalize;
      }
      &:not(.title) {
        color: #828282;
      }
      &.price {
        span {
          font-weight: 700;
          font-size: 23.66px;
          color: #333333;
        }
      }
    }
    .stats-chip {
      color: $secondary-color;
      font-weight: 700;
      font-size: 20.28px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      line-height: 0.8;
      border-radius: 24px;
      width: 105px;
      padding: 12px;
      span {
        font-size: 14px;
        margin-left: 5px;
      }
    }
  }
  .product-actions {
    height: 100%;
    margin-bottom: auto;
    margin-top: 10px;
    svg {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
