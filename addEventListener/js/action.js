var active = function (e) {
  var li = e.currentTarget.parentNode.children;
  for (var child of li) {
    child.classList.remove('active');
  }
  e.currentTarget.classList.add('active');
};

var yoyoyo = function() {
  console.log('yoyoyo');
}

window.onload = function() {
  var list = document.querySelectorAll('li');
  for (var li of list) {
    li.addEventListener('click', active);
    li.addEventListener('click', yoyoyo);
  }
}