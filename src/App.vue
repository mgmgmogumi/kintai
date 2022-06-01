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
  background-repeat: repeat;
  background-color: rgba(222,222,222,0.8);
  background-blend-mode: lighten;
}
</style>
