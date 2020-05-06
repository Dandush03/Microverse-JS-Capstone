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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheet/main.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheet/main.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/stylesheet/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _const_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const-variable */ \"./src/config/const-variable.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  parent: 'phaser-container',\n  // eslint-disable-next-line no-undef\n  type: Phaser.AUTO,\n  width: _const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"],\n  height: _const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"],\n  physics: {\n    default: 'arcade',\n    arcade: {\n      gravity: { y: _const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] * 2 },\n      debug: false,\n      x: 0,\n      y: 0,\n      width: _const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] * 100,\n      height: _const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"],\n      thickness: 32,\n    },\n  },\n});\n\n//# sourceURL=webpack:///./src/config/config.js?");

/***/ }),

/***/ "./src/config/const-variable.js":
/*!**************************************!*\
  !*** ./src/config/const-variable.js ***!
  \**************************************/
/*! exports provided: GAME_HEIGHT, GAME_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_HEIGHT\", function() { return GAME_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_WIDTH\", function() { return GAME_WIDTH; });\nconst GAME_HEIGHT = 600;\nconst GAME_WIDTH = 800;\n\n\n//# sourceURL=webpack:///./src/config/const-variable.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/main */ \"./src/module/main.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/module/main.js":
/*!****************************!*\
  !*** ./src/module/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheet_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheet/main.scss */ \"./src/stylesheet/main.scss\");\n/* harmony import */ var _stylesheet_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheet_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _scenes_boot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scenes/boot */ \"./src/scenes/boot.js\");\n/* harmony import */ var _scenes_preload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scenes/preload */ \"./src/scenes/preload.js\");\n/* harmony import */ var _scenes_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scenes/title */ \"./src/scenes/title.js\");\n/* harmony import */ var _scenes_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scenes/option */ \"./src/scenes/option.js\");\n/* harmony import */ var _scenes_credits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scenes/credits */ \"./src/scenes/credits.js\");\n/* harmony import */ var _scenes_game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scenes/game */ \"./src/scenes/game.js\");\n/* harmony import */ var _scenes_score__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scenes/score */ \"./src/scenes/score.js\");\n/* harmony import */ var _scenes_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scenes/user */ \"./src/scenes/user.js\");\n/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sound */ \"./src/module/sound.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user */ \"./src/module/user.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// eslint-disable-next-line no-undef\nclass Game extends Phaser.Game {\n  constructor() {\n    super(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const soundModel = new _sound__WEBPACK_IMPORTED_MODULE_10__[\"default\"]();\n    const userModel = new _user__WEBPACK_IMPORTED_MODULE_11__[\"default\"]();\n    this.globals = { soundModel, bgMusic: null, userModel };\n    this.scene.add('Boot', _scenes_boot__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    this.scene.add('Preload', _scenes_preload__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    this.scene.add('Title', _scenes_title__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    this.scene.add('Options', _scenes_option__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    this.scene.add('Credits', _scenes_credits__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    this.scene.add('Scores', _scenes_score__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n    this.scene.add('User', _scenes_user__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n    this.scene.add('Game', _scenes_game__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    this.scene.start('Boot');\n  }\n}\n\nwindow.game = new Game();\n\n//# sourceURL=webpack:///./src/module/main.js?");

/***/ }),

/***/ "./src/module/sound.js":
/*!*****************************!*\
  !*** ./src/module/sound.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sound; });\n/* eslint-disable no-underscore-dangle */\nclass Sound {\n  constructor() {\n    this._soundOn = true;\n    this._musicOn = true;\n    this._bgMusicPlaying = false;\n  }\n\n  set musicOn(value) {\n    this._musicOn = value;\n  }\n\n  get musicOn() {\n    return this._musicOn;\n  }\n\n  set soundOn(value) {\n    this._soundOn = value;\n  }\n\n  get soundOn() {\n    return this._soundOn;\n  }\n\n  set bgMusicPlaying(value) {\n    this._bgMusicPlaying = value;\n  }\n\n  get bgMusicPlaying() {\n    return this._bgMusicPlaying;\n  }\n}\n\n//# sourceURL=webpack:///./src/module/sound.js?");

/***/ }),

