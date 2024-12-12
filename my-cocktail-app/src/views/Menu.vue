<template>
  <div class="menu-wrapper">
    <!-- Кнопка для открытия/закрытия меню -->
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <nav :class="{ open: isMenuOpen }">
      <ul>
        <li v-for="code in cocktailCodes" :key="code">
          <router-link
            :to="`/${code}`"
            :class="{ active: $route.path === `/${code}` }"
          >
            {{ code }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cocktailCodes = ["margarita", "mojito", "a1", "kir"];
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Основная обертка для меню и контента */
.menu-wrapper {
  display: flex;
  position: relative;
}

/* Стили для меню */
nav {
  width: 250px;
  background-color: #42b983;
  color: white;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  padding: 20px;
}

nav.open {
  transform: translateX(0);
}

/* Кнопка для открытия/закрытия меню */
.menu-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #42b983;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  z-index: 20;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.menu-toggle:hover {
  background-color: #36a771;
}

/* Стили для ссылок */
nav ul {
  padding: 0;
  list-style: none;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
}

nav li {
  margin-bottom: 15px;
}

nav a {
  text-decoration: none;
  color: white;
  font-size: 1.2em;
}

nav a.active {
  font-weight: bold;
  color: #faffd1;
}

/* Стили для контента */
.content {
  flex-grow: 1;
  margin-left: 250px;
  padding: 20px;
  background-color: #f4f4f4;
  transition: margin-left 0.3s ease-in-out;
}

nav:not(.open) ~ .content {
  margin-left: 0;
}
</style>
