"use strict";
cc._RF.push(module, '373fe8INcZH8KIbG9PDCZWr', 'setPop');
// script/dialog/setPop.ts

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
var setPop = /** @class */ (function (_super) {
    __extends(setPop, _super);
    function setPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.pause_sprite = null;
        _this.setting_sprite = null;
        _this.soundBox = null;
        _this.musicBox = null;
        _this.zhengdongBox = null;
        _this.setting_pausebtn = null;
        _this.setting_ok = null;
        _this.callback = null;
        return _this;
    }
    setPop.prototype.start = function () {
        this.init();
        playroomData_1.playroom.showBanner();
    };
    setPop.prototype.initData = function (data) {
        this.callback = data.callback;
        if (data.isGame) {
            this.title.spriteFrame = this.pause_sprite;
            this.setting_ok.active = false;
            this.setting_pausebtn.active = true;
        }
        else {
            this.title.spriteFrame = this.setting_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        }
    };
    setPop.prototype.init = function () {
        if (!gameControl_1.gc.voiceUtils.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        }
        else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
        if (!gameControl_1.gc.voiceUtils.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        }
        else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
        if (!gameControl_1.gc.voiceUtils.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        }
        else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    };
    setPop.prototype.onClick_musicbtn = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        gameControl_1.gc.voiceUtils.switchMusic();
        if (!gameControl_1.gc.voiceUtils.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        }
        else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
    };
    setPop.prototype.onClick_soundbtn = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        gameControl_1.gc.voiceUtils.switchEffect();
        if (!gameControl_1.gc.voiceUtils.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        }
        else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
    };
    setPop.prototype.onClick_zhengdongbtn = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        gameControl_1.gc.voiceUtils.switchShock();
        if (!gameControl_1.gc.voiceUtils.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        }
        else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    };
    setPop.prototype.onClick_continue_btn = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.node.destroy();
        playroomData_1.playroom.closeBanner();
        this.callback && this.callback();
    };
    setPop.prototype.onClick_ok_btn = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        playroomData_1.playroom.closeBanner();
    };
    setPop.prototype.onClick_PrivacyPolicy_btn = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        cc.sys.openURL(playroomData_1.playroom.privacyPolicyUrl);
    };
    setPop.prototype.onClick_Termsofservicebtn = function () {
        cc.sys.openURL(playroomData_1.playroom.termsofServiceUrl);
        gameControl_1.gc.voiceUtils.commonBtnClick();
    };
    __decorate([
        property(cc.Sprite)
    ], setPop.prototype, "title", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], setPop.prototype, "pause_sprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], setPop.prototype, "setting_sprite", void 0);
    __decorate([
        property(cc.Node)
    ], setPop.prototype, "soundBox", void 0);
    __decorate([
        property(cc.Node)
    ], setPop.prototype, "musicBox", void 0);
    __decorate([
        property(cc.Node)
    ], setPop.prototype, "zhengdongBox", void 0);
    __decorate([
        property(cc.Node)
    ], setPop.prototype, "setting_pausebtn", void 0);
    __decorate([
        property(cc.Node)
    ], setPop.prototype, "setting_ok", void 0);
    setPop = __decorate([
        ccclass
    ], setPop);
    return setPop;
}(cc.Component));
exports.default = setPop;

cc._RF.pop();