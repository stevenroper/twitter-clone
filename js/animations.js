$(document).ready(function() {
	$('.tweet-compose').on('focus', function() {
		$(this).css('height', '5em');
		$('#tweet-controls').show();
	});

	$('.tweet-compose').on('blur', function() {
		$('.tweet-compose').css('height', '2.5em');
		$('#tweet-controls').hide();
	});
});