// Select the button
const btn = document.querySelector('.btn-toggle');
const bto1 = document.getElementById('agni');

// Listen for a click on the button
btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  document.a.classList.toggle('dark-theme');
});

function trocar(element) {
    if(element.id == "agni") {
        element.id = "agni2";
    } else { //This will only execute when elemsent.id == "secondId"
        element.id = "agni";
    }
}

bto1.addEventListener('click', () => {
    document.getElementById("agni").src="/assets/icon2/sun 1.png";
});

bto1.addEventListener('click', () => {
    document.getElementById("agni2").src="/assets/icon2/moon 1.png";
});