<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const router = useRouter()

const emit = defineEmits(['update-auth'])

const postLogin = async (e: Event) => {
    e.preventDefault()

    try {
        const response = await axios.post('http://localhost/auth/login', {
            email: email.value,
            password: password.value,
        })

        const token = response.data.token

        sessionStorage.setItem('authToken', token)
        successMessage.value = 'Login successful!'
        errorMessage.value = ''
        console.log('Token saved in sessionStorage:', token)
        emit('update-auth', true)
        router.push('/')
    } catch (error: any) {
        console.error('Error:', error.response || error.message)
        errorMessage.value = error.response?.data?.message || 'Login failed. Please try again.'
        successMessage.value = ''
    }
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
            <form @submit.prevent="postLogin" class="space-y-4">
                <div>
                    <input 
                        type="text" 
                        v-model="email" 
                        placeholder="Email" 
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        v-model="password" 
                        placeholder="Password" 
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <button 
                        type="submit" 
                        class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </div>
            </form>
            <div v-if="successMessage" class="mt-4 text-green-500 text-center">{{ successMessage }}</div>
            <div v-if="errorMessage" class="mt-4 text-red-500 text-center">{{ errorMessage }}</div>
        </div>
    </div>
</template>