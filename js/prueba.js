const botonsi = document.querySelector('.sboton');
const botonno = document.querySelector('.nboton');

botonsi.addEventListener('click', function() {
    alert('Gg mano, la vida continua :v');
});

botonno.addEventListener('mouseover', function() {
    botonno.innerHTML = "SI";
    botonno.style.backgroundColor = "#020623"; 
    botonno.style.color =  "#FFFFFF";
    botonsi.innerHTML = "NO";
});

botonno.addEventListener('mouseout',function() {
    botonno.innerHTML = "NO";
    botonno.style.backgroundColor = "#FFFFFF"; 
    botonno.style.color =  "#000000";
    botonsi.innerHTML = "SI";
});

botonsi.addEventListener('mouseover', function() {
    botonno.innerHTML = "NO";
    botonno.style.backgroundColor = "#FFFFFF";
    botonsi.innerHTML = "SI";
    botonsi.style.backgroundColor = "#020623";
    botonsi.style.color =  "#FFFFFF";
});

botonsi.addEventListener('mouseout',function() {
    botonsi.style.backgroundColor = "#FFFFFF"; 
    botonsi.style.color =  "#000000";
});