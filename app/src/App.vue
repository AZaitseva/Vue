<script setup>
import Card from './components/Card.vue'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ProductList from './components/ProductList.vue'
import FlyBasket from './components/FlyBasket.vue'

window.addEventListener('load', () => {
  var swiper = new Swiper('.mySwiper', {
    // Подключение нужных модулей
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
    <FlyBasket />
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
              <ul class="menu__list">
                <li class="menu__item">
                  <a href="" class="menu__link">
                    <svg class="menu__icon menu__icon--cart">
                      <use href="./assets/sprite.svg#icon-cart"></use>
                    </svg>
                    1205 руб.
                  </a>
                </li>
                <li class="menu__item">
                  <a href="" class="menu__link">
                    <svg class="menu__icon"><use href="./assets/sprite.svg#icon-fav"></use></svg>
                    Закладки
                  </a>
                </li>
                <li class="menu__item">
                  <a href="" class="menu__link">
                    <svg class="menu__icon"><use href="./assets/sprite.svg#icon-lk"></use></svg>
                    Профиль
                  </a>
                </li>
              </ul>
            </nav>
            <div class="element"></div>
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
                  <div class="banner-item__name">
                    <span style="color: #8bb43c"> Stan Smith</span>, Forever!
                  </div>
                  <button class="banner-item__button">Купить</button>
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
                  <div class="banner-item__name">
                    <span style="color: #8bb43c"> Stan Smith</span>, Forever!
                  </div>
                  <button class="banner-item__button">Купить</button>
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
                  <div class="banner-item__name">
                    <span style="color: #8bb43c"> Stan Smith</span>, Forever!
                  </div>
                  <button class="banner-item__button">Купить</button>
                </div>
                <!-- banner-item__content -->
                <img src="./assets/banner.jpg" alt="" class="banner-item__image" />
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <!-- end mySwiper -->
        <section class="section">
          <div class="section__head">
            <div class="section__left">
              <h2 class="section__title">Все кроссовки</h2>
            </div>
          </div>
          <ProductList />
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
.wrapper {
  max-width: 1080px;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  min-height: 90vh;
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
  margin-left: -16px;
}
.logo__name {
  color: #000;
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

.menu__icon {
  height: 18px;
  width: 18px;
}
.menu__icon:not(.menu__icon--cart) {
  fill: #9b9b9b;
}
.menu__icon--cart {
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
  margin-left: 32px;
}
.menu__icon {
  flex-shrink: 0;
  margin-right: 8px;
}
/* start slider */
.banner-item {
  position: relative;
  padding: 16px 0 52px 20px;
  box-sizing: border-box;
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
  z-index: 20;
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
  color: #8bb43c;
}
.banner-item__button {
  padding: 15px 55px;
  margin-top: 25px;
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

.section__head {
  margin-bottom: 36px;
}
.catalog__row {
  display: flex;
  flex-wrap: wrap;
  margin: -20px;
}
.catalog__item-container {
  padding: 20px;
  width: 25%;
  box-sizing: border-box;
}
.catalog__item {
  padding: 22px 30px 32px;

  height: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 40px;
  border: 1px solid #f3f3f3;

  box-sizing: border-box;
  transition: 0.3s;
}
.catalog__item-container:hover .catalog-item {
  box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.05);
  transform: translateY(-10px);
}
.catalog-item__image {
  position: relative;
  height: 112px;
  max-width: 100%;
  max-height: 112%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.catalog-item__fav {
  position: absolute;
  top: 9px;
  left: -3px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  padding: 0;

  background-color: transparent;
  border-radius: 7px;
  border: 1px solid #f8f8f8;

  background: #fff;
}
.catalog-item__fav svg {
  height: 16px;
  width: 16px;
  fill: #eaeaea;
}
.catalog-item__name {
  display: inline-flex;
  margin: 15px;

  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
}
.catalog-item__bottom {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
.catalog-item__label {
  color: #bdbdbd;

  font-size: 11px;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
}

.catalog-item__value {
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
}
.catalog-item__cart {
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
  margin-left: 10px;

  width: 32px;
  height: 32px;
  padding: 0;

  background-color: transparent;
  border-radius: 7px;
  border: 1px solid black;

  background: #fff;
  cursor: pointer;
}
.catalog-item__cart svg {
  height: 16px;
  width: 16px;
  fill: black;
}
.catalog-item__image img {
  max-width: 100%;
  max-height: 112px;
}
</style>
