"use strict";
this.default_ContributorIabTcfV2ClientJs = this.default_ContributorIabTcfV2ClientJs || {};
(function(_) {
    var window = this;
    try {
        var aa = function() {
            var a = k.navigator;
            return a && (a = a.userAgent) ? a : ""
        }
          , n = function(a) {
            return -1 != aa().indexOf(a)
        }
          , ba = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a))
                    return e;
            return -1
        }
          , da = function(a, b) {
            b = ca(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        }
          , ea = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++)
                    c[d] = a[d];
                return c
            }
            return []
        }
          , ia = function(a, b) {
            if (!fa(a) || !fa(b) || a.length != b.length)
                return !1;
            for (var c = a.length, d = ha, e = 0; e < c; e++)
                if (!d(a[e], b[e]))
                    return !1;
            return !0
        }
          , ha = function(a, b) {
            return a === b
        }
          , la = function(a) {
            return null == a || ja(a) ? a : "string" === typeof a ? ka(a) : null
        }
          , ja = function(a) {
            return ma && null != a && a instanceof Uint8Array
        }
          , oa = function(a, b) {
            Object.isFrozen(a) || (na ? a[na] |= b : void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
                g: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            }))
        }
          , pa = function(a) {
            var b;
            na ? b = a[na] : b = a.g;
            return null == b ? 0 : b
        }
          , qa = function(a) {
            return Array.isArray(a) ? !!(pa(a) & 1) : !1
        }
          , ra = function(a) {
            oa(a, 1);
            return a
        }
          , sa = function(a) {
            return Array.isArray(a) ? !!(pa(a) & 2) : !1
        }
          , ta = function(a) {
            if (!Array.isArray(a))
                throw Error("p");
            oa(a, 2)
        }
          , ua = function(a) {
            return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
        }
          , va = function(a) {
            return {
                value: a,
                configurable: !1,
                writable: !1,
                enumerable: !1
            }
        }
          , r = function(a, b, c, d) {
            wa(a);
            c !== d ? q(a, b, c) : q(a, b, void 0, !1, !1);
            return a
        }
          , ya = function(a, b) {
            a = a || {};
            b = b || {};
            var c = {}, d;
            for (d in a)
                c[d] = 0;
            for (var e in b)
                c[e] = 0;
            for (var f in c)
                if (!xa(a[f], b[f]))
                    return !1;
            return !0
        }
          , za = function(a) {
            return a && "object" === typeof a ? a.u || a : a
        }
          , xa = function(a, b) {
            a = za(a);
            b = za(b);
            if (a == b)
                return !0;
            if (ma) {
                var c = ja(a)
                  , d = ja(b);
                if (c || d) {
                    if (!c)
                        if ("string" === typeof a)
                            a = la(a);
                        else
                            return !1;
                    if (d)
                        d = b;
                    else if ("string" === typeof b)
                        d = la(b);
                    else
                        return !1;
                    if (a.length !== d.length)
                        return !1;
                    for (b = 0; b < a.length; b++)
                        if (a[b] !== d[b])
                            return !1;
                    return !0
                }
            }
            if (null == a && Array.isArray(b) && qa(b) && !b.length || null == b && Array.isArray(a) && qa(a) && !a.length)
                return !0;
            if (!Aa(a) || !Aa(b))
                return "number" === typeof a && isNaN(a) || "number" === typeof b && isNaN(b) ? String(a) == String(b) : !1;
            if (a.constructor != b.constructor)
                return !1;
            if (a.constructor === Array) {
                d = a;
                c = a = void 0;
                for (var e = Math.max(d.length, b.length), f = 0; f < e; f++) {
                    var g = d[f]
                      , h = b[f];
                    g && g.constructor == Object && (a = g,
                    g = void 0);
                    h && h.constructor == Object && (c = h,
                    h = void 0);
                    if (!xa(g, h))
                        return !1
                }
                return a || c ? (a = a || {},
                c = c || {},
                ya(a, c)) : !0
            }
            if (a.constructor === Object)
                return ya(a, b);
            throw Error("r");
        }
          , Ca = function(a) {
            switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a) && ja(a))
                    return Ba(a)
            }
            return a
        }
          , Fa = function(a, b) {
            b = void 0 === b ? Da : b;
            return Ea(a, b)
        }
          , Ga = function(a, b) {
            if (null != a) {
                if (Array.isArray(a))
                    a = Ea(a, b);
                else if (ua(a)) {
                    var c = {}, d;
                    for (d in a)
                        c[d] = Ga(a[d], b);
                    a = c
                } else
                    a = b(a);
                return a
            }
        }
          , Ea = function(a, b) {
            for (var c = a.slice(), d = 0; d < c.length; d++)
                c[d] = Ga(c[d], b);
            qa(a) && ra(c);
            return c
        }
          , Ha = function(a) {
            if (a && "object" == typeof a && a.toJSON)
                return a.toJSON();
            a = Ca(a);
            return Array.isArray(a) ? Fa(a, Ha) : a
        }
          , Da = function(a) {
            return ja(a) ? new Uint8Array(a) : a
        }
          , Ja = function(a, b) {
            Ia = b;
            a = new a(b);
            Ia = null;
            return a
        }
          , La = function(_a, b) {
            return Ca(b)
        }
          , Ma = function(a, b) {
            b.l && (a.l = b.l.slice());
            var c = b.g;
            if (c) {
                b = b.h;
                for (var d in c) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d])
                          , g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = t(a, e[0].constructor, g, f),
                                g = 0; g < Math.min(f.length, e.length); g++)
                                    Ma(f[g], e[g])
                        } else
                            (f = u(a, e.constructor, g, void 0, f)) && Ma(f, e)
                    }
                }
            }
        }
          , Na = function(a, b) {
            for (var c in a)
                b.call(void 0, a[c], c, a)
        }
          , Oa = function(a) {
            var b = [], c = 0, d;
            for (d in a)
                b[c++] = a[d];
            return b
        }
          , Qa = function(a, _b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d)
                    a[c] = d[c];
                for (var f = 0; f < Pa.length; f++)
                    c = Pa[f],
                    Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        }
          , Ta = function(a) {
            return (a = Ra(a)) ? u(a, Sa, 4) : null
        }
          , Ra = function(a) {
            a = Ua(a, "FCCDCF");
            try {
                return a ? Va(Wa, a) : null
            } catch (b) {
                return null
            }
        }
          , Ua = function(a, b) {
            return (a = (new Xa(a)).get(b, "")) ? a : null
        }
          , ab = function(a) {
            var b, c = null === (b = Ya()) || void 0 === b ? void 0 : b.createHTML(a);
            return new Za(null !== c && void 0 !== c ? c : a,$a)
        }
          , cb = function(a) {
            if (a instanceof Za)
                return a.g;
            throw Error("L");
        }
          , db = function(a) {
            a = cb(a);
            var b = "undefined" !== typeof window ? window.trustedTypes : void 0;
            b = null !== b && void 0 !== b ? b : null;
            return (null === b || void 0 === b ? 0 : b.isHTML(a)) ? TrustedHTML.prototype.toString.apply(a) : a
        }
          , fb = function(a) {
            if (a instanceof eb)
                return a.g;
            throw Error("L");
        }
          , ib = function(a) {
            return a instanceof gb ? cb(a) : hb(a)
        }
          , jb = function(a, b) {
            if (void 0 !== a.tagName && void 0 !== a.tagName) {
                if ("script" === a.tagName.toLowerCase())
                    throw Error("M");
                if ("style" === a.tagName.toLowerCase())
                    throw Error("N");
            }
            a.innerHTML = ib(b)
        }
          , kb = function(a) {
            var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document, d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
            (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
        }
          , lb = function(a) {
            var b = document.createElement("template");
            if (!("content"in b)) {
                b = ab("<html><body>" + a);
                b = (new DOMParser).parseFromString(ib(b), "text/html");
                for (a = b.createDocumentFragment(); 0 < b.body.childNodes.length; )
                    a.appendChild(b.body.firstChild);
                return a
            }
            a = ab(a);
            jb(b, a);
            return b.content
        }
          , mb = function(a) {
            a = a.nodeName;
            return "string" === typeof a ? a : "FORM"
        }
          , nb = function(a) {
            a = a.nodeType;
            return a === Node.ELEMENT_NODE || "number" !== typeof a
        }
          , pb = function(a) {
            return new ob(function(b) {
                return b.substr(0, a.length + 1).toLowerCase() === a + ":"
            }
            )
        }
          , xb = function(a, b, c, d) {
            a = a(b || qb, c);
            d = d || rb();
            d = sb(d.g, "DIV");
            if (Aa(a))
                if (a instanceof w) {
                    if (a.H !== tb)
                        throw Error("S");
                    a = ub(a.toString(), a.N || null)
                } else
                    a = vb("zSoyz");
            else
                a = vb(String(a));
            wb(d, a);
            1 == d.childNodes.length && (a = d.firstChild,
            1 == a.nodeType && (d = a));
            return d
        }
          , yb = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }
          , zb = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype)
                return a;
            a[b] = c.value;
            return a
        }
          , Ab = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math)
                    return c
            }
            throw Error("a");
        }
          , Bb = Ab(this)
          , x = function(a, b) {
            if (b)
                a: {
                    var c = Bb;
                    a = a.split(".");
                    for (var d = 0; d < a.length - 1; d++) {
                        var e = a[d];
                        if (!(e in c))
                            break a;
                        c = c[e]
                    }
                    a = a[a.length - 1];
                    d = c[a];
                    b = b(d);
                    b != d && null != b && zb(c, a, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
        };
        x("Symbol", function(a) {
            if (a)
                return a;
            var b = function(f, g) {
                this.g = f;
                zb(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: g
                })
            };
            b.prototype.toString = function() {
                return this.g
            }
            ;
            var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
              , d = 0
              , e = function(f) {
                if (this instanceof e)
                    throw new TypeError("b");
                return new b(c + (f || "") + "_" + d++,f)
            };
            return e
        });
        x("Symbol.iterator", function(a) {
            if (a)
                return a;
            a = Symbol("c");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                var d = Bb[b[c]];
                "function" === typeof d && "function" != typeof d.prototype[a] && zb(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return Cb(yb(this))
                    }
                })
            }
            return a
        });
        var Cb = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            }
            ;
            return a
        }, y = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: yb(a)
            }
        }, Db = function(a) {
            if (!(a instanceof Array)) {
                a = y(a);
                for (var b, c = []; !(b = a.next()).done; )
                    c.push(b.value);
                a = c
            }
            return a
        }, Eb = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        }
        , Fb;
        if ("function" == typeof Object.setPrototypeOf)
            Fb = Object.setPrototypeOf;
        else {
            var Hb;
            a: {
                var Ib = {
                    a: !0
                }
                  , Jb = {};
                try {
                    Jb.__proto__ = Ib;
                    Hb = Jb.a;
                    break a
                } catch (a) {}
                Hb = !1
            }
            Fb = Hb ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b)
                    throw new TypeError("d`" + a);
                return a
            }
            : null
        }
        var Kb = Fb
          , z = function(a, b) {
            a.prototype = Eb(b.prototype);
            a.prototype.constructor = a;
            if (Kb)
                Kb(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.aa = b.prototype
        }
          , Lb = function() {
            this.j = !1;
            this.g = null;
            this.o = void 0;
            this.h = 1;
            this.s = this.l = 0;
            this.i = null
        }
          , Mb = function(a) {
            if (a.j)
                throw new TypeError("f");
            a.j = !0
        };
        Lb.prototype.m = function(a) {
            this.o = a
        }
        ;
        var Nb = function(a, b) {
            a.i = {
                oa: b,
                sa: !0
            };
            a.h = a.l || a.s
        };
        Lb.prototype.return = function(a) {
            this.i = {
                return: a
            };
            this.h = this.s
        }
        ;
        var Ob = function(a) {
            this.g = new Lb;
            this.h = a
        }
          , Rb = function(a, b) {
            Mb(a.g);
            var c = a.g.g;
            if (c)
                return Pb(a, "return"in c ? c["return"] : function(d) {
                    return {
                        value: d,
                        done: !0
                    }
                }
                , b, a.g.return);
            a.g.return(b);
            return Qb(a)
        }
          , Pb = function(a, b, c, d) {
            try {
                var e = b.call(a.g.g, c);
                if (!(e instanceof Object))
                    throw new TypeError("e`" + e);
                if (!e.done)
                    return a.g.j = !1,
                    e;
                var f = e.value
            } catch (g) {
                return a.g.g = null,
                Nb(a.g, g),
                Qb(a)
            }
            a.g.g = null;
            d.call(a.g, f);
            return Qb(a)
        }
          , Qb = function(a) {
            for (; a.g.h; )
                try {
                    var b = a.h(a.g);
                    if (b)
                        return a.g.j = !1,
                        {
                            value: b.value,
                            done: !1
                        }
                } catch (c) {
                    a.g.o = void 0,
                    Nb(a.g, c)
                }
            a.g.j = !1;
            if (a.g.i) {
                b = a.g.i;
                a.g.i = null;
                if (b.sa)
                    throw b.oa;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        }
          , Sb = function(a) {
            this.next = function(b) {
                Mb(a.g);
                a.g.g ? b = Pb(a, a.g.g.next, b, a.g.m) : (a.g.m(b),
                b = Qb(a));
                return b
            }
            ;
            this.throw = function(b) {
                Mb(a.g);
                a.g.g ? b = Pb(a, a.g.g["throw"], b, a.g.m) : (Nb(a.g, b),
                b = Qb(a));
                return b
            }
            ;
            this.return = function(b) {
                return Rb(a, b)
            }
            ;
            this[Symbol.iterator] = function() {
                return this
            }
        }
          , Tb = function(a) {
            function b(d) {
                return a.next(d)
            }
            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            }
            )
        }
          , Ub = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
                b[c - a] = arguments[c];
            return b
        };
        x("Promise", function(a) {
            function b() {
                this.g = null
            }
            function c(g) {
                return g instanceof e ? g : new e(function(h) {
                    h(g)
                }
                )
            }
            if (a)
                return a;
            b.prototype.h = function(g) {
                if (null == this.g) {
                    this.g = [];
                    var h = this;
                    this.i(function() {
                        h.l()
                    })
                }
                this.g.push(g)
            }
            ;
            var d = Bb.setTimeout;
            b.prototype.i = function(g) {
                d(g, 0)
            }
            ;
            b.prototype.l = function() {
                for (; this.g && this.g.length; ) {
                    var g = this.g;
                    this.g = [];
                    for (var h = 0; h < g.length; ++h) {
                        var l = g[h];
                        g[h] = null;
                        try {
                            l()
                        } catch (m) {
                            this.j(m)
                        }
                    }
                }
                this.g = null
            }
            ;
            b.prototype.j = function(g) {
                this.i(function() {
                    throw g;
                })
            }
            ;
            var e = function(g) {
                this.g = 0;
                this.i = void 0;
                this.h = [];
                this.o = !1;
                var h = this.j();
                try {
                    g(h.resolve, h.reject)
                } catch (l) {
                    h.reject(l)
                }
            };
            e.prototype.j = function() {
                function g(m) {
                    return function(p) {
                        l || (l = !0,
                        m.call(h, p))
                    }
                }
                var h = this
                  , l = !1;
                return {
                    resolve: g(this.F),
                    reject: g(this.l)
                }
            }
            ;
            e.prototype.F = function(g) {
                if (g === this)
                    this.l(new TypeError("g"));
                else if (g instanceof e)
                    this.J(g);
                else {
                    a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                    }
                    h ? this.B(g) : this.m(g)
                }
            }
            ;
            e.prototype.B = function(g) {
                var h = void 0;
                try {
                    h = g.then
                } catch (l) {
                    this.l(l);
                    return
                }
                "function" == typeof h ? this.K(h, g) : this.m(g)
            }
            ;
            e.prototype.l = function(g) {
                this.s(2, g)
            }
            ;
            e.prototype.m = function(g) {
                this.s(1, g)
            }
            ;
            e.prototype.s = function(g, h) {
                if (0 != this.g)
                    throw Error("h`" + g + "`" + h + "`" + this.g);
                this.g = g;
                this.i = h;
                2 === this.g && this.G();
                this.v()
            }
            ;
            e.prototype.G = function() {
                var g = this;
                d(function() {
                    if (g.A()) {
                        var h = Bb.console;
                        "undefined" !== typeof h && h.error(g.i)
                    }
                }, 1)
            }
            ;
            e.prototype.A = function() {
                if (this.o)
                    return !1;
                var g = Bb.CustomEvent
                  , h = Bb.Event
                  , l = Bb.dispatchEvent;
                if ("undefined" === typeof l)
                    return !0;
                "function" === typeof g ? g = new g("unhandledrejection",{
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection",{
                    cancelable: !0
                }) : (g = Bb.document.createEvent("CustomEvent"),
                g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.i;
                return l(g)
            }
            ;
            e.prototype.v = function() {
                if (null != this.h) {
                    for (var g = 0; g < this.h.length; ++g)
                        f.h(this.h[g]);
                    this.h = null
                }
            }
            ;
            var f = new b;
            e.prototype.J = function(g) {
                var h = this.j();
                g.P(h.resolve, h.reject)
            }
            ;
            e.prototype.K = function(g, h) {
                var l = this.j();
                try {
                    g.call(h, l.resolve, l.reject)
                } catch (m) {
                    l.reject(m)
                }
            }
            ;
            e.prototype.then = function(g, h) {
                function l(A, C) {
                    return "function" == typeof A ? function(R) {
                        try {
                            m(A(R))
                        } catch (Q) {
                            p(Q)
                        }
                    }
                    : C
                }
                var m, p, v = new e(function(A, C) {
                    m = A;
                    p = C
                }
                );
                this.P(l(g, m), l(h, p));
                return v
            }
            ;
            e.prototype.catch = function(g) {
                return this.then(void 0, g)
            }
            ;
            e.prototype.P = function(g, h) {
                function l() {
                    switch (m.g) {
                    case 1:
                        g(m.i);
                        break;
                    case 2:
                        h(m.i);
                        break;
                    default:
                        throw Error("i`" + m.g);
                    }
                }
                var m = this;
                null == this.h ? f.h(l) : this.h.push(l);
                this.o = !0
            }
            ;
            e.resolve = c;
            e.reject = function(g) {
                return new e(function(_h, l) {
                    l(g)
                }
                )
            }
            ;
            e.race = function(g) {
                return new e(function(h, l) {
                    for (var m = y(g), p = m.next(); !p.done; p = m.next())
                        c(p.value).P(h, l)
                }
                )
            }
            ;
            e.all = function(g) {
                var h = y(g)
                  , l = h.next();
                return l.done ? c([]) : new e(function(m, p) {
                    function v(R) {
                        return function(Q) {
                            A[R] = Q;
                            C--;
                            0 == C && m(A)
                        }
                    }
                    var A = []
                      , C = 0;
                    do
                        A.push(void 0),
                        C++,
                        c(l.value).P(v(A.length - 1), p),
                        l = h.next();
                    while (!l.done)
                }
                )
            }
            ;
            return e
        });
        var Vb = function(a, b) {
            if (null == a)
                throw new TypeError("j`" + b);
            return a + ""
        };
        x("Array.prototype.find", function(a) {
            return a ? a : function(b, c) {
                a: {
                    var d = this;
                    d instanceof String && (d = String(d));
                    for (var e = d.length, f = 0; f < e; f++) {
                        var g = d[f];
                        if (b.call(c, g, f, d)) {
                            b = g;
                            break a
                        }
                    }
                    b = void 0
                }
                return b
            }
        });
        var Wb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        x("WeakMap", function(a) {
            function b() {}
            function c(l) {
                var m = typeof l;
                return "object" === m && null !== l || "function" === m
            }
            function d(l) {
                if (!Wb(l, f)) {
                    var m = new b;
                    zb(l, f, {
                        value: m
                    })
                }
            }
            function e(l) {
                var m = Object[l];
                m && (Object[l] = function(p) {
                    if (p instanceof b)
                        return p;
                    Object.isExtensible(p) && d(p);
                    return m(p)
                }
                )
            }
            if (function() {
                if (!a || !Object.seal)
                    return !1;
                try {
                    var l = Object.seal({})
                      , m = Object.seal({})
                      , p = new a([[l, 2], [m, 3]]);
                    if (2 != p.get(l) || 3 != p.get(m))
                        return !1;
                    p.delete(l);
                    p.set(m, 4);
                    return !p.has(l) && 4 == p.get(m)
                } catch (v) {
                    return !1
                }
            }())
                return a;
            var f = "$jscomp_hidden_" + Math.random();
            e("freeze");
            e("preventExtensions");
            e("seal");
            var g = 0
              , h = function(l) {
                this.g = (g += Math.random() + 1).toString();
                if (l) {
                    l = y(l);
                    for (var m; !(m = l.next()).done; )
                        m = m.value,
                        this.set(m[0], m[1])
                }
            };
            h.prototype.set = function(l, m) {
                if (!c(l))
                    throw Error("l");
                d(l);
                if (!Wb(l, f))
                    throw Error("m`" + l);
                l[f][this.g] = m;
                return this
            }
            ;
            h.prototype.get = function(l) {
                return c(l) && Wb(l, f) ? l[f][this.g] : void 0
            }
            ;
            h.prototype.has = function(l) {
                return c(l) && Wb(l, f) && Wb(l[f], this.g)
            }
            ;
            h.prototype.delete = function(l) {
                return c(l) && Wb(l, f) && Wb(l[f], this.g) ? delete l[f][this.g] : !1
            }
            ;
            return h
        });
        x("Map", function(a) {
            if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                    return !1;
                try {
                    var h = Object.seal({
                        x: 4
                    })
                      , l = new a(y([[h, "s"]]));
                    if ("s" != l.get(h) || 1 != l.size || l.get({
                        x: 4
                    }) || l.set({
                        x: 4
                    }, "t") != l || 2 != l.size)
                        return !1;
                    var m = l.entries()
                      , p = m.next();
                    if (p.done || p.value[0] != h || "s" != p.value[1])
                        return !1;
                    p = m.next();
                    return p.done || 4 != p.value[0].x || "t" != p.value[1] || !m.next().done ? !1 : !0
                } catch (v) {
                    return !1
                }
            }())
                return a;
            var b = new WeakMap
              , c = function(h) {
                this.h = {};
                this.g = f();
                this.size = 0;
                if (h) {
                    h = y(h);
                    for (var l; !(l = h.next()).done; )
                        l = l.value,
                        this.set(l[0], l[1])
                }
            };
            c.prototype.set = function(h, l) {
                h = 0 === h ? 0 : h;
                var m = d(this, h);
                m.list || (m.list = this.h[m.id] = []);
                m.C ? m.C.value = l : (m.C = {
                    next: this.g,
                    I: this.g.I,
                    head: this.g,
                    key: h,
                    value: l
                },
                m.list.push(m.C),
                this.g.I.next = m.C,
                this.g.I = m.C,
                this.size++);
                return this
            }
            ;
            c.prototype.delete = function(h) {
                h = d(this, h);
                return h.C && h.list ? (h.list.splice(h.index, 1),
                h.list.length || delete this.h[h.id],
                h.C.I.next = h.C.next,
                h.C.next.I = h.C.I,
                h.C.head = null,
                this.size--,
                !0) : !1
            }
            ;
            c.prototype.clear = function() {
                this.h = {};
                this.g = this.g.I = f();
                this.size = 0
            }
            ;
            c.prototype.has = function(h) {
                return !!d(this, h).C
            }
            ;
            c.prototype.get = function(h) {
                return (h = d(this, h).C) && h.value
            }
            ;
            c.prototype.entries = function() {
                return e(this, function(h) {
                    return [h.key, h.value]
                })
            }
            ;
            c.prototype.keys = function() {
                return e(this, function(h) {
                    return h.key
                })
            }
            ;
            c.prototype.values = function() {
                return e(this, function(h) {
                    return h.value
                })
            }
            ;
            c.prototype.forEach = function(h, l) {
                for (var m = this.entries(), p; !(p = m.next()).done; )
                    p = p.value,
                    h.call(l, p[1], p[0], this)
            }
            ;
            c.prototype[Symbol.iterator] = c.prototype.entries;
            var d = function(h, l) {
                var m = l && typeof l;
                "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g,
                b.set(l, m)) : m = "p_" + l;
                var p = h.h[m];
                if (p && Wb(h.h, m))
                    for (h = 0; h < p.length; h++) {
                        var v = p[h];
                        if (l !== l && v.key !== v.key || l === v.key)
                            return {
                                id: m,
                                list: p,
                                index: h,
                                C: v
                            }
                    }
                return {
                    id: m,
                    list: p,
                    index: -1,
                    C: void 0
                }
            }
              , e = function(h, l) {
                var m = h.g;
                return Cb(function() {
                    if (m) {
                        for (; m.head != h.g; )
                            m = m.I;
                        for (; m.next != m.head; )
                            return m = m.next,
                            {
                                done: !1,
                                value: l(m)
                            };
                        m = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            }
              , f = function() {
                var h = {};
                return h.I = h.next = h.head = h
            }
              , g = 0;
            return c
        });
        var Xb = function(a, b) {
            a instanceof String && (a += "");
            var c = 0
              , d = !1
              , e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
            e[Symbol.iterator] = function() {
                return e
            }
            ;
            return e
        };
        x("Array.prototype.fill", function(a) {
            return a ? a : function(b, c, d) {
                var e = this.length || 0;
                0 > c && (c = Math.max(0, e + c));
                if (null == d || d > e)
                    d = e;
                d = Number(d);
                0 > d && (d = Math.max(0, e + d));
                for (c = Number(c || 0); c < d; c++)
                    this[c] = b;
                return this
            }
        });
        var Yb = function(a) {
            return a ? a : Array.prototype.fill
        };
        x("Int8Array.prototype.fill", Yb);
        x("Uint8Array.prototype.fill", Yb);
        x("Uint8ClampedArray.prototype.fill", Yb);
        x("Int16Array.prototype.fill", Yb);
        x("Uint16Array.prototype.fill", Yb);
        x("Int32Array.prototype.fill", Yb);
        x("Uint32Array.prototype.fill", Yb);
        x("Float32Array.prototype.fill", Yb);
        x("Float64Array.prototype.fill", Yb);
        x("String.prototype.repeat", function(a) {
            return a ? a : function(b) {
                var c = Vb(this, "repeat");
                if (0 > b || 1342177279 < b)
                    throw new RangeError("n");
                b |= 0;
                for (var d = ""; b; )
                    if (b & 1 && (d += c),
                    b >>>= 1)
                        c += c;
                return d
            }
        });
        var Zb = function(a, b) {
            a = void 0 !== a ? String(a) : " ";
            return 0 < b && a ? a.repeat(Math.ceil(b / a.length)).substring(0, b) : ""
        };
        x("String.prototype.padStart", function(a) {
            return a ? a : function(b, c) {
                var d = Vb(this, "padStart");
                return Zb(c, b - d.length) + d
            }
        });
        x("Array.prototype.keys", function(a) {
            return a ? a : function() {
                return Xb(this, function(b) {
                    return b
                })
            }
        });
        x("String.prototype.padEnd", function(a) {
            return a ? a : function(b, c) {
                var d = Vb(this, "padStart");
                return d + Zb(c, b - d.length)
            }
        });
        x("Array.prototype.values", function(a) {
            return a ? a : function() {
                return Xb(this, function(_b, c) {
                    return c
                })
            }
        });
        x("Array.from", function(a) {
            return a ? a : function(b, c, d) {
                c = null != c ? c : function(h) {
                    return h
                }
                ;
                var e = []
                  , f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
                if ("function" == typeof f) {
                    b = f.call(b);
                    for (var g = 0; !(f = b.next()).done; )
                        e.push(c.call(d, f.value, g++))
                } else
                    for (f = b.length,
                    g = 0; g < f; g++)
                        e.push(c.call(d, b[g], g));
                return e
            }
        });
        x("Set", function(a) {
            if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                    return !1;
                try {
                    var c = Object.seal({
                        x: 4
                    })
                      , d = new a(y([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                        x: 4
                    }) != d || 2 != d.size)
                        return !1;
                    var e = d.entries()
                      , f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c)
                        return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }())
                return a;
            var b = function(c) {
                this.g = new Map;
                if (c) {
                    c = y(c);
                    for (var d; !(d = c.next()).done; )
                        this.add(d.value)
                }
                this.size = this.g.size
            };
            b.prototype.add = function(c) {
                c = 0 === c ? 0 : c;
                this.g.set(c, c);
                this.size = this.g.size;
                return this
            }
            ;
            b.prototype.delete = function(c) {
                c = this.g.delete(c);
                this.size = this.g.size;
                return c
            }
            ;
            b.prototype.clear = function() {
                this.g.clear();
                this.size = 0
            }
            ;
            b.prototype.has = function(c) {
                return this.g.has(c)
            }
            ;
            b.prototype.entries = function() {
                return this.g.entries()
            }
            ;
            b.prototype.values = function() {
                return this.g.values()
            }
            ;
            b.prototype.keys = b.prototype.values;
            b.prototype[Symbol.iterator] = b.prototype.values;
            b.prototype.forEach = function(c, d) {
                var e = this;
                this.g.forEach(function(f) {
                    return c.call(d, f, f, e)
                })
            }
            ;
            return b
        });
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var $b = $b || {}
          , k = this || self
          , ac = function() {}
          , fa = function(a) {
            var b = typeof a;
            b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || "object" == b && "number" == typeof a.length
        }
          , Aa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }
          , bc = function(a, _b, _c) {
            return a.call.apply(a.bind, arguments)
        }
          , cc = function(a, b, _c) {
            if (!a)
                throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }
          , dc = function(_a, _b, _c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? dc = bc : dc = cc;
            return dc.apply(null, arguments)
        }
          , ec = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.aa = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Ma = function(d, e, _f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                    g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        }
          , fc = function(a) {
            return a
        };
        var gc;
        var jc = function(a, b) {
            this.g = a === hc && b || "";
            this.h = ic
        };
        jc.prototype.M = !0;
        jc.prototype.L = function() {
            return this.g
        }
        ;
        var ic = {}
          , hc = {};
        var kc = String.prototype.trim ? function(a) {
            return a.trim()
        }
        : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        }
          , lc = /&/g
          , mc = /</g
          , nc = />/g
          , oc = /"/g
          , pc = /'/g
          , qc = /\x00/g
          , rc = /[\x00&<>"']/
          , sc = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
        var ca = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        }
        : function(a, b) {
            if ("string" === typeof a)
                return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b)
                    return c;
            return -1
        }
          , tc = Array.prototype.forEach ? function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        }
        : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                e in d && b.call(void 0, d[e], e, a)
        }
        ;
        var vc = function(a) {
            var b = uc;
            return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9)
        };
        var wc = n("Opera"), xc = n("Trident") || n("MSIE"), yc = n("Edge"), zc = n("Gecko") && !(-1 != aa().toLowerCase().indexOf("webkit") && !n("Edge")) && !(n("Trident") || n("MSIE")) && !n("Edge"), Ac = -1 != aa().toLowerCase().indexOf("webkit") && !n("Edge"), Bc;
        a: {
            var Cc = ""
              , Dc = function() {
                var a = aa();
                if (zc)
                    return /rv:([^\);]+)(\)|;)/.exec(a);
                if (yc)
                    return /Edge\/([\d\.]+)/.exec(a);
                if (xc)
                    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Ac)
                    return /WebKit\/(\S+)/.exec(a);
                if (wc)
                    return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
            Dc && (Cc = Dc ? Dc[1] : "");
            if (xc) {
                var Ec, Fc = k.document;
                Ec = Fc ? Fc.documentMode : void 0;
                if (null != Ec && Ec > parseFloat(Cc)) {
                    Bc = String(Ec);
                    break a
                }
            }
            Bc = Cc
        }
        var Gc = Bc
          , uc = {}
          , Hc = function() {
            return vc(function() {
                for (var a = 0, b = kc(String(Gc)).split("."), c = kc("9").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
                    var f = b[e] || ""
                      , g = c[e] || "";
                    do {
                        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        if (0 == f[0].length && 0 == g[0].length)
                            break;
                        a = sc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || sc(0 == f[2].length, 0 == g[2].length) || sc(f[2], g[2]);
                        f = f[3];
                        g = g[3]
                    } while (0 == a)
                }
                return 0 <= a
            })
        };
        var Ic = {}
          , Jc = null
          , Ba = function(a, b) {
            void 0 === b && (b = 0);
            Kc();
            b = Ic[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e]
                  , h = a[e + 1]
                  , l = a[e + 2]
                  , m = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | l >> 6];
                l = b[l & 63];
                c[f++] = m + g + h + l
            }
            m = 0;
            l = d;
            switch (a.length - e) {
            case 2:
                m = a[e + 1],
                l = b[(m & 15) << 2] || d;
            case 1:
                a = a[e],
                c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
            }
            return c.join("")
        }
          , Mc = function(a) {
            var b = [];
            Lc(a, function(c) {
                b.push(c)
            });
            return b
        }
          , ka = function(a) {
            var b = a.length
              , c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c)
              , e = 0;
            Lc(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        }
          , Lc = function(a, b) {
            function c(l) {
                for (; d < a.length; ) {
                    var m = a.charAt(d++)
                      , p = Jc[m];
                    if (null != p)
                        return p;
                    if (!/^[\s\xa0]*$/.test(m))
                        throw Error("o`" + m);
                }
                return l
            }
            Kc();
            for (var d = 0; ; ) {
                var e = c(-1)
                  , f = c(0)
                  , g = c(64)
                  , h = c(64);
                if (64 === h && -1 === e)
                    break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2),
                64 != h && b(g << 6 & 192 | h))
            }
        }
          , Kc = function() {
            if (!Jc) {
                Jc = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Ic[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Jc[f] && (Jc[f] = e)
                    }
                }
            }
        };
        var ma = "function" === typeof Uint8Array;
        var na = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;
        var Nc, Oc = Object.freeze(ra([])), wa = function(a) {
            if (sa(a.u))
                throw Error("q");
        }, Pc = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;
        var B = function(a, b, c) {
            return -1 === b ? null : b >= a.j ? a.h ? a.h[b] : void 0 : (void 0 === c ? 0 : c) && a.h && (c = a.h[b],
            null != c) ? c : a.u[b + a.i]
        }
          , q = function(a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || wa(a);
            b < a.j && !d ? a.u[b + a.i] = c : (a.h || (a.h = a.u[a.j + a.i] = {}))[b] = c;
            return a
        }
          , D = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            d = void 0 === d ? !1 : d;
            var e = B(a, b, d);
            null == e && (e = Oc);
            if (sa(a.u))
                c && (ta(e),
                Object.freeze(e));
            else if (e === Oc || sa(e))
                e = ra(e.slice()),
                q(a, b, e, d);
            return e
        }
          , E = function(a, b) {
            a = B(a, b);
            return null == a ? a : !!a
        }
          , G = function(a, b, c) {
            a = B(a, b);
            return null == a ? c : a
        }
          , Qc = function(a, b) {
            a = E(a, b);
            return null == a ? !1 : a
        }
          , Rc = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            return q(a, b, null == c ? ra([]) : Array.isArray(c) ? ra(c) : c, d)
        }
          , u = function(a, b, c, d, e) {
            if (-1 === c)
                return null;
            a.g || (a.g = {});
            var f = a.g[c];
            if (f)
                return f;
            e = B(a, c, void 0 === e ? !1 : e);
            if (null == e && !d)
                return f;
            b = new b(e);
            sa(a.u) && ta(b.u);
            return a.g[c] = b
        }
          , t = function(a, b, c, d) {
            a.g || (a.g = {});
            var e = sa(a.u)
              , f = a.g[c];
            if (!f) {
                d = D(a, c, !0, void 0 === d ? !1 : d);
                f = [];
                e = e || sa(d);
                for (var g = 0; g < d.length; g++)
                    f[g] = new b(d[g]),
                    e && ta(f[g].u);
                e && (ta(f),
                Object.freeze(f));
                a.g[c] = f
            }
            return f
        }
          , I = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            wa(a);
            a.g || (a.g = {});
            var e = c ? c.u : c;
            a.g[b] = c;
            return q(a, b, e, d)
        }
          , Sc = function(a, b, c, d) {
            wa(a);
            a.g || (a.g = {});
            var e = d ? d.u : d;
            a.g[b] = d;
            wa(a);
            for (var f = d = 0; f < c.length; f++) {
                var g = c[f];
                null != B(a, g) && (0 !== d && q(a, d, void 0, !1, !0),
                d = g)
            }
            (c = d) && c !== b && null != e && (a.g && c in a.g && (a.g[c] = void 0),
            q(a, c, void 0));
            return q(a, b, e)
        };
        var Ia;
        var Tc = function(a, b, c) {
            var d = Ia;
            Ia = null;
            a || (a = d);
            d = this.constructor.h;
            a || (a = d ? [d] : []);
            this.i = (d ? 0 : -1) - (this.constructor.g || 0);
            this.g = void 0;
            this.u = a;
            a: {
                d = this.u.length;
                a = d - 1;
                if (d && (d = this.u[a],
                ua(d))) {
                    this.j = a - this.i;
                    this.h = d;
                    break a
                }
                void 0 !== b && -1 < b ? (this.j = Math.max(b, a + 1 - this.i),
                this.h = void 0) : this.j = Number.MAX_VALUE
            }
            if (c)
                for (b = 0; b < c.length; b++)
                    if (a = c[b],
                    a < this.j)
                        a += this.i,
                        (d = this.u[a]) ? Array.isArray(d) && ra(d) : this.u[a] = Oc;
                    else {
                        d = this.h || (this.h = this.u[this.j + this.i] = {});
                        var e = d[a];
                        e ? Array.isArray(e) && ra(e) : d[a] = Oc
                    }
        };
        Tc.prototype.toJSON = function() {
            var a = this.u;
            return Nc ? a : Fa(a, Ha)
        }
        ;
        var Uc = function(a) {
            Nc = !0;
            try {
                return JSON.stringify(a.toJSON(), La)
            } finally {
                Nc = !1
            }
        }
          , Va = function(a, b) {
            return Ja(a, b ? JSON.parse(b) : null)
        }
          , Vc = function(a, b) {
            return a == b || !(!a || !b) && a instanceof b.constructor && xa(a.u, b.u)
        }
          , Wc = function(a) {
            var b = a.constructor
              , c = Fa(a.u);
            b = Ja(b, c);
            Ma(b, a);
            return b
        };
        Tc.prototype.toString = function() {
            return this.u.toString()
        }
        ;
        var Xc = function() {
            Tc.apply(this, arguments)
        };
        z(Xc, Tc);
        var Yc = function() {
            var a = {};
            Object.defineProperties(Xc, (a[Symbol.hasInstance] = va(function() {
                throw Error("t");
            }),
            a))
        };
        Pc && Yc();
        var J = function() {
            Xc.apply(this, arguments)
        };
        z(J, Xc);
        var Zc = function() {
            var a = {};
            Object.defineProperties(J, (a[Symbol.hasInstance] = va(Object[Symbol.hasInstance]),
            a))
        };
        Pc && Zc();
        var ad = function(a) {
            J.call(this, a, -1, $c)
        };
        z(ad, J);
        var $c = [3];
        var cd = function(a) {
            J.call(this, a, -1, bd)
        };
        z(cd, J);
        var dd = function(a, b) {
            return Rc(a, 1, b)
        }
          , ed = function(a, b) {
            return Rc(a, 2, b)
        }
          , fd = function(a, b) {
            return Rc(a, 3, b)
        }
          , gd = function(a, b) {
            Rc(a, 4, b)
        }
          , bd = [1, 2, 3, 4];
        var hd = function(a) {
            J.call(this, a)
        };
        z(hd, J);
        var id = function(a) {
            var b = new hd;
            a = a.getTime();
            var c = r(b, 1, Math.floor(a / 1E3), 0);
            r(c, 2, a % 1E3 * 1E6, 0);
            return b
        };
        var kd = function(a) {
            J.call(this, a, -1, jd)
        };
        z(kd, J);
        var ld = function(a, b) {
            return r(a, 1, b, 0)
        }
          , md = function(a, b) {
            return I(a, 2, b)
        }
          , nd = function(a, b) {
            return I(a, 3, b)
        }
          , od = function(a, b) {
            return r(a, 4, b, 0)
        }
          , pd = function(a, b) {
            return r(a, 5, b, 0)
        }
          , qd = function(a, b) {
            return r(a, 6, b, 0)
        }
          , rd = function(a, b) {
            return r(a, 7, b, "")
        }
          , sd = function(a, b) {
            return r(a, 8, b, 0)
        }
          , td = function(a, b) {
            return r(a, 9, b, 0)
        }
          , ud = function(a, b) {
            return r(a, 10, b, !1)
        }
          , vd = function(a, b) {
            return r(a, 11, b, !1)
        }
          , wd = function(a, b) {
            return Rc(a, 12, b)
        }
          , xd = function(a, b) {
            return Rc(a, 13, b)
        }
          , yd = function(a, b) {
            return Rc(a, 14, b)
        }
          , zd = function(a, b) {
            return r(a, 15, b, !1)
        }
          , Ad = function(a, b) {
            return r(a, 16, b, "")
        }
          , Bd = function(a, b) {
            return Rc(a, 17, b)
        }
          , Cd = function(a, b) {
            return Rc(a, 18, b)
        }
          , Dd = function(a, b) {
            var c = void 0 === c ? !1 : c;
            wa(a);
            if (b) {
                var d = ra([]);
                for (var e = 0; e < b.length; e++)
                    d[e] = b[e].u;
                a.g || (a.g = {});
                a.g[19] = b
            } else
                a.g && (a.g[19] = void 0),
                d = Oc;
            return q(a, 19, d, c)
        }
          , jd = [12, 13, 14, 17, 18, 19];
        var Ed = function(a) {
            J.call(this, a)
        };
        z(Ed, J);
        var Fd = function(a) {
            return u(a, kd, 1)
        }
          , Gd = function(a) {
            var b = new Ed;
            return I(b, 1, a)
        };
        var Hd = function(a) {
            a = a.split("~");
            if (2 !== a.length || a[0] !== (1).toString())
                return null;
            if ("" === a[1])
                return [];
            a = a[1].split(".").map(function(b) {
                return Number(b)
            });
            return a.some(function(b) {
                return !b
            }) ? null : a
        };
        var Pa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        var Id = "a".charCodeAt()
          , Jd = Oa({
            Ia: 0,
            Ha: 1,
            Ea: 2,
            za: 3,
            Fa: 4,
            Aa: 5,
            Ga: 6,
            Ca: 7,
            Da: 8,
            ya: 9,
            Ba: 10
        })
          , Kd = Oa({
            Ka: 0,
            La: 1,
            Ja: 2
        });
        var Ld = function(a) {
            if (/[^01]/.test(a))
                throw Error("u`" + a);
            this.h = a;
            this.g = 0
        }
          , Md = function(a) {
            a = K(a, 36);
            var b = new hd;
            b = r(b, 1, Math.floor(a / 10), 0);
            return r(b, 2, a % 10 * 1E8, 0)
        }
          , Nd = function(a) {
            return String.fromCharCode(Id + K(a, 6)) + String.fromCharCode(Id + K(a, 6))
        }
          , Qd = function(a) {
            var b = K(a, 16);
            return !0 === !!K(a, 1) ? (a = Od(a),
            a.forEach(function(c) {
                if (c > b)
                    throw Error("v`" + c + "`" + b);
            }),
            a) : Pd(a, b)
        }
          , Rd = function(a) {
            for (var b = [], c = K(a, 12); c--; ) {
                var d = K(a, 6)
                  , e = K(a, 2)
                  , f = Od(a)
                  , g = b
                  , h = g.push
                  , l = new ad;
                d = r(l, 1, d, 0);
                e = r(d, 2, e, 0);
                f = Rc(e, 3, f);
                h.call(g, f)
            }
            return b
        }
          , Od = function(a) {
            for (var b = K(a, 12), c = []; b--; ) {
                var d = !0 === !!K(a, 1)
                  , e = K(a, 16);
                if (d)
                    for (d = K(a, 16); e <= d; e++)
                        c.push(e);
                else
                    c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        }
          , Pd = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (K(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f))
                        throw Error("w`" + f);
                    d.push(f)
                }
            return d
        }
          , K = function(a, b) {
            if (a.g + b > a.h.length)
                throw Error("x`" + b);
            var c = a.h.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
        var Sd = function(a) {
            if (!a)
                throw Error("y");
            return L(Math.floor(10 * G(a, 1, 0) + G(a, 2, 0) / 1E8), 36)
        }
          , Td = function(a) {
            if (!a || 2 !== a.length)
                throw Error("z`" + a);
            return L(a[0].toLowerCase().charCodeAt() - Id, 6) + L(a[1].toLowerCase().charCodeAt() - Id, 6)
        }
          , Xd = function(a) {
            var b = Ud(!0) + Vd(a)
              , c = a.reduce(function(d, e) {
                return Math.max(d, e)
            }, 0);
            a = Ud(!1) + Wd(a, c);
            return L(c, 16) + (b.length < a.length ? b : a)
        }
          , Yd = function(a) {
            return L(a.length, 12) + a.map(function(b) {
                return L(G(b, 1, 0), 6) + L(G(b, 2, 0), 2) + Vd(D(b, 3))
            }).join("")
        }
          , Vd = function(a) {
            var b = [];
            a.sort(function(c, d) {
                return c - d
            });
            a.forEach(function(c) {
                var d = b[b.length - 1];
                d && d.end === c - 1 ? d.end = c : b.push({
                    V: c,
                    end: c
                })
            });
            return L(b.length, 12) + b.map(function(c) {
                return c.V === c.end ? Ud(!1) + L(c.V, 16) : Ud(!0) + L(c.V, 16) + L(c.end, 16)
            }).join("")
        }
          , Wd = function(a, b, c) {
            var d = Array(b).fill("0");
            a.forEach(function(e) {
                if (e > b || c && -1 === c.indexOf(e))
                    throw Error("A`" + e);
                d[e - 1] = "1"
            });
            return d.join("")
        }
          , Ud = function(a) {
            return !0 === a ? "1" : "0"
        }
          , L = function(a, b) {
            if (null == a || null == b)
                throw Error("B");
            var c = a.toString(2).padStart(b, "0");
            if (c.length > b)
                throw Error("C`" + a + "`" + b);
            return c
        };
        var Zd = function(a) {
            try {
                var b = Mc(a).map(function(f) {
                    return f.toString(2).padStart(8, "0")
                }).join("")
                  , c = new Ld(b);
                if (3 !== K(c, 3))
                    return null;
                var d = ed(dd(new cd, Pd(c, 24, Jd)), Pd(c, 24, Jd))
                  , e = K(c, 6);
                0 !== e && gd(fd(d, Pd(c, e)), Pd(c, e));
                return d
            } catch (f) {
                return null
            }
        }
          , $d = function(a) {
            try {
                var b = 0 != D(a, 3).length ? Math.max.apply(Math, Db(D(a, 3))) : 0
                  , c = 0 != D(a, 4).length ? Math.max.apply(Math, Db(D(a, 4))) : 0
                  , d = Math.max(b, c)
                  , e = [L(3, 3), Wd(D(a, 1), 24), Wd(D(a, 2), 24), L(d, 6), Wd(D(a, 3), d), Wd(D(a, 4), d)].join("").match(/.{1,8}/g).map(function(f) {
                    return parseInt(f.padEnd(8, "0"), 2)
                });
                return Ba(e, 4)
            } catch (f) {
                return null
            }
        };
        var ae = function(a) {
            try {
                var b = Mc(a).map(function(d) {
                    return d.toString(2).padStart(8, "0")
                }).join("")
                  , c = new Ld(b);
                return Dd(Cd(Bd(Ad(zd(yd(xd(wd(vd(ud(td(sd(rd(qd(pd(od(nd(md(ld(new kd, K(c, 6)), Md(c)), Md(c)), K(c, 12)), K(c, 12)), K(c, 6)), Nd(c)), K(c, 12)), K(c, 6)), !!K(c, 1)), !!K(c, 1)), Pd(c, 12, Kd)), Pd(c, 24, Jd)), Pd(c, 24, Jd)), !!K(c, 1)), Nd(c)), Qd(c)), Qd(c)), Rd(c))
            } catch (d) {
                return null
            }
        }
          , be = function(a) {
            try {
                var b = [L(G(a, 1, 0), 6), Sd(u(a, hd, 2)), Sd(u(a, hd, 3)), L(G(a, 4, 0), 12), L(G(a, 5, 0), 12), L(G(a, 6, 0), 6), Td(G(a, 7, "")), L(G(a, 8, 0), 12), L(G(a, 9, 0), 6), Ud(Qc(a, 10)), Ud(Qc(a, 11)), Wd(D(a, 12), 12, Kd), Wd(D(a, 13), 24, Jd), Wd(D(a, 14), 24, Jd), Ud(Qc(a, 15)), Td(G(a, 16, "")), Xd(D(a, 17)), Xd(D(a, 18)), Yd(t(a, ad, 19))].join("").match(/.{1,8}/g).map(function(c) {
                    return parseInt(c.padEnd(8, "0"), 2)
                });
                return Ba(b, 4)
            } catch (c) {
                return null
            }
        };
        var ce = function(a) {
            if (!a || null == B(a, 1))
                return null;
            var b = be(Fd(a));
            if (!b)
                return null;
            if (null != B(a, 2)) {
                a = $d(u(a, cd, 2));
                if (!a)
                    return null;
                b = b + "." + a
            }
            return b
        }
          , ee = function(a) {
            if (!a)
                return null;
            var b = a.split(".");
            if (4 < b.length)
                return null;
            a = ae(b[0]);
            if (!a)
                return null;
            a = Gd(a);
            b.shift();
            b = y(b);
            for (var c = b.next(); !c.done; c = b.next())
                switch (c = c.value,
                de(c)) {
                case 1:
                case 2:
                    break;
                case 3:
                    c = Zd(c);
                    if (!c)
                        return null;
                    I(a, 2, c);
                    break;
                default:
                    return null
                }
            return a
        }
          , de = function(a) {
            try {
                var b = Mc(a).map(function(c) {
                    return c.toString(2).padStart(8, "0")
                }).join("");
                return K(new Ld(b), 3)
            } catch (c) {
                return -1
            }
        };
        var fe = function(a) {
            J.call(this, a)
        };
        z(fe, J);
        var ge = function(a) {
            J.call(this, a)
        };
        z(ge, J);
        var he = function(a) {
            J.call(this, a)
        };
        z(he, J);
        var ie = function(a) {
            J.call(this, a)
        };
        z(ie, J);
        var je = function(a) {
            J.call(this, a)
        };
        z(je, J);
        var ke = function(a) {
            var b = new je;
            return q(b, 1, a)
        }
          , le = function(a) {
            J.call(this, a)
        };
        z(le, J);
        var me = function(a) {
            J.call(this, a)
        };
        z(me, J);
        var ne = function(a) {
            J.call(this, a)
        };
        z(ne, J);
        var oe = function(a) {
            J.call(this, a)
        };
        z(oe, J);
        var pe = function(a) {
            J.call(this, a)
        };
        z(pe, J);
        var qe = function(a) {
            J.call(this, a)
        };
        z(qe, J);
        var re = function(a) {
            J.call(this, a)
        };
        z(re, J);
        var se = function(a) {
            J.call(this, a)
        };
        z(se, J);
        var te = function(a) {
            J.call(this, a)
        };
        z(te, J);
        var ue = function(a) {
            J.call(this, a)
        };
        z(ue, J);
        var ve = function(a) {
            J.call(this, a)
        };
        z(ve, J);
        var we = [2, 3];
        var xe = function(a) {
            J.call(this, a)
        };
        z(xe, J);
        var ye = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 23, 22];
        var ze, Ya = function() {
            if (void 0 === ze) {
                var a = null
                  , b = k.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("ContributorIabTcfV2ClientJs#html", {
                            createHTML: fc,
                            createScript: fc,
                            createScriptURL: fc
                        })
                    } catch (c) {
                        k.console && k.console.error(c.message)
                    }
                    ze = a
                } else
                    ze = a
            }
            return ze
        };
        var Be = function(a, b) {
            this.h = b === Ae ? a : ""
        };
        Be.prototype.M = !0;
        Be.prototype.L = function() {
            return this.h.toString()
        }
        ;
        Be.prototype.Y = !0;
        Be.prototype.g = function() {
            return 1
        }
        ;
        var Ge = function(a, b) {
            a = Ce.exec(De(a).toString());
            var c = a[3] || "";
            return Ee(a[1] + Fe("?", a[2] || "", b) + Fe("#", c, void 0))
        };
        Be.prototype.toString = function() {
            return this.h + ""
        }
        ;
        var De = function(a) {
            return a instanceof Be && a.constructor === Be ? a.h : "type_error:TrustedResourceUrl"
        }
          , Ce = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
          , Ae = {}
          , Ee = function(a) {
            var b = Ya();
            a = b ? b.createScriptURL(a) : a;
            return new Be(a,Ae)
        }
          , Fe = function(a, b, c) {
            if (null == c)
                return b;
            if ("string" === typeof c)
                return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a),
                        b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
        var M = function(a, b) {
            this.h = b === He ? a : ""
        };
        M.prototype.M = !0;
        M.prototype.L = function() {
            return this.h.toString()
        }
        ;
        M.prototype.Y = !0;
        M.prototype.g = function() {
            return 1
        }
        ;
        M.prototype.toString = function() {
            return this.h.toString()
        }
        ;
        var Ie = function(a) {
            return a instanceof M && a.constructor === M ? a.h : "type_error:SafeUrl"
        }
          , Je = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
          , He = {};
        var Ke = {}
          , Le = function(a, b) {
            this.g = b === Ke ? a : "";
            this.M = !0
        };
        Le.prototype.L = function() {
            return this.g
        }
        ;
        Le.prototype.toString = function() {
            return this.g.toString()
        }
        ;
        var Me = {}
          , Ne = function(a, b) {
            this.g = b === Me ? a : "";
            this.M = !0
        };
        Ne.prototype.L = function() {
            return this.g
        }
        ;
        var Oe = function(a) {
            return a instanceof Ne && a.constructor === Ne ? a.g : "type_error:SafeStyleSheet"
        };
        Ne.prototype.toString = function() {
            return this.g.toString()
        }
        ;
        var Pe = {}
          , Qe = function(a, b, c) {
            this.h = c === Pe ? a : "";
            this.i = b;
            this.M = this.Y = !0
        };
        Qe.prototype.g = function() {
            return this.i
        }
        ;
        Qe.prototype.L = function() {
            return this.h.toString()
        }
        ;
        Qe.prototype.toString = function() {
            return this.h.toString()
        }
        ;
        var hb = function(a) {
            return a instanceof Qe && a.constructor === Qe ? a.h : "type_error:SafeHtml"
        }
          , vb = function(a) {
            if (a instanceof Qe)
                return a;
            var b = "object" == typeof a
              , c = null;
            b && a.Y && (c = a.g());
            a = b && a.M ? a.L() : String(a);
            rc.test(a) && (-1 != a.indexOf("&") && (a = a.replace(lc, "&amp;")),
            -1 != a.indexOf("<") && (a = a.replace(mc, "&lt;")),
            -1 != a.indexOf(">") && (a = a.replace(nc, "&gt;")),
            -1 != a.indexOf('"') && (a = a.replace(oc, "&quot;")),
            -1 != a.indexOf("'") && (a = a.replace(pc, "&#39;")),
            -1 != a.indexOf("\x00") && (a = a.replace(qc, "&#0;")));
            return ub(a, c)
        }
          , ub = function(a, b) {
            var c = Ya();
            a = c ? c.createHTML(a) : a;
            return new Qe(a,b,Pe)
        }
          , Re = new Qe(k.trustedTypes && k.trustedTypes.emptyHTML || "",0,Pe);
        var Se = function(a) {
            J.call(this, a)
        };
        z(Se, J);
        var Te = function(a) {
            J.call(this, a)
        };
        z(Te, J);
        var Ue = function() {
            this.m = this.m;
            this.s = this.s
        };
        Ue.prototype.m = !1;
        Ue.prototype.l = function() {
            if (this.s)
                for (; this.s.length; )
                    this.s.shift()()
        }
        ;
        var Ve = function(a, b) {
            this.type = a;
            this.g = this.target = b;
            this.defaultPrevented = !1
        };
        var We = "closure_listenable_" + (1E6 * Math.random() | 0);
        var Xe = 0;
        var Ye = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.X = e;
            this.key = ++Xe;
            this.R = this.W = !1
        }
          , Ze = function(a) {
            a.R = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.X = null
        };
        var $e = function(a) {
            this.src = a;
            this.g = {};
            this.h = 0
        };
        $e.prototype.add = function(a, b, c, d, e) {
            var f = a.toString();
            a = this.g[f];
            a || (a = this.g[f] = [],
            this.h++);
            var g = af(a, b, d, e);
            -1 < g ? (b = a[g],
            c || (b.W = !1)) : (b = new Ye(b,this.src,f,!!d,e),
            b.W = c,
            a.push(b));
            return b
        }
        ;
        var bf = function(a, b) {
            var c = b.type;
            c in a.g && da(a.g[c], b) && (Ze(b),
            0 == a.g[c].length && (delete a.g[c],
            a.h--))
        }
          , af = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.R && f.listener == b && f.capture == !!c && f.X == d)
                    return e
            }
            return -1
        };
        var cf = "closure_lm_" + (1E6 * Math.random() | 0)
          , df = {}
          , ef = 0
          , ff = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++)
                    ff(a, b[f], c, d, e);
            else
                (d = Aa(d) ? !!d.capture : !!d,
                c = gf(c),
                a && a[We]) ? (a = a.i,
                b = String(b).toString(),
                b in a.g && (f = a.g[b],
                c = af(f, c, d, e),
                -1 < c && (Ze(f[c]),
                Array.prototype.splice.call(f, c, 1),
                0 == f.length && (delete a.g[b],
                a.h--)))) : a && (a = hf(a)) && (b = a.g[b.toString()],
                a = -1,
                b && (a = af(b, c, d, e)),
                (c = -1 < a ? b[a] : null) && "number" !== typeof c && c && !c.R && ((e = c.src) && e[We] ? bf(e.i, c) : (d = c.type,
                b = c.proxy,
                e.removeEventListener ? e.removeEventListener(d, b, c.capture) : e.detachEvent ? e.detachEvent(d in df ? df[d] : df[d] = "on" + d, b) : e.addListener && e.removeListener && e.removeListener(b),
                ef--,
                (d = hf(e)) ? (bf(d, c),
                0 == d.h && (d.src = null,
                e[cf] = null)) : Ze(c))))
        }
          , hf = function(a) {
            a = a[cf];
            return a instanceof $e ? a : null
        }
          , jf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
          , gf = function(a) {
            if ("function" === typeof a)
                return a;
            a[jf] || (a[jf] = function(b) {
                return a.handleEvent(b)
            }
            );
            return a[jf]
        };
        var kf = function() {
            Ue.call(this);
            this.i = new $e(this);
            this.ha = this;
            this.K = null
        };
        ec(kf, Ue);
        kf.prototype[We] = !0;
        kf.prototype.removeEventListener = function(a, b, c, d) {
            ff(this, a, b, c, d)
        }
        ;
        var mf = function(a, b) {
            var c, d = a.K;
            if (d)
                for (c = []; d; d = d.K)
                    c.push(d);
            a = a.ha;
            d = b.type || b;
            if ("string" === typeof b)
                b = new Ve(b,a);
            else if (b instanceof Ve)
                b.target = b.target || a;
            else {
                var e = b;
                b = new Ve(d,a);
                Qa(b, e)
            }
            e = !0;
            if (c)
                for (var f = c.length - 1; 0 <= f; f--) {
                    var g = b.g = c[f];
                    e = lf(g, d, !0, b) && e
                }
            g = b.g = a;
            e = lf(g, d, !0, b) && e;
            e = lf(g, d, !1, b) && e;
            if (c)
                for (f = 0; f < c.length; f++)
                    g = b.g = c[f],
                    e = lf(g, d, !1, b) && e
        };
        kf.prototype.l = function() {
            kf.aa.l.call(this);
            if (this.i) {
                var a = this.i, b = 0, c;
                for (c in a.g) {
                    for (var d = a.g[c], e = 0; e < d.length; e++)
                        ++b,
                        Ze(d[e]);
                    delete a.g[c];
                    a.h--
                }
            }
            this.K = null
        }
        ;
        var lf = function(a, b, c, d) {
            b = a.i.g[String(b)];
            if (!b)
                return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.R && g.capture == c) {
                    var h = g.listener
                      , l = g.X || g.src;
                    g.W && bf(a.i, g);
                    e = !1 !== h.call(l, d) && e
                }
            }
            return e && !d.defaultPrevented
        };
        var nf = function() {};
        nf.prototype.g = null;
        var pf = function(a) {
            var b;
            (b = a.g) || (b = {},
            of(a) && (b[0] = !0,
            b[1] = !0),
            b = a.g = b);
            return b
        };
        var qf, rf = function() {};
        ec(rf, nf);
        var sf = function(a) {
            return (a = of(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        }
          , of = function(a) {
            if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d),
                        a.h = d
                    } catch (e) {}
                }
                throw Error("D");
            }
            return a.h
        };
        qf = new rf;
        var tf = function(a) {
            var b = !1, c;
            return function() {
                b || (c = a(),
                b = !0);
                return c
            }
        }(function() {
            var a = document.createElement("div")
              , b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = hb(Re);
            return !b.parentElement
        })
          , wb = function(a, b) {
            if (tf())
                for (; a.lastChild; )
                    a.removeChild(a.lastChild);
            a.innerHTML = hb(b)
        }
          , uf = /^[\w+/_-]+[=]{0,2}$/
          , vf = function(a) {
            a = (a || k).document;
            return a.querySelector ? (a = a.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (a = a.nonce || a.getAttribute("nonce")) && uf.test(a) ? a : "" : ""
        };
        var xf = function(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = k.document.createElement("div");
            return a.replace(wf, function(d, e) {
                var f = b[d];
                if (f)
                    return f;
                "#" == e.charAt(0) && (e = Number("0" + e.substr(1)),
                isNaN(e) || (f = String.fromCharCode(e)));
                f || (f = ub(d + " ", null),
                wb(c, f),
                f = c.firstChild.nodeValue.slice(0, -1));
                return b[d] = f
            })
        }
          , yf = function(a) {
            return a.replace(/&([^;]+);/g, function(b, c) {
                switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)),
                    isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        }
          , wf = /&([^;\s<&]+);?/g;
        var rb = function(a) {
            return a ? new zf(9 == a.nodeType ? a : a.ownerDocument || a.document) : gc || (gc = new zf)
        }
          , Bf = function(a, b) {
            Na(b, function(c, d) {
                c && "object" == typeof c && c.M && (c = c.L());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Af.hasOwnProperty(d) ? a.setAttribute(Af[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        }
          , Af = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        }
          , Cf = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                if (!fa(f) || Aa(f) && 0 < f.nodeType)
                    d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Aa(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    tc(g ? ea(f) : f, d)
                }
            }
        }
          , sb = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        }
          , Df = function(a, b) {
            if (!a || !b)
                return !1;
            if (a.contains && 1 == b.nodeType)
                return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition)
                return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b; )
                b = b.parentNode;
            return b == a
        }
          , Ff = function(a) {
            var b;
            if ((b = "A" == a.tagName && a.hasAttribute("href") || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!a.hasAttribute("tabindex") || Ef(a)) : a.hasAttribute("tabindex") && Ef(a)) && xc) {
                var c;
                "function" !== typeof a.getBoundingClientRect || xc && null == a.parentElement ? c = {
                    height: a.offsetHeight,
                    width: a.offsetWidth
                } : c = a.getBoundingClientRect();
                a = null != c && 0 < c.height && 0 < c.width
            } else
                a = b;
            return a
        }
          , Ef = function(a) {
            a = a.tabIndex;
            return "number" === typeof a && 0 <= a && 32768 > a
        }
          , zf = function(a) {
            this.g = a || k.document || document
        }
          , Gf = function(a, b) {
            a = a.g;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b) : b = a.getElementsByTagName(b || "*");
            return b
        };
        zf.prototype.h = function(_a, _b, _c) {
            var d = this.g
              , e = arguments
              , f = e[1]
              , g = sb(d, String(e[0]));
            f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Bf(g, f));
            2 < e.length && Cf(d, g, e);
            return g
        }
        ;
        var Hf = function(a, b, c) {
            if ("function" === typeof a)
                c && (a = dc(a, c));
            else if (a && "function" == typeof a.handleEvent)
                a = dc(a.handleEvent, a);
            else
                throw Error("F");
            return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0)
        };
        var If = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
          , Jf = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("=")
                      , e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else
                        f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
        var Kf = function(a) {
            kf.call(this);
            this.headers = new Map;
            this.B = a || null;
            this.h = !1;
            this.A = this.g = null;
            this.J = "";
            this.j = this.G = this.o = this.F = !1;
            this.T = 0;
            this.v = null;
            this.da = "";
            this.U = this.fa = !1
        };
        ec(Kf, kf);
        var Lf = /^https?$/i
          , Mf = ["POST", "PUT"]
          , Nf = [];
        Kf.prototype.ia = function() {
            this.m || (this.m = !0,
            this.l());
            da(Nf, this)
        }
        ;
        var Rf = function(a, b, c) {
            var d = {
                "Content-Type": "text/plain"
            };
            if (a.g)
                throw Error("G`" + a.J + "`" + b);
            a.J = b;
            a.F = !1;
            a.h = !0;
            a.g = a.B ? sf(a.B) : sf(qf);
            a.A = a.B ? pf(a.B) : pf(qf);
            a.g.onreadystatechange = dc(a.ca, a);
            try {
                a.G = !0,
                a.g.open("POST", String(b), !0),
                a.G = !1
            } catch (g) {
                Of(a);
                return
            }
            b = c || "";
            c = new Map(a.headers);
            if (d)
                if (Object.getPrototypeOf(d) === Object.prototype)
                    for (var e in d)
                        c.set(e, d[e]);
                else if ("function" === typeof d.keys && "function" === typeof d.get) {
                    e = y(d.keys());
                    for (var f = e.next(); !f.done; f = e.next())
                        f = f.value,
                        c.set(f, d.get(f))
                } else
                    throw Error("H`" + String(d));
            d = Array.from(c.keys()).find(function(g) {
                return "content-type" == g.toLowerCase()
            });
            e = k.FormData && b instanceof k.FormData;
            !(0 <= ca(Mf, "POST")) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            d = y(c);
            for (c = d.next(); !c.done; c = d.next())
                e = y(c.value),
                c = e.next().value,
                e = e.next().value,
                a.g.setRequestHeader(c, e);
            a.da && (a.g.responseType = a.da);
            "withCredentials"in a.g && a.g.withCredentials !== a.fa && (a.g.withCredentials = a.fa);
            try {
                Pf(a),
                0 < a.T && (a.U = Qf(a.g),
                a.U ? (a.g.timeout = a.T,
                a.g.ontimeout = dc(a.ea, a)) : a.v = Hf(a.ea, a.T, a)),
                a.o = !0,
                a.g.send(b),
                a.o = !1
            } catch (g) {
                Of(a)
            }
        }
          , Qf = function(a) {
            return xc && Hc() && "number" === typeof a.timeout && void 0 !== a.ontimeout
        };
        Kf.prototype.ea = function() {
            "undefined" != typeof $b && this.g && (mf(this, "timeout"),
            this.abort(8))
        }
        ;
        var Of = function(a) {
            a.h = !1;
            a.g && (a.j = !0,
            a.g.abort(),
            a.j = !1);
            Sf(a);
            Tf(a)
        }
          , Sf = function(a) {
            a.F || (a.F = !0,
            mf(a, "complete"),
            mf(a, "error"))
        };
        Kf.prototype.abort = function() {
            this.g && this.h && (this.h = !1,
            this.j = !0,
            this.g.abort(),
            this.j = !1,
            mf(this, "complete"),
            mf(this, "abort"),
            Tf(this))
        }
        ;
        Kf.prototype.l = function() {
            this.g && (this.h && (this.h = !1,
            this.j = !0,
            this.g.abort(),
            this.j = !1),
            Tf(this, !0));
            Kf.aa.l.call(this)
        }
        ;
        Kf.prototype.ca = function() {
            this.m || (this.G || this.o || this.j ? Uf(this) : this.ja())
        }
        ;
        Kf.prototype.ja = function() {
            Uf(this)
        }
        ;
        var Uf = function(a) {
            if (a.h && "undefined" != typeof $b && (!a.A[1] || 4 != (a.g ? a.g.readyState : 0) || 2 != Vf(a)))
                if (a.o && 4 == (a.g ? a.g.readyState : 0))
                    Hf(a.ca, 0, a);
                else if (mf(a, "readystatechange"),
                4 == (a.g ? a.g.readyState : 0)) {
                    a.h = !1;
                    try {
                        var b = Vf(a);
                        a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                        }
                        var d;
                        if (!(d = c)) {
                            var e;
                            if (e = 0 === b) {
                                var f = String(a.J).match(If)[1] || null;
                                if (!f && k.self && k.self.location) {
                                    var g = k.self.location.protocol;
                                    f = g.substr(0, g.length - 1)
                                }
                                e = !Lf.test(f ? f.toLowerCase() : "")
                            }
                            d = e
                        }
                        d ? (mf(a, "complete"),
                        mf(a, "success")) : Sf(a)
                    } finally {
                        Tf(a)
                    }
                }
        }
          , Tf = function(a, b) {
            if (a.g) {
                Pf(a);
                var c = a.g
                  , d = a.A[0] ? ac : null;
                a.g = null;
                a.A = null;
                b || mf(a, "ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        }
          , Pf = function(a) {
            a.g && a.U && (a.g.ontimeout = null);
            a.v && (k.clearTimeout(a.v),
            a.v = null)
        }
          , Vf = function(a) {
            try {
                return 2 < (a.g ? a.g.readyState : 0) ? a.g.status : -1
            } catch (b) {
                return -1
            }
        };
        var Wf = function(a) {
            var b = void 0 === b ? {} : b;
            this.g = a ? De(Ge(Ee(B(a, 4) || ""), b)).toString() : null
        };
        Wf.prototype.reportClientEvent = function(a) {
            if (this.g) {
                q(a, 9, Date.now());
                var b = this.g;
                a = Uc(a);
                var c = new Kf;
                Nf.push(c);
                c.i.add("ready", c.ia, !0, void 0, void 0);
                Rf(c, b, a)
            }
        }
        ;
        var Wa = function(a) {
            J.call(this, a, -1, Xf)
        };
        z(Wa, J);
        var Yf = function(a) {
            J.call(this, a)
        };
        z(Yf, J);
        var Sa = function(a) {
            J.call(this, a)
        };
        z(Sa, J);
        var Zf = function(a) {
            J.call(this, a)
        };
        z(Zf, J);
        var Xf = [7];
        var ag = function(a) {
            J.call(this, a, -1, $f)
        };
        z(ag, J);
        var bg = function(a) {
            J.call(this, a)
        };
        z(bg, J);
        var $f = [3];
        var Xa = function(a) {
            this.g = a || {
                cookie: ""
            }
        };
        Xa.prototype.set = function(a, b, c) {
            var d = !1;
            if ("object" === typeof c) {
                var e = c.Qa;
                d = c.Ra || !1;
                var f = c.domain || void 0;
                var g = c.path || void 0;
                var h = c.ga
            }
            if (/[;=\s]/.test(a))
                throw Error("I`" + a);
            if (/[;\r\n]/.test(b))
                throw Error("J`" + b);
            void 0 === h && (h = -1);
            this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
        }
        ;
        Xa.prototype.get = function(a, b) {
            for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
                f = kc(d[e]);
                if (0 == f.lastIndexOf(c, 0))
                    return f.substr(c.length);
                if (f == a)
                    return ""
            }
            return b
        }
        ;
        Xa.prototype.l = function() {
            for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++)
                e = kc(a[f]),
                d = e.indexOf("="),
                -1 == d ? (b.push(""),
                c.push(e)) : (b.push(e.substring(0, d)),
                c.push(e.substring(d + 1)));
            return c
        }
        ;
        var cg = function(a, b) {
            a = new Xa(a);
            a.get("FCCDCF");
            a.set("FCCDCF", "", {
                ga: 0,
                path: "/",
                domain: b
            })
        };
        var dg = function(a, b, c) {
            this.context = a;
            this.g = b;
            this.h = c
        };
        var fg = function(a) {
            J.call(this, a, -1, eg)
        };
        z(fg, J);
        var hg = function(a) {
            return u(a, gg, 10)
        }
          , N = function(a) {
            return u(a, he, 11)
        }
          , jg = function(a) {
            J.call(this, a, -1, ig)
        };
        z(jg, J);
        var kg = function(a) {
            J.call(this, a)
        };
        z(kg, J);
        kg.prototype.getType = function() {
            return B(this, 1)
        }
        ;
        var lg = function(a) {
            J.call(this, a)
        };
        z(lg, J);
        lg.prototype.getType = function() {
            return B(this, 1)
        }
        ;
        var gg = function(a) {
            J.call(this, a)
        };
        z(gg, J);
        var eg = [13, 12]
          , ig = [8];
        /*

 SPDX-License-Identifier: Apache-2.0
*/
        var $a = {};
        var gb = function() {}
          , Za = function(a) {
            this.g = a
        };
        z(Za, gb);
        Za.prototype.toString = function() {
            return this.g.toString()
        }
        ;
        var mg = function() {}
          , eb = function(a) {
            this.g = a
        };
        z(eb, mg);
        eb.prototype.toString = function() {
            return this.g
        }
        ;
        var ng = new eb("about:invalid#zTSz",$a);
        var og = new function() {
            var a = new Map([["A", new Map([["href", {
                D: 2
            }]])], ["AREA", new Map([["href", {
                D: 2
            }]])], ["LINK", new Map([["href", {
                D: 2,
                conditions: new Map([["rel", new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])
            }]])], ["SOURCE", new Map([["src", {
                D: 2
            }]])], ["IMG", new Map([["src", {
                D: 2
            }]])], ["VIDEO", new Map([["src", {
                D: 2
            }]])], ["AUDIO", new Map([["src", {
                D: 2
            }]])]])
              , b = new Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "))
              , c = new Map([["dir", {
                D: 3,
                conditions: new Map([["dir", new Set(["auto", "ltr", "rtl"])]])
            }], ["async", {
                D: 3,
                conditions: new Map([["async", new Set(["async"])]])
            }], ["cite", {
                D: 2
            }], ["loading", {
                D: 3,
                conditions: new Map([["loading", new Set(["eager", "lazy"])]])
            }], ["poster", {
                D: 2
            }], ["target", {
                D: 3,
                conditions: new Map([["target", new Set(["_self", "_blank"])]])
            }]]);
            this.h = new Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" "));
            this.g = a;
            this.i = b;
            this.j = c
        }
        ;
        var ob = function(a) {
            this.ua = a
        }
          , pg = [pb("data"), pb("http"), pb("https"), pb("mailto"), pb("ftp"), new ob(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        }
        )];
        var rg = function(a) {
            var b = document.createElement("span");
            b.appendChild(qg(a));
            a = (new XMLSerializer).serializeToString(b);
            a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
            return ab(a)
        }
          , qg = function(a) {
            var b = sg;
            a = lb(a);
            a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, function(g) {
                return tg(b, g)
            }, !1);
            for (var c = a.nextNode(), d = document.createDocumentFragment(), e = d; null !== c; ) {
                var f = void 0;
                if (c.nodeType === Node.TEXT_NODE)
                    f = document.createTextNode(c.data);
                else if (nb(c))
                    f = ug(b, c);
                else
                    throw Error("O");
                e.appendChild(f);
                if (c = a.firstChild())
                    e = f;
                else
                    for (; !(c = a.nextSibling()) && (c = a.parentNode()); )
                        e = e.parentNode
            }
            return d
        }
          , ug = function(a, b) {
            var c = mb(b)
              , d = document.createElement(c);
            b = b.attributes;
            for (var e = y(b), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                f = g.name;
                g = g.value;
                var h = a.h
                  , l = h.g.get(c);
                h = (null === l || void 0 === l ? 0 : l.has(f)) ? l.get(f) : h.i.has(f) ? {
                    D: 1
                } : h.j.get(f) || {
                    D: 0
                };
                a: {
                    l = void 0;
                    var m = h.conditions;
                    if (m) {
                        m = y(m);
                        for (var p = m.next(); !p.done; p = m.next()) {
                            var v = y(p.value);
                            p = v.next().value;
                            v = v.next().value;
                            if ((p = null === (l = b.getNamedItem(p)) || void 0 === l ? void 0 : l.value) && !v.has(p)) {
                                l = !1;
                                break a
                            }
                        }
                    }
                    l = !0
                }
                if (l)
                    switch (h.D) {
                    case 1:
                        d.setAttribute(f, g);
                        break;
                    case 2:
                        h = void 0;
                        h = void 0 === h ? pg : h;
                        a: {
                            h = void 0 === h ? pg : h;
                            for (l = 0; l < h.length; ++l)
                                if (m = h[l],
                                m instanceof ob && m.ua(g)) {
                                    h = new eb(g,$a);
                                    break a
                                }
                            h = void 0
                        }
                        h = fb(h || ng);
                        h !== g && vg(a);
                        d.setAttribute(f, h);
                        break;
                    case 3:
                        d.setAttribute(f, g.toLowerCase());
                        break;
                    case 4:
                        d.setAttribute(f, g);
                        break;
                    case 0:
                        vg(a);
                        break;
                    default:
                        throw Error("Unhandled AttributePolicyAction case");
                    }
                else
                    vg(a)
            }
            return d
        }
          , tg = function(a, b) {
            if (b.nodeType === Node.TEXT_NODE)
                return NodeFilter.FILTER_ACCEPT;
            if (!nb(b))
                return NodeFilter.FILTER_REJECT;
            b = mb(b);
            if (null === b)
                return vg(a),
                NodeFilter.FILTER_REJECT;
            var c = a.h;
            if ("form" !== b.toLowerCase() && (c.h.has(b) || c.g.has(b)))
                return NodeFilter.FILTER_ACCEPT;
            vg(a);
            return NodeFilter.FILTER_REJECT
        }
          , vg = function(a) {
            0 === a.g.length && a.g.push("")
        }
          , sg = new function() {
            this.h = og;
            this.g = [];
            if ($a !== $a)
                throw Error("K");
        }
        ;
        var wg = function(a) {
            this.h = this.o = this.j = "";
            this.s = null;
            this.i = this.g = "";
            this.l = !1;
            var b;
            a instanceof wg ? (this.l = a.l,
            xg(this, a.j),
            this.o = a.o,
            this.h = a.h,
            yg(this, a.s),
            this.g = a.g,
            zg(this, Ag(a.m)),
            this.i = a.i) : a && (b = String(a).match(If)) ? (this.l = !1,
            xg(this, b[1] || "", !0),
            this.o = Bg(b[2] || ""),
            this.h = Bg(b[3] || "", !0),
            yg(this, b[4]),
            this.g = Bg(b[5] || "", !0),
            zg(this, b[6] || "", !0),
            this.i = Bg(b[7] || "")) : (this.l = !1,
            this.m = new O(null,this.l))
        };
        wg.prototype.toString = function() {
            var a = []
              , b = this.j;
            b && a.push(Cg(b, Dg, !0), ":");
            var c = this.h;
            if (c || "file" == b)
                a.push("//"),
                (b = this.o) && a.push(Cg(b, Dg, !0), "@"),
                a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                c = this.s,
                null != c && a.push(":", String(c));
            if (c = this.g)
                this.h && "/" != c.charAt(0) && a.push("/"),
                a.push(Cg(c, "/" == c.charAt(0) ? Eg : Fg, !0));
            (c = this.m.toString()) && a.push("?", c);
            (c = this.i) && a.push("#", Cg(c, Gg));
            return a.join("")
        }
        ;
        wg.prototype.resolve = function(a) {
            var b = new wg(this)
              , c = !!a.j;
            c ? xg(b, a.j) : c = !!a.o;
            c ? b.o = a.o : c = !!a.h;
            c ? b.h = a.h : c = null != a.s;
            var d = a.g;
            if (c)
                yg(b, a.s);
            else if (c = !!a.g) {
                if ("/" != d.charAt(0))
                    if (this.h && !this.g)
                        d = "/" + d;
                    else {
                        var e = b.g.lastIndexOf("/");
                        -1 != e && (d = b.g.substr(0, e + 1) + d)
                    }
                e = d;
                if (".." == e || "." == e)
                    d = "";
                else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                    d = 0 == e.lastIndexOf("/", 0);
                    e = e.split("/");
                    for (var f = [], g = 0; g < e.length; ) {
                        var h = e[g++];
                        "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                        d && g == e.length && f.push("")) : (f.push(h),
                        d = !0)
                    }
                    d = f.join("/")
                } else
                    d = e
            }
            c ? b.g = d : c = "" !== a.m.toString();
            c ? zg(b, Ag(a.m)) : c = !!a.i;
            c && (b.i = a.i);
            return b
        }
        ;
        var xg = function(a, b, c) {
            a.j = c ? Bg(b, !0) : b;
            a.j && (a.j = a.j.replace(/:$/, ""))
        }
          , yg = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b)
                    throw Error("P`" + b);
                a.s = b
            } else
                a.s = null
        }
          , zg = function(a, b, c) {
            b instanceof O ? (a.m = b,
            Hg(a.m, a.l)) : (c || (b = Cg(b, Ig)),
            a.m = new O(b,a.l))
        }
          , Bg = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        }
          , Cg = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, Jg),
            c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            a) : null
        }
          , Jg = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
          , Dg = /[#\/\?@]/g
          , Fg = /[#\?:]/g
          , Eg = /[#\?]/g
          , Ig = /[#\?@]/g
          , Gg = /#/g
          , O = function(a, b) {
            this.h = this.g = null;
            this.i = a || null;
            this.j = !!b
        }
          , Kg = function(a) {
            a.g || (a.g = new Map,
            a.h = 0,
            a.i && Jf(a.i, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        };
        O.prototype.add = function(a, b) {
            Kg(this);
            this.i = null;
            a = Lg(this, a);
            var c = this.g.get(a);
            c || this.g.set(a, c = []);
            c.push(b);
            this.h += 1;
            return this
        }
        ;
        var Mg = function(a, b) {
            Kg(a);
            b = Lg(a, b);
            a.g.has(b) && (a.i = null,
            a.h -= a.g.get(b).length,
            a.g.delete(b))
        }
          , Ng = function(a, b) {
            Kg(a);
            b = Lg(a, b);
            return a.g.has(b)
        };
        O.prototype.forEach = function(a, b) {
            Kg(this);
            this.g.forEach(function(c, d) {
                c.forEach(function(e) {
                    a.call(b, e, d, this)
                }, this)
            }, this)
        }
        ;
        O.prototype.l = function(a) {
            Kg(this);
            var b = [];
            if ("string" === typeof a)
                Ng(this, a) && (b = b.concat(this.g.get(Lg(this, a))));
            else {
                a = Array.from(this.g.values());
                for (var c = 0; c < a.length; c++)
                    b = b.concat(a[c])
            }
            return b
        }
        ;
        O.prototype.set = function(a, b) {
            Kg(this);
            this.i = null;
            a = Lg(this, a);
            Ng(this, a) && (this.h -= this.g.get(a).length);
            this.g.set(a, [b]);
            this.h += 1;
            return this
        }
        ;
        O.prototype.get = function(a, b) {
            if (!a)
                return b;
            a = this.l(a);
            return 0 < a.length ? String(a[0]) : b
        }
        ;
        O.prototype.toString = function() {
            if (this.i)
                return this.i;
            if (!this.g)
                return "";
            for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
                var d = b[c]
                  , e = encodeURIComponent(String(d));
                d = this.l(d);
                for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                    a.push(g)
                }
            }
            return this.i = a.join("&")
        }
        ;
        var Ag = function(a) {
            var b = new O;
            b.i = a.i;
            a.g && (b.g = new Map(a.g),
            b.h = a.h);
            return b
        }
          , Lg = function(a, b) {
            b = String(b);
            a.j && (b = b.toLowerCase());
            return b
        }
          , Hg = function(a, b) {
            b && !a.j && (Kg(a),
            a.i = null,
            a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (Mg(this, d),
                Mg(this, e),
                0 < c.length && (this.i = null,
                this.g.set(Lg(this, e), ea(c)),
                this.h += c.length))
            }, a));
            a.j = b
        };
        var tb = {}
          , Og = {}
          , Pg = {}
          , Qg = {}
          , w = function() {
            throw Error("R");
        };
        w.prototype.N = null;
        w.prototype.toString = function() {
            return this.content
        }
        ;
        var Rg = function() {
            w.call(this)
        };
        ec(Rg, w);
        Rg.prototype.H = tb;
        var Sg = function() {
            w.call(this)
        };
        ec(Sg, w);
        Sg.prototype.H = Og;
        Sg.prototype.N = 1;
        var Tg = function() {
            w.call(this)
        };
        ec(Tg, w);
        Tg.prototype.H = Qg;
        Tg.prototype.N = 1;
        var Ug = function(a, b) {
            return null != a && a.H === b
        };
        var Vg = function(a) {
            if (null != a)
                switch (a.N) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
                }
            return null
        }
          , S = function(a) {
            return Ug(a, tb) ? a : a instanceof Qe ? P(hb(a).toString(), a.g()) : a instanceof gb ? P(db(a)) : P(String(String(a)).replace(Wg, Xg), Vg(a))
        }
          , Yg = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c) {
                return new b(String(c))
            }
        }
          , P = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.N = d);
                return c
            }
        }(Rg)
          , Zg = Yg(Sg)
          , U = Yg(Tg)
          , V = function(a) {
            if (null == a)
                throw Error("T");
            return a
        }
          , $g = function(a, b) {
            return a && b && a.ta && b.ta ? a.H !== b.H ? !1 : a.toString() === b.toString() : a instanceof w && b instanceof w ? a.H != b.H ? !1 : a.toString() == b.toString() : a == b
        }
          , ah = function(a) {
            return a instanceof w ? !!a.content : !!a
        }
          , bh = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = String(c);
                if (!c)
                    return "";
                c = new b(c);
                void 0 !== d && (c.N = d);
                return c
            }
        }(Rg)
          , hh = function(a) {
            if (null == a)
                return "";
            if (a instanceof Qe)
                a = hb(a).toString();
            else if (null != a && a.H === tb)
                a = a.toString();
            else if (a instanceof gb)
                a = db(a);
            else
                return a;
            for (var b = "", c = 0, d = "", e = [], f = /<(?:!--.*?--|(?:!|(\/?[a-z][\w:-]*))((?:[^>'"]|"[^"]*"|'[^']*')*))>|$/gi, g; g = f.exec(a); ) {
                var h = g[1]
                  , l = g[2]
                  , m = g.index;
                h = h ? h.toLowerCase() : null;
                if (d)
                    d === h && (d = "");
                else if (c = a.substring(c, m),
                c = -1 != c.indexOf("&") ? "document"in k ? xf(c) : yf(c) : c,
                ch(e) || (c = c.replace(/[ \t\r\n]+/g, " "),
                /[^ \t\r\n]$/.test(b) || (c = c.replace(/^ /, ""))),
                b += c,
                h && (/^(script|style|textarea|title)$/.test(h) ? d = "/" + h : /^br$/.test(h) ? b += "\n" : dh.test(h) ? /[^\n]$/.test(b) && (b += "\n") : /^(td|th)$/.test(h) && (b += "\t"),
                !eh.test("<" + h + ">")))
                    if ("/" === h.charAt(0))
                        for (h = h.substring(1); 0 < e.length && e.pop().g !== h; )
                            ;
                    else if (/^pre$/.test(h))
                        e.push(new fh(h,!0));
                    else {
                        a: {
                            if ("" !== l)
                                for (; c = gh.exec(l); )
                                    if (/^style$/i.test(c[1])) {
                                        l = c[2];
                                        gh.lastIndex = 0;
                                        if ("" !== l) {
                                            if ("'" === l.charAt(0) || '"' === l.charAt(0))
                                                l = l.substr(1, l.length - 2);
                                            b: {
                                                var p;
                                                for (c = /[\t\n\r ]*([^:;\t\n\r ]*)[\t\n\r ]*:[\t\n\r ]*([^:;\t\n\r ]*)[\t\n\r ]*(?:;|$)/g; p = c.exec(l); )
                                                    if (/^white-space$/i.test(p[1])) {
                                                        p = p[2];
                                                        if (/^(pre|pre-wrap|break-spaces)$/i.test(p)) {
                                                            l = !0;
                                                            break b
                                                        }
                                                        if (/^(normal|nowrap)$/i.test(p)) {
                                                            l = !1;
                                                            break b
                                                        }
                                                    }
                                                l = null
                                            }
                                            break a
                                        }
                                        break
                                    }
                            l = null
                        }
                        null == l && (l = ch(e));
                        e.push(new fh(h,l))
                    }
                if (!g[0])
                    break;
                c = m + g[0].length
            }
            return b.replace(/\u00A0/g, " ")
        }
          , fh = function(a, b) {
            this.g = a;
            this.h = b
        }
          , ch = function(a) {
            var b = a.length;
            return 0 < b ? a[b - 1].h : !1
        }
          , dh = /^\/?(address|blockquote|dd|div|dl|dt|h[1-6]|hr|li|ol|p|pre|table|tr|ul)$/
          , eh = RegExp("^<(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\\b")
          , ih = function(a) {
            return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
        }
          , W = function(a) {
            if (Ug(a, tb)) {
                var b = String;
                a = String(a.content).replace(jh, "").replace(kh, "&lt;");
                b = b(a).replace(lh, Xg)
            } else
                b = String(a).replace(Wg, Xg);
            return b
        }
          , mh = /['()]/g
          , nh = function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        }
          , oh = function(a) {
            a = encodeURIComponent(String(a));
            mh.lastIndex = 0;
            return mh.test(a) ? a.replace(mh, nh) : a
        }
          , X = function(a) {
            Ug(a, Qg) ? a = ih(a.content) : null == a ? a = "" : a instanceof Le ? a = ih(a instanceof Le && a.constructor === Le ? a.g : "type_error:SafeStyle") : a instanceof Ne ? a = ih(Oe(a)) : (a = String(a),
            a = ph.test(a) ? a : "zSoyz");
            return a
        }
          , qh = function(a) {
            return ba(a, function(b) {
                return $g("a", b)
            })
        }
          , rh = function() {
            return Ub.apply(0, arguments)
        }
          , sh = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        }
          , Xg = function(a) {
            return sh[a]
        }
          , th = {
            "\x00": "\\0 ",
            "\b": "\\8 ",
            "\t": "\\9 ",
            "\n": "\\a ",
            "\v": "\\b ",
            "\f": "\\c ",
            "\r": "\\d ",
            '"': "\\22 ",
            "&": "\\26 ",
            "'": "\\27 ",
            "(": "\\28 ",
            ")": "\\29 ",
            "*": "\\2a ",
            "/": "\\2f ",
            ":": "\\3a ",
            ";": "\\3b ",
            "<": "\\3c ",
            "=": "\\3d ",
            ">": "\\3e ",
            "@": "\\40 ",
            "\\": "\\5c ",
            "{": "\\7b ",
            "}": "\\7d ",
            "\u0085": "\\85 ",
            "\u00a0": "\\a0 ",
            "\u2028": "\\2028 ",
            "\u2029": "\\2029 "
        }
          , uh = function(a) {
            return th[a]
        }
          , vh = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        }
          , wh = function(a) {
            return vh[a]
        }
          , Wg = /[\x00\x22\x26\x27\x3c\x3e]/g
          , lh = /[\x00\x22\x27\x3c\x3e]/g
          , xh = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g
          , yh = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
          , ph = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i
          , zh = /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i
          , Ah = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i
          , Bh = function(a) {
            return String(a).replace(yh, wh)
        }
          , jh = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
          , kh = /</g
          , gh = /([a-zA-Z][a-zA-Z0-9:\-]*)[\t\n\r\u0020]*=[\t\n\r\u0020]*("[^"]*"|'[^']*')/g;
        /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var qb = {};
        var Dh = function(a) {
            J.call(this, a, -1, Ch)
        };
        z(Dh, J);
        var Fh = function(a) {
            return t(a, Eh, 1)
        }
          , Gh = function(a) {
            J.call(this, a)
        };
        z(Gh, J);
        var Eh = function(a) {
            J.call(this, a, -1, Hh)
        };
        z(Eh, J);
        var Ih = function(a) {
            J.call(this, a)
        };
        z(Ih, J);
        var Kh = function(a) {
            J.call(this, a, -1, Jh)
        };
        z(Kh, J);
        Kh.prototype.getType = function() {
            return B(this, 2)
        }
        ;
        var Lh = function(a) {
            J.call(this, a)
        };
        z(Lh, J);
        var Y = function(a) {
            J.call(this, a)
        };
        z(Y, J);
        var Mh = function(a) {
            J.call(this, a)
        };
        z(Mh, J);
        var Nh = function(a) {
            J.call(this, a)
        };
        z(Nh, J);
        var Oh = function(a) {
            J.call(this, a)
        };
        z(Oh, J);
        var Ph = function(a) {
            J.call(this, a)
        };
        z(Ph, J);
        var Ch = [1, 2, 3, 11, 12, 4, 5, 6, 7]
          , Hh = [9, 6, 7, 8, 14]
          , Jh = [5];
        var Rh = function(a) {
            J.call(this, a, -1, Qh)
        };
        z(Rh, J);
        var Sh = function(a) {
            J.call(this, a)
        };
        z(Sh, J);
        var Qh = [2];
        var Th = function(a) {
            this.h = a.document;
            this.i = this.j = this.g = null
        }
          , Wh = function(a, b) {
            Uh(a);
            var c = Vh(a, b)
              , d = Vh(a, b, !0);
            c && d && (a.g = function() {
                var e = a.h.activeElement;
                if (e)
                    if (Df(b, e))
                        a.j = e;
                    else if (e === a.h.activeElement)
                        switch (a.j) {
                        case c:
                            d.focus();
                            a.j = d;
                            break;
                        default:
                            c.focus(),
                            a.j = c
                        }
            }
            ,
            a.h.addEventListener("focus", a.g, !0),
            a.h.addEventListener("focusin", a.g))
        }
          , Uh = function(a) {
            a.g && (document.removeEventListener("focus", a.g, !0),
            document.removeEventListener("focusin", a.g),
            a.g = null)
        }
          , Xh = function(a, b) {
            a.i = function(c) {
                "Escape" !== c.key && "Esc" !== c.key || b()
            }
            ;
            a.h.addEventListener("keydown", a.i)
        }
          , Yh = function(a, b) {
            var c = void 0 === c ? !0 : c;
            var d = Vh(a, b, !1);
            d && (d.focus(),
            c && Wh(a, b))
        }
          , Vh = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            if (Ff(b) && !c)
                return b;
            var d = c ? [].slice.call(b.children, 0).reverse() : b.children;
            d = y(d);
            for (var e = d.next(); !e.done; e = d.next())
                if (e = Vh(a, e.value, c))
                    return e;
            return Ff(b) && c ? b : null
        };
        var Zh = new jc(hc,"https://fonts.googleapis.com/css?family=Archivo|Arimo|Bitter|EB+Garamond|Lato|Libre+Baskerville|Libre+Franklin|Lora|Google+Sans_old:regular,medium|Material+Icons|Merriweather|Montserrat|Mukta|Muli|Nunito|Open+Sans:400,600,700|Open+Sans+Condensed:300,400,600,700|Oswald|Playfair+Display|Poppins|Raleway|Roboto|Roboto+Condensed|Roboto+Slab|Slabo+27px|Source+Sans+Pro|Ubuntu|Volkhov&display=swap")
          , $h = Ee(Zh instanceof jc && Zh.constructor === jc && Zh.h === ic ? Zh.g : "type_error:Const")
          , ai = function(a) {
            this.h = a;
            this.i = rb(a);
            this.g = null
        }
          , bi = function(a) {
            if (!a.g) {
                a.g = sb(a.i.g, "LINK");
                var b = a.g;
                b.rel = "stylesheet";
                b.href = De($h).toString();
                var c = vf(b.ownerDocument && b.ownerDocument.defaultView);
                c && b.setAttribute("nonce", c);
                a.h.document.head.insertBefore(a.g, a.h.document.head.firstChild)
            }
        };
        var ci = function(a) {
            this.g = rb(a);
            this.h = ""
        }
          , di = function(a) {
            a.h = a.g.g.body.style.overflow;
            a.g.g.body.style.overflow = "hidden"
        };
        var ei = function(a) {
            a.style.display = ""
        }
          , gi = function(a, b) {
            var c = rb(b);
            b = c.g;
            if (xc && b.createStyleSheet)
                return b = b.createStyleSheet(),
                fi(b, a),
                b;
            b = Gf(c, "HEAD")[0];
            if (!b) {
                var d = Gf(c, "BODY")[0];
                b = c.h("HEAD");
                d.parentNode.insertBefore(b, d)
            }
            c = c.h("STYLE");
            (d = vf(void 0)) && c.setAttribute("nonce", d);
            fi(c, a);
            b.appendChild(c);
            return c
        }
          , fi = function(a, b) {
            b = Oe(b);
            if (xc && void 0 !== a.cssText)
                a.cssText = b;
            else if (k.trustedTypes)
                if ("textContent"in a)
                    a.textContent = b;
                else if (3 == a.nodeType)
                    a.data = String(b);
                else if (a.firstChild && 3 == a.firstChild.nodeType) {
                    for (; a.lastChild != a.firstChild; )
                        a.removeChild(a.lastChild);
                    a.firstChild.data = String(b)
                } else {
                    for (var c; c = a.firstChild; )
                        a.removeChild(c);
                    a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)))
                }
            else
                a.innerHTML = b
        };
        var hi = function(a, b) {
            tc(b.querySelectorAll(a), function(c) {
                return c.style.setProperty("display", "none", "important")
            })
        }
          , ii = function(a) {
            var b = function(c) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (e.type === CSSRule.STYLE_RULE)
                        for (var f = 0; f < e.style.length; f++) {
                            var g = e.style[f]
                              , h = e.style.getPropertyValue(g);
                            e.style.setProperty(g, h, "important")
                        }
                    else
                        e.type === CSSRule.MEDIA_RULE && b(e.cssRules)
                }
            };
            (a = a.sheet || a) && a.cssRules && b(a.cssRules)
        };
        var ji = function(a) {
            a = void 0 === a ? document : a;
            return a.createElement("script")
        };
        var ki = function(a, b, c, d, e, f) {
            try {
                var g = a.g
                  , h = ji(g);
                h.async = !0;
                h.src = De(b);
                kb(h);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? ki(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h),
                    f())
                })
            } catch (l) {
                f()
            }
        }
          , li = function(a, b) {
            var c = void 0 === c ? function() {}
            : c;
            var d = void 0 === d ? function() {}
            : d;
            ki(rb(a), b, 0, !1, c, d)
        };
        var mi = function(a, b) {
            var c = "overflow-wrap: break-word;" + ((null == a ? 0 : E(a, 4)) ? "font-weight: bold;" : "font-weight: normal;") + ((null == a ? 0 : E(a, 5)) ? "font-style: italic;" : "font-style: normal;") + ((null == a ? 0 : E(a, 6)) ? "text-decoration: underline;" : "text-decoration: initial;");
            if (!b)
                switch (null == a ? null : B(a, 7)) {
                case 2:
                    c += "text-align: center;";
                    break;
                case 3:
                    c += "text-align: right;";
                    break;
                case 4:
                    c += "text-align: justify;";
                    break;
                default:
                    c += "text-align: left;"
                }
            c += (ah(null == a ? null : B(a, 1)) && "" != B(a, 1) ? "font-family: '" + String(B(a, 1)).replace(xh, uh) + "';" : "") + (ah(null == a ? null : B(a, 3)) ? "color: " + X(B(a, 3)) + ";" : "color: #000000;");
            return U(c)
        }
          , ni = function(a) {
            var b = "display: flex; flex-direction: row;";
            switch (null == a ? null : B(a, 1)) {
            case 1:
                b += "justify-content: flex-start;";
                break;
            case 3:
                b += "justify-content: flex-end;";
                break;
            default:
                b += "justify-content: center;"
            }
            return U(b)
        };
        var oi = function() {
            return "fc-message-root"
        }
          , pi = function() {
            var a = "fc-consent-root";
            a = void 0 === a ? oi() : a;
            return U("." + X(a) + "  .fc-close-background {background-color: white; cursor: pointer; height: 8px; left: 50%; position: absolute; radius: 50%; -webkit-transform: translate(-50%,-50%); -ms-transform: translate(-50%,-50%); transform: translate(-50%,-50%); top: 50%; width: 8px;}." + X(a) + " .fc-close-icon {border-radius: 50%; box-sizing: border-box; color: #5f6368; cursor: pointer; display: inline-block; font-family: 'Material Icons'; font-size: 20px; height: 40px; line-height: 40px; position: relative; text-align: center; vertical-align: middle; width: 40px;}." + X(a) + " .fc-close {box-sizing: border-box; color: white; cursor: pointer; direction: ltr; display: inline-block; font-size: 1em; height: 40px; margin: 0; opacity: 1; outline: none; text-align: center; text-indent: 0; width: 40px; z-index: 1; top: 0; right: 0; position: absolute;}." + X(a) + " .fc-close:focus {outline: none;}." + X(a) + " .fc-close:hover .fc-close-icon {color: #202124; background-color:  rgba(32, 33, 36, 0.04);}." + X(a) + " .fc-close:focus .fc-close-icon {color: #202124; background-color:  rgba(32, 33, 36, 0.12); outline: 1px solid #3c4043;}")
        }
          , qi = function() {
            var a = "fc-consent-root";
            a = void 0 === a ? oi() : a;
            var b = "." + X(a) + " a, ." + X(a) + " a p {cursor: pointer;}." + X(a) + " button, ." + X(a) + " button div, ." + X(a) + " button p, ." + X(a) + " .fc-button, ." + X(a) + " .fc-button div, ." + X(a) + " .fc-button p {cursor: pointer;}." + X(a) + " a:hover {";
            var c = U("filter: brightness(" + X("80%") + ");");
            return U(b + c + "}." + X(a) + " button:focus p:not(.fc-button-text), ." + X(a) + " .fc-button:focus .fc-button-label {outline: auto;}." + X(a) + " button:focus:not(:focus-visible) p ." + X(a) + " .fc-button:focus:not(:focus-visible) .fc-button-label {outline: none;}" + (X(".fc-consent-root .fc-button, .fc-consent-root .fc-choice-dialog, .fc-consent-root .fc-faq-item, .fc-consent-root .fc-data-preferences-dialog, .fc-consent-root .fc-dialog-header-back-button, .fc-consent-root .fc-navigation-button, .fc-consent-root .fc-vendor-preferences-dialog, .fc-consent-root .fc-preference-slider, .fc-consent-root .fc-preference-consent, .fc-consent-root .fc-preference-legitimate-interest, .fc-consent-root .fc-slider-el, .fc-consent-root .fc-help-dialog-container, .fc-consent-root .fc-help-dialog-close-button") + " {outline: 1px solid transparent;}"))
        }
          , ri = function() {
            var a = rh("div", "h1", "h2", "a", "p", "button", "i", "input", "label", "span", "ul", "li")
              , b = "fc-consent-root";
            b = void 0 === b ? oi() : b;
            var c = "div." + X(b) + ",";
            var d = V(a);
            d = 0 <= qh(d);
            c += d ? " ." + X(b) + " a:link, " : "";
            d = a.length;
            for (var e = 0; e < d; e++) {
                var f = a[e];
                c += "." + X(b) + " " + X(f) + (e != V(a).length - 1 ? "," : "")
            }
            return U(c + "{-webkit-app-region: none; -webkit-appearance: none; -webkit-border-horizontal-spacing: 0; -webkit-border-image: none; -webkit-border-vertical-spacing: 0; -webkit-box-align: stretch; -webkit-box-decoration-break: slice; -webkit-box-direction: normal; -webkit-box-flex: 0; -webkit-box-ordinal-group: 1; -webkit-box-orient: horizontal; -webkit-box-pack: start; -webkit-box-reflect: none; -webkit-font-smoothing: auto; -webkit-highlight: none; -webkit-hyphenate-character: auto; -webkit-line-break: auto; -webkit-line-clamp: none; -webkit-locale: auto; -webkit-margin-after-collapse: collapse; -webkit-margin-before-collapse: collapse; -webkit-mask-box-image-outset: 0; -webkit-mask-box-image-repeat: stretch; -webkit-mask-box-image-slice: 0 fill; -webkit-mask-box-image-source: none; -webkit-mask-box-image-width: auto; -webkit-mask-box-image: none; -webkit-mask-clip: border-box; -webkit-mask-composite: source-over; -webkit-mask-image: none; -webkit-mask-origin: border-box; -webkit-mask-position: 0% 0%; -webkit-mask-repeat: repeat; -webkit-mask-size: auto; -webkit-print-color-adjust: economy; -webkit-rtl-ordering: logical; -webkit-tap-highlight-color: rgba(0, 0, 0, 0.4); -webkit-text-combine: none; -webkit-text-decorations-in-effect: none; -webkit-text-emphasis-color: rgb(0, 0, 0); -webkit-text-emphasis-position: over right; -webkit-text-emphasis-style: none; -webkit-text-orientation: vertical-right; -webkit-text-security: none; -webkit-text-stroke-color: rgb(0, 0, 0); -webkit-text-stroke-width: 0; -webkit-user-drag: auto; -webkit-writing-mode: horizontal-tb; align-content: normal; align-items: normal; align-self: auto; alignment-baseline: auto; animation-delay: 0s; animation-direction: normal; animation-duration: 0s; animation-fill-mode: none; animation-iteration-count: 1; animation-name: none; animation-play-state: running; animation-timing-function: ease; backdrop-filter: none; backface-visibility: visible; background-attachment: scroll; background-blend-mode: normal; background-clip: border-box; background-color: rgba(0, 0, 0, 0); background-image: none; background-origin: padding-box; background-position: 0% 0%; background-repeat: repeat; background-size: auto; baseline-shift: 0; border-bottom-color: rgb(0, 0, 0); border-bottom-left-radius: 0; border-bottom-right-radius: 0; border-bottom-style: none; border-bottom-width: 0; border-collapse: separate; border-image-outset: 0; border-image-repeat: stretch; border-image-slice: 100%; border-image-source: none; border-image-width: 1; border-left-color: rgb(0, 0, 0); border-left-style: none; border-left-width: 0; border-right-color: rgb(0, 0, 0); border-right-style: none; border-right-width: 0; border-top-color: rgb(0, 0, 0); border-top-left-radius: 0; border-top-right-radius: 0; border-top-style: none; border-top-width: 0; bottom: auto; box-shadow: none; box-sizing: content-box; break-after: auto; break-before: auto; break-inside: auto; buffered-rendering: auto; caption-side: top; caret-color: rgb(0, 0, 0); clear: none; clip-path: none; clip-rule: nonzero; clip: auto; color-interpolation-filters: linearrgb; color-interpolation: srgb; color-rendering: auto; color: rgb(0, 0, 0); column-count: auto; column-gap: normal; column-rule-color: rgb(0, 0, 0); column-rule-style: none; column-rule-width: 0; column-span: none; column-width: auto; content: normal; cursor: auto; cx: 0; cy: 0; d: none; display: inline; dominant-baseline: auto; empty-cells: show; fill-opacity: 1; fill-rule: nonzero; fill: rgb(0; 0; 0); filter: none; flex-basis: auto; flex-direction: row; flex-grow: 0; flex-shrink: 1; flex-wrap: nowrap; float: none; flood-color: rgb(0, 0, 0); flood-opacity: 1; font-kerning: auto; font-optical-sizing: auto; font-size: 16px; font-stretch: 100%; font-style: normal; font-variant-caps: normal; font-variant-east-asian: normal; font-variant-ligatures: normal; font-variant-numeric: normal; font-variant: normal; font-weight: 400; grid-auto-columns: auto; grid-auto-flow: row; grid-auto-rows: auto; grid-column-end: auto; grid-column-start: auto; grid-row-end: auto; grid-row-start: auto; grid-template-areas: none; grid-template-columns: none; grid-template-rows: none; height: auto; hyphens: manual; image-rendering: auto; isolation: auto; justify-content: normal; justify-items: normal; justify-self: auto; left: auto; letter-spacing: normal; lighting-color: rgb(255, 255, 255); line-break: auto; line-height: normal; list-style-image: none; list-style-position: outside; list-style-type: disc; margin-bottom: 0; margin-left: 0; margin-right: 0; margin-top: 0; marker-end: none; marker-mid: none; marker-start: none; mask-type: luminance; mask: none; max-height: none; max-width: none; min-height: 0; min-width: 0; mix-blend-mode: normal; object-fit: fill; object-position: 50% 50%; offset-distance: 0; offset-path: none; offset-rotate: auto 0deg; opacity: 1; order: 0; orphans: 2; outline-color: rgb(0, 0, 0); outline-offset: 0; outline-style: none; outline-width: 0; overflow-anchor: auto; overflow-wrap: normal; overflow-x: visible; overflow-y: visible; padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; paint-order: normal; perspective-origin: 0 0; perspective: none; pointer-events: auto; position: static; r: 0; resize: none; right: auto; row-gap: normal; rx: auto; ry: auto; scroll-behavior: auto; shape-image-threshold: 0; shape-margin: 0; shape-outside: none; shape-rendering: auto; speak: normal; stop-color: rgb(0, 0, 0); stop-opacity: 1; stroke-dasharray: none; stroke-dashoffset: 0; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-opacity: 1; stroke-width: 1px; stroke: none; tab-size: 8; table-layout: auto; text-align-last: auto; text-align: start; text-anchor: start; text-decoration-color: rgb(0, 0, 0); text-decoration-line: none; text-decoration-skip-ink: auto; text-decoration-style: solid; text-decoration: none solid rgb(0, 0, 0); text-indent: 0; text-overflow: clip; text-rendering: auto; text-shadow: none; text-size-adjust: auto; text-transform: none; text-underline-position: auto; top: auto; touch-action: auto; transform-origin: 0 0; transform-style: flat; transform: none; transition-delay: 0s; transition-duration: 0s; transition-property: all; transition-timing-function: ease; unicode-bidi: normal; user-select: auto; vector-effect: none; vertical-align: baseline; visibility: visible; white-space: normal; widows: 2; width: auto; will-change: auto; word-break: normal; word-spacing: 0; writing-mode: horizontal-tb; x: 0; y: 0; z-index: auto; zoom: 1;}")
        }
          , si = function() {
            var a = "";
            switch (Aa("zz") ? "zz".toString() : "zz") {
            case "ar":
            case "iw":
            case "fa":
            case "ur":
            case "ps":
            case "sd":
                a += "direction: rtl;";
                break;
            default:
                a += "direction: ltr;"
            }
            return U(a)
        }
          , ti = function(a) {
            return U(X(".fc-consent-root .fc-dialog-overlay, .fc-consent-root .fc-help-dialog-overlay") + " {" + (a ? "display: none;" : "") + "background-color: black; height: 100%; left: 0; opacity: " + X("0.6") + "; position: fixed; top: 0; width: 100%; z-index: -1;}")
        }
          , ui = function(a) {
            var b = "fc-consent-root";
            b = void 0 === b ? oi() : b;
            var c = !$g(1, 3);
            a = "div." + X(b) + " {" + (a ? "" : "position: " + X(c ? "fixed" : "relative") + "; z-index: 2147483644;") + (!a && $g(1, 1) ? "align-items: center; float: top; height: 100%; left: 0; overflow-x: auto; top: 0;" : "") + (c ? "display: flex; justify-content: center; width: 100%;" : "") + "}";
            return U(a)
        };
        var vi = function(a, b) {
            var c = P;
            if (null == B(a, 1))
                b = '<div class="fc-header-image-default"></div>';
            else {
                b = '<img class="fc-header-image"' + (b ? ' alt="' + W(b) + '"' : "") + ' src="';
                var d = B(a, 1);
                Ug(d, Og) || Ug(d, Pg) ? d = Bh(d) : d instanceof M ? d = Bh(Ie(d)) : d instanceof mg ? d = Bh(fb(d)) : d instanceof Be ? d = Bh(De(d).toString()) : (d = String(d),
                d = zh.test(d) ? d.replace(yh, wh) : "about:invalid#zSoyz");
                d += "=";
                if (null == a)
                    var e = null;
                else
                    e = u(a, ge, 2),
                    e = null == e ? null : u(e, fe, 2);
                if (null != e && 3 == B(u(u(a, ge, 2), fe, 2), 2)) {
                    e = Math;
                    var f = e.floor;
                    a = u(u(a, ge, 2), fe, 2);
                    a = B(a, 1);
                    a = "h" + oh(f.call(e, 60 * (null == a ? a : +a)))
                } else
                    a = "h" + oh(60);
                a = Zg(d + a);
                Ug(a, Og) || Ug(a, Pg) ? a = Bh(a) : a instanceof M ? a = Bh(Ie(a)) : a instanceof mg ? a = Bh(fb(a)) : a instanceof Be ? a = Bh(De(a).toString()) : (a = String(a),
                a = Ah.test(a) ? a.replace(yh, wh) : "about:invalid#zSoyz");
                b = b + W(a) + '">'
            }
            return c('<div class="fc-header-image-container">' + b + "</div>")
        }
          , wi = function(a) {
            return P('<button class="fc-close" tabindex="0"' + (a ? ' aria-label="' + W(a) + '"' : "") + '><div class="fc-close-background"></div><i class="material-icons fc-close-icon">cancel</i></button>')
        };
        var xi = function(a) {
            return a instanceof Se ? (a = ub(B(a, 2) || "", null),
            P(hb(a).toString(), a.g())) : null
        };
        var zi = function(a) {
            return yi(a.la, a.ba, a.O, a.$, a.Oa)
        }
          , yi = function(a, b, c, d, e) {
            var f = ""
              , g = null != e ? e : B(b, 1);
            e = t(b, jg, 13).filter(function(l) {
                return B(l, 1) == g
            })[0];
            var h = 0 < V(t(b, lg, 12).filter(function(l) {
                return 4 == l.getType()
            })).length;
            f += '<div class="fc-consent-root"><div class="fc-dialog-overlay"></div><div class="fc-dialog-container">' + Ai(a, b, c, d, e, h) + Bi(a, c, d, e, h) + Ci(a, c, d, e, h) + "</div>" + Di(c) + "</div>";
            return P(f)
        }
          , Ai = function(a, b, c, d, e, f) {
            f = '<div class="fc-dialog fc-choice-dialog" role="dialog" aria-label="' + W(Ei(c, a, e)) + '" tabindex="0">' + (f ? '<div class="fc-choice-dialog-header">' + wi(B(c, 14)) + "</div>" : "") + '<div class="fc-dialog-content"><div class="fc-dialog-scrollable-content"><div class="fc-header fc-dialog-restricted-content">' + (null != N(b) && 2 == B(N(b), 4) ? d ? '<h2 class="fc-ump-sdk-app-icon-placeholder-container fc-header-image-container"><img class="fc-ump-sdk-app-icon-placeholder-image" alt="' + W(B(e, 2)) + '" src="https://fonts.gstatic.com/s/i/googlematerialicons/image/v7/grey600-24dp/1x/gm_image_grey600_24dp.png"/></h2>' : '<h2 class="fc-iris-logo fc-header-image-container" style="display: none;"><img alt="' + W(B(e, 2)) + '" class="fc-iris-logo-image"/></h2><h2 class="fc-iris-title" style="display: none;">' + S(B(e, 2)) + "</h2>" : "") + (null != N(b) && 1 == B(N(b), 4) ? '<h2 class="fc-url-logo">' + vi(N(b), B(e, 2)) + "</h2>" : "") + (null != N(b) && 3 == B(N(b), 4) ? d ? null != B(N(b), 1) ? '<h2 class="fc-site-macro-logo fc-header-image-container">' + vi(N(b), -1 != ("" + V(B(e, 2))).indexOf("%%SITE_NAME%%") ? null : B(e, 2)) + "</h2>" : '<h2 class="fc-site-macro-placeholder-container fc-header-image-container"><img class="fc-site-macro-placeholder-image" alt="' + W(B(e, 2)) + '" src="https://fonts.gstatic.com/s/i/googlematerialicons/image/v7/grey600-24dp/1x/gm_image_grey600_24dp.png"/></h2>' : '<h2 class="fc-site-macro-logo fc-header-image-container">' + vi(N(b), -1 != ("" + V(B(e, 2))).indexOf("%%SITE_NAME%%") ? null : B(e, 2)) + "</h2>" : "") + (null == N(b) ? '<h2 class="fc-dialog-title">' + S(B(e, 2)) + "</h2>" : "") + "<h1>" + S(B(e, 3)) + '</h1></div><div class="fc-stacks fc-dialog-restricted-content"><ul>';
            a = t(a, Ph, 7);
            for (var g = a.length, h = 0; h < g; h++) {
                var l = a[h];
                f += '<li><div class="fc-stack-icon"><i class="material-icons">' + S(B(l, 2)) + '</i></div><span class="fc-stack-name">' + S(B(l, 1)) + "</span></li>"
            }
            f += '</ul></div><button class="fc-faq-header fc-dialog-restricted-content" role="button" aria-label="' + W(B(c, 1)) + '" tabindex="0"><div class="fc-faq-icon"><i class="material-icons faq-section-closed">expand_more</i><i class="material-icons faq-section-open">remove</i></div><span class="fc-faq-label">' + S(B(c, 1)) + '</span></button><div class="fc-faq-contents"><ul class="fc-dialog-restricted-content">';
            a = t(c, Sh, 2);
            g = a.length;
            for (h = 0; h < g; h++)
                l = a[h],
                f += '<li><a class="fc-faq-item" role="button" aria-label="' + W(B(l, 1)) + '" tabindex="0"' + (d ? "" : ' href="#"') + ' data-faq-item-index="' + W(h) + '"><div class="fc-faq-item-dot"></div><span class="fc-faq-item-title">' + S(B(l, 1)) + "</span></a></li>";
            f += '</ul></div><div class="fc-footer fc-dialog-restricted-content"><p>' + S(xi(u(c, Se, 3))) + "</p><p>" + S(B(c, 28)) + "</p></div></div></div>";
            c = (new Map).set(V(1), "fc-cta-consent").set(V(3), "fc-cta-do-not-consent").set(V(2), "fc-cta-manage-options");
            b = new Map(t(b, lg, 12).map(function(m) {
                return {
                    key: m.getType(),
                    value: m
                }
            }).map(function(m) {
                return [m.key, m.value]
            }));
            f += '<div class="fc-footer-buttons-container"><div class="fc-footer-buttons-divider"></div><div class="fc-footer-buttons">';
            d = b.get(1);
            a = Fi(d.getType(), e);
            f += '<button class="fc-button ' + W(c.get(d.getType())) + ' fc-primary-button" role="button" aria-label="' + W(a) + '" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">' + S(a) + "</p></button>";
            d = b.get(3);
            a = b.get(2);
            b = d ? d : a;
            d = d ? a : null;
            a = Fi(b.getType(), e);
            f += '<button class="fc-button ' + W(c.get(b.getType())) + ' fc-secondary-button" role="button" aria-label="' + W(a) + '" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">' + S(a) + "</p></button></div>";
            d && (e = Fi(d.getType(), e),
            f += '<button class="fc-button ' + W(c.get(d.getType())) + '" role="button" aria-label="' + W(e) + '" tabindex="0"><p class="fc-manage-options-third-button-label">' + S(e) + "</p></button>");
            return P(f + "</div></div>")
        }
          , Fi = function(a, b) {
            return "" + t(b, kg, 8).filter(function(c) {
                return c.getType() == a
            }).map(function(c) {
                return B(c, 2)
            })[0]
        }
          , Bi = function(a, b, c, d, e) {
            var f = P;
            d = '<div class="fc-dialog fc-data-preferences-dialog" role="dialog" aria-label="' + W("" + B(d, 4) + ", " + B(d, 5) + ". " + B(b, 8) + ", " + B(b, 43) + ", " + B(b, 44) + " ") + '" tabindex="0"><div class="fc-dialog-header"><button class="fc-dialog-header-back-button fc-data-preferences-back" role="button" aria-label="' + W(B(b, 12)) + '" tabindex="0"><i class="material-icons">arrow_back</i></button><p>' + S(B(b, 4)) + "</p>" + (e ? wi(B(b, 14)) : "") + '</div><div class="fc-dialog-content"><div class="fc-dialog-scrollable-content"><div class="fc-header fc-dialog-restricted-content"><h1>' + S(B(d, 4)) + '</h1></div><div class="fc-body fc-dialog-restricted-content"><p>' + S(B(d, 5)) + '</p></div><div class="fc-preferences-container">';
            e = '<div class="fc-preference-divider"><p>' + S(B(b, 23)) + "</p>" + Gi(B(b, 21), B(b, 22)) + "</div>";
            for (var g = t(a, Y, 3), h = g.length, l = 0; l < h; l++) {
                var m = g[l];
                e += Hi(b, B(m, 2), bh(S(B(m, 3)) + ' <a class="fc-purpose-feature-more-info" role="button" aria-label="' + W("" + B(b, 5) + ", " + B(m, 2)) + '" tabindex="0" data-name="' + W(B(m, 2)) + '" data-legal-description="' + W(B(m, 4)) + '"' + (c ? "" : ' href="#"') + ">" + S(B(b, 5)) + "</a>"), E(m, 5), B(a, 15), "purpose", B(m, 1))
            }
            g = t(a, Mh, 4);
            h = g.length;
            for (l = 0; l < h; l++)
                m = g[l],
                e += Hi(b, B(m, 2), bh(S(B(m, 3)) + ' <a class="fc-purpose-feature-more-info" role="button" aria-label="' + W("" + B(b, 5) + ", " + B(m, 2)) + '" tabindex="0" data-name="' + W(B(m, 2)) + '" data-legal-description="' + W(B(m, 4)) + '"' + (c ? "" : ' href="#"') + ">" + S(B(b, 5)) + "</a>"), !1, void 0, void 0, void 0, void 0, void 0, void 0, B(m, 2), B(b, 6));
            g = t(a, Nh, 5);
            h = g.length;
            for (l = 0; l < h; l++)
                m = g[l],
                e += Hi(b, B(m, 2), bh(S(B(m, 3)) + ' <a class="fc-purpose-feature-more-info" role="button" aria-label="' + W("" + B(b, 5) + ", " + B(m, 2)) + '" tabindex="0" data-name="' + W(B(m, 2)) + '" data-legal-description="' + W(B(m, 4)) + '"' + (c ? "" : ' href="#"') + ">" + S(B(b, 5)) + "</a>"), !1, void 0, void 0, void 0, void 0, void 0, void 0, B(m, 2), B(b, 7));
            g = t(a, Oh, 6);
            h = g.length;
            for (l = 0; l < h; l++)
                m = g[l],
                e += Hi(b, B(m, 2), bh(S(B(m, 3)) + ' <a class="fc-purpose-feature-more-info" role="button" aria-label="' + W("" + B(b, 5) + ", " + B(m, 2)) + '" tabindex="0" data-name="' + W(B(m, 2)) + '" data-legal-description="' + W(B(m, 4)) + '"' + (c ? "" : ' href="#"') + ">" + S(B(b, 5)) + "</a>"), !1, void 0, "special-feature", B(m, 1));
            if (0 < V(t(a, Y, 11)).length)
                for (e += '<div class="fc-noneditable-body fc-dialog-restricted-content fc-lower-preference-divider"><p role="heading" tabindex=0>' + S(B(b, 31)) + '</p></div><div class="fc-preference-divider"><p>' + S(B(b, 30)) + "</p></div>",
                g = t(a, Y, 11),
                h = g.length,
                l = 0; l < h; l++)
                    m = g[l],
                    e += Hi(b, B(m, 2), bh(S(B(m, 3)) + ' <a class="fc-purpose-feature-more-info" role="button" aria-label="' + W("" + B(b, 5) + ", " + B(m, 2)) + '" tabindex="0" data-name="' + W(B(m, 2)) + '" data-legal-description="' + W(B(m, 4)) + '"' + (c ? "" : ' href="#"') + ">" + S(B(b, 5)) + "</a>"), E(m, 5), B(a, 15), "publisher-purpose", B(m, 1), void 0, E(m, 5));
            a = P(e);
            return f(d + a + '</div><div class="fc-navigation fc-dialog-restricted-content"><button class="fc-navigation-button fc-manage-vendors" role="button" aria-label="' + W(B(b, 8)) + '" tabindex="0"><p class="fc-navigation-button-label">' + S(B(b, 8)) + '</p></button></div></div></div><div class="fc-footer-buttons-container"><div class="fc-footer-buttons-divider"></div><div class="fc-footer-buttons"><button class="fc-button fc-data-preferences-accept-all fc-secondary-button" role="button" aria-label="' + W(B(b, 43)) + '" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">' + S(B(b, 43)) + '</p></button><button class="fc-button fc-confirm-choices fc-primary-button" role="button" aria-label="' + W(B(b, 44)) + '" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">' + S(B(b, 44)) + "</p></button></div></div></div>")
        }
          , Ci = function(a, b, c, d, e) {
            var f = P;
            d = '<div class="fc-dialog fc-vendor-preferences-dialog" role="dialog" aria-label="' + W("" + B(d, 6) + ", " + B(d, 7) + ". " + B(b, 43) + ", " + B(b, 44) + " ") + '" tabindex="0"><div class="fc-dialog-header"><button class="fc-dialog-header-back-button fc-vendor-preferences-back" role="button" aria-label="' + W(B(b, 12)) + '" tabindex="0"><i class="material-icons">arrow_back</i></button><p>' + S(B(b, 9)) + "</p>" + (e ? wi(B(b, 14)) : "") + '</div><div class="fc-dialog-content"><div class="fc-dialog-scrollable-content"><div class="fc-header fc-dialog-restricted-content"><h1>' + S(B(d, 6)) + '</h1></div><div class="fc-body fc-dialog-restricted-content"><p>' + S(B(d, 7)) + '</p></div><div class="fc-preferences-container">';
            e = '<div class="fc-preference-divider"><p>' + S(B(b, 23)) + "</p>" + Gi(B(b, 21), B(b, 22)) + "</div>";
            for (var g = Fh(a), h = g.length, l = 0; l < h; l++) {
                var m = g[l];
                e += Hi(b, B(m, 2), bh('<div class="fc-iab-vendor-storage-info-container">' + (null == B(m, 15) || E(m, 15) ? S(B(b, 32)) + ": " + S(B(m, 12)) + "." : S(B(b, 46)) + ".") + (E(m, 16) ? " " + S(B(b, 45)) + "." : "") + (E(m, 13) ? " " + S(B(b, 33)) + "." : "") + '</div><div class="fc-preference-container-divider"></div><a class="fc-vendor-purposes-features-list" role="button" aria-label="' + W(B(m, 2) + ", " + B(b, 10)) + '" tabindex="0" data-vendor-id="' + W(B(m, 1)) + '"' + (c ? "" : ' href="#"') + ">" + S(B(b, 10)) + "</a>" + (0 < V(t(m, Kh, 14)).length ? ' | <a class="fc-vendor-device-storage-disclosures" role="button" aria-label="' + W(B(b, 34)) + '" tabindex="0" data-vendor-id="' + W(B(m, 1)) + '"' + (c ? "" : ' href="#"') + ">" + S(B(b, 34)) + "</a>" : "") + ' | <a class="fc-vendor-policy-link" role="link" aria-label="' + W(B(m, 2) + ", " + B(b, 11)) + '" tabindex="0" data-policy-link="' + W(B(m, 3)) + '"' + (c ? "" : ' href="#"') + ">" + S(B(b, 11)) + '<i class="material-icons fc-launch-icon" data-policy-link="' + W(B(m, 3)) + '">launch</i></a>'), E(m, 4), B(a, 15), "gvl-vendor", B(m, 1), !1, E(m, 10), E(m, 10))
            }
            if (0 < t(a, Lh, 2).length)
                for (e += '<div class="fc-preference-divider fc-lower-preference-divider"><p>' + S(B(b, 24)) + "</p>" + Gi(B(b, 25), B(b, 26)) + "</div>",
                a = t(a, Lh, 2),
                g = a.length,
                h = 0; h < g; h++)
                    l = a[h],
                    e += Hi(b, B(l, 2), bh('<a class="fc-vendor-policy-link" role="link" aria-label="' + W(B(l, 2) + ", " + B(b, 11)) + '" tabindex="0" data-policy-link="' + W(B(l, 3)) + '"' + (c ? "" : ' href="#"') + ">" + S(B(b, 11)) + '<i class="material-icons fc-launch-icon" data-policy-link="' + W(B(l, 3)) + '">launch</i></a>'), !1, void 0, "atp-vendor", B(l, 1), !1);
            c = P(e);
            return f(d + c + '</div></div></div><div class="fc-footer-buttons-container"><div class="fc-footer-buttons-divider"></div><div class="fc-footer-buttons"><button class="fc-button fc-vendor-preferences-accept-all fc-secondary-button" role="button" aria-label="' + W(B(b, 43)) + '" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">' + S(B(b, 43)) + '</p></button><button class="fc-button fc-confirm-choices fc-primary-button" role="button" aria-label="' + W(B(b, 44)) + '" tabindex="0"><div class="fc-button-background"></div><p class="fc-button-label">' + S(B(b, 44)) + "</p></button></div></div></div>")
        }
          , Di = function(a) {
            return P('<div class="fc-help-dialog-container" role="dialog" tabindex="0"><div class="fc-help-dialog-overlay"></div><div class="fc-help-dialog"><h1></h1><div class="fc-help-dialog-contents"></div><div class="fc-help-dialog-button-container"><button class="fc-help-dialog-close-button" role="button" aria-label="' + W(B(a, 14)) + '" tabindex="0"><p class="fc-help-dialog-close-button-label">' + S(B(a, 14)) + "</p></button></div></div></div>")
        }
          , Hi = function(a, b, c, d, e, f, g, h, l, m, p, v) {
            return P('<div class="fc-preference-container"><div class="fc-preference-title"><h2>' + S(b) + "</h2>" + (null != p && null != v ? Gi(p, v) : "") + '</div><div class="fc-preference-description">' + c + "</div>" + (null == p || null == v ? (l ? "" : '<label class="fc-preference-slider-container fc-consent-preference-container"><span class="fc-preference-slider-label">' + S(B(a, 15)) + '</span><span class="fc-preference-slider"><input type="checkbox" role="button" aria-label="' + W(B(a, 15) + ", " + b) + '" aria-pressed="' + W(h ? "true" : "false") + '" tabindex="0" class="fc-preference-consent' + (f ? " " + W(f) : "") + '" data-id="' + W(g) + '"' + (h ? " checked" : "") + '/><span class="fc-slider-el"></span></span></label>') + (d && !m ? '<label class="fc-preference-slider-container fc-legitimate-interest-preference-container" for="fc-preference-slider-' + W(f) + "-" + W(g) + '"><span class="fc-preference-slider-label">' + S(B(a, 16)) + Gi(B(a, 17), B(a, 18)) + '</span><span class="fc-preference-slider"><input type="checkbox" role="button" aria-label="' + W(B(a, 16) + ", " + b) + '" aria-pressed="true" tabindex="0" class="fc-preference-legitimate-interest' + (f ? " " + W(f) : "") + '" data-id="' + W(g) + '" id="fc-preference-slider-' + W(f) + "-" + W(g) + '"' + ($g(e, 2) ? "" : " checked") + '/><span class="fc-slider-el"></span></span></label>' : "") : "") + "</div>")
        }
          , Gi = function(a, b) {
            return P('<button class="fc-help-tip" data-title="' + W(a) + '" data-full-info="' + W(b) + '" role="tooltip" aria-label="' + W(b) + '" tabindex="0"><i class="material-icons" data-title="' + W(a) + '" data-full-info="' + W(b) + '">help_outline</i></button>')
        }
          , Ii = function(a) {
            var b = a.xa;
            a = "<p>" + S(a.Z) + "</p><ul>";
            for (var c = b.length, d = 0; d < c; d++)
                a += "<li>" + S(b[d]) + "</li>";
            return P(a + "</ul>")
        }
          , Ji = function(a) {
            var b = a.wa;
            a = "<p>" + S(a.Z) + "</p>";
            if (0 < b.length) {
                a += "<ul>";
                for (var c = b.length, d = 0; d < c; d++)
                    a += "<li>" + S(b[d]) + "</li>";
                a += "</ul>"
            }
            return P(a)
        }
          , Ki = function(a) {
            var b = a.ka
              , c = a.va
              , d = a.ma
              , e = a.O;
            a = "";
            if (0 < b.length) {
                a += "<p>" + S(B(e, 15)) + ":</p><ul>";
                for (var f = b.length, g = 0; g < f; g++)
                    a += "<li>" + S(b[g]) + "</li>";
                a += "</ul>"
            }
            if (0 < c.length) {
                a += "<p>" + S(B(e, 16)) + ":</p><ul>";
                b = c.length;
                for (f = 0; f < b; f++)
                    a += "<li>" + S(c[f]) + "</li>";
                a += "</ul>"
            }
            if (0 < d.length) {
                a += "<p>" + S(B(e, 27)) + ":</p><ul>";
                c = d.length;
                for (e = 0; e < c; e++)
                    a += "<li>" + S(d[e]) + "</li>";
                a += "</ul>"
            }
            return P(a)
        }
          , Mi = function(a) {
            return Li(a.na, a.ra, a.O)
        }
          , Li = function(a, b, c) {
            for (var d = "", e = (new Map).set(V(1), B(c, 37)).set(V(2), B(c, 38)).set(V(3), B(c, 39)), f = (new Map).set(V(!0), B(c, 48)).set(V(!1), B(c, 49)), g = a.length, h = 0; h < g; h++) {
                var l = a[h];
                d += '<div class="fc-device-storage-disclosures"><p><b>' + S(B(c, 35)) + "</b>: " + S(B(l, 1)) + "</p><p><b>" + S(B(c, 36)) + "</b>: " + S(e.get(l.getType())) + "</p>" + (1 == l.getType() ? "<p><b>" + S(B(c, 40)) + "</b>: " + S(B(l, 3)) + "</p>" : "") + (1 == l.getType() || 2 == l.getType() ? "<p><b>" + S(B(c, 41)) + "</b>: " + S(B(l, 4)) + "</p>" : "") + "<p><b>" + S(B(c, 42)) + "</b>: ";
                for (var m = D(l, 5), p = m.length, v = {}, A = 0; A < p; v = {
                    S: v.S
                },
                A++)
                    v.S = m[A],
                    d += S(b.filter(function(C) {
                        return function(R) {
                            return B(R, 1) == C.S
                        }
                    }(v)).map(function(C) {
                        return B(C, 2)
                    })[0]) + ". ";
                d += "</p>" + (null != B(l, 6) ? "<p><b>" + S(B(c, 47)) + "</b>: " + S(f.get(E(l, 6))) + "</p>" : "") + "</div>"
            }
            return P(d)
        }
          , Ni = function(a) {
            var b = a.qa
              , c = a.pa;
            return P("<div>" + S(a.content) + "</div>" + (null != b ? '<p><a class="' + W(c) + '" tabindex="0" href="#">' + S(b) + '<i class="material-icons fc-launch-icon">launch</i></a></p>' : ""))
        }
          , Ei = function(a, b, c) {
            var d = "" + B(c, 3) + " ";
            b = t(b, Ph, 7);
            for (var e = b.length, f = 0; f < e; f++)
                d += "" + B(b[f], 1) + ", ";
            d += hh(xi(u(a, Se, 3))) + ". " + hh(B(a, 28)) + ". " + B(a, 1) + ", ";
            a = t(c, kg, 8);
            c = a.length;
            for (b = 0; b < c; b++)
                d += "" + B(a[b], 2) + ", ";
            return d
        }
          , Oi = function(a) {
            return a.title + ", " + a.body
        };
        var Qi = function(a) {
            return Pi(a.ba, a.$, a.Pa, a.Na)
        }
          , Pi = function(a, b, c, d) {
            var e = ""
              , f = hg(a);
            f = null == f ? null : B(f, 1);
            var g = 0 < V(t(a, lg, 12).filter(function(Gb) {
                return 4 == Gb.getType()
            })).length;
            var h = b ? null != c && 480 > c ? ".fc-consent-root .fc-dialog-container {width: 340px;}" : ".fc-consent-root .fc-dialog-container {width: 500px;}" : d ? ".fc-consent-root .fc-dialog-container {height: 100%; width: 100%;}" : ".fc-consent-root .fc-dialog-container {max-width: 512px; width: 90%;}";
            var l = b ? "max-height: 580px;" : d ? "" : "max-height: 80vh;";
            var m = N(a)
              , p = hg(a)
              , v = hg(a)
              , A = hg(a)
              , C = hg(a)
              , R = hg(a)
              , Q = hg(a)
              , Ka = hg(a)
              , bb = hg(a)
              , T = hg(a)
              , H = (g ? pi() : "") + ri() + ".fc-consent-root div, .fc-consent-root h1, .fc-consent-root h2, .fc-consent-root p, .fc-consent-root button, .fc-consent-root ul, .fc-consent-root li {display: block;}" + qi() + ui(b) + "div.fc-consent-root {font-family: 'Open Sans', sans-serif;" + si() + "}.fc-consent-root, .fc-consent-root h1, .fc-consent-root h2, .fc-consent-root p, .fc-consent-root span {";
            var F = U('-moz-font-feature-settings: "kern" 1; -moz-osx-font-smoothing: grayscale; -webkit-font-feature-settings: "kern" 1; -webkit-font-smoothing: antialiased; font-feature-settings: "kern" 1; font-kerning: normal; text-rendering: optimizelegibility;');
            e += H + F + "}" + ti(ah(d) || b) + ".fc-consent-root .fc-dialog-container {display: flex;}" + h + ".fc-consent-root .fc-dialog {" + l + "background-color: #fff;" + (d ? "" : "border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);") + "display: flex; flex-direction: column; width: 100%;}.fc-consent-root .fc-dialog-content {flex: 1 1 auto; overflow-y: auto; overflow-y: overlay; scrollbar-color: transparent transparent;}.fc-consent-root .fc-dialog-content::-webkit-scrollbar {display: none;}.fc-consent-root .fc-dialog-content:hover {scrollbar-color: #dadce0 transparent;}.fc-consent-root .fc-dialog-content:hover::-webkit-scrollbar {display: inherit; width: 12px;}.fc-consent-root .fc-dialog-content::-webkit-scrollbar-thumb {background: #dadce0; background-clip: padding-box; border-radius: 8px; border: 2px solid #fff; min-height: 48px;}.fc-consent-root .fc-dialog-content::-webkit-scrollbar-thumb:hover {background: #80868b;}.fc-consent-root .fc-dialog-content::-webkit-scrollbar-thumb:active {background: #3c4043;}.fc-consent-root .fc-dialog-scrollable-content {display: flex; flex-direction: column; justify-content: center; width: 100%;}.fc-consent-root .fc-dialog-restricted-content {align-self: center; flex: 1 1 auto;" + (d ? "" : "max-width: 416px;") + "width: calc(100% - 48px);}.fc-consent-root .fc-dialog-header {background-color: rgba(255, 255, 255, 0.9); border-radius: 8px 8px 0 0; flex: 0 0 auto; position: relative; width: 100%; z-index: 1;}.fc-consent-root .fc-choice-dialog-header {background-color: rgba(255, 255, 255, 0.9); border-radius: 8px 8px 0 0; flex: 0 0 auto; height: 24px; position: relative; width: 100%; z-index: 1;}.fc-consent-root .fc-dialog-header .fc-dialog-header-back-button {border: 0; left: 0; margin: 7px 0 0 4px; padding: 1px 6px; position: absolute; top: 0;}.fc-consent-root .fc-dialog-header .fc-dialog-header-back-button i {color: #5f6368; font-size: 24px;}.fc-consent-root .fc-dialog-header p {color: #5f6368; font-size: 12px; font-weight: bold; margin: 12px 0; text-align: center;}.fc-consent-root .fc-site-macro-placeholder-image {border: 1px solid #dadce0; border-radius: 4px; box-sizing: border-box; padding: 12px 100px;}.fc-consent-root .fc-ump-sdk-app-icon-placeholder-image {border: 1px solid #dadce0; border-radius: 4px; box-sizing: border-box; padding: 8px;}.fc-consent-root .fc-iris-logo-image {height: 64px; width: 64px;}.fc-consent-root .fc-header-image-container {padding-bottom: 6px; max-width: 100%;" + ni(null == m ? null : u(m, ge, 2)) + "}" + (b ? ".fc-consent-root .fc-header-image-default {background-color: lightgrey; height: 42px; width: 210px;}" : "") + ".fc-consent-root .fc-dialog .fc-header h1 {" + mi(null == p ? null : u(p, ie, 4)) + "}.fc-consent-root .fc-choice-dialog .fc-header h2:focus, .fc-consent-root .fc-data-preferences-dialog .fc-dialog-header p:focus, .fc-consent-root .fc-vendor-preferences-dialog .fc-dialog-header p:focus {outline: none;}" + (b ? null != b && 480 > c ? Ri() : Si() : "@media screen and (max-width: 479px) {" + Ri() + "}@media screen and (min-width: 480px) {" + Si() + "}") + ".fc-consent-root .fc-dialog .fc-header h1, .fc-consent-root .fc-dialog .fc-header h2 {margin: 12px 0;}.fc-consent-root .fc-dialog .fc-header h2 {" + mi(null == v ? null : u(v, ie, 3)) + "font-size: 14px;" + (g ? "margin-top: 0;" : "margin-top: 24px;") + "}.fc-consent-root .fc-dialog .fc-footer p {color: #5f6368; font-size: 12px; line-height: 16px; margin: 12px 0; text-align: left;}.fc-consent-root .fc-dialog .fc-footer a, .fc-consent-root .fc-dialog .fc-footer a:visited {color: #1967d2; cursor: pointer; font: inherit; text-decoration: none;}.fc-consent-root .fc-data-preferences-dialog .fc-body p, .fc-consent-root .fc-data-preferences-dialog .fc-noneditable-body p, .fc-consent-root .fc-vendor-preferences-dialog .fc-body p {" + mi(null == A ? null : u(A, ie, 6)) + "}" + (b ? null != c && 480 > c ? Ti() : Ui() : "@media screen and (max-width: 479px) {" + Ti() + "}@media screen and (min-width: 480px) {" + Ui() + "}") + ".fc-consent-root .fc-footer-buttons-container {align-items: center; border-radius: 0 0 8px 8px; bottom: 0; display: flex; flex: 0 0 auto; flex-direction: column; justify-content: center; left: 0; padding: 0 16px 8px 16px; width: calc(100% - 32px); z-index: 1;}.fc-consent-root .fc-footer-buttons-divider {background-color: #dadce0; height: 1px; margin-bottom: 8px; z-index: 1;}.fc-consent-root .fc-choice-dialog .fc-footer-buttons-divider {" + (d ? "" : "max-width: 416px;") + "width: calc(100% - 48px);}.fc-consent-root .fc-data-preferences-dialog .fc-footer-buttons-divider, .fc-consent-root .fc-vendor-preferences-dialog .fc-footer-buttons-divider {width: calc(100% + 32px);}.fc-consent-root .fc-data-preferences-dialog a, .fc-consent-root .fc-vendor-preferences-dialog a {cursor: pointer;}.fc-consent-root .fc-footer-buttons {display: flex; flex: 1 1 0; justify-content: center;" + (d ? "" : "max-width: 416px;") + "width: 100%; z-index: 1;}.fc-consent-root .fc-button {background: rgba(0,0,0,0); border: 0; cursor: pointer; flex: 1; height: 38px; margin: 8px 0; position: relative;}.fc-consent-root .fc-button .fc-button-background {border-radius: 20px; height: 100%; left: 0; position: absolute; top: 0; width: 100%; z-index: -1;}.fc-consent-root .fc-primary-button .fc-button-background {background-color: " + X(f) + ";}.fc-consent-root .fc-secondary-button .fc-button-background {background-color: " + X(null == C ? null : B(C, 2)) + ";}.fc-consent-root .fc-button:focus .fc-button-label {cursor: pointer; outline: auto;}.fc-consent-root .fc-button-label {" + mi(null == R ? null : u(R, ie, 5)) + "font-size: 14px; letter-spacing: normal; line-height: 20px; margin: 9px 0;}.fc-consent-root .fc-primary-button .fc-button-label {color: " + X(null == Q ? null : B(Q, 7)) + ";}.fc-consent-root .fc-secondary-button .fc-button-label {color: " + X(null == Ka ? null : B(Ka, 8)) + ";}.fc-consent-root .fc-manage-options-third-button-label {color: " + X(f) + "; font-size: 14px; font-weight: 600; letter-spacing: normal; line-height: 20px; margin: 9px 0;}.fc-consent-root .fc-button:hover .fc-button-background {filter: brightness(90%);}" + (b ? null != c && 480 > c ? Vi(a) : Wi(a) : "@media screen and (max-width: 480px) {" + Vi(a) + "}@media screen and (min-width: 481px) {" + Wi(a) + "}") + ".fc-consent-root .fc-stacks {margin-top: 8px;}.fc-consent-root .fc-stacks ul {list-style-type: none;}.fc-consent-root .fc-stacks ul li {align-items: center; display: flex; flex-direction: row; padding-bottom: 16px;}.fc-consent-root .fc-stacks .fc-stack-name {color: #3c4043; font-size: 12px; font-weight: 600; line-height: 16px; margin-top: 5px; width: calc(100% - 44px);}.fc-consent-root .fc-stacks .fc-stack-icon {background-color: " + X(f) + "3D; border-radius: 14px; display: flex; flex-direction: row; height: 28px; justify-content: center; margin-right: 16px; width: 28px;}.fc-consent-root .fc-stacks .fc-stack-icon i {color: " + X(f) + "; font-size: 18px; font-weight: normal; margin-top: 5px;}.fc-consent-root .fc-launch-icon {color: rgb(25, 103, 210); font-size: 16px; left: 4px; position: relative; top: 2px;}.fc-consent-root .fc-faq-header {display: flex; flex-direction: row; text-decoration: none;}.fc-consent-root .fc-faq-header:hover {filter: brightness(100%);}.fc-consent-root .fc-faq-header .fc-faq-label {color: #3c4043; cursor: pointer; font-family: 'Open Sans', sans-serif; font-size: 12px; font-weight: 600; margin-top: 5px;}.fc-consent-root .fc-faq-header .fc-faq-icon {background-color: #fff; border: 1px solid #dadce0; border-radius: 14px; display: flex; flex-direction: row; height: 26px; justify-content: center; margin-right: 16px; width: 26px;}.fc-consent-root .fc-faq-header .fc-faq-icon i {color: #5f6368; font-size: 18px; font-weight: normal; margin-top: 4px;}.fc-consent-root .fc-faq-contents {background-color: #f8f9fa; display: flex; flex-direction: column; justify-content: center; margin-top: 16px;}.fc-consent-root .fc-faq-contents ul {margin: 14px 0; padding: 0;}.fc-consent-root .fc-faq-contents ul li {display: flex; flex-direction: row; list-style-type: none; padding-bottom: 24px;}.fc-consent-root .fc-faq-contents ul li:last-child {padding-bottom: 0;}.fc-consent-root .fc-faq-contents .fc-faq-item-dot {background-color: #5f6368; border-radius: 4px; height: 8px; margin: 7px 10px 0; width: 8px;}.fc-consent-root .fc-faq-contents .fc-faq-item {color: #5f6368; cursor: pointer; display: flex; flex-direction: row; text-decoration: none; width: calc(100% - 44px);}.fc-consent-root .fc-faq-contents .fc-faq-item-title {color: #5f6368; cursor: pointer; font-size: 14px; margin-left: 16px;}.fc-consent-root .fc-data-preferences-dialog .fc-navigation {display: flex; flex-direction: row; justify-content: center; margin: 0 0 24px;}.fc-consent-root .fc-data-preferences-dialog .fc-navigation-button {background-color: #fff; border: 0; cursor: pointer; padding: 10px 0; text-align: center; width: 100%;}.fc-consent-root .fc-navigation-button .fc-navigation-button-label {color: " + X(f) + "; cursor: pointer; font-size: 14px; font-weight: bold; margin: 0; padding: 0; text-align: center;}.fc-consent-root .fc-navigation-button:hover .fc-navigation-button-label {filter: brightness(80%);}.fc-consent-root .fc-navigation-button:focus {outline: auto;}.fc-consent-root .fc-preference-divider {align-items: flex-start; background-color: #f1f3f4; box-sizing: border-box; display: flex; flex-direction: row; margin-bottom: 8px;" + (d ? "" : "max-width: 416px;") + "width: calc(100% - 16px); -moz-box-sizing: border-box; -webkit-box-sizing: border-box;}.fc-consent-root .fc-lower-preference-divider {margin-top: 16px;}.fc-consent-root .fc-preference-divider p {color: #5f6368; font-size: 12px; font-weight: bold; margin-bottom: 8px; margin-right: 0; margin-top: 8px; width: fit-content;}.fc-consent-root .fc-preference-divider .fc-help-tip {margin: 8px 16px 0 8px;}" + (b ? null != c && 480 > c ? Xi() : Yi() : "@media screen and (max-width: 479px) {" + Xi() + "}@media screen and (min-width: 480px) {" + Yi() + "}") + ".fc-consent-root .fc-preferences-container {align-items: center; align-self: center; display: flex; flex: 1 1 auto; flex-direction: column; margin: 0 0 24px; width: 100%;}.fc-consent-root .fc-preference-container {background-color: #fff; border: 1px solid #dadce0; border-radius: 8px; box-sizing: border-box; margin: 0 0 8px;" + (d ? "" : "max-width: 416px;") + "width: calc(100% - 16px); -moz-box-sizing: border-box; -webkit-box-sizing: border-box;}.fc-consent-root .fc-preference-container .fc-preference-title {display: flex; flex-direction: row; justify-content: space-between;}.fc-consent-root .fc-preference-container .fc-preference-title h2 {" + mi(null == bb ? null : u(bb, ie, 4), !0) + "color: #3c4043; font-size: 14px; line-height: 20px; margin: 0 0 8px; padding: 0; text-align: left;}.fc-consent-root .fc-preference-container .fc-preference-title .fc-help-tip {margin-left: 4px; position: relative; top: -4px;}.fc-consent-root .fc-preference-container .fc-preference-description {" + mi(null == T ? null : u(T, ie, 6)) + "line-height: 20px; margin: 0; padding: 0;}.fc-consent-root .fc-preference-container .fc-preference-description a, .fc-consent-root .fc-preference-container .fc-preference-description a:visited {color: #1967d2; font: inherit; text-decoration: none;}.fc-consent-root .fc-preference-container .fc-preference-slider-container {display: flex; flex-direction: row; justify-content: space-between;}.fc-consent-root .fc-preference-container .fc-preference-slider-label {align-items: center; color: #5f6368; display: flex; font-weight: bold; flex-direction: row;}.fc-consent-root .fc-preference-container .fc-iab-vendor-storage-info-container {color: inherit; display: block; font: inherit; text-decoration: none;}.fc-consent-root .fc-preference-container .fc-preference-container-divider {background-color: #dadce0; height: 1px; margin-bottom: 16px; margin-top: 12px;}.fc-consent-root .fc-preference-container .fc-consent-preference-container {margin: 16px 0 0;}.fc-consent-root .fc-preference-container .fc-legitimate-interest-preference-container {margin: 24px 0 0;}.fc-consent-root .fc-legitimate-interest-preference-container .fc-help-tip {margin-left: 4px;}" + (b ? null != c && 480 > c ? Zi() : $i() : "@media screen and (max-width: 479px) {" + Zi() + "}@media screen and (min-width: 480px) {" + $i() + "}") + '.fc-consent-root .fc-preference-container .fc-preference-slider {display: inline-block; height: 20px; position: relative; width: 39px;}.fc-consent-root .fc-preference-container .fc-preference-slider input {height: 0; opacity: 0; width: 0;}.fc-consent-root .fc-preference-container .fc-preference-slider .fc-slider-el {background-color: #80868b; border-radius: 20px; cursor: pointer; position: absolute; bottom: 0; left: 0; top: 0; right: 0; transition: .4s; -webkit-transition: .4s;}.fc-consent-root .fc-preference-container .fc-preference-slider .fc-slider-el:before {background-color: #fff; border-radius: 50%; bottom: 1px; content: ""; height: 18px; left: 1px; position: absolute; width: 18px; transition: .4s; -webkit-transition: .4s;}.fc-consent-root .fc-preference-container .fc-preference-slider input:checked + .fc-slider-el {background-color: ' + X(f) + ";}.fc-consent-root .fc-preference-container .fc-preference-slider input:focus + .fc-slider-el {box-shadow: 0 -2px 8px rgba(128, 134, 139, 0.09), 0 4px 8px rgba(128, 134, 139, 0.06), 0 1px 2px rgba(60, 64, 67, 0.3), 0 2px 6px rgba(60, 64, 67, 0.15);}.fc-consent-root .fc-preference-container .fc-preference-slider input:checked + .fc-slider-el:before {transform: translateX(19px); -ms-transform: translateX(19px); -webkit-transform: translateX(19px);}.fc-consent-root a:hover {filter: brightness(80%);}.fc-consent-root .fc-help-tip {background: rgba(255, 255, 255, 0); border: 0; cursor: pointer; outline: none;}.fc-consent-root .fc-help-tip:focus i {cursor: pointer; outline: auto;}.fc-consent-root .fc-help-tip i {color: #5f6368; cursor: pointer; font-size: 16px;}.fc-consent-root .fc-help-dialog-container {align-items: center; display: flex; justify-content: center; float: top; height: 100%; left: 0; overflow-x: auto; position: absolute; top: 0; width: 100%; z-index: 1;}@media screen and (max-width: 479px) {.fc-consent-root .fc-help-dialog {max-height: calc(80vh - 32px); margin: 32px;}}.fc-consent-root .fc-help-dialog {background-color: #fff; border-radius: 8px; display: flex; flex-direction: column; justify-content: center;" + (d ? "" : "max-width: 416px;") + "position: relative; width: 90%;}.fc-consent-root .fc-help-dialog h1 {color: #000; font-size: 14px; font-weight: bold; line-height: 20px; margin: 24px 24px 0; min-height: max-content;}.fc-consent-root .fc-help-dialog h1:focus {outline: none;}.fc-consent-root .fc-help-dialog .fc-help-dialog-contents {margin: 8px 24px; overflow: -moz-scrollbars-none; overflow-y: auto; padding-bottom: 62px;}.fc-consent-root .fc-help-dialog .fc-help-dialog-contents div, .fc-consent-root .fc-help-dialog .fc-help-dialog-contents li, .fc-consent-root .fc-help-dialog .fc-help-dialog-contents p {color: #5f6368; font-size: 14px; line-height: 20px; margin-bottom: 8px;}.fc-consent-root .fc-help-dialog .fc-help-dialog-contents .fc-device-storage-disclosures p {margin-bottom: 0;}.fc-consent-root .fc-help-dialog .fc-help-dialog-contents a {color: #1967d2; cursor: pointer; font-size: 14px; line-height: 20px; margin-bottom: 8px;}.fc-consent-root .fc-help-dialog .fc-help-dialog-contents li {display: list-item; list-style-position: inside; list-style-type: disc;}.fc-consent-root .fc-help-dialog .fc-help-dialog-contents::-webkit-scrollbar {display: none;}.fc-consent-root .fc-help-dialog .fc-help-dialog-button-container {background-color: rgba(255, 255, 255, 0.9); bottom: 0; border-radius: 0 0 8px 8px; display: flex; flex: 1 1 auto; justify-content: center; left: 0; position: absolute; width: 100%;}.fc-consent-root .fc-help-dialog .fc-help-dialog-close-button {background-color: rgba(255, 255, 255, 0); border: 0; border-radius: 20px; cursor: pointer; flex: 1 1 auto; margin: 8px 12px; opacity: 1; outline: none;}.fc-consent-root .fc-help-dialog-close-button .fc-help-dialog-close-button-label {color: " + X(f) + "; font-size: 14px; font-style: normal; font-weight: bold; line-height: 20px; padding: 6px 0; text-align: center;}.fc-consent-root .fc-help-dialog-close-button:focus .fc-help-dialog-close-button-label {cursor: pointer; outline: auto;}.fc-consent-root i.material-icons {font-family: 'Material Icons';}";
            return U(e)
        }
          , Ri = function() {
            return U(".fc-consent-root .fc-dialog .fc-header h1 {font-size: 16px;}.fc-consent-root .fc-choice-dialog .fc-header-image {max-height: 40px;}")
        }
          , Si = function() {
            return U(".fc-consent-root .fc-dialog .fc-header h1 {font-size: 18px;}")
        }
          , Vi = function(a) {
            a = t(a, lg, 12).filter(function(b) {
                return 4 != b.getType()
            });
            a = 2 == V(a).length ? "height: 130px;" : 3 == V(a).length ? "height: 172px;" : "";
            return U(".fc-consent-root .fc-footer-buttons {align-items: stretch; flex: 1 1 auto; flex-direction: column;}.fc-consent-root .fc-choice-dialog .fc-footer-buttons-container {" + (a + "}.fc-consent-root .fc-footer-buttons-container {height: 130px;}.fc-consent-root .fc-button {flex: 1 1 auto; flex-shrink: 0; height: auto;}.fc-consent-root .fc-primary-button {order: 1;}.fc-consent-root .fc-secondary-button {order: 2;}"))
        }
          , Wi = function(a) {
            a = t(a, lg, 12).filter(function(b) {
                return 4 != b.getType()
            });
            a = 2 == V(a).length ? "height: 76px;" : 3 == V(a).length ? "height: 110px;" : "";
            return U(".fc-consent-root .fc-footer-buttons {align-items: center; flex-direction: row;}.fc-consent-root .fc-primary-button {margin-left: 12px; order: 2;}.fc-consent-root .fc-choice-dialog .fc-footer-buttons-container {" + (a + "}.fc-consent-root .fc-footer-buttons-container {height: 76px;}.fc-consent-root .fc-secondary-button {margin-right: 12px; order: 1;}"))
        }
          , Zi = function() {
            return U(".fc-consent-root .fc-preference-container {padding: 16px;}.fc-consent-root .fc-preference-container .fc-preference-description {font-size: 12px; line-height: 16px;}.fc-consent-root .fc-preference-container .fc-preference-slider-label {font-size: 12px; line-height: 16px;}.fc-consent-root .fc-preference-container .fc-preference-container-divider {margin-left: -16px; width: calc(100% + 32px);}")
        }
          , $i = function() {
            return U(".fc-consent-root .fc-preference-container {padding: 24px;}.fc-consent-root .fc-preference-container .fc-preference-description {font-size: 14px;}.fc-consent-root .fc-preference-container .fc-preference-slider-label {font-size: 14px; line-height: 20px;}.fc-consent-root .fc-preference-container .fc-preference-container-divider {margin-left: -24px; width: calc(100% + 48px);}")
        }
          , Xi = function() {
            return U(".fc-consent-root .fc-preference-divider p {margin-left: 16px;}")
        }
          , Yi = function() {
            return U(".fc-consent-root .fc-preference-divider p {margin-left: 24px;}")
        }
          , Ti = function() {
            return U(".fc-consent-root .fc-data-preferences-dialog .fc-body p, .fc-consent-root .fc-data-preferences-dialog .fc-noneditable-body p, .fc-consent-root .fc-vendor-preferences-dialog .fc-body p {font-size: 14px; line-height: 20px; margin-bottom: 24px;}")
        }
          , Ui = function() {
            return U(".fc-consent-root .fc-data-preferences-dialog .fc-body p, .fc-consent-root .fc-data-preferences-dialog .fc-noneditable-body p, .fc-consent-root .fc-vendor-preferences-dialog .fc-body p {font-size: 16px; line-height: 24px; margin-bottom: 24px;}")
        };
        var bj = function(a) {
            J.call(this, a, -1, aj)
        };
        z(bj, J);
        var aj = [2];
        var dj = function(a) {
            J.call(this, a, -1, cj)
        };
        z(dj, J);
        var ej = function(a) {
            J.call(this, a)
        };
        z(ej, J);
        var fj = function(a) {
            J.call(this, a)
        };
        z(fj, J);
        var gj = function(a) {
            J.call(this, a)
        };
        z(gj, J);
        var cj = [14];
        var hj = function() {
            this.g = new dj
        }
          , ij = function(a) {
            if (null == B(a.g, 3)) {
                a = a.g;
                var b = new fj;
                I(a, 3, b)
            }
        }
          , jj = function(a) {
            if (null == B(a.g, 4)) {
                a = a.g;
                var b = new gj;
                I(a, 4, b)
            }
        };
        /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
        var kj = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        var lj = function(a, b, c, d, e) {
            this.g = a;
            this.h = b;
            this.j = c;
            this.i = d;
            this.l = e
        };
        var mj = function(a) {
            this.i = a;
            this.l = this.m = this.A = this.v = this.h = this.o = this.s = this.g = this.j = null
        };
        var oj = function(a) {
            return new Promise(function(b, c) {
                var d = (k.googlefc || (k.googlefc = {})).controlledMessagingFunction;
                if (null == d)
                    c(!1);
                else {
                    var e = new te;
                    if ("function" !== typeof d)
                        q(e, 1, !1),
                        nj(e, a),
                        c(!1);
                    else {
                        q(e, 1, !0);
                        var f = {
                            proceed: function(h) {
                                var l = new te;
                                l = q(l, 1, !0);
                                var m = new ve
                                  , p = !0;
                                void 0 === h ? q(m, 1, 1) : "boolean" !== typeof h ? q(m, 1, 2) : (q(m, 1, h ? 3 : 4),
                                p = h);
                                Sc(l, 3, we, m);
                                nj(l, a);
                                b(p)
                            }
                        }
                          , g = new ue;
                        try {
                            d(f)
                        } catch (h) {
                            q(g, 1, !0);
                            Sc(e, 2, we, g);
                            nj(e, a);
                            c(!1);
                            return
                        }
                        q(g, 1, !1);
                        Sc(e, 2, we, g);
                        nj(e, a)
                    }
                }
            }
            )
        }
          , nj = function(a, b) {
            var c = new se;
            c = I(c, 2, a);
            a = b.reportClientEvent;
            var d = new xe;
            c = Sc(d, 8, ye, c);
            a.call(b, c)
        };
        var pj = function(a) {
            J.call(this, a)
        };
        z(pj, J);
        var rj = function(a) {
            J.call(this, a, -1, qj)
        };
        z(rj, J);
        var qj = [1];
        var sj = function(a) {
            J.call(this, a)
        };
        z(sj, J);
        var tj = function(a) {
            this.g = a
        };
        var uj = function(a) {
            return t(a, Y, 3).map(function(b) {
                return B(b, 1)
            })
        }
          , vj = function(a) {
            return t(a, Y, 3).filter(function(b) {
                return E(b, 5)
            }).map(function(b) {
                return B(b, 1)
            })
        }
          , wj = function(a) {
            return Fh(a).map(function(b) {
                return B(b, 1)
            })
        }
          , xj = function(a) {
            return Fh(a).filter(function(b) {
                return E(b, 4)
            }).map(function(b) {
                return B(b, 1)
            })
        }
          , yj = function(a) {
            return t(a, Lh, 2).map(function(b) {
                return B(b, 1)
            })
        };
        var zj = function(a) {
            this.g = a
        }
          , Bj = function(a) {
            var b = new oe;
            var c = new pe;
            var d = new re;
            c = I(c, 2, d);
            b = I(b, 1, c);
            Aj(a, b)
        }
          , Aj = function(a, b) {
            var c = new xe;
            b = Sc(c, 15, ye, b);
            a.g.reportClientEvent(b)
        };
        var Cj = function(a) {
            J.call(this, a)
        };
        z(Cj, J);
        var Dj = function(a) {
            J.call(this, a)
        };
        z(Dj, J);
        var Ej = function(a) {
            this.h = u(a, Dh, 1);
            this.j = 2 == B(this.h, 15);
            this.K = id(new Date);
            this.J = t(this.h, Oh, 6).map(function(b) {
                return B(b, 1)
            });
            this.G = t(this.h, Y, 3).map(function(b) {
                return B(b, 1)
            });
            this.F = Fh(this.h).map(function(b) {
                return B(b, 1)
            });
            this.m = t(this.h, Lh, 2).map(function(b) {
                return B(b, 1)
            });
            this.o = t(this.h, Y, 3).filter(function(b) {
                return !0 === E(b, 5)
            }).map(function(b) {
                return B(b, 1)
            });
            this.s = Fh(this.h).filter(function(b) {
                return !0 === E(b, 4)
            }).map(function(b) {
                return B(b, 1)
            });
            this.A = t(this.h, Y, 11).filter(function(b) {
                return !1 === E(b, 5)
            }).map(function(b) {
                return B(b, 1)
            });
            this.l = t(this.h, Y, 11).filter(function(b) {
                return !0 === E(b, 5)
            }).map(function(b) {
                return B(b, 1)
            });
            this.B = 0 !== this.A.length || 0 !== this.l.length;
            this.g = Dd(zd(vd(ud(Cd(Bd(yd(xd(wd(Ad(td(sd(rd(pd(od(nd(md(ld(new kd, B(u(this.h, Gh, 8), 1)), this.K), this.K), 300), 1), G(a, 4, "")), B(u(this.h, Gh, 8), 2)), B(u(this.h, Gh, 8), 3)), G(a, 5, "")), []), []), this.j ? [] : this.o), []), this.j ? [] : this.s), !0), !1), !1), []);
            this.i = ed(dd(new cd, []), this.j ? [] : this.l);
            this.v = []
        }
          , Fj = function(a, b) {
            b = Gd(Cd(Bd(yd(xd(wd(qd(Wc(a.g), b), a.J), a.G), a.o), a.F), a.s));
            a.B && (a = ed(dd(Wc(a.i), a.A), a.l),
            I(b, 2, a));
            return b
        }
          , Gj = function(a, b) {
            b = Gd(Cd(Bd(yd(xd(wd(qd(Wc(a.g), b), []), []), a.j ? [] : a.o), []), a.j ? [] : a.s));
            a.B && (a = ed(dd(Wc(a.i), []), a.j ? [] : a.l),
            I(b, 2, a));
            return b
        }
          , Hj = function(a, b) {
            b = Gd(qd(Wc(a.g), b));
            a.B && (a = Wc(a.i),
            I(b, 2, a));
            return b
        }
          , Jj = function(a, b, c) {
            if (-1 !== a.A.indexOf(b)) {
                var d = Ij(D(a.i, 1), b, c);
                dd(a.i, d)
            }
            -1 !== a.l.indexOf(b) && (b = Ij(D(a.i, 2), b, c),
            ed(a.i, b))
        }
          , Ij = function(a, b, c) {
            return c ? -1 === a.indexOf(b) ? (a = a.slice(),
            a.push(b),
            a) : a.slice() : a.filter(function(d) {
                return d !== b
            })
        };
        var Kj = new Map([[".fc-consent-root .fc-choice-dialog", 1], [".fc-consent-root .fc-data-preferences-dialog", 2], [".fc-consent-root .fc-vendor-preferences-dialog", 3]])
          , Mj = function(a, b, c, d) {
            this.i = c;
            this.v = d.document;
            this.j = u(a, Dh, 1);
            this.l = u(a, Rh, 3);
            this.g = b;
            this.h = null != this.g ? new Th(d) : null;
            this.m = ".fc-consent-root .fc-choice-dialog";
            this.s = this.i.querySelector(".fc-consent-root .fc-help-dialog-container");
            this.B = this.i.querySelector(".fc-consent-root .fc-help-dialog h1");
            this.A = this.i.querySelector(".fc-consent-root .fc-help-dialog-contents");
            this.o = null;
            Lj(this, this.m)
        }
          , Vj = function(a, b, c, d) {
            Z(a, ".fc-consent-root .fc-cta-consent", function() {
                a.h && Uh(a.h);
                a.g ? b(Fj(a.g, 1), a.g.m.slice(), 2) : b(null, null, 2)
            });
            Z(a, ".fc-close", function() {
                a.h && Uh(a.h);
                a.g ? b(Gj(a.g, Kj.has(a.m) ? Kj.get(a.m) : 1), [], 7) : b(null, null, 7)
            });
            Z(a, ".fc-consent-root .fc-cta-do-not-consent", function() {
                a.h && Uh(a.h);
                a.g ? b(Gj(a.g, 1), [], 3) : b(null, null, 3)
            });
            Z(a, ".fc-consent-root .fc-data-preferences-accept-all", function() {
                a.h && Uh(a.h);
                a.g && b(Fj(a.g, 2), a.g.m.slice(), 4)
            });
            Z(a, ".fc-consent-root .fc-vendor-preferences-accept-all", function() {
                a.h && Uh(a.h);
                a.g && b(Fj(a.g, 3), a.g.m.slice(), 4)
            });
            Z(a, ".fc-consent-root .fc-data-preferences-dialog .fc-confirm-choices", function() {
                a.h && Uh(a.h);
                a.g ? b(Hj(a.g, 2), a.g.v.slice(), 5) : b(null, null, 5)
            });
            Z(a, ".fc-consent-root .fc-vendor-preferences-dialog .fc-confirm-choices", function() {
                a.h && Uh(a.h);
                a.g ? b(Hj(a.g, 3), a.g.v.slice(), 6) : b(null, null, 6)
            });
            Z(a, ".fc-consent-root .fc-cta-manage-options", function() {
                Lj(a, ".fc-consent-root .fc-data-preferences-dialog")
            });
            Z(a, ".fc-consent-root .fc-manage-vendors", function() {
                Lj(a, ".fc-consent-root .fc-vendor-preferences-dialog")
            });
            Z(a, ".fc-consent-root .fc-data-preferences-back", function() {
                Lj(a, ".fc-consent-root .fc-choice-dialog")
            });
            Z(a, ".fc-consent-root .fc-vendor-preferences-back", function() {
                Lj(a, ".fc-consent-root .fc-data-preferences-dialog")
            });
            Z(a, ".fc-consent-root .fc-preference-consent.purpose", function(e) {
                Nj(e, function(f, g) {
                    if (a.g) {
                        var h = a.g;
                        -1 !== h.G.indexOf(f) && (f = Ij(D(h.g, 13), f, g),
                        xd(h.g, f))
                    }
                })
            });
            Z(a, ".fc-consent-root .fc-preference-consent.special-feature", function(e) {
                Nj(e, function(f, g) {
                    if (a.g) {
                        var h = a.g;
                        -1 !== h.J.indexOf(f) && (f = Ij(D(h.g, 12), f, g),
                        wd(h.g, f))
                    }
                })
            });
            Z(a, ".fc-consent-root .fc-preference-consent.gvl-vendor", function(e) {
                Nj(e, function(f, g) {
                    if (a.g) {
                        var h = a.g;
                        -1 !== h.F.indexOf(f) && (f = Ij(D(h.g, 17), f, g),
                        Bd(h.g, f))
                    }
                })
            });
            Z(a, ".fc-consent-root .fc-preference-consent.atp-vendor", function(e) {
                Nj(e, function(f, g) {
                    if (a.g) {
                        var h = a.g;
                        -1 !== h.m.indexOf(f) && (h.v = Ij(h.v, f, g))
                    }
                })
            });
            Z(a, ".fc-consent-root .fc-preference-legitimate-interest.purpose", function(e) {
                Nj(e, function(f, g) {
                    if (a.g) {
                        var h = a.g;
                        -1 !== h.o.indexOf(f) && (f = Ij(D(h.g, 14), f, g),
                        yd(h.g, f))
                    }
                })
            });
            Z(a, ".fc-consent-root .fc-preference-legitimate-interest.gvl-vendor", function(e) {
                Nj(e, function(f, g) {
                    if (a.g) {
                        var h = a.g;
                        -1 !== h.s.indexOf(f) && (f = Ij(D(h.g, 18), f, g),
                        Cd(h.g, f))
                    }
                })
            });
            Z(a, ".fc-consent-root .fc-preference-consent.publisher-purpose", function(e) {
                Nj(e, function(f, g) {
                    a.g && Jj(a.g, f, g)
                })
            });
            Z(a, ".fc-consent-root .fc-preference-legitimate-interest.publisher-purpose", function(e) {
                Nj(e, function(f, g) {
                    a.g && Jj(a.g, f, g)
                })
            });
            Z(a, ".fc-consent-root .fc-faq-header", function() {
                Oj(a, "none" == a.i.querySelector(".fc-consent-root .fc-faq-contents").style.display);
                d()
            });
            Z(a, ".fc-consent-root .fc-vendor-policy-link", function(e) {
                e.preventDefault();
                c(e.target.attributes["data-policy-link"].value)
            });
            Z(a, ".fc-consent-root .fc-vendors-list-dialog", function(e) {
                e.preventDefault();
                Pj(a)
            });
            Z(a, ".fc-consent-root .fc-purpose-feature-more-info", function(e) {
                e.preventDefault();
                Qj(a, e.target)
            });
            Z(a, ".fc-consent-root .fc-vendor-purposes-features-list", function(e) {
                e.preventDefault();
                Rj(a, e.target)
            });
            Z(a, ".fc-consent-root .fc-vendor-device-storage-disclosures", function(e) {
                e.preventDefault();
                e = parseInt(e.target.attributes["data-vendor-id"].value, 10);
                for (var f = y(Fh(a.j)), g = f.next(); !g.done; g = f.next())
                    if (g = g.value,
                    B(g, 1) === e) {
                        e = xb(Mi, {
                            na: t(g, Kh, 14),
                            ra: t(a.j, Y, 12),
                            O: a.l
                        });
                        Sj(a, B(g, 2) + " - " + B(a.l, 34), e);
                        break
                    }
            });
            Z(a, ".fc-consent-root .fc-faq-contents .fc-faq-item", function(e) {
                e.preventDefault();
                for (e = e.target; !e.classList.contains("fc-faq-item"); )
                    e = e.parentElement;
                e = parseInt(e.attributes["data-faq-item-index"].value, 10);
                e = t(a.l, Sh, 2)[e];
                var f = B(e, 1);
                var g = u(e, Se, 2);
                g = ub(B(g, 2) || "", null);
                null != B(e, 3) ? (Sj(a, f, xb(Ni, {
                    content: g,
                    qa: B(e, 3),
                    pa: B(e, 4)
                })),
                Tj(a, c)) : Sj(a, f, xb(Ni, {
                    content: g
                }))
            });
            Z(a, ".fc-consent-root .fc-help-tip", function(e) {
                e = e.target;
                Sj(a, e.attributes["data-title"].value, xb(Ni, {
                    content: e.attributes["data-full-info"].value
                }))
            });
            Z(a, ".fc-consent-root .fc-help-dialog .fc-help-dialog-close-button", function() {
                return Uj(a)
            })
        }
          , Tj = function(a, b) {
            Z(a, ".fc-consent-root .fc-publisher-policy-link", function(c) {
                c.preventDefault();
                b(B(a.j, 9))
            });
            Z(a, ".fc-consent-root .fc-legitimate-interest-learn-more", function(c) {
                c.preventDefault();
                b(B(a.j, 10))
            })
        }
          , Lj = function(a, b) {
            hi(".fc-consent-root .fc-dialog", a.i);
            hi(".fc-consent-root .fc-help-dialog-container", a.i);
            Oj(a, !1);
            ei(a.i.querySelector(b));
            a.h && Yh(a.h, a.i.querySelector(b));
            a.m = b
        }
          , Nj = function(a, b) {
            a = a.target;
            b(parseInt(a.attributes["data-id"].value, 10), a.checked)
        }
          , Oj = function(a, b) {
            b ? (ei(a.i.querySelector(".fc-consent-root .fc-faq-contents")),
            ei(a.i.querySelector(".fc-consent-root .fc-faq-icon .faq-section-open")),
            hi(".fc-consent-root .fc-faq-icon .faq-section-closed", a.i),
            a.i.querySelector(".fc-consent-root .fc-faq-contents").scrollIntoView(!0)) : (hi(".fc-consent-root .fc-faq-contents", a.i),
            hi(".fc-consent-root .fc-faq-icon .faq-section-open", a.i),
            ei(a.i.querySelector(".fc-consent-root .fc-faq-icon .faq-section-closed")))
        }
          , Pj = function(a) {
            var b = B(a.l, 19)
              , c = B(a.l, 20)
              , d = Fh(a.j).map(function(f) {
                return B(f, 2)
            })
              , e = t(a.j, Lh, 2).map(function(f) {
                return B(f, 2)
            });
            c = xb(Ii, {
                Z: c,
                xa: d.concat(e)
            });
            Sj(a, b, c)
        }
          , Qj = function(a, b) {
            var c = b.attributes["data-name"].value;
            b = b.attributes["data-legal-description"].value.split("*").map(function(d) {
                return d.trim()
            });
            b = xb(Ji, {
                Z: b[0],
                wa: b.slice(1, b.length)
            });
            Sj(a, c, b)
        }
          , Rj = function(a, b) {
            var c = parseInt(b.attributes["data-vendor-id"].value, 10)
              , d = y(Fh(a.j));
            for (b = d.next(); !b.done; b = d.next())
                if (b = b.value,
                B(b, 1) === c) {
                    c = t(b, Ih, 9).filter(function(f) {
                        return 1 === B(f, 1)
                    }).map(function(f) {
                        return B(f, 2)
                    });
                    d = t(b, Ih, 9).filter(function(f) {
                        return 2 == B(f, 1)
                    }).map(function(f) {
                        return B(f, 2)
                    }).concat(D(b, 6));
                    var e = D(b, 7).concat(D(b, 8));
                    c = xb(Ki, {
                        ka: c,
                        va: d,
                        ma: e,
                        O: a.l
                    });
                    Sj(a, B(b, 2) + " requests the following:", c);
                    break
                }
        }
          , Sj = function(a, b, c) {
            a.o = a.v.activeElement;
            jb(a.B, rg(b));
            a.A.appendChild(c);
            b = Oi({
                title: b,
                body: c.textContent
            });
            a.s.setAttribute("aria-label", b);
            ei(a.i.querySelector(".fc-consent-root .fc-help-dialog-container"));
            hi(".fc-consent-root .fc-dialog-overlay", a.i);
            a.h && Yh(a.h, a.s);
            b = a.i.querySelector(".fc-consent-root .fc-help-dialog h1");
            b.focus();
            a.v.activeElement !== b && a.i.querySelector(".fc-consent-root .fc-help-dialog .fc-help-dialog-close-button").focus();
            a.h && Xh(a.h, function() {
                return Uj(a)
            })
        }
          , Uj = function(a) {
            if ("none" != a.s.style.display) {
                if (a.h) {
                    var b = a.h;
                    b.i && (b.h.removeEventListener("keydown", b.i),
                    b.i = null)
                }
                ei(a.i.querySelector(".fc-consent-root .fc-dialog-overlay"));
                hi(".fc-consent-root .fc-help-dialog-container", a.i);
                jb(a.B, rg(""));
                jb(a.A, rg(""));
                a.h && Wh(a.h, a.i.querySelector(a.m));
                a.o && (a.o.focus(),
                a.o = null)
            }
        }
          , Z = function(a, b, c) {
            a = y(a.i.querySelectorAll(b));
            for (b = a.next(); !b.done; b = a.next())
                b.value.addEventListener("click", c)
        };
        var Wj = function() {
            this.g = rb()
        }
          , Xj = function(a, b, c) {
            return xb(b, c, {}, a.g)
        }
          , Yj = function(a, b) {
            a = a(b || {}, {});
            return new Ne(a.toString(),Me)
        };
        var Zj = function(a, b, c, d, e, f) {
            this.g = a;
            this.i = u(b, Cj, 10);
            this.A = new ai(this.g);
            this.s = new ci(this.g);
            this.F = new Wj;
            this.j = this.h = null;
            this.l = d;
            this.m = c;
            this.v = e;
            this.o = f
        }
          , ak = function(a, b, c, d, e, f) {
            return new Zj(a,b,c,d,e,f)
        }
          , ck = function(a) {
            a.h = Xj(a.F, zi, {
                la: u(a.i, Dh, 1),
                ba: u(a.i, fg, 2),
                O: u(a.i, Rh, 3),
                $: !1
            });
            bi(a.A);
            var b = gi(Yj(Qi, {
                ba: u(a.i, fg, 2),
                $: !1
            }), a.g.document);
            ii(b);
            k.setTimeout(function() {
                if (a.g.document.body)
                    bk(a);
                else {
                    var c = new a.g.MutationObserver(function() {
                        a.g.document.body && (bk(a),
                        c.disconnect())
                    }
                    );
                    c.observe(a.g.document, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    })
                }
            }, 10)
        }
          , bk = function(a) {
            a.j = a.g.document.activeElement;
            a.g.document.body.appendChild(a.h);
            di(a.s);
            Vj(a.B(a.i, a.v, a.h, a.g), function(b, c, d) {
                a.o && b && c && a.o(b, c, d);
                a.h && (a.g.document.body.removeChild(a.h),
                a.h = null,
                b = a.s,
                b.g.g.body.style.overflow = b.h,
                null !== a.j && a.j.focus())
            }, function(b) {
                b instanceof M || b instanceof M || (b = "object" == typeof b && b.M ? b.L() : String(b),
                Je.test(b) || (b = "about:invalid#zClosurez"),
                b = new M(b,He));
                return k.open(Ie(b), "")
            }, function() {
                var b = a.m;
                var c = new oe;
                var d = ke(1);
                c = I(c, 4, d);
                Aj(b, c)
            });
            a.l && (a.l.setCmpUiShown(),
            Bj(a.m))
        };
        Zj.prototype.B = function() {
            return new (Function.prototype.bind.apply(Mj, [null].concat(Db(Ub.apply(0, arguments)))))
        }
        ;
        var dk = function() {
            var a = this;
            this.promise = new Promise(function(b, c) {
                a.resolve = b;
                a.reject = c
            }
            )
        };
        var fk = function(a, b, c, d, e, f, g) {
            var h = null
              , l = this;
            h = void 0 === h ? null : h;
            this.g = a;
            this.m = b;
            this.l = u(this.m, Cj, 10);
            this.h = c;
            this.i = this.g.__tcfapiManager;
            this.F = d;
            this.j = e;
            this.B = new tj(this.g);
            this.G = f;
            this.A = g;
            this.v = ak(this.g, this.m, this.j, this.i, this.A, function(m, p, v) {
                var A = l.i.setUserActionComplete(Uc(m), p)
                  , C = ce(m)
                  , R = "1~" + p.join(".");
                var Q = Array(36);
                for (var Ka = 0, bb, T = 0; 36 > T; T++)
                    8 == T || 13 == T || 18 == T || 23 == T ? Q[T] = "-" : 14 == T ? Q[T] = "4" : (2 >= Ka && (Ka = 33554432 + 16777216 * Math.random() | 0),
                    bb = Ka & 15,
                    Ka >>= 4,
                    Q[T] = kj[19 == T ? bb & 3 | 8 : bb]);
                Q = Q.join("");
                m = null == C || null == R ? null : new lj(m,C,p,R,Q);
                if (A && m) {
                    A = l.G;
                    R = m.h;
                    C = m.i;
                    p = m.l;
                    if (Q = Ua(A.context, "FCCDCF"))
                        try {
                            var H = Va(Wa, Q)
                        } catch (kk) {
                            H = new Wa
                        }
                    else
                        H = new Wa;
                    Q = new Sa;
                    R = q(Q, 1, R);
                    C = q(R, 2, C);
                    p = q(C, 3, p);
                    I(H, 4, p);
                    I(H, 5, void 0);
                    var F = void 0 === F ? 33696E3 : F;
                    p = A.context.location.hostname.split(".");
                    for (cg(A.context, ""); 2 <= p.length; )
                        cg(A.context, p.join(".")),
                        p.shift();
                    null != B(H, 3) && I(H, 3, void 0);
                    Vc(new Wa, H) ? cg(A.context, A.g) : (H = Uc(H),
                    (new Xa(A.context)).set("FCCDCF", H, {
                        ga: F,
                        path: "/",
                        domain: A.g
                    }),
                    F = Ua(A.context, "FCCDCF"),
                    p = H.length,
                    C = new ne,
                    C = q(C, 3, A.context.location.hostname),
                    p = q(C, 2, p),
                    p = q(p, 5, 1),
                    F ? F !== H ? (H = 4,
                    q(p, 6, F.length)) : H = 1 : H = 3,
                    q(p, 1, H),
                    A.g && q(p, 4, A.g),
                    F = new me,
                    F = I(F, 1, p),
                    H = new xe,
                    F = Sc(H, 21, ye, F),
                    A.h.reportClientEvent(F));
                    A = l.j;
                    var Gb;
                    F = u(l.l, Dh, 1);
                    ia(D(Fd(m.g), 13), []) && ia(D(Fd(m.g), 14), vj(F)) && ia(D(Fd(m.g), 17), []) && ia(D(Fd(m.g), 18), xj(F)) && ia(m.j, []) ? Gb = 2 : Gb = ia(D(Fd(m.g), 13), uj(F)) && ia(D(Fd(m.g), 14), vj(F)) && ia(D(Fd(m.g), 17), wj(F)) && ia(D(Fd(m.g), 18), xj(F)) && ia(m.j, yj(F)) ? 1 : 3;
                    F = new oe;
                    v = ke(v);
                    H = new le;
                    H = q(H, 1, m.l);
                    m = q(H, 2, m.h);
                    v = I(v, 2, m);
                    v = I(F, 4, v);
                    v = q(v, 3, Gb);
                    Aj(A, v)
                }
                ek(l, !0)
            });
            this.s = new dk;
            this.o = h
        };
        fk.prototype.run = function() {
            var a = this, b, c, d, e;
            return Tb(new Sb(new Ob(function(f) {
                switch (f.h) {
                case 1:
                    var g = a.B
                      , h = u(a.h, rj, 10);
                    if (h) {
                        var l = g.g.__fcTrace;
                        l = l ? Va(rj, l) : new rj;
                        h = y(t(h, pj, 1));
                        for (var m = h.next(); !m.done; m = h.next()) {
                            var p = void 0;
                            m = m.value;
                            var v = pj;
                            p = void 0 === p ? !1 : p;
                            wa(l);
                            p = t(l, v, 1, p);
                            m = m ? m : new v;
                            v = D(l, 1);
                            p.push(m);
                            v.push(m.u)
                        }
                        g.g.__fcTrace = Uc(l)
                    }
                    if (!a.i)
                        return f.return(null);
                    f.l = 2;
                    if (null != (c = null == (b = a.o) ? void 0 : b.shouldProceedWithMessaging)) {
                        d = c;
                        f.h = 4;
                        break
                    }
                    g = oj(a.F);
                    f.h = 5;
                    return {
                        value: g
                    };
                case 5:
                    d = f.o;
                case 4:
                    (e = d) ? ck(a.v) : (g = a.j,
                    l = new oe,
                    h = new pe,
                    p = new qe,
                    p = q(p, 1, 1),
                    h = I(h, 1, p),
                    l = I(l, 1, h),
                    Aj(g, l),
                    ek(a, !1));
                    f.h = 3;
                    f.l = 0;
                    break;
                case 2:
                    f.l = 0,
                    f.i = null,
                    ck(a.v);
                case 3:
                    return f.return(a.s.promise)
                }
            }
            )))
        }
        ;
        var ek = function(a, b) {
            var c = u(a.h, bj, 6) ? Wc(u(a.h, bj, 6)) : new bj;
            wa(c);
            D(c, 2).push(8);
            1 !== G(c, 4, 0) && q(c, 4, b ? 1 : 2);
            (b = u(a.l, fg, 2)) && null != B(b, 1) && q(c, 6, B(b, 1));
            if (null != a.o)
                a.s.resolve(c);
            else {
                b = new mj(a.g);
                b.l = c;
                c = u(a.h, Te, 5);
                var d;
                var e = b.i.document, f, g, h;
                var l = Ua(e, "FCNEC");
                try {
                    var m = l ? Va(ag, l) : null
                } catch (p) {
                    m = null
                }
                (m = null !== (h = null === (d = null === m || void 0 === m ? void 0 : u(m, bg, 1)) || void 0 === d ? void 0 : B(d, 1)) && void 0 !== h ? h : null) ? d = m : (d = Ra(e),
                d = null !== (g = null === (f = null === d || void 0 === d ? void 0 : u(d, Yf, 1)) || void 0 === f ? void 0 : B(f, 1)) && void 0 !== g ? g : null);
                b.j = d;
                d = b.i.document;
                f = (f = Ta(d)) && null != B(f, 1) ? B(f, 1) : null;
                g = (g = Ta(d)) && null != B(g, 2) ? B(g, 2) : null;
                d = (d = Ta(d)) && null != B(d, 3) ? B(d, 3) : null;
                null == f || null == g || null == d ? f = null : (h = ee(f),
                m = Hd(g),
                f = h && m ? new lj(h,f,m,g,d) : null);
                b.g = f;
                b.g && (b.s = b.g.h,
                b.o = b.g.i);
                f = (f = Ra(b.i.document)) ? u(f, Zf, 5) || null : null;
                b.h = f;
                b.h && (b.v = B(b.h, 2),
                b.A = u(b.h, hd, 1));
                f = new wg(b.i.location.href);
                zg(f, new O);
                f.i = "";
                1E3 >= f.toString().length && (b.m = f.toString());
                c = Ee(B(c, 4) || "");
                f = new hj;
                b.j && (g = b.j) && (null == B(f.g, 1) && (d = f.g,
                h = new ej,
                I(d, 1, h)),
                d = u(f.g, ej, 1),
                q(d, 1, g));
                if (b.g) {
                    if (g = b.s)
                        ij(f),
                        d = u(f.g, fj, 3),
                        q(d, 1, g);
                    if (g = b.o)
                        ij(f),
                        d = u(f.g, fj, 3),
                        q(d, 2, g)
                }
                if (b.h) {
                    if (g = b.A)
                        jj(f),
                        d = u(f.g, gj, 4),
                        I(d, 1, g);
                    if (g = b.v)
                        jj(f),
                        d = u(f.g, gj, 4),
                        q(d, 2, g)
                }
                b.m && (g = b.m) && q(f.g, 12, g);
                b.l && (b = Wc(b.l),
                I(f.g, 11, b));
                if (Vc(f.g, new dj))
                    b = c;
                else {
                    b = f.g;
                    g = id(new Date(Date.now()));
                    I(b, 7, g);
                    b = Uc(f.g);
                    f = [];
                    for (d = g = 0; d < b.length; d++)
                        h = b.charCodeAt(d),
                        255 < h && (f[g++] = h & 255,
                        h >>= 8),
                        f[g++] = h;
                    b = {
                        fccs: Ba(f, 4)
                    };
                    b = Ge(c, b)
                }
                li(a.g, b)
            }
        };
        var gk = function(a, b) {
            b = Va(Dj, b);
            var c = u(b, Cj, 10)
              , d = u(b, sj, 8)
              , e = new Wf(u(d, Te, 4))
              , f = new zj(e)
              , g = new dg(a.document,B(b, 7),e);
            c = new Ej(c);
            (new fk(a,b,d,e,f,g,c)).run()
        }
          , hk = ["__g78fHfh446__"]
          , ik = k;
        hk[0]in ik || "undefined" == typeof ik.execScript || ik.execScript("var " + hk[0]);
        for (var jk; hk.length && (jk = hk.shift()); )
            hk.length || void 0 === gk ? ik[jk] && ik[jk] !== Object.prototype[jk] ? ik = ik[jk] : ik = ik[jk] = {} : ik[jk] = gk;

    } catch (e) {
        _._DumpException(e)
    }
}
).call(this, this.default_ContributorIabTcfV2ClientJs);
// Google Inc.

