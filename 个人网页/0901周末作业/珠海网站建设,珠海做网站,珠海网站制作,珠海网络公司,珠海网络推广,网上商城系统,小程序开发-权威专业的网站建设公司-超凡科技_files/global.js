// JavaScript Document



$(document).ready(function(){



	//nav

	$(".header .nav .btn_nav_1,.nav_drop").hover(function(){

		$(".nav_drop").stop(true,false).animate({"height":"207px","opacity":"1"},"fast");

		$(".header .nav .btn_nav_1").find("i").show();

	},function(){

		$(".nav_drop").animate({"height":"0","opacity":"0"},"fast");

		$(".header .nav .btn_nav_1").find("i").hide();

	});



	$(".header .nav li").hover(function(){

		$(this).find("span").stop(true,false).animate({"marginTop":"-25px"},170);

	},function(){

		$(this).find("span").stop(true,false).animate({"marginTop":"0"},170);

	});

		

	$(".subnav li").hover(function(){

		if(!$(this).children("a").hasClass("cur")){

		//$(this).parent().siblings().children(".subnav_con").fadeOut();

		$(this).children(".subnav_con").fadeIn();

	}



	},function(){

		if(!$(this).children("a").hasClass("cur")){

		$(this).children(".subnav_con").fadeOut();

	}



	})



	$("span.top_btn").hover(function(){

		$(this).find(".img1").hide(5);

	$(this).find(".img2").show(5);



	},function(){

		$(this).find(".img2").hide(5);

	$(this).find(".img1").show(5);



	});



	$("span.tel_btn,span.qq1_btn,span.qq2_btn").hover(function(){

		$(this).find(".img1").hide(5);

	$(this).find(".img2").show(5);

	$(this).stop().animate({width:"212px"},200,"easeOutCubic");



	},function(){

		$(this).stop().animate({width:"48px"},150,"easeOutCubic",function(){

		$(this).find(".img2").hide(5);

		$(this).find(".img1").show(5);

	});



	});



	



	$("#business .box").find("a").hover(function(){
	
		$(this).children(".text_con").animate({top:"0"},260,"easeOutCubic");

	},function(){

		$(this).children(".text_con").animate({top:"-240px"},400,"easeOutCubic");



	});



	



	$("#clients li,.our_customer ul li").hover(function(){

		$(this).children("span").fadeIn(600);

	},function(){

		$(this).children("span").fadeOut(600);



	})





	$(".expe_box .sublist2 dl").hover(function(){

		$(this).children("dt").children().animate({width:"430px",height:"259px"},200);



	},function(){

		$(this).children("dt").children().animate({width:"382px",height:"230px"},200);



	})



	//控制



	$(window).scroll(function(){

	// alert($(window).scrollTop())

	if($(window).scrollTop() >= 600){

		$(".index_subnav li .subnav_con").css("display","none");

		$(".index_subnav li a").removeClass("cur");

		$(".index_subnav li").eq(0).children(".subnav_con").css("display","block");

		$(".index_subnav li").eq(0).children("a").addClass("cur");

	}

	if($(window).scrollTop() >= 1200){

		$(".index_subnav li .subnav_con").css("display","none");

		$(".index_subnav li a").removeClass("cur");

		$(".index_subnav li").eq(1).children(".subnav_con").css("display","block");

		$(".index_subnav li").eq(1).children("a").addClass("cur");

	}

	if($(window).scrollTop() >= 1600){

		$(".index_subnav li .subnav_con").css("display","none");

		$(".index_subnav li a").removeClass("cur");

		$(".index_subnav li").eq(2).children(".subnav_con").css("display","block");

		$(".index_subnav li").eq(2).children("a").addClass("cur");

	}

	if($(window).scrollTop() >= 2000){

		$(".index_subnav li .subnav_con").css("display","none");

		$(".index_subnav li a").removeClass("cur");

		$(".index_subnav li").eq(3).children(".subnav_con").css("display","block");

		$(".index_subnav li").eq(3).children("a").addClass("cur");

	}

	if($(window).scrollTop() >= 2900){

		$(".index_subnav li .subnav_con").css("display","none");

		$(".index_subnav li a").removeClass("cur");

		$(".index_subnav li").eq(4).children(".subnav_con").css("display","block");

		$(".index_subnav li").eq(4).children("a").addClass("cur");

	}

	if($(window).scrollTop() >= 3300){

		$(".index_subnav li .subnav_con").css("display","none");

		$(".index_subnav li a").removeClass("cur");

		$(".index_subnav li").eq(5).children(".subnav_con").css("display","block");

		$(".index_subnav li").eq(5).children("a").addClass("cur");

	}



	});



	



	//作品



	// $(".works_box .box").hover(function(){

	// 	$(this).children().children(".work_text").stop().animate({left:"0"},350,"easeOutCubic");



	// },function(){

	// 	$(this).children().children(".work_text").stop().animate({left:"-395"},270,"easeOutCubic");



	// })



	$(".nav_sub a").click(function(){

		$(this).addClass("cur");

		$(this).siblings().removeClass("cur");

	})



	//关于

	$(".about_box .partners li").hover(function(){

		$(".about_box .partners li span").stop(true,false).animate({bottom:"-33px"},170,"easeOutCubic");

		$(this).find("span").stop(true,false).animate({bottom:"0"},170,"easeOutCubic");

	})



	//浮动客服，置顶



	$(".fixedBox li").hover(function(){

		$(this).addClass("on");



	},function(){

		$(this).removeClass("on")



	})



	$(".fixedBox .qq,.fixedBox .tel,.fixedBox .wechat").hover(function(){
		$(this).find(".link").animate({right:"42px",opacity:"1"});
		$(this).children(".link").show();
	},function(){
		$(this).find(".link").stop(true,false).animate({right:"60px",opacity:"0"});
		$(this).children(".link").hide();
	})

	//服务

	$(".ser_web_box1 dl").hover(function(){

		$(this).addClass("cur");

		$(this).children().children(".img1").hide();

		$(this).children().children(".img2").show();

	},function(){

		$(this).removeClass("cur");

		$(this).children().children(".img2").hide();

		$(this).children().children(".img1").show();

	})

	$(".ser_web_box2_con dl").hover(function(){

		$(this).addClass("cur");

		$(this).children().children(".img1").hide();

		$(this).children().children(".img2").show();

	},function(){

		$(this).removeClass("cur");

		$(this).children().children(".img2").hide();

		$(this).children().children(".img1").show();

	})

	

	



	// 云建站案例、模板展示经过效果

    $(".hover_box").live("hover", function () {

       $(this).find(".bgk").fadeToggle("fast");

    });



})



