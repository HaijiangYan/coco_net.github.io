!/**
 * Highstock JS v11.4.4 (2024-07-02)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Kacper Madej
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/zigzag",["highcharts","modules/stock"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function o(e,o,n,i){e.hasOwnProperty(o)||(e[o]=i.apply(null,n),"function"==typeof CustomEvent&&t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:e[o]}})))}o(e,"Stock/Indicators/Zigzag/ZigzagIndicator.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=t.seriesTypes.sma,r=e.merge,s=e.extend,a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.getValues=function(t,e){var o,n,i,r,s=e.lowIndex,a=e.highIndex,u=e.deviation/100,p={low:1+u,high:1-u},h=t.xData,c=t.yData,d=c?c.length:0,l=[],f=[],g=[],y=!1,v=!1;if(h&&!(h.length<=1)&&(!d||void 0!==c[0][s]&&void 0!==c[0][a])){var m=c[0][s],x=c[0][a];for(o=1;o<d;o++)c[o][s]<=x*p.high?(l.push([h[0],x]),i=[h[o],c[o][s]],r=!0,y=!0):c[o][a]>=m*p.low&&(l.push([h[0],m]),i=[h[o],c[o][a]],r=!1,y=!0),y&&(f.push(l[0][0]),g.push(l[0][1]),n=o++,o=d);for(o=n;o<d;o++)r?(c[o][s]<=i[1]&&(i=[h[o],c[o][s]]),c[o][a]>=i[1]*p.low&&(v=a)):(c[o][a]>=i[1]&&(i=[h[o],c[o][a]]),c[o][s]<=i[1]*p.high&&(v=s)),!1!==v&&(l.push(i),f.push(i[0]),g.push(i[1]),i=[h[o],c[o][v]],r=!r,v=!1);var w=l.length;return 0!==w&&l[w-1][0]<h[d-1]&&(l.push(i),f.push(i[0]),g.push(i[1])),{values:l,xData:f,yData:g}}},e.defaultOptions=r(i.defaultOptions,{params:{index:void 0,period:void 0,lowIndex:2,highIndex:1,deviation:1}}),e}(i);return s(a.prototype,{nameComponents:["deviation"],nameSuffixes:["%"],nameBase:"Zig Zag"}),t.registerSeriesType("zigzag",a),a}),o(e,"masters/indicators/zigzag.src.js",[e["Core/Globals.js"]],function(t){return t})});