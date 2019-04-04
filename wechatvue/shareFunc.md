# 微信和app分享
router路由中
```javascript
{ path: 'activity/newpackage.html', component: newPackage,
    props(route) {
        return {
            cid: route.query.cid,
        };
    },
},
```

```javascript
import {channelMixin,shareFunc} from '../../components/mixin';
import { mapGetters } from 'vuex'

props: {
    cid: {
        type: String,
        default: '',
    },
},
mixins: [channelMixin,shareFunc],
mounted:() {
    Object.assign(this.shareOptions, {
        title:'这里是标题',
        desc: '这里是副标题',
        link: '分享后点击跳转的地址',
        imgUrl: '分享图片必须是全路径并且是https',
        success: () => {
        },
    });
    if (this.isWeixin) {
        this.wxShare();
    } else if (this.isPatient || this.isDoctor) {
        this.getAppShareToken();
    }
},
```
