const botonsi = document.querySelector('.sboton');
const botonno = document.querySelector('.nboton');

botonsi.addEventListener('click', function() {
    alert('Gg mano, la vida continúa');
    //alert('g');
});

botonno.addEventListener('click', function() {
    alert('Gg bro, nunca te amó');
    //alert('g');
});

botonsi.addEventListener('mouseover', function() {
    botonno.innerHTML = "SI";
    botonsi.style.backgroundColor = "#020623"; 
    botonsi.style.color =  "#FFFFFF";
    botonsi.innerHTML = "NO";
});

botonsi.addEventListener('mouseout',function() {
    botonno.innerHTML = "NO";
    botonsi.style.backgroundColor = "#FFFFFF"; 
    botonsi.style.color =  "#000000";
    botonsi.innerHTML = "SI";
});

botonno.addEventListener('mouseover', function() {
    botonno.innerHTML = "NO";
    botonno.style.backgroundColor = "#FFFFFF";
    botonsi.innerHTML = "SI";
    botonno.style.backgroundColor = "#020623";
    botonno.style.color =  "#FFFFFF";
});

botonno.addEventListener('mouseout',function() {
    botonno.style.backgroundColor = "#FFFFFF"; 
    botonno.style.color =  "#000000";
});