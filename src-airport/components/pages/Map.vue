<template>
  <div class="map" style="height: 100%;">
    <!--实时游客量-->
    <div class="today">
      <h2>杭州市区实时游客量</h2>
      <p>昨日游客量：<span>213123</span></p>
    </div>
    <div class="now">
      <ul>
        <li class="Million">0</li>
        <li class="Million">0</li>
        <li class="Million">8</li>
        <span class="douhao">,</span>
        <li class="thousand">2</li>
        <li class="thousand">6</li>
        <li class="thousand">6</li>
        <span>人</span>
      </ul>
      <div class="daogang">
        <div class="nowWeek">
          <p>本周到港：</p>
          <span>159482人</span>
        </div>
        <div class="nowMonth">
          <p>本月到港：</p>
          <span>603807人</span>
        </div>
      </div>
    </div>
    <!--下面地图-->
    <div class="mapMain">
      <div class="title">
        杭州景区实时人流量
      </div>
      <div class="animatiaonCircle" v-show="aniCircle">
        <div class="one">
          <div class="anicle"></div>
          <div class="text1">
            <h2>杭州半山国家公园</h2>
            <p>距您<span>41.2</span>km &nbsp 车程 <span>60</span> min</p>
            <p>实时游客 <span>6565</span></p>
          </div>
        </div>
      </div>
      <div class="animatiaonCircle2" v-show="aniCircle2">
        <div class="one">
          <div class="anicle"></div>
          <div class="text1">
            <h2>杭州半山国家公园</h2>
            <p>距您<span>41.2</span>km &nbsp 车程 <span>60</span> min</p>
            <p>实时游客 <span>6565</span></p>
          </div>
        </div>
      </div>
      <div class="animatiaonCircle3" v-show="aniCircle">
        <div class="one">
          <div class="anicle"></div>
          <div class="text1">
            <h2>杭州半山国家公园</h2>
            <p>距您<span>41.2</span>km &nbsp 车程 <span>60</span> min</p>
            <p>实时游客 <span>6565</span></p>
          </div>
        </div>
      </div>
      <div class="animatiaonCircle4" v-show="aniCircle2">
        <div class="one">
          <div class="anicle"></div>
          <div class="text1">
            <h2>杭州半山国家公园</h2>
            <p>距您<span>41.2</span>km &nbsp 车程 <span>60</span> min</p>
            <p>实时游客 <span>6565</span></p>
          </div>
        </div>
      </div>
      <div class="animatiaonCircle5" v-show="aniCircle">
        <div class="one">
          <div class="anicle"></div>
          <div class="text1">
            <h2>杭州半山国家公园</h2>
            <p>距您<span>41.2</span>km &nbsp 车程 <span>60</span> min</p>
            <p>实时游客 <span>6565</span></p>
          </div>
        </div>
      </div>
      <div class="animatiaonCircle6" v-show="aniCircle2">
        <div class="one">
          <div class="anicle"></div>
          <div class="text1">
            <h2>杭州半山国家公园</h2>
            <p>距您<span>41.2</span>km &nbsp 车程 <span>60</span> min</p>
            <p>实时游客 <span>6565</span></p>
          </div>
        </div>
      </div>


        <div class="airport">
          <div class="air"><img src="../../assets/aiport.png" alt=""></div>
          <div class="text">
            <p>您现在所在的位置</p>
            <p>杭州萧山国际机场</p>
          </div>
        </div>


      <div id="yijiyou">
        <p>扫一扫<br>一机游<br>▪<br>杭州</p>
        <div class="yijiyouImg">
          <img src="../../assets/yjy.png" alt="">
        </div>
      </div>
      <div class="circle">
        <p>人流量饱和度:</p>
        <span class="red">饱和度达到90%以上的景区</span>
        <span class="yellow">饱和度在30%--90%的景区</span>
        <span class="green">饱和度在30%以下的景区</span>
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
            aniCircle:false,
            aniCircle2:true
          }
        },
      mounted(){
          this.a();
          this.b()
      },
      methods:{
          a(){
            setInterval(()=>{
              this.aniCircle = !this.aniCircle
            },3000)
          },
        b(){
          setInterval(()=>{
            this.aniCircle2 = !this.aniCircle2
          },3000)
        }
      }
      // data(){
      //     return{
      //       trData:[
      //         One,
      //         Two,
      //         Three,
      //         Four,
      //         Five,
      //         Six,
      //         Seven,
      //         Eight
      //       ],
      //
      //     }
      // },
      // created(){
      //   this.getqueryTouristCount();
      // },
      // methods: {
      //   //axios交互
      //   getqueryTouristCount(){
      //     queryTouristCount().then((data)=> {
      //       this.trData = data;  //本来是data.data.data
      //       console.log(this.trData)
      //     })
      //   }
      // }
    }

