<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards, Pagination, Navigation } from 'swiper/modules'
import { Vue3Lottie } from 'vue3-lottie'
import { loadFull } from "tsparticles"

const particlesInit = async (engine: any) => {
  await loadFull(engine)
}

const testimonials = ref([
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    content: 'Exceptional work! The attention to detail and creative solutions exceeded our expectations.',
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content: 'Outstanding development skills and great communication throughout the project.',
    image: 'https://i.pravatar.cc/150?img=2'
  },
  {
    name: 'Emily Davis',
    role: 'Design Director',
    content: 'A true professional who delivers high-quality work consistently.',
    image: 'https://i.pravatar.cc/150?img=3'
  }
])

const stats = ref([
  { label: 'Projects Completed', value: 0, target: 150 },
  { label: 'Happy Clients', value: 0, target: 80 },
  { label: 'Awards Won', value: 0, target: 25 }
])

const particlesOptions = {
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#3B82F6"
    },
    links: {
      color: "#3B82F6",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: { min: 1, max: 3 }
    }
  }
}

onMounted(() => {
  // Animate hero section
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  })

  // Animate statistics
  stats.value.forEach((stat, index) => {
    gsap.to(stat, {
      value: stat.target,
      duration: 2,
      delay: index * 0.2,
      ease: 'power1.out',
      roundProps: 'value'
    })
  })
})
</script>

<template>
  <div class="relative">
    <!-- Particles Background -->
    <div class="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :options="particlesOptions"
      />
    </div>

    <div class="relative z-10">
      <!-- Hero Section -->
      <section class="min-h-screen flex items-center justify-center px-4 py-20">
        <div class="hero-content text-center max-w-4xl">
          <h1 class="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Crafting Digital
            <span class="text-blue-500">Experiences</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
            Full-stack developer specializing in creating beautiful, performant, and user-friendly applications
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/projects"
              class="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View My Work
            </router-link>
            <router-link
              to="/contact"
              class="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </router-link>
          </div>
        </div>
      </section>

      <!-- Statistics Section -->
      <section class="py-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center p-8 rounded-lg bg-gray-50 dark:bg-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div class="text-4xl font-bold text-blue-500 mb-2">{{ Math.round(stat.value) }}+</div>
              <div class="text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Clients Say
          </h2>
          <Swiper
            :modules="[EffectCards, Pagination, Navigation]"
            :effect="'cards'"
            :grabCursor="true"
            :pagination="{ clickable: true }"
            :navigation="true"
            class="max-w-md mx-auto"
          >
            <SwiperSlide
              v-for="testimonial in testimonials"
              :key="testimonial.name"
              class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div class="flex items-center mb-6">
                <img
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  class="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {{ testimonial.name }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400">{{ testimonial.role }}</p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 italic">
                "{{ testimonial.content }}"
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-blue-500 dark:bg-gray-800 rounded-xl">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
          <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm currently available for freelance work.
          </p>
          <router-link
            to="/contact"
            class="inline-block px-8 py-4 bg-white text-blue-500 rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg text-lg font-semibold"
          >
            Let's Talk
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.swiper {
  width: 100%;
  padding: 50px 0;
}

.swiper-slide {
  width: 300px;
  height: auto;
}

.swiper-button-next,
.swiper-button-prev {
  color: #3B82F6;
}

.swiper-pagination-bullet-active {
  background: #3B82F6;
}
</style>