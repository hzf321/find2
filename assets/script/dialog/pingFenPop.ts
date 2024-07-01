import { gc } from "../tool/gameControl";
import { playroom } from "../tool/playroomData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class pingFenPop extends cc.Component {

    callback: Function = null;

    @property(cc.Node)
    starBox: cc.Node = null;

    @property(cc.Node)
    clickBox: cc.Node = null;

    initData(data) {

    }

    start(): void {
        // for (let i = 0; i < this.clickBox.children.length; i++) {
        //     let item = this.clickBox.children[i];
        //     item.on(cc.Node.EventType.TOUCH_END, () => {  
        //         this.showStar(i)
        //     }, this)
        // }

        playroom.showBanner();
    }

    showStar(index) {
        for (let i = 0; i < this.starBox.children.length; i++) {
            let item = this.starBox.children[i];
            if (i <= index) {
                item.active = true;
            } else {
                item.active = false;
            }
        }
    }

    onClick_commentBtn() {
        playroom.showPingFen();
        gc.voiceUtils.commonBtnClick();
        this.node.destroy();
        playroom.closeBanner();
    }

    onClick_close() {
        gc.voiceUtils.commonBtnClick();
        this.node.destroy();
        playroom.closeBanner();
    }
}
