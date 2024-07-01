import { gc, pop } from "../tool/gameControl";
import { playroom } from "../tool/playroomData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class finishPop extends cc.Component {


    @property(cc.Label)
    title: cc.Label = null;

    @property(cc.Node)
    bg: cc.Node = null;


    callback: Function = null;

    initData(data) {
        this.callback = data.callback;
    }


    onLoad(): void {
       
    }


    start(): void {
        this.title.string = "Level " + gc.imgId;
        gc.adapterBg(this.bg);
    }

    onClick_continueBtn() {
        gc.voiceUtils.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
    }

    onClick_close() {
        gc.voiceUtils.commonBtnClick();
        this.node.destroy();
    }
}
