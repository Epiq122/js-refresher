async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data = await res.json();
  console.log(data);
}

getTodos();
