(function (t, e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(t.jQuery)
    }
})(this, function (t) {
    "use strict";
    var e = function (t, i) {
        var n = this;
        n.id = e.count++;
        e.lifo.push(n);
        if (t) {
            n.open(t, i)
        }
        return n
    };
    e.defaults = {
        prefix: "jqi",
        classes: {
            box: "",
            fade: "",
            prompt: "",
            form: "",
            close: "",
            title: "",
            message: "",
            buttons: "",
            button: "",
            defaultButton: ""
        },
        title: "",
        closeText: "&times;",
        buttons: {
            Ok: true
        },
        buttonTimeout: 1e3,
        loaded: function (t) {},
        submit: function (t, e, i, n) {},
        close: function (t, e, i, n) {},
        statechanging: function (t, e, i) {},
        statechanged: function (t, e) {},
        opacity: .6,
        zIndex: 999,
        overlayspeed: "slow",
        promptspeed: "fast",
        show: "fadeIn",
        hide: "fadeOut",
        focus: 0,
        defaultButton: 0,
        useiframe: false,
        top: "15%",
        position: {
            container: null,
            x: null,
            y: null,
            arrow: null,
            width: null
        },
        persistent: true,
        timeout: 0,
        states: {},
        initialState: 0,
        state: {
            name: null,
            title: "",
            html: "",
            buttons: {
                Ok: true
            },
            focus: 0,
            defaultButton: 0,
            position: {
                container: null,
                x: null,
                y: null,
                arrow: null,
                width: null
            },
            submit: function (t, e, i, n) {
                return true
            }
        }
    };
    e.setDefaults = function (i) {
        e.defaults = t.extend({}, e.defaults, i)
    };
    e.setStateDefaults = function (i) {
        e.defaults.state = t.extend({}, e.defaults.state, i)
    };
    e.count = 0;
    e.lifo = [];
    e.getLast = function () {
        var t = e.lifo.length;
        return t > 0 ? e.lifo[t - 1] : false
    };
    e.removeFromStack = function (t) {
        for (var i = e.lifo.length - 1; i >= 0; i--) {
            if (e.lifo[i].id === t) {
                return e.lifo.splice(i, 1)[0]
            }
        }
    };
    e.prototype = {
        id: null,
        open: function (i, n) {
            var o = this;
            o.options = t.extend({}, e.defaults, n);
            if (o.timeout) {
                clearTimeout(o.timeout)
            }
            o.timeout = false;
            var s = o.options,
                    a = t(document.body),
                    r = t(window);
            var f = '<div class="' + s.prefix + "box " + s.classes.box + '">';
            if (s.useiframe && t("object, applet").length > 0) {
                f += '<iframe src="javascript:false;" class="' + s.prefix + "fade " + s.classes.fade + '"></iframe>'
            } else {
                f += '<div class="' + s.prefix + "fade " + s.classes.fade + '"></div>'
            }
            f += '<div class="' + s.prefix + " " + s.classes.prompt + '">' + '<form action="#" class="' + s.prefix + "form " + s.classes.form + '">' + '<div class="' + s.prefix + "close " + s.classes.close + '">' + s.closeText + "</div>" + '<div class="' + s.prefix + 'states"></div>' + "</form>" + "</div>" + "</div>";
            o.jqib = t(f).appendTo(a);
            o.jqi = o.jqib.children("." + s.prefix);
            o.jqif = o.jqib.children("." + s.prefix + "fade");
            if (i.constructor === String) {
                i = {
                    state0: {
                        title: s.title,
                        html: i,
                        buttons: s.buttons,
                        position: s.position,
                        focus: s.focus,
                        defaultButton: s.defaultButton,
                        submit: s.submit
                    }
                }
            }
            o.options.states = {};
            var u, l;
            for (u in i) {
                l = t.extend({}, e.defaults.state, {
                    name: u
                }, i[u]);
                o.addState(l.name, l);
                if (o.currentStateName === "") {
                    o.currentStateName = l.name
                }
            }
            o.jqi.on("click", "." + s.prefix + "buttons button", function (e) {
                var i = t(this),
                        n = i.parents("." + s.prefix + "state"),
                        a = n.data("jqi-name"),
                        r = o.options.states[a],
                        f = n.children("." + s.prefix + "message"),
                        u = r.buttons[i.text()] || r.buttons[i.html()],
                        l = {};
                if (o.options.buttonTimeout > 0) {
                    o.disableStateButtons(a);
                    setTimeout(function () {
                        o.enableStateButtons(a)
                    }, o.options.buttonTimeout)
                }
                if (u === undefined) {
                    for (var p in r.buttons) {
                        if (r.buttons[p].title === i.text() || r.buttons[p].title === i.html()) {
                            u = r.buttons[p].value
                        }
                    }
                }
                t.each(o.jqi.children("form").serializeArray(), function (t, e) {
                    if (l[e.name] === undefined) {
                        l[e.name] = e.value
                    } else if (typeof l[e.name] === Array || typeof l[e.name] === "object") {
                        l[e.name].push(e.value)
                    } else {
                        l[e.name] = [l[e.name], e.value]
                    }
                });
                var d = new t.Event("impromptu:submit");
                d.stateName = r.name;
                d.state = n;
                n.trigger(d, [u, f, l]);
                if (!d.isDefaultPrevented()) {
                    o.close(true, u, f, l)
                }
            });
            var p = function () {
                if (s.persistent) {
                    var e = s.top.toString().indexOf("%") >= 0 ? r.height() * (parseInt(s.top, 10) / 100) : parseInt(s.top, 10),
                            i = parseInt(o.jqi.css("top").replace("px", ""), 10) - e;
                    t("html,body").animate({
                        scrollTop: i
                    }, "fast", function () {
                        var t = 0;
                        o.jqib.addClass(s.prefix + "warning");
                        var e = setInterval(function () {
                            o.jqib.toggleClass(s.prefix + "warning");
                            if (t++ > 1) {
                                clearInterval(e);
                                o.jqib.removeClass(s.prefix + "warning")
                            }
                        }, 100)
                    })
                } else {
                    o.close(true)
                }
            };
            var d = function (e) {
                var i = window.event ? event.keyCode : e.keyCode;
                if (i === 27) {
                    p()
                }
                if (i === 13) {
                    var n = o.getCurrentState().find("." + s.prefix + "defaultbutton");
                    var a = t(e.target);
                    if (a.is("textarea,." + s.prefix + "button") === false && n.length > 0) {
                        e.preventDefault();
                        n.click()
                    }
                }
                if (i === 9) {
                    var r = t("input,select,textarea,button", o.getCurrentState());
                    var f = !e.shiftKey && e.target === r[r.length - 1];
                    var u = e.shiftKey && e.target === r[0];
                    if (f || u) {
                        setTimeout(function () {
                            if (!r) {
                                return
                            }
                            var t = r[u === true ? r.length - 1 : 0];
                            if (t) {
                                t.focus()
                            }
                        }, 10);
                        return false
                    }
                }
            };
            o.position();
            o.style();
            o._windowResize = function (t) {
                o.position(t)
            };
            r.resize({
                animate: false
            }, o._windowResize);
            o.jqif.click(p);
            o.jqi.find("." + s.prefix + "close").click(function () {
                o.close()
            });
            o.jqi.find("." + s.prefix + "form").submit(function () {
                return false
            });
            o.jqib.on("keydown", d).on("impromptu:loaded", s.loaded).on("impromptu:close", s.close).on("impromptu:statechanging", s.statechanging).on("impromptu:statechanged", s.statechanged);
            o.jqif[s.show](s.overlayspeed);
            o.jqi[s.show](s.promptspeed, function () {
                o.goToState(isNaN(s.initialState) ? s.initialState : o.jqi.find("." + s.prefix + "states ." + s.prefix + "state").eq(s.initialState).data("jqi-name"));
                o.jqib.trigger("impromptu:loaded")
            });
            if (s.timeout > 0) {
                o.timeout = setTimeout(function () {
                    o.close(true)
                }, s.timeout)
            }
            return o
        },
        close: function (i, n, o, s) {
            var a = this;
            e.removeFromStack(a.id);
            if (a.timeout) {
                clearTimeout(a.timeout);
                a.timeout = false
            }
            if (a.jqib) {
                a.jqib[a.options.hide]("fast", function () {
                    a.jqib.trigger("impromptu:close", [n, o, s]);
                    a.jqib.remove();
                    t(window).off("resize", a._windowResize);
                    if (typeof i === "function") {
                        i()
                    }
                })
            }
            a.currentStateName = "";
            return a
        },
        addState: function (i, n, o) {
            var s = this,
                    a = "",
                    r = null,
                    f = "",
                    u = "",
                    l = s.options,
                    p = s.jqi.find("." + l.prefix + "states"),
                    d = [],
                    c, m, h, g, b, v = 0;
            n = t.extend({}, e.defaults.state, {
                name: i
            }, n);
            if (n.position.arrow !== null) {
                f = '<div class="' + l.prefix + "arrow " + l.prefix + "arrow" + n.position.arrow + '"></div>'
            }
            if (n.title && n.title !== "") {
                u = '<div class="lead ' + l.prefix + "title " + l.classes.title + '">' + n.title + "</div>"
            }
            c = n.html;
            if (typeof n.html === "function") {
                c = "Error: html function must return text"
            }
            a += '<div class="' + l.prefix + 'state" data-jqi-name="' + i + '">' + f + u + '<div class="' + l.prefix + "message " + l.classes.message + '">' + c + "</div>" + '<div class="' + l.prefix + "buttons" + (t.isEmptyObject(n.buttons) ? "hide " : " ") + l.classes.buttons + '">';
            if (t.isArray(n.buttons)) {
                d = n.buttons
            } else if (t.isPlainObject(n.buttons)) {
                for (h in n.buttons) {
                    if (n.buttons.hasOwnProperty(h)) {
                        d.push({
                            title: h,
                            value: n.buttons[h]
                        })
                    }
                }
            }
            for (v = 0, b = d.length; v < b; v++) {
                g = d[v], m = n.focus === v || isNaN(n.focus) && n.defaultButton === v ? l.prefix + "defaultbutton " + l.classes.defaultButton : "";
                a += '<button class="' + l.classes.button + " " + l.prefix + "button " + m;
                if (typeof g.classes !== "undefined") {
                    a += " " + (t.isArray(g.classes) ? g.classes.join(" ") : g.classes) + " "
                }
                a += '" name="' + l.prefix + "_" + i + "_button" + g.title.replace(/[^a-z0-9]+/gi, "") + '" value="' + g.value + '">' + g.title + "</button>"
            }
            a += "</div></div>";
            r = t(a).css({
                display: "none"
            });
            r.on("impromptu:submit", n.submit);
            if (o !== undefined) {
                s.getState(o).after(r)
            } else {
                p.append(r)
            }
            s.options.states[i] = n;
            return r
        },
        removeState: function (t, e) {
            var i = this,
                    n = i.getState(t),
                    o = function () {
                        n.remove()
                    };
            if (n.length === 0) {
                return false
            }
            if (n.css("display") !== "none") {
                if (e !== undefined && i.getState(e).length > 0) {
                    i.goToState(e, false, o)
                } else if (n.next().length > 0) {
                    i.nextState(o)
                } else if (n.prev().length > 0) {
                    i.prevState(o)
                } else {
                    i.close()
                }
            } else {
                n.slideUp("slow", o)
            }
            return true
        },
        getApi: function () {
            return this
        },
        getBox: function () {
            return this.jqib
        },
        getPrompt: function () {
            return this.jqi
        },
        getState: function (t) {
            return this.jqi.find('[data-jqi-name="' + t + '"]')
        },
        getCurrentState: function () {
            return this.getState(this.getCurrentStateName())
        },
        getCurrentStateName: function () {
            return this.currentStateName
        },
        disableStateButtons: function (e, i, n) {
            var o = this;
            if (t.isArray(e)) {
                i = e;
                e = null
            }
            o.getState(e || o.getCurrentStateName()).find("." + o.options.prefix + "button").each(function (e, o) {
                if (i === undefined || t.inArray(o.value, i) !== -1) {
                    o.disabled = !n
                }
            })
        },
        enableStateButtons: function (t, e) {
            this.disableStateButtons(t, e, true)
        },
        position: function (e) {
            var i = this,
                    n = t.fx.off,
                    o = i.getCurrentState(),
                    s = i.options.states[o.data("jqi-name")],
                    a = s ? s.position : undefined,
                    r = t(window),
                    f = document.body.scrollHeight,
                    u = t(window).height(),
                    l = t(document).height(),
                    p = f > u ? f : u,
                    d = parseInt(r.scrollTop(), 10),
                    c = d + (i.options.top.toString().indexOf("%") >= 0 ? u * (parseInt(i.options.top, 10) / 100) : parseInt(i.options.top, 10));
            if (e !== undefined && e.data.animate === false) {
                t.fx.off = true
            }
            i.jqib.css({
                position: "absolute",
                height: p,
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            });
            i.jqif.css({
                position: "fixed",
                height: p,
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            });
            if (a && a.container) {
                var m = t(a.container).offset(),
                        h = false;
                if (t.isPlainObject(m) && m.top !== undefined) {
                    c = m.top + a.y - (i.options.top.toString().indexOf("%") >= 0 ? u * (parseInt(i.options.top, 10) / 100) : parseInt(i.options.top, 10));
                    i.jqi.css({
                        position: "absolute"
                    });
                    i.jqi.animate({
                        top: m.top + a.y,
                        left: m.left + a.x,
                        marginLeft: 0,
                        width: a.width !== undefined ? a.width : null
                    }, function () {
                        if (!h && m.top + a.y + i.jqi.outerHeight(true) > d + u) {
                            t("html,body").animate({
                                scrollTop: c
                            }, "slow", "swing", function () {});
                            h = true
                        }
                    });
                    if (c < d || c > d + u) {
                        t("html,body").animate({
                            scrollTop: c
                        }, "slow", "swing", function () {});
                        h = true
                    }
                }
            } else if (a && a.width) {
                i.jqi.css({
                    position: "absolute",
                    left: "50%"
                });
                i.jqi.animate({
                    top: a.y || c,
                    left: a.x || "50%",
                    marginLeft: a.width / 2 * -1,
                    width: a.width
                })
            } else {
                i.jqi.css({
                    position: "absolute",
                    top: c,
                    left: "50%",
                    marginLeft: i.jqi.outerWidth(false) / 2 * -1
                })
            }
            if (e !== undefined && e.data.animate === false) {
                t.fx.off = n
            }
        },
        style: function () {
            var t = this;
            t.jqif.css({
                zIndex: t.options.zIndex,
                display: "none",
                opacity: t.options.opacity
            });
            t.jqi.css({
                zIndex: t.options.zIndex + 1,
                display: "none"
            });
            t.jqib.css({
                zIndex: t.options.zIndex
            })
        },
        goToState: function (e, i, n) {
            var o = this,
                    s = o.jqi,
                    a = o.options,
                    r = o.getState(e),
                    f = a.states[r.data("jqi-name")],
                    u = new t.Event("impromptu:statechanging"),
                    l = o.options;
            if (f !== undefined) {
                if (typeof f.html === "function") {
                    var p = f.html;
                    r.find("." + l.prefix + "message ").html(p())
                }
                if (typeof i === "function") {
                    n = i;
                    i = false
                }
                o.jqib.trigger(u, [o.getCurrentStateName(), e]);
                if (!u.isDefaultPrevented() && r.length > 0) {
                    o.jqi.find("." + l.prefix + "parentstate").removeClass(l.prefix + "parentstate");
                    if (i) {
                        o.jqi.find("." + l.prefix + "substate").not(r).slideUp(a.promptspeed).removeClass("." + l.prefix + "substate").find("." + l.prefix + "arrow").hide();
                        o.jqi.find("." + l.prefix + "state:visible").addClass(l.prefix + "parentstate");
                        r.addClass(l.prefix + "substate")
                    } else {
                        o.jqi.find("." + l.prefix + "state").not(r).slideUp(a.promptspeed).find("." + l.prefix + "arrow").hide()
                    }
                    o.currentStateName = f.name;
                    r.slideDown(a.promptspeed, function () {
                        var i = t(this);
                        o.enableStateButtons();
                        if (typeof f.focus === "string") {
                            i.find(f.focus).eq(0).focus()
                        } else {
                            i.find("." + l.prefix + "defaultbutton").focus()
                        }
                        i.find("." + l.prefix + "arrow").show(a.promptspeed);
                        if (typeof n === "function") {
                            o.jqib.on("impromptu:statechanged", n)
                        }
                        o.jqib.trigger("impromptu:statechanged", [e]);
                        if (typeof n === "function") {
                            o.jqib.off("impromptu:statechanged", n)
                        }
                    });
                    if (!i) {
                        o.position()
                    }
                }
            }
            return r
        },
        nextState: function (t) {
            var e = this,
                    i = e.getCurrentState().next();
            if (i.length > 0) {
                e.goToState(i.data("jqi-name"), t)
            }
            return i
        },
        prevState: function (t) {
            var e = this,
                    i = e.getCurrentState().prev();
            if (i.length > 0) {
                e.goToState(i.data("jqi-name"), t)
            }
            return i
        }
    };
    t.prompt = function (t, i) {
        var n = new e(t, i);
        return n.jqi
    };
    t.each(e, function (e, i) {
        t.prompt[e] = i
    });
    t.each(e.prototype, function (i, n) {
        t.prompt[i] = function () {
            var t = e.getLast();
            if (t && typeof t[i] === "function") {
                return t[i].apply(t, arguments)
            }
        }
    });
    t.fn.prompt = function (e) {
        if (e === undefined) {
            e = {}
        }
        if (e.withDataAndEvents === undefined) {
            e.withDataAndEvents = false
        }
        t.prompt(t(this).clone(e.withDataAndEvents).html(), e)
    };
    window.Impromptu = e
});
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
    function t(t) {
        var s = t || window.event,
                a = h.call(arguments, 1),
                r = 0,
                f = 0,
                d = 0,
                c = 0,
                m = 0,
                g = 0;
        if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (d = -1 * s.detail), "wheelDelta" in s && (d = s.wheelDelta), "wheelDeltaY" in s && (d = s.wheelDeltaY), "wheelDeltaX" in s && (f = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (f = -1 * d, d = 0), r = 0 === d ? f : d, "deltaY" in s && (d = -1 * s.deltaY, r = d), "deltaX" in s && (f = s.deltaX, 0 === d && (r = -1 * f)), 0 !== d || 0 !== f) {
            if (1 === s.deltaMode) {
                var w = e.data(this, "mousewheel-line-height");
                r *= w, d *= w, f *= w
            } else if (2 === s.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                r *= v, d *= v, f *= v
            }
            if (c = Math.max(Math.abs(d), Math.abs(f)), (!l || l > c) && (l = c, i(s, c) && (l /= 40)), i(s, c) && (r /= 40, f /= 40, d /= 40), r = Math[r >= 1 ? "floor" : "ceil"](r / l), f = Math[f >= 1 ? "floor" : "ceil"](f / l), d = Math[d >= 1 ? "floor" : "ceil"](d / l), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var p = this.getBoundingClientRect();
                m = t.clientX - p.left, g = t.clientY - p.top
            }
            return t.deltaX = f, t.deltaY = d, t.deltaFactor = l, t.offsetX = m, t.offsetY = g, t.deltaMode = 0, a.unshift(t, r, f, d), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
        }
    }

    function n() {
        l = null
    }

    function i(e, t) {
        return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var o, l, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            h = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var r = s.length; r; )
            e.event.fixHooks[s[--r]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function () {
            if (this.addEventListener)
                for (var n = a.length; n; )
                    this.addEventListener(a[--n], t, !1);
            else
                this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var n = a.length; n; )
                    this.removeEventListener(a[--n], t, !1);
            else
                this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function (t) {
            var n = e(t),
                    i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function (t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
});
(function e(t, r, n) {
    function i(o, s) {
        if (!r[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!s && a)
                    return a(o, !0);
                if (l)
                    return l(o, !0);
                var c = new Error("Cannot find module '" + o + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = r[o] = {
                exports: {}
            };
            t[o][0].call(u.exports, function (e) {
                var r = t[o][1][e];
                return i(r ? r : e)
            }, u, u.exports, e, t, r, n)
        }
        return r[o].exports
    }
    var l = typeof require == "function" && require;
    for (var o = 0; o < n.length; o++)
        i(n[o]);
    return i
})({
    1: [function (e, t, r) {
            "use strict";
            var n = e("../main"),
                    i = e("../plugin/instances");

            function l(e) {
                e.fn.perfectScrollbar = function (t) {
                    return this.each(function () {
                        if (typeof t === "object" || typeof t === "undefined") {
                            var r = t;
                            if (!i.get(this)) {
                                n.initialize(this, r)
                            }
                        } else {
                            var l = t;
                            if (l === "update") {
                                n.update(this)
                            } else if (l === "destroy") {
                                n.destroy(this)
                            }
                        }
                        return e(this)
                    })
                }
            }
            if (typeof define === "function" && define.amd) {
                define(["jquery"], l)
            } else {
                var o = window.jQuery ? window.jQuery : window.$;
                if (typeof o !== "undefined") {
                    l(o)
                }
            }
            t.exports = l
        }, {
            "../main": 7,
            "../plugin/instances": 18
        }],
    2: [function (e, t, r) {
            "use strict";

            function n(e, t) {
                var r = e.className.split(" ");
                if (r.indexOf(t) < 0) {
                    r.push(t)
                }
                e.className = r.join(" ")
            }

            function i(e, t) {
                var r = e.className.split(" ");
                var n = r.indexOf(t);
                if (n >= 0) {
                    r.splice(n, 1)
                }
                e.className = r.join(" ")
            }
            r.add = function (e, t) {
                if (e.classList) {
                    e.classList.add(t)
                } else {
                    n(e, t)
                }
            };
            r.remove = function (e, t) {
                if (e.classList) {
                    e.classList.remove(t)
                } else {
                    i(e, t)
                }
            };
            r.list = function (e) {
                if (e.classList) {
                    return e.classList
                } else {
                    return e.className.split(" ")
                }
            }
        }, {}],
    3: [function (e, t, r) {
            "use strict";
            r.e = function (e, t) {
                var r = document.createElement(e);
                r.className = t;
                return r
            };
            r.appendTo = function (e, t) {
                t.appendChild(e);
                return e
            };

            function n(e, t) {
                return window.getComputedStyle(e)[t]
            }

            function i(e, t, r) {
                if (typeof r === "number") {
                    r = r.toString() + "px"
                }
                e.style[t] = r;
                return e
            }

            function l(e, t) {
                for (var r in t) {
                    var n = t[r];
                    if (typeof n === "number") {
                        n = n.toString() + "px"
                    }
                    e.style[r] = n
                }
                return e
            }
            r.css = function (e, t, r) {
                if (typeof t === "object") {
                    return l(e, t)
                } else {
                    if (typeof r === "undefined") {
                        return n(e, t)
                    } else {
                        return i(e, t, r)
                    }
                }
            };
            r.matches = function (e, t) {
                if (typeof e.matches !== "undefined") {
                    return e.matches(t)
                } else {
                    if (typeof e.matchesSelector !== "undefined") {
                        return e.matchesSelector(t)
                    } else if (typeof e.webkitMatchesSelector !== "undefined") {
                        return e.webkitMatchesSelector(t)
                    } else if (typeof e.mozMatchesSelector !== "undefined") {
                        return e.mozMatchesSelector(t)
                    } else if (typeof e.msMatchesSelector !== "undefined") {
                        return e.msMatchesSelector(t)
                    }
                }
            };
            r.remove = function (e) {
                if (typeof e.remove !== "undefined") {
                    e.remove()
                } else {
                    if (e.parentNode) {
                        e.parentNode.removeChild(e)
                    }
                }
            }
        }, {}],
    4: [function (e, t, r) {
            "use strict";
            var n = function (e) {
                this.element = e;
                this.events = {}
            };
            n.prototype.bind = function (e, t) {
                if (typeof this.events[e] === "undefined") {
                    this.events[e] = []
                }
                this.events[e].push(t);
                this.element.addEventListener(e, t, false)
            };
            n.prototype.unbind = function (e, t) {
                var r = typeof t !== "undefined";
                this.events[e] = this.events[e].filter(function (n) {
                    if (r && n !== t) {
                        return true
                    }
                    this.element.removeEventListener(e, n, false);
                    return false
                }, this)
            };
            n.prototype.unbindAll = function () {
                for (var e in this.events) {
                    this.unbind(e)
                }
            };
            var i = function () {
                this.eventElements = []
            };
            i.prototype.eventElement = function (e) {
                var t = this.eventElements.filter(function (t) {
                    return t.element === e
                })[0];
                if (typeof t === "undefined") {
                    t = new n(e);
                    this.eventElements.push(t)
                }
                return t
            };
            i.prototype.bind = function (e, t, r) {
                this.eventElement(e).bind(t, r)
            };
            i.prototype.unbind = function (e, t, r) {
                this.eventElement(e).unbind(t, r)
            };
            i.prototype.unbindAll = function () {
                for (var e = 0; e < this.eventElements.length; e++) {
                    this.eventElements[e].unbindAll()
                }
            };
            i.prototype.once = function (e, t, r) {
                var n = this.eventElement(e);
                var i = function (e) {
                    n.unbind(t, i);
                    r(e)
                };
                n.bind(t, i)
            };
            t.exports = i
        }, {}],
    5: [function (e, t, r) {
            "use strict";
            t.exports = function () {
                function e() {
                    return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
                }
                return function () {
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }
            }()
        }, {}],
    6: [function (e, t, r) {
            "use strict";
            var n = e("./class"),
                    i = e("./dom");
            r.toInt = function (e) {
                return parseInt(e, 10) || 0
            };
            r.clone = function (e) {
                if (e === null) {
                    return null
                } else if (typeof e === "object") {
                    var t = {};
                    for (var r in e) {
                        t[r] = this.clone(e[r])
                    }
                    return t
                } else {
                    return e
                }
            };
            r.extend = function (e, t) {
                var r = this.clone(e);
                for (var n in t) {
                    r[n] = this.clone(t[n])
                }
                return r
            };
            r.isEditable = function (e) {
                return i.matches(e, "input,[contenteditable]") || i.matches(e, "select,[contenteditable]") || i.matches(e, "textarea,[contenteditable]") || i.matches(e, "button,[contenteditable]")
            };
            r.removePsClasses = function (e) {
                var t = n.list(e);
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (i.indexOf("ps-") === 0) {
                        n.remove(e, i)
                    }
                }
            };
            r.outerWidth = function (e) {
                return this.toInt(i.css(e, "width")) + this.toInt(i.css(e, "paddingLeft")) + this.toInt(i.css(e, "paddingRight")) + this.toInt(i.css(e, "borderLeftWidth")) + this.toInt(i.css(e, "borderRightWidth"))
            };
            r.startScrolling = function (e, t) {
                n.add(e, "ps-in-scrolling");
                if (typeof t !== "undefined") {
                    n.add(e, "ps-" + t)
                } else {
                    n.add(e, "ps-x");
                    n.add(e, "ps-y")
                }
            };
            r.stopScrolling = function (e, t) {
                n.remove(e, "ps-in-scrolling");
                if (typeof t !== "undefined") {
                    n.remove(e, "ps-" + t)
                } else {
                    n.remove(e, "ps-x");
                    n.remove(e, "ps-y")
                }
            };
            r.env = {
                isWebKit: "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                supportsIePointer: window.navigator.msMaxTouchPoints !== null
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
    7: [function (e, t, r) {
            "use strict";
            var n = e("./plugin/destroy"),
                    i = e("./plugin/initialize"),
                    l = e("./plugin/update");
            t.exports = {
                initialize: i,
                update: l,
                destroy: n
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 20
        }],
    8: [function (e, t, r) {
            "use strict";
            t.exports = {
                wheelSpeed: 1,
                wheelPropagation: false,
                swipePropagation: true,
                minScrollbarLength: null,
                maxScrollbarLength: null,
                useBothWheelAxes: false,
                useKeyboard: true,
                suppressScrollX: false,
                suppressScrollY: false,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                stopPropagationOnClick: true
            }
        }, {}],
    9: [function (e, t, r) {
            "use strict";
            var n = e("../lib/dom"),
                    i = e("../lib/helper"),
                    l = e("./instances");
            t.exports = function (e) {
                var t = l.get(e);
                if (!t) {
                    return
                }
                t.event.unbindAll();
                n.remove(t.scrollbarX);
                n.remove(t.scrollbarY);
                n.remove(t.scrollbarXRail);
                n.remove(t.scrollbarYRail);
                i.removePsClasses(e);
                l.remove(e)
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
    10: [function (e, t, r) {
            "use strict";
            var n = e("../../lib/helper"),
                    i = e("../instances"),
                    l = e("../update-geometry");

            function o(e, t) {
                function r(e) {
                    return e.getBoundingClientRect()
                }
                var i = window.Event.prototype.stopPropagation.bind;
                if (t.settings.stopPropagationOnClick) {
                    t.event.bind(t.scrollbarY, "click", i)
                }
                t.event.bind(t.scrollbarYRail, "click", function (i) {
                    var o = n.toInt(t.scrollbarYHeight / 2);
                    var s = t.railYRatio * (i.pageY - window.scrollY - r(t.scrollbarYRail).top - o);
                    var a = t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                    var c = s / a;
                    if (c < 0) {
                        c = 0
                    } else if (c > 1) {
                        c = 1
                    }
                    e.scrollTop = (t.contentHeight - t.containerHeight) * c;
                    l(e);
                    i.stopPropagation()
                });
                if (t.settings.stopPropagationOnClick) {
                    t.event.bind(t.scrollbarX, "click", i)
                }
                t.event.bind(t.scrollbarXRail, "click", function (i) {
                    var o = n.toInt(t.scrollbarXWidth / 2);
                    var s = t.railXRatio * (i.pageX - window.scrollX - r(t.scrollbarXRail).left - o);
                    var a = t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                    var c = s / a;
                    if (c < 0) {
                        c = 0
                    } else if (c > 1) {
                        c = 1
                    }
                    e.scrollLeft = (t.contentWidth - t.containerWidth) * c - t.negativeScrollAdjustment;
                    l(e);
                    i.stopPropagation()
                })
            }
            t.exports = function (e) {
                var t = i.get(e);
                o(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
    11: [function (e, t, r) {
            "use strict";
            var n = e("../../lib/dom"),
                    i = e("../../lib/helper"),
                    l = e("../instances"),
                    o = e("../update-geometry");

            function s(e, t) {
                var r = null;
                var l = null;

                function s(n) {
                    var l = r + n * t.railXRatio;
                    var o = t.scrollbarXRail.getBoundingClientRect().left + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                    if (l < 0) {
                        t.scrollbarXLeft = 0
                    } else if (l > o) {
                        t.scrollbarXLeft = o
                    } else {
                        t.scrollbarXLeft = l
                    }
                    var s = i.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                    e.scrollLeft = s
                }
                var a = function (t) {
                    s(t.pageX - l);
                    o(e);
                    t.stopPropagation();
                    t.preventDefault()
                };
                var c = function () {
                    i.stopScrolling(e, "x");
                    t.event.unbind(t.ownerDocument, "mousemove", a)
                };
                t.event.bind(t.scrollbarX, "mousedown", function (o) {
                    l = o.pageX;
                    r = i.toInt(n.css(t.scrollbarX, "left")) * t.railXRatio;
                    i.startScrolling(e, "x");
                    t.event.bind(t.ownerDocument, "mousemove", a);
                    t.event.once(t.ownerDocument, "mouseup", c);
                    o.stopPropagation();
                    o.preventDefault()
                })
            }

            function a(e, t) {
                var r = null;
                var l = null;

                function s(n) {
                    var l = r + n * t.railYRatio;
                    var o = t.scrollbarYRail.getBoundingClientRect().top + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                    if (l < 0) {
                        t.scrollbarYTop = 0
                    } else if (l > o) {
                        t.scrollbarYTop = o
                    } else {
                        t.scrollbarYTop = l
                    }
                    var s = i.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                    e.scrollTop = s
                }
                var a = function (t) {
                    s(t.pageY - l);
                    o(e);
                    t.stopPropagation();
                    t.preventDefault()
                };
                var c = function () {
                    i.stopScrolling(e, "y");
                    t.event.unbind(t.ownerDocument, "mousemove", a)
                };
                t.event.bind(t.scrollbarY, "mousedown", function (o) {
                    l = o.pageY;
                    r = i.toInt(n.css(t.scrollbarY, "top")) * t.railYRatio;
                    i.startScrolling(e, "y");
                    t.event.bind(t.ownerDocument, "mousemove", a);
                    t.event.once(t.ownerDocument, "mouseup", c);
                    o.stopPropagation();
                    o.preventDefault()
                })
            }
            t.exports = function (e) {
                var t = l.get(e);
                s(e, t);
                a(e, t)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
    12: [function (e, t, r) {
            "use strict";
            var n = e("../../lib/helper"),
                    i = e("../instances"),
                    l = e("../update-geometry");

            function o(e, t) {
                var r = false;
                t.event.bind(e, "mouseenter", function () {
                    r = true
                });
                t.event.bind(e, "mouseleave", function () {
                    r = false
                });
                var i = false;

                function o(r, n) {
                    var i = e.scrollTop;
                    if (r === 0) {
                        if (!t.scrollbarYActive) {
                            return false
                        }
                        if (i === 0 && n > 0 || i >= t.contentHeight - t.containerHeight && n < 0) {
                            return !t.settings.wheelPropagation
                        }
                    }
                    var l = e.scrollLeft;
                    if (n === 0) {
                        if (!t.scrollbarXActive) {
                            return false
                        }
                        if (l === 0 && r < 0 || l >= t.contentWidth - t.containerWidth && r > 0) {
                            return !t.settings.wheelPropagation
                        }
                    }
                    return true
                }
                t.event.bind(t.ownerDocument, "keydown", function (s) {
                    if (s.isDefaultPrevented && s.isDefaultPrevented()) {
                        return
                    }
                    if (!r) {
                        return
                    }
                    var a = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                    if (a) {
                        while (a.shadowRoot) {
                            a = a.shadowRoot.activeElement
                        }
                        if (n.isEditable(a)) {
                            return
                        }
                    }
                    var c = 0;
                    var u = 0;
                    switch (s.which) {
                        case 37:
                            c = -30;
                            break;
                        case 38:
                            u = 30;
                            break;
                        case 39:
                            c = 30;
                            break;
                        case 40:
                            u = -30;
                            break;
                        case 33:
                            u = 90;
                            break;
                        case 32:
                        case 34:
                            u = -90;
                            break;
                        case 35:
                            if (s.ctrlKey) {
                                u = -t.contentHeight
                            } else {
                                u = -t.containerHeight
                            }
                            break;
                        case 36:
                            if (s.ctrlKey) {
                                u = e.scrollTop
                            } else {
                                u = t.containerHeight
                            }
                            break;
                        default:
                            return
                    }
                    e.scrollTop = e.scrollTop - u;
                    e.scrollLeft = e.scrollLeft + c;
                    l(e);
                    i = o(c, u);
                    if (i) {
                        s.preventDefault()
                    }
                })
            }
            t.exports = function (e) {
                var t = i.get(e);
                o(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
    13: [function (e, t, r) {
            "use strict";
            var n = e("../../lib/helper"),
                    i = e("../instances"),
                    l = e("../update-geometry");

            function o(e, t) {
                var r = false;

                function i(r, n) {
                    var i = e.scrollTop;
                    if (r === 0) {
                        if (!t.scrollbarYActive) {
                            return false
                        }
                        if (i === 0 && n > 0 || i >= t.contentHeight - t.containerHeight && n < 0) {
                            return !t.settings.wheelPropagation
                        }
                    }
                    var l = e.scrollLeft;
                    if (n === 0) {
                        if (!t.scrollbarXActive) {
                            return false
                        }
                        if (l === 0 && r < 0 || l >= t.contentWidth - t.containerWidth && r > 0) {
                            return !t.settings.wheelPropagation
                        }
                    }
                    return true
                }

                function o(e) {
                    var t = e.deltaX;
                    var r = -1 * e.deltaY;
                    if (typeof t === "undefined" || typeof r === "undefined") {
                        t = -1 * e.wheelDeltaX / 6;
                        r = e.wheelDeltaY / 6
                    }
                    if (e.deltaMode && e.deltaMode === 1) {
                        t *= 10;
                        r *= 13
                    }
                    if (t !== t && r !== r) {
                        t = 0;
                        r = e.wheelDelta
                    }
                    return [t, r]
                }

                function s(t, r) {
                    var n = e.querySelector("textarea:hover");
                    if (n) {
                        var i = n.scrollHeight - n.clientHeight;
                        if (i > 0) {
                            if (!(n.scrollTop === 0 && r > 0) && !(n.scrollTop === i && r < 0)) {
                                return true
                            }
                        }
                        var l = n.scrollLeft - n.clientWidth;
                        if (l > 0) {
                            if (!(n.scrollLeft === 0 && t < 0) && !(n.scrollLeft === l && t > 0)) {
                                return true
                            }
                        }
                    }
                    return false
                }

                function a(a) {
                    if (!n.env.isWebKit && e.querySelector("select:focus")) {
                        return
                    }
                    var c = o(a);
                    var u = c[0];
                    var f = c[1];
                    if (s(u, f)) {
                        return
                    }
                    r = false;
                    if (!t.settings.useBothWheelAxes) {
                        e.scrollTop = e.scrollTop - f * t.settings.wheelSpeed;
                        e.scrollLeft = e.scrollLeft + u * t.settings.wheelSpeed
                    } else if (t.scrollbarYActive && !t.scrollbarXActive) {
                        if (f) {
                            e.scrollTop = e.scrollTop - f * t.settings.wheelSpeed
                        } else {
                            e.scrollTop = e.scrollTop + u * t.settings.wheelSpeed
                        }
                        r = true
                    } else if (t.scrollbarXActive && !t.scrollbarYActive) {
                        if (u) {
                            e.scrollLeft = e.scrollLeft + u * t.settings.wheelSpeed
                        } else {
                            e.scrollLeft = e.scrollLeft - f * t.settings.wheelSpeed
                        }
                        r = true
                    }
                    l(e);
                    r = r || i(u, f);
                    if (r) {
                        a.stopPropagation();
                        a.preventDefault()
                    }
                }
                if (typeof window.onwheel !== "undefined") {
                    t.event.bind(e, "wheel", a)
                } else if (typeof window.onmousewheel !== "undefined") {
                    t.event.bind(e, "mousewheel", a)
                }
            }
            t.exports = function (e) {
                var t = i.get(e);
                o(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
    14: [function (e, t, r) {
            "use strict";
            var n = e("../instances"),
                    i = e("../update-geometry");

            function l(e, t) {
                t.event.bind(e, "scroll", function () {
                    i(e)
                })
            }
            t.exports = function (e) {
                var t = n.get(e);
                l(e, t)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
    15: [function (e, t, r) {
            "use strict";
            var n = e("../../lib/helper"),
                    i = e("../instances"),
                    l = e("../update-geometry");

            function o(e, t) {
                function r() {
                    var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    if (e.toString().length === 0) {
                        return null
                    } else {
                        return e.getRangeAt(0).commonAncestorContainer
                    }
                }
                var o = null;
                var s = {
                    top: 0,
                    left: 0
                };

                function a() {
                    if (!o) {
                        o = setInterval(function () {
                            if (!i.get(e)) {
                                clearInterval(o);
                                return
                            }
                            e.scrollTop = e.scrollTop + s.top;
                            e.scrollLeft = e.scrollLeft + s.left;
                            l(e)
                        }, 50)
                    }
                }

                function c() {
                    if (o) {
                        clearInterval(o);
                        o = null
                    }
                    n.stopScrolling(e)
                }
                var u = false;
                t.event.bind(t.ownerDocument, "selectionchange", function () {
                    if (e.contains(r())) {
                        u = true
                    } else {
                        u = false;
                        c()
                    }
                });
                t.event.bind(window, "mouseup", function () {
                    if (u) {
                        u = false;
                        c()
                    }
                });
                t.event.bind(window, "mousemove", function (t) {
                    if (u) {
                        var r = {
                            x: t.pageX,
                            y: t.pageY
                        };
                        var i = {
                            left: e.offsetLeft,
                            right: e.offsetLeft + e.offsetWidth,
                            top: e.offsetTop,
                            bottom: e.offsetTop + e.offsetHeight
                        };
                        if (r.x < i.left + 3) {
                            s.left = -5;
                            n.startScrolling(e, "x")
                        } else if (r.x > i.right - 3) {
                            s.left = 5;
                            n.startScrolling(e, "x")
                        } else {
                            s.left = 0
                        }
                        if (r.y < i.top + 3) {
                            if (i.top + 3 - r.y < 5) {
                                s.top = -5
                            } else {
                                s.top = -20
                            }
                            n.startScrolling(e, "y")
                        } else if (r.y > i.bottom - 3) {
                            if (r.y - i.bottom + 3 < 5) {
                                s.top = 5
                            } else {
                                s.top = 20
                            }
                            n.startScrolling(e, "y")
                        } else {
                            s.top = 0
                        }
                        if (s.top === 0 && s.left === 0) {
                            c()
                        } else {
                            a()
                        }
                    }
                })
            }
            t.exports = function (e) {
                var t = i.get(e);
                o(e, t)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19
        }],
    16: [function (e, t, r) {
            "use strict";
            var n = e("../instances"),
                    i = e("../update-geometry");

            function l(e, t, r, l) {
                function o(r, n) {
                    var i = e.scrollTop;
                    var l = e.scrollLeft;
                    var o = Math.abs(r);
                    var s = Math.abs(n);
                    if (s > o) {
                        if (n < 0 && i === t.contentHeight - t.containerHeight || n > 0 && i === 0) {
                            return !t.settings.swipePropagation
                        }
                    } else if (o > s) {
                        if (r < 0 && l === t.contentWidth - t.containerWidth || r > 0 && l === 0) {
                            return !t.settings.swipePropagation
                        }
                    }
                    return true
                }

                function s(t, r) {
                    e.scrollTop = e.scrollTop - r;
                    e.scrollLeft = e.scrollLeft - t;
                    i(e)
                }
                var a = {};
                var c = 0;
                var u = {};
                var f = null;
                var d = false;
                var p = false;

                function h() {
                    d = true
                }

                function b() {
                    d = false
                }

                function v(e) {
                    if (e.targetTouches) {
                        return e.targetTouches[0]
                    } else {
                        return e
                    }
                }

                function g(e) {
                    if (e.targetTouches && e.targetTouches.length === 1) {
                        return true
                    }
                    if (e.pointerType && e.pointerType !== "mouse" && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
                        return true
                    }
                    return false
                }

                function m(e) {
                    if (g(e)) {
                        p = true;
                        var t = v(e);
                        a.pageX = t.pageX;
                        a.pageY = t.pageY;
                        c = (new Date).getTime();
                        if (f !== null) {
                            clearInterval(f)
                        }
                        e.stopPropagation()
                    }
                }

                function Y(e) {
                    if (!d && p && g(e)) {
                        var t = v(e);
                        var r = {
                            pageX: t.pageX,
                            pageY: t.pageY
                        };
                        var n = r.pageX - a.pageX;
                        var i = r.pageY - a.pageY;
                        s(n, i);
                        a = r;
                        var l = (new Date).getTime();
                        var f = l - c;
                        if (f > 0) {
                            u.x = n / f;
                            u.y = i / f;
                            c = l
                        }
                        if (o(n, i)) {
                            e.stopPropagation();
                            e.preventDefault()
                        }
                    }
                }

                function w() {
                    if (!d && p) {
                        p = false;
                        clearInterval(f);
                        f = setInterval(function () {
                            if (!n.get(e)) {
                                clearInterval(f);
                                return
                            }
                            if (Math.abs(u.x) < .01 && Math.abs(u.y) < .01) {
                                clearInterval(f);
                                return
                            }
                            s(u.x * 30, u.y * 30);
                            u.x *= .8;
                            u.y *= .8
                        }, 10)
                    }
                }
                if (r) {
                    t.event.bind(window, "touchstart", h);
                    t.event.bind(window, "touchend", b);
                    t.event.bind(e, "touchstart", m);
                    t.event.bind(e, "touchmove", Y);
                    t.event.bind(e, "touchend", w)
                }
                if (l) {
                    if (window.PointerEvent) {
                        t.event.bind(window, "pointerdown", h);
                        t.event.bind(window, "pointerup", b);
                        t.event.bind(e, "pointerdown", m);
                        t.event.bind(e, "pointermove", Y);
                        t.event.bind(e, "pointerup", w)
                    } else if (window.MSPointerEvent) {
                        t.event.bind(window, "MSPointerDown", h);
                        t.event.bind(window, "MSPointerUp", b);
                        t.event.bind(e, "MSPointerDown", m);
                        t.event.bind(e, "MSPointerMove", Y);
                        t.event.bind(e, "MSPointerUp", w)
                    }
                }
            }
            t.exports = function (e, t, r) {
                var i = n.get(e);
                l(e, i, t, r)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
    17: [function (e, t, r) {
            "use strict";
            var n = e("../lib/class"),
                    i = e("../lib/helper"),
                    l = e("./instances"),
                    o = e("./update-geometry");
            var s = e("./handler/click-rail"),
                    a = e("./handler/drag-scrollbar"),
                    c = e("./handler/keyboard"),
                    u = e("./handler/mouse-wheel"),
                    f = e("./handler/native-scroll"),
                    d = e("./handler/selection"),
                    p = e("./handler/touch");
            t.exports = function (e, t) {
                t = typeof t === "object" ? t : {};
                n.add(e, "ps-container");
                var r = l.add(e);
                r.settings = i.extend(r.settings, t);
                s(e);
                a(e);
                u(e);
                f(e);
                d(e);
                if (i.env.supportsTouch || i.env.supportsIePointer) {
                    p(e, i.env.supportsTouch, i.env.supportsIePointer)
                }
                if (r.settings.useKeyboard) {
                    c(e)
                }
                o(e)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
    18: [function (e, t, r) {
            "use strict";
            var n = e("../lib/dom"),
                    i = e("./default-setting"),
                    l = e("../lib/event-manager"),
                    o = e("../lib/guid"),
                    s = e("../lib/helper");
            var a = {};

            function c(e) {
                var t = this;
                t.settings = s.clone(i);
                t.containerWidth = null;
                t.containerHeight = null;
                t.contentWidth = null;
                t.contentHeight = null;
                t.isRtl = n.css(e, "direction") === "rtl";
                t.isNegativeScroll = function () {
                    var t = e.scrollLeft;
                    var r = null;
                    e.scrollLeft = -1;
                    r = e.scrollLeft < 0;
                    e.scrollLeft = t;
                    return r
                }();
                t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0;
                t.event = new l;
                t.ownerDocument = e.ownerDocument || document;
                t.scrollbarXRail = n.appendTo(n.e("div", "ps-scrollbar-x-rail"), e);
                t.scrollbarX = n.appendTo(n.e("div", "ps-scrollbar-x"), t.scrollbarXRail);
                t.scrollbarXActive = null;
                t.scrollbarXWidth = null;
                t.scrollbarXLeft = null;
                t.scrollbarXBottom = s.toInt(n.css(t.scrollbarXRail, "bottom"));
                t.isScrollbarXUsingBottom = t.scrollbarXBottom === t.scrollbarXBottom;
                t.scrollbarXTop = t.isScrollbarXUsingBottom ? null : s.toInt(n.css(t.scrollbarXRail, "top"));
                t.railBorderXWidth = s.toInt(n.css(t.scrollbarXRail, "borderLeftWidth")) + s.toInt(n.css(t.scrollbarXRail, "borderRightWidth"));
                n.css(t.scrollbarXRail, "display", "block");
                t.railXMarginWidth = s.toInt(n.css(t.scrollbarXRail, "marginLeft")) + s.toInt(n.css(t.scrollbarXRail, "marginRight"));
                n.css(t.scrollbarXRail, "display", "");
                t.railXWidth = null;
                t.railXRatio = null;
                t.scrollbarYRail = n.appendTo(n.e("div", "ps-scrollbar-y-rail"), e);
                t.scrollbarY = n.appendTo(n.e("div", "ps-scrollbar-y"), t.scrollbarYRail);
                t.scrollbarYActive = null;
                t.scrollbarYHeight = null;
                t.scrollbarYTop = null;
                t.scrollbarYRight = s.toInt(n.css(t.scrollbarYRail, "right"));
                t.isScrollbarYUsingRight = t.scrollbarYRight === t.scrollbarYRight;
                t.scrollbarYLeft = t.isScrollbarYUsingRight ? null : s.toInt(n.css(t.scrollbarYRail, "left"));
                t.scrollbarYOuterWidth = t.isRtl ? s.outerWidth(t.scrollbarY) : null;
                t.railBorderYWidth = s.toInt(n.css(t.scrollbarYRail, "borderTopWidth")) + s.toInt(n.css(t.scrollbarYRail, "borderBottomWidth"));
                n.css(t.scrollbarYRail, "display", "block");
                t.railYMarginHeight = s.toInt(n.css(t.scrollbarYRail, "marginTop")) + s.toInt(n.css(t.scrollbarYRail, "marginBottom"));
                n.css(t.scrollbarYRail, "display", "");
                t.railYHeight = null;
                t.railYRatio = null
            }

            function u(e) {
                if (typeof e.dataset === "undefined") {
                    return e.getAttribute("data-ps-id")
                } else {
                    return e.dataset.psId
                }
            }

            function f(e, t) {
                if (typeof e.dataset === "undefined") {
                    e.setAttribute("data-ps-id", t)
                } else {
                    e.dataset.psId = t
                }
            }

            function d(e) {
                if (typeof e.dataset === "undefined") {
                    e.removeAttribute("data-ps-id")
                } else {
                    delete e.dataset.psId
                }
            }
            r.add = function (e) {
                var t = o();
                f(e, t);
                a[t] = new c(e);
                return a[t]
            };
            r.remove = function (e) {
                delete a[u(e)];
                d(e)
            };
            r.get = function (e) {
                return a[u(e)]
            }
        }, {
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
    19: [function (e, t, r) {
            "use strict";
            var n = e("../lib/class"),
                    i = e("../lib/dom"),
                    l = e("../lib/helper"),
                    o = e("./instances");

            function s(e, t) {
                if (e.settings.minScrollbarLength) {
                    t = Math.max(t, e.settings.minScrollbarLength)
                }
                if (e.settings.maxScrollbarLength) {
                    t = Math.min(t, e.settings.maxScrollbarLength)
                }
                return t
            }

            function a(e, t) {
                var r = {
                    width: t.railXWidth
                };
                if (t.isRtl) {
                    r.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth
                } else {
                    r.left = e.scrollLeft
                }
                if (t.isScrollbarXUsingBottom) {
                    r.bottom = t.scrollbarXBottom - e.scrollTop
                } else {
                    r.top = t.scrollbarXTop + e.scrollTop
                }
                i.css(t.scrollbarXRail, r);
                var n = {
                    top: e.scrollTop,
                    height: t.railYHeight
                };
                if (t.isScrollbarYUsingRight) {
                    if (t.isRtl) {
                        n.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth
                    } else {
                        n.right = t.scrollbarYRight - e.scrollLeft
                    }
                } else {
                    if (t.isRtl) {
                        n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth
                    } else {
                        n.left = t.scrollbarYLeft + e.scrollLeft
                    }
                }
                i.css(t.scrollbarYRail, n);
                i.css(t.scrollbarX, {
                    left: t.scrollbarXLeft,
                    width: t.scrollbarXWidth - t.railBorderXWidth
                });
                i.css(t.scrollbarY, {
                    top: t.scrollbarYTop,
                    height: t.scrollbarYHeight - t.railBorderYWidth
                })
            }
            t.exports = function (e) {
                var t = o.get(e);
                t.containerWidth = e.clientWidth;
                t.containerHeight = e.clientHeight;
                t.contentWidth = e.scrollWidth;
                t.contentHeight = e.scrollHeight;
                if (!e.contains(t.scrollbarXRail)) {
                    i.appendTo(t.scrollbarXRail, e)
                }
                if (!e.contains(t.scrollbarYRail)) {
                    i.appendTo(t.scrollbarYRail, e)
                }
                if (!t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth) {
                    t.scrollbarXActive = true;
                    t.railXWidth = t.containerWidth - t.railXMarginWidth;
                    t.railXRatio = t.containerWidth / t.railXWidth;
                    t.scrollbarXWidth = s(t, l.toInt(t.railXWidth * t.containerWidth / t.contentWidth));
                    t.scrollbarXLeft = l.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))
                } else {
                    t.scrollbarXActive = false;
                    t.scrollbarXWidth = 0;
                    t.scrollbarXLeft = 0;
                    e.scrollLeft = 0
                }
                if (!t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight) {
                    t.scrollbarYActive = true;
                    t.railYHeight = t.containerHeight - t.railYMarginHeight;
                    t.railYRatio = t.containerHeight / t.railYHeight;
                    t.scrollbarYHeight = s(t, l.toInt(t.railYHeight * t.containerHeight / t.contentHeight));
                    t.scrollbarYTop = l.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))
                } else {
                    t.scrollbarYActive = false;
                    t.scrollbarYHeight = 0;
                    t.scrollbarYTop = 0;
                    e.scrollTop = 0
                }
                if (t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth) {
                    t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth
                }
                if (t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight) {
                    t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight
                }
                a(e, t);
                n[t.scrollbarXActive ? "add" : "remove"](e, "ps-active-x");
                n[t.scrollbarYActive ? "add" : "remove"](e, "ps-active-y")
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
    20: [function (e, t, r) {
            "use strict";
            var n = e("../lib/dom"),
                    i = e("../lib/helper"),
                    l = e("./instances"),
                    o = e("./update-geometry");
            t.exports = function (e) {
                var t = l.get(e);
                if (!t) {
                    return
                }
                t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0;
                n.css(t.scrollbarXRail, "display", "block");
                n.css(t.scrollbarYRail, "display", "block");
                t.railXMarginWidth = i.toInt(n.css(t.scrollbarXRail, "marginLeft")) + i.toInt(n.css(t.scrollbarXRail, "marginRight"));
                t.railYMarginHeight = i.toInt(n.css(t.scrollbarYRail, "marginTop")) + i.toInt(n.css(t.scrollbarYRail, "marginBottom"));
                n.css(t.scrollbarXRail, "display", "none");
                n.css(t.scrollbarYRail, "display", "none");
                o(e);
                n.css(t.scrollbarXRail, "display", "");
                n.css(t.scrollbarYRail, "display", "")
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-geometry": 19
        }]
}, {}, [1]);
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (!this.length)
                return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
                i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function (e) {
                function s() {
                    var s;
                    return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0
                }
                return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function () {
            var e, i;
            return t(this[0]).is("form") ? e = this.validate().form() : (e = !0, i = t(this[0].form).validate(), this.each(function () {
                e = i.element(this) && e
            })), e
        },
        removeAttrs: function (e) {
            var i = {},
                    s = this;
            return t.each(e.split(/\s/), function (t, e) {
                i[e] = s.attr(e), s.removeAttr(e)
            }), i
        },
        rules: function (e, i) {
            var s, r, n, a, o, u, l = this[0];
            if (e)
                switch (s = t.data(l.form, "validator").settings, r = s.rules, n = t.validator.staticRules(l), e) {
                    case "add":
                        t.extend(n, t.validator.normalizeRule(i)), delete n.messages, r[l.name] = n, i.messages && (s.messages[l.name] = t.extend(s.messages[l.name], i.messages));
                        break;
                    case "remove":
                        return i ? (u = {}, t.each(i.split(/\s/), function (e, i) {
                            u[i] = n[i], delete n[i], "required" === i && t(l).removeAttr("aria-required")
                        }), u) : (delete r[l.name], n)
                }
            return a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(l), t.validator.attributeRules(l), t.validator.dataRules(l), t.validator.staticRules(l)), l), a.required && (o = a.required, delete a.required, a = t.extend({
                required: o
            }, a), t(l).attr("aria-required", "true")), a.remote && (o = a.remote, delete a.remote, a = t.extend(a, {
                remote: o
            })), a
        }
    }), t.extend(t.expr[":"], {
        blank: function (e) {
            return !t.trim("" + t(e).val())
        },
        filled: function (e) {
            return !!t.trim("" + t(e).val())
        },
        unchecked: function (e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function (e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function (e, i) {
        return 1 === arguments.length ? function () {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                return i
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (t) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function (t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function (t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function (t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function (e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
            },
            unhighlight: function (e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
            }
        },
        setDefaults: function (e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function e(e) {
                    var i = t.data(this[0].form, "validator"),
                            s = "on" + e.type.replace(/^validate/, ""),
                            r = i.settings;
                    r[s] && !this.is(r.ignore) && r[s].call(i, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, s = this.groups = {};
                t.each(this.settings.groups, function (e, i) {
                    "string" == typeof i && (i = i.split(/\s/)), t.each(i, function (t, i) {
                        s[i] = e
                    })
                }), i = this.settings.rules, t.each(i, function (e, s) {
                    i[e] = t.validator.normalizeRule(s)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", e).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function () {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            },
            element: function (e) {
                var i = this.clean(e),
                        s = this.validationTargetFor(i),
                        r = !0;
                return this.lastElement = s, void 0 === s ? delete this.invalid[i.name] : (this.prepareElement(s), this.currentElements = t(s), r = this.check(s) !== !1, r ? delete this.invalid[s.name] : this.invalid[s.name] = !0), t(e).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
            },
            showErrors: function (e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e)
                        this.errorList.push({
                            message: e[i],
                            element: this.findByName(i)[0]
                        });
                    this.successList = t.grep(this.successList, function (t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (t) {
                var e, i = 0;
                for (e in t)
                    i++;
                return i
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid)
                    try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {
                    }
            },
            findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function (t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function () {
                var e = this,
                        i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function (e) {
                return t(e)[0]
            },
            errors: function () {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function (e) {
                var i, s = t(e),
                        r = e.type;
                return "radio" === r || "checkbox" === r ? t("input[name='" + e.name + "']:checked").val() : "number" === r && "undefined" != typeof e.validity ? e.validity.badInput ? !1 : s.val() : (i = s.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function (e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s, r, n = t(e).rules(),
                        a = t.map(n, function (t, e) {
                            return e
                        }).length,
                        o = !1,
                        u = this.elementValue(e);
                for (s in n) {
                    r = {
                        method: s,
                        parameters: n[s]
                    };
                    try {
                        if (i = t.validator.methods[s].call(this, u, e, r.parameters), "dependency-mismatch" === i && 1 === a) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === i)
                            return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i)
                            return this.formatAndAdd(e, r), !1
                    } catch (l) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", l), l
                    }
                }
                if (!o)
                    return this.objectLength(n) && this.successList.push(e), !0
            },
            customDataMessage: function (e, i) {
                return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function (t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function () {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t])
                        return arguments[t];
                return void 0
            },
            defaultMessage: function (e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function (e, i) {
                var s = this.defaultMessage(e, i.method),
                        r = /\$?\{(\d+)\}/g;
                "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
                    message: s,
                    element: e,
                    method: i.method
                }), this.errorMap[e.name] = s, this.submitted[e.name] = s
            },
            addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function () {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++)
                    i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++)
                        this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return t(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (e, i) {
                var s, r, n, a = this.errorsFor(e),
                        o = this.idOrName(e),
                        u = t(e).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(i)) : (a = t("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(i || ""), s = a, this.settings.wrapper && (s = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(s) : this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e), a.is("label") ? a.attr("for", o) : 0 === a.parents("label[for='" + o + "']").length && (n = a.attr("id"), u ? u.match(new RegExp("\b" + n + "\b")) || (u += " " + n) : u = n, t(e).attr("aria-describedby", u), r = this.groups[e.name], r && t.each(this.groups, function (e, i) {
                    i === r && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", a.attr("id"))
                }))), !i && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function (e) {
                var i = this.idOrName(e),
                        s = t(e).attr("aria-describedby"),
                        r = "label[for='" + i + "'], label[for='" + i + "'] *";
                return s && (r = r + ", #" + s.replace(/\s+/g, ", #")), this.errors().filter(r)
            },
            idOrName: function (t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            },
            checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function (e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function (e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i))
                            return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function (t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            },
            dependTypes: {
                "boolean": function (t) {
                    return t
                },
                string: function (e, i) {
                    return !!t(e, i.form).length
                },
                "function": function (t, e) {
                    return t(e)
                }
            },
            optional: function (e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function (e, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function (e) {
            var i = {},
                    s = t(e).attr("class");
            return s && t.each(s.split(" "), function () {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function (e) {
            var i, s, r = {},
                    n = t(e),
                    a = e.getAttribute("type");
            for (i in t.validator.methods)
                "required" === i ? (s = e.getAttribute(i), "" === s && (s = !0), s = !!s) : s = n.attr(i), /min|max/.test(i) && (null === a || /number|range|text/.test(a)) && (s = Number(s)), s || 0 === s ? r[i] = s : a === i && "range" !== a && (r[i] = !0);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function (e) {
            var i, s, r = {},
                    n = t(e);
            for (i in t.validator.methods)
                s = n.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), void 0 !== s && (r[i] = s);
            return r
        },
        staticRules: function (e) {
            var i = {},
                    s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function (e, i) {
            return t.each(e, function (s, r) {
                if (r === !1)
                    return void delete e[s];
                if (r.param || r.depends) {
                    var n = !0;
                    switch (typeof r.depends) {
                        case "string":
                            n = !!t(r.depends, i.form).length;
                            break;
                        case "function":
                            n = r.depends.call(i, i)
                    }
                    n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
                }
            }), t.each(e, function (s, r) {
                e[s] = t.isFunction(r) ? r(i) : r
            }), t.each(["minlength", "maxlength"], function () {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function () {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function (e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function () {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function (e, i, s) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function (e, i, s) {
                if (!this.depend(s, i))
                    return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            },
            email: function (t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function (t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function (t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function (t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function (t, e) {
                if (this.optional(e))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t))
                    return !1;
                var i, s, r = 0,
                        n = 0,
                        a = !1;
                if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19)
                    return !1;
                for (i = t.length - 1; i >= 0; i--)
                    s = t.charAt(i), n = parseInt(s, 10), a && (n *= 2) > 9 && (n -= 9), r += n, a = !a;
                return r % 10 === 0
            },
            minlength: function (e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s
            },
            maxlength: function (e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || s >= r
            },
            rangelength: function (e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s[0] && r <= s[1]
            },
            min: function (t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function (t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function (t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            equalTo: function (e, i, s) {
                var r = t(s);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    t(i).valid()
                }), e === r.val()
            },
            remote: function (e, i, s) {
                if (this.optional(i))
                    return "dependency-mismatch";
                var r, n, a = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), a.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = a.message, s = "string" == typeof s && {
                    url: s
                } || s, a.old === e ? a.valid : (a.old = e, r = this, this.startRequest(i), n = {}, n[i.name] = e, t.ajax(t.extend(!0, {
                    url: s,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: n,
                    context: r.currentForm,
                    success: function (s) {
                        var n, o, u, l = s === !0 || "true" === s;
                        r.settings.messages[i.name].remote = a.originalMessage, l ? (u = r.formSubmitted, r.prepareElement(i), r.formSubmitted = u, r.successList.push(i), delete r.invalid[i.name], r.showErrors()) : (n = {}, o = s || r.defaultMessage(i, "remote"), n[i.name] = a.message = t.isFunction(o) ? o(e) : o, r.invalid[i.name] = !0, r.showErrors(n)), a.valid = l, r.stopRequest(i, l)
                    }
                }, s)), "pending")
            }
        }
    }), t.format = function () {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function (t, e, s) {
        var r = t.port;
        "abort" === t.mode && (i[r] && i[r].abort(), i[r] = s)
    }) : (e = t.ajax, t.ajax = function (s) {
        var r = ("mode" in s ? s : t.ajaxSettings).mode,
                n = ("port" in s ? s : t.ajaxSettings).port;
        return "abort" === r ? (i[n] && i[n].abort(), i[n] = e.apply(this, arguments), i[n]) : e.apply(this, arguments)
    }), t.extend(t.fn, {
        validateDelegate: function (e, i, s) {
            return this.bind(i, function (i) {
                var r = t(i.target);
                return r.is(e) ? s.apply(r, arguments) : void 0
            })
        }
    })
});
!function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], t) : t(jQuery)
}(function (t) {
    !function () {
        function e(t) {
            return t.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-Ã¢â‚¬Å“Ã¢â‚¬ÂÃ¢â‚¬â„¢]*/g, "")
        }
        t.validator.addMethod("maxWords", function (t, a, d) {
            return this.optional(a) || e(t).match(/\b\w+\b/g).length <= d
        }, t.validator.format("Please enter {0} words or less.")), t.validator.addMethod("minWords", function (t, a, d) {
            return this.optional(a) || e(t).match(/\b\w+\b/g).length >= d
        }, t.validator.format("Please enter at least {0} words.")), t.validator.addMethod("rangeWords", function (t, a, d) {
            var i = e(t),
                    n = /\b\w+\b/g;
            return this.optional(a) || i.match(n).length >= d[0] && i.match(n).length <= d[1]
        }, t.validator.format("Please enter between {0} and {1} words."))
    }(), t.validator.addMethod("accept", function (e, a, d) {
        var i, n, r = "string" == typeof d ? d.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
                o = this.optional(a);
        if (o)
            return o;
        if ("file" === t(a).attr("type") && (r = r.replace(/\*/g, ".*"), a.files && a.files.length))
            for (i = 0; i < a.files.length; i++)
                if (n = a.files[i], !n.type.match(new RegExp(".?(" + r + ")$", "i")))
                    return !1;
        return !0
    }, t.validator.format("Please enter a value with a valid mimetype.")), t.validator.addMethod("alphanumeric", function (t, e) {
        return this.optional(e) || /^\w+$/i.test(t)
    }, "Letters, numbers, and underscores only please"), t.validator.addMethod("bankaccountNL", function (t, e) {
        if (this.optional(e))
            return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(t))
            return !1;
        var a, d, i, n = t.replace(/ /g, ""),
                r = 0,
                o = n.length;
        for (a = 0; o > a; a++)
            d = o - a, i = n.substring(a, a + 1), r += d * i;
        return r % 11 === 0
    }, "Please specify a valid bank account number"), t.validator.addMethod("bankorgiroaccountNL", function (e, a) {
        return this.optional(a) || t.validator.methods.bankaccountNL.call(this, e, a) || t.validator.methods.giroaccountNL.call(this, e, a)
    }, "Please specify a valid bank or giro account number"), t.validator.addMethod("bic", function (t, e) {
        return this.optional(e) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(t)
    }, "Please specify a valid BIC code"), t.validator.addMethod("cifES", function (t) {
        "use strict";
        var e, a, d, i, n, r, o = [];
        if (t = t.toUpperCase(), !t.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"))
            return !1;
        for (d = 0; 9 > d; d++)
            o[d] = parseInt(t.charAt(d), 10);
        for (a = o[2] + o[4] + o[6], i = 1; 8 > i; i += 2)
            n = (2 * o[i]).toString(), r = n.charAt(1), a += parseInt(n.charAt(0), 10) + ("" === r ? 0 : parseInt(r, 10));
        return /^[ABCDEFGHJNPQRSUVW]{1}/.test(t) ? (a += "", e = 10 - parseInt(a.charAt(a.length - 1), 10), t += e, o[8].toString() === String.fromCharCode(64 + e) || o[8].toString() === t.charAt(t.length - 1)) : !1
    }, "Please specify a valid CIF number."), t.validator.addMethod("creditcardtypes", function (t, e, a) {
        if (/[^0-9\-]+/.test(t))
            return !1;
        t = t.replace(/\D/g, "");
        var d = 0;
        return a.mastercard && (d |= 1), a.visa && (d |= 2), a.amex && (d |= 4), a.dinersclub && (d |= 8), a.enroute && (d |= 16), a.discover && (d |= 32), a.jcb && (d |= 64), a.unknown && (d |= 128), a.all && (d = 255), 1 & d && /^(5[12345])/.test(t) ? 16 === t.length : 2 & d && /^(4)/.test(t) ? 16 === t.length : 4 & d && /^(3[47])/.test(t) ? 15 === t.length : 8 & d && /^(3(0[012345]|[68]))/.test(t) ? 14 === t.length : 16 & d && /^(2(014|149))/.test(t) ? 15 === t.length : 32 & d && /^(6011)/.test(t) ? 16 === t.length : 64 & d && /^(3)/.test(t) ? 16 === t.length : 64 & d && /^(2131|1800)/.test(t) ? 15 === t.length : 128 & d ? !0 : !1
    }, "Please enter a valid credit card number."), t.validator.addMethod("currency", function (t, e, a) {
        var d, i = "string" == typeof a,
                n = i ? a : a[0],
                r = i ? !0 : a[1];
        return n = n.replace(/,/g, ""), n = r ? n + "]" : n + "]?", d = "^[" + n + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", d = new RegExp(d), this.optional(e) || d.test(t)
    }, "Please specify a valid currency"), t.validator.addMethod("dateFA", function (t, e) {
        return this.optional(e) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(t)
    }, "Please enter a correct date"), t.validator.addMethod("dateITA", function (t, e) {
        var a, d, i, n, r, o = !1,
                s = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return s.test(t) ? (a = t.split("/"), d = parseInt(a[0], 10), i = parseInt(a[1], 10), n = parseInt(a[2], 10), r = new Date(n, i - 1, d, 12, 0, 0, 0), o = r.getUTCFullYear() === n && r.getUTCMonth() === i - 1 && r.getUTCDate() === d ? !0 : !1) : o = !1, this.optional(e) || o
    }, "Please enter a correct date"), t.validator.addMethod("dateNL", function (t, e) {
        return this.optional(e) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(t)
    }, "Please enter a correct date"), t.validator.addMethod("extension", function (t, e, a) {
        return a = "string" == typeof a ? a.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(e) || t.match(new RegExp(".(" + a + ")$", "i"))
    }, t.validator.format("Please enter a value with a valid extension.")), t.validator.addMethod("giroaccountNL", function (t, e) {
        return this.optional(e) || /^[0-9]{1,7}$/.test(t)
    }, "Please specify a valid giro account number"), t.validator.addMethod("iban", function (t, e) {
        if (this.optional(e))
            return !0;
        var a, d, i, n, r, o, s, l, u, A = t.replace(/ /g, "").toUpperCase(),
                c = "",
                f = !0,
                h = "",
                F = "";
        if (!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(A))
            return !1;
        if (a = A.substring(0, 2), o = {
            AL: "\\d{8}[\\dA-Z]{16}",
            AD: "\\d{8}[\\dA-Z]{12}",
            AT: "\\d{16}",
            AZ: "[\\dA-Z]{4}\\d{20}",
            BE: "\\d{12}",
            BH: "[A-Z]{4}[\\dA-Z]{14}",
            BA: "\\d{16}",
            BR: "\\d{23}[A-Z][\\dA-Z]",
            BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
            CR: "\\d{17}",
            HR: "\\d{17}",
            CY: "\\d{8}[\\dA-Z]{16}",
            CZ: "\\d{20}",
            DK: "\\d{14}",
            DO: "[A-Z]{4}\\d{20}",
            EE: "\\d{16}",
            FO: "\\d{14}",
            FI: "\\d{14}",
            FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
            GE: "[\\dA-Z]{2}\\d{16}",
            DE: "\\d{18}",
            GI: "[A-Z]{4}[\\dA-Z]{15}",
            GR: "\\d{7}[\\dA-Z]{16}",
            GL: "\\d{14}",
            GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
            HU: "\\d{24}",
            IS: "\\d{22}",
            IE: "[\\dA-Z]{4}\\d{14}",
            IL: "\\d{19}",
            IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
            KZ: "\\d{3}[\\dA-Z]{13}",
            KW: "[A-Z]{4}[\\dA-Z]{22}",
            LV: "[A-Z]{4}[\\dA-Z]{13}",
            LB: "\\d{4}[\\dA-Z]{20}",
            LI: "\\d{5}[\\dA-Z]{12}",
            LT: "\\d{16}",
            LU: "\\d{3}[\\dA-Z]{13}",
            MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
            MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
            MR: "\\d{23}",
            MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
            MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
            MD: "[\\dA-Z]{2}\\d{18}",
            ME: "\\d{18}",
            NL: "[A-Z]{4}\\d{10}",
            NO: "\\d{11}",
            PK: "[\\dA-Z]{4}\\d{16}",
            PS: "[\\dA-Z]{4}\\d{21}",
            PL: "\\d{24}",
            PT: "\\d{21}",
            RO: "[A-Z]{4}[\\dA-Z]{16}",
            SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
            SA: "\\d{2}[\\dA-Z]{18}",
            RS: "\\d{18}",
            SK: "\\d{20}",
            SI: "\\d{15}",
            ES: "\\d{20}",
            SE: "\\d{20}",
            CH: "\\d{5}[\\dA-Z]{12}",
            TN: "\\d{20}",
            TR: "\\d{5}[\\dA-Z]{17}",
            AE: "\\d{3}\\d{16}",
            GB: "[A-Z]{4}\\d{14}",
            VG: "[\\dA-Z]{4}\\d{16}"
        }, r = o[a], "undefined" != typeof r && (s = new RegExp("^[A-Z]{2}\\d{2}" + r + "$", ""), !s.test(A)))
            return !1;
        for (d = A.substring(4, A.length) + A.substring(0, 4), l = 0; l < d.length; l++)
            i = d.charAt(l), "0" !== i && (f = !1), f || (c += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(i));
        for (u = 0; u < c.length; u++)
            n = c.charAt(u), F = "" + h + n, h = F % 97;
        return 1 === h
    }, "Please specify a valid IBAN"), t.validator.addMethod("integer", function (t, e) {
        return this.optional(e) || /^-?\d+$/.test(t)
    }, "A positive or negative non-decimal number please"), t.validator.addMethod("ipv4", function (t, e) {
        return this.optional(e) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(t)
    }, "Please enter a valid IP v4 address."), t.validator.addMethod("ipv6", function (t, e) {
        return this.optional(e) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(t)
    }, "Please enter a valid IP v6 address."), t.validator.addMethod("lettersonly", function (t, e) {
        return this.optional(e) || /^[a-z]+$/i.test(t)
    }, "Letters only please"), t.validator.addMethod("letterswithbasicpunc", function (t, e) {
        return this.optional(e) || /^[a-z\-.,()'"\s]+$/i.test(t)
    }, "Letters or punctuation only please"), t.validator.addMethod("mobileNL", function (t, e) {
        return this.optional(e) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(t)
    }, "Please specify a valid mobile number"), t.validator.addMethod("mobileUK", function (t, e) {
        return t = t.replace(/\(|\)|\s+|-/g, ""), this.optional(e) || t.length > 9 && t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number"), t.validator.addMethod("nieES", function (t) {
        "use strict";
        return t = t.toUpperCase(), t.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[T]{1}/.test(t) ? t[8] === /^[T]{1}[A-Z0-9]{8}$/.test(t) : /^[XYZ]{1}/.test(t) ? t[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(t.replace("X", "0").replace("Y", "1").replace("Z", "2").substring(0, 8) % 23) : !1 : !1
    }, "Please specify a valid NIE number."), t.validator.addMethod("nifES", function (t) {
        "use strict";
        return t = t.toUpperCase(), t.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[0-9]{8}[A-Z]{1}$/.test(t) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(t.substring(8, 0) % 23) === t.charAt(8) : /^[KLM]{1}/.test(t) ? t[8] === String.fromCharCode(64) : !1 : !1
    }, "Please specify a valid NIF number."), t.validator.addMethod("nowhitespace", function (t, e) {
        return this.optional(e) || /^\S+$/i.test(t)
    }, "No white space please"), t.validator.addMethod("pattern", function (t, e, a) {
        return this.optional(e) ? !0 : ("string" == typeof a && (a = new RegExp(a)), a.test(t))
    }, "Invalid format."), t.validator.addMethod("phoneNL", function (t, e) {
        return this.optional(e) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(t)
    }, "Please specify a valid phone number."), t.validator.addMethod("phoneUK", function (t, e) {
        return t = t.replace(/\(|\)|\s+|-/g, ""), this.optional(e) || t.length > 9 && t.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number"), t.validator.addMethod("phoneUS", function (t, e) {
        return t = t.replace(/\s+/g, ""), this.optional(e) || t.length > 9 && t.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
    }, "Please specify a valid phone number"), t.validator.addMethod("phonesUK", function (t, e) {
        return t = t.replace(/\(|\)|\s+|-/g, ""), this.optional(e) || t.length > 9 && t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number"), t.validator.addMethod("postalCodeCA", function (t, e) {
        return this.optional(e) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(t)
    }, "Please specify a valid postal code"), t.validator.addMethod("postalcodeIT", function (t, e) {
        return this.optional(e) || /^\d{5}$/.test(t)
    }, "Please specify a valid postal code"), t.validator.addMethod("postalcodeNL", function (t, e) {
        return this.optional(e) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(t)
    }, "Please specify a valid postal code"), t.validator.addMethod("postcodeUK", function (t, e) {
        return this.optional(e) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(t)
    }, "Please specify a valid UK postcode"), t.validator.addMethod("require_from_group", function (e, a, d) {
        var i = t(d[1], a.form),
                n = i.eq(0),
                r = n.data("valid_req_grp") ? n.data("valid_req_grp") : t.extend({}, this),
                o = i.filter(function () {
                    return r.elementValue(this)
                }).length >= d[0];
        return n.data("valid_req_grp", r), t(a).data("being_validated") || (i.data("being_validated", !0), i.each(function () {
            r.element(this)
        }), i.data("being_validated", !1)), o
    }, t.validator.format("Please fill at least {0} of these fields.")), t.validator.addMethod("skip_or_fill_minimum", function (e, a, d) {
        var i = t(d[1], a.form),
                n = i.eq(0),
                r = n.data("valid_skip") ? n.data("valid_skip") : t.extend({}, this),
                o = i.filter(function () {
                    return r.elementValue(this)
                }).length,
                s = 0 === o || o >= d[0];
        return n.data("valid_skip", r), t(a).data("being_validated") || (i.data("being_validated", !0), i.each(function () {
            r.element(this)
        }), i.data("being_validated", !1)), s
    }, t.validator.format("Please either skip these fields or fill at least {0} of them.")), jQuery.validator.addMethod("stateUS", function (t, e, a) {
        var d, i = "undefined" == typeof a,
                n = i || "undefined" == typeof a.caseSensitive ? !1 : a.caseSensitive,
                r = i || "undefined" == typeof a.includeTerritories ? !1 : a.includeTerritories,
                o = i || "undefined" == typeof a.includeMilitary ? !1 : a.includeMilitary;
        return d = r || o ? r && o ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : r ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", d = n ? new RegExp(d) : new RegExp(d, "i"), this.optional(e) || d.test(t)
    }, "Please specify a valid state"), t.validator.addMethod("strippedminlength", function (e, a, d) {
        return t(e).text().length >= d
    }, t.validator.format("Please enter at least {0} characters")), t.validator.addMethod("time", function (t, e) {
        return this.optional(e) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(t)
    }, "Please enter a valid time, between 00:00 and 23:59"), t.validator.addMethod("time12h", function (t, e) {
        return this.optional(e) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(t)
    }, "Please enter a valid time in 12-hour am/pm format"), t.validator.addMethod("url2", function (t, e) {
        return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
    }, t.validator.messages.url), t.validator.addMethod("vinUS", function (t) {
        if (17 !== t.length)
            return !1;
        var e, a, d, i, n, r, o = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                s = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
                l = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
                u = 0;
        for (e = 0; 17 > e; e++) {
            if (i = l[e], d = t.slice(e, e + 1), 8 === e && (r = d), isNaN(d)) {
                for (a = 0; a < o.length; a++)
                    if (d.toUpperCase() === o[a]) {
                        d = s[a], d *= i, isNaN(r) && 8 === a && (r = o[a]);
                        break
                    }
            } else
                d *= i;
            u += d
        }
        return n = u % 11, 10 === n && (n = "X"), n === r ? !0 : !1
    }, "The specified vehicle identification number (VIN) is invalid."), t.validator.addMethod("zipcodeUS", function (t, e) {
        return this.optional(e) || /^\d{5}(-\d{4})?$/.test(t)
    }, "The specified US ZIP Code is invalid"), t.validator.addMethod("ziprange", function (t, e) {
        return this.optional(e) || /^90[2-5]\d\{2\}-\d{4}$/.test(t)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")
});
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

function HomepageViewModel() {
    var e = this;
    e.user_email = ko.observable("");
    e.user_password = ko.observable("");
    e.formErrors = ko.observable(false);
    e.isFormLoading = ko.observable(false);
    e.showRegisterForm = ko.observable(false);
    e.timeoutErrorId = 0;
    e.featureTab = ko.observable(1);
    e.checkLogin = function (r) {
        if (e.isFormLoading()) {
            return false
        }
        e.setFormErrors(false);
        var o = $(r).serialize();
        e.setFormLoading(true);
        var t = $.ajax({
            type: "POST",
            url: "/?module=Homepage.Login&r=" + Math.random(),
            data: o,
            dataType: "json"
        });
        t.done(e.checkLoginStatus)
    };
    e.setFormErrors = function (r) {
        e.formErrors(r);
        if (r === true) {
            $(".login").stop(true).effect("shake", {
                distance: 10,
                times: 3
            });
            if (e.timeoutErrorId !== 0) {
                clearTimeout(e.timeoutErrorId)
            }
            e.timeoutErrorId = window.setTimeout(function () {
                e.formErrors(false)
            }, 1e4)
        }
    };
    e.setFormLoading = function (r) {
        e.isFormLoading(r)
    };
    e.toggleRegisterForm = function (r, o) {
        if (e.showRegisterForm() === true) {
            e.showRegisterForm(false);
            $("#register-form").get(0).reset();
            e.reloadCaptcha()
        } else {
            e.showRegisterForm(true)
        }
    };
    e.reloadCaptcha = function () {
        if (typeof reloadImageCode === "function") {
            reloadImageCode(document.getElementById("imgcode"))
        }
        $("#input-captcha").val("")
    };
    e.checkLoginStatus = function (r) {
        e.setFormLoading(false);
        var o = r.code || 0;
        r.data = r.data || {};
        var t = r.data.forward || 0;
        if (o === 0 && t === 0) {
            window.location.reload();
            return
        }
        if (o === 0 && t !== 0) {
            window.location = t;
            return
        }
        e.setFormErrors(true);
        e.displayFlashMessages(r)
    };
    e.doFacebookLogin = function (e, r) {
        var o = $(r.target);
        var t = o.data("href");
        window.location = t
    };
    e.doRegister = function (r) {
        var o = $(r).serialize();
        var t = $.ajax({
            type: "POST",
            url: "/?module=Homepage.Register&r=" + Math.random(),
            data: o,
            dataType: "json"
        });
        t.done(function (r) {
            var o = r.code;
            e.displayFlashMessages(r);
            if (o !== 0) {
                e.reloadCaptcha()
            }
        })
    };
    e.doForgottenPassword = function (e, r) {};
    e.messagifyEntries = function (e) {
        if (typeof e === "string") {
            e = [e]
        }
        if (typeof e === "object") {
            var r = $.map(e, function (e, r) {
                return [e]
            });
            e = r
        }
        return e
    };
    e.displayFlashMessages = function (r) {
        var o = r.code;
        if (o === 0) {
            e.toggleRegisterForm(true);
            var t = e.messagifyEntries(r.data.success);
            hmessage.promptSuccess(t);
            return true
        }
        var t = e.messagifyEntries(r.data.message);
        hmessage.promptErrors(t);
        return true
    };
    e.promptInline = function (e, r) {
        var o = $(r.target);
        var t = o.attr("href");
        var a = $(t);
        if (a.size() === 0) {
            return false
        }
        var s = o.attr("title") || "";
        $.prompt([{
                title: s,
                buttons: {
                    Close: false
                },
                html: a.html()
            }])
    };
    e.getFeatureTab = function () {
        return e.featureTab() || 1
    };
    e.setFeatureTab = function (r) {
        e.featureTab(r);
        $(".scroll-pane").perfectScrollbar()
    };
    e.isFeatureTab = function (r) {
        return e.getFeatureTab() === r
    }
}