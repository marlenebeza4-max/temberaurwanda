<script setup>
</script>

<template>
  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full">

    <!-- Logo -->
    <div class="flex items-center gap-3">
      <img :src="merciii" class="h-10 w-10 rounded-full" alt="Logo" />
      <span class="text-lg font-bold">TEMBERA URWANDA</span>
    </div>

    <!-- Navigation -->
    <ul class="flex gap-8 text-sm font-medium items-center">

      <li>
        <RouterLink to="/" class="hover:text-yellow-300">
          Home
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/about" class="hover:text-yellow-300">
          About
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/services" class="hover:text-yellow-300">
          Services
        </RouterLink>
      </li>

      <!-- Gallery Dropdown -->
      <li class="relative group">
        <RouterLink to="/gallery" class="hover:text-yellow-300">
          Gallery 🔽
        </RouterLink>

        <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
          <li>
            <RouterLink to="/images" class="block px-4 py-2 hover:bg-green-700">
              Images
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/videos" class="block px-4 py-2 hover:bg-green-700">
              Videos
            </RouterLink>
          </li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300">
          Destination 🔽
        </a>

        <ul class="absolute right-0 mt-2 w-52 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">

          <li>
            <RouterLink to="/northern" class="block px-4 py-2 hover:bg-green-700">
              Northern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/southern" class="block px-4 py-2 hover:bg-green-700">
              Southern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/eastern" class="block px-4 py-2 hover:bg-green-700">
              Eastern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/western" class="block px-4 py-2 hover:bg-green-700">
              Western Province
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-700">
              City of Kigali
            </RouterLink>
          </li>

        </ul>
      </li>

      <li>
        <RouterLink to="/contact" class="hover:text-yellow-300">
          Contact
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/login" class="bg-yellow-300 text-black rounded px-3 py-2 text-sm font-semibold hover:bg-yellow-200 transition-colors">
          Login
        </RouterLink>
      </li>

    </ul>
  </nav>
</template>