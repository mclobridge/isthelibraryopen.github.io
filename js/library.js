!function(e,t){function n(e,t){this._d=e,this._isUTC=!!t}function s(e,t){for(var n=e+"";n.length<t;)n="0"+n;return n}function r(t,n,s,r){var a,o,i,u,d="string"==typeof n,c=d?{}:n;return d&&r&&(c[n]=+r),a=(c.ms||c.milliseconds||0)+1e3*(c.s||c.seconds||0)+6e4*(c.m||c.minutes||0)+36e5*(c.h||c.hours||0),o=(c.d||c.days||0)+7*(c.w||c.weeks||0),i=(c.M||c.months||0)+12*(c.y||c.years||0),a&&t.setTime(+t+a*s),o&&t.setDate(t.getDate()+o*s),i&&(u=t.getDate(),t.setDate(1),t.setMonth(t.getMonth()+i*s),t.setDate(Math.min(new e(t.getFullYear(),t.getMonth()+1,0).getDate(),u))),t}function a(e){return"[object Array]"===Object.prototype.toString.call(e)}function o(t){return new e(t[0],t[1]||0,t[2]||1,t[3]||0,t[4]||0,t[5]||0,t[6]||0)}function i(t,n){function r(n){var g,D;switch(n){case"M":return a+1;case"Mo":return a+1+y(a+1);case"MM":return s(a+1,2);case"MMM":return p.monthsShort[a];case"MMMM":return p.months[a];case"D":return o;case"Do":return o+y(o);case"DD":return s(o,2);case"DDD":return g=new e(u,a,o),D=new e(u,0,1),~~((g-D)/864e5+1.5);case"DDDo":return g=r("DDD"),g+y(g);case"DDDD":return s(r("DDD"),3);case"d":return d;case"do":return d+y(d);case"ddd":return p.weekdaysShort[d];case"dddd":return p.weekdays[d];case"w":return g=new e(u,a,o-d+5),D=new e(g.getFullYear(),0,4),~~((g-D)/864e5/7+1.5);case"wo":return g=r("w"),g+y(g);case"ww":return s(r("w"),2);case"YY":return s(u%100,2);case"YYYY":return u;case"a":return M?M(c,h,!1):c>11?"pm":"am";case"A":return M?M(c,h,!0):c>11?"PM":"AM";case"H":return c;case"HH":return s(c,2);case"h":return c%12||12;case"hh":return s(c%12||12,2);case"m":return h;case"mm":return s(h,2);case"s":return l;case"ss":return s(l,2);case"S":return~~(m/100);case"SS":return s(~~(m/10),2);case"SSS":return s(m,3);case"zz":case"z":return(t._d.toString().match(T)||[""])[0].replace(S,"");case"Z":return(0>f?"-":"+")+s(~~(Math.abs(f)/60),2)+":"+s(~~(Math.abs(f)%60),2);case"ZZ":return(0>f?"-":"+")+s(~~(10*Math.abs(f)/6),4);case"L":case"LL":case"LLL":case"LLLL":case"LT":return i(t,p.longDateFormat[n]);default:return n.replace(/(^\[)|(\\)|\]$/g,"")}}var a=t.month(),o=t.date(),u=t.year(),d=t.day(),c=t.hours(),h=t.minutes(),l=t.seconds(),f=-t.zone(),m=t.milliseconds(),y=p.ordinal,M=p.meridiem;return n.replace(_,r)}function u(t,n){function s(e,t){var n;switch(e){case"M":case"MM":i[1]=~~t-1;break;case"MMM":case"MMMM":for(n=0;12>n;n++)if(p.monthsParse[n].test(t)){i[1]=n;break}break;case"D":case"DD":case"DDD":case"DDDD":i[2]=~~t;break;case"YY":t=~~t,i[0]=t+(t>70?1900:2e3);break;case"YYYY":i[0]=~~Math.abs(t);break;case"a":case"A":a="pm"===t.toLowerCase();break;case"H":case"HH":case"h":case"hh":i[3]=~~t;break;case"m":case"mm":i[4]=~~t;break;case"s":case"ss":i[5]=~~t;break;case"Z":case"ZZ":c=!0,n=(t||"").match(z),n&&n[1]&&(u=~~n[1]),n&&n[2]&&(d=~~n[2]),n&&"+"===n[0]&&(u=-u,d=-d)}}var r,a,i=[0,0,1,0,0,0,0],u=0,d=0,c=!1,h=t.match(b),l=n.match(Y),f=Math.min(h.length,l.length);for(r=0;f>r;r++)s(l[r],h[r]);return a&&i[3]<12&&(i[3]+=12),a===!1&&12===i[3]&&(i[3]=0),i[3]+=u,i[4]+=d,c?new e(e.UTC.apply({},i)):o(i)}function d(e,t){var n,s=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(n=0;s>n;n++)~~e[n]!==~~t[n]&&a++;return a+r}function c(e,t){var s,r,a,o,c=e.match(b),h=99;for(r=0;r<t.length;r++)a=u(e,t[r]),o=d(c,i(new n(a),t[r]).match(b)),h>o&&(h=o,s=a);return s}function h(t){var n,s="YYYY-MM-DDT";if(k.exec(t)){for(n=0;3>n;n++)if(H[n][1].exec(t)){s+=H[n][0];break}return u(t,s+"Z")}return new e(t)}function l(e,t,n,s){var r=p.relativeTime[e];return"function"==typeof r?r(t||1,!!n,e,s):r.replace(/%d/i,t||1)}function f(e,t){var n=M(Math.abs(e)/1e3),s=M(n/60),r=M(s/60),a=M(r/24),o=M(a/365),i=45>n&&["s",n]||1===s&&["m"]||45>s&&["mm",s]||1===r&&["h"]||22>r&&["hh",r]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",M(a/30)]||1===o&&["y"]||["yy",o];return i[2]=t,i[3]=e>0,l.apply({},i)}function m(e,t){p.fn[e]=function(e){var n=this._isUTC?"UTC":"";return null!=e?(this._d["set"+n+t](e),this):this._d["get"+n+t]()}}var p,y,M=Math.round,g={},D="undefined"!=typeof module,v="months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),w=/^\/?Date\((\-?\d+)/i,_=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|LT|LL?L?L?)/g,S=/[^A-Z]/g,T=/\([A-Za-z ]+\)|:[0-9]{2} [A-Z]{3} /g,Y=/(\\)?(MM?M?M?|dd?d?d|DD?D?D?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|ZZ?|T)/g,b=/(\\)?([0-9]+|([a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+|([\+\-]\d\d:?\d\d))/gi,k=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d)?)?)?([\+\-]\d\d:?\d\d)?)?/,L="YYYY-MM-DDTHH:mm:ssZ",H=[["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],z=/([\+\-]|\d\d)/gi,A="1.5.0",F="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|");for(p=function(s,r){if(null===s||""===s)return null;var i,d;return s&&s._d instanceof e?i=new e(+s._d):r?i=a(r)?c(s,r):u(s,r):(d=w.exec(s),i=s===t?new e:d?new e(+d[1]):s instanceof e?s:a(s)?o(s):"string"==typeof s?h(s):new e(s)),new n(i)},p.utc=function(t,s){return a(t)?new n(new e(e.UTC.apply({},t)),!0):s&&t?p(t+" 0",s+" Z").utc():p(t).utc()},p.unix=function(e){return p(1e3*e)},p.humanizeDuration=function(e,t,n){var s,r=+e,a=p.relativeTime;switch(t){case"seconds":r*=1e3;break;case"minutes":r*=6e4;break;case"hours":r*=36e5;break;case"days":r*=864e5;break;case"weeks":r*=6048e5;break;case"months":r*=2592e6;break;case"years":r*=31536e6;break;default:n=!!t}return s=f(r,!n),n?(0>=r?a.past:a.future).replace(/%s/i,s):s},p.version=A,p.defaultFormat=L,p.lang=function(e,t){var n,s,r,a=[];if(t){for(n=0;12>n;n++)a[n]=new RegExp("^"+t.months[n]+"|^"+t.monthsShort[n].replace(".",""),"i");t.monthsParse=t.monthsParse||a,g[e]=t}if(g[e])for(n=0;n<v.length;n++)s=v[n],p[s]=g[e][s]||g.en[s];else D&&(r=require("./lang/"+e),p.lang(e,r))},p.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:!1,calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"}}),p.isMoment=function(e){return e instanceof n},p.fn=n.prototype={clone:function(){return p(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},"native":function(){return this._d},toString:function(){return this._d.toString()},toDate:function(){return this._d},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(e){return i(this,e?e:p.defaultFormat)},add:function(e,t){return this._d=r(this._d,e,1,t),this},subtract:function(e,t){return this._d=r(this._d,e,-1,t),this},diff:function(e,t,n){var s,r=p(e),a=6e4*(this.zone()-r.zone()),o=this._d-r._d-a,i=this.year()-r.year(),u=this.month()-r.month(),d=this.date()-r.date();return s="months"===t?12*i+u+d/30:"years"===t?i+u/12:"seconds"===t?o/1e3:"minutes"===t?o/6e4:"hours"===t?o/36e5:"days"===t?o/864e5:"weeks"===t?o/6048e5:o,n?s:M(s)},from:function(e,t){return p.humanizeDuration(this.diff(e),!t)},fromNow:function(e){return this.from(p(),e)},calendar:function(){var e=this.diff(p().sod(),"days",!0),t=p.calendar,n=t.sameElse,s=-6>e?n:-1>e?t.lastWeek:0>e?t.lastDay:1>e?t.sameDay:2>e?t.nextDay:7>e?t.nextWeek:n;return this.format("function"==typeof s?s.apply(this):s)},isLeapYear:function(){var e=this.year();return e%4===0&&e%100!==0||e%400===0},isDST:function(){return this.zone()<p([this.year()]).zone()||this.zone()<p([this.year(),5]).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null==e?t:this.add({d:e-t})},sod:function(){return this.clone().hours(0).minutes(0).seconds(0).milliseconds(0)},eod:function(){return this.sod().add({d:1,ms:-1})},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return this.clone().month(this.month()+1).date(0).date()}},y=0;y<F.length;y++)m(F[y].toLowerCase(),F[y]);m("year","FullYear"),D&&(module.exports=p),"undefined"!=typeof window&&(window.moment=p),"function"==typeof define&&define.amd&&define("moment",[],function(){return p})}(Date);/*!
  * Cookie Monster - A javascript cookie library 
  * v0.0.3
  * https://github.com/jgallen23/cookie-monster
  * copyright JGA 2011
  * MIT License
  */
