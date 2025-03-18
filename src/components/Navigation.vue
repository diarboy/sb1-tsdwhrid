<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <a href="/" class="text-2xl font-bold text-gray-800 dark:text-white">MyPortfolio</a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link
            v-for="item in ['Home', 'About', 'Projects', 'Profile', 'Contact']"
            :key="item"
            :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
            class="px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {{ item }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in ['Home', 'About', 'Projects', 'Profile', 'Contact']"
            :key="item"
            :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
            class="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            @click="isMobileMenuOpen = false"
          >
            {{ item }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>