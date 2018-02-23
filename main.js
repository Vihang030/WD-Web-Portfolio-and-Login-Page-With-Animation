$(document).ready(
	function(){
		$("ul li:nth-child(1)").hover(function(){
			$("#underLine").css("margin-left", "3px");
		});

		$("ul li:nth-child(2)").hover(function(){
			$("#underLine").css("margin-left", "113px");
		});

		$("ul li:nth-child(3)").hover(function(){
			$("#underLine").css("margin-left", "223px");
		});

		$("ul li:nth-child(4)").hover(function(){
			$("#underLine").css("margin-left", "333px");
		});

		$("ul li:nth-child(5)").hover(function(){
			$("#underLine").css("margin-left", "443px");
		});
	});