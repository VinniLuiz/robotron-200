const num = document.querySelectorAll(".controle")

controle.forEach(element => {
  element.querySelectorAll(".controle-ajuste").forEach(element2 => {
    element2.addEventListener('click', () => {
      if(element2.innerHTML == "+") {
        num = parseInt(element.querySelector(".controle-contador").value)
        num += 1
        if(num >= 0 && num <= 10){
          element.querySelector(".controle-contador").value = num
        }
        else{
          valor = parseInt(element.querySelector(".controle-contador").value)
          valor -= 1
          if(num >= 0 && num <= 10){
            element.querySelector(".controle-contador").value = num
          }
        }
      }
    })
  })
});