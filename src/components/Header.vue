<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: String
    }
  }
</script>

<style scoped>
  header {
    padding: 40px 0;
    text-align: center;
  }
</style>
