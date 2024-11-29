<template>
	<view>
		<button @click="onChoiseImage">拍摄或选图</button>
		<image v-if="imgUrl" :src="imgUrl" mode="widthFix" @click="preview"></image>
		<canvas
			canvas-id="workCanvas"
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
	methods: {
		preview() {
			wx.previewImage({
				current: this.imgUrl,
				urls: [this.imgUrl]
			})
		},
		
		onChoiseImage() {
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
								console.log(ires);
								if (ires.errMsg == 'getImageInfo:ok') {
									let { width, height } = ires
									if(width > this.maxWidth) {
										height = (this.maxWidth / width) * height;
										width = parseInt(this.maxWidth);
									}
									wx.showLoading({mask: true})
									this.cw = width
                  this.ch = height
									this.drawWatermark({
										width,
										height,
										path: ires.path,
										address: "这是一个测试的文本"
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
			const { width, height, address, path } = options
			const ctx = wx.createCanvasContext('workCanvas', this)
			ctx.drawImage(path, 0, 0, width, height); //先画出图片
			ctx.setFillStyle('white');
			ctx.font = 'bolder 28px Arial'
			ctx.fillText(dayjs().format('HH:mm'), 5, height - 45);
			ctx.setFillStyle('#CE3D3A')
			ctx.fillRect(80, height - 75, 4, 40);
			ctx.font = 'normal 16px Arial'
			ctx.setFillStyle('white');
			ctx.fillText(dayjs().format('YYYY-MM-DD'), 90, height - 60);
			ctx.fillText(week[dayjs().day()], 90, height - 40);
			ctx.font = 'normal 12px Arial'
			ctx.fillText(address, 10, height - 20);
			ctx.font = 'normal 12px Arial'
			ctx.fillText('伏泰·纳故', width - 60, height - 30);
			ctx.font = 'normal 12px Arial'
			ctx.fillText('水印相机', width - 60, height - 10);
			console.log("画完了");
			
			ctx.draw(false, () => {
				setTimeout(() => {
					uni.hideLoading()
					wx.canvasToTempFilePath({
						canvasId: 'workCanvas',
						width: width,
						height: height,
						success: (res) => {
							if (res.errMsg == 'canvasToTempFilePath:ok') {
								this.imgUrl = res.tempFilePath
							} else {
								wx.showToast({ title: res.errMsg, icon: 'none' })
							}
						},
						fail: () => {
							wx.showToast({
								title: '转换图片失败',
								icon: 'none'
							})
						}
					})
				}, 600)
			})
		}
	}
}
</script>

<style lang="scss">

</style>
