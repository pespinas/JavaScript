//Hover con solo un cambio pocho
// $(document).ready(function() {

//     $('#img').hover(function() {
//         // Función que se ejecutará cuando se coloque el cursor sobre la imagen
//         $('#img').attr('src','img/carta.jpg');
//         $('#img').removeClass('carta');
//         $('#img').addClass('cara-frontal');

//       }, function() {
//         // Función que se ejecutará cuando se retire el cursor de la imagen
//         $('#img').attr('src','img/atras.jpg');
//         $('#img').removeClass('cara-frontal');
//         $('#img').addClass('carta');
//       });


// });
$(document).ready(function() {
    $('.card').click(function() {
        $(this).toggleClass('flipped');
      
    });
  });
  
