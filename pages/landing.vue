<template>
  <v-row justify="center" align="center">
  
    <v-col cols="12" sm="10" md="8"> 
      <h1>Landing Page</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LandingPage',

  data() {
    return {}
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
