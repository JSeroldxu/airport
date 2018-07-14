import axios from "axios";
 axios.defaults.baseURL="http://192.168.0.117:8080"

axios.interceptors.response.use((res)=>{
  // 在这里统一拦截结果 把结果处理成res.data.data
  return res.data.data;
});

//获取天气预报  /weather_mini?city=北京市；
export let getWeather = ()=> {
  return axios.get("http://wthrcdn.etouch.cn/weather_mini?city=西安");
};

// //热门景区排行旁
// export let queryHotscreen = ()=> {
//   return axios.get("/Airport/queryHotscreen")
// };
//
// //美食排行
// export let queryfoodranking = ()=> {
//   return axios.get("/Airport/queryfoodranking")
// };
//
// //酒店排行
// export let queryhothotel = ()=> {
//   return axios.get("/Airport/queryhothotel")
// };
//
// //实时游客量
// export let queryTouristCount = ()=> {
//   return axios.get("/Airport/queryTouristCount")
// };


