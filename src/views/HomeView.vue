<script setup lang="ts">
import useSampleStore from '@/stores/Sample'
import TheWelcome from '../components/TheWelcome.vue'
import { onMounted } from 'vue'

const sampleStore = useSampleStore()

onMounted(() => {
  sampleStore.fetchName()
})
</script>

<template>
  <main>
    <h1 v-if="sampleStore.isLoading">IS LOADING</h1>

    <h1 v-if="!sampleStore.isLoading && sampleStore.name !== undefined">
      NAME: {{ sampleStore.name }}
    </h1>
    <TheWelcome />
  </main>
</template>
