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

function deepestChild(criteriaFn) {
  let current = document.querySelectorAll(div);//nodelist that catches all divs
  let next = [];

  while(current) {
    if (criterFn(current)) {
      return current
    }
    
    if (Array.isArray(current)) {
      for (var i = 0, i )
    }
  }
}
