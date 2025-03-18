<script setup lang="ts">
import { ref } from 'vue'

const profile = ref({
  name: 'John Doe',
  title: 'Senior Full Stack Developer',
  location: 'San Francisco, CA',
  email: 'john.doe@example.com',
  bio: 'Passionate developer with expertise in modern web technologies. Love creating efficient and scalable solutions.',
  experience: [
    {
      company: 'Tech Corp',
      position: 'Senior Developer',
      period: '2020 - Present',
      description: 'Leading development of enterprise web applications'
    },
    {
      company: 'StartUp Inc',
      position: 'Full Stack Developer',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple client projects'
    }
  ],
  education: [
    {
      school: 'University of Technology',
      degree: 'BS in Computer Science',
      year: '2018'
    }
  ]
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div class="relative h-48 bg-blue-500">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          class="absolute bottom-0 left-8 transform translate-y-1/2 w-32 h-32 rounded-full border-4 border-white dark:border-gray-800"
        />
      </div>
      
      <div class="pt-20 px-8 pb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ profile.name }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-4">
          {{ profile.title }}
        </p>
        
        <div class="flex items-center text-gray-600 dark:text-gray-300 mb-6">
          <span class="mr-4">📍 {{ profile.location }}</span>
          <span>📧 {{ profile.email }}</span>
        </div>

        <p class="text-gray-600 dark:text-gray-300 mb-8">
          {{ profile.bio }}
        </p>

        <div class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div class="space-y-6">
            <div
              v-for="exp in profile.experience"
              :key="exp.company"
              class="border-l-4 border-blue-500 pl-4"
            >
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ exp.position }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ exp.company }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ exp.period }}</p>
              <p class="mt-2 text-gray-600 dark:text-gray-300">{{ exp.description }}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Education</h2>
          <div class="space-y-4">
            <div
              v-for="edu in profile.education"
              :key="edu.school"
              class="border-l-4 border-blue-500 pl-4"
            >
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ edu.school }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ edu.degree }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ edu.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>