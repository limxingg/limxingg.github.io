var oPage4=document.getElementsByClassName("page4")[0];
var oUl=oPage4.getElementsByTagName("ul")[0];
var aLi=oUl.children;
function changeLocation(){
	var aPos=[];
	var zIndex=1;
	for(var i=0;i<aLi.length;i++){
		aPos[i]={left:aLi[i].offsetLeft,top:aLi[i].offsetTop};
		aLi[i].style.left=aPos[i].left+"px";
		aLi[i].style.top=aPos[i].top+"px";
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].style.position="absolute";
		aLi[i].style.margin=0;
		aLi[i].index=i;
		drag(aLi[i]);
	}
	function drag(obj){
		obj.onmousedown = function(ev){
			var oEvent = ev || event;
			var disX = oEvent.clientX - obj.offsetLeft;
			var disY = oEvent.clientY - obj.offsetTop;
			obj.style.zIndex = zIndex++;
			clearInterval(obj.timer);
			eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('q.k=g(d){4 8=d||l;5.b.p=8.o-j+"a";5.b.h=8.t-u+"a";4 7=s(5);6(7&&7!=5){4 n=5.3;4 m=7.3;6(n<m){e(4 i=0;i<2.9;i++){6(2[i].3>=n+1&&2[i].3<=m){2[i].3--;f(2[i],c[2[i].3])}}}r{e(4 i=0;i<2.9;i++){6(2[i].3>=m&&2[i].3<=n-1){2[i].3++;f(2[i],c[2[i].3])}}}5.3=m;}};',31,31,'||aLi|index|var|obj|if|oNear|oEvent|length|px|style|aPos|ev|for|move|function|top||disX|onmousemove|event|||clientX|left|document|else|findNear|clientY|disY'.split('|'),0,{}))

			
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				obj.releaseCapture && obj.releaseCapture();
				
				move(obj,aPos[obj.index]);
			}; 
			obj.setCapture && obj.setCapture();
			return false;	
		};
	}
	//找最近  1 碰撞检测  2 算距离 3 比较 4 返回li
	function findNear(obj){
		eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('3 5=b;3 8=-1;a(3 2=0;2<4.c;2++){9(e(7,4[2])){3 6=d(7,4[2]);9(5>6){5=6;8=2}}}',15,15,'||i|var|aLi|iMin|dis|obj|iMinIndex|if|for|999999|length|getDis|collTest'.split('|'),0,{}))

		
		if(iMinIndex == -1){
			return null;
		} else {
			return aLi[iMinIndex];
		}
		
	}
	
	//算距离
	function getDis(obj1,obj2){
		var a = obj1.offsetLeft - aPos[obj2.index].left;
		var b = obj1.offsetTop - aPos[obj2.index].top;
		return Math.sqrt(a*a + b*b);
	}
	
	function collTest(obj1,obj2){
		eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('0 6=1.b;0 5=1.c;0 d=6+1.a;0 e=5+1.8;0 9=4[2.3].i;0 7=4[2.3].f;0 g=9+2.a;0 h=7+2.8;',19,19,'var|obj1|obj2|index|aPos|t1|l1|t2|offsetHeight|l2|offsetWidth|offsetLeft|offsetTop|r1|b1|top|r2|b2|left'.split('|'),0,{}))

		
		//没碰到
		if(r1 < l2 || b1 < t2 || l1 > r2 || t1 >　b2){
			return false;
		} else {
			return true;
		}
	}

}




function showContent(){
	for(var i=0;i<aLi.length;i++){
		over(aLi[i]);
		out(aLi[i]);
	}
	function getDirection(obj,oEvent){
		eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('3 5=6.i-0.b-0.9/2;3 7=0.d+0.c/2-6.e;3 a=1.h(7,5)*8/1.j;a+=8;a=(1.f(a/g))%4;',20,20,'obj|Math||var||x|oEvent|y|180|offsetWidth||offsetLeft|offsetHeight|offsetTop|clientY|round|90|atan2|clientX|PI'.split('|'),0,{}))

		return a;
		
	}
	function over(obj){
		obj.onmouseover=function(ev){
			var oEvent=ev||event;
			var oFrom=oEvent.fromElement||oEvent.relatedTarget;
			var n=getDirection(this,oEvent);
			var oSpan=this.children[0];
			oSpan.style.zIndex=100;
			if(obj.contains(oFrom)){
				return;
			}
			eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('e(c){9 0:4.5.6="-a";4.5.7=0;8;9 1:4.5.6="0";4.5.7="b";8;9 2:4.5.6="a";4.5.7=0;8;9 3:4.5.6=0;4.5.7="-b";8}d(4,{6:0,7:0});',15,15,'||||oSpan|style|left|top|break|case|200px|180px|n|move|switch'.split('|'),0,{}))

		};
	}
	function out(obj){
		obj.onmouseout=function(ev){
			var oEvent=ev||event;
			var oTo=oEvent.toElement||oEvent.relatedTarget;
			var n=getDirection(this,oEvent);
			var oSpan=this.children[0];
			if(obj.contains(oTo)){
				return;
			}
			eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('d(c){6 0:7(4,{5:-a,8:0});9;6 1:7(4,{5:0,8:b});9;6 2:7(4,{5:a,8:0});9;6 3:7(4,{5:0,8:-b});9}',14,14,'||||oSpan|left|case|move|top|break|200|180|n|switch'.split('|'),0,{}))

		};
	}
}