<template>
	<view class="w-card">
		<view class="w-card_inner" :class="[className]">
			<slot></slot>
		</view>
	</view>
</template>

<script>
export default {
	name:"w-card",
	props: {
		className: String
	},
	data() {
		return {
			
		};
	}
}
</script>

<style lang="scss">
$radius: 30rpx;
.w-card {
	border: 2px solid #000;
	background-color: #CFD7EE;
	border-radius: $radius;
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	padding-bottom: 10rpx;
	.w-card_inner {
		border-radius: 0 0 $radius $radius;
		background-color: #fff;
	}
}
</style>