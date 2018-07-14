<template>
<div class="SceneryPerson">
  <Air/>
  <h2>人文景观推荐</h2>
  <table>
    <tr>
      <th>景区名称</th>
      <th>车程</th>
      <th>时间</th>
      <th>实时人流量监测</th>
    </tr>
    <tr>
      <td style="border-right: none">秦始皇兵马俑博物馆</td>
      <td>64.5km</td>
      <td>51min </td>
      <td><span>2.37</span>万</td>
    </tr>
    <tr >
      <td>秦始皇兵马俑博物馆</td>
      <td>64.5km</td>
      <td>51min </td>
      <td><span>2.37</span>万</td>
    </tr>
    <tr >
      <td>秦始皇兵马俑博物馆</td>
      <td>64.5km</td>
      <td>51min </td>
      <td><span>1.56</span>万</td>
    </tr>
    <tr >
      <td>秦始皇兵马俑博物馆</td>
      <td>64.5km</td>
      <td>51min </td>
      <td><span>2.37</span>万</td>
    </tr>
    <tr >
      <td>秦始皇兵马俑博物馆</td>
      <td>64.5km</td>
      <td>51min </td>
      <td><span>2.37</span>万</td>
    </tr>
    <tr >
      <td>秦始皇兵马俑博物馆</td>
      <td>64.5km</td>
      <td>51min </td>
      <td><span>2.37</span>万</td>
    </tr>
  </table>
</div>
</template>

<script>
  import Air from './Air'
    export default {
        name: "SceneryPerson",
        components:{ Air}
    }
</script>

<style lang="less" scoped>
  *{
    padding: 0;
    margin: 0;
  }
.SceneryPerson{
  width:100%;
  height: 70%;
  border-bottom: 1px solid #42d3eb;
  overflow: hidden;
  position: relative;
  h2{
    height: 90px;
    display: block;
    text-align: center;
    font-weight: 100;
    font-size: 68px;
    color: #fff;
  }
  table{
    width: 100%;
    font-size: 40px;
    font-weight: 100;
    text-align: center;
    color: #fff;
    margin-top: 10px;
    border: none;
    border-collapse:collapse;//去掉竖线
    tr:nth-of-type(1){
      height: 80px;
    }
    tr th{
      line-height: 30px;
      font-weight: 100;
      color: #4dc2fe;
    }
    tr td{
      line-height: 80px;
      border:none;
      span{
        color: #4cd61e;
      }
    }
    tr:nth-of-type(2),tr:nth-of-type(4),tr:nth-of-type(6){
      background: #084f94;

    }
    tr th:nth-of-type(1){
      text-align: left;
      padding-left: 40px;
    }
    tr td:nth-of-type(1){
      text-align: left;
      padding-left: 40px;
    }
    tr th:nth-of-type(1){
      width: 28.5%;
    }
    tr th:nth-of-type(2){
      width: 10.5%;
    }
    tr th:nth-of-type(3){
      width: 10.5%;
    }
    tr th:nth-of-type(4){
      width: 30.5%;
    }
  }
}
</style>



























