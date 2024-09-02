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
      </div>
    </div>
  </div>
</template>