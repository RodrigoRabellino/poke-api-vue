<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container">
    <div class="toolbar">
      <RouterLink class="link" to="/">Home</RouterLink>
      <div class="items">
        <RouterLink class="link" to="/pokedex">Pokedex</RouterLink>
        <RouterLink class="link" to="/game">Who's That</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 64px;
  width: 100vw;
  background-color: rgb(83, 13, 148);
  padding: 1rem;
  justify-content: center;
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.2);
}
.toolbar {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.items {
  width: 200px;
  justify-content: space-between;
  display: flex;
}
.link {
  color: white;
  transition: 0.4s;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
}
.link:hover {
  transition: 0.4s;
  color: aquamarine;
}
</style>
