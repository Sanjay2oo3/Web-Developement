async function errorHandling(){
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts/123456789")

        if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }
        let dataJson = await data.json()
    
        console.log(`Data :- ${dataJson}`)
    }
    catch(error) {
        console.error("Error fetching data:", error);
    }
}

errorHandling()