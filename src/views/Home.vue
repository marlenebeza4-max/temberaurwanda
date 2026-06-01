<script setup>
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>

<template>
  <section class="relative min-h-[85vh] bg-cover bg-center overflow-hidden" style="background-image:url('../assets/image.png')">
    <video
      autoplay
      muted
      loop
      playsinline
      poster="../assets/image.png"
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source :src="`download3.mp4`" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
      <span class="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-700">{{ t('home.pill') }}</span>
      <h1 class="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">{{ t('home.heroHeading') }}</h1>
      <p class="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">{{ t('home.heroText') }}</p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <router-link to="/destinations" class="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-emerald-500">{{ t('home.destinationsButton') }}</router-link>
        <router-link to="/about" class="inline-flex items-center justify-center rounded-full border border-emerald-500 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700 transition hover:bg-emerald-50">{{ t('home.aboutButton') }}</router-link>
      </div>
    </div>
  </section>


  <section class="bg-gray-50 text-slate-900 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-10 text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-emerald-600">{{ t('home.sectionTitle') }}</p>
        <h2 class="mt-4 text-3xl font-bold sm:text-4xl">{{ t('home.sectionTitle') }}</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <article class="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('home.card1Title') }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('home.card1Text') }}</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('home.card2Title') }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('home.card2Text') }}</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('home.card3Title') }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('home.card3Text') }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="text-sm uppercase tracking-[0.35em] text-emerald-600">{{ t('home.sectionTitle') }}</p>
          <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{{ t('home.highlightTitle') }}</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">{{ t('home.highlightText') }}</p>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-gray-200 bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 class="font-semibold text-slate-900">{{ t('home.cardA') }}</h3>
              <p class="mt-2 text-sm text-slate-600">{{ t('home.cardAText') }}</p>
            </div>
            <div class="rounded-3xl border border-gray-200 bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 class="font-semibold text-slate-900">{{ t('home.cardB') }}</h3>
              <p class="mt-2 text-sm text-slate-600">{{ t('home.cardBText') }}</p>
            </div>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <router-link to="/kigali" class="group overflow-hidden rounded-4xl bg-emerald-600 p-6 text-white transition hover:bg-emerald-500">
            <div class="text-sm uppercase tracking-[0.35em] text-white/80">{{ t('nav.kigali') }}</div>
            <h3 class="mt-4 text-2xl font-bold">{{ t('home.cityTitle') }}</h3>
            <p class="mt-3 text-sm leading-6 text-white/90">{{ t('home.cityText') }}</p>
          </router-link>
          <router-link to="/north" class="group overflow-hidden rounded-4xl bg-slate-100 p-6 text-slate-900 transition hover:bg-slate-200">
            <div class="text-sm uppercase tracking-[0.35em] text-slate-500">{{ t('nav.north') }}</div>
            <h3 class="mt-4 text-2xl font-bold">{{ t('home.northTitle') }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('home.northText') }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>