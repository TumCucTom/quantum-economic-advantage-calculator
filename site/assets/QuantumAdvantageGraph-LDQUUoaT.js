import {
    h as M
} from "./highcharts-vue.min-slr4qoxA.js";
import {
    t as p,
    r as S
} from "./Models-F5kqfqlD.js";
import {
    r as T,
    e as q,
    f as v,
    g as z,
    v as Q,
    u as O
} from "./index-niMaZqBZ.js";
let x = {
    comma(o) {
        return x.split(o, [","], !0)
    },
    space(o) {
        let n = [" ", `
`, "	"];
        return x.split(o, n)
    },
    split(o, n, b) {
        let i = [],
            t = "",
            a = !1,
            c = 0,
            e = !1,
            l = "",
            u = !1;
        for (let r of o) u ? u = !1 : r === "\\" ? u = !0 : e ? r === l && (e = !1) : r === '"' || r === "'" ? (e = !0, l = r) : r === "(" ? c += 1 : r === ")" ? c > 0 && (c -= 1) : c === 0 && n.includes(r) && (a = !0), a ? (t !== "" && i.push(t.trim()), t = "", a = !1) : t += r;
        return (b || t !== "") && i.push(t.trim()), i
    }
};
x.default = x;
const F = {
    __name: "QuantumAdvantageGraph",
    props: {
        data: Object
    },
    setup(o) {
        const n = o,
            b = T(0);

        function i(e) {
            let l = S(e.stepCostStar, 2),
                u = S(e.nCostStar, 2),
                r = S(e.stepStar, 2),
                g = S(e.nStar, 2);
            const h = (l + r) / 2,
                C = (g + u) / 2,
                m = h === 0 ? Math.min(...[e.classicalSteps, e.classicalCostSteps, e.quantumSteps, e.quantumCostSteps].map(s => Math.max(...s.map(d => d[1])))) : h * 2,
                f = C === 0 ? Math.min(...[e.classicalSteps, e.classicalCostSteps, e.quantumSteps, e.quantumCostSteps].map(s => Math.max(...s.map(d => d[0])))) : C * 2;
            let A = e.classicalSteps.filter(s => s[0] <= f && s[1] <= m),
                k = e.classicalCostSteps.filter(s => s[0] <= f && s[1] <= m),
                w = e.quantumCostSteps.filter(s => s[0] <= f && s[1] <= m),
                L = e.quantumSteps.filter(s => s[0] <= f && s[1] <= m);
            const y = n.data.problemName.split("(")[0];
            return {
                graphTitle: y + (y.length > 40 ? "<br>" : " ") + "Problem Sizes",
                classicalSteps: A,
                classicalCostSteps: k,
                quantumCostSteps: w,
                quantumSteps: L,
                stepCostStar: l,
                nCostStar: u,
                stepStar: r,
                nStar: g,
                maxY: m,
                maxX: f
            }
        }
        let t = i(n.data);
        const a = {
            chart: {
                marginRight: 70
            },
            credits: {
                enabled: !1
            },
            title: {
                text: t.graphTitle,
                style: {
                    fontSize: "14px"
                }
            },
            tooltip: {
                useHTML: !0,
                shared: !0,
                crosshairs: !0,
                shadow: !1,
                backgroundColor: "transparent",
                formatter: function() {
                    return `
            <div class="flex flex-col gap-1 bg-white p-2 rounded-lg shadow-md">
                <p class="text-gray-700 mb-1 font-bold">Problem Size: <span >${p(this.points[0].x)}</span></p>
                ${this.points.map(l=>`<div class="flex items-center gap-1">
                        <span class="w-4 h-[2px]" style="background-color: ${l.series.color};"></span>
                        <span class="flex-1 gap-1 flex justify-between" >${l.series.name}: <span class="min-w-[5ch] text-gray-700 font-bold">${p(l.y)}</span></span>
                        </div>`).join("")}
            </div>
            `
                }
            },
            xAxis: {
                title: {
                    text: "Problem Size"
                },
                min: 0,
                max: t.maxX,
                labels: {
                    useHTML: !0,
                    formatter: function() {
                        return p(this.value)
                    }
                },
                plotBands: [{
                    from: t.nStar,
                    to: t.maxX,
                    color: "rgba(68, 170, 213, .2)"
                }, {
                    from: t.nCostStar,
                    to: t.maxX,
                    color: "rgba(255, 102, 0, .2)"
                }]
            },
            legend: !1,
            yAxis: {
                title: {
                    text: "Classical Time Steps / Cost"
                },
                type: "linear",
                labels: {
                    useHTML: !0,
                    formatter: function() {
                        return p(this.value)
                    }
                },
                gridLineWidth: 1,
                gridLineColor: "rgba(250,250,250,0.25)",
                min: 0,
                max: t.maxY,
                endOnTick: !1
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: !1
                    },
                    animation: !1,
                    lineWidth: 2
                }
            },
            series: []
        };
        q(() => n.data, async () => {
            t = i(n.data), c(), b.value += 1
        }, {
            immediate: !0,
            deep: !0
        });

        function c() {
            a.title.text = t.graphTitle, a.plotOptions.series.label.connectorAllowed = !1, a.xAxis.max = t.maxX, a.yAxis.max = t.maxY, a.xAxis.plotBands = [], a.xAxis.plotBands.push({
                from: t.nStar,
                to: t.nStar > t.nCostStar ? t.maxX : t.nCostStar,
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [
                        [0, "rgba(219,234,254,.2)"],
                        [1, "rgba(0,45,157,.3)"]
                    ]
                }
            }), a.xAxis.plotBands.push({
                from: t.nCostStar,
                to: t.nStar <= t.nCostStar ? t.maxX : t.nStar,
                color: "#0000FF55",
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [
                        [0, "rgba(219,234,254,.2)"],
                        [1, "rgba(48,158,244,.3)"]
                    ]
                }
            }), a.xAxis.plotLines = [], a.xAxis.plotLines.push({
                value: t.nStar,
                width: 1,
                color: "rgba(0,45,157,.5)"
            }), a.xAxis.plotLines.push({
                value: t.nCostStar,
                width: 1,
                color: "rgba(48,158,244,.5)"
            }), a.series = [{
                name: "Classical Steps",
                data: [...t.classicalSteps, {
                    dataLabels: {
                        enabled: !0,
                        align: "left",
                        x: 3,
                        verticalAlign: "middle",
                        overflow: !0,
                        crop: !1,
                        color: "green",
                        shadow: !1,
                        style: {
                            fontSize: "12px",
                            fontWeight: "bold",
                            textOutline: "none"
                        },
                        useHTML: !0,
                        formatter: function() {
                            return '<div style="text-align: cnter;">Classical<br/>Algorithm</div>'
                        }
                    },
                    x: t.classicalSteps[t.classicalSteps.length - 1][0],
                    y: t.classicalSteps[t.classicalSteps.length - 1][1]
                }],
                color: "green",
                marker: {
                    enabled: !1,
                    symbol: "circle"
                }
            }, {
                name: "Classical Cost",
                data: [...t.classicalCostSteps, {
                    dataLabels: {
                        enabled: !0,
                        align: "left",
                        x: 3,
                        verticalAlign: "middle",
                        overflow: !0,
                        crop: !1,
                        color: "rgba(0,255,0,1)",
                        shadow: !1,
                        style: {
                            fontSize: "12px",
                            fontWeight: "bold",
                            textOutline: "none"
                        },
                        useHTML: !0,
                        formatter: function() {
                            return '<div style="text-align: cnter;">Classical<br/>Algorithm<br/>Cost</div>'
                        }
                    },
                    x: t.classicalCostSteps[t.classicalCostSteps.length - 1][0],
                    y: t.classicalCostSteps[t.classicalCostSteps.length - 1][1]
                }],
                type: "spline",
                style: {
                    linewidth: 22,
                    color: "rgba(0,255,0,1)"
                },
                color: "rgba(0,255,0,1)",
                marker: {
                    enabled: !1,
                    symbol: "circle"
                }
            }, {
                name: "Quantum Steps",
                data: [...t.quantumSteps, {
                    dataLabels: {
                        enabled: !0,
                        align: "left",
                        x: 3,
                        verticalAlign: "middle",
                        overflow: !0,
                        crop: !1,
                        color: "rgba(0,45,157,1)",
                        shadow: !1,
                        style: {
                            fontSize: "12px",
                            fontWeight: "bold",
                            textOutline: "none"
                        },
                        useHTML: !0,
                        formatter: function() {
                            return '<div style="text-align: cnter;">Quantum<br/>Algorithm<br/>Steps</div>'
                        }
                    },
                    x: t.quantumSteps[t.quantumSteps.length - 1][0],
                    y: t.quantumSteps[t.quantumSteps.length - 1][1]
                }],
                color: "rgba(0,45,157,1)",
                marker: {
                    enabled: !1,
                    symbol: "circle"
                }
            }, {
                name: "Quantum Cost",
                data: [...t.quantumCostSteps, {
                    dataLabels: {
                        enabled: !0,
                        align: "left",
                        x: 3,
                        verticalAlign: "middle",
                        overflow: !0,
                        crop: !1,
                        color: "rgba(48,158,244,1)",
                        shadow: !1,
                        style: {
                            fontSize: "12px",
                            fontWeight: "bold",
                            textOutline: "none"
                        },
                        useHTML: !0,
                        formatter: function() {
                            return '<div style="text-align: cnter;">Quantum<br/>Algorithm<br/>Cost</div>'
                        }
                    },
                    x: t.quantumCostSteps[t.quantumCostSteps.length - 1][0],
                    y: t.quantumCostSteps[t.quantumCostSteps.length - 1][1]
                }],
                type: "spline",
                style: {
                    linewidth: 22,
                    color: "rgba(48,158,244,1)"
                },
                color: "rgba(48,158,244,1)",
                marker: {
                    enabled: !1,
                    symbol: "circle"
                }
            }, {
                name: "Quantum Cost Advantage",
                data: [
                    [t.nCostStar, t.stepCostStar]
                ],
                color: "rgba(48,158,244,1)",
                type: "scatter",
                maxPointWidth: 1,
                marker: {
                    enabled: !0,
                    symbol: "circle"
                },
                enableMouseTracking: !1,
                showInLegend: !1
            }, {
                name: "Quantum Advantage",
                data: [
                    [t.nStar, t.stepStar]
                ],
                color: "rgba(0,45,157,1)",
                type: "scatter",
                maxPointWidth: 1,
                marker: {
                    enabled: !0,
                    symbol: "circle"
                },
                enableMouseTracking: !1,
                showInLegend: !1
            }], a.annotations = [{
                draggable: "",
                labelOptions: {
                    backgroundColor: "transparent",
                    borderColor: "rgba(48,158,244,1)",
                    color: "black",
                    shape: "connector",
                    fontSize: "12px",
                    fontColor: "black",
                    zIndex: 0
                },
                labels: [{
                    point: {
                        x: t.nCostStar,
                        y: 0,
                        xAxis: 0,
                        yAxis: 0
                    },
                    align: t.nStar >= t.nCostStar && Math.abs(t.nCostStar - t.nStar) / t.maxX < .13 ? "right" : "left",
                    color: "black",
                    useHTML: !0,
                    text: "<b>" + p(t.nCostStar.toFixed(1)) + "</b>" + (t.nStar >= t.nCostStar ? "<br>Quantum<br>Cheaper" : "<br>Quantum<br>Faster and Cheaper"),
                    style: {
                        fontSize: "14px",
                        pointerEvents: "none",
                        color: "rgba(48,158,244,1)",
                        textAlign: t.nStar >= t.nCostStar && Math.abs(t.nCostStar - t.nStar) / t.maxX < .13 ? "right" : "left"
                    }
                }]
            }, {
                draggable: "",
                labelOptions: {
                    backgroundColor: "transparent",
                    borderColor: "rgba(0,45,157,1)",
                    color: "black",
                    shape: "connector",
                    fontSize: "12px",
                    fontColor: "black",
                    rotation: -25,
                    allowOverlap: !0
                },
                labels: [{
                    point: {
                        x: t.nStar,
                        y: 0,
                        xAxis: 0,
                        yAxis: 0
                    },
                    color: "black",
                    align: t.nStar < t.nCostStar && Math.abs(t.nCostStar - t.nStar) / t.maxX < .13 ? "right" : "left",
                    useHTML: !0,
                    text: "<b>" + p(t.nStar.toFixed(1)) + "</b>" + (t.nStar < t.nCostStar ? "<br>Quantum<br>Faster" : "<br>Quantum<br>Faster and Cheaper"),
                    style: {
                        fontSize: "14px",
                        pointerEvents: "none",
                        color: "rgba(0,45,157,1)",
                        textAlign: t.nStar < t.nCostStar && Math.abs(t.nCostStar - t.nStar) / t.maxX < .13 ? "right" : "left"
                    }
                }]
            }]
        }
        return (e, l) => (v(), z("div", null, [(v(), Q(O(M.Chart), {
            key: b.value,
            options: a
        }))]))
    }
};
export {
    F as
        default
};