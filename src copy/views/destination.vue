<template>

<!-- HERO SECTION -->
<section
  class="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
  style="background-image: url('/merciii.png');"
>

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/50"></div>
np
  <!-- Hero Content -->
  <div class="relative z-10 text-center text-white px-6">

    <h1 class="text-6xl font-bold mb-4">
      About Tembera Urwanda
    </h1>

    <p class="text-2xl text-green-300">
      Discover the Beauty of Rwanda 🌍
    </p>

  </div>

</section>

<!-- ABOUT SECTION -->
<section class="bg-white py-20 px-8">

  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

    <!-- IMAGE -->
    <div class="md:w-1/2">

      <img
        src="/merciii.png"
        alt="Rwanda"
        class="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
      />

    </div>

    <!-- TEXT -->
    <div class="md:w-1/2">

      <h2 class="text-5xl font-bold text-green-800 mb-8">
        Welcome to Rwanda
      </h2>

      <p class="text-gray-700 text-lg leading-9">

        Tembera Urwanda is a tourism website created to help both
        international tourists and Rwandans discover the beauty of Rwanda,
        the Land of a Thousand Hills.

        <br /><br />

        From the peaceful beaches of Lake Kivu and the wildlife of
        Akagera National Park to the vibrant city life of Kigali,
        Rwanda offers unforgettable experiences filled with adventure,
        culture, and natural beauty.

        <br /><br />

        Our mission is to inspire people to travel, explore Rwanda,
        and create lasting memories through amazing destinations
        and unique experiences.

      </p>

      <!-- BUTTON -->
      <button
        class="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full shadow-lg transition duration-300"
      >
        Explore Rwanda
      </button>

    </div>

  </div>

</section>

<!-- DESTINATIONS SECTION -->
<section class="bg-slate-50 py-20 px-8">

  <div class="max-w-7xl mx-auto">

    <h1 class="text-5xl font-bold text-center text-green-800 mb-14">
      Popular Destinations
    </h1>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

      <!-- CARD 1 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

        <img
          src="/ingagi.jpg"
          class="h-64 w-full object-cover"
        />

        <div class="p-6">

          <h2 class="text-2xl font-bold text-green-800 mb-4">
            Volcanoes National Park
          </h2>

          <p class="text-gray-600">
            Experience mountain gorillas and breathtaking volcanic scenery.
          </p>

        </div>

      </div>

      <!-- CARD 2 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

        <img
          src="/island.jpg"
          class="h-64 w-full object-cover"
        />

        <div class="p-6">

          <h2 class="text-2xl font-bold text-green-800 mb-4">
            Lake Kivu
          </h2>

          <p class="text-gray-600">
            Relax on peaceful beaches and enjoy stunning sunset views.
          </p>

        </div>

      </div>

      <!-- CARD 3 -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

        <img
          src="/Kigali.jpg"
          class="h-64 w-full object-cover"
        />

        <div class="p-6">

          <h2 class="text-2xl font-bold text-green-800 mb-4">
            Kigali City
          </h2>

          <p class="text-gray-600">
            Explore Rwanda’s vibrant capital filled with culture and modern life.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

</template>