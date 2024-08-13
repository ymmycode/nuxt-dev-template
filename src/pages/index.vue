<template>
  <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center">
    <div class="title text-5xl">
      Hello
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main'
})

const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.from('.title', { y: 100, opacity: 0, duration: 1 })
})
</script>

<style lang="scss" scoped>

</style>