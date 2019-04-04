# 获取定位信息
**通用的是下面调用方法**
只有预约医院列表导入的是getLatLngcity，其他代码是一致的

```javascript
import {  getLatLng } from '../../components/mixin.js'
mixins:[getLatLng],
data(){
    return{
        lat:'',
        lng:'',
    }
}
async mounted() {
    let positions = await this.getLatAndLng();
    this.lat = positions.currentLat;
    this.lng = positions.currentLng;
    this.getInfo();//页面需要传经纬度接口
},
```

**另外一种是页面进入需要先获取定位城市和经纬度信息**

1、选在路径中添加<b color="#f00">meta:{ needGetLatAndLng:true}</b>
{ path: 'complex.html', component: searchComplex,name:'searchcomplex',meta:{ needGetLatAndLng:true}}

2、plugins中的vueRouter.js做了拦截，如果路由配置中需要传经纬度的话，会先调用经纬度获取信息，然后再接着往下执行