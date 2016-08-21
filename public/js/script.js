(function() {
	$(document).ready(function() {
		init();
	});

	function init() {
		setHeadingDateTime();
		sendAjaxRequestOnPageload();
	}

	function setHeadingDateTime() {
		var date = moment().format('dddd MMMM Do YYYY');
		var html = 'Near Earth Objects Report for ' + date;
		$('.title').text(html);
	}

	function sendAjaxRequestOnPageload() {
		// Make AJAX request for asteroid date when page loads
		$.ajax({
			async: true,
			url: '/getAstroidData',
			dataType: 'json',
			success: function(data) {
				console.log(data);
			}
		});
	}
})();