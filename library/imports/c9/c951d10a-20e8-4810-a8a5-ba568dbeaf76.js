"use strict";
cc._RF.push(module, 'c951dEKIOhIEKilulaNvq92', 'pingFenPop');
// script/dialog/pingFenPop.ts

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
var pingFenPop = /** @class */ (function (_super) {
    __extends(pingFenPop, _super);
    function pingFenPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callback = null;
        _this.starBox = null;
        _this.clickBox = null;
        return _this;
    }
    pingFenPop.prototype.initData = function (data) {
    };
    pingFenPop.prototype.start = function () {
        // for (let i = 0; i < this.clickBox.children.length; i++) {
        //     let item = this.clickBox.children[i];
        //     item.on(cc.Node.EventType.TOUCH_END, () => {  
        //         this.showStar(i)
        //     }, this)
        // }
        playroomData_1.playroom.showBanner();
    };
    pingFenPop.prototype.showStar = function (index) {
        for (var i = 0; i < this.starBox.children.length; i++) {
            var item = this.starBox.children[i];
            if (i <= index) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        }
    };
    pingFenPop.prototype.onClick_commentBtn = function () {
        playroomData_1.playroom.showPingFen();
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.node.destroy();
        playroomData_1.playroom.closeBanner();
    };
    pingFenPop.prototype.onClick_close = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.node.destroy();
        playroomData_1.playroom.closeBanner();
    };
    __decorate([
        property(cc.Node)
    ], pingFenPop.prototype, "starBox", void 0);
    __decorate([
        property(cc.Node)
    ], pingFenPop.prototype, "clickBox", void 0);
    pingFenPop = __decorate([
        ccclass
    ], pingFenPop);
    return pingFenPop;
}(cc.Component));
exports.default = pingFenPop;

cc._RF.pop();