<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";

const route = useRoute();

const isWelcomePage = computed(() => route.name === "welcome" || "create");
</script>

<template>
  <nav
    class="flex flex-row justify-between bg-[#008289] text-white px-4 sm:px-8 md:px-16 h-16 md:h-20 items-center"
  >
    <div>
      <RouterLink
        to="/"
        class="text-lg md:text-xl lg:text-2xl italic font-semibold"
        >Eventful Moments</RouterLink
      >
    </div>
    <div class="flex flex-row gap-2 sm:gap-3 text-sm md:text-base">
      <div v-if="isWelcomePage" class="flex flex-row gap-2 sm:gap-3">
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/create">Register</RouterLink>
      </div>
      <div v-else class="flex flex-row gap-2 sm:gap-3">
        <RouterLink>Logout</RouterLink>
        <RouterLink to="/johndoe">My Bucket</RouterLink>
      </div>
    </div>
  </nav>
</template>
