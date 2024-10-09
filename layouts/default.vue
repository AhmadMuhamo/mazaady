<template>
  <v-app>
    <v-main>
      <Navbar />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
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
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
#app {
  font-family: 'Nunito', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  background-color: #f6f4f5;
}
.mz-btn {
  background: linear-gradient(to right, #d20653, #ff951d) !important;
  color: #fff !important;
  font-weight: 700;
  font-size: 14px;
  border-radius: 10px;
  text-transform: capitalize;
}
</style>
