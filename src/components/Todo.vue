<template>
  <li>
    <label>
      <input type="checkbox" v-bind:checked="checked">
      {{ text }}
    </label>
    <button v-on:click="remove">-</button>
  </li>
</template>

<script>
  export default {
    name: 'Todo',
    props: {
      index: Number,
      checked: Boolean,
      text: String
    },
    methods: {
      remove: function() {
        this.$store.commit('remove', this.index)
      }
    }
  }
</script>
