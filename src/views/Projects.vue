<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

gsap.registerPlugin(ScrollTrigger)

const projects = ref([
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform built with Vue.js and Node.js',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    link: '#',
    stats: {
      users: '10K+',
      transactions: '50K+',
      revenue: '$500K+'
    }
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management solution for remote teams',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    tags: ['React', 'Firebase', 'Material-UI'],
    link: '#',
    stats: {
      users: '5K+',
      tasks: '100K+',
      teams: '500+'
    }
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    tags: ['Vue.js', 'D3.js', 'TypeScript'],
    link: '#',
    stats: {
      profiles: '1K+',
      posts: '50K+',
      engagement: '1M+'
    }
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-first application for tracking workouts and nutrition',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    tags: ['React Native', 'Redux', 'Node.js'],
    link: '#',
    stats: {
      users: '20K+',
      workouts: '200K+',
      calories: '10M+'
    }
  }
])

const selectedProject = ref(null)
const chartData = ref({
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'User Growth',
      data: [1200, 1900, 3000, 5000],
      backgroundColor: '#3B82F6'
    }
  ]
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Project Performance'
    }
  }
}

onMounted(() => {
  // Animate projects on scroll
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: i * 0.2
    })
  })
})

const showProjectDetails = (project) => {
  selectedProject.value = project
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Featured Projects
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Explore some of my recent work and see how I help businesses achieve their goals through
        innovative technology solutions.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="project-card group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
        @click="showProjectDetails(project)"
      >
        <div class="relative">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-64 object-cover"
          />
          <div class="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
            <span class="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              View Details
            </span>
          </div>
        </div>
        
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ project.description }}
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
            >
              {{ tag }}
            </span>
          </div>

          <div class="grid grid-cols-3 gap-4 text-center">
            <div
              v-for="(value, key) in project.stats"
              :key="key"
              class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
            >
              <div class="text-blue-500 font-bold">{{ value }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400 capitalize">{{ key }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Performance Chart -->
    <div class="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Project Performance</h2>
      <div class="h-80">
        <Bar
          :data="chartData"
          :options="chartOptions"
        />
      </div>
    </div>

    <!-- Project Details Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="selectedProject = null"
    >
      <div
        class="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-6">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {{ selectedProject.title }}
          </h2>
          <img
            :src="selectedProject.image"
            :alt="selectedProject.title"
            class="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            {{ selectedProject.description }}
          </p>
          <div class="grid grid-cols-3 gap-4 text-center mb-6">
            <div
              v-for="(value, key) in selectedProject.stats"
              :key="key"
              class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
            >
              <div class="text-blue-500 text-2xl font-bold">{{ value }}</div>
              <div class="text-gray-600 dark:text-gray-400 capitalize">{{ key }}</div>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              @click="selectedProject = null"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>