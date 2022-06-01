<template>
  <div>
    <h1 class="title">勤怠管理</h1>
    
    <p>
      <router-link to="/kintai" class="button">入口</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MyHome'
}
</script>

<style scoped>
.title {
  font-size: 32px;
  color: yellow;
  font-family: "HGS創英角ｺﾞｼｯｸUB", "HGS創英ﾌﾟﾚｾﾞﾝｽEB", "HGS創英角ﾎﾟｯﾌﾟ体", "游ゴシック", "メイリオ", "ＭＳ ゴシック", "ＭＳ Ｐゴシック", "Hiragino Maru Gothic Pro W4", "Hiragino Maru Gothic ProN W4";
  text-shadow:1px 1px 0 #000, -1px -1px 0 #000,
              -1px 1px 0 #000, 1px -1px 0 #000,
              0px 1px 0 #000,  0-1px 0 #000,
              -1px 0 0 #000, 1px 0 0 #000;
  padding: 50px;
}

.button {
  padding: 5px 1em;
  width: 110px;
  background-color: #b39077;
  color: black;
  font-size: 20px;
  font-weight: 900;
  border-radius: 5px;
  border: 1px solid;
  text-decoration: none;
}
</style>
