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
					this.$refs.wCompress.start(res.tempFilePaths[0])
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
