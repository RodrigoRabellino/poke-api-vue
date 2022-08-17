<script setup>
import { onMounted } from "vue";
import Home from "./components/Home.vue";
import MyNavBar from "./components/MyNavBar.vue";
import { usePokeStore } from "@/store/store";

const store = usePokeStore();

onMounted(() => {
  store.fetchPokemonList();
});
</script>
<template>
  <div class="my-cont">
    <MyNavBar />
    <div class="view-container">
      <RouterView />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
}
.view-container {
  width: 80%;
}

.my-cont {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #eaeaea;
}
</style>