/***/ "./src/module/user.js":
/*!****************************!*\
  !*** ./src/module/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* eslint-disable no-underscore-dangle */\nclass User {\n  constructor() {\n    this._user = '';\n    this._score = 0;\n  }\n\n  set user(value) {\n    this._user = value;\n  }\n\n  get user() {\n    return this._user;\n  }\n\n  set score(value) {\n    this._score = value;\n  }\n\n  get score() {\n    return this._score;\n  }\n}\n\n//# sourceURL=webpack:///./src/module/user.js?");

/***/ }),

/***/ "./src/scenes/boot.js":
/*!****************************!*\
  !*** ./src/scenes/boot.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BootScene; });\n// eslint-disable-next-line no-undef\nclass BootScene extends Phaser.Scene {\n  constructor() {\n    super('Boot');\n  }\n\n  preload() {\n    this.load.image('logo', 'https://res.cloudinary.com/dl-cultures/image/upload/v1588612118/logo/HeroLogo.svg');\n  }\n\n  create() {\n    this.scene.start('Preload');\n  }\n}\n\n//# sourceURL=webpack:///./src/scenes/boot.js?");

/***/ }),

/***/ "./src/scenes/credits.js":
/*!*******************************!*\
  !*** ./src/scenes/credits.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreditsScene; });\n/* harmony import */ var _config_const_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/const-variable */ \"./src/config/const-variable.js\");\n\n\n// eslint-disable-next-line no-undef\nclass CreditsScene extends Phaser.Scene {\n  constructor() {\n    super('Credits');\n  }\n\n  create() {\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2), 'sky');\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] - 34, _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] - 34, 'logo').setScale(0.3);\n\n    this.gameBtn = this.add.image(50, 30, 'back').setScale(0.15).setInteractive();\n    this.gameBtn.on('pointerdown', () => {\n      this.scene.start('Title');\n    });\n\n    this.input.on('pointerover', (event, gameObjects) => {\n      gameObjects[0].setScale(0.18);\n    });\n\n    this.input.on('pointerout', (event, gameObjects) => {\n      gameObjects[0].setScale(0.15);\n    });\n\n    const authorText = this.make.text({\n      x: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2,\n      y: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2 - 50,\n      text: 'Author:',\n      style: {\n        font: '36px monospace',\n        fill: '#422115',\n      },\n    });\n\n    authorText.setOrigin(0.5, 0);\n    const heroText = this.make.text({\n      x: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2,\n      y: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2 + 50,\n      text: 'Daniel Laloush',\n      style: {\n        font: '36px monospace',\n        fill: '#422115',\n      },\n    });\n    heroText.setOrigin(0.5, 0);\n  }\n}\n\n//# sourceURL=webpack:///./src/scenes/credits.js?");

/***/ }),

/***/ "./src/scenes/game.js":
/*!****************************!*\
  !*** ./src/scenes/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameScene; });\n/* harmony import */ var _config_const_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/const-variable */ \"./src/config/const-variable.js\");\n\n\nlet player;\nlet platforms;\n\n// eslint-disable-next-line no-undef\nclass GameScene extends Phaser.Scene {\n  constructor() {\n    super('Game');\n  }\n\n  create() {\n    this.cameras.main.setBounds(0, 0, _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] * 100, _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"]).setName('main');\n\n    platforms = this.physics.add.staticGroup();\n\n    // eslint-disable-next-line no-underscore-dangle\n    const mainWidth = this.cameras.main._bounds.width;\n    console.log(mainWidth);\n    for (let width = 0; width < mainWidth; width += 2048) {\n      console.log(width);\n      platforms.create(width, _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"], 'ground').refreshBody();\n    }\n\n    this.anims.create({\n      key: 'right',\n      frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 10 }),\n      frameRate: 10,\n      repeat: -1,\n    });\n\n\n    player = this.physics.add.sprite(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 8, _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2, 'hero');\n\n    player.setBounce(0.2);\n    player.setCollideWorldBounds(true);\n    this.physics.add.collider(player, platforms);\n  }\n\n  update() {\n    const cursors = this.input.keyboard.createCursorKeys();\n    if (cursors.right.isDown) {\n      player.setVelocityX(800);\n      player.anims.play('right', true);\n    } else if (cursors.left.isDown) {\n      player.setVelocityX(-800);\n      player.anims.play('right', true);\n    } else {\n      player.setVelocityX(0);\n      player.anims.play('right', false);\n    }\n\n    if (cursors.up.isDown && player.body.touching.down) {\n      player.setVelocityY(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] * -1);\n      player.anims.play('right', true);\n    }\n\n    this.cameras.main.scrollX = player.x - _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2;\n  }\n}\n\n//# sourceURL=webpack:///./src/scenes/game.js?");

