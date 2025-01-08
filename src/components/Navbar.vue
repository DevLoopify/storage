<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  isAuthenticated: Boolean,
});

const emit = defineEmits(['update-auth']);

const isOpen = ref(false);
const router = useRouter();

const logout = () => {
  sessionStorage.removeItem('authToken');
  emit('update-auth', false);
  router.push('/login');
};
</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <RouterLink to="/" class="border-b-2 border-transparent text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium hover:border-gray-300">
              Home
            </RouterLink>
            <RouterLink to="/about" class="border-b-2 border-transparent text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium hover:border-gray-300">
              About
            </RouterLink>
            <RouterLink to="/services" class="border-b-2 border-transparent text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium hover:border-gray-300">
              Services
            </RouterLink>
            <RouterLink to="/contact" class="border-b-2 border-transparent text-gray-500 inline-flex items-center px-1 pt-1 text-sm font-medium hover:border-gray-300">
              Contact
            </RouterLink>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <RouterLink v-if="!props.isAuthenticated" to="/login" class="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
            Login
          </RouterLink>
          <button v-else @click="logout" class="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600">
            Logout
          </button>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path :class="{'hidden': isOpen, 'inline-flex': !isOpen }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              <path :class="{'hidden': !isOpen, 'inline-flex': isOpen }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{'block': isOpen, 'hidden': !isOpen}" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <RouterLink to="/" class="border-l-4 border-blue-500 bg-blue-50 text-blue-700 block pl-3 pr-4 py-2 text-base font-medium">
          Home
        </RouterLink>
        <RouterLink to="/about" class="border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium">
          About
        </RouterLink>
        <RouterLink to="/services" class="border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium">
          Services
        </RouterLink>
        <RouterLink to="/contact" class="border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 text-base font-medium">
          Contact
        </RouterLink>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <RouterLink v-if="!props.isAuthenticated" to="/login" class="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
            Login
          </RouterLink>
          <button v-else @click="logout" class="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
