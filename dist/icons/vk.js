(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vk = __webpack_require__(12);

	var _vk2 = _interopRequireDefault(_vk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vk2.default;

/***/ },

/***/ 12:
/***/ function(module, exports) {

	module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\"><path d=\"M7.828 12.526h.957s.288-.032.436-.19c.137-.147.133-.42.133-.42s-.02-1.284.576-1.473c.587-.187 1.34 1.24 2.14 1.788.604.416 1.063.326 1.063.326l2.137-.03s1.117-.07.587-.948c-.043-.072-.308-.65-1.588-1.838-1.34-1.244-1.162-1.043.452-3.194.983-1.31 1.376-2.11 1.253-2.452-.117-.326-.84-.24-.84-.24l-2.406.015s-.18-.025-.31.054c-.13.077-.213.258-.213.258s-.38 1.013-.89 1.876c-1.07 1.82-1.5 1.915-1.674 1.802-.407-.264-.305-1.058-.305-1.622 0-1.763.267-2.498-.52-2.688-.263-.063-.455-.105-1.124-.112-.86-.01-1.585.003-1.996.204-.274.134-.485.433-.357.45.16.02.52.097.71.357.248.335.24 1.088.24 1.088s.14 2.075-.33 2.333c-.326.177-.77-.184-1.726-1.834-.49-.845-.858-1.78-.858-1.78s-.072-.174-.2-.268c-.153-.113-.368-.15-.368-.15L.52 3.855s-.342.01-.468.16c-.112.132-.01.406-.01.406s1.79 4.187 3.818 6.298c1.858 1.935 3.968 1.808 3.968 1.808z\"></path></svg>"

/***/ }

/******/ })
});
;