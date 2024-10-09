<template>
  <v-row justify="center" align="start">
    <v-col cols="12" sm="12" md="4">
      <UserInfo class="mb-5" />
      <UserShare />
    </v-col>
    <v-col cols="12" sm="12" md="8">
      <v-card elevation="0">
        <Products :products="products" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue'
import UserShare from '@/components/UserShare.vue'
import Products from '@/components/Products.vue'
export default {
  name: 'LandingPage',
  component: {
    UserInfo,
    UserShare,
    Products
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image: 'pic1.png',
          title: 'Six-piece clothing set (blouse - pants - hat and ...',
          price: 1000,
          type: 'auction',
          duration: {
            days: 2,
            hours: 10,
            minutes: 50
          },
          isLiked: false
        },
        {
          id: 2,
          image: 'pic2.png',
          title: 'Six-piece clothing set (blouse - pants - hat and ...',
          price: 1000,
          type: 'auction',
          duration: {
            days: 2,
            hours: 10,
            minutes: 50
          },
          isLiked: false
        },
        {
          id: 3,
          image: 'pic3.png',
          title: 'Jeep Car, new, used for only one time',
          price: 1000,
          type: 'sale',
          duration: {
            days: 2,
            hours: 10,
            minutes: 50
          },
          isLiked: true
        },
        {
          id: 4,
          image: 'pic4.png',
          title: 'Six-piece clothing set (blouse - pants - hat and ...',
          price: 1000,
          type: 'auction',
          duration: {
            days: 2,
            hours: 10,
            minutes: 50
          },
          isLiked: false
        },
        {
          id: 5,
          image: 'pic5.png',
          title: 'Jeep Car, new, used for only one time',
          price: 1000,
          type: 'sale',
          duration: {
            days: 2,
            hours: 10,
            minutes: 50
          },
          isLiked: true
        }
      ]
    }
  }
}
</script>
