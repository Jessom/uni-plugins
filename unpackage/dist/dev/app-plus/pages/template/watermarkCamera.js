"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************************************************************************!*\
  !*** E:/workpace/git/uniPlugin/main.js?{"page":"pages%2Ftemplate%2FwatermarkCamera"} ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_template_watermarkCamera_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/template/watermarkCamera.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_template_watermarkCamera_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_template_watermarkCamera_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/template/watermarkCamera'\n        _pages_template_watermarkCamera_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_template_watermarkCamera_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBMkU7QUFDM0UsUUFBUSx3RkFBRztBQUNYLFFBQVEsd0ZBQUc7QUFDWCxRQUFRLHdGQUFHO0FBQ1gsZ0JBQWdCLHdGQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy90ZW1wbGF0ZS93YXRlcm1hcmtDYW1lcmEubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvdGVtcGxhdGUvd2F0ZXJtYXJrQ2FtZXJhJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************************************!*\
  !*** E:/workpace/git/uniPlugin/main.js?{"type":"appStyle"} ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*************************************************************************!*\
  !*** E:/workpace/git/uniPlugin/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/workpace/git/uniPlugin/App.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!*********************************************************************************!*\
  !*** E:/workpace/git/uniPlugin/pages/template/watermarkCamera.nvue?mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _watermarkCamera_nvue_vue_type_template_id_7358ce01_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watermarkCamera.nvue?vue&type=template&id=7358ce01&mpType=page */ 6);\n/* harmony import */ var _watermarkCamera_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watermarkCamera.nvue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _watermarkCamera_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _watermarkCamera_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./watermarkCamera.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 20).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./watermarkCamera.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 20).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _watermarkCamera_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _watermarkCamera_nvue_vue_type_template_id_7358ce01_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _watermarkCamera_nvue_vue_type_template_id_7358ce01_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"9aafe768\",\n  false,\n  _watermarkCamera_nvue_vue_type_template_id_7358ce01_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/template/watermarkCamera.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDK0U7QUFDTDtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDZFQUFxRTtBQUN6SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNkVBQXFFO0FBQzlIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLGlHQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi93YXRlcm1hcmtDYW1lcmEubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MzU4Y2UwMSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd2F0ZXJtYXJrQ2FtZXJhLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vd2F0ZXJtYXJrQ2FtZXJhLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3dhdGVybWFya0NhbWVyYS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3dhdGVybWFya0NhbWVyYS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiOWFhZmU3NjhcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGVtcGxhdGUvd2F0ZXJtYXJrQ2FtZXJhLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************************************************************!*\
  !*** E:/workpace/git/uniPlugin/pages/template/watermarkCamera.nvue?vue&type=template&id=7358ce01&mpType=page ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_template_id_7358ce01_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watermarkCamera.nvue?vue&type=template&id=7358ce01&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_template_id_7358ce01_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_template_id_7358ce01_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_template_id_7358ce01_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_template_id_7358ce01_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/workpace/git/uniPlugin/pages/template/watermarkCamera.nvue?vue&type=template&id=7358ce01&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    watasiWatermarkCamera:
      __webpack_require__(/*! @/uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue */ 8)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        { staticClass: ["watermark-page"] },
        [
          _c("watasi-watermark-camera", {
            attrs: { watermark: _vm.watermark },
            on: {
              ready: _vm.ready,
              snapshot: _vm.snapshot,
              change: _vm.change,
            },
          }),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!*************************************************************************************************************************************!*\
  !*** E:/workpace/git/uniPlugin/uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _watasi_watermark_camera_nvue_vue_type_template_id_71b28d44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watasi-watermark-camera.nvue?vue&type=template&id=71b28d44& */ 9);\n/* harmony import */ var _watasi_watermark_camera_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watasi-watermark-camera.nvue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _watasi_watermark_camera_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _watasi_watermark_camera_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./watasi-watermark-camera.nvue?vue&type=style&index=0&lang=scss& */ 14).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./watasi-watermark-camera.nvue?vue&type=style&index=0&lang=scss& */ 14).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _watasi_watermark_camera_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _watasi_watermark_camera_nvue_vue_type_template_id_71b28d44___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _watasi_watermark_camera_nvue_vue_type_template_id_71b28d44___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"4cc58b2f\",\n  false,\n  _watasi_watermark_camera_nvue_vue_type_template_id_71b28d44___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUk7QUFDckk7QUFDNEU7QUFDTDtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDBFQUFrRTtBQUN0SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMEVBQWtFO0FBQzNIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDhGQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi93YXRhc2ktd2F0ZXJtYXJrLWNhbWVyYS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxYjI4ZDQ0JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd2F0YXNpLXdhdGVybWFyay1jYW1lcmEubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vd2F0YXNpLXdhdGVybWFyay1jYW1lcmEubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3dhdGFzaS13YXRlcm1hcmstY2FtZXJhLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3dhdGFzaS13YXRlcm1hcmstY2FtZXJhLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNGNjNThiMmZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvd2F0YXNpLXdhdGVybWFyay1jYW1lcmEvY29tcG9uZW50cy93YXRhc2ktd2F0ZXJtYXJrLWNhbWVyYS93YXRhc2ktd2F0ZXJtYXJrLWNhbWVyYS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!********************************************************************************************************************************************************************!*\
  !*** E:/workpace/git/uniPlugin/uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue?vue&type=template&id=71b28d44& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_template_id_71b28d44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watasi-watermark-camera.nvue?vue&type=template&id=71b28d44& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_template_id_71b28d44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_template_id_71b28d44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_template_id_71b28d44___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_template_id_71b28d44___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/workpace/git/uniPlugin/uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue?vue&type=template&id=71b28d44& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["watasi-watermark-camera"] },
    [
      !_vm.debug
        ? _c("u-web-view", {
            ref: "webview",
            attrs: {
              src: "/uni_modules/watasi-watermark-camera/hybrid/html/watermark.html",
            },
            on: { onPostMessage: _vm.onPostMessage },
          })
        : _vm._e(),
      _c("live-pusher", {
        ref: "livePusher",
        staticClass: ["live-pusher"],
        attrs: {
          id: "livePusher",
          mode: "FHD",
          aspect: "9:16",
          beauty: 0,
          whiteness: 0,
          muted: true,
        },
      }),
      _vm._l(_vm.watermark, function (item, idx) {
        return _c(
          "view",
          {
            key: idx,
            style: {
              position: "absolute",
              zIndex: 99,
              left: item.x + "px",
              top: item.y + "px",
            },
          },
          [
            item.type != "image"
              ? _c(
                  "u-text",
                  {
                    staticClass: ["it"],
                    style: _vm._f("filterStyle")(item),
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v(_vm._s(item.type == "text" ? item.text : ""))]
                )
              : _c("u-image", {
                  style: _vm._f("filterStyle")(item),
                  attrs: { src: item.url, mode: "scaleToFill" },
                }),
          ],
          1
        )
      }),
      _c("view", { staticClass: ["toolbar"] }, [
        _c("view", { staticClass: ["left"] }),
        _c("view", { staticClass: ["snapshot"], on: { click: _vm.snapshot } }, [
          _c("view", { staticClass: ["circle"] }),
        ]),
        _c(
          "view",
          { staticClass: ["switch"], on: { click: _vm.switchCamera } },
          [
            _c("u-image", {
              staticClass: ["icon"],
              attrs: {
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABOZJREFUaEPtmVmoVWUYhp+XJpojsKBsoIvqoizIujJQSqXBi5KStNHmuYjSKEiRJguhJAojKqJ5skkaTSqCAksMISqiiyaobLhpot7WZ2vH8netvYZ99okDfrA5Z5/zf8O7/m9eYoyTxrj9bAbwf9/g0G7A9o7AfsBfwGeSfhsG2BEBYHtL4Oj8Myk3fFxi8KfAx8DnwNuSnh4JQAMBsH0YcB5wApAaXGffB8CjwGOSvqw7XPX/TgBsHwRcmhvfVXeP78cAAVwnKX5vRa0B2A4XeTB3k1bKag6vBeZKWt1GaCsAtmflT6ufjjeAZyJwgZ2ACObez2nAkTUGnizpyaYgGgOwfTtwVYXg8OWVwHOSvuun3PYBwEzgJODQirPzJd3aBEQjALbvAC4rEfgrcFrXjGL7RGApsEeJ7GmSXqsDUQvA9g2ZkAUlgt4CZkn6tk5JzY1MyDLYXUDEVkoTJH3Uj78vANsHA+8COyRClkiqcqfWePI6ci9wZsL8IXCcpG86pVHbDwBnJMxrJR3S2soGDLbvBi5Iji4HIrD/LBNReQO2jwFWlDCNk/R9A3taH8ke2L5ZcK8DtiswnyPpvtY3UPE0rpYU2WhoZHsRcH2uYJ6kxa1jIEuZ4fPRt+xZYH5I0ulDs7wg2PbXwBOSrqjTV+pCtk8BHkmYWxWYOsU1mWmSpHeayKgCsAw4tyAg8v3+gzRdTYzpcqYKwPvA4QWBKyUd1UXBoDy2J0ta1TiIbe+TZ4LtC0w3SuoF1qA2Nea3fVFe5O6RdGFlGrWdVtqovkVaWPiyrk2z1dja5KDt44EXCn++VtItqbwNLmT7ZmB+Q2VzJKUB3pC12THbUShfAXZPODbR/V8M2H4YmF2j4hpJtzUzo9sp27sCLycx2BMWc/V0SdGHbaAigPD5YCxrquLsndnEdHk3s5pzZdPeU3m7XcUU9Sn6o5itN94L2T4wv7q9E+7lkmLuHSrZXgJc2UBJtNkzJP2+SRq1PRV4tSBkTdaRRm/ed1BpoLT2iO03k0OTC9/TVLow0mtVHZgLRAP1EzBFUoAYNbK9W9ZafwFsW1C6WNK81Ih+3Wik1jWSop0dVbId019MgUWaKSlm7Y2odiIbVctzZbZjvp6S6B4v6avOAGwfC/wh6fVhgrJ9BPBeomNZNpWdX6a30Q3kG7hYl/wtKfL0UMj2XsCzWQWOjV+RJlbti2oB2B6fFZWXsl1PDN9BqyVNHGkEtnfO1iwRb8XME2oqn378s26o3xqIwjIjMXippLI1S2dctp8v0RPj5dTOQ31YYzs2BfeXWBYZYXYUk85W/ys/fP6mbGNd1q5HsXqxn/xaF8pBXJIvoFJZMdyfVaekygDbFwPRSMb6MaUFkopdcKmYRgByEFFENmlnc6mPA9FgrZAUBaiSss53m3CLfLVYNWM3Mr42BlIrbMcyK3aWW/SxMfb+0cf/DPxS+EQymJ5/YtlbRdEilG0CB7uBHrftKDABojhyDhIGPd5PYp3Sdlhq7EJFC23vkrtTaXHpgCaWCIu6LA06ASjcRvjynOxdwKk1blWFKQyPPN/qpUZR2EAACkCiOp+dvyuLZVh8quIkXl7EynJVXcA3uckRAVCmKFtNxjwbQLbK3qf9kL1fWJ8Vv/VNjGpzZmgA2hgxyNnNAAZ5eiPBO+Zv4B9flnNAGk1DCQAAAABJRU5ErkJggg==",
                mode: "widthFix",
              },
            }),
          ],
          1
        ),
      ]),
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!**************************************************************************************************************************************************************!*\
  !*** E:/workpace/git/uniPlugin/uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watasi-watermark-camera.nvue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNiLENBQWdCLGtlQUFHLEVBQUMiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0YXNpLXdhdGVybWFyay1jYW1lcmEubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGFzaS13YXRlcm1hcmstY2FtZXJhLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/workpace/git/uniPlugin/uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\r\n * 水印相机\r\n * @description \r\n * @property {Array} watermark 水印\r\n * \t@value type text(文本)、image(图片)、fillRect(矩形)\r\n * \t@value x x轴坐标\r\n * \t@value y y轴坐标\r\n * \t@value color type为text、fillRect时有效\r\n * \t@value text type为text时有效，文本内容\r\n * \t@value size type为text时有效，文本字号\r\n * \t@value isBold type为text时有效，是否加粗\r\n * \t@value w type为fillRect、image时有效，宽\r\n * \t@value h type为fillRect、image时有效，高\r\n * \t@value url type为image时有效，图片路径\r\n * @property {Boolean} debug 是否调试模式，调试模式下onPostMessage不会触发，即接收到不到change事件\r\n * @event {Function} ready 初始化完成，返回livePusher的宽高等信息\r\n * @event {Function} snapshot 开始拍照\r\n * @event {Function} change 拍摄完成，返回当前拍摄的base64\r\n */\nvar _default2 = {\n  props: {\n    watermark: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    },\n    debug: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data: function data() {\n    return {\n      images: [],\n      livePusherData: null\n    };\n  },\n  filters: {\n    filterStyle: function filterStyle(value) {\n      var style = {};\n      switch (value.type) {\n        case 'text':\n          style = {\n            color: value.color,\n            fontSize: value.size + 'px',\n            fontWeight: value.isBold ? 'bold' : 'normal'\n          };\n          break;\n        case 'fillRect':\n          style = {\n            backgroundColor: value.color,\n            width: value.w + 'px',\n            height: value.h + 'px'\n          };\n          break;\n        case 'image':\n          style = {\n            width: value.w + 'px',\n            height: value.h + 'px'\n          };\n          break;\n      }\n      return style;\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n    this.context = uni.createLivePusherContext(\"livePusher\", this);\n    var query = uni.createSelectorQuery().in(this);\n    // 有时会出现获取到的宽高为0，加了个延时\n    setTimeout(function () {\n      query.select(\"#livePusher\").boundingClientRect(function (data) {\n        _this.context.startPreview({});\n        _this.livePusherData = data;\n        _this.$emit(\"ready\", data);\n      }).exec();\n    }, 300);\n\n    /**\r\n     * \t使用webview组件引用html，在html页面中使用console编辑器不会打印\r\n     * \t使用plus.webview的方式，可以打印调试，但是接收不到postMessage\r\n     * \t所以调试时可以使用plus.webview的方式\r\n     */\n    if (this.debug) {\n      this.wv = plus.webview.create(\"\", \"custom-webview\", {\n        top: '-200px',\n        left: 0,\n        width: '1px',\n        height: '200px',\n        background: 'transparent'\n      }, {});\n      this.wv.loadURL(\"/uni_modules/watasi-watermark-camera/hybrid/html/watermark.html\");\n      plus.webview.currentWebview().append(this.wv);\n    }\n  },\n  methods: {\n    onPostMessage: function onPostMessage(e) {\n      var base64 = e.detail.data[0].base64;\n      this.onChange(base64);\n    },\n    onChange: function onChange(path) {\n      this.images.push(path);\n      this.$emit(\"change\", path);\n      this.context.startPreview({});\n    },\n    // 拍照\n    snapshot: function snapshot() {\n      var _this2 = this;\n      this.context.snapshot({\n        success: function success(e) {\n          if (e.errMsg === \"snapshot:ok\") {\n            _this2.$emit(\"snapshot\", null);\n            _this2.context.stopPreview({});\n            if (_this2.watermark.length === 0) {\n              _this2.onChange(e.message.tempImagePath);\n            } else {\n              _this2.urlTobase64(e.message.tempImagePath, function (base64) {\n                var param = {\n                  base64: base64,\n                  watermark: _this2.watermark,\n                  width: e.message.width,\n                  height: e.message.height,\n                  maxWidth: 750,\n                  liveWidth: _this2.livePusherData.width,\n                  liveHeight: _this2.livePusherData.height\n                };\n                if (_this2.debug) {\n                  // 使用plus.webview\n                  _this2.wv.evalJS(\"setImage(\".concat(JSON.stringify(param), \")\"));\n                } else {\n                  _this2.$refs.webview.evalJs(\"setImage(\".concat(JSON.stringify(param), \")\"));\n                }\n              });\n            }\n          } else {\n            uni.showToast({\n              title: '拍照失败',\n              icon: 'none'\n            });\n          }\n        }\n      });\n    },\n    // 切换前后摄像头\n    switchCamera: function switchCamera() {\n      this.context.switchCamera({\n        success: function success(e) {\n          __f__(\"log\", \"livePusher.switchCamera:\" + JSON.stringify(e), \" at uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue:232\");\n        }\n      });\n    },\n    previewImage: function previewImage() {\n      uni.previewImage({\n        current: this.images.length - 1,\n        urls: this.images\n      });\n    },\n    // 临时地址转base64\n    urlTobase64: function urlTobase64(url, callback) {\n      plus.io.resolveLocalFileSystemURL(url, function (entry) {\n        entry.file(function (file) {\n          var fileReader = new plus.io.FileReader();\n          fileReader.onloadend = function (e) {\n            callback && callback(e.target.result);\n          };\n          fileReader.readAsDataURL(file);\n        });\n      });\n    }\n  }\n};\nexports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvd2F0YXNpLXdhdGVybWFyay1jYW1lcmEvY29tcG9uZW50cy93YXRhc2ktd2F0ZXJtYXJrLWNhbWVyYS93YXRhc2ktd2F0ZXJtYXJrLWNhbWVyYS5udnVlIl0sIm5hbWVzIjpbInByb3BzIiwid2F0ZXJtYXJrIiwidHlwZSIsImRlZmF1bHQiLCJkZWJ1ZyIsImRhdGEiLCJpbWFnZXMiLCJsaXZlUHVzaGVyRGF0YSIsImZpbHRlcnMiLCJmaWx0ZXJTdHlsZSIsInN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIm1vdW50ZWQiLCJzZXRUaW1lb3V0IiwicXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJleGVjIiwidG9wIiwibGVmdCIsImJhY2tncm91bmQiLCJwbHVzIiwibWV0aG9kcyIsIm9uUG9zdE1lc3NhZ2UiLCJvbkNoYW5nZSIsInNuYXBzaG90Iiwic3VjY2VzcyIsImJhc2U2NCIsIm1heFdpZHRoIiwibGl2ZVdpZHRoIiwibGl2ZUhlaWdodCIsInVuaSIsInRpdGxlIiwiaWNvbiIsInN3aXRjaENhbWVyYSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwidXJsVG9iYXNlNjQiLCJlbnRyeSIsImZpbGVSZWFkZXIiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkEsZ0JBbUJBO0VBQ0FBO0lBQ0FDO01BQ0FDO01BQ0FDO1FBQUE7TUFBQTtJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7RUFDQTtFQUVBRTtJQUNBO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUVBQztJQUNBQztNQUNBO01BQ0E7UUFDQTtVQUNBQztZQUNBQztZQUNBQztZQUNBQztVQUNBO1VBQ0E7UUFDQTtVQUNBSDtZQUNBSTtZQUNBQztZQUNBQztVQUNBO1VBQ0E7UUFDQTtVQUNBTjtZQUNBSztZQUNBQztVQUNBO1VBQ0E7TUFBQTtNQUVBO0lBQ0E7RUFDQTtFQUNBQztJQUFBO0lBRUE7SUFDQTtJQUNBO0lBQ0FDO01BQ0FDLE1BQ0FDLHNCQUNBQztRQUNBO1FBQ0E7UUFDQTtNQUNBLEdBQ0FDO0lBQ0E7O0lBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNBO01BQ0E7UUFDQUM7UUFDQUM7UUFDQVQ7UUFDQUM7UUFDQVM7TUFDQTtNQUNBO01BQ0FDO0lBQ0E7RUFNQTtFQUVBQztJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFBQTtNQUNBO1FBQ0FDO1VBQ0E7WUFDQTtZQUNBO1lBQ0E7Y0FDQTtZQUNBO2NBQ0E7Z0JBQ0E7a0JBQ0FDO2tCQUNBL0I7a0JBQ0FjO2tCQUNBQztrQkFDQWlCO2tCQUNBQztrQkFDQUM7Z0JBQ0E7Z0JBQ0E7a0JBQ0E7a0JBQ0E7Z0JBQ0E7a0JBQ0E7Z0JBQ0E7Y0FDQTtZQUNBO1VBQ0E7WUFDQUM7Y0FDQUM7Y0FDQUM7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTtRQUNBUjtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUFTO01BQ0FKO1FBQ0FLO1FBQ0FDO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0FqQjtRQUNBa0I7VUFDQTtVQUNBQztZQUNBQztVQUNBO1VBQ0FEO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDRCIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwid2F0YXNpLXdhdGVybWFyay1jYW1lcmFcIj5cclxuXHRcdDwhLS0gI2lmZGVmIEFQUC1OVlVFIC0tPlxyXG5cdFx0PHdlYi12aWV3XHJcblx0XHRcdHNyYz1cIi91bmlfbW9kdWxlcy93YXRhc2ktd2F0ZXJtYXJrLWNhbWVyYS9oeWJyaWQvaHRtbC93YXRlcm1hcmsuaHRtbFwiXHJcblx0XHRcdHJlZj1cIndlYnZpZXdcIlxyXG5cdFx0XHR2LWlmPVwiIWRlYnVnXCJcclxuXHRcdFx0QG9uUG9zdE1lc3NhZ2U9XCJvblBvc3RNZXNzYWdlXCJcclxuXHRcdD48L3dlYi12aWV3PlxyXG5cdFx0XHJcblx0XHQ8bGl2ZS1wdXNoZXJcclxuXHRcdFx0aWQ9XCJsaXZlUHVzaGVyXCJcclxuXHRcdFx0cmVmPVwibGl2ZVB1c2hlclwiXHJcblx0XHRcdGNsYXNzPVwibGl2ZS1wdXNoZXJcIlxyXG5cdFx0XHRtb2RlPVwiRkhEXCJcclxuXHRcdFx0YXNwZWN0PVwiOToxNlwiXHJcblx0XHRcdDpiZWF1dHk9XCIwXCJcclxuXHRcdFx0OndoaXRlbmVzcz1cIjBcIlxyXG5cdFx0XHQ6bXV0ZWQ9XCJ0cnVlXCJcclxuXHRcdC8+XHJcblx0XHRcclxuXHRcdDwhLS0g5riy5p+T5rC05Y2wIC0tPlxyXG5cdFx0PHZpZXdcclxuXHRcdFx0di1mb3I9XCIoaXRlbSwgaWR4KSBpbiB3YXRlcm1hcmtcIlxyXG5cdFx0XHQ6a2V5PVwiaWR4XCJcclxuXHRcdFx0OnN0eWxlPVwie1xyXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG5cdFx0XHRcdHpJbmRleDogOTksXHJcblx0XHRcdFx0bGVmdDogaXRlbS54ICsgJ3B4JyxcclxuXHRcdFx0XHR0b3A6IGl0ZW0ueSArICdweCcsXHJcblx0XHRcdH1cIlxyXG5cdFx0PlxyXG5cdFx0XHQ8dGV4dFxyXG5cdFx0XHRcdGNsYXNzPVwiaXRcIlxyXG5cdFx0XHRcdDpzdHlsZT1cIml0ZW0gfCBmaWx0ZXJTdHlsZVwiXHJcblx0XHRcdFx0di1pZj1cIml0ZW0udHlwZSAhPSAnaW1hZ2UnXCJcclxuXHRcdFx0Pnt7IGl0ZW0udHlwZSA9PSAndGV4dCcgPyBpdGVtLnRleHQgOiAnJyB9fTwvdGV4dD5cclxuXHRcdFx0XHJcblx0XHRcdDxpbWFnZVxyXG5cdFx0XHRcdHYtZWxzZVxyXG5cdFx0XHRcdDpzdHlsZT1cIml0ZW0gfCBmaWx0ZXJTdHlsZVwiXHJcblx0XHRcdFx0OnNyYz1cIml0ZW0udXJsXCJcclxuXHRcdFx0XHRtb2RlPVwic2NhbGVUb0ZpbGxcIlxyXG5cdFx0XHQ+PC9pbWFnZT5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b29sYmFyXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdFwiPlxyXG5cdFx0XHRcdDwhLS0gPGltYWdlXHJcblx0XHRcdFx0XHRjbGFzcz1cImltYWdlXCJcclxuXHRcdFx0XHRcdDpzcmM9XCJpbWFnZXNbaW1hZ2VzLmxlbmd0aCAtIDFdXCJcclxuXHRcdFx0XHRcdG1vZGU9XCJhc3BlY3RGaWxsXCJcclxuXHRcdFx0XHRcdHYtaWY9XCJpbWFnZXMubGVuZ3RoXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cInByZXZpZXdJbWFnZVwiXHJcblx0XHRcdFx0PjwvaW1hZ2U+IC0tPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic25hcHNob3RcIiBAY2xpY2s9XCJzbmFwc2hvdFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2lyY2xlXCI+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic3dpdGNoXCIgQGNsaWNrPVwic3dpdGNoQ2FtZXJhXCI+XHJcblx0XHRcdFx0PGltYWdlXHJcblx0XHRcdFx0XHRzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQVlBQUFCWEF2bUhBQUFBQVhOU1IwSUFyczRjNlFBQUJPWkpSRUZVYUVQdG1WbW9WV1VZaHArWEpwb2pzS0Jzb0l2cW9pekl1akpRU3FYQmk1S1N0TkhtdVlqU0tFaVJKZ3VoSkFvaktxSjVza2thVFNxQ0Frc01JU3FpaXlhb2JMaHBvdDdXWjJ2SDhuZXR2WVo5OW9rRGZyQTVaNS96ZjhPNy9tOWVZb3lUeHJqOWJBYndmOS9nMEc3QTlvN0Fmc0Jmd0dlU2Zoc0cyQkVCWUh0TDRPajhNeWszZkZ4aThLZkF4OERud051U25oNEpRQU1Cc0gwWWNCNXdBcEFhWEdmZkI4Q2p3R09TdnF3N1hQWC9UZ0JzSHdSY21odmZWWGVQNzhjQUFWd25LWDV2UmEwQjJBNFhlVEIzazFiS2FnNnZCZVpLV3QxR2FDc0F0bWZsVDZ1ZmpqZUFaeUp3Z1oyQUNPYmV6Mm5Ba1RVR25penB5YVlnR2dPd2ZUdHdWWVhnOE9XVndIT1N2dXVuM1BZQndFemdKT0RRaXJQekpkM2FCRVFqQUxidkFDNHJFZmdyY0ZyWGpHTDdSR0Fwc0VlSjdHbVNYcXNEVVF2QTlnMlprQVVsZ3Q0Q1prbjZ0azVKelkxTXlETFlYVURFVmtvVEpIM1VqNzh2QU5zSEErOENPeVJDbGtpcWNxZldlUEk2Y2k5d1pzTDhJWENjcEc4NnBWSGJEd0JuSk14ckpSM1Myc29HRExidkJpNUlqaTRISXJEL0xCTlJlUU8yandGV2xEQ05rL1I5QTN0YUg4a2UyTDVaY0s4RHRpc3dueVBwdnRZM1VQRTBycFlVMldob1pIc1JjSDJ1WUo2a3hhMWpJRXVaNGZQUnQreFpZSDVJMHVsRHM3d2cyUGJYd0JPU3JxalRWK3BDdGs4QkhrbVlXeFdZT3NVMW1XbVNwSGVheUtnQ3NBdzR0eUFnOHYzK2d6UmRUWXpwY3FZS3dQdkE0UVdCS3lVZDFVWEJvRHkySjB0YTFUaUliZStUWjRMdEMwdzNTdW9GMXFBMk5lYTNmVkZlNU82UmRHRmxHcldkVnRxb3ZrVmFXUGl5cmsyejFkamE1S0R0NDRFWENuKytWdEl0cWJ3TkxtVDdabUIrUTJWekpLVUIzcEMxMlRIYlVTaGZBWFpQT0RiUi9WOE0ySDRZbUYyajRocEp0elV6bzlzcDI3c0NMeWN4MkJNV2MvVjBTZEdIYmFBaWdQRDVZQ3hycXVMc25kbkVkSGszczVwelpkUGVVM203WGNVVTlTbjZvNWl0Tjk0TDJUNHd2N3E5RSs3bGttTHVIU3JaWGdKYzJVQkp0Tmt6SlAyK1NScTFQUlY0dFNCa1RkYVJSbS9lZDFCcG9MVDJpTzAzazBPVEM5L1RWTG93MG10VkhaZ0xSQVAxRXpCRlVvQVlOYks5VzlaYWZ3RnNXMUM2V05LODFJaCszV2lrMWpXU29wMGRWYklkMDE5TWdVV2FLU2xtN1kyb2RpSWJWY3R6WmJaanZwNlM2QjR2NmF2T0FHd2ZDL3doNmZWaGdySjlCUEJlb21OWk5wV2RYNmEzMFEza0c3aFlsL3d0S2ZMMFVNajJYc0N6V1FXT2pWK1JKbGJ0aTJvQjJCNmZGWldYc2wxUEROOUJxeVZOSEdrRXRuZk8xaXdSYjhYTUUyb3FuMzc4czI2bzN4cUl3aklqTVhpcHBMSTFTMmRjdHA4djBSUGo1ZFRPUTMxWVl6czJCZmVYV0JZWllYWVVrODVXL3lzL2ZQNm1iR05kMXE1SHNYcXhuL3hhRjhwQlhKSXZvRkpaTWR5ZlZhZWt5Z0RiRndQUlNNYjZNYVVGa29wZGNLbVlSZ0J5RUZGRU5tbG5jNm1QQTlGZ3JaQVVCYWlTc3M1M20zQ0xmTFZZTldNM01yNDJCbElyYk1jeUszYVdXL1N4TWZiKzBjZi9EUHhTK0VReW1KNS9ZdGxiUmRFaWxHMENCN3VCSHJmdEtEQUJvamh5RGhJR1BkNVBZcDNTZGxocTdFSkZDMjN2a3J0VGFYSHBnQ2FXQ0l1NkxBMDZBU2pjUnZqeW5PeGR3S2sxYmxXRktReVBQTi9xcFVaUjJFQUFDa0NpT3ArZHZ5dUxaVmg4cXVJa1hsN0V5bkpWWGNBM3Vja1JBVkNtS0Z0Tnhqd2JRTGJLM3FmOWtMMWZXSjhWdi9WTmpHcHpabWdBMmhneHlObk5BQVo1ZWlQQk8rWnY0QjlmbG5OQUdrMURDUUFBQUFCSlJVNUVya0pnZ2c9PVwiXHJcblx0XHRcdFx0XHRtb2RlPVwid2lkdGhGaXhcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJpY29uXCJcclxuXHRcdFx0XHQ+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLyoqXHJcbiAqIOawtOWNsOebuOaculxyXG4gKiBAZGVzY3JpcHRpb24gXHJcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdhdGVybWFyayDmsLTljbBcclxuICogXHRAdmFsdWUgdHlwZSB0ZXh0KOaWh+acrCnjgIFpbWFnZSjlm77niYcp44CBZmlsbFJlY3Qo55+p5b2iKVxyXG4gKiBcdEB2YWx1ZSB4IHjovbTlnZDmoIdcclxuICogXHRAdmFsdWUgeSB56L205Z2Q5qCHXHJcbiAqIFx0QHZhbHVlIGNvbG9yIHR5cGXkuLp0ZXh044CBZmlsbFJlY3Tml7bmnInmlYhcclxuICogXHRAdmFsdWUgdGV4dCB0eXBl5Li6dGV4dOaXtuacieaViO+8jOaWh+acrOWGheWuuVxyXG4gKiBcdEB2YWx1ZSBzaXplIHR5cGXkuLp0ZXh05pe25pyJ5pWI77yM5paH5pys5a2X5Y+3XHJcbiAqIFx0QHZhbHVlIGlzQm9sZCB0eXBl5Li6dGV4dOaXtuacieaViO+8jOaYr+WQpuWKoOeyl1xyXG4gKiBcdEB2YWx1ZSB3IHR5cGXkuLpmaWxsUmVjdOOAgWltYWdl5pe25pyJ5pWI77yM5a69XHJcbiAqIFx0QHZhbHVlIGggdHlwZeS4umZpbGxSZWN044CBaW1hZ2Xml7bmnInmlYjvvIzpq5hcclxuICogXHRAdmFsdWUgdXJsIHR5cGXkuLppbWFnZeaXtuacieaViO+8jOWbvueJh+i3r+W+hFxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRlYnVnIOaYr+WQpuiwg+ivleaooeW8j++8jOiwg+ivleaooeW8j+S4i29uUG9zdE1lc3NhZ2XkuI3kvJrop6blj5HvvIzljbPmjqXmlLbliLDkuI3liLBjaGFuZ2Xkuovku7ZcclxuICogQGV2ZW50IHtGdW5jdGlvbn0gcmVhZHkg5Yid5aeL5YyW5a6M5oiQ77yM6L+U5ZuebGl2ZVB1c2hlcueahOWuvemrmOetieS/oeaBr1xyXG4gKiBAZXZlbnQge0Z1bmN0aW9ufSBzbmFwc2hvdCDlvIDlp4vmi43nhadcclxuICogQGV2ZW50IHtGdW5jdGlvbn0gY2hhbmdlIOaLjeaRhOWujOaIkO+8jOi/lOWbnuW9k+WJjeaLjeaRhOeahGJhc2U2NFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHByb3BzOiB7XHJcblx0XHR3YXRlcm1hcms6IHtcclxuXHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdGRlZmF1bHQ6ICgpID0+IFtdXHJcblx0XHR9LFxyXG5cdFx0ZGVidWc6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpbWFnZXM6IFtdLFxyXG5cdFx0XHRsaXZlUHVzaGVyRGF0YTogbnVsbFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0ZmlsdGVyczoge1xyXG5cdFx0ZmlsdGVyU3R5bGUodmFsdWUpIHtcclxuXHRcdFx0bGV0IHN0eWxlID0ge31cclxuXHRcdFx0c3dpdGNoKHZhbHVlLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRcdHN0eWxlID0ge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFsdWUuY29sb3IsXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiB2YWx1ZS5zaXplICsgJ3B4JyxcclxuXHRcdFx0XHRcdFx0Zm9udFdlaWdodDogdmFsdWUuaXNCb2xkID8gJ2JvbGQnIDogJ25vcm1hbCcsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdmaWxsUmVjdCc6XHJcblx0XHRcdFx0XHRzdHlsZSA9IHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB2YWx1ZS5jb2xvcixcclxuXHRcdFx0XHRcdFx0d2lkdGg6IHZhbHVlLncgKyAncHgnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHZhbHVlLmggKyAncHgnLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRjYXNlICdpbWFnZSc6XHJcblx0XHRcdFx0XHRzdHlsZSA9IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IHZhbHVlLncgKyAncHgnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IHZhbHVlLmggKyAncHgnLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gc3R5bGVcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdHRoaXMuY29udGV4dCA9IHVuaS5jcmVhdGVMaXZlUHVzaGVyQ29udGV4dChcImxpdmVQdXNoZXJcIiwgdGhpcylcclxuXHRcdGNvbnN0IHF1ZXJ5ID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKTtcclxuXHRcdC8vIOacieaXtuS8muWHuueOsOiOt+WPluWIsOeahOWuvemrmOS4ujDvvIzliqDkuobkuKrlu7bml7ZcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRxdWVyeVxyXG5cdFx0XHRcdC5zZWxlY3QoXCIjbGl2ZVB1c2hlclwiKVxyXG5cdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoKGRhdGEpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY29udGV4dC5zdGFydFByZXZpZXcoe30pXHJcblx0XHRcdFx0XHR0aGlzLmxpdmVQdXNoZXJEYXRhID0gZGF0YVxyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdChcInJlYWR5XCIsIGRhdGEpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuZXhlYygpO1xyXG5cdFx0fSwgMzAwKVxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIFx05L2/55Sod2Vidmlld+e7hOS7tuW8leeUqGh0bWzvvIzlnKhodG1s6aG16Z2i5Lit5L2/55SoY29uc29sZee8lui+keWZqOS4jeS8muaJk+WNsFxyXG5cdFx0ICogXHTkvb/nlKhwbHVzLndlYnZpZXfnmoTmlrnlvI/vvIzlj6/ku6XmiZPljbDosIPor5XvvIzkvYbmmK/mjqXmlLbkuI3liLBwb3N0TWVzc2FnZVxyXG5cdFx0ICogXHTmiYDku6XosIPor5Xml7blj6/ku6Xkvb/nlKhwbHVzLndlYnZpZXfnmoTmlrnlvI9cclxuXHRcdCAqL1xyXG5cdFx0aWYodGhpcy5kZWJ1Zykge1xyXG5cdFx0XHR0aGlzLnd2ID0gcGx1cy53ZWJ2aWV3LmNyZWF0ZShcIlwiLCBcImN1c3RvbS13ZWJ2aWV3XCIsIHtcclxuXHRcdFx0XHR0b3A6ICctMjAwcHgnLFxyXG5cdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0d2lkdGg6ICcxcHgnLFxyXG5cdFx0XHRcdGhlaWdodDogJzIwMHB4JyxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnIFxyXG5cdFx0XHR9LCB7fSlcclxuXHRcdFx0dGhpcy53di5sb2FkVVJMKFwiL3VuaV9tb2R1bGVzL3dhdGFzaS13YXRlcm1hcmstY2FtZXJhL2h5YnJpZC9odG1sL3dhdGVybWFyay5odG1sXCIpXHJcblx0XHRcdHBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmFwcGVuZCh0aGlzLnd2KVxyXG5cdFx0fVxyXG5cdFx0Ly8gI2VuZGlmXHJcblx0XHRcclxuXHRcdC8vICNpZm5kZWYgQVBQLU5WVUVcclxuXHRcdHRocm93IFwi6K+35ZyobnZ1ZeS4reS9v+eUqFwiXHJcblx0XHQvLyAjZW5kaWZcclxuXHR9LFxyXG5cdFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdG9uUG9zdE1lc3NhZ2UoZSkge1xyXG5cdFx0XHRjb25zdCBiYXNlNjQgPSBlLmRldGFpbC5kYXRhWzBdLmJhc2U2NFxyXG5cdFx0XHR0aGlzLm9uQ2hhbmdlKGJhc2U2NClcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdG9uQ2hhbmdlKHBhdGgpIHtcclxuXHRcdFx0dGhpcy5pbWFnZXMucHVzaChwYXRoKVxyXG5cdFx0XHR0aGlzLiRlbWl0KFwiY2hhbmdlXCIsIHBhdGgpXHJcblx0XHRcdHRoaXMuY29udGV4dC5zdGFydFByZXZpZXcoe30pXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDmi43nhadcclxuXHRcdHNuYXBzaG90KCkge1xyXG5cdFx0XHR0aGlzLmNvbnRleHQuc25hcHNob3Qoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IChlKSA9PiB7XHJcblx0XHRcdFx0XHRpZihlLmVyck1zZyA9PT0gXCJzbmFwc2hvdDpva1wiKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoXCJzbmFwc2hvdFwiLCBudWxsKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRleHQuc3RvcFByZXZpZXcoe30pXHJcblx0XHRcdFx0XHRcdGlmKHRoaXMud2F0ZXJtYXJrLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2UoZS5tZXNzYWdlLnRlbXBJbWFnZVBhdGgpXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy51cmxUb2Jhc2U2NChlLm1lc3NhZ2UudGVtcEltYWdlUGF0aCwgKGJhc2U2NCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHBhcmFtID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYXNlNjQ6IGJhc2U2NCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2F0ZXJtYXJrOiB0aGlzLndhdGVybWFyayxcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IGUubWVzc2FnZS53aWR0aCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBlLm1lc3NhZ2UuaGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogNzUwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXZlV2lkdGg6IHRoaXMubGl2ZVB1c2hlckRhdGEud2lkdGgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpdmVIZWlnaHQ6IHRoaXMubGl2ZVB1c2hlckRhdGEuaGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYodGhpcy5kZWJ1Zykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyDkvb/nlKhwbHVzLndlYnZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy53di5ldmFsSlMoYHNldEltYWdlKCR7SlNPTi5zdHJpbmdpZnkocGFyYW0pfSlgKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy4kcmVmcy53ZWJ2aWV3LmV2YWxKcyhgc2V0SW1hZ2UoJHtKU09OLnN0cmluZ2lmeShwYXJhbSl9KWApXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmi43nhaflpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDliIfmjaLliY3lkI7mkYTlg4/lpLRcclxuXHRcdHN3aXRjaENhbWVyYSgpIHtcclxuXHRcdFx0dGhpcy5jb250ZXh0LnN3aXRjaENhbWVyYSh7XHJcblx0XHRcdFx0c3VjY2VzczogKGUpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwibGl2ZVB1c2hlci5zd2l0Y2hDYW1lcmE6XCIgKyBKU09OLnN0cmluZ2lmeShlKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHByZXZpZXdJbWFnZSgpIHtcclxuXHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0Y3VycmVudDogdGhpcy5pbWFnZXMubGVuZ3RoIC0gMSxcclxuXHRcdFx0XHR1cmxzOiB0aGlzLmltYWdlc1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8g5Li05pe25Zyw5Z2A6L2sYmFzZTY0XHJcblx0XHR1cmxUb2Jhc2U2NCh1cmwsIGNhbGxiYWNrKSB7XHJcblx0XHRcdHBsdXMuaW8ucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCh1cmwsIChlbnRyeSkgPT4ge1xyXG5cdFx0XHRcdGVudHJ5LmZpbGUoKGZpbGUpID0+IHtcclxuXHRcdFx0XHRcdGxldCBmaWxlUmVhZGVyID0gbmV3IHBsdXMuaW8uRmlsZVJlYWRlcigpO1xyXG5cdFx0XHRcdFx0ZmlsZVJlYWRlci5vbmxvYWRlbmQgPSAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayhlLnRhcmdldC5yZXN1bHQpXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0ZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4ud2F0YXNpLXdhdGVybWFyay1jYW1lcmEge1xyXG5cdGZsZXg6IDE7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0LmxpdmUtcHVzaGVyIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cdC50b29sYmFyIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0cGFkZGluZzogMCA2OHJweDtcclxuXHRcdC5sZWZ0IHtcclxuXHRcdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0XHQuaW1hZ2Uge1xyXG5cdFx0XHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuc25hcHNob3Qge1xyXG5cdFx0XHR3aWR0aDogMTEwcnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDExMHJweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0LmNpcmNsZSB7XHJcblx0XHRcdFx0d2lkdGg6IDg1cnB4O1xyXG5cdFx0XHRcdGhlaWdodDogODVycHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5zd2l0Y2gge1xyXG5cdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdC5pY29uIHtcclxuXHRcdFx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA1MHJweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 14 */
/*!***********************************************************************************************************************************************************************!*\
  !*** E:/workpace/git/uniPlugin/uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watasi-watermark-camera.nvue?vue&type=style&index=0&lang=scss& */ 15);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watasi_watermark_camera_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/workpace/git/uniPlugin/uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".watasi-watermark-camera": {
    "": {
      "flex": [
        1,
        0,
        0,
        16
      ],
      "position": [
        "relative",
        0,
        0,
        16
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        16
      ]
    }
  },
  ".live-pusher": {
    ".watasi-watermark-camera ": {
      "flex": [
        1,
        0,
        1,
        17
      ]
    }
  },
  ".toolbar": {
    ".watasi-watermark-camera ": {
      "flexDirection": [
        "row",
        0,
        1,
        18
      ],
      "width": [
        "750rpx",
        0,
        1,
        18
      ],
      "height": [
        "200rpx",
        0,
        1,
        18
      ],
      "backgroundColor": [
        "#111111",
        0,
        1,
        18
      ],
      "alignItems": [
        "center",
        0,
        1,
        18
      ],
      "justifyContent": [
        "space-around",
        0,
        1,
        18
      ],
      "paddingTop": [
        0,
        0,
        1,
        18
      ],
      "paddingRight": [
        "68rpx",
        0,
        1,
        18
      ],
      "paddingBottom": [
        0,
        0,
        1,
        18
      ],
      "paddingLeft": [
        "68rpx",
        0,
        1,
        18
      ]
    }
  },
  ".left": {
    ".watasi-watermark-camera .toolbar ": {
      "width": [
        "80rpx",
        0,
        2,
        19
      ]
    }
  },
  ".image": {
    ".watasi-watermark-camera .toolbar .left ": {
      "width": [
        "80rpx",
        0,
        3,
        20
      ],
      "height": [
        "100rpx",
        0,
        3,
        20
      ],
      "borderRadius": [
        "8rpx",
        0,
        3,
        20
      ]
    }
  },
  ".snapshot": {
    ".watasi-watermark-camera .toolbar ": {
      "width": [
        "110rpx",
        0,
        2,
        21
      ],
      "height": [
        "110rpx",
        0,
        2,
        21
      ],
      "borderRadius": [
        50,
        0,
        2,
        21
      ],
      "borderWidth": [
        "2",
        0,
        2,
        21
      ],
      "borderStyle": [
        "solid",
        0,
        2,
        21
      ],
      "borderColor": [
        "#ffffff",
        0,
        2,
        21
      ],
      "alignItems": [
        "center",
        0,
        2,
        21
      ],
      "justifyContent": [
        "center",
        0,
        2,
        21
      ]
    }
  },
  ".circle": {
    ".watasi-watermark-camera .toolbar .snapshot ": {
      "width": [
        "85rpx",
        0,
        3,
        22
      ],
      "height": [
        "85rpx",
        0,
        3,
        22
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        3,
        22
      ],
      "borderRadius": [
        50,
        0,
        3,
        22
      ]
    }
  },
  ".switch": {
    ".watasi-watermark-camera .toolbar ": {
      "width": [
        "80rpx",
        0,
        2,
        23
      ],
      "height": [
        "80rpx",
        0,
        2,
        23
      ],
      "borderRadius": [
        50,
        0,
        2,
        23
      ],
      "backgroundColor": [
        "rgba(255,255,255,0.15)",
        0,
        2,
        23
      ],
      "alignItems": [
        "center",
        0,
        2,
        23
      ],
      "justifyContent": [
        "center",
        0,
        2,
        23
      ]
    }
  },
  ".icon": {
    ".watasi-watermark-camera .toolbar .switch ": {
      "width": [
        "50rpx",
        0,
        3,
        24
      ],
      "height": [
        "50rpx",
        0,
        3,
        24
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */
/*!*********************************************************************************************************!*\
  !*** E:/workpace/git/uniPlugin/pages/template/watermarkCamera.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watermarkCamera.nvue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXliLENBQWdCLHFlQUFHLEVBQUMiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJtYXJrQ2FtZXJhLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVybWFya0NhbWVyYS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/workpace/git/uniPlugin/pages/template/watermarkCamera.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 19);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _watasiWatermarkCamera = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/watasi-watermark-camera/components/watasi-watermark-camera/watasi-watermark-camera.nvue */ 8));\n//\n//\n//\n//\n//\n//\nvar _default = {\n  components: {\n    WatasiWatermarkCamera: _watasiWatermarkCamera.default\n  },\n  data: function data() {\n    return {\n      watermark: []\n    };\n  },\n  methods: {\n    ready: function ready(e) {\n      var height = e.height,\n        width = e.width;\n      this.watermark = [{\n        type: 'text',\n        x: uni.upx2px(24),\n        y: height - uni.upx2px(150),\n        color: '#fff',\n        size: uni.upx2px(68),\n        text: \"14:04\",\n        isBold: true\n      }, {\n        type: \"fillRect\",\n        x: uni.upx2px(232),\n        y: height - uni.upx2px(150),\n        w: uni.upx2px(4),\n        h: uni.upx2px(78),\n        color: \"#f60\"\n      }, {\n        type: 'text',\n        x: uni.upx2px(260),\n        y: height - uni.upx2px(150),\n        color: '#fff',\n        size: uni.upx2px(30),\n        text: \"2024-09-09\"\n      }, {\n        type: 'text',\n        x: uni.upx2px(260),\n        y: height - uni.upx2px(100),\n        color: '#fff',\n        size: uni.upx2px(30),\n        text: \"星期一\"\n      }, {\n        type: 'text',\n        x: uni.upx2px(24),\n        y: height - uni.upx2px(48),\n        color: '#fff',\n        size: uni.upx2px(28),\n        text: '江苏省苏州市科技城软件大厦'\n      }, {\n        type: 'image',\n        url: 'https://bpic.588ku.com/element_origin_min_pic/00/15/94/7556aeca8408555.jpg',\n        x: width - uni.upx2px(84),\n        y: height - uni.upx2px(84),\n        w: uni.upx2px(60),\n        h: uni.upx2px(60)\n      }];\n    },\n    snapshot: function snapshot() {\n      uni.showLoading({\n        mask: true\n      });\n    },\n    change: function change(base64) {\n      __f__(\"log\", base64, \" at pages/template/watermarkCamera.nvue:75\");\n      __f__(\"log\", \"执行上传操作\", \" at pages/template/watermarkCamera.nvue:76\");\n      uni.hideLoading();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGVtcGxhdGUvd2F0ZXJtYXJrQ2FtZXJhLm52dWUiXSwibmFtZXMiOlsiY29tcG9uZW50cyIsIldhdGFzaVdhdGVybWFya0NhbWVyYSIsImRhdGEiLCJ3YXRlcm1hcmsiLCJtZXRob2RzIiwicmVhZHkiLCJ3aWR0aCIsInR5cGUiLCJ4IiwieSIsImNvbG9yIiwic2l6ZSIsInRleHQiLCJpc0JvbGQiLCJ3IiwiaCIsInVybCIsInNuYXBzaG90IiwidW5pIiwibWFzayIsImNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BOzs7Ozs7O2VBQ0E7RUFDQUE7SUFDQUM7RUFDQTtFQUNBQztJQUNBO01BQ0FDO0lBQ0E7RUFDQTtFQUVBQztJQUNBQztNQUNBO1FBQUFDO01BQ0E7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtRQUNBTjtRQUNBQztRQUNBQztRQUNBSztRQUNBQztRQUNBTDtNQUNBO1FBQ0FIO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7UUFDQUw7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtRQUNBTDtRQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO1FBQ0FMO1FBQ0FTO1FBQ0FSO1FBQ0FDO1FBQ0FLO1FBQ0FDO01BQ0E7SUFDQTtJQUVBRTtNQUNBQztRQUNBQztNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BQ0FGO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ3YXRlcm1hcmstcGFnZVwiPlxyXG5cdFx0PHdhdGFzaS13YXRlcm1hcmstY2FtZXJhIDp3YXRlcm1hcms9XCJ3YXRlcm1hcmtcIiBAcmVhZHk9XCJyZWFkeVwiIEBzbmFwc2hvdD1cInNuYXBzaG90XCIgQGNoYW5nZT1cImNoYW5nZVwiIC8+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgV2F0YXNpV2F0ZXJtYXJrQ2FtZXJhIGZyb20gXCJAL3VuaV9tb2R1bGVzL3dhdGFzaS13YXRlcm1hcmstY2FtZXJhL2NvbXBvbmVudHMvd2F0YXNpLXdhdGVybWFyay1jYW1lcmEvd2F0YXNpLXdhdGVybWFyay1jYW1lcmEubnZ1ZVwiXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRXYXRhc2lXYXRlcm1hcmtDYW1lcmEsXHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR3YXRlcm1hcms6IFtdXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0cmVhZHkoZSkge1xyXG5cdFx0XHRcdGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gZVxyXG5cdFx0XHRcdHRoaXMud2F0ZXJtYXJrID0gW3tcclxuXHRcdFx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdHg6IHVuaS51cHgycHgoMjQpLFxyXG5cdFx0XHRcdFx0eTogaGVpZ2h0IC0gdW5pLnVweDJweCgxNTApLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdFx0XHRcdHNpemU6IHVuaS51cHgycHgoNjgpLFxyXG5cdFx0XHRcdFx0dGV4dDogXCIxNDowNFwiLFxyXG5cdFx0XHRcdFx0aXNCb2xkOiB0cnVlXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0dHlwZTogXCJmaWxsUmVjdFwiLFxyXG5cdFx0XHRcdFx0eDogdW5pLnVweDJweCgyMzIpLFxyXG5cdFx0XHRcdFx0eTogaGVpZ2h0IC0gdW5pLnVweDJweCgxNTApLFxyXG5cdFx0XHRcdFx0dzogdW5pLnVweDJweCg0KSxcclxuXHRcdFx0XHRcdGg6IHVuaS51cHgycHgoNzgpLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwiI2Y2MFwiXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0dHlwZTogJ3RleHQnLFxyXG5cdFx0XHRcdFx0eDogdW5pLnVweDJweCgyNjApLFxyXG5cdFx0XHRcdFx0eTogaGVpZ2h0IC0gdW5pLnVweDJweCgxNTApLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdFx0XHRcdHNpemU6IHVuaS51cHgycHgoMzApLFxyXG5cdFx0XHRcdFx0dGV4dDogXCIyMDI0LTA5LTA5XCIsXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0dHlwZTogJ3RleHQnLFxyXG5cdFx0XHRcdFx0eDogdW5pLnVweDJweCgyNjApLFxyXG5cdFx0XHRcdFx0eTogaGVpZ2h0IC0gdW5pLnVweDJweCgxMDApLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICcjZmZmJyxcclxuXHRcdFx0XHRcdHNpemU6IHVuaS51cHgycHgoMzApLFxyXG5cdFx0XHRcdFx0dGV4dDogXCLmmJ/mnJ/kuIBcIlxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdHg6IHVuaS51cHgycHgoMjQpLFxyXG5cdFx0XHRcdFx0eTogaGVpZ2h0IC0gdW5pLnVweDJweCg0OCksXHJcblx0XHRcdFx0XHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0XHRcdFx0c2l6ZTogdW5pLnVweDJweCgyOCksXHJcblx0XHRcdFx0XHR0ZXh0OiAn5rGf6IuP55yB6IuP5bee5biC56eR5oqA5Z+O6L2v5Lu25aSn5Y6mJ1xyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXHJcblx0XHRcdFx0XHR1cmw6ICdodHRwczovL2JwaWMuNTg4a3UuY29tL2VsZW1lbnRfb3JpZ2luX21pbl9waWMvMDAvMTUvOTQvNzU1NmFlY2E4NDA4NTU1LmpwZycsXHJcblx0XHRcdFx0XHR4OiB3aWR0aCAtIHVuaS51cHgycHgoODQpLFxyXG5cdFx0XHRcdFx0eTogaGVpZ2h0IC0gdW5pLnVweDJweCg4NCksXHJcblx0XHRcdFx0XHR3OiB1bmkudXB4MnB4KDYwKSxcclxuXHRcdFx0XHRcdGg6IHVuaS51cHgycHgoNjApLFxyXG5cdFx0XHRcdH1dXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzbmFwc2hvdCgpIHtcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0bWFzazogdHJ1ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRjaGFuZ2UoYmFzZTY0KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coYmFzZTY0KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuaJp+ihjOS4iuS8oOaTjeS9nFwiKTtcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC53YXRlcm1hcmstcGFnZSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
/*!******************************************************************************************************************!*\
  !*** E:/workpace/git/uniPlugin/pages/template/watermarkCamera.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watermarkCamera.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 21);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermarkCamera_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/workpace/git/uniPlugin/pages/template/watermarkCamera.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".watermark-page": {
    "": {
      "flex": [
        1,
        0,
        0,
        16
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);