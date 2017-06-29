$.widget( "custom.progressbar", {
	_create: function() {
		var progress = this.options.value + "%";
		this.element
			.addClass( "progressbar" )
			.text( progress );
	}
});

$( document ).ready(function() {
	$( "<div></div>" )
		.appendTo( "body" )
		.progressbar({ value: 20 });
});