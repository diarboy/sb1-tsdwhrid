<script setup lang="ts">
const skills = [
  { name: 'Vue.js', level: 90 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 88 },
  { name: 'Node.js', level: 82 },
  { name: 'Python', level: 75 }
]
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
    
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/3">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            class="rounded-lg w-full"
          />
        </div>
        <div class="md:w-2/3">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            John Doe
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Full Stack Developer with over 5 years of experience in building web applications.
            Passionate about creating clean, efficient, and user-friendly solutions.
          </p>
          <p class="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing knowledge through technical writing.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills</h2>
      <div class="space-y-4">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="relative pt-1"
        >
          <div class="flex mb-2 items-center justify-between">
            <div>
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                {{ skill.name }}
              </span>
            </div>
            <div class="text-right">
              <span class="text-xs font-semibold inline-block text-blue-600">
                {{ skill.level }}%
              </span>
            </div>
          </div>
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              :style="{ width: `${skill.level}%` }"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>