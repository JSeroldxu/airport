<template>
  <div class="time">
    <p>{{week}}</p>
    <p>{{day}}</p>
    <p>{{year}}</p>
  </div>
</template>

<script>
  let moment = require('moment')
    export default {
        name: "Time",
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

<style lang="less" scoped>
.time{
  overflow: hidden;
  p{
    font-size: 45px;
    font-weight: 100;
    text-align: center;
    line-height: 60px;
    color: #fff;
  }
  p:first-of-type{
    margin-top: 20px;
  }
}
</style>
