"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const items = common_vendor.ref([{ message: "foo" }, { message: "bar" }]);
    const initObj = {
      title: "How to do lists in Vue",
      author: "Jane Doe",
      publishedAt: "2020-04-10"
    };
    const objects = common_vendor.ref(initObj);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.f(items.value, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.t(item.message),
            c: index
          };
        }),
        c: common_vendor.f(objects.value, (val, key, index) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.t(key),
            c: common_vendor.t(val),
            d: index
          };
        }),
        d: common_vendor.f(items.value, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.t(item.message),
            c: index
          };
        }),
        e: common_assets._imports_1
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/SN-606/Documents/HBuilderProjects/my-uni-app/pages/home/index.vue"]]);
wx.createPage(MiniProgramPage);
