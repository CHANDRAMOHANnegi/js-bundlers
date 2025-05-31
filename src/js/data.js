import initialData from "../todos.json";

let data = initialData;

export function getAllTodos() {
  return data;
}

export function addTodo(todo) {
  data.push(todo);
}

export function removeTodo(id) {
  data = data.filter(function (item) {
    return item.id !== id;
  });
}

export function updateTodo(id, completed) {
  console.log({id});
  
  if(!id || typeof completed !== 'boolean') {
    console.error('Invalid parameters for updateTodo:', id, completed);
    return;
  }
  const itemIndex = data.findIndex(function (value) {
    return value.id === id;
  });
  console.log(id,completed,itemIndex,data);
  
  data[itemIndex].completed = completed;
}
