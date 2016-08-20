(function() {
	$(document).ready(function() {
		$.ajax({
			async: true,
			url: '/getAstroidData',
			dataType: 'json',
			success: function(data) {
				console.log(data);
			}
		});
	});
})();