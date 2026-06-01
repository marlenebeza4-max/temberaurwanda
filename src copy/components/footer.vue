<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

<footer class="bg-green-800 text-white px-8 py-10 mt-10">
<div class="flex flex-wrap justify-between gap-8 ">

<div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">Tembera U RWANDA</h3>
        <p class="text-green-300">Discover the beauty of the land of a thousand hills</p>
      </div>


<!--Quick links-->


<div>


    <h3 class="text-yellow-300 font-bold text-lg mb-3">Quick links</h3>
    <ul class="space-y-2 text-sm">
        <li>
            <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink>
        </li>
        <li>
            <RouterLink to="/about" class="hover:text-yellow-300">About us</RouterLink>
        </li>
        <li>
            <RouterLink to="/service" class="hover:text-yellow-300">Service</RouterLink>
        </li>
        <li>
            <RouterLink to="/contact" class="hover:text-yellow-300">Contact us</RouterLink>
        </li>
        
    </ul>
</div>

<!--Destination-->
<div>
    <h3 class="text-yellow-300 font-bold text-lg mb-3">Destination</h3>
    <ul class="space-y-2 text-sm">
<li>
    <RouterLink to="/Northen
    " class="hover:text-yellow-300">Northern Province</RouterLink>
</li>
<li>
    <RouterLink to="/Southern" class="hover:text-yellow-300">Southern Province</RouterLink>
</li>
<li>
    <RouterLink to="/Eastern" class="hover:text-yellow-300">Western Province</RouterLink>
</li>
<li>
    <RouterLink to="/Western" class="hover:text-yellow-300">Eastern Province</RouterLink>
</li>
<li>
    <RouterLink to="/Kigali city" class="hover:text-yellow-300">Kigali Province</RouterLink>
</li>


    </ul>
</div>


<div>

    <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact us</h3>
    <ul class="space-y-2 text-green-300">
        <li>bezamarlene@gmail.com</li>
        <li>0732457394</li>
        <li> Kagugu,Rwanda</li>
    </ul>
</div>

<!--This is copyright-->
<div class="w-full text-center mt-8 text-sm text-green-300">
    &copy 2024 Tembera URWANDA. All rights reserved.
</div>
</div>

</footer>


</template>