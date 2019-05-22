let tree = document.querySelector('.tree');

function showHide(e) {
  let target = e.target;
  if (target.tagName != 'SPAN') return;
  changeClass(target);

  function changeClass(node) {
  node.nextElementSibling.classList.toggle('hide')
  }
};

tree.addEventListener('click', showHide);
