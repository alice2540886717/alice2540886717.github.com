$(function(){
	$('.nav-banner-in ul li:first').show();
	var timer01 = null;
	var timer02 = null;
	var num = 0;
	var myLOli = 0;
	var mytimer01 = function(){
		$('.nav-banner-in ul li').eq(num).stop().fadeOut();
		num++;
		if(num > 2){
			num = 0;
		}
		$('.nav-banner-in ol li').eq(num).addClass('nav-current').siblings().removeClass('nav-current');
		$('.nav-banner-in ul li').eq(num).stop().fadeIn();
	};
	$('.logo-loops ul').append($('.logo-loops ul li:first').clone(true));
	timer02 = setInterval(function(){
		myLOli++;
		if( myLOli > 2){
			myLOli = 1;
			$('.logo-loops ul').css('top','0px');
		}
		var topMove = myLOli * -20;
		$('.logo-loops ul').stop().animate({'top':''+topMove+'px'},1000);
	},1000);
	
	timer01 = setInterval(mytimer01,1000);
	$('.nav-banner').hover(function(e) {
        $('.leftBtn,.rightBtn').show();
		clearInterval(timer01);
    },function(){
		$('.leftBtn,.rightBtn').hide();
		clearInterval(timer01);
		timer01 = setInterval(mytimer01,1000);
		
	});
	$('.nav-banner .rightBtn').click(function(e) {
        $('.nav-banner-in ul li').eq(num).stop().fadeOut();
		num++;
		if(num > 2){
			num = 0;
		}
		$('.nav-banner-in ol li').eq(num).addClass('nav-current').siblings().removeClass('nav-current');
		$('.nav-banner-in ul li').eq(num).stop().fadeIn();
    });
	$('.nav-banner .leftBtn').click(function(e) {
        $('.nav-banner-in ul li').eq(num).stop().fadeOut();
		num--;
		if(num < 0){
			num = 3;
		}
		$('.nav-banner-in ol li').eq(num).addClass('nav-current').siblings().removeClass('nav-current');
		$('.nav-banner-in ul li').eq(num).stop().fadeIn();
    });
	$('.nav-banner-in ol li').click(function(e) {
        $(this).addClass('nav-current').siblings().removeClass('nav-current');
		$('.nav-banner-in li').eq(num).stop().fadeOut();
		$('.nav-banner-in ul li').eq($(this).index()).stop().fadeIn();
		num = $(this).index();
    });
	//首页结束
	$('.wWeb ul li').hover(function(e) {
        $(this).stop().animate({'width':'499px'},500).siblings().stop().animate({'width':'43px'},500);
    },function(){
		 $('.wWeb ul li').stop().animate({'width':'99px'},500);
	});
	//web结束
	$('.wUi-left ul li').mouseover(function(e) {
        var myHref = $(this).children('a').attr('href');
		var myTag = $('<div class="box"><img src="'+myHref+'" width="282" height="500"></div>');
		$('.wUi-left').after(myTag);
		var myX = e.pageX + 10;
		var myY = e.pageY - 250;//   '+myX+'
		$('.box').hide().show(500).css({'left':''+myX+'px','top':''+myY+'px'});
    }).mouseout(function(){
		$('.box').remove();
	}).mousemove(function(e){
		var myX = e.pageX + 10;
		var myY = e.pageY - 250;
		$('.box').css({'left':''+myX+'px','top':''+myY+'px'});
	})
	//UI左边结束
	$("#left li").mouseover(function(event) {
		myFn($(this).index(),0);
	});
	$("#right li").mouseover(function(event) {
		myFn($(this).index(),5);
	});
	function myFn(par1,par2){
		$("#center li").eq(par1+par2).show().siblings().hide();
	}
	//UI右边结束
	var nowimg = 0;
	$(".wBanner-in").prepend("<div class='maoni'></div>");
	for(var i = 0 ; i<= 70;i++){
		$(".maoni").append("<p></p>");
		$(".maoni p").eq(i).css("left",10*i);
		$(".maoni p").eq(i).css("background-position",-10*i + "px 0px");
	}
	$(".btnXia").click(function(){
		if(nowimg < 8){
			nowimg ++;
		}else{
			nowimg = 0;
		}
		$(".maoni p").css("background-image","url(style/images/banner" + nowimg +".jpg)");
		$(".maoni p").stop().animate({"width":10},600,function(){
			$(".tupian").attr("src","style/images/banner" + nowimg +".jpg");
			$(".maoni p").css("width",0);
		});
	});
	$(".btnShang").click(function(){
		if(nowimg > 0){
			nowimg --;
		}else{
			nowimg = 8;
		}
		$(".maoni p").css("background-image","url(style/images/banner" + nowimg +".jpg)");
		$(".maoni p").stop().animate({"width":10},600,function(){
			$(".tupian").attr("src","style/images/banner" + nowimg +".jpg");
			$(".maoni p").css("width",0);
		});
	});
	//banner结束
	new ZoomPic("jswbox");
	//电梯导航
	$('.nav-Ul li').hover(function(e) {
        $(this).children('a').html($(this).attr('myName'));

    },function(){
		$(this).children('a').html($(this).attr('myName2'));

	});
	$('.nav-Ul li').click(function(e) {
        var jump = $('.louceng').eq($(this).index()).offset().top;
		var jump = jump - 65;
		$('body,html').stop().animate({'scrollTop':''+jump+'px'},300);
    });
});

$(function() {
	$(".skill li").hover(function() {
			$(this).children(".skill-all").stop().fadeIn(300)
		}
		,function() {
			$(this).children(".skill-all").stop().fadeOut(300)
		}
	);
	$(".tishi").hover(function() {
		$(".tip2").stop().animate( {
				"top":"10px","opacity":"1"
			}
			,300)},function() {
		$(".tip2").stop().animate( {
				"top":"40px","opacity":"0"
			}
			,300)});
	function fangDa(par1,par2) {
		$(par1).click(function(event) {
				$(par2).fadeIn();
				$("body,html").css("overflow","hidden")
			}
		)}fangDa(".fangDa",".click-out1");
	fangDa(".fangDa2",".click-out2");
	fangDa(".fangDa3",".click-out3");
	fangDa(".fangDa4",".click-out4");
	fangDa(".fangDa5",".click-out5");
	fangDa(".fangDa6",".click-out6");
	$(".close").click(function(event) {
			$(".closeAll").fadeOut();
			$("body,html").css("overflow","auto")
		}
	);
	$(".wangye .wang li,.mian2 .xiangmu ul li span").hover(function() {
		$(this).css( {
				"-webkit-animation":"fand 0.4s forwards","-moz-animation":"fand 0.4s forwards","-o-animation":"fand 0.4s forwards","-ms-animation":"fand 0.4s forwards","animation":"fand 0.4s forwards"
			}
		)},function() {
		$(this).css( {
				"-webkit-animation":"fand2 0.4s forwards","-moz-animation":"fand2 0.4s forwards","-ms-animation":"fand2 0.4s forwards","-o-animation":"fand2 0.4s forwards","animation":"fand2 0.4s forwards",
			}
		)});
});