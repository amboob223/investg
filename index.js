const newo = document.querySelector("newo")
const newoi = document.getElementById("newo");
const what = document.getElementById("what");
const who = document.getElementById("who")


// to make a new objective
newo.addEventListener("click", async (event)=>{
    event.preventDefault()

    const body = {
            newob:newoi.innerText,
            what:what.innerText,
            who:who.innerText
    }// this will be what will be for the json req
    
    const response = await fetch("http://localhost:5000/newo",
    {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(body)
    });
    
    newo.innerHTML = ""
    what.innerHTML = ""
    who.innerHTML = ""
}
);