async function mulReq(){
    let todo = await fetch ("https://jsonplaceholder.typicode.com/todos/1")
    let post = await fetch("https://jsonplaceholder.typicode.com/postslet")

    let resultTodo = await todo.json()
    let resultPost = await post.json()
    let combineData = {
        todo : resultTodo,
        post : resultPost
    };

    console.log(combineData)
}

mulReq()