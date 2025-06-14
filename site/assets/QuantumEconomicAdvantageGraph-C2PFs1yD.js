import {
  h as G,
  H as M,
  a as I
} from "./annotations-RVYHp2M2.js";
import {
  h as B
} from "./highcharts-vue.min-slr4qoxA.js";
import {
  r as u,
  t as L,
  y as P,
  a as D
} from "./Models-F5kqfqlD.js";
import {
  r as N,
  e as R,
  f as T,
  g as V,
  v as J,
  u as K
} from "./index-niMaZqBZ.js";
const na = {
  __name: "QuantumEconomicAdvantageGraph",
  props: {
    data: Object
  },
  setup(w) {
    G(M), I(M);
    const x = new Date().getFullYear(),
      g = w;

    function p(e) {
      let n = u(e.nStar, 2),
        l = u(e.nCostStar, 2),
        m = u(e.tStar, 2),
        c = u(e.tCostStar, 2);
      const v = (l + n) / 2,
        f = (m + c) / 2,
        d = v === 0 ? Math.min(...[e.quantumAdvantage, e.quantumCostAdvantage, e.quantumFeasible].map(t => Math.max(...t.map(r => r[1])))) : v * 2,
        b = f === 0 ? Math.min(...[e.quantumAdvantage, e.quantumCostAdvantage, e.quantumFeasible].map(t => Math.max(...t.map(r => r[0])))) : f + (f - x);
      let Q = e.quantumAdvantage.filter(t => t[0] <= b && t[1] <= d),
        Y = e.quantumCostAdvantage.filter(t => t[0] <= b && t[1] <= d),
        z = e.quantumFeasible.filter(t => t[0] <= b && t[1] <= d),
        o = e.quantumAdvantage.filter(t => t[0] >= m),
        i = e.quantumCostAdvantage.filter(t => t[0] >= c);
      const y = Object.fromEntries(e.quantumFeasible.map(t => [t[0], t[1]])),
        O = Object.fromEntries(e.quantumCostAdvantage.map(t => [t[0], t[1]])),
        X = Object.fromEntries(e.quantumAdvantage.map(t => [t[0], t[1]]));
      o = o.map(t => [t[0], t[1], Math.min(n >= l ? d : O[t[0]], y[t[0]])]), i = i.map(t => [t[0], t[1], Math.min(l > n ? d : X[t[0]], y[t[0]])]);
      const H = o.reduce((t, r) => t + r[0], 0),
        E = o.reduce((t, r) => t + r[1], 0),
        S = H / o.length,
        C = E / o.length,
        W = i.reduce((t, r) => t + r[0], 0),
        $ = i.reduce((t, r) => t + r[1], 0),
        q = W / i.length,
        k = $ / i.length,
        _ = [S, C],
        j = [q, k],
        h = g.data.problemName.split("(")[0];
      return {
        graphTitle: "Quantum Economic Advantage for " + (h.length > 40 ? "<br>" + h : h),
        quantumAdvantage: Q,
        quantumCostAdvantage: Y,
        quantumFeasible: z,
        tStar: m,
        nStar: n,
        tCostStar: c,
        nCostStar: l,
        maxY: d,
        maxX: b,
        quantumAdvantageArea: o,
        quantumCostAdvantageArea: i,
        advantageAreaXMid: S,
        advantageAreaYMid: C,
        costAdvantageAreaXMid: q,
        costAdvantageAreaYMid: k,
        advantageAreaMid: _,
        costAdvantageAreaMid: j
      }
    }
    let a = p(g.data);
    const A = N(0),
      s = {
        chart: {
          marginRight: 80
        },
        credits: {
          enabled: !1
        },
        title: {
          text: a.graphTitle,
          style: {
            fontSize: "14px"
          }
        },
        legend: !1,
        tooltip: {
          useHTML: !0,
          shared: !0,
          crosshairs: !0,
          shadow: !1,
          backgroundColor: "transparent",
          formatter: function() {
            return `
            <div class="flex flex-col gap-1 bg-white p-2 rounded-lg shadow-md">
                <p class="text-gray-700 mb-1 font-bold"><span >${u(this.points[0].x,a.maxX-x<=5?1:0)}</span></p>
                ${this.points.map(n=>`<div class="flex items-center gap-1">
                        <span class="w-4 h-[2px]" style="background-color: ${n.series.color};"></span>
                        <span class="flex-1 gap-1 flex justify-between" >${n.series.name==="Classical"?"Classical Steps/Cost":n.series.name}: <span class="min-w-[5ch] text-gray-700 font-bold">${L(n.y)}</span></span>
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
          min: x,
          max: a.maxX
        },
        yAxis: {
          title: {
            text: "Problem Size"
          },
          type: "linear",
          labels: {
            useHTML: !0,
            formatter: function() {
              return L(this.value)
            }
          },
          min: 0,
          max: a.maxY,
          gridLineWidth: 1,
          gridLineColor: "rgba(250,250,250,1)",
          endOnTick: !1
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
              enabled: !1
            }
          }
        },
        series: []
      };
    R(() => g.data, async () => {
      a = p(g.data), F(), A.value += 1
    }, {
      immediate: !0,
      deep: !0
    });

    function F() {
      a.tStar <= 0 ? s.yAxis.max = 100 : s.yAxis.max = a.maxY, s.title.text = a.graphTitle, s.xAxis.max = a.maxX;
      const e = new Date().getFullYear(),
        n = a.maxX,
        l = parseInt((a.maxX - e) / 2) + e;
      s.xAxis.tickPositions = [e, (e + l) / 2, l, (l + n) / 2, n], s.xAxis.labels = {
        useHTML: !0,
        formatter: function() {
          return n - e > 3 ? this.value.toFixed(0) : n - e > 1 ? P(this.value) : D(this.value)
        }
      }, s.series = [{
        name: "Quantum Speed Advantage",
        type: "areasplinerange",
        data: a.quantumAdvantageArea,
        showInLegend: !1,
        enableMouseTracking: !1,
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: a.tStar <= a.tCostStar ? [
            [0, "rgba(219,234,254,.2)"],
            [.7, "rgba(0,45,157,.3)"],
            [1, "rgba(0,45,157,.3)"]
          ] : [
            [0, "rgba(24,102,201,.2)"],
            [.2, "rgba(24,102,201,0.5)"],
            [1, "rgba(24,102,201,.2)"]
          ]
        },
        marker: {
          enabled: !1,
          symbol: "circle"
        }
      }, {
        name: "Quantum Cost Advantage",
        type: "areasplinerange",
        data: a.quantumCostAdvantageArea,
        showInLegend: !1,
        enableMouseTracking: !1,
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: a.tStar <= a.tCostStar ? [
            [0, "rgba(24,102,201,.2)"],
            [.2, "rgba(24,102,201,0.5)"],
            [1, "rgba(24,102,201,0.2)"]
          ] : [
            [0, "rgba(219,234,254,.2)"],
            [.7, "rgba(48,158,244,.3)"],
            [1, "rgba(48,158,244,.3)"]
          ]
        },
        marker: {
          enabled: !1,
          symbol: "circle"
        }
      }, {
        name: "Quantum Feasibility",
        data: [...a.quantumFeasible, {
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
              return '<div style="text-align: cnter;">Quantum<br>Feasibility</div>'
            }
          },
          x: a.quantumFeasible[a.quantumFeasible.length - 1][0],
          y: a.quantumFeasible[a.quantumFeasible.length - 1][1]
        }],
        color: "darkred",
        dashStyle: "dash",
        zoneAxis: "x",
        zones: [{
          value: a.tStar
        }, {
          dashStyle: "solid"
        }],
        marker: {
          enabled: !1,
          symbol: "circle"
        }
      }, {
        name: "Quantum Advantage",
        data: [...a.quantumAdvantage, {
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
              return '<div style="text-align: cnter;">Speed<br/>Advantage</div>'
            }
          },
          x: a.quantumAdvantage[a.quantumAdvantage.length - 1][0],
          y: a.quantumAdvantage[a.quantumAdvantage.length - 1][1]
        }],
        color: "rgba(0,45,157,1)",
        dashStyle: "dash",
        zoneAxis: "x",
        zones: [{
          value: a.tStar
        }, {
          dashStyle: "solid"
        }],
        marker: {
          enabled: !1,
          symbol: "circle"
        }
      }, {
        name: "Quantum Cost Advantage",
        data: [...a.quantumCostAdvantage, {
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
              return '<div style="text-align: cnter;">Cost<br/>Advantage</div>'
            }
          },
          x: a.quantumCostAdvantage[a.quantumCostAdvantage.length - 1][0],
          y: a.quantumCostAdvantage[a.quantumCostAdvantage.length - 1][1]
        }],
        color: "rgba(48,158,244,1)",
        dashStyle: "dash",
        zoneAxis: "x",
        zones: [{
          value: a.tCostStar
        }, {
          dashStyle: "solid"
        }],
        marker: {
          enabled: !1,
          symbol: "circle"
        },
        dataLabels: {
          enabled: !0,
          align: "right",
          x: 5,
          formatter: function() {
            return this.point.index === this.series.data.length - 1 ? "Quantum Cost Advantage" : null
          }
        }
      }, {
        name: "Quantum Cost Advantage",
        data: [
          [a.tCostStar, a.nCostStar]
        ],
        color: "rgba(48,158,244,1)",
        type: "scatter",
        maxPointWidth: 1,
        dataLabels: {
          enabled: !0,
          align: "right",
          useHTML: !0,
          formatter: function() {
            return `
                    <p class="text-gray-700 mb-1 font-bold" style="color: ${this.series.color};">${u(this.x,a.maxX-e<=5?1:0)}</p>
                    `
          }
        },
        marker: {
          enabled: !0,
          symbol: "circle"
        },
        showInLegend: !1
      }, {
        name: "Quantum Advantage",
        data: [
          [a.tStar, a.nStar]
        ],
        color: "rgba(0,45,157,1)",
        type: "scatter",
        maxPointWidth: 1,
        dataLabels: {
          enabled: !0,
          align: "right",
          useHTML: !0,
          formatter: function() {
            return `
                    <p class="text-gray-700 mb-1 font-bold" style="color: ${this.series.color};">${u(this.x,a.maxX-e<=5?1:0)}</p>
                    `
          }
        },
        marker: {
          enabled: !0,
          symbol: "circle"
        },
        showInLegend: !1
      }], s.annotations = [{
        allowOverlap: !0,
        draggable: "",
        labelrank: a.tStar <= a.tCostStar ? 1 : 0,
        labelOptions: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: "black",
          shape: "",
          fontSize: "12px",
          fontColor: "black",
          rotation: -25
        },
        labels: [{
          point: {
            x: a.costAdvantageAreaMid[0],
            y: a.costAdvantageAreaMid[1],
            xAxis: 0,
            yAxis: 0
          },
          color: "black",
          x: a.maxX * .5,
          y: a.maxY * .1,
          useHTML: !0,
          text: a.tStar <= a.tCostStar ? '<b class="">Quantum<br>Economic Advantage:</b><br>Faster and Cheaper' : "Quantum cheaper",
          style: {
            color: "rgba(48,158,244,.9)",
            fontSize: "12px",
            fontWeight: "",
            textAlign: "center",
            pointerEvents: "none"
          }
        }]
      }, {
        allowOverlap: !0,
        draggable: "",
        labelrank: a.tStar > a.tCostStar ? 1 : 0,
        labelOptions: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: "black",
          shape: "",
          fontSize: "12px",
          fontColor: "black"
        },
        labels: [{
          point: {
            x: a.advantageAreaMid[0],
            y: a.advantageAreaMid[1],
            xAxis: 0,
            yAxis: 0
          },
          x: a.maxX * .5,
          y: a.maxY * .1,
          color: "black",
          useHTML: !0,
          text: a.tStar >= a.tCostStar ? '<b class="">Quantum<br>Economic Advantage:</b><br>Faster and Cheaper' : "Quantum faster",
          style: {
            fontSize: "12px",
            fontWeight: "",
            textAlign: "center",
            color: "rgba(0,45,157,.9)",
            pointerEvents: "none"
          }
        }]
      }].sort((m, c) => c.labelrank - m.labelrank)
    }
    return (e, n) => (T(), V("div", null, [(T(), J(K(B.Chart), {
      key: A.value,
      options: s
    }))]))
  }
};
export {
  na as
  default
};