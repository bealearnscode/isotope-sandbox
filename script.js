// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.item'
});


$(function(){

  var $container = $('.container'),
      $checkboxes = $('.filter-checkbox-group input');
  
  $container.isotope({
    itemSelector: '.grid-item'
  });
  
  $checkboxes.change(function(){
    var filters = [];
    // get checked checkboxes values
    $checkboxes.filter(':checked').each(function(){
      filters.push( this.value );
    });
    // ['.undergraduate', '.minor'] -> '.undergraduate, .minor'
    filters = filters.join(', ');
    $container.isotope({ filter: filters });
  });
  
});



// // init Isotope
// var $grid = $('.grid').isotope({
//   // options
// });
// // filter items on button click
// $('.filter-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });
