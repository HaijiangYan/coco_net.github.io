!/**
 * Highstock JS v11.4.4 (2024-07-02)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/ao",["highcharts","modules/stock"],function(o){return t(o),t.Highcharts=o,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var o=t?t._modules:{};function r(o,r,e,n){o.hasOwnProperty(r)||(o[r]=n.apply(null,e),"function"==typeof CustomEvent&&t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:r,module:o[r]}})))}r(o,"Stock/Indicators/AO/AOIndicator.js",[o["Core/Globals.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],function(t,o,r){var e,n=this&&this.__extends||(e=function(t,o){return(e=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])})(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}),s=t.noop,i=o.seriesTypes,a=i.column.prototype,l=i.sma,c=r.extend,u=r.merge,p=r.correctFloat,d=r.isArray,f=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return n(o,t),o.prototype.drawGraph=function(){var t,o=this.options,r=this.points,e=this.userOptions.color,n=o.greaterBarColor,s=o.lowerBarColor,i=r[0];if(!e&&i)for(t=1,i.color=n;t<r.length;t++)r[t].y>r[t-1].y?r[t].color=n:r[t].y<r[t-1].y?r[t].color=s:r[t].color=r[t-1].color},o.prototype.getValues=function(t){var o,r,e,n,s,i,a=t.xData||[],l=t.yData||[],c=l.length,u=[],f=[],h=[],y=0,g=0;if(!(a.length<=34)&&d(l[0])&&4===l[0].length){for(s=0;s<33;s++)n=(l[s][1]+l[s][2])/2,s>=29&&(g=p(g+n)),y=p(y+n);for(i=33;i<c;i++)g=p(g+(n=(l[i][1]+l[i][2])/2)),y=p(y+n),o=p(g/5-y/34),u.push([a[i],o]),f.push(a[i]),h.push(o),r=i+1-5,e=i+1-34,g=p(g-(l[r][1]+l[r][2])/2),y=p(y-(l[e][1]+l[e][2])/2);return{values:u,xData:f,yData:h}}},o.defaultOptions=u(l.defaultOptions,{params:{index:void 0,period:void 0},greaterBarColor:"#06b535",lowerBarColor:"#f21313",threshold:0,groupPadding:.2,pointPadding:.2,crisp:!1,states:{hover:{halo:{size:0}}}}),o}(l);return c(f.prototype,{nameBase:"AO",nameComponents:void 0,markerAttribs:s,getColumnMetrics:a.getColumnMetrics,crispCol:a.crispCol,translate:a.translate,drawPoints:a.drawPoints}),o.registerSeriesType("ao",f),f}),r(o,"masters/indicators/ao.src.js",[o["Core/Globals.js"]],function(t){return t})});