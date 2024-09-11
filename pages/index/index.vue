<template>
	<view class="content">
		<block v-for="(item, index) in links" :key="index">
			<button @click="onNavigator(item)">{{ item.label }}</button>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			links: [
				// #ifdef APP-PLUS
				{ label: '水印相机(NVUE)', url: '/pages/template/watermarkCamera' },
				// #endif
				{ label: '图片压缩', url: '/pages/template/compress' },
			]
		}
	},
	onLoad() {

	},
	methods: {
		onNavigator(item) {
			uni.navigateTo({
				url: item.url
			})
		}
	}
}
</script>

<style>

</style>
