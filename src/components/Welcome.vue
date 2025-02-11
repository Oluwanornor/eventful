<script>
import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    validateForm() {
      this.errors.email = "";
      this.errors.password = "";

      if (!this.email) {
        this.errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.errors.email = "Email is invalid";
      }

      if (!this.password) {
        this.errors.password = "Password is required";
      } else if (this.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters";
      }

      if (!this.errors.email && !this.errors.password) {
        // Form is valid, redirect to /johndoe
        this.$router.push('/johndoe');
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-[80vh] py-20">
    <div class="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 flex flex-col gap-5 px-4 sm:px-0">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
        Welcome back,
      </h1>
      <p class="text-base sm:text-lg md:text-xl text-center sm:text-left">
        Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of
        water but I store awesome moments you will like to have in coming years.
      </p>
      <form @submit.prevent="validateForm">
        <div class="mb-4 flex flex-col gap-3">
          <label for="email" class="block text-sm sm:text-base text-gray-700">
            Email
          </label>
          <input
            type="text"
            v-model="email"
            id="email"
            class="block w-full h-12 sm:h-13 px-3 py-2 border border-[#707070] rounded-md text-sm sm:text-base"
          />
          <span class="text-red-500 text-sm">{{ errors.email }}</span>
        </div>
        <div class="mb-4 flex flex-col gap-3">
          <label for="password" class="block text-sm sm:text-base text-gray-700">
            Password
          </label>
          <input
            type="password"
            v-model="password"
            id="password"
            class="block w-full h-12 sm:h-13 px-3 py-2 border border-[#707070] rounded-md text-sm sm:text-base"
          />
          <span class="text-red-500 text-sm">{{ errors.password }}</span>
        </div>
        <div class="flex justify-center mt-8 mb-10">
          <button
            type="submit"
            class="w-full text-center sm:w-8/12 md:w-6/12 lg:w-4/12 py-2 sm:py-3 px-4 sm:px-7 rounded-xl text-sm sm:text-base text-white bg-[#5271FF] hover:bg-indigo-700"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>