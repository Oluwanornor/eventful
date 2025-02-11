<script>
import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      items: [
        {
          title:
            "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
          details:
            "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
          date: "20/06/2021",
          date2: "20/06/2025",
        },
        {
          title:
            "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
          details:
            "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
          date: "20/06/2021",
          date2: "20/06/2025",
        },
        {
          title:
            "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
          details:
            "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
          date: "20/06/2021",
          date2: "20/06/2025",
        },
        {
          title:
            "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.",
          details:
            "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.",
          date: "20/06/2021",
          date2: "20/06/2025",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <!-- Header Section -->
    <div class="flex flex-col sm:flex-row justify-between px-4 sm:px-10 md:px-20 py-6 sm:py-10">
      <div>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold">Welcome, John Doe</h1>
        <p class="text-sm sm:text-base">Here are items in your eventful moment bucket.</p>
      </div>
      <div class="mt-4 sm:mt-0">
        <RouterLink to="/add" class="bg-[#5271FF] hover:bg-amber-400 w-full sm:w-auto px-6 py-2 sm:px-8 sm:py-3 rounded-md text-sm sm:text-base text-white">
          Add item
        </RouterLink>
      </div>
    </div>

    <!-- Grid Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-10 md:px-20">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="p-4 sm:p-6 shadow-sm hover:bg-[#521]  cursor-pointer"
      >
        <h2 class="text-sm sm:text-base font-bold">{{ item.title }}</h2>
        <p class="text-xs sm:text-sm text-justify mt-2">{{ item.details }}</p>
        <div class="flex flex-row justify-between mt-4">
          <RouterLink to="/lorem" class="text-blue-500 text-xs sm:text-sm">View Details</RouterLink>
          <div class="flex flex-row gap-2 sm:gap-3">
            <p class="text-xs sm:text-sm text-gray-500">{{ item.date }}</p>
            <p class="text-xs sm:text-sm">{{ item.date2 }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More Button -->
    <div class="flex justify-center mt-10 mb-20">
      <RouterLink to="/lorem" class="bg-[#5271FF] text-center w-40 sm:w-48 py-2 sm:py-3 rounded-xl text-sm sm:text-base text-white">
        Load More
      </RouterLink>
    </div>
  </div>
</template>