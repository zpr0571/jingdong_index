//����ĳԪ�أ����� ID����ʾ��������
function showElementById(nodeId, isShow) {
    //���� ID ���� class ��ֵ���ҵ��ڵ����
    var obj = document.getElementById(nodeId);
    var show = isShow ? "block" : "none";
    obj.style.display = show;
}

//��ʾ��������˵�
function showNaviSubItems(divObj) {
    var menus = document.getElementById("all_cate").getElementsByClassName("sub_cate_box");
    for (var i = 0; i < menus.length; i++) {
        menus[i].style.display = "none";
    }

    divObj.getElementsByTagName("div")[0].style.display = "block";
}