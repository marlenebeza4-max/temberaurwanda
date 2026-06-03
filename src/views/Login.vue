<template>
  <div class="min-h-screen flex items-center justify-center bg-green-100 px-4">
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <h1 class="text-3xl font-bold text-green-800 mb-6 text-center">Login</h1>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Login
        </button>
      </form>

      <p v-if="message" class="mt-4 text-center text-sm text-green-700">{{ message }}</p>
      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account?
        <RouterLink to="/register" class="text-green-700 font-semibold hover:underline">Register</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const message = ref('')

function submitForm() {
  message.value = 'Login submitted successfully.'
  console.log('Login form submitted:', {
    email: email.value,
    password: password.value,
  })
  router.push('/dashboard')
}
</script>
