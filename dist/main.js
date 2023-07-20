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

/***/ "./src/Car.js":
/*!********************!*\
  !*** ./src/Car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n    constructor(make,model,year){\n        this.make = make;\n        this.model = model;\n        this.year = year;\n    }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/Car.js?");

/***/ }),

/***/ "./src/Wishlist.js":
/*!*************************!*\
  !*** ./src/Wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\nclass Wishlist {\n    constructor() {\n        this.cars = [];\n    }\n\n    add(car) {\n        this.cars.push(car);\n    }\n\n\n\n    remove(car) {\n        this.cars = this.cars.filter((existingCar) => existingCar /= car);\n\n    }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/Wishlist.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ \"./src/Car.js\");\n/* harmony import */ var _Wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wishlist */ \"./src/Wishlist.js\");\n\n\n\n\n// Form Selections \nlet form = document.querySelector(\"#submitForm\");\nlet makeInput = document.querySelector(\"#makeInput\");\nlet modeInput = document.querySelector(\"#modelInput\");\nlet yearInput = document.querySelector(\"#yearInput\");\n\n\n// Display Selections\nlet wishListUl = document.querySelector(\"#wishListContainer > ul\");\nlet makeP = document.querySelector(\"#car-make\");\nlet modelP = document.querySelector(\"#car-model\");\nlet yearP = document.querySelector(\"#car-year\");\nlet removeBtn = document.querySelector(\"#removeBtn\")\n\n\n// Script Values \nlet wishlist = new _Wishlist__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n\n\n// Form is submitted\nform.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    // Will receive make,model,year inputs \n    let make = makeInput.value;\n    let model = modeInput.value;\n    let year = yearInput.value;\n\n    // Will make new car from inputs\n    let car = new _Car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](make, model, year);\n\n    // Will add new car to wishlist \n     wishlist.add (car);\n\n    // Will update the DOM \n    let li = document.createElement(\"li\");\n    li.classList.add(\"list-group-item\");\n    li.textContent = car.model;\n    wishListUl.appendChild(li);\n\n    // li is clicked \n    li.addEventListener(\"click\",(event) => {\n        // will display car details in vehicle card \n        makeP.textContent = car.make;\n        modelP.textContent = car.model;\n        yearP.textContent = car.year; \n\n        // enable remove button on vehicle card\n        removeBtn.disabled = false;\n        removeBtn.onclick = (event) => {\n            // removes car from wishlist \n            wishlist.remove(car);\n\n        // reset vehicle card display values \n        makeP.textContent = \"\";\n        modelP.textContent = \"\";\n        yearP.textContent = \"\"; \n\n        // disabled remove button \n        removeBtn.disabled = true;\n\n        // remove li from DOM\n        wishListUl.removeChild(li);\n        };\n    });\n    \n    \n    \n\n    // Clear Form inputs \n    makeInput.value = \"\";\n    modeInput.value = \"\";\n    yearInput.value = \"\";\n});\n\n  \n\n\n\n\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

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