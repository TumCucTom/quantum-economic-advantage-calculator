import {
    b as Ct
} from "./Models-F5kqfqlD.js";
import {
    r as Mt
} from "./highcharts-vue.min-slr4qoxA.js";
var St = Mt();
const Tt = Ct(St);
var At = {
    exports: {}
};
(function(Pt) {
    (function(gt) {
        Pt.exports ? (gt.default = gt, Pt.exports = gt) : gt(typeof Highcharts < "u" ? Highcharts : void 0)
    })(function(gt) {
        var p = gt ? gt._modules : {};

        function tt(v, S, L, N) {
            v.hasOwnProperty(S) || (v[S] = N.apply(null, L), typeof CustomEvent == "function" && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
                detail: {
                    path: S,
                    module: v[S]
                }
            })))
        }
        tt(p, "Extensions/Pane.js", [p["Core/Chart/Chart.js"], p["Series/CenteredUtilities.js"], p["Core/Globals.js"], p["Core/Pointer.js"], p["Core/Utilities.js"]], function(v, S, L, N, x) {
            let {
                addEvent: d,
                correctFloat: k,
                defined: r,
                extend: f,
                merge: h,
                pick: y,
                splat: M
            } = x;
            v.prototype.collectionsWithUpdate.push("pane");
            class a {
                constructor(i, t) {
                    this.background = void 0, this.center = void 0, this.chart = void 0, this.options = void 0, this.coll = "pane", this.defaultOptions = {
                        center: ["50%", "50%"],
                        size: "85%",
                        innerSize: "0%",
                        startAngle: 0
                    }, this.defaultBackgroundOptions = {
                        shape: "circle",
                        borderWidth: 1,
                        borderColor: "#cccccc",
                        backgroundColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, "#ffffff"],
                                [1, "#e6e6e6"]
                            ]
                        },
                        from: -Number.MAX_VALUE,
                        innerRadius: 0,
                        to: Number.MAX_VALUE,
                        outerRadius: "105%"
                    }, this.init(i, t)
                }
                init(i, t) {
                    this.chart = t, this.background = [], t.pane.push(this), this.setOptions(i)
                }
                setOptions(i) {
                    this.options = i = h(this.defaultOptions, this.chart.angular ? {
                        background: {}
                    } : void 0, i)
                }
                render() {
                    let i = this.options,
                        t = this.options.background,
                        o = this.chart.renderer,
                        e, s;
                    if (this.group || (this.group = o.g("pane-group").attr({
                        zIndex: i.zIndex || 0
                    }).add()), this.updateCenter(), t)
                        for (s = 0, e = Math.max((t = M(t)).length, this.background.length || 0); s < e; s++) t[s] && this.axis ? this.renderBackground(h(this.defaultBackgroundOptions, t[s]), s) : this.background[s] && (this.background[s] = this.background[s].destroy(), this.background.splice(s, 1))
                }
                renderBackground(i, t) {
                    let o = "animate",
                        e = {
                            class: "highcharts-pane " + (i.className || "")
                        };
                    this.chart.styledMode || f(e, {
                        fill: i.backgroundColor,
                        stroke: i.borderColor,
                        "stroke-width": i.borderWidth
                    }), this.background[t] || (this.background[t] = this.chart.renderer.path().add(this.group), o = "attr"), this.background[t][o]({
                        d: this.axis.getPlotBandPath(i.from, i.to, i)
                    }).attr(e)
                }
                updateCenter(i) {
                    this.center = (i || this.axis || {}).center = S.getCenter.call(this)
                }
                update(i, t) {
                    h(!0, this.options, i), this.setOptions(this.options), this.render(), this.chart.axes.forEach(function(o) {
                        o.pane === this && (o.pane = null, o.update({}, t))
                    }, this)
                }
            }

            function c(n, i, t, o, e) {
                let s = !0,
                    C = t[0],
                    m = t[1],
                    O = Math.sqrt(Math.pow(n - C, 2) + Math.pow(i - m, 2));
                if (r(o) && r(e)) {
                    let j = Math.atan2(k(i - m, 8), k(n - C, 8));
                    e !== o && (s = o > e ? j >= o && j <= Math.PI || j <= e && j >= -Math.PI : j >= o && j <= k(e, 8))
                }
                return O <= Math.ceil(t[2] / 2) && s
            }
            return v.prototype.getHoverPane = function(n) {
                let i, t = this;
                return n && t.pane.forEach(o => {
                    let e = n.chartX - t.plotLeft,
                        s = n.chartY - t.plotTop;
                    c(e, s, o.center) && (i = o)
                }), i
            }, d(v, "afterIsInsidePlot", function(n) {
                this.polar && (n.options.inverted && ([n.x, n.y] = [n.y, n.x]), n.isInsidePlot = this.pane.some(i => c(n.x, n.y, i.center, i.axis && i.axis.normalizedStartAngleRad, i.axis && i.axis.normalizedEndAngleRad)))
            }), d(N, "beforeGetHoverData", function(n) {
                let i = this.chart;
                i.polar ? (i.hoverPane = i.getHoverPane(n), n.filter = function(t) {
                    return t.visible && !(!n.shared && t.directTouch) && y(t.options.enableMouseTracking, !0) && (!i.hoverPane || t.xAxis.pane === i.hoverPane)
                }) : i.hoverPane = void 0
            }), d(N, "afterGetHoverData", function(n) {
                let i = this.chart;
                n.hoverPoint && n.hoverPoint.plotX && n.hoverPoint.plotY && i.hoverPane && !c(n.hoverPoint.plotX, n.hoverPoint.plotY, i.hoverPane.center) && (n.hoverPoint = void 0)
            }), L.Pane = a, a
        }), tt(p, "Series/AreaRange/AreaRangePoint.js", [p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                area: {
                    prototype: {
                        pointClass: L,
                        pointClass: {
                            prototype: N
                        }
                    }
                }
            } = v.seriesTypes, {
                defined: x,
                isNumber: d,
                merge: k
            } = S;
            return class extends L {
                constructor() {
                    super(...arguments), this.high = void 0, this.low = void 0, this.options = void 0, this.plotX = void 0, this.series = void 0
                }
                setState() {
                    let r = this.state,
                        f = this.series,
                        h = f.chart.polar;
                    f.options.marker, f.symbol, x(this.plotHigh) || (this.plotHigh = f.yAxis.toPixels(this.high, !0)), x(this.plotLow) || (this.plotLow = this.plotY = f.yAxis.toPixels(this.low, !0)), f.lowerStateMarkerGraphic = f.stateMarkerGraphic, f.stateMarkerGraphic = f.upperStateMarkerGraphic, this.graphic = this.graphics && this.graphics[1], this.plotY = this.plotHigh, h && d(this.plotHighX) && (this.plotX = this.plotHighX), N.setState.apply(this, arguments), this.state = r, this.plotY = this.plotLow, this.graphic = this.graphics && this.graphics[0], h && d(this.plotLowX) && (this.plotX = this.plotLowX), f.upperStateMarkerGraphic = f.stateMarkerGraphic, f.stateMarkerGraphic = f.lowerStateMarkerGraphic, f.lowerStateMarkerGraphic = void 0;
                    let y = f.modifyMarkerSettings();
                    N.setState.apply(this, arguments), f.restoreMarkerSettings(y)
                }
                haloPath() {
                    let r = this.series.chart.polar,
                        f = [];
                    return this.plotY = this.plotLow, r && d(this.plotLowX) && (this.plotX = this.plotLowX), this.isInside && (f = N.haloPath.apply(this, arguments)), this.plotY = this.plotHigh, r && d(this.plotHighX) && (this.plotX = this.plotHighX), this.isTopInside && (f = f.concat(N.haloPath.apply(this, arguments))), f
                }
                isValid() {
                    return d(this.low) && d(this.high)
                }
            }
        }), tt(p, "Series/AreaRange/AreaRangeSeries.js", [p["Series/AreaRange/AreaRangePoint.js"], p["Core/Globals.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L, N) {
            let {
                noop: x
            } = S, {
                area: d,
                area: {
                    prototype: k
                },
                column: {
                    prototype: r
                }
            } = L.seriesTypes, {
                addEvent: f,
                defined: h,
                extend: y,
                isArray: M,
                isNumber: a,
                pick: c,
                merge: n
            } = N;
            class i extends d {
                constructor() {
                    super(...arguments), this.data = void 0, this.options = void 0, this.points = void 0, this.lowerStateMarkerGraphic = void 0, this.xAxis = void 0
                }
                toYData(o) {
                    return [o.low, o.high]
                }
                highToXY(o) {
                    let e = this.chart,
                        s = this.xAxis.postTranslate(o.rectPlotX || 0, this.yAxis.len - (o.plotHigh || 0));
                    o.plotHighX = s.x - e.plotLeft, o.plotHigh = s.y - e.plotTop, o.plotLowX = o.plotX
                }
                getGraphPath(o) {
                    let e = [],
                        s = [],
                        C = k.getGraphPath,
                        m = this.options,
                        O = this.chart.polar,
                        j = O && m.connectEnds !== !1,
                        z = m.connectNulls,
                        F, w, B, Y = m.step;
                    for (F = (o = o || this.points).length; F--;) {
                        w = o[F];
                        let g = O ? {
                            plotX: w.rectPlotX,
                            plotY: w.yBottom,
                            doCurve: !1
                        } : {
                            plotX: w.plotX,
                            plotY: w.plotY,
                            doCurve: !1
                        };
                        w.isNull || j || z || o[F + 1] && !o[F + 1].isNull || s.push(g), B = {
                            polarPlotY: w.polarPlotY,
                            rectPlotX: w.rectPlotX,
                            yBottom: w.yBottom,
                            plotX: c(w.plotHighX, w.plotX),
                            plotY: w.plotHigh,
                            isNull: w.isNull
                        }, s.push(B), e.push(B), w.isNull || j || z || o[F - 1] && !o[F - 1].isNull || s.push(g)
                    }
                    let l = C.call(this, o);
                    Y && (Y === !0 && (Y = "left"), m.step = {
                        left: "right",
                        center: "center",
                        right: "left"
                    } [Y]);
                    let P = C.call(this, e),
                        b = C.call(this, s);
                    m.step = Y;
                    let u = [].concat(l, P);
                    return !this.chart.polar && b[0] && b[0][0] === "M" && (b[0] = ["L", b[0][1], b[0][2]]), this.graphPath = u, this.areaPath = l.concat(b), u.isArea = !0, u.xMap = l.xMap, this.areaPath.xMap = l.xMap, u
                }
                drawDataLabels() {
                    var B, Y;
                    let o, e, s, C, m, O = this.points,
                        j = O.length,
                        z = [],
                        F = this.options.dataLabels,
                        w = this.chart.inverted;
                    if (F) {
                        if (M(F) ? (C = F[0] || {
                            enabled: !1
                        }, m = F[1] || {
                            enabled: !1
                        }) : ((C = y({}, F)).x = F.xHigh, C.y = F.yHigh, (m = y({}, F)).x = F.xLow, m.y = F.yLow), C.enabled || ((B = this.hasDataLabels) == null ? void 0 : B.call(this))) {
                            for (o = j; o--;)
                                if (e = O[o]) {
                                    let {
                                        plotHigh: l = 0,
                                        plotLow: P = 0
                                    } = e;
                                    s = C.inside ? l < P : l > P, e.y = e.high, e._plotY = e.plotY, e.plotY = l, z[o] = e.dataLabel, e.dataLabel = e.dataLabelUpper, e.below = s, w ? C.align || (C.align = s ? "right" : "left") : C.verticalAlign || (C.verticalAlign = s ? "top" : "bottom")
                                } for (this.options.dataLabels = C, k.drawDataLabels && k.drawDataLabels.apply(this, arguments), o = j; o--;)(e = O[o]) && (e.dataLabelUpper = e.dataLabel, e.dataLabel = z[o], delete e.dataLabels, e.y = e.low, e.plotY = e._plotY)
                        }
                        if (m.enabled || (Y = this.hasDataLabels) != null && Y.call(this)) {
                            for (o = j; o--;)
                                if (e = O[o]) {
                                    let {
                                        plotHigh: l = 0,
                                        plotLow: P = 0
                                    } = e;
                                    s = m.inside ? l < P : l > P, e.below = !s, w ? m.align || (m.align = s ? "left" : "right") : m.verticalAlign || (m.verticalAlign = s ? "bottom" : "top")
                                } this.options.dataLabels = m, k.drawDataLabels && k.drawDataLabels.apply(this, arguments)
                        }
                        if (C.enabled)
                            for (o = j; o--;)(e = O[o]) && (e.dataLabels = [e.dataLabelUpper, e.dataLabel].filter(function(l) {
                                return !!l
                            }));
                        this.options.dataLabels = F
                    }
                }
                alignDataLabel() {
                    r.alignDataLabel.apply(this, arguments)
                }
                modifyMarkerSettings() {
                    let o = {
                        marker: this.options.marker,
                        symbol: this.symbol
                    };
                    if (this.options.lowMarker) {
                        let {
                            options: {
                                marker: e,
                                lowMarker: s
                            }
                        } = this;
                        this.options.marker = n(e, s), s.symbol && (this.symbol = s.symbol)
                    }
                    return o
                }
                restoreMarkerSettings(o) {
                    this.options.marker = o.marker, this.symbol = o.symbol
                }
                drawPoints() {
                    let o, e, s = this.points.length,
                        C = this.modifyMarkerSettings();
                    for (k.drawPoints.apply(this, arguments), this.restoreMarkerSettings(C), o = 0; o < s;)(e = this.points[o]).graphics = e.graphics || [], e.origProps = {
                        plotY: e.plotY,
                        plotX: e.plotX,
                        isInside: e.isInside,
                        negative: e.negative,
                        zone: e.zone,
                        y: e.y
                    }, (e.graphic || e.graphics[0]) && (e.graphics[0] = e.graphic), e.graphic = e.graphics[1], e.plotY = e.plotHigh, h(e.plotHighX) && (e.plotX = e.plotHighX), e.y = c(e.high, e.origProps.y), e.negative = e.y < (this.options.threshold || 0), this.zones.length && (e.zone = e.getZone()), this.chart.polar || (e.isInside = e.isTopInside = e.plotY !== void 0 && e.plotY >= 0 && e.plotY <= this.yAxis.len && e.plotX >= 0 && e.plotX <= this.xAxis.len), o++;
                    for (k.drawPoints.apply(this, arguments), o = 0; o < s;)(e = this.points[o]).graphics = e.graphics || [], (e.graphic || e.graphics[1]) && (e.graphics[1] = e.graphic), e.graphic = e.graphics[0], e.origProps && (y(e, e.origProps), delete e.origProps), o++
                }
                hasMarkerChanged(o, e) {
                    let s = o.lowMarker,
                        C = e.lowMarker || {};
                    return s && (s.enabled === !1 || C.symbol !== s.symbol || C.height !== s.height || C.width !== s.width) || super.hasMarkerChanged(o, e)
                }
            }
            return i.defaultOptions = n(d.defaultOptions, {
                lineWidth: 1,
                threshold: null,
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
                },
                trackByArea: !0,
                dataLabels: {
                    align: void 0,
                    verticalAlign: void 0,
                    xLow: 0,
                    xHigh: 0,
                    yLow: 0,
                    yHigh: 0
                }
            }), f(i, "afterTranslate", function() {
                this.pointArrayMap.join(",") === "low,high" && this.points.forEach(t => {
                    let o = t.high,
                        e = t.plotY;
                    t.isNull ? t.plotY = void 0 : (t.plotLow = e, t.plotHigh = a(o) ? this.yAxis.translate(this.dataModify ? this.dataModify.modifyValue(o) : o, !1, !0, void 0, !0) : void 0, this.dataModify && (t.yBottom = t.plotHigh))
                })
            }, {
                order: 0
            }), f(i, "afterTranslate", function() {
                this.chart.inverted, this.points.forEach(t => {
                    if (this.chart.polar) this.highToXY(t), t.plotLow = t.plotY, t.tooltipPos = [((t.plotHighX || 0) + (t.plotLowX || 0)) / 2, ((t.plotHigh || 0) + (t.plotLow || 0)) / 2];
                    else {
                        let o = t.pos(!1, t.plotLow),
                            e = t.pos(!1, t.plotHigh);
                        o && e && (o[0] = (o[0] + e[0]) / 2, o[1] = (o[1] + e[1]) / 2), t.tooltipPos = o
                    }
                })
            }, {
                order: 3
            }), y(i.prototype, {
                deferTranslatePolar: !0,
                pointArrayMap: ["low", "high"],
                pointClass: v,
                pointValKey: "low",
                setStackedPoints: x
            }), L.registerSeriesType("arearange", i), i
        }), tt(p, "Series/AreaSplineRange/AreaSplineRangeSeries.js", [p["Series/AreaRange/AreaRangeSeries.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L) {
            let {
                spline: {
                    prototype: N
                }
            } = S.seriesTypes, {
                merge: x,
                extend: d
            } = L;
            class k extends v {
                constructor() {
                    super(...arguments), this.options = void 0, this.data = void 0, this.points = void 0
                }
            }
            return k.defaultOptions = x(v.defaultOptions), d(k.prototype, {
                getPointSpline: N.getPointSpline
            }), S.registerSeriesType("areasplinerange", k), k
        }), tt(p, "Series/BoxPlot/BoxPlotSeriesDefaults.js", [], function() {
            return {
                threshold: null,
                tooltip: {
                    pointFormat: '<span style="color:{point.color}">●</span> <b>{series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
                },
                whiskerLength: "50%",
                fillColor: "#ffffff",
                lineWidth: 1,
                medianWidth: 2,
                whiskerWidth: 2
            }
        }), tt(p, "Series/BoxPlot/BoxPlotSeries.js", [p["Series/BoxPlot/BoxPlotSeriesDefaults.js"], p["Series/Column/ColumnSeries.js"], p["Core/Globals.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L, N, x) {
            let {
                noop: d
            } = L, {
                extend: k,
                merge: r,
                pick: f
            } = x;
            class h extends S {
                constructor() {
                    super(...arguments), this.data = void 0, this.options = void 0, this.points = void 0
                }
                pointAttribs() {
                    return {}
                }
                translate() {
                    let M = this.yAxis,
                        a = this.pointArrayMap;
                    super.translate.apply(this), this.points.forEach(function(c) {
                        a.forEach(function(n) {
                            c[n] !== null && (c[n + "Plot"] = M.translate(c[n], 0, 1, 0, 1))
                        }), c.plotHigh = c.highPlot
                    })
                }
                drawPoints() {
                    let M = this.points,
                        a = this.options,
                        c = this.chart,
                        n = c.renderer,
                        i = this.doQuartiles !== !1,
                        t = this.options.whiskerLength,
                        o, e, s, C, m, O, j, z = 0,
                        F, w, B, Y, l, P, b;
                    for (let u of M) {
                        w = u.graphic;
                        let g = w ? "animate" : "attr",
                            T = u.shapeArgs,
                            D = {},
                            E = {},
                            A = {},
                            X = {},
                            U = u.color || this.color;
                        if (u.plotY !== void 0) {
                            let I;
                            B = Math.round(T.width), l = (Y = Math.floor(T.x)) + B, P = Math.round(B / 2), o = Math.floor(i ? u.q1Plot : u.lowPlot), e = Math.floor(i ? u.q3Plot : u.lowPlot), s = Math.floor(u.highPlot), C = Math.floor(u.lowPlot), w || (u.graphic = w = n.g("point").add(this.group), u.stem = n.path().addClass("highcharts-boxplot-stem").add(w), t && (u.whiskers = n.path().addClass("highcharts-boxplot-whisker").add(w)), i && (u.box = n.path(F).addClass("highcharts-boxplot-box").add(w)), u.medianShape = n.path(O).addClass("highcharts-boxplot-median").add(w)), c.styledMode || (E.stroke = u.stemColor || a.stemColor || U, E["stroke-width"] = f(u.stemWidth, a.stemWidth, a.lineWidth), E.dashstyle = u.stemDashStyle || a.stemDashStyle || a.dashStyle, u.stem.attr(E), t && (A.stroke = u.whiskerColor || a.whiskerColor || U, A["stroke-width"] = f(u.whiskerWidth, a.whiskerWidth, a.lineWidth), A.dashstyle = u.whiskerDashStyle || a.whiskerDashStyle || a.dashStyle, u.whiskers.attr(A)), i && (D.fill = u.fillColor || a.fillColor || U, D.stroke = a.lineColor || U, D["stroke-width"] = a.lineWidth || 0, D.dashstyle = u.boxDashStyle || a.boxDashStyle || a.dashStyle, u.box.attr(D)), X.stroke = u.medianColor || a.medianColor || U, X["stroke-width"] = f(u.medianWidth, a.medianWidth, a.lineWidth), X.dashstyle = u.medianDashStyle || a.medianDashStyle || a.dashStyle, u.medianShape.attr(X)), I = [
                                ["M", z = Y + P + (j = u.stem.strokeWidth() % 2 / 2), e],
                                ["L", z, s],
                                ["M", z, o],
                                ["L", z, C]
                            ], u.stem[g]({
                                d: I
                            }), i && (o = Math.floor(o) + (j = u.box.strokeWidth() % 2 / 2), e = Math.floor(e) + j, Y += j, l += j, I = [
                                ["M", Y, e],
                                ["L", Y, o],
                                ["L", l, o],
                                ["L", l, e],
                                ["L", Y, e],
                                ["Z"]
                            ], u.box[g]({
                                d: I
                            })), t && (s += j = u.whiskers.strokeWidth() % 2 / 2, C += j, I = [
                                ["M", z - (b = /%$/.test(t) ? P * parseFloat(t) / 100 : t / 2), s],
                                ["L", z + b, s],
                                ["M", z - b, C],
                                ["L", z + b, C]
                            ], u.whiskers[g]({
                                d: I
                            })), I = [
                                ["M", Y, m = Math.round(u.medianPlot) + (j = u.medianShape.strokeWidth() % 2 / 2)],
                                ["L", l, m]
                            ], u.medianShape[g]({
                                d: I
                            })
                        }
                    }
                }
                toYData(M) {
                    return [M.low, M.q1, M.median, M.q3, M.high]
                }
            }
            return h.defaultOptions = r(S.defaultOptions, v), k(h.prototype, {
                pointArrayMap: ["low", "q1", "median", "q3", "high"],
                pointValKey: "high",
                drawDataLabels: d,
                setStackedPoints: d
            }), N.registerSeriesType("boxplot", h), h
        }), tt(p, "Series/Bubble/BubbleLegendDefaults.js", [], function() {
            return {
                borderColor: void 0,
                borderWidth: 2,
                className: void 0,
                color: void 0,
                connectorClassName: void 0,
                connectorColor: void 0,
                connectorDistance: 60,
                connectorWidth: 1,
                enabled: !1,
                labels: {
                    className: void 0,
                    allowOverlap: !1,
                    format: "",
                    formatter: void 0,
                    align: "right",
                    style: {
                        fontSize: "0.9em",
                        color: "#000000"
                    },
                    x: 0,
                    y: 0
                },
                maxSize: 60,
                minSize: 10,
                legendIndex: 0,
                ranges: {
                    value: void 0,
                    borderColor: void 0,
                    color: void 0,
                    connectorColor: void 0
                },
                sizeBy: "area",
                sizeByAbsoluteValue: !1,
                zIndex: 1,
                zThreshold: 0
            }
        }), tt(p, "Series/Bubble/BubbleLegendItem.js", [p["Core/Color/Color.js"], p["Core/Templating.js"], p["Core/Globals.js"], p["Core/Utilities.js"]], function(v, S, L, N) {
            let {
                parse: x
            } = v, {
                noop: d
            } = L, {
                arrayMax: k,
                arrayMin: r,
                isNumber: f,
                merge: h,
                pick: y,
                stableSort: M
            } = N;
            return class {
                constructor(a, c) {
                    this.chart = void 0, this.legend = void 0, this.maxLabel = void 0, this.movementX = void 0, this.ranges = void 0, this.selected = void 0, this.visible = void 0, this.symbols = void 0, this.options = void 0, this.setState = d, this.init(a, c)
                }
                init(a, c) {
                    this.options = a, this.visible = !0, this.chart = c.chart, this.legend = c
                }
                addToLegend(a) {
                    a.splice(this.options.legendIndex, 0, this)
                }
                drawLegendSymbol(a) {
                    let c;
                    this.chart;
                    let n = y(a.options.itemDistance, 20),
                        i = this.legendItem || {},
                        t = this.options,
                        o = t.ranges,
                        e = t.connectorDistance;
                    if (!o || !o.length || !f(o[0].value)) {
                        a.options.bubbleLegend.autoRanges = !0;
                        return
                    }
                    M(o, function(O, j) {
                        return j.value - O.value
                    }), this.ranges = o, this.setOptions(), this.render();
                    let s = this.getMaxLabelSize(),
                        C = this.ranges[0].radius,
                        m = 2 * C;
                    c = (c = e - C + s.width) > 0 ? c : 0, this.maxLabel = s, this.movementX = t.labels.align === "left" ? c : 0, i.labelWidth = m + c + n, i.labelHeight = m + s.height / 2
                }
                setOptions() {
                    let a = this.ranges,
                        c = this.options,
                        n = this.chart.series[c.seriesIndex],
                        i = this.legend.baseline,
                        t = {
                            zIndex: c.zIndex,
                            "stroke-width": c.borderWidth
                        },
                        o = {
                            zIndex: c.zIndex,
                            "stroke-width": c.connectorWidth
                        },
                        e = {
                            align: this.legend.options.rtl || c.labels.align === "left" ? "right" : "left",
                            zIndex: c.zIndex
                        },
                        s = n.options.marker.fillOpacity,
                        C = this.chart.styledMode;
                    a.forEach(function(m, O) {
                        C || (t.stroke = y(m.borderColor, c.borderColor, n.color), t.fill = y(m.color, c.color, s !== 1 ? x(n.color).setOpacity(s).get("rgba") : n.color), o.stroke = y(m.connectorColor, c.connectorColor, n.color)), a[O].radius = this.getRangeRadius(m.value), a[O] = h(a[O], {
                            center: a[0].radius - a[O].radius + i
                        }), C || h(!0, a[O], {
                            bubbleAttribs: h(t),
                            connectorAttribs: h(o),
                            labelAttribs: e
                        })
                    }, this)
                }
                getRangeRadius(a) {
                    let c = this.options,
                        n = this.options.seriesIndex,
                        i = this.chart.series[n],
                        t = c.ranges[0].value,
                        o = c.ranges[c.ranges.length - 1].value,
                        e = c.minSize,
                        s = c.maxSize;
                    return i.getRadius.call(this, o, t, e, s, a)
                }
                render() {
                    let a = this.legendItem || {},
                        c = this.chart.renderer,
                        n = this.options.zThreshold;
                    for (let i of (this.symbols || (this.symbols = {
                        connectors: [],
                        bubbleItems: [],
                        labels: []
                    }), a.symbol = c.g("bubble-legend"), a.label = c.g("bubble-legend-item").css(this.legend.itemStyle || {}), a.symbol.translateX = 0, a.symbol.translateY = 0, a.symbol.add(a.label), a.label.add(a.group), this.ranges)) i.value >= n && this.renderRange(i);
                    this.hideOverlappingLabels()
                }
                renderRange(a) {
                    let c = this.ranges[0],
                        n = this.legend,
                        i = this.options,
                        t = i.labels,
                        o = this.chart,
                        e = o.series[i.seriesIndex],
                        s = o.renderer,
                        C = this.symbols,
                        m = C.labels,
                        O = a.center,
                        j = Math.abs(a.radius),
                        z = i.connectorDistance || 0,
                        F = t.align,
                        w = n.options.rtl,
                        B = i.borderWidth,
                        Y = i.connectorWidth,
                        l = c.radius || 0,
                        P = O - j - B / 2 + Y / 2,
                        b = (P % 1 ? 1 : .5) - (Y % 2 ? 0 : .5),
                        u = s.styledMode,
                        g = w || F === "left" ? -z : z;
                    F === "center" && (g = 0, i.connectorDistance = 0, a.labelAttribs.align = "center"), C.bubbleItems.push(s.circle(l, O + b, j).attr(u ? {} : a.bubbleAttribs).addClass((u ? "highcharts-color-" + e.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (i.className || "")).add(this.legendItem.symbol)), C.connectors.push(s.path(s.crispLine([
                        ["M", l, P],
                        ["L", l + g, P]
                    ], i.connectorWidth)).attr(u ? {} : a.connectorAttribs).addClass((u ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (i.connectorClassName || "")).add(this.legendItem.symbol));
                    let T = s.text(this.formatLabel(a)).attr(u ? {} : a.labelAttribs).css(u ? {} : t.style).addClass("highcharts-bubble-legend-labels " + (i.labels.className || "")).add(this.legendItem.symbol),
                        D = {
                            x: l + g + i.labels.x,
                            y: P + i.labels.y + .4 * T.getBBox().height
                        };
                    T.attr(D), m.push(T), T.placed = !0, T.alignAttr = D
                }
                getMaxLabelSize() {
                    let a, c;
                    return this.symbols.labels.forEach(function(i) {
                        c = i.getBBox(!0), a = a ? c.width > a.width ? c : a : c
                    }), a || {}
                }
                formatLabel(a) {
                    let c = this.options,
                        n = c.labels.formatter,
                        i = c.labels.format,
                        {
                            numberFormatter: t
                        } = this.chart;
                    return i ? S.format(i, a) : n ? n.call(a) : t(a.value, 1)
                }
                hideOverlappingLabels() {
                    let a = this.chart,
                        c = this.options.labels.allowOverlap,
                        n = this.symbols;
                    !c && n && (a.hideOverlappingLabels(n.labels), n.labels.forEach(function(i, t) {
                        i.newOpacity ? i.newOpacity !== i.oldOpacity && n.connectors[t].show() : n.connectors[t].hide()
                    }))
                }
                getRanges() {
                    let a = this.legend.bubbleLegend,
                        c = a.chart.series,
                        n = a.options.ranges,
                        i, t, o = Number.MAX_VALUE,
                        e = -Number.MAX_VALUE;
                    return c.forEach(function(s) {
                        s.isBubble && !s.ignoreSeries && (t = s.zData.filter(f)).length && (o = y(s.options.zMin, Math.min(o, Math.max(r(t), s.options.displayNegative === !1 ? s.options.zThreshold : -Number.MAX_VALUE))), e = y(s.options.zMax, Math.max(e, k(t))))
                    }), i = o === e ? [{
                        value: e
                    }] : [{
                        value: o
                    }, {
                        value: (o + e) / 2
                    }, {
                        value: e,
                        autoRanges: !0
                    }], n.length && n[0].radius && i.reverse(), i.forEach(function(s, C) {
                        n && n[C] && (i[C] = h(n[C], s))
                    }), i
                }
                predictBubbleSizes() {
                    let a = this.chart,
                        c = a.legend.options,
                        n = c.floating,
                        i = c.layout === "horizontal",
                        t = i ? a.legend.lastLineHeight : 0,
                        o = a.plotSizeX,
                        e = a.plotSizeY,
                        s = a.series[this.options.seriesIndex],
                        C = s.getPxExtremes(),
                        m = Math.ceil(C.minPxSize),
                        O = Math.ceil(C.maxPxSize),
                        j, z = s.options.maxSize;
                    return n || !/%$/.test(z) ? j = O : (j = (Math.min(e, o) + t) * (z = parseFloat(z)) / 100 / (z / 100 + 1), (i && e - j >= o || !i && o - j >= e) && (j = O)), [m, Math.ceil(j)]
                }
                updateRanges(a, c) {
                    let n = this.legend.options.bubbleLegend;
                    n.minSize = a, n.maxSize = c, n.ranges = this.getRanges()
                }
                correctSizes() {
                    let a = this.legend,
                        c = this.chart,
                        n = c.series[this.options.seriesIndex],
                        i = n.getPxExtremes(),
                        t = i.maxPxSize,
                        o = this.options.maxSize;
                    Math.abs(Math.ceil(t) - o) > 1 && (this.updateRanges(this.options.minSize, i.maxPxSize), a.render())
                }
            }
        }), tt(p, "Series/Bubble/BubbleLegendComposition.js", [p["Series/Bubble/BubbleLegendDefaults.js"], p["Series/Bubble/BubbleLegendItem.js"], p["Core/Defaults.js"], p["Core/Utilities.js"]], function(v, S, L, N) {
            let {
                setOptions: x
            } = L, {
                addEvent: d,
                objectEach: k,
                wrap: r
            } = N, f = [];

            function h(i, t, o) {
                let e, s, C, m = this.legend,
                    O = y(this) >= 0;
                m && m.options.enabled && m.bubbleLegend && m.options.bubbleLegend.autoRanges && O ? (e = m.bubbleLegend.options, s = m.bubbleLegend.predictBubbleSizes(), m.bubbleLegend.updateRanges(s[0], s[1]), e.placed || (m.group.placed = !1, m.allItems.forEach(j => {
                    (C = j.legendItem || {}).group && (C.group.translateY = void 0)
                })), m.render(), this.getMargins(), this.axes.forEach(function(j) {
                    j.visible && j.render(), e.placed || (j.setScale(), j.updateNames(), k(j.ticks, function(z) {
                        z.isNew = !0, z.isNewLabel = !0
                    }))
                }), e.placed = !0, this.getMargins(), i.call(this, t, o), m.bubbleLegend.correctSizes(), n(m, M(m))) : (i.call(this, t, o), m && m.options.enabled && m.bubbleLegend && (m.render(), n(m, M(m))))
            }

            function y(i) {
                let t = i.series,
                    o = 0;
                for (; o < t.length;) {
                    if (t[o] && t[o].isBubble && t[o].visible && t[o].zData.length) return o;
                    o++
                }
                return -1
            }

            function M(i) {
                let t = i.allItems,
                    o = [],
                    e = t.length,
                    s, C, m, O = 0,
                    j = 0;
                for (O = 0; O < e; O++)
                    if (C = t[O].legendItem || {}, m = (t[O + 1] || {}).legendItem || {}, C.labelHeight && (t[O].itemHeight = C.labelHeight), t[O] === t[e - 1] || C.y !== m.y) {
                        for (o.push({
                            height: 0
                        }), s = o[o.length - 1]; j <= O; j++) t[j].itemHeight > s.height && (s.height = t[j].itemHeight);
                        s.step = O
                    } return o
            }

            function a(i) {
                let t = this.bubbleLegend,
                    o = this.options,
                    e = o.bubbleLegend,
                    s = y(this.chart);
                t && t.ranges && t.ranges.length && (e.ranges.length && (e.autoRanges = !!e.ranges[0].autoRanges), this.destroyItem(t)), s >= 0 && o.enabled && e.enabled && (e.seriesIndex = s, this.bubbleLegend = new S(e, this), this.bubbleLegend.addToLegend(i.allItems))
            }

            function c(i) {
                let t;
                if (i.defaultPrevented) return !1;
                let o = this.chart,
                    e = this.visible,
                    s = this.chart.legend;
                s && s.bubbleLegend && (this.visible = !e, this.ignoreSeries = e, t = y(o) >= 0, s.bubbleLegend.visible !== t && (s.update({
                    bubbleLegend: {
                        enabled: t
                    }
                }), s.bubbleLegend.visible = t), this.visible = e)
            }

            function n(i, t) {
                let o = i.allItems,
                    e = i.options.rtl,
                    s, C, m, O, j = 0;
                o.forEach((z, F) => {
                    (O = z.legendItem || {}).group && (s = O.group.translateX || 0, C = O.y || 0, ((m = z.movementX) || e && z.ranges) && (m = e ? s - z.options.maxSize / 2 : s + m, O.group.attr({
                        translateX: m
                    })), F > t[j].step && j++, O.group.attr({
                        translateY: Math.round(C + t[j].height / 2)
                    }), O.y = C + t[j].height / 2)
                })
            }
            return {
                compose: function(i, t, o) {
                    N.pushUnique(f, i) && (x({
                        legend: {
                            bubbleLegend: v
                        }
                    }), r(i.prototype, "drawChartBox", h)), N.pushUnique(f, t) && d(t, "afterGetAllItems", a), N.pushUnique(f, o) && d(o, "legendItemClick", c)
                }
            }
        }), tt(p, "Series/Bubble/BubblePoint.js", [p["Core/Series/Point.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L) {
            let {
                seriesTypes: {
                    scatter: {
                        prototype: {
                            pointClass: N
                        }
                    }
                }
            } = S, {
                extend: x
            } = L;
            class d extends N {
                constructor() {
                    super(...arguments), this.options = void 0, this.series = void 0
                }
                haloPath(r) {
                    return v.prototype.haloPath.call(this, r === 0 ? 0 : (this.marker && this.marker.radius || 0) + r)
                }
            }
            return x(d.prototype, {
                ttBelow: !1
            }), d
        }), tt(p, "Series/Bubble/BubbleSeries.js", [p["Series/Bubble/BubbleLegendComposition.js"], p["Series/Bubble/BubblePoint.js"], p["Core/Color/Color.js"], p["Core/Globals.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L, N, x, d) {
            let {
                parse: k
            } = L, {
                noop: r
            } = N, {
                series: f,
                seriesTypes: {
                    column: {
                        prototype: h
                    },
                    scatter: y
                }
            } = x, {
                addEvent: M,
                arrayMax: a,
                arrayMin: c,
                clamp: n,
                extend: i,
                isNumber: t,
                merge: o,
                pick: e
            } = d, s = [];

            function C() {
                let O = this.len,
                    j = (this.chart, this.isXAxis),
                    z = j ? "xData" : "yData",
                    F = this.min,
                    w = this.max - F,
                    B = 0,
                    Y = O,
                    l = O / w,
                    P;
                this.series.forEach(b => {
                    if (b.bubblePadding && b.reserveSpace()) {
                        this.allowZoomOutside = !0, P = !0;
                        let u = b[z];
                        if (j && ((b.onPoint || b).getRadii(0, 0, b), b.onPoint && (b.radii = b.onPoint.radii)), w > 0) {
                            let g = u.length;
                            for (; g--;)
                                if (t(u[g]) && this.dataMin <= u[g] && u[g] <= this.max) {
                                    let T = b.radii && b.radii[g] || 0;
                                    B = Math.min((u[g] - F) * l - T, B), Y = Math.max((u[g] - F) * l + T, Y)
                                }
                        }
                    }
                }), P && w > 0 && !this.logarithmic && (Y -= O, l *= (O + Math.max(0, B) - Math.min(Y, O)) / O, [
                    ["min", "userMin", B],
                    ["max", "userMax", Y]
                ].forEach(b => {
                    e(this.options[b[0]], this[b[1]]) === void 0 && (this[b[0]] += b[2] / l)
                }))
            }
            class m extends y {
                constructor() {
                    super(...arguments), this.data = void 0, this.maxPxSize = void 0, this.minPxSize = void 0, this.options = void 0, this.points = void 0, this.radii = void 0, this.yData = void 0, this.zData = void 0
                }
                static compose(j, z, F, w) {
                    v.compose(z, F, w), d.pushUnique(s, j) && (j.prototype.beforePadding = C)
                }
                animate(j) {
                    !j && this.points.length < this.options.animationLimit && this.points.forEach(function(z) {
                        let {
                            graphic: F
                        } = z;
                        F && F.width && (this.hasRendered || F.attr({
                            x: z.plotX,
                            y: z.plotY,
                            width: 1,
                            height: 1
                        }), F.animate(this.markerAttribs(z), this.options.animation))
                    }, this)
                }
                getRadii() {
                    let j = this.zData,
                        z = this.yData,
                        F = [],
                        w, B, Y, l = this.chart.bubbleZExtremes,
                        {
                            minPxSize: P,
                            maxPxSize: b
                        } = this.getPxExtremes();
                    if (!l) {
                        let u, g = Number.MAX_VALUE,
                            T = -Number.MAX_VALUE;
                        this.chart.series.forEach(D => {
                            if (D.bubblePadding && D.reserveSpace()) {
                                let E = (D.onPoint || D).getZExtremes();
                                E && (g = Math.min(e(g, E.zMin), E.zMin), T = Math.max(e(T, E.zMax), E.zMax), u = !0)
                            }
                        }), u ? (l = {
                            zMin: g,
                            zMax: T
                        }, this.chart.bubbleZExtremes = l) : l = {
                            zMin: 0,
                            zMax: 0
                        }
                    }
                    for (B = 0, w = j.length; B < w; B++) Y = j[B], F.push(this.getRadius(l.zMin, l.zMax, P, b, Y, z && z[B]));
                    this.radii = F
                }
                getRadius(j, z, F, w, B, Y) {
                    let l = this.options,
                        P = l.sizeBy !== "width",
                        b = l.zThreshold,
                        u = z - j,
                        g = .5;
                    if (Y === null || B === null) return null;
                    if (t(B)) {
                        if (l.sizeByAbsoluteValue && (B = Math.abs(B - b), z = u = Math.max(z - b, Math.abs(j - b)), j = 0), B < j) return F / 2 - 1;
                        u > 0 && (g = (B - j) / u)
                    }
                    return P && g >= 0 && (g = Math.sqrt(g)), Math.ceil(F + g * (w - F)) / 2
                }
                hasData() {
                    return !!this.processedXData.length
                }
                pointAttribs(j, z) {
                    let F = this.options.marker,
                        w = F.fillOpacity,
                        B = f.prototype.pointAttribs.call(this, j, z);
                    return w !== 1 && (B.fill = k(B.fill).setOpacity(w).get("rgba")), B
                }
                translate() {
                    super.translate.call(this), this.getRadii(), this.translateBubble()
                }
                translateBubble() {
                    let {
                        data: j,
                        options: z,
                        radii: F
                    } = this, {
                        minPxSize: w
                    } = this.getPxExtremes(), B = j.length;
                    for (; B--;) {
                        let Y = j[B],
                            l = F ? F[B] : 0;
                        this.zoneAxis === "z" && (Y.negative = (Y.z || 0) < (z.zThreshold || 0)), t(l) && l >= w / 2 ? (Y.marker = i(Y.marker, {
                            radius: l,
                            width: 2 * l,
                            height: 2 * l
                        }), Y.dlBox = {
                            x: Y.plotX - l,
                            y: Y.plotY - l,
                            width: 2 * l,
                            height: 2 * l
                        }) : (Y.shapeArgs = Y.plotY = Y.dlBox = void 0, Y.isInside = !1)
                    }
                }
                getPxExtremes() {
                    let j = Math.min(this.chart.plotWidth, this.chart.plotHeight),
                        z = B => {
                            let Y;
                            return typeof B == "string" && (Y = /%$/.test(B), B = parseInt(B, 10)), Y ? j * B / 100 : B
                        },
                        F = z(e(this.options.minSize, 8)),
                        w = Math.max(z(e(this.options.maxSize, "20%")), F);
                    return {
                        minPxSize: F,
                        maxPxSize: w
                    }
                }
                getZExtremes() {
                    let j = this.options,
                        z = (this.zData || []).filter(t);
                    if (z.length) {
                        let F = e(j.zMin, n(c(z), j.displayNegative === !1 ? j.zThreshold || 0 : -Number.MAX_VALUE, Number.MAX_VALUE)),
                            w = e(j.zMax, a(z));
                        if (t(F) && t(w)) return {
                            zMin: F,
                            zMax: w
                        }
                    }
                }
            }
            return m.defaultOptions = o(y.defaultOptions, {
                dataLabels: {
                    formatter: function() {
                        let {
                            numberFormatter: O
                        } = this.series.chart, {
                            z: j
                        } = this.point;
                        return t(j) ? O(j, -1) : ""
                    },
                    inside: !0,
                    verticalAlign: "middle"
                },
                animationLimit: 250,
                marker: {
                    lineColor: null,
                    lineWidth: 1,
                    fillOpacity: .5,
                    radius: null,
                    states: {
                        hover: {
                            radiusPlus: 0
                        }
                    },
                    symbol: "circle"
                },
                minSize: 8,
                maxSize: "20%",
                softThreshold: !1,
                states: {
                    hover: {
                        halo: {
                            size: 5
                        }
                    }
                },
                tooltip: {
                    pointFormat: "({point.x}, {point.y}), Size: {point.z}"
                },
                turboThreshold: 0,
                zThreshold: 0,
                zoneAxis: "z"
            }), i(m.prototype, {
                alignDataLabel: h.alignDataLabel,
                applyZones: r,
                bubblePadding: !0,
                isBubble: !0,
                pointArrayMap: ["y", "z"],
                pointClass: S,
                parallelArrays: ["x", "y", "z"],
                trackerGroups: ["group", "dataLabelsGroup"],
                specialGroup: "group",
                zoneAxis: "z"
            }), M(m, "updatedData", O => {
                delete O.target.chart.bubbleZExtremes
            }), M(m, "remove", O => {
                delete O.target.chart.bubbleZExtremes
            }), x.registerSeriesType("bubble", m), m
        }), tt(p, "Series/ColumnRange/ColumnRangePoint.js", [p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                seriesTypes: {
                    column: {
                        prototype: {
                            pointClass: {
                                prototype: L
                            }
                        }
                    },
                    arearange: {
                        prototype: {
                            pointClass: N
                        }
                    }
                }
            } = v, {
                extend: x,
                isNumber: d
            } = S;
            class k extends N {
                constructor() {
                    super(...arguments), this.options = void 0, this.series = void 0
                }
                isValid() {
                    return d(this.low)
                }
            }
            return x(k.prototype, {
                setState: L.setState
            }), k
        }), tt(p, "Series/ColumnRange/ColumnRangeSeries.js", [p["Series/ColumnRange/ColumnRangePoint.js"], p["Core/Globals.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L, N) {
            let {
                noop: x
            } = S, {
                seriesTypes: {
                    arearange: d,
                    column: k,
                    column: {
                        prototype: r
                    }
                }
            } = L, {
                addEvent: f,
                clamp: h,
                extend: y,
                isNumber: M,
                merge: a,
                pick: c
            } = N;
            class n extends d {
                setOptions() {
                    return a(!0, arguments[0], {
                        stacking: void 0
                    }), d.prototype.setOptions.apply(this, arguments)
                }
                translate() {
                    return r.translate.apply(this)
                }
                pointAttribs() {
                    return r.pointAttribs.apply(this, arguments)
                }
                translate3dPoints() {
                    return r.translate3dPoints.apply(this, arguments)
                }
                translate3dShapes() {
                    return r.translate3dShapes.apply(this, arguments)
                }
                afterColumnTranslate() {
                    let t, o, e, s, C = this.yAxis,
                        m = this.xAxis,
                        O = m.startAngleRad,
                        j = this.chart,
                        z = this.xAxis.isRadial,
                        F = Math.max(j.chartWidth, j.chartHeight) + 999;
                    this.points.forEach(w => {
                        let B = w.shapeArgs || {},
                            Y = this.options.minPointLength,
                            l = w.plotY,
                            P = C.translate(w.high, 0, 1, 0, 1);
                        if (M(P) && M(l))
                            if (w.plotHigh = h(P, -F, F), w.plotLow = h(l, -F, F), s = w.plotHigh, Math.abs(t = c(w.rectPlotY, w.plotY) - w.plotHigh) < Y ? (o = Y - t, t += o, s -= o / 2) : t < 0 && (t *= -1, s -= t), z && this.polar) e = w.barX + O, w.shapeType = "arc", w.shapeArgs = this.polar.arc(s + t, s, e, e + w.pointWidth);
                            else {
                                B.height = t, B.y = s;
                                let {
                                    x: b = 0,
                                    width: u = 0
                                } = B;
                                w.shapeArgs = a(w.shapeArgs, this.crispCol(b, s, u, t)), w.tooltipPos = j.inverted ? [C.len + C.pos - j.plotLeft - s - t / 2, m.len + m.pos - j.plotTop - b - u / 2, t] : [m.left - j.plotLeft + b + u / 2, C.pos - j.plotTop + s + t / 2, t]
                            }
                    })
                }
            }
            return n.defaultOptions = a(k.defaultOptions, d.defaultOptions, {
                borderRadius: {
                    where: "all"
                },
                pointRange: null,
                marker: null,
                states: {
                    hover: {
                        halo: !1
                    }
                }
            }), f(n, "afterColumnTranslate", function() {
                n.prototype.afterColumnTranslate.apply(this)
            }, {
                order: 5
            }), y(n.prototype, {
                directTouch: !0,
                pointClass: v,
                trackerGroups: ["group", "dataLabelsGroup"],
                adjustForMissingColumns: r.adjustForMissingColumns,
                animate: r.animate,
                crispCol: r.crispCol,
                drawGraph: x,
                drawPoints: r.drawPoints,
                getSymbol: x,
                drawTracker: r.drawTracker,
                getColumnMetrics: r.getColumnMetrics
            }), L.registerSeriesType("columnrange", n), n
        }), tt(p, "Series/ColumnPyramid/ColumnPyramidSeriesDefaults.js", [], function() {
            return {}
        }), tt(p, "Series/ColumnPyramid/ColumnPyramidSeries.js", [p["Series/ColumnPyramid/ColumnPyramidSeriesDefaults.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L) {
            let {
                column: N
            } = S.seriesTypes, {
                clamp: x,
                merge: d,
                pick: k
            } = L;
            class r extends N {
                constructor() {
                    super(...arguments), this.data = void 0, this.options = void 0, this.points = void 0
                }
                translate() {
                    let h = this.chart,
                        y = this.options,
                        M = this.dense = this.closestPointRange * this.xAxis.transA < 2,
                        a = this.borderWidth = k(y.borderWidth, M ? 0 : 1),
                        c = this.yAxis,
                        n = y.threshold,
                        i = k(y.minPointLength, 5),
                        t = this.getColumnMetrics(),
                        o = t.width,
                        e = this.pointXOffset = t.offset,
                        s = this.translatedThreshold = c.getThreshold(n),
                        C = this.barW = Math.max(o, 1 + 2 * a);
                    for (let m of (h.inverted && (s -= .5), y.pointPadding && (C = Math.ceil(C)), super.translate(), this.points)) {
                        let O = k(m.yBottom, s),
                            j = 999 + Math.abs(O),
                            z = x(m.plotY, -j, c.len + j),
                            F = C / 2,
                            w = Math.min(z, O),
                            B = Math.max(z, O) - w,
                            Y = m.plotX + e,
                            l, P, b, u, g, T, D, E, A, X, U, I;
                        y.centerInCategory && (Y = this.adjustForMissingColumns(Y, o, m, t)), m.barX = Y, m.pointWidth = o, m.tooltipPos = h.inverted ? [c.len + c.pos - h.plotLeft - z, this.xAxis.len - Y - F, B] : [Y + F, z + c.pos - h.plotTop, B], l = n + (m.total || m.y), y.stacking === "percent" && (l = n + (m.y < 0) ? -100 : 100), b = c.toPixels(l, !0), u = (P = h.plotHeight - b - (h.plotHeight - s)) ? F * (w - b) / P : 0, g = P ? F * (w + B - b) / P : 0, D = Y - u + F, E = Y + u + F, A = Y + g + F, X = Y - g + F, U = w - i, I = w + B, m.y < 0 && (U = w, I = w + B + i), h.inverted && (T = c.width - w, P = b - (c.width - s), u = F * (b - T) / P, g = F * (b - (T - B)) / P, E = (D = Y + F + u) - 2 * u, A = Y - g + F, X = Y + g + F, U = w, I = w + B - i, m.y < 0 && (I = w + B + i)), m.shapeType = "path", m.shapeArgs = {
                            x: D,
                            y: U,
                            width: E - D,
                            height: B,
                            d: [
                                ["M", D, U],
                                ["L", E, U],
                                ["L", A, I],
                                ["L", X, I],
                                ["Z"]
                            ]
                        }
                    }
                }
            }
            return r.defaultOptions = d(N.defaultOptions, v), S.registerSeriesType("columnpyramid", r), r
        }), tt(p, "Series/ErrorBar/ErrorBarSeriesDefaults.js", [], function() {
            return {
                color: "#000000",
                grouping: !1,
                linkedTo: ":previous",
                tooltip: {
                    pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
                },
                whiskerWidth: null
            }
        }), tt(p, "Series/ErrorBar/ErrorBarSeries.js", [p["Series/BoxPlot/BoxPlotSeries.js"], p["Series/Column/ColumnSeries.js"], p["Series/ErrorBar/ErrorBarSeriesDefaults.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L, N, x) {
            let {
                arearange: d
            } = N.seriesTypes, {
                addEvent: k,
                merge: r,
                extend: f
            } = x;
            class h extends v {
                constructor() {
                    super(...arguments), this.data = void 0, this.options = void 0, this.points = void 0
                }
                getColumnMetrics() {
                    return this.linkedParent && this.linkedParent.columnMetrics || S.prototype.getColumnMetrics.call(this)
                }
                drawDataLabels() {
                    let M = this.pointValKey;
                    if (d)
                        for (let a of (d.prototype.drawDataLabels.call(this), this.data)) a.y = a[M]
                }
                toYData(M) {
                    return [M.low, M.high]
                }
            }
            return h.defaultOptions = r(v.defaultOptions, L), k(h, "afterTranslate", function() {
                for (let y of this.points) y.plotLow = y.plotY
            }, {
                order: 0
            }), f(h.prototype, {
                pointArrayMap: ["low", "high"],
                pointValKey: "high",
                doQuartiles: !1
            }), N.registerSeriesType("errorbar", h), h
        }), tt(p, "Series/Gauge/GaugePoint.js", [p["Core/Series/SeriesRegistry.js"]], function(v) {
            let {
                series: {
                    prototype: {
                        pointClass: S
                    }
                }
            } = v;
            return class extends S {
                constructor() {
                    super(...arguments), this.options = void 0, this.series = void 0, this.shapeArgs = void 0
                }
                setState(L) {
                    this.state = L
                }
            }
        }), tt(p, "Series/Gauge/GaugeSeries.js", [p["Series/Gauge/GaugePoint.js"], p["Core/Globals.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L, N) {
            let {
                noop: x
            } = S, {
                series: d,
                seriesTypes: {
                    column: k
                }
            } = L, {
                clamp: r,
                isNumber: f,
                extend: h,
                merge: y,
                pick: M,
                pInt: a,
                defined: c
            } = N;
            class n extends d {
                constructor() {
                    super(...arguments), this.data = void 0, this.points = void 0, this.options = void 0, this.yAxis = void 0
                }
                translate() {
                    let t = this.yAxis,
                        o = this.options,
                        e = t.center;
                    this.generatePoints(), this.points.forEach(s => {
                        let C = y(o.dial, s.dial),
                            m = a(C.radius) * e[2] / 200,
                            O = a(C.baseLength) * m / 100,
                            j = a(C.rearLength) * m / 100,
                            z = C.baseWidth,
                            F = C.topWidth,
                            w = o.overshoot,
                            B = t.startAngleRad + t.translate(s.y, void 0, void 0, void 0, !0);
                        (f(w) || o.wrap === !1) && (w = f(w) ? w / 180 * Math.PI : 0, B = r(B, t.startAngleRad - w, t.endAngleRad + w)), B = 180 * B / Math.PI, s.shapeType = "path";
                        let Y = C.path || [
                            ["M", -j, -z / 2],
                            ["L", O, -z / 2],
                            ["L", m, -F / 2],
                            ["L", m, F / 2],
                            ["L", O, z / 2],
                            ["L", -j, z / 2],
                            ["Z"]
                        ];
                        s.shapeArgs = {
                            d: Y,
                            translateX: e[0],
                            translateY: e[1],
                            rotation: B
                        }, s.plotX = e[0], s.plotY = e[1], c(s.y) && t.max - t.min && (s.percentage = (s.y - t.min) / (t.max - t.min) * 100)
                    })
                }
                drawPoints() {
                    let t = this,
                        o = t.chart,
                        e = t.yAxis.center,
                        s = t.pivot,
                        C = t.options,
                        m = C.pivot,
                        O = o.renderer;
                    t.points.forEach(j => {
                        let z = j.graphic,
                            F = j.shapeArgs,
                            w = F.d,
                            B = y(C.dial, j.dial);
                        z ? (z.animate(F), F.d = w) : j.graphic = O[j.shapeType](F).addClass("highcharts-dial").add(t.group), o.styledMode || j.graphic[z ? "animate" : "attr"]({
                            stroke: B.borderColor,
                            "stroke-width": B.borderWidth,
                            fill: B.backgroundColor
                        })
                    }), s ? s.animate({
                        translateX: e[0],
                        translateY: e[1]
                    }) : m && (t.pivot = O.circle(0, 0, m.radius).attr({
                        zIndex: 2
                    }).addClass("highcharts-pivot").translate(e[0], e[1]).add(t.group), o.styledMode || t.pivot.attr({
                        fill: m.backgroundColor,
                        stroke: m.borderColor,
                        "stroke-width": m.borderWidth
                    }))
                }
                animate(t) {
                    let o = this;
                    t || o.points.forEach(e => {
                        let s = e.graphic;
                        s && (s.attr({
                            rotation: 180 * o.yAxis.startAngleRad / Math.PI
                        }), s.animate({
                            rotation: e.shapeArgs.rotation
                        }, o.options.animation))
                    })
                }
                render() {
                    this.group = this.plotGroup("group", "series", this.visible ? "inherit" : "hidden", this.options.zIndex, this.chart.seriesGroup), d.prototype.render.call(this), this.group.clip(this.chart.clipRect)
                }
                setData(t, o) {
                    d.prototype.setData.call(this, t, !1), this.processData(), this.generatePoints(), M(o, !0) && this.chart.redraw()
                }
                hasData() {
                    return !!this.points.length
                }
            }
            return n.defaultOptions = y(d.defaultOptions, {
                dataLabels: {
                    borderColor: "#cccccc",
                    borderRadius: 3,
                    borderWidth: 1,
                    crop: !1,
                    defer: !1,
                    enabled: !0,
                    verticalAlign: "top",
                    y: 15,
                    zIndex: 2
                },
                dial: {
                    backgroundColor: "#000000",
                    baseLength: "70%",
                    baseWidth: 3,
                    borderColor: "#cccccc",
                    borderWidth: 0,
                    radius: "80%",
                    rearLength: "10%",
                    topWidth: 1
                },
                pivot: {
                    radius: 5,
                    borderWidth: 0,
                    borderColor: "#cccccc",
                    backgroundColor: "#000000"
                },
                tooltip: {
                    headerFormat: ""
                },
                showInLegend: !1
            }), h(n.prototype, {
                angular: !0,
                directTouch: !0,
                drawGraph: x,
                drawTracker: k.prototype.drawTracker,
                fixedBox: !0,
                forceDL: !0,
                noSharedTooltip: !0,
                pointClass: v,
                trackerGroups: ["group", "dataLabelsGroup"]
            }), L.registerSeriesType("gauge", n), n
        }), tt(p, "Series/DragNodesComposition.js", [p["Core/Utilities.js"]], function(v) {
            let {
                addEvent: S
            } = v, L = [];

            function N() {
                let x, d, k, r = this;
                r.container && (x = S(r.container, "mousedown", f => {
                    let h = r.hoverPoint;
                    h && h.series && h.series.hasDraggableNodes && h.series.options.draggable && (h.series.onMouseDown(h, f), d = S(r.container, "mousemove", y => h && h.series && h.series.onMouseMove(h, y)), k = S(r.container.ownerDocument, "mouseup", y => (d(), k(), h && h.series && h.series.onMouseUp(h, y))))
                })), S(r, "destroy", function() {
                    x()
                })
            }
            return {
                compose: function(x) {
                    v.pushUnique(L, x) && S(x, "load", N)
                },
                onMouseDown: function(x, d) {
                    let k = this.chart.pointer.normalize(d);
                    x.fixedPosition = {
                        chartX: k.chartX,
                        chartY: k.chartY,
                        plotX: x.plotX,
                        plotY: x.plotY
                    }, x.inDragMode = !0
                },
                onMouseMove: function(x, d) {
                    if (x.fixedPosition && x.inDragMode) {
                        let k, r, f = this.chart,
                            h = f.pointer.normalize(d),
                            y = x.fixedPosition.chartX - h.chartX,
                            M = x.fixedPosition.chartY - h.chartY,
                            a = f.graphLayoutsLookup;
                        (Math.abs(y) > 5 || Math.abs(M) > 5) && (k = x.fixedPosition.plotX - y, r = x.fixedPosition.plotY - M, f.isInsidePlot(k, r) && (x.plotX = k, x.plotY = r, x.hasDragged = !0, this.redrawHalo(x), a.forEach(c => {
                            c.restartSimulation()
                        })))
                    }
                },
                onMouseUp: function(x, d) {
                    x.fixedPosition && (x.hasDragged && (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw()), x.inDragMode = x.hasDragged = !1, this.options.fixedDraggable || delete x.fixedPosition)
                },
                redrawHalo: function(x) {
                    x && this.halo && this.halo.attr({
                        d: x.haloPath(this.options.states.hover.halo.size)
                    })
                }
            }
        }), tt(p, "Series/GraphLayoutComposition.js", [p["Core/Animation/AnimationUtilities.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                setAnimation: L
            } = v, {
                addEvent: N
            } = S, x = [];

            function d() {
                this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach(h => {
                    h.updateSimulation()
                }), this.redraw())
            }

            function k() {
                this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach(h => {
                    h.updateSimulation(!1)
                }), this.redraw())
            }

            function r() {
                this.graphLayoutsLookup && this.graphLayoutsLookup.forEach(h => {
                    h.stop()
                })
            }

            function f() {
                let h, y = !1,
                    M = a => {
                        a.maxIterations-- && isFinite(a.temperature) && !a.isStable() && !a.enableSimulation && (a.beforeStep && a.beforeStep(), a.step(), h = !1, y = !0)
                    };
                if (this.graphLayoutsLookup) {
                    for (L(!1, this), this.graphLayoutsLookup.forEach(a => a.start()); !h;) h = !0, this.graphLayoutsLookup.forEach(M);
                    y && this.series.forEach(a => {
                        a && a.layout && a.render()
                    })
                }
            }
            return {
                compose: function(h) {
                    S.pushUnique(x, h) && (N(h, "afterPrint", d), N(h, "beforePrint", k), N(h, "predraw", r), N(h, "render", f))
                },
                integrations: {},
                layouts: {}
            }
        }), tt(p, "Series/PackedBubble/PackedBubblePoint.js", [p["Core/Chart/Chart.js"], p["Core/Series/Point.js"], p["Core/Series/SeriesRegistry.js"]], function(v, S, L) {
            let {
                seriesTypes: {
                    bubble: {
                        prototype: {
                            pointClass: N
                        }
                    }
                }
            } = L;
            return class extends N {
                constructor() {
                    super(...arguments), this.degree = NaN, this.mass = NaN, this.radius = NaN, this.options = void 0, this.series = void 0, this.value = null
                }
                destroy() {
                    return this.series.layout && this.series.layout.removeElementFromCollection(this, this.series.layout.nodes), S.prototype.destroy.apply(this, arguments)
                }
                firePointEvent() {
                    let x = this.series,
                        d = x.options;
                    if (this.isParentNode && d.parentNode) {
                        let k = d.allowPointSelect;
                        d.allowPointSelect = d.parentNode.allowPointSelect, S.prototype.firePointEvent.apply(this, arguments), d.allowPointSelect = k
                    } else S.prototype.firePointEvent.apply(this, arguments)
                }
                select() {
                    let x = this.series,
                        d = x.chart;
                    this.isParentNode ? (d.getSelectedPoints = d.getSelectedParentNodes, S.prototype.select.apply(this, arguments), d.getSelectedPoints = v.prototype.getSelectedPoints) : S.prototype.select.apply(this, arguments)
                }
            }
        }), tt(p, "Series/PackedBubble/PackedBubbleSeriesDefaults.js", [p["Core/Utilities.js"]], function(v) {
            let {
                isNumber: S
            } = v;
            return {
                minSize: "10%",
                maxSize: "50%",
                sizeBy: "area",
                zoneAxis: "y",
                crisp: !1,
                tooltip: {
                    pointFormat: "Value: {point.value}"
                },
                draggable: !0,
                useSimulation: !0,
                parentNode: {
                    allowPointSelect: !1
                },
                dataLabels: {
                    formatter: function() {
                        let {
                            numberFormatter: L
                        } = this.series.chart, {
                            value: N
                        } = this.point;
                        return S(N) ? L(N, -1) : ""
                    },
                    parentNodeFormatter: function() {
                        return this.name
                    },
                    parentNodeTextPath: {
                        enabled: !0
                    },
                    padding: 0,
                    style: {
                        transition: "opacity 2000ms"
                    }
                },
                layoutAlgorithm: {
                    initialPositions: "circle",
                    initialPositionRadius: 20,
                    bubblePadding: 5,
                    parentNodeLimit: !1,
                    seriesInteraction: !0,
                    dragBetweenSeries: !1,
                    parentNodeOptions: {
                        maxIterations: 400,
                        gravitationalConstant: .03,
                        maxSpeed: 50,
                        initialPositionRadius: 100,
                        seriesInteraction: !0,
                        marker: {
                            fillColor: null,
                            fillOpacity: 1,
                            lineWidth: null,
                            lineColor: null,
                            symbol: "circle"
                        }
                    },
                    enableSimulation: !0,
                    type: "packedbubble",
                    integration: "packedbubble",
                    maxIterations: 1e3,
                    splitSeries: !1,
                    maxSpeed: 5,
                    gravitationalConstant: .01,
                    friction: -.981
                }
            }
        }), tt(p, "Series/Networkgraph/VerletIntegration.js", [], function() {
            return {
                attractive: function(v, S, L) {
                    let N = v.getMass(),
                        x = -L.x * S * this.diffTemperature,
                        d = -L.y * S * this.diffTemperature;
                    v.fromNode.fixedPosition || (v.fromNode.plotX -= x * N.fromNode / v.fromNode.degree, v.fromNode.plotY -= d * N.fromNode / v.fromNode.degree), v.toNode.fixedPosition || (v.toNode.plotX += x * N.toNode / v.toNode.degree, v.toNode.plotY += d * N.toNode / v.toNode.degree)
                },
                attractiveForceFunction: function(v, S) {
                    return (S - v) / v
                },
                barycenter: function() {
                    let v = this.options.gravitationalConstant,
                        S = this.barycenter.xFactor,
                        L = this.barycenter.yFactor;
                    S = (S - (this.box.left + this.box.width) / 2) * v, L = (L - (this.box.top + this.box.height) / 2) * v, this.nodes.forEach(function(N) {
                        N.fixedPosition || (N.plotX -= S / N.mass / N.degree, N.plotY -= L / N.mass / N.degree)
                    })
                },
                getK: function(v) {
                    return Math.pow(v.box.width * v.box.height / v.nodes.length, .5)
                },
                integrate: function(v, S) {
                    let L = -v.options.friction,
                        N = v.options.maxSpeed,
                        x = S.prevX,
                        d = S.prevY,
                        k = (S.plotX + S.dispX - x) * L,
                        r = (S.plotY + S.dispY - d) * L,
                        f = Math.abs,
                        h = f(k) / (k || 1),
                        y = f(r) / (r || 1);
                    k = h * Math.min(N, Math.abs(k)), r = y * Math.min(N, Math.abs(r)), S.prevX = S.plotX + S.dispX, S.prevY = S.plotY + S.dispY, S.plotX += k, S.plotY += r, S.temperature = v.vectorLength({
                        x: k,
                        y: r
                    })
                },
                repulsive: function(v, S, L) {
                    let N = S * this.diffTemperature / v.mass / v.degree;
                    v.fixedPosition || (v.plotX += L.x * N, v.plotY += L.y * N)
                },
                repulsiveForceFunction: function(v, S) {
                    return (S - v) / v * (S > v ? 1 : 0)
                }
            }
        }), tt(p, "Series/PackedBubble/PackedBubbleIntegration.js", [p["Core/Globals.js"], p["Series/Networkgraph/VerletIntegration.js"]], function(v, S) {
            let {
                noop: L
            } = v;
            return {
                barycenter: function() {
                    let x, d, k = this.options.gravitationalConstant,
                        r = this.box,
                        f = this.nodes;
                    for (let h of f) this.options.splitSeries && !h.isParentNode ? (x = h.series.parentNode.plotX, d = h.series.parentNode.plotY) : (x = r.width / 2, d = r.height / 2), h.fixedPosition || (h.plotX -= (h.plotX - x) * k / (h.mass * Math.sqrt(f.length)), h.plotY -= (h.plotY - d) * k / (h.mass * Math.sqrt(f.length)))
                },
                getK: L,
                integrate: S.integrate,
                repulsive: function(x, d, k, r) {
                    let f = d * this.diffTemperature / x.mass / x.degree,
                        h = k.x * f,
                        y = k.y * f;
                    x.fixedPosition || (x.plotX += h, x.plotY += y), r.fixedPosition || (r.plotX -= h, r.plotY -= y)
                },
                repulsiveForceFunction: function(x, d, k, r) {
                    return Math.min(x, (k.marker.radius + r.marker.radius) / 2)
                }
            }
        }), tt(p, "Series/Networkgraph/EulerIntegration.js", [], function() {
            return {
                attractive: function(v, S, L, N) {
                    let x = v.getMass(),
                        d = L.x / N * S,
                        k = L.y / N * S;
                    v.fromNode.fixedPosition || (v.fromNode.dispX -= d * x.fromNode / v.fromNode.degree, v.fromNode.dispY -= k * x.fromNode / v.fromNode.degree), v.toNode.fixedPosition || (v.toNode.dispX += d * x.toNode / v.toNode.degree, v.toNode.dispY += k * x.toNode / v.toNode.degree)
                },
                attractiveForceFunction: function(v, S) {
                    return v * v / S
                },
                barycenter: function() {
                    let v = this.options.gravitationalConstant,
                        S = this.barycenter.xFactor,
                        L = this.barycenter.yFactor;
                    this.nodes.forEach(function(N) {
                        if (!N.fixedPosition) {
                            let x = N.getDegree(),
                                d = x * (1 + x / 2);
                            N.dispX += (S - N.plotX) * v * d / N.degree, N.dispY += (L - N.plotY) * v * d / N.degree
                        }
                    })
                },
                getK: function(v) {
                    return Math.pow(v.box.width * v.box.height / v.nodes.length, .3)
                },
                integrate: function(v, S) {
                    let L;
                    S.dispX += S.dispX * v.options.friction, S.dispY += S.dispY * v.options.friction, (L = S.temperature = v.vectorLength({
                        x: S.dispX,
                        y: S.dispY
                    })) !== 0 && (S.plotX += S.dispX / L * Math.min(Math.abs(S.dispX), v.temperature), S.plotY += S.dispY / L * Math.min(Math.abs(S.dispY), v.temperature))
                },
                repulsive: function(v, S, L, N) {
                    v.dispX += L.x / N * S / v.degree, v.dispY += L.y / N * S / v.degree
                },
                repulsiveForceFunction: function(v, S) {
                    return S * S / v
                }
            }
        }), tt(p, "Series/Networkgraph/QuadTreeNode.js", [], function() {
            class v {
                constructor(L) {
                    this.body = !1, this.isEmpty = !1, this.isInternal = !1, this.nodes = [], this.box = L, this.boxSize = Math.min(L.width, L.height)
                }
                divideBox() {
                    let L = this.box.width / 2,
                        N = this.box.height / 2;
                    this.nodes[0] = new v({
                        left: this.box.left,
                        top: this.box.top,
                        width: L,
                        height: N
                    }), this.nodes[1] = new v({
                        left: this.box.left + L,
                        top: this.box.top,
                        width: L,
                        height: N
                    }), this.nodes[2] = new v({
                        left: this.box.left + L,
                        top: this.box.top + N,
                        width: L,
                        height: N
                    }), this.nodes[3] = new v({
                        left: this.box.left,
                        top: this.box.top + N,
                        width: L,
                        height: N
                    })
                }
                getBoxPosition(L) {
                    let N = L.plotX < this.box.left + this.box.width / 2,
                        x = L.plotY < this.box.top + this.box.height / 2;
                    return N ? x ? 0 : 3 : x ? 1 : 2
                }
                insert(L, N) {
                    let x;
                    this.isInternal ? this.nodes[this.getBoxPosition(L)].insert(L, N - 1) : (this.isEmpty = !1, this.body ? N ? (this.isInternal = !0, this.divideBox(), this.body !== !0 && (this.nodes[this.getBoxPosition(this.body)].insert(this.body, N - 1), this.body = !0), this.nodes[this.getBoxPosition(L)].insert(L, N - 1)) : ((x = new v({
                        top: L.plotX || NaN,
                        left: L.plotY || NaN,
                        width: .1,
                        height: .1
                    })).body = L, x.isInternal = !1, this.nodes.push(x)) : (this.isInternal = !1, this.body = L))
                }
                updateMassAndCenter() {
                    let L = 0,
                        N = 0,
                        x = 0;
                    if (this.isInternal) {
                        for (let d of this.nodes) d.isEmpty || (L += d.mass, N += d.plotX * d.mass, x += d.plotY * d.mass);
                        N /= L, x /= L
                    } else this.body && (L = this.body.mass, N = this.body.plotX, x = this.body.plotY);
                    this.mass = L, this.plotX = N, this.plotY = x
                }
            }
            return v
        }), tt(p, "Series/Networkgraph/QuadTree.js", [p["Series/Networkgraph/QuadTreeNode.js"]], function(v) {
            return class {
                constructor(S, L, N, x) {
                    this.box = {
                        left: S,
                        top: L,
                        width: N,
                        height: x
                    }, this.maxDepth = 25, this.root = new v(this.box), this.root.isInternal = !0, this.root.isRoot = !0, this.root.divideBox()
                }
                calculateMassAndCenter() {
                    this.visitNodeRecursive(null, null, function(S) {
                        S.updateMassAndCenter()
                    })
                }
                insertNodes(S) {
                    for (let L of S) this.root.insert(L, this.maxDepth)
                }
                visitNodeRecursive(S, L, N) {
                    let x;
                    if (S || (S = this.root), S === this.root && L && (x = L(S)), x !== !1) {
                        for (let d of S.nodes) {
                            if (d.isInternal) {
                                if (L && (x = L(d)), x === !1) continue;
                                this.visitNodeRecursive(d, L, N)
                            } else d.body && L && L(d.body);
                            N && N(d)
                        }
                        S === this.root && N && N(S)
                    }
                }
            }
        }), tt(p, "Series/Networkgraph/ReingoldFruchtermanLayout.js", [p["Series/Networkgraph/EulerIntegration.js"], p["Core/Globals.js"], p["Series/GraphLayoutComposition.js"], p["Series/Networkgraph/QuadTree.js"], p["Core/Utilities.js"], p["Series/Networkgraph/VerletIntegration.js"]], function(v, S, L, N, x, d) {
            let {
                win: k
            } = S, {
                clamp: r,
                defined: f,
                isFunction: h,
                fireEvent: y,
                pick: M
            } = x;
            class a {
                constructor() {
                    this.attractiveForce = void 0, this.box = {}, this.currentStep = 0, this.initialRendering = !0, this.integration = void 0, this.links = [], this.nodes = [], this.options = void 0, this.quadTree = void 0, this.repulsiveForce = void 0, this.series = [], this.simulation = !1
                }
                static compose(n) {
                    L.compose(n), L.integrations.euler = v, L.integrations.verlet = d, L.layouts["reingold-fruchterman"] = a
                }
                init(n) {
                    this.options = n, this.nodes = [], this.links = [], this.series = [], this.box = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }, this.setInitialRendering(!0), this.integration = L.integrations[n.integration], this.enableSimulation = n.enableSimulation, this.attractiveForce = M(n.attractiveForce, this.integration.attractiveForceFunction), this.repulsiveForce = M(n.repulsiveForce, this.integration.repulsiveForceFunction), this.approximation = n.approximation
                }
                updateSimulation(n) {
                    this.enableSimulation = M(n, this.options.enableSimulation)
                }
                start() {
                    let n = this.series,
                        i = this.options;
                    this.currentStep = 0, this.forces = n[0] && n[0].forces || [], this.chart = n[0] && n[0].chart, this.initialRendering && (this.initPositions(), n.forEach(function(t) {
                        t.finishedAnimating = !0, t.render()
                    })), this.setK(), this.resetSimulation(i), this.enableSimulation && this.step()
                }
                step() {
                    let n = this.series;
                    for (let i of (this.currentStep++, this.approximation === "barnes-hut" && (this.createQuadTree(), this.quadTree.calculateMassAndCenter()), this.forces || [])) this[i + "Forces"](this.temperature);
                    if (this.applyLimits(), this.temperature = this.coolDown(this.startTemperature, this.diffTemperature, this.currentStep), this.prevSystemTemperature = this.systemTemperature, this.systemTemperature = this.getSystemTemperature(), this.enableSimulation) {
                        for (let i of n) i.chart && i.render();
                        this.maxIterations-- && isFinite(this.temperature) && !this.isStable() ? (this.simulation && k.cancelAnimationFrame(this.simulation), this.simulation = k.requestAnimationFrame(() => this.step())) : (this.simulation = !1, this.series.forEach(i => {
                            y(i, "afterSimulation")
                        }))
                    }
                }
                stop() {
                    this.simulation && k.cancelAnimationFrame(this.simulation)
                }
                setArea(n, i, t, o) {
                    this.box = {
                        left: n,
                        top: i,
                        width: t,
                        height: o
                    }
                }
                setK() {
                    this.k = this.options.linkLength || this.integration.getK(this)
                }
                addElementsToCollection(n, i) {
                    for (let t of n) i.indexOf(t) === -1 && i.push(t)
                }
                removeElementFromCollection(n, i) {
                    let t = i.indexOf(n);
                    t !== -1 && i.splice(t, 1)
                }
                clear() {
                    this.nodes.length = 0, this.links.length = 0, this.series.length = 0, this.resetSimulation()
                }
                resetSimulation() {
                    this.forcedStop = !1, this.systemTemperature = 0, this.setMaxIterations(), this.setTemperature(), this.setDiffTemperature()
                }
                restartSimulation() {
                    this.simulation ? this.resetSimulation() : (this.setInitialRendering(!1), this.enableSimulation ? this.start() : this.setMaxIterations(1), this.chart && this.chart.redraw(), this.setInitialRendering(!0))
                }
                setMaxIterations(n) {
                    this.maxIterations = M(n, this.options.maxIterations)
                }
                setTemperature() {
                    this.temperature = this.startTemperature = Math.sqrt(this.nodes.length)
                }
                setDiffTemperature() {
                    this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1)
                }
                setInitialRendering(n) {
                    this.initialRendering = n
                }
                createQuadTree() {
                    this.quadTree = new N(this.box.left, this.box.top, this.box.width, this.box.height), this.quadTree.insertNodes(this.nodes)
                }
                initPositions() {
                    let n = this.options.initialPositions;
                    if (h(n))
                        for (let i of (n.call(this), this.nodes)) f(i.prevX) || (i.prevX = i.plotX), f(i.prevY) || (i.prevY = i.plotY), i.dispX = 0, i.dispY = 0;
                    else n === "circle" ? this.setCircularPositions() : this.setRandomPositions()
                }
                setCircularPositions() {
                    let n, i = this.box,
                        t = this.nodes,
                        o = t.length + 1,
                        e = 2 * Math.PI / o,
                        s = t.filter(function(z) {
                            return z.linksTo.length === 0
                        }),
                        C = {},
                        m = this.options.initialPositionRadius,
                        O = z => {
                            for (let F of z.linksFrom || []) C[F.toNode.id] || (C[F.toNode.id] = !0, j.push(F.toNode), O(F.toNode))
                        },
                        j = [];
                    for (let z of s) j.push(z), O(z);
                    if (j.length)
                        for (let z of t) j.indexOf(z) === -1 && j.push(z);
                    else j = t;
                    for (let z = 0, F = j.length; z < F; ++z)(n = j[z]).plotX = n.prevX = M(n.plotX, i.width / 2 + m * Math.cos(z * e)), n.plotY = n.prevY = M(n.plotY, i.height / 2 + m * Math.sin(z * e)), n.dispX = 0, n.dispY = 0
                }
                setRandomPositions() {
                    let n, i = this.box,
                        t = this.nodes,
                        o = t.length + 1,
                        e = s => {
                            let C = s * s / Math.PI;
                            return C - Math.floor(C)
                        };
                    for (let s = 0, C = t.length; s < C; ++s)(n = t[s]).plotX = n.prevX = M(n.plotX, i.width * e(s)), n.plotY = n.prevY = M(n.plotY, i.height * e(o + s)), n.dispX = 0, n.dispY = 0
                }
                force(n, ...i) {
                    this.integration[n].apply(this, i)
                }
                barycenterForces() {
                    this.getBarycenter(), this.force("barycenter")
                }
                getBarycenter() {
                    let n = 0,
                        i = 0,
                        t = 0;
                    for (let o of this.nodes) i += o.plotX * o.mass, t += o.plotY * o.mass, n += o.mass;
                    return this.barycenter = {
                        x: i,
                        y: t,
                        xFactor: i / n,
                        yFactor: t / n
                    }, this.barycenter
                }
                barnesHutApproximation(n, i) {
                    let t, o, e = this.getDistXY(n, i),
                        s = this.vectorLength(e);
                    return n !== i && s !== 0 && (i.isInternal ? i.boxSize / s < this.options.theta && s !== 0 ? (o = this.repulsiveForce(s, this.k), this.force("repulsive", n, o * i.mass, e, s), t = !1) : t = !0 : (o = this.repulsiveForce(s, this.k), this.force("repulsive", n, o * i.mass, e, s))), t
                }
                repulsiveForces() {
                    if (this.approximation === "barnes-hut")
                        for (let n of this.nodes) this.quadTree.visitNodeRecursive(null, i => this.barnesHutApproximation(n, i));
                    else {
                        let n, i, t;
                        for (let o of this.nodes)
                            for (let e of this.nodes) o === e || o.fixedPosition || (t = this.getDistXY(o, e), (i = this.vectorLength(t)) !== 0 && (n = this.repulsiveForce(i, this.k), this.force("repulsive", o, n * e.mass, t, i)))
                    }
                }
                attractiveForces() {
                    let n, i, t;
                    for (let o of this.links) o.fromNode && o.toNode && (n = this.getDistXY(o.fromNode, o.toNode), (i = this.vectorLength(n)) !== 0 && (t = this.attractiveForce(i, this.k), this.force("attractive", o, t, n, i)))
                }
                applyLimits() {
                    let n = this.nodes;
                    for (let i of n) {
                        if (i.fixedPosition) return;
                        this.integration.integrate(this, i), this.applyLimitBox(i, this.box), i.dispX = 0, i.dispY = 0
                    }
                }
                applyLimitBox(n, i) {
                    let t = n.radius;
                    n.plotX = r(n.plotX, i.left + t, i.width - t), n.plotY = r(n.plotY, i.top + t, i.height - t)
                }
                coolDown(n, i, t) {
                    return n - i * t
                }
                isStable() {
                    return 1e-5 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || this.temperature <= 0
                }
                getSystemTemperature() {
                    let n = 0;
                    for (let i of this.nodes) n += i.temperature;
                    return n
                }
                vectorLength(n) {
                    return Math.sqrt(n.x * n.x + n.y * n.y)
                }
                getDistR(n, i) {
                    let t = this.getDistXY(n, i);
                    return this.vectorLength(t)
                }
                getDistXY(n, i) {
                    let t = n.plotX - i.plotX,
                        o = n.plotY - i.plotY;
                    return {
                        x: t,
                        y: o,
                        absX: Math.abs(t),
                        absY: Math.abs(o)
                    }
                }
            }
            return a
        }), tt(p, "Series/PackedBubble/PackedBubbleLayout.js", [p["Series/GraphLayoutComposition.js"], p["Series/PackedBubble/PackedBubbleIntegration.js"], p["Series/Networkgraph/ReingoldFruchtermanLayout.js"], p["Core/Utilities.js"]], function(v, S, L, N) {
            let {
                addEvent: x,
                pick: d
            } = N, k = [];

            function r() {
                let y = this.series,
                    M = [];
                return y.forEach(a => {
                    a.parentNode && a.parentNode.selected && M.push(a.parentNode)
                }), M
            }

            function f() {
                this.allDataPoints && delete this.allDataPoints
            }
            class h extends L {
                constructor() {
                    super(...arguments), this.index = NaN, this.nodes = [], this.options = void 0, this.series = []
                }
                static compose(M) {
                    if (L.compose(M), v.integrations.packedbubble = S, v.layouts.packedbubble = h, N.pushUnique(k, M)) {
                        x(M, "beforeRedraw", f);
                        let a = M.prototype;
                        a.getSelectedParentNodes = r
                    }
                }
                beforeStep() {
                    this.options.marker && this.series.forEach(M => {
                        M && M.calculateParentRadius()
                    })
                }
                isStable() {
                    let M = Math.abs(this.prevSystemTemperature - this.systemTemperature),
                        a = 10 * this.systemTemperature / Math.sqrt(this.nodes.length);
                    return 1 > Math.abs(a) && M < 1e-5 || this.temperature <= 0
                }
                setCircularPositions() {
                    let M = this.box,
                        a = this.nodes,
                        c = a.length + 1,
                        n = 2 * Math.PI / c,
                        i = this.options.initialPositionRadius,
                        t, o, e = 0;
                    for (let s of a) this.options.splitSeries && !s.isParentNode ? (t = s.series.parentNode.plotX, o = s.series.parentNode.plotY) : (t = M.width / 2, o = M.height / 2), s.plotX = s.prevX = d(s.plotX, t + i * Math.cos(s.index || e * n)), s.plotY = s.prevY = d(s.plotY, o + i * Math.sin(s.index || e * n)), s.dispX = 0, s.dispY = 0, e++
                }
                repulsiveForces() {
                    let M, a, c, n = this,
                        i = n.options.bubblePadding;
                    n.nodes.forEach(t => {
                        t.degree = t.mass, t.neighbours = 0, n.nodes.forEach(o => {
                            M = 0, t !== o && !t.fixedPosition && (n.options.seriesInteraction || t.series === o.series) && (c = n.getDistXY(t, o), (a = n.vectorLength(c) - (t.marker.radius + o.marker.radius + i)) < 0 && (t.degree += .01, t.neighbours++, M = n.repulsiveForce(-a / Math.sqrt(t.neighbours), n.k, t, o)), n.force("repulsive", t, M * o.mass, c, o, a))
                        })
                    })
                }
                applyLimitBox(M, a) {
                    let c, n;
                    this.options.splitSeries && !M.isParentNode && this.options.parentNodeLimit && (c = this.getDistXY(M, M.series.parentNode), (n = M.series.parentNodeRadius - M.marker.radius - this.vectorLength(c)) < 0 && n > -2 * M.marker.radius && (M.plotX -= .01 * c.x, M.plotY -= .01 * c.y)), super.applyLimitBox(M, a)
                }
            }
            return v.layouts.packedbubble = h, h
        }), tt(p, "Series/SimulationSeriesUtilities.js", [p["Core/Utilities.js"], p["Core/Animation/AnimationUtilities.js"]], function(v, S) {
            let {
                syncTimeout: L
            } = v, {
                animObject: N
            } = S;
            return {
                initDataLabels: function() {
                    let x = this.options.dataLabels;
                    if (!this.dataLabelsGroup) {
                        let d = this.initDataLabelsGroup();
                        return !this.chart.styledMode && (x != null && x.style) && d.css(x.style), d.attr({
                            opacity: 0
                        }), this.visible && d.show(), d
                    }
                    return this.dataLabelsGroup.attr({
                        opacity: 1
                    }), this.dataLabelsGroup
                },
                initDataLabelsDefer: function() {
                    var d;
                    let x = this.options.dataLabels;
                    x != null && x.defer && ((d = this.options.layoutAlgorithm) != null && d.enableSimulation) ? L(() => {
                        this.deferDataLabels = !1
                    }, x ? N(x.animation).defer : 0) : this.deferDataLabels = !1
                }
            }
        }), tt(p, "Series/PackedBubble/PackedBubbleSeries.js", [p["Core/Color/Color.js"], p["Series/DragNodesComposition.js"], p["Series/GraphLayoutComposition.js"], p["Core/Globals.js"], p["Series/PackedBubble/PackedBubblePoint.js"], p["Series/PackedBubble/PackedBubbleSeriesDefaults.js"], p["Series/PackedBubble/PackedBubbleLayout.js"], p["Core/Series/SeriesRegistry.js"], p["Series/SimulationSeriesUtilities.js"], p["Core/Utilities.js"], p["Core/Animation/AnimationUtilities.js"]], function(v, S, L, N, x, d, k, r, f, h, y) {
            let {
                parse: M
            } = v, {
                noop: a
            } = N, {
                series: {
                    prototype: c
                },
                seriesTypes: {
                    bubble: n
                }
            } = r, {
                initDataLabels: i,
                initDataLabelsDefer: t
            } = f, {
                addEvent: o,
                clamp: e,
                defined: s,
                extend: C,
                fireEvent: m,
                isArray: O,
                isNumber: j,
                merge: z,
                pick: F,
                syncTimeout: w
            } = h;
            class B extends n {
                constructor() {
                    super(...arguments), this.chart = void 0, this.data = void 0, this.layout = void 0, this.options = void 0, this.parentNodeMass = 0, this.points = void 0, this.xData = void 0, this.deferDataLabels = !0
                }
                static compose(l, P, b, u) {
                    n.compose(l, P, b, u), S.compose(P), k.compose(P)
                }
                accumulateAllPoints() {
                    let l, P = this.chart,
                        b = [];
                    for (let u of P.series)
                        if (u.is("packedbubble") && u.reserveSpace()) {
                            l = u.yData || [];
                            for (let g = 0; g < l.length; g++) b.push([null, null, l[g], u.index, g, {
                                id: g,
                                marker: {
                                    radius: 0
                                }
                            }])
                        } return b
                }
                addLayout() {
                    let l = this.options.layoutAlgorithm = this.options.layoutAlgorithm || {},
                        P = l.type || "packedbubble",
                        b = this.chart.options.chart,
                        u = this.chart.graphLayoutsStorage,
                        g = this.chart.graphLayoutsLookup,
                        T;
                    u || (this.chart.graphLayoutsStorage = u = {}, this.chart.graphLayoutsLookup = g = []), (T = u[P]) || (l.enableSimulation = s(b.forExport) ? !b.forExport : l.enableSimulation, u[P] = T = new L.layouts[P], T.init(l), g.splice(T.index, 0, T)), this.layout = T, this.points.forEach(D => {
                        D.mass = 2, D.degree = 1, D.collisionNmb = 1
                    }), T.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight), T.addElementsToCollection([this], T.series), T.addElementsToCollection(this.points, T.nodes)
                }
                addSeriesLayout() {
                    let l = this.options.layoutAlgorithm = this.options.layoutAlgorithm || {},
                        P = l.type || "packedbubble",
                        b = this.chart.graphLayoutsStorage,
                        u = this.chart.graphLayoutsLookup,
                        g = z(l, l.parentNodeOptions, {
                            enableSimulation: this.layout.options.enableSimulation
                        }),
                        T = b[P + "-series"];
                    T || (b[P + "-series"] = T = new L.layouts[P], T.init(g), u.splice(T.index, 0, T)), this.parentNodeLayout = T, this.createParentNodes()
                }
                calculateParentRadius() {
                    let l = this.seriesBox();
                    this.parentNodeRadius = e(Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20, 20, l ? Math.max(Math.sqrt(Math.pow(l.width, 2) + Math.pow(l.height, 2)) / 2 + 20, 20) : Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20), this.parentNode && (this.parentNode.marker.radius = this.parentNode.radius = this.parentNodeRadius)
                }
                calculateZExtremes() {
                    let l = this.chart,
                        P = l.series,
                        b = this.options.zMin,
                        u = this.options.zMax,
                        g = 1 / 0,
                        T = -1 / 0;
                    return b && u ? [b, u] : (P.forEach(D => {
                        D.yData.forEach(E => {
                            s(E) && (E > T && (T = E), E < g && (g = E))
                        })
                    }), [b = F(b, g), u = F(u, T)])
                }
                checkOverlap(l, P) {
                    let b = l[0] - P[0],
                        u = l[1] - P[1],
                        g = l[2] + P[2];
                    return Math.sqrt(b * b + u * u) - Math.abs(g) < -.001
                }
                createParentNodes() {
                    let l = this.pointClass,
                        P = this.chart,
                        b = this.parentNodeLayout,
                        u = this.layout.options,
                        g, T = this.parentNode,
                        D = {
                            radius: this.parentNodeRadius,
                            lineColor: this.color,
                            fillColor: M(this.color).brighten(.4).get()
                        };
                    u.parentNodeOptions && (D = z(u.parentNodeOptions.marker || {}, D)), this.parentNodeMass = 0, this.points.forEach(E => {
                        this.parentNodeMass += Math.PI * Math.pow(E.marker.radius, 2)
                    }), this.calculateParentRadius(), b.nodes.forEach(E => {
                        E.seriesIndex === this.index && (g = !0)
                    }), b.setArea(0, 0, P.plotWidth, P.plotHeight), g || (T || (T = new l().init(this, {
                        mass: this.parentNodeRadius / 2,
                        marker: D,
                        dataLabels: {
                            inside: !1
                        },
                        states: {
                            normal: {
                                marker: D
                            },
                            hover: {
                                marker: D
                            }
                        },
                        dataLabelOnNull: !0,
                        degree: this.parentNodeRadius,
                        isParentNode: !0,
                        seriesIndex: this.index
                    })), this.parentNode && (T.plotX = this.parentNode.plotX, T.plotY = this.parentNode.plotY), this.parentNode = T, b.addElementsToCollection([this], b.series), b.addElementsToCollection([T], b.nodes))
                }
                deferLayout() {
                    let l = this.options.layoutAlgorithm;
                    this.visible && (this.addLayout(), l.splitSeries && this.addSeriesLayout())
                }
                destroy() {
                    this.chart.graphLayoutsLookup && this.chart.graphLayoutsLookup.forEach(l => {
                        l.removeElementFromCollection(this, l.series)
                    }, this), this.parentNode && this.parentNodeLayout && (this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes), this.parentNode.dataLabel && (this.parentNode.dataLabel = this.parentNode.dataLabel.destroy())), c.destroy.apply(this, arguments)
                }
                drawDataLabels() {
                    !this.deferDataLabels && (c.drawDataLabels.call(this, this.points), this.parentNode && (this.parentNode.formatPrefix = "parentNode", c.drawDataLabels.call(this, [this.parentNode])))
                }
                drawGraph() {
                    var g;
                    if (!this.layout || !this.layout.options.splitSeries) return;
                    let l = this.chart,
                        P = this.layout.options.parentNodeOptions.marker,
                        b = {
                            fill: P.fillColor || M(this.color).brighten(.4).get(),
                            opacity: P.fillOpacity,
                            stroke: P.lineColor || this.color,
                            "stroke-width": F(P.lineWidth, this.options.lineWidth)
                        },
                        u = {};
                    this.parentNodesGroup = this.plotGroup("parentNodesGroup", "parentNode", this.visible ? "inherit" : "hidden", .1, l.seriesGroup), (g = this.group) == null || g.attr({
                        zIndex: 2
                    }), this.calculateParentRadius(), this.parentNode && s(this.parentNode.plotX) && s(this.parentNode.plotY) && s(this.parentNodeRadius) && (u = z({
                        x: this.parentNode.plotX - this.parentNodeRadius,
                        y: this.parentNode.plotY - this.parentNodeRadius,
                        width: 2 * this.parentNodeRadius,
                        height: 2 * this.parentNodeRadius
                    }, b), this.parentNode.graphic || (this.graph = this.parentNode.graphic = l.renderer.symbol(b.symbol).add(this.parentNodesGroup)), this.parentNode.graphic.attr(u))
                }
                drawTracker() {
                    let l, P = this.parentNode;
                    super.drawTracker(), P && (l = O(P.dataLabels) ? P.dataLabels : P.dataLabel ? [P.dataLabel] : [], P.graphic && (P.graphic.element.point = P), l.forEach(b => {
                        b.div ? b.div.point = P : b.element.point = P
                    }))
                }
                getPointRadius() {
                    let l, P, b, u, g = this.chart,
                        T = g.plotWidth,
                        D = g.plotHeight,
                        E = this.options,
                        A = E.useSimulation,
                        X = Math.min(T, D),
                        U = {},
                        I = [],
                        q = g.allDataPoints || [],
                        W = q.length;
                    ["minSize", "maxSize"].forEach(Z => {
                        let R = parseInt(E[Z], 10),
                            G = /%$/.test(E[Z]);
                        U[Z] = G ? X * R / 100 : R * Math.sqrt(W)
                    }), g.minRadius = l = U.minSize / Math.sqrt(W), g.maxRadius = P = U.maxSize / Math.sqrt(W);
                    let K = A ? this.calculateZExtremes() : [l, P];
                    q.forEach((Z, R) => {
                        b = A ? e(Z[2], K[0], K[1]) : Z[2], (u = this.getRadius(K[0], K[1], l, P, b)) === 0 && (u = null), q[R][2] = u, I.push(u)
                    }), this.radii = I
                }
                init() {
                    return c.init.apply(this, arguments), t.call(this), this.eventsToUnbind.push(o(this, "updatedData", function() {
                        this.chart.series.forEach(l => {
                            l.type === this.type && (l.isDirty = !0)
                        }, this)
                    })), this
                }
                onMouseUp(l) {
                    if (l.fixedPosition && !l.removed) {
                        let P, b = this.layout,
                            u = this.parentNodeLayout;
                        u && b.options.dragBetweenSeries && u.nodes.forEach(g => {
                            l && l.marker && g !== l.series.parentNode && (P = b.getDistXY(l, g), b.vectorLength(P) - g.marker.radius - l.marker.radius < 0 && (g.series.addPoint(z(l.options, {
                                plotX: l.plotX,
                                plotY: l.plotY
                            }), !1), b.removeElementFromCollection(l, b.nodes), l.remove()))
                        }), S.onMouseUp.apply(this, arguments)
                    }
                }
                placeBubbles(l) {
                    let P = this.checkOverlap,
                        b = this.positionBubble,
                        u = [],
                        g = 1,
                        T = 0,
                        D = 0,
                        E, A = [],
                        X, U = l.sort((I, q) => q[2] - I[2]);
                    if (U.length) {
                        if (u.push([
                            [0, 0, U[0][2], U[0][3], U[0][4]]
                        ]), U.length > 1)
                            for (u.push([
                                [0, 0 - U[1][2] - U[0][2], U[1][2], U[1][3], U[1][4]]
                            ]), X = 2; X < U.length; X++) U[X][2] = U[X][2] || 1, P(E = b(u[g][T], u[g - 1][D], U[X]), u[g][0]) ? (u.push([]), D = 0, u[g + 1].push(b(u[g][T], u[g][0], U[X])), g++, T = 0) : g > 1 && u[g - 1][D + 1] && P(E, u[g - 1][D + 1]) ? (D++, u[g].push(b(u[g][T], u[g - 1][D], U[X])), T++) : (T++, u[g].push(E));
                        this.chart.stages = u, this.chart.rawPositions = [].concat.apply([], u), this.resizeRadius(), A = this.chart.rawPositions
                    }
                    return A
                }
                pointAttribs(l, P) {
                    let b = this.options,
                        u = l && l.isParentNode,
                        g = b.marker;
                    u && b.layoutAlgorithm && b.layoutAlgorithm.parentNodeOptions && (g = b.layoutAlgorithm.parentNodeOptions.marker);
                    let T = g.fillOpacity,
                        D = c.pointAttribs.call(this, l, P);
                    return T !== 1 && (D["fill-opacity"] = T), D
                }
                positionBubble(l, P, b) {
                    let u = Math.pow,
                        g = (0, Math.sqrt)(u(l[0] - P[0], 2) + u(l[1] - P[1], 2)),
                        T = (0, Math.acos)((u(g, 2) + u(b[2] + P[2], 2) - u(b[2] + l[2], 2)) / (2 * (b[2] + P[2]) * g)),
                        D = (0, Math.asin)((0, Math.abs)(l[0] - P[0]) / g),
                        E = l[1] - P[1] < 0 ? 0 : Math.PI,
                        A = (l[0] - P[0]) * (l[1] - P[1]) < 0 ? 1 : -1,
                        X = E + T + D * A,
                        U = P[0] + (P[2] + b[2]) * Math.sin(X),
                        I = P[1] - (P[2] + b[2]) * Math.cos(X);
                    return [U, I, b[2], b[3], b[4]]
                }
                render() {
                    let l = [];
                    c.render.apply(this, arguments), !this.options.dataLabels.allowOverlap && (this.data.forEach(P => {
                        O(P.dataLabels) && P.dataLabels.forEach(b => {
                            l.push(b)
                        })
                    }), this.options.useSimulation && this.chart.hideOverlappingLabels(l))
                }
                resizeRadius() {
                    let l, P, b, u, g, T = this.chart,
                        D = T.rawPositions,
                        E = Math.min,
                        A = Math.max,
                        X = T.plotLeft,
                        U = T.plotTop,
                        I = T.plotHeight,
                        q = T.plotWidth;
                    for (let R of (l = b = Number.POSITIVE_INFINITY, P = u = Number.NEGATIVE_INFINITY, D)) g = R[2], l = E(l, R[0] - g), P = A(P, R[0] + g), b = E(b, R[1] - g), u = A(u, R[1] + g);
                    let W = [P - l, u - b],
                        K = [(q - X) / W[0], (I - U) / W[1]],
                        Z = E.apply([], K);
                    if (Math.abs(Z - 1) > 1e-10) {
                        for (let R of D) R[2] *= Z;
                        this.placeBubbles(D)
                    } else T.diffY = I / 2 + U - b - (u - b) / 2, T.diffX = q / 2 + X - l - (P - l) / 2
                }
                seriesBox() {
                    let l, P = this.chart,
                        b = this.data,
                        u = Math.max,
                        g = Math.min,
                        T = [P.plotLeft, P.plotLeft + P.plotWidth, P.plotTop, P.plotTop + P.plotHeight];
                    return b.forEach(D => {
                        s(D.plotX) && s(D.plotY) && D.marker.radius && (l = D.marker.radius, T[0] = g(T[0], D.plotX - l), T[1] = u(T[1], D.plotX + l), T[2] = g(T[2], D.plotY - l), T[3] = u(T[3], D.plotY + l))
                    }), j(T.width / T.height) ? T : null
                }
                setVisible() {
                    let l = this;
                    c.setVisible.apply(l, arguments), l.parentNodeLayout && l.graph ? l.visible ? (l.graph.show(), l.parentNode.dataLabel && l.parentNode.dataLabel.show()) : (l.graph.hide(), l.parentNodeLayout.removeElementFromCollection(l.parentNode, l.parentNodeLayout.nodes), l.parentNode.dataLabel && l.parentNode.dataLabel.hide()) : l.layout && (l.visible ? l.layout.addElementsToCollection(l.points, l.layout.nodes) : l.points.forEach(P => {
                        l.layout.removeElementFromCollection(P, l.layout.nodes)
                    }))
                }
                translate() {
                    let l, P, b, u = this.chart,
                        g = this.data,
                        T = this.index,
                        D = this.options.useSimulation;
                    for (let E of (this.processedXData = this.xData, this.generatePoints(), s(u.allDataPoints) || (u.allDataPoints = this.accumulateAllPoints(), this.getPointRadius()), D ? b = u.allDataPoints : (b = this.placeBubbles(u.allDataPoints), this.options.draggable = !1), b)) E[3] === T && (l = g[E[4]], P = F(E[2], void 0), D || (l.plotX = E[0] - u.plotLeft + u.diffX, l.plotY = E[1] - u.plotTop + u.diffY), j(P) && (l.marker = C(l.marker, {
                        radius: P,
                        width: 2 * P,
                        height: 2 * P
                    }), l.radius = P));
                    D && this.deferLayout(), m(this, "afterTranslate")
                }
            }
            return B.defaultOptions = z(n.defaultOptions, d), C(B.prototype, {
                pointClass: x,
                axisTypes: [],
                directTouch: !0,
                forces: ["barycenter", "repulsive"],
                hasDraggableNodes: !0,
                isCartesian: !1,
                noSharedTooltip: !0,
                pointArrayMap: ["value"],
                pointValKey: "value",
                requireSorting: !1,
                trackerGroups: ["group", "dataLabelsGroup", "parentNodesGroup"],
                initDataLabels: i,
                alignDataLabel: c.alignDataLabel,
                indexateNodes: a,
                onMouseDown: S.onMouseDown,
                onMouseMove: S.onMouseMove,
                redrawHalo: S.redrawHalo,
                searchPoint: a
            }), r.registerSeriesType("packedbubble", B), B
        }), tt(p, "Series/Polygon/PolygonSeriesDefaults.js", [], function() {
            return {
                marker: {
                    enabled: !1,
                    states: {
                        hover: {
                            enabled: !1
                        }
                    }
                },
                stickyTracking: !1,
                tooltip: {
                    followPointer: !0,
                    pointFormat: ""
                },
                trackByArea: !0,
                legendSymbol: "rectangle"
            }
        }), tt(p, "Series/Polygon/PolygonSeries.js", [p["Core/Globals.js"], p["Series/Polygon/PolygonSeriesDefaults.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L, N) {
            let {
                noop: x
            } = v, {
                area: d,
                line: k,
                scatter: r
            } = L.seriesTypes, {
                extend: f,
                merge: h
            } = N;
            class y extends r {
                constructor() {
                    super(...arguments), this.data = void 0, this.options = void 0, this.points = void 0
                }
                getGraphPath() {
                    let a = k.prototype.getGraphPath.call(this),
                        c = a.length + 1;
                    for (; c--;)(c === a.length || a[c][0] === "M") && c > 0 && a.splice(c, 0, ["Z"]);
                    return this.areaPath = a, a
                }
                drawGraph() {
                    this.options.fillColor = this.color, d.prototype.drawGraph.call(this)
                }
            }
            return y.defaultOptions = h(r.defaultOptions, S), f(y.prototype, {
                type: "polygon",
                drawTracker: k.prototype.drawTracker,
                setStackedPoints: x
            }), L.registerSeriesType("polygon", y), y
        }), tt(p, "Core/Axis/RadialAxis.js", [p["Core/Axis/AxisDefaults.js"], p["Core/Defaults.js"], p["Core/Globals.js"], p["Core/Utilities.js"]], function(v, S, L, N) {
            var x;
            let {
                defaultOptions: d
            } = S, {
                noop: k
            } = L, {
                addEvent: r,
                correctFloat: f,
                defined: h,
                extend: y,
                fireEvent: M,
                merge: a,
                pick: c,
                relativeLength: n,
                wrap: i
            } = N;
            return function(t) {
                let o = [],
                    e = {
                        gridLineWidth: 1,
                        labels: {
                            align: void 0,
                            x: 0,
                            y: void 0,
                            style: {
                                textOverflow: "none"
                            }
                        },
                        maxPadding: 0,
                        minPadding: 0,
                        showLastLabel: !1,
                        tickLength: 0
                    },
                    s = {
                        labels: {
                            align: "center",
                            distance: -25,
                            x: 0,
                            y: void 0
                        },
                        minorGridLineWidth: 0,
                        minorTickInterval: "auto",
                        minorTickLength: 10,
                        minorTickPosition: "inside",
                        minorTickWidth: 1,
                        tickLength: 10,
                        tickPosition: "inside",
                        tickWidth: 2,
                        title: {
                            rotation: 0
                        },
                        zIndex: 2
                    },
                    C = {
                        gridLineInterpolation: "circle",
                        gridLineWidth: 1,
                        labels: {
                            align: "right",
                            x: -3,
                            y: -2
                        },
                        showLastLabel: !1,
                        title: {
                            x: 4,
                            text: null,
                            rotation: 90
                        }
                    };

                function m() {
                    this.autoConnect = this.isCircular && c(this.userMax, this.options.max) === void 0 && f(this.endAngleRad - this.startAngleRad) === f(2 * Math.PI), !this.isCircular && this.chart.inverted && this.max++, this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
                }

                function O() {
                    return () => {
                        if (this.isRadial && this.tickPositions && this.options.labels && this.options.labels.allowOverlap !== !0) return this.tickPositions.map(R => this.ticks[R] && this.ticks[R].label).filter(R => !!R)
                    }
                }

                function j() {
                    return k
                }

                function z(R, G, H) {
                    let Q = this.pane.center,
                        V = R.value,
                        J, $, it;
                    return this.isCircular ? (h(V) ? R.point && (R.point.shapeArgs || {}).start && (V = this.chart.inverted ? this.translate(R.point.rectPlotY, !0) : R.point.x) : ($ = R.chartX || 0, it = R.chartY || 0, V = this.translate(Math.atan2(it - H, $ - G) - this.startAngleRad, !0)), $ = (J = this.getPosition(V)).x, it = J.y) : (h(V) || ($ = R.chartX, it = R.chartY), h($) && h(it) && (H = Q[1] + this.chart.plotTop, V = this.translate(Math.min(Math.sqrt(Math.pow($ - G, 2) + Math.pow(it - H, 2)), Q[2] / 2) - Q[3] / 2, !0))), [V, $ || 0, it || 0]
                }

                function F(R, G, H) {
                    let Q = this.pane.center,
                        V = this.chart,
                        J = this.left || 0,
                        $ = this.top || 0,
                        it, et = c(G, Q[2] / 2 - this.offset),
                        _;
                    return H === void 0 && (H = this.horiz ? 0 : this.center && -this.center[3] / 2), H && (et += H), this.isCircular || G !== void 0 ? ((_ = this.chart.renderer.symbols.arc(J + Q[0], $ + Q[1], et, et, {
                        start: this.startAngleRad,
                        end: this.endAngleRad,
                        open: !0,
                        innerR: 0
                    })).xBounds = [J + Q[0]], _.yBounds = [$ + Q[1] - et]) : (it = this.postTranslate(this.angleRad, et), _ = [
                        ["M", this.center[0] + V.plotLeft, this.center[1] + V.plotTop],
                        ["L", it.x, it.y]
                    ]), _
                }

                function w() {
                    this.constructor.prototype.getOffset.call(this), this.chart.axisOffset[this.side] = 0
                }

                function B(R, G, H) {
                    let Q = this.chart,
                        V = ut => {
                            if (typeof ut == "string") {
                                let ft = parseInt(ut, 10);
                                return at.test(ut) && (ft = ft * it / 100), ft
                            }
                            return ut
                        },
                        J = this.center,
                        $ = this.startAngleRad,
                        it = J[2] / 2,
                        et = Math.min(this.offset, 0),
                        _ = this.left || 0,
                        lt = this.top || 0,
                        at = /%$/,
                        ot = this.isCircular,
                        st, rt, nt, dt, mt, ct, ht = c(V(H.outerRadius), it),
                        pt = V(H.innerRadius),
                        bt = c(V(H.thickness), 10);
                    if (this.options.gridLineInterpolation === "polygon") ct = this.getPlotLinePath({
                        value: R
                    }).concat(this.getPlotLinePath({
                        value: G,
                        reverse: !0
                    }));
                    else {
                        R = Math.max(R, this.min), G = Math.min(G, this.max);
                        let ut = this.translate(R),
                            ft = this.translate(G);
                        ot || (ht = ut || 0, pt = ft || 0), H.shape !== "circle" && ot ? (st = $ + (ut || 0), rt = $ + (ft || 0)) : (st = -Math.PI / 2, rt = 1.5 * Math.PI, mt = !0), ht -= et, bt -= et, ct = Q.renderer.symbols.arc(_ + J[0], lt + J[1], ht, ht, {
                            start: Math.min(st, rt),
                            end: Math.max(st, rt),
                            innerR: c(pt, ht - bt),
                            open: mt
                        }), ot && (nt = (rt + st) / 2, dt = _ + J[0] + J[2] / 2 * Math.cos(nt), ct.xBounds = nt > -Math.PI / 2 && nt < Math.PI / 2 ? [dt, Q.plotWidth] : [0, dt], ct.yBounds = [lt + J[1] + J[2] / 2 * Math.sin(nt)], ct.yBounds[0] += nt > -Math.PI && nt < 0 || nt > Math.PI ? -10 : 10)
                    }
                    return ct
                }

                function Y(R) {
                    let G = this.pane.center,
                        H = this.chart,
                        Q = H.inverted,
                        V = R.reverse,
                        J = this.pane.options.background ? this.pane.options.background[0] || this.pane.options.background : {},
                        $ = J.innerRadius || "0%",
                        it = J.outerRadius || "100%",
                        et = G[0] + H.plotLeft,
                        _ = G[1] + H.plotTop,
                        lt = this.height,
                        at = R.isCrosshair,
                        ot = G[3] / 2,
                        st = R.value,
                        rt, nt, dt, mt, ct, ht, pt, bt, ut, ft = this.getPosition(st),
                        xt = ft.x,
                        yt = ft.y;
                    if (at && (st = (bt = this.getCrosshairPosition(R, et, _))[0], xt = bt[1], yt = bt[2]), this.isCircular) nt = Math.sqrt(Math.pow(xt - et, 2) + Math.pow(yt - _, 2)), dt = typeof $ == "string" ? n($, 1) : $ / nt, mt = typeof it == "string" ? n(it, 1) : it / nt, G && ot && (dt < (rt = ot / nt) && (dt = rt), mt < rt && (mt = rt)), ut = [
                        ["M", et + dt * (xt - et), _ - dt * (_ - yt)],
                        ["L", xt - (1 - mt) * (xt - et), yt + (1 - mt) * (_ - yt)]
                    ];
                    else if ((st = this.translate(st)) && (st < 0 || st > lt) && (st = 0), this.options.gridLineInterpolation === "circle") ut = this.getLinePath(0, st, ot);
                    else if (ut = [], H[Q ? "yAxis" : "xAxis"].forEach(vt => {
                        vt.pane === this.pane && (ct = vt)
                    }), ct) {
                        pt = ct.tickPositions, ct.autoConnect && (pt = pt.concat([pt[0]])), V && (pt = pt.slice().reverse()), st && (st += ot);
                        for (let vt = 0; vt < pt.length; vt++) ht = ct.getPosition(pt[vt], st), ut.push(vt ? ["L", ht.x, ht.y] : ["M", ht.x, ht.y])
                    }
                    return ut
                }

                function l(R, G) {
                    let H = this.translate(R);
                    return this.postTranslate(this.isCircular ? H : this.angleRad, c(this.isCircular ? G : H < 0 ? 0 : H, this.center[2] / 2) - this.offset)
                }

                function P() {
                    let R = this.center,
                        G = this.chart,
                        H = this.options.title;
                    return {
                        x: G.plotLeft + R[0] + (H.x || 0),
                        y: G.plotTop + R[1] - {
                            high: .5,
                            middle: .25,
                            low: 0
                        } [H.align] * R[2] + (H.y || 0)
                    }
                }

                function b(R) {
                    R.beforeSetTickPositions = m, R.createLabelCollector = O, R.getCrosshairPosition = z, R.getLinePath = F, R.getOffset = w, R.getPlotBandPath = B, R.getPlotLinePath = Y, R.getPosition = l, R.getTitlePosition = P, R.postTranslate = U, R.setAxisSize = q, R.setAxisTranslation = W, R.setOptions = K
                }

                function u() {
                    let R = this.chart,
                        G = this.options,
                        H = R.angular && this.isXAxis,
                        Q = this.pane,
                        V = Q && Q.options;
                    if (!H && Q && (R.angular || R.polar)) {
                        let J = 2 * Math.PI,
                            $ = (c(V.startAngle, 0) - 90) * Math.PI / 180,
                            it = (c(V.endAngle, c(V.startAngle, 0) + 360) - 90) * Math.PI / 180;
                        this.angleRad = (G.angle || 0) * Math.PI / 180, this.startAngleRad = $, this.endAngleRad = it, this.offset = G.offset || 0;
                        let et = ($ % J + J) % J,
                            _ = (it % J + J) % J;
                        et > Math.PI && (et -= J), _ > Math.PI && (_ -= J), this.normalizedStartAngleRad = et, this.normalizedEndAngleRad = _
                    }
                }

                function g(R) {
                    this.isRadial && (R.align = void 0, R.preventDefault())
                }

                function T() {
                    if (this.chart && this.chart.labelCollectors) {
                        let R = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
                        R >= 0 && this.chart.labelCollectors.splice(R, 1)
                    }
                }

                function D(R) {
                    let G, H = this.chart,
                        Q = H.inverted,
                        V = H.angular,
                        J = H.polar,
                        $ = this.isXAxis,
                        it = this.coll,
                        et = R.userOptions.pane || 0,
                        _ = this.pane = H.pane && H.pane[et];
                    if (it === "colorAxis") {
                        this.isRadial = !1;
                        return
                    }
                    V ? (V && $ ? (this.isHidden = !0, this.createLabelCollector = j, this.getOffset = k, this.redraw = I, this.render = I, this.setScale = k, this.setCategories = k, this.setTitle = k) : b(this), (G = !$) && (this.defaultPolarOptions = s)) : J && (b(this), G = this.horiz, this.defaultPolarOptions = G ? e : a(it === "xAxis" ? v.defaultXAxisOptions : v.defaultYAxisOptions, C), Q && it === "yAxis" && (this.defaultPolarOptions.stackLabels = v.defaultYAxisOptions.stackLabels, this.defaultPolarOptions.reversedStacks = !0)), V || J ? (this.isRadial = !0, this.labelCollector || (this.labelCollector = this.createLabelCollector()), this.labelCollector && H.labelCollectors.push(this.labelCollector)) : this.isRadial = !1, _ && G && (_.axis = this), this.isCircular = G
                }

                function E() {
                    this.isRadial && this.beforeSetTickPositions()
                }

                function A(R) {
                    let G = this.label;
                    if (!G) return;
                    let H = this.axis,
                        Q = G.getBBox(),
                        V = H.options.labels,
                        J = (H.translate(this.pos) + H.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360,
                        $ = Math.round(J),
                        it = h(V.y) ? 0 : -(.3 * Q.height),
                        et = V.y,
                        _, lt = 20,
                        at = V.align,
                        ot = "end",
                        st = $ < 0 ? $ + 360 : $,
                        rt = st,
                        nt = 0,
                        dt = 0;
                    H.isRadial && (_ = H.getPosition(this.pos, H.center[2] / 2 + n(c(V.distance, -25), H.center[2] / 2, -H.center[2] / 2)), V.rotation === "auto" ? G.attr({
                        rotation: J
                    }) : h(et) || (et = H.chart.renderer.fontMetrics(G).b - Q.height / 2), h(at) || (H.isCircular ? (Q.width > H.len * H.tickInterval / (H.max - H.min) && (lt = 0), at = J > lt && J < 180 - lt ? "left" : J > 180 + lt && J < 360 - lt ? "right" : "center") : at = "center", G.attr({
                        align: at
                    })), at === "auto" && H.tickPositions.length === 2 && H.isCircular && (st > 90 && st < 180 ? st = 180 - st : st > 270 && st <= 360 && (st = 540 - st), rt > 180 && rt <= 360 && (rt = 360 - rt), (H.pane.options.startAngle === $ || H.pane.options.startAngle === $ + 360 || H.pane.options.startAngle === $ - 360) && (ot = "start"), at = $ >= -90 && $ <= 90 || $ >= -360 && $ <= -270 || $ >= 270 && $ <= 360 ? ot === "start" ? "right" : "left" : ot === "start" ? "left" : "right", rt > 70 && rt < 110 && (at = "center"), st < 15 || st >= 180 && st < 195 ? nt = .3 * Q.height : st >= 15 && st <= 35 ? nt = ot === "start" ? 0 : .75 * Q.height : st >= 195 && st <= 215 ? nt = ot === "start" ? .75 * Q.height : 0 : st > 35 && st <= 90 ? nt = ot === "start" ? -(.25 * Q.height) : Q.height : st > 215 && st <= 270 && (nt = ot === "start" ? Q.height : -(.25 * Q.height)), rt < 15 ? dt = ot === "start" ? -(.15 * Q.height) : .15 * Q.height : rt > 165 && rt <= 180 && (dt = ot === "start" ? .15 * Q.height : -(.15 * Q.height)), G.attr({
                        align: at
                    }), G.translate(dt, nt + it)), R.pos.x = _.x + (V.x || 0), R.pos.y = _.y + (et || 0))
                }

                function X(R) {
                    this.axis.getPosition && y(R.pos, this.axis.getPosition(this.pos))
                }

                function U(R, G) {
                    let H = this.chart,
                        Q = this.center;
                    return R = this.startAngleRad + R, {
                        x: H.plotLeft + Q[0] + Math.cos(R) * G,
                        y: H.plotTop + Q[1] + Math.sin(R) * G
                    }
                }

                function I() {
                    this.isDirty = !1
                }

                function q() {
                    let R, G;
                    this.constructor.prototype.setAxisSize.call(this), this.isRadial && (this.pane.updateCenter(this), R = this.center = this.pane.center.slice(), this.isCircular ? this.sector = this.endAngleRad - this.startAngleRad : (G = this.postTranslate(this.angleRad, R[3] / 2), R[0] = G.x - this.chart.plotLeft, R[1] = G.y - this.chart.plotTop), this.len = this.width = this.height = (R[2] - R[3]) * c(this.sector, 1) / 2)
                }

                function W() {
                    this.constructor.prototype.setAxisTranslation.call(this), this.center && (this.isCircular ? this.transA = (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.transA = (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1), this.isXAxis ? this.minPixelPadding = this.transA * this.minPointOffset : this.minPixelPadding = 0)
                }

                function K(R) {
                    let G = this.options = a(this.constructor.defaultOptions, this.defaultPolarOptions, d[this.coll], R);
                    G.plotBands || (G.plotBands = []), M(this, "afterSetOptions")
                }

                function Z(R, G, H, Q, V, J, $) {
                    let it, et = this.axis;
                    return et.isRadial ? ["M", G, H, "L", (it = et.getPosition(this.pos, et.center[2] / 2 + Q)).x, it.y] : R.call(this, G, H, Q, V, J, $)
                }
                t.compose = function(R, G) {
                    return N.pushUnique(o, R) && (r(R, "afterInit", u), r(R, "autoLabelAlign", g), r(R, "destroy", T), r(R, "init", D), r(R, "initialAxisTranslation", E)), N.pushUnique(o, G) && (r(G, "afterGetLabelPosition", A), r(G, "afterGetPosition", X), i(G.prototype, "getMarkPath", Z)), R
                }
            }(x || (x = {})), x
        }), tt(p, "Series/PolarComposition.js", [p["Core/Animation/AnimationUtilities.js"], p["Core/Globals.js"], p["Core/Series/Series.js"], p["Extensions/Pane.js"], p["Core/Axis/RadialAxis.js"], p["Core/Utilities.js"]], function(v, S, L, N, x, d) {
            let {
                animObject: k
            } = v, {
                addEvent: r,
                defined: f,
                find: h,
                isNumber: y,
                merge: M,
                pick: a,
                relativeLength: c,
                splat: n,
                uniqueKey: i,
                wrap: t
            } = d, o = [];

            function e() {
                (this.pane || []).forEach(E => {
                    E.render()
                })
            }

            function s(E) {
                let A = E.args[0].xAxis,
                    X = E.args[0].yAxis,
                    U = E.args[0].chart;
                A && X && (X.gridLineInterpolation === "polygon" ? (A.startOnTick = !0, A.endOnTick = !0) : A.gridLineInterpolation === "polygon" && U.inverted && (X.startOnTick = !0, X.endOnTick = !0))
            }

            function C() {
                this.pane || (this.pane = []), this.options.pane = n(this.options.pane), this.options.pane.forEach(E => {
                    new N(E, this)
                }, this)
            }

            function m(E) {
                let A = E.args.marker,
                    X = this.chart.xAxis[0],
                    U = this.chart.yAxis[0],
                    I = this.chart.inverted,
                    q = I ? U : X,
                    W = I ? X : U;
                if (this.chart.polar) {
                    E.preventDefault();
                    let K = (A.attr ? A.attr("start") : A.start) - q.startAngleRad,
                        Z = A.attr ? A.attr("r") : A.r,
                        R = (A.attr ? A.attr("end") : A.end) - q.startAngleRad,
                        G = A.attr ? A.attr("innerR") : A.innerR;
                    E.result.x = K + q.pos, E.result.width = R - K, E.result.y = W.len + W.pos - G, E.result.height = G - Z
                }
            }

            function O(E) {
                let A = this.chart;
                if (A.polar && A.hoverPane && A.hoverPane.axis) {
                    E.preventDefault();
                    let X = A.hoverPane.center,
                        U = this.mouseDownX || 0,
                        I = this.mouseDownY || 0,
                        q = E.args.chartY,
                        W = E.args.chartX,
                        K = 2 * Math.PI,
                        Z = A.hoverPane.axis.startAngleRad,
                        R = A.hoverPane.axis.endAngleRad,
                        G = A.inverted ? A.xAxis[0] : A.yAxis[0],
                        H = {},
                        Q = "arc";
                    if (H.x = X[0] + A.plotLeft, H.y = X[1] + A.plotTop, this.zoomHor) {
                        let V = Z > 0 ? R - Z : Math.abs(Z) + Math.abs(R),
                            J = Math.atan2(I - A.plotTop - X[1], U - A.plotLeft - X[0]) - Z,
                            $ = Math.atan2(q - A.plotTop - X[1], W - A.plotLeft - X[0]) - Z;
                        if (H.r = X[2] / 2, H.innerR = X[3] / 2, J <= 0 && (J += K), $ <= 0 && ($ += K), $ < J && ($ = [J, J = $][0]), V < K) {
                            let _ = R + (K - V) / 2;
                            Z + $ > _ && ($ = J, J = Z <= 0 ? Z : 0)
                        }
                        let it = H.start = Math.max(J + Z, Z),
                            et = H.end = Math.min($ + Z, R);
                        if (G.options.gridLineInterpolation === "polygon") {
                            let _ = A.hoverPane.axis,
                                lt = (_.tickInterval, it - _.startAngleRad + _.pos),
                                at = G.getPlotLinePath({
                                    value: G.max
                                }),
                                ot = _.toValue(lt),
                                st = _.toValue(lt + (et - it));
                            if (ot < _.getExtremes().min) {
                                let {
                                    min: rt,
                                    max: nt
                                } = _.getExtremes();
                                ot = nt - (rt - ot)
                            }
                            if (st < _.getExtremes().min) {
                                let {
                                    min: rt,
                                    max: nt
                                } = _.getExtremes();
                                st = nt - (rt - st)
                            }
                            st < ot && (st = [ot, ot = st][0]), (at = w(at, ot, st, _)).push(["L", X[0] + A.plotLeft, A.plotTop + X[1]]), H.d = at, Q = "path"
                        }
                    }
                    if (this.zoomVert) {
                        let V = A.inverted ? A.xAxis[0] : A.yAxis[0],
                            J = Math.sqrt(Math.pow(U - A.plotLeft - X[0], 2) + Math.pow(I - A.plotTop - X[1], 2)),
                            $ = Math.sqrt(Math.pow(W - A.plotLeft - X[0], 2) + Math.pow(q - A.plotTop - X[1], 2));
                        if ($ < J && (J = [$, $ = J][0]), $ > X[2] / 2 && ($ = X[2] / 2), J < X[3] / 2 && (J = X[3] / 2), this.zoomHor || (H.start = Z, H.end = R), H.r = $, H.innerR = J, V.options.gridLineInterpolation === "polygon") {
                            let it = V.toValue(V.len + V.pos - J),
                                et = V.toValue(V.len + V.pos - $),
                                _ = V.getPlotLinePath({
                                    value: et
                                }).concat(V.getPlotLinePath({
                                    value: it,
                                    reverse: !0
                                }));
                            H.d = _, Q = "path"
                        }
                    }
                    if (this.zoomHor && this.zoomVert && G.options.gridLineInterpolation === "polygon") {
                        let V = A.hoverPane.axis,
                            J = H.start || 0,
                            $ = H.end || 0,
                            it = J - V.startAngleRad + V.pos,
                            et = V.toValue(it),
                            _ = V.toValue(it + ($ - J));
                        if (H.d instanceof Array) {
                            let lt = H.d.slice(0, H.d.length / 2),
                                at = H.d.slice(H.d.length / 2, H.d.length);
                            at = [...at].reverse();
                            let ot = A.hoverPane.axis;
                            lt = w(lt, et, _, ot), (at = w(at, et, _, ot)) && (at[0][0] = "L"), at = [...at].reverse(), H.d = lt.concat(at), Q = "path"
                        }
                    }
                    E.attrs = H, E.shapeType = Q
                }
            }

            function j() {
                let E = this.chart;
                E.polar && (this.polar = new D(this), E.inverted && (this.isRadialSeries = !0, this.is("column") && (this.isRadialBar = !0)))
            }

            function z() {
                if (this.chart.polar && this.xAxis) {
                    let {
                        xAxis: E,
                        yAxis: A
                    } = this, X = this.chart;
                    this.kdByAngle = X.tooltip && X.tooltip.shared, this.kdByAngle ? this.searchPoint = F : this.options.findNearestPointBy = "xy";
                    let U = this.points,
                        I = U.length;
                    for (; I--;) this.is("column") || this.is("columnrange") || this.polar.toXY(U[I]), X.hasParallelCoordinates || this.yAxis.reversed || (a(U[I].y, Number.MIN_VALUE) < A.min || U[I].x < E.min || U[I].x > E.max ? (U[I].isNull = !0, U[I].plotY = NaN) : U[I].isNull = U[I].isValid && !U[I].isValid());
                    this.hasClipCircleSetter || (this.hasClipCircleSetter = !!this.eventsToUnbind.push(r(this, "afterRender", function() {
                        let q;
                        X.polar && this.options.clip !== !1 && (q = this.yAxis.pane.center, this.clipCircle ? this.clipCircle.animate({
                            x: q[0],
                            y: q[1],
                            r: q[2] / 2,
                            innerR: q[3] / 2
                        }) : this.clipCircle = function(W, K, Z, R, G) {
                            let H = i(),
                                Q = W.createElement("clipPath").attr({
                                    id: H
                                }).add(W.defs),
                                V = G ? W.arc(K, Z, R, G, 0, 2 * Math.PI).add(Q) : W.circle(K, Z, R).add(Q);
                            return V.id = H, V.clipPath = Q, V
                        }(X.renderer, q[0], q[1], q[2] / 2, q[3] / 2), this.group.clip(this.clipCircle), this.setClip = S.noop)
                    })))
                }
            }

            function F(E) {
                let A = this.chart,
                    X = this.xAxis,
                    U = X.pane && X.pane.center,
                    I = E.chartX - (U && U[0] || 0) - A.plotLeft,
                    q = E.chartY - (U && U[1] || 0) - A.plotTop;
                return this.searchKDTree({
                    clientX: 180 + Math.atan2(I, q) * (-180 / Math.PI)
                })
            }

            function w(E, A, X, U) {
                let I = U.tickInterval,
                    q = U.tickPositions,
                    W = h(q, Z => Z >= X),
                    K = h([...q].reverse(), Z => Z <= A);
                return f(W) || (W = q[q.length - 1]), f(K) || (K = q[0], W += I, E[0][0] = "L", E.unshift(E[E.length - 3])), (E = E.slice(q.indexOf(K), q.indexOf(W) + 1))[0][0] = "M", E
            }

            function B(E, A) {
                return h(this.pane || [], function(X) {
                    return X.options.id === A
                }) || E.call(this, A)
            }

            function Y(E, A, X, U, I, q) {
                let W, K, Z, R = this.chart,
                    G = a(U.inside, !!this.options.stacking);
                if (R.polar) {
                    if (W = A.rectPlotX / Math.PI * 180, R.inverted) this.forceDL = R.isInsidePlot(A.plotX, A.plotY), G && A.shapeArgs ? (K = A.shapeArgs, I = M(I, {
                        x: (Z = this.yAxis.postTranslate(((K.start || 0) + (K.end || 0)) / 2 - this.xAxis.startAngleRad, A.barX + A.pointWidth / 2)).x - R.plotLeft,
                        y: Z.y - R.plotTop
                    })) : A.tooltipPos && (I = M(I, {
                        x: A.tooltipPos[0],
                        y: A.tooltipPos[1]
                    })), U.align = a(U.align, "center"), U.verticalAlign = a(U.verticalAlign, "middle");
                    else {
                        var H;
                        (H = U).align === null && (H.align = W > 20 && W < 160 ? "left" : W > 200 && W < 340 ? "right" : "center"), H.verticalAlign === null && (H.verticalAlign = W < 45 || W > 315 ? "bottom" : W > 135 && W < 225 ? "top" : "middle"), U = H
                    }
                    L.prototype.alignDataLabel.call(this, A, X, U, I, q), this.isRadialBar && A.shapeArgs && A.shapeArgs.start === A.shapeArgs.end ? X.hide() : X.show()
                } else E.call(this, A, X, U, I, q)
            }

            function l() {
                let E = this.options,
                    A = E.stacking,
                    X = this.chart,
                    U = this.xAxis,
                    I = this.yAxis,
                    q = I.reversed,
                    W = I.center,
                    K = U.startAngleRad,
                    Z = U.endAngleRad,
                    R = Z - K,
                    G = E.threshold,
                    H = 0,
                    Q, V, J, $, it, et = 0,
                    _ = 0,
                    lt, at, ot, st, rt, nt, dt, mt;
                if (U.isRadial)
                    for (J = (Q = this.points).length, $ = I.translate(I.min), it = I.translate(I.max), G = E.threshold || 0, X.inverted && y(G) && f(H = I.translate(G)) && (H < 0 ? H = 0 : H > R && (H = R), this.translatedThreshold = H + K); J--;) {
                        if (nt = (V = Q[J]).barX, at = V.x, ot = V.y, V.shapeType = "arc", X.inverted) {
                            V.plotY = I.translate(ot), A && I.stacking ? (rt = I.stacking.stacks[(ot < 0 ? "-" : "") + this.stackKey], this.visible && rt && rt[at] && !V.isNull && (st = rt[at].points[this.getStackIndicator(void 0, at, this.index).key], et = I.translate(st[0]), _ = I.translate(st[1]), f(et) && (et = d.clamp(et, 0, R)))) : (et = H, _ = V.plotY), et > _ && (_ = [et, et = _][0]), q ? _ > $ ? _ = $ : et < it ? et = it : (et > $ || _ < it) && (et = _ = R) : et < $ ? et = $ : _ > it ? _ = it : (_ < $ || et > it) && (et = _ = 0), I.min > I.max && (et = _ = q ? R : 0), et += K, _ += K, W && (V.barX = nt += W[3] / 2), dt = Math.max(nt, 0), mt = Math.max(nt + V.pointWidth, 0);
                            let ct = E.borderRadius,
                                ht = typeof ct == "object" ? ct.radius : ct,
                                pt = c(ht || 0, mt - dt);
                            V.shapeArgs = {
                                x: W[0],
                                y: W[1],
                                r: mt,
                                innerR: dt,
                                start: et,
                                end: _,
                                borderRadius: pt
                            }, V.opacity = et === _ ? 0 : void 0, V.plotY = (f(this.translatedThreshold) && (et < this.translatedThreshold ? et : _)) - K
                        } else et = nt + K, V.shapeArgs = this.polar.arc(V.yBottom, V.plotY, et, et + V.pointWidth), V.shapeArgs.borderRadius = 0;
                        this.polar.toXY(V), X.inverted ? (lt = I.postTranslate(V.rectPlotY, nt + V.pointWidth / 2), V.tooltipPos = [lt.x - X.plotLeft, lt.y - X.plotTop]) : V.tooltipPos = [V.plotX, V.plotY], W && (V.ttBelow = V.plotY > W[1])
                    }
            }

            function P(E, A) {
                let X, U, I = this;
                if (this.chart.polar) {
                    A = A || this.points;
                    for (let W = 0; W < A.length; W++)
                        if (!A[W].isNull) {
                            X = W;
                            break
                        } this.options.connectEnds !== !1 && X !== void 0 && (this.connectEnds = !0, A.splice(A.length, 0, A[X]), U = !0), A.forEach(W => {
                        W.polarPlotY === void 0 && I.polar.toXY(W)
                    })
                }
                let q = E.apply(this, [].slice.call(arguments, 1));
                return U && A.pop(), q
            }

            function b(E, A) {
                let X = this.chart,
                    U = {
                        xAxis: [],
                        yAxis: []
                    };
                return X.polar ? X.axes.forEach(I => {
                    if (I.coll === "colorAxis") return;
                    let q = I.isXAxis,
                        W = I.center,
                        K = A.chartX - W[0] - X.plotLeft,
                        Z = A.chartY - W[1] - X.plotTop;
                    U[q ? "xAxis" : "yAxis"].push({
                        axis: I,
                        value: I.translate(q ? Math.PI - Math.atan2(K, Z) : Math.sqrt(Math.pow(K, 2) + Math.pow(Z, 2)), !0)
                    })
                }) : U = E.call(this, A), U
            }

            function u(E, A) {
                this.chart.polar || E.call(this, A)
            }

            function g(E, A) {
                let X = this,
                    U = this.chart,
                    I = this.group,
                    q = this.markerGroup,
                    W = this.xAxis && this.xAxis.center,
                    K = U.plotLeft,
                    Z = U.plotTop,
                    R = this.options.animation,
                    G, H, Q, V, J, $;
                U.polar ? X.isRadialBar ? A || (X.startAngleRad = a(X.translatedThreshold, X.xAxis.startAngleRad), S.seriesTypes.pie.prototype.animate.call(X, A)) : (R = k(R), X.is("column") ? A || (H = W[3] / 2, X.points.forEach(it => {
                    Q = it.graphic, J = (V = it.shapeArgs) && V.r, $ = V && V.innerR, Q && V && (Q.attr({
                        r: H,
                        innerR: H
                    }), Q.animate({
                        r: J,
                        innerR: $
                    }, X.options.animation))
                })) : A ? (G = {
                    translateX: W[0] + K,
                    translateY: W[1] + Z,
                    scaleX: .001,
                    scaleY: .001
                }, I.attr(G), q && q.attr(G)) : (G = {
                    translateX: K,
                    translateY: Z,
                    scaleX: 1,
                    scaleY: 1
                }, I.animate(G, R), q && q.animate(G, R))) : E.call(this, A)
            }

            function T(E, A, X, U) {
                let I, q;
                if (this.chart.polar)
                    if (U) {
                        q = function Z(R, G, H, Q) {
                            let V, J, $, it, et, _, lt = Q ? 1 : 0;
                            V = G >= 0 && G <= R.length - 1 ? G : G < 0 ? R.length - 1 + G : 0;
                            let at = V - 1 < 0 ? R.length - (1 + lt) : V - 1,
                                ot = V + 1 > R.length - 1 ? lt : V + 1,
                                st = R[at],
                                rt = R[ot],
                                nt = st.plotX,
                                dt = st.plotY,
                                mt = rt.plotX,
                                ct = rt.plotY,
                                ht = R[V].plotX,
                                pt = R[V].plotY;
                            J = (1.5 * ht + nt) / 2.5, $ = (1.5 * pt + dt) / 2.5, it = (1.5 * ht + mt) / 2.5, et = (1.5 * pt + ct) / 2.5;
                            let bt = Math.sqrt(Math.pow(J - ht, 2) + Math.pow($ - pt, 2)),
                                ut = Math.sqrt(Math.pow(it - ht, 2) + Math.pow(et - pt, 2)),
                                ft = Math.atan2($ - pt, J - ht),
                                xt = Math.atan2(et - pt, it - ht);
                            _ = Math.PI / 2 + (ft + xt) / 2, Math.abs(ft - _) > Math.PI / 2 && (_ -= Math.PI), J = ht + Math.cos(_) * bt, $ = pt + Math.sin(_) * bt, it = ht + Math.cos(Math.PI + _) * ut, et = pt + Math.sin(Math.PI + _) * ut;
                            let yt = {
                                rightContX: it,
                                rightContY: et,
                                leftContX: J,
                                leftContY: $,
                                plotX: ht,
                                plotY: pt
                            };
                            return H && (yt.prevPointCont = Z(R, at, !1, Q)), yt
                        }(A, U, !0, this.connectEnds);
                        let W = q.prevPointCont && q.prevPointCont.rightContX,
                            K = q.prevPointCont && q.prevPointCont.rightContY;
                        I = ["C", y(W) ? W : q.plotX, y(K) ? K : q.plotY, y(q.leftContX) ? q.leftContX : q.plotX, y(q.leftContY) ? q.leftContY : q.plotY, q.plotX, q.plotY]
                    } else I = ["M", X.plotX, X.plotY];
                else I = E.call(this, A, X, U);
                return I
            }
            class D {
                static compose(A, X, U, I, q, W, K, Z, R) {
                    if (x.compose(A, q), d.pushUnique(o, X)) {
                        r(X, "afterDrawChartBox", e), r(X, "getAxes", C), r(X, "init", s);
                        let G = X.prototype;
                        t(G, "get", B)
                    }
                    if (d.pushUnique(o, U)) {
                        let G = U.prototype;
                        t(G, "getCoordinates", b), t(G, "pinch", u), r(U, "getSelectionMarkerAttrs", O), r(U, "getSelectionBox", m)
                    }
                    if (d.pushUnique(o, I)) {
                        r(I, "afterInit", j), r(I, "afterTranslate", z, {
                            order: 2
                        }), r(I, "afterColumnTranslate", l, {
                            order: 4
                        });
                        let G = I.prototype;
                        t(G, "animate", g)
                    }
                    if (K && d.pushUnique(o, K)) {
                        let G = K.prototype;
                        t(G, "alignDataLabel", Y), t(G, "animate", g)
                    }
                    if (Z && d.pushUnique(o, Z)) {
                        let G = Z.prototype;
                        t(G, "getGraphPath", P)
                    }
                    if (R && d.pushUnique(o, R)) {
                        let G = R.prototype;
                        if (t(G, "getPointSpline", T), W && d.pushUnique(o, W)) {
                            let H = W.prototype;
                            H.getPointSpline = G.getPointSpline
                        }
                    }
                }
                constructor(A) {
                    this.series = A
                }
                arc(A, X, U, I) {
                    let q = this.series,
                        W = q.xAxis.center,
                        K = q.yAxis.len,
                        Z = W[3] / 2,
                        R = K - X + Z,
                        G = K - a(A, K) + Z;
                    return q.yAxis.reversed && (R < 0 && (R = Z), G < 0 && (G = Z)), {
                        x: W[0],
                        y: W[1],
                        r: R,
                        innerR: G,
                        start: U,
                        end: I
                    }
                }
                toXY(A) {
                    let X = this.series,
                        U = X.chart,
                        I = X.xAxis,
                        q = X.yAxis,
                        W = A.plotX,
                        K = U.inverted,
                        Z = A.y,
                        R = A.plotY,
                        G = K ? W : q.len - R,
                        H;
                    if (K && X && !X.isRadialBar && (A.plotY = R = y(Z) ? q.translate(Z) : 0), A.rectPlotX = W, A.rectPlotY = R, q.center && (G += q.center[3] / 2), y(R)) {
                        let Q = K ? q.postTranslate(R, G) : I.postTranslate(W, G);
                        A.plotX = A.polarPlotX = Q.x - U.plotLeft, A.plotY = A.polarPlotY = Q.y - U.plotTop
                    }
                    X.kdByAngle ? ((H = (W / Math.PI * 180 + I.pane.options.startAngle) % 360) < 0 && (H += 360), A.clientX = H) : A.clientX = A.plotX
                }
            }
            return D
        }), tt(p, "Core/Axis/WaterfallAxis.js", [p["Core/Axis/Stacking/StackItem.js"], p["Core/Utilities.js"]], function(v, S) {
            var L;
            let {
                addEvent: N,
                objectEach: x,
                pushUnique: d
            } = S;
            return function(k) {
                let r = [];

                function f() {
                    let c = this.waterfall.stacks;
                    c && (c.changed = !1, delete c.alreadyChanged)
                }

                function h() {
                    let c = this.options.stackLabels;
                    c && c.enabled && this.waterfall.stacks && this.waterfall.renderStackTotals()
                }

                function y() {
                    this.waterfall || (this.waterfall = new a(this))
                }

                function M() {
                    let c = this.axes,
                        n = this.series;
                    for (let i of n)
                        if (i.options.stacking) {
                            for (let t of c) t.isXAxis || (t.waterfall.stacks.changed = !0);
                            break
                        }
                }
                k.compose = function(c, n) {
                    d(r, c) && (N(c, "init", y), N(c, "afterBuildStacks", f), N(c, "afterRender", h)), d(r, n) && N(n, "beforeRedraw", M)
                };
                class a {
                    constructor(n) {
                        this.axis = n, this.stacks = {
                            changed: !1
                        }
                    }
                    renderStackTotals() {
                        let n = this.axis,
                            i = n.waterfall.stacks,
                            t = n.stacking && n.stacking.stackTotalGroup,
                            o = new v(n, n.options.stackLabels || {}, !1, 0, void 0);
                        this.dummyStackItem = o, t && x(i, e => {
                            x(e, (s, C) => {
                                o.total = s.stackTotal, o.x = +C, s.label && (o.label = s.label), v.prototype.render.call(o, t), s.label = o.label, delete o.label
                            })
                        }), o.total = null
                    }
                }
                k.Composition = a
            }(L || (L = {})), L
        }), tt(p, "Series/Waterfall/WaterfallPoint.js", [p["Series/Column/ColumnSeries.js"], p["Core/Series/Point.js"], p["Core/Utilities.js"]], function(v, S, L) {
            let {
                isNumber: N
            } = L;
            class x extends v.prototype.pointClass {
                constructor() {
                    super(...arguments), this.options = void 0, this.series = void 0
                }
                getClassName() {
                    let k = S.prototype.getClassName.call(this);
                    return this.isSum ? k += " highcharts-sum" : this.isIntermediateSum && (k += " highcharts-intermediate-sum"), k
                }
                isValid() {
                    return N(this.y) || this.isSum || !!this.isIntermediateSum
                }
            }
            return x
        }), tt(p, "Series/Waterfall/WaterfallSeriesDefaults.js", [], function() {
            return {
                dataLabels: {
                    inside: !0
                },
                lineWidth: 1,
                lineColor: "#333333",
                dashStyle: "Dot",
                borderColor: "#333333",
                states: {
                    hover: {
                        lineWidthPlus: 0
                    }
                }
            }
        }), tt(p, "Series/Waterfall/WaterfallSeries.js", [p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"], p["Core/Axis/WaterfallAxis.js"], p["Series/Waterfall/WaterfallPoint.js"], p["Series/Waterfall/WaterfallSeriesDefaults.js"]], function(v, S, L, N, x) {
            let {
                column: d,
                line: k
            } = v.seriesTypes, {
                addEvent: r,
                arrayMax: f,
                arrayMin: h,
                correctFloat: y,
                extend: M,
                isNumber: a,
                merge: c,
                objectEach: n,
                pick: i
            } = S;

            function t(e, s) {
                return Object.hasOwnProperty.call(e, s)
            }
            class o extends d {
                constructor() {
                    super(...arguments), this.chart = void 0, this.data = void 0, this.options = void 0, this.points = void 0, this.stackedYNeg = void 0, this.stackedYPos = void 0, this.stackKey = void 0, this.xData = void 0, this.yAxis = void 0, this.yData = void 0
                }
                generatePoints() {
                    d.prototype.generatePoints.apply(this);
                    for (let s = 0, C = this.points.length; s < C; s++) {
                        let m = this.points[s],
                            O = this.processedYData[s];
                        a(O) && (m.isIntermediateSum || m.isSum) && (m.y = y(O))
                    }
                }
                processData(s) {
                    let C, m, O, j, z, F, w = this.options,
                        B = this.yData,
                        Y = w.data,
                        l = B.length,
                        P = w.threshold || 0;
                    O = m = j = z = 0;
                    for (let b = 0; b < l; b++) F = B[b], C = Y && Y[b] ? Y[b] : {}, F === "sum" || C.isSum ? B[b] = y(O) : F === "intermediateSum" || C.isIntermediateSum ? (B[b] = y(m), m = 0) : (O += F, m += F), j = Math.min(O, j), z = Math.max(O, z);
                    super.processData.call(this, s), w.stacking || (this.dataMin = j + P, this.dataMax = z)
                }
                toYData(s) {
                    return s.isSum ? "sum" : s.isIntermediateSum ? "intermediateSum" : s.y
                }
                updateParallelArrays(s, C) {
                    super.updateParallelArrays.call(this, s, C), (this.yData[0] === "sum" || this.yData[0] === "intermediateSum") && (this.yData[0] = null)
                }
                pointAttribs(s, C) {
                    let m = this.options.upColor;
                    m && !s.options.color && a(s.y) && (s.color = s.y > 0 ? m : void 0);
                    let O = d.prototype.pointAttribs.call(this, s, C);
                    return delete O.dashstyle, O
                }
                getGraphPath() {
                    return [
                        ["M", 0, 0]
                    ]
                }
                getCrispPath() {
                    let s = this.data.filter(Y => a(Y.y)),
                        C = this.yAxis,
                        m = s.length,
                        O = Math.round(this.graph.strokeWidth()) % 2 / 2,
                        j = Math.round(this.borderWidth) % 2 / 2,
                        z = this.xAxis.reversed,
                        F = this.yAxis.reversed,
                        w = this.options.stacking,
                        B = [];
                    for (let Y = 1; Y < m; Y++) {
                        if (!(this.options.connectNulls || a(this.data[s[Y].index - 1].y))) continue;
                        let l = s[Y].box,
                            P = s[Y - 1],
                            b = P.y || 0,
                            u = s[Y - 1].box;
                        if (!l || !u) continue;
                        let g = C.waterfall.stacks[this.stackKey],
                            T = b > 0 ? -u.height : 0;
                        if (g && u && l) {
                            let D, E = g[Y - 1];
                            if (w) {
                                let A = E.connectorThreshold;
                                D = Math.round(C.translate(A, !1, !0, !1, !0) + (F ? T : 0)) - O
                            } else D = u.y + P.minPointLengthOffset + j - O;
                            B.push(["M", (u.x || 0) + (z ? 0 : u.width || 0), D], ["L", (l.x || 0) + (z && l.width || 0), D])
                        }
                        if (u && B.length && (!w && b < 0 && !F || b > 0 && F)) {
                            let D = B[B.length - 2];
                            D && typeof D[2] == "number" && (D[2] += u.height || 0);
                            let E = B[B.length - 1];
                            E && typeof E[2] == "number" && (E[2] += u.height || 0)
                        }
                    }
                    return B
                }
                drawGraph() {
                    k.prototype.drawGraph.call(this), this.graph && this.graph.attr({
                        d: this.getCrispPath()
                    })
                }
                setStackedPoints(s) {
                    var q;
                    let C = this.options,
                        m = (q = s.waterfall) == null ? void 0 : q.stacks,
                        O = C.threshold || 0,
                        j = this.stackKey,
                        z = this.xData,
                        F = z.length,
                        w = O,
                        B = w,
                        Y, l = 0,
                        P = 0,
                        b = 0,
                        u, g, T, D, E, A, X, U, I = (W, K, Z, R) => {
                            if (Y) {
                                if (u)
                                    for (; Z < u; Z++) Y.stackState[Z] += R;
                                else Y.stackState[0] = W, u = Y.stackState.length;
                                Y.stackState.push(Y.stackState[u - 1] + K)
                            }
                        };
                    if (s.stacking && m && this.reserveSpace()) {
                        U = m.changed, (X = m.alreadyChanged) && 0 > X.indexOf(j) && (U = !0), m[j] || (m[j] = {});
                        let W = m[j];
                        if (W)
                            for (let K = 0; K < F; K++)(!W[A = z[K]] || U) && (W[A] = {
                                negTotal: 0,
                                posTotal: 0,
                                stackTotal: 0,
                                threshold: 0,
                                stateIndex: 0,
                                stackState: [],
                                label: U && W[A] ? W[A].label : void 0
                            }), Y = W[A], (E = this.yData[K]) >= 0 ? Y.posTotal += E : Y.negTotal += E, D = C.data[K], g = Y.absolutePos = Y.posTotal, T = Y.absoluteNeg = Y.negTotal, Y.stackTotal = g + T, u = Y.stackState.length, D && D.isIntermediateSum ? (I(b, P, 0, b), b = P, P = O, w ^= B, B ^= w, w ^= B) : D && D.isSum ? (I(O, l, u, 0), w = O) : (I(w, E, 0, l), D && (l += E, P += E)), Y.stateIndex++, Y.threshold = w, w += Y.stackTotal;
                        m.changed = !1, m.alreadyChanged || (m.alreadyChanged = []), m.alreadyChanged.push(j)
                    }
                }
                getExtremes() {
                    let s, C, m, O = this.options.stacking;
                    return O ? (s = this.yAxis.waterfall.stacks, C = this.stackedYNeg = [], m = this.stackedYPos = [], O === "overlap" ? n(s[this.stackKey], function(j) {
                        C.push(h(j.stackState)), m.push(f(j.stackState))
                    }) : n(s[this.stackKey], function(j) {
                        C.push(j.negTotal + j.threshold), m.push(j.posTotal + j.threshold)
                    }), {
                        dataMin: h(C),
                        dataMax: f(m)
                    }) : {
                        dataMin: this.dataMin,
                        dataMax: this.dataMax
                    }
                }
            }
            return o.defaultOptions = c(d.defaultOptions, x), o.compose = L.compose, M(o.prototype, {
                getZonesGraphs: k.prototype.getZonesGraphs,
                pointValKey: "y",
                showLine: !0,
                pointClass: N
            }), r(o, "afterColumnTranslate", function() {
                let {
                    options: e,
                    points: s,
                    yAxis: C
                } = this, m = i(e.minPointLength, 5), O = m / 2, j = e.threshold || 0, z = e.stacking, F = C.waterfall.stacks[this.stackKey], w = j, B = j, Y, l, P, b;
                for (let u = 0; u < s.length; u++) {
                    let g = s[u],
                        T = this.processedYData[u],
                        D = g.shapeArgs,
                        E = M({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }, D || {});
                    g.box = E;
                    let A = [0, T],
                        X = g.y || 0;
                    if (z) {
                        if (F) {
                            let I = F[u];
                            z === "overlap" ? (l = I.stackState[I.stateIndex--], Y = X >= 0 ? l : l - X, t(I, "absolutePos") && delete I.absolutePos, t(I, "absoluteNeg") && delete I.absoluteNeg) : (X >= 0 ? (l = I.threshold + I.posTotal, I.posTotal -= X, Y = l) : (l = I.threshold + I.negTotal, I.negTotal -= X, Y = l - X), !I.posTotal && a(I.absolutePos) && t(I, "absolutePos") && (I.posTotal = I.absolutePos, delete I.absolutePos), !I.negTotal && a(I.absoluteNeg) && t(I, "absoluteNeg") && (I.negTotal = I.absoluteNeg, delete I.absoluteNeg)), g.isSum || (I.connectorThreshold = I.threshold + I.stackTotal), C.reversed ? (P = X >= 0 ? Y - X : Y + X, b = Y) : (P = Y, b = Y - X), g.below = P <= j, E.y = C.translate(P, !1, !0, !1, !0), E.height = Math.abs(E.y - C.translate(b, !1, !0, !1, !0));
                            let q = C.waterfall.dummyStackItem;
                            q && (q.x = u, q.label = F[u].label, q.setOffset(this.pointXOffset || 0, this.barW || 0, this.stackedYNeg[u], this.stackedYPos[u], void 0, this.xAxis))
                        }
                    } else Y = Math.max(B, B + X) + A[0], E.y = C.translate(Y, !1, !0, !1, !0), g.isSum ? (E.y = C.translate(A[1], !1, !0, !1, !0), E.height = Math.min(C.translate(A[0], !1, !0, !1, !0), C.len) - E.y, g.below = A[1] <= j) : g.isIntermediateSum ? (X >= 0 ? (P = A[1] + w, b = w) : (P = w, b = A[1] + w), C.reversed && (P ^= b, b ^= P, P ^= b), E.y = C.translate(P, !1, !0, !1, !0), E.height = Math.abs(E.y - Math.min(C.translate(b, !1, !0, !1, !0), C.len)), w += A[1], g.below = P <= j) : (E.height = T > 0 ? C.translate(B, !1, !0, !1, !0) - E.y : C.translate(B, !1, !0, !1, !0) - C.translate(B - T, !1, !0, !1, !0), B += T, g.below = B < j), E.height < 0 && (E.y += E.height, E.height *= -1);
                    g.plotY = E.y = Math.round(E.y || 0) - this.borderWidth % 2 / 2, E.height = Math.max(Math.round(E.height || 0), .001), g.yBottom = E.y + E.height, E.height <= m && !g.isNull ? (E.height = m, E.y -= O, g.plotY = E.y, X < 0 ? g.minPointLengthOffset = -O : g.minPointLengthOffset = O) : (g.isNull && (E.width = 0), g.minPointLengthOffset = 0);
                    let U = g.plotY + (g.negative ? E.height : 0);
                    g.below && (g.plotY += E.height), g.tooltipPos && (this.chart.inverted ? g.tooltipPos[0] = C.len - U : g.tooltipPos[1] = U), g.isInside = this.isPointInside(g), c(!0, g.shapeArgs, E)
                }
            }, {
                order: 2
            }), v.registerSeriesType("waterfall", o), o
        }), tt(p, "masters/highcharts-more.src.js", [p["Core/Globals.js"], p["Core/Series/SeriesRegistry.js"], p["Series/Bubble/BubbleSeries.js"], p["Series/PackedBubble/PackedBubbleSeries.js"], p["Series/PolarComposition.js"], p["Series/Waterfall/WaterfallSeries.js"]], function(v, S, L, N, x, d) {
            L.compose(v.Axis, v.Chart, v.Legend, v.Series), N.compose(v.Axis, v.Chart, v.Legend, v.Series), x.compose(v.Axis, v.Chart, v.Pointer, v.Series, v.Tick, S.seriesTypes.areasplinerange, S.seriesTypes.column, S.seriesTypes.line, S.seriesTypes.spline), d.compose(v.Axis, v.Chart)
        })
    })
})(At);
var wt = At.exports;
const jt = Ct(wt);
var kt = {
    exports: {}
};
(function(Pt) {
    (function(gt) {
        Pt.exports ? (gt.default = gt, Pt.exports = gt) : gt(typeof Highcharts < "u" ? Highcharts : void 0)
    })(function(gt) {
        var p = gt ? gt._modules : {};

        function tt(v, S, L, N) {
            v.hasOwnProperty(S) || (v[S] = N.apply(null, L), typeof CustomEvent == "function" && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
                detail: {
                    path: S,
                    module: v[S]
                }
            })))
        }
        tt(p, "Extensions/Annotations/AnnotationChart.js", [p["Core/Utilities.js"]], function(v) {
            var S;
            let {
                addEvent: L,
                erase: N,
                find: x,
                fireEvent: d,
                pick: k,
                wrap: r
            } = v, f = [];

            function h(i, t) {
                let o = this.initAnnotation(i);
                return this.options.annotations.push(o.options), k(t, !0) && (o.redraw(), o.graphic.attr({
                    opacity: 1
                })), o
            }

            function y() {
                let i = this;
                i.plotBoxClip = this.renderer.clipRect(this.plotBox), i.controlPointsGroup = i.renderer.g("control-points").attr({
                    zIndex: 99
                }).clip(i.plotBoxClip).add(), i.options.annotations.forEach((t, o) => {
                    if (!i.annotations.some(e => e.options === t)) {
                        let e = i.initAnnotation(t);
                        i.options.annotations[o] = e.options
                    }
                }), i.drawAnnotations(), L(i, "redraw", i.drawAnnotations), L(i, "destroy", function() {
                    i.plotBoxClip.destroy(), i.controlPointsGroup.destroy()
                }), L(i, "exportData", function(t) {
                    let o = i.annotations,
                        e = (this.options.exporting && this.options.exporting.csv || {}).columnHeaderFormatter,
                        s = !t.dataRows[1].xValues,
                        C = i.options.lang && i.options.lang.exportData && i.options.lang.exportData.annotationHeader,
                        m = t.dataRows[0].length,
                        O = i.options.exporting && i.options.exporting.csv && i.options.exporting.csv.annotations && i.options.exporting.csv.annotations.itemDelimiter,
                        j = i.options.exporting && i.options.exporting.csv && i.options.exporting.csv.annotations && i.options.exporting.csv.annotations.join;
                    o.forEach(w => {
                        w.options.labelOptions && w.options.labelOptions.includeInDataExport && w.labels.forEach(B => {
                            if (B.options.text) {
                                let Y = B.options.text;
                                B.points.forEach(l => {
                                    let P = l.x,
                                        b = l.series.xAxis ? l.series.xAxis.index : -1,
                                        u = !1;
                                    if (b === -1) {
                                        let g = t.dataRows[0].length,
                                            T = Array(g);
                                        for (let D = 0; D < g; ++D) T[D] = "";
                                        T.push(Y), T.xValues = [], T.xValues[b] = P, t.dataRows.push(T), u = !0
                                    }
                                    if (u || t.dataRows.forEach(g => {
                                        !u && g.xValues && b !== void 0 && P === g.xValues[b] && (j && g.length > m ? g[g.length - 1] += O + Y : g.push(Y), u = !0)
                                    }), !u) {
                                        let g = t.dataRows[0].length,
                                            T = Array(g);
                                        for (let D = 0; D < g; ++D) T[D] = "";
                                        T[0] = P, T.push(Y), T.xValues = [], b !== void 0 && (T.xValues[b] = P), t.dataRows.push(T)
                                    }
                                })
                            }
                        })
                    });
                    let z = 0;
                    t.dataRows.forEach(w => {
                        z = Math.max(z, w.length)
                    });
                    let F = z - t.dataRows[0].length;
                    for (let w = 0; w < F; w++) {
                        let B = function(Y) {
                            let l;
                            return e && (l = e(Y)) !== !1 ? l : (l = C + " " + Y, s ? {
                                columnTitle: l,
                                topLevelColumnTitle: l
                            } : l)
                        }(w + 1);
                        s ? (t.dataRows[0].push(B.topLevelColumnTitle), t.dataRows[1].push(B.columnTitle)) : t.dataRows[0].push(B)
                    }
                })
            }

            function M() {
                this.plotBoxClip.attr(this.plotBox), this.annotations.forEach(i => {
                    i.redraw(), i.graphic.animate({
                        opacity: 1
                    }, i.animationConfig)
                })
            }

            function a(i) {
                let t = this.annotations,
                    o = i.coll === "annotations" ? i : x(t, function(e) {
                        return e.options.id === i
                    });
                o && (d(o, "remove"), N(this.options.annotations, o.options), N(t, o), o.destroy())
            }

            function c() {
                this.annotations = [], this.options.annotations || (this.options.annotations = [])
            }

            function n(i) {
                this.chart.hasDraggedAnnotation || i.apply(this, Array.prototype.slice.call(arguments, 1))
            }
            return (S || (S = {})).compose = function(i, t, o) {
                if (v.pushUnique(f, t)) {
                    L(t, "afterInit", c);
                    let e = t.prototype;
                    e.addAnnotation = h, e.callbacks.push(y), e.collectionsWithInit.annotations = [h], e.collectionsWithUpdate.push("annotations"), e.drawAnnotations = M, e.removeAnnotation = a, e.initAnnotation = function(s) {
                        let C = i.types[s.type] || i,
                            m = new C(this, s);
                        return this.annotations.push(m), m
                    }
                }
                if (v.pushUnique(f, o)) {
                    let e = o.prototype;
                    r(e, "onContainerMouseDown", n)
                }
            }, S
        }), tt(p, "Extensions/Annotations/AnnotationDefaults.js", [p["Core/Utilities.js"]], function(v) {
            let {
                defined: S
            } = v;
            return {
                visible: !0,
                animation: {},
                crop: !0,
                draggable: "xy",
                labelOptions: {
                    align: "center",
                    allowOverlap: !1,
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    borderColor: "#000000",
                    borderRadius: 3,
                    borderWidth: 1,
                    className: "highcharts-no-tooltip",
                    crop: !1,
                    formatter: function() {
                        return S(this.y) ? "" + this.y : "Annotation label"
                    },
                    includeInDataExport: !0,
                    overflow: "justify",
                    padding: 5,
                    shadow: !1,
                    shape: "callout",
                    style: {
                        fontSize: "0.7em",
                        fontWeight: "normal",
                        color: "contrast"
                    },
                    useHTML: !1,
                    verticalAlign: "bottom",
                    x: 0,
                    y: -16
                },
                shapeOptions: {
                    stroke: "rgba(0, 0, 0, 0.75)",
                    strokeWidth: 1,
                    fill: "rgba(0, 0, 0, 0.75)",
                    r: 0,
                    snap: 2
                },
                controlPointOptions: {
                    events: {},
                    style: {
                        cursor: "pointer",
                        fill: "#ffffff",
                        stroke: "#000000",
                        "stroke-width": 2
                    },
                    height: 10,
                    symbol: "circle",
                    visible: !1,
                    width: 10
                },
                events: {},
                zIndex: 6
            }
        }), tt(p, "Extensions/Annotations/EventEmitter.js", [p["Core/Globals.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                doc: L,
                isTouchDevice: N
            } = v, {
                addEvent: x,
                fireEvent: d,
                objectEach: k,
                pick: r,
                removeEvent: f
            } = S;
            return class {
                addEvents() {
                    let h = this,
                        y = function(M) {
                            x(M, N ? "touchstart" : "mousedown", a => {
                                h.onMouseDown(a)
                            }, {
                                passive: !1
                            })
                        };
                    if (y(this.graphic.element), (h.labels || []).forEach(M => {
                        M.options.useHTML && M.graphic.text && y(M.graphic.text.element)
                    }), k(h.options.events, (M, a) => {
                        let c = function(n) {
                            a === "click" && h.cancelClick || M.call(h, h.chart.pointer.normalize(n), h.target)
                        };
                        (h.nonDOMEvents || []).indexOf(a) === -1 ? h.graphic.on(a, c) : x(h, a, c, {
                            passive: !1
                        })
                    }), h.options.draggable && (x(h, "drag", h.onDrag), !h.graphic.renderer.styledMode)) {
                        let M = {
                            cursor: {
                                x: "ew-resize",
                                y: "ns-resize",
                                xy: "move"
                            } [h.options.draggable]
                        };
                        h.graphic.css(M), (h.labels || []).forEach(a => {
                            a.options.useHTML && a.graphic.text && a.graphic.text.css(M)
                        })
                    }
                    h.isUpdating || d(h, "add")
                }
                destroy() {
                    this.removeDocEvents(), f(this), this.hcEvents = null
                }
                mouseMoveToRadians(h, y, M) {
                    let a = h.prevChartY - M,
                        c = h.prevChartX - y,
                        n = h.chartY - M,
                        i = h.chartX - y,
                        t;
                    return this.chart.inverted && (t = c, c = a, a = t, t = i, i = n, n = t), Math.atan2(n, i) - Math.atan2(a, c)
                }
                mouseMoveToScale(h, y, M) {
                    let a = h.prevChartX - y,
                        c = h.prevChartY - M,
                        n = h.chartX - y,
                        i = h.chartY - M,
                        t = (n || 1) / (a || 1),
                        o = (i || 1) / (c || 1);
                    if (this.chart.inverted) {
                        let e = o;
                        o = t, t = e
                    }
                    return {
                        x: t,
                        y: o
                    }
                }
                mouseMoveToTranslation(h) {
                    let y = h.chartX - h.prevChartX,
                        M = h.chartY - h.prevChartY,
                        a;
                    return this.chart.inverted && (a = M, M = y, y = a), {
                        x: y,
                        y: M
                    }
                }
                onDrag(h) {
                    if (this.chart.isInsidePlot(h.chartX - this.chart.plotLeft, h.chartY - this.chart.plotTop, {
                        visiblePlotOnly: !0
                    })) {
                        let y = this.mouseMoveToTranslation(h);
                        this.options.draggable === "x" && (y.y = 0), this.options.draggable === "y" && (y.x = 0), this.points.length ? this.translate(y.x, y.y) : (this.shapes.forEach(M => M.translate(y.x, y.y)), this.labels.forEach(M => M.translate(y.x, y.y))), this.redraw(!1)
                    }
                }
                onMouseDown(h) {
                    var i;
                    if (h.preventDefault && h.preventDefault(), h.button === 2) return;
                    let y = this,
                        M = y.chart.pointer,
                        a = ((i = h == null ? void 0 : h.sourceCapabilities) == null ? void 0 : i.firesTouchEvents) || !1,
                        c = (h = M.normalize(h)).chartX,
                        n = h.chartY;
                    y.cancelClick = !1, y.chart.hasDraggedAnnotation = !0, y.removeDrag = x(L, N || a ? "touchmove" : "mousemove", function(t) {
                        y.hasDragged = !0, (t = M.normalize(t)).prevChartX = c, t.prevChartY = n, d(y, "drag", t), c = t.chartX, n = t.chartY
                    }, N || a ? {
                        passive: !1
                    } : void 0), y.removeMouseUp = x(L, N || a ? "touchend" : "mouseup", function(t) {
                        let o = r(y.target && y.target.annotation, y.target);
                        o && (o.cancelClick = y.hasDragged), y.cancelClick = y.hasDragged, y.hasDragged = !1, y.chart.hasDraggedAnnotation = !1, d(r(o, y), "afterUpdate"), y.onMouseUp(t)
                    }, N || a ? {
                        passive: !1
                    } : void 0)
                }
                onMouseUp(h) {
                    let y = this.chart,
                        M = this.target || this,
                        a = y.options.annotations,
                        c = y.annotations.indexOf(M);
                    this.removeDocEvents(), a[c] = M.options
                }
                removeDocEvents() {
                    this.removeDrag && (this.removeDrag = this.removeDrag()), this.removeMouseUp && (this.removeMouseUp = this.removeMouseUp())
                }
            }
        }), tt(p, "Extensions/Annotations/ControlPoint.js", [p["Extensions/Annotations/EventEmitter.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                merge: L,
                pick: N
            } = S;
            return class extends v {
                constructor(x, d, k, r) {
                    super(), this.graphic = void 0, this.nonDOMEvents = ["drag"], this.chart = x, this.target = d, this.options = k, this.index = N(k.index, r)
                }
                destroy() {
                    super.destroy(), this.graphic && (this.graphic = this.graphic.destroy()), this.chart = null, this.target = null, this.options = null
                }
                redraw(x) {
                    this.graphic[x ? "animate" : "attr"](this.options.positioner.call(this, this.target))
                }
                render() {
                    let x = this.chart,
                        d = this.options;
                    this.graphic = x.renderer.symbol(d.symbol, 0, 0, d.width, d.height).add(x.controlPointsGroup).css(d.style), this.setVisibility(d.visible), this.addEvents()
                }
                setVisibility(x) {
                    this.graphic[x ? "show" : "hide"](), this.options.visible = x
                }
                update(x) {
                    let d = this.chart,
                        k = this.target,
                        r = this.index,
                        f = L(!0, this.options, x);
                    this.destroy(), this.constructor(d, k, f, r), this.render(d.controlPointsGroup), this.redraw()
                }
            }
        }), tt(p, "Extensions/Annotations/MockPoint.js", [p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                series: {
                    prototype: L
                }
            } = v, {
                defined: N,
                fireEvent: x
            } = S;
            class d {
                static fromPoint(r) {
                    return new d(r.series.chart, null, {
                        x: r.x,
                        y: r.y,
                        xAxis: r.series.xAxis,
                        yAxis: r.series.yAxis
                    })
                }
                static pointToPixels(r, f) {
                    let h = r.series,
                        y = h.chart,
                        M = r.plotX || 0,
                        a = r.plotY || 0,
                        c;
                    return y.inverted && (r.mock ? (M = r.plotY, a = r.plotX) : (M = y.plotWidth - (r.plotY || 0), a = y.plotHeight - (r.plotX || 0))), h && !f && (M += (c = h.getPlotBox()).translateX, a += c.translateY), {
                        x: M,
                        y: a
                    }
                }
                static pointToOptions(r) {
                    return {
                        x: r.x,
                        y: r.y,
                        xAxis: r.series.xAxis,
                        yAxis: r.series.yAxis
                    }
                }
                constructor(r, f, h) {
                    this.plotX = void 0, this.plotY = void 0, this.mock = !0, this.series = {
                        visible: !0,
                        chart: r,
                        getPlotBox: L.getPlotBox
                    }, this.target = f || null, this.options = h, this.applyOptions(this.getOptions())
                }
                applyOptions(r) {
                    this.command = r.command, this.setAxis(r, "x"), this.setAxis(r, "y"), this.refresh()
                }
                getLabelConfig() {
                    return {
                        x: this.x,
                        y: this.y,
                        point: this
                    }
                }
                getOptions() {
                    return this.hasDynamicOptions() ? this.options(this.target) : this.options
                }
                hasDynamicOptions() {
                    return typeof this.options == "function"
                }
                isInsidePlot() {
                    let r = this.plotX,
                        f = this.plotY,
                        h = this.series.xAxis,
                        y = this.series.yAxis,
                        M = {
                            x: r,
                            y: f,
                            isInsidePlot: !0,
                            options: {}
                        };
                    return h && (M.isInsidePlot = N(r) && r >= 0 && r <= h.len), y && (M.isInsidePlot = M.isInsidePlot && N(f) && f >= 0 && f <= y.len), x(this.series.chart, "afterIsInsidePlot", M), M.isInsidePlot
                }
                refresh() {
                    let r = this.series,
                        f = r.xAxis,
                        h = r.yAxis,
                        y = this.getOptions();
                    f ? (this.x = y.x, this.plotX = f.toPixels(y.x, !0)) : (this.x = void 0, this.plotX = y.x), h ? (this.y = y.y, this.plotY = h.toPixels(y.y, !0)) : (this.y = null, this.plotY = y.y), this.isInside = this.isInsidePlot()
                }
                refreshOptions() {
                    let r = this.series,
                        f = r.xAxis,
                        h = r.yAxis;
                    this.x = this.options.x = f ? this.options.x = f.toValue(this.plotX, !0) : this.plotX, this.y = this.options.y = h ? h.toValue(this.plotY, !0) : this.plotY
                }
                rotate(r, f, h) {
                    if (!this.hasDynamicOptions()) {
                        let y = Math.cos(h),
                            M = Math.sin(h),
                            a = this.plotX - r,
                            c = this.plotY - f;
                        this.plotX = a * y - c * M + r, this.plotY = a * M + c * y + f, this.refreshOptions()
                    }
                }
                scale(r, f, h, y) {
                    if (!this.hasDynamicOptions()) {
                        let M = this.plotX * h,
                            a = this.plotY * y;
                        this.plotX = (1 - h) * r + M, this.plotY = (1 - y) * f + a, this.refreshOptions()
                    }
                }
                setAxis(r, f) {
                    let h = f + "Axis",
                        y = r[h],
                        M = this.series.chart;
                    this.series[h] = typeof y == "object" ? y : N(y) ? M[h][y] || M.get(y) : null
                }
                toAnchor() {
                    let r = [this.plotX, this.plotY, 0, 0];
                    return this.series.chart.inverted && (r[0] = this.plotY, r[1] = this.plotX), r
                }
                translate(r, f, h, y) {
                    this.hasDynamicOptions() || (this.plotX += h, this.plotY += y, this.refreshOptions())
                }
            }
            return d
        }), tt(p, "Extensions/Annotations/ControlTarget.js", [p["Extensions/Annotations/ControlPoint.js"], p["Extensions/Annotations/MockPoint.js"], p["Core/Utilities.js"]], function(v, S, L) {
            var N;
            return function(x) {
                let d = [];

                function k() {
                    let e = this.controlPoints,
                        s = this.options.controlPoints || [];
                    s.forEach((C, m) => {
                        let O = L.merge(this.options.controlPointOptions, C);
                        O.index || (O.index = m), s[m] = O, e.push(new v(this.chart, this, O))
                    })
                }

                function r(e) {
                    let s = e.series.getPlotBox(),
                        C = e.series.chart,
                        m = e.mock ? e.toAnchor() : C.tooltip && C.tooltip.getAnchor.call({
                            chart: e.series.chart
                        }, e) || [0, 0, 0, 0],
                        O = {
                            x: m[0] + (this.options.x || 0),
                            y: m[1] + (this.options.y || 0),
                            height: m[2] || 0,
                            width: m[3] || 0
                        };
                    return {
                        relativePosition: O,
                        absolutePosition: L.merge(O, {
                            x: O.x + (e.mock ? s.translateX : C.plotLeft),
                            y: O.y + (e.mock ? s.translateY : C.plotTop)
                        })
                    }
                }

                function f() {
                    this.controlPoints.forEach(e => e.destroy()), this.chart = null, this.controlPoints = null, this.points = null, this.options = null, this.annotation && (this.annotation = null)
                }

                function h() {
                    let e = this.options;
                    return e.points || e.point && L.splat(e.point)
                }

                function y() {
                    let e, s, C = this.getPointsOptions(),
                        m = this.points,
                        O = C && C.length || 0;
                    for (e = 0; e < O; e++) {
                        if (!(s = this.point(C[e], m[e]))) {
                            m.length = 0;
                            return
                        }
                        s.mock && s.refresh(), m[e] = s
                    }
                    return m
                }

                function M(e, s) {
                    if (e && e.series) return e;
                    if (!s || s.series === null) {
                        if (L.isObject(e)) s = new S(this.chart, this, e);
                        else if (L.isString(e)) s = this.chart.get(e) || null;
                        else if (typeof e == "function") {
                            let C = e.call(s, this);
                            s = C.series ? C : new S(this.chart, this, e)
                        }
                    }
                    return s
                }

                function a(e) {
                    this.controlPoints.forEach(s => s.redraw(e))
                }

                function c() {
                    this.controlPoints.forEach(e => e.render())
                }

                function n(e, s, C, m, O) {
                    if (this.chart.inverted) {
                        let j = s;
                        s = C, C = j
                    }
                    this.points.forEach((j, z) => this.transformPoint(e, s, C, m, O, z), this)
                }

                function i(e, s, C, m, O, j) {
                    let z = this.points[j];
                    z.mock || (z = this.points[j] = S.fromPoint(z)), z[e](s, C, m, O)
                }

                function t(e, s) {
                    this.transform("translate", null, null, e, s)
                }

                function o(e, s, C) {
                    this.transformPoint("translate", null, null, e, s, C)
                }
                x.compose = function(e) {
                    L.pushUnique(d, e) && L.merge(!0, e.prototype, {
                        addControlPoints: k,
                        anchor: r,
                        destroyControlTarget: f,
                        getPointsOptions: h,
                        linkPoints: y,
                        point: M,
                        redrawControlPoints: a,
                        renderControlPoints: c,
                        transform: n,
                        transformPoint: i,
                        translate: t,
                        translatePoint: o
                    })
                }
            }(N || (N = {})), N
        }), tt(p, "Extensions/Annotations/Controllables/Controllable.js", [p["Extensions/Annotations/ControlTarget.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                merge: L
            } = S;
            class N {
                constructor(d, k, r, f) {
                    this.graphic = void 0, this.annotation = d, this.chart = d.chart, this.collection = f === "label" ? "labels" : "shapes", this.controlPoints = [], this.options = k, this.points = [], this.index = r, this.itemType = f, this.init(d, k, r)
                }
                attr(...d) {
                    this.graphic.attr.apply(this.graphic, arguments)
                }
                attrsFromOptions(d) {
                    let k, r, f = this.constructor.attrsMap,
                        h = {},
                        y = this.chart.styledMode;
                    for (k in d) r = f[k], f[k] === void 0 || y && ["fill", "stroke", "stroke-width"].indexOf(r) !== -1 || (h[r] = d[k]);
                    return h
                }
                destroy() {
                    this.graphic && (this.graphic = this.graphic.destroy()), this.tracker && (this.tracker = this.tracker.destroy()), this.destroyControlTarget()
                }
                init(d, k, r) {
                    this.annotation = d, this.chart = d.chart, this.options = k, this.points = [], this.controlPoints = [], this.index = r, this.linkPoints(), this.addControlPoints()
                }
                redraw(d) {
                    this.redrawControlPoints(d)
                }
                render(d) {
                    this.renderControlPoints()
                }
                rotate(d, k, r) {
                    this.transform("rotate", d, k, r)
                }
                scale(d, k, r, f) {
                    this.transform("scale", d, k, r, f)
                }
                setControlPointsVisibility(d) {
                    this.controlPoints.forEach(k => {
                        k.setVisibility(d)
                    })
                }
                shouldBeDrawn() {
                    return !!this.points.length
                }
                translateShape(d, k, r) {
                    let f = this.annotation.chart,
                        h = this.annotation.userOptions,
                        y = f.annotations.indexOf(this.annotation),
                        M = f.options.annotations[y];
                    this.translatePoint(d, k, 0), r && this.translatePoint(d, k, 1), M[this.collection][this.index].point = this.options.point, h[this.collection][this.index].point = this.options.point
                }
                update(d) {
                    let k = this.annotation,
                        r = L(!0, this.options, d),
                        f = this.graphic.parentGroup,
                        h = this.constructor;
                    this.destroy();
                    let y = new h(k, r, this.index, this.itemType);
                    L(!0, this, y), this.render(f), this.redraw()
                }
            }
            return v.compose(N), N
        }), tt(p, "Extensions/Annotations/Controllables/ControllableDefaults.js", [], function() {
            return {
                defaultMarkers: {
                    arrow: {
                        tagName: "marker",
                        attributes: {
                            id: "arrow",
                            refY: 5,
                            refX: 9,
                            markerWidth: 10,
                            markerHeight: 10
                        },
                        children: [{
                            tagName: "path",
                            attributes: {
                                d: "M 0 0 L 10 5 L 0 10 Z",
                                "stroke-width": 0
                            }
                        }]
                    },
                    "reverse-arrow": {
                        tagName: "marker",
                        attributes: {
                            id: "reverse-arrow",
                            refY: 5,
                            refX: 1,
                            markerWidth: 10,
                            markerHeight: 10
                        },
                        children: [{
                            tagName: "path",
                            attributes: {
                                d: "M 0 5 L 10 0 L 10 10 Z",
                                "stroke-width": 0
                            }
                        }]
                    }
                }
            }
        }), tt(p, "Extensions/Annotations/Controllables/ControllablePath.js", [p["Extensions/Annotations/Controllables/Controllable.js"], p["Extensions/Annotations/Controllables/ControllableDefaults.js"], p["Core/Globals.js"], p["Core/Utilities.js"]], function(v, S, L, N) {
            let {
                defaultMarkers: x
            } = S, {
                addEvent: d,
                defined: k,
                extend: r,
                merge: f,
                uniqueKey: h
            } = N, y = [], M = n("marker-end"), a = n("marker-start"), c = "rgba(192,192,192," + (L.svg ? 1e-4 : .002) + ")";

            function n(e) {
                return function(s) {
                    this.attr(e, "url(#" + s + ")")
                }
            }

            function i() {
                this.options.defs = f(x, this.options.defs || {})
            }

            function t(e, s) {
                let C = {
                        attributes: {
                            id: e
                        }
                    },
                    m = {
                        stroke: s.color || "none",
                        fill: s.color || "rgba(0, 0, 0, 0.75)"
                    };
                C.children = s.children && s.children.map(function(z) {
                    return f(m, z)
                });
                let O = f(!0, {
                        attributes: {
                            markerWidth: 20,
                            markerHeight: 20,
                            refX: 0,
                            refY: 0,
                            orient: "auto"
                        }
                    }, s, C),
                    j = this.definition(O);
                return j.id = e, j
            }
            class o extends v {
                static compose(s, C) {
                    if (N.pushUnique(y, s) && d(s, "afterGetContainer", i), N.pushUnique(y, C)) {
                        let m = C.prototype;
                        m.addMarker = t
                    }
                }
                constructor(s, C, m) {
                    super(s, C, m, "shape"), this.type = "path"
                }
                toD() {
                    let s = this.options.d;
                    if (s) return typeof s == "function" ? s.call(this) : s;
                    let C = this.points,
                        m = C.length,
                        O = [],
                        j = m,
                        z = C[0],
                        F = j && this.anchor(z).absolutePosition,
                        w = 0,
                        B;
                    if (F)
                        for (O.push(["M", F.x, F.y]); ++w < m && j;) B = (z = C[w]).command || "L", F = this.anchor(z).absolutePosition, B === "M" ? O.push([B, F.x, F.y]) : B === "L" ? O.push([B, F.x, F.y]) : B === "Z" && O.push([B]), j = z.series.visible;
                    return j && this.graphic ? this.chart.renderer.crispLine(O, this.graphic.strokeWidth()) : null
                }
                shouldBeDrawn() {
                    return super.shouldBeDrawn() || !!this.options.d
                }
                render(s) {
                    let C = this.options,
                        m = this.attrsFromOptions(C);
                    this.graphic = this.annotation.chart.renderer.path([
                        ["M", 0, 0]
                    ]).attr(m).add(s), C.className && this.graphic.addClass(C.className), this.tracker = this.annotation.chart.renderer.path([
                        ["M", 0, 0]
                    ]).addClass("highcharts-tracker-line").attr({
                        zIndex: 2
                    }).add(s), this.annotation.chart.styledMode || this.tracker.attr({
                        "stroke-linejoin": "round",
                        stroke: c,
                        fill: c,
                        "stroke-width": this.graphic.strokeWidth() + 2 * C.snap
                    }), super.render(), r(this.graphic, {
                        markerStartSetter: a,
                        markerEndSetter: M
                    }), this.setMarkers(this)
                }
                redraw(s) {
                    if (this.graphic) {
                        let C = this.toD(),
                            m = s ? "animate" : "attr";
                        C ? (this.graphic[m]({
                            d: C
                        }), this.tracker[m]({
                            d: C
                        })) : (this.graphic.attr({
                            d: "M 0 -9000000000"
                        }), this.tracker.attr({
                            d: "M 0 -9000000000"
                        })), this.graphic.placed = this.tracker.placed = !!C
                    }
                    super.redraw(s)
                }
                setMarkers(s) {
                    let C = s.options,
                        m = s.chart,
                        O = m.options.defs,
                        j = C.fill,
                        z = k(j) && j !== "none" ? j : C.stroke;
                    ["markerStart", "markerEnd"].forEach(function(F) {
                        let w = C[F],
                            B, Y, l, P;
                        if (w) {
                            for (l in O)
                                if ((w === ((B = O[l]).attributes && B.attributes.id) || w === B.id) && B.tagName === "marker") {
                                    Y = B;
                                    break
                                } Y && (P = s[F] = m.renderer.addMarker((C.id || h()) + "-" + w, f(Y, {
                                color: z
                            })), s.attr(F, P.getAttribute("id")))
                        }
                    })
                }
            }
            return o.attrsMap = {
                dashStyle: "dashstyle",
                strokeWidth: "stroke-width",
                stroke: "stroke",
                fill: "fill",
                zIndex: "zIndex"
            }, o
        }), tt(p, "Extensions/Annotations/Controllables/ControllableRect.js", [p["Extensions/Annotations/Controllables/Controllable.js"], p["Extensions/Annotations/Controllables/ControllablePath.js"], p["Core/Utilities.js"]], function(v, S, L) {
            let {
                merge: N
            } = L;
            class x extends v {
                constructor(k, r, f) {
                    super(k, r, f, "shape"), this.type = "rect", this.translate = super.translateShape
                }
                render(k) {
                    let r = this.attrsFromOptions(this.options);
                    this.graphic = this.annotation.chart.renderer.rect(0, -9e9, 0, 0).attr(r).add(k), super.render()
                }
                redraw(k) {
                    if (this.graphic) {
                        let r = this.anchor(this.points[0]).absolutePosition;
                        r ? this.graphic[k ? "animate" : "attr"]({
                            x: r.x,
                            y: r.y,
                            width: this.options.width,
                            height: this.options.height
                        }) : this.attr({
                            x: 0,
                            y: -9e9
                        }), this.graphic.placed = !!r
                    }
                    super.redraw(k)
                }
            }
            return x.attrsMap = N(S.attrsMap, {
                width: "width",
                height: "height"
            }), x
        }), tt(p, "Extensions/Annotations/Controllables/ControllableCircle.js", [p["Extensions/Annotations/Controllables/Controllable.js"], p["Extensions/Annotations/Controllables/ControllablePath.js"], p["Core/Utilities.js"]], function(v, S, L) {
            let {
                merge: N
            } = L;
            class x extends v {
                constructor(k, r, f) {
                    super(k, r, f, "shape"), this.type = "circle", this.translate = super.translateShape
                }
                redraw(k) {
                    if (this.graphic) {
                        let r = this.anchor(this.points[0]).absolutePosition;
                        r ? this.graphic[k ? "animate" : "attr"]({
                            x: r.x,
                            y: r.y,
                            r: this.options.r
                        }) : this.graphic.attr({
                            x: 0,
                            y: -9e9
                        }), this.graphic.placed = !!r
                    }
                    super.redraw.call(this, k)
                }
                render(k) {
                    let r = this.attrsFromOptions(this.options);
                    this.graphic = this.annotation.chart.renderer.circle(0, -9e9, 0).attr(r).add(k), super.render()
                }
                setRadius(k) {
                    this.options.r = k
                }
            }
            return x.attrsMap = N(S.attrsMap, {
                r: "r"
            }), x
        }), tt(p, "Extensions/Annotations/Controllables/ControllableEllipse.js", [p["Extensions/Annotations/Controllables/Controllable.js"], p["Extensions/Annotations/Controllables/ControllablePath.js"], p["Core/Utilities.js"]], function(v, S, L) {
            let {
                merge: N,
                defined: x
            } = L;
            class d extends v {
                constructor(r, f, h) {
                    super(r, f, h, "shape"), this.type = "ellipse"
                }
                init(r, f, h) {
                    x(f.yAxis) && f.points.forEach(y => {
                        y.yAxis = f.yAxis
                    }), x(f.xAxis) && f.points.forEach(y => {
                        y.xAxis = f.xAxis
                    }), super.init(r, f, h)
                }
                render(r) {
                    this.graphic = this.annotation.chart.renderer.createElement("ellipse").attr(this.attrsFromOptions(this.options)).add(r), super.render()
                }
                translate(r, f) {
                    super.translateShape(r, f, !0)
                }
                getDistanceFromLine(r, f, h, y) {
                    return Math.abs((f.y - r.y) * h - (f.x - r.x) * y + f.x * r.y - f.y * r.x) / Math.sqrt((f.y - r.y) * (f.y - r.y) + (f.x - r.x) * (f.x - r.x))
                }
                getAttrs(r, f) {
                    let h = r.x,
                        y = r.y,
                        M = f.x,
                        a = f.y,
                        c = (h + M) / 2,
                        n = 180 * Math.atan((a - y) / (M - h)) / Math.PI;
                    c < h && (n += 180);
                    let i = this.getRY();
                    return {
                        cx: c,
                        cy: (y + a) / 2,
                        rx: Math.sqrt((h - M) * (h - M) / 4 + (y - a) * (y - a) / 4),
                        ry: i,
                        angle: n
                    }
                }
                getRY() {
                    let r = this.getYAxis();
                    return x(r) ? Math.abs(r.toPixels(this.options.ry) - r.toPixels(0)) : this.options.ry
                }
                getYAxis() {
                    let r = this.options.yAxis;
                    return this.chart.yAxis[r]
                }
                getAbsolutePosition(r) {
                    return this.anchor(r).absolutePosition
                }
                redraw(r) {
                    if (this.graphic) {
                        let f = this.getAbsolutePosition(this.points[0]),
                            h = this.getAbsolutePosition(this.points[1]),
                            y = this.getAttrs(f, h);
                        f ? this.graphic[r ? "animate" : "attr"]({
                            cx: y.cx,
                            cy: y.cy,
                            rx: y.rx,
                            ry: y.ry,
                            rotation: y.angle,
                            rotationOriginX: y.cx,
                            rotationOriginY: y.cy
                        }) : this.graphic.attr({
                            x: 0,
                            y: -9e9
                        }), this.graphic.placed = !!f
                    }
                    super.redraw(r)
                }
                setYRadius(r) {
                    let f = this.annotation.userOptions.shapes;
                    this.options.ry = r, f && f[0] && (f[0].ry = r, f[0].ry = r)
                }
            }
            return d.attrsMap = N(S.attrsMap, {
                ry: "ry"
            }), d
        }), tt(p, "Extensions/Annotations/Controllables/ControllableLabel.js", [p["Extensions/Annotations/Controllables/Controllable.js"], p["Core/Templating.js"], p["Extensions/Annotations/MockPoint.js"], p["Core/Utilities.js"]], function(v, S, L, N) {
            let {
                format: x
            } = S, {
                extend: d,
                isNumber: k,
                pick: r
            } = N, f = [];

            function h(M, a, c, n, i) {
                let t = i && i.anchorX,
                    o = i && i.anchorY,
                    e, s, C = c / 2;
                return k(t) && k(o) && (e = [
                    ["M", t, o]
                ], (s = a - o) < 0 && (s = -n - s), s < c && (C = t < M + c / 2 ? s : c - s), o > a + n ? e.push(["L", M + C, a + n]) : o < a ? e.push(["L", M + C, a]) : t < M ? e.push(["L", M, a + n / 2]) : t > M + c && e.push(["L", M + c, a + n / 2])), e || []
            }
            class y extends v {
                static alignedPosition(a, c) {
                    let n = a.align,
                        i = a.verticalAlign,
                        t = (c.x || 0) + (a.x || 0),
                        o = (c.y || 0) + (a.y || 0),
                        e, s;
                    return n === "right" ? e = 1 : n === "center" && (e = 2), e && (t += (c.width - (a.width || 0)) / e), i === "bottom" ? s = 1 : i === "middle" && (s = 2), s && (o += (c.height - (a.height || 0)) / s), {
                        x: Math.round(t),
                        y: Math.round(o)
                    }
                }
                static compose(a) {
                    if (N.pushUnique(f, a)) {
                        let c = a.prototype;
                        c.symbols.connector = h
                    }
                }
                static justifiedOptions(a, c, n, i) {
                    let t, o = n.align,
                        e = n.verticalAlign,
                        s = c.box ? 0 : c.padding || 0,
                        C = c.getBBox(),
                        m = {
                            align: o,
                            verticalAlign: e,
                            x: n.x,
                            y: n.y,
                            width: c.width,
                            height: c.height
                        },
                        O = (i.x || 0) - a.plotLeft,
                        j = (i.y || 0) - a.plotTop;
                    return (t = O + s) < 0 && (o === "right" ? m.align = "left" : m.x = (m.x || 0) - t), (t = O + C.width - s) > a.plotWidth && (o === "left" ? m.align = "right" : m.x = (m.x || 0) + a.plotWidth - t), (t = j + s) < 0 && (e === "bottom" ? m.verticalAlign = "top" : m.y = (m.y || 0) - t), (t = j + C.height - s) > a.plotHeight && (e === "top" ? m.verticalAlign = "bottom" : m.y = (m.y || 0) + a.plotHeight - t), m
                }
                constructor(a, c, n) {
                    super(a, c, n, "label")
                }
                translatePoint(a, c) {
                    super.translatePoint(a, c, 0)
                }
                translate(a, c) {
                    let n = this.annotation.chart,
                        i = this.annotation.userOptions,
                        t = n.annotations.indexOf(this.annotation),
                        o = n.options.annotations,
                        e = o[t];
                    if (n.inverted) {
                        let s = a;
                        a = c, c = s
                    }
                    this.options.x += a, this.options.y += c, e[this.collection][this.index].x = this.options.x, e[this.collection][this.index].y = this.options.y, i[this.collection][this.index].x = this.options.x, i[this.collection][this.index].y = this.options.y
                }
                render(a) {
                    let c = this.options,
                        n = this.attrsFromOptions(c),
                        i = c.style;
                    this.graphic = this.annotation.chart.renderer.label("", 0, -9999, c.shape, null, null, c.useHTML, null, "annotation-label").attr(n).add(a), this.annotation.chart.styledMode || (i.color === "contrast" && (i.color = this.annotation.chart.renderer.getContrast(y.shapesWithoutBackground.indexOf(c.shape) > -1 ? "#FFFFFF" : c.backgroundColor)), this.graphic.css(c.style).shadow(c.shadow)), c.className && this.graphic.addClass(c.className), this.graphic.labelrank = c.labelrank, super.render()
                }
                redraw(a) {
                    let c = this.options,
                        n = this.text || c.format || c.text,
                        i = this.graphic,
                        t = this.points[0];
                    if (!i) {
                        this.redraw(a);
                        return
                    }
                    i.attr({
                        text: n ? x(String(n), t.getLabelConfig(), this.annotation.chart) : c.formatter.call(t, this)
                    });
                    let o = this.anchor(t),
                        e = this.position(o);
                    e ? (i.alignAttr = e, e.anchorX = o.absolutePosition.x, e.anchorY = o.absolutePosition.y, i[a ? "animate" : "attr"](e)) : i.attr({
                        x: 0,
                        y: -9999
                    }), i.placed = !!e, super.redraw(a)
                }
                anchor(a) {
                    let c = super.anchor.apply(this, arguments),
                        n = this.options.x || 0,
                        i = this.options.y || 0;
                    return c.absolutePosition.x -= n, c.absolutePosition.y -= i, c.relativePosition.x -= n, c.relativePosition.y -= i, c
                }
                position(a) {
                    let c = this.graphic,
                        n = this.annotation.chart,
                        i = n.tooltip,
                        t = this.points[0],
                        o = this.options,
                        e = a.absolutePosition,
                        s = a.relativePosition,
                        C, m, O, j, z = t.series.visible && L.prototype.isInsidePlot.call(t);
                    if (c && z) {
                        let {
                            width: F = 0,
                            height: w = 0
                        } = c;
                        o.distance && i ? C = i.getPosition.call({
                            chart: n,
                            distance: r(o.distance, 16),
                            getPlayingField: i.getPlayingField
                        }, F, w, {
                            plotX: s.x,
                            plotY: s.y,
                            negative: t.negative,
                            ttBelow: t.ttBelow,
                            h: s.height || s.width
                        }) : o.positioner ? C = o.positioner.call(this) : (m = {
                            x: e.x,
                            y: e.y,
                            width: 0,
                            height: 0
                        }, C = y.alignedPosition(d(o, {
                            width: F,
                            height: w
                        }), m), this.options.overflow === "justify" && (C = y.alignedPosition(y.justifiedOptions(n, c, o, C), m))), o.crop && (O = C.x - n.plotLeft, j = C.y - n.plotTop, z = n.isInsidePlot(O, j) && n.isInsidePlot(O + F, j + w))
                    }
                    return z ? C : null
                }
            }
            return y.attrsMap = {
                backgroundColor: "fill",
                borderColor: "stroke",
                borderWidth: "stroke-width",
                zIndex: "zIndex",
                borderRadius: "r",
                padding: "padding"
            }, y.shapesWithoutBackground = ["connector"], y
        }), tt(p, "Extensions/Annotations/Controllables/ControllableImage.js", [p["Extensions/Annotations/Controllables/Controllable.js"], p["Extensions/Annotations/Controllables/ControllableLabel.js"]], function(v, S) {
            class L extends v {
                constructor(x, d, k) {
                    super(x, d, k, "shape"), this.type = "image", this.translate = super.translateShape
                }
                render(x) {
                    let d = this.attrsFromOptions(this.options),
                        k = this.options;
                    this.graphic = this.annotation.chart.renderer.image(k.src, 0, -9e9, k.width, k.height).attr(d).add(x), this.graphic.width = k.width, this.graphic.height = k.height, super.render()
                }
                redraw(x) {
                    if (this.graphic) {
                        let d = this.anchor(this.points[0]),
                            k = S.prototype.position.call(this, d);
                        k ? this.graphic[x ? "animate" : "attr"]({
                            x: k.x,
                            y: k.y
                        }) : this.graphic.attr({
                            x: 0,
                            y: -9e9
                        }), this.graphic.placed = !!k
                    }
                    super.redraw(x)
                }
            }
            return L.attrsMap = {
                width: "width",
                height: "height",
                zIndex: "zIndex"
            }, L
        }), tt(p, "Core/Chart/ChartNavigationComposition.js", [], function() {
            var v;
            return function(S) {
                S.compose = function(N) {
                    return N.navigation || (N.navigation = new L(N)), N
                };
                class L {
                    constructor(x) {
                        this.updates = [], this.chart = x
                    }
                    addUpdate(x) {
                        this.chart.navigation.updates.push(x)
                    }
                    update(x, d) {
                        this.updates.forEach(k => {
                            k.call(this.chart, x, d)
                        })
                    }
                }
                S.Additions = L
            }(v || (v = {})), v
        }), tt(p, "Extensions/Annotations/NavigationBindingsUtilities.js", [p["Core/Utilities.js"]], function(v) {
            let {
                defined: S,
                isNumber: L,
                pick: N
            } = v, x = {
                backgroundColor: "string",
                borderColor: "string",
                borderRadius: "string",
                color: "string",
                fill: "string",
                fontSize: "string",
                labels: "string",
                name: "string",
                stroke: "string",
                title: "string"
            };
            return {
                annotationsFieldsTypes: x,
                getAssignedAxis: function(d) {
                    return d.filter(k => {
                        let r = k.axis.getExtremes(),
                            f = r.min,
                            h = r.max,
                            y = N(k.axis.minPointOffset, 0);
                        return L(f) && L(h) && k.value >= f - y && k.value <= h + y && !k.axis.options.isInternal
                    })[0]
                },
                getFieldType: function(d, k) {
                    let r = x[d],
                        f = typeof k;
                    return S(r) && (f = r), {
                        string: "text",
                        number: "number",
                        boolean: "checkbox"
                    } [f]
                }
            }
        }), tt(p, "Extensions/Annotations/NavigationBindingsDefaults.js", [p["Extensions/Annotations/NavigationBindingsUtilities.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                getAssignedAxis: L
            } = v, {
                isNumber: N,
                merge: x
            } = S;
            return {
                lang: {
                    navigation: {
                        popup: {
                            simpleShapes: "Simple shapes",
                            lines: "Lines",
                            circle: "Circle",
                            ellipse: "Ellipse",
                            rectangle: "Rectangle",
                            label: "Label",
                            shapeOptions: "Shape options",
                            typeOptions: "Details",
                            fill: "Fill",
                            format: "Text",
                            strokeWidth: "Line width",
                            stroke: "Line color",
                            title: "Title",
                            name: "Name",
                            labelOptions: "Label options",
                            labels: "Labels",
                            backgroundColor: "Background color",
                            backgroundColors: "Background colors",
                            borderColor: "Border color",
                            borderRadius: "Border radius",
                            borderWidth: "Border width",
                            style: "Style",
                            padding: "Padding",
                            fontSize: "Font size",
                            color: "Color",
                            height: "Height",
                            shapes: "Shape options"
                        }
                    }
                },
                navigation: {
                    bindingsClassName: "highcharts-bindings-container",
                    bindings: {
                        circleAnnotation: {
                            className: "highcharts-circle-annotation",
                            start: function(d) {
                                let k = this.chart.pointer.getCoordinates(d),
                                    r = L(k.xAxis),
                                    f = L(k.yAxis),
                                    h = this.chart.options.navigation;
                                if (r && f) return this.chart.addAnnotation(x({
                                    langKey: "circle",
                                    type: "basicAnnotation",
                                    shapes: [{
                                        type: "circle",
                                        point: {
                                            x: r.value,
                                            y: f.value,
                                            xAxis: r.axis.index,
                                            yAxis: f.axis.index
                                        },
                                        r: 5
                                    }]
                                }, h.annotationsOptions, h.bindings.circleAnnotation.annotationsOptions))
                            },
                            steps: [function(d, k) {
                                let r, f = k.options.shapes,
                                    h = f && f[0] && f[0].point || {};
                                if (N(h.xAxis) && N(h.yAxis)) {
                                    let y = this.chart.inverted,
                                        M = this.chart.xAxis[h.xAxis].toPixels(h.x),
                                        a = this.chart.yAxis[h.yAxis].toPixels(h.y);
                                    r = Math.max(Math.sqrt(Math.pow(y ? a - d.chartX : M - d.chartX, 2) + Math.pow(y ? M - d.chartY : a - d.chartY, 2)), 5)
                                }
                                k.update({
                                    shapes: [{
                                        r
                                    }]
                                })
                            }]
                        },
                        ellipseAnnotation: {
                            className: "highcharts-ellipse-annotation",
                            start: function(d) {
                                let k = this.chart.pointer.getCoordinates(d),
                                    r = L(k.xAxis),
                                    f = L(k.yAxis),
                                    h = this.chart.options.navigation;
                                if (r && f) return this.chart.addAnnotation(x({
                                    langKey: "ellipse",
                                    type: "basicAnnotation",
                                    shapes: [{
                                        type: "ellipse",
                                        xAxis: r.axis.index,
                                        yAxis: f.axis.index,
                                        points: [{
                                            x: r.value,
                                            y: f.value
                                        }, {
                                            x: r.value,
                                            y: f.value
                                        }],
                                        ry: 1
                                    }]
                                }, h.annotationsOptions, h.bindings.ellipseAnnotation.annotationOptions))
                            },
                            steps: [function(d, k) {
                                let r = k.shapes[0],
                                    f = r.getAbsolutePosition(r.points[1]);
                                r.translatePoint(d.chartX - f.x, d.chartY - f.y, 1), r.redraw(!1)
                            }, function(d, k) {
                                let r = k.shapes[0],
                                    f = r.getAbsolutePosition(r.points[0]),
                                    h = r.getAbsolutePosition(r.points[1]),
                                    y = r.getDistanceFromLine(f, h, d.chartX, d.chartY),
                                    M = r.getYAxis(),
                                    a = Math.abs(M.toValue(0) - M.toValue(y));
                                r.setYRadius(a), r.redraw(!1)
                            }]
                        },
                        rectangleAnnotation: {
                            className: "highcharts-rectangle-annotation",
                            start: function(d) {
                                let k = this.chart.pointer.getCoordinates(d),
                                    r = L(k.xAxis),
                                    f = L(k.yAxis);
                                if (!r || !f) return;
                                let h = r.value,
                                    y = f.value,
                                    M = r.axis.index,
                                    a = f.axis.index,
                                    c = this.chart.options.navigation;
                                return this.chart.addAnnotation(x({
                                    langKey: "rectangle",
                                    type: "basicAnnotation",
                                    shapes: [{
                                        type: "path",
                                        points: [{
                                            xAxis: M,
                                            yAxis: a,
                                            x: h,
                                            y
                                        }, {
                                            xAxis: M,
                                            yAxis: a,
                                            x: h,
                                            y
                                        }, {
                                            xAxis: M,
                                            yAxis: a,
                                            x: h,
                                            y
                                        }, {
                                            xAxis: M,
                                            yAxis: a,
                                            x: h,
                                            y
                                        }, {
                                            command: "Z"
                                        }]
                                    }]
                                }, c.annotationsOptions, c.bindings.rectangleAnnotation.annotationsOptions))
                            },
                            steps: [function(d, k) {
                                let r = k.options.shapes,
                                    f = r && r[0] && r[0].points || [],
                                    h = this.chart.pointer.getCoordinates(d),
                                    y = L(h.xAxis),
                                    M = L(h.yAxis);
                                if (y && M) {
                                    let a = y.value,
                                        c = M.value;
                                    f[1].x = a, f[2].x = a, f[2].y = c, f[3].y = c, k.update({
                                        shapes: [{
                                            points: f
                                        }]
                                    })
                                }
                            }]
                        },
                        labelAnnotation: {
                            className: "highcharts-label-annotation",
                            start: function(d) {
                                let k = this.chart.pointer.getCoordinates(d),
                                    r = L(k.xAxis),
                                    f = L(k.yAxis),
                                    h = this.chart.options.navigation;
                                if (r && f) return this.chart.addAnnotation(x({
                                    langKey: "label",
                                    type: "basicAnnotation",
                                    labelOptions: {
                                        format: "{y:.2f}",
                                        overflow: "none",
                                        crop: !0
                                    },
                                    labels: [{
                                        point: {
                                            xAxis: r.axis.index,
                                            yAxis: f.axis.index,
                                            x: r.value,
                                            y: f.value
                                        }
                                    }]
                                }, h.annotationsOptions, h.bindings.labelAnnotation.annotationsOptions))
                            }
                        }
                    },
                    events: {},
                    annotationsOptions: {
                        animation: {
                            defer: 0
                        }
                    }
                }
            }
        }), tt(p, "Extensions/Annotations/NavigationBindings.js", [p["Core/Chart/ChartNavigationComposition.js"], p["Core/Defaults.js"], p["Core/Templating.js"], p["Core/Globals.js"], p["Extensions/Annotations/NavigationBindingsDefaults.js"], p["Extensions/Annotations/NavigationBindingsUtilities.js"], p["Core/Utilities.js"]], function(v, S, L, N, x, d, k) {
            let {
                setOptions: r
            } = S, {
                format: f
            } = L, {
                doc: h,
                win: y
            } = N, {
                getFieldType: M
            } = d, {
                addEvent: a,
                attr: c,
                defined: n,
                fireEvent: i,
                isArray: t,
                isFunction: o,
                isNumber: e,
                isObject: s,
                merge: C,
                objectEach: m,
                pick: O
            } = k, j = [];

            function z() {
                this.chart.navigationBindings && this.chart.navigationBindings.deselectAnnotation()
            }

            function F() {
                this.navigationBindings && this.navigationBindings.destroy()
            }

            function w() {
                let u = this.options;
                u && u.navigation && u.navigation.bindings && (this.navigationBindings = new b(this, u.navigation), this.navigationBindings.initEvents(), this.navigationBindings.initUpdate())
            }

            function B() {
                let u = this.navigationBindings,
                    g = "highcharts-disabled-btn";
                if (this && u) {
                    let T = !1;
                    if (this.series.forEach(D => {
                        !D.options.isInternal && D.visible && (T = !0)
                    }), this.navigationBindings && this.navigationBindings.container && this.navigationBindings.container[0]) {
                        let D = this.navigationBindings.container[0];
                        m(u.boundClassNames, (E, A) => {
                            let X = D.querySelectorAll("." + A);
                            if (X)
                                for (let U = 0; U < X.length; U++) {
                                    let I = X[U],
                                        q = I.className;
                                    E.noDataState === "normal" || T ? q.indexOf(g) !== -1 && I.classList.remove(g) : q.indexOf(g) === -1 && (I.className += " " + g)
                                }
                        })
                    }
                }
            }

            function Y() {
                this.deselectAnnotation()
            }

            function l() {
                this.selectedButtonElement = null
            }

            function P(u) {
                let g, T, D = u.prototype.defaultOptions.events && u.prototype.defaultOptions.events.click;

                function E(A) {
                    let X = this,
                        U = X.chart.navigationBindings,
                        I = U.activeAnnotation;
                    D && D.call(X, A), I !== X ? (U.deselectAnnotation(), U.activeAnnotation = X, X.setControlPointsVisibility(!0), i(U, "showPopup", {
                        annotation: X,
                        formType: "annotation-toolbar",
                        options: U.annotationToFields(X),
                        onSubmit: function(q) {
                            if (q.actionType === "remove") U.activeAnnotation = !1, U.chart.removeAnnotation(X);
                            else {
                                let W = {};
                                U.fieldsToOptions(q.fields, W), U.deselectAnnotation();
                                let K = W.typeOptions;
                                X.options.type === "measure" && (K.crosshairY.enabled = K.crosshairY.strokeWidth !== 0, K.crosshairX.enabled = K.crosshairX.strokeWidth !== 0), X.update(W)
                            }
                        }
                    })) : i(U, "closePopup"), A.activeAnnotation = !0
                }
                C(!0, u.prototype.defaultOptions.events, {
                    click: E,
                    touchstart: function(A) {
                        g = A.touches[0].clientX, T = A.touches[0].clientY
                    },
                    touchend: function(A) {
                        !!g && Math.sqrt(Math.pow(g - A.changedTouches[0].clientX, 2) + Math.pow(T - A.changedTouches[0].clientY, 2)) >= 4 || E.call(this, A)
                    }
                })
            }
            class b {
                static compose(g, T) {
                    k.pushUnique(j, g) && (a(g, "remove", z), P(g), m(g.types, D => {
                        P(D)
                    })), k.pushUnique(j, T) && (a(T, "destroy", F), a(T, "load", w), a(T, "render", B)), k.pushUnique(j, b) && (a(b, "closePopup", Y), a(b, "deselectButton", l)), k.pushUnique(j, r) && r(x)
                }
                constructor(g, T) {
                    this.boundClassNames = void 0, this.selectedButton = void 0, this.chart = g, this.options = T, this.eventsToUnbind = [], this.container = this.chart.container.getElementsByClassName(this.options.bindingsClassName || ""), this.container.length || (this.container = h.getElementsByClassName(this.options.bindingsClassName || ""))
                }
                initEvents() {
                    let g = this,
                        T = g.chart,
                        D = g.container,
                        E = g.options;
                    g.boundClassNames = {}, m(E.bindings || {}, A => {
                        g.boundClassNames[A.className] = A
                    }), [].forEach.call(D, A => {
                        g.eventsToUnbind.push(a(A, "click", X => {
                            let U = g.getButtonEvents(A, X);
                            U && !U.button.classList.contains("highcharts-disabled-btn") && g.bindingsButtonClick(U.button, U.events, X)
                        }))
                    }), m(E.events || {}, (A, X) => {
                        o(A) && g.eventsToUnbind.push(a(g, X, A, {
                            passive: !1
                        }))
                    }), g.eventsToUnbind.push(a(T.container, "click", function(A) {
                        !T.cancelClick && T.isInsidePlot(A.chartX - T.plotLeft, A.chartY - T.plotTop, {
                            visiblePlotOnly: !0
                        }) && g.bindingsChartClick(this, A)
                    })), g.eventsToUnbind.push(a(T.container, N.isTouchDevice ? "touchmove" : "mousemove", function(A) {
                        g.bindingsContainerMouseMove(this, A)
                    }, N.isTouchDevice ? {
                        passive: !1
                    } : void 0))
                }
                initUpdate() {
                    let g = this;
                    v.compose(this.chart).navigation.addUpdate(T => {
                        g.update(T)
                    })
                }
                bindingsButtonClick(g, T, D) {
                    let E = this.chart,
                        A = E.renderer.boxWrapper,
                        X = !0;
                    this.selectedButtonElement && (this.selectedButtonElement.classList === g.classList && (X = !1), i(this, "deselectButton", {
                        button: this.selectedButtonElement
                    }), this.nextEvent && (this.currentUserDetails && this.currentUserDetails.coll === "annotations" && E.removeAnnotation(this.currentUserDetails), this.mouseMoveEvent = this.nextEvent = !1)), X ? (this.selectedButton = T, this.selectedButtonElement = g, i(this, "selectButton", {
                        button: g
                    }), T.init && T.init.call(this, g, D), (T.start || T.steps) && E.renderer.boxWrapper.addClass("highcharts-draw-mode")) : (E.stockTools && E.stockTools.toggleButtonActiveClass(g), A.removeClass("highcharts-draw-mode"), this.nextEvent = !1, this.mouseMoveEvent = !1, this.selectedButton = null)
                }
                bindingsChartClick(g, T) {
                    g = this.chart;
                    let D = this.activeAnnotation,
                        E = this.selectedButton,
                        A = g.renderer.boxWrapper;
                    D && (D.cancelClick || T.activeAnnotation || !T.target.parentNode || function(X, U) {
                        let I = y.Element.prototype,
                            q = I.matches || I.msMatchesSelector || I.webkitMatchesSelector,
                            W = null;
                        if (I.closest) W = I.closest.call(X, U);
                        else
                            do {
                                if (q.call(X, U)) return X;
                                X = X.parentElement || X.parentNode
                            } while (X !== null && X.nodeType === 1);
                        return W
                    }(T.target, ".highcharts-popup") ? D.cancelClick && setTimeout(() => {
                        D.cancelClick = !1
                    }, 0) : i(this, "closePopup")), E && E.start && (this.nextEvent ? (this.nextEvent(T, this.currentUserDetails), this.steps && (this.stepIndex++, E.steps[this.stepIndex] ? this.mouseMoveEvent = this.nextEvent = E.steps[this.stepIndex] : (i(this, "deselectButton", {
                        button: this.selectedButtonElement
                    }), A.removeClass("highcharts-draw-mode"), E.end && E.end.call(this, T, this.currentUserDetails), this.nextEvent = !1, this.mouseMoveEvent = !1, this.selectedButton = null))) : (this.currentUserDetails = E.start.call(this, T), this.currentUserDetails && E.steps ? (this.stepIndex = 0, this.steps = !0, this.mouseMoveEvent = this.nextEvent = E.steps[this.stepIndex]) : (i(this, "deselectButton", {
                        button: this.selectedButtonElement
                    }), A.removeClass("highcharts-draw-mode"), this.steps = !1, this.selectedButton = null, E.end && E.end.call(this, T, this.currentUserDetails))))
                }
                bindingsContainerMouseMove(g, T) {
                    this.mouseMoveEvent && this.mouseMoveEvent(T, this.currentUserDetails)
                }
                fieldsToOptions(g, T) {
                    return m(g, (D, E) => {
                        let A = parseFloat(D),
                            X = E.split("."),
                            U = X.length - 1;
                        if (!e(A) || D.match(/px|em/g) || E.match(/format/g) || (D = A), D !== "undefined") {
                            let I = T;
                            X.forEach((q, W) => {
                                let K = O(X[W + 1], "");
                                U === W ? I[q] = D : (I[q] || (I[q] = K.match(/\d/g) ? [] : {}), I = I[q])
                            })
                        }
                    }), T
                }
                deselectAnnotation() {
                    this.activeAnnotation && (this.activeAnnotation.setControlPointsVisibility(!1), this.activeAnnotation = !1)
                }
                annotationToFields(g) {
                    let T = g.options,
                        D = b.annotationsEditable,
                        E = D.nestedOptions,
                        A = O(T.type, T.shapes && T.shapes[0] && T.shapes[0].type, T.labels && T.labels[0] && T.labels[0].type, "label"),
                        X = b.annotationsNonEditable[T.langKey] || [],
                        U = {
                            langKey: T.langKey,
                            type: A
                        };

                    function I(q, W, K, Z, R) {
                        let G;
                        K && n(q) && X.indexOf(W) === -1 && ((K.indexOf && K.indexOf(W)) >= 0 || K[W] || K === !0) && (t(q) ? (Z[W] = [], q.forEach((H, Q) => {
                            s(H) ? (Z[W][Q] = {}, m(H, (V, J) => {
                                I(V, J, E[W], Z[W][Q], W)
                            })) : I(H, 0, E[W], Z[W], W)
                        })) : s(q) ? (G = {}, t(Z) ? (Z.push(G), G[W] = {}, G = G[W]) : Z[W] = G, m(q, (H, Q) => {
                            I(H, Q, W === 0 ? K : E[W], G, W)
                        })) : W === "format" ? Z[W] = [f(q, g.labels[0].points[0]).toString(), "text"] : t(Z) ? Z.push([q, M(R, q)]) : Z[W] = [q, M(W, q)])
                    }
                    return m(T, (q, W) => {
                        W === "typeOptions" ? (U[W] = {}, m(T[W], (K, Z) => {
                            I(K, Z, E, U[W], Z)
                        })) : I(q, W, D[A], U, W)
                    }), U
                }
                getClickedClassNames(g, T) {
                    let D = T.target,
                        E = [],
                        A;
                    for (; D && D.tagName && ((A = c(D, "class")) && (E = E.concat(A.split(" ").map(X => [X, D]))), (D = D.parentNode) !== g););
                    return E
                }
                getButtonEvents(g, T) {
                    let D, E = this;
                    return this.getClickedClassNames(g, T).forEach(X => {
                        E.boundClassNames[X[0]] && !D && (D = {
                            events: E.boundClassNames[X[0]],
                            button: X[1]
                        })
                    }), D
                }
                update(g) {
                    this.options = C(!0, this.options, g), this.removeEvents(), this.initEvents()
                }
                removeEvents() {
                    this.eventsToUnbind.forEach(g => g())
                }
                destroy() {
                    this.removeEvents()
                }
            }
            return b.annotationsEditable = {
                nestedOptions: {
                    labelOptions: ["style", "format", "backgroundColor"],
                    labels: ["style"],
                    label: ["style"],
                    style: ["fontSize", "color"],
                    background: ["fill", "strokeWidth", "stroke"],
                    innerBackground: ["fill", "strokeWidth", "stroke"],
                    outerBackground: ["fill", "strokeWidth", "stroke"],
                    shapeOptions: ["fill", "strokeWidth", "stroke"],
                    shapes: ["fill", "strokeWidth", "stroke"],
                    line: ["strokeWidth", "stroke"],
                    backgroundColors: [!0],
                    connector: ["fill", "strokeWidth", "stroke"],
                    crosshairX: ["strokeWidth", "stroke"],
                    crosshairY: ["strokeWidth", "stroke"]
                },
                circle: ["shapes"],
                ellipse: ["shapes"],
                verticalLine: [],
                label: ["labelOptions"],
                measure: ["background", "crosshairY", "crosshairX"],
                fibonacci: [],
                tunnel: ["background", "line", "height"],
                pitchfork: ["innerBackground", "outerBackground"],
                rect: ["shapes"],
                crookedLine: [],
                basicAnnotation: ["shapes", "labelOptions"]
            }, b.annotationsNonEditable = {
                rectangle: ["crosshairX", "crosshairY", "labelOptions"],
                ellipse: ["labelOptions"],
                circle: ["labelOptions"]
            }, b
        }), tt(p, "Shared/BaseForm.js", [p["Core/Renderer/HTML/AST.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                addEvent: L,
                createElement: N
            } = S;
            return class {
                constructor(x, d) {
                    this.iconsURL = d, this.container = this.createPopupContainer(x), this.closeButton = this.addCloseButton()
                }
                createPopupContainer(x, d = "highcharts-popup highcharts-no-tooltip") {
                    return N("div", {
                        className: d
                    }, void 0, x)
                }
                addCloseButton(x = "highcharts-popup-close") {
                    let d = this,
                        k = this.iconsURL,
                        r = N("div", {
                            className: x
                        }, void 0, this.container);
                    return r.style["background-image"] = "url(" + (k.match(/png|svg|jpeg|jpg|gif/ig) ? k : k + "close.svg") + ")", ["click", "touchstart"].forEach(f => {
                        L(r, f, d.closeButtonEvents.bind(d))
                    }), L(document, "keydown", function(f) {
                        f.code === "Escape" && d.closeButtonEvents()
                    }), r
                }
                closeButtonEvents() {
                    this.closePopup()
                }
                showPopup(x = "highcharts-annotation-toolbar") {
                    let d = this.container,
                        k = this.closeButton;
                    this.type = void 0, d.innerHTML = v.emptyHTML, d.className.indexOf(x) >= 0 && (d.classList.remove(x), d.removeAttribute("style")), d.appendChild(k), d.style.display = "block", d.style.height = ""
                }
                closePopup() {
                    this.container.style.display = "none"
                }
            }
        }), tt(p, "Extensions/Annotations/Popup/PopupAnnotations.js", [p["Core/Globals.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                doc: L,
                isFirefox: N
            } = v, {
                createElement: x,
                isArray: d,
                isObject: k,
                objectEach: r,
                pick: f,
                stableSort: h
            } = S;

            function y(M, a, c, n, i, t) {
                let o, e;
                if (!a) return;
                let s = this.addInput,
                    C = this.lang;
                r(n, (m, O) => {
                    o = c !== "" ? c + "." + O : O, k(m) && (!d(m) || d(m) && k(m[0]) ? ((e = C[O] || O).match(/\d/g) || i.push([!0, e, M]), y.call(this, M, a, o, m, i, !1)) : i.push([this, o, "annotation", M, m]))
                }), t && (h(i, m => m[1].match(/format/g) ? -1 : 1), N && i.reverse(), i.forEach(m => {
                    m[0] === !0 ? x("span", {
                        className: "highcharts-annotation-title"
                    }, void 0, m[2]).appendChild(L.createTextNode(m[1])) : (m[4] = {
                        value: m[4][0],
                        type: m[4][1]
                    }, s.apply(m[0], m.splice(1)))
                }))
            }
            return {
                addForm: function(M, a, c, n) {
                    if (!M) return;
                    let i = this.container,
                        t = this.lang,
                        o = x("h2", {
                            className: "highcharts-popup-main-title"
                        }, void 0, i);
                    o.appendChild(L.createTextNode(t[a.langKey] || a.langKey || "")), o = x("div", {
                        className: "highcharts-popup-lhs-col highcharts-popup-lhs-full"
                    }, void 0, i);
                    let e = x("div", {
                        className: "highcharts-popup-bottom-row"
                    }, void 0, i);
                    y.call(this, o, M, "", a, [], !0), this.addButton(e, n ? t.addButton || "Add" : t.saveButton || "Save", n ? "add" : "save", i, c)
                },
                addToolbar: function(M, a, c) {
                    let n = this.lang,
                        i = this.container,
                        t = this.showForm,
                        o = "highcharts-annotation-toolbar";
                    i.className.indexOf(o) === -1 && (i.className += " " + o + " highcharts-no-mousewheel"), M && (i.style.top = M.plotTop + 10 + "px"), x("span", void 0, void 0, i).appendChild(L.createTextNode(f(n[a.langKey] || a.langKey, a.shapes && a.shapes[0].type, "")));
                    let e = this.addButton(i, n.removeButton || "Remove", "remove", i, c);
                    e.className += " highcharts-annotation-remove-button", e.style["background-image"] = "url(" + this.iconsURL + "destroy.svg)", e = this.addButton(i, n.editButton || "Edit", "edit", i, () => {
                        t.call(this, "annotation-edit", M, a, c)
                    }), e.className += " highcharts-annotation-edit-button", e.style["background-image"] = "url(" + this.iconsURL + "edit.svg)"
                }
            }
        }), tt(p, "Extensions/Annotations/Popup/PopupIndicators.js", [p["Core/Renderer/HTML/AST.js"], p["Core/Globals.js"], p["Extensions/Annotations/NavigationBindingsUtilities.js"], p["Core/Series/SeriesRegistry.js"], p["Core/Utilities.js"]], function(v, S, L, N, x) {
            var d, k;
            let {
                doc: r
            } = S, {
                annotationsFieldsTypes: f
            } = L, {
                seriesTypes: h
            } = N, {
                addEvent: y,
                createElement: M,
                defined: a,
                isArray: c,
                isObject: n,
                objectEach: i,
                stableSort: t
            } = x;
            (k = d || (d = {}))[k["params.algorithm"] = 0] = "params.algorithm", k[k["params.average"] = 1] = "params.average";
            let o = {
                "algorithm-pivotpoints": ["standard", "fibonacci", "camarilla"],
                "average-disparityindex": ["sma", "ema", "dema", "tema", "wma"]
            };

            function e(l) {
                let P = M("div", {
                        className: "highcharts-popup-lhs-col"
                    }, void 0, l),
                    b = M("div", {
                        className: "highcharts-popup-rhs-col"
                    }, void 0, l);
                return M("div", {
                    className: "highcharts-popup-rhs-col-wrapper"
                }, void 0, b), {
                    lhsCol: P,
                    rhsCol: b
                }
            }

            function s(l, P, b, u) {
                let g = P.params || P.options.params;
                u.innerHTML = v.emptyHTML, M("h3", {
                    className: "highcharts-indicator-title"
                }, void 0, u).appendChild(r.createTextNode(B(P, b).indicatorFullName)), M("input", {
                    type: "hidden",
                    name: "highcharts-type-" + b,
                    value: b
                }, void 0, u), Y.call(this, b, "series", l, u, P, P.linkedParent && P.linkedParent.options.id), g.volumeSeriesID && Y.call(this, b, "volume", l, u, P, P.linkedParent && g.volumeSeriesID), m.call(this, l, "params", g, b, u)
            }

            function C(l, P, b, u) {
                let g = this,
                    T = g.lang,
                    D = P.querySelectorAll(".highcharts-popup-lhs-col")[0],
                    E = P.querySelectorAll(".highcharts-popup-rhs-col")[0],
                    A = b === "edit",
                    X = A ? l.series : l.options.plotOptions || {};
                if (!l && X) return;
                let U, I = [];
                A || c(X) ? c(X) && (I = w.call(this, X)) : I = F.call(this, X, u), t(I, (K, Z) => {
                    let R = K.indicatorFullName.toLowerCase(),
                        G = Z.indicatorFullName.toLowerCase();
                    return R < G ? -1 : R > G ? 1 : 0
                }), D.children[1] && D.children[1].remove();
                let q = M("ul", {
                        className: "highcharts-indicator-list"
                    }, void 0, D),
                    W = E.querySelectorAll(".highcharts-popup-rhs-col-wrapper")[0];
                I.forEach(K => {
                    let {
                        indicatorFullName: Z,
                        indicatorType: R,
                        series: G
                    } = K;
                    (U = M("li", {
                        className: "highcharts-indicator-list"
                    }, void 0, q)).appendChild(r.createTextNode(Z)), ["click", "touchstart"].forEach(H => {
                        y(U, H, function() {
                            let Q = W.parentNode.children[1];
                            s.call(g, l, G, R, W), Q && (Q.style.display = "block"), A && G.options && M("input", {
                                type: "hidden",
                                name: "highcharts-id-" + R,
                                value: G.options.id
                            }, void 0, W).setAttribute("highcharts-data-series-id", G.options.id)
                        })
                    })
                }), q.childNodes.length > 0 ? q.childNodes[0].click() : A || (v.setElementHTML(W.parentNode.children[0], T.noFilterMatch || ""), W.parentNode.children[1].style.display = "none")
            }

            function m(l, P, b, u, g) {
                if (!l) return;
                let T = this.addInput;
                i(b, (D, E) => {
                    f[E];
                    let A = P + "." + E;
                    if (a(D) && A)
                        if (n(D) && (T.call(this, A, u, g, {}), m.call(this, l, A, D, u, g)), A in d) {
                            let X = j.call(this, u, A, g);
                            z.call(this, l, P, X, u, E, D)
                        } else A === "params.volumeSeriesID" || c(D) || T.call(this, A, u, g, {
                            value: D,
                            type: "number"
                        })
                })
            }

            function O(l, P) {
                let b = this,
                    u = P.querySelectorAll(".highcharts-popup-lhs-col")[0],
                    g = this.lang.clearFilter,
                    T = M("div", {
                        className: "highcharts-input-wrapper"
                    }, void 0, u),
                    D = function(X) {
                        C.call(b, l, b.container, "add", X)
                    },
                    E = this.addInput("searchIndicators", "input", T, {
                        value: "",
                        type: "text",
                        htmlFor: "search-indicators",
                        labelClassName: "highcharts-input-search-indicators-label"
                    }),
                    A = M("a", {
                        textContent: g
                    }, void 0, T);
                E.classList.add("highcharts-input-search-indicators"), A.classList.add("clear-filter-button"), y(E, "input", function(X) {
                    D(this.value), this.value.length ? A.style.display = "inline-block" : A.style.display = "none"
                }), ["click", "touchstart"].forEach(X => {
                    y(A, X, function() {
                        E.value = "", D(""), A.style.display = "none"
                    })
                })
            }

            function j(l, P, b) {
                let u = P.split("."),
                    g = u[u.length - 1],
                    T = "highcharts-" + P + "-type-" + l,
                    D = this.lang;
                M("label", {
                    htmlFor: T
                }, null, b).appendChild(r.createTextNode(D[g] || P));
                let E = M("select", {
                    name: T,
                    className: "highcharts-popup-field",
                    id: "highcharts-select-" + P
                }, null, b);
                return E.setAttribute("id", "highcharts-select-" + P), E
            }

            function z(l, P, b, u, g, T, D) {
                P === "series" || P === "volume" ? l.series.forEach(E => {
                    let A = E.options,
                        X = A.name || A.params ? E.name : A.id || "";
                    A.id !== "highcharts-navigator-series" && A.id !== (D && D.options && D.options.id) && (a(T) || P !== "volume" || E.type !== "column" || (T = A.id), M("option", {
                        value: A.id
                    }, void 0, b).appendChild(r.createTextNode(X)))
                }) : u && g && o[g + "-" + u].forEach(A => {
                    M("option", {
                        value: A
                    }, void 0, b).appendChild(r.createTextNode(A))
                }), a(T) && (b.value = T)
            }

            function F(l, P) {
                let b;
                this.indicators;
                let u = this.chart && this.chart.options.lang,
                    g = u && u.navigation && u.navigation.popup && u.navigation.popup.indicatorAliases,
                    T = [];
                return i(l, (D, E) => {
                    let A = D && D.options;
                    if (D.params || A && A.params) {
                        let {
                            indicatorFullName: X,
                            indicatorType: U
                        } = B(D, E);
                        if (P) {
                            let I = P.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                                q = RegExp(I, "i"),
                                W = g && g[U] && g[U].join(" ") || "";
                            (X.match(q) || W.match(q)) && (b = {
                                indicatorFullName: X,
                                indicatorType: U,
                                series: D
                            }, T.push(b))
                        } else b = {
                            indicatorFullName: X,
                            indicatorType: U,
                            series: D
                        }, T.push(b)
                    }
                }), T
            }

            function w(l) {
                let P = [];
                return l.forEach(b => {
                    b.is("sma") && P.push({
                        indicatorFullName: b.name,
                        indicatorType: b.type,
                        series: b
                    })
                }), P
            }

            function B(l, P) {
                let b = l.options,
                    u = h[P] && h[P].prototype.nameBase || P.toUpperCase(),
                    g = P;
                return b && b.type && (g = l.options.type, u = l.name), {
                    indicatorFullName: u,
                    indicatorType: g
                }
            }

            function Y(l, P, b, u, g, T) {
                if (this.indicators, !b) return;
                let D = j.call(this, l, P, u);
                z.call(this, b, P, D, void 0, void 0, void 0, g), a(T) && (D.value = T)
            }
            return {
                addForm: function(l, P, b) {
                    let u, g = this.lang;
                    if (!l) return;
                    this.tabs.init.call(this, l);
                    let T = this.container.querySelectorAll(".highcharts-tab-item-content");
                    e(T[0]), O.call(this, l, T[0]), C.call(this, l, T[0], "add"), u = T[0].querySelectorAll(".highcharts-popup-rhs-col")[0], this.addButton(u, g.addButton || "add", "add", u, b), e(T[1]), C.call(this, l, T[1], "edit"), u = T[1].querySelectorAll(".highcharts-popup-rhs-col")[0], this.addButton(u, g.saveButton || "save", "edit", u, b), this.addButton(u, g.removeButton || "remove", "remove", u, b)
                },
                getAmount: function() {
                    let l = 0;
                    return this.series.forEach(P => {
                        (P.params || P.options.params) && l++
                    }), l
                }
            }
        }), tt(p, "Extensions/Annotations/Popup/PopupTabs.js", [p["Core/Globals.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                doc: L
            } = v, {
                addEvent: N,
                createElement: x
            } = S;

            function d() {
                let y = this.container;
                return x("div", {
                    className: "highcharts-tab-item-content highcharts-no-mousewheel"
                }, void 0, y)
            }

            function k(y, M) {
                let a = this.container,
                    c = this.lang,
                    n = "highcharts-tab-item";
                M === 0 && (n += " highcharts-tab-disabled");
                let i = x("span", {
                    className: n
                }, void 0, a);
                return i.appendChild(L.createTextNode(c[y + "Button"] || y)), i.setAttribute("highcharts-data-tab-type", y), i
            }

            function r() {
                let y = this.container,
                    M = y.querySelectorAll(".highcharts-tab-item"),
                    a = y.querySelectorAll(".highcharts-tab-item-content");
                for (let c = 0; c < M.length; c++) M[c].classList.remove("highcharts-tab-item-active"), a[c].classList.remove("highcharts-tab-item-show")
            }

            function f(y, M) {
                let a = this.container.querySelectorAll(".highcharts-tab-item-content");
                y.className += " highcharts-tab-item-active", a[M].className += " highcharts-tab-item-show"
            }

            function h(y) {
                let M = this;
                this.container.querySelectorAll(".highcharts-tab-item").forEach((n, i) => {
                    (y !== 0 || n.getAttribute("highcharts-data-tab-type") !== "edit") && ["click", "touchstart"].forEach(t => {
                        N(n, t, function() {
                            r.call(M), f.call(M, this, i)
                        })
                    })
                })
            }
            return {
                init: function(y) {
                    if (!y) return;
                    let M = this.indicators.getAmount.call(y),
                        a = k.call(this, "add");
                    k.call(this, "edit", M), d.call(this), d.call(this), h.call(this, M), f.call(this, a, 0)
                }
            }
        }), tt(p, "Extensions/Annotations/Popup/Popup.js", [p["Shared/BaseForm.js"], p["Core/Globals.js"], p["Core/Defaults.js"], p["Extensions/Annotations/Popup/PopupAnnotations.js"], p["Extensions/Annotations/Popup/PopupIndicators.js"], p["Extensions/Annotations/Popup/PopupTabs.js"], p["Core/Utilities.js"]], function(v, S, L, N, x, d, k) {
            let {
                doc: r
            } = S, {
                getOptions: f
            } = L, {
                addEvent: h,
                createElement: y,
                extend: M,
                fireEvent: a,
                pick: c
            } = k;
            class n extends v {
                constructor(t, o, e) {
                    super(t, o), this.chart = e, this.lang = (f().lang.navigation || {}).popup || {}, h(this.container, "mousedown", () => {
                        let s = e && e.navigationBindings && e.navigationBindings.activeAnnotation;
                        if (s) {
                            s.cancelClick = !0;
                            let C = h(r, "click", () => {
                                setTimeout(() => {
                                    s.cancelClick = !1
                                }, 0), C()
                            })
                        }
                    })
                }
                addInput(t, o, e, s) {
                    let C = t.split("."),
                        m = C[C.length - 1],
                        O = this.lang,
                        j = "highcharts-" + o + "-" + c(s.htmlFor, m);
                    m.match(/^\d+$/) || y("label", {
                        htmlFor: j,
                        className: s.labelClassName
                    }, void 0, e).appendChild(r.createTextNode(O[m] || m));
                    let z = y("input", {
                        name: j,
                        value: s.value,
                        type: s.type,
                        className: "highcharts-popup-field"
                    }, void 0, e);
                    return z.setAttribute("highcharts-data-name", t), z
                }
                closeButtonEvents() {
                    if (this.chart) {
                        let t = this.chart.navigationBindings;
                        a(t, "closePopup"), t && t.selectedButtonElement && a(t, "deselectButton", {
                            button: t.selectedButtonElement
                        })
                    } else super.closeButtonEvents()
                }
                addButton(t, o, e, s, C) {
                    let m = y("button", void 0, void 0, t);
                    return m.appendChild(r.createTextNode(o)), C && ["click", "touchstart"].forEach(O => {
                        h(m, O, () => (this.closePopup(), C(function(j, z) {
                            let F = Array.prototype.slice.call(j.querySelectorAll("input")),
                                w = Array.prototype.slice.call(j.querySelectorAll("select")),
                                B = j.querySelectorAll("#highcharts-select-series > option:checked")[0],
                                Y = j.querySelectorAll("#highcharts-select-volume > option:checked")[0],
                                l = {
                                    actionType: z,
                                    linkedTo: B && B.getAttribute("value") || "",
                                    fields: {}
                                };
                            return F.forEach(P => {
                                let b = P.getAttribute("highcharts-data-name");
                                P.getAttribute("highcharts-data-series-id") ? l.seriesId = P.value : b ? l.fields[b] = P.value : l.type = P.value
                            }), w.forEach(P => {
                                let b = P.id;
                                if (b !== "highcharts-select-series" && b !== "highcharts-select-volume") {
                                    let u = b.split("highcharts-select-")[1];
                                    l.fields[u] = P.value
                                }
                            }), Y && (l.fields["params.volumeSeriesID"] = Y.getAttribute("value") || ""), l
                        }(s, e))))
                    }), m
                }
                showForm(t, o, e, s) {
                    o && (this.showPopup(), t === "indicators" && this.indicators.addForm.call(this, o, e, s), t === "annotation-toolbar" && this.annotations.addToolbar.call(this, o, e, s), t === "annotation-edit" && this.annotations.addForm.call(this, o, e, s), t === "flag" && this.annotations.addForm.call(this, o, e, s, !0), this.type = t, this.container.style.height = this.container.offsetHeight + "px")
                }
            }
            return M(n.prototype, {
                annotations: N,
                indicators: x,
                tabs: d
            }), n
        }), tt(p, "Extensions/Annotations/Popup/PopupComposition.js", [p["Extensions/Annotations/Popup/Popup.js"], p["Core/Utilities.js"]], function(v, S) {
            let {
                addEvent: L,
                wrap: N
            } = S, x = [];

            function d() {
                this.popup && this.popup.closePopup()
            }

            function k(f) {
                this.popup || (this.popup = new v(this.chart.container, this.chart.options.navigation.iconsURL || this.chart.options.stockTools && this.chart.options.stockTools.gui.iconsURL || "https://code.highcharts.com/11.2.0/gfx/stock-icons/", this.chart)), this.popup.showForm(f.formType, this.chart, f.options, f.onSubmit)
            }

            function r(f, h) {
                this.inClass(h.target, "highcharts-popup") || f.apply(this, Array.prototype.slice.call(arguments, 1))
            }
            return {
                compose: function(f, h) {
                    S.pushUnique(x, f) && (L(f, "closePopup", d), L(f, "showPopup", k)), S.pushUnique(x, h) && N(h.prototype, "onContainerMouseDown", r)
                }
            }
        }), tt(p, "Extensions/Annotations/Annotation.js", [p["Core/Animation/AnimationUtilities.js"], p["Extensions/Annotations/AnnotationChart.js"], p["Extensions/Annotations/AnnotationDefaults.js"], p["Extensions/Annotations/Controllables/ControllableRect.js"], p["Extensions/Annotations/Controllables/ControllableCircle.js"], p["Extensions/Annotations/Controllables/ControllableEllipse.js"], p["Extensions/Annotations/Controllables/ControllablePath.js"], p["Extensions/Annotations/Controllables/ControllableImage.js"], p["Extensions/Annotations/Controllables/ControllableLabel.js"], p["Extensions/Annotations/ControlPoint.js"], p["Extensions/Annotations/ControlTarget.js"], p["Extensions/Annotations/EventEmitter.js"], p["Extensions/Annotations/MockPoint.js"], p["Extensions/Annotations/NavigationBindings.js"], p["Extensions/Annotations/Popup/PopupComposition.js"], p["Core/Utilities.js"]], function(v, S, L, N, x, d, k, r, f, h, y, M, a, c, n, i) {
            let {
                getDeferredAnimation: t
            } = v, {
                destroyObjectProperties: o,
                erase: e,
                fireEvent: s,
                merge: C,
                pick: m,
                splat: O
            } = i;

            function j(F, w) {
                let B = {};
                return ["labels", "shapes"].forEach(Y => {
                    let l = F[Y];
                    l && (w[Y] ? B[Y] = O(w[Y]).map(function(P, b) {
                        return C(l[b], P)
                    }) : B[Y] = F[Y])
                }), B
            }
            class z extends M {
                static compose(w, B, Y) {
                    S.compose(z, w, B), f.compose(Y), k.compose(w, Y), c.compose(z, w), n.compose(c, B)
                }
                constructor(w, B) {
                    super(), this.coll = "annotations", this.animationConfig = void 0, this.graphic = void 0, this.group = void 0, this.labelCollector = void 0, this.labelsGroup = void 0, this.shapesGroup = void 0, this.chart = w, this.points = [], this.controlPoints = [], this.coll = "annotations", this.index = -1, this.labels = [], this.shapes = [], this.options = C(this.defaultOptions, B), this.userOptions = B;
                    let Y = j(this.options, B);
                    this.options.labels = Y.labels, this.options.shapes = Y.shapes, this.init(w, this.options)
                }
                addClipPaths() {
                    this.setClipAxes(), this.clipXAxis && this.clipYAxis && this.options.crop && (this.clipRect = this.chart.renderer.clipRect(this.getClipBox()))
                }
                addLabels() {
                    let w = this.options.labels || [];
                    w.forEach((B, Y) => {
                        let l = this.initLabel(B, Y);
                        C(!0, w[Y], l.options)
                    })
                }
                addShapes() {
                    let w = this.options.shapes || [];
                    w.forEach((B, Y) => {
                        let l = this.initShape(B, Y);
                        C(!0, w[Y], l.options)
                    })
                }
                destroy() {
                    let w = this.chart,
                        B = function(Y) {
                            Y.destroy()
                        };
                    this.labels.forEach(B), this.shapes.forEach(B), this.clipXAxis = null, this.clipYAxis = null, e(w.labelCollectors, this.labelCollector), super.destroy(), this.destroyControlTarget(), o(this, w)
                }
                destroyItem(w) {
                    e(this[w.itemType + "s"], w), w.destroy()
                }
                getClipBox() {
                    if (this.clipXAxis && this.clipYAxis) return {
                        x: this.clipXAxis.left,
                        y: this.clipYAxis.top,
                        width: this.clipXAxis.width,
                        height: this.clipYAxis.height
                    }
                }
                initProperties(w, B) {
                    this.setOptions(B);
                    let Y = j(this.options, B);
                    this.options.labels = Y.labels, this.options.shapes = Y.shapes, this.chart = w, this.points = [], this.controlPoints = [], this.coll = "annotations", this.userOptions = B, this.labels = [], this.shapes = []
                }
                init(w, B, Y = this.index) {
                    let l = this.chart,
                        P = this.options.animation;
                    this.index = Y, this.linkPoints(), this.addControlPoints(), this.addShapes(), this.addLabels(), this.setLabelCollector(), this.animationConfig = t(l, P)
                }
                initLabel(w, B) {
                    let Y = C(this.options.labelOptions, {
                            controlPointOptions: this.options.controlPointOptions
                        }, w),
                        l = new f(this, Y, B);
                    return l.itemType = "label", this.labels.push(l), l
                }
                initShape(w, B) {
                    let Y = C(this.options.shapeOptions, {
                            controlPointOptions: this.options.controlPointOptions
                        }, w),
                        l = new z.shapesMap[Y.type](this, Y, B);
                    return l.itemType = "shape", this.shapes.push(l), l
                }
                redraw(w) {
                    this.linkPoints(), this.graphic || this.render(), this.clipRect && this.clipRect.animate(this.getClipBox()), this.redrawItems(this.shapes, w), this.redrawItems(this.labels, w), this.redrawControlPoints(w)
                }
                redrawItem(w, B) {
                    w.linkPoints(), w.shouldBeDrawn() ? (w.graphic || this.renderItem(w), w.redraw(m(B, !0) && w.graphic.placed), w.points.length && function(Y) {
                        let l = Y.graphic,
                            P = Y.points.some(b => b.series.visible !== !1 && b.visible !== !1);
                        l && (P ? l.visibility === "hidden" && l.show() : l.hide())
                    }(w)) : this.destroyItem(w)
                }
                redrawItems(w, B) {
                    let Y = w.length;
                    for (; Y--;) this.redrawItem(w[Y], B)
                }
                remove() {
                    return this.chart.removeAnnotation(this)
                }
                render() {
                    let w = this.chart.renderer;
                    this.graphic = w.g("annotation").attr({
                        opacity: 0,
                        zIndex: this.options.zIndex,
                        visibility: this.options.visible ? "inherit" : "hidden"
                    }).add(), this.shapesGroup = w.g("annotation-shapes").add(this.graphic), this.options.crop && this.shapesGroup.clip(this.chart.plotBoxClip), this.labelsGroup = w.g("annotation-labels").attr({
                        translateX: 0,
                        translateY: 0
                    }).add(this.graphic), this.addClipPaths(), this.clipRect && this.graphic.clip(this.clipRect), this.renderItems(this.shapes), this.renderItems(this.labels), this.addEvents(), this.renderControlPoints()
                }
                renderItem(w) {
                    w.render(w.itemType === "label" ? this.labelsGroup : this.shapesGroup)
                }
                renderItems(w) {
                    let B = w.length;
                    for (; B--;) this.renderItem(w[B])
                }
                setClipAxes() {
                    let w = this.chart.xAxis,
                        B = this.chart.yAxis,
                        Y = (this.options.labels || []).concat(this.options.shapes || []).reduce((l, P) => {
                            let b = P && (P.point || P.points && P.points[0]);
                            return [w[b && b.xAxis] || l[0], B[b && b.yAxis] || l[1]]
                        }, []);
                    this.clipXAxis = Y[0], this.clipYAxis = Y[1]
                }
                setControlPointsVisibility(w) {
                    let B = function(Y) {
                        Y.setControlPointsVisibility(w)
                    };
                    this.controlPoints.forEach(Y => {
                        Y.setVisibility(w)
                    }), this.shapes.forEach(B), this.labels.forEach(B)
                }
                setLabelCollector() {
                    let w = this;
                    w.labelCollector = function() {
                        return w.labels.reduce(function(B, Y) {
                            return Y.options.allowOverlap || B.push(Y.graphic), B
                        }, [])
                    }, w.chart.labelCollectors.push(w.labelCollector)
                }
                setOptions(w) {
                    this.options = C(this.defaultOptions, w)
                }
                setVisibility(w) {
                    let B = this.options,
                        Y = this.chart.navigationBindings,
                        l = m(w, !B.visible);
                    if (this.graphic.attr("visibility", l ? "inherit" : "hidden"), !l) {
                        let P = function(b) {
                            b.setControlPointsVisibility(l)
                        };
                        this.shapes.forEach(P), this.labels.forEach(P), Y.activeAnnotation === this && Y.popup && Y.popup.type === "annotation-toolbar" && s(Y, "closePopup")
                    }
                    B.visible = l
                }
                update(w, B) {
                    let Y = this.chart,
                        l = j(this.userOptions, w),
                        P = Y.annotations.indexOf(this),
                        b = C(!0, this.userOptions, w);
                    b.labels = l.labels, b.shapes = l.shapes, this.destroy(), this.initProperties(Y, b), this.init(Y, b), Y.options.annotations[P] = b, this.isUpdating = !0, m(B, !0) && Y.redraw(), s(this, "afterUpdate"), this.isUpdating = !1
                }
            }
            return z.ControlPoint = h, z.MockPoint = a, z.shapesMap = {
                rect: N,
                circle: x,
                ellipse: d,
                path: k,
                image: r
            }, z.types = {}, z.prototype.defaultOptions = L, z.prototype.nonDOMEvents = ["add", "afterUpdate", "drag", "remove"], y.compose(z), z
        }), tt(p, "masters/modules/annotations.src.js", [p["Core/Globals.js"], p["Extensions/Annotations/Annotation.js"]], function(v, S) {
            v.Annotation = S, S.compose(v.Chart, v.Pointer, v.SVGRenderer)
        })
    })
})(kt);
var Lt = kt.exports;
const Xt = Ct(Lt);
export {
    Tt as H, jt as a, Xt as h
};