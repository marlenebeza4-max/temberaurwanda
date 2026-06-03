<script setup>
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const hidelayout = computed(() => [
  'login',
  'register',
  'dashboard'
].includes(route.name))
</script>

<template>
  <Navbar v-if="!hidelayout" />
  <router-view />
  <Footer v-if="!hidelayout" />
</template>