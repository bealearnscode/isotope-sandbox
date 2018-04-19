$(function(){

  let $grid = $('.grid'),
      $checkboxes = $('.filter-checkbox-group input');
  
  $grid.isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
  
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
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
