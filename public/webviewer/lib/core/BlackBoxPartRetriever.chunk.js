/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[6],{359:function(ha,ca,h){function ba(e,h,r){h.endsWith("/")||(h+="/");r=r||{};var w=r.disableWebsockets||!1;this.jT=r.singleServerMode||!1;null!=r.customQueryParameters&&Object(n.b)("wvsQueryParameters",r.customQueryParameters);h.endsWith("blackbox/")||(h+="blackbox/");this.Em=r.uploadData||null;this.Pv=r.uriData||null;this.fM=r.cacheKey||null;this.xD=Object(f.a)(h,null,w);this.Kf=h;this.OD=e;this.jf=null;this.Lh=aa();this.Il=aa();
this.Wx=!1;this.Xf=this.Xd=this.qe=this.Ve=null;this.rf=[];this.Iy=[];this.cache={};this.timeStamp=0;this.Gf=[];this.Pg=[];this.lE=null;this.HD=!1;this.AH=this.id=null;this.cG=this.bP=fa;this.FA=0;this.kF=!1;this.c6=1;this.Oz={};this.gz=null;this.vr(!0)}function aa(){var e={promise:null,resolve:null,reject:null,state:0,result:null,request:null,jo:function(){return 1===(e.state&1)},a5:function(){return 2===(e.state&2)},Gh:function(){return!e.a5()&&!e.jo()},I4:function(){return 4===(e.state&4)},AS:function(){e.state|=
4}};e.promise=new Promise(function(f,h){e.resolve=function(){if(0===e.state||4===e.state)e.state=1,e.result=arguments[0],f.apply(null,arguments)};e.reject=function(){if(0===e.state||4===e.state)e.state=2,h.apply(null,arguments)}});return e}function fa(){return!1}function da(e,f,h){if(!(f in ia))return!0;f=ia[f];for(var n=0;n<f.length;n++){var r=e;var w=f[n];var x=h;if(w.name in r){var y="",aa=!1;r=r[w.name];switch(w.type){case "s":y="String";aa=Object(z.isString)(r);break;case "a":y="Array";aa=Object(z.isArray)(r);
break;case "n":y="Number";aa=Object(z.isNumber)(r)&&Object(z.isFinite)(r);break;case "o":y="Object",aa=Object(z.isObject)(r)&&!Object(z.isArray)(r)}aa||x.reject('Expected response field "'+w.name+'" to have type '+y);w=aa}else x.reject('Response missing field "'+w.name+'"'),w=!1;if(!w)return!1}return!0}h.r(ca);var z=h(0);h.n(z);var y=h(1);ha=h(36);var f=h(376),e=h(26),x=h(75),r=h(303),w=h(123),n=h(35),ea=h(135),ia={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},
{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}]};ba.prototype=Object(z.extend)(ba.prototype,{m_:function(){var e=this;return new Promise(function(f,h){var n=new XMLHttpRequest;n.open("GET",e.Kf+"ck");n.withCredentials=e.Wn();
n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?f():h())};n.send()})},t$:function(e,f){this.bP=e||fa;this.cG=f||fa},vM:function(){var e=this;this.Il=aa();this.Lh=aa();return this.xD.$D().then(function(){e.Wx=!1;e.id=null;e.HD=!1;return e.m_()})},lH:function(){this.bP();this.uz();this.Ve&&(this.Ve.Gh()?this.kf(this.Ve.request):this.Ve.jo()&&this.cG(this.Ve.result.url,"pdf")&&(this.Ve=null,this.ZR()));this.Xf&&this.Xf.Gh()&&this.kf(this.Xf.request);this.qe&&this.qe.Gh()?
this.kf(this.qe.request):this.Xd&&this.Xd.Gh()&&this.PO(this.Xd.request);var e;for(e=0;e<this.Gf.length;e++)this.Gf[e]&&this.Gf[e]&&(this.Gf[e].Gh()?this.kf(this.Gf[e].request):this.Gf[e].jo()&&this.cG(this.Gf[e].result.url,"image")&&(this.Gf[e]=null,this.CA(e)));for(e=0;e<this.Pg.length;e++)this.Pg[e]&&this.Pg[e]&&this.Pg[e].Gh()&&!this.Pg[e].I4()&&this.kf(this.Pg[e].request);for(e=0;e<this.rf.length;e++)this.rf[e]&&this.rf[e].Gh()&&this.kf(this.rf[e].request)},uz:function(e){var f=this;this.Wx||
(this.timeStamp=Date.now(),this.xD.hI(function(e){f.p6(e)},function(){return null},function(){return null},!0).then(function(){clearInterval(f.wA);f.wA=null},function(h){f.Wx=!1;if(!f.wA){var n=0;f.HD=!0;f.AH=0;f.wA=setInterval(function(){2>n++?f.lH():(clearInterval(f.wA),e&&e.reject(w.a),Object(y.e)("Blackbox connection failed:"+h))},5E3)}}),this.Wx=!0)},Eba:function(){var f=this,h=createPromiseCapability();if(this.Em){var n=new FormData;n.append("file",this.Em.fileHandle,this.Em.fileHandle.name);
var r=this.Em.loadCallback;var w="upload";var x=this.Em.extension}else if(this.Pv){n={uri:this.Pv.uri,ofa:this.Pv.shareId};n=Object.keys(n).map(function(e){return e+"="+(n[e]?encodeURIComponent(n[e]):"")}).join("&");var y="application/x-www-form-urlencoded; charset=UTF-8";r=this.Pv.loadCallback;w="url";x=this.Pv.extension}else return Promise.resolve();var z=new XMLHttpRequest,aa=Object(e.i)(f.Kf,"AuxUpload");aa=Object(ea.a)(aa)+"&type="+w+"&ext="+x;z.open("POST",aa);z.withCredentials=this.Wn();y&&
z.setRequestHeader("Content-Type",y);z.addEventListener("load",function(){if(z.readyState===z.DONE&&200===z.status){var e=JSON.parse(z.response);f.OD=e.uri;r(e);h.resolve(e)}});z.addEventListener("error",function(){h.reject(z.statusText+" "+JSON.stringify(z))});this.Em&&null!=this.Em.onProgress&&(z.upload.onprogress=function(e){f.Em.onProgress(e)});z.send(n);return h.promise},K$:function(e){this.gz=e},H3:function(e){this.password&&this.Lh.jo()?e(this.password):this.gz(e)},f9:function(e){this.password=
e||null;this.Lh.jo()||(this.uz(this.Lh),this.kf({t:"pages"}));return this.Lh.promise},hv:function(e){this.lE=e||null;this.Lh.jo()||(this.uz(this.Lh),this.kf({t:"pages"}));return this.Lh.promise},xM:function(e){e=Object.assign(e,{uri:encodeURIComponent(this.OD)});this.lE&&(e.ext=this.lE);this.jf&&(e.c=this.jf);this.password&&(e.pswd=this.password);this.fM&&(e.cacheKey=this.fM);return e},kf:function(e){e=this.xM(e);this.xD.send(e)},Uj:function(e){return e},p6:function(e){var f=this,h=e.data,r=e.err,
w=e.t;if(r&&f.gz&&"This document could not be decrypted with the given password"===r)f.gz(function(e){f.f9(e)});else switch(w){case "upload":r?f.Fba.reject(r):f.Fba.resolve("Success");break;case "pages":r?f.Lh.reject(r):da(h,w,f.Lh)&&f.Lh.resolve(h);break;case "config":r?f.Il.reject(r):da(h,w,f.Il)&&(h.id&&(f.id=h.id),h.auth&&(e=Object(n.a)("wvsQueryParameters"),e.auth=h.auth,Object(n.b)("wvsQueryParameters",e)),h.serverVersion&&(f.Yba=h.serverVersion,Object(y.f)("[WebViewer Server] server version: "+
f.Yba)),h.serverID?(f.FA=h.serverID===f.AH&&f.kF?f.FA+1:0,f.AH=h.serverID):f.FA=0,f.kF=!1,f.Il.resolve(h));break;case "health":r?f.Il.reject(r):da(h,w,f.Il)&&(h=h.unhealthy,f.jT&&h?Object(y.h)("Server failed health check. Single server mode ignoring check."):!f.Mda&&h&&1>=f.FA&&(f.kF=!0,f.vM().then(function(){f.lH()},function(){f.lH()})));break;case "pdf":h.url=Object(ea.a)(f.Kf+"../"+encodeURI(h.url));r?f.Ve.reject(r):da(h,w,f.Ve)&&f.Ve.resolve(h);break;case "docmod":h.url=Object(ea.a)(f.Kf+"../"+
encodeURI(h.url));r?f.Oz[h.rID].reject(r):da(h,w,f.Ve)&&f.Oz[h.rID].resolve(h);break;case "xod":if(r)this.qe&&this.qe.Gh()&&this.qe.reject(r),this.Xd&&this.Xd.Gh()&&this.Xd.reject(r);else if(h.notFound)h.noCreate||this.qe&&this.qe.Gh()&&this.qe.resolve(h),this.Xd&&this.Xd.Gh()&&this.Xd.resolve(h);else{h.url&&(h.url=Object(ea.a)(f.Kf+"../"+encodeURI(h.url)));if(!this.Xd||this.Xd.jo())this.Xd=aa(),this.Xd.request={t:"xod",noCreate:!0};this.qe||(this.qe=aa(),this.qe.request={t:"xod"});this.Xd.resolve(h);
this.qe.resolve(h)}break;case "annots":if(r)f.Xf.reject(r);else if(da(h,w,f.Xf)){f.Xf.AS();var z=new XMLHttpRequest;e=f.Kf+"../"+encodeURI(h.url);var ba=h.hasAppearance?Object(ea.a)(e+".xodapp"):null;z.open("GET",Object(ea.a)(e));z.responseType="text";z.withCredentials=this.Wn();z.addEventListener("load",function(){z.readyState===z.DONE&&200===z.status&&f.Xf.resolve({EI:z.response,SL:ba})});z.addEventListener("error",function(){f.Xf.reject(z.statusText+" "+JSON.stringify(z))});z.send()}break;case "image":var ca=
this.Gf[h.p];r?ca.promise.reject(r):da(h,w,ca)&&(ca.result=h,ca.result.url=Object(ea.a)(f.Kf+"../"+encodeURI(ca.result.url)),ca.resolve(ca.result));break;case "tiles":ca=h.rID;e=this.rf[ca];this.rf[ca]=null;this.Iy.push(ca);if(r)e.reject(r);else if(da(h,w,e)){for(r=0;r<h.tiles.length;r++)h.tiles[r]=Object(ea.a)(f.Kf+"../"+encodeURI(h.tiles[r]));e.resolve(h)}break;case "text":ca=this.Pg[h.p];if(r)ca.reject(r);else if(da(h,w,ca)){ca.AS();var fa=new XMLHttpRequest;h=Object(ea.a)(f.Kf+"../"+encodeURI(h.url));
fa.open("GET",h);fa.withCredentials=this.Wn();fa.addEventListener("load",function(){fa.readyState===fa.DONE&&200===fa.status&&(ca.result=JSON.parse(fa.response),ca.resolve(ca.result))});fa.addEventListener("error",function(e){ca.reject(fa.statusText+" "+JSON.stringify(e))});fa.send()}break;case "progress":"loading"===h.t&&f.trigger(x.a.Events.DOCUMENT_LOADING_PROGRESS,[h.bytes,h.total])}},QN:function(){this.uz(this.Il);return this.Il.promise},J1:function(){this.Xf||(this.Xf=aa(),this.Xf.request={t:"annots"},
this.kf(this.Xf.request));return this.Xf.promise},CA:function(e){this.Gf[e]||(this.Gf[e]=aa(),this.Gf[e].request={t:"image",p:e},this.kf(this.Gf[e].request));return this.Gf[e].promise},g9:function(e){this.Pg[e]||(this.Pg[e]=aa(),this.Pg[e].request={t:"text",p:e},this.kf(this.Pg[e].request));return this.Pg[e].promise},h9:function(e,f,h,n){var r=this.rf.length;this.Iy.length&&(r=this.Iy.pop());this.rf[r]=aa();this.rf[r].request={t:"tiles",p:e,z:f,r:h,size:n,rID:r};this.kf(this.rf[r].request);return this.rf[r].promise},
ZR:function(){this.Ve||(this.Ve=aa(),this.Ve.request={t:"pdf"},this.HD?this.Ve.resolve({url:this.OD}):this.kf(this.Ve.request));return this.Ve.promise},jO:function(e){var f=this,h=new XMLHttpRequest,n=Object(ea.a)(this.Kf+"aul")+"&id="+this.id,r=new FormData,w={};e.annots&&(w.annots="xfdf");e.watermark&&(w.watermark="png");e.redactions&&(w.redactions="redact");w={t:"docmod",reqID:this.c6++,parts:w};e.print&&(w.print=!0);var x=this.xM(w);r.append("msg",JSON.stringify(x));return Promise.all([e.annots,
e.watermark,e.redactions].map(function(e){return Promise.resolve(e)})).then(function(e){var w=e[0],y=e[1],z=e[2];w&&r.append("annots",w);y&&r.append("watermark",e.watermark);z&&r.append("redactions",z);f.Oz[x.reqID]=aa();h.open("POST",n);h.withCredentials=f.Wn;e=new Promise(function(e,f){h.onreadystatechange=function(){4===h.readyState&&(200===h.status?e():f("An error occurred while sending down annotation data to the server"))}});h.send(r);return e.then(function(){return f.Oz[x.reqID].promise})})},
PO:function(){this.Xd||(this.Xd=aa(),this.Xd.request={t:"xod",noCreate:!0},this.kf(this.Xd.request));return this.Xd.promise},i9:function(){this.qe||(this.qe=aa(),this.qe.request={t:"xod"},this.kf(this.qe.request));return this.qe.promise},om:function(){return!0},request:function(){},tR:function(){},abort:function(){for(var e=0;e<this.rf.length;e++)this.rf[e]&&(this.rf[e].resolve(null),this.rf[e]=null,this.Iy.push(e));this.close()},PA:function(e){this.jf=this.jf||{};this.jf.headers=e},hea:function(){return this.jf?
Object(z.omit)(this.jf.headers,["Cookie","cookie"]):null},vr:function(e){this.jf=this.jf||{};this.jf.internal=this.jf.internal||{};this.jf.internal.withCredentials=e},Wn:function(){return this.jf&&this.jf.internal?this.jf.internal.withCredentials:null},getFileData:function(){return Promise.reject()}});Object(ha.b)(ba);Object(r.a)(ba);Object(r.b)(ba);ca["default"]=ba},376:function(ha,ca,h){function ba(h,f,e){function x(e,f){function h(e){r().then(function(f){ca&&!ha?setTimeout(function(){h(e)},1):
f.send(JSON.stringify(e))})}function n(e,f,n,r){var ea=window.createPromiseCapability(),ia=!1,ja=ea;y=e;aa=f;ba=n;x=null;r&&(e=Object(da.a)("wvsQueryParameters"),e.bcid=Object(fa.j)(8),Object(da.b)("wvsQueryParameters",e));try{e=Ba?za+"/"+Ba:za+"/ws";e=Object(z.a)(e);var ka=new WebSocket(e);ka.onopen=function(){ea.resolve();ia=!0;ea=null;ca=!1;w.resolve(ka);aa&&aa()};ka.onerror=function(e){ca=ha=!0;ea&&ea.reject(e);x&&x.reject()};ka.onclose=function(){w=window.createPromiseCapability();ca=!0;x||(x=
window.createPromiseCapability());x.resolve();ba&&ba();y&&ia&&y({t:"health",data:{unhealthy:!0,isDead:!0}})};ka.onmessage=function(e){e&&e.data&&(e=JSON.parse(e.data),e.hb?h({hb:!0}):e.end?close():y(e))}}catch(Ea){ea.reject(Ea),ea=null}return ja.promise}function r(){ca&&y&&n(y);return w.promise}var w=window.createPromiseCapability(),x=null,y,aa,ba=null,ca=!1,ha=!1,Ba=f,za=function(e){var f=e.indexOf("://"),h="ws://";0>f?f=0:(5===f&&(h="wss://"),f+=3);var n=e.lastIndexOf("/");0>n&&(n=e.length);return h+
e.slice(f,n)}(e);return{send:h,hI:n,$D:function(){return x?x.promise:r().then(function(e){x=window.createPromiseCapability();y=null;e.close();return x.promise})}}}function r(e){var f=e.lastIndexOf("/");0>f&&(f=e.length);return e.slice(0,f)}return window.WebSocket&&!e?x(h,f):function(e,f){function h(e){(da?da.promise:Promise.resolve(ca)).then(function(f){var h=new XMLHttpRequest,n=ba?y+"/"+ba+"pf":y+"/pf";n=Object(z.a)(n)+"&id="+f;f=new FormData;f.append("data",JSON.stringify(e));h.open("POST",n);
h.withCredentials=!0;h.send(f)})}function n(){ca=0;da||(da=window.createPromiseCapability())}function w(){x=new XMLHttpRequest;var e=y+"/pf";e+=0!==ca?"?id="+ca+"&uc="+za:"?uc="+za;za++;x.open("GET",e,!0);x.withCredentials=!0;x.setRequestHeader("Cache-Control","no-cache");x.setRequestHeader("X-Requested-With","XMLHttpRequest");var f=x,r=!1;x.onreadystatechange=function(){a:if(3<=f.readyState&&!r){try{var e=f.responseText.length}catch(Ca){Object(aa.f)("caught exception");break a}if(0<e)try{var x=f.responseText.split("\n");
for(x[x.length-1]&&x.pop();0<x.length&&3>x[x.length-1].length;)"]"===x.pop()&&n();0<x.length&&3>x[0].length&&x.shift();for(e=0;e<x.length;++e)x[e].endsWith(",")&&(x[e]=x[e].substr(0,x[e].length-1));0===ca&&0<x.length&&(ca=JSON.parse(x.shift()).id,e=da,da=null,e.resolve(ca));var y;for(e=0;e<x.length;++e)(y=JSON.parse(x[e]))&&y.end?close():y&&y.hb&&y.id===ca?h({hb:!0}):Ba(y)}catch(Ca){}fa||(r=!0,w())}};x.send()}var x,y=r(e),ba=f,ca=0,da=window.createPromiseCapability(),fa=!1,ha=null,Ba=null,za=0;return{send:h,
hI:function(e,f,h){Ba=e;ha=h;fa=!1;n();w();f&&f();return Promise.resolve()},$D:function(){n();Ba=null;fa=!0;ha&&ha();x.abort();return Promise.resolve()}}}(h,f)}h.d(ca,"a",function(){return ba});var aa=h(1),fa=h(26),da=h(35),z=h(135)}}]);}).call(this || window)
