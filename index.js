// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
// Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(selector) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let rankedList = document.getElementsByClassName('ranked-list')
  for (let i = 0; i < rankedList.length; i++) {
    let children = rankedList[i].children
    for (let i = 0; i < children.length; i++) {
      children[i].innerHTML = parseInt(children[i].innerHTML, 10) + n
      children[i].style.background = "#eee"
    }
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
