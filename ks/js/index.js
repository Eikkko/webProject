// world部分
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	// console.log(scrollT);
	var backTop = $("#world").offset().top - $(window).height()*2/3;
	// console.log(backTop);
	if(scrollT > backTop){
		$(".a1").addClass("animated bounceInRight show").removeClass("fade");
		$(".a2").addClass("animated bounceInUp show").removeClass("fade");
		$(".a3").addClass("animated bounceInDown show").removeClass("fade");
		$(".a4").addClass("animated bounceInLeft show").removeClass("fade");
	}
});
// star 部分
$(window).scroll(function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var backTop = $("#star").offset().top - $(window).height()*2/3;
	if(scrollT > backTop){
		$(".star1").addClass("animated bounceInRight");
		$(".star2").addClass("animated bounceInUp");
		$(".star3").addClass("animated bounceInDown");
		$(".star4").addClass("animated bounceInLeft");
	}
});


 //当滚动条的位置处于距顶部500像素以下时，返回顶部出现，否则消失
 $(function () {
     $(window).scroll(function(){
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		var backTop = $("#star").offset().top - $(window).height();
		var navTop = $("#nav").offset().top;

         if(scrollT >= 500){
         	 $("#totop").css('display','block');
				 
         }
         if(scrollT < 500){
         	 $("#totop").css('display','none');
         }
	 //当滚动条的位置处于距顶部30像素以下时，吸顶灯出现，否则消失
		if(scrollT >= 30){
		 	 $("#nav").css({
		 	 "position":"fixed",
		 	 "left":"0",
		 	 "right":"0",
		 	 "top":"0",
		 	 "margin":"0 auto",
		 	 "zIndex":"1000"
		 	  }); 
		 }
		if(scrollT < 30){
		 	 $("#nav").css({
			 "position":"static",
			  });
		 }
     });
     //当点击返回顶部后，回到页面顶部位置
     $("#btn").click(function(){
         $('body,html').animate({scrollTop:0},1000);
         return false;
     });
	 if(scrollT >= 30){
	  		 	 $("#nav").css({
	  		 		"position":"fixed",
	  		 		"left":"0",
	  		 		"right":"0",
	  		 		"top":"0",
	  		 		"margin":"0 auto",
	  		 		"zIndex":"1000"
	  		 		 }); 
	  		 }
	  		 if(scrollT < 30){
	  		 	$("#nav").css({
	 			"position":"static",
	  		 });
	 }
 });
 

