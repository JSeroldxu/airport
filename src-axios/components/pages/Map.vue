<template>
  <div class="map" style="height: 100%;">
    <!--实时游客量-->
    <div class="today">
      <h2>杭州市区实时游客量</h2>
      <p>昨日游客量：<span>{{ trData.countNumber }}</span></p>
    </div>
    <div class="now">
      <ul>
        <li class="Million">0</li>
        <li class="Million">0</li>
        <span class="douhao">,</span>
        <li class="thousand">2</li>
        <li class="thousand">6</li>
        <li class="thousand">6</li>
        <span class="douhao">,</span>
        <li class="digit">7</li>
        <li class="digit">8</li>
        <li class="digit">0</li>
        <span>人</span>
      </ul>
    </div>
    <!--下面地图-->
    <div class="mapMain">
      <div id="yijiyou">
        <p>扫一扫<br>一机游<br>▪<br>杭州</p>
        <div class="yijiyouImg">
          <img src="../../assets/yjy.png" alt="">
        </div>
      </div>
      <div class="circle">
        <p><span><span><span></span></span></span>景区</p>
      </div>
    </div>
  </div>
</template>

<script>
    import {queryTouristCount} from '../../api'
    export default {
        name: "Map",
      data(){
          return{
            trData:[]
          }
      },
      created(){
        this.getqueryTouristCount();
      },
      methods: {
        //axios交互
        getqueryTouristCount(){
          queryTouristCount().then((data)=> {
            this.trData = data;  //本来是data.data.data
            console.log(this.trData)
          })
        }
      }
    }

</script>

<style scoped>
  .circle{
    width: 242px;
    height: 95px;
    border:1px solid white

  }
  .circle p span{
    width: 10px;
    height: 10px;
    background: #00ff00;
    border-radius: 50%;
    
  }
  #yijiyou{
    width: 143px;
    height: 297px;
    border: 1px solid #13bad2;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
  #yijiyou p{
    font-size: 21px;
    color: #4dc2fe;
    /*line-height: 36px;*/
    margin-top: 5px;
  }

  .map{
    width: 100%;
    height: 100%;
    border-rignt:1px solid #13bad2
  }
  .today{
    float:left;
    margin-top: 1.6%;
    overflow: hidden;

  }
  .today h2{
    color:#ffffb8;
    font-weight: 100;
    font-size: 29px;
    margin-left:35px;
    height: 29px;
    line-height: 29px;
    padding-left: 20px;
    text-align: left;
    border-left: 3px solid #13bad2;
  }
  .today p {
    font-size:21px;
    margin-left: 4.3%;
    display: inline-block;
    width: 300px;
    margin-top: 17px;

  }
  .now ul{
    list-style: none;
    line-height: 90px;
    width: 100%;

  }
  .now ul span{
    color: white;
    float: left;
    margin-right: 1%;
    font-size: 28px;
    margin-top: 20px;
  }
  .now ul span.douhao{
    font-size: 58px;
    font-family: "Adobe Arabic";

    /*line-height: 100px;*/
  }
  .now ul li {
    float:left;
    font-size: 34px;
    text-align: center;
    color:#002356;
    font-weight: bold;
    height: 77px;
    width: 49px;
    background-image: url("../../assets/s.png");
    margin-top: 13px;
  }
.Million:nth-of-type(1){
    margin-left: 12.3%;

}
  .Million,.thousand,.digit{
    margin-right: 1.2%;
  }
  /*.thousand:nth-of-type(4),.digit:nth-of-type(7){*/
    /*margin-left: 5%;*/
  /*}*/
  .mapMain{
    width: 100%;
    height:85.12%;
    border:1px solid white;
    float: left;
    position: relative;
    overflow: hidden;
  }
  /*地图样式*/
  /*.amap-page-container {*/
    /*height: 100%;*/
  /*}*/
</style>
