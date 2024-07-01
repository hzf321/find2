import { gc } from "../tool/gameControl";
import { playroom } from "../tool/playroomData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class termPop extends cc.Component {

    callback: Function = null;

    start(): void {
        playroom.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
    }

    onClick_Agreen() {
        gc.voiceUtils.commonBtnClick();
        this.callback && this.callback()
        this.node.destroy();
        playroom.closeBanner();
    }
 
    onClick_PrivacyPolicy_btn() {
        gc.voiceUtils.commonBtnClick();
        cc.sys.openURL(playroom.privacyPolicyUrl);
    }

    onClick_Termsofservicebtn() {
        gc.voiceUtils.commonBtnClick();
        cc.sys.openURL(playroom.termsofServiceUrl);
    }

}
