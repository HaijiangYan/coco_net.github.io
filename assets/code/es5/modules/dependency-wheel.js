!/**
 * Highcharts JS v11.4.4 (2024-07-02)
 *
 * Dependency wheel module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/modules/dependency-wheel",["highcharts","modules/sankey"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function n(t,n,r,o){t.hasOwnProperty(n)||(t[n]=o.apply(null,r),"function"==typeof CustomEvent&&e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:n,module:t[n]}})))}n(t,"Series/DependencyWheel/DependencyWheelPoint.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t){var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=e.seriesTypes.sankey.prototype.pointClass,a=t.pInt,i=t.wrap;return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.getDataLabelPath=function(e){var t,n=this,r=n.series.chart.renderer,o=n.shapeArgs,s=n.angle<0||n.angle>Math.PI,c=o.start||0,p=o.end||0;return n.dataLabelPath?(n.dataLabelPath=n.dataLabelPath.destroy(),delete n.dataLabelPath):i(e,"destroy",function(e){return n.dataLabelPath&&(n.dataLabelPath=n.dataLabelPath.destroy()),e.call(this)}),n.dataLabelPath=r.arc({open:!0,longArc:Math.abs(Math.abs(c)-Math.abs(p))<Math.PI?0:1}).attr({x:o.x,y:o.y,r:(o.r||0)+a((null===(t=e.options)||void 0===t?void 0:t.distance)||0),start:s?c:p,end:s?p:c,clockwise:+s}).add(r.defs),n.dataLabelPath},t.prototype.isValid=function(){return!0},t}(o)}),n(t,"Series/DependencyWheel/DependencyWheelSeriesDefaults.js",[],function(){return{center:[null,null],curveFactor:.6,startAngle:0,dataLabels:{textPath:{enabled:!1,attributes:{dy:5}}}}}),n(t,"Series/DependencyWheel/DependencyWheelSeries.js",[t["Core/Animation/AnimationUtilities.js"],t["Series/DependencyWheel/DependencyWheelPoint.js"],t["Series/DependencyWheel/DependencyWheelSeriesDefaults.js"],t["Core/Globals.js"],t["Series/Sankey/SankeyColumnComposition.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"],t["Core/Renderer/SVG/SVGElement.js"],t["Extensions/TextPath.js"]],function(e,t,n,r,o,a,i,s,c){var p,l=this&&this.__extends||(p=function(e,t){return(p=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=e.animObject,h=r.deg2rad,d=a.seriesTypes,f=d.pie,y=d.sankey,g=i.extend,m=i.merge,v=i.relativeLength;c.compose(s);var b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.animate=function(e){if(!e){for(var t=u(this.options.animation).duration/2/this.nodes.length,n=0,r=function(e){var r=e.graphic;r&&(r.attr({opacity:0}),setTimeout(function(){e.graphic&&e.graphic.animate({opacity:1},{duration:t})},t*n++))},o=0,a=this.nodes;o<a.length;o++){var i=a[o];r(i)}for(var s=0,c=this.points;s<c.length;s++){var i=c[s],p=i.graphic;!i.isNode&&p&&p.attr({opacity:0}).animate({opacity:1},this.options.animation)}}},t.prototype.createNode=function(t){var n=e.prototype.createNode.call(this,t);return n.getSum=function(){return n.linksFrom.concat(n.linksTo).reduce(function(e,t){return e+t.weight},0)},n.offset=function(e){var t,r=function(e){return e.fromNode===n?e.toNode:e.fromNode},o=0,a=n.linksFrom.concat(n.linksTo);a.sort(function(e,t){return r(e).index-r(t).index});for(var i=0;i<a.length;i++)if(r(a[i]).index>n.index){a=a.slice(0,i).reverse().concat(a.slice(i).reverse()),t=!0;break}t||a.reverse();for(var i=0;i<a.length;i++){if(a[i]===e)return o;o+=a[i].weight}},n},t.prototype.createNodeColumns=function(){for(var e=[o.compose([],this)],t=0,n=this.nodes;t<n.length;t++){var r=n[t];r.column=0,e[0].push(r)}return e},t.prototype.getNodePadding=function(){return this.options.nodePadding/Math.PI},t.prototype.translate=function(){var t=this.options,n=2*Math.PI/(this.chart.plotHeight+this.getNodePadding()),r=this.getCenter(),o=(t.startAngle-90)*h,a=t.borderRadius,i="object"==typeof a?a.radius:a;e.prototype.translate.call(this);for(var s=0,c=this.nodeColumns[0];s<c.length;s++)!function(e){if(e.sum){var a=e.shapeArgs,s=r[0],c=r[1],p=r[2]/2,l=p-v(("auto"===t.nodeWidth?20:t.nodeWidth)||0,p),u=o+n*(a.y||0),h=o+n*((a.y||0)+(a.height||0));e.angle=u+(h-u)/2,e.shapeType="arc",e.shapeArgs={x:s,y:c,r:p,innerR:l,start:u,end:h,borderRadius:i},e.dlBox={x:s+Math.cos((u+h)/2)*(p+l)/2,y:c+Math.sin((u+h)/2)*(p+l)/2,width:1,height:1};for(var d=function(e){if(e.linkBase){var r,a,i=e.linkBase.map(function(i,p){var u=n*i,h=Math.cos(o+u)*(l+1),d=Math.sin(o+u)*(l+1);return r=t.curveFactor||0,(a=Math.abs(e.linkBase[3-p]*n-u))>Math.PI&&(a=2*Math.PI-a),(a*=l)<l&&(r*=a/l),{x:s+h,y:c+d,cpX:s+(1-r)*h,cpY:c+(1-r)*d}});e.shapeArgs={d:[["M",i[0].x,i[0].y],["A",l,l,0,0,1,i[1].x,i[1].y],["C",i[1].cpX,i[1].cpY,i[2].cpX,i[2].cpY,i[2].x,i[2].y],["A",l,l,0,0,1,i[3].x,i[3].y],["C",i[3].cpX,i[3].cpY,i[0].cpX,i[0].cpY,i[0].x,i[0].y]]}}},f=0,y=e.linksFrom;f<y.length;f++)d(y[f])}}(c[s])},t.defaultOptions=m(y.defaultOptions,n),t}(y);return g(b.prototype,{orderNodes:!1,getCenter:f.prototype.getCenter}),b.prototype.pointClass=t,a.registerSeriesType("dependencywheel",b),b}),n(t,"masters/modules/dependency-wheel.src.js",[t["Core/Globals.js"]],function(e){return e})});