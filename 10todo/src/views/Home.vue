<template>
  <div class="lists">
    <TaskList v-for="list of tasksLists" :key="list.id"  :list="list"/>
    <div class="new">
      <input v-model="listTitle"/>
      <button @click="addList">+</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList.vue';

export default {
  name: 'home',
  data() {
    return {
      listTitle: '',
      tasksLists: [
        {
          id: 0,
          title: 'Fake',
          todos: [
            {
              name: 'Este es mi primer todo',
              done: false,
              id: 0,
            },
          ],
        },
      ],
    };
  },
  methods: {
    addList() {
      this.tasksLists.push({
        title: this.listTitle,
        id: this.tasksLists.length,
        todos: [],
      });
    },
  },
  components: {
    TaskList,
  },
};
</script>

<style>
  .lists{
    display: flex;
    flex-direction: row;
  }
</style>
