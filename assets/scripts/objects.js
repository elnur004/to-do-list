const addToDoButton = document.getElementById('add-to-do-btn');
const searchButton = document.getElementById('search-btn');
const title = document.getElementById('title');
const extraName = document.getElementById('extra-name');
const extraValue = document.getElementById('extra-value');
const toDoList = document.getElementById('to-do-list');
const searchTitle = document.getElementById('filter-title');

const toDo = [];

const clearInput = (...elements) => {
  elements.forEach((el) => (el.value = ''));
};

const renderToDoUI = (filterToDoEl = '') => {
  if (toDo.length === 0) {
    toDoList.classList.remove('visible');
    return;
  } else {
    toDoList.classList.add('visible');
  }

  toDoList.innerHTML = '';

  const filteredTodo = !filterToDoEl
    ? toDo
    : toDo.filter((todo) => todo.info.title.includes(filterToDoEl));

  filteredTodo.forEach((todo) => {
    const toDoElement = document.createElement('li');
    const { info, ...otherProps } = todo;
    console.log(otherProps);
    const { title: todoTitle } = info; // changed title property name to todoTitle
    // toDoElement.textContent = toDoEl.info.title;
    let text = todoTitle + ` - `;
    for (const key in info) {
      if (key !== 'title') {
        text = `${text} ${key} : ${info[key]}`;
      }
    }

    toDoElement.textContent = text;
    toDoList.append(toDoElement);
  });
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
    id: crypto.randomUUID(),
  };
  toDo.push(newToDo);
  console.log(...toDo);
  renderToDoUI();
  clearInput(title, extraName, extraValue);
};

const searchHandler = () => {
  renderToDoUI(searchTitle.value);
  clearInput(searchTitle);
};

addToDoButton.addEventListener('click', addToDoHandler);
searchButton.addEventListener('click', searchHandler);