//在线留言表单验证

function chksub(){



    if($("#adder_name").val() == ''){

        alert('请输入您的姓名！');

       $("#adder_name").focus(); 

        return false;

    }

    if($("#adder_email").val() == ''){

        alert('请输入您的邮箱！');

        $("#adder_email").focus(); 

 

        return false;

    }

    if($("#adder_call").val() == ''){ 

        alert('请输入您的手机号码！');

        $("#adder_call").focus();

        return false;

    }

 

    var reg2= /^1[3|4|5|8][0-9]\d{4,8}$/;  

    if(!reg2.test( $("#adder_call").val() )){  

    	alert('手机号码格式输入错误！');

        return false;  

    }



   /* if($("#adder_qq").val() == ''){

        alert('请输入您的QQ号！');

        $("#adder_qq").focus();

        return false;

    }*/

    if($("#content").val() == ''){

        alert('内容不能为空！');

        $("#content").focus(); 

        return false;

    }
	
	if($("#verify").val() == ''){

        alert('验证码不能为空！');

        $("#verify").focus(); 

        return false;

    }
	
    $.post("/index.php/Message/add", {"verify":$("#verify").val(),"adder_name":$("#adder_name").val(),"qq":$('#adder_qq').val(),"info_type":$('#info_type').val(),"phone":$("#adder_call").val(),"content":$("#content").val(),"sex":$("input[name='sex']:checked").val()}, function(msg) {

		if(msg==1){
			alert('发表成功');
	
			$("#adder_name").val('');
	
			$("#adder_qq").val('');
	
			$("#adder_call").val('');
	
			$("#content").val('');
			
			$("#verify").val('');
			
			$("#verifyImg").attr("src",function(){this.src+='?'+Math.random();});
			return true;
		}else if(msg==2){
			alert('验证码错误，发表失败！');	
			$("#verifyImg").attr("src",function(){this.src+='?'+Math.random();});
			return false;	
		}else{
			alert(msg);	
			return false;
		}
	});

}



