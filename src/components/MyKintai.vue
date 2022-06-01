<template>
  <div>
    <h1>ようこそ勤怠管理へ！！！</h1>

    <p>
      <router-link to="/">出社</router-link>
    </p>
    <div class="container">
        <div :class="index===1 ? visibleClass : hiddenClass" @mouseover="indexAction(index)" class="button">退社</div>
        <div :class="index===2 ? visibleClass : hiddenClass" @mouseover="indexAction(index)" class="button">退社</div>
        <div :class="index===3 ? visibleClass : hiddenClass" @mouseover="indexAction(index)" class="button">退社</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyKintai',
  data(){
    return {
      index: 2,
      back: false,
      visibleClass: 'v_visible',
      hiddenClass: 'v_hidden'
    }
  },
  methods: {
    indexAction(index){
      if (index === 1) {
        this.index++;
        this.back = false;
      } else if (index === 2) {
        if (this.back) {
          this.index--;
        } else {
          this.index++;
        }
      } else if (index === 3) {
        this.index--;
        this.back = true;
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  margin: 1em;
  justify-content: space-around;
}

.button {
  padding: 1em;
  width: 110px;
  background-color: #39464e;
  color: white;
  text-align: center;
}

.v_visible {
  visibility: visible;
}

.v_hidden {
  visibility: hidden;
}
</style>
