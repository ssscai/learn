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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function Test() {
    _classCallCheck(this, Test);

    this.a = 'hello world';
};

//import {AA,testAA,Student} from './class/index14';//es6模块化的写法 可以导出任何你想导出的模块
//console.log('AA=',AA,'testAA=',testAA,Student)
// import * as lesson  from './class/index14';
// //*所有的 as别名
// console.log(lesson);
// import lesson17  from './class/index14';
// console.log(lesson17)

// import './class/index15';
//import './class/reg';
// import './class/reg1';
var test = new Test();
//document.body.innerHTML = test.a;
// import './class/index1';
// import './class/index2';
// import './class/index3';
//import './class/index4';
//import './class/index5';
//import './class/index6';
// import './class/index7';
//import './class/index8';
// import './class/index9';
//import './class/index10';
// import './class/index11';
// import './class/index12';
//import './class/index13';
// import './class/index14';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
    //Proxy 代理  连接用户和真正对象的一个层  Reflect反射对象
    //obj 供应商 原始对象来存储真实的数据
    var obj = {
        time: '2017-11-05',
        name: 'net',
        _r: 123
        //monitor 代理商 monitor映射obj
    };var monitor = new Proxy(obj, {
        //代理对象属性的读取
        get: function get(target, key) {
            return target[key].replace('2017', '2018');
        },

        //拦截对象设置属性
        set: function set(target, key, value) {
            if (key == 'name') {
                return target[key] = value;
            } else {
                return false;
            }
        },
        has: function has(target, key) {
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },
        deleteProperty: function deleteProperty(target, key) {
            if (key.indexOf('_' > -1)) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        }
    });
    console.log('get', monitor.time);
    //只能设置name属性
    monitor.name = 'w3c';
    console.log('set', monitor.name);
    console.log('has', 'name' in monitor, 'time' in monitor);
    delete monitor.time;
    console.log('delete', monitor);
}
{
    var validator = function validator(target, _validator) {
        return new Proxy(target, {
            _validator: _validator,
            set: function set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    var va = this._validator[key];
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw Error('\u4E0D\u80FD\u8BBE\u7F6E' + key + '\u5230' + value);
                    }
                } else {
                    throw Error(key + '\u4E0D\u5B58\u5728');
                }
            }
        });
    };

    var personValidators = {
        name: function name(val) {
            return typeof val === 'string';
        },
        age: function age(val) {
            return typeof val === 'number' && val > 18;
        }
    };

    var Person = function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
        return validator(this, personValidators);
    };

    var person = new Person('lilei', 30);
    console.log(person, 'person');
    person.name = 'zszszs';
    console.log(person, 'person');
}

/***/ })
/******/ ]);