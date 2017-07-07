//设置某元素（根据 ID）显示或者隐藏
function showElementById(nodeId, isShow) {
    //根据 ID 或者 class 的值，找到节点对象
    var obj = document.getElementById(nodeId);
    var show = isShow ? "block" : "none";
    obj.style.display = show;
}

//显示二级分类菜单
function showNaviSubItems(divObj) {
    var menus = document.getElementById("all_cate").getElementsByClassName("sub_cate_box");
    for (var i = 0; i < menus.length; i++) {
        menus[i].style.display = "none";
    }

    divObj.getElementsByTagName("div")[0].style.display = "block";
}