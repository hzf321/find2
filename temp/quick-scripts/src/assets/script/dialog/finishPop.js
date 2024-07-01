"use strict";
cc._RF.push(module, '5a09auqmsBG27JJ2bvnIpkk', 'finishPop');
// script/dialog/finishPop.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var finishPop = /** @class */ (function (_super) {
    __extends(finishPop, _super);
    function finishPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.bg = null;
        _this.callback = null;
        return _this;
    }
    finishPop.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    finishPop.prototype.onLoad = function () {
    };
    finishPop.prototype.start = function () {
        this.title.string = "Level " + gameControl_1.gc.imgId;
        gameControl_1.gc.adapterBg(this.bg);
    };
    finishPop.prototype.onClick_continueBtn = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
    };
    finishPop.prototype.onClick_close = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.node.destroy();
    };
    __decorate([
        property(cc.Label)
    ], finishPop.prototype, "title", void 0);
    __decorate([
        property(cc.Node)
    ], finishPop.prototype, "bg", void 0);
    finishPop = __decorate([
        ccclass
    ], finishPop);
    return finishPop;
}(cc.Component));
exports.default = finishPop;

cc._RF.pop();