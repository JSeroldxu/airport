<template>
  <div class="floorNow">
    <h2>您当前所在位置</h2>
    <span>2F</span>
  </div>
</template>

<script>
    export default {
        name: "FloorNow"
    }
</script>

<style lang="less" scoped>
  .floorNow{
    width: 100%;
    height: 30.9%;
    overflow: hidden;
    h2{
      display: block;
      width: 100%;
      font-size: 50px;
      text-align: center;
      font-weight: 100;
      color: #fff;
      margin-top: 20px;
    }
    span{
      font-size: 150px;
      color: #fff;
      text-align: center;
      display: block;
      width: 100%;
      font-weight: bold;
    }
  }
</style>
