"use strict";
cc._RF.push(module, '98460XFFs1JCI9f0VmFuXBW', 'outPop');
// script/dialog/outPop.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gameControl_1 = require("../tool/gameControl");
var playroomData_1 = require("../tool/playroomData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var outPop = /** @class */ (function (_super) {
    __extends(outPop, _super);
    function outPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ADcallback = null;
        _this.restartCallBack = null;
        return _this;
    }
    outPop.prototype.start = function () {
        playroomData_1.playroom.showBanner();
    };
    outPop.prototype.initData = function (data) {
        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    };
    outPop.prototype.onClick_AD_btn = function () {
        var _this = this;
        gameControl_1.gc.voiceUtils.commonBtnClick();
        playroomData_1.playroom.showVideo(function () {
            _this.scheduleOnce(function () {
                _this.ADcallback && _this.ADcallback();
                _this.node.destroy();
                playroomData_1.playroom.closeBanner();
            });
        });
    };
    outPop.prototype.onClick_restart = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.restartCallBack && this.restartCallBack();
        this.node.destroy();
        playroomData_1.playroom.closeBanner();
    };
    outPop = __decorate([
        ccclass
    ], outPop);
    return outPop;
}(cc.Component));
exports.default = outPop;

cc._RF.pop();