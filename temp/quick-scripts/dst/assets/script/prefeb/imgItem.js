
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/prefeb/imgItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b349d0IddZO5bDF9FOpApzL', 'imgItem');
// script/prefeb/imgItem.ts

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
var imgItem = /** @class */ (function (_super) {
    __extends(imgItem, _super);
    function imgItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hall_mask = null;
        _this.img = null;
        _this.idx = 0;
        _this.isbool = false;
        _this.hall = null;
        return _this;
    }
    imgItem.prototype.start = function () {
    };
    imgItem.prototype.init = function (idx, hall) {
        this.idx = idx;
        this.hall = hall;
        if (this.idx < playroomData_1.playroom.userData.level) {
            this.hall_mask.active = false;
            this.isbool = true;
        }
        else {
            this.hall_mask.active = true;
            this.isbool = false;
        }
        gameControl_1.gc.resLoading.loadSprite("originalImg/" + "yuantu_" + (this.idx + 1), this.img);
    };
    imgItem.prototype.onclick_item = function () {
        gameControl_1.gc.voiceUtils.commonBtnClick();
        if (this.isbool) {
            gameControl_1.gc.imgId = this.idx + 1;
            playroomData_1.playroom.userData.isHall = false;
            playroomData_1.playroom.storageData();
            cc.director.loadScene(gameControl_1.scene.main);
        }
        else {
            this.hall.showToast("The level has not been unlocked yet");
        }
    };
    __decorate([
        property(cc.Node)
    ], imgItem.prototype, "hall_mask", void 0);
    __decorate([
        property(cc.Sprite)
    ], imgItem.prototype, "img", void 0);
    imgItem = __decorate([
        ccclass
    ], imgItem);
    return imgItem;
}(cc.Component));
exports.default = imgItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcHJlZmViL2ltZ0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQWdEO0FBQ2hELHFEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTBDQztRQXZDRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFNBQUcsR0FBYyxJQUFJLENBQUM7UUFFZCxTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBRWhCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFaEMsVUFBSSxHQUFTLElBQUksQ0FBQzs7SUE4QnRCLENBQUM7SUE3QkcsdUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQUssR0FBVyxFQUFFLElBQVU7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsdUJBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN0QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBQ0QsZ0JBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBSSxTQUFTLEdBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsOEJBQVksR0FBWjtRQUNJLGdCQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLGdCQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLHVCQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDakMsdUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQzlEO0lBQ0wsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0U7SUFOTCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBMEMzQjtJQUFELGNBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ29DLEVBQUUsQ0FBQyxTQUFTLEdBMENoRDtrQkExQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FsYSBmcm9tIFwiLi4vc2FsYVwiO1xuaW1wb3J0IHsgZ2MsIHNjZW5lIH0gZnJvbSBcIi4uL3Rvb2wvZ2FtZUNvbnRyb2xcIjtcbmltcG9ydCB7IHBsYXlyb29tIH0gZnJvbSBcIi4uL3Rvb2wvcGxheXJvb21EYXRhXCI7XG4gXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1nSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYWxsX21hc2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpbWc6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGlkeDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgaXNib29sOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBoYWxsOiBzYWxhID0gbnVsbDtcbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIGluaXQoaWR4OiBudW1iZXIsIGhhbGw6IHNhbGEpIHtcbiAgICAgICAgdGhpcy5pZHggPSBpZHg7XG4gICAgICAgIHRoaXMuaGFsbCA9IGhhbGw7XG4gICAgICAgIGlmICh0aGlzLmlkeCA8IHBsYXlyb29tLnVzZXJEYXRhLmxldmVsKSB7XG4gICAgICAgICAgICB0aGlzLmhhbGxfbWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNib29sID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFsbF9tYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzYm9vbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGdjLnJlc0xvYWRpbmcubG9hZFNwcml0ZShcIm9yaWdpbmFsSW1nL1wiICsgIFwieXVhbnR1X1wiICsodGhpcy5pZHggKyAxKSwgdGhpcy5pbWcpO1xuICAgIH1cblxuICAgIG9uY2xpY2tfaXRlbSgpIHtcbiAgICAgICAgZ2Mudm9pY2VVdGlscy5jb21tb25CdG5DbGljaygpO1xuICAgICAgICBpZiAodGhpcy5pc2Jvb2wpIHtcbiAgICAgICAgICAgIGdjLmltZ0lkID0gdGhpcy5pZHggKyAxO1xuICAgICAgICAgICAgcGxheXJvb20udXNlckRhdGEuaXNIYWxsID0gZmFsc2U7XG4gICAgICAgICAgICBwbGF5cm9vbS5zdG9yYWdlRGF0YSgpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lLm1haW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYWxsLnNob3dUb2FzdChcIlRoZSBsZXZlbCBoYXMgbm90IGJlZW4gdW5sb2NrZWQgeWV0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=