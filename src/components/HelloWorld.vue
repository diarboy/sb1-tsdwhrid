<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">{{ msg }}</h1>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <button
        type="button"
        @click="count++"
        class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Count is: {{ count }}
      </button>
      
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        Edit <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <a
        href="https://vuejs.org/guide/quick-start.html#local"
        target="_blank"
        class="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Documentation</h2>
        <p class="text-gray-600 dark:text-gray-300">Vue.js official documentation</p>
      </a>

      <a
        href="/docs"
        class="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">VuePress</h2>
        <p class="text-gray-600 dark:text-gray-300">Check out our documentation</p>
      </a>
    </div>
  </div>
</template>