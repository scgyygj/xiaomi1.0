window.onload=function(){
	function getClass(classname,range){
		var range=range||document;
			if(document.getElementsByClassName){
				return range.getElementsByClassName(classname);
			}
			else
			{
			var newarr=[];
			var all=range.getElementsByTagName('*');
			for (var i=0;i<all.length;i++){
				if(checkClass(all[i].className,classname)){
					newarr.push(all[i]);
				}
			}
			return newarr;
			}
		}
		function checkClass(className,classname){
			var arr=className.split(' ');
			for(var i=0;i<arr.length;i++){
				if(arr[i]==classname){
                   return true;
			    }
			    
			}
			return false;
		}
		
function $(select,range){
	var range=range||document;
	var first=select.charAt(0);
	if(first=='.'){
		return getClass(select.substring(1),range);
	}else if(first=='#'){
		return document.getElementById(select.substring(1));
	}
	else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
		return document.getElementsByTagName(select);
	}
}
//Banner图动画
let bigBanner=$('.big-banner')[0];
// let bannerimg=$('img',['big-banner']);
let bannerLi=bigBanner.getElementsByTagName('li');
console.log(bannerLi);
// let bannerImg=bigBanner.getElementsByTagName('img');
let items=$('.circle')[0];
let item=items.getElementsByTagName('li');	
let bigBox=$('.big-box')[0];
let LeftArrow=document.getElementsByClassName('left-arrow')[0];
let RightArrow=document.getElementsByClassName('right-arrow')[0];



let now=0;
let next=0;
let bannerImgW=parseInt(getComputedStyle(bigBanner,null).width);
let t;
let flag=true;
 t=window.setInterval(move,3000);
//右滑动
 function move(){
   next++;
   if(next==bannerLi.length){
   	next=0;
   }
   bannerLi[next].style.left=bannerImgW+'px';
   item[next].style.background='#7c7c81';
   animate(bannerLi[now],{left:-bannerImgW});
   item[now].style.background='#15171b';
   animate(bannerLi[next],{left:0},function(){
   	flag=true;
   });
   now=next;
 }

 //左滑动
function moveL(){
   next--;
   if(next<0){
   	next=bannerLi.length-1;
   }
   bannerLi[next].style.left=`${-bannerImgW}px`;

   animate(bannerLi[now],{left:bannerImgW});
   item[now].style.background='#15171b';
   // item[next].style.background='#7c7c81';
   animate(bannerLi[next],{left:0},function(){
   	flag=true;
   });
   item[next].style.background='#7c7c81';
   now=next; 
 }

 bigBox.onmousemove=function(){
 	clearInterval(t);
 }
 bigBox.onmouseout=function(){
 	t=window.setInterval(move,3000);
 }
 //左右按扭
 LeftArrow.onclick=function(){
 	if(!flag){
 		return;
 	}

     moveL();
   flag=false;
 }
 RightArrow.onclick=function(){
 	if(!flag){
 		return;
 	}

     move();
     flag=false;
 }
//点击小圆点
for(let i=0;i<item.length;i++){
	item[i].onclick=function(){
		bannerLi[i].style.left=`${bannerImgW}px`;
		item[i].style.background='#7c7c81';
		item[now].style.background='#15171b';
		animate(bannerLi[now],{left:-bannerImgW});
		animate(bannerLi[i],{left:0});
		now=next=i;
	}
}
////////////////////////
//侧导航
 let asi1=document.getElementsByClassName('asi1')[0];
 let asi1Li=document.getElementsByClassName('asili');
 let none=document.getElementsByClassName('none');

for(let i=0;i<asi1Li.length;i++){
	asi1Li[i].onmouseover=function(){
		none[i].style.display='block';
	}
	asi1Li[i].onmouseout=function(){
		none[i].style.display='none';
	}
}
///////////////
//上边菜单
let listop=document.getElementsByClassName('listop')[0];
let navs=listop.getElementsByTagName('nav')[0];
let lis=document.querySelectorAll('.listtoplis1>li>a');
let ListTop=document.getElementsByClassName('ListTop');
let listtopbig=document.querySelector('.listtopbig');
let list1=document.querySelector('.listtoplis1');
console.log(lis)
    list1.onmouseover=function(){
        animate(listtopbig,{height:250});
    }
    list1.onmouseout=function(){
        animate(listtopbig,{height:0});
    }
for(let i=0;i<lis.length;i++){

    lis[i].onmouseover=function(){
        animate(ListTop[i],{height:250});

    }
     lis[i].onmouseout=function(){
    	animate(ListTop[i],{height:0});
    }
}
///////////////////////////////////////////////
//小米明星单品
  let shop=document.querySelector('.shop');
  let bigStar=document.querySelector('.bigStar');
  let xiaoyu=document.querySelector('.xiaoyu');
  let dayu=document.querySelector('.dayu');
  let starLi=document.querySelector('.bigStar>div');
  let i=0;
  let maxX=(starLi.offsetWidth+parseInt(getComputedStyle(starLi,null).marginRight));
  console.log(maxX);
  let star=window.setInterval(starfn,3000);
  function starfn(){
      if(i==0){
      	bigStar.style.transform=`translateX(${i*maxX*5}px)`;
      	i++;
     }
      else if(i==1){
      	bigStar.style.transform=`translateX(${-i*maxX*5}px)`;
      	i--;
      }

  }
  xiaoyu.onclick=function(){
   if(i==1){
   	return;
   }
  	i++;
  	bigStar.style.transform=`translateX(${-maxX*5}px)`;
  }
  dayu.onclick=function(){
  	if(i==0){
   	return;
   }
  	i--;
  	bigStar.style.transform=`translateX(${i*maxX*5}px)`;
  }
  let mingxingRight=document.querySelector('.mingxing-right');
  console.log(mingxingRight);
  mingxingRight.onmouseover=function(){
  	clearInterval(star);
  }
  mingxingRight.onmouseout=function(){
  	star=window.setInterval(starfn,3000);
  }
  //移入框内停止自动轮播
