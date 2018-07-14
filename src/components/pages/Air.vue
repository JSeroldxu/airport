<template>
  <div class="air">
    <p>陕西西安<span>&nbsp{{highTemp}}/{{lowTemp}}℃ </span></p>
  </div>
</template>

<script>
  import {getWeather} from '../../api';
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

<style lang="less" scoped>
.air{
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100px;
  p{
    color:#ffcc2a;
    font-size: 40px;
    text-align: left;
    line-height: 100px;
  }
}
</style>
