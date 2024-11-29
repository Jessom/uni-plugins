<template>
	<view class="watasi-tabs">
		<view class="header" id="header">
			<scroll-view
				id="tab-bar"
				class="scroll-h"
				:scroll-x="scroll"
				:show-scrollbar="false"
				:scroll-left="scroll ? scrollLeft : 0"
				:scroll-with-animation="scroll"
				:style="{
					height: addUnit(tabHeight)
				}"
			>
				<view class="tab-inner">
					<view
						v-for="(tab,index) in tabs"
						:key="index"
						class="tab-item"
						:class="{active: tabIndex == index}"
						:data-current="index"
						:style="{
							height: addUnit(tabHeight),
							lineHeight: addUnit(tabHeight),
							color: tabIndex == index ? activeColor : color,
							flex: scroll ? 0 : 1,
							justifyContent: scroll ? 'flex-start' : 'center',
						}"
						@click="ontabtap"
					>
						<text class="tab-item-title">{{tabKeyName ? tab.name : tab}}</text>
						<text
							class="tab-badge"
							:style="{
								left: addUnit(lineWidth * 1.8)
							}"
							v-if="tab.badge"
						>{{ getBadgeValue(tab.badge) }}</text>
					</view>
				</view>
				<view
					class="tab-line"
					:style="{
						width: addUnit(lineWidth),
						height: addUnit(lineHeight),
						backgroundColor: lineColor,
						transform: `translateX(${lineLeft}px)`
					}"
				></view>
			</scroll-view>
			
			<view v-if="$slots.toolbar">
				<slot name="toolbar"></slot>
			</view>
		</view>
		
		<swiper
			:current="tabIndex"
			class="swiper-box"
			:class="swiperClass"
			:duration="300"
			@change="ontabchange"
		>
			<swiper-item class="swiper-item" v-for="(tab, index) in tabs" :key="index">
				<scroll-view
					class="scroll-v list"
					enableBackToTop="true"
					refresher-background="#F2F4F5"
					scroll-y
					:lower-threshold="50"
					:refresher-enabled="refresherEnabled"
					:refresher-threshold="refresherThreshold"
					:refresher-background="refresherBackground"
					:refresher-triggered="refresherTriggered"
					@scrolltoupper="scrolltoupper($event, index)"
					@scrolltolower="scrolltolower($event, index)"
					@scroll="onScroll($event, index)"
					@refresherpulling="refresherpulling($event, index)"
					@refresherrefresh="refresherrefresh($event, index)"
					@refresherrestore="refresherrestore($event, index)"
					@refresherabort="refresherabort($event, index)"
				>
					<slot :tab="tab" :index="index"></slot>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
/**
 * tabs 选项卡
 * @description tabs选项卡
 * @property {String|Number} value 双向绑定的选中值
 * @property {Array} tabs 选项卡列表
 * 	@value count Number 徽标数
 * @property {Array} tabKeyName tabs数组中指定对象的目标属性名
 * @property {Number | String} tabHeight 选项卡高度，默认44px
 * @property {String} color tab默认文字颜色，默认值#666666
 * @property {String} activeColor tab选中文字颜色，默认值#1677ff
 * @property {String | Number} lineHeight 下划线高度，默认3px
 * @property {String} lineColor 下划线颜色，默认#1677ff
 * @property {Boolean} scroll tabs是否可滚动，false时平铺整行
 * @property {Boolean} refresherEnabled 开启自定义下拉刷新
 * @property {Boolean} refresherThreshold 设置自定义下拉刷新阈值，默认值45
 * @property {Boolean} refresherBackground 自定义下拉刷新区域背景颜色，默认值#ffffff
 * @property {Boolean} refresherTriggered 设置当前下拉刷新状态
 * @property {String} swiperClass swiper的自定义class
 * @event {Function} @change 切换选项卡
 * @event {Function} @scrolltoupper 滚动到顶部/左边，会触发 scrolltoupper 事件
 * @event {Function} @scrolltolower 滚动到底部/右边，会触发 scrolltolower 事件
 * @event {Function} @scroll 滚动时触发
 * @event {Function} @refresherpulling 下拉刷新控件被下拉
 * @event {Function} @refresherrefresh 下拉刷新被触发
 * @event {Function} @refresherrestore 下拉刷新被复位
 * @event {Function} @refresherabort 下拉刷新被中止
 */
