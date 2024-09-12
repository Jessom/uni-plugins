import { openBlock, createElementBlock, createCommentVNode, createElementVNode, Fragment, renderList, normalizeStyle, toDisplayString, resolveComponent, createVNode } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
function formatAppLog(type, filename, ...args) {
  if (uni.__log__) {
    uni.__log__(type, filename, ...args);
  } else {
    console[type].apply(console, [...args, filename]);
  }
}
const _style_0$1 = { "watasi-watermark-camera": { "": { "flex": 1, "position": "relative", "backgroundColor": "#000000" } }, "live-pusher": { ".watasi-watermark-camera ": { "flex": 1 } }, "toolbar": { ".watasi-watermark-camera ": { "flexDirection": "row", "width": "750rpx", "height": "200rpx", "backgroundColor": "#111111", "alignItems": "center", "justifyContent": "space-around", "paddingTop": 0, "paddingRight": "68rpx", "paddingBottom": 0, "paddingLeft": "68rpx" } }, "left": { ".watasi-watermark-camera .toolbar ": { "width": "80rpx" } }, "image": { ".watasi-watermark-camera .toolbar .left ": { "width": "80rpx", "height": "100rpx", "borderRadius": "8rpx" } }, "snapshot": { ".watasi-watermark-camera .toolbar ": { "width": "110rpx", "height": "110rpx", "borderRadius": 50, "borderWidth": 2, "borderStyle": "solid", "borderColor": "#ffffff", "alignItems": "center", "justifyContent": "center" } }, "circle": { ".watasi-watermark-camera .toolbar .snapshot ": { "width": "85rpx", "height": "85rpx", "backgroundColor": "#ffffff", "borderRadius": 50 } }, "switch": { ".watasi-watermark-camera .toolbar ": { "width": "80rpx", "height": "80rpx", "borderRadius": 50, "backgroundColor": "rgba(255,255,255,0.15)", "alignItems": "center", "justifyContent": "center" } }, "icon": { ".watasi-watermark-camera .toolbar .switch ": { "width": "50rpx", "height": "50rpx" } } };
const _sfc_main$1 = {
  props: {
    watermark: {
      type: Array,
      default: () => []
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      images: [],
      livePusherData: null
    };
  },
  filters: {
    filterStyle(value) {
      let style = {};
      switch (value.type) {
        case "text":
          style = {
            color: value.color,
            fontSize: value.size + "px",
            fontWeight: value.isBold ? "bold" : "normal"
          };
          break;
        case "fillRect":
          style = {
            backgroundColor: value.color,
            width: value.w + "px",
            height: value.h + "px"
          };
          break;
        case "image":
          style = {
            width: value.w + "px",
            height: value.h + "px"
          };
          break;
      }
      return style;
    }
  },
  mounted() {
    this.context = uni.createLivePusherContext("livePusher", this);
    const query = uni.createSelectorQuery().in(this);
    setTimeout(() => {
      query.select("#livePusher").boundingClientRect((data) => {
        this.context.startPreview({});
        this.livePusherData = data;
        this.$emit("ready", data);
      }).exec();
    }, 300);
    if (this.debug) {
      this.wv = plus.webview.create("", "custom-webview", {
        top: "-200px",
        left: 0,
        width: "1px",
        height: "200px",
        background: "transparent"
      }, {});
      this.wv.loadURL("/uni_modules/watasi-watermark-camera/hybrid/html/watermark.html");
      plus.webview.currentWebview().append(this.wv);
    }
  },
  methods: {
    onPostMessage(e) {
      const base64 = e.detail.data[0].base64;
      this.onChange(base64);
    },
    onChange(path) {
      this.images.push(path);
      this.$emit("change", path);
      this.context.startPreview({});
    },
    // 拍照
    snapshot() {
      this.context.snapshot({
        success: (e) => {
          if (e.errMsg === "snapshot:ok") {
            this.$emit("snapshot", null);
            this.context.stopPreview({});
            if (this.watermark.length === 0) {
              this.onChange(e.message.tempImagePath);
            } else {
              this.urlTobase64(e.message.tempImagePath, (base64) => {
                let param = {
                  base64,
                  watermark: this.watermark,
                  width: e.message.width,
                  height: e.message.height,
                  maxWidth: 750,
                  liveWidth: this.livePusherData.width,
                  liveHeight: this.livePusherData.height
                };
                if (this.debug) {
                  this.wv.evalJS(`setImage(${JSON.stringify(param)})`);
                } else {
                  this.$refs.webview.evalJs(`setImage(${JSON.stringify(param)})`);
                }
              });
            }
          } else {
            uni.showToast({
              title: "拍照失败",
              icon: "none"
            });
          }
        }
      });
    },
    // 切换前后摄像头
    switchCamera() {
      this.context.switchCamera({
        success: (e) => {
          formatAppLog("log", "at uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue:232", "livePusher.switchCamera:" + JSON.stringify(e));
        }
      });
    },
    previewImage() {
      uni.previewImage({
        current: this.images.length - 1,
        urls: this.images
      });
    },
    // 临时地址转base64
    urlTobase64(url, callback) {
      plus.io.resolveLocalFileSystemURL(url, (entry) => {
        entry.file((file) => {
          let fileReader = new plus.io.FileReader();
          fileReader.onloadend = (e) => {
            callback && callback(e.target.result);
          };
          fileReader.readAsDataURL(file);
        });
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "watasi-watermark-camera",
    renderWhole: true
  }, [
    !$props.debug ? (openBlock(), createElementBlock(
      "u-web-view",
      {
        key: 0,
        src: "/uni_modules/watasi-watermark-camera/hybrid/html/watermark.html",
        ref: "webview",
        "on:onPostMessage": _cache[0] || (_cache[0] = (...args) => $options.onPostMessage && $options.onPostMessage(...args))
      },
      null,
      544
      /* NEED_HYDRATION, NEED_PATCH */
    )) : createCommentVNode("v-if", true),
    createElementVNode(
      "live-pusher",
      {
        id: "livePusher",
        ref: "livePusher",
        class: "live-pusher",
        mode: "FHD",
        aspect: "9:16",
        beauty: 0,
        whiteness: 0,
        muted: true
      },
      null,
      512
      /* NEED_PATCH */
    ),
    createCommentVNode(" 渲染水印 "),
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($props.watermark, (item, idx) => {
        return openBlock(), createElementBlock(
          "view",
          {
            key: idx,
            style: normalizeStyle({
              position: "absolute",
              zIndex: 99,
              left: item.x + "px",
              top: item.y + "px"
            })
          },
          [
            item.type != "image" ? (openBlock(), createElementBlock(
              "u-text",
              {
                key: 0,
                class: "it",
                style: normalizeStyle(item | _ctx.filterStyle)
              },
              toDisplayString(item.type == "text" ? item.text : ""),
              5
              /* TEXT, STYLE */
            )) : (openBlock(), createElementBlock("u-image", {
              key: 1,
              style: normalizeStyle(item | _ctx.filterStyle),
              src: item.url,
              mode: "scaleToFill"
            }, null, 12, ["src"]))
          ],
          4
          /* STYLE */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    )),
    createElementVNode("view", { class: "toolbar" }, [
      createElementVNode("view", { class: "left" }, [
        createCommentVNode(' <image\r\n					class="image"\r\n					:src="images[images.length - 1]"\r\n					mode="aspectFill"\r\n					v-if="images.length"\r\n					@click="previewImage"\r\n				></image> ')
      ]),
      createElementVNode("view", {
        class: "snapshot",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.snapshot && $options.snapshot(...args))
      }, [
        createElementVNode("view", { class: "circle" })
      ]),
      createElementVNode("view", {
        class: "switch",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.switchCamera && $options.switchCamera(...args))
      }, [
        createElementVNode("u-image", {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABOZJREFUaEPtmVmoVWUYhp+XJpojsKBsoIvqoizIujJQSqXBi5KStNHmuYjSKEiRJguhJAojKqJ5skkaTSqCAksMISqiiyaobLhpot7WZ2vH8netvYZ99okDfrA5Z5/zf8O7/m9eYoyTxrj9bAbwf9/g0G7A9o7AfsBfwGeSfhsG2BEBYHtL4Oj8Myk3fFxi8KfAx8DnwNuSnh4JQAMBsH0YcB5wApAaXGffB8CjwGOSvqw7XPX/TgBsHwRcmhvfVXeP78cAAVwnKX5vRa0B2A4XeTB3k1bKag6vBeZKWt1GaCsAtmflT6ufjjeAZyJwgZ2ACObez2nAkTUGnizpyaYgGgOwfTtwVYXg8OWVwHOSvuun3PYBwEzgJODQirPzJd3aBEQjALbvAC4rEfgrcFrXjGL7RGApsEeJ7GmSXqsDUQvA9g2ZkAUlgt4CZkn6tk5JzY1MyDLYXUDEVkoTJH3Uj78vANsHA+8COyRClkiqcqfWePI6ci9wZsL8IXCcpG86pVHbDwBnJMxrJR3S2soGDLbvBi5Iji4HIrD/LBNReQO2jwFWlDCNk/R9A3taH8ke2L5ZcK8DtiswnyPpvtY3UPE0rpYU2WhoZHsRcH2uYJ6kxa1jIEuZ4fPRt+xZYH5I0ulDs7wg2PbXwBOSrqjTV+pCtk8BHkmYWxWYOsU1mWmSpHeayKgCsAw4tyAg8v3+gzRdTYzpcqYKwPvA4QWBKyUd1UXBoDy2J0ta1TiIbe+TZ4LtC0w3SuoF1qA2Nea3fVFe5O6RdGFlGrWdVtqovkVaWPiyrk2z1dja5KDt44EXCn++VtItqbwNLmT7ZmB+Q2VzJKUB3pC12THbUShfAXZPODbR/V8M2H4YmF2j4hpJtzUzo9sp27sCLycx2BMWc/V0SdGHbaAigPD5YCxrquLsndnEdHk3s5pzZdPeU3m7XcUU9Sn6o5itN94L2T4wv7q9E+7lkmLuHSrZXgJc2UBJtNkzJP2+SRq1PRV4tSBkTdaRRm/ed1BpoLT2iO03k0OTC9/TVLow0mtVHZgLRAP1EzBFUoAYNbK9W9ZafwFsW1C6WNK81Ih+3Wik1jWSop0dVbId019MgUWaKSlm7Y2odiIbVctzZbZjvp6S6B4v6avOAGwfC/wh6fVhgrJ9BPBeomNZNpWdX6a30Q3kG7hYl/wtKfL0UMj2XsCzWQWOjV+RJlbti2oB2B6fFZWXsl1PDN9BqyVNHGkEtnfO1iwRb8XME2oqn378s26o3xqIwjIjMXippLI1S2dctp8v0RPj5dTOQ31YYzs2BfeXWBYZYXYUk85W/ys/fP6mbGNd1q5HsXqxn/xaF8pBXJIvoFJZMdyfVaekygDbFwPRSMb6MaUFkopdcKmYRgByEFFENmlnc6mPA9FgrZAUBaiSss53m3CLfLVYNWM3Mr42BlIrbMcyK3aWW/SxMfb+0cf/DPxS+EQymJ5/YtlbRdEilG0CB7uBHrftKDABojhyDhIGPd5PYp3Sdlhq7EJFC23vkrtTaXHpgCaWCIu6LA06ASjcRvjynOxdwKk1blWFKQyPPN/qpUZR2EAACkCiOp+dvyuLZVh8quIkXl7EynJVXcA3uckRAVCmKFtNxjwbQLbK3qf9kL1fWJ8Vv/VNjGpzZmgA2hgxyNnNAAZ5eiPBO+Zv4B9flnNAGk1DCQAAAABJRU5ErkJggg==",
          mode: "widthFix",
          class: "icon"
        })
      ])
    ])
  ]);
}
const WatasiWatermarkCamera = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/workpace/git/uniPlugin/uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue"]]);
const _style_0 = { "watermark-page": { "": { "flex": 1 } } };
const _sfc_main = {
  components: {
    WatasiWatermarkCamera
  },
  data() {
    return {
      watermark: []
    };
  },
  methods: {
    ready(e) {
      const { height, width } = e;
      this.watermark = [{
        type: "text",
        x: uni.upx2px(24),
        y: height - uni.upx2px(150),
        color: "#fff",
        size: uni.upx2px(68),
        text: "14:04",
        isBold: true
      }, {
        type: "fillRect",
        x: uni.upx2px(232),
        y: height - uni.upx2px(150),
        w: uni.upx2px(4),
        h: uni.upx2px(78),
        color: "#f60"
      }, {
        type: "text",
        x: uni.upx2px(260),
        y: height - uni.upx2px(150),
        color: "#fff",
        size: uni.upx2px(30),
        text: "2024-09-09"
      }, {
        type: "text",
        x: uni.upx2px(260),
        y: height - uni.upx2px(100),
        color: "#fff",
        size: uni.upx2px(30),
        text: "星期一"
      }, {
        type: "text",
        x: uni.upx2px(24),
        y: height - uni.upx2px(48),
        color: "#fff",
        size: uni.upx2px(28),
        text: "江苏省苏州市科技城软件大厦"
      }, {
        type: "image",
        url: "https://bpic.588ku.com/element_origin_min_pic/00/15/94/7556aeca8408555.jpg",
        x: width - uni.upx2px(84),
        y: height - uni.upx2px(84),
        w: uni.upx2px(60),
        h: uni.upx2px(60)
      }];
    },
    snapshot() {
      uni.showLoading({
        mask: true
      });
    },
    change(base64) {
      formatAppLog("log", "at pages/template/watermarkCamera.nvue:75", base64);
      formatAppLog("log", "at pages/template/watermarkCamera.nvue:76", "执行上传操作");
      uni.hideLoading();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_watasi_watermark_camera = resolveComponent("watasi-watermark-camera");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "watermark-page" }, [
      createVNode(_component_watasi_watermark_camera, {
        watermark: $data.watermark,
        onReady: $options.ready,
        onSnapshot: $options.snapshot,
        onChange: $options.change
      }, null, 8, ["watermark", "onReady", "onSnapshot", "onChange"])
    ])
  ]);
}
const watermarkCamera = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/workpace/git/uniPlugin/pages/template/watermarkCamera.nvue"]]);
export {
  watermarkCamera as default
};
