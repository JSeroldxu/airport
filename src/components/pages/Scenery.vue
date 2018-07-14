<template>
<div class="scenery">
  <div class="border">
      <SceneryPerson/>
      <SceneryCarousel/>
  </div>
</div>
</template>

<script>
  import SceneryPerson from './SceneryPerson'
  import SceneryCarousel from './SceneryCarousel'
    export default {
        name: "Scenery",
        components:{
         SceneryPerson,SceneryCarousel
        }
    }
</script>

<style lang="less" scoped>
  .scenery{
    width: 78%;
    height: 100%;
    float: left;
    .border{
      width: 97.43%;
      height: 94.5%;
      border: 2px solid #42d3eb;
      margin: 20px auto;
    }
  }
</style>
