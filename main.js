let tree = document.querySelector('.tree');

function showHide(e) {
  let target = e.target;
  if (target.tagName != 'LI') return;
  changeClass(target);

  function changeClass(node) {
    console.log(node.children[0]);
  node.children[0].classList.toggle('hide')
  }
};

tree.addEventListener('click', showHide);
