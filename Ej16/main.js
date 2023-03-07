$(document).ready(function() {
    $('#toggleButton').click(function() {
        
        if ($(this).text() == 'Encendido') {
            $(this).text('Apagado');
            $('#parrafo').css('color', 'black');
          } else {
            $(this).text('Encendido');
            $('#parrafo').css('color', 'red');
          }
    });
});

const myButton = document.getElementById('toggleButton2');
const parrafo = document.getElementById('parrafo2');

myButton.addEventListener('click', function() {
    if (myButton.textContent === 'Encendido') {
      myButton.textContent = 'Apagado';
      parrafo.style.color = 'black';
      
    } else {
      myButton.textContent = 'Encendido';
      parrafo.style.color = 'blue';
    }
  });
