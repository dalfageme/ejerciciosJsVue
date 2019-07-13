<template>
  <div>
    <!-- Cuando se presionar enter sobre el input también se añade a la lista -->
    <input v-model="text" ref="text" v-on:keydown.enter="add">
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  props: {
    listId: Number,
  },
  methods: {
    add() {
      this.$store.dispatch('addTask', { text: this.text, id: this.listId });
      this.text = '';
      this.$refs.text.focus();
    },
  },
};
</script>
