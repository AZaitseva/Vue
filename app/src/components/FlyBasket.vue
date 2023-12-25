<script></script>

<template>
  <div class="flybasket">
    <div class="flybasket__shadow"></div>
    <div class="flybasket__wrapper">
      <div class="flybasket__header"></div>
      <div class="flybasket__body"></div>
      <div class="flybasket__footer">
        <ul class="flybasket__list">
          <li class="flybasket__option">
            <div class="flybasket__option-label">Итого:</div>
            <div class="flybasket__option-value">21 498 руб.</div>
          </li>
          <li class="flybasket__option">
            <div class="flybasket__option-label">Налог 5%:</div>
            <div class="flybasket__option-value">1074 руб.</div>
          </li>
        </ul>
        <button class="flybasket__button flybasket__button--full-width">
          Оформить заказ
          <svg>
            <use href="../assets/script.svg#icon-arrowright"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flybasket {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 500;
}

.flybasket__shadow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  background: #000;
}
.flybasket__wrapper {
  position: relative;
  z-index: 50;
  width: 385px;
  background: #fff;
  box-shadow: -10px 4px 24px 0px rgba(0, 0, 0, 0.1);
  height: 100%;
  margin-left: auto;
  padding: 32px 0 32px 32px;
}
.flybasket_header,
.flybasket__footer,
.flybasket__body {
  padding-right: 32px;
}

.flybasket__header {
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
}
.flybasket__footer {
  margin-top: auto;
}
.flybasket__list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.flybasket__option {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.flybasket__option:before {
  content: '';
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 3px;
  border: 1px dashed #dfdfdf;
}
.flybasket__option-label,
.flybasket__option-value {
  position: relative;
  background-color: #fff;
}
</style>
