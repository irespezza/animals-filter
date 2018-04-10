$(document).ready(function () {

	$("filter").on("change", function (e) {

			var value = $(this).val();

			$(".item.active").removeClass("active");

			$("." + value).addCLass("active")
		)
	});


});