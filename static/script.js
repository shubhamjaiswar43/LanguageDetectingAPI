let myInput = document.getElementById('myInput');
let getOutput = document.getElementById('getOutput');
let myOutput = document.getElementById('myOutput');
let loader = document.getElementById('loader');
getOutput.addEventListener("click", async (e) => {
    e.preventDefault();
    if (myInput.value.length !== 0) {
        loader.style.visibility = 'visible';
        let response = await fetch("http://localhost:3000/detectlanguage", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: myInput.value })
        });
        response = await response.json();
        loader.style.visibility = 'hidden';
        myOutput.value = response.response[0] ? response.response[0] : "";
    }
})