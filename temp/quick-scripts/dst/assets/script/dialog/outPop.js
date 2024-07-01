
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/outPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98460XFFs1JCI9f0VmFuXBW', 'outPop');
// script/dialog/outPop.ts

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
var outPop = /** @class */ (function (_super) {
    __extends(outPop, _super);
    function outPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ADcallback = null;
        _this.restartCallBack = null;
        return _this;
    }
    outPop.prototype.start = function () {
        playroomData_1.playroom.showBanner();
    };
    outPop.prototype.initData = function (data) {
        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    };
    outPop.prototype.onClick_AD_btn = function () {
        var _this = this;
        gameControl_1.gc.voiceUtils.commonBtnClick();
        playroomData_1.playroom.showVideo(function () {
            _this.scheduleOnce(function () {
                _this.ADcallback && _this.ADcallback();
                _this.node.destroy();
                playroomData_1.playroom.closeBanner();
            });
        });
    };
    outPop.prototype.onClick_restart = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        this.restartCallBack && this.restartCallBack();
        this.node.destroy();
        playroomData_1.playroom.closeBanner();
    };
    outPop = __decorate([
        ccclass
    ], outPop);
    return outPop;
}(cc.Component));
exports.default = outPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL291dFBvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBeUM7QUFDekMscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBaUNDO1FBL0JHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLHFCQUFlLEdBQWEsSUFBSSxDQUFDOztJQThCckMsQ0FBQztJQTVCRyxzQkFBSyxHQUFMO1FBQ0ksdUJBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQseUJBQVEsR0FBUixVQUFTLElBQUk7UUFFVCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hELENBQUM7SUFHRCwrQkFBYyxHQUFkO1FBQUEsaUJBU0M7UUFSRyxnQkFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQix1QkFBUSxDQUFDLFNBQVMsQ0FBQztZQUNmLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7Z0JBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLHVCQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBZSxHQUFmO1FBQ0ksZ0JBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQix1QkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFoQ2dCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FpQzFCO0lBQUQsYUFBQztDQWpDRCxBQWlDQyxDQWpDbUMsRUFBRSxDQUFDLFNBQVMsR0FpQy9DO2tCQWpDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdjIH0gZnJvbSBcIi4uL3Rvb2wvZ2FtZUNvbnRyb2xcIjtcbmltcG9ydCB7IHBsYXlyb29tIH0gZnJvbSBcIi4uL3Rvb2wvcGxheXJvb21EYXRhXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvdXRQb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQURjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuICAgIHJlc3RhcnRDYWxsQmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHBsYXlyb29tLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG5cbiAgICAgICAgdGhpcy5BRGNhbGxiYWNrID0gZGF0YS5BRGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnJlc3RhcnRDYWxsQmFjayA9IGRhdGEucmVzdGFydENhbGxCYWNrO1xuICAgIH1cblxuXG4gICAgb25DbGlja19BRF9idG4oKSB7XG4gICAgICAgIGdjLnZvaWNlVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgcGxheXJvb20uc2hvd1ZpZGVvKCgpPT57XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuQURjYWxsYmFjayAmJiB0aGlzLkFEY2FsbGJhY2soKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgcGxheXJvb20uY2xvc2VCYW5uZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrX3Jlc3RhcnQoKSB7XG4gICAgICAgIGdjLnZvaWNlVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0Q2FsbEJhY2sgJiYgdGhpcy5yZXN0YXJ0Q2FsbEJhY2soKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBwbGF5cm9vbS5jbG9zZUJhbm5lcigpO1xuICAgIH1cbn1cbiJdfQ==