const addToDoButton = document.getElementById('add-to-do-btn');
const searchButton = document.getElementById('search-btn');

const toDoLists = [];

const addToDoHandler = () => {
  let title = document.getElementById('title').value;
  let extraName = document.getElementById('extra-name').value;
  let extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newToDo = {
    info: {
      title,
      [extraName]: extraValue, // get dinamic property name from UI input
    },
    id: Math.random(),
  };
  toDoLists.push(newToDo);
  console.log(toDoLists);
};

const searchHandler = () => {
  console.log('Searched!!!');
};

addToDoButton.addEventListener('click', addToDoHandler);
searchButton.addEventListener('click', searchHandler);
