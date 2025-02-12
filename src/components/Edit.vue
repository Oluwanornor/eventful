<script>

</script>

<template>
  <div
    class="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 px-4 sm:px-10 md:px-20 py-6 sm:py-10"
  >
    <form @submit.prevent="saveForm">
      <!-- Date in Future Input -->
      <div class="mb-4">
        <label
          for="date"
          class="block text-sm sm:text-base font-medium text-gray-700"
        >
          Date in Future
        </label>
        <button
          class="mt-2 block w-full px-3 py-2 border border-[#707070] text-justify rounded-md text-sm sm:text-base"
        >
          20/07/2050
        </button>
      </div>

      <!-- Title Input -->
      <div class="mb-4">
        <label
          for="title"
          class="block text-sm sm:text-base font-medium text-gray-700"
        >
          Title
        </label>
        <button
          class="mt-2 block w-full px-3 py-2 border border-[#707070] text-justify rounded-md text-sm sm:text-base"
        >
          Lorem ipsum began as scrambled, nonsensical Latin derived from
        </button>
      </div>

      <!-- Details Input -->
      <div class="mb-6">
        <label
          for="details"
          class="block text-sm sm:text-base font-medium text-gray-700"
        >
          Details
        </label>
        <button
          class="mt-2 block w-full h-full px-3 py-2 border border-[#707070] text-justify rounded-md  text-sm sm:text-base"
        >
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It’s not Latin, though it looks like it, and it
          actually says nothing,” Before & After magazine answered a curious
          reader, “Its ‘words’ loosely approximate the frequency with which
          letters occur in English, which is why at a glance it looks pretty
          real. Until, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It’s not Latin, though it looks like it, and it
          actually says nothing,” Before & After magazine answered a curious
          reader, “Its ‘words’ loosely approximate the frequency with which
          letters occur in English, which is why at a glance it looks pretty
          real. 
          Until recently, the prevailing view assumed lorem ipsum was born
          as a 
        </button>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center mt-8 mb-10">
        <button
          type="submit"
          class="bg-[#5271FF] w-full sm:w-6/12 md:w-4/12 py-2 sm:py-3 rounded-md text-sm sm:text-base text-white"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</template>
