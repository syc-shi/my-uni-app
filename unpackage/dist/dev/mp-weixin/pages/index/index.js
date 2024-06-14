"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("Hello");
    function enterHome() {
      common_vendor.index.navigateTo({
        url: "/pages/home/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o(enterHome)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/SN-606/Documents/HBuilderProjects/my-uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
