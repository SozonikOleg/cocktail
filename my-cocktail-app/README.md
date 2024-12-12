# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# cocktail

cocktail

Задача:
Реализовать приложение с выводом данных полученных по API.
Пример схематичного интерфейса приложения изображен в app_example.png

Исходные данные:

- Всю необходимую информацию запрашиваем по GET-запросу: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<cocktail_code>
- Доступные cocktail_code: margarita, mojito, a1, kir

Функциональные требования:

- Использовать менеджер состояния для сохранения данных и исключения дублирующих запросов
- Список кодов (cocktail_code) использовать для названия пунктов меню и формирования url-страниц
- Каждый пункт меню ведет на страницу со своим описанием
- Активный пункт меню должен быть выделен
- По умолчанию первый пункт меню, является главной страницей и использует его же урл
- Переход на url-адрес "/", должен отправлять пользователя на url-первого пункта меню
- При переходе на несуществующую страницу, показать 404 ошибку в произвольной форме
- Резиновая верстка интерфейса. Максимальная ширина 1024px, минимальная 360px
- lazy-loading для загрузки изображений

Требования по стеку на выбор:

- typescript
- vue 2/3 + vuex/pinia, react + redux/mobx
- webpack, vite
- eslint
- html 5, css 3
- scss/sass, stylus, less, postCSS
- Адаптивная верстка (chrome, safari)
- jest (опционально)
