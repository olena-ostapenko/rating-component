let arrayRatio = document.querySelectorAll("[name=star]")
let form = document.querySelector("form")
let checkedValue = document.querySelector("span")
let divHow = document.getElementById("how")
let divThank = document.getElementById("thank")



form.addEventListener("submit", function (event) {
    event.preventDefault()
let valueSelected = false
    arrayRatio.forEach((element) => {
        if (element.checked) {
            valueSelected = true
            let result = element.value
            checkedValue.innerHTML = result
            divHow.remove("how")
            divThank.hidden = false
        }
    })
    if(valueSelected === false){

let errorText = document.createElement("span")
let textChoose = document.createTextNode("Please, choose")

errorText.classList.add("text-error")

errorText.appendChild(textChoose)
let element = form
const child = document.querySelector(".list")
element.insertBefore(errorText, child);

    }
    
})
