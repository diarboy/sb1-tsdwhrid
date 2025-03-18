<script setup lang="ts">
import { ref, onMounted } from "vue";
import Navigation from "./components/Navigation.vue";

const isDarkMode = ref(localStorage.getItem("darkMode") === "true");

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("darkMode", isDarkMode.value);
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};

onMounted(() => {
  document.documentElement.classList.toggle("dark", isDarkMode.value);
});
</script>

<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="flex flex-col min-h-screen">
      <header class="relative z-10">
        <Navigation :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode" />
      </header>

      <main class="flex-grow container mx-auto px-4 py-8">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <footer class="bg-gray-100 dark:bg-gray-800 py-6">
        <div class="container mx-auto px-4">
          <div class="text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2025 MyPortfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
.dark {
  background-color: #1a202c !important; /* Pastikan warna gelap diterapkan */
}
</style>