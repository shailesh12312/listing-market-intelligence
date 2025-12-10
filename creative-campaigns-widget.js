var wk = Object.defineProperty;
var tT = (g) => {
  throw TypeError(g);
};
var bk = (g, v, S) => v in g ? wk(g, v, { enumerable: !0, configurable: !0, writable: !0, value: S }) : g[v] = S;
var lE = (g, v, S) => bk(g, typeof v != "symbol" ? v + "" : v, S), uE = (g, v, S) => v.has(g) || tT("Cannot " + S);
var $ = (g, v, S) => (uE(g, v, "read from private field"), S ? S.call(g) : v.get(g)), Ut = (g, v, S) => v.has(g) ? tT("Cannot add the same private member more than once") : v instanceof WeakSet ? v.add(g) : v.set(g, S), at = (g, v, S, O) => (uE(g, v, "write to private field"), O ? O.call(g, S) : v.set(g, S), S), ma = (g, v, S) => (uE(g, v, "access private method"), S);
var ky = (g, v, S, O) => ({
  set _(W) {
    at(g, v, W, S);
  },
  get _() {
    return $(g, v, O);
  }
});
function xk(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var cE = { exports: {} }, Ov = {}, fE = { exports: {} }, kt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function _k() {
  if (nT) return kt;
  nT = 1;
  var g = Symbol.for("react.element"), v = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), R = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ue = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function oe(M) {
    return M === null || typeof M != "object" ? null : (M = Z && M[Z] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var le = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Oe = Object.assign, De = {};
  function Ve(M, I, We) {
    this.props = M, this.context = I, this.refs = De, this.updater = We || le;
  }
  Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(M, I) {
    if (typeof M != "object" && typeof M != "function" && M != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, I, "setState");
  }, Ve.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function ot() {
  }
  ot.prototype = Ve.prototype;
  function Be(M, I, We) {
    this.props = M, this.context = I, this.refs = De, this.updater = We || le;
  }
  var Re = Be.prototype = new ot();
  Re.constructor = Be, Oe(Re, Ve.prototype), Re.isPureReactComponent = !0;
  var se = Array.isArray, ye = Object.prototype.hasOwnProperty, Xe = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Bt(M, I, We) {
    var Ze, pt = {}, dt = null, bt = null;
    if (I != null) for (Ze in I.ref !== void 0 && (bt = I.ref), I.key !== void 0 && (dt = "" + I.key), I) ye.call(I, Ze) && !je.hasOwnProperty(Ze) && (pt[Ze] = I[Ze]);
    var gt = arguments.length - 2;
    if (gt === 1) pt.children = We;
    else if (1 < gt) {
      for (var St = Array(gt), ln = 0; ln < gt; ln++) St[ln] = arguments[ln + 2];
      pt.children = St;
    }
    if (M && M.defaultProps) for (Ze in gt = M.defaultProps, gt) pt[Ze] === void 0 && (pt[Ze] = gt[Ze]);
    return { $$typeof: g, type: M, key: dt, ref: bt, props: pt, _owner: Xe.current };
  }
  function en(M, I) {
    return { $$typeof: g, type: M.type, key: I, ref: M.ref, props: M.props, _owner: M._owner };
  }
  function rt(M) {
    return typeof M == "object" && M !== null && M.$$typeof === g;
  }
  function yt(M) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(We) {
      return I[We];
    });
  }
  var wn = /\/+/g;
  function Qe(M, I) {
    return typeof M == "object" && M !== null && M.key != null ? yt("" + M.key) : I.toString(36);
  }
  function ct(M, I, We, Ze, pt) {
    var dt = typeof M;
    (dt === "undefined" || dt === "boolean") && (M = null);
    var bt = !1;
    if (M === null) bt = !0;
    else switch (dt) {
      case "string":
      case "number":
        bt = !0;
        break;
      case "object":
        switch (M.$$typeof) {
          case g:
          case v:
            bt = !0;
        }
    }
    if (bt) return bt = M, pt = pt(bt), M = Ze === "" ? "." + Qe(bt, 0) : Ze, se(pt) ? (We = "", M != null && (We = M.replace(wn, "$&/") + "/"), ct(pt, I, We, "", function(ln) {
      return ln;
    })) : pt != null && (rt(pt) && (pt = en(pt, We + (!pt.key || bt && bt.key === pt.key ? "" : ("" + pt.key).replace(wn, "$&/") + "/") + M)), I.push(pt)), 1;
    if (bt = 0, Ze = Ze === "" ? "." : Ze + ":", se(M)) for (var gt = 0; gt < M.length; gt++) {
      dt = M[gt];
      var St = Ze + Qe(dt, gt);
      bt += ct(dt, I, We, St, pt);
    }
    else if (St = oe(M), typeof St == "function") for (M = St.call(M), gt = 0; !(dt = M.next()).done; ) dt = dt.value, St = Ze + Qe(dt, gt++), bt += ct(dt, I, We, St, pt);
    else if (dt === "object") throw I = String(M), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return bt;
  }
  function $t(M, I, We) {
    if (M == null) return M;
    var Ze = [], pt = 0;
    return ct(M, Ze, "", "", function(dt) {
      return I.call(We, dt, pt++);
    }), Ze;
  }
  function Lt(M) {
    if (M._status === -1) {
      var I = M._result;
      I = I(), I.then(function(We) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = We);
      }, function(We) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = We);
      }), M._status === -1 && (M._status = 0, M._result = I);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var we = { current: null }, ie = { transition: null }, Fe = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: ie, ReactCurrentOwner: Xe };
  function pe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return kt.Children = { map: $t, forEach: function(M, I, We) {
    $t(M, function() {
      I.apply(this, arguments);
    }, We);
  }, count: function(M) {
    var I = 0;
    return $t(M, function() {
      I++;
    }), I;
  }, toArray: function(M) {
    return $t(M, function(I) {
      return I;
    }) || [];
  }, only: function(M) {
    if (!rt(M)) throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, kt.Component = Ve, kt.Fragment = S, kt.Profiler = W, kt.PureComponent = Be, kt.StrictMode = O, kt.Suspense = te, kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fe, kt.act = pe, kt.cloneElement = function(M, I, We) {
    if (M == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
    var Ze = Oe({}, M.props), pt = M.key, dt = M.ref, bt = M._owner;
    if (I != null) {
      if (I.ref !== void 0 && (dt = I.ref, bt = Xe.current), I.key !== void 0 && (pt = "" + I.key), M.type && M.type.defaultProps) var gt = M.type.defaultProps;
      for (St in I) ye.call(I, St) && !je.hasOwnProperty(St) && (Ze[St] = I[St] === void 0 && gt !== void 0 ? gt[St] : I[St]);
    }
    var St = arguments.length - 2;
    if (St === 1) Ze.children = We;
    else if (1 < St) {
      gt = Array(St);
      for (var ln = 0; ln < St; ln++) gt[ln] = arguments[ln + 2];
      Ze.children = gt;
    }
    return { $$typeof: g, type: M.type, key: pt, ref: dt, props: Ze, _owner: bt };
  }, kt.createContext = function(M) {
    return M = { $$typeof: R, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, M.Provider = { $$typeof: ae, _context: M }, M.Consumer = M;
  }, kt.createElement = Bt, kt.createFactory = function(M) {
    var I = Bt.bind(null, M);
    return I.type = M, I;
  }, kt.createRef = function() {
    return { current: null };
  }, kt.forwardRef = function(M) {
    return { $$typeof: he, render: M };
  }, kt.isValidElement = rt, kt.lazy = function(M) {
    return { $$typeof: ze, _payload: { _status: -1, _result: M }, _init: Lt };
  }, kt.memo = function(M, I) {
    return { $$typeof: ue, type: M, compare: I === void 0 ? null : I };
  }, kt.startTransition = function(M) {
    var I = ie.transition;
    ie.transition = {};
    try {
      M();
    } finally {
      ie.transition = I;
    }
  }, kt.unstable_act = pe, kt.useCallback = function(M, I) {
    return we.current.useCallback(M, I);
  }, kt.useContext = function(M) {
    return we.current.useContext(M);
  }, kt.useDebugValue = function() {
  }, kt.useDeferredValue = function(M) {
    return we.current.useDeferredValue(M);
  }, kt.useEffect = function(M, I) {
    return we.current.useEffect(M, I);
  }, kt.useId = function() {
    return we.current.useId();
  }, kt.useImperativeHandle = function(M, I, We) {
    return we.current.useImperativeHandle(M, I, We);
  }, kt.useInsertionEffect = function(M, I) {
    return we.current.useInsertionEffect(M, I);
  }, kt.useLayoutEffect = function(M, I) {
    return we.current.useLayoutEffect(M, I);
  }, kt.useMemo = function(M, I) {
    return we.current.useMemo(M, I);
  }, kt.useReducer = function(M, I, We) {
    return we.current.useReducer(M, I, We);
  }, kt.useRef = function(M) {
    return we.current.useRef(M);
  }, kt.useState = function(M) {
    return we.current.useState(M);
  }, kt.useSyncExternalStore = function(M, I, We) {
    return we.current.useSyncExternalStore(M, I, We);
  }, kt.useTransition = function() {
    return we.current.useTransition();
  }, kt.version = "18.3.1", kt;
}
var Nv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Nv.exports;
var rT;
function Dk() {
  return rT || (rT = 1, function(g, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var S = "18.3.1", O = Symbol.for("react.element"), W = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), he = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), ue = Symbol.for("react.context"), ze = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), Ve = Symbol.iterator, ot = "@@iterator";
      function Be(m) {
        if (m === null || typeof m != "object")
          return null;
        var w = Ve && m[Ve] || m[ot];
        return typeof w == "function" ? w : null;
      }
      var Re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, se = {
        transition: null
      }, ye = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Xe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {}, Bt = null;
      function en(m) {
        Bt = m;
      }
      je.setExtraStackFrame = function(m) {
        Bt = m;
      }, je.getCurrentStack = null, je.getStackAddendum = function() {
        var m = "";
        Bt && (m += Bt);
        var w = je.getCurrentStack;
        return w && (m += w() || ""), m;
      };
      var rt = !1, yt = !1, wn = !1, Qe = !1, ct = !1, $t = {
        ReactCurrentDispatcher: Re,
        ReactCurrentBatchConfig: se,
        ReactCurrentOwner: Xe
      };
      $t.ReactDebugCurrentFrame = je, $t.ReactCurrentActQueue = ye;
      function Lt(m) {
        {
          for (var w = arguments.length, F = new Array(w > 1 ? w - 1 : 0), P = 1; P < w; P++)
            F[P - 1] = arguments[P];
          ie("warn", m, F);
        }
      }
      function we(m) {
        {
          for (var w = arguments.length, F = new Array(w > 1 ? w - 1 : 0), P = 1; P < w; P++)
            F[P - 1] = arguments[P];
          ie("error", m, F);
        }
      }
      function ie(m, w, F) {
        {
          var P = $t.ReactDebugCurrentFrame, ne = P.getStackAddendum();
          ne !== "" && (w += "%s", F = F.concat([ne]));
          var Ge = F.map(function(ve) {
            return String(ve);
          });
          Ge.unshift("Warning: " + w), Function.prototype.apply.call(console[m], console, Ge);
        }
      }
      var Fe = {};
      function pe(m, w) {
        {
          var F = m.constructor, P = F && (F.displayName || F.name) || "ReactClass", ne = P + "." + w;
          if (Fe[ne])
            return;
          we("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, P), Fe[ne] = !0;
        }
      }
      var M = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(m) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(m, w, F) {
          pe(m, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(m, w, F, P) {
          pe(m, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(m, w, F, P) {
          pe(m, "setState");
        }
      }, I = Object.assign, We = {};
      Object.freeze(We);
      function Ze(m, w, F) {
        this.props = m, this.context = w, this.refs = We, this.updater = F || M;
      }
      Ze.prototype.isReactComponent = {}, Ze.prototype.setState = function(m, w) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, w, "setState");
      }, Ze.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      {
        var pt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, dt = function(m, w) {
          Object.defineProperty(Ze.prototype, m, {
            get: function() {
              Lt("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var bt in pt)
          pt.hasOwnProperty(bt) && dt(bt, pt[bt]);
      }
      function gt() {
      }
      gt.prototype = Ze.prototype;
      function St(m, w, F) {
        this.props = m, this.context = w, this.refs = We, this.updater = F || M;
      }
      var ln = St.prototype = new gt();
      ln.constructor = St, I(ln, Ze.prototype), ln.isPureReactComponent = !0;
      function gr() {
        var m = {
          current: null
        };
        return Object.seal(m), m;
      }
      var Qr = Array.isArray;
      function yn(m) {
        return Qr(m);
      }
      function Kn(m) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, F = w && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return F;
        }
      }
      function $n(m) {
        try {
          return zn(m), !1;
        } catch {
          return !0;
        }
      }
      function zn(m) {
        return "" + m;
      }
      function On(m) {
        if ($n(m))
          return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kn(m)), zn(m);
      }
      function Wr(m, w, F) {
        var P = m.displayName;
        if (P)
          return P;
        var ne = w.displayName || w.name || "";
        return ne !== "" ? F + "(" + ne + ")" : F;
      }
      function qr(m) {
        return m.displayName || "Context";
      }
      function Xn(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case ae:
            return "Fragment";
          case W:
            return "Portal";
          case he:
            return "Profiler";
          case R:
            return "StrictMode";
          case Z:
            return "Suspense";
          case oe:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case ue:
              var w = m;
              return qr(w) + ".Consumer";
            case te:
              var F = m;
              return qr(F._context) + ".Provider";
            case ze:
              return Wr(m, m.render, "ForwardRef");
            case le:
              var P = m.displayName || null;
              return P !== null ? P : Xn(m.type) || "Memo";
            case Oe: {
              var ne = m, Ge = ne._payload, ve = ne._init;
              try {
                return Xn(ve(Ge));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Sr = Object.prototype.hasOwnProperty, Gr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, ya, lr;
      lr = {};
      function Kr(m) {
        if (Sr.call(m, "ref")) {
          var w = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function gn(m) {
        if (Sr.call(m, "key")) {
          var w = Object.getOwnPropertyDescriptor(m, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function kr(m, w) {
        var F = function() {
          Er || (Er = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        F.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: F,
          configurable: !0
        });
      }
      function gi(m, w) {
        var F = function() {
          ya || (ya = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        F.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: F,
          configurable: !0
        });
      }
      function ga(m) {
        if (typeof m.ref == "string" && Xe.current && m.__self && Xe.current.stateNode !== m.__self) {
          var w = Xn(Xe.current.type);
          lr[w] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, m.ref), lr[w] = !0);
        }
      }
      var ce = function(m, w, F, P, ne, Ge, ve) {
        var Ye = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: O,
          // Built-in properties that belong on the element
          type: m,
          key: w,
          ref: F,
          props: ve,
          // Record the component responsible for creating this element.
          _owner: Ge
        };
        return Ye._store = {}, Object.defineProperty(Ye._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ye, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: P
        }), Object.defineProperty(Ye, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ne
        }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
      };
      function He(m, w, F) {
        var P, ne = {}, Ge = null, ve = null, Ye = null, Et = null;
        if (w != null) {
          Kr(w) && (ve = w.ref, ga(w)), gn(w) && (On(w.key), Ge = "" + w.key), Ye = w.__self === void 0 ? null : w.__self, Et = w.__source === void 0 ? null : w.__source;
          for (P in w)
            Sr.call(w, P) && !Gr.hasOwnProperty(P) && (ne[P] = w[P]);
        }
        var Nt = arguments.length - 2;
        if (Nt === 1)
          ne.children = F;
        else if (Nt > 1) {
          for (var nn = Array(Nt), Xt = 0; Xt < Nt; Xt++)
            nn[Xt] = arguments[Xt + 2];
          Object.freeze && Object.freeze(nn), ne.children = nn;
        }
        if (m && m.defaultProps) {
          var rn = m.defaultProps;
          for (P in rn)
            ne[P] === void 0 && (ne[P] = rn[P]);
        }
        if (Ge || ve) {
          var un = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          Ge && kr(ne, un), ve && gi(ne, un);
        }
        return ce(m, Ge, ve, Ye, Et, Xe.current, ne);
      }
      function vt(m, w) {
        var F = ce(m.type, w, m.ref, m._self, m._source, m._owner, m.props);
        return F;
      }
      function Pt(m, w, F) {
        if (m == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var P, ne = I({}, m.props), Ge = m.key, ve = m.ref, Ye = m._self, Et = m._source, Nt = m._owner;
        if (w != null) {
          Kr(w) && (ve = w.ref, Nt = Xe.current), gn(w) && (On(w.key), Ge = "" + w.key);
          var nn;
          m.type && m.type.defaultProps && (nn = m.type.defaultProps);
          for (P in w)
            Sr.call(w, P) && !Gr.hasOwnProperty(P) && (w[P] === void 0 && nn !== void 0 ? ne[P] = nn[P] : ne[P] = w[P]);
        }
        var Xt = arguments.length - 2;
        if (Xt === 1)
          ne.children = F;
        else if (Xt > 1) {
          for (var rn = Array(Xt), un = 0; un < Xt; un++)
            rn[un] = arguments[un + 2];
          ne.children = rn;
        }
        return ce(m.type, Ge, ve, Ye, Et, Nt, ne);
      }
      function It(m) {
        return typeof m == "object" && m !== null && m.$$typeof === O;
      }
      var Mn = ".", Sn = ":";
      function Cr(m) {
        var w = /[=:]/g, F = {
          "=": "=0",
          ":": "=2"
        }, P = m.replace(w, function(ne) {
          return F[ne];
        });
        return "$" + P;
      }
      var Kt = !1, Or = /\/+/g;
      function Yt(m) {
        return m.replace(Or, "$&/");
      }
      function Qt(m, w) {
        return typeof m == "object" && m !== null && m.key != null ? (On(m.key), Cr("" + m.key)) : w.toString(36);
      }
      function li(m, w, F, P, ne) {
        var Ge = typeof m;
        (Ge === "undefined" || Ge === "boolean") && (m = null);
        var ve = !1;
        if (m === null)
          ve = !0;
        else
          switch (Ge) {
            case "string":
            case "number":
              ve = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case O:
                case W:
                  ve = !0;
              }
          }
        if (ve) {
          var Ye = m, Et = ne(Ye), Nt = P === "" ? Mn + Qt(Ye, 0) : P;
          if (yn(Et)) {
            var nn = "";
            Nt != null && (nn = Yt(Nt) + "/"), li(Et, w, nn, "", function(kd) {
              return kd;
            });
          } else Et != null && (It(Et) && (Et.key && (!Ye || Ye.key !== Et.key) && On(Et.key), Et = vt(
            Et,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            F + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Et.key && (!Ye || Ye.key !== Et.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Yt("" + Et.key) + "/"
            ) : "") + Nt
          )), w.push(Et));
          return 1;
        }
        var Xt, rn, un = 0, Dt = P === "" ? Mn : P + Sn;
        if (yn(m))
          for (var Ii = 0; Ii < m.length; Ii++)
            Xt = m[Ii], rn = Dt + Qt(Xt, Ii), un += li(Xt, w, F, rn, ne);
        else {
          var lo = Be(m);
          if (typeof lo == "function") {
            var gs = m;
            lo === gs.entries && (Kt || Lt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var Dd = lo.call(gs), ci, Ss = 0; !(ci = Dd.next()).done; )
              Xt = ci.value, rn = Dt + Qt(Xt, Ss++), un += li(Xt, w, F, rn, ne);
          } else if (Ge === "object") {
            var Es = String(m);
            throw new Error("Objects are not valid as a React child (found: " + (Es === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : Es) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return un;
      }
      function Aa(m, w, F) {
        if (m == null)
          return m;
        var P = [], ne = 0;
        return li(m, P, "", "", function(Ge) {
          return w.call(F, Ge, ne++);
        }), P;
      }
      function Sl(m) {
        var w = 0;
        return Aa(m, function() {
          w++;
        }), w;
      }
      function uu(m, w, F) {
        Aa(m, function() {
          w.apply(this, arguments);
        }, F);
      }
      function Gu(m) {
        return Aa(m, function(w) {
          return w;
        }) || [];
      }
      function Pi(m) {
        if (!It(m))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return m;
      }
      function El(m) {
        var w = {
          $$typeof: ue,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: m,
          _currentValue2: m,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        w.Provider = {
          $$typeof: te,
          _context: w
        };
        var F = !1, P = !1, ne = !1;
        {
          var Ge = {
            $$typeof: ue,
            _context: w
          };
          Object.defineProperties(Ge, {
            Provider: {
              get: function() {
                return P || (P = !0, we("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(ve) {
                w.Provider = ve;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(ve) {
                w._currentValue = ve;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(ve) {
                w._currentValue2 = ve;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(ve) {
                w._threadCount = ve;
              }
            },
            Consumer: {
              get: function() {
                return F || (F = !0, we("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(ve) {
                ne || (Lt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ve), ne = !0);
              }
            }
          }), w.Consumer = Ge;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var Sa = -1, Si = 0, Ea = 1, ui = 2;
      function Mr(m) {
        if (m._status === Sa) {
          var w = m._result, F = w();
          if (F.then(function(Ge) {
            if (m._status === Si || m._status === Sa) {
              var ve = m;
              ve._status = Ea, ve._result = Ge;
            }
          }, function(Ge) {
            if (m._status === Si || m._status === Sa) {
              var ve = m;
              ve._status = ui, ve._result = Ge;
            }
          }), m._status === Sa) {
            var P = m;
            P._status = Si, P._result = F;
          }
        }
        if (m._status === Ea) {
          var ne = m._result;
          return ne === void 0 && we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ne), "default" in ne || we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ne), ne.default;
        } else
          throw m._result;
      }
      function Ca(m) {
        var w = {
          // We use these fields to store the result.
          _status: Sa,
          _result: m
        }, F = {
          $$typeof: Oe,
          _payload: w,
          _init: Mr
        };
        {
          var P, ne;
          Object.defineProperties(F, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return P;
              },
              set: function(Ge) {
                we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), P = Ge, Object.defineProperty(F, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ne;
              },
              set: function(Ge) {
                we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ne = Ge, Object.defineProperty(F, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return F;
      }
      function Ei(m) {
        m != null && m.$$typeof === le ? we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof m != "function" ? we("forwardRef requires a render function but was given %s.", m === null ? "null" : typeof m) : m.length !== 0 && m.length !== 2 && we("forwardRef render functions accept exactly two parameters: props and ref. %s", m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), m != null && (m.defaultProps != null || m.propTypes != null) && we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: ze,
          render: m
        };
        {
          var F;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(P) {
              F = P, !m.name && !m.displayName && (m.displayName = P);
            }
          });
        }
        return w;
      }
      var Ci;
      Ci = Symbol.for("react.module.reference");
      function b(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === ae || m === he || ct || m === R || m === Z || m === oe || Qe || m === De || rt || yt || wn || typeof m == "object" && m !== null && (m.$$typeof === Oe || m.$$typeof === le || m.$$typeof === te || m.$$typeof === ue || m.$$typeof === ze || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        m.$$typeof === Ci || m.getModuleId !== void 0));
      }
      function G(m, w) {
        b(m) || we("memo: The first argument must be a component. Instead received: %s", m === null ? "null" : typeof m);
        var F = {
          $$typeof: le,
          type: m,
          compare: w === void 0 ? null : w
        };
        {
          var P;
          Object.defineProperty(F, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return P;
            },
            set: function(ne) {
              P = ne, !m.name && !m.displayName && (m.displayName = ne);
            }
          });
        }
        return F;
      }
      function ee() {
        var m = Re.current;
        return m === null && we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), m;
      }
      function Ne(m) {
        var w = ee();
        if (m._context !== void 0) {
          var F = m._context;
          F.Consumer === m ? we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : F.Provider === m && we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(m);
      }
      function Rt(m) {
        var w = ee();
        return w.useState(m);
      }
      function xt(m, w, F) {
        var P = ee();
        return P.useReducer(m, w, F);
      }
      function qe(m) {
        var w = ee();
        return w.useRef(m);
      }
      function ht(m, w) {
        var F = ee();
        return F.useEffect(m, w);
      }
      function Fn(m, w) {
        var F = ee();
        return F.useInsertionEffect(m, w);
      }
      function tn(m, w) {
        var F = ee();
        return F.useLayoutEffect(m, w);
      }
      function sn(m, w) {
        var F = ee();
        return F.useCallback(m, w);
      }
      function Rr(m, w) {
        var F = ee();
        return F.useMemo(m, w);
      }
      function Ri(m, w, F) {
        var P = ee();
        return P.useImperativeHandle(m, w, F);
      }
      function At(m, w) {
        {
          var F = ee();
          return F.useDebugValue(m, w);
        }
      }
      function Jn() {
        var m = ee();
        return m.useTransition();
      }
      function Lr(m) {
        var w = ee();
        return w.useDeferredValue(m);
      }
      function mt() {
        var m = ee();
        return m.useId();
      }
      function za(m, w, F) {
        var P = ee();
        return P.useSyncExternalStore(m, w, F);
      }
      var Cl = 0, Ku, Rl, Xr, vs, Nr, hs, ms;
      function Dc() {
      }
      Dc.__reactDisabledLog = !0;
      function Xu() {
        {
          if (Cl === 0) {
            Ku = console.log, Rl = console.info, Xr = console.warn, vs = console.error, Nr = console.group, hs = console.groupCollapsed, ms = console.groupEnd;
            var m = {
              configurable: !0,
              enumerable: !0,
              value: Dc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: m,
              log: m,
              warn: m,
              error: m,
              group: m,
              groupCollapsed: m,
              groupEnd: m
            });
          }
          Cl++;
        }
      }
      function Tl() {
        {
          if (Cl--, Cl === 0) {
            var m = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: I({}, m, {
                value: Ku
              }),
              info: I({}, m, {
                value: Rl
              }),
              warn: I({}, m, {
                value: Xr
              }),
              error: I({}, m, {
                value: vs
              }),
              group: I({}, m, {
                value: Nr
              }),
              groupCollapsed: I({}, m, {
                value: hs
              }),
              groupEnd: I({}, m, {
                value: ms
              })
            });
          }
          Cl < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var oi = $t.ReactCurrentDispatcher, Ur;
      function wl(m, w, F) {
        {
          if (Ur === void 0)
            try {
              throw Error();
            } catch (ne) {
              var P = ne.stack.trim().match(/\n( *(at )?)/);
              Ur = P && P[1] || "";
            }
          return `
` + Ur + m;
        }
      }
      var bl = !1, xl;
      {
        var Ju = typeof WeakMap == "function" ? WeakMap : Map;
        xl = new Ju();
      }
      function Zu(m, w) {
        if (!m || bl)
          return "";
        {
          var F = xl.get(m);
          if (F !== void 0)
            return F;
        }
        var P;
        bl = !0;
        var ne = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ge;
        Ge = oi.current, oi.current = null, Xu();
        try {
          if (w) {
            var ve = function() {
              throw Error();
            };
            if (Object.defineProperty(ve.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ve, []);
              } catch (Dt) {
                P = Dt;
              }
              Reflect.construct(m, [], ve);
            } else {
              try {
                ve.call();
              } catch (Dt) {
                P = Dt;
              }
              m.call(ve.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Dt) {
              P = Dt;
            }
            m();
          }
        } catch (Dt) {
          if (Dt && P && typeof Dt.stack == "string") {
            for (var Ye = Dt.stack.split(`
`), Et = P.stack.split(`
`), Nt = Ye.length - 1, nn = Et.length - 1; Nt >= 1 && nn >= 0 && Ye[Nt] !== Et[nn]; )
              nn--;
            for (; Nt >= 1 && nn >= 0; Nt--, nn--)
              if (Ye[Nt] !== Et[nn]) {
                if (Nt !== 1 || nn !== 1)
                  do
                    if (Nt--, nn--, nn < 0 || Ye[Nt] !== Et[nn]) {
                      var Xt = `
` + Ye[Nt].replace(" at new ", " at ");
                      return m.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", m.displayName)), typeof m == "function" && xl.set(m, Xt), Xt;
                    }
                  while (Nt >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          bl = !1, oi.current = Ge, Tl(), Error.prepareStackTrace = ne;
        }
        var rn = m ? m.displayName || m.name : "", un = rn ? wl(rn) : "";
        return typeof m == "function" && xl.set(m, un), un;
      }
      function Vi(m, w, F) {
        return Zu(m, !1);
      }
      function _d(m) {
        var w = m.prototype;
        return !!(w && w.isReactComponent);
      }
      function Ti(m, w, F) {
        if (m == null)
          return "";
        if (typeof m == "function")
          return Zu(m, _d(m));
        if (typeof m == "string")
          return wl(m);
        switch (m) {
          case Z:
            return wl("Suspense");
          case oe:
            return wl("SuspenseList");
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case ze:
              return Vi(m.render);
            case le:
              return Ti(m.type, w, F);
            case Oe: {
              var P = m, ne = P._payload, Ge = P._init;
              try {
                return Ti(Ge(ne), w, F);
              } catch {
              }
            }
          }
        return "";
      }
      var zt = {}, eo = $t.ReactDebugCurrentFrame;
      function ou(m) {
        if (m) {
          var w = m._owner, F = Ti(m.type, m._source, w ? w.type : null);
          eo.setExtraStackFrame(F);
        } else
          eo.setExtraStackFrame(null);
      }
      function to(m, w, F, P, ne) {
        {
          var Ge = Function.call.bind(Sr);
          for (var ve in m)
            if (Ge(m, ve)) {
              var Ye = void 0;
              try {
                if (typeof m[ve] != "function") {
                  var Et = Error((P || "React class") + ": " + F + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Et.name = "Invariant Violation", Et;
                }
                Ye = m[ve](w, ve, P, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Nt) {
                Ye = Nt;
              }
              Ye && !(Ye instanceof Error) && (ou(ne), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", F, ve, typeof Ye), ou(null)), Ye instanceof Error && !(Ye.message in zt) && (zt[Ye.message] = !0, ou(ne), we("Failed %s type: %s", F, Ye.message), ou(null));
            }
        }
      }
      function _t(m) {
        if (m) {
          var w = m._owner, F = Ti(m.type, m._source, w ? w.type : null);
          en(F);
        } else
          en(null);
      }
      var no;
      no = !1;
      function ro() {
        if (Xe.current) {
          var m = Xn(Xe.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
      function it(m) {
        if (m !== void 0) {
          var w = m.fileName.replace(/^.*[\\\/]/, ""), F = m.lineNumber;
          return `

Check your code at ` + w + ":" + F + ".";
        }
        return "";
      }
      function su(m) {
        return m != null ? it(m.__source) : "";
      }
      var En = {};
      function Jr(m) {
        var w = ro();
        if (!w) {
          var F = typeof m == "string" ? m : m.displayName || m.name;
          F && (w = `

Check the top-level render call using <` + F + ">.");
        }
        return w;
      }
      function Ar(m, w) {
        if (!(!m._store || m._store.validated || m.key != null)) {
          m._store.validated = !0;
          var F = Jr(w);
          if (!En[F]) {
            En[F] = !0;
            var P = "";
            m && m._owner && m._owner !== Xe.current && (P = " It was passed a child from " + Xn(m._owner.type) + "."), _t(m), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, P), _t(null);
          }
        }
      }
      function _l(m, w) {
        if (typeof m == "object") {
          if (yn(m))
            for (var F = 0; F < m.length; F++) {
              var P = m[F];
              It(P) && Ar(P, w);
            }
          else if (It(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var ne = Be(m);
            if (typeof ne == "function" && ne !== m.entries)
              for (var Ge = ne.call(m), ve; !(ve = Ge.next()).done; )
                It(ve.value) && Ar(ve.value, w);
          }
        }
      }
      function bn(m) {
        {
          var w = m.type;
          if (w == null || typeof w == "string")
            return;
          var F;
          if (typeof w == "function")
            F = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === ze || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === le))
            F = w.propTypes;
          else
            return;
          if (F) {
            var P = Xn(w);
            to(F, m.props, "prop", P, m);
          } else if (w.PropTypes !== void 0 && !no) {
            no = !0;
            var ne = Xn(w);
            we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wt(m) {
        {
          for (var w = Object.keys(m.props), F = 0; F < w.length; F++) {
            var P = w[F];
            if (P !== "children" && P !== "key") {
              _t(m), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), _t(null);
              break;
            }
          }
          m.ref !== null && (_t(m), we("Invalid attribute `ref` supplied to `React.Fragment`."), _t(null));
        }
      }
      function kc(m, w, F) {
        var P = b(m);
        if (!P) {
          var ne = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ge = su(w);
          Ge ? ne += Ge : ne += ro();
          var ve;
          m === null ? ve = "null" : yn(m) ? ve = "array" : m !== void 0 && m.$$typeof === O ? (ve = "<" + (Xn(m.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof m, we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, ne);
        }
        var Ye = He.apply(this, arguments);
        if (Ye == null)
          return Ye;
        if (P)
          for (var Et = 2; Et < arguments.length; Et++)
            _l(arguments[Et], m);
        return m === ae ? Wt(Ye) : bn(Ye), Ye;
      }
      var Zr = !1;
      function Zn(m) {
        var w = kc.bind(null, m);
        return w.type = m, Zr || (Zr = !0, Lt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return Lt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: m
            }), m;
          }
        }), w;
      }
      function wi(m, w, F) {
        for (var P = Pt.apply(this, arguments), ne = 2; ne < arguments.length; ne++)
          _l(arguments[ne], P.type);
        return bn(P), P;
      }
      function Oc(m, w) {
        var F = se.transition;
        se.transition = {};
        var P = se.transition;
        se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          m();
        } finally {
          if (se.transition = F, F === null && P._updatedFibers) {
            var ne = P._updatedFibers.size;
            ne > 10 && Lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), P._updatedFibers.clear();
          }
        }
      }
      var Bi = !1, Dl = null;
      function Mc(m) {
        if (Dl === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), F = g && g[w];
            Dl = F.call(g, "timers").setImmediate;
          } catch {
            Dl = function(ne) {
              Bi === !1 && (Bi = !0, typeof MessageChannel > "u" && we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ge = new MessageChannel();
              Ge.port1.onmessage = ne, Ge.port2.postMessage(void 0);
            };
          }
        return Dl(m);
      }
      var Fa = 0, kl = !1;
      function $i(m) {
        {
          var w = Fa;
          Fa++, ye.current === null && (ye.current = []);
          var F = ye.isBatchingLegacy, P;
          try {
            if (ye.isBatchingLegacy = !0, P = m(), !F && ye.didScheduleLegacyUpdate) {
              var ne = ye.current;
              ne !== null && (ye.didScheduleLegacyUpdate = !1, Ml(ne));
            }
          } catch (rn) {
            throw ja(w), rn;
          } finally {
            ye.isBatchingLegacy = F;
          }
          if (P !== null && typeof P == "object" && typeof P.then == "function") {
            var Ge = P, ve = !1, Ye = {
              then: function(rn, un) {
                ve = !0, Ge.then(function(Dt) {
                  ja(w), Fa === 0 ? ao(Dt, rn, un) : rn(Dt);
                }, function(Dt) {
                  ja(w), un(Dt);
                });
              }
            };
            return !kl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ve || (kl = !0, we("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ye;
          } else {
            var Et = P;
            if (ja(w), Fa === 0) {
              var Nt = ye.current;
              Nt !== null && (Ml(Nt), ye.current = null);
              var nn = {
                then: function(rn, un) {
                  ye.current === null ? (ye.current = [], ao(Et, rn, un)) : rn(Et);
                }
              };
              return nn;
            } else {
              var Xt = {
                then: function(rn, un) {
                  rn(Et);
                }
              };
              return Xt;
            }
          }
        }
      }
      function ja(m) {
        m !== Fa - 1 && we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Fa = m;
      }
      function ao(m, w, F) {
        {
          var P = ye.current;
          if (P !== null)
            try {
              Ml(P), Mc(function() {
                P.length === 0 ? (ye.current = null, w(m)) : ao(m, w, F);
              });
            } catch (ne) {
              F(ne);
            }
          else
            w(m);
        }
      }
      var Ol = !1;
      function Ml(m) {
        if (!Ol) {
          Ol = !0;
          var w = 0;
          try {
            for (; w < m.length; w++) {
              var F = m[w];
              do
                F = F(!0);
              while (F !== null);
            }
            m.length = 0;
          } catch (P) {
            throw m = m.slice(w + 1), P;
          } finally {
            Ol = !1;
          }
        }
      }
      var cu = kc, io = wi, ys = Zn, si = {
        map: Aa,
        forEach: uu,
        count: Sl,
        toArray: Gu,
        only: Pi
      };
      v.Children = si, v.Component = Ze, v.Fragment = ae, v.Profiler = he, v.PureComponent = St, v.StrictMode = R, v.Suspense = Z, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $t, v.act = $i, v.cloneElement = io, v.createContext = El, v.createElement = cu, v.createFactory = ys, v.createRef = gr, v.forwardRef = Ei, v.isValidElement = It, v.lazy = Ca, v.memo = G, v.startTransition = Oc, v.unstable_act = $i, v.useCallback = sn, v.useContext = Ne, v.useDebugValue = At, v.useDeferredValue = Lr, v.useEffect = ht, v.useId = mt, v.useImperativeHandle = Ri, v.useInsertionEffect = Fn, v.useLayoutEffect = tn, v.useMemo = Rr, v.useReducer = xt, v.useRef = qe, v.useState = Rt, v.useSyncExternalStore = za, v.useTransition = Jn, v.version = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Nv, Nv.exports)), Nv.exports;
}
process.env.NODE_ENV === "production" ? fE.exports = _k() : fE.exports = Dk();
var _c = fE.exports;
const aT = /* @__PURE__ */ xk(_c);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iT;
function kk() {
  if (iT) return Ov;
  iT = 1;
  var g = _c, v = Symbol.for("react.element"), S = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, W = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(he, te, ue) {
    var ze, Z = {}, oe = null, le = null;
    ue !== void 0 && (oe = "" + ue), te.key !== void 0 && (oe = "" + te.key), te.ref !== void 0 && (le = te.ref);
    for (ze in te) O.call(te, ze) && !ae.hasOwnProperty(ze) && (Z[ze] = te[ze]);
    if (he && he.defaultProps) for (ze in te = he.defaultProps, te) Z[ze] === void 0 && (Z[ze] = te[ze]);
    return { $$typeof: v, type: he, key: oe, ref: le, props: Z, _owner: W.current };
  }
  return Ov.Fragment = S, Ov.jsx = R, Ov.jsxs = R, Ov;
}
var Mv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lT;
function Ok() {
  return lT || (lT = 1, process.env.NODE_ENV !== "production" && function() {
    var g = _c, v = Symbol.for("react.element"), S = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), he = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), ze = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), Oe = Symbol.iterator, De = "@@iterator";
    function Ve(b) {
      if (b === null || typeof b != "object")
        return null;
      var G = Oe && b[Oe] || b[De];
      return typeof G == "function" ? G : null;
    }
    var ot = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Be(b) {
      {
        for (var G = arguments.length, ee = new Array(G > 1 ? G - 1 : 0), Ne = 1; Ne < G; Ne++)
          ee[Ne - 1] = arguments[Ne];
        Re("error", b, ee);
      }
    }
    function Re(b, G, ee) {
      {
        var Ne = ot.ReactDebugCurrentFrame, Rt = Ne.getStackAddendum();
        Rt !== "" && (G += "%s", ee = ee.concat([Rt]));
        var xt = ee.map(function(qe) {
          return String(qe);
        });
        xt.unshift("Warning: " + G), Function.prototype.apply.call(console[b], console, xt);
      }
    }
    var se = !1, ye = !1, Xe = !1, je = !1, Bt = !1, en;
    en = Symbol.for("react.module.reference");
    function rt(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === O || b === ae || Bt || b === W || b === ue || b === ze || je || b === le || se || ye || Xe || typeof b == "object" && b !== null && (b.$$typeof === oe || b.$$typeof === Z || b.$$typeof === R || b.$$typeof === he || b.$$typeof === te || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === en || b.getModuleId !== void 0));
    }
    function yt(b, G, ee) {
      var Ne = b.displayName;
      if (Ne)
        return Ne;
      var Rt = G.displayName || G.name || "";
      return Rt !== "" ? ee + "(" + Rt + ")" : ee;
    }
    function wn(b) {
      return b.displayName || "Context";
    }
    function Qe(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && Be("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case O:
          return "Fragment";
        case S:
          return "Portal";
        case ae:
          return "Profiler";
        case W:
          return "StrictMode";
        case ue:
          return "Suspense";
        case ze:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case he:
            var G = b;
            return wn(G) + ".Consumer";
          case R:
            var ee = b;
            return wn(ee._context) + ".Provider";
          case te:
            return yt(b, b.render, "ForwardRef");
          case Z:
            var Ne = b.displayName || null;
            return Ne !== null ? Ne : Qe(b.type) || "Memo";
          case oe: {
            var Rt = b, xt = Rt._payload, qe = Rt._init;
            try {
              return Qe(qe(xt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ct = Object.assign, $t = 0, Lt, we, ie, Fe, pe, M, I;
    function We() {
    }
    We.__reactDisabledLog = !0;
    function Ze() {
      {
        if ($t === 0) {
          Lt = console.log, we = console.info, ie = console.warn, Fe = console.error, pe = console.group, M = console.groupCollapsed, I = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: We,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        $t++;
      }
    }
    function pt() {
      {
        if ($t--, $t === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ct({}, b, {
              value: Lt
            }),
            info: ct({}, b, {
              value: we
            }),
            warn: ct({}, b, {
              value: ie
            }),
            error: ct({}, b, {
              value: Fe
            }),
            group: ct({}, b, {
              value: pe
            }),
            groupCollapsed: ct({}, b, {
              value: M
            }),
            groupEnd: ct({}, b, {
              value: I
            })
          });
        }
        $t < 0 && Be("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dt = ot.ReactCurrentDispatcher, bt;
    function gt(b, G, ee) {
      {
        if (bt === void 0)
          try {
            throw Error();
          } catch (Rt) {
            var Ne = Rt.stack.trim().match(/\n( *(at )?)/);
            bt = Ne && Ne[1] || "";
          }
        return `
` + bt + b;
      }
    }
    var St = !1, ln;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      ln = new gr();
    }
    function Qr(b, G) {
      if (!b || St)
        return "";
      {
        var ee = ln.get(b);
        if (ee !== void 0)
          return ee;
      }
      var Ne;
      St = !0;
      var Rt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xt;
      xt = dt.current, dt.current = null, Ze();
      try {
        if (G) {
          var qe = function() {
            throw Error();
          };
          if (Object.defineProperty(qe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(qe, []);
            } catch (Jn) {
              Ne = Jn;
            }
            Reflect.construct(b, [], qe);
          } else {
            try {
              qe.call();
            } catch (Jn) {
              Ne = Jn;
            }
            b.call(qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Jn) {
            Ne = Jn;
          }
          b();
        }
      } catch (Jn) {
        if (Jn && Ne && typeof Jn.stack == "string") {
          for (var ht = Jn.stack.split(`
`), Fn = Ne.stack.split(`
`), tn = ht.length - 1, sn = Fn.length - 1; tn >= 1 && sn >= 0 && ht[tn] !== Fn[sn]; )
            sn--;
          for (; tn >= 1 && sn >= 0; tn--, sn--)
            if (ht[tn] !== Fn[sn]) {
              if (tn !== 1 || sn !== 1)
                do
                  if (tn--, sn--, sn < 0 || ht[tn] !== Fn[sn]) {
                    var Rr = `
` + ht[tn].replace(" at new ", " at ");
                    return b.displayName && Rr.includes("<anonymous>") && (Rr = Rr.replace("<anonymous>", b.displayName)), typeof b == "function" && ln.set(b, Rr), Rr;
                  }
                while (tn >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        St = !1, dt.current = xt, pt(), Error.prepareStackTrace = Rt;
      }
      var Ri = b ? b.displayName || b.name : "", At = Ri ? gt(Ri) : "";
      return typeof b == "function" && ln.set(b, At), At;
    }
    function yn(b, G, ee) {
      return Qr(b, !1);
    }
    function Kn(b) {
      var G = b.prototype;
      return !!(G && G.isReactComponent);
    }
    function $n(b, G, ee) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return Qr(b, Kn(b));
      if (typeof b == "string")
        return gt(b);
      switch (b) {
        case ue:
          return gt("Suspense");
        case ze:
          return gt("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case te:
            return yn(b.render);
          case Z:
            return $n(b.type, G, ee);
          case oe: {
            var Ne = b, Rt = Ne._payload, xt = Ne._init;
            try {
              return $n(xt(Rt), G, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, On = {}, Wr = ot.ReactDebugCurrentFrame;
    function qr(b) {
      if (b) {
        var G = b._owner, ee = $n(b.type, b._source, G ? G.type : null);
        Wr.setExtraStackFrame(ee);
      } else
        Wr.setExtraStackFrame(null);
    }
    function Xn(b, G, ee, Ne, Rt) {
      {
        var xt = Function.call.bind(zn);
        for (var qe in b)
          if (xt(b, qe)) {
            var ht = void 0;
            try {
              if (typeof b[qe] != "function") {
                var Fn = Error((Ne || "React class") + ": " + ee + " type `" + qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fn.name = "Invariant Violation", Fn;
              }
              ht = b[qe](G, qe, Ne, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tn) {
              ht = tn;
            }
            ht && !(ht instanceof Error) && (qr(Rt), Be("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", ee, qe, typeof ht), qr(null)), ht instanceof Error && !(ht.message in On) && (On[ht.message] = !0, qr(Rt), Be("Failed %s type: %s", ee, ht.message), qr(null));
          }
      }
    }
    var Sr = Array.isArray;
    function Gr(b) {
      return Sr(b);
    }
    function Er(b) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, ee = G && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return ee;
      }
    }
    function ya(b) {
      try {
        return lr(b), !1;
      } catch {
        return !0;
      }
    }
    function lr(b) {
      return "" + b;
    }
    function Kr(b) {
      if (ya(b))
        return Be("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(b)), lr(b);
    }
    var gn = ot.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gi, ga, ce;
    ce = {};
    function He(b) {
      if (zn.call(b, "ref")) {
        var G = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function vt(b) {
      if (zn.call(b, "key")) {
        var G = Object.getOwnPropertyDescriptor(b, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Pt(b, G) {
      if (typeof b.ref == "string" && gn.current && G && gn.current.stateNode !== G) {
        var ee = Qe(gn.current.type);
        ce[ee] || (Be('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Qe(gn.current.type), b.ref), ce[ee] = !0);
      }
    }
    function It(b, G) {
      {
        var ee = function() {
          gi || (gi = !0, Be("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        ee.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function Mn(b, G) {
      {
        var ee = function() {
          ga || (ga = !0, Be("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        ee.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var Sn = function(b, G, ee, Ne, Rt, xt, qe) {
      var ht = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: b,
        key: G,
        ref: ee,
        props: qe,
        // Record the component responsible for creating this element.
        _owner: xt
      };
      return ht._store = {}, Object.defineProperty(ht._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ht, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(ht, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Rt
      }), Object.freeze && (Object.freeze(ht.props), Object.freeze(ht)), ht;
    };
    function Cr(b, G, ee, Ne, Rt) {
      {
        var xt, qe = {}, ht = null, Fn = null;
        ee !== void 0 && (Kr(ee), ht = "" + ee), vt(G) && (Kr(G.key), ht = "" + G.key), He(G) && (Fn = G.ref, Pt(G, Rt));
        for (xt in G)
          zn.call(G, xt) && !kr.hasOwnProperty(xt) && (qe[xt] = G[xt]);
        if (b && b.defaultProps) {
          var tn = b.defaultProps;
          for (xt in tn)
            qe[xt] === void 0 && (qe[xt] = tn[xt]);
        }
        if (ht || Fn) {
          var sn = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ht && It(qe, sn), Fn && Mn(qe, sn);
        }
        return Sn(b, ht, Fn, Rt, Ne, gn.current, qe);
      }
    }
    var Kt = ot.ReactCurrentOwner, Or = ot.ReactDebugCurrentFrame;
    function Yt(b) {
      if (b) {
        var G = b._owner, ee = $n(b.type, b._source, G ? G.type : null);
        Or.setExtraStackFrame(ee);
      } else
        Or.setExtraStackFrame(null);
    }
    var Qt;
    Qt = !1;
    function li(b) {
      return typeof b == "object" && b !== null && b.$$typeof === v;
    }
    function Aa() {
      {
        if (Kt.current) {
          var b = Qe(Kt.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function Sl(b) {
      return "";
    }
    var uu = {};
    function Gu(b) {
      {
        var G = Aa();
        if (!G) {
          var ee = typeof b == "string" ? b : b.displayName || b.name;
          ee && (G = `

Check the top-level render call using <` + ee + ">.");
        }
        return G;
      }
    }
    function Pi(b, G) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var ee = Gu(G);
        if (uu[ee])
          return;
        uu[ee] = !0;
        var Ne = "";
        b && b._owner && b._owner !== Kt.current && (Ne = " It was passed a child from " + Qe(b._owner.type) + "."), Yt(b), Be('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, Ne), Yt(null);
      }
    }
    function El(b, G) {
      {
        if (typeof b != "object")
          return;
        if (Gr(b))
          for (var ee = 0; ee < b.length; ee++) {
            var Ne = b[ee];
            li(Ne) && Pi(Ne, G);
          }
        else if (li(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var Rt = Ve(b);
          if (typeof Rt == "function" && Rt !== b.entries)
            for (var xt = Rt.call(b), qe; !(qe = xt.next()).done; )
              li(qe.value) && Pi(qe.value, G);
        }
      }
    }
    function Sa(b) {
      {
        var G = b.type;
        if (G == null || typeof G == "string")
          return;
        var ee;
        if (typeof G == "function")
          ee = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === te || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === Z))
          ee = G.propTypes;
        else
          return;
        if (ee) {
          var Ne = Qe(G);
          Xn(ee, b.props, "prop", Ne, b);
        } else if (G.PropTypes !== void 0 && !Qt) {
          Qt = !0;
          var Rt = Qe(G);
          Be("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Rt || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && Be("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Si(b) {
      {
        for (var G = Object.keys(b.props), ee = 0; ee < G.length; ee++) {
          var Ne = G[ee];
          if (Ne !== "children" && Ne !== "key") {
            Yt(b), Be("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), Yt(null);
            break;
          }
        }
        b.ref !== null && (Yt(b), Be("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var Ea = {};
    function ui(b, G, ee, Ne, Rt, xt) {
      {
        var qe = rt(b);
        if (!qe) {
          var ht = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ht += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fn = Sl();
          Fn ? ht += Fn : ht += Aa();
          var tn;
          b === null ? tn = "null" : Gr(b) ? tn = "array" : b !== void 0 && b.$$typeof === v ? (tn = "<" + (Qe(b.type) || "Unknown") + " />", ht = " Did you accidentally export a JSX literal instead of a component?") : tn = typeof b, Be("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tn, ht);
        }
        var sn = Cr(b, G, ee, Rt, xt);
        if (sn == null)
          return sn;
        if (qe) {
          var Rr = G.children;
          if (Rr !== void 0)
            if (Ne)
              if (Gr(Rr)) {
                for (var Ri = 0; Ri < Rr.length; Ri++)
                  El(Rr[Ri], b);
                Object.freeze && Object.freeze(Rr);
              } else
                Be("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              El(Rr, b);
        }
        if (zn.call(G, "key")) {
          var At = Qe(b), Jn = Object.keys(G).filter(function(za) {
            return za !== "key";
          }), Lr = Jn.length > 0 ? "{key: someKey, " + Jn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ea[At + Lr]) {
            var mt = Jn.length > 0 ? "{" + Jn.join(": ..., ") + ": ...}" : "{}";
            Be(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Lr, At, mt, At), Ea[At + Lr] = !0;
          }
        }
        return b === O ? Si(sn) : Sa(sn), sn;
      }
    }
    function Mr(b, G, ee) {
      return ui(b, G, ee, !0);
    }
    function Ca(b, G, ee) {
      return ui(b, G, ee, !1);
    }
    var Ei = Ca, Ci = Mr;
    Mv.Fragment = O, Mv.jsx = Ei, Mv.jsxs = Ci;
  }()), Mv;
}
process.env.NODE_ENV === "production" ? cE.exports = kk() : cE.exports = Ok();
var dE = cE.exports, Uv = {}, pE = { exports: {} }, ai = {}, Oy = { exports: {} }, oE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uT;
function Mk() {
  return uT || (uT = 1, function(g) {
    function v(ie, Fe) {
      var pe = ie.length;
      ie.push(Fe);
      e: for (; 0 < pe; ) {
        var M = pe - 1 >>> 1, I = ie[M];
        if (0 < W(I, Fe)) ie[M] = Fe, ie[pe] = I, pe = M;
        else break e;
      }
    }
    function S(ie) {
      return ie.length === 0 ? null : ie[0];
    }
    function O(ie) {
      if (ie.length === 0) return null;
      var Fe = ie[0], pe = ie.pop();
      if (pe !== Fe) {
        ie[0] = pe;
        e: for (var M = 0, I = ie.length, We = I >>> 1; M < We; ) {
          var Ze = 2 * (M + 1) - 1, pt = ie[Ze], dt = Ze + 1, bt = ie[dt];
          if (0 > W(pt, pe)) dt < I && 0 > W(bt, pt) ? (ie[M] = bt, ie[dt] = pe, M = dt) : (ie[M] = pt, ie[Ze] = pe, M = Ze);
          else if (dt < I && 0 > W(bt, pe)) ie[M] = bt, ie[dt] = pe, M = dt;
          else break e;
        }
      }
      return Fe;
    }
    function W(ie, Fe) {
      var pe = ie.sortIndex - Fe.sortIndex;
      return pe !== 0 ? pe : ie.id - Fe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ae = performance;
      g.unstable_now = function() {
        return ae.now();
      };
    } else {
      var R = Date, he = R.now();
      g.unstable_now = function() {
        return R.now() - he;
      };
    }
    var te = [], ue = [], ze = 1, Z = null, oe = 3, le = !1, Oe = !1, De = !1, Ve = typeof setTimeout == "function" ? setTimeout : null, ot = typeof clearTimeout == "function" ? clearTimeout : null, Be = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Re(ie) {
      for (var Fe = S(ue); Fe !== null; ) {
        if (Fe.callback === null) O(ue);
        else if (Fe.startTime <= ie) O(ue), Fe.sortIndex = Fe.expirationTime, v(te, Fe);
        else break;
        Fe = S(ue);
      }
    }
    function se(ie) {
      if (De = !1, Re(ie), !Oe) if (S(te) !== null) Oe = !0, Lt(ye);
      else {
        var Fe = S(ue);
        Fe !== null && we(se, Fe.startTime - ie);
      }
    }
    function ye(ie, Fe) {
      Oe = !1, De && (De = !1, ot(Bt), Bt = -1), le = !0;
      var pe = oe;
      try {
        for (Re(Fe), Z = S(te); Z !== null && (!(Z.expirationTime > Fe) || ie && !yt()); ) {
          var M = Z.callback;
          if (typeof M == "function") {
            Z.callback = null, oe = Z.priorityLevel;
            var I = M(Z.expirationTime <= Fe);
            Fe = g.unstable_now(), typeof I == "function" ? Z.callback = I : Z === S(te) && O(te), Re(Fe);
          } else O(te);
          Z = S(te);
        }
        if (Z !== null) var We = !0;
        else {
          var Ze = S(ue);
          Ze !== null && we(se, Ze.startTime - Fe), We = !1;
        }
        return We;
      } finally {
        Z = null, oe = pe, le = !1;
      }
    }
    var Xe = !1, je = null, Bt = -1, en = 5, rt = -1;
    function yt() {
      return !(g.unstable_now() - rt < en);
    }
    function wn() {
      if (je !== null) {
        var ie = g.unstable_now();
        rt = ie;
        var Fe = !0;
        try {
          Fe = je(!0, ie);
        } finally {
          Fe ? Qe() : (Xe = !1, je = null);
        }
      } else Xe = !1;
    }
    var Qe;
    if (typeof Be == "function") Qe = function() {
      Be(wn);
    };
    else if (typeof MessageChannel < "u") {
      var ct = new MessageChannel(), $t = ct.port2;
      ct.port1.onmessage = wn, Qe = function() {
        $t.postMessage(null);
      };
    } else Qe = function() {
      Ve(wn, 0);
    };
    function Lt(ie) {
      je = ie, Xe || (Xe = !0, Qe());
    }
    function we(ie, Fe) {
      Bt = Ve(function() {
        ie(g.unstable_now());
      }, Fe);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(ie) {
      ie.callback = null;
    }, g.unstable_continueExecution = function() {
      Oe || le || (Oe = !0, Lt(ye));
    }, g.unstable_forceFrameRate = function(ie) {
      0 > ie || 125 < ie ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : en = 0 < ie ? Math.floor(1e3 / ie) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return oe;
    }, g.unstable_getFirstCallbackNode = function() {
      return S(te);
    }, g.unstable_next = function(ie) {
      switch (oe) {
        case 1:
        case 2:
        case 3:
          var Fe = 3;
          break;
        default:
          Fe = oe;
      }
      var pe = oe;
      oe = Fe;
      try {
        return ie();
      } finally {
        oe = pe;
      }
    }, g.unstable_pauseExecution = function() {
    }, g.unstable_requestPaint = function() {
    }, g.unstable_runWithPriority = function(ie, Fe) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ie = 3;
      }
      var pe = oe;
      oe = ie;
      try {
        return Fe();
      } finally {
        oe = pe;
      }
    }, g.unstable_scheduleCallback = function(ie, Fe, pe) {
      var M = g.unstable_now();
      switch (typeof pe == "object" && pe !== null ? (pe = pe.delay, pe = typeof pe == "number" && 0 < pe ? M + pe : M) : pe = M, ie) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = pe + I, ie = { id: ze++, callback: Fe, priorityLevel: ie, startTime: pe, expirationTime: I, sortIndex: -1 }, pe > M ? (ie.sortIndex = pe, v(ue, ie), S(te) === null && ie === S(ue) && (De ? (ot(Bt), Bt = -1) : De = !0, we(se, pe - M))) : (ie.sortIndex = I, v(te, ie), Oe || le || (Oe = !0, Lt(ye))), ie;
    }, g.unstable_shouldYield = yt, g.unstable_wrapCallback = function(ie) {
      var Fe = oe;
      return function() {
        var pe = oe;
        oe = Fe;
        try {
          return ie.apply(this, arguments);
        } finally {
          oe = pe;
        }
      };
    };
  }(oE)), oE;
}
var sE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oT;
function Lk() {
  return oT || (oT = 1, function(g) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, S = !1, O = 5;
      function W(ce, He) {
        var vt = ce.length;
        ce.push(He), he(ce, He, vt);
      }
      function ae(ce) {
        return ce.length === 0 ? null : ce[0];
      }
      function R(ce) {
        if (ce.length === 0)
          return null;
        var He = ce[0], vt = ce.pop();
        return vt !== He && (ce[0] = vt, te(ce, vt, 0)), He;
      }
      function he(ce, He, vt) {
        for (var Pt = vt; Pt > 0; ) {
          var It = Pt - 1 >>> 1, Mn = ce[It];
          if (ue(Mn, He) > 0)
            ce[It] = He, ce[Pt] = Mn, Pt = It;
          else
            return;
        }
      }
      function te(ce, He, vt) {
        for (var Pt = vt, It = ce.length, Mn = It >>> 1; Pt < Mn; ) {
          var Sn = (Pt + 1) * 2 - 1, Cr = ce[Sn], Kt = Sn + 1, Or = ce[Kt];
          if (ue(Cr, He) < 0)
            Kt < It && ue(Or, Cr) < 0 ? (ce[Pt] = Or, ce[Kt] = He, Pt = Kt) : (ce[Pt] = Cr, ce[Sn] = He, Pt = Sn);
          else if (Kt < It && ue(Or, He) < 0)
            ce[Pt] = Or, ce[Kt] = He, Pt = Kt;
          else
            return;
        }
      }
      function ue(ce, He) {
        var vt = ce.sortIndex - He.sortIndex;
        return vt !== 0 ? vt : ce.id - He.id;
      }
      var ze = 1, Z = 2, oe = 3, le = 4, Oe = 5;
      function De(ce, He) {
      }
      var Ve = typeof performance == "object" && typeof performance.now == "function";
      if (Ve) {
        var ot = performance;
        g.unstable_now = function() {
          return ot.now();
        };
      } else {
        var Be = Date, Re = Be.now();
        g.unstable_now = function() {
          return Be.now() - Re;
        };
      }
      var se = 1073741823, ye = -1, Xe = 250, je = 5e3, Bt = 1e4, en = se, rt = [], yt = [], wn = 1, Qe = null, ct = oe, $t = !1, Lt = !1, we = !1, ie = typeof setTimeout == "function" ? setTimeout : null, Fe = typeof clearTimeout == "function" ? clearTimeout : null, pe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function M(ce) {
        for (var He = ae(yt); He !== null; ) {
          if (He.callback === null)
            R(yt);
          else if (He.startTime <= ce)
            R(yt), He.sortIndex = He.expirationTime, W(rt, He);
          else
            return;
          He = ae(yt);
        }
      }
      function I(ce) {
        if (we = !1, M(ce), !Lt)
          if (ae(rt) !== null)
            Lt = !0, Kr(We);
          else {
            var He = ae(yt);
            He !== null && gn(I, He.startTime - ce);
          }
      }
      function We(ce, He) {
        Lt = !1, we && (we = !1, kr()), $t = !0;
        var vt = ct;
        try {
          var Pt;
          if (!S) return Ze(ce, He);
        } finally {
          Qe = null, ct = vt, $t = !1;
        }
      }
      function Ze(ce, He) {
        var vt = He;
        for (M(vt), Qe = ae(rt); Qe !== null && !v && !(Qe.expirationTime > vt && (!ce || qr())); ) {
          var Pt = Qe.callback;
          if (typeof Pt == "function") {
            Qe.callback = null, ct = Qe.priorityLevel;
            var It = Qe.expirationTime <= vt, Mn = Pt(It);
            vt = g.unstable_now(), typeof Mn == "function" ? Qe.callback = Mn : Qe === ae(rt) && R(rt), M(vt);
          } else
            R(rt);
          Qe = ae(rt);
        }
        if (Qe !== null)
          return !0;
        var Sn = ae(yt);
        return Sn !== null && gn(I, Sn.startTime - vt), !1;
      }
      function pt(ce, He) {
        switch (ce) {
          case ze:
          case Z:
          case oe:
          case le:
          case Oe:
            break;
          default:
            ce = oe;
        }
        var vt = ct;
        ct = ce;
        try {
          return He();
        } finally {
          ct = vt;
        }
      }
      function dt(ce) {
        var He;
        switch (ct) {
          case ze:
          case Z:
          case oe:
            He = oe;
            break;
          default:
            He = ct;
            break;
        }
        var vt = ct;
        ct = He;
        try {
          return ce();
        } finally {
          ct = vt;
        }
      }
      function bt(ce) {
        var He = ct;
        return function() {
          var vt = ct;
          ct = He;
          try {
            return ce.apply(this, arguments);
          } finally {
            ct = vt;
          }
        };
      }
      function gt(ce, He, vt) {
        var Pt = g.unstable_now(), It;
        if (typeof vt == "object" && vt !== null) {
          var Mn = vt.delay;
          typeof Mn == "number" && Mn > 0 ? It = Pt + Mn : It = Pt;
        } else
          It = Pt;
        var Sn;
        switch (ce) {
          case ze:
            Sn = ye;
            break;
          case Z:
            Sn = Xe;
            break;
          case Oe:
            Sn = en;
            break;
          case le:
            Sn = Bt;
            break;
          case oe:
          default:
            Sn = je;
            break;
        }
        var Cr = It + Sn, Kt = {
          id: wn++,
          callback: He,
          priorityLevel: ce,
          startTime: It,
          expirationTime: Cr,
          sortIndex: -1
        };
        return It > Pt ? (Kt.sortIndex = It, W(yt, Kt), ae(rt) === null && Kt === ae(yt) && (we ? kr() : we = !0, gn(I, It - Pt))) : (Kt.sortIndex = Cr, W(rt, Kt), !Lt && !$t && (Lt = !0, Kr(We))), Kt;
      }
      function St() {
      }
      function ln() {
        !Lt && !$t && (Lt = !0, Kr(We));
      }
      function gr() {
        return ae(rt);
      }
      function Qr(ce) {
        ce.callback = null;
      }
      function yn() {
        return ct;
      }
      var Kn = !1, $n = null, zn = -1, On = O, Wr = -1;
      function qr() {
        var ce = g.unstable_now() - Wr;
        return !(ce < On);
      }
      function Xn() {
      }
      function Sr(ce) {
        if (ce < 0 || ce > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ce > 0 ? On = Math.floor(1e3 / ce) : On = O;
      }
      var Gr = function() {
        if ($n !== null) {
          var ce = g.unstable_now();
          Wr = ce;
          var He = !0, vt = !0;
          try {
            vt = $n(He, ce);
          } finally {
            vt ? Er() : (Kn = !1, $n = null);
          }
        } else
          Kn = !1;
      }, Er;
      if (typeof pe == "function")
        Er = function() {
          pe(Gr);
        };
      else if (typeof MessageChannel < "u") {
        var ya = new MessageChannel(), lr = ya.port2;
        ya.port1.onmessage = Gr, Er = function() {
          lr.postMessage(null);
        };
      } else
        Er = function() {
          ie(Gr, 0);
        };
      function Kr(ce) {
        $n = ce, Kn || (Kn = !0, Er());
      }
      function gn(ce, He) {
        zn = ie(function() {
          ce(g.unstable_now());
        }, He);
      }
      function kr() {
        Fe(zn), zn = -1;
      }
      var gi = Xn, ga = null;
      g.unstable_IdlePriority = Oe, g.unstable_ImmediatePriority = ze, g.unstable_LowPriority = le, g.unstable_NormalPriority = oe, g.unstable_Profiling = ga, g.unstable_UserBlockingPriority = Z, g.unstable_cancelCallback = Qr, g.unstable_continueExecution = ln, g.unstable_forceFrameRate = Sr, g.unstable_getCurrentPriorityLevel = yn, g.unstable_getFirstCallbackNode = gr, g.unstable_next = dt, g.unstable_pauseExecution = St, g.unstable_requestPaint = gi, g.unstable_runWithPriority = pt, g.unstable_scheduleCallback = gt, g.unstable_shouldYield = qr, g.unstable_wrapCallback = bt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sE)), sE;
}
var sT;
function kT() {
  return sT || (sT = 1, process.env.NODE_ENV === "production" ? Oy.exports = Mk() : Oy.exports = Lk()), Oy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cT;
function Nk() {
  if (cT) return ai;
  cT = 1;
  var g = _c, v = kT();
  function S(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var O = /* @__PURE__ */ new Set(), W = {};
  function ae(n, r) {
    R(n, r), R(n + "Capture", r);
  }
  function R(n, r) {
    for (W[n] = r, n = 0; n < r.length; n++) O.add(r[n]);
  }
  var he = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), te = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ze = {}, Z = {};
  function oe(n) {
    return te.call(Z, n) ? !0 : te.call(ze, n) ? !1 : ue.test(n) ? Z[n] = !0 : (ze[n] = !0, !1);
  }
  function le(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Oe(n, r, l, o) {
    if (r === null || typeof r > "u" || le(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function De(n, r, l, o, c, d, y) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = y;
  }
  var Ve = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ve[n] = new De(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ve[r] = new De(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ve[n] = new De(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ve[n] = new De(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ve[n] = new De(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ve[n] = new De(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ve[n] = new De(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ve[n] = new De(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ve[n] = new De(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ot = /[\-:]([a-z])/g;
  function Be(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ot,
      Be
    );
    Ve[r] = new De(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ot, Be);
    Ve[r] = new De(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ot, Be);
    Ve[r] = new De(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ve[n] = new De(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ve.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ve[n] = new De(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Re(n, r, l, o) {
    var c = Ve.hasOwnProperty(r) ? Ve[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Oe(r, l, c, o) && (l = null), o || c === null ? oe(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var se = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ye = Symbol.for("react.element"), Xe = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), Bt = Symbol.for("react.strict_mode"), en = Symbol.for("react.profiler"), rt = Symbol.for("react.provider"), yt = Symbol.for("react.context"), wn = Symbol.for("react.forward_ref"), Qe = Symbol.for("react.suspense"), ct = Symbol.for("react.suspense_list"), $t = Symbol.for("react.memo"), Lt = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), ie = Symbol.iterator;
  function Fe(n) {
    return n === null || typeof n != "object" ? null : (n = ie && n[ie] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var pe = Object.assign, M;
  function I(n) {
    if (M === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      M = r && r[1] || "";
    }
    return `
` + M + n;
  }
  var We = !1;
  function Ze(n, r) {
    if (!n || We) return "";
    We = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (j) {
          var o = j;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (j) {
          o = j;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (j) {
          o = j;
        }
        n();
      }
    } catch (j) {
      if (j && o && typeof j.stack == "string") {
        for (var c = j.stack.split(`
`), d = o.stack.split(`
`), y = c.length - 1, T = d.length - 1; 1 <= y && 0 <= T && c[y] !== d[T]; ) T--;
        for (; 1 <= y && 0 <= T; y--, T--) if (c[y] !== d[T]) {
          if (y !== 1 || T !== 1)
            do
              if (y--, T--, 0 > T || c[y] !== d[T]) {
                var x = `
` + c[y].replace(" at new ", " at ");
                return n.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", n.displayName)), x;
              }
            while (1 <= y && 0 <= T);
          break;
        }
      }
    } finally {
      We = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? I(n) : "";
  }
  function pt(n) {
    switch (n.tag) {
      case 5:
        return I(n.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ze(n.type, !1), n;
      case 11:
        return n = Ze(n.type.render, !1), n;
      case 1:
        return n = Ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function dt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case je:
        return "Fragment";
      case Xe:
        return "Portal";
      case en:
        return "Profiler";
      case Bt:
        return "StrictMode";
      case Qe:
        return "Suspense";
      case ct:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case yt:
        return (n.displayName || "Context") + ".Consumer";
      case rt:
        return (n._context.displayName || "Context") + ".Provider";
      case wn:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case $t:
        return r = n.displayName || null, r !== null ? r : dt(n.type) || "Memo";
      case Lt:
        r = n._payload, n = n._init;
        try {
          return dt(n(r));
        } catch {
        }
    }
    return null;
  }
  function bt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return dt(r);
      case 8:
        return r === Bt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function gt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function St(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ln(n) {
    var r = St(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(y) {
        o = "" + y, d.call(this, y);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(y) {
        o = "" + y;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function gr(n) {
    n._valueTracker || (n._valueTracker = ln(n));
  }
  function Qr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = St(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function yn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Kn(n, r) {
    var l = r.checked;
    return pe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function $n(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = gt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function zn(n, r) {
    r = r.checked, r != null && Re(n, "checked", r, !1);
  }
  function On(n, r) {
    zn(n, r);
    var l = gt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? qr(n, r.type, l) : r.hasOwnProperty("defaultValue") && qr(n, r.type, gt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Wr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function qr(n, r, l) {
    (r !== "number" || yn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Xn = Array.isArray;
  function Sr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + gt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Gr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(S(91));
    return pe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(S(92));
        if (Xn(l)) {
          if (1 < l.length) throw Error(S(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: gt(l) };
  }
  function ya(n, r) {
    var l = gt(r.value), o = gt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function lr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Kr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function gn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Kr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var kr, gi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = kr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function ga(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ce = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, He = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ce).forEach(function(n) {
    He.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ce[r] = ce[n];
    });
  });
  function vt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ce.hasOwnProperty(n) && ce[n] ? ("" + r).trim() : r + "px";
  }
  function Pt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = vt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var It = pe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Mn(n, r) {
    if (r) {
      if (It[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(S(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(S(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(S(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(S(62));
    }
  }
  function Sn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Cr = null;
  function Kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Or = null, Yt = null, Qt = null;
  function li(n) {
    if (n = Ms(n)) {
      if (typeof Or != "function") throw Error(S(280));
      var r = n.stateNode;
      r && (r = $e(r), Or(n.stateNode, n.type, r));
    }
  }
  function Aa(n) {
    Yt ? Qt ? Qt.push(n) : Qt = [n] : Yt = n;
  }
  function Sl() {
    if (Yt) {
      var n = Yt, r = Qt;
      if (Qt = Yt = null, li(n), r) for (n = 0; n < r.length; n++) li(r[n]);
    }
  }
  function uu(n, r) {
    return n(r);
  }
  function Gu() {
  }
  var Pi = !1;
  function El(n, r, l) {
    if (Pi) return n(r, l);
    Pi = !0;
    try {
      return uu(n, r, l);
    } finally {
      Pi = !1, (Yt !== null || Qt !== null) && (Gu(), Sl());
    }
  }
  function Sa(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = $e(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(S(231, r, typeof l));
    return l;
  }
  var Si = !1;
  if (he) try {
    var Ea = {};
    Object.defineProperty(Ea, "passive", { get: function() {
      Si = !0;
    } }), window.addEventListener("test", Ea, Ea), window.removeEventListener("test", Ea, Ea);
  } catch {
    Si = !1;
  }
  function ui(n, r, l, o, c, d, y, T, x) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, j);
    } catch (K) {
      this.onError(K);
    }
  }
  var Mr = !1, Ca = null, Ei = !1, Ci = null, b = { onError: function(n) {
    Mr = !0, Ca = n;
  } };
  function G(n, r, l, o, c, d, y, T, x) {
    Mr = !1, Ca = null, ui.apply(b, arguments);
  }
  function ee(n, r, l, o, c, d, y, T, x) {
    if (G.apply(this, arguments), Mr) {
      if (Mr) {
        var j = Ca;
        Mr = !1, Ca = null;
      } else throw Error(S(198));
      Ei || (Ei = !0, Ci = j);
    }
  }
  function Ne(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Rt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function xt(n) {
    if (Ne(n) !== n) throw Error(S(188));
  }
  function qe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ne(n), r === null) throw Error(S(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return xt(c), n;
          if (d === o) return xt(c), r;
          d = d.sibling;
        }
        throw Error(S(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var y = !1, T = c.child; T; ) {
          if (T === l) {
            y = !0, l = c, o = d;
            break;
          }
          if (T === o) {
            y = !0, o = c, l = d;
            break;
          }
          T = T.sibling;
        }
        if (!y) {
          for (T = d.child; T; ) {
            if (T === l) {
              y = !0, l = d, o = c;
              break;
            }
            if (T === o) {
              y = !0, o = d, l = c;
              break;
            }
            T = T.sibling;
          }
          if (!y) throw Error(S(189));
        }
      }
      if (l.alternate !== o) throw Error(S(190));
    }
    if (l.tag !== 3) throw Error(S(188));
    return l.stateNode.current === l ? n : r;
  }
  function ht(n) {
    return n = qe(n), n !== null ? Fn(n) : null;
  }
  function Fn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Fn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var tn = v.unstable_scheduleCallback, sn = v.unstable_cancelCallback, Rr = v.unstable_shouldYield, Ri = v.unstable_requestPaint, At = v.unstable_now, Jn = v.unstable_getCurrentPriorityLevel, Lr = v.unstable_ImmediatePriority, mt = v.unstable_UserBlockingPriority, za = v.unstable_NormalPriority, Cl = v.unstable_LowPriority, Ku = v.unstable_IdlePriority, Rl = null, Xr = null;
  function vs(n) {
    if (Xr && typeof Xr.onCommitFiberRoot == "function") try {
      Xr.onCommitFiberRoot(Rl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : Dc, hs = Math.log, ms = Math.LN2;
  function Dc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (hs(n) / ms | 0) | 0;
  }
  var Xu = 64, Tl = 4194304;
  function oi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ur(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, y = l & 268435455;
    if (y !== 0) {
      var T = y & ~c;
      T !== 0 ? o = oi(T) : (d &= y, d !== 0 && (o = oi(d)));
    } else y = l & ~c, y !== 0 ? o = oi(y) : d !== 0 && (o = oi(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Nr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function wl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var y = 31 - Nr(d), T = 1 << y, x = c[y];
      x === -1 ? (!(T & l) || T & o) && (c[y] = wl(T, r)) : x <= r && (n.expiredLanes |= T), d &= ~T;
    }
  }
  function xl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ju() {
    var n = Xu;
    return Xu <<= 1, !(Xu & 4194240) && (Xu = 64), n;
  }
  function Zu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Vi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = l;
  }
  function _d(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Nr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Ti(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Nr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var zt = 0;
  function eo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ou, to, _t, no, ro, it = !1, su = [], En = null, Jr = null, Ar = null, _l = /* @__PURE__ */ new Map(), bn = /* @__PURE__ */ new Map(), Wt = [], kc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Zr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        Jr = null;
        break;
      case "mouseover":
      case "mouseout":
        Ar = null;
        break;
      case "pointerover":
      case "pointerout":
        _l.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bn.delete(r.pointerId);
    }
  }
  function Zn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ms(r), r !== null && to(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function wi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return En = Zn(En, n, r, l, o, c), !0;
      case "dragenter":
        return Jr = Zn(Jr, n, r, l, o, c), !0;
      case "mouseover":
        return Ar = Zn(Ar, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return _l.set(d, Zn(_l.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, bn.set(d, Zn(bn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Oc(n) {
    var r = Pa(n.target);
    if (r !== null) {
      var l = Ne(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Rt(l), r !== null) {
            n.blockedOn = r, ro(n.priority, function() {
              _t(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Bi(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = io(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Cr = o, l.target.dispatchEvent(o), Cr = null;
      } else return r = Ms(l), r !== null && to(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Dl(n, r, l) {
    Bi(n) && l.delete(r);
  }
  function Mc() {
    it = !1, En !== null && Bi(En) && (En = null), Jr !== null && Bi(Jr) && (Jr = null), Ar !== null && Bi(Ar) && (Ar = null), _l.forEach(Dl), bn.forEach(Dl);
  }
  function Fa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, it || (it = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Mc)));
  }
  function kl(n) {
    function r(c) {
      return Fa(c, n);
    }
    if (0 < su.length) {
      Fa(su[0], n);
      for (var l = 1; l < su.length; l++) {
        var o = su[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (En !== null && Fa(En, n), Jr !== null && Fa(Jr, n), Ar !== null && Fa(Ar, n), _l.forEach(r), bn.forEach(r), l = 0; l < Wt.length; l++) o = Wt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Wt.length && (l = Wt[0], l.blockedOn === null); ) Oc(l), l.blockedOn === null && Wt.shift();
  }
  var $i = se.ReactCurrentBatchConfig, ja = !0;
  function ao(n, r, l, o) {
    var c = zt, d = $i.transition;
    $i.transition = null;
    try {
      zt = 1, Ml(n, r, l, o);
    } finally {
      zt = c, $i.transition = d;
    }
  }
  function Ol(n, r, l, o) {
    var c = zt, d = $i.transition;
    $i.transition = null;
    try {
      zt = 4, Ml(n, r, l, o);
    } finally {
      zt = c, $i.transition = d;
    }
  }
  function Ml(n, r, l, o) {
    if (ja) {
      var c = io(n, r, l, o);
      if (c === null) Pc(n, r, o, cu, l), Zr(n, o);
      else if (wi(c, n, r, l, o)) o.stopPropagation();
      else if (Zr(n, o), r & 4 && -1 < kc.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ms(c);
          if (d !== null && ou(d), d = io(n, r, l, o), d === null && Pc(n, r, o, cu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Pc(n, r, o, null, l);
    }
  }
  var cu = null;
  function io(n, r, l, o) {
    if (cu = null, n = Kt(o), n = Pa(n), n !== null) if (r = Ne(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Rt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return cu = n, null;
  }
  function ys(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Jn()) {
          case Lr:
            return 1;
          case mt:
            return 4;
          case za:
          case Cl:
            return 16;
          case Ku:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var si = null, m = null, w = null;
  function F() {
    if (w) return w;
    var n, r = m, l = r.length, o, c = "value" in si ? si.value : si.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var y = l - n;
    for (o = 1; o <= y && r[l - o] === c[d - o]; o++) ;
    return w = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function P(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ne() {
    return !0;
  }
  function Ge() {
    return !1;
  }
  function ve(n) {
    function r(l, o, c, d, y) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var T in n) n.hasOwnProperty(T) && (l = n[T], this[T] = l ? l(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ne : Ge, this.isPropagationStopped = Ge, this;
    }
    return pe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ne);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ne);
    }, persist: function() {
    }, isPersistent: ne }), r;
  }
  var Ye = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Et = ve(Ye), Nt = pe({}, Ye, { view: 0, detail: 0 }), nn = ve(Nt), Xt, rn, un, Dt = pe({}, Nt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ld, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== un && (un && n.type === "mousemove" ? (Xt = n.screenX - un.screenX, rn = n.screenY - un.screenY) : rn = Xt = 0, un = n), Xt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : rn;
  } }), Ii = ve(Dt), lo = pe({}, Dt, { dataTransfer: 0 }), gs = ve(lo), Dd = pe({}, Nt, { relatedTarget: 0 }), ci = ve(Dd), Ss = pe({}, Ye, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Es = ve(Ss), kd = pe({}, Ye, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Fy = ve(kd), jy = pe({}, Ye, { data: 0 }), Od = ve(jy), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Pv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Vv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Vv[n]) ? !!r[n] : !1;
  }
  function Ld() {
    return Bv;
  }
  var Yi = pe({}, Nt, { key: function(n) {
    if (n.key) {
      var r = Md[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = P(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Pv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ld, charCode: function(n) {
    return n.type === "keypress" ? P(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? P(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Hy = ve(Yi), Nd = pe({}, Dt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lc = ve(Nd), Ud = pe({}, Nt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ld }), Py = ve(Ud), Nc = pe({}, Ye, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $v = ve(Nc), ea = pe({}, Dt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qi = ve(ea), jn = [9, 13, 27, 32], fi = he && "CompositionEvent" in window, fu = null;
  he && "documentMode" in document && (fu = document.documentMode);
  var Uc = he && "TextEvent" in window && !fu, Iv = he && (!fi || fu && 8 < fu && 11 >= fu), uo = " ", Yv = !1;
  function Qv(n, r) {
    switch (n) {
      case "keyup":
        return jn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ac(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var oo = !1;
  function Vy(n, r) {
    switch (n) {
      case "compositionend":
        return Ac(r);
      case "keypress":
        return r.which !== 32 ? null : (Yv = !0, uo);
      case "textInput":
        return n = r.data, n === uo && Yv ? null : n;
      default:
        return null;
    }
  }
  function By(n, r) {
    if (oo) return n === "compositionend" || !fi && Qv(n, r) ? (n = F(), w = m = si = null, oo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Iv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Wv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function qv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Wv[n.type] : r === "textarea";
  }
  function Gv(n, r, l, o) {
    Aa(o), r = Ds(r, "onChange"), 0 < r.length && (l = new Et("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Cs = null, so = null;
  function co(n) {
    Hc(n, 0);
  }
  function fo(n) {
    var r = vo(n);
    if (Qr(r)) return n;
  }
  function Kv(n, r) {
    if (n === "change") return r;
  }
  var Ad = !1;
  if (he) {
    var zd;
    if (he) {
      var Fd = "oninput" in document;
      if (!Fd) {
        var Xv = document.createElement("div");
        Xv.setAttribute("oninput", "return;"), Fd = typeof Xv.oninput == "function";
      }
      zd = Fd;
    } else zd = !1;
    Ad = zd && (!document.documentMode || 9 < document.documentMode);
  }
  function Jv() {
    Cs && (Cs.detachEvent("onpropertychange", Zv), so = Cs = null);
  }
  function Zv(n) {
    if (n.propertyName === "value" && fo(so)) {
      var r = [];
      Gv(r, so, n, Kt(n)), El(co, r);
    }
  }
  function $y(n, r, l) {
    n === "focusin" ? (Jv(), Cs = r, so = l, Cs.attachEvent("onpropertychange", Zv)) : n === "focusout" && Jv();
  }
  function Iy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return fo(so);
  }
  function Yy(n, r) {
    if (n === "click") return fo(r);
  }
  function eh(n, r) {
    if (n === "input" || n === "change") return fo(r);
  }
  function Qy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ha = typeof Object.is == "function" ? Object.is : Qy;
  function Rs(n, r) {
    if (Ha(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!te.call(r, c) || !Ha(n[c], r[c])) return !1;
    }
    return !0;
  }
  function th(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function nh(n, r) {
    var l = th(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = th(l);
    }
  }
  function rh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? rh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function zc() {
    for (var n = window, r = yn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = yn(n.document);
    }
    return r;
  }
  function Wi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Fc(n) {
    var r = zc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && rh(l.ownerDocument.documentElement, l)) {
      if (o !== null && Wi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = nh(l, d);
          var y = nh(
            l,
            o
          );
          c && y && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== y.node || n.focusOffset !== y.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(y.node, y.offset)) : (r.setEnd(y.node, y.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ah = he && "documentMode" in document && 11 >= document.documentMode, di = null, jd = null, Ts = null, Hd = !1;
  function ih(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Hd || di == null || di !== yn(o) || (o = di, "selectionStart" in o && Wi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Ts && Rs(Ts, o) || (Ts = o, o = Ds(jd, "onSelect"), 0 < o.length && (r = new Et("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = di)));
  }
  function jc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var du = { animationend: jc("Animation", "AnimationEnd"), animationiteration: jc("Animation", "AnimationIteration"), animationstart: jc("Animation", "AnimationStart"), transitionend: jc("Transition", "TransitionEnd") }, Pd = {}, Vd = {};
  he && (Vd = document.createElement("div").style, "AnimationEvent" in window || (delete du.animationend.animation, delete du.animationiteration.animation, delete du.animationstart.animation), "TransitionEvent" in window || delete du.transitionend.transition);
  function er(n) {
    if (Pd[n]) return Pd[n];
    if (!du[n]) return n;
    var r = du[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Vd) return Pd[n] = r[l];
    return n;
  }
  var Bd = er("animationend"), lh = er("animationiteration"), uh = er("animationstart"), oh = er("transitionend"), sh = /* @__PURE__ */ new Map(), ch = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function qi(n, r) {
    sh.set(n, r), ae(r, [n]);
  }
  for (var ws = 0; ws < ch.length; ws++) {
    var pu = ch[ws], Wy = pu.toLowerCase(), bs = pu[0].toUpperCase() + pu.slice(1);
    qi(Wy, "on" + bs);
  }
  qi(Bd, "onAnimationEnd"), qi(lh, "onAnimationIteration"), qi(uh, "onAnimationStart"), qi("dblclick", "onDoubleClick"), qi("focusin", "onFocus"), qi("focusout", "onBlur"), qi(oh, "onTransitionEnd"), R("onMouseEnter", ["mouseout", "mouseover"]), R("onMouseLeave", ["mouseout", "mouseover"]), R("onPointerEnter", ["pointerout", "pointerover"]), R("onPointerLeave", ["pointerout", "pointerover"]), ae("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ae("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ae("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ae("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ae("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qy = new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));
  function fh(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ee(o, r, void 0, n), n.currentTarget = null;
  }
  function Hc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var y = o.length - 1; 0 <= y; y--) {
          var T = o[y], x = T.instance, j = T.currentTarget;
          if (T = T.listener, x !== d && c.isPropagationStopped()) break e;
          fh(c, T, j), d = x;
        }
        else for (y = 0; y < o.length; y++) {
          if (T = o[y], x = T.instance, j = T.currentTarget, T = T.listener, x !== d && c.isPropagationStopped()) break e;
          fh(c, T, j), d = x;
        }
      }
    }
    if (Ei) throw n = Ci, Ei = !1, Ci = null, n;
  }
  function an(n, r) {
    var l = r[Gd];
    l === void 0 && (l = r[Gd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (dh(r, n, 2, !1), l.add(o));
  }
  function Ll(n, r, l) {
    var o = 0;
    r && (o |= 4), dh(l, n, o, r);
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function po(n) {
    if (!n[Gi]) {
      n[Gi] = !0, O.forEach(function(l) {
        l !== "selectionchange" && (qy.has(l) || Ll(l, !1, n), Ll(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Gi] || (r[Gi] = !0, Ll("selectionchange", !1, r));
    }
  }
  function dh(n, r, l, o) {
    switch (ys(r)) {
      case 1:
        var c = ao;
        break;
      case 4:
        c = Ol;
        break;
      default:
        c = Ml;
    }
    l = c.bind(null, r, l, n), c = void 0, !Si || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Pc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var y = o.tag;
      if (y === 3 || y === 4) {
        var T = o.stateNode.containerInfo;
        if (T === c || T.nodeType === 8 && T.parentNode === c) break;
        if (y === 4) for (y = o.return; y !== null; ) {
          var x = y.tag;
          if ((x === 3 || x === 4) && (x = y.stateNode.containerInfo, x === c || x.nodeType === 8 && x.parentNode === c)) return;
          y = y.return;
        }
        for (; T !== null; ) {
          if (y = Pa(T), y === null) return;
          if (x = y.tag, x === 5 || x === 6) {
            o = d = y;
            continue e;
          }
          T = T.parentNode;
        }
      }
      o = o.return;
    }
    El(function() {
      var j = d, K = Kt(l), X = [];
      e: {
        var q = sh.get(n);
        if (q !== void 0) {
          var Se = Et, be = n;
          switch (n) {
            case "keypress":
              if (P(l) === 0) break e;
            case "keydown":
            case "keyup":
              Se = Hy;
              break;
            case "focusin":
              be = "focus", Se = ci;
              break;
            case "focusout":
              be = "blur", Se = ci;
              break;
            case "beforeblur":
            case "afterblur":
              Se = ci;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Se = Ii;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Se = gs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Se = Py;
              break;
            case Bd:
            case lh:
            case uh:
              Se = Es;
              break;
            case oh:
              Se = $v;
              break;
            case "scroll":
              Se = nn;
              break;
            case "wheel":
              Se = Qi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Se = Fy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Se = Lc;
          }
          var ke = (r & 4) !== 0, Un = !ke && n === "scroll", L = ke ? q !== null ? q + "Capture" : null : q;
          ke = [];
          for (var D = j, A; D !== null; ) {
            A = D;
            var re = A.stateNode;
            if (A.tag === 5 && re !== null && (A = re, L !== null && (re = Sa(D, L), re != null && ke.push(_s(D, re, A)))), Un) break;
            D = D.return;
          }
          0 < ke.length && (q = new Se(q, be, null, l, K), X.push({ event: q, listeners: ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (q = n === "mouseover" || n === "pointerover", Se = n === "mouseout" || n === "pointerout", q && l !== Cr && (be = l.relatedTarget || l.fromElement) && (Pa(be) || be[Ki])) break e;
          if ((Se || q) && (q = K.window === K ? K : (q = K.ownerDocument) ? q.defaultView || q.parentWindow : window, Se ? (be = l.relatedTarget || l.toElement, Se = j, be = be ? Pa(be) : null, be !== null && (Un = Ne(be), be !== Un || be.tag !== 5 && be.tag !== 6) && (be = null)) : (Se = null, be = j), Se !== be)) {
            if (ke = Ii, re = "onMouseLeave", L = "onMouseEnter", D = "mouse", (n === "pointerout" || n === "pointerover") && (ke = Lc, re = "onPointerLeave", L = "onPointerEnter", D = "pointer"), Un = Se == null ? q : vo(Se), A = be == null ? q : vo(be), q = new ke(re, D + "leave", Se, l, K), q.target = Un, q.relatedTarget = A, re = null, Pa(K) === j && (ke = new ke(L, D + "enter", be, l, K), ke.target = A, ke.relatedTarget = Un, re = ke), Un = re, Se && be) t: {
              for (ke = Se, L = be, D = 0, A = ke; A; A = vu(A)) D++;
              for (A = 0, re = L; re; re = vu(re)) A++;
              for (; 0 < D - A; ) ke = vu(ke), D--;
              for (; 0 < A - D; ) L = vu(L), A--;
              for (; D--; ) {
                if (ke === L || L !== null && ke === L.alternate) break t;
                ke = vu(ke), L = vu(L);
              }
              ke = null;
            }
            else ke = null;
            Se !== null && $d(X, q, Se, ke, !1), be !== null && Un !== null && $d(X, Un, be, ke, !0);
          }
        }
        e: {
          if (q = j ? vo(j) : window, Se = q.nodeName && q.nodeName.toLowerCase(), Se === "select" || Se === "input" && q.type === "file") var Le = Kv;
          else if (qv(q)) if (Ad) Le = eh;
          else {
            Le = Iy;
            var Ke = $y;
          }
          else (Se = q.nodeName) && Se.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (Le = Yy);
          if (Le && (Le = Le(n, j))) {
            Gv(X, Le, l, K);
            break e;
          }
          Ke && Ke(n, q, j), n === "focusout" && (Ke = q._wrapperState) && Ke.controlled && q.type === "number" && qr(q, "number", q.value);
        }
        switch (Ke = j ? vo(j) : window, n) {
          case "focusin":
            (qv(Ke) || Ke.contentEditable === "true") && (di = Ke, jd = j, Ts = null);
            break;
          case "focusout":
            Ts = jd = di = null;
            break;
          case "mousedown":
            Hd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Hd = !1, ih(X, l, K);
            break;
          case "selectionchange":
            if (ah) break;
          case "keydown":
          case "keyup":
            ih(X, l, K);
        }
        var xe;
        if (fi) e: {
          switch (n) {
            case "compositionstart":
              var Je = "onCompositionStart";
              break e;
            case "compositionend":
              Je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Je = "onCompositionUpdate";
              break e;
          }
          Je = void 0;
        }
        else oo ? Qv(n, l) && (Je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Je = "onCompositionStart");
        Je && (Iv && l.locale !== "ko" && (oo || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && oo && (xe = F()) : (si = K, m = "value" in si ? si.value : si.textContent, oo = !0)), Ke = Ds(j, Je), 0 < Ke.length && (Je = new Od(Je, n, null, l, K), X.push({ event: Je, listeners: Ke }), xe ? Je.data = xe : (xe = Ac(l), xe !== null && (Je.data = xe)))), (xe = Uc ? Vy(n, l) : By(n, l)) && (j = Ds(j, "onBeforeInput"), 0 < j.length && (K = new Od("onBeforeInput", "beforeinput", null, l, K), X.push({ event: K, listeners: j }), K.data = xe));
      }
      Hc(X, r);
    });
  }
  function _s(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Ds(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Sa(n, l), d != null && o.unshift(_s(n, d, c)), d = Sa(n, r), d != null && o.push(_s(n, d, c))), n = n.return;
    }
    return o;
  }
  function vu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function $d(n, r, l, o, c) {
    for (var d = r._reactName, y = []; l !== null && l !== o; ) {
      var T = l, x = T.alternate, j = T.stateNode;
      if (x !== null && x === o) break;
      T.tag === 5 && j !== null && (T = j, c ? (x = Sa(l, d), x != null && y.unshift(_s(l, x, T))) : c || (x = Sa(l, d), x != null && y.push(_s(l, x, T)))), l = l.return;
    }
    y.length !== 0 && n.push({ event: r, listeners: y });
  }
  var Id = /\r\n?/g, Gy = /\u0000|\uFFFD/g;
  function Yd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Id, `
`).replace(Gy, "");
  }
  function Vc(n, r, l) {
    if (r = Yd(r), Yd(n) !== r && l) throw Error(S(425));
  }
  function Bc() {
  }
  var Qd = null, hu = null;
  function ks(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var mu = typeof setTimeout == "function" ? setTimeout : void 0, ph = typeof clearTimeout == "function" ? clearTimeout : void 0, Wd = typeof Promise == "function" ? Promise : void 0, qd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wd < "u" ? function(n) {
    return Wd.resolve(null).then(n).catch(Ky);
  } : mu;
  function Ky(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Nl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), kl(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    kl(r);
  }
  function pi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Os(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ul = Math.random().toString(36).slice(2), bi = "__reactFiber$" + Ul, yu = "__reactProps$" + Ul, Ki = "__reactContainer$" + Ul, Gd = "__reactEvents$" + Ul, Xy = "__reactListeners$" + Ul, Kd = "__reactHandles$" + Ul;
  function Pa(n) {
    var r = n[bi];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ki] || l[bi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Os(n); n !== null; ) {
          if (l = n[bi]) return l;
          n = Os(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ms(n) {
    return n = n[bi] || n[Ki], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function vo(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(S(33));
  }
  function $e(n) {
    return n[yu] || null;
  }
  var Al = [], cn = -1;
  function ft(n) {
    return { current: n };
  }
  function Vt(n) {
    0 > cn || (n.current = Al[cn], Al[cn] = null, cn--);
  }
  function qt(n, r) {
    cn++, Al[cn] = n.current, n.current = r;
  }
  var xi = {}, tt = ft(xi), xn = ft(!1), ta = xi;
  function Va(n, r) {
    var l = n.type.contextTypes;
    if (!l) return xi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function vn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ba() {
    Vt(xn), Vt(tt);
  }
  function zl(n, r, l) {
    if (tt.current !== xi) throw Error(S(168));
    qt(tt, r), qt(xn, l);
  }
  function Ls(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(S(108, bt(n) || "Unknown", c));
    return pe({}, l, o);
  }
  function $c(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || xi, ta = tt.current, qt(tt, n), qt(xn, xn.current), !0;
  }
  function vh(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(S(169));
    l ? (n = Ls(n, r, ta), o.__reactInternalMemoizedMergedChildContext = n, Vt(xn), Vt(tt), qt(tt, n)) : Vt(xn), qt(xn, l);
  }
  var Ra = null, tr = !1, Ns = !1;
  function Xd(n) {
    Ra === null ? Ra = [n] : Ra.push(n);
  }
  function Jd(n) {
    tr = !0, Xd(n);
  }
  function na() {
    if (!Ns && Ra !== null) {
      Ns = !0;
      var n = 0, r = zt;
      try {
        var l = Ra;
        for (zt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ra = null, tr = !1;
      } catch (c) {
        throw Ra !== null && (Ra = Ra.slice(n + 1)), tn(Lr, na), c;
      } finally {
        zt = r, Ns = !1;
      }
    }
    return null;
  }
  var Fl = [], ra = 0, gu = null, ho = 0, aa = [], Tr = 0, $a = null, ur = 1, Xi = "";
  function Ta(n, r) {
    Fl[ra++] = ho, Fl[ra++] = gu, gu = n, ho = r;
  }
  function Zd(n, r, l) {
    aa[Tr++] = ur, aa[Tr++] = Xi, aa[Tr++] = $a, $a = n;
    var o = ur;
    n = Xi;
    var c = 32 - Nr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Nr(r) + c;
    if (30 < d) {
      var y = c - c % 5;
      d = (o & (1 << y) - 1).toString(32), o >>= y, c -= y, ur = 1 << 32 - Nr(r) + c | l << c | o, Xi = d + n;
    } else ur = 1 << d | l << c | o, Xi = n;
  }
  function Ic(n) {
    n.return !== null && (Ta(n, 1), Zd(n, 1, 0));
  }
  function ep(n) {
    for (; n === gu; ) gu = Fl[--ra], Fl[ra] = null, ho = Fl[--ra], Fl[ra] = null;
    for (; n === $a; ) $a = aa[--Tr], aa[Tr] = null, Xi = aa[--Tr], aa[Tr] = null, ur = aa[--Tr], aa[Tr] = null;
  }
  var wa = null, ia = null, fn = !1, Ia = null;
  function tp(n, r) {
    var l = Ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function hh(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, wa = n, ia = pi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, wa = n, ia = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = $a !== null ? { id: ur, overflow: Xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, wa = n, ia = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Yc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Qc(n) {
    if (fn) {
      var r = ia;
      if (r) {
        var l = r;
        if (!hh(n, r)) {
          if (Yc(n)) throw Error(S(418));
          r = pi(l.nextSibling);
          var o = wa;
          r && hh(n, r) ? tp(o, l) : (n.flags = n.flags & -4097 | 2, fn = !1, wa = n);
        }
      } else {
        if (Yc(n)) throw Error(S(418));
        n.flags = n.flags & -4097 | 2, fn = !1, wa = n;
      }
    }
  }
  function mh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    wa = n;
  }
  function Wc(n) {
    if (n !== wa) return !1;
    if (!fn) return mh(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ks(n.type, n.memoizedProps)), r && (r = ia)) {
      if (Yc(n)) throw yh(), Error(S(418));
      for (; r; ) tp(n, r), r = pi(r.nextSibling);
    }
    if (mh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(S(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ia = pi(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ia = null;
      }
    } else ia = wa ? pi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function yh() {
    for (var n = ia; n; ) n = pi(n.nextSibling);
  }
  function Cn() {
    ia = wa = null, fn = !1;
  }
  function np(n) {
    Ia === null ? Ia = [n] : Ia.push(n);
  }
  var qc = se.ReactCurrentBatchConfig;
  function Su(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(S(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(S(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(y) {
          var T = c.refs;
          y === null ? delete T[d] : T[d] = y;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(S(284));
      if (!l._owner) throw Error(S(290, n));
    }
    return n;
  }
  function _i(n, r) {
    throw n = Object.prototype.toString.call(r), Error(S(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function gh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Gc(n) {
    function r(L, D) {
      if (n) {
        var A = L.deletions;
        A === null ? (L.deletions = [D], L.flags |= 16) : A.push(D);
      }
    }
    function l(L, D) {
      if (!n) return null;
      for (; D !== null; ) r(L, D), D = D.sibling;
      return null;
    }
    function o(L, D) {
      for (L = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? L.set(D.key, D) : L.set(D.index, D), D = D.sibling;
      return L;
    }
    function c(L, D) {
      return L = Yl(L, D), L.index = 0, L.sibling = null, L;
    }
    function d(L, D, A) {
      return L.index = A, n ? (A = L.alternate, A !== null ? (A = A.index, A < D ? (L.flags |= 2, D) : A) : (L.flags |= 2, D)) : (L.flags |= 1048576, D);
    }
    function y(L) {
      return n && L.alternate === null && (L.flags |= 2), L;
    }
    function T(L, D, A, re) {
      return D === null || D.tag !== 6 ? (D = Ff(A, L.mode, re), D.return = L, D) : (D = c(D, A), D.return = L, D);
    }
    function x(L, D, A, re) {
      var Le = A.type;
      return Le === je ? K(L, D, A.props.children, re, A.key) : D !== null && (D.elementType === Le || typeof Le == "object" && Le !== null && Le.$$typeof === Lt && gh(Le) === D.type) ? (re = c(D, A.props), re.ref = Su(L, D, A), re.return = L, re) : (re = Af(A.type, A.key, A.props, null, L.mode, re), re.ref = Su(L, D, A), re.return = L, re);
    }
    function j(L, D, A, re) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== A.containerInfo || D.stateNode.implementation !== A.implementation ? (D = Xs(A, L.mode, re), D.return = L, D) : (D = c(D, A.children || []), D.return = L, D);
    }
    function K(L, D, A, re, Le) {
      return D === null || D.tag !== 7 ? (D = Uu(A, L.mode, re, Le), D.return = L, D) : (D = c(D, A), D.return = L, D);
    }
    function X(L, D, A) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = Ff("" + D, L.mode, A), D.return = L, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ye:
            return A = Af(D.type, D.key, D.props, null, L.mode, A), A.ref = Su(L, null, D), A.return = L, A;
          case Xe:
            return D = Xs(D, L.mode, A), D.return = L, D;
          case Lt:
            var re = D._init;
            return X(L, re(D._payload), A);
        }
        if (Xn(D) || Fe(D)) return D = Uu(D, L.mode, A, null), D.return = L, D;
        _i(L, D);
      }
      return null;
    }
    function q(L, D, A, re) {
      var Le = D !== null ? D.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number") return Le !== null ? null : T(L, D, "" + A, re);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ye:
            return A.key === Le ? x(L, D, A, re) : null;
          case Xe:
            return A.key === Le ? j(L, D, A, re) : null;
          case Lt:
            return Le = A._init, q(
              L,
              D,
              Le(A._payload),
              re
            );
        }
        if (Xn(A) || Fe(A)) return Le !== null ? null : K(L, D, A, re, null);
        _i(L, A);
      }
      return null;
    }
    function Se(L, D, A, re, Le) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return L = L.get(A) || null, T(D, L, "" + re, Le);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case ye:
            return L = L.get(re.key === null ? A : re.key) || null, x(D, L, re, Le);
          case Xe:
            return L = L.get(re.key === null ? A : re.key) || null, j(D, L, re, Le);
          case Lt:
            var Ke = re._init;
            return Se(L, D, A, Ke(re._payload), Le);
        }
        if (Xn(re) || Fe(re)) return L = L.get(A) || null, K(D, L, re, Le, null);
        _i(D, re);
      }
      return null;
    }
    function be(L, D, A, re) {
      for (var Le = null, Ke = null, xe = D, Je = D = 0, qn = null; xe !== null && Je < A.length; Je++) {
        xe.index > Je ? (qn = xe, xe = null) : qn = xe.sibling;
        var Ft = q(L, xe, A[Je], re);
        if (Ft === null) {
          xe === null && (xe = qn);
          break;
        }
        n && xe && Ft.alternate === null && r(L, xe), D = d(Ft, D, Je), Ke === null ? Le = Ft : Ke.sibling = Ft, Ke = Ft, xe = qn;
      }
      if (Je === A.length) return l(L, xe), fn && Ta(L, Je), Le;
      if (xe === null) {
        for (; Je < A.length; Je++) xe = X(L, A[Je], re), xe !== null && (D = d(xe, D, Je), Ke === null ? Le = xe : Ke.sibling = xe, Ke = xe);
        return fn && Ta(L, Je), Le;
      }
      for (xe = o(L, xe); Je < A.length; Je++) qn = Se(xe, L, Je, A[Je], re), qn !== null && (n && qn.alternate !== null && xe.delete(qn.key === null ? Je : qn.key), D = d(qn, D, Je), Ke === null ? Le = qn : Ke.sibling = qn, Ke = qn);
      return n && xe.forEach(function(al) {
        return r(L, al);
      }), fn && Ta(L, Je), Le;
    }
    function ke(L, D, A, re) {
      var Le = Fe(A);
      if (typeof Le != "function") throw Error(S(150));
      if (A = Le.call(A), A == null) throw Error(S(151));
      for (var Ke = Le = null, xe = D, Je = D = 0, qn = null, Ft = A.next(); xe !== null && !Ft.done; Je++, Ft = A.next()) {
        xe.index > Je ? (qn = xe, xe = null) : qn = xe.sibling;
        var al = q(L, xe, Ft.value, re);
        if (al === null) {
          xe === null && (xe = qn);
          break;
        }
        n && xe && al.alternate === null && r(L, xe), D = d(al, D, Je), Ke === null ? Le = al : Ke.sibling = al, Ke = al, xe = qn;
      }
      if (Ft.done) return l(
        L,
        xe
      ), fn && Ta(L, Je), Le;
      if (xe === null) {
        for (; !Ft.done; Je++, Ft = A.next()) Ft = X(L, Ft.value, re), Ft !== null && (D = d(Ft, D, Je), Ke === null ? Le = Ft : Ke.sibling = Ft, Ke = Ft);
        return fn && Ta(L, Je), Le;
      }
      for (xe = o(L, xe); !Ft.done; Je++, Ft = A.next()) Ft = Se(xe, L, Je, Ft.value, re), Ft !== null && (n && Ft.alternate !== null && xe.delete(Ft.key === null ? Je : Ft.key), D = d(Ft, D, Je), Ke === null ? Le = Ft : Ke.sibling = Ft, Ke = Ft);
      return n && xe.forEach(function(hg) {
        return r(L, hg);
      }), fn && Ta(L, Je), Le;
    }
    function Un(L, D, A, re) {
      if (typeof A == "object" && A !== null && A.type === je && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ye:
            e: {
              for (var Le = A.key, Ke = D; Ke !== null; ) {
                if (Ke.key === Le) {
                  if (Le = A.type, Le === je) {
                    if (Ke.tag === 7) {
                      l(L, Ke.sibling), D = c(Ke, A.props.children), D.return = L, L = D;
                      break e;
                    }
                  } else if (Ke.elementType === Le || typeof Le == "object" && Le !== null && Le.$$typeof === Lt && gh(Le) === Ke.type) {
                    l(L, Ke.sibling), D = c(Ke, A.props), D.ref = Su(L, Ke, A), D.return = L, L = D;
                    break e;
                  }
                  l(L, Ke);
                  break;
                } else r(L, Ke);
                Ke = Ke.sibling;
              }
              A.type === je ? (D = Uu(A.props.children, L.mode, re, A.key), D.return = L, L = D) : (re = Af(A.type, A.key, A.props, null, L.mode, re), re.ref = Su(L, D, A), re.return = L, L = re);
            }
            return y(L);
          case Xe:
            e: {
              for (Ke = A.key; D !== null; ) {
                if (D.key === Ke) if (D.tag === 4 && D.stateNode.containerInfo === A.containerInfo && D.stateNode.implementation === A.implementation) {
                  l(L, D.sibling), D = c(D, A.children || []), D.return = L, L = D;
                  break e;
                } else {
                  l(L, D);
                  break;
                }
                else r(L, D);
                D = D.sibling;
              }
              D = Xs(A, L.mode, re), D.return = L, L = D;
            }
            return y(L);
          case Lt:
            return Ke = A._init, Un(L, D, Ke(A._payload), re);
        }
        if (Xn(A)) return be(L, D, A, re);
        if (Fe(A)) return ke(L, D, A, re);
        _i(L, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, D !== null && D.tag === 6 ? (l(L, D.sibling), D = c(D, A), D.return = L, L = D) : (l(L, D), D = Ff(A, L.mode, re), D.return = L, L = D), y(L)) : l(L, D);
    }
    return Un;
  }
  var mo = Gc(!0), Sh = Gc(!1), Ji = ft(null), In = null, fe = null, Ya = null;
  function ba() {
    Ya = fe = In = null;
  }
  function rp(n) {
    var r = Ji.current;
    Vt(Ji), n._currentValue = r;
  }
  function ap(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yo(n, r) {
    In = n, Ya = fe = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (oa = !0), n.firstContext = null);
  }
  function Qa(n) {
    var r = n._currentValue;
    if (Ya !== n) if (n = { context: n, memoizedValue: r, next: null }, fe === null) {
      if (In === null) throw Error(S(308));
      fe = n, In.dependencies = { lanes: 0, firstContext: n };
    } else fe = fe.next = n;
    return r;
  }
  var Eu = null;
  function Hn(n) {
    Eu === null ? Eu = [n] : Eu.push(n);
  }
  function Eh(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Hn(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Zi(n, o);
  }
  function Zi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var jl = !1;
  function Kc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function go(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function la(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Hl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Tt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Zi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Hn(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Zi(n, l);
  }
  function Xc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ti(n, l);
    }
  }
  function Ch(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var y = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = y : d = d.next = y, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Jc(n, r, l, o) {
    var c = n.updateQueue;
    jl = !1;
    var d = c.firstBaseUpdate, y = c.lastBaseUpdate, T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var x = T, j = x.next;
      x.next = null, y === null ? d = j : y.next = j, y = x;
      var K = n.alternate;
      K !== null && (K = K.updateQueue, T = K.lastBaseUpdate, T !== y && (T === null ? K.firstBaseUpdate = j : T.next = j, K.lastBaseUpdate = x));
    }
    if (d !== null) {
      var X = c.baseState;
      y = 0, K = j = x = null, T = d;
      do {
        var q = T.lane, Se = T.eventTime;
        if ((o & q) === q) {
          K !== null && (K = K.next = {
            eventTime: Se,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var be = n, ke = T;
            switch (q = r, Se = l, ke.tag) {
              case 1:
                if (be = ke.payload, typeof be == "function") {
                  X = be.call(Se, X, q);
                  break e;
                }
                X = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = ke.payload, q = typeof be == "function" ? be.call(Se, X, q) : be, q == null) break e;
                X = pe({}, X, q);
                break e;
              case 2:
                jl = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, q = c.effects, q === null ? c.effects = [T] : q.push(T));
        } else Se = { eventTime: Se, lane: q, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, K === null ? (j = K = Se, x = X) : K = K.next = Se, y |= q;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null) break;
          q = T, T = q.next, q.next = null, c.lastBaseUpdate = q, c.shared.pending = null;
        }
      } while (!0);
      if (K === null && (x = X), c.baseState = x, c.firstBaseUpdate = j, c.lastBaseUpdate = K, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          y |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ou |= y, n.lanes = y, n.memoizedState = X;
    }
  }
  function Rh(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(S(191, c));
        c.call(o);
      }
    }
  }
  var Us = {}, vi = ft(Us), So = ft(Us), As = ft(Us);
  function Cu(n) {
    if (n === Us) throw Error(S(174));
    return n;
  }
  function ip(n, r) {
    switch (qt(As, r), qt(So, n), qt(vi, Us), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gn(r, n);
    }
    Vt(vi), qt(vi, r);
  }
  function Eo() {
    Vt(vi), Vt(So), Vt(As);
  }
  function Th(n) {
    Cu(As.current);
    var r = Cu(vi.current), l = gn(r, n.type);
    r !== l && (qt(So, n), qt(vi, l));
  }
  function lp(n) {
    So.current === n && (Vt(vi), Vt(So));
  }
  var hn = ft(0);
  function Zc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ef = [];
  function up() {
    for (var n = 0; n < ef.length; n++) ef[n]._workInProgressVersionPrimary = null;
    ef.length = 0;
  }
  var tf = se.ReactCurrentDispatcher, zs = se.ReactCurrentBatchConfig, Me = 0, Ue = null, nt = null, Ct = null, xa = !1, Co = !1, Fs = 0, Jy = 0;
  function wr() {
    throw Error(S(321));
  }
  function js(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ha(n[l], r[l])) return !1;
    return !0;
  }
  function Q(n, r, l, o, c, d) {
    if (Me = d, Ue = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, tf.current = n === null || n.memoizedState === null ? Zy : on, n = l(o, c), Co) {
      d = 0;
      do {
        if (Co = !1, Fs = 0, 25 <= d) throw Error(S(301));
        d += 1, Ct = nt = null, r.updateQueue = null, tf.current = yf, n = l(o, c);
      } while (Co);
    }
    if (tf.current = br, r = nt !== null && nt.next !== null, Me = 0, Ct = nt = Ue = null, xa = !1, r) throw Error(S(300));
    return n;
  }
  function Pn() {
    var n = Fs !== 0;
    return Fs = 0, n;
  }
  function Pe() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ct === null ? Ue.memoizedState = Ct = n : Ct = Ct.next = n, Ct;
  }
  function or() {
    if (nt === null) {
      var n = Ue.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = nt.next;
    var r = Ct === null ? Ue.memoizedState : Ct.next;
    if (r !== null) Ct = r, nt = n;
    else {
      if (n === null) throw Error(S(310));
      nt = n, n = { memoizedState: nt.memoizedState, baseState: nt.baseState, baseQueue: nt.baseQueue, queue: nt.queue, next: null }, Ct === null ? Ue.memoizedState = Ct = n : Ct = Ct.next = n;
    }
    return Ct;
  }
  function _a(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function el(n) {
    var r = or(), l = r.queue;
    if (l === null) throw Error(S(311));
    l.lastRenderedReducer = n;
    var o = nt, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var y = c.next;
        c.next = d.next, d.next = y;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var T = y = null, x = null, j = d;
      do {
        var K = j.lane;
        if ((Me & K) === K) x !== null && (x = x.next = { lane: 0, action: j.action, hasEagerState: j.hasEagerState, eagerState: j.eagerState, next: null }), o = j.hasEagerState ? j.eagerState : n(o, j.action);
        else {
          var X = {
            lane: K,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          };
          x === null ? (T = x = X, y = o) : x = x.next = X, Ue.lanes |= K, Ou |= K;
        }
        j = j.next;
      } while (j !== null && j !== d);
      x === null ? y = o : x.next = T, Ha(o, r.memoizedState) || (oa = !0), r.memoizedState = o, r.baseState = y, r.baseQueue = x, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ue.lanes |= d, Ou |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Wa(n) {
    var r = or(), l = r.queue;
    if (l === null) throw Error(S(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var y = c = c.next;
      do
        d = n(d, y.action), y = y.next;
      while (y !== c);
      Ha(d, r.memoizedState) || (oa = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Ro() {
  }
  function Ru(n, r) {
    var l = Ue, o = or(), c = r(), d = !Ha(o.memoizedState, c);
    if (d && (o.memoizedState = c, oa = !0), o = o.queue, Hs(rf.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ct !== null && Ct.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, nf.bind(null, l, o, c, r), void 0, null), Dn === null) throw Error(S(349));
      Me & 30 || To(l, r, c);
    }
    return c;
  }
  function To(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ue.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ue.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function nf(n, r, l, o) {
    r.value = l, r.getSnapshot = o, af(r) && lf(n);
  }
  function rf(n, r, l) {
    return l(function() {
      af(r) && lf(n);
    });
  }
  function af(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ha(n, l);
    } catch {
      return !0;
    }
  }
  function lf(n) {
    var r = Zi(n, 1);
    r !== null && Rn(r, n, 1, -1);
  }
  function uf(n) {
    var r = Pe();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _a, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ps.bind(null, Ue, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Ue.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ue.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function of() {
    return or().memoizedState;
  }
  function wo(n, r, l, o) {
    var c = Pe();
    Ue.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function bo(n, r, l, o) {
    var c = or();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (nt !== null) {
      var y = nt.memoizedState;
      if (d = y.destroy, o !== null && js(o, y.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Ue.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function sf(n, r) {
    return wo(8390656, 8, n, r);
  }
  function Hs(n, r) {
    return bo(2048, 8, n, r);
  }
  function cf(n, r) {
    return bo(4, 2, n, r);
  }
  function ff(n, r) {
    return bo(4, 4, n, r);
  }
  function df(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function pf(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bo(4, 4, df.bind(null, r, n), l);
  }
  function xo() {
  }
  function wu(n, r) {
    var l = or();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && js(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function vf(n, r) {
    var l = or();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && js(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function hf(n, r, l) {
    return Me & 21 ? (Ha(l, r) || (l = Ju(), Ue.lanes |= l, Ou |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, oa = !0), n.memoizedState = l);
  }
  function op(n, r) {
    var l = zt;
    zt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = zs.transition;
    zs.transition = {};
    try {
      n(!1), r();
    } finally {
      zt = l, zs.transition = o;
    }
  }
  function mf() {
    return or().memoizedState;
  }
  function wh(n, r, l) {
    var o = rl(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, sp(n)) _o(r, l);
    else if (l = Eh(n, r, l, o), l !== null) {
      var c = ar();
      Rn(l, n, o, c), Pl(l, r, o);
    }
  }
  function Ps(n, r, l) {
    var o = rl(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (sp(n)) _o(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var y = r.lastRenderedState, T = d(y, l);
        if (c.hasEagerState = !0, c.eagerState = T, Ha(T, y)) {
          var x = r.interleaved;
          x === null ? (c.next = c, Hn(r)) : (c.next = x.next, x.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Eh(n, r, c, o), l !== null && (c = ar(), Rn(l, n, o, c), Pl(l, r, o));
    }
  }
  function sp(n) {
    var r = n.alternate;
    return n === Ue || r !== null && r === Ue;
  }
  function _o(n, r) {
    Co = xa = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Pl(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ti(n, l);
    }
  }
  var br = { readContext: Qa, useCallback: wr, useContext: wr, useEffect: wr, useImperativeHandle: wr, useInsertionEffect: wr, useLayoutEffect: wr, useMemo: wr, useReducer: wr, useRef: wr, useState: wr, useDebugValue: wr, useDeferredValue: wr, useTransition: wr, useMutableSource: wr, useSyncExternalStore: wr, useId: wr, unstable_isNewReconciler: !1 }, Zy = { readContext: Qa, useCallback: function(n, r) {
    return Pe().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Qa, useEffect: sf, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, wo(
      4194308,
      4,
      df.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return wo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return wo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Pe();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Pe();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = wh.bind(null, Ue, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Pe();
    return n = { current: n }, r.memoizedState = n;
  }, useState: uf, useDebugValue: xo, useDeferredValue: function(n) {
    return Pe().memoizedState = n;
  }, useTransition: function() {
    var n = uf(!1), r = n[0];
    return n = op.bind(null, n[1]), Pe().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Ue, c = Pe();
    if (fn) {
      if (l === void 0) throw Error(S(407));
      l = l();
    } else {
      if (l = r(), Dn === null) throw Error(S(349));
      Me & 30 || To(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, sf(rf.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, nf.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Pe(), r = Dn.identifierPrefix;
    if (fn) {
      var l = Xi, o = ur;
      l = (o & ~(1 << 32 - Nr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Fs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Jy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, on = {
    readContext: Qa,
    useCallback: wu,
    useContext: Qa,
    useEffect: Hs,
    useImperativeHandle: pf,
    useInsertionEffect: cf,
    useLayoutEffect: ff,
    useMemo: vf,
    useReducer: el,
    useRef: of,
    useState: function() {
      return el(_a);
    },
    useDebugValue: xo,
    useDeferredValue: function(n) {
      var r = or();
      return hf(r, nt.memoizedState, n);
    },
    useTransition: function() {
      var n = el(_a)[0], r = or().memoizedState;
      return [n, r];
    },
    useMutableSource: Ro,
    useSyncExternalStore: Ru,
    useId: mf,
    unstable_isNewReconciler: !1
  }, yf = { readContext: Qa, useCallback: wu, useContext: Qa, useEffect: Hs, useImperativeHandle: pf, useInsertionEffect: cf, useLayoutEffect: ff, useMemo: vf, useReducer: Wa, useRef: of, useState: function() {
    return Wa(_a);
  }, useDebugValue: xo, useDeferredValue: function(n) {
    var r = or();
    return nt === null ? r.memoizedState = n : hf(r, nt.memoizedState, n);
  }, useTransition: function() {
    var n = Wa(_a)[0], r = or().memoizedState;
    return [n, r];
  }, useMutableSource: Ro, useSyncExternalStore: Ru, useId: mf, unstable_isNewReconciler: !1 };
  function ua(n, r) {
    if (n && n.defaultProps) {
      r = pe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function bu(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : pe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var xu = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ne(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = ar(), c = rl(n), d = la(o, c);
    d.payload = r, l != null && (d.callback = l), r = Hl(n, d, c), r !== null && (Rn(r, n, c, o), Xc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = ar(), c = rl(n), d = la(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Hl(n, d, c), r !== null && (Rn(r, n, c, o), Xc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = ar(), o = rl(n), c = la(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Hl(n, c, o), r !== null && (Rn(r, n, o, l), Xc(r, n, o));
  } };
  function bh(n, r, l, o, c, d, y) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, y) : r.prototype && r.prototype.isPureReactComponent ? !Rs(l, o) || !Rs(c, d) : !0;
  }
  function xh(n, r, l) {
    var o = !1, c = xi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Qa(d) : (c = vn(r) ? ta : tt.current, o = r.contextTypes, d = (o = o != null) ? Va(n, c) : xi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = xu, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function _h(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && xu.enqueueReplaceState(r, r.state, null);
  }
  function cp(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Kc(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Qa(d) : (d = vn(r) ? ta : tt.current, c.context = Va(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (bu(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && xu.enqueueReplaceState(c, c.state, null), Jc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Vl(n, r) {
    try {
      var l = "", o = r;
      do
        l += pt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function fp(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Vs(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Dh = typeof WeakMap == "function" ? WeakMap : Map;
  function kh(n, r, l) {
    l = la(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      kf || (kf = !0, Ep = o), Vs(n, r);
    }, l;
  }
  function Oh(n, r, l) {
    l = la(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Vs(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Vs(n, r), typeof o != "function" && (Ka === null ? Ka = /* @__PURE__ */ new Set([this]) : Ka.add(this));
      var y = r.stack;
      this.componentDidCatch(r.value, { componentStack: y !== null ? y : "" });
    }), l;
  }
  function Bs(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Dh();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = sg.bind(null, n, r, l), r.then(n, n));
  }
  function Mh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function dp(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = la(-1, 1), r.tag = 2, Hl(l, r, 1))), l.lanes |= 1), n);
  }
  var Lh = se.ReactCurrentOwner, oa = !1;
  function Ln(n, r, l, o) {
    r.child = n === null ? Sh(r, null, l, o) : mo(r, n.child, l, o);
  }
  function Do(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return yo(r, c), o = Q(n, r, l, o, d, c), l = Pn(), n !== null && !oa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Nn(n, r, c)) : (fn && l && Ic(r), r.flags |= 1, Ln(n, r, o, c), r.child);
  }
  function Bl(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !bp(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, gf(n, r, d, o, c)) : (n = Af(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var y = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Rs, l(y, o) && n.ref === r.ref) return Nn(n, r, c);
    }
    return r.flags |= 1, n = Yl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function gf(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Rs(d, o) && n.ref === r.ref) if (oa = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (oa = !0);
      else return r.lanes = n.lanes, Nn(n, r, c);
    }
    return st(n, r, l, o, c);
  }
  function sa(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qt(jo, ca), ca |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, qt(jo, ca), ca |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, qt(jo, ca), ca |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, qt(jo, ca), ca |= o;
    return Ln(n, r, c, l), r.child;
  }
  function _u(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function st(n, r, l, o, c) {
    var d = vn(l) ? ta : tt.current;
    return d = Va(r, d), yo(r, c), l = Q(n, r, l, o, d, c), o = Pn(), n !== null && !oa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Nn(n, r, c)) : (fn && o && Ic(r), r.flags |= 1, Ln(n, r, l, c), r.child);
  }
  function $s(n, r, l, o, c) {
    if (vn(l)) {
      var d = !0;
      $c(r);
    } else d = !1;
    if (yo(r, c), r.stateNode === null) Ys(n, r), xh(r, l, o), cp(r, l, o, c), o = !0;
    else if (n === null) {
      var y = r.stateNode, T = r.memoizedProps;
      y.props = T;
      var x = y.context, j = l.contextType;
      typeof j == "object" && j !== null ? j = Qa(j) : (j = vn(l) ? ta : tt.current, j = Va(r, j));
      var K = l.getDerivedStateFromProps, X = typeof K == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      X || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (T !== o || x !== j) && _h(r, y, o, j), jl = !1;
      var q = r.memoizedState;
      y.state = q, Jc(r, o, y, c), x = r.memoizedState, T !== o || q !== x || xn.current || jl ? (typeof K == "function" && (bu(r, l, K, o), x = r.memoizedState), (T = jl || bh(r, l, T, o, q, x, j)) ? (X || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = x), y.props = o, y.state = x, y.context = j, o = T) : (typeof y.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      y = r.stateNode, go(n, r), T = r.memoizedProps, j = r.type === r.elementType ? T : ua(r.type, T), y.props = j, X = r.pendingProps, q = y.context, x = l.contextType, typeof x == "object" && x !== null ? x = Qa(x) : (x = vn(l) ? ta : tt.current, x = Va(r, x));
      var Se = l.getDerivedStateFromProps;
      (K = typeof Se == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (T !== X || q !== x) && _h(r, y, o, x), jl = !1, q = r.memoizedState, y.state = q, Jc(r, o, y, c);
      var be = r.memoizedState;
      T !== X || q !== be || xn.current || jl ? (typeof Se == "function" && (bu(r, l, Se, o), be = r.memoizedState), (j = jl || bh(r, l, j, o, q, be, x) || !1) ? (K || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(o, be, x), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(o, be, x)), typeof y.componentDidUpdate == "function" && (r.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = be), y.props = o, y.state = be, y.context = x, o = j) : (typeof y.componentDidUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Sf(n, r, l, o, d, c);
  }
  function Sf(n, r, l, o, c, d) {
    _u(n, r);
    var y = (r.flags & 128) !== 0;
    if (!o && !y) return c && vh(r, l, !1), Nn(n, r, d);
    o = r.stateNode, Lh.current = r;
    var T = y && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && y ? (r.child = mo(r, n.child, null, d), r.child = mo(r, null, T, d)) : Ln(n, r, T, d), r.memoizedState = o.state, c && vh(r, l, !0), r.child;
  }
  function eg(n) {
    var r = n.stateNode;
    r.pendingContext ? zl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && zl(n, r.context, !1), ip(n, r.containerInfo);
  }
  function Nh(n, r, l, o, c) {
    return Cn(), np(c), r.flags |= 256, Ln(n, r, l, o), r.child;
  }
  var Is = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Du(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Uh(n, r, l) {
    var o = r.pendingProps, c = hn.current, d = !1, y = (r.flags & 128) !== 0, T;
    if ((T = y) || (T = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), T ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), qt(hn, c & 1), n === null)
      return Qc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (y = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, y = { mode: "hidden", children: y }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = y) : d = zf(y, o, 0, null), n = Uu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Du(l), r.memoizedState = Is, n) : Ef(r, y));
    if (c = n.memoizedState, c !== null && (T = c.dehydrated, T !== null)) return pp(n, r, y, o, T, c, l);
    if (d) {
      d = o.fallback, y = r.mode, c = n.child, T = c.sibling;
      var x = { mode: "hidden", children: o.children };
      return !(y & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = x, r.deletions = null) : (o = Yl(c, x), o.subtreeFlags = c.subtreeFlags & 14680064), T !== null ? d = Yl(T, d) : (d = Uu(d, y, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, y = n.child.memoizedState, y = y === null ? Du(l) : { baseLanes: y.baseLanes | l, cachePool: null, transitions: y.transitions }, d.memoizedState = y, d.childLanes = n.childLanes & ~l, r.memoizedState = Is, o;
    }
    return d = n.child, n = d.sibling, o = Yl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ef(n, r) {
    return r = zf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Cf(n, r, l, o) {
    return o !== null && np(o), mo(r, n.child, null, l), n = Ef(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function pp(n, r, l, o, c, d, y) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = fp(Error(S(422))), Cf(n, r, y, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = zf({ mode: "visible", children: o.children }, c, 0, null), d = Uu(d, c, y, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && mo(r, n.child, null, y), r.child.memoizedState = Du(y), r.memoizedState = Is, d);
    if (!(r.mode & 1)) return Cf(n, r, y, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var T = o.dgst;
      return o = T, d = Error(S(419)), o = fp(d, o, void 0), Cf(n, r, y, o);
    }
    if (T = (y & n.childLanes) !== 0, oa || T) {
      if (o = Dn, o !== null) {
        switch (y & -y) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | y) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Zi(n, c), Rn(o, n, c, -1));
      }
      return Ks(), o = fp(Error(S(421))), Cf(n, r, y, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = wp.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ia = pi(c.nextSibling), wa = r, fn = !0, Ia = null, n !== null && (aa[Tr++] = ur, aa[Tr++] = Xi, aa[Tr++] = $a, ur = n.id, Xi = n.overflow, $a = r), r = Ef(r, o.children), r.flags |= 4096, r);
  }
  function Ah(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), ap(n.return, r, l);
  }
  function Rf(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function vp(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Ln(n, r, o.children, l), o = hn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ah(n, l, r);
        else if (n.tag === 19) Ah(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (qt(hn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Zc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Rf(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Zc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Rf(r, !0, l, null, d);
        break;
      case "together":
        Rf(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ys(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Nn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ou |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(S(153));
    if (r.child !== null) {
      for (n = r.child, l = Yl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Yl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function tl(n, r, l) {
    switch (r.tag) {
      case 3:
        eg(r), Cn();
        break;
      case 5:
        Th(r);
        break;
      case 1:
        vn(r.type) && $c(r);
        break;
      case 4:
        ip(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        qt(Ji, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (qt(hn, hn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Uh(n, r, l) : (qt(hn, hn.current & 1), n = Nn(n, r, l), n !== null ? n.sibling : null);
        qt(hn, hn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return vp(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), qt(hn, hn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, sa(n, r, l);
    }
    return Nn(n, r, l);
  }
  var Di, ko, Oo, qa;
  Di = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ko = function() {
  }, Oo = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Cu(vi.current);
      var d = null;
      switch (l) {
        case "input":
          c = Kn(n, c), o = Kn(n, o), d = [];
          break;
        case "select":
          c = pe({}, c, { value: void 0 }), o = pe({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Gr(n, c), o = Gr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Bc);
      }
      Mn(l, o);
      var y;
      l = null;
      for (j in c) if (!o.hasOwnProperty(j) && c.hasOwnProperty(j) && c[j] != null) if (j === "style") {
        var T = c[j];
        for (y in T) T.hasOwnProperty(y) && (l || (l = {}), l[y] = "");
      } else j !== "dangerouslySetInnerHTML" && j !== "children" && j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && j !== "autoFocus" && (W.hasOwnProperty(j) ? d || (d = []) : (d = d || []).push(j, null));
      for (j in o) {
        var x = o[j];
        if (T = c != null ? c[j] : void 0, o.hasOwnProperty(j) && x !== T && (x != null || T != null)) if (j === "style") if (T) {
          for (y in T) !T.hasOwnProperty(y) || x && x.hasOwnProperty(y) || (l || (l = {}), l[y] = "");
          for (y in x) x.hasOwnProperty(y) && T[y] !== x[y] && (l || (l = {}), l[y] = x[y]);
        } else l || (d || (d = []), d.push(
          j,
          l
        )), l = x;
        else j === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, T = T ? T.__html : void 0, x != null && T !== x && (d = d || []).push(j, x)) : j === "children" ? typeof x != "string" && typeof x != "number" || (d = d || []).push(j, "" + x) : j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && (W.hasOwnProperty(j) ? (x != null && j === "onScroll" && an("scroll", n), d || T === x || (d = [])) : (d = d || []).push(j, x));
      }
      l && (d = d || []).push("style", l);
      var j = d;
      (r.updateQueue = j) && (r.flags |= 4);
    }
  }, qa = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _n(n, r) {
    if (!fn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function xr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function tg(n, r, l) {
    var o = r.pendingProps;
    switch (ep(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xr(r), null;
      case 1:
        return vn(r.type) && Ba(), xr(r), null;
      case 3:
        return o = r.stateNode, Eo(), Vt(xn), Vt(tt), up(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Wc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ia !== null && (Cp(Ia), Ia = null))), ko(n, r), xr(r), null;
      case 5:
        lp(r);
        var c = Cu(As.current);
        if (l = r.type, n !== null && r.stateNode != null) Oo(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(S(166));
            return xr(r), null;
          }
          if (n = Cu(vi.current), Wc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[bi] = r, o[yu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                an("cancel", o), an("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                an("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < xs.length; c++) an(xs[c], o);
                break;
              case "source":
                an("error", o);
                break;
              case "img":
              case "image":
              case "link":
                an(
                  "error",
                  o
                ), an("load", o);
                break;
              case "details":
                an("toggle", o);
                break;
              case "input":
                $n(o, d), an("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, an("invalid", o);
                break;
              case "textarea":
                Er(o, d), an("invalid", o);
            }
            Mn(l, d), c = null;
            for (var y in d) if (d.hasOwnProperty(y)) {
              var T = d[y];
              y === "children" ? typeof T == "string" ? o.textContent !== T && (d.suppressHydrationWarning !== !0 && Vc(o.textContent, T, n), c = ["children", T]) : typeof T == "number" && o.textContent !== "" + T && (d.suppressHydrationWarning !== !0 && Vc(
                o.textContent,
                T,
                n
              ), c = ["children", "" + T]) : W.hasOwnProperty(y) && T != null && y === "onScroll" && an("scroll", o);
            }
            switch (l) {
              case "input":
                gr(o), Wr(o, d, !0);
                break;
              case "textarea":
                gr(o), lr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Bc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            y = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Kr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = y.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = y.createElement(l, { is: o.is }) : (n = y.createElement(l), l === "select" && (y = n, o.multiple ? y.multiple = !0 : o.size && (y.size = o.size))) : n = y.createElementNS(n, l), n[bi] = r, n[yu] = o, Di(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (y = Sn(l, o), l) {
                case "dialog":
                  an("cancel", n), an("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  an("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < xs.length; c++) an(xs[c], n);
                  c = o;
                  break;
                case "source":
                  an("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  an(
                    "error",
                    n
                  ), an("load", n), c = o;
                  break;
                case "details":
                  an("toggle", n), c = o;
                  break;
                case "input":
                  $n(n, o), c = Kn(n, o), an("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = pe({}, o, { value: void 0 }), an("invalid", n);
                  break;
                case "textarea":
                  Er(n, o), c = Gr(n, o), an("invalid", n);
                  break;
                default:
                  c = o;
              }
              Mn(l, c), T = c;
              for (d in T) if (T.hasOwnProperty(d)) {
                var x = T[d];
                d === "style" ? Pt(n, x) : d === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, x != null && gi(n, x)) : d === "children" ? typeof x == "string" ? (l !== "textarea" || x !== "") && ga(n, x) : typeof x == "number" && ga(n, "" + x) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (W.hasOwnProperty(d) ? x != null && d === "onScroll" && an("scroll", n) : x != null && Re(n, d, x, y));
              }
              switch (l) {
                case "input":
                  gr(n), Wr(n, o, !1);
                  break;
                case "textarea":
                  gr(n), lr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + gt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Sr(n, !!o.multiple, d, !1) : o.defaultValue != null && Sr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Bc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return xr(r), null;
      case 6:
        if (n && r.stateNode != null) qa(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(S(166));
          if (l = Cu(As.current), Cu(vi.current), Wc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[bi] = r, (d = o.nodeValue !== l) && (n = wa, n !== null)) switch (n.tag) {
              case 3:
                Vc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Vc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[bi] = r, r.stateNode = o;
        }
        return xr(r), null;
      case 13:
        if (Vt(hn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && ia !== null && r.mode & 1 && !(r.flags & 128)) yh(), Cn(), r.flags |= 98560, d = !1;
          else if (d = Wc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(S(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(S(317));
              d[bi] = r;
            } else Cn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            xr(r), d = !1;
          } else Ia !== null && (Cp(Ia), Ia = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || hn.current & 1 ? Qn === 0 && (Qn = 3) : Ks())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return Eo(), ko(n, r), n === null && po(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return rp(r.type._context), xr(r), null;
      case 17:
        return vn(r.type) && Ba(), xr(r), null;
      case 19:
        if (Vt(hn), d = r.memoizedState, d === null) return xr(r), null;
        if (o = (r.flags & 128) !== 0, y = d.rendering, y === null) if (o) _n(d, !1);
        else {
          if (Qn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (y = Zc(n), y !== null) {
              for (r.flags |= 128, _n(d, !1), o = y.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, y = d.alternate, y === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = y.childLanes, d.lanes = y.lanes, d.child = y.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = y.memoizedProps, d.memoizedState = y.memoizedState, d.updateQueue = y.updateQueue, d.type = y.type, n = y.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return qt(hn, hn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && At() > Po && (r.flags |= 128, o = !0, _n(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Zc(y), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _n(d, !0), d.tail === null && d.tailMode === "hidden" && !y.alternate && !fn) return xr(r), null;
          } else 2 * At() - d.renderingStartTime > Po && l !== 1073741824 && (r.flags |= 128, o = !0, _n(d, !1), r.lanes = 4194304);
          d.isBackwards ? (y.sibling = r.child, r.child = y) : (l = d.last, l !== null ? l.sibling = y : r.child = y, d.last = y);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = At(), r.sibling = null, l = hn.current, qt(hn, o ? l & 1 | 2 : l & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return Nf(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ca & 1073741824 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, r.tag));
  }
  function ng(n, r) {
    switch (ep(r), r.tag) {
      case 1:
        return vn(r.type) && Ba(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eo(), Vt(xn), Vt(tt), up(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return lp(r), null;
      case 13:
        if (Vt(hn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(S(340));
          Cn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Vt(hn), null;
      case 4:
        return Eo(), null;
      case 10:
        return rp(r.type._context), null;
      case 22:
      case 23:
        return Nf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Mo = !1, sr = !1, Tf = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function Lo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      kn(n, r, o);
    }
    else l.current = null;
  }
  function hp(n, r, l) {
    try {
      l();
    } catch (o) {
      kn(n, r, o);
    }
  }
  var wf = !1;
  function rg(n, r) {
    if (Qd = ja, n = zc(), Wi(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var y = 0, T = -1, x = -1, j = 0, K = 0, X = n, q = null;
          t: for (; ; ) {
            for (var Se; X !== l || c !== 0 && X.nodeType !== 3 || (T = y + c), X !== d || o !== 0 && X.nodeType !== 3 || (x = y + o), X.nodeType === 3 && (y += X.nodeValue.length), (Se = X.firstChild) !== null; )
              q = X, X = Se;
            for (; ; ) {
              if (X === n) break t;
              if (q === l && ++j === c && (T = y), q === d && ++K === o && (x = y), (Se = X.nextSibling) !== null) break;
              X = q, q = X.parentNode;
            }
            X = Se;
          }
          l = T === -1 || x === -1 ? null : { start: T, end: x };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (hu = { focusedElem: n, selectionRange: l }, ja = !1, Te = r; Te !== null; ) if (r = Te, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Te = n;
    else for (; Te !== null; ) {
      r = Te;
      try {
        var be = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (be !== null) {
              var ke = be.memoizedProps, Un = be.memoizedState, L = r.stateNode, D = L.getSnapshotBeforeUpdate(r.elementType === r.type ? ke : ua(r.type, ke), Un);
              L.__reactInternalSnapshotBeforeUpdate = D;
            }
            break;
          case 3:
            var A = r.stateNode.containerInfo;
            A.nodeType === 1 ? A.textContent = "" : A.nodeType === 9 && A.documentElement && A.removeChild(A.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(S(163));
        }
      } catch (re) {
        kn(r, r.return, re);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Te = n;
        break;
      }
      Te = r.return;
    }
    return be = wf, wf = !1, be;
  }
  function No(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && hp(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function bf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function xf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function zh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, zh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[bi], delete r[yu], delete r[Gd], delete r[Xy], delete r[Kd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function mp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Fh(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || mp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Qs(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Bc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Qs(n, r, l), n = n.sibling; n !== null; ) Qs(n, r, l), n = n.sibling;
  }
  function Uo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Uo(n, r, l), n = n.sibling; n !== null; ) Uo(n, r, l), n = n.sibling;
  }
  var mn = null, nr = !1;
  function zr(n, r, l) {
    for (l = l.child; l !== null; ) Ao(n, r, l), l = l.sibling;
  }
  function Ao(n, r, l) {
    if (Xr && typeof Xr.onCommitFiberUnmount == "function") try {
      Xr.onCommitFiberUnmount(Rl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        sr || Lo(l, r);
      case 6:
        var o = mn, c = nr;
        mn = null, zr(n, r, l), mn = o, nr = c, mn !== null && (nr ? (n = mn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : mn.removeChild(l.stateNode));
        break;
      case 18:
        mn !== null && (nr ? (n = mn, l = l.stateNode, n.nodeType === 8 ? Nl(n.parentNode, l) : n.nodeType === 1 && Nl(n, l), kl(n)) : Nl(mn, l.stateNode));
        break;
      case 4:
        o = mn, c = nr, mn = l.stateNode.containerInfo, nr = !0, zr(n, r, l), mn = o, nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, y = d.destroy;
            d = d.tag, y !== void 0 && (d & 2 || d & 4) && hp(l, r, y), c = c.next;
          } while (c !== o);
        }
        zr(n, r, l);
        break;
      case 1:
        if (!sr && (Lo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (T) {
          kn(l, r, T);
        }
        zr(n, r, l);
        break;
      case 21:
        zr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (sr = (o = sr) || l.memoizedState !== null, zr(n, r, l), sr = o) : zr(n, r, l);
        break;
      default:
        zr(n, r, l);
    }
  }
  function zo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Tf()), r.forEach(function(o) {
        var c = cg.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function rr(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, y = r, T = y;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 5:
              mn = T.stateNode, nr = !1;
              break e;
            case 3:
              mn = T.stateNode.containerInfo, nr = !0;
              break e;
            case 4:
              mn = T.stateNode.containerInfo, nr = !0;
              break e;
          }
          T = T.return;
        }
        if (mn === null) throw Error(S(160));
        Ao(d, y, c), mn = null, nr = !1;
        var x = c.alternate;
        x !== null && (x.return = null), c.return = null;
      } catch (j) {
        kn(c, r, j);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) jh(r, n), r = r.sibling;
  }
  function jh(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (rr(r, n), ki(n), o & 4) {
          try {
            No(3, n, n.return), bf(3, n);
          } catch (ke) {
            kn(n, n.return, ke);
          }
          try {
            No(5, n, n.return);
          } catch (ke) {
            kn(n, n.return, ke);
          }
        }
        break;
      case 1:
        rr(r, n), ki(n), o & 512 && l !== null && Lo(l, l.return);
        break;
      case 5:
        if (rr(r, n), ki(n), o & 512 && l !== null && Lo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ga(c, "");
          } catch (ke) {
            kn(n, n.return, ke);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, y = l !== null ? l.memoizedProps : d, T = n.type, x = n.updateQueue;
          if (n.updateQueue = null, x !== null) try {
            T === "input" && d.type === "radio" && d.name != null && zn(c, d), Sn(T, y);
            var j = Sn(T, d);
            for (y = 0; y < x.length; y += 2) {
              var K = x[y], X = x[y + 1];
              K === "style" ? Pt(c, X) : K === "dangerouslySetInnerHTML" ? gi(c, X) : K === "children" ? ga(c, X) : Re(c, K, X, j);
            }
            switch (T) {
              case "input":
                On(c, d);
                break;
              case "textarea":
                ya(c, d);
                break;
              case "select":
                var q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Se = d.value;
                Se != null ? Sr(c, !!d.multiple, Se, !1) : q !== !!d.multiple && (d.defaultValue != null ? Sr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Sr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[yu] = d;
          } catch (ke) {
            kn(n, n.return, ke);
          }
        }
        break;
      case 6:
        if (rr(r, n), ki(n), o & 4) {
          if (n.stateNode === null) throw Error(S(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ke) {
            kn(n, n.return, ke);
          }
        }
        break;
      case 3:
        if (rr(r, n), ki(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          kl(r.containerInfo);
        } catch (ke) {
          kn(n, n.return, ke);
        }
        break;
      case 4:
        rr(r, n), ki(n);
        break;
      case 13:
        rr(r, n), ki(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Df = At())), o & 4 && zo(n);
        break;
      case 22:
        if (K = l !== null && l.memoizedState !== null, n.mode & 1 ? (sr = (j = sr) || K, rr(r, n), sr = j) : rr(r, n), ki(n), o & 8192) {
          if (j = n.memoizedState !== null, (n.stateNode.isHidden = j) && !K && n.mode & 1) for (Te = n, K = n.child; K !== null; ) {
            for (X = Te = K; Te !== null; ) {
              switch (q = Te, Se = q.child, q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  No(4, q, q.return);
                  break;
                case 1:
                  Lo(q, q.return);
                  var be = q.stateNode;
                  if (typeof be.componentWillUnmount == "function") {
                    o = q, l = q.return;
                    try {
                      r = o, be.props = r.memoizedProps, be.state = r.memoizedState, be.componentWillUnmount();
                    } catch (ke) {
                      kn(o, l, ke);
                    }
                  }
                  break;
                case 5:
                  Lo(q, q.return);
                  break;
                case 22:
                  if (q.memoizedState !== null) {
                    Hh(X);
                    continue;
                  }
              }
              Se !== null ? (Se.return = q, Te = Se) : Hh(X);
            }
            K = K.sibling;
          }
          e: for (K = null, X = n; ; ) {
            if (X.tag === 5) {
              if (K === null) {
                K = X;
                try {
                  c = X.stateNode, j ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (T = X.stateNode, x = X.memoizedProps.style, y = x != null && x.hasOwnProperty("display") ? x.display : null, T.style.display = vt("display", y));
                } catch (ke) {
                  kn(n, n.return, ke);
                }
              }
            } else if (X.tag === 6) {
              if (K === null) try {
                X.stateNode.nodeValue = j ? "" : X.memoizedProps;
              } catch (ke) {
                kn(n, n.return, ke);
              }
            } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === n) && X.child !== null) {
              X.child.return = X, X = X.child;
              continue;
            }
            if (X === n) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === n) break e;
              K === X && (K = null), X = X.return;
            }
            K === X && (K = null), X.sibling.return = X.return, X = X.sibling;
          }
        }
        break;
      case 19:
        rr(r, n), ki(n), o & 4 && zo(n);
        break;
      case 21:
        break;
      default:
        rr(
          r,
          n
        ), ki(n);
    }
  }
  function ki(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (mp(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(S(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ga(c, ""), o.flags &= -33);
            var d = Fh(n);
            Uo(n, d, c);
            break;
          case 3:
          case 4:
            var y = o.stateNode.containerInfo, T = Fh(n);
            Qs(n, T, y);
            break;
          default:
            throw Error(S(161));
        }
      } catch (x) {
        kn(n, n.return, x);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ag(n, r, l) {
    Te = n, yp(n);
  }
  function yp(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Te !== null; ) {
      var c = Te, d = c.child;
      if (c.tag === 22 && o) {
        var y = c.memoizedState !== null || Mo;
        if (!y) {
          var T = c.alternate, x = T !== null && T.memoizedState !== null || sr;
          T = Mo;
          var j = sr;
          if (Mo = y, (sr = x) && !j) for (Te = c; Te !== null; ) y = Te, x = y.child, y.tag === 22 && y.memoizedState !== null ? gp(c) : x !== null ? (x.return = y, Te = x) : gp(c);
          for (; d !== null; ) Te = d, yp(d), d = d.sibling;
          Te = c, Mo = T, sr = j;
        }
        Fo(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Te = d) : Fo(n);
    }
  }
  function Fo(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              sr || bf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !sr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ua(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Rh(r, d, o);
              break;
            case 3:
              var y = r.updateQueue;
              if (y !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Rh(r, y, l);
              }
              break;
            case 5:
              var T = r.stateNode;
              if (l === null && r.flags & 4) {
                l = T;
                var x = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    x.autoFocus && l.focus();
                    break;
                  case "img":
                    x.src && (l.src = x.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var j = r.alternate;
                if (j !== null) {
                  var K = j.memoizedState;
                  if (K !== null) {
                    var X = K.dehydrated;
                    X !== null && kl(X);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
          sr || r.flags & 512 && xf(r);
        } catch (q) {
          kn(r, r.return, q);
        }
      }
      if (r === n) {
        Te = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Te = l;
        break;
      }
      Te = r.return;
    }
  }
  function Hh(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r === n) {
        Te = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Te = l;
        break;
      }
      Te = r.return;
    }
  }
  function gp(n) {
    for (; Te !== null; ) {
      var r = Te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              bf(4, r);
            } catch (x) {
              kn(r, l, x);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (x) {
                kn(r, c, x);
              }
            }
            var d = r.return;
            try {
              xf(r);
            } catch (x) {
              kn(r, d, x);
            }
            break;
          case 5:
            var y = r.return;
            try {
              xf(r);
            } catch (x) {
              kn(r, y, x);
            }
        }
      } catch (x) {
        kn(r, r.return, x);
      }
      if (r === n) {
        Te = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, Te = T;
        break;
      }
      Te = r.return;
    }
  }
  var ig = Math.ceil, ku = se.ReactCurrentDispatcher, _f = se.ReactCurrentOwner, Ga = se.ReactCurrentBatchConfig, Tt = 0, Dn = null, dn = null, Yn = 0, ca = 0, jo = ft(0), Qn = 0, Ws = null, Ou = 0, Ho = 0, Sp = 0, $l = null, _r = null, Df = 0, Po = 1 / 0, nl = null, kf = !1, Ep = null, Ka = null, Vo = !1, Xa = null, Of = 0, qs = 0, Mf = null, Gs = -1, Mu = 0;
  function ar() {
    return Tt & 6 ? At() : Gs !== -1 ? Gs : Gs = At();
  }
  function rl(n) {
    return n.mode & 1 ? Tt & 2 && Yn !== 0 ? Yn & -Yn : qc.transition !== null ? (Mu === 0 && (Mu = Ju()), Mu) : (n = zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ys(n.type)), n) : 1;
  }
  function Rn(n, r, l, o) {
    if (50 < qs) throw qs = 0, Mf = null, Error(S(185));
    Vi(n, l, o), (!(Tt & 2) || n !== Dn) && (n === Dn && (!(Tt & 2) && (Ho |= l), Qn === 4 && Oi(n, Yn)), Wn(n, o), l === 1 && Tt === 0 && !(r.mode & 1) && (Po = At() + 500, tr && na()));
  }
  function Wn(n, r) {
    var l = n.callbackNode;
    bl(n, r);
    var o = Ur(n, n === Dn ? Yn : 0);
    if (o === 0) l !== null && sn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && sn(l), r === 1) n.tag === 0 ? Jd(Bo.bind(null, n)) : Xd(Bo.bind(null, n)), qd(function() {
        !(Tt & 6) && na();
      }), l = null;
      else {
        switch (eo(o)) {
          case 1:
            l = Lr;
            break;
          case 4:
            l = mt;
            break;
          case 16:
            l = za;
            break;
          case 536870912:
            l = Ku;
            break;
          default:
            l = za;
        }
        l = Wh(l, Lf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Lf(n, r) {
    if (Gs = -1, Mu = 0, Tt & 6) throw Error(S(327));
    var l = n.callbackNode;
    if ($o() && n.callbackNode !== l) return null;
    var o = Ur(n, n === Dn ? Yn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Uf(n, o);
    else {
      r = o;
      var c = Tt;
      Tt |= 2;
      var d = Vh();
      (Dn !== n || Yn !== r) && (nl = null, Po = At() + 500, Nu(n, r));
      do
        try {
          ug();
          break;
        } catch (T) {
          Ph(n, T);
        }
      while (!0);
      ba(), ku.current = d, Tt = c, dn !== null ? r = 0 : (Dn = null, Yn = 0, r = Qn);
    }
    if (r !== 0) {
      if (r === 2 && (c = xl(n), c !== 0 && (o = c, r = Lu(n, c))), r === 1) throw l = Ws, Nu(n, 0), Oi(n, o), Wn(n, At()), l;
      if (r === 6) Oi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Rp(c) && (r = Uf(n, o), r === 2 && (d = xl(n), d !== 0 && (o = d, r = Lu(n, d))), r === 1)) throw l = Ws, Nu(n, 0), Oi(n, o), Wn(n, At()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            Il(n, _r, nl);
            break;
          case 3:
            if (Oi(n, o), (o & 130023424) === o && (r = Df + 500 - At(), 10 < r)) {
              if (Ur(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                ar(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = mu(Il.bind(null, n, _r, nl), r);
              break;
            }
            Il(n, _r, nl);
            break;
          case 4:
            if (Oi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var y = 31 - Nr(o);
              d = 1 << y, y = r[y], y > c && (c = y), o &= ~d;
            }
            if (o = c, o = At() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ig(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = mu(Il.bind(null, n, _r, nl), o);
              break;
            }
            Il(n, _r, nl);
            break;
          case 5:
            Il(n, _r, nl);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return Wn(n, At()), n.callbackNode === l ? Lf.bind(null, n) : null;
  }
  function Lu(n, r) {
    var l = $l;
    return n.current.memoizedState.isDehydrated && (Nu(n, r).flags |= 256), n = Uf(n, r), n !== 2 && (r = _r, _r = l, r !== null && Cp(r)), n;
  }
  function Cp(n) {
    _r === null ? _r = n : _r.push.apply(_r, n);
  }
  function Rp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ha(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Oi(n, r) {
    for (r &= ~Sp, r &= ~Ho, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Nr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bo(n) {
    if (Tt & 6) throw Error(S(327));
    $o();
    var r = Ur(n, 0);
    if (!(r & 1)) return Wn(n, At()), null;
    var l = Uf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = xl(n);
      o !== 0 && (r = o, l = Lu(n, o));
    }
    if (l === 1) throw l = Ws, Nu(n, 0), Oi(n, r), Wn(n, At()), l;
    if (l === 6) throw Error(S(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Il(n, _r, nl), Wn(n, At()), null;
  }
  function Tp(n, r) {
    var l = Tt;
    Tt |= 1;
    try {
      return n(r);
    } finally {
      Tt = l, Tt === 0 && (Po = At() + 500, tr && na());
    }
  }
  function Mi(n) {
    Xa !== null && Xa.tag === 0 && !(Tt & 6) && $o();
    var r = Tt;
    Tt |= 1;
    var l = Ga.transition, o = zt;
    try {
      if (Ga.transition = null, zt = 1, n) return n();
    } finally {
      zt = o, Ga.transition = l, Tt = r, !(Tt & 6) && na();
    }
  }
  function Nf() {
    ca = jo.current, Vt(jo);
  }
  function Nu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ph(l)), dn !== null) for (l = dn.return; l !== null; ) {
      var o = l;
      switch (ep(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Ba();
          break;
        case 3:
          Eo(), Vt(xn), Vt(tt), up();
          break;
        case 5:
          lp(o);
          break;
        case 4:
          Eo();
          break;
        case 13:
          Vt(hn);
          break;
        case 19:
          Vt(hn);
          break;
        case 10:
          rp(o.type._context);
          break;
        case 22:
        case 23:
          Nf();
      }
      l = l.return;
    }
    if (Dn = n, dn = n = Yl(n.current, null), Yn = ca = r, Qn = 0, Ws = null, Sp = Ho = Ou = 0, _r = $l = null, Eu !== null) {
      for (r = 0; r < Eu.length; r++) if (l = Eu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var y = d.next;
          d.next = c, o.next = y;
        }
        l.pending = o;
      }
      Eu = null;
    }
    return n;
  }
  function Ph(n, r) {
    do {
      var l = dn;
      try {
        if (ba(), tf.current = br, xa) {
          for (var o = Ue.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          xa = !1;
        }
        if (Me = 0, Ct = nt = Ue = null, Co = !1, Fs = 0, _f.current = null, l === null || l.return === null) {
          Qn = 1, Ws = r, dn = null;
          break;
        }
        e: {
          var d = n, y = l.return, T = l, x = r;
          if (r = Yn, T.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var j = x, K = T, X = K.tag;
            if (!(K.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var q = K.alternate;
              q ? (K.updateQueue = q.updateQueue, K.memoizedState = q.memoizedState, K.lanes = q.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var Se = Mh(y);
            if (Se !== null) {
              Se.flags &= -257, dp(Se, y, T, d, r), Se.mode & 1 && Bs(d, j, r), r = Se, x = j;
              var be = r.updateQueue;
              if (be === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(x), r.updateQueue = ke;
              } else be.add(x);
              break e;
            } else {
              if (!(r & 1)) {
                Bs(d, j, r), Ks();
                break e;
              }
              x = Error(S(426));
            }
          } else if (fn && T.mode & 1) {
            var Un = Mh(y);
            if (Un !== null) {
              !(Un.flags & 65536) && (Un.flags |= 256), dp(Un, y, T, d, r), np(Vl(x, T));
              break e;
            }
          }
          d = x = Vl(x, T), Qn !== 4 && (Qn = 2), $l === null ? $l = [d] : $l.push(d), d = y;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var L = kh(d, x, r);
                Ch(d, L);
                break e;
              case 1:
                T = x;
                var D = d.type, A = d.stateNode;
                if (!(d.flags & 128) && (typeof D.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && (Ka === null || !Ka.has(A)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var re = Oh(d, T, r);
                  Ch(d, re);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        $h(l);
      } catch (Le) {
        r = Le, dn === l && l !== null && (dn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Vh() {
    var n = ku.current;
    return ku.current = br, n === null ? br : n;
  }
  function Ks() {
    (Qn === 0 || Qn === 3 || Qn === 2) && (Qn = 4), Dn === null || !(Ou & 268435455) && !(Ho & 268435455) || Oi(Dn, Yn);
  }
  function Uf(n, r) {
    var l = Tt;
    Tt |= 2;
    var o = Vh();
    (Dn !== n || Yn !== r) && (nl = null, Nu(n, r));
    do
      try {
        lg();
        break;
      } catch (c) {
        Ph(n, c);
      }
    while (!0);
    if (ba(), Tt = l, ku.current = o, dn !== null) throw Error(S(261));
    return Dn = null, Yn = 0, Qn;
  }
  function lg() {
    for (; dn !== null; ) Bh(dn);
  }
  function ug() {
    for (; dn !== null && !Rr(); ) Bh(dn);
  }
  function Bh(n) {
    var r = Qh(n.alternate, n, ca);
    n.memoizedProps = n.pendingProps, r === null ? $h(n) : dn = r, _f.current = null;
  }
  function $h(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ng(l, r), l !== null) {
          l.flags &= 32767, dn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Qn = 6, dn = null;
          return;
        }
      } else if (l = tg(l, r, ca), l !== null) {
        dn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        dn = r;
        return;
      }
      dn = r = n;
    } while (r !== null);
    Qn === 0 && (Qn = 5);
  }
  function Il(n, r, l) {
    var o = zt, c = Ga.transition;
    try {
      Ga.transition = null, zt = 1, og(n, r, l, o);
    } finally {
      Ga.transition = c, zt = o;
    }
    return null;
  }
  function og(n, r, l, o) {
    do
      $o();
    while (Xa !== null);
    if (Tt & 6) throw Error(S(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(S(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (_d(n, d), n === Dn && (dn = Dn = null, Yn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Vo || (Vo = !0, Wh(za, function() {
      return $o(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ga.transition, Ga.transition = null;
      var y = zt;
      zt = 1;
      var T = Tt;
      Tt |= 4, _f.current = null, rg(n, l), jh(l, n), Fc(hu), ja = !!Qd, hu = Qd = null, n.current = l, ag(l), Ri(), Tt = T, zt = y, Ga.transition = d;
    } else n.current = l;
    if (Vo && (Vo = !1, Xa = n, Of = c), d = n.pendingLanes, d === 0 && (Ka = null), vs(l.stateNode), Wn(n, At()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (kf) throw kf = !1, n = Ep, Ep = null, n;
    return Of & 1 && n.tag !== 0 && $o(), d = n.pendingLanes, d & 1 ? n === Mf ? qs++ : (qs = 0, Mf = n) : qs = 0, na(), null;
  }
  function $o() {
    if (Xa !== null) {
      var n = eo(Of), r = Ga.transition, l = zt;
      try {
        if (Ga.transition = null, zt = 16 > n ? 16 : n, Xa === null) var o = !1;
        else {
          if (n = Xa, Xa = null, Of = 0, Tt & 6) throw Error(S(331));
          var c = Tt;
          for (Tt |= 4, Te = n.current; Te !== null; ) {
            var d = Te, y = d.child;
            if (Te.flags & 16) {
              var T = d.deletions;
              if (T !== null) {
                for (var x = 0; x < T.length; x++) {
                  var j = T[x];
                  for (Te = j; Te !== null; ) {
                    var K = Te;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        No(8, K, d);
                    }
                    var X = K.child;
                    if (X !== null) X.return = K, Te = X;
                    else for (; Te !== null; ) {
                      K = Te;
                      var q = K.sibling, Se = K.return;
                      if (zh(K), K === j) {
                        Te = null;
                        break;
                      }
                      if (q !== null) {
                        q.return = Se, Te = q;
                        break;
                      }
                      Te = Se;
                    }
                  }
                }
                var be = d.alternate;
                if (be !== null) {
                  var ke = be.child;
                  if (ke !== null) {
                    be.child = null;
                    do {
                      var Un = ke.sibling;
                      ke.sibling = null, ke = Un;
                    } while (ke !== null);
                  }
                }
                Te = d;
              }
            }
            if (d.subtreeFlags & 2064 && y !== null) y.return = d, Te = y;
            else e: for (; Te !== null; ) {
              if (d = Te, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  No(9, d, d.return);
              }
              var L = d.sibling;
              if (L !== null) {
                L.return = d.return, Te = L;
                break e;
              }
              Te = d.return;
            }
          }
          var D = n.current;
          for (Te = D; Te !== null; ) {
            y = Te;
            var A = y.child;
            if (y.subtreeFlags & 2064 && A !== null) A.return = y, Te = A;
            else e: for (y = D; Te !== null; ) {
              if (T = Te, T.flags & 2048) try {
                switch (T.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bf(9, T);
                }
              } catch (Le) {
                kn(T, T.return, Le);
              }
              if (T === y) {
                Te = null;
                break e;
              }
              var re = T.sibling;
              if (re !== null) {
                re.return = T.return, Te = re;
                break e;
              }
              Te = T.return;
            }
          }
          if (Tt = c, na(), Xr && typeof Xr.onPostCommitFiberRoot == "function") try {
            Xr.onPostCommitFiberRoot(Rl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        zt = l, Ga.transition = r;
      }
    }
    return !1;
  }
  function Ih(n, r, l) {
    r = Vl(l, r), r = kh(n, r, 1), n = Hl(n, r, 1), r = ar(), n !== null && (Vi(n, 1, r), Wn(n, r));
  }
  function kn(n, r, l) {
    if (n.tag === 3) Ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ka === null || !Ka.has(o))) {
          n = Vl(l, n), n = Oh(r, n, 1), r = Hl(r, n, 1), n = ar(), r !== null && (Vi(r, 1, n), Wn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function sg(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = ar(), n.pingedLanes |= n.suspendedLanes & l, Dn === n && (Yn & l) === l && (Qn === 4 || Qn === 3 && (Yn & 130023424) === Yn && 500 > At() - Df ? Nu(n, 0) : Sp |= l), Wn(n, r);
  }
  function Yh(n, r) {
    r === 0 && (n.mode & 1 ? (r = Tl, Tl <<= 1, !(Tl & 130023424) && (Tl = 4194304)) : r = 1);
    var l = ar();
    n = Zi(n, r), n !== null && (Vi(n, r, l), Wn(n, l));
  }
  function wp(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Yh(n, l);
  }
  function cg(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(S(314));
    }
    o !== null && o.delete(r), Yh(n, l);
  }
  var Qh;
  Qh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || xn.current) oa = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return oa = !1, tl(n, r, l);
      oa = !!(n.flags & 131072);
    }
    else oa = !1, fn && r.flags & 1048576 && Zd(r, ho, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ys(n, r), n = r.pendingProps;
        var c = Va(r, tt.current);
        yo(r, l), c = Q(null, r, o, n, c, l);
        var d = Pn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, vn(o) ? (d = !0, $c(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Kc(r), c.updater = xu, r.stateNode = c, c._reactInternals = r, cp(r, o, n, l), r = Sf(null, r, o, !0, d, l)) : (r.tag = 0, fn && d && Ic(r), Ln(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ys(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = fg(o), n = ua(o, n), c) {
            case 0:
              r = st(null, r, o, n, l);
              break e;
            case 1:
              r = $s(null, r, o, n, l);
              break e;
            case 11:
              r = Do(null, r, o, n, l);
              break e;
            case 14:
              r = Bl(null, r, o, ua(o.type, n), l);
              break e;
          }
          throw Error(S(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ua(o, c), st(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ua(o, c), $s(n, r, o, c, l);
      case 3:
        e: {
          if (eg(r), n === null) throw Error(S(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, go(n, r), Jc(r, o, null, l);
          var y = r.memoizedState;
          if (o = y.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: y.cache, pendingSuspenseBoundaries: y.pendingSuspenseBoundaries, transitions: y.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Vl(Error(S(423)), r), r = Nh(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Vl(Error(S(424)), r), r = Nh(n, r, o, l, c);
            break e;
          } else for (ia = pi(r.stateNode.containerInfo.firstChild), wa = r, fn = !0, Ia = null, l = Sh(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Cn(), o === c) {
              r = Nn(n, r, l);
              break e;
            }
            Ln(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Th(r), n === null && Qc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, y = c.children, ks(o, c) ? y = null : d !== null && ks(o, d) && (r.flags |= 32), _u(n, r), Ln(n, r, y, l), r.child;
      case 6:
        return n === null && Qc(r), null;
      case 13:
        return Uh(n, r, l);
      case 4:
        return ip(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = mo(r, null, o, l) : Ln(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ua(o, c), Do(n, r, o, c, l);
      case 7:
        return Ln(n, r, r.pendingProps, l), r.child;
      case 8:
        return Ln(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Ln(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, y = c.value, qt(Ji, o._currentValue), o._currentValue = y, d !== null) if (Ha(d.value, y)) {
            if (d.children === c.children && !xn.current) {
              r = Nn(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var T = d.dependencies;
            if (T !== null) {
              y = d.child;
              for (var x = T.firstContext; x !== null; ) {
                if (x.context === o) {
                  if (d.tag === 1) {
                    x = la(-1, l & -l), x.tag = 2;
                    var j = d.updateQueue;
                    if (j !== null) {
                      j = j.shared;
                      var K = j.pending;
                      K === null ? x.next = x : (x.next = K.next, K.next = x), j.pending = x;
                    }
                  }
                  d.lanes |= l, x = d.alternate, x !== null && (x.lanes |= l), ap(
                    d.return,
                    l,
                    r
                  ), T.lanes |= l;
                  break;
                }
                x = x.next;
              }
            } else if (d.tag === 10) y = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (y = d.return, y === null) throw Error(S(341));
              y.lanes |= l, T = y.alternate, T !== null && (T.lanes |= l), ap(y, l, r), y = d.sibling;
            } else y = d.child;
            if (y !== null) y.return = d;
            else for (y = d; y !== null; ) {
              if (y === r) {
                y = null;
                break;
              }
              if (d = y.sibling, d !== null) {
                d.return = y.return, y = d;
                break;
              }
              y = y.return;
            }
            d = y;
          }
          Ln(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, yo(r, l), c = Qa(c), o = o(c), r.flags |= 1, Ln(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ua(o, r.pendingProps), c = ua(o.type, c), Bl(n, r, o, c, l);
      case 15:
        return gf(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ua(o, c), Ys(n, r), r.tag = 1, vn(o) ? (n = !0, $c(r)) : n = !1, yo(r, l), xh(r, o, c), cp(r, o, c, l), Sf(null, r, o, !0, n, l);
      case 19:
        return vp(n, r, l);
      case 22:
        return sa(n, r, l);
    }
    throw Error(S(156, r.tag));
  };
  function Wh(n, r) {
    return tn(n, r);
  }
  function qh(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ja(n, r, l, o) {
    return new qh(n, r, l, o);
  }
  function bp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function fg(n) {
    if (typeof n == "function") return bp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === wn) return 11;
      if (n === $t) return 14;
    }
    return 2;
  }
  function Yl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Af(n, r, l, o, c, d) {
    var y = 2;
    if (o = n, typeof n == "function") bp(n) && (y = 1);
    else if (typeof n == "string") y = 5;
    else e: switch (n) {
      case je:
        return Uu(l.children, c, d, r);
      case Bt:
        y = 8, c |= 8;
        break;
      case en:
        return n = Ja(12, l, r, c | 2), n.elementType = en, n.lanes = d, n;
      case Qe:
        return n = Ja(13, l, r, c), n.elementType = Qe, n.lanes = d, n;
      case ct:
        return n = Ja(19, l, r, c), n.elementType = ct, n.lanes = d, n;
      case we:
        return zf(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case rt:
            y = 10;
            break e;
          case yt:
            y = 9;
            break e;
          case wn:
            y = 11;
            break e;
          case $t:
            y = 14;
            break e;
          case Lt:
            y = 16, o = null;
            break e;
        }
        throw Error(S(130, n == null ? n : typeof n, ""));
    }
    return r = Ja(y, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Uu(n, r, l, o) {
    return n = Ja(7, n, o, r), n.lanes = l, n;
  }
  function zf(n, r, l, o) {
    return n = Ja(22, n, o, r), n.elementType = we, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ff(n, r, l) {
    return n = Ja(6, n, null, r), n.lanes = l, n;
  }
  function Xs(n, r, l) {
    return r = Ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Js(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zu(0), this.expirationTimes = Zu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function xp(n, r, l, o, c, d, y, T, x) {
    return n = new Js(n, r, l, T, x), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Kc(d), n;
  }
  function Gh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Xe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function _p(n) {
    if (!n) return xi;
    n = n._reactInternals;
    e: {
      if (Ne(n) !== n || n.tag !== 1) throw Error(S(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (vn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(S(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (vn(l)) return Ls(n, l, r);
    }
    return r;
  }
  function Dp(n, r, l, o, c, d, y, T, x) {
    return n = xp(l, o, !0, n, c, d, y, T, x), n.context = _p(null), l = n.current, o = ar(), c = rl(l), d = la(o, c), d.callback = r ?? null, Hl(l, d, c), n.current.lanes = c, Vi(n, c, o), Wn(n, o), n;
  }
  function jf(n, r, l, o) {
    var c = r.current, d = ar(), y = rl(c);
    return l = _p(l), r.context === null ? r.context = l : r.pendingContext = l, r = la(d, y), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Hl(c, r, y), n !== null && (Rn(n, c, y, d), Xc(n, c, y)), y;
  }
  function Zs(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Kh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function kp(n, r) {
    Kh(n, r), (n = n.alternate) && Kh(n, r);
  }
  function dg() {
    return null;
  }
  var Op = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Hf(n) {
    this._internalRoot = n;
  }
  ec.prototype.render = Hf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(S(409));
    jf(n, r, null, null);
  }, ec.prototype.unmount = Hf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mi(function() {
        jf(null, n, null, null);
      }), r[Ki] = null;
    }
  };
  function ec(n) {
    this._internalRoot = n;
  }
  ec.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = no();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Wt.length && r !== 0 && r < Wt[l].priority; l++) ;
      Wt.splice(l, 0, n), l === 0 && Oc(n);
    }
  };
  function Ql(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Pf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Xh() {
  }
  function pg(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var j = Zs(y);
          d.call(j);
        };
      }
      var y = Dp(r, o, n, 0, null, !1, !1, "", Xh);
      return n._reactRootContainer = y, n[Ki] = y.current, po(n.nodeType === 8 ? n.parentNode : n), Mi(), y;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var T = o;
      o = function() {
        var j = Zs(x);
        T.call(j);
      };
    }
    var x = xp(n, 0, !1, null, null, !1, !1, "", Xh);
    return n._reactRootContainer = x, n[Ki] = x.current, po(n.nodeType === 8 ? n.parentNode : n), Mi(function() {
      jf(r, x, l, o);
    }), x;
  }
  function Vf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var y = d;
      if (typeof c == "function") {
        var T = c;
        c = function() {
          var x = Zs(y);
          T.call(x);
        };
      }
      jf(r, y, n, c);
    } else y = pg(l, r, n, c, o);
    return Zs(y);
  }
  ou = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = oi(r.pendingLanes);
          l !== 0 && (Ti(r, l | 1), Wn(r, At()), !(Tt & 6) && (Po = At() + 500, na()));
        }
        break;
      case 13:
        Mi(function() {
          var o = Zi(n, 1);
          if (o !== null) {
            var c = ar();
            Rn(o, n, 1, c);
          }
        }), kp(n, 1);
    }
  }, to = function(n) {
    if (n.tag === 13) {
      var r = Zi(n, 134217728);
      if (r !== null) {
        var l = ar();
        Rn(r, n, 134217728, l);
      }
      kp(n, 134217728);
    }
  }, _t = function(n) {
    if (n.tag === 13) {
      var r = rl(n), l = Zi(n, r);
      if (l !== null) {
        var o = ar();
        Rn(l, n, r, o);
      }
      kp(n, r);
    }
  }, no = function() {
    return zt;
  }, ro = function(n, r) {
    var l = zt;
    try {
      return zt = n, r();
    } finally {
      zt = l;
    }
  }, Or = function(n, r, l) {
    switch (r) {
      case "input":
        if (On(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = $e(o);
              if (!c) throw Error(S(90));
              Qr(o), On(o, c);
            }
          }
        }
        break;
      case "textarea":
        ya(n, l);
        break;
      case "select":
        r = l.value, r != null && Sr(n, !!l.multiple, r, !1);
    }
  }, uu = Tp, Gu = Mi;
  var vg = { usingClientEntryPoint: !1, Events: [Ms, vo, $e, Aa, Sl, Tp] }, tc = { findFiberByHostInstance: Pa, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Jh = { bundleType: tc.bundleType, version: tc.version, rendererPackageName: tc.rendererPackageName, rendererConfig: tc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: se.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ht(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: tc.findFiberByHostInstance || dg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bf.isDisabled && Bf.supportsFiber) try {
      Rl = Bf.inject(Jh), Xr = Bf;
    } catch {
    }
  }
  return ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vg, ai.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ql(r)) throw Error(S(200));
    return Gh(n, r, null, l);
  }, ai.createRoot = function(n, r) {
    if (!Ql(n)) throw Error(S(299));
    var l = !1, o = "", c = Op;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = xp(n, 1, !1, null, null, l, !1, o, c), n[Ki] = r.current, po(n.nodeType === 8 ? n.parentNode : n), new Hf(r);
  }, ai.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(S(188)) : (n = Object.keys(n).join(","), Error(S(268, n)));
    return n = ht(r), n = n === null ? null : n.stateNode, n;
  }, ai.flushSync = function(n) {
    return Mi(n);
  }, ai.hydrate = function(n, r, l) {
    if (!Pf(r)) throw Error(S(200));
    return Vf(null, n, r, !0, l);
  }, ai.hydrateRoot = function(n, r, l) {
    if (!Ql(n)) throw Error(S(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", y = Op;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (y = l.onRecoverableError)), r = Dp(r, null, n, 1, l ?? null, c, !1, d, y), n[Ki] = r.current, po(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new ec(r);
  }, ai.render = function(n, r, l) {
    if (!Pf(r)) throw Error(S(200));
    return Vf(null, n, r, !1, l);
  }, ai.unmountComponentAtNode = function(n) {
    if (!Pf(n)) throw Error(S(40));
    return n._reactRootContainer ? (Mi(function() {
      Vf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ki] = null;
      });
    }), !0) : !1;
  }, ai.unstable_batchedUpdates = Tp, ai.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Pf(l)) throw Error(S(200));
    if (n == null || n._reactInternals === void 0) throw Error(S(38));
    return Vf(n, r, l, !1, o);
  }, ai.version = "18.3.1-next-f1338f8080-20240426", ai;
}
var ii = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fT;
function Uk() {
  return fT || (fT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var g = _c, v = kT(), S = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, O = !1;
    function W(e) {
      O = e;
    }
    function ae(e) {
      if (!O) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        he("warn", e, a);
      }
    }
    function R(e) {
      if (!O) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        he("error", e, a);
      }
    }
    function he(e, t, a) {
      {
        var i = S.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var te = 0, ue = 1, ze = 2, Z = 3, oe = 4, le = 5, Oe = 6, De = 7, Ve = 8, ot = 9, Be = 10, Re = 11, se = 12, ye = 13, Xe = 14, je = 15, Bt = 16, en = 17, rt = 18, yt = 19, wn = 21, Qe = 22, ct = 23, $t = 24, Lt = 25, we = !0, ie = !1, Fe = !1, pe = !1, M = !1, I = !0, We = !1, Ze = !0, pt = !0, dt = !0, bt = !0, gt = /* @__PURE__ */ new Set(), St = {}, ln = {};
    function gr(e, t) {
      Qr(e, t), Qr(e + "Capture", t);
    }
    function Qr(e, t) {
      St[e] && R("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), St[e] = t;
      {
        var a = e.toLowerCase();
        ln[a] = e, e === "onDoubleClick" && (ln.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        gt.add(t[i]);
    }
    var yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Kn = Object.prototype.hasOwnProperty;
    function $n(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function zn(e) {
      try {
        return On(e), !1;
      } catch {
        return !0;
      }
    }
    function On(e) {
      return "" + e;
    }
    function Wr(e, t) {
      if (zn(e))
        return R("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, $n(e)), On(e);
    }
    function qr(e) {
      if (zn(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $n(e)), On(e);
    }
    function Xn(e, t) {
      if (zn(e))
        return R("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, $n(e)), On(e);
    }
    function Sr(e, t) {
      if (zn(e))
        return R("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, $n(e)), On(e);
    }
    function Gr(e) {
      if (zn(e))
        return R("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", $n(e)), On(e);
    }
    function Er(e) {
      if (zn(e))
        return R("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", $n(e)), On(e);
    }
    var ya = 0, lr = 1, Kr = 2, gn = 3, kr = 4, gi = 5, ga = 6, ce = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", He = ce + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", vt = new RegExp("^[" + ce + "][" + He + "]*$"), Pt = {}, It = {};
    function Mn(e) {
      return Kn.call(It, e) ? !0 : Kn.call(Pt, e) ? !1 : vt.test(e) ? (It[e] = !0, !0) : (Pt[e] = !0, R("Invalid attribute name: `%s`", e), !1);
    }
    function Sn(e, t, a) {
      return t !== null ? t.type === ya : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Cr(e, t, a, i) {
      if (a !== null && a.type === ya)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Kt(e, t, a, i) {
      if (t === null || typeof t > "u" || Cr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case gn:
            return !t;
          case kr:
            return t === !1;
          case gi:
            return isNaN(t);
          case ga:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Or(e) {
      return Qt.hasOwnProperty(e) ? Qt[e] : null;
    }
    function Yt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Kr || t === gn || t === kr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Qt = {}, li = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    li.forEach(function(e) {
      Qt[e] = new Yt(
        e,
        ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Qt[t] = new Yt(
        t,
        lr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Qt[e] = new Yt(
        e,
        Kr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Qt[e] = new Yt(
        e,
        Kr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Qt[e] = new Yt(
        e,
        gn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Qt[e] = new Yt(
        e,
        gn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Qt[e] = new Yt(
        e,
        kr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Qt[e] = new Yt(
        e,
        ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Qt[e] = new Yt(
        e,
        gi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Aa = /[\-\:]([a-z])/g, Sl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Aa, Sl);
      Qt[t] = new Yt(
        t,
        lr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Aa, Sl);
      Qt[t] = new Yt(
        t,
        lr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Aa, Sl);
      Qt[t] = new Yt(
        t,
        lr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Qt[e] = new Yt(
        e,
        lr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var uu = "xlinkHref";
    Qt[uu] = new Yt(
      "xlinkHref",
      lr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Qt[e] = new Yt(
        e,
        lr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Gu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Pi = !1;
    function El(e) {
      !Pi && Gu.test(e) && (Pi = !0, R("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Sa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Wr(a, t), i.sanitizeURL && El("" + a);
        var s = i.attributeName, f = null;
        if (i.type === kr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Kt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Kt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === gn)
            return a;
          f = e.getAttribute(s);
        }
        return Kt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Si(e, t, a, i) {
      {
        if (!Mn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Wr(a, t), u === "" + a ? a : u;
      }
    }
    function Ea(e, t, a, i) {
      var u = Or(t);
      if (!Sn(t, u, i)) {
        if (Kt(t, a, u, i) && (a = null), i || u === null) {
          if (Mn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Wr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var h = u.type;
            e[p] = h === gn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var E = u.attributeName, C = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(E);
        else {
          var k = u.type, _;
          k === gn || k === kr && a === !0 ? _ = "" : (Wr(a, E), _ = "" + a, u.sanitizeURL && El(_.toString())), C ? e.setAttributeNS(C, E, _) : e.setAttribute(E, _);
        }
      }
    }
    var ui = Symbol.for("react.element"), Mr = Symbol.for("react.portal"), Ca = Symbol.for("react.fragment"), Ei = Symbol.for("react.strict_mode"), Ci = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), G = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Rt = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), ht = Symbol.for("react.scope"), Fn = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), sn = Symbol.for("react.legacy_hidden"), Rr = Symbol.for("react.cache"), Ri = Symbol.for("react.tracing_marker"), At = Symbol.iterator, Jn = "@@iterator";
    function Lr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = At && e[At] || e[Jn];
      return typeof t == "function" ? t : null;
    }
    var mt = Object.assign, za = 0, Cl, Ku, Rl, Xr, vs, Nr, hs;
    function ms() {
    }
    ms.__reactDisabledLog = !0;
    function Dc() {
      {
        if (za === 0) {
          Cl = console.log, Ku = console.info, Rl = console.warn, Xr = console.error, vs = console.group, Nr = console.groupCollapsed, hs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ms,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        za++;
      }
    }
    function Xu() {
      {
        if (za--, za === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: mt({}, e, {
              value: Cl
            }),
            info: mt({}, e, {
              value: Ku
            }),
            warn: mt({}, e, {
              value: Rl
            }),
            error: mt({}, e, {
              value: Xr
            }),
            group: mt({}, e, {
              value: vs
            }),
            groupCollapsed: mt({}, e, {
              value: Nr
            }),
            groupEnd: mt({}, e, {
              value: hs
            })
          });
        }
        za < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Tl = S.ReactCurrentDispatcher, oi;
    function Ur(e, t, a) {
      {
        if (oi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            oi = i && i[1] || "";
          }
        return `
` + oi + e;
      }
    }
    var wl = !1, bl;
    {
      var xl = typeof WeakMap == "function" ? WeakMap : Map;
      bl = new xl();
    }
    function Ju(e, t) {
      if (!e || wl)
        return "";
      {
        var a = bl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      wl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Tl.current, Tl.current = null, Dc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (H) {
              i = H;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (H) {
              i = H;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            i = H;
          }
          e();
        }
      } catch (H) {
        if (H && i && typeof H.stack == "string") {
          for (var p = H.stack.split(`
`), h = i.stack.split(`
`), E = p.length - 1, C = h.length - 1; E >= 1 && C >= 0 && p[E] !== h[C]; )
            C--;
          for (; E >= 1 && C >= 0; E--, C--)
            if (p[E] !== h[C]) {
              if (E !== 1 || C !== 1)
                do
                  if (E--, C--, C < 0 || p[E] !== h[C]) {
                    var k = `
` + p[E].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && bl.set(e, k), k;
                  }
                while (E >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        wl = !1, Tl.current = s, Xu(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", z = _ ? Ur(_) : "";
      return typeof e == "function" && bl.set(e, z), z;
    }
    function Zu(e, t, a) {
      return Ju(e, !0);
    }
    function Vi(e, t, a) {
      return Ju(e, !1);
    }
    function _d(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ti(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ju(e, _d(e));
      if (typeof e == "string")
        return Ur(e);
      switch (e) {
        case Ne:
          return Ur("Suspense");
        case Rt:
          return Ur("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ee:
            return Vi(e.render);
          case xt:
            return Ti(e.type, t, a);
          case qe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Ti(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function zt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return Ur(e.type);
        case Bt:
          return Ur("Lazy");
        case ye:
          return Ur("Suspense");
        case yt:
          return Ur("SuspenseList");
        case te:
        case ze:
        case je:
          return Vi(e.type);
        case Re:
          return Vi(e.type.render);
        case ue:
          return Zu(e.type);
        default:
          return "";
      }
    }
    function eo(e) {
      try {
        var t = "", a = e;
        do
          t += zt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ou(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function to(e) {
      return e.displayName || "Context";
    }
    function _t(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ca:
          return "Fragment";
        case Mr:
          return "Portal";
        case Ci:
          return "Profiler";
        case Ei:
          return "StrictMode";
        case Ne:
          return "Suspense";
        case Rt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            var t = e;
            return to(t) + ".Consumer";
          case b:
            var a = e;
            return to(a._context) + ".Provider";
          case ee:
            return ou(e, e.render, "ForwardRef");
          case xt:
            var i = e.displayName || null;
            return i !== null ? i : _t(e.type) || "Memo";
          case qe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return _t(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function no(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ro(e) {
      return e.displayName || "Context";
    }
    function it(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case $t:
          return "Cache";
        case ot:
          var i = a;
          return ro(i) + ".Consumer";
        case Be:
          var u = a;
          return ro(u._context) + ".Provider";
        case rt:
          return "DehydratedFragment";
        case Re:
          return no(a, a.render, "ForwardRef");
        case De:
          return "Fragment";
        case le:
          return a;
        case oe:
          return "Portal";
        case Z:
          return "Root";
        case Oe:
          return "Text";
        case Bt:
          return _t(a);
        case Ve:
          return a === Ei ? "StrictMode" : "Mode";
        case Qe:
          return "Offscreen";
        case se:
          return "Profiler";
        case wn:
          return "Scope";
        case ye:
          return "Suspense";
        case yt:
          return "SuspenseList";
        case Lt:
          return "TracingMarker";
        case ue:
        case te:
        case en:
        case ze:
        case Xe:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var su = S.ReactDebugCurrentFrame, En = null, Jr = !1;
    function Ar() {
      {
        if (En === null)
          return null;
        var e = En._debugOwner;
        if (e !== null && typeof e < "u")
          return it(e);
      }
      return null;
    }
    function _l() {
      return En === null ? "" : eo(En);
    }
    function bn() {
      su.getCurrentStack = null, En = null, Jr = !1;
    }
    function Wt(e) {
      su.getCurrentStack = e === null ? null : _l, En = e, Jr = !1;
    }
    function kc() {
      return En;
    }
    function Zr(e) {
      Jr = e;
    }
    function Zn(e) {
      return "" + e;
    }
    function wi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Er(e), e;
        default:
          return "";
      }
    }
    var Oc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Bi(e, t) {
      Oc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || R("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || R("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Dl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Mc(e) {
      return e._valueTracker;
    }
    function Fa(e) {
      e._valueTracker = null;
    }
    function kl(e) {
      var t = "";
      return e && (Dl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function $i(e) {
      var t = Dl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Er(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Er(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Er(p), i = "" + p;
          },
          stopTracking: function() {
            Fa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ja(e) {
      Mc(e) || (e._valueTracker = $i(e));
    }
    function ao(e) {
      if (!e)
        return !1;
      var t = Mc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = kl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ol(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ml = !1, cu = !1, io = !1, ys = !1;
    function si(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function m(e, t) {
      var a = e, i = t.checked, u = mt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function w(e, t) {
      Bi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !cu && (R("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), cu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ml && (R("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component", t.type), Ml = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wi(t.value != null ? t.value : i),
        controlled: si(t)
      };
    }
    function F(e, t) {
      var a = e, i = t.checked;
      i != null && Ea(a, "checked", i, !1);
    }
    function P(e, t) {
      var a = e;
      {
        var i = si(t);
        !a._wrapperState.controlled && i && !ys && (R("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ys = !0), a._wrapperState.controlled && !i && !io && (R("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), io = !0);
      }
      F(e, t);
      var u = wi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Zn(u)) : a.value !== Zn(u) && (a.value = Zn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ye(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ye(a, t.type, wi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ne(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Zn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ge(e, t) {
      var a = e;
      P(a, t), ve(a, t);
    }
    function ve(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Wr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = hm(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ao(f), P(f, p);
          }
        }
      }
    }
    function Ye(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ol(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Zn(e._wrapperState.initialValue) : e.defaultValue !== Zn(a) && (e.defaultValue = Zn(a)));
    }
    var Et = !1, Nt = !1, nn = !1;
    function Xt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? g.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Nt || (Nt = !0, R("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (nn || (nn = !0, R("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Et && (R("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Et = !0);
    }
    function rn(e, t) {
      t.value != null && e.setAttribute("value", Zn(wi(t.value)));
    }
    var un = Array.isArray;
    function Dt(e) {
      return un(e);
    }
    var Ii;
    Ii = !1;
    function lo() {
      var e = Ar();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var gs = ["value", "defaultValue"];
    function Dd(e) {
      {
        Bi("select", e);
        for (var t = 0; t < gs.length; t++) {
          var a = gs[t];
          if (e[a] != null) {
            var i = Dt(e[a]);
            e.multiple && !i ? R("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, lo()) : !e.multiple && i && R("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, lo());
          }
        }
      }
    }
    function ci(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var h = 0; h < u.length; h++) {
          var E = f.hasOwnProperty("$" + u[h].value);
          u[h].selected !== E && (u[h].selected = E), E && i && (u[h].defaultSelected = !0);
        }
      } else {
        for (var C = Zn(wi(a)), k = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === C) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          k === null && !u[_].disabled && (k = u[_]);
        }
        k !== null && (k.selected = !0);
      }
    }
    function Ss(e, t) {
      return mt({}, t, {
        value: void 0
      });
    }
    function Es(e, t) {
      var a = e;
      Dd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ii && (R("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ii = !0);
    }
    function kd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ci(a, !!t.multiple, i, !1) : t.defaultValue != null && ci(a, !!t.multiple, t.defaultValue, !0);
    }
    function Fy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ci(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ci(a, !!t.multiple, t.defaultValue, !0) : ci(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function jy(e, t) {
      var a = e, i = t.value;
      i != null && ci(a, !!t.multiple, i, !1);
    }
    var Od = !1;
    function Md(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = mt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Zn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Pv(e, t) {
      var a = e;
      Bi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Od && (R("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ar() || "A component"), Od = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          R("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Dt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: wi(i)
      };
    }
    function Vv(e, t) {
      var a = e, i = wi(t.value), u = wi(t.defaultValue);
      if (i != null) {
        var s = Zn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Zn(u));
    }
    function Bv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ld(e, t) {
      Vv(e, t);
    }
    var Yi = "http://www.w3.org/1999/xhtml", Hy = "http://www.w3.org/1998/Math/MathML", Nd = "http://www.w3.org/2000/svg";
    function Lc(e) {
      switch (e) {
        case "svg":
          return Nd;
        case "math":
          return Hy;
        default:
          return Yi;
      }
    }
    function Ud(e, t) {
      return e == null || e === Yi ? Lc(t) : e === Nd && t === "foreignObject" ? Yi : e;
    }
    var Py = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Nc, $v = Py(function(e, t) {
      if (e.namespaceURI === Nd && !("innerHTML" in e)) {
        Nc = Nc || document.createElement("div"), Nc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Nc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ea = 1, Qi = 3, jn = 8, fi = 9, fu = 11, Uc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Qi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Iv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, uo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Yv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Qv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(uo).forEach(function(e) {
      Qv.forEach(function(t) {
        uo[Yv(t, e)] = uo[e];
      });
    });
    function Ac(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(uo.hasOwnProperty(e) && uo[e]) ? t + "px" : (Sr(t, e), ("" + t).trim());
    }
    var oo = /([A-Z])/g, Vy = /^ms-/;
    function By(e) {
      return e.replace(oo, "-$1").toLowerCase().replace(Vy, "-ms-");
    }
    var Wv = function() {
    };
    {
      var qv = /^(?:webkit|moz|o)[A-Z]/, Gv = /^-ms-/, Cs = /-(.)/g, so = /;\s*$/, co = {}, fo = {}, Kv = !1, Ad = !1, zd = function(e) {
        return e.replace(Cs, function(t, a) {
          return a.toUpperCase();
        });
      }, Fd = function(e) {
        co.hasOwnProperty(e) && co[e] || (co[e] = !0, R(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          zd(e.replace(Gv, "ms-"))
        ));
      }, Xv = function(e) {
        co.hasOwnProperty(e) && co[e] || (co[e] = !0, R("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Jv = function(e, t) {
        fo.hasOwnProperty(t) && fo[t] || (fo[t] = !0, R(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(so, "")));
      }, Zv = function(e, t) {
        Kv || (Kv = !0, R("`NaN` is an invalid value for the `%s` css style property.", e));
      }, $y = function(e, t) {
        Ad || (Ad = !0, R("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Wv = function(e, t) {
        e.indexOf("-") > -1 ? Fd(e) : qv.test(e) ? Xv(e) : so.test(t) && Jv(e, t), typeof t == "number" && (isNaN(t) ? Zv(e, t) : isFinite(t) || $y(e, t));
      };
    }
    var Iy = Wv;
    function Yy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : By(i)) + ":", t += Ac(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function eh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Iy(i, t[i]);
          var s = Ac(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Qy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ha(e) {
      var t = {};
      for (var a in e)
        for (var i = Iv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Rs(e, t) {
      {
        if (!t)
          return;
        var a = Ha(e), i = Ha(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var h = f + "," + p;
            if (u[h])
              continue;
            u[h] = !0, R("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Qy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var th = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, nh = mt({
      menuitem: !0
    }, th), rh = "__html";
    function zc(e, t) {
      if (t) {
        if (nh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(rh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && R("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Wi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Fc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, ah = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, di = {}, jd = new RegExp("^(aria)-[" + He + "]*$"), Ts = new RegExp("^(aria)[A-Z][" + He + "]*$");
    function Hd(e, t) {
      {
        if (Kn.call(di, t) && di[t])
          return !0;
        if (Ts.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = ah.hasOwnProperty(a) ? a : null;
          if (i == null)
            return R("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), di[t] = !0, !0;
          if (t !== i)
            return R("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), di[t] = !0, !0;
        }
        if (jd.test(t)) {
          var u = t.toLowerCase(), s = ah.hasOwnProperty(u) ? u : null;
          if (s == null)
            return di[t] = !0, !1;
          if (t !== s)
            return R("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), di[t] = !0, !0;
        }
      }
      return !0;
    }
    function ih(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Hd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? R("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && R("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function jc(e, t) {
      Wi(e, t) || ih(e, t);
    }
    var du = !1;
    function Pd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !du && (du = !0, e === "select" && t.multiple ? R("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : R("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Vd = function() {
    };
    {
      var er = {}, Bd = /^on./, lh = /^on[^A-Z]/, uh = new RegExp("^(aria)-[" + He + "]*$"), oh = new RegExp("^(aria)[A-Z][" + He + "]*$");
      Vd = function(e, t, a, i) {
        if (Kn.call(er, t) && er[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return R("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), er[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return R("Invalid event handler property `%s`. Did you mean `%s`?", t, p), er[t] = !0, !0;
          if (Bd.test(t))
            return R("Unknown event handler property `%s`. It will be ignored.", t), er[t] = !0, !0;
        } else if (Bd.test(t))
          return lh.test(t) && R("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), er[t] = !0, !0;
        if (uh.test(t) || oh.test(t))
          return !0;
        if (u === "innerhtml")
          return R("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), er[t] = !0, !0;
        if (u === "aria")
          return R("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), er[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return R("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), er[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return R("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), er[t] = !0, !0;
        var h = Or(t), E = h !== null && h.type === ya;
        if (Fc.hasOwnProperty(u)) {
          var C = Fc[u];
          if (C !== t)
            return R("Invalid DOM property `%s`. Did you mean `%s`?", t, C), er[t] = !0, !0;
        } else if (!E && t !== u)
          return R("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), er[t] = !0, !0;
        return typeof a == "boolean" && Cr(t, a, h, !1) ? (a ? R('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : R('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), er[t] = !0, !0) : E ? !0 : Cr(t, a, h, !1) ? (er[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === gn && (R("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), er[t] = !0), !0);
      };
    }
    var sh = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Vd(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? R("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && R("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function ch(e, t, a) {
      Wi(e, t) || sh(e, t, a);
    }
    var qi = 1, ws = 2, pu = 4, Wy = qi | ws | pu, bs = null;
    function xs(e) {
      bs !== null && R("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), bs = e;
    }
    function qy() {
      bs === null && R("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), bs = null;
    }
    function fh(e) {
      return e === bs;
    }
    function Hc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Qi ? t.parentNode : t;
    }
    var an = null, Ll = null, Gi = null;
    function po(e) {
      var t = Qo(e);
      if (t) {
        if (typeof an != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = hm(a);
          an(t.stateNode, t.type, i);
        }
      }
    }
    function dh(e) {
      an = e;
    }
    function Pc(e) {
      Ll ? Gi ? Gi.push(e) : Gi = [e] : Ll = e;
    }
    function _s() {
      return Ll !== null || Gi !== null;
    }
    function Ds() {
      if (Ll) {
        var e = Ll, t = Gi;
        if (Ll = null, Gi = null, po(e), t)
          for (var a = 0; a < t.length; a++)
            po(t[a]);
      }
    }
    var vu = function(e, t) {
      return e(t);
    }, $d = function() {
    }, Id = !1;
    function Gy() {
      var e = _s();
      e && ($d(), Ds());
    }
    function Yd(e, t, a) {
      if (Id)
        return e(t, a);
      Id = !0;
      try {
        return vu(e, t, a);
      } finally {
        Id = !1, Gy();
      }
    }
    function Vc(e, t, a) {
      vu = e, $d = a;
    }
    function Bc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Qd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Bc(t));
        default:
          return !1;
      }
    }
    function hu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = hm(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Qd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ks = !1;
    if (yn)
      try {
        var mu = {};
        Object.defineProperty(mu, "passive", {
          get: function() {
            ks = !0;
          }
        }), window.addEventListener("test", mu, mu), window.removeEventListener("test", mu, mu);
      } catch {
        ks = !1;
      }
    function ph(e, t, a, i, u, s, f, p, h) {
      var E = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, E);
      } catch (C) {
        this.onError(C);
      }
    }
    var Wd = ph;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var qd = document.createElement("react");
      Wd = function(t, a, i, u, s, f, p, h, E) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var C = document.createEvent("Event"), k = !1, _ = !0, z = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          qd.removeEventListener(B, Ie, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var me = Array.prototype.slice.call(arguments, 3);
        function Ie() {
          k = !0, V(), a.apply(i, me), _ = !1;
        }
        var Ae, Mt = !1, wt = !1;
        function N(U) {
          if (Ae = U.error, Mt = !0, Ae === null && U.colno === 0 && U.lineno === 0 && (wt = !0), U.defaultPrevented && Ae != null && typeof Ae == "object")
            try {
              Ae._suppressLogging = !0;
            } catch {
            }
        }
        var B = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", N), qd.addEventListener(B, Ie, !1), C.initEvent(B, !1, !1), qd.dispatchEvent(C), H && Object.defineProperty(window, "event", H), k && _ && (Mt ? wt && (Ae = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ae = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ae)), window.removeEventListener("error", N), !k)
          return V(), ph.apply(this, arguments);
      };
    }
    var Ky = Wd, Nl = !1, pi = null, Os = !1, Ul = null, bi = {
      onError: function(e) {
        Nl = !0, pi = e;
      }
    };
    function yu(e, t, a, i, u, s, f, p, h) {
      Nl = !1, pi = null, Ky.apply(bi, arguments);
    }
    function Ki(e, t, a, i, u, s, f, p, h) {
      if (yu.apply(this, arguments), Nl) {
        var E = Kd();
        Os || (Os = !0, Ul = E);
      }
    }
    function Gd() {
      if (Os) {
        var e = Ul;
        throw Os = !1, Ul = null, e;
      }
    }
    function Xy() {
      return Nl;
    }
    function Kd() {
      if (Nl) {
        var e = pi;
        return Nl = !1, pi = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pa(e) {
      return e._reactInternals;
    }
    function Ms(e) {
      return e._reactInternals !== void 0;
    }
    function vo(e, t) {
      e._reactInternals = t;
    }
    var $e = (
      /*                      */
      0
    ), Al = (
      /*                */
      1
    ), cn = (
      /*                    */
      2
    ), ft = (
      /*                       */
      4
    ), Vt = (
      /*                */
      16
    ), qt = (
      /*                 */
      32
    ), xi = (
      /*                     */
      64
    ), tt = (
      /*                   */
      128
    ), xn = (
      /*            */
      256
    ), ta = (
      /*                          */
      512
    ), Va = (
      /*                     */
      1024
    ), vn = (
      /*                      */
      2048
    ), Ba = (
      /*                    */
      4096
    ), zl = (
      /*                   */
      8192
    ), Ls = (
      /*             */
      16384
    ), $c = vn | ft | xi | ta | Va | Ls, vh = (
      /*               */
      32767
    ), Ra = (
      /*                   */
      32768
    ), tr = (
      /*                */
      65536
    ), Ns = (
      /* */
      131072
    ), Xd = (
      /*                       */
      1048576
    ), Jd = (
      /*                    */
      2097152
    ), na = (
      /*                 */
      4194304
    ), Fl = (
      /*                */
      8388608
    ), ra = (
      /*               */
      16777216
    ), gu = (
      /*              */
      33554432
    ), ho = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ft | Va | 0
    ), aa = cn | ft | Vt | qt | ta | Ba | zl, Tr = ft | xi | ta | zl, $a = vn | Vt, ur = na | Fl | Jd, Xi = S.ReactCurrentOwner;
    function Ta(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (cn | Ba)) !== $e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
    }
    function Zd(e) {
      if (e.tag === ye) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ic(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function ep(e) {
      return Ta(e) === e;
    }
    function wa(e) {
      {
        var t = Xi.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || R("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", it(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Pa(e);
      return u ? Ta(u) === u : !1;
    }
    function ia(e) {
      if (Ta(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function fn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ta(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var h = s.child; h; ) {
            if (h === i)
              return ia(s), e;
            if (h === u)
              return ia(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var E = !1, C = s.child; C; ) {
            if (C === i) {
              E = !0, i = s, u = f;
              break;
            }
            if (C === u) {
              E = !0, u = s, i = f;
              break;
            }
            C = C.sibling;
          }
          if (!E) {
            for (C = f.child; C; ) {
              if (C === i) {
                E = !0, i = f, u = s;
                break;
              }
              if (C === u) {
                E = !0, u = f, i = s;
                break;
              }
              C = C.sibling;
            }
            if (!E)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ia(e) {
      var t = fn(e);
      return t !== null ? tp(t) : null;
    }
    function tp(e) {
      if (e.tag === le || e.tag === Oe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = tp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function hh(e) {
      var t = fn(e);
      return t !== null ? Yc(t) : null;
    }
    function Yc(e) {
      if (e.tag === le || e.tag === Oe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== oe) {
          var a = Yc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Qc = v.unstable_scheduleCallback, mh = v.unstable_cancelCallback, Wc = v.unstable_shouldYield, yh = v.unstable_requestPaint, Cn = v.unstable_now, np = v.unstable_getCurrentPriorityLevel, qc = v.unstable_ImmediatePriority, Su = v.unstable_UserBlockingPriority, _i = v.unstable_NormalPriority, gh = v.unstable_LowPriority, Gc = v.unstable_IdlePriority, mo = v.unstable_yieldValue, Sh = v.unstable_setDisableYieldValue, Ji = null, In = null, fe = null, Ya = !1, ba = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function rp(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return R("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        pt && (e = mt({}, e, {
          getLaneLabelMap: Zi,
          injectProfilingHooks: Eh
        })), Ji = t.inject(e), In = t;
      } catch (a) {
        R("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ap(e, t) {
      if (In && typeof In.onScheduleFiberRoot == "function")
        try {
          In.onScheduleFiberRoot(Ji, e, t);
        } catch (a) {
          Ya || (Ya = !0, R("React instrumentation encountered an error: %s", a));
        }
    }
    function yo(e, t) {
      if (In && typeof In.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & tt) === tt;
          if (dt) {
            var i;
            switch (t) {
              case Nn:
                i = qc;
                break;
              case tl:
                i = Su;
                break;
              case Di:
                i = _i;
                break;
              case ko:
                i = Gc;
                break;
              default:
                i = _i;
                break;
            }
            In.onCommitFiberRoot(Ji, e, i, a);
          }
        } catch (u) {
          Ya || (Ya = !0, R("React instrumentation encountered an error: %s", u));
        }
    }
    function Qa(e) {
      if (In && typeof In.onPostCommitFiberRoot == "function")
        try {
          In.onPostCommitFiberRoot(Ji, e);
        } catch (t) {
          Ya || (Ya = !0, R("React instrumentation encountered an error: %s", t));
        }
    }
    function Eu(e) {
      if (In && typeof In.onCommitFiberUnmount == "function")
        try {
          In.onCommitFiberUnmount(Ji, e);
        } catch (t) {
          Ya || (Ya = !0, R("React instrumentation encountered an error: %s", t));
        }
    }
    function Hn(e) {
      if (typeof mo == "function" && (Sh(e), W(e)), In && typeof In.setStrictMode == "function")
        try {
          In.setStrictMode(Ji, e);
        } catch (t) {
          Ya || (Ya = !0, R("React instrumentation encountered an error: %s", t));
        }
    }
    function Eh(e) {
      fe = e;
    }
    function Zi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < js; a++) {
          var i = Zy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function jl(e) {
      fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(e);
    }
    function Kc() {
      fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
    }
    function go(e) {
      fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
    }
    function la() {
      fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
    }
    function Hl(e) {
      fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
    }
    function Xc() {
      fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
    }
    function Ch(e) {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Jc() {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
    }
    function Rh(e) {
      fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
    }
    function Us() {
      fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
    }
    function vi(e) {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
    }
    function So() {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
    }
    function As(e, t, a) {
      fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, a);
    }
    function Cu(e, t, a) {
      fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, a);
    }
    function ip(e) {
      fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
    }
    function Eo() {
      fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
    }
    function Th(e) {
      fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
    }
    function lp() {
      fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
    }
    function hn(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function Zc() {
      fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
    }
    function ef() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function up(e) {
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
    }
    function tf(e, t) {
      fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
    }
    function zs(e, t) {
      fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
    }
    var Me = (
      /*                         */
      0
    ), Ue = (
      /*                 */
      1
    ), nt = (
      /*                    */
      2
    ), Ct = (
      /*               */
      8
    ), xa = (
      /*              */
      16
    ), Co = Math.clz32 ? Math.clz32 : wr, Fs = Math.log, Jy = Math.LN2;
    function wr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Fs(t) / Jy | 0) | 0;
    }
    var js = 31, Q = (
      /*                        */
      0
    ), Pn = (
      /*                          */
      0
    ), Pe = (
      /*                        */
      1
    ), or = (
      /*    */
      2
    ), _a = (
      /*             */
      4
    ), el = (
      /*            */
      8
    ), Wa = (
      /*                     */
      16
    ), Ro = (
      /*                */
      32
    ), Ru = (
      /*                       */
      4194240
    ), To = (
      /*                        */
      64
    ), nf = (
      /*                        */
      128
    ), rf = (
      /*                        */
      256
    ), af = (
      /*                        */
      512
    ), lf = (
      /*                        */
      1024
    ), uf = (
      /*                        */
      2048
    ), Tu = (
      /*                        */
      4096
    ), of = (
      /*                        */
      8192
    ), wo = (
      /*                        */
      16384
    ), bo = (
      /*                       */
      32768
    ), sf = (
      /*                       */
      65536
    ), Hs = (
      /*                       */
      131072
    ), cf = (
      /*                       */
      262144
    ), ff = (
      /*                       */
      524288
    ), df = (
      /*                       */
      1048576
    ), pf = (
      /*                       */
      2097152
    ), xo = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), vf = (
      /*                             */
      8388608
    ), hf = (
      /*                             */
      16777216
    ), op = (
      /*                             */
      33554432
    ), mf = (
      /*                             */
      67108864
    ), wh = wu, Ps = (
      /*          */
      134217728
    ), sp = (
      /*                          */
      268435455
    ), _o = (
      /*               */
      268435456
    ), Pl = (
      /*                        */
      536870912
    ), br = (
      /*                   */
      1073741824
    );
    function Zy(e) {
      {
        if (e & Pe)
          return "Sync";
        if (e & or)
          return "InputContinuousHydration";
        if (e & _a)
          return "InputContinuous";
        if (e & el)
          return "DefaultHydration";
        if (e & Wa)
          return "Default";
        if (e & Ro)
          return "TransitionHydration";
        if (e & Ru)
          return "Transition";
        if (e & xo)
          return "Retry";
        if (e & Ps)
          return "SelectiveHydration";
        if (e & _o)
          return "IdleHydration";
        if (e & Pl)
          return "Idle";
        if (e & br)
          return "Offscreen";
      }
    }
    var on = -1, yf = To, ua = wu;
    function bu(e) {
      switch (Ln(e)) {
        case Pe:
          return Pe;
        case or:
          return or;
        case _a:
          return _a;
        case el:
          return el;
        case Wa:
          return Wa;
        case Ro:
          return Ro;
        case To:
        case nf:
        case rf:
        case af:
        case lf:
        case uf:
        case Tu:
        case of:
        case wo:
        case bo:
        case sf:
        case Hs:
        case cf:
        case ff:
        case df:
        case pf:
          return e & Ru;
        case wu:
        case vf:
        case hf:
        case op:
        case mf:
          return e & xo;
        case Ps:
          return Ps;
        case _o:
          return _o;
        case Pl:
          return Pl;
        case br:
          return br;
        default:
          return R("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function xu(e, t) {
      var a = e.pendingLanes;
      if (a === Q)
        return Q;
      var i = Q, u = e.suspendedLanes, s = e.pingedLanes, f = a & sp;
      if (f !== Q) {
        var p = f & ~u;
        if (p !== Q)
          i = bu(p);
        else {
          var h = f & s;
          h !== Q && (i = bu(h));
        }
      } else {
        var E = a & ~u;
        E !== Q ? i = bu(E) : s !== Q && (i = bu(s));
      }
      if (i === Q)
        return Q;
      if (t !== Q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Q) {
        var C = Ln(i), k = Ln(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= k || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === Wa && (k & Ru) !== Q
        )
          return t;
      }
      (i & _a) !== Q && (i |= a & Wa);
      var _ = e.entangledLanes;
      if (_ !== Q)
        for (var z = e.entanglements, H = i & _; H > 0; ) {
          var V = Bl(H), me = 1 << V;
          i |= z[V], H &= ~me;
        }
      return i;
    }
    function bh(e, t) {
      for (var a = e.eventTimes, i = on; t > 0; ) {
        var u = Bl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function xh(e, t) {
      switch (e) {
        case Pe:
        case or:
        case _a:
          return t + 250;
        case el:
        case Wa:
        case Ro:
        case To:
        case nf:
        case rf:
        case af:
        case lf:
        case uf:
        case Tu:
        case of:
        case wo:
        case bo:
        case sf:
        case Hs:
        case cf:
        case ff:
        case df:
        case pf:
          return t + 5e3;
        case wu:
        case vf:
        case hf:
        case op:
        case mf:
          return on;
        case Ps:
        case _o:
        case Pl:
        case br:
          return on;
        default:
          return R("Should have found matching lanes. This is a bug in React."), on;
      }
    }
    function _h(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Bl(f), h = 1 << p, E = s[p];
        E === on ? ((h & i) === Q || (h & u) !== Q) && (s[p] = xh(h, t)) : E <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function cp(e) {
      return bu(e.pendingLanes);
    }
    function Vl(e) {
      var t = e.pendingLanes & ~br;
      return t !== Q ? t : t & br ? br : Q;
    }
    function fp(e) {
      return (e & Pe) !== Q;
    }
    function Vs(e) {
      return (e & sp) !== Q;
    }
    function Dh(e) {
      return (e & xo) === e;
    }
    function kh(e) {
      var t = Pe | _a | Wa;
      return (e & t) === Q;
    }
    function Oh(e) {
      return (e & Ru) === e;
    }
    function Bs(e, t) {
      var a = or | _a | el | Wa;
      return (t & a) !== Q;
    }
    function Mh(e, t) {
      return (t & e.expiredLanes) !== Q;
    }
    function dp(e) {
      return (e & Ru) !== Q;
    }
    function Lh() {
      var e = yf;
      return yf <<= 1, (yf & Ru) === Q && (yf = To), e;
    }
    function oa() {
      var e = ua;
      return ua <<= 1, (ua & xo) === Q && (ua = wu), e;
    }
    function Ln(e) {
      return e & -e;
    }
    function Do(e) {
      return Ln(e);
    }
    function Bl(e) {
      return 31 - Co(e);
    }
    function gf(e) {
      return Bl(e);
    }
    function sa(e, t) {
      return (e & t) !== Q;
    }
    function _u(e, t) {
      return (e & t) === t;
    }
    function st(e, t) {
      return e | t;
    }
    function $s(e, t) {
      return e & ~t;
    }
    function Sf(e, t) {
      return e & t;
    }
    function eg(e) {
      return e;
    }
    function Nh(e, t) {
      return e !== Pn && e < t ? e : t;
    }
    function Is(e) {
      for (var t = [], a = 0; a < js; a++)
        t.push(e);
      return t;
    }
    function Du(e, t, a) {
      e.pendingLanes |= t, t !== Pl && (e.suspendedLanes = Q, e.pingedLanes = Q);
      var i = e.eventTimes, u = gf(t);
      i[u] = a;
    }
    function Uh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Bl(i), s = 1 << u;
        a[u] = on, i &= ~s;
      }
    }
    function Ef(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Cf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Bl(f), h = 1 << p;
        i[p] = Q, u[p] = on, s[p] = on, f &= ~h;
      }
    }
    function pp(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Bl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ah(e, t) {
      var a = Ln(t), i;
      switch (a) {
        case _a:
          i = or;
          break;
        case Wa:
          i = el;
          break;
        case To:
        case nf:
        case rf:
        case af:
        case lf:
        case uf:
        case Tu:
        case of:
        case wo:
        case bo:
        case sf:
        case Hs:
        case cf:
        case ff:
        case df:
        case pf:
        case wu:
        case vf:
        case hf:
        case op:
        case mf:
          i = Ro;
          break;
        case Pl:
          i = _o;
          break;
        default:
          i = Pn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Pn ? Pn : i;
    }
    function Rf(e, t, a) {
      if (ba)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = gf(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function vp(e, t) {
      if (ba)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = gf(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var h = p.alternate;
            (h === null || !i.has(h)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ys(e, t) {
      return null;
    }
    var Nn = Pe, tl = _a, Di = Wa, ko = Pl, Oo = Pn;
    function qa() {
      return Oo;
    }
    function _n(e) {
      Oo = e;
    }
    function xr(e, t) {
      var a = Oo;
      try {
        return Oo = e, t();
      } finally {
        Oo = a;
      }
    }
    function tg(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ng(e, t) {
      return e > t ? e : t;
    }
    function Mo(e, t) {
      return e !== 0 && e < t;
    }
    function sr(e) {
      var t = Ln(e);
      return Mo(Nn, t) ? Mo(tl, t) ? Vs(t) ? Di : ko : tl : Nn;
    }
    function Tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Te;
    function Lo(e) {
      Te = e;
    }
    function hp(e) {
      Te(e);
    }
    var wf;
    function rg(e) {
      wf = e;
    }
    var No;
    function bf(e) {
      No = e;
    }
    var xf;
    function zh(e) {
      xf = e;
    }
    var mp;
    function Fh(e) {
      mp = e;
    }
    var Qs = !1, Uo = [], mn = null, nr = null, zr = null, Ao = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new Map(), rr = [], jh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ki(e) {
      return jh.indexOf(e) > -1;
    }
    function ag(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function yp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          mn = null;
          break;
        case "dragenter":
        case "dragleave":
          nr = null;
          break;
        case "mouseover":
        case "mouseout":
          zr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ao.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          zo.delete(i);
          break;
        }
      }
    }
    function Fo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ag(t, a, i, u, s);
        if (t !== null) {
          var p = Qo(t);
          p !== null && wf(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return u !== null && h.indexOf(u) === -1 && h.push(u), e;
    }
    function Hh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return mn = Fo(mn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return nr = Fo(nr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return zr = Fo(zr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var h = u, E = h.pointerId;
          return Ao.set(E, Fo(Ao.get(E) || null, e, t, a, i, h)), !0;
        }
        case "gotpointercapture": {
          var C = u, k = C.pointerId;
          return zo.set(k, Fo(zo.get(k) || null, e, t, a, i, C)), !0;
        }
      }
      return !1;
    }
    function gp(e) {
      var t = ac(e.target);
      if (t !== null) {
        var a = Ta(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ye) {
            var u = Zd(a);
            if (u !== null) {
              e.blockedOn = u, mp(e.priority, function() {
                No(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (Tf(s)) {
              e.blockedOn = Ic(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ig(e) {
      for (var t = xf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < rr.length && Mo(t, rr[i].priority); i++)
        ;
      rr.splice(i, 0, a), i === 0 && gp(a);
    }
    function ku(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = _r(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          xs(s), u.target.dispatchEvent(s), qy();
        } else {
          var f = Qo(i);
          return f !== null && wf(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function _f(e, t, a) {
      ku(e) && a.delete(t);
    }
    function Ga() {
      Qs = !1, mn !== null && ku(mn) && (mn = null), nr !== null && ku(nr) && (nr = null), zr !== null && ku(zr) && (zr = null), Ao.forEach(_f), zo.forEach(_f);
    }
    function Tt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Qs || (Qs = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Ga)));
    }
    function Dn(e) {
      if (Uo.length > 0) {
        Tt(Uo[0], e);
        for (var t = 1; t < Uo.length; t++) {
          var a = Uo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      mn !== null && Tt(mn, e), nr !== null && Tt(nr, e), zr !== null && Tt(zr, e);
      var i = function(p) {
        return Tt(p, e);
      };
      Ao.forEach(i), zo.forEach(i);
      for (var u = 0; u < rr.length; u++) {
        var s = rr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; rr.length > 0; ) {
        var f = rr[0];
        if (f.blockedOn !== null)
          break;
        gp(f), f.blockedOn === null && rr.shift();
      }
    }
    var dn = S.ReactCurrentBatchConfig, Yn = !0;
    function ca(e) {
      Yn = !!e;
    }
    function jo() {
      return Yn;
    }
    function Qn(e, t, a) {
      var i = Df(t), u;
      switch (i) {
        case Nn:
          u = Ws;
          break;
        case tl:
          u = Ou;
          break;
        case Di:
        default:
          u = Ho;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Ws(e, t, a, i) {
      var u = qa(), s = dn.transition;
      dn.transition = null;
      try {
        _n(Nn), Ho(e, t, a, i);
      } finally {
        _n(u), dn.transition = s;
      }
    }
    function Ou(e, t, a, i) {
      var u = qa(), s = dn.transition;
      dn.transition = null;
      try {
        _n(tl), Ho(e, t, a, i);
      } finally {
        _n(u), dn.transition = s;
      }
    }
    function Ho(e, t, a, i) {
      Yn && Sp(e, t, a, i);
    }
    function Sp(e, t, a, i) {
      var u = _r(e, t, a, i);
      if (u === null) {
        Rg(e, t, i, $l, a), yp(e, i);
        return;
      }
      if (Hh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (yp(e, i), t & pu && ki(e)) {
        for (; u !== null; ) {
          var s = Qo(u);
          s !== null && hp(s);
          var f = _r(e, t, a, i);
          if (f === null && Rg(e, t, i, $l, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Rg(e, t, i, null, a);
    }
    var $l = null;
    function _r(e, t, a, i) {
      $l = null;
      var u = Hc(i), s = ac(u);
      if (s !== null) {
        var f = Ta(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ye) {
            var h = Zd(f);
            if (h !== null)
              return h;
            s = null;
          } else if (p === Z) {
            var E = f.stateNode;
            if (Tf(E))
              return Ic(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return $l = s, null;
    }
    function Df(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Nn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return tl;
        case "message": {
          var t = np();
          switch (t) {
            case qc:
              return Nn;
            case Su:
              return tl;
            case _i:
            case gh:
              return Di;
            case Gc:
              return ko;
            default:
              return Di;
          }
        }
        default:
          return Di;
      }
    }
    function Po(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function nl(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function kf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ep(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ka = null, Vo = null, Xa = null;
    function Of(e) {
      return Ka = e, Vo = Gs(), !0;
    }
    function qs() {
      Ka = null, Vo = null, Xa = null;
    }
    function Mf() {
      if (Xa)
        return Xa;
      var e, t = Vo, a = t.length, i, u = Gs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Xa = u.slice(e, p), Xa;
    }
    function Gs() {
      return "value" in Ka ? Ka.value : Ka.textContent;
    }
    function Mu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ar() {
      return !0;
    }
    function rl() {
      return !1;
    }
    function Rn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var h = e[p];
            h ? this[p] = h(s) : this[p] = s[p];
          }
        var E = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return E ? this.isDefaultPrevented = ar : this.isDefaultPrevented = rl, this.isPropagationStopped = rl, this;
      }
      return mt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ar);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ar);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: ar
      }), t;
    }
    var Wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Lf = Rn(Wn), Lu = mt({}, Wn, {
      view: 0,
      detail: 0
    }), Cp = Rn(Lu), Rp, Oi, Bo;
    function Tp(e) {
      e !== Bo && (Bo && e.type === "mousemove" ? (Rp = e.screenX - Bo.screenX, Oi = e.screenY - Bo.screenY) : (Rp = 0, Oi = 0), Bo = e);
    }
    var Mi = mt({}, Lu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: wp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Tp(e), Rp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Oi;
      }
    }), Nf = Rn(Mi), Nu = mt({}, Mi, {
      dataTransfer: 0
    }), Ph = Rn(Nu), Vh = mt({}, Lu, {
      relatedTarget: 0
    }), Ks = Rn(Vh), Uf = mt({}, Wn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), lg = Rn(Uf), ug = mt({}, Wn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Bh = Rn(ug), $h = mt({}, Wn, {
      data: 0
    }), Il = Rn($h), og = Il, $o = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Ih = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function kn(e) {
      if (e.key) {
        var t = $o[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Mu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ih[e.keyCode] || "Unidentified" : "";
    }
    var sg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Yh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = sg[e];
      return i ? !!a[i] : !1;
    }
    function wp(e) {
      return Yh;
    }
    var cg = mt({}, Lu, {
      key: kn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: wp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Mu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Mu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Qh = Rn(cg), Wh = mt({}, Mi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), qh = Rn(Wh), Ja = mt({}, Lu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wp
    }), bp = Rn(Ja), fg = mt({}, Wn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Yl = Rn(fg), Af = mt({}, Mi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Uu = Rn(Af), zf = [9, 13, 27, 32], Ff = 229, Xs = yn && "CompositionEvent" in window, Js = null;
    yn && "documentMode" in document && (Js = document.documentMode);
    var xp = yn && "TextEvent" in window && !Js, Gh = yn && (!Xs || Js && Js > 8 && Js <= 11), _p = 32, Dp = String.fromCharCode(_p);
    function jf() {
      gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), gr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), gr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), gr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Zs = !1;
    function Kh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function kp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function dg(e, t) {
      return e === "keydown" && t.keyCode === Ff;
    }
    function Op(e, t) {
      switch (e) {
        case "keyup":
          return zf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ff;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Hf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ec(e) {
      return e.locale === "ko";
    }
    var Ql = !1;
    function Pf(e, t, a, i, u) {
      var s, f;
      if (Xs ? s = kp(t) : Ql ? Op(t, i) && (s = "onCompositionEnd") : dg(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Gh && !ec(i) && (!Ql && s === "onCompositionStart" ? Ql = Of(u) : s === "onCompositionEnd" && Ql && (f = Mf()));
      var p = nm(a, s);
      if (p.length > 0) {
        var h = new Il(s, t, null, i, u);
        if (e.push({
          event: h,
          listeners: p
        }), f)
          h.data = f;
        else {
          var E = Hf(i);
          E !== null && (h.data = E);
        }
      }
    }
    function Xh(e, t) {
      switch (e) {
        case "compositionend":
          return Hf(t);
        case "keypress":
          var a = t.which;
          return a !== _p ? null : (Zs = !0, Dp);
        case "textInput":
          var i = t.data;
          return i === Dp && Zs ? null : i;
        default:
          return null;
      }
    }
    function pg(e, t) {
      if (Ql) {
        if (e === "compositionend" || !Xs && Op(e, t)) {
          var a = Mf();
          return qs(), Ql = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Kh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Gh && !ec(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Vf(e, t, a, i, u) {
      var s;
      if (xp ? s = Xh(t, i) : s = pg(t, i), !s)
        return null;
      var f = nm(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new og("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function vg(e, t, a, i, u, s, f) {
      Pf(e, t, a, i, u), Vf(e, t, a, i, u);
    }
    var tc = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Jh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!tc[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Bf(e) {
      if (!yn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      gr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Pc(i);
      var u = nm(t, "onChange");
      if (u.length > 0) {
        var s = new Lf("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, Hc(e)), Yd(y, t);
    }
    function y(e) {
      LE(e, 0);
    }
    function T(e) {
      var t = qf(e);
      if (ao(t))
        return e;
    }
    function x(e, t) {
      if (e === "change")
        return t;
    }
    var j = !1;
    yn && (j = Bf("input") && (!document.documentMode || document.documentMode > 9));
    function K(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", q);
    }
    function X() {
      l && (l.detachEvent("onpropertychange", q), l = null, o = null);
    }
    function q(e) {
      e.propertyName === "value" && T(o) && d(e);
    }
    function Se(e, t, a) {
      e === "focusin" ? (X(), K(t, a)) : e === "focusout" && X();
    }
    function be(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return T(o);
    }
    function ke(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Un(e, t) {
      if (e === "click")
        return T(t);
    }
    function L(e, t) {
      if (e === "input" || e === "change")
        return T(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ye(e, "number", e.value);
    }
    function A(e, t, a, i, u, s, f) {
      var p = a ? qf(a) : window, h, E;
      if (c(p) ? h = x : Jh(p) ? j ? h = L : (h = be, E = Se) : ke(p) && (h = Un), h) {
        var C = h(t, a);
        if (C) {
          r(e, C, i, u);
          return;
        }
      }
      E && E(t, p, a), t === "focusout" && D(p);
    }
    function re() {
      Qr("onMouseEnter", ["mouseout", "mouseover"]), Qr("onMouseLeave", ["mouseout", "mouseover"]), Qr("onPointerEnter", ["pointerout", "pointerover"]), Qr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Le(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (p && !fh(i)) {
        var E = i.relatedTarget || i.fromElement;
        if (E && (ac(E) || Ip(E)))
          return;
      }
      if (!(!h && !p)) {
        var C;
        if (u.window === u)
          C = u;
        else {
          var k = u.ownerDocument;
          k ? C = k.defaultView || k.parentWindow : C = window;
        }
        var _, z;
        if (h) {
          var H = i.relatedTarget || i.toElement;
          if (_ = a, z = H ? ac(H) : null, z !== null) {
            var V = Ta(z);
            (z !== V || z.tag !== le && z.tag !== Oe) && (z = null);
          }
        } else
          _ = null, z = a;
        if (_ !== z) {
          var me = Nf, Ie = "onMouseLeave", Ae = "onMouseEnter", Mt = "mouse";
          (t === "pointerout" || t === "pointerover") && (me = qh, Ie = "onPointerLeave", Ae = "onPointerEnter", Mt = "pointer");
          var wt = _ == null ? C : qf(_), N = z == null ? C : qf(z), B = new me(Ie, Mt + "leave", _, i, u);
          B.target = wt, B.relatedTarget = N;
          var U = null, J = ac(u);
          if (J === a) {
            var Ce = new me(Ae, Mt + "enter", z, i, u);
            Ce.target = N, Ce.relatedTarget = wt, U = Ce;
          }
          nw(e, B, U, _, z);
        }
      }
    }
    function Ke(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xe = typeof Object.is == "function" ? Object.is : Ke;
    function Je(e, t) {
      if (xe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Kn.call(t, s) || !xe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function qn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ft(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function al(e, t) {
      for (var a = qn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Qi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = qn(Ft(a));
      }
    }
    function hg(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zT(e, u, s, f, p);
    }
    function zT(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, h = 0, E = 0, C = e, k = null;
      e: for (; ; ) {
        for (var _ = null; C === t && (a === 0 || C.nodeType === Qi) && (f = s + a), C === i && (u === 0 || C.nodeType === Qi) && (p = s + u), C.nodeType === Qi && (s += C.nodeValue.length), (_ = C.firstChild) !== null; )
          k = C, C = _;
        for (; ; ) {
          if (C === e)
            break e;
          if (k === t && ++h === a && (f = s), k === i && ++E === u && (p = s), (_ = C.nextSibling) !== null)
            break;
          C = k, k = C.parentNode;
        }
        C = _;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function FT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var h = p;
          p = f, f = h;
        }
        var E = al(e, f), C = al(e, p);
        if (E && C) {
          if (u.rangeCount === 1 && u.anchorNode === E.node && u.anchorOffset === E.offset && u.focusNode === C.node && u.focusOffset === C.offset)
            return;
          var k = a.createRange();
          k.setStart(E.node, E.offset), u.removeAllRanges(), f > p ? (u.addRange(k), u.extend(C.node, C.offset)) : (k.setEnd(C.node, C.offset), u.addRange(k));
        }
      }
    }
    function EE(e) {
      return e && e.nodeType === Qi;
    }
    function CE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : EE(e) ? !1 : EE(t) ? CE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jT(e) {
      return e && e.ownerDocument && CE(e.ownerDocument.documentElement, e);
    }
    function HT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function RE() {
      for (var e = window, t = Ol(); t instanceof e.HTMLIFrameElement; ) {
        if (HT(t))
          e = t.contentWindow;
        else
          return t;
        t = Ol(e.document);
      }
      return t;
    }
    function mg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function PT() {
      var e = RE();
      return {
        focusedElem: e,
        selectionRange: mg(e) ? BT(e) : null
      };
    }
    function VT(e) {
      var t = RE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jT(a)) {
        i !== null && mg(a) && $T(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === ea && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function BT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = hg(e), t || {
        start: 0,
        end: 0
      };
    }
    function $T(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : FT(e, t);
    }
    var IT = yn && "documentMode" in document && document.documentMode <= 11;
    function YT() {
      gr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var $f = null, yg = null, Mp = null, gg = !1;
    function QT(e) {
      if ("selectionStart" in e && mg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function WT(e) {
      return e.window === e ? e.document : e.nodeType === fi ? e : e.ownerDocument;
    }
    function TE(e, t, a) {
      var i = WT(a);
      if (!(gg || $f == null || $f !== Ol(i))) {
        var u = QT($f);
        if (!Mp || !Je(Mp, u)) {
          Mp = u;
          var s = nm(yg, "onSelect");
          if (s.length > 0) {
            var f = new Lf("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = $f;
          }
        }
      }
    }
    function qT(e, t, a, i, u, s, f) {
      var p = a ? qf(a) : window;
      switch (t) {
        case "focusin":
          (Jh(p) || p.contentEditable === "true") && ($f = p, yg = a, Mp = null);
          break;
        case "focusout":
          $f = null, yg = null, Mp = null;
          break;
        case "mousedown":
          gg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gg = !1, TE(e, i, u);
          break;
        case "selectionchange":
          if (IT)
            break;
        case "keydown":
        case "keyup":
          TE(e, i, u);
      }
    }
    function Zh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var If = {
      animationend: Zh("Animation", "AnimationEnd"),
      animationiteration: Zh("Animation", "AnimationIteration"),
      animationstart: Zh("Animation", "AnimationStart"),
      transitionend: Zh("Transition", "TransitionEnd")
    }, Sg = {}, wE = {};
    yn && (wE = document.createElement("div").style, "AnimationEvent" in window || (delete If.animationend.animation, delete If.animationiteration.animation, delete If.animationstart.animation), "TransitionEvent" in window || delete If.transitionend.transition);
    function em(e) {
      if (Sg[e])
        return Sg[e];
      if (!If[e])
        return e;
      var t = If[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in wE)
          return Sg[e] = t[a];
      return e;
    }
    var bE = em("animationend"), xE = em("animationiteration"), _E = em("animationstart"), DE = em("transitionend"), kE = /* @__PURE__ */ new Map(), OE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Io(e, t) {
      kE.set(e, t), gr(t, [e]);
    }
    function GT() {
      for (var e = 0; e < OE.length; e++) {
        var t = OE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Io(a, "on" + i);
      }
      Io(bE, "onAnimationEnd"), Io(xE, "onAnimationIteration"), Io(_E, "onAnimationStart"), Io("dblclick", "onDoubleClick"), Io("focusin", "onFocus"), Io("focusout", "onBlur"), Io(DE, "onTransitionEnd");
    }
    function KT(e, t, a, i, u, s, f) {
      var p = kE.get(t);
      if (p !== void 0) {
        var h = Lf, E = t;
        switch (t) {
          case "keypress":
            if (Mu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            h = Qh;
            break;
          case "focusin":
            E = "focus", h = Ks;
            break;
          case "focusout":
            E = "blur", h = Ks;
            break;
          case "beforeblur":
          case "afterblur":
            h = Ks;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Nf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Ph;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = bp;
            break;
          case bE:
          case xE:
          case _E:
            h = lg;
            break;
          case DE:
            h = Yl;
            break;
          case "scroll":
            h = Cp;
            break;
          case "wheel":
            h = Uu;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Bh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = qh;
            break;
        }
        var C = (s & pu) !== 0;
        {
          var k = !C && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = ew(a, p, i.type, C, k);
          if (_.length > 0) {
            var z = new h(p, E, null, i, u);
            e.push({
              event: z,
              listeners: _
            });
          }
        }
      }
    }
    GT(), re(), n(), YT(), jf();
    function XT(e, t, a, i, u, s, f) {
      KT(e, t, a, i, u, s);
      var p = (s & Wy) === 0;
      p && (Le(e, t, a, i, u), A(e, t, a, i, u), qT(e, t, a, i, u), vg(e, t, a, i, u));
    }
    var Lp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Eg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Lp));
    function ME(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ki(i, t, void 0, e), e.currentTarget = null;
    }
    function JT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          ME(e, h, p), i = f;
        }
      else
        for (var E = 0; E < t.length; E++) {
          var C = t[E], k = C.instance, _ = C.currentTarget, z = C.listener;
          if (k !== i && e.isPropagationStopped())
            return;
          ME(e, z, _), i = k;
        }
    }
    function LE(e, t) {
      for (var a = (t & pu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        JT(s, f, a);
      }
      Gd();
    }
    function ZT(e, t, a, i, u) {
      var s = Hc(a), f = [];
      XT(f, e, i, a, s, t), LE(f, t);
    }
    function Tn(e, t) {
      Eg.has(e) || R('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = kb(t), u = rw(e);
      i.has(u) || (NE(t, e, ws, a), i.add(u));
    }
    function Cg(e, t, a) {
      Eg.has(e) && !t && R('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= pu), NE(a, e, i, t);
    }
    var tm = "_reactListening" + Math.random().toString(36).slice(2);
    function Np(e) {
      if (!e[tm]) {
        e[tm] = !0, gt.forEach(function(a) {
          a !== "selectionchange" && (Eg.has(a) || Cg(a, !1, e), Cg(a, !0, e));
        });
        var t = e.nodeType === fi ? e : e.ownerDocument;
        t !== null && (t[tm] || (t[tm] = !0, Cg("selectionchange", !1, t)));
      }
    }
    function NE(e, t, a, i, u) {
      var s = Qn(e, t, a), f = void 0;
      ks && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? kf(e, t, s, f) : nl(e, t, s) : f !== void 0 ? Ep(e, t, s, f) : Po(e, t, s);
    }
    function UE(e, t) {
      return e === t || e.nodeType === jn && e.parentNode === t;
    }
    function Rg(e, t, a, i, u) {
      var s = i;
      if (!(t & qi) && !(t & ws)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var h = p.tag;
            if (h === Z || h === oe) {
              var E = p.stateNode.containerInfo;
              if (UE(E, f))
                break;
              if (h === oe)
                for (var C = p.return; C !== null; ) {
                  var k = C.tag;
                  if (k === Z || k === oe) {
                    var _ = C.stateNode.containerInfo;
                    if (UE(_, f))
                      return;
                  }
                  C = C.return;
                }
              for (; E !== null; ) {
                var z = ac(E);
                if (z === null)
                  return;
                var H = z.tag;
                if (H === le || H === Oe) {
                  p = s = z;
                  continue e;
                }
                E = E.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Yd(function() {
        return ZT(e, t, a, s);
      });
    }
    function Up(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ew(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, h = [], E = e, C = null; E !== null; ) {
        var k = E, _ = k.stateNode, z = k.tag;
        if (z === le && _ !== null && (C = _, p !== null)) {
          var H = hu(E, p);
          H != null && h.push(Up(E, H, C));
        }
        if (u)
          break;
        E = E.return;
      }
      return h;
    }
    function nm(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === le && f !== null) {
          var h = f, E = hu(u, a);
          E != null && i.unshift(Up(u, E, h));
          var C = hu(u, t);
          C != null && i.push(Up(u, C, h));
        }
        u = u.return;
      }
      return i;
    }
    function Yf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== le);
      return e || null;
    }
    function tw(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Yf(s))
        u++;
      for (var f = 0, p = i; p; p = Yf(p))
        f++;
      for (; u - f > 0; )
        a = Yf(a), u--;
      for (; f - u > 0; )
        i = Yf(i), f--;
      for (var h = u; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Yf(a), i = Yf(i);
      }
      return null;
    }
    function AE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var h = p, E = h.alternate, C = h.stateNode, k = h.tag;
        if (E !== null && E === i)
          break;
        if (k === le && C !== null) {
          var _ = C;
          if (u) {
            var z = hu(p, s);
            z != null && f.unshift(Up(p, z, _));
          } else if (!u) {
            var H = hu(p, s);
            H != null && f.push(Up(p, H, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function nw(e, t, a, i, u) {
      var s = i && u ? tw(i, u) : null;
      i !== null && AE(e, t, i, s, !1), u !== null && a !== null && AE(e, a, u, s, !0);
    }
    function rw(e, t) {
      return e + "__bubble";
    }
    var Za = !1, Ap = "dangerouslySetInnerHTML", rm = "suppressContentEditableWarning", Yo = "suppressHydrationWarning", zE = "autoFocus", nc = "children", rc = "style", am = "__html", Tg, im, zp, FE, lm, jE, HE;
    Tg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, im = function(e, t) {
      jc(e, t), Pd(e, t), ch(e, t, {
        registrationNameDependencies: St,
        possibleRegistrationNames: ln
      });
    }, jE = yn && !document.documentMode, zp = function(e, t, a) {
      if (!Za) {
        var i = um(a), u = um(t);
        u !== i && (Za = !0, R("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, FE = function(e) {
      if (!Za) {
        Za = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), R("Extra attributes from the server: %s", t);
      }
    }, lm = function(e, t) {
      t === !1 ? R("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : R("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, HE = function(e, t) {
      var a = e.namespaceURI === Yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var aw = /\r\n?/g, iw = /\u0000|\uFFFD/g;
    function um(e) {
      Gr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(aw, `
`).replace(iw, "");
    }
    function om(e, t, a, i) {
      var u = um(t), s = um(e);
      if (s !== u && (i && (Za || (Za = !0, R('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && we))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function PE(e) {
      return e.nodeType === fi ? e : e.ownerDocument;
    }
    function lw() {
    }
    function sm(e) {
      e.onclick = lw;
    }
    function uw(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === rc)
            f && Object.freeze(f), eh(t, f);
          else if (s === Ap) {
            var p = f ? f[am] : void 0;
            p != null && $v(t, p);
          } else if (s === nc)
            if (typeof f == "string") {
              var h = e !== "textarea" || f !== "";
              h && Uc(t, f);
            } else typeof f == "number" && Uc(t, "" + f);
          else s === rm || s === Yo || s === zE || (St.hasOwnProperty(s) ? f != null && (typeof f != "function" && lm(s, f), s === "onScroll" && Tn("scroll", t)) : f != null && Ea(t, s, f, u));
        }
    }
    function ow(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === rc ? eh(e, f) : s === Ap ? $v(e, f) : s === nc ? Uc(e, f) : Ea(e, s, f, i);
      }
    }
    function sw(e, t, a, i) {
      var u, s = PE(a), f, p = i;
      if (p === Yi && (p = Lc(e)), p === Yi) {
        if (u = Wi(e, t), !u && e !== e.toLowerCase() && R("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var E = h.firstChild;
          f = h.removeChild(E);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var C = f;
          t.multiple ? C.multiple = !0 : t.size && (C.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Yi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Kn.call(Tg, e) && (Tg[e] = !0, R("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function cw(e, t) {
      return PE(t).createTextNode(e);
    }
    function fw(e, t, a, i) {
      var u = Wi(t, a);
      im(t, a);
      var s;
      switch (t) {
        case "dialog":
          Tn("cancel", e), Tn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Lp.length; f++)
            Tn(Lp[f], e);
          s = a;
          break;
        case "source":
          Tn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e), s = a;
          break;
        case "details":
          Tn("toggle", e), s = a;
          break;
        case "input":
          w(e, a), s = m(e, a), Tn("invalid", e);
          break;
        case "option":
          Xt(e, a), s = a;
          break;
        case "select":
          Es(e, a), s = Ss(e, a), Tn("invalid", e);
          break;
        case "textarea":
          Pv(e, a), s = Md(e, a), Tn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (zc(t, s), uw(t, e, i, s, u), t) {
        case "input":
          ja(e), ne(e, a, !1);
          break;
        case "textarea":
          ja(e), Bv(e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          kd(e, a);
          break;
        default:
          typeof s.onClick == "function" && sm(e);
          break;
      }
    }
    function dw(e, t, a, i, u) {
      im(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = m(e, a), p = m(e, i), s = [];
          break;
        case "select":
          f = Ss(e, a), p = Ss(e, i), s = [];
          break;
        case "textarea":
          f = Md(e, a), p = Md(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && sm(e);
          break;
      }
      zc(t, p);
      var h, E, C = null;
      for (h in f)
        if (!(p.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === rc) {
            var k = f[h];
            for (E in k)
              k.hasOwnProperty(E) && (C || (C = {}), C[E] = "");
          } else h === Ap || h === nc || h === rm || h === Yo || h === zE || (St.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in p) {
        var _ = p[h], z = f != null ? f[h] : void 0;
        if (!(!p.hasOwnProperty(h) || _ === z || _ == null && z == null))
          if (h === rc)
            if (_ && Object.freeze(_), z) {
              for (E in z)
                z.hasOwnProperty(E) && (!_ || !_.hasOwnProperty(E)) && (C || (C = {}), C[E] = "");
              for (E in _)
                _.hasOwnProperty(E) && z[E] !== _[E] && (C || (C = {}), C[E] = _[E]);
            } else
              C || (s || (s = []), s.push(h, C)), C = _;
          else if (h === Ap) {
            var H = _ ? _[am] : void 0, V = z ? z[am] : void 0;
            H != null && V !== H && (s = s || []).push(h, H);
          } else h === nc ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(h, "" + _) : h === rm || h === Yo || (St.hasOwnProperty(h) ? (_ != null && (typeof _ != "function" && lm(h, _), h === "onScroll" && Tn("scroll", e)), !s && z !== _ && (s = [])) : (s = s || []).push(h, _));
      }
      return C && (Rs(C, p[rc]), (s = s || []).push(rc, C)), s;
    }
    function pw(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && F(e, u);
      var s = Wi(a, i), f = Wi(a, u);
      switch (ow(e, t, s, f), a) {
        case "input":
          P(e, u);
          break;
        case "textarea":
          Vv(e, u);
          break;
        case "select":
          Fy(e, u);
          break;
      }
    }
    function vw(e) {
      {
        var t = e.toLowerCase();
        return Fc.hasOwnProperty(t) && Fc[t] || null;
      }
    }
    function hw(e, t, a, i, u, s, f) {
      var p, h;
      switch (p = Wi(t, a), im(t, a), t) {
        case "dialog":
          Tn("cancel", e), Tn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e);
          break;
        case "video":
        case "audio":
          for (var E = 0; E < Lp.length; E++)
            Tn(Lp[E], e);
          break;
        case "source":
          Tn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e);
          break;
        case "details":
          Tn("toggle", e);
          break;
        case "input":
          w(e, a), Tn("invalid", e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          Es(e, a), Tn("invalid", e);
          break;
        case "textarea":
          Pv(e, a), Tn("invalid", e);
          break;
      }
      zc(t, a);
      {
        h = /* @__PURE__ */ new Set();
        for (var C = e.attributes, k = 0; k < C.length; k++) {
          var _ = C[k].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(C[k].name);
          }
        }
      }
      var z = null;
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var V = a[H];
          if (H === nc)
            typeof V == "string" ? e.textContent !== V && (a[Yo] !== !0 && om(e.textContent, V, s, f), z = [nc, V]) : typeof V == "number" && e.textContent !== "" + V && (a[Yo] !== !0 && om(e.textContent, V, s, f), z = [nc, "" + V]);
          else if (St.hasOwnProperty(H))
            V != null && (typeof V != "function" && lm(H, V), H === "onScroll" && Tn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var me = void 0, Ie = p && We ? null : Or(H);
            if (a[Yo] !== !0) {
              if (!(H === rm || H === Yo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === Ap) {
                  var Ae = e.innerHTML, Mt = V ? V[am] : void 0;
                  if (Mt != null) {
                    var wt = HE(e, Mt);
                    wt !== Ae && zp(H, Ae, wt);
                  }
                } else if (H === rc) {
                  if (h.delete(H), jE) {
                    var N = Yy(V);
                    me = e.getAttribute("style"), N !== me && zp(H, me, N);
                  }
                } else if (p && !We)
                  h.delete(H.toLowerCase()), me = Si(e, H, V), V !== me && zp(H, me, V);
                else if (!Sn(H, Ie, p) && !Kt(H, V, Ie, p)) {
                  var B = !1;
                  if (Ie !== null)
                    h.delete(Ie.attributeName), me = Sa(e, H, V, Ie);
                  else {
                    var U = i;
                    if (U === Yi && (U = Lc(t)), U === Yi)
                      h.delete(H.toLowerCase());
                    else {
                      var J = vw(H);
                      J !== null && J !== H && (B = !0, h.delete(J)), h.delete(H);
                    }
                    me = Si(e, H, V);
                  }
                  var Ce = We;
                  !Ce && V !== me && !B && zp(H, me, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      h.size > 0 && a[Yo] !== !0 && FE(h), t) {
        case "input":
          ja(e), ne(e, a, !0);
          break;
        case "textarea":
          ja(e), Bv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && sm(e);
          break;
      }
      return z;
    }
    function mw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function wg(e, t) {
      {
        if (Za)
          return;
        Za = !0, R("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function bg(e, t) {
      {
        if (Za)
          return;
        Za = !0, R('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function xg(e, t, a) {
      {
        if (Za)
          return;
        Za = !0, R("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function _g(e, t) {
      {
        if (t === "" || Za)
          return;
        Za = !0, R('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function yw(e, t, a) {
      switch (t) {
        case "input":
          Ge(e, a);
          return;
        case "textarea":
          Ld(e, a);
          return;
        case "select":
          jy(e, a);
          return;
      }
    }
    var Fp = function() {
    }, jp = function() {
    };
    {
      var gw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], VE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Sw = VE.concat(["button"]), Ew = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], BE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      jp = function(e, t) {
        var a = mt({}, e || BE), i = {
          tag: t
        };
        return VE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Sw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), gw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Cw = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Ew.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Rw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, $E = {};
      Fp = function(e, t, a) {
        a = a || BE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && R("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Cw(e, u) ? null : i, f = s ? null : Rw(e, a), p = s || f;
        if (p) {
          var h = p.tag, E = !!s + "|" + e + "|" + h;
          if (!$E[E]) {
            $E[E] = !0;
            var C = e, k = "";
            if (e === "#text" ? /\S/.test(t) ? C = "Text nodes" : (C = "Whitespace text nodes", k = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : C = "<" + e + ">", s) {
              var _ = "";
              h === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), R("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, h, k, _);
            } else
              R("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", C, h);
          }
        }
      };
    }
    var cm = "suppressHydrationWarning", fm = "$", dm = "/$", Hp = "$?", Pp = "$!", Tw = "style", Dg = null, kg = null;
    function ww(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case fi:
        case fu: {
          t = i === fi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Ud(null, "");
          break;
        }
        default: {
          var s = i === jn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Ud(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), h = jp(null, p);
        return {
          namespace: a,
          ancestorInfo: h
        };
      }
    }
    function bw(e, t, a) {
      {
        var i = e, u = Ud(i.namespace, t), s = jp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function dO(e) {
      return e;
    }
    function xw(e) {
      Dg = jo(), kg = PT();
      var t = null;
      return ca(!1), t;
    }
    function _w(e) {
      VT(kg), ca(Dg), Dg = null, kg = null;
    }
    function Dw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Fp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, h = jp(f.ancestorInfo, e);
          Fp(null, p, h);
        }
        s = f.namespace;
      }
      var E = sw(e, t, a, s);
      return $p(u, E), Fg(E, t), E;
    }
    function kw(e, t) {
      e.appendChild(t);
    }
    function Ow(e, t, a, i, u) {
      switch (fw(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Mw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, h = jp(f.ancestorInfo, t);
          Fp(null, p, h);
        }
      }
      return dw(e, t, a, i);
    }
    function Og(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Lw(e, t, a, i) {
      {
        var u = a;
        Fp(null, e, u.ancestorInfo);
      }
      var s = cw(e, t);
      return $p(i, s), s;
    }
    function Nw() {
      var e = window.event;
      return e === void 0 ? Di : Df(e.type);
    }
    var Mg = typeof setTimeout == "function" ? setTimeout : void 0, Uw = typeof clearTimeout == "function" ? clearTimeout : void 0, Lg = -1, IE = typeof Promise == "function" ? Promise : void 0, Aw = typeof queueMicrotask == "function" ? queueMicrotask : typeof IE < "u" ? function(e) {
      return IE.resolve(null).then(e).catch(zw);
    } : Mg;
    function zw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Fw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function jw(e, t, a, i, u, s) {
      pw(e, t, a, i, u), Fg(e, u);
    }
    function YE(e) {
      Uc(e, "");
    }
    function Hw(e, t, a) {
      e.nodeValue = a;
    }
    function Pw(e, t) {
      e.appendChild(t);
    }
    function Vw(e, t) {
      var a;
      e.nodeType === jn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && sm(a);
    }
    function Bw(e, t, a) {
      e.insertBefore(t, a);
    }
    function $w(e, t, a) {
      e.nodeType === jn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Iw(e, t) {
      e.removeChild(t);
    }
    function Yw(e, t) {
      e.nodeType === jn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ng(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === jn) {
          var s = u.data;
          if (s === dm)
            if (i === 0) {
              e.removeChild(u), Dn(t);
              return;
            } else
              i--;
          else (s === fm || s === Hp || s === Pp) && i++;
        }
        a = u;
      } while (a);
      Dn(t);
    }
    function Qw(e, t) {
      e.nodeType === jn ? Ng(e.parentNode, t) : e.nodeType === ea && Ng(e, t), Dn(e);
    }
    function Ww(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function qw(e) {
      e.nodeValue = "";
    }
    function Gw(e, t) {
      e = e;
      var a = t[Tw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ac("display", i);
    }
    function Kw(e, t) {
      e.nodeValue = t;
    }
    function Xw(e) {
      e.nodeType === ea ? e.textContent = "" : e.nodeType === fi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Jw(e, t, a) {
      return e.nodeType !== ea || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Zw(e, t) {
      return t === "" || e.nodeType !== Qi ? null : e;
    }
    function eb(e) {
      return e.nodeType !== jn ? null : e;
    }
    function QE(e) {
      return e.data === Hp;
    }
    function Ug(e) {
      return e.data === Pp;
    }
    function tb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function nb(e, t) {
      e._reactRetry = t;
    }
    function pm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ea || t === Qi)
          break;
        if (t === jn) {
          var a = e.data;
          if (a === fm || a === Pp || a === Hp)
            break;
          if (a === dm)
            return null;
        }
      }
      return e;
    }
    function Vp(e) {
      return pm(e.nextSibling);
    }
    function rb(e) {
      return pm(e.firstChild);
    }
    function ab(e) {
      return pm(e.firstChild);
    }
    function ib(e) {
      return pm(e.nextSibling);
    }
    function lb(e, t, a, i, u, s, f) {
      $p(s, e), Fg(e, a);
      var p;
      {
        var h = u;
        p = h.namespace;
      }
      var E = (s.mode & Ue) !== Me;
      return hw(e, t, a, p, i, E, f);
    }
    function ub(e, t, a, i) {
      return $p(a, e), a.mode & Ue, mw(e, t);
    }
    function ob(e, t) {
      $p(t, e);
    }
    function sb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === dm) {
            if (a === 0)
              return Vp(t);
            a--;
          } else (i === fm || i === Pp || i === Hp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function WE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === fm || i === Pp || i === Hp) {
            if (a === 0)
              return t;
            a--;
          } else i === dm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function cb(e) {
      Dn(e);
    }
    function fb(e) {
      Dn(e);
    }
    function db(e) {
      return e !== "head" && e !== "body";
    }
    function pb(e, t, a, i) {
      var u = !0;
      om(t.nodeValue, a, i, u);
    }
    function vb(e, t, a, i, u, s) {
      if (t[cm] !== !0) {
        var f = !0;
        om(i.nodeValue, u, s, f);
      }
    }
    function hb(e, t) {
      t.nodeType === ea ? wg(e, t) : t.nodeType === jn || bg(e, t);
    }
    function mb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ea ? wg(a, t) : t.nodeType === jn || bg(a, t));
      }
    }
    function yb(e, t, a, i, u) {
      (u || t[cm] !== !0) && (i.nodeType === ea ? wg(a, i) : i.nodeType === jn || bg(a, i));
    }
    function gb(e, t, a) {
      xg(e, t);
    }
    function Sb(e, t) {
      _g(e, t);
    }
    function Eb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && xg(i, t);
      }
    }
    function Cb(e, t) {
      {
        var a = e.parentNode;
        a !== null && _g(a, t);
      }
    }
    function Rb(e, t, a, i, u, s) {
      (s || t[cm] !== !0) && xg(a, i);
    }
    function Tb(e, t, a, i, u) {
      (u || t[cm] !== !0) && _g(a, i);
    }
    function wb(e) {
      R("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function bb(e) {
      Np(e);
    }
    var Qf = Math.random().toString(36).slice(2), Wf = "__reactFiber$" + Qf, Ag = "__reactProps$" + Qf, Bp = "__reactContainer$" + Qf, zg = "__reactEvents$" + Qf, xb = "__reactListeners$" + Qf, _b = "__reactHandles$" + Qf;
    function Db(e) {
      delete e[Wf], delete e[Ag], delete e[zg], delete e[xb], delete e[_b];
    }
    function $p(e, t) {
      t[Wf] = e;
    }
    function vm(e, t) {
      t[Bp] = e;
    }
    function qE(e) {
      e[Bp] = null;
    }
    function Ip(e) {
      return !!e[Bp];
    }
    function ac(e) {
      var t = e[Wf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Bp] || a[Wf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = WE(e); u !== null; ) {
              var s = u[Wf];
              if (s)
                return s;
              u = WE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Qo(e) {
      var t = e[Wf] || e[Bp];
      return t && (t.tag === le || t.tag === Oe || t.tag === ye || t.tag === Z) ? t : null;
    }
    function qf(e) {
      if (e.tag === le || e.tag === Oe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function hm(e) {
      return e[Ag] || null;
    }
    function Fg(e, t) {
      e[Ag] = t;
    }
    function kb(e) {
      var t = e[zg];
      return t === void 0 && (t = e[zg] = /* @__PURE__ */ new Set()), t;
    }
    var GE = {}, KE = S.ReactDebugCurrentFrame;
    function mm(e) {
      if (e) {
        var t = e._owner, a = Ti(e.type, e._source, t ? t.type : null);
        KE.setExtraStackFrame(a);
      } else
        KE.setExtraStackFrame(null);
    }
    function il(e, t, a, i, u) {
      {
        var s = Function.call.bind(Kn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              p = E;
            }
            p && !(p instanceof Error) && (mm(u), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), mm(null)), p instanceof Error && !(p.message in GE) && (GE[p.message] = !0, mm(u), R("Failed %s type: %s", a, p.message), mm(null));
          }
      }
    }
    var jg = [], ym;
    ym = [];
    var Au = -1;
    function Wo(e) {
      return {
        current: e
      };
    }
    function fa(e, t) {
      if (Au < 0) {
        R("Unexpected pop.");
        return;
      }
      t !== ym[Au] && R("Unexpected Fiber popped."), e.current = jg[Au], jg[Au] = null, ym[Au] = null, Au--;
    }
    function da(e, t, a) {
      Au++, jg[Au] = e.current, ym[Au] = a, e.current = t;
    }
    var Hg;
    Hg = {};
    var hi = {};
    Object.freeze(hi);
    var zu = Wo(hi), Wl = Wo(!1), Pg = hi;
    function Gf(e, t, a) {
      return a && ql(t) ? Pg : zu.current;
    }
    function XE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Kf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return hi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = it(e) || "Unknown";
          il(i, s, "context", p);
        }
        return u && XE(e, t, s), s;
      }
    }
    function gm() {
      return Wl.current;
    }
    function ql(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Sm(e) {
      fa(Wl, e), fa(zu, e);
    }
    function Vg(e) {
      fa(Wl, e), fa(zu, e);
    }
    function JE(e, t, a) {
      {
        if (zu.current !== hi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        da(zu, t, e), da(Wl, a, e);
      }
    }
    function ZE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = it(e) || "Unknown";
            Hg[s] || (Hg[s] = !0, R("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((it(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var h = it(e) || "Unknown";
          il(u, f, "child context", h);
        }
        return mt({}, a, f);
      }
    }
    function Em(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || hi;
        return Pg = zu.current, da(zu, a, e), da(Wl, Wl.current, e), !0;
      }
    }
    function eC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = ZE(e, t, Pg);
          i.__reactInternalMemoizedMergedChildContext = u, fa(Wl, e), fa(zu, e), da(zu, u, e), da(Wl, a, e);
        } else
          fa(Wl, e), da(Wl, a, e);
      }
    }
    function Ob(e) {
      {
        if (!ep(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case ue: {
              var a = t.type;
              if (ql(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var qo = 0, Cm = 1, Fu = null, Bg = !1, $g = !1;
    function tC(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    function Mb(e) {
      Bg = !0, tC(e);
    }
    function nC() {
      Bg && Go();
    }
    function Go() {
      if (!$g && Fu !== null) {
        $g = !0;
        var e = 0, t = qa();
        try {
          var a = !0, i = Fu;
          for (_n(Nn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Fu = null, Bg = !1;
        } catch (s) {
          throw Fu !== null && (Fu = Fu.slice(e + 1)), Qc(qc, Go), s;
        } finally {
          _n(t), $g = !1;
        }
      }
      return null;
    }
    var Xf = [], Jf = 0, Rm = null, Tm = 0, Li = [], Ni = 0, ic = null, ju = 1, Hu = "";
    function Lb(e) {
      return uc(), (e.flags & Xd) !== $e;
    }
    function Nb(e) {
      return uc(), Tm;
    }
    function Ub() {
      var e = Hu, t = ju, a = t & ~Ab(t);
      return a.toString(32) + e;
    }
    function lc(e, t) {
      uc(), Xf[Jf++] = Tm, Xf[Jf++] = Rm, Rm = e, Tm = t;
    }
    function rC(e, t, a) {
      uc(), Li[Ni++] = ju, Li[Ni++] = Hu, Li[Ni++] = ic, ic = e;
      var i = ju, u = Hu, s = wm(i) - 1, f = i & ~(1 << s), p = a + 1, h = wm(t) + s;
      if (h > 30) {
        var E = s - s % 5, C = (1 << E) - 1, k = (f & C).toString(32), _ = f >> E, z = s - E, H = wm(t) + z, V = p << z, me = V | _, Ie = k + u;
        ju = 1 << H | me, Hu = Ie;
      } else {
        var Ae = p << s, Mt = Ae | f, wt = u;
        ju = 1 << h | Mt, Hu = wt;
      }
    }
    function Ig(e) {
      uc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        lc(e, a), rC(e, a, i);
      }
    }
    function wm(e) {
      return 32 - Co(e);
    }
    function Ab(e) {
      return 1 << wm(e) - 1;
    }
    function Yg(e) {
      for (; e === Rm; )
        Rm = Xf[--Jf], Xf[Jf] = null, Tm = Xf[--Jf], Xf[Jf] = null;
      for (; e === ic; )
        ic = Li[--Ni], Li[Ni] = null, Hu = Li[--Ni], Li[Ni] = null, ju = Li[--Ni], Li[Ni] = null;
    }
    function zb() {
      return uc(), ic !== null ? {
        id: ju,
        overflow: Hu
      } : null;
    }
    function Fb(e, t) {
      uc(), Li[Ni++] = ju, Li[Ni++] = Hu, Li[Ni++] = ic, ju = t.id, Hu = t.overflow, ic = e;
    }
    function uc() {
      jr() || R("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Fr = null, Ui = null, ll = !1, oc = !1, Ko = null;
    function jb() {
      ll && R("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function aC() {
      oc = !0;
    }
    function Hb() {
      return oc;
    }
    function Pb(e) {
      var t = e.stateNode.containerInfo;
      return Ui = ab(t), Fr = e, ll = !0, Ko = null, oc = !1, !0;
    }
    function Vb(e, t, a) {
      return Ui = ib(t), Fr = e, ll = !0, Ko = null, oc = !1, a !== null && Fb(e, a), !0;
    }
    function iC(e, t) {
      switch (e.tag) {
        case Z: {
          hb(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & Ue) !== Me;
          yb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ye: {
          var i = e.memoizedState;
          i.dehydrated !== null && mb(i.dehydrated, t);
          break;
        }
      }
    }
    function lC(e, t) {
      iC(e, t);
      var a = YD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Vt) : i.push(a);
    }
    function Qg(e, t) {
      {
        if (oc)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, gb(a, i);
                break;
              case Oe:
                var u = t.pendingProps;
                Sb(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var h = t.type, E = t.pendingProps, C = (e.mode & Ue) !== Me;
                Rb(
                  s,
                  f,
                  p,
                  h,
                  E,
                  // TODO: Delete this argument when we remove the legacy root API.
                  C
                );
                break;
              }
              case Oe: {
                var k = t.pendingProps, _ = (e.mode & Ue) !== Me;
                Tb(
                  s,
                  f,
                  p,
                  k,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case ye: {
            var z = e.memoizedState, H = z.dehydrated;
            if (H !== null) switch (t.tag) {
              case le:
                var V = t.type;
                t.pendingProps, Eb(H, V);
                break;
              case Oe:
                var me = t.pendingProps;
                Cb(H, me);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function uC(e, t) {
      t.flags = t.flags & ~Ba | cn, Qg(e, t);
    }
    function oC(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = Jw(t, a);
          return i !== null ? (e.stateNode = i, Fr = e, Ui = rb(i), !0) : !1;
        }
        case Oe: {
          var u = e.pendingProps, s = Zw(t, u);
          return s !== null ? (e.stateNode = s, Fr = e, Ui = null, !0) : !1;
        }
        case ye: {
          var f = eb(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: zb(),
              retryLane: br
            };
            e.memoizedState = p;
            var h = QD(f);
            return h.return = e, e.child = h, Fr = e, Ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Wg(e) {
      return (e.mode & Ue) !== Me && (e.flags & tt) === $e;
    }
    function qg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Gg(e) {
      if (ll) {
        var t = Ui;
        if (!t) {
          Wg(e) && (Qg(Fr, e), qg()), uC(Fr, e), ll = !1, Fr = e;
          return;
        }
        var a = t;
        if (!oC(e, t)) {
          Wg(e) && (Qg(Fr, e), qg()), t = Vp(a);
          var i = Fr;
          if (!t || !oC(e, t)) {
            uC(Fr, e), ll = !1, Fr = e;
            return;
          }
          lC(i, a);
        }
      }
    }
    function Bb(e, t, a) {
      var i = e.stateNode, u = !oc, s = lb(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function $b(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ub(t, a, e);
      if (i) {
        var u = Fr;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ue) !== Me;
              pb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, h = u.memoizedProps, E = u.stateNode, C = (u.mode & Ue) !== Me;
              vb(
                p,
                h,
                E,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                C
              );
              break;
            }
          }
      }
      return i;
    }
    function Ib(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ob(a, e);
    }
    function Yb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return sb(a);
    }
    function sC(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== Z && t.tag !== ye; )
        t = t.return;
      Fr = t;
    }
    function bm(e) {
      if (e !== Fr)
        return !1;
      if (!ll)
        return sC(e), ll = !0, !1;
      if (e.tag !== Z && (e.tag !== le || db(e.type) && !Og(e.type, e.memoizedProps))) {
        var t = Ui;
        if (t)
          if (Wg(e))
            cC(e), qg();
          else
            for (; t; )
              lC(e, t), t = Vp(t);
      }
      return sC(e), e.tag === ye ? Ui = Yb(e) : Ui = Fr ? Vp(e.stateNode) : null, !0;
    }
    function Qb() {
      return ll && Ui !== null;
    }
    function cC(e) {
      for (var t = Ui; t; )
        iC(e, t), t = Vp(t);
    }
    function Zf() {
      Fr = null, Ui = null, ll = !1, oc = !1;
    }
    function fC() {
      Ko !== null && (a1(Ko), Ko = null);
    }
    function jr() {
      return ll;
    }
    function Kg(e) {
      Ko === null ? Ko = [e] : Ko.push(e);
    }
    var Wb = S.ReactCurrentBatchConfig, qb = null;
    function Gb() {
      return Wb.transition;
    }
    var ul = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Kb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Ct && (t = a), a = a.return;
        return t;
      }, sc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Yp = [], Qp = [], Wp = [], qp = [], Gp = [], Kp = [], cc = /* @__PURE__ */ new Set();
      ul.recordUnsafeLifecycleWarnings = function(e, t) {
        cc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Yp.push(e), e.mode & Ct && typeof t.UNSAFE_componentWillMount == "function" && Qp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Wp.push(e), e.mode & Ct && typeof t.UNSAFE_componentWillReceiveProps == "function" && qp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Gp.push(e), e.mode & Ct && typeof t.UNSAFE_componentWillUpdate == "function" && Kp.push(e));
      }, ul.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Yp.length > 0 && (Yp.forEach(function(_) {
          e.add(it(_) || "Component"), cc.add(_.type);
        }), Yp = []);
        var t = /* @__PURE__ */ new Set();
        Qp.length > 0 && (Qp.forEach(function(_) {
          t.add(it(_) || "Component"), cc.add(_.type);
        }), Qp = []);
        var a = /* @__PURE__ */ new Set();
        Wp.length > 0 && (Wp.forEach(function(_) {
          a.add(it(_) || "Component"), cc.add(_.type);
        }), Wp = []);
        var i = /* @__PURE__ */ new Set();
        qp.length > 0 && (qp.forEach(function(_) {
          i.add(it(_) || "Component"), cc.add(_.type);
        }), qp = []);
        var u = /* @__PURE__ */ new Set();
        Gp.length > 0 && (Gp.forEach(function(_) {
          u.add(it(_) || "Component"), cc.add(_.type);
        }), Gp = []);
        var s = /* @__PURE__ */ new Set();
        if (Kp.length > 0 && (Kp.forEach(function(_) {
          s.add(it(_) || "Component"), cc.add(_.type);
        }), Kp = []), t.size > 0) {
          var f = sc(t);
          R(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = sc(i);
          R(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var h = sc(s);
          R(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
        }
        if (e.size > 0) {
          var E = sc(e);
          ae(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (a.size > 0) {
          var C = sc(a);
          ae(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (u.size > 0) {
          var k = sc(u);
          ae(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
      };
      var xm = /* @__PURE__ */ new Map(), dC = /* @__PURE__ */ new Set();
      ul.recordLegacyContextWarning = function(e, t) {
        var a = Kb(e);
        if (a === null) {
          R("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!dC.has(e.type)) {
          var i = xm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], xm.set(a, i)), i.push(e));
        }
      }, ul.flushLegacyContextWarning = function() {
        xm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(it(s) || "Component"), dC.add(s.type);
            });
            var u = sc(i);
            try {
              Wt(a), R(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              bn();
            }
          }
        });
      }, ul.discardPendingWarnings = function() {
        Yp = [], Qp = [], Wp = [], qp = [], Gp = [], Kp = [], xm = /* @__PURE__ */ new Map();
      };
    }
    var Xg, Jg, Zg, eS, tS, pC = function(e, t) {
    };
    Xg = !1, Jg = !1, Zg = {}, eS = {}, tS = {}, pC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = it(t) || "Component";
        eS[a] || (eS[a] = !0, R('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Xb(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Xp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Ct || Ze) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ue) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Xb(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = it(e) || "Component";
          Zg[u] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), Zg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ue)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var h = f;
          Xn(i, "ref");
          var E = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var C = function(k) {
            var _ = h.refs;
            k === null ? delete _[E] : _[E] = k;
          };
          return C._stringRef = E, C;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function _m(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Dm(e) {
      {
        var t = it(e) || "Component";
        if (tS[t])
          return;
        tS[t] = !0, R("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function vC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function hC(e) {
      function t(N, B) {
        if (e) {
          var U = N.deletions;
          U === null ? (N.deletions = [B], N.flags |= Vt) : U.push(B);
        }
      }
      function a(N, B) {
        if (!e)
          return null;
        for (var U = B; U !== null; )
          t(N, U), U = U.sibling;
        return null;
      }
      function i(N, B) {
        for (var U = /* @__PURE__ */ new Map(), J = B; J !== null; )
          J.key !== null ? U.set(J.key, J) : U.set(J.index, J), J = J.sibling;
        return U;
      }
      function u(N, B) {
        var U = Sc(N, B);
        return U.index = 0, U.sibling = null, U;
      }
      function s(N, B, U) {
        if (N.index = U, !e)
          return N.flags |= Xd, B;
        var J = N.alternate;
        if (J !== null) {
          var Ce = J.index;
          return Ce < B ? (N.flags |= cn, B) : Ce;
        } else
          return N.flags |= cn, B;
      }
      function f(N) {
        return e && N.alternate === null && (N.flags |= cn), N;
      }
      function p(N, B, U, J) {
        if (B === null || B.tag !== Oe) {
          var Ce = K0(U, N.mode, J);
          return Ce.return = N, Ce;
        } else {
          var ge = u(B, U);
          return ge.return = N, ge;
        }
      }
      function h(N, B, U, J) {
        var Ce = U.type;
        if (Ce === Ca)
          return C(N, B, U.props.children, J, U.key);
        if (B !== null && (B.elementType === Ce || // Keep this check inline so it only runs on the false path:
        E1(B, U) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === qe && vC(Ce) === B.type)) {
          var ge = u(B, U.props);
          return ge.ref = Xp(N, B, U), ge.return = N, ge._debugSource = U._source, ge._debugOwner = U._owner, ge;
        }
        var et = G0(U, N.mode, J);
        return et.ref = Xp(N, B, U), et.return = N, et;
      }
      function E(N, B, U, J) {
        if (B === null || B.tag !== oe || B.stateNode.containerInfo !== U.containerInfo || B.stateNode.implementation !== U.implementation) {
          var Ce = X0(U, N.mode, J);
          return Ce.return = N, Ce;
        } else {
          var ge = u(B, U.children || []);
          return ge.return = N, ge;
        }
      }
      function C(N, B, U, J, Ce) {
        if (B === null || B.tag !== De) {
          var ge = us(U, N.mode, J, Ce);
          return ge.return = N, ge;
        } else {
          var et = u(B, U);
          return et.return = N, et;
        }
      }
      function k(N, B, U) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var J = K0("" + B, N.mode, U);
          return J.return = N, J;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case ui: {
              var Ce = G0(B, N.mode, U);
              return Ce.ref = Xp(N, null, B), Ce.return = N, Ce;
            }
            case Mr: {
              var ge = X0(B, N.mode, U);
              return ge.return = N, ge;
            }
            case qe: {
              var et = B._payload, ut = B._init;
              return k(N, ut(et), U);
            }
          }
          if (Dt(B) || Lr(B)) {
            var Zt = us(B, N.mode, U, null);
            return Zt.return = N, Zt;
          }
          _m(N, B);
        }
        return typeof B == "function" && Dm(N), null;
      }
      function _(N, B, U, J) {
        var Ce = B !== null ? B.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number")
          return Ce !== null ? null : p(N, B, "" + U, J);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case ui:
              return U.key === Ce ? h(N, B, U, J) : null;
            case Mr:
              return U.key === Ce ? E(N, B, U, J) : null;
            case qe: {
              var ge = U._payload, et = U._init;
              return _(N, B, et(ge), J);
            }
          }
          if (Dt(U) || Lr(U))
            return Ce !== null ? null : C(N, B, U, J, null);
          _m(N, U);
        }
        return typeof U == "function" && Dm(N), null;
      }
      function z(N, B, U, J, Ce) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var ge = N.get(U) || null;
          return p(B, ge, "" + J, Ce);
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case ui: {
              var et = N.get(J.key === null ? U : J.key) || null;
              return h(B, et, J, Ce);
            }
            case Mr: {
              var ut = N.get(J.key === null ? U : J.key) || null;
              return E(B, ut, J, Ce);
            }
            case qe:
              var Zt = J._payload, jt = J._init;
              return z(N, B, U, jt(Zt), Ce);
          }
          if (Dt(J) || Lr(J)) {
            var Gn = N.get(U) || null;
            return C(B, Gn, J, Ce, null);
          }
          _m(B, J);
        }
        return typeof J == "function" && Dm(B), null;
      }
      function H(N, B, U) {
        {
          if (typeof N != "object" || N === null)
            return B;
          switch (N.$$typeof) {
            case ui:
            case Mr:
              pC(N, U);
              var J = N.key;
              if (typeof J != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(J);
                break;
              }
              if (!B.has(J)) {
                B.add(J);
                break;
              }
              R("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", J);
              break;
            case qe:
              var Ce = N._payload, ge = N._init;
              H(ge(Ce), B, U);
              break;
          }
        }
        return B;
      }
      function V(N, B, U, J) {
        for (var Ce = null, ge = 0; ge < U.length; ge++) {
          var et = U[ge];
          Ce = H(et, Ce, N);
        }
        for (var ut = null, Zt = null, jt = B, Gn = 0, Ht = 0, Vn = null; jt !== null && Ht < U.length; Ht++) {
          jt.index > Ht ? (Vn = jt, jt = null) : Vn = jt.sibling;
          var va = _(N, jt, U[Ht], J);
          if (va === null) {
            jt === null && (jt = Vn);
            break;
          }
          e && jt && va.alternate === null && t(N, jt), Gn = s(va, Gn, Ht), Zt === null ? ut = va : Zt.sibling = va, Zt = va, jt = Vn;
        }
        if (Ht === U.length) {
          if (a(N, jt), jr()) {
            var Yr = Ht;
            lc(N, Yr);
          }
          return ut;
        }
        if (jt === null) {
          for (; Ht < U.length; Ht++) {
            var yi = k(N, U[Ht], J);
            yi !== null && (Gn = s(yi, Gn, Ht), Zt === null ? ut = yi : Zt.sibling = yi, Zt = yi);
          }
          if (jr()) {
            var Ma = Ht;
            lc(N, Ma);
          }
          return ut;
        }
        for (var La = i(N, jt); Ht < U.length; Ht++) {
          var ha = z(La, N, Ht, U[Ht], J);
          ha !== null && (e && ha.alternate !== null && La.delete(ha.key === null ? Ht : ha.key), Gn = s(ha, Gn, Ht), Zt === null ? ut = ha : Zt.sibling = ha, Zt = ha);
        }
        if (e && La.forEach(function(gd) {
          return t(N, gd);
        }), jr()) {
          var Qu = Ht;
          lc(N, Qu);
        }
        return ut;
      }
      function me(N, B, U, J) {
        var Ce = Lr(U);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          U[Symbol.toStringTag] === "Generator" && (Jg || R("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Jg = !0), U.entries === Ce && (Xg || R("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xg = !0);
          var ge = Ce.call(U);
          if (ge)
            for (var et = null, ut = ge.next(); !ut.done; ut = ge.next()) {
              var Zt = ut.value;
              et = H(Zt, et, N);
            }
        }
        var jt = Ce.call(U);
        if (jt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, Ht = null, Vn = B, va = 0, Yr = 0, yi = null, Ma = jt.next(); Vn !== null && !Ma.done; Yr++, Ma = jt.next()) {
          Vn.index > Yr ? (yi = Vn, Vn = null) : yi = Vn.sibling;
          var La = _(N, Vn, Ma.value, J);
          if (La === null) {
            Vn === null && (Vn = yi);
            break;
          }
          e && Vn && La.alternate === null && t(N, Vn), va = s(La, va, Yr), Ht === null ? Gn = La : Ht.sibling = La, Ht = La, Vn = yi;
        }
        if (Ma.done) {
          if (a(N, Vn), jr()) {
            var ha = Yr;
            lc(N, ha);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !Ma.done; Yr++, Ma = jt.next()) {
            var Qu = k(N, Ma.value, J);
            Qu !== null && (va = s(Qu, va, Yr), Ht === null ? Gn = Qu : Ht.sibling = Qu, Ht = Qu);
          }
          if (jr()) {
            var gd = Yr;
            lc(N, gd);
          }
          return Gn;
        }
        for (var kv = i(N, Vn); !Ma.done; Yr++, Ma = jt.next()) {
          var nu = z(kv, N, Yr, Ma.value, J);
          nu !== null && (e && nu.alternate !== null && kv.delete(nu.key === null ? Yr : nu.key), va = s(nu, va, Yr), Ht === null ? Gn = nu : Ht.sibling = nu, Ht = nu);
        }
        if (e && kv.forEach(function(Tk) {
          return t(N, Tk);
        }), jr()) {
          var Rk = Yr;
          lc(N, Rk);
        }
        return Gn;
      }
      function Ie(N, B, U, J) {
        if (B !== null && B.tag === Oe) {
          a(N, B.sibling);
          var Ce = u(B, U);
          return Ce.return = N, Ce;
        }
        a(N, B);
        var ge = K0(U, N.mode, J);
        return ge.return = N, ge;
      }
      function Ae(N, B, U, J) {
        for (var Ce = U.key, ge = B; ge !== null; ) {
          if (ge.key === Ce) {
            var et = U.type;
            if (et === Ca) {
              if (ge.tag === De) {
                a(N, ge.sibling);
                var ut = u(ge, U.props.children);
                return ut.return = N, ut._debugSource = U._source, ut._debugOwner = U._owner, ut;
              }
            } else if (ge.elementType === et || // Keep this check inline so it only runs on the false path:
            E1(ge, U) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof et == "object" && et !== null && et.$$typeof === qe && vC(et) === ge.type) {
              a(N, ge.sibling);
              var Zt = u(ge, U.props);
              return Zt.ref = Xp(N, ge, U), Zt.return = N, Zt._debugSource = U._source, Zt._debugOwner = U._owner, Zt;
            }
            a(N, ge);
            break;
          } else
            t(N, ge);
          ge = ge.sibling;
        }
        if (U.type === Ca) {
          var jt = us(U.props.children, N.mode, J, U.key);
          return jt.return = N, jt;
        } else {
          var Gn = G0(U, N.mode, J);
          return Gn.ref = Xp(N, B, U), Gn.return = N, Gn;
        }
      }
      function Mt(N, B, U, J) {
        for (var Ce = U.key, ge = B; ge !== null; ) {
          if (ge.key === Ce)
            if (ge.tag === oe && ge.stateNode.containerInfo === U.containerInfo && ge.stateNode.implementation === U.implementation) {
              a(N, ge.sibling);
              var et = u(ge, U.children || []);
              return et.return = N, et;
            } else {
              a(N, ge);
              break;
            }
          else
            t(N, ge);
          ge = ge.sibling;
        }
        var ut = X0(U, N.mode, J);
        return ut.return = N, ut;
      }
      function wt(N, B, U, J) {
        var Ce = typeof U == "object" && U !== null && U.type === Ca && U.key === null;
        if (Ce && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case ui:
              return f(Ae(N, B, U, J));
            case Mr:
              return f(Mt(N, B, U, J));
            case qe:
              var ge = U._payload, et = U._init;
              return wt(N, B, et(ge), J);
          }
          if (Dt(U))
            return V(N, B, U, J);
          if (Lr(U))
            return me(N, B, U, J);
          _m(N, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? f(Ie(N, B, "" + U, J)) : (typeof U == "function" && Dm(N), a(N, B));
      }
      return wt;
    }
    var ed = hC(!0), mC = hC(!1);
    function Jb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Zb(e, t) {
      for (var a = e.child; a !== null; )
        PD(a, t), a = a.sibling;
    }
    var nS = Wo(null), rS;
    rS = {};
    var km = null, td = null, aS = null, Om = !1;
    function Mm() {
      km = null, td = null, aS = null, Om = !1;
    }
    function yC() {
      Om = !0;
    }
    function gC() {
      Om = !1;
    }
    function SC(e, t, a) {
      da(nS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== rS && R("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = rS;
    }
    function iS(e, t) {
      var a = nS.current;
      fa(nS, t), e._currentValue = a;
    }
    function lS(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (_u(i.childLanes, t) ? u !== null && !_u(u.childLanes, t) && (u.childLanes = st(u.childLanes, t)) : (i.childLanes = st(i.childLanes, t), u !== null && (u.childLanes = st(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && R("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ex(e, t, a) {
      tx(e, t, a);
    }
    function tx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = Do(a), h = Pu(on, p);
                h.tag = Nm;
                var E = i.updateQueue;
                if (E !== null) {
                  var C = E.shared, k = C.pending;
                  k === null ? h.next = h : (h.next = k.next, k.next = h), C.pending = h;
                }
              }
              i.lanes = st(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = st(_.lanes, a)), lS(i.return, a, e), s.lanes = st(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Be)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === rt) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = st(z.lanes, a);
          var H = z.alternate;
          H !== null && (H.lanes = st(H.lanes, a)), lS(z, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var V = u.sibling;
            if (V !== null) {
              V.return = u.return, u = V;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function nd(e, t) {
      km = e, td = null, aS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (sa(a.lanes, t) && dv(), a.firstContext = null);
      }
    }
    function ir(e) {
      Om && R("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (aS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (td === null) {
          if (km === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          td = a, km.dependencies = {
            lanes: Q,
            firstContext: a
          };
        } else
          td = td.next = a;
      }
      return t;
    }
    var fc = null;
    function uS(e) {
      fc === null ? fc = [e] : fc.push(e);
    }
    function nx() {
      if (fc !== null) {
        for (var e = 0; e < fc.length; e++) {
          var t = fc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        fc = null;
      }
    }
    function EC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, uS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Lm(e, i);
    }
    function rx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, uS(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function ax(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, uS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Lm(e, i);
    }
    function ei(e, t) {
      return Lm(e, t);
    }
    var ix = Lm;
    function Lm(e, t) {
      e.lanes = st(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = st(a.lanes, t)), a === null && (e.flags & (cn | Ba)) !== $e && m1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = st(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = st(a.childLanes, t) : (u.flags & (cn | Ba)) !== $e && m1(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var CC = 0, RC = 1, Nm = 2, oS = 3, Um = !1, sS, Am;
    sS = !1, Am = null;
    function cS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Q
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function TC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: CC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Xo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Am === u && !sS && (R("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), sS = !0), rD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, ix(e, a);
      } else
        return ax(e, u, t, a);
    }
    function zm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (dp(a)) {
          var s = u.lanes;
          s = Sf(s, e.pendingLanes);
          var f = st(s, a);
          u.lanes = f, pp(e, f);
        }
      }
    }
    function fS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var h = p;
            do {
              var E = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              f === null ? s = f = E : (f.next = E, f = E), h = h.next;
            } while (h !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var C = a.lastBaseUpdate;
      C === null ? a.firstBaseUpdate = t : C.next = t, a.lastBaseUpdate = t;
    }
    function lx(e, t, a, i, u, s) {
      switch (a.tag) {
        case RC: {
          var f = a.payload;
          if (typeof f == "function") {
            yC();
            var p = f.call(s, i, u);
            {
              if (e.mode & Ct) {
                Hn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Hn(!1);
                }
              }
              gC();
            }
            return p;
          }
          return f;
        }
        case oS:
          e.flags = e.flags & ~tr | tt;
        case CC: {
          var h = a.payload, E;
          if (typeof h == "function") {
            yC(), E = h.call(s, i, u);
            {
              if (e.mode & Ct) {
                Hn(!0);
                try {
                  h.call(s, i, u);
                } finally {
                  Hn(!1);
                }
              }
              gC();
            }
          } else
            E = h;
          return E == null ? i : mt({}, i, E);
        }
        case Nm:
          return Um = !0, i;
      }
      return i;
    }
    function Fm(e, t, a, i) {
      var u = e.updateQueue;
      Um = !1, Am = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var h = p, E = h.next;
        h.next = null, f === null ? s = E : f.next = E, f = h;
        var C = e.alternate;
        if (C !== null) {
          var k = C.updateQueue, _ = k.lastBaseUpdate;
          _ !== f && (_ === null ? k.firstBaseUpdate = E : _.next = E, k.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var z = u.baseState, H = Q, V = null, me = null, Ie = null, Ae = s;
        do {
          var Mt = Ae.lane, wt = Ae.eventTime;
          if (_u(i, Mt)) {
            if (Ie !== null) {
              var B = {
                eventTime: wt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pn,
                tag: Ae.tag,
                payload: Ae.payload,
                callback: Ae.callback,
                next: null
              };
              Ie = Ie.next = B;
            }
            z = lx(e, u, Ae, z, t, a);
            var U = Ae.callback;
            if (U !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ae.lane !== Pn) {
              e.flags |= xi;
              var J = u.effects;
              J === null ? u.effects = [Ae] : J.push(Ae);
            }
          } else {
            var N = {
              eventTime: wt,
              lane: Mt,
              tag: Ae.tag,
              payload: Ae.payload,
              callback: Ae.callback,
              next: null
            };
            Ie === null ? (me = Ie = N, V = z) : Ie = Ie.next = N, H = st(H, Mt);
          }
          if (Ae = Ae.next, Ae === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Ce = p, ge = Ce.next;
            Ce.next = null, Ae = ge, u.lastBaseUpdate = Ce, u.shared.pending = null;
          }
        } while (!0);
        Ie === null && (V = z), u.baseState = V, u.firstBaseUpdate = me, u.lastBaseUpdate = Ie;
        var et = u.shared.interleaved;
        if (et !== null) {
          var ut = et;
          do
            H = st(H, ut.lane), ut = ut.next;
          while (ut !== et);
        } else s === null && (u.shared.lanes = Q);
        wv(H), e.lanes = H, e.memoizedState = z;
      }
      Am = null;
    }
    function ux(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function wC() {
      Um = !1;
    }
    function jm() {
      return Um;
    }
    function bC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, ux(f, a));
        }
    }
    var Jp = {}, Jo = Wo(Jp), Zp = Wo(Jp), Hm = Wo(Jp);
    function Pm(e) {
      if (e === Jp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function xC() {
      var e = Pm(Hm.current);
      return e;
    }
    function dS(e, t) {
      da(Hm, t, e), da(Zp, e, e), da(Jo, Jp, e);
      var a = ww(t);
      fa(Jo, e), da(Jo, a, e);
    }
    function rd(e) {
      fa(Jo, e), fa(Zp, e), fa(Hm, e);
    }
    function pS() {
      var e = Pm(Jo.current);
      return e;
    }
    function _C(e) {
      Pm(Hm.current);
      var t = Pm(Jo.current), a = bw(t, e.type);
      t !== a && (da(Zp, e, e), da(Jo, a, e));
    }
    function vS(e) {
      Zp.current === e && (fa(Jo, e), fa(Zp, e));
    }
    var ox = 0, DC = 1, kC = 1, ev = 2, ol = Wo(ox);
    function hS(e, t) {
      return (e & t) !== 0;
    }
    function ad(e) {
      return e & DC;
    }
    function mS(e, t) {
      return e & DC | t;
    }
    function sx(e, t) {
      return e | t;
    }
    function Zo(e, t) {
      da(ol, t, e);
    }
    function id(e) {
      fa(ol, e);
    }
    function cx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Vm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ye) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || QE(i) || Ug(i))
              return t;
          }
        } else if (t.tag === yt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & tt) !== $e;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ti = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Gl = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), Hr = (
      /*   */
      8
    ), yS = [];
    function gS() {
      for (var e = 0; e < yS.length; e++) {
        var t = yS[e];
        t._workInProgressVersionPrimary = null;
      }
      yS.length = 0;
    }
    function fx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ee = S.ReactCurrentDispatcher, tv = S.ReactCurrentBatchConfig, SS, ld;
    SS = /* @__PURE__ */ new Set();
    var dc = Q, Jt = null, dr = null, pr = null, Bm = !1, nv = !1, rv = 0, dx = 0, px = 25, Y = null, Ai = null, es = -1, ES = !1;
    function Gt() {
      {
        var e = Y;
        Ai === null ? Ai = [e] : Ai.push(e);
      }
    }
    function de() {
      {
        var e = Y;
        Ai !== null && (es++, Ai[es] !== e && vx(e));
      }
    }
    function ud(e) {
      e != null && !Dt(e) && R("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Y, typeof e);
    }
    function vx(e) {
      {
        var t = it(Jt);
        if (!SS.has(t) && (SS.add(t), Ai !== null)) {
          for (var a = "", i = 30, u = 0; u <= es; u++) {
            for (var s = Ai[u], f = u === es ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          R(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function pa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function CS(e, t) {
      if (ES)
        return !1;
      if (t === null)
        return R("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Y), !1;
      e.length !== t.length && R(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Y, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xe(e[a], t[a]))
          return !1;
      return !0;
    }
    function od(e, t, a, i, u, s) {
      dc = s, Jt = t, Ai = e !== null ? e._debugHookTypes : null, es = -1, ES = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? Ee.current = XC : Ai !== null ? Ee.current = KC : Ee.current = GC;
      var f = a(i, u);
      if (nv) {
        var p = 0;
        do {
          if (nv = !1, rv = 0, p >= px)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, ES = !1, dr = null, pr = null, t.updateQueue = null, es = -1, Ee.current = JC, f = a(i, u);
        } while (nv);
      }
      Ee.current = ty, t._debugHookTypes = Ai;
      var h = dr !== null && dr.next !== null;
      if (dc = Q, Jt = null, dr = null, pr = null, Y = null, Ai = null, es = -1, e !== null && (e.flags & ur) !== (t.flags & ur) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ue) !== Me && R("Internal React error: Expected static flag was missing. Please notify the React team."), Bm = !1, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function sd() {
      var e = rv !== 0;
      return rv = 0, e;
    }
    function OC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & xa) !== Me ? t.flags &= ~(gu | ra | vn | ft) : t.flags &= ~(vn | ft), e.lanes = $s(e.lanes, a);
    }
    function MC() {
      if (Ee.current = ty, Bm) {
        for (var e = Jt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Bm = !1;
      }
      dc = Q, Jt = null, dr = null, pr = null, Ai = null, es = -1, Y = null, IC = !1, nv = !1, rv = 0;
    }
    function Kl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? Jt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function zi() {
      var e;
      if (dr === null) {
        var t = Jt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = Jt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? Jt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function LC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function RS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function TS(e, t, a) {
      var i = Kl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = gx.bind(null, Jt, s);
      return [i.memoizedState, f];
    }
    function wS(e, t, a) {
      var i = zi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var h = f.next, E = p.next;
          f.next = E, p.next = h;
        }
        s.baseQueue !== f && R("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var C = f.next, k = s.baseState, _ = null, z = null, H = null, V = C;
        do {
          var me = V.lane;
          if (_u(dc, me)) {
            if (H !== null) {
              var Ae = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Pn,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              H = H.next = Ae;
            }
            if (V.hasEagerState)
              k = V.eagerState;
            else {
              var Mt = V.action;
              k = e(k, Mt);
            }
          } else {
            var Ie = {
              lane: me,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            H === null ? (z = H = Ie, _ = k) : H = H.next = Ie, Jt.lanes = st(Jt.lanes, me), wv(me);
          }
          V = V.next;
        } while (V !== null && V !== C);
        H === null ? _ = k : H.next = z, xe(k, i.memoizedState) || dv(), i.memoizedState = k, i.baseState = _, i.baseQueue = H, u.lastRenderedState = k;
      }
      var wt = u.interleaved;
      if (wt !== null) {
        var N = wt;
        do {
          var B = N.lane;
          Jt.lanes = st(Jt.lanes, B), wv(B), N = N.next;
        } while (N !== wt);
      } else f === null && (u.lanes = Q);
      var U = u.dispatch;
      return [i.memoizedState, U];
    }
    function bS(e, t, a) {
      var i = zi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var h = f.next, E = h;
        do {
          var C = E.action;
          p = e(p, C), E = E.next;
        } while (E !== h);
        xe(p, i.memoizedState) || dv(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function pO(e, t, a) {
    }
    function vO(e, t, a) {
    }
    function xS(e, t, a) {
      var i = Jt, u = Kl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), ld || s !== a() && (R("The result of getServerSnapshot should be cached to avoid an infinite loop"), ld = !0);
      } else {
        if (s = t(), !ld) {
          var p = t();
          xe(s, p) || (R("The result of getSnapshot should be cached to avoid an infinite loop"), ld = !0);
        }
        var h = Ey();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Bs(h, dc) || NC(i, t, s);
      }
      u.memoizedState = s;
      var E = {
        value: s,
        getSnapshot: t
      };
      return u.queue = E, Wm(AC.bind(null, i, E, e), [e]), i.flags |= vn, av(cr | Hr, UC.bind(null, i, E, s, t), void 0, null), s;
    }
    function $m(e, t, a) {
      var i = Jt, u = zi(), s = t();
      if (!ld) {
        var f = t();
        xe(s, f) || (R("The result of getSnapshot should be cached to avoid an infinite loop"), ld = !0);
      }
      var p = u.memoizedState, h = !xe(p, s);
      h && (u.memoizedState = s, dv());
      var E = u.queue;
      if (lv(AC.bind(null, i, E, e), [e]), E.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= vn, av(cr | Hr, UC.bind(null, i, E, s, t), void 0, null);
        var C = Ey();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Bs(C, dc) || NC(i, t, s);
      }
      return s;
    }
    function NC(e, t, a) {
      e.flags |= Ls;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Jt.updateQueue;
      if (u === null)
        u = LC(), Jt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function UC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zC(t) && FC(e);
    }
    function AC(e, t, a) {
      var i = function() {
        zC(t) && FC(e);
      };
      return a(i);
    }
    function zC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !xe(a, i);
      } catch {
        return !0;
      }
    }
    function FC(e) {
      var t = ei(e, Pe);
      t !== null && yr(t, e, Pe, on);
    }
    function Im(e) {
      var t = Kl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: RS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Sx.bind(null, Jt, a);
      return [t.memoizedState, i];
    }
    function _S(e) {
      return wS(RS);
    }
    function DS(e) {
      return bS(RS);
    }
    function av(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Jt.updateQueue;
      if (s === null)
        s = LC(), Jt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function kS(e) {
      var t = Kl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Ym(e) {
      var t = zi();
      return t.memoizedState;
    }
    function iv(e, t, a, i) {
      var u = Kl(), s = i === void 0 ? null : i;
      Jt.flags |= e, u.memoizedState = av(cr | t, a, void 0, s);
    }
    function Qm(e, t, a, i) {
      var u = zi(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var p = dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var h = p.deps;
          if (CS(s, h)) {
            u.memoizedState = av(t, a, f, s);
            return;
          }
        }
      }
      Jt.flags |= e, u.memoizedState = av(cr | t, a, f, s);
    }
    function Wm(e, t) {
      return (Jt.mode & xa) !== Me ? iv(gu | vn | Fl, Hr, e, t) : iv(vn | Fl, Hr, e, t);
    }
    function lv(e, t) {
      return Qm(vn, Hr, e, t);
    }
    function OS(e, t) {
      return iv(ft, Gl, e, t);
    }
    function qm(e, t) {
      return Qm(ft, Gl, e, t);
    }
    function MS(e, t) {
      var a = ft;
      return a |= na, (Jt.mode & xa) !== Me && (a |= ra), iv(a, fr, e, t);
    }
    function Gm(e, t) {
      return Qm(ft, fr, e, t);
    }
    function jC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || R("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function LS(e, t, a) {
      typeof t != "function" && R("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = ft;
      return u |= na, (Jt.mode & xa) !== Me && (u |= ra), iv(u, fr, jC.bind(null, t, e), i);
    }
    function Km(e, t, a) {
      typeof t != "function" && R("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Qm(ft, fr, jC.bind(null, t, e), i);
    }
    function hx(e, t) {
    }
    var Xm = hx;
    function NS(e, t) {
      var a = Kl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Jm(e, t) {
      var a = zi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (CS(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function US(e, t) {
      var a = Kl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Zm(e, t) {
      var a = zi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (CS(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function AS(e) {
      var t = Kl();
      return t.memoizedState = e, e;
    }
    function HC(e) {
      var t = zi(), a = dr, i = a.memoizedState;
      return VC(t, i, e);
    }
    function PC(e) {
      var t = zi();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return VC(t, a, e);
    }
    function VC(e, t, a) {
      var i = !kh(dc);
      if (i) {
        if (!xe(a, t)) {
          var u = Lh();
          Jt.lanes = st(Jt.lanes, u), wv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, dv()), e.memoizedState = a, a;
    }
    function mx(e, t, a) {
      var i = qa();
      _n(tg(i, tl)), e(!0);
      var u = tv.transition;
      tv.transition = {};
      var s = tv.transition;
      tv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (_n(i), tv.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ae("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function zS() {
      var e = Im(!1), t = e[0], a = e[1], i = mx.bind(null, a), u = Kl();
      return u.memoizedState = i, [t, i];
    }
    function BC() {
      var e = _S(), t = e[0], a = zi(), i = a.memoizedState;
      return [t, i];
    }
    function $C() {
      var e = DS(), t = e[0], a = zi(), i = a.memoizedState;
      return [t, i];
    }
    var IC = !1;
    function yx() {
      return IC;
    }
    function FS() {
      var e = Kl(), t = Ey(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = Ub();
        i = ":" + a + "R" + u;
        var s = rv++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = dx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ey() {
      var e = zi(), t = e.memoizedState;
      return t;
    }
    function gx(e, t, a) {
      typeof arguments[3] == "function" && R("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = is(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YC(e))
        QC(t, u);
      else {
        var s = EC(e, t, u, i);
        if (s !== null) {
          var f = Oa();
          yr(s, e, i, f), WC(s, t, i);
        }
      }
      qC(e, i);
    }
    function Sx(e, t, a) {
      typeof arguments[3] == "function" && R("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = is(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YC(e))
        QC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Q && (s === null || s.lanes === Q)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Ee.current, Ee.current = sl;
            try {
              var h = t.lastRenderedState, E = f(h, a);
              if (u.hasEagerState = !0, u.eagerState = E, xe(E, h)) {
                rx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Ee.current = p;
            }
          }
        }
        var C = EC(e, t, u, i);
        if (C !== null) {
          var k = Oa();
          yr(C, e, i, k), WC(C, t, i);
        }
      }
      qC(e, i);
    }
    function YC(e) {
      var t = e.alternate;
      return e === Jt || t !== null && t === Jt;
    }
    function QC(e, t) {
      nv = Bm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function WC(e, t, a) {
      if (dp(a)) {
        var i = t.lanes;
        i = Sf(i, e.pendingLanes);
        var u = st(i, a);
        t.lanes = u, pp(e, u);
      }
    }
    function qC(e, t, a) {
      zs(e, t);
    }
    var ty = {
      readContext: ir,
      useCallback: pa,
      useContext: pa,
      useEffect: pa,
      useImperativeHandle: pa,
      useInsertionEffect: pa,
      useLayoutEffect: pa,
      useMemo: pa,
      useReducer: pa,
      useRef: pa,
      useState: pa,
      useDebugValue: pa,
      useDeferredValue: pa,
      useTransition: pa,
      useMutableSource: pa,
      useSyncExternalStore: pa,
      useId: pa,
      unstable_isNewReconciler: ie
    }, GC = null, KC = null, XC = null, JC = null, Xl = null, sl = null, ny = null;
    {
      var jS = function() {
        R("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, lt = function() {
        R("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      GC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", Gt(), ud(t), NS(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", Gt(), ir(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", Gt(), ud(t), Wm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", Gt(), ud(a), LS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", Gt(), ud(t), OS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", Gt(), ud(t), MS(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", Gt(), ud(t);
          var a = Ee.current;
          Ee.current = Xl;
          try {
            return US(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", Gt();
          var i = Ee.current;
          Ee.current = Xl;
          try {
            return TS(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", Gt(), kS(e);
        },
        useState: function(e) {
          Y = "useState", Gt();
          var t = Ee.current;
          Ee.current = Xl;
          try {
            return Im(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", Gt(), AS(e);
        },
        useTransition: function() {
          return Y = "useTransition", Gt(), zS();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", Gt(), xS(e, t, a);
        },
        useId: function() {
          return Y = "useId", Gt(), FS();
        },
        unstable_isNewReconciler: ie
      }, KC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", de(), NS(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", de(), ir(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", de(), Wm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", de(), LS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", de(), OS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", de(), MS(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", de();
          var a = Ee.current;
          Ee.current = Xl;
          try {
            return US(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", de();
          var i = Ee.current;
          Ee.current = Xl;
          try {
            return TS(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", de(), kS(e);
        },
        useState: function(e) {
          Y = "useState", de();
          var t = Ee.current;
          Ee.current = Xl;
          try {
            return Im(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", de(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", de(), AS(e);
        },
        useTransition: function() {
          return Y = "useTransition", de(), zS();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", de(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", de(), xS(e, t, a);
        },
        useId: function() {
          return Y = "useId", de(), FS();
        },
        unstable_isNewReconciler: ie
      }, XC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", de(), Jm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", de(), ir(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", de(), lv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", de(), Km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", de(), qm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", de(), Gm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", de();
          var a = Ee.current;
          Ee.current = sl;
          try {
            return Zm(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", de();
          var i = Ee.current;
          Ee.current = sl;
          try {
            return wS(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", de(), Ym();
        },
        useState: function(e) {
          Y = "useState", de();
          var t = Ee.current;
          Ee.current = sl;
          try {
            return _S(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", de(), Xm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", de(), HC(e);
        },
        useTransition: function() {
          return Y = "useTransition", de(), BC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", de(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", de(), $m(e, t);
        },
        useId: function() {
          return Y = "useId", de(), ey();
        },
        unstable_isNewReconciler: ie
      }, JC = {
        readContext: function(e) {
          return ir(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", de(), Jm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", de(), ir(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", de(), lv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", de(), Km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", de(), qm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", de(), Gm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", de();
          var a = Ee.current;
          Ee.current = ny;
          try {
            return Zm(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", de();
          var i = Ee.current;
          Ee.current = ny;
          try {
            return bS(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", de(), Ym();
        },
        useState: function(e) {
          Y = "useState", de();
          var t = Ee.current;
          Ee.current = ny;
          try {
            return DS(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", de(), Xm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", de(), PC(e);
        },
        useTransition: function() {
          return Y = "useTransition", de(), $C();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", de(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", de(), $m(e, t);
        },
        useId: function() {
          return Y = "useId", de(), ey();
        },
        unstable_isNewReconciler: ie
      }, Xl = {
        readContext: function(e) {
          return jS(), ir(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", lt(), Gt(), NS(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", lt(), Gt(), ir(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", lt(), Gt(), Wm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", lt(), Gt(), LS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", lt(), Gt(), OS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", lt(), Gt(), MS(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", lt(), Gt();
          var a = Ee.current;
          Ee.current = Xl;
          try {
            return US(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", lt(), Gt();
          var i = Ee.current;
          Ee.current = Xl;
          try {
            return TS(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", lt(), Gt(), kS(e);
        },
        useState: function(e) {
          Y = "useState", lt(), Gt();
          var t = Ee.current;
          Ee.current = Xl;
          try {
            return Im(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", lt(), Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", lt(), Gt(), AS(e);
        },
        useTransition: function() {
          return Y = "useTransition", lt(), Gt(), zS();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", lt(), Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", lt(), Gt(), xS(e, t, a);
        },
        useId: function() {
          return Y = "useId", lt(), Gt(), FS();
        },
        unstable_isNewReconciler: ie
      }, sl = {
        readContext: function(e) {
          return jS(), ir(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", lt(), de(), Jm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", lt(), de(), ir(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", lt(), de(), lv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", lt(), de(), Km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", lt(), de(), qm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", lt(), de(), Gm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", lt(), de();
          var a = Ee.current;
          Ee.current = sl;
          try {
            return Zm(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", lt(), de();
          var i = Ee.current;
          Ee.current = sl;
          try {
            return wS(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", lt(), de(), Ym();
        },
        useState: function(e) {
          Y = "useState", lt(), de();
          var t = Ee.current;
          Ee.current = sl;
          try {
            return _S(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", lt(), de(), Xm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", lt(), de(), HC(e);
        },
        useTransition: function() {
          return Y = "useTransition", lt(), de(), BC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", lt(), de(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", lt(), de(), $m(e, t);
        },
        useId: function() {
          return Y = "useId", lt(), de(), ey();
        },
        unstable_isNewReconciler: ie
      }, ny = {
        readContext: function(e) {
          return jS(), ir(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", lt(), de(), Jm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", lt(), de(), ir(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", lt(), de(), lv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", lt(), de(), Km(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", lt(), de(), qm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", lt(), de(), Gm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", lt(), de();
          var a = Ee.current;
          Ee.current = sl;
          try {
            return Zm(e, t);
          } finally {
            Ee.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", lt(), de();
          var i = Ee.current;
          Ee.current = sl;
          try {
            return bS(e, t, a);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", lt(), de(), Ym();
        },
        useState: function(e) {
          Y = "useState", lt(), de();
          var t = Ee.current;
          Ee.current = sl;
          try {
            return DS(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", lt(), de(), Xm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", lt(), de(), PC(e);
        },
        useTransition: function() {
          return Y = "useTransition", lt(), de(), $C();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", lt(), de(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", lt(), de(), $m(e, t);
        },
        useId: function() {
          return Y = "useId", lt(), de(), ey();
        },
        unstable_isNewReconciler: ie
      };
    }
    var ts = v.unstable_now, ZC = 0, ry = -1, uv = -1, ay = -1, HS = !1, iy = !1;
    function eR() {
      return HS;
    }
    function Ex() {
      iy = !0;
    }
    function Cx() {
      HS = !1, iy = !1;
    }
    function Rx() {
      HS = iy, iy = !1;
    }
    function tR() {
      return ZC;
    }
    function nR() {
      ZC = ts();
    }
    function PS(e) {
      uv = ts(), e.actualStartTime < 0 && (e.actualStartTime = ts());
    }
    function rR(e) {
      uv = -1;
    }
    function ly(e, t) {
      if (uv >= 0) {
        var a = ts() - uv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), uv = -1;
      }
    }
    function Jl(e) {
      if (ry >= 0) {
        var t = ts() - ry;
        ry = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case se:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function VS(e) {
      if (ay >= 0) {
        var t = ts() - ay;
        ay = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case se:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Zl() {
      ry = ts();
    }
    function BS() {
      ay = ts();
    }
    function $S(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function cl(e, t) {
      if (e && e.defaultProps) {
        var a = mt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var IS = {}, YS, QS, WS, qS, GS, aR, uy, KS, XS, JS, ov;
    {
      YS = /* @__PURE__ */ new Set(), QS = /* @__PURE__ */ new Set(), WS = /* @__PURE__ */ new Set(), qS = /* @__PURE__ */ new Set(), KS = /* @__PURE__ */ new Set(), GS = /* @__PURE__ */ new Set(), XS = /* @__PURE__ */ new Set(), JS = /* @__PURE__ */ new Set(), ov = /* @__PURE__ */ new Set();
      var iR = /* @__PURE__ */ new Set();
      uy = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          iR.has(a) || (iR.add(a), R("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, aR = function(e, t) {
        if (t === void 0) {
          var a = _t(e) || "Component";
          GS.has(a) || (GS.add(a), R("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(IS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(IS);
    }
    function ZS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Ct) {
          Hn(!0);
          try {
            s = a(i, u);
          } finally {
            Hn(!1);
          }
        }
        aR(t, s);
      }
      var f = s == null ? u : mt({}, u, s);
      if (e.memoizedState = f, e.lanes === Q) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var e0 = {
      isMounted: wa,
      enqueueSetState: function(e, t, a) {
        var i = Pa(e), u = Oa(), s = is(i), f = Pu(u, s);
        f.payload = t, a != null && (uy(a, "setState"), f.callback = a);
        var p = Xo(i, f, s);
        p !== null && (yr(p, i, s, u), zm(p, i, s)), zs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Pa(e), u = Oa(), s = is(i), f = Pu(u, s);
        f.tag = RC, f.payload = t, a != null && (uy(a, "replaceState"), f.callback = a);
        var p = Xo(i, f, s);
        p !== null && (yr(p, i, s, u), zm(p, i, s)), zs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Pa(e), i = Oa(), u = is(a), s = Pu(i, u);
        s.tag = Nm, t != null && (uy(t, "forceUpdate"), s.callback = t);
        var f = Xo(a, s, u);
        f !== null && (yr(f, a, u, i), zm(f, a, u)), tf(a, u);
      }
    };
    function lR(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var h = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Ct) {
            Hn(!0);
            try {
              h = p.shouldComponentUpdate(i, s, f);
            } finally {
              Hn(!1);
            }
          }
          h === void 0 && R("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", _t(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Je(a, i) || !Je(u, s) : !0;
    }
    function Tx(e, t, a) {
      var i = e.stateNode;
      {
        var u = _t(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? R("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : R("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && R("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && R("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && R("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && R("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !ov.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ct) === Me && (ov.add(t), R(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !ov.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Ct) === Me && (ov.add(t), R(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && R("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !XS.has(t) && (XS.add(t), R("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && R("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && R("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", _t(t) || "A pure component"), typeof i.componentDidUnmount == "function" && R("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && R("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && R("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && R("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && R("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && R("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !WS.has(t) && (WS.add(t), R("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", _t(t))), typeof i.getDerivedStateFromProps == "function" && R("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && R("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && R("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Dt(p)) && R("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && R("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function uR(e, t) {
      t.updater = e0, e.stateNode = t, vo(t, e), t._reactInternalInstance = IS;
    }
    function oR(e, t, a) {
      var i = !1, u = hi, s = hi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === G && f._context === void 0
        );
        if (!p && !JS.has(t)) {
          JS.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === b ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", R("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", _t(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ir(f);
      else {
        u = Gf(e, t, !0);
        var E = t.contextTypes;
        i = E != null, s = i ? Kf(e, u) : hi;
      }
      var C = new t(a, s);
      if (e.mode & Ct) {
        Hn(!0);
        try {
          C = new t(a, s);
        } finally {
          Hn(!1);
        }
      }
      var k = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      uR(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && k === null) {
          var _ = _t(t) || "Component";
          QS.has(_) || (QS.add(_), R("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, C.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var z = null, H = null, V = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), z !== null || H !== null || V !== null) {
            var me = _t(t) || "Component", Ie = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            qS.has(me) || (qS.add(me), R(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, me, Ie, z !== null ? `
  ` + z : "", H !== null ? `
  ` + H : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && XE(e, u, s), C;
    }
    function wx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (R("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", it(e) || "Component"), e0.enqueueReplaceState(t, t.state, null));
    }
    function sR(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = it(e) || "Component";
          YS.has(s) || (YS.add(s), R("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        e0.enqueueReplaceState(t, t.state, null);
      }
    }
    function t0(e, t, a, i) {
      Tx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, cS(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = ir(s);
      else {
        var f = Gf(e, t, !0);
        u.context = Kf(e, f);
      }
      {
        if (u.state === a) {
          var p = _t(t) || "Component";
          KS.has(p) || (KS.add(p), R("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Ct && ul.recordLegacyContextWarning(e, u), ul.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (ZS(e, t, h, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (wx(e, u), Fm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var E = ft;
        E |= na, (e.mode & xa) !== Me && (E |= ra), e.flags |= E;
      }
    }
    function bx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, h = hi;
      if (typeof p == "object" && p !== null)
        h = ir(p);
      else {
        var E = Gf(e, t, !0);
        h = Kf(e, E);
      }
      var C = t.getDerivedStateFromProps, k = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !k && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== h) && sR(e, u, a, h), wC();
      var _ = e.memoizedState, z = u.state = _;
      if (Fm(e, a, u, i), z = e.memoizedState, s === a && _ === z && !gm() && !jm()) {
        if (typeof u.componentDidMount == "function") {
          var H = ft;
          H |= na, (e.mode & xa) !== Me && (H |= ra), e.flags |= H;
        }
        return !1;
      }
      typeof C == "function" && (ZS(e, t, C, a), z = e.memoizedState);
      var V = jm() || lR(e, t, s, a, _, z, h);
      if (V) {
        if (!k && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var me = ft;
          me |= na, (e.mode & xa) !== Me && (me |= ra), e.flags |= me;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ie = ft;
          Ie |= na, (e.mode & xa) !== Me && (Ie |= ra), e.flags |= Ie;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = h, V;
    }
    function xx(e, t, a, i, u) {
      var s = t.stateNode;
      TC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : cl(t.type, f);
      s.props = p;
      var h = t.pendingProps, E = s.context, C = a.contextType, k = hi;
      if (typeof C == "object" && C !== null)
        k = ir(C);
      else {
        var _ = Gf(t, a, !0);
        k = Kf(t, _);
      }
      var z = a.getDerivedStateFromProps, H = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !H && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || E !== k) && sR(t, s, i, k), wC();
      var V = t.memoizedState, me = s.state = V;
      if (Fm(t, i, s, u), me = t.memoizedState, f === h && V === me && !gm() && !jm() && !Fe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Va), !1;
      typeof z == "function" && (ZS(t, a, z, i), me = t.memoizedState);
      var Ie = jm() || lR(t, a, p, i, V, me, k) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Fe;
      return Ie ? (!H && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, me, k), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, me, k)), typeof s.componentDidUpdate == "function" && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Va)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Va), t.memoizedProps = i, t.memoizedState = me), s.props = i, s.state = me, s.context = k, Ie;
    }
    function pc(e, t) {
      return {
        value: e,
        source: t,
        stack: eo(t),
        digest: null
      };
    }
    function n0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function _x(e, t) {
      return !0;
    }
    function r0(e, t) {
      try {
        var a = _x(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? it(u) : null, h = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", E;
        if (e.tag === Z)
          E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = it(e) || "Anonymous";
          E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + C + ".");
        }
        var k = h + `
` + f + `

` + ("" + E);
        console.error(k);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var Dx = typeof WeakMap == "function" ? WeakMap : Map;
    function cR(e, t, a) {
      var i = Pu(on, a);
      i.tag = oS, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        ED(u), r0(e, t);
      }, i;
    }
    function a0(e, t, a) {
      var i = Pu(on, a);
      i.tag = oS;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          C1(e), r0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        C1(e), r0(e, t), typeof u != "function" && gD(this);
        var h = t.value, E = t.stack;
        this.componentDidCatch(h, {
          componentStack: E !== null ? E : ""
        }), typeof u != "function" && (sa(e.lanes, Pe) || R("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", it(e) || "Unknown"));
      }), i;
    }
    function fR(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Dx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = CD.bind(null, e, t, a);
        ba && bv(e, a), t.then(s, s);
      }
    }
    function kx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Ox(e, t) {
      var a = e.tag;
      if ((e.mode & Ue) === Me && (a === te || a === Re || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function dR(e) {
      var t = e;
      do {
        if (t.tag === ye && cx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function pR(e, t, a, i, u) {
      if ((e.mode & Ue) === Me) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= tt, a.flags |= Ns, a.flags &= ~($c | Ra), a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = en;
            else {
              var f = Pu(on, Pe);
              f.tag = Nm, Xo(a, f, Pe);
            }
          }
          a.lanes = st(a.lanes, Pe);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = u, e;
    }
    function Mx(e, t, a, i, u) {
      if (a.flags |= Ra, ba && bv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Ox(a), jr() && a.mode & Ue && aC();
        var f = dR(t);
        if (f !== null) {
          f.flags &= ~xn, pR(f, t, a, e, u), f.mode & Ue && fR(e, s, u), kx(f, e, s);
          return;
        } else {
          if (!fp(u)) {
            fR(e, s, u), F0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & Ue) {
        aC();
        var h = dR(t);
        if (h !== null) {
          (h.flags & tr) === $e && (h.flags |= xn), pR(h, t, a, e, u), Kg(pc(i, a));
          return;
        }
      }
      i = pc(i, a), cD(i);
      var E = t;
      do {
        switch (E.tag) {
          case Z: {
            var C = i;
            E.flags |= tr;
            var k = Do(u);
            E.lanes = st(E.lanes, k);
            var _ = cR(E, C, k);
            fS(E, _);
            return;
          }
          case ue:
            var z = i, H = E.type, V = E.stateNode;
            if ((E.flags & tt) === $e && (typeof H.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !d1(V))) {
              E.flags |= tr;
              var me = Do(u);
              E.lanes = st(E.lanes, me);
              var Ie = a0(E, z, me);
              fS(E, Ie);
              return;
            }
            break;
        }
        E = E.return;
      } while (E !== null);
    }
    function Lx() {
      return null;
    }
    var sv = S.ReactCurrentOwner, fl = !1, i0, cv, l0, u0, o0, vc, s0, oy, fv;
    i0 = {}, cv = {}, l0 = {}, u0 = {}, o0 = {}, vc = !1, s0 = {}, oy = {}, fv = {};
    function Da(e, t, a, i) {
      e === null ? t.child = mC(t, null, a, i) : t.child = ed(t, e.child, a, i);
    }
    function Nx(e, t, a, i) {
      t.child = ed(t, e.child, null, i), t.child = ed(t, null, a, i);
    }
    function vR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f = a.render, p = t.ref, h, E;
      nd(t, u), go(t);
      {
        if (sv.current = t, Zr(!0), h = od(e, t, f, i, p, u), E = sd(), t.mode & Ct) {
          Hn(!0);
          try {
            h = od(e, t, f, i, p, u), E = sd();
          } finally {
            Hn(!1);
          }
        }
        Zr(!1);
      }
      return la(), e !== null && !fl ? (OC(e, t, u), Vu(e, t, u)) : (jr() && E && Ig(t), t.flags |= Al, Da(e, t, h, u), t.child);
    }
    function hR(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (jD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = yd(s), t.tag = je, t.type = f, d0(t, s), mR(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && il(
            p,
            i,
            // Resolved props
            "prop",
            _t(s)
          ), a.defaultProps !== void 0) {
            var h = _t(s) || "Unknown";
            fv[h] || (R("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", h), fv[h] = !0);
          }
        }
        var E = q0(a.type, null, i, t, t.mode, u);
        return E.ref = t.ref, E.return = t, t.child = E, E;
      }
      {
        var C = a.type, k = C.propTypes;
        k && il(
          k,
          i,
          // Resolved props
          "prop",
          _t(C)
        );
      }
      var _ = e.child, z = g0(e, u);
      if (!z) {
        var H = _.memoizedProps, V = a.compare;
        if (V = V !== null ? V : Je, V(H, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= Al;
      var me = Sc(_, i);
      return me.ref = t.ref, me.return = t, t.child = me, me;
    }
    function mR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === qe) {
          var f = s, p = f._payload, h = f._init;
          try {
            s = h(p);
          } catch {
            s = null;
          }
          var E = s && s.propTypes;
          E && il(
            E,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            _t(s)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (Je(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fl = !1, t.pendingProps = i = C, g0(e, u))
            (e.flags & Ns) !== $e && (fl = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return c0(e, t, a, i, u);
    }
    function yR(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || pe)
        if ((t.mode & Ue) === Me) {
          var f = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Cy(t, a);
        } else if (sa(a, br)) {
          var k = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = k;
          var _ = s !== null ? s.baseLanes : a;
          Cy(t, _);
        } else {
          var p = null, h;
          if (s !== null) {
            var E = s.baseLanes;
            h = st(E, a);
          } else
            h = a;
          t.lanes = t.childLanes = br;
          var C = {
            baseLanes: h,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = C, t.updateQueue = null, Cy(t, h), null;
        }
      else {
        var z;
        s !== null ? (z = st(s.baseLanes, a), t.memoizedState = null) : z = a, Cy(t, z);
      }
      return Da(e, t, u, a), t.child;
    }
    function Ux(e, t, a) {
      var i = t.pendingProps;
      return Da(e, t, i, a), t.child;
    }
    function Ax(e, t, a) {
      var i = t.pendingProps.children;
      return Da(e, t, i, a), t.child;
    }
    function zx(e, t, a) {
      {
        t.flags |= ft;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Da(e, t, s, a), t.child;
    }
    function gR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ta, t.flags |= Jd);
    }
    function c0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f;
      {
        var p = Gf(t, a, !0);
        f = Kf(t, p);
      }
      var h, E;
      nd(t, u), go(t);
      {
        if (sv.current = t, Zr(!0), h = od(e, t, a, i, f, u), E = sd(), t.mode & Ct) {
          Hn(!0);
          try {
            h = od(e, t, a, i, f, u), E = sd();
          } finally {
            Hn(!1);
          }
        }
        Zr(!1);
      }
      return la(), e !== null && !fl ? (OC(e, t, u), Vu(e, t, u)) : (jr() && E && Ig(t), t.flags |= Al, Da(e, t, h, u), t.child);
    }
    function SR(e, t, a, i, u) {
      {
        switch (ZD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), h = p.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= tt, t.flags |= tr;
            var E = new Error("Simulated error coming from DevTools"), C = Do(u);
            t.lanes = st(t.lanes, C);
            var k = a0(t, pc(E, t), C);
            fS(t, k);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && il(
            _,
            i,
            // Resolved props
            "prop",
            _t(a)
          );
        }
      }
      var z;
      ql(a) ? (z = !0, Em(t)) : z = !1, nd(t, u);
      var H = t.stateNode, V;
      H === null ? (cy(e, t), oR(t, a, i), t0(t, a, i, u), V = !0) : e === null ? V = bx(t, a, i, u) : V = xx(e, t, a, i, u);
      var me = f0(e, t, a, V, z, u);
      {
        var Ie = t.stateNode;
        V && Ie.props !== i && (vc || R("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", it(t) || "a component"), vc = !0);
      }
      return me;
    }
    function f0(e, t, a, i, u, s) {
      gR(e, t);
      var f = (t.flags & tt) !== $e;
      if (!i && !f)
        return u && eC(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      sv.current = t;
      var h;
      if (f && typeof a.getDerivedStateFromError != "function")
        h = null, rR();
      else {
        go(t);
        {
          if (Zr(!0), h = p.render(), t.mode & Ct) {
            Hn(!0);
            try {
              p.render();
            } finally {
              Hn(!1);
            }
          }
          Zr(!1);
        }
        la();
      }
      return t.flags |= Al, e !== null && f ? Nx(e, t, h, s) : Da(e, t, h, s), t.memoizedState = p.state, u && eC(t, a, !0), t.child;
    }
    function ER(e) {
      var t = e.stateNode;
      t.pendingContext ? JE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && JE(e, t.context, !1), dS(e, t.containerInfo);
    }
    function Fx(e, t, a) {
      if (ER(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      TC(e, t), Fm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var h = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, E = t.updateQueue;
        if (E.baseState = h, t.memoizedState = h, t.flags & xn) {
          var C = pc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return CR(e, t, p, a, C);
        } else if (p !== s) {
          var k = pc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return CR(e, t, p, a, k);
        } else {
          Pb(t);
          var _ = mC(t, null, p, a);
          t.child = _;
          for (var z = _; z; )
            z.flags = z.flags & ~cn | Ba, z = z.sibling;
        }
      } else {
        if (Zf(), p === s)
          return Vu(e, t, a);
        Da(e, t, p, a);
      }
      return t.child;
    }
    function CR(e, t, a, i, u) {
      return Zf(), Kg(u), t.flags |= xn, Da(e, t, a, i), t.child;
    }
    function jx(e, t, a) {
      _C(t), e === null && Gg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Og(i, u);
      return p ? f = null : s !== null && Og(i, s) && (t.flags |= qt), gR(e, t), Da(e, t, f, a), t.child;
    }
    function Hx(e, t) {
      return e === null && Gg(t), null;
    }
    function Px(e, t, a, i) {
      cy(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, h = p(f);
      t.type = h;
      var E = t.tag = HD(h), C = cl(h, u), k;
      switch (E) {
        case te:
          return d0(t, h), t.type = h = yd(h), k = c0(null, t, h, C, i), k;
        case ue:
          return t.type = h = B0(h), k = SR(null, t, h, C, i), k;
        case Re:
          return t.type = h = $0(h), k = vR(null, t, h, C, i), k;
        case Xe: {
          if (t.type !== t.elementType) {
            var _ = h.propTypes;
            _ && il(
              _,
              C,
              // Resolved for outer only
              "prop",
              _t(h)
            );
          }
          return k = hR(
            null,
            t,
            h,
            cl(h.type, C),
            // The inner type can have defaults too
            i
          ), k;
        }
      }
      var z = "";
      throw h !== null && typeof h == "object" && h.$$typeof === qe && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function Vx(e, t, a, i, u) {
      cy(e, t), t.tag = ue;
      var s;
      return ql(a) ? (s = !0, Em(t)) : s = !1, nd(t, u), oR(t, a, i), t0(t, a, i, u), f0(null, t, a, !0, s, u);
    }
    function Bx(e, t, a, i) {
      cy(e, t);
      var u = t.pendingProps, s;
      {
        var f = Gf(t, a, !1);
        s = Kf(t, f);
      }
      nd(t, i);
      var p, h;
      go(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var E = _t(a) || "Unknown";
          i0[E] || (R("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), i0[E] = !0);
        }
        t.mode & Ct && ul.recordLegacyContextWarning(t, null), Zr(!0), sv.current = t, p = od(null, t, a, u, s, i), h = sd(), Zr(!1);
      }
      if (la(), t.flags |= Al, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var C = _t(a) || "Unknown";
        cv[C] || (R("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), cv[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var k = _t(a) || "Unknown";
          cv[k] || (R("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", k, k, k), cv[k] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return ql(a) ? (_ = !0, Em(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, cS(t), uR(t, p), t0(t, a, u, i), f0(null, t, a, !0, _, i);
      } else {
        if (t.tag = te, t.mode & Ct) {
          Hn(!0);
          try {
            p = od(null, t, a, u, s, i), h = sd();
          } finally {
            Hn(!1);
          }
        }
        return jr() && h && Ig(t), Da(null, t, p, i), d0(t, a), t.child;
      }
    }
    function d0(e, t) {
      {
        if (t && t.childContextTypes && R("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ar();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), o0[u] || (o0[u] = !0, R("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = _t(t) || "Unknown";
          fv[f] || (R("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), fv[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = _t(t) || "Unknown";
          u0[p] || (R("%s: Function components do not support getDerivedStateFromProps.", p), u0[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = _t(t) || "Unknown";
          l0[h] || (R("%s: Function components do not support contextType.", h), l0[h] = !0);
        }
      }
    }
    var p0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Pn
    };
    function v0(e) {
      return {
        baseLanes: e,
        cachePool: Lx(),
        transitions: null
      };
    }
    function $x(e, t) {
      var a = null;
      return {
        baseLanes: st(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Ix(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return hS(e, ev);
    }
    function Yx(e, t) {
      return $s(e.childLanes, t);
    }
    function RR(e, t, a) {
      var i = t.pendingProps;
      ek(t) && (t.flags |= tt);
      var u = ol.current, s = !1, f = (t.flags & tt) !== $e;
      if (f || Ix(u, e) ? (s = !0, t.flags &= ~tt) : (e === null || e.memoizedState !== null) && (u = sx(u, kC)), u = ad(u), Zo(t, u), e === null) {
        Gg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var h = p.dehydrated;
          if (h !== null)
            return Kx(t, h);
        }
        var E = i.children, C = i.fallback;
        if (s) {
          var k = Qx(t, E, C, a), _ = t.child;
          return _.memoizedState = v0(a), t.memoizedState = p0, k;
        } else
          return h0(t, E);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var H = z.dehydrated;
          if (H !== null)
            return Xx(e, t, f, i, H, z, a);
        }
        if (s) {
          var V = i.fallback, me = i.children, Ie = qx(e, t, me, V, a), Ae = t.child, Mt = e.child.memoizedState;
          return Ae.memoizedState = Mt === null ? v0(a) : $x(Mt, a), Ae.childLanes = Yx(e, a), t.memoizedState = p0, Ie;
        } else {
          var wt = i.children, N = Wx(e, t, wt, a);
          return t.memoizedState = null, N;
        }
      }
    }
    function h0(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = m0(u, i);
      return s.return = e, e.child = s, s;
    }
    function Qx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, h;
      return (u & Ue) === Me && s !== null ? (p = s, p.childLanes = Q, p.pendingProps = f, e.mode & nt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), h = us(a, u, i, null)) : (p = m0(f, u), h = us(a, u, i, null)), p.return = e, h.return = e, p.sibling = h, e.child = p, h;
    }
    function m0(e, t, a) {
      return T1(e, t, Q, null);
    }
    function TR(e, t) {
      return Sc(e, t);
    }
    function Wx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = TR(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ue) === Me && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Vt) : p.push(s);
      }
      return t.child = f, f;
    }
    function qx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, h = {
        mode: "hidden",
        children: a
      }, E;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ue) === Me && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var C = t.child;
        E = C, E.childLanes = Q, E.pendingProps = h, t.mode & nt && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = f.selfBaseDuration, E.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        E = TR(f, h), E.subtreeFlags = f.subtreeFlags & ur;
      var k;
      return p !== null ? k = Sc(p, i) : (k = us(i, s, u, null), k.flags |= cn), k.return = t, E.return = t, E.sibling = k, t.child = E, k;
    }
    function sy(e, t, a, i) {
      i !== null && Kg(i), ed(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = h0(t, s);
      return f.flags |= cn, t.memoizedState = null, f;
    }
    function Gx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = m0(f, s), h = us(i, s, u, null);
      return h.flags |= cn, p.return = t, h.return = t, p.sibling = h, t.child = p, (t.mode & Ue) !== Me && ed(t, e.child, null, u), h;
    }
    function Kx(e, t, a) {
      return (e.mode & Ue) === Me ? (R("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Pe) : Ug(t) ? e.lanes = el : e.lanes = br, null;
    }
    function Xx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & xn) {
          t.flags &= ~xn;
          var N = n0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return sy(e, t, f, N);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= tt, null;
          var B = i.children, U = i.fallback, J = Gx(e, t, B, U, f), Ce = t.child;
          return Ce.memoizedState = v0(f), t.memoizedState = p0, J;
        }
      else {
        if (jb(), (t.mode & Ue) === Me)
          return sy(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ug(u)) {
          var p, h, E;
          {
            var C = tb(u);
            p = C.digest, h = C.message, E = C.stack;
          }
          var k;
          h ? k = new Error(h) : k = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = n0(k, p, E);
          return sy(e, t, f, _);
        }
        var z = sa(f, e.childLanes);
        if (fl || z) {
          var H = Ey();
          if (H !== null) {
            var V = Ah(H, f);
            if (V !== Pn && V !== s.retryLane) {
              s.retryLane = V;
              var me = on;
              ei(e, V), yr(H, e, V, me);
            }
          }
          F0();
          var Ie = n0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return sy(e, t, f, Ie);
        } else if (QE(u)) {
          t.flags |= tt, t.child = e.child;
          var Ae = RD.bind(null, e);
          return nb(u, Ae), null;
        } else {
          Vb(t, u, s.treeContext);
          var Mt = i.children, wt = h0(t, Mt);
          return wt.flags |= Ba, wt;
        }
      }
    }
    function wR(e, t, a) {
      e.lanes = st(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = st(i.lanes, t)), lS(e.return, t, a);
    }
    function Jx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ye) {
          var u = i.memoizedState;
          u !== null && wR(i, a, e);
        } else if (i.tag === yt)
          wR(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Zx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Vm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function e_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !s0[e])
        if (s0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              R('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              R('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              R('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          R('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function t_(e, t) {
      e !== void 0 && !oy[e] && (e !== "collapsed" && e !== "hidden" ? (oy[e] = !0, R('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (oy[e] = !0, R('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function bR(e, t) {
      {
        var a = Dt(e), i = !a && typeof Lr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return R("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function n_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Dt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!bR(e[a], a))
              return;
        } else {
          var i = Lr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!bR(s.value, f))
                  return;
                f++;
              }
          } else
            R('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function y0(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function xR(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      e_(u), t_(s, u), n_(f, u), Da(e, t, f, a);
      var p = ol.current, h = hS(p, ev);
      if (h)
        p = mS(p, ev), t.flags |= tt;
      else {
        var E = e !== null && (e.flags & tt) !== $e;
        E && Jx(t, t.child, a), p = ad(p);
      }
      if (Zo(t, p), (t.mode & Ue) === Me)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var C = Zx(t.child), k;
            C === null ? (k = t.child, t.child = null) : (k = C.sibling, C.sibling = null), y0(
              t,
              !1,
              // isBackwards
              k,
              C,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var H = z.alternate;
              if (H !== null && Vm(H) === null) {
                t.child = z;
                break;
              }
              var V = z.sibling;
              z.sibling = _, _ = z, z = V;
            }
            y0(
              t,
              !0,
              // isBackwards
              _,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            y0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function r_(e, t, a) {
      dS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = ed(t, null, i, a) : Da(e, t, i, a), t.child;
    }
    var _R = !1;
    function a_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || _R || (_R = !0, R("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && il(h, s, "prop", "Context.Provider");
      }
      if (SC(t, u, p), f !== null) {
        var E = f.value;
        if (xe(E, p)) {
          if (f.children === s.children && !gm())
            return Vu(e, t, a);
        } else
          ex(t, u, a);
      }
      var C = s.children;
      return Da(e, t, C, a), t.child;
    }
    var DR = !1;
    function i_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (DR || (DR = !0, R("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && R("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), nd(t, a);
      var f = ir(i);
      go(t);
      var p;
      return sv.current = t, Zr(!0), p = s(f), Zr(!1), la(), t.flags |= Al, Da(e, t, p, a), t.child;
    }
    function dv() {
      fl = !0;
    }
    function cy(e, t) {
      (t.mode & Ue) === Me && e !== null && (e.alternate = null, t.alternate = null, t.flags |= cn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), rR(), wv(t.lanes), sa(a, t.childLanes) ? (Jb(e, t), t.child) : null;
    }
    function l_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Vt) : s.push(e), a.flags |= cn, a;
      }
    }
    function g0(e, t) {
      var a = e.lanes;
      return !!sa(a, t);
    }
    function u_(e, t, a) {
      switch (t.tag) {
        case Z:
          ER(t), t.stateNode, Zf();
          break;
        case le:
          _C(t);
          break;
        case ue: {
          var i = t.type;
          ql(i) && Em(t);
          break;
        }
        case oe:
          dS(t, t.stateNode.containerInfo);
          break;
        case Be: {
          var u = t.memoizedProps.value, s = t.type._context;
          SC(t, s, u);
          break;
        }
        case se:
          {
            var f = sa(a, t.childLanes);
            f && (t.flags |= ft);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ye: {
          var h = t.memoizedState;
          if (h !== null) {
            if (h.dehydrated !== null)
              return Zo(t, ad(ol.current)), t.flags |= tt, null;
            var E = t.child, C = E.childLanes;
            if (sa(a, C))
              return RR(e, t, a);
            Zo(t, ad(ol.current));
            var k = Vu(e, t, a);
            return k !== null ? k.sibling : null;
          } else
            Zo(t, ad(ol.current));
          break;
        }
        case yt: {
          var _ = (e.flags & tt) !== $e, z = sa(a, t.childLanes);
          if (_) {
            if (z)
              return xR(e, t, a);
            t.flags |= tt;
          }
          var H = t.memoizedState;
          if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), Zo(t, ol.current), z)
            break;
          return null;
        }
        case Qe:
        case ct:
          return t.lanes = Q, yR(e, t, a);
      }
      return Vu(e, t, a);
    }
    function kR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return l_(e, t, q0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || gm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fl = !0;
        else {
          var s = g0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & tt) === $e)
            return fl = !1, u_(e, t, a);
          (e.flags & Ns) !== $e ? fl = !0 : fl = !1;
        }
      } else if (fl = !1, jr() && Lb(t)) {
        var f = t.index, p = Nb();
        rC(t, p, f);
      }
      switch (t.lanes = Q, t.tag) {
        case ze:
          return Bx(e, t, t.type, a);
        case Bt: {
          var h = t.elementType;
          return Px(e, t, h, a);
        }
        case te: {
          var E = t.type, C = t.pendingProps, k = t.elementType === E ? C : cl(E, C);
          return c0(e, t, E, k, a);
        }
        case ue: {
          var _ = t.type, z = t.pendingProps, H = t.elementType === _ ? z : cl(_, z);
          return SR(e, t, _, H, a);
        }
        case Z:
          return Fx(e, t, a);
        case le:
          return jx(e, t, a);
        case Oe:
          return Hx(e, t);
        case ye:
          return RR(e, t, a);
        case oe:
          return r_(e, t, a);
        case Re: {
          var V = t.type, me = t.pendingProps, Ie = t.elementType === V ? me : cl(V, me);
          return vR(e, t, V, Ie, a);
        }
        case De:
          return Ux(e, t, a);
        case Ve:
          return Ax(e, t, a);
        case se:
          return zx(e, t, a);
        case Be:
          return a_(e, t, a);
        case ot:
          return i_(e, t, a);
        case Xe: {
          var Ae = t.type, Mt = t.pendingProps, wt = cl(Ae, Mt);
          if (t.type !== t.elementType) {
            var N = Ae.propTypes;
            N && il(
              N,
              wt,
              // Resolved for outer only
              "prop",
              _t(Ae)
            );
          }
          return wt = cl(Ae.type, wt), hR(e, t, Ae, wt, a);
        }
        case je:
          return mR(e, t, t.type, t.pendingProps, a);
        case en: {
          var B = t.type, U = t.pendingProps, J = t.elementType === B ? U : cl(B, U);
          return Vx(e, t, B, J, a);
        }
        case yt:
          return xR(e, t, a);
        case wn:
          break;
        case Qe:
          return yR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function cd(e) {
      e.flags |= ft;
    }
    function OR(e) {
      e.flags |= ta, e.flags |= Jd;
    }
    var MR, S0, LR, NR;
    MR = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === Oe)
          kw(e, u.stateNode);
        else if (u.tag !== oe) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, S0 = function(e, t) {
    }, LR = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = pS(), h = Mw(f, a, s, i, u, p);
        t.updateQueue = h, h && cd(t);
      }
    }, NR = function(e, t, a, i) {
      a !== i && cd(t);
    };
    function pv(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Pr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Q, i = $e;
      if (t) {
        if ((e.mode & nt) !== Me) {
          for (var h = e.selfBaseDuration, E = e.child; E !== null; )
            a = st(a, st(E.lanes, E.childLanes)), i |= E.subtreeFlags & ur, i |= E.flags & ur, h += E.treeBaseDuration, E = E.sibling;
          e.treeBaseDuration = h;
        } else
          for (var C = e.child; C !== null; )
            a = st(a, st(C.lanes, C.childLanes)), i |= C.subtreeFlags & ur, i |= C.flags & ur, C.return = e, C = C.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & nt) !== Me) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = st(a, st(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = st(a, st(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function o_(e, t, a) {
      if (Qb() && (t.mode & Ue) !== Me && (t.flags & tt) === $e)
        return cC(t), Zf(), t.flags |= xn | Ra | tr, !1;
      var i = bm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Ib(t), Pr(t), (t.mode & nt) !== Me) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Zf(), (t.flags & tt) === $e && (t.memoizedState = null), t.flags |= ft, Pr(t), (t.mode & nt) !== Me) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return fC(), !0;
    }
    function UR(e, t, a) {
      var i = t.pendingProps;
      switch (Yg(t), t.tag) {
        case ze:
        case Bt:
        case je:
        case te:
        case Re:
        case De:
        case Ve:
        case se:
        case ot:
        case Xe:
          return Pr(t), null;
        case ue: {
          var u = t.type;
          return ql(u) && Sm(t), Pr(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (rd(t), Vg(t), gS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = bm(t);
            if (f)
              cd(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & xn) !== $e) && (t.flags |= Va, fC());
            }
          }
          return S0(e, t), Pr(t), null;
        }
        case le: {
          vS(t);
          var h = xC(), E = t.type;
          if (e !== null && t.stateNode != null)
            LR(e, t, E, i, h), e.ref !== t.ref && OR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Pr(t), null;
            }
            var C = pS(), k = bm(t);
            if (k)
              Bb(t, h, C) && cd(t);
            else {
              var _ = Dw(E, i, h, C, t);
              MR(_, t, !1, !1), t.stateNode = _, Ow(_, E, i, h) && cd(t);
            }
            t.ref !== null && OR(t);
          }
          return Pr(t), null;
        }
        case Oe: {
          var z = i;
          if (e && t.stateNode != null) {
            var H = e.memoizedProps;
            NR(e, t, H, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = xC(), me = pS(), Ie = bm(t);
            Ie ? $b(t) && cd(t) : t.stateNode = Lw(z, V, me, t);
          }
          return Pr(t), null;
        }
        case ye: {
          id(t);
          var Ae = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Mt = o_(e, t, Ae);
            if (!Mt)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & tt) !== $e)
            return t.lanes = a, (t.mode & nt) !== Me && $S(t), t;
          var wt = Ae !== null, N = e !== null && e.memoizedState !== null;
          if (wt !== N && wt) {
            var B = t.child;
            if (B.flags |= zl, (t.mode & Ue) !== Me) {
              var U = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !M);
              U || hS(ol.current, kC) ? sD() : F0();
            }
          }
          var J = t.updateQueue;
          if (J !== null && (t.flags |= ft), Pr(t), (t.mode & nt) !== Me && wt) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case oe:
          return rd(t), S0(e, t), e === null && bb(t.stateNode.containerInfo), Pr(t), null;
        case Be:
          var ge = t.type._context;
          return iS(ge, t), Pr(t), null;
        case en: {
          var et = t.type;
          return ql(et) && Sm(t), Pr(t), null;
        }
        case yt: {
          id(t);
          var ut = t.memoizedState;
          if (ut === null)
            return Pr(t), null;
          var Zt = (t.flags & tt) !== $e, jt = ut.rendering;
          if (jt === null)
            if (Zt)
              pv(ut, !1);
            else {
              var Gn = fD() && (e === null || (e.flags & tt) === $e);
              if (!Gn)
                for (var Ht = t.child; Ht !== null; ) {
                  var Vn = Vm(Ht);
                  if (Vn !== null) {
                    Zt = !0, t.flags |= tt, pv(ut, !1);
                    var va = Vn.updateQueue;
                    return va !== null && (t.updateQueue = va, t.flags |= ft), t.subtreeFlags = $e, Zb(t, a), Zo(t, mS(ol.current, ev)), t.child;
                  }
                  Ht = Ht.sibling;
                }
              ut.tail !== null && Cn() > t1() && (t.flags |= tt, Zt = !0, pv(ut, !1), t.lanes = wh);
            }
          else {
            if (!Zt) {
              var Yr = Vm(jt);
              if (Yr !== null) {
                t.flags |= tt, Zt = !0;
                var yi = Yr.updateQueue;
                if (yi !== null && (t.updateQueue = yi, t.flags |= ft), pv(ut, !0), ut.tail === null && ut.tailMode === "hidden" && !jt.alternate && !jr())
                  return Pr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Cn() * 2 - ut.renderingStartTime > t1() && a !== br && (t.flags |= tt, Zt = !0, pv(ut, !1), t.lanes = wh);
            }
            if (ut.isBackwards)
              jt.sibling = t.child, t.child = jt;
            else {
              var Ma = ut.last;
              Ma !== null ? Ma.sibling = jt : t.child = jt, ut.last = jt;
            }
          }
          if (ut.tail !== null) {
            var La = ut.tail;
            ut.rendering = La, ut.tail = La.sibling, ut.renderingStartTime = Cn(), La.sibling = null;
            var ha = ol.current;
            return Zt ? ha = mS(ha, ev) : ha = ad(ha), Zo(t, ha), La;
          }
          return Pr(t), null;
        }
        case wn:
          break;
        case Qe:
        case ct: {
          z0(t);
          var Qu = t.memoizedState, gd = Qu !== null;
          if (e !== null) {
            var kv = e.memoizedState, nu = kv !== null;
            nu !== gd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !pe && (t.flags |= zl);
          }
          return !gd || (t.mode & Ue) === Me ? Pr(t) : sa(tu, br) && (Pr(t), t.subtreeFlags & (cn | ft) && (t.flags |= zl)), null;
        }
        case $t:
          return null;
        case Lt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function s_(e, t, a) {
      switch (Yg(t), t.tag) {
        case ue: {
          var i = t.type;
          ql(i) && Sm(t);
          var u = t.flags;
          return u & tr ? (t.flags = u & ~tr | tt, (t.mode & nt) !== Me && $S(t), t) : null;
        }
        case Z: {
          t.stateNode, rd(t), Vg(t), gS();
          var s = t.flags;
          return (s & tr) !== $e && (s & tt) === $e ? (t.flags = s & ~tr | tt, t) : null;
        }
        case le:
          return vS(t), null;
        case ye: {
          id(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Zf();
          }
          var p = t.flags;
          return p & tr ? (t.flags = p & ~tr | tt, (t.mode & nt) !== Me && $S(t), t) : null;
        }
        case yt:
          return id(t), null;
        case oe:
          return rd(t), null;
        case Be:
          var h = t.type._context;
          return iS(h, t), null;
        case Qe:
        case ct:
          return z0(t), null;
        case $t:
          return null;
        default:
          return null;
      }
    }
    function AR(e, t, a) {
      switch (Yg(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && Sm(t);
          break;
        }
        case Z: {
          t.stateNode, rd(t), Vg(t), gS();
          break;
        }
        case le: {
          vS(t);
          break;
        }
        case oe:
          rd(t);
          break;
        case ye:
          id(t);
          break;
        case yt:
          id(t);
          break;
        case Be:
          var u = t.type._context;
          iS(u, t);
          break;
        case Qe:
        case ct:
          z0(t);
          break;
      }
    }
    var zR = null;
    zR = /* @__PURE__ */ new Set();
    var fy = !1, Vr = !1, c_ = typeof WeakSet == "function" ? WeakSet : Set, _e = null, fd = null, dd = null;
    function f_(e) {
      yu(null, function() {
        throw e;
      }), Kd();
    }
    var d_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & nt)
        try {
          Zl(), t.componentWillUnmount();
        } finally {
          Jl(e);
        }
      else
        t.componentWillUnmount();
    };
    function FR(e, t) {
      try {
        ns(fr, e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function E0(e, t, a) {
      try {
        d_(e, a);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function p_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        pn(e, t, i);
      }
    }
    function jR(e, t) {
      try {
        PR(e);
      } catch (a) {
        pn(e, t, a);
      }
    }
    function pd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (dt && bt && e.mode & nt)
              try {
                Zl(), i = a(null);
              } finally {
                Jl(e);
              }
            else
              i = a(null);
          } catch (u) {
            pn(e, t, u);
          }
          typeof i == "function" && R("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", it(e));
        } else
          a.current = null;
    }
    function dy(e, t, a) {
      try {
        a();
      } catch (i) {
        pn(e, t, i);
      }
    }
    var HR = !1;
    function v_(e, t) {
      xw(e.containerInfo), _e = t, h_();
      var a = HR;
      return HR = !1, a;
    }
    function h_() {
      for (; _e !== null; ) {
        var e = _e, t = e.child;
        (e.subtreeFlags & ho) !== $e && t !== null ? (t.return = e, _e = t) : m_();
      }
    }
    function m_() {
      for (; _e !== null; ) {
        var e = _e;
        Wt(e);
        try {
          y_(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        bn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, _e = t;
          return;
        }
        _e = e.return;
      }
    }
    function y_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Va) !== $e) {
        switch (Wt(e), e.tag) {
          case te:
          case Re:
          case je:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !vc && (s.props !== e.memoizedProps && R("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(e) || "instance"), s.state !== e.memoizedState && R("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : cl(e.type, i), u);
              {
                var p = zR;
                f === void 0 && !p.has(e.type) && (p.add(e.type), R("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", it(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var h = e.stateNode;
              Xw(h.containerInfo);
            }
            break;
          }
          case le:
          case Oe:
          case oe:
          case en:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        bn();
      }
    }
    function dl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Hr) !== ti ? Ch(t) : (e & fr) !== ti && vi(t), (e & Gl) !== ti && xv(!0), dy(t, a, p), (e & Gl) !== ti && xv(!1), (e & Hr) !== ti ? Jc() : (e & fr) !== ti && So());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function ns(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Hr) !== ti ? Hl(t) : (e & fr) !== ti && Rh(t);
            var f = s.create;
            (e & Gl) !== ti && xv(!0), s.destroy = f(), (e & Gl) !== ti && xv(!1), (e & Hr) !== ti ? Xc() : (e & fr) !== ti && Us();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var h = void 0;
                (s.tag & fr) !== $e ? h = "useLayoutEffect" : (s.tag & Gl) !== $e ? h = "useInsertionEffect" : h = "useEffect";
                var E = void 0;
                p === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? E = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + p, R("%s must not return anything besides a function, which is used for clean-up.%s", h, E);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function g_(e, t) {
      if ((t.flags & ft) !== $e)
        switch (t.tag) {
          case se: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = tR(), p = t.alternate === null ? "mount" : "update";
            eR() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var h = t.return;
            e: for (; h !== null; ) {
              switch (h.tag) {
                case Z:
                  var E = h.stateNode;
                  E.passiveEffectDuration += a;
                  break e;
                case se:
                  var C = h.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
              }
              h = h.return;
            }
            break;
          }
        }
    }
    function S_(e, t, a, i) {
      if ((a.flags & Tr) !== $e)
        switch (a.tag) {
          case te:
          case Re:
          case je: {
            if (!Vr)
              if (a.mode & nt)
                try {
                  Zl(), ns(fr | cr, a);
                } finally {
                  Jl(a);
                }
              else
                ns(fr | cr, a);
            break;
          }
          case ue: {
            var u = a.stateNode;
            if (a.flags & ft && !Vr)
              if (t === null)
                if (a.type === a.elementType && !vc && (u.props !== a.memoizedProps && R("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(a) || "instance"), u.state !== a.memoizedState && R("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(a) || "instance")), a.mode & nt)
                  try {
                    Zl(), u.componentDidMount();
                  } finally {
                    Jl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : cl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !vc && (u.props !== a.memoizedProps && R("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(a) || "instance"), u.state !== a.memoizedState && R("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(a) || "instance")), a.mode & nt)
                  try {
                    Zl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Jl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !vc && (u.props !== a.memoizedProps && R("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(a) || "instance"), u.state !== a.memoizedState && R("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(a) || "instance")), bC(a, p, u));
            break;
          }
          case Z: {
            var h = a.updateQueue;
            if (h !== null) {
              var E = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    E = a.child.stateNode;
                    break;
                  case ue:
                    E = a.child.stateNode;
                    break;
                }
              bC(a, h, E);
            }
            break;
          }
          case le: {
            var C = a.stateNode;
            if (t === null && a.flags & ft) {
              var k = a.type, _ = a.memoizedProps;
              Fw(C, k, _);
            }
            break;
          }
          case Oe:
            break;
          case oe:
            break;
          case se: {
            {
              var z = a.memoizedProps, H = z.onCommit, V = z.onRender, me = a.stateNode.effectDuration, Ie = tR(), Ae = t === null ? "mount" : "update";
              eR() && (Ae = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, Ae, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ie);
              {
                typeof H == "function" && H(a.memoizedProps.id, Ae, me, Ie), mD(a);
                var Mt = a.return;
                e: for (; Mt !== null; ) {
                  switch (Mt.tag) {
                    case Z:
                      var wt = Mt.stateNode;
                      wt.effectDuration += me;
                      break e;
                    case se:
                      var N = Mt.stateNode;
                      N.effectDuration += me;
                      break e;
                  }
                  Mt = Mt.return;
                }
              }
            }
            break;
          }
          case ye: {
            __(e, a);
            break;
          }
          case yt:
          case en:
          case wn:
          case Qe:
          case ct:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vr || a.flags & ta && PR(a);
    }
    function E_(e) {
      switch (e.tag) {
        case te:
        case Re:
        case je: {
          if (e.mode & nt)
            try {
              Zl(), FR(e, e.return);
            } finally {
              Jl(e);
            }
          else
            FR(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && p_(e, e.return, t), jR(e, e.return);
          break;
        }
        case le: {
          jR(e, e.return);
          break;
        }
      }
    }
    function C_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Ww(u) : Gw(i.stateNode, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
          }
        } else if (i.tag === Oe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? qw(s) : Kw(s, i.memoizedProps);
            } catch (f) {
              pn(e, e.return, f);
            }
        } else if (!((i.tag === Qe || i.tag === ct) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function PR(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case le:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & nt)
            try {
              Zl(), u = t(i);
            } finally {
              Jl(e);
            }
          else
            u = t(i);
          typeof u == "function" && R("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", it(e));
        } else
          t.hasOwnProperty("current") || R("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", it(e)), t.current = i;
      }
    }
    function R_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function VR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, VR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && Db(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function T_(e) {
      for (var t = e.return; t !== null; ) {
        if (BR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function BR(e) {
      return e.tag === le || e.tag === Z || e.tag === oe;
    }
    function $R(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || BR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== Oe && t.tag !== rt; ) {
          if (t.flags & cn || t.child === null || t.tag === oe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & cn))
          return t.stateNode;
      }
    }
    function w_(e) {
      var t = T_(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & qt && (YE(a), t.flags &= ~qt);
          var i = $R(e);
          R0(e, i, a);
          break;
        }
        case Z:
        case oe: {
          var u = t.stateNode.containerInfo, s = $R(e);
          C0(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function C0(e, t, a) {
      var i = e.tag, u = i === le || i === Oe;
      if (u) {
        var s = e.stateNode;
        t ? $w(a, s, t) : Vw(a, s);
      } else if (i !== oe) {
        var f = e.child;
        if (f !== null) {
          C0(f, t, a);
          for (var p = f.sibling; p !== null; )
            C0(p, t, a), p = p.sibling;
        }
      }
    }
    function R0(e, t, a) {
      var i = e.tag, u = i === le || i === Oe;
      if (u) {
        var s = e.stateNode;
        t ? Bw(a, s, t) : Pw(a, s);
      } else if (i !== oe) {
        var f = e.child;
        if (f !== null) {
          R0(f, t, a);
          for (var p = f.sibling; p !== null; )
            R0(p, t, a), p = p.sibling;
        }
      }
    }
    var Br = null, pl = !1;
    function b_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case le: {
              Br = i.stateNode, pl = !1;
              break e;
            }
            case Z: {
              Br = i.stateNode.containerInfo, pl = !0;
              break e;
            }
            case oe: {
              Br = i.stateNode.containerInfo, pl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        IR(e, t, a), Br = null, pl = !1;
      }
      R_(a);
    }
    function rs(e, t, a) {
      for (var i = a.child; i !== null; )
        IR(e, t, i), i = i.sibling;
    }
    function IR(e, t, a) {
      switch (Eu(a), a.tag) {
        case le:
          Vr || pd(a, t);
        case Oe: {
          {
            var i = Br, u = pl;
            Br = null, rs(e, t, a), Br = i, pl = u, Br !== null && (pl ? Yw(Br, a.stateNode) : Iw(Br, a.stateNode));
          }
          return;
        }
        case rt: {
          Br !== null && (pl ? Qw(Br, a.stateNode) : Ng(Br, a.stateNode));
          return;
        }
        case oe: {
          {
            var s = Br, f = pl;
            Br = a.stateNode.containerInfo, pl = !0, rs(e, t, a), Br = s, pl = f;
          }
          return;
        }
        case te:
        case Re:
        case Xe:
        case je: {
          if (!Vr) {
            var p = a.updateQueue;
            if (p !== null) {
              var h = p.lastEffect;
              if (h !== null) {
                var E = h.next, C = E;
                do {
                  var k = C, _ = k.destroy, z = k.tag;
                  _ !== void 0 && ((z & Gl) !== ti ? dy(a, t, _) : (z & fr) !== ti && (vi(a), a.mode & nt ? (Zl(), dy(a, t, _), Jl(a)) : dy(a, t, _), So())), C = C.next;
                } while (C !== E);
              }
            }
          }
          rs(e, t, a);
          return;
        }
        case ue: {
          if (!Vr) {
            pd(a, t);
            var H = a.stateNode;
            typeof H.componentWillUnmount == "function" && E0(a, t, H);
          }
          rs(e, t, a);
          return;
        }
        case wn: {
          rs(e, t, a);
          return;
        }
        case Qe: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ue
          ) {
            var V = Vr;
            Vr = V || a.memoizedState !== null, rs(e, t, a), Vr = V;
          } else
            rs(e, t, a);
          break;
        }
        default: {
          rs(e, t, a);
          return;
        }
      }
    }
    function x_(e) {
      e.memoizedState;
    }
    function __(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && fb(s);
          }
        }
      }
    }
    function YR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new c_()), t.forEach(function(i) {
          var u = TD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ba)
              if (fd !== null && dd !== null)
                bv(dd, fd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function D_(e, t, a) {
      fd = a, dd = e, Wt(t), QR(t, e), Wt(t), fd = null, dd = null;
    }
    function vl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            b_(e, t, s);
          } catch (h) {
            pn(s, t, h);
          }
        }
      var f = kc();
      if (t.subtreeFlags & aa)
        for (var p = t.child; p !== null; )
          Wt(p), QR(p, e), p = p.sibling;
      Wt(f);
    }
    function QR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case te:
        case Re:
        case Xe:
        case je: {
          if (vl(t, e), eu(e), u & ft) {
            try {
              dl(Gl | cr, e, e.return), ns(Gl | cr, e);
            } catch (et) {
              pn(e, e.return, et);
            }
            if (e.mode & nt) {
              try {
                Zl(), dl(fr | cr, e, e.return);
              } catch (et) {
                pn(e, e.return, et);
              }
              Jl(e);
            } else
              try {
                dl(fr | cr, e, e.return);
              } catch (et) {
                pn(e, e.return, et);
              }
          }
          return;
        }
        case ue: {
          vl(t, e), eu(e), u & ta && i !== null && pd(i, i.return);
          return;
        }
        case le: {
          vl(t, e), eu(e), u & ta && i !== null && pd(i, i.return);
          {
            if (e.flags & qt) {
              var s = e.stateNode;
              try {
                YE(s);
              } catch (et) {
                pn(e, e.return, et);
              }
            }
            if (u & ft) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, h = i !== null ? i.memoizedProps : p, E = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    jw(f, C, E, h, p, e);
                  } catch (et) {
                    pn(e, e.return, et);
                  }
              }
            }
          }
          return;
        }
        case Oe: {
          if (vl(t, e), eu(e), u & ft) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var k = e.stateNode, _ = e.memoizedProps, z = i !== null ? i.memoizedProps : _;
            try {
              Hw(k, z, _);
            } catch (et) {
              pn(e, e.return, et);
            }
          }
          return;
        }
        case Z: {
          if (vl(t, e), eu(e), u & ft && i !== null) {
            var H = i.memoizedState;
            if (H.isDehydrated)
              try {
                cb(t.containerInfo);
              } catch (et) {
                pn(e, e.return, et);
              }
          }
          return;
        }
        case oe: {
          vl(t, e), eu(e);
          return;
        }
        case ye: {
          vl(t, e), eu(e);
          var V = e.child;
          if (V.flags & zl) {
            var me = V.stateNode, Ie = V.memoizedState, Ae = Ie !== null;
            if (me.isHidden = Ae, Ae) {
              var Mt = V.alternate !== null && V.alternate.memoizedState !== null;
              Mt || oD();
            }
          }
          if (u & ft) {
            try {
              x_(e);
            } catch (et) {
              pn(e, e.return, et);
            }
            YR(e);
          }
          return;
        }
        case Qe: {
          var wt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ue
          ) {
            var N = Vr;
            Vr = N || wt, vl(t, e), Vr = N;
          } else
            vl(t, e);
          if (eu(e), u & zl) {
            var B = e.stateNode, U = e.memoizedState, J = U !== null, Ce = e;
            if (B.isHidden = J, J && !wt && (Ce.mode & Ue) !== Me) {
              _e = Ce;
              for (var ge = Ce.child; ge !== null; )
                _e = ge, O_(ge), ge = ge.sibling;
            }
            C_(Ce, J);
          }
          return;
        }
        case yt: {
          vl(t, e), eu(e), u & ft && YR(e);
          return;
        }
        case wn:
          return;
        default: {
          vl(t, e), eu(e);
          return;
        }
      }
    }
    function eu(e) {
      var t = e.flags;
      if (t & cn) {
        try {
          w_(e);
        } catch (a) {
          pn(e, e.return, a);
        }
        e.flags &= ~cn;
      }
      t & Ba && (e.flags &= ~Ba);
    }
    function k_(e, t, a) {
      fd = a, dd = t, _e = e, WR(e, t, a), fd = null, dd = null;
    }
    function WR(e, t, a) {
      for (var i = (e.mode & Ue) !== Me; _e !== null; ) {
        var u = _e, s = u.child;
        if (u.tag === Qe && i) {
          var f = u.memoizedState !== null, p = f || fy;
          if (p) {
            T0(e, t, a);
            continue;
          } else {
            var h = u.alternate, E = h !== null && h.memoizedState !== null, C = E || Vr, k = fy, _ = Vr;
            fy = p, Vr = C, Vr && !_ && (_e = u, M_(u));
            for (var z = s; z !== null; )
              _e = z, WR(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            _e = u, fy = k, Vr = _, T0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Tr) !== $e && s !== null ? (s.return = u, _e = s) : T0(e, t, a);
      }
    }
    function T0(e, t, a) {
      for (; _e !== null; ) {
        var i = _e;
        if ((i.flags & Tr) !== $e) {
          var u = i.alternate;
          Wt(i);
          try {
            S_(t, u, i, a);
          } catch (f) {
            pn(i, i.return, f);
          }
          bn();
        }
        if (i === e) {
          _e = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, _e = s;
          return;
        }
        _e = i.return;
      }
    }
    function O_(e) {
      for (; _e !== null; ) {
        var t = _e, a = t.child;
        switch (t.tag) {
          case te:
          case Re:
          case Xe:
          case je: {
            if (t.mode & nt)
              try {
                Zl(), dl(fr, t, t.return);
              } finally {
                Jl(t);
              }
            else
              dl(fr, t, t.return);
            break;
          }
          case ue: {
            pd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && E0(t, t.return, i);
            break;
          }
          case le: {
            pd(t, t.return);
            break;
          }
          case Qe: {
            var u = t.memoizedState !== null;
            if (u) {
              qR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, _e = a) : qR(e);
      }
    }
    function qR(e) {
      for (; _e !== null; ) {
        var t = _e;
        if (t === e) {
          _e = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, _e = a;
          return;
        }
        _e = t.return;
      }
    }
    function M_(e) {
      for (; _e !== null; ) {
        var t = _e, a = t.child;
        if (t.tag === Qe) {
          var i = t.memoizedState !== null;
          if (i) {
            GR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, _e = a) : GR(e);
      }
    }
    function GR(e) {
      for (; _e !== null; ) {
        var t = _e;
        Wt(t);
        try {
          E_(t);
        } catch (i) {
          pn(t, t.return, i);
        }
        if (bn(), t === e) {
          _e = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, _e = a;
          return;
        }
        _e = t.return;
      }
    }
    function L_(e, t, a, i) {
      _e = t, N_(t, e, a, i);
    }
    function N_(e, t, a, i) {
      for (; _e !== null; ) {
        var u = _e, s = u.child;
        (u.subtreeFlags & $a) !== $e && s !== null ? (s.return = u, _e = s) : U_(e, t, a, i);
      }
    }
    function U_(e, t, a, i) {
      for (; _e !== null; ) {
        var u = _e;
        if ((u.flags & vn) !== $e) {
          Wt(u);
          try {
            A_(t, u, a, i);
          } catch (f) {
            pn(u, u.return, f);
          }
          bn();
        }
        if (u === e) {
          _e = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, _e = s;
          return;
        }
        _e = u.return;
      }
    }
    function A_(e, t, a, i) {
      switch (t.tag) {
        case te:
        case Re:
        case je: {
          if (t.mode & nt) {
            BS();
            try {
              ns(Hr | cr, t);
            } finally {
              VS(t);
            }
          } else
            ns(Hr | cr, t);
          break;
        }
      }
    }
    function z_(e) {
      _e = e, F_();
    }
    function F_() {
      for (; _e !== null; ) {
        var e = _e, t = e.child;
        if ((_e.flags & Vt) !== $e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              _e = u, P_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            _e = e;
          }
        }
        (e.subtreeFlags & $a) !== $e && t !== null ? (t.return = e, _e = t) : j_();
      }
    }
    function j_() {
      for (; _e !== null; ) {
        var e = _e;
        (e.flags & vn) !== $e && (Wt(e), H_(e), bn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, _e = t;
          return;
        }
        _e = e.return;
      }
    }
    function H_(e) {
      switch (e.tag) {
        case te:
        case Re:
        case je: {
          e.mode & nt ? (BS(), dl(Hr | cr, e, e.return), VS(e)) : dl(Hr | cr, e, e.return);
          break;
        }
      }
    }
    function P_(e, t) {
      for (; _e !== null; ) {
        var a = _e;
        Wt(a), B_(a, t), bn();
        var i = a.child;
        i !== null ? (i.return = a, _e = i) : V_(e);
      }
    }
    function V_(e) {
      for (; _e !== null; ) {
        var t = _e, a = t.sibling, i = t.return;
        if (VR(t), t === e) {
          _e = null;
          return;
        }
        if (a !== null) {
          a.return = i, _e = a;
          return;
        }
        _e = i;
      }
    }
    function B_(e, t) {
      switch (e.tag) {
        case te:
        case Re:
        case je: {
          e.mode & nt ? (BS(), dl(Hr, e, t), VS(e)) : dl(Hr, e, t);
          break;
        }
      }
    }
    function $_(e) {
      switch (e.tag) {
        case te:
        case Re:
        case je: {
          try {
            ns(fr | cr, e);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
      }
    }
    function I_(e) {
      switch (e.tag) {
        case te:
        case Re:
        case je: {
          try {
            ns(Hr | cr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Y_(e) {
      switch (e.tag) {
        case te:
        case Re:
        case je: {
          try {
            dl(fr | cr, e, e.return);
          } catch (a) {
            pn(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && E0(e, e.return, t);
          break;
        }
      }
    }
    function Q_(e) {
      switch (e.tag) {
        case te:
        case Re:
        case je:
          try {
            dl(Hr | cr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var vv = Symbol.for;
      vv("selector.component"), vv("selector.has_pseudo_class"), vv("selector.role"), vv("selector.test_id"), vv("selector.text");
    }
    var W_ = [];
    function q_() {
      W_.forEach(function(e) {
        return e();
      });
    }
    var G_ = S.ReactCurrentActQueue;
    function K_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function KR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && G_.current !== null && R("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var X_ = Math.ceil, w0 = S.ReactCurrentDispatcher, b0 = S.ReactCurrentOwner, $r = S.ReactCurrentBatchConfig, hl = S.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), XR = (
      /*               */
      1
    ), Ir = (
      /*                */
      2
    ), Fi = (
      /*                */
      4
    ), Bu = 0, hv = 1, hc = 2, py = 3, mv = 4, JR = 5, x0 = 6, Ot = vr, ka = null, An = null, hr = Q, tu = Q, _0 = Wo(Q), mr = Bu, yv = null, vy = Q, gv = Q, hy = Q, Sv = null, ni = null, D0 = 0, ZR = 500, e1 = 1 / 0, J_ = 500, $u = null;
    function Ev() {
      e1 = Cn() + J_;
    }
    function t1() {
      return e1;
    }
    var my = !1, k0 = null, vd = null, mc = !1, as = null, Cv = Q, O0 = [], M0 = null, Z_ = 50, Rv = 0, L0 = null, N0 = !1, yy = !1, eD = 50, hd = 0, gy = null, Tv = on, Sy = Q, n1 = !1;
    function Ey() {
      return ka;
    }
    function Oa() {
      return (Ot & (Ir | Fi)) !== vr ? Cn() : (Tv !== on || (Tv = Cn()), Tv);
    }
    function is(e) {
      var t = e.mode;
      if ((t & Ue) === Me)
        return Pe;
      if ((Ot & Ir) !== vr && hr !== Q)
        return Do(hr);
      var a = Gb() !== qb;
      if (a) {
        if ($r.transition !== null) {
          var i = $r.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Sy === Pn && (Sy = Lh()), Sy;
      }
      var u = qa();
      if (u !== Pn)
        return u;
      var s = Nw();
      return s;
    }
    function tD(e) {
      var t = e.mode;
      return (t & Ue) === Me ? Pe : oa();
    }
    function yr(e, t, a, i) {
      bD(), n1 && R("useInsertionEffect must not schedule updates."), N0 && (yy = !0), Du(e, a, i), (Ot & Ir) !== Q && e === ka ? DD(t) : (ba && Rf(e, t, a), kD(t), e === ka && ((Ot & Ir) === vr && (gv = st(gv, a)), mr === mv && ls(e, hr)), ri(e, i), a === Pe && Ot === vr && (t.mode & Ue) === Me && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hl.isBatchingLegacy && (Ev(), nC()));
    }
    function nD(e, t, a) {
      var i = e.current;
      i.lanes = t, Du(e, t, a), ri(e, a);
    }
    function rD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ot & Ir) !== vr
      );
    }
    function ri(e, t) {
      var a = e.callbackNode;
      _h(e, t);
      var i = xu(e, e === ka ? hr : Q);
      if (i === Q) {
        a !== null && g1(a), e.callbackNode = null, e.callbackPriority = Pn;
        return;
      }
      var u = Ln(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hl.current !== null && a !== P0)) {
        a == null && s !== Pe && R("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && g1(a);
      var f;
      if (u === Pe)
        e.tag === qo ? (hl.isBatchingLegacy !== null && (hl.didScheduleLegacyUpdate = !0), Mb(i1.bind(null, e))) : tC(i1.bind(null, e)), hl.current !== null ? hl.current.push(Go) : Aw(function() {
          (Ot & (Ir | Fi)) === vr && Go();
        }), f = null;
      else {
        var p;
        switch (sr(i)) {
          case Nn:
            p = qc;
            break;
          case tl:
            p = Su;
            break;
          case Di:
            p = _i;
            break;
          case ko:
            p = Gc;
            break;
          default:
            p = _i;
            break;
        }
        f = V0(p, r1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function r1(e, t) {
      if (Cx(), Tv = on, Sy = Q, (Ot & (Ir | Fi)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = xu(e, e === ka ? hr : Q);
      if (u === Q)
        return null;
      var s = !Bs(e, u) && !Mh(e, u) && !t, f = s ? pD(e, u) : Ry(e, u);
      if (f !== Bu) {
        if (f === hc) {
          var p = Vl(e);
          p !== Q && (u = p, f = U0(e, p));
        }
        if (f === hv) {
          var h = yv;
          throw yc(e, Q), ls(e, u), ri(e, Cn()), h;
        }
        if (f === x0)
          ls(e, u);
        else {
          var E = !Bs(e, u), C = e.current.alternate;
          if (E && !iD(C)) {
            if (f = Ry(e, u), f === hc) {
              var k = Vl(e);
              k !== Q && (u = k, f = U0(e, k));
            }
            if (f === hv) {
              var _ = yv;
              throw yc(e, Q), ls(e, u), ri(e, Cn()), _;
            }
          }
          e.finishedWork = C, e.finishedLanes = u, aD(e, f, u);
        }
      }
      return ri(e, Cn()), e.callbackNode === a ? r1.bind(null, e) : null;
    }
    function U0(e, t) {
      var a = Sv;
      if (Tf(e)) {
        var i = yc(e, t);
        i.flags |= xn, wb(e.containerInfo);
      }
      var u = Ry(e, t);
      if (u !== hc) {
        var s = ni;
        ni = a, s !== null && a1(s);
      }
      return u;
    }
    function a1(e) {
      ni === null ? ni = e : ni.push.apply(ni, e);
    }
    function aD(e, t, a) {
      switch (t) {
        case Bu:
        case hv:
          throw new Error("Root did not complete. This is a bug in React.");
        case hc: {
          gc(e, ni, $u);
          break;
        }
        case py: {
          if (ls(e, a), Dh(a) && // do not delay if we're inside an act() scope
          !S1()) {
            var i = D0 + ZR - Cn();
            if (i > 10) {
              var u = xu(e, Q);
              if (u !== Q)
                break;
              var s = e.suspendedLanes;
              if (!_u(s, a)) {
                Oa(), Ef(e, s);
                break;
              }
              e.timeoutHandle = Mg(gc.bind(null, e, ni, $u), i);
              break;
            }
          }
          gc(e, ni, $u);
          break;
        }
        case mv: {
          if (ls(e, a), Oh(a))
            break;
          if (!S1()) {
            var f = bh(e, a), p = f, h = Cn() - p, E = wD(h) - h;
            if (E > 10) {
              e.timeoutHandle = Mg(gc.bind(null, e, ni, $u), E);
              break;
            }
          }
          gc(e, ni, $u);
          break;
        }
        case JR: {
          gc(e, ni, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function iD(e) {
      for (var t = e; ; ) {
        if (t.flags & Ls) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!xe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & Ls && h !== null) {
          h.return = t, t = h;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ls(e, t) {
      t = $s(t, hy), t = $s(t, gv), Uh(e, t);
    }
    function i1(e) {
      if (Rx(), (Ot & (Ir | Fi)) !== vr)
        throw new Error("Should not already be working.");
      Yu();
      var t = xu(e, Q);
      if (!sa(t, Pe))
        return ri(e, Cn()), null;
      var a = Ry(e, t);
      if (e.tag !== qo && a === hc) {
        var i = Vl(e);
        i !== Q && (t = i, a = U0(e, i));
      }
      if (a === hv) {
        var u = yv;
        throw yc(e, Q), ls(e, t), ri(e, Cn()), u;
      }
      if (a === x0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, gc(e, ni, $u), ri(e, Cn()), null;
    }
    function lD(e, t) {
      t !== Q && (pp(e, st(t, Pe)), ri(e, Cn()), (Ot & (Ir | Fi)) === vr && (Ev(), Go()));
    }
    function A0(e, t) {
      var a = Ot;
      Ot |= XR;
      try {
        return e(t);
      } finally {
        Ot = a, Ot === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hl.isBatchingLegacy && (Ev(), nC());
      }
    }
    function uD(e, t, a, i, u) {
      var s = qa(), f = $r.transition;
      try {
        return $r.transition = null, _n(Nn), e(t, a, i, u);
      } finally {
        _n(s), $r.transition = f, Ot === vr && Ev();
      }
    }
    function Iu(e) {
      as !== null && as.tag === qo && (Ot & (Ir | Fi)) === vr && Yu();
      var t = Ot;
      Ot |= XR;
      var a = $r.transition, i = qa();
      try {
        return $r.transition = null, _n(Nn), e ? e() : void 0;
      } finally {
        _n(i), $r.transition = a, Ot = t, (Ot & (Ir | Fi)) === vr && Go();
      }
    }
    function l1() {
      return (Ot & (Ir | Fi)) !== vr;
    }
    function Cy(e, t) {
      da(_0, tu, e), tu = st(tu, t);
    }
    function z0(e) {
      tu = _0.current, fa(_0, e);
    }
    function yc(e, t) {
      e.finishedWork = null, e.finishedLanes = Q;
      var a = e.timeoutHandle;
      if (a !== Lg && (e.timeoutHandle = Lg, Uw(a)), An !== null)
        for (var i = An.return; i !== null; ) {
          var u = i.alternate;
          AR(u, i), i = i.return;
        }
      ka = e;
      var s = Sc(e.current, null);
      return An = s, hr = tu = t, mr = Bu, yv = null, vy = Q, gv = Q, hy = Q, Sv = null, ni = null, nx(), ul.discardPendingWarnings(), s;
    }
    function u1(e, t) {
      do {
        var a = An;
        try {
          if (Mm(), MC(), bn(), b0.current = null, a === null || a.return === null) {
            mr = hv, yv = t, An = null;
            return;
          }
          if (dt && a.mode & nt && ly(a, !0), pt)
            if (la(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Cu(a, i, hr);
            } else
              As(a, t, hr);
          Mx(e, a.return, a, t, hr), f1(a);
        } catch (u) {
          t = u, An === a && a !== null ? (a = a.return, An = a) : a = An;
          continue;
        }
        return;
      } while (!0);
    }
    function o1() {
      var e = w0.current;
      return w0.current = ty, e === null ? ty : e;
    }
    function s1(e) {
      w0.current = e;
    }
    function oD() {
      D0 = Cn();
    }
    function wv(e) {
      vy = st(e, vy);
    }
    function sD() {
      mr === Bu && (mr = py);
    }
    function F0() {
      (mr === Bu || mr === py || mr === hc) && (mr = mv), ka !== null && (Vs(vy) || Vs(gv)) && ls(ka, hr);
    }
    function cD(e) {
      mr !== mv && (mr = hc), Sv === null ? Sv = [e] : Sv.push(e);
    }
    function fD() {
      return mr === Bu;
    }
    function Ry(e, t) {
      var a = Ot;
      Ot |= Ir;
      var i = o1();
      if (ka !== e || hr !== t) {
        if (ba) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (bv(e, hr), u.clear()), vp(e, t);
        }
        $u = Ys(), yc(e, t);
      }
      hn(t);
      do
        try {
          dD();
          break;
        } catch (s) {
          u1(e, s);
        }
      while (!0);
      if (Mm(), Ot = a, s1(i), An !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return ef(), ka = null, hr = Q, mr;
    }
    function dD() {
      for (; An !== null; )
        c1(An);
    }
    function pD(e, t) {
      var a = Ot;
      Ot |= Ir;
      var i = o1();
      if (ka !== e || hr !== t) {
        if (ba) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (bv(e, hr), u.clear()), vp(e, t);
        }
        $u = Ys(), Ev(), yc(e, t);
      }
      hn(t);
      do
        try {
          vD();
          break;
        } catch (s) {
          u1(e, s);
        }
      while (!0);
      return Mm(), s1(i), Ot = a, An !== null ? (Zc(), Bu) : (ef(), ka = null, hr = Q, mr);
    }
    function vD() {
      for (; An !== null && !Wc(); )
        c1(An);
    }
    function c1(e) {
      var t = e.alternate;
      Wt(e);
      var a;
      (e.mode & nt) !== Me ? (PS(e), a = j0(t, e, tu), ly(e, !0)) : a = j0(t, e, tu), bn(), e.memoizedProps = e.pendingProps, a === null ? f1(e) : An = a, b0.current = null;
    }
    function f1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ra) === $e) {
          Wt(t);
          var u = void 0;
          if ((t.mode & nt) === Me ? u = UR(a, t, tu) : (PS(t), u = UR(a, t, tu), ly(t, !1)), bn(), u !== null) {
            An = u;
            return;
          }
        } else {
          var s = s_(a, t);
          if (s !== null) {
            s.flags &= vh, An = s;
            return;
          }
          if ((t.mode & nt) !== Me) {
            ly(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ra, i.subtreeFlags = $e, i.deletions = null;
          else {
            mr = x0, An = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          An = h;
          return;
        }
        t = i, An = t;
      } while (t !== null);
      mr === Bu && (mr = JR);
    }
    function gc(e, t, a) {
      var i = qa(), u = $r.transition;
      try {
        $r.transition = null, _n(Nn), hD(e, t, a, i);
      } finally {
        $r.transition = u, _n(i);
      }
      return null;
    }
    function hD(e, t, a, i) {
      do
        Yu();
      while (as !== null);
      if (xD(), (Ot & (Ir | Fi)) !== vr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (jl(s), u === null)
        return Kc(), null;
      if (s === Q && R("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Pn;
      var f = st(u.lanes, u.childLanes);
      Cf(e, f), e === ka && (ka = null, An = null, hr = Q), ((u.subtreeFlags & $a) !== $e || (u.flags & $a) !== $e) && (mc || (mc = !0, M0 = a, V0(_i, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (ho | aa | Tr | $a)) !== $e, h = (u.flags & (ho | aa | Tr | $a)) !== $e;
      if (p || h) {
        var E = $r.transition;
        $r.transition = null;
        var C = qa();
        _n(Nn);
        var k = Ot;
        Ot |= Fi, b0.current = null, v_(e, u), nR(), D_(e, u, s), _w(e.containerInfo), e.current = u, ip(s), k_(u, e, s), Eo(), yh(), Ot = k, _n(C), $r.transition = E;
      } else
        e.current = u, nR();
      var _ = mc;
      if (mc ? (mc = !1, as = e, Cv = s) : (hd = 0, gy = null), f = e.pendingLanes, f === Q && (vd = null), _ || h1(e.current, !1), yo(u.stateNode, i), ba && e.memoizedUpdaters.clear(), q_(), ri(e, Cn()), t !== null)
        for (var z = e.onRecoverableError, H = 0; H < t.length; H++) {
          var V = t[H], me = V.stack, Ie = V.digest;
          z(V.value, {
            componentStack: me,
            digest: Ie
          });
        }
      if (my) {
        my = !1;
        var Ae = k0;
        throw k0 = null, Ae;
      }
      return sa(Cv, Pe) && e.tag !== qo && Yu(), f = e.pendingLanes, sa(f, Pe) ? (Ex(), e === L0 ? Rv++ : (Rv = 0, L0 = e)) : Rv = 0, Go(), Kc(), null;
    }
    function Yu() {
      if (as !== null) {
        var e = sr(Cv), t = ng(Di, e), a = $r.transition, i = qa();
        try {
          return $r.transition = null, _n(t), yD();
        } finally {
          _n(i), $r.transition = a;
        }
      }
      return !1;
    }
    function mD(e) {
      O0.push(e), mc || (mc = !0, V0(_i, function() {
        return Yu(), null;
      }));
    }
    function yD() {
      if (as === null)
        return !1;
      var e = M0;
      M0 = null;
      var t = as, a = Cv;
      if (as = null, Cv = Q, (Ot & (Ir | Fi)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      N0 = !0, yy = !1, Th(a);
      var i = Ot;
      Ot |= Fi, z_(t.current), L_(t, t.current, a, e);
      {
        var u = O0;
        O0 = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          g_(t, f);
        }
      }
      lp(), h1(t.current, !0), Ot = i, Go(), yy ? t === gy ? hd++ : (hd = 0, gy = t) : hd = 0, N0 = !1, yy = !1, Qa(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function d1(e) {
      return vd !== null && vd.has(e);
    }
    function gD(e) {
      vd === null ? vd = /* @__PURE__ */ new Set([e]) : vd.add(e);
    }
    function SD(e) {
      my || (my = !0, k0 = e);
    }
    var ED = SD;
    function p1(e, t, a) {
      var i = pc(a, t), u = cR(e, i, Pe), s = Xo(e, u, Pe), f = Oa();
      s !== null && (Du(s, Pe, f), ri(s, f));
    }
    function pn(e, t, a) {
      if (f_(a), xv(!1), e.tag === Z) {
        p1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          p1(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !d1(s)) {
            var f = pc(a, e), p = a0(i, f, Pe), h = Xo(i, p, Pe), E = Oa();
            h !== null && (Du(h, Pe, E), ri(h, E));
            return;
          }
        }
        i = i.return;
      }
      R(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function CD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Oa();
      Ef(e, a), OD(e), ka === e && _u(hr, a) && (mr === mv || mr === py && Dh(hr) && Cn() - D0 < ZR ? yc(e, Q) : hy = st(hy, a)), ri(e, u);
    }
    function v1(e, t) {
      t === Pn && (t = tD(e));
      var a = Oa(), i = ei(e, t);
      i !== null && (Du(i, t, a), ri(i, a));
    }
    function RD(e) {
      var t = e.memoizedState, a = Pn;
      t !== null && (a = t.retryLane), v1(e, a);
    }
    function TD(e, t) {
      var a = Pn, i;
      switch (e.tag) {
        case ye:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case yt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), v1(e, a);
    }
    function wD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : X_(e / 1960) * 1960;
    }
    function bD() {
      if (Rv > Z_)
        throw Rv = 0, L0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      hd > eD && (hd = 0, gy = null, R("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function xD() {
      ul.flushLegacyContextWarning(), ul.flushPendingUnsafeLifecycleWarnings();
    }
    function h1(e, t) {
      Wt(e), Ty(e, ra, Y_), t && Ty(e, gu, Q_), Ty(e, ra, $_), t && Ty(e, gu, I_), bn();
    }
    function Ty(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== $e ? i = i.child : ((i.flags & t) !== $e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var wy = null;
    function m1(e) {
      {
        if ((Ot & Ir) !== vr || !(e.mode & Ue))
          return;
        var t = e.tag;
        if (t !== ze && t !== Z && t !== ue && t !== te && t !== Re && t !== Xe && t !== je)
          return;
        var a = it(e) || "ReactComponent";
        if (wy !== null) {
          if (wy.has(a))
            return;
          wy.add(a);
        } else
          wy = /* @__PURE__ */ new Set([a]);
        var i = En;
        try {
          Wt(e), R("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Wt(e) : bn();
        }
      }
    }
    var j0;
    {
      var _D = null;
      j0 = function(e, t, a) {
        var i = w1(_D, t);
        try {
          return kR(e, t, a);
        } catch (s) {
          if (Hb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Mm(), MC(), AR(e, t), w1(t, i), t.mode & nt && PS(t), yu(null, kR, null, e, t, a), Xy()) {
            var u = Kd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var y1 = !1, H0;
    H0 = /* @__PURE__ */ new Set();
    function DD(e) {
      if (Jr && !yx())
        switch (e.tag) {
          case te:
          case Re:
          case je: {
            var t = An && it(An) || "Unknown", a = t;
            if (!H0.has(a)) {
              H0.add(a);
              var i = it(e) || "Unknown";
              R("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            y1 || (R("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), y1 = !0);
            break;
          }
        }
    }
    function bv(e, t) {
      if (ba) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Rf(e, i, t);
        });
      }
    }
    var P0 = {};
    function V0(e, t) {
      {
        var a = hl.current;
        return a !== null ? (a.push(t), P0) : Qc(e, t);
      }
    }
    function g1(e) {
      if (e !== P0)
        return mh(e);
    }
    function S1() {
      return hl.current !== null;
    }
    function kD(e) {
      {
        if (e.mode & Ue) {
          if (!KR())
            return;
        } else if (!K_() || Ot !== vr || e.tag !== te && e.tag !== Re && e.tag !== je)
          return;
        if (hl.current === null) {
          var t = En;
          try {
            Wt(e), R(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, it(e));
          } finally {
            t ? Wt(e) : bn();
          }
        }
      }
    }
    function OD(e) {
      e.tag !== qo && KR() && hl.current === null && R(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function xv(e) {
      n1 = e;
    }
    var ji = null, md = null, MD = function(e) {
      ji = e;
    };
    function yd(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function B0(e) {
      return yd(e);
    }
    function $0(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = yd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ee,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function E1(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case te: {
            (typeof i == "function" || s === qe) && (u = !0);
            break;
          }
          case Re: {
            (s === ee || s === qe) && (u = !0);
            break;
          }
          case Xe:
          case je: {
            (s === xt || s === qe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ji(a);
          if (f !== void 0 && f === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function C1(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        md === null && (md = /* @__PURE__ */ new WeakSet()), md.add(e);
      }
    }
    var LD = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), Iu(function() {
          I0(e.current, i, a);
        });
      }
    }, ND = function(e, t) {
      {
        if (e.context !== hi)
          return;
        Yu(), Iu(function() {
          _v(t, e, null, null);
        });
      }
    };
    function I0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, h = null;
        switch (f) {
          case te:
          case je:
          case ue:
            h = p;
            break;
          case Re:
            h = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var E = !1, C = !1;
        if (h !== null) {
          var k = ji(h);
          k !== void 0 && (a.has(k) ? C = !0 : t.has(k) && (f === ue ? C = !0 : E = !0));
        }
        if (md !== null && (md.has(e) || i !== null && md.has(i)) && (C = !0), C && (e._debugNeedsRemount = !0), C || E) {
          var _ = ei(e, Pe);
          _ !== null && yr(_, e, Pe, on);
        }
        u !== null && !C && I0(u, t, a), s !== null && I0(s, t, a);
      }
    }
    var UD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return Y0(e.current, i, a), a;
      }
    };
    function Y0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case te:
          case je:
          case ue:
            p = f;
            break;
          case Re:
            p = f.render;
            break;
        }
        var h = !1;
        p !== null && t.has(p) && (h = !0), h ? AD(e, a) : i !== null && Y0(i, t, a), u !== null && Y0(u, t, a);
      }
    }
    function AD(e, t) {
      {
        var a = zD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case oe:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function zD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === le)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var Q0;
    {
      Q0 = !1;
      try {
        var R1 = Object.preventExtensions({});
      } catch {
        Q0 = !0;
      }
    }
    function FD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = $e, this.subtreeFlags = $e, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Q0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var mi = function(e, t, a, i) {
      return new FD(e, t, a, i);
    };
    function W0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function jD(e) {
      return typeof e == "function" && !W0(e) && e.defaultProps === void 0;
    }
    function HD(e) {
      if (typeof e == "function")
        return W0(e) ? ue : te;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ee)
          return Re;
        if (t === xt)
          return Xe;
      }
      return ze;
    }
    function Sc(e, t) {
      var a = e.alternate;
      a === null ? (a = mi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = $e, a.subtreeFlags = $e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ur, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ze:
        case te:
        case je:
          a.type = yd(e.type);
          break;
        case ue:
          a.type = B0(e.type);
          break;
        case Re:
          a.type = $0(e.type);
          break;
      }
      return a;
    }
    function PD(e, t) {
      e.flags &= ur | cn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = $e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = $e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function VD(e, t, a) {
      var i;
      return e === Cm ? (i = Ue, t === !0 && (i |= Ct, i |= xa)) : i = Me, ba && (i |= nt), mi(Z, null, null, i);
    }
    function q0(e, t, a, i, u, s) {
      var f = ze, p = e;
      if (typeof e == "function")
        W0(e) ? (f = ue, p = B0(p)) : p = yd(p);
      else if (typeof e == "string")
        f = le;
      else
        e: switch (e) {
          case Ca:
            return us(a.children, u, s, t);
          case Ei:
            f = Ve, u |= Ct, (u & Ue) !== Me && (u |= xa);
            break;
          case Ci:
            return BD(a, u, s, t);
          case Ne:
            return $D(a, u, s, t);
          case Rt:
            return ID(a, u, s, t);
          case tn:
            return T1(a, u, s, t);
          case sn:
          case ht:
          case Rr:
          case Ri:
          case Fn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case b:
                  f = Be;
                  break e;
                case G:
                  f = ot;
                  break e;
                case ee:
                  f = Re, p = $0(p);
                  break e;
                case xt:
                  f = Xe;
                  break e;
                case qe:
                  f = Bt, p = null;
                  break e;
              }
            var h = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var E = i ? it(i) : null;
              E && (h += `

Check the render method of \`` + E + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
          }
        }
      var C = mi(f, a, t, u);
      return C.elementType = e, C.type = p, C.lanes = s, C._debugOwner = i, C;
    }
    function G0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = q0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function us(e, t, a, i) {
      var u = mi(De, e, i, t);
      return u.lanes = a, u;
    }
    function BD(e, t, a, i) {
      typeof e.id != "string" && R('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = mi(se, e, i, t | nt);
      return u.elementType = Ci, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function $D(e, t, a, i) {
      var u = mi(ye, e, i, t);
      return u.elementType = Ne, u.lanes = a, u;
    }
    function ID(e, t, a, i) {
      var u = mi(yt, e, i, t);
      return u.elementType = Rt, u.lanes = a, u;
    }
    function T1(e, t, a, i) {
      var u = mi(Qe, e, i, t);
      u.elementType = tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function K0(e, t, a) {
      var i = mi(Oe, e, null, t);
      return i.lanes = a, i;
    }
    function YD() {
      var e = mi(le, null, null, Me);
      return e.elementType = "DELETED", e;
    }
    function QD(e) {
      var t = mi(rt, null, null, Me);
      return t.stateNode = e, t;
    }
    function X0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = mi(oe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function w1(e, t) {
      return e === null && (e = mi(ze, null, null, Me)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function WD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Lg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Pn, this.eventTimes = Is(Q), this.expirationTimes = Is(on), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = Is(Q), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < js; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Cm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case qo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function b1(e, t, a, i, u, s, f, p, h, E) {
      var C = new WD(e, t, a, p, h), k = VD(t, s);
      C.current = k, k.stateNode = C;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        k.memoizedState = _;
      }
      return cS(k), C;
    }
    var J0 = "18.3.1";
    function qD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return qr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Mr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var Z0, eE;
    Z0 = !1, eE = {};
    function x1(e) {
      if (!e)
        return hi;
      var t = Pa(e), a = Ob(t);
      if (t.tag === ue) {
        var i = t.type;
        if (ql(i))
          return ZE(t, i, a);
      }
      return a;
    }
    function GD(e, t) {
      {
        var a = Pa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Ia(a);
        if (u === null)
          return null;
        if (u.mode & Ct) {
          var s = it(a) || "Component";
          if (!eE[s]) {
            eE[s] = !0;
            var f = En;
            try {
              Wt(u), a.mode & Ct ? R("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : R("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Wt(f) : bn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function _1(e, t, a, i, u, s, f, p) {
      var h = !1, E = null;
      return b1(e, t, h, E, a, i, u, s, f);
    }
    function D1(e, t, a, i, u, s, f, p, h, E) {
      var C = !0, k = b1(a, i, C, e, u, s, f, p, h);
      k.context = x1(null);
      var _ = k.current, z = Oa(), H = is(_), V = Pu(z, H);
      return V.callback = t ?? null, Xo(_, V, H), nD(k, H, z), k;
    }
    function _v(e, t, a, i) {
      ap(t, e);
      var u = t.current, s = Oa(), f = is(u);
      up(f);
      var p = x1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Jr && En !== null && !Z0 && (Z0 = !0, R(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, it(En) || "Unknown"));
      var h = Pu(s, f);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && R("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var E = Xo(u, h, f);
      return E !== null && (yr(E, u, f, s), zm(E, u, f)), f;
    }
    function by(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case le:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function KD(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (Tf(t)) {
            var a = cp(t);
            lD(t, a);
          }
          break;
        }
        case ye: {
          Iu(function() {
            var u = ei(e, Pe);
            if (u !== null) {
              var s = Oa();
              yr(u, e, Pe, s);
            }
          });
          var i = Pe;
          tE(e, i);
          break;
        }
      }
    }
    function k1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Nh(a.retryLane, t));
    }
    function tE(e, t) {
      k1(e, t);
      var a = e.alternate;
      a && k1(a, t);
    }
    function XD(e) {
      if (e.tag === ye) {
        var t = Ps, a = ei(e, t);
        if (a !== null) {
          var i = Oa();
          yr(a, e, t, i);
        }
        tE(e, t);
      }
    }
    function JD(e) {
      if (e.tag === ye) {
        var t = is(e), a = ei(e, t);
        if (a !== null) {
          var i = Oa();
          yr(a, e, t, i);
        }
        tE(e, t);
      }
    }
    function O1(e) {
      var t = hh(e);
      return t === null ? null : t.stateNode;
    }
    var M1 = function(e) {
      return null;
    };
    function ZD(e) {
      return M1(e);
    }
    var L1 = function(e) {
      return !1;
    };
    function ek(e) {
      return L1(e);
    }
    var N1 = null, U1 = null, A1 = null, z1 = null, F1 = null, j1 = null, H1 = null, P1 = null, V1 = null;
    {
      var B1 = function(e, t, a) {
        var i = t[a], u = Dt(e) ? e.slice() : mt({}, e);
        return a + 1 === t.length ? (Dt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = B1(e[i], t, a + 1), u);
      }, $1 = function(e, t) {
        return B1(e, t, 0);
      }, I1 = function(e, t, a, i) {
        var u = t[i], s = Dt(e) ? e.slice() : mt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Dt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = I1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Y1 = function(e, t, a) {
        if (t.length !== a.length) {
          ae("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ae("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return I1(e, t, a, 0);
      }, Q1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Dt(e) ? e.slice() : mt({}, e);
        return s[u] = Q1(e[u], t, a + 1, i), s;
      }, W1 = function(e, t, a) {
        return Q1(e, t, 0, a);
      }, nE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      N1 = function(e, t, a, i) {
        var u = nE(e, t);
        if (u !== null) {
          var s = W1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = mt({}, e.memoizedProps);
          var f = ei(e, Pe);
          f !== null && yr(f, e, Pe, on);
        }
      }, U1 = function(e, t, a) {
        var i = nE(e, t);
        if (i !== null) {
          var u = $1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = mt({}, e.memoizedProps);
          var s = ei(e, Pe);
          s !== null && yr(s, e, Pe, on);
        }
      }, A1 = function(e, t, a, i) {
        var u = nE(e, t);
        if (u !== null) {
          var s = Y1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = mt({}, e.memoizedProps);
          var f = ei(e, Pe);
          f !== null && yr(f, e, Pe, on);
        }
      }, z1 = function(e, t, a) {
        e.pendingProps = W1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ei(e, Pe);
        i !== null && yr(i, e, Pe, on);
      }, F1 = function(e, t) {
        e.pendingProps = $1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ei(e, Pe);
        a !== null && yr(a, e, Pe, on);
      }, j1 = function(e, t, a) {
        e.pendingProps = Y1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ei(e, Pe);
        i !== null && yr(i, e, Pe, on);
      }, H1 = function(e) {
        var t = ei(e, Pe);
        t !== null && yr(t, e, Pe, on);
      }, P1 = function(e) {
        M1 = e;
      }, V1 = function(e) {
        L1 = e;
      };
    }
    function tk(e) {
      var t = Ia(e);
      return t === null ? null : t.stateNode;
    }
    function nk(e) {
      return null;
    }
    function rk() {
      return En;
    }
    function ak(e) {
      var t = e.findFiberByHostInstance, a = S.ReactCurrentDispatcher;
      return rp({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: N1,
        overrideHookStateDeletePath: U1,
        overrideHookStateRenamePath: A1,
        overrideProps: z1,
        overridePropsDeletePath: F1,
        overridePropsRenamePath: j1,
        setErrorHandler: P1,
        setSuspenseHandler: V1,
        scheduleUpdate: H1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: tk,
        findFiberByHostInstance: t || nk,
        // React Refresh
        findHostInstancesForRefresh: UD,
        scheduleRefresh: LD,
        scheduleRoot: ND,
        setRefreshHandler: MD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: rk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: J0
      });
    }
    var q1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function rE(e) {
      this._internalRoot = e;
    }
    xy.prototype.render = rE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? R("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : _y(arguments[1]) ? R("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && R("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== jn) {
          var i = O1(t.current);
          i && i.parentNode !== a && R("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      _v(e, t, null, null);
    }, xy.prototype.unmount = rE.prototype.unmount = function() {
      typeof arguments[0] == "function" && R("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        l1() && R("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Iu(function() {
          _v(null, e, null, null);
        }), qE(t);
      }
    };
    function ik(e, t) {
      if (!_y(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      G1(e);
      var a = !1, i = !1, u = "", s = q1;
      t != null && (t.hydrate ? ae("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ui && R(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = _1(e, Cm, null, a, i, u, s);
      vm(f.current, e);
      var p = e.nodeType === jn ? e.parentNode : e;
      return Np(p), new rE(f);
    }
    function xy(e) {
      this._internalRoot = e;
    }
    function lk(e) {
      e && ig(e);
    }
    xy.prototype.unstable_scheduleHydration = lk;
    function uk(e, t, a) {
      if (!_y(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      G1(e), t === void 0 && R("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", h = q1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var E = D1(t, null, e, Cm, i, s, f, p, h);
      if (vm(E.current, e), Np(e), u)
        for (var C = 0; C < u.length; C++) {
          var k = u[C];
          fx(E, k);
        }
      return new xy(E);
    }
    function _y(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === fi || e.nodeType === fu || !I));
    }
    function Dv(e) {
      return !!(e && (e.nodeType === ea || e.nodeType === fi || e.nodeType === fu || e.nodeType === jn && e.nodeValue === " react-mount-point-unstable "));
    }
    function G1(e) {
      e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && R("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Ip(e) && (e._reactRootContainer ? R("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : R("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var ok = S.ReactCurrentOwner, K1;
    K1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== jn) {
        var t = O1(e._reactRootContainer.current);
        t && t.parentNode !== e && R("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = aE(e), u = !!(i && Qo(i));
      u && !a && R("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ea && e.tagName && e.tagName.toUpperCase() === "BODY" && R("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function aE(e) {
      return e ? e.nodeType === fi ? e.documentElement : e.firstChild : null;
    }
    function X1() {
    }
    function sk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = by(f);
            s.call(_);
          };
        }
        var f = D1(
          t,
          i,
          e,
          qo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          X1
        );
        e._reactRootContainer = f, vm(f.current, e);
        var p = e.nodeType === jn ? e.parentNode : e;
        return Np(p), Iu(), f;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var E = i;
          i = function() {
            var _ = by(C);
            E.call(_);
          };
        }
        var C = _1(
          e,
          qo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          X1
        );
        e._reactRootContainer = C, vm(C.current, e);
        var k = e.nodeType === jn ? e.parentNode : e;
        return Np(k), Iu(function() {
          _v(t, C, a, i);
        }), C;
      }
    }
    function ck(e, t) {
      e !== null && typeof e != "function" && R("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Dy(e, t, a, i, u) {
      K1(a), ck(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = sk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var h = by(f);
            p.call(h);
          };
        }
        _v(t, f, e, u);
      }
      return by(f);
    }
    var J1 = !1;
    function fk(e) {
      {
        J1 || (J1 = !0, R("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = ok.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || R("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _t(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ea ? e : GD(e, "findDOMNode");
    }
    function dk(e, t, a) {
      if (R("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ip(t) && t._reactRootContainer === void 0;
        i && R("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Dy(null, e, t, !0, a);
    }
    function pk(e, t, a) {
      if (R("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ip(t) && t._reactRootContainer === void 0;
        i && R("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Dy(null, e, t, !1, a);
    }
    function vk(e, t, a, i) {
      if (R("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ms(e))
        throw new Error("parentComponent must be a valid React Component");
      return Dy(e, t, a, !1, i);
    }
    var Z1 = !1;
    function hk(e) {
      if (Z1 || (Z1 = !0, R("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Dv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Ip(e) && e._reactRootContainer === void 0;
        t && R("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = aE(e), i = a && !Qo(a);
          i && R("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Iu(function() {
          Dy(null, null, e, !1, function() {
            e._reactRootContainer = null, qE(e);
          });
        }), !0;
      } else {
        {
          var u = aE(e), s = !!(u && Qo(u)), f = e.nodeType === ea && Dv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && R("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Lo(KD), rg(XD), bf(JD), zh(qa), Fh(xr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && R("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), dh(yw), Vc(A0, uD, Iu);
    function mk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_y(t))
        throw new Error("Target container is not a DOM element.");
      return qD(e, t, null, a);
    }
    function yk(e, t, a, i) {
      return vk(e, t, a, i);
    }
    var iE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Qo, qf, hm, Pc, Ds, A0]
    };
    function gk(e, t) {
      return iE.usingClientEntryPoint || R('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ik(e, t);
    }
    function Sk(e, t, a) {
      return iE.usingClientEntryPoint || R('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uk(e, t, a);
    }
    function Ek(e) {
      return l1() && R("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Iu(e);
    }
    var Ck = ak({
      findFiberByHostInstance: ac,
      bundleType: 1,
      version: J0,
      rendererPackageName: "react-dom"
    });
    if (!Ck && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var eT = window.location.protocol;
      /^(https?|file):$/.test(eT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (eT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iE, ii.createPortal = mk, ii.createRoot = gk, ii.findDOMNode = fk, ii.flushSync = Ek, ii.hydrate = dk, ii.hydrateRoot = Sk, ii.render = pk, ii.unmountComponentAtNode = hk, ii.unstable_batchedUpdates = A0, ii.unstable_renderSubtreeIntoContainer = yk, ii.version = J0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ii;
}
function OT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(OT);
    } catch (g) {
      console.error(g);
    }
  }
}
process.env.NODE_ENV === "production" ? (OT(), pE.exports = Nk()) : pE.exports = Uk();
var Ak = pE.exports, Lv = Ak;
if (process.env.NODE_ENV === "production")
  Uv.createRoot = Lv.createRoot, Uv.hydrateRoot = Lv.hydrateRoot;
else {
  var My = Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Uv.createRoot = function(g, v) {
    My.usingClientEntryPoint = !0;
    try {
      return Lv.createRoot(g, v);
    } finally {
      My.usingClientEntryPoint = !1;
    }
  }, Uv.hydrateRoot = function(g, v, S) {
    My.usingClientEntryPoint = !0;
    try {
      return Lv.hydrateRoot(g, v, S);
    } finally {
      My.usingClientEntryPoint = !1;
    }
  };
}
var Ay = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(g) {
    return this.listeners.add(g), this.onSubscribe(), () => {
      this.listeners.delete(g), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, zk = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (g, v) => setTimeout(g, v),
  clearTimeout: (g) => clearTimeout(g),
  setInterval: (g, v) => setInterval(g, v),
  clearInterval: (g) => clearInterval(g)
}, ru, Ec, ET, Fk = (ET = class {
  constructor() {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support ReturnType<typeof setTimeout>, which is infeasible.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    Ut(this, ru, zk);
    Ut(this, Ec, !1);
  }
  setTimeoutProvider(g) {
    process.env.NODE_ENV !== "production" && $(this, Ec) && g !== $(this, ru) && console.error(
      "[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.",
      { previous: $(this, ru), provider: g }
    ), at(this, ru, g), process.env.NODE_ENV !== "production" && at(this, Ec, !1);
  }
  setTimeout(g, v) {
    return process.env.NODE_ENV !== "production" && at(this, Ec, !0), $(this, ru).setTimeout(g, v);
  }
  clearTimeout(g) {
    $(this, ru).clearTimeout(g);
  }
  setInterval(g, v) {
    return process.env.NODE_ENV !== "production" && at(this, Ec, !0), $(this, ru).setInterval(g, v);
  }
  clearInterval(g) {
    $(this, ru).clearInterval(g);
  }
}, ru = new WeakMap(), Ec = new WeakMap(), ET), vE = new Fk();
function jk(g) {
  setTimeout(g, 0);
}
var zy = typeof window > "u" || "Deno" in globalThis;
function ml() {
}
function Hk(g, v) {
  return typeof g == "function" ? g(v) : g;
}
function Pk(g) {
  return typeof g == "number" && g >= 0 && g !== 1 / 0;
}
function Vk(g, v) {
  return Math.max(g + (v || 0) - Date.now(), 0);
}
function hE(g, v) {
  return typeof g == "function" ? g(v) : g;
}
function Bk(g, v) {
  return typeof g == "function" ? g(v) : g;
}
function dT(g, v) {
  const {
    type: S = "all",
    exact: O,
    fetchStatus: W,
    predicate: ae,
    queryKey: R,
    stale: he
  } = g;
  if (R) {
    if (O) {
      if (v.queryHash !== SE(R, v.options))
        return !1;
    } else if (!zv(v.queryKey, R))
      return !1;
  }
  if (S !== "all") {
    const te = v.isActive();
    if (S === "active" && !te || S === "inactive" && te)
      return !1;
  }
  return !(typeof he == "boolean" && v.isStale() !== he || W && W !== v.state.fetchStatus || ae && !ae(v));
}
function pT(g, v) {
  const { exact: S, status: O, predicate: W, mutationKey: ae } = g;
  if (ae) {
    if (!v.options.mutationKey)
      return !1;
    if (S) {
      if (Av(v.options.mutationKey) !== Av(ae))
        return !1;
    } else if (!zv(v.options.mutationKey, ae))
      return !1;
  }
  return !(O && v.state.status !== O || W && !W(v));
}
function SE(g, v) {
  return ((v == null ? void 0 : v.queryKeyHashFn) || Av)(g);
}
function Av(g) {
  return JSON.stringify(
    g,
    (v, S) => yE(S) ? Object.keys(S).sort().reduce((O, W) => (O[W] = S[W], O), {}) : S
  );
}
function zv(g, v) {
  return g === v ? !0 : typeof g != typeof v ? !1 : g && v && typeof g == "object" && typeof v == "object" ? Object.keys(v).every((S) => zv(g[S], v[S])) : !1;
}
var $k = Object.prototype.hasOwnProperty;
function mE(g, v) {
  if (g === v)
    return g;
  const S = vT(g) && vT(v);
  if (!S && !(yE(g) && yE(v))) return v;
  const W = (S ? g : Object.keys(g)).length, ae = S ? v : Object.keys(v), R = ae.length, he = S ? new Array(R) : {};
  let te = 0;
  for (let ue = 0; ue < R; ue++) {
    const ze = S ? ue : ae[ue], Z = g[ze], oe = v[ze];
    if (Z === oe) {
      he[ze] = Z, (S ? ue < W : $k.call(g, ze)) && te++;
      continue;
    }
    if (Z === null || oe === null || typeof Z != "object" || typeof oe != "object") {
      he[ze] = oe;
      continue;
    }
    const le = mE(Z, oe);
    he[ze] = le, le === Z && te++;
  }
  return W === R && te === W ? g : he;
}
function vT(g) {
  return Array.isArray(g) && g.length === Object.keys(g).length;
}
function yE(g) {
  if (!hT(g))
    return !1;
  const v = g.constructor;
  if (v === void 0)
    return !0;
  const S = v.prototype;
  return !(!hT(S) || !S.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(g) !== Object.prototype);
}
function hT(g) {
  return Object.prototype.toString.call(g) === "[object Object]";
}
function Ik(g) {
  return new Promise((v) => {
    vE.setTimeout(v, g);
  });
}
function Yk(g, v, S) {
  if (typeof S.structuralSharing == "function")
    return S.structuralSharing(g, v);
  if (S.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return mE(g, v);
      } catch (O) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${S.queryHash}]: ${O}`
        ), O;
      }
    return mE(g, v);
  }
  return v;
}
function Qk(g, v, S = 0) {
  const O = [...g, v];
  return S && O.length > S ? O.slice(1) : O;
}
function Wk(g, v, S = 0) {
  const O = [v, ...g];
  return S && O.length > S ? O.slice(0, -1) : O;
}
var Ny = Symbol();
function MT(g, v) {
  return process.env.NODE_ENV !== "production" && g.queryFn === Ny && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${g.queryHash}'`
  ), !g.queryFn && (v != null && v.initialPromise) ? () => v.initialPromise : !g.queryFn || g.queryFn === Ny ? () => Promise.reject(new Error(`Missing queryFn: '${g.queryHash}'`)) : g.queryFn;
}
var Cc, ss, Sd, CT, qk = (CT = class extends Ay {
  constructor() {
    super();
    Ut(this, Cc);
    Ut(this, ss);
    Ut(this, Sd);
    at(this, Sd, (v) => {
      if (!zy && window.addEventListener) {
        const S = () => v();
        return window.addEventListener("visibilitychange", S, !1), () => {
          window.removeEventListener("visibilitychange", S);
        };
      }
    });
  }
  onSubscribe() {
    $(this, ss) || this.setEventListener($(this, Sd));
  }
  onUnsubscribe() {
    var v;
    this.hasListeners() || ((v = $(this, ss)) == null || v.call(this), at(this, ss, void 0));
  }
  setEventListener(v) {
    var S;
    at(this, Sd, v), (S = $(this, ss)) == null || S.call(this), at(this, ss, v((O) => {
      typeof O == "boolean" ? this.setFocused(O) : this.onFocus();
    }));
  }
  setFocused(v) {
    $(this, Cc) !== v && (at(this, Cc, v), this.onFocus());
  }
  onFocus() {
    const v = this.isFocused();
    this.listeners.forEach((S) => {
      S(v);
    });
  }
  isFocused() {
    var v;
    return typeof $(this, Cc) == "boolean" ? $(this, Cc) : ((v = globalThis.document) == null ? void 0 : v.visibilityState) !== "hidden";
  }
}, Cc = new WeakMap(), ss = new WeakMap(), Sd = new WeakMap(), CT), LT = new qk();
function Gk() {
  let g, v;
  const S = new Promise((W, ae) => {
    g = W, v = ae;
  });
  S.status = "pending", S.catch(() => {
  });
  function O(W) {
    Object.assign(S, W), delete S.resolve, delete S.reject;
  }
  return S.resolve = (W) => {
    O({
      status: "fulfilled",
      value: W
    }), g(W);
  }, S.reject = (W) => {
    O({
      status: "rejected",
      reason: W
    }), v(W);
  }, S;
}
var Kk = jk;
function Xk() {
  let g = [], v = 0, S = (he) => {
    he();
  }, O = (he) => {
    he();
  }, W = Kk;
  const ae = (he) => {
    v ? g.push(he) : W(() => {
      S(he);
    });
  }, R = () => {
    const he = g;
    g = [], he.length && W(() => {
      O(() => {
        he.forEach((te) => {
          S(te);
        });
      });
    });
  };
  return {
    batch: (he) => {
      let te;
      v++;
      try {
        te = he();
      } finally {
        v--, v || R();
      }
      return te;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (he) => (...te) => {
      ae(() => {
        he(...te);
      });
    },
    schedule: ae,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (he) => {
      S = he;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (he) => {
      O = he;
    },
    setScheduler: (he) => {
      W = he;
    }
  };
}
var Ua = Xk(), Ed, cs, Cd, RT, Jk = (RT = class extends Ay {
  constructor() {
    super();
    Ut(this, Ed, !0);
    Ut(this, cs);
    Ut(this, Cd);
    at(this, Cd, (v) => {
      if (!zy && window.addEventListener) {
        const S = () => v(!0), O = () => v(!1);
        return window.addEventListener("online", S, !1), window.addEventListener("offline", O, !1), () => {
          window.removeEventListener("online", S), window.removeEventListener("offline", O);
        };
      }
    });
  }
  onSubscribe() {
    $(this, cs) || this.setEventListener($(this, Cd));
  }
  onUnsubscribe() {
    var v;
    this.hasListeners() || ((v = $(this, cs)) == null || v.call(this), at(this, cs, void 0));
  }
  setEventListener(v) {
    var S;
    at(this, Cd, v), (S = $(this, cs)) == null || S.call(this), at(this, cs, v(this.setOnline.bind(this)));
  }
  setOnline(v) {
    $(this, Ed) !== v && (at(this, Ed, v), this.listeners.forEach((O) => {
      O(v);
    }));
  }
  isOnline() {
    return $(this, Ed);
  }
}, Ed = new WeakMap(), cs = new WeakMap(), Cd = new WeakMap(), RT), Uy = new Jk();
function Zk(g) {
  return Math.min(1e3 * 2 ** g, 3e4);
}
function NT(g) {
  return (g ?? "online") === "online" ? Uy.isOnline() : !0;
}
var gE = class extends Error {
  constructor(g) {
    super("CancelledError"), this.revert = g == null ? void 0 : g.revert, this.silent = g == null ? void 0 : g.silent;
  }
};
function UT(g) {
  let v = !1, S = 0, O;
  const W = Gk(), ae = () => W.status !== "pending", R = (De) => {
    var Ve;
    if (!ae()) {
      const ot = new gE(De);
      oe(ot), (Ve = g.onCancel) == null || Ve.call(g, ot);
    }
  }, he = () => {
    v = !0;
  }, te = () => {
    v = !1;
  }, ue = () => LT.isFocused() && (g.networkMode === "always" || Uy.isOnline()) && g.canRun(), ze = () => NT(g.networkMode) && g.canRun(), Z = (De) => {
    ae() || (O == null || O(), W.resolve(De));
  }, oe = (De) => {
    ae() || (O == null || O(), W.reject(De));
  }, le = () => new Promise((De) => {
    var Ve;
    O = (ot) => {
      (ae() || ue()) && De(ot);
    }, (Ve = g.onPause) == null || Ve.call(g);
  }).then(() => {
    var De;
    O = void 0, ae() || (De = g.onContinue) == null || De.call(g);
  }), Oe = () => {
    if (ae())
      return;
    let De;
    const Ve = S === 0 ? g.initialPromise : void 0;
    try {
      De = Ve ?? g.fn();
    } catch (ot) {
      De = Promise.reject(ot);
    }
    Promise.resolve(De).then(Z).catch((ot) => {
      var Xe;
      if (ae())
        return;
      const Be = g.retry ?? (zy ? 0 : 3), Re = g.retryDelay ?? Zk, se = typeof Re == "function" ? Re(S, ot) : Re, ye = Be === !0 || typeof Be == "number" && S < Be || typeof Be == "function" && Be(S, ot);
      if (v || !ye) {
        oe(ot);
        return;
      }
      S++, (Xe = g.onFail) == null || Xe.call(g, S, ot), Ik(se).then(() => ue() ? void 0 : le()).then(() => {
        v ? oe(ot) : Oe();
      });
    });
  };
  return {
    promise: W,
    status: () => W.status,
    cancel: R,
    continue: () => (O == null || O(), W),
    cancelRetry: he,
    continueRetry: te,
    canStart: ze,
    start: () => (ze() ? Oe() : le().then(Oe), W)
  };
}
var Rc, TT, AT = (TT = class {
  constructor() {
    Ut(this, Rc);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Pk(this.gcTime) && at(this, Rc, vE.setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(g) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      g ?? (zy ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    $(this, Rc) && (vE.clearTimeout($(this, Rc)), at(this, Rc, void 0));
  }
}, Rc = new WeakMap(), TT), Tc, Rd, Hi, wc, Dr, Fv, bc, yl, Wu, wT, eO = (wT = class extends AT {
  constructor(v) {
    super();
    Ut(this, yl);
    Ut(this, Tc);
    Ut(this, Rd);
    Ut(this, Hi);
    Ut(this, wc);
    Ut(this, Dr);
    Ut(this, Fv);
    Ut(this, bc);
    at(this, bc, !1), at(this, Fv, v.defaultOptions), this.setOptions(v.options), this.observers = [], at(this, wc, v.client), at(this, Hi, $(this, wc).getQueryCache()), this.queryKey = v.queryKey, this.queryHash = v.queryHash, at(this, Tc, mT(this.options)), this.state = v.state ?? $(this, Tc), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var v;
    return (v = $(this, Dr)) == null ? void 0 : v.promise;
  }
  setOptions(v) {
    if (this.options = { ...$(this, Fv), ...v }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
      const S = mT(this.options);
      S.data !== void 0 && (this.setData(S.data, {
        updatedAt: S.dataUpdatedAt,
        manual: !0
      }), at(this, Tc, S));
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && $(this, Hi).remove(this);
  }
  setData(v, S) {
    const O = Yk(this.state.data, v, this.options);
    return ma(this, yl, Wu).call(this, {
      data: O,
      type: "success",
      dataUpdatedAt: S == null ? void 0 : S.updatedAt,
      manual: S == null ? void 0 : S.manual
    }), O;
  }
  setState(v, S) {
    ma(this, yl, Wu).call(this, { type: "setState", state: v, setStateOptions: S });
  }
  cancel(v) {
    var O, W;
    const S = (O = $(this, Dr)) == null ? void 0 : O.promise;
    return (W = $(this, Dr)) == null || W.cancel(v), S ? S.then(ml).catch(ml) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState($(this, Tc));
  }
  isActive() {
    return this.observers.some(
      (v) => Bk(v.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ny || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (v) => hE(v.options.staleTime, this) === "static"
    ) : !1;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some(
      (v) => v.getCurrentResult().isStale
    ) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(v = 0) {
    return this.state.data === void 0 ? !0 : v === "static" ? !1 : this.state.isInvalidated ? !0 : !Vk(this.state.dataUpdatedAt, v);
  }
  onFocus() {
    var S;
    const v = this.observers.find((O) => O.shouldFetchOnWindowFocus());
    v == null || v.refetch({ cancelRefetch: !1 }), (S = $(this, Dr)) == null || S.continue();
  }
  onOnline() {
    var S;
    const v = this.observers.find((O) => O.shouldFetchOnReconnect());
    v == null || v.refetch({ cancelRefetch: !1 }), (S = $(this, Dr)) == null || S.continue();
  }
  addObserver(v) {
    this.observers.includes(v) || (this.observers.push(v), this.clearGcTimeout(), $(this, Hi).notify({ type: "observerAdded", query: this, observer: v }));
  }
  removeObserver(v) {
    this.observers.includes(v) && (this.observers = this.observers.filter((S) => S !== v), this.observers.length || ($(this, Dr) && ($(this, bc) ? $(this, Dr).cancel({ revert: !0 }) : $(this, Dr).cancelRetry()), this.scheduleGc()), $(this, Hi).notify({ type: "observerRemoved", query: this, observer: v }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || ma(this, yl, Wu).call(this, { type: "invalidate" });
  }
  async fetch(v, S) {
    var te, ue, ze, Z, oe, le, Oe, De, Ve, ot, Be, Re;
    if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    ((te = $(this, Dr)) == null ? void 0 : te.status()) !== "rejected") {
      if (this.state.data !== void 0 && (S != null && S.cancelRefetch))
        this.cancel({ silent: !0 });
      else if ($(this, Dr))
        return $(this, Dr).continueRetry(), $(this, Dr).promise;
    }
    if (v && this.setOptions(v), !this.options.queryFn) {
      const se = this.observers.find((ye) => ye.options.queryFn);
      se && this.setOptions(se.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const O = new AbortController(), W = (se) => {
      Object.defineProperty(se, "signal", {
        enumerable: !0,
        get: () => (at(this, bc, !0), O.signal)
      });
    }, ae = () => {
      const se = MT(this.options, S), Xe = (() => {
        const je = {
          client: $(this, wc),
          queryKey: this.queryKey,
          meta: this.meta
        };
        return W(je), je;
      })();
      return at(this, bc, !1), this.options.persister ? this.options.persister(
        se,
        Xe,
        this
      ) : se(Xe);
    }, he = (() => {
      const se = {
        fetchOptions: S,
        options: this.options,
        queryKey: this.queryKey,
        client: $(this, wc),
        state: this.state,
        fetchFn: ae
      };
      return W(se), se;
    })();
    (ue = this.options.behavior) == null || ue.onFetch(he, this), at(this, Rd, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((ze = he.fetchOptions) == null ? void 0 : ze.meta)) && ma(this, yl, Wu).call(this, { type: "fetch", meta: (Z = he.fetchOptions) == null ? void 0 : Z.meta }), at(this, Dr, UT({
      initialPromise: S == null ? void 0 : S.initialPromise,
      fn: he.fetchFn,
      onCancel: (se) => {
        se instanceof gE && se.revert && this.setState({
          ...$(this, Rd),
          fetchStatus: "idle"
        }), O.abort();
      },
      onFail: (se, ye) => {
        ma(this, yl, Wu).call(this, { type: "failed", failureCount: se, error: ye });
      },
      onPause: () => {
        ma(this, yl, Wu).call(this, { type: "pause" });
      },
      onContinue: () => {
        ma(this, yl, Wu).call(this, { type: "continue" });
      },
      retry: he.options.retry,
      retryDelay: he.options.retryDelay,
      networkMode: he.options.networkMode,
      canRun: () => !0
    }));
    try {
      const se = await $(this, Dr).start();
      if (se === void 0)
        throw process.env.NODE_ENV !== "production" && console.error(
          `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
        ), new Error(`${this.queryHash} data is undefined`);
      return this.setData(se), (le = (oe = $(this, Hi).config).onSuccess) == null || le.call(oe, se, this), (De = (Oe = $(this, Hi).config).onSettled) == null || De.call(
        Oe,
        se,
        this.state.error,
        this
      ), se;
    } catch (se) {
      if (se instanceof gE) {
        if (se.silent)
          return $(this, Dr).promise;
        if (se.revert) {
          if (this.state.data === void 0)
            throw se;
          return this.state.data;
        }
      }
      throw ma(this, yl, Wu).call(this, {
        type: "error",
        error: se
      }), (ot = (Ve = $(this, Hi).config).onError) == null || ot.call(
        Ve,
        se,
        this
      ), (Re = (Be = $(this, Hi).config).onSettled) == null || Re.call(
        Be,
        this.state.data,
        se,
        this
      ), se;
    } finally {
      this.scheduleGc();
    }
  }
}, Tc = new WeakMap(), Rd = new WeakMap(), Hi = new WeakMap(), wc = new WeakMap(), Dr = new WeakMap(), Fv = new WeakMap(), bc = new WeakMap(), yl = new WeakSet(), Wu = function(v) {
  const S = (O) => {
    switch (v.type) {
      case "failed":
        return {
          ...O,
          fetchFailureCount: v.failureCount,
          fetchFailureReason: v.error
        };
      case "pause":
        return {
          ...O,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...O,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...O,
          ...tO(O.data, this.options),
          fetchMeta: v.meta ?? null
        };
      case "success":
        const W = {
          ...O,
          data: v.data,
          dataUpdateCount: O.dataUpdateCount + 1,
          dataUpdatedAt: v.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!v.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
        return at(this, Rd, v.manual ? W : void 0), W;
      case "error":
        const ae = v.error;
        return {
          ...O,
          error: ae,
          errorUpdateCount: O.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: O.fetchFailureCount + 1,
          fetchFailureReason: ae,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...O,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...O,
          ...v.state
        };
    }
  };
  this.state = S(this.state), Ua.batch(() => {
    this.observers.forEach((O) => {
      O.onQueryUpdate();
    }), $(this, Hi).notify({ query: this, type: "updated", action: v });
  });
}, wT);
function tO(g, v) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: NT(v.networkMode) ? "fetching" : "paused",
    ...g === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function mT(g) {
  const v = typeof g.initialData == "function" ? g.initialData() : g.initialData, S = v !== void 0, O = S ? typeof g.initialDataUpdatedAt == "function" ? g.initialDataUpdatedAt() : g.initialDataUpdatedAt : 0;
  return {
    data: v,
    dataUpdateCount: 0,
    dataUpdatedAt: S ? O ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: S ? "success" : "pending",
    fetchStatus: "idle"
  };
}
function yT(g) {
  return {
    onFetch: (v, S) => {
      var ze, Z, oe, le, Oe;
      const O = v.options, W = (oe = (Z = (ze = v.fetchOptions) == null ? void 0 : ze.meta) == null ? void 0 : Z.fetchMore) == null ? void 0 : oe.direction, ae = ((le = v.state.data) == null ? void 0 : le.pages) || [], R = ((Oe = v.state.data) == null ? void 0 : Oe.pageParams) || [];
      let he = { pages: [], pageParams: [] }, te = 0;
      const ue = async () => {
        let De = !1;
        const Ve = (Re) => {
          Object.defineProperty(Re, "signal", {
            enumerable: !0,
            get: () => (v.signal.aborted ? De = !0 : v.signal.addEventListener("abort", () => {
              De = !0;
            }), v.signal)
          });
        }, ot = MT(v.options, v.fetchOptions), Be = async (Re, se, ye) => {
          if (De)
            return Promise.reject();
          if (se == null && Re.pages.length)
            return Promise.resolve(Re);
          const je = (() => {
            const yt = {
              client: v.client,
              queryKey: v.queryKey,
              pageParam: se,
              direction: ye ? "backward" : "forward",
              meta: v.options.meta
            };
            return Ve(yt), yt;
          })(), Bt = await ot(je), { maxPages: en } = v.options, rt = ye ? Wk : Qk;
          return {
            pages: rt(Re.pages, Bt, en),
            pageParams: rt(Re.pageParams, se, en)
          };
        };
        if (W && ae.length) {
          const Re = W === "backward", se = Re ? nO : gT, ye = {
            pages: ae,
            pageParams: R
          }, Xe = se(O, ye);
          he = await Be(ye, Xe, Re);
        } else {
          const Re = g ?? ae.length;
          do {
            const se = te === 0 ? R[0] ?? O.initialPageParam : gT(O, he);
            if (te > 0 && se == null)
              break;
            he = await Be(he, se), te++;
          } while (te < Re);
        }
        return he;
      };
      v.options.persister ? v.fetchFn = () => {
        var De, Ve;
        return (Ve = (De = v.options).persister) == null ? void 0 : Ve.call(
          De,
          ue,
          {
            client: v.client,
            queryKey: v.queryKey,
            meta: v.options.meta,
            signal: v.signal
          },
          S
        );
      } : v.fetchFn = ue;
    }
  };
}
function gT(g, { pages: v, pageParams: S }) {
  const O = v.length - 1;
  return v.length > 0 ? g.getNextPageParam(
    v[O],
    v,
    S[O],
    S
  ) : void 0;
}
function nO(g, { pages: v, pageParams: S }) {
  var O;
  return v.length > 0 ? (O = g.getPreviousPageParam) == null ? void 0 : O.call(g, v[0], v, S[0], S) : void 0;
}
var jv, au, Na, xc, iu, os, bT, rO = (bT = class extends AT {
  constructor(v) {
    super();
    Ut(this, iu);
    Ut(this, jv);
    Ut(this, au);
    Ut(this, Na);
    Ut(this, xc);
    at(this, jv, v.client), this.mutationId = v.mutationId, at(this, Na, v.mutationCache), at(this, au, []), this.state = v.state || aO(), this.setOptions(v.options), this.scheduleGc();
  }
  setOptions(v) {
    this.options = v, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(v) {
    $(this, au).includes(v) || ($(this, au).push(v), this.clearGcTimeout(), $(this, Na).notify({
      type: "observerAdded",
      mutation: this,
      observer: v
    }));
  }
  removeObserver(v) {
    at(this, au, $(this, au).filter((S) => S !== v)), this.scheduleGc(), $(this, Na).notify({
      type: "observerRemoved",
      mutation: this,
      observer: v
    });
  }
  optionalRemove() {
    $(this, au).length || (this.state.status === "pending" ? this.scheduleGc() : $(this, Na).remove(this));
  }
  continue() {
    var v;
    return ((v = $(this, xc)) == null ? void 0 : v.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(v) {
    var R, he, te, ue, ze, Z, oe, le, Oe, De, Ve, ot, Be, Re, se, ye, Xe, je, Bt, en;
    const S = () => {
      ma(this, iu, os).call(this, { type: "continue" });
    }, O = {
      client: $(this, jv),
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    at(this, xc, UT({
      fn: () => this.options.mutationFn ? this.options.mutationFn(v, O) : Promise.reject(new Error("No mutationFn found")),
      onFail: (rt, yt) => {
        ma(this, iu, os).call(this, { type: "failed", failureCount: rt, error: yt });
      },
      onPause: () => {
        ma(this, iu, os).call(this, { type: "pause" });
      },
      onContinue: S,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => $(this, Na).canRun(this)
    }));
    const W = this.state.status === "pending", ae = !$(this, xc).canStart();
    try {
      if (W)
        S();
      else {
        ma(this, iu, os).call(this, { type: "pending", variables: v, isPaused: ae }), await ((he = (R = $(this, Na).config).onMutate) == null ? void 0 : he.call(
          R,
          v,
          this,
          O
        ));
        const yt = await ((ue = (te = this.options).onMutate) == null ? void 0 : ue.call(
          te,
          v,
          O
        ));
        yt !== this.state.context && ma(this, iu, os).call(this, {
          type: "pending",
          context: yt,
          variables: v,
          isPaused: ae
        });
      }
      const rt = await $(this, xc).start();
      return await ((Z = (ze = $(this, Na).config).onSuccess) == null ? void 0 : Z.call(
        ze,
        rt,
        v,
        this.state.context,
        this,
        O
      )), await ((le = (oe = this.options).onSuccess) == null ? void 0 : le.call(
        oe,
        rt,
        v,
        this.state.context,
        O
      )), await ((De = (Oe = $(this, Na).config).onSettled) == null ? void 0 : De.call(
        Oe,
        rt,
        null,
        this.state.variables,
        this.state.context,
        this,
        O
      )), await ((ot = (Ve = this.options).onSettled) == null ? void 0 : ot.call(
        Ve,
        rt,
        null,
        v,
        this.state.context,
        O
      )), ma(this, iu, os).call(this, { type: "success", data: rt }), rt;
    } catch (rt) {
      try {
        throw await ((Re = (Be = $(this, Na).config).onError) == null ? void 0 : Re.call(
          Be,
          rt,
          v,
          this.state.context,
          this,
          O
        )), await ((ye = (se = this.options).onError) == null ? void 0 : ye.call(
          se,
          rt,
          v,
          this.state.context,
          O
        )), await ((je = (Xe = $(this, Na).config).onSettled) == null ? void 0 : je.call(
          Xe,
          void 0,
          rt,
          this.state.variables,
          this.state.context,
          this,
          O
        )), await ((en = (Bt = this.options).onSettled) == null ? void 0 : en.call(
          Bt,
          void 0,
          rt,
          v,
          this.state.context,
          O
        )), rt;
      } finally {
        ma(this, iu, os).call(this, { type: "error", error: rt });
      }
    } finally {
      $(this, Na).runNext(this);
    }
  }
}, jv = new WeakMap(), au = new WeakMap(), Na = new WeakMap(), xc = new WeakMap(), iu = new WeakSet(), os = function(v) {
  const S = (O) => {
    switch (v.type) {
      case "failed":
        return {
          ...O,
          failureCount: v.failureCount,
          failureReason: v.error
        };
      case "pause":
        return {
          ...O,
          isPaused: !0
        };
      case "continue":
        return {
          ...O,
          isPaused: !1
        };
      case "pending":
        return {
          ...O,
          context: v.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: v.isPaused,
          status: "pending",
          variables: v.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...O,
          data: v.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...O,
          data: void 0,
          error: v.error,
          failureCount: O.failureCount + 1,
          failureReason: v.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = S(this.state), Ua.batch(() => {
    $(this, au).forEach((O) => {
      O.onMutationUpdate(v);
    }), $(this, Na).notify({
      mutation: this,
      type: "updated",
      action: v
    });
  });
}, bT);
function aO() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var qu, gl, Hv, xT, iO = (xT = class extends Ay {
  constructor(v = {}) {
    super();
    Ut(this, qu);
    Ut(this, gl);
    Ut(this, Hv);
    this.config = v, at(this, qu, /* @__PURE__ */ new Set()), at(this, gl, /* @__PURE__ */ new Map()), at(this, Hv, 0);
  }
  build(v, S, O) {
    const W = new rO({
      client: v,
      mutationCache: this,
      mutationId: ++ky(this, Hv)._,
      options: v.defaultMutationOptions(S),
      state: O
    });
    return this.add(W), W;
  }
  add(v) {
    $(this, qu).add(v);
    const S = Ly(v);
    if (typeof S == "string") {
      const O = $(this, gl).get(S);
      O ? O.push(v) : $(this, gl).set(S, [v]);
    }
    this.notify({ type: "added", mutation: v });
  }
  remove(v) {
    if ($(this, qu).delete(v)) {
      const S = Ly(v);
      if (typeof S == "string") {
        const O = $(this, gl).get(S);
        if (O)
          if (O.length > 1) {
            const W = O.indexOf(v);
            W !== -1 && O.splice(W, 1);
          } else O[0] === v && $(this, gl).delete(S);
      }
    }
    this.notify({ type: "removed", mutation: v });
  }
  canRun(v) {
    const S = Ly(v);
    if (typeof S == "string") {
      const O = $(this, gl).get(S), W = O == null ? void 0 : O.find(
        (ae) => ae.state.status === "pending"
      );
      return !W || W === v;
    } else
      return !0;
  }
  runNext(v) {
    var O;
    const S = Ly(v);
    if (typeof S == "string") {
      const W = (O = $(this, gl).get(S)) == null ? void 0 : O.find((ae) => ae !== v && ae.state.isPaused);
      return (W == null ? void 0 : W.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    Ua.batch(() => {
      $(this, qu).forEach((v) => {
        this.notify({ type: "removed", mutation: v });
      }), $(this, qu).clear(), $(this, gl).clear();
    });
  }
  getAll() {
    return Array.from($(this, qu));
  }
  find(v) {
    const S = { exact: !0, ...v };
    return this.getAll().find(
      (O) => pT(S, O)
    );
  }
  findAll(v = {}) {
    return this.getAll().filter((S) => pT(v, S));
  }
  notify(v) {
    Ua.batch(() => {
      this.listeners.forEach((S) => {
        S(v);
      });
    });
  }
  resumePausedMutations() {
    const v = this.getAll().filter((S) => S.state.isPaused);
    return Ua.batch(
      () => Promise.all(
        v.map((S) => S.continue().catch(ml))
      )
    );
  }
}, qu = new WeakMap(), gl = new WeakMap(), Hv = new WeakMap(), xT);
function Ly(g) {
  var v;
  return (v = g.options.scope) == null ? void 0 : v.id;
}
var lu, _T, lO = (_T = class extends Ay {
  constructor(v = {}) {
    super();
    Ut(this, lu);
    this.config = v, at(this, lu, /* @__PURE__ */ new Map());
  }
  build(v, S, O) {
    const W = S.queryKey, ae = S.queryHash ?? SE(W, S);
    let R = this.get(ae);
    return R || (R = new eO({
      client: v,
      queryKey: W,
      queryHash: ae,
      options: v.defaultQueryOptions(S),
      state: O,
      defaultOptions: v.getQueryDefaults(W)
    }), this.add(R)), R;
  }
  add(v) {
    $(this, lu).has(v.queryHash) || ($(this, lu).set(v.queryHash, v), this.notify({
      type: "added",
      query: v
    }));
  }
  remove(v) {
    const S = $(this, lu).get(v.queryHash);
    S && (v.destroy(), S === v && $(this, lu).delete(v.queryHash), this.notify({ type: "removed", query: v }));
  }
  clear() {
    Ua.batch(() => {
      this.getAll().forEach((v) => {
        this.remove(v);
      });
    });
  }
  get(v) {
    return $(this, lu).get(v);
  }
  getAll() {
    return [...$(this, lu).values()];
  }
  find(v) {
    const S = { exact: !0, ...v };
    return this.getAll().find(
      (O) => dT(S, O)
    );
  }
  findAll(v = {}) {
    const S = this.getAll();
    return Object.keys(v).length > 0 ? S.filter((O) => dT(v, O)) : S;
  }
  notify(v) {
    Ua.batch(() => {
      this.listeners.forEach((S) => {
        S(v);
      });
    });
  }
  onFocus() {
    Ua.batch(() => {
      this.getAll().forEach((v) => {
        v.onFocus();
      });
    });
  }
  onOnline() {
    Ua.batch(() => {
      this.getAll().forEach((v) => {
        v.onOnline();
      });
    });
  }
}, lu = new WeakMap(), _T), Bn, fs, ds, Td, wd, ps, bd, xd, DT, uO = (DT = class {
  constructor(g = {}) {
    Ut(this, Bn);
    Ut(this, fs);
    Ut(this, ds);
    Ut(this, Td);
    Ut(this, wd);
    Ut(this, ps);
    Ut(this, bd);
    Ut(this, xd);
    at(this, Bn, g.queryCache || new lO()), at(this, fs, g.mutationCache || new iO()), at(this, ds, g.defaultOptions || {}), at(this, Td, /* @__PURE__ */ new Map()), at(this, wd, /* @__PURE__ */ new Map()), at(this, ps, 0);
  }
  mount() {
    ky(this, ps)._++, $(this, ps) === 1 && (at(this, bd, LT.subscribe(async (g) => {
      g && (await this.resumePausedMutations(), $(this, Bn).onFocus());
    })), at(this, xd, Uy.subscribe(async (g) => {
      g && (await this.resumePausedMutations(), $(this, Bn).onOnline());
    })));
  }
  unmount() {
    var g, v;
    ky(this, ps)._--, $(this, ps) === 0 && ((g = $(this, bd)) == null || g.call(this), at(this, bd, void 0), (v = $(this, xd)) == null || v.call(this), at(this, xd, void 0));
  }
  isFetching(g) {
    return $(this, Bn).findAll({ ...g, fetchStatus: "fetching" }).length;
  }
  isMutating(g) {
    return $(this, fs).findAll({ ...g, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(g) {
    var S;
    const v = this.defaultQueryOptions({ queryKey: g });
    return (S = $(this, Bn).get(v.queryHash)) == null ? void 0 : S.state.data;
  }
  ensureQueryData(g) {
    const v = this.defaultQueryOptions(g), S = $(this, Bn).build(this, v), O = S.state.data;
    return O === void 0 ? this.fetchQuery(g) : (g.revalidateIfStale && S.isStaleByTime(hE(v.staleTime, S)) && this.prefetchQuery(v), Promise.resolve(O));
  }
  getQueriesData(g) {
    return $(this, Bn).findAll(g).map(({ queryKey: v, state: S }) => {
      const O = S.data;
      return [v, O];
    });
  }
  setQueryData(g, v, S) {
    const O = this.defaultQueryOptions({ queryKey: g }), W = $(this, Bn).get(
      O.queryHash
    ), ae = W == null ? void 0 : W.state.data, R = Hk(v, ae);
    if (R !== void 0)
      return $(this, Bn).build(this, O).setData(R, { ...S, manual: !0 });
  }
  setQueriesData(g, v, S) {
    return Ua.batch(
      () => $(this, Bn).findAll(g).map(({ queryKey: O }) => [
        O,
        this.setQueryData(O, v, S)
      ])
    );
  }
  getQueryState(g) {
    var S;
    const v = this.defaultQueryOptions({ queryKey: g });
    return (S = $(this, Bn).get(
      v.queryHash
    )) == null ? void 0 : S.state;
  }
  removeQueries(g) {
    const v = $(this, Bn);
    Ua.batch(() => {
      v.findAll(g).forEach((S) => {
        v.remove(S);
      });
    });
  }
  resetQueries(g, v) {
    const S = $(this, Bn);
    return Ua.batch(() => (S.findAll(g).forEach((O) => {
      O.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...g
      },
      v
    )));
  }
  cancelQueries(g, v = {}) {
    const S = { revert: !0, ...v }, O = Ua.batch(
      () => $(this, Bn).findAll(g).map((W) => W.cancel(S))
    );
    return Promise.all(O).then(ml).catch(ml);
  }
  invalidateQueries(g, v = {}) {
    return Ua.batch(() => ($(this, Bn).findAll(g).forEach((S) => {
      S.invalidate();
    }), (g == null ? void 0 : g.refetchType) === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...g,
        type: (g == null ? void 0 : g.refetchType) ?? (g == null ? void 0 : g.type) ?? "active"
      },
      v
    )));
  }
  refetchQueries(g, v = {}) {
    const S = {
      ...v,
      cancelRefetch: v.cancelRefetch ?? !0
    }, O = Ua.batch(
      () => $(this, Bn).findAll(g).filter((W) => !W.isDisabled() && !W.isStatic()).map((W) => {
        let ae = W.fetch(void 0, S);
        return S.throwOnError || (ae = ae.catch(ml)), W.state.fetchStatus === "paused" ? Promise.resolve() : ae;
      })
    );
    return Promise.all(O).then(ml);
  }
  fetchQuery(g) {
    const v = this.defaultQueryOptions(g);
    v.retry === void 0 && (v.retry = !1);
    const S = $(this, Bn).build(this, v);
    return S.isStaleByTime(
      hE(v.staleTime, S)
    ) ? S.fetch(v) : Promise.resolve(S.state.data);
  }
  prefetchQuery(g) {
    return this.fetchQuery(g).then(ml).catch(ml);
  }
  fetchInfiniteQuery(g) {
    return g.behavior = yT(g.pages), this.fetchQuery(g);
  }
  prefetchInfiniteQuery(g) {
    return this.fetchInfiniteQuery(g).then(ml).catch(ml);
  }
  ensureInfiniteQueryData(g) {
    return g.behavior = yT(g.pages), this.ensureQueryData(g);
  }
  resumePausedMutations() {
    return Uy.isOnline() ? $(this, fs).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return $(this, Bn);
  }
  getMutationCache() {
    return $(this, fs);
  }
  getDefaultOptions() {
    return $(this, ds);
  }
  setDefaultOptions(g) {
    at(this, ds, g);
  }
  setQueryDefaults(g, v) {
    $(this, Td).set(Av(g), {
      queryKey: g,
      defaultOptions: v
    });
  }
  getQueryDefaults(g) {
    const v = [...$(this, Td).values()], S = {};
    return v.forEach((O) => {
      zv(g, O.queryKey) && Object.assign(S, O.defaultOptions);
    }), S;
  }
  setMutationDefaults(g, v) {
    $(this, wd).set(Av(g), {
      mutationKey: g,
      defaultOptions: v
    });
  }
  getMutationDefaults(g) {
    const v = [...$(this, wd).values()], S = {};
    return v.forEach((O) => {
      zv(g, O.mutationKey) && Object.assign(S, O.defaultOptions);
    }), S;
  }
  defaultQueryOptions(g) {
    if (g._defaulted)
      return g;
    const v = {
      ...$(this, ds).queries,
      ...this.getQueryDefaults(g.queryKey),
      ...g,
      _defaulted: !0
    };
    return v.queryHash || (v.queryHash = SE(
      v.queryKey,
      v
    )), v.refetchOnReconnect === void 0 && (v.refetchOnReconnect = v.networkMode !== "always"), v.throwOnError === void 0 && (v.throwOnError = !!v.suspense), !v.networkMode && v.persister && (v.networkMode = "offlineFirst"), v.queryFn === Ny && (v.enabled = !1), v;
  }
  defaultMutationOptions(g) {
    return g != null && g._defaulted ? g : {
      ...$(this, ds).mutations,
      ...(g == null ? void 0 : g.mutationKey) && this.getMutationDefaults(g.mutationKey),
      ...g,
      _defaulted: !0
    };
  }
  clear() {
    $(this, Bn).clear(), $(this, fs).clear();
  }
}, Bn = new WeakMap(), fs = new WeakMap(), ds = new WeakMap(), Td = new WeakMap(), wd = new WeakMap(), ps = new WeakMap(), bd = new WeakMap(), xd = new WeakMap(), DT), oO = _c.createContext(
  void 0
), sO = ({
  client: g,
  children: v
}) => (_c.useEffect(() => (g.mount(), () => {
  g.unmount();
}), [g]), /* @__PURE__ */ dE.jsx(oO.Provider, { value: g, children: v }));
const cO = new uO({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1e3,
      // ✅ 5 min stale duration
      gcTime: 30 * 60 * 1e3,
      // ✅ keep cached data for 30 min in memory
      retry: 1,
      // ✅ retry once if failed
      refetchOnWindowFocus: !0,
      refetchOnReconnect: !0
    }
  }
}), ST = () => (console.log("[CreativeCampaignsEmbed] Rendering with full provider tree"), /* @__PURE__ */ dE.jsx(sO, { client: cO, children: /* @__PURE__ */ dE.jsx("h1", { className: "sr-only", children: "Creative Campaigns Widget" }) }));
class fO extends HTMLElement {
  constructor() {
    super(...arguments);
    lE(this, "__root");
    lE(this, "__mounted", !1);
  }
  connectedCallback() {
    if (this.__mounted) return;
    this.__mounted = !0, console.log("[CreativeCampaignsWidget] connectedCallback - mounting React app");
    const S = document.createElement("div");
    S.className = "creative-campaigns-embed", this.appendChild(S);
    const O = Uv.createRoot(S);
    O.render(aT.createElement(ST)), this.__root = O;
  }
  disconnectedCallback() {
    this.__root && this.__root.unmount();
  }
  static get observedAttributes() {
    return ["id", "token", "client"];
  }
  attributeChangedCallback() {
    this.__root && this.__root.render(aT.createElement(ST));
  }
}
customElements.define("creative-campaigns-widget", fO);
export {
  ST as default
};
//# sourceMappingURL=creative-campaigns-widget.js.map
