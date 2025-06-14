import {
  r as ref,
  a as computed,
  w as watchEffect,
  d as defineComponent,
  o as onMounted,
  b as onUnmounted,
  h as h$1,
  F as Fragment,
  e as watch,
  x as shallowRef,
  p as provide,
  i as inject,
  T as Teleport,
  y as reactive,
  z as getCurrentInstance,
  A as nextTick,
  B as normalizeClass,
  f as openBlock,
  v as createBlock,
  C as renderSlot,
  k as createVNode,
  D as withModifiers,
  E as withDirectives,
  G as vShow,
  q as renderList,
  t as toDisplayString,
  H as withKeys,
  I as createCommentVNode,
  J as Transition,
  l as withCtx,
  m as createTextVNode,
  g as createElementBlock,
  j as createBaseVNode,
  u as unref,
  K as defineStore,
  L as vModelRadio,
  M as vModelText,
  N as vModelSelect,
  O as _export_sfc,
  P as pushScopeId,
  Q as popScopeId,
  R as useModelsStore
} from "./index-niMaZqBZ.js";
import {
  o as o$1,
  u as u$4,
  A as A$2,
  c as t$5,
  l as l$2,
  i as i$4,
  N as N$5,
  d as o$2,
  s as s$4,
  E as E$3,
  T as T$2,
  e as s$5,
  S as S$3,
  f as t$6,
  r as round,
  g as getPhysicalQubits,
  t as toBase10HTML,
  h as compile,
  j as replaceVariable,
  k as parse
} from "./Models-F5kqfqlD.js";
import {
  h as highchartsVue_minExports
} from "./highcharts-vue.min-slr4qoxA.js";
import {
  k as katex
} from "./katex.min-I4gThi3H.js";

function d$4(r, v, b) {
  let k = ref(b == null ? void 0 : b.value),
    M = computed(() => r.value !== void 0);
  return [computed(() => M.value ? r.value : k.value), function(q) {
    return M.value || (k.value = q), v == null ? void 0 : v(q)
  }]
}
var i$3 = Object.defineProperty,
  d$3 = (r, v, b) => v in r ? i$3(r, v, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: b
  }) : r[v] = b,
  n$2 = (r, v, b) => (d$3(r, typeof v != "symbol" ? v + "" : v, b), b);
let s$3 = class {
    constructor() {
      n$2(this, "current", this.detect()), n$2(this, "currentId", 0)
    }
    set(v) {
      this.current !== v && (this.currentId = 0, this.current = v)
    }
    reset() {
      this.set(this.detect())
    }
    nextId() {
      return ++this.currentId
    }
    get isServer() {
      return this.current === "server"
    }
    get isClient() {
      return this.current === "client"
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client"
    }
  },
  c$2 = new s$3;

function i$2(r) {
  if (c$2.isServer) return null;
  if (r instanceof Node) return r.ownerDocument;
  if (r != null && r.hasOwnProperty("value")) {
    let v = o$1(r);
    if (v) return v.ownerDocument
  }
  return document
}
let c$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(r => `${r}:not([tabindex='-1'])`).join(",");
var N$4 = (r => (r[r.First = 1] = "First", r[r.Previous = 2] = "Previous", r[r.Next = 4] = "Next", r[r.Last = 8] = "Last", r[r.WrapAround = 16] = "WrapAround", r[r.NoScroll = 32] = "NoScroll", r))(N$4 || {}),
  T$1 = (r => (r[r.Error = 0] = "Error", r[r.Overflow = 1] = "Overflow", r[r.Success = 2] = "Success", r[r.Underflow = 3] = "Underflow", r))(T$1 || {}),
  F$1 = (r => (r[r.Previous = -1] = "Previous", r[r.Next = 1] = "Next", r))(F$1 || {});

