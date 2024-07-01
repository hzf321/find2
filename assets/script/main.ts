import newhand from "./prefeb/newhand";
import { gc, gufengbeauty, pop, scene } from "./tool/gameControl";
import { playroom, sound } from "./tool/playroomData";


const { ccclass, property } = cc._decorator;

enum GameState {
    find,       //找到
    err,        //没找到    
    finish,     //找到重复的  
}

@ccclass
export default class main extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    originalImg: cc.Node = null;

    @property(cc.Node)
    finishImg: cc.Node = null;

    @property(cc.Node)
    tishi_qipao: cc.Node = null;

    @property(cc.Prefab)
    gameFindPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameErrPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    gameTishiPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    game_tuowei: cc.Prefab = null;

    @property(cc.Node)
    imgSignBox: cc.Node = null;

    @property(cc.Node)
    yeziBox: cc.Node = null;

    @property(cc.Label)
    level: cc.Label = null;

    @property(cc.Node)
    timeAll: cc.Node = null;

    @property(cc.Node)
    reduceTime: cc.Node = null;

    @property(cc.Node)
    mask: cc.Node = null;

    beautyData: gufengbeauty[] = [];
    imgY: number = 257;
    yuanshiScale: number = 0.5;

    yeziAllNum: number = 10;
    findNum: number = 0;
    outTime: number = 0;

    isPrompt: boolean = false;

    timer = null;
    isSuspend: boolean = false;
    firstErr: boolean = false;

    private audioClips: cc.AudioClip[] = [];

    newhandNode: newhand = null;


    start() {

           
        playroom.setGamestop(()=>{
            this.isSuspend = true;
        });

        playroom.setGamerecovery(()=>{
            this.isSuspend = false;
        });

        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = true;
            this.getComponent(cc.Canvas).fitWidth = false;
        }

        this.resetAll();
        gc.setsceneNode(this.node);
        gc.adapterBg(this.bg);

        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        this.checkNewHand();

        cc.resources.loadDir("sound", cc.AudioClip, (err: Error, clips: cc.AudioClip[]) => {
            if (err || !cc.isValid(this)) return;
            this.audioClips = clips;
            this.addAutoReleaseAssets(clips);
        });
    }

    onEvent() {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    }

    resetAll(clearData?) {
        if (!clearData) {
            this.beautyData = [];
        }
        this.imgSignBox.getChildByName("origBox").destroyAllChildren();
        this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
        this.imgSignBox.getChildByName("errBox").destroyAllChildren();
        this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
        this.imgSignBox.getChildByName("lizi").destroyAllChildren();

        this.mask.active = false;
        this.firstErr = false;
        this.isSuspend = false;
        this.timer = null;
        this.isPrompt = false;
        this.findNum = 0;
        this.init();
    }

    checkNewHand() {
        if (playroom.userData.isGudie || gc.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, (err, prefab) => {
            if (err) {
                return;
            }

            let node = cc.instantiate(prefab);
            gc.resLoading.bindResAsset(node, prefab);
            this.node.addChild(node);
            this.newhandNode = node.getComponent(newhand);
            this.newhandNode.showdong1();
        })
    }


    init() {
        this.level.string = "Lv" + gc.imgId;
        for (let i = 0; i < this.yeziBox.children.length; i++) {
            let anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            gc.playSp(anim, "1_an_stop");
        }

        this.outTime = this.getDownTime();

        this.changeQiPaoNum();

        this.mask.active = false;

        let time = gc.timeChange(this.outTime);
        this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
    }


    //开启倒计时
    startDownTime() {
        if (this.outTime > 0) {
            let time = gc.timeChange(this.outTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    }

    downTimeEvent() {
        if (this.isSuspend) {
            return
        }
        this.outTime--;
        let time = gc.timeChange(this.outTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.outTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(sound.fail);
            cc.log("时间到了");
        }
    }

    errReduceTime() {
        if (!this.firstErr) return
        let posY = this.timeAll.y;
        let reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(() => {
            this.reduceTime.active = false;
        }).start();

        this.outTime -= reduceTime;
        if (this.outTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        } else {
            let time = gc.timeChange(this.outTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    }

    changeQiPaoNum() {
        if (playroom.userData.tishiNum > 0) {
            this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = playroom.userData.tishiNum.toString();
        } else {
            this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    }

    loadRes() {
        gc.resLoading.loadSprite("originalImg/" + "yuantu_" + gc.imgId, this.originalImg.getComponent(cc.Sprite));

        gc.resLoading.loadSprite("finishImg/" + "xiugai_" + gc.imgId, this.finishImg.getComponent(cc.Sprite));

        cc.resources.load("imgJson/level" + gc.imgId, cc.JsonAsset, (err, res) => {
            if (err) {
                cc.log(err)
                return;
            }
            // 获取到 Json 数据
            gc.resLoading.bindResAsset(this.node, res);
            const jsonData = res.json;
            if (jsonData && jsonData.path) {
                this.beautyData = jsonData.path;
                for (let i = 0; i < this.beautyData.length; i++) {
                    this.beautyData[i].isFind = false;
                }
                cc.log(this.beautyData, "this.beautyData ");
                // for (let i = 0; i < this.beautyData.length; i++) {
                //     let data = this.beautyData[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }

                // for (let i = 0; i < this.beautyData.length; i++) {
                //     let data = this.beautyData[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        })
    }


    yeziLight(pos: cc.Vec3) {
        let anim = this.yeziBox.children[this.findNum - 1].getComponent(sp.Skeleton);

        let tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);

        let changePos = gc.changePos(anim.node, tuowei);

        let time = 0.5;
        if (pos.y < 0) {
            time = 1;
        }
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(() => {
            this.scheduleOnce(() => {
                tuowei.destroy();
            }, 0.3);
            gc.playSp(anim, "2_bianliang");
            gc.addSequenceSp(anim, "3_liang_stop");
        }).start();
    }

    findSignSucc(targetPos: cc.Vec3, findData: gufengbeauty) {
        for (let i = 0; i < 2; i++) {
            let gameFind = cc.instantiate(this.gameFindPrefab);
            let imgY = 0;
            if (i == 0) {
                imgY = targetPos.y * this.yuanshiScale + this.imgY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind)
            } else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind)
                imgY = targetPos.y * this.yuanshiScale - this.imgY;
            }
            let centerPos = cc.v3(targetPos.x * this.yuanshiScale, imgY);

            gameFind.setPosition(centerPos);

            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;


            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
        }
    }

    findSignErr(targetPos: cc.Vec3) {
        let clickPos = targetPos;
        let gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);

        let otherErrSign: cc.Node = null;
        if (clickPos.y > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y - (this.imgY * 2)));
        } else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x, clickPos.y + (this.imgY * 2)));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    }

    imgEvent(event: cc.Event.EventTouch) {
        let pos = event.getLocation();
        let clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        let data = this.checkImgSign(clickPos);
        if (data.type == GameState.find) {
            if (this.isPrompt) {
                this.isPrompt = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.findNum = this.findNum + 1;
            this.findSignSucc(cc.v3(data.findData.centerPos.x, data.findData.centerPos.y), data.findData);
            this.yeziLight(clickPos);

            if (this.newhandNode && this.findNum == 1) {
                if (this.newhandNode) {
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }

            } else if (this.newhandNode && this.findNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                playroom.userData.isGudie = true;
                playroom.storageData();
            }
            this.playCommonSound(sound.correct);

            if (this.findNum >= this.yeziAllNum) {       //胜利 游戏结束
                this.gameEnd();
            }
        } else if (data.type == GameState.err) {
            this.playCommonSound(sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.firstErr = true;
        } else {
            this.playCommonSound(sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.firstErr = true;
        }
    }

    checkImgSign(targetPos: cc.Vec3) {
        let type: GameState = null;
        let findData = null;
        for (let i = 0; i < this.beautyData.length; i++) {
            let data = this.beautyData[i];
            let x = data.centerPos.x * this.yuanshiScale;
            let y = 0;
            if (targetPos.y > 0) {
                y = data.centerPos.y * this.yuanshiScale + this.imgY;
            } else {
                y = data.centerPos.y * this.yuanshiScale - this.imgY;
            }

            let wid = data.blockSize.wid * this.yuanshiScale;
            let hei = data.blockSize.hei * this.yuanshiScale;

            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;

            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = GameState.find;
                    findData = data;
                    data.isFind = true;
                } else {
                    type = GameState.finish;
                    cc.log("找到重复的了");
                }
                return { type, findData }
            } else {
                type = GameState.err;
                cc.log("没找到");
            }
        }

        return { type, findData }
    }


    errSignAnim(node: cc.Node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(() => {
                node.destroy();
            }).start();
    }


    gameEnd() {
        cc.log("游戏结束");
        this.mask.active = true;
        this.scheduleOnce(() => {
            for (let i = 0; i < this.yeziBox.children.length; i++) {
                let anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
                this.scheduleOnce(() => {
                    gc.playSp(anim, "4_man", false, () => {
                        this.scheduleOnce(() => {
                            if (i == this.yeziBox.children.length - 1) {
                                this.playCommonSound(sound.win);
                                if (playroom.userData.level + 1 <= playroom.levelAll) {
                                    playroom.userData.level = playroom.userData.level + 1;
                                    playroom.storageData();
                                }
                                gc.resLoading.showDialog(pop.finishPop, {
                                    callback: () => {
                                        if (gc.imgId + 1 <= playroom.levelAll) {
                                            gc.imgId = gc.imgId + 1;
                                            this.resetAll();
                                            this.init();
                                            this.startDownTime();
                                            this.loadRes();
                                        } else {
                                            playroom.userData.isHall = true;
                                            playroom.storageData();
                                            cc.director.loadScene(scene.sala);
                                        }
                                    }
                                });
                            }
                        })
                    });
                }, 0.1 * i);
            }
        }, 0.5);
    }


    //获取当前关卡的倒计时
    getDownTime() {
        let level = gc.imgId;
        let time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        } else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        } else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        } else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        } else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        } else {
            time = 1 * 60;
        }
        return time;
    }


    //时间到
    timeOutEvent() {
        gc.resLoading.showDialog(pop.outPop, {
            ADcallback: () => {
                this.outTime = 60;
                playroom.userData.tishiNum++;
                playroom.storageData();
                this.changeQiPaoNum();
                this.startDownTime();
            },

            restartCallBack: () => {
                this.resetAll(true);
                this.init();
                this.startDownTime();
                cc.log(this.beautyData, "this.beautyData");
                for (let i = 0; i < this.beautyData.length; i++) {
                    this.beautyData[i].isFind = false;
                }
            }
        });
    }

    onClick_back() {
        gc.voiceUtils.commonBtnClick();
        this.isSuspend = true;
        gc.resLoading.showDialog(pop.quitPop, { callback: () => { this.isSuspend = false } });
    }


    onClick_pause() {
        gc.voiceUtils.commonBtnClick();
        this.isSuspend = true;
        gc.resLoading.showDialog(pop.setPop, { isGame: true, callback: () => { this.isSuspend = false } });

    }

    onClick_tishi() {

        gc.voiceUtils.commonBtnClick();
        if (this.isPrompt) {
            playroom. opentoast("Prompt already exists")
            return;
        }
     
        let findData: gufengbeauty = null;
        for (let i = 0; i < this.beautyData.length; i++) {
            if (!this.beautyData[i].isFind) {
                findData = this.beautyData[i];
                break;
            }
        }
        if (!findData) {
            return
        }
        if (playroom.userData.tishiNum <= 0) {
            cc.log("看广告")

            playroom.showVideo(() => {
                this.showTiShi(findData);
            });

            return;
        }
        playroom.userData.tishiNum = playroom.userData.tishiNum - 1;
        playroom.storageData();
        this.changeQiPaoNum();
        this.showTiShi(findData);
    }

    showTiShi(findData: gufengbeauty) {

        if (findData) {
            this.isPrompt = true;
            for (let i = 0; i < 2; i++) {
                let tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);

                let x = findData.centerPos.x * this.yuanshiScale;
                let y = 0
                if (i == 0) {
                    y = findData.centerPos.y * this.yuanshiScale + this.imgY;
                } else {
                    y = findData.centerPos.y * this.yuanshiScale - this.imgY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.7 }).to(0.5, { scale: 1 }).union().repeatForever().start();
            }

        }
    }


    //播放音效
    playCommonSound(audioName: string, loop: boolean = false): number {
        for (let i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                let audioID = gc.voiceUtils.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    }
}
