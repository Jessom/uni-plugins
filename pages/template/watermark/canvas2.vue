<template>
	<view>
		<button @click="onChoiseImage">拍摄或选图</button>
		<image v-if="imgUrl" :src="imgUrl" mode="widthFix" @click="preview"></image>
		<canvas
			type="2d"
			id="canvas"
			:style="{
				width: `${cw}px`,
				height: `${ch}px`,
				position: 'absolute',
				left: '-1000px',
				top: '-1000px'
			}"
		>
		</canvas>
	</view>
</template>

<script>
const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
import dayjs from 'dayjs';
export default {
	data() {
		return {
			maxWidth: 300,
			cw: 0,
			ch: 0,
			imgUrl: ''
		};
	},
	
	onReady() {
		
	},
	
	methods: {
		preview() {
			wx.previewImage({
				current: this.imgUrl,
				urls: [this.imgUrl]
			})
		},
		
		onChoiseImage(arr) {
			wx.chooseMedia({
				count: 1,
				mediaType: ['image'],
				sourceType: ['camera'],
				sizeType: ['compressed', 'original'],
				success: (res) => {
					if(res.errMsg === "chooseMedia:ok") {
						const src = res.tempFiles[0].tempFilePath;
						wx.getImageInfo({
							src: src,
							success: (ires) => {
								if (ires.errMsg == 'getImageInfo:ok') {
									let { width, height } = ires
									if(width > this.maxWidth) {
										height = (this.maxWidth / width) * height;
										width = parseInt(this.maxWidth);
									}
									this.cw = width
                  this.ch = height
									wx.showLoading({mask: true})
									this.$nextTick(function() {
										this.drawWatermark({
											width,
											height,
											path: ires.path,
											address: "这是一个测试的文本"
										})
									})
								} else {
									wx.showToast({title: ires.errMsg, icon: 'error'})
								}
							},
							fail(e) {
								console.log(e);
							}
						})
					} else {
						wx.showToast({title: res.errMsg, icon: 'error'})
					}
				},
			})
		},
		
		drawWatermark(options) {
			wx.createSelectorQuery()
				.select('#canvas')
				.fields({
					node: true,
					size: true,
				})
				.exec((res) => {
					const canvas = res[0].node
					const ctx = canvas.getContext('2d')
					const { width, height, address, path } = options
					const dpr = wx.getSystemInfoSync().pixelRatio
					/* canvas.width = width
					canvas.height = height */
					canvas.width = width * dpr     // 获取宽
					canvas.height = height * dpr  // 获取高
					ctx.scale(dpr, dpr)
					const img = canvas.createImage()
					img.src = path
					img.onload = () => {
						ctx.drawImage(img, 0, 0, width, height); //先画出图片
						ctx.fillStyle = 'white';
						ctx.font = 'bolder 28px Arial'
						ctx.fillText(dayjs().format('HH:mm'), 5, height - 45);
						ctx.fillStyle = '#CE3D3A'
						ctx.fillRect(80, height - 75, 4, 40);
						ctx.font = 'normal 16px Arial'
						ctx.fillStyle = 'white';
						ctx.fillText(dayjs().format('YYYY-MM-DD'), 90, height - 60);
						ctx.fillText(week[dayjs().day()], 90, height - 40);
						ctx.font = 'normal 12px Arial'
						ctx.fillText(address, 10, height - 20);
						ctx.font = 'normal 12px Arial'
						ctx.fillText('伏泰·纳故', width - 60, height - 30);
						ctx.font = 'normal 12px Arial'
						ctx.fillText('水印相机', width - 60, height - 10);
						console.log("画完了");
						
						/* const url = canvas.toDataURL('image/png', 0.75)
						this.imgUrl = url
						console.log(this.imgUrl, url); */
						setTimeout(() => {
							uni.hideLoading()
							wx.canvasToTempFilePath({
								x: 0,
								y: 0,
								width: width * dpr,
								height: height * dpr,
								destWidth: width * dpr,
								destHeight: height * dpr,
								fileType: 'png',
								quality: 0.75,
								canvas: canvas,
								success: (res) => {
									if(res.errMsg === "canvasToTempFilePath:ok") {
										console.log(res.tempFilePath);
										this.imgUrl = res.tempFilePath
									}
								},
							})
						})
					}
				})
		}
	}
}
</script>

<style lang="scss">

</style>
