import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [],
  },
  mutations: {
    addList(state, list) {
      state.lists.push(list);
    },
    addTask(state, { listId, task }) {
      state.lists = state.lists.map((l) => {
        if (listId === l.id) {
          l.todos.push(task);
        }
        return l;
      });
    },
  },
  actions: {
    addTaskList({ commit }, title) {
      commit('addList', {
        title,
        id: this.state.lists.length,
        todos: [],
      });
    },
    addTask({ commit }, { text, id }) {
      const list = this.state.lists.find(l => l.id === id);
      const taskId = list ? list.todos.length : 0;
      commit('addTask', {
        listId: id,
        task: {
          text,
          id: taskId,
          done: false,
        },
      });
    },
  },
});
