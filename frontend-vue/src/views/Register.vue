<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="name" placeholder="Name" />
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from '../axios';
  import { useRouter } from 'vue-router';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const register = async () => {
    try {
      const response = await axios.post('/register', { name: name.value, email: email.value, password: password.value });
      localStorage.setItem('token', response.data.token);
      router.push({ name: 'Home' });
    } catch (error) {
      console.error(error);
    }
  };
  </script>
  