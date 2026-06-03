<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

function submitForm() {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  router.push('/dashboard')
}
</script>








 



<template>
  <div class="flex items-center justify-center bg-green-100 min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">Login</h2>
      <form @submit.prevent="submitForm" class="flex flex-col gap-4">
        <input
          v-model="email"
          type="email"
          placeholder="Please enter your email"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Please enter your password"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
        />

        <button
          type="submit"
          class="bg-yellow-500 text-black py-2 rounded hover:bg-yellow-400 font-semibold"
        >
          Login
        </button>
      </form>
      <p class="text-center text-sm mt-4 text-gray-600">
        Don't have an account? Please create one here
        <RouterLink to="/register" class="text-green-700 font-semibold hover:underline">
          Register
        </RouterLink>
      </p>
    </div>
  </div>
</template>