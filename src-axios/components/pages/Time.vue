<template>
  <div>
    <br>
    <br>
    <p>
    </p>
    <el-row>
      <el-col :span="3" :offset="2">
        <p class="air">
          {{day}}
        </p>
      </el-col>
      <el-col :span="3">
        <p class="air">
         {{time}}
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
  export default {
    data() {
      return {
        time: "",
        day: "",
        week: ""
      }
    },
    mounted() {
      this.updateTime();
    },
    props: [''],
    computed: {},
    methods: {
      updateTime()
      {
        let week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        let timerID = setInterval(this.updateTime, 1000);
        let cd = new Date();

          // 补零
        function zeroPadding(num, digit) {
          let zero = '';
          for (let i = 0; i < digit; i++) {
            zero += '0';
          }
          return (zero + num).slice(-digit);
        }
        this.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
        this.day = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2);
        this.week = week[cd.getDay()]

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
