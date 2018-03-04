<template>
  <ul>
    <todo
      v-for="(item, index) in items"
      v-bind:key="index"
      v-bind:index="index"
      v-bind:checked="item.checked"
      v-bind:text="item.text">
    </todo>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'
  import Todo from './Todo.vue'

  export default {
    name: 'TodoList',
    components: {
      Todo
    },
    computed: mapState({
      items: state => state.items
    })
  }
</script>
