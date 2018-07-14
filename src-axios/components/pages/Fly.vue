<template>
    <div class="fly">
      <Header></Header>
      <div class="main clearfix">
        <div class="fly-left">
            <div class="tour clearfix">
                <div class="tour-left">
                  <h3 class="tour-number">杭州市区实时游客量</h3>
                  <div class="tour-yesterday">
                    <span>昨日游客总量</span>
                    <span>5201314</span>
                  </div>
                </div>
                <div class="tour-right">
                    <div class="right-number">
                      <span>{{one}}</span>
                      <span>{{two}}</span>
                      <i>，</i>
                      <span>{{three}}</span>
                      <span>{{four}}</span>
                      <span>{{five}}</span>
                      <i>，</i>
                      <span>{{six}}</span>
                      <span>{{senven}}</span>
                      <span>{{eight}}</span>
                      <i>人</i>
                    </div>
                </div>
            </div>
            <div class="tour-map">
              <Map></Map>
            </div>
        </div>
        <div class="fly-right">
            <div class="hot">
              <Hot></Hot>
            </div>
            <div class="hot">
              <Hot2></Hot2>
            </div>
            <div class="hot">
              <Hot3></Hot3>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
    import Header from "./test/Header.vue";
    import Hot from "./test/Hot.vue";
    import Hot2 from "./test/Hot2.vue";
    import Hot3 from "./test/Hot3.vue";
    import Map from "./test/Map.vue";

//    获取实时人流量
    import {touristNumber} from "../api";
    export default {
        data() {
          return {
              personData: [],
              tempData:[],
              number:"",
              one:0,
              two:0,
              three:0,
              four:0,
              five:0,
              six:0,
              senven:0,
              eight:0,

          }
        },
        created() {
          this.getNumber();
        },
      methods: {
          async getNumber() {
            this.personData = await touristNumber();
            this.solveData();
          },
           solveData() {
              for(let i=0; i<this.personData.length;i++) {
                this.tempData.push(this.personData[i].countNumber);
              }
//              console.log(this.tempData);
            setInterval(this.changeNumber, 3000);

          },
        roundNumber() {
            return Math.round(Math.random()*14);
        },
        changeNumber() {
            this.number = this.tempData[this.roundNumber()];
            this.three=this.number[2];
            this.four=this.number[3];
            this.five=this.number[4];
            this.six=this.number[5];
            this.senven=this.number[6];
            this.eight=this.number[7];
        }

      },
        components: {
          Header,
          Hot,
          Hot2,
          Hot3,
          Map
        }
    }
</script>

<style lang="less" scoped>
  .fly {
    height: 100%;
    background: #003069;
  }
  .main {
    height: 88%;
    background: #003069;

  }
  .fly-left,.fly-right {
      float: left;
      height: 100%;
      background-size: 100% 100%;
  }
  .fly-right {
    width: 31.9%;
    background: url("../../static/fly-right.jpg") no-repeat;
  }
  .fly-left {
    width: 68%;
    box-sizing: border-box;
    padding-left: 2%;
    border-right: 1px solid #16A2BF;
    background: url("../../static/fly-left.jpg") no-repeat;
  }

  .tour {
    height: 11.57%;
  }
  .tour-left,.tour-right {
    float: left;
    height: 100%;
  }
  .tour-left {
    width: 34.3%;
    /*background: pink;*/
  }
  .tour-right {
    /*background: pink;*/
    width: 65.7%;
    position: relative;
  }
  .tour-number {
    margin-top: 25px;
    margin-bottom: 8px;
    padding-left: 3%;
    font-size: 30px;
    color: #ffffb8;
    border-left: 4px solid #13bad2;
  }

  .tour-yesterday {
    color: #fff;
    font-size: 20px;
    span {
      padding-left: 20px;
    }
  }
  .right-number {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translate(0,-50%);
    span {
      text-align: center;
      display: inline-block;
      width: 47px;
      height: 79px;
      color: #002356;
      font-size: 40px;
      line-height: 79px;
      margin-right: 10px;
      background: url("../../static/person.jpg") no-repeat;
    }
    i {
      font-size: 30px;
      color: #fff;
      vertical-align: bottom;
    }
  }

  .tour-map {
    height: 88.43%;
  }

  .hot {
    height: 33.33%;
  }


</style>
