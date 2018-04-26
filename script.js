$(document).ready(function(){
  var $container = $('.grid');
  var $checkboxes = $('.filter-checkbox-group input');
  
  $container.imagesLoaded(function() {
    $container.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      masonry: {
          isFitWidth: true
      }
    });
  }); 
  
  $checkboxes.change(function(){
    let filters = [];
    // get value of checked boxes
    $checkboxes.filter(':checked').each(function(){
      filters.push( this.value );
    });
    // ['.undergraduate', '.minor'] -> '.undergraduate, .minor'
    filters = filters.join(', ');
    $container.isotope({ filter: filters });
  });
});
