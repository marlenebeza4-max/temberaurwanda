<script setup>
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>

<template>

<!-- HERO SECTION -->
<section
  class="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
  style="background-image: url('../assets/merciii.png');"
>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/50"></div>

  <!-- Hero Content -->
  <div class="relative z-10 text-center text-white px-6">

    <h1 class="text-6xl font-bold mb-4">
      {{ t('destination.heroTitle') }}
    </h1>

    <p class="text-2xl text-green-300">
      {{ t('destination.heroText') }}
    </p>

  </div>

</section>

<!-- ABOUT SECTION -->
<section class="bg-white py-20 px-8">

  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

    <!-- IMAGE -->
    <div class="md:w-1/2">

      <img
      src="../assets/rwandas.png"
        class="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
      />

    </div>

    <!-- TEXT -->
    <div class="md:w-1/2">

      <h2 class="text-5xl font-bold text-green-800 mb-8">
        {{ t('destination.welcomeTitle') }}
      </h2>

      <p class="text-gray-700 text-lg leading-9">
        {{ t('destination.welcomeText') }}
        <br /><br />
        {{ t('destination.welcomeText2') }}
        <br /><br />
        {{ t('destination.welcomeText3') }}
      </p>

      <!-- BUTTON -->
      <button
        class="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full shadow-lg transition duration-300"
      >
        {{ t('destination.button') }}
      </button>

    </div>

  </div>

</section>

<!-- DESTINATIONS SECTION -->
<section class="bg-slate-50 py-20 px-8">

  <div class="max-w-7xl mx-auto">

    <h1 class="text-5xl font-bold text-center text-green-800 mb-14">
      {{ t('destination.popularTitle') }}
    </h1>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

      <!-- CARD 1 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

        <img
          src="../assets/mountain gorillas.png"
          class="h-64 w-full object-cover"
          alt="Volcanoes National Park"
        />

        <div class="p-6">

          <h2 class="text-2xl font-bold text-green-800 mb-4">
            {{ t('destination.card1Title') }}
          </h2>

          <p class="text-gray-600">
            {{ t('destination.card1Text') }}
          </p>

        </div>

      </div>

      <!-- CARD 2 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

        <img
          src="../assets/lake kivu.png"
          class="h-64 w-full object-cover"
          alt="Lake Kivu"
        />

        <div class="p-6">

          <h2 class="text-2xl font-bold text-green-800 mb-4">
            {{ t('destination.card2Title') }}
          </h2>

          <p class="text-gray-600">
            {{ t('destination.card2Text') }}
          </p>

        </div>

      </div>

      <!-- CARD 3 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

        <img
          src="../assets/kigali city.png"
          class="h-64 w-full object-cover"
          alt="Kigali City"
        />

        <div class="p-6">

          <h2 class="text-2xl font-bold text-green-800 mb-4">
            {{ t('destination.card3Title') }}
          </h2>

          <p class="text-gray-600">
            {{ t('destination.card3Text') }}
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

</template>