const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard(){
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value;
    
}

function resetGame(){
document.getElementsByTagName("section").style.color = "grey";

    

}