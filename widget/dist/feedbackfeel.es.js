import ee, { useState as re } from "react";
var R = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function te() {
  if (F) return b;
  F = 1;
  var u = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function c(i, o, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      s = {};
      for (var m in o)
        m !== "key" && (s[m] = o[m]);
    } else s = o;
    return o = s.ref, {
      $$typeof: u,
      type: i,
      key: d,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return b.Fragment = l, b.jsx = c, b.jsxs = c, b;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function ne() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && (function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case J:
          return "Profiler";
        case U:
          return "StrictMode";
        case G:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return "Portal";
          case V:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function c(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), l(e);
      }
    }
    function i(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        w || (w = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function M() {
      var e = u(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, p, S) {
      var a = t.ref;
      return e = {
        $$typeof: j,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: p
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, t, n, p, S) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Q(a)) {
            for (n = 0; n < a.length; n++)
              g(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(a);
      if (P.call(r, "key")) {
        a = u(e);
        var f = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", $[a + n] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          f,
          a
        ), $[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), d(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var x in r)
          x !== "key" && (t[x] = r[x]);
      } else t = r;
      return a && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        a,
        t,
        o(),
        p,
        S
      );
    }
    function g(e) {
      A(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? A(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    var E = ee, j = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), V = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), y = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, Q = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var w, N = {}, C = E.react_stack_bottom_frame.bind(
      E,
      s
    )(), Y = O(i(s)), $ = {};
    _.Fragment = T, _.jsx = function(e, r, t) {
      var n = 1e4 > y.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : C,
        n ? O(i(e)) : Y
      );
    }, _.jsxs = function(e, r, t) {
      var n = 1e4 > y.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : C,
        n ? O(i(e)) : Y
      );
    };
  })()), _;
}
var D;
function ae() {
  return D || (D = 1, process.env.NODE_ENV === "production" ? R.exports = te() : R.exports = ne()), R.exports;
}
var v = ae();
function se({ apiKey: u }) {
  const [l, c] = re(""), i = async () => {
    l.trim() && (await fetch("https://your-backend.com/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": u
      },
      body: JSON.stringify({ feedback: l })
    }), alert("Thanks for your feedback!"), c(""));
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      style: { border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" },
      children: [
        /* @__PURE__ */ v.jsx(
          "textarea",
          {
            value: l,
            onChange: (o) => c(o.target.value),
            placeholder: "Your feedback..."
          }
        ),
        /* @__PURE__ */ v.jsx("br", {}),
        /* @__PURE__ */ v.jsx("button", { onClick: i, children: "Submit" })
      ]
    }
  );
}
export {
  se as FeedbackWidget
};
