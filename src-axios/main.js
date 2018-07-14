// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

  // VueResource  from 'vue-resource'
// Vue.use(VueResource)
 import  axios from 'axios'
// import AMap from 'vue-amap'
 Vue.prototype.$http=axios;
Vue.use(axios)
Vue.use(ElementUI);
// Vue.use(AMap)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
AMap.initAMapApiLoader({
  key: 'c1c8b6bc67f7e4d7ce7c9cfacea3f234',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})
