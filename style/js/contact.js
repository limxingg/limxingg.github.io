function ajax(options){
	
	options = options || {};
	if(!options.url){
		return;
	}
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('1.5=1.5||{};1.d=1.d||"e";1.7=1.7||0;3 b=[];1.5.t=s.r();v(3 c y 1.5){b.p(c+"="+u(1.5[c]))}3 9=b.B("&");6(w.j){3 2=g j()}a{3 2=g A("z.q")}6(1.d=="e"){2.o("e",1.h+"?"+9,f);2.i()}a{2.o("O",1.h,f);2.P("N-L","M/x-R-S-Q");2.i(9)}2.E=m(){6(2.F==4){C(n);6(2.8>=D&&2.8<G||2.8==J){1.l&&1.l(2.K)}a{1.k&&1.k(2.8)}}};6(1.7){3 n=H(m(){2.I()},1.7)}',55,55,'|options|xhr|var||data|if|timeout|status|str|else|arr|name|type|get|true|new|url|send|XMLHttpRequest|error|success|function|timer|open|push|XMLHTTP|random|Math||encodeURIComponent|for|window||in|Microsoft|ActiveXObject|join|clearTimeout|200|onreadystatechange|readyState|300|setTimeout|abort|304|responseText|Type|application|Content|post|setRequestHeader|urlencoded|www|form'.split('|'),0,{}))

	
}
function contact(){
	var oClose=document.getElementById("close");
	var oTop=document.getElementById("top"); 
	var oSend=document.getElementById("send");
	var oMain=document.getElementById("main");
	var oForm=document.getElementById("send-form");
	var oBtn=document.getElementById("send-btn");
	var oUser=document.getElementById("username");
	var oContent=document.getElementById("ocontent");
	var oNumer=document.getElementById("font-num");
	var topH=oTop.offsetHeight;
	var wH=oMain.offsetHeight;
	var wW=oMain.offsetWidth;
	var URL="wish.php";


	/* -----------start 字数限制----------------*/
		var timer=null;

		oContent.oninput=function(){
			oNumer.innerHTML=50-oContent.value.length;
			if(oNumer.innerHTML==0){
				oContent.oninput=null;
			}
			
		}
		// oContent.onblur=function(){
		// 	clearInterval(timer);
		// }
	/* -----------end 字数限制----------------*/



	/* -----------start QQ----------------*/
	var oQ=document.getElementById("phiz");
	var aImg=oQ.children;
	oQ.onclick=function(ev){
		eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('2 0=6||5;2 1=0.4||0.3;7(1.b.c()=="d"){8.9+="["+1.a+"]";}',14,14,'oEvent|oSrc|var|target|srcElement|event|ev|if|oContent|value|alt|tagName|toLowerCase|img'.split('|'),0,{}))

	}
	var arr1=[];
	var arr2=[];
	for(var i=0;i<aImg.length;i++){
		arr1.push("["+aImg[i].alt+"]");
		arr2.push(aImg[i].src);
	}
	function c2p(str){
		for(var i=0;i<arr1.length;i++){
			while(str.indexOf(arr1[i])!=-1){
				str=str.replace(arr1[i],'<img src="'+arr2[i]+'"/>');
			}	
		}
		return str;
		
	}
	/* -----------end QQ----------------*/
	oClose.onclick=function(){
		oForm.style.display="none";
	}
	// 发表许愿
	// 		1. 发表许愿
	// 		wish.php?act=add&username=xxx&content=xxx
	// 			{error:1, msg:xxx}
	oSend.onclick=function(){
		oForm.style.display="block";
		var w=oForm.offsetWidth;
		var h=oForm.offsetHeight;
		oForm.style.left="50%";
		oForm.style.top="50%";
		oForm.style.marginLeft=-w/2+"px";
		oForm.style.marginTop=-h/2+"px";
	};
	oBtn.onclick=function(){
		eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('4(2.0&&3.0&&2.0.b<=c){8({9:e,d:{f:"h",g:3.0,a:2.0},r:q(5){p 1=u("("+5+")");6(1.7);t.s.o="k";4(1.j){6(1.7)}i{n.m.l()}}})}',31,31,'value|json|oContent|oUser|if|str|alert|msg|ajax|url|content|length|50|data|URL|act|username|add|else|error|none|reload|location|window|display|var|function|success|style|oForm|eval'.split('|'),0,{}))

	};
	// 		2. 获取所有心愿
	// 		wish.php?act=get
	// 			{error:0, msg:[{'id':1, 'username':'xxx', 'content':'xxx'},{},{},{}.......]}
	getAll();
	function getAll(){
		eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('9({8:b,a:{5:"7"},6:g(2){3 1=f("("+2+")");h(1.c==0){3 4=1.e;d(4)}}});',18,18,'|json|str|var|arr|act|success|get|url|ajax|data|URL|error|add|msg|eval|function|if'.split('|'),0,{}))

	}
	function add(arr){
		eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('x(4 i=0;i<8.y;i++){4 3=G.H("F");3.D="E a"+I(b(1,5));3.M=\'<k><6 7="p">\'+8[i].p+\'</6><6 7="L">J.K\'+(i+1)+\'</6></k><9 7="m">\'+C(8[i].m)+\'</9><9 7="v"><6 7="l">\'+s(8[i].l)+\'</6><a A="" 7="z"></a></9>\';12.10(3);4 e=11-Y-3.Z;4 o=14-15;3.n.16=b(0,o)+"h";3.n.X=b(0,e)+"h";4 g=3.j[2];4 f=g.j[1];(c(q){f.V=c(){S(R("U？")){T({W:P,O:{Q:"13",r:8[q].r},B:c(d){4 w=t("("+d+")");u(d)}})}}})(i);N(3)}',62,69,'|||oDl|var||span|class|arr|dd||rnd|function|str|dlH|oA|oDd|px||children|dt|time|content|style|dlW|username|index|id|getTime|eval|alert|bottom|json|for|length|close|href|success|c2p|className|paper|dl|document|createElement|parseInt|No|0000|num|innerHTML|drag|data|URL|act|confirm|if|ajax|是否确认删除此心愿|onclick|url|top|126|offsetHeight|appendChild|wH|oMain|delete|wW|235|left'.split('|'),0,{}))

	}
	function rnd(n,m){
		return Math.random()*(m-n)+n;
	}

	/*-------------------------------------------------------*/
	function getTime(time){
        var oDate=new Date(time*1000);
        var arr=[oDate.getFullYear(),"-",addZero(oDate.getMonth()+1),"-",addZero(oDate.getDate())," ",addZero(oDate.getHours()),":",addZero(oDate.getMinutes()),":",addZero(oDate.getSeconds())];
        return arr.join("");

    }
    // 添0
    function addZero(n){
        return n<10 ? "0" + n: "" + n;
    }
    var zIndex=1;
    function drag(obj){
    	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('2.v=a(9){3 4=9||q;3 d=4.b-2.w;3 f=4.g-2.x;8.p=a(9){3 4=9||q;3 l=4.b-d;3 t=4.g-f;7(l<0){l=0}7(l>e-j){l=e-j}7(t<0){t=0}7(t>i-h-2.c){t=i-h-2.c}2.6.B=l+"r";2.6.A=t+"r";2.6.o=0.5;2.6.s=s++};8.m=a(){8.p=k;8.m=k;2.6.o=1;2.n&&2.n()};z y;2.u&&2.u()};',38,38,'||obj|var|oEvent||style|if|document|ev|function|clientX|offsetHeight|disX|wW|disY|clientY|126|wH|235|null||onmouseup|releaseCapture|opacity|onmousemove|event|px|zIndex||setCapture|onmousedown|offsetLeft|offsetTop|false|return|top|left'.split('|'),0,{}))

    }
}