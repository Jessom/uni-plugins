<template>
	<view class="w-button" @click="$emit('click')">
		<view class="w-button_inner" :class="[className]">
			<slot></slot>
		</view>
	</view>
</template>

<script>
export default {
	name:"w-button",
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
$radius: 20rpx;
.w-button {
	background-color: #E38906;
	border: 2px solid #000;
	padding-bottom: 10rpx;
	display: inline-block;
	border-radius: $radius;
	overflow: hidden;
	&_inner {
		background-color: #FEB421;
		border-radius: 0 0 $radius $radius;
		padding: 14rpx 30rpx;
	}
}
</style>