
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdG9vbC9nYW1lQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsMkNBQTBDO0FBWTFDO0lBQUE7UUFXVyxjQUFTLEdBQVksSUFBSSxDQUFBO1FBQ3pCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsZUFBVSxHQUFlLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQzFDLGdCQUFXLEdBQW1CLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBRyx1QkFBVSxDQUFDO0lBNkZuQyxDQUFDO0lBMUdpQiw0QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQVNELHVDQUFZLEdBQVosVUFBYSxJQUFhO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFHRDs7TUFFRTtJQUNGLHFDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2YsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFBO1FBQ3ZCLElBQUksTUFBTSxHQUFHLEVBQUUsRUFBRSxFQUFTLE1BQU07WUFDNUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENB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QUFDLENBQUM7UUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELGlDQUFNLEdBQU4sVUFBTyxNQUFtQjtRQUN0QixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsd0JBQXdCO0lBQzVCLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsd0NBQWEsR0FBYixVQUFjLE1BQW1CLEVBQUUsSUFBWSxFQUFFLE1BQXVCLEVBQUUsU0FBa0I7UUFBM0MsdUJBQUEsRUFBQSxjQUF1QjtRQUNwRSxJQUFJLFNBQVMsRUFBRTtZQUNYLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUEzR2MsMEJBQVMsR0FBcUIsSUFBSSxDQUFDO0lBNEd0RCx1QkFBQztDQTlHRCxBQThHQyxJQUFBO0FBRVUsUUFBQSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFJbEMsUUFBQSxLQUFLLEdBQUc7SUFDakIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0NBQ2YsQ0FBQTtBQUVZLFFBQUEsR0FBRyxHQUFHO0lBQ2YsU0FBUyxFQUFFLFdBQVc7SUFDdEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLFNBQVM7Q0FFckIsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZvaWNlVXRpbHMgfSBmcm9tIFwiLi92b2ljZVV0aWxzXCI7XHJcbmltcG9ydCB7IHJlc0xvYWRpbmcgfSBmcm9tIFwiLi9yZXNMb2FkaW5nXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBndWZlbmdiZWF1dHkge1xyXG4gICAgY2VudGVyUG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sICAgICAgICAgICAgLy8g5Lit5b+D54K55Z2Q5qCHIFxyXG4gICAgc3RhcnRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgLy8g6LW35aeL54K55Z2Q5qCHXHJcbiAgICBlbmRQb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSwgICAgICAgICAgICAgICAvLyDnu5PmnZ/ngrnlnZDmoIdcclxuICAgIGJsb2NrU2l6ZTogeyB3aWQ6IG51bWJlciwgaGVpOiBudW1iZXIgfSwgICAgICAgIC8vIOaWueWdl+Wkp+Wwj1xyXG4gICAgaXNGaW5kOiBib29sZWFuLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piv5ZCm5om+5YiwXHJcbn1cclxuXHJcblxyXG5jbGFzcyBnYW1lQ29udHJvbENsYXNzIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGdhbWVDb250cm9sQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogZ2FtZUNvbnRyb2xDbGFzcyB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgZ2FtZUNvbnRyb2xDbGFzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjZW5lTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIHB1YmxpYyBpbWdJZDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgcHVibGljIHZvaWNlVXRpbHM6IHZvaWNlVXRpbHMgPSBuZXcgdm9pY2VVdGlscygpO1xyXG4gICAgcHVibGljIGV2ZW50VGFyZ2V0OiBjYy5FdmVudFRhcmdldCA9IG5ldyBjYy5FdmVudFRhcmdldCgpO1xyXG4gICAgcHVibGljIHJlc0xvYWRpbmcgPSByZXNMb2FkaW5nO1xyXG4gICAgc2V0c2NlbmVOb2RlKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lTm9kZSA9IG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0c2NlbmVOb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lTm9kZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDml7bpl7TovazmjaLvvIznp5ItPuWIhuenkiwgbW06c3NcclxuICAgICovXHJcbiAgICB0aW1lQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XHJcbiAgICAgICAgbGV0IG1pbnV0ZTogbnVtYmVyID0gTWF0aC5mbG9vcih2YWx1ZSAvIDYwKTtcclxuICAgICAgICBsZXQgc2Vjb25kOiBudW1iZXIgPSBNYXRoLmZsb29yKHZhbHVlICUgNjApO1xyXG4gICAgICAgIGxldCBtaW5TdHI6IHN0cmluZyA9IFwiXCJcclxuICAgICAgICBpZiAobWludXRlIDwgMTApIHsgICAgICAgIC8v5YiG6ZKfICBcclxuICAgICAgICAgICAgbWluU3RyID0gXCIwXCIgKyBtaW51dGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtaW5TdHIgPSBtaW51dGUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlY1N0cjogc3RyaW5nID0gXCJcIlxyXG4gICAgICAgIGlmIChzZWNvbmQgPCAxMCkgeyAgICAgICAgLy/np5LmlbBcclxuICAgICAgICAgICAgc2VjU3RyID0gXCIwXCIgKyBzZWNvbmRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWNTdHIgPSBzZWNvbmQudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke21pblN0cn06JHtzZWNTdHJ9YDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/ov5Tlm57ojIPlm7TnmoTpmo/mnLrmlbBcclxuICAgIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMC45OTk5OTk5OTkpKSArIG1pbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlhajlsY/nqpflj6Pog4zmma/lm77pgILphY1cclxuICAgIGFkYXB0ZXJCZyhiZ05vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICAvL+iDjOaZr+Wkp+WbvumAgumFjSDnrYnmr5TnvKnmlL4g5LiN55WZ6buR6L65XHJcbiAgICAgICAgbGV0IF9iZ1dpZHRoU2NhbGUgPSBjYy53aW5TaXplLndpZHRoIC8gYmdOb2RlLndpZHRoO1xyXG4gICAgICAgIGxldCBfYmdIZWlnaHRTY2FsZSA9IGNjLndpblNpemUuaGVpZ2h0IC8gYmdOb2RlLmhlaWdodDtcclxuICAgICAgICBiZ05vZGUuc2NhbGUgPSBNYXRoLm1heChfYmdXaWR0aFNjYWxlLCBfYmdIZWlnaHRTY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ovazmiJDoioLngrnlnZDmoIdcclxuICAgIGNoYW5nZVBvcyh0b05vZGU6IGNjLk5vZGUsIGZyb21Ob2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRvTm9kZSkgfHwgIWNjLmlzVmFsaWQoZnJvbU5vZGUpKSByZXR1cm4gY2MudjMoMCwgMCk7XHJcbiAgICAgICAgbGV0IF9wb3MgPSB0b05vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0b05vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGxldCBfbnBvcyA9IGZyb21Ob2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihfcG9zKTtcclxuICAgICAgICByZXR1cm4gX25wb3M7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYW5pbS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZGVsYXlDYWxsQmFjayh0aW1lOiBudW1iZXIsIF9jYWxsYmFjazogYW55LCBub2RlRGVsYXk/OiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IENhbnZhc05vZGUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKTtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlRGVsYXkpKSB7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUgPSBub2RlRGVsYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChDYW52YXNOb2RlKTsvL+i/memHjOS4jeiDveWBnOatokNhbnZhc05vZGXnmoTmiYDmnInliqjkvZxcclxuICAgICAgICBjYy50d2VlbihDYW52YXNOb2RlKVxyXG4gICAgICAgICAgICAuZGVsYXkodGltZSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4geyBpZiAoX2NhbGxiYWNrKSBfY2FsbGJhY2soKTsgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheVNwKHNwU2tlbDogc3AuU2tlbGV0b24sIG5hbWU6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2UsIGVuZENhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBzcFNrZWwuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbmRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUNhbGxCYWNrKDAuMDIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSwgc3BTa2VsLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwU2tlbC5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xyXG4gICAgICAgICAgICAvLyBzcFNrZWwuc2V0RGlzcG9zZUxpc3RlbmVyKGVuZENhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzcFNrZWwuc2V0QW5pbWF0aW9uKDAsIG5hbWUsIGlzTG9vcCk7XHJcbiAgICB9XHJcbiAgICBzdG9wU3Aoc3BTa2VsOiBzcC5Ta2VsZXRvbik6IHZvaWQge1xyXG4gICAgICAgIHNwU2tlbC5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xyXG4gICAgICAgIC8vIHNwU2tlbC5jbGVhclRyYWNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOW6j+WIl+WKqOeUuyjmt7vliqDkuIDkuKrliqjnlLvliLDlsL7lt7Qg6L+Y5Y+v5Lul5bu26L+f5Yeg56eSKVxyXG4gICAgYWRkU2VxdWVuY2VTcChzcFNrZWw6IHNwLlNrZWxldG9uLCBuYW1lOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlLCBkZWxheVRpbWU/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZGVsYXlUaW1lKSB7XHJcbiAgICAgICAgICAgIHNwU2tlbC5hZGRBbmltYXRpb24oMCwgbmFtZSwgaXNMb29wLCBkZWxheVRpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwU2tlbC5hZGRBbmltYXRpb24oMCwgbmFtZSwgaXNMb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgZ2MgPSBnYW1lQ29udHJvbENsYXNzLmdldEluc3RhbmNlKCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzY2VuZSA9IHtcclxuICAgIG1haW46IFwibWFpblwiLFxyXG4gICAgc2FsYTogXCJzYWxhXCIsXHJcbiAgICBsb2FkOiBcImxvYWRcIixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvcCA9IHtcclxuICAgIGZpbmlzaFBvcDogXCJmaW5pc2hQb3BcIixcclxuICAgIG91dFBvcDogXCJvdXRQb3BcIixcclxuICAgIHBpbmdGZW5Qb3A6IFwicGluZ0ZlblBvcFwiLFxyXG4gICAgcXVpdFBvcDogXCJxdWl0UG9wXCIsXHJcbiAgICBzZXRQb3A6IFwic2V0UG9wXCIsXHJcbiAgICB0ZXJtUG9wOiBcInRlcm1Qb3BcIixcclxuICAgXHJcbn0iXX0=