var monster={set:function(e,t,n,s){var r=new Date,a="",o=typeof t,i="";if(s=s||"/",n&&(r.setTime(r.getTime()+24*n*60*60*1e3),a="; expires="+r.toGMTString()),"object"===o&&"undefined"!==o){if(!("JSON"in window))throw"Bummer, your browser doesn't support JSON parsing.";i=JSON.stringify({v:t})}else i=escape(t);document.cookie=e+"="+i+a+"; path="+s},get:function(e){for(var t=e+"=",n=document.cookie.split(";"),s="",r="",a={},o=0;o<n.length;o++){for(var i=n[o];" "==i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(t))return s=i.substring(t.length,i.length),r=s.substring(0,1),"{"==r&&(a=JSON.parse(s),"v"in a)?a.v:"undefined"==s?void 0:unescape(s)}return null},remove:function(e){this.set(e,"",-1)}};(function(){this.JST||(this.JST={}),this.JST["templates/contact"]=function(e){e||(e={});var t,n=[],s=function(e){return e&&e.ecoSafe?e:"undefined"!=typeof e&&null!=e?a(e):""},r=e.safe,a=e.escape;return t=e.safe=function(e){if(e&&e.ecoSafe)return e;("undefined"==typeof e||null==e)&&(e="");var t=new String(e);return t.ecoSafe=!0,t},a||(a=e.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){n.push('<div id="map">MAP GOES HERE</div>\n<div id="address" class="vcard">\n  <h3 class="fn org">'),n.push(s(this.name)),n.push('</h3>\n  <div class="adr">\n    <div class="street-address">'),n.push(s(this.address.street)),n.push('</div>\n    <span class="locality">Durham</span>,\n    <abbr class="region" title="North Carolina">NC</abbr>\n    <span class="postal-code">'),n.push(s(this.address.zip)),n.push('</span>\n  </div>\n  <div class="tel">'),n.push(s(this.phone)),n.push("</div>\n</div>\n")}).call(this)}.call(e),e.safe=r,e.escape=a,n.join("")}}).call(this),function(){this.JST||(this.JST={}),this.JST["templates/hours"]=function(e){e||(e={});var t,n=[],s=function(e){return e&&e.ecoSafe?e:"undefined"!=typeof e&&null!=e?a(e):""},r=e.safe,a=e.escape;return t=e.safe=function(e){if(e&&e.ecoSafe)return e;("undefined"==typeof e||null==e)&&(e="");var t=new String(e);return t.ecoSafe=!0,t},a||(a=e.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){var e,t,r,a,o,i,u;for(n.push("<h2>"),n.push(s(this.name)),n.push(' hours</h2>\n<dl class="dl-horizontal">\n  '),r=i=0;6>=i;r=++i)n.push("\n    "),e=moment().add("days",r),n.push("\n    "),t=e.format("dddd"),n.push("\n    "),u=this.hours[t],a=u[0],o=u[1],n.push('\n    <dt class="day'),n.push(s(r)),n.push('">'),n.push(s(t)),n.push('</dt>\n    <dd class="day'),n.push(s(r)),n.push('">\n    '),Holiday.isHoliday(e)?(n.push("\n      "),n.push(s(Holiday.getHoliday(e).name)),n.push("\n    ")):a&&o?(n.push("\n      "),n.push(s(this.mt(a))),n.push(" - "),n.push(s(this.mt(o))),n.push("\n    ")):n.push("\n      Closed\n    "),n.push("\n    </dd>\n  ");n.push("\n</dl>\n")}).call(this)}.call(e),e.safe=r,e.escape=a,n.join("")}}.call(this),function(){this.JST||(this.JST={}),this.JST["templates/open"]=function(e){e||(e={});var t,n=[],s=function(e){return e&&e.ecoSafe?e:"undefined"!=typeof e&&null!=e?a(e):""},r=e.safe,a=e.escape;return t=e.safe=function(e){if(e&&e.ecoSafe)return e;("undefined"==typeof e||null==e)&&(e="");var t=new String(e);return t.ecoSafe=!0,t},a||(a=e.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){var e;n.push('<div class="row">\n  '),e=this.open?"yes":"no",n.push('\n  <div class="y-or-n span12 '),n.push(s(e)),n.push('">\n    '),n.push(s(e)),n.push('\n  </div>\n  <div class="span12">\n    '),n.push(s(this.message)),n.push("\n  </div>\n</div>\n")}).call(this)}.call(e),e.safe=r,e.escape=a,n.join("")}}.call(this),function(){var e,t,n;e=function(){function e(e){this.name=e.name,this.hours=e.hours,this.address=e.address,this.phone=e.phone}return e.prototype.fullAddress=function(){return""+this.address.street+", Durham NC "+this.address.zip},e.prototype.isOpen=function(e){var t,n;return t=e.format("dddd"),n=e.format("HHmm"),!Holiday.isHoliday(e)&&null!=this.hours[t]&&2===this.hours[t].length&&this.hours[t][0]<=n&&n<=this.hours[t][1]},e.prototype.openMessage=function(e){var t,n,s;if(n=e.day(),t=moment.weekdays[n],this.isOpen(e))return"until "+mt(this.hours[t][1]);if(s=e.format("HHmm"),!Holiday.isHoliday(e)&&this.hours[t][0]>s)return"It will open at "+mt(this.hours[t][0])+" today.";for(e=e.add("days",1),n=e.day(),t=moment.weekdays[n];Holiday.isHoliday(e)||2!==this.hours[t].length;)e=e.add("days",1),n=e.day(),t=moment.weekdays[n];return"It will open at "+mt(this.hours[t][0])+" on "+t+"."},e}(),e.current=function(){return $(document).data("library")},e.choose=function(t){var n;return t!==e.current()&&e.all[t]?(monster.set("library",t,365),$(document).data("library",t),n=e.all[t],$("#library-chooser .btn-text").text("the "+n.name),this.displayOpenInfo(t),$("#hours").html(JST["templates/hours"]({name:n.name,hours:n.hours,mt:e.formatMilTime,mod:function(e,t){return e%t}})),$("#contact").html(JST["templates/contact"]({name:n.name,address:n.address,phone:n.phone})),$("#map").gMap({address:n.fullAddress(),zoom:16,controls:["GSmallZoomControl3D"],scrollwheel:!1,markers:[{address:n.fullAddress(),html:""+n.name+"<br><a target='_blank' href='http://maps.google.com/maps?q="+n.fullAddress()+"'>Google Map</a>"}]})):void 0},e.displayOpenInfo=function(e){return e=this.all[e],$("#open-info").html(JST["templates/open"]({open:e.isOpen(moment()),message:e.openMessage(moment())}))},e.updateClock=function(){return $("#now").html(moment().format("dddd, MMMM Do, YYYY [at] h:mm a")),e.current()?e.displayOpenInfo(e.current()):void 0},e.formatMilTime=function(e){var t,n,s,r;return n=e.slice(0,2),s=e.slice(2,4),t=12>n?"AM":"PM",r=n%12,12===r&&(r+=12),"00"===s?""+r+" "+t:""+r+":"+s+" "+t},this.mt=e.formatMilTime,e.initialize=function(){var e,t;return e=null!=(t=monster.get("library"))?t:"main",e?this.choose(e):void 0},e.all={};for(n in libraries)t=libraries[n],e.all[n]=new e(t);window.Library=e}.call(this);