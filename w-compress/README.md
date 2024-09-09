# w-compress

# 停止维护
# 停止维护
# 停止维护

# 推荐使用[uni.compressImage](https://uniapp.dcloud.net.cn/api/media/image.html#compressimage)，H5端使用[compressorjs](https://github.com/fengyuanchen/compressorjs)

支持H5，微信小程序的图片压缩工具(其他平台未测试)<br />
[图片压缩](https://ext.dcloud.net.cn/plugin?id=1718#detail)

## 使用方法
```
<template>
	<view class="content">
		<button type="default" @click="onSinngle">单张压缩</button>
		<image class="image" :src="single" mode="aspectFill"></image>
		
		<button type="default" @click="onMulti">多张压缩</button>
		<block v-for="(item, idx) in multi" :key="idx">
			<image class="image" :src="item" mode="aspectFill"></image>
		</block>
		
		<w-compress ref='wCompress' />
	</view>
</template>

<script>
import WCompress from '@/components/w-compress/w-compress.vue'
export default {
	components: {
		WCompress
	},
	data() {
		return {
			multi: [],
			single: ''
		}
	},
	methods: {
		onSinngle() {
			uni.chooseImage({
				count: 1,
				success: res => {
					uni.showLoading({ title: '图片压缩中...', mask: true })
					this.$refs.wCompress.start(res.tempFilePaths[0], {
            pixels: 4000000,  // 最大分辨率，默认二百万
            quality: 0.9,     // 压缩质量，默认0.8
            type: 'png',      // 图片类型，默认jpg
            base64: true,     // 是否返回base64，默认false，非H5有效
          })
						.then(res => {
							console.log(res)
							this.single = res
							uni.hideLoading()
						})
						.catch(e => {
							console.log(e)
							uni.hideLoading()
						})
				}
			})
		},
		
		onMulti() {
			uni.chooseImage({
				count: 9,
				success: res => {
					uni.showLoading({ title: '图片压缩中...', mask: true })
					this.$refs.wCompress.start(res.tempFilePaths)
						.then(res => {
							console.log(res)
							this.multi = res
							uni.hideLoading()
						})
						.catch(e => {
							console.log(e)
							uni.hideLoading()
						})
				}
			})
		}
	}
}
</script>

<style>
.image {
	width: 750rpx; height: 420rpx;
}
</style>
```

start方法接收两个参数，第一个参数是需要压缩的图片路径，支持`String`和`Array`类型，第二个参数是压缩配置，参考`compress参数`

## compress参数
|参数|类型|默认值|描述|
|:--:|:--:|:--:|:--:|
|pixels|Number|2000000|最大分辨率|
|quality|Number|0.8|压缩质量，取值0~1|
|type|String|jpg|获取的图片类型|
|base64|Boolean|false|是否返回base64类型，`非H5有效`|

## history
### 1.0.1（2020-06-02）
1. 修复APP压缩生成图片空白问题

### 1.0.0（2020-04-27）
