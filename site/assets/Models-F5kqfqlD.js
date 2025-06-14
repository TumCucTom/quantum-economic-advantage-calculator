import {
  r as vt,
  o as lo,
  w as Pf,
  c as xd,
  h as wd,
  F as Nd,
  i as co,
  p as fo,
  d as mo,
  a as Ua,
  b as Uf,
  e as Dd,
  f as Ad,
  g as Ed,
  j as ya,
  k as ft,
  u as mt,
  l as ln,
  m as os,
  t as ss,
  n as ba,
  _ as xa
} from "./index-niMaZqBZ.js";

function pr() {
  return pr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
    }
    return e
  }, pr.apply(this, arguments)
}
var Lf = {
  epsilon: 1e-12,
  matrix: "Matrix",
  number: "number",
  precision: 64,
  predictable: !1,
  randomSeed: null
};

function Pe(e) {
  return typeof e == "number"
}

function He(e) {
  return !e || typeof e != "object" || typeof e.constructor != "function" ? !1 : e.isBigNumber === !0 && typeof e.constructor.prototype == "object" && e.constructor.prototype.isBigNumber === !0 || typeof e.constructor.isDecimal == "function" && e.constructor.isDecimal(e) === !0
}

function Dt(e) {
  return e && typeof e == "object" && Object.getPrototypeOf(e).isComplex === !0 || !1
}

function oa(e) {
  return e && typeof e == "object" && Object.getPrototypeOf(e).isFraction === !0 || !1
}

function Yr(e) {
  return e && e.constructor.prototype.isUnit === !0 || !1
}

function Ar(e) {
  return typeof e == "string"
}
var Je = Array.isArray;

function Fe(e) {
  return e && e.constructor.prototype.isMatrix === !0 || !1
}

function qt(e) {
  return Array.isArray(e) || Fe(e)
}

function La(e) {
  return e && e.isDenseMatrix && e.constructor.prototype.isMatrix === !0 || !1
}

function Zt(e) {
  return e && e.isSparseMatrix && e.constructor.prototype.isMatrix === !0 || !1
}

function vo(e) {
  return e && e.constructor.prototype.isRange === !0 || !1
}

function ci(e) {
  return e && e.constructor.prototype.isIndex === !0 || !1
}

function Sd(e) {
  return typeof e == "boolean"
}

function Cd(e) {
  return e && e.constructor.prototype.isResultSet === !0 || !1
}

function kf(e) {
  return e && e.constructor.prototype.isHelp === !0 || !1
}

function Md(e) {
  return typeof e == "function"
}

function Fd(e) {
  return e instanceof Date
}

function Bd(e) {
  return e instanceof RegExp
}

function fi(e) {
  return !!(e && typeof e == "object" && e.constructor === Object && !Dt(e) && !oa(e))
}

function Td(e) {
  return e === null
}

function Od(e) {
  return e === void 0
}

function Wt(e) {
  return e && e.isAccessorNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function Zr(e) {
  return e && e.isArrayNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function $d(e) {
  return e && e.isAssignmentNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function _d(e) {
  return e && e.isBlockNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function Id(e) {
  return e && e.isConditionalNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function Qe(e) {
  return e && e.isConstantNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function Vi(e) {
  return Qe(e) || mr(e) && e.args.length === 1 && Qe(e.args[0]) && "-+~".includes(e.op)
}

function sa(e) {
  return e && e.isFunctionAssignmentNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function Rt(e) {
  return e && e.isFunctionNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function On(e) {
  return e && e.isIndexNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function er(e) {
  return e && e.isNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function mi(e) {
  return e && e.isObjectNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function mr(e) {
  return e && e.isOperatorNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function St(e) {
  return e && e.isParenthesisNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function qd(e) {
  return e && e.isRangeNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function Rd(e) {
  return e && e.isRelationalNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function yr(e) {
  return e && e.isSymbolNode === !0 && e.constructor.prototype.isNode === !0 || !1
}

function Hf(e) {
  return e && e.constructor.prototype.isChain === !0 || !1
}

function ar(e) {
  var r = typeof e;
  return r === "object" ? e === null ? "null" : He(e) ? "BigNumber" : e.constructor && e.constructor.name ? e.constructor.name : "Object" : r
}

function $e(e) {
  var r = typeof e;
  if (r === "number" || r === "string" || r === "boolean" || e === null || e === void 0) return e;
  if (typeof e.clone == "function") return e.clone();
  if (Array.isArray(e)) return e.map(function(i) {
    return $e(i)
  });
  if (e instanceof Date) return new Date(e.valueOf());
  if (He(e)) return e;
  if (fi(e)) return zd(e, $e);
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(e, ")"))
}

function zd(e, r) {
  var i = {};
  for (var n in e) Ee(e, n) && (i[n] = r(e[n]));
  return i
}

function Gf(e, r) {
  for (var i in r) Ee(r, i) && (e[i] = r[i]);
  return e
}

function Qt(e, r) {
  var i, n, t;
  if (Array.isArray(e)) {
    if (!Array.isArray(r) || e.length !== r.length) return !1;
    for (n = 0, t = e.length; n < t; n++)
      if (!Qt(e[n], r[n])) return !1;
    return !0
  } else {
    if (typeof e == "function") return e === r;
    if (e instanceof Object) {
      if (Array.isArray(r) || !(r instanceof Object)) return !1;
      for (i in e)
        if (!(i in r) || !Qt(e[i], r[i])) return !1;
      for (i in r)
        if (!(i in e)) return !1;
      return !0
    } else return e === r
  }
}

function Pd(e, r, i) {
  var n = !0,
    t;
  Object.defineProperty(e, r, {
    get: function() {
      return n && (t = i(), n = !1), t
    },
    set: function(o) {
      t = o, n = !1
    },
    configurable: !0,
    enumerable: !0
  })
}

function Ee(e, r) {
  return e && Object.hasOwnProperty.call(e, r)
}

function Ud(e, r) {
  for (var i = {}, n = 0; n < r.length; n++) {
    var t = r[n],
      a = e[t];
    a !== void 0 && (i[t] = a)
  }
  return i
}
var Ld = ["Matrix", "Array"],
  kd = ["number", "BigNumber", "Fraction"],
  pe = function(r) {
    if (r) throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);
    return Object.freeze(Lf)
  };
pr(pe, Lf, {
  MATRIX_OPTIONS: Ld,
  NUMBER_OPTIONS: kd
});

function us() {
  return !0
}

function Vr() {
  return !1
}

function cn() {}
const ls = "Argument is not a typed-function.";

function Vf() {
  function e(R) {
    return typeof R == "object" && R !== null && R.constructor === Object
  }
  const r = [{
      name: "number",
      test: function(R) {
        return typeof R == "number"
      }
    }, {
      name: "string",
      test: function(R) {
        return typeof R == "string"
      }
    }, {
      name: "boolean",
      test: function(R) {
        return typeof R == "boolean"
      }
    }, {
      name: "Function",
      test: function(R) {
        return typeof R == "function"
      }
    }, {
      name: "Array",
      test: Array.isArray
    }, {
      name: "Date",
      test: function(R) {
        return R instanceof Date
      }
    }, {
      name: "RegExp",
      test: function(R) {
        return R instanceof RegExp
      }
    }, {
      name: "Object",
      test: e
    }, {
      name: "null",
      test: function(R) {
        return R === null
      }
    }, {
      name: "undefined",
      test: function(R) {
        return R === void 0
      }
    }],
    i = {
      name: "any",
      test: us,
      isAny: !0
    };
  let n, t, a = 0,
    o = {
      createCount: 0
    };

  function f(R) {
    const L = n.get(R);
    if (L) return L;
    let j = 'Unknown type "' + R + '"';
    const ae = R.toLowerCase();
    let fe;
    for (fe of t)
      if (fe.toLowerCase() === ae) {
        j += '. Did you mean "' + fe + '" ?';
        break
      } throw new TypeError(j)
  }

  function c(R) {
    let L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    const j = L ? f(L).index : t.length,
      ae = [];
    for (let ce = 0; ce < R.length; ++ce) {
      if (!R[ce] || typeof R[ce].name != "string" || typeof R[ce].test != "function") throw new TypeError("Object with properties {name: string, test: function} expected");
      const ye = R[ce].name;
      if (n.has(ye)) throw new TypeError('Duplicate type name "' + ye + '"');
      ae.push(ye), n.set(ye, {
        name: ye,
        test: R[ce].test,
        isAny: R[ce].isAny,
        index: j + ce,
        conversionsTo: []
      })
    }
    const fe = t.slice(j);
    t = t.slice(0, j).concat(ae).concat(fe);
    for (let ce = j + ae.length; ce < t.length; ++ce) n.get(t[ce]).index = ce
  }

  function u() {
    n = new Map, t = [], a = 0, c([i], !1)
  }
  u(), c(r);

  function s() {
    let R;
    for (R of t) n.get(R).conversionsTo = [];
    a = 0
  }

  function l(R) {
    const L = t.filter(j => {
      const ae = n.get(j);
      return !ae.isAny && ae.test(R)
    });
    return L.length ? L : ["any"]
  }

  function m(R) {
    return R && typeof R == "function" && "_typedFunctionData" in R
  }

  function v(R, L, j) {
    if (!m(R)) throw new TypeError(ls);
    const ae = j && j.exact,
      fe = Array.isArray(L) ? L.join(",") : L,
      ce = x(fe),
      ye = b(ce);
    if (!ae || ye in R.signatures) {
      const Ge = R._typedFunctionData.signatureMap.get(ye);
      if (Ge) return Ge
    }
    const he = ce.length;
    let De;
    if (ae) {
      De = [];
      let Ge;
      for (Ge in R.signatures) De.push(R._typedFunctionData.signatureMap.get(Ge))
    } else De = R._typedFunctionData.signatures;
    for (let Ge = 0; Ge < he; ++Ge) {
      const Ve = ce[Ge],
        Ce = [];
      let lr;
      for (lr of De) {
        const F = E(lr.params, Ge);
        if (!(!F || Ve.restParam && !F.restParam)) {
          if (!F.hasAny) {
            const Y = h(F);
            if (Ve.types.some(oe => !Y.has(oe.name))) continue
          }
          Ce.push(lr)
        }
      }
      if (De = Ce, De.length === 0) break
    }
    let be;
    for (be of De)
      if (be.params.length <= he) return be;
    throw new TypeError("Signature not found (signature: " + (R.name || "unnamed") + "(" + b(ce, ", ") + "))")
  }

  function d(R, L, j) {
    return v(R, L, j).implementation
  }

  function p(R, L) {
    const j = f(L);
    if (j.test(R)) return R;
    const ae = j.conversionsTo;
    if (ae.length === 0) throw new Error("There are no conversions to " + L + " defined.");
    for (let fe = 0; fe < ae.length; fe++)
      if (f(ae[fe].from).test(R)) return ae[fe].convert(R);
    throw new Error("Cannot convert " + R + " to " + L)
  }

  function b(R) {
    let L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return R.map(j => j.name).join(L)
  }

  function g(R) {
    const L = R.indexOf("...") === 0,
      ae = (L ? R.length > 3 ? R.slice(3) : "any" : R).split("|").map(he => f(he.trim()));
    let fe = !1,
      ce = L ? "..." : "";
    return {
      types: ae.map(function(he) {
        return fe = he.isAny || fe, ce += he.name + "|", {
          name: he.name,
          typeIndex: he.index,
          test: he.test,
          isAny: he.isAny,
          conversion: null,
          conversionIndex: -1
        }
      }),
      name: ce.slice(0, -1),
      hasAny: fe,
      hasConversion: !1,
      restParam: L
    }
  }

  function N(R) {
    const L = R.types.map(ye => ye.name),
      j = B(L);
    let ae = R.hasAny,
      fe = R.name;
    const ce = j.map(function(ye) {
      const he = f(ye.from);
      return ae = he.isAny || ae, fe += "|" + ye.from, {
        name: ye.from,
        typeIndex: he.index,
        test: he.test,
        isAny: he.isAny,
        conversion: ye,
        conversionIndex: ye.index
      }
    });
    return {
      types: R.types.concat(ce),
      name: fe,
      hasAny: ae,
      hasConversion: ce.length > 0,
      restParam: R.restParam
    }
  }

  function h(R) {
    return R.typeSet || (R.typeSet = new Set, R.types.forEach(L => R.typeSet.add(L.name))), R.typeSet
  }

  function x(R) {
    const L = [];
    if (typeof R != "string") throw new TypeError("Signatures must be strings");
    const j = R.trim();
    if (j === "") return L;
    const ae = j.split(",");
    for (let fe = 0; fe < ae.length; ++fe) {
      const ce = g(ae[fe].trim());
      if (ce.restParam && fe !== ae.length - 1) throw new SyntaxError('Unexpected rest parameter "' + ae[fe] + '": only allowed for the last parameter');
      if (ce.types.length === 0) return null;
      L.push(ce)
    }
    return L
  }

  function w(R) {
    const L = re(R);
    return L ? L.restParam : !1
  }

  function y(R) {
    if (!R || R.types.length === 0) return us;
    if (R.types.length === 1) return f(R.types[0].name).test;
    if (R.types.length === 2) {
      const L = f(R.types[0].name).test,
        j = f(R.types[1].name).test;
      return function(fe) {
        return L(fe) || j(fe)
      }
    } else {
      const L = R.types.map(function(j) {
        return f(j.name).test
      });
      return function(ae) {
        for (let fe = 0; fe < L.length; fe++)
          if (L[fe](ae)) return !0;
        return !1
      }
    }
  }

  function A(R) {
    let L, j, ae;
    if (w(R)) {
      L = ue(R).map(y);
      const fe = L.length,
        ce = y(re(R)),
        ye = function(he) {
          for (let De = fe; De < he.length; De++)
            if (!ce(he[De])) return !1;
          return !0
        };
      return function(De) {
        for (let be = 0; be < L.length; be++)
          if (!L[be](De[be])) return !1;
        return ye(De) && De.length >= fe + 1
      }
    } else return R.length === 0 ? function(ce) {
      return ce.length === 0
    } : R.length === 1 ? (j = y(R[0]), function(ce) {
      return j(ce[0]) && ce.length === 1
    }) : R.length === 2 ? (j = y(R[0]), ae = y(R[1]), function(ce) {
      return j(ce[0]) && ae(ce[1]) && ce.length === 2
    }) : (L = R.map(y), function(ce) {
      for (let ye = 0; ye < L.length; ye++)
        if (!L[ye](ce[ye])) return !1;
      return ce.length === L.length
    })
  }

  function E(R, L) {
    return L < R.length ? R[L] : w(R) ? re(R) : null
  }

  function D(R, L) {
    const j = E(R, L);
    return j ? h(j) : new Set
  }

  function S(R) {
    return R.conversion === null || R.conversion === void 0
  }

  function C(R, L) {
    const j = new Set;
    return R.forEach(ae => {
      const fe = D(ae.params, L);
      let ce;
      for (ce of fe) j.add(ce)
    }), j.has("any") ? ["any"] : Array.from(j)
  }

  function M(R, L, j) {
    let ae, fe;
    const ce = R || "unnamed";
    let ye = j,
      he;
    for (he = 0; he < L.length; he++) {
      const Ve = [];
      if (ye.forEach(Ce => {
          const lr = E(Ce.params, he),
            F = y(lr);
          (he < Ce.params.length || w(Ce.params)) && F(L[he]) && Ve.push(Ce)
        }), Ve.length === 0) {
        if (fe = C(ye, he), fe.length > 0) {
          const Ce = l(L[he]);
          return ae = new TypeError("Unexpected type of argument in function " + ce + " (expected: " + fe.join(" or ") + ", actual: " + Ce.join(" | ") + ", index: " + he + ")"), ae.data = {
            category: "wrongType",
            fn: ce,
            index: he,
            actual: Ce,
            expected: fe
          }, ae
        }
      } else ye = Ve
    }
    const De = ye.map(function(Ve) {
      return w(Ve.params) ? 1 / 0 : Ve.params.length
    });
    if (L.length < Math.min.apply(null, De)) return fe = C(ye, he), ae = new TypeError("Too few arguments in function " + ce + " (expected: " + fe.join(" or ") + ", index: " + L.length + ")"), ae.data = {
      category: "tooFewArgs",
      fn: ce,
      index: L.length,
      expected: fe
    }, ae;
    const be = Math.max.apply(null, De);
    if (L.length > be) return ae = new TypeError("Too many arguments in function " + ce + " (expected: " + be + ", actual: " + L.length + ")"), ae.data = {
      category: "tooManyArgs",
      fn: ce,
      index: L.length,
      expectedLength: be
    }, ae;
    const Ge = [];
    for (let Ve = 0; Ve < L.length; ++Ve) Ge.push(l(L[Ve]).join("|"));
    return ae = new TypeError('Arguments of type "' + Ge.join(", ") + '" do not match any of the defined signatures of function ' + ce + "."), ae.data = {
      category: "mismatch",
      actual: Ge
    }, ae
  }

  function $(R) {
    let L = t.length + 1;
    for (let j = 0; j < R.types.length; j++) S(R.types[j]) && (L = Math.min(L, R.types[j].typeIndex));
    return L
  }

  function I(R) {
    let L = a + 1;
    for (let j = 0; j < R.types.length; j++) S(R.types[j]) || (L = Math.min(L, R.types[j].conversionIndex));
    return L
  }

  function _(R, L) {
    if (R.hasAny) {
      if (!L.hasAny) return 1
    } else if (L.hasAny) return -1;
    if (R.restParam) {
      if (!L.restParam) return 1
    } else if (L.restParam) return -1;
    if (R.hasConversion) {
      if (!L.hasConversion) return 1
    } else if (L.hasConversion) return -1;
    const j = $(R) - $(L);
    if (j < 0) return -1;
    if (j > 0) return 1;
    const ae = I(R) - I(L);
    return ae < 0 ? -1 : ae > 0 ? 1 : 0
  }

  function T(R, L) {
    const j = R.params,
      ae = L.params,
      fe = re(j),
      ce = re(ae),
      ye = w(j),
      he = w(ae);
    if (ye && fe.hasAny) {
      if (!he || !ce.hasAny) return 1
    } else if (he && ce.hasAny) return -1;
    let De = 0,
      be = 0,
      Ge;
    for (Ge of j) Ge.hasAny && ++De, Ge.hasConversion && ++be;
    let Ve = 0,
      Ce = 0;
    for (Ge of ae) Ge.hasAny && ++Ve, Ge.hasConversion && ++Ce;
    if (De !== Ve) return De - Ve;
    if (ye && fe.hasConversion) {
      if (!he || !ce.hasConversion) return 1
    } else if (he && ce.hasConversion) return -1;
    if (be !== Ce) return be - Ce;
    if (ye) {
      if (!he) return 1
    } else if (he) return -1;
    const lr = (j.length - ae.length) * (ye ? -1 : 1);
    if (lr !== 0) return lr;
    const F = [];
    let Y = 0;
    for (let xe = 0; xe < j.length; ++xe) {
      const Te = _(j[xe], ae[xe]);
      F.push(Te), Y += Te
    }
    if (Y !== 0) return Y;
    let oe;
    for (oe of F)
      if (oe !== 0) return oe;
    return 0
  }

  function B(R) {
    if (R.length === 0) return [];
    const L = R.map(f);
    R.length > 1 && L.sort((fe, ce) => fe.index - ce.index);
    let j = L[0].conversionsTo;
    if (R.length === 1) return j;
    j = j.concat([]);
    const ae = new Set(R);
    for (let fe = 1; fe < L.length; ++fe) {
      let ce;
      for (ce of L[fe].conversionsTo) ae.has(ce.from) || (j.push(ce), ae.add(ce.from))
    }
    return j
  }

  function U(R, L) {
    let j = L;
    if (R.some(fe => fe.hasConversion)) {
      const fe = w(R),
        ce = R.map(O);
      j = function() {
        const he = [],
          De = fe ? arguments.length - 1 : arguments.length;
        for (let be = 0; be < De; be++) he[be] = ce[be](arguments[be]);
        return fe && (he[De] = arguments[De].map(ce[De])), L.apply(this, he)
      }
    }
    let ae = j;
    if (w(R)) {
      const fe = R.length - 1;
      ae = function() {
        return j.apply(this, ne(arguments, 0, fe).concat([ne(arguments, fe)]))
      }
    }
    return ae
  }

  function O(R) {
    let L, j, ae, fe;
    const ce = [],
      ye = [];
    switch (R.types.forEach(function(he) {
        he.conversion && (ce.push(f(he.conversion.from).test), ye.push(he.conversion.convert))
      }), ye.length) {
      case 0:
        return function(De) {
          return De
        };
      case 1:
        return L = ce[0], ae = ye[0],
          function(De) {
            return L(De) ? ae(De) : De
          };
      case 2:
        return L = ce[0], j = ce[1], ae = ye[0], fe = ye[1],
          function(De) {
            return L(De) ? ae(De) : j(De) ? fe(De) : De
          };
      default:
        return function(De) {
          for (let be = 0; be < ye.length; be++)
            if (ce[be](De)) return ye[be](De);
          return De
        }
    }
  }

  function V(R) {
    function L(j, ae, fe) {
      if (ae < j.length) {
        const ce = j[ae];
        let ye = [];
        if (ce.restParam) {
          const he = ce.types.filter(S);
          he.length < ce.types.length && ye.push({
            types: he,
            name: "..." + he.map(De => De.name).join("|"),
            hasAny: he.some(De => De.isAny),
            hasConversion: !1,
            restParam: !0
          }), ye.push(ce)
        } else ye = ce.types.map(function(he) {
          return {
            types: [he],
            name: he.name,
            hasAny: he.isAny,
            hasConversion: he.conversion,
            restParam: !1
          }
        });
        return se(ye, function(he) {
          return L(j, ae + 1, fe.concat([he]))
        })
      } else return [fe]
    }
    return L(R, 0, [])
  }

  function J(R, L) {
    const j = Math.max(R.length, L.length);
    for (let he = 0; he < j; he++) {
      const De = D(R, he),
        be = D(L, he);
      let Ge = !1,
        Ve;
      for (Ve of be)
        if (De.has(Ve)) {
          Ge = !0;
          break
        } if (!Ge) return !1
    }
    const ae = R.length,
      fe = L.length,
      ce = w(R),
      ye = w(L);
    return ce ? ye ? ae === fe : fe >= ae : ye ? ae >= fe : ae === fe
  }

  function Z(R) {
    return R.map(L => te(L) ? P(L.referToSelf.callback) : H(L) ? Ae(L.referTo.references, L.referTo.callback) : L)
  }

  function q(R, L, j) {
    const ae = [];
    let fe;
    for (fe of R) {
      let ce = j[fe];
      if (typeof ce != "number") throw new TypeError('No definition for referenced signature "' + fe + '"');
      if (ce = L[ce], typeof ce != "function") return !1;
      ae.push(ce)
    }
    return ae
  }

  function X(R, L, j) {
    const ae = Z(R),
      fe = new Array(ae.length).fill(!1);
    let ce = !0;
    for (; ce;) {
      ce = !1;
      let ye = !0;
      for (let he = 0; he < ae.length; ++he) {
        if (fe[he]) continue;
        const De = ae[he];
        if (te(De)) ae[he] = De.referToSelf.callback(j), ae[he].referToSelf = De.referToSelf, fe[he] = !0, ye = !1;
        else if (H(De)) {
          const be = q(De.referTo.references, ae, L);
          be ? (ae[he] = De.referTo.callback.apply(this, be), ae[he].referTo = De.referTo, fe[he] = !0, ye = !1) : ce = !0
        }
      }
      if (ye && ce) throw new SyntaxError("Circular reference detected in resolving typed.referTo")
    }
    return ae
  }

  function ie(R) {
    const L = /\bthis(\(|\.signatures\b)/;
    Object.keys(R).forEach(j => {
      const ae = R[j];
      if (L.test(ae.toString())) throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")
    })
  }

  function Q(R, L) {
    if (o.createCount++, Object.keys(L).length === 0) throw new SyntaxError("No signatures provided");
    o.warnAgainstDeprecatedThis && ie(L);
    const j = [],
      ae = [],
      fe = {},
      ce = [];
    let ye;
    for (ye in L) {
      if (!Object.prototype.hasOwnProperty.call(L, ye)) continue;
      const rr = x(ye);
      if (!rr) continue;
      j.forEach(function(Wn) {
        if (J(Wn, rr)) throw new TypeError('Conflicting signatures "' + b(Wn) + '" and "' + b(rr) + '".')
      }), j.push(rr);
      const Rr = ae.length;
      ae.push(L[ye]);
      const yd = rr.map(N);
      let ga;
      for (ga of V(yd)) {
        const Wn = b(ga);
        ce.push({
          params: ga,
          name: Wn,
          fn: Rr
        }), ga.every(bd => !bd.hasConversion) && (fe[Wn] = Rr)
      }
    }
    ce.sort(T);
    const he = X(ae, fe, Yn);
    let De;
    for (De in fe) Object.prototype.hasOwnProperty.call(fe, De) && (fe[De] = he[fe[De]]);
    const be = [],
      Ge = new Map;
    for (De of ce) Ge.has(De.name) || (De.fn = he[De.fn], be.push(De), Ge.set(De.name, De));
    const Ve = be[0] && be[0].params.length <= 2 && !w(be[0].params),
      Ce = be[1] && be[1].params.length <= 2 && !w(be[1].params),
      lr = be[2] && be[2].params.length <= 2 && !w(be[2].params),
      F = be[3] && be[3].params.length <= 2 && !w(be[3].params),
      Y = be[4] && be[4].params.length <= 2 && !w(be[4].params),
      oe = be[5] && be[5].params.length <= 2 && !w(be[5].params),
      xe = Ve && Ce && lr && F && Y && oe;
    for (let rr = 0; rr < be.length; ++rr) be[rr].test = A(be[rr].params);
    const Te = Ve ? y(be[0].params[0]) : Vr,
      Re = Ce ? y(be[1].params[0]) : Vr,
      Ur = lr ? y(be[2].params[0]) : Vr,
      $i = F ? y(be[3].params[0]) : Vr,
      Yp = Y ? y(be[4].params[0]) : Vr,
      Wp = oe ? y(be[5].params[0]) : Vr,
      Qp = Ve ? y(be[0].params[1]) : Vr,
      Xp = Ce ? y(be[1].params[1]) : Vr,
      Jp = lr ? y(be[2].params[1]) : Vr,
      Kp = F ? y(be[3].params[1]) : Vr,
      jp = Y ? y(be[4].params[1]) : Vr,
      ed = oe ? y(be[5].params[1]) : Vr;
    for (let rr = 0; rr < be.length; ++rr) be[rr].implementation = U(be[rr].params, be[rr].fn);
    const rd = Ve ? be[0].implementation : cn,
      td = Ce ? be[1].implementation : cn,
      nd = lr ? be[2].implementation : cn,
      ad = F ? be[3].implementation : cn,
      id = Y ? be[4].implementation : cn,
      od = oe ? be[5].implementation : cn,
      sd = Ve ? be[0].params.length : -1,
      ud = Ce ? be[1].params.length : -1,
      ld = lr ? be[2].params.length : -1,
      cd = F ? be[3].params.length : -1,
      fd = Y ? be[4].params.length : -1,
      md = oe ? be[5].params.length : -1,
      vd = xe ? 6 : 0,
      pd = be.length,
      dd = be.map(rr => rr.test),
      hd = be.map(rr => rr.implementation),
      gd = function() {
        for (let Rr = vd; Rr < pd; Rr++)
          if (dd[Rr](arguments)) return hd[Rr].apply(this, arguments);
        return o.onMismatch(R, arguments, be)
      };

    function Yn(rr, Rr) {
      return arguments.length === sd && Te(rr) && Qp(Rr) ? rd.apply(this, arguments) : arguments.length === ud && Re(rr) && Xp(Rr) ? td.apply(this, arguments) : arguments.length === ld && Ur(rr) && Jp(Rr) ? nd.apply(this, arguments) : arguments.length === cd && $i(rr) && Kp(Rr) ? ad.apply(this, arguments) : arguments.length === fd && Yp(rr) && jp(Rr) ? id.apply(this, arguments) : arguments.length === md && Wp(rr) && ed(Rr) ? od.apply(this, arguments) : gd.apply(this, arguments)
    }
    try {
      Object.defineProperty(Yn, "name", {
        value: R
      })
    } catch {}
    return Yn.signatures = fe, Yn._typedFunctionData = {
      signatures: be,
      signatureMap: Ge
    }, Yn
  }

  function ee(R, L, j) {
    throw M(R, L, j)
  }

  function ue(R) {
    return ne(R, 0, R.length - 1)
  }

  function re(R) {
    return R[R.length - 1]
  }

  function ne(R, L, j) {
    return Array.prototype.slice.call(R, L, j)
  }

  function le(R, L) {
    for (let j = 0; j < R.length; j++)
      if (L(R[j])) return R[j]
  }

  function se(R, L) {
    return Array.prototype.concat.apply([], R.map(L))
  }

  function ge() {
    const R = ue(arguments).map(j => b(x(j))),
      L = re(arguments);
    if (typeof L != "function") throw new TypeError("Callback function expected as last argument");
    return Ae(R, L)
  }

  function Ae(R, L) {
    return {
      referTo: {
        references: R,
        callback: L
      }
    }
  }

  function P(R) {
    if (typeof R != "function") throw new TypeError("Callback function expected as first argument");
    return {
      referToSelf: {
        callback: R
      }
    }
  }

  function H(R) {
    return R && typeof R.referTo == "object" && Array.isArray(R.referTo.references) && typeof R.referTo.callback == "function"
  }

  function te(R) {
    return R && typeof R.referToSelf == "object" && typeof R.referToSelf.callback == "function"
  }

  function k(R, L) {
    if (!R) return L;
    if (L && L !== R) {
      const j = new Error("Function names do not match (expected: " + R + ", actual: " + L + ")");
      throw j.data = {
        actual: L,
        expected: R
      }, j
    }
    return R
  }

  function W(R) {
    let L;
    for (const j in R) Object.prototype.hasOwnProperty.call(R, j) && (m(R[j]) || typeof R[j].signature == "string") && (L = k(L, R[j].name));
    return L
  }

  function K(R, L) {
    let j;
    for (j in L)
      if (Object.prototype.hasOwnProperty.call(L, j)) {
        if (j in R && L[j] !== R[j]) {
          const ae = new Error('Signature "' + j + '" is defined twice');
          throw ae.data = {
            signature: j,
            sourceFunction: L[j],
            destFunction: R[j]
          }, ae
        }
        R[j] = L[j]
      }
  }
  const ve = o;
  o = function(R) {
    const L = typeof R == "string",
      j = L ? 1 : 0;
    let ae = L ? R : "";
    const fe = {};
    for (let ce = j; ce < arguments.length; ++ce) {
      const ye = arguments[ce];
      let he = {},
        De;
      if (typeof ye == "function" ? (De = ye.name, typeof ye.signature == "string" ? he[ye.signature] = ye : m(ye) && (he = ye.signatures)) : e(ye) && (he = ye, L || (De = W(ye))), Object.keys(he).length === 0) {
        const be = new TypeError("Argument to 'typed' at index " + ce + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        throw be.data = {
          index: ce,
          argument: ye
        }, be
      }
      L || (ae = k(ae, De)), K(fe, he)
    }
    return Q(ae || "", fe)
  }, o.create = Vf, o.createCount = ve.createCount, o.onMismatch = ee, o.throwMismatchError = ee, o.createError = M, o.clear = u, o.clearConversions = s, o.addTypes = c, o._findType = f, o.referTo = ge, o.referToSelf = P, o.convert = p, o.findSignature = v, o.find = d, o.isTypedFunction = m, o.warnAgainstDeprecatedThis = !0, o.addType = function(R, L) {
    let j = "any";
    L !== !1 && n.has("Object") && (j = "Object"), o.addTypes([R], j)
  };

  function me(R) {
    if (!R || typeof R.from != "string" || typeof R.to != "string" || typeof R.convert != "function") throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    if (R.to === R.from) throw new SyntaxError('Illegal to define conversion from "' + R.from + '" to itself.')
  }
  return o.addConversion = function(R) {
    me(R);
    const L = f(R.to);
    if (L.conversionsTo.every(function(j) {
        return j.from !== R.from
      })) L.conversionsTo.push({
      from: R.from,
      convert: R.convert,
      index: a++
    });
    else throw new Error('There is already a conversion from "' + R.from + '" to "' + L.name + '"')
  }, o.addConversions = function(R) {
    R.forEach(o.addConversion)
  }, o.removeConversion = function(R) {
    me(R);
    const L = f(R.to),
      j = le(L.conversionsTo, fe => fe.from === R.from);
    if (!j) throw new Error("Attempt to remove nonexistent conversion from " + R.from + " to " + R.to);
    if (j.convert !== R.convert) throw new Error("Conversion to remove does not match existing conversion");
    const ae = L.conversionsTo.indexOf(j);
    L.conversionsTo.splice(ae, 1)
  }, o.resolve = function(R, L) {
    if (!m(R)) throw new TypeError(ls);
    const j = R._typedFunctionData.signatures;
    for (let ae = 0; ae < j.length; ++ae)
      if (j[ae].test(L)) return j[ae];
    return null
  }, o
}
const gn = Vf();

function Se(e) {
  return typeof e == "boolean" ? !0 : isFinite(e) ? e === Math.round(e) : !1
}
var _t = Math.sign || function(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0
  },
  Hd = Math.log2 || function(r) {
    return Math.log(r) / Math.LN2
  },
  Gd = Math.log10 || function(r) {
    return Math.log(r) / Math.LN10
  },
  Vd = Math.log1p || function(e) {
    return Math.log(e + 1)
  },
  Zd = Math.cbrt || function(r) {
    if (r === 0) return r;
    var i = r < 0,
      n;
    return i && (r = -r), isFinite(r) ? (n = Math.exp(Math.log(r) / 3), n = (r / (n * n) + 2 * n) / 3) : n = r, i ? -n : n
  },
  Yd = Math.expm1 || function(r) {
    return r >= 2e-4 || r <= -2e-4 ? Math.exp(r) - 1 : r + r * r / 2 + r * r * r / 6
  };

function _i(e, r, i) {
  var n = {
      2: "0b",
      8: "0o",
      16: "0x"
    },
    t = n[r],
    a = "";
  if (i) {
    if (i < 1) throw new Error("size must be in greater than 0");
    if (!Se(i)) throw new Error("size must be an integer");
    if (e > 2 ** (i - 1) - 1 || e < -(2 ** (i - 1))) throw new Error("Value must be in range [-2^".concat(i - 1, ", 2^").concat(i - 1, "-1]"));
    if (!Se(e)) throw new Error("Value must be an integer");
    e < 0 && (e = e + 2 ** i), a = "i".concat(i)
  }
  var o = "";
  return e < 0 && (e = -e, o = "-"), "".concat(o).concat(t).concat(e.toString(r)).concat(a)
}

function Yt(e, r) {
  if (typeof r == "function") return r(e);
  if (e === 1 / 0) return "Infinity";
  if (e === -1 / 0) return "-Infinity";
  if (isNaN(e)) return "NaN";
  var i = "auto",
    n, t;
  if (r && (r.notation && (i = r.notation), Pe(r) ? n = r : Pe(r.precision) && (n = r.precision), r.wordSize && (t = r.wordSize, typeof t != "number"))) throw new Error('Option "wordSize" must be a number');
  switch (i) {
    case "fixed":
      return Zf(e, n);
    case "exponential":
      return Yf(e, n);
    case "engineering":
      return Wd(e, n);
    case "bin":
      return _i(e, 2, t);
    case "oct":
      return _i(e, 8, t);
    case "hex":
      return _i(e, 16, t);
    case "auto":
      return Qd(e, n, r && r).replace(/((\.\d*?)(0+))($|e)/, function() {
        var a = arguments[2],
          o = arguments[4];
        return a !== "." ? a + o : o
      });
    default:
      throw new Error('Unknown notation "' + i + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')
  }
}

function vi(e) {
  var r = String(e).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!r) throw new SyntaxError("Invalid number " + e);
  var i = r[1],
    n = r[2],
    t = parseFloat(r[4] || "0"),
    a = n.indexOf(".");
  t += a !== -1 ? a - 1 : n.length - 1;
  var o = n.replace(".", "").replace(/^0*/, function(f) {
    return t -= f.length, ""
  }).replace(/0*$/, "").split("").map(function(f) {
    return parseInt(f)
  });
  return o.length === 0 && (o.push(0), t++), {
    sign: i,
    coefficients: o,
    exponent: t
  }
}

function Wd(e, r) {
  if (isNaN(e) || !isFinite(e)) return String(e);
  var i = vi(e),
    n = pi(i, r),
    t = n.exponent,
    a = n.coefficients,
    o = t % 3 === 0 ? t : t < 0 ? t - 3 - t % 3 : t - t % 3;
  if (Pe(r))
    for (; r > a.length || t - o + 1 > a.length;) a.push(0);
  else
    for (var f = Math.abs(t - o) - (a.length - 1), c = 0; c < f; c++) a.push(0);
  for (var u = Math.abs(t - o), s = 1; u > 0;) s++, u--;
  var l = a.slice(s).join(""),
    m = Pe(r) && l.length || l.match(/[1-9]/) ? "." + l : "",
    v = a.slice(0, s).join("") + m + "e" + (t >= 0 ? "+" : "") + o.toString();
  return n.sign + v
}

function Zf(e, r) {
  if (isNaN(e) || !isFinite(e)) return String(e);
  var i = vi(e),
    n = typeof r == "number" ? pi(i, i.exponent + 1 + r) : i,
    t = n.coefficients,
    a = n.exponent + 1,
    o = a + (r || 0);
  return t.length < o && (t = t.concat(xn(o - t.length))), a < 0 && (t = xn(-a + 1).concat(t), a = 1), a < t.length && t.splice(a, 0, a === 0 ? "0." : "."), n.sign + t.join("")
}

function Yf(e, r) {
  if (isNaN(e) || !isFinite(e)) return String(e);
  var i = vi(e),
    n = r ? pi(i, r) : i,
    t = n.coefficients,
    a = n.exponent;
  t.length < r && (t = t.concat(xn(r - t.length)));
  var o = t.shift();
  return n.sign + o + (t.length > 0 ? "." + t.join("") : "") + "e" + (a >= 0 ? "+" : "") + a
}

function Qd(e, r, i) {
  if (isNaN(e) || !isFinite(e)) return String(e);
  var n = i && i.lowerExp !== void 0 ? i.lowerExp : -3,
    t = i && i.upperExp !== void 0 ? i.upperExp : 5,
    a = vi(e),
    o = r ? pi(a, r) : a;
  if (o.exponent < n || o.exponent >= t) return Yf(e, r);
  var f = o.coefficients,
    c = o.exponent;
  f.length < r && (f = f.concat(xn(r - f.length))), f = f.concat(xn(c - f.length + 1 + (f.length < r ? r - f.length : 0))), f = xn(-c).concat(f);
  var u = c > 0 ? c : 0;
  return u < f.length - 1 && f.splice(u + 1, 0, "."), o.sign + f.join("")
}

function pi(e, r) {
  for (var i = {
      sign: e.sign,
      coefficients: e.coefficients,
      exponent: e.exponent
    }, n = i.coefficients; r <= 0;) n.unshift(0), i.exponent++, r++;
  if (n.length > r) {
    var t = n.splice(r, n.length - r);
    if (t[0] >= 5) {
      var a = r - 1;
      for (n[a]++; n[a] === 10;) n.pop(), a === 0 && (n.unshift(0), i.exponent++, a++), a--, n[a]++
    }
  }
  return i
}

function xn(e) {
  for (var r = [], i = 0; i < e; i++) r.push(0);
  return r
}

function Xd(e) {
  return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length
}
var Jd = Number.EPSILON || 2220446049250313e-31;

function kr(e, r, i) {
  if (i == null) return e === r;
  if (e === r) return !0;
  if (isNaN(e) || isNaN(r)) return !1;
  if (isFinite(e) && isFinite(r)) {
    var n = Math.abs(e - r);
    return n <= Jd ? !0 : n <= Math.max(Math.abs(e), Math.abs(r)) * i
  }
  return !1
}
var Kd = Math.acosh || function(e) {
    return Math.log(Math.sqrt(e * e - 1) + e)
  },
  jd = Math.asinh || function(e) {
    return Math.log(Math.sqrt(e * e + 1) + e)
  },
  eh = Math.atanh || function(e) {
    return Math.log((1 + e) / (1 - e)) / 2
  },
  rh = Math.cosh || function(e) {
    return (Math.exp(e) + Math.exp(-e)) / 2
  },
  th = Math.sinh || function(e) {
    return (Math.exp(e) - Math.exp(-e)) / 2
  },
  nh = Math.tanh || function(e) {
    var r = Math.exp(2 * e);
    return (r - 1) / (r + 1)
  };

function ah(e, r) {
  var i = e > 0 ? !0 : e < 0 ? !1 : 1 / e === 1 / 0,
    n = r > 0 ? !0 : r < 0 ? !1 : 1 / r === 1 / 0;
  return i ^ n ? -e : e
}

function Ii(e, r, i) {
  var n = e.constructor,
    t = new n(2),
    a = "";
  if (i) {
    if (i < 1) throw new Error("size must be in greater than 0");
    if (!Se(i)) throw new Error("size must be an integer");
    if (e.greaterThan(t.pow(i - 1).sub(1)) || e.lessThan(t.pow(i - 1).mul(-1))) throw new Error("Value must be in range [-2^".concat(i - 1, ", 2^").concat(i - 1, "-1]"));
    if (!e.isInteger()) throw new Error("Value must be an integer");
    e.lessThan(0) && (e = e.add(t.pow(i))), a = "i".concat(i)
  }
  switch (r) {
    case 2:
      return "".concat(e.toBinary()).concat(a);
    case 8:
      return "".concat(e.toOctal()).concat(a);
    case 16:
      return "".concat(e.toHexadecimal()).concat(a);
    default:
      throw new Error("Base ".concat(r, " not supported "))
  }
}

function ih(e, r) {
  if (typeof r == "function") return r(e);
  if (!e.isFinite()) return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
  var i = "auto",
    n, t;
  if (r !== void 0 && (r.notation && (i = r.notation), typeof r == "number" ? n = r : r.precision !== void 0 && (n = r.precision), r.wordSize && (t = r.wordSize, typeof t != "number"))) throw new Error('Option "wordSize" must be a number');
  switch (i) {
    case "fixed":
      return sh(e, n);
    case "exponential":
      return cs(e, n);
    case "engineering":
      return oh(e, n);
    case "bin":
      return Ii(e, 2, t);
    case "oct":
      return Ii(e, 8, t);
    case "hex":
      return Ii(e, 16, t);
    case "auto": {
      var a = r && r.lowerExp !== void 0 ? r.lowerExp : -3,
        o = r && r.upperExp !== void 0 ? r.upperExp : 5;
      if (e.isZero()) return "0";
      var f, c = e.toSignificantDigits(n),
        u = c.e;
      return u >= a && u < o ? f = c.toFixed() : f = cs(e, n), f.replace(/((\.\d*?)(0+))($|e)/, function() {
        var s = arguments[2],
          l = arguments[4];
        return s !== "." ? s + l : l
      })
    }
    default:
      throw new Error('Unknown notation "' + i + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')
  }
}

function oh(e, r) {
  var i = e.e,
    n = i % 3 === 0 ? i : i < 0 ? i - 3 - i % 3 : i - i % 3,
    t = e.mul(Math.pow(10, -n)),
    a = t.toPrecision(r);
  if (a.indexOf("e") !== -1) {
    var o = e.constructor;
    a = new o(a).toFixed()
  }
  return a + "e" + (i >= 0 ? "+" : "") + n.toString()
}

function cs(e, r) {
  return r !== void 0 ? e.toExponential(r - 1) : e.toExponential()
}

function sh(e, r) {
  return e.toFixed(r)
}

function uh(e, r) {
  var i = e.length - r.length,
    n = e.length;
  return e.substring(i, n) === r
}

function ze(e, r) {
  var i = lh(e, r);
  return r && typeof r == "object" && "truncate" in r && i.length > r.truncate ? i.substring(0, r.truncate - 3) + "..." : i
}

function lh(e, r) {
  if (typeof e == "number") return Yt(e, r);
  if (He(e)) return ih(e, r);
  if (ch(e)) return !r || r.fraction !== "decimal" ? e.s * e.n + "/" + e.d : e.toString();
  if (Array.isArray(e)) return Wf(e, r);
  if (Ar(e)) return yn(e);
  if (typeof e == "function") return e.syntax ? String(e.syntax) : "function";
  if (e && typeof e == "object") {
    if (typeof e.format == "function") return e.format(r);
    if (e && e.toString(r) !== {}.toString()) return e.toString(r);
    var i = Object.keys(e).map(n => yn(n) + ": " + ze(e[n], r));
    return "{" + i.join(", ") + "}"
  }
  return String(e)
}

function yn(e) {
  for (var r = String(e), i = "", n = 0; n < r.length;) {
    var t = r.charAt(n);
    i += t in fs ? fs[t] : t, n++
  }
  return '"' + i + '"'
}
var fs = {
  '"': '\\"',
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t"
};

function Wr(e) {
  var r = String(e);
  return r = r.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), r
}

function Wf(e, r) {
  if (Array.isArray(e)) {
    for (var i = "[", n = e.length, t = 0; t < n; t++) t !== 0 && (i += ", "), i += Wf(e[t], r);
    return i += "]", i
  } else return ze(e, r)
}

function ch(e) {
  return e && typeof e == "object" && typeof e.s == "number" && typeof e.n == "number" && typeof e.d == "number" || !1
}

function Zi(e, r) {
  if (!Ar(e)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + ar(e) + ", index: 0)");
  if (!Ar(r)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + ar(r) + ", index: 1)");
  return e === r ? 0 : e > r ? 1 : -1
}

function Ue(e, r, i) {
  if (!(this instanceof Ue)) throw new SyntaxError("Constructor must be called with the new operator");
  this.actual = e, this.expected = r, this.relation = i, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(r) ? "[" + r.join(", ") + "]" : r) + ")", this.stack = new Error().stack
}
Ue.prototype = new RangeError;
Ue.prototype.constructor = RangeError;
Ue.prototype.name = "DimensionError";
Ue.prototype.isDimensionError = !0;

function it(e, r, i) {
  if (!(this instanceof it)) throw new SyntaxError("Constructor must be called with the new operator");
  this.index = e, arguments.length < 3 ? (this.min = 0, this.max = r) : (this.min = r, this.max = i), this.min !== void 0 && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : this.max !== void 0 && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack
}
it.prototype = new RangeError;
it.prototype.constructor = RangeError;
it.prototype.name = "IndexError";
it.prototype.isIndexError = !0;

function qe(e) {
  for (var r = []; Array.isArray(e);) r.push(e.length), e = e[0];
  return r
}

function Qf(e, r, i) {
  var n, t = e.length;
  if (t !== r[i]) throw new Ue(t, r[i]);
  if (i < r.length - 1) {
    var a = i + 1;
    for (n = 0; n < t; n++) {
      var o = e[n];
      if (!Array.isArray(o)) throw new Ue(r.length - 1, r.length, "<");
      Qf(e[n], r, a)
    }
  } else
    for (n = 0; n < t; n++)
      if (Array.isArray(e[n])) throw new Ue(r.length + 1, r.length, ">")
}

function ms(e, r) {
  var i = r.length === 0;
  if (i) {
    if (Array.isArray(e)) throw new Ue(e.length, 0)
  } else Qf(e, r, 0)
}

function ka(e, r) {
  var i = e.isMatrix ? e._size : qe(e),
    n = r._sourceSize;
  n.forEach((t, a) => {
    if (t !== null && t !== i[a]) throw new Ue(t, i[a])
  })
}

function tr(e, r) {
  if (e !== void 0) {
    if (!Pe(e) || !Se(e)) throw new TypeError("Index must be an integer (value: " + e + ")");
    if (e < 0 || typeof r == "number" && e >= r) throw new it(e, r)
  }
}

function Dn(e) {
  for (var r = 0; r < e._dimensions.length; ++r) {
    var i = e._dimensions[r];
    if (i._data && Je(i._data)) {
      if (i._size[0] === 0) return !0
    } else if (i.isRange) {
      if (i.start === i.end) return !0
    } else if (Ar(i) && i.length === 0) return !0
  }
  return !1
}

function An(e, r, i) {
  if (!Array.isArray(r)) throw new TypeError("Array expected");
  if (r.length === 0) throw new Error("Resizing to scalar is not supported");
  r.forEach(function(t) {
    if (!Pe(t) || !Se(t) || t < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + ze(r) + ")")
  }), (Pe(e) || He(e)) && (e = [e]);
  var n = i !== void 0 ? i : 0;
  return Yi(e, r, 0, n), e
}

function Yi(e, r, i, n) {
  var t, a, o = e.length,
    f = r[i],
    c = Math.min(o, f);
  if (e.length = f, i < r.length - 1) {
    var u = i + 1;
    for (t = 0; t < c; t++) a = e[t], Array.isArray(a) || (a = [a], e[t] = a), Yi(a, r, u, n);
    for (t = c; t < f; t++) a = [], e[t] = a, Yi(a, r, u, n)
  } else {
    for (t = 0; t < c; t++)
      for (; Array.isArray(e[t]);) e[t] = e[t][0];
    for (t = c; t < f; t++) e[t] = n
  }
}

function po(e, r) {
  var i = Xe(e),
    n = i.length;
  if (!Array.isArray(e) || !Array.isArray(r)) throw new TypeError("Array expected");
  if (r.length === 0) throw new Ue(0, n, "!=");
  r = ho(r, n);
  var t = Xf(r);
  if (n !== t) throw new Ue(t, n, "!=");
  try {
    return fh(i, r)
  } catch (a) {
    throw a instanceof Ue ? new Ue(t, n, "!=") : a
  }
}

function ho(e, r) {
  var i = Xf(e),
    n = e.slice(),
    t = -1,
    a = e.indexOf(t),
    o = e.indexOf(t, a + 1) >= 0;
  if (o) throw new Error("More than one wildcard in sizes");
  var f = a >= 0,
    c = r % i === 0;
  if (f)
    if (c) n[a] = -r / i;
    else throw new Error("Could not replace wildcard, since " + r + " is no multiple of " + -i);
  return n
}

function Xf(e) {
  return e.reduce((r, i) => r * i, 1)
}

function fh(e, r) {
  for (var i = e, n, t = r.length - 1; t > 0; t--) {
    var a = r[t];
    n = [];
    for (var o = i.length / a, f = 0; f < o; f++) n.push(i.slice(f * a, (f + 1) * a));
    i = n
  }
  return i
}

function Ha(e, r) {
  for (var i = r || qe(e); Array.isArray(e) && e.length === 1;) e = e[0], i.shift();
  for (var n = i.length; i[n - 1] === 1;) n--;
  return n < i.length && (e = Jf(e, n, 0), i.length = n), e
}

function Jf(e, r, i) {
  var n, t;
  if (i < r) {
    var a = i + 1;
    for (n = 0, t = e.length; n < t; n++) e[n] = Jf(e[n], r, a)
  } else
    for (; Array.isArray(e);) e = e[0];
  return e
}

function Kf(e, r, i, n) {
  var t = n || qe(e);
  if (i)
    for (var a = 0; a < i; a++) e = [e], t.unshift(1);
  for (e = jf(e, r, 0); t.length < r;) t.push(1);
  return e
}

function jf(e, r, i) {
  var n, t;
  if (Array.isArray(e)) {
    var a = i + 1;
    for (n = 0, t = e.length; n < t; n++) e[n] = jf(e[n], r, a)
  } else
    for (var o = i; o < r; o++) e = [e];
  return e
}

function Xe(e) {
  if (!Array.isArray(e)) return e;
  var r = [];
  return e.forEach(function i(n) {
    Array.isArray(n) ? n.forEach(i) : r.push(n)
  }), r
}

function At(e, r) {
  return Array.prototype.map.call(e, r)
}

function di(e, r) {
  Array.prototype.forEach.call(e, r)
}

function em(e, r) {
  if (qe(e).length !== 1) throw new Error("Only one dimensional matrices supported");
  return Array.prototype.filter.call(e, r)
}

function Ga(e, r) {
  if (qe(e).length !== 1) throw new Error("Only one dimensional matrices supported");
  return Array.prototype.filter.call(e, i => r.test(i))
}

function vs(e, r) {
  return Array.prototype.join.call(e, r)
}

function En(e) {
  if (!Array.isArray(e)) throw new TypeError("Array input expected");
  if (e.length === 0) return e;
  var r = [],
    i = 0;
  r[0] = {
    value: e[0],
    identifier: 0
  };
  for (var n = 1; n < e.length; n++) e[n] === e[n - 1] ? i++ : i = 0, r.push({
    value: e[n],
    identifier: i
  });
  return r
}

function Va(e) {
  if (!Array.isArray(e)) throw new TypeError("Array input expected");
  if (e.length === 0) return e;
  for (var r = [], i = 0; i < e.length; i++) r.push(e[i].value);
  return r
}

function ea(e, r) {
  for (var i, n = 0, t = 0; t < e.length; t++) {
    var a = e[t],
      o = Array.isArray(a);
    if (t === 0 && o && (n = a.length), o && a.length !== n) return;
    var f = o ? ea(a, r) : r(a);
    if (i === void 0) i = f;
    else if (i !== f) return "mixed"
  }
  return i
}

function rm(e, r, i, n) {
  if (n < i) {
    if (e.length !== r.length) throw new Ue(e.length, r.length);
    for (var t = [], a = 0; a < e.length; a++) t[a] = rm(e[a], r[a], i, n + 1);
    return t
  } else return e.concat(r)
}

function tm() {
  var e = Array.prototype.slice.call(arguments, 0, -1),
    r = Array.prototype.slice.call(arguments, -1);
  if (e.length === 1) return e[0];
  if (e.length > 1) return e.slice(1).reduce(function(i, n) {
    return rm(i, n, r, 0)
  }, e[0]);
  throw new Error("Wrong number of arguments in function concat")
}

function mh() {
  for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
  for (var n = r.map(m => m.length), t = Math.max(...n), a = new Array(t).fill(null), o = 0; o < r.length; o++)
    for (var f = r[o], c = n[o], u = 0; u < c; u++) {
      var s = t - c + u;
      f[u] > a[s] && (a[s] = f[u])
    }
  for (var l = 0; l < r.length; l++) Za(r[l], a);
  return a
}

function Za(e, r) {
  for (var i = r.length, n = e.length, t = 0; t < n; t++) {
    var a = i - n + t;
    if (e[t] < r[a] && e[t] > 1 || e[t] > r[a]) throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(e, ") not possible to broadcast dimension ").concat(n, " with size ").concat(e[t], " to size ").concat(r[a]))
  }
}

function ps(e, r) {
  var i = qe(e);
  if (Qt(i, r)) return e;
  Za(i, r);
  var n = mh(i, r),
    t = n.length,
    a = [...Array(t - i.length).fill(1), ...i],
    o = ph(e);
  i.length < t && (o = po(o, a), i = qe(o));
  for (var f = 0; f < t; f++) i[f] < n[f] && (o = vh(o, n[f], f), i = qe(o));
  return o
}

function vh(e, r, i) {
  return tm(...Array(r).fill(e), i)
}

function ph(e) {
  return pr([], e)
}

function z(e, r, i, n) {
  function t(a) {
    var o = Ud(a, r.map(gh));
    return dh(e, r, a), i(o)
  }
  return t.isFactory = !0, t.fn = e, t.dependencies = r.slice().sort(), n && (t.meta = n), t
}

function dh(e, r, i) {
  var n = r.filter(a => !hh(a)).every(a => i[a] !== void 0);
  if (!n) {
    var t = r.filter(a => i[a] === void 0);
    throw new Error('Cannot create function "'.concat(e, '", ') + "some dependencies are missing: ".concat(t.map(a => '"'.concat(a, '"')).join(", "), "."))
  }
}

function hh(e) {
  return e && e[0] === "?"
}

function gh(e) {
  return e && e[0] === "?" ? e.slice(1) : e
}

function Fr(e, r) {
  if (am(e) && nm(e, r)) return e[r];
  throw typeof e[r] == "function" && go(e, r) ? new Error('Cannot access method "' + r + '" as a property') : new Error('No access to property "' + r + '"')
}

function Sn(e, r, i) {
  if (am(e) && nm(e, r)) return e[r] = i, i;
  throw new Error('No access to property "' + r + '"')
}

function yh(e, r) {
  return r in e
}

function nm(e, r) {
  return !e || typeof e != "object" ? !1 : Ee(xh, r) ? !0 : !(r in Object.prototype || r in Function.prototype)
}

function bh(e, r) {
  if (!go(e, r)) throw new Error('No access to method "' + r + '"');
  return e[r]
}

function go(e, r) {
  return e == null || typeof e[r] != "function" || Ee(e, r) && Object.getPrototypeOf && r in Object.getPrototypeOf(e) ? !1 : Ee(wh, r) ? !0 : !(r in Object.prototype || r in Function.prototype)
}

function am(e) {
  return typeof e == "object" && e && e.constructor === Object
}
var xh = {
    length: !0,
    name: !0
  },
  wh = {
    toString: !0,
    valueOf: !0,
    toLocaleString: !0
  };
class yo {
  constructor(r) {
    this.wrappedObject = r
  }
  keys() {
    return Object.keys(this.wrappedObject)
  }
  get(r) {
    return Fr(this.wrappedObject, r)
  }
  set(r, i) {
    return Sn(this.wrappedObject, r, i), this
  }
  has(r) {
    return yh(this.wrappedObject, r)
  }
}

function Cn() {
  return new Map
}

function wn(e) {
  if (!e) return Cn();
  if (bo(e)) return e;
  if (fi(e)) return new yo(e);
  throw new Error("createMap can create maps from objects or Maps")
}

function Nh(e) {
  if (e instanceof yo) return e.wrappedObject;
  var r = {};
  for (var i of e.keys()) {
    var n = e.get(i);
    Sn(r, i, n)
  }
  return r
}

function bo(e) {
  return e ? e instanceof Map || e instanceof yo || typeof e.set == "function" && typeof e.get == "function" && typeof e.keys == "function" && typeof e.has == "function" : !1
}

function ds(e) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
  for (var t of i)
    if (t) {
      if (bo(t))
        for (var a of t.keys()) e.set(a, t.get(a));
      else if (fi(t))
        for (var o of Object.keys(t)) e.set(o, t[o])
    } return e
}
var im = function() {
    return im = gn.create, gn
  },
  Dh = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"],
  Ah = z("typed", Dh, function(r) {
    var {
      BigNumber: i,
      Complex: n,
      DenseMatrix: t,
      Fraction: a
    } = r, o = im();
    return o.clear(), o.addTypes([{
      name: "number",
      test: Pe
    }, {
      name: "Complex",
      test: Dt
    }, {
      name: "BigNumber",
      test: He
    }, {
      name: "Fraction",
      test: oa
    }, {
      name: "Unit",
      test: Yr
    }, {
      name: "identifier",
      test: f => Ar && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(f)
    }, {
      name: "string",
      test: Ar
    }, {
      name: "Chain",
      test: Hf
    }, {
      name: "Array",
      test: Je
    }, {
      name: "Matrix",
      test: Fe
    }, {
      name: "DenseMatrix",
      test: La
    }, {
      name: "SparseMatrix",
      test: Zt
    }, {
      name: "Range",
      test: vo
    }, {
      name: "Index",
      test: ci
    }, {
      name: "boolean",
      test: Sd
    }, {
      name: "ResultSet",
      test: Cd
    }, {
      name: "Help",
      test: kf
    }, {
      name: "function",
      test: Md
    }, {
      name: "Date",
      test: Fd
    }, {
      name: "RegExp",
      test: Bd
    }, {
      name: "null",
      test: Td
    }, {
      name: "undefined",
      test: Od
    }, {
      name: "AccessorNode",
      test: Wt
    }, {
      name: "ArrayNode",
      test: Zr
    }, {
      name: "AssignmentNode",
      test: $d
    }, {
      name: "BlockNode",
      test: _d
    }, {
      name: "ConditionalNode",
      test: Id
    }, {
      name: "ConstantNode",
      test: Qe
    }, {
      name: "FunctionNode",
      test: Rt
    }, {
      name: "FunctionAssignmentNode",
      test: sa
    }, {
      name: "IndexNode",
      test: On
    }, {
      name: "Node",
      test: er
    }, {
      name: "ObjectNode",
      test: mi
    }, {
      name: "OperatorNode",
      test: mr
    }, {
      name: "ParenthesisNode",
      test: St
    }, {
      name: "RangeNode",
      test: qd
    }, {
      name: "RelationalNode",
      test: Rd
    }, {
      name: "SymbolNode",
      test: yr
    }, {
      name: "Map",
      test: bo
    }, {
      name: "Object",
      test: fi
    }]), o.addConversions([{
      from: "number",
      to: "BigNumber",
      convert: function(c) {
        if (i || qi(c), Xd(c) > 15) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + c + "). Use function bignumber(x) to convert to BigNumber.");
        return new i(c)
      }
    }, {
      from: "number",
      to: "Complex",
      convert: function(c) {
        return n || wa(c), new n(c, 0)
      }
    }, {
      from: "BigNumber",
      to: "Complex",
      convert: function(c) {
        return n || wa(c), new n(c.toNumber(), 0)
      }
    }, {
      from: "Fraction",
      to: "BigNumber",
      convert: function(c) {
        throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")
      }
    }, {
      from: "Fraction",
      to: "Complex",
      convert: function(c) {
        return n || wa(c), new n(c.valueOf(), 0)
      }
    }, {
      from: "number",
      to: "Fraction",
      convert: function(c) {
        a || Ri(c);
        var u = new a(c);
        if (u.valueOf() !== c) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + c + "). Use function fraction(x) to convert to Fraction.");
        return u
      }
    }, {
      from: "string",
      to: "number",
      convert: function(c) {
        var u = Number(c);
        if (isNaN(u)) throw new Error('Cannot convert "' + c + '" to a number');
        return u
      }
    }, {
      from: "string",
      to: "BigNumber",
      convert: function(c) {
        i || qi(c);
        try {
          return new i(c)
        } catch {
          throw new Error('Cannot convert "' + c + '" to BigNumber')
        }
      }
    }, {
      from: "string",
      to: "Fraction",
      convert: function(c) {
        a || Ri(c);
        try {
          return new a(c)
        } catch {
          throw new Error('Cannot convert "' + c + '" to Fraction')
        }
      }
    }, {
      from: "string",
      to: "Complex",
      convert: function(c) {
        n || wa(c);
        try {
          return new n(c)
        } catch {
          throw new Error('Cannot convert "' + c + '" to Complex')
        }
      }
    }, {
      from: "boolean",
      to: "number",
      convert: function(c) {
        return +c
      }
    }, {
      from: "boolean",
      to: "BigNumber",
      convert: function(c) {
        return i || qi(c), new i(+c)
      }
    }, {
      from: "boolean",
      to: "Fraction",
      convert: function(c) {
        return a || Ri(c), new a(+c)
      }
    }, {
      from: "boolean",
      to: "string",
      convert: function(c) {
        return String(c)
      }
    }, {
      from: "Array",
      to: "Matrix",
      convert: function(c) {
        return t || Eh(), new t(c)
      }
    }, {
      from: "Matrix",
      to: "Array",
      convert: function(c) {
        return c.valueOf()
      }
    }]), o.onMismatch = (f, c, u) => {
      var s = o.createError(f, c, u);
      if (["wrongType", "mismatch"].includes(s.data.category) && c.length === 1 && qt(c[0]) && u.some(m => !m.params.includes(","))) {
        var l = new TypeError("Function '".concat(f, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(f, ")'."));
        throw l.data = s.data, l
      }
      throw s
    }, o.onMismatch = (f, c, u) => {
      var s = o.createError(f, c, u);
      if (["wrongType", "mismatch"].includes(s.data.category) && c.length === 1 && qt(c[0]) && u.some(m => !m.params.includes(","))) {
        var l = new TypeError("Function '".concat(f, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(f, ")'."));
        throw l.data = s.data, l
      }
      throw s
    }, o
  });

function qi(e) {
  throw new Error("Cannot convert value ".concat(e, " into a BigNumber: no class 'BigNumber' provided"))
}

function wa(e) {
  throw new Error("Cannot convert value ".concat(e, " into a Complex number: no class 'Complex' provided"))
}

function Eh() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")
}

function Ri(e) {
  throw new Error("Cannot convert value ".concat(e, " into a Fraction, no class 'Fraction' provided."))
}
var Sh = "ResultSet",
  Ch = [],
  Mh = z(Sh, Ch, () => {
    function e(r) {
      if (!(this instanceof e)) throw new SyntaxError("Constructor must be called with the new operator");
      this.entries = r || []
    }
    return e.prototype.type = "ResultSet", e.prototype.isResultSet = !0, e.prototype.valueOf = function() {
      return this.entries
    }, e.prototype.toString = function() {
      return "[" + this.entries.join(", ") + "]"
    }, e.prototype.toJSON = function() {
      return {
        mathjs: "ResultSet",
        entries: this.entries
      }
    }, e.fromJSON = function(r) {
      return new e(r.entries)
    }, e
  }, {
    isClass: !0
  });
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var bn = 9e15,
  Ut = 1e9,
  Wi = "0123456789abcdef",
  Ya = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  Wa = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  Qi = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -bn,
    maxE: bn,
    crypto: !1
  },
  om, wt, _e = !0,
  hi = "[DecimalError] ",
  zt = hi + "Invalid argument: ",
  sm = hi + "Precision limit exceeded",
  um = hi + "crypto unavailable",
  lm = "[object Decimal]",
  Sr = Math.floor,
  vr = Math.pow,
  Fh = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Bh = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Th = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  cm = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  nt = 1e7,
  Be = 7,
  Oh = 9007199254740991,
  $h = Ya.length - 1,
  Xi = Wa.length - 1,
  de = {
    toStringTag: lm
  };
de.absoluteValue = de.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), Me(e)
};
de.ceil = function() {
  return Me(new this.constructor(this), this.e + 1, 2)
};
de.clampedTo = de.clamp = function(e, r) {
  var i, n = this,
    t = n.constructor;
  if (e = new t(e), r = new t(r), !e.s || !r.s) return new t(NaN);
  if (e.gt(r)) throw Error(zt + r);
  return i = n.cmp(e), i < 0 ? e : n.cmp(r) > 0 ? r : new t(n)
};
de.comparedTo = de.cmp = function(e) {
  var r, i, n, t, a = this,
    o = a.d,
    f = (e = new a.constructor(e)).d,
    c = a.s,
    u = e.s;
  if (!o || !f) return !c || !u ? NaN : c !== u ? c : o === f ? 0 : !o ^ c < 0 ? 1 : -1;
  if (!o[0] || !f[0]) return o[0] ? c : f[0] ? -u : 0;
  if (c !== u) return c;
  if (a.e !== e.e) return a.e > e.e ^ c < 0 ? 1 : -1;
  for (n = o.length, t = f.length, r = 0, i = n < t ? n : t; r < i; ++r)
    if (o[r] !== f[r]) return o[r] > f[r] ^ c < 0 ? 1 : -1;
  return n === t ? 0 : n > t ^ c < 0 ? 1 : -1
};
de.cosine = de.cos = function() {
  var e, r, i = this,
    n = i.constructor;
  return i.d ? i.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(i.e, i.sd()) + Be, n.rounding = 1, i = _h(n, dm(n, i)), n.precision = e, n.rounding = r, Me(wt == 2 || wt == 3 ? i.neg() : i, e, r, !0)) : new n(1) : new n(NaN)
};
de.cubeRoot = de.cbrt = function() {
  var e, r, i, n, t, a, o, f, c, u, s = this,
    l = s.constructor;
  if (!s.isFinite() || s.isZero()) return new l(s);
  for (_e = !1, a = s.s * vr(s.s * s, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (i = wr(s.d), e = s.e, (a = (e - i.length + 1) % 3) && (i += a == 1 || a == -2 ? "0" : "00"), a = vr(i, 1 / 3), e = Sr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? i = "5e" + e : (i = a.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + e), n = new l(i), n.s = s.s) : n = new l(a.toString()), o = (e = l.precision) + 3;;)
    if (f = n, c = f.times(f).times(f), u = c.plus(s), n = sr(u.plus(s).times(f), u.plus(c), o + 2, 1), wr(f.d).slice(0, o) === (i = wr(n.d)).slice(0, o))
      if (i = i.slice(o - 3, o + 1), i == "9999" || !t && i == "4999") {
        if (!t && (Me(f, e + 1, 0), f.times(f).times(f).eq(s))) {
          n = f;
          break
        }
        o += 4, t = 1
      } else {
        (!+i || !+i.slice(1) && i.charAt(0) == "5") && (Me(n, e + 1, 1), r = !n.times(n).times(n).eq(s));
        break
      } return _e = !0, Me(n, e, l.rounding, r)
};
de.decimalPlaces = de.dp = function() {
  var e, r = this.d,
    i = NaN;
  if (r) {
    if (e = r.length - 1, i = (e - Sr(this.e / Be)) * Be, e = r[e], e)
      for (; e % 10 == 0; e /= 10) i--;
    i < 0 && (i = 0)
  }
  return i
};
de.dividedBy = de.div = function(e) {
  return sr(this, new this.constructor(e))
};
de.dividedToIntegerBy = de.divToInt = function(e) {
  var r = this,
    i = r.constructor;
  return Me(sr(r, new i(e), 0, 1, 1), i.precision, i.rounding)
};
de.equals = de.eq = function(e) {
  return this.cmp(e) === 0
};
de.floor = function() {
  return Me(new this.constructor(this), this.e + 1, 3)
};
de.greaterThan = de.gt = function(e) {
  return this.cmp(e) > 0
};
de.greaterThanOrEqualTo = de.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0
};
de.hyperbolicCosine = de.cosh = function() {
  var e, r, i, n, t, a = this,
    o = a.constructor,
    f = new o(1);
  if (!a.isFinite()) return new o(a.s ? 1 / 0 : NaN);
  if (a.isZero()) return f;
  i = o.precision, n = o.rounding, o.precision = i + Math.max(a.e, a.sd()) + 4, o.rounding = 1, t = a.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / yi(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), a = Mn(o, 1, a.times(r), new o(1), !0);
  for (var c, u = e, s = new o(8); u--;) c = a.times(a), a = f.minus(c.times(s.minus(c.times(s))));
  return Me(a, o.precision = i, o.rounding = n, !0)
};
de.hyperbolicSine = de.sinh = function() {
  var e, r, i, n, t = this,
    a = t.constructor;
  if (!t.isFinite() || t.isZero()) return new a(t);
  if (r = a.precision, i = a.rounding, a.precision = r + Math.max(t.e, t.sd()) + 4, a.rounding = 1, n = t.d.length, n < 3) t = Mn(a, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, t = t.times(1 / yi(5, e)), t = Mn(a, 2, t, t, !0);
    for (var o, f = new a(5), c = new a(16), u = new a(20); e--;) o = t.times(t), t = t.times(f.plus(o.times(c.times(o).plus(u))))
  }
  return a.precision = r, a.rounding = i, Me(t, r, i, !0)
};
de.hyperbolicTangent = de.tanh = function() {
  var e, r, i = this,
    n = i.constructor;
  return i.isFinite() ? i.isZero() ? new n(i) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, sr(i.sinh(), i.cosh(), n.precision = e, n.rounding = r)) : new n(i.s)
};
de.inverseCosine = de.acos = function() {
  var e, r = this,
    i = r.constructor,
    n = r.abs().cmp(1),
    t = i.precision,
    a = i.rounding;
  return n !== -1 ? n === 0 ? r.isNeg() ? tt(i, t, a) : new i(0) : new i(NaN) : r.isZero() ? tt(i, t + 4, a).times(.5) : (i.precision = t + 6, i.rounding = 1, r = r.asin(), e = tt(i, t + 4, a).times(.5), i.precision = t, i.rounding = a, e.minus(r))
};
de.inverseHyperbolicCosine = de.acosh = function() {
  var e, r, i = this,
    n = i.constructor;
  return i.lte(1) ? new n(i.eq(1) ? 0 : NaN) : i.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(i.e), i.sd()) + 4, n.rounding = 1, _e = !1, i = i.times(i).minus(1).sqrt().plus(i), _e = !0, n.precision = e, n.rounding = r, i.ln()) : new n(i)
};
de.inverseHyperbolicSine = de.asinh = function() {
  var e, r, i = this,
    n = i.constructor;
  return !i.isFinite() || i.isZero() ? new n(i) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(i.e), i.sd()) + 6, n.rounding = 1, _e = !1, i = i.times(i).plus(1).sqrt().plus(i), _e = !0, n.precision = e, n.rounding = r, i.ln())
};
de.inverseHyperbolicTangent = de.atanh = function() {
  var e, r, i, n, t = this,
    a = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new a(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = a.precision, r = a.rounding, n = t.sd(), Math.max(n, e) < 2 * -t.e - 1 ? Me(new a(t), e, r, !0) : (a.precision = i = n - t.e, t = sr(t.plus(1), new a(1).minus(t), i + e, 1), a.precision = e + 4, a.rounding = 1, t = t.ln(), a.precision = e, a.rounding = r, t.times(.5))) : new a(NaN)
};
de.inverseSine = de.asin = function() {
  var e, r, i, n, t = this,
    a = t.constructor;
  return t.isZero() ? new a(t) : (r = t.abs().cmp(1), i = a.precision, n = a.rounding, r !== -1 ? r === 0 ? (e = tt(a, i + 4, n).times(.5), e.s = t.s, e) : new a(NaN) : (a.precision = i + 6, a.rounding = 1, t = t.div(new a(1).minus(t.times(t)).sqrt().plus(1)).atan(), a.precision = i, a.rounding = n, t.times(2)))
};
de.inverseTangent = de.atan = function() {
  var e, r, i, n, t, a, o, f, c, u = this,
    s = u.constructor,
    l = s.precision,
    m = s.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new s(u);
    if (u.abs().eq(1) && l + 4 <= Xi) return o = tt(s, l + 4, m).times(.25), o.s = u.s, o
  } else {
    if (!u.s) return new s(NaN);
    if (l + 4 <= Xi) return o = tt(s, l + 4, m).times(.5), o.s = u.s, o
  }
  for (s.precision = f = l + 10, s.rounding = 1, i = Math.min(28, f / Be + 2 | 0), e = i; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (_e = !1, r = Math.ceil(f / Be), n = 1, c = u.times(u), o = new s(u), t = u; e !== -1;)
    if (t = t.times(c), a = o.minus(t.div(n += 2)), t = t.times(c), o = a.plus(t.div(n += 2)), o.d[r] !== void 0)
      for (e = r; o.d[e] === a.d[e] && e--;);
  return i && (o = o.times(2 << i - 1)), _e = !0, Me(o, s.precision = l, s.rounding = m, !0)
};
de.isFinite = function() {
  return !!this.d
};
de.isInteger = de.isInt = function() {
  return !!this.d && Sr(this.e / Be) > this.d.length - 2
};
de.isNaN = function() {
  return !this.s
};
de.isNegative = de.isNeg = function() {
  return this.s < 0
};
de.isPositive = de.isPos = function() {
  return this.s > 0
};
de.isZero = function() {
  return !!this.d && this.d[0] === 0
};
de.lessThan = de.lt = function(e) {
  return this.cmp(e) < 0
};
de.lessThanOrEqualTo = de.lte = function(e) {
  return this.cmp(e) < 1
};
de.logarithm = de.log = function(e) {
  var r, i, n, t, a, o, f, c, u = this,
    s = u.constructor,
    l = s.precision,
    m = s.rounding,
    v = 5;
  if (e == null) e = new s(10), r = !0;
  else {
    if (e = new s(e), i = e.d, e.s < 0 || !i || !i[0] || e.eq(1)) return new s(NaN);
    r = e.eq(10)
  }
  if (i = u.d, u.s < 0 || !i || !i[0] || u.eq(1)) return new s(i && !i[0] ? -1 / 0 : u.s != 1 ? NaN : i ? 0 : 1 / 0);
  if (r)
    if (i.length > 1) a = !0;
    else {
      for (t = i[0]; t % 10 === 0;) t /= 10;
      a = t !== 1
    } if (_e = !1, f = l + v, o = It(u, f), n = r ? Qa(s, f + 10) : It(e, f), c = sr(o, n, f, 1), ra(c.d, t = l, m))
    do
      if (f += 10, o = It(u, f), n = r ? Qa(s, f + 10) : It(e, f), c = sr(o, n, f, 1), !a) {
        +wr(c.d).slice(t + 1, t + 15) + 1 == 1e14 && (c = Me(c, l + 1, 0));
        break
      } while (ra(c.d, t += 10, m));
  return _e = !0, Me(c, l, m)
};
de.minus = de.sub = function(e) {
  var r, i, n, t, a, o, f, c, u, s, l, m, v = this,
    d = v.constructor;
  if (e = new d(e), !v.d || !e.d) return !v.s || !e.s ? e = new d(NaN) : v.d ? e.s = -e.s : e = new d(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s) return e.s = -e.s, v.plus(e);
  if (u = v.d, m = e.d, f = d.precision, c = d.rounding, !u[0] || !m[0]) {
    if (m[0]) e.s = -e.s;
    else if (u[0]) e = new d(v);
    else return new d(c === 3 ? -0 : 0);
    return _e ? Me(e, f, c) : e
  }
  if (i = Sr(e.e / Be), s = Sr(v.e / Be), u = u.slice(), a = s - i, a) {
    for (l = a < 0, l ? (r = u, a = -a, o = m.length) : (r = m, i = s, o = u.length), n = Math.max(Math.ceil(f / Be), o) + 2, a > n && (a = n, r.length = 1), r.reverse(), n = a; n--;) r.push(0);
    r.reverse()
  } else {
    for (n = u.length, o = m.length, l = n < o, l && (o = n), n = 0; n < o; n++)
      if (u[n] != m[n]) {
        l = u[n] < m[n];
        break
      } a = 0
  }
  for (l && (r = u, u = m, m = r, e.s = -e.s), o = u.length, n = m.length - o; n > 0; --n) u[o++] = 0;
  for (n = m.length; n > a;) {
    if (u[--n] < m[n]) {
      for (t = n; t && u[--t] === 0;) u[t] = nt - 1;
      --u[t], u[n] += nt
    }
    u[n] -= m[n]
  }
  for (; u[--o] === 0;) u.pop();
  for (; u[0] === 0; u.shift()) --i;
  return u[0] ? (e.d = u, e.e = gi(u, i), _e ? Me(e, f, c) : e) : new d(c === 3 ? -0 : 0)
};
de.modulo = de.mod = function(e) {
  var r, i = this,
    n = i.constructor;
  return e = new n(e), !i.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || i.d && !i.d[0] ? Me(new n(i), n.precision, n.rounding) : (_e = !1, n.modulo == 9 ? (r = sr(i, e.abs(), 0, 3, 1), r.s *= e.s) : r = sr(i, e, 0, n.modulo, 1), r = r.times(e), _e = !0, i.minus(r))
};
de.naturalExponential = de.exp = function() {
  return Ji(this)
};
de.naturalLogarithm = de.ln = function() {
  return It(this)
};
de.negated = de.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, Me(e)
};
de.plus = de.add = function(e) {
  var r, i, n, t, a, o, f, c, u, s, l = this,
    m = l.constructor;
  if (e = new m(e), !l.d || !e.d) return !l.s || !e.s ? e = new m(NaN) : l.d || (e = new m(e.d || l.s === e.s ? l : NaN)), e;
  if (l.s != e.s) return e.s = -e.s, l.minus(e);
  if (u = l.d, s = e.d, f = m.precision, c = m.rounding, !u[0] || !s[0]) return s[0] || (e = new m(l)), _e ? Me(e, f, c) : e;
  if (a = Sr(l.e / Be), n = Sr(e.e / Be), u = u.slice(), t = a - n, t) {
    for (t < 0 ? (i = u, t = -t, o = s.length) : (i = s, n = a, o = u.length), a = Math.ceil(f / Be), o = a > o ? a + 1 : o + 1, t > o && (t = o, i.length = 1), i.reverse(); t--;) i.push(0);
    i.reverse()
  }
  for (o = u.length, t = s.length, o - t < 0 && (t = o, i = s, s = u, u = i), r = 0; t;) r = (u[--t] = u[t] + s[t] + r) / nt | 0, u[t] %= nt;
  for (r && (u.unshift(r), ++n), o = u.length; u[--o] == 0;) u.pop();
  return e.d = u, e.e = gi(u, n), _e ? Me(e, f, c) : e
};
de.precision = de.sd = function(e) {
  var r, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(zt + e);
  return i.d ? (r = fm(i.d), e && i.e + 1 > r && (r = i.e + 1)) : r = NaN, r
};
de.round = function() {
  var e = this,
    r = e.constructor;
  return Me(new r(e), e.e + 1, r.rounding)
};
de.sine = de.sin = function() {
  var e, r, i = this,
    n = i.constructor;
  return i.isFinite() ? i.isZero() ? new n(i) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(i.e, i.sd()) + Be, n.rounding = 1, i = qh(n, dm(n, i)), n.precision = e, n.rounding = r, Me(wt > 2 ? i.neg() : i, e, r, !0)) : new n(NaN)
};
de.squareRoot = de.sqrt = function() {
  var e, r, i, n, t, a, o = this,
    f = o.d,
    c = o.e,
    u = o.s,
    s = o.constructor;
  if (u !== 1 || !f || !f[0]) return new s(!u || u < 0 && (!f || f[0]) ? NaN : f ? o : 1 / 0);
  for (_e = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (r = wr(f), (r.length + c) % 2 == 0 && (r += "0"), u = Math.sqrt(r), c = Sr((c + 1) / 2) - (c < 0 || c % 2), u == 1 / 0 ? r = "5e" + c : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + c), n = new s(r)) : n = new s(u.toString()), i = (c = s.precision) + 3;;)
    if (a = n, n = a.plus(sr(o, a, i + 2, 1)).times(.5), wr(a.d).slice(0, i) === (r = wr(n.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && (Me(a, c + 1, 0), a.times(a).eq(o))) {
          n = a;
          break
        }
        i += 4, t = 1
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (Me(n, c + 1, 1), e = !n.times(n).eq(o));
        break
      } return _e = !0, Me(n, c, s.rounding, e)
};
de.tangent = de.tan = function() {
  var e, r, i = this,
    n = i.constructor;
  return i.isFinite() ? i.isZero() ? new n(i) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, i = i.sin(), i.s = 1, i = sr(i, new n(1).minus(i.times(i)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, Me(wt == 2 || wt == 4 ? i.neg() : i, e, r, !0)) : new n(NaN)
};
de.times = de.mul = function(e) {
  var r, i, n, t, a, o, f, c, u, s = this,
    l = s.constructor,
    m = s.d,
    v = (e = new l(e)).d;
  if (e.s *= s.s, !m || !m[0] || !v || !v[0]) return new l(!e.s || m && !m[0] && !v || v && !v[0] && !m ? NaN : !m || !v ? e.s / 0 : e.s * 0);
  for (i = Sr(s.e / Be) + Sr(e.e / Be), c = m.length, u = v.length, c < u && (a = m, m = v, v = a, o = c, c = u, u = o), a = [], o = c + u, n = o; n--;) a.push(0);
  for (n = u; --n >= 0;) {
    for (r = 0, t = c + n; t > n;) f = a[t] + v[n] * m[t - n - 1] + r, a[t--] = f % nt | 0, r = f / nt | 0;
    a[t] = (a[t] + r) % nt | 0
  }
  for (; !a[--o];) a.pop();
  return r ? ++i : a.shift(), e.d = a, e.e = gi(a, i), _e ? Me(e, l.precision, l.rounding) : e
};
de.toBinary = function(e, r) {
  return xo(this, 2, e, r)
};
de.toDecimalPlaces = de.toDP = function(e, r) {
  var i = this,
    n = i.constructor;
  return i = new n(i), e === void 0 ? i : (Pr(e, 0, Ut), r === void 0 ? r = n.rounding : Pr(r, 0, 8), Me(i, e + i.e + 1, r))
};
de.toExponential = function(e, r) {
  var i, n = this,
    t = n.constructor;
  return e === void 0 ? i = pt(n, !0) : (Pr(e, 0, Ut), r === void 0 ? r = t.rounding : Pr(r, 0, 8), n = Me(new t(n), e + 1, r), i = pt(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + i : i
};
de.toFixed = function(e, r) {
  var i, n, t = this,
    a = t.constructor;
  return e === void 0 ? i = pt(t) : (Pr(e, 0, Ut), r === void 0 ? r = a.rounding : Pr(r, 0, 8), n = Me(new a(t), e + t.e + 1, r), i = pt(n, !1, e + n.e + 1)), t.isNeg() && !t.isZero() ? "-" + i : i
};
de.toFraction = function(e) {
  var r, i, n, t, a, o, f, c, u, s, l, m, v = this,
    d = v.d,
    p = v.constructor;
  if (!d) return new p(v);
  if (u = i = new p(1), n = c = new p(0), r = new p(n), a = r.e = fm(d) - v.e - 1, o = a % Be, r.d[0] = vr(10, o < 0 ? Be + o : o), e == null) e = a > 0 ? r : u;
  else {
    if (f = new p(e), !f.isInt() || f.lt(u)) throw Error(zt + f);
    e = f.gt(r) ? a > 0 ? r : u : f
  }
  for (_e = !1, f = new p(wr(d)), s = p.precision, p.precision = a = d.length * Be * 2; l = sr(f, r, 0, 1, 1), t = i.plus(l.times(n)), t.cmp(e) != 1;) i = n, n = t, t = u, u = c.plus(l.times(t)), c = t, t = r, r = f.minus(l.times(t)), f = t;
  return t = sr(e.minus(i), n, 0, 1, 1), c = c.plus(t.times(u)), i = i.plus(t.times(n)), c.s = u.s = v.s, m = sr(u, n, a, 1).minus(v).abs().cmp(sr(c, i, a, 1).minus(v).abs()) < 1 ? [u, n] : [c, i], p.precision = s, _e = !0, m
};
de.toHexadecimal = de.toHex = function(e, r) {
  return xo(this, 16, e, r)
};
de.toNearest = function(e, r) {
  var i = this,
    n = i.constructor;
  if (i = new n(i), e == null) {
    if (!i.d) return i;
    e = new n(1), r = n.rounding
  } else {
    if (e = new n(e), r === void 0 ? r = n.rounding : Pr(r, 0, 8), !i.d) return e.s ? i : e;
    if (!e.d) return e.s && (e.s = i.s), e
  }
  return e.d[0] ? (_e = !1, i = sr(i, e, 0, r, 1).times(e), _e = !0, Me(i)) : (e.s = i.s, i = e), i
};
de.toNumber = function() {
  return +this
};
de.toOctal = function(e, r) {
  return xo(this, 8, e, r)
};
de.toPower = de.pow = function(e) {
  var r, i, n, t, a, o, f = this,
    c = f.constructor,
    u = +(e = new c(e));
  if (!f.d || !e.d || !f.d[0] || !e.d[0]) return new c(vr(+f, u));
  if (f = new c(f), f.eq(1)) return f;
  if (n = c.precision, a = c.rounding, e.eq(1)) return Me(f, n, a);
  if (r = Sr(e.e / Be), r >= e.d.length - 1 && (i = u < 0 ? -u : u) <= Oh) return t = mm(c, f, i, n), e.s < 0 ? new c(1).div(t) : Me(t, n, a);
  if (o = f.s, o < 0) {
    if (r < e.d.length - 1) return new c(NaN);
    if (e.d[r] & 1 || (o = 1), f.e == 0 && f.d[0] == 1 && f.d.length == 1) return f.s = o, f
  }
  return i = vr(+f, u), r = i == 0 || !isFinite(i) ? Sr(u * (Math.log("0." + wr(f.d)) / Math.LN10 + f.e + 1)) : new c(i + "").e, r > c.maxE + 1 || r < c.minE - 1 ? new c(r > 0 ? o / 0 : 0) : (_e = !1, c.rounding = f.s = 1, i = Math.min(12, (r + "").length), t = Ji(e.times(It(f, n + i)), n), t.d && (t = Me(t, n + 5, 1), ra(t.d, n, a) && (r = n + 10, t = Me(Ji(e.times(It(f, r + i)), r), r + 5, 1), +wr(t.d).slice(n + 1, n + 15) + 1 == 1e14 && (t = Me(t, n + 1, 0)))), t.s = o, _e = !0, c.rounding = a, Me(t, n, a))
};
de.toPrecision = function(e, r) {
  var i, n = this,
    t = n.constructor;
  return e === void 0 ? i = pt(n, n.e <= t.toExpNeg || n.e >= t.toExpPos) : (Pr(e, 1, Ut), r === void 0 ? r = t.rounding : Pr(r, 0, 8), n = Me(new t(n), e, r), i = pt(n, e <= n.e || n.e <= t.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + i : i
};
de.toSignificantDigits = de.toSD = function(e, r) {
  var i = this,
    n = i.constructor;
  return e === void 0 ? (e = n.precision, r = n.rounding) : (Pr(e, 1, Ut), r === void 0 ? r = n.rounding : Pr(r, 0, 8)), Me(new n(i), e, r)
};
de.toString = function() {
  var e = this,
    r = e.constructor,
    i = pt(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + i : i
};
de.truncated = de.trunc = function() {
  return Me(new this.constructor(this), this.e + 1, 1)
};
de.valueOf = de.toJSON = function() {
  var e = this,
    r = e.constructor,
    i = pt(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + i : i
};

function wr(e) {
  var r, i, n, t = e.length - 1,
    a = "",
    o = e[0];
  if (t > 0) {
    for (a += o, r = 1; r < t; r++) n = e[r] + "", i = Be - n.length, i && (a += Ot(i)), a += n;
    o = e[r], n = o + "", i = Be - n.length, i && (a += Ot(i))
  } else if (o === 0) return "0";
  for (; o % 10 === 0;) o /= 10;
  return a + o
}

function Pr(e, r, i) {
  if (e !== ~~e || e < r || e > i) throw Error(zt + e)
}

function ra(e, r, i, n) {
  var t, a, o, f;
  for (a = e[0]; a >= 10; a /= 10) --r;
  return --r < 0 ? (r += Be, t = 0) : (t = Math.ceil((r + 1) / Be), r %= Be), a = vr(10, Be - r), f = e[t] % a | 0, n == null ? r < 3 ? (r == 0 ? f = f / 100 | 0 : r == 1 && (f = f / 10 | 0), o = i < 4 && f == 99999 || i > 3 && f == 49999 || f == 5e4 || f == 0) : o = (i < 4 && f + 1 == a || i > 3 && f + 1 == a / 2) && (e[t + 1] / a / 100 | 0) == vr(10, r - 2) - 1 || (f == a / 2 || f == 0) && (e[t + 1] / a / 100 | 0) == 0 : r < 4 ? (r == 0 ? f = f / 1e3 | 0 : r == 1 ? f = f / 100 | 0 : r == 2 && (f = f / 10 | 0), o = (n || i < 4) && f == 9999 || !n && i > 3 && f == 4999) : o = ((n || i < 4) && f + 1 == a || !n && i > 3 && f + 1 == a / 2) && (e[t + 1] / a / 1e3 | 0) == vr(10, r - 3) - 1, o
}

function Pa(e, r, i) {
  for (var n, t = [0], a, o = 0, f = e.length; o < f;) {
    for (a = t.length; a--;) t[a] *= r;
    for (t[0] += Wi.indexOf(e.charAt(o++)), n = 0; n < t.length; n++) t[n] > i - 1 && (t[n + 1] === void 0 && (t[n + 1] = 0), t[n + 1] += t[n] / i | 0, t[n] %= i)
  }
  return t.reverse()
}

function _h(e, r) {
  var i, n, t;
  if (r.isZero()) return r;
  n = r.d.length, n < 32 ? (i = Math.ceil(n / 3), t = (1 / yi(4, i)).toString()) : (i = 16, t = "2.3283064365386962890625e-10"), e.precision += i, r = Mn(e, 1, r.times(t), new e(1));
  for (var a = i; a--;) {
    var o = r.times(r);
    r = o.times(o).minus(o).times(8).plus(1)
  }
  return e.precision -= i, r
}
var sr = function() {
  function e(n, t, a) {
    var o, f = 0,
      c = n.length;
    for (n = n.slice(); c--;) o = n[c] * t + f, n[c] = o % a | 0, f = o / a | 0;
    return f && n.unshift(f), n
  }

  function r(n, t, a, o) {
    var f, c;
    if (a != o) c = a > o ? 1 : -1;
    else
      for (f = c = 0; f < a; f++)
        if (n[f] != t[f]) {
          c = n[f] > t[f] ? 1 : -1;
          break
        } return c
  }

  function i(n, t, a, o) {
    for (var f = 0; a--;) n[a] -= f, f = n[a] < t[a] ? 1 : 0, n[a] = f * o + n[a] - t[a];
    for (; !n[0] && n.length > 1;) n.shift()
  }
  return function(n, t, a, o, f, c) {
    var u, s, l, m, v, d, p, b, g, N, h, x, w, y, A, E, D, S, C, M, $ = n.constructor,
      I = n.s == t.s ? 1 : -1,
      _ = n.d,
      T = t.d;
    if (!_ || !_[0] || !T || !T[0]) return new $(!n.s || !t.s || (_ ? T && _[0] == T[0] : !T) ? NaN : _ && _[0] == 0 || !T ? I * 0 : I / 0);
    for (c ? (v = 1, s = n.e - t.e) : (c = nt, v = Be, s = Sr(n.e / v) - Sr(t.e / v)), C = T.length, D = _.length, g = new $(I), N = g.d = [], l = 0; T[l] == (_[l] || 0); l++);
    if (T[l] > (_[l] || 0) && s--, a == null ? (y = a = $.precision, o = $.rounding) : f ? y = a + (n.e - t.e) + 1 : y = a, y < 0) N.push(1), d = !0;
    else {
      if (y = y / v + 2 | 0, l = 0, C == 1) {
        for (m = 0, T = T[0], y++;
          (l < D || m) && y--; l++) A = m * c + (_[l] || 0), N[l] = A / T | 0, m = A % T | 0;
        d = m || l < D
      } else {
        for (m = c / (T[0] + 1) | 0, m > 1 && (T = e(T, m, c), _ = e(_, m, c), C = T.length, D = _.length), E = C, h = _.slice(0, C), x = h.length; x < C;) h[x++] = 0;
        M = T.slice(), M.unshift(0), S = T[0], T[1] >= c / 2 && ++S;
        do m = 0, u = r(T, h, C, x), u < 0 ? (w = h[0], C != x && (w = w * c + (h[1] || 0)), m = w / S | 0, m > 1 ? (m >= c && (m = c - 1), p = e(T, m, c), b = p.length, x = h.length, u = r(p, h, b, x), u == 1 && (m--, i(p, C < b ? M : T, b, c))) : (m == 0 && (u = m = 1), p = T.slice()), b = p.length, b < x && p.unshift(0), i(h, p, x, c), u == -1 && (x = h.length, u = r(T, h, C, x), u < 1 && (m++, i(h, C < x ? M : T, x, c))), x = h.length) : u === 0 && (m++, h = [0]), N[l++] = m, u && h[0] ? h[x++] = _[E] || 0 : (h = [_[E]], x = 1); while ((E++ < D || h[0] !== void 0) && y--);
        d = h[0] !== void 0
      }
      N[0] || N.shift()
    }
    if (v == 1) g.e = s, om = d;
    else {
      for (l = 1, m = N[0]; m >= 10; m /= 10) l++;
      g.e = l + s * v - 1, Me(g, f ? a + g.e + 1 : a, o, d)
    }
    return g
  }
}();

function Me(e, r, i, n) {
  var t, a, o, f, c, u, s, l, m, v = e.constructor;
  e: if (r != null) {
    if (l = e.d, !l) return e;
    for (t = 1, f = l[0]; f >= 10; f /= 10) t++;
    if (a = r - t, a < 0) a += Be, o = r, s = l[m = 0], c = s / vr(10, t - o - 1) % 10 | 0;
    else if (m = Math.ceil((a + 1) / Be), f = l.length, m >= f)
      if (n) {
        for (; f++ <= m;) l.push(0);
        s = c = 0, t = 1, a %= Be, o = a - Be + 1
      } else break e;
    else {
      for (s = f = l[m], t = 1; f >= 10; f /= 10) t++;
      a %= Be, o = a - Be + t, c = o < 0 ? 0 : s / vr(10, t - o - 1) % 10 | 0
    }
    if (n = n || r < 0 || l[m + 1] !== void 0 || (o < 0 ? s : s % vr(10, t - o - 1)), u = i < 4 ? (c || n) && (i == 0 || i == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (i == 4 || n || i == 6 && (a > 0 ? o > 0 ? s / vr(10, t - o) : 0 : l[m - 1]) % 10 & 1 || i == (e.s < 0 ? 8 : 7)), r < 1 || !l[0]) return l.length = 0, u ? (r -= e.e + 1, l[0] = vr(10, (Be - r % Be) % Be), e.e = -r || 0) : l[0] = e.e = 0, e;
    if (a == 0 ? (l.length = m, f = 1, m--) : (l.length = m + 1, f = vr(10, Be - a), l[m] = o > 0 ? (s / vr(10, t - o) % vr(10, o) | 0) * f : 0), u)
      for (;;)
        if (m == 0) {
          for (a = 1, o = l[0]; o >= 10; o /= 10) a++;
          for (o = l[0] += f, f = 1; o >= 10; o /= 10) f++;
          a != f && (e.e++, l[0] == nt && (l[0] = 1));
          break
        } else {
          if (l[m] += f, l[m] != nt) break;
          l[m--] = 0, f = 1
        } for (a = l.length; l[--a] === 0;) l.pop()
  }
  return _e && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e
}

function pt(e, r, i) {
  if (!e.isFinite()) return pm(e);
  var n, t = e.e,
    a = wr(e.d),
    o = a.length;
  return r ? (i && (n = i - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ot(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (a = "0." + Ot(-t - 1) + a, i && (n = i - o) > 0 && (a += Ot(n))) : t >= o ? (a += Ot(t + 1 - o), i && (n = i - t - 1) > 0 && (a = a + "." + Ot(n))) : ((n = t + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), i && (n = i - o) > 0 && (t + 1 === o && (a += "."), a += Ot(n))), a
}

function gi(e, r) {
  var i = e[0];
  for (r *= Be; i >= 10; i /= 10) r++;
  return r
}

function Qa(e, r, i) {
  if (r > $h) throw _e = !0, i && (e.precision = i), Error(sm);
  return Me(new e(Ya), r, 1, !0)
}

function tt(e, r, i) {
  if (r > Xi) throw Error(sm);
  return Me(new e(Wa), r, i, !0)
}

function fm(e) {
  var r = e.length - 1,
    i = r * Be + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10) i--;
    for (r = e[0]; r >= 10; r /= 10) i++
  }
  return i
}

function Ot(e) {
  for (var r = ""; e--;) r += "0";
  return r
}

function mm(e, r, i, n) {
  var t, a = new e(1),
    o = Math.ceil(n / Be + 4);
  for (_e = !1;;) {
    if (i % 2 && (a = a.times(r), gs(a.d, o) && (t = !0)), i = Sr(i / 2), i === 0) {
      i = a.d.length - 1, t && a.d[i] === 0 && ++a.d[i];
      break
    }
    r = r.times(r), gs(r.d, o)
  }
  return _e = !0, a
}

function hs(e) {
  return e.d[e.d.length - 1] & 1
}

function vm(e, r, i) {
  for (var n, t = new e(r[0]), a = 0; ++a < r.length;)
    if (n = new e(r[a]), n.s) t[i](n) && (t = n);
    else {
      t = n;
      break
    } return t
}

function Ji(e, r) {
  var i, n, t, a, o, f, c, u = 0,
    s = 0,
    l = 0,
    m = e.constructor,
    v = m.rounding,
    d = m.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new m(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (r == null ? (_e = !1, c = d) : c = r, f = new m(.03125); e.e > -2;) e = e.times(f), l += 5;
  for (n = Math.log(vr(2, l)) / Math.LN10 * 2 + 5 | 0, c += n, i = a = o = new m(1), m.precision = c;;) {
    if (a = Me(a.times(e), c, 1), i = i.times(++s), f = o.plus(sr(a, i, c, 1)), wr(f.d).slice(0, c) === wr(o.d).slice(0, c)) {
      for (t = l; t--;) o = Me(o.times(o), c, 1);
      if (r == null)
        if (u < 3 && ra(o.d, c - n, v, u)) m.precision = c += 10, i = a = f = new m(1), s = 0, u++;
        else return Me(o, m.precision = d, v, _e = !0);
      else return m.precision = d, o
    }
    o = f
  }
}

function It(e, r) {
  var i, n, t, a, o, f, c, u, s, l, m, v = 1,
    d = 10,
    p = e,
    b = p.d,
    g = p.constructor,
    N = g.rounding,
    h = g.precision;
  if (p.s < 0 || !b || !b[0] || !p.e && b[0] == 1 && b.length == 1) return new g(b && !b[0] ? -1 / 0 : p.s != 1 ? NaN : b ? 0 : p);
  if (r == null ? (_e = !1, s = h) : s = r, g.precision = s += d, i = wr(b), n = i.charAt(0), Math.abs(a = p.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && i.charAt(1) > 3;) p = p.times(e), i = wr(p.d), n = i.charAt(0), v++;
    a = p.e, n > 1 ? (p = new g("0." + i), a++) : p = new g(n + "." + i.slice(1))
  } else return u = Qa(g, s + 2, h).times(a + ""), p = It(new g(n + "." + i.slice(1)), s - d).plus(u), g.precision = h, r == null ? Me(p, h, N, _e = !0) : p;
  for (l = p, c = o = p = sr(p.minus(1), p.plus(1), s, 1), m = Me(p.times(p), s, 1), t = 3;;) {
    if (o = Me(o.times(m), s, 1), u = c.plus(sr(o, new g(t), s, 1)), wr(u.d).slice(0, s) === wr(c.d).slice(0, s))
      if (c = c.times(2), a !== 0 && (c = c.plus(Qa(g, s + 2, h).times(a + ""))), c = sr(c, new g(v), s, 1), r == null)
        if (ra(c.d, s - d, N, f)) g.precision = s += d, u = o = p = sr(l.minus(1), l.plus(1), s, 1), m = Me(p.times(p), s, 1), t = f = 1;
        else return Me(c, g.precision = h, N, _e = !0);
    else return g.precision = h, c;
    c = u, t += 2
  }
}

function pm(e) {
  return String(e.s * e.s / 0)
}

function Ki(e, r) {
  var i, n, t;
  for ((i = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (i < 0 && (i = n), i += +r.slice(n + 1), r = r.substring(0, n)) : i < 0 && (i = r.length), n = 0; r.charCodeAt(n) === 48; n++);
  for (t = r.length; r.charCodeAt(t - 1) === 48; --t);
  if (r = r.slice(n, t), r) {
    if (t -= n, e.e = i = i - n - 1, e.d = [], n = (i + 1) % Be, i < 0 && (n += Be), n < t) {
      for (n && e.d.push(+r.slice(0, n)), t -= Be; n < t;) e.d.push(+r.slice(n, n += Be));
      r = r.slice(n), n = Be - r.length
    } else n -= t;
    for (; n--;) r += "0";
    e.d.push(+r), _e && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
  } else e.e = 0, e.d = [0];
  return e
}

function Ih(e, r) {
  var i, n, t, a, o, f, c, u, s;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), cm.test(r)) return Ki(e, r)
  } else if (r === "Infinity" || r === "NaN") return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Bh.test(r)) i = 16, r = r.toLowerCase();
  else if (Fh.test(r)) i = 2;
  else if (Th.test(r)) i = 8;
  else throw Error(zt + r);
  for (a = r.search(/p/i), a > 0 ? (c = +r.slice(a + 1), r = r.substring(2, a)) : r = r.slice(2), a = r.indexOf("."), o = a >= 0, n = e.constructor, o && (r = r.replace(".", ""), f = r.length, a = f - a, t = mm(n, new n(i), a, a * 2)), u = Pa(r, i, nt), s = u.length - 1, a = s; u[a] === 0; --a) u.pop();
  return a < 0 ? new n(e.s * 0) : (e.e = gi(u, s), e.d = u, _e = !1, o && (e = sr(e, t, f * 4)), c && (e = e.times(Math.abs(c) < 54 ? vr(2, c) : Pt.pow(2, c))), _e = !0, e)
}

function qh(e, r) {
  var i, n = r.d.length;
  if (n < 3) return r.isZero() ? r : Mn(e, 2, r, r);
  i = 1.4 * Math.sqrt(n), i = i > 16 ? 16 : i | 0, r = r.times(1 / yi(5, i)), r = Mn(e, 2, r, r);
  for (var t, a = new e(5), o = new e(16), f = new e(20); i--;) t = r.times(r), r = r.times(a.plus(t.times(o.times(t).minus(f))));
  return r
}

function Mn(e, r, i, n, t) {
  var a, o, f, c, u = e.precision,
    s = Math.ceil(u / Be);
  for (_e = !1, c = i.times(i), f = new e(n);;) {
    if (o = sr(f.times(c), new e(r++ * r++), u, 1), f = t ? n.plus(o) : n.minus(o), n = sr(o.times(c), new e(r++ * r++), u, 1), o = f.plus(n), o.d[s] !== void 0) {
      for (a = s; o.d[a] === f.d[a] && a--;);
      if (a == -1) break
    }
    a = f, f = n, n = o, o = a
  }
  return _e = !0, o.d.length = s + 1, o
}

function yi(e, r) {
  for (var i = e; --r;) i *= e;
  return i
}

function dm(e, r) {
  var i, n = r.s < 0,
    t = tt(e, e.precision, 1),
    a = t.times(.5);
  if (r = r.abs(), r.lte(a)) return wt = n ? 4 : 1, r;
  if (i = r.divToInt(t), i.isZero()) wt = n ? 3 : 2;
  else {
    if (r = r.minus(i.times(t)), r.lte(a)) return wt = hs(i) ? n ? 2 : 3 : n ? 4 : 1, r;
    wt = hs(i) ? n ? 1 : 4 : n ? 3 : 2
  }
  return r.minus(t).abs()
}

function xo(e, r, i, n) {
  var t, a, o, f, c, u, s, l, m, v = e.constructor,
    d = i !== void 0;
  if (d ? (Pr(i, 1, Ut), n === void 0 ? n = v.rounding : Pr(n, 0, 8)) : (i = v.precision, n = v.rounding), !e.isFinite()) s = pm(e);
  else {
    for (s = pt(e), o = s.indexOf("."), d ? (t = 2, r == 16 ? i = i * 4 - 3 : r == 8 && (i = i * 3 - 2)) : t = r, o >= 0 && (s = s.replace(".", ""), m = new v(1), m.e = s.length - o, m.d = Pa(pt(m), 10, t), m.e = m.d.length), l = Pa(s, 10, t), a = c = l.length; l[--c] == 0;) l.pop();
    if (!l[0]) s = d ? "0p+0" : "0";
    else {
      if (o < 0 ? a-- : (e = new v(e), e.d = l, e.e = a, e = sr(e, m, i, n, 0, t), l = e.d, a = e.e, u = om), o = l[i], f = t / 2, u = u || l[i + 1] !== void 0, u = n < 4 ? (o !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : o > f || o === f && (n === 4 || u || n === 6 && l[i - 1] & 1 || n === (e.s < 0 ? 8 : 7)), l.length = i, u)
        for (; ++l[--i] > t - 1;) l[i] = 0, i || (++a, l.unshift(1));
      for (c = l.length; !l[c - 1]; --c);
      for (o = 0, s = ""; o < c; o++) s += Wi.charAt(l[o]);
      if (d) {
        if (c > 1)
          if (r == 16 || r == 8) {
            for (o = r == 16 ? 4 : 3, --c; c % o; c++) s += "0";
            for (l = Pa(s, t, r), c = l.length; !l[c - 1]; --c);
            for (o = 1, s = "1."; o < c; o++) s += Wi.charAt(l[o])
          } else s = s.charAt(0) + "." + s.slice(1);
        s = s + (a < 0 ? "p" : "p+") + a
      } else if (a < 0) {
        for (; ++a;) s = "0" + s;
        s = "0." + s
      } else if (++a > c)
        for (a -= c; a--;) s += "0";
      else a < c && (s = s.slice(0, a) + "." + s.slice(a))
    }
    s = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + s
  }
  return e.s < 0 ? "-" + s : s
}

function gs(e, r) {
  if (e.length > r) return e.length = r, !0
}

function Rh(e) {
  return new this(e).abs()
}

function zh(e) {
  return new this(e).acos()
}

function Ph(e) {
  return new this(e).acosh()
}

function Uh(e, r) {
  return new this(e).plus(r)
}

function Lh(e) {
  return new this(e).asin()
}

function kh(e) {
  return new this(e).asinh()
}

function Hh(e) {
  return new this(e).atan()
}

function Gh(e) {
  return new this(e).atanh()
}

function Vh(e, r) {
  e = new this(e), r = new this(r);
  var i, n = this.precision,
    t = this.rounding,
    a = n + 4;
  return !e.s || !r.s ? i = new this(NaN) : !e.d && !r.d ? (i = tt(this, a, 1).times(r.s > 0 ? .25 : .75), i.s = e.s) : !r.d || e.isZero() ? (i = r.s < 0 ? tt(this, n, t) : new this(0), i.s = e.s) : !e.d || r.isZero() ? (i = tt(this, a, 1).times(.5), i.s = e.s) : r.s < 0 ? (this.precision = a, this.rounding = 1, i = this.atan(sr(e, r, a, 1)), r = tt(this, a, 1), this.precision = n, this.rounding = t, i = e.s < 0 ? i.minus(r) : i.plus(r)) : i = this.atan(sr(e, r, a, 1)), i
}

function Zh(e) {
  return new this(e).cbrt()
}

function Yh(e) {
  return Me(e = new this(e), e.e + 1, 2)
}

function Wh(e, r, i) {
  return new this(e).clamp(r, i)
}

function Qh(e) {
  if (!e || typeof e != "object") throw Error(hi + "Object expected");
  var r, i, n, t = e.defaults === !0,
    a = ["precision", 1, Ut, "rounding", 0, 8, "toExpNeg", -bn, 0, "toExpPos", 0, bn, "maxE", 0, bn, "minE", -bn, 0, "modulo", 0, 9];
  for (r = 0; r < a.length; r += 3)
    if (i = a[r], t && (this[i] = Qi[i]), (n = e[i]) !== void 0)
      if (Sr(n) === n && n >= a[r + 1] && n <= a[r + 2]) this[i] = n;
      else throw Error(zt + i + ": " + n);
  if (i = "crypto", t && (this[i] = Qi[i]), (n = e[i]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[i] = !0;
        else throw Error(um);
  else this[i] = !1;
  else throw Error(zt + i + ": " + n);
  return this
}

function Xh(e) {
  return new this(e).cos()
}

function Jh(e) {
  return new this(e).cosh()
}

function hm(e) {
  var r, i, n;

  function t(a) {
    var o, f, c, u = this;
    if (!(u instanceof t)) return new t(a);
    if (u.constructor = t, ys(a)) {
      u.s = a.s, _e ? !a.d || a.e > t.maxE ? (u.e = NaN, u.d = null) : a.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return
    }
    if (c = typeof a, c === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (o = 0, f = a; f >= 10; f /= 10) o++;
        _e ? o > t.maxE ? (u.e = NaN, u.d = null) : o < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o, u.d = [a]) : (u.e = o, u.d = [a]);
        return
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return
      }
      return Ki(u, a.toString())
    } else if (c !== "string") throw Error(zt + a);
    return (f = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (f === 43 && (a = a.slice(1)), u.s = 1), cm.test(a) ? Ki(u, a) : Ih(u, a)
  }
  if (t.prototype = de, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Qh, t.clone = hm, t.isDecimal = ys, t.abs = Rh, t.acos = zh, t.acosh = Ph, t.add = Uh, t.asin = Lh, t.asinh = kh, t.atan = Hh, t.atanh = Gh, t.atan2 = Vh, t.cbrt = Zh, t.ceil = Yh, t.clamp = Wh, t.cos = Xh, t.cosh = Jh, t.div = Kh, t.exp = jh, t.floor = e0, t.hypot = r0, t.ln = t0, t.log = n0, t.log10 = i0, t.log2 = a0, t.max = o0, t.min = s0, t.mod = u0, t.mul = l0, t.pow = c0, t.random = f0, t.round = m0, t.sign = v0, t.sin = p0, t.sinh = d0, t.sqrt = h0, t.sub = g0, t.sum = y0, t.tan = b0, t.tanh = x0, t.trunc = w0, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length;) e.hasOwnProperty(i = n[r++]) || (e[i] = this[i]);
  return t.config(e), t
}

function Kh(e, r) {
  return new this(e).div(r)
}

function jh(e) {
  return new this(e).exp()
}

function e0(e) {
  return Me(e = new this(e), e.e + 1, 3)
}

function r0() {
  var e, r, i = new this(0);
  for (_e = !1, e = 0; e < arguments.length;)
    if (r = new this(arguments[e++]), r.d) i.d && (i = i.plus(r.times(r)));
    else {
      if (r.s) return _e = !0, new this(1 / 0);
      i = r
    } return _e = !0, i.sqrt()
}

function ys(e) {
  return e instanceof Pt || e && e.toStringTag === lm || !1
}

function t0(e) {
  return new this(e).ln()
}

function n0(e, r) {
  return new this(e).log(r)
}

function a0(e) {
  return new this(e).log(2)
}

function i0(e) {
  return new this(e).log(10)
}

function o0() {
  return vm(this, arguments, "lt")
}

function s0() {
  return vm(this, arguments, "gt")
}

function u0(e, r) {
  return new this(e).mod(r)
}

function l0(e, r) {
  return new this(e).mul(r)
}

function c0(e, r) {
  return new this(e).pow(r)
}

function f0(e) {
  var r, i, n, t, a = 0,
    o = new this(1),
    f = [];
  if (e === void 0 ? e = this.precision : Pr(e, 1, Ut), n = Math.ceil(e / Be), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(n)); a < n;) t = r[a], t >= 429e7 ? r[a] = crypto.getRandomValues(new Uint32Array(1))[0] : f[a++] = t % 1e7;
    else if (crypto.randomBytes) {
    for (r = crypto.randomBytes(n *= 4); a < n;) t = r[a] + (r[a + 1] << 8) + (r[a + 2] << 16) + ((r[a + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(r, a) : (f.push(t % 1e7), a += 4);
    a = n / 4
  } else throw Error(um);
  else
    for (; a < n;) f[a++] = Math.random() * 1e7 | 0;
  for (n = f[--a], e %= Be, n && e && (t = vr(10, Be - e), f[a] = (n / t | 0) * t); f[a] === 0; a--) f.pop();
  if (a < 0) i = 0, f = [0];
  else {
    for (i = -1; f[0] === 0; i -= Be) f.shift();
    for (n = 1, t = f[0]; t >= 10; t /= 10) n++;
    n < Be && (i -= Be - n)
  }
  return o.e = i, o.d = f, o
}

function m0(e) {
  return Me(e = new this(e), e.e + 1, this.rounding)
}

function v0(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
}

function p0(e) {
  return new this(e).sin()
}

function d0(e) {
  return new this(e).sinh()
}

function h0(e) {
  return new this(e).sqrt()
}

function g0(e, r) {
  return new this(e).sub(r)
}

function y0() {
  var e = 0,
    r = arguments,
    i = new this(r[e]);
  for (_e = !1; i.s && ++e < r.length;) i = i.plus(r[e]);
  return _e = !0, Me(i, this.precision, this.rounding)
}

function b0(e) {
  return new this(e).tan()
}

function x0(e) {
  return new this(e).tanh()
}

function w0(e) {
  return Me(e = new this(e), e.e + 1, 1)
}
de[Symbol.for("nodejs.util.inspect.custom")] = de.toString;
de[Symbol.toStringTag] = "Decimal";
var Pt = de.constructor = hm(Qi);
Ya = new Pt(Ya);
Wa = new Pt(Wa);
var N0 = "BigNumber",
  D0 = ["?on", "config"],
  A0 = z(N0, D0, e => {
    var {
      on: r,
      config: i
    } = e, n = Pt.clone({
      precision: i.precision,
      modulo: Pt.EUCLID
    });
    return n.prototype = Object.create(n.prototype), n.prototype.type = "BigNumber", n.prototype.isBigNumber = !0, n.prototype.toJSON = function() {
      return {
        mathjs: "BigNumber",
        value: this.toString()
      }
    }, n.fromJSON = function(t) {
      return new n(t.value)
    }, r && r("config", function(t, a) {
      t.precision !== a.precision && n.config({
        precision: t.precision
      })
    }), n
  }, {
    isClass: !0
  }),
  Xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function ua(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function E0(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var i = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments)
    };
    i.prototype = r.prototype
  } else i = {};
  return Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.keys(e).forEach(function(n) {
    var t = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(i, n, t.get ? t : {
      enumerable: !0,
      get: function() {
        return e[n]
      }
    })
  }), i
}
var gm = {
  exports: {}
};
/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(e, r) {
  (function(i) {
    var n = Math.cosh || function(l) {
        return Math.abs(l) < 1e-9 ? 1 - l : (Math.exp(l) + Math.exp(-l)) * .5
      },
      t = Math.sinh || function(l) {
        return Math.abs(l) < 1e-9 ? l : (Math.exp(l) - Math.exp(-l)) * .5
      },
      a = function(l) {
        var m = Math.PI / 4;
        if (-m > l || l > m) return Math.cos(l) - 1;
        var v = l * l;
        return v * (v * (v * (v * (v * (v * (v * (v / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2)
      },
      o = function(l, m) {
        var v = Math.abs(l),
          d = Math.abs(m);
        return v < 3e3 && d < 3e3 ? Math.sqrt(v * v + d * d) : (v < d ? (v = d, d = l / m) : d = m / l, v * Math.sqrt(1 + d * d))
      },
      f = function() {
        throw SyntaxError("Invalid Param")
      };

    function c(l, m) {
      var v = Math.abs(l),
        d = Math.abs(m);
      return l === 0 ? Math.log(d) : m === 0 ? Math.log(v) : v < 3e3 && d < 3e3 ? Math.log(l * l + m * m) * .5 : (l = l / 2, m = m / 2, .5 * Math.log(l * l + m * m) + Math.LN2)
    }
    var u = function(l, m) {
      var v = {
        re: 0,
        im: 0
      };
      if (l == null) v.re = v.im = 0;
      else if (m !== void 0) v.re = l, v.im = m;
      else switch (typeof l) {
        case "object":
          if ("im" in l && "re" in l) v.re = l.re, v.im = l.im;
          else if ("abs" in l && "arg" in l) {
            if (!Number.isFinite(l.abs) && Number.isFinite(l.arg)) return s.INFINITY;
            v.re = l.abs * Math.cos(l.arg), v.im = l.abs * Math.sin(l.arg)
          } else if ("r" in l && "phi" in l) {
            if (!Number.isFinite(l.r) && Number.isFinite(l.phi)) return s.INFINITY;
            v.re = l.r * Math.cos(l.phi), v.im = l.r * Math.sin(l.phi)
          } else l.length === 2 ? (v.re = l[0], v.im = l[1]) : f();
          break;
        case "string":
          v.im = v.re = 0;
          var d = l.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),
            p = 1,
            b = 0;
          d === null && f();
          for (var g = 0; g < d.length; g++) {
            var N = d[g];
            N === " " || N === "	" || N === `
` || (N === "+" ? p++ : N === "-" ? b++ : N === "i" || N === "I" ? (p + b === 0 && f(), d[g + 1] !== " " && !isNaN(d[g + 1]) ? (v.im += parseFloat((b % 2 ? "-" : "") + d[g + 1]), g++) : v.im += parseFloat((b % 2 ? "-" : "") + "1"), p = b = 0) : ((p + b === 0 || isNaN(N)) && f(), d[g + 1] === "i" || d[g + 1] === "I" ? (v.im += parseFloat((b % 2 ? "-" : "") + N), g++) : v.re += parseFloat((b % 2 ? "-" : "") + N), p = b = 0))
          }
          p + b > 0 && f();
          break;
        case "number":
          v.im = 0, v.re = l;
          break;
        default:
          f()
      }
      return isNaN(v.re) || isNaN(v.im), v
    };

    function s(l, m) {
      if (!(this instanceof s)) return new s(l, m);
      var v = u(l, m);
      this.re = v.re, this.im = v.im
    }
    s.prototype = {
      re: 0,
      im: 0,
      sign: function() {
        var l = this.abs();
        return new s(this.re / l, this.im / l)
      },
      add: function(l, m) {
        var v = new s(l, m);
        return this.isInfinite() && v.isInfinite() ? s.NAN : this.isInfinite() || v.isInfinite() ? s.INFINITY : new s(this.re + v.re, this.im + v.im)
      },
      sub: function(l, m) {
        var v = new s(l, m);
        return this.isInfinite() && v.isInfinite() ? s.NAN : this.isInfinite() || v.isInfinite() ? s.INFINITY : new s(this.re - v.re, this.im - v.im)
      },
      mul: function(l, m) {
        var v = new s(l, m);
        return this.isInfinite() && v.isZero() || this.isZero() && v.isInfinite() ? s.NAN : this.isInfinite() || v.isInfinite() ? s.INFINITY : v.im === 0 && this.im === 0 ? new s(this.re * v.re, 0) : new s(this.re * v.re - this.im * v.im, this.re * v.im + this.im * v.re)
      },
      div: function(l, m) {
        var v = new s(l, m);
        if (this.isZero() && v.isZero() || this.isInfinite() && v.isInfinite()) return s.NAN;
        if (this.isInfinite() || v.isZero()) return s.INFINITY;
        if (this.isZero() || v.isInfinite()) return s.ZERO;
        l = this.re, m = this.im;
        var d = v.re,
          p = v.im,
          b, g;
        return p === 0 ? new s(l / d, m / d) : Math.abs(d) < Math.abs(p) ? (g = d / p, b = d * g + p, new s((l * g + m) / b, (m * g - l) / b)) : (g = p / d, b = p * g + d, new s((l + m * g) / b, (m - l * g) / b))
      },
      pow: function(l, m) {
        var v = new s(l, m);
        if (l = this.re, m = this.im, v.isZero()) return s.ONE;
        if (v.im === 0) {
          if (m === 0 && l > 0) return new s(Math.pow(l, v.re), 0);
          if (l === 0) switch ((v.re % 4 + 4) % 4) {
            case 0:
              return new s(Math.pow(m, v.re), 0);
            case 1:
              return new s(0, Math.pow(m, v.re));
            case 2:
              return new s(-Math.pow(m, v.re), 0);
            case 3:
              return new s(0, -Math.pow(m, v.re))
          }
        }
        if (l === 0 && m === 0 && v.re > 0 && v.im >= 0) return s.ZERO;
        var d = Math.atan2(m, l),
          p = c(l, m);
        return l = Math.exp(v.re * p - v.im * d), m = v.im * p + v.re * d, new s(l * Math.cos(m), l * Math.sin(m))
      },
      sqrt: function() {
        var l = this.re,
          m = this.im,
          v = this.abs(),
          d, p;
        if (l >= 0) {
          if (m === 0) return new s(Math.sqrt(l), 0);
          d = .5 * Math.sqrt(2 * (v + l))
        } else d = Math.abs(m) / Math.sqrt(2 * (v - l));
        return l <= 0 ? p = .5 * Math.sqrt(2 * (v - l)) : p = Math.abs(m) / Math.sqrt(2 * (v + l)), new s(d, m < 0 ? -p : p)
      },
      exp: function() {
        var l = Math.exp(this.re);
        return this.im, new s(l * Math.cos(this.im), l * Math.sin(this.im))
      },
      expm1: function() {
        var l = this.re,
          m = this.im;
        return new s(Math.expm1(l) * Math.cos(m) + a(m), Math.exp(l) * Math.sin(m))
      },
      log: function() {
        var l = this.re,
          m = this.im;
        return new s(c(l, m), Math.atan2(m, l))
      },
      abs: function() {
        return o(this.re, this.im)
      },
      arg: function() {
        return Math.atan2(this.im, this.re)
      },
      sin: function() {
        var l = this.re,
          m = this.im;
        return new s(Math.sin(l) * n(m), Math.cos(l) * t(m))
      },
      cos: function() {
        var l = this.re,
          m = this.im;
        return new s(Math.cos(l) * n(m), -Math.sin(l) * t(m))
      },
      tan: function() {
        var l = 2 * this.re,
          m = 2 * this.im,
          v = Math.cos(l) + n(m);
        return new s(Math.sin(l) / v, t(m) / v)
      },
      cot: function() {
        var l = 2 * this.re,
          m = 2 * this.im,
          v = Math.cos(l) - n(m);
        return new s(-Math.sin(l) / v, t(m) / v)
      },
      sec: function() {
        var l = this.re,
          m = this.im,
          v = .5 * n(2 * m) + .5 * Math.cos(2 * l);
        return new s(Math.cos(l) * n(m) / v, Math.sin(l) * t(m) / v)
      },
      csc: function() {
        var l = this.re,
          m = this.im,
          v = .5 * n(2 * m) - .5 * Math.cos(2 * l);
        return new s(Math.sin(l) * n(m) / v, -Math.cos(l) * t(m) / v)
      },
      asin: function() {
        var l = this.re,
          m = this.im,
          v = new s(m * m - l * l + 1, -2 * l * m).sqrt(),
          d = new s(v.re - m, v.im + l).log();
        return new s(d.im, -d.re)
      },
      acos: function() {
        var l = this.re,
          m = this.im,
          v = new s(m * m - l * l + 1, -2 * l * m).sqrt(),
          d = new s(v.re - m, v.im + l).log();
        return new s(Math.PI / 2 - d.im, d.re)
      },
      atan: function() {
        var l = this.re,
          m = this.im;
        if (l === 0) {
          if (m === 1) return new s(0, 1 / 0);
          if (m === -1) return new s(0, -1 / 0)
        }
        var v = l * l + (1 - m) * (1 - m),
          d = new s((1 - m * m - l * l) / v, -2 * l / v).log();
        return new s(-.5 * d.im, .5 * d.re)
      },
      acot: function() {
        var l = this.re,
          m = this.im;
        if (m === 0) return new s(Math.atan2(1, l), 0);
        var v = l * l + m * m;
        return v !== 0 ? new s(l / v, -m / v).atan() : new s(l !== 0 ? l / 0 : 0, m !== 0 ? -m / 0 : 0).atan()
      },
      asec: function() {
        var l = this.re,
          m = this.im;
        if (l === 0 && m === 0) return new s(0, 1 / 0);
        var v = l * l + m * m;
        return v !== 0 ? new s(l / v, -m / v).acos() : new s(l !== 0 ? l / 0 : 0, m !== 0 ? -m / 0 : 0).acos()
      },
      acsc: function() {
        var l = this.re,
          m = this.im;
        if (l === 0 && m === 0) return new s(Math.PI / 2, 1 / 0);
        var v = l * l + m * m;
        return v !== 0 ? new s(l / v, -m / v).asin() : new s(l !== 0 ? l / 0 : 0, m !== 0 ? -m / 0 : 0).asin()
      },
      sinh: function() {
        var l = this.re,
          m = this.im;
        return new s(t(l) * Math.cos(m), n(l) * Math.sin(m))
      },
      cosh: function() {
        var l = this.re,
          m = this.im;
        return new s(n(l) * Math.cos(m), t(l) * Math.sin(m))
      },
      tanh: function() {
        var l = 2 * this.re,
          m = 2 * this.im,
          v = n(l) + Math.cos(m);
        return new s(t(l) / v, Math.sin(m) / v)
      },
      coth: function() {
        var l = 2 * this.re,
          m = 2 * this.im,
          v = n(l) - Math.cos(m);
        return new s(t(l) / v, -Math.sin(m) / v)
      },
      csch: function() {
        var l = this.re,
          m = this.im,
          v = Math.cos(2 * m) - n(2 * l);
        return new s(-2 * t(l) * Math.cos(m) / v, 2 * n(l) * Math.sin(m) / v)
      },
      sech: function() {
        var l = this.re,
          m = this.im,
          v = Math.cos(2 * m) + n(2 * l);
        return new s(2 * n(l) * Math.cos(m) / v, -2 * t(l) * Math.sin(m) / v)
      },
      asinh: function() {
        var l = this.im;
        this.im = -this.re, this.re = l;
        var m = this.asin();
        return this.re = -this.im, this.im = l, l = m.re, m.re = -m.im, m.im = l, m
      },
      acosh: function() {
        var l = this.acos();
        if (l.im <= 0) {
          var m = l.re;
          l.re = -l.im, l.im = m
        } else {
          var m = l.im;
          l.im = -l.re, l.re = m
        }
        return l
      },
      atanh: function() {
        var l = this.re,
          m = this.im,
          v = l > 1 && m === 0,
          d = 1 - l,
          p = 1 + l,
          b = d * d + m * m,
          g = b !== 0 ? new s((p * d - m * m) / b, (m * d + p * m) / b) : new s(l !== -1 ? l / 0 : 0, m !== 0 ? m / 0 : 0),
          N = g.re;
        return g.re = c(g.re, g.im) / 2, g.im = Math.atan2(g.im, N) / 2, v && (g.im = -g.im), g
      },
      acoth: function() {
        var l = this.re,
          m = this.im;
        if (l === 0 && m === 0) return new s(0, Math.PI / 2);
        var v = l * l + m * m;
        return v !== 0 ? new s(l / v, -m / v).atanh() : new s(l !== 0 ? l / 0 : 0, m !== 0 ? -m / 0 : 0).atanh()
      },
      acsch: function() {
        var l = this.re,
          m = this.im;
        if (m === 0) return new s(l !== 0 ? Math.log(l + Math.sqrt(l * l + 1)) : 1 / 0, 0);
        var v = l * l + m * m;
        return v !== 0 ? new s(l / v, -m / v).asinh() : new s(l !== 0 ? l / 0 : 0, m !== 0 ? -m / 0 : 0).asinh()
      },
      asech: function() {
        var l = this.re,
          m = this.im;
        if (this.isZero()) return s.INFINITY;
        var v = l * l + m * m;
        return v !== 0 ? new s(l / v, -m / v).acosh() : new s(l !== 0 ? l / 0 : 0, m !== 0 ? -m / 0 : 0).acosh()
      },
      inverse: function() {
        if (this.isZero()) return s.INFINITY;
        if (this.isInfinite()) return s.ZERO;
        var l = this.re,
          m = this.im,
          v = l * l + m * m;
        return new s(l / v, -m / v)
      },
      conjugate: function() {
        return new s(this.re, -this.im)
      },
      neg: function() {
        return new s(-this.re, -this.im)
      },
      ceil: function(l) {
        return l = Math.pow(10, l || 0), new s(Math.ceil(this.re * l) / l, Math.ceil(this.im * l) / l)
      },
      floor: function(l) {
        return l = Math.pow(10, l || 0), new s(Math.floor(this.re * l) / l, Math.floor(this.im * l) / l)
      },
      round: function(l) {
        return l = Math.pow(10, l || 0), new s(Math.round(this.re * l) / l, Math.round(this.im * l) / l)
      },
      equals: function(l, m) {
        var v = new s(l, m);
        return Math.abs(v.re - this.re) <= s.EPSILON && Math.abs(v.im - this.im) <= s.EPSILON
      },
      clone: function() {
        return new s(this.re, this.im)
      },
      toString: function() {
        var l = this.re,
          m = this.im,
          v = "";
        return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(l) < s.EPSILON && (l = 0), Math.abs(m) < s.EPSILON && (m = 0), m === 0 ? v + l : (l !== 0 ? (v += l, v += " ", m < 0 ? (m = -m, v += "-") : v += "+", v += " ") : m < 0 && (m = -m, v += "-"), m !== 1 && (v += m), v + "i"))
      },
      toVector: function() {
        return [this.re, this.im]
      },
      valueOf: function() {
        return this.im === 0 ? this.re : null
      },
      isNaN: function() {
        return isNaN(this.re) || isNaN(this.im)
      },
      isZero: function() {
        return this.im === 0 && this.re === 0
      },
      isFinite: function() {
        return isFinite(this.re) && isFinite(this.im)
      },
      isInfinite: function() {
        return !(this.isNaN() || this.isFinite())
      }
    }, s.ZERO = new s(0, 0), s.ONE = new s(1, 0), s.I = new s(0, 1), s.PI = new s(Math.PI, 0), s.E = new s(Math.E, 0), s.INFINITY = new s(1 / 0, 1 / 0), s.NAN = new s(NaN, NaN), s.EPSILON = 1e-15, Object.defineProperty(s, "__esModule", {
      value: !0
    }), s.default = s, s.Complex = s, e.exports = s
  })()
})(gm);
var S0 = gm.exports;
const xr = ua(S0);
var C0 = "Complex",
  M0 = [],
  F0 = z(C0, M0, () => (Object.defineProperty(xr, "name", {
    value: "Complex"
  }), xr.prototype.constructor = xr, xr.prototype.type = "Complex", xr.prototype.isComplex = !0, xr.prototype.toJSON = function() {
    return {
      mathjs: "Complex",
      re: this.re,
      im: this.im
    }
  }, xr.prototype.toPolar = function() {
    return {
      r: this.abs(),
      phi: this.arg()
    }
  }, xr.prototype.format = function(e) {
    var r = "",
      i = this.im,
      n = this.re,
      t = Yt(this.re, e),
      a = Yt(this.im, e),
      o = Pe(e) ? e : e ? e.precision : null;
    if (o !== null) {
      var f = Math.pow(10, -o);
      Math.abs(n / i) < f && (n = 0), Math.abs(i / n) < f && (i = 0)
    }
    return i === 0 ? r = t : n === 0 ? i === 1 ? r = "i" : i === -1 ? r = "-i" : r = a + "i" : i < 0 ? i === -1 ? r = t + " - i" : r = t + " - " + a.substring(1) + "i" : i === 1 ? r = t + " + i" : r = t + " + " + a + "i", r
  }, xr.fromPolar = function(e) {
    switch (arguments.length) {
      case 1: {
        var r = arguments[0];
        if (typeof r == "object") return xr(r);
        throw new TypeError("Input has to be an object with r and phi keys.")
      }
      case 2: {
        var i = arguments[0],
          n = arguments[1];
        if (Pe(i)) {
          if (Yr(n) && n.hasBase("ANGLE") && (n = n.toNumber("rad")), Pe(n)) return new xr({
            r: i,
            phi: n
          });
          throw new TypeError("Phi is not a number nor an angle unit.")
        } else throw new TypeError("Radius r is not a number.")
      }
      default:
        throw new SyntaxError("Wrong number of arguments in function fromPolar")
    }
  }, xr.prototype.valueOf = xr.prototype.toString, xr.fromJSON = function(e) {
    return new xr(e)
  }, xr.compare = function(e, r) {
    return e.re > r.re ? 1 : e.re < r.re ? -1 : e.im > r.im ? 1 : e.im < r.im ? -1 : 0
  }, xr), {
    isClass: !0
  }),
  ym = {
    exports: {}
  };
/**
 * @license Fraction.js v4.3.0 20/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(e, r) {
  (function(i) {
    var n = 2e3,
      t = {
        s: 1,
        n: 0,
        d: 1
      };

    function a(g, N) {
      if (isNaN(g = parseInt(g, 10))) throw p();
      return g * N
    }

    function o(g, N) {
      if (N === 0) throw d();
      var h = Object.create(v.prototype);
      h.s = g < 0 ? -1 : 1, g = g < 0 ? -g : g;
      var x = m(g, N);
      return h.n = g / x, h.d = N / x, h
    }

    function f(g) {
      for (var N = {}, h = g, x = 2, w = 4; w <= h;) {
        for (; h % x === 0;) h /= x, N[x] = (N[x] || 0) + 1;
        w += 1 + 2 * x++
      }
      return h !== g ? h > 1 && (N[h] = (N[h] || 0) + 1) : N[g] = (N[g] || 0) + 1, N
    }
    var c = function(g, N) {
      var h = 0,
        x = 1,
        w = 1,
        y = 0,
        A = 0,
        E = 0,
        D = 1,
        S = 1,
        C = 0,
        M = 1,
        $ = 1,
        I = 1,
        _ = 1e7,
        T;
      if (g != null)
        if (N !== void 0) {
          if (h = g, x = N, w = h * x, h % 1 !== 0 || x % 1 !== 0) throw b()
        } else switch (typeof g) {
          case "object": {
            if ("d" in g && "n" in g) h = g.n, x = g.d, "s" in g && (h *= g.s);
            else if (0 in g) h = g[0], 1 in g && (x = g[1]);
            else throw p();
            w = h * x;
            break
          }
          case "number": {
            if (g < 0 && (w = g, g = -g), g % 1 === 0) h = g;
            else if (g > 0) {
              for (g >= 1 && (S = Math.pow(10, Math.floor(1 + Math.log(g) / Math.LN10)), g /= S); M <= _ && I <= _;)
                if (T = (C + $) / (M + I), g === T) {
                  M + I <= _ ? (h = C + $, x = M + I) : I > M ? (h = $, x = I) : (h = C, x = M);
                  break
                } else g > T ? (C += $, M += I) : ($ += C, I += M), M > _ ? (h = $, x = I) : (h = C, x = M);
              h *= S
            } else(isNaN(g) || isNaN(N)) && (x = h = NaN);
            break
          }
          case "string": {
            if (M = g.match(/\d+|./g), M === null) throw p();
            if (M[C] === "-" ? (w = -1, C++) : M[C] === "+" && C++, M.length === C + 1 ? A = a(M[C++], w) : M[C + 1] === "." || M[C] === "." ? (M[C] !== "." && (y = a(M[C++], w)), C++, (C + 1 === M.length || M[C + 1] === "(" && M[C + 3] === ")" || M[C + 1] === "'" && M[C + 3] === "'") && (A = a(M[C], w), D = Math.pow(10, M[C].length), C++), (M[C] === "(" && M[C + 2] === ")" || M[C] === "'" && M[C + 2] === "'") && (E = a(M[C + 1], w), S = Math.pow(10, M[C + 1].length) - 1, C += 3)) : M[C + 1] === "/" || M[C + 1] === ":" ? (A = a(M[C], w), D = a(M[C + 2], 1), C += 3) : M[C + 3] === "/" && M[C + 1] === " " && (y = a(M[C], w), A = a(M[C + 2], w), D = a(M[C + 4], 1), C += 5), M.length <= C) {
              x = D * S, w = h = E + x * y + S * A;
              break
            }
          }
          default:
            throw p()
        }
      if (x === 0) throw d();
      t.s = w < 0 ? -1 : 1, t.n = Math.abs(h), t.d = Math.abs(x)
    };

    function u(g, N, h) {
      for (var x = 1; N > 0; g = g * g % h, N >>= 1) N & 1 && (x = x * g % h);
      return x
    }

    function s(g, N) {
      for (; N % 2 === 0; N /= 2);
      for (; N % 5 === 0; N /= 5);
      if (N === 1) return 0;
      for (var h = 10 % N, x = 1; h !== 1; x++)
        if (h = h * 10 % N, x > n) return 0;
      return x
    }

    function l(g, N, h) {
      for (var x = 1, w = u(10, h, N), y = 0; y < 300; y++) {
        if (x === w) return y;
        x = x * 10 % N, w = w * 10 % N
      }
      return 0
    }

    function m(g, N) {
      if (!g) return N;
      if (!N) return g;
      for (;;) {
        if (g %= N, !g) return N;
        if (N %= g, !N) return g
      }
    }

    function v(g, N) {
      if (c(g, N), this instanceof v) g = m(t.d, t.n), this.s = t.s, this.n = t.n / g, this.d = t.d / g;
      else return o(t.s * t.n, t.d)
    }
    var d = function() {
        return new Error("Division by Zero")
      },
      p = function() {
        return new Error("Invalid argument")
      },
      b = function() {
        return new Error("Parameters must be integer")
      };
    v.prototype = {
      s: 1,
      n: 0,
      d: 1,
      abs: function() {
        return o(this.n, this.d)
      },
      neg: function() {
        return o(-this.s * this.n, this.d)
      },
      add: function(g, N) {
        return c(g, N), o(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d)
      },
      sub: function(g, N) {
        return c(g, N), o(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d)
      },
      mul: function(g, N) {
        return c(g, N), o(this.s * t.s * this.n * t.n, this.d * t.d)
      },
      div: function(g, N) {
        return c(g, N), o(this.s * t.s * this.n * t.d, this.d * t.n)
      },
      clone: function() {
        return o(this.s * this.n, this.d)
      },
      mod: function(g, N) {
        if (isNaN(this.n) || isNaN(this.d)) return new v(NaN);
        if (g === void 0) return o(this.s * this.n % this.d, 1);
        if (c(g, N), t.n === 0 && this.d === 0) throw d();
        return o(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d)
      },
      gcd: function(g, N) {
        return c(g, N), o(m(t.n, this.n) * m(t.d, this.d), t.d * this.d)
      },
      lcm: function(g, N) {
        return c(g, N), t.n === 0 && this.n === 0 ? o(0, 1) : o(t.n * this.n, m(t.n, this.n) * m(t.d, this.d))
      },
      ceil: function(g) {
        return g = Math.pow(10, g || 0), isNaN(this.n) || isNaN(this.d) ? new v(NaN) : o(Math.ceil(g * this.s * this.n / this.d), g)
      },
      floor: function(g) {
        return g = Math.pow(10, g || 0), isNaN(this.n) || isNaN(this.d) ? new v(NaN) : o(Math.floor(g * this.s * this.n / this.d), g)
      },
      round: function(g) {
        return g = Math.pow(10, g || 0), isNaN(this.n) || isNaN(this.d) ? new v(NaN) : o(Math.round(g * this.s * this.n / this.d), g)
      },
      inverse: function() {
        return o(this.s * this.d, this.n)
      },
      pow: function(g, N) {
        if (c(g, N), t.d === 1) return t.s < 0 ? o(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : o(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
        if (this.s < 0) return null;
        var h = f(this.n),
          x = f(this.d),
          w = 1,
          y = 1;
        for (var A in h)
          if (A !== "1") {
            if (A === "0") {
              w = 0;
              break
            }
            if (h[A] *= t.n, h[A] % t.d === 0) h[A] /= t.d;
            else return null;
            w *= Math.pow(A, h[A])
          } for (var A in x)
          if (A !== "1") {
            if (x[A] *= t.n, x[A] % t.d === 0) x[A] /= t.d;
            else return null;
            y *= Math.pow(A, x[A])
          } return t.s < 0 ? o(y, w) : o(w, y)
      },
      equals: function(g, N) {
        return c(g, N), this.s * this.n * t.d === t.s * t.n * this.d
      },
      compare: function(g, N) {
        c(g, N);
        var h = this.s * this.n * t.d - t.s * t.n * this.d;
        return (0 < h) - (h < 0)
      },
      simplify: function(g) {
        if (isNaN(this.n) || isNaN(this.d)) return this;
        g = g || .001;
        for (var N = this.abs(), h = N.toContinued(), x = 1; x < h.length; x++) {
          for (var w = o(h[x - 1], 1), y = x - 2; y >= 0; y--) w = w.inverse().add(h[y]);
          if (Math.abs(w.sub(N).valueOf()) < g) return w.mul(this.s)
        }
        return this
      },
      divisible: function(g, N) {
        return c(g, N), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d))
      },
      valueOf: function() {
        return this.s * this.n / this.d
      },
      toFraction: function(g) {
        var N, h = "",
          x = this.n,
          w = this.d;
        return this.s < 0 && (h += "-"), w === 1 ? h += x : (g && (N = Math.floor(x / w)) > 0 && (h += N, h += " ", x %= w), h += x, h += "/", h += w), h
      },
      toLatex: function(g) {
        var N, h = "",
          x = this.n,
          w = this.d;
        return this.s < 0 && (h += "-"), w === 1 ? h += x : (g && (N = Math.floor(x / w)) > 0 && (h += N, x %= w), h += "\\frac{", h += x, h += "}{", h += w, h += "}"), h
      },
      toContinued: function() {
        var g, N = this.n,
          h = this.d,
          x = [];
        if (isNaN(N) || isNaN(h)) return x;
        do x.push(Math.floor(N / h)), g = N % h, N = h, h = g; while (N !== 1);
        return x
      },
      toString: function(g) {
        var N = this.n,
          h = this.d;
        if (isNaN(N) || isNaN(h)) return "NaN";
        g = g || 15;
        var x = s(N, h),
          w = l(N, h, x),
          y = this.s < 0 ? "-" : "";
        if (y += N / h | 0, N %= h, N *= 10, N && (y += "."), x) {
          for (var A = w; A--;) y += N / h | 0, N %= h, N *= 10;
          y += "(";
          for (var A = x; A--;) y += N / h | 0, N %= h, N *= 10;
          y += ")"
        } else
          for (var A = g; N && A--;) y += N / h | 0, N %= h, N *= 10;
        return y
      }
    }, Object.defineProperty(v, "__esModule", {
      value: !0
    }), v.default = v, v.Fraction = v, e.exports = v
  })()
})(ym);
var B0 = ym.exports;
const bt = ua(B0);
var T0 = "Fraction",
  O0 = [],
  $0 = z(T0, O0, () => (Object.defineProperty(bt, "name", {
    value: "Fraction"
  }), bt.prototype.constructor = bt, bt.prototype.type = "Fraction", bt.prototype.isFraction = !0, bt.prototype.toJSON = function() {
    return {
      mathjs: "Fraction",
      n: this.s * this.n,
      d: this.d
    }
  }, bt.fromJSON = function(e) {
    return new bt(e)
  }, bt), {
    isClass: !0
  }),
  _0 = "Range",
  I0 = [],
  q0 = z(_0, I0, () => {
    function e(r, i, n) {
      if (!(this instanceof e)) throw new SyntaxError("Constructor must be called with the new operator");
      var t = r != null,
        a = i != null,
        o = n != null;
      if (t) {
        if (He(r)) r = r.toNumber();
        else if (typeof r != "number") throw new TypeError("Parameter start must be a number")
      }
      if (a) {
        if (He(i)) i = i.toNumber();
        else if (typeof i != "number") throw new TypeError("Parameter end must be a number")
      }
      if (o) {
        if (He(n)) n = n.toNumber();
        else if (typeof n != "number") throw new TypeError("Parameter step must be a number")
      }
      this.start = t ? parseFloat(r) : 0, this.end = a ? parseFloat(i) : 0, this.step = o ? parseFloat(n) : 1
    }
    return e.prototype.type = "Range", e.prototype.isRange = !0, e.parse = function(r) {
      if (typeof r != "string") return null;
      var i = r.split(":"),
        n = i.map(function(a) {
          return parseFloat(a)
        }),
        t = n.some(function(a) {
          return isNaN(a)
        });
      if (t) return null;
      switch (n.length) {
        case 2:
          return new e(n[0], n[1]);
        case 3:
          return new e(n[0], n[2], n[1]);
        default:
          return null
      }
    }, e.prototype.clone = function() {
      return new e(this.start, this.end, this.step)
    }, e.prototype.size = function() {
      var r = 0,
        i = this.start,
        n = this.step,
        t = this.end,
        a = t - i;
      return _t(n) === _t(a) ? r = Math.ceil(a / n) : a === 0 && (r = 0), isNaN(r) && (r = 0), [r]
    }, e.prototype.min = function() {
      var r = this.size()[0];
      if (r > 0) return this.step > 0 ? this.start : this.start + (r - 1) * this.step
    }, e.prototype.max = function() {
      var r = this.size()[0];
      if (r > 0) return this.step > 0 ? this.start + (r - 1) * this.step : this.start
    }, e.prototype.forEach = function(r) {
      var i = this.start,
        n = this.step,
        t = this.end,
        a = 0;
      if (n > 0)
        for (; i < t;) r(i, [a], this), i += n, a++;
      else if (n < 0)
        for (; i > t;) r(i, [a], this), i += n, a++
    }, e.prototype.map = function(r) {
      var i = [];
      return this.forEach(function(n, t, a) {
        i[t[0]] = r(n, t, a)
      }), i
    }, e.prototype.toArray = function() {
      var r = [];
      return this.forEach(function(i, n) {
        r[n[0]] = i
      }), r
    }, e.prototype.valueOf = function() {
      return this.toArray()
    }, e.prototype.format = function(r) {
      var i = Yt(this.start, r);
      return this.step !== 1 && (i += ":" + Yt(this.step, r)), i += ":" + Yt(this.end, r), i
    }, e.prototype.toString = function() {
      return this.format()
    }, e.prototype.toJSON = function() {
      return {
        mathjs: "Range",
        start: this.start,
        end: this.end,
        step: this.step
      }
    }, e.fromJSON = function(r) {
      return new e(r.start, r.end, r.step)
    }, e
  }, {
    isClass: !0
  }),
  R0 = "Matrix",
  z0 = [],
  P0 = z(R0, z0, () => {
    function e() {
      if (!(this instanceof e)) throw new SyntaxError("Constructor must be called with the new operator")
    }
    return e.prototype.type = "Matrix", e.prototype.isMatrix = !0, e.prototype.storage = function() {
      throw new Error("Cannot invoke storage on a Matrix interface")
    }, e.prototype.datatype = function() {
      throw new Error("Cannot invoke datatype on a Matrix interface")
    }, e.prototype.create = function(r, i) {
      throw new Error("Cannot invoke create on a Matrix interface")
    }, e.prototype.subset = function(r, i, n) {
      throw new Error("Cannot invoke subset on a Matrix interface")
    }, e.prototype.get = function(r) {
      throw new Error("Cannot invoke get on a Matrix interface")
    }, e.prototype.set = function(r, i, n) {
      throw new Error("Cannot invoke set on a Matrix interface")
    }, e.prototype.resize = function(r, i) {
      throw new Error("Cannot invoke resize on a Matrix interface")
    }, e.prototype.reshape = function(r, i) {
      throw new Error("Cannot invoke reshape on a Matrix interface")
    }, e.prototype.clone = function() {
      throw new Error("Cannot invoke clone on a Matrix interface")
    }, e.prototype.size = function() {
      throw new Error("Cannot invoke size on a Matrix interface")
    }, e.prototype.map = function(r, i) {
      throw new Error("Cannot invoke map on a Matrix interface")
    }, e.prototype.forEach = function(r) {
      throw new Error("Cannot invoke forEach on a Matrix interface")
    }, e.prototype[Symbol.iterator] = function() {
      throw new Error("Cannot iterate a Matrix interface")
    }, e.prototype.toArray = function() {
      throw new Error("Cannot invoke toArray on a Matrix interface")
    }, e.prototype.valueOf = function() {
      throw new Error("Cannot invoke valueOf on a Matrix interface")
    }, e.prototype.format = function(r) {
      throw new Error("Cannot invoke format on a Matrix interface")
    }, e.prototype.toString = function() {
      throw new Error("Cannot invoke toString on a Matrix interface")
    }, e
  }, {
    isClass: !0
  });

function U0(e) {
  var r = 0,
    i = 1,
    n = Object.create(null),
    t = Object.create(null),
    a = 0,
    o = function(c) {
      var u = t[c];
      if (u && (delete n[u], delete t[c], --r, i === u)) {
        if (!r) {
          a = 0, i = 1;
          return
        }
        for (; !Object.prototype.hasOwnProperty.call(n, ++i););
      }
    };
  return e = Math.abs(e), {
    hit: function(c) {
      var u = t[c],
        s = ++a;
      if (n[s] = c, t[c] = s, !u) return ++r, r <= e ? void 0 : (c = n[i], o(c), c);
      if (delete n[u], i === u)
        for (; !Object.prototype.hasOwnProperty.call(n, ++i););
    },
    delete: o,
    clear: function() {
      r = a = 0, i = 1, n = Object.create(null), t = Object.create(null)
    }
  }
}

function la(e) {
  var {
    hasher: r,
    limit: i
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return i = i ?? Number.POSITIVE_INFINITY, r = r ?? JSON.stringify,
    function n() {
      typeof n.cache != "object" && (n.cache = {
        values: new Map,
        lru: U0(i || Number.POSITIVE_INFINITY)
      });
      for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
      var o = r(t);
      if (n.cache.values.has(o)) return n.cache.lru.hit(o), n.cache.values.get(o);
      var f = e.apply(e, t);
      return n.cache.values.set(o, f), n.cache.values.delete(n.cache.lru.hit(o)), f
    }
}

function bm(e) {
  return Object.keys(e.signatures || {}).reduce(function(r, i) {
    var n = (i.match(/,/g) || []).length + 1;
    return Math.max(r, n)
  }, -1)
}
var L0 = "DenseMatrix",
  k0 = ["Matrix"],
  H0 = z(L0, k0, e => {
    var {
      Matrix: r
    } = e;

    function i(s, l) {
      if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
      if (l && !Ar(l)) throw new Error("Invalid datatype: " + l);
      if (Fe(s)) s.type === "DenseMatrix" ? (this._data = $e(s._data), this._size = $e(s._size), this._datatype = l || s._datatype) : (this._data = s.toArray(), this._size = s.size(), this._datatype = l || s._datatype);
      else if (s && Je(s.data) && Je(s.size)) this._data = s.data, this._size = s.size, ms(this._data, this._size), this._datatype = l || s.datatype;
      else if (Je(s)) this._data = u(s), this._size = qe(this._data), ms(this._data, this._size), this._datatype = l;
      else {
        if (s) throw new TypeError("Unsupported type of data (" + ar(s) + ")");
        this._data = [], this._size = [0], this._datatype = l
      }
    }
    i.prototype = new r, i.prototype.createDenseMatrix = function(s, l) {
      return new i(s, l)
    }, Object.defineProperty(i, "name", {
      value: "DenseMatrix"
    }), i.prototype.constructor = i, i.prototype.type = "DenseMatrix", i.prototype.isDenseMatrix = !0, i.prototype.getDataType = function() {
      return ea(this._data, ar)
    }, i.prototype.storage = function() {
      return "dense"
    }, i.prototype.datatype = function() {
      return this._datatype
    }, i.prototype.create = function(s, l) {
      return new i(s, l)
    }, i.prototype.subset = function(s, l, m) {
      switch (arguments.length) {
        case 1:
          return n(this, s);
        case 2:
        case 3:
          return a(this, s, l, m);
        default:
          throw new SyntaxError("Wrong number of arguments")
      }
    }, i.prototype.get = function(s) {
      if (!Je(s)) throw new TypeError("Array expected");
      if (s.length !== this._size.length) throw new Ue(s.length, this._size.length);
      for (var l = 0; l < s.length; l++) tr(s[l], this._size[l]);
      for (var m = this._data, v = 0, d = s.length; v < d; v++) {
        var p = s[v];
        tr(p, m.length), m = m[p]
      }
      return m
    }, i.prototype.set = function(s, l, m) {
      if (!Je(s)) throw new TypeError("Array expected");
      if (s.length < this._size.length) throw new Ue(s.length, this._size.length, "<");
      var v, d, p, b = s.map(function(N) {
        return N + 1
      });
      c(this, b, m);
      var g = this._data;
      for (v = 0, d = s.length - 1; v < d; v++) p = s[v], tr(p, g.length), g = g[p];
      return p = s[s.length - 1], tr(p, g.length), g[p] = l, this
    };

    function n(s, l) {
      if (!ci(l)) throw new TypeError("Invalid index");
      var m = l.isScalar();
      if (m) return s.get(l.min());
      var v = l.size();
      if (v.length !== s._size.length) throw new Ue(v.length, s._size.length);
      for (var d = l.min(), p = l.max(), b = 0, g = s._size.length; b < g; b++) tr(d[b], s._size[b]), tr(p[b], s._size[b]);
      return new i(t(s._data, l, v.length, 0), s._datatype)
    }

    function t(s, l, m, v) {
      var d = v === m - 1,
        p = l.dimension(v);
      return d ? p.map(function(b) {
        return tr(b, s.length), s[b]
      }).valueOf() : p.map(function(b) {
        tr(b, s.length);
        var g = s[b];
        return t(g, l, m, v + 1)
      }).valueOf()
    }

    function a(s, l, m, v) {
      if (!l || l.isIndex !== !0) throw new TypeError("Invalid index");
      var d = l.size(),
        p = l.isScalar(),
        b;
      if (Fe(m) ? (b = m.size(), m = m.valueOf()) : b = qe(m), p) {
        if (b.length !== 0) throw new TypeError("Scalar expected");
        s.set(l.min(), m, v)
      } else {
        if (!Qt(b, d)) try {
          b.length === 0 ? m = ps([m], d) : m = ps(m, d), b = qe(m)
        } catch {}
        if (d.length < s._size.length) throw new Ue(d.length, s._size.length, "<");
        if (b.length < d.length) {
          for (var g = 0, N = 0; d[g] === 1 && b[g] === 1;) g++;
          for (; d[g] === 1;) N++, g++;
          m = Kf(m, d.length, N, b)
        }
        if (!Qt(d, b)) throw new Ue(d, b, ">");
        var h = l.max().map(function(y) {
          return y + 1
        });
        c(s, h, v);
        var x = d.length,
          w = 0;
        o(s._data, l, m, x, w)
      }
      return s
    }

    function o(s, l, m, v, d) {
      var p = d === v - 1,
        b = l.dimension(d);
      p ? b.forEach(function(g, N) {
        tr(g), s[g] = m[N[0]]
      }) : b.forEach(function(g, N) {
        tr(g), o(s[g], l, m[N[0]], v, d + 1)
      })
    }
    i.prototype.resize = function(s, l, m) {
      if (!qt(s)) throw new TypeError("Array or Matrix expected");
      var v = s.valueOf().map(p => Array.isArray(p) && p.length === 1 ? p[0] : p),
        d = m ? this.clone() : this;
      return f(d, v, l)
    };

    function f(s, l, m) {
      if (l.length === 0) {
        for (var v = s._data; Je(v);) v = v[0];
        return v
      }
      return s._size = l.slice(0), s._data = An(s._data, s._size, m), s
    }
    i.prototype.reshape = function(s, l) {
      var m = l ? this.clone() : this;
      m._data = po(m._data, s);
      var v = m._size.reduce((d, p) => d * p);
      return m._size = ho(s, v), m
    };

    function c(s, l, m) {
      for (var v = s._size.slice(0), d = !1; v.length < l.length;) v.push(0), d = !0;
      for (var p = 0, b = l.length; p < b; p++) l[p] > v[p] && (v[p] = l[p], d = !0);
      d && f(s, v, m)
    }
    i.prototype.clone = function() {
      var s = new i({
        data: $e(this._data),
        size: $e(this._size),
        datatype: this._datatype
      });
      return s
    }, i.prototype.size = function() {
      return this._size.slice(0)
    }, i.prototype.map = function(s) {
      var l = this,
        m = bm(s),
        v = function b(g, N) {
          return Je(g) ? g.map(function(h, x) {
            return b(h, N.concat(x))
          }) : m === 1 ? s(g) : m === 2 ? s(g, N) : s(g, N, l)
        },
        d = v(this._data, []),
        p = this._datatype !== void 0 ? ea(d, ar) : void 0;
      return new i(d, p)
    }, i.prototype.forEach = function(s) {
      var l = this,
        m = function v(d, p) {
          Je(d) ? d.forEach(function(b, g) {
            v(b, p.concat(g))
          }) : s(d, p, l)
        };
      m(this._data, [])
    }, i.prototype[Symbol.iterator] = function*() {
      var s = function* l(m, v) {
        if (Je(m))
          for (var d = 0; d < m.length; d++) yield* l(m[d], v.concat(d));
        else yield {
          value: m,
          index: v
        }
      };
      yield* s(this._data, [])
    }, i.prototype.rows = function() {
      var s = [],
        l = this.size();
      if (l.length !== 2) throw new TypeError("Rows can only be returned for a 2D matrix.");
      var m = this._data;
      for (var v of m) s.push(new i([v], this._datatype));
      return s
    }, i.prototype.columns = function() {
      var s = this,
        l = [],
        m = this.size();
      if (m.length !== 2) throw new TypeError("Rows can only be returned for a 2D matrix.");
      for (var v = this._data, d = function(g) {
          var N = v.map(h => [h[g]]);
          l.push(new i(N, s._datatype))
        }, p = 0; p < m[1]; p++) d(p);
      return l
    }, i.prototype.toArray = function() {
      return $e(this._data)
    }, i.prototype.valueOf = function() {
      return this._data
    }, i.prototype.format = function(s) {
      return ze(this._data, s)
    }, i.prototype.toString = function() {
      return ze(this._data)
    }, i.prototype.toJSON = function() {
      return {
        mathjs: "DenseMatrix",
        data: this._data,
        size: this._size,
        datatype: this._datatype
      }
    }, i.prototype.diagonal = function(s) {
      if (s) {
        if (He(s) && (s = s.toNumber()), !Pe(s) || !Se(s)) throw new TypeError("The parameter k must be an integer number")
      } else s = 0;
      for (var l = s > 0 ? s : 0, m = s < 0 ? -s : 0, v = this._size[0], d = this._size[1], p = Math.min(v - m, d - l), b = [], g = 0; g < p; g++) b[g] = this._data[g + m][g + l];
      return new i({
        data: b,
        size: [p],
        datatype: this._datatype
      })
    }, i.diagonal = function(s, l, m, v) {
      if (!Je(s)) throw new TypeError("Array expected, size parameter");
      if (s.length !== 2) throw new Error("Only two dimensions matrix are supported");
      if (s = s.map(function(A) {
          if (He(A) && (A = A.toNumber()), !Pe(A) || !Se(A) || A < 1) throw new Error("Size values must be positive integers");
          return A
        }), m) {
        if (He(m) && (m = m.toNumber()), !Pe(m) || !Se(m)) throw new TypeError("The parameter k must be an integer number")
      } else m = 0;
      var d = m > 0 ? m : 0,
        p = m < 0 ? -m : 0,
        b = s[0],
        g = s[1],
        N = Math.min(b - p, g - d),
        h;
      if (Je(l)) {
        if (l.length !== N) throw new Error("Invalid value array length");
        h = function(E) {
          return l[E]
        }
      } else if (Fe(l)) {
        var x = l.size();
        if (x.length !== 1 || x[0] !== N) throw new Error("Invalid matrix length");
        h = function(E) {
          return l.get([E])
        }
      } else h = function() {
        return l
      };
      v || (v = He(h(0)) ? h(0).mul(0) : 0);
      var w = [];
      if (s.length > 0) {
        w = An(w, s, v);
        for (var y = 0; y < N; y++) w[y + p][y + d] = h(y)
      }
      return new i({
        data: w,
        size: [b, g]
      })
    }, i.fromJSON = function(s) {
      return new i(s)
    }, i.prototype.swapRows = function(s, l) {
      if (!Pe(s) || !Se(s) || !Pe(l) || !Se(l)) throw new Error("Row index must be positive integers");
      if (this._size.length !== 2) throw new Error("Only two dimensional matrix is supported");
      return tr(s, this._size[0]), tr(l, this._size[0]), i._swapRows(s, l, this._data), this
    }, i._swapRows = function(s, l, m) {
      var v = m[s];
      m[s] = m[l], m[l] = v
    };

    function u(s) {
      return Fe(s) ? u(s.valueOf()) : Je(s) ? s.map(u) : s
    }
    return i
  }, {
    isClass: !0
  }),
  bs = "clone",
  G0 = ["typed"],
  V0 = z(bs, G0, e => {
    var {
      typed: r
    } = e;
    return r(bs, {
      any: $e
    })
  });

function xm(e) {
  var r = e.length,
    i = e[0].length,
    n, t, a = [];
  for (t = 0; t < i; t++) {
    var o = [];
    for (n = 0; n < r; n++) o.push(e[n][t]);
    a.push(o)
  }
  return a
}

function $n(e) {
  for (var r = 0; r < e.length; r++)
    if (qt(e[r])) return !0;
  return !1
}

function Ct(e, r) {
  Fe(e) && (e = e.valueOf());
  for (var i = 0, n = e.length; i < n; i++) {
    var t = e[i];
    Array.isArray(t) ? Ct(t, r) : r(t)
  }
}

function Le(e, r, i) {
  return e && typeof e.map == "function" ? e.map(function(n) {
    return Le(n, r)
  }) : r(e)
}

function bi(e, r, i) {
  var n = Array.isArray(e) ? qe(e) : e.size();
  if (r < 0 || r >= n.length) throw new it(r, n.length);
  return Fe(e) ? e.create(Xa(e.valueOf(), r, i)) : Xa(e, r, i)
}

function Xa(e, r, i) {
  var n, t, a, o;
  if (r <= 0)
    if (Array.isArray(e[0])) {
      for (o = xm(e), t = [], n = 0; n < o.length; n++) t[n] = Xa(o[n], r - 1, i);
      return t
    } else {
      for (a = e[0], n = 1; n < e.length; n++) a = i(a, e[n]);
      return a
    }
  else {
    for (t = [], n = 0; n < e.length; n++) t[n] = Xa(e[n], r - 1, i);
    return t
  }
}

function xs(e, r, i, n, t, a, o, f, c, u, s) {
  var l = e._values,
    m = e._index,
    v = e._ptr,
    d, p, b, g;
  if (n)
    for (p = v[r], b = v[r + 1], d = p; d < b; d++) g = m[d], i[g] !== a ? (i[g] = a, o.push(g), u ? (n[g] = c ? f(l[d], s) : f(s, l[d]), t[g] = a) : n[g] = l[d]) : (n[g] = c ? f(l[d], n[g]) : f(n[g], l[d]), t[g] = a);
  else
    for (p = v[r], b = v[r + 1], d = p; d < b; d++) g = m[d], i[g] !== a ? (i[g] = a, o.push(g)) : t[g] = a
}
var ws = "isInteger",
  Z0 = ["typed"],
  Y0 = z(ws, Z0, e => {
    var {
      typed: r
    } = e;
    return r(ws, {
      number: Se,
      BigNumber: function(n) {
        return n.isInt()
      },
      Fraction: function(n) {
        return n.d === 1 && isFinite(n.n)
      },
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  ot = "number",
  _n = "number, number";

function wm(e) {
  return Math.abs(e)
}
wm.signature = ot;

function Nm(e, r) {
  return e + r
}
Nm.signature = _n;

function Dm(e, r) {
  return e - r
}
Dm.signature = _n;

function Am(e, r) {
  return e * r
}
Am.signature = _n;

function Em(e) {
  return -e
}
Em.signature = ot;

function Sm(e) {
  return e
}
Sm.signature = ot;

function Kn(e) {
  return Zd(e)
}
Kn.signature = ot;

function Cm(e) {
  return e * e * e
}
Cm.signature = ot;

function Mm(e) {
  return Math.exp(e)
}
Mm.signature = ot;

function Fm(e) {
  return Yd(e)
}
Fm.signature = ot;

function Bm(e, r) {
  if (!Se(e) || !Se(r)) throw new Error("Parameters in function lcm must be integer numbers");
  if (e === 0 || r === 0) return 0;
  for (var i, n = e * r; r !== 0;) i = r, r = e % i, e = i;
  return Math.abs(n / e)
}
Bm.signature = _n;

function W0(e, r) {
  return r ? Math.log(e) / Math.log(r) : Math.log(e)
}

function Tm(e) {
  return Gd(e)
}
Tm.signature = ot;

function Om(e) {
  return Hd(e)
}
Om.signature = ot;

function Ns(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2,
    i = r < 0;
  if (i && (r = -r), r === 0) throw new Error("Root must be non-zero");
  if (e < 0 && Math.abs(r) % 2 !== 1) throw new Error("Root must be odd when a is negative.");
  if (e === 0) return i ? 1 / 0 : 0;
  if (!isFinite(e)) return i ? 0 : e;
  var n = Math.pow(Math.abs(e), 1 / r);
  return n = e < 0 ? -n : n, i ? 1 / n : n
}

function ji(e) {
  return _t(e)
}
ji.signature = ot;

function $m(e) {
  return e * e
}
$m.signature = ot;

function _m(e, r) {
  var i, n, t, a = 0,
    o = 1,
    f = 1,
    c = 0;
  if (!Se(e) || !Se(r)) throw new Error("Parameters in function xgcd must be integer numbers");
  for (; r;) n = Math.floor(e / r), t = e - n * r, i = a, a = o - n * a, o = i, i = f, f = c - n * f, c = i, e = r, r = t;
  var u;
  return e < 0 ? u = [-e, -o, -c] : u = [e, e ? o : 0, c], u
}
_m.signature = _n;

function Im(e, r) {
  return e * e < 1 && r === 1 / 0 || e * e > 1 && r === -1 / 0 ? 0 : Math.pow(e, r)
}
Im.signature = _n;

function Ds(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!Se(r) || r < 0 || r > 15) throw new Error("Number of decimals in function round must be an integer from 0 to 15 inclusive");
  return parseFloat(Zf(e, r))
}
var Q0 = "number",
  In = "number, number";

function qm(e, r) {
  if (!Se(e) || !Se(r)) throw new Error("Integers expected in function bitAnd");
  return e & r
}
qm.signature = In;

function Rm(e) {
  if (!Se(e)) throw new Error("Integer expected in function bitNot");
  return ~e
}
Rm.signature = Q0;

function zm(e, r) {
  if (!Se(e) || !Se(r)) throw new Error("Integers expected in function bitOr");
  return e | r
}
zm.signature = In;

function Pm(e, r) {
  if (!Se(e) || !Se(r)) throw new Error("Integers expected in function bitXor");
  return e ^ r
}
Pm.signature = In;

function Um(e, r) {
  if (!Se(e) || !Se(r)) throw new Error("Integers expected in function leftShift");
  return e << r
}
Um.signature = In;

function Lm(e, r) {
  if (!Se(e) || !Se(r)) throw new Error("Integers expected in function rightArithShift");
  return e >> r
}
Lm.signature = In;

function km(e, r) {
  if (!Se(e) || !Se(r)) throw new Error("Integers expected in function rightLogShift");
  return e >>> r
}
km.signature = In;

function Nt(e, r) {
  if (r < e) return 1;
  if (r === e) return r;
  var i = r + e >> 1;
  return Nt(e, i) * Nt(i + 1, r)
}

function Hm(e, r) {
  if (!Se(e) || e < 0) throw new TypeError("Positive integer value expected in function combinations");
  if (!Se(r) || r < 0) throw new TypeError("Positive integer value expected in function combinations");
  if (r > e) throw new TypeError("k must be less than or equal to n");
  for (var i = e - r, n = 1, t = r < i ? i + 1 : r + 1, a = 2, o = r < i ? r : i, f = t; f <= e; ++f)
    for (n *= f; a <= o && n % a === 0;) n /= a, ++a;
  return a <= o && (n /= Nt(a, o)), n
}
Hm.signature = "number, number";
var X0 = Math.PI,
  J0 = 2 * Math.PI,
  K0 = Math.E,
  j0 = 1.618033988749895,
  eg = "number",
  wo = "number, number";

function Gm(e) {
  return !e
}
Gm.signature = eg;

function Vm(e, r) {
  return !!(e || r)
}
Vm.signature = wo;

function Zm(e, r) {
  return !!e != !!r
}
Zm.signature = wo;

function Ym(e, r) {
  return !!(e && r)
}
Ym.signature = wo;

function Ja(e) {
  var r;
  if (Se(e)) return e <= 0 ? isFinite(e) ? 1 / 0 : NaN : e > 171 ? 1 / 0 : Nt(1, e - 1);
  if (e < .5) return Math.PI / (Math.sin(Math.PI * e) * Ja(1 - e));
  if (e >= 171.35) return 1 / 0;
  if (e > 85) {
    var i = e * e,
      n = i * e,
      t = n * e,
      a = t * e;
    return Math.sqrt(2 * Math.PI / e) * Math.pow(e / Math.E, e) * (1 + 1 / (12 * e) + 1 / (288 * i) - 139 / (51840 * n) - 571 / (2488320 * t) + 163879 / (209018880 * a) + 5246819 / (75246796800 * a * e))
  }--e, r = Nn[0];
  for (var o = 1; o < Nn.length; ++o) r += Nn[o] / (e + o);
  var f = e + Wm + .5;
  return Math.sqrt(2 * Math.PI) * Math.pow(f, e + .5) * Math.exp(-f) * r
}
Ja.signature = "number";
var Wm = 4.7421875,
  Nn = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, .0001580887032249125, -.00021026444172410488, .00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22],
  Qm = .9189385332046728,
  rg = 5,
  tg = 7,
  As = [1.000000000190015, 76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, .001208650973866179, -5395239384953e-18];

function Ka(e) {
  if (e < 0) return NaN;
  if (e === 0) return 1 / 0;
  if (!isFinite(e)) return e;
  if (e < .5) return Math.log(Math.PI / Math.sin(Math.PI * e)) - Ka(1 - e);
  e = e - 1;
  for (var r = e + rg + .5, i = As[0], n = tg - 1; n >= 1; n--) i += As[n] / (e + n);
  return Qm + (e + .5) * Math.log(r) - r + Math.log(i)
}
Ka.signature = "number";
var Cr = "number";

function Xm(e) {
  return Kd(e)
}
Xm.signature = Cr;

function Jm(e) {
  return Math.atan(1 / e)
}
Jm.signature = Cr;

function Km(e) {
  return isFinite(e) ? (Math.log((e + 1) / e) + Math.log(e / (e - 1))) / 2 : 0
}
Km.signature = Cr;

function jm(e) {
  return Math.asin(1 / e)
}
jm.signature = Cr;

function ev(e) {
  var r = 1 / e;
  return Math.log(r + Math.sqrt(r * r + 1))
}
ev.signature = Cr;

function rv(e) {
  return Math.acos(1 / e)
}
rv.signature = Cr;

function tv(e) {
  var r = 1 / e,
    i = Math.sqrt(r * r - 1);
  return Math.log(i + r)
}
tv.signature = Cr;

function nv(e) {
  return jd(e)
}
nv.signature = Cr;

function av(e) {
  return eh(e)
}
av.signature = Cr;

function iv(e) {
  return 1 / Math.tan(e)
}
iv.signature = Cr;

function ov(e) {
  var r = Math.exp(2 * e);
  return (r + 1) / (r - 1)
}
ov.signature = Cr;

function sv(e) {
  return 1 / Math.sin(e)
}
sv.signature = Cr;

function uv(e) {
  return e === 0 ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) * _t(e)
}
uv.signature = Cr;

function lv(e) {
  return 1 / Math.cos(e)
}
lv.signature = Cr;

function cv(e) {
  return 2 / (Math.exp(e) + Math.exp(-e))
}
cv.signature = Cr;

function fv(e) {
  return th(e)
}
fv.signature = Cr;
var xi = "number";

function mv(e) {
  return e < 0
}
mv.signature = xi;

function vv(e) {
  return e > 0
}
vv.signature = xi;

function pv(e) {
  return e === 0
}
pv.signature = xi;

function dv(e) {
  return Number.isNaN(e)
}
dv.signature = xi;
var Es = "isNegative",
  ng = ["typed"],
  ag = z(Es, ng, e => {
    var {
      typed: r
    } = e;
    return r(Es, {
      number: mv,
      BigNumber: function(n) {
        return n.isNeg() && !n.isZero() && !n.isNaN()
      },
      Fraction: function(n) {
        return n.s < 0
      },
      Unit: r.referToSelf(i => n => r.find(i, n.valueType())(n.value)),
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  Ss = "isNumeric",
  ig = ["typed"],
  og = z(Ss, ig, e => {
    var {
      typed: r
    } = e;
    return r(Ss, {
      "number | BigNumber | Fraction | boolean": () => !0,
      "Complex | Unit | string | null | undefined | Node": () => !1,
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  Cs = "hasNumericValue",
  sg = ["typed", "isNumeric"],
  ug = z(Cs, sg, e => {
    var {
      typed: r,
      isNumeric: i
    } = e;
    return r(Cs, {
      boolean: () => !0,
      string: function(t) {
        return t.trim().length > 0 && !isNaN(Number(t))
      },
      any: function(t) {
        return i(t)
      }
    })
  }),
  Ms = "isPositive",
  lg = ["typed"],
  cg = z(Ms, lg, e => {
    var {
      typed: r
    } = e;
    return r(Ms, {
      number: vv,
      BigNumber: function(n) {
        return !n.isNeg() && !n.isZero() && !n.isNaN()
      },
      Fraction: function(n) {
        return n.s > 0 && n.n > 0
      },
      Unit: r.referToSelf(i => n => r.find(i, n.valueType())(n.value)),
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  Fs = "isZero",
  fg = ["typed"],
  mg = z(Fs, fg, e => {
    var {
      typed: r
    } = e;
    return r(Fs, {
      number: pv,
      BigNumber: function(n) {
        return n.isZero()
      },
      Complex: function(n) {
        return n.re === 0 && n.im === 0
      },
      Fraction: function(n) {
        return n.d === 1 && n.n === 0
      },
      Unit: r.referToSelf(i => n => r.find(i, n.valueType())(n.value)),
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  Bs = "isNaN",
  vg = ["typed"],
  pg = z(Bs, vg, e => {
    var {
      typed: r
    } = e;
    return r(Bs, {
      number: dv,
      BigNumber: function(n) {
        return n.isNaN()
      },
      Fraction: function(n) {
        return !1
      },
      Complex: function(n) {
        return n.isNaN()
      },
      Unit: function(n) {
        return Number.isNaN(n.value)
      },
      "Array | Matrix": function(n) {
        return Le(n, Number.isNaN)
      }
    })
  }),
  Ts = "typeOf",
  dg = ["typed"],
  hg = z(Ts, dg, e => {
    var {
      typed: r
    } = e;
    return r(Ts, {
      any: ar
    })
  });

function dt(e, r, i) {
  if (i == null) return e.eq(r);
  if (e.eq(r)) return !0;
  if (e.isNaN() || r.isNaN()) return !1;
  if (e.isFinite() && r.isFinite()) {
    var n = e.minus(r).abs();
    if (n.isZero()) return !0;
    var t = e.constructor.max(e.abs(), r.abs());
    return n.lte(t.times(i))
  }
  return !1
}

function gg(e, r, i) {
  return kr(e.re, r.re, i) && kr(e.im, r.im, i)
}
var qn = z("compareUnits", ["typed"], e => {
    var {
      typed: r
    } = e;
    return {
      "Unit, Unit": r.referToSelf(i => (n, t) => {
        if (!n.equalBase(t)) throw new Error("Cannot compare units with different base");
        return r.find(i, [n.valueType(), t.valueType()])(n.value, t.value)
      })
    }
  }),
  ja = "equalScalar",
  yg = ["typed", "config"],
  bg = z(ja, yg, e => {
    var {
      typed: r,
      config: i
    } = e, n = qn({
      typed: r
    });
    return r(ja, {
      "boolean, boolean": function(a, o) {
        return a === o
      },
      "number, number": function(a, o) {
        return kr(a, o, i.epsilon)
      },
      "BigNumber, BigNumber": function(a, o) {
        return a.eq(o) || dt(a, o, i.epsilon)
      },
      "Fraction, Fraction": function(a, o) {
        return a.equals(o)
      },
      "Complex, Complex": function(a, o) {
        return gg(a, o, i.epsilon)
      }
    }, n)
  });
z(ja, ["typed", "config"], e => {
  var {
    typed: r,
    config: i
  } = e;
  return r(ja, {
    "number, number": function(t, a) {
      return kr(t, a, i.epsilon)
    }
  })
});
var xg = "SparseMatrix",
  wg = ["typed", "equalScalar", "Matrix"],
  Ng = z(xg, wg, e => {
    var {
      typed: r,
      equalScalar: i,
      Matrix: n
    } = e;

    function t(p, b) {
      if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
      if (b && !Ar(b)) throw new Error("Invalid datatype: " + b);
      if (Fe(p)) a(this, p, b);
      else if (p && Je(p.index) && Je(p.ptr) && Je(p.size)) this._values = p.values, this._index = p.index, this._ptr = p.ptr, this._size = p.size, this._datatype = b || p.datatype;
      else if (Je(p)) o(this, p, b);
      else {
        if (p) throw new TypeError("Unsupported type of data (" + ar(p) + ")");
        this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = b
      }
    }

    function a(p, b, g) {
      b.type === "SparseMatrix" ? (p._values = b._values ? $e(b._values) : void 0, p._index = $e(b._index), p._ptr = $e(b._ptr), p._size = $e(b._size), p._datatype = g || b._datatype) : o(p, b.valueOf(), g || b._datatype)
    }

    function o(p, b, g) {
      p._values = [], p._index = [], p._ptr = [], p._datatype = g;
      var N = b.length,
        h = 0,
        x = i,
        w = 0;
      if (Ar(g) && (x = r.find(i, [g, g]) || i, w = r.convert(0, g)), N > 0) {
        var y = 0;
        do {
          p._ptr.push(p._index.length);
          for (var A = 0; A < N; A++) {
            var E = b[A];
            if (Je(E)) {
              if (y === 0 && h < E.length && (h = E.length), y < E.length) {
                var D = E[y];
                x(D, w) || (p._values.push(D), p._index.push(A))
              }
            } else y === 0 && h < 1 && (h = 1), x(E, w) || (p._values.push(E), p._index.push(A))
          }
          y++
        } while (y < h)
      }
      p._ptr.push(p._index.length), p._size = [N, h]
    }
    t.prototype = new n, t.prototype.createSparseMatrix = function(p, b) {
      return new t(p, b)
    }, Object.defineProperty(t, "name", {
      value: "SparseMatrix"
    }), t.prototype.constructor = t, t.prototype.type = "SparseMatrix", t.prototype.isSparseMatrix = !0, t.prototype.getDataType = function() {
      return ea(this._values, ar)
    }, t.prototype.storage = function() {
      return "sparse"
    }, t.prototype.datatype = function() {
      return this._datatype
    }, t.prototype.create = function(p, b) {
      return new t(p, b)
    }, t.prototype.density = function() {
      var p = this._size[0],
        b = this._size[1];
      return p !== 0 && b !== 0 ? this._index.length / (p * b) : 0
    }, t.prototype.subset = function(p, b, g) {
      if (!this._values) throw new Error("Cannot invoke subset on a Pattern only matrix");
      switch (arguments.length) {
        case 1:
          return f(this, p);
        case 2:
        case 3:
          return c(this, p, b, g);
        default:
          throw new SyntaxError("Wrong number of arguments")
      }
    };

    function f(p, b) {
      if (!ci(b)) throw new TypeError("Invalid index");
      var g = b.isScalar();
      if (g) return p.get(b.min());
      var N = b.size();
      if (N.length !== p._size.length) throw new Ue(N.length, p._size.length);
      var h, x, w, y, A = b.min(),
        E = b.max();
      for (h = 0, x = p._size.length; h < x; h++) tr(A[h], p._size[h]), tr(E[h], p._size[h]);
      var D = p._values,
        S = p._index,
        C = p._ptr,
        M = b.dimension(0),
        $ = b.dimension(1),
        I = [],
        _ = [];
      M.forEach(function(O, V) {
        _[O] = V[0], I[O] = !0
      });
      var T = D ? [] : void 0,
        B = [],
        U = [];
      return $.forEach(function(O) {
        for (U.push(B.length), w = C[O], y = C[O + 1]; w < y; w++) h = S[w], I[h] === !0 && (B.push(_[h]), T && T.push(D[w]))
      }), U.push(B.length), new t({
        values: T,
        index: B,
        ptr: U,
        size: N,
        datatype: p._datatype
      })
    }

    function c(p, b, g, N) {
      if (!b || b.isIndex !== !0) throw new TypeError("Invalid index");
      var h = b.size(),
        x = b.isScalar(),
        w;
      if (Fe(g) ? (w = g.size(), g = g.toArray()) : w = qe(g), x) {
        if (w.length !== 0) throw new TypeError("Scalar expected");
        p.set(b.min(), g, N)
      } else {
        if (h.length !== 1 && h.length !== 2) throw new Ue(h.length, p._size.length, "<");
        if (w.length < h.length) {
          for (var y = 0, A = 0; h[y] === 1 && w[y] === 1;) y++;
          for (; h[y] === 1;) A++, y++;
          g = Kf(g, h.length, A, w)
        }
        if (!Qt(h, w)) throw new Ue(h, w, ">");
        if (h.length === 1) {
          var E = b.dimension(0);
          E.forEach(function(C, M) {
            tr(C), p.set([C, 0], g[M[0]], N)
          })
        } else {
          var D = b.dimension(0),
            S = b.dimension(1);
          D.forEach(function(C, M) {
            tr(C), S.forEach(function($, I) {
              tr($), p.set([C, $], g[M[0]][I[0]], N)
            })
          })
        }
      }
      return p
    }
    t.prototype.get = function(p) {
      if (!Je(p)) throw new TypeError("Array expected");
      if (p.length !== this._size.length) throw new Ue(p.length, this._size.length);
      if (!this._values) throw new Error("Cannot invoke get on a Pattern only matrix");
      var b = p[0],
        g = p[1];
      tr(b, this._size[0]), tr(g, this._size[1]);
      var N = u(b, this._ptr[g], this._ptr[g + 1], this._index);
      return N < this._ptr[g + 1] && this._index[N] === b ? this._values[N] : 0
    }, t.prototype.set = function(p, b, g) {
      if (!Je(p)) throw new TypeError("Array expected");
      if (p.length !== this._size.length) throw new Ue(p.length, this._size.length);
      if (!this._values) throw new Error("Cannot invoke set on a Pattern only matrix");
      var N = p[0],
        h = p[1],
        x = this._size[0],
        w = this._size[1],
        y = i,
        A = 0;
      Ar(this._datatype) && (y = r.find(i, [this._datatype, this._datatype]) || i, A = r.convert(0, this._datatype)), (N > x - 1 || h > w - 1) && (m(this, Math.max(N + 1, x), Math.max(h + 1, w), g), x = this._size[0], w = this._size[1]), tr(N, x), tr(h, w);
      var E = u(N, this._ptr[h], this._ptr[h + 1], this._index);
      return E < this._ptr[h + 1] && this._index[E] === N ? y(b, A) ? s(E, h, this._values, this._index, this._ptr) : this._values[E] = b : y(b, A) || l(E, N, h, b, this._values, this._index, this._ptr), this
    };

    function u(p, b, g, N) {
      if (g - b === 0) return g;
      for (var h = b; h < g; h++)
        if (N[h] === p) return h;
      return b
    }

    function s(p, b, g, N, h) {
      g.splice(p, 1), N.splice(p, 1);
      for (var x = b + 1; x < h.length; x++) h[x]--
    }

    function l(p, b, g, N, h, x, w) {
      h.splice(p, 0, N), x.splice(p, 0, b);
      for (var y = g + 1; y < w.length; y++) w[y]++
    }
    t.prototype.resize = function(p, b, g) {
      if (!qt(p)) throw new TypeError("Array or Matrix expected");
      var N = p.valueOf().map(x => Array.isArray(x) && x.length === 1 ? x[0] : x);
      if (N.length !== 2) throw new Error("Only two dimensions matrix are supported");
      N.forEach(function(x) {
        if (!Pe(x) || !Se(x) || x < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + ze(N) + ")")
      });
      var h = g ? this.clone() : this;
      return m(h, N[0], N[1], b)
    };

    function m(p, b, g, N) {
      var h = N || 0,
        x = i,
        w = 0;
      Ar(p._datatype) && (x = r.find(i, [p._datatype, p._datatype]) || i, w = r.convert(0, p._datatype), h = r.convert(h, p._datatype));
      var y = !x(h, w),
        A = p._size[0],
        E = p._size[1],
        D, S, C;
      if (g > E) {
        for (S = E; S < g; S++)
          if (p._ptr[S] = p._values.length, y)
            for (D = 0; D < A; D++) p._values.push(h), p._index.push(D);
        p._ptr[g] = p._values.length
      } else g < E && (p._ptr.splice(g + 1, E - g), p._values.splice(p._ptr[g], p._values.length), p._index.splice(p._ptr[g], p._index.length));
      if (E = g, b > A) {
        if (y) {
          var M = 0;
          for (S = 0; S < E; S++) {
            p._ptr[S] = p._ptr[S] + M, C = p._ptr[S + 1] + M;
            var $ = 0;
            for (D = A; D < b; D++, $++) p._values.splice(C + $, 0, h), p._index.splice(C + $, 0, D), M++
          }
          p._ptr[E] = p._values.length
        }
      } else if (b < A) {
        var I = 0;
        for (S = 0; S < E; S++) {
          p._ptr[S] = p._ptr[S] - I;
          var _ = p._ptr[S],
            T = p._ptr[S + 1] - I;
          for (C = _; C < T; C++) D = p._index[C], D > b - 1 && (p._values.splice(C, 1), p._index.splice(C, 1), I++)
        }
        p._ptr[S] = p._values.length
      }
      return p._size[0] = b, p._size[1] = g, p
    }
    t.prototype.reshape = function(p, b) {
      if (!Je(p)) throw new TypeError("Array expected");
      if (p.length !== 2) throw new Error("Sparse matrices can only be reshaped in two dimensions");
      p.forEach(function(O) {
        if (!Pe(O) || !Se(O) || O <= -2 || O === 0) throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + ze(p) + ")")
      });
      var g = this._size[0] * this._size[1];
      p = ho(p, g);
      var N = p[0] * p[1];
      if (g !== N) throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
      var h = b ? this.clone() : this;
      if (this._size[0] === p[0] && this._size[1] === p[1]) return h;
      for (var x = [], w = 0; w < h._ptr.length; w++)
        for (var y = 0; y < h._ptr[w + 1] - h._ptr[w]; y++) x.push(w);
      for (var A = h._values.slice(), E = h._index.slice(), D = 0; D < h._index.length; D++) {
        var S = E[D],
          C = x[D],
          M = S * h._size[1] + C;
        x[D] = M % p[1], E[D] = Math.floor(M / p[1])
      }
      h._values.length = 0, h._index.length = 0, h._ptr.length = p[1] + 1, h._size = p.slice();
      for (var $ = 0; $ < h._ptr.length; $++) h._ptr[$] = 0;
      for (var I = 0; I < A.length; I++) {
        var _ = E[I],
          T = x[I],
          B = A[I],
          U = u(_, h._ptr[T], h._ptr[T + 1], h._index);
        l(U, _, T, B, h._values, h._index, h._ptr)
      }
      return h
    }, t.prototype.clone = function() {
      var p = new t({
        values: this._values ? $e(this._values) : void 0,
        index: $e(this._index),
        ptr: $e(this._ptr),
        size: $e(this._size),
        datatype: this._datatype
      });
      return p
    }, t.prototype.size = function() {
      return this._size.slice(0)
    }, t.prototype.map = function(p, b) {
      if (!this._values) throw new Error("Cannot invoke map on a Pattern only matrix");
      var g = this,
        N = this._size[0],
        h = this._size[1],
        x = bm(p),
        w = function(A, E, D) {
          return x === 1 ? p(A) : x === 2 ? p(A, [E, D]) : p(A, [E, D], g)
        };
      return v(this, 0, N - 1, 0, h - 1, w, b)
    };

    function v(p, b, g, N, h, x, w) {
      var y = [],
        A = [],
        E = [],
        D = i,
        S = 0;
      Ar(p._datatype) && (D = r.find(i, [p._datatype, p._datatype]) || i, S = r.convert(0, p._datatype));
      for (var C = function(q, X, ie) {
          q = x(q, X, ie), D(q, S) || (y.push(q), A.push(X))
        }, M = N; M <= h; M++) {
        E.push(y.length);
        var $ = p._ptr[M],
          I = p._ptr[M + 1];
        if (w)
          for (var _ = $; _ < I; _++) {
            var T = p._index[_];
            T >= b && T <= g && C(p._values[_], T - b, M - N)
          } else {
            for (var B = {}, U = $; U < I; U++) {
              var O = p._index[U];
              B[O] = p._values[U]
            }
            for (var V = b; V <= g; V++) {
              var J = V in B ? B[V] : 0;
              C(J, V - b, M - N)
            }
          }
      }
      return E.push(y.length), new t({
        values: y,
        index: A,
        ptr: E,
        size: [g - b + 1, h - N + 1]
      })
    }
    t.prototype.forEach = function(p, b) {
      if (!this._values) throw new Error("Cannot invoke forEach on a Pattern only matrix");
      for (var g = this, N = this._size[0], h = this._size[1], x = 0; x < h; x++) {
        var w = this._ptr[x],
          y = this._ptr[x + 1];
        if (b)
          for (var A = w; A < y; A++) {
            var E = this._index[A];
            p(this._values[A], [E, x], g)
          } else {
            for (var D = {}, S = w; S < y; S++) {
              var C = this._index[S];
              D[C] = this._values[S]
            }
            for (var M = 0; M < N; M++) {
              var $ = M in D ? D[M] : 0;
              p($, [M, x], g)
            }
          }
      }
    }, t.prototype[Symbol.iterator] = function*() {
      if (!this._values) throw new Error("Cannot iterate a Pattern only matrix");
      for (var p = this._size[1], b = 0; b < p; b++)
        for (var g = this._ptr[b], N = this._ptr[b + 1], h = g; h < N; h++) {
          var x = this._index[h];
          yield {
            value: this._values[h],
            index: [x, b]
          }
        }
    }, t.prototype.toArray = function() {
      return d(this._values, this._index, this._ptr, this._size, !0)
    }, t.prototype.valueOf = function() {
      return d(this._values, this._index, this._ptr, this._size, !1)
    };

    function d(p, b, g, N, h) {
      var x = N[0],
        w = N[1],
        y = [],
        A, E;
      for (A = 0; A < x; A++)
        for (y[A] = [], E = 0; E < w; E++) y[A][E] = 0;
      for (E = 0; E < w; E++)
        for (var D = g[E], S = g[E + 1], C = D; C < S; C++) A = b[C], y[A][E] = p ? h ? $e(p[C]) : p[C] : 1;
      return y
    }
    return t.prototype.format = function(p) {
      for (var b = this._size[0], g = this._size[1], N = this.density(), h = "Sparse Matrix [" + ze(b, p) + " x " + ze(g, p) + "] density: " + ze(N, p) + `
`, x = 0; x < g; x++)
        for (var w = this._ptr[x], y = this._ptr[x + 1], A = w; A < y; A++) {
          var E = this._index[A];
          h += `
    (` + ze(E, p) + ", " + ze(x, p) + ") ==> " + (this._values ? ze(this._values[A], p) : "X")
        }
      return h
    }, t.prototype.toString = function() {
      return ze(this.toArray())
    }, t.prototype.toJSON = function() {
      return {
        mathjs: "SparseMatrix",
        values: this._values,
        index: this._index,
        ptr: this._ptr,
        size: this._size,
        datatype: this._datatype
      }
    }, t.prototype.diagonal = function(p) {
      if (p) {
        if (He(p) && (p = p.toNumber()), !Pe(p) || !Se(p)) throw new TypeError("The parameter k must be an integer number")
      } else p = 0;
      var b = p > 0 ? p : 0,
        g = p < 0 ? -p : 0,
        N = this._size[0],
        h = this._size[1],
        x = Math.min(N - g, h - b),
        w = [],
        y = [],
        A = [];
      A[0] = 0;
      for (var E = b; E < h && w.length < x; E++)
        for (var D = this._ptr[E], S = this._ptr[E + 1], C = D; C < S; C++) {
          var M = this._index[C];
          if (M === E - b + g) {
            w.push(this._values[C]), y[w.length - 1] = M - g;
            break
          }
        }
      return A.push(w.length), new t({
        values: w,
        index: y,
        ptr: A,
        size: [x, 1]
      })
    }, t.fromJSON = function(p) {
      return new t(p)
    }, t.diagonal = function(p, b, g, N, h) {
      if (!Je(p)) throw new TypeError("Array expected, size parameter");
      if (p.length !== 2) throw new Error("Only two dimensions matrix are supported");
      if (p = p.map(function(O) {
          if (He(O) && (O = O.toNumber()), !Pe(O) || !Se(O) || O < 1) throw new Error("Size values must be positive integers");
          return O
        }), g) {
        if (He(g) && (g = g.toNumber()), !Pe(g) || !Se(g)) throw new TypeError("The parameter k must be an integer number")
      } else g = 0;
      var x = i,
        w = 0;
      Ar(h) && (x = r.find(i, [h, h]) || i, w = r.convert(0, h));
      var y = g > 0 ? g : 0,
        A = g < 0 ? -g : 0,
        E = p[0],
        D = p[1],
        S = Math.min(E - A, D - y),
        C;
      if (Je(b)) {
        if (b.length !== S) throw new Error("Invalid value array length");
        C = function(V) {
          return b[V]
        }
      } else if (Fe(b)) {
        var M = b.size();
        if (M.length !== 1 || M[0] !== S) throw new Error("Invalid matrix length");
        C = function(V) {
          return b.get([V])
        }
      } else C = function() {
        return b
      };
      for (var $ = [], I = [], _ = [], T = 0; T < D; T++) {
        _.push($.length);
        var B = T - y;
        if (B >= 0 && B < S) {
          var U = C(B);
          x(U, w) || (I.push(B + A), $.push(U))
        }
      }
      return _.push($.length), new t({
        values: $,
        index: I,
        ptr: _,
        size: [E, D]
      })
    }, t.prototype.swapRows = function(p, b) {
      if (!Pe(p) || !Se(p) || !Pe(b) || !Se(b)) throw new Error("Row index must be positive integers");
      if (this._size.length !== 2) throw new Error("Only two dimensional matrix is supported");
      return tr(p, this._size[0]), tr(b, this._size[0]), t._swapRows(p, b, this._size[1], this._values, this._index, this._ptr), this
    }, t._forEachRow = function(p, b, g, N, h) {
      for (var x = N[p], w = N[p + 1], y = x; y < w; y++) h(g[y], b[y])
    }, t._swapRows = function(p, b, g, N, h, x) {
      for (var w = 0; w < g; w++) {
        var y = x[w],
          A = x[w + 1],
          E = u(p, y, A, h),
          D = u(b, y, A, h);
        if (E < A && D < A && h[E] === p && h[D] === b) {
          if (N) {
            var S = N[E];
            N[E] = N[D], N[D] = S
          }
          continue
        }
        if (E < A && h[E] === p && (D >= A || h[D] !== b)) {
          var C = N ? N[E] : void 0;
          h.splice(D, 0, b), N && N.splice(D, 0, C), h.splice(D <= E ? E + 1 : E, 1), N && N.splice(D <= E ? E + 1 : E, 1);
          continue
        }
        if (D < A && h[D] === b && (E >= A || h[E] !== p)) {
          var M = N ? N[D] : void 0;
          h.splice(E, 0, p), N && N.splice(E, 0, M), h.splice(E <= D ? D + 1 : D, 1), N && N.splice(E <= D ? D + 1 : D, 1)
        }
      }
    }, t
  }, {
    isClass: !0
  }),
  Dg = "number",
  Ag = ["typed"];

function Eg(e) {
  var r = e.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
  if (r) {
    var i = {
        "0b": 2,
        "0o": 8,
        "0x": 16
      } [r[1]],
      n = r[2],
      t = r[3];
    return {
      input: e,
      radix: i,
      integerPart: n,
      fractionalPart: t
    }
  } else return null
}

function Sg(e) {
  for (var r = parseInt(e.integerPart, e.radix), i = 0, n = 0; n < e.fractionalPart.length; n++) {
    var t = parseInt(e.fractionalPart[n], e.radix);
    i += t / Math.pow(e.radix, n + 1)
  }
  var a = r + i;
  if (isNaN(a)) throw new SyntaxError('String "' + e.input + '" is not a valid number');
  return a
}
var Cg = z(Dg, Ag, e => {
    var {
      typed: r
    } = e, i = r("number", {
      "": function() {
        return 0
      },
      number: function(t) {
        return t
      },
      string: function(t) {
        if (t === "NaN") return NaN;
        var a = Eg(t);
        if (a) return Sg(a);
        var o = 0,
          f = t.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
        f && (o = Number(f[2]), t = f[1]);
        var c = Number(t);
        if (isNaN(c)) throw new SyntaxError('String "' + t + '" is not a valid number');
        if (f) {
          if (c > 2 ** o - 1) throw new SyntaxError('String "'.concat(t, '" is out of range'));
          c >= 2 ** (o - 1) && (c = c - 2 ** o)
        }
        return c
      },
      BigNumber: function(t) {
        return t.toNumber()
      },
      Fraction: function(t) {
        return t.valueOf()
      },
      Unit: r.referToSelf(n => t => {
        var a = t.clone();
        return a.value = n(t.value), a
      }),
      null: function(t) {
        return 0
      },
      "Unit, string | Unit": function(t, a) {
        return t.toNumber(a)
      },
      "Array | Matrix": r.referToSelf(n => t => Le(t, n))
    });
    return i.fromJSON = function(n) {
      return parseFloat(n.value)
    }, i
  }),
  Os = "string",
  Mg = ["typed"],
  Fg = z(Os, Mg, e => {
    var {
      typed: r
    } = e;
    return r(Os, {
      "": function() {
        return ""
      },
      number: Yt,
      null: function(n) {
        return "null"
      },
      boolean: function(n) {
        return n + ""
      },
      string: function(n) {
        return n
      },
      "Array | Matrix": r.referToSelf(i => n => Le(n, i)),
      any: function(n) {
        return String(n)
      }
    })
  }),
  $s = "boolean",
  Bg = ["typed"],
  Tg = z($s, Bg, e => {
    var {
      typed: r
    } = e;
    return r($s, {
      "": function() {
        return !1
      },
      boolean: function(n) {
        return n
      },
      number: function(n) {
        return !!n
      },
      null: function(n) {
        return !1
      },
      BigNumber: function(n) {
        return !n.isZero()
      },
      string: function(n) {
        var t = n.toLowerCase();
        if (t === "true") return !0;
        if (t === "false") return !1;
        var a = Number(n);
        if (n !== "" && !isNaN(a)) return !!a;
        throw new Error('Cannot convert "' + n + '" to a boolean')
      },
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  Og = "bignumber",
  $g = ["typed", "BigNumber"],
  _g = z(Og, $g, e => {
    var {
      typed: r,
      BigNumber: i
    } = e;
    return r("bignumber", {
      "": function() {
        return new i(0)
      },
      number: function(t) {
        return new i(t + "")
      },
      string: function(t) {
        var a = t.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
        if (a) {
          var o = a[2],
            f = i(a[1]),
            c = new i(2).pow(Number(o));
          if (f.gt(c.sub(1))) throw new SyntaxError('String "'.concat(t, '" is out of range'));
          var u = new i(2).pow(Number(o) - 1);
          return f.gte(u) ? f.sub(c) : f
        }
        return new i(t)
      },
      BigNumber: function(t) {
        return t
      },
      Unit: r.referToSelf(n => t => {
        var a = t.clone();
        return a.value = n(t.value), a
      }),
      Fraction: function(t) {
        return new i(t.n).div(t.d).times(t.s)
      },
      null: function(t) {
        return new i(0)
      },
      "Array | Matrix": r.referToSelf(n => t => Le(t, n))
    })
  }),
  Ig = "complex",
  qg = ["typed", "Complex"],
  Rg = z(Ig, qg, e => {
    var {
      typed: r,
      Complex: i
    } = e;
    return r("complex", {
      "": function() {
        return i.ZERO
      },
      number: function(t) {
        return new i(t, 0)
      },
      "number, number": function(t, a) {
        return new i(t, a)
      },
      "BigNumber, BigNumber": function(t, a) {
        return new i(t.toNumber(), a.toNumber())
      },
      Fraction: function(t) {
        return new i(t.valueOf(), 0)
      },
      Complex: function(t) {
        return t.clone()
      },
      string: function(t) {
        return i(t)
      },
      null: function(t) {
        return i(0)
      },
      Object: function(t) {
        if ("re" in t && "im" in t) return new i(t.re, t.im);
        if ("r" in t && "phi" in t || "abs" in t && "arg" in t) return new i(t);
        throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)")
      },
      "Array | Matrix": r.referToSelf(n => t => Le(t, n))
    })
  }),
  zg = "fraction",
  Pg = ["typed", "Fraction"],
  Ug = z(zg, Pg, e => {
    var {
      typed: r,
      Fraction: i
    } = e;
    return r("fraction", {
      number: function(t) {
        if (!isFinite(t) || isNaN(t)) throw new Error(t + " cannot be represented as a fraction");
        return new i(t)
      },
      string: function(t) {
        return new i(t)
      },
      "number, number": function(t, a) {
        return new i(t, a)
      },
      null: function(t) {
        return new i(0)
      },
      BigNumber: function(t) {
        return new i(t.toString())
      },
      Fraction: function(t) {
        return t
      },
      Unit: r.referToSelf(n => t => {
        var a = t.clone();
        return a.value = n(t.value), a
      }),
      Object: function(t) {
        return new i(t)
      },
      "Array | Matrix": r.referToSelf(n => t => Le(t, n))
    })
  }),
  _s = "matrix",
  Lg = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"],
  kg = z(_s, Lg, e => {
    var {
      typed: r,
      Matrix: i,
      DenseMatrix: n,
      SparseMatrix: t
    } = e;
    return r(_s, {
      "": function() {
        return a([])
      },
      string: function(f) {
        return a([], f)
      },
      "string, string": function(f, c) {
        return a([], f, c)
      },
      Array: function(f) {
        return a(f)
      },
      Matrix: function(f) {
        return a(f, f.storage())
      },
      "Array | Matrix, string": a,
      "Array | Matrix, string, string": a
    });

    function a(o, f, c) {
      if (f === "dense" || f === "default" || f === void 0) return new n(o, c);
      if (f === "sparse") return new t(o, c);
      throw new TypeError("Unknown matrix type " + JSON.stringify(f) + ".")
    }
  }),
  Is = "matrixFromFunction",
  Hg = ["typed", "matrix", "isZero"],
  Gg = z(Is, Hg, e => {
    var {
      typed: r,
      matrix: i,
      isZero: n
    } = e;
    return r(Is, {
      "Array | Matrix, function, string, string": function(o, f, c, u) {
        return t(o, f, c, u)
      },
      "Array | Matrix, function, string": function(o, f, c) {
        return t(o, f, c)
      },
      "Matrix, function": function(o, f) {
        return t(o, f, "dense")
      },
      "Array, function": function(o, f) {
        return t(o, f, "dense").toArray()
      },
      "Array | Matrix, string, function": function(o, f, c) {
        return t(o, c, f)
      },
      "Array | Matrix, string, string, function": function(o, f, c, u) {
        return t(o, u, f, c)
      }
    });

    function t(a, o, f, c) {
      var u;
      return c !== void 0 ? u = i(f, c) : u = i(f), u.resize(a), u.forEach(function(s, l) {
        var m = o(l);
        n(m) || u.set(l, m)
      }), u
    }
  }),
  qs = "matrixFromRows",
  Vg = ["typed", "matrix", "flatten", "size"],
  Zg = z(qs, Vg, e => {
    var {
      typed: r,
      matrix: i,
      flatten: n,
      size: t
    } = e;
    return r(qs, {
      "...Array": function(c) {
        return a(c)
      },
      "...Matrix": function(c) {
        return i(a(c.map(u => u.toArray())))
      }
    });

    function a(f) {
      if (f.length === 0) throw new TypeError("At least one row is needed to construct a matrix.");
      var c = o(f[0]),
        u = [];
      for (var s of f) {
        var l = o(s);
        if (l !== c) throw new TypeError("The vectors had different length: " + (c | 0) + " ≠ " + (l | 0));
        u.push(n(s))
      }
      return u
    }

    function o(f) {
      var c = t(f);
      if (c.length === 1) return c[0];
      if (c.length === 2) {
        if (c[0] === 1) return c[1];
        if (c[1] === 1) return c[0];
        throw new TypeError("At least one of the arguments is not a vector.")
      } else throw new TypeError("Only one- or two-dimensional vectors are supported.")
    }
  }),
  Rs = "matrixFromColumns",
  Yg = ["typed", "matrix", "flatten", "size"],
  Wg = z(Rs, Yg, e => {
    var {
      typed: r,
      matrix: i,
      flatten: n,
      size: t
    } = e;
    return r(Rs, {
      "...Array": function(c) {
        return a(c)
      },
      "...Matrix": function(c) {
        return i(a(c.map(u => u.toArray())))
      }
    });

    function a(f) {
      if (f.length === 0) throw new TypeError("At least one column is needed to construct a matrix.");
      for (var c = o(f[0]), u = [], s = 0; s < c; s++) u[s] = [];
      for (var l of f) {
        var m = o(l);
        if (m !== c) throw new TypeError("The vectors had different length: " + (c | 0) + " ≠ " + (m | 0));
        for (var v = n(l), d = 0; d < c; d++) u[d].push(v[d])
      }
      return u
    }

    function o(f) {
      var c = t(f);
      if (c.length === 1) return c[0];
      if (c.length === 2) {
        if (c[0] === 1) return c[1];
        if (c[1] === 1) return c[0];
        throw new TypeError("At least one of the arguments is not a vector.")
      } else throw new TypeError("Only one- or two-dimensional vectors are supported.")
    }
  }),
  zs = "splitUnit",
  Qg = ["typed"],
  Xg = z(zs, Qg, e => {
    var {
      typed: r
    } = e;
    return r(zs, {
      "Unit, Array": function(n, t) {
        return n.splitUnit(t)
      }
    })
  }),
  Ps = "unaryMinus",
  Jg = ["typed"],
  Kg = z(Ps, Jg, e => {
    var {
      typed: r
    } = e;
    return r(Ps, {
      number: Em,
      "Complex | BigNumber | Fraction": i => i.neg(),
      Unit: r.referToSelf(i => n => {
        var t = n.clone();
        return t.value = r.find(i, t.valueType())(n.value), t
      }),
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  Us = "unaryPlus",
  jg = ["typed", "config", "BigNumber"],
  e1 = z(Us, jg, e => {
    var {
      typed: r,
      config: i,
      BigNumber: n
    } = e;
    return r(Us, {
      number: Sm,
      Complex: function(a) {
        return a
      },
      BigNumber: function(a) {
        return a
      },
      Fraction: function(a) {
        return a
      },
      Unit: function(a) {
        return a.clone()
      },
      "Array | Matrix": r.referToSelf(t => a => Le(a, t)),
      "boolean | string": function(a) {
        return i.number === "BigNumber" ? new n(+a) : +a
      }
    })
  }),
  Ls = "abs",
  r1 = ["typed"],
  t1 = z(Ls, r1, e => {
    var {
      typed: r
    } = e;
    return r(Ls, {
      number: wm,
      "Complex | BigNumber | Fraction | Unit": i => i.abs(),
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  ks = "apply",
  n1 = ["typed", "isInteger"],
  No = z(ks, n1, e => {
    var {
      typed: r,
      isInteger: i
    } = e;
    return r(ks, {
      "Array | Matrix, number | BigNumber, function": function(t, a, o) {
        if (!i(a)) throw new TypeError("Integer number expected for dimension");
        var f = Array.isArray(t) ? qe(t) : t.size();
        if (a < 0 || a >= f.length) throw new it(a, f.length);
        return Fe(t) ? t.create(ei(t.valueOf(), a, o)) : ei(t, a, o)
      }
    })
  });

function ei(e, r, i) {
  var n, t, a;
  if (r <= 0)
    if (Array.isArray(e[0])) {
      for (a = a1(e), t = [], n = 0; n < a.length; n++) t[n] = ei(a[n], r - 1, i);
      return t
    } else return i(e);
  else {
    for (t = [], n = 0; n < e.length; n++) t[n] = ei(e[n], r - 1, i);
    return t
  }
}

function a1(e) {
  var r = e.length,
    i = e[0].length,
    n, t, a = [];
  for (t = 0; t < i; t++) {
    var o = [];
    for (n = 0; n < r; n++) o.push(e[n][t]);
    a.push(o)
  }
  return a
}
var Hs = "addScalar",
  i1 = ["typed"],
  o1 = z(Hs, i1, e => {
    var {
      typed: r
    } = e;
    return r(Hs, {
      "number, number": Nm,
      "Complex, Complex": function(n, t) {
        return n.add(t)
      },
      "BigNumber, BigNumber": function(n, t) {
        return n.plus(t)
      },
      "Fraction, Fraction": function(n, t) {
        return n.add(t)
      },
      "Unit, Unit": r.referToSelf(i => (n, t) => {
        if (n.value === null || n.value === void 0) throw new Error("Parameter x contains a unit with undefined value");
        if (t.value === null || t.value === void 0) throw new Error("Parameter y contains a unit with undefined value");
        if (!n.equalBase(t)) throw new Error("Units do not match");
        var a = n.clone();
        return a.value = r.find(i, [a.valueType(), t.valueType()])(a.value, t.value), a.fixPrefix = !1, a
      })
    })
  }),
  Gs = "subtractScalar",
  s1 = ["typed"],
  u1 = z(Gs, s1, e => {
    var {
      typed: r
    } = e;
    return r(Gs, {
      "number, number": Dm,
      "Complex, Complex": function(n, t) {
        return n.sub(t)
      },
      "BigNumber, BigNumber": function(n, t) {
        return n.minus(t)
      },
      "Fraction, Fraction": function(n, t) {
        return n.sub(t)
      },
      "Unit, Unit": r.referToSelf(i => (n, t) => {
        if (n.value === null || n.value === void 0) throw new Error("Parameter x contains a unit with undefined value");
        if (t.value === null || t.value === void 0) throw new Error("Parameter y contains a unit with undefined value");
        if (!n.equalBase(t)) throw new Error("Units do not match");
        var a = n.clone();
        return a.value = r.find(i, [a.valueType(), t.valueType()])(a.value, t.value), a.fixPrefix = !1, a
      })
    })
  }),
  Vs = "cbrt",
  l1 = ["config", "typed", "isNegative", "unaryMinus", "matrix", "Complex", "BigNumber", "Fraction"],
  c1 = z(Vs, l1, e => {
    var {
      config: r,
      typed: i,
      isNegative: n,
      unaryMinus: t,
      matrix: a,
      Complex: o,
      BigNumber: f,
      Fraction: c
    } = e;
    return i(Vs, {
      number: Kn,
      Complex: u,
      "Complex, boolean": u,
      BigNumber: function(m) {
        return m.cbrt()
      },
      Unit: s
    });

    function u(l, m) {
      var v = l.arg() / 3,
        d = l.abs(),
        p = new o(Kn(d), 0).mul(new o(0, v).exp());
      if (m) {
        var b = [p, new o(Kn(d), 0).mul(new o(0, v + Math.PI * 2 / 3).exp()), new o(Kn(d), 0).mul(new o(0, v - Math.PI * 2 / 3).exp())];
        return r.matrix === "Array" ? b : a(b)
      } else return p
    }

    function s(l) {
      if (l.value && Dt(l.value)) {
        var m = l.clone();
        return m.value = 1, m = m.pow(1 / 3), m.value = u(l.value), m
      } else {
        var v = n(l.value);
        v && (l.value = t(l.value));
        var d;
        He(l.value) ? d = new f(1).div(3) : oa(l.value) ? d = new c(1, 3) : d = 1 / 3;
        var p = l.pow(d);
        return v && (p.value = t(p.value)), p
      }
    }
  }),
  f1 = "matAlgo11xS0s",
  m1 = ["typed", "equalScalar"],
  Nr = z(f1, m1, e => {
    var {
      typed: r,
      equalScalar: i
    } = e;
    return function(t, a, o, f) {
      var c = t._values,
        u = t._index,
        s = t._ptr,
        l = t._size,
        m = t._datatype;
      if (!c) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
      var v = l[0],
        d = l[1],
        p, b = i,
        g = 0,
        N = o;
      typeof m == "string" && (p = m, b = r.find(i, [p, p]), g = r.convert(0, p), a = r.convert(a, p), N = r.find(o, [p, p]));
      for (var h = [], x = [], w = [], y = 0; y < d; y++) {
        w[y] = x.length;
        for (var A = s[y], E = s[y + 1], D = A; D < E; D++) {
          var S = u[D],
            C = f ? N(a, c[D]) : N(c[D], a);
          b(C, g) || (x.push(S), h.push(C))
        }
      }
      return w[d] = x.length, t.createSparseMatrix({
        values: h,
        index: x,
        ptr: w,
        size: [v, d],
        datatype: p
      })
    }
  }),
  v1 = "matAlgo12xSfs",
  p1 = ["typed", "DenseMatrix"],
  hr = z(v1, p1, e => {
    var {
      typed: r,
      DenseMatrix: i
    } = e;
    return function(t, a, o, f) {
      var c = t._values,
        u = t._index,
        s = t._ptr,
        l = t._size,
        m = t._datatype;
      if (!c) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
      var v = l[0],
        d = l[1],
        p, b = o;
      typeof m == "string" && (p = m, a = r.convert(a, p), b = r.find(o, [p, p]));
      for (var g = [], N = [], h = [], x = 0; x < d; x++) {
        for (var w = x + 1, y = s[x], A = s[x + 1], E = y; E < A; E++) {
          var D = u[E];
          N[D] = c[E], h[D] = w
        }
        for (var S = 0; S < v; S++) x === 0 && (g[S] = []), h[S] === w ? g[S][x] = f ? b(a, N[S]) : b(N[S], a) : g[S][x] = f ? b(a, 0) : b(0, a)
      }
      return new i({
        data: g,
        size: [v, d],
        datatype: p
      })
    }
  }),
  d1 = "matAlgo14xDs",
  h1 = ["typed"],
  st = z(d1, h1, e => {
    var {
      typed: r
    } = e;
    return function(t, a, o, f) {
      var c = t._data,
        u = t._size,
        s = t._datatype,
        l, m = o;
      typeof s == "string" && (l = s, a = r.convert(a, l), m = r.find(o, [l, l]));
      var v = u.length > 0 ? i(m, 0, u, u[0], c, a, f) : [];
      return t.createDenseMatrix({
        data: v,
        size: $e(u),
        datatype: l
      })
    };

    function i(n, t, a, o, f, c, u) {
      var s = [];
      if (t === a.length - 1)
        for (var l = 0; l < o; l++) s[l] = u ? n(c, f[l]) : n(f[l], c);
      else
        for (var m = 0; m < o; m++) s[m] = i(n, t + 1, a, a[t + 1], f[m], c, u);
      return s
    }
  }),
  eo = "ceil",
  g1 = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix"],
  y1 = z(eo, ["typed", "config", "round"], e => {
    var {
      typed: r,
      config: i,
      round: n
    } = e;
    return r(eo, {
      number: function(a) {
        return kr(a, n(a), i.epsilon) ? n(a) : Math.ceil(a)
      },
      "number, number": function(a, o) {
        if (kr(a, n(a, o), i.epsilon)) return n(a, o);
        var [f, c] = "".concat(a, "e").split("e"), u = Math.ceil(Number("".concat(f, "e").concat(Number(c) + o)));
        return [f, c] = "".concat(u, "e").split("e"), Number("".concat(f, "e").concat(Number(c) - o))
      }
    })
  }),
  b1 = z(eo, g1, e => {
    var {
      typed: r,
      config: i,
      round: n,
      matrix: t,
      equalScalar: a,
      zeros: o,
      DenseMatrix: f
    } = e, c = Nr({
      typed: r,
      equalScalar: a
    }), u = hr({
      typed: r,
      DenseMatrix: f
    }), s = st({
      typed: r
    }), l = y1({
      typed: r,
      config: i,
      round: n
    });
    return r("ceil", {
      number: l.signatures.number,
      "number,number": l.signatures["number,number"],
      Complex: function(v) {
        return v.ceil()
      },
      "Complex, number": function(v, d) {
        return v.ceil(d)
      },
      "Complex, BigNumber": function(v, d) {
        return v.ceil(d.toNumber())
      },
      BigNumber: function(v) {
        return dt(v, n(v), i.epsilon) ? n(v) : v.ceil()
      },
      "BigNumber, BigNumber": function(v, d) {
        return dt(v, n(v, d), i.epsilon) ? n(v, d) : v.toDecimalPlaces(d.toNumber(), Pt.ROUND_CEIL)
      },
      Fraction: function(v) {
        return v.ceil()
      },
      "Fraction, number": function(v, d) {
        return v.ceil(d)
      },
      "Fraction, BigNumber": function(v, d) {
        return v.ceil(d.toNumber())
      },
      "Array | Matrix": r.referToSelf(m => v => Le(v, m)),
      "Array, number | BigNumber": r.referToSelf(m => (v, d) => Le(v, p => m(p, d))),
      "SparseMatrix, number | BigNumber": r.referToSelf(m => (v, d) => c(v, d, m, !1)),
      "DenseMatrix, number | BigNumber": r.referToSelf(m => (v, d) => s(v, d, m, !1)),
      "number | Complex | Fraction | BigNumber, Array": r.referToSelf(m => (v, d) => s(t(d), v, m, !0).valueOf()),
      "number | Complex | Fraction | BigNumber, Matrix": r.referToSelf(m => (v, d) => a(v, 0) ? o(d.size(), d.storage()) : d.storage() === "dense" ? s(d, v, m, !0) : u(d, v, m, !0))
    })
  }),
  Zs = "cube",
  x1 = ["typed"],
  w1 = z(Zs, x1, e => {
    var {
      typed: r
    } = e;
    return r(Zs, {
      number: Cm,
      Complex: function(n) {
        return n.mul(n).mul(n)
      },
      BigNumber: function(n) {
        return n.times(n).times(n)
      },
      Fraction: function(n) {
        return n.pow(3)
      },
      Unit: function(n) {
        return n.pow(3)
      }
    })
  }),
  Ys = "exp",
  N1 = ["typed"],
  D1 = z(Ys, N1, e => {
    var {
      typed: r
    } = e;
    return r(Ys, {
      number: Mm,
      Complex: function(n) {
        return n.exp()
      },
      BigNumber: function(n) {
        return n.exp()
      }
    })
  }),
  Ws = "expm1",
  A1 = ["typed", "Complex"],
  E1 = z(Ws, A1, e => {
    var {
      typed: r,
      Complex: i
    } = e;
    return r(Ws, {
      number: Fm,
      Complex: function(t) {
        var a = Math.exp(t.re);
        return new i(a * Math.cos(t.im) - 1, a * Math.sin(t.im))
      },
      BigNumber: function(t) {
        return t.exp().minus(1)
      }
    })
  }),
  ro = "fix",
  S1 = ["typed", "Complex", "matrix", "ceil", "floor", "equalScalar", "zeros", "DenseMatrix"],
  C1 = z(ro, ["typed", "ceil", "floor"], e => {
    var {
      typed: r,
      ceil: i,
      floor: n
    } = e;
    return r(ro, {
      number: function(a) {
        return a > 0 ? n(a) : i(a)
      },
      "number, number": function(a, o) {
        return a > 0 ? n(a, o) : i(a, o)
      }
    })
  }),
  M1 = z(ro, S1, e => {
    var {
      typed: r,
      Complex: i,
      matrix: n,
      ceil: t,
      floor: a,
      equalScalar: o,
      zeros: f,
      DenseMatrix: c
    } = e, u = hr({
      typed: r,
      DenseMatrix: c
    }), s = st({
      typed: r
    }), l = C1({
      typed: r,
      ceil: t,
      floor: a
    });
    return r("fix", {
      number: l.signatures.number,
      "number, number | BigNumber": l.signatures["number,number"],
      Complex: function(v) {
        return new i(v.re > 0 ? Math.floor(v.re) : Math.ceil(v.re), v.im > 0 ? Math.floor(v.im) : Math.ceil(v.im))
      },
      "Complex, number": function(v, d) {
        return new i(v.re > 0 ? a(v.re, d) : t(v.re, d), v.im > 0 ? a(v.im, d) : t(v.im, d))
      },
      "Complex, BigNumber": function(v, d) {
        var p = d.toNumber();
        return new i(v.re > 0 ? a(v.re, p) : t(v.re, p), v.im > 0 ? a(v.im, p) : t(v.im, p))
      },
      BigNumber: function(v) {
        return v.isNegative() ? t(v) : a(v)
      },
      "BigNumber, number | BigNumber": function(v, d) {
        return v.isNegative() ? t(v, d) : a(v, d)
      },
      Fraction: function(v) {
        return v.s < 0 ? v.ceil() : v.floor()
      },
      "Fraction, number | BigNumber": function(v, d) {
        return v.s < 0 ? t(v, d) : a(v, d)
      },
      "Array | Matrix": r.referToSelf(m => v => Le(v, m)),
      "Array | Matrix, number | BigNumber": r.referToSelf(m => (v, d) => Le(v, p => m(p, d))),
      "number | Complex | Fraction | BigNumber, Array": r.referToSelf(m => (v, d) => s(n(d), v, m, !0).valueOf()),
      "number | Complex | Fraction | BigNumber, Matrix": r.referToSelf(m => (v, d) => o(v, 0) ? f(d.size(), d.storage()) : d.storage() === "dense" ? s(d, v, m, !0) : u(d, v, m, !0))
    })
  }),
  to = "floor",
  F1 = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix"],
  B1 = z(to, ["typed", "config", "round"], e => {
    var {
      typed: r,
      config: i,
      round: n
    } = e;
    return r(to, {
      number: function(a) {
        return kr(a, n(a), i.epsilon) ? n(a) : Math.floor(a)
      },
      "number, number": function(a, o) {
        if (kr(a, n(a, o), i.epsilon)) return n(a, o);
        var [f, c] = "".concat(a, "e").split("e"), u = Math.floor(Number("".concat(f, "e").concat(Number(c) + o)));
        return [f, c] = "".concat(u, "e").split("e"), Number("".concat(f, "e").concat(Number(c) - o))
      }
    })
  }),
  hv = z(to, F1, e => {
    var {
      typed: r,
      config: i,
      round: n,
      matrix: t,
      equalScalar: a,
      zeros: o,
      DenseMatrix: f
    } = e, c = Nr({
      typed: r,
      equalScalar: a
    }), u = hr({
      typed: r,
      DenseMatrix: f
    }), s = st({
      typed: r
    }), l = B1({
      typed: r,
      config: i,
      round: n
    });
    return r("floor", {
      number: l.signatures.number,
      "number,number": l.signatures["number,number"],
      Complex: function(v) {
        return v.floor()
      },
      "Complex, number": function(v, d) {
        return v.floor(d)
      },
      "Complex, BigNumber": function(v, d) {
        return v.floor(d.toNumber())
      },
      BigNumber: function(v) {
        return dt(v, n(v), i.epsilon) ? n(v) : v.floor()
      },
      "BigNumber, BigNumber": function(v, d) {
        return dt(v, n(v, d), i.epsilon) ? n(v, d) : v.toDecimalPlaces(d.toNumber(), Pt.ROUND_FLOOR)
      },
      Fraction: function(v) {
        return v.floor()
      },
      "Fraction, number": function(v, d) {
        return v.floor(d)
      },
      "Fraction, BigNumber": function(v, d) {
        return v.floor(d.toNumber())
      },
      "Array | Matrix": r.referToSelf(m => v => Le(v, m)),
      "Array, number | BigNumber": r.referToSelf(m => (v, d) => Le(v, p => m(p, d))),
      "SparseMatrix, number | BigNumber": r.referToSelf(m => (v, d) => c(v, d, m, !1)),
      "DenseMatrix, number | BigNumber": r.referToSelf(m => (v, d) => s(v, d, m, !1)),
      "number | Complex | Fraction | BigNumber, Array": r.referToSelf(m => (v, d) => s(t(d), v, m, !0).valueOf()),
      "number | Complex | Fraction | BigNumber, Matrix": r.referToSelf(m => (v, d) => a(v, 0) ? o(d.size(), d.storage()) : d.storage() === "dense" ? s(d, v, m, !0) : u(d, v, m, !0))
    })
  }),
  T1 = "matAlgo02xDS0",
  O1 = ["typed", "equalScalar"],
  ut = z(T1, O1, e => {
    var {
      typed: r,
      equalScalar: i
    } = e;
    return function(t, a, o, f) {
      var c = t._data,
        u = t._size,
        s = t._datatype,
        l = a._values,
        m = a._index,
        v = a._ptr,
        d = a._size,
        p = a._datatype;
      if (u.length !== d.length) throw new Ue(u.length, d.length);
      if (u[0] !== d[0] || u[1] !== d[1]) throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + d + ")");
      if (!l) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
      var b = u[0],
        g = u[1],
        N, h = i,
        x = 0,
        w = o;
      typeof s == "string" && s === p && (N = s, h = r.find(i, [N, N]), x = r.convert(0, N), w = r.find(o, [N, N]));
      for (var y = [], A = [], E = [], D = 0; D < g; D++) {
        E[D] = A.length;
        for (var S = v[D], C = v[D + 1], M = S; M < C; M++) {
          var $ = m[M],
            I = f ? w(l[M], c[$][D]) : w(c[$][D], l[M]);
          h(I, x) || (A.push($), y.push(I))
        }
      }
      return E[g] = A.length, a.createSparseMatrix({
        values: y,
        index: A,
        ptr: E,
        size: [b, g],
        datatype: N
      })
    }
  }),
  $1 = "matAlgo03xDSf",
  _1 = ["typed"],
  _r = z($1, _1, e => {
    var {
      typed: r
    } = e;
    return function(n, t, a, o) {
      var f = n._data,
        c = n._size,
        u = n._datatype,
        s = t._values,
        l = t._index,
        m = t._ptr,
        v = t._size,
        d = t._datatype;
      if (c.length !== v.length) throw new Ue(c.length, v.length);
      if (c[0] !== v[0] || c[1] !== v[1]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + v + ")");
      if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
      var p = c[0],
        b = c[1],
        g, N = 0,
        h = a;
      typeof u == "string" && u === d && (g = u, N = r.convert(0, g), h = r.find(a, [g, g]));
      for (var x = [], w = 0; w < p; w++) x[w] = [];
      for (var y = [], A = [], E = 0; E < b; E++) {
        for (var D = E + 1, S = m[E], C = m[E + 1], M = S; M < C; M++) {
          var $ = l[M];
          y[$] = o ? h(s[M], f[$][E]) : h(f[$][E], s[M]), A[$] = D
        }
        for (var I = 0; I < p; I++) A[I] === D ? x[I][E] = y[I] : x[I][E] = o ? h(N, f[I][E]) : h(f[I][E], N)
      }
      return n.createDenseMatrix({
        data: x,
        size: [p, b],
        datatype: g
      })
    }
  }),
  I1 = "matAlgo05xSfSf",
  q1 = ["typed", "equalScalar"],
  wi = z(I1, q1, e => {
    var {
      typed: r,
      equalScalar: i
    } = e;
    return function(t, a, o) {
      var f = t._values,
        c = t._index,
        u = t._ptr,
        s = t._size,
        l = t._datatype,
        m = a._values,
        v = a._index,
        d = a._ptr,
        p = a._size,
        b = a._datatype;
      if (s.length !== p.length) throw new Ue(s.length, p.length);
      if (s[0] !== p[0] || s[1] !== p[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
      var g = s[0],
        N = s[1],
        h, x = i,
        w = 0,
        y = o;
      typeof l == "string" && l === b && (h = l, x = r.find(i, [h, h]), w = r.convert(0, h), y = r.find(o, [h, h]));
      var A = f && m ? [] : void 0,
        E = [],
        D = [],
        S = A ? [] : void 0,
        C = A ? [] : void 0,
        M = [],
        $ = [],
        I, _, T, B;
      for (_ = 0; _ < N; _++) {
        D[_] = E.length;
        var U = _ + 1;
        for (T = u[_], B = u[_ + 1]; T < B; T++) I = c[T], E.push(I), M[I] = U, S && (S[I] = f[T]);
        for (T = d[_], B = d[_ + 1]; T < B; T++) I = v[T], M[I] !== U && E.push(I), $[I] = U, C && (C[I] = m[T]);
        if (A)
          for (T = D[_]; T < E.length;) {
            I = E[T];
            var O = M[I],
              V = $[I];
            if (O === U || V === U) {
              var J = O === U ? S[I] : w,
                Z = V === U ? C[I] : w,
                q = y(J, Z);
              x(q, w) ? E.splice(T, 1) : (A.push(q), T++)
            }
          }
      }
      return D[N] = E.length, t.createSparseMatrix({
        values: A,
        index: E,
        ptr: D,
        size: [g, N],
        datatype: h
      })
    }
  }),
  R1 = "matAlgo13xDD",
  z1 = ["typed"],
  P1 = z(R1, z1, e => {
    var {
      typed: r
    } = e;
    return function(t, a, o) {
      var f = t._data,
        c = t._size,
        u = t._datatype,
        s = a._data,
        l = a._size,
        m = a._datatype,
        v = [];
      if (c.length !== l.length) throw new Ue(c.length, l.length);
      for (var d = 0; d < c.length; d++) {
        if (c[d] !== l[d]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + l + ")");
        v[d] = c[d]
      }
      var p, b = o;
      typeof u == "string" && u === m && (p = u, b = r.find(o, [p, p]));
      var g = v.length > 0 ? i(b, 0, v, v[0], f, s) : [];
      return t.createDenseMatrix({
        data: g,
        size: v,
        datatype: p
      })
    };

    function i(n, t, a, o, f, c) {
      var u = [];
      if (t === a.length - 1)
        for (var s = 0; s < o; s++) u[s] = n(f[s], c[s]);
      else
        for (var l = 0; l < o; l++) u[l] = i(n, t + 1, a, a[t + 1], f[l], c[l]);
      return u
    }
  }),
  U1 = "broadcast",
  L1 = ["concat"],
  k1 = z(U1, L1, e => {
    var {
      concat: r
    } = e;
    return function(t, a) {
      var o = Math.max(t._size.length, a._size.length);
      if (t._size.length === a._size.length && t._size.every((d, p) => d === a._size[p])) return [t, a];
      for (var f = i(t._size, o, 0), c = i(a._size, o, 0), u = [], s = 0; s < o; s++) u[s] = Math.max(f[s], c[s]);
      Za(f, u), Za(c, u);
      var l = t.clone(),
        m = a.clone();
      l._size.length < o ? l.reshape(i(l._size, o, 1)) : m._size.length < o && m.reshape(i(m._size, o, 1));
      for (var v = 0; v < o; v++) l._size[v] < u[v] && (l = n(l, u[v], v)), m._size[v] < u[v] && (m = n(m, u[v], v));
      return [l, m]
    };

    function i(t, a, o) {
      return [...Array(a - t.length).fill(o), ...t]
    }

    function n(t, a, o) {
      return r(...Array(a).fill(t), o)
    }
  }),
  H1 = "matrixAlgorithmSuite",
  G1 = ["typed", "matrix", "concat"],
  or = z(H1, G1, e => {
    var {
      typed: r,
      matrix: i,
      concat: n
    } = e, t = P1({
      typed: r
    }), a = st({
      typed: r
    }), o = k1({
      concat: n
    });
    return function(c) {
      var u = c.elop,
        s = c.SD || c.DS,
        l;
      u ? (l = {
        "DenseMatrix, DenseMatrix": (p, b) => t(...o(p, b), u),
        "Array, Array": (p, b) => t(...o(i(p), i(b)), u).valueOf(),
        "Array, DenseMatrix": (p, b) => t(...o(i(p), b), u),
        "DenseMatrix, Array": (p, b) => t(...o(p, i(b)), u)
      }, c.SS && (l["SparseMatrix, SparseMatrix"] = (p, b) => c.SS(...o(p, b), u, !1)), c.DS && (l["DenseMatrix, SparseMatrix"] = (p, b) => c.DS(...o(p, b), u, !1), l["Array, SparseMatrix"] = (p, b) => c.DS(...o(i(p), b), u, !1)), s && (l["SparseMatrix, DenseMatrix"] = (p, b) => s(...o(b, p), u, !0), l["SparseMatrix, Array"] = (p, b) => s(...o(i(b), p), u, !0))) : (l = {
        "DenseMatrix, DenseMatrix": r.referToSelf(p => (b, g) => t(...o(b, g), p)),
        "Array, Array": r.referToSelf(p => (b, g) => t(...o(i(b), i(g)), p).valueOf()),
        "Array, DenseMatrix": r.referToSelf(p => (b, g) => t(...o(i(b), g), p)),
        "DenseMatrix, Array": r.referToSelf(p => (b, g) => t(...o(b, i(g)), p))
      }, c.SS && (l["SparseMatrix, SparseMatrix"] = r.referToSelf(p => (b, g) => c.SS(...o(b, g), p, !1))), c.DS && (l["DenseMatrix, SparseMatrix"] = r.referToSelf(p => (b, g) => c.DS(...o(b, g), p, !1)), l["Array, SparseMatrix"] = r.referToSelf(p => (b, g) => c.DS(...o(i(b), g), p, !1))), s && (l["SparseMatrix, DenseMatrix"] = r.referToSelf(p => (b, g) => s(...o(g, b), p, !0)), l["SparseMatrix, Array"] = r.referToSelf(p => (b, g) => s(...o(i(g), b), p, !0))));
      var m = c.scalar || "any",
        v = c.Ds || c.Ss;
      v && (u ? (l["DenseMatrix," + m] = (p, b) => a(p, b, u, !1), l[m + ", DenseMatrix"] = (p, b) => a(b, p, u, !0), l["Array," + m] = (p, b) => a(i(p), b, u, !1).valueOf(), l[m + ", Array"] = (p, b) => a(i(b), p, u, !0).valueOf()) : (l["DenseMatrix," + m] = r.referToSelf(p => (b, g) => a(b, g, p, !1)), l[m + ", DenseMatrix"] = r.referToSelf(p => (b, g) => a(g, b, p, !0)), l["Array," + m] = r.referToSelf(p => (b, g) => a(i(b), g, p, !1).valueOf()), l[m + ", Array"] = r.referToSelf(p => (b, g) => a(i(g), b, p, !0).valueOf())));
      var d = c.sS !== void 0 ? c.sS : c.Ss;
      return u ? (c.Ss && (l["SparseMatrix," + m] = (p, b) => c.Ss(p, b, u, !1)), d && (l[m + ", SparseMatrix"] = (p, b) => d(b, p, u, !0))) : (c.Ss && (l["SparseMatrix," + m] = r.referToSelf(p => (b, g) => c.Ss(b, g, p, !1))), d && (l[m + ", SparseMatrix"] = r.referToSelf(p => (b, g) => d(g, b, p, !0)))), u && u.signatures && Gf(l, u.signatures), l
    }
  }),
  Qs = "mod",
  V1 = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"],
  gv = z(Qs, V1, e => {
    var {
      typed: r,
      config: i,
      round: n,
      matrix: t,
      equalScalar: a,
      zeros: o,
      DenseMatrix: f,
      concat: c
    } = e, u = hv({
      typed: r,
      config: i,
      round: n,
      matrix: t,
      equalScalar: a,
      zeros: o,
      DenseMatrix: f
    }), s = ut({
      typed: r,
      equalScalar: a
    }), l = _r({
      typed: r
    }), m = wi({
      typed: r,
      equalScalar: a
    }), v = Nr({
      typed: r,
      equalScalar: a
    }), d = hr({
      typed: r,
      DenseMatrix: f
    }), p = or({
      typed: r,
      matrix: t,
      concat: c
    });
    return r(Qs, {
      "number, number": b,
      "BigNumber, BigNumber": function(N, h) {
        return h.isZero() ? N : N.sub(h.mul(u(N.div(h))))
      },
      "Fraction, Fraction": function(N, h) {
        return h.equals(0) ? N : N.sub(h.mul(u(N.div(h))))
      }
    }, p({
      SS: m,
      DS: l,
      SD: s,
      Ss: v,
      sS: d
    }));

    function b(g, N) {
      return N === 0 ? g : g - N * u(g / N)
    }
  }),
  Z1 = "matAlgo01xDSid",
  Y1 = ["typed"],
  Lt = z(Z1, Y1, e => {
    var {
      typed: r
    } = e;
    return function(n, t, a, o) {
      var f = n._data,
        c = n._size,
        u = n._datatype,
        s = t._values,
        l = t._index,
        m = t._ptr,
        v = t._size,
        d = t._datatype;
      if (c.length !== v.length) throw new Ue(c.length, v.length);
      if (c[0] !== v[0] || c[1] !== v[1]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + v + ")");
      if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
      var p = c[0],
        b = c[1],
        g = typeof u == "string" && u === d ? u : void 0,
        N = g ? r.find(a, [g, g]) : a,
        h, x, w = [];
      for (h = 0; h < p; h++) w[h] = [];
      var y = [],
        A = [];
      for (x = 0; x < b; x++) {
        for (var E = x + 1, D = m[x], S = m[x + 1], C = D; C < S; C++) h = l[C], y[h] = o ? N(s[C], f[h][x]) : N(f[h][x], s[C]), A[h] = E;
        for (h = 0; h < p; h++) A[h] === E ? w[h][x] = y[h] : w[h][x] = f[h][x]
      }
      return n.createDenseMatrix({
        data: w,
        size: [p, b],
        datatype: g
      })
    }
  }),
  W1 = "matAlgo04xSidSid",
  Q1 = ["typed", "equalScalar"],
  Do = z(W1, Q1, e => {
    var {
      typed: r,
      equalScalar: i
    } = e;
    return function(t, a, o) {
      var f = t._values,
        c = t._index,
        u = t._ptr,
        s = t._size,
        l = t._datatype,
        m = a._values,
        v = a._index,
        d = a._ptr,
        p = a._size,
        b = a._datatype;
      if (s.length !== p.length) throw new Ue(s.length, p.length);
      if (s[0] !== p[0] || s[1] !== p[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
      var g = s[0],
        N = s[1],
        h, x = i,
        w = 0,
        y = o;
      typeof l == "string" && l === b && (h = l, x = r.find(i, [h, h]), w = r.convert(0, h), y = r.find(o, [h, h]));
      var A = f && m ? [] : void 0,
        E = [],
        D = [],
        S = f && m ? [] : void 0,
        C = f && m ? [] : void 0,
        M = [],
        $ = [],
        I, _, T, B, U;
      for (_ = 0; _ < N; _++) {
        D[_] = E.length;
        var O = _ + 1;
        for (B = u[_], U = u[_ + 1], T = B; T < U; T++) I = c[T], E.push(I), M[I] = O, S && (S[I] = f[T]);
        for (B = d[_], U = d[_ + 1], T = B; T < U; T++)
          if (I = v[T], M[I] === O) {
            if (S) {
              var V = y(S[I], m[T]);
              x(V, w) ? M[I] = null : S[I] = V
            }
          } else E.push(I), $[I] = O, C && (C[I] = m[T]);
        if (S && C)
          for (T = D[_]; T < E.length;) I = E[T], M[I] === O ? (A[T] = S[I], T++) : $[I] === O ? (A[T] = C[I], T++) : E.splice(T, 1)
      }
      return D[N] = E.length, t.createSparseMatrix({
        values: A,
        index: E,
        ptr: D,
        size: [g, N],
        datatype: h
      })
    }
  }),
  X1 = "matAlgo10xSids",
  J1 = ["typed", "DenseMatrix"],
  Jt = z(X1, J1, e => {
    var {
      typed: r,
      DenseMatrix: i
    } = e;
    return function(t, a, o, f) {
      var c = t._values,
        u = t._index,
        s = t._ptr,
        l = t._size,
        m = t._datatype;
      if (!c) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
      var v = l[0],
        d = l[1],
        p, b = o;
      typeof m == "string" && (p = m, a = r.convert(a, p), b = r.find(o, [p, p]));
      for (var g = [], N = [], h = [], x = 0; x < d; x++) {
        for (var w = x + 1, y = s[x], A = s[x + 1], E = y; E < A; E++) {
          var D = u[E];
          N[D] = c[E], h[D] = w
        }
        for (var S = 0; S < v; S++) x === 0 && (g[S] = []), h[S] === w ? g[S][x] = f ? b(a, N[S]) : b(N[S], a) : g[S][x] = a
      }
      return new i({
        data: g,
        size: [v, d],
        datatype: p
      })
    }
  });

function Kt(e, r, i, n) {
  if (!(this instanceof Kt)) throw new SyntaxError("Constructor must be called with the new operator");
  this.fn = e, this.count = r, this.min = i, this.max = n, this.message = "Wrong number of arguments in function " + e + " (" + r + " provided, " + i + (n != null ? "-" + n : "") + " expected)", this.stack = new Error().stack
}
Kt.prototype = new Error;
Kt.prototype.constructor = Error;
Kt.prototype.name = "ArgumentsError";
Kt.prototype.isArgumentsError = !0;
var Xs = "gcd",
  K1 = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "BigNumber", "DenseMatrix", "concat"],
  zi = "number | BigNumber | Fraction | Matrix | Array",
  j1 = "".concat(zi, ", ").concat(zi, ", ...").concat(zi);

function Js(e) {
  return !e.some(r => Array.isArray(r))
}
var ey = z(Xs, K1, e => {
    var {
      typed: r,
      matrix: i,
      config: n,
      round: t,
      equalScalar: a,
      zeros: o,
      BigNumber: f,
      DenseMatrix: c,
      concat: u
    } = e, s = gv({
      typed: r,
      config: n,
      round: t,
      matrix: i,
      equalScalar: a,
      zeros: o,
      DenseMatrix: c,
      concat: u
    }), l = Lt({
      typed: r
    }), m = Do({
      typed: r,
      equalScalar: a
    }), v = Jt({
      typed: r,
      DenseMatrix: c
    }), d = or({
      typed: r,
      matrix: i,
      concat: u
    });
    return r(Xs, {
      "number, number": p,
      "BigNumber, BigNumber": b,
      "Fraction, Fraction": (g, N) => g.gcd(N)
    }, d({
      SS: m,
      DS: l,
      Ss: v
    }), {
      [j1]: r.referToSelf(g => (N, h, x) => {
        for (var w = g(N, h), y = 0; y < x.length; y++) w = g(w, x[y]);
        return w
      }),
      Array: r.referToSelf(g => N => {
        if (N.length === 1 && Array.isArray(N[0]) && Js(N[0])) return g(...N[0]);
        if (Js(N)) return g(...N);
        throw new Kt("gcd() supports only 1d matrices!")
      }),
      Matrix: r.referToSelf(g => N => g(N.toArray()))
    });

    function p(g, N) {
      if (!Se(g) || !Se(N)) throw new Error("Parameters in function gcd must be integer numbers");
      for (var h; N !== 0;) h = s(g, N), g = N, N = h;
      return g < 0 ? -g : g
    }

    function b(g, N) {
      if (!g.isInt() || !N.isInt()) throw new Error("Parameters in function gcd must be integer numbers");
      for (var h = new f(0); !N.isZero();) {
        var x = s(g, N);
        g = N, N = x
      }
      return g.lt(h) ? g.neg() : g
    }
  }),
  ry = "matAlgo06xS0S0",
  ty = ["typed", "equalScalar"],
  Ni = z(ry, ty, e => {
    var {
      typed: r,
      equalScalar: i
    } = e;
    return function(t, a, o) {
      var f = t._values,
        c = t._size,
        u = t._datatype,
        s = a._values,
        l = a._size,
        m = a._datatype;
      if (c.length !== l.length) throw new Ue(c.length, l.length);
      if (c[0] !== l[0] || c[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + l + ")");
      var v = c[0],
        d = c[1],
        p, b = i,
        g = 0,
        N = o;
      typeof u == "string" && u === m && (p = u, b = r.find(i, [p, p]), g = r.convert(0, p), N = r.find(o, [p, p]));
      for (var h = f && s ? [] : void 0, x = [], w = [], y = h ? [] : void 0, A = [], E = [], D = 0; D < d; D++) {
        w[D] = x.length;
        var S = D + 1;
        if (xs(t, D, A, y, E, S, x, N), xs(a, D, A, y, E, S, x, N), y)
          for (var C = w[D]; C < x.length;) {
            var M = x[C];
            if (E[M] === S) {
              var $ = y[M];
              b($, g) ? x.splice(C, 1) : (h.push($), C++)
            } else x.splice(C, 1)
          } else
            for (var I = w[D]; I < x.length;) {
              var _ = x[I];
              E[_] !== S ? x.splice(I, 1) : I++
            }
      }
      return w[d] = x.length, t.createSparseMatrix({
        values: h,
        index: x,
        ptr: w,
        size: [v, d],
        datatype: p
      })
    }
  }),
  Ks = "lcm",
  ny = ["typed", "matrix", "equalScalar", "concat"],
  ay = z(Ks, ny, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      concat: t
    } = e, a = ut({
      typed: r,
      equalScalar: n
    }), o = Ni({
      typed: r,
      equalScalar: n
    }), f = Nr({
      typed: r,
      equalScalar: n
    }), c = or({
      typed: r,
      matrix: i,
      concat: t
    }), u = "number | BigNumber | Fraction | Matrix | Array", s = {};
    return s["".concat(u, ", ").concat(u, ", ...").concat(u)] = r.referToSelf(m => (v, d, p) => {
      for (var b = m(v, d), g = 0; g < p.length; g++) b = m(b, p[g]);
      return b
    }), r(Ks, {
      "number, number": Bm,
      "BigNumber, BigNumber": l,
      "Fraction, Fraction": (m, v) => m.lcm(v)
    }, c({
      SS: o,
      DS: a,
      Ss: f
    }), s);

    function l(m, v) {
      if (!m.isInt() || !v.isInt()) throw new Error("Parameters in function lcm must be integer numbers");
      if (m.isZero()) return m;
      if (v.isZero()) return v;
      for (var d = m.times(v); !v.isZero();) {
        var p = v;
        v = m.mod(p), m = p
      }
      return d.div(m).abs()
    }
  }),
  js = "log10",
  iy = ["typed", "config", "Complex"],
  oy = z(js, iy, e => {
    var {
      typed: r,
      config: i,
      Complex: n
    } = e;
    return r(js, {
      number: function(a) {
        return a >= 0 || i.predictable ? Tm(a) : new n(a, 0).log().div(Math.LN10)
      },
      Complex: function(a) {
        return new n(a).log().div(Math.LN10)
      },
      BigNumber: function(a) {
        return !a.isNegative() || i.predictable ? a.log() : new n(a.toNumber(), 0).log().div(Math.LN10)
      },
      "Array | Matrix": r.referToSelf(t => a => Le(a, t))
    })
  }),
  eu = "log2",
  sy = ["typed", "config", "Complex"],
  uy = z(eu, sy, e => {
    var {
      typed: r,
      config: i,
      Complex: n
    } = e;
    return r(eu, {
      number: function(o) {
        return o >= 0 || i.predictable ? Om(o) : t(new n(o, 0))
      },
      Complex: t,
      BigNumber: function(o) {
        return !o.isNegative() || i.predictable ? o.log(2) : t(new n(o.toNumber(), 0))
      },
      "Array | Matrix": r.referToSelf(a => o => Le(o, a))
    });

    function t(a) {
      var o = Math.sqrt(a.re * a.re + a.im * a.im);
      return new n(Math.log2 ? Math.log2(o) : Math.log(o) / Math.LN2, Math.atan2(a.im, a.re) / Math.LN2)
    }
  }),
  ly = "multiplyScalar",
  cy = ["typed"],
  fy = z(ly, cy, e => {
    var {
      typed: r
    } = e;
    return r("multiplyScalar", {
      "number, number": Am,
      "Complex, Complex": function(n, t) {
        return n.mul(t)
      },
      "BigNumber, BigNumber": function(n, t) {
        return n.times(t)
      },
      "Fraction, Fraction": function(n, t) {
        return n.mul(t)
      },
      "number | Fraction | BigNumber | Complex, Unit": (i, n) => n.multiply(i),
      "Unit, number | Fraction | BigNumber | Complex | Unit": (i, n) => i.multiply(n)
    })
  }),
  ru = "multiply",
  my = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"],
  vy = z(ru, my, e => {
    var {
      typed: r,
      matrix: i,
      addScalar: n,
      multiplyScalar: t,
      equalScalar: a,
      dot: o
    } = e, f = Nr({
      typed: r,
      equalScalar: a
    }), c = st({
      typed: r
    });

    function u(w, y) {
      switch (w.length) {
        case 1:
          switch (y.length) {
            case 1:
              if (w[0] !== y[0]) throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
              break;
            case 2:
              if (w[0] !== y[0]) throw new RangeError("Dimension mismatch in multiplication. Vector length (" + w[0] + ") must match Matrix rows (" + y[0] + ")");
              break;
            default:
              throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + y.length + " dimensions)")
          }
          break;
        case 2:
          switch (y.length) {
            case 1:
              if (w[1] !== y[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + w[1] + ") must match Vector length (" + y[0] + ")");
              break;
            case 2:
              if (w[1] !== y[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + w[1] + ") must match Matrix B rows (" + y[0] + ")");
              break;
            default:
              throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + y.length + " dimensions)")
          }
          break;
        default:
          throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + w.length + " dimensions)")
      }
    }

    function s(w, y, A) {
      if (A === 0) throw new Error("Cannot multiply two empty vectors");
      return o(w, y)
    }

    function l(w, y) {
      if (y.storage() !== "dense") throw new Error("Support for SparseMatrix not implemented");
      return m(w, y)
    }

    function m(w, y) {
      var A = w._data,
        E = w._size,
        D = w._datatype,
        S = y._data,
        C = y._size,
        M = y._datatype,
        $ = E[0],
        I = C[1],
        _, T = n,
        B = t;
      D && M && D === M && typeof D == "string" && (_ = D, T = r.find(n, [_, _]), B = r.find(t, [_, _]));
      for (var U = [], O = 0; O < I; O++) {
        for (var V = B(A[0], S[0][O]), J = 1; J < $; J++) V = T(V, B(A[J], S[J][O]));
        U[O] = V
      }
      return w.createDenseMatrix({
        data: U,
        size: [I],
        datatype: _
      })
    }
    var v = r("_multiplyMatrixVector", {
        "DenseMatrix, any": p,
        "SparseMatrix, any": N
      }),
      d = r("_multiplyMatrixMatrix", {
        "DenseMatrix, DenseMatrix": b,
        "DenseMatrix, SparseMatrix": g,
        "SparseMatrix, DenseMatrix": h,
        "SparseMatrix, SparseMatrix": x
      });

    function p(w, y) {
      var A = w._data,
        E = w._size,
        D = w._datatype,
        S = y._data,
        C = y._datatype,
        M = E[0],
        $ = E[1],
        I, _ = n,
        T = t;
      D && C && D === C && typeof D == "string" && (I = D, _ = r.find(n, [I, I]), T = r.find(t, [I, I]));
      for (var B = [], U = 0; U < M; U++) {
        for (var O = A[U], V = T(O[0], S[0]), J = 1; J < $; J++) V = _(V, T(O[J], S[J]));
        B[U] = V
      }
      return w.createDenseMatrix({
        data: B,
        size: [M],
        datatype: I
      })
    }

    function b(w, y) {
      var A = w._data,
        E = w._size,
        D = w._datatype,
        S = y._data,
        C = y._size,
        M = y._datatype,
        $ = E[0],
        I = E[1],
        _ = C[1],
        T, B = n,
        U = t;
      D && M && D === M && typeof D == "string" && (T = D, B = r.find(n, [T, T]), U = r.find(t, [T, T]));
      for (var O = [], V = 0; V < $; V++) {
        var J = A[V];
        O[V] = [];
        for (var Z = 0; Z < _; Z++) {
          for (var q = U(J[0], S[0][Z]), X = 1; X < I; X++) q = B(q, U(J[X], S[X][Z]));
          O[V][Z] = q
        }
      }
      return w.createDenseMatrix({
        data: O,
        size: [$, _],
        datatype: T
      })
    }

    function g(w, y) {
      var A = w._data,
        E = w._size,
        D = w._datatype,
        S = y._values,
        C = y._index,
        M = y._ptr,
        $ = y._size,
        I = y._datatype;
      if (!S) throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
      var _ = E[0],
        T = $[1],
        B, U = n,
        O = t,
        V = a,
        J = 0;
      D && I && D === I && typeof D == "string" && (B = D, U = r.find(n, [B, B]), O = r.find(t, [B, B]), V = r.find(a, [B, B]), J = r.convert(0, B));
      for (var Z = [], q = [], X = [], ie = y.createSparseMatrix({
          values: Z,
          index: q,
          ptr: X,
          size: [_, T],
          datatype: B
        }), Q = 0; Q < T; Q++) {
        X[Q] = q.length;
        var ee = M[Q],
          ue = M[Q + 1];
        if (ue > ee)
          for (var re = 0, ne = 0; ne < _; ne++) {
            for (var le = ne + 1, se = void 0, ge = ee; ge < ue; ge++) {
              var Ae = C[ge];
              re !== le ? (se = O(A[ne][Ae], S[ge]), re = le) : se = U(se, O(A[ne][Ae], S[ge]))
            }
            re === le && !V(se, J) && (q.push(ne), Z.push(se))
          }
      }
      return X[T] = q.length, ie
    }

    function N(w, y) {
      var A = w._values,
        E = w._index,
        D = w._ptr,
        S = w._datatype;
      if (!A) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
      var C = y._data,
        M = y._datatype,
        $ = w._size[0],
        I = y._size[0],
        _ = [],
        T = [],
        B = [],
        U, O = n,
        V = t,
        J = a,
        Z = 0;
      S && M && S === M && typeof S == "string" && (U = S, O = r.find(n, [U, U]), V = r.find(t, [U, U]), J = r.find(a, [U, U]), Z = r.convert(0, U));
      var q = [],
        X = [];
      B[0] = 0;
      for (var ie = 0; ie < I; ie++) {
        var Q = C[ie];
        if (!J(Q, Z))
          for (var ee = D[ie], ue = D[ie + 1], re = ee; re < ue; re++) {
            var ne = E[re];
            X[ne] ? q[ne] = O(q[ne], V(Q, A[re])) : (X[ne] = !0, T.push(ne), q[ne] = V(Q, A[re]))
          }
      }
      for (var le = T.length, se = 0; se < le; se++) {
        var ge = T[se];
        _[se] = q[ge]
      }
      return B[1] = T.length, w.createSparseMatrix({
        values: _,
        index: T,
        ptr: B,
        size: [$, 1],
        datatype: U
      })
    }

    function h(w, y) {
      var A = w._values,
        E = w._index,
        D = w._ptr,
        S = w._datatype;
      if (!A) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
      var C = y._data,
        M = y._datatype,
        $ = w._size[0],
        I = y._size[0],
        _ = y._size[1],
        T, B = n,
        U = t,
        O = a,
        V = 0;
      S && M && S === M && typeof S == "string" && (T = S, B = r.find(n, [T, T]), U = r.find(t, [T, T]), O = r.find(a, [T, T]), V = r.convert(0, T));
      for (var J = [], Z = [], q = [], X = w.createSparseMatrix({
          values: J,
          index: Z,
          ptr: q,
          size: [$, _],
          datatype: T
        }), ie = [], Q = [], ee = 0; ee < _; ee++) {
        q[ee] = Z.length;
        for (var ue = ee + 1, re = 0; re < I; re++) {
          var ne = C[re][ee];
          if (!O(ne, V))
            for (var le = D[re], se = D[re + 1], ge = le; ge < se; ge++) {
              var Ae = E[ge];
              Q[Ae] !== ue ? (Q[Ae] = ue, Z.push(Ae), ie[Ae] = U(ne, A[ge])) : ie[Ae] = B(ie[Ae], U(ne, A[ge]))
            }
        }
        for (var P = q[ee], H = Z.length, te = P; te < H; te++) {
          var k = Z[te];
          J[te] = ie[k]
        }
      }
      return q[_] = Z.length, X
    }

    function x(w, y) {
      var A = w._values,
        E = w._index,
        D = w._ptr,
        S = w._datatype,
        C = y._values,
        M = y._index,
        $ = y._ptr,
        I = y._datatype,
        _ = w._size[0],
        T = y._size[1],
        B = A && C,
        U, O = n,
        V = t;
      S && I && S === I && typeof S == "string" && (U = S, O = r.find(n, [U, U]), V = r.find(t, [U, U]));
      for (var J = B ? [] : void 0, Z = [], q = [], X = w.createSparseMatrix({
          values: J,
          index: Z,
          ptr: q,
          size: [_, T],
          datatype: U
        }), ie = B ? [] : void 0, Q = [], ee, ue, re, ne, le, se, ge, Ae, P = 0; P < T; P++) {
        q[P] = Z.length;
        var H = P + 1;
        for (le = $[P], se = $[P + 1], ne = le; ne < se; ne++)
          if (Ae = M[ne], B)
            for (ue = D[Ae], re = D[Ae + 1], ee = ue; ee < re; ee++) ge = E[ee], Q[ge] !== H ? (Q[ge] = H, Z.push(ge), ie[ge] = V(C[ne], A[ee])) : ie[ge] = O(ie[ge], V(C[ne], A[ee]));
          else
            for (ue = D[Ae], re = D[Ae + 1], ee = ue; ee < re; ee++) ge = E[ee], Q[ge] !== H && (Q[ge] = H, Z.push(ge));
        if (B)
          for (var te = q[P], k = Z.length, W = te; W < k; W++) {
            var K = Z[W];
            J[W] = ie[K]
          }
      }
      return q[T] = Z.length, X
    }
    return r(ru, t, {
      "Array, Array": r.referTo("Matrix, Matrix", w => (y, A) => {
        u(qe(y), qe(A));
        var E = w(i(y), i(A));
        return Fe(E) ? E.valueOf() : E
      }),
      "Matrix, Matrix": function(y, A) {
        var E = y.size(),
          D = A.size();
        return u(E, D), E.length === 1 ? D.length === 1 ? s(y, A, E[0]) : l(y, A) : D.length === 1 ? v(y, A) : d(y, A)
      },
      "Matrix, Array": r.referTo("Matrix,Matrix", w => (y, A) => w(y, i(A))),
      "Array, Matrix": r.referToSelf(w => (y, A) => w(i(y, A.storage()), A)),
      "SparseMatrix, any": function(y, A) {
        return f(y, A, t, !1)
      },
      "DenseMatrix, any": function(y, A) {
        return c(y, A, t, !1)
      },
      "any, SparseMatrix": function(y, A) {
        return f(A, y, t, !0)
      },
      "any, DenseMatrix": function(y, A) {
        return c(A, y, t, !0)
      },
      "Array, any": function(y, A) {
        return c(i(y), A, t, !1).valueOf()
      },
      "any, Array": function(y, A) {
        return c(i(A), y, t, !0).valueOf()
      },
      "any, any": t,
      "any, any, ...any": r.referToSelf(w => (y, A, E) => {
        for (var D = w(y, A), S = 0; S < E.length; S++) D = w(D, E[S]);
        return D
      })
    })
  }),
  tu = "nthRoot",
  py = ["typed", "matrix", "equalScalar", "BigNumber", "concat"],
  dy = z(tu, py, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      BigNumber: t,
      concat: a
    } = e, o = Lt({
      typed: r
    }), f = ut({
      typed: r,
      equalScalar: n
    }), c = Ni({
      typed: r,
      equalScalar: n
    }), u = Nr({
      typed: r,
      equalScalar: n
    }), s = or({
      typed: r,
      matrix: i,
      concat: a
    });

    function l() {
      throw new Error("Complex number not supported in function nthRoot. Use nthRoots instead.")
    }
    return r(tu, {
      number: Ns,
      "number, number": Ns,
      BigNumber: v => m(v, new t(2)),
      "BigNumber, BigNumber": m,
      Complex: l,
      "Complex, number": l,
      Array: r.referTo("DenseMatrix,number", v => d => v(i(d), 2).valueOf()),
      DenseMatrix: r.referTo("DenseMatrix,number", v => d => v(d, 2)),
      SparseMatrix: r.referTo("SparseMatrix,number", v => d => v(d, 2)),
      "SparseMatrix, SparseMatrix": r.referToSelf(v => (d, p) => {
        if (p.density() === 1) return c(d, p, v);
        throw new Error("Root must be non-zero")
      }),
      "DenseMatrix, SparseMatrix": r.referToSelf(v => (d, p) => {
        if (p.density() === 1) return o(d, p, v, !1);
        throw new Error("Root must be non-zero")
      }),
      "Array, SparseMatrix": r.referTo("DenseMatrix,SparseMatrix", v => (d, p) => v(i(d), p)),
      "number | BigNumber, SparseMatrix": r.referToSelf(v => (d, p) => {
        if (p.density() === 1) return u(p, d, v, !0);
        throw new Error("Root must be non-zero")
      })
    }, s({
      scalar: "number | BigNumber",
      SD: f,
      Ss: u,
      sS: !1
    }));

    function m(v, d) {
      var p = t.precision,
        b = t.clone({
          precision: p + 2
        }),
        g = new t(0),
        N = new b(1),
        h = d.isNegative();
      if (h && (d = d.neg()), d.isZero()) throw new Error("Root must be non-zero");
      if (v.isNegative() && !d.abs().mod(2).equals(1)) throw new Error("Root must be odd when a is negative.");
      if (v.isZero()) return h ? new b(1 / 0) : 0;
      if (!v.isFinite()) return h ? g : v;
      var x = v.abs().pow(N.div(d));
      return x = v.isNeg() ? x.neg() : x, new t((h ? N.div(x) : x).toPrecision(p))
    }
  }),
  nu = "sign",
  hy = ["typed", "BigNumber", "Fraction", "complex"],
  gy = z(nu, hy, e => {
    var {
      typed: r,
      BigNumber: i,
      complex: n,
      Fraction: t
    } = e;
    return r(nu, {
      number: ji,
      Complex: function(o) {
        return o.im === 0 ? n(ji(o.re)) : o.sign()
      },
      BigNumber: function(o) {
        return new i(o.cmp(0))
      },
      Fraction: function(o) {
        return new t(o.s, 1)
      },
      "Array | Matrix": r.referToSelf(a => o => Le(o, a)),
      Unit: r.referToSelf(a => o => {
        if (!o._isDerived() && o.units[0].unit.offset !== 0) throw new TypeError("sign is ambiguous for units with offset");
        return r.find(a, o.valueType())(o.value)
      })
    })
  }),
  yy = "sqrt",
  by = ["config", "typed", "Complex"],
  xy = z(yy, by, e => {
    var {
      config: r,
      typed: i,
      Complex: n
    } = e;
    return i("sqrt", {
      number: t,
      Complex: function(o) {
        return o.sqrt()
      },
      BigNumber: function(o) {
        return !o.isNegative() || r.predictable ? o.sqrt() : t(o.toNumber())
      },
      Unit: function(o) {
        return o.pow(.5)
      }
    });

    function t(a) {
      return isNaN(a) ? NaN : a >= 0 || r.predictable ? Math.sqrt(a) : new n(a, 0).sqrt()
    }
  }),
  au = "square",
  wy = ["typed"],
  Ny = z(au, wy, e => {
    var {
      typed: r
    } = e;
    return r(au, {
      number: $m,
      Complex: function(n) {
        return n.mul(n)
      },
      BigNumber: function(n) {
        return n.times(n)
      },
      Fraction: function(n) {
        return n.mul(n)
      },
      Unit: function(n) {
        return n.pow(2)
      }
    })
  }),
  iu = "subtract",
  Dy = ["typed", "matrix", "equalScalar", "subtractScalar", "unaryMinus", "DenseMatrix", "concat"],
  Ay = z(iu, Dy, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      subtractScalar: t,
      unaryMinus: a,
      DenseMatrix: o,
      concat: f
    } = e, c = Lt({
      typed: r
    }), u = _r({
      typed: r
    }), s = wi({
      typed: r,
      equalScalar: n
    }), l = Jt({
      typed: r,
      DenseMatrix: o
    }), m = hr({
      typed: r,
      DenseMatrix: o
    }), v = or({
      typed: r,
      matrix: i,
      concat: f
    });
    return r(iu, {
      "any, any": t
    }, v({
      elop: t,
      SS: s,
      DS: c,
      SD: u,
      Ss: m,
      sS: l
    }))
  }),
  ou = "xgcd",
  Ey = ["typed", "config", "matrix", "BigNumber"],
  Sy = z(ou, Ey, e => {
    var {
      typed: r,
      config: i,
      matrix: n,
      BigNumber: t
    } = e;
    return r(ou, {
      "number, number": function(f, c) {
        var u = _m(f, c);
        return i.matrix === "Array" ? u : n(u)
      },
      "BigNumber, BigNumber": a
    });

    function a(o, f) {
      var c, u, s, l = new t(0),
        m = new t(1),
        v = l,
        d = m,
        p = m,
        b = l;
      if (!o.isInt() || !f.isInt()) throw new Error("Parameters in function xgcd must be integer numbers");
      for (; !f.isZero();) u = o.div(f).floor(), s = o.mod(f), c = v, v = d.minus(u.times(v)), d = c, c = p, p = b.minus(u.times(p)), b = c, o = f, f = s;
      var g;
      return o.lt(l) ? g = [o.neg(), d.neg(), b.neg()] : g = [o, o.isZero() ? 0 : d, b], i.matrix === "Array" ? g : n(g)
    }
  }),
  su = "invmod",
  Cy = ["typed", "config", "BigNumber", "xgcd", "equal", "smaller", "mod", "add", "isInteger"],
  My = z(su, Cy, e => {
    var {
      typed: r,
      config: i,
      BigNumber: n,
      xgcd: t,
      equal: a,
      smaller: o,
      mod: f,
      add: c,
      isInteger: u
    } = e;
    return r(su, {
      "number, number": s,
      "BigNumber, BigNumber": s
    });

    function s(l, m) {
      if (!u(l) || !u(m)) throw new Error("Parameters in function invmod must be integer numbers");
      if (l = f(l, m), a(m, 0)) throw new Error("Divisor must be non zero");
      var v = t(l, m);
      v = v.valueOf();
      var [d, p] = v;
      return a(d, n(1)) ? (p = f(p, m), o(p, n(0)) && (p = c(p, m)), p) : NaN
    }
  }),
  Fy = "matAlgo09xS0Sf",
  By = ["typed", "equalScalar"],
  yv = z(Fy, By, e => {
    var {
      typed: r,
      equalScalar: i
    } = e;
    return function(t, a, o) {
      var f = t._values,
        c = t._index,
        u = t._ptr,
        s = t._size,
        l = t._datatype,
        m = a._values,
        v = a._index,
        d = a._ptr,
        p = a._size,
        b = a._datatype;
      if (s.length !== p.length) throw new Ue(s.length, p.length);
      if (s[0] !== p[0] || s[1] !== p[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
      var g = s[0],
        N = s[1],
        h, x = i,
        w = 0,
        y = o;
      typeof l == "string" && l === b && (h = l, x = r.find(i, [h, h]), w = r.convert(0, h), y = r.find(o, [h, h]));
      var A = f && m ? [] : void 0,
        E = [],
        D = [],
        S = A ? [] : void 0,
        C = [],
        M, $, I, _, T;
      for ($ = 0; $ < N; $++) {
        D[$] = E.length;
        var B = $ + 1;
        if (S)
          for (_ = d[$], T = d[$ + 1], I = _; I < T; I++) M = v[I], C[M] = B, S[M] = m[I];
        for (_ = u[$], T = u[$ + 1], I = _; I < T; I++)
          if (M = c[I], S) {
            var U = C[M] === B ? S[M] : w,
              O = y(f[I], U);
            x(O, w) || (E.push(M), A.push(O))
          } else E.push(M)
      }
      return D[N] = E.length, t.createSparseMatrix({
        values: A,
        index: E,
        ptr: D,
        size: [g, N],
        datatype: h
      })
    }
  }),
  uu = "dotMultiply",
  Ty = ["typed", "matrix", "equalScalar", "multiplyScalar", "concat"],
  Oy = z(uu, Ty, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      multiplyScalar: t,
      concat: a
    } = e, o = ut({
      typed: r,
      equalScalar: n
    }), f = yv({
      typed: r,
      equalScalar: n
    }), c = Nr({
      typed: r,
      equalScalar: n
    }), u = or({
      typed: r,
      matrix: i,
      concat: a
    });
    return r(uu, u({
      elop: t,
      SS: f,
      DS: o,
      Ss: c
    }))
  });

function $y(e, r) {
  if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger()) throw new Error("Integers expected in function bitAnd");
  var i = e.constructor;
  if (e.isNaN() || r.isNaN()) return new i(NaN);
  if (e.isZero() || r.eq(-1) || e.eq(r)) return e;
  if (r.isZero() || e.eq(-1)) return r;
  if (!e.isFinite() || !r.isFinite()) {
    if (!e.isFinite() && !r.isFinite()) return e.isNegative() === r.isNegative() ? e : new i(0);
    if (!e.isFinite()) return r.isNegative() ? e : e.isNegative() ? new i(0) : r;
    if (!r.isFinite()) return e.isNegative() ? r : r.isNegative() ? new i(0) : e
  }
  return Ao(e, r, function(n, t) {
    return n & t
  })
}

function ta(e) {
  if (e.isFinite() && !e.isInteger()) throw new Error("Integer expected in function bitNot");
  var r = e.constructor,
    i = r.precision;
  r.config({
    precision: 1e9
  });
  var n = e.plus(new r(1));
  return n.s = -n.s || null, r.config({
    precision: i
  }), n
}

function _y(e, r) {
  if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger()) throw new Error("Integers expected in function bitOr");
  var i = e.constructor;
  if (e.isNaN() || r.isNaN()) return new i(NaN);
  var n = new i(-1);
  return e.isZero() || r.eq(n) || e.eq(r) ? r : r.isZero() || e.eq(n) ? e : !e.isFinite() || !r.isFinite() ? !e.isFinite() && !e.isNegative() && r.isNegative() || e.isNegative() && !r.isNegative() && !r.isFinite() ? n : e.isNegative() && r.isNegative() ? e.isFinite() ? e : r : e.isFinite() ? r : e : Ao(e, r, function(t, a) {
    return t | a
  })
}

function Ao(e, r, i) {
  var n = e.constructor,
    t, a, o = +(e.s < 0),
    f = +(r.s < 0);
  if (o) {
    t = Na(ta(e));
    for (var c = 0; c < t.length; ++c) t[c] ^= 1
  } else t = Na(e);
  if (f) {
    a = Na(ta(r));
    for (var u = 0; u < a.length; ++u) a[u] ^= 1
  } else a = Na(r);
  var s, l, m;
  t.length <= a.length ? (s = t, l = a, m = o) : (s = a, l = t, m = f);
  var v = s.length,
    d = l.length,
    p = i(o, f) ^ 1,
    b = new n(p ^ 1),
    g = new n(1),
    N = new n(2),
    h = n.precision;
  for (n.config({
      precision: 1e9
    }); v > 0;) i(s[--v], l[--d]) === p && (b = b.plus(g)), g = g.times(N);
  for (; d > 0;) i(m, l[--d]) === p && (b = b.plus(g)), g = g.times(N);
  return n.config({
    precision: h
  }), p === 0 && (b.s = -b.s), b
}

function Na(e) {
  for (var r = e.d, i = r[0] + "", n = 1; n < r.length; ++n) {
    for (var t = r[n] + "", a = 7 - t.length; a--;) t = "0" + t;
    i += t
  }
  for (var o = i.length; i.charAt(o) === "0";) o--;
  var f = e.e,
    c = i.slice(0, o + 1 || 1),
    u = c.length;
  if (f > 0)
    if (++f > u)
      for (f -= u; f--;) c += "0";
    else f < u && (c = c.slice(0, f) + "." + c.slice(f));
  for (var s = [0], l = 0; l < c.length;) {
    for (var m = s.length; m--;) s[m] *= 10;
    s[0] += parseInt(c.charAt(l++));
    for (var v = 0; v < s.length; ++v) s[v] > 1 && ((s[v + 1] === null || s[v + 1] === void 0) && (s[v + 1] = 0), s[v + 1] += s[v] >> 1, s[v] &= 1)
  }
  return s.reverse()
}

function Iy(e, r) {
  if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger()) throw new Error("Integers expected in function bitXor");
  var i = e.constructor;
  if (e.isNaN() || r.isNaN()) return new i(NaN);
  if (e.isZero()) return r;
  if (r.isZero()) return e;
  if (e.eq(r)) return new i(0);
  var n = new i(-1);
  return e.eq(n) ? ta(r) : r.eq(n) ? ta(e) : !e.isFinite() || !r.isFinite() ? !e.isFinite() && !r.isFinite() ? n : new i(e.isNegative() === r.isNegative() ? 1 / 0 : -1 / 0) : Ao(e, r, function(t, a) {
    return t ^ a
  })
}

function qy(e, r) {
  if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger()) throw new Error("Integers expected in function leftShift");
  var i = e.constructor;
  return e.isNaN() || r.isNaN() || r.isNegative() && !r.isZero() ? new i(NaN) : e.isZero() || r.isZero() ? e : !e.isFinite() && !r.isFinite() ? new i(NaN) : r.lt(55) ? e.times(Math.pow(2, r.toNumber()) + "") : e.times(new i(2).pow(r))
}

function Ry(e, r) {
  if (e.isFinite() && !e.isInteger() || r.isFinite() && !r.isInteger()) throw new Error("Integers expected in function rightArithShift");
  var i = e.constructor;
  return e.isNaN() || r.isNaN() || r.isNegative() && !r.isZero() ? new i(NaN) : e.isZero() || r.isZero() ? e : r.isFinite() ? r.lt(55) ? e.div(Math.pow(2, r.toNumber()) + "").floor() : e.div(new i(2).pow(r)).floor() : e.isNegative() ? new i(-1) : e.isFinite() ? new i(0) : new i(NaN)
}
var lu = "bitAnd",
  zy = ["typed", "matrix", "equalScalar", "concat"],
  Py = z(lu, zy, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      concat: t
    } = e, a = ut({
      typed: r,
      equalScalar: n
    }), o = Ni({
      typed: r,
      equalScalar: n
    }), f = Nr({
      typed: r,
      equalScalar: n
    }), c = or({
      typed: r,
      matrix: i,
      concat: t
    });
    return r(lu, {
      "number, number": qm,
      "BigNumber, BigNumber": $y
    }, c({
      SS: o,
      DS: a,
      Ss: f
    }))
  }),
  cu = "bitNot",
  Uy = ["typed"],
  Ly = z(cu, Uy, e => {
    var {
      typed: r
    } = e;
    return r(cu, {
      number: Rm,
      BigNumber: ta,
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  fu = "bitOr",
  ky = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"],
  Hy = z(fu, ky, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      DenseMatrix: t,
      concat: a
    } = e, o = Lt({
      typed: r
    }), f = Do({
      typed: r,
      equalScalar: n
    }), c = Jt({
      typed: r,
      DenseMatrix: t
    }), u = or({
      typed: r,
      matrix: i,
      concat: a
    });
    return r(fu, {
      "number, number": zm,
      "BigNumber, BigNumber": _y
    }, u({
      SS: f,
      DS: o,
      Ss: c
    }))
  }),
  Gy = "matAlgo07xSSf",
  Vy = ["typed", "DenseMatrix"],
  ht = z(Gy, Vy, e => {
    var {
      typed: r,
      DenseMatrix: i
    } = e;
    return function(a, o, f) {
      var c = a._size,
        u = a._datatype,
        s = o._size,
        l = o._datatype;
      if (c.length !== s.length) throw new Ue(c.length, s.length);
      if (c[0] !== s[0] || c[1] !== s[1]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + s + ")");
      var m = c[0],
        v = c[1],
        d, p = 0,
        b = f;
      typeof u == "string" && u === l && (d = u, p = r.convert(0, d), b = r.find(f, [d, d]));
      var g, N, h = [];
      for (g = 0; g < m; g++) h[g] = [];
      var x = [],
        w = [],
        y = [],
        A = [];
      for (N = 0; N < v; N++) {
        var E = N + 1;
        for (n(a, N, y, x, E), n(o, N, A, w, E), g = 0; g < m; g++) {
          var D = y[g] === E ? x[g] : p,
            S = A[g] === E ? w[g] : p;
          h[g][N] = b(D, S)
        }
      }
      return new i({
        data: h,
        size: [m, v],
        datatype: d
      })
    };

    function n(t, a, o, f, c) {
      for (var u = t._values, s = t._index, l = t._ptr, m = l[a], v = l[a + 1]; m < v; m++) {
        var d = s[m];
        o[d] = c, f[d] = u[m]
      }
    }
  }),
  mu = "bitXor",
  Zy = ["typed", "matrix", "DenseMatrix", "concat"],
  Yy = z(mu, Zy, e => {
    var {
      typed: r,
      matrix: i,
      DenseMatrix: n,
      concat: t
    } = e, a = _r({
      typed: r
    }), o = ht({
      typed: r,
      DenseMatrix: n
    }), f = hr({
      typed: r,
      DenseMatrix: n
    }), c = or({
      typed: r,
      matrix: i,
      concat: t
    });
    return r(mu, {
      "number, number": Pm,
      "BigNumber, BigNumber": Iy
    }, c({
      SS: o,
      DS: a,
      Ss: f
    }))
  }),
  vu = "arg",
  Wy = ["typed"],
  Qy = z(vu, Wy, e => {
    var {
      typed: r
    } = e;
    return r(vu, {
      number: function(n) {
        return Math.atan2(0, n)
      },
      BigNumber: function(n) {
        return n.constructor.atan2(0, n)
      },
      Complex: function(n) {
        return n.arg()
      },
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  pu = "conj",
  Xy = ["typed"],
  Jy = z(pu, Xy, e => {
    var {
      typed: r
    } = e;
    return r(pu, {
      "number | BigNumber | Fraction": i => i,
      Complex: i => i.conjugate(),
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  du = "im",
  Ky = ["typed"],
  jy = z(du, Ky, e => {
    var {
      typed: r
    } = e;
    return r(du, {
      number: () => 0,
      "BigNumber | Fraction": i => i.mul(0),
      Complex: i => i.im,
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  hu = "re",
  eb = ["typed"],
  rb = z(hu, eb, e => {
    var {
      typed: r
    } = e;
    return r(hu, {
      "number | BigNumber | Fraction": i => i,
      Complex: i => i.re,
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  gu = "not",
  tb = ["typed"],
  nb = z(gu, tb, e => {
    var {
      typed: r
    } = e;
    return r(gu, {
      "null | undefined": () => !0,
      number: Gm,
      Complex: function(n) {
        return n.re === 0 && n.im === 0
      },
      BigNumber: function(n) {
        return n.isZero() || n.isNaN()
      },
      Unit: r.referToSelf(i => n => r.find(i, n.valueType())(n.value)),
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  yu = "or",
  ab = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"],
  ib = z(yu, ab, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      DenseMatrix: t,
      concat: a
    } = e, o = _r({
      typed: r
    }), f = wi({
      typed: r,
      equalScalar: n
    }), c = hr({
      typed: r,
      DenseMatrix: t
    }), u = or({
      typed: r,
      matrix: i,
      concat: a
    });
    return r(yu, {
      "number, number": Vm,
      "Complex, Complex": function(l, m) {
        return l.re !== 0 || l.im !== 0 || m.re !== 0 || m.im !== 0
      },
      "BigNumber, BigNumber": function(l, m) {
        return !l.isZero() && !l.isNaN() || !m.isZero() && !m.isNaN()
      },
      "Unit, Unit": r.referToSelf(s => (l, m) => s(l.value || 0, m.value || 0))
    }, u({
      SS: f,
      DS: o,
      Ss: c
    }))
  }),
  bu = "xor",
  ob = ["typed", "matrix", "DenseMatrix", "concat"],
  sb = z(bu, ob, e => {
    var {
      typed: r,
      matrix: i,
      DenseMatrix: n,
      concat: t
    } = e, a = _r({
      typed: r
    }), o = ht({
      typed: r,
      DenseMatrix: n
    }), f = hr({
      typed: r,
      DenseMatrix: n
    }), c = or({
      typed: r,
      matrix: i,
      concat: t
    });
    return r(bu, {
      "number, number": Zm,
      "Complex, Complex": function(s, l) {
        return (s.re !== 0 || s.im !== 0) != (l.re !== 0 || l.im !== 0)
      },
      "BigNumber, BigNumber": function(s, l) {
        return (!s.isZero() && !s.isNaN()) != (!l.isZero() && !l.isNaN())
      },
      "Unit, Unit": r.referToSelf(u => (s, l) => u(s.value || 0, l.value || 0))
    }, c({
      SS: o,
      DS: a,
      Ss: f
    }))
  }),
  xu = "concat",
  ub = ["typed", "matrix", "isInteger"],
  bv = z(xu, ub, e => {
    var {
      typed: r,
      matrix: i,
      isInteger: n
    } = e;
    return r(xu, {
      "...Array | Matrix | number | BigNumber": function(a) {
        var o, f = a.length,
          c = -1,
          u, s = !1,
          l = [];
        for (o = 0; o < f; o++) {
          var m = a[o];
          if (Fe(m) && (s = !0), Pe(m) || He(m)) {
            if (o !== f - 1) throw new Error("Dimension must be specified as last argument");
            if (u = c, c = m.valueOf(), !n(c)) throw new TypeError("Integer number expected for dimension");
            if (c < 0 || o > 0 && c > u) throw new it(c, u + 1)
          } else {
            var v = $e(m).valueOf(),
              d = qe(v);
            if (l[o] = v, u = c, c = d.length - 1, o > 0 && c !== u) throw new Ue(u + 1, c + 1)
          }
        }
        if (l.length === 0) throw new SyntaxError("At least one matrix expected");
        for (var p = l.shift(); l.length;) p = tm(p, l.shift(), c);
        return s ? i(p) : p
      },
      "...string": function(a) {
        return a.join("")
      }
    })
  }),
  wu = "column",
  lb = ["typed", "Index", "matrix", "range"],
  xv = z(wu, lb, e => {
    var {
      typed: r,
      Index: i,
      matrix: n,
      range: t
    } = e;
    return r(wu, {
      "Matrix, number": a,
      "Array, number": function(f, c) {
        return a(n($e(f)), c).valueOf()
      }
    });

    function a(o, f) {
      if (o.size().length !== 2) throw new Error("Only two dimensional matrix is supported");
      tr(f, o.size()[1]);
      var c = t(0, o.size()[0]),
        u = new i(c, f),
        s = o.subset(u);
      return Fe(s) ? s : n([
        [s]
      ])
    }
  }),
  Nu = "count",
  cb = ["typed", "size", "prod"],
  fb = z(Nu, cb, e => {
    var {
      typed: r,
      size: i,
      prod: n
    } = e;
    return r(Nu, {
      string: function(a) {
        return a.length
      },
      "Matrix | Array": function(a) {
        return n(i(a))
      }
    })
  }),
  Du = "cross",
  mb = ["typed", "matrix", "subtract", "multiply"],
  vb = z(Du, mb, e => {
    var {
      typed: r,
      matrix: i,
      subtract: n,
      multiply: t
    } = e;
    return r(Du, {
      "Matrix, Matrix": function(f, c) {
        return i(a(f.toArray(), c.toArray()))
      },
      "Matrix, Array": function(f, c) {
        return i(a(f.toArray(), c))
      },
      "Array, Matrix": function(f, c) {
        return i(a(f, c.toArray()))
      },
      "Array, Array": a
    });

    function a(o, f) {
      var c = Math.max(qe(o).length, qe(f).length);
      o = Ha(o), f = Ha(f);
      var u = qe(o),
        s = qe(f);
      if (u.length !== 1 || s.length !== 1 || u[0] !== 3 || s[0] !== 3) throw new RangeError("Vectors with length 3 expected (Size A = [" + u.join(", ") + "], B = [" + s.join(", ") + "])");
      var l = [n(t(o[1], f[2]), t(o[2], f[1])), n(t(o[2], f[0]), t(o[0], f[2])), n(t(o[0], f[1]), t(o[1], f[0]))];
      return c > 1 ? [l] : l
    }
  }),
  Au = "diag",
  pb = ["typed", "matrix", "DenseMatrix", "SparseMatrix"],
  db = z(Au, pb, e => {
    var {
      typed: r,
      matrix: i,
      DenseMatrix: n,
      SparseMatrix: t
    } = e;
    return r(Au, {
      Array: function(u) {
        return a(u, 0, qe(u), null)
      },
      "Array, number": function(u, s) {
        return a(u, s, qe(u), null)
      },
      "Array, BigNumber": function(u, s) {
        return a(u, s.toNumber(), qe(u), null)
      },
      "Array, string": function(u, s) {
        return a(u, 0, qe(u), s)
      },
      "Array, number, string": function(u, s, l) {
        return a(u, s, qe(u), l)
      },
      "Array, BigNumber, string": function(u, s, l) {
        return a(u, s.toNumber(), qe(u), l)
      },
      Matrix: function(u) {
        return a(u, 0, u.size(), u.storage())
      },
      "Matrix, number": function(u, s) {
        return a(u, s, u.size(), u.storage())
      },
      "Matrix, BigNumber": function(u, s) {
        return a(u, s.toNumber(), u.size(), u.storage())
      },
      "Matrix, string": function(u, s) {
        return a(u, 0, u.size(), s)
      },
      "Matrix, number, string": function(u, s, l) {
        return a(u, s, u.size(), l)
      },
      "Matrix, BigNumber, string": function(u, s, l) {
        return a(u, s.toNumber(), u.size(), l)
      }
    });

    function a(c, u, s, l) {
      if (!Se(u)) throw new TypeError("Second parameter in function diag must be an integer");
      var m = u > 0 ? u : 0,
        v = u < 0 ? -u : 0;
      switch (s.length) {
        case 1:
          return o(c, u, l, s[0], v, m);
        case 2:
          return f(c, u, l, s, v, m)
      }
      throw new RangeError("Matrix for function diag must be 2 dimensional")
    }

    function o(c, u, s, l, m, v) {
      var d = [l + m, l + v];
      if (s && s !== "sparse" && s !== "dense") throw new TypeError("Unknown matrix type ".concat(s, '"'));
      var p = s === "sparse" ? t.diagonal(d, c, u) : n.diagonal(d, c, u);
      return s !== null ? p : p.valueOf()
    }

    function f(c, u, s, l, m, v) {
      if (Fe(c)) {
        var d = c.diagonal(u);
        return s !== null ? s !== d.storage() ? i(d, s) : d : d.valueOf()
      }
      for (var p = Math.min(l[0] - m, l[1] - v), b = [], g = 0; g < p; g++) b[g] = c[g + m][g + v];
      return s !== null ? i(b) : b
    }
  });

function Rn(e, r, i, n, t) {
  if (gn.isTypedFunction(e)) {
    var a = [r, i, n],
      o = gn.resolve(e, a);
    if (o) return l(o.implementation, a);
    var f = [r, i],
      c = gn.resolve(e, f);
    if (c) return l(c.implementation, f);
    var u = [r],
      s = gn.resolve(e, u);
    return s ? l(s.implementation, u) : l(e, a)
  } else return e(r, i, n);

  function l(m, v) {
    try {
      return m.apply(m, v)
    } catch (b) {
      var d;
      if (b instanceof TypeError && ((d = b.data) === null || d === void 0 ? void 0 : d.category) === "wrongType") {
        var p = [];
        throw p.push("value: ".concat(ar(r))), v.length >= 2 && p.push("index: ".concat(ar(i))), v.length >= 3 && p.push("array: ".concat(ar(n))), new TypeError("Function ".concat(t, " cannot apply callback arguments ") + "".concat(e.name, "(").concat(p.join(", "), ") at index ").concat(JSON.stringify(i)))
      } else throw new TypeError("Function ".concat(t, " cannot apply callback arguments ") + "to function ".concat(e.name, ": ").concat(b.message))
    }
  }
}
var hb = "filter",
  gb = ["typed"],
  yb = z(hb, gb, e => {
    var {
      typed: r
    } = e;
    return r("filter", {
      "Array, function": Eu,
      "Matrix, function": function(n, t) {
        return n.create(Eu(n.toArray(), t))
      },
      "Array, RegExp": Ga,
      "Matrix, RegExp": function(n, t) {
        return n.create(Ga(n.toArray(), t))
      }
    })
  });

function Eu(e, r) {
  return em(e, function(i, n, t) {
    return Rn(r, i, [n], t, "filter")
  })
}
var Su = "flatten",
  bb = ["typed", "matrix"],
  xb = z(Su, bb, e => {
    var {
      typed: r,
      matrix: i
    } = e;
    return r(Su, {
      Array: function(t) {
        return Xe(t)
      },
      Matrix: function(t) {
        var a = Xe(t.toArray());
        return i(a)
      }
    })
  }),
  Cu = "forEach",
  wb = ["typed"],
  Nb = z(Cu, wb, e => {
    var {
      typed: r
    } = e;
    return r(Cu, {
      "Array, function": Db,
      "Matrix, function": function(n, t) {
        n.forEach(t)
      }
    })
  });

function Db(e, r) {
  var i = function n(t, a) {
    if (Array.isArray(t)) di(t, function(o, f) {
      n(o, a.concat(f))
    });
    else return Rn(r, t, a, e, "forEach")
  };
  i(e, [])
}
var Mu = "getMatrixDataType",
  Ab = ["typed"],
  Eb = z(Mu, Ab, e => {
    var {
      typed: r
    } = e;
    return r(Mu, {
      Array: function(n) {
        return ea(n, ar)
      },
      Matrix: function(n) {
        return n.getDataType()
      }
    })
  }),
  Fu = "identity",
  Sb = ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"],
  Cb = z(Fu, Sb, e => {
    var {
      typed: r,
      config: i,
      matrix: n,
      BigNumber: t,
      DenseMatrix: a,
      SparseMatrix: o
    } = e;
    return r(Fu, {
      "": function() {
        return i.matrix === "Matrix" ? n([]) : []
      },
      string: function(s) {
        return n(s)
      },
      "number | BigNumber": function(s) {
        return c(s, s, i.matrix === "Matrix" ? "dense" : void 0)
      },
      "number | BigNumber, string": function(s, l) {
        return c(s, s, l)
      },
      "number | BigNumber, number | BigNumber": function(s, l) {
        return c(s, l, i.matrix === "Matrix" ? "dense" : void 0)
      },
      "number | BigNumber, number | BigNumber, string": function(s, l, m) {
        return c(s, l, m)
      },
      Array: function(s) {
        return f(s)
      },
      "Array, string": function(s, l) {
        return f(s, l)
      },
      Matrix: function(s) {
        return f(s.valueOf(), s.storage())
      },
      "Matrix, string": function(s, l) {
        return f(s.valueOf(), l)
      }
    });

    function f(u, s) {
      switch (u.length) {
        case 0:
          return s ? n(s) : [];
        case 1:
          return c(u[0], u[0], s);
        case 2:
          return c(u[0], u[1], s);
        default:
          throw new Error("Vector containing two values expected")
      }
    }

    function c(u, s, l) {
      var m = He(u) || He(s) ? t : null;
      if (He(u) && (u = u.toNumber()), He(s) && (s = s.toNumber()), !Se(u) || u < 1) throw new Error("Parameters in function identity must be positive integers");
      if (!Se(s) || s < 1) throw new Error("Parameters in function identity must be positive integers");
      var v = m ? new t(1) : 1,
        d = m ? new m(0) : 0,
        p = [u, s];
      if (l) {
        if (l === "sparse") return o.diagonal(p, v, 0, d);
        if (l === "dense") return a.diagonal(p, v, 0, d);
        throw new TypeError('Unknown matrix type "'.concat(l, '"'))
      }
      for (var b = An([], p, d), g = u < s ? u : s, N = 0; N < g; N++) b[N][N] = v;
      return b
    }
  }),
  Bu = "kron",
  Mb = ["typed", "matrix", "multiplyScalar"],
  Fb = z(Bu, Mb, e => {
    var {
      typed: r,
      matrix: i,
      multiplyScalar: n
    } = e;
    return r(Bu, {
      "Matrix, Matrix": function(o, f) {
        return i(t(o.toArray(), f.toArray()))
      },
      "Matrix, Array": function(o, f) {
        return i(t(o.toArray(), f))
      },
      "Array, Matrix": function(o, f) {
        return i(t(o, f.toArray()))
      },
      "Array, Array": t
    });

    function t(a, o) {
      if (qe(a).length === 1 && (a = [a]), qe(o).length === 1 && (o = [o]), qe(a).length > 2 || qe(o).length > 2) throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(a.length) + ", y = " + JSON.stringify(o.length) + ")");
      var f = [],
        c = [];
      return a.map(function(u) {
        return o.map(function(s) {
          return c = [], f.push(c), u.map(function(l) {
            return s.map(function(m) {
              return c.push(n(l, m))
            })
          })
        })
      }) && f
    }
  }),
  Tu = "map",
  Bb = ["typed"],
  Tb = z(Tu, Bb, e => {
    var {
      typed: r
    } = e;
    return r(Tu, {
      "Array, function": Ob,
      "Matrix, function": function(n, t) {
        return n.map(t)
      }
    })
  });

function Ob(e, r) {
  var i = function n(t, a) {
    return Array.isArray(t) ? t.map(function(o, f) {
      return n(o, a.concat(f))
    }) : Rn(r, t, a, e, "map")
  };
  return i(e, [])
}
var Ou = "diff",
  $b = ["typed", "matrix", "subtract", "number"],
  wv = z(Ou, $b, e => {
    var {
      typed: r,
      matrix: i,
      subtract: n,
      number: t
    } = e;
    return r(Ou, {
      "Array | Matrix": function(s) {
        return Fe(s) ? i(o(s.toArray())) : o(s)
      },
      "Array | Matrix, number": function(s, l) {
        if (!Se(l)) throw new RangeError("Dimension must be a whole number");
        return Fe(s) ? i(a(s.toArray(), l)) : a(s, l)
      },
      "Array, BigNumber": r.referTo("Array,number", u => (s, l) => u(s, t(l))),
      "Matrix, BigNumber": r.referTo("Matrix,number", u => (s, l) => u(s, t(l)))
    });

    function a(u, s) {
      if (Fe(u) && (u = u.toArray()), !Array.isArray(u)) throw RangeError("Array/Matrix does not have that many dimensions");
      if (s > 0) {
        var l = [];
        return u.forEach(m => {
          l.push(a(m, s - 1))
        }), l
      } else {
        if (s === 0) return o(u);
        throw RangeError("Cannot have negative dimension")
      }
    }

    function o(u) {
      for (var s = [], l = u.length, m = 1; m < l; m++) s.push(f(u[m - 1], u[m]));
      return s
    }

    function f(u, s) {
      Fe(u) && (u = u.toArray()), Fe(s) && (s = s.toArray());
      var l = Array.isArray(u),
        m = Array.isArray(s);
      if (l && m) return c(u, s);
      if (!l && !m) return n(s, u);
      throw TypeError("Cannot calculate difference between 1 array and 1 non-array")
    }

    function c(u, s) {
      if (u.length !== s.length) throw RangeError("Not all sub-arrays have the same length");
      for (var l = [], m = u.length, v = 0; v < m; v++) l.push(f(u[v], s[v]));
      return l
    }
  }),
  _b = "ones",
  Ib = ["typed", "config", "matrix", "BigNumber"],
  qb = z(_b, Ib, e => {
    var {
      typed: r,
      config: i,
      matrix: n,
      BigNumber: t
    } = e;
    return r("ones", {
      "": function() {
        return i.matrix === "Array" ? a([]) : a([], "default")
      },
      "...number | BigNumber | string": function(u) {
        var s = u[u.length - 1];
        if (typeof s == "string") {
          var l = u.pop();
          return a(u, l)
        } else return i.matrix === "Array" ? a(u) : a(u, "default")
      },
      Array: a,
      Matrix: function(u) {
        var s = u.storage();
        return a(u.valueOf(), s)
      },
      "Array | Matrix, string": function(u, s) {
        return a(u.valueOf(), s)
      }
    });

    function a(c, u) {
      var s = o(c),
        l = s ? new t(1) : 1;
      if (f(c), u) {
        var m = n(u);
        return c.length > 0 ? m.resize(c, l) : m
      } else {
        var v = [];
        return c.length > 0 ? An(v, c, l) : v
      }
    }

    function o(c) {
      var u = !1;
      return c.forEach(function(s, l, m) {
        He(s) && (u = !0, m[l] = s.toNumber())
      }), u
    }

    function f(c) {
      c.forEach(function(u) {
        if (typeof u != "number" || !Se(u) || u < 0) throw new Error("Parameters in function ones must be positive integers")
      })
    }
  });

function Eo() {
  throw new Error('No "bignumber" implementation available')
}

function Nv() {
  throw new Error('No "fraction" implementation available')
}

function Dv() {
  throw new Error('No "matrix" implementation available')
}
var $u = "range",
  Rb = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq", "add", "isPositive"],
  Av = z($u, Rb, e => {
    var {
      typed: r,
      config: i,
      matrix: n,
      bignumber: t,
      smaller: a,
      smallerEq: o,
      larger: f,
      largerEq: c,
      add: u,
      isPositive: s
    } = e;
    return r($u, {
      string: m,
      "string, boolean": m,
      "number, number": function(b, g) {
        return l(v(b, g, 1, !1))
      },
      "number, number, number": function(b, g, N) {
        return l(v(b, g, N, !1))
      },
      "number, number, boolean": function(b, g, N) {
        return l(v(b, g, 1, N))
      },
      "number, number, number, boolean": function(b, g, N, h) {
        return l(v(b, g, N, h))
      },
      "BigNumber, BigNumber": function(b, g) {
        var N = b.constructor;
        return l(v(b, g, new N(1), !1))
      },
      "BigNumber, BigNumber, BigNumber": function(b, g, N) {
        return l(v(b, g, N, !1))
      },
      "BigNumber, BigNumber, boolean": function(b, g, N) {
        var h = b.constructor;
        return l(v(b, g, new h(1), N))
      },
      "BigNumber, BigNumber, BigNumber, boolean": function(b, g, N, h) {
        return l(v(b, g, N, h))
      },
      "Unit, Unit, Unit": function(b, g, N) {
        return l(v(b, g, N, !1))
      },
      "Unit, Unit, Unit, boolean": function(b, g, N, h) {
        return l(v(b, g, N, h))
      }
    });

    function l(p) {
      return i.matrix === "Matrix" ? n ? n(p) : Dv() : p
    }

    function m(p, b) {
      var g = d(p);
      if (!g) throw new SyntaxError('String "' + p + '" is no valid range');
      return i.number === "BigNumber" ? (t === void 0 && Eo(), l(v(t(g.start), t(g.end), t(g.step)))) : l(v(g.start, g.end, g.step, b))
    }

    function v(p, b, g, N) {
      for (var h = [], x = s(g) ? N ? o : a : N ? c : f, w = p; x(w, b);) h.push(w), w = u(w, g);
      return h
    }

    function d(p) {
      var b = p.split(":"),
        g = b.map(function(h) {
          return Number(h)
        }),
        N = g.some(function(h) {
          return isNaN(h)
        });
      if (N) return null;
      switch (g.length) {
        case 2:
          return {
            start: g[0], end: g[1], step: 1
          };
        case 3:
          return {
            start: g[0], end: g[2], step: g[1]
          };
        default:
          return null
      }
    }
  }),
  _u = "reshape",
  zb = ["typed", "isInteger", "matrix"],
  Pb = z(_u, zb, e => {
    var {
      typed: r,
      isInteger: i
    } = e;
    return r(_u, {
      "Matrix, Array": function(t, a) {
        return t.reshape(a, !0)
      },
      "Array, Array": function(t, a) {
        return a.forEach(function(o) {
          if (!i(o)) throw new TypeError("Invalid size for dimension: " + o)
        }), po(t, a)
      }
    })
  }),
  Ub = "resize",
  Lb = ["config", "matrix"],
  kb = z(Ub, Lb, e => {
    var {
      config: r,
      matrix: i
    } = e;
    return function(a, o, f) {
      if (arguments.length !== 2 && arguments.length !== 3) throw new Kt("resize", arguments.length, 2, 3);
      if (Fe(o) && (o = o.valueOf()), He(o[0]) && (o = o.map(function(s) {
          return He(s) ? s.toNumber() : s
        })), Fe(a)) return a.resize(o, f, !0);
      if (typeof a == "string") return n(a, o, f);
      var c = Array.isArray(a) ? !1 : r.matrix !== "Array";
      if (o.length === 0) {
        for (; Array.isArray(a);) a = a[0];
        return $e(a)
      } else {
        Array.isArray(a) || (a = [a]), a = $e(a);
        var u = An(a, o, f);
        return c ? i(u) : u
      }
    };

    function n(t, a, o) {
      if (o !== void 0) {
        if (typeof o != "string" || o.length !== 1) throw new TypeError("Single character expected as defaultValue")
      } else o = " ";
      if (a.length !== 1) throw new Ue(a.length, 1);
      var f = a[0];
      if (typeof f != "number" || !Se(f)) throw new TypeError("Invalid size, must contain positive integers (size: " + ze(a) + ")");
      if (t.length > f) return t.substring(0, f);
      if (t.length < f) {
        for (var c = t, u = 0, s = f - t.length; u < s; u++) c += o;
        return c
      } else return t
    }
  }),
  Iu = "rotate",
  Hb = ["typed", "multiply", "rotationMatrix"],
  Gb = z(Iu, Hb, e => {
    var {
      typed: r,
      multiply: i,
      rotationMatrix: n
    } = e;
    return r(Iu, {
      "Array , number | BigNumber | Complex | Unit": function(o, f) {
        t(o, 2);
        var c = i(n(f), o);
        return c.toArray()
      },
      "Matrix , number | BigNumber | Complex | Unit": function(o, f) {
        return t(o, 2), i(n(f), o)
      },
      "Array, number | BigNumber | Complex | Unit, Array | Matrix": function(o, f, c) {
        t(o, 3);
        var u = i(n(f, c), o);
        return u
      },
      "Matrix, number | BigNumber | Complex | Unit, Array | Matrix": function(o, f, c) {
        return t(o, 3), i(n(f, c), o)
      }
    });

    function t(a, o) {
      var f = Array.isArray(a) ? qe(a) : a.size();
      if (f.length > 2) throw new RangeError("Vector must be of dimensions 1x".concat(o));
      if (f.length === 2 && f[1] !== 1) throw new RangeError("Vector must be of dimensions 1x".concat(o));
      if (f[0] !== o) throw new RangeError("Vector must be of dimensions 1x".concat(o))
    }
  }),
  qu = "rotationMatrix",
  Vb = ["typed", "config", "multiplyScalar", "addScalar", "unaryMinus", "norm", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix", "cos", "sin"],
  Zb = z(qu, Vb, e => {
    var {
      typed: r,
      config: i,
      multiplyScalar: n,
      addScalar: t,
      unaryMinus: a,
      norm: o,
      BigNumber: f,
      matrix: c,
      DenseMatrix: u,
      SparseMatrix: s,
      cos: l,
      sin: m
    } = e;
    return r(qu, {
      "": function() {
        return i.matrix === "Matrix" ? c([]) : []
      },
      string: function(h) {
        return c(h)
      },
      "number | BigNumber | Complex | Unit": function(h) {
        return v(h, i.matrix === "Matrix" ? "dense" : void 0)
      },
      "number | BigNumber | Complex | Unit, string": function(h, x) {
        return v(h, x)
      },
      "number | BigNumber | Complex | Unit, Array": function(h, x) {
        var w = c(x);
        return d(w), g(h, w, void 0)
      },
      "number | BigNumber | Complex | Unit, Matrix": function(h, x) {
        d(x);
        var w = x.storage() || (i.matrix === "Matrix" ? "dense" : void 0);
        return g(h, x, w)
      },
      "number | BigNumber | Complex | Unit, Array, string": function(h, x, w) {
        var y = c(x);
        return d(y), g(h, y, w)
      },
      "number | BigNumber | Complex | Unit, Matrix, string": function(h, x, w) {
        return d(x), g(h, x, w)
      }
    });

    function v(N, h) {
      var x = He(N),
        w = x ? new f(-1) : -1,
        y = l(N),
        A = m(N),
        E = [
          [y, n(w, A)],
          [A, y]
        ];
      return b(E, h)
    }

    function d(N) {
      var h = N.size();
      if (h.length < 1 || h[0] !== 3) throw new RangeError("Vector must be of dimensions 1x3")
    }

    function p(N) {
      return N.reduce((h, x) => n(h, x))
    }

    function b(N, h) {
      if (h) {
        if (h === "sparse") return new s(N);
        if (h === "dense") return new u(N);
        throw new TypeError('Unknown matrix type "'.concat(h, '"'))
      }
      return N
    }

    function g(N, h, x) {
      var w = o(h);
      if (w === 0) throw new RangeError("Rotation around zero vector");
      var y = He(N) ? f : null,
        A = y ? new y(1) : 1,
        E = y ? new y(-1) : -1,
        D = y ? new y(h.get([0]) / w) : h.get([0]) / w,
        S = y ? new y(h.get([1]) / w) : h.get([1]) / w,
        C = y ? new y(h.get([2]) / w) : h.get([2]) / w,
        M = l(N),
        $ = t(A, a(M)),
        I = m(N),
        _ = t(M, p([D, D, $])),
        T = t(p([D, S, $]), p([E, C, I])),
        B = t(p([D, C, $]), p([S, I])),
        U = t(p([D, S, $]), p([C, I])),
        O = t(M, p([S, S, $])),
        V = t(p([S, C, $]), p([E, D, I])),
        J = t(p([D, C, $]), p([E, S, I])),
        Z = t(p([S, C, $]), p([D, I])),
        q = t(M, p([C, C, $])),
        X = [
          [_, T, B],
          [U, O, V],
          [J, Z, q]
        ];
      return b(X, x)
    }
  }),
  Ru = "row",
  Yb = ["typed", "Index", "matrix", "range"],
  Ev = z(Ru, Yb, e => {
    var {
      typed: r,
      Index: i,
      matrix: n,
      range: t
    } = e;
    return r(Ru, {
      "Matrix, number": a,
      "Array, number": function(f, c) {
        return a(n($e(f)), c).valueOf()
      }
    });

    function a(o, f) {
      if (o.size().length !== 2) throw new Error("Only two dimensional matrix is supported");
      tr(f, o.size()[0]);
      var c = t(0, o.size()[1]),
        u = new i(f, c),
        s = o.subset(u);
      return Fe(s) ? s : n([
        [s]
      ])
    }
  }),
  zu = "size",
  Wb = ["typed", "config", "?matrix"],
  Qb = z(zu, Wb, e => {
    var {
      typed: r,
      config: i,
      matrix: n
    } = e;
    return r(zu, {
      Matrix: function(a) {
        return a.create(a.size())
      },
      Array: qe,
      string: function(a) {
        return i.matrix === "Array" ? [a.length] : n([a.length])
      },
      "number | Complex | BigNumber | Unit | boolean | null": function(a) {
        return i.matrix === "Array" ? [] : n ? n([]) : Dv()
      }
    })
  }),
  Pu = "squeeze",
  Xb = ["typed", "matrix"],
  Jb = z(Pu, Xb, e => {
    var {
      typed: r,
      matrix: i
    } = e;
    return r(Pu, {
      Array: function(t) {
        return Ha($e(t))
      },
      Matrix: function(t) {
        var a = Ha(t.toArray());
        return Array.isArray(a) ? i(a) : a
      },
      any: function(t) {
        return $e(t)
      }
    })
  }),
  Uu = "subset",
  Kb = ["typed", "matrix", "zeros", "add"],
  Sv = z(Uu, Kb, e => {
    var {
      typed: r,
      matrix: i,
      zeros: n,
      add: t
    } = e;
    return r(Uu, {
      "Matrix, Index": function(f, c) {
        return Dn(c) ? i() : (ka(f, c), f.subset(c))
      },
      "Array, Index": r.referTo("Matrix, Index", function(o) {
        return function(f, c) {
          var u = o(i(f), c);
          return c.isScalar() ? u : u.valueOf()
        }
      }),
      "Object, Index": ex,
      "string, Index": jb,
      "Matrix, Index, any, any": function(f, c, u, s) {
        return Dn(c) ? f : (ka(f, c), f.clone().subset(c, a(u, c), s))
      },
      "Array, Index, any, any": r.referTo("Matrix, Index, any, any", function(o) {
        return function(f, c, u, s) {
          var l = o(i(f), c, u, s);
          return l.isMatrix ? l.valueOf() : l
        }
      }),
      "Array, Index, any": r.referTo("Matrix, Index, any, any", function(o) {
        return function(f, c, u) {
          return o(i(f), c, u, void 0).valueOf()
        }
      }),
      "Matrix, Index, any": r.referTo("Matrix, Index, any, any", function(o) {
        return function(f, c, u) {
          return o(f, c, u, void 0)
        }
      }),
      "string, Index, string": Lu,
      "string, Index, string, string": Lu,
      "Object, Index, any": rx
    });

    function a(o, f) {
      if (typeof o == "string") throw new Error("can't boradcast a string");
      if (f._isScalar) return o;
      var c = f.size();
      if (c.every(u => u > 0)) try {
        return t(o, n(c))
      } catch {
        return o
      } else return o
    }
  });

function jb(e, r) {
  if (!ci(r)) throw new TypeError("Index expected");
  if (Dn(r)) return "";
  if (ka(Array.from(e), r), r.size().length !== 1) throw new Ue(r.size().length, 1);
  var i = e.length;
  tr(r.min()[0], i), tr(r.max()[0], i);
  var n = r.dimension(0),
    t = "";
  return n.forEach(function(a) {
    t += e.charAt(a)
  }), t
}

function Lu(e, r, i, n) {
  if (!r || r.isIndex !== !0) throw new TypeError("Index expected");
  if (Dn(r)) return e;
  if (ka(Array.from(e), r), r.size().length !== 1) throw new Ue(r.size().length, 1);
  if (n !== void 0) {
    if (typeof n != "string" || n.length !== 1) throw new TypeError("Single character expected as defaultValue")
  } else n = " ";
  var t = r.dimension(0),
    a = t.size()[0];
  if (a !== i.length) throw new Ue(t.size()[0], i.length);
  var o = e.length;
  tr(r.min()[0]), tr(r.max()[0]);
  for (var f = [], c = 0; c < o; c++) f[c] = e.charAt(c);
  if (t.forEach(function(l, m) {
      f[l] = i.charAt(m[0])
    }), f.length > o)
    for (var u = o - 1, s = f.length; u < s; u++) f[u] || (f[u] = n);
  return f.join("")
}

function ex(e, r) {
  if (!Dn(r)) {
    if (r.size().length !== 1) throw new Ue(r.size(), 1);
    var i = r.dimension(0);
    if (typeof i != "string") throw new TypeError("String expected as index to retrieve an object property");
    return Fr(e, i)
  }
}

function rx(e, r, i) {
  if (Dn(r)) return e;
  if (r.size().length !== 1) throw new Ue(r.size(), 1);
  var n = r.dimension(0);
  if (typeof n != "string") throw new TypeError("String expected as index to retrieve an object property");
  var t = $e(e);
  return Sn(t, n, i), t
}
var ku = "transpose",
  tx = ["typed", "matrix"],
  nx = z(ku, tx, e => {
    var {
      typed: r,
      matrix: i
    } = e;
    return r(ku, {
      Array: o => n(i(o)).valueOf(),
      Matrix: n,
      any: $e
    });

    function n(o) {
      var f = o.size(),
        c;
      switch (f.length) {
        case 1:
          c = o.clone();
          break;
        case 2: {
          var u = f[0],
            s = f[1];
          if (s === 0) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + ze(f) + ")");
          switch (o.storage()) {
            case "dense":
              c = t(o, u, s);
              break;
            case "sparse":
              c = a(o, u, s);
              break
          }
        }
        break;
        default:
          throw new RangeError("Matrix must be a vector or two dimensional (size: " + ze(f) + ")")
      }
      return c
    }

    function t(o, f, c) {
      for (var u = o._data, s = [], l, m = 0; m < c; m++) {
        l = s[m] = [];
        for (var v = 0; v < f; v++) l[v] = $e(u[v][m])
      }
      return o.createDenseMatrix({
        data: s,
        size: [c, f],
        datatype: o._datatype
      })
    }

    function a(o, f, c) {
      for (var u = o._values, s = o._index, l = o._ptr, m = u ? [] : void 0, v = [], d = [], p = [], b = 0; b < f; b++) p[b] = 0;
      var g, N, h;
      for (g = 0, N = s.length; g < N; g++) p[s[g]]++;
      for (var x = 0, w = 0; w < f; w++) d.push(x), x += p[w], p[w] = d[w];
      for (d.push(x), h = 0; h < c; h++)
        for (var y = l[h], A = l[h + 1], E = y; E < A; E++) {
          var D = p[s[E]]++;
          v[D] = h, u && (m[D] = $e(u[E]))
        }
      return o.createSparseMatrix({
        values: m,
        index: v,
        ptr: d,
        size: [c, f],
        datatype: o._datatype
      })
    }
  }),
  Hu = "ctranspose",
  ax = ["typed", "transpose", "conj"],
  ix = z(Hu, ax, e => {
    var {
      typed: r,
      transpose: i,
      conj: n
    } = e;
    return r(Hu, {
      any: function(a) {
        return n(i(a))
      }
    })
  }),
  Gu = "zeros",
  ox = ["typed", "config", "matrix", "BigNumber"],
  sx = z(Gu, ox, e => {
    var {
      typed: r,
      config: i,
      matrix: n,
      BigNumber: t
    } = e;
    return r(Gu, {
      "": function() {
        return i.matrix === "Array" ? a([]) : a([], "default")
      },
      "...number | BigNumber | string": function(u) {
        var s = u[u.length - 1];
        if (typeof s == "string") {
          var l = u.pop();
          return a(u, l)
        } else return i.matrix === "Array" ? a(u) : a(u, "default")
      },
      Array: a,
      Matrix: function(u) {
        var s = u.storage();
        return a(u.valueOf(), s)
      },
      "Array | Matrix, string": function(u, s) {
        return a(u.valueOf(), s)
      }
    });

    function a(c, u) {
      var s = o(c),
        l = s ? new t(0) : 0;
      if (f(c), u) {
        var m = n(u);
        return c.length > 0 ? m.resize(c, l) : m
      } else {
        var v = [];
        return c.length > 0 ? An(v, c, l) : v
      }
    }

    function o(c) {
      var u = !1;
      return c.forEach(function(s, l, m) {
        He(s) && (u = !0, m[l] = s.toNumber())
      }), u
    }

    function f(c) {
      c.forEach(function(u) {
        if (typeof u != "number" || !Se(u) || u < 0) throw new Error("Parameters in function zeros must be positive integers")
      })
    }
  }),
  Vu = "fft",
  ux = ["typed", "matrix", "addScalar", "multiplyScalar", "divideScalar", "exp", "tau", "i", "dotDivide", "conj", "pow", "ceil", "log2"],
  lx = z(Vu, ux, e => {
    var {
      typed: r,
      matrix: i,
      addScalar: n,
      multiplyScalar: t,
      divideScalar: a,
      exp: o,
      tau: f,
      i: c,
      dotDivide: u,
      conj: s,
      pow: l,
      ceil: m,
      log2: v
    } = e;
    return r(Vu, {
      Array: d,
      Matrix: function(h) {
        return h.create(d(h.toArray()))
      }
    });

    function d(N) {
      var h = qe(N);
      return h.length === 1 ? g(N, h[0]) : p(N.map(x => d(x, h.slice(1))), 0)
    }

    function p(N, h) {
      var x = qe(N);
      if (h !== 0) return new Array(x[0]).fill(0).map((y, A) => p(N[A], h - 1));
      if (x.length === 1) return g(N);

      function w(y) {
        var A = qe(y);
        return new Array(A[1]).fill(0).map((E, D) => new Array(A[0]).fill(0).map((S, C) => y[C][D]))
      }
      return w(p(w(N), 1))
    }

    function b(N) {
      for (var h = N.length, x = o(a(t(-1, t(c, f)), h)), w = [], y = 1 - h; y < h; y++) w.push(l(x, a(l(y, 2), 2)));
      for (var A = l(2, m(v(h + h - 1))), E = [...new Array(h).fill(0).map((T, B) => t(N[B], w[h - 1 + B])), ...new Array(A - h).fill(0)], D = [...new Array(h + h - 1).fill(0).map((T, B) => a(1, w[B])), ...new Array(A - (h + h - 1)).fill(0)], S = g(E), C = g(D), M = new Array(A).fill(0).map((T, B) => t(S[B], C[B])), $ = u(s(d(s(M))), A), I = [], _ = h - 1; _ < h + h - 1; _++) I.push(t($[_], w[_]));
      return I
    }

    function g(N) {
      var h = N.length;
      if (h === 1) return [N[0]];
      if (h % 2 === 0) {
        for (var x = [...g(N.filter((E, D) => D % 2 === 0)), ...g(N.filter((E, D) => D % 2 === 1))], w = 0; w < h / 2; w++) {
          var y = x[w],
            A = t(x[w + h / 2], o(t(t(f, c), a(-w, h))));
          x[w] = n(y, A), x[w + h / 2] = n(y, t(-1, A))
        }
        return x
      } else return b(N)
    }
  }),
  Zu = "ifft",
  cx = ["typed", "fft", "dotDivide", "conj"],
  fx = z(Zu, cx, e => {
    var {
      typed: r,
      fft: i,
      dotDivide: n,
      conj: t
    } = e;
    return r(Zu, {
      "Array | Matrix": function(o) {
        var f = Fe(o) ? o.size() : qe(o);
        return n(t(i(t(o))), f.reduce((c, u) => c * u, 1))
      }
    })
  });

function na(e) {
  "@babel/helpers - typeof";
  return na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
  }, na(e)
}

function mx(e, r) {
  if (na(e) !== "object" || e === null) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, r || "default");
    if (na(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (r === "string" ? String : Number)(e)
}

function vx(e) {
  var r = mx(e, "string");
  return na(r) === "symbol" ? r : String(r)
}

function dr(e, r, i) {
  return r = vx(r), r in e ? Object.defineProperty(e, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = i, e
}

function Yu(e, r) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), i.push.apply(i, n)
  }
  return i
}

function px(e) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Yu(Object(i), !0).forEach(function(n) {
      dr(e, n, i[n])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Yu(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
    })
  }
  return e
}
var dx = "solveODE",
  hx = ["typed", "add", "subtract", "multiply", "divide", "max", "map", "abs", "isPositive", "isNegative", "larger", "smaller", "matrix", "bignumber", "unaryMinus"],
  gx = z(dx, hx, e => {
    var {
      typed: r,
      add: i,
      subtract: n,
      multiply: t,
      divide: a,
      max: o,
      map: f,
      abs: c,
      isPositive: u,
      isNegative: s,
      larger: l,
      smaller: m,
      matrix: v,
      bignumber: d,
      unaryMinus: p
    } = e;

    function b(E) {
      return function(D, S, C, M) {
        var $ = !(S.length === 2 && (S.every(y) || S.every(Yr)));
        if ($) throw new Error('"tspan" must be an Array of two numeric values or two units [tStart, tEnd]');
        var I = S[0],
          _ = S[1],
          T = l(_, I),
          B = M.firstStep;
        if (B !== void 0 && !u(B)) throw new Error('"firstStep" must be positive');
        var U = M.maxStep;
        if (U !== void 0 && !u(U)) throw new Error('"maxStep" must be positive');
        var O = M.minStep;
        if (O && s(O)) throw new Error('"minStep" must be positive or zero');
        var V = [I, _, B, O, U].filter(R => R !== void 0);
        if (!(V.every(y) || V.every(Yr))) throw new Error('Inconsistent type of "t" dependant variables');
        for (var J = 1, Z = M.tol ? M.tol : 1e-4, q = M.minDelta ? M.minDelta : .2, X = M.maxDelta ? M.maxDelta : 5, ie = M.maxIter ? M.maxIter : 1e4, Q = [I, _, ...C, U, O].some(He), [ee, ue, re, ne] = Q ? [d(E.a), d(E.c), d(E.b), d(E.bp)] : [E.a, E.c, E.b, E.bp], le = B ? T ? B : p(B) : a(n(_, I), J), se = [I], ge = [C], Ae = n(re, ne), P = 0, H = 0, te = x(T), k = w(T); te(se[P], _);) {
          var W = [];
          le = k(se[P], _, le), W.push(D(se[P], ge[P]));
          for (var K = 1; K < ue.length; ++K) W.push(D(i(se[P], t(ue[K], le)), i(ge[P], t(le, ee[K], W))));
          var ve = o(c(f(t(Ae, W), R => Yr(R) ? R.value : R)));
          ve < Z && Z / ve > 1 / 4 && (se.push(i(se[P], le)), ge.push(i(ge[P], t(le, re, W))), P++);
          var me = .84 * (Z / ve) ** (1 / 5);
          if (m(me, q) ? me = q : l(me, X) && (me = X), me = Q ? d(me) : me, le = t(le, me), U && l(c(le), U) ? le = T ? U : p(U) : O && m(c(le), O) && (le = T ? O : p(O)), H++, H > ie) throw new Error("Maximum number of iterations reached, try changing options")
        }
        return {
          t: se,
          y: ge
        }
      }
    }

    function g(E, D, S, C) {
      var M = [
          [],
          [.5],
          [0, .75],
          [.2222222222222222, .3333333333333333, .4444444444444444]
        ],
        $ = [null, 1 / 2, 3 / 4, 1],
        I = [2 / 9, 1 / 3, 4 / 9, 0],
        _ = [7 / 24, 1 / 4, 1 / 3, 1 / 8],
        T = {
          a: M,
          c: $,
          b: I,
          bp: _
        };
      return b(T)(E, D, S, C)
    }

    function N(E, D, S, C) {
      var M = [
          [],
          [.2],
          [.075, .225],
          [.9777777777777777, -3.7333333333333334, 3.5555555555555554],
          [2.9525986892242035, -11.595793324188385, 9.822892851699436, -.2908093278463649],
          [2.8462752525252526, -10.757575757575758, 8.906422717743473, .2784090909090909, -.2735313036020583],
          [.09114583333333333, 0, .44923629829290207, .6510416666666666, -.322376179245283, .13095238095238096]
        ],
        $ = [null, 1 / 5, 3 / 10, 4 / 5, 8 / 9, 1, 1],
        I = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84, 0],
        _ = [5179 / 57600, 0, 7571 / 16695, 393 / 640, -92097 / 339200, 187 / 2100, 1 / 40],
        T = {
          a: M,
          c: $,
          b: I,
          bp: _
        };
      return b(T)(E, D, S, C)
    }

    function h(E, D, S, C) {
      var M = C.method ? C.method : "RK45",
        $ = {
          RK23: g,
          RK45: N
        };
      if (M.toUpperCase() in $) {
        var I = px({}, C);
        return delete I.method, $[M.toUpperCase()](E, D, S, I)
      } else {
        var _ = Object.keys($).map(B => '"'.concat(B, '"')),
          T = "".concat(_.slice(0, -1).join(", "), " and ").concat(_.slice(-1));
        throw new Error('Unavailable method "'.concat(M, '". Available methods are ').concat(T))
      }
    }

    function x(E) {
      return E ? m : l
    }

    function w(E) {
      var D = E ? l : m;
      return function(S, C, M) {
        var $ = i(S, M);
        return D($, C) ? n(C, S) : M
      }
    }

    function y(E) {
      return He(E) || Pe(E)
    }

    function A(E, D, S, C) {
      var M = h(E, D.toArray(), S.toArray(), C);
      return {
        t: v(M.t),
        y: v(M.y)
      }
    }
    return r("solveODE", {
      "function, Array, Array, Object": h,
      "function, Matrix, Matrix, Object": A,
      "function, Array, Array": (E, D, S) => h(E, D, S, {}),
      "function, Matrix, Matrix": (E, D, S) => A(E, D, S, {}),
      "function, Array, number | BigNumber | Unit": (E, D, S) => {
        var C = h(E, D, [S], {});
        return {
          t: C.t,
          y: C.y.map(M => M[0])
        }
      },
      "function, Matrix, number | BigNumber | Unit": (E, D, S) => {
        var C = h(E, D.toArray(), [S], {});
        return {
          t: v(C.t),
          y: v(C.y.map(M => M[0]))
        }
      },
      "function, Array, number | BigNumber | Unit, Object": (E, D, S, C) => {
        var M = h(E, D, [S], C);
        return {
          t: M.t,
          y: M.y.map($ => $[0])
        }
      },
      "function, Matrix, number | BigNumber | Unit, Object": (E, D, S, C) => {
        var M = h(E, D.toArray(), [S], C);
        return {
          t: v(M.t),
          y: v(M.y.map($ => $[0]))
        }
      }
    })
  }),
  yx = "erf",
  bx = ["typed"],
  xx = z(yx, bx, e => {
    var {
      typed: r
    } = e;
    return r("name", {
      number: function(o) {
        var f = Math.abs(o);
        return f >= Dx ? _t(o) : f <= wx ? _t(o) * i(f) : f <= 4 ? _t(o) * (1 - n(f)) : _t(o) * (1 - t(f))
      },
      "Array | Matrix": r.referToSelf(a => o => Le(o, a))
    });

    function i(a) {
      var o = a * a,
        f = xt[0][4] * o,
        c = o,
        u;
      for (u = 0; u < 3; u += 1) f = (f + xt[0][u]) * o, c = (c + fn[0][u]) * o;
      return a * (f + xt[0][3]) / (c + fn[0][3])
    }

    function n(a) {
      var o = xt[1][8] * a,
        f = a,
        c;
      for (c = 0; c < 7; c += 1) o = (o + xt[1][c]) * a, f = (f + fn[1][c]) * a;
      var u = (o + xt[1][7]) / (f + fn[1][7]),
        s = parseInt(a * 16) / 16,
        l = (a - s) * (a + s);
      return Math.exp(-s * s) * Math.exp(-l) * u
    }

    function t(a) {
      var o = 1 / (a * a),
        f = xt[2][5] * o,
        c = o,
        u;
      for (u = 0; u < 4; u += 1) f = (f + xt[2][u]) * o, c = (c + fn[2][u]) * o;
      var s = o * (f + xt[2][4]) / (c + fn[2][4]);
      s = (Nx - s) / a, o = parseInt(a * 16) / 16;
      var l = (a - o) * (a + o);
      return Math.exp(-o * o) * Math.exp(-l) * s
    }
  }),
  wx = .46875,
  Nx = .5641895835477563,
  xt = [
    [3.1611237438705655, 113.86415415105016, 377.485237685302, 3209.3775891384694, .18577770618460315],
    [.5641884969886701, 8.883149794388377, 66.11919063714163, 298.6351381974001, 881.952221241769, 1712.0476126340707, 2051.0783778260716, 1230.3393547979972, 21531153547440383e-24],
    [.30532663496123236, .36034489994980445, .12578172611122926, .016083785148742275, .0006587491615298378, .016315387137302097]
  ],
  fn = [
    [23.601290952344122, 244.02463793444417, 1282.6165260773723, 2844.236833439171],
    [15.744926110709835, 117.6939508913125, 537.1811018620099, 1621.3895745666903, 3290.7992357334597, 4362.619090143247, 3439.3676741437216, 1230.3393548037495],
    [2.568520192289822, 1.8729528499234604, .5279051029514285, .06051834131244132, .0023352049762686918]
  ],
  Dx = Math.pow(2, 53),
  Wu = "zeta",
  Ax = ["typed", "config", "multiply", "pow", "divide", "factorial", "equal", "smallerEq", "isNegative", "gamma", "sin", "subtract", "add", "?Complex", "?BigNumber", "pi"],
  Ex = z(Wu, Ax, e => {
    var {
      typed: r,
      config: i,
      multiply: n,
      pow: t,
      divide: a,
      factorial: o,
      equal: f,
      smallerEq: c,
      isNegative: u,
      gamma: s,
      sin: l,
      subtract: m,
      add: v,
      Complex: d,
      BigNumber: p,
      pi: b
    } = e;
    return r(Wu, {
      number: y => g(y, A => A, () => 20),
      BigNumber: y => g(y, A => new p(A), () => Math.abs(Math.log10(i.epsilon))),
      Complex: N
    });

    function g(y, A, E) {
      return f(y, 0) ? A(-.5) : f(y, 1) ? A(NaN) : isFinite(y) ? h(y, A, E, D => D) : u(y) ? A(NaN) : A(1)
    }

    function N(y) {
      return y.re === 0 && y.im === 0 ? new d(-.5) : y.re === 1 ? new d(NaN, NaN) : y.re === 1 / 0 && y.im === 0 ? new d(1) : y.im === 1 / 0 || y.re === -1 / 0 ? new d(NaN, NaN) : h(y, A => A, A => Math.round(1.3 * 15 + .9 * Math.abs(A.im)), A => A.re)
    }

    function h(y, A, E, D) {
      var S = E(y);
      if (D(y) > -(S - 1) / 2) return w(y, A(S), A);
      var C = n(t(2, y), t(A(b), m(y, 1)));
      return C = n(C, l(n(a(A(b), 2), y))), C = n(C, s(m(1, y))), n(C, h(m(1, y), A, E, D))
    }

    function x(y, A) {
      for (var E = y, D = y; c(D, A); D = v(D, 1)) {
        var S = a(n(o(v(A, m(D, 1))), t(4, D)), n(o(m(A, D)), o(n(2, D))));
        E = v(E, S)
      }
      return n(A, E)
    }

    function w(y, A, E) {
      for (var D = a(1, n(x(E(0), A), m(1, t(2, m(1, y))))), S = E(0), C = E(1); c(C, A); C = v(C, 1)) S = v(S, a(n((-1) ** (C - 1), x(C, A)), t(C, y)));
      return n(D, S)
    }
  }),
  Qu = "mode",
  Sx = ["typed", "isNaN", "isNumeric"],
  Cx = z(Qu, Sx, e => {
    var {
      typed: r,
      isNaN: i,
      isNumeric: n
    } = e;
    return r(Qu, {
      "Array | Matrix": t,
      "...": function(o) {
        return t(o)
      }
    });

    function t(a) {
      a = Xe(a.valueOf());
      var o = a.length;
      if (o === 0) throw new Error("Cannot calculate mode of an empty array");
      for (var f = {}, c = [], u = 0, s = 0; s < a.length; s++) {
        var l = a[s];
        if (n(l) && i(l)) throw new Error("Cannot calculate mode of an array containing NaN values");
        l in f || (f[l] = 0), f[l]++, f[l] === u ? c.push(l) : f[l] > u && (u = f[l], c = [l])
      }
      return c
    }
  });

function Or(e, r, i) {
  var n;
  return String(e).indexOf("Unexpected type") !== -1 ? (n = arguments.length > 2 ? " (type: " + ar(i) + ", value: " + JSON.stringify(i) + ")" : " (type: " + e.data.actual + ")", new TypeError("Cannot calculate " + r + ", unexpected type of argument" + n)) : String(e).indexOf("complex numbers") !== -1 ? (n = arguments.length > 2 ? " (type: " + ar(i) + ", value: " + JSON.stringify(i) + ")" : "", new TypeError("Cannot calculate " + r + ", no ordering relation is defined for complex numbers" + n)) : e
}
var Xu = "prod",
  Mx = ["typed", "config", "multiplyScalar", "numeric"],
  Fx = z(Xu, Mx, e => {
    var {
      typed: r,
      config: i,
      multiplyScalar: n,
      numeric: t
    } = e;
    return r(Xu, {
      "Array | Matrix": a,
      "Array | Matrix, number | BigNumber": function(f, c) {
        throw new Error("prod(A, dim) is not yet supported")
      },
      "...": function(f) {
        return a(f)
      }
    });

    function a(o) {
      var f;
      if (Ct(o, function(c) {
          try {
            f = f === void 0 ? c : n(f, c)
          } catch (u) {
            throw Or(u, "prod", c)
          }
        }), typeof f == "string" && (f = t(f, i.number)), f === void 0) throw new Error("Cannot calculate prod of an empty array");
      return f
    }
  }),
  Ju = "format",
  Bx = ["typed"],
  Tx = z(Ju, Bx, e => {
    var {
      typed: r
    } = e;
    return r(Ju, {
      any: ze,
      "any, Object | function | number": ze
    })
  }),
  Ku = "bin",
  Ox = ["typed", "format"],
  $x = z(Ku, Ox, e => {
    var {
      typed: r,
      format: i
    } = e;
    return r(Ku, {
      "number | BigNumber": function(t) {
        return i(t, {
          notation: "bin"
        })
      },
      "number | BigNumber, number": function(t, a) {
        return i(t, {
          notation: "bin",
          wordSize: a
        })
      }
    })
  }),
  ju = "oct",
  _x = ["typed", "format"],
  Ix = z(ju, _x, e => {
    var {
      typed: r,
      format: i
    } = e;
    return r(ju, {
      "number | BigNumber": function(t) {
        return i(t, {
          notation: "oct"
        })
      },
      "number | BigNumber, number": function(t, a) {
        return i(t, {
          notation: "oct",
          wordSize: a
        })
      }
    })
  }),
  el = "hex",
  qx = ["typed", "format"],
  Rx = z(el, qx, e => {
    var {
      typed: r,
      format: i
    } = e;
    return r(el, {
      "number | BigNumber": function(t) {
        return i(t, {
          notation: "hex"
        })
      },
      "number | BigNumber, number": function(t, a) {
        return i(t, {
          notation: "hex",
          wordSize: a
        })
      }
    })
  }),
  Cv = /\$([\w.]+)/g,
  rl = "print",
  zx = ["typed"],
  Mv = z(rl, zx, e => {
    var {
      typed: r
    } = e;
    return r(rl, {
      "string, Object | Array": tl,
      "string, Object | Array, number | Object": tl
    })
  });

function tl(e, r, i) {
  return e.replace(Cv, function(n, t) {
    var a = t.split("."),
      o = r[a.shift()];
    for (o !== void 0 && o.isMatrix && (o = o.toArray()); a.length && o !== void 0;) {
      var f = a.shift();
      o = f ? o[f] : o + "."
    }
    return o !== void 0 ? Ar(o) ? o : ze(o, i) : n
  })
}
var nl = "to",
  Px = ["typed", "matrix", "concat"],
  Ux = z(nl, Px, e => {
    var {
      typed: r,
      matrix: i,
      concat: n
    } = e, t = or({
      typed: r,
      matrix: i,
      concat: n
    });
    return r(nl, {
      "Unit, Unit | string": (a, o) => a.to(o)
    }, t({
      Ds: !0
    }))
  }),
  al = "isPrime",
  Lx = ["typed"],
  kx = z(al, Lx, e => {
    var {
      typed: r
    } = e;
    return r(al, {
      number: function(n) {
        if (n * 0 !== 0) return !1;
        if (n <= 3) return n > 1;
        if (n % 2 === 0 || n % 3 === 0) return !1;
        for (var t = 5; t * t <= n; t += 6)
          if (n % t === 0 || n % (t + 2) === 0) return !1;
        return !0
      },
      BigNumber: function(n) {
        if (n.toNumber() * 0 !== 0) return !1;
        if (n.lte(3)) return n.gt(1);
        if (n.mod(2).eq(0) || n.mod(3).eq(0)) return !1;
        if (n.lt(Math.pow(2, 32))) {
          for (var t = n.toNumber(), a = 5; a * a <= t; a += 6)
            if (t % a === 0 || t % (a + 2) === 0) return !1;
          return !0
        }

        function o(N, h, x) {
          for (var w = 1; !h.eq(0);) h.mod(2).eq(0) ? (h = h.div(2), N = N.mul(N).mod(x)) : (h = h.sub(1), w = N.mul(w).mod(x));
          return w
        }
        var f = n.constructor.clone({
          precision: n.toFixed(0).length * 2
        });
        n = new f(n);
        for (var c = 0, u = n.sub(1); u.mod(2).eq(0);) u = u.div(2), c += 1;
        var s = null;
        if (n.lt("3317044064679887385961981")) s = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41].filter(N => N < n);
        else {
          var l = Math.min(n.toNumber() - 2, Math.floor(2 * Math.pow(n.toFixed(0).length * Math.log(10), 2)));
          s = [];
          for (var m = 2; m <= l; m += 1) s.push(l)
        }
        for (var v = 0; v < s.length; v += 1) {
          var d = s[v],
            p = o(n.sub(n).add(d), u, n);
          if (!p.eq(1)) {
            for (var b = 0, g = p; !g.eq(n.sub(1)); b += 1, g = g.mul(g).mod(n))
              if (b === c - 1) return !1
          }
        }
        return !0
      },
      "Array | Matrix": r.referToSelf(i => n => Le(n, i))
    })
  }),
  Hx = "numeric",
  Gx = ["number", "?bignumber", "?fraction"],
  Vx = z(Hx, Gx, e => {
    var {
      number: r,
      bignumber: i,
      fraction: n
    } = e, t = {
      string: !0,
      number: !0,
      BigNumber: !0,
      Fraction: !0
    }, a = {
      number: o => r(o),
      BigNumber: i ? o => i(o) : Eo,
      Fraction: n ? o => n(o) : Nv
    };
    return function(f) {
      var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "number",
        u = arguments.length > 2 ? arguments[2] : void 0;
      if (u !== void 0) throw new SyntaxError("numeric() takes one or two arguments");
      var s = ar(f);
      if (!(s in t)) throw new TypeError("Cannot convert " + f + ' of type "' + s + '"; valid input types are ' + Object.keys(t).join(", "));
      if (!(c in a)) throw new TypeError("Cannot convert " + f + ' to type "' + c + '"; valid output types are ' + Object.keys(a).join(", "));
      return c === s ? f : a[c](f)
    }
  }),
  il = "divideScalar",
  Zx = ["typed", "numeric"],
  Yx = z(il, Zx, e => {
    var {
      typed: r,
      numeric: i
    } = e;
    return r(il, {
      "number, number": function(t, a) {
        return t / a
      },
      "Complex, Complex": function(t, a) {
        return t.div(a)
      },
      "BigNumber, BigNumber": function(t, a) {
        return t.div(a)
      },
      "Fraction, Fraction": function(t, a) {
        return t.div(a)
      },
      "Unit, number | Complex | Fraction | BigNumber | Unit": (n, t) => n.divide(t),
      "number | Fraction | Complex | BigNumber, Unit": (n, t) => t.divideInto(n)
    })
  }),
  ol = "pow",
  Wx = ["typed", "config", "identity", "multiply", "matrix", "inv", "fraction", "number", "Complex"],
  Qx = z(ol, Wx, e => {
    var {
      typed: r,
      config: i,
      identity: n,
      multiply: t,
      matrix: a,
      inv: o,
      number: f,
      fraction: c,
      Complex: u
    } = e;
    return r(ol, {
      "number, number": s,
      "Complex, Complex": function(d, p) {
        return d.pow(p)
      },
      "BigNumber, BigNumber": function(d, p) {
        return p.isInteger() || d >= 0 || i.predictable ? d.pow(p) : new u(d.toNumber(), 0).pow(p.toNumber(), 0)
      },
      "Fraction, Fraction": function(d, p) {
        var b = d.pow(p);
        if (b != null) return b;
        if (i.predictable) throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");
        return s(d.valueOf(), p.valueOf())
      },
      "Array, number": l,
      "Array, BigNumber": function(d, p) {
        return l(d, p.toNumber())
      },
      "Matrix, number": m,
      "Matrix, BigNumber": function(d, p) {
        return m(d, p.toNumber())
      },
      "Unit, number | BigNumber": function(d, p) {
        return d.pow(p)
      }
    });

    function s(v, d) {
      if (i.predictable && !Se(d) && v < 0) try {
        var p = c(d),
          b = f(p);
        if ((d === b || Math.abs((d - b) / d) < 1e-14) && p.d % 2 === 1) return (p.n % 2 === 0 ? 1 : -1) * Math.pow(-v, d)
      } catch {}
      return i.predictable && (v < -1 && d === 1 / 0 || v > -1 && v < 0 && d === -1 / 0) ? NaN : Se(d) || v >= 0 || i.predictable ? Im(v, d) : v * v < 1 && d === 1 / 0 || v * v > 1 && d === -1 / 0 ? 0 : new u(v, 0).pow(d, 0)
    }

    function l(v, d) {
      if (!Se(d)) throw new TypeError("For A^b, b must be an integer (value is " + d + ")");
      var p = qe(v);
      if (p.length !== 2) throw new Error("For A^b, A must be 2 dimensional (A has " + p.length + " dimensions)");
      if (p[0] !== p[1]) throw new Error("For A^b, A must be square (size is " + p[0] + "x" + p[1] + ")");
      if (d < 0) try {
        return l(o(v), -d)
      } catch (N) {
        throw N.message === "Cannot calculate inverse, determinant is zero" ? new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is " + d + ")") : N
      }
      for (var b = n(p[0]).valueOf(), g = v; d >= 1;)(d & 1) === 1 && (b = t(g, b)), d >>= 1, g = t(g, g);
      return b
    }

    function m(v, d) {
      return a(l(v.valueOf(), d))
    }
  }),
  mn = "Number of decimals in function round must be an integer",
  sl = "round",
  Xx = ["typed", "matrix", "equalScalar", "zeros", "BigNumber", "DenseMatrix"],
  Jx = z(sl, Xx, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      zeros: t,
      BigNumber: a,
      DenseMatrix: o
    } = e, f = Nr({
      typed: r,
      equalScalar: n
    }), c = hr({
      typed: r,
      DenseMatrix: o
    }), u = st({
      typed: r
    });
    return r(sl, {
      number: Ds,
      "number, number": Ds,
      "number, BigNumber": function(l, m) {
        if (!m.isInteger()) throw new TypeError(mn);
        return new a(l).toDecimalPlaces(m.toNumber())
      },
      Complex: function(l) {
        return l.round()
      },
      "Complex, number": function(l, m) {
        if (m % 1) throw new TypeError(mn);
        return l.round(m)
      },
      "Complex, BigNumber": function(l, m) {
        if (!m.isInteger()) throw new TypeError(mn);
        var v = m.toNumber();
        return l.round(v)
      },
      BigNumber: function(l) {
        return l.toDecimalPlaces(0)
      },
      "BigNumber, BigNumber": function(l, m) {
        if (!m.isInteger()) throw new TypeError(mn);
        return l.toDecimalPlaces(m.toNumber())
      },
      Fraction: function(l) {
        return l.round()
      },
      "Fraction, number": function(l, m) {
        if (m % 1) throw new TypeError(mn);
        return l.round(m)
      },
      "Fraction, BigNumber": function(l, m) {
        if (!m.isInteger()) throw new TypeError(mn);
        return l.round(m.toNumber())
      },
      "Unit, number, Unit": r.referToSelf(s => function(l, m, v) {
        var d = l.toNumeric(v);
        return v.multiply(s(d, m))
      }),
      "Unit, BigNumber, Unit": r.referToSelf(s => (l, m, v) => s(l, m.toNumber(), v)),
      "Unit, Unit": r.referToSelf(s => (l, m) => s(l, 0, m)),
      "Array | Matrix, number, Unit": r.referToSelf(s => (l, m, v) => Le(l, d => s(d, m, v))),
      "Array | Matrix, BigNumber, Unit": r.referToSelf(s => (l, m, v) => s(l, m.toNumber(), v)),
      "Array | Matrix, Unit": r.referToSelf(s => (l, m) => s(l, 0, m)),
      "Array | Matrix": r.referToSelf(s => l => Le(l, s)),
      "SparseMatrix, number | BigNumber": r.referToSelf(s => (l, m) => f(l, m, s, !1)),
      "DenseMatrix, number | BigNumber": r.referToSelf(s => (l, m) => u(l, m, s, !1)),
      "Array, number | BigNumber": r.referToSelf(s => (l, m) => u(i(l), m, s, !1).valueOf()),
      "number | Complex | BigNumber | Fraction, SparseMatrix": r.referToSelf(s => (l, m) => n(l, 0) ? t(m.size(), m.storage()) : c(m, l, s, !0)),
      "number | Complex | BigNumber | Fraction, DenseMatrix": r.referToSelf(s => (l, m) => n(l, 0) ? t(m.size(), m.storage()) : u(m, l, s, !0)),
      "number | Complex | BigNumber | Fraction, Array": r.referToSelf(s => (l, m) => u(i(m), l, s, !0).valueOf())
    })
  }),
  ul = "log",
  Kx = ["config", "typed", "divideScalar", "Complex"],
  jx = z(ul, Kx, e => {
    var {
      typed: r,
      config: i,
      divideScalar: n,
      Complex: t
    } = e;
    return r(ul, {
      number: function(o) {
        return o >= 0 || i.predictable ? W0(o) : new t(o, 0).log()
      },
      Complex: function(o) {
        return o.log()
      },
      BigNumber: function(o) {
        return !o.isNegative() || i.predictable ? o.ln() : new t(o.toNumber(), 0).log()
      },
      "any, any": r.referToSelf(a => (o, f) => n(a(o), a(f)))
    })
  }),
  ll = "log1p",
  ew = ["typed", "config", "divideScalar", "log", "Complex"],
  rw = z(ll, ew, e => {
    var {
      typed: r,
      config: i,
      divideScalar: n,
      log: t,
      Complex: a
    } = e;
    return r(ll, {
      number: function(c) {
        return c >= -1 || i.predictable ? Vd(c) : o(new a(c, 0))
      },
      Complex: o,
      BigNumber: function(c) {
        var u = c.plus(1);
        return !u.isNegative() || i.predictable ? u.ln() : o(new a(c.toNumber(), 0))
      },
      "Array | Matrix": r.referToSelf(f => c => Le(c, f)),
      "any, any": r.referToSelf(f => (c, u) => n(f(c), t(u)))
    });

    function o(f) {
      var c = f.re + 1;
      return new a(Math.log(Math.sqrt(c * c + f.im * f.im)), Math.atan2(f.im, c))
    }
  }),
  cl = "nthRoots",
  tw = ["config", "typed", "divideScalar", "Complex"],
  nw = z(cl, tw, e => {
    var {
      typed: r,
      config: i,
      divideScalar: n,
      Complex: t
    } = e, a = [function(c) {
      return new t(c, 0)
    }, function(c) {
      return new t(0, c)
    }, function(c) {
      return new t(-c, 0)
    }, function(c) {
      return new t(0, -c)
    }];

    function o(f, c) {
      if (c < 0) throw new Error("Root must be greater than zero");
      if (c === 0) throw new Error("Root must be non-zero");
      if (c % 1 !== 0) throw new Error("Root must be an integer");
      if (f === 0 || f.abs() === 0) return [new t(0, 0)];
      var u = typeof f == "number",
        s;
      (u || f.re === 0 || f.im === 0) && (u ? s = 2 * +(f < 0) : f.im === 0 ? s = 2 * +(f.re < 0) : s = 2 * +(f.im < 0) + 1);
      for (var l = f.arg(), m = f.abs(), v = [], d = Math.pow(m, 1 / c), p = 0; p < c; p++) {
        var b = (s + 4 * p) / c;
        if (b === Math.round(b)) {
          v.push(a[b % 4](d));
          continue
        }
        v.push(new t({
          r: d,
          phi: (l + 2 * Math.PI * p) / c
        }))
      }
      return v
    }
    return r(cl, {
      Complex: function(c) {
        return o(c, 2)
      },
      "Complex, number": o
    })
  }),
  fl = "dotPow",
  aw = ["typed", "equalScalar", "matrix", "pow", "DenseMatrix", "concat"],
  iw = z(fl, aw, e => {
    var {
      typed: r,
      equalScalar: i,
      matrix: n,
      pow: t,
      DenseMatrix: a,
      concat: o
    } = e, f = _r({
      typed: r
    }), c = ht({
      typed: r,
      DenseMatrix: a
    }), u = Nr({
      typed: r,
      equalScalar: i
    }), s = hr({
      typed: r,
      DenseMatrix: a
    }), l = or({
      typed: r,
      matrix: n,
      concat: o
    }), m = {};
    for (var v in t.signatures) Object.prototype.hasOwnProperty.call(t.signatures, v) && !v.includes("Matrix") && !v.includes("Array") && (m[v] = t.signatures[v]);
    var d = r(m);
    return r(fl, l({
      elop: d,
      SS: c,
      DS: f,
      Ss: u,
      sS: s
    }))
  }),
  ml = "dotDivide",
  ow = ["typed", "matrix", "equalScalar", "divideScalar", "DenseMatrix", "concat"],
  sw = z(ml, ow, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      divideScalar: t,
      DenseMatrix: a,
      concat: o
    } = e, f = ut({
      typed: r,
      equalScalar: n
    }), c = _r({
      typed: r
    }), u = ht({
      typed: r,
      DenseMatrix: a
    }), s = Nr({
      typed: r,
      equalScalar: n
    }), l = hr({
      typed: r,
      DenseMatrix: a
    }), m = or({
      typed: r,
      matrix: i,
      concat: o
    });
    return r(ml, m({
      elop: t,
      SS: u,
      DS: c,
      SD: f,
      Ss: s,
      sS: l
    }))
  });

function ca(e) {
  var {
    DenseMatrix: r
  } = e;
  return function(n, t, a) {
    var o = n.size();
    if (o.length !== 2) throw new RangeError("Matrix must be two dimensional (size: " + ze(o) + ")");
    var f = o[0],
      c = o[1];
    if (f !== c) throw new RangeError("Matrix must be square (size: " + ze(o) + ")");
    var u = [];
    if (Fe(t)) {
      var s = t.size(),
        l = t._data;
      if (s.length === 1) {
        if (s[0] !== f) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var m = 0; m < f; m++) u[m] = [l[m]];
        return new r({
          data: u,
          size: [f, 1],
          datatype: t._datatype
        })
      }
      if (s.length === 2) {
        if (s[0] !== f || s[1] !== 1) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        if (La(t)) {
          if (a) {
            u = [];
            for (var v = 0; v < f; v++) u[v] = [l[v][0]];
            return new r({
              data: u,
              size: [f, 1],
              datatype: t._datatype
            })
          }
          return t
        }
        if (Zt(t)) {
          for (var d = 0; d < f; d++) u[d] = [0];
          for (var p = t._values, b = t._index, g = t._ptr, N = g[1], h = g[0]; h < N; h++) {
            var x = b[h];
            u[x][0] = p[h]
          }
          return new r({
            data: u,
            size: [f, 1],
            datatype: t._datatype
          })
        }
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.")
    }
    if (Je(t)) {
      var w = qe(t);
      if (w.length === 1) {
        if (w[0] !== f) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var y = 0; y < f; y++) u[y] = [t[y]];
        return new r({
          data: u,
          size: [f, 1]
        })
      }
      if (w.length === 2) {
        if (w[0] !== f || w[1] !== 1) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var A = 0; A < f; A++) u[A] = [t[A][0]];
        return new r({
          data: u,
          size: [f, 1]
        })
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.")
    }
  }
}
var vl = "lsolve",
  uw = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"],
  lw = z(vl, uw, e => {
    var {
      typed: r,
      matrix: i,
      divideScalar: n,
      multiplyScalar: t,
      subtractScalar: a,
      equalScalar: o,
      DenseMatrix: f
    } = e, c = ca({
      DenseMatrix: f
    });
    return r(vl, {
      "SparseMatrix, Array | Matrix": function(m, v) {
        return s(m, v)
      },
      "DenseMatrix, Array | Matrix": function(m, v) {
        return u(m, v)
      },
      "Array, Array | Matrix": function(m, v) {
        var d = i(m),
          p = u(d, v);
        return p.valueOf()
      }
    });

    function u(l, m) {
      m = c(l, m, !0);
      for (var v = m._data, d = l._size[0], p = l._size[1], b = [], g = l._data, N = 0; N < p; N++) {
        var h = v[N][0] || 0,
          x = void 0;
        if (o(h, 0)) x = 0;
        else {
          var w = g[N][N];
          if (o(w, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
          x = n(h, w);
          for (var y = N + 1; y < d; y++) v[y] = [a(v[y][0] || 0, t(x, g[y][N]))]
        }
        b[N] = [x]
      }
      return new f({
        data: b,
        size: [d, 1]
      })
    }

    function s(l, m) {
      m = c(l, m, !0);
      for (var v = m._data, d = l._size[0], p = l._size[1], b = l._values, g = l._index, N = l._ptr, h = [], x = 0; x < p; x++) {
        var w = v[x][0] || 0;
        if (o(w, 0)) h[x] = [0];
        else {
          for (var y = 0, A = [], E = [], D = N[x], S = N[x + 1], C = D; C < S; C++) {
            var M = g[C];
            M === x ? y = b[C] : M > x && (A.push(b[C]), E.push(M))
          }
          if (o(y, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
          for (var $ = n(w, y), I = 0, _ = E.length; I < _; I++) {
            var T = E[I];
            v[T] = [a(v[T][0] || 0, t($, A[I]))]
          }
          h[x] = [$]
        }
      }
      return new f({
        data: h,
        size: [d, 1]
      })
    }
  }),
  pl = "usolve",
  cw = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"],
  fw = z(pl, cw, e => {
    var {
      typed: r,
      matrix: i,
      divideScalar: n,
      multiplyScalar: t,
      subtractScalar: a,
      equalScalar: o,
      DenseMatrix: f
    } = e, c = ca({
      DenseMatrix: f
    });
    return r(pl, {
      "SparseMatrix, Array | Matrix": function(m, v) {
        return s(m, v)
      },
      "DenseMatrix, Array | Matrix": function(m, v) {
        return u(m, v)
      },
      "Array, Array | Matrix": function(m, v) {
        var d = i(m),
          p = u(d, v);
        return p.valueOf()
      }
    });

    function u(l, m) {
      m = c(l, m, !0);
      for (var v = m._data, d = l._size[0], p = l._size[1], b = [], g = l._data, N = p - 1; N >= 0; N--) {
        var h = v[N][0] || 0,
          x = void 0;
        if (o(h, 0)) x = 0;
        else {
          var w = g[N][N];
          if (o(w, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
          x = n(h, w);
          for (var y = N - 1; y >= 0; y--) v[y] = [a(v[y][0] || 0, t(x, g[y][N]))]
        }
        b[N] = [x]
      }
      return new f({
        data: b,
        size: [d, 1]
      })
    }

    function s(l, m) {
      m = c(l, m, !0);
      for (var v = m._data, d = l._size[0], p = l._size[1], b = l._values, g = l._index, N = l._ptr, h = [], x = p - 1; x >= 0; x--) {
        var w = v[x][0] || 0;
        if (o(w, 0)) h[x] = [0];
        else {
          for (var y = 0, A = [], E = [], D = N[x], S = N[x + 1], C = S - 1; C >= D; C--) {
            var M = g[C];
            M === x ? y = b[C] : M < x && (A.push(b[C]), E.push(M))
          }
          if (o(y, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
          for (var $ = n(w, y), I = 0, _ = E.length; I < _; I++) {
            var T = E[I];
            v[T] = [a(v[T][0], t($, A[I]))]
          }
          h[x] = [$]
        }
      }
      return new f({
        data: h,
        size: [d, 1]
      })
    }
  }),
  dl = "lsolveAll",
  mw = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"],
  vw = z(dl, mw, e => {
    var {
      typed: r,
      matrix: i,
      divideScalar: n,
      multiplyScalar: t,
      subtractScalar: a,
      equalScalar: o,
      DenseMatrix: f
    } = e, c = ca({
      DenseMatrix: f
    });
    return r(dl, {
      "SparseMatrix, Array | Matrix": function(m, v) {
        return s(m, v)
      },
      "DenseMatrix, Array | Matrix": function(m, v) {
        return u(m, v)
      },
      "Array, Array | Matrix": function(m, v) {
        var d = i(m),
          p = u(d, v);
        return p.map(b => b.valueOf())
      }
    });

    function u(l, m) {
      for (var v = [c(l, m, !0)._data.map(E => E[0])], d = l._data, p = l._size[0], b = l._size[1], g = 0; g < b; g++)
        for (var N = v.length, h = 0; h < N; h++) {
          var x = v[h];
          if (o(d[g][g], 0))
            if (o(x[g], 0)) {
              if (h === 0) {
                var y = [...x];
                y[g] = 1;
                for (var A = g + 1; A < b; A++) y[A] = a(y[A], d[A][g]);
                v.push(y)
              }
            } else {
              if (h === 0) return [];
              v.splice(h, 1), h -= 1, N -= 1
            }
          else {
            x[g] = n(x[g], d[g][g]);
            for (var w = g + 1; w < b; w++) x[w] = a(x[w], t(x[g], d[w][g]))
          }
        }
      return v.map(E => new f({
        data: E.map(D => [D]),
        size: [p, 1]
      }))
    }

    function s(l, m) {
      for (var v = [c(l, m, !0)._data.map(J => J[0])], d = l._size[0], p = l._size[1], b = l._values, g = l._index, N = l._ptr, h = 0; h < p; h++)
        for (var x = v.length, w = 0; w < x; w++) {
          for (var y = v[w], A = [], E = [], D = N[h], S = N[h + 1], C = 0, M = D; M < S; M++) {
            var $ = g[M];
            $ === h ? C = b[M] : $ > h && (A.push(b[M]), E.push($))
          }
          if (o(C, 0))
            if (o(y[h], 0)) {
              if (w === 0) {
                var B = [...y];
                B[h] = 1;
                for (var U = 0, O = E.length; U < O; U++) {
                  var V = E[U];
                  B[V] = a(B[V], A[U])
                }
                v.push(B)
              }
            } else {
              if (w === 0) return [];
              v.splice(w, 1), w -= 1, x -= 1
            }
          else {
            y[h] = n(y[h], C);
            for (var I = 0, _ = E.length; I < _; I++) {
              var T = E[I];
              y[T] = a(y[T], t(y[h], A[I]))
            }
          }
        }
      return v.map(J => new f({
        data: J.map(Z => [Z]),
        size: [d, 1]
      }))
    }
  }),
  hl = "usolveAll",
  pw = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"],
  dw = z(hl, pw, e => {
    var {
      typed: r,
      matrix: i,
      divideScalar: n,
      multiplyScalar: t,
      subtractScalar: a,
      equalScalar: o,
      DenseMatrix: f
    } = e, c = ca({
      DenseMatrix: f
    });
    return r(hl, {
      "SparseMatrix, Array | Matrix": function(m, v) {
        return s(m, v)
      },
      "DenseMatrix, Array | Matrix": function(m, v) {
        return u(m, v)
      },
      "Array, Array | Matrix": function(m, v) {
        var d = i(m),
          p = u(d, v);
        return p.map(b => b.valueOf())
      }
    });

    function u(l, m) {
      for (var v = [c(l, m, !0)._data.map(E => E[0])], d = l._data, p = l._size[0], b = l._size[1], g = b - 1; g >= 0; g--)
        for (var N = v.length, h = 0; h < N; h++) {
          var x = v[h];
          if (o(d[g][g], 0))
            if (o(x[g], 0)) {
              if (h === 0) {
                var y = [...x];
                y[g] = 1;
                for (var A = g - 1; A >= 0; A--) y[A] = a(y[A], d[A][g]);
                v.push(y)
              }
            } else {
              if (h === 0) return [];
              v.splice(h, 1), h -= 1, N -= 1
            }
          else {
            x[g] = n(x[g], d[g][g]);
            for (var w = g - 1; w >= 0; w--) x[w] = a(x[w], t(x[g], d[w][g]))
          }
        }
      return v.map(E => new f({
        data: E.map(D => [D]),
        size: [p, 1]
      }))
    }

    function s(l, m) {
      for (var v = [c(l, m, !0)._data.map(J => J[0])], d = l._size[0], p = l._size[1], b = l._values, g = l._index, N = l._ptr, h = p - 1; h >= 0; h--)
        for (var x = v.length, w = 0; w < x; w++) {
          for (var y = v[w], A = [], E = [], D = N[h], S = N[h + 1], C = 0, M = S - 1; M >= D; M--) {
            var $ = g[M];
            $ === h ? C = b[M] : $ < h && (A.push(b[M]), E.push($))
          }
          if (o(C, 0))
            if (o(y[h], 0)) {
              if (w === 0) {
                var B = [...y];
                B[h] = 1;
                for (var U = 0, O = E.length; U < O; U++) {
                  var V = E[U];
                  B[V] = a(B[V], A[U])
                }
                v.push(B)
              }
            } else {
              if (w === 0) return [];
              v.splice(w, 1), w -= 1, x -= 1
            }
          else {
            y[h] = n(y[h], C);
            for (var I = 0, _ = E.length; I < _; I++) {
              var T = E[I];
              y[T] = a(y[T], t(y[h], A[I]))
            }
          }
        }
      return v.map(J => new f({
        data: J.map(Z => [Z]),
        size: [d, 1]
      }))
    }
  }),
  hw = "matAlgo08xS0Sid",
  gw = ["typed", "equalScalar"],
  So = z(hw, gw, e => {
    var {
      typed: r,
      equalScalar: i
    } = e;
    return function(t, a, o) {
      var f = t._values,
        c = t._index,
        u = t._ptr,
        s = t._size,
        l = t._datatype,
        m = a._values,
        v = a._index,
        d = a._ptr,
        p = a._size,
        b = a._datatype;
      if (s.length !== p.length) throw new Ue(s.length, p.length);
      if (s[0] !== p[0] || s[1] !== p[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
      if (!f || !m) throw new Error("Cannot perform operation on Pattern Sparse Matrices");
      var g = s[0],
        N = s[1],
        h, x = i,
        w = 0,
        y = o;
      typeof l == "string" && l === b && (h = l, x = r.find(i, [h, h]), w = r.convert(0, h), y = r.find(o, [h, h]));
      for (var A = [], E = [], D = [], S = [], C = [], M, $, I, _, T = 0; T < N; T++) {
        D[T] = E.length;
        var B = T + 1;
        for ($ = u[T], I = u[T + 1], M = $; M < I; M++) _ = c[M], C[_] = B, S[_] = f[M], E.push(_);
        for ($ = d[T], I = d[T + 1], M = $; M < I; M++) _ = v[M], C[_] === B && (S[_] = y(S[_], m[M]));
        for (M = D[T]; M < E.length;) {
          _ = E[M];
          var U = S[_];
          x(U, w) ? E.splice(M, 1) : (A.push(U), M++)
        }
      }
      return D[N] = E.length, t.createSparseMatrix({
        values: A,
        index: E,
        ptr: D,
        size: [g, N],
        datatype: h
      })
    }
  }),
  Co = z("useMatrixForArrayScalar", ["typed", "matrix"], e => {
    var {
      typed: r,
      matrix: i
    } = e;
    return {
      "Array, number": r.referTo("DenseMatrix, number", n => (t, a) => n(i(t), a).valueOf()),
      "Array, BigNumber": r.referTo("DenseMatrix, BigNumber", n => (t, a) => n(i(t), a).valueOf()),
      "number, Array": r.referTo("number, DenseMatrix", n => (t, a) => n(t, i(a)).valueOf()),
      "BigNumber, Array": r.referTo("BigNumber, DenseMatrix", n => (t, a) => n(t, i(a)).valueOf())
    }
  }),
  gl = "leftShift",
  yw = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"],
  bw = z(gl, yw, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      zeros: t,
      DenseMatrix: a,
      concat: o
    } = e, f = Lt({
      typed: r
    }), c = ut({
      typed: r,
      equalScalar: n
    }), u = So({
      typed: r,
      equalScalar: n
    }), s = Jt({
      typed: r,
      DenseMatrix: a
    }), l = Nr({
      typed: r,
      equalScalar: n
    }), m = st({
      typed: r
    }), v = or({
      typed: r,
      matrix: i,
      concat: o
    }), d = Co({
      typed: r,
      matrix: i
    });
    return r(gl, {
      "number, number": Um,
      "BigNumber, BigNumber": qy,
      "SparseMatrix, number | BigNumber": r.referToSelf(p => (b, g) => n(g, 0) ? b.clone() : l(b, g, p, !1)),
      "DenseMatrix, number | BigNumber": r.referToSelf(p => (b, g) => n(g, 0) ? b.clone() : m(b, g, p, !1)),
      "number | BigNumber, SparseMatrix": r.referToSelf(p => (b, g) => n(b, 0) ? t(g.size(), g.storage()) : s(g, b, p, !0)),
      "number | BigNumber, DenseMatrix": r.referToSelf(p => (b, g) => n(b, 0) ? t(g.size(), g.storage()) : m(g, b, p, !0))
    }, d, v({
      SS: u,
      DS: f,
      SD: c
    }))
  }),
  yl = "rightArithShift",
  xw = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"],
  ww = z(yl, xw, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      zeros: t,
      DenseMatrix: a,
      concat: o
    } = e, f = Lt({
      typed: r
    }), c = ut({
      typed: r,
      equalScalar: n
    }), u = So({
      typed: r,
      equalScalar: n
    }), s = Jt({
      typed: r,
      DenseMatrix: a
    }), l = Nr({
      typed: r,
      equalScalar: n
    }), m = st({
      typed: r
    }), v = or({
      typed: r,
      matrix: i,
      concat: o
    }), d = Co({
      typed: r,
      matrix: i
    });
    return r(yl, {
      "number, number": Lm,
      "BigNumber, BigNumber": Ry,
      "SparseMatrix, number | BigNumber": r.referToSelf(p => (b, g) => n(g, 0) ? b.clone() : l(b, g, p, !1)),
      "DenseMatrix, number | BigNumber": r.referToSelf(p => (b, g) => n(g, 0) ? b.clone() : m(b, g, p, !1)),
      "number | BigNumber, SparseMatrix": r.referToSelf(p => (b, g) => n(b, 0) ? t(g.size(), g.storage()) : s(g, b, p, !0)),
      "number | BigNumber, DenseMatrix": r.referToSelf(p => (b, g) => n(b, 0) ? t(g.size(), g.storage()) : m(g, b, p, !0))
    }, d, v({
      SS: u,
      DS: f,
      SD: c
    }))
  }),
  bl = "rightLogShift",
  Nw = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"],
  Dw = z(bl, Nw, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      zeros: t,
      DenseMatrix: a,
      concat: o
    } = e, f = Lt({
      typed: r
    }), c = ut({
      typed: r,
      equalScalar: n
    }), u = So({
      typed: r,
      equalScalar: n
    }), s = Jt({
      typed: r,
      DenseMatrix: a
    }), l = Nr({
      typed: r,
      equalScalar: n
    }), m = st({
      typed: r
    }), v = or({
      typed: r,
      matrix: i,
      concat: o
    }), d = Co({
      typed: r,
      matrix: i
    });
    return r(bl, {
      "number, number": km,
      "SparseMatrix, number | BigNumber": r.referToSelf(p => (b, g) => n(g, 0) ? b.clone() : l(b, g, p, !1)),
      "DenseMatrix, number | BigNumber": r.referToSelf(p => (b, g) => n(g, 0) ? b.clone() : m(b, g, p, !1)),
      "number | BigNumber, SparseMatrix": r.referToSelf(p => (b, g) => n(b, 0) ? t(g.size(), g.storage()) : s(g, b, p, !0)),
      "number | BigNumber, DenseMatrix": r.referToSelf(p => (b, g) => n(b, 0) ? t(g.size(), g.storage()) : m(g, b, p, !0))
    }, d, v({
      SS: u,
      DS: f,
      SD: c
    }))
  }),
  xl = "and",
  Aw = ["typed", "matrix", "equalScalar", "zeros", "not", "concat"],
  Ew = z(xl, Aw, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      zeros: t,
      not: a,
      concat: o
    } = e, f = ut({
      typed: r,
      equalScalar: n
    }), c = Ni({
      typed: r,
      equalScalar: n
    }), u = Nr({
      typed: r,
      equalScalar: n
    }), s = st({
      typed: r
    }), l = or({
      typed: r,
      matrix: i,
      concat: o
    });
    return r(xl, {
      "number, number": Ym,
      "Complex, Complex": function(v, d) {
        return (v.re !== 0 || v.im !== 0) && (d.re !== 0 || d.im !== 0)
      },
      "BigNumber, BigNumber": function(v, d) {
        return !v.isZero() && !d.isZero() && !v.isNaN() && !d.isNaN()
      },
      "Unit, Unit": r.referToSelf(m => (v, d) => m(v.value || 0, d.value || 0)),
      "SparseMatrix, any": r.referToSelf(m => (v, d) => a(d) ? t(v.size(), v.storage()) : u(v, d, m, !1)),
      "DenseMatrix, any": r.referToSelf(m => (v, d) => a(d) ? t(v.size(), v.storage()) : s(v, d, m, !1)),
      "any, SparseMatrix": r.referToSelf(m => (v, d) => a(v) ? t(v.size(), v.storage()) : u(d, v, m, !0)),
      "any, DenseMatrix": r.referToSelf(m => (v, d) => a(v) ? t(v.size(), v.storage()) : s(d, v, m, !0)),
      "Array, any": r.referToSelf(m => (v, d) => m(i(v), d).valueOf()),
      "any, Array": r.referToSelf(m => (v, d) => m(v, i(d)).valueOf())
    }, l({
      SS: c,
      DS: f
    }))
  }),
  ri = "compare",
  Sw = ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction", "DenseMatrix", "concat"],
  Cw = z(ri, Sw, e => {
    var {
      typed: r,
      config: i,
      equalScalar: n,
      matrix: t,
      BigNumber: a,
      Fraction: o,
      DenseMatrix: f,
      concat: c
    } = e, u = _r({
      typed: r
    }), s = wi({
      typed: r,
      equalScalar: n
    }), l = hr({
      typed: r,
      DenseMatrix: f
    }), m = or({
      typed: r,
      matrix: t,
      concat: c
    }), v = qn({
      typed: r
    });
    return r(ri, Mw({
      typed: r,
      config: i
    }), {
      "boolean, boolean": function(p, b) {
        return p === b ? 0 : p > b ? 1 : -1
      },
      "BigNumber, BigNumber": function(p, b) {
        return dt(p, b, i.epsilon) ? new a(0) : new a(p.cmp(b))
      },
      "Fraction, Fraction": function(p, b) {
        return new o(p.compare(b))
      },
      "Complex, Complex": function() {
        throw new TypeError("No ordering relation is defined for complex numbers")
      }
    }, v, m({
      SS: s,
      DS: u,
      Ss: l
    }))
  }),
  Mw = z(ri, ["typed", "config"], e => {
    var {
      typed: r,
      config: i
    } = e;
    return r(ri, {
      "number, number": function(t, a) {
        return kr(t, a, i.epsilon) ? 0 : t > a ? 1 : -1
      }
    })
  }),
  Fw = function e(r, i) {
    var n = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
      t = /(^[ ]*|[ ]*$)/g,
      a = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
      o = /^0x[0-9a-f]+$/i,
      f = /^0/,
      c = function(h) {
        return e.insensitive && ("" + h).toLowerCase() || "" + h
      },
      u = c(r).replace(t, "") || "",
      s = c(i).replace(t, "") || "",
      l = u.replace(n, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
      m = s.replace(n, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
      v = parseInt(u.match(o), 16) || l.length !== 1 && u.match(a) && Date.parse(u),
      d = parseInt(s.match(o), 16) || v && s.match(a) && Date.parse(s) || null,
      p, b;
    if (d) {
      if (v < d) return -1;
      if (v > d) return 1
    }
    for (var g = 0, N = Math.max(l.length, m.length); g < N; g++) {
      if (p = !(l[g] || "").match(f) && parseFloat(l[g]) || l[g] || 0, b = !(m[g] || "").match(f) && parseFloat(m[g]) || m[g] || 0, isNaN(p) !== isNaN(b)) return isNaN(p) ? 1 : -1;
      if (typeof p != typeof b && (p += "", b += ""), p < b) return -1;
      if (p > b) return 1
    }
    return 0
  };
const vn = ua(Fw);
var wl = "compareNatural",
  Bw = ["typed", "compare"],
  Tw = z(wl, Bw, e => {
    var {
      typed: r,
      compare: i
    } = e, n = i.signatures["boolean,boolean"];
    return r(wl, {
      "any, any": t
    });

    function t(c, u) {
      var s = ar(c),
        l = ar(u),
        m;
      if ((s === "number" || s === "BigNumber" || s === "Fraction") && (l === "number" || l === "BigNumber" || l === "Fraction")) return m = i(c, u), m.toString() !== "0" ? m > 0 ? 1 : -1 : vn(s, l);
      var v = ["Array", "DenseMatrix", "SparseMatrix"];
      if (v.includes(s) || v.includes(l)) return m = a(t, c, u), m !== 0 ? m : vn(s, l);
      if (s !== l) return vn(s, l);
      if (s === "Complex") return Ow(c, u);
      if (s === "Unit") return c.equalBase(u) ? t(c.value, u.value) : o(t, c.formatUnits(), u.formatUnits());
      if (s === "boolean") return n(c, u);
      if (s === "string") return vn(c, u);
      if (s === "Object") return f(t, c, u);
      if (s === "null" || s === "undefined") return 0;
      throw new TypeError('Unsupported type of value "' + s + '"')
    }

    function a(c, u, s) {
      return Zt(u) && Zt(s) ? o(c, u.toJSON().values, s.toJSON().values) : Zt(u) ? a(c, u.toArray(), s) : Zt(s) ? a(c, u, s.toArray()) : La(u) ? a(c, u.toJSON().data, s) : La(s) ? a(c, u, s.toJSON().data) : Array.isArray(u) ? Array.isArray(s) ? o(c, u, s) : a(c, u, [s]) : a(c, [u], s)
    }

    function o(c, u, s) {
      for (var l = 0, m = Math.min(u.length, s.length); l < m; l++) {
        var v = c(u[l], s[l]);
        if (v !== 0) return v
      }
      return u.length > s.length ? 1 : u.length < s.length ? -1 : 0
    }

    function f(c, u, s) {
      var l = Object.keys(u),
        m = Object.keys(s);
      l.sort(vn), m.sort(vn);
      var v = o(c, l, m);
      if (v !== 0) return v;
      for (var d = 0; d < l.length; d++) {
        var p = c(u[l[d]], s[m[d]]);
        if (p !== 0) return p
      }
      return 0
    }
  });

function Ow(e, r) {
  return e.re > r.re ? 1 : e.re < r.re ? -1 : e.im > r.im ? 1 : e.im < r.im ? -1 : 0
}
var Nl = "compareText",
  $w = ["typed", "matrix", "concat"];
Zi.signature = "any, any";
var _w = z(Nl, $w, e => {
    var {
      typed: r,
      matrix: i,
      concat: n
    } = e, t = or({
      typed: r,
      matrix: i,
      concat: n
    });
    return r(Nl, Zi, t({
      elop: Zi,
      Ds: !0
    }))
  }),
  ti = "equal",
  Iw = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"],
  qw = z(ti, Iw, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      DenseMatrix: t,
      concat: a
    } = e, o = _r({
      typed: r
    }), f = ht({
      typed: r,
      DenseMatrix: t
    }), c = hr({
      typed: r,
      DenseMatrix: t
    }), u = or({
      typed: r,
      matrix: i,
      concat: a
    });
    return r(ti, Rw({
      typed: r,
      equalScalar: n
    }), u({
      elop: n,
      SS: f,
      DS: o,
      Ss: c
    }))
  }),
  Rw = z(ti, ["typed", "equalScalar"], e => {
    var {
      typed: r,
      equalScalar: i
    } = e;
    return r(ti, {
      "any, any": function(t, a) {
        return t === null ? a === null : a === null ? t === null : t === void 0 ? a === void 0 : a === void 0 ? t === void 0 : i(t, a)
      }
    })
  }),
  Dl = "equalText",
  zw = ["typed", "compareText", "isZero"],
  Pw = z(Dl, zw, e => {
    var {
      typed: r,
      compareText: i,
      isZero: n
    } = e;
    return r(Dl, {
      "any, any": function(a, o) {
        return n(i(a, o))
      }
    })
  }),
  ni = "smaller",
  Uw = ["typed", "config", "matrix", "DenseMatrix", "concat"],
  Lw = z(ni, Uw, e => {
    var {
      typed: r,
      config: i,
      matrix: n,
      DenseMatrix: t,
      concat: a
    } = e, o = _r({
      typed: r
    }), f = ht({
      typed: r,
      DenseMatrix: t
    }), c = hr({
      typed: r,
      DenseMatrix: t
    }), u = or({
      typed: r,
      matrix: n,
      concat: a
    }), s = qn({
      typed: r
    });
    return r(ni, kw({
      typed: r,
      config: i
    }), {
      "boolean, boolean": (l, m) => l < m,
      "BigNumber, BigNumber": function(m, v) {
        return m.lt(v) && !dt(m, v, i.epsilon)
      },
      "Fraction, Fraction": (l, m) => l.compare(m) === -1,
      "Complex, Complex": function(m, v) {
        throw new TypeError("No ordering relation is defined for complex numbers")
      }
    }, s, u({
      SS: f,
      DS: o,
      Ss: c
    }))
  }),
  kw = z(ni, ["typed", "config"], e => {
    var {
      typed: r,
      config: i
    } = e;
    return r(ni, {
      "number, number": function(t, a) {
        return t < a && !kr(t, a, i.epsilon)
      }
    })
  }),
  ai = "smallerEq",
  Hw = ["typed", "config", "matrix", "DenseMatrix", "concat"],
  Gw = z(ai, Hw, e => {
    var {
      typed: r,
      config: i,
      matrix: n,
      DenseMatrix: t,
      concat: a
    } = e, o = _r({
      typed: r
    }), f = ht({
      typed: r,
      DenseMatrix: t
    }), c = hr({
      typed: r,
      DenseMatrix: t
    }), u = or({
      typed: r,
      matrix: n,
      concat: a
    }), s = qn({
      typed: r
    });
    return r(ai, Vw({
      typed: r,
      config: i
    }), {
      "boolean, boolean": (l, m) => l <= m,
      "BigNumber, BigNumber": function(m, v) {
        return m.lte(v) || dt(m, v, i.epsilon)
      },
      "Fraction, Fraction": (l, m) => l.compare(m) !== 1,
      "Complex, Complex": function() {
        throw new TypeError("No ordering relation is defined for complex numbers")
      }
    }, s, u({
      SS: f,
      DS: o,
      Ss: c
    }))
  }),
  Vw = z(ai, ["typed", "config"], e => {
    var {
      typed: r,
      config: i
    } = e;
    return r(ai, {
      "number, number": function(t, a) {
        return t <= a || kr(t, a, i.epsilon)
      }
    })
  }),
  ii = "larger",
  Zw = ["typed", "config", "matrix", "DenseMatrix", "concat"],
  Yw = z(ii, Zw, e => {
    var {
      typed: r,
      config: i,
      matrix: n,
      DenseMatrix: t,
      concat: a
    } = e, o = _r({
      typed: r
    }), f = ht({
      typed: r,
      DenseMatrix: t
    }), c = hr({
      typed: r,
      DenseMatrix: t
    }), u = or({
      typed: r,
      matrix: n,
      concat: a
    }), s = qn({
      typed: r
    });
    return r(ii, Ww({
      typed: r,
      config: i
    }), {
      "boolean, boolean": (l, m) => l > m,
      "BigNumber, BigNumber": function(m, v) {
        return m.gt(v) && !dt(m, v, i.epsilon)
      },
      "Fraction, Fraction": (l, m) => l.compare(m) === 1,
      "Complex, Complex": function() {
        throw new TypeError("No ordering relation is defined for complex numbers")
      }
    }, s, u({
      SS: f,
      DS: o,
      Ss: c
    }))
  }),
  Ww = z(ii, ["typed", "config"], e => {
    var {
      typed: r,
      config: i
    } = e;
    return r(ii, {
      "number, number": function(t, a) {
        return t > a && !kr(t, a, i.epsilon)
      }
    })
  }),
  oi = "largerEq",
  Qw = ["typed", "config", "matrix", "DenseMatrix", "concat"],
  Xw = z(oi, Qw, e => {
    var {
      typed: r,
      config: i,
      matrix: n,
      DenseMatrix: t,
      concat: a
    } = e, o = _r({
      typed: r
    }), f = ht({
      typed: r,
      DenseMatrix: t
    }), c = hr({
      typed: r,
      DenseMatrix: t
    }), u = or({
      typed: r,
      matrix: n,
      concat: a
    }), s = qn({
      typed: r
    });
    return r(oi, Jw({
      typed: r,
      config: i
    }), {
      "boolean, boolean": (l, m) => l >= m,
      "BigNumber, BigNumber": function(m, v) {
        return m.gte(v) || dt(m, v, i.epsilon)
      },
      "Fraction, Fraction": (l, m) => l.compare(m) !== -1,
      "Complex, Complex": function() {
        throw new TypeError("No ordering relation is defined for complex numbers")
      }
    }, s, u({
      SS: f,
      DS: o,
      Ss: c
    }))
  }),
  Jw = z(oi, ["typed", "config"], e => {
    var {
      typed: r,
      config: i
    } = e;
    return r(oi, {
      "number, number": function(t, a) {
        return t >= a || kr(t, a, i.epsilon)
      }
    })
  }),
  Al = "deepEqual",
  Kw = ["typed", "equal"],
  jw = z(Al, Kw, e => {
    var {
      typed: r,
      equal: i
    } = e;
    return r(Al, {
      "any, any": function(a, o) {
        return n(a.valueOf(), o.valueOf())
      }
    });

    function n(t, a) {
      if (Array.isArray(t))
        if (Array.isArray(a)) {
          var o = t.length;
          if (o !== a.length) return !1;
          for (var f = 0; f < o; f++)
            if (!n(t[f], a[f])) return !1;
          return !0
        } else return !1;
      else return Array.isArray(a) ? !1 : i(t, a)
    }
  }),
  si = "unequal",
  eN = ["typed", "config", "equalScalar", "matrix", "DenseMatrix", "concat"],
  rN = z(si, eN, e => {
    var {
      typed: r,
      config: i,
      equalScalar: n,
      matrix: t,
      DenseMatrix: a,
      concat: o
    } = e, f = _r({
      typed: r
    }), c = ht({
      typed: r,
      DenseMatrix: a
    }), u = hr({
      typed: r,
      DenseMatrix: a
    }), s = or({
      typed: r,
      matrix: t,
      concat: o
    });
    return r(si, tN({
      typed: r,
      equalScalar: n
    }), s({
      elop: l,
      SS: c,
      DS: f,
      Ss: u
    }));

    function l(m, v) {
      return !n(m, v)
    }
  }),
  tN = z(si, ["typed", "equalScalar"], e => {
    var {
      typed: r,
      equalScalar: i
    } = e;
    return r(si, {
      "any, any": function(t, a) {
        return t === null ? a !== null : a === null ? t !== null : t === void 0 ? a !== void 0 : a === void 0 ? t !== void 0 : !i(t, a)
      }
    })
  }),
  El = "partitionSelect",
  nN = ["typed", "isNumeric", "isNaN", "compare"],
  aN = z(El, nN, e => {
    var {
      typed: r,
      isNumeric: i,
      isNaN: n,
      compare: t
    } = e, a = t, o = (u, s) => -t(u, s);
    return r(El, {
      "Array | Matrix, number": function(s, l) {
        return f(s, l, a)
      },
      "Array | Matrix, number, string": function(s, l, m) {
        if (m === "asc") return f(s, l, a);
        if (m === "desc") return f(s, l, o);
        throw new Error('Compare string must be "asc" or "desc"')
      },
      "Array | Matrix, number, function": f
    });

    function f(u, s, l) {
      if (!Se(s) || s < 0) throw new Error("k must be a non-negative integer");
      if (Fe(u)) {
        var m = u.size();
        if (m.length > 1) throw new Error("Only one dimensional matrices supported");
        return c(u.valueOf(), s, l)
      }
      if (Array.isArray(u)) return c(u, s, l)
    }

    function c(u, s, l) {
      if (s >= u.length) throw new Error("k out of bounds");
      for (var m = 0; m < u.length; m++)
        if (i(u[m]) && n(u[m])) return u[m];
      for (var v = 0, d = u.length - 1; v < d;) {
        for (var p = v, b = d, g = u[Math.floor(Math.random() * (d - v + 1)) + v]; p < b;)
          if (l(u[p], g) >= 0) {
            var N = u[b];
            u[b] = u[p], u[p] = N, --b
          } else ++p;
        l(u[p], g) > 0 && --p, s <= p ? d = p : v = p + 1
      }
      return u[s]
    }
  }),
  Sl = "sort",
  iN = ["typed", "matrix", "compare", "compareNatural"],
  oN = z(Sl, iN, e => {
    var {
      typed: r,
      matrix: i,
      compare: n,
      compareNatural: t
    } = e, a = n, o = (s, l) => -n(s, l);
    return r(Sl, {
      Array: function(l) {
        return c(l), l.sort(a)
      },
      Matrix: function(l) {
        return u(l), i(l.toArray().sort(a), l.storage())
      },
      "Array, function": function(l, m) {
        return c(l), l.sort(m)
      },
      "Matrix, function": function(l, m) {
        return u(l), i(l.toArray().sort(m), l.storage())
      },
      "Array, string": function(l, m) {
        return c(l), l.sort(f(m))
      },
      "Matrix, string": function(l, m) {
        return u(l), i(l.toArray().sort(f(m)), l.storage())
      }
    });

    function f(s) {
      if (s === "asc") return a;
      if (s === "desc") return o;
      if (s === "natural") return t;
      throw new Error('String "asc", "desc", or "natural" expected')
    }

    function c(s) {
      if (qe(s).length !== 1) throw new Error("One dimensional array expected")
    }

    function u(s) {
      if (s.size().length !== 1) throw new Error("One dimensional matrix expected")
    }
  }),
  Cl = "max",
  sN = ["typed", "config", "numeric", "larger"],
  Fv = z(Cl, sN, e => {
    var {
      typed: r,
      config: i,
      numeric: n,
      larger: t
    } = e;
    return r(Cl, {
      "Array | Matrix": o,
      "Array | Matrix, number | BigNumber": function(c, u) {
        return bi(c, u.valueOf(), a)
      },
      "...": function(c) {
        if ($n(c)) throw new TypeError("Scalar values expected in function max");
        return o(c)
      }
    });

    function a(f, c) {
      try {
        return t(f, c) ? f : c
      } catch (u) {
        throw Or(u, "max", c)
      }
    }

    function o(f) {
      var c;
      if (Ct(f, function(u) {
          try {
            isNaN(u) && typeof u == "number" ? c = NaN : (c === void 0 || t(u, c)) && (c = u)
          } catch (s) {
            throw Or(s, "max", u)
          }
        }), c === void 0) throw new Error("Cannot calculate max of an empty array");
      return typeof c == "string" && (c = n(c, i.number)), c
    }
  }),
  Ml = "min",
  uN = ["typed", "config", "numeric", "smaller"],
  Bv = z(Ml, uN, e => {
    var {
      typed: r,
      config: i,
      numeric: n,
      smaller: t
    } = e;
    return r(Ml, {
      "Array | Matrix": o,
      "Array | Matrix, number | BigNumber": function(c, u) {
        return bi(c, u.valueOf(), a)
      },
      "...": function(c) {
        if ($n(c)) throw new TypeError("Scalar values expected in function min");
        return o(c)
      }
    });

    function a(f, c) {
      try {
        return t(f, c) ? f : c
      } catch (u) {
        throw Or(u, "min", c)
      }
    }

    function o(f) {
      var c;
      if (Ct(f, function(u) {
          try {
            isNaN(u) && typeof u == "number" ? c = NaN : (c === void 0 || t(u, c)) && (c = u)
          } catch (s) {
            throw Or(s, "min", u)
          }
        }), c === void 0) throw new Error("Cannot calculate min of an empty array");
      return typeof c == "string" && (c = n(c, i.number)), c
    }
  }),
  lN = "ImmutableDenseMatrix",
  cN = ["smaller", "DenseMatrix"],
  fN = z(lN, cN, e => {
    var {
      smaller: r,
      DenseMatrix: i
    } = e;

    function n(t, a) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      if (a && !Ar(a)) throw new Error("Invalid datatype: " + a);
      if (Fe(t) || Je(t)) {
        var o = new i(t, a);
        this._data = o._data, this._size = o._size, this._datatype = o._datatype, this._min = null, this._max = null
      } else if (t && Je(t.data) && Je(t.size)) this._data = t.data, this._size = t.size, this._datatype = t.datatype, this._min = typeof t.min < "u" ? t.min : null, this._max = typeof t.max < "u" ? t.max : null;
      else {
        if (t) throw new TypeError("Unsupported type of data (" + ar(t) + ")");
        this._data = [], this._size = [0], this._datatype = a, this._min = null, this._max = null
      }
    }
    return n.prototype = new i, n.prototype.type = "ImmutableDenseMatrix", n.prototype.isImmutableDenseMatrix = !0, n.prototype.subset = function(t) {
      switch (arguments.length) {
        case 1: {
          var a = i.prototype.subset.call(this, t);
          return Fe(a) ? new n({
            data: a._data,
            size: a._size,
            datatype: a._datatype
          }) : a
        }
        case 2:
        case 3:
          throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
        default:
          throw new SyntaxError("Wrong number of arguments")
      }
    }, n.prototype.set = function() {
      throw new Error("Cannot invoke set on an Immutable Matrix instance")
    }, n.prototype.resize = function() {
      throw new Error("Cannot invoke resize on an Immutable Matrix instance")
    }, n.prototype.reshape = function() {
      throw new Error("Cannot invoke reshape on an Immutable Matrix instance")
    }, n.prototype.clone = function() {
      return new n({
        data: $e(this._data),
        size: $e(this._size),
        datatype: this._datatype
      })
    }, n.prototype.toJSON = function() {
      return {
        mathjs: "ImmutableDenseMatrix",
        data: this._data,
        size: this._size,
        datatype: this._datatype
      }
    }, n.fromJSON = function(t) {
      return new n(t)
    }, n.prototype.swapRows = function() {
      throw new Error("Cannot invoke swapRows on an Immutable Matrix instance")
    }, n.prototype.min = function() {
      if (this._min === null) {
        var t = null;
        this.forEach(function(a) {
          (t === null || r(a, t)) && (t = a)
        }), this._min = t !== null ? t : void 0
      }
      return this._min
    }, n.prototype.max = function() {
      if (this._max === null) {
        var t = null;
        this.forEach(function(a) {
          (t === null || r(t, a)) && (t = a)
        }), this._max = t !== null ? t : void 0
      }
      return this._max
    }, n
  }, {
    isClass: !0
  }),
  mN = "Index",
  vN = ["ImmutableDenseMatrix", "getMatrixDataType"],
  pN = z(mN, vN, e => {
    var {
      ImmutableDenseMatrix: r,
      getMatrixDataType: i
    } = e;

    function n(a) {
      if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
      this._dimensions = [], this._sourceSize = [], this._isScalar = !0;
      for (var o = 0, f = arguments.length; o < f; o++) {
        var c = arguments[o],
          u = Je(c),
          s = Fe(c),
          l = null;
        if (vo(c)) this._dimensions.push(c), this._isScalar = !1;
        else if (u || s) {
          var m = void 0;
          i(c) === "boolean" ? (u && (m = t(Fl(c).valueOf())), s && (m = t(Fl(c._data).valueOf())), l = c.valueOf().length) : m = t(c.valueOf()), this._dimensions.push(m);
          var v = m.size();
          (v.length !== 1 || v[0] !== 1 || l !== null) && (this._isScalar = !1)
        } else if (typeof c == "number") this._dimensions.push(t([c]));
        else if (typeof c == "string") this._dimensions.push(c);
        else throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
        this._sourceSize.push(l)
      }
    }
    n.prototype.type = "Index", n.prototype.isIndex = !0;

    function t(a) {
      for (var o = 0, f = a.length; o < f; o++)
        if (typeof a[o] != "number" || !Se(a[o])) throw new TypeError("Index parameters must be positive integer numbers");
      return new r(a)
    }
    return n.prototype.clone = function() {
      var a = new n;
      return a._dimensions = $e(this._dimensions), a._isScalar = this._isScalar, a._sourceSize = this._sourceSize, a
    }, n.create = function(a) {
      var o = new n;
      return n.apply(o, a), o
    }, n.prototype.size = function() {
      for (var a = [], o = 0, f = this._dimensions.length; o < f; o++) {
        var c = this._dimensions[o];
        a[o] = typeof c == "string" ? 1 : c.size()[0]
      }
      return a
    }, n.prototype.max = function() {
      for (var a = [], o = 0, f = this._dimensions.length; o < f; o++) {
        var c = this._dimensions[o];
        a[o] = typeof c == "string" ? c : c.max()
      }
      return a
    }, n.prototype.min = function() {
      for (var a = [], o = 0, f = this._dimensions.length; o < f; o++) {
        var c = this._dimensions[o];
        a[o] = typeof c == "string" ? c : c.min()
      }
      return a
    }, n.prototype.forEach = function(a) {
      for (var o = 0, f = this._dimensions.length; o < f; o++) a(this._dimensions[o], o, this)
    }, n.prototype.dimension = function(a) {
      return this._dimensions[a] || null
    }, n.prototype.isObjectProperty = function() {
      return this._dimensions.length === 1 && typeof this._dimensions[0] == "string"
    }, n.prototype.getObjectProperty = function() {
      return this.isObjectProperty() ? this._dimensions[0] : null
    }, n.prototype.isScalar = function() {
      return this._isScalar
    }, n.prototype.toArray = function() {
      for (var a = [], o = 0, f = this._dimensions.length; o < f; o++) {
        var c = this._dimensions[o];
        a.push(typeof c == "string" ? c : c.toArray())
      }
      return a
    }, n.prototype.valueOf = n.prototype.toArray, n.prototype.toString = function() {
      for (var a = [], o = 0, f = this._dimensions.length; o < f; o++) {
        var c = this._dimensions[o];
        typeof c == "string" ? a.push(JSON.stringify(c)) : a.push(c.toString())
      }
      return "[" + a.join(", ") + "]"
    }, n.prototype.toJSON = function() {
      return {
        mathjs: "Index",
        dimensions: this._dimensions
      }
    }, n.fromJSON = function(a) {
      return n.create(a.dimensions)
    }, n
  }, {
    isClass: !0
  });

function Fl(e) {
  var r = [];
  return e.forEach((i, n) => {
    i && r.push(n)
  }), r
}
var dN = "FibonacciHeap",
  hN = ["smaller", "larger"],
  gN = z(dN, hN, e => {
    var {
      smaller: r,
      larger: i
    } = e, n = 1 / Math.log((1 + Math.sqrt(5)) / 2);

    function t() {
      if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
      this._minimum = null, this._size = 0
    }
    t.prototype.type = "FibonacciHeap", t.prototype.isFibonacciHeap = !0, t.prototype.insert = function(s, l) {
      var m = {
        key: s,
        value: l,
        degree: 0
      };
      if (this._minimum) {
        var v = this._minimum;
        m.left = v, m.right = v.right, v.right = m, m.right.left = m, r(s, v.key) && (this._minimum = m)
      } else m.left = m, m.right = m, this._minimum = m;
      return this._size++, m
    }, t.prototype.size = function() {
      return this._size
    }, t.prototype.clear = function() {
      this._minimum = null, this._size = 0
    }, t.prototype.isEmpty = function() {
      return this._size === 0
    }, t.prototype.extractMinimum = function() {
      var s = this._minimum;
      if (s === null) return s;
      for (var l = this._minimum, m = s.degree, v = s.child; m > 0;) {
        var d = v.right;
        v.left.right = v.right, v.right.left = v.left, v.left = l, v.right = l.right, l.right = v, v.right.left = v, v.parent = null, v = d, m--
      }
      return s.left.right = s.right, s.right.left = s.left, s === s.right ? l = null : (l = s.right, l = u(l, this._size)), this._size--, this._minimum = l, s
    }, t.prototype.remove = function(s) {
      this._minimum = a(this._minimum, s, -1), this.extractMinimum()
    };

    function a(s, l, m) {
      l.key = m;
      var v = l.parent;
      return v && r(l.key, v.key) && (o(s, l, v), f(s, v)), r(l.key, s.key) && (s = l), s
    }

    function o(s, l, m) {
      l.left.right = l.right, l.right.left = l.left, m.degree--, m.child === l && (m.child = l.right), m.degree === 0 && (m.child = null), l.left = s, l.right = s.right, s.right = l, l.right.left = l, l.parent = null, l.mark = !1
    }

    function f(s, l) {
      var m = l.parent;
      m && (l.mark ? (o(s, l, m), f(m)) : l.mark = !0)
    }
    var c = function(l, m) {
      l.left.right = l.right, l.right.left = l.left, l.parent = m, m.child ? (l.left = m.child, l.right = m.child.right, m.child.right = l, l.right.left = l) : (m.child = l, l.right = l, l.left = l), m.degree++, l.mark = !1
    };

    function u(s, l) {
      var m = Math.floor(Math.log(l) * n) + 1,
        v = new Array(m),
        d = 0,
        p = s;
      if (p)
        for (d++, p = p.right; p !== s;) d++, p = p.right;
      for (var b; d > 0;) {
        for (var g = p.degree, N = p.right; b = v[g], !!b;) {
          if (i(p.key, b.key)) {
            var h = b;
            b = p, p = h
          }
          c(b, p), v[g] = null, g++
        }
        v[g] = p, p = N, d--
      }
      s = null;
      for (var x = 0; x < m; x++) b = v[x], b && (s ? (b.left.right = b.right, b.right.left = b.left, b.left = s, b.right = s.right, s.right = b, b.right.left = b, r(b.key, s.key) && (s = b)) : s = b);
      return s
    }
    return t
  }, {
    isClass: !0
  }),
  yN = "Spa",
  bN = ["addScalar", "equalScalar", "FibonacciHeap"],
  xN = z(yN, bN, e => {
    var {
      addScalar: r,
      equalScalar: i,
      FibonacciHeap: n
    } = e;

    function t() {
      if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
      this._values = [], this._heap = new n
    }
    return t.prototype.type = "Spa", t.prototype.isSpa = !0, t.prototype.set = function(a, o) {
      if (this._values[a]) this._values[a].value = o;
      else {
        var f = this._heap.insert(a, o);
        this._values[a] = f
      }
    }, t.prototype.get = function(a) {
      var o = this._values[a];
      return o ? o.value : 0
    }, t.prototype.accumulate = function(a, o) {
      var f = this._values[a];
      f ? f.value = r(f.value, o) : (f = this._heap.insert(a, o), this._values[a] = f)
    }, t.prototype.forEach = function(a, o, f) {
      var c = this._heap,
        u = this._values,
        s = [],
        l = c.extractMinimum();
      for (l && s.push(l); l && l.key <= o;) l.key >= a && (i(l.value, 0) || f(l.key, l.value, this)), l = c.extractMinimum(), l && s.push(l);
      for (var m = 0; m < s.length; m++) {
        var v = s[m];
        l = c.insert(v.key, v.value), u[l.key] = l
      }
    }, t.prototype.swap = function(a, o) {
      var f = this._values[a],
        c = this._values[o];
      if (!f && c) f = this._heap.insert(a, c.value), this._heap.remove(c), this._values[a] = f, this._values[o] = void 0;
      else if (f && !c) c = this._heap.insert(o, f.value), this._heap.remove(f), this._values[o] = c, this._values[a] = void 0;
      else if (f && c) {
        var u = f.value;
        f.value = c.value, c.value = u
      }
    }, t
  }, {
    isClass: !0
  }),
  wN = la(function(e) {
    return new e(1).exp()
  }, {
    hasher: Di
  }),
  NN = la(function(e) {
    return new e(1).plus(new e(5).sqrt()).div(2)
  }, {
    hasher: Di
  }),
  Mo = la(function(e) {
    return e.acos(-1)
  }, {
    hasher: Di
  }),
  DN = la(function(e) {
    return Mo(e).times(2)
  }, {
    hasher: Di
  });

function Di(e) {
  return e[0].precision
}

function Bl(e, r) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), i.push.apply(i, n)
  }
  return i
}

function Pi(e) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Bl(Object(i), !0).forEach(function(n) {
      dr(e, n, i[n])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Bl(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
    })
  }
  return e
}
var AN = "Unit",
  EN = ["?on", "config", "addScalar", "subtractScalar", "multiplyScalar", "divideScalar", "pow", "abs", "fix", "round", "equal", "isNumeric", "format", "number", "Complex", "BigNumber", "Fraction"],
  SN = z(AN, EN, e => {
    var {
      on: r,
      config: i,
      addScalar: n,
      subtractScalar: t,
      multiplyScalar: a,
      divideScalar: o,
      pow: f,
      abs: c,
      fix: u,
      round: s,
      equal: l,
      isNumeric: m,
      format: v,
      number: d,
      Complex: p,
      BigNumber: b,
      Fraction: g
    } = e, N = d;

    function h(P, H) {
      if (!(this instanceof h)) throw new Error("Constructor must be called with the new operator");
      if (!(P == null || m(P) || Dt(P))) throw new TypeError("First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined");
      if (this.fixPrefix = !1, this.skipAutomaticSimplification = !0, H === void 0) this.units = [], this.dimensions = U.map(k => 0);
      else if (typeof H == "string") {
        var te = h.parse(H);
        this.units = te.units, this.dimensions = te.dimensions
      } else if (Yr(H) && H.value === null) this.fixPrefix = H.fixPrefix, this.skipAutomaticSimplification = H.skipAutomaticSimplification, this.dimensions = H.dimensions.slice(0), this.units = H.units.map(k => pr({}, k));
      else throw new TypeError("Second parameter in Unit constructor must be a string or valueless Unit");
      this.value = this._normalize(P)
    }
    Object.defineProperty(h, "name", {
      value: "Unit"
    }), h.prototype.constructor = h, h.prototype.type = "Unit", h.prototype.isUnit = !0;
    var x, w, y;

    function A() {
      for (; y === " " || y === "	";) S()
    }

    function E(P) {
      return P >= "0" && P <= "9" || P === "."
    }

    function D(P) {
      return P >= "0" && P <= "9"
    }

    function S() {
      w++, y = x.charAt(w)
    }

    function C(P) {
      w = P, y = x.charAt(w)
    }

    function M() {
      var P = "",
        H = w;
      if (y === "+" ? S() : y === "-" && (P += y, S()), !E(y)) return C(H), null;
      if (y === ".") {
        if (P += y, S(), !D(y)) return C(H), null
      } else {
        for (; D(y);) P += y, S();
        y === "." && (P += y, S())
      }
      for (; D(y);) P += y, S();
      if (y === "E" || y === "e") {
        var te = "",
          k = w;
        if (te += y, S(), (y === "+" || y === "-") && (te += y, S()), !D(y)) return C(k), P;
        for (P = P + te; D(y);) P += y, S()
      }
      return P
    }

    function $() {
      for (var P = ""; D(y) || h.isValidAlpha(y);) P += y, S();
      var H = P.charAt(0);
      return h.isValidAlpha(H) ? P : null
    }

    function I(P) {
      return y === P ? (S(), P) : null
    }
    h.parse = function(P, H) {
      if (H = H || {}, x = P, w = -1, y = "", typeof x != "string") throw new TypeError("Invalid argument in Unit.parse, string expected");
      var te = new h;
      te.units = [];
      var k = 1,
        W = !1;
      S(), A();
      var K = M(),
        ve = null;
      if (K) {
        if (i.number === "BigNumber") ve = new b(K);
        else if (i.number === "Fraction") try {
          ve = new g(K)
        } catch {
          ve = parseFloat(K)
        } else ve = parseFloat(K);
        A(), I("*") ? (k = 1, W = !0) : I("/") && (k = -1, W = !0)
      }
      for (var me = [], R = 1;;) {
        for (A(); y === "(";) me.push(k), R *= k, k = 1, S(), A();
        var L = void 0;
        if (y) {
          var j = y;
          if (L = $(), L === null) throw new SyntaxError('Unexpected "' + j + '" in "' + x + '" at index ' + w.toString())
        } else break;
        var ae = _(L);
        if (ae === null) throw new SyntaxError('Unit "' + L + '" not found.');
        var fe = k * R;
        if (A(), I("^")) {
          A();
          var ce = M();
          if (ce === null) throw new SyntaxError('In "' + P + '", "^" must be followed by a floating-point number');
          fe *= ce
        }
        te.units.push({
          unit: ae.unit,
          prefix: ae.prefix,
          power: fe
        });
        for (var ye = 0; ye < U.length; ye++) te.dimensions[ye] += (ae.unit.dimensions[ye] || 0) * fe;
        for (A(); y === ")";) {
          if (me.length === 0) throw new SyntaxError('Unmatched ")" in "' + x + '" at index ' + w.toString());
          R /= me.pop(), S(), A()
        }
        if (W = !1, I("*") ? (k = 1, W = !0) : I("/") ? (k = -1, W = !0) : k = 1, ae.unit.base) {
          var he = ae.unit.base.key;
          Q.auto[he] = {
            unit: ae.unit,
            prefix: ae.prefix
          }
        }
      }
      if (A(), y) throw new SyntaxError('Could not parse: "' + P + '"');
      if (W) throw new SyntaxError('Trailing characters: "' + P + '"');
      if (me.length !== 0) throw new SyntaxError('Unmatched "(" in "' + x + '"');
      if (te.units.length === 0 && !H.allowNoUnits) throw new SyntaxError('"' + P + '" contains no units');
      return te.value = ve !== void 0 ? te._normalize(ve) : null, te
    }, h.prototype.clone = function() {
      var P = new h;
      P.fixPrefix = this.fixPrefix, P.skipAutomaticSimplification = this.skipAutomaticSimplification, P.value = $e(this.value), P.dimensions = this.dimensions.slice(0), P.units = [];
      for (var H = 0; H < this.units.length; H++) {
        P.units[H] = {};
        for (var te in this.units[H]) Ee(this.units[H], te) && (P.units[H][te] = this.units[H][te])
      }
      return P
    }, h.prototype.valueType = function() {
      return ar(this.value)
    }, h.prototype._isDerived = function() {
      return this.units.length === 0 ? !1 : this.units.length > 1 || Math.abs(this.units[0].power - 1) > 1e-15
    }, h.prototype._normalize = function(P) {
      if (P == null || this.units.length === 0) return P;
      for (var H = P, te = h._getNumberConverter(ar(P)), k = 0; k < this.units.length; k++) {
        var W = te(this.units[k].unit.value),
          K = te(this.units[k].prefix.value),
          ve = te(this.units[k].power);
        H = a(H, f(a(W, K), ve))
      }
      return H
    }, h.prototype._denormalize = function(P, H) {
      if (P == null || this.units.length === 0) return P;
      for (var te = P, k = h._getNumberConverter(ar(P)), W = 0; W < this.units.length; W++) {
        var K = k(this.units[W].unit.value),
          ve = k(this.units[W].prefix.value),
          me = k(this.units[W].power);
        te = o(te, f(a(K, ve), me))
      }
      return te
    };
    var _ = la(P => {
      if (Ee(q, P)) {
        var H = q[P],
          te = H.prefixes[""];
        return {
          unit: H,
          prefix: te
        }
      }
      for (var k in q)
        if (Ee(q, k) && uh(P, k)) {
          var W = q[k],
            K = P.length - k.length,
            ve = P.substring(0, K),
            me = Ee(W.prefixes, ve) ? W.prefixes[ve] : void 0;
          if (me !== void 0) return {
            unit: W,
            prefix: me
          }
        } return null
    }, {
      hasher: P => P[0],
      limit: 100
    });
    h.isValuelessUnit = function(P) {
      return _(P) !== null
    }, h.prototype.hasBase = function(P) {
      if (typeof P == "string" && (P = O[P]), !P) return !1;
      for (var H = 0; H < U.length; H++)
        if (Math.abs((this.dimensions[H] || 0) - (P.dimensions[H] || 0)) > 1e-12) return !1;
      return !0
    }, h.prototype.equalBase = function(P) {
      for (var H = 0; H < U.length; H++)
        if (Math.abs((this.dimensions[H] || 0) - (P.dimensions[H] || 0)) > 1e-12) return !1;
      return !0
    }, h.prototype.equals = function(P) {
      return this.equalBase(P) && l(this.value, P.value)
    }, h.prototype.multiply = function(P) {
      for (var H = this.clone(), te = Yr(P) ? P : new h(P), k = 0; k < U.length; k++) H.dimensions[k] = (this.dimensions[k] || 0) + (te.dimensions[k] || 0);
      for (var W = 0; W < te.units.length; W++) {
        var K = Pi({}, te.units[W]);
        H.units.push(K)
      }
      if (this.value !== null || te.value !== null) {
        var ve = this.value === null ? this._normalize(1) : this.value,
          me = te.value === null ? te._normalize(1) : te.value;
        H.value = a(ve, me)
      } else H.value = null;
      return Yr(P) && (H.skipAutomaticSimplification = !1), T(H)
    }, h.prototype.divideInto = function(P) {
      return new h(P).divide(this)
    }, h.prototype.divide = function(P) {
      for (var H = this.clone(), te = Yr(P) ? P : new h(P), k = 0; k < U.length; k++) H.dimensions[k] = (this.dimensions[k] || 0) - (te.dimensions[k] || 0);
      for (var W = 0; W < te.units.length; W++) {
        var K = Pi(Pi({}, te.units[W]), {}, {
          power: -te.units[W].power
        });
        H.units.push(K)
      }
      if (this.value !== null || te.value !== null) {
        var ve = this.value === null ? this._normalize(1) : this.value,
          me = te.value === null ? te._normalize(1) : te.value;
        H.value = o(ve, me)
      } else H.value = null;
      return Yr(P) && (H.skipAutomaticSimplification = !1), T(H)
    }, h.prototype.pow = function(P) {
      for (var H = this.clone(), te = 0; te < U.length; te++) H.dimensions[te] = (this.dimensions[te] || 0) * P;
      for (var k = 0; k < H.units.length; k++) H.units[k].power *= P;
      return H.value !== null ? H.value = f(H.value, P) : H.value = null, H.skipAutomaticSimplification = !1, T(H)
    };

    function T(P) {
      return P.equalBase(O.NONE) && P.value !== null && !i.predictable ? P.value : P
    }
    h.prototype.abs = function() {
      var P = this.clone();
      if (P.value !== null)
        if (P._isDerived() || P.units[0].unit.offset === 0) P.value = c(P.value);
        else {
          var H = P._numberConverter(),
            te = H(P.units[0].unit.value),
            k = H(P.units[0].unit.offset),
            W = a(te, k);
          P.value = t(c(n(P.value, W)), W)
        } for (var K in P.units)(P.units[K].unit.name === "VA" || P.units[K].unit.name === "VAR") && (P.units[K].unit = q.W);
      return P
    }, h.prototype.to = function(P) {
      var H = this.value === null ? this._normalize(1) : this.value,
        te;
      if (typeof P == "string") te = h.parse(P);
      else if (Yr(P)) te = P.clone();
      else throw new Error("String or Unit expected as parameter");
      if (!this.equalBase(te)) throw new Error("Units do not match ('".concat(te.toString(), "' != '").concat(this.toString(), "')"));
      if (te.value !== null) throw new Error("Cannot convert to a unit with a value");
      if (this.value === null || this._isDerived() || this.units[0].unit.offset === te.units[0].unit.offset) te.value = $e(H);
      else {
        var k = h._getNumberConverter(ar(H)),
          W = this.units[0].unit.value,
          K = this.units[0].unit.offset,
          ve = a(W, K),
          me = te.units[0].unit.value,
          R = te.units[0].unit.offset,
          L = a(me, R);
        te.value = n(H, k(t(ve, L)))
      }
      return te.fixPrefix = !0, te.skipAutomaticSimplification = !0, te
    }, h.prototype.toNumber = function(P) {
      return N(this.toNumeric(P))
    }, h.prototype.toNumeric = function(P) {
      var H;
      return P ? H = this.to(P) : H = this.clone(), H._isDerived() || H.units.length === 0 ? H._denormalize(H.value) : H._denormalize(H.value, H.units[0].prefix.value)
    }, h.prototype.toString = function() {
      return this.format()
    }, h.prototype.toJSON = function() {
      return {
        mathjs: "Unit",
        value: this._denormalize(this.value),
        unit: this.formatUnits(),
        fixPrefix: this.fixPrefix
      }
    }, h.fromJSON = function(P) {
      var H = new h(P.value, P.unit);
      return H.fixPrefix = P.fixPrefix || !1, H
    }, h.prototype.valueOf = h.prototype.toString, h.prototype.simplify = function() {
      var P = this.clone(),
        H = [],
        te;
      for (var k in ee)
        if (Ee(ee, k) && P.hasBase(O[k])) {
          te = k;
          break
        } if (te === "NONE") P.units = [];
      else {
        var W;
        if (te && Ee(ee, te) && (W = ee[te]), W) P.units = [{
          unit: W.unit,
          prefix: W.prefix,
          power: 1
        }];
        else {
          for (var K = !1, ve = 0; ve < U.length; ve++) {
            var me = U[ve];
            Math.abs(P.dimensions[ve] || 0) > 1e-12 && (Ee(ee, me) ? H.push({
              unit: ee[me].unit,
              prefix: ee[me].prefix,
              power: P.dimensions[ve] || 0
            }) : K = !0)
          }
          H.length < P.units.length && !K && (P.units = H)
        }
      }
      return P
    }, h.prototype.toSI = function() {
      for (var P = this.clone(), H = [], te = 0; te < U.length; te++) {
        var k = U[te];
        if (Math.abs(P.dimensions[te] || 0) > 1e-12)
          if (Ee(Q.si, k)) H.push({
            unit: Q.si[k].unit,
            prefix: Q.si[k].prefix,
            power: P.dimensions[te] || 0
          });
          else throw new Error("Cannot express custom unit " + k + " in SI units")
      }
      return P.units = H, P.fixPrefix = !0, P.skipAutomaticSimplification = !0, P
    }, h.prototype.formatUnits = function() {
      for (var P = "", H = "", te = 0, k = 0, W = 0; W < this.units.length; W++) this.units[W].power > 0 ? (te++, P += " " + this.units[W].prefix.name + this.units[W].unit.name, Math.abs(this.units[W].power - 1) > 1e-15 && (P += "^" + this.units[W].power)) : this.units[W].power < 0 && k++;
      if (k > 0)
        for (var K = 0; K < this.units.length; K++) this.units[K].power < 0 && (te > 0 ? (H += " " + this.units[K].prefix.name + this.units[K].unit.name, Math.abs(this.units[K].power + 1) > 1e-15 && (H += "^" + -this.units[K].power)) : (H += " " + this.units[K].prefix.name + this.units[K].unit.name, H += "^" + this.units[K].power));
      P = P.substr(1), H = H.substr(1), te > 1 && k > 0 && (P = "(" + P + ")"), k > 1 && te > 0 && (H = "(" + H + ")");
      var ve = P;
      return te > 0 && k > 0 && (ve += " / "), ve += H, ve
    }, h.prototype.format = function(P) {
      var H = this.skipAutomaticSimplification || this.value === null ? this.clone() : this.simplify(),
        te = !1;
      typeof H.value < "u" && H.value !== null && Dt(H.value) && (te = Math.abs(H.value.re) < 1e-14);
      for (var k in H.units) Ee(H.units, k) && H.units[k].unit && (H.units[k].unit.name === "VA" && te ? H.units[k].unit = q.VAR : H.units[k].unit.name === "VAR" && !te && (H.units[k].unit = q.VA));
      H.units.length === 1 && !H.fixPrefix && Math.abs(H.units[0].power - Math.round(H.units[0].power)) < 1e-14 && (H.units[0].prefix = H._bestPrefix());
      var W = H._denormalize(H.value),
        K = H.value !== null ? v(W, P || {}) : "",
        ve = H.formatUnits();
      return H.value && Dt(H.value) && (K = "(" + K + ")"), ve.length > 0 && K.length > 0 && (K += " "), K += ve, K
    }, h.prototype._bestPrefix = function() {
      if (this.units.length !== 1) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
      if (Math.abs(this.units[0].power - Math.round(this.units[0].power)) >= 1e-14) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
      var P = this.value !== null ? c(this.value) : 0,
        H = c(this.units[0].unit.value),
        te = this.units[0].prefix;
      if (P === 0) return te;
      var k = this.units[0].power,
        W = Math.log(P / Math.pow(te.value * H, k)) / Math.LN10 - 1.2;
      if (W > -2.200001 && W < 1.800001) return te;
      W = Math.abs(W);
      var K = this.units[0].unit.prefixes;
      for (var ve in K)
        if (Ee(K, ve)) {
          var me = K[ve];
          if (me.scientific) {
            var R = Math.abs(Math.log(P / Math.pow(me.value * H, k)) / Math.LN10 - 1.2);
            (R < W || R === W && me.name.length < te.name.length) && (te = me, W = R)
          }
        } return te
    }, h.prototype.splitUnit = function(P) {
      for (var H = this.clone(), te = [], k = 0; k < P.length && (H = H.to(P[k]), k !== P.length - 1); k++) {
        var W = H.toNumeric(),
          K = s(W),
          ve = void 0,
          me = l(K, W);
        me ? ve = K : ve = u(H.toNumeric());
        var R = new h(ve, P[k].toString());
        te.push(R), H = t(H, R)
      }
      for (var L = 0, j = 0; j < te.length; j++) L = n(L, te[j].value);
      return l(L, this.value) && (H.value = 0), te.push(H), te
    };
    var B = {
      NONE: {
        "": {
          name: "",
          value: 1,
          scientific: !0
        }
      },
      SHORT: {
        "": {
          name: "",
          value: 1,
          scientific: !0
        },
        da: {
          name: "da",
          value: 10,
          scientific: !1
        },
        h: {
          name: "h",
          value: 100,
          scientific: !1
        },
        k: {
          name: "k",
          value: 1e3,
          scientific: !0
        },
        M: {
          name: "M",
          value: 1e6,
          scientific: !0
        },
        G: {
          name: "G",
          value: 1e9,
          scientific: !0
        },
        T: {
          name: "T",
          value: 1e12,
          scientific: !0
        },
        P: {
          name: "P",
          value: 1e15,
          scientific: !0
        },
        E: {
          name: "E",
          value: 1e18,
          scientific: !0
        },
        Z: {
          name: "Z",
          value: 1e21,
          scientific: !0
        },
        Y: {
          name: "Y",
          value: 1e24,
          scientific: !0
        },
        d: {
          name: "d",
          value: .1,
          scientific: !1
        },
        c: {
          name: "c",
          value: .01,
          scientific: !1
        },
        m: {
          name: "m",
          value: .001,
          scientific: !0
        },
        u: {
          name: "u",
          value: 1e-6,
          scientific: !0
        },
        n: {
          name: "n",
          value: 1e-9,
          scientific: !0
        },
        p: {
          name: "p",
          value: 1e-12,
          scientific: !0
        },
        f: {
          name: "f",
          value: 1e-15,
          scientific: !0
        },
        a: {
          name: "a",
          value: 1e-18,
          scientific: !0
        },
        z: {
          name: "z",
          value: 1e-21,
          scientific: !0
        },
        y: {
          name: "y",
          value: 1e-24,
          scientific: !0
        }
      },
      LONG: {
        "": {
          name: "",
          value: 1,
          scientific: !0
        },
        deca: {
          name: "deca",
          value: 10,
          scientific: !1
        },
        hecto: {
          name: "hecto",
          value: 100,
          scientific: !1
        },
        kilo: {
          name: "kilo",
          value: 1e3,
          scientific: !0
        },
        mega: {
          name: "mega",
          value: 1e6,
          scientific: !0
        },
        giga: {
          name: "giga",
          value: 1e9,
          scientific: !0
        },
        tera: {
          name: "tera",
          value: 1e12,
          scientific: !0
        },
        peta: {
          name: "peta",
          value: 1e15,
          scientific: !0
        },
        exa: {
          name: "exa",
          value: 1e18,
          scientific: !0
        },
        zetta: {
          name: "zetta",
          value: 1e21,
          scientific: !0
        },
        yotta: {
          name: "yotta",
          value: 1e24,
          scientific: !0
        },
        deci: {
          name: "deci",
          value: .1,
          scientific: !1
        },
        centi: {
          name: "centi",
          value: .01,
          scientific: !1
        },
        milli: {
          name: "milli",
          value: .001,
          scientific: !0
        },
        micro: {
          name: "micro",
          value: 1e-6,
          scientific: !0
        },
        nano: {
          name: "nano",
          value: 1e-9,
          scientific: !0
        },
        pico: {
          name: "pico",
          value: 1e-12,
          scientific: !0
        },
        femto: {
          name: "femto",
          value: 1e-15,
          scientific: !0
        },
        atto: {
          name: "atto",
          value: 1e-18,
          scientific: !0
        },
        zepto: {
          name: "zepto",
          value: 1e-21,
          scientific: !0
        },
        yocto: {
          name: "yocto",
          value: 1e-24,
          scientific: !0
        }
      },
      SQUARED: {
        "": {
          name: "",
          value: 1,
          scientific: !0
        },
        da: {
          name: "da",
          value: 100,
          scientific: !1
        },
        h: {
          name: "h",
          value: 1e4,
          scientific: !1
        },
        k: {
          name: "k",
          value: 1e6,
          scientific: !0
        },
        M: {
          name: "M",
          value: 1e12,
          scientific: !0
        },
        G: {
          name: "G",
          value: 1e18,
          scientific: !0
        },
        T: {
          name: "T",
          value: 1e24,
          scientific: !0
        },
        P: {
          name: "P",
          value: 1e30,
          scientific: !0
        },
        E: {
          name: "E",
          value: 1e36,
          scientific: !0
        },
        Z: {
          name: "Z",
          value: 1e42,
          scientific: !0
        },
        Y: {
          name: "Y",
          value: 1e48,
          scientific: !0
        },
        d: {
          name: "d",
          value: .01,
          scientific: !1
        },
        c: {
          name: "c",
          value: 1e-4,
          scientific: !1
        },
        m: {
          name: "m",
          value: 1e-6,
          scientific: !0
        },
        u: {
          name: "u",
          value: 1e-12,
          scientific: !0
        },
        n: {
          name: "n",
          value: 1e-18,
          scientific: !0
        },
        p: {
          name: "p",
          value: 1e-24,
          scientific: !0
        },
        f: {
          name: "f",
          value: 1e-30,
          scientific: !0
        },
        a: {
          name: "a",
          value: 1e-36,
          scientific: !0
        },
        z: {
          name: "z",
          value: 1e-42,
          scientific: !0
        },
        y: {
          name: "y",
          value: 1e-48,
          scientific: !0
        }
      },
      CUBIC: {
        "": {
          name: "",
          value: 1,
          scientific: !0
        },
        da: {
          name: "da",
          value: 1e3,
          scientific: !1
        },
        h: {
          name: "h",
          value: 1e6,
          scientific: !1
        },
        k: {
          name: "k",
          value: 1e9,
          scientific: !0
        },
        M: {
          name: "M",
          value: 1e18,
          scientific: !0
        },
        G: {
          name: "G",
          value: 1e27,
          scientific: !0
        },
        T: {
          name: "T",
          value: 1e36,
          scientific: !0
        },
        P: {
          name: "P",
          value: 1e45,
          scientific: !0
        },
        E: {
          name: "E",
          value: 1e54,
          scientific: !0
        },
        Z: {
          name: "Z",
          value: 1e63,
          scientific: !0
        },
        Y: {
          name: "Y",
          value: 1e72,
          scientific: !0
        },
        d: {
          name: "d",
          value: .001,
          scientific: !1
        },
        c: {
          name: "c",
          value: 1e-6,
          scientific: !1
        },
        m: {
          name: "m",
          value: 1e-9,
          scientific: !0
        },
        u: {
          name: "u",
          value: 1e-18,
          scientific: !0
        },
        n: {
          name: "n",
          value: 1e-27,
          scientific: !0
        },
        p: {
          name: "p",
          value: 1e-36,
          scientific: !0
        },
        f: {
          name: "f",
          value: 1e-45,
          scientific: !0
        },
        a: {
          name: "a",
          value: 1e-54,
          scientific: !0
        },
        z: {
          name: "z",
          value: 1e-63,
          scientific: !0
        },
        y: {
          name: "y",
          value: 1e-72,
          scientific: !0
        }
      },
      BINARY_SHORT_SI: {
        "": {
          name: "",
          value: 1,
          scientific: !0
        },
        k: {
          name: "k",
          value: 1e3,
          scientific: !0
        },
        M: {
          name: "M",
          value: 1e6,
          scientific: !0
        },
        G: {
          name: "G",
          value: 1e9,
          scientific: !0
        },
        T: {
          name: "T",
          value: 1e12,
          scientific: !0
        },
        P: {
          name: "P",
          value: 1e15,
          scientific: !0
        },
        E: {
          name: "E",
          value: 1e18,
          scientific: !0
        },
        Z: {
          name: "Z",
          value: 1e21,
          scientific: !0
        },
        Y: {
          name: "Y",
          value: 1e24,
          scientific: !0
        }
      },
      BINARY_SHORT_IEC: {
        "": {
          name: "",
          value: 1,
          scientific: !0
        },
        Ki: {
          name: "Ki",
          value: 1024,
          scientific: !0
        },
        Mi: {
          name: "Mi",
          value: Math.pow(1024, 2),
          scientific: !0
        },
        Gi: {
          name: "Gi",
          value: Math.pow(1024, 3),
          scientific: !0
        },
        Ti: {
          name: "Ti",
          value: Math.pow(1024, 4),
          scientific: !0
        },
        Pi: {
          name: "Pi",
          value: Math.pow(1024, 5),
          scientific: !0
        },
        Ei: {
          name: "Ei",
          value: Math.pow(1024, 6),
          scientific: !0
        },
        Zi: {
          name: "Zi",
          value: Math.pow(1024, 7),
          scientific: !0
        },
        Yi: {
          name: "Yi",
          value: Math.pow(1024, 8),
          scientific: !0
        }
      },
      BINARY_LONG_SI: {
        "": {
          name: "",
          value: 1,
          scientific: !0
        },
        kilo: {
          name: "kilo",
          value: 1e3,
          scientific: !0
        },
        mega: {
          name: "mega",
          value: 1e6,
          scientific: !0
        },
        giga: {
          name: "giga",
          value: 1e9,
          scientific: !0
        },
        tera: {
          name: "tera",
          value: 1e12,
          scientific: !0
        },
        peta: {
          name: "peta",
          value: 1e15,
          scientific: !0
        },
        exa: {
          name: "exa",
          value: 1e18,
          scientific: !0
        },
        zetta: {
          name: "zetta",
          value: 1e21,
          scientific: !0
        },
        yotta: {
          name: "yotta",
          value: 1e24,
          scientific: !0
        }
      },
      BINARY_LONG_IEC: {
        "": {
          name: "",
          value: 1,
          scientific: !0
        },
        kibi: {
          name: "kibi",
          value: 1024,
          scientific: !0
        },
        mebi: {
          name: "mebi",
          value: Math.pow(1024, 2),
          scientific: !0
        },
        gibi: {
          name: "gibi",
          value: Math.pow(1024, 3),
          scientific: !0
        },
        tebi: {
          name: "tebi",
          value: Math.pow(1024, 4),
          scientific: !0
        },
        pebi: {
          name: "pebi",
          value: Math.pow(1024, 5),
          scientific: !0
        },
        exi: {
          name: "exi",
          value: Math.pow(1024, 6),
          scientific: !0
        },
        zebi: {
          name: "zebi",
          value: Math.pow(1024, 7),
          scientific: !0
        },
        yobi: {
          name: "yobi",
          value: Math.pow(1024, 8),
          scientific: !0
        }
      },
      BTU: {
        "": {
          name: "",
          value: 1,
          scientific: !0
        },
        MM: {
          name: "MM",
          value: 1e6,
          scientific: !0
        }
      }
    };
    B.SHORTLONG = pr({}, B.SHORT, B.LONG), B.BINARY_SHORT = pr({}, B.BINARY_SHORT_SI, B.BINARY_SHORT_IEC), B.BINARY_LONG = pr({}, B.BINARY_LONG_SI, B.BINARY_LONG_IEC);
    var U = ["MASS", "LENGTH", "TIME", "CURRENT", "TEMPERATURE", "LUMINOUS_INTENSITY", "AMOUNT_OF_SUBSTANCE", "ANGLE", "BIT"],
      O = {
        NONE: {
          dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        MASS: {
          dimensions: [1, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        LENGTH: {
          dimensions: [0, 1, 0, 0, 0, 0, 0, 0, 0]
        },
        TIME: {
          dimensions: [0, 0, 1, 0, 0, 0, 0, 0, 0]
        },
        CURRENT: {
          dimensions: [0, 0, 0, 1, 0, 0, 0, 0, 0]
        },
        TEMPERATURE: {
          dimensions: [0, 0, 0, 0, 1, 0, 0, 0, 0]
        },
        LUMINOUS_INTENSITY: {
          dimensions: [0, 0, 0, 0, 0, 1, 0, 0, 0]
        },
        AMOUNT_OF_SUBSTANCE: {
          dimensions: [0, 0, 0, 0, 0, 0, 1, 0, 0]
        },
        FORCE: {
          dimensions: [1, 1, -2, 0, 0, 0, 0, 0, 0]
        },
        SURFACE: {
          dimensions: [0, 2, 0, 0, 0, 0, 0, 0, 0]
        },
        VOLUME: {
          dimensions: [0, 3, 0, 0, 0, 0, 0, 0, 0]
        },
        ENERGY: {
          dimensions: [1, 2, -2, 0, 0, 0, 0, 0, 0]
        },
        POWER: {
          dimensions: [1, 2, -3, 0, 0, 0, 0, 0, 0]
        },
        PRESSURE: {
          dimensions: [1, -1, -2, 0, 0, 0, 0, 0, 0]
        },
        ELECTRIC_CHARGE: {
          dimensions: [0, 0, 1, 1, 0, 0, 0, 0, 0]
        },
        ELECTRIC_CAPACITANCE: {
          dimensions: [-1, -2, 4, 2, 0, 0, 0, 0, 0]
        },
        ELECTRIC_POTENTIAL: {
          dimensions: [1, 2, -3, -1, 0, 0, 0, 0, 0]
        },
        ELECTRIC_RESISTANCE: {
          dimensions: [1, 2, -3, -2, 0, 0, 0, 0, 0]
        },
        ELECTRIC_INDUCTANCE: {
          dimensions: [1, 2, -2, -2, 0, 0, 0, 0, 0]
        },
        ELECTRIC_CONDUCTANCE: {
          dimensions: [-1, -2, 3, 2, 0, 0, 0, 0, 0]
        },
        MAGNETIC_FLUX: {
          dimensions: [1, 2, -2, -1, 0, 0, 0, 0, 0]
        },
        MAGNETIC_FLUX_DENSITY: {
          dimensions: [1, 0, -2, -1, 0, 0, 0, 0, 0]
        },
        FREQUENCY: {
          dimensions: [0, 0, -1, 0, 0, 0, 0, 0, 0]
        },
        ANGLE: {
          dimensions: [0, 0, 0, 0, 0, 0, 0, 1, 0]
        },
        BIT: {
          dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 1]
        }
      };
    for (var V in O) Ee(O, V) && (O[V].key = V);
    var J = {},
      Z = {
        name: "",
        base: J,
        value: 1,
        offset: 0,
        dimensions: U.map(P => 0)
      },
      q = {
        meter: {
          name: "meter",
          base: O.LENGTH,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        inch: {
          name: "inch",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: .0254,
          offset: 0
        },
        foot: {
          name: "foot",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: .3048,
          offset: 0
        },
        yard: {
          name: "yard",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: .9144,
          offset: 0
        },
        mile: {
          name: "mile",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: 1609.344,
          offset: 0
        },
        link: {
          name: "link",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: .201168,
          offset: 0
        },
        rod: {
          name: "rod",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: 5.0292,
          offset: 0
        },
        chain: {
          name: "chain",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: 20.1168,
          offset: 0
        },
        angstrom: {
          name: "angstrom",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: 1e-10,
          offset: 0
        },
        m: {
          name: "m",
          base: O.LENGTH,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        in: {
          name: "in",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: .0254,
          offset: 0
        },
        ft: {
          name: "ft",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: .3048,
          offset: 0
        },
        yd: {
          name: "yd",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: .9144,
          offset: 0
        },
        mi: {
          name: "mi",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: 1609.344,
          offset: 0
        },
        li: {
          name: "li",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: .201168,
          offset: 0
        },
        rd: {
          name: "rd",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: 5.02921,
          offset: 0
        },
        ch: {
          name: "ch",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: 20.1168,
          offset: 0
        },
        mil: {
          name: "mil",
          base: O.LENGTH,
          prefixes: B.NONE,
          value: 254e-7,
          offset: 0
        },
        m2: {
          name: "m2",
          base: O.SURFACE,
          prefixes: B.SQUARED,
          value: 1,
          offset: 0
        },
        sqin: {
          name: "sqin",
          base: O.SURFACE,
          prefixes: B.NONE,
          value: 64516e-8,
          offset: 0
        },
        sqft: {
          name: "sqft",
          base: O.SURFACE,
          prefixes: B.NONE,
          value: .09290304,
          offset: 0
        },
        sqyd: {
          name: "sqyd",
          base: O.SURFACE,
          prefixes: B.NONE,
          value: .83612736,
          offset: 0
        },
        sqmi: {
          name: "sqmi",
          base: O.SURFACE,
          prefixes: B.NONE,
          value: 2589988110336e-6,
          offset: 0
        },
        sqrd: {
          name: "sqrd",
          base: O.SURFACE,
          prefixes: B.NONE,
          value: 25.29295,
          offset: 0
        },
        sqch: {
          name: "sqch",
          base: O.SURFACE,
          prefixes: B.NONE,
          value: 404.6873,
          offset: 0
        },
        sqmil: {
          name: "sqmil",
          base: O.SURFACE,
          prefixes: B.NONE,
          value: 64516e-14,
          offset: 0
        },
        acre: {
          name: "acre",
          base: O.SURFACE,
          prefixes: B.NONE,
          value: 4046.86,
          offset: 0
        },
        hectare: {
          name: "hectare",
          base: O.SURFACE,
          prefixes: B.NONE,
          value: 1e4,
          offset: 0
        },
        m3: {
          name: "m3",
          base: O.VOLUME,
          prefixes: B.CUBIC,
          value: 1,
          offset: 0
        },
        L: {
          name: "L",
          base: O.VOLUME,
          prefixes: B.SHORT,
          value: .001,
          offset: 0
        },
        l: {
          name: "l",
          base: O.VOLUME,
          prefixes: B.SHORT,
          value: .001,
          offset: 0
        },
        litre: {
          name: "litre",
          base: O.VOLUME,
          prefixes: B.LONG,
          value: .001,
          offset: 0
        },
        cuin: {
          name: "cuin",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 16387064e-12,
          offset: 0
        },
        cuft: {
          name: "cuft",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .028316846592,
          offset: 0
        },
        cuyd: {
          name: "cuyd",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .764554857984,
          offset: 0
        },
        teaspoon: {
          name: "teaspoon",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 5e-6,
          offset: 0
        },
        tablespoon: {
          name: "tablespoon",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 15e-6,
          offset: 0
        },
        drop: {
          name: "drop",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 5e-8,
          offset: 0
        },
        gtt: {
          name: "gtt",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 5e-8,
          offset: 0
        },
        minim: {
          name: "minim",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 6161152e-14,
          offset: 0
        },
        fluiddram: {
          name: "fluiddram",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 36966911e-13,
          offset: 0
        },
        fluidounce: {
          name: "fluidounce",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 2957353e-11,
          offset: 0
        },
        gill: {
          name: "gill",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .0001182941,
          offset: 0
        },
        cc: {
          name: "cc",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 1e-6,
          offset: 0
        },
        cup: {
          name: "cup",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .0002365882,
          offset: 0
        },
        pint: {
          name: "pint",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .0004731765,
          offset: 0
        },
        quart: {
          name: "quart",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .0009463529,
          offset: 0
        },
        gallon: {
          name: "gallon",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .003785412,
          offset: 0
        },
        beerbarrel: {
          name: "beerbarrel",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .1173478,
          offset: 0
        },
        oilbarrel: {
          name: "oilbarrel",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .1589873,
          offset: 0
        },
        hogshead: {
          name: "hogshead",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .238481,
          offset: 0
        },
        fldr: {
          name: "fldr",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 36966911e-13,
          offset: 0
        },
        floz: {
          name: "floz",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: 2957353e-11,
          offset: 0
        },
        gi: {
          name: "gi",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .0001182941,
          offset: 0
        },
        cp: {
          name: "cp",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .0002365882,
          offset: 0
        },
        pt: {
          name: "pt",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .0004731765,
          offset: 0
        },
        qt: {
          name: "qt",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .0009463529,
          offset: 0
        },
        gal: {
          name: "gal",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .003785412,
          offset: 0
        },
        bbl: {
          name: "bbl",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .1173478,
          offset: 0
        },
        obl: {
          name: "obl",
          base: O.VOLUME,
          prefixes: B.NONE,
          value: .1589873,
          offset: 0
        },
        g: {
          name: "g",
          base: O.MASS,
          prefixes: B.SHORT,
          value: .001,
          offset: 0
        },
        gram: {
          name: "gram",
          base: O.MASS,
          prefixes: B.LONG,
          value: .001,
          offset: 0
        },
        ton: {
          name: "ton",
          base: O.MASS,
          prefixes: B.SHORT,
          value: 907.18474,
          offset: 0
        },
        t: {
          name: "t",
          base: O.MASS,
          prefixes: B.SHORT,
          value: 1e3,
          offset: 0
        },
        tonne: {
          name: "tonne",
          base: O.MASS,
          prefixes: B.LONG,
          value: 1e3,
          offset: 0
        },
        grain: {
          name: "grain",
          base: O.MASS,
          prefixes: B.NONE,
          value: 6479891e-11,
          offset: 0
        },
        dram: {
          name: "dram",
          base: O.MASS,
          prefixes: B.NONE,
          value: .0017718451953125,
          offset: 0
        },
        ounce: {
          name: "ounce",
          base: O.MASS,
          prefixes: B.NONE,
          value: .028349523125,
          offset: 0
        },
        poundmass: {
          name: "poundmass",
          base: O.MASS,
          prefixes: B.NONE,
          value: .45359237,
          offset: 0
        },
        hundredweight: {
          name: "hundredweight",
          base: O.MASS,
          prefixes: B.NONE,
          value: 45.359237,
          offset: 0
        },
        stick: {
          name: "stick",
          base: O.MASS,
          prefixes: B.NONE,
          value: .115,
          offset: 0
        },
        stone: {
          name: "stone",
          base: O.MASS,
          prefixes: B.NONE,
          value: 6.35029318,
          offset: 0
        },
        gr: {
          name: "gr",
          base: O.MASS,
          prefixes: B.NONE,
          value: 6479891e-11,
          offset: 0
        },
        dr: {
          name: "dr",
          base: O.MASS,
          prefixes: B.NONE,
          value: .0017718451953125,
          offset: 0
        },
        oz: {
          name: "oz",
          base: O.MASS,
          prefixes: B.NONE,
          value: .028349523125,
          offset: 0
        },
        lbm: {
          name: "lbm",
          base: O.MASS,
          prefixes: B.NONE,
          value: .45359237,
          offset: 0
        },
        cwt: {
          name: "cwt",
          base: O.MASS,
          prefixes: B.NONE,
          value: 45.359237,
          offset: 0
        },
        s: {
          name: "s",
          base: O.TIME,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        min: {
          name: "min",
          base: O.TIME,
          prefixes: B.NONE,
          value: 60,
          offset: 0
        },
        h: {
          name: "h",
          base: O.TIME,
          prefixes: B.NONE,
          value: 3600,
          offset: 0
        },
        second: {
          name: "second",
          base: O.TIME,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        sec: {
          name: "sec",
          base: O.TIME,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        minute: {
          name: "minute",
          base: O.TIME,
          prefixes: B.NONE,
          value: 60,
          offset: 0
        },
        hour: {
          name: "hour",
          base: O.TIME,
          prefixes: B.NONE,
          value: 3600,
          offset: 0
        },
        day: {
          name: "day",
          base: O.TIME,
          prefixes: B.NONE,
          value: 86400,
          offset: 0
        },
        week: {
          name: "week",
          base: O.TIME,
          prefixes: B.NONE,
          value: 7 * 86400,
          offset: 0
        },
        month: {
          name: "month",
          base: O.TIME,
          prefixes: B.NONE,
          value: 2629800,
          offset: 0
        },
        year: {
          name: "year",
          base: O.TIME,
          prefixes: B.NONE,
          value: 31557600,
          offset: 0
        },
        decade: {
          name: "decade",
          base: O.TIME,
          prefixes: B.NONE,
          value: 315576e3,
          offset: 0
        },
        century: {
          name: "century",
          base: O.TIME,
          prefixes: B.NONE,
          value: 315576e4,
          offset: 0
        },
        millennium: {
          name: "millennium",
          base: O.TIME,
          prefixes: B.NONE,
          value: 315576e5,
          offset: 0
        },
        hertz: {
          name: "Hertz",
          base: O.FREQUENCY,
          prefixes: B.LONG,
          value: 1,
          offset: 0,
          reciprocal: !0
        },
        Hz: {
          name: "Hz",
          base: O.FREQUENCY,
          prefixes: B.SHORT,
          value: 1,
          offset: 0,
          reciprocal: !0
        },
        rad: {
          name: "rad",
          base: O.ANGLE,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        radian: {
          name: "radian",
          base: O.ANGLE,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        deg: {
          name: "deg",
          base: O.ANGLE,
          prefixes: B.SHORT,
          value: null,
          offset: 0
        },
        degree: {
          name: "degree",
          base: O.ANGLE,
          prefixes: B.LONG,
          value: null,
          offset: 0
        },
        grad: {
          name: "grad",
          base: O.ANGLE,
          prefixes: B.SHORT,
          value: null,
          offset: 0
        },
        gradian: {
          name: "gradian",
          base: O.ANGLE,
          prefixes: B.LONG,
          value: null,
          offset: 0
        },
        cycle: {
          name: "cycle",
          base: O.ANGLE,
          prefixes: B.NONE,
          value: null,
          offset: 0
        },
        arcsec: {
          name: "arcsec",
          base: O.ANGLE,
          prefixes: B.NONE,
          value: null,
          offset: 0
        },
        arcmin: {
          name: "arcmin",
          base: O.ANGLE,
          prefixes: B.NONE,
          value: null,
          offset: 0
        },
        A: {
          name: "A",
          base: O.CURRENT,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        ampere: {
          name: "ampere",
          base: O.CURRENT,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        K: {
          name: "K",
          base: O.TEMPERATURE,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        degC: {
          name: "degC",
          base: O.TEMPERATURE,
          prefixes: B.SHORT,
          value: 1,
          offset: 273.15
        },
        degF: {
          name: "degF",
          base: O.TEMPERATURE,
          prefixes: B.SHORT,
          value: new g(5, 9),
          offset: 459.67
        },
        degR: {
          name: "degR",
          base: O.TEMPERATURE,
          prefixes: B.SHORT,
          value: new g(5, 9),
          offset: 0
        },
        kelvin: {
          name: "kelvin",
          base: O.TEMPERATURE,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        celsius: {
          name: "celsius",
          base: O.TEMPERATURE,
          prefixes: B.LONG,
          value: 1,
          offset: 273.15
        },
        fahrenheit: {
          name: "fahrenheit",
          base: O.TEMPERATURE,
          prefixes: B.LONG,
          value: new g(5, 9),
          offset: 459.67
        },
        rankine: {
          name: "rankine",
          base: O.TEMPERATURE,
          prefixes: B.LONG,
          value: new g(5, 9),
          offset: 0
        },
        mol: {
          name: "mol",
          base: O.AMOUNT_OF_SUBSTANCE,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        mole: {
          name: "mole",
          base: O.AMOUNT_OF_SUBSTANCE,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        cd: {
          name: "cd",
          base: O.LUMINOUS_INTENSITY,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        candela: {
          name: "candela",
          base: O.LUMINOUS_INTENSITY,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        N: {
          name: "N",
          base: O.FORCE,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        newton: {
          name: "newton",
          base: O.FORCE,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        dyn: {
          name: "dyn",
          base: O.FORCE,
          prefixes: B.SHORT,
          value: 1e-5,
          offset: 0
        },
        dyne: {
          name: "dyne",
          base: O.FORCE,
          prefixes: B.LONG,
          value: 1e-5,
          offset: 0
        },
        lbf: {
          name: "lbf",
          base: O.FORCE,
          prefixes: B.NONE,
          value: 4.4482216152605,
          offset: 0
        },
        poundforce: {
          name: "poundforce",
          base: O.FORCE,
          prefixes: B.NONE,
          value: 4.4482216152605,
          offset: 0
        },
        kip: {
          name: "kip",
          base: O.FORCE,
          prefixes: B.LONG,
          value: 4448.2216,
          offset: 0
        },
        kilogramforce: {
          name: "kilogramforce",
          base: O.FORCE,
          prefixes: B.NONE,
          value: 9.80665,
          offset: 0
        },
        J: {
          name: "J",
          base: O.ENERGY,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        joule: {
          name: "joule",
          base: O.ENERGY,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        erg: {
          name: "erg",
          base: O.ENERGY,
          prefixes: B.SHORTLONG,
          value: 1e-7,
          offset: 0
        },
        Wh: {
          name: "Wh",
          base: O.ENERGY,
          prefixes: B.SHORT,
          value: 3600,
          offset: 0
        },
        BTU: {
          name: "BTU",
          base: O.ENERGY,
          prefixes: B.BTU,
          value: 1055.05585262,
          offset: 0
        },
        eV: {
          name: "eV",
          base: O.ENERGY,
          prefixes: B.SHORT,
          value: 1602176565e-28,
          offset: 0
        },
        electronvolt: {
          name: "electronvolt",
          base: O.ENERGY,
          prefixes: B.LONG,
          value: 1602176565e-28,
          offset: 0
        },
        W: {
          name: "W",
          base: O.POWER,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        watt: {
          name: "watt",
          base: O.POWER,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        hp: {
          name: "hp",
          base: O.POWER,
          prefixes: B.NONE,
          value: 745.6998715386,
          offset: 0
        },
        VAR: {
          name: "VAR",
          base: O.POWER,
          prefixes: B.SHORT,
          value: p.I,
          offset: 0
        },
        VA: {
          name: "VA",
          base: O.POWER,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        Pa: {
          name: "Pa",
          base: O.PRESSURE,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        psi: {
          name: "psi",
          base: O.PRESSURE,
          prefixes: B.NONE,
          value: 6894.75729276459,
          offset: 0
        },
        atm: {
          name: "atm",
          base: O.PRESSURE,
          prefixes: B.NONE,
          value: 101325,
          offset: 0
        },
        bar: {
          name: "bar",
          base: O.PRESSURE,
          prefixes: B.SHORTLONG,
          value: 1e5,
          offset: 0
        },
        torr: {
          name: "torr",
          base: O.PRESSURE,
          prefixes: B.NONE,
          value: 133.322,
          offset: 0
        },
        mmHg: {
          name: "mmHg",
          base: O.PRESSURE,
          prefixes: B.NONE,
          value: 133.322,
          offset: 0
        },
        mmH2O: {
          name: "mmH2O",
          base: O.PRESSURE,
          prefixes: B.NONE,
          value: 9.80665,
          offset: 0
        },
        cmH2O: {
          name: "cmH2O",
          base: O.PRESSURE,
          prefixes: B.NONE,
          value: 98.0665,
          offset: 0
        },
        coulomb: {
          name: "coulomb",
          base: O.ELECTRIC_CHARGE,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        C: {
          name: "C",
          base: O.ELECTRIC_CHARGE,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        farad: {
          name: "farad",
          base: O.ELECTRIC_CAPACITANCE,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        F: {
          name: "F",
          base: O.ELECTRIC_CAPACITANCE,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        volt: {
          name: "volt",
          base: O.ELECTRIC_POTENTIAL,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        V: {
          name: "V",
          base: O.ELECTRIC_POTENTIAL,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        ohm: {
          name: "ohm",
          base: O.ELECTRIC_RESISTANCE,
          prefixes: B.SHORTLONG,
          value: 1,
          offset: 0
        },
        henry: {
          name: "henry",
          base: O.ELECTRIC_INDUCTANCE,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        H: {
          name: "H",
          base: O.ELECTRIC_INDUCTANCE,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        siemens: {
          name: "siemens",
          base: O.ELECTRIC_CONDUCTANCE,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        S: {
          name: "S",
          base: O.ELECTRIC_CONDUCTANCE,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        weber: {
          name: "weber",
          base: O.MAGNETIC_FLUX,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        Wb: {
          name: "Wb",
          base: O.MAGNETIC_FLUX,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        tesla: {
          name: "tesla",
          base: O.MAGNETIC_FLUX_DENSITY,
          prefixes: B.LONG,
          value: 1,
          offset: 0
        },
        T: {
          name: "T",
          base: O.MAGNETIC_FLUX_DENSITY,
          prefixes: B.SHORT,
          value: 1,
          offset: 0
        },
        b: {
          name: "b",
          base: O.BIT,
          prefixes: B.BINARY_SHORT,
          value: 1,
          offset: 0
        },
        bits: {
          name: "bits",
          base: O.BIT,
          prefixes: B.BINARY_LONG,
          value: 1,
          offset: 0
        },
        B: {
          name: "B",
          base: O.BIT,
          prefixes: B.BINARY_SHORT,
          value: 8,
          offset: 0
        },
        bytes: {
          name: "bytes",
          base: O.BIT,
          prefixes: B.BINARY_LONG,
          value: 8,
          offset: 0
        }
      },
      X = {
        meters: "meter",
        inches: "inch",
        feet: "foot",
        yards: "yard",
        miles: "mile",
        links: "link",
        rods: "rod",
        chains: "chain",
        angstroms: "angstrom",
        lt: "l",
        litres: "litre",
        liter: "litre",
        liters: "litre",
        teaspoons: "teaspoon",
        tablespoons: "tablespoon",
        minims: "minim",
        fluiddrams: "fluiddram",
        fluidounces: "fluidounce",
        gills: "gill",
        cups: "cup",
        pints: "pint",
        quarts: "quart",
        gallons: "gallon",
        beerbarrels: "beerbarrel",
        oilbarrels: "oilbarrel",
        hogsheads: "hogshead",
        gtts: "gtt",
        grams: "gram",
        tons: "ton",
        tonnes: "tonne",
        grains: "grain",
        drams: "dram",
        ounces: "ounce",
        poundmasses: "poundmass",
        hundredweights: "hundredweight",
        sticks: "stick",
        lb: "lbm",
        lbs: "lbm",
        kips: "kip",
        kgf: "kilogramforce",
        acres: "acre",
        hectares: "hectare",
        sqfeet: "sqft",
        sqyard: "sqyd",
        sqmile: "sqmi",
        sqmiles: "sqmi",
        mmhg: "mmHg",
        mmh2o: "mmH2O",
        cmh2o: "cmH2O",
        seconds: "second",
        secs: "second",
        minutes: "minute",
        mins: "minute",
        hours: "hour",
        hr: "hour",
        hrs: "hour",
        days: "day",
        weeks: "week",
        months: "month",
        years: "year",
        decades: "decade",
        centuries: "century",
        millennia: "millennium",
        hertz: "hertz",
        radians: "radian",
        degrees: "degree",
        gradians: "gradian",
        cycles: "cycle",
        arcsecond: "arcsec",
        arcseconds: "arcsec",
        arcminute: "arcmin",
        arcminutes: "arcmin",
        BTUs: "BTU",
        watts: "watt",
        joules: "joule",
        amperes: "ampere",
        amps: "ampere",
        amp: "ampere",
        coulombs: "coulomb",
        volts: "volt",
        ohms: "ohm",
        farads: "farad",
        webers: "weber",
        teslas: "tesla",
        electronvolts: "electronvolt",
        moles: "mole",
        bit: "bits",
        byte: "bytes"
      };

    function ie(P) {
      if (P.number === "BigNumber") {
        var H = Mo(b);
        q.rad.value = new b(1), q.deg.value = H.div(180), q.grad.value = H.div(200), q.cycle.value = H.times(2), q.arcsec.value = H.div(648e3), q.arcmin.value = H.div(10800)
      } else q.rad.value = 1, q.deg.value = Math.PI / 180, q.grad.value = Math.PI / 200, q.cycle.value = Math.PI * 2, q.arcsec.value = Math.PI / 648e3, q.arcmin.value = Math.PI / 10800;
      q.radian.value = q.rad.value, q.degree.value = q.deg.value, q.gradian.value = q.grad.value
    }
    ie(i), r && r("config", function(P, H) {
      P.number !== H.number && ie(P)
    });
    var Q = {
      si: {
        NONE: {
          unit: Z,
          prefix: B.NONE[""]
        },
        LENGTH: {
          unit: q.m,
          prefix: B.SHORT[""]
        },
        MASS: {
          unit: q.g,
          prefix: B.SHORT.k
        },
        TIME: {
          unit: q.s,
          prefix: B.SHORT[""]
        },
        CURRENT: {
          unit: q.A,
          prefix: B.SHORT[""]
        },
        TEMPERATURE: {
          unit: q.K,
          prefix: B.SHORT[""]
        },
        LUMINOUS_INTENSITY: {
          unit: q.cd,
          prefix: B.SHORT[""]
        },
        AMOUNT_OF_SUBSTANCE: {
          unit: q.mol,
          prefix: B.SHORT[""]
        },
        ANGLE: {
          unit: q.rad,
          prefix: B.SHORT[""]
        },
        BIT: {
          unit: q.bits,
          prefix: B.SHORT[""]
        },
        FORCE: {
          unit: q.N,
          prefix: B.SHORT[""]
        },
        ENERGY: {
          unit: q.J,
          prefix: B.SHORT[""]
        },
        POWER: {
          unit: q.W,
          prefix: B.SHORT[""]
        },
        PRESSURE: {
          unit: q.Pa,
          prefix: B.SHORT[""]
        },
        ELECTRIC_CHARGE: {
          unit: q.C,
          prefix: B.SHORT[""]
        },
        ELECTRIC_CAPACITANCE: {
          unit: q.F,
          prefix: B.SHORT[""]
        },
        ELECTRIC_POTENTIAL: {
          unit: q.V,
          prefix: B.SHORT[""]
        },
        ELECTRIC_RESISTANCE: {
          unit: q.ohm,
          prefix: B.SHORT[""]
        },
        ELECTRIC_INDUCTANCE: {
          unit: q.H,
          prefix: B.SHORT[""]
        },
        ELECTRIC_CONDUCTANCE: {
          unit: q.S,
          prefix: B.SHORT[""]
        },
        MAGNETIC_FLUX: {
          unit: q.Wb,
          prefix: B.SHORT[""]
        },
        MAGNETIC_FLUX_DENSITY: {
          unit: q.T,
          prefix: B.SHORT[""]
        },
        FREQUENCY: {
          unit: q.Hz,
          prefix: B.SHORT[""]
        }
      }
    };
    Q.cgs = JSON.parse(JSON.stringify(Q.si)), Q.cgs.LENGTH = {
      unit: q.m,
      prefix: B.SHORT.c
    }, Q.cgs.MASS = {
      unit: q.g,
      prefix: B.SHORT[""]
    }, Q.cgs.FORCE = {
      unit: q.dyn,
      prefix: B.SHORT[""]
    }, Q.cgs.ENERGY = {
      unit: q.erg,
      prefix: B.NONE[""]
    }, Q.us = JSON.parse(JSON.stringify(Q.si)), Q.us.LENGTH = {
      unit: q.ft,
      prefix: B.NONE[""]
    }, Q.us.MASS = {
      unit: q.lbm,
      prefix: B.NONE[""]
    }, Q.us.TEMPERATURE = {
      unit: q.degF,
      prefix: B.NONE[""]
    }, Q.us.FORCE = {
      unit: q.lbf,
      prefix: B.NONE[""]
    }, Q.us.ENERGY = {
      unit: q.BTU,
      prefix: B.BTU[""]
    }, Q.us.POWER = {
      unit: q.hp,
      prefix: B.NONE[""]
    }, Q.us.PRESSURE = {
      unit: q.psi,
      prefix: B.NONE[""]
    }, Q.auto = JSON.parse(JSON.stringify(Q.si));
    var ee = Q.auto;
    h.setUnitSystem = function(P) {
      if (Ee(Q, P)) ee = Q[P];
      else throw new Error("Unit system " + P + " does not exist. Choices are: " + Object.keys(Q).join(", "))
    }, h.getUnitSystem = function() {
      for (var P in Q)
        if (Ee(Q, P) && Q[P] === ee) return P
    }, h.typeConverters = {
      BigNumber: function(H) {
        return H != null && H.isFraction ? new b(H.n).div(H.d).times(H.s) : new b(H + "")
      },
      Fraction: function(H) {
        return new g(H)
      },
      Complex: function(H) {
        return H
      },
      number: function(H) {
        return H != null && H.isFraction ? d(H) : H
      }
    }, h.prototype._numberConverter = function() {
      var P = h.typeConverters[this.valueType()];
      if (P) return P;
      throw new TypeError('Unsupported Unit value type "' + this.valueType() + '"')
    }, h._getNumberConverter = function(P) {
      if (!h.typeConverters[P]) throw new TypeError('Unsupported type "' + P + '"');
      return h.typeConverters[P]
    };
    for (var ue in q)
      if (Ee(q, ue)) {
        var re = q[ue];
        re.dimensions = re.base.dimensions
      } for (var ne in X)
      if (Ee(X, ne)) {
        var le = q[X[ne]],
          se = {};
        for (var ge in le) Ee(le, ge) && (se[ge] = le[ge]);
        se.name = ne, q[ne] = se
      } h.isValidAlpha = function(H) {
      return /^[a-zA-Z]$/.test(H)
    };

    function Ae(P) {
      for (var H = 0; H < P.length; H++) {
        if (y = P.charAt(H), H === 0 && !h.isValidAlpha(y)) throw new Error('Invalid unit name (must begin with alpha character): "' + P + '"');
        if (H > 0 && !(h.isValidAlpha(y) || D(y))) throw new Error('Invalid unit name (only alphanumeric characters are allowed): "' + P + '"')
      }
    }
    return h.createUnit = function(P, H) {
      if (typeof P != "object") throw new TypeError("createUnit expects first parameter to be of type 'Object'");
      if (H && H.override) {
        for (var te in P)
          if (Ee(P, te) && h.deleteUnit(te), P[te].aliases)
            for (var k = 0; k < P[te].aliases.length; k++) h.deleteUnit(P[te].aliases[k])
      }
      var W;
      for (var K in P) Ee(P, K) && (W = h.createUnitSingle(K, P[K]));
      return W
    }, h.createUnitSingle = function(P, H) {
      if ((typeof H > "u" || H === null) && (H = {}), typeof P != "string") throw new TypeError("createUnitSingle expects first parameter to be of type 'string'");
      if (Ee(q, P)) throw new Error('Cannot create unit "' + P + '": a unit with that name already exists');
      Ae(P);
      var te = null,
        k = [],
        W = 0,
        K, ve, me;
      if (H && H.type === "Unit") te = H.clone();
      else if (typeof H == "string") H !== "" && (K = H);
      else if (typeof H == "object") K = H.definition, ve = H.prefixes, W = H.offset, me = H.baseName, H.aliases && (k = H.aliases.valueOf());
      else throw new TypeError('Cannot create unit "' + P + '" from "' + H.toString() + '": expecting "string" or "Unit" or "Object"');
      if (k) {
        for (var R = 0; R < k.length; R++)
          if (Ee(q, k[R])) throw new Error('Cannot create alias "' + k[R] + '": a unit with that name already exists')
      }
      if (K && typeof K == "string" && !te) try {
        te = h.parse(K, {
          allowNoUnits: !0
        })
      } catch (F) {
        throw F.message = 'Could not create unit "' + P + '" from "' + K + '": ' + F.message, F
      } else K && K.type === "Unit" && (te = K.clone());
      k = k || [], W = W || 0, ve && ve.toUpperCase ? ve = B[ve.toUpperCase()] || B.NONE : ve = B.NONE;
      var L = {};
      if (te) {
        L = {
          name: P,
          value: te.value,
          dimensions: te.dimensions.slice(0),
          prefixes: ve,
          offset: W
        };
        var ce = !1;
        for (var ye in O)
          if (Ee(O, ye)) {
            for (var he = !0, De = 0; De < U.length; De++)
              if (Math.abs((L.dimensions[De] || 0) - (O[ye].dimensions[De] || 0)) > 1e-12) {
                he = !1;
                break
              } if (he) {
              ce = !0, L.base = O[ye];
              break
            }
          } if (!ce) {
          me = me || P + "_STUFF";
          var be = {
            dimensions: te.dimensions.slice(0)
          };
          be.key = me, O[me] = be, ee[me] = {
            unit: L,
            prefix: B.NONE[""]
          }, L.base = O[me]
        }
      } else {
        if (me = me || P + "_STUFF", U.indexOf(me) >= 0) throw new Error('Cannot create new base unit "' + P + '": a base unit with that name already exists (and cannot be overridden)');
        U.push(me);
        for (var j in O) Ee(O, j) && (O[j].dimensions[U.length - 1] = 0);
        for (var ae = {
            dimensions: []
          }, fe = 0; fe < U.length; fe++) ae.dimensions[fe] = 0;
        ae.dimensions[U.length - 1] = 1, ae.key = me, O[me] = ae, L = {
          name: P,
          value: 1,
          dimensions: O[me].dimensions.slice(0),
          prefixes: ve,
          offset: W,
          base: O[me]
        }, ee[me] = {
          unit: L,
          prefix: B.NONE[""]
        }
      }
      h.UNITS[P] = L;
      for (var Ge = 0; Ge < k.length; Ge++) {
        var Ve = k[Ge],
          Ce = {};
        for (var lr in L) Ee(L, lr) && (Ce[lr] = L[lr]);
        Ce.name = Ve, h.UNITS[Ve] = Ce
      }
      return delete _.cache, new h(null, P)
    }, h.deleteUnit = function(P) {
      delete h.UNITS[P]
    }, h.PREFIXES = B, h.BASE_DIMENSIONS = U, h.BASE_UNITS = O, h.UNIT_SYSTEMS = Q, h.UNITS = q, h
  }, {
    isClass: !0
  }),
  Tl = "unit",
  CN = ["typed", "Unit"],
  MN = z(Tl, CN, e => {
    var {
      typed: r,
      Unit: i
    } = e;
    return r(Tl, {
      Unit: function(t) {
        return t.clone()
      },
      string: function(t) {
        return i.isValuelessUnit(t) ? new i(null, t) : i.parse(t, {
          allowNoUnits: !0
        })
      },
      "number | BigNumber | Fraction | Complex, string | Unit": function(t, a) {
        return new i(t, a)
      },
      "number | BigNumber | Fraction": function(t) {
        return new i(t)
      },
      "Array | Matrix": r.referToSelf(n => t => Le(t, n))
    })
  }),
  Ol = "sparse",
  FN = ["typed", "SparseMatrix"],
  BN = z(Ol, FN, e => {
    var {
      typed: r,
      SparseMatrix: i
    } = e;
    return r(Ol, {
      "": function() {
        return new i([])
      },
      string: function(t) {
        return new i([], t)
      },
      "Array | Matrix": function(t) {
        return new i(t)
      },
      "Array | Matrix, string": function(t, a) {
        return new i(t, a)
      }
    })
  }),
  $l = "createUnit",
  TN = ["typed", "Unit"],
  ON = z($l, TN, e => {
    var {
      typed: r,
      Unit: i
    } = e;
    return r($l, {
      "Object, Object": function(t, a) {
        return i.createUnit(t, a)
      },
      Object: function(t) {
        return i.createUnit(t, {})
      },
      "string, Unit | string | Object, Object": function(t, a, o) {
        var f = {};
        return f[t] = a, i.createUnit(f, o)
      },
      "string, Unit | string | Object": function(t, a) {
        var o = {};
        return o[t] = a, i.createUnit(o, {})
      },
      string: function(t) {
        var a = {};
        return a[t] = {}, i.createUnit(a, {})
      }
    })
  }),
  _l = "acos",
  $N = ["typed", "config", "Complex"],
  _N = z(_l, $N, e => {
    var {
      typed: r,
      config: i,
      Complex: n
    } = e;
    return r(_l, {
      number: function(a) {
        return a >= -1 && a <= 1 || i.predictable ? Math.acos(a) : new n(a, 0).acos()
      },
      Complex: function(a) {
        return a.acos()
      },
      BigNumber: function(a) {
        return a.acos()
      }
    })
  }),
  Il = "acosh",
  IN = ["typed", "config", "Complex"],
  qN = z(Il, IN, e => {
    var {
      typed: r,
      config: i,
      Complex: n
    } = e;
    return r(Il, {
      number: function(a) {
        return a >= 1 || i.predictable ? Xm(a) : a <= -1 ? new n(Math.log(Math.sqrt(a * a - 1) - a), Math.PI) : new n(a, 0).acosh()
      },
      Complex: function(a) {
        return a.acosh()
      },
      BigNumber: function(a) {
        return a.acosh()
      }
    })
  }),
  ql = "acot",
  RN = ["typed", "BigNumber"],
  zN = z(ql, RN, e => {
    var {
      typed: r,
      BigNumber: i
    } = e;
    return r(ql, {
      number: Jm,
      Complex: function(t) {
        return t.acot()
      },
      BigNumber: function(t) {
        return new i(1).div(t).atan()
      }
    })
  }),
  Rl = "acoth",
  PN = ["typed", "config", "Complex", "BigNumber"],
  UN = z(Rl, PN, e => {
    var {
      typed: r,
      config: i,
      Complex: n,
      BigNumber: t
    } = e;
    return r(Rl, {
      number: function(o) {
        return o >= 1 || o <= -1 || i.predictable ? Km(o) : new n(o, 0).acoth()
      },
      Complex: function(o) {
        return o.acoth()
      },
      BigNumber: function(o) {
        return new t(1).div(o).atanh()
      }
    })
  }),
  zl = "acsc",
  LN = ["typed", "config", "Complex", "BigNumber"],
  kN = z(zl, LN, e => {
    var {
      typed: r,
      config: i,
      Complex: n,
      BigNumber: t
    } = e;
    return r(zl, {
      number: function(o) {
        return o <= -1 || o >= 1 || i.predictable ? jm(o) : new n(o, 0).acsc()
      },
      Complex: function(o) {
        return o.acsc()
      },
      BigNumber: function(o) {
        return new t(1).div(o).asin()
      }
    })
  }),
  Pl = "acsch",
  HN = ["typed", "BigNumber"],
  GN = z(Pl, HN, e => {
    var {
      typed: r,
      BigNumber: i
    } = e;
    return r(Pl, {
      number: ev,
      Complex: function(t) {
        return t.acsch()
      },
      BigNumber: function(t) {
        return new i(1).div(t).asinh()
      }
    })
  }),
  Ul = "asec",
  VN = ["typed", "config", "Complex", "BigNumber"],
  ZN = z(Ul, VN, e => {
    var {
      typed: r,
      config: i,
      Complex: n,
      BigNumber: t
    } = e;
    return r(Ul, {
      number: function(o) {
        return o <= -1 || o >= 1 || i.predictable ? rv(o) : new n(o, 0).asec()
      },
      Complex: function(o) {
        return o.asec()
      },
      BigNumber: function(o) {
        return new t(1).div(o).acos()
      }
    })
  }),
  Ll = "asech",
  YN = ["typed", "config", "Complex", "BigNumber"],
  WN = z(Ll, YN, e => {
    var {
      typed: r,
      config: i,
      Complex: n,
      BigNumber: t
    } = e;
    return r(Ll, {
      number: function(o) {
        if (o <= 1 && o >= -1 || i.predictable) {
          var f = 1 / o;
          if (f > 0 || i.predictable) return tv(o);
          var c = Math.sqrt(f * f - 1);
          return new n(Math.log(c - f), Math.PI)
        }
        return new n(o, 0).asech()
      },
      Complex: function(o) {
        return o.asech()
      },
      BigNumber: function(o) {
        return new t(1).div(o).acosh()
      }
    })
  }),
  kl = "asin",
  QN = ["typed", "config", "Complex"],
  XN = z(kl, QN, e => {
    var {
      typed: r,
      config: i,
      Complex: n
    } = e;
    return r(kl, {
      number: function(a) {
        return a >= -1 && a <= 1 || i.predictable ? Math.asin(a) : new n(a, 0).asin()
      },
      Complex: function(a) {
        return a.asin()
      },
      BigNumber: function(a) {
        return a.asin()
      }
    })
  }),
  JN = "asinh",
  KN = ["typed"],
  jN = z(JN, KN, e => {
    var {
      typed: r
    } = e;
    return r("asinh", {
      number: nv,
      Complex: function(n) {
        return n.asinh()
      },
      BigNumber: function(n) {
        return n.asinh()
      }
    })
  }),
  e2 = "atan",
  r2 = ["typed"],
  t2 = z(e2, r2, e => {
    var {
      typed: r
    } = e;
    return r("atan", {
      number: function(n) {
        return Math.atan(n)
      },
      Complex: function(n) {
        return n.atan()
      },
      BigNumber: function(n) {
        return n.atan()
      }
    })
  }),
  Hl = "atan2",
  n2 = ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix", "concat"],
  a2 = z(Hl, n2, e => {
    var {
      typed: r,
      matrix: i,
      equalScalar: n,
      BigNumber: t,
      DenseMatrix: a,
      concat: o
    } = e, f = ut({
      typed: r,
      equalScalar: n
    }), c = _r({
      typed: r
    }), u = yv({
      typed: r,
      equalScalar: n
    }), s = Nr({
      typed: r,
      equalScalar: n
    }), l = hr({
      typed: r,
      DenseMatrix: a
    }), m = or({
      typed: r,
      matrix: i,
      concat: o
    });
    return r(Hl, {
      "number, number": Math.atan2,
      "BigNumber, BigNumber": (v, d) => t.atan2(v, d)
    }, m({
      scalar: "number | BigNumber",
      SS: u,
      DS: c,
      SD: f,
      Ss: s,
      sS: l
    }))
  }),
  Gl = "atanh",
  i2 = ["typed", "config", "Complex"],
  o2 = z(Gl, i2, e => {
    var {
      typed: r,
      config: i,
      Complex: n
    } = e;
    return r(Gl, {
      number: function(a) {
        return a <= 1 && a >= -1 || i.predictable ? av(a) : new n(a, 0).atanh()
      },
      Complex: function(a) {
        return a.atanh()
      },
      BigNumber: function(a) {
        return a.atanh()
      }
    })
  }),
  zn = z("trigUnit", ["typed"], e => {
    var {
      typed: r
    } = e;
    return {
      Unit: r.referToSelf(i => n => {
        if (!n.hasBase(n.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle");
        return r.find(i, n.valueType())(n.value)
      })
    }
  }),
  Vl = "cos",
  s2 = ["typed"],
  u2 = z(Vl, s2, e => {
    var {
      typed: r
    } = e, i = zn({
      typed: r
    });
    return r(Vl, {
      number: Math.cos,
      "Complex | BigNumber": n => n.cos()
    }, i)
  }),
  Zl = "cosh",
  l2 = ["typed"],
  c2 = z(Zl, l2, e => {
    var {
      typed: r
    } = e;
    return r(Zl, {
      number: rh,
      "Complex | BigNumber": i => i.cosh()
    })
  }),
  Yl = "cot",
  f2 = ["typed", "BigNumber"],
  m2 = z(Yl, f2, e => {
    var {
      typed: r,
      BigNumber: i
    } = e, n = zn({
      typed: r
    });
    return r(Yl, {
      number: iv,
      Complex: t => t.cot(),
      BigNumber: t => new i(1).div(t.tan())
    }, n)
  }),
  Wl = "coth",
  v2 = ["typed", "BigNumber"],
  p2 = z(Wl, v2, e => {
    var {
      typed: r,
      BigNumber: i
    } = e;
    return r(Wl, {
      number: ov,
      Complex: n => n.coth(),
      BigNumber: n => new i(1).div(n.tanh())
    })
  }),
  Ql = "csc",
  d2 = ["typed", "BigNumber"],
  h2 = z(Ql, d2, e => {
    var {
      typed: r,
      BigNumber: i
    } = e, n = zn({
      typed: r
    });
    return r(Ql, {
      number: sv,
      Complex: t => t.csc(),
      BigNumber: t => new i(1).div(t.sin())
    }, n)
  }),
  Xl = "csch",
  g2 = ["typed", "BigNumber"],
  y2 = z(Xl, g2, e => {
    var {
      typed: r,
      BigNumber: i
    } = e;
    return r(Xl, {
      number: uv,
      Complex: n => n.csch(),
      BigNumber: n => new i(1).div(n.sinh())
    })
  }),
  Jl = "sec",
  b2 = ["typed", "BigNumber"],
  x2 = z(Jl, b2, e => {
    var {
      typed: r,
      BigNumber: i
    } = e, n = zn({
      typed: r
    });
    return r(Jl, {
      number: lv,
      Complex: t => t.sec(),
      BigNumber: t => new i(1).div(t.cos())
    }, n)
  }),
  Kl = "sech",
  w2 = ["typed", "BigNumber"],
  N2 = z(Kl, w2, e => {
    var {
      typed: r,
      BigNumber: i
    } = e;
    return r(Kl, {
      number: cv,
      Complex: n => n.sech(),
      BigNumber: n => new i(1).div(n.cosh())
    })
  }),
  jl = "sin",
  D2 = ["typed"],
  A2 = z(jl, D2, e => {
    var {
      typed: r
    } = e, i = zn({
      typed: r
    });
    return r(jl, {
      number: Math.sin,
      "Complex | BigNumber": n => n.sin()
    }, i)
  }),
  ec = "sinh",
  E2 = ["typed"],
  S2 = z(ec, E2, e => {
    var {
      typed: r
    } = e;
    return r(ec, {
      number: fv,
      "Complex | BigNumber": i => i.sinh()
    })
  }),
  rc = "tan",
  C2 = ["typed"],
  M2 = z(rc, C2, e => {
    var {
      typed: r
    } = e, i = zn({
      typed: r
    });
    return r(rc, {
      number: Math.tan,
      "Complex | BigNumber": n => n.tan()
    }, i)
  }),
  F2 = "tanh",
  B2 = ["typed"],
  T2 = z(F2, B2, e => {
    var {
      typed: r
    } = e;
    return r("tanh", {
      number: nh,
      "Complex | BigNumber": i => i.tanh()
    })
  }),
  tc = "setCartesian",
  O2 = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"],
  $2 = z(tc, O2, e => {
    var {
      typed: r,
      size: i,
      subset: n,
      compareNatural: t,
      Index: a,
      DenseMatrix: o
    } = e;
    return r(tc, {
      "Array | Matrix, Array | Matrix": function(c, u) {
        var s = [];
        if (n(i(c), new a(0)) !== 0 && n(i(u), new a(0)) !== 0) {
          var l = Xe(Array.isArray(c) ? c : c.toArray()).sort(t),
            m = Xe(Array.isArray(u) ? u : u.toArray()).sort(t);
          s = [];
          for (var v = 0; v < l.length; v++)
            for (var d = 0; d < m.length; d++) s.push([l[v], m[d]])
        }
        return Array.isArray(c) && Array.isArray(u) ? s : new o(s)
      }
    })
  }),
  nc = "setDifference",
  _2 = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"],
  I2 = z(nc, _2, e => {
    var {
      typed: r,
      size: i,
      subset: n,
      compareNatural: t,
      Index: a,
      DenseMatrix: o
    } = e;
    return r(nc, {
      "Array | Matrix, Array | Matrix": function(c, u) {
        var s;
        if (n(i(c), new a(0)) === 0) s = [];
        else {
          if (n(i(u), new a(0)) === 0) return Xe(c.toArray());
          var l = En(Xe(Array.isArray(c) ? c : c.toArray()).sort(t)),
            m = En(Xe(Array.isArray(u) ? u : u.toArray()).sort(t));
          s = [];
          for (var v, d = 0; d < l.length; d++) {
            v = !1;
            for (var p = 0; p < m.length; p++)
              if (t(l[d].value, m[p].value) === 0 && l[d].identifier === m[p].identifier) {
                v = !0;
                break
              } v || s.push(l[d])
          }
        }
        return Array.isArray(c) && Array.isArray(u) ? Va(s) : new o(Va(s))
      }
    })
  }),
  ac = "setDistinct",
  q2 = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"],
  R2 = z(ac, q2, e => {
    var {
      typed: r,
      size: i,
      subset: n,
      compareNatural: t,
      Index: a,
      DenseMatrix: o
    } = e;
    return r(ac, {
      "Array | Matrix": function(c) {
        var u;
        if (n(i(c), new a(0)) === 0) u = [];
        else {
          var s = Xe(Array.isArray(c) ? c : c.toArray()).sort(t);
          u = [], u.push(s[0]);
          for (var l = 1; l < s.length; l++) t(s[l], s[l - 1]) !== 0 && u.push(s[l])
        }
        return Array.isArray(c) ? u : new o(u)
      }
    })
  }),
  ic = "setIntersect",
  z2 = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"],
  P2 = z(ic, z2, e => {
    var {
      typed: r,
      size: i,
      subset: n,
      compareNatural: t,
      Index: a,
      DenseMatrix: o
    } = e;
    return r(ic, {
      "Array | Matrix, Array | Matrix": function(c, u) {
        var s;
        if (n(i(c), new a(0)) === 0 || n(i(u), new a(0)) === 0) s = [];
        else {
          var l = En(Xe(Array.isArray(c) ? c : c.toArray()).sort(t)),
            m = En(Xe(Array.isArray(u) ? u : u.toArray()).sort(t));
          s = [];
          for (var v = 0; v < l.length; v++)
            for (var d = 0; d < m.length; d++)
              if (t(l[v].value, m[d].value) === 0 && l[v].identifier === m[d].identifier) {
                s.push(l[v]);
                break
              }
        }
        return Array.isArray(c) && Array.isArray(u) ? Va(s) : new o(Va(s))
      }
    })
  }),
  oc = "setIsSubset",
  U2 = ["typed", "size", "subset", "compareNatural", "Index"],
  L2 = z(oc, U2, e => {
    var {
      typed: r,
      size: i,
      subset: n,
      compareNatural: t,
      Index: a
    } = e;
    return r(oc, {
      "Array | Matrix, Array | Matrix": function(f, c) {
        if (n(i(f), new a(0)) === 0) return !0;
        if (n(i(c), new a(0)) === 0) return !1;
        for (var u = En(Xe(Array.isArray(f) ? f : f.toArray()).sort(t)), s = En(Xe(Array.isArray(c) ? c : c.toArray()).sort(t)), l, m = 0; m < u.length; m++) {
          l = !1;
          for (var v = 0; v < s.length; v++)
            if (t(u[m].value, s[v].value) === 0 && u[m].identifier === s[v].identifier) {
              l = !0;
              break
            } if (l === !1) return !1
        }
        return !0
      }
    })
  }),
  sc = "setMultiplicity",
  k2 = ["typed", "size", "subset", "compareNatural", "Index"],
  H2 = z(sc, k2, e => {
    var {
      typed: r,
      size: i,
      subset: n,
      compareNatural: t,
      Index: a
    } = e;
    return r(sc, {
      "number | BigNumber | Fraction | Complex, Array | Matrix": function(f, c) {
        if (n(i(c), new a(0)) === 0) return 0;
        for (var u = Xe(Array.isArray(c) ? c : c.toArray()), s = 0, l = 0; l < u.length; l++) t(u[l], f) === 0 && s++;
        return s
      }
    })
  }),
  uc = "setPowerset",
  G2 = ["typed", "size", "subset", "compareNatural", "Index"],
  V2 = z(uc, G2, e => {
    var {
      typed: r,
      size: i,
      subset: n,
      compareNatural: t,
      Index: a
    } = e;
    return r(uc, {
      "Array | Matrix": function(u) {
        if (n(i(u), new a(0)) === 0) return [];
        for (var s = Xe(Array.isArray(u) ? u : u.toArray()).sort(t), l = [], m = 0; m.toString(2).length <= s.length;) l.push(o(s, m.toString(2).split("").reverse())), m++;
        return f(l)
      }
    });

    function o(c, u) {
      for (var s = [], l = 0; l < u.length; l++) u[l] === "1" && s.push(c[l]);
      return s
    }

    function f(c) {
      for (var u = [], s = c.length - 1; s > 0; s--)
        for (var l = 0; l < s; l++) c[l].length > c[l + 1].length && (u = c[l], c[l] = c[l + 1], c[l + 1] = u);
      return c
    }
  }),
  lc = "setSize",
  Z2 = ["typed", "compareNatural"],
  Y2 = z(lc, Z2, e => {
    var {
      typed: r,
      compareNatural: i
    } = e;
    return r(lc, {
      "Array | Matrix": function(t) {
        return Array.isArray(t) ? Xe(t).length : Xe(t.toArray()).length
      },
      "Array | Matrix, boolean": function(t, a) {
        if (a === !1 || t.length === 0) return Array.isArray(t) ? Xe(t).length : Xe(t.toArray()).length;
        for (var o = Xe(Array.isArray(t) ? t : t.toArray()).sort(i), f = 1, c = 1; c < o.length; c++) i(o[c], o[c - 1]) !== 0 && f++;
        return f
      }
    })
  }),
  cc = "setSymDifference",
  W2 = ["typed", "size", "concat", "subset", "setDifference", "Index"],
  Q2 = z(cc, W2, e => {
    var {
      typed: r,
      size: i,
      concat: n,
      subset: t,
      setDifference: a,
      Index: o
    } = e;
    return r(cc, {
      "Array | Matrix, Array | Matrix": function(c, u) {
        if (t(i(c), new o(0)) === 0) return Xe(u);
        if (t(i(u), new o(0)) === 0) return Xe(c);
        var s = Xe(c),
          l = Xe(u);
        return n(a(s, l), a(l, s))
      }
    })
  }),
  fc = "setUnion",
  X2 = ["typed", "size", "concat", "subset", "setIntersect", "setSymDifference", "Index"],
  J2 = z(fc, X2, e => {
    var {
      typed: r,
      size: i,
      concat: n,
      subset: t,
      setIntersect: a,
      setSymDifference: o,
      Index: f
    } = e;
    return r(fc, {
      "Array | Matrix, Array | Matrix": function(u, s) {
        if (t(i(u), new f(0)) === 0) return Xe(s);
        if (t(i(s), new f(0)) === 0) return Xe(u);
        var l = Xe(u),
          m = Xe(s);
        return n(o(l, m), a(l, m))
      }
    })
  }),
  mc = "add",
  K2 = ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix", "concat"],
  j2 = z(mc, K2, e => {
    var {
      typed: r,
      matrix: i,
      addScalar: n,
      equalScalar: t,
      DenseMatrix: a,
      SparseMatrix: o,
      concat: f
    } = e, c = Lt({
      typed: r
    }), u = Do({
      typed: r,
      equalScalar: t
    }), s = Jt({
      typed: r,
      DenseMatrix: a
    }), l = or({
      typed: r,
      matrix: i,
      concat: f
    });
    return r(mc, {
      "any, any": n,
      "any, any, ...any": r.referToSelf(m => (v, d, p) => {
        for (var b = m(v, d), g = 0; g < p.length; g++) b = m(b, p[g]);
        return b
      })
    }, l({
      elop: n,
      DS: c,
      SS: u,
      Ss: s
    }))
  }),
  vc = "hypot",
  eD = ["typed", "abs", "addScalar", "divideScalar", "multiplyScalar", "sqrt", "smaller", "isPositive"],
  rD = z(vc, eD, e => {
    var {
      typed: r,
      abs: i,
      addScalar: n,
      divideScalar: t,
      multiplyScalar: a,
      sqrt: o,
      smaller: f,
      isPositive: c
    } = e;
    return r(vc, {
      "... number | BigNumber": u,
      Array: u,
      Matrix: s => u(Xe(s.toArray()))
    });

    function u(s) {
      for (var l = 0, m = 0, v = 0; v < s.length; v++) {
        if (Dt(s[v])) throw new TypeError("Unexpected type of argument to hypot");
        var d = i(s[v]);
        f(m, d) ? (l = a(l, a(t(m, d), t(m, d))), l = n(l, 1), m = d) : l = n(l, c(d) ? a(t(d, m), t(d, m)) : d)
      }
      return a(m, o(l))
    }
  }),
  pc = "norm",
  tD = ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"],
  nD = z(pc, tD, e => {
    var {
      typed: r,
      abs: i,
      add: n,
      pow: t,
      conj: a,
      sqrt: o,
      multiply: f,
      equalScalar: c,
      larger: u,
      smaller: s,
      matrix: l,
      ctranspose: m,
      eigs: v
    } = e;
    return r(pc, {
      number: Math.abs,
      Complex: function(E) {
        return E.abs()
      },
      BigNumber: function(E) {
        return E.abs()
      },
      boolean: function(E) {
        return Math.abs(E)
      },
      Array: function(E) {
        return y(l(E), 2)
      },
      Matrix: function(E) {
        return y(E, 2)
      },
      "Array, number | BigNumber | string": function(E, D) {
        return y(l(E), D)
      },
      "Matrix, number | BigNumber | string": function(E, D) {
        return y(E, D)
      }
    });

    function d(A) {
      var E = 0;
      return A.forEach(function(D) {
        var S = i(D);
        u(S, E) && (E = S)
      }, !0), E
    }

    function p(A) {
      var E;
      return A.forEach(function(D) {
        var S = i(D);
        (!E || s(S, E)) && (E = S)
      }, !0), E || 0
    }

    function b(A, E) {
      if (E === Number.POSITIVE_INFINITY || E === "inf") return d(A);
      if (E === Number.NEGATIVE_INFINITY || E === "-inf") return p(A);
      if (E === "fro") return y(A, 2);
      if (typeof E == "number" && !isNaN(E)) {
        if (!c(E, 0)) {
          var D = 0;
          return A.forEach(function(S) {
            D = n(t(i(S), E), D)
          }, !0), t(D, 1 / E)
        }
        return Number.POSITIVE_INFINITY
      }
      throw new Error("Unsupported parameter value")
    }

    function g(A) {
      var E = 0;
      return A.forEach(function(D, S) {
        E = n(E, f(D, a(D)))
      }), i(o(E))
    }

    function N(A) {
      var E = [],
        D = 0;
      return A.forEach(function(S, C) {
        var M = C[1],
          $ = n(E[M] || 0, i(S));
        u($, D) && (D = $), E[M] = $
      }, !0), D
    }

    function h(A) {
      var E = A.size();
      if (E[0] !== E[1]) throw new RangeError("Invalid matrix dimensions");
      var D = m(A),
        S = f(D, A),
        C = v(S).values.toArray(),
        M = C[C.length - 1];
      return i(o(M))
    }

    function x(A) {
      var E = [],
        D = 0;
      return A.forEach(function(S, C) {
        var M = C[0],
          $ = n(E[M] || 0, i(S));
        u($, D) && (D = $), E[M] = $
      }, !0), D
    }

    function w(A, E) {
      if (E === 1) return N(A);
      if (E === Number.POSITIVE_INFINITY || E === "inf") return x(A);
      if (E === "fro") return g(A);
      if (E === 2) return h(A);
      throw new Error("Unsupported parameter value " + E)
    }

    function y(A, E) {
      var D = A.size();
      if (D.length === 1) return b(A, E);
      if (D.length === 2) {
        if (D[0] && D[1]) return w(A, E);
        throw new RangeError("Invalid matrix dimensions")
      }
    }
  }),
  dc = "dot",
  aD = ["typed", "addScalar", "multiplyScalar", "conj", "size"],
  iD = z(dc, aD, e => {
    var {
      typed: r,
      addScalar: i,
      multiplyScalar: n,
      conj: t,
      size: a
    } = e;
    return r(dc, {
      "Array | DenseMatrix, Array | DenseMatrix": f,
      "SparseMatrix, SparseMatrix": c
    });

    function o(s, l) {
      var m = u(s),
        v = u(l),
        d, p;
      if (m.length === 1) d = m[0];
      else if (m.length === 2 && m[1] === 1) d = m[0];
      else throw new RangeError("Expected a column vector, instead got a matrix of size (" + m.join(", ") + ")");
      if (v.length === 1) p = v[0];
      else if (v.length === 2 && v[1] === 1) p = v[0];
      else throw new RangeError("Expected a column vector, instead got a matrix of size (" + v.join(", ") + ")");
      if (d !== p) throw new RangeError("Vectors must have equal length (" + d + " != " + p + ")");
      if (d === 0) throw new RangeError("Cannot calculate the dot product of empty vectors");
      return d
    }

    function f(s, l) {
      var m = o(s, l),
        v = Fe(s) ? s._data : s,
        d = Fe(s) ? s._datatype : void 0,
        p = Fe(l) ? l._data : l,
        b = Fe(l) ? l._datatype : void 0,
        g = u(s).length === 2,
        N = u(l).length === 2,
        h = i,
        x = n;
      if (d && b && d === b && typeof d == "string") {
        var w = d;
        h = r.find(i, [w, w]), x = r.find(n, [w, w])
      }
      if (!g && !N) {
        for (var y = x(t(v[0]), p[0]), A = 1; A < m; A++) y = h(y, x(t(v[A]), p[A]));
        return y
      }
      if (!g && N) {
        for (var E = x(t(v[0]), p[0][0]), D = 1; D < m; D++) E = h(E, x(t(v[D]), p[D][0]));
        return E
      }
      if (g && !N) {
        for (var S = x(t(v[0][0]), p[0]), C = 1; C < m; C++) S = h(S, x(t(v[C][0]), p[C]));
        return S
      }
      if (g && N) {
        for (var M = x(t(v[0][0]), p[0][0]), $ = 1; $ < m; $++) M = h(M, x(t(v[$][0]), p[$][0]));
        return M
      }
    }

    function c(s, l) {
      o(s, l);
      for (var m = s._index, v = s._values, d = l._index, p = l._values, b = 0, g = i, N = n, h = 0, x = 0; h < m.length && x < d.length;) {
        var w = m[h],
          y = d[x];
        if (w < y) {
          h++;
          continue
        }
        if (w > y) {
          x++;
          continue
        }
        w === y && (b = g(b, N(v[h], p[x])), h++, x++)
      }
      return b
    }

    function u(s) {
      return Fe(s) ? s.size() : a(s)
    }
  }),
  oD = "trace",
  sD = ["typed", "matrix", "add"],
  uD = z(oD, sD, e => {
    var {
      typed: r,
      matrix: i,
      add: n
    } = e;
    return r("trace", {
      Array: function(f) {
        return t(i(f))
      },
      SparseMatrix: a,
      DenseMatrix: t,
      any: $e
    });

    function t(o) {
      var f = o._size,
        c = o._data;
      switch (f.length) {
        case 1:
          if (f[0] === 1) return $e(c[0]);
          throw new RangeError("Matrix must be square (size: " + ze(f) + ")");
        case 2: {
          var u = f[0],
            s = f[1];
          if (u === s) {
            for (var l = 0, m = 0; m < u; m++) l = n(l, c[m][m]);
            return l
          } else throw new RangeError("Matrix must be square (size: " + ze(f) + ")")
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + ze(f) + ")")
      }
    }

    function a(o) {
      var f = o._values,
        c = o._index,
        u = o._ptr,
        s = o._size,
        l = s[0],
        m = s[1];
      if (l === m) {
        var v = 0;
        if (f.length > 0)
          for (var d = 0; d < m; d++)
            for (var p = u[d], b = u[d + 1], g = p; g < b; g++) {
              var N = c[g];
              if (N === d) {
                v = n(v, f[g]);
                break
              }
              if (N > d) break
            }
        return v
      }
      throw new RangeError("Matrix must be square (size: " + ze(s) + ")")
    }
  }),
  hc = "index",
  lD = ["typed", "Index"],
  cD = z(hc, lD, e => {
    var {
      typed: r,
      Index: i
    } = e;
    return r(hc, {
      "...number | string | BigNumber | Range | Array | Matrix": function(t) {
        var a = t.map(function(f) {
            return He(f) ? f.toNumber() : Je(f) || Fe(f) ? f.map(function(c) {
              return He(c) ? c.toNumber() : c
            }) : f
          }),
          o = new i;
        return i.apply(o, a), o
      }
    })
  }),
  Tv = new Set(["end"]),
  fD = "Node",
  mD = ["mathWithTransform"],
  vD = z(fD, mD, e => {
    var {
      mathWithTransform: r
    } = e;

    function i(t) {
      for (var a of [...Tv])
        if (t.has(a)) throw new Error('Scope contains an illegal symbol, "' + a + '" is a reserved keyword')
    }
    class n {
      get type() {
        return "Node"
      }
      get isNode() {
        return !0
      }
      evaluate(a) {
        return this.compile().evaluate(a)
      }
      compile() {
        var a = this._compile(r, {}),
          o = {},
          f = null;

        function c(u) {
          var s = wn(u);
          return i(s), a(s, o, f)
        }
        return {
          evaluate: c
        }
      }
      _compile(a, o) {
        throw new Error("Method _compile must be implemented by type " + this.type)
      }
      forEach(a) {
        throw new Error("Cannot run forEach on a Node interface")
      }
      map(a) {
        throw new Error("Cannot run map on a Node interface")
      }
      _ifNode(a) {
        if (!er(a)) throw new TypeError("Callback function must return a Node");
        return a
      }
      traverse(a) {
        a(this, null, null);

        function o(f, c) {
          f.forEach(function(u, s, l) {
            c(u, s, l), o(u, c)
          })
        }
        o(this, a)
      }
      transform(a) {
        function o(f, c, u) {
          var s = a(f, c, u);
          return s !== f ? s : f.map(o)
        }
        return o(this, null, null)
      }
      filter(a) {
        var o = [];
        return this.traverse(function(f, c, u) {
          a(f, c, u) && o.push(f)
        }), o
      }
      clone() {
        throw new Error("Cannot clone a Node interface")
      }
      cloneDeep() {
        return this.map(function(a) {
          return a.cloneDeep()
        })
      }
      equals(a) {
        return a ? this.type === a.type && Qt(this, a) : !1
      }
      toString(a) {
        var o = this._getCustomString(a);
        return typeof o < "u" ? o : this._toString(a)
      }
      toJSON() {
        throw new Error("Cannot serialize object: toJSON not implemented by " + this.type)
      }
      toHTML(a) {
        var o = this._getCustomString(a);
        return typeof o < "u" ? o : this.toHTML(a)
      }
      _toString() {
        throw new Error("_toString not implemented for " + this.type)
      }
      toTex(a) {
        var o = this._getCustomString(a);
        return typeof o < "u" ? o : this._toTex(a)
      }
      _toTex(a) {
        throw new Error("_toTex not implemented for " + this.type)
      }
      _getCustomString(a) {
        if (a && typeof a == "object") switch (typeof a.handler) {
          case "object":
          case "undefined":
            return;
          case "function":
            return a.handler(this, a);
          default:
            throw new TypeError("Object or function expected as callback")
        }
      }
      getIdentifier() {
        return this.type
      }
      getContent() {
        return this
      }
    }
    return n
  }, {
    isClass: !0,
    isNode: !0
  });

function Ir(e) {
  return e && e.isIndexError ? new it(e.index + 1, e.min + 1, e.max !== void 0 ? e.max + 1 : void 0) : e
}

function Ov(e) {
  var {
    subset: r
  } = e;
  return function(n, t) {
    try {
      if (Array.isArray(n)) return r(n, t);
      if (n && typeof n.subset == "function") return n.subset(t);
      if (typeof n == "string") return r(n, t);
      if (typeof n == "object") {
        if (!t.isObjectProperty()) throw new TypeError("Cannot apply a numeric index as object property");
        return Fr(n, t.getObjectProperty())
      } else throw new TypeError("Cannot apply index: unsupported type of object")
    } catch (a) {
      throw Ir(a)
    }
  }
}
var Da = "AccessorNode",
  pD = ["subset", "Node"],
  dD = z(Da, pD, e => {
    var {
      subset: r,
      Node: i
    } = e, n = Ov({
      subset: r
    });

    function t(o) {
      return !(Wt(o) || Zr(o) || Qe(o) || Rt(o) || mi(o) || St(o) || yr(o))
    }
    class a extends i {
      constructor(f, c) {
        if (super(), !er(f)) throw new TypeError('Node expected for parameter "object"');
        if (!On(c)) throw new TypeError('IndexNode expected for parameter "index"');
        this.object = f, this.index = c
      }
      get name() {
        return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || ""
      }
      get type() {
        return Da
      }
      get isAccessorNode() {
        return !0
      }
      _compile(f, c) {
        var u = this.object._compile(f, c),
          s = this.index._compile(f, c);
        if (this.index.isObjectProperty()) {
          var l = this.index.getObjectProperty();
          return function(v, d, p) {
            return Fr(u(v, d, p), l)
          }
        } else return function(v, d, p) {
          var b = u(v, d, p),
            g = s(v, d, b);
          return n(b, g)
        }
      }
      forEach(f) {
        f(this.object, "object", this), f(this.index, "index", this)
      }
      map(f) {
        return new a(this._ifNode(f(this.object, "object", this)), this._ifNode(f(this.index, "index", this)))
      }
      clone() {
        return new a(this.object, this.index)
      }
      _toString(f) {
        var c = this.object.toString(f);
        return t(this.object) && (c = "(" + c + ")"), c + this.index.toString(f)
      }
      toHTML(f) {
        var c = this.object.toHTML(f);
        return t(this.object) && (c = '<span class="math-parenthesis math-round-parenthesis">(</span>' + c + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c + this.index.toHTML(f)
      }
      _toTex(f) {
        var c = this.object.toTex(f);
        return t(this.object) && (c = "\\left(' + object + '\\right)"), c + this.index.toTex(f)
      }
      toJSON() {
        return {
          mathjs: Da,
          object: this.object,
          index: this.index
        }
      }
      static fromJSON(f) {
        return new a(f.object, f.index)
      }
    }
    return dr(a, "name", Da), a
  }, {
    isClass: !0,
    isNode: !0
  }),
  Aa = "ArrayNode",
  hD = ["Node"],
  gD = z(Aa, hD, e => {
    var {
      Node: r
    } = e;
    class i extends r {
      constructor(t) {
        if (super(), this.items = t || [], !Array.isArray(this.items) || !this.items.every(er)) throw new TypeError("Array containing Nodes expected")
      }
      get type() {
        return Aa
      }
      get isArrayNode() {
        return !0
      }
      _compile(t, a) {
        var o = At(this.items, function(u) {
            return u._compile(t, a)
          }),
          f = t.config.matrix !== "Array";
        if (f) {
          var c = t.matrix;
          return function(s, l, m) {
            return c(At(o, function(v) {
              return v(s, l, m)
            }))
          }
        } else return function(s, l, m) {
          return At(o, function(v) {
            return v(s, l, m)
          })
        }
      }
      forEach(t) {
        for (var a = 0; a < this.items.length; a++) {
          var o = this.items[a];
          t(o, "items[" + a + "]", this)
        }
      }
      map(t) {
        for (var a = [], o = 0; o < this.items.length; o++) a[o] = this._ifNode(t(this.items[o], "items[" + o + "]", this));
        return new i(a)
      }
      clone() {
        return new i(this.items.slice(0))
      }
      _toString(t) {
        var a = this.items.map(function(o) {
          return o.toString(t)
        });
        return "[" + a.join(", ") + "]"
      }
      toJSON() {
        return {
          mathjs: Aa,
          items: this.items
        }
      }
      static fromJSON(t) {
        return new i(t.items)
      }
      toHTML(t) {
        var a = this.items.map(function(o) {
          return o.toHTML(t)
        });
        return '<span class="math-parenthesis math-square-parenthesis">[</span>' + a.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>'
      }
      _toTex(t) {
        function a(o, f) {
          var c = o.some(Zr) && !o.every(Zr),
            u = f || c,
            s = u ? "&" : "\\\\",
            l = o.map(function(m) {
              return m.items ? a(m.items, !f) : m.toTex(t)
            }).join(s);
          return c || !u || u && !f ? "\\begin{bmatrix}" + l + "\\end{bmatrix}" : l
        }
        return a(this.items, !1)
      }
    }
    return dr(i, "name", Aa), i
  }, {
    isClass: !0,
    isNode: !0
  });

function yD(e) {
  var {
    subset: r,
    matrix: i
  } = e;
  return function(t, a, o) {
    try {
      if (Array.isArray(t)) {
        var f = i(t).subset(a, o).valueOf();
        return f.forEach((c, u) => {
          t[u] = c
        }), t
      } else {
        if (t && typeof t.subset == "function") return t.subset(a, o);
        if (typeof t == "string") return r(t, a, o);
        if (typeof t == "object") {
          if (!a.isObjectProperty()) throw TypeError("Cannot apply a numeric index as object property");
          return Sn(t, a.getObjectProperty(), o), t
        } else throw new TypeError("Cannot apply index: unsupported type of object")
      }
    } catch (c) {
      throw Ir(c)
    }
  }
}
var rt = [{
  AssignmentNode: {},
  FunctionAssignmentNode: {}
}, {
  ConditionalNode: {
    latexLeftParens: !1,
    latexRightParens: !1,
    latexParens: !1
  }
}, {
  "OperatorNode:or": {
    op: "or",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:xor": {
    op: "xor",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:and": {
    op: "and",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:bitOr": {
    op: "|",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:bitXor": {
    op: "^|",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:bitAnd": {
    op: "&",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:equal": {
    op: "==",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:unequal": {
    op: "!=",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:smaller": {
    op: "<",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:larger": {
    op: ">",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:smallerEq": {
    op: "<=",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:largerEq": {
    op: ">=",
    associativity: "left",
    associativeWith: []
  },
  RelationalNode: {
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:leftShift": {
    op: "<<",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:rightArithShift": {
    op: ">>",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:rightLogShift": {
    op: ">>>",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:to": {
    op: "to",
    associativity: "left",
    associativeWith: []
  }
}, {
  RangeNode: {}
}, {
  "OperatorNode:add": {
    op: "+",
    associativity: "left",
    associativeWith: ["OperatorNode:add", "OperatorNode:subtract"]
  },
  "OperatorNode:subtract": {
    op: "-",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:multiply": {
    op: "*",
    associativity: "left",
    associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
  },
  "OperatorNode:divide": {
    op: "/",
    associativity: "left",
    associativeWith: [],
    latexLeftParens: !1,
    latexRightParens: !1,
    latexParens: !1
  },
  "OperatorNode:dotMultiply": {
    op: ".*",
    associativity: "left",
    associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"]
  },
  "OperatorNode:dotDivide": {
    op: "./",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:mod": {
    op: "mod",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:multiply": {
    associativity: "left",
    associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
  }
}, {
  "OperatorNode:unaryPlus": {
    op: "+",
    associativity: "right"
  },
  "OperatorNode:unaryMinus": {
    op: "-",
    associativity: "right"
  },
  "OperatorNode:bitNot": {
    op: "~",
    associativity: "right"
  },
  "OperatorNode:not": {
    op: "not",
    associativity: "right"
  }
}, {
  "OperatorNode:pow": {
    op: "^",
    associativity: "right",
    associativeWith: [],
    latexRightParens: !1
  },
  "OperatorNode:dotPow": {
    op: ".^",
    associativity: "right",
    associativeWith: []
  }
}, {
  "OperatorNode:factorial": {
    op: "!",
    associativity: "left"
  }
}, {
  "OperatorNode:ctranspose": {
    op: "'",
    associativity: "left"
  }
}];

function Ea(e, r) {
  if (!r || r !== "auto") return e;
  for (var i = e; St(i);) i = i.content;
  return i
}

function nr(e, r, i, n) {
  var t = e;
  r !== "keep" && (t = e.getContent());
  for (var a = t.getIdentifier(), o = null, f = 0; f < rt.length; f++)
    if (a in rt[f]) {
      o = f;
      break
    } if (a === "OperatorNode:multiply" && t.implicit && i !== "show") {
    var c = Ea(t.args[0], r);
    !(Qe(c) && n && n.getIdentifier() === "OperatorNode:divide" && Vi(Ea(n.args[0], r))) && !(c.getIdentifier() === "OperatorNode:divide" && Vi(Ea(c.args[0], r)) && Qe(Ea(c.args[1]))) && (o += 1)
  }
  return o
}

function Qn(e, r) {
  var i = e;
  r !== "keep" && (i = e.getContent());
  var n = i.getIdentifier(),
    t = nr(i, r);
  if (t === null) return null;
  var a = rt[t][n];
  if (Ee(a, "associativity")) {
    if (a.associativity === "left") return "left";
    if (a.associativity === "right") return "right";
    throw Error("'" + n + "' has the invalid associativity '" + a.associativity + "'.")
  }
  return null
}

function Ui(e, r, i) {
  var n = i !== "keep" ? e.getContent() : e,
    t = i !== "keep" ? e.getContent() : r,
    a = n.getIdentifier(),
    o = t.getIdentifier(),
    f = nr(n, i);
  if (f === null) return null;
  var c = rt[f][a];
  if (Ee(c, "associativeWith") && c.associativeWith instanceof Array) {
    for (var u = 0; u < c.associativeWith.length; u++)
      if (c.associativeWith[u] === o) return !0;
    return !1
  }
  return null
}

function bD(e) {
  var r = "OperatorNode:" + e;
  for (var i of rt)
    if (r in i) return i[r].op;
  return null
}
var Sa = "AssignmentNode",
  xD = ["subset", "?matrix", "Node"],
  wD = z(Sa, xD, e => {
    var {
      subset: r,
      matrix: i,
      Node: n
    } = e, t = Ov({
      subset: r
    }), a = yD({
      subset: r,
      matrix: i
    });

    function o(c, u, s) {
      u || (u = "keep");
      var l = nr(c, u, s),
        m = nr(c.value, u, s);
      return u === "all" || m !== null && m <= l
    }
    class f extends n {
      constructor(u, s, l) {
        if (super(), this.object = u, this.index = l ? s : null, this.value = l || s, !yr(u) && !Wt(u)) throw new TypeError('SymbolNode or AccessorNode expected as "object"');
        if (yr(u) && u.name === "end") throw new Error('Cannot assign to symbol "end"');
        if (this.index && !On(this.index)) throw new TypeError('IndexNode expected as "index"');
        if (!er(this.value)) throw new TypeError('Node expected as "value"')
      }
      get name() {
        return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || ""
      }
      get type() {
        return Sa
      }
      get isAssignmentNode() {
        return !0
      }
      _compile(u, s) {
        var l = this.object._compile(u, s),
          m = this.index ? this.index._compile(u, s) : null,
          v = this.value._compile(u, s),
          d = this.object.name;
        if (this.index)
          if (this.index.isObjectProperty()) {
            var p = this.index.getObjectProperty();
            return function(x, w, y) {
              var A = l(x, w, y),
                E = v(x, w, y);
              return Sn(A, p, E), E
            }
          } else {
            if (yr(this.object)) return function(x, w, y) {
              var A = l(x, w, y),
                E = v(x, w, y),
                D = m(x, w, A);
              return x.set(d, a(A, D, E)), E
            };
            var b = this.object.object._compile(u, s);
            if (this.object.index.isObjectProperty()) {
              var g = this.object.index.getObjectProperty();
              return function(x, w, y) {
                var A = b(x, w, y),
                  E = Fr(A, g),
                  D = m(x, w, E),
                  S = v(x, w, y);
                return Sn(A, g, a(E, D, S)), S
              }
            } else {
              var N = this.object.index._compile(u, s);
              return function(x, w, y) {
                var A = b(x, w, y),
                  E = N(x, w, A),
                  D = t(A, E),
                  S = m(x, w, D),
                  C = v(x, w, y);
                return a(A, E, a(D, S, C)), C
              }
            }
          }
        else {
          if (!yr(this.object)) throw new TypeError("SymbolNode expected as object");
          return function(x, w, y) {
            var A = v(x, w, y);
            return x.set(d, A), A
          }
        }
      }
      forEach(u) {
        u(this.object, "object", this), this.index && u(this.index, "index", this), u(this.value, "value", this)
      }
      map(u) {
        var s = this._ifNode(u(this.object, "object", this)),
          l = this.index ? this._ifNode(u(this.index, "index", this)) : null,
          m = this._ifNode(u(this.value, "value", this));
        return new f(s, l, m)
      }
      clone() {
        return new f(this.object, this.index, this.value)
      }
      _toString(u) {
        var s = this.object.toString(u),
          l = this.index ? this.index.toString(u) : "",
          m = this.value.toString(u);
        return o(this, u && u.parenthesis, u && u.implicit) && (m = "(" + m + ")"), s + l + " = " + m
      }
      toJSON() {
        return {
          mathjs: Sa,
          object: this.object,
          index: this.index,
          value: this.value
        }
      }
      static fromJSON(u) {
        return new f(u.object, u.index, u.value)
      }
      toHTML(u) {
        var s = this.object.toHTML(u),
          l = this.index ? this.index.toHTML(u) : "",
          m = this.value.toHTML(u);
        return o(this, u && u.parenthesis, u && u.implicit) && (m = '<span class="math-paranthesis math-round-parenthesis">(</span>' + m + '<span class="math-paranthesis math-round-parenthesis">)</span>'), s + l + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + m
      }
      _toTex(u) {
        var s = this.object.toTex(u),
          l = this.index ? this.index.toTex(u) : "",
          m = this.value.toTex(u);
        return o(this, u && u.parenthesis, u && u.implicit) && (m = "\\left(".concat(m, "\\right)")), s + l + "=" + m
      }
    }
    return dr(f, "name", Sa), f
  }, {
    isClass: !0,
    isNode: !0
  }),
  Ca = "BlockNode",
  ND = ["ResultSet", "Node"],
  DD = z(Ca, ND, e => {
    var {
      ResultSet: r,
      Node: i
    } = e;
    class n extends i {
      constructor(a) {
        if (super(), !Array.isArray(a)) throw new Error("Array expected");
        this.blocks = a.map(function(o) {
          var f = o && o.node,
            c = o && o.visible !== void 0 ? o.visible : !0;
          if (!er(f)) throw new TypeError('Property "node" must be a Node');
          if (typeof c != "boolean") throw new TypeError('Property "visible" must be a boolean');
          return {
            node: f,
            visible: c
          }
        })
      }
      get type() {
        return Ca
      }
      get isBlockNode() {
        return !0
      }
      _compile(a, o) {
        var f = At(this.blocks, function(c) {
          return {
            evaluate: c.node._compile(a, o),
            visible: c.visible
          }
        });
        return function(u, s, l) {
          var m = [];
          return di(f, function(d) {
            var p = d.evaluate(u, s, l);
            d.visible && m.push(p)
          }), new r(m)
        }
      }
      forEach(a) {
        for (var o = 0; o < this.blocks.length; o++) a(this.blocks[o].node, "blocks[" + o + "].node", this)
      }
      map(a) {
        for (var o = [], f = 0; f < this.blocks.length; f++) {
          var c = this.blocks[f],
            u = this._ifNode(a(c.node, "blocks[" + f + "].node", this));
          o[f] = {
            node: u,
            visible: c.visible
          }
        }
        return new n(o)
      }
      clone() {
        var a = this.blocks.map(function(o) {
          return {
            node: o.node,
            visible: o.visible
          }
        });
        return new n(a)
      }
      _toString(a) {
        return this.blocks.map(function(o) {
          return o.node.toString(a) + (o.visible ? "" : ";")
        }).join(`
`)
      }
      toJSON() {
        return {
          mathjs: Ca,
          blocks: this.blocks
        }
      }
      static fromJSON(a) {
        return new n(a.blocks)
      }
      toHTML(a) {
        return this.blocks.map(function(o) {
          return o.node.toHTML(a) + (o.visible ? "" : '<span class="math-separator">;</span>')
        }).join('<span class="math-separator"><br /></span>')
      }
      _toTex(a) {
        return this.blocks.map(function(o) {
          return o.node.toTex(a) + (o.visible ? "" : ";")
        }).join(`\\;\\;
`)
      }
    }
    return dr(n, "name", Ca), n
  }, {
    isClass: !0,
    isNode: !0
  }),
  Ma = "ConditionalNode",
  AD = ["Node"],
  ED = z(Ma, AD, e => {
    var {
      Node: r
    } = e;

    function i(t) {
      if (typeof t == "number" || typeof t == "boolean" || typeof t == "string") return !!t;
      if (t) {
        if (He(t)) return !t.isZero();
        if (Dt(t)) return !!(t.re || t.im);
        if (Yr(t)) return !!t.value
      }
      if (t == null) return !1;
      throw new TypeError('Unsupported type of condition "' + ar(t) + '"')
    }
    class n extends r {
      constructor(a, o, f) {
        if (super(), !er(a)) throw new TypeError("Parameter condition must be a Node");
        if (!er(o)) throw new TypeError("Parameter trueExpr must be a Node");
        if (!er(f)) throw new TypeError("Parameter falseExpr must be a Node");
        this.condition = a, this.trueExpr = o, this.falseExpr = f
      }
      get type() {
        return Ma
      }
      get isConditionalNode() {
        return !0
      }
      _compile(a, o) {
        var f = this.condition._compile(a, o),
          c = this.trueExpr._compile(a, o),
          u = this.falseExpr._compile(a, o);
        return function(l, m, v) {
          return i(f(l, m, v)) ? c(l, m, v) : u(l, m, v)
        }
      }
      forEach(a) {
        a(this.condition, "condition", this), a(this.trueExpr, "trueExpr", this), a(this.falseExpr, "falseExpr", this)
      }
      map(a) {
        return new n(this._ifNode(a(this.condition, "condition", this)), this._ifNode(a(this.trueExpr, "trueExpr", this)), this._ifNode(a(this.falseExpr, "falseExpr", this)))
      }
      clone() {
        return new n(this.condition, this.trueExpr, this.falseExpr)
      }
      _toString(a) {
        var o = a && a.parenthesis ? a.parenthesis : "keep",
          f = nr(this, o, a && a.implicit),
          c = this.condition.toString(a),
          u = nr(this.condition, o, a && a.implicit);
        (o === "all" || this.condition.type === "OperatorNode" || u !== null && u <= f) && (c = "(" + c + ")");
        var s = this.trueExpr.toString(a),
          l = nr(this.trueExpr, o, a && a.implicit);
        (o === "all" || this.trueExpr.type === "OperatorNode" || l !== null && l <= f) && (s = "(" + s + ")");
        var m = this.falseExpr.toString(a),
          v = nr(this.falseExpr, o, a && a.implicit);
        return (o === "all" || this.falseExpr.type === "OperatorNode" || v !== null && v <= f) && (m = "(" + m + ")"), c + " ? " + s + " : " + m
      }
      toJSON() {
        return {
          mathjs: Ma,
          condition: this.condition,
          trueExpr: this.trueExpr,
          falseExpr: this.falseExpr
        }
      }
      static fromJSON(a) {
        return new n(a.condition, a.trueExpr, a.falseExpr)
      }
      toHTML(a) {
        var o = a && a.parenthesis ? a.parenthesis : "keep",
          f = nr(this, o, a && a.implicit),
          c = this.condition.toHTML(a),
          u = nr(this.condition, o, a && a.implicit);
        (o === "all" || this.condition.type === "OperatorNode" || u !== null && u <= f) && (c = '<span class="math-parenthesis math-round-parenthesis">(</span>' + c + '<span class="math-parenthesis math-round-parenthesis">)</span>');
        var s = this.trueExpr.toHTML(a),
          l = nr(this.trueExpr, o, a && a.implicit);
        (o === "all" || this.trueExpr.type === "OperatorNode" || l !== null && l <= f) && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>');
        var m = this.falseExpr.toHTML(a),
          v = nr(this.falseExpr, o, a && a.implicit);
        return (o === "all" || this.falseExpr.type === "OperatorNode" || v !== null && v <= f) && (m = '<span class="math-parenthesis math-round-parenthesis">(</span>' + m + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c + '<span class="math-operator math-conditional-operator">?</span>' + s + '<span class="math-operator math-conditional-operator">:</span>' + m
      }
      _toTex(a) {
        return "\\begin{cases} {" + this.trueExpr.toTex(a) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(a) + "}\\\\{" + this.falseExpr.toTex(a) + "}, &\\quad{\\text{otherwise}}\\end{cases}"
      }
    }
    return dr(n, "name", Ma), n
  }, {
    isClass: !0,
    isNode: !0
  }),
  no = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
    }
    return e
  },
  SD = {
    "{": "\\{",
    "}": "\\}",
    "\\": "\\textbackslash{}",
    "#": "\\#",
    $: "\\$",
    "%": "\\%",
    "&": "\\&",
    "^": "\\textasciicircum{}",
    _: "\\_",
    "~": "\\textasciitilde{}"
  },
  CD = {
    "–": "\\--",
    "—": "\\---",
    " ": "~",
    "	": "\\qquad{}",
    "\r\n": "\\newline{}",
    "\n": "\\newline{}"
  },
  MD = function(r, i) {
    return no({}, r, i)
  },
  FD = function(e) {
    for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.preserveFormatting, n = i === void 0 ? !1 : i, t = r.escapeMapFn, a = t === void 0 ? MD : t, o = String(e), f = "", c = a(no({}, SD), n ? no({}, CD) : {}), u = Object.keys(c), s = function() {
        var m = !1;
        u.forEach(function(v, d) {
          m || o.length >= v.length && o.slice(0, v.length) === v && (f += c[u[d]], o = o.slice(v.length, o.length), m = !0)
        }), m || (f += o.slice(0, 1), o = o.slice(1, o.length))
      }; o;) s();
    return f
  };
const BD = ua(FD);
var ao = {
    Alpha: "A",
    alpha: "\\alpha",
    Beta: "B",
    beta: "\\beta",
    Gamma: "\\Gamma",
    gamma: "\\gamma",
    Delta: "\\Delta",
    delta: "\\delta",
    Epsilon: "E",
    epsilon: "\\epsilon",
    varepsilon: "\\varepsilon",
    Zeta: "Z",
    zeta: "\\zeta",
    Eta: "H",
    eta: "\\eta",
    Theta: "\\Theta",
    theta: "\\theta",
    vartheta: "\\vartheta",
    Iota: "I",
    iota: "\\iota",
    Kappa: "K",
    kappa: "\\kappa",
    varkappa: "\\varkappa",
    Lambda: "\\Lambda",
    lambda: "\\lambda",
    Mu: "M",
    mu: "\\mu",
    Nu: "N",
    nu: "\\nu",
    Xi: "\\Xi",
    xi: "\\xi",
    Omicron: "O",
    omicron: "o",
    Pi: "\\Pi",
    pi: "\\pi",
    varpi: "\\varpi",
    Rho: "P",
    rho: "\\rho",
    varrho: "\\varrho",
    Sigma: "\\Sigma",
    sigma: "\\sigma",
    varsigma: "\\varsigma",
    Tau: "T",
    tau: "\\tau",
    Upsilon: "\\Upsilon",
    upsilon: "\\upsilon",
    Phi: "\\Phi",
    phi: "\\phi",
    varphi: "\\varphi",
    Chi: "X",
    chi: "\\chi",
    Psi: "\\Psi",
    psi: "\\psi",
    Omega: "\\Omega",
    omega: "\\omega",
    true: "\\mathrm{True}",
    false: "\\mathrm{False}",
    i: "i",
    inf: "\\infty",
    Inf: "\\infty",
    infinity: "\\infty",
    Infinity: "\\infty",
    oo: "\\infty",
    lim: "\\lim",
    undefined: "\\mathbf{?}"
  },
  We = {
    transpose: "^\\top",
    ctranspose: "^H",
    factorial: "!",
    pow: "^",
    dotPow: ".^\\wedge",
    unaryPlus: "+",
    unaryMinus: "-",
    bitNot: "\\~",
    not: "\\neg",
    multiply: "\\cdot",
    divide: "\\frac",
    dotMultiply: ".\\cdot",
    dotDivide: ".:",
    mod: "\\mod",
    add: "+",
    subtract: "-",
    to: "\\rightarrow",
    leftShift: "<<",
    rightArithShift: ">>",
    rightLogShift: ">>>",
    equal: "=",
    unequal: "\\neq",
    smaller: "<",
    larger: ">",
    smallerEq: "\\leq",
    largerEq: "\\geq",
    bitAnd: "\\&",
    bitXor: "\\underline{|}",
    bitOr: "|",
    and: "\\wedge",
    xor: "\\veebar",
    or: "\\vee"
  },
  gc = {
    abs: {
      1: "\\left|${args[0]}\\right|"
    },
    add: {
      2: "\\left(${args[0]}".concat(We.add, "${args[1]}\\right)")
    },
    cbrt: {
      1: "\\sqrt[3]{${args[0]}}"
    },
    ceil: {
      1: "\\left\\lceil${args[0]}\\right\\rceil"
    },
    cube: {
      1: "\\left(${args[0]}\\right)^3"
    },
    divide: {
      2: "\\frac{${args[0]}}{${args[1]}}"
    },
    dotDivide: {
      2: "\\left(${args[0]}".concat(We.dotDivide, "${args[1]}\\right)")
    },
    dotMultiply: {
      2: "\\left(${args[0]}".concat(We.dotMultiply, "${args[1]}\\right)")
    },
    dotPow: {
      2: "\\left(${args[0]}".concat(We.dotPow, "${args[1]}\\right)")
    },
    exp: {
      1: "\\exp\\left(${args[0]}\\right)"
    },
    expm1: "\\left(e".concat(We.pow, "{${args[0]}}-1\\right)"),
    fix: {
      1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
    },
    floor: {
      1: "\\left\\lfloor${args[0]}\\right\\rfloor"
    },
    gcd: "\\gcd\\left(${args}\\right)",
    hypot: "\\hypot\\left(${args}\\right)",
    log: {
      1: "\\ln\\left(${args[0]}\\right)",
      2: "\\log_{${args[1]}}\\left(${args[0]}\\right)"
    },
    log10: {
      1: "\\log_{10}\\left(${args[0]}\\right)"
    },
    log1p: {
      1: "\\ln\\left(${args[0]}+1\\right)",
      2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)"
    },
    log2: "\\log_{2}\\left(${args[0]}\\right)",
    mod: {
      2: "\\left(${args[0]}".concat(We.mod, "${args[1]}\\right)")
    },
    multiply: {
      2: "\\left(${args[0]}".concat(We.multiply, "${args[1]}\\right)")
    },
    norm: {
      1: "\\left\\|${args[0]}\\right\\|",
      2: void 0
    },
    nthRoot: {
      2: "\\sqrt[${args[1]}]{${args[0]}}"
    },
    nthRoots: {
      2: "\\{y : $y^{args[1]} = {${args[0]}}\\}"
    },
    pow: {
      2: "\\left(${args[0]}\\right)".concat(We.pow, "{${args[1]}}")
    },
    round: {
      1: "\\left\\lfloor${args[0]}\\right\\rceil",
      2: void 0
    },
    sign: {
      1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
    },
    sqrt: {
      1: "\\sqrt{${args[0]}}"
    },
    square: {
      1: "\\left(${args[0]}\\right)^2"
    },
    subtract: {
      2: "\\left(${args[0]}".concat(We.subtract, "${args[1]}\\right)")
    },
    unaryMinus: {
      1: "".concat(We.unaryMinus, "\\left(${args[0]}\\right)")
    },
    unaryPlus: {
      1: "".concat(We.unaryPlus, "\\left(${args[0]}\\right)")
    },
    bitAnd: {
      2: "\\left(${args[0]}".concat(We.bitAnd, "${args[1]}\\right)")
    },
    bitNot: {
      1: We.bitNot + "\\left(${args[0]}\\right)"
    },
    bitOr: {
      2: "\\left(${args[0]}".concat(We.bitOr, "${args[1]}\\right)")
    },
    bitXor: {
      2: "\\left(${args[0]}".concat(We.bitXor, "${args[1]}\\right)")
    },
    leftShift: {
      2: "\\left(${args[0]}".concat(We.leftShift, "${args[1]}\\right)")
    },
    rightArithShift: {
      2: "\\left(${args[0]}".concat(We.rightArithShift, "${args[1]}\\right)")
    },
    rightLogShift: {
      2: "\\left(${args[0]}".concat(We.rightLogShift, "${args[1]}\\right)")
    },
    bellNumbers: {
      1: "\\mathrm{B}_{${args[0]}}"
    },
    catalan: {
      1: "\\mathrm{C}_{${args[0]}}"
    },
    stirlingS2: {
      2: "\\mathrm{S}\\left(${args}\\right)"
    },
    arg: {
      1: "\\arg\\left(${args[0]}\\right)"
    },
    conj: {
      1: "\\left(${args[0]}\\right)^*"
    },
    im: {
      1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace"
    },
    re: {
      1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace"
    },
    and: {
      2: "\\left(${args[0]}".concat(We.and, "${args[1]}\\right)")
    },
    not: {
      1: We.not + "\\left(${args[0]}\\right)"
    },
    or: {
      2: "\\left(${args[0]}".concat(We.or, "${args[1]}\\right)")
    },
    xor: {
      2: "\\left(${args[0]}".concat(We.xor, "${args[1]}\\right)")
    },
    cross: {
      2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)"
    },
    ctranspose: {
      1: "\\left(${args[0]}\\right)".concat(We.ctranspose)
    },
    det: {
      1: "\\det\\left(${args[0]}\\right)"
    },
    dot: {
      2: "\\left(${args[0]}\\cdot${args[1]}\\right)"
    },
    expm: {
      1: "\\exp\\left(${args[0]}\\right)"
    },
    inv: {
      1: "\\left(${args[0]}\\right)^{-1}"
    },
    pinv: {
      1: "\\left(${args[0]}\\right)^{+}"
    },
    sqrtm: {
      1: "{${args[0]}}".concat(We.pow, "{\\frac{1}{2}}")
    },
    trace: {
      1: "\\mathrm{tr}\\left(${args[0]}\\right)"
    },
    transpose: {
      1: "\\left(${args[0]}\\right)".concat(We.transpose)
    },
    combinations: {
      2: "\\binom{${args[0]}}{${args[1]}}"
    },
    combinationsWithRep: {
      2: "\\left(\\!\\!{\\binom{${args[0]}}{${args[1]}}}\\!\\!\\right)"
    },
    factorial: {
      1: "\\left(${args[0]}\\right)".concat(We.factorial)
    },
    gamma: {
      1: "\\Gamma\\left(${args[0]}\\right)"
    },
    lgamma: {
      1: "\\ln\\Gamma\\left(${args[0]}\\right)"
    },
    equal: {
      2: "\\left(${args[0]}".concat(We.equal, "${args[1]}\\right)")
    },
    larger: {
      2: "\\left(${args[0]}".concat(We.larger, "${args[1]}\\right)")
    },
    largerEq: {
      2: "\\left(${args[0]}".concat(We.largerEq, "${args[1]}\\right)")
    },
    smaller: {
      2: "\\left(${args[0]}".concat(We.smaller, "${args[1]}\\right)")
    },
    smallerEq: {
      2: "\\left(${args[0]}".concat(We.smallerEq, "${args[1]}\\right)")
    },
    unequal: {
      2: "\\left(${args[0]}".concat(We.unequal, "${args[1]}\\right)")
    },
    erf: {
      1: "erf\\left(${args[0]}\\right)"
    },
    max: "\\max\\left(${args}\\right)",
    min: "\\min\\left(${args}\\right)",
    variance: "\\mathrm{Var}\\left(${args}\\right)",
    acos: {
      1: "\\cos^{-1}\\left(${args[0]}\\right)"
    },
    acosh: {
      1: "\\cosh^{-1}\\left(${args[0]}\\right)"
    },
    acot: {
      1: "\\cot^{-1}\\left(${args[0]}\\right)"
    },
    acoth: {
      1: "\\coth^{-1}\\left(${args[0]}\\right)"
    },
    acsc: {
      1: "\\csc^{-1}\\left(${args[0]}\\right)"
    },
    acsch: {
      1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)"
    },
    asec: {
      1: "\\sec^{-1}\\left(${args[0]}\\right)"
    },
    asech: {
      1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)"
    },
    asin: {
      1: "\\sin^{-1}\\left(${args[0]}\\right)"
    },
    asinh: {
      1: "\\sinh^{-1}\\left(${args[0]}\\right)"
    },
    atan: {
      1: "\\tan^{-1}\\left(${args[0]}\\right)"
    },
    atan2: {
      2: "\\mathrm{atan2}\\left(${args}\\right)"
    },
    atanh: {
      1: "\\tanh^{-1}\\left(${args[0]}\\right)"
    },
    cos: {
      1: "\\cos\\left(${args[0]}\\right)"
    },
    cosh: {
      1: "\\cosh\\left(${args[0]}\\right)"
    },
    cot: {
      1: "\\cot\\left(${args[0]}\\right)"
    },
    coth: {
      1: "\\coth\\left(${args[0]}\\right)"
    },
    csc: {
      1: "\\csc\\left(${args[0]}\\right)"
    },
    csch: {
      1: "\\mathrm{csch}\\left(${args[0]}\\right)"
    },
    sec: {
      1: "\\sec\\left(${args[0]}\\right)"
    },
    sech: {
      1: "\\mathrm{sech}\\left(${args[0]}\\right)"
    },
    sin: {
      1: "\\sin\\left(${args[0]}\\right)"
    },
    sinh: {
      1: "\\sinh\\left(${args[0]}\\right)"
    },
    tan: {
      1: "\\tan\\left(${args[0]}\\right)"
    },
    tanh: {
      1: "\\tanh\\left(${args[0]}\\right)"
    },
    to: {
      2: "\\left(${args[0]}".concat(We.to, "${args[1]}\\right)")
    },
    numeric: function(r, i) {
      return r.args[0].toTex()
    },
    number: {
      0: "0",
      1: "\\left(${args[0]}\\right)",
      2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
    },
    string: {
      0: '\\mathtt{""}',
      1: "\\mathrm{string}\\left(${args[0]}\\right)"
    },
    bignumber: {
      0: "0",
      1: "\\left(${args[0]}\\right)"
    },
    complex: {
      0: "0",
      1: "\\left(${args[0]}\\right)",
      2: "\\left(\\left(${args[0]}\\right)+".concat(ao.i, "\\cdot\\left(${args[1]}\\right)\\right)")
    },
    matrix: {
      0: "\\begin{bmatrix}\\end{bmatrix}",
      1: "\\left(${args[0]}\\right)",
      2: "\\left(${args[0]}\\right)"
    },
    sparse: {
      0: "\\begin{bsparse}\\end{bsparse}",
      1: "\\left(${args[0]}\\right)"
    },
    unit: {
      1: "\\left(${args[0]}\\right)",
      2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
    }
  },
  TD = "\\mathrm{${name}}\\left(${args}\\right)",
  yc = {
    deg: "^\\circ"
  };

function io(e) {
  return BD(e, {
    preserveFormatting: !0
  })
}

function $v(e, r) {
  return r = typeof r > "u" ? !1 : r, r ? Ee(yc, e) ? yc[e] : "\\mathrm{" + io(e) + "}" : Ee(ao, e) ? ao[e] : io(e)
}
var Fa = "ConstantNode",
  OD = ["Node"],
  $D = z(Fa, OD, e => {
    var {
      Node: r
    } = e;
    class i extends r {
      constructor(t) {
        super(), this.value = t
      }
      get type() {
        return Fa
      }
      get isConstantNode() {
        return !0
      }
      _compile(t, a) {
        var o = this.value;
        return function() {
          return o
        }
      }
      forEach(t) {}
      map(t) {
        return this.clone()
      }
      clone() {
        return new i(this.value)
      }
      _toString(t) {
        return ze(this.value, t)
      }
      toHTML(t) {
        var a = this._toString(t);
        switch (ar(this.value)) {
          case "number":
          case "BigNumber":
          case "Fraction":
            return '<span class="math-number">' + a + "</span>";
          case "string":
            return '<span class="math-string">' + a + "</span>";
          case "boolean":
            return '<span class="math-boolean">' + a + "</span>";
          case "null":
            return '<span class="math-null-symbol">' + a + "</span>";
          case "undefined":
            return '<span class="math-undefined">' + a + "</span>";
          default:
            return '<span class="math-symbol">' + a + "</span>"
        }
      }
      toJSON() {
        return {
          mathjs: Fa,
          value: this.value
        }
      }
      static fromJSON(t) {
        return new i(t.value)
      }
      _toTex(t) {
        var a = this._toString(t);
        switch (ar(this.value)) {
          case "string":
            return "\\mathtt{" + io(a) + "}";
          case "number":
          case "BigNumber": {
            if (!isFinite(this.value)) return this.value.valueOf() < 0 ? "-\\infty" : "\\infty";
            var o = a.toLowerCase().indexOf("e");
            if (o !== -1) return a.substring(0, o) + "\\cdot10^{" + a.substring(o + 1) + "}"
          }
          return a;
          case "Fraction":
            return this.value.toLatex();
          default:
            return a
        }
      }
    }
    return dr(i, "name", Fa), i
  }, {
    isClass: !0,
    isNode: !0
  }),
  Ba = "FunctionAssignmentNode",
  _D = ["typed", "Node"],
  ID = z(Ba, _D, e => {
    var {
      typed: r,
      Node: i
    } = e;

    function n(a, o, f) {
      var c = nr(a, o, f),
        u = nr(a.expr, o, f);
      return o === "all" || u !== null && u <= c
    }
    class t extends i {
      constructor(o, f, c) {
        if (super(), typeof o != "string") throw new TypeError('String expected for parameter "name"');
        if (!Array.isArray(f)) throw new TypeError('Array containing strings or objects expected for parameter "params"');
        if (!er(c)) throw new TypeError('Node expected for parameter "expr"');
        if (Tv.has(o)) throw new Error('Illegal function name, "' + o + '" is a reserved keyword');
        var u = new Set;
        for (var s of f) {
          var l = typeof s == "string" ? s : s.name;
          if (u.has(l)) throw new Error('Duplicate parameter name "'.concat(l, '"'));
          u.add(l)
        }
        this.name = o, this.params = f.map(function(m) {
          return m && m.name || m
        }), this.types = f.map(function(m) {
          return m && m.type || "any"
        }), this.expr = c
      }
      get type() {
        return Ba
      }
      get isFunctionAssignmentNode() {
        return !0
      }
      _compile(o, f) {
        var c = Object.create(f);
        di(this.params, function(d) {
          c[d] = !0
        });
        var u = this.expr._compile(o, c),
          s = this.name,
          l = this.params,
          m = vs(this.types, ","),
          v = s + "(" + vs(this.params, ", ") + ")";
        return function(p, b, g) {
          var N = {};
          N[m] = function() {
            for (var x = Object.create(b), w = 0; w < l.length; w++) x[l[w]] = arguments[w];
            return u(p, x, g)
          };
          var h = r(s, N);
          return h.syntax = v, p.set(s, h), h
        }
      }
      forEach(o) {
        o(this.expr, "expr", this)
      }
      map(o) {
        var f = this._ifNode(o(this.expr, "expr", this));
        return new t(this.name, this.params.slice(0), f)
      }
      clone() {
        return new t(this.name, this.params.slice(0), this.expr)
      }
      _toString(o) {
        var f = o && o.parenthesis ? o.parenthesis : "keep",
          c = this.expr.toString(o);
        return n(this, f, o && o.implicit) && (c = "(" + c + ")"), this.name + "(" + this.params.join(", ") + ") = " + c
      }
      toJSON() {
        var o = this.types;
        return {
          mathjs: Ba,
          name: this.name,
          params: this.params.map(function(f, c) {
            return {
              name: f,
              type: o[c]
            }
          }),
          expr: this.expr
        }
      }
      static fromJSON(o) {
        return new t(o.name, o.params, o.expr)
      }
      toHTML(o) {
        for (var f = o && o.parenthesis ? o.parenthesis : "keep", c = [], u = 0; u < this.params.length; u++) c.push('<span class="math-symbol math-parameter">' + Wr(this.params[u]) + "</span>");
        var s = this.expr.toHTML(o);
        return n(this, f, o && o.implicit) && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), '<span class="math-function">' + Wr(this.name) + '</span><span class="math-parenthesis math-round-parenthesis">(</span>' + c.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + s
      }
      _toTex(o) {
        var f = o && o.parenthesis ? o.parenthesis : "keep",
          c = this.expr.toTex(o);
        return n(this, f, o && o.implicit) && (c = "\\left(".concat(c, "\\right)")), "\\mathrm{" + this.name + "}\\left(" + this.params.map($v).join(",") + "\\right)=" + c
      }
    }
    return dr(t, "name", Ba), t
  }, {
    isClass: !0,
    isNode: !0
  }),
  Ta = "IndexNode",
  qD = ["Node", "size"],
  RD = z(Ta, qD, e => {
    var {
      Node: r,
      size: i
    } = e;
    class n extends r {
      constructor(a, o) {
        if (super(), this.dimensions = a, this.dotNotation = o || !1, !Array.isArray(a) || !a.every(er)) throw new TypeError('Array containing Nodes expected for parameter "dimensions"');
        if (this.dotNotation && !this.isObjectProperty()) throw new Error("dotNotation only applicable for object properties")
      }
      get type() {
        return Ta
      }
      get isIndexNode() {
        return !0
      }
      _compile(a, o) {
        var f = At(this.dimensions, function(u, s) {
            var l = u.filter(d => d.isSymbolNode && d.name === "end").length > 0;
            if (l) {
              var m = Object.create(o);
              m.end = !0;
              var v = u._compile(a, m);
              return function(p, b, g) {
                if (!Fe(g) && !Je(g) && !Ar(g)) throw new TypeError('Cannot resolve "end": context must be a Matrix, Array, or string but is ' + ar(g));
                var N = i(g).valueOf(),
                  h = Object.create(b);
                return h.end = N[s], v(p, h, g)
              }
            } else return u._compile(a, o)
          }),
          c = Fr(a, "index");
        return function(s, l, m) {
          var v = At(f, function(d) {
            return d(s, l, m)
          });
          return c(...v)
        }
      }
      forEach(a) {
        for (var o = 0; o < this.dimensions.length; o++) a(this.dimensions[o], "dimensions[" + o + "]", this)
      }
      map(a) {
        for (var o = [], f = 0; f < this.dimensions.length; f++) o[f] = this._ifNode(a(this.dimensions[f], "dimensions[" + f + "]", this));
        return new n(o, this.dotNotation)
      }
      clone() {
        return new n(this.dimensions.slice(0), this.dotNotation)
      }
      isObjectProperty() {
        return this.dimensions.length === 1 && Qe(this.dimensions[0]) && typeof this.dimensions[0].value == "string"
      }
      getObjectProperty() {
        return this.isObjectProperty() ? this.dimensions[0].value : null
      }
      _toString(a) {
        return this.dotNotation ? "." + this.getObjectProperty() : "[" + this.dimensions.join(", ") + "]"
      }
      toJSON() {
        return {
          mathjs: Ta,
          dimensions: this.dimensions,
          dotNotation: this.dotNotation
        }
      }
      static fromJSON(a) {
        return new n(a.dimensions, a.dotNotation)
      }
      toHTML(a) {
        for (var o = [], f = 0; f < this.dimensions.length; f++) o[f] = this.dimensions[f].toHTML();
        return this.dotNotation ? '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' + Wr(this.getObjectProperty()) + "</span>" : '<span class="math-parenthesis math-square-parenthesis">[</span>' + o.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>'
      }
      _toTex(a) {
        var o = this.dimensions.map(function(f) {
          return f.toTex(a)
        });
        return this.dotNotation ? "." + this.getObjectProperty() : "_{" + o.join(",") + "}"
      }
    }
    return dr(n, "name", Ta), n
  }, {
    isClass: !0,
    isNode: !0
  }),
  Oa = "ObjectNode",
  zD = ["Node"],
  PD = z(Oa, zD, e => {
    var {
      Node: r
    } = e;
    class i extends r {
      constructor(t) {
        if (super(), this.properties = t || {}, t && (typeof t != "object" || !Object.keys(t).every(function(a) {
            return er(t[a])
          }))) throw new TypeError("Object containing Nodes expected")
      }
      get type() {
        return Oa
      }
      get isObjectNode() {
        return !0
      }
      _compile(t, a) {
        var o = {};
        for (var f in this.properties)
          if (Ee(this.properties, f)) {
            var c = yn(f),
              u = JSON.parse(c),
              s = Fr(this.properties, f);
            o[u] = s._compile(t, a)
          } return function(m, v, d) {
          var p = {};
          for (var b in o) Ee(o, b) && (p[b] = o[b](m, v, d));
          return p
        }
      }
      forEach(t) {
        for (var a in this.properties) Ee(this.properties, a) && t(this.properties[a], "properties[" + yn(a) + "]", this)
      }
      map(t) {
        var a = {};
        for (var o in this.properties) Ee(this.properties, o) && (a[o] = this._ifNode(t(this.properties[o], "properties[" + yn(o) + "]", this)));
        return new i(a)
      }
      clone() {
        var t = {};
        for (var a in this.properties) Ee(this.properties, a) && (t[a] = this.properties[a]);
        return new i(t)
      }
      _toString(t) {
        var a = [];
        for (var o in this.properties) Ee(this.properties, o) && a.push(yn(o) + ": " + this.properties[o].toString(t));
        return "{" + a.join(", ") + "}"
      }
      toJSON() {
        return {
          mathjs: Oa,
          properties: this.properties
        }
      }
      static fromJSON(t) {
        return new i(t.properties)
      }
      toHTML(t) {
        var a = [];
        for (var o in this.properties) Ee(this.properties, o) && a.push('<span class="math-symbol math-property">' + Wr(o) + '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[o].toHTML(t));
        return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + a.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>'
      }
      _toTex(t) {
        var a = [];
        for (var o in this.properties) Ee(this.properties, o) && a.push("\\mathbf{" + o + ":} & " + this.properties[o].toTex(t) + "\\\\");
        var f = "\\left\\{\\begin{array}{ll}" + a.join(`
`) + "\\end{array}\\right\\}";
        return f
      }
    }
    return dr(i, "name", Oa), i
  }, {
    isClass: !0,
    isNode: !0
  }),
  $a = "OperatorNode",
  UD = ["Node"],
  LD = z($a, UD, e => {
    var {
      Node: r
    } = e;

    function i(a, o) {
      var f = a;
      if (o === "auto")
        for (; St(f);) f = f.content;
      return Qe(f) ? !0 : mr(f) ? i(f.args[0], o) : !1
    }

    function n(a, o, f, c, u) {
      var s = nr(a, o, f),
        l = Qn(a, o);
      if (o === "all" || c.length > 2 && a.getIdentifier() !== "OperatorNode:add" && a.getIdentifier() !== "OperatorNode:multiply") return c.map(function(S) {
        switch (S.getContent().type) {
          case "ArrayNode":
          case "ConstantNode":
          case "SymbolNode":
          case "ParenthesisNode":
            return !1;
          default:
            return !0
        }
      });
      var m;
      switch (c.length) {
        case 0:
          m = [];
          break;
        case 1: {
          var v = nr(c[0], o, f, a);
          if (u && v !== null) {
            var d, p;
            if (o === "keep" ? (d = c[0].getIdentifier(), p = a.getIdentifier()) : (d = c[0].getContent().getIdentifier(), p = a.getContent().getIdentifier()), rt[s][p].latexLeftParens === !1) {
              m = [!1];
              break
            }
            if (rt[v][d].latexParens === !1) {
              m = [!1];
              break
            }
          }
          if (v === null) {
            m = [!1];
            break
          }
          if (v <= s) {
            m = [!0];
            break
          }
          m = [!1]
        }
        break;
        case 2: {
          var b, g = nr(c[0], o, f, a),
            N = Ui(a, c[0], o);
          g === null ? b = !1 : g === s && l === "right" && !N || g < s ? b = !0 : b = !1;
          var h, x = nr(c[1], o, f, a),
            w = Ui(a, c[1], o);
          if (x === null ? h = !1 : x === s && l === "left" && !w || x < s ? h = !0 : h = !1, u) {
            var y, A, E;
            o === "keep" ? (y = a.getIdentifier(), A = a.args[0].getIdentifier(), E = a.args[1].getIdentifier()) : (y = a.getContent().getIdentifier(), A = a.args[0].getContent().getIdentifier(), E = a.args[1].getContent().getIdentifier()), g !== null && (rt[s][y].latexLeftParens === !1 && (b = !1), rt[g][A].latexParens === !1 && (b = !1)), x !== null && (rt[s][y].latexRightParens === !1 && (h = !1), rt[x][E].latexParens === !1 && (h = !1))
          }
          m = [b, h]
        }
        break;
        default:
          (a.getIdentifier() === "OperatorNode:add" || a.getIdentifier() === "OperatorNode:multiply") && (m = c.map(function(S) {
            var C = nr(S, o, f, a),
              M = Ui(a, S, o),
              $ = Qn(S, o);
            return C === null ? !1 : s === C && l === $ && !M ? !0 : C < s
          }));
          break
      }
      if (c.length >= 2 && a.getIdentifier() === "OperatorNode:multiply" && a.implicit && o !== "all" && f === "hide")
        for (var D = 1; D < m.length; ++D) i(c[D], o) && !m[D - 1] && (o !== "keep" || !St(c[D - 1])) && (m[D] = !0);
      return m
    }
    class t extends r {
      constructor(o, f, c, u, s) {
        if (super(), typeof o != "string") throw new TypeError('string expected for parameter "op"');
        if (typeof f != "string") throw new TypeError('string expected for parameter "fn"');
        if (!Array.isArray(c) || !c.every(er)) throw new TypeError('Array containing Nodes expected for parameter "args"');
        this.implicit = u === !0, this.isPercentage = s === !0, this.op = o, this.fn = f, this.args = c || []
      }
      get type() {
        return $a
      }
      get isOperatorNode() {
        return !0
      }
      _compile(o, f) {
        if (typeof this.fn != "string" || !go(o, this.fn)) throw o[this.fn] ? new Error('No access to function "' + this.fn + '"') : new Error("Function " + this.fn + ' missing in provided namespace "math"');
        var c = Fr(o, this.fn),
          u = At(this.args, function(v) {
            return v._compile(o, f)
          });
        if (u.length === 1) {
          var s = u[0];
          return function(d, p, b) {
            return c(s(d, p, b))
          }
        } else if (u.length === 2) {
          var l = u[0],
            m = u[1];
          return function(d, p, b) {
            return c(l(d, p, b), m(d, p, b))
          }
        } else return function(d, p, b) {
          return c.apply(null, At(u, function(g) {
            return g(d, p, b)
          }))
        }
      }
      forEach(o) {
        for (var f = 0; f < this.args.length; f++) o(this.args[f], "args[" + f + "]", this)
      }
      map(o) {
        for (var f = [], c = 0; c < this.args.length; c++) f[c] = this._ifNode(o(this.args[c], "args[" + c + "]", this));
        return new t(this.op, this.fn, f, this.implicit, this.isPercentage)
      }
      clone() {
        return new t(this.op, this.fn, this.args.slice(0), this.implicit, this.isPercentage)
      }
      isUnary() {
        return this.args.length === 1
      }
      isBinary() {
        return this.args.length === 2
      }
      _toString(o) {
        var f = o && o.parenthesis ? o.parenthesis : "keep",
          c = o && o.implicit ? o.implicit : "hide",
          u = this.args,
          s = n(this, f, c, u, !1);
        if (u.length === 1) {
          var l = Qn(this, f),
            m = u[0].toString(o);
          s[0] && (m = "(" + m + ")");
          var v = /[a-zA-Z]+/.test(this.op);
          return l === "right" ? this.op + (v ? " " : "") + m : l === "left" ? m + (v ? " " : "") + this.op : m + this.op
        } else if (u.length === 2) {
          var d = u[0].toString(o),
            p = u[1].toString(o);
          return s[0] && (d = "(" + d + ")"), s[1] && (p = "(" + p + ")"), this.implicit && this.getIdentifier() === "OperatorNode:multiply" && c === "hide" ? d + " " + p : d + " " + this.op + " " + p
        } else if (u.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply")) {
          var b = u.map(function(g, N) {
            return g = g.toString(o), s[N] && (g = "(" + g + ")"), g
          });
          return this.implicit && this.getIdentifier() === "OperatorNode:multiply" && c === "hide" ? b.join(" ") : b.join(" " + this.op + " ")
        } else return this.fn + "(" + this.args.join(", ") + ")"
      }
      toJSON() {
        return {
          mathjs: $a,
          op: this.op,
          fn: this.fn,
          args: this.args,
          implicit: this.implicit,
          isPercentage: this.isPercentage
        }
      }
      static fromJSON(o) {
        return new t(o.op, o.fn, o.args, o.implicit, o.isPercentage)
      }
      toHTML(o) {
        var f = o && o.parenthesis ? o.parenthesis : "keep",
          c = o && o.implicit ? o.implicit : "hide",
          u = this.args,
          s = n(this, f, c, u, !1);
        if (u.length === 1) {
          var l = Qn(this, f),
            m = u[0].toHTML(o);
          return s[0] && (m = '<span class="math-parenthesis math-round-parenthesis">(</span>' + m + '<span class="math-parenthesis math-round-parenthesis">)</span>'), l === "right" ? '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + Wr(this.op) + "</span>" + m : m + '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + Wr(this.op) + "</span>"
        } else if (u.length === 2) {
          var v = u[0].toHTML(o),
            d = u[1].toHTML(o);
          return s[0] && (v = '<span class="math-parenthesis math-round-parenthesis">(</span>' + v + '<span class="math-parenthesis math-round-parenthesis">)</span>'), s[1] && (d = '<span class="math-parenthesis math-round-parenthesis">(</span>' + d + '<span class="math-parenthesis math-round-parenthesis">)</span>'), this.implicit && this.getIdentifier() === "OperatorNode:multiply" && c === "hide" ? v + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + d : v + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Wr(this.op) + "</span>" + d
        } else {
          var p = u.map(function(b, g) {
            return b = b.toHTML(o), s[g] && (b = '<span class="math-parenthesis math-round-parenthesis">(</span>' + b + '<span class="math-parenthesis math-round-parenthesis">)</span>'), b
          });
          return u.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply") ? this.implicit && this.getIdentifier() === "OperatorNode:multiply" && c === "hide" ? p.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>') : p.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Wr(this.op) + "</span>") : '<span class="math-function">' + Wr(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + p.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>'
        }
      }
      _toTex(o) {
        var f = o && o.parenthesis ? o.parenthesis : "keep",
          c = o && o.implicit ? o.implicit : "hide",
          u = this.args,
          s = n(this, f, c, u, !0),
          l = We[this.fn];
        if (l = typeof l > "u" ? this.op : l, u.length === 1) {
          var m = Qn(this, f),
            v = u[0].toTex(o);
          return s[0] && (v = "\\left(".concat(v, "\\right)")), m === "right" ? l + v : v + l
        } else if (u.length === 2) {
          var d = u[0],
            p = d.toTex(o);
          s[0] && (p = "\\left(".concat(p, "\\right)"));
          var b = u[1],
            g = b.toTex(o);
          s[1] && (g = "\\left(".concat(g, "\\right)"));
          var N;
          switch (f === "keep" ? N = d.getIdentifier() : N = d.getContent().getIdentifier(), this.getIdentifier()) {
            case "OperatorNode:divide":
              return l + "{" + p + "}{" + g + "}";
            case "OperatorNode:pow":
              switch (p = "{" + p + "}", g = "{" + g + "}", N) {
                case "ConditionalNode":
                case "OperatorNode:divide":
                  p = "\\left(".concat(p, "\\right)")
              }
              break;
            case "OperatorNode:multiply":
              if (this.implicit && c === "hide") return p + "~" + g
          }
          return p + l + g
        } else if (u.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply")) {
          var h = u.map(function(x, w) {
            return x = x.toTex(o), s[w] && (x = "\\left(".concat(x, "\\right)")), x
          });
          return this.getIdentifier() === "OperatorNode:multiply" && this.implicit && c === "hide" ? h.join("~") : h.join(l)
        } else return "\\mathrm{" + this.fn + "}\\left(" + u.map(function(x) {
          return x.toTex(o)
        }).join(",") + "\\right)"
      }
      getIdentifier() {
        return this.type + ":" + this.fn
      }
    }
    return dr(t, "name", $a), t
  }, {
    isClass: !0,
    isNode: !0
  }),
  _a = "ParenthesisNode",
  kD = ["Node"],
  HD = z(_a, kD, e => {
    var {
      Node: r
    } = e;
    class i extends r {
      constructor(t) {
        if (super(), !er(t)) throw new TypeError('Node expected for parameter "content"');
        this.content = t
      }
      get type() {
        return _a
      }
      get isParenthesisNode() {
        return !0
      }
      _compile(t, a) {
        return this.content._compile(t, a)
      }
      getContent() {
        return this.content.getContent()
      }
      forEach(t) {
        t(this.content, "content", this)
      }
      map(t) {
        var a = t(this.content, "content", this);
        return new i(a)
      }
      clone() {
        return new i(this.content)
      }
      _toString(t) {
        return !t || t && !t.parenthesis || t && t.parenthesis === "keep" ? "(" + this.content.toString(t) + ")" : this.content.toString(t)
      }
      toJSON() {
        return {
          mathjs: _a,
          content: this.content
        }
      }
      static fromJSON(t) {
        return new i(t.content)
      }
      toHTML(t) {
        return !t || t && !t.parenthesis || t && t.parenthesis === "keep" ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(t) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : this.content.toHTML(t)
      }
      _toTex(t) {
        return !t || t && !t.parenthesis || t && t.parenthesis === "keep" ? "\\left(".concat(this.content.toTex(t), "\\right)") : this.content.toTex(t)
      }
    }
    return dr(i, "name", _a), i
  }, {
    isClass: !0,
    isNode: !0
  }),
  Ia = "RangeNode",
  GD = ["Node"],
  VD = z(Ia, GD, e => {
    var {
      Node: r
    } = e;

    function i(t, a, o) {
      var f = nr(t, a, o),
        c = {},
        u = nr(t.start, a, o);
      if (c.start = u !== null && u <= f || a === "all", t.step) {
        var s = nr(t.step, a, o);
        c.step = s !== null && s <= f || a === "all"
      }
      var l = nr(t.end, a, o);
      return c.end = l !== null && l <= f || a === "all", c
    }
    class n extends r {
      constructor(a, o, f) {
        if (super(), !er(a)) throw new TypeError("Node expected");
        if (!er(o)) throw new TypeError("Node expected");
        if (f && !er(f)) throw new TypeError("Node expected");
        if (arguments.length > 3) throw new Error("Too many arguments");
        this.start = a, this.end = o, this.step = f || null
      }
      get type() {
        return Ia
      }
      get isRangeNode() {
        return !0
      }
      needsEnd() {
        var a = this.filter(function(o) {
          return yr(o) && o.name === "end"
        });
        return a.length > 0
      }
      _compile(a, o) {
        var f = a.range,
          c = this.start._compile(a, o),
          u = this.end._compile(a, o);
        if (this.step) {
          var s = this.step._compile(a, o);
          return function(m, v, d) {
            return f(c(m, v, d), u(m, v, d), s(m, v, d))
          }
        } else return function(m, v, d) {
          return f(c(m, v, d), u(m, v, d))
        }
      }
      forEach(a) {
        a(this.start, "start", this), a(this.end, "end", this), this.step && a(this.step, "step", this)
      }
      map(a) {
        return new n(this._ifNode(a(this.start, "start", this)), this._ifNode(a(this.end, "end", this)), this.step && this._ifNode(a(this.step, "step", this)))
      }
      clone() {
        return new n(this.start, this.end, this.step && this.step)
      }
      _toString(a) {
        var o = a && a.parenthesis ? a.parenthesis : "keep",
          f = i(this, o, a && a.implicit),
          c, u = this.start.toString(a);
        if (f.start && (u = "(" + u + ")"), c = u, this.step) {
          var s = this.step.toString(a);
          f.step && (s = "(" + s + ")"), c += ":" + s
        }
        var l = this.end.toString(a);
        return f.end && (l = "(" + l + ")"), c += ":" + l, c
      }
      toJSON() {
        return {
          mathjs: Ia,
          start: this.start,
          end: this.end,
          step: this.step
        }
      }
      static fromJSON(a) {
        return new n(a.start, a.end, a.step)
      }
      toHTML(a) {
        var o = a && a.parenthesis ? a.parenthesis : "keep",
          f = i(this, o, a && a.implicit),
          c, u = this.start.toHTML(a);
        if (f.start && (u = '<span class="math-parenthesis math-round-parenthesis">(</span>' + u + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c = u, this.step) {
          var s = this.step.toHTML(a);
          f.step && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c += '<span class="math-operator math-range-operator">:</span>' + s
        }
        var l = this.end.toHTML(a);
        return f.end && (l = '<span class="math-parenthesis math-round-parenthesis">(</span>' + l + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c += '<span class="math-operator math-range-operator">:</span>' + l, c
      }
      _toTex(a) {
        var o = a && a.parenthesis ? a.parenthesis : "keep",
          f = i(this, o, a && a.implicit),
          c = this.start.toTex(a);
        if (f.start && (c = "\\left(".concat(c, "\\right)")), this.step) {
          var u = this.step.toTex(a);
          f.step && (u = "\\left(".concat(u, "\\right)")), c += ":" + u
        }
        var s = this.end.toTex(a);
        return f.end && (s = "\\left(".concat(s, "\\right)")), c += ":" + s, c
      }
    }
    return dr(n, "name", Ia), n
  }, {
    isClass: !0,
    isNode: !0
  }),
  qa = "RelationalNode",
  ZD = ["Node"],
  YD = z(qa, ZD, e => {
    var {
      Node: r
    } = e, i = {
      equal: "==",
      unequal: "!=",
      smaller: "<",
      larger: ">",
      smallerEq: "<=",
      largerEq: ">="
    };
    class n extends r {
      constructor(a, o) {
        if (super(), !Array.isArray(a)) throw new TypeError("Parameter conditionals must be an array");
        if (!Array.isArray(o)) throw new TypeError("Parameter params must be an array");
        if (a.length !== o.length - 1) throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals");
        this.conditionals = a, this.params = o
      }
      get type() {
        return qa
      }
      get isRelationalNode() {
        return !0
      }
      _compile(a, o) {
        var f = this,
          c = this.params.map(u => u._compile(a, o));
        return function(s, l, m) {
          for (var v, d = c[0](s, l, m), p = 0; p < f.conditionals.length; p++) {
            v = d, d = c[p + 1](s, l, m);
            var b = Fr(a, f.conditionals[p]);
            if (!b(v, d)) return !1
          }
          return !0
        }
      }
      forEach(a) {
        this.params.forEach((o, f) => a(o, "params[" + f + "]", this), this)
      }
      map(a) {
        return new n(this.conditionals.slice(), this.params.map((o, f) => this._ifNode(a(o, "params[" + f + "]", this)), this))
      }
      clone() {
        return new n(this.conditionals, this.params)
      }
      _toString(a) {
        for (var o = a && a.parenthesis ? a.parenthesis : "keep", f = nr(this, o, a && a.implicit), c = this.params.map(function(l, m) {
            var v = nr(l, o, a && a.implicit);
            return o === "all" || v !== null && v <= f ? "(" + l.toString(a) + ")" : l.toString(a)
          }), u = c[0], s = 0; s < this.conditionals.length; s++) u += " " + i[this.conditionals[s]], u += " " + c[s + 1];
        return u
      }
      toJSON() {
        return {
          mathjs: qa,
          conditionals: this.conditionals,
          params: this.params
        }
      }
      static fromJSON(a) {
        return new n(a.conditionals, a.params)
      }
      toHTML(a) {
        for (var o = a && a.parenthesis ? a.parenthesis : "keep", f = nr(this, o, a && a.implicit), c = this.params.map(function(l, m) {
            var v = nr(l, o, a && a.implicit);
            return o === "all" || v !== null && v <= f ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + l.toHTML(a) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : l.toHTML(a)
          }), u = c[0], s = 0; s < this.conditionals.length; s++) u += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Wr(i[this.conditionals[s]]) + "</span>" + c[s + 1];
        return u
      }
      _toTex(a) {
        for (var o = a && a.parenthesis ? a.parenthesis : "keep", f = nr(this, o, a && a.implicit), c = this.params.map(function(l, m) {
            var v = nr(l, o, a && a.implicit);
            return o === "all" || v !== null && v <= f ? "\\left(" + l.toTex(a) + "\right)" : l.toTex(a)
          }), u = c[0], s = 0; s < this.conditionals.length; s++) u += We[this.conditionals[s]] + c[s + 1];
        return u
      }
    }
    return dr(n, "name", qa), n
  }, {
    isClass: !0,
    isNode: !0
  }),
  WD = "SymbolNode",
  QD = ["math", "?Unit", "Node"],
  XD = z(WD, QD, e => {
    var {
      math: r,
      Unit: i,
      Node: n
    } = e;

    function t(o) {
      return i ? i.isValuelessUnit(o) : !1
    }
    class a extends n {
      constructor(f) {
        if (super(), typeof f != "string") throw new TypeError('String expected for parameter "name"');
        this.name = f
      }
      get type() {
        return "SymbolNode"
      }
      get isSymbolNode() {
        return !0
      }
      _compile(f, c) {
        var u = this.name;
        if (c[u] === !0) return function(l, m, v) {
          return Fr(m, u)
        };
        if (u in f) return function(l, m, v) {
          return l.has(u) ? l.get(u) : Fr(f, u)
        };
        var s = t(u);
        return function(l, m, v) {
          return l.has(u) ? l.get(u) : s ? new i(null, u) : a.onUndefinedSymbol(u)
        }
      }
      forEach(f) {}
      map(f) {
        return this.clone()
      }
      static onUndefinedSymbol(f) {
        throw new Error("Undefined symbol " + f)
      }
      clone() {
        return new a(this.name)
      }
      _toString(f) {
        return this.name
      }
      toHTML(f) {
        var c = Wr(this.name);
        return c === "true" || c === "false" ? '<span class="math-symbol math-boolean">' + c + "</span>" : c === "i" ? '<span class="math-symbol math-imaginary-symbol">' + c + "</span>" : c === "Infinity" ? '<span class="math-symbol math-infinity-symbol">' + c + "</span>" : c === "NaN" ? '<span class="math-symbol math-nan-symbol">' + c + "</span>" : c === "null" ? '<span class="math-symbol math-null-symbol">' + c + "</span>" : c === "undefined" ? '<span class="math-symbol math-undefined-symbol">' + c + "</span>" : '<span class="math-symbol">' + c + "</span>"
      }
      toJSON() {
        return {
          mathjs: "SymbolNode",
          name: this.name
        }
      }
      static fromJSON(f) {
        return new a(f.name)
      }
      _toTex(f) {
        var c = !1;
        typeof r[this.name] > "u" && t(this.name) && (c = !0);
        var u = $v(this.name, c);
        return u[0] === "\\" ? u : " " + u
      }
    }
    return a
  }, {
    isClass: !0,
    isNode: !0
  });

function jn(e) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
  return typeof e.createSubScope == "function" ? ds(e.createSubScope(), ...i) : ds(Cn(), e, ...i)
}
var Ra = "FunctionNode",
  JD = ["math", "Node", "SymbolNode"],
  KD = z(Ra, JD, e => {
    var r, {
        math: i,
        Node: n,
        SymbolNode: t
      } = e,
      a = c => ze(c, {
        truncate: 78
      });

    function o(c, u, s) {
      for (var l = "", m = /\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/gi, v = 0, d;
        (d = m.exec(c)) !== null;)
        if (l += c.substring(v, d.index), v = d.index, d[0] === "$$") l += "$", v++;
        else {
          v += d[0].length;
          var p = u[d[1]];
          if (!p) throw new ReferenceError("Template: Property " + d[1] + " does not exist.");
          if (d[2] === void 0) switch (typeof p) {
              case "string":
                l += p;
                break;
              case "object":
                if (er(p)) l += p.toTex(s);
                else if (Array.isArray(p)) l += p.map(function(b, g) {
                  if (er(b)) return b.toTex(s);
                  throw new TypeError("Template: " + d[1] + "[" + g + "] is not a Node.")
                }).join(",");
                else throw new TypeError("Template: " + d[1] + " has to be a Node, String or array of Nodes");
                break;
              default:
                throw new TypeError("Template: " + d[1] + " has to be a Node, String or array of Nodes")
            } else if (er(p[d[2]] && p[d[2]])) l += p[d[2]].toTex(s);
            else throw new TypeError("Template: " + d[1] + "[" + d[2] + "] is not a Node.")
        } return l += c.slice(v), l
    }
    class f extends n {
      constructor(u, s) {
        if (super(), typeof u == "string" && (u = new t(u)), !er(u)) throw new TypeError('Node expected as parameter "fn"');
        if (!Array.isArray(s) || !s.every(er)) throw new TypeError('Array containing Nodes expected for parameter "args"');
        this.fn = u, this.args = s || []
      }
      get name() {
        return this.fn.name || ""
      }
      get type() {
        return Ra
      }
      get isFunctionNode() {
        return !0
      }
      _compile(u, s) {
        var l = this.args.map(E => E._compile(u, s));
        if (yr(this.fn)) {
          var m = this.fn.name;
          if (s[m]) {
            var g = this.args;
            return function(D, S, C) {
              var M = Fr(S, m);
              if (typeof M != "function") throw new TypeError("Argument '".concat(m, "' was not a function; received: ").concat(a(M)));
              if (M.rawArgs) return M(g, u, jn(D, S), D);
              var $ = l.map(I => I(D, S, C));
              return M.apply(M, $)
            }
          } else {
            var v = m in u ? Fr(u, m) : void 0,
              d = typeof v == "function" && v.rawArgs === !0,
              p = E => {
                var D;
                if (E.has(m)) D = E.get(m);
                else if (m in u) D = Fr(u, m);
                else return f.onUndefinedFunction(m);
                if (typeof D == "function") return D;
                throw new TypeError("'".concat(m, `' is not a function; its value is:
  `).concat(a(D)))
              };
            if (d) {
              var b = this.args;
              return function(D, S, C) {
                var M = p(D);
                return M(b, u, jn(D, S), D)
              }
            } else switch (l.length) {
              case 0:
                return function(D, S, C) {
                  var M = p(D);
                  return M()
                };
              case 1:
                return function(D, S, C) {
                  var M = p(D),
                    $ = l[0];
                  return M($(D, S, C))
                };
              case 2:
                return function(D, S, C) {
                  var M = p(D),
                    $ = l[0],
                    I = l[1];
                  return M($(D, S, C), I(D, S, C))
                };
              default:
                return function(D, S, C) {
                  var M = p(D),
                    $ = l.map(I => I(D, S, C));
                  return M(...$)
                }
            }
          }
        } else if (Wt(this.fn) && On(this.fn.index) && this.fn.index.isObjectProperty()) {
          var N = this.fn.object._compile(u, s),
            h = this.fn.index.getObjectProperty(),
            x = this.args;
          return function(D, S, C) {
            var M = N(D, S, C),
              $ = bh(M, h);
            if ($ != null && $.rawArgs) return $(x, u, jn(D, S), D);
            var I = l.map(_ => _(D, S, C));
            return $.apply(M, I)
          }
        } else {
          var w = this.fn.toString(),
            y = this.fn._compile(u, s),
            A = this.args;
          return function(D, S, C) {
            var M = y(D, S, C);
            if (typeof M != "function") throw new TypeError("Expression '".concat(w, "' did not evaluate to a function; value is:") + `
  `.concat(a(M)));
            if (M.rawArgs) return M(A, u, jn(D, S), D);
            var $ = l.map(I => I(D, S, C));
            return M.apply(M, $)
          }
        }
      }
      forEach(u) {
        u(this.fn, "fn", this);
        for (var s = 0; s < this.args.length; s++) u(this.args[s], "args[" + s + "]", this)
      }
      map(u) {
        for (var s = this._ifNode(u(this.fn, "fn", this)), l = [], m = 0; m < this.args.length; m++) l[m] = this._ifNode(u(this.args[m], "args[" + m + "]", this));
        return new f(s, l)
      }
      clone() {
        return new f(this.fn, this.args.slice(0))
      }
      toString(u) {
        var s, l = this.fn.toString(u);
        return u && typeof u.handler == "object" && Ee(u.handler, l) && (s = u.handler[l](this, u)), typeof s < "u" ? s : super.toString(u)
      }
      _toString(u) {
        var s = this.args.map(function(m) {
            return m.toString(u)
          }),
          l = sa(this.fn) ? "(" + this.fn.toString(u) + ")" : this.fn.toString(u);
        return l + "(" + s.join(", ") + ")"
      }
      toJSON() {
        return {
          mathjs: Ra,
          fn: this.fn,
          args: this.args
        }
      }
      toHTML(u) {
        var s = this.args.map(function(l) {
          return l.toHTML(u)
        });
        return '<span class="math-function">' + Wr(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + s.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>'
      }
      toTex(u) {
        var s;
        return u && typeof u.handler == "object" && Ee(u.handler, this.name) && (s = u.handler[this.name](this, u)), typeof s < "u" ? s : super.toTex(u)
      }
      _toTex(u) {
        var s = this.args.map(function(v) {
            return v.toTex(u)
          }),
          l;
        gc[this.name] && (l = gc[this.name]), i[this.name] && (typeof i[this.name].toTex == "function" || typeof i[this.name].toTex == "object" || typeof i[this.name].toTex == "string") && (l = i[this.name].toTex);
        var m;
        switch (typeof l) {
          case "function":
            m = l(this, u);
            break;
          case "string":
            m = o(l, this, u);
            break;
          case "object":
            switch (typeof l[s.length]) {
              case "function":
                m = l[s.length](this, u);
                break;
              case "string":
                m = o(l[s.length], this, u);
                break
            }
        }
        return typeof m < "u" ? m : o(TD, this, u)
      }
      getIdentifier() {
        return this.type + ":" + this.name
      }
    }
    return r = f, dr(f, "name", Ra), dr(f, "onUndefinedFunction", function(c) {
      throw new Error("Undefined function " + c)
    }), dr(f, "fromJSON", function(c) {
      return new r(c.fn, c.args)
    }), f
  }, {
    isClass: !0,
    isNode: !0
  }),
  bc = "parse",
  jD = ["typed", "numeric", "config", "AccessorNode", "ArrayNode", "AssignmentNode", "BlockNode", "ConditionalNode", "ConstantNode", "FunctionAssignmentNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "RangeNode", "RelationalNode", "SymbolNode"],
  eA = z(bc, jD, e => {
    var {
      typed: r,
      numeric: i,
      config: n,
      AccessorNode: t,
      ArrayNode: a,
      AssignmentNode: o,
      BlockNode: f,
      ConditionalNode: c,
      ConstantNode: u,
      FunctionAssignmentNode: s,
      FunctionNode: l,
      IndexNode: m,
      ObjectNode: v,
      OperatorNode: d,
      ParenthesisNode: p,
      RangeNode: b,
      RelationalNode: g,
      SymbolNode: N
    } = e, h = r(bc, {
      string: function(Y) {
        return J(Y, {})
      },
      "Array | Matrix": function(Y) {
        return x(Y, {})
      },
      "string, Object": function(Y, oe) {
        var xe = oe.nodes !== void 0 ? oe.nodes : {};
        return J(Y, xe)
      },
      "Array | Matrix, Object": x
    });

    function x(F) {
      var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        oe = Y.nodes !== void 0 ? Y.nodes : {};
      return Le(F, function(xe) {
        if (typeof xe != "string") throw new TypeError("String expected");
        return J(xe, oe)
      })
    }
    var w = {
        NULL: 0,
        DELIMITER: 1,
        NUMBER: 2,
        SYMBOL: 3,
        UNKNOWN: 4
      },
      y = {
        ",": !0,
        "(": !0,
        ")": !0,
        "[": !0,
        "]": !0,
        "{": !0,
        "}": !0,
        '"': !0,
        "'": !0,
        ";": !0,
        "+": !0,
        "-": !0,
        "*": !0,
        ".*": !0,
        "/": !0,
        "./": !0,
        "%": !0,
        "^": !0,
        ".^": !0,
        "~": !0,
        "!": !0,
        "&": !0,
        "|": !0,
        "^|": !0,
        "=": !0,
        ":": !0,
        "?": !0,
        "==": !0,
        "!=": !0,
        "<": !0,
        ">": !0,
        "<=": !0,
        ">=": !0,
        "<<": !0,
        ">>": !0,
        ">>>": !0
      },
      A = {
        mod: !0,
        to: !0,
        in: !0,
        and: !0,
        xor: !0,
        or: !0,
        not: !0
      },
      E = {
        true: !0,
        false: !1,
        null: null,
        undefined: void 0
      },
      D = ["NaN", "Infinity"],
      S = {
        '"': '"',
        "'": "'",
        "\\": "\\",
        "/": "/",
        b: "\b",
        f: "\f",
        n: `
`,
        r: "\r",
        t: "	"
      };

    function C() {
      return {
        extraNodes: {},
        expression: "",
        comment: "",
        index: 0,
        token: "",
        tokenType: w.NULL,
        nestingLevel: 0,
        conditionalLevel: null
      }
    }

    function M(F, Y) {
      return F.expression.substr(F.index, Y)
    }

    function $(F) {
      return M(F, 1)
    }

    function I(F) {
      F.index++
    }

    function _(F) {
      return F.expression.charAt(F.index - 1)
    }

    function T(F) {
      return F.expression.charAt(F.index + 1)
    }

    function B(F) {
      for (F.tokenType = w.NULL, F.token = "", F.comment = "";;) {
        if ($(F) === "#")
          for (; $(F) !== `
` && $(F) !== "";) F.comment += $(F), I(F);
        if (h.isWhitespace($(F), F.nestingLevel)) I(F);
        else break
      }
      if ($(F) === "") {
        F.tokenType = w.DELIMITER;
        return
      }
      if ($(F) === `
` && !F.nestingLevel) {
        F.tokenType = w.DELIMITER, F.token = $(F), I(F);
        return
      }
      var Y = $(F),
        oe = M(F, 2),
        xe = M(F, 3);
      if (xe.length === 3 && y[xe]) {
        F.tokenType = w.DELIMITER, F.token = xe, I(F), I(F), I(F);
        return
      }
      if (oe.length === 2 && y[oe]) {
        F.tokenType = w.DELIMITER, F.token = oe, I(F), I(F);
        return
      }
      if (y[Y]) {
        F.tokenType = w.DELIMITER, F.token = Y, I(F);
        return
      }
      if (h.isDigitDot(Y)) {
        F.tokenType = w.NUMBER;
        var Te = M(F, 2);
        if (Te === "0b" || Te === "0o" || Te === "0x") {
          for (F.token += $(F), I(F), F.token += $(F), I(F); h.isHexDigit($(F));) F.token += $(F), I(F);
          if ($(F) === ".")
            for (F.token += ".", I(F); h.isHexDigit($(F));) F.token += $(F), I(F);
          else if ($(F) === "i")
            for (F.token += "i", I(F); h.isDigit($(F));) F.token += $(F), I(F);
          return
        }
        if ($(F) === ".") {
          if (F.token += $(F), I(F), !h.isDigit($(F))) {
            F.tokenType = w.DELIMITER;
            return
          }
        } else {
          for (; h.isDigit($(F));) F.token += $(F), I(F);
          h.isDecimalMark($(F), T(F)) && (F.token += $(F), I(F))
        }
        for (; h.isDigit($(F));) F.token += $(F), I(F);
        if ($(F) === "E" || $(F) === "e") {
          if (h.isDigit(T(F)) || T(F) === "-" || T(F) === "+") {
            if (F.token += $(F), I(F), ($(F) === "+" || $(F) === "-") && (F.token += $(F), I(F)), !h.isDigit($(F))) throw Ce(F, 'Digit expected, got "' + $(F) + '"');
            for (; h.isDigit($(F));) F.token += $(F), I(F);
            if (h.isDecimalMark($(F), T(F))) throw Ce(F, 'Digit expected, got "' + $(F) + '"')
          } else if (T(F) === ".") throw I(F), Ce(F, 'Digit expected, got "' + $(F) + '"')
        }
        return
      }
      if (h.isAlpha($(F), _(F), T(F))) {
        for (; h.isAlpha($(F), _(F), T(F)) || h.isDigit($(F));) F.token += $(F), I(F);
        Ee(A, F.token) ? F.tokenType = w.DELIMITER : F.tokenType = w.SYMBOL;
        return
      }
      for (F.tokenType = w.UNKNOWN; $(F) !== "";) F.token += $(F), I(F);
      throw Ce(F, 'Syntax error in part "' + F.token + '"')
    }

    function U(F) {
      do B(F); while (F.token === `
`)
    }

    function O(F) {
      F.nestingLevel++
    }

    function V(F) {
      F.nestingLevel--
    }
    h.isAlpha = function(Y, oe, xe) {
      return h.isValidLatinOrGreek(Y) || h.isValidMathSymbol(Y, xe) || h.isValidMathSymbol(oe, Y)
    }, h.isValidLatinOrGreek = function(Y) {
      return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(Y)
    }, h.isValidMathSymbol = function(Y, oe) {
      return /^[\uD835]$/.test(Y) && /^[\uDC00-\uDFFF]$/.test(oe) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(oe)
    }, h.isWhitespace = function(Y, oe) {
      return Y === " " || Y === "	" || Y === `
` && oe > 0
    }, h.isDecimalMark = function(Y, oe) {
      return Y === "." && oe !== "/" && oe !== "*" && oe !== "^"
    }, h.isDigitDot = function(Y) {
      return Y >= "0" && Y <= "9" || Y === "."
    }, h.isDigit = function(Y) {
      return Y >= "0" && Y <= "9"
    }, h.isHexDigit = function(Y) {
      return Y >= "0" && Y <= "9" || Y >= "a" && Y <= "f" || Y >= "A" && Y <= "F"
    };

    function J(F, Y) {
      var oe = C();
      pr(oe, {
        expression: F,
        extraNodes: Y
      }), B(oe);
      var xe = Z(oe);
      if (oe.token !== "") throw oe.tokenType === w.DELIMITER ? lr(oe, "Unexpected operator " + oe.token) : Ce(oe, 'Unexpected part "' + oe.token + '"');
      return xe
    }

    function Z(F) {
      var Y, oe = [],
        xe;
      for (F.token !== "" && F.token !== `
` && F.token !== ";" && (Y = q(F), F.comment && (Y.comment = F.comment)); F.token === `
` || F.token === ";";) oe.length === 0 && Y && (xe = F.token !== ";", oe.push({
        node: Y,
        visible: xe
      })), B(F), F.token !== `
` && F.token !== ";" && F.token !== "" && (Y = q(F), F.comment && (Y.comment = F.comment), xe = F.token !== ";", oe.push({
        node: Y,
        visible: xe
      }));
      return oe.length > 0 ? new f(oe) : (Y || (Y = new u(void 0), F.comment && (Y.comment = F.comment)), Y)
    }

    function q(F) {
      var Y, oe, xe, Te, Re = X(F);
      if (F.token === "=") {
        if (yr(Re)) return Y = Re.name, U(F), xe = q(F), new o(new N(Y), xe);
        if (Wt(Re)) return U(F), xe = q(F), new o(Re.object, Re.index, xe);
        if (Rt(Re) && yr(Re.fn) && (Te = !0, oe = [], Y = Re.name, Re.args.forEach(function(Ur, $i) {
            yr(Ur) ? oe[$i] = Ur.name : Te = !1
          }), Te)) return U(F), xe = q(F), new s(Y, oe, xe);
        throw Ce(F, "Invalid left hand side of assignment operator =")
      }
      return Re
    }

    function X(F) {
      for (var Y = ie(F); F.token === "?";) {
        var oe = F.conditionalLevel;
        F.conditionalLevel = F.nestingLevel, U(F);
        var xe = Y,
          Te = q(F);
        if (F.token !== ":") throw Ce(F, "False part of conditional expression expected");
        F.conditionalLevel = null, U(F);
        var Re = q(F);
        Y = new c(xe, Te, Re), F.conditionalLevel = oe
      }
      return Y
    }

    function ie(F) {
      for (var Y = Q(F); F.token === "or";) U(F), Y = new d("or", "or", [Y, Q(F)]);
      return Y
    }

    function Q(F) {
      for (var Y = ee(F); F.token === "xor";) U(F), Y = new d("xor", "xor", [Y, ee(F)]);
      return Y
    }

    function ee(F) {
      for (var Y = ue(F); F.token === "and";) U(F), Y = new d("and", "and", [Y, ue(F)]);
      return Y
    }

    function ue(F) {
      for (var Y = re(F); F.token === "|";) U(F), Y = new d("|", "bitOr", [Y, re(F)]);
      return Y
    }

    function re(F) {
      for (var Y = ne(F); F.token === "^|";) U(F), Y = new d("^|", "bitXor", [Y, ne(F)]);
      return Y
    }

    function ne(F) {
      for (var Y = le(F); F.token === "&";) U(F), Y = new d("&", "bitAnd", [Y, le(F)]);
      return Y
    }

    function le(F) {
      for (var Y = [se(F)], oe = [], xe = {
          "==": "equal",
          "!=": "unequal",
          "<": "smaller",
          ">": "larger",
          "<=": "smallerEq",
          ">=": "largerEq"
        }; Ee(xe, F.token);) {
        var Te = {
          name: F.token,
          fn: xe[F.token]
        };
        oe.push(Te), U(F), Y.push(se(F))
      }
      return Y.length === 1 ? Y[0] : Y.length === 2 ? new d(oe[0].name, oe[0].fn, Y) : new g(oe.map(Re => Re.fn), Y)
    }

    function se(F) {
      var Y, oe, xe, Te;
      Y = ge(F);
      for (var Re = {
          "<<": "leftShift",
          ">>": "rightArithShift",
          ">>>": "rightLogShift"
        }; Ee(Re, F.token);) oe = F.token, xe = Re[oe], U(F), Te = [Y, ge(F)], Y = new d(oe, xe, Te);
      return Y
    }

    function ge(F) {
      var Y, oe, xe, Te;
      Y = Ae(F);
      for (var Re = {
          to: "to",
          in: "to"
        }; Ee(Re, F.token);) oe = F.token, xe = Re[oe], U(F), oe === "in" && F.token === "" ? Y = new d("*", "multiply", [Y, new N("in")], !0) : (Te = [Y, Ae(F)], Y = new d(oe, xe, Te));
      return Y
    }

    function Ae(F) {
      var Y, oe = [];
      if (F.token === ":" ? Y = new u(1) : Y = P(F), F.token === ":" && F.conditionalLevel !== F.nestingLevel) {
        for (oe.push(Y); F.token === ":" && oe.length < 3;) U(F), F.token === ")" || F.token === "]" || F.token === "," || F.token === "" ? oe.push(new N("end")) : oe.push(P(F));
        oe.length === 3 ? Y = new b(oe[0], oe[2], oe[1]) : Y = new b(oe[0], oe[1])
      }
      return Y
    }

    function P(F) {
      var Y, oe, xe, Te;
      Y = H(F);
      for (var Re = {
          "+": "add",
          "-": "subtract"
        }; Ee(Re, F.token);) {
        oe = F.token, xe = Re[oe], U(F);
        var Ur = H(F);
        Ur.isPercentage ? Te = [Y, new d("*", "multiply", [Y, Ur])] : Te = [Y, Ur], Y = new d(oe, xe, Te)
      }
      return Y
    }

    function H(F) {
      var Y, oe, xe, Te;
      Y = te(F), oe = Y;
      for (var Re = {
          "*": "multiply",
          ".*": "dotMultiply",
          "/": "divide",
          "./": "dotDivide"
        }; Ee(Re, F.token);) xe = F.token, Te = Re[xe], U(F), oe = te(F), Y = new d(xe, Te, [Y, oe]);
      return Y
    }

    function te(F) {
      var Y, oe;
      for (Y = k(F), oe = Y; F.tokenType === w.SYMBOL || F.token === "in" && Qe(Y) || F.tokenType === w.NUMBER && !Qe(oe) && (!mr(oe) || oe.op === "!") || F.token === "(";) oe = k(F), Y = new d("*", "multiply", [Y, oe], !0);
      return Y
    }

    function k(F) {
      for (var Y = W(F), oe = Y, xe = []; F.token === "/" && Vi(oe);)
        if (xe.push(pr({}, F)), U(F), F.tokenType === w.NUMBER)
          if (xe.push(pr({}, F)), U(F), F.tokenType === w.SYMBOL || F.token === "(") pr(F, xe.pop()), xe.pop(), oe = W(F), Y = new d("/", "divide", [Y, oe]);
          else {
            xe.pop(), pr(F, xe.pop());
            break
          }
      else {
        pr(F, xe.pop());
        break
      }
      return Y
    }

    function W(F) {
      var Y, oe, xe, Te;
      Y = K(F);
      for (var Re = {
          "%": "mod",
          mod: "mod"
        }; Ee(Re, F.token);) oe = F.token, xe = Re[oe], U(F), oe === "%" && F.tokenType === w.DELIMITER && F.token !== "(" ? Y = new d("/", "divide", [Y, new u(100)], !1, !0) : (Te = [Y, K(F)], Y = new d(oe, xe, Te));
      return Y
    }

    function K(F) {
      var Y, oe, xe, Te = {
        "-": "unaryMinus",
        "+": "unaryPlus",
        "~": "bitNot",
        not: "not"
      };
      return Ee(Te, F.token) ? (xe = Te[F.token], Y = F.token, U(F), oe = [K(F)], new d(Y, xe, oe)) : ve(F)
    }

    function ve(F) {
      var Y, oe, xe, Te;
      return Y = me(F), (F.token === "^" || F.token === ".^") && (oe = F.token, xe = oe === "^" ? "pow" : "dotPow", U(F), Te = [Y, K(F)], Y = new d(oe, xe, Te)), Y
    }

    function me(F) {
      var Y, oe, xe, Te;
      Y = R(F);
      for (var Re = {
          "!": "factorial",
          "'": "ctranspose"
        }; Ee(Re, F.token);) oe = F.token, xe = Re[oe], B(F), Te = [Y], Y = new d(oe, xe, Te), Y = j(F, Y);
      return Y
    }

    function R(F) {
      var Y = [];
      if (F.tokenType === w.SYMBOL && Ee(F.extraNodes, F.token)) {
        var oe = F.extraNodes[F.token];
        if (B(F), F.token === "(") {
          if (Y = [], O(F), B(F), F.token !== ")")
            for (Y.push(q(F)); F.token === ",";) B(F), Y.push(q(F));
          if (F.token !== ")") throw Ce(F, "Parenthesis ) expected");
          V(F), B(F)
        }
        return new oe(Y)
      }
      return L(F)
    }

    function L(F) {
      var Y, oe;
      return F.tokenType === w.SYMBOL || F.tokenType === w.DELIMITER && F.token in A ? (oe = F.token, B(F), Ee(E, oe) ? Y = new u(E[oe]) : D.indexOf(oe) !== -1 ? Y = new u(i(oe, "number")) : Y = new N(oe), Y = j(F, Y), Y) : ae(F)
    }

    function j(F, Y, oe) {
      for (var xe;
        (F.token === "(" || F.token === "[" || F.token === ".") && (!oe || oe.indexOf(F.token) !== -1);)
        if (xe = [], F.token === "(")
          if (yr(Y) || Wt(Y)) {
            if (O(F), B(F), F.token !== ")")
              for (xe.push(q(F)); F.token === ",";) B(F), xe.push(q(F));
            if (F.token !== ")") throw Ce(F, "Parenthesis ) expected");
            V(F), B(F), Y = new l(Y, xe)
          } else return Y;
      else if (F.token === "[") {
        if (O(F), B(F), F.token !== "]")
          for (xe.push(q(F)); F.token === ",";) B(F), xe.push(q(F));
        if (F.token !== "]") throw Ce(F, "Parenthesis ] expected");
        V(F), B(F), Y = new t(Y, new m(xe))
      } else {
        B(F);
        var Te = F.tokenType === w.SYMBOL || F.tokenType === w.DELIMITER && F.token in A;
        if (!Te) throw Ce(F, "Property name expected after dot");
        xe.push(new u(F.token)), B(F);
        var Re = !0;
        Y = new t(Y, new m(xe, Re))
      }
      return Y
    }

    function ae(F) {
      var Y, oe;
      return F.token === '"' || F.token === "'" ? (oe = fe(F, F.token), Y = new u(oe), Y = j(F, Y), Y) : ce(F)
    }

    function fe(F, Y) {
      for (var oe = ""; $(F) !== "" && $(F) !== Y;)
        if ($(F) === "\\") {
          I(F);
          var xe = $(F),
            Te = S[xe];
          if (Te !== void 0) oe += Te, F.index += 1;
          else if (xe === "u") {
            var Re = F.expression.slice(F.index + 1, F.index + 5);
            if (/^[0-9A-Fa-f]{4}$/.test(Re)) oe += String.fromCharCode(parseInt(Re, 16)), F.index += 5;
            else throw Ce(F, "Invalid unicode character \\u".concat(Re))
          } else throw Ce(F, "Bad escape character \\".concat(xe))
        } else oe += $(F), I(F);
      if (B(F), F.token !== Y) throw Ce(F, "End of string ".concat(Y, " expected"));
      return B(F), oe
    }

    function ce(F) {
      var Y, oe, xe, Te;
      if (F.token === "[") {
        if (O(F), B(F), F.token !== "]") {
          var Re = ye(F);
          if (F.token === ";") {
            for (xe = 1, oe = [Re]; F.token === ";";) B(F), oe[xe] = ye(F), xe++;
            if (F.token !== "]") throw Ce(F, "End of matrix ] expected");
            V(F), B(F), Te = oe[0].items.length;
            for (var Ur = 1; Ur < xe; Ur++)
              if (oe[Ur].items.length !== Te) throw lr(F, "Column dimensions mismatch (" + oe[Ur].items.length + " !== " + Te + ")");
            Y = new a(oe)
          } else {
            if (F.token !== "]") throw Ce(F, "End of matrix ] expected");
            V(F), B(F), Y = Re
          }
        } else V(F), B(F), Y = new a([]);
        return j(F, Y)
      }
      return he(F)
    }

    function ye(F) {
      for (var Y = [q(F)], oe = 1; F.token === ",";) B(F), Y[oe] = q(F), oe++;
      return new a(Y)
    }

    function he(F) {
      if (F.token === "{") {
        O(F);
        var Y, oe = {};
        do
          if (B(F), F.token !== "}") {
            if (F.token === '"' || F.token === "'") Y = fe(F, F.token);
            else if (F.tokenType === w.SYMBOL || F.tokenType === w.DELIMITER && F.token in A) Y = F.token, B(F);
            else throw Ce(F, "Symbol or string expected as object key");
            if (F.token !== ":") throw Ce(F, "Colon : expected after object key");
            B(F), oe[Y] = q(F)
          } while (F.token === ",");
        if (F.token !== "}") throw Ce(F, "Comma , or bracket } expected after object value");
        V(F), B(F);
        var xe = new v(oe);
        return xe = j(F, xe), xe
      }
      return De(F)
    }

    function De(F) {
      var Y;
      return F.tokenType === w.NUMBER ? (Y = F.token, B(F), new u(i(Y, n.number))) : be(F)
    }

    function be(F) {
      var Y;
      if (F.token === "(") {
        if (O(F), B(F), Y = q(F), F.token !== ")") throw Ce(F, "Parenthesis ) expected");
        return V(F), B(F), Y = new p(Y), Y = j(F, Y), Y
      }
      return Ge(F)
    }

    function Ge(F) {
      throw F.token === "" ? Ce(F, "Unexpected end of expression") : Ce(F, "Value expected")
    }

    function Ve(F) {
      return F.index - F.token.length + 1
    }

    function Ce(F, Y) {
      var oe = Ve(F),
        xe = new SyntaxError(Y + " (char " + oe + ")");
      return xe.char = oe, xe
    }

    function lr(F, Y) {
      var oe = Ve(F),
        xe = new SyntaxError(Y + " (char " + oe + ")");
      return xe.char = oe, xe
    }
    return r.addConversion({
      from: "string",
      to: "Node",
      convert: h
    }), h
  }),
  xc = "compile",
  rA = ["typed", "parse"],
  tA = z(xc, rA, e => {
    var {
      typed: r,
      parse: i
    } = e;
    return r(xc, {
      string: function(t) {
        return i(t).compile()
      },
      "Array | Matrix": function(t) {
        return Le(t, function(a) {
          return i(a).compile()
        })
      }
    })
  }),
  wc = "evaluate",
  nA = ["typed", "parse"],
  aA = z(wc, nA, e => {
    var {
      typed: r,
      parse: i
    } = e;
    return r(wc, {
      string: function(t) {
        var a = Cn();
        return i(t).compile().evaluate(a)
      },
      "string, Map | Object": function(t, a) {
        return i(t).compile().evaluate(a)
      },
      "Array | Matrix": function(t) {
        var a = Cn();
        return Le(t, function(o) {
          return i(o).compile().evaluate(a)
        })
      },
      "Array | Matrix, Map | Object": function(t, a) {
        return Le(t, function(o) {
          return i(o).compile().evaluate(a)
        })
      }
    })
  }),
  iA = "Parser",
  oA = ["evaluate"],
  sA = z(iA, oA, e => {
    var {
      evaluate: r
    } = e;

    function i() {
      if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
      Object.defineProperty(this, "scope", {
        value: Cn(),
        writable: !1
      })
    }
    return i.prototype.type = "Parser", i.prototype.isParser = !0, i.prototype.evaluate = function(n) {
      return r(n, this.scope)
    }, i.prototype.get = function(n) {
      if (this.scope.has(n)) return this.scope.get(n)
    }, i.prototype.getAll = function() {
      return Nh(this.scope)
    }, i.prototype.getAllAsMap = function() {
      return this.scope
    }, i.prototype.set = function(n, t) {
      return this.scope.set(n, t), t
    }, i.prototype.remove = function(n) {
      this.scope.delete(n)
    }, i.prototype.clear = function() {
      this.scope.clear()
    }, i
  }, {
    isClass: !0
  }),
  Nc = "parser",
  uA = ["typed", "Parser"],
  lA = z(Nc, uA, e => {
    var {
      typed: r,
      Parser: i
    } = e;
    return r(Nc, {
      "": function() {
        return new i
      }
    })
  }),
  Dc = "lup",
  cA = ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "larger", "equalScalar", "unaryMinus", "DenseMatrix", "SparseMatrix", "Spa"],
  fA = z(Dc, cA, e => {
    var {
      typed: r,
      matrix: i,
      abs: n,
      addScalar: t,
      divideScalar: a,
      multiplyScalar: o,
      subtractScalar: f,
      larger: c,
      equalScalar: u,
      unaryMinus: s,
      DenseMatrix: l,
      SparseMatrix: m,
      Spa: v
    } = e;
    return r(Dc, {
      DenseMatrix: function(g) {
        return d(g)
      },
      SparseMatrix: function(g) {
        return p(g)
      },
      Array: function(g) {
        var N = i(g),
          h = d(N);
        return {
          L: h.L.valueOf(),
          U: h.U.valueOf(),
          p: h.p
        }
      }
    });

    function d(b) {
      var g = b._size[0],
        N = b._size[1],
        h = Math.min(g, N),
        x = $e(b._data),
        w = [],
        y = [g, h],
        A = [],
        E = [h, N],
        D, S, C, M = [];
      for (D = 0; D < g; D++) M[D] = D;
      for (S = 0; S < N; S++) {
        if (S > 0)
          for (D = 0; D < g; D++) {
            var $ = Math.min(D, S),
              I = 0;
            for (C = 0; C < $; C++) I = t(I, o(x[D][C], x[C][S]));
            x[D][S] = f(x[D][S], I)
          }
        var _ = S,
          T = 0,
          B = 0;
        for (D = S; D < g; D++) {
          var U = x[D][S],
            O = n(U);
          c(O, T) && (_ = D, T = O, B = U)
        }
        if (S !== _ && (M[S] = [M[_], M[_] = M[S]][0], l._swapRows(S, _, x)), S < g)
          for (D = S + 1; D < g; D++) {
            var V = x[D][S];
            u(V, 0) || (x[D][S] = a(x[D][S], B))
          }
      }
      for (S = 0; S < N; S++)
        for (D = 0; D < g; D++) {
          if (S === 0 && (D < N && (A[D] = []), w[D] = []), D < S) {
            D < N && (A[D][S] = x[D][S]), S < g && (w[D][S] = 0);
            continue
          }
          if (D === S) {
            D < N && (A[D][S] = x[D][S]), S < g && (w[D][S] = 1);
            continue
          }
          D < N && (A[D][S] = 0), S < g && (w[D][S] = x[D][S])
        }
      var J = new l({
          data: w,
          size: y
        }),
        Z = new l({
          data: A,
          size: E
        }),
        q = [];
      for (D = 0, h = M.length; D < h; D++) q[M[D]] = D;
      return {
        L: J,
        U: Z,
        p: q,
        toString: function() {
          return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
P: ` + this.p
        }
      }
    }

    function p(b) {
      var g = b._size[0],
        N = b._size[1],
        h = Math.min(g, N),
        x = b._values,
        w = b._index,
        y = b._ptr,
        A = [],
        E = [],
        D = [],
        S = [g, h],
        C = [],
        M = [],
        $ = [],
        I = [h, N],
        _, T, B, U = [],
        O = [];
      for (_ = 0; _ < g; _++) U[_] = _, O[_] = _;
      var V = function(q, X) {
          var ie = O[q],
            Q = O[X];
          U[ie] = X, U[Q] = q, O[q] = Q, O[X] = ie
        },
        J = function() {
          var q = new v;
          T < g && (D.push(A.length), A.push(1), E.push(T)), $.push(C.length);
          var X = y[T],
            ie = y[T + 1];
          for (B = X; B < ie; B++) _ = w[B], q.set(U[_], x[B]);
          T > 0 && q.forEach(0, T - 1, function(re, ne) {
            m._forEachRow(re, A, E, D, function(le, se) {
              le > re && q.accumulate(le, s(o(se, ne)))
            })
          });
          var Q = T,
            ee = q.get(T),
            ue = n(ee);
          q.forEach(T + 1, g - 1, function(re, ne) {
            var le = n(ne);
            c(le, ue) && (Q = re, ue = le, ee = ne)
          }), T !== Q && (m._swapRows(T, Q, S[1], A, E, D), m._swapRows(T, Q, I[1], C, M, $), q.swap(T, Q), V(T, Q)), q.forEach(0, g - 1, function(re, ne) {
            re <= T ? (C.push(ne), M.push(re)) : (ne = a(ne, ee), u(ne, 0) || (A.push(ne), E.push(re)))
          })
        };
      for (T = 0; T < N; T++) J();
      return $.push(C.length), D.push(A.length), {
        L: new m({
          values: A,
          index: E,
          ptr: D,
          size: S
        }),
        U: new m({
          values: C,
          index: M,
          ptr: $,
          size: I
        }),
        p: U,
        toString: function() {
          return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
P: ` + this.p
        }
      }
    }
  }),
  Ac = "qr",
  mA = ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "complex"],
  vA = z(Ac, mA, e => {
    var {
      typed: r,
      matrix: i,
      zeros: n,
      identity: t,
      isZero: a,
      equal: o,
      sign: f,
      sqrt: c,
      conj: u,
      unaryMinus: s,
      addScalar: l,
      divideScalar: m,
      multiplyScalar: v,
      subtractScalar: d,
      complex: p
    } = e;
    return pr(r(Ac, {
      DenseMatrix: function(x) {
        return g(x)
      },
      SparseMatrix: function(x) {
        return N()
      },
      Array: function(x) {
        var w = i(x),
          y = g(w);
        return {
          Q: y.Q.valueOf(),
          R: y.R.valueOf()
        }
      }
    }), {
      _denseQRimpl: b
    });

    function b(h) {
      var x = h._size[0],
        w = h._size[1],
        y = t([x], "dense"),
        A = y._data,
        E = h.clone(),
        D = E._data,
        S, C, M, $ = n([x], "");
      for (M = 0; M < Math.min(w, x); ++M) {
        var I = D[M][M],
          _ = s(o(I, 0) ? 1 : f(I)),
          T = u(_),
          B = 0;
        for (S = M; S < x; S++) B = l(B, v(D[S][M], u(D[S][M])));
        var U = v(_, c(B));
        if (!a(U)) {
          var O = d(I, U);
          for ($[M] = 1, S = M + 1; S < x; S++) $[S] = m(D[S][M], O);
          var V = s(u(m(O, U))),
            J = void 0;
          for (C = M; C < w; C++) {
            for (J = 0, S = M; S < x; S++) J = l(J, v(u($[S]), D[S][C]));
            for (J = v(J, V), S = M; S < x; S++) D[S][C] = v(d(D[S][C], v($[S], J)), T)
          }
          for (S = 0; S < x; S++) {
            for (J = 0, C = M; C < x; C++) J = l(J, v(A[S][C], $[C]));
            for (J = v(J, V), C = M; C < x; ++C) A[S][C] = m(d(A[S][C], v(J, u($[C]))), T)
          }
        }
      }
      return {
        Q: y,
        R: E,
        toString: function() {
          return "Q: " + this.Q.toString() + `
R: ` + this.R.toString()
        }
      }
    }

    function g(h) {
      var x = b(h),
        w = x.R._data;
      if (h._data.length > 0)
        for (var y = w[0][0].type === "Complex" ? p(0) : 0, A = 0; A < w.length; ++A)
          for (var E = 0; E < A && E < (w[0] || []).length; ++E) w[A][E] = y;
      return x
    }

    function N(h) {
      throw new Error("qr not implemented for sparse matrices yet")
    }
  });

function pA(e, r, i, n) {
  for (var t = e._values, a = e._index, o = e._ptr, f = e._size, c = e._datatype, u = f[0], s = f[1], l = n && e._values ? [] : null, m = [], v = [], d = 0, p = 0; p < s; p++) {
    v[p] = d;
    for (var b = i ? i[p] : p, g = o[b], N = o[b + 1], h = g; h < N; h++) {
      var x = r ? r[a[h]] : a[h];
      m[d] = x, l && (l[d] = t[h]), d++
    }
  }
  return v[s] = d, e.createSparseMatrix({
    values: l,
    index: m,
    ptr: v,
    size: [u, s],
    datatype: c
  })
}

function _v(e, r, i, n, t, a, o) {
  var f = 0;
  for (i[o] = e; f >= 0;) {
    var c = i[o + f],
      u = i[n + c];
    u === -1 ? (f--, a[r++] = c) : (i[n + c] = i[t + u], ++f, i[o + f] = u)
  }
  return r
}

function dA(e, r) {
  if (!e) return null;
  var i = 0,
    n, t = [],
    a = [],
    o = 0,
    f = r,
    c = 2 * r;
  for (n = 0; n < r; n++) a[o + n] = -1;
  for (n = r - 1; n >= 0; n--) e[n] !== -1 && (a[f + n] = a[o + e[n]], a[o + e[n]] = n);
  for (n = 0; n < r; n++) e[n] === -1 && (i = _v(n, i, a, o, f, t, c));
  return t
}

function hA(e, r) {
  if (!e) return null;
  var i = e._index,
    n = e._ptr,
    t = e._size,
    a = t[0],
    o = t[1],
    f = [],
    c = [],
    u = 0,
    s = o,
    l, m;
  if (r)
    for (l = 0; l < a; l++) c[s + l] = -1;
  for (var v = 0; v < o; v++) {
    f[v] = -1, c[u + v] = -1;
    for (var d = n[v], p = n[v + 1], b = d; b < p; b++) {
      var g = i[b];
      for (l = r ? c[s + g] : g; l !== -1 && l < v; l = m) m = c[u + l], c[u + l] = v, m === -1 && (f[l] = v);
      r && (c[s + g] = v)
    }
  }
  return f
}

function gA(e, r, i) {
  for (var n = e._values, t = e._index, a = e._ptr, o = e._size, f = o[1], c = 0, u = 0; u < f; u++) {
    var s = a[u];
    for (a[u] = c; s < a[u + 1]; s++) r(t[s], u, n ? n[s] : 1, i) && (t[c] = t[s], n && (n[c] = n[s]), c++)
  }
  return a[f] = c, t.splice(c, t.length - c), n && n.splice(c, n.length - c), c
}

function $t(e) {
  return -e - 2
}
var yA = "csAmd",
  bA = ["add", "multiply", "transpose"],
  xA = z(yA, bA, e => {
    var {
      add: r,
      multiply: i,
      transpose: n
    } = e;
    return function(s, l) {
      if (!l || s <= 0 || s > 3) return null;
      var m = l._size,
        v = m[0],
        d = m[1],
        p = 0,
        b = Math.max(16, 10 * Math.sqrt(d));
      b = Math.min(d - 2, b);
      var g = t(s, l, v, d, b);
      gA(g, c, null);
      for (var N = g._index, h = g._ptr, x = h[d], w = [], y = [], A = 0, E = d + 1, D = 2 * (d + 1), S = 3 * (d + 1), C = 4 * (d + 1), M = 5 * (d + 1), $ = 6 * (d + 1), I = 7 * (d + 1), _ = w, T = a(d, h, y, A, S, _, D, I, E, $, C, M), B = o(d, h, y, M, C, $, b, E, S, _, D), U = 0, O, V, J, Z, q, X, ie, Q, ee, ue, re, ne, le, se, ge, Ae; B < d;) {
        for (J = -1; U < d && (J = y[S + U]) === -1; U++);
        y[D + J] !== -1 && (_[y[D + J]] = -1), y[S + U] = y[D + J];
        var P = y[C + J],
          H = y[E + J];
        B += H;
        var te = 0;
        y[E + J] = -H;
        var k = h[J],
          W = P === 0 ? k : x,
          K = W;
        for (Z = 1; Z <= P + 1; Z++) {
          for (Z > P ? (X = J, ie = k, Q = y[A + J] - P) : (X = N[k++], ie = h[X], Q = y[A + X]), q = 1; q <= Q; q++) O = N[ie++], !((ee = y[E + O]) <= 0) && (te += ee, y[E + O] = -ee, N[K++] = O, y[D + O] !== -1 && (_[y[D + O]] = _[O]), _[O] !== -1 ? y[D + _[O]] = y[D + O] : y[S + y[M + O]] = y[D + O]);
          X !== J && (h[X] = $t(J), y[$ + X] = 0)
        }
        for (P !== 0 && (x = K), y[M + J] = te, h[J] = W, y[A + J] = K - W, y[C + J] = -2, T = f(T, p, y, $, d), ue = W; ue < K; ue++)
          if (O = N[ue], !((re = y[C + O]) <= 0)) {
            ee = -y[E + O];
            var ve = T - ee;
            for (k = h[O], ne = h[O] + re - 1; k <= ne; k++) X = N[k], y[$ + X] >= T ? y[$ + X] -= ee : y[$ + X] !== 0 && (y[$ + X] = y[M + X] + ve)
          } for (ue = W; ue < K; ue++) {
          for (O = N[ue], ne = h[O], le = ne + y[C + O] - 1, se = ne, ge = 0, Ae = 0, k = ne; k <= le; k++)
            if (X = N[k], y[$ + X] !== 0) {
              var me = y[$ + X] - T;
              me > 0 ? (Ae += me, N[se++] = X, ge += X) : (h[X] = $t(J), y[$ + X] = 0)
            } y[C + O] = se - ne + 1;
          var R = se,
            L = ne + y[A + O];
          for (k = le + 1; k < L; k++) {
            V = N[k];
            var j = y[E + V];
            j <= 0 || (Ae += j, N[se++] = V, ge += V)
          }
          Ae === 0 ? (h[O] = $t(J), ee = -y[E + O], te -= ee, H += ee, B += ee, y[E + O] = 0, y[C + O] = -1) : (y[M + O] = Math.min(y[M + O], Ae), N[se] = N[R], N[R] = N[ne], N[ne] = J, y[A + O] = se - ne + 1, ge = (ge < 0 ? -ge : ge) % d, y[D + O] = y[I + ge], y[I + ge] = O, _[O] = ge)
        }
        for (y[M + J] = te, p = Math.max(p, te), T = f(T + p, p, y, $, d), ue = W; ue < K; ue++)
          if (O = N[ue], !(y[E + O] >= 0))
            for (ge = _[O], O = y[I + ge], y[I + ge] = -1; O !== -1 && y[D + O] !== -1; O = y[D + O], T++) {
              for (Q = y[A + O], re = y[C + O], k = h[O] + 1; k <= h[O] + Q - 1; k++) y[$ + N[k]] = T;
              var ae = O;
              for (V = y[D + O]; V !== -1;) {
                var fe = y[A + V] === Q && y[C + V] === re;
                for (k = h[V] + 1; fe && k <= h[V] + Q - 1; k++) y[$ + N[k]] !== T && (fe = 0);
                fe ? (h[V] = $t(O), y[E + O] += y[E + V], y[E + V] = 0, y[C + V] = -1, V = y[D + V], y[D + ae] = V) : (ae = V, V = y[D + V])
              }
            }
        for (k = W, ue = W; ue < K; ue++) O = N[ue], !((ee = -y[E + O]) <= 0) && (y[E + O] = ee, Ae = y[M + O] + te - ee, Ae = Math.min(Ae, d - B - ee), y[S + Ae] !== -1 && (_[y[S + Ae]] = O), y[D + O] = y[S + Ae], _[O] = -1, y[S + Ae] = O, U = Math.min(U, Ae), y[M + O] = Ae, N[k++] = O);
        y[E + J] = H, (y[A + J] = k - W) === 0 && (h[J] = -1, y[$ + J] = 0), P !== 0 && (x = k)
      }
      for (O = 0; O < d; O++) h[O] = $t(h[O]);
      for (V = 0; V <= d; V++) y[S + V] = -1;
      for (V = d; V >= 0; V--) y[E + V] > 0 || (y[D + V] = y[S + h[V]], y[S + h[V]] = V);
      for (X = d; X >= 0; X--) y[E + X] <= 0 || h[X] !== -1 && (y[D + X] = y[S + h[X]], y[S + h[X]] = X);
      for (J = 0, O = 0; O <= d; O++) h[O] === -1 && (J = _v(O, J, y, S, D, w, $));
      return w.splice(w.length - 1, 1), w
    };

    function t(u, s, l, m, v) {
      var d = n(s);
      if (u === 1 && m === l) return r(s, d);
      if (u === 2) {
        for (var p = d._index, b = d._ptr, g = 0, N = 0; N < l; N++) {
          var h = b[N];
          if (b[N] = g, !(b[N + 1] - h > v))
            for (var x = b[N + 1]; h < x; h++) p[g++] = p[h]
        }
        return b[l] = g, s = n(d), i(d, s)
      }
      return i(d, s)
    }

    function a(u, s, l, m, v, d, p, b, g, N, h, x) {
      for (var w = 0; w < u; w++) l[m + w] = s[w + 1] - s[w];
      l[m + u] = 0;
      for (var y = 0; y <= u; y++) l[v + y] = -1, d[y] = -1, l[p + y] = -1, l[b + y] = -1, l[g + y] = 1, l[N + y] = 1, l[h + y] = 0, l[x + y] = l[m + y];
      var A = f(0, 0, l, N, u);
      return l[h + u] = -2, s[u] = -1, l[N + u] = 0, A
    }

    function o(u, s, l, m, v, d, p, b, g, N, h) {
      for (var x = 0, w = 0; w < u; w++) {
        var y = l[m + w];
        if (y === 0) l[v + w] = -2, x++, s[w] = -1, l[d + w] = 0;
        else if (y > p) l[b + w] = 0, l[v + w] = -1, x++, s[w] = $t(u), l[b + u]++;
        else {
          var A = l[g + y];
          A !== -1 && (N[A] = w), l[h + w] = l[g + y], l[g + y] = w
        }
      }
      return x
    }

    function f(u, s, l, m, v) {
      if (u < 2 || u + s < 0) {
        for (var d = 0; d < v; d++) l[m + d] !== 0 && (l[m + d] = 1);
        u = 2
      }
      return u
    }

    function c(u, s) {
      return u !== s
    }
  });

function wA(e, r, i, n, t, a, o) {
  var f, c, u = 0,
    s;
  if (e <= r || i[n + r] <= i[t + e]) return -1;
  i[t + e] = i[n + r];
  var l = i[a + e];
  if (i[a + e] = r, l === -1) u = 1, s = e;
  else {
    for (u = 2, s = l; s !== i[o + s]; s = i[o + s]);
    for (f = l; f !== s; f = c) c = i[o + f], i[o + f] = s
  }
  return {
    jleaf: u,
    q: s
  }
}
var NA = "csCounts",
  DA = ["transpose"],
  AA = z(NA, DA, e => {
    var {
      transpose: r
    } = e;
    return function(i, n, t, a) {
      if (!i || !n || !t) return null;
      var o = i._size,
        f = o[0],
        c = o[1],
        u, s, l, m, v, d, p, b = 4 * c + (a ? c + f + 1 : 0),
        g = [],
        N = 0,
        h = c,
        x = 2 * c,
        w = 3 * c,
        y = 4 * c,
        A = 5 * c + 1;
      for (l = 0; l < b; l++) g[l] = -1;
      var E = [],
        D = r(i),
        S = D._index,
        C = D._ptr;
      for (l = 0; l < c; l++)
        for (s = t[l], E[s] = g[w + s] === -1 ? 1 : 0; s !== -1 && g[w + s] === -1; s = n[s]) g[w + s] = l;
      if (a) {
        for (l = 0; l < c; l++) g[t[l]] = l;
        for (u = 0; u < f; u++) {
          for (l = c, d = C[u], p = C[u + 1], v = d; v < p; v++) l = Math.min(l, g[S[v]]);
          g[A + u] = g[y + l], g[y + l] = u
        }
      }
      for (u = 0; u < c; u++) g[N + u] = u;
      for (l = 0; l < c; l++) {
        for (s = t[l], n[s] !== -1 && E[n[s]]--, m = a ? g[y + l] : s; m !== -1; m = a ? g[A + m] : -1)
          for (v = C[m]; v < C[m + 1]; v++) {
            u = S[v];
            var M = wA(u, s, g, w, h, x, N);
            M.jleaf >= 1 && E[s]++, M.jleaf === 2 && E[M.q]--
          }
        n[s] !== -1 && (g[N + s] = n[s])
      }
      for (s = 0; s < c; s++) n[s] !== -1 && (E[n[s]] += E[s]);
      return E
    }
  }),
  EA = "csSqr",
  SA = ["add", "multiply", "transpose"],
  CA = z(EA, SA, e => {
    var {
      add: r,
      multiply: i,
      transpose: n
    } = e, t = xA({
      add: r,
      multiply: i,
      transpose: n
    }), a = AA({
      transpose: n
    });
    return function(c, u, s) {
      var l = u._ptr,
        m = u._size,
        v = m[1],
        d, p = {};
      if (p.q = t(c, u), c && !p.q) return null;
      if (s) {
        var b = c ? pA(u, null, p.q, 0) : u;
        p.parent = hA(b, 1);
        var g = dA(p.parent, v);
        if (p.cp = a(b, p.parent, g, 1), b && p.parent && p.cp && o(b, p))
          for (p.unz = 0, d = 0; d < v; d++) p.unz += p.cp[d]
      } else p.unz = 4 * l[v] + v, p.lnz = p.unz;
      return p
    };

    function o(f, c) {
      var u = f._ptr,
        s = f._index,
        l = f._size,
        m = l[0],
        v = l[1];
      c.pinv = [], c.leftmost = [];
      var d = c.parent,
        p = c.pinv,
        b = c.leftmost,
        g = [],
        N = 0,
        h = m,
        x = m + v,
        w = m + 2 * v,
        y, A, E, D, S;
      for (A = 0; A < v; A++) g[h + A] = -1, g[x + A] = -1, g[w + A] = 0;
      for (y = 0; y < m; y++) b[y] = -1;
      for (A = v - 1; A >= 0; A--)
        for (D = u[A], S = u[A + 1], E = D; E < S; E++) b[s[E]] = A;
      for (y = m - 1; y >= 0; y--) p[y] = -1, A = b[y], A !== -1 && (g[w + A]++ === 0 && (g[x + A] = y), g[N + y] = g[h + A], g[h + A] = y);
      for (c.lnz = 0, c.m2 = m, A = 0; A < v; A++)
        if (y = g[h + A], c.lnz++, y < 0 && (y = c.m2++), p[y] = A, !(--w[A] <= 0)) {
          c.lnz += g[w + A];
          var C = d[A];
          C !== -1 && (g[w + C] === 0 && (g[x + C] = g[x + A]), g[N + g[x + A]] = g[h + C], g[h + C] = g[N + y], g[w + C] += g[w + A])
        } for (y = 0; y < m; y++) p[y] < 0 && (p[y] = A++);
      return !0
    }
  });

function oo(e, r) {
  return e[r] < 0
}

function Iv(e, r) {
  e[r] = $t(e[r])
}

function Ec(e) {
  return e < 0 ? $t(e) : e
}

function MA(e, r, i, n, t) {
  var a = r._index,
    o = r._ptr,
    f = r._size,
    c = f[1],
    u, s, l, m = 0;
  for (n[0] = e; m >= 0;) {
    e = n[m];
    var v = t ? t[e] : e;
    oo(o, e) || (Iv(o, e), n[c + m] = v < 0 ? 0 : Ec(o[v]));
    var d = 1;
    for (s = n[c + m], l = v < 0 ? 0 : Ec(o[v + 1]); s < l; s++)
      if (u = a[s], !oo(o, u)) {
        n[c + m] = s, n[++m] = u, d = 0;
        break
      } d && (m--, n[--i] = e)
  }
  return i
}

function FA(e, r, i, n, t) {
  var a = e._ptr,
    o = e._size,
    f = r._index,
    c = r._ptr,
    u = o[1],
    s, l, m, v = u;
  for (l = c[i], m = c[i + 1], s = l; s < m; s++) {
    var d = f[s];
    oo(a, d) || (v = MA(d, e, v, n, t))
  }
  for (s = v; s < u; s++) Iv(a, n[s]);
  return v
}
var BA = "csSpsolve",
  TA = ["divideScalar", "multiply", "subtract"],
  OA = z(BA, TA, e => {
    var {
      divideScalar: r,
      multiply: i,
      subtract: n
    } = e;
    return function(a, o, f, c, u, s, l) {
      var m = a._values,
        v = a._index,
        d = a._ptr,
        p = a._size,
        b = p[1],
        g = o._values,
        N = o._index,
        h = o._ptr,
        x, w, y, A, E = FA(a, o, f, c, s);
      for (x = E; x < b; x++) u[c[x]] = 0;
      for (w = h[f], y = h[f + 1], x = w; x < y; x++) u[N[x]] = g[x];
      for (var D = E; D < b; D++) {
        var S = c[D],
          C = s ? s[S] : S;
        if (!(C < 0))
          for (w = d[C], y = d[C + 1], u[S] = r(u[S], m[l ? w : y - 1]), x = l ? w + 1 : w, A = l ? y : y - 1; x < A; x++) {
            var M = v[x];
            u[M] = n(u[M], i(m[x], u[S]))
          }
      }
      return E
    }
  }),
  $A = "csLu",
  _A = ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq", "SparseMatrix"],
  IA = z($A, _A, e => {
    var {
      abs: r,
      divideScalar: i,
      multiply: n,
      subtract: t,
      larger: a,
      largerEq: o,
      SparseMatrix: f
    } = e, c = OA({
      divideScalar: i,
      multiply: n,
      subtract: t
    });
    return function(s, l, m) {
      if (!s) return null;
      var v = s._size,
        d = v[1],
        p, b = 100,
        g = 100;
      l && (p = l.q, b = l.lnz || b, g = l.unz || g);
      var N = [],
        h = [],
        x = [],
        w = new f({
          values: N,
          index: h,
          ptr: x,
          size: [d, d]
        }),
        y = [],
        A = [],
        E = [],
        D = new f({
          values: y,
          index: A,
          ptr: E,
          size: [d, d]
        }),
        S = [],
        C, M, $ = [],
        I = [];
      for (C = 0; C < d; C++) $[C] = 0, S[C] = -1, x[C + 1] = 0;
      b = 0, g = 0;
      for (var _ = 0; _ < d; _++) {
        x[_] = b, E[_] = g;
        var T = p ? p[_] : _,
          B = c(w, s, T, I, $, S, 1),
          U = -1,
          O = -1;
        for (M = B; M < d; M++)
          if (C = I[M], S[C] < 0) {
            var V = r($[C]);
            a(V, O) && (O = V, U = C)
          } else A[g] = S[C], y[g++] = $[C];
        if (U === -1 || O <= 0) return null;
        S[T] < 0 && o(r($[T]), n(O, m)) && (U = T);
        var J = $[U];
        for (A[g] = _, y[g++] = J, S[U] = _, h[b] = U, N[b++] = 1, M = B; M < d; M++) C = I[M], S[C] < 0 && (h[b] = C, N[b++] = i($[C], J)), $[C] = 0
      }
      for (x[d] = b, E[d] = g, M = 0; M < b; M++) h[M] = S[h[M]];
      return N.splice(b, N.length - b), h.splice(b, h.length - b), y.splice(g, y.length - g), A.splice(g, A.length - g), {
        L: w,
        U: D,
        pinv: S
      }
    }
  }),
  Sc = "slu",
  qA = ["typed", "abs", "add", "multiply", "transpose", "divideScalar", "subtract", "larger", "largerEq", "SparseMatrix"],
  RA = z(Sc, qA, e => {
    var {
      typed: r,
      abs: i,
      add: n,
      multiply: t,
      transpose: a,
      divideScalar: o,
      subtract: f,
      larger: c,
      largerEq: u,
      SparseMatrix: s
    } = e, l = CA({
      add: n,
      multiply: t,
      transpose: a
    }), m = IA({
      abs: i,
      divideScalar: o,
      multiply: t,
      subtract: f,
      larger: c,
      largerEq: u,
      SparseMatrix: s
    });
    return r(Sc, {
      "SparseMatrix, number, number": function(d, p, b) {
        if (!Se(p) || p < 0 || p > 3) throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");
        if (b < 0 || b > 1) throw new Error("Partial pivoting threshold must be a number from 0 to 1");
        var g = l(p, d, !1),
          N = m(d, g, b);
        return {
          L: N.L,
          U: N.U,
          p: N.pinv,
          q: g.q,
          toString: function() {
            return "L: " + this.L.toString() + `
U: ` + this.U.toString() + `
p: ` + this.p.toString() + (this.q ? `
q: ` + this.q.toString() : "") + `
`
          }
        }
      }
    })
  });

function Cc(e, r) {
  var i, n = r.length,
    t = [];
  if (e)
    for (i = 0; i < n; i++) t[e[i]] = r[i];
  else
    for (i = 0; i < n; i++) t[i] = r[i];
  return t
}
var Mc = "lusolve",
  zA = ["typed", "matrix", "lup", "slu", "usolve", "lsolve", "DenseMatrix"],
  PA = z(Mc, zA, e => {
    var {
      typed: r,
      matrix: i,
      lup: n,
      slu: t,
      usolve: a,
      lsolve: o,
      DenseMatrix: f
    } = e, c = ca({
      DenseMatrix: f
    });
    return r(Mc, {
      "Array, Array | Matrix": function(m, v) {
        m = i(m);
        var d = n(m),
          p = s(d.L, d.U, d.p, null, v);
        return p.valueOf()
      },
      "DenseMatrix, Array | Matrix": function(m, v) {
        var d = n(m);
        return s(d.L, d.U, d.p, null, v)
      },
      "SparseMatrix, Array | Matrix": function(m, v) {
        var d = n(m);
        return s(d.L, d.U, d.p, null, v)
      },
      "SparseMatrix, Array | Matrix, number, number": function(m, v, d, p) {
        var b = t(m, d, p);
        return s(b.L, b.U, b.p, b.q, v)
      },
      "Object, Array | Matrix": function(m, v) {
        return s(m.L, m.U, m.p, m.q, v)
      }
    });

    function u(l) {
      if (Fe(l)) return l;
      if (Je(l)) return i(l);
      throw new TypeError("Invalid Matrix LU decomposition")
    }

    function s(l, m, v, d, p) {
      l = u(l), m = u(m), v && (p = c(l, p, !0), p._data = Cc(v, p._data));
      var b = o(l, p),
        g = a(m, b);
      return d && (g._data = Cc(d, g._data)), g
    }
  }),
  Fc = "polynomialRoot",
  UA = ["typed", "isZero", "equalScalar", "add", "subtract", "multiply", "divide", "sqrt", "unaryMinus", "cbrt", "typeOf", "im", "re"],
  LA = z(Fc, UA, e => {
    var {
      typed: r,
      isZero: i,
      equalScalar: n,
      add: t,
      subtract: a,
      multiply: o,
      divide: f,
      sqrt: c,
      unaryMinus: u,
      cbrt: s,
      typeOf: l,
      im: m,
      re: v
    } = e;
    return r(Fc, {
      "number|Complex, ...number|Complex": (d, p) => {
        for (var b = [d, ...p]; b.length > 0 && i(b[b.length - 1]);) b.pop();
        if (b.length < 2) throw new RangeError("Polynomial [".concat(d, ", ").concat(p, "] must have a non-zero non-constant coefficient"));
        switch (b.length) {
          case 2:
            return [u(f(b[0], b[1]))];
          case 3: {
            var [g, N, h] = b, x = o(2, h), w = o(N, N), y = o(4, h, g);
            if (n(w, y)) return [f(u(N), x)];
            var A = c(a(w, y));
            return [f(a(A, N), x), f(a(u(A), N), x)]
          }
          case 4: {
            var [E, D, S, C] = b, M = u(o(3, C)), $ = o(S, S), I = o(3, C, D), _ = t(o(2, S, S, S), o(27, C, C, E)), T = o(9, C, S, D);
            if (n($, I) && n(_, T)) return [f(S, M)];
            var B = a($, I),
              U = a(_, T),
              O = t(o(18, C, S, D, E), o(S, S, D, D)),
              V = t(o(4, S, S, S, E), o(4, C, D, D, D), o(27, C, C, E, E));
            if (n(O, V)) return [f(a(o(4, C, S, D), t(o(9, C, C, E), o(S, S, S))), o(C, B)), f(a(o(9, C, E), o(S, D)), o(2, B))];
            var J;
            n($, I) ? J = U : J = f(t(U, c(a(o(U, U), o(4, B, B, B)))), 2);
            var Z = !0,
              q = s(J, Z).toArray().map(X => f(t(S, X, f(B, X)), M));
            return q.map(X => l(X) === "Complex" && n(v(X), v(X) + m(X)) ? v(X) : X)
          }
          default:
            throw new RangeError("only implemented for cubic or lower-order polynomials, not ".concat(b))
        }
      }
    })
  }),
  kA = "Help",
  HA = ["parse"],
  GA = z(kA, HA, e => {
    var {
      parse: r
    } = e;

    function i(n) {
      if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
      if (!n) throw new Error('Argument "doc" missing');
      this.doc = n
    }
    return i.prototype.type = "Help", i.prototype.isHelp = !0, i.prototype.toString = function() {
      var n = this.doc || {},
        t = `
`;
      if (n.name && (t += "Name: " + n.name + `

`), n.category && (t += "Category: " + n.category + `

`), n.description && (t += `Description:
    ` + n.description + `

`), n.syntax && (t += `Syntax:
    ` + n.syntax.join(`
    `) + `

`), n.examples) {
        t += `Examples:
`;
        for (var a = {}, o = 0; o < n.examples.length; o++) {
          var f = n.examples[o];
          t += "    " + f + `
`;
          var c = void 0;
          try {
            c = r(f).compile().evaluate(a)
          } catch (u) {
            c = u
          }
          c !== void 0 && !kf(c) && (t += "        " + ze(c, {
            precision: 14
          }) + `
`)
        }
        t += `
`
      }
      return n.mayThrow && n.mayThrow.length && (t += "Throws: " + n.mayThrow.join(", ") + `

`), n.seealso && n.seealso.length && (t += "See also: " + n.seealso.join(", ") + `
`), t
    }, i.prototype.toJSON = function() {
      var n = $e(this.doc);
      return n.mathjs = "Help", n
    }, i.fromJSON = function(n) {
      var t = {};
      return Object.keys(n).filter(a => a !== "mathjs").forEach(a => {
        t[a] = n[a]
      }), new i(t)
    }, i.prototype.valueOf = i.prototype.toString, i
  }, {
    isClass: !0
  }),
  VA = "Chain",
  ZA = ["?on", "math", "typed"],
  YA = z(VA, ZA, e => {
    var {
      on: r,
      math: i,
      typed: n
    } = e;

    function t(u) {
      if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
      Hf(u) ? this.value = u.value : this.value = u
    }
    t.prototype.type = "Chain", t.prototype.isChain = !0, t.prototype.done = function() {
      return this.value
    }, t.prototype.valueOf = function() {
      return this.value
    }, t.prototype.toString = function() {
      return ze(this.value)
    }, t.prototype.toJSON = function() {
      return {
        mathjs: "Chain",
        value: this.value
      }
    }, t.fromJSON = function(u) {
      return new t(u.value)
    };

    function a(u, s) {
      typeof s == "function" && (t.prototype[u] = f(s))
    }

    function o(u, s) {
      Pd(t.prototype, u, function() {
        var m = s();
        if (typeof m == "function") return f(m)
      })
    }

    function f(u) {
      return function() {
        if (arguments.length === 0) return new t(u(this.value));
        for (var s = [this.value], l = 0; l < arguments.length; l++) s[l + 1] = arguments[l];
        if (n.isTypedFunction(u)) {
          var m = n.resolve(u, s);
          if (m.params.length === 1) throw new Error("chain function " + u.name + " cannot match rest parameter between chain value and additional arguments.");
          return new t(m.implementation.apply(u, s))
        }
        return new t(u.apply(u, s))
      }
    }
    t.createProxy = function(u, s) {
      if (typeof u == "string") a(u, s);
      else {
        var l = function(d) {
          Ee(u, d) && c[d] === void 0 && o(d, () => u[d])
        };
        for (var m in u) l(m)
      }
    };
    var c = {
      expression: !0,
      docs: !0,
      type: !0,
      classes: !0,
      json: !0,
      error: !0,
      isChain: !0
    };
    return t.createProxy(i), r && r("import", function(u, s, l) {
      l || o(u, s)
    }), t
  }, {
    isClass: !0
  }),
  Bc = {
    name: "e",
    category: "Constants",
    syntax: ["e"],
    description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
    examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
    seealso: ["exp"]
  },
  WA = {
    name: "false",
    category: "Constants",
    syntax: ["false"],
    description: "Boolean value false",
    examples: ["false"],
    seealso: ["true"]
  },
  QA = {
    name: "i",
    category: "Constants",
    syntax: ["i"],
    description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
    examples: ["i", "i * i", "sqrt(-1)"],
    seealso: []
  },
  XA = {
    name: "Infinity",
    category: "Constants",
    syntax: ["Infinity"],
    description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
    examples: ["Infinity", "1 / 0"],
    seealso: []
  },
  JA = {
    name: "LN10",
    category: "Constants",
    syntax: ["LN10"],
    description: "Returns the natural logarithm of 10, approximately equal to 2.302",
    examples: ["LN10", "log(10)"],
    seealso: []
  },
  KA = {
    name: "LN2",
    category: "Constants",
    syntax: ["LN2"],
    description: "Returns the natural logarithm of 2, approximately equal to 0.693",
    examples: ["LN2", "log(2)"],
    seealso: []
  },
  jA = {
    name: "LOG10E",
    category: "Constants",
    syntax: ["LOG10E"],
    description: "Returns the base-10 logarithm of E, approximately equal to 0.434",
    examples: ["LOG10E", "log(e, 10)"],
    seealso: []
  },
  eE = {
    name: "LOG2E",
    category: "Constants",
    syntax: ["LOG2E"],
    description: "Returns the base-2 logarithm of E, approximately equal to 1.442",
    examples: ["LOG2E", "log(e, 2)"],
    seealso: []
  },
  rE = {
    name: "NaN",
    category: "Constants",
    syntax: ["NaN"],
    description: "Not a number",
    examples: ["NaN", "0 / 0"],
    seealso: []
  },
  tE = {
    name: "null",
    category: "Constants",
    syntax: ["null"],
    description: "Value null",
    examples: ["null"],
    seealso: ["true", "false"]
  },
  nE = {
    name: "phi",
    category: "Constants",
    syntax: ["phi"],
    description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...",
    examples: ["phi"],
    seealso: []
  },
  Tc = {
    name: "pi",
    category: "Constants",
    syntax: ["pi"],
    description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
    examples: ["pi", "sin(pi/2)"],
    seealso: ["tau"]
  },
  aE = {
    name: "SQRT1_2",
    category: "Constants",
    syntax: ["SQRT1_2"],
    description: "Returns the square root of 1/2, approximately equal to 0.707",
    examples: ["SQRT1_2", "sqrt(1/2)"],
    seealso: []
  },
  iE = {
    name: "SQRT2",
    category: "Constants",
    syntax: ["SQRT2"],
    description: "Returns the square root of 2, approximately equal to 1.414",
    examples: ["SQRT2", "sqrt(2)"],
    seealso: []
  },
  oE = {
    name: "tau",
    category: "Constants",
    syntax: ["tau"],
    description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
    examples: ["tau", "2 * pi"],
    seealso: ["pi"]
  },
  sE = {
    name: "true",
    category: "Constants",
    syntax: ["true"],
    description: "Boolean value true",
    examples: ["true"],
    seealso: ["false"]
  },
  uE = {
    name: "version",
    category: "Constants",
    syntax: ["version"],
    description: "A string with the version number of math.js",
    examples: ["version"],
    seealso: []
  },
  lE = {
    name: "bignumber",
    category: "Construction",
    syntax: ["bignumber(x)"],
    description: "Create a big number from a number or string.",
    examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"],
    seealso: ["boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
  },
  cE = {
    name: "boolean",
    category: "Construction",
    syntax: ["x", "boolean(x)"],
    description: "Convert a string or number into a boolean.",
    examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"],
    seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"]
  },
  fE = {
    name: "complex",
    category: "Construction",
    syntax: ["complex()", "complex(re, im)", "complex(string)"],
    description: "Create a complex number.",
    examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
    seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"]
  },
  mE = {
    name: "createUnit",
    category: "Construction",
    syntax: ["createUnit(definitions)", "createUnit(name, definition)"],
    description: "Create a user-defined unit and register it with the Unit type.",
    examples: ['createUnit("foo")', 'createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})', 'createUnit("mph", "1 mile/hour")'],
    seealso: ["unit", "splitUnit"]
  },
  vE = {
    name: "fraction",
    category: "Construction",
    syntax: ["fraction(num)", "fraction(matrix)", "fraction(num,den)", "fraction({n: num, d: den})"],
    description: "Create a fraction from a number or from integer numerator and denominator.",
    examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)", "fraction({n: 333, d: 53})", "fraction([sqrt(9), sqrt(10), sqrt(11)])"],
    seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"]
  },
  pE = {
    name: "index",
    category: "Construction",
    syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"],
    description: "Create an index to get or replace a subset of a matrix",
    examples: ["A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[1:2, 1:2] = 1", "B = [1, 2, 3]", "B[B>1 and B<3]"],
    seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range", "string", "unit"]
  },
  dE = {
    name: "matrix",
    category: "Construction",
    syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", 'matrix("dense")', "matrix([...])"],
    description: "Create a matrix.",
    examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])", 'matrix([3, 4; 5, 6], "sparse")', 'matrix([3, 4; 5, 6], "sparse", "number")'],
    seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "sparse"]
  },
  hE = {
    name: "number",
    category: "Construction",
    syntax: ["x", "number(x)", "number(unit, valuelessUnit)"],
    description: "Create a number or convert a string or boolean into a number.",
    examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])", 'number(unit("52cm"), "m")'],
    seealso: ["bignumber", "boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
  },
  gE = {
    name: "sparse",
    category: "Construction",
    syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])", 'sparse([a1, b1, ...; a1, b2, ...], "number")'],
    description: "Create a sparse matrix.",
    examples: ["sparse()", "sparse([3, 4; 5, 6])", 'sparse([3, 0; 5, 0], "number")'],
    seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "matrix"]
  },
  yE = {
    name: "splitUnit",
    category: "Construction",
    syntax: ["splitUnit(unit: Unit, parts: Unit[])"],
    description: "Split a unit in an array of units whose sum is equal to the original unit.",
    examples: ['splitUnit(1 m, ["feet", "inch"])'],
    seealso: ["unit", "createUnit"]
  },
  bE = {
    name: "string",
    category: "Construction",
    syntax: ['"text"', "string(x)"],
    description: "Create a string or convert a value to a string",
    examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
    seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"]
  },
  xE = {
    name: "unit",
    category: "Construction",
    syntax: ["value unit", "unit(value, unit)", "unit(string)"],
    description: "Create a unit.",
    examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'],
    seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"]
  },
  wE = {
    name: "config",
    category: "Core",
    syntax: ["config()", "config(options)"],
    description: "Get configuration or change configuration.",
    examples: ["config()", "1/3 + 1/4", 'config({number: "Fraction"})', "1/3 + 1/4"],
    seealso: []
  },
  NE = {
    name: "import",
    category: "Core",
    syntax: ["import(functions)", "import(functions, options)"],
    description: "Import functions or constants from an object.",
    examples: ["import({myFn: f(x)=x^2, myConstant: 32 })", "myFn(2)", "myConstant"],
    seealso: []
  },
  DE = {
    name: "typed",
    category: "Core",
    syntax: ["typed(signatures)", "typed(name, signatures)"],
    description: "Create a typed function.",
    examples: ['double = typed({ "number": f(x)=x+x, "string": f(x)=concat(x,x) })', "double(2)", 'double("hello")'],
    seealso: []
  },
  AE = {
    name: "derivative",
    category: "Algebra",
    syntax: ["derivative(expr, variable)", "derivative(expr, variable, {simplify: boolean})"],
    description: "Takes the derivative of an expression expressed in parser Nodes. The derivative will be taken over the supplied variable in the second parameter. If there are multiple variables in the expression, it will return a partial derivative.",
    examples: ['derivative("2x^3", "x")', 'derivative("2x^3", "x", {simplify: false})', 'derivative("2x^2 + 3x + 4", "x")', 'derivative("sin(2x)", "x")', 'f = parse("x^2 + x")', 'x = parse("x")', "df = derivative(f, x)", "df.evaluate({x: 3})"],
    seealso: ["simplify", "parse", "evaluate"]
  },
  EE = {
    name: "leafCount",
    category: "Algebra",
    syntax: ["leafCount(expr)"],
    description: "Computes the number of leaves in the parse tree of the given expression",
    examples: ['leafCount("e^(i*pi)-1")', 'leafCount(parse("{a: 22/7, b: 10^(1/2)}"))'],
    seealso: ["simplify"]
  },
  SE = {
    name: "lsolve",
    category: "Algebra",
    syntax: ["x=lsolve(L, b)"],
    description: "Finds one solution of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
    examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
    seealso: ["lsolveAll", "lup", "lusolve", "usolve", "matrix", "sparse"]
  },
  CE = {
    name: "lsolveAll",
    category: "Algebra",
    syntax: ["x=lsolveAll(L, b)"],
    description: "Finds all solutions of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
    examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
    seealso: ["lsolve", "lup", "lusolve", "usolve", "matrix", "sparse"]
  },
  ME = {
    name: "lup",
    category: "Algebra",
    syntax: ["lup(m)"],
    description: "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U",
    examples: ["lup([[2, 1], [1, 4]])", "lup(matrix([[2, 1], [1, 4]]))", "lup(sparse([[2, 1], [1, 4]]))"],
    seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "slu", "qr"]
  },
  FE = {
    name: "lusolve",
    category: "Algebra",
    syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"],
    description: "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.",
    examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"],
    seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"]
  },
  BE = {
    name: "polynomialRoot",
    category: "Algebra",
    syntax: ["x=polynomialRoot(-6, 3)", "x=polynomialRoot(4, -4, 1)", "x=polynomialRoot(-8, 12, -6, 1)"],
    description: "Finds the roots of a univariate polynomial given by its coefficients starting from constant, linear, and so on, increasing in degree.",
    examples: ["a = polynomialRoot(-6, 11, -6, 1)"],
    seealso: ["cbrt", "sqrt"]
  },
  TE = {
    name: "qr",
    category: "Algebra",
    syntax: ["qr(A)"],
    description: "Calculates the Matrix QR decomposition. Matrix `A` is decomposed in two matrices (`Q`, `R`) where `Q` is an orthogonal matrix and `R` is an upper triangular matrix.",
    examples: ["qr([[1, -1,  4], [1,  4, -2], [1,  4,  2], [1,  -1, 0]])"],
    seealso: ["lup", "slu", "matrix"]
  },
  OE = {
    name: "rationalize",
    category: "Algebra",
    syntax: ["rationalize(expr)", "rationalize(expr, scope)", "rationalize(expr, scope, detailed)"],
    description: "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.",
    examples: ['rationalize("2x/y - y/(x+1)")', 'rationalize("2x/y - y/(x+1)", true)'],
    seealso: ["simplify"]
  },
  $E = {
    name: "resolve",
    category: "Algebra",
    syntax: ["resolve(node, scope)"],
    description: "Recursively substitute variables in an expression tree.",
    examples: ['resolve(parse("1 + x"), { x: 7 })', 'resolve(parse("size(text)"), { text: "Hello World" })', 'resolve(parse("x + y"), { x: parse("3z") })', 'resolve(parse("3x"), { x: parse("y+z"), z: parse("w^y") })'],
    seealso: ["simplify", "evaluate"],
    mayThrow: ["ReferenceError"]
  },
  _E = {
    name: "simplify",
    category: "Algebra",
    syntax: ["simplify(expr)", "simplify(expr, rules)"],
    description: "Simplify an expression tree.",
    examples: ['simplify("3 + 2 / 4")', 'simplify("2x + x")', 'f = parse("x * (x + 2 + x)")', "simplified = simplify(f)", "simplified.evaluate({x: 2})"],
    seealso: ["simplifyCore", "derivative", "evaluate", "parse", "rationalize", "resolve"]
  },
  IE = {
    name: "simplifyConstant",
    category: "Algebra",
    syntax: ["simplifyConstant(expr)", "simplifyConstant(expr, options)"],
    description: "Replace constant subexpressions of node with their values.",
    examples: ['simplifyConstant("(3-3)*x")', 'simplifyConstant(parse("z-cos(tau/8)"))'],
    seealso: ["simplify", "simplifyCore", "evaluate"]
  },
  qE = {
    name: "simplifyCore",
    category: "Algebra",
    syntax: ["simplifyCore(node)"],
    description: "Perform simple one-pass simplifications on an expression tree.",
    examples: ['simplifyCore(parse("0*x"))', 'simplifyCore(parse("(x+0)*2"))'],
    seealso: ["simplify", "simplifyConstant", "evaluate"]
  },
  RE = {
    name: "slu",
    category: "Algebra",
    syntax: ["slu(A, order, threshold)"],
    description: "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U",
    examples: ["slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)"],
    seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "lup", "qr"]
  },
  zE = {
    name: "symbolicEqual",
    category: "Algebra",
    syntax: ["symbolicEqual(expr1, expr2)", "symbolicEqual(expr1, expr2, options)"],
    description: "Returns true if the difference of the expressions simplifies to 0",
    examples: ['symbolicEqual("x*y","y*x")', 'symbolicEqual("abs(x^2)", "x^2")', 'symbolicEqual("abs(x)", "x", {context: {abs: {trivial: true}}})'],
    seealso: ["simplify", "evaluate"]
  },
  PE = {
    name: "usolve",
    category: "Algebra",
    syntax: ["x=usolve(U, b)"],
    description: "Finds one solution of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
    examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"],
    seealso: ["usolveAll", "lup", "lusolve", "lsolve", "matrix", "sparse"]
  },
  UE = {
    name: "usolveAll",
    category: "Algebra",
    syntax: ["x=usolve(U, b)"],
    description: "Finds all solutions of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
    examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"],
    seealso: ["usolve", "lup", "lusolve", "lsolve", "matrix", "sparse"]
  },
  LE = {
    name: "abs",
    category: "Arithmetic",
    syntax: ["abs(x)"],
    description: "Compute the absolute value.",
    examples: ["abs(3.5)", "abs(-4.2)"],
    seealso: ["sign"]
  },
  kE = {
    name: "add",
    category: "Operators",
    syntax: ["x + y", "add(x, y)"],
    description: "Add two values.",
    examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch", '"2.3" + "4"'],
    seealso: ["subtract"]
  },
  HE = {
    name: "cbrt",
    category: "Arithmetic",
    syntax: ["cbrt(x)", "cbrt(x, allRoots)"],
    description: "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned",
    examples: ["cbrt(64)", "cube(4)", "cbrt(-8)", "cbrt(2 + 3i)", "cbrt(8i)", "cbrt(8i, true)", "cbrt(27 m^3)"],
    seealso: ["square", "sqrt", "cube", "multiply"]
  },
  GE = {
    name: "ceil",
    category: "Arithmetic",
    syntax: ["ceil(x)"],
    description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.",
    examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
    seealso: ["floor", "fix", "round"]
  },
  VE = {
    name: "cube",
    category: "Arithmetic",
    syntax: ["cube(x)"],
    description: "Compute the cube of a value. The cube of x is x * x * x.",
    examples: ["cube(2)", "2^3", "2 * 2 * 2"],
    seealso: ["multiply", "square", "pow"]
  },
  ZE = {
    name: "divide",
    category: "Operators",
    syntax: ["x / y", "divide(x, y)"],
    description: "Divide two values.",
    examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"],
    seealso: ["multiply"]
  },
  YE = {
    name: "dotDivide",
    category: "Operators",
    syntax: ["x ./ y", "dotDivide(x, y)"],
    description: "Divide two values element wise.",
    examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"],
    seealso: ["multiply", "dotMultiply", "divide"]
  },
  WE = {
    name: "dotMultiply",
    category: "Operators",
    syntax: ["x .* y", "dotMultiply(x, y)"],
    description: "Multiply two values element wise.",
    examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"],
    seealso: ["multiply", "divide", "dotDivide"]
  },
  QE = {
    name: "dotPow",
    category: "Operators",
    syntax: ["x .^ y", "dotPow(x, y)"],
    description: "Calculates the power of x to y element wise.",
    examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
    seealso: ["pow"]
  },
  XE = {
    name: "exp",
    category: "Arithmetic",
    syntax: ["exp(x)"],
    description: "Calculate the exponent of a value.",
    examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"],
    seealso: ["expm", "expm1", "pow", "log"]
  },
  JE = {
    name: "expm",
    category: "Arithmetic",
    syntax: ["exp(x)"],
    description: "Compute the matrix exponential, expm(A) = e^A. The matrix must be square. Not to be confused with exp(a), which performs element-wise exponentiation.",
    examples: ["expm([[0,2],[0,0]])"],
    seealso: ["exp"]
  },
  KE = {
    name: "expm1",
    category: "Arithmetic",
    syntax: ["expm1(x)"],
    description: "Calculate the value of subtracting 1 from the exponential value.",
    examples: ["expm1(2)", "pow(e, 2) - 1", "log(expm1(2) + 1)"],
    seealso: ["exp", "pow", "log"]
  },
  jE = {
    name: "fix",
    category: "Arithmetic",
    syntax: ["fix(x)"],
    description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.",
    examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
    seealso: ["ceil", "floor", "round"]
  },
  eS = {
    name: "floor",
    category: "Arithmetic",
    syntax: ["floor(x)"],
    description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
    examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
    seealso: ["ceil", "fix", "round"]
  },
  rS = {
    name: "gcd",
    category: "Arithmetic",
    syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
    description: "Compute the greatest common divisor.",
    examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
    seealso: ["lcm", "xgcd"]
  },
  tS = {
    name: "hypot",
    category: "Arithmetic",
    syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"],
    description: "Calculate the hypotenusa of a list with values. ",
    examples: ["hypot(3, 4)", "sqrt(3^2 + 4^2)", "hypot(-2)", "hypot([3, 4, 5])"],
    seealso: ["abs", "norm"]
  },
  nS = {
    name: "invmod",
    category: "Arithmetic",
    syntax: ["invmod(a, b)"],
    description: "Calculate the (modular) multiplicative inverse of a modulo b. Solution to the equation ax ≣ 1 (mod b)",
    examples: ["invmod(8, 12)", "invmod(7, 13)", "invmod(15151, 15122)"],
    seealso: ["gcd", "xgcd"]
  },
  aS = {
    name: "lcm",
    category: "Arithmetic",
    syntax: ["lcm(x, y)"],
    description: "Compute the least common multiple.",
    examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
    seealso: ["gcd"]
  },
  iS = {
    name: "log",
    category: "Arithmetic",
    syntax: ["log(x)", "log(x, base)"],
    description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
    examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)", "log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"],
    seealso: ["exp", "log1p", "log2", "log10"]
  },
  oS = {
    name: "log10",
    category: "Arithmetic",
    syntax: ["log10(x)"],
    description: "Compute the 10-base logarithm of a value.",
    examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)", "log(10000, 10)"],
    seealso: ["exp", "log"]
  },
  sS = {
    name: "log1p",
    category: "Arithmetic",
    syntax: ["log1p(x)", "log1p(x, base)"],
    description: "Calculate the logarithm of a `value+1`",
    examples: ["log1p(2.5)", "exp(log1p(1.4))", "pow(10, 4)", "log1p(9999, 10)", "log1p(9999) / log(10)"],
    seealso: ["exp", "log", "log2", "log10"]
  },
  uS = {
    name: "log2",
    category: "Arithmetic",
    syntax: ["log2(x)"],
    description: "Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.",
    examples: ["log2(0.03125)", "log2(16)", "log2(16) / log2(2)", "pow(2, 4)"],
    seealso: ["exp", "log1p", "log", "log10"]
  },
  lS = {
    name: "mod",
    category: "Operators",
    syntax: ["x % y", "x mod y", "mod(x, y)"],
    description: "Calculates the modulus, the remainder of an integer division.",
    examples: ["7 % 3", "11 % 2", "10 mod 4", "isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"],
    seealso: ["divide"]
  },
  cS = {
    name: "multiply",
    category: "Operators",
    syntax: ["x * y", "multiply(x, y)"],
    description: "multiply two values.",
    examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"],
    seealso: ["divide"]
  },
  fS = {
    name: "norm",
    category: "Arithmetic",
    syntax: ["norm(x)", "norm(x, p)"],
    description: "Calculate the norm of a number, vector or matrix.",
    examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i)", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", 'norm([[1, 2], [3, 4]], "inf")', 'norm([[1, 2], [3, 4]], "fro")']
  },
  mS = {
    name: "nthRoot",
    category: "Arithmetic",
    syntax: ["nthRoot(a)", "nthRoot(a, root)"],
    description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".',
    examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"],
    seealso: ["nthRoots", "pow", "sqrt"]
  },
  vS = {
    name: "nthRoots",
    category: "Arithmetic",
    syntax: ["nthRoots(A)", "nthRoots(A, root)"],
    description: 'Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation "x^root = A". This function returns an array of complex values.',
    examples: ["nthRoots(1)", "nthRoots(1, 3)"],
    seealso: ["sqrt", "pow", "nthRoot"]
  },
  pS = {
    name: "pow",
    category: "Operators",
    syntax: ["x ^ y", "pow(x, y)"],
    description: "Calculates the power of x to y, x^y.",
    examples: ["2^3", "2*2*2", "1 + e ^ (pi * i)", "pow([[1, 2], [4, 3]], 2)", "pow([[1, 2], [4, 3]], -1)"],
    seealso: ["multiply", "nthRoot", "nthRoots", "sqrt"]
  },
  dS = {
    name: "round",
    category: "Arithmetic",
    syntax: ["round(x)", "round(x, n)", "round(unit, valuelessUnit)", "round(unit, n, valuelessUnit)"],
    description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
    examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)", "round(3.241cm, 2, cm)", "round([3.2, 3.8, -4.7])"],
    seealso: ["ceil", "floor", "fix"]
  },
  hS = {
    name: "sign",
    category: "Arithmetic",
    syntax: ["sign(x)"],
    description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
    examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
    seealso: ["abs"]
  },
  gS = {
    name: "sqrt",
    category: "Arithmetic",
    syntax: ["sqrt(x)"],
    description: "Compute the square root value. If x = y * y, then y is the square root of x.",
    examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
    seealso: ["square", "sqrtm", "multiply", "nthRoot", "nthRoots", "pow"]
  },
  yS = {
    name: "sqrtm",
    category: "Arithmetic",
    syntax: ["sqrtm(x)"],
    description: "Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.",
    examples: ["sqrtm([[33, 24], [48, 57]])"],
    seealso: ["sqrt", "abs", "square", "multiply"]
  },
  bS = {
    name: "sylvester",
    category: "Algebra",
    syntax: ["sylvester(A,B,C)"],
    description: "Solves the real-valued Sylvester equation AX+XB=C for X",
    examples: ["sylvester([[-1, -2], [1, 1]], [[-2, 1], [-1, 2]], [[-3, 2], [3, 0]])", "A = [[-1, -2], [1, 1]]; B = [[2, -1], [1, -2]]; C = [[-3, 2], [3, 0]]", "sylvester(A, B, C)"],
    seealso: ["schur", "lyap"]
  },
  xS = {
    name: "schur",
    category: "Algebra",
    syntax: ["schur(A)"],
    description: "Performs a real Schur decomposition of the real matrix A = UTU'",
    examples: ["schur([[1, 0], [-4, 3]])", "A = [[1, 0], [-4, 3]]", "schur(A)"],
    seealso: ["lyap", "sylvester"]
  },
  wS = {
    name: "lyap",
    category: "Algebra",
    syntax: ["lyap(A,Q)"],
    description: "Solves the Continuous-time Lyapunov equation AP+PA'+Q=0 for P",
    examples: ["lyap([[-2, 0], [1, -4]], [[3, 1], [1, 3]])", "A = [[-2, 0], [1, -4]]", "Q = [[3, 1], [1, 3]]", "lyap(A,Q)"],
    seealso: ["schur", "sylvester"]
  },
  NS = {
    name: "square",
    category: "Arithmetic",
    syntax: ["square(x)"],
    description: "Compute the square of a value. The square of x is x * x.",
    examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
    seealso: ["multiply", "pow", "sqrt", "cube"]
  },
  DS = {
    name: "subtract",
    category: "Operators",
    syntax: ["x - y", "subtract(x, y)"],
    description: "subtract two values.",
    examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"],
    seealso: ["add"]
  },
  AS = {
    name: "unaryMinus",
    category: "Operators",
    syntax: ["-x", "unaryMinus(x)"],
    description: "Inverse the sign of a value. Converts booleans and strings to numbers.",
    examples: ["-4.5", "-(-5.6)", '-"22"'],
    seealso: ["add", "subtract", "unaryPlus"]
  },
  ES = {
    name: "unaryPlus",
    category: "Operators",
    syntax: ["+x", "unaryPlus(x)"],
    description: "Converts booleans and strings to numbers.",
    examples: ["+true", '+"2"'],
    seealso: ["add", "subtract", "unaryMinus"]
  },
  SS = {
    name: "xgcd",
    category: "Arithmetic",
    syntax: ["xgcd(a, b)"],
    description: "Calculate the extended greatest common divisor for two values. The result is an array [d, x, y] with 3 entries, where d is the greatest common divisor, and d = x * a + y * b.",
    examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
    seealso: ["gcd", "lcm"]
  },
  CS = {
    name: "bitAnd",
    category: "Bitwise",
    syntax: ["x & y", "bitAnd(x, y)"],
    description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0",
    examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"],
    seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
  },
  MS = {
    name: "bitNot",
    category: "Bitwise",
    syntax: ["~x", "bitNot(x)"],
    description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.",
    examples: ["~1", "~2", "bitNot([2, -3, 4])"],
    seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
  },
  FS = {
    name: "bitOr",
    category: "Bitwise",
    syntax: ["x | y", "bitOr(x, y)"],
    description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.",
    examples: ["5 | 3", "bitOr([1, 2, 3], 4)"],
    seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
  },
  BS = {
    name: "bitXor",
    category: "Bitwise",
    syntax: ["bitXor(x, y)"],
    description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.",
    examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"],
    seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift", "rightLogShift"]
  },
  TS = {
    name: "leftShift",
    category: "Bitwise",
    syntax: ["x << y", "leftShift(x, y)"],
    description: "Bitwise left logical shift of a value x by y number of bits.",
    examples: ["4 << 1", "8 >> 1"],
    seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift", "rightLogShift"]
  },
  OS = {
    name: "rightArithShift",
    category: "Bitwise",
    syntax: ["x >> y", "rightArithShift(x, y)"],
    description: "Bitwise right arithmetic shift of a value x by y number of bits.",
    examples: ["8 >> 1", "4 << 1", "-12 >> 2"],
    seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"]
  },
  $S = {
    name: "rightLogShift",
    category: "Bitwise",
    syntax: ["x >>> y", "rightLogShift(x, y)"],
    description: "Bitwise right logical shift of a value x by y number of bits.",
    examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"],
    seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"]
  },
  _S = {
    name: "bellNumbers",
    category: "Combinatorics",
    syntax: ["bellNumbers(n)"],
    description: "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.",
    examples: ["bellNumbers(3)", "bellNumbers(8)"],
    seealso: ["stirlingS2"]
  },
  IS = {
    name: "catalan",
    category: "Combinatorics",
    syntax: ["catalan(n)"],
    description: "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.",
    examples: ["catalan(3)", "catalan(8)"],
    seealso: ["bellNumbers"]
  },
  qS = {
    name: "composition",
    category: "Combinatorics",
    syntax: ["composition(n, k)"],
    description: "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.",
    examples: ["composition(5, 3)"],
    seealso: ["combinations"]
  },
  RS = {
    name: "stirlingS2",
    category: "Combinatorics",
    syntax: ["stirlingS2(n, k)"],
    description: "he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.",
    examples: ["stirlingS2(5, 3)"],
    seealso: ["bellNumbers"]
  },
  zS = {
    name: "arg",
    category: "Complex",
    syntax: ["arg(x)"],
    description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
    examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"],
    seealso: ["re", "im", "conj", "abs"]
  },
  PS = {
    name: "conj",
    category: "Complex",
    syntax: ["conj(x)"],
    description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
    examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
    seealso: ["re", "im", "abs", "arg"]
  },
  US = {
    name: "im",
    category: "Complex",
    syntax: ["im(x)"],
    description: "Get the imaginary part of a complex number.",
    examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
    seealso: ["re", "conj", "abs", "arg"]
  },
  LS = {
    name: "re",
    category: "Complex",
    syntax: ["re(x)"],
    description: "Get the real part of a complex number.",
    examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
    seealso: ["im", "conj", "abs", "arg"]
  },
  kS = {
    name: "evaluate",
    category: "Expression",
    syntax: ["evaluate(expression)", "evaluate(expression, scope)", "evaluate([expr1, expr2, expr3, ...])", "evaluate([expr1, expr2, expr3, ...], scope)"],
    description: "Evaluate an expression or an array with expressions.",
    examples: ['evaluate("2 + 3")', 'evaluate("sqrt(16)")', 'evaluate("2 inch to cm")', 'evaluate("sin(x * pi)", { "x": 1/2 })', 'evaluate(["width=2", "height=4","width*height"])'],
    seealso: []
  },
  HS = {
    name: "help",
    category: "Expression",
    syntax: ["help(object)", "help(string)"],
    description: "Display documentation on a function or data type.",
    examples: ["help(sqrt)", 'help("complex")'],
    seealso: []
  },
  GS = {
    name: "distance",
    category: "Geometry",
    syntax: ["distance([x1, y1], [x2, y2])", "distance([[x1, y1], [x2, y2]])"],
    description: "Calculates the Euclidean distance between two points.",
    examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"],
    seealso: []
  },
  VS = {
    name: "intersect",
    category: "Geometry",
    syntax: ["intersect(expr1, expr2, expr3, expr4)", "intersect(expr1, expr2, expr3)"],
    description: "Computes the intersection point of lines and/or planes.",
    examples: ["intersect([0, 0], [10, 10], [10, 0], [0, 10])", "intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])"],
    seealso: []
  },
  ZS = {
    name: "and",
    category: "Logical",
    syntax: ["x and y", "and(x, y)"],
    description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.",
    examples: ["true and false", "true and true", "2 and 4"],
    seealso: ["not", "or", "xor"]
  },
  YS = {
    name: "not",
    category: "Logical",
    syntax: ["not x", "not(x)"],
    description: "Logical not. Flips the boolean value of given argument.",
    examples: ["not true", "not false", "not 2", "not 0"],
    seealso: ["and", "or", "xor"]
  },
  WS = {
    name: "or",
    category: "Logical",
    syntax: ["x or y", "or(x, y)"],
    description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.",
    examples: ["true or false", "false or false", "0 or 4"],
    seealso: ["not", "and", "xor"]
  },
  QS = {
    name: "xor",
    category: "Logical",
    syntax: ["x xor y", "xor(x, y)"],
    description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.",
    examples: ["true xor false", "false xor false", "true xor true", "0 xor 4"],
    seealso: ["not", "and", "or"]
  },
  XS = {
    name: "column",
    category: "Matrix",
    syntax: ["column(x, index)"],
    description: "Return a column from a matrix or array.",
    examples: ["A = [[1, 2], [3, 4]]", "column(A, 1)", "column(A, 2)"],
    seealso: ["row", "matrixFromColumns"]
  },
  JS = {
    name: "concat",
    category: "Matrix",
    syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"],
    description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.",
    examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)", "concat(A, B, 1)", "concat(A, B, 2)"],
    seealso: ["det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
  },
  KS = {
    name: "count",
    category: "Matrix",
    syntax: ["count(x)"],
    description: "Count the number of elements of a matrix, array or string.",
    examples: ["a = [1, 2; 3, 4; 5, 6]", "count(a)", "size(a)", 'count("hello world")'],
    seealso: ["size"]
  },
  jS = {
    name: "cross",
    category: "Matrix",
    syntax: ["cross(A, B)"],
    description: "Calculate the cross product for two vectors in three dimensional space.",
    examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])", "cross([2, 3, 4],  [5, 6, 7])"],
    seealso: ["multiply", "dot"]
  },
  eC = {
    name: "ctranspose",
    category: "Matrix",
    syntax: ["x'", "ctranspose(x)"],
    description: "Complex Conjugate and Transpose a matrix",
    examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "ctranspose(a)"],
    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
  },
  rC = {
    name: "det",
    category: "Matrix",
    syntax: ["det(x)"],
    description: "Calculate the determinant of a matrix",
    examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"],
    seealso: ["concat", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
  },
  tC = {
    name: "diag",
    category: "Matrix",
    syntax: ["diag(x)", "diag(x, k)"],
    description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
    examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"],
    seealso: ["concat", "det", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
  },
  nC = {
    name: "diff",
    category: "Matrix",
    syntax: ["diff(arr)", "diff(arr, dim)"],
    description: ["Create a new matrix or array with the difference of the passed matrix or array.", "Dim parameter is optional and used to indicant the dimension of the array/matrix to apply the difference", "If no dimension parameter is passed it is assumed as dimension 0", "Dimension is zero-based in javascript and one-based in the parser", "Arrays must be 'rectangular' meaning arrays like [1, 2]", "If something is passed as a matrix it will be returned as a matrix but other than that all matrices are converted to arrays"],
    examples: ["A = [1, 2, 4, 7, 0]", "diff(A)", "diff(A, 1)", "B = [[1, 2], [3, 4]]", "diff(B)", "diff(B, 1)", "diff(B, 2)", "diff(B, bignumber(2))", "diff([[1, 2], matrix([3, 4])], 2)"],
    seealso: ["subtract", "partitionSelect"]
  },
  aC = {
    name: "dot",
    category: "Matrix",
    syntax: ["dot(A, B)", "A * B"],
    description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn",
    examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"],
    seealso: ["multiply", "cross"]
  },
  iC = {
    name: "eigs",
    category: "Matrix",
    syntax: ["eigs(x)"],
    description: "Calculate the eigenvalues and optionally eigenvectors of a square matrix",
    examples: ["eigs([[5, 2.3], [2.3, 1]])", "eigs([[1, 2, 3], [4, 5, 6], [7, 8, 9]], { precision: 1e-6, eigenvectors: false }"],
    seealso: ["inv"]
  },
  oC = {
    name: "filter",
    category: "Matrix",
    syntax: ["filter(x, test)"],
    description: "Filter items in a matrix.",
    examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)", "filter([6, -2, 0, 1, 0], x != 0)"],
    seealso: ["sort", "map", "forEach"]
  },
  sC = {
    name: "flatten",
    category: "Matrix",
    syntax: ["flatten(x)"],
    description: "Flatten a multi dimensional matrix into a single dimensional matrix.",
    examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"],
    seealso: ["concat", "resize", "size", "squeeze"]
  },
  uC = {
    name: "forEach",
    category: "Matrix",
    syntax: ["forEach(x, callback)"],
    description: "Iterates over all elements of a matrix/array, and executes the given callback function.",
    examples: ["numberOfPets = {}", "addPet(n) = numberOfPets[n] = (numberOfPets[n] ? numberOfPets[n]:0 ) + 1;", 'forEach(["Dog","Cat","Cat"], addPet)', "numberOfPets"],
    seealso: ["map", "sort", "filter"]
  },
  lC = {
    name: "getMatrixDataType",
    category: "Matrix",
    syntax: ["getMatrixDataType(x)"],
    description: 'Find the data type of all elements in a matrix or array, for example "number" if all items are a number and "Complex" if all values are complex numbers. If a matrix contains more than one data type, it will return "mixed".',
    examples: ["getMatrixDataType([1, 2, 3])", "getMatrixDataType([[5 cm], [2 inch]])", 'getMatrixDataType([1, "text"])', "getMatrixDataType([1, bignumber(4)])"],
    seealso: ["matrix", "sparse", "typeOf"]
  },
  cC = {
    name: "identity",
    category: "Matrix",
    syntax: ["identity(n)", "identity(m, n)", "identity([m, n])"],
    description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
    examples: ["identity(3)", "identity(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "identity(size(a))"],
    seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
  },
  fC = {
    name: "inv",
    category: "Matrix",
    syntax: ["inv(x)"],
    description: "Calculate the inverse of a matrix",
    examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
    seealso: ["concat", "det", "diag", "identity", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
  },
  mC = {
    name: "pinv",
    category: "Matrix",
    syntax: ["pinv(x)"],
    description: "Calculate the Moore–Penrose inverse of a matrix",
    examples: ["pinv([1, 2; 3, 4])", "pinv([[1, 0], [0, 1], [0, 1]])", "pinv(4)"],
    seealso: ["inv"]
  },
  vC = {
    name: "kron",
    category: "Matrix",
    syntax: ["kron(x, y)"],
    description: "Calculates the kronecker product of 2 matrices or vectors.",
    examples: ["kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])", "kron([1,1], [2,3,4])"],
    seealso: ["multiply", "dot", "cross"]
  },
  pC = {
    name: "map",
    category: "Matrix",
    syntax: ["map(x, callback)"],
    description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
    examples: ["map([1, 2, 3], square)"],
    seealso: ["filter", "forEach"]
  },
  dC = {
    name: "matrixFromColumns",
    category: "Matrix",
    syntax: ["matrixFromColumns(...arr)", "matrixFromColumns(row1, row2)", "matrixFromColumns(row1, row2, row3)"],
    description: "Create a dense matrix from vectors as individual columns.",
    examples: ["matrixFromColumns([1, 2, 3], [[4],[5],[6]])"],
    seealso: ["matrix", "matrixFromRows", "matrixFromFunction", "zeros"]
  },
  hC = {
    name: "matrixFromFunction",
    category: "Matrix",
    syntax: ["matrixFromFunction(size, fn)", "matrixFromFunction(size, fn, format)", "matrixFromFunction(size, fn, format, datatype)", "matrixFromFunction(size, format, fn)", "matrixFromFunction(size, format, datatype, fn)"],
    description: "Create a matrix by evaluating a generating function at each index.",
    examples: ["f(I) = I[1] - I[2]", "matrixFromFunction([3,3], f)", "g(I) = I[1] - I[2] == 1 ? 4 : 0", 'matrixFromFunction([100, 100], "sparse", g)', "matrixFromFunction([5], random)"],
    seealso: ["matrix", "matrixFromRows", "matrixFromColumns", "zeros"]
  },
  gC = {
    name: "matrixFromRows",
    category: "Matrix",
    syntax: ["matrixFromRows(...arr)", "matrixFromRows(row1, row2)", "matrixFromRows(row1, row2, row3)"],
    description: "Create a dense matrix from vectors as individual rows.",
    examples: ["matrixFromRows([1, 2, 3], [[4],[5],[6]])"],
    seealso: ["matrix", "matrixFromColumns", "matrixFromFunction", "zeros"]
  },
  yC = {
    name: "ones",
    category: "Matrix",
    syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])"],
    description: "Create a matrix containing ones.",
    examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"],
    seealso: ["concat", "det", "diag", "identity", "inv", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
  },
  bC = {
    name: "partitionSelect",
    category: "Matrix",
    syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"],
    description: "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.",
    examples: ["partitionSelect([5, 10, 1], 2)", 'partitionSelect(["C", "B", "A", "D"], 1, compareText)', "arr = [5, 2, 1]", "partitionSelect(arr, 0) # returns 1, arr is now: [1, 2, 5]", "arr", "partitionSelect(arr, 1, 'desc') # returns 2, arr is now: [5, 2, 1]", "arr"],
    seealso: ["sort"]
  },
  xC = {
    name: "range",
    category: "Type",
    syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"],
    description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
    examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "range(1m, 1m, 3m)", "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"],
    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
  },
  wC = {
    name: "reshape",
    category: "Matrix",
    syntax: ["reshape(x, sizes)"],
    description: "Reshape a multi dimensional array to fit the specified dimensions.",
    examples: ["reshape([1, 2, 3, 4, 5, 6], [2, 3])", "reshape([[1, 2], [3, 4]], [1, 4])", "reshape([[1, 2], [3, 4]], [4])", "reshape([1, 2, 3, 4], [-1, 2])"],
    seealso: ["size", "squeeze", "resize"]
  },
  NC = {
    name: "resize",
    category: "Matrix",
    syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
    description: "Resize a matrix.",
    examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", 'resize("hello", [8], "!")'],
    seealso: ["size", "subset", "squeeze", "reshape"]
  },
  DC = {
    name: "rotate",
    category: "Matrix",
    syntax: ["rotate(w, theta)", "rotate(w, theta, v)"],
    description: "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.",
    examples: ["rotate([1, 0], pi / 2)", 'rotate(matrix([1, 0]), unit("35deg"))', 'rotate([1, 0, 0], unit("90deg"), [0, 0, 1])', 'rotate(matrix([1, 0, 0]), unit("90deg"), matrix([0, 0, 1]))'],
    seealso: ["matrix", "rotationMatrix"]
  },
  AC = {
    name: "rotationMatrix",
    category: "Matrix",
    syntax: ["rotationMatrix(theta)", "rotationMatrix(theta, v)", "rotationMatrix(theta, v, format)"],
    description: "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.",
    examples: ["rotationMatrix(pi / 2)", 'rotationMatrix(unit("45deg"), [0, 0, 1])', 'rotationMatrix(1, matrix([0, 0, 1]), "sparse")'],
    seealso: ["cos", "sin"]
  },
  EC = {
    name: "row",
    category: "Matrix",
    syntax: ["row(x, index)"],
    description: "Return a row from a matrix or array.",
    examples: ["A = [[1, 2], [3, 4]]", "row(A, 1)", "row(A, 2)"],
    seealso: ["column", "matrixFromRows"]
  },
  SC = {
    name: "size",
    category: "Matrix",
    syntax: ["size(x)"],
    description: "Calculate the size of a matrix.",
    examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"],
    seealso: ["concat", "count", "det", "diag", "identity", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"]
  },
  CC = {
    name: "sort",
    category: "Matrix",
    syntax: ["sort(x)", "sort(x, compare)"],
    description: 'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.',
    examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"], "natural")', "sortByLength(a, b) = size(a)[1] - size(b)[1]", 'sort(["Langdon", "Tom", "Sara"], sortByLength)', 'sort(["10", "1", "2"], "natural")'],
    seealso: ["map", "filter", "forEach"]
  },
  MC = {
    name: "squeeze",
    category: "Matrix",
    syntax: ["squeeze(x)"],
    description: "Remove inner and outer singleton dimensions from a matrix.",
    examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)", "size(squeeze(b))"],
    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "subset", "trace", "transpose", "zeros"]
  },
  FC = {
    name: "subset",
    category: "Matrix",
    syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"],
    description: "Get or set a subset of the entries of a matrix or characters of a string. Indexes are one-based. There should be one index specification for each dimension of the target. Each specification can be a single index, a list of indices, or a range in colon notation `l:u`. In a range, both the lower bound l and upper bound u are included; and if a bound is omitted it defaults to the most extreme valid value. The cartesian product of the indices specified in each dimension determines the target of the operation.",
    examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]", "f[[1,2], [1,3]] = [9, 10; 11, 12]", "f"],
    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "trace", "transpose", "zeros"]
  },
  BC = {
    name: "trace",
    category: "Matrix",
    syntax: ["trace(A)"],
    description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.",
    examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"],
    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
  },
  TC = {
    name: "transpose",
    category: "Matrix",
    syntax: ["x'", "transpose(x)"],
    description: "Transpose a matrix",
    examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
  },
  OC = {
    name: "zeros",
    category: "Matrix",
    syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])"],
    description: "Create a matrix containing zeros.",
    examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"],
    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose"]
  },
  $C = {
    name: "fft",
    category: "Matrix",
    syntax: ["fft(x)"],
    description: "Calculate N-dimensional fourier transform",
    examples: ["fft([[1, 0], [1, 0]])"],
    seealso: ["ifft"]
  },
  _C = {
    name: "ifft",
    category: "Matrix",
    syntax: ["ifft(x)"],
    description: "Calculate N-dimensional inverse fourier transform",
    examples: ["ifft([[2, 2], [0, 0]])"],
    seealso: ["fft"]
  },
  IC = {
    name: "combinations",
    category: "Probability",
    syntax: ["combinations(n, k)"],
    description: "Compute the number of combinations of n items taken k at a time",
    examples: ["combinations(7, 5)"],
    seealso: ["combinationsWithRep", "permutations", "factorial"]
  },
  qC = {
    name: "combinationsWithRep",
    category: "Probability",
    syntax: ["combinationsWithRep(n, k)"],
    description: "Compute the number of combinations of n items taken k at a time with replacements.",
    examples: ["combinationsWithRep(7, 5)"],
    seealso: ["combinations", "permutations", "factorial"]
  },
  RC = {
    name: "factorial",
    category: "Probability",
    syntax: ["n!", "factorial(n)"],
    description: "Compute the factorial of a value",
    examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"],
    seealso: ["combinations", "combinationsWithRep", "permutations", "gamma"]
  },
  zC = {
    name: "gamma",
    category: "Probability",
    syntax: ["gamma(n)"],
    description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.",
    examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"],
    seealso: ["factorial"]
  },
  PC = {
    name: "lgamma",
    category: "Probability",
    syntax: ["lgamma(n)"],
    description: "Logarithm of the gamma function for real, positive numbers and complex numbers, using Lanczos approximation for numbers and Stirling series for complex numbers.",
    examples: ["lgamma(4)", "lgamma(1/2)", "lgamma(i)", "lgamma(complex(1.1, 2))"],
    seealso: ["gamma"]
  },
  UC = {
    name: "kldivergence",
    category: "Probability",
    syntax: ["kldivergence(x, y)"],
    description: "Calculate the Kullback-Leibler (KL) divergence  between two distributions.",
    examples: ["kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"],
    seealso: []
  },
  LC = {
    name: "multinomial",
    category: "Probability",
    syntax: ["multinomial(A)"],
    description: "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai > 0.",
    examples: ["multinomial([1, 2, 1])"],
    seealso: ["combinations", "factorial"]
  },
  kC = {
    name: "permutations",
    category: "Probability",
    syntax: ["permutations(n)", "permutations(n, k)"],
    description: "Compute the number of permutations of n items taken k at a time",
    examples: ["permutations(5)", "permutations(5, 3)"],
    seealso: ["combinations", "combinationsWithRep", "factorial"]
  },
  HC = {
    name: "pickRandom",
    category: "Probability",
    syntax: ["pickRandom(array)", "pickRandom(array, number)", "pickRandom(array, weights)", "pickRandom(array, number, weights)", "pickRandom(array, weights, number)"],
    description: "Pick a random entry from a given array.",
    examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])", "pickRandom([1, 3, 1, 6], 2)", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], 2, [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1], 2)"],
    seealso: ["random", "randomInt"]
  },
  GC = {
    name: "random",
    category: "Probability",
    syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"],
    description: "Return a random number.",
    examples: ["random()", "random(10, 20)", "random([2, 3])"],
    seealso: ["pickRandom", "randomInt"]
  },
  VC = {
    name: "randomInt",
    category: "Probability",
    syntax: ["randomInt(max)", "randomInt(min, max)", "randomInt(size)", "randomInt(size, max)", "randomInt(size, min, max)"],
    description: "Return a random integer number",
    examples: ["randomInt(10, 20)", "randomInt([2, 3], 10)"],
    seealso: ["pickRandom", "random"]
  },
  ZC = {
    name: "compare",
    category: "Relational",
    syntax: ["compare(x, y)"],
    description: "Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
    examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)", "compare(5cm, 40mm)", "compare(2, [1, 2, 3])"],
    seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compareNatural", "compareText"]
  },
  YC = {
    name: "compareNatural",
    category: "Relational",
    syntax: ["compareNatural(x, y)"],
    description: "Compare two values of any type in a deterministic, natural way. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
    examples: ["compareNatural(2, 3)", "compareNatural(3, 2)", "compareNatural(2, 2)", "compareNatural(5cm, 40mm)", 'compareNatural("2", "10")', "compareNatural(2 + 3i, 2 + 4i)", "compareNatural([1, 2, 4], [1, 2, 3])", "compareNatural([1, 5], [1, 2, 3])", "compareNatural([1, 2], [1, 2])", "compareNatural({a: 2}, {a: 4})"],
    seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare", "compareText"]
  },
  WC = {
    name: "compareText",
    category: "Relational",
    syntax: ["compareText(x, y)"],
    description: "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
    examples: ['compareText("B", "A")', 'compareText("A", "B")', 'compareText("A", "A")', 'compareText("2", "10")', 'compare("2", "10")', "compare(2, 10)", 'compareNatural("2", "10")', 'compareText("B", ["A", "B", "C"])'],
    seealso: ["compare", "compareNatural"]
  },
  QC = {
    name: "deepEqual",
    category: "Relational",
    syntax: ["deepEqual(x, y)"],
    description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.",
    examples: ["deepEqual([1,3,4], [1,3,4])", "deepEqual([1,3,4], [1,3])"],
    seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq", "compare"]
  },
  XC = {
    name: "equal",
    category: "Relational",
    syntax: ["x == y", "equal(x, y)"],
    description: "Check equality of two values. Returns true if the values are equal, and false if not.",
    examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"],
    seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual", "equalText"]
  },
  JC = {
    name: "equalText",
    category: "Relational",
    syntax: ["equalText(x, y)"],
    description: "Check equality of two strings. Comparison is case sensitive. Returns true if the values are equal, and false if not.",
    examples: ['equalText("Hello", "Hello")', 'equalText("a", "A")', 'equal("2e3", "2000")', 'equalText("2e3", "2000")', 'equalText("B", ["A", "B", "C"])'],
    seealso: ["compare", "compareNatural", "compareText", "equal"]
  },
  KC = {
    name: "larger",
    category: "Relational",
    syntax: ["x > y", "larger(x, y)"],
    description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not.",
    examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"],
    seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"]
  },
  jC = {
    name: "largerEq",
    category: "Relational",
    syntax: ["x >= y", "largerEq(x, y)"],
    description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.",
    examples: ["2 >= 1+1", "2 > 1+1", "a = 3.2", "b = 6-2.8", "(a >= b)"],
    seealso: ["equal", "unequal", "smallerEq", "smaller", "compare"]
  },
  eM = {
    name: "smaller",
    category: "Relational",
    syntax: ["x < y", "smaller(x, y)"],
    description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.",
    examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"],
    seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"]
  },
  rM = {
    name: "smallerEq",
    category: "Relational",
    syntax: ["x <= y", "smallerEq(x, y)"],
    description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.",
    examples: ["2 <= 1+1", "2 < 1+1", "a = 3.2", "b = 6-2.8", "(a <= b)"],
    seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"]
  },
  tM = {
    name: "unequal",
    category: "Relational",
    syntax: ["x != y", "unequal(x, y)"],
    description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.",
    examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"],
    seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"]
  },
  nM = {
    name: "setCartesian",
    category: "Set",
    syntax: ["setCartesian(set1, set2)"],
    description: "Create the cartesian product of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays and the values will be sorted in ascending order before the operation.",
    examples: ["setCartesian([1, 2], [3, 4])"],
    seealso: ["setUnion", "setIntersect", "setDifference", "setPowerset"]
  },
  aM = {
    name: "setDifference",
    category: "Set",
    syntax: ["setDifference(set1, set2)"],
    description: "Create the difference of two (multi)sets: every element of set1, that is not the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
    examples: ["setDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
    seealso: ["setUnion", "setIntersect", "setSymDifference"]
  },
  iM = {
    name: "setDistinct",
    category: "Set",
    syntax: ["setDistinct(set)"],
    description: "Collect the distinct elements of a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
    examples: ["setDistinct([1, 1, 1, 2, 2, 3])"],
    seealso: ["setMultiplicity"]
  },
  oM = {
    name: "setIntersect",
    category: "Set",
    syntax: ["setIntersect(set1, set2)"],
    description: "Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
    examples: ["setIntersect([1, 2, 3, 4], [3, 4, 5, 6])", "setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
    seealso: ["setUnion", "setDifference"]
  },
  sM = {
    name: "setIsSubset",
    category: "Set",
    syntax: ["setIsSubset(set1, set2)"],
    description: "Check whether a (multi)set is a subset of another (multi)set: every element of set1 is the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
    examples: ["setIsSubset([1, 2], [3, 4, 5, 6])", "setIsSubset([3, 4], [3, 4, 5, 6])"],
    seealso: ["setUnion", "setIntersect", "setDifference"]
  },
  uM = {
    name: "setMultiplicity",
    category: "Set",
    syntax: ["setMultiplicity(element, set)"],
    description: "Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
    examples: ["setMultiplicity(1, [1, 2, 2, 4])", "setMultiplicity(2, [1, 2, 2, 4])"],
    seealso: ["setDistinct", "setSize"]
  },
  lM = {
    name: "setPowerset",
    category: "Set",
    syntax: ["setPowerset(set)"],
    description: "Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.",
    examples: ["setPowerset([1, 2, 3])"],
    seealso: ["setCartesian"]
  },
  cM = {
    name: "setSize",
    category: "Set",
    syntax: ["setSize(set)", "setSize(set, unique)"],
    description: 'Count the number of elements of a (multi)set. When the second parameter "unique" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.',
    examples: ["setSize([1, 2, 2, 4])", "setSize([1, 2, 2, 4], true)"],
    seealso: ["setUnion", "setIntersect", "setDifference"]
  },
  fM = {
    name: "setSymDifference",
    category: "Set",
    syntax: ["setSymDifference(set1, set2)"],
    description: "Create the symmetric difference of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
    examples: ["setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
    seealso: ["setUnion", "setIntersect", "setDifference"]
  },
  mM = {
    name: "setUnion",
    category: "Set",
    syntax: ["setUnion(set1, set2)"],
    description: "Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
    examples: ["setUnion([1, 2, 3, 4], [3, 4, 5, 6])", "setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
    seealso: ["setIntersect", "setDifference"]
  },
  vM = {
    name: "zpk2tf",
    category: "Signal",
    syntax: ["zpk2tf(z, p, k)"],
    description: "Compute the transfer function of a zero-pole-gain model.",
    examples: ["zpk2tf([1, 2], [-1, -2], 1)", "zpk2tf([1, 2], [-1, -2])", "zpk2tf([1 - 3i, 2 + 2i], [-1, -2])"],
    seealso: []
  },
  pM = {
    name: "freqz",
    category: "Signal",
    syntax: ["freqz(b, a)", "freqz(b, a, w)"],
    description: "Calculates the frequency response of a filter given its numerator and denominator coefficients.",
    examples: ["freqz([1, 2], [1, 2, 3])", "freqz([1, 2], [1, 2, 3], [0, 1])", "freqz([1, 2], [1, 2, 3], 512)"],
    seealso: []
  },
  dM = {
    name: "erf",
    category: "Special",
    syntax: ["erf(x)"],
    description: "Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x",
    examples: ["erf(0.2)", "erf(-0.5)", "erf(4)"],
    seealso: []
  },
  hM = {
    name: "zeta",
    category: "Special",
    syntax: ["zeta(s)"],
    description: "Compute the Riemann Zeta Function using an infinite series and Riemanns Functional Equation for the entire complex plane",
    examples: ["zeta(0.2)", "zeta(-0.5)", "zeta(4)"],
    seealso: []
  },
  gM = {
    name: "mad",
    category: "Statistics",
    syntax: ["mad(a, b, c, ...)", "mad(A)"],
    description: "Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.",
    examples: ["mad(10, 20, 30)", "mad([1, 2, 3])"],
    seealso: ["mean", "median", "std", "abs"]
  },
  yM = {
    name: "max",
    category: "Statistics",
    syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dimension)"],
    description: "Compute the maximum value of a list of values.",
    examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])", "max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"],
    seealso: ["mean", "median", "min", "prod", "std", "sum", "variance"]
  },
  bM = {
    name: "mean",
    category: "Statistics",
    syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dimension)"],
    description: "Compute the arithmetic mean of a list of values.",
    examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])", "mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)", "mean([1.0, 2.7, 3.2, 4.0])"],
    seealso: ["max", "median", "min", "prod", "std", "sum", "variance"]
  },
  xM = {
    name: "median",
    category: "Statistics",
    syntax: ["median(a, b, c, ...)", "median(A)"],
    description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.",
    examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"],
    seealso: ["max", "mean", "min", "prod", "std", "sum", "variance", "quantileSeq"]
  },
  wM = {
    name: "min",
    category: "Statistics",
    syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dimension)"],
    description: "Compute the minimum value of a list of values.",
    examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])", "min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"],
    seealso: ["max", "mean", "median", "prod", "std", "sum", "variance"]
  },
  NM = {
    name: "mode",
    category: "Statistics",
    syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"],
    description: "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.",
    examples: ["mode(2, 1, 4, 3, 1)", "mode([1, 2.7, 3.2, 4, 2.7])", "mode(1, 4, 6, 1, 6)"],
    seealso: ["max", "mean", "min", "median", "prod", "std", "sum", "variance"]
  },
  DM = {
    name: "prod",
    category: "Statistics",
    syntax: ["prod(a, b, c, ...)", "prod(A)"],
    description: "Compute the product of all values.",
    examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"],
    seealso: ["max", "mean", "min", "median", "min", "std", "sum", "variance"]
  },
  AM = {
    name: "quantileSeq",
    category: "Statistics",
    syntax: ["quantileSeq(A, prob[, sorted])", "quantileSeq(A, [prob1, prob2, ...][, sorted])", "quantileSeq(A, N[, sorted])"],
    description: `Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. 

In case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.`,
    examples: ["quantileSeq([3, -1, 5, 7], 0.5)", "quantileSeq([3, -1, 5, 7], [1/3, 2/3])", "quantileSeq([3, -1, 5, 7], 2)", "quantileSeq([-1, 3, 5, 7], 0.5, true)"],
    seealso: ["mean", "median", "min", "max", "prod", "std", "sum", "variance"]
  },
  EM = {
    name: "std",
    category: "Statistics",
    syntax: ["std(a, b, c, ...)", "std(A)", "std(A, dimension)", "std(A, normalization)", "std(A, dimension, normalization)"],
    description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
    examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', "std([1, 2, 3; 4, 5, 6])"],
    seealso: ["max", "mean", "min", "median", "prod", "sum", "variance"]
  },
  SM = {
    name: "cumsum",
    category: "Statistics",
    syntax: ["cumsum(a, b, c, ...)", "cumsum(A)"],
    description: "Compute the cumulative sum of all values.",
    examples: ["cumsum(2, 3, 4, 1)", "cumsum([2, 3, 4, 1])", "cumsum([1, 2; 3, 4])", "cumsum([1, 2; 3, 4], 1)", "cumsum([1, 2; 3, 4], 2)"],
    seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"]
  },
  CM = {
    name: "sum",
    category: "Statistics",
    syntax: ["sum(a, b, c, ...)", "sum(A)", "sum(A, dimension)"],
    description: "Compute the sum of all values.",
    examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"],
    seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"]
  },
  MM = {
    name: "variance",
    category: "Statistics",
    syntax: ["variance(a, b, c, ...)", "variance(A)", "variance(A, dimension)", "variance(A, normalization)", "variance(A, dimension, normalization)"],
    description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
    examples: ["variance(2, 4, 6)", "variance([2, 4, 6, 8])", 'variance([2, 4, 6, 8], "uncorrected")', 'variance([2, 4, 6, 8], "biased")', "variance([1, 2, 3; 4, 5, 6])"],
    seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
  },
  FM = {
    name: "corr",
    category: "Statistics",
    syntax: ["corr(A,B)"],
    description: "Compute the correlation coefficient of a two list with values, For matrices, the matrix correlation coefficient is calculated.",
    examples: ["corr([2, 4, 6, 8],[1, 2, 3, 6])", "corr(matrix([[1, 2.2, 3, 4.8, 5], [1, 2, 3, 4, 5]]), matrix([[4, 5.3, 6.6, 7, 8], [1, 2, 3, 4, 5]]))"],
    seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
  },
  BM = {
    name: "acos",
    category: "Trigonometry",
    syntax: ["acos(x)"],
    description: "Compute the inverse cosine of a value in radians.",
    examples: ["acos(0.5)", "acos(cos(2.3))"],
    seealso: ["cos", "atan", "asin"]
  },
  TM = {
    name: "acosh",
    category: "Trigonometry",
    syntax: ["acosh(x)"],
    description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.",
    examples: ["acosh(1.5)"],
    seealso: ["cosh", "asinh", "atanh"]
  },
  OM = {
    name: "acot",
    category: "Trigonometry",
    syntax: ["acot(x)"],
    description: "Calculate the inverse cotangent of a value.",
    examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"],
    seealso: ["cot", "atan"]
  },
  $M = {
    name: "acoth",
    category: "Trigonometry",
    syntax: ["acoth(x)"],
    description: "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.",
    examples: ["acoth(2)", "acoth(0.5)"],
    seealso: ["acsch", "asech"]
  },
  _M = {
    name: "acsc",
    category: "Trigonometry",
    syntax: ["acsc(x)"],
    description: "Calculate the inverse cotangent of a value.",
    examples: ["acsc(2)", "acsc(csc(0.5))", "acsc(0.5)"],
    seealso: ["csc", "asin", "asec"]
  },
  IM = {
    name: "acsch",
    category: "Trigonometry",
    syntax: ["acsch(x)"],
    description: "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.",
    examples: ["acsch(0.5)"],
    seealso: ["asech", "acoth"]
  },
  qM = {
    name: "asec",
    category: "Trigonometry",
    syntax: ["asec(x)"],
    description: "Calculate the inverse secant of a value.",
    examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"],
    seealso: ["acos", "acot", "acsc"]
  },
  RM = {
    name: "asech",
    category: "Trigonometry",
    syntax: ["asech(x)"],
    description: "Calculate the inverse secant of a value.",
    examples: ["asech(0.5)"],
    seealso: ["acsch", "acoth"]
  },
  zM = {
    name: "asin",
    category: "Trigonometry",
    syntax: ["asin(x)"],
    description: "Compute the inverse sine of a value in radians.",
    examples: ["asin(0.5)", "asin(sin(0.5))"],
    seealso: ["sin", "acos", "atan"]
  },
  PM = {
    name: "asinh",
    category: "Trigonometry",
    syntax: ["asinh(x)"],
    description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.",
    examples: ["asinh(0.5)"],
    seealso: ["acosh", "atanh"]
  },
  UM = {
    name: "atan",
    category: "Trigonometry",
    syntax: ["atan(x)"],
    description: "Compute the inverse tangent of a value in radians.",
    examples: ["atan(0.5)", "atan(tan(0.5))"],
    seealso: ["tan", "acos", "asin"]
  },
  LM = {
    name: "atan2",
    category: "Trigonometry",
    syntax: ["atan2(y, x)"],
    description: "Computes the principal value of the arc tangent of y/x in radians.",
    examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"],
    seealso: ["sin", "cos", "tan"]
  },
  kM = {
    name: "atanh",
    category: "Trigonometry",
    syntax: ["atanh(x)"],
    description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.",
    examples: ["atanh(0.5)"],
    seealso: ["acosh", "asinh"]
  },
  HM = {
    name: "cos",
    category: "Trigonometry",
    syntax: ["cos(x)"],
    description: "Compute the cosine of x in radians.",
    examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"],
    seealso: ["acos", "sin", "tan"]
  },
  GM = {
    name: "cosh",
    category: "Trigonometry",
    syntax: ["cosh(x)"],
    description: "Compute the hyperbolic cosine of x in radians.",
    examples: ["cosh(0.5)"],
    seealso: ["sinh", "tanh", "coth"]
  },
  VM = {
    name: "cot",
    category: "Trigonometry",
    syntax: ["cot(x)"],
    description: "Compute the cotangent of x in radians. Defined as 1/tan(x)",
    examples: ["cot(2)", "1 / tan(2)"],
    seealso: ["sec", "csc", "tan"]
  },
  ZM = {
    name: "coth",
    category: "Trigonometry",
    syntax: ["coth(x)"],
    description: "Compute the hyperbolic cotangent of x in radians.",
    examples: ["coth(2)", "1 / tanh(2)"],
    seealso: ["sech", "csch", "tanh"]
  },
  YM = {
    name: "csc",
    category: "Trigonometry",
    syntax: ["csc(x)"],
    description: "Compute the cosecant of x in radians. Defined as 1/sin(x)",
    examples: ["csc(2)", "1 / sin(2)"],
    seealso: ["sec", "cot", "sin"]
  },
  WM = {
    name: "csch",
    category: "Trigonometry",
    syntax: ["csch(x)"],
    description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)",
    examples: ["csch(2)", "1 / sinh(2)"],
    seealso: ["sech", "coth", "sinh"]
  },
  QM = {
    name: "sec",
    category: "Trigonometry",
    syntax: ["sec(x)"],
    description: "Compute the secant of x in radians. Defined as 1/cos(x)",
    examples: ["sec(2)", "1 / cos(2)"],
    seealso: ["cot", "csc", "cos"]
  },
  XM = {
    name: "sech",
    category: "Trigonometry",
    syntax: ["sech(x)"],
    description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)",
    examples: ["sech(2)", "1 / cosh(2)"],
    seealso: ["coth", "csch", "cosh"]
  },
  JM = {
    name: "sin",
    category: "Trigonometry",
    syntax: ["sin(x)"],
    description: "Compute the sine of x in radians.",
    examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"],
    seealso: ["asin", "cos", "tan"]
  },
  KM = {
    name: "sinh",
    category: "Trigonometry",
    syntax: ["sinh(x)"],
    description: "Compute the hyperbolic sine of x in radians.",
    examples: ["sinh(0.5)"],
    seealso: ["cosh", "tanh"]
  },
  jM = {
    name: "tan",
    category: "Trigonometry",
    syntax: ["tan(x)"],
    description: "Compute the tangent of x in radians.",
    examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"],
    seealso: ["atan", "sin", "cos"]
  },
  e3 = {
    name: "tanh",
    category: "Trigonometry",
    syntax: ["tanh(x)"],
    description: "Compute the hyperbolic tangent of x in radians.",
    examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"],
    seealso: ["sinh", "cosh"]
  },
  r3 = {
    name: "to",
    category: "Units",
    syntax: ["x to unit", "to(x, unit)"],
    description: "Change the unit of a value.",
    examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"],
    seealso: []
  },
  t3 = {
    name: "bin",
    category: "Utils",
    syntax: ["bin(value)"],
    description: "Format a number as binary",
    examples: ["bin(2)"],
    seealso: ["oct", "hex"]
  },
  n3 = {
    name: "clone",
    category: "Utils",
    syntax: ["clone(x)"],
    description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
    examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'],
    seealso: []
  },
  a3 = {
    name: "format",
    category: "Utils",
    syntax: ["format(value)", "format(value, precision)"],
    description: "Format a value of any type as string.",
    examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"],
    seealso: ["print"]
  },
  i3 = {
    name: "hasNumericValue",
    category: "Utils",
    syntax: ["hasNumericValue(x)"],
    description: "Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.",
    examples: ["hasNumericValue(2)", 'hasNumericValue("2")', 'isNumeric("2")', "hasNumericValue(0)", "hasNumericValue(bignumber(500))", "hasNumericValue(fraction(0.125))", "hasNumericValue(2 + 3i)", 'hasNumericValue([2.3, "foo", false])'],
    seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "isNumeric"]
  },
  o3 = {
    name: "hex",
    category: "Utils",
    syntax: ["hex(value)"],
    description: "Format a number as hexadecimal",
    examples: ["hex(240)"],
    seealso: ["bin", "oct"]
  },
  s3 = {
    name: "isInteger",
    category: "Utils",
    syntax: ["isInteger(x)"],
    description: "Test whether a value is an integer number.",
    examples: ["isInteger(2)", "isInteger(3.5)", "isInteger([3, 0.5, -2])"],
    seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
  },
  u3 = {
    name: "isNaN",
    category: "Utils",
    syntax: ["isNaN(x)"],
    description: "Test whether a value is NaN (not a number)",
    examples: ["isNaN(2)", "isNaN(0 / 0)", "isNaN(NaN)", "isNaN(Infinity)"],
    seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
  },
  l3 = {
    name: "isNegative",
    category: "Utils",
    syntax: ["isNegative(x)"],
    description: "Test whether a value is negative: smaller than zero.",
    examples: ["isNegative(2)", "isNegative(0)", "isNegative(-4)", "isNegative([3, 0.5, -2])"],
    seealso: ["isInteger", "isNumeric", "isPositive", "isZero"]
  },
  c3 = {
    name: "isNumeric",
    category: "Utils",
    syntax: ["isNumeric(x)"],
    description: "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.",
    examples: ["isNumeric(2)", 'isNumeric("2")', 'hasNumericValue("2")', "isNumeric(0)", "isNumeric(bignumber(500))", "isNumeric(fraction(0.125))", "isNumeric(2 + 3i)", 'isNumeric([2.3, "foo", false])'],
    seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "hasNumericValue"]
  },
  f3 = {
    name: "isPositive",
    category: "Utils",
    syntax: ["isPositive(x)"],
    description: "Test whether a value is positive: larger than zero.",
    examples: ["isPositive(2)", "isPositive(0)", "isPositive(-4)", "isPositive([3, 0.5, -2])"],
    seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
  },
  m3 = {
    name: "isPrime",
    category: "Utils",
    syntax: ["isPrime(x)"],
    description: "Test whether a value is prime: has no divisors other than itself and one.",
    examples: ["isPrime(3)", "isPrime(-2)", "isPrime([2, 17, 100])"],
    seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
  },
  v3 = {
    name: "isZero",
    category: "Utils",
    syntax: ["isZero(x)"],
    description: "Test whether a value is zero.",
    examples: ["isZero(2)", "isZero(0)", "isZero(-4)", "isZero([3, 0, -2, 0])"],
    seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"]
  },
  p3 = {
    name: "numeric",
    category: "Utils",
    syntax: ["numeric(x)"],
    description: "Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.",
    examples: ['numeric("4")', 'numeric("4", "number")', 'numeric("4", "BigNumber")', 'numeric("4", "Fraction")', 'numeric(4, "Fraction")', 'numeric(fraction(2, 5), "number")'],
    seealso: ["number", "fraction", "bignumber", "string", "format"]
  },
  d3 = {
    name: "oct",
    category: "Utils",
    syntax: ["oct(value)"],
    description: "Format a number as octal",
    examples: ["oct(56)"],
    seealso: ["bin", "hex"]
  },
  h3 = {
    name: "print",
    category: "Utils",
    syntax: ["print(template, values)", "print(template, values, precision)"],
    description: "Interpolate values into a string template.",
    examples: ['print("Lucy is $age years old", {age: 5})', 'print("The value of pi is $pi", {pi: pi}, 3)', 'print("Hello, $user.name!", {user: {name: "John"}})', 'print("Values: $1, $2, $3", [6, 9, 4])'],
    seealso: ["format"]
  },
  g3 = {
    name: "typeOf",
    category: "Utils",
    syntax: ["typeOf(x)"],
    description: "Get the type of a variable.",
    examples: ["typeOf(3.5)", "typeOf(2 - 4i)", "typeOf(45 deg)", 'typeOf("hello world")'],
    seealso: ["getMatrixDataType"]
  },
  y3 = {
    name: "solveODE",
    category: "Numeric",
    syntax: ["solveODE(func, tspan, y0)", "solveODE(func, tspan, y0, options)"],
    description: "Numerical Integration of Ordinary Differential Equations.",
    examples: ["f(t,y) = y", "tspan = [0, 4]", "solveODE(f, tspan, 1)", "solveODE(f, tspan, [1, 2])", 'solveODE(f, tspan, 1, { method:"RK23", maxStep:0.1 })'],
    seealso: ["derivative", "simplifyCore"]
  },
  b3 = {
    bignumber: lE,
    boolean: cE,
    complex: fE,
    createUnit: mE,
    fraction: vE,
    index: pE,
    matrix: dE,
    number: hE,
    sparse: gE,
    splitUnit: yE,
    string: bE,
    unit: xE,
    e: Bc,
    E: Bc,
    false: WA,
    i: QA,
    Infinity: XA,
    LN2: KA,
    LN10: JA,
    LOG2E: eE,
    LOG10E: jA,
    NaN: rE,
    null: tE,
    pi: Tc,
    PI: Tc,
    phi: nE,
    SQRT1_2: aE,
    SQRT2: iE,
    tau: oE,
    true: sE,
    version: uE,
    speedOfLight: {
      description: "Speed of light in vacuum",
      examples: ["speedOfLight"]
    },
    gravitationConstant: {
      description: "Newtonian constant of gravitation",
      examples: ["gravitationConstant"]
    },
    planckConstant: {
      description: "Planck constant",
      examples: ["planckConstant"]
    },
    reducedPlanckConstant: {
      description: "Reduced Planck constant",
      examples: ["reducedPlanckConstant"]
    },
    magneticConstant: {
      description: "Magnetic constant (vacuum permeability)",
      examples: ["magneticConstant"]
    },
    electricConstant: {
      description: "Electric constant (vacuum permeability)",
      examples: ["electricConstant"]
    },
    vacuumImpedance: {
      description: "Characteristic impedance of vacuum",
      examples: ["vacuumImpedance"]
    },
    coulomb: {
      description: "Coulomb's constant",
      examples: ["coulomb"]
    },
    elementaryCharge: {
      description: "Elementary charge",
      examples: ["elementaryCharge"]
    },
    bohrMagneton: {
      description: "Borh magneton",
      examples: ["bohrMagneton"]
    },
    conductanceQuantum: {
      description: "Conductance quantum",
      examples: ["conductanceQuantum"]
    },
    inverseConductanceQuantum: {
      description: "Inverse conductance quantum",
      examples: ["inverseConductanceQuantum"]
    },
    magneticFluxQuantum: {
      description: "Magnetic flux quantum",
      examples: ["magneticFluxQuantum"]
    },
    nuclearMagneton: {
      description: "Nuclear magneton",
      examples: ["nuclearMagneton"]
    },
    klitzing: {
      description: "Von Klitzing constant",
      examples: ["klitzing"]
    },
    bohrRadius: {
      description: "Borh radius",
      examples: ["bohrRadius"]
    },
    classicalElectronRadius: {
      description: "Classical electron radius",
      examples: ["classicalElectronRadius"]
    },
    electronMass: {
      description: "Electron mass",
      examples: ["electronMass"]
    },
    fermiCoupling: {
      description: "Fermi coupling constant",
      examples: ["fermiCoupling"]
    },
    fineStructure: {
      description: "Fine-structure constant",
      examples: ["fineStructure"]
    },
    hartreeEnergy: {
      description: "Hartree energy",
      examples: ["hartreeEnergy"]
    },
    protonMass: {
      description: "Proton mass",
      examples: ["protonMass"]
    },
    deuteronMass: {
      description: "Deuteron Mass",
      examples: ["deuteronMass"]
    },
    neutronMass: {
      description: "Neutron mass",
      examples: ["neutronMass"]
    },
    quantumOfCirculation: {
      description: "Quantum of circulation",
      examples: ["quantumOfCirculation"]
    },
    rydberg: {
      description: "Rydberg constant",
      examples: ["rydberg"]
    },
    thomsonCrossSection: {
      description: "Thomson cross section",
      examples: ["thomsonCrossSection"]
    },
    weakMixingAngle: {
      description: "Weak mixing angle",
      examples: ["weakMixingAngle"]
    },
    efimovFactor: {
      description: "Efimov factor",
      examples: ["efimovFactor"]
    },
    atomicMass: {
      description: "Atomic mass constant",
      examples: ["atomicMass"]
    },
    avogadro: {
      description: "Avogadro's number",
      examples: ["avogadro"]
    },
    boltzmann: {
      description: "Boltzmann constant",
      examples: ["boltzmann"]
    },
    faraday: {
      description: "Faraday constant",
      examples: ["faraday"]
    },
    firstRadiation: {
      description: "First radiation constant",
      examples: ["firstRadiation"]
    },
    loschmidt: {
      description: "Loschmidt constant at T=273.15 K and p=101.325 kPa",
      examples: ["loschmidt"]
    },
    gasConstant: {
      description: "Gas constant",
      examples: ["gasConstant"]
    },
    molarPlanckConstant: {
      description: "Molar Planck constant",
      examples: ["molarPlanckConstant"]
    },
    molarVolume: {
      description: "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa",
      examples: ["molarVolume"]
    },
    sackurTetrode: {
      description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa",
      examples: ["sackurTetrode"]
    },
    secondRadiation: {
      description: "Second radiation constant",
      examples: ["secondRadiation"]
    },
    stefanBoltzmann: {
      description: "Stefan-Boltzmann constant",
      examples: ["stefanBoltzmann"]
    },
    wienDisplacement: {
      description: "Wien displacement law constant",
      examples: ["wienDisplacement"]
    },
    molarMass: {
      description: "Molar mass constant",
      examples: ["molarMass"]
    },
    molarMassC12: {
      description: "Molar mass constant of carbon-12",
      examples: ["molarMassC12"]
    },
    gravity: {
      description: "Standard acceleration of gravity (standard acceleration of free-fall on Earth)",
      examples: ["gravity"]
    },
    planckLength: {
      description: "Planck length",
      examples: ["planckLength"]
    },
    planckMass: {
      description: "Planck mass",
      examples: ["planckMass"]
    },
    planckTime: {
      description: "Planck time",
      examples: ["planckTime"]
    },
    planckCharge: {
      description: "Planck charge",
      examples: ["planckCharge"]
    },
    planckTemperature: {
      description: "Planck temperature",
      examples: ["planckTemperature"]
    },
    derivative: AE,
    lsolve: SE,
    lsolveAll: CE,
    lup: ME,
    lusolve: FE,
    leafCount: EE,
    polynomialRoot: BE,
    resolve: $E,
    simplify: _E,
    simplifyConstant: IE,
    simplifyCore: qE,
    symbolicEqual: zE,
    rationalize: OE,
    slu: RE,
    usolve: PE,
    usolveAll: UE,
    qr: TE,
    abs: LE,
    add: kE,
    cbrt: HE,
    ceil: GE,
    cube: VE,
    divide: ZE,
    dotDivide: YE,
    dotMultiply: WE,
    dotPow: QE,
    exp: XE,
    expm: JE,
    expm1: KE,
    fix: jE,
    floor: eS,
    gcd: rS,
    hypot: tS,
    lcm: aS,
    log: iS,
    log2: uS,
    log1p: sS,
    log10: oS,
    mod: lS,
    multiply: cS,
    norm: fS,
    nthRoot: mS,
    nthRoots: vS,
    pow: pS,
    round: dS,
    sign: hS,
    sqrt: gS,
    sqrtm: yS,
    square: NS,
    subtract: DS,
    unaryMinus: AS,
    unaryPlus: ES,
    xgcd: SS,
    invmod: nS,
    bitAnd: CS,
    bitNot: MS,
    bitOr: FS,
    bitXor: BS,
    leftShift: TS,
    rightArithShift: OS,
    rightLogShift: $S,
    bellNumbers: _S,
    catalan: IS,
    composition: qS,
    stirlingS2: RS,
    config: wE,
    import: NE,
    typed: DE,
    arg: zS,
    conj: PS,
    re: LS,
    im: US,
    evaluate: kS,
    help: HS,
    distance: GS,
    intersect: VS,
    and: ZS,
    not: YS,
    or: WS,
    xor: QS,
    concat: JS,
    count: KS,
    cross: jS,
    column: XS,
    ctranspose: eC,
    det: rC,
    diag: tC,
    diff: nC,
    dot: aC,
    getMatrixDataType: lC,
    identity: cC,
    filter: oC,
    flatten: sC,
    forEach: uC,
    inv: fC,
    pinv: mC,
    eigs: iC,
    kron: vC,
    matrixFromFunction: hC,
    matrixFromRows: gC,
    matrixFromColumns: dC,
    map: pC,
    ones: yC,
    partitionSelect: bC,
    range: xC,
    resize: NC,
    reshape: wC,
    rotate: DC,
    rotationMatrix: AC,
    row: EC,
    size: SC,
    sort: CC,
    squeeze: MC,
    subset: FC,
    trace: BC,
    transpose: TC,
    zeros: OC,
    fft: $C,
    ifft: _C,
    sylvester: bS,
    schur: xS,
    lyap: wS,
    solveODE: y3,
    combinations: IC,
    combinationsWithRep: qC,
    factorial: RC,
    gamma: zC,
    kldivergence: UC,
    lgamma: PC,
    multinomial: LC,
    permutations: kC,
    pickRandom: HC,
    random: GC,
    randomInt: VC,
    compare: ZC,
    compareNatural: YC,
    compareText: WC,
    deepEqual: QC,
    equal: XC,
    equalText: JC,
    larger: KC,
    largerEq: jC,
    smaller: eM,
    smallerEq: rM,
    unequal: tM,
    setCartesian: nM,
    setDifference: aM,
    setDistinct: iM,
    setIntersect: oM,
    setIsSubset: sM,
    setMultiplicity: uM,
    setPowerset: lM,
    setSize: cM,
    setSymDifference: fM,
    setUnion: mM,
    zpk2tf: vM,
    freqz: pM,
    erf: dM,
    zeta: hM,
    cumsum: SM,
    mad: gM,
    max: yM,
    mean: bM,
    median: xM,
    min: wM,
    mode: NM,
    prod: DM,
    quantileSeq: AM,
    std: EM,
    sum: CM,
    variance: MM,
    corr: FM,
    acos: BM,
    acosh: TM,
    acot: OM,
    acoth: $M,
    acsc: _M,
    acsch: IM,
    asec: qM,
    asech: RM,
    asin: zM,
    asinh: PM,
    atan: UM,
    atanh: kM,
    atan2: LM,
    cos: HM,
    cosh: GM,
    cot: VM,
    coth: ZM,
    csc: YM,
    csch: WM,
    sec: QM,
    sech: XM,
    sin: JM,
    sinh: KM,
    tan: jM,
    tanh: e3,
    to: r3,
    clone: n3,
    format: a3,
    bin: t3,
    oct: d3,
    hex: o3,
    isNaN: u3,
    isInteger: s3,
    isNegative: l3,
    isNumeric: c3,
    hasNumericValue: i3,
    isPositive: f3,
    isPrime: m3,
    isZero: v3,
    print: h3,
    typeOf: g3,
    numeric: p3
  },
  Oc = "help",
  x3 = ["typed", "mathWithTransform", "Help"],
  w3 = z(Oc, x3, e => {
    var {
      typed: r,
      mathWithTransform: i,
      Help: n
    } = e;
    return r(Oc, {
      any: function(a) {
        var o, f = a;
        if (typeof a != "string") {
          for (o in i)
            if (Ee(i, o) && a === i[o]) {
              f = o;
              break
            }
        }
        var c = Fr(b3, f);
        if (!c) {
          var u = typeof f == "function" ? f.name : f;
          throw new Error('No documentation found on "' + u + '"')
        }
        return new n(c)
      }
    })
  }),
  $c = "chain",
  N3 = ["typed", "Chain"],
  D3 = z($c, N3, e => {
    var {
      typed: r,
      Chain: i
    } = e;
    return r($c, {
      "": function() {
        return new i
      },
      any: function(t) {
        return new i(t)
      }
    })
  }),
  _c = "det",
  A3 = ["typed", "matrix", "subtractScalar", "multiply", "divideScalar", "isZero", "unaryMinus"],
  E3 = z(_c, A3, e => {
    var {
      typed: r,
      matrix: i,
      subtractScalar: n,
      multiply: t,
      divideScalar: a,
      isZero: o,
      unaryMinus: f
    } = e;
    return r(_c, {
      any: function(s) {
        return $e(s)
      },
      "Array | Matrix": function(s) {
        var l;
        switch (Fe(s) ? l = s.size() : Array.isArray(s) ? (s = i(s), l = s.size()) : l = [], l.length) {
          case 0:
            return $e(s);
          case 1:
            if (l[0] === 1) return $e(s.valueOf()[0]);
            if (l[0] === 0) return 1;
            throw new RangeError("Matrix must be square (size: " + ze(l) + ")");
          case 2: {
            var m = l[0],
              v = l[1];
            if (m === v) return c(s.clone().valueOf(), m);
            if (v === 0) return 1;
            throw new RangeError("Matrix must be square (size: " + ze(l) + ")")
          }
          default:
            throw new RangeError("Matrix must be two dimensional (size: " + ze(l) + ")")
        }
      }
    });

    function c(u, s, l) {
      if (s === 1) return $e(u[0][0]);
      if (s === 2) return n(t(u[0][0], u[1][1]), t(u[1][0], u[0][1]));
      for (var m = !1, v = new Array(s).fill(0).map((A, E) => E), d = 0; d < s; d++) {
        var p = v[d];
        if (o(u[p][d])) {
          var b = void 0;
          for (b = d + 1; b < s; b++)
            if (!o(u[v[b]][d])) {
              p = v[b], v[b] = v[d], v[d] = p, m = !m;
              break
            } if (b === s) return u[p][d]
        }
        for (var g = u[p][d], N = d === 0 ? 1 : u[v[d - 1]][d - 1], h = d + 1; h < s; h++)
          for (var x = v[h], w = d + 1; w < s; w++) u[x][w] = a(n(t(u[x][w], g), t(u[x][d], u[p][w])), N)
      }
      var y = u[v[s - 1]][s - 1];
      return m ? f(y) : y
    }
  }),
  Ic = "inv",
  S3 = ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"],
  C3 = z(Ic, S3, e => {
    var {
      typed: r,
      matrix: i,
      divideScalar: n,
      addScalar: t,
      multiply: a,
      unaryMinus: o,
      det: f,
      identity: c,
      abs: u
    } = e;
    return r(Ic, {
      "Array | Matrix": function(m) {
        var v = Fe(m) ? m.size() : qe(m);
        switch (v.length) {
          case 1:
            if (v[0] === 1) return Fe(m) ? i([n(1, m.valueOf()[0])]) : [n(1, m[0])];
            throw new RangeError("Matrix must be square (size: " + ze(v) + ")");
          case 2: {
            var d = v[0],
              p = v[1];
            if (d === p) return Fe(m) ? i(s(m.valueOf(), d, p), m.storage()) : s(m, d, p);
            throw new RangeError("Matrix must be square (size: " + ze(v) + ")")
          }
          default:
            throw new RangeError("Matrix must be two dimensional (size: " + ze(v) + ")")
        }
      },
      any: function(m) {
        return n(1, m)
      }
    });

    function s(l, m, v) {
      var d, p, b, g, N;
      if (m === 1) {
        if (g = l[0][0], g === 0) throw Error("Cannot calculate inverse, determinant is zero");
        return [
          [n(1, g)]
        ]
      } else if (m === 2) {
        var h = f(l);
        if (h === 0) throw Error("Cannot calculate inverse, determinant is zero");
        return [
          [n(l[1][1], h), n(o(l[0][1]), h)],
          [n(o(l[1][0]), h), n(l[0][0], h)]
        ]
      } else {
        var x = l.concat();
        for (d = 0; d < m; d++) x[d] = x[d].concat();
        for (var w = c(m).valueOf(), y = 0; y < v; y++) {
          var A = u(x[y][y]),
            E = y;
          for (d = y + 1; d < m;) u(x[d][y]) > A && (A = u(x[d][y]), E = d), d++;
          if (A === 0) throw Error("Cannot calculate inverse, determinant is zero");
          d = E, d !== y && (N = x[y], x[y] = x[d], x[d] = N, N = w[y], w[y] = w[d], w[d] = N);
          var D = x[y],
            S = w[y];
          for (d = 0; d < m; d++) {
            var C = x[d],
              M = w[d];
            if (d !== y) {
              if (C[y] !== 0) {
                for (b = n(o(C[y]), D[y]), p = y; p < v; p++) C[p] = t(C[p], a(b, D[p]));
                for (p = 0; p < v; p++) M[p] = t(M[p], a(b, S[p]))
              }
            } else {
              for (b = D[y], p = y; p < v; p++) C[p] = n(C[p], b);
              for (p = 0; p < v; p++) M[p] = n(M[p], b)
            }
          }
        }
        return w
      }
    }
  }),
  qc = "pinv",
  M3 = ["typed", "matrix", "inv", "deepEqual", "equal", "dotDivide", "dot", "ctranspose", "divideScalar", "multiply", "add", "Complex"],
  F3 = z(qc, M3, e => {
    var {
      typed: r,
      matrix: i,
      inv: n,
      deepEqual: t,
      equal: a,
      dotDivide: o,
      dot: f,
      ctranspose: c,
      divideScalar: u,
      multiply: s,
      add: l,
      Complex: m
    } = e;
    return r(qc, {
      "Array | Matrix": function(h) {
        var x = Fe(h) ? h.size() : qe(h);
        switch (x.length) {
          case 1:
            return g(h) ? c(h) : x[0] === 1 ? n(h) : o(c(h), f(h, h));
          case 2: {
            if (g(h)) return c(h);
            var w = x[0],
              y = x[1];
            if (w === y) try {
              return n(h)
            } catch (A) {
              if (!(A instanceof Error && A.message.match(/Cannot calculate inverse, determinant is zero/))) throw A
            }
            return Fe(h) ? i(v(h.valueOf(), w, y), h.storage()) : v(h, w, y)
          }
          default:
            throw new RangeError("Matrix must be two dimensional (size: " + ze(x) + ")")
        }
      },
      any: function(h) {
        return a(h, 0) ? $e(h) : u(1, h)
      }
    });

    function v(N, h, x) {
      var {
        C: w,
        F: y
      } = p(N, h, x), A = s(n(s(c(w), w)), c(w)), E = s(c(y), n(s(y, c(y))));
      return s(E, A)
    }

    function d(N, h, x) {
      for (var w = $e(N), y = 0, A = 0; A < h; A++) {
        if (x <= y) return w;
        for (var E = A; b(w[E][y]);)
          if (E++, h === E && (E = A, y++, x === y)) return w;
        [w[E], w[A]] = [w[A], w[E]];
        for (var D = w[A][y], S = 0; S < x; S++) w[A][S] = o(w[A][S], D);
        for (var C = 0; C < h; C++)
          if (C !== A) {
            D = w[C][y];
            for (var M = 0; M < x; M++) w[C][M] = l(w[C][M], s(-1, s(D, w[A][M])))
          } y++
      }
      return w
    }

    function p(N, h, x) {
      var w = d(N, h, x),
        y = N.map((E, D) => E.filter((S, C) => C < h && !b(f(w[C], w[C])))),
        A = w.filter((E, D) => !b(f(w[D], w[D])));
      return {
        C: y,
        F: A
      }
    }

    function b(N) {
      return a(l(N, m(1, 1)), l(0, m(1, 1)))
    }

    function g(N) {
      return t(l(N, m(1, 1)), l(s(N, 0), m(1, 1)))
    }
  });

function B3(e) {
  var {
    addScalar: r,
    subtract: i,
    flatten: n,
    multiply: t,
    multiplyScalar: a,
    divideScalar: o,
    sqrt: f,
    abs: c,
    bignumber: u,
    diag: s,
    size: l,
    reshape: m,
    inv: v,
    qr: d,
    usolve: p,
    usolveAll: b,
    equal: g,
    complex: N,
    larger: h,
    smaller: x,
    matrixFromColumns: w,
    dot: y
  } = e;

  function A(Z, q, X, ie) {
    var Q = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      ee = E(Z, q, X, ie, Q);
    D(Z, q, X, ie, Q, ee);
    var {
      values: ue,
      C: re
    } = S(Z, q, X, ie, Q);
    if (Q) {
      var ne = C(Z, q, re, ee, ue, X, ie);
      return {
        values: ue,
        eigenvectors: ne
      }
    }
    return {
      values: ue
    }
  }

  function E(Z, q, X, ie, Q) {
    var ee = ie === "BigNumber",
      ue = ie === "Complex",
      re = ee ? u(0) : 0,
      ne = ee ? u(1) : ue ? N(1) : 1,
      le = ee ? u(1) : 1,
      se = ee ? u(10) : 2,
      ge = a(se, se),
      Ae;
    Q && (Ae = Array(q).fill(ne));
    for (var P = !1; !P;) {
      P = !0;
      for (var H = 0; H < q; H++) {
        for (var te = re, k = re, W = 0; W < q; W++) H !== W && (te = r(te, c(Z[W][H])), k = r(k, c(Z[H][W])));
        if (!g(te, 0) && !g(k, 0)) {
          for (var K = le, ve = te, me = o(k, se), R = a(k, se); x(ve, me);) ve = a(ve, ge), K = a(K, se);
          for (; h(ve, R);) ve = o(ve, ge), K = o(K, se);
          var L = x(o(r(ve, k), K), a(r(te, k), .95));
          if (L) {
            P = !1;
            for (var j = o(1, K), ae = 0; ae < q; ae++) H !== ae && (Z[H][ae] = a(Z[H][ae], j), Z[ae][H] = a(Z[ae][H], K));
            Q && (Ae[H] = a(Ae[H], j))
          }
        }
      }
    }
    return Q ? s(Ae) : null
  }

  function D(Z, q, X, ie, Q, ee) {
    var ue = ie === "BigNumber",
      re = ie === "Complex",
      ne = ue ? u(0) : re ? N(0) : 0;
    ue && (X = u(X));
    for (var le = 0; le < q - 2; le++) {
      for (var se = 0, ge = ne, Ae = le + 1; Ae < q; Ae++) {
        var P = Z[Ae][le];
        x(c(ge), c(P)) && (ge = P, se = Ae)
      }
      if (!x(c(ge), X)) {
        if (se !== le + 1) {
          var H = Z[se];
          Z[se] = Z[le + 1], Z[le + 1] = H;
          for (var te = 0; te < q; te++) {
            var k = Z[te][se];
            Z[te][se] = Z[te][le + 1], Z[te][le + 1] = k
          }
          if (Q) {
            var W = ee[se];
            ee[se] = ee[le + 1], ee[le + 1] = W
          }
        }
        for (var K = le + 2; K < q; K++) {
          var ve = o(Z[K][le], ge);
          if (ve !== 0) {
            for (var me = 0; me < q; me++) Z[K][me] = i(Z[K][me], a(ve, Z[le + 1][me]));
            for (var R = 0; R < q; R++) Z[R][le + 1] = r(Z[R][le + 1], a(ve, Z[R][K]));
            if (Q)
              for (var L = 0; L < q; L++) ee[K][L] = i(ee[K][L], a(ve, ee[le + 1][L]))
          }
        }
      }
    }
    return ee
  }

  function S(Z, q, X, ie, Q) {
    var ee = ie === "BigNumber",
      ue = ie === "Complex",
      re = ee ? u(1) : ue ? N(1) : 1;
    ee && (X = u(X));
    for (var ne = $e(Z), le = [], se = q, ge = [], Ae = Q ? s(Array(q).fill(re)) : void 0, P = Q ? s(Array(se).fill(re)) : void 0, H = 0; H <= 100;) {
      H += 1;
      for (var te = ne[se - 1][se - 1], k = 0; k < se; k++) ne[k][k] = i(ne[k][k], te);
      var {
        Q: W,
        R: K
      } = d(ne);
      ne = t(K, W);
      for (var ve = 0; ve < se; ve++) ne[ve][ve] = r(ne[ve][ve], te);
      if (Q && (P = t(P, W)), se === 1 || x(c(ne[se - 1][se - 2]), X)) {
        H = 0, le.push(ne[se - 1][se - 1]), Q && (ge.unshift([
          [1]
        ]), I(P, q), Ae = t(Ae, P), se > 1 && (P = s(Array(se - 1).fill(re)))), se -= 1, ne.pop();
        for (var me = 0; me < se; me++) ne[me].pop()
      } else if (se === 2 || x(c(ne[se - 2][se - 3]), X)) {
        H = 0;
        var R = M(ne[se - 2][se - 2], ne[se - 2][se - 1], ne[se - 1][se - 2], ne[se - 1][se - 1]);
        le.push(...R), Q && (ge.unshift($(ne[se - 2][se - 2], ne[se - 2][se - 1], ne[se - 1][se - 2], ne[se - 1][se - 1], R[0], R[1], X, ie)), I(P, q), Ae = t(Ae, P), se > 2 && (P = s(Array(se - 2).fill(re)))), se -= 2, ne.pop(), ne.pop();
        for (var L = 0; L < se; L++) ne[L].pop(), ne[L].pop()
      }
      if (se === 0) break
    }
    if (le.sort((fe, ce) => +i(c(fe), c(ce))), H > 100) {
      var j = Error("The eigenvalues failed to converge. Only found these eigenvalues: " + le.join(", "));
      throw j.values = le, j.vectors = [], j
    }
    var ae = Q ? t(Ae, _(ge, q)) : void 0;
    return {
      values: le,
      C: ae
    }
  }

  function C(Z, q, X, ie, Q, ee, ue) {
    var re = v(X),
      ne = t(re, Z, X),
      le = ue === "BigNumber",
      se = ue === "Complex",
      ge = le ? u(0) : se ? N(0) : 0,
      Ae = le ? u(1) : se ? N(1) : 1,
      P = [],
      H = [];
    for (var te of Q) {
      var k = T(P, te, g);
      k === -1 ? (P.push(te), H.push(1)) : H[k] += 1
    }
    for (var W = [], K = P.length, ve = Array(q).fill(ge), me = s(Array(q).fill(Ae)), R = function() {
        var ae = P[L],
          fe = i(ne, t(ae, me)),
          ce = b(fe, ve);
        for (ce.shift(); ce.length < H[L];) {
          var ye = B(fe, q, ce, ee, ue);
          if (ye === null) break;
          ce.push(ye)
        }
        var he = t(v(ie), X);
        ce = ce.map(De => t(he, De)), W.push(...ce.map(De => ({
          value: ae,
          vector: n(De)
        })))
      }, L = 0; L < K; L++) R();
    return W
  }

  function M(Z, q, X, ie) {
    var Q = r(Z, ie),
      ee = i(a(Z, ie), a(q, X)),
      ue = a(Q, .5),
      re = a(f(i(a(Q, Q), a(4, ee))), .5);
    return [r(ue, re), i(ue, re)]
  }

  function $(Z, q, X, ie, Q, ee, ue, re) {
    var ne = re === "BigNumber",
      le = re === "Complex",
      se = ne ? u(0) : le ? N(0) : 0,
      ge = ne ? u(1) : le ? N(1) : 1;
    if (x(c(X), ue)) return [
      [ge, se],
      [se, ge]
    ];
    if (h(c(i(Q, ee)), ue)) return [
      [i(Q, ie), i(ee, ie)],
      [X, X]
    ];
    var Ae = i(Z, Q),
      P = i(ie, Q);
    return x(c(q), ue) && x(c(P), ue) ? [
      [Ae, ge],
      [X, se]
    ] : [
      [q, se],
      [P, ge]
    ]
  }

  function I(Z, q) {
    for (var X = 0; X < Z.length; X++) Z[X].push(...Array(q - Z[X].length).fill(0));
    for (var ie = Z.length; ie < q; ie++) Z.push(Array(q).fill(0)), Z[ie][ie] = 1;
    return Z
  }

  function _(Z, q) {
    for (var X = [], ie = 0; ie < q; ie++) X[ie] = Array(q).fill(0);
    var Q = 0;
    for (var ee of Z) {
      for (var ue = ee.length, re = 0; re < ue; re++)
        for (var ne = 0; ne < ue; ne++) X[Q + re][Q + ne] = ee[re][ne];
      Q += ue
    }
    return X
  }

  function T(Z, q, X) {
    for (var ie = 0; ie < Z.length; ie++)
      if (X(Z[ie], q)) return ie;
    return -1
  }

  function B(Z, q, X, ie, Q) {
    for (var ee = Q === "BigNumber" ? u(1e3) : 1e3, ue, re = 0; re < 5; ++re) {
      ue = U(q, X, Q);
      try {
        ue = p(Z, ue)
      } catch {
        continue
      }
      if (h(V(ue), ee)) break
    }
    if (re >= 5) return null;
    for (re = 0;;) {
      var ne = p(Z, ue);
      if (x(V(O(ue, [ne])), ie)) break;
      if (++re >= 10) return null;
      ue = J(ne)
    }
    return ue
  }

  function U(Z, q, X) {
    var ie = X === "BigNumber",
      Q = X === "Complex",
      ee = Array(Z).fill(0).map(ue => 2 * Math.random() - 1);
    return ie && (ee = ee.map(ue => u(ue))), Q && (ee = ee.map(ue => N(ue))), ee = O(ee, q), J(ee, X)
  }

  function O(Z, q) {
    var X = l(Z);
    for (var ie of q) ie = m(ie, X), Z = i(Z, t(o(y(ie, Z), y(ie, ie)), ie));
    return Z
  }

  function V(Z) {
    return c(f(y(Z, Z)))
  }

  function J(Z, q) {
    var X = q === "BigNumber",
      ie = q === "Complex",
      Q = X ? u(1) : ie ? N(1) : 1;
    return t(o(Q, V(Z)), Z)
  }
  return A
}

function T3(e) {
  var {
    config: r,
    addScalar: i,
    subtract: n,
    abs: t,
    atan: a,
    cos: o,
    sin: f,
    multiplyScalar: c,
    inv: u,
    bignumber: s,
    multiply: l,
    add: m
  } = e;

  function v(D, S) {
    var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : r.epsilon,
      M = arguments.length > 3 ? arguments[3] : void 0,
      $ = arguments.length > 4 ? arguments[4] : void 0;
    if (M === "number") return d(D, C, $);
    if (M === "BigNumber") return p(D, C, $);
    throw TypeError("Unsupported data type: " + M)
  }

  function d(D, S, C) {
    var M = D.length,
      $ = Math.abs(S / M),
      I, _;
    if (C) {
      _ = new Array(M);
      for (var T = 0; T < M; T++) _[T] = Array(M).fill(0), _[T][T] = 1
    }
    for (var B = y(D); Math.abs(B[1]) >= Math.abs($);) {
      var U = B[0][0],
        O = B[0][1];
      I = b(D[U][U], D[O][O], D[U][O]), D = w(D, I, U, O), C && (_ = N(_, I, U, O)), B = y(D)
    }
    for (var V = Array(M).fill(0), J = 0; J < M; J++) V[J] = D[J][J];
    return E($e(V), _, C)
  }

  function p(D, S, C) {
    var M = D.length,
      $ = t(S / M),
      I, _;
    if (C) {
      _ = new Array(M);
      for (var T = 0; T < M; T++) _[T] = Array(M).fill(0), _[T][T] = 1
    }
    for (var B = A(D); t(B[1]) >= t($);) {
      var U = B[0][0],
        O = B[0][1];
      I = g(D[U][U], D[O][O], D[U][O]), D = x(D, I, U, O), C && (_ = h(_, I, U, O)), B = A(D)
    }
    for (var V = Array(M).fill(0), J = 0; J < M; J++) V[J] = D[J][J];
    return E($e(V), _, C)
  }

  function b(D, S, C) {
    var M = S - D;
    return Math.abs(M) <= r.epsilon ? Math.PI / 4 : .5 * Math.atan(2 * C / (S - D))
  }

  function g(D, S, C) {
    var M = n(S, D);
    return t(M) <= r.epsilon ? s(-1).acos().div(4) : c(.5, a(l(2, C, u(M))))
  }

  function N(D, S, C, M) {
    for (var $ = D.length, I = Math.cos(S), _ = Math.sin(S), T = Array($).fill(0), B = Array($).fill(0), U = 0; U < $; U++) T[U] = I * D[U][C] - _ * D[U][M], B[U] = _ * D[U][C] + I * D[U][M];
    for (var O = 0; O < $; O++) D[O][C] = T[O], D[O][M] = B[O];
    return D
  }

  function h(D, S, C, M) {
    for (var $ = D.length, I = o(S), _ = f(S), T = Array($).fill(s(0)), B = Array($).fill(s(0)), U = 0; U < $; U++) T[U] = n(c(I, D[U][C]), c(_, D[U][M])), B[U] = i(c(_, D[U][C]), c(I, D[U][M]));
    for (var O = 0; O < $; O++) D[O][C] = T[O], D[O][M] = B[O];
    return D
  }

  function x(D, S, C, M) {
    for (var $ = D.length, I = s(o(S)), _ = s(f(S)), T = c(I, I), B = c(_, _), U = Array($).fill(s(0)), O = Array($).fill(s(0)), V = l(s(2), I, _, D[C][M]), J = i(n(c(T, D[C][C]), V), c(B, D[M][M])), Z = m(c(B, D[C][C]), V, c(T, D[M][M])), q = 0; q < $; q++) U[q] = n(c(I, D[C][q]), c(_, D[M][q])), O[q] = i(c(_, D[C][q]), c(I, D[M][q]));
    D[C][C] = J, D[M][M] = Z, D[C][M] = s(0), D[M][C] = s(0);
    for (var X = 0; X < $; X++) X !== C && X !== M && (D[C][X] = U[X], D[X][C] = U[X], D[M][X] = O[X], D[X][M] = O[X]);
    return D
  }

  function w(D, S, C, M) {
    for (var $ = D.length, I = Math.cos(S), _ = Math.sin(S), T = I * I, B = _ * _, U = Array($).fill(0), O = Array($).fill(0), V = T * D[C][C] - 2 * I * _ * D[C][M] + B * D[M][M], J = B * D[C][C] + 2 * I * _ * D[C][M] + T * D[M][M], Z = 0; Z < $; Z++) U[Z] = I * D[C][Z] - _ * D[M][Z], O[Z] = _ * D[C][Z] + I * D[M][Z];
    D[C][C] = V, D[M][M] = J, D[C][M] = 0, D[M][C] = 0;
    for (var q = 0; q < $; q++) q !== C && q !== M && (D[C][q] = U[q], D[q][C] = U[q], D[M][q] = O[q], D[q][M] = O[q]);
    return D
  }

  function y(D) {
    for (var S = D.length, C = 0, M = [0, 1], $ = 0; $ < S; $++)
      for (var I = $ + 1; I < S; I++) Math.abs(C) < Math.abs(D[$][I]) && (C = Math.abs(D[$][I]), M = [$, I]);
    return [M, C]
  }

  function A(D) {
    for (var S = D.length, C = 0, M = [0, 1], $ = 0; $ < S; $++)
      for (var I = $ + 1; I < S; I++) t(C) < t(D[$][I]) && (C = t(D[$][I]), M = [$, I]);
    return [M, C]
  }

  function E(D, S, C) {
    var M = D.length,
      $ = Array(M),
      I;
    if (C) {
      I = Array(M);
      for (var _ = 0; _ < M; _++) I[_] = Array(M)
    }
    for (var T = 0; T < M; T++) {
      for (var B = 0, U = D[0], O = 0; O < D.length; O++) t(D[O]) < t(U) && (B = O, U = D[B]);
      if ($[T] = D.splice(B, 1)[0], C)
        for (var V = 0; V < M; V++) I[T][V] = S[V][B], S[V].splice(B, 1)
    }
    if (!C) return {
      values: $
    };
    var J = I.map((Z, q) => ({
      value: $[q],
      vector: Z
    }));
    return {
      values: $,
      eigenvectors: J
    }
  }
  return v
}
var O3 = "eigs",
  $3 = ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber", "multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt", "diag", "size", "reshape", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns", "dot"],
  _3 = z(O3, $3, e => {
    var {
      config: r,
      typed: i,
      matrix: n,
      addScalar: t,
      subtract: a,
      equal: o,
      abs: f,
      atan: c,
      cos: u,
      sin: s,
      multiplyScalar: l,
      divideScalar: m,
      inv: v,
      bignumber: d,
      multiply: p,
      add: b,
      larger: g,
      column: N,
      flatten: h,
      number: x,
      complex: w,
      sqrt: y,
      diag: A,
      size: E,
      reshape: D,
      qr: S,
      usolve: C,
      usolveAll: M,
      im: $,
      re: I,
      smaller: _,
      matrixFromColumns: T,
      dot: B
    } = e, U = T3({
      config: r,
      addScalar: t,
      subtract: a,
      column: N,
      flatten: h,
      equal: o,
      abs: f,
      atan: c,
      cos: u,
      sin: s,
      multiplyScalar: l,
      inv: v,
      bignumber: d,
      complex: w,
      multiply: p,
      add: b
    }), O = B3({
      config: r,
      addScalar: t,
      subtract: a,
      multiply: p,
      multiplyScalar: l,
      flatten: h,
      divideScalar: m,
      sqrt: y,
      abs: f,
      bignumber: d,
      diag: A,
      size: E,
      reshape: D,
      qr: S,
      inv: v,
      usolve: C,
      usolveAll: M,
      equal: o,
      complex: w,
      larger: g,
      smaller: _,
      matrixFromColumns: T,
      dot: B
    });
    return i("eigs", {
      Array: function(ee) {
        return V(n(ee))
      },
      "Array, number|BigNumber": function(ee, ue) {
        return V(n(ee), {
          precision: ue
        })
      },
      "Array, Object"(Q, ee) {
        return V(n(Q), ee)
      },
      Matrix: function(ee) {
        return V(ee, {
          matricize: !0
        })
      },
      "Matrix, number|BigNumber": function(ee, ue) {
        return V(ee, {
          precision: ue,
          matricize: !0
        })
      },
      "Matrix, Object": function(ee, ue) {
        var re = {
          matricize: !0
        };
        return pr(re, ue), V(ee, re)
      }
    });

    function V(Q) {
      var ee, ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        re = "eigenvectors" in ue ? ue.eigenvectors : !0,
        ne = (ee = ue.precision) !== null && ee !== void 0 ? ee : r.epsilon,
        le = J(Q, ne, re);
      return ue.matricize && (le.values = n(le.values), re && (le.eigenvectors = le.eigenvectors.map(se => {
        var {
          value: ge,
          vector: Ae
        } = se;
        return {
          value: ge,
          vector: n(Ae)
        }
      }))), re && Object.defineProperty(le, "vectors", {
        enumerable: !1,
        get: () => {
          throw new Error("eigs(M).vectors replaced with eigs(M).eigenvectors")
        }
      }), le
    }

    function J(Q, ee, ue) {
      var re = Q.toArray(),
        ne = Q.size();
      if (ne.length !== 2 || ne[0] !== ne[1]) throw new RangeError("Matrix must be square (size: ".concat(ze(ne), ")"));
      var le = ne[0];
      if (q(re, le, ee) && (X(re, le), Z(re, le, ee))) {
        var se = ie(Q, re, le);
        return U(re, le, ee, se, ue)
      }
      var ge = ie(Q, re, le);
      return O(re, le, ee, ge, ue)
    }

    function Z(Q, ee, ue) {
      for (var re = 0; re < ee; re++)
        for (var ne = re; ne < ee; ne++)
          if (g(d(f(a(Q[re][ne], Q[ne][re]))), ue)) return !1;
      return !0
    }

    function q(Q, ee, ue) {
      for (var re = 0; re < ee; re++)
        for (var ne = 0; ne < ee; ne++)
          if (g(d(f($(Q[re][ne]))), ue)) return !1;
      return !0
    }

    function X(Q, ee) {
      for (var ue = 0; ue < ee; ue++)
        for (var re = 0; re < ee; re++) Q[ue][re] = I(Q[ue][re])
    }

    function ie(Q, ee, ue) {
      var re = Q.datatype();
      if (re === "number" || re === "BigNumber" || re === "Complex") return re;
      for (var ne = !1, le = !1, se = !1, ge = 0; ge < ue; ge++)
        for (var Ae = 0; Ae < ue; Ae++) {
          var P = ee[ge][Ae];
          if (Pe(P) || oa(P)) ne = !0;
          else if (He(P)) le = !0;
          else if (Dt(P)) se = !0;
          else throw TypeError("Unsupported type in Matrix: " + ar(P))
        }
      if (le && se && console.warn("Complex BigNumbers not supported, this operation will lose precission."), se) {
        for (var H = 0; H < ue; H++)
          for (var te = 0; te < ue; te++) ee[H][te] = w(ee[H][te]);
        return "Complex"
      }
      if (le) {
        for (var k = 0; k < ue; k++)
          for (var W = 0; W < ue; W++) ee[k][W] = d(ee[k][W]);
        return "BigNumber"
      }
      if (ne) {
        for (var K = 0; K < ue; K++)
          for (var ve = 0; ve < ue; ve++) ee[K][ve] = x(ee[K][ve]);
        return "number"
      } else throw TypeError("Matrix contains unsupported types only.")
    }
  }),
  Rc = "expm",
  I3 = ["typed", "abs", "add", "identity", "inv", "multiply"],
  q3 = z(Rc, I3, e => {
    var {
      typed: r,
      abs: i,
      add: n,
      identity: t,
      inv: a,
      multiply: o
    } = e;
    return r(Rc, {
      Matrix: function(l) {
        var m = l.size();
        if (m.length !== 2 || m[0] !== m[1]) throw new RangeError("Matrix must be square (size: " + ze(m) + ")");
        for (var v = m[0], d = 1e-15, p = f(l), b = c(p, d), g = b.q, N = b.j, h = o(l, Math.pow(2, -N)), x = t(v), w = t(v), y = 1, A = h, E = -1, D = 1; D <= g; D++) D > 1 && (A = o(A, h), E = -E), y = y * (g - D + 1) / ((2 * g - D + 1) * D), x = n(x, o(y, A)), w = n(w, o(y * E, A));
        for (var S = o(a(w), x), C = 0; C < N; C++) S = o(S, S);
        return Zt(l) ? l.createSparseMatrix(S) : S
      }
    });

    function f(s) {
      for (var l = s.size()[0], m = 0, v = 0; v < l; v++) {
        for (var d = 0, p = 0; p < l; p++) d += i(s.get([v, p]));
        m = Math.max(d, m)
      }
      return m
    }

    function c(s, l) {
      for (var m = 30, v = 0; v < m; v++)
        for (var d = 0; d <= v; d++) {
          var p = v - d;
          if (u(s, d, p) < l) return {
            q: d,
            j: p
          }
        }
      throw new Error("Could not find acceptable parameters to compute the matrix exponential (try increasing maxSearchSize in expm.js)")
    }

    function u(s, l, m) {
      for (var v = 1, d = 2; d <= l; d++) v *= d;
      for (var p = v, b = l + 1; b <= 2 * l; b++) p *= b;
      var g = p * (2 * l + 1);
      return 8 * Math.pow(s / Math.pow(2, m), 2 * l) * v * v / (p * g)
    }
  }),
  zc = "sqrtm",
  R3 = ["typed", "abs", "add", "multiply", "map", "sqrt", "subtract", "inv", "size", "max", "identity"],
  z3 = z(zc, R3, e => {
    var {
      typed: r,
      abs: i,
      add: n,
      multiply: t,
      map: a,
      sqrt: o,
      subtract: f,
      inv: c,
      size: u,
      max: s,
      identity: l
    } = e, m = 1e3, v = 1e-6;

    function d(p) {
      var b, g = 0,
        N = p,
        h = l(u(p));
      do {
        var x = N;
        if (N = t(.5, n(x, c(h))), h = t(.5, n(h, c(x))), b = s(i(f(N, x))), b > v && ++g > m) throw new Error("computing square root of matrix: iterative method could not converge")
      } while (b > v);
      return N
    }
    return r(zc, {
      "Array | Matrix": function(b) {
        var g = Fe(b) ? b.size() : qe(b);
        switch (g.length) {
          case 1:
            if (g[0] === 1) return a(b, o);
            throw new RangeError("Matrix must be square (size: " + ze(g) + ")");
          case 2: {
            var N = g[0],
              h = g[1];
            if (N === h) return d(b);
            throw new RangeError("Matrix must be square (size: " + ze(g) + ")")
          }
          default:
            throw new RangeError("Matrix must be at most two dimensional (size: " + ze(g) + ")")
        }
      }
    })
  }),
  Pc = "sylvester",
  P3 = ["typed", "schur", "matrixFromColumns", "matrix", "multiply", "range", "concat", "transpose", "index", "subset", "add", "subtract", "identity", "lusolve", "abs"],
  U3 = z(Pc, P3, e => {
    var {
      typed: r,
      schur: i,
      matrixFromColumns: n,
      matrix: t,
      multiply: a,
      range: o,
      concat: f,
      transpose: c,
      index: u,
      subset: s,
      add: l,
      subtract: m,
      identity: v,
      lusolve: d,
      abs: p
    } = e;
    return r(Pc, {
      "Matrix, Matrix, Matrix": b,
      "Array, Matrix, Matrix": function(N, h, x) {
        return b(t(N), h, x)
      },
      "Array, Array, Matrix": function(N, h, x) {
        return b(t(N), t(h), x)
      },
      "Array, Matrix, Array": function(N, h, x) {
        return b(t(N), h, t(x))
      },
      "Matrix, Array, Matrix": function(N, h, x) {
        return b(N, t(h), x)
      },
      "Matrix, Array, Array": function(N, h, x) {
        return b(N, t(h), t(x))
      },
      "Matrix, Matrix, Array": function(N, h, x) {
        return b(N, h, t(x))
      },
      "Array, Array, Array": function(N, h, x) {
        return b(t(N), t(h), t(x)).toArray()
      }
    });

    function b(g, N, h) {
      for (var x = N.size()[0], w = g.size()[0], y = i(g), A = y.T, E = y.U, D = i(a(-1, N)), S = D.T, C = D.U, M = a(a(c(E), h), C), $ = o(0, w), I = [], _ = (se, ge) => f(se, ge, 1), T = (se, ge) => f(se, ge, 0), B = 0; B < x; B++)
        if (B < x - 1 && p(s(S, u(B + 1, B))) > 1e-5) {
          for (var U = T(s(M, u($, B)), s(M, u($, B + 1))), O = 0; O < B; O++) U = l(U, T(a(I[O], s(S, u(O, B))), a(I[O], s(S, u(O, B + 1)))));
          var V = a(v(w), a(-1, s(S, u(B, B)))),
            J = a(v(w), a(-1, s(S, u(B + 1, B)))),
            Z = a(v(w), a(-1, s(S, u(B, B + 1)))),
            q = a(v(w), a(-1, s(S, u(B + 1, B + 1)))),
            X = T(_(l(A, V), J), _(Z, l(A, q))),
            ie = d(X, U);
          I[B] = ie.subset(u(o(0, w), 0)), I[B + 1] = ie.subset(u(o(w, 2 * w), 0)), B++
        } else {
          for (var Q = s(M, u($, B)), ee = 0; ee < B; ee++) Q = l(Q, a(I[ee], s(S, u(ee, B))));
          var ue = s(S, u(B, B)),
            re = m(A, a(ue, v(w)));
          I[B] = d(re, Q)
        } var ne = t(n(...I)),
        le = a(E, a(ne, c(C)));
      return le
    }
  }),
  Uc = "schur",
  L3 = ["typed", "matrix", "identity", "multiply", "qr", "norm", "subtract"],
  k3 = z(Uc, L3, e => {
    var {
      typed: r,
      matrix: i,
      identity: n,
      multiply: t,
      qr: a,
      norm: o,
      subtract: f
    } = e;
    return r(Uc, {
      Array: function(s) {
        var l = c(i(s));
        return {
          U: l.U.valueOf(),
          T: l.T.valueOf()
        }
      },
      Matrix: function(s) {
        return c(s)
      }
    });

    function c(u) {
      var s = u.size()[0],
        l = u,
        m = n(s),
        v = 0,
        d;
      do {
        d = l;
        var p = a(l),
          b = p.Q,
          g = p.R;
        if (l = t(g, b), m = t(m, b), v++ > 100) break
      } while (o(f(l, d)) > 1e-4);
      return {
        U: m,
        T: l
      }
    }
  }),
  Lc = "lyap",
  H3 = ["typed", "matrix", "sylvester", "multiply", "transpose"],
  G3 = z(Lc, H3, e => {
    var {
      typed: r,
      matrix: i,
      sylvester: n,
      multiply: t,
      transpose: a
    } = e;
    return r(Lc, {
      "Matrix, Matrix": function(f, c) {
        return n(f, a(f), t(-1, c))
      },
      "Array, Matrix": function(f, c) {
        return n(i(f), a(i(f)), t(-1, c))
      },
      "Matrix, Array": function(f, c) {
        return n(f, a(i(f)), i(t(-1, c)))
      },
      "Array, Array": function(f, c) {
        return n(i(f), a(i(f)), i(t(-1, c))).toArray()
      }
    })
  }),
  V3 = "divide",
  Z3 = ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"],
  Y3 = z(V3, Z3, e => {
    var {
      typed: r,
      matrix: i,
      multiply: n,
      equalScalar: t,
      divideScalar: a,
      inv: o
    } = e, f = Nr({
      typed: r,
      equalScalar: t
    }), c = st({
      typed: r
    });
    return r("divide", Gf({
      "Array | Matrix, Array | Matrix": function(s, l) {
        return n(s, o(l))
      },
      "DenseMatrix, any": function(s, l) {
        return c(s, l, a, !1)
      },
      "SparseMatrix, any": function(s, l) {
        return f(s, l, a, !1)
      },
      "Array, any": function(s, l) {
        return c(i(s), l, a, !1).valueOf()
      },
      "any, Array | Matrix": function(s, l) {
        return n(s, o(l))
      }
    }, a.signatures))
  }),
  kc = "distance",
  W3 = ["typed", "addScalar", "subtractScalar", "divideScalar", "multiplyScalar", "deepEqual", "sqrt", "abs"],
  Q3 = z(kc, W3, e => {
    var {
      typed: r,
      addScalar: i,
      subtractScalar: n,
      multiplyScalar: t,
      divideScalar: a,
      deepEqual: o,
      sqrt: f,
      abs: c
    } = e;
    return r(kc, {
      "Array, Array, Array": function(w, y, A) {
        if (w.length === 2 && y.length === 2 && A.length === 2) {
          if (!s(w)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
          if (!s(y)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
          if (!s(A)) throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
          if (o(y, A)) throw new TypeError("LinePoint1 should not be same with LinePoint2");
          var E = n(A[1], y[1]),
            D = n(y[0], A[0]),
            S = n(t(A[0], y[1]), t(y[0], A[1]));
          return b(w[0], w[1], E, D, S)
        } else throw new TypeError("Invalid Arguments: Try again")
      },
      "Object, Object, Object": function(w, y, A) {
        if (Object.keys(w).length === 2 && Object.keys(y).length === 2 && Object.keys(A).length === 2) {
          if (!s(w)) throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
          if (!s(y)) throw new TypeError("Values of lineOnePtX and lineOnePtY should be numbers or BigNumbers");
          if (!s(A)) throw new TypeError("Values of lineTwoPtX and lineTwoPtY should be numbers or BigNumbers");
          if (o(d(y), d(A))) throw new TypeError("LinePoint1 should not be same with LinePoint2");
          if ("pointX" in w && "pointY" in w && "lineOnePtX" in y && "lineOnePtY" in y && "lineTwoPtX" in A && "lineTwoPtY" in A) {
            var E = n(A.lineTwoPtY, y.lineOnePtY),
              D = n(y.lineOnePtX, A.lineTwoPtX),
              S = n(t(A.lineTwoPtX, y.lineOnePtY), t(y.lineOnePtX, A.lineTwoPtY));
            return b(w.pointX, w.pointY, E, D, S)
          } else throw new TypeError("Key names do not match")
        } else throw new TypeError("Invalid Arguments: Try again")
      },
      "Array, Array": function(w, y) {
        if (w.length === 2 && y.length === 3) {
          if (!s(w)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
          if (!l(y)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
          return b(w[0], w[1], y[0], y[1], y[2])
        } else if (w.length === 3 && y.length === 6) {
          if (!l(w)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
          if (!v(y)) throw new TypeError("Array with 6 numbers or BigNumbers expected for second argument");
          return g(w[0], w[1], w[2], y[0], y[1], y[2], y[3], y[4], y[5])
        } else if (w.length === y.length && w.length > 0) {
          if (!m(w)) throw new TypeError("All values of an array should be numbers or BigNumbers");
          if (!m(y)) throw new TypeError("All values of an array should be numbers or BigNumbers");
          return N(w, y)
        } else throw new TypeError("Invalid Arguments: Try again")
      },
      "Object, Object": function(w, y) {
        if (Object.keys(w).length === 2 && Object.keys(y).length === 3) {
          if (!s(w)) throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
          if (!l(y)) throw new TypeError("Values of xCoeffLine, yCoeffLine and constant should be numbers or BigNumbers");
          if ("pointX" in w && "pointY" in w && "xCoeffLine" in y && "yCoeffLine" in y && "constant" in y) return b(w.pointX, w.pointY, y.xCoeffLine, y.yCoeffLine, y.constant);
          throw new TypeError("Key names do not match")
        } else if (Object.keys(w).length === 3 && Object.keys(y).length === 6) {
          if (!l(w)) throw new TypeError("Values of pointX, pointY and pointZ should be numbers or BigNumbers");
          if (!v(y)) throw new TypeError("Values of x0, y0, z0, a, b and c should be numbers or BigNumbers");
          if ("pointX" in w && "pointY" in w && "x0" in y && "y0" in y && "z0" in y && "a" in y && "b" in y && "c" in y) return g(w.pointX, w.pointY, w.pointZ, y.x0, y.y0, y.z0, y.a, y.b, y.c);
          throw new TypeError("Key names do not match")
        } else if (Object.keys(w).length === 2 && Object.keys(y).length === 2) {
          if (!s(w)) throw new TypeError("Values of pointOneX and pointOneY should be numbers or BigNumbers");
          if (!s(y)) throw new TypeError("Values of pointTwoX and pointTwoY should be numbers or BigNumbers");
          if ("pointOneX" in w && "pointOneY" in w && "pointTwoX" in y && "pointTwoY" in y) return N([w.pointOneX, w.pointOneY], [y.pointTwoX, y.pointTwoY]);
          throw new TypeError("Key names do not match")
        } else if (Object.keys(w).length === 3 && Object.keys(y).length === 3) {
          if (!l(w)) throw new TypeError("Values of pointOneX, pointOneY and pointOneZ should be numbers or BigNumbers");
          if (!l(y)) throw new TypeError("Values of pointTwoX, pointTwoY and pointTwoZ should be numbers or BigNumbers");
          if ("pointOneX" in w && "pointOneY" in w && "pointOneZ" in w && "pointTwoX" in y && "pointTwoY" in y && "pointTwoZ" in y) return N([w.pointOneX, w.pointOneY, w.pointOneZ], [y.pointTwoX, y.pointTwoY, y.pointTwoZ]);
          throw new TypeError("Key names do not match")
        } else throw new TypeError("Invalid Arguments: Try again")
      },
      Array: function(w) {
        if (!p(w)) throw new TypeError("Incorrect array format entered for pairwise distance calculation");
        return h(w)
      }
    });

    function u(x) {
      return typeof x == "number" || He(x)
    }

    function s(x) {
      return x.constructor !== Array && (x = d(x)), u(x[0]) && u(x[1])
    }

    function l(x) {
      return x.constructor !== Array && (x = d(x)), u(x[0]) && u(x[1]) && u(x[2])
    }

    function m(x) {
      return Array.isArray(x) || (x = d(x)), x.every(u)
    }

    function v(x) {
      return x.constructor !== Array && (x = d(x)), u(x[0]) && u(x[1]) && u(x[2]) && u(x[3]) && u(x[4]) && u(x[5])
    }

    function d(x) {
      for (var w = Object.keys(x), y = [], A = 0; A < w.length; A++) y.push(x[w[A]]);
      return y
    }

    function p(x) {
      if (x[0].length === 2 && u(x[0][0]) && u(x[0][1])) {
        if (x.some(w => w.length !== 2 || !u(w[0]) || !u(w[1]))) return !1
      } else if (x[0].length === 3 && u(x[0][0]) && u(x[0][1]) && u(x[0][2])) {
        if (x.some(w => w.length !== 3 || !u(w[0]) || !u(w[1]) || !u(w[2]))) return !1
      } else return !1;
      return !0
    }

    function b(x, w, y, A, E) {
      var D = c(i(i(t(y, x), t(A, w)), E)),
        S = f(i(t(y, y), t(A, A)));
      return a(D, S)
    }

    function g(x, w, y, A, E, D, S, C, M) {
      var $ = [n(t(n(E, w), M), t(n(D, y), C)), n(t(n(D, y), S), t(n(A, x), M)), n(t(n(A, x), C), t(n(E, w), S))];
      $ = f(i(i(t($[0], $[0]), t($[1], $[1])), t($[2], $[2])));
      var I = f(i(i(t(S, S), t(C, C)), t(M, M)));
      return a($, I)
    }

    function N(x, w) {
      for (var y = x.length, A = 0, E = 0, D = 0; D < y; D++) E = n(x[D], w[D]), A = i(t(E, E), A);
      return f(A)
    }

    function h(x) {
      for (var w = [], y = [], A = [], E = 0; E < x.length - 1; E++)
        for (var D = E + 1; D < x.length; D++) x[0].length === 2 ? (y = [x[E][0], x[E][1]], A = [x[D][0], x[D][1]]) : x[0].length === 3 && (y = [x[E][0], x[E][1], x[E][2]], A = [x[D][0], x[D][1], x[D][2]]), w.push(N(y, A));
      return w
    }
  }),
  X3 = "intersect",
  J3 = ["typed", "config", "abs", "add", "addScalar", "matrix", "multiply", "multiplyScalar", "divideScalar", "subtract", "smaller", "equalScalar", "flatten", "isZero", "isNumeric"],
  K3 = z(X3, J3, e => {
    var {
      typed: r,
      config: i,
      abs: n,
      add: t,
      addScalar: a,
      matrix: o,
      multiply: f,
      multiplyScalar: c,
      divideScalar: u,
      subtract: s,
      smaller: l,
      equalScalar: m,
      flatten: v,
      isZero: d,
      isNumeric: p
    } = e;
    return r("intersect", {
      "Array, Array, Array": b,
      "Array, Array, Array, Array": g,
      "Matrix, Matrix, Matrix": function(C, M, $) {
        var I = b(C.valueOf(), M.valueOf(), $.valueOf());
        return I === null ? null : o(I)
      },
      "Matrix, Matrix, Matrix, Matrix": function(C, M, $, I) {
        var _ = g(C.valueOf(), M.valueOf(), $.valueOf(), I.valueOf());
        return _ === null ? null : o(_)
      }
    });

    function b(S, C, M) {
      if (S = N(S), C = N(C), M = N(M), !x(S)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
      if (!x(C)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
      if (!w(M)) throw new TypeError("Array with 4 numbers expected as third argument");
      return D(S[0], S[1], S[2], C[0], C[1], C[2], M[0], M[1], M[2], M[3])
    }

    function g(S, C, M, $) {
      if (S = N(S), C = N(C), M = N(M), $ = N($), S.length === 2) {
        if (!h(S)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
        if (!h(C)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
        if (!h(M)) throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
        if (!h($)) throw new TypeError("Array with 2 numbers or BigNumbers expected for fourth argument");
        return y(S, C, M, $)
      } else if (S.length === 3) {
        if (!x(S)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
        if (!x(C)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
        if (!x(M)) throw new TypeError("Array with 3 numbers or BigNumbers expected for third argument");
        if (!x($)) throw new TypeError("Array with 3 numbers or BigNumbers expected for fourth argument");
        return E(S[0], S[1], S[2], C[0], C[1], C[2], M[0], M[1], M[2], $[0], $[1], $[2])
      } else throw new TypeError("Arrays with two or thee dimensional points expected")
    }

    function N(S) {
      return S.length === 1 ? S[0] : S.length > 1 && Array.isArray(S[0]) && S.every(C => Array.isArray(C) && C.length === 1) ? v(S) : S
    }

    function h(S) {
      return S.length === 2 && p(S[0]) && p(S[1])
    }

    function x(S) {
      return S.length === 3 && p(S[0]) && p(S[1]) && p(S[2])
    }

    function w(S) {
      return S.length === 4 && p(S[0]) && p(S[1]) && p(S[2]) && p(S[3])
    }

    function y(S, C, M, $) {
      var I = S,
        _ = M,
        T = s(I, C),
        B = s(_, $),
        U = s(c(T[0], B[1]), c(B[0], T[1]));
      if (d(U) || l(n(U), i.epsilon)) return null;
      var O = c(B[0], I[1]),
        V = c(B[1], I[0]),
        J = c(B[0], _[1]),
        Z = c(B[1], _[0]),
        q = u(a(s(s(O, V), J), Z), U);
      return t(f(T, q), I)
    }

    function A(S, C, M, $, I, _, T, B, U, O, V, J) {
      var Z = c(s(S, C), s(M, $)),
        q = c(s(I, _), s(T, B)),
        X = c(s(U, O), s(V, J));
      return a(a(Z, q), X)
    }

    function E(S, C, M, $, I, _, T, B, U, O, V, J) {
      var Z = A(S, T, O, T, C, B, V, B, M, U, J, U),
        q = A(O, T, $, S, V, B, I, C, J, U, _, M),
        X = A(S, T, $, S, C, B, I, C, M, U, _, M),
        ie = A(O, T, O, T, V, B, V, B, J, U, J, U),
        Q = A($, S, $, S, I, C, I, C, _, M, _, M),
        ee = s(c(Z, q), c(X, ie)),
        ue = s(c(Q, ie), c(q, q));
      if (d(ue)) return null;
      var re = u(ee, ue),
        ne = u(a(Z, c(re, q)), ie),
        le = a(S, c(re, s($, S))),
        se = a(C, c(re, s(I, C))),
        ge = a(M, c(re, s(_, M))),
        Ae = a(T, c(ne, s(O, T))),
        P = a(B, c(ne, s(V, B))),
        H = a(U, c(ne, s(J, U)));
      return m(le, Ae) && m(se, P) && m(ge, H) ? [le, se, ge] : null
    }

    function D(S, C, M, $, I, _, T, B, U, O) {
      var V = c(S, T),
        J = c($, T),
        Z = c(C, B),
        q = c(I, B),
        X = c(M, U),
        ie = c(_, U),
        Q = s(s(s(O, V), Z), X),
        ee = s(s(s(a(a(J, q), ie), V), Z), X),
        ue = u(Q, ee),
        re = a(S, c(ue, s($, S))),
        ne = a(C, c(ue, s(I, C))),
        le = a(M, c(ue, s(_, M)));
      return [re, ne, le]
    }
  }),
  Hc = "sum",
  j3 = ["typed", "config", "add", "numeric"],
  qv = z(Hc, j3, e => {
    var {
      typed: r,
      config: i,
      add: n,
      numeric: t
    } = e;
    return r(Hc, {
      "Array | Matrix": a,
      "Array | Matrix, number | BigNumber": o,
      "...": function(c) {
        if ($n(c)) throw new TypeError("Scalar values expected in function sum");
        return a(c)
      }
    });

    function a(f) {
      var c;
      return Ct(f, function(u) {
        try {
          c = c === void 0 ? u : n(c, u)
        } catch (s) {
          throw Or(s, "sum", u)
        }
      }), c === void 0 && (c = t(0, i.number)), typeof c == "string" && (c = t(c, i.number)), c
    }

    function o(f, c) {
      try {
        var u = bi(f, c, n);
        return u
      } catch (s) {
        throw Or(s, "sum")
      }
    }
  }),
  za = "cumsum",
  eF = ["typed", "add", "unaryPlus"],
  Rv = z(za, eF, e => {
    var {
      typed: r,
      add: i,
      unaryPlus: n
    } = e;
    return r(za, {
      Array: t,
      Matrix: function(u) {
        return u.create(t(u.valueOf()))
      },
      "Array, number | BigNumber": o,
      "Matrix, number | BigNumber": function(u, s) {
        return u.create(o(u.valueOf(), s))
      },
      "...": function(u) {
        if ($n(u)) throw new TypeError("All values expected to be scalar in function cumsum");
        return t(u)
      }
    });

    function t(c) {
      try {
        return a(c)
      } catch (u) {
        throw Or(u, za)
      }
    }

    function a(c) {
      if (c.length === 0) return [];
      for (var u = [n(c[0])], s = 1; s < c.length; ++s) u.push(i(u[s - 1], c[s]));
      return u
    }

    function o(c, u) {
      var s = qe(c);
      if (u < 0 || u >= s.length) throw new it(u, s.length);
      try {
        return f(c, u)
      } catch (l) {
        throw Or(l, za)
      }
    }

    function f(c, u) {
      var s, l, m;
      if (u <= 0) {
        var v = c[0][0];
        if (Array.isArray(v)) {
          for (m = xm(c), l = [], s = 0; s < m.length; s++) l[s] = f(m[s], u - 1);
          return l
        } else return a(c)
      } else {
        for (l = [], s = 0; s < c.length; s++) l[s] = f(c[s], u - 1);
        return l
      }
    }
  }),
  Gc = "mean",
  rF = ["typed", "add", "divide"],
  zv = z(Gc, rF, e => {
    var {
      typed: r,
      add: i,
      divide: n
    } = e;
    return r(Gc, {
      "Array | Matrix": a,
      "Array | Matrix, number | BigNumber": t,
      "...": function(f) {
        if ($n(f)) throw new TypeError("Scalar values expected in function mean");
        return a(f)
      }
    });

    function t(o, f) {
      try {
        var c = bi(o, f, i),
          u = Array.isArray(o) ? qe(o) : o.size();
        return n(c, u[f])
      } catch (s) {
        throw Or(s, "mean")
      }
    }

    function a(o) {
      var f, c = 0;
      if (Ct(o, function(u) {
          try {
            f = f === void 0 ? u : i(f, u), c++
          } catch (s) {
            throw Or(s, "mean", u)
          }
        }), c === 0) throw new Error("Cannot calculate the mean of an empty array");
      return n(f, c)
    }
  }),
  Vc = "median",
  tF = ["typed", "add", "divide", "compare", "partitionSelect"],
  nF = z(Vc, tF, e => {
    var {
      typed: r,
      add: i,
      divide: n,
      compare: t,
      partitionSelect: a
    } = e;

    function o(u) {
      try {
        u = Xe(u.valueOf());
        var s = u.length;
        if (s === 0) throw new Error("Cannot calculate median of an empty array");
        if (s % 2 === 0) {
          for (var l = s / 2 - 1, m = a(u, l + 1), v = u[l], d = 0; d < l; ++d) t(u[d], v) > 0 && (v = u[d]);
          return c(v, m)
        } else {
          var p = a(u, (s - 1) / 2);
          return f(p)
        }
      } catch (b) {
        throw Or(b, "median")
      }
    }
    var f = r({
        "number | BigNumber | Complex | Unit": function(s) {
          return s
        }
      }),
      c = r({
        "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function(s, l) {
          return n(i(s, l), 2)
        }
      });
    return r(Vc, {
      "Array | Matrix": o,
      "Array | Matrix, number | BigNumber": function(s, l) {
        throw new Error("median(A, dim) is not yet supported")
      },
      "...": function(s) {
        if ($n(s)) throw new TypeError("Scalar values expected in function median");
        return o(s)
      }
    })
  }),
  Zc = "mad",
  aF = ["typed", "abs", "map", "median", "subtract"],
  iF = z(Zc, aF, e => {
    var {
      typed: r,
      abs: i,
      map: n,
      median: t,
      subtract: a
    } = e;
    return r(Zc, {
      "Array | Matrix": o,
      "...": function(c) {
        return o(c)
      }
    });

    function o(f) {
      if (f = Xe(f.valueOf()), f.length === 0) throw new Error("Cannot calculate median absolute deviation (mad) of an empty array");
      try {
        var c = t(f);
        return t(n(f, function(u) {
          return i(a(u, c))
        }))
      } catch (u) {
        throw u instanceof TypeError && u.message.indexOf("median") !== -1 ? new TypeError(u.message.replace("median", "mad")) : Or(u, "mad")
      }
    }
  }),
  Li = "unbiased",
  Yc = "variance",
  oF = ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"],
  Pv = z(Yc, oF, e => {
    var {
      typed: r,
      add: i,
      subtract: n,
      multiply: t,
      divide: a,
      apply: o,
      isNaN: f
    } = e;
    return r(Yc, {
      "Array | Matrix": function(l) {
        return c(l, Li)
      },
      "Array | Matrix, string": c,
      "Array | Matrix, number | BigNumber": function(l, m) {
        return u(l, m, Li)
      },
      "Array | Matrix, number | BigNumber, string": u,
      "...": function(l) {
        return c(l, Li)
      }
    });

    function c(s, l) {
      var m, v = 0;
      if (s.length === 0) throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
      if (Ct(s, function(b) {
          try {
            m = m === void 0 ? b : i(m, b), v++
          } catch (g) {
            throw Or(g, "variance", b)
          }
        }), v === 0) throw new Error("Cannot calculate variance of an empty array");
      var d = a(m, v);
      if (m = void 0, Ct(s, function(b) {
          var g = n(b, d);
          m = m === void 0 ? t(g, g) : i(m, t(g, g))
        }), f(m)) return m;
      switch (l) {
        case "uncorrected":
          return a(m, v);
        case "biased":
          return a(m, v + 1);
        case "unbiased": {
          var p = He(m) ? m.mul(0) : 0;
          return v === 1 ? p : a(m, v - 1)
        }
        default:
          throw new Error('Unknown normalization "' + l + '". Choose "unbiased" (default), "uncorrected", or "biased".')
      }
    }

    function u(s, l, m) {
      try {
        if (s.length === 0) throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
        return o(s, l, v => c(v, m))
      } catch (v) {
        throw Or(v, "variance")
      }
    }
  }),
  Wc = "quantileSeq",
  sF = ["typed", "?bignumber", "add", "subtract", "divide", "multiply", "partitionSelect", "compare", "isInteger", "smaller", "smallerEq", "larger"],
  Uv = z(Wc, sF, e => {
    var {
      typed: r,
      bignumber: i,
      add: n,
      subtract: t,
      divide: a,
      multiply: o,
      partitionSelect: f,
      compare: c,
      isInteger: u,
      smaller: s,
      smallerEq: l,
      larger: m
    } = e, v = No({
      typed: r,
      isInteger: u
    });
    return r(Wc, {
      "Array | Matrix, number | BigNumber": (N, h) => p(N, h, !1),
      "Array | Matrix, number | BigNumber, number": (N, h, x) => d(N, h, !1, x, p),
      "Array | Matrix, number | BigNumber, boolean": p,
      "Array | Matrix, number | BigNumber, boolean, number": (N, h, x, w) => d(N, h, x, w, p),
      "Array | Matrix, Array | Matrix": (N, h) => b(N, h, !1),
      "Array | Matrix, Array | Matrix, number": (N, h, x) => d(N, h, !1, x, b),
      "Array | Matrix, Array | Matrix, boolean": b,
      "Array | Matrix, Array | Matrix, boolean, number": (N, h, x, w) => d(N, h, x, w, b)
    });

    function d(N, h, x, w, y) {
      return v(N, w, A => y(A, h, x))
    }

    function p(N, h, x) {
      var w, y = N.valueOf();
      if (s(h, 0)) throw new Error("N/prob must be non-negative");
      if (l(h, 1)) return Pe(h) ? g(y, h, x) : i(g(y, h, x));
      if (m(h, 1)) {
        if (!u(h)) throw new Error("N must be a positive integer");
        if (m(h, 4294967295)) throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array");
        var A = n(h, 1);
        w = [];
        for (var E = 0; s(E, h); E++) {
          var D = a(E + 1, A);
          w.push(g(y, D, x))
        }
        return Pe(h) ? w : i(w)
      }
    }

    function b(N, h, x) {
      for (var w = N.valueOf(), y = h.valueOf(), A = [], E = 0; E < y.length; ++E) A.push(g(w, y[E], x));
      return A
    }

    function g(N, h, x) {
      var w = Xe(N),
        y = w.length;
      if (y === 0) throw new Error("Cannot calculate quantile of an empty sequence");
      var A = Pe(h) ? h * (y - 1) : h.times(y - 1),
        E = Pe(h) ? Math.floor(A) : A.floor().toNumber(),
        D = Pe(h) ? A % 1 : A.minus(E);
      if (u(A)) return x ? w[A] : f(w, Pe(h) ? A : A.valueOf());
      var S, C;
      if (x) S = w[E], C = w[E + 1];
      else {
        C = f(w, E + 1), S = w[E];
        for (var M = 0; M < E; ++M) c(w[M], S) > 0 && (S = w[M])
      }
      return n(o(S, t(1, D)), o(C, D))
    }
  }),
  Qc = "std",
  uF = ["typed", "map", "sqrt", "variance"],
  Lv = z(Qc, uF, e => {
    var {
      typed: r,
      map: i,
      sqrt: n,
      variance: t
    } = e;
    return r(Qc, {
      "Array | Matrix": a,
      "Array | Matrix, string": a,
      "Array | Matrix, number | BigNumber": a,
      "Array | Matrix, number | BigNumber, string": a,
      "...": function(f) {
        return a(f)
      }
    });

    function a(o, f) {
      if (o.length === 0) throw new SyntaxError("Function std requires one or more parameters (0 provided)");
      try {
        var c = t.apply(null, arguments);
        return qt(c) ? i(c, n) : n(c)
      } catch (u) {
        throw u instanceof TypeError && u.message.indexOf(" variance") !== -1 ? new TypeError(u.message.replace(" variance", " std")) : u
      }
    }
  }),
  Xc = "corr",
  lF = ["typed", "matrix", "mean", "sqrt", "sum", "add", "subtract", "multiply", "pow", "divide"],
  cF = z(Xc, lF, e => {
    var {
      typed: r,
      matrix: i,
      sqrt: n,
      sum: t,
      add: a,
      subtract: o,
      multiply: f,
      pow: c,
      divide: u
    } = e;
    return r(Xc, {
      "Array, Array": function(v, d) {
        return s(v, d)
      },
      "Matrix, Matrix": function(v, d) {
        var p = s(v.toArray(), d.toArray());
        return Array.isArray(p) ? i(p) : p
      }
    });

    function s(m, v) {
      var d = [];
      if (Array.isArray(m[0]) && Array.isArray(v[0])) {
        if (m.length !== v.length) throw new SyntaxError("Dimension mismatch. Array A and B must have the same length.");
        for (var p = 0; p < m.length; p++) {
          if (m[p].length !== v[p].length) throw new SyntaxError("Dimension mismatch. Array A and B must have the same number of elements.");
          d.push(l(m[p], v[p]))
        }
        return d
      } else {
        if (m.length !== v.length) throw new SyntaxError("Dimension mismatch. Array A and B must have the same number of elements.");
        return l(m, v)
      }
    }

    function l(m, v) {
      var d = m.length,
        p = t(m),
        b = t(v),
        g = m.reduce((y, A, E) => a(y, f(A, v[E])), 0),
        N = t(m.map(y => c(y, 2))),
        h = t(v.map(y => c(y, 2))),
        x = o(f(d, g), f(p, b)),
        w = n(f(o(f(d, N), c(p, 2)), o(f(d, h), c(b, 2))));
      return u(x, w)
    }
  }),
  Jc = "combinations",
  fF = ["typed"],
  mF = z(Jc, fF, e => {
    var {
      typed: r
    } = e;
    return r(Jc, {
      "number, number": Hm,
      "BigNumber, BigNumber": function(n, t) {
        var a = n.constructor,
          o, f, c = n.minus(t),
          u = new a(1);
        if (!Kc(n) || !Kc(t)) throw new TypeError("Positive integer value expected in function combinations");
        if (t.gt(n)) throw new TypeError("k must be less than n in function combinations");
        if (o = u, t.lt(c))
          for (f = u; f.lte(c); f = f.plus(u)) o = o.times(t.plus(f)).dividedBy(f);
        else
          for (f = u; f.lte(t); f = f.plus(u)) o = o.times(c.plus(f)).dividedBy(f);
        return o
      }
    })
  });

function Kc(e) {
  return e.isInteger() && e.gte(0)
}
var jc = "combinationsWithRep",
  vF = ["typed"],
  pF = z(jc, vF, e => {
    var {
      typed: r
    } = e;
    return r(jc, {
      "number, number": function(n, t) {
        if (!Se(n) || n < 0) throw new TypeError("Positive integer value expected in function combinationsWithRep");
        if (!Se(t) || t < 0) throw new TypeError("Positive integer value expected in function combinationsWithRep");
        if (n < 1) throw new TypeError("k must be less than or equal to n + k - 1");
        if (t < n - 1) {
          var a = Nt(n, n + t - 1);
          return a / Nt(1, t)
        }
        var o = Nt(t + 1, n + t - 1);
        return o / Nt(1, n - 1)
      },
      "BigNumber, BigNumber": function(n, t) {
        var a = n.constructor,
          o, f, c = new a(1),
          u = n.minus(c);
        if (!ef(n) || !ef(t)) throw new TypeError("Positive integer value expected in function combinationsWithRep");
        if (n.lt(c)) throw new TypeError("k must be less than or equal to n + k - 1 in function combinationsWithRep");
        if (o = c, t.lt(u))
          for (f = c; f.lte(u); f = f.plus(c)) o = o.times(t.plus(f)).dividedBy(f);
        else
          for (f = c; f.lte(t); f = f.plus(c)) o = o.times(u.plus(f)).dividedBy(f);
        return o
      }
    })
  });

function ef(e) {
  return e.isInteger() && e.gte(0)
}
var rf = "gamma",
  dF = ["typed", "config", "multiplyScalar", "pow", "BigNumber", "Complex"],
  hF = z(rf, dF, e => {
    var {
      typed: r,
      config: i,
      multiplyScalar: n,
      pow: t,
      BigNumber: a,
      Complex: o
    } = e;

    function f(u) {
      if (u.im === 0) return Ja(u.re);
      if (u.re < .5) {
        var s = new o(1 - u.re, -u.im),
          l = new o(Math.PI * u.re, Math.PI * u.im);
        return new o(Math.PI).div(l.sin()).div(f(s))
      }
      u = new o(u.re - 1, u.im);
      for (var m = new o(Nn[0], 0), v = 1; v < Nn.length; ++v) {
        var d = new o(Nn[v], 0);
        m = m.add(d.div(u.add(v)))
      }
      var p = new o(u.re + Wm + .5, u.im),
        b = Math.sqrt(2 * Math.PI),
        g = p.pow(u.add(.5)),
        N = p.neg().exp();
      return m.mul(b).mul(g).mul(N)
    }
    return r(rf, {
      number: Ja,
      Complex: f,
      BigNumber: function(s) {
        if (s.isInteger()) return s.isNegative() || s.isZero() ? new a(1 / 0) : c(s.minus(1));
        if (!s.isFinite()) return new a(s.isNegative() ? NaN : 1 / 0);
        throw new Error("Integer BigNumber expected")
      }
    });

    function c(u) {
      if (u < 8) return new a([1, 1, 2, 6, 24, 120, 720, 5040][u]);
      var s = i.precision + (Math.log(u.toNumber()) | 0),
        l = a.clone({
          precision: s
        });
      if (u % 2 === 1) return u.times(c(new a(u - 1)));
      for (var m = u, v = new l(u), d = u.toNumber(); m > 2;) m -= 2, d += m, v = v.times(d);
      return new a(v.toPrecision(a.precision))
    }
  }),
  tf = "lgamma",
  gF = ["Complex", "typed"],
  yF = z(tf, gF, e => {
    var {
      Complex: r,
      typed: i
    } = e, n = 7, t = 7, a = [-.029550653594771242, .00641025641025641, -.0019175269175269176, .0008417508417508417, -.0005952380952380953, .0007936507936507937, -.002777777777777778, .08333333333333333];
    return i(tf, {
      number: Ka,
      Complex: o,
      BigNumber: function() {
        throw new Error("mathjs doesn't yet provide an implementation of the algorithm lgamma for BigNumber")
      }
    });

    function o(u) {
      var s = 6.283185307179586,
        l = 1.1447298858494002,
        m = .1;
      if (u.isNaN()) return new r(NaN, NaN);
      if (u.im === 0) return new r(Ka(u.re), 0);
      if (u.re >= n || Math.abs(u.im) >= t) return f(u);
      if (u.re <= m) {
        var v = ah(s, u.im) * Math.floor(.5 * u.re + .25),
          d = u.mul(Math.PI).sin().log(),
          p = o(new r(1 - u.re, -u.im));
        return new r(l, v).sub(d).sub(p)
      } else return u.im >= 0 ? c(u) : c(u.conjugate()).conjugate()
    }

    function f(u) {
      for (var s = u.sub(.5).mul(u.log()).sub(u).add(Qm), l = new r(1, 0).div(u), m = l.div(u), v = a[0], d = a[1], p = 2 * m.re, b = m.re * m.re + m.im * m.im, g = 2; g < 8; g++) {
        var N = d;
        d = -b * v + a[g], v = p * v + N
      }
      var h = l.mul(m.mul(v).add(d));
      return s.add(h)
    }

    function c(u) {
      var s = 0,
        l = 0,
        m = u;
      for (u = u.add(1); u.re <= n;) {
        m = m.mul(u);
        var v = m.im < 0 ? 1 : 0;
        v !== 0 && l === 0 && s++, l = v, u = u.add(1)
      }
      return f(u).sub(m.log()).sub(new r(0, s * 2 * Math.PI * 1))
    }
  }),
  nf = "factorial",
  bF = ["typed", "gamma"],
  xF = z(nf, bF, e => {
    var {
      typed: r,
      gamma: i
    } = e;
    return r(nf, {
      number: function(t) {
        if (t < 0) throw new Error("Value must be non-negative");
        return i(t + 1)
      },
      BigNumber: function(t) {
        if (t.isNegative()) throw new Error("Value must be non-negative");
        return i(t.plus(1))
      },
      "Array | Matrix": r.referToSelf(n => t => Le(t, n))
    })
  }),
  af = "kldivergence",
  wF = ["typed", "matrix", "divide", "sum", "multiply", "map", "dotDivide", "log", "isNumeric"],
  NF = z(af, wF, e => {
    var {
      typed: r,
      matrix: i,
      divide: n,
      sum: t,
      multiply: a,
      map: o,
      dotDivide: f,
      log: c,
      isNumeric: u
    } = e;
    return r(af, {
      "Array, Array": function(m, v) {
        return s(i(m), i(v))
      },
      "Matrix, Array": function(m, v) {
        return s(m, i(v))
      },
      "Array, Matrix": function(m, v) {
        return s(i(m), v)
      },
      "Matrix, Matrix": function(m, v) {
        return s(m, v)
      }
    });

    function s(l, m) {
      var v = m.size().length,
        d = l.size().length;
      if (v > 1) throw new Error("first object must be one dimensional");
      if (d > 1) throw new Error("second object must be one dimensional");
      if (v !== d) throw new Error("Length of two vectors must be equal");
      var p = t(l);
      if (p === 0) throw new Error("Sum of elements in first object must be non zero");
      var b = t(m);
      if (b === 0) throw new Error("Sum of elements in second object must be non zero");
      var g = n(l, t(l)),
        N = n(m, t(m)),
        h = t(a(g, o(f(g, N), x => c(x))));
      return u(h) ? h : Number.NaN
    }
  }),
  of = "multinomial",
  DF = ["typed", "add", "divide", "multiply", "factorial", "isInteger", "isPositive"],
  AF = z(of, DF, e => {
    var {
      typed: r,
      add: i,
      divide: n,
      multiply: t,
      factorial: a,
      isInteger: o,
      isPositive: f
    } = e;
    return r(of, {
      "Array | Matrix": function(u) {
        var s = 0,
          l = 1;
        return Ct(u, function(m) {
          if (!o(m) || !f(m)) throw new TypeError("Positive integer value expected in function multinomial");
          s = i(s, m), l = t(l, a(m))
        }), n(a(s), l)
      }
    })
  }),
  sf = "permutations",
  EF = ["typed", "factorial"],
  SF = z(sf, EF, e => {
    var {
      typed: r,
      factorial: i
    } = e;
    return r(sf, {
      "number | BigNumber": i,
      "number, number": function(t, a) {
        if (!Se(t) || t < 0) throw new TypeError("Positive integer value expected in function permutations");
        if (!Se(a) || a < 0) throw new TypeError("Positive integer value expected in function permutations");
        if (a > t) throw new TypeError("second argument k must be less than or equal to first argument n");
        return Nt(t - a + 1, t)
      },
      "BigNumber, BigNumber": function(t, a) {
        var o, f;
        if (!uf(t) || !uf(a)) throw new TypeError("Positive integer value expected in function permutations");
        if (a.gt(t)) throw new TypeError("second argument k must be less than or equal to first argument n");
        var c = t.mul(0).add(1);
        for (o = c, f = t.minus(a).plus(1); f.lte(t); f = f.plus(1)) o = o.times(f);
        return o
      }
    })
  });

function uf(e) {
  return e.isInteger() && e.gte(0)
}
var Fo = {
  exports: {}
};
Fo.exports;
(function(e) {
  (function(r, i, n) {
    function t(c) {
      var u = this,
        s = f();
      u.next = function() {
        var l = 2091639 * u.s0 + u.c * 23283064365386963e-26;
        return u.s0 = u.s1, u.s1 = u.s2, u.s2 = l - (u.c = l | 0)
      }, u.c = 1, u.s0 = s(" "), u.s1 = s(" "), u.s2 = s(" "), u.s0 -= s(c), u.s0 < 0 && (u.s0 += 1), u.s1 -= s(c), u.s1 < 0 && (u.s1 += 1), u.s2 -= s(c), u.s2 < 0 && (u.s2 += 1), s = null
    }

    function a(c, u) {
      return u.c = c.c, u.s0 = c.s0, u.s1 = c.s1, u.s2 = c.s2, u
    }

    function o(c, u) {
      var s = new t(c),
        l = u && u.state,
        m = s.next;
      return m.int32 = function() {
        return s.next() * 4294967296 | 0
      }, m.double = function() {
        return m() + (m() * 2097152 | 0) * 11102230246251565e-32
      }, m.quick = m, l && (typeof l == "object" && a(l, s), m.state = function() {
        return a(s, {})
      }), m
    }

    function f() {
      var c = 4022871197,
        u = function(s) {
          s = String(s);
          for (var l = 0; l < s.length; l++) {
            c += s.charCodeAt(l);
            var m = .02519603282416938 * c;
            c = m >>> 0, m -= c, m *= c, c = m >>> 0, m -= c, c += m * 4294967296
          }
          return (c >>> 0) * 23283064365386963e-26
        };
      return u
    }
    i && i.exports ? i.exports = o : n && n.amd ? n(function() {
      return o
    }) : this.alea = o
  })(Xt, e, !1)
})(Fo);
var CF = Fo.exports,
  Bo = {
    exports: {}
  };
Bo.exports;
(function(e) {
  (function(r, i, n) {
    function t(f) {
      var c = this,
        u = "";
      c.x = 0, c.y = 0, c.z = 0, c.w = 0, c.next = function() {
        var l = c.x ^ c.x << 11;
        return c.x = c.y, c.y = c.z, c.z = c.w, c.w ^= c.w >>> 19 ^ l ^ l >>> 8
      }, f === (f | 0) ? c.x = f : u += f;
      for (var s = 0; s < u.length + 64; s++) c.x ^= u.charCodeAt(s) | 0, c.next()
    }

    function a(f, c) {
      return c.x = f.x, c.y = f.y, c.z = f.z, c.w = f.w, c
    }

    function o(f, c) {
      var u = new t(f),
        s = c && c.state,
        l = function() {
          return (u.next() >>> 0) / 4294967296
        };
      return l.double = function() {
        do var m = u.next() >>> 11,
          v = (u.next() >>> 0) / 4294967296,
          d = (m + v) / (1 << 21); while (d === 0);
        return d
      }, l.int32 = u.next, l.quick = l, s && (typeof s == "object" && a(s, u), l.state = function() {
        return a(u, {})
      }), l
    }
    i && i.exports ? i.exports = o : n && n.amd ? n(function() {
      return o
    }) : this.xor128 = o
  })(Xt, e, !1)
})(Bo);
var MF = Bo.exports,
  To = {
    exports: {}
  };
To.exports;
(function(e) {
  (function(r, i, n) {
    function t(f) {
      var c = this,
        u = "";
      c.next = function() {
        var l = c.x ^ c.x >>> 2;
        return c.x = c.y, c.y = c.z, c.z = c.w, c.w = c.v, (c.d = c.d + 362437 | 0) + (c.v = c.v ^ c.v << 4 ^ (l ^ l << 1)) | 0
      }, c.x = 0, c.y = 0, c.z = 0, c.w = 0, c.v = 0, f === (f | 0) ? c.x = f : u += f;
      for (var s = 0; s < u.length + 64; s++) c.x ^= u.charCodeAt(s) | 0, s == u.length && (c.d = c.x << 10 ^ c.x >>> 4), c.next()
    }

    function a(f, c) {
      return c.x = f.x, c.y = f.y, c.z = f.z, c.w = f.w, c.v = f.v, c.d = f.d, c
    }

    function o(f, c) {
      var u = new t(f),
        s = c && c.state,
        l = function() {
          return (u.next() >>> 0) / 4294967296
        };
      return l.double = function() {
        do var m = u.next() >>> 11,
          v = (u.next() >>> 0) / 4294967296,
          d = (m + v) / (1 << 21); while (d === 0);
        return d
      }, l.int32 = u.next, l.quick = l, s && (typeof s == "object" && a(s, u), l.state = function() {
        return a(u, {})
      }), l
    }
    i && i.exports ? i.exports = o : n && n.amd ? n(function() {
      return o
    }) : this.xorwow = o
  })(Xt, e, !1)
})(To);
var FF = To.exports,
  Oo = {
    exports: {}
  };
Oo.exports;
(function(e) {
  (function(r, i, n) {
    function t(f) {
      var c = this;
      c.next = function() {
        var s = c.x,
          l = c.i,
          m, v;
        return m = s[l], m ^= m >>> 7, v = m ^ m << 24, m = s[l + 1 & 7], v ^= m ^ m >>> 10, m = s[l + 3 & 7], v ^= m ^ m >>> 3, m = s[l + 4 & 7], v ^= m ^ m << 7, m = s[l + 7 & 7], m = m ^ m << 13, v ^= m ^ m << 9, s[l] = v, c.i = l + 1 & 7, v
      };

      function u(s, l) {
        var m, v = [];
        if (l === (l | 0)) v[0] = l;
        else
          for (l = "" + l, m = 0; m < l.length; ++m) v[m & 7] = v[m & 7] << 15 ^ l.charCodeAt(m) + v[m + 1 & 7] << 13;
        for (; v.length < 8;) v.push(0);
        for (m = 0; m < 8 && v[m] === 0; ++m);
        for (m == 8 ? v[7] = -1 : v[m], s.x = v, s.i = 0, m = 256; m > 0; --m) s.next()
      }
      u(c, f)
    }

    function a(f, c) {
      return c.x = f.x.slice(), c.i = f.i, c
    }

    function o(f, c) {
      f == null && (f = +new Date);
      var u = new t(f),
        s = c && c.state,
        l = function() {
          return (u.next() >>> 0) / 4294967296
        };
      return l.double = function() {
        do var m = u.next() >>> 11,
          v = (u.next() >>> 0) / 4294967296,
          d = (m + v) / (1 << 21); while (d === 0);
        return d
      }, l.int32 = u.next, l.quick = l, s && (s.x && a(s, u), l.state = function() {
        return a(u, {})
      }), l
    }
    i && i.exports ? i.exports = o : n && n.amd ? n(function() {
      return o
    }) : this.xorshift7 = o
  })(Xt, e, !1)
})(Oo);
var BF = Oo.exports,
  $o = {
    exports: {}
  };
$o.exports;
(function(e) {
  (function(r, i, n) {
    function t(f) {
      var c = this;
      c.next = function() {
        var s = c.w,
          l = c.X,
          m = c.i,
          v, d;
        return c.w = s = s + 1640531527 | 0, d = l[m + 34 & 127], v = l[m = m + 1 & 127], d ^= d << 13, v ^= v << 17, d ^= d >>> 15, v ^= v >>> 12, d = l[m] = d ^ v, c.i = m, d + (s ^ s >>> 16) | 0
      };

      function u(s, l) {
        var m, v, d, p, b, g = [],
          N = 128;
        for (l === (l | 0) ? (v = l, l = null) : (l = l + "\0", v = 0, N = Math.max(N, l.length)), d = 0, p = -32; p < N; ++p) l && (v ^= l.charCodeAt((p + 32) % l.length)), p === 0 && (b = v), v ^= v << 10, v ^= v >>> 15, v ^= v << 4, v ^= v >>> 13, p >= 0 && (b = b + 1640531527 | 0, m = g[p & 127] ^= v + b, d = m == 0 ? d + 1 : 0);
        for (d >= 128 && (g[(l && l.length || 0) & 127] = -1), d = 127, p = 4 * 128; p > 0; --p) v = g[d + 34 & 127], m = g[d = d + 1 & 127], v ^= v << 13, m ^= m << 17, v ^= v >>> 15, m ^= m >>> 12, g[d] = v ^ m;
        s.w = b, s.X = g, s.i = d
      }
      u(c, f)
    }

    function a(f, c) {
      return c.i = f.i, c.w = f.w, c.X = f.X.slice(), c
    }

    function o(f, c) {
      f == null && (f = +new Date);
      var u = new t(f),
        s = c && c.state,
        l = function() {
          return (u.next() >>> 0) / 4294967296
        };
      return l.double = function() {
        do var m = u.next() >>> 11,
          v = (u.next() >>> 0) / 4294967296,
          d = (m + v) / (1 << 21); while (d === 0);
        return d
      }, l.int32 = u.next, l.quick = l, s && (s.X && a(s, u), l.state = function() {
        return a(u, {})
      }), l
    }
    i && i.exports ? i.exports = o : n && n.amd ? n(function() {
      return o
    }) : this.xor4096 = o
  })(Xt, e, !1)
})($o);
var TF = $o.exports,
  _o = {
    exports: {}
  };
_o.exports;
(function(e) {
  (function(r, i, n) {
    function t(f) {
      var c = this,
        u = "";
      c.next = function() {
        var l = c.b,
          m = c.c,
          v = c.d,
          d = c.a;
        return l = l << 25 ^ l >>> 7 ^ m, m = m - v | 0, v = v << 24 ^ v >>> 8 ^ d, d = d - l | 0, c.b = l = l << 20 ^ l >>> 12 ^ m, c.c = m = m - v | 0, c.d = v << 16 ^ m >>> 16 ^ d, c.a = d - l | 0
      }, c.a = 0, c.b = 0, c.c = -1640531527, c.d = 1367130551, f === Math.floor(f) ? (c.a = f / 4294967296 | 0, c.b = f | 0) : u += f;
      for (var s = 0; s < u.length + 20; s++) c.b ^= u.charCodeAt(s) | 0, c.next()
    }

    function a(f, c) {
      return c.a = f.a, c.b = f.b, c.c = f.c, c.d = f.d, c
    }

    function o(f, c) {
      var u = new t(f),
        s = c && c.state,
        l = function() {
          return (u.next() >>> 0) / 4294967296
        };
      return l.double = function() {
        do var m = u.next() >>> 11,
          v = (u.next() >>> 0) / 4294967296,
          d = (m + v) / (1 << 21); while (d === 0);
        return d
      }, l.int32 = u.next, l.quick = l, s && (typeof s == "object" && a(s, u), l.state = function() {
        return a(u, {})
      }), l
    }
    i && i.exports ? i.exports = o : n && n.amd ? n(function() {
      return o
    }) : this.tychei = o
  })(Xt, e, !1)
})(_o);
var OF = _o.exports,
  kv = {
    exports: {}
  };
const $F = {},
  _F = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: $F
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  IF = E0(_F);
(function(e) {
  (function(r, i, n) {
    var t = 256,
      a = 6,
      o = 52,
      f = "random",
      c = n.pow(t, a),
      u = n.pow(2, o),
      s = u * 2,
      l = t - 1,
      m;

    function v(x, w, y) {
      var A = [];
      w = w == !0 ? {
        entropy: !0
      } : w || {};
      var E = g(b(w.entropy ? [x, h(i)] : x ?? N(), 3), A),
        D = new d(A),
        S = function() {
          for (var C = D.g(a), M = c, $ = 0; C < u;) C = (C + $) * t, M *= t, $ = D.g(1);
          for (; C >= s;) C /= 2, M /= 2, $ >>>= 1;
          return (C + $) / M
        };
      return S.int32 = function() {
        return D.g(4) | 0
      }, S.quick = function() {
        return D.g(4) / 4294967296
      }, S.double = S, g(h(D.S), i), (w.pass || y || function(C, M, $, I) {
        return I && (I.S && p(I, D), C.state = function() {
          return p(D, {})
        }), $ ? (n[f] = C, M) : C
      })(S, E, "global" in w ? w.global : this == n, w.state)
    }

    function d(x) {
      var w, y = x.length,
        A = this,
        E = 0,
        D = A.i = A.j = 0,
        S = A.S = [];
      for (y || (x = [y++]); E < t;) S[E] = E++;
      for (E = 0; E < t; E++) S[E] = S[D = l & D + x[E % y] + (w = S[E])], S[D] = w;
      (A.g = function(C) {
        for (var M, $ = 0, I = A.i, _ = A.j, T = A.S; C--;) M = T[I = l & I + 1], $ = $ * t + T[l & (T[I] = T[_ = l & _ + M]) + (T[_] = M)];
        return A.i = I, A.j = _, $
      })(t)
    }

    function p(x, w) {
      return w.i = x.i, w.j = x.j, w.S = x.S.slice(), w
    }

    function b(x, w) {
      var y = [],
        A = typeof x,
        E;
      if (w && A == "object")
        for (E in x) try {
          y.push(b(x[E], w - 1))
        } catch {}
      return y.length ? y : A == "string" ? x : x + "\0"
    }

    function g(x, w) {
      for (var y = x + "", A, E = 0; E < y.length;) w[l & E] = l & (A ^= w[l & E] * 19) + y.charCodeAt(E++);
      return h(w)
    }

    function N() {
      try {
        var x;
        return m && (x = m.randomBytes) ? x = x(t) : (x = new Uint8Array(t), (r.crypto || r.msCrypto).getRandomValues(x)), h(x)
      } catch {
        var w = r.navigator,
          y = w && w.plugins;
        return [+new Date, r, y, r.screen, h(i)]
      }
    }

    function h(x) {
      return String.fromCharCode.apply(0, x)
    }
    if (g(n.random(), i), e.exports) {
      e.exports = v;
      try {
        m = IF
      } catch {}
    } else n["seed" + f] = v
  })(typeof self < "u" ? self : Xt, [], Math)
})(kv);
var qF = kv.exports,
  RF = CF,
  zF = MF,
  PF = FF,
  UF = BF,
  LF = TF,
  kF = OF,
  jt = qF;
jt.alea = RF;
jt.xor128 = zF;
jt.xorwow = PF;
jt.xorshift7 = UF;
jt.xor4096 = LF;
jt.tychei = kF;
var HF = jt;
const Hv = ua(HF);
var GF = Hv(Date.now());

function Fn(e) {
  var r;

  function i(t) {
    r = t === null ? GF : Hv(String(t))
  }
  i(e);

  function n() {
    return r()
  }
  return n
}
var lf = "pickRandom",
  VF = ["typed", "config", "?on"],
  ZF = z(lf, VF, e => {
    var {
      typed: r,
      config: i,
      on: n
    } = e, t = Fn(i.randomSeed);
    return n && n("config", function(o, f) {
      o.randomSeed !== f.randomSeed && (t = Fn(o.randomSeed))
    }), r(lf, {
      "Array | Matrix": function(f) {
        return a(f, {})
      },
      "Array | Matrix, Object": function(f, c) {
        return a(f, c)
      },
      "Array | Matrix, number": function(f, c) {
        return a(f, {
          number: c
        })
      },
      "Array | Matrix, Array | Matrix": function(f, c) {
        return a(f, {
          weights: c
        })
      },
      "Array | Matrix, Array | Matrix, number": function(f, c, u) {
        return a(f, {
          number: u,
          weights: c
        })
      },
      "Array | Matrix, number, Array | Matrix": function(f, c, u) {
        return a(f, {
          number: c,
          weights: u
        })
      }
    });

    function a(o, f) {
      var {
        number: c,
        weights: u,
        elementWise: s = !0
      } = f, l = typeof c > "u";
      l && (c = 1);
      var m = Fe(o) ? o.create : Fe(u) ? u.create : null;
      o = o.valueOf(), u && (u = u.valueOf()), s === !0 && (o = Xe(o), u = Xe(u));
      var v = 0;
      if (typeof u < "u") {
        if (u.length !== o.length) throw new Error("Weights must have the same length as possibles");
        for (var d = 0, p = u.length; d < p; d++) {
          if (!Pe(u[d]) || u[d] < 0) throw new Error("Weights must be an array of positive numbers");
          v += u[d]
        }
      }
      for (var b = o.length, g = [], N; g.length < c;) {
        if (typeof u > "u") N = o[Math.floor(t() * b)];
        else
          for (var h = t() * v, x = 0, w = o.length; x < w; x++)
            if (h -= u[x], h < 0) {
              N = o[x];
              break
            } g.push(N)
      }
      return l ? g[0] : m ? m(g) : g
    }
  });

function Io(e, r) {
  var i = [];
  if (e = e.slice(0), e.length > 1)
    for (var n = 0, t = e.shift(); n < t; n++) i.push(Io(e, r));
  else
    for (var a = 0, o = e.shift(); a < o; a++) i.push(r());
  return i
}
var cf = "random",
  YF = ["typed", "config", "?on"],
  WF = z(cf, YF, e => {
    var {
      typed: r,
      config: i,
      on: n
    } = e, t = Fn(i.randomSeed);
    return n && n("config", function(f, c) {
      f.randomSeed !== c.randomSeed && (t = Fn(f.randomSeed))
    }), r(cf, {
      "": () => o(0, 1),
      number: f => o(0, f),
      "number, number": (f, c) => o(f, c),
      "Array | Matrix": f => a(f, 0, 1),
      "Array | Matrix, number": (f, c) => a(f, 0, c),
      "Array | Matrix, number, number": (f, c, u) => a(f, c, u)
    });

    function a(f, c, u) {
      var s = Io(f.valueOf(), () => o(c, u));
      return Fe(f) ? f.create(s) : s
    }

    function o(f, c) {
      return f + t() * (c - f)
    }
  }),
  ff = "randomInt",
  QF = ["typed", "config", "?on"],
  XF = z(ff, QF, e => {
    var {
      typed: r,
      config: i,
      on: n
    } = e, t = Fn(i.randomSeed);
    return n && n("config", function(f, c) {
      f.randomSeed !== c.randomSeed && (t = Fn(f.randomSeed))
    }), r(ff, {
      "": () => o(0, 1),
      number: f => o(0, f),
      "number, number": (f, c) => o(f, c),
      "Array | Matrix": f => a(f, 0, 1),
      "Array | Matrix, number": (f, c) => a(f, 0, c),
      "Array | Matrix, number, number": (f, c, u) => a(f, c, u)
    });

    function a(f, c, u) {
      var s = Io(f.valueOf(), () => o(c, u));
      return Fe(f) ? f.create(s) : s
    }

    function o(f, c) {
      return Math.floor(f + t() * (c - f))
    }
  }),
  mf = "stirlingS2",
  JF = ["typed", "addScalar", "subtractScalar", "multiplyScalar", "divideScalar", "pow", "factorial", "combinations", "isNegative", "isInteger", "number", "?bignumber", "larger"],
  KF = z(mf, JF, e => {
    var {
      typed: r,
      addScalar: i,
      subtractScalar: n,
      multiplyScalar: t,
      divideScalar: a,
      pow: o,
      factorial: f,
      combinations: c,
      isNegative: u,
      isInteger: s,
      number: l,
      bignumber: m,
      larger: v
    } = e, d = [], p = [];
    return r(mf, {
      "number | BigNumber, number | BigNumber": function(g, N) {
        if (!s(g) || u(g) || !s(N) || u(N)) throw new TypeError("Non-negative integer value expected in function stirlingS2");
        if (v(N, g)) throw new TypeError("k must be less than or equal to n in function stirlingS2");
        var h = !(Pe(g) && Pe(N)),
          x = h ? p : d,
          w = h ? m : l,
          y = l(g),
          A = l(N);
        if (x[y] && x[y].length > A) return x[y][A];
        for (var E = 0; E <= y; ++E)
          if (x[E] || (x[E] = [w(E === 0 ? 1 : 0)]), E !== 0)
            for (var D = x[E], S = x[E - 1], C = D.length; C <= E && C <= A; ++C) C === E ? D[C] = 1 : D[C] = i(t(w(C), S[C]), S[C - 1]);
        return x[y][A]
      }
    })
  }),
  vf = "bellNumbers",
  jF = ["typed", "addScalar", "isNegative", "isInteger", "stirlingS2"],
  e4 = z(vf, jF, e => {
    var {
      typed: r,
      addScalar: i,
      isNegative: n,
      isInteger: t,
      stirlingS2: a
    } = e;
    return r(vf, {
      "number | BigNumber": function(f) {
        if (!t(f) || n(f)) throw new TypeError("Non-negative integer value expected in function bellNumbers");
        for (var c = 0, u = 0; u <= f; u++) c = i(c, a(f, u));
        return c
      }
    })
  }),
  pf = "catalan",
  r4 = ["typed", "addScalar", "divideScalar", "multiplyScalar", "combinations", "isNegative", "isInteger"],
  t4 = z(pf, r4, e => {
    var {
      typed: r,
      addScalar: i,
      divideScalar: n,
      multiplyScalar: t,
      combinations: a,
      isNegative: o,
      isInteger: f
    } = e;
    return r(pf, {
      "number | BigNumber": function(u) {
        if (!f(u) || o(u)) throw new TypeError("Non-negative integer value expected in function catalan");
        return n(a(t(u, 2), u), i(u, 1))
      }
    })
  }),
  df = "composition",
  n4 = ["typed", "addScalar", "combinations", "isNegative", "isPositive", "isInteger", "larger"],
  a4 = z(df, n4, e => {
    var {
      typed: r,
      addScalar: i,
      combinations: n,
      isPositive: t,
      isNegative: a,
      isInteger: o,
      larger: f
    } = e;
    return r(df, {
      "number | BigNumber, number | BigNumber": function(u, s) {
        if (!o(u) || !t(u) || !o(s) || !t(s)) throw new TypeError("Positive integer value expected in function composition");
        if (f(s, u)) throw new TypeError("k must be less than or equal to n in function composition");
        return n(i(u, -1), i(s, -1))
      }
    })
  }),
  hf = "leafCount",
  i4 = ["parse", "typed"],
  o4 = z(hf, i4, e => {
    var {
      parse: r,
      typed: i
    } = e;

    function n(t) {
      var a = 0;
      return t.forEach(o => {
        a += n(o)
      }), a || 1
    }
    return i(hf, {
      Node: function(a) {
        return n(a)
      }
    })
  });

function gf(e) {
  return Qe(e) || mr(e) && e.isUnary() && Qe(e.args[0])
}

function ui(e) {
  return !!(Qe(e) || (Rt(e) || mr(e)) && e.args.every(ui) || St(e) && ui(e.content))
}

function yf(e, r) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), i.push.apply(i, n)
  }
  return i
}

function ki(e) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? yf(Object(i), !0).forEach(function(n) {
      dr(e, n, i[n])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : yf(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
    })
  }
  return e
}
var s4 = "simplifyUtil",
  u4 = ["FunctionNode", "OperatorNode", "SymbolNode"],
  qo = z(s4, u4, e => {
    var {
      FunctionNode: r,
      OperatorNode: i,
      SymbolNode: n
    } = e, t = !0, a = !1, o = "defaultF", f = {
      add: {
        trivial: t,
        total: t,
        commutative: t,
        associative: t
      },
      unaryPlus: {
        trivial: t,
        total: t,
        commutative: t,
        associative: t
      },
      subtract: {
        trivial: a,
        total: t,
        commutative: a,
        associative: a
      },
      multiply: {
        trivial: t,
        total: t,
        commutative: t,
        associative: t
      },
      divide: {
        trivial: a,
        total: t,
        commutative: a,
        associative: a
      },
      paren: {
        trivial: t,
        total: t,
        commutative: t,
        associative: a
      },
      defaultF: {
        trivial: a,
        total: t,
        commutative: a,
        associative: a
      }
    }, c = {
      divide: {
        total: a
      },
      log: {
        total: a
      }
    }, u = {
      subtract: {
        total: a
      },
      abs: {
        trivial: t
      },
      log: {
        total: t
      }
    };

    function s(h, x) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : f,
        y = o;
      if (typeof h == "string" ? y = h : mr(h) ? y = h.fn.toString() : Rt(h) ? y = h.name : St(h) && (y = "paren"), Ee(w, y)) {
        var A = w[y];
        if (Ee(A, x)) return A[x];
        if (Ee(f, y)) return f[y][x]
      }
      if (Ee(w, o)) {
        var E = w[o];
        return Ee(E, x) ? E[x] : f[o][x]
      }
      if (Ee(f, y)) {
        var D = f[y];
        if (Ee(D, x)) return D[x]
      }
      return f[o][x]
    }

    function l(h) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
      return s(h, "commutative", x)
    }

    function m(h) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
      return s(h, "associative", x)
    }

    function v(h, x) {
      var w = ki({}, h);
      for (var y in x) Ee(h, y) ? w[y] = ki(ki({}, x[y]), h[y]) : w[y] = x[y];
      return w
    }

    function d(h, x) {
      if (!h.args || h.args.length === 0) return h;
      h.args = p(h, x);
      for (var w = 0; w < h.args.length; w++) d(h.args[w], x)
    }

    function p(h, x) {
      var w, y = [],
        A = function E(D) {
          for (var S = 0; S < D.args.length; S++) {
            var C = D.args[S];
            mr(C) && w === C.op ? E(C) : y.push(C)
          }
        };
      return m(h, x) ? (w = h.op, A(h), y) : h.args
    }

    function b(h, x) {
      if (!(!h.args || h.args.length === 0)) {
        for (var w = N(h), y = h.args.length, A = 0; A < y; A++) b(h.args[A], x);
        if (y > 2 && m(h, x)) {
          for (var E = h.args.pop(); h.args.length > 0;) E = w([h.args.pop(), E]);
          h.args = E.args
        }
      }
    }

    function g(h, x) {
      if (!(!h.args || h.args.length === 0)) {
        for (var w = N(h), y = h.args.length, A = 0; A < y; A++) g(h.args[A], x);
        if (y > 2 && m(h, x)) {
          for (var E = h.args.shift(); h.args.length > 0;) E = w([E, h.args.shift()]);
          h.args = E.args
        }
      }
    }

    function N(h) {
      return mr(h) ? function(x) {
        try {
          return new i(h.op, h.fn, x, h.implicit)
        } catch (w) {
          return console.error(w), []
        }
      } : function(x) {
        return new r(new n(h.name), x)
      }
    }
    return {
      createMakeNodeFunction: N,
      hasProperty: s,
      isCommutative: l,
      isAssociative: m,
      mergeContext: v,
      flatten: d,
      allChildren: p,
      unflattenr: b,
      unflattenl: g,
      defaultContext: f,
      realContext: c,
      positiveContext: u
    }
  }),
  l4 = "simplify",
  c4 = ["config", "typed", "parse", "add", "subtract", "multiply", "divide", "pow", "isZero", "equal", "resolve", "simplifyConstant", "simplifyCore", "?fraction", "?bignumber", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode"],
  f4 = z(l4, c4, e => {
    var {
      config: r,
      typed: i,
      parse: n,
      add: t,
      subtract: a,
      multiply: o,
      divide: f,
      pow: c,
      isZero: u,
      equal: s,
      resolve: l,
      simplifyConstant: m,
      simplifyCore: v,
      fraction: d,
      bignumber: p,
      mathWithTransform: b,
      matrix: g,
      AccessorNode: N,
      ArrayNode: h,
      ConstantNode: x,
      FunctionNode: w,
      IndexNode: y,
      ObjectNode: A,
      OperatorNode: E,
      ParenthesisNode: D,
      SymbolNode: S
    } = e, {
      hasProperty: C,
      isCommutative: M,
      isAssociative: $,
      mergeContext: I,
      flatten: _,
      unflattenr: T,
      unflattenl: B,
      createMakeNodeFunction: U,
      defaultContext: O,
      realContext: V,
      positiveContext: J
    } = qo({
      FunctionNode: w,
      OperatorNode: E,
      SymbolNode: S
    });
    i.addConversion({
      from: "Object",
      to: "Map",
      convert: wn
    });
    var Z = i("simplify", {
      Node: re,
      "Node, Map": (k, W) => re(k, !1, W),
      "Node, Map, Object": (k, W, K) => re(k, !1, W, K),
      "Node, Array": re,
      "Node, Array, Map": re,
      "Node, Array, Map, Object": re
    });
    i.removeConversion({
      from: "Object",
      to: "Map",
      convert: wn
    }), Z.defaultContext = O, Z.realContext = V, Z.positiveContext = J;

    function q(k) {
      return k.transform(function(W, K, ve) {
        return St(W) ? q(W.content) : W
      })
    }
    var X = {
      true: !0,
      false: !0,
      e: !0,
      i: !0,
      Infinity: !0,
      LN2: !0,
      LN10: !0,
      LOG2E: !0,
      LOG10E: !0,
      NaN: !0,
      phi: !0,
      pi: !0,
      SQRT1_2: !0,
      SQRT2: !0,
      tau: !0
    };
    Z.rules = [v, {
      l: "log(e)",
      r: "1"
    }, {
      s: "n-n1 -> n+-n1",
      assuming: {
        subtract: {
          total: !0
        }
      }
    }, {
      s: "n-n -> 0",
      assuming: {
        subtract: {
          total: !1
        }
      }
    }, {
      s: "-(cl*v) -> v * (-cl)",
      assuming: {
        multiply: {
          commutative: !0
        },
        subtract: {
          total: !0
        }
      }
    }, {
      s: "-(cl*v) -> (-cl) * v",
      assuming: {
        multiply: {
          commutative: !1
        },
        subtract: {
          total: !0
        }
      }
    }, {
      s: "-(v*cl) -> v * (-cl)",
      assuming: {
        multiply: {
          commutative: !1
        },
        subtract: {
          total: !0
        }
      }
    }, {
      l: "-(n1/n2)",
      r: "-n1/n2"
    }, {
      l: "-v",
      r: "v * (-1)"
    }, {
      l: "(n1 + n2)*(-1)",
      r: "n1*(-1) + n2*(-1)",
      repeat: !0
    }, {
      l: "n/n1^n2",
      r: "n*n1^-n2"
    }, {
      l: "n/n1",
      r: "n*n1^-1"
    }, {
      s: "(n1*n2)^n3 -> n1^n3 * n2^n3",
      assuming: {
        multiply: {
          commutative: !0
        }
      }
    }, {
      s: "(n1*n2)^(-1) -> n2^(-1) * n1^(-1)",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    }, {
      s: "(n ^ n1) ^ n2 -> n ^ (n1 * n2)",
      assuming: {
        divide: {
          total: !0
        }
      }
    }, {
      l: " vd   * ( vd   * n1 + n2)",
      r: "vd^2       * n1 +  vd   * n2"
    }, {
      s: " vd   * (vd^n4 * n1 + n2)   ->  vd^(1+n4)  * n1 +  vd   * n2",
      assuming: {
        divide: {
          total: !0
        }
      }
    }, {
      s: "vd^n3 * ( vd   * n1 + n2)   ->  vd^(n3+1)  * n1 + vd^n3 * n2",
      assuming: {
        divide: {
          total: !0
        }
      }
    }, {
      s: "vd^n3 * (vd^n4 * n1 + n2)   ->  vd^(n3+n4) * n1 + vd^n3 * n2",
      assuming: {
        divide: {
          total: !0
        }
      }
    }, {
      l: "n*n",
      r: "n^2"
    }, {
      s: "n * n^n1 -> n^(n1+1)",
      assuming: {
        divide: {
          total: !0
        }
      }
    }, {
      s: "n^n1 * n^n2 -> n^(n1+n2)",
      assuming: {
        divide: {
          total: !0
        }
      }
    }, m, {
      s: "n+n -> 2*n",
      assuming: {
        add: {
          total: !0
        }
      }
    }, {
      l: "n+-n",
      r: "0"
    }, {
      l: "vd*n + vd",
      r: "vd*(n+1)"
    }, {
      l: "n3*n1 + n3*n2",
      r: "n3*(n1+n2)"
    }, {
      l: "n3^(-n4)*n1 +   n3  * n2",
      r: "n3^(-n4)*(n1 + n3^(n4+1) *n2)"
    }, {
      l: "n3^(-n4)*n1 + n3^n5 * n2",
      r: "n3^(-n4)*(n1 + n3^(n4+n5)*n2)"
    }, {
      s: "n*vd + vd -> (n+1)*vd",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    }, {
      s: "vd + n*vd -> (1+n)*vd",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    }, {
      s: "n1*n3 + n2*n3 -> (n1+n2)*n3",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    }, {
      s: "n^n1 * n -> n^(n1+1)",
      assuming: {
        divide: {
          total: !0
        },
        multiply: {
          commutative: !1
        }
      }
    }, {
      s: "n1*n3^(-n4) + n2 * n3    -> (n1 + n2*n3^(n4 +  1))*n3^(-n4)",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    }, {
      s: "n1*n3^(-n4) + n2 * n3^n5 -> (n1 + n2*n3^(n4 + n5))*n3^(-n4)",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    }, {
      l: "n*cd + cd",
      r: "(n+1)*cd"
    }, {
      s: "cd*n + cd -> cd*(n+1)",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    }, {
      s: "cd + cd*n -> cd*(1+n)",
      assuming: {
        multiply: {
          commutative: !1
        }
      }
    }, m, {
      s: "(-n)*n1 -> -(n*n1)",
      assuming: {
        subtract: {
          total: !0
        }
      }
    }, {
      s: "n1*(-n) -> -(n1*n)",
      assuming: {
        subtract: {
          total: !0
        },
        multiply: {
          commutative: !1
        }
      }
    }, {
      s: "ce+ve -> ve+ce",
      assuming: {
        add: {
          commutative: !0
        }
      },
      imposeContext: {
        add: {
          commutative: !1
        }
      }
    }, {
      s: "vd*cd -> cd*vd",
      assuming: {
        multiply: {
          commutative: !0
        }
      },
      imposeContext: {
        multiply: {
          commutative: !1
        }
      }
    }, {
      l: "n+-n1",
      r: "n-n1"
    }, {
      l: "n+-(n1)",
      r: "n-(n1)"
    }, {
      s: "n*(n1^-1) -> n/n1",
      assuming: {
        multiply: {
          commutative: !0
        }
      }
    }, {
      s: "n*n1^-n2 -> n/n1^n2",
      assuming: {
        multiply: {
          commutative: !0
        }
      }
    }, {
      s: "n^-1 -> 1/n",
      assuming: {
        multiply: {
          commutative: !0
        }
      }
    }, {
      l: "n^1",
      r: "n"
    }, {
      s: "n*(n1/n2) -> (n*n1)/n2",
      assuming: {
        multiply: {
          associative: !0
        }
      }
    }, {
      s: "n-(n1+n2) -> n-n1-n2",
      assuming: {
        addition: {
          associative: !0,
          commutative: !0
        }
      }
    }, {
      l: "1*n",
      r: "n",
      imposeContext: {
        multiply: {
          commutative: !0
        }
      }
    }, {
      s: "n1/(n2/n3) -> (n1*n3)/n2",
      assuming: {
        multiply: {
          associative: !0
        }
      }
    }, {
      l: "n1/(-n2)",
      r: "-n1/n2"
    }];

    function ie(k, W) {
      var K = {};
      if (k.s) {
        var ve = k.s.split("->");
        if (ve.length === 2) K.l = ve[0], K.r = ve[1];
        else throw SyntaxError("Could not parse rule: " + k.s)
      } else K.l = k.l, K.r = k.r;
      K.l = q(n(K.l)), K.r = q(n(K.r));
      for (var me of ["imposeContext", "repeat", "assuming"]) me in k && (K[me] = k[me]);
      if (k.evaluate && (K.evaluate = n(k.evaluate)), $(K.l, W)) {
        var R = !M(K.l, W),
          L;
        R && (L = ue());
        var j = U(K.l),
          ae = ue();
        K.expanded = {}, K.expanded.l = j([K.l, ae]), _(K.expanded.l, W), T(K.expanded.l, W), K.expanded.r = j([K.r, ae]), R && (K.expandedNC1 = {}, K.expandedNC1.l = j([L, K.l]), K.expandedNC1.r = j([L, K.r]), K.expandedNC2 = {}, K.expandedNC2.l = j([L, K.expanded.l]), K.expandedNC2.r = j([L, K.expanded.r]))
      }
      return K
    }

    function Q(k, W) {
      for (var K = [], ve = 0; ve < k.length; ve++) {
        var me = k[ve],
          R = void 0,
          L = typeof me;
        switch (L) {
          case "string":
            me = {
              s: me
            };
          case "object":
            R = ie(me, W);
            break;
          case "function":
            R = me;
            break;
          default:
            throw TypeError("Unsupported type of rule: " + L)
        }
        K.push(R)
      }
      return K
    }
    var ee = 0;

    function ue() {
      return new S("_p" + ee++)
    }

    function re(k, W) {
      var K = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Cn(),
        ve = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
        me = ve.consoleDebug;
      W = Q(W || Z.rules, ve.context);
      var R = l(k, K);
      R = q(R);
      for (var L = {}, j = R.toString({
          parenthesis: "all"
        }); !L[j];) {
        L[j] = !0, ee = 0;
        var ae = j;
        me && console.log("Working on: ", j);
        for (var fe = 0; fe < W.length; fe++) {
          var ce = "";
          if (typeof W[fe] == "function" ? (R = W[fe](R, ve), me && (ce = W[fe].name)) : (_(R, ve.context), R = le(R, W[fe], ve.context), me && (ce = "".concat(W[fe].l.toString(), " -> ").concat(W[fe].r.toString()))), me) {
            var ye = R.toString({
              parenthesis: "all"
            });
            ye !== ae && (console.log("Applying", ce, "produced", ye), ae = ye)
          }
          B(R, ve.context)
        }
        j = R.toString({
          parenthesis: "all"
        })
      }
      return R
    }

    function ne(k, W, K) {
      var ve = k;
      if (k)
        for (var me = 0; me < k.length; ++me) {
          var R = le(k[me], W, K);
          R !== k[me] && (ve === k && (ve = k.slice()), ve[me] = R)
        }
      return ve
    }

    function le(k, W, K) {
      if (W.assuming) {
        for (var ve in W.assuming)
          for (var me in W.assuming[ve])
            if (C(ve, me, K) !== W.assuming[ve][me]) return k
      }
      var R = I(W.imposeContext, K),
        L = k;
      if (L instanceof E || L instanceof w) {
        var j = ne(L.args, W, K);
        j !== L.args && (L = L.clone(), L.args = j)
      } else if (L instanceof D) {
        if (L.content) {
          var ae = le(L.content, W, K);
          ae !== L.content && (L = new D(ae))
        }
      } else if (L instanceof h) {
        var fe = ne(L.items, W, K);
        fe !== L.items && (L = new h(fe))
      } else if (L instanceof N) {
        var ce = L.object;
        L.object && (ce = le(L.object, W, K));
        var ye = L.index;
        L.index && (ye = le(L.index, W, K)), (ce !== L.object || ye !== L.index) && (L = new N(ce, ye))
      } else if (L instanceof y) {
        var he = ne(L.dimensions, W, K);
        he !== L.dimensions && (L = new y(he))
      } else if (L instanceof A) {
        var De = !1,
          be = {};
        for (var Ge in L.properties) be[Ge] = le(L.properties[Ge], W, K), be[Ge] !== L.properties[Ge] && (De = !0);
        De && (L = new A(be))
      }
      var Ve = W.r,
        Ce = H(W.l, L, R)[0];
      if (!Ce && W.expanded && (Ve = W.expanded.r, Ce = H(W.expanded.l, L, R)[0]), !Ce && W.expandedNC1 && (Ve = W.expandedNC1.r, Ce = H(W.expandedNC1.l, L, R)[0], Ce || (Ve = W.expandedNC2.r, Ce = H(W.expandedNC2.l, L, R)[0])), Ce) {
        var lr = L.implicit;
        L = Ve.clone(), lr && "implicit" in Ve && (L.implicit = !0), L = L.transform(function(F) {
          return F.isSymbolNode && Ee(Ce.placeholders, F.name) ? Ce.placeholders[F.name].clone() : F
        })
      }
      return W.repeat && L !== k && (L = le(L, W, K)), L
    }

    function se(k, W) {
      var K = [],
        ve, me, R = U(k);
      if (M(k, W))
        for (var L = 0; L < k.args.length; L++) me = k.args.slice(0), me.splice(L, 1), ve = me.length === 1 ? me[0] : R(me), K.push(R([k.args[L], ve]));
      else
        for (var j = 1; j < k.args.length; j++) {
          var ae = k.args[0];
          j > 1 && (ae = R(k.args.slice(0, j))), me = k.args.slice(j), ve = me.length === 1 ? me[0] : R(me), K.push(R([ae, ve]))
        }
      return K
    }

    function ge(k, W) {
      var K = {
        placeholders: {}
      };
      if (!k.placeholders && !W.placeholders) return K;
      if (k.placeholders) {
        if (!W.placeholders) return k
      } else return W;
      for (var ve in k.placeholders)
        if (Ee(k.placeholders, ve) && (K.placeholders[ve] = k.placeholders[ve], Ee(W.placeholders, ve) && !te(k.placeholders[ve], W.placeholders[ve]))) return null;
      for (var me in W.placeholders) Ee(W.placeholders, me) && (K.placeholders[me] = W.placeholders[me]);
      return K
    }

    function Ae(k, W) {
      var K = [];
      if (k.length === 0 || W.length === 0) return K;
      for (var ve, me = 0; me < k.length; me++)
        for (var R = 0; R < W.length; R++) ve = ge(k[me], W[R]), ve && K.push(ve);
      return K
    }

    function P(k) {
      if (k.length === 0) return k;
      for (var W = k.reduce(Ae), K = [], ve = {}, me = 0; me < W.length; me++) {
        var R = JSON.stringify(W[me]);
        ve[R] || (ve[R] = !0, K.push(W[me]))
      }
      return K
    }

    function H(k, W, K, ve) {
      var me = [{
        placeholders: {}
      }];
      if (k instanceof E && W instanceof E || k instanceof w && W instanceof w) {
        if (k instanceof E) {
          if (k.op !== W.op || k.fn !== W.fn) return []
        } else if (k instanceof w && k.name !== W.name) return [];
        if (W.args.length === 1 && k.args.length === 1 || !$(W, K) && W.args.length === k.args.length || ve) {
          for (var R = [], L = 0; L < k.args.length; L++) {
            var j = H(k.args[L], W.args[L], K);
            if (j.length === 0) break;
            R.push(j)
          }
          if (R.length !== k.args.length) {
            if (!M(W, K) || k.args.length === 1) return [];
            if (k.args.length > 2) throw new Error("permuting >2 commutative non-associative rule arguments not yet implemented");
            var ae = H(k.args[0], W.args[1], K);
            if (ae.length === 0) return [];
            var fe = H(k.args[1], W.args[0], K);
            if (fe.length === 0) return [];
            R = [ae, fe]
          }
          me = P(R)
        } else if (W.args.length >= 2 && k.args.length === 2) {
          for (var ce = se(W, K), ye = [], he = 0; he < ce.length; he++) {
            var De = H(k, ce[he], K, !0);
            ye = ye.concat(De)
          }
          return ye
        } else {
          if (k.args.length > 2) throw Error("Unexpected non-binary associative function: " + k.toString());
          return []
        }
      } else if (k instanceof S) {
        if (k.name.length === 0) throw new Error("Symbol in rule has 0 length...!?");
        if (X[k.name]) {
          if (k.name !== W.name) return []
        } else switch (k.name[1] >= "a" && k.name[1] <= "z" ? k.name.substring(0, 2) : k.name[0]) {
          case "n":
          case "_p":
            me[0].placeholders[k.name] = W;
            break;
          case "c":
          case "cl":
            if (Qe(W)) me[0].placeholders[k.name] = W;
            else return [];
            break;
          case "v":
            if (!Qe(W)) me[0].placeholders[k.name] = W;
            else return [];
            break;
          case "vl":
            if (yr(W)) me[0].placeholders[k.name] = W;
            else return [];
            break;
          case "cd":
            if (gf(W)) me[0].placeholders[k.name] = W;
            else return [];
            break;
          case "vd":
            if (!gf(W)) me[0].placeholders[k.name] = W;
            else return [];
            break;
          case "ce":
            if (ui(W)) me[0].placeholders[k.name] = W;
            else return [];
            break;
          case "ve":
            if (!ui(W)) me[0].placeholders[k.name] = W;
            else return [];
            break;
          default:
            throw new Error("Invalid symbol in rule: " + k.name)
        }
      } else if (k instanceof x) {
        if (!s(k.value, W.value)) return []
      } else return [];
      return me
    }

    function te(k, W) {
      if (k instanceof x && W instanceof x) {
        if (!s(k.value, W.value)) return !1
      } else if (k instanceof S && W instanceof S) {
        if (k.name !== W.name) return !1
      } else if (k instanceof E && W instanceof E || k instanceof w && W instanceof w) {
        if (k instanceof E) {
          if (k.op !== W.op || k.fn !== W.fn) return !1
        } else if (k instanceof w && k.name !== W.name) return !1;
        if (k.args.length !== W.args.length) return !1;
        for (var K = 0; K < k.args.length; K++)
          if (!te(k.args[K], W.args[K])) return !1
      } else return !1;
      return !0
    }
    return Z
  }),
  m4 = "simplifyConstant",
  v4 = ["typed", "config", "mathWithTransform", "matrix", "?fraction", "?bignumber", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode"],
  p4 = z(m4, v4, e => {
    var {
      typed: r,
      config: i,
      mathWithTransform: n,
      matrix: t,
      fraction: a,
      bignumber: o,
      AccessorNode: f,
      ArrayNode: c,
      ConstantNode: u,
      FunctionNode: s,
      IndexNode: l,
      ObjectNode: m,
      OperatorNode: v,
      SymbolNode: d
    } = e, {
      isCommutative: p,
      isAssociative: b,
      allChildren: g,
      createMakeNodeFunction: N
    } = qo({
      FunctionNode: s,
      OperatorNode: v,
      SymbolNode: d
    }), h = r("simplifyConstant", {
      Node: _ => A(I(_, {})),
      "Node, Object": function(T, B) {
        return A(I(T, B))
      }
    });

    function x(_) {
      return oa(_) ? _.valueOf() : _ instanceof Array ? _.map(x) : Fe(_) ? t(x(_.valueOf())) : _
    }

    function w(_, T, B) {
      try {
        return n[_].apply(null, T)
      } catch {
        return T = T.map(x), D(n[_].apply(null, T), B)
      }
    }
    var y = r({
      Fraction: C,
      number: function(T) {
        return T < 0 ? S(new u(-T)) : new u(T)
      },
      BigNumber: function(T) {
        return T < 0 ? S(new u(-T)) : new u(T)
      },
      Complex: function(T) {
        throw new Error("Cannot convert Complex number to Node")
      },
      string: function(T) {
        return new u(T)
      },
      Matrix: function(T) {
        return new c(T.valueOf().map(B => y(B)))
      }
    });

    function A(_) {
      return er(_) ? _ : y(_)
    }

    function E(_, T) {
      var B = T && T.exactFractions !== !1;
      if (B && isFinite(_) && a) {
        var U = a(_),
          O = T && typeof T.fractionsLimit == "number" ? T.fractionsLimit : 1 / 0;
        if (U.valueOf() === _ && U.n < O && U.d < O) return U
      }
      return _
    }
    var D = r({
      "string, Object": function(T, B) {
        if (i.number === "BigNumber") return o === void 0 && Eo(), o(T);
        if (i.number === "Fraction") return a === void 0 && Nv(), a(T);
        var U = parseFloat(T);
        return E(U, B)
      },
      "Fraction, Object": function(T, B) {
        return T
      },
      "BigNumber, Object": function(T, B) {
        return T
      },
      "number, Object": function(T, B) {
        return E(T, B)
      },
      "Complex, Object": function(T, B) {
        return T.im !== 0 ? T : E(T.re, B)
      },
      "Matrix, Object": function(T, B) {
        return t(E(T.valueOf()))
      },
      "Array, Object": function(T, B) {
        return T.map(E)
      }
    });

    function S(_) {
      return new v("-", "unaryMinus", [_])
    }

    function C(_) {
      var T, B = _.s * _.n;
      return B < 0 ? T = new v("-", "unaryMinus", [new u(-B)]) : T = new u(B), _.d === 1 ? T : new v("/", "divide", [T, new u(_.d)])
    }

    function M(_, T, B) {
      if (!On(T)) return new f(A(_), A(T));
      if (Zr(_) || Fe(_)) {
        for (var U = Array.from(T.dimensions); U.length > 0;)
          if (Qe(U[0]) && typeof U[0].value != "string") {
            var O = D(U.shift().value, B);
            Zr(_) ? _ = _.items[O - 1] : (_ = _.valueOf()[O - 1], _ instanceof Array && (_ = t(_)))
          } else if (U.length > 1 && Qe(U[1]) && typeof U[1].value != "string") {
          var V = D(U[1].value, B),
            J = [],
            Z = Zr(_) ? _.items : _.valueOf();
          for (var q of Z)
            if (Zr(q)) J.push(q.items[V - 1]);
            else if (Fe(_)) J.push(q[V - 1]);
          else break;
          if (J.length === Z.length) Zr(_) ? _ = new c(J) : _ = t(J), U.splice(1, 1);
          else break
        } else break;
        return U.length === T.dimensions.length ? new f(A(_), T) : U.length > 0 ? (T = new l(U), new f(A(_), T)) : _
      }
      if (mi(_) && T.dimensions.length === 1 && Qe(T.dimensions[0])) {
        var X = T.dimensions[0].value;
        return X in _.properties ? _.properties[X] : new u
      }
      return new f(A(_), T)
    }

    function $(_, T, B, U) {
      var O = T.shift(),
        V = T.reduce((J, Z) => {
          if (!er(Z)) {
            var q = J.pop();
            if (er(q)) return [q, Z];
            try {
              return J.push(w(_, [q, Z], U)), J
            } catch {
              J.push(q)
            }
          }
          J.push(A(J.pop()));
          var X = J.length === 1 ? J[0] : B(J);
          return [B([X, A(Z)])]
        }, [O]);
      return V.length === 1 ? V[0] : B([V[0], y(V[1])])
    }

    function I(_, T) {
      switch (_.type) {
        case "SymbolNode":
          return _;
        case "ConstantNode":
          switch (typeof _.value) {
            case "number":
              return D(_.value, T);
            case "string":
              return _.value;
            default:
              if (!isNaN(_.value)) return D(_.value, T)
          }
          return _;
        case "FunctionNode":
          if (n[_.name] && n[_.name].rawArgs) return _;
          {
            var B = ["add", "multiply"];
            if (B.indexOf(_.name) === -1) {
              var U = _.args.map(le => I(le, T));
              if (!U.some(er)) try {
                return w(_.name, U, T)
              } catch {}
              if (_.name === "size" && U.length === 1 && Zr(U[0])) {
                for (var O = [], V = U[0]; Zr(V);) O.push(V.items.length), V = V.items[0];
                return t(O)
              }
              return new s(_.name, U.map(A))
            }
          }
        case "OperatorNode": {
          var J = _.fn.toString(),
            Z, q, X = N(_);
          if (mr(_) && _.isUnary()) Z = [I(_.args[0], T)], er(Z[0]) ? q = X(Z) : q = w(J, Z, T);
          else if (b(_, T.context))
            if (Z = g(_, T.context), Z = Z.map(le => I(le, T)), p(J, T.context)) {
              for (var ie = [], Q = [], ee = 0; ee < Z.length; ee++) er(Z[ee]) ? Q.push(Z[ee]) : ie.push(Z[ee]);
              ie.length > 1 ? (q = $(J, ie, X, T), Q.unshift(q), q = $(J, Q, X, T)) : q = $(J, Z, X, T)
            } else q = $(J, Z, X, T);
          else Z = _.args.map(le => I(le, T)), q = $(J, Z, X, T);
          return q
        }
        case "ParenthesisNode":
          return I(_.content, T);
        case "AccessorNode":
          return M(I(_.object, T), I(_.index, T), T);
        case "ArrayNode": {
          var ue = _.items.map(le => I(le, T));
          return ue.some(er) ? new c(ue.map(A)) : t(ue)
        }
        case "IndexNode":
          return new l(_.dimensions.map(le => h(le, T)));
        case "ObjectNode": {
          var re = {};
          for (var ne in _.properties) re[ne] = h(_.properties[ne], T);
          return new m(re)
        }
        case "AssignmentNode":
        case "BlockNode":
        case "FunctionAssignmentNode":
        case "RangeNode":
        case "ConditionalNode":
        default:
          throw new Error("Unimplemented node type in simplifyConstant: ".concat(_.type))
      }
    }
    return h
  }),
  bf = "simplifyCore",
  d4 = ["typed", "parse", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode"],
  h4 = z(bf, d4, e => {
    var {
      typed: r,
      parse: i,
      equal: n,
      isZero: t,
      add: a,
      subtract: o,
      multiply: f,
      divide: c,
      pow: u,
      AccessorNode: s,
      ArrayNode: l,
      ConstantNode: m,
      FunctionNode: v,
      IndexNode: d,
      ObjectNode: p,
      OperatorNode: b,
      ParenthesisNode: g,
      SymbolNode: N
    } = e, h = new m(0), x = new m(1), w = new m(!0), y = new m(!1);

    function A(C) {
      return mr(C) && ["and", "not", "or"].includes(C.op)
    }
    var {
      hasProperty: E,
      isCommutative: D
    } = qo({
      FunctionNode: v,
      OperatorNode: b,
      SymbolNode: N
    });

    function S(C) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        $ = M ? M.context : void 0;
      if (E(C, "trivial", $)) {
        if (Rt(C) && C.args.length === 1) return S(C.args[0], M);
        var I = !1,
          _ = 0;
        if (C.forEach(Q => {
            ++_, _ === 1 && (I = S(Q, M))
          }), _ === 1) return I
      }
      var T = C;
      if (Rt(T)) {
        var B = bD(T.name);
        if (B) {
          if (T.args.length > 2 && E(T, "associative", $))
            for (; T.args.length > 2;) {
              var U = T.args.pop(),
                O = T.args.pop();
              T.args.push(new b(B, T.name, [U, O]))
            }
          T = new b(B, T.name, T.args)
        } else return new v(S(T.fn), T.args.map(Q => S(Q, M)))
      }
      if (mr(T) && T.isUnary()) {
        var V = S(T.args[0], M);
        if (T.op === "~" && mr(V) && V.isUnary() && V.op === "~" || T.op === "not" && mr(V) && V.isUnary() && V.op === "not" && A(V.args[0])) return V.args[0];
        var J = !0;
        if (T.op === "-" && mr(V) && (V.isBinary() && V.fn === "subtract" && (T = new b("-", "subtract", [V.args[1], V.args[0]]), J = !1), V.isUnary() && V.op === "-")) return V.args[0];
        if (J) return new b(T.op, T.fn, [V])
      }
      if (mr(T) && T.isBinary()) {
        var Z = S(T.args[0], M),
          q = S(T.args[1], M);
        if (T.op === "+") {
          if (Qe(Z) && t(Z.value)) return q;
          if (Qe(q) && t(q.value)) return Z;
          mr(q) && q.isUnary() && q.op === "-" && (q = q.args[0], T = new b("-", "subtract", [Z, q]))
        }
        if (T.op === "-") return mr(q) && q.isUnary() && q.op === "-" ? S(new b("+", "add", [Z, q.args[0]]), M) : Qe(Z) && t(Z.value) ? S(new b("-", "unaryMinus", [q])) : Qe(q) && t(q.value) ? Z : new b(T.op, T.fn, [Z, q]);
        if (T.op === "*") {
          if (Qe(Z)) {
            if (t(Z.value)) return h;
            if (n(Z.value, 1)) return q
          }
          if (Qe(q)) {
            if (t(q.value)) return h;
            if (n(q.value, 1)) return Z;
            if (D(T, $)) return new b(T.op, T.fn, [q, Z], T.implicit)
          }
          return new b(T.op, T.fn, [Z, q], T.implicit)
        }
        if (T.op === "/") return Qe(Z) && t(Z.value) ? h : Qe(q) && n(q.value, 1) ? Z : new b(T.op, T.fn, [Z, q]);
        if (T.op === "^" && Qe(q)) {
          if (t(q.value)) return x;
          if (n(q.value, 1)) return Z
        }
        if (T.op === "and") {
          if (Qe(Z))
            if (Z.value) {
              if (A(q)) return q
            } else return y;
          if (Qe(q))
            if (q.value) {
              if (A(Z)) return Z
            } else return y
        }
        if (T.op === "or") {
          if (Qe(Z)) {
            if (Z.value) return w;
            if (A(q)) return q
          }
          if (Qe(q)) {
            if (q.value) return w;
            if (A(Z)) return Z
          }
        }
        return new b(T.op, T.fn, [Z, q])
      }
      if (mr(T)) return new b(T.op, T.fn, T.args.map(Q => S(Q, M)));
      if (Zr(T)) return new l(T.items.map(Q => S(Q, M)));
      if (Wt(T)) return new s(S(T.object, M), S(T.index, M));
      if (On(T)) return new d(T.dimensions.map(Q => S(Q, M)));
      if (mi(T)) {
        var X = {};
        for (var ie in T.properties) X[ie] = S(T.properties[ie], M);
        return new p(X)
      }
      return T
    }
    return r(bf, {
      Node: S,
      "Node,Object": S
    })
  }),
  g4 = "resolve",
  y4 = ["typed", "parse", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode"],
  b4 = z(g4, y4, e => {
    var {
      typed: r,
      parse: i,
      ConstantNode: n,
      FunctionNode: t,
      OperatorNode: a,
      ParenthesisNode: o
    } = e;

    function f(c, u) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new Set;
      if (!u) return c;
      if (yr(c)) {
        if (s.has(c.name)) {
          var l = Array.from(s).join(", ");
          throw new ReferenceError("recursive loop of variable definitions among {".concat(l, "}"))
        }
        var m = u.get(c.name);
        if (er(m)) {
          var v = new Set(s);
          return v.add(c.name), f(m, u, v)
        } else return typeof m == "number" ? i(String(m)) : m !== void 0 ? new n(m) : c
      } else if (mr(c)) {
        var d = c.args.map(function(b) {
          return f(b, u, s)
        });
        return new a(c.op, c.fn, d, c.implicit)
      } else {
        if (St(c)) return new o(f(c.content, u, s));
        if (Rt(c)) {
          var p = c.args.map(function(b) {
            return f(b, u, s)
          });
          return new t(c.name, p)
        }
      }
      return c.map(b => f(b, u, s))
    }
    return r("resolve", {
      Node: f,
      "Node, Map | null | undefined": f,
      "Node, Object": (c, u) => f(c, wn(u)),
      "Array | Matrix": r.referToSelf(c => u => u.map(s => c(s))),
      "Array | Matrix, null | undefined": r.referToSelf(c => u => u.map(s => c(s))),
      "Array, Object": r.referTo("Array,Map", c => (u, s) => c(u, wn(s))),
      "Matrix, Object": r.referTo("Matrix,Map", c => (u, s) => c(u, wn(s))),
      "Array | Matrix, Map": r.referToSelf(c => (u, s) => u.map(l => c(l, s)))
    })
  }),
  xf = "symbolicEqual",
  x4 = ["parse", "simplify", "typed", "OperatorNode"],
  w4 = z(xf, x4, e => {
    var {
      parse: r,
      simplify: i,
      typed: n,
      OperatorNode: t
    } = e;

    function a(o, f) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        u = new t("-", "subtract", [o, f]),
        s = i(u, {}, c);
      return Qe(s) && !s.value
    }
    return n(xf, {
      "Node, Node": a,
      "Node, Node, Object": a
    })
  }),
  wf = "derivative",
  N4 = ["typed", "config", "parse", "simplify", "equal", "isZero", "numeric", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"],
  D4 = z(wf, N4, e => {
    var {
      typed: r,
      config: i,
      parse: n,
      simplify: t,
      equal: a,
      isZero: o,
      numeric: f,
      ConstantNode: c,
      FunctionNode: u,
      OperatorNode: s,
      ParenthesisNode: l,
      SymbolNode: m
    } = e;

    function v(h, x) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
          simplify: !0
        },
        y = {};
      b(y, h, x.name);
      var A = g(h, y);
      return w.simplify ? t(A) : A
    }
    r.addConversion({
      from: "identifier",
      to: "SymbolNode",
      convert: n
    });
    var d = r(wf, {
      "Node, SymbolNode": v,
      "Node, SymbolNode, Object": v
    });
    r.removeConversion({
      from: "identifier",
      to: "SymbolNode",
      convert: n
    }), d._simplify = !0, d.toTex = function(h) {
      return p.apply(null, h.args)
    };
    var p = r("_derivTex", {
        "Node, SymbolNode": function(x, w) {
          return Qe(x) && ar(x.value) === "string" ? p(n(x.value).toString(), w.toString(), 1) : p(x.toTex(), w.toString(), 1)
        },
        "Node, ConstantNode": function(x, w) {
          if (ar(w.value) === "string") return p(x, n(w.value));
          throw new Error("The second parameter to 'derivative' is a non-string constant")
        },
        "Node, SymbolNode, ConstantNode": function(x, w, y) {
          return p(x.toString(), w.name, y.value)
        },
        "string, string, number": function(x, w, y) {
          var A;
          return y === 1 ? A = "{d\\over d" + w + "}" : A = "{d^{" + y + "}\\over d" + w + "^{" + y + "}}", A + "\\left[".concat(x, "\\right]")
        }
      }),
      b = r("constTag", {
        "Object, ConstantNode, string": function(x, w) {
          return x[w] = !0, !0
        },
        "Object, SymbolNode, string": function(x, w, y) {
          return w.name !== y ? (x[w] = !0, !0) : !1
        },
        "Object, ParenthesisNode, string": function(x, w, y) {
          return b(x, w.content, y)
        },
        "Object, FunctionAssignmentNode, string": function(x, w, y) {
          return w.params.indexOf(y) === -1 ? (x[w] = !0, !0) : b(x, w.expr, y)
        },
        "Object, FunctionNode | OperatorNode, string": function(x, w, y) {
          if (w.args.length > 0) {
            for (var A = b(x, w.args[0], y), E = 1; E < w.args.length; ++E) A = b(x, w.args[E], y) && A;
            if (A) return x[w] = !0, !0
          }
          return !1
        }
      }),
      g = r("_derivative", {
        "ConstantNode, Object": function(x) {
          return N(0)
        },
        "SymbolNode, Object": function(x, w) {
          return w[x] !== void 0 ? N(0) : N(1)
        },
        "ParenthesisNode, Object": function(x, w) {
          return new l(g(x.content, w))
        },
        "FunctionAssignmentNode, Object": function(x, w) {
          return w[x] !== void 0 ? N(0) : g(x.expr, w)
        },
        "FunctionNode, Object": function(x, w) {
          if (w[x] !== void 0) return N(0);
          var y = x.args[0],
            A, E = !1,
            D = !1,
            S;
          switch (x.name) {
            case "cbrt":
              E = !0, S = new s("*", "multiply", [N(3), new s("^", "pow", [y, new s("/", "divide", [N(2), N(3)])])]);
              break;
            case "sqrt":
            case "nthRoot":
              if (x.args.length === 1) E = !0, S = new s("*", "multiply", [N(2), new u("sqrt", [y])]);
              else if (x.args.length === 2) return A = new s("/", "divide", [N(1), x.args[1]]), w[A] = w[x.args[1]], g(new s("^", "pow", [y, A]), w);
              break;
            case "log10":
              A = N(10);
            case "log":
              if (!A && x.args.length === 1) S = y.clone(), E = !0;
              else if (x.args.length === 1 && A || x.args.length === 2 && w[x.args[1]] !== void 0) S = new s("*", "multiply", [y.clone(), new u("log", [A || x.args[1]])]), E = !0;
              else if (x.args.length === 2) return g(new s("/", "divide", [new u("log", [y]), new u("log", [x.args[1]])]), w);
              break;
            case "pow":
              if (x.args.length === 2) return w[A] = w[x.args[1]], g(new s("^", "pow", [y, x.args[1]]), w);
              break;
            case "exp":
              S = new u("exp", [y.clone()]);
              break;
            case "sin":
              S = new u("cos", [y.clone()]);
              break;
            case "cos":
              S = new s("-", "unaryMinus", [new u("sin", [y.clone()])]);
              break;
            case "tan":
              S = new s("^", "pow", [new u("sec", [y.clone()]), N(2)]);
              break;
            case "sec":
              S = new s("*", "multiply", [x, new u("tan", [y.clone()])]);
              break;
            case "csc":
              D = !0, S = new s("*", "multiply", [x, new u("cot", [y.clone()])]);
              break;
            case "cot":
              D = !0, S = new s("^", "pow", [new u("csc", [y.clone()]), N(2)]);
              break;
            case "asin":
              E = !0, S = new u("sqrt", [new s("-", "subtract", [N(1), new s("^", "pow", [y.clone(), N(2)])])]);
              break;
            case "acos":
              E = !0, D = !0, S = new u("sqrt", [new s("-", "subtract", [N(1), new s("^", "pow", [y.clone(), N(2)])])]);
              break;
            case "atan":
              E = !0, S = new s("+", "add", [new s("^", "pow", [y.clone(), N(2)]), N(1)]);
              break;
            case "asec":
              E = !0, S = new s("*", "multiply", [new u("abs", [y.clone()]), new u("sqrt", [new s("-", "subtract", [new s("^", "pow", [y.clone(), N(2)]), N(1)])])]);
              break;
            case "acsc":
              E = !0, D = !0, S = new s("*", "multiply", [new u("abs", [y.clone()]), new u("sqrt", [new s("-", "subtract", [new s("^", "pow", [y.clone(), N(2)]), N(1)])])]);
              break;
            case "acot":
              E = !0, D = !0, S = new s("+", "add", [new s("^", "pow", [y.clone(), N(2)]), N(1)]);
              break;
            case "sinh":
              S = new u("cosh", [y.clone()]);
              break;
            case "cosh":
              S = new u("sinh", [y.clone()]);
              break;
            case "tanh":
              S = new s("^", "pow", [new u("sech", [y.clone()]), N(2)]);
              break;
            case "sech":
              D = !0, S = new s("*", "multiply", [x, new u("tanh", [y.clone()])]);
              break;
            case "csch":
              D = !0, S = new s("*", "multiply", [x, new u("coth", [y.clone()])]);
              break;
            case "coth":
              D = !0, S = new s("^", "pow", [new u("csch", [y.clone()]), N(2)]);
              break;
            case "asinh":
              E = !0, S = new u("sqrt", [new s("+", "add", [new s("^", "pow", [y.clone(), N(2)]), N(1)])]);
              break;
            case "acosh":
              E = !0, S = new u("sqrt", [new s("-", "subtract", [new s("^", "pow", [y.clone(), N(2)]), N(1)])]);
              break;
            case "atanh":
              E = !0, S = new s("-", "subtract", [N(1), new s("^", "pow", [y.clone(), N(2)])]);
              break;
            case "asech":
              E = !0, D = !0, S = new s("*", "multiply", [y.clone(), new u("sqrt", [new s("-", "subtract", [N(1), new s("^", "pow", [y.clone(), N(2)])])])]);
              break;
            case "acsch":
              E = !0, D = !0, S = new s("*", "multiply", [new u("abs", [y.clone()]), new u("sqrt", [new s("+", "add", [new s("^", "pow", [y.clone(), N(2)]), N(1)])])]);
              break;
            case "acoth":
              E = !0, D = !0, S = new s("-", "subtract", [N(1), new s("^", "pow", [y.clone(), N(2)])]);
              break;
            case "abs":
              S = new s("/", "divide", [new u(new m("abs"), [y.clone()]), y.clone()]);
              break;
            case "gamma":
            default:
              throw new Error('Cannot process function "' + x.name + '" in derivative: the function is not supported, undefined, or the number of arguments passed to it are not supported')
          }
          var C, M;
          E ? (C = "/", M = "divide") : (C = "*", M = "multiply");
          var $ = g(y, w);
          return D && ($ = new s("-", "unaryMinus", [$])), new s(C, M, [$, S])
        },
        "OperatorNode, Object": function(x, w) {
          if (w[x] !== void 0) return N(0);
          if (x.op === "+") return new s(x.op, x.fn, x.args.map(function(_) {
            return g(_, w)
          }));
          if (x.op === "-") {
            if (x.isUnary()) return new s(x.op, x.fn, [g(x.args[0], w)]);
            if (x.isBinary()) return new s(x.op, x.fn, [g(x.args[0], w), g(x.args[1], w)])
          }
          if (x.op === "*") {
            var y = x.args.filter(function(_) {
              return w[_] !== void 0
            });
            if (y.length > 0) {
              var A = x.args.filter(function(_) {
                  return w[_] === void 0
                }),
                E = A.length === 1 ? A[0] : new s("*", "multiply", A),
                D = y.concat(g(E, w));
              return new s("*", "multiply", D)
            }
            return new s("+", "add", x.args.map(function(_) {
              return new s("*", "multiply", x.args.map(function(T) {
                return T === _ ? g(T, w) : T.clone()
              }))
            }))
          }
          if (x.op === "/" && x.isBinary()) {
            var S = x.args[0],
              C = x.args[1];
            return w[C] !== void 0 ? new s("/", "divide", [g(S, w), C]) : w[S] !== void 0 ? new s("*", "multiply", [new s("-", "unaryMinus", [S]), new s("/", "divide", [g(C, w), new s("^", "pow", [C.clone(), N(2)])])]) : new s("/", "divide", [new s("-", "subtract", [new s("*", "multiply", [g(S, w), C.clone()]), new s("*", "multiply", [S.clone(), g(C, w)])]), new s("^", "pow", [C.clone(), N(2)])])
          }
          if (x.op === "^" && x.isBinary()) {
            var M = x.args[0],
              $ = x.args[1];
            if (w[M] !== void 0) return Qe(M) && (o(M.value) || a(M.value, 1)) ? N(0) : new s("*", "multiply", [x, new s("*", "multiply", [new u("log", [M.clone()]), g($.clone(), w)])]);
            if (w[$] !== void 0) {
              if (Qe($)) {
                if (o($.value)) return N(0);
                if (a($.value, 1)) return g(M, w)
              }
              var I = new s("^", "pow", [M.clone(), new s("-", "subtract", [$, N(1)])]);
              return new s("*", "multiply", [$.clone(), new s("*", "multiply", [g(M, w), I])])
            }
            return new s("*", "multiply", [new s("^", "pow", [M.clone(), $.clone()]), new s("+", "add", [new s("*", "multiply", [g(M, w), new s("/", "divide", [$.clone(), M.clone()])]), new s("*", "multiply", [g($, w), new u("log", [M.clone()])])])])
          }
          throw new Error('Cannot process operator "' + x.op + '" in derivative: the operator is not supported, undefined, or the number of arguments passed to it are not supported')
        }
      });

    function N(h, x) {
      return new c(f(h, x || i.number))
    }
    return d
  }),
  Nf = "rationalize",
  A4 = ["config", "typed", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "parse", "simplifyConstant", "simplifyCore", "simplify", "?bignumber", "?fraction", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode", "ParenthesisNode"],
  E4 = z(Nf, A4, e => {
    var {
      config: r,
      typed: i,
      equal: n,
      isZero: t,
      add: a,
      subtract: o,
      multiply: f,
      divide: c,
      pow: u,
      parse: s,
      simplifyConstant: l,
      simplifyCore: m,
      simplify: v,
      fraction: d,
      bignumber: p,
      mathWithTransform: b,
      matrix: g,
      AccessorNode: N,
      ArrayNode: h,
      ConstantNode: x,
      FunctionNode: w,
      IndexNode: y,
      ObjectNode: A,
      OperatorNode: E,
      SymbolNode: D,
      ParenthesisNode: S
    } = e;

    function C(T) {
      var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        O = $(),
        V = M(T, B, !0, O.firstRules),
        J = V.variables.length,
        Z = {
          exactFractions: !1
        },
        q = {
          exactFractions: !0
        };
      if (T = V.expression, J >= 1) {
        T = I(T);
        var X, ie, Q = !0,
          ee = !1;
        T = v(T, O.firstRules, {}, Z);
        for (var ue; ie = Q ? O.distrDivRules : O.sucDivRules, T = v(T, ie, {}, q), Q = !Q, ue = T.toString(), ue !== X;) ee = !0, X = ue;
        ee && (T = v(T, O.firstRulesAgain, {}, Z)), T = v(T, O.finalRules, {}, Z)
      }
      var re = [],
        ne = {};
      return T.type === "OperatorNode" && T.isBinary() && T.op === "/" ? (J === 1 && (T.args[0] = _(T.args[0], re), T.args[1] = _(T.args[1])), U && (ne.numerator = T.args[0], ne.denominator = T.args[1])) : (J === 1 && (T = _(T, re)), U && (ne.numerator = T, ne.denominator = null)), U ? (ne.coefficients = re, ne.variables = V.variables, ne.expression = T, ne) : T
    }
    return i(Nf, {
      Node: C,
      "Node, boolean": (T, B) => C(T, {}, B),
      "Node, Object": C,
      "Node, Object, boolean": C
    });

    function M(T, B, U, O) {
      var V = [],
        J = v(T, O, B, {
          exactFractions: !1
        });
      U = !!U;
      var Z = "+-*" + (U ? "/" : "");
      X(J);
      var q = {};
      return q.expression = J, q.variables = V, q;

      function X(ie) {
        var Q = ie.type;
        if (Q === "FunctionNode") throw new Error("There is an unsolved function call");
        if (Q === "OperatorNode")
          if (ie.op === "^") {
            if (ie.args[1].type !== "ConstantNode" || !Se(parseFloat(ie.args[1].value))) throw new Error("There is a non-integer exponent");
            X(ie.args[0])
          } else {
            if (Z.indexOf(ie.op) === -1) throw new Error("Operator " + ie.op + " invalid in polynomial expression");
            for (var ee = 0; ee < ie.args.length; ee++) X(ie.args[ee])
          }
        else if (Q === "SymbolNode") {
          var ue = ie.name,
            re = V.indexOf(ue);
          re === -1 && V.push(ue)
        } else if (Q === "ParenthesisNode") X(ie.content);
        else if (Q !== "ConstantNode") throw new Error("type " + Q + " is not allowed in polynomial expression")
      }
    }

    function $() {
      var T = [m, {
          l: "n+n",
          r: "2*n"
        }, {
          l: "n+-n",
          r: "0"
        }, l, {
          l: "n*(n1^-1)",
          r: "n/n1"
        }, {
          l: "n*n1^-n2",
          r: "n/n1^n2"
        }, {
          l: "n1^-1",
          r: "1/n1"
        }, {
          l: "n*(n1/n2)",
          r: "(n*n1)/n2"
        }, {
          l: "1*n",
          r: "n"
        }],
        B = [{
          l: "(-n1)/(-n2)",
          r: "n1/n2"
        }, {
          l: "(-n1)*(-n2)",
          r: "n1*n2"
        }, {
          l: "n1--n2",
          r: "n1+n2"
        }, {
          l: "n1-n2",
          r: "n1+(-n2)"
        }, {
          l: "(n1+n2)*n3",
          r: "(n1*n3 + n2*n3)"
        }, {
          l: "n1*(n2+n3)",
          r: "(n1*n2+n1*n3)"
        }, {
          l: "c1*n + c2*n",
          r: "(c1+c2)*n"
        }, {
          l: "c1*n + n",
          r: "(c1+1)*n"
        }, {
          l: "c1*n - c2*n",
          r: "(c1-c2)*n"
        }, {
          l: "c1*n - n",
          r: "(c1-1)*n"
        }, {
          l: "v/c",
          r: "(1/c)*v"
        }, {
          l: "v/-c",
          r: "-(1/c)*v"
        }, {
          l: "-v*-c",
          r: "c*v"
        }, {
          l: "-v*c",
          r: "-c*v"
        }, {
          l: "v*-c",
          r: "-c*v"
        }, {
          l: "v*c",
          r: "c*v"
        }, {
          l: "-(-n1*n2)",
          r: "(n1*n2)"
        }, {
          l: "-(n1*n2)",
          r: "(-n1*n2)"
        }, {
          l: "-(-n1+n2)",
          r: "(n1-n2)"
        }, {
          l: "-(n1+n2)",
          r: "(-n1-n2)"
        }, {
          l: "(n1^n2)^n3",
          r: "(n1^(n2*n3))"
        }, {
          l: "-(-n1/n2)",
          r: "(n1/n2)"
        }, {
          l: "-(n1/n2)",
          r: "(-n1/n2)"
        }],
        U = [{
          l: "(n1/n2 + n3/n4)",
          r: "((n1*n4 + n3*n2)/(n2*n4))"
        }, {
          l: "(n1/n2 + n3)",
          r: "((n1 + n3*n2)/n2)"
        }, {
          l: "(n1 + n2/n3)",
          r: "((n1*n3 + n2)/n3)"
        }],
        O = [{
          l: "(n1/(n2/n3))",
          r: "((n1*n3)/n2)"
        }, {
          l: "(n1/n2/n3)",
          r: "(n1/(n2*n3))"
        }],
        V = {};
      return V.firstRules = T.concat(B, O), V.distrDivRules = U, V.sucDivRules = O, V.firstRulesAgain = T.concat(B), V.finalRules = [m, {
        l: "n*-n",
        r: "-n^2"
      }, {
        l: "n*n",
        r: "n^2"
      }, l, {
        l: "n*-n^n1",
        r: "-n^(n1+1)"
      }, {
        l: "n*n^n1",
        r: "n^(n1+1)"
      }, {
        l: "n^n1*-n^n2",
        r: "-n^(n1+n2)"
      }, {
        l: "n^n1*n^n2",
        r: "n^(n1+n2)"
      }, {
        l: "n^n1*-n",
        r: "-n^(n1+1)"
      }, {
        l: "n^n1*n",
        r: "n^(n1+1)"
      }, {
        l: "n^n1/-n",
        r: "-n^(n1-1)"
      }, {
        l: "n^n1/n",
        r: "n^(n1-1)"
      }, {
        l: "n/-n^n1",
        r: "-n^(1-n1)"
      }, {
        l: "n/n^n1",
        r: "n^(1-n1)"
      }, {
        l: "n^n1/-n^n2",
        r: "n^(n1-n2)"
      }, {
        l: "n^n1/n^n2",
        r: "n^(n1-n2)"
      }, {
        l: "n1+(-n2*n3)",
        r: "n1-n2*n3"
      }, {
        l: "v*(-c)",
        r: "-c*v"
      }, {
        l: "n1+-n2",
        r: "n1-n2"
      }, {
        l: "v*c",
        r: "c*v"
      }, {
        l: "(n1^n2)^n3",
        r: "(n1^(n2*n3))"
      }], V
    }

    function I(T, B, U) {
      var O = T.type,
        V = arguments.length > 1;
      if (O === "OperatorNode" && T.isBinary()) {
        var J = !1,
          Z;
        if (T.op === "^" && (T.args[0].type === "ParenthesisNode" || T.args[0].type === "OperatorNode") && T.args[1].type === "ConstantNode" && (Z = parseFloat(T.args[1].value), J = Z >= 2 && Se(Z)), J) {
          if (Z > 2) {
            var q = T.args[0],
              X = new E("^", "pow", [T.args[0].cloneDeep(), new x(Z - 1)]);
            T = new E("*", "multiply", [q, X])
          } else T = new E("*", "multiply", [T.args[0], T.args[0].cloneDeep()]);
          V && (U === "content" ? B.content = T : B.args[U] = T)
        }
      }
      if (O === "ParenthesisNode") I(T.content, T, "content");
      else if (O !== "ConstantNode" && O !== "SymbolNode")
        for (var ie = 0; ie < T.args.length; ie++) I(T.args[ie], T, ie);
      if (!V) return T
    }

    function _(T, B) {
      B === void 0 && (B = []), B[0] = 0;
      var U = {};
      U.cte = 1, U.oper = "+", U.fire = "";
      var O = 0,
        V = "";
      ue(T, null, U), O = B.length - 1;
      for (var J = !0, Z, q = O; q >= 0; q--)
        if (B[q] !== 0) {
          var X = new x(J ? B[q] : Math.abs(B[q])),
            ie = B[q] < 0 ? "-" : "+";
          if (q > 0) {
            var Q = new D(V);
            if (q > 1) {
              var ee = new x(q);
              Q = new E("^", "pow", [Q, ee])
            }
            B[q] === -1 && J ? X = new E("-", "unaryMinus", [Q]) : Math.abs(B[q]) === 1 ? X = Q : X = new E("*", "multiply", [X, Q])
          }
          J ? Z = X : ie === "+" ? Z = new E("+", "add", [Z, X]) : Z = new E("-", "subtract", [Z, X]), J = !1
        } if (J) return new x(0);
      return Z;

      function ue(re, ne, le) {
        var se = re.type;
        if (se === "FunctionNode") throw new Error("There is an unsolved function call");
        if (se === "OperatorNode") {
          if ("+-*^".indexOf(re.op) === -1) throw new Error("Operator " + re.op + " invalid");
          if (ne !== null) {
            if ((re.fn === "unaryMinus" || re.fn === "pow") && ne.fn !== "add" && ne.fn !== "subtract" && ne.fn !== "multiply") throw new Error("Invalid " + re.op + " placing");
            if ((re.fn === "subtract" || re.fn === "add" || re.fn === "multiply") && ne.fn !== "add" && ne.fn !== "subtract") throw new Error("Invalid " + re.op + " placing");
            if ((re.fn === "subtract" || re.fn === "add" || re.fn === "unaryMinus") && le.noFil !== 0) throw new Error("Invalid " + re.op + " placing")
          }(re.op === "^" || re.op === "*") && (le.fire = re.op);
          for (var ge = 0; ge < re.args.length; ge++) re.fn === "unaryMinus" && (le.oper = "-"), (re.op === "+" || re.fn === "subtract") && (le.fire = "", le.cte = 1, le.oper = ge === 0 ? "+" : re.op), le.noFil = ge, ue(re.args[ge], re, le)
        } else if (se === "SymbolNode") {
          if (re.name !== V && V !== "") throw new Error("There is more than one variable");
          if (V = re.name, ne === null) {
            B[1] = 1;
            return
          }
          if (ne.op === "^" && le.noFil !== 0) throw new Error("In power the variable should be the first parameter");
          if (ne.op === "*" && le.noFil !== 1) throw new Error("In multiply the variable should be the second parameter");
          (le.fire === "" || le.fire === "*") && (O < 1 && (B[1] = 0), B[1] += le.cte * (le.oper === "+" ? 1 : -1), O = Math.max(1, O))
        } else if (se === "ConstantNode") {
          var Ae = parseFloat(re.value);
          if (ne === null) {
            B[0] = Ae;
            return
          }
          if (ne.op === "^") {
            if (le.noFil !== 1) throw new Error("Constant cannot be powered");
            if (!Se(Ae) || Ae <= 0) throw new Error("Non-integer exponent is not allowed");
            for (var P = O + 1; P < Ae; P++) B[P] = 0;
            Ae > O && (B[Ae] = 0), B[Ae] += le.cte * (le.oper === "+" ? 1 : -1), O = Math.max(Ae, O);
            return
          }
          le.cte = Ae, le.fire === "" && (B[0] += le.cte * (le.oper === "+" ? 1 : -1))
        } else throw new Error("Type " + se + " is not allowed")
      }
    }
  }),
  Df = "zpk2tf",
  S4 = ["typed", "add", "multiply", "Complex", "number"],
  C4 = z(Df, S4, e => {
    var {
      typed: r,
      add: i,
      multiply: n,
      Complex: t,
      number: a
    } = e;
    return r(Df, {
      "Array,Array,number": function(u, s, l) {
        return o(u, s, l)
      },
      "Array,Array": function(u, s) {
        return o(u, s, 1)
      },
      "Matrix,Matrix,number": function(u, s, l) {
        return o(u.valueOf(), s.valueOf(), l)
      },
      "Matrix,Matrix": function(u, s) {
        return o(u.valueOf(), s.valueOf(), 1)
      }
    });

    function o(c, u, s) {
      c.some(N => N.type === "BigNumber") && (c = c.map(N => a(N))), u.some(N => N.type === "BigNumber") && (u = u.map(N => a(N)));
      for (var l = [t(1, 0)], m = [t(1, 0)], v = 0; v < c.length; v++) {
        var d = c[v];
        typeof d == "number" && (d = t(d, 0)), l = f(l, [t(1, 0), t(-d.re, -d.im)])
      }
      for (var p = 0; p < u.length; p++) {
        var b = u[p];
        typeof b == "number" && (b = t(b, 0)), m = f(m, [t(1, 0), t(-b.re, -b.im)])
      }
      for (var g = 0; g < l.length; g++) l[g] = n(l[g], s);
      return [l, m]
    }

    function f(c, u) {
      for (var s = [], l = 0; l < c.length + u.length - 1; l++) {
        s[l] = t(0, 0);
        for (var m = 0; m < c.length; m++) l - m >= 0 && l - m < u.length && (s[l] = i(s[l], n(c[m], u[l - m])))
      }
      return s
    }
  }),
  Af = "freqz",
  M4 = ["typed", "add", "multiply", "Complex", "divide", "matrix"],
  F4 = z(Af, M4, e => {
    var {
      typed: r,
      add: i,
      multiply: n,
      Complex: t,
      divide: a,
      matrix: o
    } = e;
    return r(Af, {
      "Array, Array": function(s, l) {
        var m = c(512);
        return f(s, l, m)
      },
      "Array, Array, Array": function(s, l, m) {
        return f(s, l, m)
      },
      "Array, Array, number": function(s, l, m) {
        if (m < 0) throw new Error("w must be a positive number");
        var v = c(m);
        return f(s, l, v)
      },
      "Matrix, Matrix": function(s, l) {
        var m = c(512),
          {
            w: v,
            h: d
          } = f(s.valueOf(), l.valueOf(), m);
        return {
          w: o(v),
          h: o(d)
        }
      },
      "Matrix, Matrix, Matrix": function(s, l, m) {
        var {
          h: v
        } = f(s.valueOf(), l.valueOf(), m.valueOf());
        return {
          h: o(v),
          w: o(m)
        }
      },
      "Matrix, Matrix, number": function(s, l, m) {
        if (m < 0) throw new Error("w must be a positive number");
        var v = c(m),
          {
            h: d
          } = f(s.valueOf(), l.valueOf(), v);
        return {
          h: o(d),
          w: o(v)
        }
      }
    });

    function f(u, s, l) {
      for (var m = [], v = [], d = 0; d < l.length; d++) {
        for (var p = t(0, 0), b = t(0, 0), g = 0; g < u.length; g++) p = i(p, n(u[g], t(Math.cos(-g * l[d]), Math.sin(-g * l[d]))));
        for (var N = 0; N < s.length; N++) b = i(b, n(s[N], t(Math.cos(-N * l[d]), Math.sin(-N * l[d]))));
        m.push(p), v.push(b)
      }
      for (var h = [], x = 0; x < m.length; x++) h.push(a(m[x], v[x]));
      return {
        h,
        w: l
      }
    }

    function c(u) {
      for (var s = [], l = 0; l < u; l++) s.push(l / u * Math.PI);
      return s
    }
  }),
  B4 = "reviver",
  T4 = ["classes"],
  O4 = z(B4, T4, e => {
    var {
      classes: r
    } = e;
    return function(n, t) {
      var a = r[t && t.mathjs];
      return a && typeof a.fromJSON == "function" ? a.fromJSON(t) : t
    }
  }),
  $4 = "replacer",
  _4 = [],
  I4 = z($4, _4, () => function(r, i) {
    return typeof i == "number" && (!isFinite(i) || isNaN(i)) ? {
      mathjs: "number",
      value: String(i)
    } : i
  }),
  q4 = "12.1.0",
  R4 = z("true", [], () => !0),
  z4 = z("false", [], () => !1),
  P4 = z("null", [], () => null),
  U4 = Hr("Infinity", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? new i(1 / 0) : 1 / 0
  }),
  L4 = Hr("NaN", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? new i(NaN) : NaN
  }),
  k4 = Hr("pi", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? Mo(i) : X0
  }),
  H4 = Hr("tau", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? DN(i) : J0
  }),
  G4 = Hr("e", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? wN(i) : K0
  }),
  V4 = Hr("phi", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? NN(i) : j0
  }),
  Z4 = Hr("LN2", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? new i(2).ln() : Math.LN2
  }),
  Y4 = Hr("LN10", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? new i(10).ln() : Math.LN10
  }),
  W4 = Hr("LOG2E", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? new i(1).div(new i(2).ln()) : Math.LOG2E
  }),
  Q4 = Hr("LOG10E", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? new i(1).div(new i(10).ln()) : Math.LOG10E
  }),
  X4 = Hr("SQRT1_2", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? new i("0.5").sqrt() : Math.SQRT1_2
  }),
  J4 = Hr("SQRT2", ["config", "?BigNumber"], e => {
    var {
      config: r,
      BigNumber: i
    } = e;
    return r.number === "BigNumber" ? new i(2).sqrt() : Math.SQRT2
  }),
  K4 = Hr("i", ["Complex"], e => {
    var {
      Complex: r
    } = e;
    return r.I
  }),
  j4 = z("version", [], () => q4);

function Hr(e, r, i) {
  return z(e, r, i, {
    recreateOnConfigChange: !0
  })
}
var eB = Ie("speedOfLight", "299792458", "m s^-1"),
  rB = Ie("gravitationConstant", "6.67430e-11", "m^3 kg^-1 s^-2"),
  tB = Ie("planckConstant", "6.62607015e-34", "J s"),
  nB = Ie("reducedPlanckConstant", "1.0545718176461565e-34", "J s"),
  aB = Ie("magneticConstant", "1.25663706212e-6", "N A^-2"),
  iB = Ie("electricConstant", "8.8541878128e-12", "F m^-1"),
  oB = Ie("vacuumImpedance", "376.730313667", "ohm"),
  sB = Ie("coulomb", "8.987551792261171e9", "N m^2 C^-2"),
  uB = Ie("elementaryCharge", "1.602176634e-19", "C"),
  lB = Ie("bohrMagneton", "9.2740100783e-24", "J T^-1"),
  cB = Ie("conductanceQuantum", "7.748091729863649e-5", "S"),
  fB = Ie("inverseConductanceQuantum", "12906.403729652257", "ohm"),
  mB = Ie("magneticFluxQuantum", "2.0678338484619295e-15", "Wb"),
  vB = Ie("nuclearMagneton", "5.0507837461e-27", "J T^-1"),
  pB = Ie("klitzing", "25812.807459304513", "ohm"),
  dB = Ie("bohrRadius", "5.29177210903e-11", "m"),
  hB = Ie("classicalElectronRadius", "2.8179403262e-15", "m"),
  gB = Ie("electronMass", "9.1093837015e-31", "kg"),
  yB = Ie("fermiCoupling", "1.1663787e-5", "GeV^-2"),
  bB = Ai("fineStructure", .0072973525693),
  xB = Ie("hartreeEnergy", "4.3597447222071e-18", "J"),
  wB = Ie("protonMass", "1.67262192369e-27", "kg"),
  NB = Ie("deuteronMass", "3.3435830926e-27", "kg"),
  DB = Ie("neutronMass", "1.6749271613e-27", "kg"),
  AB = Ie("quantumOfCirculation", "3.6369475516e-4", "m^2 s^-1"),
  EB = Ie("rydberg", "10973731.568160", "m^-1"),
  SB = Ie("thomsonCrossSection", "6.6524587321e-29", "m^2"),
  CB = Ai("weakMixingAngle", .2229),
  MB = Ai("efimovFactor", 22.7),
  FB = Ie("atomicMass", "1.66053906660e-27", "kg"),
  BB = Ie("avogadro", "6.02214076e23", "mol^-1"),
  TB = Ie("boltzmann", "1.380649e-23", "J K^-1"),
  OB = Ie("faraday", "96485.33212331001", "C mol^-1"),
  $B = Ie("firstRadiation", "3.7417718521927573e-16", "W m^2"),
  _B = Ie("loschmidt", "2.686780111798444e25", "m^-3"),
  IB = Ie("gasConstant", "8.31446261815324", "J K^-1 mol^-1"),
  qB = Ie("molarPlanckConstant", "3.990312712893431e-10", "J s mol^-1"),
  RB = Ie("molarVolume", "0.022413969545014137", "m^3 mol^-1"),
  zB = Ai("sackurTetrode", -1.16487052358),
  PB = Ie("secondRadiation", "0.014387768775039337", "m K"),
  UB = Ie("stefanBoltzmann", "5.67037441918443e-8", "W m^-2 K^-4"),
  LB = Ie("wienDisplacement", "2.897771955e-3", "m K"),
  kB = Ie("molarMass", "0.99999999965e-3", "kg mol^-1"),
  HB = Ie("molarMassC12", "11.9999999958e-3", "kg mol^-1"),
  GB = Ie("gravity", "9.80665", "m s^-2"),
  VB = Ie("planckLength", "1.616255e-35", "m"),
  ZB = Ie("planckMass", "2.176435e-8", "kg"),
  YB = Ie("planckTime", "5.391245e-44", "s"),
  WB = Ie("planckCharge", "1.87554603778e-18", "C"),
  QB = Ie("planckTemperature", "1.416785e+32", "K");

function Ie(e, r, i) {
  var n = ["config", "Unit", "BigNumber"];
  return z(e, n, t => {
    var {
      config: a,
      Unit: o,
      BigNumber: f
    } = t, c = a.number === "BigNumber" ? new f(r) : parseFloat(r), u = new o(c, i);
    return u.fixPrefix = !0, u
  })
}

function Ai(e, r) {
  var i = ["config", "BigNumber"];
  return z(e, i, n => {
    var {
      config: t,
      BigNumber: a
    } = n;
    return t.number === "BigNumber" ? new a(r) : r
  })
}
var XB = "apply",
  JB = ["typed", "isInteger"],
  KB = z(XB, JB, e => {
    var {
      typed: r,
      isInteger: i
    } = e, n = No({
      typed: r,
      isInteger: i
    });
    return r("apply", {
      "...any": function(a) {
        var o = a[1];
        Pe(o) ? a[1] = o - 1 : He(o) && (a[1] = o.minus(1));
        try {
          return n.apply(null, a)
        } catch (f) {
          throw Ir(f)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  jB = "column",
  eT = ["typed", "Index", "matrix", "range"],
  rT = z(jB, eT, e => {
    var {
      typed: r,
      Index: i,
      matrix: n,
      range: t
    } = e, a = xv({
      typed: r,
      Index: i,
      matrix: n,
      range: t
    });
    return r("column", {
      "...any": function(f) {
        var c = f.length - 1,
          u = f[c];
        Pe(u) && (f[c] = u - 1);
        try {
          return a.apply(null, f)
        } catch (s) {
          throw Ir(s)
        }
      }
    })
  }, {
    isTransformFunction: !0
  });

function Ro(e, r, i) {
  var n = e.filter(function(f) {
    return yr(f) && !(f.name in r) && !i.has(f.name)
  })[0];
  if (!n) throw new Error('No undefined variable found in inline expression "' + e + '"');
  var t = n.name,
    a = jn(i),
    o = e.compile();
  return function(c) {
    return a.set(t, c), o.evaluate(a)
  }
}
var tT = "filter",
  nT = ["typed"],
  aT = z(tT, nT, e => {
    var {
      typed: r
    } = e;

    function i(t, a, o) {
      var f, c;
      return t[0] && (f = t[0].compile().evaluate(o)), t[1] && (yr(t[1]) || sa(t[1]) ? c = t[1].compile().evaluate(o) : c = Ro(t[1], a, o)), n(f, c)
    }
    i.rawArgs = !0;
    var n = r("filter", {
      "Array, function": Ef,
      "Matrix, function": function(a, o) {
        return a.create(Ef(a.toArray(), o))
      },
      "Array, RegExp": Ga,
      "Matrix, RegExp": function(a, o) {
        return a.create(Ga(a.toArray(), o))
      }
    });
    return i
  }, {
    isTransformFunction: !0
  });

function Ef(e, r) {
  return em(e, function(i, n, t) {
    return Rn(r, i, [n + 1], t, "filter")
  })
}
var iT = "forEach",
  oT = ["typed"],
  sT = z(iT, oT, e => {
    var {
      typed: r
    } = e;

    function i(t, a, o) {
      var f, c;
      return t[0] && (f = t[0].compile().evaluate(o)), t[1] && (yr(t[1]) || sa(t[1]) ? c = t[1].compile().evaluate(o) : c = Ro(t[1], a, o)), n(f, c)
    }
    i.rawArgs = !0;
    var n = r("forEach", {
      "Array | Matrix, function": function(a, o) {
        var f = function c(u, s) {
          if (Array.isArray(u)) di(u, function(l, m) {
            c(l, s.concat(m + 1))
          });
          else return Rn(o, u, s, a, "forEach")
        };
        f(a.valueOf(), [])
      }
    });
    return i
  }, {
    isTransformFunction: !0
  }),
  uT = "index",
  lT = ["Index", "getMatrixDataType"],
  cT = z(uT, lT, e => {
    var {
      Index: r,
      getMatrixDataType: i
    } = e;
    return function() {
      for (var t = [], a = 0, o = arguments.length; a < o; a++) {
        var f = arguments[a];
        if (vo(f)) f.start--, f.end -= f.step > 0 ? 0 : 2;
        else if (f && f.isSet === !0) f = f.map(function(u) {
          return u - 1
        });
        else if (Je(f) || Fe(f)) i(f) !== "boolean" && (f = f.map(function(u) {
          return u - 1
        }));
        else if (Pe(f)) f--;
        else if (He(f)) f = f.toNumber() - 1;
        else if (typeof f != "string") throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
        t[a] = f
      }
      var c = new r;
      return r.apply(c, t), c
    }
  }, {
    isTransformFunction: !0
  }),
  fT = "map",
  mT = ["typed"],
  vT = z(fT, mT, e => {
    var {
      typed: r
    } = e;

    function i(t, a, o) {
      var f, c;
      return t[0] && (f = t[0].compile().evaluate(o)), t[1] && (yr(t[1]) || sa(t[1]) ? c = t[1].compile().evaluate(o) : c = Ro(t[1], a, o)), n(f, c)
    }
    i.rawArgs = !0;
    var n = r("map", {
      "Array, function": function(a, o) {
        return Sf(a, o, a)
      },
      "Matrix, function": function(a, o) {
        return a.create(Sf(a.valueOf(), o, a))
      }
    });
    return i
  }, {
    isTransformFunction: !0
  });

function Sf(e, r, i) {
  function n(t, a) {
    return Array.isArray(t) ? At(t, function(o, f) {
      return n(o, a.concat(f + 1))
    }) : Rn(r, t, a, i, "map")
  }
  return n(e, [])
}

function kt(e) {
  if (e.length === 2 && qt(e[0])) {
    e = e.slice();
    var r = e[1];
    Pe(r) ? e[1] = r - 1 : He(r) && (e[1] = r.minus(1))
  }
  return e
}
var pT = "max",
  dT = ["typed", "config", "numeric", "larger"],
  hT = z(pT, dT, e => {
    var {
      typed: r,
      config: i,
      numeric: n,
      larger: t
    } = e, a = Fv({
      typed: r,
      config: i,
      numeric: n,
      larger: t
    });
    return r("max", {
      "...any": function(f) {
        f = kt(f);
        try {
          return a.apply(null, f)
        } catch (c) {
          throw Ir(c)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  gT = "mean",
  yT = ["typed", "add", "divide"],
  bT = z(gT, yT, e => {
    var {
      typed: r,
      add: i,
      divide: n
    } = e, t = zv({
      typed: r,
      add: i,
      divide: n
    });
    return r("mean", {
      "...any": function(o) {
        o = kt(o);
        try {
          return t.apply(null, o)
        } catch (f) {
          throw Ir(f)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  xT = "min",
  wT = ["typed", "config", "numeric", "smaller"],
  NT = z(xT, wT, e => {
    var {
      typed: r,
      config: i,
      numeric: n,
      smaller: t
    } = e, a = Bv({
      typed: r,
      config: i,
      numeric: n,
      smaller: t
    });
    return r("min", {
      "...any": function(f) {
        f = kt(f);
        try {
          return a.apply(null, f)
        } catch (c) {
          throw Ir(c)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  DT = "range",
  AT = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq", "add", "isPositive"],
  ET = z(DT, AT, e => {
    var {
      typed: r,
      config: i,
      matrix: n,
      bignumber: t,
      smaller: a,
      smallerEq: o,
      larger: f,
      largerEq: c,
      add: u,
      isPositive: s
    } = e, l = Av({
      typed: r,
      config: i,
      matrix: n,
      bignumber: t,
      smaller: a,
      smallerEq: o,
      larger: f,
      largerEq: c,
      add: u,
      isPositive: s
    });
    return r("range", {
      "...any": function(v) {
        var d = v.length - 1,
          p = v[d];
        return typeof p != "boolean" && v.push(!0), l.apply(null, v)
      }
    })
  }, {
    isTransformFunction: !0
  }),
  ST = "row",
  CT = ["typed", "Index", "matrix", "range"],
  MT = z(ST, CT, e => {
    var {
      typed: r,
      Index: i,
      matrix: n,
      range: t
    } = e, a = Ev({
      typed: r,
      Index: i,
      matrix: n,
      range: t
    });
    return r("row", {
      "...any": function(f) {
        var c = f.length - 1,
          u = f[c];
        Pe(u) && (f[c] = u - 1);
        try {
          return a.apply(null, f)
        } catch (s) {
          throw Ir(s)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  FT = "subset",
  BT = ["typed", "matrix", "zeros", "add"],
  TT = z(FT, BT, e => {
    var {
      typed: r,
      matrix: i,
      zeros: n,
      add: t
    } = e, a = Sv({
      typed: r,
      matrix: i,
      zeros: n,
      add: t
    });
    return r("subset", {
      "...any": function(f) {
        try {
          return a.apply(null, f)
        } catch (c) {
          throw Ir(c)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  OT = "concat",
  $T = ["typed", "matrix", "isInteger"],
  _T = z(OT, $T, e => {
    var {
      typed: r,
      matrix: i,
      isInteger: n
    } = e, t = bv({
      typed: r,
      matrix: i,
      isInteger: n
    });
    return r("concat", {
      "...any": function(o) {
        var f = o.length - 1,
          c = o[f];
        Pe(c) ? o[f] = c - 1 : He(c) && (o[f] = c.minus(1));
        try {
          return t.apply(null, o)
        } catch (u) {
          throw Ir(u)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  Cf = "diff",
  IT = ["typed", "matrix", "subtract", "number", "bignumber"],
  qT = z(Cf, IT, e => {
    var {
      typed: r,
      matrix: i,
      subtract: n,
      number: t,
      bignumber: a
    } = e, o = wv({
      typed: r,
      matrix: i,
      subtract: n,
      number: t,
      bignumber: a
    });
    return r(Cf, {
      "...any": function(c) {
        c = kt(c);
        try {
          return o.apply(null, c)
        } catch (u) {
          throw Ir(u)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  RT = "std",
  zT = ["typed", "map", "sqrt", "variance"],
  PT = z(RT, zT, e => {
    var {
      typed: r,
      map: i,
      sqrt: n,
      variance: t
    } = e, a = Lv({
      typed: r,
      map: i,
      sqrt: n,
      variance: t
    });
    return r("std", {
      "...any": function(f) {
        f = kt(f);
        try {
          return a.apply(null, f)
        } catch (c) {
          throw Ir(c)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  Mf = "sum",
  UT = ["typed", "config", "add", "numeric"],
  LT = z(Mf, UT, e => {
    var {
      typed: r,
      config: i,
      add: n,
      numeric: t
    } = e, a = qv({
      typed: r,
      config: i,
      add: n,
      numeric: t
    });
    return r(Mf, {
      "...any": function(f) {
        f = kt(f);
        try {
          return a.apply(null, f)
        } catch (c) {
          throw Ir(c)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  kT = "quantileSeq",
  HT = ["typed", "bignumber", "add", "subtract", "divide", "multiply", "partitionSelect", "compare", "isInteger", "smaller", "smallerEq", "larger"],
  GT = z(kT, HT, e => {
    var {
      typed: r,
      bignumber: i,
      add: n,
      subtract: t,
      divide: a,
      multiply: o,
      partitionSelect: f,
      compare: c,
      isInteger: u,
      smaller: s,
      smallerEq: l,
      larger: m
    } = e, v = Uv({
      typed: r,
      bignumber: i,
      add: n,
      subtract: t,
      divide: a,
      multiply: o,
      partitionSelect: f,
      compare: c,
      isInteger: u,
      smaller: s,
      smallerEq: l,
      larger: m
    });
    return r("quantileSeq", {
      "Array | Matrix, number | BigNumber": v,
      "Array | Matrix, number | BigNumber, number": (p, b, g) => v(p, b, d(g)),
      "Array | Matrix, number | BigNumber, boolean": v,
      "Array | Matrix, number | BigNumber, boolean, number": (p, b, g, N) => v(p, b, g, d(N)),
      "Array | Matrix, Array | Matrix": v,
      "Array | Matrix, Array | Matrix, number": (p, b, g) => v(p, b, d(g)),
      "Array | Matrix, Array | Matrix, boolean": v,
      "Array | Matrix, Array | Matrix, boolean, number": (p, b, g, N) => v(p, b, g, d(N))
    });

    function d(p) {
      return kt([
        [], p
      ])[1]
    }
  }, {
    isTransformFunction: !0
  }),
  Ff = "cumsum",
  VT = ["typed", "add", "unaryPlus"],
  ZT = z(Ff, VT, e => {
    var {
      typed: r,
      add: i,
      unaryPlus: n
    } = e, t = Rv({
      typed: r,
      add: i,
      unaryPlus: n
    });
    return r(Ff, {
      "...any": function(o) {
        if (o.length === 2 && qt(o[0])) {
          var f = o[1];
          Pe(f) ? o[1] = f - 1 : He(f) && (o[1] = f.minus(1))
        }
        try {
          return t.apply(null, o)
        } catch (c) {
          throw Ir(c)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  Bf = "variance",
  YT = ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"],
  WT = z(Bf, YT, e => {
    var {
      typed: r,
      add: i,
      subtract: n,
      multiply: t,
      divide: a,
      apply: o,
      isNaN: f
    } = e, c = Pv({
      typed: r,
      add: i,
      subtract: n,
      multiply: t,
      divide: a,
      apply: o,
      isNaN: f
    });
    return r(Bf, {
      "...any": function(s) {
        s = kt(s);
        try {
          return c.apply(null, s)
        } catch (l) {
          throw Ir(l)
        }
      }
    })
  }, {
    isTransformFunction: !0
  }),
  Tf = "print",
  QT = ["typed", "matrix", "zeros", "add"],
  XT = z(Tf, QT, e => {
    var {
      typed: r,
      matrix: i,
      zeros: n,
      add: t
    } = e, a = Mv({
      typed: r,
      matrix: i,
      zeros: n,
      add: t
    });
    return r(Tf, {
      "string, Object | Array": function(c, u) {
        return a(o(c), u)
      },
      "string, Object | Array, number | Object": function(c, u, s) {
        return a(o(c), u, s)
      }
    });

    function o(f) {
      return f.replace(Cv, c => {
        var u = c.slice(1).split("."),
          s = u.map(function(l) {
            return !isNaN(l) && l.length > 0 ? parseInt(l) - 1 : l
          });
        return "$" + s.join(".")
      })
    }
  }, {
    isTransformFunction: !0
  }),
  Ne = A0({
    config: pe
  }),
  ir = F0({}),
  Of = G4({
    BigNumber: Ne,
    config: pe
  }),
  JT = z4({}),
  KT = bB({
    BigNumber: Ne,
    config: pe
  }),
  en = $0({}),
  Gv = K4({
    Complex: ir
  }),
  jT = U4({
    BigNumber: Ne,
    config: pe
  }),
  eO = Y4({
    BigNumber: Ne,
    config: pe
  }),
  rO = Q4({
    BigNumber: Ne,
    config: pe
  }),
  Ei = P0({}),
  tO = L4({
    BigNumber: Ne,
    config: pe
  }),
  nO = P4({}),
  aO = V4({
    BigNumber: Ne,
    config: pe
  }),
  iO = q0({}),
  Vv = Mh({}),
  oO = X4({
    BigNumber: Ne,
    config: pe
  }),
  sO = zB({
    BigNumber: Ne,
    config: pe
  }),
  Zv = H4({
    BigNumber: Ne,
    config: pe
  }),
  uO = R4({}),
  lO = j4({}),
  ke = H0({
    Matrix: Ei
  }),
  cO = MB({
    BigNumber: Ne,
    config: pe
  }),
  fO = Z4({
    BigNumber: Ne,
    config: pe
  }),
  so = k4({
    BigNumber: Ne,
    config: pe
  }),
  mO = I4({}),
  vO = J4({
    BigNumber: Ne,
    config: pe
  }),
  G = Ah({
    BigNumber: Ne,
    Complex: ir,
    DenseMatrix: ke,
    Fraction: en
  }),
  zo = e1({
    BigNumber: Ne,
    config: pe,
    typed: G
  }),
  pO = CB({
    BigNumber: Ne,
    config: pe
  }),
  qr = t1({
    typed: G
  }),
  dO = _N({
    Complex: ir,
    config: pe,
    typed: G
  }),
  hO = zN({
    BigNumber: Ne,
    typed: G
  }),
  gO = kN({
    BigNumber: Ne,
    Complex: ir,
    config: pe,
    typed: G
  }),
  gr = o1({
    typed: G
  }),
  yO = Qy({
    typed: G
  }),
  bO = WN({
    BigNumber: Ne,
    Complex: ir,
    config: pe,
    typed: G
  }),
  xO = jN({
    typed: G
  }),
  Yv = t2({
    typed: G
  }),
  wO = o2({
    Complex: ir,
    config: pe,
    typed: G
  }),
  Lr = _g({
    BigNumber: Ne,
    typed: G
  }),
  NO = Ly({
    typed: G
  }),
  DO = Tg({
    typed: G
  }),
  AO = V0({
    typed: G
  }),
  Si = mF({
    typed: G
  }),
  Ci = Rg({
    Complex: ir,
    typed: G
  }),
  rn = Jy({
    typed: G
  }),
  Po = u2({
    typed: G
  }),
  EO = m2({
    BigNumber: Ne,
    typed: G
  }),
  SO = h2({
    BigNumber: Ne,
    typed: G
  }),
  CO = w1({
    typed: G
  }),
  Ye = bg({
    config: pe,
    typed: G
  }),
  MO = xx({
    typed: G
  }),
  Wv = D1({
    typed: G
  }),
  FO = E1({
    Complex: ir,
    typed: G
  }),
  BO = yb({
    typed: G
  }),
  TO = Nb({
    typed: G
  }),
  fa = Tx({
    typed: G
  }),
  Uo = Eb({
    typed: G
  }),
  OO = Rx({
    format: fa,
    typed: G
  }),
  Lo = jy({
    typed: G
  }),
  zr = Y0({
    typed: G
  }),
  Ht = ag({
    typed: G
  }),
  tn = cg({
    typed: G
  }),
  lt = mg({
    typed: G
  }),
  $O = W4({
    BigNumber: Ne,
    config: pe
  }),
  _O = yF({
    Complex: ir,
    typed: G
  }),
  IO = oy({
    Complex: ir,
    config: pe,
    typed: G
  }),
  Qv = uy({
    Complex: ir,
    config: pe,
    typed: G
  }),
  nn = Tb({
    typed: G
  }),
  fr = fy({
    typed: G
  }),
  Xv = nb({
    typed: G
  }),
  Mt = Cg({
    typed: G
  }),
  qO = Ix({
    format: fa,
    typed: G
  }),
  RO = ZF({
    config: pe,
    typed: G
  }),
  zO = Mv({
    typed: G
  }),
  PO = WF({
    config: pe,
    typed: G
  }),
  ko = rb({
    typed: G
  }),
  UO = x2({
    BigNumber: Ne,
    typed: G
  }),
  Jv = gy({
    BigNumber: Ne,
    Fraction: en,
    complex: Ci,
    typed: G
  }),
  Mi = A2({
    typed: G
  }),
  Ft = Ng({
    Matrix: Ei,
    equalScalar: Ye,
    typed: G
  }),
  LO = Xg({
    typed: G
  }),
  kO = Ny({
    typed: G
  }),
  HO = Fg({
    typed: G
  }),
  Xr = u1({
    typed: G
  }),
  GO = M2({
    typed: G
  }),
  Kv = hg({
    typed: G
  }),
  VO = qN({
    Complex: ir,
    config: pe,
    typed: G
  }),
  ZO = GN({
    BigNumber: Ne,
    typed: G
  }),
  Ho = No({
    isInteger: zr,
    typed: G
  }),
  YO = ZN({
    BigNumber: Ne,
    Complex: ir,
    config: pe,
    typed: G
  }),
  WO = $x({
    format: fa,
    typed: G
  }),
  QO = pF({
    typed: G
  }),
  XO = c2({
    typed: G
  }),
  JO = y2({
    BigNumber: Ne,
    typed: G
  }),
  ma = pg({
    typed: G
  }),
  KO = kx({
    typed: G
  }),
  jO = XF({
    config: pe,
    typed: G
  }),
  e5 = N2({
    BigNumber: Ne,
    typed: G
  }),
  r5 = S2({
    typed: G
  }),
  t5 = BN({
    SparseMatrix: Ft,
    typed: G
  }),
  ct = xy({
    Complex: ir,
    config: pe,
    typed: G
  }),
  n5 = T2({
    typed: G
  }),
  gt = Kg({
    typed: G
  }),
  a5 = UN({
    BigNumber: Ne,
    Complex: ir,
    config: pe,
    typed: G
  }),
  i5 = p2({
    BigNumber: Ne,
    typed: G
  }),
  Pn = Ug({
    Fraction: en,
    typed: G
  }),
  an = og({
    typed: G
  }),
  we = kg({
    DenseMatrix: ke,
    Matrix: Ei,
    SparseMatrix: Ft,
    typed: G
  }),
  o5 = Gg({
    isZero: lt,
    matrix: we,
    typed: G
  }),
  s5 = Cx({
    isNaN: ma,
    isNumeric: an,
    typed: G
  }),
  at = Vx({
    bignumber: Lr,
    fraction: Pn,
    number: Mt
  }),
  jv = Fx({
    config: pe,
    multiplyScalar: fr,
    numeric: at,
    typed: G
  }),
  ep = Pb({
    isInteger: zr,
    matrix: we,
    typed: G
  }),
  Dr = Qb({
    matrix: we,
    config: pe,
    typed: G
  }),
  u5 = Jb({
    matrix: we,
    typed: G
  }),
  va = nx({
    matrix: we,
    typed: G
  }),
  rp = Sy({
    BigNumber: Ne,
    config: pe,
    matrix: we,
    typed: G
  }),
  $r = sx({
    BigNumber: Ne,
    config: pe,
    matrix: we,
    typed: G
  }),
  l5 = XN({
    Complex: ir,
    config: pe,
    typed: G
  }),
  tp = c1({
    BigNumber: Ne,
    Complex: ir,
    Fraction: en,
    config: pe,
    isNegative: Ht,
    matrix: we,
    typed: G,
    unaryMinus: gt
  }),
  je = bv({
    isInteger: zr,
    matrix: we,
    typed: G
  }),
  c5 = fb({
    prod: jv,
    size: Dr,
    typed: G
  }),
  Go = ix({
    conj: rn,
    transpose: va,
    typed: G
  }),
  np = db({
    DenseMatrix: ke,
    SparseMatrix: Ft,
    matrix: we,
    typed: G
  }),
  ur = Yx({
    numeric: at,
    typed: G
  }),
  pa = sw({
    DenseMatrix: ke,
    concat: je,
    divideScalar: ur,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  Jr = qw({
    DenseMatrix: ke,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  da = xb({
    matrix: we,
    typed: G
  }),
  f5 = ug({
    isNumeric: an,
    typed: G
  }),
  Gt = Cb({
    BigNumber: Ne,
    DenseMatrix: ke,
    SparseMatrix: Ft,
    config: pe,
    matrix: we,
    typed: G
  }),
  m5 = Fb({
    matrix: we,
    multiplyScalar: fr,
    typed: G
  }),
  Fi = Xw({
    DenseMatrix: ke,
    concat: je,
    config: pe,
    matrix: we,
    typed: G
  }),
  v5 = bw({
    DenseMatrix: ke,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G,
    zeros: $r
  }),
  ap = lw({
    DenseMatrix: ke,
    divideScalar: ur,
    equalScalar: Ye,
    matrix: we,
    multiplyScalar: fr,
    subtractScalar: Xr,
    typed: G
  }),
  Vo = Wg({
    flatten: da,
    matrix: we,
    size: Dr,
    typed: G
  }),
  p5 = dy({
    BigNumber: Ne,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  d5 = qb({
    BigNumber: Ne,
    config: pe,
    matrix: we,
    typed: G
  }),
  Zo = vA({
    addScalar: gr,
    complex: Ci,
    conj: rn,
    divideScalar: ur,
    equal: Jr,
    identity: Gt,
    isZero: lt,
    matrix: we,
    multiplyScalar: fr,
    sign: Jv,
    sqrt: ct,
    subtractScalar: Xr,
    typed: G,
    unaryMinus: gt,
    zeros: $r
  }),
  h5 = kb({
    config: pe,
    matrix: we
  }),
  g5 = ww({
    DenseMatrix: ke,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G,
    zeros: $r
  }),
  Un = Jx({
    BigNumber: Ne,
    DenseMatrix: ke,
    equalScalar: Ye,
    matrix: we,
    typed: G,
    zeros: $r
  }),
  Br = Lw({
    DenseMatrix: ke,
    concat: je,
    config: pe,
    matrix: we,
    typed: G
  }),
  cr = Ay({
    DenseMatrix: ke,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    subtractScalar: Xr,
    typed: G,
    unaryMinus: gt
  }),
  y5 = Ux({
    concat: je,
    matrix: we,
    typed: G
  }),
  b5 = rN({
    DenseMatrix: ke,
    concat: je,
    config: pe,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  Yo = fw({
    DenseMatrix: ke,
    divideScalar: ur,
    equalScalar: Ye,
    matrix: we,
    multiplyScalar: fr,
    subtractScalar: Xr,
    typed: G
  }),
  x5 = sb({
    DenseMatrix: ke,
    concat: je,
    matrix: we,
    typed: G
  }),
  Ze = j2({
    DenseMatrix: ke,
    SparseMatrix: Ft,
    addScalar: gr,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  w5 = a2({
    BigNumber: Ne,
    DenseMatrix: ke,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  N5 = Py({
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  D5 = Yy({
    DenseMatrix: ke,
    concat: je,
    matrix: we,
    typed: G
  }),
  A5 = t4({
    addScalar: gr,
    combinations: Si,
    divideScalar: ur,
    isInteger: zr,
    isNegative: Ht,
    multiplyScalar: fr,
    typed: G
  }),
  on = Cw({
    BigNumber: Ne,
    DenseMatrix: ke,
    Fraction: en,
    concat: je,
    config: pe,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  ip = _w({
    concat: je,
    matrix: we,
    typed: G
  }),
  E5 = Rv({
    add: Ze,
    typed: G,
    unaryPlus: zo
  }),
  Wo = jw({
    equal: Jr,
    typed: G
  }),
  S5 = wv({
    matrix: we,
    number: Mt,
    subtract: cr,
    typed: G
  }),
  C5 = Q3({
    abs: qr,
    addScalar: gr,
    deepEqual: Wo,
    divideScalar: ur,
    multiplyScalar: fr,
    sqrt: ct,
    subtractScalar: Xr,
    typed: G
  }),
  Bi = iD({
    addScalar: gr,
    conj: rn,
    multiplyScalar: fr,
    size: Dr,
    typed: G
  }),
  M5 = Pw({
    compareText: ip,
    isZero: lt,
    typed: G
  }),
  op = hv({
    DenseMatrix: ke,
    config: pe,
    equalScalar: Ye,
    matrix: we,
    round: Un,
    typed: G,
    zeros: $r
  }),
  F5 = ey({
    BigNumber: Ne,
    DenseMatrix: ke,
    concat: je,
    config: pe,
    equalScalar: Ye,
    matrix: we,
    round: Un,
    typed: G,
    zeros: $r
  }),
  B5 = rD({
    abs: qr,
    addScalar: gr,
    divideScalar: ur,
    isPositive: tn,
    multiplyScalar: fr,
    smaller: Br,
    sqrt: ct,
    typed: G
  }),
  sp = fN({
    DenseMatrix: ke,
    smaller: Br
  }),
  Er = pN({
    ImmutableDenseMatrix: sp,
    getMatrixDataType: Uo
  }),
  Tr = Yw({
    DenseMatrix: ke,
    concat: je,
    config: pe,
    matrix: we,
    typed: G
  }),
  Qo = jx({
    Complex: ir,
    config: pe,
    divideScalar: ur,
    typed: G
  }),
  T5 = vw({
    DenseMatrix: ke,
    divideScalar: ur,
    equalScalar: Ye,
    matrix: we,
    multiplyScalar: fr,
    subtractScalar: Xr,
    typed: G
  }),
  O5 = Zg({
    flatten: da,
    matrix: we,
    size: Dr,
    typed: G
  }),
  $5 = Bv({
    config: pe,
    numeric: at,
    smaller: Br,
    typed: G
  }),
  up = gv({
    DenseMatrix: ke,
    concat: je,
    config: pe,
    equalScalar: Ye,
    matrix: we,
    round: Un,
    typed: G,
    zeros: $r
  }),
  Ke = vy({
    addScalar: gr,
    dot: Bi,
    equalScalar: Ye,
    matrix: we,
    multiplyScalar: fr,
    typed: G
  }),
  _5 = nw({
    Complex: ir,
    config: pe,
    divideScalar: ur,
    typed: G
  }),
  I5 = ib({
    DenseMatrix: ke,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  Ti = aN({
    compare: on,
    isNaN: ma,
    isNumeric: an,
    typed: G
  }),
  q5 = Dw({
    DenseMatrix: ke,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G,
    zeros: $r
  }),
  lp = RA({
    SparseMatrix: Ft,
    abs: qr,
    add: Ze,
    divideScalar: ur,
    larger: Tr,
    largerEq: Fi,
    multiply: Ke,
    subtract: cr,
    transpose: va,
    typed: G
  }),
  Gr = Sv({
    add: Ze,
    matrix: we,
    typed: G,
    zeros: $r
  }),
  Xo = qv({
    add: Ze,
    config: pe,
    numeric: at,
    typed: G
  }),
  R5 = uD({
    add: Ze,
    matrix: we,
    typed: G
  }),
  cp = dw({
    DenseMatrix: ke,
    divideScalar: ur,
    equalScalar: Ye,
    matrix: we,
    multiplyScalar: fr,
    subtractScalar: Xr,
    typed: G
  }),
  z5 = C4({
    Complex: ir,
    add: Ze,
    multiply: Ke,
    number: Mt,
    typed: G
  }),
  P5 = Hy({
    DenseMatrix: ke,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  Jo = b1({
    DenseMatrix: ke,
    config: pe,
    equalScalar: Ye,
    matrix: we,
    round: Un,
    typed: G,
    zeros: $r
  }),
  yt = Tw({
    compare: on,
    typed: G
  }),
  U5 = a4({
    addScalar: gr,
    combinations: Si,
    isInteger: zr,
    isNegative: Ht,
    isPositive: tn,
    larger: Tr,
    typed: G
  }),
  L5 = vb({
    matrix: we,
    multiply: Ke,
    subtract: cr,
    typed: G
  }),
  fp = E3({
    divideScalar: ur,
    isZero: lt,
    matrix: we,
    multiply: Ke,
    subtractScalar: Xr,
    typed: G,
    unaryMinus: gt
  }),
  k5 = Oy({
    concat: je,
    equalScalar: Ye,
    matrix: we,
    multiplyScalar: fr,
    typed: G
  }),
  mp = gN({
    larger: Tr,
    smaller: Br
  }),
  vp = M1({
    Complex: ir,
    DenseMatrix: ke,
    ceil: Jo,
    equalScalar: Ye,
    floor: op,
    matrix: we,
    typed: G,
    zeros: $r
  }),
  pp = cD({
    Index: Er,
    typed: G
  }),
  H5 = K3({
    abs: qr,
    add: Ze,
    addScalar: gr,
    config: pe,
    divideScalar: ur,
    equalScalar: Ye,
    flatten: da,
    isNumeric: an,
    isZero: lt,
    matrix: we,
    multiply: Ke,
    multiplyScalar: fr,
    smaller: Br,
    subtract: cr,
    typed: G
  }),
  G5 = My({
    BigNumber: Ne,
    add: Ze,
    config: pe,
    equal: Jr,
    isInteger: zr,
    mod: up,
    smaller: Br,
    typed: G,
    xgcd: rp
  }),
  V5 = ay({
    concat: je,
    equalScalar: Ye,
    matrix: we,
    typed: G
  }),
  Z5 = rw({
    Complex: ir,
    config: pe,
    divideScalar: ur,
    log: Qo,
    typed: G
  }),
  aa = Fv({
    config: pe,
    larger: Tr,
    numeric: at,
    typed: G
  }),
  Y5 = $2({
    DenseMatrix: ke,
    Index: Er,
    compareNatural: yt,
    size: Dr,
    subset: Gr,
    typed: G
  }),
  W5 = R2({
    DenseMatrix: ke,
    Index: Er,
    compareNatural: yt,
    size: Dr,
    subset: Gr,
    typed: G
  }),
  Q5 = L2({
    Index: Er,
    compareNatural: yt,
    size: Dr,
    subset: Gr,
    typed: G
  }),
  X5 = V2({
    Index: Er,
    compareNatural: yt,
    size: Dr,
    subset: Gr,
    typed: G
  }),
  Bn = Gw({
    DenseMatrix: ke,
    concat: je,
    config: pe,
    matrix: we,
    typed: G
  }),
  J5 = oN({
    compare: on,
    compareNatural: yt,
    matrix: we,
    typed: G
  }),
  K5 = Ew({
    concat: je,
    equalScalar: Ye,
    matrix: we,
    not: Xv,
    typed: G,
    zeros: $r
  }),
  Tn = Av({
    bignumber: Lr,
    matrix: we,
    add: Ze,
    config: pe,
    isPositive: tn,
    larger: Tr,
    largerEq: Fi,
    smaller: Br,
    smallerEq: Bn,
    typed: G
  }),
  j5 = Ev({
    Index: Er,
    matrix: we,
    range: Tn,
    typed: G
  }),
  dp = I2({
    DenseMatrix: ke,
    Index: Er,
    compareNatural: yt,
    size: Dr,
    subset: Gr,
    typed: G
  }),
  e8 = H2({
    Index: Er,
    compareNatural: yt,
    size: Dr,
    subset: Gr,
    typed: G
  }),
  hp = Q2({
    Index: Er,
    concat: je,
    setDifference: dp,
    size: Dr,
    subset: Gr,
    typed: G
  }),
  gp = xN({
    FibonacciHeap: mp,
    addScalar: gr,
    equalScalar: Ye
  }),
  yp = xv({
    Index: Er,
    matrix: we,
    range: Tn,
    typed: G
  }),
  sn = C3({
    abs: qr,
    addScalar: gr,
    det: fp,
    divideScalar: ur,
    identity: Gt,
    matrix: we,
    multiply: Ke,
    typed: G,
    unaryMinus: gt
  }),
  bp = fA({
    DenseMatrix: ke,
    Spa: gp,
    SparseMatrix: Ft,
    abs: qr,
    addScalar: gr,
    divideScalar: ur,
    equalScalar: Ye,
    larger: Tr,
    matrix: we,
    multiplyScalar: fr,
    subtractScalar: Xr,
    typed: G,
    unaryMinus: gt
  }),
  r8 = F3({
    Complex: ir,
    add: Ze,
    ctranspose: Go,
    deepEqual: Wo,
    divideScalar: ur,
    dot: Bi,
    dotDivide: pa,
    equal: Jr,
    inv: sn,
    matrix: we,
    multiply: Ke,
    typed: G
  }),
  Kr = Qx({
    Complex: ir,
    config: pe,
    fraction: Pn,
    identity: Gt,
    inv: sn,
    matrix: we,
    multiply: Ke,
    number: Mt,
    typed: G
  }),
  xp = P2({
    DenseMatrix: ke,
    Index: Er,
    compareNatural: yt,
    size: Dr,
    subset: Gr,
    typed: G
  }),
  t8 = J2({
    Index: Er,
    concat: je,
    setIntersect: xp,
    setSymDifference: hp,
    size: Dr,
    subset: Gr,
    typed: G
  }),
  n8 = z3({
    abs: qr,
    add: Ze,
    identity: Gt,
    inv: sn,
    map: nn,
    max: aa,
    multiply: Ke,
    size: Dr,
    sqrt: ct,
    subtract: cr,
    typed: G
  }),
  Oe = SN({
    BigNumber: Ne,
    Complex: ir,
    Fraction: en,
    abs: qr,
    addScalar: gr,
    config: pe,
    divideScalar: ur,
    equal: Jr,
    fix: vp,
    format: fa,
    isNumeric: an,
    multiplyScalar: fr,
    number: Mt,
    pow: Kr,
    round: Un,
    subtractScalar: Xr
  }),
  a8 = oB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  i8 = LB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  o8 = FB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  s8 = lB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  u8 = TB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  l8 = cB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  c8 = sB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  f8 = NB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  m8 = iw({
    DenseMatrix: ke,
    concat: je,
    equalScalar: Ye,
    matrix: we,
    pow: Kr,
    typed: G
  }),
  v8 = iB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  p8 = uB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  d8 = q3({
    abs: qr,
    add: Ze,
    identity: Gt,
    inv: sn,
    multiply: Ke,
    typed: G
  }),
  h8 = OB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  wp = lx({
    addScalar: gr,
    ceil: Jo,
    conj: rn,
    divideScalar: ur,
    dotDivide: pa,
    exp: Wv,
    i: Gv,
    log2: Qv,
    matrix: we,
    multiplyScalar: fr,
    pow: Kr,
    tau: Zv,
    typed: G
  }),
  Ko = hF({
    BigNumber: Ne,
    Complex: ir,
    config: pe,
    multiplyScalar: fr,
    pow: Kr,
    typed: G
  }),
  g8 = rB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  y8 = xB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  b8 = fx({
    conj: rn,
    dotDivide: pa,
    fft: wp,
    typed: G
  }),
  x8 = pB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  w8 = _B({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  N8 = aB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  D8 = kB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  A8 = qB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  E8 = DB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  S8 = vB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  C8 = WB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  M8 = VB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  F8 = QB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  B8 = wB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  T8 = AB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  O8 = nB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  $8 = EB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  _8 = PB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  I8 = eB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  q8 = UB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  R8 = SB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  z8 = BB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  P8 = dB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  U8 = ON({
    Unit: Oe,
    typed: G
  }),
  br = Y3({
    divideScalar: ur,
    equalScalar: Ye,
    inv: sn,
    matrix: we,
    multiply: Ke,
    typed: G
  }),
  L8 = gB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  ha = xF({
    gamma: Ko,
    typed: G
  }),
  k8 = $B({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  H8 = GB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  G8 = fB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  Np = PA({
    DenseMatrix: ke,
    lsolve: ap,
    lup: bp,
    matrix: we,
    slu: lp,
    typed: G,
    usolve: Yo
  }),
  V8 = mB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  Z8 = HB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  Y8 = AF({
    add: Ze,
    divide: br,
    factorial: ha,
    isInteger: zr,
    isPositive: tn,
    multiply: Ke,
    typed: G
  }),
  W8 = SF({
    factorial: ha,
    typed: G
  }),
  Q8 = ZB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  X8 = LA({
    add: Ze,
    cbrt: tp,
    divide: br,
    equalScalar: Ye,
    im: Lo,
    isZero: lt,
    multiply: Ke,
    re: ko,
    sqrt: ct,
    subtract: cr,
    typeOf: Kv,
    typed: G,
    unaryMinus: gt
  }),
  J8 = Y2({
    compareNatural: yt,
    typed: G
  }),
  K8 = gx({
    abs: qr,
    add: Ze,
    bignumber: Lr,
    divide: br,
    isNegative: Ht,
    isPositive: tn,
    larger: Tr,
    map: nn,
    matrix: we,
    max: aa,
    multiply: Ke,
    smaller: Br,
    subtract: cr,
    typed: G,
    unaryMinus: gt
  }),
  Dp = KF({
    bignumber: Lr,
    addScalar: gr,
    combinations: Si,
    divideScalar: ur,
    factorial: ha,
    isInteger: zr,
    isNegative: Ht,
    larger: Tr,
    multiplyScalar: fr,
    number: Mt,
    pow: Kr,
    subtractScalar: Xr,
    typed: G
  }),
  j8 = MN({
    Unit: Oe,
    typed: G
  }),
  e6 = e4({
    addScalar: gr,
    isInteger: zr,
    isNegative: Ht,
    stirlingS2: Dp,
    typed: G
  }),
  Ap = _3({
    abs: qr,
    add: Ze,
    addScalar: gr,
    atan: Yv,
    bignumber: Lr,
    column: yp,
    complex: Ci,
    config: pe,
    cos: Po,
    diag: np,
    divideScalar: ur,
    dot: Bi,
    equal: Jr,
    flatten: da,
    im: Lo,
    inv: sn,
    larger: Tr,
    matrix: we,
    matrixFromColumns: Vo,
    multiply: Ke,
    multiplyScalar: fr,
    number: Mt,
    qr: Zo,
    re: ko,
    reshape: ep,
    sin: Mi,
    size: Dr,
    smaller: Br,
    sqrt: ct,
    subtract: cr,
    typed: G,
    usolve: Yo,
    usolveAll: cp
  }),
  r6 = yB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  t6 = IB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  Ep = zv({
    add: Ze,
    divide: br,
    typed: G
  }),
  n6 = RB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  a6 = tB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  i6 = Uv({
    bignumber: Lr,
    add: Ze,
    compare: on,
    divide: br,
    isInteger: zr,
    larger: Tr,
    multiply: Ke,
    partitionSelect: Ti,
    smaller: Br,
    smallerEq: Bn,
    subtract: cr,
    typed: G
  }),
  jo = Pv({
    add: Ze,
    apply: Ho,
    divide: br,
    isNaN: ma,
    multiply: Ke,
    subtract: cr,
    typed: G
  }),
  o6 = hB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  Sp = nF({
    add: Ze,
    compare: on,
    divide: br,
    partitionSelect: Ti,
    typed: G
  }),
  s6 = cF({
    add: Ze,
    divide: br,
    matrix: we,
    mean: Ep,
    multiply: Ke,
    pow: Kr,
    sqrt: ct,
    subtract: cr,
    sum: Xo,
    typed: G
  }),
  u6 = F4({
    Complex: ir,
    add: Ze,
    divide: br,
    matrix: we,
    multiply: Ke,
    typed: G
  }),
  l6 = iF({
    abs: qr,
    map: nn,
    median: Sp,
    subtract: cr,
    typed: G
  }),
  c6 = Lv({
    map: nn,
    sqrt: ct,
    typed: G,
    variance: jo
  }),
  f6 = Ex({
    BigNumber: Ne,
    Complex: ir,
    add: Ze,
    config: pe,
    divide: br,
    equal: Jr,
    factorial: ha,
    gamma: Ko,
    isNegative: Ht,
    multiply: Ke,
    pi: so,
    pow: Kr,
    sin: Mi,
    smallerEq: Bn,
    subtract: cr,
    typed: G
  }),
  es = nD({
    abs: qr,
    add: Ze,
    conj: rn,
    ctranspose: Go,
    eigs: Ap,
    equalScalar: Ye,
    larger: Tr,
    matrix: we,
    multiply: Ke,
    pow: Kr,
    smaller: Br,
    sqrt: ct,
    typed: G
  }),
  Cp = Zb({
    BigNumber: Ne,
    DenseMatrix: ke,
    SparseMatrix: Ft,
    addScalar: gr,
    config: pe,
    cos: Po,
    matrix: we,
    multiplyScalar: fr,
    norm: es,
    sin: Mi,
    typed: G,
    unaryMinus: gt
  }),
  m6 = NF({
    divide: br,
    dotDivide: pa,
    isNumeric: an,
    log: Qo,
    map: nn,
    matrix: we,
    multiply: Ke,
    sum: Xo,
    typed: G
  }),
  v6 = YB({
    BigNumber: Ne,
    Unit: Oe,
    config: pe
  }),
  Mp = k3({
    identity: Gt,
    matrix: we,
    multiply: Ke,
    norm: es,
    qr: Zo,
    subtract: cr,
    typed: G
  }),
  p6 = Gb({
    multiply: Ke,
    rotationMatrix: Cp,
    typed: G
  }),
  Fp = U3({
    abs: qr,
    add: Ze,
    concat: je,
    identity: Gt,
    index: pp,
    lusolve: Np,
    matrix: we,
    matrixFromColumns: Vo,
    multiply: Ke,
    range: Tn,
    schur: Mp,
    subset: Gr,
    subtract: cr,
    transpose: va,
    typed: G
  }),
  d6 = G3({
    matrix: we,
    multiply: Ke,
    sylvester: Fp,
    transpose: va,
    typed: G
  }),
  Ln = {},
  kn = {},
  Bp = {},
  Mr = vD({
    mathWithTransform: kn
  }),
  Hn = PD({
    Node: Mr
  }),
  Qr = LD({
    Node: Mr
  }),
  un = HD({
    Node: Mr
  }),
  Tp = YD({
    Node: Mr
  }),
  Gn = gD({
    Node: Mr
  }),
  Op = DD({
    Node: Mr,
    ResultSet: Vv
  }),
  $p = ED({
    Node: Mr
  }),
  Vt = $D({
    Node: Mr
  }),
  _p = VD({
    Node: Mr
  }),
  h6 = O4({
    classes: Bp
  }),
  rs = YA({
    math: Ln,
    typed: G
  }),
  Ip = ID({
    Node: Mr,
    typed: G
  }),
  g6 = D3({
    Chain: rs,
    typed: G
  }),
  Vn = RD({
    Node: Mr,
    size: Dr
  }),
  Zn = dD({
    Node: Mr,
    subset: Gr
  }),
  qp = wD({
    matrix: we,
    Node: Mr,
    subset: Gr
  }),
  Bt = XD({
    Unit: Oe,
    Node: Mr,
    math: Ln
  }),
  Tt = KD({
    Node: Mr,
    SymbolNode: Bt,
    math: Ln
  }),
  jr = eA({
    AccessorNode: Zn,
    ArrayNode: Gn,
    AssignmentNode: qp,
    BlockNode: Op,
    ConditionalNode: $p,
    ConstantNode: Vt,
    FunctionAssignmentNode: Ip,
    FunctionNode: Tt,
    IndexNode: Vn,
    ObjectNode: Hn,
    OperatorNode: Qr,
    ParenthesisNode: un,
    RangeNode: _p,
    RelationalNode: Tp,
    SymbolNode: Bt,
    config: pe,
    numeric: at,
    typed: G
  }),
  Rp = b4({
    ConstantNode: Vt,
    FunctionNode: Tt,
    OperatorNode: Qr,
    ParenthesisNode: un,
    parse: jr,
    typed: G
  }),
  ts = p4({
    bignumber: Lr,
    fraction: Pn,
    AccessorNode: Zn,
    ArrayNode: Gn,
    ConstantNode: Vt,
    FunctionNode: Tt,
    IndexNode: Vn,
    ObjectNode: Hn,
    OperatorNode: Qr,
    SymbolNode: Bt,
    config: pe,
    mathWithTransform: kn,
    matrix: we,
    typed: G
  }),
  y6 = tA({
    parse: jr,
    typed: G
  }),
  zp = GA({
    parse: jr
  }),
  b6 = o4({
    parse: jr,
    typed: G
  }),
  ns = h4({
    AccessorNode: Zn,
    ArrayNode: Gn,
    ConstantNode: Vt,
    FunctionNode: Tt,
    IndexNode: Vn,
    ObjectNode: Hn,
    OperatorNode: Qr,
    ParenthesisNode: un,
    SymbolNode: Bt,
    add: Ze,
    divide: br,
    equal: Jr,
    isZero: lt,
    multiply: Ke,
    parse: jr,
    pow: Kr,
    subtract: cr,
    typed: G
  }),
  Pp = aA({
    parse: jr,
    typed: G
  }),
  x6 = w3({
    Help: zp,
    mathWithTransform: kn,
    typed: G
  }),
  Up = sA({
    evaluate: Pp
  }),
  Oi = f4({
    bignumber: Lr,
    fraction: Pn,
    AccessorNode: Zn,
    ArrayNode: Gn,
    ConstantNode: Vt,
    FunctionNode: Tt,
    IndexNode: Vn,
    ObjectNode: Hn,
    OperatorNode: Qr,
    ParenthesisNode: un,
    SymbolNode: Bt,
    add: Ze,
    config: pe,
    divide: br,
    equal: Jr,
    isZero: lt,
    mathWithTransform: kn,
    matrix: we,
    multiply: Ke,
    parse: jr,
    pow: Kr,
    resolve: Rp,
    simplifyConstant: ts,
    simplifyCore: ns,
    subtract: cr,
    typed: G
  }),
  w6 = w4({
    OperatorNode: Qr,
    parse: jr,
    simplify: Oi,
    typed: G
  }),
  N6 = lA({
    Parser: Up,
    typed: G
  }),
  D6 = E4({
    bignumber: Lr,
    fraction: Pn,
    AccessorNode: Zn,
    ArrayNode: Gn,
    ConstantNode: Vt,
    FunctionNode: Tt,
    IndexNode: Vn,
    ObjectNode: Hn,
    OperatorNode: Qr,
    ParenthesisNode: un,
    SymbolNode: Bt,
    add: Ze,
    config: pe,
    divide: br,
    equal: Jr,
    isZero: lt,
    mathWithTransform: kn,
    matrix: we,
    multiply: Ke,
    parse: jr,
    pow: Kr,
    simplify: Oi,
    simplifyConstant: ts,
    simplifyCore: ns,
    subtract: cr,
    typed: G
  }),
  A6 = D4({
    ConstantNode: Vt,
    FunctionNode: Tt,
    OperatorNode: Qr,
    ParenthesisNode: un,
    SymbolNode: Bt,
    config: pe,
    equal: Jr,
    isZero: lt,
    numeric: at,
    parse: jr,
    simplify: Oi,
    typed: G
  });
pr(Ln, {
  e: Of,
  false: JT,
  fineStructure: KT,
  i: Gv,
  Infinity: jT,
  LN10: eO,
  LOG10E: rO,
  NaN: tO,
  null: nO,
  phi: aO,
  SQRT1_2: oO,
  sackurTetrode: sO,
  tau: Zv,
  true: uO,
  E: Of,
  version: lO,
  efimovFactor: cO,
  LN2: fO,
  pi: so,
  replacer: mO,
  reviver: h6,
  SQRT2: vO,
  typed: G,
  unaryPlus: zo,
  PI: so,
  weakMixingAngle: pO,
  abs: qr,
  acos: dO,
  acot: hO,
  acsc: gO,
  addScalar: gr,
  arg: yO,
  asech: bO,
  asinh: xO,
  atan: Yv,
  atanh: wO,
  bignumber: Lr,
  bitNot: NO,
  boolean: DO,
  clone: AO,
  combinations: Si,
  complex: Ci,
  conj: rn,
  cos: Po,
  cot: EO,
  csc: SO,
  cube: CO,
  equalScalar: Ye,
  erf: MO,
  exp: Wv,
  expm1: FO,
  filter: BO,
  forEach: TO,
  format: fa,
  getMatrixDataType: Uo,
  hex: OO,
  im: Lo,
  isInteger: zr,
  isNegative: Ht,
  isPositive: tn,
  isZero: lt,
  LOG2E: $O,
  lgamma: _O,
  log10: IO,
  log2: Qv,
  map: nn,
  multiplyScalar: fr,
  not: Xv,
  number: Mt,
  oct: qO,
  pickRandom: RO,
  print: zO,
  random: PO,
  re: ko,
  sec: UO,
  sign: Jv,
  sin: Mi,
  splitUnit: LO,
  square: kO,
  string: HO,
  subtractScalar: Xr,
  tan: GO,
  typeOf: Kv,
  acosh: VO,
  acsch: ZO,
  apply: Ho,
  asec: YO,
  bin: WO,
  chain: g6,
  combinationsWithRep: QO,
  cosh: XO,
  csch: JO,
  isNaN: ma,
  isPrime: KO,
  randomInt: jO,
  sech: e5,
  sinh: r5,
  sparse: t5,
  sqrt: ct,
  tanh: n5,
  unaryMinus: gt,
  acoth: a5,
  coth: i5,
  fraction: Pn,
  isNumeric: an,
  matrix: we,
  matrixFromFunction: o5,
  mode: s5,
  numeric: at,
  prod: jv,
  reshape: ep,
  size: Dr,
  squeeze: u5,
  transpose: va,
  xgcd: rp,
  zeros: $r,
  asin: l5,
  cbrt: tp,
  concat: je,
  count: c5,
  ctranspose: Go,
  diag: np,
  divideScalar: ur,
  dotDivide: pa,
  equal: Jr,
  flatten: da,
  hasNumericValue: f5,
  identity: Gt,
  kron: m5,
  largerEq: Fi,
  leftShift: v5,
  lsolve: ap,
  matrixFromColumns: Vo,
  nthRoot: p5,
  ones: d5,
  qr: Zo,
  resize: h5,
  rightArithShift: g5,
  round: Un,
  smaller: Br,
  subtract: cr,
  to: y5,
  unequal: b5,
  usolve: Yo,
  xor: x5,
  add: Ze,
  atan2: w5,
  bitAnd: N5,
  bitXor: D5,
  catalan: A5,
  compare: on,
  compareText: ip,
  cumsum: E5,
  deepEqual: Wo,
  diff: S5,
  distance: C5,
  dot: Bi,
  equalText: M5,
  floor: op,
  gcd: F5,
  hypot: B5,
  larger: Tr,
  log: Qo,
  lsolveAll: T5,
  matrixFromRows: O5,
  min: $5,
  mod: up,
  multiply: Ke,
  nthRoots: _5,
  or: I5,
  partitionSelect: Ti,
  rightLogShift: q5,
  slu: lp,
  subset: Gr,
  sum: Xo,
  trace: R5,
  usolveAll: cp,
  zpk2tf: z5,
  bitOr: P5,
  ceil: Jo,
  compareNatural: yt,
  composition: U5,
  cross: L5,
  det: fp,
  dotMultiply: k5,
  fix: vp,
  index: pp,
  intersect: H5,
  invmod: G5,
  lcm: V5,
  log1p: Z5,
  max: aa,
  setCartesian: Y5,
  setDistinct: W5,
  setIsSubset: Q5,
  setPowerset: X5,
  smallerEq: Bn,
  sort: J5,
  and: K5,
  range: Tn,
  row: j5,
  setDifference: dp,
  setMultiplicity: e8,
  setSymDifference: hp,
  column: yp,
  inv: sn,
  lup: bp,
  pinv: r8,
  pow: Kr,
  setIntersect: xp,
  setUnion: t8,
  sqrtm: n8,
  vacuumImpedance: a8,
  wienDisplacement: i8,
  atomicMass: o8,
  bohrMagneton: s8,
  boltzmann: u8,
  conductanceQuantum: l8,
  coulomb: c8,
  deuteronMass: f8,
  dotPow: m8,
  electricConstant: v8,
  elementaryCharge: p8,
  expm: d8,
  faraday: h8,
  fft: wp,
  gamma: Ko,
  gravitationConstant: g8,
  hartreeEnergy: y8,
  ifft: b8,
  klitzing: x8,
  loschmidt: w8,
  magneticConstant: N8,
  molarMass: D8,
  molarPlanckConstant: A8,
  neutronMass: E8,
  nuclearMagneton: S8,
  planckCharge: C8,
  planckLength: M8,
  planckTemperature: F8,
  protonMass: B8,
  quantumOfCirculation: T8,
  reducedPlanckConstant: O8,
  rydberg: $8,
  secondRadiation: _8,
  speedOfLight: I8,
  stefanBoltzmann: q8,
  thomsonCrossSection: R8,
  avogadro: z8,
  bohrRadius: P8,
  createUnit: U8,
  divide: br,
  electronMass: L8,
  factorial: ha,
  firstRadiation: k8,
  gravity: H8,
  inverseConductanceQuantum: G8,
  lusolve: Np,
  magneticFluxQuantum: V8,
  molarMassC12: Z8,
  multinomial: Y8,
  parse: jr,
  permutations: W8,
  planckMass: Q8,
  polynomialRoot: X8,
  resolve: Rp,
  setSize: J8,
  simplifyConstant: ts,
  solveODE: K8,
  stirlingS2: Dp,
  unit: j8,
  bellNumbers: e6,
  compile: y6,
  eigs: Ap,
  fermiCoupling: r6,
  gasConstant: t6,
  leafCount: b6,
  mean: Ep,
  molarVolume: n6,
  planckConstant: a6,
  quantileSeq: i6,
  simplifyCore: ns,
  variance: jo,
  classicalElectronRadius: o6,
  evaluate: Pp,
  help: x6,
  median: Sp,
  simplify: Oi,
  symbolicEqual: w6,
  corr: s6,
  freqz: u6,
  mad: l6,
  parser: N6,
  rationalize: D6,
  std: c6,
  zeta: f6,
  derivative: A6,
  norm: es,
  rotationMatrix: Cp,
  kldivergence: m6,
  planckTime: v6,
  schur: Mp,
  rotate: p6,
  sylvester: Fp,
  lyap: d6,
  config: pe
});
pr(kn, Ln, {
  filter: aT({
    typed: G
  }),
  forEach: sT({
    typed: G
  }),
  map: vT({
    typed: G
  }),
  apply: KB({
    isInteger: zr,
    typed: G
  }),
  concat: _T({
    isInteger: zr,
    matrix: we,
    typed: G
  }),
  max: hT({
    config: pe,
    larger: Tr,
    numeric: at,
    typed: G
  }),
  print: XT({
    add: Ze,
    matrix: we,
    typed: G,
    zeros: $r
  }),
  diff: qT({
    bignumber: Lr,
    matrix: we,
    number: Mt,
    subtract: cr,
    typed: G
  }),
  min: NT({
    config: pe,
    numeric: at,
    smaller: Br,
    typed: G
  }),
  subset: TT({
    add: Ze,
    matrix: we,
    typed: G,
    zeros: $r
  }),
  cumsum: ZT({
    add: Ze,
    typed: G,
    unaryPlus: zo
  }),
  index: cT({
    Index: Er,
    getMatrixDataType: Uo
  }),
  sum: LT({
    add: Ze,
    config: pe,
    numeric: at,
    typed: G
  }),
  range: ET({
    bignumber: Lr,
    matrix: we,
    add: Ze,
    config: pe,
    isPositive: tn,
    larger: Tr,
    largerEq: Fi,
    smaller: Br,
    smallerEq: Bn,
    typed: G
  }),
  row: MT({
    Index: Er,
    matrix: we,
    range: Tn,
    typed: G
  }),
  column: rT({
    Index: Er,
    matrix: we,
    range: Tn,
    typed: G
  }),
  mean: bT({
    add: Ze,
    divide: br,
    typed: G
  }),
  quantileSeq: GT({
    add: Ze,
    bignumber: Lr,
    compare: on,
    divide: br,
    isInteger: zr,
    larger: Tr,
    multiply: Ke,
    partitionSelect: Ti,
    smaller: Br,
    smallerEq: Bn,
    subtract: cr,
    typed: G
  }),
  variance: WT({
    add: Ze,
    apply: Ho,
    divide: br,
    isNaN: ma,
    multiply: Ke,
    subtract: cr,
    typed: G
  }),
  std: PT({
    map: nn,
    sqrt: ct,
    typed: G,
    variance: jo
  })
});
pr(Bp, {
  BigNumber: Ne,
  Complex: ir,
  Fraction: en,
  Matrix: Ei,
  Node: Mr,
  ObjectNode: Hn,
  OperatorNode: Qr,
  ParenthesisNode: un,
  Range: iO,
  RelationalNode: Tp,
  ResultSet: Vv,
  ArrayNode: Gn,
  BlockNode: Op,
  ConditionalNode: $p,
  ConstantNode: Vt,
  DenseMatrix: ke,
  RangeNode: _p,
  Chain: rs,
  FunctionAssignmentNode: Ip,
  SparseMatrix: Ft,
  IndexNode: Vn,
  ImmutableDenseMatrix: sp,
  Index: Er,
  AccessorNode: Zn,
  AssignmentNode: qp,
  FibonacciHeap: mp,
  Spa: gp,
  Unit: Oe,
  SymbolNode: Bt,
  FunctionNode: Tt,
  Help: zp,
  Parser: Up
});
rs.createProxy(Ln);

function E6(e, r = 2) {
  const i = 10 ** r;
  return Math.round(e * i) / i
}

function G6(e) {
  const r = Math.floor(e),
    i = e - r,
    n = Math.floor(i * 4) + 1;
  return `${r} Q${n}`
}

function V6(e) {
  const r = Math.floor(e),
    i = e - r,
    n = Math.floor(i * 12),
    a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][n];
  return `${r} ${a}`
}

function Z6(e) {
  return e === -1 / 0 ? "10<sup>0</sup>" : `10<sup>${E6(e,1)}</sup>`
}

function dn(e) {
  if (e.isOperatorNode && e.op === "*") return e.args.map(i => dn(i)).reduce((i, n) => new Qr("+", "add", [i, n]));
  if (e.isOperatorNode && e.op === "/") {
    if (e.args.length != 2) {
      console.log("error applying log to division");
      return
    }
    let [r, i] = e.args;
    return new Qr("-", "subtract", [dn(r), dn(i)])
  } else if (e.isOperatorNode && e.op === "^") {
    const [r, i] = e.args;
    return new Qr("*", "multiply", [i, dn(r)])
  } else {
    if (e.isParenthesisNode) return dn(e.content);
    if (e.isOperatorNode || e.isFunctionNode || e.isSymbolNode || e.isConstantNode) return new Tt(new Bt("log10"), [e]);
    console.log("parsing expression. this should never print")
  }
  return e
}

function et(e) {
  let r = dn(jr(e)).compile();

  function i(n, t = {
    n
  }) {
    return r.evaluate(t)
  }
  return i
}

function Xn(e) {
  let r = e.replaceAll("n", "(10^(n))");
  return et(r)
}

function $f(e, r) {
  let i = e.length,
    n = 0,
    t = 0,
    a = 0,
    o = 0;
  for (let u = 0; u < i; u++) n += e[u], t += r[u], a += e[u] * r[u], o += e[u] * e[u];
  let f = (i * a - n * t) / (i * o - n * n),
    c = (t - f * n) / i;
  return {
    slope: f,
    intercept: c
  }
}

function S6(e, r, i) {
  let n = 0;
  for (; n < e.length - 1 && !(i <= e[n + 1]); n++);
  let t = e[n],
    a = r[n],
    o = e[n + 1],
    f = r[n + 1];
  return a + (f - a) * (i - t) / (o - t)
}

function C6(e, r, i) {
  let n = 0;
  for (; n < e.length - 1 && !(i <= e[n + 1]); n++);
  let t = e[n],
    a = r[n],
    o = e[n + 1],
    f = r[n + 1],
    c = Math.log(a),
    u = Math.log(f),
    s = c + (u - c) * (i - t) / (o - t);
  return Math.exp(s)
}
const M6 = {
    linear: S6,
    exponential: C6
  },
  pn = new Map;

function F6(e, r, i, n = 1) {
  e = parseFloat(e);
  let t = Object.keys(r).map(Number),
    a = Object.values(r).map(Number),
    o, f;
  if (r.hasOwnProperty(e)) o = r[e], f = Math.log10(o);
  else if (e > Math.max(...t))
    if (i === "linear") {
      let [c, u] = [t.slice(-2), a.slice(-2)], s = JSON.stringify([c, u]), l;
      pn.has(s) ? l = pn.get(s) : (l = $f(c, u), pn.set(s, l)), o = l.slope * e + l.intercept, f = Math.log10(o)
    } else {
      let [c, u] = [t.slice(-2), a.slice(-2).map(m => Math.log10(m))], s = JSON.stringify([c, u]), l;
      pn.has(s) ? l = pn.get(s) : (l = $f(c, u), pn.set(s, l)), f = l.slope * e + l.intercept
    }
  else o = M6[i](t, a, e), f = Math.log10(o);
  return f
}

function Hi(e, r, i, n = "", t = 1e-7, a = 1e3) {
  let o = e(r),
    f = e(i);
  if (o == null || f == null || isNaN(o) || isNaN(f)) return console.log("fa or fb is null or NaN; returning null"), console.log("Description: ", n), console.log(`a: ${r}, b: ${i}, b-a: ${i-r}, fa: ${o}, fb: ${f}`), null;
  if (o >= 0) return 0;
  if (f < 0) return 1 / 0;
  let c = r,
    u = o;
  for (let s = 0; s < a; s++) {
    if (c = (r + i) / 2, u = e(c), u == null || isNaN(u)) return console.log("fc is null or NaN; returning null"), console.log("Description: ", n), console.log(`a: ${r}, b: ${i}, b-a: ${i-r}, c: ${c}, fa: ${o}, fb: ${f}, fc: ${u}`), null;
    if (Math.abs(u) < t || Math.abs(i - r) < t) return c;
    o * u < 0 ? (i = c, f = u) : (r = c, o = u)
  }
  return console.log("couldn't converge during binary search. returning last value"), console.log("Description: ", n), console.log(`a: ${r}, b: ${i}, b-a: ${i-r}, c: ${c}, fa: ${o}, fb: ${f}, fc: ${u}`), c
}

function Y6(e, r) {
  let i = 0;
  return r == "2^{q}" ? i = Math.log10(e) - Math.log10(Math.log10(2)) : r == "2^(2^{q})" ? i = Math.log10(Math.log2(e / Math.log10(2))) : r == "{q}" ? i = e : r == "log({q})" ? i = Math.pow(10, e) * Math.log10(2) : console.log("this should never print, loglogicalQubits will be set to 0"), i
}

function B6(e, r, i) {
  let n = new RegExp(`(?<![a-zA-Z])${r}(?![a-zA-Z])`, "g");
  return e.replace(n, i)
}

function Jn(e) {
  return 1 + e / 100
}
let T6 = 0;

function O6() {
  return ++T6
}

function _f() {
  return O6()
}

function Et(e) {
  var r;
  if (e == null || e.value == null) return null;
  let i = (r = e.value.$el) != null ? r : e.value;
  return i instanceof Node ? i : null
}

function li(e, r, ...i) {
  if (e in r) {
    let t = r[e];
    return typeof t == "function" ? t(...i) : t
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(r).map(t=>`"${t}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, li), n
}

function If(e, r) {
  if (e) return e;
  let i = r ?? "button";
  if (typeof i == "string" && i.toLowerCase() === "button") return "button"
}

function $6(e, r) {
  let i = vt(If(e.value.type, e.value.as));
  return lo(() => {
    i.value = If(e.value.type, e.value.as)
  }), Pf(() => {
    var n;
    i.value || Et(r) && Et(r) instanceof HTMLButtonElement && !((n = Et(r)) != null && n.hasAttribute("type")) && (i.value = "button")
  }), i
}
var uo = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(uo || {}),
  _6 = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(_6 || {});

function as({
  visible: e = !0,
  features: r = 0,
  ourProps: i,
  theirProps: n,
  ...t
}) {
  var a;
  let o = kp(n, i),
    f = Object.assign(t, {
      props: o
    });
  if (e || r & 2 && o.static) return Gi(f);
  if (r & 1) {
    let c = (a = o.unmount) == null || a ? 0 : 1;
    return li(c, {
      0() {
        return null
      },
      1() {
        return Gi({
          ...t,
          props: {
            ...o,
            hidden: !0,
            style: {
              display: "none"
            }
          }
        })
      }
    })
  }
  return Gi(f)
}

function Gi({
  props: e,
  attrs: r,
  slots: i,
  slot: n,
  name: t
}) {
  var a, o;
  let {
    as: f,
    ...c
  } = I6(e, ["unmount", "static"]), u = (a = i.default) == null ? void 0 : a.call(i, n), s = {};
  if (n) {
    let l = !1,
      m = [];
    for (let [v, d] of Object.entries(n)) typeof d == "boolean" && (l = !0), d === !0 && m.push(v);
    l && (s["data-headlessui-state"] = m.join(" "))
  }
  if (f === "template") {
    if (u = Lp(u ?? []), Object.keys(c).length > 0 || Object.keys(r).length > 0) {
      let [l, ...m] = u ?? [];
      if (!q6(l) || m.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${t} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(r)).map(p => p.trim()).filter((p, b, g) => g.indexOf(p) === b).sort((p, b) => p.localeCompare(b)).map(p => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(p => `  - ${p}`).join(`
`)].join(`
`));
      let v = kp((o = l.props) != null ? o : {}, c, s),
        d = xd(l, v, !0);
      for (let p in v) p.startsWith("on") && (d.props || (d.props = {}), d.props[p] = v[p]);
      return d
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u
  }
  return wd(f, Object.assign({}, c, s), {
    default: () => u
  })
}

function Lp(e) {
  return e.flatMap(r => r.type === Nd ? Lp(r.children) : [r])
}

function kp(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let r = {},
    i = {};
  for (let n of e)
    for (let t in n) t.startsWith("on") && typeof n[t] == "function" ? (i[t] != null || (i[t] = []), i[t].push(n[t])) : r[t] = n[t];
  if (r.disabled || r["aria-disabled"]) return Object.assign(r, Object.fromEntries(Object.keys(i).map(n => [n, void 0])));
  for (let n in i) Object.assign(r, {
    [n](t, ...a) {
      let o = i[n];
      for (let f of o) {
        if (t instanceof Event && t.defaultPrevented) return;
        f(t, ...a)
      }
    }
  });
  return r
}

function W6(e) {
  let r = Object.assign({}, e);
  for (let i in r) r[i] === void 0 && delete r[i];
  return r
}

function I6(e, r = []) {
  let i = Object.assign({}, e);
  for (let n of r) n in i && delete i[n];
  return i
}

function q6(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function"
}
let Hp = Symbol("Context");
var ia = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ia || {});

function Q6() {
  return Gp() !== null
}

function Gp() {
  return co(Hp, null)
}

function R6(e) {
  fo(Hp, e)
}
var hn = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(hn || {}),
  z6 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(z6 || {});
let Vp = Symbol("DisclosureContext");

function is(e) {
  let r = co(Vp, null);
  if (r === null) {
    let i = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i, is), i
  }
  return r
}
let Zp = Symbol("DisclosurePanelContext");

function P6() {
  return co(Zp, null)
}
let qf = mo({
    name: "Disclosure",
    props: {
      as: {
        type: [Object, String],
        default: "template"
      },
      defaultOpen: {
        type: [Boolean],
        default: !1
      }
    },
    setup(e, {
      slots: r,
      attrs: i
    }) {
      let n = vt(e.defaultOpen ? 0 : 1),
        t = vt(null),
        a = vt(null),
        o = {
          buttonId: vt(`headlessui-disclosure-button-${_f()}`),
          panelId: vt(`headlessui-disclosure-panel-${_f()}`),
          disclosureState: n,
          panel: t,
          button: a,
          toggleDisclosure() {
            n.value = li(n.value, {
              0: 1,
              1: 0
            })
          },
          closeDisclosure() {
            n.value !== 1 && (n.value = 1)
          },
          close(f) {
            o.closeDisclosure();
            let c = f ? f instanceof HTMLElement ? f : f.value instanceof HTMLElement ? Et(f) : Et(o.button) : Et(o.button);
            c == null || c.focus()
          }
        };
      return fo(Vp, o), R6(Ua(() => li(n.value, {
        0: ia.Open,
        1: ia.Closed
      }))), () => {
        let {
          defaultOpen: f,
          ...c
        } = e, u = {
          open: n.value === 0,
          close: o.close
        };
        return as({
          theirProps: c,
          ourProps: {},
          slot: u,
          slots: r,
          attrs: i,
          name: "Disclosure"
        })
      }
    }
  }),
  Rf = mo({
    name: "DisclosureButton",
    props: {
      as: {
        type: [Object, String],
        default: "button"
      },
      disabled: {
        type: [Boolean],
        default: !1
      },
      id: {
        type: String,
        default: null
      }
    },
    setup(e, {
      attrs: r,
      slots: i,
      expose: n
    }) {
      let t = is("DisclosureButton"),
        a = P6(),
        o = Ua(() => a === null ? !1 : a.value === t.panelId.value);
      lo(() => {
        o.value || e.id !== null && (t.buttonId.value = e.id)
      }), Uf(() => {
        o.value || (t.buttonId.value = null)
      });
      let f = vt(null);
      n({
        el: f,
        $el: f
      }), o.value || Pf(() => {
        t.button.value = f.value
      });
      let c = $6(Ua(() => ({
        as: e.as,
        type: r.type
      })), f);

      function u() {
        var m;
        e.disabled || (o.value ? (t.toggleDisclosure(), (m = Et(t.button)) == null || m.focus()) : t.toggleDisclosure())
      }

      function s(m) {
        var v;
        if (!e.disabled)
          if (o.value) switch (m.key) {
            case hn.Space:
            case hn.Enter:
              m.preventDefault(), m.stopPropagation(), t.toggleDisclosure(), (v = Et(t.button)) == null || v.focus();
              break
          } else switch (m.key) {
            case hn.Space:
            case hn.Enter:
              m.preventDefault(), m.stopPropagation(), t.toggleDisclosure();
              break
          }
      }

      function l(m) {
        switch (m.key) {
          case hn.Space:
            m.preventDefault();
            break
        }
      }
      return () => {
        var m;
        let v = {
            open: t.disclosureState.value === 0
          },
          {
            id: d,
            ...p
          } = e,
          b = o.value ? {
            ref: f,
            type: c.value,
            onClick: u,
            onKeydown: s
          } : {
            id: (m = t.buttonId.value) != null ? m : d,
            ref: f,
            type: c.value,
            "aria-expanded": t.disclosureState.value === 0,
            "aria-controls": t.disclosureState.value === 0 || Et(t.panel) ? t.panelId.value : void 0,
            disabled: e.disabled ? !0 : void 0,
            onClick: u,
            onKeydown: s,
            onKeyup: l
          };
        return as({
          ourProps: b,
          theirProps: p,
          slot: v,
          attrs: r,
          slots: i,
          name: "DisclosureButton"
        })
      }
    }
  }),
  zf = mo({
    name: "DisclosurePanel",
    props: {
      as: {
        type: [Object, String],
        default: "div"
      },
      static: {
        type: Boolean,
        default: !1
      },
      unmount: {
        type: Boolean,
        default: !0
      },
      id: {
        type: String,
        default: null
      }
    },
    setup(e, {
      attrs: r,
      slots: i,
      expose: n
    }) {
      let t = is("DisclosurePanel");
      lo(() => {
        e.id !== null && (t.panelId.value = e.id)
      }), Uf(() => {
        t.panelId.value = null
      }), n({
        el: t.panel,
        $el: t.panel
      }), fo(Zp, t.panelId);
      let a = Gp(),
        o = Ua(() => a !== null ? (a.value & ia.Open) === ia.Open : t.disclosureState.value === 0);
      return () => {
        var f;
        let c = {
            open: t.disclosureState.value === 0,
            close: t.close
          },
          {
            id: u,
            ...s
          } = e,
          l = {
            id: (f = t.panelId.value) != null ? f : u,
            ref: t.panel
          };
        return as({
          ourProps: l,
          theirProps: s,
          slot: c,
          attrs: r,
          slots: i,
          features: uo.RenderStrategy | uo.Static,
          visible: o.value,
          name: "DisclosurePanel"
        })
      }
    }
  });
const U6 = {
    class: "max-w-7xl mx-auto my-4 border border-gray-100 rounded-lg shadow-lg"
  },
  L6 = {
    class: "lg:flex gap-4 py-2 min-h-[400px]"
  },
  k6 = {
    __name: "Models",
    props: {
      model: Object,
      modelIndex: Number
    },
    setup(e) {
      const r = ba(() => xa(() => import("./QuantumAdvantageGraph-LDQUUoaT.js"), __vite__mapDeps([0, 1, 2, 3]))),
        i = ba(() => xa(() => import("./QuantumEconomicAdvantageGraph-C2PFs1yD.js"), __vite__mapDeps([4, 5, 1, 2, 3]))),
        n = ba(() => xa(() => import("./QuantumCharacteristicsGraph-Rt87Jqw1.js"), __vite__mapDeps([6, 5, 1, 2, 3]))),
        t = ba(() => xa(() => import("./Form-zxSTuZQ2.js"), __vite__mapDeps([7, 2, 3, 1, 8, 9, 10]))),
        a = new Date().getFullYear(),
        o = e;

      function f(b, g, N, h, x, w, y, A) {
        let E = Number(h) + (A - a) * Math.log10(x);
        if (E == null || isNaN(E)) return console.log("Adjustment factor is null or NaN"), console.log(`adjustment factor: ${E}, hardwareSlowdown: ${h}, quantumImprovementRate: ${x}, year: ${A}`), 0;
        E = aa(E, 0);
        let D = w + (A - a) * Math.log10(y);
        D = aa(D, 0);

        function S(_) {
          let T = {
            n: _,
            p: Math.pow(10, D)
          };
          return b(_, T) - g(_) - N(_) - E
        }
        let C = 10 ** 100,
          M = 2,
          $ = S(M);
        for (; M < 50 && $ >= 0;) M += .25, $ = S(M);
        let I = Hi(S, M, C, "QA bisection");
        return I === null ? (console.log(`null returned!!!! year was ${A} and adjustmentFactor was ${E}`), console.log("lowerBound:", M, "upperBound:", C), console.log("f(lowerBound):", S(M), "f(upperBound):", S(C)), null) : I == 0 ? 0 : I == 1 / 0 ? 1 / 0 : Math.log10(I)
      }

      function c(b, g) {
        let N = "";
        return b.qubitToProblemSize === "2^{q}" ? N = "(log(n, 2))" : b.qubitToProblemSize === "log({q})" ? N = "(2^n)" : b.qubitToProblemSize === "{q}" ? N = "n" : console.log("this should never print"), B6(g, "q", N)
      }

      function u(b) {
        let g = Number(b.hardwareSlowdown),
          N = Jn(Number(b.quantumImprovementRate)),
          h = Number(b.costFactor),
          x = Jn(Number(b.costImprovementRate)),
          w = b.classicalRuntimeInput,
          y = b.quantumRuntimeInput,
          A = c(b, b.penaltyInput),
          E = b.processors,
          D = et(w),
          S = et(y),
          C = et(A),
          M = Xn(w),
          $ = Xn(y),
          I = Xn(A),
          _ = et(b.classicalWork),
          T = c(b, b.quantumWork),
          B = et(T),
          U = Xn(b.classicalWork),
          O = Xn(T),
          V = f(D, S, C, g, N, E, x, a),
          J = f(_, B, C, h, x, E, x, a),
          Z = [],
          q = {},
          X = 0,
          ie = 100;
        if (V === null || J === null) {
          console.log("Error: advantage or costAdvantage is null"), console.log(`advantage: ${V}, costAdvantage: ${J}`);
          return
        }
        V === 1 / 0 && J === 1 / 0 ? (console.log("both advantages are infinity"), X = ie, q = {
          nStar: -1,
          stepStar: -1,
          nCostStar: -1,
          stepCostStar: -1
        }) : V === 1 / 0 ? (console.log("speed advantage is infinity"), J == 0 ? (console.log("and cost advantage is zero"), X = ie) : X = J * 2, q = {
          nStar: -1,
          stepStar: -1,
          nCostStar: J,
          stepCostStar: U(J)
        }) : J == 1 / 0 ? (console.log("cost advantage is infinity"), V == 0 ? (console.log("and speed advantage is zero"), X = ie) : X = V * 2, q = {
          nStar: V,
          stepStar: M(V, {
            n: V,
            p: Math.pow(10, E)
          }),
          nCostStar: -1,
          stepCostStar: -1
        }) : (V == 0 && J == 0 ? (console.log("both advantages are zero"), X = ie) : V == 0 ? (console.log("only speed advantage is zero"), X = J * 2) : J == 0 ? (console.log("only cost advantage is zero"), X = V * 2) : X = V + J, q = {
          nStar: V,
          stepStar: M(V, {
            n: V,
            p: Math.pow(10, E)
          }),
          nCostStar: J,
          stepCostStar: U(J)
        });
        for (let Q = 0; Q < X; Q += X / 200) Z.push(Q);
        q = {
          ...q,
          quantumSteps: Z.map(Q => [Q, $(Q) + I(Q) + g]).map(([Q, ee]) => [Q, ee === NaN ? 99999 : ee]),
          classicalSteps: Z.map(Q => [Q, M(Q, {
            n: Q,
            p: Math.pow(10, E)
          })]).map(([Q, ee]) => [Q, isNaN(ee) ? -1 : ee]),
          quantumCostSteps: Z.map(Q => [Q, O(Q) + I(Q) + h]).map(([Q, ee]) => [Q, ee === NaN ? 99999 : ee]),
          classicalCostSteps: Z.map(Q => [Q, U(Q)]).map(([Q, ee]) => [Q, isNaN(ee) ? -1 : ee])
        }, v.value = {
          ...q,
          problemName: b.problemName
        }
      }

      function s(b) {
        let g = b.hardwareSlowdown,
          N = b.physicalLogicalQubitsRatio,
          h = Jn(Number(b.ratioImprovementRate)),
          x = Jn(Number(b.quantumImprovementRate)),
          w = b.qubitToProblemSize,
          y = b.roadmapUnit,
          A = b.classicalRuntimeInput,
          E = b.quantumRuntimeInput,
          D = c(b, b.penaltyInput),
          S = et(A),
          C = et(E),
          M = et(D),
          $ = et(b.classicalWork),
          I = et(c(b, b.quantumWork)),
          _ = Number(b.costFactor),
          T = Jn(Number(b.costImprovementRate)),
          B = b.processors;

        function U(se) {
          return ge => m(ge, se, N, h, w, y)
        }

        function O(se, ge, Ae, P, H) {
          return te => f(se, ge, Ae, P, H, B, T, te)
        }
        let V = U(b.roadmap),
          J = O(S, C, M, g, x),
          Z = O($, I, M, _, T),
          q = {};
        const X = Hi(se => V(se) - J(se), a, 3e3, "tStar in QEA"),
          ie = Hi(se => V(se) - Z(se), a, 3e3, "tCostStar in QEA");
        console.log("printing stuff"), console.log(V(a), J(a)), console.log(V(3e3), J(3e3));
        let Q = 0,
          ee = 5;
        if (X === null || ie === null) {
          console.log("Error: tStar or tCostStar is null");
          return
        }
        X === 1 / 0 && ie === 1 / 0 ? (console.log("QEA never happens (neither speed nor cost)"), Q = ee, q = {
          tStar: 1 / 0,
          nStar: 1 / 0,
          tCostStar: 1 / 0,
          nCostStar: 1 / 0
        }) : X === 1 / 0 ? (console.log("speed QEA never happens"), ie == 0 ? (console.log("and already QEA for cost"), Q = ee) : Q = ie - a, q = {
          tStar: 1 / 0,
          nStar: 1 / 0,
          tCostStar: ie,
          nCostStar: V(ie)
        }) : ie == 1 / 0 ? (console.log("cost QEA never happens"), X == 0 ? (console.log("and already QEA for speed"), Q = ee) : Q = X - a, q = {
          tStar: X,
          nStar: V(X),
          tCostStar: 1 / 0,
          nCostStar: 1 / 0
        }) : (X == 0 && ie == 0 ? (console.log("already QEA for both speed and cost"), Q = ee) : X == 0 ? (console.log("already QEA for speed"), Q = ie - a) : ie == 0 ? (console.log("already QEA for cost"), Q = X - a) : Q = (X + ie) / 2 - a, q = {
          tStar: X,
          nStar: V(X),
          tCostStar: ie,
          nCostStar: V(ie)
        });
        let ue = [];
        for (let se = 0; se < Q * 2; se += Q / 100) ue.push(se);
        let re = ue.map(se => [a + se, V(a + se)]),
          ne = ue.map(se => [a + se, J(a + se)]),
          le = ue.map(se => [a + se, Z(a + se)]);
        q = {
          ...q,
          quantumFeasible: re,
          quantumAdvantage: ne,
          quantumCostAdvantage: le
        }, console.log("tStar is ", X, "tCostStar is ", ie), console.log("nStar is", V(X), "nCostStar is", V(ie)), d.value = {
          ...q,
          problemName: b.problemName
        }, p.value = {
          roadmapUnit: y,
          tCostStar: q.tCostStar,
          tStar: q.tStar,
          roadmap: b.roadmap,
          extrapolationType: b.extrapolationType,
          physicalLogicalQubitsRatio: N,
          ratioImprovementRate: h,
          qubitToProblemSize: w,
          quantumFeasible: q.quantumFeasible
        }
      }

      function l(b, g, N, h, x) {
        const w = F6(b, g, o.model.extrapolationType);
        if (x === "logical") return w;
        let y = Math.log10(N) + (b - a) * Math.log10(h);
        const A = Math.log10(3);
        return y = Math.max(y, A), w - y
      }

      function m(b, g, N, h, x, w) {
        let y = l(b, g, N, h, w);
        if (x == "2^{q}") return 10 ** (y + Math.log10(Math.log10(2)));
        if (x == "2^(2^{q})") return Math.pow(2, Math.pow(10, y)) * Math.log10(2);
        if (x == "{q}") return y;
        if (x == "log({q})") {
          let A = Math.log10(y) - Math.log10(Math.log10(2));
          return isNaN(A) ? 0 : A
        } else return console.log("this should never print"), 0
      }
      const v = vt({}),
        d = vt({}),
        p = vt({});
      return Dd(() => o.model, b => {
        u(o.model), s(o.model)
      }, {
        immediate: !0,
        deep: !0
      }), (b, g) => (Ad(), Ed("div", U6, [ya("div", null, [ft(mt(t), {
        modelId: e.model.id
      }, null, 8, ["modelId"])]), ft(mt(qf), {
        as: "div",
        class: "px-8 py-2",
        defaultOpen: ""
      }, {
        default: ln(({
          open: N
        }) => [ft(mt(Rf), {
          class: "py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 text-left px-4 rounded-md flex justify-between w-full border border-gray-200"
        }, {
          default: ln(() => [os(" Quantum Economic Advantage "), ya("span", null, ss(N ? "-" : "+"), 1)]),
          _: 2
        }, 1024), ft(mt(zf), {
          class: "text-gray-500"
        }, {
          default: ln(() => [ya("div", L6, [ft(mt(r), {
            data: v.value
          }, null, 8, ["data"]), ft(mt(i), {
            data: d.value
          }, null, 8, ["data"])])]),
          _: 1
        })]),
        _: 1
      }), ft(mt(qf), {
        as: "div",
        class: "px-8 py-2",
        defaultOpen: ""
      }, {
        default: ln(({
          open: N
        }) => [ft(mt(Rf), {
          class: "py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 text-left px-4 rounded-md flex justify-between w-full border border-gray-200"
        }, {
          default: ln(() => [os(" Quantum Timelines "), ya("span", null, ss(N ? "-" : "+"), 1)]),
          _: 2
        }, 1024), ft(mt(zf), {
          class: "text-gray-500"
        }, {
          default: ln(() => [ft(mt(n), {
            data: p.value
          }, null, 8, ["data"])]),
          _: 1
        })]),
        _: 1
      })]))
    }
  },
  X6 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: k6
  }, Symbol.toStringTag, {
    value: "Module"
  }));
export {
  as as A, W6 as E, X6 as M, uo as N, _6 as S, I6 as T, V6 as a, ua as b, _f as c, hn as d, Q6 as e, R6 as f, F6 as g, y6 as h, ia as i, B6 as j, jr as k, Gp as l, Xt as m, E0 as n, Et as o, Y6 as p, E6 as r, $6 as s, Z6 as t, li as u, G6 as y
};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/QuantumAdvantageGraph-LDQUUoaT.js", "assets/highcharts-vue.min-slr4qoxA.js", "assets/index-niMaZqBZ.js", "assets/index-xWgeXwfH.css", "assets/QuantumEconomicAdvantageGraph-C2PFs1yD.js", "assets/annotations-RVYHp2M2.js", "assets/QuantumCharacteristicsGraph-Rt87Jqw1.js", "assets/Form-zxSTuZQ2.js", "assets/katex.min-I4gThi3H.js", "assets/katex-nDBl4rtf.css", "assets/Form-omuq4W5D.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}