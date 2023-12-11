<script setup>
// export default {
//   data() {
//     return {
//       count: 0
//     }
//   },
//   methods: {
//     icriment() {
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
  <header>
    <div class="container">
      <div class="menu"></div>
    </div>
  </header>
  <div class="card">
    <div class="card__title">{{ title }}</div>
    <div class="card__price">{{ price }}</div>
    <!-- <h2>{{ count }}</h2>
    <button @click="incriment()">Добавить 1</button>
    <input v-model="count" /> -->
  </div>
</template>

<style scoped>
/* body {
  background-color: #000;
  color: #fff;
} */
</style>
