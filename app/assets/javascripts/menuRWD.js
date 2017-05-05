function menuRWD (){
    var status = "hide";

	$("#hamburger").click(function(){
        if(status == "show"){
        $("#menu").slideUp();
         status = "hide";
    } else {
        status = "show";
         $("#menu").slideDown();
    }
    });
    $(window).resize(function(){
    	var width = $(window).width()+18;
    	if(width > 640){
    		$("#menu").css("display", "block");
    	status = "show";
    
    } else { 
    		var check = $("#menu").css("display");
    		console.log(check)
    		if(check == "block")
    		$("#menu").css("display", "none");

         status = "hide";
    }
    });
}




$(document).on('turbolinks:load', menuRWD)