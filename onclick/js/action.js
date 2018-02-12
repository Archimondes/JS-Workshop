var active = function (e) {
  var li = e.currentTarget.parentNode.children;
  for (var child of li) {
    child.classList.remove('active');
  }
  e.currentTarget.classList.add('active');
};

window.onload = function() {
  var list = document.querySelectorAll('li');
  for (var li of list) {
    li.onclick = active;
  }
}