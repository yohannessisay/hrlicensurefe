<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-1/4 space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-indigo-800">
          Login
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <span class="py-2">Username</span>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <span class="py-2">Password</span>
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div class="flex items-center justify-end">
          <div class="text-sm">
            <a
              href="#"
              class="font-medium primary text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="w-52 focus:outline-none text-white justify-center text-sm py-2 px-12 rounded-3xl bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          >
            Login
          </button>
        </div>
        <div class="text-indigo-700 flex justify-center">
          <span>Don't have an account? </span>
          <router-link to="/signup" class="px-4">Sign Up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
