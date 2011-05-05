(function(){var a=function(c,b){return(c)?(typeOf(c)=="function"?c(b):b.get(c)):""};this.Tips=new Class({Implements:[Events,Options],options:{onShow:function(){this.tip.setStyle("display","block")},onHide:function(){this.tip.setStyle("display","none")},title:"title",text:function(b){return b.get("rel")||b.get("href")},showDelay:100,hideDelay:100,className:"tip-wrap",offset:{x:16,y:16},windowPadding:{x:0,y:0},fixed:false},initialize:function(){var b=Array.link(arguments,{options:Type.isObject,elements:function(c){return c!=null}});this.setOptions(b.options);if(b.elements){this.attach(b.elements)}this.container=new Element("div",{"class":"tip"})},toElement:function(){if(this.tip){return this.tip}this.tip=new Element("div",{"class":this.options.className,styles:{position:"absolute",top:0,left:0}}).adopt(new Element("div",{"class":"tip-top"}),this.container,new Element("div",{"class":"tip-bottom"}));return this.tip},attach:function(b){$$(b).each(function(d){var f=a(this.options.title,d),e=a(this.options.text,d);d.set("title","").store("tip:native",f).retrieve("tip:title",f);d.retrieve("tip:text",e);this.fireEvent("attach",[d]);var c=["enter","leave"];if(!this.options.fixed){c.push("move")}c.each(function(h){var g=d.retrieve("tip:"+h);if(!g){g=function(i){this["element"+h.capitalize()].apply(this,[i,d])}.bind(this)}d.store("tip:"+h,g).addEvent("mouse"+h,g)},this)},this);return this},detach:function(b){$$(b).each(function(d){["enter","leave","move"].each(function(e){d.removeEvent("mouse"+e,d.retrieve("tip:"+e)).eliminate("tip:"+e)});this.fireEvent("detach",[d]);if(this.options.title=="title"){var c=d.retrieve("tip:native");if(c){d.set("title",c)}}},this);return this},elementEnter:function(c,b){clearTimeout(this.timer);this.timer=(function(){this.container.empty();["title","text"].each(function(e){var d=b.retrieve("tip:"+e);var f=this["_"+e+"Element"]=new Element("div",{"class":"tip-"+e}).inject(this.container);if(d){this.fill(f,d)}},this);this.show(b);this.position((this.options.fixed)?{page:b.getPosition()}:c)}).delay(this.options.showDelay,this)},elementLeave:function(c,b){clearTimeout(this.timer);this.timer=this.hide.delay(this.options.hideDelay,this,b);this.fireForParent(c,b)},setTitle:function(b){if(this._titleElement){this._titleElement.empty();this.fill(this._titleElement,b)}return this},setText:function(b){if(this._textElement){this._textElement.empty();this.fill(this._textElement,b)}return this},fireForParent:function(c,b){b=b.getParent();if(!b||b==document.body){return}if(b.retrieve("tip:enter")){b.fireEvent("mouseenter",c)}else{this.fireForParent(c,b)}},elementMove:function(c,b){this.position(c)},position:function(f){if(!this.tip){document.id(this)}var c=window.getSize(),b=window.getScroll(),g={x:this.tip.offsetWidth,y:this.tip.offsetHeight},d={x:"left",y:"top"},e={y:false,x2:false,y2:false,x:false},h={};for(var i in d){h[d[i]]=f.page[i]+this.options.offset[i];if(h[d[i]]<0){e[i]=true}if((h[d[i]]+g[i]-b[i])>c[i]-this.options.windowPadding[i]){h[d[i]]=f.page[i]-this.options.offset[i]-g[i];e[i+"2"]=true}}this.fireEvent("bound",e);this.tip.setStyles(h)},fill:function(b,c){if(typeof c=="string"){b.set("html",c)}else{b.adopt(c)}},show:function(b){if(!this.tip){document.id(this)}if(!this.tip.getParent()){this.tip.inject(document.body)}this.fireEvent("show",[this.tip,b])},hide:function(b){if(!this.tip){document.id(this)}this.fireEvent("hide",[this.tip,b])}})})();