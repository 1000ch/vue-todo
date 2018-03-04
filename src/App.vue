<template>
  <div id="app" class="container">
    <Header title="Vue.js Todo App"/>
    <TodoList />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Header from './components/Header.vue'
  import TodoList from './components/TodoList.vue'

  export default {
    name: 'app',
    components: {
      Header,
      TodoList
    }
  }
</script>

<style>
  :root {
    --dark: #2c3e50;
  }

  html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: var(--dark);
  }

  body {
    margin: 0;
    padding: 0;
  }

  .container {
    margin: 0 auto;
    max-width: 640px;
    min-width: 320px;
  }
</style>
