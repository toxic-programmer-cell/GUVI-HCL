const textBtn = document.getElementById("textBtn");
const textCard = document.getElementById("textCard");
const jsonBtn = document.getElementById("jsonBtn");
const jsonCard = document.getElementById("jsonCard");
const apiBtn = document.getElementById("apiBtn");
const apiCard = document.getElementById("apiCard");

textBtn.addEventListener("click", () => {

  let url =  './data/data.txt'

  fetch(url).then(data => {
    if(data.ok){
      return data.text()
    }else{
      throw new Error('Failed to fetch data')
    }
  }).then((text) => {
    textCard.innerHTML = text
  }).catch((error)=>{
    textCard.innerHTML = error
  })

});

jsonBtn.addEventListener('click', () => {

    let url = './data/data.json'
fetch(url).then(data=>{
  if(data.ok){
    return data.text()
  }else{
    throw new Error('failed to fetch data')
  }
}).then((text) => {
  jsonCard.innerHTML= text
}).catch((error)=>{
  jsonCard.innerHTML= error
})

})

apiBtn.addEventListener('click', () => {

    let url = 'https://api.github.com/users'

fetch(url).then(data=>{
  if(data.ok){
    return data.text()
  }else{
    throw new Error('failed to fetch data')
  }
}).then((text)=>{
  apiCard.innerHTML = text
}).catch(error=>{
  apiCard.innerHTML=error
})

})
