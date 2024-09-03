<template>
  <!-- web -->
  <v-toolbar v-show="display.mdAndUp" class="px-4 header">
    <v-icon size="x-large" class="mx-4">
      <v-img src="@/assets/icon-axdif.png"></v-img>
    </v-icon>
    <v-divider
      class="ms-3"
      inset
      vertical
    ></v-divider>

    <v-toolbar-items>
      <v-btn 
        v-for="(item, i) in menus"
        :key="i"
        variant="text" 
        color="#888FB0" 
        @click="item.routeName == '#' ? null : navigateTo('/'+item.routeName)"
      >
        {{ item.label }}
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-icon size="x-large">
      <v-img src="@/assets/user.png"></v-img>
    </v-icon>
  </v-toolbar>

  <!-- mobile -->
  <v-toolbar v-show="!display.mdAndUp" class="px-4 header">
    <v-icon size="x-large">
      <v-img src="@/assets/icon-axdif.png"></v-img>
    </v-icon>
    <v-spacer></v-spacer>

    <v-menu location="center">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          variant="text" 
          color="#888FB0" 
          append-icon="mdi-menu-down"
        >
          {{ navMenu }}
          <template v-slot:append>
            <v-icon color="black"></v-icon>
          </template>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in menus"
          :key="index"
        >
          <v-list-item-title>
            <v-btn 
              block
              color="#888FB0"
              :variant="navMenu == item.label ? 'flat' : 'text'" 
              :disabled="navMenu == item.label"
              @click="navigateTo('/'+item.routeName)"
            >
              {{ item.label }}
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>
    <v-icon size="x-large">
      <v-img src="@/assets/user.png"></v-img>
    </v-icon>
  </v-toolbar>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = ref(useDisplay());
const navMenu = ref("Test");

const menus = [
  {
    label: 'Overview',
    routeName: 'overview'
  },
  {
    label: 'Employee Stats',
    routeName: 'employee-statistic'
  },
  {
    label: 'Submission',
    routeName: '#'
  },
  {
    label: 'Task',
    routeName: '#'
  },
  {
    label: 'Chat',
    routeName: '#'
  },
  {
    label: 'Payroll',
    routeName: '#'
  },
]
</script>

<style scoped>
  .header {
    background-color: white;
    box-shadow: 0px 1px 2px #00000029;
  }
</style>