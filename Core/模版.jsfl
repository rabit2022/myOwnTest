﻿/**
 * @file: ${FILE_NAME}
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: ${DATE} ${TIME}
 * @project: ${PROJECT_NAME}
 * @description: ${END}
 */

(function () {
    function checkDom() {
        if (doc == null) {
            alert("请打开 [.fla] 文件");
            return false;
        }

        if (selection.length < 1) {
            alert("请选择元件？");
            return false;
        }
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

    function checkXMLPanel() {
        var success = true;
        var XMLPANEL = osPath.getXMLPath();
        var panel = doc.xmlPanel(XMLPANEL);
        if (panel.dismiss === "cancel") {
            alert("取消修改");
            success = false;
        }
        // // horizontalCount
        // var inputHorizontalCount = panel.horizontalCount;
        // if (inputHorizontalCount === null || isNaN(Number(inputHorizontalCount))) {
        //     alert("横向排布数量只能输入数字，请重新输入。");
        //     success = false;
        // }
        // var horizontalCount = Number(inputHorizontalCount);
        //
        // return {horizontalCount: horizontalCount, success: success};
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
        // var {horizontalCount, success} = checkXMLPanel();


    }

    Main();
})();