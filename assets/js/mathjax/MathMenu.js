/*
 *  /MathJax/extensions/MathMenu.js
 *
 *  Copyright (c) 2009-2013 The MathJax Consortium
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 *
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(c,g,k,f,b){var q="2.2";var j=MathJax.Callback.Signal("menu");MathJax.Extension.MathMenu={version:q,signal:j};var o=function(r){return MathJax.Localization._.apply(MathJax.Localization,[["MathMenu",r]].concat([].slice.call(arguments,1)))};var n=c.Browser.isPC,l=c.Browser.isMSIE,e=((document.documentMode||0)>8);var i=(n?null:"5px");var p=c.CombineConfig("MathMenu",{delay:150,closeImg:k.fileURL(b.imageDir+"/CloseX-31.png"),showRenderer:true,showMathPlayer:true,showFontMenu:false,showContext:false,showDiscoverable:false,showLocale:true,showLocaleURL:false,windowSettings:{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:400,height:300,left:Math.round((screen.width-400)/2),top:Math.round((screen.height-300)/3)},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto","text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD",color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style":"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius":"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width:"auto",padding:(n?"2px":"5px 0px"),border:"1px solid #CCCCCC",margin:0,cursor:"default",font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":i,"-webkit-border-radius":i,"-moz-border-radius":i,"-khtml-border-radius":i,"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_MenuItem":{padding:(n?"2px 2em":"1px 2em"),background:"transparent"},".MathJax_MenuArrow":{position:"absolute",right:".5em",color:"#666666","font-family":(l?"'Arial unicode MS'":null)},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuCheck":{position:"absolute",left:".7em","font-family":(l?"'Arial unicode MS'":null)},".MathJax_MenuRadioCheck":{position:"absolute",left:(n?"1em":".7em")},".MathJax_MenuLabel":{padding:(n?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em"),"font-style":"italic"},".MathJax_MenuRule":{"border-top":(n?"1px solid #CCCCCC":"1px solid #DDDDDD"),margin:(n?"4px 1px 0px":"4px 3px")},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color":(n?"Highlight":"#606872"),color:(n?"HighlightText":"white")},".MathJax_Menu_Close":{position:"absolute",width:"31px",height:"31px",top:"-15px",left:"-15px"}}});var h,d;c.Register.StartupHook("MathEvents Ready",function(){h=MathJax.Extension.MathEvents.Event.False;d=MathJax.Extension.MathEvents.Hover});var a=MathJax.Menu=MathJax.Object.Subclass({version:q,items:[],posted:false,title:null,margin:5,Init:function(r){this.items=[].slice.call(arguments,0)},With:function(r){if(r){c.Insert(this,r)}return this},Post:function(s,B){if(!s){s=window.event}var r=document.getElementById("MathJax_MenuFrame");if(!r){r=a.Background(this);delete m.lastItem;delete m.lastMenu;delete a.skipUp;j.Post(["post",a.jax])}var t=g.addElement(r,"div",{onmouseup:a.Mouseup,ondblclick:h,ondragstart:h,onselectstart:h,oncontextmenu:h,menuItem:this,className:"MathJax_Menu"});MathJax.Localization.setCSS(t);for(var v=0,u=this.items.length;v<u;v++){this.items[v].Create(t)}if(a.isMobile){g.addElement(t,"span",{className:"MathJax_Menu_Close",menu:B,ontouchstart:a.Close,ontouchend:h,onmousedown:a.Close,onmouseup:h},[["img",{src:p.closeImg,style:{width:"100%",height:"100%"}}]])}this.posted=true;t.style.width=(t.offsetWidth+2)+"px";var A=s.pageX,z=s.pageY;if(!A&&!z){A=s.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;z=s.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(!B){if(A+t.offsetWidth>document.body.offsetWidth-this.margin){A=document.body.offsetWidth-t.offsetWidth-this.margin}if(a.isMobile){A=Math.max(5,A-Math.floor(t.offsetWidth/2));z-=20}a.skipUp=s.isContextMenu}else{var w="left",C=B.offsetWidth;A=(a.isMobile?30:C-2);z=0;while(B&&B!==r){A+=B.offsetLeft;z+=B.offsetTop;B=B.parentNode}if(A+t.offsetWidth>document.body.offsetWidth-this.margin&&!a.isMobile){w="right";A=Math.max(this.margin,A-C-t.offsetWidth+6)}if(!n){t.style["borderRadiusTop"+w]=0;t.style["WebkitBorderRadiusTop"+w]=0;t.style["MozBorderRadiusTop"+w]=0;t.style["KhtmlBorderRadiusTop"+w]=0}}t.style.left=A+"px";t.style.top=z+"px";if(document.selection&&document.selection.empty){document.selection.empty()}return h(s)},Remove:function(r,s){j.Post(["unpost",a.jax]);var t=document.getElementById("MathJax_MenuFrame");if(t){t.parentNode.removeChild(t);if(this.msieFixedPositionBug){detachEvent("onresize",a.Resize)}}if(a.jax.hover){delete a.jax.hover.nofade;d.UnHover(a.jax)}return h(r)},Find:function(r){return this.FindN(1,r,[].slice.call(arguments,1))},FindId:function(r){return this.FindN(0,r,[].slice.call(arguments,1))},FindN:function(v,s,u){for(var t=0,r=this.items.length;t<r;t++){if(this.items[t].name[v]===s){if(u.length){if(!this.items[t].menu){return null}return this.items[t].menu.FindN(v,u[0],u.slice(1))}return this.items[t]}}return null},IndexOf:function(r){return this.IndexOfN(1,r)},IndexOfId:function(r){return this.IndexOfN(0,r)},IndexOfN:function(u,s){for(var t=0,r=this.items.length;t<r;t++){if(this.items[t].name[u]===s){return t}}return null}},{config:p,div:null,Close:function(r){return a.Event(r,this.menu||this.parentNode,(this.menu?"Touchend":"Remove"))},Remove:function(r){return a.Event(r,this,"Remove")},Mouseover:function(r){return a.Event(r,this,"Mouseover")},Mouseout:function(r){return a.Event(r,this,"Mouseout")},Mousedown:function(r){return a.Event(r,this,"Mousedown")},Mouseup:function(r){return a.Event(r,this,"Mouseup")},Touchstart:function(r){return a.Event(r,this,"Touchstart")},Touchend:function(r){return a.Event(r,this,"Touchend")},Event:function(t,v,r,u){if(a.skipMouseover&&r==="Mouseover"&&!u){return h(t)}if(a.skipUp){if(r.match(/Mouseup|Touchend/)){delete a.skipUp;return h(t)}if(r==="Touchstart"||(r==="Mousedown"&&!a.skipMousedown)){delete a.skipUp}}if(!t){t=window.event}var s=v.menuItem;if(s&&s[r]){return s[r](t,v)}return null},BGSTYLE:{position:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:function(s){var t=g.addElement(document.body,"div",{style:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:s,onmousedown:this.Remove}]]);var r=t.firstChild;if(a.msieBackgroundBug){r.style.backgroundColor="white";r.style.filter="alpha(opacity=0)"}if(a.msieFixedPositionBug){t.width=t.height=0;this.Resize();attachEvent("onresize",this.Resize)}else{r.style.position="fixed"}return t},Resize:function(){setTimeout(a.SetWH,0)},SetWH:function(){var r=document.getElementById("MathJax_MenuFrame");if(r){r=r.firstChild;r.style.width=r.style.height="1px";r.style.width=document.body.scrollWidth+"px";r.style.height=document.body.scrollHeight+"px"}},saveCookie:function(){g.Cookie.Set("menu",this.cookie)},getCookie:function(){this.cookie=g.Cookie.Get("menu")},getImages:function(){if(a.isMobile){var r=new Image();r.src=p.closeImg}}});var m=a.ITEM=MathJax.Object.Subclass({name:"",Create:function(s){if(!this.hidden){var r={onmouseover:a.Mouseover,onmouseout:a.Mouseout,onmouseup:a.Mouseup,onmousedown:a.Mousedown,ondragstart:h,onselectstart:h,onselectend:h,ontouchstart:a.Touchstart,ontouchend:a.Touchend,className:"MathJax_MenuItem",menuItem:this};if(this.disabled){r.className+=" MathJax_MenuDisabled"}g.addElement(s,"div",r,this.Label(r,s))}},Name:function(){return o(this.name[0],this.name[1])},Mouseover:function(v,x){if(!this.disabled){this.Activate(x)}if(!this.menu||!this.menu.posted){var w=document.getElementById("MathJax_MenuFrame").childNodes,s=x.parentNode.childNodes;for(var t=0,r=s.length;t<r;t++){var u=s[t].menuItem;if(u&&u.menu&&u.menu.posted){u.Deactivate(s[t])}}r=w.length-1;while(r>=0&&x.parentNode.menuItem!==w[r].menuItem){w[r].menuItem.posted=false;w[r].parentNode.removeChild(w[r]);r--}if(this.Timer&&!a.isMobile){this.Timer(v,x)}}},Mouseout:function(r,s){if(!this.menu||!this.menu.posted){this.Deactivate(s)}if(this.timer){clearTimeout(this.timer);delete this.timer}},Mouseup:function(r,s){return this.Remove(r,s)},Touchstart:function(r,s){return this.TouchEvent(r,s,"Mousedown")},Touchend:function(r,s){return this.TouchEvent(r,s,"Mouseup")},TouchEvent:function(s,t,r){if(this!==m.lastItem){if(m.lastMenu){a.Event(s,m.lastMenu,"Mouseout")}a.Event(s,t,"Mouseover",true);m.lastItem=this;m.lastMenu=t}if(this.nativeTouch){return null}a.Event(s,t,r);return false},Remove:function(r,s){s=s.parentNode.menuItem;return s.Remove(r,s)},Activate:function(r){this.Deactivate(r);r.className+=" MathJax_MenuActive"},Deactivate:function(r){r.className=r.className.replace(/ MathJax_MenuActive/,"")},With:function(r){if(r){c.Insert(this,r)}return this}});a.ITEM.COMMAND=a.ITEM.Subclass({action:function(){},Init:function(r,t,s){if(!(r instanceof Array)){r=[r,r]}this.name=r;this.action=t;this.With(s)},Label:function(r,s){return[this.Name()]},Mouseup:function(r,s){if(!this.disabled){this.Remove(r,s);j.Post(["command",this]);this.action.call(this,r)}return h(r)}});a.ITEM.SUBMENU=a.ITEM.Subclass({menu:null,marker:(n&&!c.Browser.isSafari?"\u25B6":"\u25B8"),Init:function(r,t){if(!(r instanceof Array)){r=[r,r]}this.name=r;var s=1;if(!(t instanceof a.ITEM)){this.With(t),s++}this.menu=a.apply(a,[].slice.call(arguments,s))},Label:function(r,s){this.menu.posted=false;return[this.Name()+" ",["span",{className:"MathJax_MenuArrow"},[this.marker]]]},Timer:function(r,s){if(this.timer){clearTimeout(this.timer)}r={clientX:r.clientX,clientY:r.clientY};this.timer=setTimeout(f(["Mouseup",this,r,s]),p.delay)},Touchend:function(s,u){var t=this.menu.posted;var r=this.SUPER(arguments).Touchend.apply(this,arguments);if(t){this.Deactivate(u);delete m.lastItem;delete m.lastMenu}return r},Mouseup:function(s,u){if(!this.disabled){if(!this.menu.posted){if(this.timer){clearTimeout(this.timer);delete this.timer}this.menu.Post(s,u)}else{var t=document.getElementById("MathJax_MenuFrame").childNodes,r=t.length-1;while(r>=0){var v=t[r];v.menuItem.posted=false;v.parentNode.removeChild(v);if(v.menuItem===this.menu){break}r--}}}return h(s)}});a.ITEM.RADIO=a.ITEM.Subclass({variable:null,marker:(n?"\u25CF":"\u2713"),Init:function(s,r,t){if(!(s instanceof Array)){s=[s,s]}this.name=s;this.variable=r;this.With(t);if(this.value==null){this.value=this.name[0]}},Label:function(s,t){var r={className:"MathJax_MenuRadioCheck"};if(p.settings[this.variable]!==this.value){r={style:{display:"none"}}}return[["span",r,[this.marker]]," "+this.Name()]},Mouseup:function(u,v){if(!this.disabled){var w=v.parentNode.childNodes;for(var s=0,r=w.length;s<r;s++){var t=w[s].menuItem;if(t&&t.variable===this.variable){w[s].firstChild.style.display="none"}}v.firstChild.display="";p.settings[this.variable]=this.value;a.cookie[this.variable]=p.settings[this.variable];a.saveCookie();j.Post(["radio button",this])}this.Remove(u,v);if(this.action&&!this.disabled){this.action.call(a,this)}return h(u)}});a.ITEM.CHECKBOX=a.ITEM.Subclass({variable:null,marker:"\u2713",Init:function(s,r,t){if(!(s instanceof Array)){s=[s,s]}this.name=s;this.variable=r;this.With(t)},Label:function(s,t){var r={className:"MathJax_MenuCheck"};if(!p.settings[this.variable]){r={style:{display:"none"}}}return[["span",r,[this.marker]]," "+this.Name()]},Mouseup:function(r,s){if(!this.disabled){s.firstChild.display=(p.settings[this.variable]?"none":"");p.settings[this.variable]=!p.settings[this.variable];a.cookie[this.variable]=p.settings[this.variable];a.saveCookie();j.Post(["checkbox",this])}this.Remove(r,s);if(this.action&&!this.disabled){this.action.call(a,this)}return h(r)}});a.ITEM.LABEL=a.ITEM.Subclass({Init:function(r,s){if(!(r instanceof Array)){r=[r,r]}this.name=r;this.With(s)},Label:function(r,s){delete r.onmouseover,delete r.onmouseout;delete r.onmousedown;r.className+=" MathJax_MenuLabel";return[this.Name()]}});a.ITEM.RULE=a.ITEM.Subclass({Label:function(r,s){delete r.onmouseover,delete r.onmouseout;delete r.onmousedown;r.className+=" MathJax_MenuRule";return null}});a.About=function(){var t=b["HTML-CSS"]||{};var s=(t.imgFonts?"image":(t.fontInUse?(t.webFonts?"web":"local")+" "+t.fontInUse:(b.SVG?"web SVG":"generic")))+" fonts";var x=(!t.webFonts||t.imgFonts?null:t.allowWebFonts.replace(/otf/,"woff or otf")+" fonts");var r=["MathJax.js v"+MathJax.fileversion,["br"]];r.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);a.About.GetJax(r,MathJax.InputJax,["InputJax","%1 Input Jax v%2"]);a.About.GetJax(r,MathJax.OutputJax,["OutputJax","%1 Output Jax v%2"]);a.About.GetJax(r,MathJax.ElementJax,["ElementJax","%1 Element Jax v%2"]);r.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);a.About.GetJax(r,MathJax.Extension,["Extension","%1 Extension v%2"],true);r.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[c.Browser+" v"+c.Browser.version+(x?" \u2014 "+o(x.replace(/ /g,""),x):"")]]);a.About.div=a.Background(a.About);var v=g.addElement(a.About.div,"div",{id:"MathJax_About"},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],o(s.replace(/ /g,""),"using "+s),["br"],["br"],["span",{style:{display:"inline-block","text-align":"left","font-size":"80%","max-height":"20em",overflow:"auto","background-color":"#E4E4E4",padding:".4em .6em",border:"1px inset"}},r],["br"],["br"],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]],["img",{src:p.closeImg,style:{width:"21px",height:"21px",position:"absolute",top:".2em",right:".2em"},onclick:a.About.Remove}]]);MathJax.Localization.setCSS(v);var w=(document.documentElement||{});var u=window.innerHeight||w.clientHeight||w.scrollHeight||0;if(a.prototype.msieAboutBug){v.style.width="20em";v.style.position="absolute";v.style.left=Math.floor((document.documentElement.scrollWidth-v.offsetWidth)/2)+"px";v.style.top=(Math.floor((u-v.offsetHeight)/3)+document.body.scrollTop)+"px"}else{v.style.marginLeft=Math.floor(-v.offsetWidth/2)+"px";v.style.top=Math.floor((u-v.offsetHeight)/3)+"px"}};a.About.Remove=function(r){if(a.About.div){document.body.removeChild(a.About.div);delete a.About.div}};a.About.GetJax=function(s,x,v,u){var w=[];for(var y in x){if(x.hasOwnProperty(y)&&x[y]){if((u&&x[y].version)||(x[y].isa&&x[y].isa(x))){w.push(o(v[0],v[1],(x[y].id||y),x[y].version))}}}w.sort();for(var t=0,r=w.length;t<r;t++){s.push(w[t],["br"])}return s};a.Help=function(){k.Require("[MathJax]/extensions/HelpDialog.js",function(){MathJax.Extension.Help.Dialog()})};a.ShowSource=function(u){if(!u){u=window.event}var t={screenX:u.screenX,screenY:u.screenY};if(!a.jax){return}if(this.format==="MathML"){var r=MathJax.ElementJax.mml;if(r&&typeof(r.mbase.prototype.toMathML)!=="undefined"){try{a.ShowSource.Text(a.jax.root.toMathML(),u)}catch(s){if(!s.restart){throw s}f.After([this,a.ShowSource,t],s.restart)}}else{if(!k.loadingToMathML){k.loadingToMathML=true;a.ShowSource.Window(u);f.Queue(k.Require("[MathJax]/extensions/toMathML.js"),function(){delete k.loadingToMathML;if(!r.mbase.prototype.toMathML){r.mbase.prototype.toMathML=function(){}}},[this,a.ShowSource,t]);return}}}else{if(this.format==="Error"){a.ShowSource.Text(a.jax.errorText,u)}else{if(a.jax.originalText==null){alert(o("NoOriginalForm","No original form available"));return}a.ShowSource.Text(a.jax.originalText,u)}}};a.ShowSource.Window=function(s){if(!a.ShowSource.w){var t=[],r=p.windowSettings;for(var u in r){if(r.hasOwnProperty(u)){t.push(u+"="+r[u])}}a.ShowSource.w=window.open("","_blank",t.join(","))}return a.ShowSource.w};a.ShowSource.Text=function(v,t){var r=a.ShowSource.Window(t);delete a.ShowSource.w;v=v.replace(/^\s*/,"").replace(/\s*$/,"");v=v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");var u=o("EqSource","MathJax Equation Source");if(a.isMobile){r.document.open();r.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>"+u+"</title></head><body style='font-size:85%'>");r.document.write("<pre>"+v+"</pre>");r.document.write("<hr><input type='button' value='"+o("Close","Close")+"' onclick='window.close()' />");r.document.write("</body></html>");r.document.close()}else{r.document.open();r.document.write("<html><head><title>"+u+"</title></head><body style='font-size:85%'>");r.document.write("<table><tr><td><pre>"+v+"</pre></td></tr></table>");r.document.write("</body></html>");r.document.close();var s=r.document.body.firstChild;setTimeout(function(){var A=(r.outerHeight-r.innerHeight)||30,z=(r.outerWidth-r.innerWidth)||30,w,B;z=Math.max(100,Math.min(Math.floor(0.5*screen.width),s.offsetWidth+z+25));A=Math.max(40,Math.min(Math.floor(0.5*screen.height),s.offsetHeight+A+25));r.resizeTo(z,A);if(t&&t.screenX!=null){w=Math.max(0,Math.min(t.screenX-Math.floor(z/2),screen.width-z-20));B=Math.max(0,Math.min(t.screenY-Math.floor(A/2),screen.height-A-20));r.moveTo(w,B)}},50)}};a.Scale=function(){var s=b["HTML-CSS"],r=b.NativeMML,v=b.SVG;var u=(s||r||v||{config:{scale:100}}).config.scale;var t=prompt(o("ScaleMath","Scale all mathematics (compared to surrounding text) by"),u+"%");if(t){if(t.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)){t=parseFloat(t);if(t){if(t!==u){if(s){s.config.scale=t}if(r){r.config.scale=t}if(v){v.config.scale=t}a.cookie.scale=t;a.saveCookie();c.Reprocess()}}else{alert(o("NonZeroScale","The scale should not be zero"))}}else{alert(o("PercentScale","The scale should be a percentage (e.g., 120%%)"))}}};a.Zoom=function(){if(!MathJax.Extension.MathZoom){k.Require("[MathJax]/extensions/MathZoom.js")}};a.Renderer=function(){var s=c.outputJax["jax/mml"];if(s[0]!==p.settings.renderer){var v=c.Browser,u,r=a.Renderer.Messages,t;switch(p.settings.renderer){case"NativeMML":if(!p.settings.warnedMML){if(v.isChrome&&v.version.substr(0,3)!=="24."){u=r.MML.WebKit}else{if(v.isSafari&&!v.versionAtLeast("5.0")){u=r.MML.WebKit}else{if(v.isMSIE){if(!v.hasMathPlayer){u=r.MML.MSIE}}else{u=r.MML[v]}}}t="warnedMML"}break;case"SVG":if(!p.settings.warnedSVG){if(v.isMSIE&&!e){u=r.SVG.MSIE}}break}if(u){u=o(u[0],u[1]);u+="\n\n";u+=o("SwitchAnyway","Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)");a.cookie.renderer=s[0].id;a.saveCookie();if(!confirm(u)){a.cookie.renderer=p.settings.renderer=g.Cookie.Get("menu").renderer;a.saveCookie();return}if(t){a.cookie.warned=p.settings.warned=true}a.cookie.renderer=p.settings.renderer;a.saveCookie()}c.Queue(["setRenderer",c,p.settings.renderer,"jax/mml"],["Rerender",c])}};a.Renderer.Messages={MML:{WebKit:["WebkitNativeMMLWarning","Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."],MSIE:["MSIENativeMMLWarning","Internet Explorer requires the MathPlayer plugin in order to process MathML output."],Opera:["OperaNativeMMLWarning","Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."],Safari:["SafariNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."],Firefox:["FirefoxNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."]},SVG:{MSIE:["MSIESVGWarning","SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."]}};a.Font=function(){var r=b["HTML-CSS"];if(!r){return}document.location.reload()};a.Locale=function(){MathJax.Localization.setLocale(p.settings.locale);MathJax.Hub.Queue(["Reprocess",MathJax.Hub])};a.LoadLocale=function(){var r=prompt(o("LoadURL","Load translation data from this URL:"));if(r){if(!r.match(/\.js$/)){alert(o("BadURL","The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'"))}k.Require(r,function(s){if(s!=k.STATUS.OK){alert(o("BadData","Failed to load translation data from %1",r))}})}};a.MPEvents=function(t){var s=p.settings.discoverable,r=a.MPEvents.Messages;if(!e){if(p.settings.mpMouse&&!confirm(o.apply(o,r.IE8warning))){delete a.cookie.mpContext;delete p.settings.mpContext;delete a.cookie.mpMouse;delete p.settings.mpMouse;a.saveCookie();return}p.settings.mpContext=p.settings.mpMouse;a.cookie.mpContext=a.cookie.mpMouse=p.settings.mpMouse;a.saveCookie();MathJax.Hub.Queue(["Rerender",MathJax.Hub])}else{if(!s&&t.name[1]==="Menu Events"&&p.settings.mpContext){alert(o.apply(o,r.IE9warning))}}};a.MPEvents.Messages={IE8warning:["IE8warning","This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"],IE9warning:["IE9warning","The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."]};c.Browser.Select({MSIE:function(r){var s=(document.compatMode==="BackCompat");var t=r.versionAtLeast("8.0")&&document.documentMode>7;a.Augment({margin:20,msieBackgroundBug:(document.documentMode<9),msieFixedPositionBug:(s||!t),msieAboutBug:s});if(e){delete p.styles["#MathJax_About"].filter;delete p.styles[".MathJax_Menu"].filter}},Firefox:function(r){a.skipMouseover=r.isMobile&&r.versionAtLeast("6.0");a.skipMousedown=r.isMobile}});a.isMobile=c.Browser.isMobile;a.noContextMenu=c.Browser.noContextMenu;a.CreateLocaleMenu=function(){if(!a.menu){return}var w=a.menu.Find("Language").menu,t=w.items;var s=[],y=MathJax.Localization.strings;for(var x in y){if(y.hasOwnProperty(x)){s.push(x)}}s=s.sort();w.items=[];for(var u=0,r=s.length;u<r;u++){var v=y[s[u]].menuTitle;if(v){v+=" ("+s[u]+")"}else{v=s[u]}w.items.push(m.RADIO([s[u],v],"locale",{action:a.Locale}))}w.items.push(t[t.length-2],t[t.length-1])};c.Register.StartupHook("End Config",function(){p.settings=c.config.menuSettings;if(typeof(p.settings.showRenderer)!=="undefined"){p.showRenderer=p.settings.showRenderer}if(typeof(p.settings.showFontMenu)!=="undefined"){p.showFontMenu=p.settings.showFontMenu}if(typeof(p.settings.showContext)!=="undefined"){p.showContext=p.settings.showContext}a.getCookie();a.menu=a(m.SUBMENU(["Show","Show Math As"],m.COMMAND(["MathMLcode","MathML Code"],a.ShowSource,{nativeTouch:true,format:"MathML"}),m.COMMAND(["Original","Original Form"],a.ShowSource,{nativeTouch:true}),m.RULE(),m.CHECKBOX(["texHints","Show TeX hints in MathML"],"texHints")),m.RULE(),m.SUBMENU(["Settings","Math Settings"],m.SUBMENU(["ZoomTrigger","Zoom Trigger"],m.RADIO(["Hover","Hover"],"zoom",{action:a.Zoom}),m.RADIO(["Click","Click"],"zoom",{action:a.Zoom}),m.RADIO(["DoubleClick","Double-Click"],"zoom",{action:a.Zoom}),m.RADIO(["NoZoom","No Zoom"],"zoom",{value:"None"}),m.RULE(),m.LABEL(["TriggerRequires","Trigger Requires:"]),m.CHECKBOX((c.Browser.isMac?["Option","Option"]:["Alt","Alt"]),"ALT"),m.CHECKBOX(["Command","Command"],"CMD",{hidden:!c.Browser.isMac}),m.CHECKBOX(["Control","Control"],"CTRL",{hidden:c.Browser.isMac}),m.CHECKBOX(["Shift","Shift"],"Shift")),m.SUBMENU(["ZoomFactor","Zoom Factor"],m.RADIO("125%","zscale"),m.RADIO("133%","zscale"),m.RADIO("150%","zscale"),m.RADIO("175%","zscale"),m.RADIO("200%","zscale"),m.RADIO("250%","zscale"),m.RADIO("300%","zscale"),m.RADIO("400%","zscale")),m.RULE(),m.SUBMENU(["Renderer","Math Renderer"],{hidden:!p.showRenderer},m.RADIO("HTML-CSS","renderer",{action:a.Renderer}),m.RADIO("MathML","renderer",{action:a.Renderer,value:"NativeMML"}),m.RADIO("SVG","renderer",{action:a.Renderer})),m.SUBMENU("MathPlayer",{hidden:!c.Browser.isMSIE||!p.showMathPlayer,disabled:!c.Browser.hasMathPlayer},m.LABEL(["MPHandles","Let MathPlayer Handle:"]),m.CHECKBOX(["MenuEvents","Menu Events"],"mpContext",{action:a.MPEvents,hidden:!e}),m.CHECKBOX(["MouseEvents","Mouse Events"],"mpMouse",{action:a.MPEvents,hidden:!e}),m.CHECKBOX(["MenuAndMouse","Mouse and Menu Events"],"mpMouse",{action:a.MPEvents,hidden:e})),m.SUBMENU(["FontPrefs","Font Preference"],{hidden:!p.showFontMenu},m.LABEL(["ForHTMLCSS","For HTML-CSS:"]),m.RADIO(["Auto","Auto"],"font",{action:a.Font}),m.RULE(),m.RADIO(["TeXLocal","TeX (local)"],"font",{action:a.Font}),m.RADIO(["TeXWeb","TeX (web)"],"font",{action:a.Font}),m.RADIO(["TeXImage","TeX (image)"],"font",{action:a.Font}),m.RULE(),m.RADIO(["STIXlocal","STIX (local)"],"font",{action:a.Font})),m.SUBMENU(["ContextMenu","Contextual Menu"],{hidden:!p.showContext},m.RADIO("MathJax","context"),m.RADIO(["Browser","Browser"],"context")),m.COMMAND(["Scale","Scale All Math ..."],a.Scale),m.RULE().With({hidden:!p.showDiscoverable,name:["","discover_rule"]}),m.CHECKBOX(["Discoverable","Highlight on Hover"],"discoverable",{hidden:!p.showDiscoverable})),m.SUBMENU(["Locale","Language"],{hidden:!p.showLocale},m.RADIO("en","locale",{action:a.Locale}),m.RULE().With({hidden:!p.showLocaleURL,name:["","localURL_rule"]}),m.COMMAND(["LoadLocale","Load from URL ..."],a.LoadLocale,{hidden:!p.showLocaleURL})),m.RULE(),m.COMMAND(["About","About MathJax"],a.About),m.COMMAND(["Help","MathJax Help"],a.Help));if(a.isMobile){(function(){var s=p.settings;var r=a.menu.Find("Math Settings","Zoom Trigger").menu;r.items[0].disabled=r.items[1].disabled=true;if(s.zoom==="Hover"||s.zoom=="Click"){s.zoom="None"}r.items=r.items.slice(0,4);if(navigator.appVersion.match(/[ (]Android[) ]/)){a.ITEM.SUBMENU.Augment({marker:"\u00BB"})}})()}a.CreateLocaleMenu()});a.showRenderer=function(r){a.cookie.showRenderer=p.showRenderer=r;a.saveCookie();a.menu.Find("Math Settings","Math Renderer").hidden=!r};a.showMathPlayer=function(r){a.cookie.showMathPlayer=p.showMathPlayer=r;a.saveCookie();a.menu.Find("Math Settings","MathPlayer").hidden=!r};a.showFontMenu=function(r){a.cookie.showFontMenu=p.showFontMenu=r;a.saveCookie();a.menu.Find("Math Settings","Font Preference").hidden=!r};a.showContext=function(r){a.cookie.showContext=p.showContext=r;a.saveCookie();a.menu.Find("Math Settings","Contextual Menu").hidden=!r};a.showDiscoverable=function(r){a.cookie.showDiscoverable=p.showDiscoverable=r;a.saveCookie();a.menu.Find("Math Settings","Highlight on Hover").hidden=!r;a.menu.Find("Math Settings","discover_rule").hidden=!r};a.showLocale=function(r){a.cookie.showLocale=p.showLocale=r;a.saveCookie();a.menu.Find("Language").hidden=!r};MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){if(!MathJax.OutputJax["HTML-CSS"].config.imageFont){a.menu.Find("Math Settings","Font Preference","TeX (image)").disabled=true}});f.Queue(c.Register.StartupHook("End Config",{}),["getImages",a],["Styles",k,p.styles],["Post",c.Startup.signal,"MathMenu Ready"],["loadComplete",k,"[MathJax]/assets/js/mathjax/MathMenu.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);

