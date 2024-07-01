import { gc, scene } from "../tool/gameControl";
import { playroom } from "../tool/playroomData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class quitPop extends cc.Component {

    callback: Function = null;


    protected start(): void {
        playroom.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
    }


    onClick_continue_btn() {
        gc.voiceUtils.commonBtnClick();
        this.callback && this.callback()
        this.node.destroy();
        playroom.closeBanner();
    }

    onClick_backHall() {
        gc.voiceUtils.commonBtnClick();
        this.node.destroy();
        playroom.closeBanner();
        playroom.userData.isHall = true;
        playroom.storageData();
        cc.director.loadScene(scene.sala);

    }
}
