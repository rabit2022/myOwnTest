/**
 * @file: 1414智能循环.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2024/12/5 22:22
 * @project: AnJsflScript
 * @description:
 */


(function () {
    function checkDom() {
        if (doc == null) {
            alert("请打开 [.fla] 文件");
            return false;
        }
        // if (selection.length < 1) {
        //     alert("请选择元件？");
        //     return false;
        // }
        // if (selection.length > 1) {
        //     alert("请选择单个元件");
        //     return false;
        // }
        // if (selection.length === 1) {
        //     alert("请选择至少两个元件");
        //     return false;
        // }
        return true;
    }


    var doc = fl.getDocumentDOM();//文档
    var selection = doc.selection;//选择
    var library = doc.library;//库文件

    var timeline = doc.getTimeline();//时间轴
    var layers = timeline.layers;//图层
    var curFrameIndex = timeline.currentFrame;//当前帧索引

    function Main() {
        if (!checkDom()) {
            return;
        }
        
        for (var i = 0; i < selection.length; i++) {
            var element = selection[i];
            element.loop = "loop";

            var timeline = element.libraryItem.timeline;
            var layer = timeline.layers[0];
            // 获取关键帧的起始帧
            var startFrame = layer.frames[element.firstFrame].startFrame;
            element.firstFrame = startFrame;
            element.lastFrame = layer.frames[startFrame].duration + startFrame - 1;
        }
    }

    Main();
})();


