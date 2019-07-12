<template>
  <div class="list">
    <h1>{{list.title}}</h1>
    <ul>
      <li v-for="todo of list.todos" :key="todo.id">{{todo.name}}</li>
    </ul>
    <div>
      <input v-model="text">
      <button @click="add">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Esto es una lisat',
      text: '',
    };
  },
  methods: {
    add() {
      console.log(this.text);
      this.list.todos.push({
        name: this.text,
        done: false,
        id: this.list.todos.length,
      });
      this.text = '';
    },
  },
  props: {
    list: {
      type: Object,
    },
  },
};
</script>

<style>
  .list{
    width: 200px;
    text-align: left;
  }
</style>
