<template>
  <div class="new">
    <h3>Create new task list</h3>
    <input v-model="listTitle" />
    <button @click="addList" :disabled="listTitle.length == 0">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listTitle: '',
    };
  },
  methods: {
    addList() {
      this.$store.dispatch('addTaskList', this.listTitle);
    },
  },
};
</script>
