export default {
  data() {
    return {
      products: [],
      cart: []
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
    },
    //Добавление товара в корзину
    addToCart(product) {
      this.cart.push(product)
      alert('Вы добавили в корзину товар')
      if (!this.isInCart(product)) {
        this.cart.push(product)
      } else {
        const index = this.cart.findIndex((item) => item.id === product.id)
        if (index !== -1) {
          this.cart.slice(index, 1)
        }
      }
    },
    isInCart(product) {
      return this.cart.some(function (item) {
        return item.id === product.id
      })
    }
  }
}
