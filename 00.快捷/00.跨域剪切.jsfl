/**
 * @file: 00.跨域剪切.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2024/12/8 11:15
 * @project: WindowSWF-master
 * @description:
 */


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

/**
 * 定义一个点类
 * @param {number} x 横坐标
 * @param {number} y 纵坐标
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}


/**
 * 加法，两个点的坐标的和
 * @param {Point} point 另一个点
 * @returns {Point}
 */
Point.prototype.add = function (point) {
    return new Point(this.x + point.x, this.y + point.y);
}

/**
 * 减法，两个点的坐标的差
 * @param {Point} point 另一个点
 * @returns {Point}
 */
Point.prototype.sub = function (point) {
    return new Point(this.x - point.x, this.y - point.y);
}

// >
/**
 * 判断是否  在 另一个点 的右下方
 * @param {Point} point 另一个点
 * @returns {boolean}
 */
Point.prototype.greater = function (point) {
    return this.x > point.x && this.y > point.y;
}

Point.prototype.toString = function () {
    return "Point: " + this.x + " " + this.y;
}

var doc=fl.getDocumentDOM();//文档
var selection = doc.selection;//选择
var library=doc.library;//库文件
function Main() {
    if (!checkDom()) {
        return;
    }


    // 记录当前视图矩阵
    var tempWorldViewMatrixAnti=doc.viewMatrix;
    fl.tempWorldViewMatrixAnti=tempWorldViewMatrixAnti;

    LogMatrix(tempWorldViewMatrixAnti);

    // /**
    //  * 
    //  * @type {Matrix[]}
    //  */
    // var tempMatrixArr=[];
    // for (var i = 0; i < selection.length; i++){
    //     var element=selection[i];
    //     var tempWorldMatrix=element.matrix;
    //     LogMatrix(tempWorldMatrix);
    //     tempMatrixArr.push(tempWorldMatrix);
    // }
    //
    // fl.tempMatrixArr=tempMatrixArr;


    // 复制元件
    // doc.clipCut();
    doc.clipCopy();
}
Main();

function LogMatrix(matrix) {
    fl.trace("[" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + "] [" + matrix.tx + ", " + matrix.ty +"]");
}
