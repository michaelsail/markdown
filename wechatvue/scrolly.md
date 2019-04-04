# 数据下拉加载

**1、scrolly下拉加载**
**用到公共组件scrollHeight**

```javascript
<scrolly :list="dotorFocusList" :scrollHeight="scrollHeight"  @scrollToEnd="loadmore" :pullup="true" >
    <div>
        <doc :list="dotorFocusList" :allLoaded="allLoaded"></doc>
        <loading :allLoaded="allLoaded" :list="dotorFocusList"></loading>
    </div>
</scrolly>
```
```javascript
import scrolly from '../../../components/common/scrolly.vue'
import Doc from '../components/doctor.vue'
import { scrollHeight } from '../../../components/mixin.js'
import loading from '../../../components/common/loading.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    mixins:[scrollHeight],
    data() {
        return {
            allLoaded:false,
            page:1,
        }
    },
    components: {
        scrolly, Doc, loading
    },
    computed: {
        ...mapGetters('account',[
            'dotorFocusList'
        ])
    },
    mounted() {
        this.initScrollHeight(55);
        this.getData({page: 1});
    },
    methods:{
        ...mapActions('account',[
            'getDoctorMarkList'
        ]),
        getData(params) {
            this.getDoctorMarkList(params).then((data) => {
                if(data.length < 10) {
                    this.allLoaded = true;
                }
            })
        },
        loadmore() {
            if(!this.allLoaded){
                this.page++;
                this.getData({ page: this.page})
            }
        }
    }
}
```


**2、loadmore触底加载**
```javascript
循环列表数据
<loading :allLoaded="allLoaded" :list="area_goods"></loading>
```
```javascript
import { loadmore } from '../../components/mixin.js'
import loading from '../../components/common/loading.vue'
mixins:[loadmore],
data(){
    return{
        flag:true,
        allLoaded:false,
        loaded:false,
        page: 1,
        area_goods:[]
    }
},
components: { loading },
methods:{
    afterLoad(data){
        this.loaded = true;
        this.flag = true;
        if(data.length < 5) {
            this.allLoaded = true;
            this.flag = false;
        }
    },
    loadmore(){
        if(this.flag) {
            this.flag = false;
            this.page++;
            this.getDocArticleList({page:this.page}).then((data)=>{//调数据接口
                this.afterLoad(data);
            })
        }
    },
}
```
