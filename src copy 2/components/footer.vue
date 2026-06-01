<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from '../i18n.js'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <div class="flex flex-wrap justify-between gap-8 ">
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.title') }}</h3>
        <p class="text-green-300">{{ t('footer.description') }}</p>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.quickLinks') }}</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <RouterLink to="/" class="hover:text-yellow-300">{{ t('footer.home') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-yellow-300">{{ t('footer.about') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/services" class="hover:text-yellow-300">{{ t('footer.service') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-yellow-300">{{ t('footer.contact') }}</RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.destinations') }}</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <RouterLink to="/northern" class="hover:text-yellow-300">{{ t('nav.north') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/southern" class="hover:text-yellow-300">{{ t('nav.south') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/eastern" class="hover:text-yellow-300">{{ t('nav.east') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/western" class="hover:text-yellow-300">{{ t('nav.west') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/kigali" class="hover:text-yellow-300">{{ t('nav.kigali') }}</RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.contactUs') }}</h3>
        <ul class="space-y-2 text-green-300">
          <li>bezamarlene@gmail.com</li>
          <li>0732457394</li>
          <li>Kagugu, Rwanda</li>
        </ul>
      </div>

      <div class="w-full text-center mt-8 text-sm text-green-300">
        {{ t('footer.copy') }}
      </div>
    </div>
  </footer>
</template>