function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://narchart.github.io/editor/document/README.md');
xhr.send('')
xhr.onload = function(){
    document.getElementById('content').innerHTML = marked(xhr.responseText)
    // 将h1删掉
    var content = document.getElementById('content')
    var nodeh1 = document.getElementById('narrative-chart')
    content.removeChild(nodeh1)
    // 把content装到大div里面
    var largeDiv = document.createElement("div")
    largeDiv.setAttribute('id','largediv')
    largeDiv.style.overflow = 'auto'
    largeDiv.style.maxHeight = 'calc(80vh - 85px)'
    largeDiv.appendChild(content)
    var body = document.getElementsByClassName("ant-modal-body")[0]
    body.appendChild(largeDiv)
    // 把导航栏提出来
    var leftDiv = document.createElement("div")
    leftDiv.setAttribute('id','guide')
    var leftUl = document.getElementById('content').getElementsByTagName("ul")[0]
    leftDiv.appendChild(leftUl)
    largeDiv.insertBefore(leftDiv,content)
    // 给h2后面添加横线hr
    var h2s = document.getElementsByTagName("h2")
    for(var i =0 ; i<h2s.length;i++){
        var hr = document.createElement("hr")
        insertAfter(hr,h2s[i])
    }
    // 给弹框加高度
    var modal = document.getElementsByClassName("ant-modal-body")[0]
    modal.style.height = 'calc(80vh - 85px)'
}