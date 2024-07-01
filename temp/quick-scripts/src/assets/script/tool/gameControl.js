"use strict";
cc._RF.push(module, '7fe7eKmHWtOBpfO6ERHigxH', 'gameControl');
// script/tool/gameControl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pop = exports.scene = exports.gc = void 0;
var voiceUtils_1 = require("./voiceUtils");
var resLoading_1 = require("./resLoading");
var gameControlClass = /** @class */ (function () {
    function gameControlClass() {
        this.sceneNode = null;
        this.imgId = 0;
        this.voiceUtils = new voiceUtils_1.voiceUtils();
        this.eventTarget = new cc.EventTarget();
        this.resLoading = resLoading_1.resLoading;
    }
    gameControlClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new gameControlClass();
        }
        return this._instance;
    };
    gameControlClass.prototype.setsceneNode = function (node) {
        this.sceneNode = node;
    };
    gameControlClass.prototype.getsceneNode = function () {
        return this.sceneNode;
    };
    /**
     * 时间转换，秒->分秒, mm:ss
    */
    gameControlClass.prototype.timeChange = function (value) {
        value = +value;
        var minute = Math.floor(value / 60);
        var second = Math.floor(value % 60);
        var minStr = "";
        if (minute < 10) { //分钟
            minStr = "0" + minute;
        }
        else {
            minStr = minute.toString();
        }
        var secStr = "";
        if (second < 10) { //秒数
            secStr = "0" + second;
        }
        else {
            secStr = second.toString();
        }
        return minStr + ":" + secStr;
    };
    //返回范围的随机数
    gameControlClass.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 0.999999999)) + min;
    };
    // 全屏窗口背景图适配
    gameControlClass.prototype.adapterBg = function (bgNode) {
        //背景大图适配 等比缩放 不留黑边
        var _bgWidthScale = cc.winSize.width / bgNode.width;
        var _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    };
    //转成节点坐标
    gameControlClass.prototype.changePos = function (toNode, fromNode) {
        if (!cc.isValid(toNode) || !cc.isValid(fromNode))
            return cc.v3(0, 0);
        var _pos = toNode.parent.convertToWorldSpaceAR(toNode.position);
        var _npos = fromNode.parent.convertToNodeSpaceAR(_pos);
        return _npos;
    };
    //------------------------------------------anim---------------------------------------------------------------
    gameControlClass.prototype.delayCallBack = function (time, _callback, nodeDelay) {
        var CanvasNode = cc.director.getScene().getChildByName('Canvas');
        if (cc.isValid(nodeDelay)) {
            CanvasNode = nodeDelay;
        }
        // cc.Tween.stopAllByTarget(CanvasNode);//这里不能停止CanvasNode的所有动作
        cc.tween(CanvasNode)
            .delay(time)
            .call(function () { if (_callback)
            _callback(); })
            .start();
    };
    gameControlClass.prototype.playSp = function (spSkel, name, isLoop, endCallback) {
        var _this = this;
        if (isLoop === void 0) { isLoop = false; }
        if (endCallback === void 0) { endCallback = null; }
        spSkel.setCompleteListener(function () {
            if (endCallback) {
                _this.delayCallBack(0.02, function () {
                    endCallback();
                }, spSkel.node);
            }
            spSkel.setCompleteListener(null);
            // spSkel.setDisposeListener(endCallback);
        });
        spSkel.setAnimation(0, name, isLoop);
    };
    gameControlClass.prototype.stopSp = function (spSkel) {
        spSkel.setCompleteListener(null);
        // spSkel.clearTracks();
    };
    // 序列动画(添加一个动画到尾巴 还可以延迟几秒)
    gameControlClass.prototype.addSequenceSp = function (spSkel, name, isLoop, delayTime) {
        if (isLoop === void 0) { isLoop = false; }
        if (delayTime) {
            spSkel.addAnimation(0, name, isLoop, delayTime);
        }
        else {
            spSkel.addAnimation(0, name, isLoop);
        }
    };
    gameControlClass._instance = null;
    return gameControlClass;
}());
exports.gc = gameControlClass.getInstance();
exports.scene = {
    main: "main",
    sala: "sala",
    load: "load",
};
exports.pop = {
    finishPop: "finishPop",
    outPop: "outPop",
    pingFenPop: "pingFenPop",
    quitPop: "quitPop",
    setPop: "setPop",
    termPop: "termPop",
};

cc._RF.pop();