<template>
  <div class="not-found">
    <h1>404 - Страница не найдена</h1>
    <p>Извините, но запрашиваемая страница отсутствует.</p>

    <div class="broken-cocktail">
      <!-- PNG изображения коктейля в банке -->
      <img
        src="/cocktail-in-jar.png"
        alt="Broken Cocktail in Jar"
        class="cocktail-jar"
      />
      <div class="crack-overlay">
        <!-- Имитация анимации разбивания -->
        <div class="crack"></div>
        <div class="crack"></div>
        <div class="crack"></div>
      </div>
    </div>

    <router-link to="/" class="back-link">Вернуться на главную</router-link>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

// Автоматический редирект через 3 секунды
const router = useRouter();
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.not-found h1 {
  font-size: 2rem;
  color: #ff6666;
  margin-bottom: 20px;
}

.not-found p {
  font-size: 1.2rem;
  margin: 20px 0;
}

.back-link {
  margin-top: 20px;
  font-size: 1.1rem;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

/* Стили для коктейля в банке */
.broken-cocktail {
  position: relative;
  display: inline-block;
  margin-top: 50px;
  animation: shake 1.5s ease-in-out infinite; /* Анимация для "качания" коктейля */
}

.cocktail-jar {
  width: 200px;
  height: auto;
  animation: shake 1.5s ease-in-out infinite; /* Анимация для качания банка */
}

.crack-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.crack {
  position: absolute;
  width: 80px;
  height: 5px;
  background: rgba(255, 0, 0, 0.6);
  border-radius: 2px;
  animation: crackAnimation 0.6s ease-in-out forwards;
}

.crack:nth-child(1) {
  top: 30%;
  left: 25%;
  transform: rotate(15deg);
}

.crack:nth-child(2) {
  top: 45%;
  left: 55%;
  transform: rotate(-10deg);
}

.crack:nth-child(3) {
  top: 60%;
  left: 40%;
  transform: rotate(25deg);
}

/* Анимация разбивания стакана */
@keyframes crackAnimation {
  0% {
    transform: scaleX(0);
    opacity: 1;
  }
  50% {
    transform: scaleX(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scaleX(0);
    opacity: 0;
  }
}

/* Анимация качания банка */
@keyframes shake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}
</style>
