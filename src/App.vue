<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

const isAuthenticated = ref(!!sessionStorage.getItem('authToken'));

const updateAuthState = (state) => {
  isAuthenticated.value = state;
};
</script>

<template>
  <Navbar :isAuthenticated="isAuthenticated" @update-auth="updateAuthState" />
  <RouterView :isAuthenticated="isAuthenticated" @update-auth="updateAuthState" />
</template>

<style scoped>
</style>