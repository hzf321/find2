
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/tool/gameControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9nYW1lQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsMkNBQTBDO0FBWTFDO0lBQUE7UUFXVyxjQUFTLEdBQVksSUFBSSxDQUFBO1FBQ3pCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsZUFBVSxHQUFlLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQzFDLGdCQUFXLEdBQW1CLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBRyx1QkFBVSxDQUFDO0lBNkZuQyxDQUFDO0lBMUdpQiw0QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQVNELHVDQUFZLEdBQVosVUFBYSxJQUFhO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFHRDs7TUFFRTtJQUNGLHFDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2YsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFBO1FBQ3ZCLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRSxFQUFTLElBQUk7WUFDMUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENB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QUFDLENBQUM7UUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELGlDQUFNLEdBQU4sVUFBTyxNQUFtQjtRQUN0QixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsd0JBQXdCO0lBQzVCLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsd0NBQWEsR0FBYixVQUFjLE1BQW1CLEVBQUUsSUFBWSxFQUFFLE1BQXVCLEVBQUUsU0FBa0I7UUFBM0MsdUJBQUEsRUFBQSxjQUF1QjtRQUNwRSxJQUFJLFNBQVMsRUFBRTtZQUNYLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUEzR2MsMEJBQVMsR0FBcUIsSUFBSSxDQUFDO0lBNEd0RCx1QkFBQztDQTlHRCxBQThHQyxJQUFBO0FBRVUsUUFBQSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFJbEMsUUFBQSxLQUFLLEdBQUc7SUFDakIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0NBQ2YsQ0FBQTtBQUVZLFFBQUEsR0FBRyxHQUFHO0lBQ2YsU0FBUyxFQUFFLFdBQVc7SUFDdEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLFNBQVM7Q0FFckIsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZvaWNlVXRpbHMgfSBmcm9tIFwiLi92b2ljZVV0aWxzXCI7XHJcbmltcG9ydCB7IHJlc0xvYWRpbmcgfSBmcm9tIFwiLi9yZXNMb2FkaW5nXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBndWZlbmdiZWF1dHkge1xyXG4gICAgY2VudGVyUG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sICAgICAgICAgICAgLy8g5Lit5b+D54K55Z2Q5qCHIFxyXG4gICAgc3RhcnRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgLy8g6LW35aeL54K55Z2Q5qCHXHJcbiAgICBlbmRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgICAvLyDnu5PmnZ/ngrnlnZDmoIdcclxuICAgIGJsb2NrU2l6ZTogeyB3aWQ6IG51bWJlciwgaGVpOiBudW1iZXIgfSwgICAgICAgIC8vIOaWueWdl+Wkp+Wwj1xyXG4gICAgaXNGaW5kOiBib29sZWFuLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piv5ZCm5om+5YiwXHJcbn1cclxuXHJcblxyXG5jbGFzcyBnYW1lQ29udHJvbENsYXNzIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGdhbWVDb250cm9sQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogZ2FtZUNvbnRyb2xDbGFzcyB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgZ2FtZUNvbnRyb2xDbGFzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjZW5lTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIHB1YmxpYyBpbWdJZDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgcHVibGljIHZvaWNlVXRpbHM6IHZvaWNlVXRpbHMgPSBuZXcgdm9pY2VVdGlscygpO1xyXG4gICAgcHVibGljIGV2ZW50VGFyZ2V0OiBjYy5FdmVudFRhcmdldCA9IG5ldyBjYy5FdmVudFRhcmdldCgpO1xyXG4gICAgcHVibGljIHJlc0xvYWRpbmcgPSByZXNMb2FkaW5nO1xyXG4gICAgc2V0c2NlbmVOb2RlKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lTm9kZSA9IG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0c2NlbmVOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lTm9kZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDml7bpl7TovazmjaLvvIznp5ItPuWIhuenkiwgbW06c3NcclxuICAgICovXHJcbiAgICB0aW1lQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XHJcbiAgICAgICAgbGV0IG1pbnV0ZTogbnVtYmVyID0gTWF0aC5mbG9vcih2YWx1ZSAvIDYwKTtcclxuICAgICAgICBsZXQgc2Vjb25kOiBudW1iZXIgPSBNYXRoLmZsb29yKHZhbHVlICUgNjApO1xyXG4gICAgICAgIGxldCBtaW5TdHI6IHN0cmluZyA9IFwiXCJcclxuICAgICAgICBpZiAobWludXRlIDwgMTApIHsgICAgICAgIC8v5YiG6ZKfXHJcbiAgICAgICAgICAgIG1pblN0ciA9IFwiMFwiICsgbWludXRlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWluU3RyID0gbWludXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWNTdHI6IHN0cmluZyA9IFwiXCJcclxuICAgICAgICBpZiAoc2Vjb25kIDwgMTApIHsgICAgICAgIC8v56eS5pWwXHJcbiAgICAgICAgICAgIHNlY1N0ciA9IFwiMFwiICsgc2Vjb25kXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VjU3RyID0gc2Vjb25kLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHttaW5TdHJ9OiR7c2VjU3RyfWA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v6L+U5Zue6IyD5Zu055qE6ZqP5py65pWwXHJcbiAgICBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDAuOTk5OTk5OTk5KSkgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YWo5bGP56qX5Y+j6IOM5pmv5Zu+6YCC6YWNXHJcbiAgICBhZGFwdGVyQmcoYmdOb2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgLy/og4zmma/lpKflm77pgILphY0g562J5q+U57yp5pS+IOS4jeeVmem7kei+uVxyXG4gICAgICAgIGxldCBfYmdXaWR0aFNjYWxlID0gY2Mud2luU2l6ZS53aWR0aCAvIGJnTm9kZS53aWR0aDtcclxuICAgICAgICBsZXQgX2JnSGVpZ2h0U2NhbGUgPSBjYy53aW5TaXplLmhlaWdodCAvIGJnTm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgYmdOb2RlLnNjYWxlID0gTWF0aC5tYXgoX2JnV2lkdGhTY2FsZSwgX2JnSGVpZ2h0U2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L2s5oiQ6IqC54K55Z2Q5qCHXHJcbiAgICBjaGFuZ2VQb3ModG9Ob2RlOiBjYy5Ob2RlLCBmcm9tTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICghY2MuaXNWYWxpZCh0b05vZGUpIHx8ICFjYy5pc1ZhbGlkKGZyb21Ob2RlKSkgcmV0dXJuIGNjLnYzKDAsIDApO1xyXG4gICAgICAgIGxldCBfcG9zID0gdG9Ob2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodG9Ob2RlLnBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgX25wb3MgPSBmcm9tTm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoX3Bvcyk7XHJcbiAgICAgICAgcmV0dXJuIF9ucG9zO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWFuaW0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGRlbGF5Q2FsbEJhY2sodGltZTogbnVtYmVyLCBfY2FsbGJhY2s6IGFueSwgbm9kZURlbGF5PzogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBDYW52YXNOb2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZURlbGF5KSkge1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlID0gbm9kZURlbGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoQ2FudmFzTm9kZSk7Ly/ov5nph4zkuI3og73lgZzmraJDYW52YXNOb2Rl55qE5omA5pyJ5Yqo5L2cXHJcbiAgICAgICAgY2MudHdlZW4oQ2FudmFzTm9kZSlcclxuICAgICAgICAgICAgLmRlbGF5KHRpbWUpXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHsgaWYgKF9jYWxsYmFjaykgX2NhbGxiYWNrKCk7IH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlTcChzcFNrZWw6IHNwLlNrZWxldG9uLCBuYW1lOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlLCBlbmRDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgc3BTa2VsLnNldENvbXBsZXRlTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW5kQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXlDYWxsQmFjaygwLjAyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0sIHNwU2tlbC5ub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcFNrZWwuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcclxuICAgICAgICAgICAgLy8gc3BTa2VsLnNldERpc3Bvc2VMaXN0ZW5lcihlbmRDYWxsYmFjayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3BTa2VsLnNldEFuaW1hdGlvbigwLCBuYW1lLCBpc0xvb3ApO1xyXG4gICAgfVxyXG4gICAgc3RvcFNwKHNwU2tlbDogc3AuU2tlbGV0b24pOiB2b2lkIHtcclxuICAgICAgICBzcFNrZWwuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcclxuICAgICAgICAvLyBzcFNrZWwuY2xlYXJUcmFja3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDluo/liJfliqjnlLso5re75Yqg5LiA5Liq5Yqo55S75Yiw5bC+5be0IOi/mOWPr+S7peW7tui/n+WHoOenkilcclxuICAgIGFkZFNlcXVlbmNlU3Aoc3BTa2VsOiBzcC5Ta2VsZXRvbiwgbmFtZTogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZGVsYXlUaW1lPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGRlbGF5VGltZSkge1xyXG4gICAgICAgICAgICBzcFNrZWwuYWRkQW5pbWF0aW9uKDAsIG5hbWUsIGlzTG9vcCwgZGVsYXlUaW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcFNrZWwuYWRkQW5pbWF0aW9uKDAsIG5hbWUsIGlzTG9vcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGdjID0gZ2FtZUNvbnRyb2xDbGFzcy5nZXRJbnN0YW5jZSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2NlbmUgPSB7XHJcbiAgICBtYWluOiBcIm1haW5cIixcclxuICAgIHNhbGE6IFwic2FsYVwiLFxyXG4gICAgbG9hZDogXCJsb2FkXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3AgPSB7XHJcbiAgICBmaW5pc2hQb3A6IFwiZmluaXNoUG9wXCIsXHJcbiAgICBvdXRQb3A6IFwib3V0UG9wXCIsXHJcbiAgICBwaW5nRmVuUG9wOiBcInBpbmdGZW5Qb3BcIixcclxuICAgIHF1aXRQb3A6IFwicXVpdFBvcFwiLFxyXG4gICAgc2V0UG9wOiBcInNldFBvcFwiLFxyXG4gICAgdGVybVBvcDogXCJ0ZXJtUG9wXCIsXHJcbiAgIFxyXG59Il19