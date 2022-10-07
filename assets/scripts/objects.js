const addToDoButton = document.getElementById('add-to-do-btn');
const searchButton = document.getElementById('search-btn');
const title = document.getElementById('title');
const extraName = document.getElementById('extra-name');
const extraValue = document.getElementById('extra-value');
const toDoList = document.getElementById('to-do-list');

const toDo = [];

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
  toDo.push(newToDo);
  console.log(...toDo);
  renderToDoUI(newToDo);
  clearInput(title, extraName, extraValue);
};

const searchHandler = () => {
  console.log('Searched!!!');
};

const renderToDoUI = (toDoEl) => {
  if (toDo.length === 0) {
    toDoList.classList.remove('visible');
    return;
  } else {
    toDoList.classList.add('visible');
  }

  const toDoElement = document.createElement('li');
  toDoElement.textContent = toDoEl.info.title;

  toDoList.append(toDoElement);
};

addToDoButton.addEventListener('click', addToDoHandler);
searchButton.addEventListener('click', searchHandler);
