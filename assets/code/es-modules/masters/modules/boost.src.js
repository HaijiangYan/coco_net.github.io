/**
 * @license Highcharts JS v11.4.4 (2024-07-02)
 * @module highcharts/modules/boost
 * @requires highcharts
 *
 * Boost module
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Torstein Honsi
 *
 * License: www.highcharts.com/license
 *
 * */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Boost from '../../Extensions/Boost/Boost.js';
const G = Highcharts;
G.hasWebGLSupport = Boost.hasWebGLSupport;
Boost.compose(G.Chart, G.Axis, G.Series, G.seriesTypes, G.Color);
export default Highcharts;
