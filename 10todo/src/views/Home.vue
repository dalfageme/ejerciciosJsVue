<template>
  <div class="lists">
    <TaskList v-for="list of tasks" :key="list.id"  :list="list"/>
    <AddTaskList/>
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';
import AddTaskList from '@/components/AddTaskList.vue';

export default {
  name: 'home',

  computed: {
    tasks() {
      return this.$store.state.lists;
    },
  },

  components: {
    TaskList,
    AddTaskList,
  },
};
</script>

<style>
  .lists{
    display: flex;
    flex-direction: row;
  }
</style>
