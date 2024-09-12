# watasi-watermark-camera 水印相机

## 插件地址：[watasi-watermark-camera 水印相机](https://ext.dcloud.net.cn/plugin?id=20162)

### 仅支持nvue页面，仅支持APP
### 仅支持nvue页面，仅支持APP
### 仅支持nvue页面，仅支持APP

### 不支持vue3

## 使用说明
| 属性		| 是否必填	|  值类型	| 默认值	| 说明			|
| --------- | -------- 	| ----- 	| -- 	| ------------ |
| watermark|	否 		| Array	|[]	| 水印，详情见下		|
| debug|	否 		| Boolean	|false	| 是否调试模式，调试模式下onPostMessage不会触发，即接收到不到change事件，但可以输出html内的打印		|
| @ready  |否 |Function |- |初始化完成，返回livePusher的宽高等信息 	|
| @snapshot |否 |Function |- | 开始拍照 	|
| @change |否 |Function |- | 拍摄完成，返回当前拍摄的base64 	|

#### watermark
| 属性			|  值类型	|  说明							 	|
|---- 			| ----- 	| ----								|
|type|String |取值`text(文本)`、`image(图片)`、`fillRect(矩形)`|
|x|Number |x轴坐标|
|y|Number |y轴坐标|
|color|String |type为`text`、`fillRect`时有效|
|text|String |type为`text`时有效，文本内容|
|size|String |type为`text`时有效，文本字号|
|isBold|Boolean |type为`text`时有效，是否加粗|
|w|String |type为`fillRect`、`image`时有效，宽|
|h|String |type为`fillRect`、`image`时有效，高|
|url|String |type为`image`时有效，图片路径|

### 示例(nvue)
```javascript
<template>
	<view class="watermark-page">
		<watasi-watermark-camera :watermark="watermark" @ready="ready" @snapshot="snapshot" @change="change" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				watermark: []
			};
		},

		methods: {
			ready(e) {
				const { height, width } = e
				this.watermark = [{
					type: 'text',
					x: uni.upx2px(24),
					y: height - uni.upx2px(150),
					color: '#fff',
					size: uni.upx2px(68),
					text: "14:04",
					isBold: true
				}, {
					type: "fillRect",
					x: uni.upx2px(232),
					y: height - uni.upx2px(150),
					w: uni.upx2px(4),
					h: uni.upx2px(78),
					color: "#f60"
				}, {
					type: 'text',
					x: uni.upx2px(260),
					y: height - uni.upx2px(150),
					color: '#fff',
					size: uni.upx2px(30),
					text: "2024-09-09",
				}, {
					type: 'text',
					x: uni.upx2px(260),
					y: height - uni.upx2px(100),
					color: '#fff',
					size: uni.upx2px(30),
					text: "星期一"
				}, {
					type: 'text',
					x: uni.upx2px(24),
					y: height - uni.upx2px(48),
					color: '#fff',
					size: uni.upx2px(28),
					text: '江苏省苏州市科技城软件大厦'
				}, {
					type: 'image',
					url: 'https://bpic.588ku.com/element_origin_min_pic/00/15/94/7556aeca8408555.jpg',
					x: width - uni.upx2px(84),
					y: height - uni.upx2px(84),
					w: uni.upx2px(60),
					h: uni.upx2px(60),
				}]
			},

			snapshot() {
				uni.showLoading({
					mask: true
				})
			},

			change(base64) {
				console.log(base64);
				console.log("执行上传操作");
				uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss">
	.watermark-page {
		flex: 1;
	}
</style>
```

### 其他说明
- 如果出现image没有成功绘制到照片上的情况，请检查图片是否可以跨域访问
- 默认打开前置摄像头，如果需要默认打开后置摄像头，可以在`ready`回调里调用切换前后摄像头方法**this.$refs.watermark.switchCamera()**

