# seo内容设置
```javascript
import {seoContent} from '../../components/mixin.js'

mixins:[seoContent],

this.setSeoContent({
    title:`${res.data.data.city_name}医院推荐_${res.data.data.city_name}预约挂号_健康160`,
    keywords:`${res.data.data.city_name}医院推荐,${res.data.data.city_name}医院挂号`,
    description:`健康160是${res.data.data.city_name}领先的互联网医疗健康服务平台,提供医院推荐、网上挂号、专家门诊预约服务,可预约号源超过200万.`
})
```