<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  submitSuccess.value = true
  isSubmitting.value = false
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Me</h1>

    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              for="subject"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Subject
            </label>
            <input
              id="subject"
              v-model="formData.subject"
              type="text"
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>

          <div
            v-if="submitSuccess"
            class="p-4 bg-green-100 text-green-700 rounded-lg"
          >
            Message sent successfully!
          </div>
        </form>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h2>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="text-2xl mr-4">📍</div>
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Address</h3>
              <p class="text-gray-600 dark:text-gray-300">
                123 Tech Street<br>
                San Francisco, CA 94105
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="text-2xl mr-4">📧</div>
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
              <p class="text-gray-600 dark:text-gray-300">contact@example.com</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="text-2xl mr-4">📱</div>
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
              <p class="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="text-2xl mr-4">🌐</div>
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">Social Media</h3>
              <div class="flex space-x-4 mt-2">
                <a href="#" class="text-blue-500 hover:text-blue-600">Twitter</a>
                <a href="#" class="text-blue-500 hover:text-blue-600">LinkedIn</a>
                <a href="#" class="text-blue-500 hover:text-blue-600">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>