# 支付（拉app原生支付）方法---payMixin
**用到公共组件channelMixin**

```javascript
import { channelMixin,  payMixin } from '../../components/mixin'

mixins: [channelMixin,  payMixin],


methods:{
    appPaySuccessCall(){//在app中购买成功后的跳转页面
        this.$router.push({path: '../member/afterBuy.html', query:{cid:this.cid}})
    },
    cnowPay() {
        if(this.submitlocation == true){
            return false;
        }
        this.submitlocation == true;
        this.$http({
            method:'get',
            url: '接口地址'}).then((res)=>{
                if(res.data.state ==1){
                    var order_id = res.data.order_id;//接口返回订单id
                    if (this.isOnlyApp || (typeof (mJavaScriptObject) == 'object' &&  mJavaScriptObject.funGetVersion() >= '5.8.5')) {
                        if (this.isAndroid) {
                            this.androidPay('19', order_id);
                        } else if (this.isIos) {
                            this.iosPay('19', order_id);
                        }
                    }else{//非app内跳h5支付页面传订单id
                        window.location.href='/member/payCombo.html?product_id=19&order_id='+order_id;
                    }
                }else{
                    this.$vux.toast.text(res.data.msg,'middle');
                    this.submitlocation == false;
                }
            }
        )
    },
},
computed : {
    ...mapGetters(['isOnlyApp']),
},
```

