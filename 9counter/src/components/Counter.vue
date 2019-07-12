<template>
  <div>
    <h3>{{numero}} init value {{initValue}}</h3>
    <button @click="decrement"
      :disabled="decrementIsDisabled"
      :class="{disabled: decrementIsDisabled}">
        decrementar
    </button>
    <input
      v-model="numero"
      type="number"
      :max="max" :min="min"
      :class="{isGreen, isRed, isOrange}"/>
    <button v-on:click="incrementar" :disabled="incrementIsDisabled">Incremento</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data() {
    return {
      numero: 0,
    };
  },
  props: {
    initValue: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 10,
    },
    min: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    incrementar() {
      this.numero = +this.numero + 1;
    },
    decrement() {
      this.numero = +this.numero - 1;
    },
  },
  computed: {
    incrementIsDisabled() {
      return this.numero >= this.max;
    },
    decrementIsDisabled() {
      return this.numero <= this.min;
    },
    completedPercentage() {
      return 100 * (this.numero - this.min) / (this.max - this.min);
    },
    isGreen() {
      return this.completedPercentage <= 33;
    },
    isOrange() {
      return this.completedPercentage > 33 && this.completedPercentage <= 66;
    },
    isRed() {
      return this.completedPercentage > 66;
    },
  },
  watch: {
    numero(val, oldValue) {
      console.log(`Valor anterior es ${oldValue} y el actual es ${val}`);
      if (val > this.max) {
        this.numero = this.max;
      }

      if (val < this.min) {
        this.numero = this.min;
      }
    },
  },
  created() {
    this.numero = this.initValue;
    console.log('He sido creado', this.initValue);
  },
};
</script>

<style>
  .disabled {
    background: white;
    border: none;
  }

  .isRed {
    background:red;
  }

  .isGreen {
    background:greenyellow;
  }

  .isOrange {
    background:orange;
  }
</style>
