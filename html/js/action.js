var active = function (e) {
  var li = e.currentTarget.parentNode.children;
  for (var child of li) {
    child.classList.remove('active');
  }
  e.currentTarget.classList.add('active');
};