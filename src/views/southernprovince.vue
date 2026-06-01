<template>
  <section class="province-page bg-slate-50 min-h-screen">
    <div class="hero relative h-[60vh] bg-cover bg-center" :style="{ backgroundImage: `url(${southImg})` }">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div class="text-white">
          <h1 class="text-5xl font-bold">Southern Province</h1>
          <p class="mt-4 text-xl max-w-3xl mx-auto">Relax by Lake Kivu, visit green hills, and enjoy the calm southern side of Rwanda.</p>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 py-16">
      <h2 class="text-3xl font-bold text-green-800 mb-8">Southern Highlights</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <article class="rounded-3xl bg-white p-8 shadow-lg">
          <h3 class="text-2xl font-semibold mb-3">Lake Kivu Views</h3>
          <p class="text-slate-600">Enjoy lakeside sunsets, boat trips, and peaceful beaches.</p>
        </article>
        <article class="rounded-3xl bg-white p-8 shadow-lg">
          <h3 class="text-2xl font-semibold mb-3">Tea Country</h3>
          <p class="text-slate-600">Walk through rolling tea plantations and village scenery.</p>
        </article>
        <article class="rounded-3xl bg-white p-8 shadow-lg">
          <h3 class="text-2xl font-semibold mb-3">Nature Trails</h3>
          <p class="text-slate-600">Explore natural paths, waterfalls, and southern wildlife.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import southImg from '../assets/Screenshot 2026-06-01 152528.png'
</script>