//# sourceURL=/_/mss/boq-content-ads-contributor/_/js/k=boq-content-ads-contributor.ContributorIabTcfV2ClientJs.en_US.CLQTO1nKb5k.es5.O/d=1/rs=AJlcJMz7w_ZmdZg--AIft6L1WfGw-D5GPA/m=iabtcfv2wallscript
__g78fHfh446__(window, '\x5bnull,null,null,null,null,null,\x22bbc.com\x22,\x5b\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/f\/AGSKWxXvcy_nFFQzVIyT7t9LSp9YbD92mZ58troxwJ6a5EBYzC-lpN3zCfNFTzuc6ZtkQnDFJ8wuBogFbrrdaVTl2Wkl98OFF-qvpYTtAy1pORPqVcLBl2NQDJnfYd00_Bdp0ekq7Q0pl3JZcbfEJC-quZwy0NH4NLXGMjZ9U7i-DyjY63aP9_Eke5DxxfxX\x22\x5d,null,null,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/el\/AGSKWxUvMr76sOXPcWuR76-kkB5coDgoMtuiZXhV95BxYq5vXfcsutWxjKTPZaMYcElaq-WBpdcgTuJ6pRVvuRPnh-Al7bgX2MlJyh88JEYIdxVkBw0igdiv4KoMXTRo0zwQStSvTRystjZH1kS0fFpB8MTyhnc7hsy4oGGMii2x4BCCH5iM0h-ylHmhdRf3?dmid\\u003d333440ac1db3e09c\x22\x5d,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/f\/AGSKWxW8Oz85A7nUgZcjyIxXFKoEd2ZqIcwsm-jiE53sZ_508SqmgPyCMr04ZVo14diwGPNYf62YLWMvWbM7QutPrd3Zktx38pyQe3CZC2M8SBLrIBGEbCh83vmBEEAVR24VzlzUa1Nm8Eo44r1jAMdT39Ni5MlsnsFvuw2AU6lgtmgeCGmmFgASLe2PfrMw\x22\x5d,\x5bnull,\x5b7\x5d\x5d,null,\x22Privacy and cookie settings\x22,\x22Close\x22,null,null,\x2283115c4baed20110\x22,\x22Managed by Google. Complies with IAB TCF. CMP ID: 300\x22\x5d,null,\x5b\x5b\x5b\x5b10,\x22Index Exchange, Inc. \x22,\x22https:\/\/www.indexexchange.com\/privacy\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,\x5b\x22Use precise geolocation data\x22\x5d,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b1,\x22Select basic ads\x22\x5d,\x5b1,\x22Measure ad performance\x22\x5d\x5d,0,null,\x22395 (days)\x22,1,null,1,1\x5d,\x5b21,\x22The Trade Desk\x22,\x22https:\/\/www.thetradedesk.com\/general\/privacy-policy\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22,\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,\x5b\x22Use precise geolocation data\x22\x5d,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22365 (days)\x22,1,null,1,0\x5d,\x5b28,\x22TripleLift, Inc.\x22,\x22https:\/\/triplelift.com\/privacy\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,null,\x5b\x22Use precise geolocation data\x22\x5d,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Apply market research to generate audience insights\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x2290 (days)\x22,1,null,1,0\x5d,\x5b32,\x22Xandr, Inc.\x22,\x22https:\/\/www.xandr.com\/privacy\/platform-privacy-policy\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Link different devices\x22\x5d,\x5b\x22Use precise geolocation data\x22\x5d,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x2290 (days)\x22,1,null,1,1\x5d,\x5b42,\x22Taboola Europe Limited\x22,\x22https:\/\/www.taboola.com\/privacy-policy\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22,\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b1,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b1,\x22Create a personalised content profile\x22\x5d,\x5b1,\x22Select personalised content\x22\x5d,\x5b1,\x22Measure ad performance\x22\x5d,\x5b1,\x22Measure content performance\x22\x5d,\x5b1,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22366 (days)\x22,1,null,1,1\x5d,\x5b50,\x22Adform\x22,\x22https:\/\/site.adform.com\/privacy-center\/platform-privacy\/product-and-services-privacy-policy\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22,\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x2260 (days)\x22,0,null,1,0\x5d,\x5b52,\x22Magnite, Inc. \x22,\x22https:\/\/www.magnite.com\/legal\/advertising-technology-privacy-policy\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,null,\x5b\x22Use precise geolocation data\x22\x5d,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22365 (days)\x22,0,null,1,0\x5d,\x5b68,\x22Sizmek by Amazon\x22,\x22https:\/\/www.sizmek.com\/privacy-policy\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22,\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Apply market research to generate audience insights\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22396 (days)\x22,1,null,1,1\x5d,\x5b69,\x22OpenX\x22,\x22https:\/\/www.openx.com\/legal\/privacy-policy\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,null,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22365 (days)\x22,0,null,1,1\x5d,\x5b76,\x22PubMatic, Inc.\x22,\x22https:\/\/pubmatic.com\/privacy-policy\/\x22,1,null,null,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22,\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,\x5b\x22Use precise geolocation data\x22\x5d,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b2,\x22Create a personalised content profile\x22\x5d,\x5b2,\x22Select personalised content\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Measure content performance\x22\x5d,\x5b2,\x22Apply market research to generate audience insights\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x2290 (days)\x22,0,null,1,0\x5d,\x5b77,\x22Comscore B.V.\x22,\x22https:\/\/www.scorecardresearch.com\/privacy.aspx?newlanguage\\u003d1\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22\x5d,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b1,\x22Measure ad performance\x22\x5d,\x5b1,\x22Measure content performance\x22\x5d,\x5b1,\x22Apply market research to generate audience insights\x22\x5d,\x5b1,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22720 (days)\x22,0,null,1,1\x5d,\x5b78,\x22Flashtalking, Inc.\x22,\x22https:\/\/www.flashtalking.com\/privacypolicy\/\x22,0,null,null,\x5b\x22Link different devices\x22,\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b1,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b1,\x22Measure ad performance\x22\x5d\x5d,0,null,\x22730 (days)\x22,0,null,1,0\x5d,\x5b79,\x22MediaMath, Inc.\x22,\x22https:\/\/www.mediamath.com\/privacy-policy\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22,\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,\x5b\x22Use precise geolocation data\x22\x5d,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22393 (days)\x22,1,null,1,0\x5d,\x5b132,\x22Teads \x22,\x22https:\/\/www.teads.com\/privacy-policy\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b1,\x22Measure ad performance\x22\x5d,\x5b1,\x22Apply market research to generate audience insights\x22\x5d,\x5b1,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22365 (days)\x22,0,null,1,0\x5d,\x5b148,\x22Liveintent Inc.\x22,\x22https:\/\/liveintent.com\/services-privacy-policy\/\x22,0,null,null,null,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d\x5d,0,null,\x22731 (days)\x22,1,null,1,0\x5d,\x5b150,\x22Inskin Media LTD\x22,\x22https:\/\/www.inskinmedia.com\/privacy-policy.html\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Link different devices\x22,\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b1,\x22Apply market research to generate audience insights\x22\x5d,\x5b1,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22366 (days)\x22,1,null,1,1\x5d,\x5b246,\x22Smartology Limited\x22,\x22https:\/\/www.smartology.net\/privacy-policy\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,null,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b1,\x22Measure content performance\x22\x5d\x5d,0,null,\x22Uses session cookies\x22,0,null,0,0\x5d,\x5b315,\x22Celtra, Inc.\x22,\x22https:\/\/www.celtra.com\/privacy-policy\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,\x5b\x22Use precise geolocation data\x22\x5d,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b1,\x22Select basic ads\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b1,\x22Measure ad performance\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22Uses session cookies\x22,1,null,0,0\x5d,\x5b328,\x22Gemius SA\x22,\x22https:\/\/www.gemius.com\/cookie-policy.html\x22,0,null,null,\x5b\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b1,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b1,\x22Create a personalised content profile\x22\x5d,\x5b1,\x22Select personalised content\x22\x5d,\x5b1,\x22Measure ad performance\x22\x5d,\x5b1,\x22Measure content performance\x22\x5d,\x5b1,\x22Apply market research to generate audience insights\x22\x5d,\x5b1,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22395 (days)\x22,1,null,1,1\x5d,\x5b373,\x22Nielsen Marketing Cloud\x22,\x22https:\/\/www.nielsen.com\/us\/en\/legal\/privacy-statement\/nielsen-marketing-cloud-privacy-notice\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22\x5d,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22,\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,\x5b\x22Use precise geolocation data\x22\x5d,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Apply market research to generate audience insights\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22120 (days)\x22,1,null,1,0\x5d,\x5b452,\x22Innovid Inc.\x22,\x22https:\/\/www.innovid.com\/privacy-policy\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d\x5d,0,null,\x2292 (days)\x22,0,null,1,0\x5d,\x5b734,\x22Cint AB\x22,\x22https:\/\/www.cint.com\/participant-privacy-notice\x22,0,null,null,\x5b\x22Match and combine offline data sources\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b1,\x22Measure ad performance\x22\x5d,\x5b1,\x22Measure content performance\x22\x5d,\x5b1,\x22Apply market research to generate audience insights\x22\x5d\x5d,0,null,\x22730 (days)\x22,0,null,1,0\x5d,\x5b755,\x22Google Advertising Products\x22,\x22https:\/\/policies.google.com\/privacy\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b2,\x22Create a personalised content profile\x22\x5d,\x5b2,\x22Select personalised content\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Apply market research to generate audience insights\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22396 (days)\x22,1,null,1,0\x5d,\x5b759,\x22RevJet\x22,\x22https:\/\/www.revjet.com\/privacy\x22,0,null,null,\x5b\x22Match and combine offline data sources\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b1,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b1,\x22Create a personalised content profile\x22\x5d,\x5b1,\x22Select personalised content\x22\x5d,\x5b1,\x22Measure ad performance\x22\x5d,\x5b1,\x22Measure content performance\x22\x5d,\x5b1,\x22Apply market research to generate audience insights\x22\x5d,\x5b1,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22730 (days)\x22,0,null,1,0\x5d,\x5b793,\x22Amazon Advertising\x22,\x22https:\/\/www.amazon.co.uk\/gp\/help\/customer\/display.html?nodeId\\u003d201909010\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22,\x22Technically deliver ads or content\x22\x5d,null,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b1,\x22Select basic ads\x22\x5d,\x5b1,\x22Create a personalised ads profile\x22\x5d,\x5b1,\x22Select personalised ads\x22\x5d,\x5b1,\x22Measure ad performance\x22\x5d,\x5b1,\x22Apply market research to generate audience insights\x22\x5d,\x5b1,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22396 (days)\x22,1,null,1,1\x5d,\x5b812,\x22Nielsen International SA\x22,\x22https:\/\/www.nielsen.com\/eu\/en\/legal\/privacy-statement\/digital-measurement\/\x22,1,null,\x5b\x22Ensure security, prevent fraud, and debug\x22\x5d,\x5b\x22Match and combine offline data sources\x22,\x22Link different devices\x22,\x22Receive and use automatically-sent device characteristics for identification\x22\x5d,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22\x5d,\x5b2,\x22Measure ad performance\x22\x5d,\x5b2,\x22Apply market research to generate audience insights\x22\x5d,\x5b2,\x22Develop and improve products\x22\x5d\x5d,0,null,\x22396 (days)\x22,0,null,1,0\x5d\x5d,\x5b\x5b202,\x22Eyereturn Marketing\x22,\x22https:\/\/eyereturnmarketing.com\/privacy\/\x22\x5d,\x5b505,\x22Undertone\x22,\x22https:\/\/www.undertone.com\/privacy\/\x22\x5d,\x5b587,\x22AT Internet\x22,\x22https:\/\/www.atinternet.com\/en\/company\/data-protection\/\x22\x5d,\x5b780,\x22LiveIntent\x22,\x22https:\/\/liveintent.com\/services-privacy-policy\/\x22\x5d,\x5b1843,\x22Bonzai\x22,\x22https:\/\/www.bonzai.co\/privacy-policy\/\x22\x5d,\x5b1911,\x22Tealium\x22,\x22https:\/\/tealium.com\/protecting-your-privacy-and-your-data\/\x22\x5d\x5d,\x5b\x5b1,\x22Store and\/or access information on a device\x22,\x22Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.\x22,\x22Vendors can:\\n* Store and access information on the device such as cookies and device identifiers presented to a user.\x22,0\x5d,\x5b2,\x22Select basic ads\x22,\x22Ads can be shown to you based on the content you’re viewing, the app you’re using, your approximate location, or your device type.\x22,\x22To do basic ad selection vendors can:\\n* Use real-time information about the context in which the ad will be shown, to show the ad, including information about the content and the device, such as: device type and capabilities, user agent, URL, IP address\\n* Use a user’s non-precise geolocation data\\n* Control the frequency of ads shown to a user.\\n* Sequence the order in which ads are shown to a user.\\n* Prevent an ad from serving in an unsuitable editorial (brand-unsafe) context\\nVendors cannot:\\n* Create a personalised ads profile using this information for the selection of future ads without a separate legal basis to create a personalised ads profile.\\n* N.B. Non-precise means only an approximate location involving at least a radius of 500 meters is permitted.\x22,1\x5d,\x5b3,\x22Create a personalised ads profile\x22,\x22A profile can be built about you and your interests to show you personalised ads that are relevant to you.\x22,\x22To create a personalised ads profile vendors can:\\n* Collect information about a user, including a user\x27s activity, interests, demographic information, or location, to create or edit a user profile for use in personalised advertising.\\n* Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalised advertising.\x22,0\x5d,\x5b4,\x22Select personalised ads\x22,\x22Personalised ads can be shown to you based on a profile about you.\x22,\x22To select personalised ads vendors can:\\n* Select personalised ads based on a user profile or other historical user data, including a user’s prior activity, interests, visits to sites or apps, location, or demographic information.\x22,0\x5d,\x5b5,\x22Create a personalised content profile\x22,\x22A profile can be built about you and your interests to show you personalised content that is relevant to you.\x22,\x22To create a personalised content profile vendors can:\\n* Collect information about a user, including a user\x27s activity, interests, visits to sites or apps, demographic information, or location, to create or edit a user profile for personalising content.\\n* Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalising content.\x22,1\x5d,\x5b6,\x22Select personalised content\x22,\x22Personalised content can be shown to you based on a profile about you.\x22,\x22To select personalised content vendors can:\\n* Select personalised content based on a user profile or other historical user data, including a user’s prior activity, interests, visits to sites or apps, location, or demographic information.\x22,1\x5d,\x5b7,\x22Measure ad performance\x22,\x22The performance and effectiveness of ads that you see or interact with can be measured.\x22,\x22To measure ad performance vendors can:\\n* Measure whether and how ads were delivered to and interacted with by a user\\n* Provide reporting about ads including their effectiveness and performance\\n* Provide reporting about users who interacted with ads using data observed during the course of the user\x27s interaction with that ad\\n* Provide reporting to publishers about the ads displayed on their property\\n* Measure whether an ad is serving in a suitable editorial environment (brand-safe) context\\n* Determine the percentage of the ad that had the opportunity to be seen and the duration of that opportunity\\n* Combine this information with other information previously collected, including from across websites and apps\\nVendors cannot:\\n*Apply panel- or similarly-derived audience insights data to ad measurement data without a Legal Basis to apply market research to generate audience insights (Purpose 9)\x22,1\x5d,\x5b8,\x22Measure content performance\x22,\x22The performance and effectiveness of content that you see or interact with can be measured.\x22,\x22To measure content performance vendors can:\\n* Measure and report on how content was delivered to and interacted with by users.\\n* Provide reporting, using directly measurable or known information, about users who interacted with the content\\n* Combine this information with other information previously collected, including from across websites and apps.\\nVendors cannot:\\n* Measure whether and how ads (including native ads) were delivered to and interacted with by a user.\\n* Apply panel- or similarly derived audience insights data to ad measurement data without a Legal Basis to apply market research to generate audience insights (Purpose 9)\x22,1\x5d,\x5b9,\x22Apply market research to generate audience insights\x22,\x22Market research can be used to learn more about the audiences who visit sites\/apps and view ads.\x22,\x22To apply market research to generate audience insights vendors can:\\n* Provide aggregate reporting to advertisers or their representatives about the audiences reached by their ads, through panel-based and similarly derived insights.\\n* Provide aggregate reporting to publishers about the audiences that were served or interacted with content and\/or ads on their property by applying panel-based and similarly derived insights.\\n* Associate offline data with an online user for the purposes of market research to generate audience insights if vendors have declared to match and combine offline data sources (Feature 1)\\n* Combine this information with other information previously collected including from across websites and apps. \\nVendors cannot:\\n* Measure the performance and effectiveness of ads that a specific user was served or interacted with, without a Legal Basis to measure ad performance.\\n* Measure which content a specific user was served and how they interacted with it, without a Legal Basis to measure content performance.\x22,1\x5d,\x5b10,\x22Develop and improve products\x22,\x22Your data can be used to improve existing systems and software, and to develop new products\x22,\x22To develop new products and improve products vendors can:\\n* Use information to improve their existing products with new features and to develop new products\\n* Create new models and algorithms through machine learning\\nVendors cannot:\\n* Conduct any other data processing operation allowed under a different purpose under this purpose\x22,1\x5d\x5d,\x5b\x5b1,\x22Ensure security, prevent fraud, and debug\x22,\x22Your data can be used to monitor for and prevent fraudulent activity, and ensure systems and processes work properly and securely.\x22,\x22To ensure security, prevent fraud and debug vendors can:\\n* Ensure data are securely transmitted\\n* Detect and prevent malicious, fraudulent, invalid, or illegal activity.\\n* Ensure correct and efficient operation of systems and processes, including to monitor and enhance the performance of systems and processes engaged in permitted purposes\\nVendors cannot:\\n* Conduct any other data processing operation allowed under a different purpose under this purpose.\\nNote: Data collected and used to ensure security, prevent fraud, and debug may include automatically-sent device characteristics for identification, precise geolocation data, and data obtained by actively scanning device characteristics for identification without separate disclosure and\/or opt-in.\x22\x5d,\x5b2,\x22Technically deliver ads or content\x22,\x22Your device can receive and send information that allows you to see and interact with ads and content.\x22,\x22To deliver information and respond to technical requests vendors can:\\n* Use a user’s IP address to deliver an ad over the internet\\n* Respond to a user’s interaction with an ad by sending the user to a landing page\\n* Use a user’s IP address to deliver content over the internet\\n* Respond to a user’s interaction with content by sending the user to a landing page\\n* Use information about the device type and capabilities for delivering ads or content, for example, to deliver the right size ad creative or video file in a format supported by the device\\nVendors cannot:\\n* Conduct any other data processing operation allowed under a different purpose under this purpose\x22\x5d\x5d,\x5b\x5b1,\x22Match and combine offline data sources\x22,\x22Data from offline data sources can be combined with your online activity in support of one or more purposes\x22,\x22Vendors can:\\n* Combine data obtained offline with data collected online in support of one or more Purposes or Special Purposes.\x22\x5d,\x5b2,\x22Link different devices\x22,\x22Different devices can be determined as belonging to you or your household in support of one or more of purposes.\x22,\x22Vendors can:\\n* Deterministically determine that two or more devices belong to the same user or household\\n* Probabilistically determine that two or more devices belong to the same user or household\\n* Actively scan device characteristics for identification for probabilistic identification if users have allowed vendors to actively scan device characteristics for identification (Special Feature 2)\x22\x5d,\x5b3,\x22Receive and use automatically-sent device characteristics for identification\x22,\x22Your device might be distinguished from other devices based on information it automatically sends, such as IP address or browser type.\x22,\x22Vendors can:\\n* Create an identifier using data collected automatically from a device for specific characteristics, e.g. IP address, user-agent string.\\n* Use such an identifier to attempt to re-identify a device.\\nVendors cannot:\\n* Create an identifier using data collected via actively scanning a device for specific characteristics, e.g. installed font or screen resolution without users’ separate opt-in to actively scanning device characteristics for identification.\\n* Use such an identifier to re-identify a device.\x22\x5d\x5d,\x5b\x5b1,\x22Use precise geolocation data\x22,\x22Your precise geolocation data can be used in support of one or more purposes. This means your location can be accurate to within several meters.\x22,\x22Vendors can:\\n* Collect and process precise geolocation data in support of one or more purposes.\\nN.B. Precise geolocation means that there are no restrictions on the precision of a user’s location; this can be accurate to within several meters.\x22\x5d\x5d,\x5b\x5b\x22Personalised ads and content, ad and content measurement, audience insights and product development\x22,\x22perm_identity\x22\x5d,\x5b\x22Store and\/or access information on a device\x22,\x22devices\x22\x5d\x5d,\x5b2,131,2\x5d,\x22https:\/\/www.bbc.com\/usingthebbc\/privacy\/\x22,\x22https:\/\/gdpr.eu\/recital-47-overriding-legitimate-interest\/\x22,null,\x5b\x5b1,\x22Store and\/or access information on a device\x22,\x22Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.\x22,\x22Vendors can:\\n* Store and access information on the device such as cookies and device identifiers presented to a user.\x22,0\x5d,\x5b2,\x22Select basic ads\x22,\x22Ads can be shown to you based on the content you’re viewing, the app you’re using, your approximate location, or your device type.\x22,\x22To do basic ad selection vendors can:\\n* Use real-time information about the context in which the ad will be shown, to show the ad, including information about the content and the device, such as: device type and capabilities, user agent, URL, IP address\\n* Use a user’s non-precise geolocation data\\n* Control the frequency of ads shown to a user.\\n* Sequence the order in which ads are shown to a user.\\n* Prevent an ad from serving in an unsuitable editorial (brand-unsafe) context\\nVendors cannot:\\n* Create a personalised ads profile using this information for the selection of future ads without a separate legal basis to create a personalised ads profile.\\n* N.B. Non-precise means only an approximate location involving at least a radius of 500 meters is permitted.\x22,0\x5d,\x5b3,\x22Create a personalised ads profile\x22,\x22A profile can be built about you and your interests to show you personalised ads that are relevant to you.\x22,\x22To create a personalised ads profile vendors can:\\n* Collect information about a user, including a user\x27s activity, interests, demographic information, or location, to create or edit a user profile for use in personalised advertising.\\n* Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalised advertising.\x22,0\x5d,\x5b4,\x22Select personalised ads\x22,\x22Personalised ads can be shown to you based on a profile about you.\x22,\x22To select personalised ads vendors can:\\n* Select personalised ads based on a user profile or other historical user data, including a user’s prior activity, interests, visits to sites or apps, location, or demographic information.\x22,0\x5d,\x5b5,\x22Create a personalised content profile\x22,\x22A profile can be built about you and your interests to show you personalised content that is relevant to you.\x22,\x22To create a personalised content profile vendors can:\\n* Collect information about a user, including a user\x27s activity, interests, visits to sites or apps, demographic information, or location, to create or edit a user profile for personalising content.\\n* Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalising content.\x22,0\x5d,\x5b6,\x22Select personalised content\x22,\x22Personalised content can be shown to you based on a profile about you.\x22,\x22To select personalised content vendors can:\\n* Select personalised content based on a user profile or other historical user data, including a user’s prior activity, interests, visits to sites or apps, location, or demographic information.\x22,0\x5d,\x5b7,\x22Measure ad performance\x22,\x22The performance and effectiveness of ads that you see or interact with can be measured.\x22,\x22To measure ad performance vendors can:\\n* Measure whether and how ads were delivered to and interacted with by a user\\n* Provide reporting about ads including their effectiveness and performance\\n* Provide reporting about users who interacted with ads using data observed during the course of the user\x27s interaction with that ad\\n* Provide reporting to publishers about the ads displayed on their property\\n* Measure whether an ad is serving in a suitable editorial environment (brand-safe) context\\n* Determine the percentage of the ad that had the opportunity to be seen and the duration of that opportunity\\n* Combine this information with other information previously collected, including from across websites and apps\\nVendors cannot:\\n*Apply panel- or similarly-derived audience insights data to ad measurement data without a Legal Basis to apply market research to generate audience insights (Purpose 9)\x22,0\x5d,\x5b8,\x22Measure content performance\x22,\x22The performance and effectiveness of content that you see or interact with can be measured.\x22,\x22To measure content performance vendors can:\\n* Measure and report on how content was delivered to and interacted with by users.\\n* Provide reporting, using directly measurable or known information, about users who interacted with the content\\n* Combine this information with other information previously collected, including from across websites and apps.\\nVendors cannot:\\n* Measure whether and how ads (including native ads) were delivered to and interacted with by a user.\\n* Apply panel- or similarly derived audience insights data to ad measurement data without a Legal Basis to apply market research to generate audience insights (Purpose 9)\x22,0\x5d,\x5b9,\x22Apply market research to generate audience insights\x22,\x22Market research can be used to learn more about the audiences who visit sites\/apps and view ads.\x22,\x22To apply market research to generate audience insights vendors can:\\n* Provide aggregate reporting to advertisers or their representatives about the audiences reached by their ads, through panel-based and similarly derived insights.\\n* Provide aggregate reporting to publishers about the audiences that were served or interacted with content and\/or ads on their property by applying panel-based and similarly derived insights.\\n* Associate offline data with an online user for the purposes of market research to generate audience insights if vendors have declared to match and combine offline data sources (Feature 1)\\n* Combine this information with other information previously collected including from across websites and apps. \\nVendors cannot:\\n* Measure the performance and effectiveness of ads that a specific user was served or interacted with, without a Legal Basis to measure ad performance.\\n* Measure which content a specific user was served and how they interacted with it, without a Legal Basis to measure content performance.\x22,0\x5d,\x5b10,\x22Develop and improve products\x22,\x22Your data can be used to improve existing systems and software, and to develop new products\x22,\x22To develop new products and improve products vendors can:\\n* Use information to improve their existing products with new features and to develop new products\\n* Create new models and algorithms through machine learning\\nVendors cannot:\\n* Conduct any other data processing operation allowed under a different purpose under this purpose\x22,0\x5d\x5d,null,null,1\x5d,\x5b\x22en-GB\x22,\x22Welcome to BBC.com\x22,\x22BBC.com would like permission to share your personal data with our ad partners to allow them to show ads tailored to your interests\x22,\x22Consent\x22,\x22Manage options\x22,\x22Manage your data\x22,\x22You can choose how your personal data is used. Vendors want your permission to do the following:\x22,\x22Confirm our vendors\x22,\x22Vendors can use your data to provide services. Declining a vendor can stop them from using the data that you shared.\x22,\x5b\x22#1967D2\x22,\x22#1967D2\x22,\x5b\x22Open Sans\x22,\x5b14,2\x5d,\x22#5F6368\x22,1,0,0,2\x5d,\x5b\x22\x22,\x5b16,2\x5d,\x22#000000\x22,1,0,0,2\x5d,\x5b\x22Open Sans\x22,\x5b14,2\x5d,\x22#FFFFFF\x22,1,0,0,2\x5d,\x5b\x22\x22,\x5b1,1\x5d,\x22#000000\x22,0,0,0,1\x5d,\x22#FFFFFF\x22,\x22#FFFFFF\x22\x5d,\x5b\x22https:\/\/lh3.googleusercontent.com\/ZruOLNoYDokGSPT4fA50GfuA7MLhqV3ixHQnC4bygAJVFlnp61hd7-zKDz4HzlfzrZVCQYCovRRMZ0jYhtKsPmaeAUPk7rZzXbRcy8LmV1V8r7pImn_c\x22,\x5b2\x5d,\x22Master_BBC_Logo_black.png\x22,3\x5d,\x5b\x5b1\x5d,\x5b3\x5d,\x5b2\x5d\x5d,\x5b\x5b\x22en-GB\x22,\x22Welcome to BBC.com\x22,\x22BBC.com would like permission to share your personal data with our ad partners to allow them to show ads tailored to your interests\x22,\x22Manage your data\x22,\x22You can choose how your personal data is used. Vendors want your permission to do the following:\x22,\x22Confirm our vendors\x22,\x22Vendors can use your data to provide services. Declining a vendor can stop them from using the data that you shared.\x22,\x5b\x5b1,\x22Consent\x22\x5d,\x5b2,\x22Manage options\x22\x5d,\x5b3,\x22Do not consent\x22\x5d\x5d\x5d\x5d\x5d,\x5b\x22Learn more\x22,\x5b\x5b\x22How can I change my choice?\x22,\x5bnull,\x22Change your choice at any time. View our privacy policy to learn more.\x22\x5d,\x22Privacy policy\x22,\x22fc-publisher-policy-link\x22\x5d,\x5b\x22What if I don\x27t consent?\x22,\x5bnull,\x22Your personal data won\x27t be used for the above, unless we and our vendors determine that we have a legitimate interest to do so.\x22\x5d\x5d,\x5b\x22How does legitimate interest work?\x22,\x5bnull,\x22Some vendors are not asking for your consent, but are using your personal data on the basis of their legitimate interest. To turn this off, click \x27Manage options\x27.\x22\x5d,\x22Learn more\x22,\x22fc-legitimate-interest-learn-more\x22\x5d,\x5b\x22Do I have to consent to everything?\x22,\x5bnull,\x22\\u003cp\\u003eNo. You can change how your personal data is used and who uses it by clicking \x27Manage options\x27.\\u003c\/p\\u003e\\u003cp\\u003eTo collect and use data, vendors can:\\u003c\/p\\u003e\\u003cul\\u003e\\u003cli\\u003eMatch and combine offline data sources\\u003c\/li\\u003e\\u003cli\\u003eLink different devices\\u003c\/li\\u003e\\u003cli\\u003eReceive and use automatically-sent device characteristics for identification\\u003c\/li\\u003e\\u003c\/ul\\u003e\\u003cp\\u003eCollecting and using the following data will require your consent, unless it\x27s collected to ensure security, prevent fraud or debug:\\u003c\/p\\u003e\\u003cul\\u003e\\u003cli\\u003eUse precise geolocation data\\u003c\/li\\u003e\\u003c\/ul\\u003e\x22\x5d\x5d\x5d,\x5bnull,\x22Your personal data will be processed and information from your device (cookies, unique identifiers and other device data) may be stored by, accessed by and shared with \\u003ca class\\u003d\\\x22fc-vendors-list-dialog\\\x22 role\\u003d\\\x22button\\\x22 tabindex\\u003d0 href\\u003d\\\x22#\\\x22\\u003ethird-party vendors\\u003c\/a\\u003e, or used specifically by this site or app.\x22\x5d,\x22Data preferences\x22,\x22View details\x22,\x22This is one reason that vendors use data. Data used for security or an essential function can\x27t be turned off.\x22,\x22This is one method that vendors use to collect data. You can\x27t change data collection methods directly, but you can change what data you share and which vendors you share it with.\x22,\x22Vendor preferences\x22,\x22Vendor preferences\x22,\x22View details\x22,\x22Privacy policy\x22,\x22Back\x22,null,\x22Close\x22,\x22Consent\x22,\x22Legitimate interest\x22,\x22How does legitimate interest work?\x22,\x22Some vendors are not asking for your consent, but are using your personal data on the basis of their legitimate interest.\x22,\x22What third-party vendors can access my data?\x22,\x22The following third-party vendors can use your data to provide services:\x22,\x22What does TCF mean?\x22,\x22This vendor is registered with the IAB Europe Transparency and Consent Framework and subject to its policies.\x22,\x22TCF vendors\x22,\x22General vendors\x22,\x22What does \x27General vendor\x27 mean?\x22,\x22These vendors are registered with Google, but not with the IAB Europe Transparency and Consent Framework. They want your consent to use cookies, unique identifiers and other device data.\x22,\x22Data collection methods\x22,\x22Some vendors may process your personal data on the basis of legitimate interest, which you can object to by managing your options below. Look for a link at the bottom of this page or in our privacy policy where you can withdraw consent.\x22,null,\x22Site or app\x22,\x22You can choose your data preferences. This site or app wants your permission to do the following:\x22,\x22Cookie duration\x22,\x22Uses other forms of storage\x22,\x22Storage details\x22,\x22Name\x22,\x22Type\x22,\x22Cookie\x22,\x22Web\x22,\x22App\x22,\x22Duration\x22,\x22Domain\x22,\x22Purposes\x22,\x22Accept all\x22,\x22Confirm choices\x22,\x22Cookie duration resets each session\x22,\x22Doesn\x27t use cookies\x22,\x22Refreshes cookies\x22,\x22Yes\x22,\x22No\x22\x5d,\x22en\x22,\x22GB\x22,\x5b3,\x5bnull,null,\x5b\x5b\x22en-GB\x22,\x22Welcome to BBC.com\x22,\x22BBC.com would like permission to share your personal data with our ad partners to allow them to show ads tailored to your interests\x22,\x22Consent\x22,\x22Manage options\x22,\x22Manage your data\x22,\x22You can choose how your personal data is used. Vendors want your permission to do the following:\x22,\x22Confirm our vendors\x22,\x22Vendors can use your data to provide services. Declining a vendor can stop them from using the data that you shared.\x22,\x5b\x22#1967D2\x22,\x22#1967D2\x22,\x5b\x22Open Sans\x22,\x5b14,2\x5d,\x22#5F6368\x22,1,0,0,2\x5d,\x5b\x22\x22,\x5b16,2\x5d,\x22#000000\x22,1,0,0,2\x5d,\x5b\x22Open Sans\x22,\x5b14,2\x5d,\x22#FFFFFF\x22,1,0,0,2\x5d,\x5b\x22\x22,\x5b1,1\x5d,\x22#000000\x22,0,0,0,1\x5d,\x22#FFFFFF\x22,\x22#FFFFFF\x22\x5d,\x5b\x22https:\/\/lh3.googleusercontent.com\/ZruOLNoYDokGSPT4fA50GfuA7MLhqV3ixHQnC4bygAJVFlnp61hd7-zKDz4HzlfzrZVCQYCovRRMZ0jYhtKsPmaeAUPk7rZzXbRcy8LmV1V8r7pImn_c\x22,\x5b2\x5d,\x22Master_BBC_Logo_black.png\x22,3\x5d,\x5b\x5b1\x5d,\x5b3\x5d,\x5b2\x5d\x5d,\x5b\x5b\x22en-GB\x22,\x22Welcome to BBC.com\x22,\x22BBC.com would like permission to share your personal data with our ad partners to allow them to show ads tailored to your interests\x22,\x22Manage your data\x22,\x22You can choose how your personal data is used. Vendors want your permission to do the following:\x22,\x22Confirm our vendors\x22,\x22Vendors can use your data to provide services. Declining a vendor can stop them from using the data that you shared.\x22,\x5b\x5b1,\x22Consent\x22\x5d,\x5b2,\x22Manage options\x22\x5d,\x5b3,\x22Do not consent\x22\x5d\x5d\x5d\x5d\x5d\x5d\x5d,\x5b\x5b\x5b6\x5d,\x5b8\x5d,\x5b7\x5d\x5d\x5d,\x5b1,1\x5d,null,\x22en-GB\x22\x5d\x5d\x5d');