/***/ }),

/***/ "./src/scenes/option.js":
/*!******************************!*\
  !*** ./src/scenes/option.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OptionsScene; });\n/* harmony import */ var _config_const_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/const-variable */ \"./src/config/const-variable.js\");\n\n\n// eslint-disable-next-line no-undef\nclass OptionsScene extends Phaser.Scene {\n  constructor() {\n    super('Options');\n  }\n\n  create() {\n    this.soundModel = this.sys.game.globals.soundModel;\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2), 'sky');\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] - 34, _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] - 34, 'logo').setScale(0.3);\n\n    this.gameBtn = this.add.image(50, 30, 'back').setScale(0.15).setInteractive();\n    this.gameBtn.on('pointerdown', () => {\n      this.scene.start('Title');\n    });\n\n    this.input.on('pointerover', (event, gameObjects) => {\n      gameObjects[0].setScale(0.18);\n    });\n\n    this.input.on('pointerout', (event, gameObjects) => {\n      gameObjects[0].setScale(0.15);\n    });\n\n    this.text = this.add.text((_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2) - 100, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 6), 'Options', { fontSize: 40 });\n    this.musicButton = this.add.image(((_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2) - 50) - 100, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 3), 'checkedBox').setScale(0.15);\n    this.musicText = this.add.text((_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2) - 100, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 3) - 15, 'Music Enabled', { fontSize: 24 });\n\n    this.soundButton = this.add.image(((_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2) - 50) - 100, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2), 'checkedBox').setScale(0.15);\n    this.soundText = this.add.text((_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2) - 100, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2) - 15, 'Sound Enabled', { fontSize: 24 });\n\n    this.musicButton.setInteractive();\n    this.soundButton.setInteractive();\n\n    this.musicButton.on('pointerdown', () => {\n      this.soundModel.musicOn = !this.soundModel.musicOn;\n      this.updateAudio();\n    });\n\n\n    this.soundButton.on('pointerdown', () => {\n      this.soundModel.soundOn = !this.soundModel.soundOn;\n      this.updateAudio();\n    });\n\n    this.updateAudio();\n  }\n\n  updateAudio() {\n    if (this.soundModel.musicOn === false) {\n      this.musicButton.setTexture('box');\n      this.sys.game.globals.bgMusic.stop();\n      this.soundModel.bgMusicPlaying = false;\n    } else {\n      this.musicButton.setTexture('checkedBox');\n      if (this.soundModel.bgMusicPlaying === false) {\n        this.sys.game.globals.bgMusic.play();\n        this.soundModel.bgMusicPlaying = true;\n      }\n    }\n\n    if (this.soundModel.soundOn === false) {\n      this.soundButton.setTexture('box');\n    } else {\n      this.soundButton.setTexture('checkedBox');\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/scenes/option.js?");

/***/ }),

