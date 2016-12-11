/*

var name = document.getElementsByTagName('h1')[0].firstChild.nodeValue;

console.log("원래 문장 : " + name);

document.getElementsByTagName('h1')[0].firstChild.nodeValue = '문서를 조작했다 !';

*/

nodeCount = document.getElementsByTagName('li').length;
for (i = 0; i < nodeCount; i++) {
    document.getElementsByTagName('li')[i].firstChild.nodeValue = (i + 1) + "번째 노드";
}

console.log(nodeCount + "개의 텍스트 수정하였음.");