function E$2(r = document.body) {
  return r == null ? [] : Array.from(r.querySelectorAll(c$1)).sort((v, b) => Math.sign((v.tabIndex || Number.MAX_SAFE_INTEGER) - (b.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var h = (r => (r[r.Strict = 0] = "Strict", r[r.Loose = 1] = "Loose", r))(h || {});

function w$3(r, v = 0) {
  var b;
  return r === ((b = i$2(r)) == null ? void 0 : b.body) ? !1 : u$4(v, {
    0() {
      return r.matches(c$1)
    },
    1() {
      let k = r;
      for (; k !== null;) {
        if (k.matches(c$1)) return !0;
        k = k.parentElement
      }
      return !1
    }
  })
}
var y$1 = (r => (r[r.Keyboard = 0] = "Keyboard", r[r.Mouse = 1] = "Mouse", r))(y$1 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", r => {
  r.metaKey || r.altKey || r.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", r => {
  r.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : r.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function S$2(r) {
  r == null || r.focus({
    preventScroll: !0
  })
}
let H = ["textarea", "input"].join(",");

function I$1(r) {
  var v, b;
  return (b = (v = r == null ? void 0 : r.matches) == null ? void 0 : v.call(r, H)) != null ? b : !1
}

function O(r, v = b => b) {
  return r.slice().sort((b, k) => {
    let M = v(b),
      q = v(k);
    if (M === null || q === null) return 0;
    let V = M.compareDocumentPosition(q);
    return V & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : V & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
  })
}

function P(r, v, {
  sorted: b = !0,
  relativeTo: k = null,
  skipElements: M = []
} = {}) {
  var q;
  let V = (q = Array.isArray(r) ? r.length > 0 ? r[0].ownerDocument : document : r == null ? void 0 : r.ownerDocument) != null ? q : document,
    D = Array.isArray(r) ? b ? O(r) : r : E$2(r);
  M.length > 0 && D.length > 1 && (D = D.filter(X => !M.includes(X))), k = k ?? V.activeElement;
  let U = (() => {
      if (v & 5) return 1;
      if (v & 10) return -1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    })(),
    Y = (() => {
      if (v & 1) return 0;
      if (v & 2) return Math.max(0, D.indexOf(k)) - 1;
      if (v & 4) return Math.max(0, D.indexOf(k)) + 1;
      if (v & 8) return D.length - 1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    })(),
    K = v & 32 ? {
      preventScroll: !0
    } : {},
    se = 0,
    te = D.length,
    ee;
  do {
    if (se >= te || se + te <= 0) return 0;
    let X = Y + se;
    if (v & 16) X = (X + te) % te;
    else {
      if (X < 0) return 3;
      if (X >= te) return 1
    }
    ee = D[X], ee == null || ee.focus(K), se += U
  } while (ee !== V.activeElement);
  return v & 6 && I$1(ee) && ee.select(), 2
}

function t$4() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function i$1() {
  return /Android/gi.test(window.navigator.userAgent)
}

function n$1() {
  return t$4() || i$1()
}

function u$3(r, v, b) {
  c$2.isServer || watchEffect(k => {
    document.addEventListener(r, v, b), k(() => document.removeEventListener(r, v, b))
  })
}

function w$2(r, v, b) {
  c$2.isServer || watchEffect(k => {
    window.addEventListener(r, v, b), k(() => window.removeEventListener(r, v, b))
  })
}

function w$1(r, v, b = computed(() => !0)) {
  function k(q, V) {
    if (!b.value || q.defaultPrevented) return;
    let D = V(q);
    if (D === null || !D.getRootNode().contains(D)) return;
    let U = function Y(K) {
      return typeof K == "function" ? Y(K()) : Array.isArray(K) || K instanceof Set ? K : [K]
    }(r);
    for (let Y of U) {
      if (Y === null) continue;
      let K = Y instanceof HTMLElement ? Y : o$1(Y);
      if (K != null && K.contains(D) || q.composed && q.composedPath().includes(K)) return
    }
    return !w$3(D, h.Loose) && D.tabIndex !== -1 && q.preventDefault(), v(q, D)
  }
  let M = ref(null);
  u$3("pointerdown", q => {
    var V, D;
    b.value && (M.value = ((D = (V = q.composedPath) == null ? void 0 : V.call(q)) == null ? void 0 : D[0]) || q.target)
  }, !0), u$3("mousedown", q => {
    var V, D;
    b.value && (M.value = ((D = (V = q.composedPath) == null ? void 0 : V.call(q)) == null ? void 0 : D[0]) || q.target)
  }, !0), u$3("click", q => {
    n$1() || M.value && (k(q, () => M.value), M.value = null)
  }, !0), u$3("touchend", q => k(q, () => q.target instanceof HTMLElement ? q.target : null), !0), w$2("blur", q => k(q, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}
var s$2 = (r => (r[r.None = 1] = "None", r[r.Focusable = 2] = "Focusable", r[r.Hidden = 4] = "Hidden", r))(s$2 || {});
let f = defineComponent({
  name: "Hidden",
  props: {
    as: {
      type: [Object, String],
      default: "div"
    },
    features: {
      type: Number,
      default: 1
    }
  },
  setup(r, {
    slots: v,
    attrs: b
  }) {
    return () => {
      var k;
      let {
        features: M,
        ...q
      } = r, V = {
        "aria-hidden": (M & 2) === 2 ? !0 : (k = q["aria-hidden"]) != null ? k : void 0,
        style: {
          position: "fixed",
          top: 1,
          left: 1,
          width: 1,
          height: 0,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: "0",
          ...(M & 4) === 4 && (M & 2) !== 2 && {
            display: "none"
          }
        }
      };
      return A$2({
        ourProps: V,
        theirProps: q,
        slot: {},
        attrs: b,
        slots: v,
        name: "Hidden"
      })
    }
  }
});

function t$3(r) {
  function v() {
    document.readyState !== "loading" && (r(), document.removeEventListener("DOMContentLoaded", v))
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", v), v())
}
let t$2 = [];
t$3(() => {
  function r(v) {
    v.target instanceof HTMLElement && v.target !== document.body && t$2[0] !== v.target && (t$2.unshift(v.target), t$2 = t$2.filter(b => b != null && b.isConnected), t$2.splice(10))
  }
  window.addEventListener("click", r, {
    capture: !0
  }), window.addEventListener("mousedown", r, {
    capture: !0
  }), window.addEventListener("focus", r, {
    capture: !0
  }), document.body.addEventListener("click", r, {
    capture: !0
  }), document.body.addEventListener("mousedown", r, {
    capture: !0
  }), document.body.addEventListener("focus", r, {
    capture: !0
  })
});

function t$1(r) {
  typeof queueMicrotask == "function" ? queueMicrotask(r) : Promise.resolve().then(r).catch(v => setTimeout(() => {
    throw v
  }))
}

function o() {
  let r = [],
    v = {
      addEventListener(b, k, M, q) {
        return b.addEventListener(k, M, q), v.add(() => b.removeEventListener(k, M, q))
      },
      requestAnimationFrame(...b) {
        let k = requestAnimationFrame(...b);
        v.add(() => cancelAnimationFrame(k))
      },
      nextFrame(...b) {
        v.requestAnimationFrame(() => {
          v.requestAnimationFrame(...b)
        })
      },
      setTimeout(...b) {
        let k = setTimeout(...b);
        v.add(() => clearTimeout(k))
      },
      microTask(...b) {
        let k = {
          current: !0
        };
        return t$1(() => {
          k.current && b[0]()
        }), v.add(() => {
          k.current = !1
        })
      },
      style(b, k, M) {
        let q = b.style.getPropertyValue(k);
        return Object.assign(b.style, {
          [k]: M
        }), this.add(() => {
          Object.assign(b.style, {
            [k]: q
          })
        })
      },
      group(b) {
        let k = o();
        return b(k), this.add(() => k.dispose())
      },
      add(b) {
        return r.push(b), () => {
          let k = r.indexOf(b);
          if (k >= 0)
            for (let M of r.splice(k, 1)) M()
        }
      },
      dispose() {
        for (let b of r.splice(0)) b()
      }
    };
  return v
}

function p(r) {
  var v, b;
  let k = (v = r == null ? void 0 : r.form) != null ? v : r.closest("form");
  if (k) {
    for (let M of k.elements)
      if (M !== r && (M.tagName === "INPUT" && M.type === "submit" || M.tagName === "BUTTON" && M.type === "submit" || M.nodeName === "INPUT" && M.type === "image")) {
        M.click();
        return
      }(b = k.requestSubmit) == null || b.call(k)
  }
}

function E$1(r, v, b, k) {
  c$2.isServer || watchEffect(M => {
    r = r ?? window, r.addEventListener(v, b, k), M(() => r.removeEventListener(v, b, k))
  })
}
var d$2 = (r => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d$2 || {});

function n() {
  let r = ref(0);
  return w$2("keydown", v => {
    v.key === "Tab" && (r.value = v.shiftKey ? 1 : 0)
  }), r
}

function B(r) {
  if (!r) return new Set;
  if (typeof r == "function") return new Set(r());
  let v = new Set;
  for (let b of r.value) {
    let k = o$1(b);
    k instanceof HTMLElement && v.add(k)
  }
  return v
}
var A$1 = (r => (r[r.None = 1] = "None", r[r.InitialFocus = 2] = "InitialFocus", r[r.TabLock = 4] = "TabLock", r[r.FocusLock = 8] = "FocusLock", r[r.RestoreFocus = 16] = "RestoreFocus", r[r.All = 30] = "All", r))(A$1 || {});
let ue = Object.assign(defineComponent({
  name: "FocusTrap",
  props: {
    as: {
      type: [Object, String],
      default: "div"
    },
    initialFocus: {
      type: Object,
      default: null
    },
    features: {
      type: Number,
      default: 30
    },
    containers: {
      type: [Object, Function],
      default: ref(new Set)
    }
  },
  inheritAttrs: !1,
  setup(r, {
    attrs: v,
    slots: b,
    expose: k
  }) {
    let M = ref(null);
    k({
      el: M,
      $el: M
    });
    let q = computed(() => i$2(M)),
      V = ref(!1);
    onMounted(() => V.value = !0), onUnmounted(() => V.value = !1), $({
      ownerDocument: q
    }, computed(() => V.value && !!(r.features & 16)));
    let D = z({
      ownerDocument: q,
      container: M,
      initialFocus: computed(() => r.initialFocus)
    }, computed(() => V.value && !!(r.features & 2)));
    J({
      ownerDocument: q,
      container: M,
      containers: r.containers,
      previousActiveElement: D
    }, computed(() => V.value && !!(r.features & 8)));
    let U = n();

    function Y(ee) {
      let X = o$1(M);
      X && (le => le())(() => {
        u$4(U.value, {
          [d$2.Forwards]: () => {
            P(X, N$4.First, {
              skipElements: [ee.relatedTarget]
            })
          },
          [d$2.Backwards]: () => {
            P(X, N$4.Last, {
              skipElements: [ee.relatedTarget]
            })
          }
        })
      })
    }
    let K = ref(!1);

    function se(ee) {
      ee.key === "Tab" && (K.value = !0, requestAnimationFrame(() => {
        K.value = !1
      }))
    }

    function te(ee) {
      if (!V.value) return;
      let X = B(r.containers);
      o$1(M) instanceof HTMLElement && X.add(o$1(M));
      let le = ee.relatedTarget;
      le instanceof HTMLElement && le.dataset.headlessuiFocusGuard !== "true" && (N$3(X, le) || (K.value ? P(o$1(M), u$4(U.value, {
        [d$2.Forwards]: () => N$4.Next,
        [d$2.Backwards]: () => N$4.Previous
      }) | N$4.WrapAround, {
        relativeTo: ee.target
      }) : ee.target instanceof HTMLElement && S$2(ee.target)))
    }
    return () => {
      let ee = {},
        X = {
          ref: M,
          onKeydown: se,
          onFocusout: te
        },
        {
          features: le,
          initialFocus: oe,
          containers: ne,
          ...G
        } = r;
      return h$1(Fragment, [!!(le & 4) && h$1(f, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: Y,
        features: s$2.Focusable
      }), A$2({
        ourProps: X,
        theirProps: {
          ...v,
          ...G
        },
        slot: ee,
        attrs: v,
        slots: b,
        name: "FocusTrap"
      }), !!(le & 4) && h$1(f, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: Y,
        features: s$2.Focusable
      })])
    }
  }
}), {
  features: A$1
});

function W$1(r) {
  let v = ref(t$2.slice());
  return watch([r], ([b], [k]) => {
    k === !0 && b === !1 ? t$1(() => {
      v.value.splice(0)
    }) : k === !1 && b === !0 && (v.value = t$2.slice())
  }, {
    flush: "post"
  }), () => {
    var b;
    return (b = v.value.find(k => k != null && k.isConnected)) != null ? b : null
  }
}

function $({
  ownerDocument: r
}, v) {
  let b = W$1(v);
  onMounted(() => {
    watchEffect(() => {
      var k, M;
      v.value || ((k = r.value) == null ? void 0 : k.activeElement) === ((M = r.value) == null ? void 0 : M.body) && S$2(b())
    }, {
      flush: "post"
    })
  }), onUnmounted(() => {
    v.value && S$2(b())
  })
}

function z({
  ownerDocument: r,
  container: v,
  initialFocus: b
}, k) {
  let M = ref(null),
    q = ref(!1);
  return onMounted(() => q.value = !0), onUnmounted(() => q.value = !1), onMounted(() => {
    watch([v, b, k], (V, D) => {
      if (V.every((Y, K) => (D == null ? void 0 : D[K]) === Y) || !k.value) return;
      let U = o$1(v);
      U && t$1(() => {
        var Y, K;
        if (!q.value) return;
        let se = o$1(b),
          te = (Y = r.value) == null ? void 0 : Y.activeElement;
        if (se) {
          if (se === te) {
            M.value = te;
            return
          }
        } else if (U.contains(te)) {
          M.value = te;
          return
        }
        se ? S$2(se) : P(U, N$4.First | N$4.NoScroll) === T$1.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), M.value = (K = r.value) == null ? void 0 : K.activeElement
      })
    }, {
      immediate: !0,
      flush: "post"
    })
  }), M
}

function J({
  ownerDocument: r,
  container: v,
  containers: b,
  previousActiveElement: k
}, M) {
  var q;
  E$1((q = r.value) == null ? void 0 : q.defaultView, "focus", V => {
    if (!M.value) return;
    let D = B(b);
    o$1(v) instanceof HTMLElement && D.add(o$1(v));
    let U = k.value;
    if (!U) return;
    let Y = V.target;
    Y && Y instanceof HTMLElement ? N$3(D, Y) ? (k.value = Y, S$2(Y)) : (V.preventDefault(), V.stopPropagation(), S$2(U)) : S$2(k.value)
  }, !0)
}

function N$3(r, v) {
  for (let b of r)
    if (b.contains(v)) return !0;
  return !1
}

function m$3(r) {
  let v = shallowRef(r.getSnapshot());
  return onUnmounted(r.subscribe(() => {
    v.value = r.getSnapshot()
  })), v
}

function a$1(r, v) {
  let b = r(),
    k = new Set;
  return {
    getSnapshot() {
      return b
    },
    subscribe(M) {
      return k.add(M), () => k.delete(M)
    },
    dispatch(M, ...q) {
      let V = v[M].call(b, ...q);
      V && (b = V, k.forEach(D => D()))
    }
  }
}

function c() {
  let r;
  return {
    before({
      doc: v
    }) {
      var b;
      let k = v.documentElement;
      r = ((b = v.defaultView) != null ? b : window).innerWidth - k.clientWidth
    },
    after({
      doc: v,
      d: b
    }) {
      let k = v.documentElement,
        M = k.clientWidth - k.offsetWidth,
        q = r - M;
      b.style(k, "paddingRight", `${q}px`)
    }
  }
}

function w() {
  return t$4() ? {
    before({
      doc: r,
      d: v,
      meta: b
    }) {
      function k(M) {
        return b.containers.flatMap(q => q()).some(q => q.contains(M))
      }
      v.microTask(() => {
        var M;
        if (window.getComputedStyle(r.documentElement).scrollBehavior !== "auto") {
          let D = o();
          D.style(r.documentElement, "scrollBehavior", "auto"), v.add(() => v.microTask(() => D.dispose()))
        }
        let q = (M = window.scrollY) != null ? M : window.pageYOffset,
          V = null;
        v.addEventListener(r, "click", D => {
          if (D.target instanceof HTMLElement) try {
            let U = D.target.closest("a");
            if (!U) return;
            let {
              hash: Y
            } = new URL(U.href), K = r.querySelector(Y);
            K && !k(K) && (V = K)
          } catch {}
        }, !0), v.addEventListener(r, "touchstart", D => {
          if (D.target instanceof HTMLElement)
            if (k(D.target)) {
              let U = D.target;
              for (; U.parentElement && k(U.parentElement);) U = U.parentElement;
              v.style(U, "overscrollBehavior", "contain")
            } else v.style(D.target, "touchAction", "none")
        }), v.addEventListener(r, "touchmove", D => {
          if (D.target instanceof HTMLElement)
            if (k(D.target)) {
              let U = D.target;
              for (; U.parentElement && U.dataset.headlessuiPortal !== "" && !(U.scrollHeight > U.clientHeight || U.scrollWidth > U.clientWidth);) U = U.parentElement;
              U.dataset.headlessuiPortal === "" && D.preventDefault()
            } else D.preventDefault()
        }, {
          passive: !1
        }), v.add(() => {
          var D;
          let U = (D = window.scrollY) != null ? D : window.pageYOffset;
          q !== U && window.scrollTo(0, q), V && V.isConnected && (V.scrollIntoView({
            block: "nearest"
          }), V = null)
        })
      })
    }
  } : {}
}

function l$1() {
  return {
    before({
      doc: r,
      d: v
    }) {
      v.style(r.documentElement, "overflow", "hidden")
    }
  }
}

function m$2(r) {
  let v = {};
  for (let b of r) Object.assign(v, b(v));
  return v
}
let a = a$1(() => new Map, {
  PUSH(r, v) {
    var b;
    let k = (b = this.get(r)) != null ? b : {
      doc: r,
      count: 0,
      d: o(),
      meta: new Set
    };
    return k.count++, k.meta.add(v), this.set(r, k), this
  },
  POP(r, v) {
    let b = this.get(r);
    return b && (b.count--, b.meta.delete(v)), this
  },
  SCROLL_PREVENT({
    doc: r,
    d: v,
    meta: b
  }) {
    let k = {
        doc: r,
        d: v,
        meta: m$2(b)
      },
      M = [w(), c(), l$1()];
    M.forEach(({
      before: q
    }) => q == null ? void 0 : q(k)), M.forEach(({
      after: q
    }) => q == null ? void 0 : q(k))
  },
  SCROLL_ALLOW({
    d: r
  }) {
    r.dispose()
  },
  TEARDOWN({
    doc: r
  }) {
    this.delete(r)
  }
});
a.subscribe(() => {
  let r = a.getSnapshot(),
    v = new Map;
  for (let [b] of r) v.set(b, b.documentElement.style.overflow);
  for (let b of r.values()) {
    let k = v.get(b.doc) === "hidden",
      M = b.count !== 0;
    (M && !k || !M && k) && a.dispatch(b.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", b), b.count === 0 && a.dispatch("TEARDOWN", b)
  }
});

function d$1(r, v, b) {
  let k = m$3(a),
    M = computed(() => {
      let q = r.value ? k.value.get(r.value) : void 0;
      return q ? q.count > 0 : !1
    });
  return watch([r, v], ([q, V], [D], U) => {
    if (!q || !V) return;
    a.dispatch("PUSH", q, b);
    let Y = !1;
    U(() => {
      Y || (a.dispatch("POP", D ?? q, b), Y = !0)
    })
  }, {
    immediate: !0
  }), M
}
let i = new Map,
  t = new Map;

function E(r, v = ref(!0)) {
  watchEffect(b => {
    var k;
    if (!v.value) return;
    let M = o$1(r);
    if (!M) return;
    b(function() {
      var V;
      if (!M) return;
      let D = (V = t.get(M)) != null ? V : 1;
      if (D === 1 ? t.delete(M) : t.set(M, D - 1), D !== 1) return;
      let U = i.get(M);
      U && (U["aria-hidden"] === null ? M.removeAttribute("aria-hidden") : M.setAttribute("aria-hidden", U["aria-hidden"]), M.inert = U.inert, i.delete(M))
    });
    let q = (k = t.get(M)) != null ? k : 0;
    t.set(M, q + 1), q === 0 && (i.set(M, {
      "aria-hidden": M.getAttribute("aria-hidden"),
      inert: M.inert
    }), M.setAttribute("aria-hidden", "true"), M.inert = !0)
  })
}

function N$2({
  defaultContainers: r = [],
  portals: v,
  mainTreeNodeRef: b
} = {}) {
  let k = ref(null),
    M = i$2(k);

  function q() {
    var V, D, U;
    let Y = [];
    for (let K of r) K !== null && (K instanceof HTMLElement ? Y.push(K) : "value" in K && K.value instanceof HTMLElement && Y.push(K.value));
    if (v != null && v.value)
      for (let K of v.value) Y.push(K);
    for (let K of (V = M == null ? void 0 : M.querySelectorAll("html > *, body > *")) != null ? V : []) K !== document.body && K !== document.head && K instanceof HTMLElement && K.id !== "headlessui-portal-root" && (K.contains(o$1(k)) || K.contains((U = (D = o$1(k)) == null ? void 0 : D.getRootNode()) == null ? void 0 : U.host) || Y.some(se => K.contains(se)) || Y.push(K));
    return Y
  }
  return {
    resolveContainers: q,
    contains(V) {
      return q().some(D => D.contains(V))
    },
    mainTreeNodeRef: k,
    MainTreeNode() {
      return b != null ? null : h$1(f, {
        features: s$2.Hidden,
        ref: k
      })
    }
  }
}
let e = Symbol("ForcePortalRootContext");

function s$1() {
  return inject(e, !1)
}
let u$2 = defineComponent({
    name: "ForcePortalRoot",
    props: {
      as: {
        type: [Object, String],
        default: "template"
      },
      force: {
        type: Boolean,
        default: !1
      }
    },
    setup(r, {
      slots: v,
      attrs: b
    }) {
      return provide(e, r.force), () => {
        let {
          force: k,
          ...M
        } = r;
        return A$2({
          theirProps: M,
          ourProps: {},
          slot: {},
          slots: v,
          attrs: b,
          name: "ForcePortalRoot"
        })
      }
    }
  }),
  u$1 = Symbol("StackContext");
var s = (r => (r[r.Add = 0] = "Add", r[r.Remove = 1] = "Remove", r))(s || {});

function y() {
  return inject(u$1, () => {})
}

function R$1({
  type: r,
  enabled: v,
  element: b,
  onUpdate: k
}) {
  let M = y();

  function q(...V) {
    k == null || k(...V), M(...V)
  }
  onMounted(() => {
    watch(v, (V, D) => {
      V ? q(0, r, b) : D === !0 && q(1, r, b)
    }, {
      immediate: !0,
      flush: "sync"
    })
  }), onUnmounted(() => {
    v.value && q(1, r, b)
  }), provide(u$1, q)
}
let u = Symbol("DescriptionContext");

function S$1({
  slot: r = ref({}),
  name: v = "Description",
  props: b = {}
} = {}) {
  let k = ref([]);

  function M(q) {
    return k.value.push(q), () => {
      let V = k.value.indexOf(q);
      V !== -1 && k.value.splice(V, 1)
    }
  }
  return provide(u, {
    register: M,
    slot: r,
    name: v,
    props: b
  }), computed(() => k.value.length > 0 ? k.value.join(" ") : void 0)
}

function x(r) {
  let v = i$2(r);
  if (!v) {
    if (r === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${r}`)
  }
  let b = v.getElementById("headlessui-portal-root");
  if (b) return b;
  let k = v.createElement("div");
  return k.setAttribute("id", "headlessui-portal-root"), v.body.appendChild(k)
}
let _ = defineComponent({
    name: "Portal",
    props: {
      as: {
        type: [Object, String],
        default: "div"
      }
    },
    setup(r, {
      slots: v,
      attrs: b
    }) {
      let k = ref(null),
        M = computed(() => i$2(k)),
        q = s$1(),
        V = inject(C, null),
        D = ref(q === !0 || V == null ? x(k.value) : V.resolveTarget()),
        U = ref(!1);
      onMounted(() => {
        U.value = !0
      }), watchEffect(() => {
        q || V != null && (D.value = V.resolveTarget())
      });
      let Y = inject(m$1, null),
        K = !1,
        se = getCurrentInstance();
      return watch(k, () => {
        if (K || !Y) return;
        let te = o$1(k);
        te && (onUnmounted(Y.register(te), se), K = !0)
      }), onUnmounted(() => {
        var te, ee;
        let X = (te = M.value) == null ? void 0 : te.getElementById("headlessui-portal-root");
        X && D.value === X && D.value.children.length <= 0 && ((ee = D.value.parentElement) == null || ee.removeChild(D.value))
      }), () => {
        if (!U.value || D.value === null) return null;
        let te = {
          ref: k,
          "data-headlessui-portal": ""
        };
        return h$1(Teleport, {
          to: D.value
        }, A$2({
          ourProps: te,
          theirProps: r,
          slot: {},
          attrs: b,
          slots: v,
          name: "Portal"
        }))
      }
    }
  }),
  m$1 = Symbol("PortalParentContext");

function A() {
  let r = inject(m$1, null),
    v = ref([]);

  function b(q) {
    return v.value.push(q), r && r.register(q), () => k(q)
  }

  function k(q) {
    let V = v.value.indexOf(q);
    V !== -1 && v.value.splice(V, 1), r && r.unregister(q)
  }
  let M = {
    register: b,
    unregister: k,
    portals: v
  };
  return [v, defineComponent({
    name: "PortalWrapper",
    setup(q, {
      slots: V
    }) {
      return provide(m$1, M), () => {
        var D;
        return (D = V.default) == null ? void 0 : D.call(V)
      }
    }
  })]
}
let C = Symbol("PortalGroupContext"),
  N$1 = defineComponent({
    name: "PortalGroup",
    props: {
      as: {
        type: [Object, String],
        default: "template"
      },
      target: {
        type: Object,
        default: null
      }
    },
    setup(r, {
      attrs: v,
      slots: b
    }) {
      let k = reactive({
        resolveTarget() {
          return r.target
        }
      });
      return provide(C, k), () => {
        let {
          target: M,
          ...q
        } = r;
        return A$2({
          theirProps: q,
          ourProps: {},
          slot: {},
          attrs: v,
          slots: b,
          name: "PortalGroup"
        })
      }
    }
  });
var be = (r => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(be || {});
let j = Symbol("DialogContext");

function T(r) {
  let v = inject(j, null);
  if (v === null) {
    let b = new Error(`<${r} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(b, T), b
  }
  return v
}
let I = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
  _e = defineComponent({
    name: "Dialog",
    inheritAttrs: !1,
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
      open: {
        type: [Boolean, String],
        default: I
      },
      initialFocus: {
        type: Object,
        default: null
      },
      id: {
        type: String,
        default: () => `headlessui-dialog-${t$5()}`
      },
      role: {
        type: String,
        default: "dialog"
      }
    },
    emits: {
      close: r => !0
    },
    setup(r, {
      emit: v,
      attrs: b,
      slots: k,
      expose: M
    }) {
      var q;
      let V = ref(!1);
      onMounted(() => {
        V.value = !0
      });
      let D = !1,
        U = computed(() => r.role === "dialog" || r.role === "alertdialog" ? r.role : (D || (D = !0, console.warn(`Invalid role [${U}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")),
        Y = ref(0),
        K = l$2(),
        se = computed(() => r.open === I && K !== null ? (K.value & i$4.Open) === i$4.Open : r.open),
        te = ref(null),
        ee = computed(() => i$2(te));
      if (M({
          el: te,
          $el: te
        }), !(r.open !== I || K !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
      if (typeof se.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${se.value===I?void 0:r.open}`);
      let X = computed(() => V.value && se.value ? 0 : 1),
        le = computed(() => X.value === 0),
        oe = computed(() => Y.value > 1),
        ne = inject(j, null) !== null,
        [G, ae] = A(),
        {
          resolveContainers: Z,
          mainTreeNodeRef: fe,
          MainTreeNode: Ve
        } = N$2({
          portals: G,
          defaultContainers: [computed(() => {
            var re;
            return (re = ve.panelRef.value) != null ? re : te.value
          })]
        }),
        Ie = computed(() => oe.value ? "parent" : "leaf"),
        ke = computed(() => K !== null ? (K.value & i$4.Closing) === i$4.Closing : !1),
        Le = computed(() => ne || ke.value ? !1 : le.value),
        Ce = computed(() => {
          var re, de, ye;
          return (ye = Array.from((de = (re = ee.value) == null ? void 0 : re.querySelectorAll("body > *")) != null ? de : []).find(we => we.id === "headlessui-portal-root" ? !1 : we.contains(o$1(fe)) && we instanceof HTMLElement)) != null ? ye : null
        });
      E(Ce, Le);
      let Ee = computed(() => oe.value ? !0 : le.value),
        Me = computed(() => {
          var re, de, ye;
          return (ye = Array.from((de = (re = ee.value) == null ? void 0 : re.querySelectorAll("[data-headlessui-portal]")) != null ? de : []).find(we => we.contains(o$1(fe)) && we instanceof HTMLElement)) != null ? ye : null
        });
      E(Me, Ee), R$1({
        type: "Dialog",
        enabled: computed(() => X.value === 0),
        element: te,
        onUpdate: (re, de) => {
          if (de === "Dialog") return u$4(re, {
            [s.Add]: () => Y.value += 1,
            [s.Remove]: () => Y.value -= 1
          })
        }
      });
      let $e = S$1({
          name: "DialogDescription",
          slot: computed(() => ({
            open: se.value
          }))
        }),
        xe = ref(null),
        ve = {
          titleId: xe,
          panelRef: ref(null),
          dialogState: X,
          setTitleId(re) {
            xe.value !== re && (xe.value = re)
          },
          close() {
            v("close", !1)
          }
        };
      provide(j, ve);
      let Be = computed(() => !(!le.value || oe.value));
      w$1(Z, (re, de) => {
        ve.close(), nextTick(() => de == null ? void 0 : de.focus())
      }, Be);
      let Oe = computed(() => !(oe.value || X.value !== 0));
      E$1((q = ee.value) == null ? void 0 : q.defaultView, "keydown", re => {
        Oe.value && (re.defaultPrevented || re.key === o$2.Escape && (re.preventDefault(), re.stopPropagation(), ve.close()))
      });
      let qe = computed(() => !(ke.value || X.value !== 0 || ne));
      return d$1(ee, qe, re => {
        var de;
        return {
          containers: [...(de = re.containers) != null ? de : [], Z]
        }
      }), watchEffect(re => {
        if (X.value !== 0) return;
        let de = o$1(te);
        if (!de) return;
        let ye = new ResizeObserver(we => {
          for (let Re of we) {
            let Ne = Re.target.getBoundingClientRect();
            Ne.x === 0 && Ne.y === 0 && Ne.width === 0 && Ne.height === 0 && ve.close()
          }
        });
        ye.observe(de), re(() => ye.disconnect())
      }), () => {
        let {
          id: re,
          open: de,
          initialFocus: ye,
          ...we
        } = r, Re = {
          ...b,
          ref: te,
          id: re,
          role: U.value,
          "aria-modal": X.value === 0 ? !0 : void 0,
          "aria-labelledby": xe.value,
          "aria-describedby": $e.value
        }, Ne = {
          open: X.value === 0
        };
        return h$1(u$2, {
          force: !0
        }, () => [h$1(_, () => h$1(N$1, {
          target: te.value
        }, () => h$1(u$2, {
          force: !1
        }, () => h$1(ue, {
          initialFocus: ye,
          containers: Z,
          features: le.value ? u$4(Ie.value, {
            parent: ue.features.RestoreFocus,
            leaf: ue.features.All & ~ue.features.FocusLock
          }) : ue.features.None
        }, () => h$1(ae, {}, () => A$2({
          ourProps: Re,
          theirProps: {
            ...we,
            ...b
          },
          slot: Ne,
          attrs: b,
          slots: k,
          visible: X.value === 0,
          features: N$5.RenderStrategy | N$5.Static,
          name: "Dialog"
        })))))), h$1(Ve)])
      }
    }
  }),
  Ye = defineComponent({
    name: "DialogPanel",
    props: {
      as: {
        type: [Object, String],
        default: "div"
      },
      id: {
        type: String,
        default: () => `headlessui-dialog-panel-${t$5()}`
      }
    },
    setup(r, {
      attrs: v,
      slots: b,
      expose: k
    }) {
      let M = T("DialogPanel");
      k({
        el: M.panelRef,
        $el: M.panelRef
      });

      function q(V) {
        V.stopPropagation()
      }
      return () => {
        let {
          id: V,
          ...D
        } = r, U = {
          id: V,
          ref: M.panelRef,
          onClick: q
        };
        return A$2({
          ourProps: U,
          theirProps: D,
          slot: {
            open: M.dialogState.value === 0
          },
          attrs: v,
          slots: b,
          name: "DialogPanel"
        })
      }
    }
  }),
  ze = defineComponent({
    name: "DialogTitle",
    props: {
      as: {
        type: [Object, String],
        default: "h2"
      },
      id: {
        type: String,
        default: () => `headlessui-dialog-title-${t$5()}`
      }
    },
    setup(r, {
      attrs: v,
      slots: b
    }) {
      let k = T("DialogTitle");
      return onMounted(() => {
        k.setTitleId(r.id), onUnmounted(() => k.setTitleId(null))
      }), () => {
        let {
          id: M,
          ...q
        } = r;
        return A$2({
          ourProps: {
            id: M
          },
          theirProps: q,
          slot: {
            open: k.dialogState.value === 0
          },
          attrs: v,
          slots: b,
          name: "DialogTitle"
        })
      }
    }
  }),
  S = Symbol("GroupContext"),
  ie = defineComponent({
    name: "Switch",
    emits: {
      "update:modelValue": r => !0
    },
    props: {
      as: {
        type: [Object, String],
        default: "button"
      },
      modelValue: {
        type: Boolean,
        default: void 0
      },
      defaultChecked: {
        type: Boolean,
        optional: !0
      },
      form: {
        type: String,
        optional: !0
      },
      name: {
        type: String,
        optional: !0
      },
      value: {
        type: String,
        optional: !0
      },
      id: {
        type: String,
        default: () => `headlessui-switch-${t$5()}`
      }
    },
    inheritAttrs: !1,
    setup(r, {
      emit: v,
      attrs: b,
      slots: k,
      expose: M
    }) {
      let q = inject(S, null),
        [V, D] = d$4(computed(() => r.modelValue), oe => v("update:modelValue", oe), computed(() => r.defaultChecked));

      function U() {
        D(!V.value)
      }
      let Y = ref(null),
        K = q === null ? Y : q.switchRef,
        se = s$4(computed(() => ({
          as: r.as,
          type: b.type
        })), K);
      M({
        el: K,
        $el: K
      });

      function te(oe) {
        oe.preventDefault(), U()
      }

      function ee(oe) {
        oe.key === o$2.Space ? (oe.preventDefault(), U()) : oe.key === o$2.Enter && p(oe.currentTarget)
      }

      function X(oe) {
        oe.preventDefault()
      }
      let le = computed(() => {
        var oe, ne;
        return (ne = (oe = o$1(K)) == null ? void 0 : oe.closest) == null ? void 0 : ne.call(oe, "form")
      });
      return onMounted(() => {
        watch([le], () => {
          if (!le.value || r.defaultChecked === void 0) return;

          function oe() {
            D(r.defaultChecked)
          }
          return le.value.addEventListener("reset", oe), () => {
            var ne;
            (ne = le.value) == null || ne.removeEventListener("reset", oe)
          }
        }, {
          immediate: !0
        })
      }), () => {
        let {
          id: oe,
          name: ne,
          value: G,
          form: ae,
          ...Z
        } = r, fe = {
          checked: V.value
        }, Ve = {
          id: oe,
          ref: K,
          role: "switch",
          type: se.value,
          tabIndex: 0,
          "aria-checked": V.value,
          "aria-labelledby": q == null ? void 0 : q.labelledby.value,
          "aria-describedby": q == null ? void 0 : q.describedby.value,
          onClick: te,
          onKeyup: ee,
          onKeypress: X
        };
        return h$1(Fragment, [ne != null && V.value != null ? h$1(f, E$3({
          features: s$2.Hidden,
          as: "input",
          type: "checkbox",
          hidden: !0,
          readOnly: !0,
          checked: V.value,
          form: ae,
          name: ne,
          value: G
        })) : null, A$2({
          ourProps: Ve,
          theirProps: {
            ...b,
            ...T$2(Z, ["modelValue", "defaultChecked"])
          },
          slot: fe,
          attrs: b,
          slots: k,
          name: "Switch"
        })])
      }
    }
  });

function l(r) {
  let v = {
    called: !1
  };
  return (...b) => {
    if (!v.called) return v.called = !0, r(...b)
  }
}

function m(r, ...v) {
  r && v.length > 0 && r.classList.add(...v)
}

function d(r, ...v) {
  r && v.length > 0 && r.classList.remove(...v)
}
var g$1 = (r => (r.Finished = "finished", r.Cancelled = "cancelled", r))(g$1 || {});

function F(r, v) {
  let b = o();
  if (!r) return b.dispose;
  let {
    transitionDuration: k,
    transitionDelay: M
  } = getComputedStyle(r), [q, V] = [k, M].map(D => {
    let [U = 0] = D.split(",").filter(Boolean).map(Y => Y.includes("ms") ? parseFloat(Y) : parseFloat(Y) * 1e3).sort((Y, K) => K - Y);
    return U
  });
  return q !== 0 ? b.setTimeout(() => v("finished"), q + V) : v("finished"), b.add(() => v("cancelled")), b.dispose
}

function L$1(r, v, b, k, M, q) {
  let V = o(),
    D = q !== void 0 ? l(q) : () => {};
  return d(r, ...M), m(r, ...v, ...b), V.nextFrame(() => {
    d(r, ...b), m(r, ...k), V.add(F(r, U => (d(r, ...k, ...v), m(r, ...M), D(U))))
  }), V.add(() => d(r, ...v, ...b, ...k, ...M)), V.add(() => D("cancelled")), V.dispose
}

function g(r = "") {
  return r.split(/\s+/).filter(v => v.length > 1)
}
let R = Symbol("TransitionContext");
var pe = (r => (r.Visible = "visible", r.Hidden = "hidden", r))(pe || {});

function me() {
  return inject(R, null) !== null
}

function Te() {
  let r = inject(R, null);
  if (r === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return r
}

function ge() {
  let r = inject(N, null);
  if (r === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return r
}
let N = Symbol("NestingContext");

function L(r) {
  return "children" in r ? L(r.children) : r.value.filter(({
    state: v
  }) => v === "visible").length > 0
}

function Q(r) {
  let v = ref([]),
    b = ref(!1);
  onMounted(() => b.value = !0), onUnmounted(() => b.value = !1);

  function k(q, V = S$3.Hidden) {
    let D = v.value.findIndex(({
      id: U
    }) => U === q);
    D !== -1 && (u$4(V, {
      [S$3.Unmount]() {
        v.value.splice(D, 1)
      },
      [S$3.Hidden]() {
        v.value[D].state = "hidden"
      }
    }), !L(v) && b.value && (r == null || r()))
  }

  function M(q) {
    let V = v.value.find(({
      id: D
    }) => D === q);
    return V ? V.state !== "visible" && (V.state = "visible") : v.value.push({
      id: q,
      state: "visible"
    }), () => k(q, S$3.Unmount)
  }
  return {
    children: v,
    register: M,
    unregister: k
  }
}
let W = N$5.RenderStrategy,
  he = defineComponent({
    props: {
      as: {
        type: [Object, String],
        default: "div"
      },
      show: {
        type: [Boolean],
        default: null
      },
      unmount: {
        type: [Boolean],
        default: !0
      },
      appear: {
        type: [Boolean],
        default: !1
      },
      enter: {
        type: [String],
        default: ""
      },
      enterFrom: {
        type: [String],
        default: ""
      },
      enterTo: {
        type: [String],
        default: ""
      },
      entered: {
        type: [String],
        default: ""
      },
      leave: {
        type: [String],
        default: ""
      },
      leaveFrom: {
        type: [String],
        default: ""
      },
      leaveTo: {
        type: [String],
        default: ""
      }
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0
    },
    setup(r, {
      emit: v,
      attrs: b,
      slots: k,
      expose: M
    }) {
      let q = ref(0);

      function V() {
        q.value |= i$4.Opening, v("beforeEnter")
      }

      function D() {
        q.value &= ~i$4.Opening, v("afterEnter")
      }

      function U() {
        q.value |= i$4.Closing, v("beforeLeave")
      }

      function Y() {
        q.value &= ~i$4.Closing, v("afterLeave")
      }
      if (!me() && s$5()) return () => h$1(Se, {
        ...r,
        onBeforeEnter: V,
        onAfterEnter: D,
        onBeforeLeave: U,
        onAfterLeave: Y
      }, k);
      let K = ref(null),
        se = computed(() => r.unmount ? S$3.Unmount : S$3.Hidden);
      M({
        el: K,
        $el: K
      });
      let {
        show: te,
        appear: ee
      } = Te(), {
        register: X,
        unregister: le
      } = ge(), oe = ref(te.value ? "visible" : "hidden"), ne = {
        value: !0
      }, G = t$5(), ae = {
        value: !1
      }, Z = Q(() => {
        !ae.value && oe.value !== "hidden" && (oe.value = "hidden", le(G), Y())
      });
      onMounted(() => {
        let $e = X(G);
        onUnmounted($e)
      }), watchEffect(() => {
        if (se.value === S$3.Hidden && G) {
          if (te.value && oe.value !== "visible") {
            oe.value = "visible";
            return
          }
          u$4(oe.value, {
            hidden: () => le(G),
            visible: () => X(G)
          })
        }
      });
      let fe = g(r.enter),
        Ve = g(r.enterFrom),
        Ie = g(r.enterTo),
        ke = g(r.entered),
        Le = g(r.leave),
        Ce = g(r.leaveFrom),
        Ee = g(r.leaveTo);
      onMounted(() => {
        watchEffect(() => {
          if (oe.value === "visible") {
            let $e = o$1(K);
            if ($e instanceof Comment && $e.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
          }
        })
      });

      function Me($e) {
        let xe = ne.value && !ee.value,
          ve = o$1(K);
        !ve || !(ve instanceof HTMLElement) || xe || (ae.value = !0, te.value && V(), te.value || U(), $e(te.value ? L$1(ve, fe, Ve, Ie, ke, Be => {
          ae.value = !1, Be === g$1.Finished && D()
        }) : L$1(ve, Le, Ce, Ee, ke, Be => {
          ae.value = !1, Be === g$1.Finished && (L(Z) || (oe.value = "hidden", le(G), Y()))
        })))
      }
      return onMounted(() => {
        watch([te], ($e, xe, ve) => {
          Me(ve), ne.value = !1
        }, {
          immediate: !0
        })
      }), provide(N, Z), t$6(computed(() => u$4(oe.value, {
        visible: i$4.Open,
        hidden: i$4.Closed
      }) | q.value)), () => {
        let {
          appear: $e,
          show: xe,
          enter: ve,
          enterFrom: Be,
          enterTo: Oe,
          entered: qe,
          leave: re,
          leaveFrom: de,
          leaveTo: ye,
          ...we
        } = r, Re = {
          ref: K
        }, Ne = {
          ...we,
          ...ee.value && te.value && c$2.isServer ? {
            class: normalizeClass([b.class, we.class, ...fe, ...Ve])
          } : {}
        };
        return A$2({
          theirProps: Ne,
          ourProps: Re,
          slot: {},
          slots: k,
          attrs: b,
          features: W,
          visible: oe.value === "visible",
          name: "TransitionChild"
        })
      }
    }
  }),
  ce = he,
  Se = defineComponent({
    inheritAttrs: !1,
    props: {
      as: {
        type: [Object, String],
        default: "div"
      },
      show: {
        type: [Boolean],
        default: null
      },
      unmount: {
        type: [Boolean],
        default: !0
      },
      appear: {
        type: [Boolean],
        default: !1
      },
      enter: {
        type: [String],
        default: ""
      },
      enterFrom: {
        type: [String],
        default: ""
      },
      enterTo: {
        type: [String],
        default: ""
      },
      entered: {
        type: [String],
        default: ""
      },
      leave: {
        type: [String],
        default: ""
      },
      leaveFrom: {
        type: [String],
        default: ""
      },
      leaveTo: {
        type: [String],
        default: ""
      }
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0
    },
    setup(r, {
      emit: v,
      attrs: b,
      slots: k
    }) {
      let M = l$2(),
        q = computed(() => r.show === null && M !== null ? (M.value & i$4.Open) === i$4.Open : r.show);
      watchEffect(() => {
        if (![!0, !1].includes(q.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')
      });
      let V = ref(q.value ? "visible" : "hidden"),
        D = Q(() => {
          V.value = "hidden"
        }),
        U = ref(!0),
        Y = {
          show: q,
          appear: computed(() => r.appear || !U.value)
        };
      return onMounted(() => {
        watchEffect(() => {
          U.value = !1, q.value ? V.value = "visible" : L(D) || (V.value = "hidden")
        })
      }), provide(N, D), provide(R, Y), () => {
        let K = T$2(r, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]),
          se = {
            unmount: r.unmount
          };
        return A$2({
          ourProps: {
            ...se,
            as: "template"
          },
          theirProps: {},
          slot: {},
          slots: {
            ...k,
            default: () => [h$1(ce, {
              onBeforeEnter: () => v("beforeEnter"),
              onAfterEnter: () => v("afterEnter"),
              onBeforeLeave: () => v("beforeLeave"),
              onAfterLeave: () => v("afterLeave"),
              ...b,
              ...se,
              ...K
            }, k.default)]
          },
          attrs: {},
          features: W,
          visible: V.value === "visible",
          name: "Transition"
        })
      }
    }
  });

function isEmpty(r) {
  return r === 0 ? !1 : Array.isArray(r) && r.length === 0 ? !0 : !r
}

function not(r) {
  return (...v) => !r(...v)
}

function includes(r, v) {
  return r === void 0 && (r = "undefined"), r === null && (r = "null"), r === !1 && (r = "false"), r.toString().toLowerCase().indexOf(v.trim()) !== -1
}

function filterOptions(r, v, b, k) {
  return v ? r.filter(M => includes(k(M, b), v)).sort((M, q) => k(M, b).length - k(q, b).length) : r
}

function stripGroups(r) {
  return r.filter(v => !v.$isLabel)
}

function flattenOptions(r, v) {
  return b => b.reduce((k, M) => M[r] && M[r].length ? (k.push({
    $groupLabel: M[v],
    $isLabel: !0
  }), k.concat(M[r])) : k, [])
}

function filterGroups(r, v, b, k, M) {
  return q => q.map(V => {
    if (!V[b]) return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const D = filterOptions(V[b], r, v, M);
    return D.length ? {
      [k]: V[k],
      [b]: D
    } : []
  })
}
const flow = (...r) => v => r.reduce((b, k) => k(b), v);
var multiselectMixin = {
    data() {
      return {
        search: "",
        isOpen: !1,
        preferredOpenDirection: "below",
        optimizedHeight: this.maxHeight
      }
    },
    props: {
      internalSearch: {
        type: Boolean,
        default: !0
      },
      options: {
        type: Array,
        required: !0
      },
      multiple: {
        type: Boolean,
        default: !1
      },
      trackBy: {
        type: String
      },
      label: {
        type: String
      },
      searchable: {
        type: Boolean,
        default: !0
      },
      clearOnSelect: {
        type: Boolean,
        default: !0
      },
      hideSelected: {
        type: Boolean,
        default: !1
      },
      placeholder: {
        type: String,
        default: "Select option"
      },
      allowEmpty: {
        type: Boolean,
        default: !0
      },
      resetAfter: {
        type: Boolean,
        default: !1
      },
      closeOnSelect: {
        type: Boolean,
        default: !0
      },
      customLabel: {
        type: Function,
        default (r, v) {
          return isEmpty(r) ? "" : v ? r[v] : r
        }
      },
      taggable: {
        type: Boolean,
        default: !1
      },
      tagPlaceholder: {
        type: String,
        default: "Press enter to create a tag"
      },
      tagPosition: {
        type: String,
        default: "top"
      },
      max: {
        type: [Number, Boolean],
        default: !1
      },
      id: {
        default: null
      },
      optionsLimit: {
        type: Number,
        default: 1e3
      },
      groupValues: {
        type: String
      },
      groupLabel: {
        type: String
      },
      groupSelect: {
        type: Boolean,
        default: !1
      },
      blockKeys: {
        type: Array,
        default () {
          return []
        }
      },
      preserveSearch: {
        type: Boolean,
        default: !1
      },
      preselectFirst: {
        type: Boolean,
        default: !1
      },
      preventAutofocus: {
        type: Boolean,
        default: !1
      }
    },
    mounted() {
      !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0])
    },
    computed: {
      internalValue() {
        return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : []
      },
      filteredOptions() {
        const r = this.search || "",
          v = r.toLowerCase().trim();
        let b = this.options.concat();
        return this.internalSearch ? b = this.groupValues ? this.filterAndFlat(b, v, this.label) : filterOptions(b, v, this.label, this.customLabel) : b = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(b) : b, b = this.hideSelected ? b.filter(not(this.isSelected)) : b, this.taggable && v.length && !this.isExistingOption(v) && (this.tagPosition === "bottom" ? b.push({
          isTag: !0,
          label: r
        }) : b.unshift({
          isTag: !0,
          label: r
        })), b.slice(0, this.optionsLimit)
      },
      valueKeys() {
        return this.trackBy ? this.internalValue.map(r => r[this.trackBy]) : this.internalValue
      },
      optionKeys() {
        return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map(v => this.customLabel(v, this.label).toString().toLowerCase())
      },
      currentOptionLabel() {
        return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder
      }
    },
    watch: {
      internalValue: {
        handler() {
          this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("update:modelValue", this.multiple ? [] : null))
        },
        deep: !0
      },
      search() {
        this.$emit("search-change", this.search)
      }
    },
    emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
    methods: {
      getValue() {
        return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0]
      },
      filterAndFlat(r, v, b) {
        return flow(filterGroups(v, b, this.groupValues, this.groupLabel, this.customLabel), flattenOptions(this.groupValues, this.groupLabel))(r)
      },
      flatAndStrip(r) {
        return flow(flattenOptions(this.groupValues, this.groupLabel), stripGroups)(r)
      },
      updateSearch(r) {
        this.search = r
      },
      isExistingOption(r) {
        return this.options ? this.optionKeys.indexOf(r) > -1 : !1
      },
      isSelected(r) {
        const v = this.trackBy ? r[this.trackBy] : r;
        return this.valueKeys.indexOf(v) > -1
      },
      isOptionDisabled(r) {
        return !!r.$isDisabled
      },
      getOptionLabel(r) {
        if (isEmpty(r)) return "";
        if (r.isTag) return r.label;
        if (r.$isLabel) return r.$groupLabel;
        const v = this.customLabel(r, this.label);
        return isEmpty(v) ? "" : v
      },
      select(r, v) {
        if (r.$isLabel && this.groupSelect) {
          this.selectGroup(r);
          return
        }
        if (!(this.blockKeys.indexOf(v) !== -1 || this.disabled || r.$isDisabled || r.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(v === "Tab" && !this.pointerDirty)) {
          if (r.isTag) this.$emit("tag", r.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
          else {
            if (this.isSelected(r)) {
              v !== "Tab" && this.removeElement(r);
              return
            }
            this.multiple ? this.$emit("update:modelValue", this.internalValue.concat([r])) : this.$emit("update:modelValue", r), this.$emit("select", r, this.id), this.clearOnSelect && (this.search = "")
          }
          this.closeOnSelect && this.deactivate()
        }
      },
      selectGroup(r) {
        const v = this.options.find(b => b[this.groupLabel] === r.$groupLabel);
        if (v) {
          if (this.wholeGroupSelected(v)) {
            this.$emit("remove", v[this.groupValues], this.id);
            const b = this.internalValue.filter(k => v[this.groupValues].indexOf(k) === -1);
            this.$emit("update:modelValue", b)
          } else {
            let b = v[this.groupValues].filter(k => !(this.isOptionDisabled(k) || this.isSelected(k)));
            this.max && b.splice(this.max - this.internalValue.length), this.$emit("select", b, this.id), this.$emit("update:modelValue", this.internalValue.concat(b))
          }
          this.closeOnSelect && this.deactivate()
        }
      },
      wholeGroupSelected(r) {
        return r[this.groupValues].every(v => this.isSelected(v) || this.isOptionDisabled(v))
      },
      wholeGroupDisabled(r) {
        return r[this.groupValues].every(this.isOptionDisabled)
      },
      removeElement(r, v = !0) {
        if (this.disabled || r.$isDisabled) return;
        if (!this.allowEmpty && this.internalValue.length <= 1) {
          this.deactivate();
          return
        }
        const b = typeof r == "object" ? this.valueKeys.indexOf(r[this.trackBy]) : this.valueKeys.indexOf(r);
        if (this.multiple) {
          const k = this.internalValue.slice(0, b).concat(this.internalValue.slice(b + 1));
          this.$emit("update:modelValue", k)
        } else this.$emit("update:modelValue", null);
        this.$emit("remove", r, this.id), this.closeOnSelect && v && this.deactivate()
      },
      removeLastElement() {
        this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1)
      },
      activate() {
        this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.preventAutofocus || this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.preventAutofocus || typeof this.$el < "u" && this.$el.focus(), this.$emit("open", this.id))
      },
      deactivate() {
        this.isOpen && (this.isOpen = !1, this.searchable ? this.$refs.search !== null && typeof this.$refs.search < "u" && this.$refs.search.blur() : typeof this.$el < "u" && this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id))
      },
      toggle() {
        this.isOpen ? this.deactivate() : this.activate()
      },
      adjustPosition() {
        if (typeof window > "u") return;
        const r = this.$el.getBoundingClientRect().top,
          v = window.innerHeight - this.$el.getBoundingClientRect().bottom;
        v > this.maxHeight || v > r || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(v - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(r - 40, this.maxHeight))
      }
    }
  },
  pointerMixin = {
    data() {
      return {
        pointer: 0,
        pointerDirty: !1
      }
    },
    props: {
      showPointer: {
        type: Boolean,
        default: !0
      },
      optionHeight: {
        type: Number,
        default: 40
      }
    },
    computed: {
      pointerPosition() {
        return this.pointer * this.optionHeight
      },
      visibleElements() {
        return this.optimizedHeight / this.optionHeight
      }
    },
    watch: {
      filteredOptions() {
        this.pointerAdjust()
      },
      isOpen() {
        this.pointerDirty = !1
      },
      pointer() {
        this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString())
      }
    },
    methods: {
      optionHighlight(r, v) {
        return {
          "multiselect__option--highlight": r === this.pointer && this.showPointer,
          "multiselect__option--selected": this.isSelected(v)
        }
      },
      groupHighlight(r, v) {
        if (!this.groupSelect) return ["multiselect__option--disabled", {
          "multiselect__option--group": v.$isLabel
        }];
        const b = this.options.find(k => k[this.groupLabel] === v.$groupLabel);
        return b && !this.wholeGroupDisabled(b) ? ["multiselect__option--group", {
          "multiselect__option--highlight": r === this.pointer && this.showPointer
        }, {
          "multiselect__option--group-selected": this.wholeGroupSelected(b)
        }] : "multiselect__option--disabled"
      },
      addPointerElement({
        key: r
      } = "Enter") {
        this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], r), this.pointerReset()
      },
      pointerForward() {
        this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0
      },
      pointerBackward() {
        this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0
      },
      pointerReset() {
        this.closeOnSelect && (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0))
      },
      pointerAdjust() {
        this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()
      },
      pointerSet(r) {
        this.pointer = r, this.pointerDirty = !0
      }
    }
  },
  script = {
    name: "vue-multiselect",
    mixins: [multiselectMixin, pointerMixin],
    compatConfig: {
      MODE: 3,
      ATTR_ENUMERATED_COERCION: !1
    },
    props: {
      name: {
        type: String,
        default: ""
      },
      modelValue: {
        type: null,
        default () {
          return []
        }
      },
      selectLabel: {
        type: String,
        default: "Press enter to select"
      },
      selectGroupLabel: {
        type: String,
        default: "Press enter to select group"
      },
      selectedLabel: {
        type: String,
        default: "Selected"
      },
      deselectLabel: {
        type: String,
        default: "Press enter to remove"
      },
      deselectGroupLabel: {
        type: String,
        default: "Press enter to deselect group"
      },
      showLabels: {
        type: Boolean,
        default: !0
      },
      limit: {
        type: Number,
        default: 99999
      },
      maxHeight: {
        type: Number,
        default: 300
      },
      limitText: {
        type: Function,
        default: r => `and ${r} more`
      },
      loading: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      openDirection: {
        type: String,
        default: ""
      },
      showNoOptions: {
        type: Boolean,
        default: !0
      },
      showNoResults: {
        type: Boolean,
        default: !0
      },
      tabindex: {
        type: Number,
        default: 0
      }
    },
    computed: {
      hasOptionGroup() {
        return this.groupValues && this.groupLabel && this.groupSelect
      },
      isSingleLabelVisible() {
        return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length
      },
      isPlaceholderVisible() {
        return !this.internalValue.length && (!this.searchable || !this.isOpen)
      },
      visibleValues() {
        return this.multiple ? this.internalValue.slice(0, this.limit) : []
      },
      singleValue() {
        return this.internalValue[0]
      },
      deselectLabelText() {
        return this.showLabels ? this.deselectLabel : ""
      },
      deselectGroupLabelText() {
        return this.showLabels ? this.deselectGroupLabel : ""
      },
      selectLabelText() {
        return this.showLabels ? this.selectLabel : ""
      },
      selectGroupLabelText() {
        return this.showLabels ? this.selectGroupLabel : ""
      },
      selectedLabelText() {
        return this.showLabels ? this.selectedLabel : ""
      },
      inputStyle() {
        return this.searchable || this.multiple && this.modelValue && this.modelValue.length ? this.isOpen ? {
          width: "100%"
        } : {
          width: "0",
          position: "absolute",
          padding: "0"
        } : ""
      },
      contentStyle() {
        return this.options.length ? {
          display: "inline-block"
        } : {
          display: "block"
        }
      },
      isAbove() {
        return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above"
      },
      showSearchInput() {
        return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0)
      }
    }
  };
const _hoisted_1$8 = {
    ref: "tags",
    class: "multiselect__tags"
  },
  _hoisted_2$8 = {
    class: "multiselect__tags-wrap"
  },
  _hoisted_3$8 = {
    class: "multiselect__spinner"
  },
  _hoisted_4$8 = {
    key: 0
  },
  _hoisted_5$8 = {
    class: "multiselect__option"
  },
  _hoisted_6$8 = {
    class: "multiselect__option"
  },
  _hoisted_7$8 = createTextVNode("No elements found. Consider changing the search query."),
  _hoisted_8$6 = {
    class: "multiselect__option"
  },
  _hoisted_9$5 = createTextVNode("List is empty.");

function render(r, v, b, k, M, q) {
  return openBlock(), createBlock("div", {
    tabindex: r.searchable ? -1 : b.tabindex,
    class: [{
      "multiselect--active": r.isOpen,
      "multiselect--disabled": b.disabled,
      "multiselect--above": q.isAbove,
      "multiselect--has-options-group": q.hasOptionGroup
    }, "multiselect"],
    onFocus: v[14] || (v[14] = V => r.activate()),
    onBlur: v[15] || (v[15] = V => r.searchable ? !1 : r.deactivate()),
    onKeydown: [v[16] || (v[16] = withKeys(withModifiers(V => r.pointerForward(), ["self", "prevent"]), ["down"])), v[17] || (v[17] = withKeys(withModifiers(V => r.pointerBackward(), ["self", "prevent"]), ["up"]))],
    onKeypress: v[18] || (v[18] = withKeys(withModifiers(V => r.addPointerElement(V), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: v[19] || (v[19] = withKeys(V => r.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + r.id
  }, [renderSlot(r.$slots, "caret", {
    toggle: r.toggle
  }, () => [createVNode("div", {
    onMousedown: v[1] || (v[1] = withModifiers(V => r.toggle(), ["prevent", "stop"])),
    class: "multiselect__select"
  }, null, 32)]), renderSlot(r.$slots, "clear", {
    search: r.search
  }), createVNode("div", _hoisted_1$8, [renderSlot(r.$slots, "selection", {
    search: r.search,
    remove: r.removeElement,
    values: q.visibleValues,
    isOpen: r.isOpen
  }, () => [withDirectives(createVNode("div", _hoisted_2$8, [(openBlock(!0), createBlock(Fragment, null, renderList(q.visibleValues, (V, D) => renderSlot(r.$slots, "tag", {
    option: V,
    search: r.search,
    remove: r.removeElement
  }, () => [(openBlock(), createBlock("span", {
    class: "multiselect__tag",
    key: D
  }, [createVNode("span", {
    textContent: toDisplayString(r.getOptionLabel(V))
  }, null, 8, ["textContent"]), createVNode("i", {
    tabindex: "1",
    onKeypress: withKeys(withModifiers(U => r.removeElement(V), ["prevent"]), ["enter"]),
    onMousedown: withModifiers(U => r.removeElement(V), ["prevent"]),
    class: "multiselect__tag-icon"
  }, null, 40, ["onKeypress", "onMousedown"])]))])), 256))], 512), [
    [vShow, q.visibleValues.length > 0]
  ]), r.internalValue && r.internalValue.length > b.limit ? renderSlot(r.$slots, "limit", {
    key: 0
  }, () => [createVNode("strong", {
    class: "multiselect__strong",
    textContent: toDisplayString(b.limitText(r.internalValue.length - b.limit))
  }, null, 8, ["textContent"])]) : createCommentVNode("v-if", !0)]), createVNode(Transition, {
    name: "multiselect__loading"
  }, {
    default: withCtx(() => [renderSlot(r.$slots, "loading", {}, () => [withDirectives(createVNode("div", _hoisted_3$8, null, 512), [
      [vShow, b.loading]
    ])])]),
    _: 3
  }), r.searchable ? (openBlock(), createBlock("input", {
    key: 0,
    ref: "search",
    name: b.name,
    id: r.id,
    type: "text",
    autocomplete: "off",
    spellcheck: !1,
    placeholder: r.placeholder,
    style: q.inputStyle,
    value: r.search,
    disabled: b.disabled,
    tabindex: b.tabindex,
    onInput: v[2] || (v[2] = V => r.updateSearch(V.target.value)),
    onFocus: v[3] || (v[3] = withModifiers(V => r.activate(), ["prevent"])),
    onBlur: v[4] || (v[4] = withModifiers(V => r.deactivate(), ["prevent"])),
    onKeyup: v[5] || (v[5] = withKeys(V => r.deactivate(), ["esc"])),
    onKeydown: [v[6] || (v[6] = withKeys(withModifiers(V => r.pointerForward(), ["prevent"]), ["down"])), v[7] || (v[7] = withKeys(withModifiers(V => r.pointerBackward(), ["prevent"]), ["up"])), v[9] || (v[9] = withKeys(withModifiers(V => r.removeLastElement(), ["stop"]), ["delete"]))],
    onKeypress: v[8] || (v[8] = withKeys(withModifiers(V => r.addPointerElement(V), ["prevent", "stop", "self"]), ["enter"])),
    class: "multiselect__input",
    "aria-controls": "listbox-" + r.id
  }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : createCommentVNode("v-if", !0), q.isSingleLabelVisible ? (openBlock(), createBlock("span", {
    key: 1,
    class: "multiselect__single",
    onMousedown: v[10] || (v[10] = withModifiers((...V) => r.toggle && r.toggle(...V), ["prevent"]))
  }, [renderSlot(r.$slots, "singleLabel", {
    option: q.singleValue
  }, () => [createTextVNode(toDisplayString(r.currentOptionLabel), 1)])], 32)) : createCommentVNode("v-if", !0), q.isPlaceholderVisible ? (openBlock(), createBlock("span", {
    key: 2,
    class: "multiselect__placeholder",
    onMousedown: v[11] || (v[11] = withModifiers((...V) => r.toggle && r.toggle(...V), ["prevent"]))
  }, [renderSlot(r.$slots, "placeholder", {}, () => [createTextVNode(toDisplayString(r.placeholder), 1)])], 32)) : createCommentVNode("v-if", !0)], 512), createVNode(Transition, {
    name: "multiselect"
  }, {
    default: withCtx(() => [withDirectives(createVNode("div", {
      class: "multiselect__content-wrapper",
      onFocus: v[12] || (v[12] = (...V) => r.activate && r.activate(...V)),
      tabindex: "-1",
      onMousedown: v[13] || (v[13] = withModifiers(() => {}, ["prevent"])),
      style: {
        maxHeight: r.optimizedHeight + "px"
      },
      ref: "list"
    }, [createVNode("ul", {
      class: "multiselect__content",
      style: q.contentStyle,
      role: "listbox",
      id: "listbox-" + r.id
    }, [renderSlot(r.$slots, "beforeList"), r.multiple && r.max === r.internalValue.length ? (openBlock(), createBlock("li", _hoisted_4$8, [createVNode("span", _hoisted_5$8, [renderSlot(r.$slots, "maxElements", {}, () => [createTextVNode("Maximum of " + toDisplayString(r.max) + " options selected. First remove a selected option to select another.", 1)])])])) : createCommentVNode("v-if", !0), !r.max || r.internalValue.length < r.max ? (openBlock(!0), createBlock(Fragment, {
      key: 1
    }, renderList(r.filteredOptions, (V, D) => (openBlock(), createBlock("li", {
      class: "multiselect__element",
      key: D,
      id: r.id + "-" + D,
      role: V && (V.$isLabel || V.$isDisabled) ? null : "option"
    }, [V && (V.$isLabel || V.$isDisabled) ? createCommentVNode("v-if", !0) : (openBlock(), createBlock("span", {
      key: 0,
      class: [r.optionHighlight(D, V), "multiselect__option"],
      onClick: withModifiers(U => r.select(V), ["stop"]),
      onMouseenter: withModifiers(U => r.pointerSet(D), ["self"]),
      "data-select": V && V.isTag ? r.tagPlaceholder : q.selectLabelText,
      "data-selected": q.selectedLabelText,
      "data-deselect": q.deselectLabelText
    }, [renderSlot(r.$slots, "option", {
      option: V,
      search: r.search,
      index: D
    }, () => [createVNode("span", null, toDisplayString(r.getOptionLabel(V)), 1)])], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])), V && (V.$isLabel || V.$isDisabled) ? (openBlock(), createBlock("span", {
      key: 1,
      "data-select": r.groupSelect && q.selectGroupLabelText,
      "data-deselect": r.groupSelect && q.deselectGroupLabelText,
      class: [r.groupHighlight(D, V), "multiselect__option"],
      onMouseenter: withModifiers(U => r.groupSelect && r.pointerSet(D), ["self"]),
      onMousedown: withModifiers(U => r.selectGroup(V), ["prevent"])
    }, [renderSlot(r.$slots, "option", {
      option: V,
      search: r.search,
      index: D
    }, () => [createVNode("span", null, toDisplayString(r.getOptionLabel(V)), 1)])], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : createCommentVNode("v-if", !0)], 8, ["id", "role"]))), 128)) : createCommentVNode("v-if", !0), withDirectives(createVNode("li", null, [createVNode("span", _hoisted_6$8, [renderSlot(r.$slots, "noResult", {
      search: r.search
    }, () => [_hoisted_7$8])])], 512), [
      [vShow, b.showNoResults && r.filteredOptions.length === 0 && r.search && !b.loading]
    ]), withDirectives(createVNode("li", null, [createVNode("span", _hoisted_8$6, [renderSlot(r.$slots, "noOptions", {}, () => [_hoisted_9$5])])], 512), [
      [vShow, b.showNoOptions && (r.options.length === 0 || q.hasOptionGroup === !0 && r.filteredOptions.length === 0) && !r.search && !b.loading]
    ]), renderSlot(r.$slots, "afterList")], 12, ["id"])], 36), [
      [vShow, r.isOpen]
    ])]),
    _: 3
  })], 42, ["tabindex", "aria-owns"])
}
script.render = render;
const _hoisted_1$7 = {
    class: ""
  },
  _hoisted_2$7 = createBaseVNode("div", {
    class: "fixed inset-0 bg-black/25"
  }, null, -1),
  _hoisted_3$7 = {
    class: "fixed inset-0 overflow-y-auto"
  },
  _hoisted_4$7 = {
    class: "flex min-h-full items-center justify-center p-4 text-center"
  },
  _hoisted_5$7 = {
    class: "mt-2"
  },
  _hoisted_6$7 = {
    class: "mt-4 flex justify-between"
  },
  _hoisted_7$7 = {
    class: "space-x-8"
  },
  _sfc_main$8 = {
    __name: "Dialog",
    props: {
      buttonLabel: {
        type: String,
        required: !0
      },
      title: {
        type: String,
        required: !0
      },
      classes: {
        type: String,
        default: ""
      }
    },
    emits: ["save", "reset", "cancel", "openModal"],
    setup(r, {
      expose: v,
      emit: b
    }) {
      const k = ref(!1);

      function M() {
        k.value = !1
      }

      function q() {
        k.value = !0
      }
      v({
        closeModal: M,
        openModal: q
      });
      const V = b;
      return watch(k, D => {
        D && V("openModal", D)
      }), (D, U) => (openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", _hoisted_1$7, [renderSlot(D.$slots, "button", {
        openModal: q
      })]), createVNode(unref(Se), {
        appear: "",
        show: k.value,
        as: "template"
      }, {
        default: withCtx(() => [createVNode(unref(_e), {
          as: "div",
          onClose: M,
          class: "relative z-10"
        }, {
          default: withCtx(() => [createVNode(unref(he), {
            as: "template",
            enter: "duration-300 ease-out",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "duration-200 ease-in",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: withCtx(() => [_hoisted_2$7]),
            _: 1
          }), createBaseVNode("div", _hoisted_3$7, [createBaseVNode("div", _hoisted_4$7, [createVNode(unref(he), {
            as: "template",
            enter: "duration-300 ease-out",
            "enter-from": "opacity-0 scale-95",
            "enter-to": "opacity-100 scale-100",
            leave: "duration-200 ease-in",
            "leave-from": "opacity-100 scale-100",
            "leave-to": "opacity-0 scale-95"
          }, {
            default: withCtx(() => [createVNode(unref(Ye), {
              class: normalizeClass(["w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all", r.classes])
            }, {
              default: withCtx(() => [createVNode(unref(ze), {
                as: "h3",
                class: "flex gap-2 items-center text-lg font-medium leading-6 text-gray-900"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(r.title) + " ", 1), renderSlot(D.$slots, "reference")]),
                _: 3
              }), createBaseVNode("div", _hoisted_5$7, [renderSlot(D.$slots, "content")]), createBaseVNode("div", _hoisted_6$7, [createBaseVNode("button", {
                type: "button",
                class: "inline-flex justify-center rounded-md border border-transparent bg-red-50 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                onClick: U[0] || (U[0] = Y => V("cancel"))
              }, " Cancel "), createBaseVNode("div", _hoisted_7$7, [createBaseVNode("button", {
                type: "button",
                class: "inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-[#002D9D] hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                onClick: U[1] || (U[1] = Y => V("reset"))
              }, " Reset "), createBaseVNode("button", {
                type: "button",
                class: "inline-flex justify-center rounded-md border border-transparent bg-[#002D9D] px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                onClick: U[2] || (U[2] = Y => V("save"))
              }, " Save ")])])]),
              _: 3
            }, 8, ["class"])]),
            _: 3
          })])])]),
          _: 3
        })]),
        _: 3
      }, 8, ["show"])], 64))
    }
  };
defineStore("dialogInput", () => ({
  hardwareSlowdownAdvancedOptions: ref({
    speed: 1e4,
    gateOverhead: 100,
    algorithmConstant: 1,
    gateTime: 100,
    cpuGHz: 5
  })
}));
const _hoisted_1$6 = {
    class: "flex flex-col"
  },
  _hoisted_2$6 = {
    class: "flex items-center gap-2"
  },
  _hoisted_3$6 = createBaseVNode("label", {
    class: "font-medium text-sm",
    for: "speed"
  }, "Classical/Quantum Speed Ratio", -1),
  _hoisted_4$6 = {
    class: "text-xs"
  },
  _hoisted_5$6 = createBaseVNode("p", {
    class: "text-xs text-gray-600"
  }, "The ratio of the speed of a classical computer divided by the speed of the quantum computer.", -1),
  _hoisted_6$6 = {
    key: 0
  },
  _hoisted_7$6 = {
    class: "flex items-end mt-2 justify-between w-full gap-2"
  },
  _hoisted_8$5 = {
    class: "flex-1"
  },
  _hoisted_9$4 = {
    class: "flex items-end"
  },
  _hoisted_10$4 = {
    class: ""
  },
  _hoisted_11$4 = createBaseVNode("p", {
    class: "font-medium text-xs"
  }, [createTextVNode("Average Quantum"), createBaseVNode("br"), createTextVNode("Operation Time")], -1),
  _hoisted_12$4 = createBaseVNode("p", {
    style: {
      "font-size": "9px"
    }
  }, "(Default: Two-Qubit Gate Time)", -1),
  _hoisted_13$4 = {
    class: "flex items-center gap-1"
  },
  _hoisted_14$4 = createBaseVNode("p", {
    class: "font-medium text-xs"
  }, "Classical CPU GHz", -1),
  _hoisted_15$3 = {
    class: "flex items-center gap-1"
  },
  _hoisted_16$3 = {
    class: "w-1/5"
  },
  _hoisted_17$3 = createBaseVNode("p", {
    class: "font-medium text-xs"
  }, "Speed ratio", -1),
  _hoisted_18$3 = {
    class: "bg-gray-100 p-2 rounded-lg text-center w-full"
  },
  _hoisted_19$3 = {
    key: 1
  },
  _hoisted_20$3 = {
    class: "flex items-center justify-between w-full gap-2"
  },
  _hoisted_21$3 = {
    class: "mt-4"
  },
  _hoisted_22$3 = createBaseVNode("label", {
    class: "font-medium text-sm",
    for: "gateOverhead"
  }, "Error Correction Gate Overhead", -1),
  _hoisted_23$3 = createBaseVNode("p", {
    class: "text-xs text-gray-600"
  }, "The gate overhead (i.e. additional calculations) that a quantum computer needs to take to maintain its error correction.", -1),
  _hoisted_24$3 = {
    class: "flex items-center justify-between w-full gap-2"
  },
  _hoisted_25$3 = {
    class: "mt-4"
  },
  _hoisted_26$2 = createBaseVNode("label", {
    class: "font-medium text-sm",
    for: "algorithmConstant"
  }, "Algorithm Constant Ratio", -1),
  _hoisted_27$2 = createBaseVNode("p", {
    class: "text-xs text-gray-600"
  }, " The ratio of the multiplicative constant from the classical algorithm's time complexity divided by that from the quantum algorithm's. ", -1),
  _hoisted_28$2 = {
    class: "flex items-center justify-between w-full gap-2"
  },
  _hoisted_29$2 = createBaseVNode("div", {
    class: "mt-4"
  }, [createBaseVNode("p", {
    class: "text-xs text-gray-600"
  }, [createTextVNode(" Source: "), createBaseVNode("a", {
    href: "https://arxiv.org/abs/2310.15505"
  }, "https://arxiv.org/abs/2310.15505")])], -1),
  _hoisted_30$2 = {
    class: "mt-4 text-center"
  },
  _hoisted_31$2 = createBaseVNode("h2", {
    class: "italic font-medium"
  }, "Speed x Gate Overhead x Alg. Constant =", -1),
  _hoisted_32$1 = {
    class: "font-medium text-2xl"
  },
  _sfc_main$7 = {
    __name: "HardwareSlowdownAdvanced",
    props: {
      advancedSlowdown: Object
    },
    emits: ["updateSlowdown"],
    setup(r, {
      emit: v
    }) {
      const b = ref(null),
        k = r,
        M = ref("simple"),
        q = ref(k.advancedSlowdown.gateTime),
        V = ref(k.advancedSlowdown.cpuGHz),
        D = ref(k.advancedSlowdown.speed),
        U = ref(k.advancedSlowdown.gateOverhead),
        Y = ref(k.advancedSlowdown.algorithmConstant),
        K = computed(() => q.value * V.value),
        se = ref(0);
      watch([() => [M.value, K.value, D.value, U.value, Y.value], () => {
        M.value === "manual" ? se.value = round(Math.log10(K.value * U.value * Y.value), 2) : se.value = round(Math.log10(D.value * U.value * Y.value), 2)
      }]);

      function te() {
        let oe = {
          gateTime: q.value,
          cpuGHz: V.value,
          speed: D.value,
          gateOverhead: U.value,
          algorithmConstant: Y.value
        };
        le("updateSlowdown", se.value, oe), b.value.closeModal()
      }

      function ee() {
        b.value.closeModal()
      }

      function X() {
        q.value = k.advancedSlowdown.gateTime, V.value = k.advancedSlowdown.cpuGHz, D.value = k.advancedSlowdown.speed, U.value = k.advancedSlowdown.gateOverhead, Y.value = k.advancedSlowdown.algorithmConstant
      }
      const le = v;
      return (oe, ne) => (openBlock(), createBlock(_sfc_main$8, {
        title: "Classical Hardware Speed Advantage",
        "button-label": "Advanced options",
        ref_key: "dialog",
        ref: b,
        onSave: te,
        onCancel: ee,
        onReset: X,
        onOpenModal: X,
        classes: "max-w-xl"
      }, {
        button: withCtx(({
          openModal: G
        }) => [renderSlot(oe.$slots, "default", {
          openModal: G
        })]),
        content: withCtx(() => [createBaseVNode("div", _hoisted_1$6, [createBaseVNode("div", _hoisted_2$6, [_hoisted_3$6, createBaseVNode("div", _hoisted_4$6, [withDirectives(createBaseVNode("input", {
          hidden: "",
          type: "radio",
          id: "simple",
          value: "simple",
          "onUpdate:modelValue": ne[0] || (ne[0] = G => M.value = G)
        }, null, 512), [
          [vModelRadio, M.value]
        ]), createBaseVNode("label", {
          class: normalizeClass(["border rounded-sm transition-all text-center p-1", {
            "bg-[#002D9D] text-white": M.value === "simple",
            "bg-gray-100": M.value !== "simple"
          }]),
          for: "simple"
        }, "Simple", 2), withDirectives(createBaseVNode("input", {
          hidden: "",
          type: "radio",
          id: "manual",
          value: "manual",
          "onUpdate:modelValue": ne[1] || (ne[1] = G => M.value = G)
        }, null, 512), [
          [vModelRadio, M.value]
        ]), createBaseVNode("label", {
          class: normalizeClass(["border rounded-sm transition-all text-center p-1", {
            "bg-[#002D9D] text-white": M.value === "manual",
            "bg-gray-100": M.value !== "manual"
          }]),
          for: "manual"
        }, "Manual", 2)])]), _hoisted_5$6, M.value === "manual" ? (openBlock(), createElementBlock("div", _hoisted_6$6, [createBaseVNode("div", _hoisted_7$6, [createBaseVNode("div", _hoisted_8$5, [createBaseVNode("div", _hoisted_9$4, [createBaseVNode("div", _hoisted_10$4, [_hoisted_11$4, _hoisted_12$4, createBaseVNode("div", _hoisted_13$4, [withDirectives(createBaseVNode("input", {
          class: "bg-gray-100 p-1 rounded-lg text-center w-1/2",
          type: "number",
          id: "gateTime",
          "onUpdate:modelValue": ne[2] || (ne[2] = G => q.value = G)
        }, null, 512), [
          [vModelText, q.value]
        ]), createTextVNode(" ns ")])]), createBaseVNode("div", null, [_hoisted_14$4, createBaseVNode("div", _hoisted_15$3, [withDirectives(createBaseVNode("input", {
          class: "bg-gray-100 p-1 rounded-lg text-center w-1/2",
          type: "number",
          id: "cpuGHz",
          "onUpdate:modelValue": ne[3] || (ne[3] = G => V.value = G)
        }, null, 512), [
          [vModelText, V.value]
        ]), createTextVNode(" GHz ")])])])]), createBaseVNode("div", _hoisted_16$3, [_hoisted_17$3, createBaseVNode("div", _hoisted_18$3, toDisplayString(K.value), 1)])])])) : (openBlock(), createElementBlock("div", _hoisted_19$3, [createBaseVNode("div", _hoisted_20$3, [withDirectives(createBaseVNode("input", {
          class: "flex-1 accent-[#002D9D]",
          type: "range",
          id: "speed",
          "onUpdate:modelValue": ne[4] || (ne[4] = G => D.value = G),
          min: "1",
          max: "1000000"
        }, null, 512), [
          [vModelText, D.value]
        ]), withDirectives(createBaseVNode("input", {
          class: "bg-gray-100 p-2 rounded-lg text-center w-1/5",
          type: "number",
          id: "speed",
          "onUpdate:modelValue": ne[5] || (ne[5] = G => D.value = G)
        }, null, 512), [
          [vModelText, D.value]
        ])])]))]), createBaseVNode("div", _hoisted_21$3, [_hoisted_22$3, _hoisted_23$3, createBaseVNode("div", _hoisted_24$3, [withDirectives(createBaseVNode("input", {
          class: "flex-1 accent-[#002D9D]",
          type: "range",
          id: "gateOverhead",
          "onUpdate:modelValue": ne[6] || (ne[6] = G => U.value = G),
          min: "1",
          max: "1000"
        }, null, 512), [
          [vModelText, U.value]
        ]), withDirectives(createBaseVNode("input", {
          class: "bg-gray-100 p-2 rounded-lg text-center w-1/5",
          type: "number",
          id: "gateOverhead",
          "onUpdate:modelValue": ne[7] || (ne[7] = G => U.value = G)
        }, null, 512), [
          [vModelText, U.value]
        ])])]), createBaseVNode("div", _hoisted_25$3, [_hoisted_26$2, _hoisted_27$2, createBaseVNode("div", _hoisted_28$2, [withDirectives(createBaseVNode("input", {
          class: "flex-1 accent-[#002D9D]",
          type: "range",
          id: "algorithmConstant",
          "onUpdate:modelValue": ne[8] || (ne[8] = G => Y.value = G),
          min: "0.1",
          max: "2",
          step: "0.1"
        }, null, 512), [
          [vModelText, Y.value]
        ]), withDirectives(createBaseVNode("input", {
          class: "bg-gray-100 p-2 rounded-lg text-center w-1/5",
          type: "number",
          id: "algorithmConstant",
          "onUpdate:modelValue": ne[9] || (ne[9] = G => Y.value = G)
        }, null, 512), [
          [vModelText, Y.value]
        ])])]), _hoisted_29$2, createBaseVNode("div", _hoisted_30$2, [_hoisted_31$2, createBaseVNode("h2", _hoisted_32$1, [createTextVNode("10"), createBaseVNode("sup", null, toDisplayString(se.value), 1)])])]),
        _: 3
      }, 512))
    }
  },
  _sfc_main$6 = {
    __name: "QubitsRoadmap",
    props: {
      data: Object,
      extrapolationType: String
    },
    setup(r) {
      const v = new Date().getFullYear(),
        b = r,
        k = ref(Array.from({
          length: Math.max(Math.max(...Object.keys(b.data)) + 10, v + 10) - v
        }, (V, D) => [D + v, getPhysicalQubits(D + v, b.data, b.extrapolationType)])),
        M = {
          chart: {
            type: "spline",
            zoomType: "xy"
          },
          title: {
            text: null
          },
          credits: {
            enabled: !1
          },
          tooltip: {
            useHTML: !0,
            formatter: function() {
              return `Qubits: ${parseInt(10**this.y)}<br>Year: ${this.x}`
            }
          },
          legend: {
            enabled: !0,
            align: "left",
            verticalAlign: "top",
            layout: "vertical",
            x: 60,
            y: 0,
            floating: !0
          },
          xAxis: {
            title: {
              text: "Year"
            },
            startOnTick: !0,
            min: v
          },
          yAxis: {
            title: {
              text: "Qubits"
            },
            logarithmic: !0,
            labels: {
              formatter: function() {
                return toBase10HTML(this.value)
              },
              useHTML: !0
            }
          },
          series: [{
            data: k.value,
            type: "line",
            color: "#002D9D55",
            enableMouseTracking: !1,
            showInLegend: !1
          }, {
            name: "Roadmap",
            data: k.value.filter(([V, D]) => b.data.hasOwnProperty(V)),
            type: "scatter",
            color: "blue",
            marker: {
              symbol: "circle"
            },
            dataLabels: {
              enabled: !0,
              formatter: function() {
                return parseInt(10 ** this.y)
              },
              style: {
                fontSize: "9px",
                color: "blue",
                fontWeight: "light",
                textOutline: !1
              }
            }
          }, {
            name: "Extrapolated",
            data: k.value.filter(([V, D]) => !b.data.hasOwnProperty(V)),
            type: "scatter",
            color: "red",
            marker: {
              symbol: "circle"
            },
            dataLabels: {
              enabled: !0,
              formatter: function() {
                return parseInt(10 ** this.y)
              },
              style: {
                fontSize: "9px",
                color: "red",
                fontWeight: "light",
                textOutline: !1
              }
            }
          }]
        },
        q = ref(0);
      return watch(() => [b.data, b.extrapolationType], () => {
        k.value = Array.from({
          length: Math.max(Math.max(...Object.keys(b.data)), v + 10) - v + 1
        }, (V, D) => [D + v, getPhysicalQubits(D + v, b.data, b.extrapolationType)]), M.series[0].data = k.value, M.series[1].data = k.value.filter(([V, D]) => b.data.hasOwnProperty(V)), M.series[2].data = k.value.filter(([V, D]) => !b.data.hasOwnProperty(V)), q.value += 1
      }, {
        deep: !0
      }), (V, D) => (openBlock(), createElementBlock("div", null, [(openBlock(), createBlock(unref(highchartsVue_minExports.Chart), {
        key: q.value,
        options: M
      }))]))
    }
  },
  _hoisted_1$5 = createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-5 h-5"
  }, [createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  })], -1),
  _hoisted_2$5 = createBaseVNode("span", {
    class: "transform translate-y-[-1200px] group-hover:translate-y-0 transition-opacity duration-300 delay-500 opacity-0 group-hover:opacity-100 absolute top-6 -left-full z-50 bg-gray-700 rounded-lg text-white p-1"
  }, "References", -1),
  _hoisted_3$5 = [_hoisted_1$5, _hoisted_2$5],
  _hoisted_4$5 = createBaseVNode("div", {
    class: "fixed inset-0 bg-black/25"
  }, null, -1),
  _hoisted_5$5 = {
    class: "fixed inset-0 overflow-y-auto"
  },
  _hoisted_6$5 = {
    class: "flex min-h-full items-center justify-center p-4 text-center"
  },
  _hoisted_7$5 = {
    class: "mt-2"
  },
  _sfc_main$5 = {
    __name: "ReferenceDialog",
    props: {
      buttonLabel: {
        type: String,
        required: !0
      },
      title: {
        type: String,
        required: !0
      },
      classes: {
        type: String,
        default: ""
      }
    },
    emits: ["save", "reset", "cancel", "openModal"],
    setup(r, {
      expose: v,
      emit: b
    }) {
      const k = ref(!1);

      function M() {
        k.value = !1
      }

      function q() {
        k.value = !0
      }
      v({
        closeModal: M,
        openModal: q
      });
      const V = b;
      return watch(k, D => {
        D && V("openModal", D)
      }), (D, U) => (openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", {
        class: "group flex items-center relative"
      }, [createBaseVNode("button", {
        type: "button",
        onClick: q,
        class: "text-gray-700"
      }, _hoisted_3$5)]), createVNode(unref(Se), {
        appear: "",
        show: k.value,
        as: "template"
      }, {
        default: withCtx(() => [createVNode(unref(_e), {
          as: "div",
          onClose: M,
          class: "relative z-10"
        }, {
          default: withCtx(() => [createVNode(unref(he), {
            as: "template",
            enter: "duration-300 ease-out",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "duration-200 ease-in",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: withCtx(() => [_hoisted_4$5]),
            _: 1
          }), createBaseVNode("div", _hoisted_5$5, [createBaseVNode("div", _hoisted_6$5, [createVNode(unref(he), {
            as: "template",
            enter: "duration-300 ease-out",
            "enter-from": "opacity-0 scale-95",
            "enter-to": "opacity-100 scale-100",
            leave: "duration-200 ease-in",
            "leave-from": "opacity-100 scale-100",
            "leave-to": "opacity-0 scale-95"
          }, {
            default: withCtx(() => [createVNode(unref(Ye), {
              class: normalizeClass(["w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all", r.classes])
            }, {
              default: withCtx(() => [createVNode(unref(ze), {
                as: "h3",
                class: "text-lg font-medium leading-6 text-gray-900"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(r.title), 1)]),
                _: 1
              }), createBaseVNode("div", _hoisted_7$5, [renderSlot(D.$slots, "content")]), createBaseVNode("div", {
                class: "mt-4 flex justify-between"
              }, [createBaseVNode("button", {
                type: "button",
                class: "inline-flex justify-center rounded-md border border-transparent bg-red-50 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                onClick: M
              }, " Close ")])]),
              _: 3
            }, 8, ["class"])]),
            _: 3
          })])])]),
          _: 3
        })]),
        _: 3
      }, 8, ["show"])], 64))
    }
  },
  _hoisted_1$4 = {
    class: "table-responsive"
  },
  _hoisted_2$4 = {
    class: "min-w-full divide-y divide-gray-300 text-xs"
  },
  _hoisted_3$4 = createBaseVNode("thead", {
    class: "bg-gray-50"
  }, [createBaseVNode("tr", {
    class: "divide-x divide-gray-200 font-medium text-gray-500 text-xs"
  }, [createBaseVNode("th", {
    class: "p-2"
  }, "Roadmap"), createBaseVNode("th", {
    class: "p-2"
  }, "Year"), createBaseVNode("th", {
    class: "p-2"
  }, "Reference")])], -1),
  _hoisted_4$4 = {
    class: "divide-y divide-gray-200 bg-white"
  },
  _hoisted_5$4 = {
    class: "p-2"
  },
  _hoisted_6$4 = {
    class: "p-2"
  },
  _hoisted_7$4 = {
    class: "p-2"
  },
  _hoisted_8$4 = ["href"],
  _sfc_main$4 = {
    __name: "HardwareReferences",
    setup(r) {
      const v = [{
        hardwareName: "IBM (Superconducting)",
        year: 2024,
        link: "https://www.ibm.com/roadmaps/quantum/2024/"
      }, {
        hardwareName: "IonQ (Trapped Ion)",
        year: 2024,
        link: "https://ionq.com/posts/how-we-achieved-our-2024-performance-target-of-aq-35"
      }, {
        hardwareName: "QuEra (Neutral Atom)",
        year: 2024,
        link: "https://www.quera.com/qec"
      }, {
        hardwareName: "Rigetti (Superconducting)",
        year: 2024,
        link: "https://www.globenewswire.com/news-release/2022/05/16/2444311/0/en/Rigetti-Computing-Reports-First-Quarter-2022-Financial-Results-and-Provides-Business-Update.html",
        year: 2024
      }, {
        hardwareName: "Google (Superconducting)",
        link: "https://quantumai.google/static/site-assets/images/marketing/misc/roadmap.png",
        year: 2024
      }, {
        hardwareName: "Pasqal (Neutral Atom)",
        link: "https://www.hpcwire.com/2024/03/13/pasqal-issues-roadmap-to-10000-qubits-in-2026-and-fault-tolerance-in-2028/",
        year: 2024
      }, {
        hardwareName: "Infeqtion (Neutral Atom)",
        link: "https://www.nextbigfuture.com/2024/02/infleqtion-1600-qubit-array-today-and-five-year-roadmap-to-fault-tolerant-quantum-computers.html",
        year: 2024
      }, {
        hardwareName: "Quantum Silicon (Semiconductors)",
        link: "https://www.eetimes.eu/cea-leti-details-silicon-based-quantum-computing-roadmap/",
        year: 2024
      }];
      return (b, k) => (openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1$4, [createBaseVNode("table", _hoisted_2$4, [_hoisted_3$4, createBaseVNode("tbody", _hoisted_4$4, [(openBlock(), createElementBlock(Fragment, null, renderList(v, M => createBaseVNode("tr", {
        class: "divide-x divide-gray-200",
        key: M.hardwareName
      }, [createBaseVNode("td", _hoisted_5$4, toDisplayString(M.hardwareName), 1), createBaseVNode("td", _hoisted_6$4, toDisplayString(M.year), 1), createBaseVNode("td", _hoisted_7$4, [createBaseVNode("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        class: "hover:underline",
        href: M.link
      }, " reference link", 8, _hoisted_8$4)])])), 64))])])])]))
    }
  },
  _hoisted_1$3 = {
    class: "flex items-start justify-between gap-4"
  },
  _hoisted_2$3 = {
    class: "flex-[0.5] flex-col gap-4"
  },
  _hoisted_3$3 = createBaseVNode("div", {
    class: "w-full mb-4"
  }, [createBaseVNode("p", {
    class: "text-xs text-justify text-gray-600"
  }, "Adjust the values within the roadmap or incorporate additional data points as needed. Interpolation will be used to address any gaps between existing milestones on the roadmap. For projecting future trends and values beyond the current roadmap, regression analysis will be utilized.")], -1),
  _hoisted_4$3 = {
    class: "my-2 w-full"
  },
  _hoisted_5$3 = createBaseVNode("label", {
    class: "text-xs text-gray-600",
    for: "extrapolationType"
  }, "Extrapolation Type", -1),
  _hoisted_6$3 = createBaseVNode("option", {
    value: "linear"
  }, "Linear", -1),
  _hoisted_7$3 = createBaseVNode("option", {
    value: "exponential"
  }, "Exponential", -1),
  _hoisted_8$3 = [_hoisted_6$3, _hoisted_7$3],
  _hoisted_9$3 = {
    class: "my-2 w-full"
  },
  _hoisted_10$3 = createBaseVNode("label", {
    class: "text-xs text-gray-600",
    for: "extrapolationType"
  }, "Roadmap Unit", -1),
  _hoisted_11$3 = createBaseVNode("option", {
    value: "physical"
  }, "Physical Qubits", -1),
  _hoisted_12$3 = createBaseVNode("option", {
    value: "logical"
  }, "Logical Qubits", -1),
  _hoisted_13$3 = [_hoisted_11$3, _hoisted_12$3],
  _hoisted_14$3 = createBaseVNode("label", {
    class: "text-xs text-gray-600",
    for: "roadmap"
  }, "Roadmap", -1),
  _hoisted_15$2 = {
    class: "text-sm w-full border-collapse border-spacing-2 border border-slate-500"
  },
  _hoisted_16$2 = {
    class: "border rounded-xl"
  },
  _hoisted_17$2 = {
    class: "text-gray-700"
  },
  _hoisted_18$2 = createBaseVNode("th", {
    class: "border border-slate-200 p-1"
  }, "Year", -1),
  _hoisted_19$2 = {
    class: "border border-slate-200 p-1"
  },
  _hoisted_20$2 = createBaseVNode("th", {
    class: "border border-slate-200 p-1"
  }, null, -1),
  _hoisted_21$2 = {
    class: ""
  },
  _hoisted_22$2 = {
    class: "border border-slate-200 p-1"
  },
  _hoisted_23$2 = ["onUpdate:modelValue"],
  _hoisted_24$2 = {
    class: "border border-slate-200 p-1"
  },
  _hoisted_25$2 = ["onUpdate:modelValue"],
  _hoisted_26$1 = {
    class: "border border-slate-200 p-1"
  },
  _hoisted_27$1 = ["onClick"],
  _hoisted_28$1 = createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-4 h-4"
  }, [createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  })], -1),
  _hoisted_29$1 = [_hoisted_28$1],
  _hoisted_30$1 = createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-4 h-4"
  }, [createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  })], -1),
  _hoisted_31$1 = {
    class: "flex-1"
  },
  _sfc_main$3 = {
    __name: "EditRoadmap",
    props: {
      name: String,
      roadmap: Object,
      extrapolationType: String,
      roadmapUnit: String,
      physicalLogicalQubitsRatio: Number
    },
    emits: ["updateRoadmap"],
    setup(r, {
      emit: v
    }) {
      const b = ref(null),
        k = ref(null),
        M = r,
        q = ref([]),
        V = ref(M.extrapolationType),
        D = ref(M.roadmapUnit);
      watch(k, te => {
        q.value = Object.fromEntries(te.filter(ee => ee.year && ee.qubits).map(ee => [Number(ee.year), ee.qubits]))
      }, {
        deep: !0
      });

      function U() {
        V.value = M.extrapolationType, D.value = M.roadmapUnit, k.value = Object.entries(M.roadmap).map(([te, ee]) => ({
          year: te,
          qubits: ee
        }))
      }

      function Y() {
        const te = k.value.sort((ee, X) => ee.year - X.year).reduce((ee, X) => (X.year && X.qubits && (ee[X.year] = X.qubits), ee), {});
        se("updateRoadmap", {
          roadmap: te,
          extrapolationType: V.value,
          roadmapUnit: D.value
        }), b.value.closeModal()
      }

      function K() {
        b.value.closeModal()
      }
      const se = v;
      return (te, ee) => (openBlock(), createBlock(_sfc_main$8, {
        title: "Edit " + r.name + " Roadmap",
        "button-label": "Advanced options",
        ref_key: "dialog",
        ref: b,
        onSave: Y,
        onCancel: K,
        onReset: U,
        classes: "max-w-7xl",
        onOpenModal: U
      }, {
        button: withCtx(({
          openModal: X
        }) => [renderSlot(te.$slots, "default", {
          openModal: X
        })]),
        reference: withCtx(() => [createVNode(_sfc_main$5, {
          title: "References",
          classes: "max-w-lg"
        }, {
          content: withCtx(() => [createVNode(_sfc_main$4)]),
          _: 1
        })]),
        content: withCtx(() => [createBaseVNode("div", _hoisted_1$3, [createBaseVNode("div", _hoisted_2$3, [_hoisted_3$3, createBaseVNode("div", _hoisted_4$3, [_hoisted_5$3, withDirectives(createBaseVNode("select", {
          "onUpdate:modelValue": ee[0] || (ee[0] = X => V.value = X),
          class: "w-full p-1 ring-1 ring-slate-200"
        }, _hoisted_8$3, 512), [
          [vModelSelect, V.value]
        ])]), createBaseVNode("div", _hoisted_9$3, [_hoisted_10$3, withDirectives(createBaseVNode("select", {
          "onUpdate:modelValue": ee[1] || (ee[1] = X => D.value = X),
          class: "w-full p-1 ring-1 ring-slate-200"
        }, _hoisted_13$3, 512), [
          [vModelSelect, D.value]
        ])]), _hoisted_14$3, createBaseVNode("table", _hoisted_15$2, [createBaseVNode("thead", _hoisted_16$2, [createBaseVNode("tr", _hoisted_17$2, [_hoisted_18$2, createBaseVNode("th", _hoisted_19$2, "# of " + toDisplayString(D.value) + " qubits", 1), _hoisted_20$2])]), createBaseVNode("tbody", _hoisted_21$2, [(openBlock(!0), createElementBlock(Fragment, null, renderList(k.value, (X, le) => (openBlock(), createElementBlock("tr", {
          key: le
        }, [createBaseVNode("td", _hoisted_22$2, [withDirectives(createBaseVNode("input", {
          class: "p-0.5 ring-1 ring-slate-200",
          type: "number",
          "onUpdate:modelValue": oe => X.year = oe
        }, null, 8, _hoisted_23$2), [
          [vModelText, X.year]
        ])]), createBaseVNode("td", _hoisted_24$2, [withDirectives(createBaseVNode("input", {
          class: "p-0.5 ring-1 ring-slate-200",
          type: "number",
          "onUpdate:modelValue": oe => X.qubits = oe
        }, null, 8, _hoisted_25$2), [
          [vModelText, X.qubits]
        ])]), createBaseVNode("td", _hoisted_26$1, [createBaseVNode("button", {
          class: "text-sm text-red-900 hover:text-red-500 transition-all",
          onClick: oe => k.value.splice(le, 1)
        }, _hoisted_29$1, 8, _hoisted_27$1)])]))), 128))])]), createBaseVNode("button", {
          onClick: ee[2] || (ee[2] = X => k.value.push({
            year: "",
            qubits: ""
          })),
          class: "m-2 mx-auto bg-blue-900 flex text-xs items-center hover:bg-blue-500 text-white transition-all rounded-full p-1 px-2"
        }, [_hoisted_30$1, createTextVNode(" Add ")])]), createBaseVNode("div", _hoisted_31$1, [createVNode(_sfc_main$6, {
          data: q.value,
          extrapolationType: V.value
        }, null, 8, ["data", "extrapolationType"])])])]),
        _: 3
      }, 8, ["title"]))
    }
  },
  _hoisted_1$2 = {
    class: "flex flex-col gap-8 text-center"
  },
  _hoisted_2$2 = {
    class: "text-left font-bold mb-2 text-gray-800"
  },
  _hoisted_3$2 = {
    class: "text-left"
  },
  _hoisted_4$2 = {
    class: "bg-green-50 p-2 rounded-lg"
  },
  _hoisted_5$2 = createBaseVNode("p", {
    class: "text-xs text-green-700"
  }, "Classical", -1),
  _hoisted_6$2 = {
    class: "font-medium text-gray-900"
  },
  _hoisted_7$2 = ["innerHTML"],
  _hoisted_8$2 = {
    class: "text-xs text-gray-600"
  },
  _hoisted_9$2 = {
    class: "text-left mt-2"
  },
  _hoisted_10$2 = {
    class: "bg-blue-50 p-2 rounded-lg"
  },
  _hoisted_11$2 = createBaseVNode("p", {
    class: "text-xs text-blue-700"
  }, "Quantum", -1),
  _hoisted_12$2 = {
    class: "font-medium text-gray-900"
  },
  _hoisted_13$2 = ["innerHTML"],
  _hoisted_14$2 = {
    class: "text-xs text-gray-600"
  },
  _sfc_main$2 = {
    __name: "ProblemReferences",
    setup(r) {
      const v = [{
        problemName: "Database Search",
        classicalRuntimeLabel: "O(n)",
        classicalReferenceTitle: "Linear Search",
        classicalReferenceLink: "",
        quantumRuntimeLabel: "O(\\sqrt{n})",
        quantumReferenceTitle: "Grover's Algorithm",
        quantumReferenceLink: "Lov K. Grover. 1996. A fast quantum mechanical algorithm for database search. In Proceedings of the twenty-eighth annual ACM symposium on Theory of Computing (STOC '96). Association for Computing Machinery, New York, NY, USA, 212–219. https://doi.org/10.1145/237814.237866"
      }, {
        problemName: "Integer Factorization",
        classicalRuntimeLabel: "O(e^{(64/9 * n)^{1/3} * \\ln(n)^{2/3}})",
        classicalReferenceTitle: "General Number Field Sieve",
        classicalReferenceLink: 'Pomerance, Carl. "A tale of two sieves." Notices of the American Mathematical Society 43.12 (1996): 1473-1485.',
        quantumRuntimeLabel: "O(n^{2} * \\ln(n))",
        quantumReferenceTitle: "Shor's Algorithm",
        quantumReferenceLink: "Peter Shor Algorithms for Quantum Computation: Discrete Logarithms and Factoring. In Proceedings of FOCS 1994, pg. 124-134."
      }, {
        problemName: "Traveling Salesman",
        classicalRuntimeLabel: "O(n^{3} * 2^{n})",
        classicalReferenceTitle: "Dynamic Programming",
        classicalReferenceLink: 'Held, Michael, and Richard M. Karp. "A dynamic programming approach to sequencing problems." Journal of the Society for Industrial and Applied mathematics 10.1 (1962): 196-210.',
        quantumRuntimeLabel: "O(n * 1.78^{n})",
        quantumReferenceTitle: "Quantum Approximate Optimization Algorithm",
        quantumReferenceLink: "A. Ambainis, K. Balodis, J. Iraids, M. Kokainis, K. Prusis, and J. Vihrovs Quantum speedups for exponential-time dynamic programming algorithms Proceedings of the 30th Annual ACM-SIAM Symposium on Discrete Algorithms (SODA 19), pg. 1783-1793, 2019. [arXiv:1807.05209]"
      }, {
        problemName: "Time Dependent Hartree-Fock Approximation (Quantum Chemistry)",
        classicalRuntimeLabel: "O(n^{3})",
        classicalReferenceTitle: "Hartree-Fock Approximation",
        classicalReferenceLink: 'Galvez Vallejo, Jorge L., et al. "Toward an extreme-scale electronic structure system." The Journal of Chemical Physics 159.4 (2023).',
        quantumRuntimeLabel: "O(n)",
        quantumReferenceTitle: "Variational Quantum Eigensolver",
        quantumReferenceLink: 'Babbush, Ryan, et al. "Encoding electronic spectra in quantum circuits with linear T complexity." Physical Review X 8.4 (2018): 041015.'
      }, {
        problemName: "Full Configuration Interaction (Quantum Chemistry)",
        classicalRuntimeLabel: "O(n!)",
        classicalReferenceTitle: "Full Configuration Interaction",
        classicalReferenceLink: 'Eriksen, Janus J., and Jürgen Gauss. "Incremental treatments of the full configuration interaction problem." Wiley Interdisciplinary Reviews: Computational Molecular Science 11.5 (2021): e1525.',
        quantumRuntimeLabel: "O(n^{11})",
        quantumReferenceTitle: "Quantum Phase Estimation",
        quantumReferenceLink: 'Sugisaki, Kenji, et al. "Quantum chemistry on quantum computers: A method for preparation of multiconfigurational wave functions on quantum computers without performing post-hartree–fock calculations." ACS central science 5.1 (2018): 167-175.'
      }];
      return (b, k) => (openBlock(), createElementBlock("div", _hoisted_1$2, [(openBlock(), createElementBlock(Fragment, null, renderList(v, M => createBaseVNode("div", {
        key: M.problemName
      }, [createBaseVNode("h2", _hoisted_2$2, toDisplayString(M.problemName), 1), createBaseVNode("div", _hoisted_3$2, [createBaseVNode("div", _hoisted_4$2, [_hoisted_5$2, createBaseVNode("p", _hoisted_6$2, [createTextVNode(toDisplayString(M.classicalReferenceTitle) + " ", 1), createBaseVNode("span", {
        class: "",
        innerHTML: unref(katex).renderToString(M.classicalRuntimeLabel)
      }, null, 8, _hoisted_7$2)]), createBaseVNode("p", _hoisted_8$2, toDisplayString(M.classicalReferenceLink), 1)])]), createBaseVNode("div", _hoisted_9$2, [createBaseVNode("div", _hoisted_10$2, [_hoisted_11$2, createBaseVNode("p", _hoisted_12$2, [createTextVNode(toDisplayString(M.quantumReferenceTitle) + " ", 1), createBaseVNode("span", {
        class: "",
        innerHTML: unref(katex).renderToString(M.quantumRuntimeLabel)
      }, null, 8, _hoisted_13$2)]), createBaseVNode("p", _hoisted_14$2, toDisplayString(M.quantumReferenceLink), 1)])])])), 64))]))
    }
  },
  _withScopeId$1 = r => (pushScopeId("data-v-cc908f0b"), r = r(), popScopeId(), r),
  _hoisted_1$1 = {
    class: "flex flex-col gap-4"
  },
  _hoisted_2$1 = _withScopeId$1(() => createBaseVNode("label", {
    class: "font-medium text-sm",
    for: "classicalRuntimeInput"
  }, "Classical Runtime", -1)),
  _hoisted_3$1 = {
    class: "flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg"
  },
  _hoisted_4$1 = {
    key: 0,
    class: "text-red-500 text-xs"
  },
  _hoisted_5$1 = ["innerHTML"],
  _hoisted_6$1 = _withScopeId$1(() => createBaseVNode("label", {
    class: "font-medium text-sm",
    for: "classicalWork"
  }, "Classical Work", -1)),
  _hoisted_7$1 = {
    class: "flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg"
  },
  _hoisted_8$1 = {
    key: 0,
    class: "text-red-500 text-xs"
  },
  _hoisted_9$1 = ["innerHTML"],
  _hoisted_10$1 = _withScopeId$1(() => createBaseVNode("label", {
    class: "font-medium text-sm",
    for: "quantumRuntimeInput"
  }, "Quantum Runtime", -1)),
  _hoisted_11$1 = {
    class: "flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg"
  },
  _hoisted_12$1 = {
    key: 0,
    class: "text-red-500 text-xs"
  },
  _hoisted_13$1 = ["innerHTML"],
  _hoisted_14$1 = _withScopeId$1(() => createBaseVNode("label", {
    class: "font-medium text-sm",
    for: "quantumWork"
  }, "Quantum Work", -1)),
  _hoisted_15$1 = {
    class: "flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg"
  },
  _hoisted_16$1 = {
    key: 0,
    class: "text-red-500 text-xs"
  },
  _hoisted_17$1 = ["innerHTML"],
  _hoisted_18$1 = _withScopeId$1(() => createBaseVNode("label", {
    class: "font-medium text-sm",
    for: "penaltyInput"
  }, "Connectivity Penalty", -1)),
  _hoisted_19$1 = {
    class: "flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg"
  },
  _hoisted_20$1 = {
    key: 0,
    class: "text-red-500 text-xs"
  },
  _hoisted_21$1 = ["innerHTML"],
  _hoisted_22$1 = _withScopeId$1(() => createBaseVNode("label", {
    class: "font-medium text-sm",
    for: "processors"
  }, "Processors", -1)),
  _hoisted_23$1 = {
    class: "flex items-center justify-between w-full gap-2 mt-2 mb-4"
  },
  _hoisted_24$1 = {
    class: "bg-gray-100 p-2 rounded-lg text-center w-1/5 flex items-center justify-center relative"
  },
  _hoisted_25$1 = _withScopeId$1(() => createBaseVNode("span", {
    class: "pr-2"
  }, "10 ", -1)),
  _sfc_main$1 = {
    __name: "ProblemRuntimeAdvanced",
    props: {
      classicalRuntimeInput: String,
      quantumRuntimeInput: String,
      penaltyInput: String,
      classicalWork: String,
      quantumWork: String,
      processors: Number
    },
    emits: ["updateFunctions"],
    setup(__props, {
      emit: __emit
    }) {
      const emit = __emit,
        dialog = ref(null),
        props = __props,
        classicalRuntimeInput = ref(props.classicalRuntimeInput),
        quantumRuntimeInput = ref(props.quantumRuntimeInput),
        penaltyInput = ref(props.penaltyInput),
        classicalWork = ref(props.classicalWork),
        quantumWork = ref(props.quantumWork),
        processors = ref(props.processors),
        errors = ref({
          classicalRuntimeInput: !1,
          quantumRuntimeInput: !1,
          penaltyInput: !1,
          classicalWork: !1,
          quantumWork: !1
        }),
        hasErrors = computed(() => Object.values(errors.value).some(r => r));

      function reset() {
        classicalRuntimeInput.value = props.classicalRuntimeInput, quantumRuntimeInput.value = props.quantumRuntimeInput, penaltyInput.value = props.penaltyInput, classicalWork.value = props.classicalWork, quantumWork.value = props.quantumWork, processors.value = props.processors, validateAllInputs(!1)
      }

      function save() {
        hasErrors.value || (emit("updateFunctions", {
          classicalRuntimeInput: classicalRuntimeInput.value,
          quantumRuntimeInput: quantumRuntimeInput.value,
          penaltyInput: penaltyInput.value,
          classicalWork: classicalWork.value,
          quantumWork: quantumWork.value,
          processors: processors.value
        }), dialog.value.closeModal())
      }

      function cancel() {
        dialog.value.closeModal()
      }

      function validateInput(inputName, overrideClassicalWork = !0) {
        const scope = {
          n: 1
        };
        try {
          const compiled = compile(eval(inputName).value);
          inputName == "classicalRuntimeInput" ? scope.p = 1 : (inputName == "quantumWork" || inputName == "penaltyInput") && (scope.q = 1), compiled.evaluate(scope), errors.value[inputName] = !1, overrideClassicalWork && inputName == "classicalRuntimeInput" && (classicalWork.value = replaceVariable(classicalRuntimeInput.value, "p", "(1)"), validateInput("classicalWork"))
        } catch {
          errors.value[inputName] = !0
        }
      }

      function validateAllInputs(r = !0) {
        validateInput("classicalRuntimeInput", r), validateInput("quantumRuntimeInput"), validateInput("penaltyInput"), validateInput("classicalWork"), validateInput("quantumWork")
      }

      function renderKaTeX(r) {
        try {
          const v = parse(r).toTex();
          return katex.renderToString(v, {
            throwOnError: !1
          })
        } catch {
          return ""
        }
      }
      return (r, v) => (openBlock(), createBlock(_sfc_main$8, {
        title: "Runtime Functions",
        ref_key: "dialog",
        ref: dialog,
        onSave: save,
        onCancel: cancel,
        onReset: reset,
        onOpenModal: reset,
        classes: "max-w-xl"
      }, {
        button: withCtx(({
          openModal: b
        }) => [renderSlot(r.$slots, "default", {
          openModal: b
        }, void 0, !0)]),
        content: withCtx(() => [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", null, [_hoisted_2$1, withDirectives(createBaseVNode("input", {
          type: "text",
          "onUpdate:modelValue": v[0] || (v[0] = b => classicalRuntimeInput.value = b),
          class: "w-full border rounded p-2",
          onInput: v[1] || (v[1] = b => validateInput("classicalRuntimeInput"))
        }, null, 544), [
          [vModelText, classicalRuntimeInput.value]
        ]), createBaseVNode("div", _hoisted_3$1, [errors.value.classicalRuntimeInput ? (openBlock(), createElementBlock("p", _hoisted_4$1, "Invalid expression")) : createCommentVNode("", !0), errors.value.classicalRuntimeInput ? createCommentVNode("", !0) : (openBlock(), createElementBlock("span", {
          key: 1,
          innerHTML: renderKaTeX(classicalRuntimeInput.value)
        }, null, 8, _hoisted_5$1))])]), createBaseVNode("div", null, [_hoisted_6$1, withDirectives(createBaseVNode("input", {
          type: "text",
          "onUpdate:modelValue": v[2] || (v[2] = b => classicalWork.value = b),
          class: "w-full border rounded p-2",
          onInput: v[3] || (v[3] = b => validateInput("classicalWork"))
        }, null, 544), [
          [vModelText, classicalWork.value]
        ]), createBaseVNode("div", _hoisted_7$1, [errors.value.classicalWork ? (openBlock(), createElementBlock("p", _hoisted_8$1, "Invalid expression")) : createCommentVNode("", !0), errors.value.classicalWork ? createCommentVNode("", !0) : (openBlock(), createElementBlock("span", {
          key: 1,
          innerHTML: renderKaTeX(classicalWork.value)
        }, null, 8, _hoisted_9$1))])]), createBaseVNode("div", null, [_hoisted_10$1, withDirectives(createBaseVNode("input", {
          type: "text",
          "onUpdate:modelValue": v[4] || (v[4] = b => quantumRuntimeInput.value = b),
          class: "w-full border rounded p-2",
          onInput: v[5] || (v[5] = b => validateInput("quantumRuntimeInput"))
        }, null, 544), [
          [vModelText, quantumRuntimeInput.value]
        ]), createBaseVNode("div", _hoisted_11$1, [errors.value.quantumRuntimeInput ? (openBlock(), createElementBlock("p", _hoisted_12$1, "Invalid expression")) : createCommentVNode("", !0), errors.value.quantumRuntimeInput ? createCommentVNode("", !0) : (openBlock(), createElementBlock("span", {
          key: 1,
          innerHTML: renderKaTeX(quantumRuntimeInput.value)
        }, null, 8, _hoisted_13$1))])]), createBaseVNode("div", null, [_hoisted_14$1, withDirectives(createBaseVNode("input", {
          type: "text",
          "onUpdate:modelValue": v[6] || (v[6] = b => quantumWork.value = b),
          class: "w-full border rounded p-2",
          onInput: v[7] || (v[7] = b => validateInput("quantumWork"))
        }, null, 544), [
          [vModelText, quantumWork.value]
        ]), createBaseVNode("div", _hoisted_15$1, [errors.value.quantumWork ? (openBlock(), createElementBlock("p", _hoisted_16$1, "Invalid expression")) : createCommentVNode("", !0), errors.value.quantumWork ? createCommentVNode("", !0) : (openBlock(), createElementBlock("span", {
          key: 1,
          innerHTML: renderKaTeX(quantumWork.value)
        }, null, 8, _hoisted_17$1))])])]), createBaseVNode("div", null, [_hoisted_18$1, withDirectives(createBaseVNode("input", {
          type: "text",
          "onUpdate:modelValue": v[8] || (v[8] = b => penaltyInput.value = b),
          class: "w-full border rounded p-2",
          onInput: v[9] || (v[9] = b => validateInput("penaltyInput"))
        }, null, 544), [
          [vModelText, penaltyInput.value]
        ]), createBaseVNode("div", _hoisted_19$1, [errors.value.penaltyInput ? (openBlock(), createElementBlock("p", _hoisted_20$1, "Invalid expression")) : createCommentVNode("", !0), errors.value.penaltyInput ? createCommentVNode("", !0) : (openBlock(), createElementBlock("span", {
          key: 1,
          innerHTML: renderKaTeX(penaltyInput.value)
        }, null, 8, _hoisted_21$1))])]), createBaseVNode("div", null, [_hoisted_22$1, createBaseVNode("div", _hoisted_23$1, [withDirectives(createBaseVNode("input", {
          class: "flex-1 accent-[#002D9D]",
          type: "range",
          id: "processors",
          min: "0",
          max: "20",
          step: "1",
          "onUpdate:modelValue": v[10] || (v[10] = b => processors.value = b)
        }, null, 512), [
          [vModelText, processors.value]
        ]), createBaseVNode("div", _hoisted_24$1, [_hoisted_25$1, withDirectives(createBaseVNode("input", {
          class: "w-[6ch] bg-transparent absolute t-0 l-0 ml-14 mb-4 text-xs",
          type: "number",
          min: "0",
          max: "20",
          step: "1",
          id: "processors",
          "onUpdate:modelValue": v[11] || (v[11] = b => processors.value = b)
        }, null, 512), [
          [vModelText, processors.value]
        ])])])])]),
        _: 3
      }, 512))
    }
  },
  ProblemRuntimeAdvanced = _export_sfc(_sfc_main$1, [
    ["__scopeId", "data-v-cc908f0b"]
  ]),
  _withScopeId = r => (pushScopeId("data-v-ff161db2"), r = r(), popScopeId(), r),
  _hoisted_1 = {
    key: 0,
    class: ""
  },
  _hoisted_2 = {
    class: "flex justify-between items-center border-b w-full px-8 py-2 bg-slate-100"
  },
  _hoisted_3 = {
    class: "text-xl text-center font-medium"
  },
  _hoisted_4 = {
    class: "flex flex-wrap items-center gap-4"
  },
  _hoisted_5 = {
    class: "flex items-center gap-1 cursor-pointer"
  },
  _hoisted_6 = _withScopeId(() => createBaseVNode("span", {
    class: "sr-only"
  }, "Advanced Options", -1)),
  _hoisted_7 = _withScopeId(() => createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-4 h-4"
  }, [createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
  })], -1)),
  _hoisted_8 = [_hoisted_7],
  _hoisted_9 = _withScopeId(() => createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-4 h-4"
  }, [createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  })], -1)),
  _hoisted_10 = [_hoisted_9],
  _hoisted_11 = {
    class: "w-full"
  },
  _hoisted_12 = {
    class: "flex items-center gap-2"
  },
  _hoisted_13 = _withScopeId(() => createBaseVNode("label", {
    class: "font-medium"
  }, "Problem ", -1)),
  _hoisted_14 = {
    class: "w-full"
  },
  _hoisted_15 = {
    class: "flex items-center gap-2"
  },
  _hoisted_16 = _withScopeId(() => createBaseVNode("label", {
    class: "font-medium"
  }, "Roadmap ", -1)),
  _hoisted_17 = {
    class: "lg:grid grid-cols-2 gap-4 lg:w-2/4"
  },
  _hoisted_18 = {
    class: "flex justify-between mb-1"
  },
  _hoisted_19 = {
    class: "flex items-center gap-2"
  },
  _hoisted_20 = _withScopeId(() => createBaseVNode("label", {
    class: "font-medium"
  }, "Problem ", -1)),
  _hoisted_21 = ["onClick"],
  _hoisted_22 = {
    class: "mt-2"
  },
  _hoisted_23 = _withScopeId(() => createBaseVNode("p", {
    class: "text-sm font-medium"
  }, "Classical Runtime", -1)),
  _hoisted_24 = {
    class: "flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg"
  },
  _hoisted_25 = ["innerHTML"],
  _hoisted_26 = {
    class: "mt-2"
  },
  _hoisted_27 = _withScopeId(() => createBaseVNode("p", {
    class: "text-sm font-medium"
  }, "Quantum Runtime", -1)),
  _hoisted_28 = {
    class: "flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg"
  },
  _hoisted_29 = ["innerHTML"],
  _hoisted_30 = {
    class: ""
  },
  _hoisted_31 = {
    class: "flex justify-between mb-1"
  },
  _hoisted_32 = {
    class: "flex items-center gap-2"
  },
  _hoisted_33 = _withScopeId(() => createBaseVNode("label", {
    class: "font-medium"
  }, "Roadmap ", -1)),
  _hoisted_34 = ["onClick"],
  _hoisted_35 = {
    class: "w-full table-auto mt-4 text-xs"
  },
  _hoisted_36 = {
    class: "bg-gray-100"
  },
  _hoisted_37 = {
    class: "text-left"
  },
  _hoisted_38 = _withScopeId(() => createBaseVNode("th", null, "Year", -1)),
  _hoisted_39 = {
    class: "text-left"
  },
  _hoisted_40 = {
    class: "p-1"
  },
  _hoisted_41 = {
    colspan: "2",
    class: "p-1 text-center"
  },
  _hoisted_42 = ["onClick"],
  _hoisted_43 = {
    class: "flex flex-col"
  },
  _hoisted_44 = _withScopeId(() => createBaseVNode("label", {
    class: "font-medium text-sm"
  }, "Connectivity Penalty", -1)),
  _hoisted_45 = _withScopeId(() => createBaseVNode("p", {
    class: "text-xs text-gray-600"
  }, "The overhead to embed the quantum circuit in hardware with limited connectivity. ", -1)),
  _hoisted_46 = {
    class: "flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-lg"
  },
  _hoisted_47 = ["innerHTML"],
  _hoisted_48 = {
    class: "flex flex-col"
  },
  _hoisted_49 = _withScopeId(() => createBaseVNode("label", {
    class: "font-medium text-sm",
    for: "qubits_to_size"
  }, "Qubits to Problem Size", -1)),
  _hoisted_50 = _withScopeId(() => createBaseVNode("p", {
    class: "text-xs text-gray-600"
  }, "The function which correlates maximum problem size solvable with the given number of qubits (q).", -1)),
  _hoisted_51 = ["innerHTML"],
  _hoisted_52 = {
    class: "flex items-center gap-2"
  },
  _hoisted_53 = ["innerHTML"],
  _hoisted_54 = {
    class: "flex-1"
  },
  _hoisted_55 = {
    class: "flex gap-2 items-center justify-between"
  },
  _hoisted_56 = {
    class: "flex items-center gap-2"
  },
  _hoisted_57 = _withScopeId(() => createBaseVNode("label", {
    class: "font-medium text-s",
    for: "hardwareSlowdown"
  }, "Classical Hardware Speed Advantage", -1)),
  _hoisted_58 = _withScopeId(() => createBaseVNode("h3", {
    class: "text-medium text-sm mt-4"
  }, "Classical Hardware Speed Advantage", -1)),
  _hoisted_59 = _withScopeId(() => createBaseVNode("ul", {
    class: "text-sm"
  }, [createBaseVNode("li", {
    class: "ml-4 list-disc"
  }, [createBaseVNode("a", {
    class: "text-[#012D9D] hover:underline",
    href: "https://arxiv.org/pdf/2310.15505.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "The Quantum Tortoise and the Classical Hare: A simple framework for understanding which problems quantum computing will accelerate (and which it won’t)")])], -1)),
  _hoisted_60 = ["onClick"],
  _hoisted_61 = _withScopeId(() => createBaseVNode("p", {
    class: "text-xs text-gray-600"
  }, "The number of operations a classical computer could perform in the time it takes a quantum computer to perform one.", -1)),
  _hoisted_62 = {
    class: "flex items-center justify-between w-full gap-2 mt-2 mb-4"
  },
  _hoisted_63 = {
    class: "bg-gray-100 p-2 rounded-lg text-center w-1/5 flex items-center justify-center relative"
  },
  _hoisted_64 = _withScopeId(() => createBaseVNode("span", {
    class: "pr-2"
  }, "10 ", -1)),
  _hoisted_65 = {
    class: "bg-gray-100 p-2 rounded-lg text-center w-1/3 flex items-center justify-center relative"
  },
  _hoisted_66 = _withScopeId(() => createBaseVNode("span", {
    class: "text-xs text-gray-600 text-left"
  }, " % change per year ", -1)),
  _hoisted_67 = {
    class: "flex flex-col"
  },
  _hoisted_68 = _withScopeId(() => createBaseVNode("label", {
    class: "font-medium text-s",
    for: "costFactor"
  }, "Classical Compute Cost Advantage", -1)),
  _hoisted_69 = _withScopeId(() => createBaseVNode("p", {
    class: "text-xs text-gray-600"
  }, "The cost of doing one quantum operation as compared to one classical operation. ", -1)),
  _hoisted_70 = {
    class: "flex items-center justify-between w-full gap-2 mt-2 mb-4"
  },
  _hoisted_71 = {
    class: "bg-gray-100 p-2 rounded-lg text-center w-1/5 flex items-center justify-center relative"
  },
  _hoisted_72 = _withScopeId(() => createBaseVNode("span", {
    class: "pr-2"
  }, "10 ", -1)),
  _hoisted_73 = {
    class: "bg-gray-100 p-2 rounded-lg text-center w-1/3 flex items-center justify-center relative"
  },
  _hoisted_74 = _withScopeId(() => createBaseVNode("span", {
    class: "text-xs text-gray-600 text-left"
  }, " % change per year ", -1)),
  _hoisted_75 = {
    class: "flex flex-col relative"
  },
  _hoisted_76 = _withScopeId(() => createBaseVNode("label", {
    class: "font-medium text-s",
    for: "physical_logical_ratio"
  }, "Physical-Logical Qubit Ratio", -1)),
  _hoisted_77 = _withScopeId(() => createBaseVNode("p", {
    class: "text-xs text-gray-600"
  }, "Number of physical qubits needed per one error corrected logical qubit.", -1)),
  _hoisted_78 = {
    class: "flex items-center justify-between w-full gap-2 mt-2 mb-4 relative"
  },
  _hoisted_79 = {
    key: 0,
    class: "absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center text-gray-800 text-sm font-semibold rounded-lg pointer-events-none z-10 drop-shadow-lg px-4 text-center"
  },
  _hoisted_80 = ["disabled"],
  _hoisted_81 = ["disabled"],
  _hoisted_82 = {
    class: "bg-gray-100 p-2 rounded-lg text-center w-1/3 flex items-center justify-center relative"
  },
  _hoisted_83 = ["disabled"],
  _hoisted_84 = _withScopeId(() => createBaseVNode("span", {
    class: "text-xs text-gray-600 text-left"
  }, " % change per year ", -1)),
  _sfc_main = {
    __name: "Form",
    props: {
      modelId: Number
    },
    setup(r) {
      const v = useModelsStore(),
        b = r,
        k = ref(["2^{q}", "{q}", "log({q})"]),
        M = ref([{
          problemName: "Integer Factorization",
          classicalRuntimeInput: "e^((64/9 * n)^(1/3) * log(n, e)^(2/3)) / p",
          classicalWork: "e^((64/9 * n)^(1/3) * log(n, e)^(2/3))",
          quantumRuntimeInput: "n^(2) * log(n, e)",
          quantumWork: "n^(2) * log(n, e) * q",
          qubitToProblemSize: "{q}"
        }, {
          problemName: "Database Search",
          classicalRuntimeInput: "n / p",
          classicalWork: "n",
          quantumRuntimeInput: "sqrt(n)",
          quantumWork: "sqrt(n) * q",
          qubitToProblemSize: "2^{q}"
        }, {
          problemName: "Traveling Salesman",
          classicalRuntimeInput: "n^3 * 2^n / p",
          classicalWork: "n^3 * 2^n",
          quantumRuntimeInput: "n * 1.78^n",
          quantumWork: "n * 1.78^n * q",
          qubitToProblemSize: "{q}"
        }, {
          problemName: "Time Dependent Hartree-Fock Approximation (Quantum Chemistry)",
          classicalRuntimeInput: "n^3",
          classicalWork: "n^3",
          quantumRuntimeInput: "n",
          quantumWork: "n * q",
          qubitToProblemSize: "{q}"
        }, {
          problemName: "Full Configuration Interaction (Quantum Chemistry)",
          classicalRuntimeInput: "(2 * pi * n)^(1/2) * (n / e)^n",
          classicalWork: "(2 * pi * n)^(1/2) * (n / e)^n",
          quantumRuntimeInput: "n^5",
          quantumWork: "n^5 * q",
          qubitToProblemSize: "{q}"
        }]),
        q = ref([{
          hardwareName: "IBM (Superconducting)",
          penaltyInput: "sqrt(q)",
          processors: 5,
          hardwareSlowdown: 3.78,
          costFactor: 8,
          quantumImprovementRate: -10,
          costImprovementRate: -10,
          physicalLogicalQubitsRatio: 264,
          ratioImprovementRate: -23,
          roadmap: {
            2020: 27,
            2024: 133,
            2025: 156,
            2028: 1092
          },
          roadmapUnit: "physical",
          extrapolationType: "exponential",
          advancedSlowdown: {
            gateTime: 12,
            cpuGHz: 5,
            speed: 60,
            gateOverhead: 100,
            algorithmConstant: 1
          },
          reference: "https://www.ibm.com/roadmaps/quantum.pdf"
        }, {
          hardwareName: "Google (Superconducting)",
          penaltyInput: "sqrt(q)",
          processors: 5,
          hardwareSlowdown: 3.78,
          costFactor: 8,
          quantumImprovementRate: -10,
          costImprovementRate: -10,
          physicalLogicalQubitsRatio: 1e3,
          ratioImprovementRate: -10,
          roadmap: {
            2019: 53,
            2024: 105
          },
          roadmapUnit: "physical",
          extrapolationType: "exponential",
          advancedSlowdown: {
            gateTime: 12,
            cpuGHz: 5,
            speed: 60,
            gateOverhead: 100,
            algorithmConstant: 1
          },
          reference: "Sycamore (2019), and Willow (2024)."
        }, {
          hardwareName: "Rigetti (Superconducting)",
          penaltyInput: "sqrt(q)",
          processors: 5,
          hardwareSlowdown: 3.78,
          costFactor: 8,
          quantumImprovementRate: -10,
          costImprovementRate: -10,
          physicalLogicalQubitsRatio: 1e3,
          ratioImprovementRate: -10,
          roadmap: {
            2018: 19,
            2021: 40,
            2024: 84
          },
          roadmapUnit: "physical",
          extrapolationType: "exponential",
          advancedSlowdown: {
            gateTime: 12,
            cpuGHz: 5,
            speed: 60,
            gateOverhead: 100,
            algorithmConstant: 1
          },
          reference: "19Q (2018), Aspen-M non-modular (2021), Ankaa-3 (2024)"
        }, {
          hardwareName: "IonQ (Trapped Ion)",
          penaltyInput: "1",
          processors: 5,
          hardwareSlowdown: 8.48,
          costFactor: 8,
          quantumImprovementRate: -10,
          costImprovementRate: -10,
          physicalLogicalQubitsRatio: 32,
          ratioImprovementRate: -23,
          roadmap: {
            2021: 22,
            2024: 35,
            2028: 1024
          },
          roadmapUnit: "physical",
          extrapolationType: "exponential",
          advancedSlowdown: {
            gateTime: 6e5,
            cpuGHz: 5,
            speed: 3e6,
            gateOverhead: 100,
            algorithmConstant: 1
          },
          reference: "https://ionq.com/blog/how-we-achieved-our-2024-performance-target-of-aq-35"
        }, {
          hardwareName: "QuEra (Neutral Atom)",
          penaltyInput: "1",
          processors: 5,
          hardwareSlowdown: 5.1,
          costFactor: 8,
          quantumImprovementRate: -10,
          costImprovementRate: -10,
          physicalLogicalQubitsRatio: 100,
          ratioImprovementRate: -23,
          roadmap: {
            2023: 256,
            2025: 3e3,
            2026: 1e4
          },
          roadmapUnit: "physical",
          extrapolationType: "exponential",
          advancedSlowdown: {
            gateTime: 250,
            cpuGHz: 5,
            speed: 1250,
            gateOverhead: 100,
            algorithmConstant: 1
          },
          reference: "https://www.quera.com/qec"
        }, {
          hardwareName: "Pasqal (Neutral Atom)",
          penaltyInput: "sqrt(q)",
          processors: 5,
          hardwareSlowdown: 5.1,
          costFactor: 8,
          quantumImprovementRate: -10,
          costImprovementRate: -10,
          physicalLogicalQubitsRatio: 100,
          ratioImprovementRate: -10,
          roadmap: {
            2022: 200,
            2024: 1e3,
            2026: 1e4
          },
          roadmapUnit: "physical",
          extrapolationType: "exponential",
          advancedSlowdown: {
            gateTime: 250,
            cpuGHz: 5,
            speed: 1250,
            gateOverhead: 100,
            algorithmConstant: 1
          },
          reference: "https://www.hpcwire.com/2024/03/13/pasqal-issues-roadmap-to-10000-qubits-in-2026-and-fault-tolerance-in-2028/"
        }, {
          hardwareName: "Infeqtion (Neutral Atom)",
          penaltyInput: "sqrt(q)",
          processors: 5,
          hardwareSlowdown: 5.1,
          costFactor: 8,
          quantumImprovementRate: -10,
          costImprovementRate: -10,
          physicalLogicalQubitsRatio: 800,
          ratioImprovementRate: -10,
          roadmap: {
            2024: 2,
            2026: 10,
            2028: 100
          },
          roadmapUnit: "logical",
          extrapolationType: "exponential",
          advancedSlowdown: {
            gateTime: 250,
            cpuGHz: 5,
            speed: 1250,
            gateOverhead: 100,
            algorithmConstant: 1
          },
          reference: "https://www.nextbigfuture.com/2024/02/infleqtion-1600-qubit-array-today-and-five-year-roadmap-to-fault-tolerant-quantum-computers.html"
        }, {
          hardwareName: "Quantum Silicon (Semiconductors)",
          penaltyInput: "sqrt(q)",
          processors: 5,
          hardwareSlowdown: 5.1,
          costFactor: 8,
          quantumImprovementRate: -10,
          costImprovementRate: -10,
          physicalLogicalQubitsRatio: 100,
          ratioImprovementRate: -10,
          roadmap: {
            2018: 1,
            2021: 6,
            2024: 100
          },
          roadmapUnit: "physical",
          extrapolationType: "exponential",
          advancedSlowdown: {
            gateTime: 250,
            cpuGHz: 5,
            speed: 1250,
            gateOverhead: 100,
            algorithmConstant: 1
          },
          reference: "https://www.eetimes.eu/cea-leti-details-silicon-based-quantum-computing-roadmap/"
        }]),
        V = ref(v.models.find(G => G.id === b.modelId));

      function D(G, ae) {
        V.value.hardwareSlowdown = G, V.value.advancedSlowdown = ae
      }
      const U = ref(M.value.find(G => G.problemName === V.value.problemName)),
        Y = ref(q.value.find(G => G.hardwareName === V.value.hardwareName));
      onMounted(() => {
        V.value = Object.assign({}, v.models.find(G => G.id === b.modelId))
      }), watch(() => Y.value, G => {
        V.value.hardwareName = G.hardwareName, V.value.penaltyInput = G.penaltyInput, V.value.processors = G.processors, V.value.hardwareSlowdown = G.hardwareSlowdown, V.value.physicalLogicalQubitsRatio = G.physicalLogicalQubitsRatio, V.value.quantumImprovementRate = G.quantumImprovementRate, V.value.roadmap = G.roadmap, V.value.roadmapUnit = G.roadmapUnit, V.value.extrapolationType = G.extrapolationType, V.value.ratioImprovementRate = G.ratioImprovementRate, V.value.costFactor = G.costFactor, V.value.costImprovementRate = G.costImprovementRate, V.value.advancedSlowdown = G.advancedSlowdown
      }, {
        deep: !0
      }), watch(() => U.value, G => {
        V.value.problemName = G.problemName, V.value.classicalRuntimeInput = G.classicalRuntimeInput, V.value.classicalWork = G.classicalWork, V.value.quantumRuntimeInput = G.quantumRuntimeInput, V.value.quantumWork = G.quantumWork, V.value.qubitToProblemSize = G.qubitToProblemSize
      }, {
        deep: !0
      }), watch(() => V.value, G => {
        v.updateModel(b.modelId, G)
      }, {
        deep: !0
      });
      const K = computed(() => V.value.roadmapUnit !== "physical"),
        se = ref(!1);

      function te(G) {
        V.value.roadmap = G.roadmap, V.value.extrapolationType = G.extrapolationType, V.value.roadmapUnit = G.roadmapUnit
      }

      function ee() {
        v.removeModel(b.modelId)
      }

      function X() {
        v.duplicateModel(b.modelId)
      }

      function le(G) {
        const ae = Object.keys(G),
          Z = {};
        if (ae.length <= 3) return G;
        Z[ae[0]] = G[ae[0]], Z[ae[ae.length - 1]] = G[ae[ae.length - 1]];
        const fe = Math.floor((ae.length - 1) / 2);
        return Z[ae[fe]] = G[ae[fe]], Z
      }

      function oe() {
        V.value.quantumImprovementRate > 90 ? V.value.quantumImprovementRate = 90 : V.value.quantumImprovementRate < -90 && (V.value.quantumImprovementRate = -90), V.value.costImprovementRate > 90 ? V.value.costImprovementRate = 90 : V.value.costImprovementRate < -90 && (V.value.costImprovementRate = -90), V.value.ratioImprovementRate > 90 ? V.value.ratioImprovementRate = 90 : V.value.ratioImprovementRate < -90 && (V.value.ratioImprovementRate = -90), V.physicalLogicalQubitsRatio < 3 && (V.physicalLogicalQubitsRatio = 3)
      }

      function ne(G) {
        V.value.classicalRuntimeInput = G.classicalRuntimeInput, V.value.quantumRuntimeInput = G.quantumRuntimeInput, V.value.penaltyInput = G.penaltyInput, V.value.classicalWork = G.classicalWork, V.value.quantumWork = G.quantumWork, V.value.processors = Number(G.processors)
      }
      return (G, ae) => V.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(V.value.id) + ". " + toDisplayString(V.value.problemName) + " on " + toDisplayString(V.value.hardwareName), 1), createBaseVNode("div", _hoisted_4, [createBaseVNode("label", _hoisted_5, [createVNode(unref(ie), {
        modelValue: se.value,
        "onUpdate:modelValue": ae[0] || (ae[0] = Z => se.value = Z),
        class: normalizeClass([se.value ? "bg-gray-400" : "bg-[#002D9D]", "relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"])
      }, {
        default: withCtx(() => [_hoisted_6, createBaseVNode("span", {
          "aria-hidden": "true",
          class: normalizeClass([se.value ? "translate-x-0" : "translate-x-4", "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])
        }, null, 2)]),
        _: 1
      }, 8, ["modelValue", "class"]), createBaseVNode("span", {
        class: normalizeClass(["text-sm", se.value ? "text-gray-400" : "text-[#002D9D]"])
      }, " Advanced Options ", 2)]), createBaseVNode("button", {
        class: "flex items-center justify-center rounded-md bg-blue-100 ring-1 ring-opacity-50 ring-[#002D9D] px-2 py-2 text-sm text-[#002D9D] hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        onClick: X
      }, _hoisted_8), createBaseVNode("button", {
        class: "flex items-center justify-center rounded-md bg-red-50 ring-1 ring-opacity-50 ring-red-900 px-2 py-2 text-sm text-red-900 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        onClick: ee
      }, _hoisted_10)])]), createBaseVNode("div", {
        class: normalizeClass(["px-8 py-2 justify-between items-center gap-8 transition-all duration-500 ease-in-out", {
          "max-h-96 opacity-100 flex flex-wrap md:flex-nowrap": se.value,
          "max-h-0 opacity-0   hidden ": !se.value
        }])
      }, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [_hoisted_13, createVNode(_sfc_main$5, {
        title: "References",
        classes: "max-w-3xl"
      }, {
        content: withCtx(() => [createVNode(_sfc_main$2)]),
        _: 1
      })]), createVNode(unref(script), {
        class: "custom-multiselect mt-1",
        "track-by": "problemName",
        label: "problemName",
        modelValue: U.value,
        "onUpdate:modelValue": ae[1] || (ae[1] = Z => U.value = Z),
        options: M.value,
        searchable: !0,
        "close-on-select": !0,
        allowEmpty: !1,
        "show-labels": !1,
        placeholder: "Pick a value"
      }, null, 8, ["modelValue", "options"])]), createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [_hoisted_16, createVNode(_sfc_main$5, {
        title: "References",
        classes: "max-w-lg"
      }, {
        content: withCtx(() => [createVNode(_sfc_main$4)]),
        _: 1
      })]), createVNode(unref(script), {
        class: "custom-multiselect",
        "track-by": "hardwareName",
        label: "hardwareName",
        modelValue: Y.value,
        "onUpdate:modelValue": ae[2] || (ae[2] = Z => Y.value = Z),
        options: q.value,
        searchable: !0,
        "close-on-select": !0,
        allowEmpty: !1,
        "show-labels": !1,
        placeholder: "Pick a hardware provider"
      }, null, 8, ["modelValue", "options"])])], 2), withDirectives(createBaseVNode("div", {
        class: normalizeClass(["px-8 py-2 md:flex justify-between gap-8 transition-all duration-500 ease-in-out", {
          "max-h-screen pb-8 opacity-100": !se.value,
          "max-h-0 opacity-0 hidden": se.value
        }])
      }, [createBaseVNode("div", _hoisted_17, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, [_hoisted_20, createVNode(_sfc_main$5, {
        title: "References",
        classes: "max-w-3xl"
      }, {
        content: withCtx(() => [createVNode(_sfc_main$2)]),
        _: 1
      })]), createVNode(ProblemRuntimeAdvanced, {
        classicalRuntimeInput: V.value.classicalRuntimeInput,
        quantumRuntimeInput: V.value.quantumRuntimeInput,
        penaltyInput: V.value.penaltyInput,
        classicalWork: V.value.classicalWork,
        quantumWork: V.value.quantumWork,
        processors: V.value.processors,
        onUpdateFunctions: ne
      }, {
        default: withCtx(({
          openModal: Z
        }) => [createBaseVNode("button", {
          class: "rounded-md bg-gray-500 text-xs p-0.5 px-2 text-white hover:bg-gray-600",
          onClick: Z
        }, "Advanced options", 8, _hoisted_21)]),
        _: 1
      }, 8, ["classicalRuntimeInput", "quantumRuntimeInput", "penaltyInput", "classicalWork", "quantumWork", "processors"])]), createVNode(unref(script), {
        class: "custom-multiselect mt-1",
        "track-by": "problemName",
        label: "problemName",
        modelValue: U.value,
        "onUpdate:modelValue": ae[3] || (ae[3] = Z => U.value = Z),
        options: M.value,
        searchable: !0,
        "close-on-select": !0,
        "show-labels": !1,
        placeholder: "Pick a value"
      }, null, 8, ["modelValue", "options"]), createBaseVNode("div", _hoisted_22, [_hoisted_23, createBaseVNode("div", _hoisted_24, [createBaseVNode("span", {
        innerHTML: unref(katex).renderToString(parse(V.value.classicalRuntimeInput).toTex())
      }, null, 8, _hoisted_25)])]), createBaseVNode("div", _hoisted_26, [_hoisted_27, createBaseVNode("div", _hoisted_28, [createBaseVNode("span", {
        innerHTML: unref(katex).renderToString(parse(V.value.quantumRuntimeInput).toTex())
      }, null, 8, _hoisted_29)])])]), createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, [createBaseVNode("div", _hoisted_32, [_hoisted_33, createVNode(_sfc_main$5, {
        title: "References",
        classes: "max-w-lg"
      }, {
        content: withCtx(() => [createVNode(_sfc_main$4)]),
        _: 1
      })]), createVNode(_sfc_main$3, {
        name: V.value.hardwareName,
        roadmap: V.value.roadmap,
        extrapolationType: V.value.extrapolationType,
        onUpdateRoadmap: te,
        roadmapUnit: V.value.roadmapUnit,
        physicalLogicalQubitsRatio: V.value.physicalLogicalQubitsRatio
      }, {
        default: withCtx(({
          openModal: Z
        }) => [createBaseVNode("button", {
          class: "rounded-md bg-gray-500 text-xs p-0.5 px-2 text-white hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75",
          onClick: Z
        }, "Edit roadmap", 8, _hoisted_34)]),
        _: 1
      }, 8, ["name", "roadmap", "extrapolationType", "roadmapUnit", "physicalLogicalQubitsRatio"])]), createVNode(unref(script), {
        class: "custom-multiselect",
        "track-by": "hardwareName",
        label: "hardwareName",
        modelValue: Y.value,
        "onUpdate:modelValue": ae[4] || (ae[4] = Z => Y.value = Z),
        options: q.value,
        searchable: !0,
        "close-on-select": !0,
        allowEmpty: !1,
        "show-labels": !1,
        placeholder: "Pick a hardware provider"
      }, null, 8, ["modelValue", "options"]), createBaseVNode("table", _hoisted_35, [createBaseVNode("thead", _hoisted_36, [createBaseVNode("tr", _hoisted_37, [_hoisted_38, createBaseVNode("th", null, "# of " + toDisplayString(V.value.roadmapUnit) + " Qubits", 1)])]), createBaseVNode("tbody", _hoisted_39, [(openBlock(!0), createElementBlock(Fragment, null, renderList(le(V.value.roadmap), (Z, fe) => (openBlock(), createElementBlock("tr", {
        key: fe,
        class: "border-b"
      }, [createBaseVNode("td", _hoisted_40, toDisplayString(fe), 1), createBaseVNode("td", null, toDisplayString(Z), 1)]))), 128)), createBaseVNode("tr", null, [createBaseVNode("td", _hoisted_41, [createVNode(_sfc_main$3, {
        name: V.value.hardwareName,
        roadmap: V.value.roadmap,
        extrapolationType: V.value.extrapolationType,
        onUpdateRoadmap: te,
        roadmapUnit: V.value.roadmapUnit,
        physicalLogicalQubitsRatio: V.value.physicalLogicalQubitsRatio
      }, {
        default: withCtx(({
          openModal: Z
        }) => [createBaseVNode("button", {
          class: "hover:underline text-xs text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          onClick: Z
        }, "See more", 8, _hoisted_42)]),
        _: 1
      }, 8, ["name", "roadmap", "extrapolationType", "roadmapUnit", "physicalLogicalQubitsRatio"])])])])]), createVNode(_sfc_main$3, {
        ref: "editRoadmapRef",
        name: V.value.hardwareName,
        roadmap: V.value.roadmap,
        extrapolationType: V.value.extrapolationType,
        onUpdateRoadmap: te,
        roadmapUnit: V.value.roadmapUnit,
        physicalLogicalQubitsRatio: V.value.physicalLogicalQubitsRatio
      }, null, 8, ["name", "roadmap", "extrapolationType", "roadmapUnit", "physicalLogicalQubitsRatio"])]), createBaseVNode("div", _hoisted_43, [_hoisted_44, _hoisted_45, createBaseVNode("div", _hoisted_46, [createBaseVNode("span", {
        innerHTML: unref(katex).renderToString(parse(V.value.penaltyInput).toTex())
      }, null, 8, _hoisted_47)])]), createBaseVNode("div", _hoisted_48, [_hoisted_49, _hoisted_50, createVNode(unref(script), {
        class: "custom-multiselect mt-1",
        modelValue: V.value.qubitToProblemSize,
        "onUpdate:modelValue": ae[5] || (ae[5] = Z => V.value.qubitToProblemSize = Z),
        options: k.value,
        searchable: !0,
        "close-on-select": !0,
        "show-labels": !1,
        "allow-empty": !1,
        placeholder: "Pick a value"
      }, {
        singleLabel: withCtx(Z => [createBaseVNode("span", {
          innerHTML: unref(katex).renderToString(Z.option)
        }, null, 8, _hoisted_51)]),
        option: withCtx(Z => [createBaseVNode("div", _hoisted_52, [createBaseVNode("span", {
          innerHTML: unref(katex).renderToString(Z.option)
        }, null, 8, _hoisted_53)])]),
        _: 1
      }, 8, ["modelValue", "options"])])]), createBaseVNode("div", _hoisted_54, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_55, [createBaseVNode("div", _hoisted_56, [_hoisted_57, createVNode(_sfc_main$5, {
        title: "References",
        classes: "max-w-lg"
      }, {
        content: withCtx(() => [_hoisted_58, _hoisted_59]),
        _: 1
      })]), createVNode(_sfc_main$7, {
        advancedSlowdown: V.value.advancedSlowdown,
        onUpdateSlowdown: D
      }, {
        default: withCtx(({
          openModal: Z
        }) => [createBaseVNode("button", {
          class: "rounded-md bg-gray-500 text-xs p-0.5 px-2 text-white hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75",
          onClick: Z
        }, "Advanced options", 8, _hoisted_60)]),
        _: 1
      }, 8, ["advancedSlowdown"])]), _hoisted_61, createBaseVNode("div", _hoisted_62, [withDirectives(createBaseVNode("input", {
        class: "flex-1 accent-[#002D9D]",
        type: "range",
        id: "hardwareSlowdown",
        min: "0",
        max: "16",
        step: "0.5",
        "onUpdate:modelValue": ae[6] || (ae[6] = Z => V.value.hardwareSlowdown = Z)
      }, null, 512), [
        [vModelText, V.value.hardwareSlowdown]
      ]), createBaseVNode("div", _hoisted_63, [_hoisted_64, withDirectives(createBaseVNode("input", {
        class: "w-[6ch] bg-transparent absolute t-0 l-0 ml-14 mb-4 text-xs",
        type: "number",
        min: "0",
        max: "16",
        step: "0.5",
        id: "hardwareSlowdown",
        "onUpdate:modelValue": ae[7] || (ae[7] = Z => V.value.hardwareSlowdown = Z)
      }, null, 512), [
        [vModelText, V.value.hardwareSlowdown]
      ])]), createBaseVNode("div", _hoisted_65, [withDirectives(createBaseVNode("input", {
        class: "w-[6ch] bg-transparent text-center",
        type: "number",
        min: "-90",
        max: "90",
        step: "1",
        id: "quantum_improvement_rate",
        "onUpdate:modelValue": ae[8] || (ae[8] = Z => V.value.quantumImprovementRate = Z),
        onInput: oe
      }, null, 544), [
        [vModelText, V.value.quantumImprovementRate]
      ]), _hoisted_66])])]), createBaseVNode("div", _hoisted_67, [_hoisted_68, _hoisted_69, createBaseVNode("div", _hoisted_70, [withDirectives(createBaseVNode("input", {
        class: "flex-1 accent-[#002D9D]",
        type: "range",
        id: "costFactor",
        min: "0",
        max: "16",
        step: "0.5",
        "onUpdate:modelValue": ae[9] || (ae[9] = Z => V.value.costFactor = Z)
      }, null, 512), [
        [vModelText, V.value.costFactor]
      ]), createBaseVNode("div", _hoisted_71, [_hoisted_72, withDirectives(createBaseVNode("input", {
        class: "w-[6ch] bg-transparent absolute t-0 l-0 ml-14 mb-4 text-xs",
        type: "number",
        min: "0",
        max: "16",
        step: "0.5",
        id: "costFactor",
        "onUpdate:modelValue": ae[10] || (ae[10] = Z => V.value.costFactor = Z)
      }, null, 512), [
        [vModelText, V.value.costFactor]
      ])]), createBaseVNode("div", _hoisted_73, [withDirectives(createBaseVNode("input", {
        class: "w-[6ch] bg-transparent text-center",
        type: "number",
        min: "-90",
        max: "90",
        step: "1",
        id: "costImprovementRate",
        "onUpdate:modelValue": ae[11] || (ae[11] = Z => V.value.costImprovementRate = Z),
        onInput: oe
      }, null, 544), [
        [vModelText, V.value.costImprovementRate]
      ]), _hoisted_74])])]), createBaseVNode("div", _hoisted_75, [_hoisted_76, _hoisted_77, createBaseVNode("div", _hoisted_78, [K.value ? (openBlock(), createElementBlock("div", _hoisted_79, " Physical-Logical Qubit Ratio is unused when roadmap is defined in terms of logical qubits. ")) : createCommentVNode("", !0), withDirectives(createBaseVNode("input", {
        class: "flex-1 accent-[#002D9D]",
        type: "range",
        id: "physical_logical_ratio",
        "onUpdate:modelValue": ae[12] || (ae[12] = Z => V.value.physicalLogicalQubitsRatio = Z),
        min: "3",
        max: "2000",
        disabled: K.value
      }, null, 8, _hoisted_80), [
        [vModelText, V.value.physicalLogicalQubitsRatio]
      ]), withDirectives(createBaseVNode("input", {
        class: "bg-gray-100 p-2 rounded-lg text-center w-1/5",
        type: "number",
        id: "physical_logical_ratio",
        "onUpdate:modelValue": ae[13] || (ae[13] = Z => V.value.physicalLogicalQubitsRatio = Z),
        disabled: K.value
      }, null, 8, _hoisted_81), [
        [vModelText, V.value.physicalLogicalQubitsRatio]
      ]), createBaseVNode("div", _hoisted_82, [withDirectives(createBaseVNode("input", {
        class: "w-[6ch] bg-transparent text-center",
        type: "number",
        min: "-90",
        step: "1",
        id: "ratio_improvement_rate",
        "onUpdate:modelValue": ae[14] || (ae[14] = Z => V.value.ratioImprovementRate = Z),
        onInput: oe,
        disabled: K.value
      }, null, 40, _hoisted_83), [
        [vModelText, V.value.ratioImprovementRate]
      ]), _hoisted_84])])])])], 2), [
        [vShow, !se.value]
      ])])) : createCommentVNode("", !0)
    }
  },
  Form = _export_sfc(_sfc_main, [
    ["__scopeId", "data-v-ff161db2"]
  ]);
export {
  Form as
  default
};