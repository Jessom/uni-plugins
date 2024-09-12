import { openBlock, createElementBlock, resolveComponent, createElementVNode, createVNode } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div");
}
const watermarkNvue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "E:/workpace/git/uniPlugin/pages/template/watermark.nvue"]]);
const _sfc_main = {
  components: {
    watermarkNvue
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_watermarkNvue = resolveComponent("watermarkNvue");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { style: { "flex": "1" } }, [
      createVNode(_component_watermarkNvue)
    ])
  ]);
}
const camera = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/workpace/git/uniPlugin/pages/template/camera.nvue"]]);
export {
  camera as default
};
