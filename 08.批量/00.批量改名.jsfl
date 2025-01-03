/**
 * @file: 00.批量改名.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2024/12/8 0:08
 * @project: AnJsflScript
 * @description:
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

        var items = library.getSelectedItems();
        var newName = prompt("请输入新名称：");
        if (newName == null) {
            return;
        }

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.name = newName + "" + i;
        }
    }

    Main();
})();