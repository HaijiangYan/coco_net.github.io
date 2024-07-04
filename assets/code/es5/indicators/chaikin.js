!/**
 * Highstock JS v11.4.4 (2024-07-02)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/chaikin",["highcharts","modules/stock"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function o(e,o,r,n){e.hasOwnProperty(o)||(e[o]=n.apply(null,r),"function"==typeof CustomEvent&&t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:e[o]}})))}o(e,"Stock/Indicators/AD/ADIndicator.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),n=t.seriesTypes.sma,i=e.error,s=e.extend,a=e.merge,u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.populateAverage=function(t,e,o,r,n){var i=e[r][1],s=e[r][2],a=e[r][3],u=o[r];return[t[r],a===i&&a===s||i===s?0:(2*a-s-i)/(i-s)*u]},e.prototype.getValues=function(t,o){var r,n,s,a=o.period,u=t.xData,p=t.yData,c=o.volumeSeriesID,l=t.chart.get(c),f=l&&l.yData,h=p?p.length:0,d=[],y=[],m=[];if(!(u.length<=a)||!h||4===p[0].length){if(!l){i("Series "+c+" not found! Check `volumeSeriesID`.",!0,t.chart);return}for(n=a;n<h;n++)r=d.length,s=e.populateAverage(u,p,f,n,a),r>0&&(s[1]+=d[r-1][1]),d.push(s),y.push(s[0]),m.push(s[1]);return{values:d,xData:y,yData:m}}},e.defaultOptions=a(n.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),e}(n);return s(u.prototype,{nameComponents:!1,nameBase:"Accumulation/Distribution"}),t.registerSeriesType("ad",u),u}),o(e,"Stock/Indicators/Chaikin/ChaikinIndicator.js",[e["Stock/Indicators/AD/ADIndicator.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e,o){var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=e.seriesTypes.ema,s=o.correctFloat,a=o.extend,u=o.merge,p=o.error,c=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return n(o,e),o.prototype.getValues=function(o,r){var n,i,a=r.periods,u=r.period,c=[],l=[],f=[];if(2!==a.length||a[1]<=a[0]){p('Error: "Chaikin requires two periods. Notice, first period should be lower than the second one."');return}var h=t.prototype.getValues.call(this,o,{volumeSeriesID:r.volumeSeriesID,period:u});if(h){var d=e.prototype.getValues.call(this,h,{period:a[0]}),y=e.prototype.getValues.call(this,h,{period:a[1]});if(d&&y){var m=a[1]-a[0];for(i=0;i<y.yData.length;i++)n=s(d.yData[i+m]-y.yData[i]),c.push([y.xData[i],n]),l.push(y.xData[i]),f.push(n);return{values:c,xData:l,yData:f}}}},o.defaultOptions=u(i.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume",period:9,periods:[3,10]}}),o}(i);return a(c.prototype,{nameBase:"Chaikin Osc",nameComponents:["periods"]}),e.registerSeriesType("chaikin",c),c}),o(e,"masters/indicators/chaikin.src.js",[e["Core/Globals.js"]],function(t){return t})});