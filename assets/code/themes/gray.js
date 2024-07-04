!/**
 * Highcharts JS v11.4.4 (2024-07-02)
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(o){"object"==typeof module&&module.exports?(o.default=o,module.exports=o):"function"==typeof define&&define.amd?define("highcharts/themes/gray",["highcharts"],function(e){return o(e),o.Highcharts=e,o}):o("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(o){"use strict";var e=o?o._modules:{};function r(e,r,l,t){e.hasOwnProperty(r)||(e[r]=t.apply(null,l),"function"==typeof CustomEvent&&o.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:r,module:e[r]}})))}r(e,"Extensions/Themes/Gray.js",[e["Core/Defaults.js"]],function(o){var e,r;let{setOptions:l}=o;return(r=e||(e={})).options={colors:["#DDDF0D","#7798BF","#55BF3B","#DF5353","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"rgb(96, 96, 96)"],[1,"rgb(16, 16, 16)"]]},borderWidth:0,borderRadius:0,plotBackgroundColor:null,plotShadow:!1,plotBorderWidth:0},title:{style:{color:"#FFF",font:"16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}},subtitle:{style:{color:"#DDD",font:"12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}},xAxis:{gridLineWidth:0,lineColor:"#999",tickColor:"#999",labels:{style:{color:"#999",fontWeight:"bold"}},title:{style:{color:"#AAA",font:"bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}}},yAxis:{alternateGridColor:null,minorTickInterval:null,gridLineColor:"rgba(255, 255, 255, .1)",minorGridLineColor:"rgba(255,255,255,0.07)",lineWidth:0,tickWidth:0,labels:{style:{color:"#999",fontWeight:"bold"}},title:{style:{color:"#AAA",font:"bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}}},legend:{backgroundColor:"rgba(48, 48, 48, 0.8)",itemStyle:{color:"#CCC"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#333"},title:{style:{color:"#E0E0E0"}}},tooltip:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"rgba(96, 96, 96, .8)"],[1,"rgba(16, 16, 16, .8)"]]},borderWidth:0,style:{color:"#FFF"}},plotOptions:{series:{dataLabels:{color:"#444"},nullColor:"#444444"},line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}},r.apply=function(){l(r.options)},e}),r(e,"masters/themes/gray.src.js",[e["Core/Globals.js"],e["Extensions/Themes/Gray.js"]],function(o,e){return o.theme=e.options,e.apply(),o})});