<template>
  <div class="container h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow xl:max-w-3xl">
    <div class="relative hidden h-full xl:block xl:w-1/2">
      <img class="absolute object-cover w-full h-auto" src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
        alt="my zomato" />
    </div>
    <div class="w-full p-8 xl:w-1/2">
      <form method="post" action="#" onSubmit="return false">
        <h1 class="text-2xl font-bold ">Sign in to your account</h1>
        <div>
          <span class="text-sm text-gray-600">
            Don't have an account?
          </span>
          <span class="text-sm font-semibold text-gray-700">
            Sign up
          </span>
        </div>
        <div class="mt-6 mb-4">
          <label class="block mb-2 text-sm font-semibold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            class="w-full h-10 px-3 py-2 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
            id="email" type="text" placeholder="Your email address" />
        </div>
        <div class="mt-6 mb-6">
          <label class="block mb-2 text-sm font-semibold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            class="w-full h-10 px-3 py-2 mb-1 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="Your password" />
          <a class="inline-block text-sm text-gray-600 align-baseline hover:text-gray-800" href="/forgot">
            Forgot Password?
          </a>
        </div>
        <div class="flex w-full mt-8">
          <button
            class="w-full h-10 px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded hover:bg-grey-900 focus:outline-none focus:shadow-outline"
            type="button">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
</script>