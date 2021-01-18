 // 基于webpack的打包结果理解module.exports/exports
 (() => { 
 	var __webpack_modules__ = ({

  /***/ "./src/lib.js":
  /*!********************!*\
    !*** ./src/lib.js ***!
    \********************/
    ((module, exports) => {
	  eval("// exports作为对象导出，默认为{}，可以在上面附加属性\nexports.hello = 'world';\n\nexports.add = function (a, b) {\n    return a + b;\n}\n\nexports.geekbang = { hello: 'world' };\n\n// 可以理解为导出自定义的exports\nmodule.exports = function minus(a, b) {\n    return a - b;\n}\n\nsetTimeout(() => {\n    // 可以在导出该模块的地方改变exports\n    console.log(exports);\n}, 2000);\n\n\n//# sourceURL=webpack:///./src/lib.js?");
    })
  });
/************************************************************************/
 	// The module cache
 	var __webpack_module_cache__ = {};
 	
 	// The require function
 	function __webpack_require__(moduleId) {
 		// Check if module is in cache
 		if(__webpack_module_cache__[moduleId]) {
 			return __webpack_module_cache__[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = __webpack_module_cache__[moduleId] = {
 			// no module.id needed
 			// no module.loaded needed
 			exports: {}
 		};
	 
		// module.exports是module对象的属性, module.exports = {}直接改变了module.exports的引用，导致对exports的修改不会对导出结果产生任何影响
 		// Execute the module function
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	 
		 // 最后返回的是 module.exports
 		return module.exports;
 	}
 	
/************************************************************************/
  (() => {
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
    eval("console.log('start require');\nconst lib = __webpack_require__(/*! ./lib */ \"./src/lib.js\");\nconsole.log('end require', lib);\n\nlib.additional = 'test';\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
  })();

})();