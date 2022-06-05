<template>
   <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  background-image: url("../public/background.png");
  background-size: 15%;
  background-color: rgba(200,235,255,0.8);
  background-blend-mode: lighten;
}
</style>
