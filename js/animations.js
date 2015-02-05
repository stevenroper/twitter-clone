$(document).ready(function() {
	
	//Shows character count & submit button when dashboard tweet box is active
	$('#tweet-content').children('.tweet-compose').on('focus', function() {
		$(this).css('height', '5em');
		$('#tweet-controls').show();
	});

	//Hides character count & submit button when dashboard tweet box is unactive
	$('#tweet-content').children('.tweet-compose').on('blur', function() {
		$('.tweet-compose').css('height', '2.5em');
		$('#tweet-controls').hide();
	});

	//Runs the character count aspect of the tweet dashboard
	$('.tweet-compose').on('keyup', function() {
		
		var charsLeft = 140 - $('.tweet-compose').val().length;

		//Tests char count and disables button if charsLeft is less than 0
		if(charsLeft > 10) {
			$('#char-count').css('color', '#999');
			$('button').prop('disabled', false);
		} else if(charsLeft <= 10 && charsLeft >= 0) {
			$('#char-count').css('color', 'red');
			$('button').prop('disabled', false);
		} else if (charsLeft < 0) {
			$('button').prop('disabled', true);
		}

		//Set the character count in the DOM
		$('#char-count').html(charsLeft);
	});
});