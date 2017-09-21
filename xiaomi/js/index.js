window.onload = function(){
	let aside=document.getElementsByTagName('aside');
	let ul1=aside[0].getElementsByTagName('ul')[0];
	let lis1=ul1.getElementsByTagName('li');
	let iteams=document.getElementsByClassName('iteams');
	let navcen=document.getElementsByClassName('nav-center');
	let a1=navcen[0].getElementsByTagName('a');
	let uls=navcen[0].getElementsByTagName('ul');
	let imgs=document.getElementsByClassName('img-list')[0];
	let imgli=imgs.getElementsByClassName('li-img');
	let banners=document.getElementsByClassName('banner')[0];
	let yuans=document.getElementsByClassName('yuan')[0];
	let smalls=yuans.getElementsByClassName('small-yuan');
	let bannerleft=banners.getElementsByClassName('banner-left');
	let iconleft=bannerleft[0].getElementsByClassName('icon-zuo');
	let bannerright=banners.getElementsByClassName('banner-right');
	let iconright=bannerright[0].getElementsByClassName('icon-you');

	let now=0;
	let next=0;
	let flag = true; 


	//左右边小箭头鼠标点击移入效果
	iconleft[now].onclick=function(){
		if(!flag){
			return;
		}
		movel();
		flag=false;
	}
	iconright[0].onclick=function(){
		if(!flag){
			return;
		}	
		move();
		flag=false;
	}

	//自动改变banner图片
	let imgW=parseInt(getComputedStyle(imgs,null).width);
	console.log(imgW);
	let t=setInterval(move, 3000);
	function move(){
		next++;
		if(next==imgli.length){
	 		next=0;
	 	}
	 	smalls[now].style.background='rgba(0, 0, 0, 0.4)';
		smalls[next].style.background='white';
	 	imgli[next].style.left=`${imgW}px`;
	 	animate(imgli[now],{left:-imgW});
	 	animate(imgli[next],{left:0},function(){
	 		flag=true;
	 	});
	 	now=next;
	}
	function movel(){
		next--;
		if(next<0){
	 		next=imgli.length-1;
	 	}
	 	smalls[now].style.background='rgba(0, 0, 0, 0.4)';
		smalls[next].style.background='white';
	 	imgli[next].style.left=`${-imgW}px`;
	 	animate(imgli[now],{left:imgW});
	 	animate(imgli[next],{left:0},function(){
	 		flag=true;
	 	});
	 	now=next;
	}

	//点击小圆改变banner图片
	for(let i=0;i<smalls.length;i++){
		smalls[i].onclick=function(){
			if(now==i){
				return;
			}	
			imgli[i].style.left=`${imgW}px`;
	 		animate(imgli[now],{left:-imgW});
	 		animate(imgli[i],{left:0});
	 		smalls[now].style.background='rgba(0, 0, 0, 0.4)';
			smalls[i].style.background='white';
			now=next=i;
		}				
	}
	
	//鼠标进入banner，图片停止滚动
	banners.onmouseover=function(){
		clearInterval(t);
	}
	banners.onmouseout=function(){
		t=setInterval(move,3000);
	}

	// iconleft[now].onclick=function(){
	// 	flag=true;
	// 	if(!flag){
	// 		return ;
	// 	}
	// 	move();
	// 	flag=false;
	// }
	
	


	//自动改变banner图片
	// let t=setInterval(move, 3000);
	// let num=0;
	// function move(){
	// 	num++;
	// 	if(num==imgli.length){
	// 		num=0;
	// 	}
	// 	for(let i=0;i<imgli.length;i++){
	// 		// imgli[i].style.display='none';
	// 		animate(imgli[i],{opacity:0});
	// 		smalls[i].style.background='#16161c';		
	// 	}
	// 	// imgli[num].style.display='block';
	// 	animate(imgli[num],{opacity:1});
	// 	smalls[num].style.background='#9c9ca2';
	// }
	// function movel(){
	// 	num--;
	// 	if(num<0){
	// 		num=imgli.length-1;
	// 	}
	// 	for(let i=0;i<imgli.length;i++){
	// 		//imgli[i].style.display='none';
	// 		animate(imgli[i],{opacity:0});
	// 		smalls[i].style.background='#16161c';		
	// 	}
	// 	//imgli[num].style.display='block';
	// 	animate(imgli[num],{opacity:1});
	// 	smalls[num].style.background='#9c9ca2';
	// }

	//鼠标进入banner，图片停止滚动
	// banners.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// banners.onmouseout=function(){
	// 	t=setInterval(move,3000);
	// }

	// //点击轮波改变banner图片
	// for(let i=0;i<smalls.length;i++){
	// 	smalls[i].onclick=function(){
	// 		for(let j=0;j<imgli.length;j++){
	// 			//imgli[j].style.display='none';
	// 			animate(imgli[j],{opacity:0});
	// 			smalls[j].style.background='rgba(0, 0, 0, 0.4)';
	// 		}
	// 		//imgli[i].style.display='block';
	// 		animate(imgli[i],{opacity:1});
	// 		smalls[i].style.background='white';
	// 		num=i;
	// 	}				
	// }

	// //左右边小箭头鼠标点击移入效果
	// for(let i=0;i<smalls.length;i++){
	// 	iconleft[0].onclick=function(){
	// 		movel();
	// 	}
	// 	iconright[0].onclick=function(){
	// 		move();
	// 	}
	// }

	// //头部点击下拉出现框
	// for(let i=0;i<lis1.length;i++){
	// 	lis1[i].onmouseover=function(){
	// 		iteams[i].style.display='block';
	// 		// animate(iteams[i],{opacity:1});
	// 	}
	// 	lis1[i].onmouseout=function(){
	// 		iteams[i].style.display='none';
	// 		// animate(iteams[i],{opacity:0});
	// 	}
	// }

	// //侧导航的鼠标移入的效果
	// for(let i=0;i<a1.length;i++){
	// 	a1[i].onmouseover=function(){
	// 		uls[i].style.display='block';
	// 		// animate(uls[i],{opacity:1});
	// 	}
	// 	a1[i].onmouseout=function(){
	// 		uls[i].style.display='none';
	// 		// animate(uls[i],{opacity:0});
	// 	}
	// }
}