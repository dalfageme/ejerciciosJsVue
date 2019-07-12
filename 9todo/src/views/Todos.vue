<template>
  <div>
    <h1>{{nombre}}</h1>
    <Counter :initValue="200" :max="203" :min="199"/>
    <Counter />
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter :initValue="200"/>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue';

export default {
  data() {
    return {
      nombre: 'mundo',
    };
  },
  components: {
    Counter,
  },
};
</script>
