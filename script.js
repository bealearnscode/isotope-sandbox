// // use document.ready instead of window.load
// // window.load waits for all resources to be loaded first,
// // can be a long time
// $( function() {
//     // now doc is ready, make selection
//     // use another selector, not .isotope,
//     var $grid = $('.grid');
//     var $checkboxes = $('.filter-checkbox-group input');
//     // use imagesLoaded, instead of window.load
//     $grid.imagesLoaded( function() {
//         $grid.isotope({
//          itemSelector: '.grid-item',
//          masonry: {
//             isFitWidth: true
//         }
//         }
//     );
    
//     $checkboxes.change(function(){
//     let filters = [];
//     // get value of checked boxes
//     $checkboxes.filter(':checked').each(function(){
//       filters.push( this.value );
//     });
//     // ['.undergraduate', '.minor'] -> '.undergraduate, .minor'
//     filters = filters.join(', ');
//     $grid.isotope({ filter: filters });
//   });
//     });
// });






$(function(){

  let $grid = $('.grid'),
      $checkboxes = $('.filter-checkbox-group input');
  
  $grid.isotope({
    itemSelector: '.grid-item',
    masonry: {
        isFitWidth: true
    }
  });
  
  $checkboxes.change(function(){
    let filters = [];
    // get value of checked boxes
    $checkboxes.filter(':checked').each(function(){
      filters.push( this.value );
    });
    // ['.undergraduate', '.minor'] -> '.undergraduate, .minor'
    filters = filters.join(', ');
    $grid.isotope({ filter: filters });
  });

});

// $('.filter-button-group').on( 'click', 'button', function() {
//         var filterValue = $(this).attr('data-filter');
//         $grid.isotope({ filter: filterValue });
//     });

