import sala from "../sala";
import { gc, scene } from "../tool/gameControl";
import { playroom } from "../tool/playroomData";
 
const { ccclass, property } = cc._decorator;

@ccclass
export default class imgItem extends cc.Component {

    @property(cc.Node)
    hall_mask: cc.Node = null;

    @property(cc.Sprite)
    img: cc.Sprite = null;

    private idx: number = 0;

    private isbool: boolean = false;

    hall: sala = null;
    start() {

    }

    init(idx: number, hall: sala) {
        this.idx = idx;
        this.hall = hall;
        if (this.idx < playroom.userData.level) {
            this.hall_mask.active = false;
            this.isbool = true;
        } else {
            this.hall_mask.active = true;
            this.isbool = false;
        }
        gc.resLoading.loadSprite("originalImg/" +  "yuantu_" +(this.idx + 1), this.img);
    }

    onclick_item() {
        gc.voiceUtils.commonBtnClick();
        if (this.isbool) {
            gc.imgId = this.idx + 1;
            playroom.userData.isHall = false;
            playroom.storageData();
            cc.director.loadScene(scene.main);
        } else {
            this.hall.showToast("The level has not been unlocked yet");
        }
    }

}
