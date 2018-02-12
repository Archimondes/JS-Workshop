var active = function (e) {
	var children = e.currentTarget.parentNode.children;
	for (var child of children) {
    	child.classList.remove('active');
    	if (child == e.currentTarget)
      	child.classList.add('active');
  	}
};

window.onload = function() {
	var list = document.querySelectorAll('li');
	list.forEach(function(li){
		li.addEventListener('click', active);
	});
};