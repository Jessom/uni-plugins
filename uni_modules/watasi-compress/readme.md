# watasi-compress(图片压缩，支持APP、H5、小程序)
APP、小程序使用[uni.compressImage](https://uniapp.dcloud.net.cn/api/media/image.html#compressimage)做压缩，H5使用[compressorjs](https://github.com/fengyuanchen/compressorjs)

## 使用说明
| 属性		| 是否必填	|  值类型	| 默认值	| 说明			|
| --------- | -------- 	| ----- 	| -- 	| ------------ |
| paths|	是 		| Array	|-	| 需要压缩的图片路径	|
| options|	否 		| Object	|-	| 压缩参数	|

#### options
| 属性			|  值类型	|  说明							 	|
|---- 			| ----- 	| ----								|
|quality|Number |压缩质量，默认0.8|
|width|Number |压缩后图片的宽度，如果未指定，将使用原始图像的自然宽度|
|height|Number |压缩后图片的高度，如果未指定，将使用原始图像的自然高度|
|success|Function |压缩成功的回调，也可以使用`.then`接收|
|fail|Function |压缩失败的回调，也可以使用`.catch`接收|

### 示例
```javascript
<template>
	<view class="content">
		<block v-for="(item, index) in images" :key="index">
			<view class="cell">
				<view class="item">
					<image :src="item.before" mode="aspectFit" class="img"></image>
					<text class="text">压缩前：{{ item.size1 }}</text>
				</view>
				<view class="item">
					<image :src="item.after" mode="aspectFit" class="img"></image>
					<text class="text">压缩后：{{ item.size2 }}</text>
				</view>
			</view>
		</block>
		
		<button @click="onChoiseImage">选择图片</button>
	</view>
</template>

<script>
	import WCompress from '@/uni_modules/watasi-compress/js_sdk/index.js'
	export default {
		data() {
			return {
				images: []
			}
		},
		onLoad() {

		},
		methods: {
			onChoiseImage() {
				uni.chooseImage({
					count: 9,
					success: (res) => {
						this.images = res.tempFilePaths.map((c, i) => {
							return {
								before: c,
								size1: parseInt(res.tempFiles[i].size / 1024) + 'KB',
								after: '',
								size2: 0,
							}
						})
						WCompress(res.tempFilePaths, {
							success: (imgs) => {
								imgs.map((c, i) => {
									// #ifndef H5
									uni.getFileInfo({
										filePath: c,
										success: (e) => {
											this.images[i].after = c
											this.images[i].size2 = parseInt(e.size / 1024) + 'KB'
										}
									})
									// #endif
									
									// #ifdef H5
									this.images[i].after = URL.createObjectURL(c)
									this.images[i].size2 = parseInt(c.size / 1024) + 'KB'
									// #endif
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.cell {
		display: flex;
		box-sizing: border-box;
		padding: 20rpx;
		.item {
			width: 50%;
			margin: 20rpx;
		}
		image, uni-image {
			max-width: 100%;
		}
	}
</style>
```

### 其他说明
- 当传入`width`或`height`时，**如果图片原始尺寸小于传入的尺寸，可能导致压缩的图片变大**
