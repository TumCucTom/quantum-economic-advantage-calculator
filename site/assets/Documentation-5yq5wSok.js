import {
  k as a
} from "./katex.min-I4gThi3H.js";
import {
  f as o,
  g as r,
  j as e,
  m as t,
  u as s,
  F as d,
  q as m,
  t as l,
  s as i
} from "./index-niMaZqBZ.js";
const u = {
    class: "max-w-prose mx-auto mb-16"
  },
  p = i('<p class="text-gray=900 text-justify my-4">The Quantum Economic Advantage Calculator is an extension of the Quantum Tortoise and Classical Hare framework, which defines Quantum Economic Advantage (QEA) as the point where quantum hardware can solve a given problem faster than comparably priced classical machines. Users can adjust key inputs—such as hardware speeds, qubit roadmaps, and algorithmic runtimes—to explore how different factors influence the timeline for QEA. The tool then generates visualizations, offering an intuitive way to understand when quantum computing may surpass classical methods for various computational tasks. </p><h2 class="text-2xl font-bold text-gray-800" id="Models"> Models </h2><p class="text-gray=900 text-justify my-4"> A model in the framework refers to a specific problem-hardware instance being examined. Each model tracks its own parameters and displays its own graphs. </p><p class="text-gray=900 text-justify my-4"> Upon opening the framework, there will be a template model already created which is ready to edit. Changing any input to the model will have its effects immediately displayed on the corresponding graphs (unless the parameter was changed in a popup menu in which case the user must hit save). </p><h3 class="text-xl font-bold text-gray-800 mt-8" id="Simple vs Advanced View"> Simple vs Advanced View </h3><p class="text-gray=900 text-justify my-4"> There are two ways of displaying a model on the user interface. The first is a simple view in which only the two major inputs of problem and hardware can be seen and selected. All the graphs are still visible and this view allows for easy comparison between them across multiple models. The second option is an advanced view in which the user is able to freely manipulate all variables associated with the computation of the graphs. It is more complex and may overwhelm the user if they are not too familiar with quantum hardware so the framework shows the simple view by default and allows users to choose their own level of involvement with the additional parameters. </p><p class="text-gray=900 text-justify my-4"> Something worth noting is that two separate models could have the same options selected for problem and hardware, yet have very different choices for the remaining parameters. This could result in two models with the same options visible for their simple views but with drastically different graphs. </p><h2 class="text-2xl font-bold text-gray-800" id="Inputs"> Inputs </h2><p class="text-gray=900 text-justify my-4"> Each input into the models can be classified as either related to the problem or the hardware. We will refer to the problem and roadmap inputs themselves as major inputs and the inputs dependent on them as minor inputs. Each selectable option for the major inputs has default values for all of its corresponding minor inputs; as a result, changing a model&#39;s major inputs will automatically override the values of all its associated minor inputs. Changing a minor input has no effect on the other parameters. </p><h3 class="text-xl font-bold text-gray-800 mt-8" id="Problem Inputs"> Problem Inputs </h3><h4 class="text-lg font-medium text-gray-800 mt-8" id="Problem"> Problem </h4><p class="text-gray=900 text-justify my-4"> The problems serve as a primary input to the framework, determining the classical and quantum runtimes under comparison. The tool provides preset options for users to explore, such as integer factorization, unstructured database search, and the traveling salesman problem, each reflecting the best-known worst-case time complexities for their respective algorithms. </p>', 12),
  f = {
    class: "text-gray=900 text-justify my-4"
  },
  y = ["innerHTML"],
  g = ["innerHTML"],
  x = ["innerHTML"],
  b = ["innerHTML"],
  w = {
    class: "text-gray=900 text-justify my-4"
  },
  _ = ["innerHTML"],
  v = ["innerHTML"],
  T = e("h4", {
    class: "text-lg font-medium text-gray-800 mt-8",
    id: "Qubit To Problem Size"
  }, " Qubit To Problem Size ", -1),
  q = {
    class: "text-gray=900 text-justify my-4"
  },
  L = ["innerHTML"],
  H = i('<h3 class="text-xl font-bold text-gray-800 mt-8" id="Hardware Inputs"> Hardware Inputs </h3><h4 class="text-lg font-medium text-gray-800 mt-8" id="Roadmap"> Roadmap </h4><p class="text-gray=900 text-justify my-4"> The primary hardware input is which quantum roadmap the tool will use to extrapolate the number of available qubits. The calculator allows users to modify the existing roadmaps directly. Qubit-year pairs can be adjusted to align with different expectations, and entirely new points can be added to the projection. If a pessimistic user is confident that quantum devices will not exceed a certain amount of physical qubits by a certain year, they have the freedom to update points in the roadmap and all calculations will automatically update to reflect the slower growth. </p><p class="text-gray=900 text-justify my-4"> By default, the tool estimates exponential growth for the roadmaps. When predicting the number of available qubits, the tool interpolates values between existing points exponentially and extrapolates beyond the final data points using the same growth rate. Users can also choose linear growth instead, in which case the tool interpolates and extrapolates linearly. </p><p class="text-gray=900 text-justify my-4"> These projections for physical qubits are ultimately used to estimate the number of logical qubits, which then feed into further calculations. Alternatively, users can bypass this step by directly inputting a roadmap for logical qubits. In this case, the tool extrapolates the number of logical qubits directly from the user-defined points, skipping the intermediary calculations involving physical-logical qubit ratios. </p><h4 class="text-lg font-medium text-gray-800 mt-8" id="Hardware Slowdown"> Hardware Slowdown </h4><p class="text-gray=900 text-justify my-4"> Hardware slowdown, as previously described, refers to the number of operations a classical computer can perform in the time it takes a comparably priced quantum computer to perform a single operation. Since this factor can vary across a wide range and span multiple orders of magnitude, users input this value logarithmically, as a power of 10. </p><p class="text-gray=900 text-justify my-4"> The hardware slowdown parameter can be directly input into the calculator. However, the framework also allows users to compute this value by specifying the individual factors that contribute to it. In the original framework, hardware slowdown was expressed as the product of three factors: <ol><li> Speed Ratio: The ratio of the speed of a classical computer to that of the quantum computer. </li><li> Gate Overhead: A factor representing the additional gates (operations) required to maintain fault tolerance. </li><li> Algorithmic Constant Ratio: The ratio of the multiplicative constant from the classical algorithm&#39;s runtime to that of the quantum algorithm&#39;s. </li></ol></p><p class="text-gray=900 text-justify my-4"> With the expressive freedom our tool grants users when inputting problem runtimes, the algorithmic constant ratio is now a redundant parameter, but has remained in the model because of its historical presence. Given these advancements, only the speed ratio and gate overhead are now essential for the calculation. </p><p class="text-gray=900 text-justify my-4"> Like the hardware slowdown, the speed ratio can either be entered directly into the calculator or calculated from individual factors. Users can provide the 2-qubit gate time of the quantum computer and the clock speed of the classical device. The speed ratio is computed by comparing the classical clock speed by the quantum 2-qubit gate time, giving a direct comparison of how many classical operations can be executed in the time it takes for a single quantum cycle. </p><h4 class="text-lg font-medium text-gray-800 mt-8" id="Quantum Improvement Rate"> Quantum Improvement Rate </h4>', 11),
  M = {
    class: "text-gray=900 text-justify my-4"
  },
  S = ["innerHTML"],
  j = {
    class: "text-gray=900 text-center my-4"
  },
  Q = ["innerHTML"],
  R = i('<p class="text-gray=900 text-justify my-4"> Users are also free to assume that quantum devices are becoming relatively slower over time, though this represents a rather pessimistic outlook. </p><h4 class="text-lg font-medium text-gray-800 mt-8" id="Physical-Logical Qubit Ratio"> Physical-Logical Qubit Ratio </h4><p class="text-gray=900 text-justify my-4"> The physical-logical qubit ratio (PLQR) represents how many physical qubits are needed to encode a single logical qubit. Its value can be directly input into the calculator. </p><h4 class="text-lg font-medium text-gray-800 mt-8" id="Physical-Logical Qubit Ratio Improvement Rate"> Physical-Logical Qubit Ratio Improvement Rate</h4><p class="text-gray=900 text-justify my-4"> Just as the hardware slowdown evolves based on the quantum improvement rate, the PLQR is influenced by the physical-logical qubit ratio improvement rate (RIR). This adjustment is input and calculated in the same manner as the quantum improvement rate. The decay of PLQR is limited to a minimum value of 3, reflecting the constraints imposed by the most basic error correction schemes. </p><h4 class="text-lg font-medium text-gray-800 mt-8" id="Connectivity Penalty"> Connectivity Penalty</h4><p class="text-gray=900 text-justify my-4"> Connectivity refers to the arrangement of interactions between qubits within a quantum system, often represented as a qubit interaction graph, where vertices correspond to qubits and edges denote allowable direct interactions. In practice, not all qubits in a quantum device can interact directly, and this limited connectivity imposes constraints on quantum algorithm design. </p>', 7),
  P = {
    class: "text-gray=900 text-justify my-4"
  },
  C = ["innerHTML"],
  I = e("h4", {
    class: "text-lg font-medium text-gray-800 mt-8",
    id: "Processors"
  }, "Processors", -1),
  k = {
    class: "text-gray=900 text-justify my-4"
  },
  z = ["innerHTML"],
  A = i('<h4 class="text-lg font-medium text-gray-800 mt-8" id="Cost Improvement Rate">Cost Improvement Rate</h4><p class="text-gray=900 text-justify my-4"> The cost improvement rate (CIR) captures the relative rates of cost reduction for quantum and classical operations over time. Specifically, it is defined as the ratio of the annual rates of change in the costs of quantum and classical operations. For instance, if quantum costs decrease at a rate of 30% per year (0.7 multiplier), while classical costs decrease at a rate of 20% per year (0.8 multiplier), the ratio of change would be 7/8. This implies that quantum costs improve at an effective rate of approximately 12.5% per year relative to classical costs. </p><p class="text-gray=900 text-justify my-4"> While performance improvements influence the hardware slowdown associated with quantum runtimes in the model, cost reductions primarily determine the number of classical processors that can be leveraged to speed up classical runtimes. If quantum costs decline more rapidly than classical costs, the cost-equivalent classical system becomes smaller over time, as fewer classical processors can be purchased for the same budget. Consequently, in the tool, the number of classical processors dividing into the classical runtime decreases each year. Both cost and performance improvements ultimately impact the problem size required for algorithmic advantage. This assumption applies when quantum costs are improving faster than classical costs, though users have the flexibility to modify or disregard it if needed. </p><h2 class="text-2xl font-bold text-gray-800" id="Calculations">Calculations</h2><p class="text-gray=900 text-justify my-4"> With all of the calculator’s inputs introduced, we can finally discuss how the tool calculates its findings. Before we dive into the mathematics, let us present the table below showing how each input is expressed in the equations. </p>', 5),
  F = {
    class: "overflow-x-auto mt-6"
  },
  E = {
    class: "table-auto w-full border-collapse border border-gray-300"
  },
  B = e("thead", null, [e("tr", {
    class: "bg-gray-200"
  }, [e("th", {
    class: "border border-gray-300 px-4 py-2"
  }, "Parameter"), e("th", {
    class: "border border-gray-300 px-4 py-2"
  }, "Symbolic Representation"), e("th", {
    class: "border border-gray-300 px-4 py-2"
  }, "Context")])], -1),
  W = {
    class: "border border-gray-300 px-4 py-2"
  },
  N = {
    class: "border border-gray-300 px-4 py-2"
  },
  U = ["innerHTML"],
  V = {
    class: "border border-gray-300 px-4 py-2"
  },
  G = {
    class: "text-gray=900 text-justify my-4"
  },
  D = ["innerHTML"],
  J = ["innerHTML"],
  O = {
    class: "text-gray=900 text-center my-4"
  },
  K = ["innerHTML"],
  X = {
    class: "text-gray=900 text-justify my-4"
  },
  Y = ["innerHTML"],
  Z = ["innerHTML"],
  $ = {
    class: "text-gray=900 text-center my-4"
  },
  ee = ["innerHTML"],
  te = {
    class: "text-gray=900 text-justify my-4"
  },
  ae = ["innerHTML"],
  se = ["innerHTML"],
  ie = {
    class: "text-gray=900 text-center my-4"
  },
  ne = ["innerHTML"],
  oe = e("p", {
    class: "text-gray=900 text-justify my-4"
  }, " With these formulations for how the problem size needed for advantage and the maximum feasible problem size change over time, we can express the time of Quantum Economic Advantage as their intersection. That is: ", -1),
  re = {
    class: "text-gray=900 text-center my-4"
  },
  le = ["innerHTML"],
  ce = e("h2", {
    class: "text-2xl font-bold text-gray-800",
    id: "Cost Advantage"
  }, " Cost Advantage ", -1),
  he = e("p", {
    class: "text-gray=900 text-justify my-4"
  }, " All of the insights provided by the calculator so far have been focused on determining when a specific instance of an algorithm would execute faster on equivalently priced quantum hardware compared to classical hardware. The calculator also provides the ability to determine when certain algorithms will become cheaper to execute on quantum hardware, even if this might take longer. This is achieved by adapting the previous expressions with new variables. ", -1),
  de = e("h3", {
    class: "text-xl font-bold text-gray-800 mt-8",
    id: "Cost Inputs"
  }, " Cost Inputs ", -1),
  me = e("p", {
    class: "text-gray=900 text-justify my-4"
  }, " For speed comparisons, the tool evaluates quantum and classical hardware by comparing their runtimes, factoring in a hardware slowdown. For cost comparisons, the tool assesses the total computational effort required by each hardware, where the computational effort corresponds to the total number of operations required to complete the computation. These operations are directly related to the original problem's runtimes. ", -1),
  ue = {
    class: "text-gray=900 text-justify my-4"
  },
  pe = ["innerHTML"],
  fe = ["innerHTML"],
  ye = {
    class: "text-gray=900 text-justify my-4"
  },
  ge = ["innerHTML"],
  xe = ["innerHTML"],
  be = ["innerHTML"],
  we = ["innerHTML"],
  _e = ["innerHTML"],
  ve = {
    class: "text-gray=900 text-justify my-4"
  },
  Te = ["innerHTML"],
  qe = e("h3", {
    class: "text-xl font-bold text-gray-800 mt-8",
    id: "Cost Calculations"
  }, " Cost Calculations ", -1),
  Le = e("p", {
    class: "text-gray=900 text-justify my-4"
  }, " The minimum problem size at which quantum computation becomes cheaper can be determined using the following expression: ", -1),
  He = ["innerHTML"],
  Me = {
    class: "text-gray=900 text-justify my-4"
  },
  Se = ["innerHTML"],
  je = ["innerHTML"],
  Qe = {
    class: "text-gray-900 text-center my-4"
  },
  Re = ["innerHTML"],
  Pe = {
    class: "text-gray=900 text-justify my-4"
  },
  Ce = ["innerHTML"],
  Ie = ["innerHTML"],
  ke = ["innerHTML"],
  We = {
    __name: "Documentation",
    setup(ze) {
      const c = [{
        parameter: "Problem Size",
        symbol: "n",
        context: "The parameter used to calculate runtimes and necessary logical qubits."
      }, {
        parameter: "Number of Processors",
        symbol: "10^p",
        context: "A factor dividing into the parallelizable classical runtime."
      }, {
        parameter: "Classical Runtime",
        symbol: "C(n, 10^p)",
        context: "A function in terms of problem size and the number of processors."
      }, {
        parameter: "Quantum Runtime",
        symbol: "Q(n)",
        context: "A function in terms of problem size."
      }, {
        parameter: "Qubit to Problem Size",
        symbol: "QPS",
        context: "Function used to calculate the maximum feasible problem size from the number of logical qubits. Its inverse QPS^{-1} is often used."
      }, {
        parameter: "Roadmap",
        symbol: "R(t)",
        context: "Function which outputs the expected number of physical qubits at the given year, considering the means of extrapolation and the growth of the roadmap."
      }, {
        parameter: "Hardware Slowdown",
        symbol: "10^{\\text{hws}}",
        context: "The relative slowdown on quantum computers."
      }, {
        parameter: "Quantum Improvement Rate",
        symbol: "QIR",
        context: "The rate at which the hardware slowdown decreases."
      }, {
        parameter: "Physical-Logical Qubit Ratio",
        symbol: "PLQR",
        context: "The number of physical qubits required to represent one logical qubit."
      }, {
        parameter: "Physical-Logical Qubit Ratio Improvement Rate",
        symbol: "RIR",
        context: "The rate at which the physical-logical qubit ratio decreases."
      }, {
        parameter: "Connectivity Penalty",
        symbol: "P(q)",
        context: "A function in terms of the number of logical qubits."
      }, {
        parameter: "Cost Improvement Rate",
        symbol: "CIR",
        context: "The rate at which the number of processors decreases."
      }];
      return (Ae, Fe) => (o(), r("div", u, [p, e("p", f, [t(" Classical runtimes are expressed as functions of both "), e("span", {
        innerHTML: s(a).renderToString("n")
      }, null, 8, y), t(" (problem size) and "), e("span", {
        innerHTML: s(a).renderToString("p")
      }, null, 8, g), t(" (number of processors). We denote these runtimes as "), e("span", {
        innerHTML: s(a).renderToString("C(n,p)")
      }, null, 8, x), t(" and quantum runtimes as "), e("span", {
        innerHTML: s(a).renderToString("Q(n)")
      }, null, 8, b), t(". In addition to the preset options, users can fully customize these runtime expressions, adjusting both classical and quantum runtimes or defining new ones entirely. This flexibility allows stakeholders to test hypotheses — for example, exploring how an optimistic projection of quantum runtimes impacts the projected timeline for quantum economic advantage. ")]), e("p", w, [t(" Notably, while increasing "), e("span", {
        innerHTML: s(a).renderToString("p")
      }, null, 8, _), t(' reduces runtime, the total computational effort, or "classical work," remains unchanged. The classical work is defined as the runtime with a single processor, '), e("span", {
        innerHTML: s(a).renderToString("C(n,1)")
      }, null, 8, v), t(", representing the total number of operations required. ")]), T, e("p", q, [t(" Qubit to Problem Size (QPS) is a function which maps logical qubits to the maximum problem size achievable with said amount of qubits. The inverse of this function ("), e("span", {
        innerHTML: s(a).renderToString("\\text{QPS}^{-1}")
      }, null, 8, L), t(") is also used in some calculations. ")]), H, e("p", M, [t(" The quantum improvement rat (QIR) represents this framework's method of modeling changes in the hardware slowdown over time, expressed as the percentage improvement year-to-year. (In the calculator, improvement rates are expressed as negative values.) QIR is used to calculate the annual reduction in the hardware slowdown. Representing the hardware slowdown in its linear form as "), e("span", {
        innerHTML: s(a).renderToString("S_t = 10^{\\text{hws}_t}")
      }, null, 8, S), t(", its change over time can be modeled by: ")]), e("p", j, [e("span", {
        innerHTML: s(a).renderToString("S_{t+1} = S_t * (1 - \\frac{qir}{100})")
      }, null, 8, Q)]), R, e("p", P, [t(" In the framework, connectivity overhead is modeled as a multiplicative penalty on the quantum runtime. Since the relationship between circuit connectivity and runtime is complex, this parameter was designed to be as freely customizable as the runtimes themselves. The tool accepts expressions in terms of "), e("span", {
        innerHTML: s(a).renderToString("q")
      }, null, 8, C), t(", allowing users to adjust connectivity penalties to reflect the specific constraints of their quantum hardware. ")]), I, e("p", k, [t(" This input represents the number of processors "), e("span", {
        innerHTML: s(a).renderToString("10^p")
      }, null, 8, z), t(" that would exist in a classical machine that is comparably priced to the quantum one being considered. The number of processors reduces the classical runtime as dictated by its expression. Like the hardware slowdown, it is input logarithmically. ")]), A, e("div", F, [e("table", E, [B, e("tbody", null, [(o(), r(d, null, m(c, (n, h) => e("tr", {
        key: h
      }, [e("td", W, l(n.parameter), 1), e("td", N, [e("span", {
        innerHTML: s(a).renderToString(n.symbol)
      }, null, 8, U)]), e("td", V, l(n.context), 1)])), 64))])])]), e("p", G, [t(" The framework calculates the minimum problem size needed for algorithmic advantage. This is the smallest problem size ("), e("span", {
        innerHTML: s(a).renderToString("n^*")
      }, null, 8, D), t(") such that the runtime on quantum hardware is faster than the runtime on classical hardware. The expression for determining "), e("span", {
        innerHTML: s(a).renderToString("n^*")
      }, null, 8, J), t(" is: ")]), e("p", O, [e("span", {
        innerHTML: s(a).renderToString("n^* = n \\text{ }|\\text{ } C(n, 10^p) = 10^{\\text{hws}} \\cdot Q(n) \\cdot P(\\text{QPS}^{-1}(n))")
      }, null, 8, K)]), e("p", X, [t(" This expression finds the problem size such that quantum devices, including connectivity penalties and hardware slowdowns, are comparable to classical devices' runtimes, including parallelization. Note this expression calculates the current problem size needed for algorithmic advantage. The framework also incorporates the improvement of variables over time, with the trend of the required "), e("span", {
        innerHTML: s(a).renderToString("n^*")
      }, null, 8, Y), t(" forming the advantage line in the QEA graph. The generic expression for the advantage line given a year "), e("span", {
        innerHTML: s(a).renderToString("t")
      }, null, 8, Z), t(" (which we'll label Adv()) becomes: ")]), e("p", $, [e("span", {
        innerHTML: s(a).renderToString("\\text{Adv}(t) = n \\text{ }|\\text{ } C(n, 10^p * (1 + \\text{CIR} / 100)^{t - t_0}) = 10^{\\text{hws}} * (1 + \\text{QIR} / 100)^{t - t_0} * Q(n) * P(\\text{QPS}^{-1}(n))")
      }, null, 8, ee)]), e("p", te, [t(" where "), e("span", {
        innerHTML: s(a).renderToString("t_0")
      }, null, 8, ae), t(" is the current year. The calculator also models feasibility over time. Given a selected roadmap, which includes the number of qubits achieved at target years and the desired extrapolation method, the tool calculates the maximum feasible problem size for each year. It also considers how many physical qubits are needed for logical qubits, their expected rate of change, and the conversion from logical qubits to the maximum solvable problem size. Using these factors, the framework computes the maximum feasible problem size at a given year "), e("span", {
        innerHTML: s(a).renderToString("t")
      }, null, 8, se), t(" (denoted as Feas(t)) as: ")]), e("p", ie, [e("span", {
        innerHTML: s(a).renderToString("\\text{Feas}(t) = \\text{QPS}\\left(\\frac{R(t)}{\\text{PLQR} * (1 + \\text{RIR} / 100)^{t - t_0}}\\right)")
      }, null, 8, ne)]), oe, e("p", re, [e("span", {
        innerHTML: s(a).renderToString("t^* = t \\text{ }|\\text{ } \\text{Feas}(t) = \\text{Adv}(t)")
      }, null, 8, le)]), ce, he, de, me, e("p", ue, [t(" Classical work ("), e("span", {
        innerHTML: s(a).renderToString("C_w")
      }, null, 8, pe), t(") is defined as the number of operations associated with the classical runtime when evaluated using a single processor. By default, classical work is evaluated as "), e("span", {
        innerHTML: s(a).renderToString("C(n, 1)")
      }, null, 8, fe), t(", but users have complete flexibility to change it to a different expression. ")]), e("p", ye, [t(" Quantum runtime reflects the depth of the circuit implementing the algorithm. To quantify the total computational effort, quantum work ("), e("span", {
        innerHTML: s(a).renderToString("Q_w")
      }, null, 8, ge), t(") is defined as the product of the runtime and the number of logical qubits involved in the computation. Quantum work is expressed using an additional variable "), e("span", {
        innerHTML: s(a).renderToString("q")
      }, null, 8, xe), t(", which represents the number of logical qubits. By default, quantum work is the product of the quantum runtime and "), e("span", {
        innerHTML: s(a).renderToString("q")
      }, null, 8, be), t(". The value of "), e("span", {
        innerHTML: s(a).renderToString("q")
      }, null, 8, we), t(" used in the expression is "), e("span", {
        innerHTML: s(a).renderToString("QPS^{-1}(n)")
      }, null, 8, _e), t(", reflecting how the required number of qubits changes with problem size. ")]), e("p", ve, [t(" The final adjustment for cost comparison involves incorporating the cost factor ("), e("span", {
        innerHTML: s(a).renderToString("10^{\\text{cf}}")
      }, null, 8, Te), t("), which represents how much more expensive it is to perform operations on a quantum machine compared to a classical one. This cost factor is analogous to the hardware slowdown for speed and is input logarithmically. The cost factor can also vary over time, changing at a rate determined by the cost improvement rate. ")]), qe, Le, e("p", {
        class: "text-gray-900 text-center my-4",
        innerHTML: s(a).renderToString("n_c^* = n \\text{ }|\\text{ } C_w(n) = 10^{\\text{cf}} * Q_w(n, \\text{QPS}^{-1}(n)) * P(\\text{QPS}^{-1}(n))")
      }, null, 8, He), e("p", Me, [t(" The trend in "), e("span", {
        innerHTML: s(a).renderToString("n_c^*")
      }, null, 8, Se), t(" over time defines the cost advantage, which is expressed as "), e("span", {
        innerHTML: s(a).renderToString("\\text{Adv}_c(t)")
      }, null, 8, je), t(": ")]), e("p", Qe, [e("span", {
        innerHTML: s(a).renderToString("\\text{Adv}_c(t) = n \\text{ }|\\text{ } C_w(n) = 10^{\\text{cf}} * (1 + \\text{CIR} / 100)^{t - t_0} * Q_w(n, \\text{QPS}^{-1}(n)) * P(\\text{QPS}^{-1}(n))")
      }, null, 8, Re)]), e("p", Pe, [t(" Since feasibility is not affected by cost considerations, the time at which it becomes cheaper to perform the problem on quantum hardware is determined by the intersection of "), e("span", {
        innerHTML: s(a).renderToString("\\text{Adv}_c(t)")
      }, null, 8, Ce), t(" and "), e("span", {
        innerHTML: s(a).renderToString("\\text{Feas}(t)")
      }, null, 8, Ie), t(": ")]), e("p", {
        class: "text-gray-900 text-center my-4",
        innerHTML: s(a).renderToString("t_c^* = t \\text{ }|\\text{ } \\text{Feas}(t) = \\text{Adv}_c(t)")
      }, null, 8, ke)]))
    }
  };
export {
  We as
  default
};