<template>
  <v-app>
    <v-main>
      <Navbar v-if="$route.name !== 'index'"/>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  },
  data() {
    return {}
  }
}
</script>
