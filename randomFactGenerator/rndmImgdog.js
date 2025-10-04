let btn = document.querySelector("button");


btn.addEventListener("click",async () => {
   // console.log("Button clicked");
    let link = await getImg(); //it returns a promise,returns source link
    console.log(link);
    let img1 = document.querySelector("#img1");
    img1.setAttribute("src", link);
});

let url = "https://dog.ceo/api/breeds/image/random";
//axios example
async function getImg() {
    try {
        //axios is used bcz it gives data in readable format
        let res = await axios.get(url); //it returns a promise
        //console.log(res.data.message);
        return res.data.message;
    } catch (error) {
        console.log("Errot:", error);
        return "No image found";
    }
}