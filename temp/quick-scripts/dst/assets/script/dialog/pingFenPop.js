
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/dialog/pingFenPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGlhbG9nL3BpbmdGZW5Qb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXlDO0FBQ3pDLHFEQUFnRDtBQUcxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWdEQztRQTlDRyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUF3QzdCLENBQUM7SUF0Q0csNkJBQVEsR0FBUixVQUFTLElBQUk7SUFFYixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLDREQUE0RDtRQUM1RCw0Q0FBNEM7UUFDNUMscURBQXFEO1FBQ3JELDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsSUFBSTtRQUVKLHVCQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDdkI7U0FDSjtJQUNMLENBQUM7SUFFRCx1Q0FBa0IsR0FBbEI7UUFDSSx1QkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsdUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsa0NBQWEsR0FBYjtRQUNJLGdCQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsdUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBMUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQVJSLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FnRDlCO0lBQUQsaUJBQUM7Q0FoREQsQUFnREMsQ0FoRHVDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RuRDtrQkFoRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYyB9IGZyb20gXCIuLi90b29sL2dhbWVDb250cm9sXCI7XG5pbXBvcnQgeyBwbGF5cm9vbSB9IGZyb20gXCIuLi90b29sL3BsYXlyb29tRGF0YVwiO1xuIFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGluZ0ZlblBvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3RhckJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjbGlja0JveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBpbml0RGF0YShkYXRhKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNsaWNrQm94LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgaXRlbSA9IHRoaXMuY2xpY2tCb3guY2hpbGRyZW5baV07XG4gICAgICAgIC8vICAgICBpdGVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4geyAgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zaG93U3RhcihpKVxuICAgICAgICAvLyAgICAgfSwgdGhpcylcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHBsYXlyb29tLnNob3dCYW5uZXIoKTtcbiAgICB9XG5cbiAgICBzaG93U3RhcihpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhckJveC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnN0YXJCb3guY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoaSA8PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tfY29tbWVudEJ0bigpIHtcbiAgICAgICAgcGxheXJvb20uc2hvd1BpbmdGZW4oKTtcbiAgICAgICAgZ2Mudm9pY2VVdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBwbGF5cm9vbS5jbG9zZUJhbm5lcigpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tfY2xvc2UoKSB7XG4gICAgICAgIGdjLnZvaWNlVXRpbHMuY29tbW9uQnRuQ2xpY2soKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgcGxheXJvb20uY2xvc2VCYW5uZXIoKTtcbiAgICB9XG59XG4iXX0=