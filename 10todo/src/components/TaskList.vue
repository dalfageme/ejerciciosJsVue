<template>
  <div class="list">
    <h1>{{list.title}}</h1>
    <ul>
      <li v-for="todo of list.todos" :key="todo.id">{{todo.text}}</li>
    </ul>
  <AddTask :listId="list.id"/>
  </div>
</template>

<script>
import AddTask from './AddTask.vue';

export default {

  props: {
    list: {
      type: Object,
    },
  },
  components: {
    AddTask,
  },
};
</script>

<style>
  .list{
    width: 200px;
    text-align: left;
  }
</style>
