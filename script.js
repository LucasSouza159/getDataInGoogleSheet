const button = document.querySelector("button");
const addLoadding = () => {
          button.innerHTML = `<img src="./img/loadding.png" class="loadding" />`
}
const removeLoadding = () => {
          button.innerHTML = `Send`
}

const handleSubmit = (event) =>{
    event.preventDefault();
    addLoadding();

    const name = document.querySelector("input[name=name]").value
    const email = document.querySelector("input[name=email]").value
    fetch("https://api.sheetmonkey.io/form/5fD7CtF8SsZLReTYbi2wjG", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
       body: JSON.stringify({name, email})
    }).then(() =>{
        removeLoadding();
        const result = document.querySelector("#result");
        result.innerHTML = "Dados enviados!"
    })
}
document.querySelector("form").addEventListener("submit", handleSubmit)