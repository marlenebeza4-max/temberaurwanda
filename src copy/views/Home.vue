<script setup></script>

<template>
  <section class="relative min-h-[85vh] bg-cover bg-center" style="background-image:url(/src/assets/image.png)">
    <div class="absolute inset-0 "></div>
    <div class="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 text-center text-slate-900">
      <span class="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-700">Explore Rwanda</span>
      <h1 class="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">Feel the beauty of Rwanda beyond the ordinary</h1>
      <p class="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">From misty hills and wildlife-rich parks to vibrant city life and welcoming culture, Rwanda is a destination for adventure, relaxation, and inspiring stories.</p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <router-link to="/destinations" class="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-emerald-500">View Destinations</router-link>
        <router-link to="/about" class="inline-flex items-center justify-center rounded-full border border-emerald-500 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700 transition hover:bg-emerald-50">About Us</router-link>
      </div>
    </div>
  </section>


  <section class="bg-gray-50 text-slate-900 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-10 text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-emerald-600">What makes Rwanda special</p>
        <h2 class="mt-4 text-3xl font-bold sm:text-4xl">Interactive experiences for every traveler</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <article class="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">Cultural Journeys</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">Connect with local heritage through craft markets, storytelling tours, and community experiences that feel authentic and welcoming.</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">Nature & Wildlife</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">Discover dramatic landscapes, national parks, and rare wildlife with photo-friendly viewpoints and guided eco-adventures.</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">Easy Planning</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">Enjoy curated routes, flexible itineraries, and helpful tips so you can plan a seamless trip from Kigali to the countryside.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="text-sm uppercase tracking-[0.35em] text-emerald-600">Featured highlights</p>
          <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Choose your next adventure</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">Our home page now brings more context with direct routes and highlights so visitors can quickly discover what makes Rwanda unforgettable.</p>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-gray-200 bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 class="font-semibold text-slate-900">Kigali city life</h3>
              <p class="mt-2 text-sm text-slate-600">Modern culture, museums, and dining for a memorable urban stay.</p>
            </div>
            <div class="rounded-3xl border border-gray-200 bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 class="font-semibold text-slate-900">National parks</h3>
              <p class="mt-2 text-sm text-slate-600">Wildlife safaris, gorilla treks, and lush scenery in the heart of nature.</p>
            </div>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <router-link to="/kigali" class="group overflow-hidden rounded-4xl bg-emerald-600 p-6 text-white transition hover:bg-emerald-500">
            <div class="text-sm uppercase tracking-[0.35em] text-white/80">Kigali</div>
            <h3 class="mt-4 text-2xl font-bold">City Experience</h3>
            <p class="mt-3 text-sm leading-6 text-white/90">Explore lively streets, arts, and cuisine.</p>
          </router-link>
          <router-link to="/north" class="group overflow-hidden rounded-4xl bg-slate-100 p-6 text-slate-900 transition hover:bg-slate-200">
            <div class="text-sm uppercase tracking-[0.35em] text-slate-500">North</div>
            <h3 class="mt-4 text-2xl font-bold">Mountain Trails</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">Hiking, lakes, and remote corners of Rwanda.</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>