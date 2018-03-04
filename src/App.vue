<template>
  <div id="app" class="container">
    <Header title="Vue.js Todo App"/>
    <TodoList />
    <input type="text" v-model="item">
    <button v-on:click="add">+</button>
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
    },
    data() {
      return {
        item: ''
      }
    },
    methods: {
      add: function() {
        if (this.item.length === 0) {
          return
        }

        this.$store.commit('add', this.item)
        this.item = ''
      }
    }
  }
</script>

<style>
  html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
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
