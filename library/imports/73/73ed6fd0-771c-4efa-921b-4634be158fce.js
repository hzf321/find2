"use strict";
cc._RF.push(module, '73ed6/QdxxO+pIbRjS+FY/O', 'main');
// script/main.ts

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
var newhand_1 = require("./prefeb/newhand");
var gameControl_1 = require("./tool/gameControl");
var playroomData_1 = require("./tool/playroomData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState;
(function (GameState) {
    GameState[GameState["find"] = 0] = "find";
    GameState[GameState["err"] = 1] = "err";
    GameState[GameState["finish"] = 2] = "finish";
})(GameState || (GameState = {}));
var main = /** @class */ (function (_super) {
    __extends(main, _super);
    function main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.originalImg = null;
        _this.finishImg = null;
        _this.tishi_qipao = null;
        _this.gameFindPrefab = null;
        _this.gameErrPrefab = null;
        _this.gameTishiPrefab = null;
        _this.game_tuowei = null;
        _this.imgSignBox = null;
        _this.yeziBox = null;
        _this.level = null;
        _this.timeAll = null;
        _this.reduceTime = null;
        _this.mask = null;
        _this.beautyData = [];
        _this.imgY = 257;
        _this.yuanshiScale = 0.5;
        _this.yeziAllNum = 10;
        _this.findNum = 0;
        _this.outTime = 0;
        _this.isPrompt = false;
        _this.timer = null;
        _this.isSuspend = false;
        _this.firstErr = false;
        _this.audioClips = [];
        _this.newhandNode = null;
        return _this;
    }
    main.prototype.start = function () {
        var _this = this;
        playroomData_1.playroom.setGamestop(function () {
            _this.isSuspend = true;
        });
        playroomData_1.playroom.setGamerecovery(function () {
            _this.isSuspend = false;
        });
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }
        this.resetAll();
        gameControl_1.gc.setsceneNode(this.node);
        gameControl_1.gc.adapterBg(this.bg);
        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        this.checkNewHand();
        cc.resources.loadDir("sound", cc.AudioClip, function (err, clips) {
            if (err || !cc.isValid(_this))
                return;
            _this.audioClips = clips;
            _this.addAutoReleaseAssets(clips);
        });
    };
    main.prototype.onEvent = function () {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    };
    main.prototype.resetAll = function (clearData) {
        if (!clearData) {
            this.beautyData = [];
        }
        this.imgSignBox.getChildByName("origBox").destroyAllChildren();
        this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
        this.imgSignBox.getChildByName("errBox").destroyAllChildren();
        this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
        this.imgSignBox.getChildByName("lizi").destroyAllChildren();
        this.mask.active = false;
        this.firstErr = false;
        this.isSuspend = false;
        this.timer = null;
        this.isPrompt = false;
        this.findNum = 0;
        this.init();
    };
    main.prototype.checkNewHand = function () {
        var _this = this;
        if (playroomData_1.playroom.userData.isGudie || gameControl_1.gc.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            gameControl_1.gc.resLoading.bindResAsset(node, prefab);
            _this.node.addChild(node);
            _this.newhandNode = node.getComponent(newhand_1.default);
            _this.newhandNode.showdong1();
        });
    };
    main.prototype.init = function () {
        this.level.string = "Lv" + gameControl_1.gc.imgId;
        for (var i = 0; i < this.yeziBox.children.length; i++) {
            var anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            gameControl_1.gc.playSp(anim, "1_an_stop");
        }
        this.outTime = this.getDownTime();
        this.changeQiPaoNum();
        this.mask.active = false;
        var time = gameControl_1.gc.timeChange(this.outTime);
        this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
    };
    //开启倒计时
    main.prototype.startDownTime = function () {
        if (this.outTime > 0) {
            var time = gameControl_1.gc.timeChange(this.outTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    };
    main.prototype.downTimeEvent = function () {
        if (this.isSuspend) {
            return;
        }
        this.outTime--;
        var time = gameControl_1.gc.timeChange(this.outTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.outTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(playroomData_1.sound.fail);
            cc.log("时间到了");
        }
    };
    main.prototype.errReduceTime = function () {
        var _this = this;
        if (!this.firstErr)
            return;
        var posY = this.timeAll.y;
        var reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(function () {
            _this.reduceTime.active = false;
        }).start();
        this.outTime -= reduceTime;
        if (this.outTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(playroomData_1.sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        }
        else {
            var time = gameControl_1.gc.timeChange(this.outTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    };
    main.prototype.changeQiPaoNum = function () {
        if (playroomData_1.playroom.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = playroomData_1.playroom.userData.tishiNum.toString();
        }
        else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    };
    main.prototype.loadRes = function () {
        var _this = this;
        gameControl_1.gc.resLoading.loadSprite("originalImg/" + "yuantu_" + gameControl_1.gc.imgId, this.originalImg.getComponent(cc.Sprite));
        gameControl_1.gc.resLoading.loadSprite("finishImg/" + "xiugai_" + gameControl_1.gc.imgId, this.finishImg.getComponent(cc.Sprite));
        cc.resources.load("imgJson/level" + gameControl_1.gc.imgId, cc.JsonAsset, function (err, res) {
            if (err) {
                cc.log(err);
                return;
            }
            // 获取到 Json 数据
            gameControl_1.gc.resLoading.bindResAsset(_this.node, res);
            var jsonData = res.json;
            if (jsonData && jsonData.path) {
                _this.beautyData = jsonData.path;
                for (var i = 0; i < _this.beautyData.length; i++) {
                    _this.beautyData[i].isFind = false;
                }
                cc.log(_this.beautyData, "this.beautyData ");
                // for (let i = 0; i < this.beautyData.length; i++) {
                //     let data = this.beautyData[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
                // for (let i = 0; i < this.beautyData.length; i++) {
                //     let data = this.beautyData[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        });
    };
    main.prototype.yeziLight = function (pos) {
        var _this = this;
        var anim = this.yeziBox.children[this.findNum - 1].getComponent(sp.Skeleton);
        var tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);
        var changePos = gameControl_1.gc.changePos(anim.node, tuowei);
        var time = 0.5;
        if (pos.y < 0) {
            time = 1;
        }
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(function () {
            _this.scheduleOnce(function () {
                tuowei.destroy();
            }, 0.3);
            gameControl_1.gc.playSp(anim, "2_bianliang");
            gameControl_1.gc.addSequenceSp(anim, "3_liang_stop");
        }).start();
    };
    main.prototype.findSignSucc = function (targetPos, findData) {
        for (var i = 0; i < 2; i++) {
            var gameFind = cc.instantiate(this.gameFindPrefab);
            var imgY = 0;
            if (i == 0) {
                imgY = targetPos.y * this.yuanshiScale + this.imgY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind);
            }
            else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind);
                imgY = targetPos.y * this.yuanshiScale - this.imgY;
            }
            var centerPos = cc.v3(targetPos.x * this.yuanshiScale, imgY);
            gameFind.setPosition(centerPos);
            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;
            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
        }
    };
    main.prototype.findSignErr = function (targetPos) {
        var clickPos = targetPos;
        var gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);
        var otherErrSign = null;
        if (clickPos.y > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y - (this.imgY * 2)));
        }
        else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y + (this.imgY * 2)));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    };
    main.prototype.imgEvent = function (event) {
        var pos = event.getLocation();
        var clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        var data = this.checkImgSign(clickPos);
        if (data.type == GameState.find) {
            if (this.isPrompt) {
                this.isPrompt = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.findNum = this.findNum + 1;
            this.findSignSucc(cc.v3(data.findData.centerPos.x, data.findData.centerPos.y), data.findData);
            this.yeziLight(clickPos);
            if (this.newhandNode && this.findNum == 1) {
                if (this.newhandNode) {
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }
            }
            else if (this.newhandNode && this.findNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                playroomData_1.playroom.userData.isGudie = true;
                playroomData_1.playroom.storageData();
            }
            this.playCommonSound(playroomData_1.sound.correct);
            if (this.findNum >= this.yeziAllNum) { //胜利 游戏结束
                this.gameEnd();
            }
        }
        else if (data.type == GameState.err) {
            this.playCommonSound(playroomData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.firstErr = true;
        }
        else {
            this.playCommonSound(playroomData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.firstErr = true;
        }
    };
    main.prototype.checkImgSign = function (targetPos) {
        var type = null;
        var findData = null;
        for (var i = 0; i < this.beautyData.length; i++) {
            var data = this.beautyData[i];
            var x = data.centerPos.x * this.yuanshiScale;
            var y = 0;
            if (targetPos.y > 0) {
                y = data.centerPos.y * this.yuanshiScale + this.imgY;
            }
            else {
                y = data.centerPos.y * this.yuanshiScale - this.imgY;
            }
            var wid = data.blockSize.wid * this.yuanshiScale;
            var hei = data.blockSize.hei * this.yuanshiScale;
            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;
            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = GameState.find;
                    findData = data;
                    data.isFind = true;
                }
                else {
                    type = GameState.finish;
                    cc.log("找到重复的了");
                }
                return { type: type, findData: findData };
            }
            else {
                type = GameState.err;
                cc.log("没找到");
            }
        }
        return { type: type, findData: findData };
    };
    main.prototype.errSignAnim = function (node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(function () {
            node.destroy();
        }).start();
    };
    main.prototype.gameEnd = function () {
        var _this = this;
        cc.log("游戏结束");
        this.mask.active = true;
        this.scheduleOnce(function () {
            var _loop_1 = function (i) {
                var anim = _this.yeziBox.children[i].getComponent(sp.Skeleton);
                _this.scheduleOnce(function () {
                    gameControl_1.gc.playSp(anim, "4_man", false, function () {
                        _this.scheduleOnce(function () {
                            if (i == _this.yeziBox.children.length - 1) {
                                _this.playCommonSound(playroomData_1.sound.win);
                                if (playroomData_1.playroom.userData.level + 1 <= playroomData_1.playroom.levelAll) {
                                    playroomData_1.playroom.userData.level = playroomData_1.playroom.userData.level + 1;
                                    playroomData_1.playroom.storageData();
                                }
                                gameControl_1.gc.resLoading.showDialog(gameControl_1.pop.finishPop, {
                                    callback: function () {
                                        if (gameControl_1.gc.imgId + 1 <= playroomData_1.playroom.levelAll) {
                                            gameControl_1.gc.imgId = gameControl_1.gc.imgId + 1;
                                            _this.resetAll();
                                            _this.init();
                                            _this.startDownTime();
                                            _this.loadRes();
                                        }
                                        else {
                                            playroomData_1.playroom.userData.isHall = true;
                                            playroomData_1.playroom.storageData();
                                            cc.director.loadScene(gameControl_1.scene.sala);
                                        }
                                    }
                                });
                            }
                        });
                    });
                }, 0.1 * i);
            };
            for (var i = 0; i < _this.yeziBox.children.length; i++) {
                _loop_1(i);
            }
        }, 0.5);
    };
    //获取当前关卡的倒计时
    main.prototype.getDownTime = function () {
        var level = gameControl_1.gc.imgId;
        var time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        }
        else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        }
        else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        }
        else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        }
        else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        }
        else {
            time = 1 * 60;
        }
        return time;
    };
    //时间到
    main.prototype.timeOutEvent = function () {
        var _this = this;
        gameControl_1.gc.resLoading.showDialog(gameControl_1.pop.outPop, {
            ADcallback: function () {
                _this.outTime = 60;
                playroomData_1.playroom.userData.tishiNum++;
                playroomData_1.playroom.storageData();
                _this.changeQiPaoNum();
                _this.startDownTime();
            },
            restartCallBack: function () {
                _this.resetAll(true);
                _this.init();
                _this.startDownTime();
                cc.log(_this.beautyData, "this.beautyData");
                for (var i = 0; i < _this.beautyData.length; i++) {
                    _this.beautyData[i].isFind = false;
                }
            }
        });
    };
    main.prototype.onClick_back = function () {
        var _this = this;
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.isSuspend = true;
        gameControl_1.gc.resLoading.showDialog(gameControl_1.pop.quitPop, { callback: function () { _this.isSuspend = false; } });
    };
    main.prototype.onClick_pause = function () {
        var _this = this;
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.isSuspend = true;
        gameControl_1.gc.resLoading.showDialog(gameControl_1.pop.setPop, { isGame: true, callback: function () { _this.isSuspend = false; } });
    };
    main.prototype.onClick_tishi = function () {
        var _this = this;
        gameControl_1.gc.voiceUtils.commonBtnClick();
        if (this.isPrompt) {
            playroomData_1.playroom.opentoast("Prompt already exists");
            return;
        }
        var findData = null;
        for (var i = 0; i < this.beautyData.length; i++) {
            if (!this.beautyData[i].isFind) {
                findData = this.beautyData[i];
                break;
            }
        }
        if (!findData) {
            return;
        }
        if (playroomData_1.playroom.userData.tishiNum <= 0) {
            cc.log("看广告");
            playroomData_1.playroom.showVideo(function () {
                _this.showTiShi(findData);
            });
            return;
        }
        playroomData_1.playroom.userData.tishiNum = playroomData_1.playroom.userData.tishiNum - 1;
        playroomData_1.playroom.storageData();
        this.changeQiPaoNum();
        this.showTiShi(findData);
    };
    main.prototype.showTiShi = function (findData) {
        if (findData) {
            this.isPrompt = true;
            for (var i = 0; i < 2; i++) {
                var tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);
                var x = findData.centerPos.x * this.yuanshiScale;
                var y = 0;
                if (i == 0) {
                    y = findData.centerPos.y * this.yuanshiScale + this.imgY;
                }
                else {
                    y = findData.centerPos.y * this.yuanshiScale - this.imgY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.7 }).to(0.5, { scale: 1 }).union().repeatForever().start();
            }
        }
    };
    //播放音效
    main.prototype.playCommonSound = function (audioName, loop) {
        if (loop === void 0) { loop = false; }
        for (var i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                var audioID = gameControl_1.gc.voiceUtils.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], main.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], main.prototype, "originalImg", void 0);
    __decorate([
        property(cc.Node)
    ], main.prototype, "finishImg", void 0);
    __decorate([
        property(cc.Node)
    ], main.prototype, "tishi_qipao", void 0);
    __decorate([
        property(cc.Prefab)
    ], main.prototype, "gameFindPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], main.prototype, "gameErrPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], main.prototype, "gameTishiPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], main.prototype, "game_tuowei", void 0);
    __decorate([
        property(cc.Node)
    ], main.prototype, "imgSignBox", void 0);
    __decorate([
        property(cc.Node)
    ], main.prototype, "yeziBox", void 0);
    __decorate([
        property(cc.Label)
    ], main.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], main.prototype, "timeAll", void 0);
    __decorate([
        property(cc.Node)
    ], main.prototype, "reduceTime", void 0);
    __decorate([
        property(cc.Node)
    ], main.prototype, "mask", void 0);
    main = __decorate([
        ccclass
    ], main);
    return main;
}(cc.Component));
exports.default = main;

cc._RF.pop();