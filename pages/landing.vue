<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="4">
      <UserInfo class="mb-5"/>
      <UserShare/>
    </v-col>
    <v-col cols="12" sm="12" md="8">
      <h1>Landing Page</h1>
    </v-col>
  </v-row>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue'
import UserShare from '@/components/UserShare.vue'
export default {
  name: 'LandingPage',
  component: {
    UserInfo,
    UserShare
  },
  data() {
    return {}
  }
}
</script>

