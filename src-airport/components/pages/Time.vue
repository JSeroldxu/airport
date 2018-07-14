<template>
  <div>
    <br>
    <br>
    <p>
    </p>
    <el-row>
      <el-col :span="3" :offset="2">
        <p class="air">
          {{year}}
        </p>
      </el-col>
      <el-col :span="3">
        <p class="air">
          {{day}}
        </p>
      </el-col>
      <el-col :span="3">
        <p class="air">
          {{week}}
        </p>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  let moment = require('moment');
  export default {
    data() {
      return {
        year:'',
        day:'',
        week:''
      }
    },
    mounted() {
      this.LopTime();
    },
    props: [''],
    computed: {},
    methods: {
      getTime(){
        let week = [
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六'
        ]
        this.year = moment().format(" YYYY-MM-DD")
        this.day = moment().format("HH:mm:ss")
        this.week = week[moment().format("d")]
        // console.log(this.week)
      },
      LopTime(){
        setInterval(this.getTime,1000)
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

</style>
