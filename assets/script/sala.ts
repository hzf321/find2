import imgItem from "./prefeb/imgItem";
import { gc, pop } from "./tool/gameControl";
import { playroom } from "./tool/playroomData";


const { ccclass, property } = cc._decorator;

@ccclass
export default class sala extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Prefab)
    imgItem: cc.Prefab = null;

    @property(cc.Node)
    scroll_contect: cc.Node = null;

    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;




    start() {

        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }


        gc.setsceneNode(this.node);
        gc.adapterBg(this.bg);

        this.scheduleOnce(() => {
            this.init();
        })

        this.scheduleOnce(() => {
            if (playroom.userData.level > 4 && playroom.userData.level < playroom.levelAll) {
                let hei = 260;
                let y = 0;
                if (playroom.userData.level % 2 == 0) {
                    let index = playroom.userData.level / 2 ;

                    y = ((playroom.userData.level -1) - index) * hei;
                } else {
                    let index = (playroom.userData.level + 1) / 2
                    y = (playroom.userData.level - index) * hei;
                }

                this.scrollView.scrollToOffset(cc.v2(0, y), 1);
            }
        }, 0.1)
    }

    init() {
        this.scroll_contect.destroyAllChildren()
        for (let i = 0; i < 30; i++) {
            let item = cc.instantiate(this.imgItem);
            this.scroll_contect.addChild(item);
            item.getComponent(imgItem).init(i, this);
        }
    }

    onClick_setting() {
        gc.voiceUtils.commonBtnClick();
        gc.resLoading.showDialog(pop.setPop, { isGame: false });
        // gc.resLoading.showDialog(dialog.comment_dialog);
    }



    showToast(text: string) {
        gc.resLoading.showToast(text);
    }
}