//内容部分
    let halibote=document.querySelectorAll('.halibote');
    let nami=document.querySelectorAll('.nami')
    let neirongleft=document.querySelectorAll('.xiaojiantou')
    let neirongright=document.querySelectorAll('.xiaojiantou-right')
    let dianbox=document.querySelectorAll('.dian-box')
    let dianli=document.querySelectorAll('.dian-box>a');
    console.log(dianli);
    let j=0;
    for(let x=0;x<halibote.length;x++){
    neirongleft[x].onclick=function () {
        if(j==0){
            return;
        }
           j--;
            // halibote.style.left=`-j*296`
            animate(halibote[x],{left:-j*296});
            for(let i=0;i<dianli.length;i++){
                dianli[i].style.border='none';
                dianli[i].style.background='#b0b0b0'
            }
        dianli[j].style.border='2px solid #ff6700';
        dianli[j].style.background='#fff';
            // animate(dianli[j],{border: 2px solid #ff6700});



    }
    neirongright[x].onclick=function () {
        if(j==2){
            return;
        }
           j++;
        animate(halibote[x],{left:-j*296});
        for(let i=0;i<dianli.length;i++){
            dianli[i].style.border='none';
            dianli[i].style.background='#b0b0b0'
        }
        dianli[j].style.border='2px solid #ff6700';
        dianli[j].style.background='#fff';


    }
    }
//为你推荐
       let wntjbox=document.querySelector('.wntjbox');
       let xiaoyu1=document.querySelector('.xiaoyu1');
       let dayu1=document.querySelector('.dayu1');
       let a=0;
       xiaoyu1.onclick=function () {
             if(a==0){
                 return;
             }
             a--;
           animate(wntjbox,{left:-a*1240});
       }
    dayu1.onclick=function () {
        if(a==3){
            return;
        }
        a++;
        animate(wntjbox,{left:-a*1240});
    }
//中间动画
       let dapen=document.querySelector('.dapenjs');
       let zhineng=document.querySelector('.zhinengjs')
       let penjian=document.querySelector('.penjianjs')
       let zhoubian=document.querySelector('.zhoubianjs')
       let jiadian=document.querySelector('.jiadianjs')
       donghua(dapen);
       donghua(zhineng);
       donghua(penjian);
       donghua(zhoubian);
       donghua(jiadian);

    function donghua(aaa) {
        let jdnam=aaa.querySelector('.jiadian-top-right');
        // let jdqb=document.getElementsByClassName('jiadian-top-right');
        let jdbtn=jdnam.getElementsByTagName('a');
        let jdzt=aaa.querySelectorAll('.anmjiadian');
        console.log(jdzt);

        for(let i=0;i<jdbtn.length;i++){
            jdbtn[i].onmouseover=function () {
                for(let j=0;j<jdzt.length;j++){
                    jdzt[j].style.opacity=0;
                }
                animate(jdzt[i],{opacity:1});
            }
        }
    }
//购物车
    let gou=document.querySelector('.gouwuche-big');
    let goujs=document.querySelector('.gouwuchejs');
    gou.onmouseover=function () {
        // goujs.style.opacity='1';
        // goujs.style.top='40px';
        animate(goujs,{top:40,opacity:1});
    }
    gou.onmouseout=function () {
        // goujs.style.opacity='0';
        // goujs.style.top='0px';
        animate(goujs,{top:0,opacity:0});
    }


















 //    //点击效果
	// for(let i=0;i<item.length;i++){
	// 	item[i].onclick=function(){
	// 	for(let j=0;j<bannerImg.length;j++){
	// 		bannerImg[j].style.display='none';
	// 		// item[j].style.background='#15171b';
	// 	}
	// 	bannerImg[i].style.display='block';
	// 	// item[i].style.background='#7c7c81';
	// 	num=i;
	// }
	// }
 //    //自动轮播
 //    let num=0;
 //    let time=window.setInterval(move,1000);
 //    function move(){
 //    	num++;
 //    	if(num==bannerImg.length){
 //    		num=0;
 //    	}
    	
 //    	for(let i=0;i<bannerImg.length;i++){
 //    		bannerImg[i].style.display='none';
 //    		// item[i].style.background='#15171b';
 //    	}
 //    	bannerImg[num].style.display='block';
 //    	// item[num].style.background='#7c7c81';
 //    }
 //    // 鼠标移入停止自动轮播
 //    bigBox.onmouseover=function(){
 //    	clearInterval(time);
 //    }
 //    bigBox.onmouseout=function(){
 //    	time=window.setInterval(move,1000);
 //    }

	// //
   
	// 	RightArrow.onclick=function(){
	// 	     move();
	
	// }

	// 	LeftArrow.onclick=function(){
	// 	num--;
 //    	if(num==0){
 //    		num=bannerImg.length-1;
 //    	}
    	
 //    	for(let i=0;i<bannerImg.length;i++){
 //    		bannerImg[i].style.display='none';
 //    		// item[i].style.background='#15171b';
 //    	}
 //    	bannerImg[num].style.display='block';
	// }





	}