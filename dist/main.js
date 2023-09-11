/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/LinkedList */ \"./src/modules/LinkedList.js\");\n\n\nconst myList = new _modules_LinkedList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nmyList.prepend('2');\nmyList.prepend('1');\nmyList.append('4');\nmyList.append('5');\nmyList.size();\nmyList.head();\nmyList.tail();\nmyList.at(3);\nmyList.pop();\nmyList.contains('5');\nmyList.find('3');\nmyList.insertAt(2, '3');\nmyList.deleteAt(0);\nmyList.toString();\nconsole.log(myList.list);\n\n\n//# sourceURL=webpack://linked-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/LinkedList.js":
/*!***********************************!*\
  !*** ./src/modules/LinkedList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkedList)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/modules/Node.js\");\n\n\nclass LinkedList {\n  constructor() {\n    this.list = {};\n    this.list.head = null;\n  }\n\n  prepend(value) {\n    const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n    newNode.next = this.list.head;\n    this.list.head = newNode;\n  }\n\n  append(value) {\n    if (this.list.head == null) {\n      this.prepend(value);\n    } else {\n      let current = this.list.head;\n      while (current.next != null) {\n        current = current.next;\n      }\n\n      current.next = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n    }\n  }\n\n  size() {\n    let listLength = 0;\n    let current = this.list.head;\n    while (current != null) {\n      current = current.next;\n      listLength++;\n    }\n\n    console.log(`size: ${listLength}`);\n    return listLength;\n  }\n\n  head() {\n    if (this.list.head !== null) {\n      console.log(`head: ${this.list.head.value}`);\n      return this.list.head.value;\n    }\n\n    console.log('No nodes are on the list');\n    return undefined;\n  }\n\n  tail() {\n    let current = this.list.head;\n    while (current.next != null) {\n      current = current.next;\n    }\n\n    console.log(`tail: ${current.value}`);\n    return current.value;\n  }\n\n  at(index) {\n    if (index < 0 || index >= this.list.length) return null;\n\n    let counter = 0;\n    let current = this.list.head;\n    while (counter !== index) {\n      current = current.next;\n      counter++;\n    }\n\n    console.log(`at index: ${counter} value: ${current.value}`);\n    return current.value;\n  }\n\n  pop() {\n    if (this.list.head == null) throw new Error('Cannot delete.');\n\n    let current = this.list.head;\n    let previous = null;\n    while (current.next != null) {\n      previous = current;\n      current = current.next;\n    }\n\n    previous.next = current.next;\n  }\n\n  contains(value) {\n    let current = this.list.head;\n    while (current.next != null && current.value !== value) {\n      current = current.next;\n    }\n\n    if (current.value === value) {\n      console.log(`contains value ${value}? True`);\n      return true;\n    }\n\n    console.log(`contains value ${value}? False`);\n    return false;\n  }\n\n  find(value) {\n    let index = 0;\n    let current = this.list.head;\n\n    while (current.next != null && current.value !== value) {\n      current = current.next;\n      index++;\n    }\n\n    console.log(`find index: ${index}`);\n    return index;\n  }\n\n  insertAt(index, value) {\n    if (this.list.head == null || index === 0) {\n      this.prepend(value);\n      return;\n    }\n\n    let counter = 0;\n    let current = this.list.head;\n    let previous = null;\n    while (current != null && index > counter) {\n      previous = current;\n      counter++;\n      current = current.next;\n    }\n\n    if (current != null) previous.next = new _Node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value, current);\n  }\n\n  deleteAt(index) {\n    if (this.list.head == null) throw new Error('Cannot delete');\n\n    if (index === 0) {\n      this.list.head = this.list.head.next;\n      return;\n    }\n\n    let counter = 0;\n    let current = this.list.head;\n    let previous = null;\n    while (current != null && index > counter) {\n      previous = current;\n      counter++;\n      current = current.next;\n    }\n\n    if (current != null) previous.next = current.next;\n  }\n\n  toString() {\n    let current = this.list.head;\n    let string = '';\n\n    while (current.next != null) {\n      string += `( ${current.value} ) -> `;\n      current = current.next;\n    }\n\n    string += `( ${current.value} )`;\n    console.log(string);\n    return string;\n  }\n}\n\n\n//# sourceURL=webpack://linked-list/./src/modules/LinkedList.js?");

/***/ }),

/***/ "./src/modules/Node.js":
/*!*****************************!*\
  !*** ./src/modules/Node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n  constructor(value = null, next = null) {\n    this.value = value;\n    this.next = next;\n  }\n}\n\n\n//# sourceURL=webpack://linked-list/./src/modules/Node.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;