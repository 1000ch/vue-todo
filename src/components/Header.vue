<template>
  <header>
    <h1>{{ title }}</h1>
    <input type="text" v-model="item">
    <button v-on:click="add">+</button>
  </header>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Header',
    props: {
      title: String
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

<style scoped>
  header {
    padding: 40px 0;
    text-align: center;
  }
</style>
