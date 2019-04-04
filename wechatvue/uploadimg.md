# 上传图片 --uploadimg
**html**
```javascript
<div class="mt10 pt10 p15 bg_white">
    <div class="lh24 typo_black typo_middle">添加图片</div>
    <div class="pb15 lh18 typo_gray typo_smaller">请上传清晰报告图片便于医生查看解读</div>
    <ul class="mt10 refund_imgs fs0 layout">
        <template v-if="uploadImage.length > 0">
            <li class="fleft fullwidth relative inblo mb15" v-for="(item,index) in uploadImage">
                <img :src="IMAGESDOMAIN+item" alt="" class="fullheight">
                <i class="del"  @click="delImage(index)">&times;</i>
            </li>
        </template>
        <li class="fullwidth relative inblo mb15"  v-if="uploadImage.length < max">
            <label for="upload">
            </label>
            <img src="../../static/report/upload.png"  alt="" >
            <input type="file" name="upload[]" id="upload" ref="uploadimage" accept="image/*" multiple @change="fileChange($event,'comment')" hidden>  
        </li>
    </ul>
</div>
```
**script**
```javascript
import { uploadImage } from '../../components/mixin.js'
mixins:[uploadImage],
data: function () {
    return {
        max:6,//上传图片的上限
    }
},
```

**css**
```css
.refund_imgs {
    li { width:2.66667rem; height:2.66667rem; margin-right: 0.58667rem;
        label { position:absolute; width:100%; height:100%; z-index:10; top:0; left:0; }
        &:nth-child(3n) { margin-right: 0; }
        img { border-radius:0.10667rem; }
        .del { position:absolute; display:inline-block; width:0.58667rem; height:0.58667rem; text-align: center; line-height:0.58667rem; background-color: #F55D3A; color:#fff; top:-0.29333rem; right:-0.29333rem; border-radius:50%; font-size:0.69333rem; font-family: arial; }
    }
}
```
