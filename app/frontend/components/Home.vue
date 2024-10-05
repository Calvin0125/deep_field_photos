<template>
  <v-container class="d-flex flex-column justify-center text-center">
  <h1>Deep Field Photos</h1>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn to="/hubble" class="ma-2" color="primary">Hubble</v-btn>
      <v-btn to="/james_webb" class="ma-2" color="primary">James Webb</v-btn>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'DeepFieldPhotos',
}
</script>