let btn = document.querySelector("button");


btn.addEventListener("click",async () => {
   // console.log("Button clicked");
    let fact = await getFacts(); //it returns a promise
    //console.log(fact);
    let p = document.getElementById("para");
    p.innerText = fact;

    
});

let url = "https://catfact.ninja/fact";
//axios example
async function getFacts() {
    try {
        //axios is used bcz it gives data in readable format
        let res = await axios.get(url); //it returns a promise
        // console.log(res);
        //console.log(res.data.fact);
        return res.data.fact;
    } catch (error) {
        console.log("Errot:", error);
        return "Some error occured";
    }
}