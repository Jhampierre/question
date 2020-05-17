const botonsi = document.querySelector('.nboton');
const botonno = document.querySelector('.sboton');

botonsi.addEventListener('click', function() {
    alert('Gg mano, la vida continua :v');
});

botonno.addEventListener('mouseover', function() {
    var n1 = (Math.floor((Math.random() * (80-5))+5)).toString();
    var n2 = (Math.floor((Math.random() * (80-5))+5)).toString();
    botonno.style.right = n1.concat("%");
    botonno.style.top = n2.concat("%");
})