</script>

<style scoped>
  .text1{
    width: 200px;
    height: 100px;
    background: rgba(0,0,0,0.6);
  }
  .text1 h2{
    color: yellow;
  }
  .text1 p{
    text-align: left;
  }
  .animatiaonCircle{
    width: 200px;
    height: 100px;
    /*background: aqua;*/
    position: absolute;
    top: 62%;
    left: 43%;
  }
  .animatiaonCircle2{
    width: 200px;
    height: 100px;
    /*background: aqua;*/
    position: absolute;
    top: 32%;
    left: 73%;
  }
  .animatiaonCircle3{
    width: 200px;
    height: 100px;
    /*background: aqua;*/
    position: absolute;
    top: 82%;
    left: 73%;
  }
  .animatiaonCircle3{
    width: 200px;
    height: 100px;
    /*background: aqua;*/
    position: absolute;
    top: 12%;
    left: 73%;
  }
  .animatiaonCircle4{
    width: 200px;
    height: 100px;
    /*background: aqua;*/
    position: absolute;
    top: 40%;
    left: 33%;
  }
  .animatiaonCircle5{
    width: 200px;
    height: 100px;
    /*background: aqua;*/
    position: absolute;
    top: 22%;
    left: 53%;
  }
  .animatiaonCircle6{
    width: 200px;
    height: 100px;
    /*background: aqua;*/
    position: absolute;
    top: 12%;
    left: 43%;
  }


  .airport{
    width: 200px;
    position: absolute;
    top: 52%;
    left: 65%;
  }
  .airport .air{
    display: inline-block;
    float: left;
    padding-top: 10px;
  }
  .airport .text{
    background: rgba(0,0,0,0.6);
    color: white;
    float: left;
    font-size: 17px;
    line-height: 25px;
    padding: 8px;
  }
  .animatiaonCircle .one{
    position: relative;
  }
  .animatiaonCircle2 .one{
    position: relative;
  }
  .animatiaonCircle3 .one{
    position: relative;
  }
  .animatiaonCircle4 .one{
    position: relative;
  }
  .animatiaonCircle5 .one{
    position: relative;
  }
  .animatiaonCircle6 .one{
    position: relative;
  }
  .animatiaonCircle .one .anicle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #009a3d;
    opacity: 0.6;
    position: absolute;
    top:-20px;
    left:-20px;
  }
  .animatiaonCircle .one .anicle:before{
    content: '';
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    margin-top: -15px;
    background: #00ca19;
    border-radius:50%;
    z-index: 2;
  }
  .animatiaonCircle .one .anicle:after{
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
    background: #00ff00;
    border-radius:50%;
    z-index: 3;
  }
  .animatiaonCircle2 .one .anicle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #55FF29;
    opacity: 0.6;
    position: absolute;
    top:-20px;
    left:-20px;
  }
  .animatiaonCircle2 .one .anicle:before{
    content: '';
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    margin-top: -15px;
    background: #74D341;
    border-radius:50%;
    z-index: 2;
  }
  .animatiaonCircle2 .one .anicle:after{
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
    background: #459c19;
    border-radius:50%;
    z-index: 3;
  }
  .animatiaonCircle3 .one .anicle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffbf98;
    opacity: 0.6;
    position: absolute;
    top:-20px;
    left:-20px;

  }
  .animatiaonCircle .one .anicle,.animatiaonCircle2 .one .anicle,.animatiaonCircle3 .one .anicle,.animatiaonCircle4 .one .anicle,.animatiaonCircle5 .one .anicle,.animatiaonCircle6 .one .anicle{
    -webkit-animation: warn 1s ease-out;
    -moz-animation: warn 1s ease-out;
    animation: warn 1s ease-out;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
  @keyframes warn {
    0% {
      transform: scale(0);
      opacity: 0.0;
    }
    25% {
      transform: scale(0.5);
      opacity: 0.4;
    }
    50% {
      transform: scale(1);
      opacity: 0.8;
    }
    75% {
      transform: scale(1.5);
      opacity: 0.4;
    }
    100% {
      transform: scale(2);
      opacity: 0.0;
    }
  }
  .animatiaonCircle3 .one .anicle:before{
    content: '';
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    margin-top: -15px;
    background: #ff8a59;
    border-radius:50%;
    z-index: 2;
  }
  .animatiaonCircle3 .one .anicle:after{
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
    background: #e22a18;
    border-radius:50%;
    z-index: 3;
  }
  .animatiaonCircle4 .one .anicle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #55FF29;
    opacity: 0.6;
    position: absolute;
    top:-20px;
    left:-20px;
  }
  .animatiaonCircle4 .one .anicle:before{
    content: '';
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    margin-top: -15px;
    background: #74D341;
    border-radius:50%;
    z-index: 2;
  }
  .animatiaonCircle4 .one .anicle:after{
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
    background: #459c19;
    border-radius:50%;
    z-index: 3;
  }
  .animatiaonCircle5 .one .anicle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #cbb727;
    opacity: 0.6;
    position: absolute;
    top:-20px;
    left:-20px;
  }
  .animatiaonCircle5 .one .anicle:before{
    content: '';
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    margin-top: -15px;
    background: #ece041;
    border-radius:50%;
    z-index: 2;
  }
  .animatiaonCircle5 .one .anicle:after{
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
    background: #fff731;
    border-radius:50%;
    z-index: 3;
  }
  .animatiaonCircle6 .one .anicle{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffbf98;
    opacity: 0.6;
    position: absolute;
    top:-20px;
    left:-20px;
  }
  .animatiaonCircle6 .one .anicle:before{
    content: '';
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    margin-top: -15px;
    background: #ff8a59;
    border-radius:50%;
    z-index: 2;
  }
  .animatiaonCircle6 .one .anicle:after{
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
    background: #e22a18;
    border-radius:50%;
    z-index: 3;
  }

  .circle{
    width: 266px;
    height: 120px;
    /*border:1px solid white;*/
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: left;
    padding-left: 40px;
  }
  .circle p{
    font-size: 22px;
    padding-left: 10px;
  }
  .circle span{
    width: 74.83%;
    height: 21.5%;
    display: block;
    margin-bottom: 5px;
    padding-left: 10px;
  }
  .circle .red{
    background:#f81915;
  }
  .circle .yellow{
    background:#ffc200 ;
  }
  .circle .green{
    background: #4cd61d;
  }

  #yijiyou{
    width: 143px;
    height: 297px;
    border: 1px solid #13bad2;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background: rgba(255,255,255,0.2);

  }
  #yijiyou p{
    font-size: 21px;
    color: #fff;
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
    margin-left: 5.3%;

}
  .Million,.thousand,.digit{
    margin-right: 1.2%;
  }
  .daogang>div p{
    line-height: 30px;
    font-size: 22px;
    text-align: center;
    margin-top: 15px;
  }
  .daogang>div span{
    font-size: 25px;
    color: #ffffb8;
    line-height: 30px;
  }
  .daogang>div{
    width: 12.8%;
    height: 87px;
    background: #002045;
    float: left;
    margin-top: 10px;
    margin-left: 20px;

  }
  .daogang .nowWeek{
    margin-right: 20px;
  }
  /*.thousand:nth-of-type(4),.digit:nth-of-type(7){*/
    /*margin-left: 5%;*/
  /*}*/
  .mapMain{
    width: 97%;
    height:85.12%;
    /*border:1px solid white;*/
    float: left;
    position: relative;
    overflow: hidden;
    margin-left: 3%;
    background:url(../../assets/mapbg.png) no-repeat;
    background-size: cover;
  }
  .mapMain .title{
    position: absolute;
    top: 10px;
    left: 10px;
    color: #ffffb8;
    font-size: 29px;
    line-height: 40px;
  }
  /*地图样式*/
  /*.amap-page-container {*/
    /*height: 100%;*/
  /*}*/
</style>
