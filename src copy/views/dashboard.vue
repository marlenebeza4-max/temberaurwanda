<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeMenu = ref('overview')

function logout() {
  router.push('/login')
}
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="w-68 bg-green-800 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold border-b border-green-700">Dashboard</div>

      <nav class="flex-1 p-4">
        <button
          type="button"
          @click="activeMenu = 'overview'"
          :class="[
            'w-full text-left px-4 py-3 rounded mb-2',
            activeMenu === 'overview' ? 'bg-green-700' : 'hover:bg-green-700'
          ]"
        >
          Overview
        </button>

        <button
          type="button"
          @click="activeMenu = 'booking'"
          :class="[
            'w-full text-left px-4 py-3 rounded mb-2',
            activeMenu === 'booking' ? 'bg-green-700' : 'hover:bg-green-700'
          ]"
        >
          Booking
        </button>

        <button
          type="button"
          @click="activeMenu = 'users'"
          :class="[
            'w-full text-left px-4 py-3 rounded mb-2',
            activeMenu === 'users' ? 'bg-green-700' : 'hover:bg-green-700'
          ]"
        >
          Users
        </button>
      </nav>

      <button
        type="button"
        @click="logout"
        class="w-full px-4 py-3 rounded mb-4 bg-red-600 hover:bg-red-700"
      >
        Logout
      </button>
    </aside>

    <main class="flex-1 overflow-y-auto p-8">
      <div class="p-6 bg-white rounded shadow">
        <h1 class="text-2xl font-semibold mb-4">{{ activeMenu === 'overview' ? 'Overview' : activeMenu === 'booking' ? 'Booking' : 'Users' }}</h1>
        <p class="text-gray-700">
          This is our booking page
        </p>
      </div>
    </main>
  </div>
</template>