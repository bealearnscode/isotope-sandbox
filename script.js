$(function(){
  
  var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer'
  }
  let $checkboxes = document.getElementsByClassName('.filter-checkbox-group input');
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});  

  // let $grid = $('.grid'),
  // let $checkboxes = document.getElementsByClassName('.filter-checkbox-group input');
  
  
  // $grid.imagesLoaded(
  //   function(){
  //     //isotope is initialized after images have loaded
  //     $grid.isotope({
  //       itemSelector: '.grid-item'
  //   });
  // })
  
  
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
