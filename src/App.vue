<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import "bootstrap-icons/font/bootstrap-icons.css"
const route = useRoute()
const router = useRouter()
const isTitle = import.meta.env.VITE_APP_TITLE
const isUser = "John Doe"
</script>

<template>
  <div class="grid grid-cols-2 header gap-0">
    <a @click="router.push('/')">
      <div class="flex items-center gap-[10px] lg:gap-[20px]">
        <img src="./assets/image/image.png" />
        <label v-text="isTitle" />
      </div>
    </a>
    <div class="flex items-center gap-[12px]">
      <div class="flex gap-[8px]">
        <div><i class="bi bi-megaphone"></i></div>
        <label class="hidden lg:block">Kontak Aduan</label>        
      </div>
      <button><i class="bi bi-bell"></i></button>
      <img src="./assets/image/8851b335971c0c86bdc4731a44aeae12.png" />
      <label class="hidden lg:block" v-text="isUser" />
      <i class="bi bi-chevron-down cursor-pointer"></i>
    </div>
  </div>
  <ul class="grid grid-cols-1 menu !hidden lg:!block">
    <li :class="[route.meta.page === 'dashboard' ? 'active' : '']">
      <RouterLink to="/dashboard">
        <i class="bi bi-house-door"></i>
      </RouterLink>
      <label>Dashboard</label>
    </li>
    <li :class="[route.meta.page === 'ruang' ? 'active' : '']">
      <RouterLink to="/list/ruang">
        <i class="bi bi-file-earmark"></i>
      </RouterLink>
      <label>Ruang Meeting</label>
    </li>
  </ul>
  
  <RouterView />
</template>