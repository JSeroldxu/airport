<template>
  <div class="floor">
    <FloorNow/>
    <FloorMap/>
    <Time/>
  </div>
</template>

<script>
  import FloorNow from './FloorNow'
  import FloorMap from './FloorMap'
  import Time from './Time'
    export default {
        name: "Floor",
        components:{FloorNow,FloorMap,Time}
    }
</script>

<style lang="less" scoped>
.floor{
  width: 21.9%;
  height: 100%;
  background: #5a42eb;
  float: left;
}
</style>
