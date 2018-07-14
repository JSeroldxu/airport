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
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><Food/></div>
              <div class="swiper-slide"><Food/></div>
              <div class="swiper-slide"><Food/></div>
            </div>
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><Hotel/></div>
              <div class="swiper-slide"><Hotel/></div>
              <div class="swiper-slide"><Hotel/></div>
            </div>
          </div>
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
  import Swiper from '../../static/swiper-4.3.3.min'
  export default {
  name: 'HelloWorld',
    components: {Air,Map,ScenicSpot,Food,Hotel,Time},
   data () {
      return {

      }
    },
    mounted(){
      this.mySwiper()
    },
    methods:{
      mySwiper(){
        console.log(Swiper)
        let mySwiper=new Swiper ('.swiper-container', {
          direction: 'vertical',    //翻转方向
          loop: true,
          autoplay:{      //自动播放，里面有很多参数可以根据需求进行调试
            delay:5000,
          },
          effect : 'coverflow',   //翻转方式
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      }
    }

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
  margin:0;
  padding:0;
  background:url('./../assets/bg1.png') no-repeat;
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
.swiper-container {
  width: 99%;
  height: 33%;
  /*border: 1px solid black;*/

}
</style>
