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

/********课堂代码练习开始*************/
//import './exerise/2017-11-09';
/********课堂代码练习开始结束*************/

// import './exerise/1';
// import {m} from './exerise/2';
// console.log(m,'m')
// import 'babel-polyfill';
// import Lottery from './lottery';

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

//  import './class/index16';

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

// import './new/1';
// import './new/array/arr';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
    var test = function test(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sss';

        console.log(x, y);
    };

    test('hi');
}
{
    var _test = function _test(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

        console.log(x, 'kkkk', y);
    };

    var x = 'sss';

    _test('hi你好你好你好');
    //调用时函数内部的变量x已经生成，所以y等于参数x而不是全局x
}
{
    var _test2 = function _test2() {
        var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _x3;

        console.log(_x3, 'kkkk', y);
    };
    //test();


    var _x3 = 'sss';
}
{
    var _test3 = function _test3() {
        var yy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : xx;
        return function () {
            var xx = 2;
            console.log(xx, 'kkkk', yy);
        }();
    };
    //test();// 报错x is not defined

}
{
    var zs = function zs(x, y, z) {
        console.log(arguments[0]);
        console.log(arguments);
    };

    var fn = function fn() {
        alert(this.length);
    };

    zs(1, 2, 3);
    /******************************/
    var length = 10;

    var obj = {
        length: 5,
        method: function method(fn) {
            arguments[0];
            console.log(arguments[0]);
        }
        //arguments = {
        //     0: fn, //也就是 functon() {alert(this.length)} 
        //     1: 第二个参数, //没有 
        //     2: 第三个参数, //没有
        //     ..., 
        //     length: 1 //只有一个参数
        // }
    };obj.method(fn);
}
{
    var _console, _console2, _console3;

    (_console = console).log.apply(_console, ['a'].concat([1, 2, 4]));
    var arrarr = [[1, 2, 3, 4], [5, 6, 7, 8]];
    console.log([1, 2, 3].concat([4, 5, 6]));
    (_console2 = console).log.apply(_console2, [1, 2, 3].concat([4, 5, 6]));
    var arr1 = [1, 2, 3, 4];
    var arr2 = [7, 8, 9];
    var arr3 = arr1.concat(arr2);
    (_console3 = console).log.apply(_console3, _toConsumableArray(arr3));
}
{
    var add = function add() {
        var sum = 0;

        for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
            values[_key] = arguments[_key];
        }

        console.log(values, 'values');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var val = _step.value;

                sum += val;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return sum;
    };

    console.log(add(1, 2, 3));
}
{
    var addtest = function addtest(fn, zzz) {
        console.log(arguments[0], 'sss', arguments[1]);
        fn();
    };

    addtest(function (zzz) {
        console.log('sss');
    }, '222');
}
{
    //箭头函数

    var arrow = function arrow(v) {
        return v * 2;
    };

    console.log(arrow(2));
}
{
    console.log(Object.assign({ a: 1 }, { b: 2 }));
}
{
    //Proxy  obj供应商 原始对象 对用户来说不可见
    var _obj = {
        time: '2017-03-30',
        name: 'net',
        _r: 123
        //代理商

    };var monitor = new Proxy(_obj, {
        //代理的东西,拦截对象属性的读取
        get: function get(target, key) {
            return target[key].replace('2017', '2018');
        },
        set: function set(target, key, value) {
            if (target[key] == 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        }
    });
    monitor.name = '123';
    console.log('get', monitor.name);
}

/***/ })
/******/ ]);