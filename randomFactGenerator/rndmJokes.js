const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        //config object
        const config = {
           // headers: { Accept: "application/json" } 
            headers: { Accept: "text/plain" }
        };

        let res = await axios.get(url, config);
        console.log(res.data);
    } catch (e) {
        console.log("Error:", e);
    }
    
}