

$(function() {
	$('.cl-alert').hide();
	$('.cancel').click(function() {
		$('.cl-alert').show();
	});
	$('.cancel-continue').click(function() {
		$('.cl-alert').hide();
	});
	
	// side-menu
    $(document).on('click', '.menu-button', function() {
      if ($('.cl-page').position().left == 0) {
        $('.side-menu').animate({ 'left': '+=250px' }, 400);
        $('.cl-page').animate({ 'left': '+=250px' }, 400);
        $('.cl-page').one('click', function() {
          $('.side-menu').animate({ 'left': '-=250px' }, 400);
          $('.cl-page').animate({ 'left': '-=250px' }, 400);
        });
      } 
    });
	
});

