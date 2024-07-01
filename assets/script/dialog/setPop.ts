import { gc } from "../tool/gameControl";
import { playroom } from "../tool/playroomData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class setPop extends cc.Component {


    @property(cc.Sprite)
    title: cc.Sprite = null;

    @property(cc.SpriteFrame)
    pause_sprite: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    setting_sprite: cc.SpriteFrame = null;

    @property(cc.Node)
    soundBox: cc.Node = null;

    @property(cc.Node)
    musicBox: cc.Node = null;

    @property(cc.Node)
    zhengdongBox: cc.Node = null;

    @property(cc.Node)
    setting_pausebtn: cc.Node = null;

    @property(cc.Node)
    setting_ok: cc.Node = null;

    callback: Function = null;

    start() {
        this.init();
        playroom.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
        if (data.isGame) {
            this.title.spriteFrame = this.pause_sprite;
            this.setting_ok.active = false;
            this.setting_pausebtn.active = true;
        } else {
            this.title.spriteFrame = this.setting_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        }
    }


    init() {

        if (!gc.voiceUtils.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        } else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }

        if (!gc.voiceUtils.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        } else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }

        if (!gc.voiceUtils.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        } else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    }


    onClick_musicbtn() {
        gc.voiceUtils.commonBtnClick();
        gc.voiceUtils.switchMusic();
        if (!gc.voiceUtils.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        } else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
    }

    onClick_soundbtn() {
        gc.voiceUtils.commonBtnClick();
        gc.voiceUtils.switchEffect();
        if (!gc.voiceUtils.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        } else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
    }
    onClick_zhengdongbtn() {
        gc.voiceUtils.commonBtnClick();
        gc.voiceUtils.switchShock();
        if (!gc.voiceUtils.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        } else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    }

    onClick_continue_btn() {
        gc.voiceUtils.commonBtnClick();
        this.node.destroy();
        playroom.closeBanner();
        this.callback && this.callback();
    }


    onClick_ok_btn() {
        gc.voiceUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        playroom.closeBanner();
    }

    onClick_PrivacyPolicy_btn() {
        gc.voiceUtils.commonBtnClick();
        cc.sys.openURL(playroom.privacyPolicyUrl);
    }

    onClick_Termsofservicebtn() {
        cc.sys.openURL(playroom.termsofServiceUrl);
        gc.voiceUtils.commonBtnClick();
    }
}
