async function fetchData(){
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let jsonData = await data.json();
    console.log(jsonData)

}
fetchData()