/**
 * @file: Importer.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2024/12/16 16:14
 * @project: WindowSWF-master
 * @description:
 */


function getCurFolderURI() {
    // 获取当前脚本文件的完整路径
    var scriptURI = fl.scriptURI;

    // // 将路径中的“file:///”替换为“”，因为路径在Windows系统中以这种方式显示
    // scriptURI = scriptURI.replace("file:///", "");
    // // 将路径中的“|”替换为“:”，因为路径在Windows系统中以这种方式显示
    // scriptURI = scriptURI.replace("|", ":");

    // 获取路径中最后一个“/”的位置
    var lastSlashIndex = scriptURI.lastIndexOf("/");

    // 获取脚本文件所在的文件夹路径
    var folderPath = scriptURI.substring(0, lastSlashIndex);
    return folderPath;
}

function importMoudle(relativeScriptPath) {
    var curFolderURI = getCurFolderURI();
    var scriptURI = curFolderURI + "/" + relativeScriptPath;
    fl.trace(scriptURI + " imported.");
    
    fl.runScript(scriptURI);
}

/**
 *
 * @param obj
 * @returns {string[]}
 */
function getFunctions(obj) {
    var functions = [];
    for (var key in obj) {
        functions.push(key);
    }
    return functions;
}
