<script setup>
import Home from "./components/Home.vue";
import MyNavBar from "./components/MyNavBar.vue";
</script>
<template>
  <div>
    <MyNavBar />
    <RouterView />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  width: 100vw;
  height: 100vh;
  background-color: #eaeaea;
}
</style>
