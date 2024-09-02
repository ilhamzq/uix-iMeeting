<script setup>
import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import RuangMeeting from './forms/Booking.vue'
const route = useRoute()
const router = useRouter()
const isSubmit = ref(false)
const onSubmit = (e) => {
  isSubmit.value = e
}
</script>

<template>
  <div class="grid grid-cols-1 content ml-0 lg:ml-[5%] mt-[20%] lg:mt-[5%] p-[10px] lg:p-[30px]">
    <div class="grid grid-cols-[auto_auto] items-center">
      <div class="flex">
        <div v-if="route.meta.back.visible" class="pt-1 pr-4">
          <button @click="router.push('/list/' + route.meta.page)" class="primary">
            <i class="bi bi-chevron-left"></i>
          </button>
        </div>
        <div>
          <h1>{{ route.meta.title.split(' - ')[1] }}</h1>
          <div class="subtitle">
            <label class="inactive">{{ route.meta.title.split(' - ')[1] }}</label>
            <i class="bi bi-chevron-right"></i>
            <label class="active">{{ route.meta.create.text }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 page gap-[36px] my-8">
      <form>
        <RuangMeeting @onSubmit="onSubmit" v-if="route.meta.page === 'ruang'" />
        <div class="action">
          <button v-if="route.meta.back.visible" type="reset" @click="router.push('/list/' + route.meta.page)">
            <label>{{ route.meta.back.text }}</label>
          </button>
          <button type="submit" :disabled="isSubmit ? false : true" @click="router.push('/form/' + route.meta.page)" class="submit">
            <label>{{ route.meta.update.text }}</label>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>