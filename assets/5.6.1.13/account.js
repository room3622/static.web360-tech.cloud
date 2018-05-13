(function () {
    (function (e) {
        var n = this || (0, eval)("this"),
                t = n.document,
                r = n.navigator,
                a = n.jQuery,
                i = n.JSON;
        (function (e) {
            "function" === typeof require && "object" === typeof exports && "object" === typeof module ? e(module.exports || exports, require) : "function" === typeof define && define.amd ? define(["exports", "require"], e) : e(n.ko = {})
        })(function (o, u) {
            function c(e, n) {
                return null === e || typeof e in d ? e === n : !1
            }

            function s(n, t) {
                var r;
                return function () {
                    r || (r = setTimeout(function () {
                        r = e;
                        n()
                    }, t))
                }
            }

            function f(e, n) {
                var t;
                return function () {
                    clearTimeout(t);
                    t = setTimeout(e, n)
                }
            }

            function l(e, n, t, r) {
                p.d[e] = {
                    init: function (e, a, i, o, u) {
                        var c, s;
                        p.s(function () {
                            var i = p.a.c(a()),
                                    o = !t !== !i,
                                    f = !s;
                            if (f || n || o !== c)
                                f && p.Y.la() && (s = p.a.ia(p.f.childNodes(e), !0)), o ? (f || p.f.T(e, p.a.ia(s)), p.Ca(r ? r(u, i) : u, e)) : p.f.ja(e), c = o
                        }, null, {
                            o: e
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                p.h.ha[e] = !1;
                p.f.Q[e] = !0
            }
            var p = "undefined" !== typeof o ? o : {};
            p.b = function (e, n) {
                for (var t = e.split("."), r = p, a = 0; a < t.length - 1; a++)
                    r = r[t[a]];
                r[t[t.length - 1]] = n
            };
            p.A = function (e, n, t) {
                e[n] = t
            };
            p.version = "3.2.0";
            p.b("version", p.version);
            p.a = function () {
                function o(e, n) {
                    for (var t in e)
                        e.hasOwnProperty(t) && n(t, e[t])
                }

                function u(e, n) {
                    if (n)
                        for (var t in n)
                            n.hasOwnProperty(t) && (e[t] = n[t]);
                    return e
                }

                function c(e, n) {
                    e.__proto__ = n;
                    return e
                }
                var s = {
                    __proto__: []
                }
                instanceof Array, f = {}, l = {};
                f[r && /Firefox\/2/i.test(r.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                f.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                o(f, function (e, n) {
                    if (n.length)
                        for (var t = 0, r = n.length; t < r; t++)
                            l[n[t]] = e
                });
                var d = {
                    propertychange: !0
                },
                        h = t && function () {
                            for (var n = 3, r = t.createElement("div"), a = r.getElementsByTagName("i"); r.innerHTML = "<!--[if gt IE " + ++n + "]><i></i><![endif]-->", a[0]; )
                                ;
                            return 4 < n ? n : e
                        }();
                return {
                    vb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                    u: function (e, n) {
                        for (var t = 0, r = e.length; t < r; t++)
                            n(e[t], t)
                    },
                    m: function (e, n) {
                        if ("function" == typeof Array.prototype.indexOf)
                            return Array.prototype.indexOf.call(e, n);
                        for (var t = 0, r = e.length; t < r; t++)
                            if (e[t] === n)
                                return t;
                        return -1
                    },
                    qb: function (e, n, t) {
                        for (var r = 0, a = e.length; r < a; r++)
                            if (n.call(t, e[r], r))
                                return e[r];
                        return null
                    },
                    ua: function (e, n) {
                        var t = p.a.m(e, n);
                        0 < t ? e.splice(t, 1) : 0 === t && e.shift()
                    },
                    rb: function (e) {
                        e = e || [];
                        for (var n = [], t = 0, r = e.length; t < r; t++)
                            0 > p.a.m(n, e[t]) && n.push(e[t]);
                        return n
                    },
                    Da: function (e, n) {
                        e = e || [];
                        for (var t = [], r = 0, a = e.length; r < a; r++)
                            t.push(n(e[r], r));
                        return t
                    },
                    ta: function (e, n) {
                        e = e || [];
                        for (var t = [], r = 0, a = e.length; r < a; r++)
                            n(e[r], r) && t.push(e[r]);
                        return t
                    },
                    ga: function (e, n) {
                        if (n instanceof Array)
                            e.push.apply(e, n);
                        else
                            for (var t = 0, r = n.length; t < r; t++)
                                e.push(n[t]);
                        return e
                    },
                    ea: function (e, n, t) {
                        var r = p.a.m(p.a.Xa(e), n);
                        0 > r ? t && e.push(n) : t || e.splice(r, 1)
                    },
                    xa: s,
                    extend: u,
                    za: c,
                    Aa: s ? c : u,
                    G: o,
                    na: function (e, n) {
                        if (!e)
                            return e;
                        var t = {},
                                r;
                        for (r in e)
                            e.hasOwnProperty(r) && (t[r] = n(e[r], r, e));
                        return t
                    },
                    Ka: function (e) {
                        for (; e.firstChild; )
                            p.removeNode(e.firstChild)
                    },
                    oc: function (e) {
                        e = p.a.S(e);
                        for (var n = t.createElement("div"), r = 0, a = e.length; r < a; r++)
                            n.appendChild(p.R(e[r]));
                        return n
                    },
                    ia: function (e, n) {
                        for (var t = 0, r = e.length, a = []; t < r; t++) {
                            var i = e[t].cloneNode(!0);
                            a.push(n ? p.R(i) : i)
                        }
                        return a
                    },
                    T: function (e, n) {
                        p.a.Ka(e);
                        if (n)
                            for (var t = 0, r = n.length; t < r; t++)
                                e.appendChild(n[t])
                    },
                    Lb: function (e, n) {
                        var t = e.nodeType ? [e] : e;
                        if (0 < t.length) {
                            for (var r = t[0], a = r.parentNode, i = 0, o = n.length; i < o; i++)
                                a.insertBefore(n[i], r);
                            i = 0;
                            for (o = t.length; i < o; i++)
                                p.removeNode(t[i])
                        }
                    },
                    ka: function (e, n) {
                        if (e.length) {
                            for (n = 8 === n.nodeType && n.parentNode || n; e.length && e[0].parentNode !== n; )
                                e.shift();
                            if (1 < e.length) {
                                var t = e[0],
                                        r = e[e.length - 1];
                                for (e.length = 0; t !== r; )
                                    if (e.push(t), t = t.nextSibling, !t)
                                        return;
                                e.push(r)
                            }
                        }
                        return e
                    },
                    Nb: function (e, n) {
                        7 > h ? e.setAttribute("selected", n) : e.selected = n
                    },
                    cb: function (n) {
                        return null === n || n === e ? "" : n.trim ? n.trim() : n.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    },
                    vc: function (e, n) {
                        e = e || "";
                        return n.length > e.length ? !1 : e.substring(0, n.length) === n
                    },
                    cc: function (e, n) {
                        if (e === n)
                            return !0;
                        if (11 === e.nodeType)
                            return !1;
                        if (n.contains)
                            return n.contains(3 === e.nodeType ? e.parentNode : e);
                        if (n.compareDocumentPosition)
                            return 16 == (n.compareDocumentPosition(e) & 16);
                        for (; e && e != n; )
                            e = e.parentNode;
                        return !!e
                    },
                    Ja: function (e) {
                        return p.a.cc(e, e.ownerDocument.documentElement)
                    },
                    ob: function (e) {
                        return !!p.a.qb(e, p.a.Ja)
                    },
                    t: function (e) {
                        return e && e.tagName && e.tagName.toLowerCase()
                    },
                    n: function (e, n, t) {
                        var r = h && d[n];
                        if (!r && a)
                            a(e).bind(n, t);
                        else if (r || "function" != typeof e.addEventListener)
                            if ("undefined" != typeof e.attachEvent) {
                                var i = function (n) {
                                    t.call(e, n)
                                },
                                        o = "on" + n;
                                e.attachEvent(o, i);
                                p.a.w.da(e, function () {
                                    e.detachEvent(o, i)
                                })
                            } else
                                throw Error("Browser doesn't support addEventListener or attachEvent");
                        else
                            e.addEventListener(n, t, !1)
                    },
                    oa: function (e, r) {
                        if (!e || !e.nodeType)
                            throw Error("element must be a DOM node when calling triggerEvent");
                        var i;
                        "input" === p.a.t(e) && e.type && "click" == r.toLowerCase() ? (i = e.type, i = "checkbox" == i || "radio" == i) : i = !1;
                        if (a && !i)
                            a(e).trigger(r);
                        else if ("function" == typeof t.createEvent)
                            if ("function" == typeof e.dispatchEvent)
                                i = t.createEvent(l[r] || "HTMLEvents"), i.initEvent(r, !0, !0, n, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e), e.dispatchEvent(i);
                            else
                                throw Error("The supplied element doesn't support dispatchEvent");
                        else if (i && e.click)
                            e.click();
                        else if ("undefined" != typeof e.fireEvent)
                            e.fireEvent("on" + r);
                        else
                            throw Error("Browser doesn't support triggering events")
                    },
                    c: function (e) {
                        return p.C(e) ? e() : e
                    },
                    Xa: function (e) {
                        return p.C(e) ? e.v() : e
                    },
                    Ba: function (e, n, t) {
                        if (n) {
                            var r = /\S+/g,
                                    a = e.className.match(r) || [];
                            p.a.u(n.match(r), function (e) {
                                p.a.ea(a, e, t)
                            });
                            e.className = a.join(" ")
                        }
                    },
                    bb: function (n, t) {
                        var r = p.a.c(t);
                        if (null === r || r === e)
                            r = "";
                        var a = p.f.firstChild(n);
                        !a || 3 != a.nodeType || p.f.nextSibling(a) ? p.f.T(n, [n.ownerDocument.createTextNode(r)]) : a.data = r;
                        p.a.fc(n)
                    },
                    Mb: function (e, n) {
                        e.name = n;
                        if (7 >= h)
                            try {
                                e.mergeAttributes(t.createElement("<input name='" + e.name + "'/>"), !1)
                            } catch (r) {
                            }
                    },
                    fc: function (e) {
                        9 <= h && (e = 1 == e.nodeType ? e : e.parentNode, e.style && (e.style.zoom = e.style.zoom))
                    },
                    dc: function (e) {
                        if (h) {
                            var n = e.style.width;
                            e.style.width = 0;
                            e.style.width = n
                        }
                    },
                    sc: function (e, n) {
                        e = p.a.c(e);
                        n = p.a.c(n);
                        for (var t = [], r = e; r <= n; r++)
                            t.push(r);
                        return t
                    },
                    S: function (e) {
                        for (var n = [], t = 0, r = e.length; t < r; t++)
                            n.push(e[t]);
                        return n
                    },
                    yc: 6 === h,
                    zc: 7 === h,
                    L: h,
                    xb: function (e, n) {
                        for (var t = p.a.S(e.getElementsByTagName("input")).concat(p.a.S(e.getElementsByTagName("textarea"))), r = "string" == typeof n ? function (e) {
                            return e.name === n
                        } : function (e) {
                            return n.test(e.name)
                        }, a = [], i = t.length - 1; 0 <= i; i--)
                            r(t[i]) && a.push(t[i]);
                        return a
                    },
                    pc: function (e) {
                        return "string" == typeof e && (e = p.a.cb(e)) ? i && i.parse ? i.parse(e) : new Function("return " + e)() : null
                    },
                    eb: function (e, n, t) {
                        if (!i || !i.stringify)
                            throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return i.stringify(p.a.c(e), n, t)
                    },
                    qc: function (e, n, r) {
                        r = r || {};
                        var a = r.params || {},
                                i = r.includeFields || this.vb,
                                u = e;
                        if ("object" == typeof e && "form" === p.a.t(e))
                            for (var u = e.action, c = i.length - 1; 0 <= c; c--)
                                for (var s = p.a.xb(e, i[c]), f = s.length - 1; 0 <= f; f--)
                                    a[s[f].name] = s[f].value;
                        n = p.a.c(n);
                        var l = t.createElement("form");
                        l.style.display = "none";
                        l.action = u;
                        l.method = "post";
                        for (var d in n)
                            e = t.createElement("input"), e.type = "hidden", e.name = d, e.value = p.a.eb(p.a.c(n[d])), l.appendChild(e);
                        o(a, function (e, n) {
                            var r = t.createElement("input");
                            r.type = "hidden";
                            r.name = e;
                            r.value = n;
                            l.appendChild(r)
                        });
                        t.body.appendChild(l);
                        r.submitter ? r.submitter(l) : l.submit();
                        setTimeout(function () {
                            l.parentNode.removeChild(l)
                        }, 0)
                    }
                }
            }();
            p.b("utils", p.a);
            p.b("utils.arrayForEach", p.a.u);
            p.b("utils.arrayFirst", p.a.qb);
            p.b("utils.arrayFilter", p.a.ta);
            p.b("utils.arrayGetDistinctValues", p.a.rb);
            p.b("utils.arrayIndexOf", p.a.m);
            p.b("utils.arrayMap", p.a.Da);
            p.b("utils.arrayPushAll", p.a.ga);
            p.b("utils.arrayRemoveItem", p.a.ua);
            p.b("utils.extend", p.a.extend);
            p.b("utils.fieldsIncludedWithJsonPost", p.a.vb);
            p.b("utils.getFormFields", p.a.xb);
            p.b("utils.peekObservable", p.a.Xa);
            p.b("utils.postJson", p.a.qc);
            p.b("utils.parseJson", p.a.pc);
            p.b("utils.registerEventHandler", p.a.n);
            p.b("utils.stringifyJson", p.a.eb);
            p.b("utils.range", p.a.sc);
            p.b("utils.toggleDomNodeCssClass", p.a.Ba);
            p.b("utils.triggerEvent", p.a.oa);
            p.b("utils.unwrapObservable", p.a.c);
            p.b("utils.objectForEach", p.a.G);
            p.b("utils.addOrRemoveItem", p.a.ea);
            p.b("unwrap", p.a.c);
            Function.prototype.bind || (Function.prototype.bind = function (e) {
                var n = this,
                        t = Array.prototype.slice.call(arguments);
                e = t.shift();
                return function () {
                    return n.apply(e, t.concat(Array.prototype.slice.call(arguments)))
                }
            });
            p.a.e = new function () {
                function n(n, i) {
                    var o = n[r];
                    if (!o || "null" === o || !a[o]) {
                        if (!i)
                            return e;
                        o = n[r] = "ko" + t++;
                        a[o] = {}
                    }
                    return a[o]
                }
                var t = 0,
                        r = "__ko__" + (new Date).getTime(),
                        a = {};
                return {
                    get: function (t, r) {
                        var a = n(t, !1);
                        return a === e ? e : a[r]
                    },
                    set: function (t, r, a) {
                        if (a !== e || n(t, !1) !== e)
                            n(t, !0)[r] = a
                    },
                    clear: function (e) {
                        var n = e[r];
                        return n ? (delete a[n], e[r] = null, !0) : !1
                    },
                    F: function () {
                        return t++ + r
                    }
                }
            };
            p.b("utils.domData", p.a.e);
            p.b("utils.domData.clear", p.a.e.clear);
            p.a.w = new function () {
                function n(n, t) {
                    var a = p.a.e.get(n, r);
                    a === e && t && (a = [], p.a.e.set(n, r, a));
                    return a
                }

                function t(e) {
                    var r = n(e, !1);
                    if (r)
                        for (var r = r.slice(0), a = 0; a < r.length; a++)
                            r[a](e);
                    p.a.e.clear(e);
                    p.a.w.cleanExternalData(e);
                    if (o[e.nodeType])
                        for (r = e.firstChild; e = r; )
                            r = e.nextSibling, 8 === e.nodeType && t(e)
                }
                var r = p.a.e.F(),
                        i = {
                            1: !0,
                            8: !0,
                            9: !0
                        },
                        o = {
                            1: !0,
                            9: !0
                        };
                return {
                    da: function (e, t) {
                        if ("function" != typeof t)
                            throw Error("Callback must be a function");
                        n(e, !0).push(t)
                    },
                    Kb: function (t, a) {
                        var i = n(t, !1);
                        i && (p.a.ua(i, a), 0 == i.length && p.a.e.set(t, r, e))
                    },
                    R: function (e) {
                        if (i[e.nodeType] && (t(e), o[e.nodeType])) {
                            var n = [];
                            p.a.ga(n, e.getElementsByTagName("*"));
                            for (var r = 0, a = n.length; r < a; r++)
                                t(n[r])
                        }
                        return e
                    },
                    removeNode: function (e) {
                        p.R(e);
                        e.parentNode && e.parentNode.removeChild(e)
                    },
                    cleanExternalData: function (e) {
                        a && "function" == typeof a.cleanData && a.cleanData([e])
                    }
                }
            };
            p.R = p.a.w.R;
            p.removeNode = p.a.w.removeNode;
            p.b("cleanNode", p.R);
            p.b("removeNode", p.removeNode);
            p.b("utils.domNodeDisposal", p.a.w);
            p.b("utils.domNodeDisposal.addDisposeCallback", p.a.w.da);
            p.b("utils.domNodeDisposal.removeDisposeCallback", p.a.w.Kb);
            (function () {
                p.a.ba = function (e) {
                    var r;
                    if (a)
                        if (a.parseHTML)
                            r = a.parseHTML(e) || [];
                        else {
                            if ((r = a.clean([e])) && r[0]) {
                                for (e = r[0]; e.parentNode && 11 !== e.parentNode.nodeType; )
                                    e = e.parentNode;
                                e.parentNode && e.parentNode.removeChild(e)
                            }
                        }
                    else {
                        var i = p.a.cb(e).toLowerCase();
                        r = t.createElement("div");
                        i = i.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !i.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!i.indexOf("<td") || !i.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
                        e = "ignored<div>" + i[1] + e + i[2] + "</div>";
                        for ("function" == typeof n.innerShiv ? r.appendChild(n.innerShiv(e)) : r.innerHTML = e; i[0]--; )
                            r = r.lastChild;
                        r = p.a.S(r.lastChild.childNodes)
                    }
                    return r
                };
                p.a.$a = function (n, t) {
                    p.a.Ka(n);
                    t = p.a.c(t);
                    if (null !== t && t !== e)
                        if ("string" != typeof t && (t = t.toString()), a)
                            a(n).html(t);
                        else
                            for (var r = p.a.ba(t), i = 0; i < r.length; i++)
                                n.appendChild(r[i])
                }
            })();
            p.b("utils.parseHtmlFragment", p.a.ba);
            p.b("utils.setHtml", p.a.$a);
            p.D = function () {
                function n(e, t) {
                    if (e)
                        if (8 == e.nodeType) {
                            var r = p.D.Gb(e.nodeValue);
                            null != r && t.push({
                                bc: e,
                                mc: r
                            })
                        } else if (1 == e.nodeType)
                            for (var r = 0, a = e.childNodes, i = a.length; r < i; r++)
                                n(a[r], t)
                }
                var t = {};
                return {
                    Ua: function (e) {
                        if ("function" != typeof e)
                            throw Error("You can only pass a function to ko.memoization.memoize()");
                        var n = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        t[n] = e;
                        return "<!--[ko_memo:" + n + "]-->"
                    },
                    Rb: function (n, r) {
                        var a = t[n];
                        if (a === e)
                            throw Error("Couldn't find any memo with ID " + n + ". Perhaps it's already been unmemoized.");
                        try {
                            return a.apply(null, r || []), !0
                        } finally {
                            delete t[n]
                        }
                    },
                    Sb: function (e, t) {
                        var r = [];
                        n(e, r);
                        for (var a = 0, i = r.length; a < i; a++) {
                            var o = r[a].bc,
                                    u = [o];
                            t && p.a.ga(u, t);
                            p.D.Rb(r[a].mc, u);
                            o.nodeValue = "";
                            o.parentNode && o.parentNode.removeChild(o)
                        }
                    },
                    Gb: function (e) {
                        return (e = e.match(/^\[ko_memo\:(.*?)\]$/)) ? e[1] : null
                    }
                }
            }();
            p.b("memoization", p.D);
            p.b("memoization.memoize", p.D.Ua);
            p.b("memoization.unmemoize", p.D.Rb);
            p.b("memoization.parseMemoText", p.D.Gb);
            p.b("memoization.unmemoizeDomNodeAndDescendants", p.D.Sb);
            p.La = {
                throttle: function (e, n) {
                    e.throttleEvaluation = n;
                    var t = null;
                    return p.j({
                        read: e,
                        write: function (r) {
                            clearTimeout(t);
                            t = setTimeout(function () {
                                e(r)
                            }, n)
                        }
                    })
                },
                rateLimit: function (e, n) {
                    var t, r, a;
                    "number" == typeof n ? t = n : (t = n.timeout, r = n.method);
                    a = "notifyWhenChangesStop" == r ? f : s;
                    e.Ta(function (e) {
                        return a(e, t)
                    })
                },
                notify: function (e, n) {
                    e.equalityComparer = "always" == n ? null : c
                }
            };
            var d = {
                undefined: 1,
                "boolean": 1,
                number: 1,
                string: 1
            };
            p.b("extenders", p.La);
            p.Pb = function (e, n, t) {
                this.target = e;
                this.wa = n;
                this.ac = t;
                this.Cb = !1;
                p.A(this, "dispose", this.K)
            };
            p.Pb.prototype.K = function () {
                this.Cb = !0;
                this.ac()
            };
            p.P = function () {
                p.a.Aa(this, p.P.fn);
                this.M = {}
            };
            var h = "change",
                    b = {
                        U: function (e, n, t) {
                            var r = this;
                            t = t || h;
                            var a = new p.Pb(r, n ? e.bind(n) : e, function () {
                                p.a.ua(r.M[t], a);
                                r.nb && r.nb()
                            });
                            r.va && r.va(t);
                            r.M[t] || (r.M[t] = []);
                            r.M[t].push(a);
                            return a
                        },
                        notifySubscribers: function (e, n) {
                            n = n || h;
                            if (this.Ab(n))
                                try {
                                    p.k.Ea();
                                    for (var t = this.M[n].slice(0), r = 0, a; a = t[r]; ++r)
                                        a.Cb || a.wa(e)
                                } finally {
                                    p.k.end()
                                }
                        },
                        Ta: function (e) {
                            var n = this,
                                    t = p.C(n),
                                    r, a, i;
                            n.qa || (n.qa = n.notifySubscribers, n.notifySubscribers = function (e, t) {
                                t && t !== h ? "beforeChange" === t ? n.kb(e) : n.qa(e, t) : n.lb(e)
                            });
                            var o = e(function () {
                                t && i === n && (i = n());
                                r = !1;
                                n.Pa(a, i) && n.qa(a = i)
                            });
                            n.lb = function (e) {
                                r = !0;
                                i = e;
                                o()
                            };
                            n.kb = function (e) {
                                r || (a = e, n.qa(e, "beforeChange"))
                            }
                        },
                        Ab: function (e) {
                            return this.M[e] && this.M[e].length
                        },
                        yb: function () {
                            var e = 0;
                            p.a.G(this.M, function (n, t) {
                                e += t.length
                            });
                            return e
                        },
                        Pa: function (e, n) {
                            return !this.equalityComparer || !this.equalityComparer(e, n)
                        },
                        extend: function (e) {
                            var n = this;
                            e && p.a.G(e, function (e, t) {
                                var r = p.La[e];
                                "function" == typeof r && (n = r(n, t) || n)
                            });
                            return n
                        }
                    };
            p.A(b, "subscribe", b.U);
            p.A(b, "extend", b.extend);
            p.A(b, "getSubscriptionsCount", b.yb);
            p.a.xa && p.a.za(b, Function.prototype);
            p.P.fn = b;
            p.Db = function (e) {
                return null != e && "function" == typeof e.U && "function" == typeof e.notifySubscribers
            };
            p.b("subscribable", p.P);
            p.b("isSubscribable", p.Db);
            p.Y = p.k = function () {
                function e(e) {
                    t.push(r);
                    r = e
                }

                function n() {
                    r = t.pop()
                }
                var t = [],
                        r, a = 0;
                return {
                    Ea: e,
                    end: n,
                    Jb: function (e) {
                        if (r) {
                            if (!p.Db(e))
                                throw Error("Only subscribable things can act as dependencies");
                            r.wa(e, e.Vb || (e.Vb = ++a))
                        }
                    },
                    B: function (t, r, a) {
                        try {
                            return e(), t.apply(r, a || [])
                        } finally {
                            n()
                        }
                    },
                    la: function () {
                        if (r)
                            return r.s.la()
                    },
                    ma: function () {
                        if (r)
                            return r.ma
                    }
                }
            }();
            p.b("computedContext", p.Y);
            p.b("computedContext.getDependenciesCount", p.Y.la);
            p.b("computedContext.isInitial", p.Y.ma);
            p.b("computedContext.isSleeping", p.Y.Ac);
            p.p = function (e) {
                function n() {
                    if (0 < arguments.length)
                        return n.Pa(t, arguments[0]) && (n.X(), t = arguments[0], n.W()), this;
                    p.k.Jb(n);
                    return t
                }
                var t = e;
                p.P.call(n);
                p.a.Aa(n, p.p.fn);
                n.v = function () {
                    return t
                };
                n.W = function () {
                    n.notifySubscribers(t)
                };
                n.X = function () {
                    n.notifySubscribers(t, "beforeChange")
                };
                p.A(n, "peek", n.v);
                p.A(n, "valueHasMutated", n.W);
                p.A(n, "valueWillMutate", n.X);
                return n
            };
            p.p.fn = {
                equalityComparer: c
            };
            var m = p.p.rc = "__ko_proto__";
            p.p.fn[m] = p.p;
            p.a.xa && p.a.za(p.p.fn, p.P.fn);
            p.Ma = function (n, t) {
                return null === n || n === e || n[m] === e ? !1 : n[m] === t ? !0 : p.Ma(n[m], t)
            };
            p.C = function (e) {
                return p.Ma(e, p.p)
            };
            p.Ra = function (e) {
                return "function" == typeof e && e[m] === p.p || "function" == typeof e && e[m] === p.j && e.hc ? !0 : !1
            };
            p.b("observable", p.p);
            p.b("isObservable", p.C);
            p.b("isWriteableObservable", p.Ra);
            p.b("isWritableObservable", p.Ra);
            p.aa = function (e) {
                e = e || [];
                if ("object" != typeof e || !("length" in e))
                    throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                e = p.p(e);
                p.a.Aa(e, p.aa.fn);
                return e.extend({
                    trackArrayChanges: !0
                })
            };
            p.aa.fn = {
                remove: function (e) {
                    for (var n = this.v(), t = [], r = "function" != typeof e || p.C(e) ? function (n) {
                        return n === e
                    } : e, a = 0; a < n.length; a++) {
                        var i = n[a];
                        r(i) && (0 === t.length && this.X(), t.push(i), n.splice(a, 1), a--)
                    }
                    t.length && this.W();
                    return t
                },
                removeAll: function (n) {
                    if (n === e) {
                        var t = this.v(),
                                r = t.slice(0);
                        this.X();
                        t.splice(0, t.length);
                        this.W();
                        return r
                    }
                    return n ? this.remove(function (e) {
                        return 0 <= p.a.m(n, e)
                    }) : []
                },
                destroy: function (e) {
                    var n = this.v(),
                            t = "function" != typeof e || p.C(e) ? function (n) {
                        return n === e
                    } : e;
                    this.X();
                    for (var r = n.length - 1; 0 <= r; r--)
                        t(n[r]) && (n[r]._destroy = !0);
                    this.W()
                },
                destroyAll: function (n) {
                    return n === e ? this.destroy(function () {
                        return !0
                    }) : n ? this.destroy(function (e) {
                        return 0 <= p.a.m(n, e)
                    }) : []
                },
                indexOf: function (e) {
                    var n = this();
                    return p.a.m(n, e)
                },
                replace: function (e, n) {
                    var t = this.indexOf(e);
                    0 <= t && (this.X(), this.v()[t] = n, this.W())
                }
            };
            p.a.u("pop push reverse shift sort splice unshift".split(" "), function (e) {
                p.aa.fn[e] = function () {
                    var n = this.v();
                    this.X();
                    this.sb(n, e, arguments);
                    n = n[e].apply(n, arguments);
                    this.W();
                    return n
                }
            });
            p.a.u(["slice"], function (e) {
                p.aa.fn[e] = function () {
                    var n = this();
                    return n[e].apply(n, arguments)
                }
            });
            p.a.xa && p.a.za(p.aa.fn, p.p.fn);
            p.b("observableArray", p.aa);
            var g = "arrayChange";
            p.La.trackArrayChanges = function (e) {
                function n() {
                    if (!t) {
                        t = !0;
                        var n = e.notifySubscribers;
                        e.notifySubscribers = function (e, t) {
                            t && t !== h || ++a;
                            return n.apply(this, arguments)
                        };
                        var i = [].concat(e.v() || []);
                        r = null;
                        e.U(function (n) {
                            n = [].concat(n || []);
                            if (e.Ab(g)) {
                                var t;
                                if (!r || 1 < a)
                                    r = p.a.Fa(i, n, {
                                        sparse: !0
                                    });
                                t = r;
                                t.length && e.notifySubscribers(t, g)
                            }
                            i = n;
                            r = null;
                            a = 0
                        })
                    }
                }
                if (!e.sb) {
                    var t = !1,
                            r = null,
                            a = 0,
                            i = e.U;
                    e.U = e.subscribe = function (e, t, r) {
                        r === g && n();
                        return i.apply(this, arguments)
                    };
                    e.sb = function (e, n, i) {
                        function o(e, n, t) {
                            return u[u.length] = {
                                status: e,
                                value: n,
                                index: t
                            }
                        }
                        if (t && !a) {
                            var u = [],
                                    c = e.length,
                                    s = i.length,
                                    f = 0;
                            switch (n) {
                                case "push":
                                    f = c;
                                case "unshift":
                                    for (n = 0; n < s; n++)
                                        o("added", i[n], f + n);
                                    break;
                                case "pop":
                                    f = c - 1;
                                case "shift":
                                    c && o("deleted", e[f], f);
                                    break;
                                case "splice":
                                    n = Math.min(Math.max(0, 0 > i[0] ? c + i[0] : i[0]), c);
                                    for (var c = 1 === s ? c : Math.min(n + (i[1] || 0), c), s = n + s - 2, f = Math.max(c, s), l = [], d = [], h = 2; n < f; ++n, ++h)
                                        n < c && d.push(o("deleted", e[n], n)), n < s && l.push(o("added", i[h], n));
                                    p.a.wb(d, l);
                                    break;
                                default:
                                    return
                            }
                            r = u
                        }
                    }
                }
            };
            p.s = p.j = function (n, t, r) {
                function a() {
                    p.a.G(C, function (e, n) {
                        n.K()
                    });
                    C = {}
                }

                function i() {
                    a();
                    N = 0;
                    m = !0;
                    d = !1
                }

                function o() {
                    var e = c.throttleEvaluation;
                    e && 0 <= e ? (clearTimeout(S), S = setTimeout(u, e)) : c.ib ? c.ib() : u()
                }

                function u(n) {
                    if (h) {
                        if (v)
                            throw Error("A 'pure' computed must not be called recursively")
                    } else if (!m) {
                        if (E && E()) {
                            if (!b) {
                                T();
                                return
                            }
                        } else
                            b = !1;
                        h = !0;
                        if (y)
                            try {
                                var r = {};
                                p.k.Ea({
                                    wa: function (e, n) {
                                        r[n] || (r[n] = 1, ++N)
                                    },
                                    s: c,
                                    ma: e
                                });
                                N = 0;
                                l = g.call(t)
                            } finally {
                                p.k.end(), h = !1
                            }
                        else
                            try {
                                var a = C,
                                        i = N;
                                p.k.Ea({
                                    wa: function (e, n) {
                                        m || (i && a[n] ? (C[n] = a[n], ++N, delete a[n], --i) : C[n] || (C[n] = e.U(o), ++N))
                                    },
                                    s: c,
                                    ma: v ? e : !N
                                });
                                C = {};
                                N = 0;
                                try {
                                    var u = t ? g.call(t) : g()
                                } finally {
                                    p.k.end(), i && p.a.G(a, function (e, n) {
                                        n.K()
                                    }), d = !1
                                }
                                c.Pa(l, u) && (c.notifySubscribers(l, "beforeChange"), l = u, !0 !== n && c.notifySubscribers(l))
                            } finally {
                                h = !1
                            }
                        N || T()
                    }
                }

                function c() {
                    if (0 < arguments.length) {
                        if ("function" === typeof w)
                            w.apply(t, arguments);
                        else
                            throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this
                    }
                    p.k.Jb(c);
                    d && u(!0);
                    return l
                }

                function s() {
                    d && !N && u(!0);
                    return l
                }

                function f() {
                    return d || 0 < N
                }
                var l, d = !0,
                        h = !1,
                        b = !1,
                        m = !1,
                        g = n,
                        v = !1,
                        y = !1;
                g && "object" == typeof g ? (r = g, g = r.read) : (r = r || {}, g || (g = r.read));
                if ("function" != typeof g)
                    throw Error("Pass a function that returns the value of the ko.computed");
                var w = r.write,
                        x = r.disposeWhenNodeIsRemoved || r.o || null,
                        k = r.disposeWhen || r.Ia,
                        E = k,
                        T = i,
                        C = {},
                        N = 0,
                        S = null;
                t || (t = r.owner);
                p.P.call(c);
                p.a.Aa(c, p.j.fn);
                c.v = s;
                c.la = function () {
                    return N
                };
                c.hc = "function" === typeof r.write;
                c.K = function () {
                    T()
                };
                c.Z = f;
                var _ = c.Ta;
                c.Ta = function (e) {
                    _.call(c, e);
                    c.ib = function () {
                        c.kb(l);
                        d = !0;
                        c.lb(c)
                    }
                };
                r.pure ? (y = v = !0, c.va = function () {
                    y && (y = !1, u(!0))
                }, c.nb = function () {
                    c.yb() || (a(), y = d = !0)
                }) : r.deferEvaluation && (c.va = function () {
                    s();
                    delete c.va
                });
                p.A(c, "peek", c.v);
                p.A(c, "dispose", c.K);
                p.A(c, "isActive", c.Z);
                p.A(c, "getDependenciesCount", c.la);
                x && (b = !0, x.nodeType && (E = function () {
                    return !p.a.Ja(x) || k && k()
                }));
                y || r.deferEvaluation || u();
                x && f() && x.nodeType && (T = function () {
                    p.a.w.Kb(x, T);
                    i()
                }, p.a.w.da(x, T));
                return c
            };
            p.jc = function (e) {
                return p.Ma(e, p.j)
            };
            b = p.p.rc;
            p.j[b] = p.p;
            p.j.fn = {
                equalityComparer: c
            };
            p.j.fn[b] = p.j;
            p.a.xa && p.a.za(p.j.fn, p.P.fn);
            p.b("dependentObservable", p.j);
            p.b("computed", p.j);
            p.b("isComputed", p.jc);
            p.Ib = function (e, n) {
                if ("function" === typeof e)
                    return p.s(e, n, {
                        pure: !0
                    });
                e = p.a.extend({}, e);
                e.pure = !0;
                return p.s(e, n)
            };
            p.b("pureComputed", p.Ib);
            (function () {
                function n(a, i, o) {
                    o = o || new r;
                    a = i(a);
                    if ("object" != typeof a || null === a || a === e || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean)
                        return a;
                    var u = a instanceof Array ? [] : {};
                    o.save(a, u);
                    t(a, function (t) {
                        var r = i(a[t]);
                        switch (typeof r) {
                            case "boolean":
                            case "number":
                            case "string":
                            case "function":
                                u[t] = r;
                                break;
                            case "object":
                            case "undefined":
                                var c = o.get(r);
                                u[t] = c !== e ? c : n(r, i, o)
                        }
                    });
                    return u
                }

                function t(e, n) {
                    if (e instanceof Array) {
                        for (var t = 0; t < e.length; t++)
                            n(t);
                        "function" == typeof e.toJSON && n("toJSON")
                    } else
                        for (t in e)
                            n(t)
                }

                function r() {
                    this.keys = [];
                    this.hb = []
                }
                p.Qb = function (e) {
                    if (0 == arguments.length)
                        throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return n(e, function (e) {
                        for (var n = 0; p.C(e) && 10 > n; n++)
                            e = e();
                        return e
                    })
                };
                p.toJSON = function (e, n, t) {
                    e = p.Qb(e);
                    return p.a.eb(e, n, t)
                };
                r.prototype = {
                    save: function (e, n) {
                        var t = p.a.m(this.keys, e);
                        0 <= t ? this.hb[t] = n : (this.keys.push(e), this.hb.push(n))
                    },
                    get: function (n) {
                        n = p.a.m(this.keys, n);
                        return 0 <= n ? this.hb[n] : e
                    }
                }
            })();
            p.b("toJS", p.Qb);
            p.b("toJSON", p.toJSON);
            (function () {
                p.i = {
                    q: function (n) {
                        switch (p.a.t(n)) {
                            case "option":
                                return !0 === n.__ko__hasDomDataOptionValue__ ? p.a.e.get(n, p.d.options.Va) : 7 >= p.a.L ? n.getAttributeNode("value") && n.getAttributeNode("value").specified ? n.value : n.text : n.value;
                            case "select":
                                return 0 <= n.selectedIndex ? p.i.q(n.options[n.selectedIndex]) : e;
                            default:
                                return n.value
                        }
                    },
                    ca: function (n, t, r) {
                        switch (p.a.t(n)) {
                            case "option":
                                switch (typeof t) {
                                    case "string":
                                        p.a.e.set(n, p.d.options.Va, e);
                                        "__ko__hasDomDataOptionValue__" in n && delete n.__ko__hasDomDataOptionValue__;
                                        n.value = t;
                                        break;
                                    default:
                                        p.a.e.set(n, p.d.options.Va, t), n.__ko__hasDomDataOptionValue__ = !0, n.value = "number" === typeof t ? t : ""
                                }
                                break;
                            case "select":
                                if ("" === t || null === t)
                                    t = e;
                                for (var a = -1, i = 0, o = n.options.length, u; i < o; ++i)
                                    if (u = p.i.q(n.options[i]), u == t || "" == u && t === e) {
                                        a = i;
                                        break
                                    }
                                if (r || 0 <= a || t === e && 1 < n.size)
                                    n.selectedIndex = a;
                                break;
                            default:
                                if (null === t || t === e)
                                    t = "";
                                n.value = t
                        }
                    }
                }
            })();
            p.b("selectExtensions", p.i);
            p.b("selectExtensions.readValue", p.i.q);
            p.b("selectExtensions.writeValue", p.i.ca);
            p.h = function () {
                function e(e) {
                    e = p.a.cb(e);
                    123 === e.charCodeAt(0) && (e = e.slice(1, -1));
                    var n = [],
                            t = e.match(r),
                            o, u, c = 0;
                    if (t) {
                        t.push(",");
                        for (var s = 0, f; f = t[s]; ++s) {
                            var l = f.charCodeAt(0);
                            if (44 === l) {
                                if (0 >= c) {
                                    o && n.push(u ? {
                                        key: o,
                                        value: u.join("")
                                    } : {
                                        unknown: o
                                    });
                                    o = u = c = 0;
                                    continue
                                }
                            } else if (58 === l) {
                                if (!u)
                                    continue
                            } else if (47 === l && s && 1 < f.length)
                                (l = t[s - 1].match(a)) && !i[l[0]] && (e = e.substr(e.indexOf(f) + 1), t = e.match(r), t.push(","), s = -1, f = "/");
                            else if (40 === l || 123 === l || 91 === l)
                                ++c;
                            else if (41 === l || 125 === l || 93 === l)
                                --c;
                            else if (!o && !u) {
                                o = 34 === l || 39 === l ? f.slice(1, -1) : f;
                                continue
                            }
                            u ? u.push(f) : u = [f]
                        }
                    }
                    return n
                }
                var n = ["true", "false", "null", "undefined"],
                        t = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                        r = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                        a = /[\])"'A-Za-z0-9_$]+$/,
                        i = {
                            "in": 1,
                            "return": 1,
                            "typeof": 1
                        },
                        o = {};
                return {
                    ha: [],
                    V: o,
                    Wa: e,
                    ya: function (r, a) {
                        function i(e, r) {
                            var a;
                            if (!f) {
                                var l = p.getBindingHandler(e);
                                if (l && l.preprocess && !(r = l.preprocess(r, e, i)))
                                    return;
                                if (l = o[e])
                                    a = r, 0 <= p.a.m(n, a) ? a = !1 : (l = a.match(t), a = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : a), l = a;
                                l && c.push("'" + e + "':function(_z){" + a + "=_z}")
                            }
                            s && (r = "function(){return " + r + " }");
                            u.push("'" + e + "':" + r)
                        }
                        a = a || {};
                        var u = [],
                                c = [],
                                s = a.valueAccessors,
                                f = a.bindingParams,
                                l = "string" === typeof r ? e(r) : r;
                        p.a.u(l, function (e) {
                            i(e.key || e.unknown, e.value)
                        });
                        c.length && i("_ko_property_writers", "{" + c.join(",") + " }");
                        return u.join(",")
                    },
                    lc: function (e, n) {
                        for (var t = 0; t < e.length; t++)
                            if (e[t].key == n)
                                return !0;
                        return !1
                    },
                    pa: function (e, n, t, r, a) {
                        if (e && p.C(e))
                            !p.Ra(e) || a && e.v() === r || e(r);
                        else if ((e = n.get("_ko_property_writers")) && e[t])
                            e[t](r)
                    }
                }
            }();
            p.b("expressionRewriting", p.h);
            p.b("expressionRewriting.bindingRewriteValidators", p.h.ha);
            p.b("expressionRewriting.parseObjectLiteral", p.h.Wa);
            p.b("expressionRewriting.preProcessBindings", p.h.ya);
            p.b("expressionRewriting._twoWayBindings", p.h.V);
            p.b("jsonExpressionRewriting", p.h);
            p.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", p.h.ya);
            (function () {
                function e(e) {
                    return 8 == e.nodeType && o.test(i ? e.text : e.nodeValue)
                }

                function n(e) {
                    return 8 == e.nodeType && u.test(i ? e.text : e.nodeValue)
                }

                function r(t, r) {
                    for (var a = t, i = 1, o = []; a = a.nextSibling; ) {
                        if (n(a) && (i--, 0 === i))
                            return o;
                        o.push(a);
                        e(a) && i++
                    }
                    if (!r)
                        throw Error("Cannot find closing comment tag to match: " + t.nodeValue);
                    return null
                }

                function a(e, n) {
                    var t = r(e, n);
                    return t ? 0 < t.length ? t[t.length - 1].nextSibling : e.nextSibling : null
                }
                var i = t && "<!--test-->" === t.createComment("test").text,
                        o = i ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                        u = i ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                        c = {
                            ul: !0,
                            ol: !0
                        };
                p.f = {
                    Q: {},
                    childNodes: function (n) {
                        return e(n) ? r(n) : n.childNodes
                    },
                    ja: function (n) {
                        if (e(n)) {
                            n = p.f.childNodes(n);
                            for (var t = 0, r = n.length; t < r; t++)
                                p.removeNode(n[t])
                        } else
                            p.a.Ka(n)
                    },
                    T: function (n, t) {
                        if (e(n)) {
                            p.f.ja(n);
                            for (var r = n.nextSibling, a = 0, i = t.length; a < i; a++)
                                r.parentNode.insertBefore(t[a], r)
                        } else
                            p.a.T(n, t)
                    },
                    Hb: function (n, t) {
                        e(n) ? n.parentNode.insertBefore(t, n.nextSibling) : n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t)
                    },
                    Bb: function (n, t, r) {
                        r ? e(n) ? n.parentNode.insertBefore(t, r.nextSibling) : r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : p.f.Hb(n, t)
                    },
                    firstChild: function (t) {
                        return e(t) ? !t.nextSibling || n(t.nextSibling) ? null : t.nextSibling : t.firstChild
                    },
                    nextSibling: function (t) {
                        e(t) && (t = a(t));
                        return t.nextSibling && n(t.nextSibling) ? null : t.nextSibling
                    },
                    gc: e,
                    xc: function (e) {
                        return (e = (i ? e.text : e.nodeValue).match(o)) ? e[1] : null
                    },
                    Fb: function (t) {
                        if (c[p.a.t(t)]) {
                            var r = t.firstChild;
                            if (r) {
                                do
                                    if (1 === r.nodeType) {
                                        var i;
                                        i = r.firstChild;
                                        var o = null;
                                        if (i) {
                                            do
                                                if (o)
                                                    o.push(i);
                                                else if (e(i)) {
                                                    var u = a(i, !0);
                                                    u ? i = u : o = [i]
                                                } else
                                                    n(i) && (o = [i]);
                                            while (i = i.nextSibling)
                                        }
                                        if (i = o)
                                            for (o = r.nextSibling, u = 0; u < i.length; u++)
                                                o ? t.insertBefore(i[u], o) : t.appendChild(i[u])
                                    }
                                while (r = r.nextSibling)
                            }
                        }
                    }
                }
            })();
            p.b("virtualElements", p.f);
            p.b("virtualElements.allowedBindings", p.f.Q);
            p.b("virtualElements.emptyNode", p.f.ja);
            p.b("virtualElements.insertAfter", p.f.Bb);
            p.b("virtualElements.prepend", p.f.Hb);
            p.b("virtualElements.setDomNodeChildren", p.f.T);
            (function () {
                p.J = function () {
                    this.Yb = {}
                };
                p.a.extend(p.J.prototype, {
                    nodeHasBindings: function (e) {
                        switch (e.nodeType) {
                            case 1:
                                return null != e.getAttribute("data-bind") || p.g.getComponentNameForNode(e);
                            case 8:
                                return p.f.gc(e);
                            default:
                                return !1
                        }
                    },
                    getBindings: function (e, n) {
                        var t = this.getBindingsString(e, n),
                                t = t ? this.parseBindingsString(t, n, e) : null;
                        return p.g.mb(t, e, n, !1)
                    },
                    getBindingAccessors: function (e, n) {
                        var t = this.getBindingsString(e, n),
                                t = t ? this.parseBindingsString(t, n, e, {
                                    valueAccessors: !0
                                }) : null;
                        return p.g.mb(t, e, n, !0)
                    },
                    getBindingsString: function (e) {
                        switch (e.nodeType) {
                            case 1:
                                return e.getAttribute("data-bind");
                            case 8:
                                return p.f.xc(e);
                            default:
                                return null
                        }
                    },
                    parseBindingsString: function (e, n, t, r) {
                        try {
                            var a = this.Yb,
                                    i = e + (r && r.valueAccessors || ""),
                                    o;
                            if (!(o = a[i])) {
                                var u, c = "with($context){with($data||{}){return{" + p.h.ya(e, r) + "}}}";
                                u = new Function("$context", "$element", c);
                                o = a[i] = u
                            }
                            return o(n, t)
                        } catch (s) {
                            throw s.message = "Unable to parse bindings.\nBindings value: " + e + "\nMessage: " + s.message, s
                        }
                    }
                });
                p.J.instance = new p.J
            })();
            p.b("bindingProvider", p.J);
            (function () {
                function t(e) {
                    return function () {
                        return e
                    }
                }

                function r(e) {
                    return e()
                }

                function i(e) {
                    return p.a.na(p.k.B(e), function (n, t) {
                        return function () {
                            return e()[t]
                        }
                    })
                }

                function o(e, n) {
                    return i(this.getBindings.bind(this, e, n))
                }

                function u(e, n, t) {
                    var r, a = p.f.firstChild(n),
                            i = p.J.instance,
                            o = i.preprocessNode;
                    if (o) {
                        for (; r = a; )
                            a = p.f.nextSibling(r), o.call(i, r);
                        a = p.f.firstChild(n)
                    }
                    for (; r = a; )
                        a = p.f.nextSibling(r), c(e, r, t)
                }

                function c(e, n, t) {
                    var r = !0,
                            a = 1 === n.nodeType;
                    a && p.f.Fb(n);
                    if (a && t || p.J.instance.nodeHasBindings(n))
                        r = f(n, null, e, t).shouldBindDescendants;
                    r && !d[p.a.t(n)] && u(e, n, !a)
                }

                function s(e) {
                    var n = [],
                            t = {},
                            r = [];
                    p.a.G(e, function a(i) {
                        if (!t[i]) {
                            var o = p.getBindingHandler(i);
                            o && (o.after && (r.push(i), p.a.u(o.after, function (n) {
                                if (e[n]) {
                                    if (-1 !== p.a.m(r, n))
                                        throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + r.join(", "));
                                    a(n)
                                }
                            }), r.length--), n.push({
                                key: i,
                                zb: o
                            }));
                            t[i] = !0
                        }
                    });
                    return n
                }

                function f(n, t, a, i) {
                    var u = p.a.e.get(n, h);
                    if (!t) {
                        if (u)
                            throw Error("You cannot apply bindings multiple times to the same element.");
                        p.a.e.set(n, h, !0)
                    }
                    !u && i && p.Ob(n, a);
                    var c;
                    if (t && "function" !== typeof t)
                        c = t;
                    else {
                        var f = p.J.instance,
                                l = f.getBindingAccessors || o,
                                d = p.j(function () {
                                    (c = t ? t(a, n) : l.call(f, n, a)) && a.I && a.I();
                                    return c
                                }, null, {
                                    o: n
                                });
                        c && d.Z() || (d = null)
                    }
                    var b;
                    if (c) {
                        var m = d ? function (e) {
                            return function () {
                                return r(d()[e])
                            }
                        } : function (e) {
                            return c[e]
                        },
                                g = function () {
                                    return p.a.na(d ? d() : c, r)
                                };
                        g.get = function (e) {
                            return c[e] && r(m(e))
                        };
                        g.has = function (e) {
                            return e in c
                        };
                        i = s(c);
                        p.a.u(i, function (t) {
                            var r = t.zb.init,
                                    i = t.zb.update,
                                    o = t.key;
                            if (8 === n.nodeType && !p.f.Q[o])
                                throw Error("The binding '" + o + "' cannot be used with virtual elements");
                            try {
                                "function" == typeof r && p.k.B(function () {
                                    var t = r(n, m(o), g, a.$data, a);
                                    if (t && t.controlsDescendantBindings) {
                                        if (b !== e)
                                            throw Error("Multiple bindings (" + b + " and " + o + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                        b = o
                                    }
                                }), "function" == typeof i && p.j(function () {
                                    i(n, m(o), g, a.$data, a)
                                }, null, {
                                    o: n
                                })
                            } catch (u) {
                                throw u.message = 'Unable to process binding "' + o + ": " + c[o] + '"\nMessage: ' + u.message, u
                            }
                        })
                    }
                    return {
                        shouldBindDescendants: b === e
                    }
                }

                function l(e) {
                    return e && e instanceof p.N ? e : new p.N(e)
                }
                p.d = {};
                var d = {
                    script: !0
                };
                p.getBindingHandler = function (e) {
                    return p.d[e]
                };
                p.N = function (n, t, r, a) {
                    var i = this,
                            o = "function" == typeof n && !p.C(n),
                            u, c = p.j(function () {
                                var e = o ? n() : n,
                                        u = p.a.c(e);
                                t ? (t.I && t.I(), p.a.extend(i, t), c && (i.I = c)) : (i.$parents = [], i.$root = u, i.ko = p);
                                i.$rawData = e;
                                i.$data = u;
                                r && (i[r] = u);
                                a && a(i, t, u);
                                return i.$data
                            }, null, {
                                Ia: function () {
                                    return u && !p.a.ob(u)
                                },
                                o: !0
                            });
                    c.Z() && (i.I = c, c.equalityComparer = null, u = [], c.Tb = function (n) {
                        u.push(n);
                        p.a.w.da(n, function (n) {
                            p.a.ua(u, n);
                            u.length || (c.K(), i.I = c = e)
                        })
                    })
                };
                p.N.prototype.createChildContext = function (e, n, t) {
                    return new p.N(e, this, n, function (e, n) {
                        e.$parentContext = n;
                        e.$parent = n.$data;
                        e.$parents = (n.$parents || []).slice(0);
                        e.$parents.unshift(e.$parent);
                        t && t(e)
                    })
                };
                p.N.prototype.extend = function (e) {
                    return new p.N(this.I || this.$data, this, null, function (n, t) {
                        n.$rawData = t.$rawData;
                        p.a.extend(n, "function" == typeof e ? e() : e)
                    })
                };
                var h = p.a.e.F(),
                        b = p.a.e.F();
                p.Ob = function (e, n) {
                    if (2 == arguments.length)
                        p.a.e.set(e, b, n), n.I && n.I.Tb(e);
                    else
                        return p.a.e.get(e, b)
                };
                p.ra = function (e, n, t) {
                    1 === e.nodeType && p.f.Fb(e);
                    return f(e, n, l(t), !0)
                };
                p.Wb = function (e, n, r) {
                    r = l(r);
                    return p.ra(e, "function" === typeof n ? i(n.bind(null, r, e)) : p.a.na(n, t), r)
                };
                p.Ca = function (e, n) {
                    1 !== n.nodeType && 8 !== n.nodeType || u(l(e), n, !0)
                };
                p.pb = function (e, t) {
                    !a && n.jQuery && (a = n.jQuery);
                    if (t && 1 !== t.nodeType && 8 !== t.nodeType)
                        throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    t = t || n.document.body;
                    c(l(e), t, !0)
                };
                p.Ha = function (n) {
                    switch (n.nodeType) {
                        case 1:
                        case 8:
                            var t = p.Ob(n);
                            if (t)
                                return t;
                            if (n.parentNode)
                                return p.Ha(n.parentNode)
                    }
                    return e
                };
                p.$b = function (n) {
                    return (n = p.Ha(n)) ? n.$data : e
                };
                p.b("bindingHandlers", p.d);
                p.b("applyBindings", p.pb);
                p.b("applyBindingsToDescendants", p.Ca);
                p.b("applyBindingAccessorsToNode", p.ra);
                p.b("applyBindingsToNode", p.Wb);
                p.b("contextFor", p.Ha);
                p.b("dataFor", p.$b)
            })();
            (function (e) {
                function n(n, r) {
                    var o = a.hasOwnProperty(n) ? a[n] : e,
                            u;
                    o || (o = a[n] = new p.P, t(n, function (e) {
                        i[n] = e;
                        delete a[n];
                        u ? o.notifySubscribers(e) : setTimeout(function () {
                            o.notifySubscribers(e)
                        }, 0)
                    }), u = !0);
                    o.U(r)
                }

                function t(e, n) {
                    r("getConfig", [e], function (t) {
                        t ? r("loadComponent", [e, t], function (e) {
                            n(e)
                        }) : n(null)
                    })
                }

                function r(n, t, a, i) {
                    i || (i = p.g.loaders.slice(0));
                    var o = i.shift();
                    if (o) {
                        var u = o[n];
                        if (u) {
                            var c = !1;
                            if (u.apply(o, t.concat(function (e) {
                                c ? a(null) : null !== e ? a(e) : r(n, t, a, i)
                            })) !== e && (c = !0, !o.suppressLoaderExceptions))
                                throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                        } else
                            r(n, t, a, i)
                    } else
                        a(null)
                }
                var a = {},
                        i = {};
                p.g = {
                    get: function (t, r) {
                        var a = i.hasOwnProperty(t) ? i[t] : e;
                        a ? setTimeout(function () {
                            r(a)
                        }, 0) : n(t, r)
                    },
                    tb: function (e) {
                        delete i[e]
                    },
                    jb: r
                };
                p.g.loaders = [];
                p.b("components", p.g);
                p.b("components.get", p.g.get);
                p.b("components.clearCachedDefinition", p.g.tb)
            })();
            (function () {
                function e(e, n, t, r) {
                    function a() {
                        0 === --u && r(i)
                    }
                    var i = {},
                            u = 2,
                            c = t.template;
                    t = t.viewModel;
                    c ? o(n, c, function (n) {
                        p.g.jb("loadTemplate", [e, n], function (e) {
                            i.template = e;
                            a()
                        })
                    }) : a();
                    t ? o(n, t, function (n) {
                        p.g.jb("loadViewModel", [e, n], function (e) {
                            i[f] = e;
                            a()
                        })
                    }) : a()
                }

                function r(e, n, t) {
                    if ("function" === typeof n)
                        t(function (e) {
                            return new n(e)
                        });
                    else if ("function" === typeof n[f])
                        t(n[f]);
                    else if ("instance" in n) {
                        var a = n.instance;
                        t(function () {
                            return a
                        })
                    } else
                        "viewModel" in n ? r(e, n.viewModel, t) : e("Unknown viewModel value: " + n)
                }

                function a(e) {
                    switch (p.a.t(e)) {
                        case "script":
                            return p.a.ba(e.text);
                        case "textarea":
                            return p.a.ba(e.value);
                        case "template":
                            if (i(e.content))
                                return p.a.ia(e.content.childNodes)
                    }
                    return p.a.ia(e.childNodes)
                }

                function i(e) {
                    return n.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType
                }

                function o(e, t, r) {
                    "string" === typeof t.require ? u || n.require ? (u || n.require)([t.require], r) : e("Uses require, but no AMD loader is present") : r(t)
                }

                function c(e) {
                    return function (n) {
                        throw Error("Component '" + e + "': " + n)
                    }
                }
                var s = {};
                p.g.tc = function (e, n) {
                    if (!n)
                        throw Error("Invalid configuration for " + e);
                    if (p.g.Qa(e))
                        throw Error("Component " + e + " is already registered");
                    s[e] = n
                };
                p.g.Qa = function (e) {
                    return e in s
                };
                p.g.wc = function (e) {
                    delete s[e];
                    p.g.tb(e)
                };
                p.g.ub = {
                    getConfig: function (e, n) {
                        n(s.hasOwnProperty(e) ? s[e] : null)
                    },
                    loadComponent: function (n, t, r) {
                        var a = c(n);
                        o(a, t, function (t) {
                            e(n, a, t, r)
                        })
                    },
                    loadTemplate: function (e, r, o) {
                        e = c(e);
                        if ("string" === typeof r)
                            o(p.a.ba(r));
                        else if (r instanceof Array)
                            o(r);
                        else if (i(r))
                            o(p.a.S(r.childNodes));
                        else if (r.element)
                            if (r = r.element, n.HTMLElement ? r instanceof HTMLElement : r && r.tagName && 1 === r.nodeType)
                                o(a(r));
                            else if ("string" === typeof r) {
                                var u = t.getElementById(r);
                                u ? o(a(u)) : e("Cannot find element with ID " + r)
                            } else
                                e("Unknown element type: " + r);
                        else
                            e("Unknown template value: " + r)
                    },
                    loadViewModel: function (e, n, t) {
                        r(c(e), n, t)
                    }
                };
                var f = "createViewModel";
                p.b("components.register", p.g.tc);
                p.b("components.isRegistered", p.g.Qa);
                p.b("components.unregister", p.g.wc);
                p.b("components.defaultLoader", p.g.ub);
                p.g.loaders.push(p.g.ub);
                p.g.Ub = s
            })();
            (function () {
                function e(e, t) {
                    var r = e.getAttribute("params");
                    if (r) {
                        var r = n.parseBindingsString(r, t, e, {
                            valueAccessors: !0,
                            bindingParams: !0
                        }),
                                r = p.a.na(r, function (n) {
                                    return p.s(n, null, {
                                        o: e
                                    })
                                }),
                                a = p.a.na(r, function (n) {
                                    return n.Z() ? p.s(function () {
                                        return p.a.c(n())
                                    }, null, {
                                        o: e
                                    }) : n.v()
                                });
                        a.hasOwnProperty("$raw") || (a.$raw = r);
                        return a
                    }
                    return {
                        $raw: {}
                    }
                }
                p.g.getComponentNameForNode = function (e) {
                    e = p.a.t(e);
                    return p.g.Qa(e) && e
                };
                p.g.mb = function (n, t, r, a) {
                    if (1 === t.nodeType) {
                        var i = p.g.getComponentNameForNode(t);
                        if (i) {
                            n = n || {};
                            if (n.component)
                                throw Error('Cannot use the "component" binding on a custom element matching a component');
                            var o = {
                                name: i,
                                params: e(t, r)
                            };
                            n.component = a ? function () {
                                return o
                            } : o
                        }
                    }
                    return n
                };
                var n = new p.J;
                9 > p.a.L && (p.g.register = function (e) {
                    return function (n) {
                        t.createElement(n);
                        return e.apply(this, arguments)
                    }
                }(p.g.register), t.createDocumentFragment = function (e) {
                    return function () {
                        var n = e(),
                                t = p.g.Ub,
                                r;
                        for (r in t)
                            t.hasOwnProperty(r) && n.createElement(r);
                        return n
                    }
                }(t.createDocumentFragment))
            })();
            (function () {
                var e = 0;
                p.d.component = {
                    init: function (n, t, r, a, i) {
                        function o() {
                            var e = u && u.dispose;
                            "function" === typeof e && e.call(u);
                            c = null
                        }
                        var u, c;
                        p.a.w.da(n, o);
                        p.s(function () {
                            var r = p.a.c(t()),
                                    a, s;
                            "string" === typeof r ? a = r : (a = p.a.c(r.name), s = p.a.c(r.params));
                            if (!a)
                                throw Error("No component name specified");
                            var f = c = ++e;
                            p.g.get(a, function (e) {
                                if (c === f) {
                                    o();
                                    if (!e)
                                        throw Error("Unknown component '" + a + "'");
                                    var t = e.template;
                                    if (!t)
                                        throw Error("Component '" + a + "' has no template");
                                    t = p.a.ia(t);
                                    p.f.T(n, t);
                                    var t = s,
                                            r = e.createViewModel;
                                    e = r ? r.call(e, t, {
                                        element: n
                                    }) : t;
                                    t = i.createChildContext(e);
                                    u = e;
                                    p.Ca(t, n)
                                }
                            })
                        }, null, {
                            o: n
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                p.f.Q.component = !0
            })();
            var v = {
                "class": "className",
                "for": "htmlFor"
            };
            p.d.attr = {
                update: function (n, t) {
                    var r = p.a.c(t()) || {};
                    p.a.G(r, function (t, r) {
                        r = p.a.c(r);
                        var a = !1 === r || null === r || r === e;
                        a && n.removeAttribute(t);
                        8 >= p.a.L && t in v ? (t = v[t], a ? n.removeAttribute(t) : n[t] = r) : a || n.setAttribute(t, r.toString());
                        "name" === t && p.a.Mb(n, a ? "" : r.toString())
                    })
                }
            };
            (function () {
                p.d.checked = {
                    after: ["value", "attr"],
                    init: function (n, t, r) {
                        function a() {
                            var e = n.checked,
                                    a = l ? o() : e;
                            if (!p.Y.ma() && (!c || e)) {
                                var i = p.k.B(t);
                                s ? f !== a ? (e && (p.a.ea(i, a, !0), p.a.ea(i, f, !1)), f = a) : p.a.ea(i, a, e) : p.h.pa(i, r, "checked", a, !0)
                            }
                        }

                        function i() {
                            var e = p.a.c(t());
                            n.checked = s ? 0 <= p.a.m(e, o()) : u ? e : o() === e
                        }
                        var o = p.Ib(function () {
                            return r.has("checkedValue") ? p.a.c(r.get("checkedValue")) : r.has("value") ? p.a.c(r.get("value")) : n.value
                        }),
                                u = "checkbox" == n.type,
                                c = "radio" == n.type;
                        if (u || c) {
                            var s = u && p.a.c(t()) instanceof Array,
                                    f = s ? o() : e,
                                    l = c || s;
                            c && !n.name && p.d.uniqueName.init(n, function () {
                                return !0
                            });
                            p.s(a, null, {
                                o: n
                            });
                            p.a.n(n, "click", a);
                            p.s(i, null, {
                                o: n
                            })
                        }
                    }
                };
                p.h.V.checked = !0;
                p.d.checkedValue = {
                    update: function (e, n) {
                        e.value = p.a.c(n())
                    }
                }
            })();
            p.d.css = {
                update: function (e, n) {
                    var t = p.a.c(n());
                    "object" == typeof t ? p.a.G(t, function (n, t) {
                        t = p.a.c(t);
                        p.a.Ba(e, n, t)
                    }) : (t = String(t || ""), p.a.Ba(e, e.__ko__cssValue, !1), e.__ko__cssValue = t, p.a.Ba(e, t, !0))
                }
            };
            p.d.enable = {
                update: function (e, n) {
                    var t = p.a.c(n());
                    t && e.disabled ? e.removeAttribute("disabled") : t || e.disabled || (e.disabled = !0)
                }
            };
            p.d.disable = {
                update: function (e, n) {
                    p.d.enable.update(e, function () {
                        return !p.a.c(n())
                    })
                }
            };
            p.d.event = {
                init: function (e, n, t, r, a) {
                    var i = n() || {};
                    p.a.G(i, function (i) {
                        "string" == typeof i && p.a.n(e, i, function (e) {
                            var o, u = n()[i];
                            if (u) {
                                try {
                                    var c = p.a.S(arguments);
                                    r = a.$data;
                                    c.unshift(r);
                                    o = u.apply(r, c)
                                } finally {
                                    !0 !== o && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                                }
                                !1 === t.get(i + "Bubble") && (e.cancelBubble = !0, e.stopPropagation && e.stopPropagation())
                            }
                        })
                    })
                }
            };
            p.d.foreach = {
                Eb: function (e) {
                    return function () {
                        var n = e(),
                                t = p.a.Xa(n);
                        if (!t || "number" == typeof t.length)
                            return {
                                foreach: n,
                                templateEngine: p.O.Oa
                            };
                        p.a.c(n);
                        return {
                            foreach: t.data,
                            as: t.as,
                            includeDestroyed: t.includeDestroyed,
                            afterAdd: t.afterAdd,
                            beforeRemove: t.beforeRemove,
                            afterRender: t.afterRender,
                            beforeMove: t.beforeMove,
                            afterMove: t.afterMove,
                            templateEngine: p.O.Oa
                        }
                    }
                },
                init: function (e, n) {
                    return p.d.template.init(e, p.d.foreach.Eb(n))
                },
                update: function (e, n, t, r, a) {
                    return p.d.template.update(e, p.d.foreach.Eb(n), t, r, a)
                }
            };
            p.h.ha.foreach = !1;
            p.f.Q.foreach = !0;
            p.d.hasfocus = {
                init: function (e, n, t) {
                    function r(r) {
                        e.__ko_hasfocusUpdating = !0;
                        var a = e.ownerDocument;
                        if ("activeElement" in a) {
                            var i;
                            try {
                                i = a.activeElement
                            } catch (o) {
                                i = a.body
                            }
                            r = i === e
                        }
                        a = n();
                        p.h.pa(a, t, "hasfocus", r, !0);
                        e.__ko_hasfocusLastValue = r;
                        e.__ko_hasfocusUpdating = !1
                    }
                    var a = r.bind(null, !0),
                            i = r.bind(null, !1);
                    p.a.n(e, "focus", a);
                    p.a.n(e, "focusin", a);
                    p.a.n(e, "blur", i);
                    p.a.n(e, "focusout", i)
                },
                update: function (e, n) {
                    var t = !!p.a.c(n());
                    e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === t || (t ? e.focus() : e.blur(), p.k.B(p.a.oa, null, [e, t ? "focusin" : "focusout"]))
                }
            };
            p.h.V.hasfocus = !0;
            p.d.hasFocus = p.d.hasfocus;
            p.h.V.hasFocus = !0;
            p.d.html = {
                init: function () {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function (e, n) {
                    p.a.$a(e, n())
                }
            };
            l("if");
            l("ifnot", !1, !0);
            l("with", !0, !1, function (e, n) {
                return e.createChildContext(n)
            });
            var y = {};
            p.d.options = {
                init: function (e) {
                    if ("select" !== p.a.t(e))
                        throw Error("options binding applies only to SELECT elements");
                    for (; 0 < e.length; )
                        e.remove(0);
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function (n, t, r) {
                    function a() {
                        return p.a.ta(n.options, function (e) {
                            return e.selected
                        })
                    }

                    function i(e, n, t) {
                        var r = typeof n;
                        return "function" == r ? n(e) : "string" == r ? e[n] : t
                    }

                    function o(e, t) {
                        if (l.length) {
                            var r = 0 <= p.a.m(l, p.i.q(t[0]));
                            p.a.Nb(t[0], r);
                            d && !r && p.k.B(p.a.oa, null, [n, "change"])
                        }
                    }
                    var u = 0 != n.length && n.multiple ? n.scrollTop : null,
                            c = p.a.c(t()),
                            s = r.get("optionsIncludeDestroyed");
                    t = {};
                    var f, l;
                    l = n.multiple ? p.a.Da(a(), p.i.q) : 0 <= n.selectedIndex ? [p.i.q(n.options[n.selectedIndex])] : [];
                    c && ("undefined" == typeof c.length && (c = [c]), f = p.a.ta(c, function (n) {
                        return s || n === e || null === n || !p.a.c(n._destroy)
                    }), r.has("optionsCaption") && (c = p.a.c(r.get("optionsCaption")), null !== c && c !== e && f.unshift(y)));
                    var d = !1;
                    t.beforeRemove = function (e) {
                        n.removeChild(e)
                    };
                    c = o;
                    r.has("optionsAfterRender") && (c = function (n, t) {
                        o(0, t);
                        p.k.B(r.get("optionsAfterRender"), null, [t[0], n !== y ? n : e])
                    });
                    p.a.Za(n, f, function (t, a, o) {
                        o.length && (l = o[0].selected ? [p.i.q(o[0])] : [], d = !0);
                        a = n.ownerDocument.createElement("option");
                        t === y ? (p.a.bb(a, r.get("optionsCaption")), p.i.ca(a, e)) : (o = i(t, r.get("optionsValue"), t), p.i.ca(a, p.a.c(o)), t = i(t, r.get("optionsText"), o), p.a.bb(a, t));
                        return [a]
                    }, t, c);
                    p.k.B(function () {
                        r.get("valueAllowUnset") && r.has("value") ? p.i.ca(n, p.a.c(r.get("value")), !0) : (n.multiple ? l.length && a().length < l.length : l.length && 0 <= n.selectedIndex ? p.i.q(n.options[n.selectedIndex]) !== l[0] : l.length || 0 <= n.selectedIndex) && p.a.oa(n, "change")
                    });
                    p.a.dc(n);
                    u && 20 < Math.abs(u - n.scrollTop) && (n.scrollTop = u)
                }
            };
            p.d.options.Va = p.a.e.F();
            p.d.selectedOptions = {
                after: ["options", "foreach"],
                init: function (e, n, t) {
                    p.a.n(e, "change", function () {
                        var r = n(),
                                a = [];
                        p.a.u(e.getElementsByTagName("option"), function (e) {
                            e.selected && a.push(p.i.q(e))
                        });
                        p.h.pa(r, t, "selectedOptions", a)
                    })
                },
                update: function (e, n) {
                    if ("select" != p.a.t(e))
                        throw Error("values binding applies only to SELECT elements");
                    var t = p.a.c(n());
                    t && "number" == typeof t.length && p.a.u(e.getElementsByTagName("option"), function (e) {
                        var n = 0 <= p.a.m(t, p.i.q(e));
                        p.a.Nb(e, n)
                    })
                }
            };
            p.h.V.selectedOptions = !0;
            p.d.style = {
                update: function (n, t) {
                    var r = p.a.c(t() || {});
                    p.a.G(r, function (t, r) {
                        r = p.a.c(r);
                        if (null === r || r === e || !1 === r)
                            r = "";
                        n.style[t] = r
                    })
                }
            };
            p.d.submit = {
                init: function (e, n, t, r, a) {
                    if ("function" != typeof n())
                        throw Error("The value for a submit binding must be a function");
                    p.a.n(e, "submit", function (t) {
                        var r, i = n();
                        try {
                            r = i.call(a.$data, e)
                        } finally {
                            !0 !== r && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                        }
                    })
                }
            };
            p.d.text = {
                init: function () {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function (e, n) {
                    p.a.bb(e, n())
                }
            };
            p.f.Q.text = !0;
            (function () {
                if (n && n.navigator)
                    var t = function (e) {
                        if (e)
                            return parseFloat(e[1])
                    },
                            r = n.opera && n.opera.version && parseInt(n.opera.version()),
                            a = n.navigator.userAgent,
                            i = t(a.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                            o = t(a.match(/Firefox\/([^ ]*)/));
                if (10 > p.a.L)
                    var u = p.a.e.F(),
                            c = p.a.e.F(),
                            s = function (e) {
                                var n = this.activeElement;
                                (n = n && p.a.e.get(n, c)) && n(e)
                            },
                            f = function (e, n) {
                                var t = e.ownerDocument;
                                p.a.e.get(t, u) || (p.a.e.set(t, u, !0), p.a.n(t, "selectionchange", s));
                                p.a.e.set(e, c, n)
                            };
                p.d.textInput = {
                    init: function (n, t, a) {
                        function u(e, t) {
                            p.a.n(n, e, t)
                        }

                        function c() {
                            var r = p.a.c(t());
                            if (null === r || r === e)
                                r = "";
                            b !== e && r === b ? setTimeout(c, 4) : n.value !== r && (d = r, n.value = r)
                        }

                        function s() {
                            h || (b = n.value, h = setTimeout(l, 4))
                        }

                        function l() {
                            clearTimeout(h);
                            b = h = e;
                            var r = n.value;
                            d !== r && (d = r, p.h.pa(t(), a, "textInput", r))
                        }
                        var d = n.value,
                                h, b;
                        10 > p.a.L ? (u("propertychange", function (e) {
                            "value" === e.propertyName && l()
                        }), 8 == p.a.L && (u("keyup", l), u("keydown", l)), 8 <= p.a.L && (f(n, l), u("dragend", s))) : (u("input", l), 5 > i && "textarea" === p.a.t(n) ? (u("keydown", s), u("paste", s), u("cut", s)) : 11 > r ? u("keydown", s) : 4 > o && (u("DOMAutoComplete", l), u("dragdrop", l), u("drop", l)));
                        u("change", l);
                        p.s(c, null, {
                            o: n
                        })
                    }
                };
                p.h.V.textInput = !0;
                p.d.textinput = {
                    preprocess: function (e, n, t) {
                        t("textInput", e)
                    }
                }
            })();
            p.d.uniqueName = {
                init: function (e, n) {
                    if (n()) {
                        var t = "ko_unique_" + ++p.d.uniqueName.Zb;
                        p.a.Mb(e, t)
                    }
                }
            };
            p.d.uniqueName.Zb = 0;
            p.d.value = {
                after: ["options", "foreach"],
                init: function (e, n, t) {
                    if ("input" != e.tagName.toLowerCase() || "checkbox" != e.type && "radio" != e.type) {
                        var r = ["change"],
                                a = t.get("valueUpdate"),
                                i = !1,
                                o = null;
                        a && ("string" == typeof a && (a = [a]), p.a.ga(r, a), r = p.a.rb(r));
                        var u = function () {
                            o = null;
                            i = !1;
                            var r = n(),
                                    a = p.i.q(e);
                            p.h.pa(r, t, "value", a)
                        };
                        !p.a.L || "input" != e.tagName.toLowerCase() || "text" != e.type || "off" == e.autocomplete || e.form && "off" == e.form.autocomplete || -1 != p.a.m(r, "propertychange") || (p.a.n(e, "propertychange", function () {
                            i = !0
                        }), p.a.n(e, "focus", function () {
                            i = !1
                        }), p.a.n(e, "blur", function () {
                            i && u()
                        }));
                        p.a.u(r, function (n) {
                            var t = u;
                            p.a.vc(n, "after") && (t = function () {
                                o = p.i.q(e);
                                setTimeout(u, 0)
                            }, n = n.substring(5));
                            p.a.n(e, n, t)
                        });
                        var c = function () {
                            var r = p.a.c(n()),
                                    a = p.i.q(e);
                            if (null !== o && r === o)
                                setTimeout(c, 0);
                            else if (r !== a)
                                if ("select" === p.a.t(e)) {
                                    var i = t.get("valueAllowUnset"),
                                            a = function () {
                                                p.i.ca(e, r, i)
                                            };
                                    a();
                                    i || r === p.i.q(e) ? setTimeout(a, 0) : p.k.B(p.a.oa, null, [e, "change"])
                                } else
                                    p.i.ca(e, r)
                        };
                        p.s(c, null, {
                            o: e
                        })
                    } else
                        p.ra(e, {
                            checkedValue: n
                        })
                },
                update: function () {}
            };
            p.h.V.value = !0;
            p.d.visible = {
                update: function (e, n) {
                    var t = p.a.c(n()),
                            r = "none" != e.style.display;
                    t && !r ? e.style.display = "" : !t && r && (e.style.display = "none")
                }
            };
            (function (e) {
                p.d[e] = {
                    init: function (n, t, r, a, i) {
                        return p.d.event.init.call(this, n, function () {
                            var n = {};
                            n[e] = t();
                            return n
                        }, r, a, i)
                    }
                }
            })("click");
            p.H = function () {};
            p.H.prototype.renderTemplateSource = function () {
                throw Error("Override renderTemplateSource")
            };
            p.H.prototype.createJavaScriptEvaluatorBlock = function () {
                throw Error("Override createJavaScriptEvaluatorBlock")
            };
            p.H.prototype.makeTemplateSource = function (e, n) {
                if ("string" == typeof e) {
                    n = n || t;
                    var r = n.getElementById(e);
                    if (!r)
                        throw Error("Cannot find template with ID " + e);
                    return new p.r.l(r)
                }
                if (1 == e.nodeType || 8 == e.nodeType)
                    return new p.r.fa(e);
                throw Error("Unknown template type: " + e)
            };
            p.H.prototype.renderTemplate = function (e, n, t, r) {
                e = this.makeTemplateSource(e, r);
                return this.renderTemplateSource(e, n, t)
            };
            p.H.prototype.isTemplateRewritten = function (e, n) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(e, n).data("isRewritten")
            };
            p.H.prototype.rewriteTemplate = function (e, n, t) {
                e = this.makeTemplateSource(e, t);
                n = n(e.text());
                e.text(n);
                e.data("isRewritten", !0)
            };
            p.b("templateEngine", p.H);
            p.fb = function () {
                function e(e, n, t, r) {
                    e = p.h.Wa(e);
                    for (var a = p.h.ha, i = 0; i < e.length; i++) {
                        var o = e[i].key;
                        if (a.hasOwnProperty(o)) {
                            var u = a[o];
                            if ("function" === typeof u) {
                                if (o = u(e[i].value))
                                    throw Error(o)
                            } else if (!u)
                                throw Error("This template engine does not support the '" + o + "' binding within its templates")
                        }
                    }
                    t = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + p.h.ya(e, {
                        valueAccessors: !0
                    }) + " } })()},'" + t.toLowerCase() + "')";
                    return r.createJavaScriptEvaluatorBlock(t) + n
                }
                var n = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                        t = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    ec: function (e, n, t) {
                        n.isTemplateRewritten(e, t) || n.rewriteTemplate(e, function (e) {
                            return p.fb.nc(e, n)
                        }, t)
                    },
                    nc: function (r, a) {
                        return r.replace(n, function (n, t, r, i, o) {
                            return e(o, t, r, a)
                        }).replace(t, function (n, t) {
                            return e(t, "<!-- ko -->", "#comment", a)
                        })
                    },
                    Xb: function (e, n) {
                        return p.D.Ua(function (t, r) {
                            var a = t.nextSibling;
                            a && a.nodeName.toLowerCase() === n && p.ra(a, e, r)
                        })
                    }
                }
            }();
            p.b("__tr_ambtns", p.fb.Xb);
            (function () {
                p.r = {};
                p.r.l = function (e) {
                    this.l = e
                };
                p.r.l.prototype.text = function () {
                    var e = p.a.t(this.l),
                            e = "script" === e ? "text" : "textarea" === e ? "value" : "innerHTML";
                    if (0 == arguments.length)
                        return this.l[e];
                    var n = arguments[0];
                    "innerHTML" === e ? p.a.$a(this.l, n) : this.l[e] = n
                };
                var n = p.a.e.F() + "_";
                p.r.l.prototype.data = function (e) {
                    if (1 === arguments.length)
                        return p.a.e.get(this.l, n + e);
                    p.a.e.set(this.l, n + e, arguments[1])
                };
                var t = p.a.e.F();
                p.r.fa = function (e) {
                    this.l = e
                };
                p.r.fa.prototype = new p.r.l;
                p.r.fa.prototype.text = function () {
                    if (0 == arguments.length) {
                        var n = p.a.e.get(this.l, t) || {};
                        n.gb === e && n.Ga && (n.gb = n.Ga.innerHTML);
                        return n.gb
                    }
                    p.a.e.set(this.l, t, {
                        gb: arguments[0]
                    })
                };
                p.r.l.prototype.nodes = function () {
                    if (0 == arguments.length)
                        return (p.a.e.get(this.l, t) || {}).Ga;
                    p.a.e.set(this.l, t, {
                        Ga: arguments[0]
                    })
                };
                p.b("templateSources", p.r);
                p.b("templateSources.domElement", p.r.l);
                p.b("templateSources.anonymousTemplate", p.r.fa)
            })();
            (function () {
                function n(e, n, t) {
                    var r;
                    for (n = p.f.nextSibling(n); e && (r = e) !== n; )
                        e = p.f.nextSibling(r), t(r, e)
                }

                function t(e, t) {
                    if (e.length) {
                        var r = e[0],
                                a = e[e.length - 1],
                                i = r.parentNode,
                                o = p.J.instance,
                                u = o.preprocessNode;
                        if (u) {
                            n(r, a, function (e, n) {
                                var t = e.previousSibling,
                                        i = u.call(o, e);
                                i && (e === r && (r = i[0] || n), e === a && (a = i[i.length - 1] || t))
                            });
                            e.length = 0;
                            if (!r)
                                return;
                            r === a ? e.push(r) : (e.push(r, a), p.a.ka(e, i))
                        }
                        n(r, a, function (e) {
                            1 !== e.nodeType && 8 !== e.nodeType || p.pb(t, e)
                        });
                        n(r, a, function (e) {
                            1 !== e.nodeType && 8 !== e.nodeType || p.D.Sb(e, [t])
                        });
                        p.a.ka(e, i)
                    }
                }

                function r(e) {
                    return e.nodeType ? e : 0 < e.length ? e[0] : null
                }

                function a(e, n, a, o, u) {
                    u = u || {};
                    var c = e && r(e),
                            c = c && c.ownerDocument,
                            s = u.templateEngine || i;
                    p.fb.ec(a, s, c);
                    a = s.renderTemplate(a, o, u, c);
                    if ("number" != typeof a.length || 0 < a.length && "number" != typeof a[0].nodeType)
                        throw Error("Template engine must return an array of DOM nodes");
                    c = !1;
                    switch (n) {
                        case "replaceChildren":
                            p.f.T(e, a);
                            c = !0;
                            break;
                        case "replaceNode":
                            p.a.Lb(e, a);
                            c = !0;
                            break;
                        case "ignoreTargetNode":
                            break;
                        default:
                            throw Error("Unknown renderMode: " + n)
                    }
                    c && (t(a, o), u.afterRender && p.k.B(u.afterRender, null, [a, o.$data]));
                    return a
                }
                var i;
                p.ab = function (n) {
                    if (n != e && !(n instanceof p.H))
                        throw Error("templateEngine must inherit from ko.templateEngine");
                    i = n
                };
                p.Ya = function (n, t, o, u, c) {
                    o = o || {};
                    if ((o.templateEngine || i) == e)
                        throw Error("Set a template engine before calling renderTemplate");
                    c = c || "replaceChildren";
                    if (u) {
                        var s = r(u);
                        return p.j(function () {
                            var e = t && t instanceof p.N ? t : new p.N(p.a.c(t)),
                                    i = p.C(n) ? n() : "function" === typeof n ? n(e.$data, e) : n,
                                    e = a(u, c, i, e, o);
                            "replaceNode" == c && (u = e, s = r(u))
                        }, null, {
                            Ia: function () {
                                return !s || !p.a.Ja(s)
                            },
                            o: s && "replaceNode" == c ? s.parentNode : s
                        })
                    }
                    return p.D.Ua(function (e) {
                        p.Ya(n, t, o, e, "replaceNode")
                    })
                };
                p.uc = function (n, r, i, o, u) {
                    function c(e, n) {
                        t(n, f);
                        i.afterRender && i.afterRender(n, e)
                    }

                    function s(e, t) {
                        f = u.createChildContext(e, i.as, function (e) {
                            e.$index = t
                        });
                        var r = p.C(n) ? n() : "function" === typeof n ? n(e, f) : n;
                        return a(null, "ignoreTargetNode", r, f, i)
                    }
                    var f;
                    return p.j(function () {
                        var n = p.a.c(r) || [];
                        "undefined" == typeof n.length && (n = [n]);
                        n = p.a.ta(n, function (n) {
                            return i.includeDestroyed || n === e || null === n || !p.a.c(n._destroy)
                        });
                        p.k.B(p.a.Za, null, [o, n, s, i, c])
                    }, null, {
                        o: o
                    })
                };
                var o = p.a.e.F();
                p.d.template = {
                    init: function (e, n) {
                        var t = p.a.c(n());
                        "string" == typeof t || t.name ? p.f.ja(e) : (t = p.f.childNodes(e), t = p.a.oc(t), new p.r.fa(e).nodes(t));
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function (n, t, r, a, i) {
                        var u = t(),
                                c;
                        t = p.a.c(u);
                        r = !0;
                        a = null;
                        "string" == typeof t ? t = {} : (u = t.name, "if" in t && (r = p.a.c(t["if"])), r && "ifnot" in t && (r = !p.a.c(t.ifnot)), c = p.a.c(t.data));
                        "foreach" in t ? a = p.uc(u || n, r && t.foreach || [], t, n, i) : r ? (i = "data" in t ? i.createChildContext(c, t.as) : i, a = p.Ya(u || n, i, t, n)) : p.f.ja(n);
                        i = a;
                        (c = p.a.e.get(n, o)) && "function" == typeof c.K && c.K();
                        p.a.e.set(n, o, i && i.Z() ? i : e)
                    }
                };
                p.h.ha.template = function (e) {
                    e = p.h.Wa(e);
                    return 1 == e.length && e[0].unknown || p.h.lc(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                };
                p.f.Q.template = !0
            })();
            p.b("setTemplateEngine", p.ab);
            p.b("renderTemplate", p.Ya);
            p.a.wb = function (e, n, t) {
                if (e.length && n.length) {
                    var r, a, i, o, u;
                    for (r = a = 0;
                            (!t || r < t) && (o = e[a]); ++a) {
                        for (i = 0; u = n[i]; ++i)
                            if (o.value === u.value) {
                                o.moved = u.index;
                                u.moved = o.index;
                                n.splice(i, 1);
                                r = i = 0;
                                break
                            }
                        r += i
                    }
                }
            };
            p.a.Fa = function () {
                function e(e, n, t, r, a) {
                    var i = Math.min,
                            o = Math.max,
                            u = [],
                            c, s = e.length,
                            f, l = n.length,
                            d = l - s || 1,
                            h = s + l + 1,
                            b, m, g;
                    for (c = 0; c <= s; c++)
                        for (m = b, u.push(b = []), g = i(l, c + d), f = o(0, c - 1); f <= g; f++)
                            b[f] = f ? c ? e[c - 1] === n[f - 1] ? m[f - 1] : i(m[f] || h, b[f - 1] || h) + 1 : f + 1 : c + 1;
                    i = [];
                    o = [];
                    d = [];
                    c = s;
                    for (f = l; c || f; )
                        l = u[c][f] - 1, f && l === u[c][f - 1] ? o.push(i[i.length] = {
                            status: t,
                            value: n[--f],
                            index: f
                        }) : c && l === u[c - 1][f] ? d.push(i[i.length] = {
                            status: r,
                            value: e[--c],
                            index: c
                        }) : (--f, --c, a.sparse || i.push({
                            status: "retained",
                            value: n[f]
                        }));
                    p.a.wb(o, d, 10 * s);
                    return i.reverse()
                }
                return function (n, t, r) {
                    r = "boolean" === typeof r ? {
                        dontLimitMoves: r
                    } : r || {};
                    n = n || [];
                    t = t || [];
                    return n.length <= t.length ? e(n, t, "added", "deleted", r) : e(t, n, "deleted", "added", r)
                }
            }();
            p.b("utils.compareArrays", p.a.Fa);
            (function () {
                function n(n, t, r, a, i) {
                    var o = [],
                            u = p.j(function () {
                                var e = t(r, i, p.a.ka(o, n)) || [];
                                0 < o.length && (p.a.Lb(o, e), a && p.k.B(a, null, [r, e, i]));
                                o.length = 0;
                                p.a.ga(o, e)
                            }, null, {
                                o: n,
                                Ia: function () {
                                    return !p.a.ob(o)
                                }
                            });
                    return {
                        $: o,
                        j: u.Z() ? u : e
                    }
                }
                var t = p.a.e.F();
                p.a.Za = function (r, a, i, o, u) {
                    function c(e, n) {
                        x = l[n];
                        g !== n && (w[e] = x);
                        x.Na(g++);
                        p.a.ka(x.$, r);
                        b.push(x);
                        y.push(x)
                    }

                    function s(e, n) {
                        if (e)
                            for (var t = 0, r = n.length; t < r; t++)
                                n[t] && p.a.u(n[t].$, function (r) {
                                    e(r, t, n[t].sa)
                                })
                    }
                    a = a || [];
                    o = o || {};
                    var f = p.a.e.get(r, t) === e,
                            l = p.a.e.get(r, t) || [],
                            d = p.a.Da(l, function (e) {
                                return e.sa
                            }),
                            h = p.a.Fa(d, a, o.dontLimitMoves),
                            b = [],
                            m = 0,
                            g = 0,
                            v = [],
                            y = [];
                    a = [];
                    for (var w = [], d = [], x, k = 0, E, T; E = h[k]; k++)
                        switch (T = E.moved, E.status) {
                            case "deleted":
                                T === e && (x = l[m], x.j && x.j.K(), v.push.apply(v, p.a.ka(x.$, r)), o.beforeRemove && (a[k] = x, y.push(x)));
                                m++;
                                break;
                            case "retained":
                                c(k, m++);
                                break;
                            case "added":
                                T !== e ? c(k, T) : (x = {
                                    sa: E.value,
                                    Na: p.p(g++)
                                }, b.push(x), y.push(x), f || (d[k] = x))
                        }
                    s(o.beforeMove, w);
                    p.a.u(v, o.beforeRemove ? p.R : p.removeNode);
                    for (var k = 0, f = p.f.firstChild(r), C; x = y[k]; k++) {
                        x.$ || p.a.extend(x, n(r, i, x.sa, u, x.Na));
                        for (m = 0; h = x.$[m]; f = h.nextSibling, C = h, m++)
                            h !== f && p.f.Bb(r, h, C);
                        !x.ic && u && (u(x.sa, x.$, x.Na), x.ic = !0)
                    }
                    s(o.beforeRemove, a);
                    s(o.afterMove, w);
                    s(o.afterAdd, d);
                    p.a.e.set(r, t, b)
                }
            })();
            p.b("utils.setDomNodeChildrenFromArrayMapping", p.a.Za);
            p.O = function () {
                this.allowTemplateRewriting = !1
            };
            p.O.prototype = new p.H;
            p.O.prototype.renderTemplateSource = function (e) {
                var n = (9 > p.a.L ? 0 : e.nodes) ? e.nodes() : null;
                if (n)
                    return p.a.S(n.cloneNode(!0).childNodes);
                e = e.text();
                return p.a.ba(e)
            };
            p.O.Oa = new p.O;
            p.ab(p.O.Oa);
            p.b("nativeTemplateEngine", p.O);
            (function () {
                p.Sa = function () {
                    var e = this.kc = function () {
                        if (!a || !a.tmpl)
                            return 0;
                        try {
                            if (0 <= a.tmpl.tag.tmpl.open.toString().indexOf("__"))
                                return 2
                        } catch (e) {
                        }
                        return 1
                    }();
                    this.renderTemplateSource = function (n, r, i) {
                        i = i || {};
                        if (2 > e)
                            throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var o = n.data("precompiled");
                        o || (o = n.text() || "", o = a.template(null, "{{ko_with $item.koBindingContext}}" + o + "{{/ko_with}}"), n.data("precompiled", o));
                        n = [r.$data];
                        r = a.extend({
                            koBindingContext: r
                        }, i.templateOptions);
                        r = a.tmpl(o, n, r);
                        r.appendTo(t.createElement("div"));
                        a.fragments = {};
                        return r
                    };
                    this.createJavaScriptEvaluatorBlock = function (e) {
                        return "{{ko_code ((function() { return " + e + " })()) }}"
                    };
                    this.addTemplate = function (e, n) {
                        t.write("<script type='text/html' id='" + e + "'>" + n + "</script>")
                    };
                    0 < e && (a.tmpl.tag.ko_code = {
                        open: "__.push($1 || '');"
                    }, a.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    })
                };
                p.Sa.prototype = new p.H;
                var e = new p.Sa;
                0 < e.kc && p.ab(e);
                p.b("jqueryTmplTemplateEngine", p.Sa)
            })()
        })
    })()
})();
ko.bindingHandlers.boxSlider = {
    init: function (t, e, i, n, o) {
        if (typeof $.fn.bxSlider === "undefined") {
            return false
        }
        var r = $(t);
        var a = e() || {};
        setTimeout(function () {
            r.data("boxSlider", r.bxSlider(a))
        }, 200)
    },
    update: function (t, e, i, n, o) {
        var r = $(t).data("boxSlider");
        if (r) {
            r.redrawSlider()
        }
    }
};
ko.bindingHandlers.tipsy = {
    init: function (t, e, i, n, o) {
        if (typeof $.fn.tipsy === "undefined") {
            return false
        }
        var r = $(t);
        var a = e() || {};
        if (typeof a.content === "string") {
            r.attr("data-wtip", a.content);
            a.title = "data-wtip"
        }
        r.tipsy(a)
    },
    update: function (t, e, i, n, o) {}
};
ko.bindingHandlers.select2 = {
    init: function (t, e, i, n, o) {
        if (typeof $.fn.select2 === "undefined") {
            return false
        }
        var r = $(t);
        var a = e() || {};
        r.select2(a)
    },
    update: function (t, e, i, n, o) {}
};
ko.bindingHandlers.timerButton = {
    init: function (t, e, i, n, o) {
        var r = e() || {
            time_end: 0,
            total_time: 0,
            current_time: 0
        };
        var a = $(t);
        var d = new ProgressButton(t, {
            statusTime: 10,
            callback: function (t) {
                a.addClass("progress-button");
                a.data("oProgressButton", t);
                a.data("options", r);
                a.attr("data-progress-button", true)
            }
        });
        $(t).trigger("StartTimer")
    },
    update: function (t, e, i, n, o) {}
};
ko.bindingHandlers.scrollbar = {
    init: function (t, e, i, n, o) {
        var r = $(t);
        var a = e() || {};
        r.addClass("perefect-scroll");
        r.data("oScroll", omerta.GUI.scroll.build(r, a))
    },
    update: function (t, e, i, n, o) {
        var r = $(t);
        var a = e() || {};
        var d = r.data("oScroll");
        if (typeof d === "undefined") {
            return
        }
        if (typeof d === "object") {
            omerta.GUI.scroll.refresh(d, a)
        }
    }
};
ko.components.register("widget-hof", {
    viewModel: function (t) {
        this.title = ko.observable("Loading");
        this.subTitle = ko.observable("");
        this.hof = ko.observableArray([]);
        var e = this;
        var i = $.ajax("/?module=Homepage.Reset&action=hof");
        i.done(function (t) {
            e.title(t.title);
            e.subTitle(t.subtitle);
            e.hof(t.hof)
        })
    },
    template: {
        element: "widget-hof"
    }
});
(function (e) {
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        e(require("knockout"), exports)
    } else if (typeof define === "function" && define["amd"]) {
        define(["knockout", "exports"], e)
    } else {
        e(ko, ko.validation = {})
    }
})(function (e, t) {
    if (typeof e === "undefined") {
        throw new Error("Knockout is required, please ensure it is loaded before loading this validation plug-in")
    }
    e.validation = t;
    var r = e.validation,
            i = e.utils,
            n = i.unwrapObservable,
            a = i.arrayForEach,
            s = i.extend;
    var u = {
        registerExtenders: true,
        messagesOnModified: true,
        errorsAsTitle: true,
        errorsAsTitleOnModified: false,
        messageTemplate: null,
        insertMessages: true,
        parseInputAttributes: false,
        writeInputAttributes: false,
        decorateInputElement: false,
        decorateElementOnModified: true,
        errorClass: null,
        errorElementClass: "validationElement",
        errorMessageClass: "validationMessage",
        allowHtmlMessages: false,
        grouping: {
            deep: false,
            observable: true,
            live: false
        },
        validate: {}
    };
    var l = s({}, u);
    l.html5Attributes = ["required", "pattern", "min", "max", "step"];
    l.html5InputTypes = ["email", "number", "date"];
    l.reset = function () {
        s(l, u)
    };
    r.configuration = l;
    r.utils = function () {
        var e = (new Date).getTime();
        var t = {};
        var i = "__ko_validation__";
        return {
            isArray: function (e) {
                return e.isArray || Object.prototype.toString.call(e) === "[object Array]"
            },
            isObject: function (e) {
                return e !== null && typeof e === "object"
            },
            isNumber: function (e) {
                return !isNaN(e)
            },
            isObservableArray: function (e) {
                return !!e && typeof e["remove"] === "function" && typeof e["removeAll"] === "function" && typeof e["destroy"] === "function" && typeof e["destroyAll"] === "function" && typeof e["indexOf"] === "function" && typeof e["replace"] === "function"
            },
            values: function (e) {
                var t = [];
                for (var r in e) {
                    if (e.hasOwnProperty(r)) {
                        t.push(e[r])
                    }
                }
                return t
            },
            getValue: function (e) {
                return typeof e === "function" ? e() : e
            },
            hasAttribute: function (e, t) {
                return e.getAttribute(t) !== null
            },
            getAttribute: function (e, t) {
                return e.getAttribute(t)
            },
            setAttribute: function (e, t, r) {
                return e.setAttribute(t, r)
            },
            isValidatable: function (e) {
                return !!(e && e.rules && e.isValid && e.isModified)
            },
            insertAfter: function (e, t) {
                e.parentNode.insertBefore(t, e.nextSibling)
            },
            newId: function () {
                return e += 1
            },
            getConfigOptions: function (e) {
                var t = r.utils.contextFor(e);
                return t || r.configuration
            },
            setDomData: function (e, n) {
                var a = e[i];
                if (!a) {
                    e[i] = a = r.utils.newId()
                }
                t[a] = n
            },
            getDomData: function (e) {
                var r = e[i];
                if (!r) {
                    return undefined
                }
                return t[r]
            },
            contextFor: function (e) {
                switch (e.nodeType) {
                    case 1:
                    case 8:
                        var t = r.utils.getDomData(e);
                        if (t) {
                            return t
                        }
                        if (e.parentNode) {
                            return r.utils.contextFor(e.parentNode)
                        }
                        break
                }
                return undefined
            },
            isEmptyVal: function (e) {
                if (e === undefined) {
                    return true
                }
                if (e === null) {
                    return true
                }
                if (e === "") {
                    return true
                }
            },
            getOriginalElementTitle: function (e) {
                var t = r.utils.getAttribute(e, "data-orig-title"),
                        i = e.title,
                        n = r.utils.hasAttribute(e, "data-orig-title");
                return n ? t : i
            },
            async: function (e) {
                if (window.setImmediate) {
                    window.setImmediate(e)
                } else {
                    window.setTimeout(e, 0)
                }
            },
            forEach: function (e, t) {
                if (r.utils.isArray(e)) {
                    return a(e, t)
                }
                for (var i in e) {
                    if (e.hasOwnProperty(i)) {
                        t(e[i], i)
                    }
                }
            }
        }
    }();
    var o = function () {
        var t = 0,
                u = r.configuration,
                l = r.utils;

        function o(e) {
            a(e.subscriptions, function (e) {
                e.dispose()
            });
            e.subscriptions = []
        }

        function d(e) {
            if (e.options.deep) {
                a(e.flagged, function (e) {
                    delete e.__kv_traversed
                });
                e.flagged.length = 0
            }
            if (!e.options.live) {
                o(e)
            }
        }

        function f(e, t) {
            t.validatables = [];
            o(t);
            c(e, t);
            d(t)
        }

        function c(t, r, i) {
            var n = [],
                    a = t.peek ? t.peek() : t;
            if (t.__kv_traversed === true) {
                return
            }
            if (r.options.deep) {
                t.__kv_traversed = true;
                r.flagged.push(t)
            }
            i = i !== undefined ? i : r.options.deep ? 1 : -1;
            if (e.isObservable(t)) {
                if (!t.errors && !l.isValidatable(t)) {
                    t.extend({
                        validatable: true
                    })
                }
                r.validatables.push(t);
                if (r.options.live && l.isObservableArray(t)) {
                    r.subscriptions.push(t.subscribe(function () {
                        r.graphMonitor.valueHasMutated()
                    }))
                }
            }
            if (a && !a._destroy) {
                if (l.isArray(a)) {
                    n = a
                } else if (l.isObject(a)) {
                    n = l.values(a)
                }
            }
            if (i !== 0) {
                l.forEach(n, function (t) {
                    if (t && !t.nodeType && (!e.isComputed(t) || t.rules)) {
                        c(t, r, i + 1)
                    }
                })
            }
        }

        function p(e) {
            var t = [];
            a(e, function (e) {
                if (l.isValidatable(e) && !e.isValid()) {
                    t.push(e.error.peek())
                }
            });
            return t
        }
        return {
            init: function (e, i) {
                if (t > 0 && !i) {
                    return
                }
                e = e || {};
                e.errorElementClass = e.errorElementClass || e.errorClass || u.errorElementClass;
                e.errorMessageClass = e.errorMessageClass || e.errorClass || u.errorMessageClass;
                s(u, e);
                if (u.registerExtenders) {
                    r.registerExtenders()
                }
                t = 1
            },
            reset: r.configuration.reset,
            group: function v(t, r) {
                r = s(s({}, u.grouping), r);
                var n = {
                    options: r,
                    graphMonitor: e.observable(),
                    flagged: [],
                    subscriptions: [],
                    validatables: []
                };
                var o = null;
                if (r.observable) {
                    o = e.computed(function () {
                        n.graphMonitor();
                        f(t, n);
                        return p(n.validatables)
                    })
                } else {
                    o = function () {
                        f(t, n);
                        return p(n.validatables)
                    }
                }
                o.showAllMessages = function (e) {
                    if (e === undefined) {
                        e = true
                    }
                    o.forEach(function (t) {
                        if (l.isValidatable(t)) {
                            t.isModified(e)
                        }
                    })
                };
                o.isAnyMessageShown = function () {
                    var e;
                    e = !!o.find(function (e) {
                        return l.isValidatable(e) && !e.isValid() && e.isModified()
                    });
                    return e
                };
                o.filter = function (e) {
                    e = e || function () {
                        return true
                    };
                    o();
                    return i.arrayFilter(n.validatables, e)
                };
                o.find = function (e) {
                    e = e || function () {
                        return true
                    };
                    o();
                    return i.arrayFirst(n.validatables, e)
                };
                o.forEach = function (e) {
                    e = e || function () {};
                    o();
                    a(n.validatables, e)
                };
                o.map = function (e) {
                    e = e || function (e) {
                        return e
                    };
                    o();
                    return i.arrayMap(n.validatables, e)
                };
                o._updateState = function (e) {
                    if (!l.isObject(e)) {
                        throw new Error("An object is required.")
                    }
                    t = e;
                    if (r.observable) {
                        n.graphMonitor.valueHasMutated()
                    } else {
                        f(e, n);
                        return p(n.validatables)
                    }
                };
                return o
            },
            formatMessage: function (e, t, r) {
                if (l.isObject(t) && t.typeAttr) {
                    t = t.value
                }
                if (typeof e === "function") {
                    return e(t, r)
                }
                var i = n(t);
                if (i == null) {
                    i = []
                }
                if (!l.isArray(i)) {
                    i = [i]
                }
                return e.replace(/{(\d+)}/gi, function (e, t) {
                    if (typeof i[t] !== "undefined") {
                        return i[t]
                    }
                    return e
                })
            },
            addRule: function (e, t) {
                e.extend({
                    validatable: true
                });
                var r = !!i.arrayFirst(e.rules(), function (e) {
                    return e.rule && e.rule === t.rule
                });
                if (!r) {
                    e.rules.push(t)
                }
                return e
            },
            addAnonymousRule: function (e, t) {
                if (t["message"] === undefined) {
                    t["message"] = "Error"
                }
                if (t.onlyIf) {
                    t.condition = t.onlyIf
                }
                r.addRule(e, t)
            },
            addExtender: function (t) {
                e.extenders[t] = function (e, i) {
                    if (i && (i.message || i.onlyIf)) {
                        return r.addRule(e, {
                            rule: t,
                            message: i.message,
                            params: l.isEmptyVal(i.params) ? true : i.params,
                            condition: i.onlyIf
                        })
                    } else {
                        return r.addRule(e, {
                            rule: t,
                            params: i
                        })
                    }
                }
            },
            registerExtenders: function () {
                if (u.registerExtenders) {
                    for (var t in r.rules) {
                        if (r.rules.hasOwnProperty(t)) {
                            if (!e.extenders[t]) {
                                r.addExtender(t)
                            }
                        }
                    }
                }
            },
            insertValidationMessage: function (e) {
                var t = document.createElement("SPAN");
                t.className = l.getConfigOptions(e).errorMessageClass;
                l.insertAfter(e, t);
                return t
            },
            parseInputValidationAttributes: function (e, t) {
                a(r.configuration.html5Attributes, function (i) {
                    if (l.hasAttribute(e, i)) {
                        var n = e.getAttribute(i) || true;
                        if (i === "min" || i === "max") {
                            var a = e.getAttribute("type");
                            if (typeof a === "undefined" || !a) {
                                a = "text"
                            }
                            n = {
                                typeAttr: a,
                                value: n
                            }
                        }
                        r.addRule(t(), {
                            rule: i,
                            params: n
                        })
                    }
                });
                var i = e.getAttribute("type");
                a(r.configuration.html5InputTypes, function (e) {
                    if (e === i) {
                        r.addRule(t(), {
                            rule: e === "date" ? "dateISO" : e,
                            params: true
                        })
                    }
                })
            },
            writeInputValidationAttributes: function (t, n) {
                var s = n();
                if (!s || !s.rules) {
                    return
                }
                var u = s.rules();
                a(r.configuration.html5Attributes, function (r) {
                    var n = i.arrayFirst(u, function (e) {
                        return e.rule && e.rule.toLowerCase() === r.toLowerCase()
                    });
                    if (!n) {
                        return
                    }
                    e.computed({
                        read: function () {
                            var i = e.unwrap(n.params);
                            if (n.rule === "pattern" && i instanceof RegExp) {
                                i = i.source
                            }
                            t.setAttribute(r, i)
                        },
                        disposeWhenNodeIsRemoved: t
                    })
                });
                u = null
            },
            makeBindingHandlerValidatable: function (t) {
                var r = e.bindingHandlers[t].init;
                e.bindingHandlers[t].init = function (t, i, n, a, s) {
                    r(t, i, n, a, s);
                    return e.bindingHandlers["validationCore"].init(t, i, n, a, s)
                }
            },
            setRules: function (t, i) {
                var a = function (t, i) {
                    if (!t || !i) {
                        return
                    }
                    for (var s in i) {
                        if (!i.hasOwnProperty(s)) {
                            continue
                        }
                        var u = i[s];
                        if (!t[s]) {
                            continue
                        }
                        var o = t[s],
                                d = n(o),
                                f = {},
                                c = {};
                        for (var p in u) {
                            if (!u.hasOwnProperty(p)) {
                                continue
                            }
                            if (r.rules[p]) {
                                f[p] = u[p]
                            } else {
                                c[p] = u[p]
                            }
                        }
                        if (e.isObservable(o)) {
                            o.extend(f)
                        }
                        if (d && l.isArray(d)) {
                            for (var v = 0; v < d.length; v++) {
                                a(d[v], c)
                            }
                        } else {
                            a(d, c)
                        }
                    }
                };
                a(t, i)
            }
        }
    }();
    s(e.validation, o);
    r.rules = {};
    r.rules["required"] = {
        validator: function (e, t) {
            var r;
            if (e === undefined || e === null) {
                return !t
            }
            r = e;
            if (typeof e === "string") {
                if (String.prototype.trim) {
                    r = e.trim()
                } else {
                    r = e.replace(/^\s+|\s+$/g, "")
                }
            }
            if (!t) {
                return true
            }
            return (r + "").length > 0
        },
        message: "This field is required."
    };

    function d(e) {
        var t = e === "max";
        return function (i, n) {
            if (r.utils.isEmptyVal(i)) {
                return true
            }
            var a, s;
            if (n.typeAttr === undefined) {
                s = "text";
                a = n
            } else {
                s = n.typeAttr;
                a = n.value
            }
            if (!isNaN(a) && !(a instanceof Date)) {
                s = "number"
            }
            var u, l, o;
            switch (s.toLowerCase()) {
                case "week":
                    u = /^(\d{4})-W(\d{2})$/;
                    l = i.match(u);
                    if (l === null) {
                        throw new Error("Invalid value for " + e + " attribute for week input.  Should look like " + "'2000-W33' http://www.w3.org/TR/html-markup/input.week.html#input.week.attrs.min")
                    }
                    o = a.match(u);
                    if (!o) {
                        return false
                    }
                    if (t) {
                        return l[1] < o[1] || l[1] === o[1] && l[2] <= o[2]
                    } else {
                        return l[1] > o[1] || l[1] === o[1] && l[2] >= o[2]
                    }
                    break;
                case "month":
                    u = /^(\d{4})-(\d{2})$/;
                    l = i.match(u);
                    if (l === null) {
                        throw new Error("Invalid value for " + e + " attribute for month input.  Should look like " + "'2000-03' http://www.w3.org/TR/html-markup/input.month.html#input.month.attrs.min")
                    }
                    o = a.match(u);
                    if (!o) {
                        return false
                    }
                    if (t) {
                        return l[1] < o[1] || l[1] === o[1] && l[2] <= o[2]
                    } else {
                        return l[1] > o[1] || l[1] === o[1] && l[2] >= o[2]
                    }
                    break;
                case "number":
                case "range":
                    if (t) {
                        return !isNaN(i) && parseFloat(i) <= parseFloat(a)
                    } else {
                        return !isNaN(i) && parseFloat(i) >= parseFloat(a)
                    }
                    break;
                default:
                    if (t) {
                        return i <= a
                    } else {
                        return i >= a
                    }
            }
        }
    }
    r.rules["min"] = {
        validator: d("min"),
        message: "Please enter a value greater than or equal to {0}."
    };
    r.rules["max"] = {
        validator: d("max"),
        message: "Please enter a value less than or equal to {0}."
    };
    r.rules["minLength"] = {
        validator: function (e, t) {
            if (r.utils.isEmptyVal(e)) {
                return true
            }
            var i = r.utils.isNumber(e) ? "" + e : e;
            return i.length >= t
        },
        message: "Please enter at least {0} characters."
    };
    r.rules["maxLength"] = {
        validator: function (e, t) {
            if (r.utils.isEmptyVal(e)) {
                return true
            }
            var i = r.utils.isNumber(e) ? "" + e : e;
            return i.length <= t
        },
        message: "Please enter no more than {0} characters."
    };
    r.rules["pattern"] = {
        validator: function (e, t) {
            return r.utils.isEmptyVal(e) || e.toString().match(t) !== null
        },
        message: "Please check this value."
    };
    r.rules["step"] = {
        validator: function (e, t) {
            if (r.utils.isEmptyVal(e) || t === "any") {
                return true
            }
            var i = e * 100 % (t * 100);
            return Math.abs(i) < 1e-5 || Math.abs(1 - i) < 1e-5
        },
        message: "The value must increment by {0}."
    };
    r.rules["email"] = {
        validator: function (e, t) {
            if (!t) {
                return true
            }
            return r.utils.isEmptyVal(e) || t && /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
        },
        message: "Please enter a proper email address."
    };
    r.rules["date"] = {
        validator: function (e, t) {
            if (!t) {
                return true
            }
            return r.utils.isEmptyVal(e) || t && !/Invalid|NaN/.test(new Date(e))
        },
        message: "Please enter a proper date."
    };
    r.rules["dateISO"] = {
        validator: function (e, t) {
            if (!t) {
                return true
            }
            return r.utils.isEmptyVal(e) || t && /^\d{4}[-/](?:0?[1-9]|1[012])[-/](?:0?[1-9]|[12][0-9]|3[01])$/.test(e)
        },
        message: "Please enter a proper date."
    };
    r.rules["number"] = {
        validator: function (e, t) {
            if (!t) {
                return true
            }
            return r.utils.isEmptyVal(e) || t && /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
        },
        message: "Please enter a number."
    };
    r.rules["digit"] = {
        validator: function (e, t) {
            if (!t) {
                return true
            }
            return r.utils.isEmptyVal(e) || t && /^\d+$/.test(e)
        },
        message: "Please enter a digit."
    };
    r.rules["phoneUS"] = {
        validator: function (e, t) {
            if (!t) {
                return true
            }
            if (r.utils.isEmptyVal(e)) {
                return true
            }
            if (typeof e !== "string") {
                return false
            }
            e = e.replace(/\s+/g, "");
            return t && e.length > 9 && e.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)
        },
        message: "Please specify a valid phone number."
    };
    r.rules["equal"] = {
        validator: function (e, t) {
            var i = t;
            return e === r.utils.getValue(i)
        },
        message: "Values must equal."
    };
    r.rules["notEqual"] = {
        validator: function (e, t) {
            var i = t;
            return e !== r.utils.getValue(i)
        },
        message: "Please choose another value."
    };
    r.rules["unique"] = {
        validator: function (e, t) {
            var n = r.utils.getValue(t.collection),
                    a = r.utils.getValue(t.externalValue),
                    s = 0;
            if (!e || !n) {
                return true
            }
            i.arrayFilter(n, function (r) {
                if (e === (t.valueAccessor ? t.valueAccessor(r) : r)) {
                    s++
                }
            });
            return s < (!!a ? 1 : 2)
        },
        message: "Please make sure the value is unique."
    };
    (function () {
        r.registerExtenders()
    })();
    e.bindingHandlers["validationCore"] = function () {
        return {
            init: function (t, i, n, a, s) {
                var u = r.utils.getConfigOptions(t);
                var l = i();
                if (u.parseInputAttributes) {
                    r.utils.async(function () {
                        r.parseInputValidationAttributes(t, i)
                    })
                }
                if (u.insertMessages && r.utils.isValidatable(l)) {
                    var o = r.insertValidationMessage(t);
                    if (u.messageTemplate) {
                        e.renderTemplate(u.messageTemplate, {
                            field: l
                        }, null, o, "replaceNode")
                    } else {
                        e.applyBindingsToNode(o, {
                            validationMessage: l
                        })
                    }
                }
                if (u.writeInputAttributes && r.utils.isValidatable(l)) {
                    r.writeInputValidationAttributes(t, i)
                }
                if (u.decorateInputElement && r.utils.isValidatable(l)) {
                    e.applyBindingsToNode(t, {
                        validationElement: l
                    })
                }
            }
        }
    }();
    r.makeBindingHandlerValidatable("value");
    r.makeBindingHandlerValidatable("checked");
    if (e.bindingHandlers.textInput) {
        r.makeBindingHandlerValidatable("textInput")
    }
    r.makeBindingHandlerValidatable("selectedOptions");
    e.bindingHandlers["validationMessage"] = {
        update: function (t, a) {
            var s = a(),
                    u = r.utils.getConfigOptions(t),
                    l = n(s),
                    o = null,
                    d = false,
                    f = false;
            if (s === null || typeof s === "undefined") {
                throw new Error("Cannot bind validationMessage to undefined value. data-bind expression: " + t.getAttribute("data-bind"))
            }
            d = s.isModified && s.isModified();
            f = s.isValid && s.isValid();
            var c = null;
            if (!u.messagesOnModified || d) {
                c = f ? null : s.error
            }
            var p = !u.messagesOnModified || d ? !f : false;
            var v = t.style.display !== "none";
            if (u.allowHtmlMessages) {
                i.setHtml(t, c)
            } else {
                e.bindingHandlers.text.update(t, function () {
                    return c
                })
            }
            if (v && !p) {
                t.style.display = "none"
            } else if (!v && p) {
                t.style.display = ""
            }
        }
    };
    e.bindingHandlers["validationElement"] = {
        update: function (t, i, a) {
            var s = i(),
                    u = r.utils.getConfigOptions(t),
                    l = n(s),
                    o = null,
                    d = false,
                    f = false;
            if (s === null || typeof s === "undefined") {
                throw new Error("Cannot bind validationElement to undefined value. data-bind expression: " + t.getAttribute("data-bind"))
            }
            d = s.isModified && s.isModified();
            f = s.isValid && s.isValid();
            var c = function () {
                var e = {};
                var t = !u.decorateElementOnModified || d ? !f : false;
                e[u.errorElementClass] = t;
                return e
            };
            e.bindingHandlers.css.update(t, c, a);
            if (!u.errorsAsTitle) {
                return
            }
            e.bindingHandlers.attr.update(t, function () {
                var e = !u.errorsAsTitleOnModified || d,
                        i = r.utils.getOriginalElementTitle(t);
                if (e && !f) {
                    return {
                        title: s.error,
                        "data-orig-title": i
                    }
                } else if (!e || f) {
                    return {
                        title: i,
                        "data-orig-title": null
                    }
                }
            })
        }
    };
    e.bindingHandlers["validationOptions"] = function () {
        return {
            init: function (e, t, i, a, u) {
                var l = n(t());
                if (l) {
                    var o = s({}, r.configuration);
                    s(o, l);
                    r.utils.setDomData(e, o)
                }
            }
        }
    }();
    e.extenders["validation"] = function (e, t) {
        a(r.utils.isArray(t) ? t : [t], function (t) {
            r.addAnonymousRule(e, t)
        });
        return e
    };
    e.extenders["validatable"] = function (t, i) {
        if (!r.utils.isObject(i)) {
            i = {
                enable: i
            }
        }
        if (!("enable" in i)) {
            i.enable = true
        }
        if (i.enable && !r.utils.isValidatable(t)) {
            var n = r.configuration.validate || {};
            var a = {
                throttleEvaluation: i.throttle || n.throttle
            };
            t.error = e.observable(null);
            t.rules = e.observableArray();
            t.isValidating = e.observable(false);
            t.__valid__ = e.observable(true);
            t.isModified = e.observable(false);
            t.isValid = e.computed(t.__valid__);
            t.setError = function (e) {
                var r = t.error.peek();
                var i = t.__valid__.peek();
                t.error(e);
                t.__valid__(false);
                if (r !== e && !i) {
                    t.isValid.notifySubscribers()
                }
            };
            t.clearError = function () {
                t.error(null);
                t.__valid__(true);
                return t
            };
            var u = t.subscribe(function () {
                t.isModified(true)
            });
            var l = e.computed(s({
                read: function () {
                    var e = t(),
                            i = t.rules();
                    r.validateObservable(t);
                    return true
                }
            }, a));
            s(l, a);
            t._disposeValidation = function () {
                t.isValid.dispose();
                t.rules.removeAll();
                u.dispose();
                l.dispose();
                delete t["rules"];
                delete t["error"];
                delete t["isValid"];
                delete t["isValidating"];
                delete t["__valid__"];
                delete t["isModified"];
                delete t["setError"];
                delete t["clearError"];
                delete t["_disposeValidation"]
            }
        } else if (i.enable === false && t._disposeValidation) {
            t._disposeValidation()
        }
        return t
    };

    function f(e, t, i) {
        if (!t.validator(e(), i.params === undefined ? true : n(i.params))) {
            e.setError(r.formatMessage(i.message || t.message, n(i.params), e));
            return false
        } else {
            return true
        }
    }

    function c(e, t, i) {
        e.isValidating(true);
        var a = function (a) {
            var s = false,
                    u = "";
            if (!e.__valid__()) {
                e.isValidating(false);
                return
            }
            if (a["message"]) {
                s = a.isValid;
                u = a.message
            } else {
                s = a
            }
            if (!s) {
                e.error(r.formatMessage(u || i.message || t.message, n(i.params), e));
                e.__valid__(s)
            }
            e.isValidating(false)
        };
        r.utils.async(function () {
            t.validator(e(), i.params === undefined ? true : n(i.params), a)
        })
    }
    r.validateObservable = function (e) {
        var t = 0,
                i, n, a = e.rules(),
                s = a.length;
        for (; t < s; t++) {
            n = a[t];
            if (n.condition && !n.condition()) {
                continue
            }
            i = n.rule ? r.rules[n.rule] : n;
            if (i["async"] || n["async"]) {
                c(e, i, n)
            } else {
                if (!f(e, i, n)) {
                    return false
                }
            }
        }
        e.clearError();
        return true
    };
    var p = {};
    var v;
    r.defineLocale = function (e, t) {
        if (e && t) {
            p[e.toLowerCase()] = t;
            return t
        }
        return null
    };
    r.locale = function (e) {
        if (e) {
            e = e.toLowerCase();
            if (p.hasOwnProperty(e)) {
                r.localize(p[e]);
                v = e
            } else {
                throw new Error("Localization " + e + " has not been loaded.")
            }
        }
        return v
    };
    r.localize = function (e) {
        var t = r.rules;
        for (var i in e) {
            if (t.hasOwnProperty(i)) {
                t[i].message = e[i]
            }
        }
    };
    (function () {
        var e = {};
        var t = r.rules;
        for (var i in t) {
            if (t.hasOwnProperty(i)) {
                e[i] = t[i].message
            }
        }
        r.defineLocale("en-us", e)
    })();
    v = "en-us";
    e.applyBindingsWithValidation = function (t, i, n) {
        var a = document.body,
                u;
        if (i && i.nodeType) {
            a = i;
            u = n
        } else {
            u = i
        }
        r.init();
        if (u) {
            u = s(s({}, r.configuration), u);
            r.utils.setDomData(a, u)
        }
        e.applyBindings(t, a)
    };
    var g = e.applyBindings;
    e.applyBindings = function (e, t) {
        r.init();
        g(e, t)
    };
    e.validatedObservable = function (t, i) {
        if (!i && !r.utils.isObject(t)) {
            return e.observable(t).extend({
                validatable: true
            })
        }
        var n = e.observable(t);
        n.errors = r.group(r.utils.isObject(t) ? t : {}, i);
        n.isValid = e.observable(n.errors().length === 0);
        if (e.isObservable(n.errors)) {
            n.errors.subscribe(function (e) {
                n.isValid(e.length === 0)
            })
        } else {
            e.computed(n.errors).subscribe(function (e) {
                n.isValid(e.length === 0)
            })
        }
        n.subscribe(function (e) {
            if (!r.utils.isObject(e)) {
                e = {}
            }
            n.errors._updateState(e);
            n.isValid(n.errors().length === 0)
        });
        return n
    }
});
!function (t, o) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], o)
    } else if (typeof exports === "object") {
        module.exports = o(require("jquery"))
    } else {
        o(t.jQuery)
    }
}(this, function (t) {
    if (typeof Object.create !== "function") {
        Object.create = function (t) {
            function o() {}
            o.prototype = t;
            return new o
        }
    }
    var o = {
        init: function (o) {
            this.options = t.extend({}, t.noty.defaults, o);
            this.options.layout = this.options.custom ? t.noty.layouts["inline"] : t.noty.layouts[this.options.layout];
            if (t.noty.themes[this.options.theme])
                this.options.theme = t.noty.themes[this.options.theme];
            else
                o.themeClassName = this.options.theme;
            delete o.layout;
            delete o.theme;
            this.options = t.extend({}, this.options, this.options.layout.options);
            this.options.id = "noty_" + (new Date).getTime() * Math.floor(Math.random() * 1e6);
            this.options = t.extend({}, this.options, o);
            this._build();
            return this
        },
        _build: function () {
            var o = t('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
            o.append(this.options.template).find(".noty_text").html(this.options.text);
            this.$bar = this.options.layout.parent.object !== null ? t(this.options.layout.parent.object).css(this.options.layout.parent.css).append(o) : o;
            if (this.options.themeClassName)
                this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type);
            if (this.options.buttons) {
                this.options.closeWith = [];
                this.options.timeout = false;
                var e = t("<div/>").addClass("noty_buttons");
                this.options.layout.parent.object !== null ? this.$bar.find(".noty_bar").append(e) : this.$bar.append(e);
                var n = this;
                t.each(this.options.buttons, function (o, e) {
                    var s = t("<button/>").addClass(e.addClass ? e.addClass : "gray").html(e.text).attr("id", e.id ? e.id : "button-" + o).attr("title", e.title).appendTo(n.$bar.find(".noty_buttons")).on("click", function (o) {
                        if (t.isFunction(e.onClick)) {
                            e.onClick.call(s, n, o)
                        }
                    })
                })
            }
            this.$message = this.$bar.find(".noty_message");
            this.$closeButton = this.$bar.find(".noty_close");
            this.$buttons = this.$bar.find(".noty_buttons");
            t.noty.store[this.options.id] = this
        },
        show: function () {
            var o = this;
            o.options.custom ? o.options.custom.find(o.options.layout.container.selector).append(o.$bar) : t(o.options.layout.container.selector).append(o.$bar);
            if (o.options.theme && o.options.theme.style)
                o.options.theme.style.apply(o);
            t.type(o.options.layout.css) === "function" ? this.options.layout.css.apply(o.$bar) : o.$bar.css(this.options.layout.css || {});
            o.$bar.addClass(o.options.layout.addClass);
            o.options.layout.container.style.apply(t(o.options.layout.container.selector), [o.options.within]);
            o.showing = true;
            if (o.options.theme && o.options.theme.style)
                o.options.theme.callback.onShow.apply(this);
            if (t.inArray("click", o.options.closeWith) > -1)
                o.$bar.css("cursor", "pointer").one("click", function (t) {
                    o.stopPropagation(t);
                    if (o.options.callback.onCloseClick) {
                        o.options.callback.onCloseClick.apply(o)
                    }
                    o.close()
                });
            if (t.inArray("hover", o.options.closeWith) > -1)
                o.$bar.one("mouseenter", function () {
                    o.close()
                });
            if (t.inArray("button", o.options.closeWith) > -1)
                o.$closeButton.one("click", function (t) {
                    o.stopPropagation(t);
                    o.close()
                });
            if (t.inArray("button", o.options.closeWith) == -1)
                o.$closeButton.remove();
            if (o.options.callback.onShow)
                o.options.callback.onShow.apply(o);
            if (typeof o.options.animation.open == "string") {
                o.$bar.css("height", o.$bar.innerHeight());
                o.$bar.on("click", function (t) {
                    o.wasClicked = true
                });
                o.$bar.show().addClass(o.options.animation.open).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    if (o.options.callback.afterShow)
                        o.options.callback.afterShow.apply(o);
                    o.showing = false;
                    o.shown = true;
                    if (o.hasOwnProperty("wasClicked")) {
                        o.$bar.off("click", function (t) {
                            o.wasClicked = true
                        });
                        o.close()
                    }
                })
            } else {
                o.$bar.animate(o.options.animation.open, o.options.animation.speed, o.options.animation.easing, function () {
                    if (o.options.callback.afterShow)
                        o.options.callback.afterShow.apply(o);
                    o.showing = false;
                    o.shown = true
                })
            }
            if (o.options.timeout)
                o.$bar.delay(o.options.timeout).promise().done(function () {
                    o.close()
                });
            return this
        },
        close: function () {
            if (this.closed)
                return;
            if (this.$bar && this.$bar.hasClass("i-am-closing-now"))
                return;
            var o = this;
            if (this.showing) {
                o.$bar.queue(function () {
                    o.close.apply(o)
                });
                return
            }
            if (!this.shown && !this.showing) {
                var e = [];
                t.each(t.noty.queue, function (t, n) {
                    if (n.options.id != o.options.id) {
                        e.push(n)
                    }
                });
                t.noty.queue = e;
                return
            }
            o.$bar.addClass("i-am-closing-now");
            if (o.options.callback.onClose) {
                o.options.callback.onClose.apply(o)
            }
            if (typeof o.options.animation.close == "string") {
                o.$bar.addClass(o.options.animation.close).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    if (o.options.callback.afterClose)
                        o.options.callback.afterClose.apply(o);
                    o.closeCleanUp()
                })
            } else {
                o.$bar.clearQueue().stop().animate(o.options.animation.close, o.options.animation.speed, o.options.animation.easing, function () {
                    if (o.options.callback.afterClose)
                        o.options.callback.afterClose.apply(o)
                }).promise().done(function () {
                    o.closeCleanUp()
                })
            }
        },
        closeCleanUp: function () {
            var o = this;
            if (o.options.modal) {
                t.notyRenderer.setModalCount(-1);
                if (t.notyRenderer.getModalCount() == 0)
                    t(".noty_modal").fadeOut(o.options.animation.fadeSpeed, function () {
                        t(this).remove()
                    })
            }
            t.notyRenderer.setLayoutCountFor(o, -1);
            if (t.notyRenderer.getLayoutCountFor(o) == 0)
                t(o.options.layout.container.selector).remove();
            if (typeof o.$bar !== "undefined" && o.$bar !== null) {
                if (typeof o.options.animation.close == "string") {
                    o.$bar.css("transition", "all 100ms ease").css("border", 0).css("margin", 0).height(0);
                    o.$bar.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        o.$bar.remove();
                        o.$bar = null;
                        o.closed = true;
                        if (o.options.theme.callback && o.options.theme.callback.onClose) {
                            o.options.theme.callback.onClose.apply(o)
                        }
                    })
                } else {
                    o.$bar.remove();
                    o.$bar = null;
                    o.closed = true
                }
            }
            delete t.noty.store[o.options.id];
            if (o.options.theme.callback && o.options.theme.callback.onClose) {
                o.options.theme.callback.onClose.apply(o)
            }
            if (!o.options.dismissQueue) {
                t.noty.ontap = true;
                t.notyRenderer.render()
            }
            if (o.options.maxVisible > 0 && o.options.dismissQueue) {
                t.notyRenderer.render()
            }
        },
        setText: function (t) {
            if (!this.closed) {
                this.options.text = t;
                this.$bar.find(".noty_text").html(t)
            }
            return this
        },
        setType: function (t) {
            if (!this.closed) {
                this.options.type = t;
                this.options.theme.style.apply(this);
                this.options.theme.callback.onShow.apply(this)
            }
            return this
        },
        setTimeout: function (t) {
            if (!this.closed) {
                var o = this;
                this.options.timeout = t;
                o.$bar.delay(o.options.timeout).promise().done(function () {
                    o.close()
                })
            }
            return this
        },
        stopPropagation: function (t) {
            t = t || window.event;
            if (typeof t.stopPropagation !== "undefined") {
                t.stopPropagation()
            } else {
                t.cancelBubble = true
            }
        },
        closed: false,
        showing: false,
        shown: false
    };
    t.notyRenderer = {};
    t.notyRenderer.init = function (e) {
        var n = Object.create(o).init(e);
        if (n.options.killer)
            t.noty.closeAll();
        n.options.force ? t.noty.queue.unshift(n) : t.noty.queue.push(n);
        t.notyRenderer.render();
        return t.noty.returns == "object" ? n : n.options.id
    };
    t.notyRenderer.render = function () {
        var o = t.noty.queue[0];
        if (t.type(o) === "object") {
            if (o.options.dismissQueue) {
                if (o.options.maxVisible > 0) {
                    if (t(o.options.layout.container.selector + " > li").length < o.options.maxVisible) {
                        t.notyRenderer.show(t.noty.queue.shift())
                    } else {
                    }
                } else {
                    t.notyRenderer.show(t.noty.queue.shift())
                }
            } else {
                if (t.noty.ontap) {
                    t.notyRenderer.show(t.noty.queue.shift());
                    t.noty.ontap = false
                }
            }
        } else {
            t.noty.ontap = true
        }
    };
    t.notyRenderer.show = function (o) {
        if (o.options.modal) {
            t.notyRenderer.createModalFor(o);
            t.notyRenderer.setModalCount(+1)
        }
        if (o.options.custom) {
            if (o.options.custom.find(o.options.layout.container.selector).length == 0) {
                o.options.custom.append(t(o.options.layout.container.object).addClass("i-am-new"))
            } else {
                o.options.custom.find(o.options.layout.container.selector).removeClass("i-am-new")
            }
        } else {
            if (t(o.options.layout.container.selector).length == 0) {
                t("body").append(t(o.options.layout.container.object).addClass("i-am-new"))
            } else {
                t(o.options.layout.container.selector).removeClass("i-am-new")
            }
        }
        t.notyRenderer.setLayoutCountFor(o, +1);
        o.show()
    };
    t.notyRenderer.createModalFor = function (o) {
        if (t(".noty_modal").length == 0) {
            var e = t("<div/>").addClass("noty_modal").addClass(o.options.theme).data("noty_modal_count", 0);
            if (o.options.theme.modal && o.options.theme.modal.css)
                e.css(o.options.theme.modal.css);
            e.prependTo(t("body")).fadeIn(o.options.animation.fadeSpeed);
            if (t.inArray("backdrop", o.options.closeWith) > -1)
                e.on("click", function (o) {
                    t.noty.closeAll()
                })
        }
    };
    t.notyRenderer.getLayoutCountFor = function (o) {
        return t(o.options.layout.container.selector).data("noty_layout_count") || 0
    };
    t.notyRenderer.setLayoutCountFor = function (o, e) {
        return t(o.options.layout.container.selector).data("noty_layout_count", t.notyRenderer.getLayoutCountFor(o) + e)
    };
    t.notyRenderer.getModalCount = function () {
        return t(".noty_modal").data("noty_modal_count") || 0
    };
    t.notyRenderer.setModalCount = function (o) {
        return t(".noty_modal").data("noty_modal_count", t.notyRenderer.getModalCount() + o)
    };
    t.fn.noty = function (o) {
        o.custom = t(this);
        return t.notyRenderer.init(o)
    };
    t.noty = {};
    t.noty.queue = [];
    t.noty.ontap = true;
    t.noty.layouts = {};
    t.noty.themes = {};
    t.noty.returns = "object";
    t.noty.store = {};
    t.noty.get = function (o) {
        return t.noty.store.hasOwnProperty(o) ? t.noty.store[o] : false
    };
    t.noty.close = function (o) {
        return t.noty.get(o) ? t.noty.get(o).close() : false
    };
    t.noty.setText = function (o, e) {
        return t.noty.get(o) ? t.noty.get(o).setText(e) : false
    };
    t.noty.setType = function (o, e) {
        return t.noty.get(o) ? t.noty.get(o).setType(e) : false
    };
    t.noty.clearQueue = function () {
        t.noty.queue = []
    };
    t.noty.closeAll = function () {
        t.noty.clearQueue();
        t.each(t.noty.store, function (t, o) {
            o.close()
        })
    };
    var e = window.alert;
    t.noty.consumeAlert = function (o) {
        window.alert = function (e) {
            if (o)
                o.text = e;
            else
                o = {
                    text: e
                };
            t.notyRenderer.init(o)
        }
    };
    t.noty.stopConsumeAlert = function () {
        window.alert = e
    };
    t.noty.defaults = {
        layout: "top",
        theme: "defaultTheme",
        type: "alert",
        text: "",
        dismissQueue: true,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {
                height: "toggle"
            },
            close: {
                height: "toggle"
            },
            easing: "swing",
            speed: 500,
            fadeSpeed: "fast"
        },
        timeout: false,
        force: false,
        modal: false,
        maxVisible: 5,
        killer: false,
        closeWith: ["click"],
        callback: {
            onShow: function () {},
            afterShow: function () {},
            onClose: function () {},
            afterClose: function () {},
            onCloseClick: function () {}
        },
        buttons: false
    };
    t(window).on("resize", function () {
        t.each(t.noty.layouts, function (o, e) {
            e.container.style.apply(t(e.container.selector))
        })
    });
    window.noty = function n(o) {
        return t.notyRenderer.init(o)
    };
    t.noty.layouts.bottom = {
        name: "bottom",
        options: {},
        container: {
            object: '<ul id="noty_bottom_layout_container" />',
            selector: "ul#noty_bottom_layout_container",
            style: function () {
                t(this).css({
                    bottom: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    };
    t.noty.layouts.bottomCenter = {
        name: "bottomCenter",
        options: {},
        container: {
            object: '<ul id="noty_bottomCenter_layout_container" />',
            selector: "ul#noty_bottomCenter_layout_container",
            style: function () {
                t(this).css({
                    bottom: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                t(this).css({
                    left: (t(window).width() - t(this).outerWidth(false)) / 2 + "px"
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    t.noty.layouts.bottomLeft = {
        name: "bottomLeft",
        options: {},
        container: {
            object: '<ul id="noty_bottomLeft_layout_container" />',
            selector: "ul#noty_bottomLeft_layout_container",
            style: function () {
                t(this).css({
                    bottom: 20,
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                if (window.innerWidth < 600) {
                    t(this).css({
                        left: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    t.noty.layouts.bottomRight = {
        name: "bottomRight",
        options: {},
        container: {
            object: '<ul id="noty_bottomRight_layout_container" />',
            selector: "ul#noty_bottomRight_layout_container",
            style: function () {
                t(this).css({
                    bottom: 20,
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                if (window.innerWidth < 600) {
                    t(this).css({
                        right: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    t.noty.layouts.center = {
        name: "center",
        options: {},
        container: {
            object: '<ul id="noty_center_layout_container" />',
            selector: "ul#noty_center_layout_container",
            style: function () {
                t(this).css({
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var o = t(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                t("body").append(o);
                o.find(".i-am-closing-now").remove();
                o.find("li").css("display", "block");
                var e = o.height();
                o.remove();
                if (t(this).hasClass("i-am-new")) {
                    t(this).css({
                        left: (t(window).width() - t(this).outerWidth(false)) / 2 + "px",
                        top: (t(window).height() - e) / 2 + "px"
                    })
                } else {
                    t(this).animate({
                        left: (t(window).width() - t(this).outerWidth(false)) / 2 + "px",
                        top: (t(window).height() - e) / 2 + "px"
                    }, 500)
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    t.noty.layouts.centerLeft = {
        name: "centerLeft",
        options: {},
        container: {
            object: '<ul id="noty_centerLeft_layout_container" />',
            selector: "ul#noty_centerLeft_layout_container",
            style: function () {
                t(this).css({
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var o = t(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                t("body").append(o);
                o.find(".i-am-closing-now").remove();
                o.find("li").css("display", "block");
                var e = o.height();
                o.remove();
                if (t(this).hasClass("i-am-new")) {
                    t(this).css({
                        top: (t(window).height() - e) / 2 + "px"
                    })
                } else {
                    t(this).animate({
                        top: (t(window).height() - e) / 2 + "px"
                    }, 500)
                }
                if (window.innerWidth < 600) {
                    t(this).css({
                        left: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    t.noty.layouts.centerRight = {
        name: "centerRight",
        options: {},
        container: {
            object: '<ul id="noty_centerRight_layout_container" />',
            selector: "ul#noty_centerRight_layout_container",
            style: function () {
                t(this).css({
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                var o = t(this).clone().css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0
                }).attr("id", "dupe");
                t("body").append(o);
                o.find(".i-am-closing-now").remove();
                o.find("li").css("display", "block");
                var e = o.height();
                o.remove();
                if (t(this).hasClass("i-am-new")) {
                    t(this).css({
                        top: (t(window).height() - e) / 2 + "px"
                    })
                } else {
                    t(this).animate({
                        top: (t(window).height() - e) / 2 + "px"
                    }, 500)
                }
                if (window.innerWidth < 600) {
                    t(this).css({
                        right: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    t.noty.layouts.inline = {
        name: "inline",
        options: {},
        container: {
            object: '<ul class="noty_inline_layout_container" />',
            selector: "ul.noty_inline_layout_container",
            style: function () {
                t(this).css({
                    width: "100%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    };
    t.noty.layouts.top = {
        name: "top",
        options: {},
        container: {
            object: '<ul id="noty_top_layout_container" />',
            selector: "ul#noty_top_layout_container",
            style: function () {
                t(this).css({
                    top: 0,
                    left: "5%",
                    position: "fixed",
                    width: "90%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    };
    t.noty.layouts.topCenter = {
        name: "topCenter",
        options: {},
        container: {
            object: '<ul id="noty_topCenter_layout_container" />',
            selector: "ul#noty_topCenter_layout_container",
            style: function () {
                t(this).css({
                    top: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                t(this).css({
                    left: (t(window).width() - t(this).outerWidth(false)) / 2 + "px"
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    t.noty.layouts.topLeft = {
        name: "topLeft",
        options: {},
        container: {
            object: '<ul id="noty_topLeft_layout_container" />',
            selector: "ul#noty_topLeft_layout_container",
            style: function () {
                t(this).css({
                    top: 20,
                    left: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                if (window.innerWidth < 600) {
                    t(this).css({
                        left: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    t.noty.layouts.topRight = {
        name: "topRight",
        options: {},
        container: {
            object: '<ul id="noty_topRight_layout_container" />',
            selector: "ul#noty_topRight_layout_container",
            style: function () {
                t(this).css({
                    top: 20,
                    right: 20,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                });
                if (window.innerWidth < 600) {
                    t(this).css({
                        right: 5
                    })
                }
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none",
            width: "310px"
        },
        addClass: ""
    };
    t.noty.themes.bootstrapTheme = {
        name: "bootstrapTheme",
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function () {
            var o = this.options.layout.container.selector;
            t(o).addClass("list-group");
            this.$closeButton.append('<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>');
            this.$closeButton.addClass("close");
            this.$bar.addClass("list-group-item").css("padding", "0px");
            switch (this.options.type) {
                case "alert":
                case "notification":
                    this.$bar.addClass("list-group-item-info");
                    break;
                case "warning":
                    this.$bar.addClass("list-group-item-warning");
                    break;
                case "error":
                    this.$bar.addClass("list-group-item-danger");
                    break;
                case "information":
                    this.$bar.addClass("list-group-item-info");
                    break;
                case "success":
                    this.$bar.addClass("list-group-item-success");
                    break
            }
            this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            })
        },
        callback: {
            onShow: function () {},
            onClose: function () {}
        }
    };
    t.noty.themes.defaultTheme = {
        name: "defaultTheme",
        helpers: {
            borderFix: function () {
                if (this.options.dismissQueue) {
                    var o = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                    switch (this.options.layout.name) {
                        case "top":
                            t(o).css({
                                borderRadius: "0px 0px 0px 0px"
                            });
                            t(o).last().css({
                                borderRadius: "0px 0px 5px 5px"
                            });
                            break;
                        case "topCenter":
                        case "topLeft":
                        case "topRight":
                        case "bottomCenter":
                        case "bottomLeft":
                        case "bottomRight":
                        case "center":
                        case "centerLeft":
                        case "centerRight":
                        case "inline":
                            t(o).css({
                                borderRadius: "0px 0px 0px 0px"
                            });
                            t(o).first().css({
                                "border-top-left-radius": "5px",
                                "border-top-right-radius": "5px"
                            });
                            t(o).last().css({
                                "border-bottom-left-radius": "5px",
                                "border-bottom-right-radius": "5px"
                            });
                            break;
                        case "bottom":
                            t(o).css({
                                borderRadius: "0px 0px 0px 0px"
                            });
                            t(o).first().css({
                                borderRadius: "5px 5px 0px 0px"
                            });
                            break;
                        default:
                            break
                    }
                }
            }
        },
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function () {
            this.$bar.css({
                overflow: "hidden",
                background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAQAAAClM0ndAAAAhklEQVR4AdXO0QrCMBBE0bttkk38/w8WRERpdyjzVOc+HxhIHqJGMQcFFkpYRQotLLSw0IJ5aBdovruMYDA/kT8plF9ZKLFQcgF18hDj1SbQOMlCA4kao0iiXmah7qBWPdxpohsgVZyj7e5I9KcID+EhiDI5gxBYKLBQYKHAQoGFAoEks/YEGHYKB7hFxf0AAAAASUVORK5CYII=') repeat-x scroll left top #fff"
            });
            this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            });
            this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            });
            this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            });
            this.$buttons.find("button").css({
                marginLeft: 5
            });
            this.$buttons.find("button:first").css({
                marginLeft: 0
            });
            this.$bar.on({
                mouseenter: function () {
                    t(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function () {
                    t(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            });
            switch (this.options.layout.name) {
                case "top":
                    this.$bar.css({
                        borderRadius: "0px 0px 5px 5px",
                        borderBottom: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                case "topCenter":
                case "center":
                case "bottomCenter":
                case "inline":
                    this.$bar.css({
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        fontSize: "13px",
                        textAlign: "center"
                    });
                    break;
                case "topLeft":
                case "topRight":
                case "bottomLeft":
                case "bottomRight":
                case "centerLeft":
                case "centerRight":
                    this.$bar.css({
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        fontSize: "13px",
                        textAlign: "left"
                    });
                    break;
                case "bottom":
                    this.$bar.css({
                        borderRadius: "5px 5px 0px 0px",
                        borderTop: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                default:
                    this.$bar.css({
                        border: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break
            }
            switch (this.options.type) {
                case "alert":
                case "notification":
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break;
                case "warning":
                    this.$bar.css({
                        backgroundColor: "#FFEAA8",
                        borderColor: "#FFC237",
                        color: "#826200"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #FFC237"
                    });
                    break;
                case "error":
                    this.$bar.css({
                        backgroundColor: "red",
                        borderColor: "darkred",
                        color: "#FFF"
                    });
                    this.$message.css({
                        fontWeight: "bold"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid darkred"
                    });
                    break;
                case "information":
                    this.$bar.css({
                        backgroundColor: "#57B7E2",
                        borderColor: "#0B90C4",
                        color: "#FFF"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #0B90C4"
                    });
                    break;
                case "success":
                    this.$bar.css({
                        backgroundColor: "lightgreen",
                        borderColor: "#50C24E",
                        color: "darkgreen"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #50C24E"
                    });
                    break;
                default:
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break
            }
        },
        callback: {
            onShow: function () {
                t.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            },
            onClose: function () {
                t.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            }
        }
    };
    t.noty.themes.relax = {
        name: "relax",
        helpers: {},
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function () {
            this.$bar.css({
                overflow: "hidden",
                margin: "4px 0",
                borderRadius: "2px"
            });
            this.$message.css({
                fontSize: "14px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "10px",
                width: "auto",
                position: "relative"
            });
            this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            });
            this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            });
            this.$buttons.find("button").css({
                marginLeft: 5
            });
            this.$buttons.find("button:first").css({
                marginLeft: 0
            });
            this.$bar.on({
                mouseenter: function () {
                    t(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function () {
                    t(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            });
            switch (this.options.layout.name) {
                case "top":
                    this.$bar.css({
                        borderBottom: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        borderTop: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                case "topCenter":
                case "center":
                case "bottomCenter":
                case "inline":
                    this.$bar.css({
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        fontSize: "13px",
                        textAlign: "center"
                    });
                    break;
                case "topLeft":
                case "topRight":
                case "bottomLeft":
                case "bottomRight":
                case "centerLeft":
                case "centerRight":
                    this.$bar.css({
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    this.$message.css({
                        fontSize: "13px",
                        textAlign: "left"
                    });
                    break;
                case "bottom":
                    this.$bar.css({
                        borderTop: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        borderBottom: "2px solid #eee",
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                default:
                    this.$bar.css({
                        border: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break
            }
            switch (this.options.type) {
                case "alert":
                case "notification":
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#dedede",
                        color: "#444"
                    });
                    break;
                case "warning":
                    this.$bar.css({
                        backgroundColor: "#FFEAA8",
                        borderColor: "#FFC237",
                        color: "#826200"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #FFC237"
                    });
                    break;
                case "error":
                    this.$bar.css({
                        backgroundColor: "#FF8181",
                        borderColor: "#e25353",
                        color: "#FFF"
                    });
                    this.$message.css({
                        fontWeight: "bold"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid darkred"
                    });
                    break;
                case "information":
                    this.$bar.css({
                        backgroundColor: "#78C5E7",
                        borderColor: "#3badd6",
                        color: "#FFF"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #0B90C4"
                    });
                    break;
                case "success":
                    this.$bar.css({
                        backgroundColor: "#BCF5BC",
                        borderColor: "#7cdd77",
                        color: "darkgreen"
                    });
                    this.$buttons.css({
                        borderTop: "1px solid #50C24E"
                    });
                    break;
                default:
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break
            }
        },
        callback: {
            onShow: function () {},
            onClose: function () {}
        }
    };
    return window.noty
});
omerta = {
    config: {},
    GUI: {},
    model: {},
    loaded: {
        settings: ko.observableArray(),
        deadAccounts: ko.observableArray(),
        character: ko.observable()
    },
    footerOpen: ko.observable(false),
    tab: ko.observable("settings")
};
ko.components.register("character-wrapper", {
    viewModel: {
        instance: omerta.loaded.character
    },
    template: {
        element: "my-character"
    }
});
ko.components.register("widget-server", {
    viewModel: function (e) {
        this.title = ko.observable("Loading");
        this.subTitle = ko.observable("");
        this.hof = ko.observableArray([]);
        this.releaseDate = ko.observable("");
        this.onlineGangsters = ko.observable(0);
        this.aliveGangsters = ko.observable(0);
        this.totalGangsters = ko.observable(0);
        var t = this;
        var a = $.ajax("/?module=Homepage.Reset&action=hof");
        a.done(function (e) {
            t.title(e.title);
            t.subTitle(e.subtitle);
            t.hof(e.hof);
            t.releaseDate(e.release_date);
            t.onlineGangsters(e.stats.online);
            t.aliveGangsters(e.stats.alive);
            t.totalGangsters(e.stats.total)
        })
    },
    template: {
        element: "widget-server"
    }
});
omerta.config = {
    tabs: {
        SETTINGS: "settings",
        DEAD_ACCOUNTS: "dead_accounts",
        HELP: "help"
    }
};
omerta.GUI = {
    toggleFooter: function (e, a) {
        var o = $(a.target),
                r = "closed";
        var t = o.hasClass(r);
        if (t) {
            omerta.footerOpen(true)
        } else {
            omerta.footerOpen(false)
        }
    },
    showOmertician: function () {
        $("#wrapper").addClass("blur");
        $("#dead-container").fadeTo(1e3, 1);
        $("#dead-container .dead-skull img").fadeTo(3e3, 1)
    }
};
omerta.model.Character = function (e) {
    var t = this;
    var s = e.bNewUser;
    this.bNewUser = s;
    this.bLoading = ko.observable(typeof e.bLoading == "boolean" ? e.bLoading : true);
    this.name = ko.observable(e.name || "").extend({
        maxLength: 12,
        minLength: 2,
        required: {
            message: "You must choose an ingame before start"
        }
    });
    this.sex = ko.observable(e.sex || 1);
    this.sexKeyName = ko.computed(function () {
        return t.sex() == 2 ? "female" : "male"
    });
    this.rankName = e.rankName || "Empty-suit";
    this.lastrank = e.lastrank || 0;
    this.milestones = [new omerta.model.Milestone({
            type: 100
        }), new omerta.model.Milestone({
            type: 200
        }), new omerta.model.Milestone({
            type: 300
        }), new omerta.model.Milestone({
            type: 700
        })];
    this.goToProfile = function () {
        window.location.href = "/?module=UserInformation"
    };
    this.open = function () {
        var e = confirm("Are you sure that you want to continue ?");
        if (!e) {
            return false
        }
        if (!s) {
            this.goToProfile();
            return true
        }
        var o = this.errors();
        if (o.length > 0) {
            for (var a = 0 in o) {
                omerta.showMessages([{
                        type: "error",
                        text: o[a]
                    }])
            }
            return false
        }
        var r = ko.toJSON(t);
        var i = 0;
        for (var a in t.milestones) {
            i += t.milestones[a].value()
        }
        if (i < 100) {
            e = confirm("You did not select all milestones, ARE YOU SURE you want to proceed? (This action is non-reversible)");
            if (!e) {
                return false
            }
        }
        t.bLoading(true);
        var n = $.ajax({
            type: "POST",
            dataType: "json",
            url: "/?module=Account&action=create",
            data: {
                character: r
            }
        });
        n.done(function (e) {
            var s = $.parseJSON(r);
            omerta.showMessages(e.messages);
            if (e.aliveUser instanceof Object) {
                e.aliveUser.name = s.name;
                e.aliveUser.sex = s.sex;
                if (e.aliveUser.bNewUser === false) {
                    e.aliveUser.bLoading = true
                }
                omerta.loaded.character(new omerta.model.Character(e.aliveUser));
                if (e.aliveUser.bNewUser === false) {
                    setTimeout(t.goToProfile, 3e3)
                }
            }
        });
        return n
    };
    this.getImage = function () {
        var e = t.lastrank;
        if (e <= 0) {
            e = 1
        }
        return "assets/omerta/modules/UserInformation/assets/img/ranks/" + t.sexKeyName() + "/" + e + ".png"
    };
    this.selectMale = function () {
        if (s) {
            this.sex(1)
        }
    }.bind(this);
    this.selectFemale = function () {
        if (s) {
            this.sex(2)
        }
    }.bind(this);
    this.isMale = function () {
        return this.sex() == 1
    };
    this.isFemale = function () {
        return this.sex() == 2
    };
    this.sex.subscribe(function (e) {
        if (e < 1 || e > 2) {
            t.sex(1)
        }
    });
    this.errors = ko.validation.group(t)
};
omerta.model.Field = function (e, l) {
    var a = e.value,
            i = false;
    l = l || false;
    e.editable = true;
    e.description = e.description || "";
    e.options = e.options || [];
    e.readValue = e.readValue || false;
    switch (e.type) {
        case "multiple":
            e.fields = e.fields || [];
            var t = [];
            for (var r in e.fields) {
                t.push(new omerta.model.Field(e.fields[r], true))
            }
            var o = {
                label: e.label,
                showValue: ko.observable(false),
                toggleForm: omerta.fieldToggleForm,
                description: e.description,
                style: e.style || "inline",
                editable: e.editable || true,
                value: a,
                fields: t
            };
            return o;
            break;
        case "password":
            a = "";
            break;
        case "mail":
            i = true;
            e.editable = false;
            break;
        case "select":
            var s = ko.utils.arrayFilter(e.options, function (l) {
                if (l.key == e.value) {
                    return true
                }
            });
            if (s.length > 0) {
                a = s[0].text
            }
            break
    }
    if (e.readValue) {
        a = e.readValue
    }
    e.skipField = false;
    if (e.value === false && e.name === "halloffame") {
        e.skipField = true
    }
    return {
        attr: {
            type: e.type,
            value: e.value,
            name: e.name,
            disabled: i
        },
        name: e.name,
        value: a,
        label: e.label,
        description: e.description,
        skipField: e.skipField,
        editable: e.editable,
        options: e.options,
        showValue: ko.observable(l),
        toggleForm: omerta.fieldToggleForm,
        fields: [],
        optionsValue: function (e) {
            return e.key
        },
        optionsText: function (e) {
            return e.text
        }
    }
};
omerta.model.Milestone = function (e) {
    var t = {
        100: "Rank Progress",
        200: "Bullets",
        300: "Bustouts",
        400: "Kills",
        500: "Work Experience",
        600: "Possessions",
        700: "Money"
    };
    if (typeof e.type === "undefined") {
        throw "Type is required to build a milestone"
    }
    if (typeof t[e.type] == "undefined") {
        throw "The type of milestone is not valid"
    }
    this.value = ko.observable(0);
    this.label = t[e.type];
    this.type = e.type;
    this.getWidth = function () {
        return this.value() + "%"
    };
    this.isIncreaseDisabled = function () {
        if (this.type == 100 && this.value() >= 40) {
            return true
        }
        var e = omerta.sumMilestones();
        if (e >= 10) {
            return true
        }
        return false
    };
    this.increase = function () {
        if (this.isIncreaseDisabled()) {
            return false
        }
        var e = this.value();
        if (e >= 100) {
            return false
        }
        this.value(e + 10)
    }.bind(this);
    this.decrease = function () {
        var e = this.value();
        if (e <= 0) {
            return false
        }
        this.value(e - 10)
    }.bind(this);
    this.getTextValue = function () {
        var e = this.value();
        if (e <= 0) {
            return "0"
        }
        e = e / 10;
        return e
    };
    this.getClassName = function () {
        var e = ["progressbar"];
        var t = this.value();
        if (t <= 20) {
            e.push("red-bg")
        }
        if (t > 20 && t <= 50) {
            e.push("orange-bg")
        }
        if (t > 50 && t <= 80) {
            e.push("yellow-bg")
        }
        if (t > 80) {
            e.push("green-bg")
        }
        return e.join(" ")
    }
};
omerta.model.Setting = function (e) {
    var i = e.fields;
    this.getFields = function () {
        var e = [];
        for (var n = 0 in i) {
            var t = new omerta.model.Field(i[n]);
            if (t.skipField) {
                continue
            }
            e.push(t)
        }
        return e
    }
};
omerta.GUI = {
    toggleFooter: function (e, a) {
        var o = $(a.target),
                r = "closed";
        var t = o.hasClass(r);
        if (t) {
            omerta.footerOpen(true)
        } else {
            omerta.footerOpen(false)
        }
    },
    showOmertician: function () {
        $("#wrapper").addClass("blur");
        $("#dead-container").fadeTo(1e3, 1);
        $("#dead-container .dead-skull img").fadeTo(3e3, 1)
    }
};
omerta.tab.extend({
    notify: "always"
});
omerta.loadEndpoint = function (e) {
    var t = "/?module=Account&action=" + e + "Endpoint";
    var a = $.ajax(t, {
        dataType: "json"
    });
    return a
};
omerta.setTabSettings = function () {
    omerta.tab(omerta.config.tabs.SETTINGS)
};
omerta.setTabDead = function () {
    omerta.tab(omerta.config.tabs.DEAD_ACCOUNTS)
};
omerta.setTabHelp = function () {
    omerta.tab(omerta.config.tabs.HELP)
};
omerta.isEnabledTabSetting = function () {
    return omerta.tab() === omerta.config.tabs.SETTINGS
};
omerta.isEnabledTabHelp = function () {
    return omerta.tab() === omerta.config.tabs.HELP
};
omerta.isEnabledTabDead = function () {
    return omerta.tab() === omerta.config.tabs.DEAD_ACCOUNTS
};
omerta.footerOpen.subscribe(function (e) {
    if (e) {
        $("#tabs").stop().slideDown()
    } else {
        $("#tabs").stop().slideUp()
    }
});
omerta.tab.subscribe(function (e) {
    if (typeof e === "string") {
        setTimeout(function () {
            omerta.footerOpen(true)
        }, 100)
    }
});
omerta.loadDeadContainer = function () {
    var e = $("#dead-container");
    if (typeof e !== "undefined" && e.length > 0) {
        omerta.GUI.showOmertician()
    }
    $(document).on("click touchend", "#revenge-button", function (t) {
        t.preventDefault();
        e.fadeTo(500, 0, function () {
            $("#wrapper").removeClass("blur");
            e.hide()
        })
    })
};
omerta.fieldToggleForm = function (e, t) {
    if (e.showValue()) {
        var a = omerta.saveForm(e, t);
        if (!(a instanceof Object)) {
            e.showValue(false)
        }
    } else {
        e.showValue(true)
    }
};
omerta.saveForm = function (e, t) {
    var a = $(t.target),
            o = a.parents("fieldset"),
            n = o.find("input, select, textarea");
    var r = n.serialize();
    if (!typeof e.editable !== "undefined" && !e.editable) {
        return false
    }
    var i = $.ajax({
        type: "POST",
        url: "/?module=Account&action=saveSetting",
        data: r,
        dataType: "json"
    });
    i.done(function (e) {
        if (e.messages.length == 0) {
            var t = new omerta.model.Setting(e.settings);
            omerta.loaded.settings(t.getFields())
        } else {
            omerta.showMessages(e.messages)
        }
    });
    return i
};
omerta.showMessages = function (e) {
    if (!(e instanceof Array)) {
        return false
    }
    for (var t = 0 in e) {
        var a = noty(e[t])
    }
};
omerta.open = function () {
    return omerta.loaded.character().open()
};
omerta.loadUser = function () {
    omerta.loaded.character(new omerta.model.Character({}));
    var e = omerta.loadEndpoint("AliveUser");
    e.done(function (e) {
        if (e.length != 0 && e instanceof Object) {
            omerta.loaded.character(new omerta.model.Character(e))
        }
    });
    return e
};
omerta.sumMilestones = function () {
    var e = 0;
    for (var t = 0 in omerta.loaded.character().milestones) {
        e += omerta.loaded.character().milestones[t].value()
    }
    if (e <= 0) {
        return 0
    }
    return e / 10
};
$(document).ready(function () {
    ko.applyBindings(omerta);
    var e = omerta.loadEndpoint("Footer");
    e.done(function (e) {
        var t = new omerta.model.Setting(e.settings);
        omerta.loaded.settings(t.getFields());
        omerta.loaded.deadAccounts(e.dead)
    });
    omerta.loadUser()
});