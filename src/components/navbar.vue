<script setup>
import { useI18n } from '../i18n.js'
import merciii from '../assets/images/merciii.png'

const { t, locale, setLocale } = useI18n()
</script>

<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex flex-wrap items-center justify-between shadow-lg w-full">

    <div class="flex items-center gap-3">
      <img :src="merciii" class="h-10 w-10 rounded-full" alt="Logo" />
      <span class="text-lg font-bold">TEMBERA URWANDA</span>
    </div>

    <div class="flex flex-wrap items-center gap-6">
      <ul class="flex flex-wrap gap-8 text-sm font-medium items-center">
        <li>
          <RouterLink to="/" class="hover:text-yellow-300">
            {{ t('nav.home') }}
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/about" class="hover:text-yellow-300">
            {{ t('nav.about') }}
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/services" class="hover:text-yellow-300">
            {{ t('nav.services') }}
          </RouterLink>
        </li>

        <li class="relative group">
          <RouterLink to="/gallery" class="hover:text-yellow-300">
            {{ t('nav.gallery') }} 🔽
          </RouterLink>

          <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <li>
              <RouterLink to="/images" class="block px-4 py-2 hover:bg-green-700">
                {{ t('nav.images') }}
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/videos" class="block px-4 py-2 hover:bg-green-700">
                {{ t('nav.videos') }}
              </RouterLink>
            </li>
          </ul>
        </li>

        <li class="relative group">
          <a href="#" class="hover:text-yellow-300">
            {{ t('nav.destinations') }} 🔽
          </a>

          <ul class="absolute right-0 mt-2 w-52 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
            <li>
              <RouterLink to="/northern" class="block px-4 py-2 hover:bg-green-700">
                {{ t('nav.north') }}
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/southern" class="block px-4 py-2 hover:bg-green-700">
                {{ t('nav.south') }}
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/eastern" class="block px-4 py-2 hover:bg-green-700">
                {{ t('nav.east') }}
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/western" class="block px-4 py-2 hover:bg-green-700">
                {{ t('nav.west') }}
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-700">
                {{ t('nav.kigali') }}
              </RouterLink>
            </li>
          </ul>
        </li>

        <li>
          <RouterLink to="/contact" class="hover:text-yellow-300">
            {{ t('nav.contact') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/register" class="hover:text-yellow-300">
            Register
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/login" class="hover:text-yellow-300">
            Login
          </RouterLink>
        </li>
      </ul>

      <div class="flex gap-2">
        <button
          type="button"
          @click="setLocale('en')"
          :class="locale === 'en' ? 'bg-yellow-300 text-black' : 'bg-green-700 text-white'"
          class="rounded px-3 py-2 text-sm font-semibold"
        >
          {{ t('nav.english') }}
        </button>
        <button
          type="button"
          @click="setLocale('rw')"
          :class="locale === 'rw' ? 'bg-yellow-300 text-black' : 'bg-green-700 text-white'"
          class="rounded px-3 py-2 text-sm font-semibold"
        >
          {{ t('nav.kinyarwanda') }}
        </button>
        <button
          type="button"
          @click="setLocale('fr')"
          :class="locale === 'fr' ? 'bg-yellow-300 text-black' : 'bg-green-700 text-white'"
          class="rounded px-3 py-2 text-sm font-semibold"
        >
          {{ t('nav.french') }}
        </button>
      </div>
    </div>
  </nav>
</template>