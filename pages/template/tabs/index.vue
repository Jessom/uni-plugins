<template>
	<view class="tabs-page">
		<watasi-tabs
			ref="wtabs"
			v-model="current"
			tab-key-name="name"
			:tabs="tabBars"
			:refresher-enabled="true"
			:refresher-triggered="triggered"
			refresher-background="#f2f2f1"
			swiper-class="swiper"
			@change="onTabChange"
			@refresherpulling="onPulling"
			@refresherrefresh="onRefresh"
			@refresherrestore="onRestore"
			@refresherabort="onAbort"
			@scrolltolower="loadMore"
		>
			<template slot="toolbar">
				<view class="search">
					<input type="text" placeholder="我要找..." class="input" />
				</view>
			</template>
			<template v-slot="scope">
				<view style="padding: 24rpx;">
					<block v-for="(item, index) in list[scope.index].data" :key="index">
						<view class="panel">
							<view class="panel-header">
								<text class="title">订单号：{{ item.id }}</text>
								<text class="time">2024-09-18 12:00</text>
							</view>
							<view class="panel-body">
								<view class="cell">
									<text class="label">订单状态：</text>
									<text
										class="value"
										:style="{
											color: scope.tab.status == 3 ? '#fa8c16' : scope.tab.status == 2 ? '#722ed1' : scope.tab.status == 1 ? '#52c41a' : '#f5222d'
										}"
									>{{ scope.tab.name }}</text>
								</view>
								<view class="cell">
									<text class="label">下单时间：</text>
									<text class="value">2024-09-17 13:00</text>
								</view>
								<view class="cell" v-if="scope.tab.status == 2">
									<text class="label">发货时间：</text>
									<text class="value">2024-09-17 17:00</text>
								</view>
								<view class="cell" v-if="scope.tab.status == 0">
									<text class="label">取消时间：</text>
									<text class="value">2024-09-17 15:00</text>
								</view>
								<view class="cell" v-if="scope.tab.status == 1">
									<text class="label">完成时间：</text>
									<text class="value">2024-09-18 11:00</text>
								</view>
							</view>
						</view>
					</block>
					
					<view class="loadmore">{{ list[scope.index].status === 'loading' ? '加载中' : list[scope.index].status === 'loadmore' ? '加载更多' : '咩有了' }}</view>
				</view>
			</template>
		</watasi-tabs>
		
		<!-- <watasi-tabs
			v-model="current2"
			:scroll="true"
			:tabs="tabBars2"
		>
			<template v-slot="scope">
				<text>{{ scope.tab }}</text>
			</template>
		</watasi-tabs> -->
	</view>
</template>

<script>
	import WatasiTabs from '@/uni_modules/watasi-tabs/components/watasi-tabs/watasi-tabs.vue';
	export default {
		components: {
			WatasiTabs
		},
		data() {
			return {
				triggered: false,
				list: [],
				current: 0,
				tabBars: [
					{ name: '待付款', status: 3, badge: 9 },
					{ name: '待收货', status: 2, badge: 99 },
					{ name: '已完成', status: 1, badge: 999 },
					{ name: '已取消', status: 0, badge: 0 },
				],
				current2: 0,
				tabBars2: [ '关注', '头条', '附近', '手机数码', '要闻', '热点', '体育', '直播', '军事', '财经', '小视频', '科技', '人文', '地理' ],
			};
		},
		onLoad() {
			this.tabBars.forEach((tabBar) => {
				this.list.push({
					data: [],
					page: 1,
					status: 'loading'
				});
			});
			
			this.getData(0)
		},
		methods: {
			// 请求数据
			getData(index) {
				let activeTab = this.list[index];
				
				setTimeout(() => {
					let list = new Array(parseInt(Math.random() * 20)).fill(1).map(() => ({
						id: parseInt(Math.random() * 100000000000)
					}))
					activeTab.data = activeTab.page == 1 ? list : activeTab.data.concat(list);
					activeTab.status = list.length >= 10 ? 'loadmore' : 'nomore'
					this.triggered = false
				}, 1000)
			},
			
			onTabChange(index) {
				this.getData(index)
			},
			
			// 被下拉
			onPulling() {},
			
			// 下拉刷新被触发
			onRefresh(e) {
				if (this.triggered) return
				this.triggered = true
				
				const { index } = e
				let activeTab = this.list[index]
				activeTab.status = 'loading'
				activeTab.page = 1
				
				this.getData(index)
			},
			
			// 下拉刷新被复位
			onRestore() {
				this.triggered = false;
			},
			
			// 下拉刷新被中止
			onAbort() {},
			
			// 滚动到底部，加载更多
			loadMore(e) {
				const { index } = e
				let activeTab = this.list[index]
				if(activeTab.status == 'loadmore') {
					activeTab.status = 'loading'
					activeTab.page += 1
					this.getData(index)
				}
			},
		}
	}
</script>

<style lang="scss">
.tabs-page {
	background-color: #f2f2f1;
	/* #ifdef H5 */
	height: calc(100vh - 44px);
	/* #endif */
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	/deep/ .swiper {
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - 88px - 88rpx);
		/* #endif */
		/* #ifndef H5 */
		height: calc(100vh - 44px - 88rpx);
		/* #endif */
	}
}
.panel {
	background-color: #fff;
	border-radius: 10rpx;
	margin-bottom: 24rpx;
	&-header {
		padding: 24rpx;
		border-bottom: 1rpx solid #e3e4e5;
		display: flex;
		justify-content: space-between;
		.title {
			font-size: 28rpx;
			color: #333;
		}
		.time {
			font-size: 24rpx;
			color: #666;
		}
	}
	&-body {
		padding: 18rpx 24rpx;
		.cell {
			font-size: 28rpx;
			padding: 6rpx 0;
			.label {
				color: #666;
			}
			.value {
				color: #333;
			}
		}
	}
}
.search {
	height: 88rpx;
	display: flex;
	align-items: center;
	padding: 0 24rpx;
	.input {
		background-color: #f2f2f1;
		height: 60rpx;
		flex: 1;
		padding: 0 20rpx;
		border-radius: 60rpx;
	}
}
.loadmore {
	padding: 30rpx 0;
	text-align: center;
	color: #696969;
}
</style>
