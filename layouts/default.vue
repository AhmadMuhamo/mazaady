<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Components',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Landing Page',
          to: '/inspire'
        }
      ]
    }
  }
}
</script>
