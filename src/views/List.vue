<script setup>
import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
</script>

<template>
  <div class="grid grid-cols-1 content ml-0 lg:ml-[5%] mt-[20%] lg:mt-[5%] p-[10px] lg:p-[30px]">
    <div class="grid grid-cols-[auto_auto] items-center">
      <div>
        <h1>{{ route.meta.title.split(' - ')[1] }}</h1>
        <div class="subtitle">
          <label class="active">{{ route.meta.title.split(' - ')[1] }}</label>
        </div>
      </div>
      <button v-if="route.meta.create.visible" @click="router.push('/form/' + route.meta.page)" class="primary">
        <i class="bi bi-plus lg:mr-2"></i>
        <label class="hidden lg:flex">{{ route.meta.create.text }}</label>
      </button>
    </div>
    <div class="grid grid-cols-1 page gap-[36px] my-8">
    </div>
  </div>
</template>