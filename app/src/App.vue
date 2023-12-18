<script setup>
import Card from './components/Card.vue'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

window.addEventListener('load', () => {
  var swiper = new Swiper('.mySwiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
})
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__row">
          <div class="header__logo logo">
            <div class="logo__image">
              <img src="./assets/logo.svg" alt="" />
            </div>
            <div class="logo__right">
              <div class="logo__name">REACT SNEAKERS</div>
              <div class="logo__desc">Магазин лучших кроссовок</div>
            </div>
          </div>
          <div class="header__menu menu">
            <nav class="menu__nav">
              <ul class="menu__ist">
                <li class="menu__item">
                  <a href="" class="menu__link">
                    <svg class="menu__icon menu__icon--cart">
                      <use href="./assets/sprite.svg#icon-cart"></use>
                    </svg>
                    1205 руб.
                  </a>
                  <svg class="icon icon-cart"><use href="./assets/sprite.svg#icon-cart"></use></svg>
                </li>
                <li class="menu__item">
                  <a href="" class="menu__link">
                    <svg class="menu__icon"><use href="./assets/sprite.svg#icon-fav"></use></svg>
                    Закладки</a
                  >
                </li>
                <li class="menu__item">
                  <a href="" class="menu__link">
                    <svg class="menu__icon"><use href="./assets/sprite.svg#icon-prof"></use></svg>
                    Профиль</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <!-- Swiper -->
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="banner-item">
                <div class="banner-item__content">
                  <div class="banner-item__logo">
                    <img src="./assets/addidas.png" alt="" />
                  </div>
                  <div class="banner-item__name"><span>Stan Smith,</span>Forever!</div>
                  <button class="banner-iten__button">Купить</button>
                </div>
                <!-- banner-item__content -->
                <img src="./assets/banner.jpg" alt="" class="banner-item__image" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="banner-item">
                <div class="banner-item__content">
                  <div class="banner-item__logo">
                    <img src="./assets/addidas.png" alt="" />
                  </div>
                  <div class="banner-item__name"><span>Stan Smith,</span>Forever!</div>
                  <button class="banner-iten__button">Купить</button>
                </div>
                <!-- banner-item__content -->
                <img src="./assets/banner.jpg" alt="" class="banner-item__image" />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <section class="section">
          <div class="section__head">
            <div class="section__left">
              <h2 class="section__title">Все кроссовки</h2>
            </div>
          </div>
          <div class="catalog">
            <div class="catalog__row">
              <div class="catalog__item-container">
                <div class="catalog-item">
                  <div class="catalog-item__image">
                    <a class="catalog-item__name" href="#">
                      Мужские Кроссовки Nike Blazer Mid Suede
                    </a>
                    <div class="catalog-item__botton">
                      <div class="catalog-item__price">
                        <div class="catalog-item__label">Цена:</div>
                        <div class="catalog-item__value">12 999 руб.</div>
                      </div>
                    </div>
                    <button class="catalog-item_fav">
                      <svg>
                        <use href="./assets/sprite.svg#zmdi_favorite-outline"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style>
body {
  background: #e7f6ff;
  padding-top: 85px;
}
.wraper {
  max-width: 1080px;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  min-height: 90vx;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  width: 96%;
}

.header {
  padding: 44px 0;
  border-bottom: 1px solid #eaeaea;
}
.header__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
}
.logo__image {
  flex-shrink: 0;
  margin-right: 16px;
}
.logo__name {
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.logo__desc {
  color: #9d9d9d;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.menu_icon {
  height: 18px;
  width: 18px;
}
.menu_icon:not(.menu_icon--cart) {
  fill: #9b9b9b;
}
.menu_icon--cart {
  stroke: #9b9b9b;
}
.menu__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu__link {
  display: flex;
  align-items: center;
  color: #5c5c5c;
  font-size: 14px;
  line-height: normal;
  text-decoration: none;
}
.menu__item + .menu__item {
  margin-left: 23px;
}
.menu__icon {
  flex-shrink: 0;
  margin-right: 8px;
}
/* ctart slider */
.banner-item {
  position: relative;
  padding: 16px 0 52px 20px;
  border-radius: 20px;
  background: #f4efe9;
}
.banner-item__image {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}
.banner-item__content {
  position: relative;
  z-index: 20px;
  padding-left: 41px;
  max-width: 250px;
}
.banner-item__logo {
  margin-left: -41px;
  margin-bottom: 32px;
}
.banner-item__name {
  color: #000;
  font-size: 38px;
  font-weight: 700;
}
.banner-item__name span {
  color: #a5d364;
}
.banner-item__button {
  display: inline-flex;
  padding: 15px 55px;
  outline: none;
  border: none;
  border-radius: 110px;
  background: #a5d364;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}
.main {
  padding-top: 45px;
}
</style>
