<script lang="ts" setup></script>

<template>
  <v-row class="px-16">
    <v-col md="3" lg="3" xl="3">
      <v-img src="../assets/logo.svg" max-height="84" max-width="84"></v-img>
    </v-col>

    <v-col md="9" lg="9" xl="9">
      <v-row class="pt-9" justify="end">
        <v-btn text flat class="navItem">Home</v-btn>
        <v-btn text flat class="navItem">Order</v-btn>
        <v-btn text flat class="navItem">What’s New</v-btn>
        <v-btn text flat class="navItem">Contact</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.navItem {
  text-transform: none;
  font-size: larger;
  font-weight: 80px;
}
</style>
