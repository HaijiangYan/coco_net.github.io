!/**
 * Highcharts JS v11.4.4 (2024-07-02)
 *
 * Highcharts Drilldown module
 *
 * Author: Torstein Honsi
 * License: www.highcharts.com/license
 *
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/drilldown",["highcharts"],function(i){return t(i),t.Highcharts=i,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var i=t?t._modules:{};function e(i,e,o,r){i.hasOwnProperty(e)||(i[e]=r.apply(null,o),"function"==typeof CustomEvent&&t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:i[e]}})))}e(i,"Extensions/Breadcrumbs/BreadcrumbsDefaults.js",[],function(){return{lang:{mainBreadcrumb:"Main"},options:{buttonTheme:{fill:"none",height:18,padding:2,"stroke-width":0,zIndex:7,states:{select:{fill:"none"}},style:{color:"#334eff"}},buttonSpacing:5,floating:!1,format:void 0,relativeTo:"plotBox",rtl:!1,position:{align:"left",verticalAlign:"top",x:0,y:void 0},separator:{text:"/",style:{color:"#666666",fontSize:"0.8em"}},showFullPath:!0,style:{},useHTML:!1,zIndex:7}}}),e(i,"Extensions/Breadcrumbs/Breadcrumbs.js",[i["Extensions/Breadcrumbs/BreadcrumbsDefaults.js"],i["Core/Templating.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(t,i,e,o){var r=i.format,n=e.composed,s=o.addEvent,l=o.defined,a=o.extend,d=o.fireEvent,p=o.isString,u=o.merge,h=o.objectEach,c=o.pick,m=o.pushUnique;function f(){if(this.breadcrumbs){var t=this.resetZoomButton&&this.resetZoomButton.getBBox(),i=this.breadcrumbs.options;t&&"right"===i.position.align&&"plotBox"===i.relativeTo&&this.breadcrumbs.alignBreadcrumbsGroup(-t.width-i.buttonSpacing)}}function v(){this.breadcrumbs&&(this.breadcrumbs.destroy(),this.breadcrumbs=void 0)}function w(){var t=this.breadcrumbs;if(t&&!t.options.floating&&t.level){var i=t.options,e=i.buttonTheme,o=(e.height||0)+2*(e.padding||0)+i.buttonSpacing,r=i.position.verticalAlign;"bottom"===r?(this.marginBottom=(this.marginBottom||0)+o,t.yOffset=o):"middle"!==r?(this.plotTop+=o,t.yOffset=-o):t.yOffset=void 0}}function g(){this.breadcrumbs&&this.breadcrumbs.redraw()}function b(t){!0===t.resetSelection&&this.breadcrumbs&&this.breadcrumbs.alignBreadcrumbsGroup()}return function(){function i(t,e){this.elementList={},this.isDirty=!0,this.level=0,this.list=[];var o=u(t.options.drilldown&&t.options.drilldown.drillUpButton,i.defaultOptions,t.options.navigation&&t.options.navigation.breadcrumbs,e);this.chart=t,this.options=o||{}}return i.compose=function(i,e){m(n,"Breadcrumbs")&&(s(i,"destroy",v),s(i,"afterShowResetZoom",f),s(i,"getMargins",w),s(i,"redraw",g),s(i,"selection",b),a(e.lang,t.lang))},i.prototype.updateProperties=function(t){this.setList(t),this.setLevel(),this.isDirty=!0},i.prototype.setList=function(t){this.list=t},i.prototype.setLevel=function(){this.level=this.list.length&&this.list.length-1},i.prototype.getLevel=function(){return this.level},i.prototype.getButtonText=function(t){var i=this.chart,e=this.options,o=i.options.lang,n=c(e.format,e.showFullPath?"{level.name}":"← {level.name}"),s=o&&c(o.drillUpText,o.mainBreadcrumb),a=e.formatter&&e.formatter(t)||r(n,{level:t.levelOptions},i)||"";return(p(a)&&!a.length||"← "===a)&&l(s)&&(a=e.showFullPath?s:"← "+s),a},i.prototype.redraw=function(){this.isDirty&&this.render(),this.group&&this.group.align(),this.isDirty=!1},i.prototype.render=function(){var t=this.chart,i=this.options;!this.group&&i&&(this.group=t.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({zIndex:i.zIndex}).add()),i.showFullPath?this.renderFullPathButtons():this.renderSingleButton(),this.alignBreadcrumbsGroup()},i.prototype.renderFullPathButtons=function(){this.destroySingleButton(),this.resetElementListState(),this.updateListElements(),this.destroyListElements()},i.prototype.renderSingleButton=function(){var t=this.chart,i=this.list,e=this.options.buttonSpacing;this.destroyListElements();var o=this.group?this.group.getBBox().width:e,r=i[i.length-2];!t.drillUpButton&&this.level>0?t.drillUpButton=this.renderButton(r,o,e):t.drillUpButton&&(this.level>0?this.updateSingleButton():this.destroySingleButton())},i.prototype.alignBreadcrumbsGroup=function(t){if(this.group){var i=this.options,e=i.buttonTheme,o=i.position,r="chart"===i.relativeTo||"spacingBox"===i.relativeTo?void 0:"plotBox",n=this.group.getBBox(),s=2*(e.padding||0)+i.buttonSpacing;o.width=n.width+s,o.height=n.height+s;var l=u(o);t&&(l.x+=t),this.options.rtl&&(l.x+=o.width),l.y=c(l.y,this.yOffset,0),this.group.align(l,!0,r)}},i.prototype.renderButton=function(t,i,e){var o=this,r=this.chart,n=o.options,s=u(n.buttonTheme),l=r.renderer.button(o.getButtonText(t),i,e,function(i){var e,r=n.events&&n.events.click;r&&(e=r.call(o,i,t)),!1!==e&&(n.showFullPath?i.newLevel=t.level:i.newLevel=o.level-1,d(o,"up",i))},s).addClass("highcharts-breadcrumbs-button").add(o.group);return r.styledMode||l.attr(n.style),l},i.prototype.renderSeparator=function(t,i){var e=this.chart,o=this.options.separator,r=e.renderer.label(o.text,t,i,void 0,void 0,void 0,!1).addClass("highcharts-breadcrumbs-separator").add(this.group);return e.styledMode||r.css(o.style),r},i.prototype.update=function(t){u(!0,this.options,t),this.destroy(),this.isDirty=!0},i.prototype.updateSingleButton=function(){var t=this.chart,i=this.list[this.level-1];t.drillUpButton&&t.drillUpButton.attr({text:this.getButtonText(i)})},i.prototype.destroy=function(){this.destroySingleButton(),this.destroyListElements(!0),this.group&&this.group.destroy(),this.group=void 0},i.prototype.destroyListElements=function(t){var i=this.elementList;h(i,function(e,o){(t||!i[o].updated)&&((e=i[o]).button&&e.button.destroy(),e.separator&&e.separator.destroy(),delete e.button,delete e.separator,delete i[o])}),t&&(this.elementList={})},i.prototype.destroySingleButton=function(){this.chart.drillUpButton&&(this.chart.drillUpButton.destroy(),this.chart.drillUpButton=void 0)},i.prototype.resetElementListState=function(){h(this.elementList,function(t){t.updated=!1})},i.prototype.updateListElements=function(){for(var t,i,e=this.elementList,o=this.options.buttonSpacing,r=this.list,n=this.options.rtl,s=n?-1:1,l=function(t,i){return s*t.getBBox().width+s*i},a=function(t,i,e){t.translate(i-t.getBBox().width,e)},d=this.group?l(this.group,o):o,p=0,u=r.length;p<u;++p){var h=p===u-1,c=void 0,m=void 0;e[(i=r[p]).level]?(c=(t=e[i.level]).button,t.separator||h?t.separator&&h&&(t.separator.destroy(),delete t.separator):(d+=s*o,t.separator=this.renderSeparator(d,o),n&&a(t.separator,d,o),d+=l(t.separator,o)),e[i.level].updated=!0):(c=this.renderButton(i,d,o),n&&a(c,d,o),d+=l(c,o),h||(m=this.renderSeparator(d,o),n&&a(m,d,o),d+=l(m,o)),e[i.level]={button:c,separator:m,updated:!0}),c&&c.setState(h?2:0)}},i.defaultOptions=t.options,i}()}),e(i,"Extensions/Drilldown/DrilldownDefaults.js",[],function(){return{activeAxisLabelStyle:{cursor:"pointer",color:"#0022ff",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",color:"#0022ff",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}},mapZooming:!0}}),e(i,"Extensions/Drilldown/DrilldownSeries.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Utilities.js"]],function(t,i){var e=t.animObject,o=i.addEvent,r=i.extend,n=i.fireEvent,s=i.merge,l=i.pick,a=i.syncTimeout;function d(t,i,e,o){t[e?"addClass":"removeClass"]("highcharts-drilldown-point"),o||t.css({cursor:i})}function p(t){var i,o=this,n=o.chart,s=n.drilldownLevels,a=e((n.options.drilldown||{}).animation),d=this.xAxis,p=n.styledMode;t||((s||[]).forEach(function(t){o.options._ddSeriesId===t.lowerSeriesOptions._ddSeriesId&&(i=t.shapeArgs,!p&&i&&(i.fill=t.color))}),i.x+=l(d.oldPos,d.pos)-d.pos,o.points.forEach(function(t){var e=t.shapeArgs;p||(e.fill=t.color),t.graphic&&t.graphic.attr(i).animate(r(t.shapeArgs,{fill:t.color||o.color}),a)}),n.drilldown&&n.drilldown.fadeInGroup(this.dataLabelsGroup),delete this.animate)}function u(t){var i=this,o=e((i.chart.options.drilldown||{}).animation);(i.trackerGroups||[]).forEach(function(t){i[t]&&i[t].on("mouseover")});var r=i.group,n=r!==i.chart.columnGroup;n&&delete i.group,this.points.forEach(function(e){var l=e.graphic,a=t.shapeArgs;if(l&&a){var d=function(){l.destroy(),r&&n&&(r=r.destroy())};delete e.graphic,i.chart.styledMode||(a.fill=t.color),o.duration?l.animate(a,s(o,{complete:d})):(l.attr(a),d())}})}function h(t){var i=this,e=i.drilldownLevel;t||(i.points.forEach(function(t){var i,e=t.dataLabel;t.graphic&&t.graphic.hide(),e&&(e.hidden="hidden"===e.attr("visibility"),e.hidden||(e.hide(),null===(i=e.connector)||void 0===i||i.hide()))}),a(function(){if(i.points){var t=[];i.data.forEach(function(i){t.push(i)}),i.nodes&&(t=t.concat(i.nodes)),t.forEach(function(t,i){var o,r=i===(e&&e.pointIndex)?"show":"fadeIn",n=t.dataLabel;t.graphic&&t.visible&&t.graphic[r]("show"===r||void 0),n&&!n.hidden&&(n.fadeIn(),null===(o=n.connector)||void 0===o||o.fadeIn())})}},Math.max(i.chart.options.drilldown.animation.duration-50,0)),delete this.animate)}function c(t){var i=this,e=i.chart,o=i.group;e&&o&&i.options&&e.options.drilldown&&e.options.drilldown.animation&&(t&&e.mapView?(o.attr({opacity:.01}),e.mapView.allowTransformAnimation=!1,i.options.inactiveOtherPoints=!0,i.options.enableMouseTracking=!1):(o.animate({opacity:1},e.options.drilldown.animation,function(){i.options&&(i.options.inactiveOtherPoints=!1,i.options.enableMouseTracking=l(i.userOptions&&i.userOptions.enableMouseTracking,!0),i.isDirty=!0,e.redraw())}),e.drilldown&&e.drilldown.fadeInGroup(this.dataLabelsGroup)))}function m(){var t=this.chart;t&&t.mapView&&(t.mapView.allowTransformAnimation=!1),this.options&&(this.options.inactiveOtherPoints=!0)}function f(t){var i=this.chart,e=this.group;i&&e&&(t?(e.attr({opacity:.01}),this.options&&(this.options.inactiveOtherPoints=!0)):(e.animate({opacity:1},(i.options.drilldown||{}).animation),i.drilldown&&i.drilldown.fadeInGroup(this.dataLabelsGroup)))}function v(){return this.drilldown&&!this.unbindDrilldownClick&&(this.unbindDrilldownClick=o(this,"click",g)),this}function w(){var t=this.series,i=t.chart.styledMode;this.drilldown&&t.halo&&"hover"===this.state?d(t.halo,"pointer",!0,i):t.halo&&d(t.halo,"auto",!1,i)}function g(t){var i=this.series;i.xAxis&&!1===(i.chart.options.drilldown||{}).allowPointDrilldown?i.xAxis.drilldownCategory(this.x,t):this.runDrilldown(void 0,void 0,t)}function b(t){var i=t.options||{};i.drilldown&&!this.unbindDrilldownClick?this.unbindDrilldownClick=o(this,"click",g):!i.drilldown&&void 0!==i.drilldown&&this.unbindDrilldownClick&&(this.unbindDrilldownClick=this.unbindDrilldownClick())}function y(){for(var t=this.chart,i=t.options.drilldown.activeDataLabelStyle,e=t.renderer,o=t.styledMode,r=0,n=this.points;r<n.length;r++){var s=n[r],a=s.options.dataLabels,d=l(s.dlOptions,a&&a.style,{});s.drilldown&&s.dataLabel&&("contrast"!==i.color||o||(d.color=e.getContrast(s.color||this.color)),a&&a.color&&(d.color=a.color),s.dataLabel.addClass("highcharts-drilldown-data-label"),o||s.dataLabel.css(i).css(d))}}function D(){for(var t=this.chart.styledMode,i=0,e=this.points;i<e.length;i++){var o=e[i];o.drilldown&&o.graphic&&d(o.graphic,"pointer",!0,t)}}function x(t){var i=this.chart,e=this.points,o=i.drilldownLevels[i.drilldownLevels.length-1],r=i.options.drilldown.animation;if(this.is("item")&&(r.duration=0),this.center){var n=o.shapeArgs,l=n.start,a=(n.end-l)/this.points.length,d=i.styledMode;if(!t){for(var p=void 0,u=void 0,h=0,c=e.length;h<c;++h)p=(u=e[h]).shapeArgs,d||(n.fill=o.color,p.fill=u.color),u.graphic&&u.graphic.attr(s(n,{start:l+h*a,end:l+(h+1)*a}))[r?"animate":"attr"](p,r);i.drilldown&&i.drilldown.fadeInGroup(this.dataLabelsGroup),delete this.animate}}}function S(){this.runDrilldown()}function B(t,i,e){var o,r=this.series,s=r.chart,l=s.options.drilldown||{},a=(l.series||[]).length;for(s.ddDupes||(s.ddDupes=[]),s.colorCounter=s.symbolCounter=0;a--&&!o;)l.series&&l.series[a].id===this.drilldown&&this.drilldown&&-1===s.ddDupes.indexOf(this.drilldown)&&(o=l.series[a],s.ddDupes.push(this.drilldown));n(s,"drilldown",{point:this,seriesOptions:o,category:i,originalEvent:e,points:void 0!==i&&r.xAxis.getDDPoints(i).slice(0)},function(i){var e=i.point.series&&i.point.series.chart,o=i.seriesOptions;e&&o&&(t?e.addSingleSeriesAsDrilldown(i.point,o):e.addSeriesAsDrilldown(i.point,o))})}return{compose:function(t,i){var e=t.prototype.pointClass,r=e.prototype;if(!r.doDrilldown){var n=i.column,s=i.map,l=i.pie;if(o(e,"afterInit",v),o(e,"afterSetState",w),o(e,"update",b),r.doDrilldown=S,r.runDrilldown=B,o(t,"afterDrawDataLabels",y),o(t,"afterDrawTracker",D),n){var a=n.prototype;a.animateDrilldown=p,a.animateDrillupFrom=u,a.animateDrillupTo=h}if(s){var d=s.prototype;d.animateDrilldown=c,d.animateDrillupFrom=m,d.animateDrillupTo=f}if(l){var g=l.prototype;g.animateDrilldown=x,g.animateDrillupFrom=u,g.animateDrillupTo=h}}}}}),e(i,"Extensions/Drilldown/Drilldown.js",[i["Core/Animation/AnimationUtilities.js"],i["Extensions/Breadcrumbs/Breadcrumbs.js"],i["Core/Color/Color.js"],i["Core/Globals.js"],i["Extensions/Drilldown/DrilldownDefaults.js"],i["Extensions/Drilldown/DrilldownSeries.js"],i["Core/Utilities.js"]],function(t,i,e,o,r,n,s){var l,a=t.animObject,d=o.noop,p=s.addEvent,u=s.defined,h=s.diffObjects,c=s.extend,m=s.fireEvent,f=s.merge,v=s.objectEach,w=s.pick,g=s.removeEvent,b=s.syncTimeout,y=1;function D(t,i){this.getDDPoints(t).forEach(function(e){e&&e.series&&e.series.visible&&e.runDrilldown&&e.runDrilldown(!0,t,i)}),this.chart.applyDrilldown()}function x(t){return this.ddPoints&&this.ddPoints[t]||[]}function S(t){var i=[],e=t.drilldownLevels;return e&&e.length&&(i[0]||i.push({level:0,levelOptions:e[0].seriesOptions}),e.forEach(function(t){var e=i[i.length-1];t.levelNumber+1>e.level&&i.push({level:t.levelNumber+1,levelOptions:f({name:t.lowerSeries.name},t.pointOptions)})})),i}var B=function(){function t(t){this.chart=t}return t.prototype.addSeriesAsDrilldown=function(t,i){var e=this.chart||this;if(m(this,"addSeriesAsDrilldown",{seriesOptions:i}),e.mapView){if(t.series.isDrilling=!0,e.series.forEach(function(t){var i;t.options.inactiveOtherPoints=!0,null===(i=t.dataLabelsGroup)||void 0===i||i.destroy(),delete t.dataLabelsGroup}),e.options.drilldown&&!e.mapView.projection.hasGeoProjection&&r&&!u(h(e.options.drilldown,r).mapZooming)&&(e.options.drilldown.mapZooming=!1),e.options.drilldown&&e.options.drilldown.animation&&e.options.drilldown.mapZooming){e.mapView.allowTransformAnimation=!0;var o=a(e.options.drilldown.animation);if("boolean"!=typeof o){var n=o.complete,s=function(o){o&&o.applyDrilldown&&e.mapView&&(e.addSingleSeriesAsDrilldown(t,i),e.applyDrilldown(),e.mapView.allowTransformAnimation=!1)};o.complete=function(){n&&n.apply(this,arguments),s.apply(this,arguments)}}t.zoomTo(o)}else e.addSingleSeriesAsDrilldown(t,i),e.applyDrilldown()}else e.addSingleSeriesAsDrilldown(t,i),e.applyDrilldown()},t.prototype.addSingleSeriesAsDrilldown=function(t,i){var o=this.chart||this,r=t.series,n=r.xAxis,s=r.yAxis,l=o.styledMode?{colorIndex:w(t.colorIndex,r.colorIndex)}:{color:t.color||r.color},a=r.options._levelNumber||0,p=r.points.indexOf(t);o.drilldownLevels||(o.drilldownLevels=[]),i=c(c({_ddSeriesId:y++},l),i);var u,h=[],m=[];(u=o.drilldownLevels[o.drilldownLevels.length-1])&&u.levelNumber!==a&&(u=void 0),r.chart.series.forEach(function(t){t.xAxis===n&&(t.options._ddSeriesId=t.options._ddSeriesId||y++,t.options.colorIndex=t.colorIndex,t.options._levelNumber=t.options._levelNumber||a,u?(h=u.levelSeries,m=u.levelSeriesOptions):(h.push(t),t.purgedOptions=f({_ddSeriesId:t.options._ddSeriesId,_levelNumber:t.options._levelNumber,selected:t.options.selected},t.userOptions),m.push(t.purgedOptions)))});var v=c({levelNumber:a,seriesOptions:r.options,seriesPurgedOptions:r.purgedOptions,levelSeriesOptions:m,levelSeries:h,shapeArgs:t.shapeArgs,bBox:t.graphic?t.graphic.getBBox():{},color:t.isNull?e.parse(l.color).setOpacity(0).get():l.color,lowerSeriesOptions:i,pointOptions:r.options.data[p],pointIndex:p,oldExtremes:{xMin:n&&n.userMin,xMax:n&&n.userMax,yMin:s&&s.userMin,yMax:s&&s.userMax},resetZoomButton:u&&u.levelNumber===a?void 0:o.resetZoomButton},l);o.drilldownLevels.push(v),n&&n.names&&(n.names.length=0);var g=v.lowerSeries=o.addSeries(i,!1);g.options._levelNumber=a+1,n&&(n.oldPos=n.pos,n.userMin=n.userMax=null,s.userMin=s.userMax=null),g.isDrilling=!0,r.type===g.type&&(g.animate=g.animateDrilldown||d,g.options.animation=!0)},t.prototype.applyDrilldown=function(){var t,i,e=this.chart||this,o=e.drilldownLevels;o&&o.length>0&&(i=o[o.length-1].levelNumber,e.hasCartesianSeries=o.some(function(t){return t.lowerSeries.isCartesian}),(e.drilldownLevels||[]).forEach(function(t){e.mapView&&e.options.drilldown&&e.options.drilldown.mapZooming&&(e.redraw(),t.lowerSeries.isDrilling=!1,e.mapView.fitToBounds(t.lowerSeries.bounds),t.lowerSeries.isDrilling=!0),t.levelNumber===i&&t.levelSeries.forEach(function(o){if(e.mapView){if(o.options&&o.options._levelNumber===i&&o.group){var r={};e.options.drilldown&&(r=e.options.drilldown.animation),o.group.animate({opacity:0},r,function(){var i;o.remove(!1),t.levelSeries.filter(function(t){return Object.keys(t).length}).length||(e.resetZoomButton&&(e.resetZoomButton.hide(),delete e.resetZoomButton),null===(i=e.pointer)||void 0===i||i.reset(),m(e,"afterDrilldown"),e.mapView&&(e.series.forEach(function(t){t.isDirtyData=!0,t.isDrilling=!1}),e.mapView.fitToBounds(void 0,void 0),e.mapView.allowTransformAnimation=!0),m(e,"afterApplyDrilldown"))})}}else o.options&&o.options._levelNumber===i&&o.remove(!1)})})),e.mapView||(e.resetZoomButton&&(e.resetZoomButton.hide(),delete e.resetZoomButton),null===(t=e.pointer)||void 0===t||t.reset(),m(e,"afterDrilldown"),e.hasCartesianSeries||e.axes.forEach(function(t){t.destroy(!0),t.init(e,f(t.userOptions,t.options))}),e.redraw(),m(e,"afterApplyDrilldown"))},t.prototype.drillUp=function(t){var i=this.chart||this;if(i.drilldownLevels&&0!==i.drilldownLevels.length){m(i,"beforeDrillUp");var e,o,r,n=i.drilldownLevels,s=n[n.length-1].levelNumber,l=i.series,a=i.drilldownLevels.length,d=function(t,e){var r;if(l.forEach(function(i){i.options._ddSeriesId===t._ddSeriesId&&(r=i)}),(r=r||i.addSeries(t,!1)).type===e.type&&r.animateDrillupTo&&(r.animate=r.animateDrillupTo),t===o.seriesPurgedOptions)return r},p=function(t){t.remove(!1),i.series.forEach(function(t){t.colorAxis&&(t.isDirtyData=!0),t.options.inactiveOtherPoints=!1}),i.redraw()},u=n.length;for(i.symbolCounter=i.colorCounter=0;u--;)!function(){var h,c;if((o=n[u]).levelNumber===s){if(n.pop(),!(h=o.lowerSeries).chart){for(e=l.length;e--;)if(l[e].options.id===o.lowerSeriesOptions.id&&l[e].options._levelNumber===s+1){h=l[e];break}}h.xData=[],h.xAxis&&h.xAxis.names&&(0===a||u===a-1)&&(h.xAxis.names.length=0),o.levelSeriesOptions.forEach(function(t){var i=d(t,h);i&&(c=i)}),m(i,"drillup",{seriesOptions:o.seriesPurgedOptions||o.seriesOptions}),c&&(c.type===h.type&&(c.drilldownLevel=o,c.options.animation=i.options.drilldown.animation,h.animateDrillupFrom&&h.chart&&h.animateDrillupFrom(o)),c.options._levelNumber=s);var f=h;if(i.mapView||f.remove(!1),c&&c.xAxis&&(r=o.oldExtremes,c.xAxis.setExtremes(r.xMin,r.xMax,!1),c.yAxis.setExtremes(r.yMin,r.yMax,!1)),o.resetZoomButton&&(i.resetZoomButton=o.resetZoomButton),i.mapView){var v=o.levelNumber===s&&t,g=i.options.drilldown&&i.options.drilldown.animation&&i.options.drilldown.mapZooming;v?h.remove(!1):(h.dataLabelsGroup&&(h.dataLabelsGroup.destroy(),delete h.dataLabelsGroup),i.mapView&&c&&(g&&(h.isDrilling=!0,c.isDrilling=!0,i.redraw(!1),i.mapView.fitToBounds(h.bounds,void 0,!0,!1)),i.mapView.allowTransformAnimation=!0,m(i,"afterDrillUp",{seriesOptions:c?c.userOptions:void 0}),g?(i.mapView.setView(void 0,w(i.mapView.minZoom,1),!0,{complete:function(){Object.prototype.hasOwnProperty.call(this,"complete")&&p(h)}}),c._hasTracking=!1):(i.mapView.allowTransformAnimation=!1,h.group?h.group.animate({opacity:0},i.options.drilldown.animation,function(){p(h),i.mapView&&(i.mapView.allowTransformAnimation=!0)}):(p(h),i.mapView.allowTransformAnimation=!0)),c.isDrilling=!1))}else m(i,"afterDrillUp")}}();i.mapView||i.redraw(),i.ddDupes&&(i.ddDupes.length=0),m(i,"drillupall")}},t.prototype.fadeInGroup=function(t){var i=a(this.chart.options.drilldown.animation);t&&(t.hide(),b(function(){t&&t.added&&t.fadeIn()},Math.max(i.duration-50,0)))},t.prototype.update=function(t,i){var e=this.chart;f(!0,e.options.drilldown,t),w(i,!0)&&e.redraw()},t}();return function(t){function e(t){for(var i=this.chart,e=this.getLevel()-t.newLevel,o=e>1,r=0;r<e;r++)r===e-1&&(o=!1),i.drillUp(o)}function o(){var t=this.options.drilldown,e=t&&t.breadcrumbs;this.breadcrumbs||(this.breadcrumbs=new i(this,e)),this.breadcrumbs.updateProperties(S(this))}function s(){this.breadcrumbs&&this.breadcrumbs.updateProperties(S(this))}function l(){this.drilldown=new B(this)}function a(){this.resetZoomButton&&(this.resetZoomButton=this.resetZoomButton.destroy())}function d(){this.resetZoomButton&&this.showResetZoom()}function u(){(this.xAxis||[]).forEach(function(t){t.ddPoints={},t.series.forEach(function(i){for(var e=i.xData||[],o=i.points,r=0,n=e.length,s=void 0;r<n;r++)if("number"!=typeof(s=i.options.data[r])&&(s=i.pointClass.prototype.optionsToObject.call({series:i},s)).drilldown){t.ddPoints[e[r]]||(t.ddPoints[e[r]]=[]);var l=r-(i.cropStart||0);t.ddPoints[e[r]].push(!o||!(l>=0)||!(l<o.length)||o[l])}}),v(t.ticks,function(t){return t.drillable()})})}function h(t){var i=this.breadcrumbs,e=t.options.drilldown&&t.options.drilldown.breadcrumbs;i&&e&&i.update(e)}function c(t){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:w(this.newOpacity,1)},t||{duration:250})}function m(){var t=this.pos,i=this.label,e=this.axis,o="xAxis"===e.coll&&e.getDDPoints,r=o&&e.getDDPoints(t),n=e.chart.styledMode;o&&(i&&r&&r.length?(i.drillable=!0,i.basicStyles||n||(i.basicStyles=f(i.styles)),i.addClass("highcharts-drilldown-axis-label"),i.removeOnDrillableClick&&g(i.element,"click"),i.removeOnDrillableClick=p(i.element,"click",function(i){i.preventDefault(),e.drilldownCategory(t,i)}),!n&&e.chart.options.drilldown&&i.css(e.chart.options.drilldown.activeAxisLabelStyle||{})):i&&i.drillable&&i.removeOnDrillableClick&&(n||(i.styles={},i.element.removeAttribute("style"),i.css(i.basicStyles)),i.removeOnDrillableClick(),i.removeClass("highcharts-drilldown-axis-label")))}t.compose=function(t,f,v,w,g,b,y){n.compose(w,g);var S=f.prototype;if(!S.drillUp){var L=b.prototype.Element,O=B.prototype,A=t.prototype,E=L.prototype,C=y.prototype;A.drilldownCategory=D,A.getDDPoints=x,i.compose(f,v),p(i,"up",e),S.addSeriesAsDrilldown=O.addSeriesAsDrilldown,S.addSingleSeriesAsDrilldown=O.addSingleSeriesAsDrilldown,S.applyDrilldown=O.applyDrilldown,S.drillUp=O.drillUp,p(f,"afterDrilldown",o),p(f,"afterDrillUp",s),p(f,"afterInit",l),p(f,"drillup",a),p(f,"drillupall",d),p(f,"render",u),p(f,"update",h),v.drilldown=r,E.fadeIn=c,C.drillable=m}}}(l||(l={})),l}),e(i,"masters/modules/drilldown.src.js",[i["Core/Globals.js"],i["Extensions/Drilldown/Drilldown.js"],i["Extensions/Breadcrumbs/Breadcrumbs.js"]],function(t,i,e){return t.Breadcrumbs=t.Breadcrumbs||e,i.compose(t.Axis,t.Chart,t.defaultOptions,t.Series,t.seriesTypes,t.SVGRenderer,t.Tick),t})});