const textBtn = document.getElementById("textBtn");
const textCard = document.getElementById("textCard");
const jsonBtn = document.getElementById("jsonBtn");
const jsonCard = document.getElementById("jsonCard");
const apiBtn = document.getElementById("apiBtn");
const apiCard = document.getElementById("apiCard");

textBtn.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();

  let method = "GET";
  let url = "./data/data.txt";

  xhr.open(method, url);

  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      textCard.innerHTML = data;
    }
  };
});

jsonBtn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    let method = "GET";
    let url = './data/data.json'

    xhr.open(method, url)
    xhr.send()

    xhr.onload = () => {
        if(xhr.status === 200){
            let data = xhr.responseText
            jsonCard.innerHTML = data
        }
    }
})

apiBtn.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    let method = "GET";
    let url = 'https://api.github.com/users'

    xhr.open(method, url)
    xhr.send()

    xhr.onload = () => {
        if(xhr.status === 200){
            let data = xhr.responseText
            apiCard.innerHTML = data
        }
    }
})
