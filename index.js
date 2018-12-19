function getFirstSelector (selector) {
var selectorNodeList = document.querySelectorAll(selector);
return selectorNodeList[0];
}
//pull a class .target out of an ID #nested
function nestedTarget() {
var classFromId = document.querySelector('#nested .target');
return classFromId;
}

function increaseRankBy(n) {
var rankedItems = document.querySelectorAll('ul.ranked-list li');
for (var i = 0; i < rankedItems.length; i++) {
rankedItems[i].innerHTML = parseInt(rankedItems[i].innerHTML) + n;
}
}

//pulls out most deeply nested child element from grandnode
//use for loop to keep going in, need to get inside nested div
function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
    
    //node is a list of all divs (including nested) in div#grand-node
    
  //for (var i = 0; i <grandNodeNL.length; i++){
      //if (grandNodeNL[i].innerHTML = "boo!") {
       // return (grandNodeNL[i]);
     // }
 // }
 return node
}
