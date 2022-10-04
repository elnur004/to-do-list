const addToDoButton = document.getElementById('add-to-do-btn');
const searchButton = document.getElementById('search-btn');
const title = document.getElementById('title');
const extraName = document.getElementById('extra-name');
const extraValue = document.getElementById('extra-value');

const toDoLists = [];

const clearInput = (...elements) => {
  elements.forEach((el) => (el.value = ''));
};

const addToDoHandler = () => {
  if (
    title.value.trim() === '' ||
    extraName.value.trim() === '' ||
    extraValue.value.trim() === ''
  ) {
    return;
  }

  const newToDo = {
    info: {
      title: title.value,
      [extraName.value]: extraValue.value, // get dinamic property name from UI input
    },
    id: Math.random(),
  };
  toDoLists.push(newToDo);
  console.log(...toDoLists);
  clearInput(title, extraName, extraValue);
};

const searchHandler = () => {
  console.log('Searched!!!');
};

addToDoButton.addEventListener('click', addToDoHandler);
searchButton.addEventListener('click', searchHandler);
