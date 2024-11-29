<template>
	<view class="index-page">
		<w-card class-name="scan-wrap">
			<text class="text">一键获取二维码内容</text>
			<w-button class-name="scan-btn" @click="onScan">马上扫码</w-button>
		</w-card>
		
		<view style="height: 24rpx;"></view>
		
		<w-card class-name="card">
			<block v-for="(item, index) in elements" :key="index">
				<view class="cell" @click="onNavigator(item)">
					<view class="cell-left">
						<text class="title">{{ item.title }}</text>
					</view>
					<view class="cell-right">
						<!-- <text class="subtitle">{{ item.subtitle }}</text> -->
						<uni-icons type="right" size="34rpx" color="#000" class="icon"></uni-icons>
					</view>
				</view>
			</block>
		</w-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			elements: [
				// #ifdef APP-PLUS
				{
					title: '水印相机',
					subtitle: '',
					url: '/pages/template/watermarkCamera/index',
				},
				// #endif
				{
					title: '图片压缩',
					subtitle: 'compress',
					url: '/pages/template/compress/index',
				},
				{
					title: '图片水印1',
					subtitle: 'watermark1',
					url: '/pages/template/watermark/canvas1',
				},
				{
					title: '图片水印2',
					subtitle: 'watermark2',
					url: '/pages/template/watermark/canvas2',
				},
				/* {
					title: '选项卡',
					subtitle: 'tabs',
					url: '/pages/template/tabs/index',
				}, */
			],
		}
	},
	onLoad() {

	},
	onReady() {
		
	},
	onShareAppMessage() {
		return {
			title: 'WATASI',
			desc: '演示开发的uniapp插件、模板等。',
			path: '/pages/index/index'
		}
	},
	onShareTimeline() {
		return {
			title: 'WATASI',
			desc: '演示开发的uniapp插件、模板等。',
			path: '/pages/index/index'
		}
	},
	methods: {
		onNavigator(item) {
			uni.navigateTo({
				url: item.url
			})
		},
		
		onScan() {
			uni.scanCode({
				scanType: ['qrCode'],
				success: (e) => {
					uni.showModal({
						title: "",
						content: e.result,
						confirmColor: '#E38805',
						confirmText: '复制',
						cancelColor: '#666666',
						success(r) {
							if(r.confirm) {
								uni.setClipboardData({
									data: e.result,
									success() {
										uni.showToast({
											icon: 'success',
											title: '复制成功'
										})
									}
								})
							}
						}
					})
				}
			})
		}
	}
}
</script>

<style lang="scss">
page {
	background-color: $theme;
}
.index-page {
	min-height: 100vh;
	padding: 24rpx;
	box-sizing: border-box;
	font-family: 'PingFangMengMeng', sans-serif;
	.scan-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx;
		.text {
			font-size: 32rpx;
			color: #666666;
		}
		.scan-btn {
			font-size: 34rpx;
		}
	}
	.card {
		padding-top: 12rpx;
		padding-bottom: 12rpx;
	}
	.cell {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 34rpx;
		.cell-left {
			.title {
				color: #000;
				font-size: 38rpx;
				font-weight: 500;
			}
		}
		.cell-right {
			.subtitle {
				color: #666;
				font-size: 30rpx;
				margin-right: 8rpx;
				vertical-align: top;
			}
			.icon {
				font-weight: bold !important;
			}
		}
	}
}
</style>
