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
		
		<view style="padding: 24rpx;">
			<button @click="onChoiseImage">选择图片</button>
		</view>
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

	image,
	uni-image {
		max-width: 100%;
	}
}
</style>