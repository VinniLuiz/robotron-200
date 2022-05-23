const btnBracoMenos = document.getElementById("btnBracoMenos")
const btnBracoMais = document.getElementById("btnBracoMais")

btnBracoMenos.addEventListener("click", diminui)
btnBracoMais.addEventListener("click", aumenta)
btnBlindMenos.addEventListener("click", removeBlind)
btnBlindMais.addEventListener("click", addBlind)


function diminui(){
  const txtBraco = document.getElementById("txtBraco");
  if(txtBraco.value <= 10 && txtBraco.value > 0){
    txtBraco.value = txtBraco.value - 1;
  }
}

function aumenta(){
  const txtBraco = document.getElementById("txtBraco");
  if (txtBraco.value >= 0 && txtBraco.value < 10){
    txtBraco.value = parseInt(txtBraco.value) + 1;
  }
}

function addBlind(){
  const txtBlind = document.getElementById("txtBlind");
  if(txtBlind.value >= 0 && txtBlind.value < 10){
    txtBlind.value = parseInt(txtBlind.value) + 1;
  }
}

function removeBlind(){
  
}