/***/ "./src/scenes/preload.js":
/*!*******************************!*\
  !*** ./src/scenes/preload.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PreloadScene; });\n/* harmony import */ var _config_const_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/const-variable */ \"./src/config/const-variable.js\");\n\n// eslint-disable-next-line no-undef\nclass PreloadScene extends Phaser.Scene {\n  constructor() {\n    super('Preload');\n  }\n\n\n  preload() {\n    this.load.image('playGame', './assets/ui/play-game.png');\n    this.load.image('settings', './assets/ui/settings.png');\n    this.load.image('credits', './assets/ui/credits.png');\n    this.load.image('scores', './assets/ui/score.png');\n    this.load.image('back', './assets/ui/back.png');\n    this.load.image('checkedBox', './assets/ui/checked.png');\n    this.load.image('box', './assets/ui/unchecked.png');\n    this.load.image('sky', './assets/sky.png');\n    this.load.image('ground', './assets/game/ground.png');\n\n    this.load.spritesheet('hero', './assets/game/hero.png',\n      { frameWidth: 68.8, frameHeight: 73 });\n\n    this.load.audio('bgMusic', './assets/ui/bgMusic.mp3');\n\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2, 'logo');\n    // display progress bar\n    const progressBar = this.add.graphics();\n    const progressBox = this.add.graphics();\n    progressBox.fillStyle(0x222222, 0.8);\n    progressBox.fillRect(240, 270, 320, 50);\n\n    const loadingText = this.make.text({\n      x: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2,\n      y: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2 - 50,\n      text: 'Loading...',\n      style: {\n        font: '20px monospace',\n        fill: '#ffffff',\n      },\n    });\n    loadingText.setOrigin(0.5, 0.5);\n\n    const percentText = this.make.text({\n      x: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2,\n      y: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2 - 5,\n      text: '0%',\n      style: {\n        font: '18px monospace',\n        fill: '#ffffff',\n      },\n    });\n    percentText.setOrigin(0.5, 0.5);\n\n    const assetText = this.make.text({\n      x: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2,\n      y: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2 + 50,\n      text: '',\n      style: {\n        font: '18px monospace',\n        fill: '#ffffff',\n      },\n    });\n    assetText.setOrigin(0.5, 0.5);\n\n    // update progress bar\n    this.load.on('progress', (value) => {\n      // eslint-disable-next-line radix\n      percentText.setText(`${parseInt(value * 100)}%`);\n      progressBar.clear();\n      progressBar.fillStyle(0xffffff, 1);\n      progressBar.fillRect(250, 280, 300 * value, 30);\n    });\n\n    // update file progress text\n    this.load.on('fileprogress', (file) => {\n      assetText.setText(`Loading asset: ${file.key}`);\n    });\n\n    // remove progress bar when complete\n    this.load.on('complete', () => {\n      progressBar.destroy();\n      progressBox.destroy();\n      loadingText.destroy();\n      percentText.destroy();\n      assetText.destroy();\n      this.ready();\n    });\n    this.timedEvent = this.time.delayedCall(1000, this.ready, [], this);\n  }\n\n  init() {\n    this.readyCount = 0;\n  }\n\n  ready() {\n    this.readyCount += 1;\n    if (this.readyCount === 2) {\n      this.scene.start('Title');\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/scenes/preload.js?");

/***/ }),

/***/ "./src/scenes/score.js":
/*!*****************************!*\
  !*** ./src/scenes/score.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScoresScene; });\n/* harmony import */ var _config_const_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/const-variable */ \"./src/config/const-variable.js\");\n\n\n// eslint-disable-next-line no-undef\nclass ScoresScene extends Phaser.Scene {\n  constructor() {\n    super('Scores');\n  }\n\n  create() {\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2), 'sky');\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] - 34, _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] - 34, 'logo').setScale(0.3);\n\n    this.gameBtn = this.add.image(50, 30, 'back').setScale(0.15).setInteractive();\n    this.gameBtn.on('pointerdown', () => {\n      this.scene.start('Title');\n    });\n\n    this.input.on('pointerover', (event, gameObjects) => {\n      gameObjects[0].setScale(0.18);\n    });\n\n    this.input.on('pointerout', (event, gameObjects) => {\n      gameObjects[0].setScale(0.15);\n    });\n\n    const authorText = this.make.text({\n      x: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2,\n      y: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2 - 50,\n      text: 'Author:',\n      style: {\n        font: '36px monospace',\n        fill: '#422115',\n      },\n    });\n\n    authorText.setOrigin(0.5, 0);\n    const heroText = this.make.text({\n      x: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2,\n      y: _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2 + 50,\n      text: 'Daniel Laloush',\n      style: {\n        font: '36px monospace',\n        fill: '#422115',\n      },\n    });\n    heroText.setOrigin(0.5, 0);\n  }\n}\n\n//# sourceURL=webpack:///./src/scenes/score.js?");

/***/ }),

