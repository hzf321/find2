"use strict";
cc._RF.push(module, '090fcgAZWxOM6pwykHoyPvy', 'voiceUtils');
// script/tool/voiceUtils.ts

"use strict";
//音频工具类
Object.defineProperty(exports, "__esModule", { value: true });
exports.voiceUtils = void 0;
var stockpileUtils_1 = require("./stockpileUtils");
var commonBtnPath = "sound/click";
var commonBgmPath = "sound/bgm";
var voiceUtils = /** @class */ (function () {
    function voiceUtils() {
        this.btnClickEffect = null;
        this.bgmMusic = null;
        this.currMusic = null;
        this.musicSwitch = stockpileUtils_1.stockpileUtils.getBoolByKey("kk_setup_music", true);
        this.effectSwitch = stockpileUtils_1.stockpileUtils.getBoolByKey("kk_setup_effect", true);
        this.shockSwitch = stockpileUtils_1.stockpileUtils.getBoolByKey("kk_setup_shock", true);
    }
    voiceUtils.prototype.initBtnClickEffect = function () {
        var _this = this;
        if (this.btnClickEffect)
            return;
        cc.resources.load(commonBtnPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.btnClickEffect = clip;
            clip.addRef();
        });
    };
    voiceUtils.prototype.initbgmMusic = function () {
        var _this = this;
        if (this.bgmMusic)
            return;
        cc.resources.load(commonBgmPath, cc.AudioClip, function (err, clip) {
            if (err || !cc.isValid(_this)) {
                return;
            }
            _this.bgmMusic = clip;
            _this.commonbgmMusic();
            clip.addRef();
        });
    };
    voiceUtils.prototype.switchMusic = function () {
        this.musicSwitch = !this.musicSwitch;
        stockpileUtils_1.stockpileUtils.setBoolByKey("kk_setup_music", this.musicSwitch);
        if (this.musicSwitch) {
            if (this.currMusic) {
                this.playMusic(this.currMusic);
            }
        }
        else {
            this.stopMusic();
        }
    };
    voiceUtils.prototype.switchEffect = function () {
        this.effectSwitch = !this.effectSwitch;
        stockpileUtils_1.stockpileUtils.setBoolByKey("kk_setup_effect", this.effectSwitch);
        if (this.effectSwitch) {
        }
        else {
            cc.audioEngine.stopAllEffects();
        }
    };
    voiceUtils.prototype.switchShock = function () {
        this.shockSwitch = !this.shockSwitch;
        stockpileUtils_1.stockpileUtils.setBoolByKey("kk_setup_shock", this.shockSwitch);
    };
    voiceUtils.prototype.playMusic = function (audio, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        if (!audio)
            return;
        this.currMusic = audio; //保存当前背景音乐
        if (this.musicSwitch) {
            // this.stopMusic();
            var audioID = cc.audioEngine.playMusic(audio, isLoop);
        }
    };
    voiceUtils.prototype.playEffect = function (audio, isLoop, callback) {
        if (isLoop === void 0) { isLoop = false; }
        if (callback === void 0) { callback = null; }
        if (!audio)
            return;
        if (this.effectSwitch) {
            var audioID = cc.audioEngine.play(audio, isLoop, 1);
            if (callback)
                cc.audioEngine.setFinishCallback(audioID, callback);
            return audioID;
        }
        return null;
    };
    voiceUtils.prototype.playEffectWithPath = function (path, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        if (!path || !this.effectSwitch)
            return;
        cc.resources.load(path, cc.AudioClip, function (err, clip) {
            if (err) {
                cc.log("加载音效资源失败" + path);
                return;
            }
            var audioID = cc.audioEngine.play(clip, isLoop, 1);
        });
    };
    voiceUtils.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    voiceUtils.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    voiceUtils.prototype.pauseAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.pauseAll();
        }
    };
    voiceUtils.prototype.resumeAll = function () {
        if (this.musicSwitch) {
            cc.audioEngine.resumeAll();
        }
    };
    voiceUtils.prototype.stopEffect = function (audioID) {
        cc.audioEngine.stopEffect(audioID);
    };
    voiceUtils.prototype.pause = function (audioID) {
        cc.audioEngine.pause(audioID);
    };
    voiceUtils.prototype.resume = function (audioID) {
        if (this.musicSwitch) {
            cc.audioEngine.resume(audioID);
        }
    };
    voiceUtils.prototype.commonBtnClick = function () {
        this.playEffect(this.btnClickEffect, false);
    };
    voiceUtils.prototype.commonbgmMusic = function () {
        this.playMusic(this.bgmMusic);
    };
    return voiceUtils;
}());
exports.voiceUtils = voiceUtils;

cc._RF.pop();