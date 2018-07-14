<template>
  <div style="margin-left: 30px">
    <br>
    <br>
    <p>
    </p>
    <el-row>
      <el-col :span="5" :offset="9">
        <p class="air">
          {{highTemp}}/{{lowTemp}}℃ <span>{{weather}}</span>
        </p>
      </el-col>
      <el-col :span="5">
        <p class="air">
          空气质量实时指数
        </p>
      </el-col>
      <el-col :span="2">
        <p class="air-quality">
          {{rank}}优
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {getWeather} from "../../api";
    export default {
        name: "Air",
      created(){
        this.myGetWeather();
      },
      data() {
        return {
          highTemp:"",
          lowTemp: "",
          weather: "",
          rank: ""
        }
      },
      methods:{
        myGetWeather() {
          getWeather().then((data)=> {
//              由于获取的data和我们需要的不太一样,下列代码是对
//              对data的处理,console.log(data)即可
            let weatherData=data.forecast[0];
            // console.log(weatherData); ok
            this.highTemp = weatherData.high.slice(3,5);
            this.lowTemp = weatherData.low.slice(3,5);
            this.weather = weatherData.type;
            this.rank = parseInt(weatherData.high.slice(3,5)) + 15;
          })
        }
      }


    }
</script>

<style scoped>

 .grid-content{
   /*border: solid 1px red;*/
   font-size: 20px;
   color: white;
 }
 .air{
   /*border: solid 1px red;*/
   line-height: 80px;
   font-size: 20px;
 }
.air-quality{
  width: 120px;

  text-align: center;
  line-height: 50px;
  font-size: 22px;
  color: #00cf3f;
  margin-top: 7.04%;
  border-radius: 5px;
  border:1px solid #00cf3f;
  font-weight: bold;

}
</style>