/***/ "./src/scenes/title.js":
/*!*****************************!*\
  !*** ./src/scenes/title.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TitleScene; });\n/* harmony import */ var _config_const_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/const-variable */ \"./src/config/const-variable.js\");\n\n\n// eslint-disable-next-line no-undef\nclass TitleScene extends Phaser.Scene {\n  constructor() {\n    super('Title');\n  }\n\n  create() {\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2), 'sky');\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] - 34, _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] - 34, 'logo').setScale(0.3);\n\n    this.soundModel = this.sys.game.globals.soundModel;\n    if (this.soundModel.musicOn === true && this.soundModel.bgMusicPlaying === false) {\n      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });\n      this.bgMusic.play();\n      this.soundModel.bgMusicPlaying = true;\n      this.sys.game.globals.bgMusic = this.bgMusic;\n    }\n\n    this.gameBtn = this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2) - 210, 'playGame').setScale(0.15).setInteractive();\n    this.gameBtn.on('pointerdown', () => {\n      this.scene.start('User');\n    });\n\n    this.settingsBtn = this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2) - 100, 'settings').setScale(0.15).setInteractive();\n    this.settingsBtn.on('pointerdown', () => {\n      this.scene.start('Options');\n    });\n\n    this.gameBtn = this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2) + 20, 'scores').setScale(0.15).setInteractive();\n    this.gameBtn.on('pointerdown', () => {\n      this.scene.start('Scores');\n    });\n\n    this.settingsBtn = this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2) + 130, 'credits').setScale(0.15).setInteractive();\n    this.settingsBtn.on('pointerdown', () => {\n      this.scene.start('Credits');\n    });\n\n    this.input.on('pointerover', (event, gameObjects) => {\n      gameObjects[0].setScale(0.18);\n    });\n\n    this.input.on('pointerout', (event, gameObjects) => {\n      gameObjects[0].setScale(0.15);\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/scenes/title.js?");

/***/ }),

/***/ "./src/scenes/user.js":
/*!****************************!*\
  !*** ./src/scenes/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UserScene; });\n/* harmony import */ var _config_const_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/const-variable */ \"./src/config/const-variable.js\");\n\n\n// eslint-disable-next-line no-undef\nclass UserScene extends Phaser.Scene {\n  constructor() {\n    super('User');\n  }\n\n  create() {\n    this.userModel = this.sys.game.globals.userModel;\n\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 2), 'sky');\n    this.add.image(_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] - 34, _config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] - 34, 'logo').setScale(0.3);\n\n    this.gameBtn = this.add.image(50, 30, 'back').setScale(0.15).setInteractive();\n    this.gameBtn.on('pointerdown', () => {\n      this.scene.start('Title');\n    });\n\n    this.input.on('pointerover', (event, gameObjects) => {\n      gameObjects[0].setScale(1.1);\n    });\n\n    this.input.on('pointerout', (event, gameObjects) => {\n      gameObjects[0].setScale(1);\n    });\n\n    this.lbl = this.make.text({\n      text: 'What\\'s your name?',\n      style: {\n        font: '36px monospace',\n        fill: '#422115',\n      },\n    });\n    this.lbl.x = (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2) - (this.lbl.width / 2);\n    this.lbl.y = (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 4);\n\n    this.nameInput = this.make.text({\n      text: 'Yes, Click Here',\n      style: {\n        font: '36px monospace',\n        fill: '#422115',\n      },\n      selected: false,\n    });\n    this.nameInput.x = (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2) - (this.nameInput.width / 2);\n    this.nameInput.y = (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 3);\n\n    this.nameInput.setInteractive();\n    this.input.on('pointerdown', (event, gameObjects) => {\n      if (gameObjects.length !== 0) {\n        gameObjects[0].selected = true;\n        this.nameInput.text = '';\n      } else {\n        this.nameInput.selected = false;\n        if (this.nameInput.text === '') {\n          this.nameInput.text = 'Yes, Click Here';\n          this.nameInput.x = (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2) - (this.nameInput.width / 2);\n          this.nameInput.y = (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 3);\n        }\n      }\n    });\n\n    this.input.keyboard.on('keydown', (event) => {\n      if (this.nameInput.selected === true) {\n        if (event.keyCode >= 65 && event.keyCode <= 90) {\n          this.nameInput.text += event.key;\n        } else if (event.keyCode === 32) {\n          this.nameInput.text += ' ';\n        } else if (event.keyCode === 8) {\n          this.nameInput.text = this.nameInput.text.slice(0, -1);\n        } else if (event.keyCode === 13) {\n          this.start();\n        }\n        this.nameInput.x = (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2) - (this.nameInput.width / 2);\n        this.nameInput.y = (_config_const_variable__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] / 3);\n      }\n    });\n  }\n\n  start() {\n    this.userModel.user = this.nameInput.text;\n    this.scene.start('Game');\n  }\n}\n\n//# sourceURL=webpack:///./src/scenes/user.js?");

/***/ }),

/***/ "./src/stylesheet/main.scss":
/*!**********************************!*\
  !*** ./src/stylesheet/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheet/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/stylesheet/main.scss?");

/***/ })

/******/ });