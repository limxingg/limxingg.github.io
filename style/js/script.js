// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a}});function ws_cube_over(m,k,b){var e=jQuery,j=e(this),a=/WOW Slider/g.test(navigator.userAgent),g=e(".ws_list",b),c=m.perspective||/MSIE|Trident/g.test(navigator.userAgent)?1000:2000,d={position:"absolute",backgroundSize:"cover",left:0,top:0,width:"100%",height:"100%",backfaceVisibility:"hidden"};var l=/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent);var i=e("<div>").css(d).css({transformStyle:"preserve-3d",perspective:(l&&!a?"none":c),zIndex:8});e("<div>").addClass("ws_effect ws_cube_over").css(d).append(i).appendTo(b);if(!m.support.transform&&m.fallback){return new m.fallback(m,k,b)}var h;this.go=function(y,u){var q=e(k[u]);q={width:q.width(),height:q.height(),marginTop:parseFloat(q.css("marginTop")),marginLeft:parseFloat(q.css("marginLeft"))};function p(C,G,F,H){C.parent().css("perspective",c);var D=C.width(),E=C.height();wowAnimate(C,{scale:1,translate:[0,0,(l&&!a)?F:0]},{scale:0.85,translate:[0,0,(l&&!a)?F:0]},m.duration*0.4,"easeInOutBack",function(){wowAnimate(C,{scale:0.85,translate:[0,0,(l&&!a)?F:0]},{scale:1,translate:[0,0,(l&&!a)?F:0]},m.duration*0.4,m.duration-m.duration*0.8,"easeInOutBack",H)});wowAnimate(G.front.item,{rotateY:0,rotateX:0},{rotateY:G.front.rotateY,rotateX:G.front.rotateX},m.duration,"easeInOutBack");wowAnimate(G.back.item,{rotateY:G.back.rotateY,rotateX:G.back.rotateX},{rotateY:0,rotateX:0},m.duration,"easeInOutBack");wowAnimate(G.side.item,{rotateY:G.side.rotateY,rotateX:G.side.rotateX},{rotateY:-G.side.rotateY,rotateX:-G.side.rotateX},m.duration,"easeInOutBack")}if(m.support.transform&&m.support.perspective){if(h){h.stop()}var A=b.width(),v=b.height();var t={left:[A/2,0,0,180,0,-180],right:[A/2,0,0,-180,0,180],down:[v/2,-v/2,180,0,-180,0],up:[v/2,v/2,-180,0,180,0]}[m.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];var B=e("<img>").css(q),s=e("<img>").css(q).attr("src",k.get(y).src);var n=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+t[0]+"px"}).css(d).append(B).appendTo(i);var o=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+t[0]+"px"}).css(d).append(s).appendTo(i);var z=e('<div class="ws_cube_side">').css({transformOrigin:"50% 50% -"+t[0]+"px",background:m.staticColor?"":f(s[0],{exclude:["0,0,0","255,255,255"]})}).css(d).appendTo(i);B.on("load",function(){g.hide()});B.attr("src",k.get(u).src).load();i.parent().show();h=new p(i,{front:{item:n,rotateY:t[5],rotateX:t[4]},back:{item:o,rotateY:t[3],rotateX:t[2]},side:{item:z,rotateY:t[3]/2,rotateX:t[2]/2}},-t[0],function(){j.trigger("effectEnd");i.empty().parent().hide();h=0})}else{i.css({position:"absolute",display:"none",zIndex:2,width:"100%",height:"100%"});i.stop(1,1);var r=(!!((y-u+1)%k.length)^m.revers?"left":"right");var n=e("<div>").css({position:"absolute",left:"0%",right:"auto",top:0,width:"100%",height:"100%"}).css(r,0).append(e(k[u]).clone().css({width:100*q.width/b.width()+"%",height:100*q.height/b.height()+"%",marginLeft:100*q.marginLeft/b.width()+"%"})).appendTo(i);var x=e("<div>").css({position:"absolute",left:"100%",right:"auto",top:0,width:"0%",height:"100%"}).append(e(k[y]).clone().css({width:100*q.width/b.width()+"%",height:100*q.height/b.height()+"%",marginLeft:100*q.marginLeft/b.width()+"%"})).appendTo(i);i.css({left:"auto",right:"auto",top:0}).css(r,0).show();i.show();g.hide();x.animate({width:"100%",left:0},m.duration,"easeInOutExpo",function(){e(this).remove()});n.animate({width:0},m.duration,"easeInOutExpo",function(){j.trigger("effectEnd");i.empty().hide()})}};function f(x,o){o=o||{};var z=1,r=o.exclude||[],w;var t=document.createElement("canvas"),q=t.getContext("2d"),p=t.width=x.naturalWidth,D=t.height=x.naturalHeight;q.drawImage(x,0,0,x.naturalWidth,x.naturalHeight);try{w=q.getImageData(o.x?o.x:0,o.y?o.y:0,o.w?o.w:x.width,o.h?o.h:x.height)["data"]}catch(y){console.log("error:unable to access image data: "+y);return"#ccc"}var s=(o.w?o.w:x.width*o.h?o.h:x.height)||w.length,u={},B="",A=[],n={dominant:{name:"",count:0}};var v=0;while(v<s){A[0]=w[v];A[1]=w[v+1];A[2]=w[v+2];B=A.join(",");if(B in u){u[B]=u[B]+1}else{u[B]=1}if(r.indexOf(["rgb(",B,")"].join(""))===-1){var C=u[B];if(C>n.dominant.count){n.dominant.name=B;n.dominant.count=C}}v+=z*4}return["rgb(",n.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInBackQ:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*h*(4*f*h-8*h+8*f-3)},easeOutBackQ:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(4*h*f*h-12*h*h+16*h*f-13*h+6*f)},easeInBackQ2:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*h*(1.5*f*h-2.5*h+5*f-3)},easeOutBackQ2:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(1.5*h*f*h-5*h*h+10*h*f-12*h+6.5*f)}});function ws_brick(f,s,g){var h=jQuery,n=h(this),a=f.cols||4,r=f.rows||3,H=2.5,c=2,v=f.perspective||2000,u=g.find(".ws_list"),G=[],b=30,x={},o=h("<div>").addClass("ws_effect ws_brick").appendTo(g),q=f.support.transform&&f.support.transition&&f.support.perspective,p=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),m=/Firefox/.test(navigator.userAgent);var y=[{zIndex:0,rotateX:360,rotateZ:-360,rotateY:180,halfScale:0.5,halfLeft:0.7,halfTop:0.7,delay:0.36},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:180,halfScale:0.5,halfLeft:0.2,halfTop:0.4,delay:0.81},{zIndex:1,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:0.5,halfLeft:-0.2,halfTop:0.4,delay:0.45},{zIndex:0,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:0.5,halfLeft:-0.7,halfTop:0.7,delay:0.63},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:0.5,halfLeft:0.7,halfTop:0,delay:0.54},{zIndex:2,rotateX:360,rotateZ:-360,rotateY:180,halfScale:0.5,halfLeft:0.2,halfTop:0,delay:0.38},{zIndex:2,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:0.5,halfLeft:-0.2,halfTop:0,delay:0},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:180,halfScale:0.5,halfLeft:-0.7,halfTop:0,delay:0.72},{zIndex:0,rotateX:-360,rotateZ:360,rotateY:180,halfScale:0.5,halfLeft:0.7,halfTop:-0.7,delay:1},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:0.5,halfLeft:0.2,halfTop:-0.4,delay:0.7},{zIndex:1,rotateX:360,rotateZ:-360,rotateY:180,halfScale:0.5,halfLeft:-0.2,halfTop:-0.4,delay:0.57},{zIndex:0,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:0.5,halfLeft:-0.7,halfTop:-0.7,delay:0.9},];o.css({position:"absolute",top:0,left:0,width:g.width(),height:g.height(),transform:"translate3d(0,0,0)",transformOrigin:(f.width/2)+"px "+(f.height/2)+"px 0",perspective:v}).hide();for(var l=0;l<a*r;l++){var B=l%a,A=Math.floor(l/a);var E=h("<div>").css({position:"absolute",left:100*B/a+"%",top:100*A/r+"%",outline:"1px solid transparent",transformStyle:(p||m)?"flat":"preserve-3d",zIndex:y[l].zIndex,overflow:q?"visible":"hidden"}).appendTo(o),z=h("<div>").css({transform:"scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",outline:"1px solid transparent",transformStyle:"preserve-3d"}).appendTo(E),w=h("<div>").addClass("ws_front_image").appendTo(z),D=q?h("<div>").addClass("ws_back_image").appendTo(z):0;w.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"translate3d(0,0,0)"}).append(h("<img>").css({left:-B*100+"%",top:-A*100+"%",position:"absolute",outline:"1px solid transparent"}));if(q){D.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg) translate3d(0,0,"+b+"px)"}).append(h("<img>").css({left:-B*100+"%",top:-A*100+"%",position:"absolute",outline:"1px solid transparent"}))}var t={position:"absolute",outline:"1px solid transparent"};G[l]={part:z,front:w,back:D,wrapper:E,leftEdge:q?h("<div>").addClass("ws_left_edge").css(t).appendTo(z):0,rightEdge:q?h("<div>").addClass("ws_right_edge").css(t).appendTo(z):0,topEdge:q?h("<div>").addClass("ws_top_edge").css(t).appendTo(z):0,bottomEdge:q?h("<div>").addClass("ws_bottom_edge").css(t).appendTo(z):0}}function C(N){var J={},L=s.get(N),O=f.width/a,P=f.height/r;for(var K=0;K<a*r;K++){var N=K%a,M=Math.floor(K/a);J[K]=F(L,{x:N*O,y:M*P,w:O,h:P})}return J}function I(J,M,j,K,L){for(var i in M){if(typeof G[i]!=="function"){M[i].topEdge.css({width:K,height:J,background:j[i],transform:"rotateX(90deg) translate3d(0,-"+J/2+"px,"+J/2+"px)"});M[i].bottomEdge.css({width:K,height:J,background:j[i],transform:"rotateX(90deg) translate3d(0,-"+J/2+"px,"+(-L+J/2)+"px)"});M[i].leftEdge.css({width:J,height:L,background:j[i],transform:"rotateY(90deg) translate3d("+J/2+"px,0,-"+J/2+"px)"});M[i].rightEdge.css({width:J,height:L,background:j[i],transform:"rotateY(90deg) translate3d("+J/2+"px,0,"+(K-J/2)+"px)"})}}}function e(J,K){var i=0;for(var j in J){if(typeof J[j]!=="function"){(function(L,M){wowAnimate(function(O){var U,S,T,R="",N={};if(O<=0.5){U=h.easing.easeInBack(1,O*2,0,1,1,1).toFixed(3);S=h.easing.easeInBackQ(1,O*2,0,1,1,1).toFixed(3);T=h.easing.easeInBackQ2(1,O*2,0,1,1,1).toFixed(3);M[L].back.css("backfaceVisibility","hidden")}else{U=h.easing.easeOutBack(1,(O-0.5)*2,0,1,1,1).toFixed(3);S=h.easing.easeOutBackQ(1,(O-0.5)*2,0,1,1,1).toFixed(3);T=h.easing.easeOutBackQ2(1,(O-0.5)*2,0,1,1,1).toFixed(3);M[L].back.css("backfaceVisibility","visible")}for(var P in M[L].animate[O<=0.5?"half":"end"]){var V=M[L].animate[O<=0.5?"begin":"half"][P]||0,Q=M[L].animate[O<=0.5?"half":"end"][P]||0;if(typeof Q!=="object"){if(P==="scale"||P==="rotateX"||P==="rotateY"){Q=V+(Q-V)*S}else{if(P==="left"||P==="top"){Q=V+(Q-V)*T}else{Q=V+(Q-V)*U}}}if(P==="rotateX"||P==="rotateY"||P==="rotateZ"){R+=P+"("+Q+"deg) "}else{if(P==="scale"){R+=P+"("+Q+") "}else{if(P==="translate3d"){R+=P+"("+(V[0]+(Q[0]-V[0])*U).toFixed(3)+"px,"+(V[1]+(Q[1]-V[1])*U).toFixed(3)+"px,"+(V[2]+(Q[2]-V[2])*U).toFixed(3)+"px) "}else{N[P]=Q}}}}M[L].wrapper.css({transform:"translate3d("+(N.left?N.left:0).toFixed(3)+"px,"+(N.top?N.top:0).toFixed(3)+"px,0)"});delete N.left;delete N.top;if(R){N.transform=R}M[L].part.css(N)},0,1,M[L].animate.duration,M[L].animate.delay,function(){i++;if(i==M.length&&K){K()}})}(j,J))}}}function k(aa,M,N,P){var X=g.width(),W=g.height(),V=X/a,U=W/r,L=(f.duration*0.4)>1000?1000:(f.duration*0.4),K=f.duration*0.6,Q=[0,0];I(b,aa,x[M],V,U);o.css({transformOrigin:(X/2)+"px "+(W/2)+"px 0",width:X,height:W});for(var S in aa){if(typeof aa[S]!=="function"){var J=y[S].delay*L;if(Q[1]<=J){Q[0]=S;Q[1]=J}aa[S].part[0].ws_delay=[J,0]}}aa[Q[0]].part[0].ws_delay[1]=1;for(var S in aa){if(typeof aa[S]!=="function"){var R=aa[S],Z=S%a,Y=Math.floor(S/a),T=X*Z/a,O=W*Y/r;R.animate={delay:R.part[0].ws_delay[0],duration:K,begin:{left:0,top:0,width:V,height:U,scale:1,rotateX:0,rotateY:0,translate3d:[0,0,p?b:0]},half:{left:y[S].halfLeft*V,top:y[S].halfTop*U,scale:y[S].halfScale,rotateX:y[S].rotateX/2,rotateY:y[S].rotateY/2,translate3d:[0,0,(p?1:0.5)*b]},end:{left:0,top:0,scale:1,rotateX:y[S].rotateX,rotateY:y[S].rotateY,translate3d:[0,0,b]}};R.front.find("img").css(N);R.back.css("backfaceVisibility","hidden").find("img").css(N);R.part.css({width:R.animate.begin.width,height:R.animate.begin.height,left:R.animate.begin.left,top:R.animate.begin.top})}}e(aa,P)}var d;this.go=function(X,M){if(d){return M}o.show();var K=h(s.get(M));K={width:K.width(),height:K.height(),marginTop:parseFloat(K.css("marginTop")),marginLeft:parseFloat(K.css("marginLeft"))};if(q){G[0].front.find("img").on("load",function(){u.hide()});for(var N in G){if(typeof G[N]!=="function"){G[N].front.find("img").attr("src",s.get(M).src);G[N].back.find("img").attr("src",s.get(X).src)}}if(!x[M]){x[M]=C(M)}d=new k(G,M,K,function(){u.show();n.trigger("effectEnd");o.hide();for(var i in G){if(typeof G[i]!=="function"){G[i].part.css({transition:"",transform:"rotateX(0) rotateY(0) translate3d(0,0,0)"})}}d=0})}else{d=true;function Y(j,i){return Math.random()*(i-j+1)+j}var T=g.width(),W=g.height(),S=T/a,V=W/r,L=T-S*(a-1),U=W-V*(r-1);o.css({width:T,height:W});var J=0;for(var N in G){var R=N%a,P=Math.floor(N/a);G[N].front.find("img").attr("src",s.get(X).src).css(K);var Z=f.duration*(1-Math.abs((c*H-R*P)/(2*r*a)));var Q=Y(-1,1)>0?1:-1;var O=Y(-1,1)>0?1:-1;G[N].wrapper.css({width:S,height:V});G[N].part.css({position:"absolute",top:Q*V,left:O*S,opacity:0,width:S,height:V}).animate({top:0,left:0,opacity:1},Z,function(){J++;if(J==r*a){u.stop(1,1);d=false;n.trigger("effectEnd")}})}}};function F(S,J){J=J||{};var U=1,M=J.exclude||[],R;var O=document.createElement("canvas"),L=O.getContext("2d"),K=O.width=S.naturalWidth,Y=O.height=S.naturalHeight;L.drawImage(S,0,0,S.naturalWidth,S.naturalHeight);try{R=L.getImageData(J.x?J.x:0,J.y?J.y:0,J.w?J.w:S.width,J.h?J.h:S.height)["data"]}catch(T){console.log("error:unable to access image data: "+T);return"#ccc"}var N=(J.w?J.w:S.width*J.h?J.h:S.height)||R.length,P={},W="",V=[],j={dominant:{name:"",count:0}};var Q=0;while(Q<N){V[0]=R[Q];V[1]=R[Q+1];V[2]=R[Q+2];W=V.join(",");if(W in P){P[W]=P[W]+1}else{P[W]=1}if(M.indexOf(["rgb(",W,")"].join(""))===-1){var X=P[W];if(X>j.dominant.count){j.dominant.name=W;j.dominant.count=X}}Q+=U*4}return["rgb(",j.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_cube(p,k,b){var e=jQuery,j=e(this),a=/WOW Slider/g.test(navigator.userAgent),l=!(/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent)&&!a,g=e(".ws_list",b),c=p.perspective||2000,d={position:"absolute",backgroundSize:"cover",left:0,top:0,width:"100%",height:"100%",backfaceVisibility:"hidden"};var o={domPrefixes:" Webkit Moz ms O Khtml".split(" "),testDom:function(r){var q=this.domPrefixes.length;while(q--){if(typeof document.body.style[this.domPrefixes[q]+r]!=="undefined"){return true}}return false},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var r=(typeof document.body.style.perspectiveProperty!=="undefined")||this.testDom("Perspective");if(r&&/AppleWebKit/.test(navigator.userAgent)){var t=document.createElement("div"),q=document.createElement("style"),s="Test3d"+Math.round(Math.random()*99999);q.textContent="@media (-webkit-transform-3d){#"+s+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(q);t.id=s;document.body.appendChild(t);r=t.offsetHeight===3;q.parentNode.removeChild(q);t.parentNode.removeChild(t)}return r},webkit:function(){return/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)}};var f=(o.cssTransitions()&&o.cssTransforms3d()),m=o.webkit();var i=e("<div>").css(d).css({transformStyle:"preserve-3d",perspective:(m&&!a?"none":c),zIndex:8});e("<div>").addClass("ws_effect ws_cube").css(d).append(i).appendTo(b);if(!f&&p.fallback){return new p.fallback(p,k,b)}function n(q,r,t,s){return"inset "+(-s*q*1.2/90)+"px "+(t*r*1.2/90)+"px "+(q+r)/20+"px rgba("+((t<s)?"0,0,0,.6":(t>s)?"255,255,255,0.8":"0,0,0,.0")+")"}var h;this.go=function(B,y){var t=e(k[y]);t={width:t.width(),height:t.height(),marginTop:parseFloat(t.css("marginTop")),marginLeft:parseFloat(t.css("marginLeft"))};function s(S,F,H,I,G,E,Q,R,P,O){S.parent().css("perspective",c);var N=S.width(),K=S.height();F.front.css({transform:"translate3d(0,0,0) rotateY(0deg) rotateX(0deg)"});F.back.css({opacity:1,transform:"translate3d(0,0,0) rotateY("+Q+"deg) rotateX("+E+"deg)"});if(l){var J=e("<div>").css(d).css("boxShadow",n(N,K,0,0)).appendTo(F.front);var M=e("<div>").css(d).css("boxShadow",n(N,K,E,Q)).appendTo(F.back)}if(m&&!/WOW Slider/g.test(navigator.userAgent)){S.css({transform:"translateZ(-"+H+"px)"})}var L=setTimeout(function(){var w="all "+p.duration+"ms cubic-bezier(0.645, 0.045, 0.355, 1.000)";F.front.css({transition:w,boxShadow:l?n(N,K,R,P):"",transform:"rotateX("+R+"deg) rotateY("+P+"deg)",zIndex:0});F.back.css({transition:w,boxShadow:l?n(N,K,0,0):"",transform:"rotateY(0deg) rotateX(0deg)",zIndex:20});if(l){J.css({transition:w,boxShadow:n(N,K,R,P)});M.css({transition:w,boxShadow:n(N,K,0,0)})}L=setTimeout(O,p.duration)},20);return{stop:function(){clearTimeout(L);O()}}}if(f){if(h){h.stop()}var C=b.width(),z=b.height();var x={left:[C/2,C/2,0,0,90,0,-90],right:[C/2,-C/2,0,0,-90,0,90],down:[z/2,0,-z/2,90,0,-90,0],up:[z/2,0,z/2,-90,0,90,0]}[p.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];var D=e("<img>").css(t),v=e("<img>").css(t).attr("src",k.get(B).src);var q=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+x[0]+"px",zIndex:20}).css(d).append(D).appendTo(i);var r=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+x[0]+"px",zIndex:0}).css(d).append(v).appendTo(i);D.on("load",function(){g.hide()});D.attr("src",k.get(y).src).load();i.parent().show();h=new s(i,{front:q,back:r},x[0],x[1],x[2],x[3],x[4],x[5],x[6],function(){j.trigger("effectEnd");i.empty().parent().hide();h=0})}else{i.css({position:"absolute",display:"none",zIndex:2,width:"100%",height:"100%"});i.stop(1,1);var u=(!!((B-y+1)%k.length)^p.revers?"left":"right");var q=e("<div>").css({position:"absolute",left:"0%",right:"auto",top:0,width:"100%",height:"100%"}).css(u,0).append(e(k[y]).clone().css({width:100*t.width/b.width()+"%",height:100*t.height/b.height()+"%",marginLeft:100*t.marginLeft/b.width()+"%"})).appendTo(i);var A=e("<div>").css({position:"absolute",left:"100%",right:"auto",top:0,width:"0%",height:"100%"}).append(e(k[B]).clone().css({width:100*t.width/b.width()+"%",height:100*t.height/b.height()+"%",marginLeft:100*t.marginLeft/b.width()+"%"})).appendTo(i);i.css({left:"auto",right:"auto",top:0}).css(u,0).show();i.show();g.hide();A.animate({width:"100%",left:0},p.duration,"easeInOutExpo",function(){e(this).remove()});q.animate({width:0},p.duration,"easeInOutExpo",function(){j.trigger("effectEnd");i.empty().hide()})}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"cube_over,brick,cube",prev:"",next:"",duration:20*100,delay:30*100,width:1366,height:400,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});