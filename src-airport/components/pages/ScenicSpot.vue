<template>
  <!--热门景区-->
  <div class="Case">
    <h2>热门景区排行榜</h2>
    <table  width="100%">
      <tr>
        <th style="width: 11.25%;line-height: 30px; ">排名</th>
        <th style="width: 27.25%;line-height: 30px;" >景区名称</th>
        <th style="width: 17.18%;line-height: 30px;">距离机场</th>
        <th style="width: 20.18%;line-height: 30px;">门票信息</th>
        <th style="width: 28.18%;line-height: 30px;">热点</th>
      </tr>
      <!--<tr v-for="(item,index) in trData" :key="index">-->
        <!--<td><span>{{index+1}}</span></td>-->
        <!--<td>{{ item.sceneryName }}</td>-->
        <!--<td>{{ item.sceneryDistance }}</td>-->
        <!--<td>{{ item.sceneryPrice }} </td>-->
        <!--<td style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden">{{ item.sceneryHot }}</td>-->
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
  import {queryHotscreen} from "../../api"
    export default {
      data(){
        return{
          trData:[],
        }
      },
      // created(){
      //   this.getqueryHotscreen();
      // },
      // methods: {
      //   //axios交互
      //   getqueryHotscreen(){
      //     queryHotscreen().then((data)=> {
      //       this.trData = data;  //本来是data.data.data
      //       console.log(this.trData)
      //     })
      //   }
      // }
    }
</script>

<style scoped>

  .Case{
    height: 31%;
    width: 99%;
    margin-top: 20px;
    /*border:1px solid white*/
  }
  h2 {
    height: 11.7%;
    color:#4dc2fe;
    font-size: 23px;
    text-align: center;
    font-weight: 100;
    width: 83.55%;
    border:1px solid #13bad2;
    margin: 20px auto;
  }
  table{
    height: 82.3%;
    color: white;
    margin-top: -20px;
    border: none;
    border-collapse:collapse
  }
  th{
    font-weight: 100;
    text-align: center;
    padding-left: 20px;
    color:#4dc2fe;
    border: none;
  }
  tr{
    height: 12.7%;
    border-right:0
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
}
</style>
