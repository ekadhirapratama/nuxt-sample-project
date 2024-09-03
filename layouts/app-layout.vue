<template>
  <Header />
  <div class="container-custom">
    <v-container>
      <slot />
    </v-container>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'

</script>

<style scoped>
  .container-custom {
    background-color: #F9F9F9;
    padding-bottom: 16px;
  }
</style>