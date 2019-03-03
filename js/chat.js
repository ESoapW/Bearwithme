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
			alert('不能为空');
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
		var arr=["你好","今天天气很棒啊","你吃饭了吗？","我最美我最美","我是可爱的小星星","你们忍心这样子对我吗？","我在和星星的孩子做游戏，稍后回复。","我不管，我最帅，我是你们的小可爱","好吧","么么哒","馒头：嗷","Bear with me出了新的游戏，快去看看吧。","负责人小姐姐，最近有什么新的活动可以参加么，我也想为星星的孩子做点什么。"
,"<img src='img/15.gif'>","<img src='img/13.gif'>","<img src='img/9.gif'>","<img src='img/25.gif'>","<img src='img/38.gif'>","<img src='img/46.gif'>","<img src='img/51.gif'>","<img src='img/68.gif'>","<img src='img/38.gif'>","<img src='img/84.gif'>","<img src='img/33.gif'>","<img src='img/66.gif'>","<img src='img/22.gif'>","<img src='img/16.gif'>","<img src='img/86.gif'>","<img src='img/91.gif'>","<img src='img/73.gif'>","<img src='img/49.gif'>"];
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
