/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tagsContainer = document.querySelector('.js-tags');
// console.log(tagsContainer);
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   // console.log(evt.target);
//   const currentActiveBtn = document.querySelector('.tags__btn--active');
//   // console.log(currentActiveBtn);

//   // if (currentActiveBtn) {
//   //   currentActiveBtn.classList.remove('tags__btn--active');
//   // }
//   //*Відповідник верхньому прикладу if
//   currentActiveBtn?.classList.remove('tags__btn--active');

//   evt.target.classList.add('tags__btn--active');
//   const nextActiveBtn = evt.target;
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

//* задача 2 - Нижче код для того. щоб вибрати декілька об"єктів

const tagsContainer = document.querySelector('.js-tags');
// const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(evt.target);
  evt.target.classlist.toggle('tags__btn--active');

  // const btn = evt.target;
  // const tag = btn.dataset.value;
  // const isActive = btn.classList.contains('tags__btn--active');

  // if (isActive) {
  //   selectedTags.delete(tag);
  // } else {
  //   selectedTags.add(tag);
  // }

  // btn.classList.toggle('tags__btn--active');
  // console.log(selectedTags);
}
