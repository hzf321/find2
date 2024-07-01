
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/dialog/finishPop');
require('./assets/script/dialog/outPop');
require('./assets/script/dialog/pingFenPop');
require('./assets/script/dialog/quitPop');
require('./assets/script/dialog/setPop');
require('./assets/script/dialog/termPop');
require('./assets/script/load');
require('./assets/script/main');
require('./assets/script/prefeb/imgItem');
require('./assets/script/prefeb/newhand');
require('./assets/script/sala');
require('./assets/script/tool/AutoBind');
require('./assets/script/tool/gameControl');
require('./assets/script/tool/playroomData');
require('./assets/script/tool/resLoading');
require('./assets/script/tool/scrollTool');
require('./assets/script/tool/stockpileUtils');
require('./assets/script/tool/voiceUtils');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();