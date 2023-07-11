let submit = document.getElementById("btn")
submit.addEventListener("click",()=>{
    let inputTitle = document.getElementById("inputTitle").value
    let inputUrl = document.getElementById("inputUrl").value
    let inputStory = document.getElementById("inputStory").value
    let inputName = document.getElementById("inputName").value


    let outTitle = document.getElementById("outTitle")
    let outStory = document.getElementById("outStory")
    let outName = document.getElementById("outName")
    let outImg = document.getElementById("img")


    outTitle.innerHTML = `${inputTitle}`
    outImg.innerHTML = `
    <img src="${inputUrl}" alt="">
    `
    outStory.innerHTML =`${inputStory}`
    outName.innerHTML = `
    ${inputName}
    `
   
})