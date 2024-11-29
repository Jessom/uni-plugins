<script>
	export default {
		onLaunch: function() {
			uni.loadFontFace({
				global: true,
			  family: 'PingFangMengMeng',
			  source: 'url("https://xcx.uufen.cn/xiaona/iconfont/PingFangMengMeng-2.ttf")',
			  success() {
				  console.log('success')
			  },
				fail() {
					console.log("大厦");
				}
			})
		
			// #ifdef MP-WEIXIN
			if(wx.canIUse('getUpdateManager')) {
				const update = wx.getUpdateManager()
				update.onCheckForUpdate(res => {
					//检测是否有新版本
					if(res.hasUpdate) {
						update.onUpdateReady(() => {
							wx.showModal({
								title: '更新提示',
								content: '新版本已经准备好，是否重启应用？',
								success: function (res) {
									if (res.confirm) {
										// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启，如果想静默更新，直接在检测有新版本的时候调用此方法即可
										update.applyUpdate();
									}
								}
							})
						})
					}
				})
			}
			// #endif
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style lang="scss">
</style>
