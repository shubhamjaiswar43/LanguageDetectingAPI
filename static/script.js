let myInput = document.getElementById('myInput');
let getOutput = document.getElementById('getOutput');
let myOutput = document.getElementById('myOutput');
let loader = document.getElementById('loader');
getOutput.addEventListener("click", async (e) => {
    e.preventDefault();
    if (myInput.value.length !== 0) {
        loader.style.visibility = 'visible';
        let response = await fetch("https://languagedetectionapi-6flw.onrender.com/detectlanguage", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: myInput.value })
        });
        response = await response.json();
        console.log(response);
        loader.style.visibility = 'hidden';
        myOutput.value = response.response?response.response:"Unable To Predict";
    }
})