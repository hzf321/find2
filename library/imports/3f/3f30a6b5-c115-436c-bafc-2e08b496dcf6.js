"use strict";
cc._RF.push(module, '3f30aa1wRVDbLr8Lgi0ltz2', 'load');
// script/load.ts

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
var gameControl_1 = require("./tool/gameControl");
var playroomData_1 = require("./tool/playroomData");
var stockpileUtils_1 = require("./tool/stockpileUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var load = /** @class */ (function (_super) {
    __extends(load, _super);
    function load() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading_bg = null;
        _this.loaging_bar_yellow = null;
        _this.loadingBox = null;
        _this.gotoHallBox = null;
        _this.loading_play = null;
        _this.resNum = 6;
        _this.nowNum = 0;
        return _this;
    }
    load.prototype.start = function () {
        var _this = this;
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        gameControl_1.gc.adapterBg(this.loading_bg);
        gameControl_1.gc.voiceUtils.initBtnClickEffect();
        gameControl_1.gc.voiceUtils.initbgmMusic();
        var playroomStorage = stockpileUtils_1.stockpileUtils.getStorageJSON(playroomData_1.storage.gamedata);
        if (playroomStorage) {
            playroomData_1.playroom.userData = playroomStorage;
        }
        gameControl_1.gc.setsceneNode(this.node);
        if (!playroomData_1.playroom.userData.isClause) {
            this.gotoHallBox.active = false;
            this.loadingBox.active = false;
            gameControl_1.gc.resLoading.showDialog(gameControl_1.pop.termPop, {
                callback: function () {
                    playroomData_1.playroom.userData.isClause = true;
                    _this.gotoHallBox.active = true;
                    _this.loadingBox.active = false;
                    playroomData_1.playroom.storageData();
                    cc.tween(_this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
                }
            });
        }
        else {
            this.gotoHallBox.active = true;
            this.loadingBox.active = false;
            cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
        }
        playroomData_1.playroom.setVideoFailCb(function () {
            cc.resources.load("prefeb/toast", cc.Prefab, function (err, prefab) {
                if (err) {
                    return;
                }
                var toast = cc.instantiate(prefab);
                gameControl_1.gc.resLoading.bindResAsset(toast, prefab);
                var parentNode = gameControl_1.gc.getsceneNode();
                if (toast && parentNode) {
                    toast.active = true;
                    parentNode.addChild(toast);
                    var toastLabel = toast.getChildByName("label");
                    toastLabel.getComponent(cc.Label).string = "No ads at the moment";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(function () {
                        toast.destroy();
                    }).start();
                }
            });
        });
    };
    load.prototype.onClick_gotoPlay = function () {
        var _this = this;
        this.gotoHallBox.active = false;
        this.loadingBox.active = true;
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.loaging_bar_yellow.fillRange = 0;
        cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
        cc.loader.loadResDir("prefeb", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('prefeb assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("finishImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('finishImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("originalImg", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('originalImg assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.loader.loadResDir("imgJson", function (err, assets) {
            if (err) {
                cc.error(err);
                return;
            }
            playroomData_1.playroom.levelAll = assets.length;
            console.log('imgJson assets in  have been loaded.');
            _this.progressBarEvent();
        });
        cc.director.preloadScene(gameControl_1.scene.main, function (err, assets) {
            cc.log("game scene preloaded");
            _this.progressBarEvent();
        });
        cc.director.preloadScene(gameControl_1.scene.sala, function (err, assets) {
            cc.log("hall scene preloaded");
            _this.progressBarEvent();
        });
    };
    load.prototype.progressBarEvent = function () {
        var _this = this;
        var fill = 1 / 6;
        this.nowNum++;
        cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
        cc.tween(this.loaging_bar_yellow).to(0.5, { fillRange: fill * this.nowNum })
            .call(function () {
            if (_this.nowNum == _this.resNum) {
                _this.scheduleOnce(function () {
                    if (playroomData_1.playroom.userData.isHall) {
                        cc.director.loadScene(gameControl_1.scene.sala);
                    }
                    else {
                        gameControl_1.gc.imgId = playroomData_1.playroom.userData.level;
                        cc.director.loadScene(gameControl_1.scene.main);
                    }
                }, 0.05);
            }
        }).start();
    };
    load.prototype.showShiPing = function () {
        console.log("android---------------showShiPing------------------");
        playroomData_1.playroom.showVideo(function () {
            console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
        });
    };
    load.prototype.showbanner = function () {
        console.log("android---------------showbanner------------------");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
    };
    load.prototype.hidebanner = function () {
        console.log("android---------------hidebanner------------------");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
    };
    load.prototype.showChaping = function () {
        console.log("android---------------showChaping------------------");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showChaping", "()V");
    };
    load.prototype.testBtn = function () {
        console.log("android---------------testBtn------------------");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openPingFen", "()V");
    };
    __decorate([
        property(cc.Node)
    ], load.prototype, "loading_bg", void 0);
    __decorate([
        property(cc.Sprite)
    ], load.prototype, "loaging_bar_yellow", void 0);
    __decorate([
        property(cc.Node)
    ], load.prototype, "loadingBox", void 0);
    __decorate([
        property(cc.Node)
    ], load.prototype, "gotoHallBox", void 0);
    __decorate([
        property(cc.Node)
    ], load.prototype, "loading_play", void 0);
    load = __decorate([
        ccclass
    ], load);
    return load;
}(cc.Component));
exports.default = load;

cc._RF.pop();