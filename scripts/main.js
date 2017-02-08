(function () {
  var mainTitle = document.querySelector('.main-title'),
    saveBtn = document.querySelector('.save-btn'),
    editOpenBtn =  document.querySelector('.edit-open-panel-btn'),
    editPanel = document.querySelector('.edit-panel'),
    newTitleTextbox = document.querySelector('.edit-panel-new-title');

  // open edit panel
  editOpenBtn.addEventListener('click', function (e) {
    editPanel.classList.remove('is-hidden');
    mainTitle.classList.add('is-hidden');

    e.preventDefault();
  }, false);

  // update title
  saveBtn.addEventListener('click', function (e) {
    var titleText = document.querySelector('.title-text'),
      currentTitle = titleText.innerHTML,
      newTitle = newTitleTextbox.value;

    if (newTitle) {
      titleText.innerHTML = newTitle;
    } else {
      titleText.innerHTML = currentTitle;
    }

    editPanel.classList.add('is-hidden');
    mainTitle.classList.remove('is-hidden');

    e.preventDefault();
  }, false);
}());
