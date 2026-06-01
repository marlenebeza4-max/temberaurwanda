<template>
  <section class="province-page bg-slate-50 min-h-screen">
    <div class="hero relative h-[60vh] bg-cover bg-center" :style="{ backgroundImage: `url(${ellenImg})` }">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div class="text-white">
          <h1 class="text-5xl font-bold">Northern Province</h1>
          <p class="mt-4 text-xl max-w-3xl mx-auto">Experience volcanoes, gorilla trekking, and the amazing natural highlands of northern Rwanda.</p>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 py-16">
      <h2 class="text-3xl font-bold text-green-800 mb-8">What to See</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <article class="rounded-3xl bg-white p-8 shadow-lg">
          <h3 class="text-2xl font-semibold mb-3">Volcanoes National Park</h3>
          <p class="text-slate-600">Home of the mountain gorillas and dramatic volcanic scenery.</p>
        </article>
        <article class="rounded-3xl bg-white p-8 shadow-lg">
          <h3 class="text-2xl font-semibold mb-3">Hiking Trails</h3>
          <p class="text-slate-600">Explore forest paths, crater lakes, and scenic viewpoints.</p>
        </article>
        <article class="rounded-3xl bg-white p-8 shadow-lg">
          <h3 class="text-2xl font-semibold mb-3">Local Culture</h3>
          <p class="text-slate-600">Visit villages and learn about northern Rwanda’s traditions.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import ellenImg from '../assets/ellen.png'
</script>