import { addUnit } from './utils.js'
const MAX_CACHE_DATA = 100;	// 缓存每页最多
const MAX_CACHE_PAGE = 3;	// 缓存页签数量
export default {
	name: "WatasiTabs",
	props: {
		value: {
			type: [String, Number],
			default: 0
		},
		tabs: {
			type: Array,
			default: () => []
		},
		tabKeyName: String,
		tabHeight: {
			type: Number | String,
			default: 44
		},
		color: {
			type: String,
			default: '#666666'
		},
    activeColor: {
      type: String,
      default: '#1677ff'
    },
		lineHeight: {
			type: String | Number,
			default: 3
		},
    lineColor: {
      type: String,
      default: '#1677ff'
    },
		scroll: {
			type: Boolean,
			default: false
		},
		refresherEnabled: {
			type: Boolean,
			default: false
		},
		refresherThreshold: {
			type: Number,
			default: 45
		},
		refresherBackground: {
			type: String,
			default: "#ffffff"
		},
		refresherTriggered: {
			type: Boolean,
			default: false
		},
		swiperClass: String
	},
	// #ifdef MP-WEIXIN
	options: {
		multipleSlots: true
	},
	// #endif
	data() {
		return {
			cacheTab: [],
			// 选中项索引
			tabIndex: 0,
			// tabs滚动条横向位置
			scrollLeft: 0,
			// 下划线横向位置
			lineLeft: 0,
			// 下划线宽度
			lineWidth: 0,
		}
	},
	watch: {
		value(newVal) {
			this.tabIndex = newVal
			this.updateTabsWidth(0)
		}
	},
	mounted() {
		this.tabIndex = this.value
		this.updateTabsWidth(0)
	},
	methods: {
		// 添加单位
		addUnit: addUnit,
		getBadgeValue(value) {
			return Number(value) > 99 ? 99 + "+" : value
		},
		ontabchange(e) {
			let index = e.target.current || e.detail.current;
			this.tabIndex = index
			this.updateTabsWidth(0)
			this.$emit('change', this.tabIndex)
		},
		ontabtap(e) {
			let index = e.target.dataset.current || e.currentTarget.dataset.current;
			if (this.tabIndex != index) {
				this.tabIndex = index
				this.updateTabsWidth(e.currentTarget.offsetLeft)
				this.$emit('change', this.tabIndex)
			}
		},
		updateTabsWidth(offsetLeft = 0) {
			let scrollWidth = 0
			const query = uni.createSelectorQuery().in(this)
			query
				.select('#header')
				.boundingClientRect(data => {
					scrollWidth = data.width
				})
				.exec()
			this.$nextTick(function() {
				let i = 0
				let width = 0
				query
					.selectAll('.tab-item')
					.boundingClientRect(data => {
						width = data.reduce((total, currentValue, currentIndex, arr) => {
							if (currentIndex < this.tabIndex) {
								total = total + currentValue.width
							}
							return total
						}, 0)
					})
					.exec()
				query
					.select('.tab-item.active')
					.boundingClientRect(data => {
						const w = offsetLeft ? offsetLeft : width
						if (data) {
							this.lineLeft = w + (data.width * (1 - 0.4)) / 2
							this.lineWidth = data.width * 0.4
							this.scrollLeft = w - (scrollWidth - data.width) / 2
						}
					})
					.exec()
			})
		},
		scrolltoupper(e, index) {
			this.$emit("scrolltoupper", {
				e,
				index
			})
		},
		scrolltolower(e, index) {
			this.$emit("scrolltolower", {
				e,
				index
			})
		},
		onScroll(e, index) {
			this.$emit("scroll", {
				e,
				index
			})
		},
		refresherpulling(e, index) {
			this.$emit("refresherpulling", {
				e,
				index
			})
		},
		refresherrefresh(e, index) {
			this.$emit("refresherrefresh", {
				e,
				index
			})
		},
		refresherrestore(e, index) {
			this.$emit("refresherrestore", {
				e,
				index
			})
		},
		refresherabort(e, index) {
			this.$emit("refresherabort", {
				e,
				index
			})
		},
	}
}
</script>

<style lang="scss">
.watasi-tabs {
	.header {
		position: relative;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		background-color: #fff;
		.tab-inner {
			position: relative;
			display: flex;
			align-items: center;
			height: 100%;
			.tab-item {
				position: relative;
				display: inline-flex;
				padding: 0 20rpx;
				transition: all 0.3s ease;
				font-size: 30rpx;
			}
			.tab-badge {
				background-color: #f56c6c;
				font-size: 11px;
				color: #fff;
				border-top-right-radius: 100px;
				border-top-left-radius: 100px;
				border-bottom-left-radius: 100px;
				border-bottom-right-radius: 100px;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 15px;
				padding: 0 5px;
				position: absolute;
				top: 5px;
			}
		}
		.tab-line {
			position: absolute;
			z-index: 2;
			transition: all 0.3s linear;
			border-radius: 4rpx;
			bottom: 0;
		}
	}
	.swiper-box {
		box-sizing: border-box;
	}
	.scroll-v {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
}
/deep/ ::-webkit-scrollbar {
  display: none;
}
</style>
