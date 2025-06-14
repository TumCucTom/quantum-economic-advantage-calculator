import {
  h as L,
  H as x,
  a as M
} from "./annotations-RVYHp2M2.js";
import {
  h as z
} from "./highcharts-vue.min-slr4qoxA.js";
import {
  r as o,
  p as k,
  g as A,
  t as f,
  y as T,
  a as P
} from "./Models-F5kqfqlD.js";
import {
  r as X,
  e as H,
  f as y,
  g as O,
  v as R,
  u as F
} from "./index-niMaZqBZ.js";
const j = {
  __name: "QuantumCharacteristicsGraph",
  props: {
    data: Object
  },
  setup(S) {
    L(x), M(x);
    const c = new Date().getFullYear(),
      n = S;

    function u(a) {
      let r = o(a.nStar, 2),
        s = o(a.nCostStar, 2),
        d = o(a.tStar, 2),
        h = o(a.tCostStar, 2);
      const b = Math.max(h, d) + 1;
      let i = a.quantumFeasible.filter(e => e[0] <= b);
      const p = i.map(e => [e[0], k(e[1], a.qubitToProblemSize)]),
        g = i.map(e => [e[0], A(e[0], a.roadmap, a.extrapolationType)]),
        C = Math.max(...i.map(e => e[1]), Math.max(...p.map(e => e[1])), Math.max(...g.map(e => e[1]))),
        Q = Object.entries(a.roadmap).map(e => [Number(e[0]), Math.log10(e[1])]),
        w = Object.keys(a.roadmap).at(-1);
      return {
        problemSize: i,
        logicalQubits: p,
        tStar: d,
        nStar: r,
        tCostStar: h,
        nCostStar: s,
        maxY: C,
        maxX: b,
        lastRoadmapPoint: w,
        physicalQubits: g,
        roadmap: Q
      }
    }
    let t = u(n.data);
    const m = X(0),
      l = {
        chart: {
          zooming: {
            type: "xy"
          },
          marginRight: 180
        },
        credits: {
          enabled: !1
        },
        title: {
          text: "Quantum Timelines",
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
                <p class="text-gray-700 mb-1 font-bold"><span >${o(this.points[0].x,t.maxX-c<=5?1:0)}</span></p>
                ${this.points.map(r=>`<div class="flex items-center gap-1">
                        <span class="w-4 h-[2px]" style="background-color: ${r.series.color};"></span>
                        <span class="flex-1 gap-1 flex justify-between" >${r.series.name==="Classical"?"Classical Steps/Cost":r.series.name}: <span class="min-w-[5ch] text-gray-700 font-bold">${f(r.y)}</span></span>
                        </div>`).join("")}
            </div>
            `
          }
        },
        xAxis: {
          title: {
            text: "Year"
          },
          type: "linear",
          labels: {
            useHTML: !0,
            formatter: function() {
              return this.value.toFixed(2)
            }
          },
          min: c,
          max: t.maxX,
          plotLines: [{
            value: t.tStar,
            color: "rgba(0,45,157,1)",
            width: 2,
            label: {
              text: "Quantum faster",
              style: {
                color: "rgba(0,45,157,1)"
              }
            }
          }, {
            value: t.tCostStar,
            color: "rgba(48,158,244,1)",
            width: 2,
            align: "left",
            label: {
              text: "Quantum cheaper",
              align: "left",
              style: {
                color: "rgba(48,158,244,1)"
              }
            }
          }, {
            value: t.lastRoadmapPoint,
            color: "lightgray",
            width: 2,
            label: {
              text: "Last Roadmap Data",
              style: {
                color: "lightgray"
              }
            }
          }]
        },
        yAxis: {
          title: {
            text: ""
          },
          type: "linear",
          labels: {
            useHTML: !0,
            formatter: function() {
              return f(this.value)
            }
          },
          min: 0,
          gridLineWidth: 1,
          gridLineColor: "rgba(250,250,250,1)",
          gridZIndex: -1,
          endOnTick: !1,
          maxPadding: .2
        },
        plotOptions: {
          areaspline: {
            fillOpacity: .5,
            threshold: 20
          },
          series: {
            labels: {
              connectorAllowed: !1
            },
            lineWidth: 2,
            animation: !1
          },
          scatter: {
            dataLabels: {
              color: "black",
              verticalAlign: "bottom",
              enabled: !0
            },
            enableMouseTracking: !1,
            marker: {
              enabled: !0
            }
          }
        },
        series: []
      };
    H(() => n.data, async () => {
      t = u(n.data), v(), m.value += 1
    }, {
      immediate: !0,
      deep: !0
    });

    function v() {
      t.tStar <= 0 && (l.yAxis.max = 100), l.xAxis.max = t.maxX;
      const a = new Date().getFullYear(),
        r = t.maxX,
        s = parseInt((t.maxX - a) / 2) + a;
      l.xAxis.tickPositions = [a, (a + s) / 2, s, (s + r) / 2, r], l.xAxis.labels = {
        useHTML: !0,
        formatter: function() {
          return r - a > 3 ? this.value.toFixed(0) : r - a > 1 ? T(this.value) : P(this.value)
        }
      }, l.xAxis.plotLines = [{
        value: t.tStar,
        color: "rgba(0,45,157,1)",
        width: 2,
        label: {
          align: t.tStar < t.tCostStar && Math.abs(t.tCostStar - t.tStar) / t.maxX < 6e-4 ? "right" : "left",
          x: t.tStar < t.tCostStar && Math.abs(t.tCostStar - t.tStar) / t.maxX < 6e-4 ? -5 : 5,
          rotation: 0,
          text: t.tStar < t.tCostStar ? "<br>Quantum<br>Faster" : "<br>Quantum<br>Faster and Cheaper",
          style: {
            color: "rgba(0,45,157,1)",
            textAlign: t.tStar < t.tCostStar && Math.abs(t.tCostStar - t.tStar) / t.maxX < 6e-4 ? "right" : "left"
          }
        }
      }, {
        value: t.tCostStar,
        color: "rgba(48,158,244,1)",
        width: 2,
        label: {
          align: t.tStar >= t.tCostStar && Math.abs(t.tCostStar - t.tStar) / t.maxX < 6e-4 ? "right" : "left",
          x: t.tStar >= t.tCostStar && Math.abs(t.tCostStar - t.tStar) / t.maxX < 6e-4 ? -5 : 5,
          rotation: 0,
          text: t.tStar >= t.tCostStar ? "<br>Quantum<br>Cheaper" : "<br>Quantum<br>Faster and Cheaper",
          style: {
            textAlign: t.tStar >= t.tCostStar && Math.abs(t.tCostStar - t.tStar) / t.maxX < 6e-4 ? "right" : "left",
            color: "rgba(48,158,244,1)"
          }
        }
      }, {
        value: t.lastRoadmapPoint,
        color: "lightgray",
        width: 2,
        label: {
          rotation: 0,
          text: "Last Roadmap<br> Data",
          style: {
            color: "lightgray"
          }
        }
      }], l.series = [{
        name: "Logical Qubits",
        data: [...t.logicalQubits, {
          dataLabels: {
            enabled: !0,
            align: "left",
            x: 3,
            verticalAlign: "middle",
            overflow: !1,
            crop: !1,
            color: "indigo",
            shadow: !1,
            style: {
              fontSize: "12px",
              fontWeight: "bold",
              textOutline: "none"
            },
            useHTML: !0,
            formatter: function() {
              return '<div style="text-align: cnter;">Logical Qubits</div>'
            }
          },
          x: t.logicalQubits[t.logicalQubits.length - 1][0],
          y: t.logicalQubits[t.logicalQubits.length - 1][1]
        }],
        color: "indigo",
        dashStyle: "solid",
        zoneAxis: "x",
        zones: [{
          value: t.lastRoadmapPoint
        }, {
          dashStyle: "dash"
        }],
        marker: {
          enabled: !1,
          symbol: "circle"
        }
      }, {
        name: "Physical Qubits",
        data: [...t.physicalQubits, {
          dataLabels: {
            enabled: !0,
            align: "left",
            x: 3,
            verticalAlign: "middle",
            overflow: !1,
            crop: !1,
            color: "teal",
            shadow: !1,
            style: {
              fontSize: "12px",
              fontWeight: "bold",
              textOutline: "none"
            },
            useHTML: !0,
            formatter: function() {
              return '<div style="text-align: cnter;">Physical Qubits</div>'
            }
          },
          x: t.physicalQubits[t.physicalQubits.length - 1][0],
          y: t.physicalQubits[t.physicalQubits.length - 1][1]
        }],
        color: "teal",
        dashStyle: "solid",
        zoneAxis: "x",
        zones: [{
          value: t.lastRoadmapPoint
        }, {
          dashStyle: "dash"
        }],
        marker: {
          enabled: !1,
          symbol: "circle"
        }
      }, {
        name: "Problem Size",
        data: [...t.problemSize, {
          dataLabels: {
            enabled: !0,
            align: "left",
            x: 3,
            verticalAlign: "middle",
            overflow: !1,
            crop: !1,
            color: "darkred",
            shadow: !1,
            style: {
              fontSize: "12px",
              fontWeight: "bold",
              textOutline: "none"
            },
            useHTML: !0,
            formatter: function() {
              return '<div style="text-align: cnter;">Problem Size</div>'
            }
          },
          x: t.problemSize[t.problemSize.length - 1][0],
          y: t.problemSize[t.problemSize.length - 1][1]
        }],
        color: "darkred",
        dashStyle: "solid",
        zoneAxis: "x",
        zones: [{
          value: t.lastRoadmapPoint
        }, {
          dashStyle: "dash"
        }],
        marker: {
          enabled: !1,
          symbol: "circle"
        }
      }, {
        name: "Roadmap",
        data: t.roadmap,
        color: "teal",
        type: "scatter",
        maxPointWidth: 2,
        dataLabels: {
          enabled: !0,
          align: "right",
          useHTML: !0,
          formatter: function() {
            return `
                    <p class="text-gray-700 mb-1 font-bold" style="color: ${this.series.color};">${parseInt(10**this.y)}</p>
                    `
          }
        },
        marker: {
          enabled: !0,
          symbol: "circle"
        },
        showInLegend: !1
      }], l.annotations = []
    }
    return (a, r) => (y(), O("div", null, [(y(), R(F(z.Chart), {
      key: m.value,
      options: l
    }))]))
  }
};
export {
  j as
  default
};