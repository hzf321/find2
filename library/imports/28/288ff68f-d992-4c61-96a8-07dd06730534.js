"use strict";
cc._RF.push(module, '288ffaP2ZJMYZaoB90GcwU0', 'termPop');
// script/dialog/termPop.ts

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
var termPop = /** @class */ (function (_super) {
    __extends(termPop, _super);
    function termPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        return _this;
    }
    termPop.prototype.start = function () {
        playroomData_1.playroom.showBanner();
    };
    termPop.prototype.initData = function (data) {
        this.callback = data.callback;
    };
    termPop.prototype.onClick_Agreen = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        playroomData_1.playroom.closeBanner();
    };
    termPop.prototype.onClick_PrivacyPolicy_btn = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        cc.sys.openURL(playroomData_1.playroom.privacyPolicyUrl);
    };
    termPop.prototype.onClick_Termsofservicebtn = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        cc.sys.openURL(playroomData_1.playroom.termsofServiceUrl);
    };
    termPop = __decorate([
        ccclass
    ], termPop);
    return termPop;
}(cc.Component));
exports.default = termPop;

cc._RF.pop();