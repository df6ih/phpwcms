String.implement({parseQueryString:function(d,a){if(d==null){d=true}if(a==null){a=true}var c=this.split(/[&;]/),b={};if(c.length){c.each(function(i){var e=i.indexOf("="),f=e<0?[""]:i.substr(0,e).match(/([^\]\[]+|(\B)(?=\]))/g),g=a?decodeURIComponent(i.substr(e+1)):i.substr(e+1),h=b;f.each(function(k,j){if(d){k=decodeURIComponent(k)}var l=h[k];if(j<f.length-1){h=h[k]=l||{}}else{if($type(l)=="array"){l.push(g)}else{h[k]=$defined(l)?[l,g]:g}}})})}return b},cleanQueryString:function(a){return this.split("&").filter(function(e){var b=e.indexOf("="),c=b<0?"":e.substr(0,b),d=e.substr(b+1);return a?a.run([c,d]):$chk(d)}).join("&")}});