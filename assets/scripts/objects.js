const addToDoButton = document.getElementById('add-to-do-btn');
const searchButton = document.getElementById('search-btn');

const addToDoHandler = () => {
  // console.log(titleToDo.value);
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
      [extraName]: extraName,
      extraValue,
    },
    id: Math.random(),
  };
  console.log(newToDo);
};

const searchHandler = () => {
  console.log('Searched!!!');
};

addToDoButton.addEventListener('click', addToDoHandler);
searchButton.addEventListener('click', searchHandler);
