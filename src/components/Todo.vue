<template>
  <li>
    <label>
      <input
        type="checkbox"
        v-on:change="change"
        v-bind:checked="checked">
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
        this.$store.commit('remove', {
          index: this.index
        })
      },
      change: function(event) {
        this.$store.commit('check', {
          index: this.index,
          checked: event.target.checked
        })
      }
    }
  }
</script>

<style scoped>
  li {
    list-style-type: none;
    font-size: 1.5em;
  }
</style>
