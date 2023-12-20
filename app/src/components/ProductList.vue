<script>
export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchProduct()
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await this.$axios.get('https://fakestoreapi.com/products')
        this.products = response.data
      } catch (error) {}
    }
  }
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
            <button class="catalog-item__cart">
              <svg>
                <use href="../assets/sprite.svg#icon-plus"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.catalog-item__image img {
  max-width: 100%;
  max-width: 112px;
}
</style>
