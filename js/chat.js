  //获取好友网名
  $('.conLeft li').on('click',function(){
		$(this).addClass('bg').siblings().removeClass('bg');
		var intername=$(this).children('.liRight').children('.intername').text();
		$('.headName').text(intername);
		$('.newsList').html('');
	})
  //发送消息
	$('.sendBtn').on('click',function(){
		var news=$('#dope').val();
		if(news==''){
			alert('Can not be empty');
		}else{
			$('#dope').val('');
		var str='';
		str+='<li>'+
				'<div class="nesHead"><img src="img/6.jpg"/></div>'+
				'<div class="news"><img class="jiao" src="img/talk.jpg">'+news+'</div>'+
			'</li>';
		$('.newsList').append(str);
		setTimeout(answers,1000);
		$('.conLeft').find('li.bg').children('.liRight').children('.infor').text(news);
		//将滚动条始终保持在底部
		$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight );
	}

	})
	//随机产生一条回复
	function answers(){
		var arr=["Hi!","Nice day, isn't it?","How's it going?","I'm super cute!","I'm a lovely star.","Don't leave me alone!","I'm playing games with children of stars, see you later~","I'm the coolest one in this room.","Okay.","Kiss me~","Yep?","Let's go and take a look at Bear With Me.","Is there any activities for me?"
,"<img src='img/15.gif'>","<img src='img/13.gif'>","<img src='img/9.gif'>","<img src='img/25.gif'>","<img src='img/38.gif'>","<img src='img/46.gif'>","<img src='img/51.gif'>","<img src='img/68.gif'>","<img src='img/38.gif'>","<img src='img/84.gif'>","<img src='img/33.gif'>","<img src='img/66.gif'>","<img src='img/22.gif'>","<img src='img/16.gif'>"];
		var aa=Math.floor((Math.random()*arr.length));
		var answer='';
		answer+='<li>'+
					'<div class="answerHead"><img src="img/tou.jpg"/></div>'+
					'<div class="answers"><img class="jiao" src="img/TIM图片20170926103645_03_02.jpg">'+arr[aa]+'</div>'+
				'</li>';
		$('.newsList').append(answer);
		$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight );
		//历史消息的展现与隐藏
	var newlen=$('.newsList li').length;
	var lis=$('.newsList li:last').index();
	var maxlen=newlen-5;
	console.log(lis);
			if(newlen%10>5){
				$('.ChatRecord').show();
				$('.newsList li:lt('+maxlen+')').hide();
			}
	}
	//表情包的展现与隐藏
	$('.ExP').on('click',function(){
		if($('.emjon').css('display')=='none'){
			$('.emjon').show();
		}else{
			$('.emjon').hide();
		}
	})

	//发送表情
	$('.emjon li').on('click',function(){
		var imgSrc=$(this).children('img').attr('src');
		var str="";
		str+='<li>'+
				'<div class="nesHead"><img src="img/6.jpg"/></div>'+
				'<div class="news"><img class="jiao" src="img/talk.jpg"><img class="Expr" src="'+imgSrc+'"></div>'+
			'</li>';
		$('.newsList').append(str);
		setTimeout(answers,1000);
		$('.emjon').hide();
		$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight );
	})
	//展开历史消息
	$('.RightCont').on('click','.ChatRecord',function(){
		$('.newsList li:eq(0),li:gt(0)').show();
		$('.ChatRecord').hide();
	})