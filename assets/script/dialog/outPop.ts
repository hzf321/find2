import { gc } from "../tool/gameControl";
import { playroom } from "../tool/playroomData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class outPop extends cc.Component {

    ADcallback: Function = null;
    restartCallBack: Function = null;

    start(): void {
        playroom.showBanner();
    }

    initData(data) {

        this.ADcallback = data.ADcallback;
        this.restartCallBack = data.restartCallBack;
    }


    onClick_AD_btn() {
        gc.voiceUtils.commonBtnClick();
        playroom.showVideo(()=>{
            this.scheduleOnce(()=>{
                this.ADcallback && this.ADcallback()
                this.node.destroy();
                playroom.closeBanner();
            });
        });
    }

    onClick_restart() {
        gc.voiceUtils.commonBtnClick();
        this.restartCallBack && this.restartCallBack()
        this.node.destroy();
        playroom.closeBanner();
    }
}
