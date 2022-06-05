<template>
  <div>
    <h1 class="title">ようこそ勤怠管理へ！！！</h1>

    <div class="container">
      <router-link to="/" class="in_button">出社</router-link>
    </div>
    <div class="container">
        <router-link to="/"  :class="index===1 ? visibleClass : hiddenClass" @mouseover="indexAction(index)" class="out_button">退社</router-link>
        <router-link to="/"  :class="index===2 ? visibleClass : hiddenClass" @mouseover="indexAction(index)" class="out_button">退社</router-link>
        <router-link to="/"  :class="index===3 ? visibleClass : hiddenClass" @mouseover="indexAction(index)" class="out_button">退社</router-link>
    </div>

    <hr>
    <a href="https://twitter.com/mgmgmogumii" target="_blank" rel="noopener">@mgmgmogumi</a><br>
    <a href="https://github.com/mgmgmogumi/kintai" target="_blank" rel="noopener">GitHub</a><br>
    
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

.title {
  font-size: 32px;
  color: red;
  /* font-family: "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "verdana", sans-serif; */
  font-family: "HGS創英角ﾎﾟｯﾌﾟ体", "HGS創英角ｺﾞｼｯｸUB", "HGS創英ﾌﾟﾚｾﾞﾝｽEB","游ゴシック", "メイリオ", "ＭＳ ゴシック", "ＭＳ Ｐゴシック", "Hiragino Maru Gothic Pro W4", "Hiragino Maru Gothic ProN W4";
  font-style: italic;
  text-shadow:1px 1px 0 #FFF, -1px -1px 0 #FFF,
              -1px 1px 0 #FFF, 1px -1px 0 #FFF,
              0px 1px 0 #FFF,  0-1px 0 #FFF,
              -1px 0 0 #FFF, 1px 0 0 #FFF;
  padding: 50px;
}
.container {
  display: flex;
  justify-content: space-around;
}

.in_button {
  padding: 5px 0px;
  flex-basis: 90px;
  background-color: #bda28d;
  font-size: 20px;
  font-weight: 900;
  border-radius: 5px;
  border: 1px solid;
  text-align: right;
  margin: 50px 0;
}

.out_button {
  padding: 5px 10px;
  flex-basis: 80px;
  background-color: #967661;
  font-size: 20px;
  font-weight: 900;
  border-radius: 5px;
  border: 1px solid;
  margin: 50px 0;
}

.v_visible {
  visibility: visible;
}

.v_hidden {
  visibility: hidden;
}
</style>
