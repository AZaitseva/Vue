<script setup>
import Card from './components/Card.vue'
</script>

<template>
  <div class="card__title">заголовок в app</div>
  <svg>
    <use href="./assets/sprite.svg#icon-fav"></use>
  </svg>
  <svg>
    <use href="./assets/sprite.svg#icon-lk"></use>
  </svg>

  <Card title="Рубашка 1" :price="3000 + 500" :is-added="true">
    <Card title="Рубашка 2" :price="3000" />
    <Card title="Рубашка 3" :price="3000" />
    <Card title="Рубашка 4" :price="3000" />
    <Card title="Рубашка 1" :price="3000" />
    <Card title="Рубашка 1" :price="3000" />
    <button>Добавить в корзину</button>
  </Card>
</template>

<style>
body {
  background-color: black;
  color: #fff;
}
</style>
