!/**
 * Highcharts JS v11.4.4 (2024-07-02)
 *
 * (c) 2016-2024 Highsoft AS
 * Authors: Jon Arild Nygard
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/wordcloud",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function o(e,o,i,r){e.hasOwnProperty(o)||(e[o]=r.apply(null,i),"function"==typeof CustomEvent&&t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:e[o]}})))}o(e,"Series/DrawPointUtilities.js",[],function(){var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};return{draw:function(e,o){var i=o.animatableAttribs,r=o.onComplete,n=o.css,a=o.renderer,s=e.series&&e.series.chart.hasRendered?void 0:e.series&&e.series.options.animation,l=e.graphic;if(o.attribs=t(t({},o.attribs),{class:e.getClassName()})||{},e.shouldDraw())l||(l="text"===o.shapeType?a.text():"image"===o.shapeType?a.image(o.imageUrl||"").attr(o.shapeArgs||{}):a[o.shapeType](o.shapeArgs||{}),e.graphic=l,l.add(o.group)),n&&l.css(n),l.attr(o.attribs).animate(i,!o.isNew&&s,r);else if(l){var u=function(){e.graphic=l=l&&l.destroy(),"function"==typeof r&&r()};Object.keys(i).length?l.animate(i,void 0,function(){return u()}):u()}}}}),o(e,"Series/Wordcloud/WordcloudPoint.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=t.seriesTypes.column.prototype.pointClass,n=e.extend,a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.isValid=function(){return!0},e}(r);return n(a.prototype,{weight:1}),a}),o(e,"Series/Wordcloud/WordcloudSeriesDefaults.js",[],function(){return{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,cropThreshold:1/0,minFontSize:1,maxFontSize:25,placementStrategy:"center",rotation:{from:0,orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",fontWeight:"900",whiteSpace:"nowrap"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.weight}</b><br/>'}}}),o(e,"Series/Wordcloud/WordcloudUtils.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],function(t,e){var o=t.deg2rad,i=e.extend,r=e.find,n=e.isNumber,a=e.isObject,s=e.merge;function l(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function u(t){var e,o=t.axes||[];return o.length||(o=[],t.concat([t[0]]).reduce(function(t,e){var i,n,a=(i=e[0]-t[0],[[-(n=e[1]-t[1]),i],[n,-i]])[0];return r(o,function(t){return t[0]===a[0]&&t[1]===a[1]})||o.push(a),e}),t.axes=o),o}function h(t,e){var o=t.map(function(t){var o=t[0],i=t[1];return o*e[0]+i*e[1]});return{min:Math.min.apply(this,o),max:Math.max.apply(this,o)}}function c(t,e){var o=u(t),i=u(e);return!r(o.concat(i),function(o){var i,r;return i=h(t,o),!!((r=h(e,o)).min>i.max||r.max<i.min)})}function p(t,e){var o=4*t,i=Math.ceil((Math.sqrt(o)-1)/2),r=function(t){return"boolean"==typeof t},n=2*i+1,a=Math.pow(n,2),s=!1;return n-=1,t<=1e4&&(r(s)&&o>=a-n&&(s={x:i-(a-o),y:-i}),a-=n,r(s)&&o>=a-n&&(s={x:-i,y:-i+(a-o)}),a-=n,r(s)&&(s=o>=a-n?{x:-i+(a-o),y:i}:{x:i,y:i-(a-o-n)}),s.x*=5,s.y*=5),s}function d(t,e){var o=Math.pow(10,n(e)?e:14);return Math.round(t*o)/o}function f(t,e){var i=t[0],r=t[1],n=-(o*e),a=Math.cos(n),s=Math.sin(n);return[d(i*a-r*s),d(i*s+r*a)]}function g(t,e,o){var i=f([t[0]-e[0],t[1]-e[1]],o);return[i[0]+e[0],i[1]+e[1]]}return{archimedeanSpiral:function(t,e){var o=e.field,i=o.width*o.width+o.height*o.height,r=.8*t,n=!1;return t<=1e4&&!(Math.min(Math.abs((n={x:r*Math.cos(r),y:r*Math.sin(r)}).x),Math.abs(n.y))<i)&&(n=!1),n},extendPlayingField:function(t,e){var o,i,r,n,l,u,h,c;return a(t)&&a(e)?(o=e.bottom-e.top,u=(l=(i=e.right-e.left)*(r=t.ratioX)>o*(n=t.ratioY)?i:o)*r,h=l*n,c=s(t,{width:t.width+2*u,height:t.height+2*h})):c=t,c},getBoundingBoxFromPolygon:function(t){return t.reduce(function(t,e){var o=e[0],i=e[1];return t.left=Math.min(o,t.left),t.right=Math.max(o,t.right),t.bottom=Math.max(i,t.bottom),t.top=Math.min(i,t.top),t},{left:Number.MAX_VALUE,right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,top:Number.MAX_VALUE})},getPlayingField:function(t,e,o){var i=o.reduce(function(t,e){var o=e.dimensions,i=Math.max(o.width,o.height);return t.maxHeight=Math.max(t.maxHeight,o.height),t.maxWidth=Math.max(t.maxWidth,o.width),t.area+=i*i,t},{maxHeight:0,maxWidth:0,area:0}),r=Math.max(i.maxHeight,i.maxWidth,.85*Math.sqrt(i.area)),n=t>e?t/e:1,a=e>t?e/t:1;return{width:r*n,height:r*a,ratioX:n,ratioY:a}},getPolygon:function(t,e,o,i,r){var n=[t,e],a=t-o/2,s=t+o/2,l=e-i/2,u=e+i/2;return[[a,l],[s,l],[s,u],[a,u]].map(function(t){return g(t,n,-r)})},getRandomPosition:function(t){return Math.round(t*(Math.random()+.5)/2)},getRotation:function(t,e,o,i){var r,a=!1;return n(t)&&n(e)&&n(o)&&n(i)&&t>0&&e>-1&&i>o&&(r=(i-o)/(t-1||1),a=o+e%t*r),a},getScale:function(t,e,o){var i=2*Math.max(Math.abs(o.top),Math.abs(o.bottom)),r=2*Math.max(Math.abs(o.left),Math.abs(o.right));return Math.min(r>0?1/r*t:1,i>0?1/i*e:1)},getSpiral:function(t,e){for(var o=[],i=1;i<1e4;i++)o.push(t(i,e));return function(t){return t<=1e4&&o[t-1]}},intersectionTesting:function(t,e){var o,n,s,u,h,p,d=e.placed,f=e.field,g=e.rectangle,m=e.polygon,y=e.spiral,x=t.rect=i({},g),b=1,v={x:0,y:0};for(t.polygon=m,t.rotation=e.rotation;!1!==v&&(o=t.rect,n=t.polygon,s=t.lastCollidedWith,u=function(e){var i=l(o,e.rect);return i&&(t.rotation%90||e.rotation%90)&&(i=c(n,e.polygon)),i},h=!1,!s||(h=u(s))||delete t.lastCollidedWith,h||(h=!!r(d,function(e){var o=u(e);return o&&(t.lastCollidedWith=e),o})),h||!((p={left:-(f.width/2),right:f.width/2,top:-(f.height/2),bottom:f.height/2}).left<x.left&&p.right>x.right&&p.top<x.top&&p.bottom>x.bottom));)a(v=y(b))&&(x.left=g.left+v.x,x.right=g.right+v.x,x.top=g.top+v.y,x.bottom=g.bottom+v.y,t.polygon=function(t,e,o){return o.map(function(o){return[o[0]+t,o[1]+e]})}(v.x,v.y,m)),b++;return v},isPolygonsColliding:c,isRectanglesIntersecting:l,rectangularSpiral:function(t,e){var o=p(t,e),i=e.field;return o&&(o.x*=i.ratioX,o.y*=i.ratioY),o},rotate2DToOrigin:f,rotate2DToPoint:g,squareSpiral:p,updateFieldBoundaries:function(t,e){return(!n(t.left)||t.left>e.left)&&(t.left=e.left),(!n(t.right)||t.right<e.right)&&(t.right=e.right),(!n(t.top)||t.top>e.top)&&(t.top=e.top),(!n(t.bottom)||t.bottom<e.bottom)&&(t.bottom=e.bottom),t}}}),o(e,"Series/Wordcloud/WordcloudSeries.js",[e["Series/DrawPointUtilities.js"],e["Core/Globals.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"],e["Series/Wordcloud/WordcloudPoint.js"],e["Series/Wordcloud/WordcloudSeriesDefaults.js"],e["Series/Wordcloud/WordcloudUtils.js"]],function(t,e,o,i,r,n,a){var s,l=this&&this.__extends||(s=function(t,e){return(s=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),u=e.noop,h=o.seriesTypes.column,c=i.extend,p=i.isArray,d=i.isNumber,f=i.isObject,g=i.merge,m=a.archimedeanSpiral,y=a.extendPlayingField,x=a.getBoundingBoxFromPolygon,b=a.getPlayingField,v=a.getPolygon,w=a.getRandomPosition,S=a.getRotation,M=a.getScale,P=a.getSpiral,j=a.intersectionTesting,_=a.isPolygonsColliding,A=a.rectangularSpiral,C=a.rotate2DToOrigin,W=a.rotate2DToPoint,F=a.squareSpiral,O=a.updateFieldBoundaries,T=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return l(i,o),i.prototype.pointAttribs=function(t,o){var i=e.seriesTypes.column.prototype.pointAttribs.call(this,t,o);return delete i.stroke,delete i["stroke-width"],i},i.prototype.deriveFontSize=function(t,e,o){var i=d(t)?t:0,r=d(e)?e:1;return Math.floor(Math.max(d(o)?o:1,i*r))},i.prototype.drawPoints=function(){var e,o=this.hasRendered,i=this.xAxis,r=this.yAxis,n=this.chart,a=this.group,s=this.options,l=s.animation,u=s.allowExtendPlayingField,h=n.renderer,p=[],g=this.placementStrategy[s.placementStrategy],m=s.rotation,w=this.points.map(function(t){return t.weight}),S=Math.max.apply(null,w),_=this.points.concat().sort(function(t,e){return e.weight-t.weight}),A=h.text().add(a);this.group.attr({scaleX:1,scaleY:1});for(var C=0;C<_.length;C++){var W=_[C],F=1/S*W.weight,T=this.deriveFontSize(F,s.maxFontSize,s.minFontSize),D=c({fontSize:T+"px"},s.style);A.css(D).attr({x:0,y:0,text:W.name});var U=A.getBBox(!0);W.dimensions={height:U.height,width:U.width}}e=b(i.len,r.len,_);for(var z=P(this.spirals[s.spiral],{field:e}),E=0;E<_.length;E++){var W=_[E],F=1/S*W.weight,T=this.deriveFontSize(F,s.maxFontSize,s.minFontSize),D=c({fontSize:T+"px"},s.style),X=g(W,{data:_,field:e,placed:p,rotation:m}),B=c(this.pointAttribs(W,W.selected&&"select"),{align:"center","alignment-baseline":"middle","dominant-baseline":"middle",x:X.x,y:X.y,text:W.name,rotation:d(X.rotation)?X.rotation:void 0}),N=v(X.x,X.y,W.dimensions.width,W.dimensions.height,X.rotation),R=x(N),H=j(W,{rectangle:R,polygon:N,field:e,placed:p,spiral:z,rotation:X.rotation}),L=void 0;!H&&u&&(e=y(e,R),H=j(W,{rectangle:R,polygon:N,field:e,placed:p,spiral:z,rotation:X.rotation})),f(H)?(B.x=(B.x||0)+H.x,B.y=(B.y||0)+H.y,R.left+=H.x,R.right+=H.x,R.top+=H.y,R.bottom+=H.y,e=O(e,R),p.push(W),W.isNull=!1,W.isInside=!0):W.isNull=!0,l&&(L={x:B.x,y:B.y},o?(delete B.x,delete B.y):(B.x=0,B.y=0)),t.draw(W,{animatableAttribs:L,attribs:B,css:D,group:a,renderer:h,shapeArgs:void 0,shapeType:"text"})}A=A.destroy();var Y=M(i.len,r.len,e);this.group.attr({scaleX:Y,scaleY:Y})},i.prototype.hasData=function(){return f(this)&&!0===this.visible&&p(this.points)&&this.points.length>0},i.prototype.getPlotBox=function(){var t=this.chart,e=t.inverted,o=this[e?"yAxis":"xAxis"],i=this[e?"xAxis":"yAxis"],r=o?o.len:t.plotWidth,n=i?i.len:t.plotHeight;return{translateX:(o?o.left:t.plotLeft)+r/2,translateY:(i?i.top:t.plotTop)+n/2,scaleX:1,scaleY:1}},i.defaultOptions=g(h.defaultOptions,n),i}(h);return c(T.prototype,{animate:u,animateDrilldown:u,animateDrillupFrom:u,isCartesian:!1,pointClass:r,setClip:u,placementStrategy:{random:function(t,e){var o=e.field,i=e.rotation;return{x:w(o.width)-o.width/2,y:w(o.height)-o.height/2,rotation:S(i.orientations,t.index,i.from,i.to)}},center:function(t,e){var o=e.rotation;return{x:0,y:0,rotation:S(o.orientations,t.index,o.from,o.to)}}},pointArrayMap:["weight"],spirals:{archimedean:m,rectangular:A,square:F},utils:{extendPlayingField:y,getRotation:S,isPolygonsColliding:_,rotate2DToOrigin:C,rotate2DToPoint:W}}),o.registerSeriesType("wordcloud",T),T}),o(e,"masters/modules/wordcloud.src.js",[e["Core/Globals.js"]],function(t){return t})});