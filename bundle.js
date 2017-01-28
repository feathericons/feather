/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const data = {
  icons: [
    'square',
    'circle',
    'rectangle-vertical',
    'rectangle-horizontal'
  ]
};

Vue.component('icon', {
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '24'
    }
  },
  template: '#icon-template',
  mounted() {
    fetch(`./icons/${this.name}.svg`)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error(`Cannot find ${this.name}.svg`);
      })
      .then(svgText => {
        const svgDocument = new DOMParser().parseFromString(svgText, 'image/svg+xml');
        const svgIcon = svgDocument.querySelector('svg').cloneNode(true);

        svgIcon.setAttribute('width', this.size);
        svgIcon.setAttribute('height', this.size);

        this.$el.appendChild(svgIcon);
      })
      .catch(error => {
        console.error(error);
      });
  }
});

Vue.component('icon-container', {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  template: '#icon-container-template'
})

new Vue({
  el: '#app',
  data: data
});

/***/ })
/******/ ]);