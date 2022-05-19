// let controles = document.querySelectorAll(".controle")
// controles.forEach(element => {
//   element.querySelectorAll(".controle-ajuste").forEach(element2 => {
//     element2.addEventListener('click', () => {
//       if(element2.innerHTML == "+") {
//         valor = parseInt(element.querySelector(".controle-contador").value)
//         valor += 1
//         if(valor >= 0 && valor <= 10){
//           element.querySelector(".controle-contador").value = valor
//         }
//         else{
//           valor = parseInt(element.querySelector(".controle-contador").value)
//           valor -= 1
//           if(valor >= 0 && valor <= 10){
//             element.querySelector(".controle-contador").value = valor
//           }
//         }
//       }
//     })
//   })
// });

const btnBracoMenos = document.getElementById("btnBracoMenos")
const btnBracoMais = document.getElementById("btnBracoMais")

btnBracoMenos.addEventListener("click", diminui)
btnBracoMais.addEventListener("click", aumenta)

function diminui(){
  const txtBraco = document.getElementById("txtBraco")
  txtBraco.value = txtBraco.value - 1
}

function aumenta(){
  const txtBraco = document.getElementById("txtBraco")
  txtBraco.value = parseInt(txtBraco.value) + 1
}
