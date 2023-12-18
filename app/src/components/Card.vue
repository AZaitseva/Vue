<script setup>
// export default {
//   data() {
//     return {
//       count: 0
//     }
//   },
//   methods: {
//     incriment() {
//       this.count++
//     }
//   }
// }
import { ref } from 'vue'

let count = ref(0)
function incriment() {
  count.value++
}

defineProps({
  title: String,
  price: Number,
  isAdded: Boolean
})
</script>

<template>
  <div class="card">
    <div class="card__title">{{ title }}</div>
    <div class="card__price">{{ price }} руб.</div>
    {{ isAdded }}
    <slot></slot>
    <!-- <h2>{{ count }}</h2>
    <button @click="incriment()">Добавить 1</button>
    <input v-model="count" /> -->
  </div>
</template>

<style>
body {
  background-color: black;
}
.card__title {
  font-size: 100px;
  color: aqua;
}
</style>
