var isPaused = false
var secCount = 0
let test
document.addEventListener('DOMContentLoaded', function(){
  // alert('is ready');
  counter()
  getBtnPlusEl().addEventListener('click', addOne)
  getBtnMinusEl().addEventListener('click', minusOne)
  getBtnPauseEl().addEventListener('click', pauseGetTimer)
  getBtnHeartEl().addEventListener('click', addLike)
  getCommentForm().addEventListener('submit', function(e) {
    e.preventDefault()
    addComment()
  })
})


// document.addEventListener("DOMContentLoaded", function(){
//   console.log("The DOM has loaded");
//   let changeParagraph = document.querySelector('#text');
//   changeParagraph.textContent = 'This is really cool!'
// });
//
console.log('This console.log() fires when index.js loads - before DOMContentLoaded is triggered')

function getH1CounterEl() {
  return document.querySelector('#counter')
}

function getBtnMinusEl() {
  return document.querySelector('#minus')
}

function getBtnPlusEl() {
  return document.querySelector('#plus')
}

function getBtnHeartEl() {
  return document.querySelector('#heart')
}

function getBtnPauseEl() {
  return document.querySelector('#pause')
}

function getUlLikesEl() {
  return document.querySelector('.likes')
}

function getDivCommentsEl() {
  return document.querySelector('#list')
}

function getCommentField() {
  return document.querySelector('#comment-input');
}

function getCommentForm() {
  return document.querySelector('#comment-form')
}

function addOne() {
  secCount += 1
  getH1CounterEl().innerText = secCount
}

function minusOne() {
  secCount -= 1
  getH1CounterEl().innerText = secCount
}

function counter() {
  test = setInterval(function() {
    secCount++
    getH1CounterEl().innerText = secCount
  }, 1000)
}

function getTime() {
  let d = new Date()
  console.log(d.toLocaleTimeString())
}

function pauseGetTimer () {
  if (isPaused === false) {
    isPaused = true
    getBtnPlusEl().disabled = true
    getBtnMinusEl().disabled = true
    getBtnHeartEl().disabled = true
    getBtnPauseEl().innerText = 'resume'
    clearTimeout(test)
  }else {
    isPaused = false
    getBtnPlusEl().disabled = false
    getBtnMinusEl().disabled = false
    getBtnHeartEl().disabled = false
    getBtnPauseEl().innerText = 'pause'
    counter()
  }
}

function addComment() {
  const liNewComment = document.createElement('li')
  liNewComment.innerText = getCommentField().value
  getDivCommentsEl().append(liNewComment)
  getCommentForm().reset()
  getCommentField().focus()
}
function addLike() {
  const likeLiEl = document.createElement('li')
  likeLiEl.innerText = getH1CounterEl().innerText + ' has 1 ❤️'
  getUlLikesEl().append(likeLiEl)
}
