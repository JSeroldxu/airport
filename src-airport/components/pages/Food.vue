<template>
  <!--美食推荐-->
  <div id="food">
      <h2>周边美食排行榜-- <span>西湖景区</span> </h2>
    <!--<div class="swiper-wrapper">-->
    <!--<div class="swiper-slide"><Food/></div>-->
    <!--<div class="swiper-slide"><Food/></div>-->
    <!--<div class="swiper-slide"><Food/></div>-->
    <!--</div>-->
      <table border="1" width="100%" rules="none">
        <tr>
          <th style="width: 11.25%;line-height: 30px; ">排名</th>
          <th style="width: 27.25%;line-height: 30px;" >热销美食</th>
          <th style="width: 17.18%;line-height: 30px;">店铺名称</th>
          <th style="width: 20.18%;line-height: 30px;">人均价格</th>
          <th style="width: 28.18%;line-height: 30px;">预约电话</th>
        </tr>
        <!--<tr v-for="(item,index) in trData" :key="index">-->
          <!--<td><span>{{index+1}}</span></td>-->
          <!--<td>{{item.foodName}}</td>-->
          <!--<td>{{item.foodStorename}}</td>-->
          <!--<td>￥{{item.foodAveprice}} </td>-->
          <!--<td><b>{{item.foodPrephone}}</b></td>-->
        <!--</tr>-->
        <tr >
          <td><span>1</span></td>
          <td>黑糖鹿丸</td>
          <td>鹿角巷</td>
          <td>￥23 </td>
          <td><b>0571-8888888</b></td>
        </tr>
        <tr >
          <td><span>2</span></td>
          <td>黑糖鹿丸</td>
          <td>鹿角巷</td>
          <td>￥23 </td>
          <td><b>0571-8888888</b></td>
        </tr>
        <tr >
          <td><span>3</span></td>
          <td>黑糖鹿丸</td>
          <td>鹿角巷</td>
          <td>￥23 </td>
          <td><b>0571-8888888</b></td>
        </tr>
        <tr >
          <td><span>4</span></td>
          <td>黑糖鹿丸</td>
          <td>鹿角巷</td>
          <td>￥23 </td>
          <td><b>0571-8888888</b></td>
        </tr>
        <tr >
          <td><span>5</span></td>
          <td>黑糖鹿丸</td>
          <td>鹿角巷</td>
          <td>￥23 </td>
          <td><b>0571-8888888</b></td>
        </tr>
        <tr >
          <td><span>6</span></td>
          <td>黑糖鹿丸</td>
          <td>鹿角巷</td>
          <td>￥23 </td>
          <td><b>0571-8888888</b></td>
        </tr>
      </table>

  </div>
</template>

<script>
  import {queryfoodranking} from "../../api"
  export default {
    // data(){
    //   return{
    //     trData:[]
    //   }
    // },
    // created(){
    //   this.getqueryfoodranking();
    // },
    // methods: {
    //   //axios交互
    //   getqueryfoodranking(){
    //     queryfoodranking().then((data)=> {
    //       this.trData = data;  //本来是data.data.data
    //       console.log(this.trData)
    //     })
    //   }
    // }
  }
</script>

<style scoped>
  #food{
    height: 90%;
    width: 100%;
    /*border:1px solid white*/
    margin-top: 20px;
  }
  h2 {
    height: 11.7%;
    color:#4dc2fe;
    font-size: 23px;
    text-align: center;
    font-weight: 100;
    width: 83.55%;
    border:1px solid #13bad2;
    margin: 0 auto;
  }
  table{
    height: 82.3%;
    color: white;
    /*margin-top: 20px;*/
    border: none;
    border-collapse:collapse;
    text-align: center;
  }
  th{
    font-weight: 100;
    text-align: center;
    padding-left: 20px;
    color:#4dc2fe;
    border: none;
  }
  tr{
    height: 13.7%;
    border-right:0;
  }
  tr:nth-of-type(2),tr:nth-of-type(4),tr:nth-of-type(6){
    background: #084f94;

  }
  td{

    border-bottom:1px solid #13bad2;
    border-top:1px solid #13bad2;
    border-right: 0;
    text-align: center;
    padding-left: 20px;
  }
  tr td span{
    height: 20px;
    width: 22px;
    font-size: 20px;
    line-height: 20px;
    background: #d37fca;
    border-radius: 50%;
    display: block;
    text-align: center;
    margin-left: 10px;
  }
  tr td b{
    height: 20px;
    width: 90%;
    background: #eb6100;
    font-weight: 100;
    display: block;
  }
</style>
