

$(function() {
	$('.cl-alert').hide();
	$('.cancel').click(function() {
		$('.cl-alert').show();
	});
	$('.cancel-continue').click(function() {
		$('.cl-alert').hide();
	});
});