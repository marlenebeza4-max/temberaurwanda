<template>
  <div class="min-h-screen flex items-center justify-center bg-green-100 px-4">
    <div class="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
      <h1 class="text-3xl font-bold text-green-800 mb-6 text-center">Register</h1>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="name">Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            placeholder="Enter your name"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="age">Age</label>
          <input
            id="age"
            v-model="age"
            type="number"
            min="1"
            placeholder="Enter your age"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="number">Number</label>
          <input
            id="number"
            v-model="number"
            type="tel"
            placeholder="Enter your phone number"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="gender">Gender</label>
          <select
            id="gender"
            v-model="gender"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-green-600"
          >
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

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
            placeholder="Create a password"
            required
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
        >
          Register
        </button>
      </form>

      <p v-if="message" class="mt-4 text-center text-sm text-green-700">{{ message }}</p>
      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account?
        <RouterLink to="/login" class="text-green-700 font-semibold hover:underline">Login</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const age = ref('')
const number = ref('')
const gender = ref('')
const email = ref('')
const password = ref('')
const message = ref('')

function submitForm() {
  if (!gender.value) {
    message.value = 'Please select your gender.'
    return
  }

  message.value = 'Registration submitted successfully.'
  console.log('Register form submitted:', {
    name: name.value,
    age: age.value,
    number: number.value,
    gender: gender.value,
    email: email.value,
    password: password.value,
  })
}
</script>
