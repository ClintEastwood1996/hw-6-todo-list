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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main */ \"./js/main.js\");\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_2__);\n// Import styles\r\n\r\n\r\n\r\n\r\n// Import Scripts\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ToDoItemNumber = 1;\r\n\r\n\r\n// Plus new todo module \r\n(function() {\r\n    document.getElementById(\"plusButton\").onclick = function() {\r\n        document.getElementById(\"todoList\").insertAdjacentHTML(\"beforeend\",\r\n            `<div class=\"todo-list-item\" id=\"todoListItem${ToDoItemNumber}\">\r\n                <input type=\"text\" class=\"todo-list-item__text\" id=\"itemText${ToDoItemNumber}\" readonly></input>\r\n                <input type=\"button\" class=\"todo-list-item__button\" value=\"&#10004;\" id=\"doneButton${ToDoItemNumber}\">\r\n                <input type=\"button\" class=\"todo-list-item__button\" value=\"&#10008;\" id=\"deleteButton${ToDoItemNumber}\">\r\n            </div>`\r\n        );\r\n    \r\n        var deleteButton = document.getElementById(`deleteButton${ToDoItemNumber}`);\r\n        var itemText = document.getElementById(`itemText${ToDoItemNumber}`);\r\n        var doneButton = document.getElementById(`doneButton${ToDoItemNumber}`);\r\n        var deadline = document.getElementById(\"daedline\").value;\r\n        \r\n    \r\n        deleteButton.addEventListener('click', () => deleteButton.parentElement.remove());\r\n    \r\n        doneButton.addEventListener('click', () => ((itemText.style.textDecoration == \"line-through\") ? \r\n        (itemText.style.textDecoration = \"none\") : \r\n        (itemText.style.textDecoration = \"line-through\")));\r\n    \r\n        itemText.value = deadline + \": \" + document.getElementById(\"newTodoText\").value;\r\n    \r\n        ToDoItemNumber++;\r\n    }\r\n})();\r\n\r\n\r\n\r\n// Module filter function\r\nvar filter = ((function () {\r\n    return {\r\n        filterBy: function(filterBy) {\r\n            return function() {\r\n                var todoListItems = document.querySelectorAll(\".todo-list-item\");\r\n                var chosenDate = document.getElementById(\"filterDaedline\").value;\r\n        \r\n            \r\n                if (todoListItems[0]) {\r\n                    switch (filterBy) {\r\n                        case (\"done\"): {\r\n                            for (var todoListItem of todoListItems) {\r\n                                if (!(todoListItem.firstElementChild.style.textDecoration === \"line-through\")) {\r\n                                    todoListItem.style.display = \"none\";\r\n                                };\r\n                            }\r\n                            break;\r\n                        };\r\n                        case (\"notDone\"): {\r\n                            for (var todoListItem of todoListItems) {\r\n                                if (todoListItem.firstElementChild.style.textDecoration === \"line-through\") {\r\n                                    todoListItem.style.display = \"none\";\r\n                                };\r\n                            }\r\n                            break;\r\n                        };\r\n                        case (\"showAll\"): {\r\n                            for (var todoListItem of todoListItems) {\r\n                                todoListItem.style.display = \"flex\";\r\n                            }\r\n                            break;\r\n                        };\r\n                        case (\"chosenDate\"): {\r\n                            for (var todoListItem of todoListItems) {\r\n                                if (!(todoListItem.firstElementChild.value.substr(0,10) == chosenDate)) {\r\n                                    todoListItem.style.display = \"none\";\r\n                                } else {\r\n                                    todoListItem.style.display = \"flex\";\r\n                                };\r\n                            }\r\n                            break;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    };\r\n})());\r\n\r\n\r\ndocument.getElementById(\"DoneFilter\").onclick = filter.filterBy(\"done\");\r\ndocument.getElementById(\"showAll\").onclick = filter.filterBy(\"showAll\");\r\ndocument.getElementById(\"notDoneFilter\").onclick = filter.filterBy(\"notDone\");\r\ndocument.getElementById(\"filterDaedline\").onchange = filter.filterBy(\"chosenDate\");\r\n\r\n\r\n\r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./styles/reset.css?");

/***/ })

/******/ });