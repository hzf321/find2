"use strict";
cc._RF.push(module, '014741UGutBway3J/ZL6r3K', 'sala');
// script/sala.ts

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
var imgItem_1 = require("./prefeb/imgItem");
var gameControl_1 = require("./tool/gameControl");
var playroomData_1 = require("./tool/playroomData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var sala = /** @class */ (function (_super) {
    __extends(sala, _super);
    function sala() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.imgItem = null;
        _this.scroll_contect = null;
        _this.scrollView = null;
        return _this;
    }
    sala.prototype.start = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        gameControl_1.gc.setsceneNode(this.node);
        gameControl_1.gc.adapterBg(this.bg);
        this.scheduleOnce(function () {
            _this.init();
        });
        this.scheduleOnce(function () {
            if (playroomData_1.playroom.userData.level > 4 && playroomData_1.playroom.userData.level < playroomData_1.playroom.levelAll) {
                var hei = 260;
                var y = 0;
                if (playroomData_1.playroom.userData.level % 2 == 0) {
                    var index = playroomData_1.playroom.userData.level / 2;
                    y = ((playroomData_1.playroom.userData.level - 1) - index) * hei;
                }
                else {
                    var index = (playroomData_1.playroom.userData.level + 1) / 2;
                    y = (playroomData_1.playroom.userData.level - index) * hei;
                }
                _this.scrollView.scrollToOffset(cc.v2(0, y), 1);
            }
        }, 0.1);
    };
    sala.prototype.init = function () {
        this.scroll_contect.destroyAllChildren();
        for (var i = 0; i < 30; i++) {
            var item = cc.instantiate(this.imgItem);
            this.scroll_contect.addChild(item);
            item.getComponent(imgItem_1.default).init(i, this);
        }
    };
    sala.prototype.onClick_setting = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        gameControl_1.gc.resLoading.showDialog(gameControl_1.pop.setPop, { isGame: false });
        // gc.resLoading.showDialog(dialog.comment_dialog);
    };
    sala.prototype.showToast = function (text) {
        gameControl_1.gc.resLoading.showToast(text);
    };
    __decorate([
        property(cc.Node)
    ], sala.prototype, "bg", void 0);
    __decorate([
        property(cc.Prefab)
    ], sala.prototype, "imgItem", void 0);
    __decorate([
        property(cc.Node)
    ], sala.prototype, "scroll_contect", void 0);
    __decorate([
        property(cc.ScrollView)
    ], sala.prototype, "scrollView", void 0);
    sala = __decorate([
        ccclass
    ], sala);
    return sala;
}(cc.Component));
exports.default = sala;

cc._RF.pop();