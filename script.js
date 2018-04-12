$(function(){

  let $grid = $('.grid'),
      $checkboxes = $('.filter-checkbox-group input');
  
  $grid.isotope({
    itemSelector: '.grid-item'
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
