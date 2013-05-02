function startup(){
	var lis = $('li');
	var liNum = lis.length;
	for(var i = 0; i < liNum - 1; i++)
		$(lis[i]).after($(lis[i + 1]));
	adjustDisplay(lis);
	adjustSliders(lis);
};

function adjustDisplay(lis){
	var liWidth = $(lis[0]).width();
	var liHeight = $(lis[0]).height();
	$('.mainDisplay').width(liWidth);
	$('.mainDisplay').height(liHeight);
};

function adjustSliders(lis){
	var lisNum = lis.length;
	var liWidth = $(lis[0]).width();
	var liHeight = $(lis[0]).height();
	$('.sliders').width(lisNum * liWidth);
	$('.sliders').height(liHeight);
	var slidersOffset = -40 - liWidth;
	$('.sliders').css('margin-left', slidersOffset + "px");
}

function slideRight(){
	var left_with_px = $('.sliders').css('margin-left');
	var regex = /^-\d*/;
	var left = parseInt(regex.exec(left_with_px)[0]);
	var itemWidth = $('.slider:first').width();
	$('.sliders').animate({marginLeft: left - itemWidth + "px"}, 300, function(){
		$('.slider:last').after($('.slider:first'));
		$('.sliders').css('margin-left', -40 - itemWidth + "px");
	});
	
};

function slideLeft(){
	var left_with_px = $('.sliders').css('margin-left');
	var regex = /^-\d*/;
	var left = parseInt(regex.exec(left_with_px)[0]);
	var itemWidth = $('.slider:first').width();
	$('.sliders').animate({marginLeft: left + itemWidth + "px"}, 300, function(){
		$('.slider:first').before($('.slider:last'));
		$('.sliders').css('margin-left', -40 - itemWidth + "px");
	});
};
