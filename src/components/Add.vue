<script>
export default {
  data() {
    return {
      formData: {
        date: '',
        title: '',
        details: '',
      },
    };
  },
  computed: {
    minDate() {
      // Set the minimum date to today
      const today = new Date();
      return today.toISOString().split('T')[0];
    },
  },
  methods: {
    saveForm() {
      // Handle form submission
      console.log('Form Data:', this.formData);
      alert('Form saved successfully!');
      // You can add logic here to send the data to an API or store it locally
    },
  },
};
</script>

<template>
  <div class="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 px-4 sm:px-10 md:px-20 py-6 sm:py-10">
    <form @submit.prevent="saveForm">
      <!-- Date in Future Input -->
      <div class="mb-4">
        <label for="date" class="block text-sm sm:text-base font-medium text-gray-700">
          Date in Future
        </label>
        <input
          type="text"
          id="date"
          v-model="formData.date"
          :min="minDate"
          class="mt-2 block w-full px-3 py-2 border border-[#707070] rounded-md text-sm sm:text-base"
          required
        />
      </div>

      <!-- Title Input -->
      <div class="mb-4">
        <label for="title" class="block text-sm sm:text-base font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          v-model="formData.title"
          class="mt-2 block w-full px-3 py-2 border border-[#707070] rounded-md text-sm sm:text-base"
          required
        />
      </div>

      <!-- Details Input -->
      <div class="mb-6">
        <label for="details" class="block text-sm sm:text-base font-medium text-gray-700">
          Details
        </label>
        <textarea
          id="details"
          v-model="formData.details"
          rows="4"
          class="mt-2 block w-full h-70 px-3 py-2 border border-[#707070] rounded-md text-sm sm:text-base"
          required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center mt-8 mb-10">
        <button
          type="submit"
          class="bg-[#5271FF] w-full  sm:w-6/12 md:w-4/12 py-2 sm:py-3 rounded-md text-sm sm:text-base text-white"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>