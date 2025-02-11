<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="px-4 sm:px-10 md:px-20 py-10 sm:py-20 flex flex-col gap-6 sm:gap-10">
      <!-- Heading Section -->
      <div>
        <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold">
          Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s
          1st-century
        </h1>
        <p class="text-sm sm:text-base text-[#5271FF] mt-2">20/05/2025</p>
      </div>
  
      <!-- Content Section -->
      <div class="flex flex-col gap-6 sm:gap-10">
        <p class="text-sm sm:text-base text-justify">
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It’s not Latin, though it looks like it, and it actually
          says nothing,” Before & After magazine answered a curious reader, “Its
          ‘words’ loosely approximate the frequency with which letters occur in
          English, which is why at a glance it looks pretty real. Until, the
          prevailing view assumed lorem ipsum was born as a nonsense text. “It’s
          not Latin, though it looks like it, and it actually says nothing,”
          Before & After magazine answered a curious reader, “Its ‘words’ loosely
          approximate the frequency with which letters occur in English, which is
          why at a glance it looks pretty real.
        </p>
        <p class="text-sm sm:text-base text-justify">
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It’s not Latin, though it looks like it, and it actually
          says nothing,” Before & After magazine answered a curious reader, “Its
          ‘words’ loosely approximate the frequency with which letters occur in
          English, which is why at a glance it looks pretty real. Until, the
          prevailing view assumed lorem ipsum was born as a nonsense text. “It’s
          not Latin, though it looks like it, and it actually says nothing,”
          Before & After magazine answered a curious reader, “Its ‘words’ loosely
          approximate the frequency with which letters occur in English, which is
          why at a glance it looks pretty real.
        </p>
        <p class="text-sm sm:text-base text-justify">
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It’s not Latin, though it looks like it, and it actually
          says nothing,” Before & After magazine answered a curious reader, “Its
          ‘words’ loosely approximate the frequency with which letters occur in
          English, which is why at a glance it looks pretty real. Until, the
          prevailing view assumed lorem ipsum was born as a nonsense text. “It’s
          not Latin, though it looks like it, and it actually says nothing,”
          Before & After magazine answered a curious reader, “Its ‘words’ loosely
          approximate the frequency with which letters occur in English, which is
          why at a glance it looks pretty real.
        </p>
      </div>
  
      <!-- Buttons Section -->
      <div class="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-10">
        <RouterLink to="/edit" class="w-full text-center sm:w-48 rounded-lg bg-[#06C3B4] px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base text-white">
          Edit
        </RouterLink>
        <RouterLink class="w-full text-center sm:w-48 rounded-lg bg-[#C34F06] px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base text-white">
          Delete
        </RouterLink>
      </div>
    </div>
  </template>