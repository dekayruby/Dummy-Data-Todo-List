let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]
console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20


const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}


const populateTodos = () => {
    const text = document.createTextNode(arrayOfTodos[0].title)
    let addLI = document.createElement("LI")
    var OL = document.getElementById("todo-list")
    addLI.appendChild(text)
    OL.appendChild(addLI)

    for (let index = 0; index < arrayOfTodos.length; index++) {
        const element = arrayOfTodos[index];
        let addLI2 = document.createElement("li")
        var text2 = document.createTextNode(element.title)
        addLI2.appendChild(text2)
        OL.appendChild(addLI2)
        console.log(element.title)
        
    }
}