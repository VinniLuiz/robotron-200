/*------------------------Braços---------------------------------*/
btnBracoMenos.addEventListener("click", diminui);
btnBracoMais.addEventListener("click", aumenta);

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

/*------------------Blindagem-------------------------*/
btnBlindMenos.addEventListener("click", removeBlind)
btnBlindMais.addEventListener("click", addBlind)

function addBlind(){
  const txtBlind = document.getElementById("txtBlind");
  if(txtBlind.value >= 0 && txtBlind.value < 10){
    txtBlind.value = parseInt(txtBlind.value) + 1;
  }
}
function removeBlind(){
  const txtBlind = document.getElementById("txtBlind");
  if(txtBlind.value <=10 && txtBlind.value > 0){
    txtBlind.value = parseInt(txtBlind.value) - 1;
  }
}

/*------------------Nucleo---------------------------*/
btnNucleoMais.addEventListener("click", addNuc);
btnNucleoMenos.addEventListener("click", removeNuc);

function addNuc() {
  const txtNucleo = document.getElementById("txtNucleo");
  if(txtNucleo.value >= 0 && txtNucleo.value < 10){
    txtNucleo.value = parseInt(txtNucleo.value) + 1;
  }
}
function removeNuc() {
  const txtNucleo = document.getElementById("txtNucleo");
  if(txtNucleo.value <= 10 && txtNucleo.value > 0){
    txtNucleo.value = parseInt(txtNucleo.value) - 1;
  }
}

/*-----------------------Pernas----------------------*/
btnPernocasMais.addEventListener("click", addPernocas);
btnPernocasMenos.addEventListener("click", removePernocas);

function addPernocas() {
  const txtPernocas = document.getElementById("txtPernocas");
  if(txtPernocas.value >= 0 && txtPernocas.value < 10){
    txtPernocas.value = parseInt(txtPernocas.value) + 1;
  }
}
function removePernocas() {
  const txtPernocas = document.getElementById("txtPernocas");
  if(txtPernocas.value > 0 && txtPernocas.value <= 10){
    txtPernocas.value = parseInt(txtPernocas.value) - 1;
  }
}

/*--------------------------Foguetes--------------------------*/
btnFogoMais.addEventListener("click", addFogo);
btnFogoMenos.addEventListener("click", removeFogo);

function addFogo() {
  const txtFogo = document.getElementById("txtFogo");
  if(txtFogo.value >= 0 && txtFogo.value < 10){
    txtFogo.value = parseInt(txtFogo.value) + 1
  }
}
function removeFogo() {
  const txtFogo = document.getElementById("txtFogo");
  if(txtFogo.value <= 10 && txtFogo.value > 0){
    txtFogo.value = parseInt(txtFogo.value) - 1;
  }
}

