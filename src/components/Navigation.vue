<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMobileMenuOpen = ref(false)

defineProps({
  isDarkMode: Boolean,
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="bg-white-100 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="text-2xl font-bold text-gray-800 dark:text-white">MyPortfolio</a>
        </div>

        <!-- Desktop Menu + Dark Mode Toggle -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link
            v-for="item in ['Home', 'About', 'Projects', 'Profile', 'Contact']"
            :key="item"
            :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
            class="px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {{ item }}
          </router-link>

          <!-- Tombol Toggle Dark Mode -->
          <button
            @click="$emit('toggleDarkMode')"
            class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
          >
            {{ isDarkMode ? '🌞' : '🌙' }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
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
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white dark:bg-gray-900 py-4 px-4 space-y-2">
        <router-link
          v-for="item in ['Home', 'About', 'Projects', 'Profile', 'Contact']"
          :key="item"
          :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
          class="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          @click="isMobileMenuOpen = false"
        >
          {{ item }}
        </router-link>

        <!-- Tombol Toggle Dark Mode -->
        <button
          @click="$emit('toggleDarkMode')"
          class="w-full p-2 mt-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
        >
          {{ isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode' }}
        </button>
      </div>
    </div>
  </nav>
</template>