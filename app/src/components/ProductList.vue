<script>
import productMixin from './productMixin'
export default {
  mixins: [productMixin]
}
</script>
<template>
  <div class="catalog">
    <div class="catalog__row">
      <div v-for="product in products" :key="product.id" class="catalog__item-container">
        <div class="catalog-item">
          <div class="catalog-item__image">
            <button class="catalog-item__fav">
              <svg>
                <use href="../assets/sprite.svg#icon-fav"></use>
              </svg>
            </button>
            <img :src="product.image" alt="" />
          </div>
          <a class="catalog-item__name" href="#"> {{ product.title }} </a>
          <div class="catalog-item__bottom">
            <div class="catalog-item__price">
              <div class="catalog-item__label">Цена:</div>
              <div class="catalog-item__value">{{ product.price }} руб.</div>
            </div>
            <button class="catalog-item__cart" @click="addToCart(product)">
              <svg v-if="!isInCart(product)">
                <use href="../assets/sprite.svg#icon-plus"></use>
              </svg>
              <svg v-else>
                <use href="../assets/sprite.svg#icon-check"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
