<template>
  <div class="title">
    Hello
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()

onMounted(() => {
  $gsap.from('.title', { x: -100, duration: 1 })
})
</script>

<style lang="scss" scoped>

</style>