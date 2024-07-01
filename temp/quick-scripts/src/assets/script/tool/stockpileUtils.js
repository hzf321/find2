"use strict";
cc._RF.push(module, 'f021e0ydDZC+qJMjJKjbysY', 'stockpileUtils');
// script/tool/stockpileUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockpileUtils = void 0;
var stockpileUtils = /** @class */ (function () {
    function stockpileUtils() {
    }
    stockpileUtils.setStringByKey = function (key, str) {
        cc.sys.localStorage.setItem(key, str);
    };
    stockpileUtils.getStringByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : "";
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? tempValue : defaultValue;
    };
    stockpileUtils.setBoolByKey = function (key, boolValue) {
        this.setStringByKey(key, (boolValue ? "1" : "0"));
    };
    stockpileUtils.getBoolByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : false;
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? (tempValue == "1" ? true : false) : defaultValue;
    };
    stockpileUtils.setIntegerByKey = function (key, defaultValue) {
        this.setStringByKey(key, defaultValue.toString());
    };
    stockpileUtils.getIntegerByKey = function (key, defaultValue) {
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? parseInt(tempValue) : defaultValue;
    };
    stockpileUtils.getStorageJSON = function (key) {
        var data = cc.sys.localStorage.getItem(key);
        if (data instanceof Array && data.length < 1) {
            return null;
        }
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };
    stockpileUtils.setStorageJSON = function (key, data) {
        cc.sys.localStorage.setItem(key, JSON.stringify(data));
    };
    stockpileUtils.removeByKey = function (key) {
        cc.sys.localStorage.removeItem(key);
    };
    return stockpileUtils;
}());
exports.stockpileUtils = stockpileUtils;

cc._RF.pop();