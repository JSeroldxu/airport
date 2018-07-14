<template>
  <div class="hello">
    <el-container>
      <!--头部-->
      <el-row class="top">
        <el-col :span="12" class="title">
          <Time></Time>
        </el-col>
        <h2>萧山机场旅游服务信息大屏</h2>
        <el-col :span="12" class="title">
         <Air></Air>
        </el-col>
      </el-row>

      <!--下方内容-->
      <el-header class="mainBottom" style="height: 85%; padding: 0" >
        <div class="left" style="height: 100%; border-right:1px solid #13bad2">
          <Map/>
        </div>
        <div class="right">
          <ScenicSpot/>
          <Food/>
          <Hotel/>
        </div>
      </el-header>
    </el-container>
  </div>
</template>
<script>
  import ScenicSpot from './pages/ScenicSpot'
  import Map from './pages/Map'
  import Food from './pages/Food'
  import Air from './pages/Air'
  import Time from './pages/Time'
  import Hotel from './pages/Hotel'

  export default {
  name: 'HelloWorld',
    components: {Time,Air,Map,ScenicSpot,Food,Hotel},
   data () {
    return {
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  bottom: 0;
}
.hello{
  position: relative;
  width: 100%;
  height: 100%;
  margin:0px;
  padding:0px;
  padding-top: 0;
  background-repeat: no-repeat;
  background-image:url('./../assets/bg1.png');
  background-size: 100% 100%;
}
.el-container{
  height: 100%;
}
.el-row{
  position: relative;
}
.el-row h2{
  color: #fff;
  position: fixed;
  left: 50%;
  margin-left: -192px;
  top: 30px;
  font-size: 32px;
}
.mainBottom {
  color: #FFF;
  text-align: center;
  /*border: solid 1px red;*/
  height:100%;
  width:100%

}
.title{
  color: white;
  height: 100%;
}
.top{
  height: 13%;
  border-bottom: 1px solid #13bad2;
}
  .left{
    width: 68%;
    height: 100%;
    float: left;
  }
  .right{
    width: 31.9%;
    height: 100%;
    /*border:1px solid white;*/
    float: left;

  }
</style>
