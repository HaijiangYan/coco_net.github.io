!/**
 * Highstock JS v11.4.4 (2024-07-02)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/wma",["highcharts","modules/stock"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function n(e,n,r,o){e.hasOwnProperty(n)||(e[n]=o.apply(null,r),"function"==typeof CustomEvent&&t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:n,module:e[n]}})))}n(e,"Stock/Indicators/WMA/WMAIndicator.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=t.seriesTypes.sma,i=e.isArray,s=e.merge;function u(t,e,n,r,o){var i=e[r],s=o<0?n[r]:n[r][o];t.push([i,s])}function a(t,e,n,r){var o=t.length,i=t.reduce(function(t,e,n){return[null,t[1]+e[1]*(n+1)]})[1]/((o+1)/2*o),s=e[r-1];return t.shift(),[s,i]}var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.getValues=function(t,e){var n,r,o=e.period,s=t.xData,c=t.yData,p=c?c.length:0,f=s[0],l=[],h=[],d=[],y=1,m=-1,g=c[0];if(!(s.length<o)){i(c[0])&&(m=e.index,g=c[0][m]);for(var v=[[f,g]];y!==o;)u(v,s,c,y,m),y++;for(n=y;n<p;n++)r=a(v,s,c,n),l.push(r),h.push(r[0]),d.push(r[1]),u(v,s,c,n,m);return r=a(v,s,c,n),l.push(r),h.push(r[0]),d.push(r[1]),{values:l,xData:h,yData:d}}},e.defaultOptions=s(o.defaultOptions,{params:{index:3,period:9}}),e}(o);return t.registerSeriesType("wma",c),c}),n(e,"masters/indicators/wma.src.js",[e["Core/Globals.js"]],function(t){return t})});