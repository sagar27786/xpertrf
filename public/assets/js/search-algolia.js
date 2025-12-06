/*! For license information please see main.6705ef89.js.LICENSE.txt */
(() => {
    var e = {
            532: e => {
                function t() {
                    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                }

                function n(e) {
                    return "function" === typeof e
                }

                function r(e) {
                    return "object" === typeof e && null !== e
                }

                function i(e) {
                    return void 0 === e
                }
                e.exports = t, t.prototype._events = void 0, t.prototype._maxListeners = void 0, t.defaultMaxListeners = 10, t.prototype.setMaxListeners = function(e) {
                    if ("number" !== typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                    return this._maxListeners = e, this
                }, t.prototype.emit = function(e) {
                    var t, o, a, u, c, l;
                    if (this._events || (this._events = {}), "error" === e && (!this._events.error || r(this._events.error) && !this._events.error.length)) {
                        if ((t = arguments[1]) instanceof Error) throw t;
                        var s = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                        throw s.context = t, s
                    }
                    if (i(o = this._events[e])) return !1;
                    if (n(o)) switch (arguments.length) {
                        case 1:
                            o.call(this);
                            break;
                        case 2:
                            o.call(this, arguments[1]);
                            break;
                        case 3:
                            o.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            u = Array.prototype.slice.call(arguments, 1), o.apply(this, u)
                    } else if (r(o))
                        for (u = Array.prototype.slice.call(arguments, 1), a = (l = o.slice()).length, c = 0; c < a; c++) l[c].apply(this, u);
                    return !0
                }, t.prototype.addListener = function(e, o) {
                    var a;
                    if (!n(o)) throw TypeError("listener must be a function");
                    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(o.listener) ? o.listener : o), this._events[e] ? r(this._events[e]) ? this._events[e].push(o) : this._events[e] = [this._events[e], o] : this._events[e] = o, r(this._events[e]) && !this._events[e].warned && (a = i(this._maxListeners) ? t.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[e].length > a && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" === typeof console.trace && console.trace()), this
                }, t.prototype.on = t.prototype.addListener, t.prototype.once = function(e, t) {
                    if (!n(t)) throw TypeError("listener must be a function");
                    var r = !1;

                    function i() {
                        this.removeListener(e, i), r || (r = !0, t.apply(this, arguments))
                    }
                    return i.listener = t, this.on(e, i), this
                }, t.prototype.removeListener = function(e, t) {
                    var i, o, a, u;
                    if (!n(t)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[e]) return this;
                    if (a = (i = this._events[e]).length, o = -1, i === t || n(i.listener) && i.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                    else if (r(i)) {
                        for (u = a; u-- > 0;)
                            if (i[u] === t || i[u].listener && i[u].listener === t) {
                                o = u;
                                break
                            }
                        if (o < 0) return this;
                        1 === i.length ? (i.length = 0, delete this._events[e]) : i.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
                    }
                    return this
                }, t.prototype.removeAllListeners = function(e) {
                    var t, r;
                    if (!this._events) return this;
                    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                    if (0 === arguments.length) {
                        for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                        return this.removeAllListeners("removeListener"), this._events = {}, this
                    }
                    if (n(r = this._events[e])) this.removeListener(e, r);
                    else if (r)
                        for (; r.length;) this.removeListener(e, r[r.length - 1]);
                    return delete this._events[e], this
                }, t.prototype.listeners = function(e) {
                    return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
                }, t.prototype.listenerCount = function(e) {
                    if (this._events) {
                        var t = this._events[e];
                        if (n(t)) return 1;
                        if (t) return t.length
                    }
                    return 0
                }, t.listenerCount = function(e, t) {
                    return e.listenerCount(t)
                }
            },
            788: function(e) {
                e.exports = function() {
                    "use strict";

                    function e(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function t(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function n(n) {
                        for (var r = 1; r < arguments.length; r++) {
                            var i = null != arguments[r] ? arguments[r] : {};
                            r % 2 ? t(Object(i), !0).forEach((function(t) {
                                e(n, t, i[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach((function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                            }))
                        }
                        return n
                    }

                    function r(e, t) {
                        if (null == e) return {};
                        var n, r, i = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                        }
                        return i
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == u.return || u.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }()
                    }

                    function o(e) {
                        return function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                        }(e) || function(e) {
                            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }

                    function a(e) {
                        var t, n = "algoliasearch-client-js-".concat(e.key),
                            r = function() {
                                return void 0 === t && (t = e.localStorage || window.localStorage), t
                            },
                            o = function() {
                                return JSON.parse(r().getItem(n) || "{}")
                            },
                            a = function(e) {
                                r().setItem(n, JSON.stringify(e))
                            },
                            u = function() {
                                var t = e.timeToLive ? 1e3 * e.timeToLive : null,
                                    n = o(),
                                    r = Object.fromEntries(Object.entries(n).filter((function(e) {
                                        return void 0 !== i(e, 2)[1].timestamp
                                    })));
                                if (a(r), t) {
                                    var u = Object.fromEntries(Object.entries(r).filter((function(e) {
                                        var n = i(e, 2)[1],
                                            r = (new Date).getTime();
                                        return !(n.timestamp + t < r)
                                    })));
                                    a(u)
                                }
                            };
                        return {
                            get: function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    miss: function() {
                                        return Promise.resolve()
                                    }
                                };
                                return Promise.resolve().then((function() {
                                    u();
                                    var t = JSON.stringify(e);
                                    return o()[t]
                                })).then((function(e) {
                                    return Promise.all([e ? e.value : t(), void 0 !== e])
                                })).then((function(e) {
                                    var t = i(e, 2),
                                        r = t[0],
                                        o = t[1];
                                    return Promise.all([r, o || n.miss(r)])
                                })).then((function(e) {
                                    return i(e, 1)[0]
                                }))
                            },
                            set: function(e, t) {
                                return Promise.resolve().then((function() {
                                    var i = o();
                                    return i[JSON.stringify(e)] = {
                                        timestamp: (new Date).getTime(),
                                        value: t
                                    }, r().setItem(n, JSON.stringify(i)), t
                                }))
                            },
                            delete: function(e) {
                                return Promise.resolve().then((function() {
                                    var t = o();
                                    delete t[JSON.stringify(e)], r().setItem(n, JSON.stringify(t))
                                }))
                            },
                            clear: function() {
                                return Promise.resolve().then((function() {
                                    r().removeItem(n)
                                }))
                            }
                        }
                    }

                    function u(e) {
                        var t = o(e.caches),
                            n = t.shift();
                        return void 0 === n ? {
                            get: function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    miss: function() {
                                        return Promise.resolve()
                                    }
                                };
                                return t().then((function(e) {
                                    return Promise.all([e, n.miss(e)])
                                })).then((function(e) {
                                    return i(e, 1)[0]
                                }))
                            },
                            set: function(e, t) {
                                return Promise.resolve(t)
                            },
                            delete: function(e) {
                                return Promise.resolve()
                            },
                            clear: function() {
                                return Promise.resolve()
                            }
                        } : {
                            get: function(e, r) {
                                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                    miss: function() {
                                        return Promise.resolve()
                                    }
                                };
                                return n.get(e, r, i).catch((function() {
                                    return u({
                                        caches: t
                                    }).get(e, r, i)
                                }))
                            },
                            set: function(e, r) {
                                return n.set(e, r).catch((function() {
                                    return u({
                                        caches: t
                                    }).set(e, r)
                                }))
                            },
                            delete: function(e) {
                                return n.delete(e).catch((function() {
                                    return u({
                                        caches: t
                                    }).delete(e)
                                }))
                            },
                            clear: function() {
                                return n.clear().catch((function() {
                                    return u({
                                        caches: t
                                    }).clear()
                                }))
                            }
                        }
                    }

                    function c() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                serializable: !0
                            },
                            t = {};
                        return {
                            get: function(n, r) {
                                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        miss: function() {
                                            return Promise.resolve()
                                        }
                                    },
                                    o = JSON.stringify(n);
                                if (o in t) return Promise.resolve(e.serializable ? JSON.parse(t[o]) : t[o]);
                                var a = r(),
                                    u = i && i.miss || function() {
                                        return Promise.resolve()
                                    };
                                return a.then((function(e) {
                                    return u(e)
                                })).then((function() {
                                    return a
                                }))
                            },
                            set: function(n, r) {
                                return t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r, Promise.resolve(r)
                            },
                            delete: function(e) {
                                return delete t[JSON.stringify(e)], Promise.resolve()
                            },
                            clear: function() {
                                return t = {}, Promise.resolve()
                            }
                        }
                    }

                    function l(e) {
                        for (var t = e.length - 1; t > 0; t--) {
                            var n = Math.floor(Math.random() * (t + 1)),
                                r = e[t];
                            e[t] = e[n], e[n] = r
                        }
                        return e
                    }

                    function s(e, t) {
                        return t ? (Object.keys(t).forEach((function(n) {
                            e[n] = t[n](e)
                        })), e) : e
                    }

                    function f(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        var i = 0;
                        return e.replace(/%s/g, (function() {
                            return encodeURIComponent(n[i++])
                        }))
                    }
                    var p = {
                        WithinQueryParameters: 0,
                        WithinHeaders: 1
                    };

                    function d(e, t) {
                        var n = e || {},
                            r = n.data || {};
                        return Object.keys(n).forEach((function(e) {
                            -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (r[e] = n[e])
                        })), {
                            data: Object.entries(r).length > 0 ? r : void 0,
                            timeout: n.timeout || t,
                            headers: n.headers || {},
                            queryParameters: n.queryParameters || {},
                            cacheable: n.cacheable
                        }
                    }
                    var h = {
                            Read: 1,
                            Write: 2,
                            Any: 3
                        },
                        m = 1,
                        y = 2,
                        v = 3;

                    function g(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
                        return n(n({}, e), {}, {
                            status: t,
                            lastUpdate: Date.now()
                        })
                    }

                    function b(e) {
                        return "string" == typeof e ? {
                            protocol: "https",
                            url: e,
                            accept: h.Any
                        } : {
                            protocol: e.protocol || "https",
                            url: e.url,
                            accept: e.accept || h.Any
                        }
                    }
                    var w = "GET",
                        S = "POST";

                    function O(e, t) {
                        return Promise.all(t.map((function(t) {
                            return e.get(t, (function() {
                                return Promise.resolve(g(t))
                            }))
                        }))).then((function(e) {
                            var n = e.filter((function(e) {
                                    return function(e) {
                                        return e.status === m || Date.now() - e.lastUpdate > 12e4
                                    }(e)
                                })),
                                r = e.filter((function(e) {
                                    return function(e) {
                                        return e.status === v && Date.now() - e.lastUpdate <= 12e4
                                    }(e)
                                })),
                                i = [].concat(o(n), o(r));
                            return {
                                getTimeout: function(e, t) {
                                    return (0 === r.length && 0 === e ? 1 : r.length + 3 + e) * t
                                },
                                statelessHosts: i.length > 0 ? i.map((function(e) {
                                    return b(e)
                                })) : t
                            }
                        }))
                    }

                    function P(e, t, r, i) {
                        var a = [],
                            u = function(e, t) {
                                if (e.method !== w && (void 0 !== e.data || void 0 !== t.data)) {
                                    var r = Array.isArray(e.data) ? e.data : n(n({}, e.data), t.data);
                                    return JSON.stringify(r)
                                }
                            }(r, i),
                            c = function(e, t) {
                                var r = n(n({}, e.headers), t.headers),
                                    i = {};
                                return Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    i[e.toLowerCase()] = t
                                })), i
                            }(e, i),
                            l = r.method,
                            s = r.method !== w ? {} : n(n({}, r.data), i.data),
                            f = n(n(n({
                                "x-algolia-agent": e.userAgent.value
                            }, e.queryParameters), s), i.queryParameters),
                            p = 0,
                            d = function t(n, o) {
                                var s = n.pop();
                                if (void 0 === s) throw {
                                    name: "RetryError",
                                    message: "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .",
                                    transporterStackTrace: k(a)
                                };
                                var d = {
                                        data: u,
                                        headers: c,
                                        method: l,
                                        url: j(s, r.path, f),
                                        connectTimeout: o(p, e.timeouts.connect),
                                        responseTimeout: o(p, i.timeout)
                                    },
                                    h = function(e) {
                                        var t = {
                                            request: d,
                                            response: e,
                                            host: s,
                                            triesLeft: n.length
                                        };
                                        return a.push(t), t
                                    },
                                    m = {
                                        onSuccess: function(e) {
                                            return function(e) {
                                                try {
                                                    return JSON.parse(e.content)
                                                } catch (t) {
                                                    throw function(e, t) {
                                                        return {
                                                            name: "DeserializationError",
                                                            message: e,
                                                            response: t
                                                        }
                                                    }(t.message, e)
                                                }
                                            }(e)
                                        },
                                        onRetry: function(r) {
                                            var i = h(r);
                                            return r.isTimedOut && p++, Promise.all([e.logger.info("Retryable failure", E(i)), e.hostsCache.set(s, g(s, r.isTimedOut ? v : y))]).then((function() {
                                                return t(n, o)
                                            }))
                                        },
                                        onFail: function(e) {
                                            throw h(e),
                                                function(e, t) {
                                                    var n = e.content,
                                                        r = e.status,
                                                        i = n;
                                                    try {
                                                        i = JSON.parse(n).message
                                                    } catch (e) {}
                                                    return function(e, t, n) {
                                                        return {
                                                            name: "ApiError",
                                                            message: e,
                                                            status: t,
                                                            transporterStackTrace: n
                                                        }
                                                    }(i, r, t)
                                                }(e, k(a))
                                        }
                                    };
                                return e.requester.send(d).then((function(e) {
                                    return function(e, t) {
                                        return function(e) {
                                            var t = e.status;
                                            return e.isTimedOut || function(e) {
                                                var t = e.isTimedOut,
                                                    n = e.status;
                                                return !t && 0 == ~~n
                                            }(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100)
                                        }(e) ? t.onRetry(e) : 2 == ~~(e.status / 100) ? t.onSuccess(e) : t.onFail(e)
                                    }(e, m)
                                }))
                            };
                        return O(e.hostsCache, t).then((function(e) {
                            return d(o(e.statelessHosts).reverse(), e.getTimeout)
                        }))
                    }

                    function _(e) {
                        var t = {
                            value: "Algolia for JavaScript (".concat(e, ")"),
                            add: function(e) {
                                var n = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
                                return -1 === t.value.indexOf(n) && (t.value = "".concat(t.value).concat(n)), t
                            }
                        };
                        return t
                    }

                    function j(e, t, n) {
                        var r = x(n),
                            i = "".concat(e.protocol, "://").concat(e.url, "/").concat("/" === t.charAt(0) ? t.substr(1) : t);
                        return r.length && (i += "?".concat(r)), i
                    }

                    function x(e) {
                        return Object.keys(e).map((function(t) {
                            return f("%s=%s", t, (n = e[t], "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
                            var n
                        })).join("&")
                    }

                    function k(e) {
                        return e.map((function(e) {
                            return E(e)
                        }))
                    }

                    function E(e) {
                        var t = e.request.headers["x-algolia-api-key"] ? {
                            "x-algolia-api-key": "*****"
                        } : {};
                        return n(n({}, e), {}, {
                            request: n(n({}, e.request), {}, {
                                headers: n(n({}, e.request.headers), t)
                            })
                        })
                    }
                    var R = function(e) {
                            var t = e.appId,
                                r = function(e, t, n) {
                                    var r = {
                                        "x-algolia-api-key": n,
                                        "x-algolia-application-id": t
                                    };
                                    return {
                                        headers: function() {
                                            return e === p.WithinHeaders ? r : {}
                                        },
                                        queryParameters: function() {
                                            return e === p.WithinQueryParameters ? r : {}
                                        }
                                    }
                                }(void 0 !== e.authMode ? e.authMode : p.WithinHeaders, t, e.apiKey),
                                o = function(e) {
                                    var t = e.hostsCache,
                                        n = e.logger,
                                        r = e.requester,
                                        o = e.requestsCache,
                                        a = e.responsesCache,
                                        u = e.timeouts,
                                        c = e.userAgent,
                                        l = e.hosts,
                                        s = e.queryParameters,
                                        f = {
                                            hostsCache: t,
                                            logger: n,
                                            requester: r,
                                            requestsCache: o,
                                            responsesCache: a,
                                            timeouts: u,
                                            userAgent: c,
                                            headers: e.headers,
                                            queryParameters: s,
                                            hosts: l.map((function(e) {
                                                return b(e)
                                            })),
                                            read: function(e, t) {
                                                var n = d(t, f.timeouts.read),
                                                    r = function() {
                                                        return P(f, f.hosts.filter((function(e) {
                                                            return 0 != (e.accept & h.Read)
                                                        })), e, n)
                                                    };
                                                if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable)) return r();
                                                var o = {
                                                    request: e,
                                                    mappedRequestOptions: n,
                                                    transporter: {
                                                        queryParameters: f.queryParameters,
                                                        headers: f.headers
                                                    }
                                                };
                                                return f.responsesCache.get(o, (function() {
                                                    return f.requestsCache.get(o, (function() {
                                                        return f.requestsCache.set(o, r()).then((function(e) {
                                                            return Promise.all([f.requestsCache.delete(o), e])
                                                        }), (function(e) {
                                                            return Promise.all([f.requestsCache.delete(o), Promise.reject(e)])
                                                        })).then((function(e) {
                                                            var t = i(e, 2);
                                                            return t[0], t[1]
                                                        }))
                                                    }))
                                                }), {
                                                    miss: function(e) {
                                                        return f.responsesCache.set(o, e)
                                                    }
                                                })
                                            },
                                            write: function(e, t) {
                                                return P(f, f.hosts.filter((function(e) {
                                                    return 0 != (e.accept & h.Write)
                                                })), e, d(t, f.timeouts.write))
                                            }
                                        };
                                    return f
                                }(n(n({
                                    hosts: [{
                                        url: "".concat(t, "-dsn.algolia.net"),
                                        accept: h.Read
                                    }, {
                                        url: "".concat(t, ".algolia.net"),
                                        accept: h.Write
                                    }].concat(l([{
                                        url: "".concat(t, "-1.algolianet.com")
                                    }, {
                                        url: "".concat(t, "-2.algolianet.com")
                                    }, {
                                        url: "".concat(t, "-3.algolianet.com")
                                    }]))
                                }, e), {}, {
                                    headers: n(n(n({}, r.headers()), {
                                        "content-type": "application/x-www-form-urlencoded"
                                    }), e.headers),
                                    queryParameters: n(n({}, r.queryParameters()), e.queryParameters)
                                }));
                            return s({
                                transporter: o,
                                appId: t,
                                addAlgoliaAgent: function(e, t) {
                                    o.userAgent.add({
                                        segment: e,
                                        version: t
                                    })
                                },
                                clearCache: function() {
                                    return Promise.all([o.requestsCache.clear(), o.responsesCache.clear()]).then((function() {}))
                                }
                            }, e.methods)
                        },
                        C = function(e) {
                            return function(t, n) {
                                return t.method === w ? e.transporter.read(t, n) : e.transporter.write(t, n)
                            }
                        },
                        I = function(e) {
                            return function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return s({
                                    transporter: e.transporter,
                                    appId: e.appId,
                                    indexName: t
                                }, n.methods)
                            }
                        },
                        F = function(e) {
                            return function(t, r) {
                                var i = t.map((function(e) {
                                    return n(n({}, e), {}, {
                                        params: x(e.params || {})
                                    })
                                }));
                                return e.transporter.read({
                                    method: S,
                                    path: "1/indexes/*/queries",
                                    data: {
                                        requests: i
                                    },
                                    cacheable: !0
                                }, r)
                            }
                        },
                        N = function(e) {
                            return function(t, i) {
                                return Promise.all(t.map((function(t) {
                                    var o = t.params,
                                        a = o.facetName,
                                        u = o.facetQuery,
                                        c = r(o, ["facetName", "facetQuery"]);
                                    return I(e)(t.indexName, {
                                        methods: {
                                            searchForFacetValues: D
                                        }
                                    }).searchForFacetValues(a, u, n(n({}, i), c))
                                })))
                            }
                        },
                        T = function(e) {
                            return function(t, n, r) {
                                return e.transporter.read({
                                    method: S,
                                    path: f("1/answers/%s/prediction", e.indexName),
                                    data: {
                                        query: t,
                                        queryLanguages: n
                                    },
                                    cacheable: !0
                                }, r)
                            }
                        },
                        A = function(e) {
                            return function(t, n) {
                                return e.transporter.read({
                                    method: S,
                                    path: f("1/indexes/%s/query", e.indexName),
                                    data: {
                                        query: t
                                    },
                                    cacheable: !0
                                }, n)
                            }
                        },
                        D = function(e) {
                            return function(t, n, r) {
                                return e.transporter.read({
                                    method: S,
                                    path: f("1/indexes/%s/facets/%s/query", e.indexName, t),
                                    data: {
                                        facetQuery: n
                                    },
                                    cacheable: !0
                                }, r)
                            }
                        },
                        L = 1,
                        M = 2,
                        U = 3,
                        V = function(e) {
                            return function(t, r) {
                                var i = t.map((function(e) {
                                    return n(n({}, e), {}, {
                                        threshold: e.threshold || 0
                                    })
                                }));
                                return e.transporter.read({
                                    method: S,
                                    path: "1/indexes/*/recommendations",
                                    data: {
                                        requests: i
                                    },
                                    cacheable: !0
                                }, r)
                            }
                        };

                    function q(e, t, r) {
                        var i, o = {
                            appId: e,
                            apiKey: t,
                            timeouts: {
                                connect: 1,
                                read: 2,
                                write: 30
                            },
                            requester: {
                                send: function(e) {
                                    return new Promise((function(t) {
                                        var n = new XMLHttpRequest;
                                        n.open(e.method, e.url, !0), Object.keys(e.headers).forEach((function(t) {
                                            return n.setRequestHeader(t, e.headers[t])
                                        }));
                                        var r, i = function(e, r) {
                                                return setTimeout((function() {
                                                    n.abort(), t({
                                                        status: 0,
                                                        content: r,
                                                        isTimedOut: !0
                                                    })
                                                }), 1e3 * e)
                                            },
                                            o = i(e.connectTimeout, "Connection timeout");
                                        n.onreadystatechange = function() {
                                            n.readyState > n.OPENED && void 0 === r && (clearTimeout(o), r = i(e.responseTimeout, "Socket timeout"))
                                        }, n.onerror = function() {
                                            0 === n.status && (clearTimeout(o), clearTimeout(r), t({
                                                content: n.responseText || "Network request failed",
                                                status: n.status,
                                                isTimedOut: !1
                                            }))
                                        }, n.onload = function() {
                                            clearTimeout(o), clearTimeout(r), t({
                                                content: n.responseText,
                                                status: n.status,
                                                isTimedOut: !1
                                            })
                                        }, n.send(e.data)
                                    }))
                                }
                            },
                            logger: (i = U, {
                                debug: function(e, t) {
                                    return L >= i && console.debug(e, t), Promise.resolve()
                                },
                                info: function(e, t) {
                                    return M >= i && console.info(e, t), Promise.resolve()
                                },
                                error: function(e, t) {
                                    return console.error(e, t), Promise.resolve()
                                }
                            }),
                            responsesCache: c(),
                            requestsCache: c({
                                serializable: !1
                            }),
                            hostsCache: u({
                                caches: [a({
                                    key: "".concat("4.24.0", "-").concat(e)
                                }), c()]
                            }),
                            userAgent: _("4.24.0").add({
                                segment: "Browser",
                                version: "lite"
                            }),
                            authMode: p.WithinQueryParameters
                        };
                        return R(n(n(n({}, o), r), {}, {
                            methods: {
                                search: F,
                                searchForFacetValues: N,
                                multipleQueries: F,
                                multipleSearchForFacetValues: N,
                                customRequest: C,
                                initIndex: function(e) {
                                    return function(t) {
                                        return I(e)(t, {
                                            methods: {
                                                search: A,
                                                searchForFacetValues: D,
                                                findAnswers: T
                                            }
                                        })
                                    }
                                },
                                getRecommendations: V
                            }
                        }))
                    }
                    return q.version = "4.24.0", q
                }()
            },
            497: (e, t, n) => {
                "use strict";
                var r = n(218);

                function i() {}

                function o() {}
                o.resetWarningCache = i, e.exports = function() {
                    function e(e, t, n, i, o, a) {
                        if (a !== r) {
                            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw u.name = "Invariant Violation", u
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: o,
                        resetWarningCache: i
                    };
                    return n.PropTypes = n, n
                }
            },
            173: (e, t, n) => {
                e.exports = n(497)()
            },
            218: e => {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            730: (e, t, n) => {
                "use strict";
                var r = n(43),
                    i = n(853);

                function o(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var a = new Set,
                    u = {};

                function c(e, t) {
                    l(e, t), l(e + "Capture", t)
                }

                function l(e, t) {
                    for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e])
                }
                var s = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    f = Object.prototype.hasOwnProperty,
                    p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    d = {},
                    h = {};

                function m(e, t, n, r, i, o, a) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a
                }
                var y = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    y[e] = new m(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    y[t] = new m(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    y[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    y[e] = new m(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    y[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    y[e] = new m(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    y[e] = new m(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    y[e] = new m(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    y[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var v = /[\-:]([a-z])/g;

                function g(e) {
                    return e[1].toUpperCase()
                }

                function b(e, t, n, r) {
                    var i = y.hasOwnProperty(t) ? y[t] : null;
                    (null !== i ? 0 !== i.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, i, r) && (n = null), r || null === i ? function(e) {
                        return !!f.call(h, e) || !f.call(d, e) && (p.test(e) ? h[e] = !0 : (d[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(v, g);
                    y[t] = new m(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(v, g);
                    y[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(v, g);
                    y[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    y[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), y.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    y[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    S = Symbol.for("react.element"),
                    O = Symbol.for("react.portal"),
                    P = Symbol.for("react.fragment"),
                    _ = Symbol.for("react.strict_mode"),
                    j = Symbol.for("react.profiler"),
                    x = Symbol.for("react.provider"),
                    k = Symbol.for("react.context"),
                    E = Symbol.for("react.forward_ref"),
                    R = Symbol.for("react.suspense"),
                    C = Symbol.for("react.suspense_list"),
                    I = Symbol.for("react.memo"),
                    F = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var N = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var T = Symbol.iterator;

                function A(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = T && e[T] || e["@@iterator"]) ? e : null
                }
                var D, L = Object.assign;

                function M(e) {
                    if (void 0 === D) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        D = t && t[1] || ""
                    }
                    return "\n" + D + e
                }
                var U = !1;

                function V(e, t) {
                    if (!e || U) return "";
                    U = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (l) {
                                    var r = l
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (l) {
                                    r = l
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (l) {
                                r = l
                            }
                            e()
                        }
                    } catch (l) {
                        if (l && r && "string" === typeof l.stack) {
                            for (var i = l.stack.split("\n"), o = r.stack.split("\n"), a = i.length - 1, u = o.length - 1; 1 <= a && 0 <= u && i[a] !== o[u];) u--;
                            for (; 1 <= a && 0 <= u; a--, u--)
                                if (i[a] !== o[u]) {
                                    if (1 !== a || 1 !== u)
                                        do {
                                            if (a--, 0 > --u || i[a] !== o[u]) {
                                                var c = "\n" + i[a].replace(" at new ", " at ");
                                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                            }
                                        } while (1 <= a && 0 <= u);
                                    break
                                }
                        }
                    } finally {
                        U = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? M(e) : ""
                }

                function q(e) {
                    switch (e.tag) {
                        case 5:
                            return M(e.type);
                        case 16:
                            return M("Lazy");
                        case 13:
                            return M("Suspense");
                        case 19:
                            return M("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = V(e.type, !1);
                        case 11:
                            return e = V(e.type.render, !1);
                        case 1:
                            return e = V(e.type, !0);
                        default:
                            return ""
                    }
                }

                function z(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case P:
                            return "Fragment";
                        case O:
                            return "Portal";
                        case j:
                            return "Profiler";
                        case _:
                            return "StrictMode";
                        case R:
                            return "Suspense";
                        case C:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case k:
                            return (e.displayName || "Context") + ".Consumer";
                        case x:
                            return (e._context.displayName || "Context") + ".Provider";
                        case E:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case I:
                            return null !== (t = e.displayName || null) ? t : z(e.type) || "Memo";
                        case F:
                            t = e._payload, e = e._init;
                            try {
                                return z(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function H(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return z(t);
                        case 8:
                            return t === _ ? "StrictMode" : "Mode";
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
                            if ("function" === typeof t) return t.displayName || t.name || null;
                            if ("string" === typeof t) return t
                    }
                    return null
                }

                function B(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function Q(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function W(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = Q(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var i = n.get,
                                o = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return i.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, o.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function $(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = Q(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function K(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function J(e, t) {
                    var n = t.checked;
                    return L({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function Y(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = B(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function X(e, t) {
                    null != (t = t.checked) && b(e, "checked", t, !1)
                }

                function G(e, t) {
                    X(e, t);
                    var n = B(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, B(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function Z(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && K(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
                        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + B(n), t = null, i = 0; i < e.length; i++) {
                            if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
                            null !== t || e[i].disabled || (t = e[i])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
                    return L({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function ie(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(o(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(o(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: B(n)
                    }
                }

                function oe(e, t) {
                    var n = B(t.value),
                        r = B(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function ae(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function ue(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function ce(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? ue(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var le, se, fe = (se = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((le = le || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = le.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return se(e, t)
                    }))
                } : se);

                function pe(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var de = {
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
                    },
                    he = ["Webkit", "ms", "Moz", "O"];

                function me(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || de.hasOwnProperty(e) && de[e] ? ("" + t).trim() : t + "px"
                }

                function ye(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                i = me(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
                        }
                }
                Object.keys(de).forEach((function(e) {
                    he.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), de[t] = de[e]
                    }))
                }));
                var ve = L({
                    menuitem: !0
                }, {
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
                });

                function ge(e, t) {
                    if (t) {
                        if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(o(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(o(62))
                    }
                }

                function be(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
                            return !0
                    }
                }
                var we = null;

                function Se(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Oe = null,
                    Pe = null,
                    _e = null;

                function je(e) {
                    if (e = bi(e)) {
                        if ("function" !== typeof Oe) throw Error(o(280));
                        var t = e.stateNode;
                        t && (t = Si(t), Oe(e.stateNode, e.type, t))
                    }
                }

                function xe(e) {
                    Pe ? _e ? _e.push(e) : _e = [e] : Pe = e
                }

                function ke() {
                    if (Pe) {
                        var e = Pe,
                            t = _e;
                        if (_e = Pe = null, je(e), t)
                            for (e = 0; e < t.length; e++) je(t[e])
                    }
                }

                function Ee(e, t) {
                    return e(t)
                }

                function Re() {}
                var Ce = !1;

                function Ie(e, t, n) {
                    if (Ce) return e(t, n);
                    Ce = !0;
                    try {
                        return Ee(e, t, n)
                    } finally {
                        Ce = !1, (null !== Pe || null !== _e) && (Re(), ke())
                    }
                }

                function Fe(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = Si(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
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
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
                    return n
                }
                var Ne = !1;
                if (s) try {
                    var Te = {};
                    Object.defineProperty(Te, "passive", {
                        get: function() {
                            Ne = !0
                        }
                    }), window.addEventListener("test", Te, Te), window.removeEventListener("test", Te, Te)
                } catch (se) {
                    Ne = !1
                }

                function Ae(e, t, n, r, i, o, a, u, c) {
                    var l = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, l)
                    } catch (s) {
                        this.onError(s)
                    }
                }
                var De = !1,
                    Le = null,
                    Me = !1,
                    Ue = null,
                    Ve = {
                        onError: function(e) {
                            De = !0, Le = e
                        }
                    };

                function qe(e, t, n, r, i, o, a, u, c) {
                    De = !1, Le = null, Ae.apply(Ve, arguments)
                }

                function ze(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function He(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function Be(e) {
                    if (ze(e) !== e) throw Error(o(188))
                }

                function Qe(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = ze(e))) throw Error(o(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var i = n.return;
                            if (null === i) break;
                            var a = i.alternate;
                            if (null === a) {
                                if (null !== (r = i.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (i.child === a.child) {
                                for (a = i.child; a;) {
                                    if (a === n) return Be(i), e;
                                    if (a === r) return Be(i), t;
                                    a = a.sibling
                                }
                                throw Error(o(188))
                            }
                            if (n.return !== r.return) n = i, r = a;
                            else {
                                for (var u = !1, c = i.child; c;) {
                                    if (c === n) {
                                        u = !0, n = i, r = a;
                                        break
                                    }
                                    if (c === r) {
                                        u = !0, r = i, n = a;
                                        break
                                    }
                                    c = c.sibling
                                }
                                if (!u) {
                                    for (c = a.child; c;) {
                                        if (c === n) {
                                            u = !0, n = a, r = i;
                                            break
                                        }
                                        if (c === r) {
                                            u = !0, r = a, n = i;
                                            break
                                        }
                                        c = c.sibling
                                    }
                                    if (!u) throw Error(o(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(o(190))
                        }
                        if (3 !== n.tag) throw Error(o(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? We(e) : null
                }

                function We(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = We(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var $e = i.unstable_scheduleCallback,
                    Ke = i.unstable_cancelCallback,
                    Je = i.unstable_shouldYield,
                    Ye = i.unstable_requestPaint,
                    Xe = i.unstable_now,
                    Ge = i.unstable_getCurrentPriorityLevel,
                    Ze = i.unstable_ImmediatePriority,
                    et = i.unstable_UserBlockingPriority,
                    tt = i.unstable_NormalPriority,
                    nt = i.unstable_LowPriority,
                    rt = i.unstable_IdlePriority,
                    it = null,
                    ot = null;
                var at = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (ut(e) / ct | 0) | 0
                    },
                    ut = Math.log,
                    ct = Math.LN2;
                var lt = 64,
                    st = 4194304;

                function ft(e) {
                    switch (e & -e) {
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
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function pt(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        i = e.suspendedLanes,
                        o = e.pingedLanes,
                        a = 268435455 & n;
                    if (0 !== a) {
                        var u = a & ~i;
                        0 !== u ? r = ft(u) : 0 !== (o &= a) && (r = ft(o))
                    } else 0 !== (a = n & ~i) ? r = ft(a) : 0 !== o && (r = ft(o));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 === (t & i) && ((i = r & -r) >= (o = t & -t) || 16 === i && 0 !== (4194240 & o))) return t;
                    if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) i = 1 << (n = 31 - at(t)), r |= e[n], t &= ~i;
                    return r
                }

                function dt(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
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
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function ht(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function mt() {
                    var e = lt;
                    return 0 === (4194240 & (lt <<= 1)) && (lt = 64), e
                }

                function yt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function vt(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - at(t)] = n
                }

                function gt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - at(n),
                            i = 1 << r;
                        i & t | e[r] & t && (e[r] |= t), n &= ~i
                    }
                }
                var bt = 0;

                function wt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var St, Ot, Pt, _t, jt, xt = !1,
                    kt = [],
                    Et = null,
                    Rt = null,
                    Ct = null,
                    It = new Map,
                    Ft = new Map,
                    Nt = [],
                    Tt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function At(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Et = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Rt = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Ct = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            It.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Ft.delete(t.pointerId)
                    }
                }

                function Dt(e, t, n, r, i, o) {
                    return null === e || e.nativeEvent !== o ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: o,
                        targetContainers: [i]
                    }, null !== t && (null !== (t = bi(t)) && Ot(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e)
                }

                function Lt(e) {
                    var t = gi(e.target);
                    if (null !== t) {
                        var n = ze(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = He(n))) return e.blockedOn = t, void jt(e.priority, (function() {
                                    Pt(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Mt(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = bi(n)) && Ot(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        we = r, n.target.dispatchEvent(r), we = null, t.shift()
                    }
                    return !0
                }

                function Ut(e, t, n) {
                    Mt(e) && n.delete(t)
                }

                function Vt() {
                    xt = !1, null !== Et && Mt(Et) && (Et = null), null !== Rt && Mt(Rt) && (Rt = null), null !== Ct && Mt(Ct) && (Ct = null), It.forEach(Ut), Ft.forEach(Ut)
                }

                function qt(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, xt || (xt = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Vt)))
                }

                function zt(e) {
                    function t(t) {
                        return qt(t, e)
                    }
                    if (0 < kt.length) {
                        qt(kt[0], e);
                        for (var n = 1; n < kt.length; n++) {
                            var r = kt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Et && qt(Et, e), null !== Rt && qt(Rt, e), null !== Ct && qt(Ct, e), It.forEach(t), Ft.forEach(t), n = 0; n < Nt.length; n++)(r = Nt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Nt.length && null === (n = Nt[0]).blockedOn;) Lt(n), null === n.blockedOn && Nt.shift()
                }
                var Ht = w.ReactCurrentBatchConfig,
                    Bt = !0;

                function Qt(e, t, n, r) {
                    var i = bt,
                        o = Ht.transition;
                    Ht.transition = null;
                    try {
                        bt = 1, $t(e, t, n, r)
                    } finally {
                        bt = i, Ht.transition = o
                    }
                }

                function Wt(e, t, n, r) {
                    var i = bt,
                        o = Ht.transition;
                    Ht.transition = null;
                    try {
                        bt = 4, $t(e, t, n, r)
                    } finally {
                        bt = i, Ht.transition = o
                    }
                }

                function $t(e, t, n, r) {
                    if (Bt) {
                        var i = Jt(e, t, n, r);
                        if (null === i) Br(e, t, r, Kt, n), At(e, r);
                        else if (function(e, t, n, r, i) {
                                switch (t) {
                                    case "focusin":
                                        return Et = Dt(Et, e, t, n, r, i), !0;
                                    case "dragenter":
                                        return Rt = Dt(Rt, e, t, n, r, i), !0;
                                    case "mouseover":
                                        return Ct = Dt(Ct, e, t, n, r, i), !0;
                                    case "pointerover":
                                        var o = i.pointerId;
                                        return It.set(o, Dt(It.get(o) || null, e, t, n, r, i)), !0;
                                    case "gotpointercapture":
                                        return o = i.pointerId, Ft.set(o, Dt(Ft.get(o) || null, e, t, n, r, i)), !0
                                }
                                return !1
                            }(i, e, t, n, r)) r.stopPropagation();
                        else if (At(e, r), 4 & t && -1 < Tt.indexOf(e)) {
                            for (; null !== i;) {
                                var o = bi(i);
                                if (null !== o && St(o), null === (o = Jt(e, t, n, r)) && Br(e, t, r, Kt, n), o === i) break;
                                i = o
                            }
                            null !== i && r.stopPropagation()
                        } else Br(e, t, r, null, n)
                    }
                }
                var Kt = null;

                function Jt(e, t, n, r) {
                    if (Kt = null, null !== (e = gi(e = Se(r))))
                        if (null === (t = ze(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = He(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return Kt = e, null
                }

                function Yt(e) {
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
                            switch (Ge()) {
                                case Ze:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Xt = null,
                    Gt = null,
                    Zt = null;

                function en() {
                    if (Zt) return Zt;
                    var e, t, n = Gt,
                        r = n.length,
                        i = "value" in Xt ? Xt.value : Xt.textContent,
                        o = i.length;
                    for (e = 0; e < r && n[e] === i[e]; e++);
                    var a = r - e;
                    for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
                    return Zt = i.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function on(e) {
                    function t(t, n, r, i, o) {
                        for (var a in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(a) && (t = e[a], this[a] = t ? t(i) : i[a]);
                        return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return L(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function() {},
                        isPersistent: nn
                    }), t
                }
                var an, un, cn, ln = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    sn = on(ln),
                    fn = L({}, ln, {
                        view: 0,
                        detail: 0
                    }),
                    pn = on(fn),
                    dn = L({}, fn, {
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
                        getModifierState: jn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== cn && (cn && "mousemove" === e.type ? (an = e.screenX - cn.screenX, un = e.screenY - cn.screenY) : un = an = 0, cn = e), an)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : un
                        }
                    }),
                    hn = on(dn),
                    mn = on(L({}, dn, {
                        dataTransfer: 0
                    })),
                    yn = on(L({}, fn, {
                        relatedTarget: 0
                    })),
                    vn = on(L({}, ln, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    gn = L({}, ln, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    bn = on(gn),
                    wn = on(L({}, ln, {
                        data: 0
                    })),
                    Sn = {
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
                    },
                    On = {
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
                    },
                    Pn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function _n(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = Pn[e]) && !!t[e]
                }

                function jn() {
                    return _n
                }
                var xn = L({}, fn, {
                        key: function(e) {
                            if (e.key) {
                                var t = Sn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? On[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: jn,
                        charCode: function(e) {
                            return "keypress" === e.type ? tn(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    kn = on(xn),
                    En = on(L({}, dn, {
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
                    })),
                    Rn = on(L({}, fn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: jn
                    })),
                    Cn = on(L({}, ln, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    In = L({}, dn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Fn = on(In),
                    Nn = [9, 13, 27, 32],
                    Tn = s && "CompositionEvent" in window,
                    An = null;
                s && "documentMode" in document && (An = document.documentMode);
                var Dn = s && "TextEvent" in window && !An,
                    Ln = s && (!Tn || An && 8 < An && 11 >= An),
                    Mn = String.fromCharCode(32),
                    Un = !1;

                function Vn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Nn.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function qn(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var zn = !1;
                var Hn = {
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

                function Bn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Hn[e.type] : "textarea" === t
                }

                function Qn(e, t, n, r) {
                    xe(r), 0 < (t = Wr(t, "onChange")).length && (n = new sn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Wn = null,
                    $n = null;

                function Kn(e) {
                    Mr(e, 0)
                }

                function Jn(e) {
                    if ($(wi(e))) return e
                }

                function Yn(e, t) {
                    if ("change" === e) return t
                }
                var Xn = !1;
                if (s) {
                    var Gn;
                    if (s) {
                        var Zn = "oninput" in document;
                        if (!Zn) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Zn = "function" === typeof er.oninput
                        }
                        Gn = Zn
                    } else Gn = !1;
                    Xn = Gn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    Wn && (Wn.detachEvent("onpropertychange", nr), $n = Wn = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && Jn($n)) {
                        var t = [];
                        Qn(t, $n, e, Se(e)), Ie(Kn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), $n = n, (Wn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function ir(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Jn($n)
                }

                function or(e, t) {
                    if ("click" === e) return Jn(t)
                }

                function ar(e, t) {
                    if ("input" === e || "change" === e) return Jn(t)
                }
                var ur = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                };

                function cr(e, t) {
                    if (ur(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (!f.call(t, i) || !ur(e[i], t[i])) return !1
                    }
                    return !0
                }

                function lr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function sr(e, t) {
                    var n, r = lr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = lr(r)
                    }
                }

                function fr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function pr() {
                    for (var e = window, t = K(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = K((e = t.contentWindow).document)
                    }
                    return t
                }

                function dr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function hr(e) {
                    var t = pr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && dr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var i = n.textContent.length,
                                o = Math.min(r.start, i);
                            r = void 0 === r.end ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = sr(n, o);
                            var a = sr(n, r);
                            i && a && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && ((t = t.createRange()).setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var mr = s && "documentMode" in document && 11 >= document.documentMode,
                    yr = null,
                    vr = null,
                    gr = null,
                    br = !1;

                function wr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    br || null == yr || yr !== K(r) || ("selectionStart" in (r = yr) && dr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, gr && cr(gr, r) || (gr = r, 0 < (r = Wr(vr, "onSelect")).length && (t = new sn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = yr)))
                }

                function Sr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var Or = {
                        animationend: Sr("Animation", "AnimationEnd"),
                        animationiteration: Sr("Animation", "AnimationIteration"),
                        animationstart: Sr("Animation", "AnimationStart"),
                        transitionend: Sr("Transition", "TransitionEnd")
                    },
                    Pr = {},
                    _r = {};

                function jr(e) {
                    if (Pr[e]) return Pr[e];
                    if (!Or[e]) return e;
                    var t, n = Or[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in _r) return Pr[e] = n[t];
                    return e
                }
                s && (_r = document.createElement("div").style, "AnimationEvent" in window || (delete Or.animationend.animation, delete Or.animationiteration.animation, delete Or.animationstart.animation), "TransitionEvent" in window || delete Or.transitionend.transition);
                var xr = jr("animationend"),
                    kr = jr("animationiteration"),
                    Er = jr("animationstart"),
                    Rr = jr("transitionend"),
                    Cr = new Map,
                    Ir = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Fr(e, t) {
                    Cr.set(e, t), c(t, [e])
                }
                for (var Nr = 0; Nr < Ir.length; Nr++) {
                    var Tr = Ir[Nr];
                    Fr(Tr.toLowerCase(), "on" + (Tr[0].toUpperCase() + Tr.slice(1)))
                }
                Fr(xr, "onAnimationEnd"), Fr(kr, "onAnimationIteration"), Fr(Er, "onAnimationStart"), Fr("dblclick", "onDoubleClick"), Fr("focusin", "onFocus"), Fr("focusout", "onBlur"), Fr(Rr, "onTransitionEnd"), l("onMouseEnter", ["mouseout", "mouseover"]), l("onMouseLeave", ["mouseout", "mouseover"]), l("onPointerEnter", ["pointerout", "pointerover"]), l("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Dr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));

                function Lr(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, i, a, u, c, l) {
                            if (qe.apply(this, arguments), De) {
                                if (!De) throw Error(o(198));
                                var s = Le;
                                De = !1, Le = null, Me || (Me = !0, Ue = s)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Mr(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            i = r.event;
                        r = r.listeners;
                        e: {
                            var o = void 0;
                            if (t)
                                for (var a = r.length - 1; 0 <= a; a--) {
                                    var u = r[a],
                                        c = u.instance,
                                        l = u.currentTarget;
                                    if (u = u.listener, c !== o && i.isPropagationStopped()) break e;
                                    Lr(i, u, l), o = c
                                } else
                                    for (a = 0; a < r.length; a++) {
                                        if (c = (u = r[a]).instance, l = u.currentTarget, u = u.listener, c !== o && i.isPropagationStopped()) break e;
                                        Lr(i, u, l), o = c
                                    }
                        }
                    }
                    if (Me) throw e = Ue, Me = !1, Ue = null, e
                }

                function Ur(e, t) {
                    var n = t[mi];
                    void 0 === n && (n = t[mi] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Hr(t, e, 2, !1), n.add(r))
                }

                function Vr(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Hr(n, e, r, t)
                }
                var qr = "_reactListening" + Math.random().toString(36).slice(2);

                function zr(e) {
                    if (!e[qr]) {
                        e[qr] = !0, a.forEach((function(t) {
                            "selectionchange" !== t && (Dr.has(t) || Vr(t, !1, e), Vr(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[qr] || (t[qr] = !0, Vr("selectionchange", !1, t))
                    }
                }

                function Hr(e, t, n, r) {
                    switch (Yt(t)) {
                        case 1:
                            var i = Qt;
                            break;
                        case 4:
                            i = Wt;
                            break;
                        default:
                            i = $t
                    }
                    n = i.bind(null, t, n, e), i = void 0, !Ne || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), r ? void 0 !== i ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: i
                    }) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, {
                        passive: i
                    }) : e.addEventListener(t, n, !1)
                }

                function Br(e, t, n, r, i) {
                    var o = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var a = r.tag;
                        if (3 === a || 4 === a) {
                            var u = r.stateNode.containerInfo;
                            if (u === i || 8 === u.nodeType && u.parentNode === i) break;
                            if (4 === a)
                                for (a = r.return; null !== a;) {
                                    var c = a.tag;
                                    if ((3 === c || 4 === c) && ((c = a.stateNode.containerInfo) === i || 8 === c.nodeType && c.parentNode === i)) return;
                                    a = a.return
                                }
                            for (; null !== u;) {
                                if (null === (a = gi(u))) return;
                                if (5 === (c = a.tag) || 6 === c) {
                                    r = o = a;
                                    continue e
                                }
                                u = u.parentNode
                            }
                        }
                        r = r.return
                    }
                    Ie((function() {
                        var r = o,
                            i = Se(n),
                            a = [];
                        e: {
                            var u = Cr.get(e);
                            if (void 0 !== u) {
                                var c = sn,
                                    l = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        c = kn;
                                        break;
                                    case "focusin":
                                        l = "focus", c = yn;
                                        break;
                                    case "focusout":
                                        l = "blur", c = yn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        c = yn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        c = hn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        c = mn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        c = Rn;
                                        break;
                                    case xr:
                                    case kr:
                                    case Er:
                                        c = vn;
                                        break;
                                    case Rr:
                                        c = Cn;
                                        break;
                                    case "scroll":
                                        c = pn;
                                        break;
                                    case "wheel":
                                        c = Fn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        c = bn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        c = En
                                }
                                var s = 0 !== (4 & t),
                                    f = !s && "scroll" === e,
                                    p = s ? null !== u ? u + "Capture" : null : u;
                                s = [];
                                for (var d, h = r; null !== h;) {
                                    var m = (d = h).stateNode;
                                    if (5 === d.tag && null !== m && (d = m, null !== p && (null != (m = Fe(h, p)) && s.push(Qr(h, m, d)))), f) break;
                                    h = h.return
                                }
                                0 < s.length && (u = new c(u, l, null, n, i), a.push({
                                    event: u,
                                    listeners: s
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (c = "mouseout" === e || "pointerout" === e, (!(u = "mouseover" === e || "pointerover" === e) || n === we || !(l = n.relatedTarget || n.fromElement) || !gi(l) && !l[hi]) && (c || u) && (u = i.window === i ? i : (u = i.ownerDocument) ? u.defaultView || u.parentWindow : window, c ? (c = r, null !== (l = (l = n.relatedTarget || n.toElement) ? gi(l) : null) && (l !== (f = ze(l)) || 5 !== l.tag && 6 !== l.tag) && (l = null)) : (c = null, l = r), c !== l)) {
                                if (s = hn, m = "onMouseLeave", p = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (s = En, m = "onPointerLeave", p = "onPointerEnter", h = "pointer"), f = null == c ? u : wi(c), d = null == l ? u : wi(l), (u = new s(m, h + "leave", c, n, i)).target = f, u.relatedTarget = d, m = null, gi(i) === r && ((s = new s(p, h + "enter", l, n, i)).target = d, s.relatedTarget = f, m = s), f = m, c && l) e: {
                                    for (p = l, h = 0, d = s = c; d; d = $r(d)) h++;
                                    for (d = 0, m = p; m; m = $r(m)) d++;
                                    for (; 0 < h - d;) s = $r(s),
                                    h--;
                                    for (; 0 < d - h;) p = $r(p),
                                    d--;
                                    for (; h--;) {
                                        if (s === p || null !== p && s === p.alternate) break e;
                                        s = $r(s), p = $r(p)
                                    }
                                    s = null
                                }
                                else s = null;
                                null !== c && Kr(a, u, c, s, !1), null !== l && null !== f && Kr(a, f, l, s, !0)
                            }
                            if ("select" === (c = (u = r ? wi(r) : window).nodeName && u.nodeName.toLowerCase()) || "input" === c && "file" === u.type) var y = Yn;
                            else if (Bn(u))
                                if (Xn) y = ar;
                                else {
                                    y = ir;
                                    var v = rr
                                }
                            else(c = u.nodeName) && "input" === c.toLowerCase() && ("checkbox" === u.type || "radio" === u.type) && (y = or);
                            switch (y && (y = y(e, r)) ? Qn(a, y, n, i) : (v && v(e, u, r), "focusout" === e && (v = u._wrapperState) && v.controlled && "number" === u.type && ee(u, "number", u.value)), v = r ? wi(r) : window, e) {
                                case "focusin":
                                    (Bn(v) || "true" === v.contentEditable) && (yr = v, vr = r, gr = null);
                                    break;
                                case "focusout":
                                    gr = vr = yr = null;
                                    break;
                                case "mousedown":
                                    br = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    br = !1, wr(a, n, i);
                                    break;
                                case "selectionchange":
                                    if (mr) break;
                                case "keydown":
                                case "keyup":
                                    wr(a, n, i)
                            }
                            var g;
                            if (Tn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        b = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate";
                                        break e
                                }
                                b = void 0
                            }
                            else zn ? Vn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (Ln && "ko" !== n.locale && (zn || "onCompositionStart" !== b ? "onCompositionEnd" === b && zn && (g = en()) : (Gt = "value" in (Xt = i) ? Xt.value : Xt.textContent, zn = !0)), 0 < (v = Wr(r, b)).length && (b = new wn(b, e, null, n, i), a.push({
                                event: b,
                                listeners: v
                            }), g ? b.data = g : null !== (g = qn(n)) && (b.data = g))), (g = Dn ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return qn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Un = !0, Mn);
                                    case "textInput":
                                        return (e = t.data) === Mn && Un ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (zn) return "compositionend" === e || !Tn && Vn(e, t) ? (e = en(), Zt = Gt = Xt = null, zn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Ln && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Wr(r, "onBeforeInput")).length && (i = new wn("onBeforeInput", "beforeinput", null, n, i), a.push({
                                event: i,
                                listeners: r
                            }), i.data = g))
                        }
                        Mr(a, t)
                    }))
                }

                function Qr(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Wr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var i = e,
                            o = i.stateNode;
                        5 === i.tag && null !== o && (i = o, null != (o = Fe(e, n)) && r.unshift(Qr(e, o, i)), null != (o = Fe(e, t)) && r.push(Qr(e, o, i))), e = e.return
                    }
                    return r
                }

                function $r(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Kr(e, t, n, r, i) {
                    for (var o = t._reactName, a = []; null !== n && n !== r;) {
                        var u = n,
                            c = u.alternate,
                            l = u.stateNode;
                        if (null !== c && c === r) break;
                        5 === u.tag && null !== l && (u = l, i ? null != (c = Fe(n, o)) && a.unshift(Qr(n, c, u)) : i || null != (c = Fe(n, o)) && a.push(Qr(n, c, u))), n = n.return
                    }
                    0 !== a.length && e.push({
                        event: t,
                        listeners: a
                    })
                }
                var Jr = /\r\n?/g,
                    Yr = /\u0000|\uFFFD/g;

                function Xr(e) {
                    return ("string" === typeof e ? e : "" + e).replace(Jr, "\n").replace(Yr, "")
                }

                function Gr(e, t, n) {
                    if (t = Xr(t), Xr(e) !== t && n) throw Error(o(425))
                }

                function Zr() {}
                var ei = null,
                    ti = null;

                function ni(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ri = "function" === typeof setTimeout ? setTimeout : void 0,
                    ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    oi = "function" === typeof Promise ? Promise : void 0,
                    ai = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof oi ? function(e) {
                        return oi.resolve(null).then(e).catch(ui)
                    } : ri;

                function ui(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function ci(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var i = n.nextSibling;
                        if (e.removeChild(n), i && 8 === i.nodeType)
                            if ("/$" === (n = i.data)) {
                                if (0 === r) return e.removeChild(i), void zt(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = i
                    } while (n);
                    zt(t)
                }

                function li(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function si(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var fi = Math.random().toString(36).slice(2),
                    pi = "__reactFiber$" + fi,
                    di = "__reactProps$" + fi,
                    hi = "__reactContainer$" + fi,
                    mi = "__reactEvents$" + fi,
                    yi = "__reactListeners$" + fi,
                    vi = "__reactHandles$" + fi;

                function gi(e) {
                    var t = e[pi];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[hi] || n[pi]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = si(e); null !== e;) {
                                    if (n = e[pi]) return n;
                                    e = si(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function bi(e) {
                    return !(e = e[pi] || e[hi]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function wi(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(o(33))
                }

                function Si(e) {
                    return e[di] || null
                }
                var Oi = [],
                    Pi = -1;

                function _i(e) {
                    return {
                        current: e
                    }
                }

                function ji(e) {
                    0 > Pi || (e.current = Oi[Pi], Oi[Pi] = null, Pi--)
                }

                function xi(e, t) {
                    Pi++, Oi[Pi] = e.current, e.current = t
                }
                var ki = {},
                    Ei = _i(ki),
                    Ri = _i(!1),
                    Ci = ki;

                function Ii(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return ki;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var i, o = {};
                    for (i in n) o[i] = t[i];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
                }

                function Fi(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function Ni() {
                    ji(Ri), ji(Ei)
                }

                function Ti(e, t, n) {
                    if (Ei.current !== ki) throw Error(o(168));
                    xi(Ei, t), xi(Ri, n)
                }

                function Ai(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var i in r = r.getChildContext())
                        if (!(i in t)) throw Error(o(108, H(e) || "Unknown", i));
                    return L({}, n, r)
                }

                function Di(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ki, Ci = Ei.current, xi(Ei, e), xi(Ri, Ri.current), !0
                }

                function Li(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(o(169));
                    n ? (e = Ai(e, t, Ci), r.__reactInternalMemoizedMergedChildContext = e, ji(Ri), ji(Ei), xi(Ei, e)) : ji(Ri), xi(Ri, n)
                }
                var Mi = null,
                    Ui = !1,
                    Vi = !1;

                function qi(e) {
                    null === Mi ? Mi = [e] : Mi.push(e)
                }

                function zi() {
                    if (!Vi && null !== Mi) {
                        Vi = !0;
                        var e = 0,
                            t = bt;
                        try {
                            var n = Mi;
                            for (bt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            Mi = null, Ui = !1
                        } catch (i) {
                            throw null !== Mi && (Mi = Mi.slice(e + 1)), $e(Ze, zi), i
                        } finally {
                            bt = t, Vi = !1
                        }
                    }
                    return null
                }
                var Hi = [],
                    Bi = 0,
                    Qi = null,
                    Wi = 0,
                    $i = [],
                    Ki = 0,
                    Ji = null,
                    Yi = 1,
                    Xi = "";

                function Gi(e, t) {
                    Hi[Bi++] = Wi, Hi[Bi++] = Qi, Qi = e, Wi = t
                }

                function Zi(e, t, n) {
                    $i[Ki++] = Yi, $i[Ki++] = Xi, $i[Ki++] = Ji, Ji = e;
                    var r = Yi;
                    e = Xi;
                    var i = 32 - at(r) - 1;
                    r &= ~(1 << i), n += 1;
                    var o = 32 - at(t) + i;
                    if (30 < o) {
                        var a = i - i % 5;
                        o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, Yi = 1 << 32 - at(t) + i | n << i | r, Xi = o + e
                    } else Yi = 1 << o | n << i | r, Xi = e
                }

                function eo(e) {
                    null !== e.return && (Gi(e, 1), Zi(e, 1, 0))
                }

                function to(e) {
                    for (; e === Qi;) Qi = Hi[--Bi], Hi[Bi] = null, Wi = Hi[--Bi], Hi[Bi] = null;
                    for (; e === Ji;) Ji = $i[--Ki], $i[Ki] = null, Xi = $i[--Ki], $i[Ki] = null, Yi = $i[--Ki], $i[Ki] = null
                }
                var no = null,
                    ro = null,
                    io = !1,
                    oo = null;

                function ao(e, t) {
                    var n = Il(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function uo(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, ro = li(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, ro = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ji ? {
                                id: Yi,
                                overflow: Xi
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = Il(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, no = e, ro = null, !0);
                        default:
                            return !1
                    }
                }

                function co(e) {
                    return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
                }

                function lo(e) {
                    if (io) {
                        var t = ro;
                        if (t) {
                            var n = t;
                            if (!uo(e, t)) {
                                if (co(e)) throw Error(o(418));
                                t = li(n.nextSibling);
                                var r = no;
                                t && uo(e, t) ? ao(r, n) : (e.flags = -4097 & e.flags | 2, io = !1, no = e)
                            }
                        } else {
                            if (co(e)) throw Error(o(418));
                            e.flags = -4097 & e.flags | 2, io = !1, no = e
                        }
                    }
                }

                function so(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    no = e
                }

                function fo(e) {
                    if (e !== no) return !1;
                    if (!io) return so(e), io = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !ni(e.type, e.memoizedProps)), t && (t = ro)) {
                        if (co(e)) throw po(), Error(o(418));
                        for (; t;) ao(e, t), t = li(t.nextSibling)
                    }
                    if (so(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            ro = li(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            ro = null
                        }
                    } else ro = no ? li(e.stateNode.nextSibling) : null;
                    return !0
                }

                function po() {
                    for (var e = ro; e;) e = li(e.nextSibling)
                }

                function ho() {
                    ro = no = null, io = !1
                }

                function mo(e) {
                    null === oo ? oo = [e] : oo.push(e)
                }
                var yo = w.ReactCurrentBatchConfig;

                function vo(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(o(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(o(147, e));
                            var i = r,
                                a = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === a ? t.ref : (t = function(e) {
                                var t = i.refs;
                                null === e ? delete t[a] : t[a] = e
                            }, t._stringRef = a, t)
                        }
                        if ("string" !== typeof e) throw Error(o(284));
                        if (!n._owner) throw Error(o(290, e))
                    }
                    return e
                }

                function go(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function bo(e) {
                    return (0, e._init)(e._payload)
                }

                function wo(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function i(e, t) {
                        return (e = Nl(e, t)).index = 0, e.sibling = null, e
                    }

                    function a(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function u(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function c(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Ll(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
                    }

                    function l(e, t, n, r) {
                        var o = n.type;
                        return o === P ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" === typeof o && null !== o && o.$$typeof === F && bo(o) === t.type) ? ((r = i(t, n.props)).ref = vo(e, t, n), r.return = e, r) : ((r = Tl(n.type, n.key, n.props, null, e.mode, r)).ref = vo(e, t, n), r.return = e, r)
                    }

                    function s(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ml(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
                    }

                    function f(e, t, n, r, o) {
                        return null === t || 7 !== t.tag ? ((t = Al(n, e.mode, r, o)).return = e, t) : ((t = i(t, n)).return = e, t)
                    }

                    function p(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Ll("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case S:
                                    return (n = Tl(t.type, t.key, t.props, null, e.mode, n)).ref = vo(e, null, t), n.return = e, n;
                                case O:
                                    return (t = Ml(t, e.mode, n)).return = e, t;
                                case F:
                                    return p(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || A(t)) return (t = Al(t, e.mode, n, null)).return = e, t;
                            go(e, t)
                        }
                        return null
                    }

                    function d(e, t, n, r) {
                        var i = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== i ? null : c(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case S:
                                    return n.key === i ? l(e, t, n, r) : null;
                                case O:
                                    return n.key === i ? s(e, t, n, r) : null;
                                case F:
                                    return d(e, t, (i = n._init)(n._payload), r)
                            }
                            if (te(n) || A(n)) return null !== i ? null : f(e, t, n, r, null);
                            go(e, n)
                        }
                        return null
                    }

                    function h(e, t, n, r, i) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return c(t, e = e.get(n) || null, "" + r, i);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case S:
                                    return l(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                                case O:
                                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                                case F:
                                    return h(e, t, n, (0, r._init)(r._payload), i)
                            }
                            if (te(r) || A(r)) return f(t, e = e.get(n) || null, r, i, null);
                            go(t, r)
                        }
                        return null
                    }

                    function m(i, o, u, c) {
                        for (var l = null, s = null, f = o, m = o = 0, y = null; null !== f && m < u.length; m++) {
                            f.index > m ? (y = f, f = null) : y = f.sibling;
                            var v = d(i, f, u[m], c);
                            if (null === v) {
                                null === f && (f = y);
                                break
                            }
                            e && f && null === v.alternate && t(i, f), o = a(v, o, m), null === s ? l = v : s.sibling = v, s = v, f = y
                        }
                        if (m === u.length) return n(i, f), io && Gi(i, m), l;
                        if (null === f) {
                            for (; m < u.length; m++) null !== (f = p(i, u[m], c)) && (o = a(f, o, m), null === s ? l = f : s.sibling = f, s = f);
                            return io && Gi(i, m), l
                        }
                        for (f = r(i, f); m < u.length; m++) null !== (y = h(f, i, m, u[m], c)) && (e && null !== y.alternate && f.delete(null === y.key ? m : y.key), o = a(y, o, m), null === s ? l = y : s.sibling = y, s = y);
                        return e && f.forEach((function(e) {
                            return t(i, e)
                        })), io && Gi(i, m), l
                    }

                    function y(i, u, c, l) {
                        var s = A(c);
                        if ("function" !== typeof s) throw Error(o(150));
                        if (null == (c = s.call(c))) throw Error(o(151));
                        for (var f = s = null, m = u, y = u = 0, v = null, g = c.next(); null !== m && !g.done; y++, g = c.next()) {
                            m.index > y ? (v = m, m = null) : v = m.sibling;
                            var b = d(i, m, g.value, l);
                            if (null === b) {
                                null === m && (m = v);
                                break
                            }
                            e && m && null === b.alternate && t(i, m), u = a(b, u, y), null === f ? s = b : f.sibling = b, f = b, m = v
                        }
                        if (g.done) return n(i, m), io && Gi(i, y), s;
                        if (null === m) {
                            for (; !g.done; y++, g = c.next()) null !== (g = p(i, g.value, l)) && (u = a(g, u, y), null === f ? s = g : f.sibling = g, f = g);
                            return io && Gi(i, y), s
                        }
                        for (m = r(i, m); !g.done; y++, g = c.next()) null !== (g = h(m, i, y, g.value, l)) && (e && null !== g.alternate && m.delete(null === g.key ? y : g.key), u = a(g, u, y), null === f ? s = g : f.sibling = g, f = g);
                        return e && m.forEach((function(e) {
                            return t(i, e)
                        })), io && Gi(i, y), s
                    }
                    return function e(r, o, a, c) {
                        if ("object" === typeof a && null !== a && a.type === P && null === a.key && (a = a.props.children), "object" === typeof a && null !== a) {
                            switch (a.$$typeof) {
                                case S:
                                    e: {
                                        for (var l = a.key, s = o; null !== s;) {
                                            if (s.key === l) {
                                                if ((l = a.type) === P) {
                                                    if (7 === s.tag) {
                                                        n(r, s.sibling), (o = i(s, a.props.children)).return = r, r = o;
                                                        break e
                                                    }
                                                } else if (s.elementType === l || "object" === typeof l && null !== l && l.$$typeof === F && bo(l) === s.type) {
                                                    n(r, s.sibling), (o = i(s, a.props)).ref = vo(r, s, a), o.return = r, r = o;
                                                    break e
                                                }
                                                n(r, s);
                                                break
                                            }
                                            t(r, s), s = s.sibling
                                        }
                                        a.type === P ? ((o = Al(a.props.children, r.mode, c, a.key)).return = r, r = o) : ((c = Tl(a.type, a.key, a.props, null, r.mode, c)).ref = vo(r, o, a), c.return = r, r = c)
                                    }
                                    return u(r);
                                case O:
                                    e: {
                                        for (s = a.key; null !== o;) {
                                            if (o.key === s) {
                                                if (4 === o.tag && o.stateNode.containerInfo === a.containerInfo && o.stateNode.implementation === a.implementation) {
                                                    n(r, o.sibling), (o = i(o, a.children || [])).return = r, r = o;
                                                    break e
                                                }
                                                n(r, o);
                                                break
                                            }
                                            t(r, o), o = o.sibling
                                        }(o = Ml(a, r.mode, c)).return = r,
                                        r = o
                                    }
                                    return u(r);
                                case F:
                                    return e(r, o, (s = a._init)(a._payload), c)
                            }
                            if (te(a)) return m(r, o, a, c);
                            if (A(a)) return y(r, o, a, c);
                            go(r, a)
                        }
                        return "string" === typeof a && "" !== a || "number" === typeof a ? (a = "" + a, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = i(o, a)).return = r, r = o) : (n(r, o), (o = Ll(a, r.mode, c)).return = r, r = o), u(r)) : n(r, o)
                    }
                }
                var So = wo(!0),
                    Oo = wo(!1),
                    Po = _i(null),
                    _o = null,
                    jo = null,
                    xo = null;

                function ko() {
                    xo = jo = _o = null
                }

                function Eo(e) {
                    var t = Po.current;
                    ji(Po), e._currentValue = t
                }

                function Ro(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Co(e, t) {
                    _o = e, xo = jo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (bu = !0), e.firstContext = null)
                }

                function Io(e) {
                    var t = e._currentValue;
                    if (xo !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === jo) {
                            if (null === _o) throw Error(o(308));
                            jo = e, _o.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else jo = jo.next = e;
                    return t
                }
                var Fo = null;

                function No(e) {
                    null === Fo ? Fo = [e] : Fo.push(e)
                }

                function To(e, t, n, r) {
                    var i = t.interleaved;
                    return null === i ? (n.next = n, No(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Ao(e, r)
                }

                function Ao(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var Do = !1;

                function Lo(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function Mo(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Uo(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function Vo(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & Ec)) {
                        var i = r.pending;
                        return null === i ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Ao(e, n)
                    }
                    return null === (i = r.interleaved) ? (t.next = t, No(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Ao(e, n)
                }

                function qo(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, gt(e, n)
                    }
                }

                function zo(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var i = null,
                            o = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var a = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === o ? i = o = a : o = o.next = a, n = n.next
                            } while (null !== n);
                            null === o ? i = o = t : o = o.next = t
                        } else i = o = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: i,
                            lastBaseUpdate: o,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function Ho(e, t, n, r) {
                    var i = e.updateQueue;
                    Do = !1;
                    var o = i.firstBaseUpdate,
                        a = i.lastBaseUpdate,
                        u = i.shared.pending;
                    if (null !== u) {
                        i.shared.pending = null;
                        var c = u,
                            l = c.next;
                        c.next = null, null === a ? o = l : a.next = l, a = c;
                        var s = e.alternate;
                        null !== s && ((u = (s = s.updateQueue).lastBaseUpdate) !== a && (null === u ? s.firstBaseUpdate = l : u.next = l, s.lastBaseUpdate = c))
                    }
                    if (null !== o) {
                        var f = i.baseState;
                        for (a = 0, s = l = c = null, u = o;;) {
                            var p = u.lane,
                                d = u.eventTime;
                            if ((r & p) === p) {
                                null !== s && (s = s.next = {
                                    eventTime: d,
                                    lane: 0,
                                    tag: u.tag,
                                    payload: u.payload,
                                    callback: u.callback,
                                    next: null
                                });
                                e: {
                                    var h = e,
                                        m = u;
                                    switch (p = t, d = n, m.tag) {
                                        case 1:
                                            if ("function" === typeof(h = m.payload)) {
                                                f = h.call(d, f, p);
                                                break e
                                            }
                                            f = h;
                                            break e;
                                        case 3:
                                            h.flags = -65537 & h.flags | 128;
                                        case 0:
                                            if (null === (p = "function" === typeof(h = m.payload) ? h.call(d, f, p) : h) || void 0 === p) break e;
                                            f = L({}, f, p);
                                            break e;
                                        case 2:
                                            Do = !0
                                    }
                                }
                                null !== u.callback && 0 !== u.lane && (e.flags |= 64, null === (p = i.effects) ? i.effects = [u] : p.push(u))
                            } else d = {
                                eventTime: d,
                                lane: p,
                                tag: u.tag,
                                payload: u.payload,
                                callback: u.callback,
                                next: null
                            }, null === s ? (l = s = d, c = f) : s = s.next = d, a |= p;
                            if (null === (u = u.next)) {
                                if (null === (u = i.shared.pending)) break;
                                u = (p = u).next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null
                            }
                        }
                        if (null === s && (c = f), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = s, null !== (t = i.shared.interleaved)) {
                            i = t;
                            do {
                                a |= i.lane, i = i.next
                            } while (i !== t)
                        } else null === o && (i.shared.lanes = 0);
                        Dc |= a, e.lanes = a, e.memoizedState = f
                    }
                }

                function Bo(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                i = r.callback;
                            if (null !== i) {
                                if (r.callback = null, r = n, "function" !== typeof i) throw Error(o(191, i));
                                i.call(r)
                            }
                        }
                }
                var Qo = {},
                    Wo = _i(Qo),
                    $o = _i(Qo),
                    Ko = _i(Qo);

                function Jo(e) {
                    if (e === Qo) throw Error(o(174));
                    return e
                }

                function Yo(e, t) {
                    switch (xi(Ko, t), xi($o, e), xi(Wo, Qo), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : ce(null, "");
                            break;
                        default:
                            t = ce(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    ji(Wo), xi(Wo, t)
                }

                function Xo() {
                    ji(Wo), ji($o), ji(Ko)
                }

                function Go(e) {
                    Jo(Ko.current);
                    var t = Jo(Wo.current),
                        n = ce(t, e.type);
                    t !== n && (xi($o, e), xi(Wo, n))
                }

                function Zo(e) {
                    $o.current === e && (ji(Wo), ji($o))
                }
                var ea = _i(0);

                function ta(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var na = [];

                function ra() {
                    for (var e = 0; e < na.length; e++) na[e]._workInProgressVersionPrimary = null;
                    na.length = 0
                }
                var ia = w.ReactCurrentDispatcher,
                    oa = w.ReactCurrentBatchConfig,
                    aa = 0,
                    ua = null,
                    ca = null,
                    la = null,
                    sa = !1,
                    fa = !1,
                    pa = 0,
                    da = 0;

                function ha() {
                    throw Error(o(321))
                }

                function ma(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!ur(e[n], t[n])) return !1;
                    return !0
                }

                function ya(e, t, n, r, i, a) {
                    if (aa = a, ua = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ia.current = null === e || null === e.memoizedState ? Za : eu, e = n(r, i), fa) {
                        a = 0;
                        do {
                            if (fa = !1, pa = 0, 25 <= a) throw Error(o(301));
                            a += 1, la = ca = null, t.updateQueue = null, ia.current = tu, e = n(r, i)
                        } while (fa)
                    }
                    if (ia.current = Ga, t = null !== ca && null !== ca.next, aa = 0, la = ca = ua = null, sa = !1, t) throw Error(o(300));
                    return e
                }

                function va() {
                    var e = 0 !== pa;
                    return pa = 0, e
                }

                function ga() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === la ? ua.memoizedState = la = e : la = la.next = e, la
                }

                function ba() {
                    if (null === ca) {
                        var e = ua.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = ca.next;
                    var t = null === la ? ua.memoizedState : la.next;
                    if (null !== t) la = t, ca = e;
                    else {
                        if (null === e) throw Error(o(310));
                        e = {
                            memoizedState: (ca = e).memoizedState,
                            baseState: ca.baseState,
                            baseQueue: ca.baseQueue,
                            queue: ca.queue,
                            next: null
                        }, null === la ? ua.memoizedState = la = e : la = la.next = e
                    }
                    return la
                }

                function wa(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function Sa(e) {
                    var t = ba(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = ca,
                        i = r.baseQueue,
                        a = n.pending;
                    if (null !== a) {
                        if (null !== i) {
                            var u = i.next;
                            i.next = a.next, a.next = u
                        }
                        r.baseQueue = i = a, n.pending = null
                    }
                    if (null !== i) {
                        a = i.next, r = r.baseState;
                        var c = u = null,
                            l = null,
                            s = a;
                        do {
                            var f = s.lane;
                            if ((aa & f) === f) null !== l && (l = l.next = {
                                lane: 0,
                                action: s.action,
                                hasEagerState: s.hasEagerState,
                                eagerState: s.eagerState,
                                next: null
                            }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
                            else {
                                var p = {
                                    lane: f,
                                    action: s.action,
                                    hasEagerState: s.hasEagerState,
                                    eagerState: s.eagerState,
                                    next: null
                                };
                                null === l ? (c = l = p, u = r) : l = l.next = p, ua.lanes |= f, Dc |= f
                            }
                            s = s.next
                        } while (null !== s && s !== a);
                        null === l ? u = r : l.next = c, ur(r, t.memoizedState) || (bu = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = l, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        i = e;
                        do {
                            a = i.lane, ua.lanes |= a, Dc |= a, i = i.next
                        } while (i !== e)
                    } else null === i && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function Oa(e) {
                    var t = ba(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        i = n.pending,
                        a = t.memoizedState;
                    if (null !== i) {
                        n.pending = null;
                        var u = i = i.next;
                        do {
                            a = e(a, u.action), u = u.next
                        } while (u !== i);
                        ur(a, t.memoizedState) || (bu = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
                    }
                    return [a, r]
                }

                function Pa() {}

                function _a(e, t) {
                    var n = ua,
                        r = ba(),
                        i = t(),
                        a = !ur(r.memoizedState, i);
                    if (a && (r.memoizedState = i, bu = !0), r = r.queue, Da(ka.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || null !== la && 1 & la.memoizedState.tag) {
                        if (n.flags |= 2048, Ia(9, xa.bind(null, n, r, i, t), void 0, null), null === Rc) throw Error(o(349));
                        0 !== (30 & aa) || ja(n, t, i)
                    }
                    return i
                }

                function ja(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = ua.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, ua.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function xa(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Ea(t) && Ra(e)
                }

                function ka(e, t, n) {
                    return n((function() {
                        Ea(t) && Ra(e)
                    }))
                }

                function Ea(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !ur(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function Ra(e) {
                    var t = Ao(e, 1);
                    null !== t && nl(t, e, 1, -1)
                }

                function Ca(e) {
                    var t = ga();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: wa,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = Ka.bind(null, ua, e), [t.memoizedState, e]
                }

                function Ia(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = ua.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, ua.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Fa() {
                    return ba().memoizedState
                }

                function Na(e, t, n, r) {
                    var i = ga();
                    ua.flags |= e, i.memoizedState = Ia(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Ta(e, t, n, r) {
                    var i = ba();
                    r = void 0 === r ? null : r;
                    var o = void 0;
                    if (null !== ca) {
                        var a = ca.memoizedState;
                        if (o = a.destroy, null !== r && ma(r, a.deps)) return void(i.memoizedState = Ia(t, n, o, r))
                    }
                    ua.flags |= e, i.memoizedState = Ia(1 | t, n, o, r)
                }

                function Aa(e, t) {
                    return Na(8390656, 8, e, t)
                }

                function Da(e, t) {
                    return Ta(2048, 8, e, t)
                }

                function La(e, t) {
                    return Ta(4, 2, e, t)
                }

                function Ma(e, t) {
                    return Ta(4, 4, e, t)
                }

                function Ua(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function Va(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ta(4, 4, Ua.bind(null, t, e), n)
                }

                function qa() {}

                function za(e, t) {
                    var n = ba();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ma(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Ha(e, t) {
                    var n = ba();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ma(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Ba(e, t, n) {
                    return 0 === (21 & aa) ? (e.baseState && (e.baseState = !1, bu = !0), e.memoizedState = n) : (ur(n, t) || (n = mt(), ua.lanes |= n, Dc |= n, e.baseState = !0), t)
                }

                function Qa(e, t) {
                    var n = bt;
                    bt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = oa.transition;
                    oa.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        bt = n, oa.transition = r
                    }
                }

                function Wa() {
                    return ba().memoizedState
                }

                function $a(e, t, n) {
                    var r = tl(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, Ja(e)) Ya(t, n);
                    else if (null !== (n = To(e, t, n, r))) {
                        nl(n, e, r, el()), Xa(n, t, r)
                    }
                }

                function Ka(e, t, n) {
                    var r = tl(e),
                        i = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (Ja(e)) Ya(t, i);
                    else {
                        var o = e.alternate;
                        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
                            var a = t.lastRenderedState,
                                u = o(a, n);
                            if (i.hasEagerState = !0, i.eagerState = u, ur(u, a)) {
                                var c = t.interleaved;
                                return null === c ? (i.next = i, No(t)) : (i.next = c.next, c.next = i), void(t.interleaved = i)
                            }
                        } catch (l) {}
                        null !== (n = To(e, t, i, r)) && (nl(n, e, r, i = el()), Xa(n, t, r))
                    }
                }

                function Ja(e) {
                    var t = e.alternate;
                    return e === ua || null !== t && t === ua
                }

                function Ya(e, t) {
                    fa = sa = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function Xa(e, t, n) {
                    if (0 !== (4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, gt(e, n)
                    }
                }
                var Ga = {
                        readContext: Io,
                        useCallback: ha,
                        useContext: ha,
                        useEffect: ha,
                        useImperativeHandle: ha,
                        useInsertionEffect: ha,
                        useLayoutEffect: ha,
                        useMemo: ha,
                        useReducer: ha,
                        useRef: ha,
                        useState: ha,
                        useDebugValue: ha,
                        useDeferredValue: ha,
                        useTransition: ha,
                        useMutableSource: ha,
                        useSyncExternalStore: ha,
                        useId: ha,
                        unstable_isNewReconciler: !1
                    },
                    Za = {
                        readContext: Io,
                        useCallback: function(e, t) {
                            return ga().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Io,
                        useEffect: Aa,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, Na(4194308, 4, Ua.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return Na(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return Na(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = ga();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = ga();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = $a.bind(null, ua, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, ga().memoizedState = e
                        },
                        useState: Ca,
                        useDebugValue: qa,
                        useDeferredValue: function(e) {
                            return ga().memoizedState = e
                        },
                        useTransition: function() {
                            var e = Ca(!1),
                                t = e[0];
                            return e = Qa.bind(null, e[1]), ga().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = ua,
                                i = ga();
                            if (io) {
                                if (void 0 === n) throw Error(o(407));
                                n = n()
                            } else {
                                if (n = t(), null === Rc) throw Error(o(349));
                                0 !== (30 & aa) || ja(r, t, n)
                            }
                            i.memoizedState = n;
                            var a = {
                                value: n,
                                getSnapshot: t
                            };
                            return i.queue = a, Aa(ka.bind(null, r, a, e), [e]), r.flags |= 2048, Ia(9, xa.bind(null, r, a, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = ga(),
                                t = Rc.identifierPrefix;
                            if (io) {
                                var n = Xi;
                                t = ":" + t + "R" + (n = (Yi & ~(1 << 32 - at(Yi) - 1)).toString(32) + n), 0 < (n = pa++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = da++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    eu = {
                        readContext: Io,
                        useCallback: za,
                        useContext: Io,
                        useEffect: Da,
                        useImperativeHandle: Va,
                        useInsertionEffect: La,
                        useLayoutEffect: Ma,
                        useMemo: Ha,
                        useReducer: Sa,
                        useRef: Fa,
                        useState: function() {
                            return Sa(wa)
                        },
                        useDebugValue: qa,
                        useDeferredValue: function(e) {
                            return Ba(ba(), ca.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Sa(wa)[0], ba().memoizedState]
                        },
                        useMutableSource: Pa,
                        useSyncExternalStore: _a,
                        useId: Wa,
                        unstable_isNewReconciler: !1
                    },
                    tu = {
                        readContext: Io,
                        useCallback: za,
                        useContext: Io,
                        useEffect: Da,
                        useImperativeHandle: Va,
                        useInsertionEffect: La,
                        useLayoutEffect: Ma,
                        useMemo: Ha,
                        useReducer: Oa,
                        useRef: Fa,
                        useState: function() {
                            return Oa(wa)
                        },
                        useDebugValue: qa,
                        useDeferredValue: function(e) {
                            var t = ba();
                            return null === ca ? t.memoizedState = e : Ba(t, ca.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Oa(wa)[0], ba().memoizedState]
                        },
                        useMutableSource: Pa,
                        useSyncExternalStore: _a,
                        useId: Wa,
                        unstable_isNewReconciler: !1
                    };

                function nu(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = L({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }

                function ru(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : L({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var iu = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && ze(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = el(),
                            i = tl(e),
                            o = Uo(r, i);
                        o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Vo(e, o, i)) && (nl(t, e, i, r), qo(t, e, i))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = el(),
                            i = tl(e),
                            o = Uo(r, i);
                        o.tag = 1, o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Vo(e, o, i)) && (nl(t, e, i, r), qo(t, e, i))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = el(),
                            r = tl(e),
                            i = Uo(n, r);
                        i.tag = 2, void 0 !== t && null !== t && (i.callback = t), null !== (t = Vo(e, i, r)) && (nl(t, e, r, n), qo(t, e, r))
                    }
                };

                function ou(e, t, n, r, i, o, a) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !t.prototype || !t.prototype.isPureReactComponent || (!cr(n, r) || !cr(i, o))
                }

                function au(e, t, n) {
                    var r = !1,
                        i = ki,
                        o = t.contextType;
                    return "object" === typeof o && null !== o ? o = Io(o) : (i = Fi(t) ? Ci : Ei.current, o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Ii(e, i) : ki), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = iu, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
                }

                function uu(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && iu.enqueueReplaceState(t, t.state, null)
                }

                function cu(e, t, n, r) {
                    var i = e.stateNode;
                    i.props = n, i.state = e.memoizedState, i.refs = {}, Lo(e);
                    var o = t.contextType;
                    "object" === typeof o && null !== o ? i.context = Io(o) : (o = Fi(t) ? Ci : Ei.current, i.context = Ii(e, o)), i.state = e.memoizedState, "function" === typeof(o = t.getDerivedStateFromProps) && (ru(e, t, o, n), i.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (t = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && iu.enqueueReplaceState(i, i.state, null), Ho(e, n, i, r), i.state = e.memoizedState), "function" === typeof i.componentDidMount && (e.flags |= 4194308)
                }

                function lu(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += q(r), r = r.return
                        } while (r);
                        var i = n
                    } catch (o) {
                        i = "\nError generating stack: " + o.message + "\n" + o.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: i,
                        digest: null
                    }
                }

                function su(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function fu(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                var pu = "function" === typeof WeakMap ? WeakMap : Map;

                function du(e, t, n) {
                    (n = Uo(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        Bc || (Bc = !0, Qc = r), fu(0, t)
                    }, n
                }

                function hu(e, t, n) {
                    (n = Uo(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var i = t.value;
                        n.payload = function() {
                            return r(i)
                        }, n.callback = function() {
                            fu(0, t)
                        }
                    }
                    var o = e.stateNode;
                    return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() {
                        fu(0, t), "function" !== typeof r && (null === Wc ? Wc = new Set([this]) : Wc.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function mu(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new pu;
                        var i = new Set;
                        r.set(t, i)
                    } else void 0 === (i = r.get(t)) && (i = new Set, r.set(t, i));
                    i.has(n) || (i.add(n), e = jl.bind(null, e, t, n), t.then(e, e))
                }

                function yu(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function vu(e, t, n, r, i) {
                    return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Uo(-1, 1)).tag = 2, Vo(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
                }
                var gu = w.ReactCurrentOwner,
                    bu = !1;

                function wu(e, t, n, r) {
                    t.child = null === e ? Oo(t, null, n, r) : So(t, e.child, n, r)
                }

                function Su(e, t, n, r, i) {
                    n = n.render;
                    var o = t.ref;
                    return Co(t, i), r = ya(e, t, n, r, o, i), n = va(), null === e || bu ? (io && n && eo(t), t.flags |= 1, wu(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Bu(e, t, i))
                }

                function Ou(e, t, n, r, i) {
                    if (null === e) {
                        var o = n.type;
                        return "function" !== typeof o || Fl(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Tl(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Pu(e, t, o, r, i))
                    }
                    if (o = e.child, 0 === (e.lanes & i)) {
                        var a = o.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : cr)(a, r) && e.ref === t.ref) return Bu(e, t, i)
                    }
                    return t.flags |= 1, (e = Nl(o, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Pu(e, t, n, r, i) {
                    if (null !== e) {
                        var o = e.memoizedProps;
                        if (cr(o, r) && e.ref === t.ref) {
                            if (bu = !1, t.pendingProps = r = o, 0 === (e.lanes & i)) return t.lanes = e.lanes, Bu(e, t, i);
                            0 !== (131072 & e.flags) && (bu = !0)
                        }
                    }
                    return xu(e, t, n, r, i)
                }

                function _u(e, t, n) {
                    var r = t.pendingProps,
                        i = r.children,
                        o = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, xi(Nc, Fc), Fc |= n;
                        else {
                            if (0 === (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, xi(Nc, Fc), Fc |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== o ? o.baseLanes : n, xi(Nc, Fc), Fc |= r
                        }
                    else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, xi(Nc, Fc), Fc |= r;
                    return wu(e, t, i, n), t.child
                }

                function ju(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function xu(e, t, n, r, i) {
                    var o = Fi(n) ? Ci : Ei.current;
                    return o = Ii(t, o), Co(t, i), n = ya(e, t, n, r, o, i), r = va(), null === e || bu ? (io && r && eo(t), t.flags |= 1, wu(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Bu(e, t, i))
                }

                function ku(e, t, n, r, i) {
                    if (Fi(n)) {
                        var o = !0;
                        Di(t)
                    } else o = !1;
                    if (Co(t, i), null === t.stateNode) Hu(e, t), au(t, n, r), cu(t, n, r, i), r = !0;
                    else if (null === e) {
                        var a = t.stateNode,
                            u = t.memoizedProps;
                        a.props = u;
                        var c = a.context,
                            l = n.contextType;
                        "object" === typeof l && null !== l ? l = Io(l) : l = Ii(t, l = Fi(n) ? Ci : Ei.current);
                        var s = n.getDerivedStateFromProps,
                            f = "function" === typeof s || "function" === typeof a.getSnapshotBeforeUpdate;
                        f || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (u !== r || c !== l) && uu(t, a, r, l), Do = !1;
                        var p = t.memoizedState;
                        a.state = p, Ho(t, r, a, i), c = t.memoizedState, u !== r || p !== c || Ri.current || Do ? ("function" === typeof s && (ru(t, n, s, r), c = t.memoizedState), (u = Do || ou(t, n, u, r, p, c, l)) ? (f || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" === typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), a.props = r, a.state = c, a.context = l, r = u) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        a = t.stateNode, Mo(e, t), u = t.memoizedProps, l = t.type === t.elementType ? u : nu(t.type, u), a.props = l, f = t.pendingProps, p = a.context, "object" === typeof(c = n.contextType) && null !== c ? c = Io(c) : c = Ii(t, c = Fi(n) ? Ci : Ei.current);
                        var d = n.getDerivedStateFromProps;
                        (s = "function" === typeof d || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (u !== f || p !== c) && uu(t, a, r, c), Do = !1, p = t.memoizedState, a.state = p, Ho(t, r, a, i);
                        var h = t.memoizedState;
                        u !== f || p !== h || Ri.current || Do ? ("function" === typeof d && (ru(t, n, d, r), h = t.memoizedState), (l = Do || ou(t, n, l, r, p, h, c) || !1) ? (s || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, h, c), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, c)), "function" === typeof a.componentDidUpdate && (t.flags |= 4), "function" === typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof a.componentDidUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), a.props = r, a.state = h, a.context = c, r = l) : ("function" !== typeof a.componentDidUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return Eu(e, t, n, r, o, i)
                }

                function Eu(e, t, n, r, i, o) {
                    ju(e, t);
                    var a = 0 !== (128 & t.flags);
                    if (!r && !a) return i && Li(t, n, !1), Bu(e, t, o);
                    r = t.stateNode, gu.current = t;
                    var u = a && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && a ? (t.child = So(t, e.child, null, o), t.child = So(t, null, u, o)) : wu(e, t, u, o), t.memoizedState = r.state, i && Li(t, n, !0), t.child
                }

                function Ru(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Ti(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ti(0, t.context, !1), Yo(e, t.containerInfo)
                }

                function Cu(e, t, n, r, i) {
                    return ho(), mo(i), t.flags |= 256, wu(e, t, n, r), t.child
                }
                var Iu, Fu, Nu, Tu, Au = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function Du(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function Lu(e, t, n) {
                    var r, i = t.pendingProps,
                        a = ea.current,
                        u = !1,
                        c = 0 !== (128 & t.flags);
                    if ((r = c) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)), r ? (u = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (a |= 1), xi(ea, 1 & a), null === e) return lo(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (c = i.children, e = i.fallback, u ? (i = t.mode, u = t.child, c = {
                        mode: "hidden",
                        children: c
                    }, 0 === (1 & i) && null !== u ? (u.childLanes = 0, u.pendingProps = c) : u = Dl(c, i, 0, null), e = Al(e, i, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Du(n), t.memoizedState = Au, e) : Mu(t, c));
                    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated)) return function(e, t, n, r, i, a, u) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Uu(e, t, u, r = su(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = Dl({
                            mode: "visible",
                            children: r.children
                        }, i, 0, null), (a = Al(a, i, u, null)).flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, 0 !== (1 & t.mode) && So(t, e.child, null, u), t.child.memoizedState = Du(u), t.memoizedState = Au, a);
                        if (0 === (1 & t.mode)) return Uu(e, t, u, null);
                        if ("$!" === i.data) {
                            if (r = i.nextSibling && i.nextSibling.dataset) var c = r.dgst;
                            return r = c, Uu(e, t, u, r = su(a = Error(o(419)), r, void 0))
                        }
                        if (c = 0 !== (u & e.childLanes), bu || c) {
                            if (null !== (r = Rc)) {
                                switch (u & -u) {
                                    case 4:
                                        i = 2;
                                        break;
                                    case 16:
                                        i = 8;
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
                                        i = 32;
                                        break;
                                    case 536870912:
                                        i = 268435456;
                                        break;
                                    default:
                                        i = 0
                                }
                                0 !== (i = 0 !== (i & (r.suspendedLanes | u)) ? 0 : i) && i !== a.retryLane && (a.retryLane = i, Ao(e, i), nl(r, e, i, -1))
                            }
                            return ml(), Uu(e, t, u, r = su(Error(o(421))))
                        }
                        return "$?" === i.data ? (t.flags |= 128, t.child = e.child, t = kl.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, ro = li(i.nextSibling), no = t, io = !0, oo = null, null !== e && ($i[Ki++] = Yi, $i[Ki++] = Xi, $i[Ki++] = Ji, Yi = e.id, Xi = e.overflow, Ji = t), t = Mu(t, r.children), t.flags |= 4096, t)
                    }(e, t, c, i, r, a, n);
                    if (u) {
                        u = i.fallback, c = t.mode, r = (a = e.child).sibling;
                        var l = {
                            mode: "hidden",
                            children: i.children
                        };
                        return 0 === (1 & c) && t.child !== a ? ((i = t.child).childLanes = 0, i.pendingProps = l, t.deletions = null) : (i = Nl(a, l)).subtreeFlags = 14680064 & a.subtreeFlags, null !== r ? u = Nl(r, u) : (u = Al(u, c, n, null)).flags |= 2, u.return = t, i.return = t, i.sibling = u, t.child = i, i = u, u = t.child, c = null === (c = e.child.memoizedState) ? Du(n) : {
                            baseLanes: c.baseLanes | n,
                            cachePool: null,
                            transitions: c.transitions
                        }, u.memoizedState = c, u.childLanes = e.childLanes & ~n, t.memoizedState = Au, i
                    }
                    return e = (u = e.child).sibling, i = Nl(u, {
                        mode: "visible",
                        children: i.children
                    }), 0 === (1 & t.mode) && (i.lanes = n), i.return = t, i.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i
                }

                function Mu(e, t) {
                    return (t = Dl({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function Uu(e, t, n, r) {
                    return null !== r && mo(r), So(t, e.child, null, n), (e = Mu(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function Vu(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), Ro(e.return, t, n)
                }

                function qu(e, t, n, r, i) {
                    var o = e.memoizedState;
                    null === o ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: i
                    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
                }

                function zu(e, t, n) {
                    var r = t.pendingProps,
                        i = r.revealOrder,
                        o = r.tail;
                    if (wu(e, t, r.children, n), 0 !== (2 & (r = ea.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Vu(e, n, t);
                            else if (19 === e.tag) Vu(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (xi(ea, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (i) {
                        case "forwards":
                            for (n = t.child, i = null; null !== n;) null !== (e = n.alternate) && null === ta(e) && (i = n), n = n.sibling;
                            null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), qu(t, !1, i, n, o);
                            break;
                        case "backwards":
                            for (n = null, i = t.child, t.child = null; null !== i;) {
                                if (null !== (e = i.alternate) && null === ta(e)) {
                                    t.child = i;
                                    break
                                }
                                e = i.sibling, i.sibling = n, n = i, i = e
                            }
                            qu(t, !0, n, null, o);
                            break;
                        case "together":
                            qu(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Hu(e, t) {
                    0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function Bu(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Dc |= t.lanes, 0 === (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(o(153));
                    if (null !== t.child) {
                        for (n = Nl(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Nl(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Qu(e, t) {
                    if (!io) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function Wu(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling;
                    else
                        for (i = e.child; null !== i;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function $u(e, t, n) {
                    var r = t.pendingProps;
                    switch (to(t), t.tag) {
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
                            return Wu(t), null;
                        case 1:
                        case 17:
                            return Fi(t.type) && Ni(), Wu(t), null;
                        case 3:
                            return r = t.stateNode, Xo(), ji(Ri), ji(Ei), ra(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== oo && (al(oo), oo = null))), Fu(e, t), Wu(t), null;
                        case 5:
                            Zo(t);
                            var i = Jo(Ko.current);
                            if (n = t.type, null !== e && null != t.stateNode) Nu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return Wu(t), null
                                }
                                if (e = Jo(Wo.current), fo(t)) {
                                    r = t.stateNode, n = t.type;
                                    var a = t.memoizedProps;
                                    switch (r[pi] = t, r[di] = a, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            Ur("cancel", r), Ur("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Ur("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (i = 0; i < Ar.length; i++) Ur(Ar[i], r);
                                            break;
                                        case "source":
                                            Ur("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Ur("error", r), Ur("load", r);
                                            break;
                                        case "details":
                                            Ur("toggle", r);
                                            break;
                                        case "input":
                                            Y(r, a), Ur("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!a.multiple
                                            }, Ur("invalid", r);
                                            break;
                                        case "textarea":
                                            ie(r, a), Ur("invalid", r)
                                    }
                                    for (var c in ge(n, a), i = null, a)
                                        if (a.hasOwnProperty(c)) {
                                            var l = a[c];
                                            "children" === c ? "string" === typeof l ? r.textContent !== l && (!0 !== a.suppressHydrationWarning && Gr(r.textContent, l, e), i = ["children", l]) : "number" === typeof l && r.textContent !== "" + l && (!0 !== a.suppressHydrationWarning && Gr(r.textContent, l, e), i = ["children", "" + l]) : u.hasOwnProperty(c) && null != l && "onScroll" === c && Ur("scroll", r)
                                        }
                                    switch (n) {
                                        case "input":
                                            W(r), Z(r, a, !0);
                                            break;
                                        case "textarea":
                                            W(r), ae(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof a.onClick && (r.onclick = Zr)
                                    }
                                    r = i, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    c = 9 === i.nodeType ? i : i.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ue(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = c.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = c.createElement(n, {
                                        is: r.is
                                    }) : (e = c.createElement(n), "select" === n && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[pi] = t, e[di] = r, Iu(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (c = be(n, r), n) {
                                            case "dialog":
                                                Ur("cancel", e), Ur("close", e), i = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Ur("load", e), i = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (i = 0; i < Ar.length; i++) Ur(Ar[i], e);
                                                i = r;
                                                break;
                                            case "source":
                                                Ur("error", e), i = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Ur("error", e), Ur("load", e), i = r;
                                                break;
                                            case "details":
                                                Ur("toggle", e), i = r;
                                                break;
                                            case "input":
                                                Y(e, r), i = J(e, r), Ur("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                i = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, i = L({}, r, {
                                                    value: void 0
                                                }), Ur("invalid", e);
                                                break;
                                            case "textarea":
                                                ie(e, r), i = re(e, r), Ur("invalid", e)
                                        }
                                        for (a in ge(n, i), l = i)
                                            if (l.hasOwnProperty(a)) {
                                                var s = l[a];
                                                "style" === a ? ye(e, s) : "dangerouslySetInnerHTML" === a ? null != (s = s ? s.__html : void 0) && fe(e, s) : "children" === a ? "string" === typeof s ? ("textarea" !== n || "" !== s) && pe(e, s) : "number" === typeof s && pe(e, "" + s) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (u.hasOwnProperty(a) ? null != s && "onScroll" === a && Ur("scroll", e) : null != s && b(e, a, s, c))
                                            }
                                        switch (n) {
                                            case "input":
                                                W(e), Z(e, r, !1);
                                                break;
                                            case "textarea":
                                                W(e), ae(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + B(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (a = r.value) ? ne(e, !!r.multiple, a, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof i.onClick && (e.onclick = Zr)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return Wu(t), null;
                        case 6:
                            if (e && null != t.stateNode) Tu(e, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
                                if (n = Jo(Ko.current), Jo(Wo.current), fo(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[pi] = t, (a = r.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
                                        case 3:
                                            Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Gr(r.nodeValue, n, 0 !== (1 & e.mode))
                                    }
                                    a && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[pi] = t, t.stateNode = r
                            }
                            return Wu(t), null;
                        case 13:
                            if (ji(ea), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (io && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) po(), ho(), t.flags |= 98560, a = !1;
                                else if (a = fo(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!a) throw Error(o(318));
                                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(o(317));
                                        a[pi] = t
                                    } else ho(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Wu(t), a = !1
                                } else null !== oo && (al(oo), oo = null), a = !0;
                                if (!a) return 65536 & t.flags ? t : null
                            }
                            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & ea.current) ? 0 === Tc && (Tc = 3) : ml())), null !== t.updateQueue && (t.flags |= 4), Wu(t), null);
                        case 4:
                            return Xo(), Fu(e, t), null === e && zr(t.stateNode.containerInfo), Wu(t), null;
                        case 10:
                            return Eo(t.type._context), Wu(t), null;
                        case 19:
                            if (ji(ea), null === (a = t.memoizedState)) return Wu(t), null;
                            if (r = 0 !== (128 & t.flags), null === (c = a.rendering))
                                if (r) Qu(a, !1);
                                else {
                                    if (0 !== Tc || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (c = ta(e))) {
                                                for (t.flags |= 128, Qu(a, !1), null !== (r = c.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (a = n).flags &= 14680066, null === (c = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = c.childLanes, a.lanes = c.lanes, a.child = c.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = c.memoizedProps, a.memoizedState = c.memoizedState, a.updateQueue = c.updateQueue, a.type = c.type, e = c.dependencies, a.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return xi(ea, 1 & ea.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== a.tail && Xe() > zc && (t.flags |= 128, r = !0, Qu(a, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = ta(c))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Qu(a, !0), null === a.tail && "hidden" === a.tailMode && !c.alternate && !io) return Wu(t), null
                                    } else 2 * Xe() - a.renderingStartTime > zc && 1073741824 !== n && (t.flags |= 128, r = !0, Qu(a, !1), t.lanes = 4194304);
                                a.isBackwards ? (c.sibling = t.child, t.child = c) : (null !== (n = a.last) ? n.sibling = c : t.child = c, a.last = c)
                            }
                            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Xe(), t.sibling = null, n = ea.current, xi(ea, r ? 1 & n | 2 : 1 & n), t) : (Wu(t), null);
                        case 22:
                        case 23:
                            return fl(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Fc) && (Wu(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Wu(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(o(156, t.tag))
                }

                function Ku(e, t) {
                    switch (to(t), t.tag) {
                        case 1:
                            return Fi(t.type) && Ni(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return Xo(), ji(Ri), ji(Ei), ra(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return Zo(t), null;
                        case 13:
                            if (ji(ea), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(o(340));
                                ho()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return ji(ea), null;
                        case 4:
                            return Xo(), null;
                        case 10:
                            return Eo(t.type._context), null;
                        case 22:
                        case 23:
                            return fl(), null;
                        default:
                            return null
                    }
                }
                Iu = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Fu = function() {}, Nu = function(e, t, n, r) {
                    var i = e.memoizedProps;
                    if (i !== r) {
                        e = t.stateNode, Jo(Wo.current);
                        var o, a = null;
                        switch (n) {
                            case "input":
                                i = J(e, i), r = J(e, r), a = [];
                                break;
                            case "select":
                                i = L({}, i, {
                                    value: void 0
                                }), r = L({}, r, {
                                    value: void 0
                                }), a = [];
                                break;
                            case "textarea":
                                i = re(e, i), r = re(e, r), a = [];
                                break;
                            default:
                                "function" !== typeof i.onClick && "function" === typeof r.onClick && (e.onclick = Zr)
                        }
                        for (s in ge(n, r), n = null, i)
                            if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && null != i[s])
                                if ("style" === s) {
                                    var c = i[s];
                                    for (o in c) c.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                                } else "dangerouslySetInnerHTML" !== s && "children" !== s && "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (u.hasOwnProperty(s) ? a || (a = []) : (a = a || []).push(s, null));
                        for (s in r) {
                            var l = r[s];
                            if (c = null != i ? i[s] : void 0, r.hasOwnProperty(s) && l !== c && (null != l || null != c))
                                if ("style" === s)
                                    if (c) {
                                        for (o in c) !c.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                                        for (o in l) l.hasOwnProperty(o) && c[o] !== l[o] && (n || (n = {}), n[o] = l[o])
                                    } else n || (a || (a = []), a.push(s, n)), n = l;
                            else "dangerouslySetInnerHTML" === s ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, null != l && c !== l && (a = a || []).push(s, l)) : "children" === s ? "string" !== typeof l && "number" !== typeof l || (a = a || []).push(s, "" + l) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && (u.hasOwnProperty(s) ? (null != l && "onScroll" === s && Ur("scroll", e), a || c === l || (a = [])) : (a = a || []).push(s, l))
                        }
                        n && (a = a || []).push("style", n);
                        var s = a;
                        (t.updateQueue = s) && (t.flags |= 4)
                    }
                }, Tu = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Ju = !1,
                    Yu = !1,
                    Xu = "function" === typeof WeakSet ? WeakSet : Set,
                    Gu = null;

                function Zu(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n) try {
                            n(null)
                        } catch (r) {
                            _l(e, t, r)
                        } else n.current = null
                }

                function ec(e, t, n) {
                    try {
                        n()
                    } catch (r) {
                        _l(e, t, r)
                    }
                }
                var tc = !1;

                function nc(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var i = r = r.next;
                        do {
                            if ((i.tag & e) === e) {
                                var o = i.destroy;
                                i.destroy = void 0, void 0 !== o && ec(t, n, o)
                            }
                            i = i.next
                        } while (i !== r)
                    }
                }

                function rc(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function ic(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                    }
                }

                function oc(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, oc(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[pi], delete t[di], delete t[mi], delete t[yi], delete t[vi])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function ac(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function uc(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || ac(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function cc(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Zr));
                    else if (4 !== r && null !== (e = e.child))
                        for (cc(e, t, n), e = e.sibling; null !== e;) cc(e, t, n), e = e.sibling
                }

                function lc(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (lc(e, t, n), e = e.sibling; null !== e;) lc(e, t, n), e = e.sibling
                }
                var sc = null,
                    fc = !1;

                function pc(e, t, n) {
                    for (n = n.child; null !== n;) dc(e, t, n), n = n.sibling
                }

                function dc(e, t, n) {
                    if (ot && "function" === typeof ot.onCommitFiberUnmount) try {
                        ot.onCommitFiberUnmount(it, n)
                    } catch (u) {}
                    switch (n.tag) {
                        case 5:
                            Yu || Zu(n, t);
                        case 6:
                            var r = sc,
                                i = fc;
                            sc = null, pc(e, t, n), fc = i, null !== (sc = r) && (fc ? (e = sc, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : sc.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== sc && (fc ? (e = sc, n = n.stateNode, 8 === e.nodeType ? ci(e.parentNode, n) : 1 === e.nodeType && ci(e, n), zt(e)) : ci(sc, n.stateNode));
                            break;
                        case 4:
                            r = sc, i = fc, sc = n.stateNode.containerInfo, fc = !0, pc(e, t, n), sc = r, fc = i;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Yu && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                i = r = r.next;
                                do {
                                    var o = i,
                                        a = o.destroy;
                                    o = o.tag, void 0 !== a && (0 !== (2 & o) || 0 !== (4 & o)) && ec(n, t, a), i = i.next
                                } while (i !== r)
                            }
                            pc(e, t, n);
                            break;
                        case 1:
                            if (!Yu && (Zu(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (u) {
                                _l(n, t, u)
                            }
                            pc(e, t, n);
                            break;
                        case 21:
                            pc(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Yu = (r = Yu) || null !== n.memoizedState, pc(e, t, n), Yu = r) : pc(e, t, n);
                            break;
                        default:
                            pc(e, t, n)
                    }
                }

                function hc(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Xu), t.forEach((function(t) {
                            var r = El.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function mc(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r];
                            try {
                                var a = e,
                                    u = t,
                                    c = u;
                                e: for (; null !== c;) {
                                    switch (c.tag) {
                                        case 5:
                                            sc = c.stateNode, fc = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            sc = c.stateNode.containerInfo, fc = !0;
                                            break e
                                    }
                                    c = c.return
                                }
                                if (null === sc) throw Error(o(160));
                                dc(a, u, i), sc = null, fc = !1;
                                var l = i.alternate;
                                null !== l && (l.return = null), i.return = null
                            } catch (s) {
                                _l(i, t, s)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) yc(t, e), t = t.sibling
                }

                function yc(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (mc(t, e), vc(e), 4 & r) {
                                try {
                                    nc(3, e, e.return), rc(3, e)
                                } catch (y) {
                                    _l(e, e.return, y)
                                }
                                try {
                                    nc(5, e, e.return)
                                } catch (y) {
                                    _l(e, e.return, y)
                                }
                            }
                            break;
                        case 1:
                            mc(t, e), vc(e), 512 & r && null !== n && Zu(n, n.return);
                            break;
                        case 5:
                            if (mc(t, e), vc(e), 512 & r && null !== n && Zu(n, n.return), 32 & e.flags) {
                                var i = e.stateNode;
                                try {
                                    pe(i, "")
                                } catch (y) {
                                    _l(e, e.return, y)
                                }
                            }
                            if (4 & r && null != (i = e.stateNode)) {
                                var a = e.memoizedProps,
                                    u = null !== n ? n.memoizedProps : a,
                                    c = e.type,
                                    l = e.updateQueue;
                                if (e.updateQueue = null, null !== l) try {
                                    "input" === c && "radio" === a.type && null != a.name && X(i, a), be(c, u);
                                    var s = be(c, a);
                                    for (u = 0; u < l.length; u += 2) {
                                        var f = l[u],
                                            p = l[u + 1];
                                        "style" === f ? ye(i, p) : "dangerouslySetInnerHTML" === f ? fe(i, p) : "children" === f ? pe(i, p) : b(i, f, p, s)
                                    }
                                    switch (c) {
                                        case "input":
                                            G(i, a);
                                            break;
                                        case "textarea":
                                            oe(i, a);
                                            break;
                                        case "select":
                                            var d = i._wrapperState.wasMultiple;
                                            i._wrapperState.wasMultiple = !!a.multiple;
                                            var h = a.value;
                                            null != h ? ne(i, !!a.multiple, h, !1) : d !== !!a.multiple && (null != a.defaultValue ? ne(i, !!a.multiple, a.defaultValue, !0) : ne(i, !!a.multiple, a.multiple ? [] : "", !1))
                                    }
                                    i[di] = a
                                } catch (y) {
                                    _l(e, e.return, y)
                                }
                            }
                            break;
                        case 6:
                            if (mc(t, e), vc(e), 4 & r) {
                                if (null === e.stateNode) throw Error(o(162));
                                i = e.stateNode, a = e.memoizedProps;
                                try {
                                    i.nodeValue = a
                                } catch (y) {
                                    _l(e, e.return, y)
                                }
                            }
                            break;
                        case 3:
                            if (mc(t, e), vc(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                zt(t.containerInfo)
                            } catch (y) {
                                _l(e, e.return, y)
                            }
                            break;
                        case 4:
                        default:
                            mc(t, e), vc(e);
                            break;
                        case 13:
                            mc(t, e), vc(e), 8192 & (i = e.child).flags && (a = null !== i.memoizedState, i.stateNode.isHidden = a, !a || null !== i.alternate && null !== i.alternate.memoizedState || (qc = Xe())), 4 & r && hc(e);
                            break;
                        case 22:
                            if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Yu = (s = Yu) || f, mc(t, e), Yu = s) : mc(t, e), vc(e), 8192 & r) {
                                if (s = null !== e.memoizedState, (e.stateNode.isHidden = s) && !f && 0 !== (1 & e.mode))
                                    for (Gu = e, f = e.child; null !== f;) {
                                        for (p = Gu = f; null !== Gu;) {
                                            switch (h = (d = Gu).child, d.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    nc(4, d, d.return);
                                                    break;
                                                case 1:
                                                    Zu(d, d.return);
                                                    var m = d.stateNode;
                                                    if ("function" === typeof m.componentWillUnmount) {
                                                        r = d, n = d.return;
                                                        try {
                                                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                                        } catch (y) {
                                                            _l(r, n, y)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    Zu(d, d.return);
                                                    break;
                                                case 22:
                                                    if (null !== d.memoizedState) {
                                                        Sc(p);
                                                        continue
                                                    }
                                            }
                                            null !== h ? (h.return = d, Gu = h) : Sc(p)
                                        }
                                        f = f.sibling
                                    }
                                e: for (f = null, p = e;;) {
                                    if (5 === p.tag) {
                                        if (null === f) {
                                            f = p;
                                            try {
                                                i = p.stateNode, s ? "function" === typeof(a = i.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (c = p.stateNode, u = void 0 !== (l = p.memoizedProps.style) && null !== l && l.hasOwnProperty("display") ? l.display : null, c.style.display = me("display", u))
                                            } catch (y) {
                                                _l(e, e.return, y)
                                            }
                                        }
                                    } else if (6 === p.tag) {
                                        if (null === f) try {
                                            p.stateNode.nodeValue = s ? "" : p.memoizedProps
                                        } catch (y) {
                                            _l(e, e.return, y)
                                        }
                                    } else if ((22 !== p.tag && 23 !== p.tag || null === p.memoizedState || p === e) && null !== p.child) {
                                        p.child.return = p, p = p.child;
                                        continue
                                    }
                                    if (p === e) break e;
                                    for (; null === p.sibling;) {
                                        if (null === p.return || p.return === e) break e;
                                        f === p && (f = null), p = p.return
                                    }
                                    f === p && (f = null), p.sibling.return = p.return, p = p.sibling
                                }
                            }
                            break;
                        case 19:
                            mc(t, e), vc(e), 4 & r && hc(e);
                        case 21:
                    }
                }

                function vc(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (ac(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(o(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var i = r.stateNode;
                                    32 & r.flags && (pe(i, ""), r.flags &= -33), lc(e, uc(e), i);
                                    break;
                                case 3:
                                case 4:
                                    var a = r.stateNode.containerInfo;
                                    cc(e, uc(e), a);
                                    break;
                                default:
                                    throw Error(o(161))
                            }
                        }
                        catch (u) {
                            _l(e, e.return, u)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function gc(e, t, n) {
                    Gu = e, bc(e, t, n)
                }

                function bc(e, t, n) {
                    for (var r = 0 !== (1 & e.mode); null !== Gu;) {
                        var i = Gu,
                            o = i.child;
                        if (22 === i.tag && r) {
                            var a = null !== i.memoizedState || Ju;
                            if (!a) {
                                var u = i.alternate,
                                    c = null !== u && null !== u.memoizedState || Yu;
                                u = Ju;
                                var l = Yu;
                                if (Ju = a, (Yu = c) && !l)
                                    for (Gu = i; null !== Gu;) c = (a = Gu).child, 22 === a.tag && null !== a.memoizedState ? Oc(i) : null !== c ? (c.return = a, Gu = c) : Oc(i);
                                for (; null !== o;) Gu = o, bc(o, t, n), o = o.sibling;
                                Gu = i, Ju = u, Yu = l
                            }
                            wc(e)
                        } else 0 !== (8772 & i.subtreeFlags) && null !== o ? (o.return = i, Gu = o) : wc(e)
                    }
                }

                function wc(e) {
                    for (; null !== Gu;) {
                        var t = Gu;
                        if (0 !== (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Yu || rc(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Yu)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var i = t.elementType === t.type ? n.memoizedProps : nu(t.type, n.memoizedProps);
                                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        var a = t.updateQueue;
                                        null !== a && Bo(t, a, r);
                                        break;
                                    case 3:
                                        var u = t.updateQueue;
                                        if (null !== u) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            Bo(t, u, n)
                                        }
                                        break;
                                    case 5:
                                        var c = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = c;
                                            var l = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    l.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    l.src && (n.src = l.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var s = t.alternate;
                                            if (null !== s) {
                                                var f = s.memoizedState;
                                                if (null !== f) {
                                                    var p = f.dehydrated;
                                                    null !== p && zt(p)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(o(163))
                                }
                                Yu || 512 & t.flags && ic(t)
                            } catch (d) {
                                _l(t, t.return, d)
                            }
                        }
                        if (t === e) {
                            Gu = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, Gu = n;
                            break
                        }
                        Gu = t.return
                    }
                }

                function Sc(e) {
                    for (; null !== Gu;) {
                        var t = Gu;
                        if (t === e) {
                            Gu = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, Gu = n;
                            break
                        }
                        Gu = t.return
                    }
                }

                function Oc(e) {
                    for (; null !== Gu;) {
                        var t = Gu;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        rc(4, t)
                                    } catch (c) {
                                        _l(t, n, c)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" === typeof r.componentDidMount) {
                                        var i = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (c) {
                                            _l(t, i, c)
                                        }
                                    }
                                    var o = t.return;
                                    try {
                                        ic(t)
                                    } catch (c) {
                                        _l(t, o, c)
                                    }
                                    break;
                                case 5:
                                    var a = t.return;
                                    try {
                                        ic(t)
                                    } catch (c) {
                                        _l(t, a, c)
                                    }
                            }
                        } catch (c) {
                            _l(t, t.return, c)
                        }
                        if (t === e) {
                            Gu = null;
                            break
                        }
                        var u = t.sibling;
                        if (null !== u) {
                            u.return = t.return, Gu = u;
                            break
                        }
                        Gu = t.return
                    }
                }
                var Pc, _c = Math.ceil,
                    jc = w.ReactCurrentDispatcher,
                    xc = w.ReactCurrentOwner,
                    kc = w.ReactCurrentBatchConfig,
                    Ec = 0,
                    Rc = null,
                    Cc = null,
                    Ic = 0,
                    Fc = 0,
                    Nc = _i(0),
                    Tc = 0,
                    Ac = null,
                    Dc = 0,
                    Lc = 0,
                    Mc = 0,
                    Uc = null,
                    Vc = null,
                    qc = 0,
                    zc = 1 / 0,
                    Hc = null,
                    Bc = !1,
                    Qc = null,
                    Wc = null,
                    $c = !1,
                    Kc = null,
                    Jc = 0,
                    Yc = 0,
                    Xc = null,
                    Gc = -1,
                    Zc = 0;

                function el() {
                    return 0 !== (6 & Ec) ? Xe() : -1 !== Gc ? Gc : Gc = Xe()
                }

                function tl(e) {
                    return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Ec) && 0 !== Ic ? Ic & -Ic : null !== yo.transition ? (0 === Zc && (Zc = mt()), Zc) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Yt(e.type)
                }

                function nl(e, t, n, r) {
                    if (50 < Yc) throw Yc = 0, Xc = null, Error(o(185));
                    vt(e, n, r), 0 !== (2 & Ec) && e === Rc || (e === Rc && (0 === (2 & Ec) && (Lc |= n), 4 === Tc && ul(e, Ic)), rl(e, r), 1 === n && 0 === Ec && 0 === (1 & t.mode) && (zc = Xe() + 500, Ui && zi()))
                }

                function rl(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
                            var a = 31 - at(o),
                                u = 1 << a,
                                c = i[a]; - 1 === c ? 0 !== (u & n) && 0 === (u & r) || (i[a] = dt(u, t)) : c <= t && (e.expiredLanes |= u), o &= ~u
                        }
                    }(e, t);
                    var r = pt(e, e === Rc ? Ic : 0);
                    if (0 === r) null !== n && Ke(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && Ke(n), 1 === t) 0 === e.tag ? function(e) {
                            Ui = !0, qi(e)
                        }(cl.bind(null, e)) : qi(cl.bind(null, e)), ai((function() {
                            0 === (6 & Ec) && zi()
                        })), n = null;
                        else {
                            switch (wt(r)) {
                                case 1:
                                    n = Ze;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = Rl(n, il.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function il(e, t) {
                    if (Gc = -1, Zc = 0, 0 !== (6 & Ec)) throw Error(o(327));
                    var n = e.callbackNode;
                    if (Ol() && e.callbackNode !== n) return null;
                    var r = pt(e, e === Rc ? Ic : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yl(e, r);
                    else {
                        t = r;
                        var i = Ec;
                        Ec |= 2;
                        var a = hl();
                        for (Rc === e && Ic === t || (Hc = null, zc = Xe() + 500, pl(e, t));;) try {
                            gl();
                            break
                        } catch (c) {
                            dl(e, c)
                        }
                        ko(), jc.current = a, Ec = i, null !== Cc ? t = 0 : (Rc = null, Ic = 0, t = Tc)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (i = ht(e)) && (r = i, t = ol(e, i))), 1 === t) throw n = Ac, pl(e, 0), ul(e, r), rl(e, Xe()), n;
                        if (6 === t) ul(e, r);
                        else {
                            if (i = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var i = n[r],
                                                        o = i.getSnapshot;
                                                    i = i.value;
                                                    try {
                                                        if (!ur(o(), i)) return !1
                                                    } catch (u) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(i) && (2 === (t = yl(e, r)) && (0 !== (a = ht(e)) && (r = a, t = ol(e, a))), 1 === t)) throw n = Ac, pl(e, 0), ul(e, r), rl(e, Xe()), n;
                            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(o(345));
                                case 2:
                                case 5:
                                    Sl(e, Vc, Hc);
                                    break;
                                case 3:
                                    if (ul(e, r), (130023424 & r) === r && 10 < (t = qc + 500 - Xe())) {
                                        if (0 !== pt(e, 0)) break;
                                        if (((i = e.suspendedLanes) & r) !== r) {
                                            el(), e.pingedLanes |= e.suspendedLanes & i;
                                            break
                                        }
                                        e.timeoutHandle = ri(Sl.bind(null, e, Vc, Hc), t);
                                        break
                                    }
                                    Sl(e, Vc, Hc);
                                    break;
                                case 4:
                                    if (ul(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, i = -1; 0 < r;) {
                                        var u = 31 - at(r);
                                        a = 1 << u, (u = t[u]) > i && (i = u), r &= ~a
                                    }
                                    if (r = i, 10 < (r = (120 > (r = Xe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _c(r / 1960)) - r)) {
                                        e.timeoutHandle = ri(Sl.bind(null, e, Vc, Hc), r);
                                        break
                                    }
                                    Sl(e, Vc, Hc);
                                    break;
                                default:
                                    throw Error(o(329))
                            }
                        }
                    }
                    return rl(e, Xe()), e.callbackNode === n ? il.bind(null, e) : null
                }

                function ol(e, t) {
                    var n = Uc;
                    return e.current.memoizedState.isDehydrated && (pl(e, t).flags |= 256), 2 !== (e = yl(e, t)) && (t = Vc, Vc = n, null !== t && al(t)), e
                }

                function al(e) {
                    null === Vc ? Vc = e : Vc.push.apply(Vc, e)
                }

                function ul(e, t) {
                    for (t &= ~Mc, t &= ~Lc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - at(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function cl(e) {
                    if (0 !== (6 & Ec)) throw Error(o(327));
                    Ol();
                    var t = pt(e, 0);
                    if (0 === (1 & t)) return rl(e, Xe()), null;
                    var n = yl(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = ht(e);
                        0 !== r && (t = r, n = ol(e, r))
                    }
                    if (1 === n) throw n = Ac, pl(e, 0), ul(e, t), rl(e, Xe()), n;
                    if (6 === n) throw Error(o(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Sl(e, Vc, Hc), rl(e, Xe()), null
                }

                function ll(e, t) {
                    var n = Ec;
                    Ec |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Ec = n) && (zc = Xe() + 500, Ui && zi())
                    }
                }

                function sl(e) {
                    null !== Kc && 0 === Kc.tag && 0 === (6 & Ec) && Ol();
                    var t = Ec;
                    Ec |= 1;
                    var n = kc.transition,
                        r = bt;
                    try {
                        if (kc.transition = null, bt = 1, e) return e()
                    } finally {
                        bt = r, kc.transition = n, 0 === (6 & (Ec = t)) && zi()
                    }
                }

                function fl() {
                    Fc = Nc.current, ji(Nc)
                }

                function pl(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, ii(n)), null !== Cc)
                        for (n = Cc.return; null !== n;) {
                            var r = n;
                            switch (to(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Ni();
                                    break;
                                case 3:
                                    Xo(), ji(Ri), ji(Ei), ra();
                                    break;
                                case 5:
                                    Zo(r);
                                    break;
                                case 4:
                                    Xo();
                                    break;
                                case 13:
                                case 19:
                                    ji(ea);
                                    break;
                                case 10:
                                    Eo(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    fl()
                            }
                            n = n.return
                        }
                    if (Rc = e, Cc = e = Nl(e.current, null), Ic = Fc = t, Tc = 0, Ac = null, Mc = Lc = Dc = 0, Vc = Uc = null, null !== Fo) {
                        for (t = 0; t < Fo.length; t++)
                            if (null !== (r = (n = Fo[t]).interleaved)) {
                                n.interleaved = null;
                                var i = r.next,
                                    o = n.pending;
                                if (null !== o) {
                                    var a = o.next;
                                    o.next = i, r.next = a
                                }
                                n.pending = r
                            }
                        Fo = null
                    }
                    return e
                }

                function dl(e, t) {
                    for (;;) {
                        var n = Cc;
                        try {
                            if (ko(), ia.current = Ga, sa) {
                                for (var r = ua.memoizedState; null !== r;) {
                                    var i = r.queue;
                                    null !== i && (i.pending = null), r = r.next
                                }
                                sa = !1
                            }
                            if (aa = 0, la = ca = ua = null, fa = !1, pa = 0, xc.current = null, null === n || null === n.return) {
                                Tc = 1, Ac = t, Cc = null;
                                break
                            }
                            e: {
                                var a = e,
                                    u = n.return,
                                    c = n,
                                    l = t;
                                if (t = Ic, c.flags |= 32768, null !== l && "object" === typeof l && "function" === typeof l.then) {
                                    var s = l,
                                        f = c,
                                        p = f.tag;
                                    if (0 === (1 & f.mode) && (0 === p || 11 === p || 15 === p)) {
                                        var d = f.alternate;
                                        d ? (f.updateQueue = d.updateQueue, f.memoizedState = d.memoizedState, f.lanes = d.lanes) : (f.updateQueue = null, f.memoizedState = null)
                                    }
                                    var h = yu(u);
                                    if (null !== h) {
                                        h.flags &= -257, vu(h, u, c, 0, t), 1 & h.mode && mu(a, s, t), l = s;
                                        var m = (t = h).updateQueue;
                                        if (null === m) {
                                            var y = new Set;
                                            y.add(l), t.updateQueue = y
                                        } else m.add(l);
                                        break e
                                    }
                                    if (0 === (1 & t)) {
                                        mu(a, s, t), ml();
                                        break e
                                    }
                                    l = Error(o(426))
                                } else if (io && 1 & c.mode) {
                                    var v = yu(u);
                                    if (null !== v) {
                                        0 === (65536 & v.flags) && (v.flags |= 256), vu(v, u, c, 0, t), mo(lu(l, c));
                                        break e
                                    }
                                }
                                a = l = lu(l, c),
                                4 !== Tc && (Tc = 2),
                                null === Uc ? Uc = [a] : Uc.push(a),
                                a = u;do {
                                    switch (a.tag) {
                                        case 3:
                                            a.flags |= 65536, t &= -t, a.lanes |= t, zo(a, du(0, l, t));
                                            break e;
                                        case 1:
                                            c = l;
                                            var g = a.type,
                                                b = a.stateNode;
                                            if (0 === (128 & a.flags) && ("function" === typeof g.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Wc || !Wc.has(b)))) {
                                                a.flags |= 65536, t &= -t, a.lanes |= t, zo(a, hu(a, c, t));
                                                break e
                                            }
                                    }
                                    a = a.return
                                } while (null !== a)
                            }
                            wl(n)
                        } catch (w) {
                            t = w, Cc === n && null !== n && (Cc = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function hl() {
                    var e = jc.current;
                    return jc.current = Ga, null === e ? Ga : e
                }

                function ml() {
                    0 !== Tc && 3 !== Tc && 2 !== Tc || (Tc = 4), null === Rc || 0 === (268435455 & Dc) && 0 === (268435455 & Lc) || ul(Rc, Ic)
                }

                function yl(e, t) {
                    var n = Ec;
                    Ec |= 2;
                    var r = hl();
                    for (Rc === e && Ic === t || (Hc = null, pl(e, t));;) try {
                        vl();
                        break
                    } catch (i) {
                        dl(e, i)
                    }
                    if (ko(), Ec = n, jc.current = r, null !== Cc) throw Error(o(261));
                    return Rc = null, Ic = 0, Tc
                }

                function vl() {
                    for (; null !== Cc;) bl(Cc)
                }

                function gl() {
                    for (; null !== Cc && !Je();) bl(Cc)
                }

                function bl(e) {
                    var t = Pc(e.alternate, e, Fc);
                    e.memoizedProps = e.pendingProps, null === t ? wl(e) : Cc = t, xc.current = null
                }

                function wl(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (32768 & t.flags)) {
                            if (null !== (n = $u(n, t, Fc))) return void(Cc = n)
                        } else {
                            if (null !== (n = Ku(n, t))) return n.flags &= 32767, void(Cc = n);
                            if (null === e) return Tc = 6, void(Cc = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (t = t.sibling)) return void(Cc = t);
                        Cc = t = e
                    } while (null !== t);
                    0 === Tc && (Tc = 5)
                }

                function Sl(e, t, n) {
                    var r = bt,
                        i = kc.transition;
                    try {
                        kc.transition = null, bt = 1,
                            function(e, t, n, r) {
                                do {
                                    Ol()
                                } while (null !== Kc);
                                if (0 !== (6 & Ec)) throw Error(o(327));
                                n = e.finishedWork;
                                var i = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var a = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var i = 31 - at(n),
                                                o = 1 << i;
                                            t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
                                        }
                                    }(e, a), e === Rc && (Cc = Rc = null, Ic = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || $c || ($c = !0, Rl(tt, (function() {
                                        return Ol(), null
                                    }))), a = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || a) {
                                    a = kc.transition, kc.transition = null;
                                    var u = bt;
                                    bt = 1;
                                    var c = Ec;
                                    Ec |= 4, xc.current = null,
                                        function(e, t) {
                                            if (ei = Bt, dr(e = pr())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var i = r.anchorOffset,
                                                            a = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, a.nodeType
                                                        } catch (S) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var u = 0,
                                                            c = -1,
                                                            l = -1,
                                                            s = 0,
                                                            f = 0,
                                                            p = e,
                                                            d = null;
                                                        t: for (;;) {
                                                            for (var h; p !== n || 0 !== i && 3 !== p.nodeType || (c = u + i), p !== a || 0 !== r && 3 !== p.nodeType || (l = u + r), 3 === p.nodeType && (u += p.nodeValue.length), null !== (h = p.firstChild);) d = p, p = h;
                                                            for (;;) {
                                                                if (p === e) break t;
                                                                if (d === n && ++s === i && (c = u), d === a && ++f === r && (l = u), null !== (h = p.nextSibling)) break;
                                                                d = (p = d).parentNode
                                                            }
                                                            p = h
                                                        }
                                                        n = -1 === c || -1 === l ? null : {
                                                            start: c,
                                                            end: l
                                                        }
                                                    } else n = null
                                                }
                                                n = n || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else n = null;
                                            for (ti = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, Bt = !1, Gu = t; null !== Gu;)
                                                if (e = (t = Gu).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Gu = e;
                                                else
                                                    for (; null !== Gu;) {
                                                        t = Gu;
                                                        try {
                                                            var m = t.alternate;
                                                            if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== m) {
                                                                        var y = m.memoizedProps,
                                                                            v = m.memoizedState,
                                                                            g = t.stateNode,
                                                                            b = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : nu(t.type, y), v);
                                                                        g.__reactInternalSnapshotBeforeUpdate = b
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var w = t.stateNode.containerInfo;
                                                                    1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(o(163))
                                                            }
                                                        } catch (S) {
                                                            _l(t, t.return, S)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, Gu = e;
                                                            break
                                                        }
                                                        Gu = t.return
                                                    }
                                            m = tc, tc = !1
                                        }(e, n), yc(n, e), hr(ti), Bt = !!ei, ti = ei = null, e.current = n, gc(n, e, i), Ye(), Ec = c, bt = u, kc.transition = a
                                } else e.current = n;
                                if ($c && ($c = !1, Kc = e, Jc = i), a = e.pendingLanes, 0 === a && (Wc = null), function(e) {
                                        if (ot && "function" === typeof ot.onCommitFiberRoot) try {
                                            ot.onCommitFiberRoot(it, e, void 0, 128 === (128 & e.current.flags))
                                        } catch (t) {}
                                    }(n.stateNode), rl(e, Xe()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
                                        componentStack: i.stack,
                                        digest: i.digest
                                    });
                                if (Bc) throw Bc = !1, e = Qc, Qc = null, e;
                                0 !== (1 & Jc) && 0 !== e.tag && Ol(), a = e.pendingLanes, 0 !== (1 & a) ? e === Xc ? Yc++ : (Yc = 0, Xc = e) : Yc = 0, zi()
                            }(e, t, n, r)
                    } finally {
                        kc.transition = i, bt = r
                    }
                    return null
                }

                function Ol() {
                    if (null !== Kc) {
                        var e = wt(Jc),
                            t = kc.transition,
                            n = bt;
                        try {
                            if (kc.transition = null, bt = 16 > e ? 16 : e, null === Kc) var r = !1;
                            else {
                                if (e = Kc, Kc = null, Jc = 0, 0 !== (6 & Ec)) throw Error(o(331));
                                var i = Ec;
                                for (Ec |= 4, Gu = e.current; null !== Gu;) {
                                    var a = Gu,
                                        u = a.child;
                                    if (0 !== (16 & Gu.flags)) {
                                        var c = a.deletions;
                                        if (null !== c) {
                                            for (var l = 0; l < c.length; l++) {
                                                var s = c[l];
                                                for (Gu = s; null !== Gu;) {
                                                    var f = Gu;
                                                    switch (f.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            nc(8, f, a)
                                                    }
                                                    var p = f.child;
                                                    if (null !== p) p.return = f, Gu = p;
                                                    else
                                                        for (; null !== Gu;) {
                                                            var d = (f = Gu).sibling,
                                                                h = f.return;
                                                            if (oc(f), f === s) {
                                                                Gu = null;
                                                                break
                                                            }
                                                            if (null !== d) {
                                                                d.return = h, Gu = d;
                                                                break
                                                            }
                                                            Gu = h
                                                        }
                                                }
                                            }
                                            var m = a.alternate;
                                            if (null !== m) {
                                                var y = m.child;
                                                if (null !== y) {
                                                    m.child = null;
                                                    do {
                                                        var v = y.sibling;
                                                        y.sibling = null, y = v
                                                    } while (null !== y)
                                                }
                                            }
                                            Gu = a
                                        }
                                    }
                                    if (0 !== (2064 & a.subtreeFlags) && null !== u) u.return = a, Gu = u;
                                    else e: for (; null !== Gu;) {
                                        if (0 !== (2048 & (a = Gu).flags)) switch (a.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                nc(9, a, a.return)
                                        }
                                        var g = a.sibling;
                                        if (null !== g) {
                                            g.return = a.return, Gu = g;
                                            break e
                                        }
                                        Gu = a.return
                                    }
                                }
                                var b = e.current;
                                for (Gu = b; null !== Gu;) {
                                    var w = (u = Gu).child;
                                    if (0 !== (2064 & u.subtreeFlags) && null !== w) w.return = u, Gu = w;
                                    else e: for (u = b; null !== Gu;) {
                                        if (0 !== (2048 & (c = Gu).flags)) try {
                                            switch (c.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rc(9, c)
                                            }
                                        } catch (O) {
                                            _l(c, c.return, O)
                                        }
                                        if (c === u) {
                                            Gu = null;
                                            break e
                                        }
                                        var S = c.sibling;
                                        if (null !== S) {
                                            S.return = c.return, Gu = S;
                                            break e
                                        }
                                        Gu = c.return
                                    }
                                }
                                if (Ec = i, zi(), ot && "function" === typeof ot.onPostCommitFiberRoot) try {
                                    ot.onPostCommitFiberRoot(it, e)
                                } catch (O) {}
                                r = !0
                            }
                            return r
                        } finally {
                            bt = n, kc.transition = t
                        }
                    }
                    return !1
                }

                function Pl(e, t, n) {
                    e = Vo(e, t = du(0, t = lu(n, t), 1), 1), t = el(), null !== e && (vt(e, 1, t), rl(e, t))
                }

                function _l(e, t, n) {
                    if (3 === e.tag) Pl(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Pl(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Wc || !Wc.has(r))) {
                                    t = Vo(t, e = hu(t, e = lu(n, e), 1), 1), e = el(), null !== t && (vt(t, 1, e), rl(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function jl(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = el(), e.pingedLanes |= e.suspendedLanes & n, Rc === e && (Ic & n) === n && (4 === Tc || 3 === Tc && (130023424 & Ic) === Ic && 500 > Xe() - qc ? pl(e, 0) : Mc |= n), rl(e, t)
                }

                function xl(e, t) {
                    0 === t && (0 === (1 & e.mode) ? t = 1 : (t = st, 0 === (130023424 & (st <<= 1)) && (st = 4194304)));
                    var n = el();
                    null !== (e = Ao(e, t)) && (vt(e, t, n), rl(e, n))
                }

                function kl(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), xl(e, n)
                }

                function El(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                i = e.memoizedState;
                            null !== i && (n = i.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(o(314))
                    }
                    null !== r && r.delete(t), xl(e, n)
                }

                function Rl(e, t) {
                    return $e(e, t)
                }

                function Cl(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Il(e, t, n, r) {
                    return new Cl(e, t, n, r)
                }

                function Fl(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Nl(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Il(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Tl(e, t, n, r, i, a) {
                    var u = 2;
                    if (r = e, "function" === typeof e) Fl(e) && (u = 1);
                    else if ("string" === typeof e) u = 5;
                    else e: switch (e) {
                        case P:
                            return Al(n.children, i, a, t);
                        case _:
                            u = 8, i |= 8;
                            break;
                        case j:
                            return (e = Il(12, n, t, 2 | i)).elementType = j, e.lanes = a, e;
                        case R:
                            return (e = Il(13, n, t, i)).elementType = R, e.lanes = a, e;
                        case C:
                            return (e = Il(19, n, t, i)).elementType = C, e.lanes = a, e;
                        case N:
                            return Dl(n, i, a, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case x:
                                    u = 10;
                                    break e;
                                case k:
                                    u = 9;
                                    break e;
                                case E:
                                    u = 11;
                                    break e;
                                case I:
                                    u = 14;
                                    break e;
                                case F:
                                    u = 16, r = null;
                                    break e
                            }
                            throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Il(u, n, t, i)).elementType = e, t.type = r, t.lanes = a, t
                }

                function Al(e, t, n, r) {
                    return (e = Il(7, e, r, t)).lanes = n, e
                }

                function Dl(e, t, n, r) {
                    return (e = Il(22, e, r, t)).elementType = N, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function Ll(e, t, n) {
                    return (e = Il(6, e, null, t)).lanes = n, e
                }

                function Ml(e, t, n) {
                    return (t = Il(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Ul(e, t, n, r, i) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yt(0), this.expirationTimes = yt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yt(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
                }

                function Vl(e, t, n, r, i, o, a, u, c) {
                    return e = new Ul(e, t, n, u, c), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = Il(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, Lo(o), e
                }

                function ql(e) {
                    if (!e) return ki;
                    e: {
                        if (ze(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Fi(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(o(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (Fi(n)) return Ai(e, n, t)
                    }
                    return t
                }

                function zl(e, t, n, r, i, o, a, u, c) {
                    return (e = Vl(n, r, !0, e, 0, o, 0, u, c)).context = ql(null), n = e.current, (o = Uo(r = el(), i = tl(n))).callback = void 0 !== t && null !== t ? t : null, Vo(n, o, i), e.current.lanes = i, vt(e, i, r), rl(e, r), e
                }

                function Hl(e, t, n, r) {
                    var i = t.current,
                        o = el(),
                        a = tl(i);
                    return n = ql(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Uo(o, a)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Vo(i, t, a)) && (nl(e, i, a, o), qo(e, i, a)), a
                }

                function Bl(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Ql(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function Wl(e, t) {
                    Ql(e, t), (e = e.alternate) && Ql(e, t)
                }
                Pc = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Ri.current) bu = !0;
                        else {
                            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return bu = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Ru(t), ho();
                                            break;
                                        case 5:
                                            Go(t);
                                            break;
                                        case 1:
                                            Fi(t.type) && Di(t);
                                            break;
                                        case 4:
                                            Yo(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                i = t.memoizedProps.value;
                                            xi(Po, r._currentValue), r._currentValue = i;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (xi(ea, 1 & ea.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Lu(e, t, n) : (xi(ea, 1 & ea.current), null !== (e = Bu(e, t, n)) ? e.sibling : null);
                                            xi(ea, 1 & ea.current);
                                            break;
                                        case 19:
                                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                                if (r) return zu(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), xi(ea, ea.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, _u(e, t, n)
                                    }
                                    return Bu(e, t, n)
                                }(e, t, n);
                            bu = 0 !== (131072 & e.flags)
                        }
                    else bu = !1, io && 0 !== (1048576 & t.flags) && Zi(t, Wi, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Hu(e, t), e = t.pendingProps;
                            var i = Ii(t, Ei.current);
                            Co(t, n), i = ya(null, t, r, e, i, n);
                            var a = va();
                            return t.flags |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fi(r) ? (a = !0, Di(t)) : a = !1, t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, Lo(t), i.updater = iu, t.stateNode = i, i._reactInternals = t, cu(t, r, e, n), t = Eu(null, t, r, !0, a, n)) : (t.tag = 0, io && a && eo(t), wu(null, t, i, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Hu(e, t), e = t.pendingProps, r = (i = r._init)(r._payload), t.type = r, i = t.tag = function(e) {
                                    if ("function" === typeof e) return Fl(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === E) return 11;
                                        if (e === I) return 14
                                    }
                                    return 2
                                }(r), e = nu(r, e), i) {
                                    case 0:
                                        t = xu(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = ku(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = Su(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = Ou(null, t, r, nu(r.type, e), n);
                                        break e
                                }
                                throw Error(o(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, i = t.pendingProps, xu(e, t, r, i = t.elementType === r ? i : nu(r, i), n);
                        case 1:
                            return r = t.type, i = t.pendingProps, ku(e, t, r, i = t.elementType === r ? i : nu(r, i), n);
                        case 3:
                            e: {
                                if (Ru(t), null === e) throw Error(o(387));r = t.pendingProps,
                                i = (a = t.memoizedState).element,
                                Mo(e, t),
                                Ho(t, r, null, n);
                                var u = t.memoizedState;
                                if (r = u.element, a.isDehydrated) {
                                    if (a = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: u.cache,
                                            pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                                            transitions: u.transitions
                                        }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                                        t = Cu(e, t, r, n, i = lu(Error(o(423)), t));
                                        break e
                                    }
                                    if (r !== i) {
                                        t = Cu(e, t, r, n, i = lu(Error(o(424)), t));
                                        break e
                                    }
                                    for (ro = li(t.stateNode.containerInfo.firstChild), no = t, io = !0, oo = null, n = Oo(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (ho(), r === i) {
                                        t = Bu(e, t, n);
                                        break e
                                    }
                                    wu(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Go(t), null === e && lo(t), r = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, u = i.children, ni(r, i) ? u = null : null !== a && ni(r, a) && (t.flags |= 32), ju(e, t), wu(e, t, u, n), t.child;
                        case 6:
                            return null === e && lo(t), null;
                        case 13:
                            return Lu(e, t, n);
                        case 4:
                            return Yo(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = So(t, null, r, n) : wu(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, i = t.pendingProps, Su(e, t, r, i = t.elementType === r ? i : nu(r, i), n);
                        case 7:
                            return wu(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return wu(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, u = i.value, xi(Po, r._currentValue), r._currentValue = u, null !== a)
                                    if (ur(a.value, u)) {
                                        if (a.children === i.children && !Ri.current) {
                                            t = Bu(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (a = t.child) && (a.return = t); null !== a;) {
                                            var c = a.dependencies;
                                            if (null !== c) {
                                                u = a.child;
                                                for (var l = c.firstContext; null !== l;) {
                                                    if (l.context === r) {
                                                        if (1 === a.tag) {
                                                            (l = Uo(-1, n & -n)).tag = 2;
                                                            var s = a.updateQueue;
                                                            if (null !== s) {
                                                                var f = (s = s.shared).pending;
                                                                null === f ? l.next = l : (l.next = f.next, f.next = l), s.pending = l
                                                            }
                                                        }
                                                        a.lanes |= n, null !== (l = a.alternate) && (l.lanes |= n), Ro(a.return, n, t), c.lanes |= n;
                                                        break
                                                    }
                                                    l = l.next
                                                }
                                            } else if (10 === a.tag) u = a.type === t.type ? null : a.child;
                                            else if (18 === a.tag) {
                                                if (null === (u = a.return)) throw Error(o(341));
                                                u.lanes |= n, null !== (c = u.alternate) && (c.lanes |= n), Ro(u, n, t), u = a.sibling
                                            } else u = a.child;
                                            if (null !== u) u.return = a;
                                            else
                                                for (u = a; null !== u;) {
                                                    if (u === t) {
                                                        u = null;
                                                        break
                                                    }
                                                    if (null !== (a = u.sibling)) {
                                                        a.return = u.return, u = a;
                                                        break
                                                    }
                                                    u = u.return
                                                }
                                            a = u
                                        }
                                wu(e, t, i.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return i = t.type, r = t.pendingProps.children, Co(t, n), r = r(i = Io(i)), t.flags |= 1, wu(e, t, r, n), t.child;
                        case 14:
                            return i = nu(r = t.type, t.pendingProps), Ou(e, t, r, i = nu(r.type, i), n);
                        case 15:
                            return Pu(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nu(r, i), Hu(e, t), t.tag = 1, Fi(r) ? (e = !0, Di(t)) : e = !1, Co(t, n), au(t, r, i), cu(t, r, i, n), Eu(null, t, r, !0, e, n);
                        case 19:
                            return zu(e, t, n);
                        case 22:
                            return _u(e, t, n)
                    }
                    throw Error(o(156, t.tag))
                };
                var $l = "function" === typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function Kl(e) {
                    this._internalRoot = e
                }

                function Jl(e) {
                    this._internalRoot = e
                }

                function Yl(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Xl(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Gl() {}

                function Zl(e, t, n, r, i) {
                    var o = n._reactRootContainer;
                    if (o) {
                        var a = o;
                        if ("function" === typeof i) {
                            var u = i;
                            i = function() {
                                var e = Bl(a);
                                u.call(e)
                            }
                        }
                        Hl(t, a, e, i)
                    } else a = function(e, t, n, r, i) {
                        if (i) {
                            if ("function" === typeof r) {
                                var o = r;
                                r = function() {
                                    var e = Bl(a);
                                    o.call(e)
                                }
                            }
                            var a = zl(t, r, e, 0, null, !1, 0, "", Gl);
                            return e._reactRootContainer = a, e[hi] = a.current, zr(8 === e.nodeType ? e.parentNode : e), sl(), a
                        }
                        for (; i = e.lastChild;) e.removeChild(i);
                        if ("function" === typeof r) {
                            var u = r;
                            r = function() {
                                var e = Bl(c);
                                u.call(e)
                            }
                        }
                        var c = Vl(e, 0, !1, null, 0, !1, 0, "", Gl);
                        return e._reactRootContainer = c, e[hi] = c.current, zr(8 === e.nodeType ? e.parentNode : e), sl((function() {
                            Hl(t, c, n, r)
                        })), c
                    }(n, t, e, i, r);
                    return Bl(a)
                }
                Jl.prototype.render = Kl.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(o(409));
                    Hl(e, t, null, null)
                }, Jl.prototype.unmount = Kl.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        sl((function() {
                            Hl(null, e, null, null)
                        })), t[hi] = null
                    }
                }, Jl.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = _t();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Nt.length && 0 !== t && t < Nt[n].priority; n++);
                        Nt.splice(n, 0, e), 0 === n && Lt(e)
                    }
                }, St = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = ft(t.pendingLanes);
                                0 !== n && (gt(t, 1 | n), rl(t, Xe()), 0 === (6 & Ec) && (zc = Xe() + 500, zi()))
                            }
                            break;
                        case 13:
                            sl((function() {
                                var t = Ao(e, 1);
                                if (null !== t) {
                                    var n = el();
                                    nl(t, e, 1, n)
                                }
                            })), Wl(e, 1)
                    }
                }, Ot = function(e) {
                    if (13 === e.tag) {
                        var t = Ao(e, 134217728);
                        if (null !== t) nl(t, e, 134217728, el());
                        Wl(e, 134217728)
                    }
                }, Pt = function(e) {
                    if (13 === e.tag) {
                        var t = tl(e),
                            n = Ao(e, t);
                        if (null !== n) nl(n, e, t, el());
                        Wl(e, t)
                    }
                }, _t = function() {
                    return bt
                }, jt = function(e, t) {
                    var n = bt;
                    try {
                        return bt = e, t()
                    } finally {
                        bt = n
                    }
                }, Oe = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (G(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var i = Si(r);
                                        if (!i) throw Error(o(90));
                                        $(r), G(r, i)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            oe(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Ee = ll, Re = sl;
                var es = {
                        usingClientEntryPoint: !1,
                        Events: [bi, wi, Si, xe, ke, ll]
                    },
                    ts = {
                        findFiberByHostInstance: gi,
                        bundleType: 0,
                        version: "18.3.1",
                        rendererPackageName: "react-dom"
                    },
                    ns = {
                        bundleType: ts.bundleType,
                        version: ts.version,
                        rendererPackageName: ts.rendererPackageName,
                        rendererConfig: ts.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: w.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = Qe(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: ts.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!rs.isDisabled && rs.supportsFiber) try {
                        it = rs.inject(ns), ot = rs
                    } catch (se) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = es, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Yl(t)) throw Error(o(200));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: O,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.createRoot = function(e, t) {
                    if (!Yl(e)) throw Error(o(299));
                    var n = !1,
                        r = "",
                        i = $l;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (i = t.onRecoverableError)), t = Vl(e, 1, !1, null, 0, n, 0, r, i), e[hi] = t.current, zr(8 === e.nodeType ? e.parentNode : e), new Kl(t)
                }, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(o(188));
                        throw e = Object.keys(e).join(","), Error(o(268, e))
                    }
                    return e = null === (e = Qe(t)) ? null : e.stateNode
                }, t.flushSync = function(e) {
                    return sl(e)
                }, t.hydrate = function(e, t, n) {
                    if (!Xl(t)) throw Error(o(200));
                    return Zl(null, e, t, !0, n)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!Yl(e)) throw Error(o(405));
                    var r = null != n && n.hydratedSources || null,
                        i = !1,
                        a = "",
                        u = $l;
                    if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (i = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onRecoverableError && (u = n.onRecoverableError)), t = zl(t, null, e, 1, null != n ? n : null, i, 0, a, u), e[hi] = t.current, zr(e), r)
                        for (e = 0; e < r.length; e++) i = (i = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
                    return new Jl(t)
                }, t.render = function(e, t, n) {
                    if (!Xl(t)) throw Error(o(200));
                    return Zl(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!Xl(e)) throw Error(o(40));
                    return !!e._reactRootContainer && (sl((function() {
                        Zl(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[hi] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = ll, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!Xl(n)) throw Error(o(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(o(38));
                    return Zl(e, t, n, !1, r)
                }, t.version = "18.3.1-next-f1338f8080-20240426"
            },
            950: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(730)
            },
            366: e => {
                var t = "undefined" !== typeof Element,
                    n = "function" === typeof Map,
                    r = "function" === typeof Set,
                    i = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

                function o(e, a) {
                    if (e === a) return !0;
                    if (e && a && "object" == typeof e && "object" == typeof a) {
                        if (e.constructor !== a.constructor) return !1;
                        var u, c, l, s;
                        if (Array.isArray(e)) {
                            if ((u = e.length) != a.length) return !1;
                            for (c = u; 0 !== c--;)
                                if (!o(e[c], a[c])) return !1;
                            return !0
                        }
                        if (n && e instanceof Map && a instanceof Map) {
                            if (e.size !== a.size) return !1;
                            for (s = e.entries(); !(c = s.next()).done;)
                                if (!a.has(c.value[0])) return !1;
                            for (s = e.entries(); !(c = s.next()).done;)
                                if (!o(c.value[1], a.get(c.value[0]))) return !1;
                            return !0
                        }
                        if (r && e instanceof Set && a instanceof Set) {
                            if (e.size !== a.size) return !1;
                            for (s = e.entries(); !(c = s.next()).done;)
                                if (!a.has(c.value[0])) return !1;
                            return !0
                        }
                        if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                            if ((u = e.length) != a.length) return !1;
                            for (c = u; 0 !== c--;)
                                if (e[c] !== a[c]) return !1;
                            return !0
                        }
                        if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
                        if (e.valueOf !== Object.prototype.valueOf && "function" === typeof e.valueOf && "function" === typeof a.valueOf) return e.valueOf() === a.valueOf();
                        if (e.toString !== Object.prototype.toString && "function" === typeof e.toString && "function" === typeof a.toString) return e.toString() === a.toString();
                        if ((u = (l = Object.keys(e)).length) !== Object.keys(a).length) return !1;
                        for (c = u; 0 !== c--;)
                            if (!Object.prototype.hasOwnProperty.call(a, l[c])) return !1;
                        if (t && e instanceof Element) return !1;
                        for (c = u; 0 !== c--;)
                            if (("_owner" !== l[c] && "__v" !== l[c] && "__o" !== l[c] || !e.$$typeof) && !o(e[l[c]], a[l[c]])) return !1;
                        return !0
                    }
                    return e !== e && a !== a
                }
                e.exports = function(e, t) {
                    try {
                        return o(e, t)
                    } catch (n) {
                        if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                        throw n
                    }
                }
            },
            244: (e, t, n) => {
                "use strict";
                var r = n(970),
                    i = n(250),
                    o = n(724);

                function a(e, t, n) {
                    return new r(e, t, n)
                }
                a.version = n(893), a.AlgoliaSearchHelper = r, a.SearchParameters = i, a.SearchResults = o, e.exports = a
            },
            923: (e, t, n) => {
                "use strict";
                var r = n(532);

                function i(e, t) {
                    this.main = e, this.fn = t, this.lastResults = null
                }
                n(211)(i, r), i.prototype.detach = function() {
                    this.removeAllListeners(), this.main.detachDerivedHelper(this)
                }, i.prototype.getModifiedState = function(e) {
                    return this.fn(e)
                }, e.exports = i
            },
            505: (e, t, n) => {
                "use strict";
                var r = n(639),
                    i = n(642),
                    o = n(658),
                    a = {
                        addRefinement: function(e, t, n) {
                            if (a.isRefined(e, t, n)) return e;
                            var i = "" + n,
                                o = e[t] ? e[t].concat(i) : [i],
                                u = {};
                            return u[t] = o, r({}, u, e)
                        },
                        removeRefinement: function(e, t, n) {
                            if (void 0 === n) return a.clearRefinement(e, (function(e, n) {
                                return t === n
                            }));
                            var r = "" + n;
                            return a.clearRefinement(e, (function(e, n) {
                                return t === n && r === e
                            }))
                        },
                        toggleRefinement: function(e, t, n) {
                            if (void 0 === n) throw new Error("toggleRefinement should be used with a value");
                            return a.isRefined(e, t, n) ? a.removeRefinement(e, t, n) : a.addRefinement(e, t, n)
                        },
                        clearRefinement: function(e, t, n) {
                            if (void 0 === t) return i(e) ? {} : e;
                            if ("string" === typeof t) return o(e, [t]);
                            if ("function" === typeof t) {
                                var r = !1,
                                    a = Object.keys(e).reduce((function(i, o) {
                                        var a = e[o] || [],
                                            u = a.filter((function(e) {
                                                return !t(e, o, n)
                                            }));
                                        return u.length !== a.length && (r = !0), i[o] = u, i
                                    }), {});
                                return r ? a : e
                            }
                        },
                        isRefined: function(e, t, n) {
                            var r = Boolean(e[t]) && e[t].length > 0;
                            if (void 0 === n || !r) return r;
                            var i = "" + n;
                            return -1 !== e[t].indexOf(i)
                        }
                    };
                e.exports = a
            },
            250: (e, t, n) => {
                "use strict";
                var r = n(639),
                    i = n(756),
                    o = n(458),
                    a = n(631),
                    u = n(642),
                    c = n(658),
                    l = n(0),
                    s = n(193),
                    f = n(505);

                function p(e, t) {
                    return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((function(e, n) {
                        return p(t[n], e)
                    })) : e === t
                }

                function d(e) {
                    var t = e ? d._parseNumbers(e) : {};
                    void 0 === t.userToken || s(t.userToken) || console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"), this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {};
                    var n = this;
                    Object.keys(t).forEach((function(e) {
                        var r = -1 !== d.PARAMETERS.indexOf(e),
                            i = void 0 !== t[e];
                        !r && i && (n[e] = t[e])
                    }))
                }
                d.PARAMETERS = Object.keys(new d), d._parseNumbers = function(e) {
                    if (e instanceof d) return e;
                    var t = {};
                    if (["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"].forEach((function(n) {
                            var r = e[n];
                            if ("string" === typeof r) {
                                var i = parseFloat(r);
                                t[n] = isNaN(i) ? r : i
                            }
                        })), Array.isArray(e.insideBoundingBox) && (t.insideBoundingBox = e.insideBoundingBox.map((function(e) {
                            return Array.isArray(e) ? e.map((function(e) {
                                return parseFloat(e)
                            })) : e
                        }))), e.numericRefinements) {
                        var n = {};
                        Object.keys(e.numericRefinements).forEach((function(t) {
                            var r = e.numericRefinements[t] || {};
                            n[t] = {}, Object.keys(r).forEach((function(e) {
                                var i = r[e].map((function(e) {
                                    return Array.isArray(e) ? e.map((function(e) {
                                        return "string" === typeof e ? parseFloat(e) : e
                                    })) : "string" === typeof e ? parseFloat(e) : e
                                }));
                                n[t][e] = i
                            }))
                        })), t.numericRefinements = n
                    }
                    return a({}, e, t)
                }, d.make = function(e) {
                    var t = new d(e);
                    return (e.hierarchicalFacets || []).forEach((function(e) {
                        if (e.rootPath) {
                            var n = t.getHierarchicalRefinement(e.name);
                            n.length > 0 && 0 !== n[0].indexOf(e.rootPath) && (t = t.clearRefinements(e.name)), 0 === (n = t.getHierarchicalRefinement(e.name)).length && (t = t.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
                        }
                    })), t
                }, d.validate = function(e, t) {
                    var n = t || {};
                    return e.tagFilters && n.tagRefinements && n.tagRefinements.length > 0 ? new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : e.tagRefinements.length > 0 && n.tagFilters ? new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e.numericFilters && n.numericRefinements && u(n.numericRefinements) ? new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : u(e.numericRefinements) && n.numericFilters ? new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null
                }, d.prototype = {
                    constructor: d,
                    clearRefinements: function(e) {
                        var t = {
                            numericRefinements: this._clearNumericRefinements(e),
                            facetsRefinements: f.clearRefinement(this.facetsRefinements, e, "conjunctiveFacet"),
                            facetsExcludes: f.clearRefinement(this.facetsExcludes, e, "exclude"),
                            disjunctiveFacetsRefinements: f.clearRefinement(this.disjunctiveFacetsRefinements, e, "disjunctiveFacet"),
                            hierarchicalFacetsRefinements: f.clearRefinement(this.hierarchicalFacetsRefinements, e, "hierarchicalFacet")
                        };
                        return t.numericRefinements === this.numericRefinements && t.facetsRefinements === this.facetsRefinements && t.facetsExcludes === this.facetsExcludes && t.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(t)
                    },
                    clearTags: function() {
                        return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({
                            tagFilters: void 0,
                            tagRefinements: []
                        })
                    },
                    setIndex: function(e) {
                        return e === this.index ? this : this.setQueryParameters({
                            index: e
                        })
                    },
                    setQuery: function(e) {
                        return e === this.query ? this : this.setQueryParameters({
                            query: e
                        })
                    },
                    setPage: function(e) {
                        return e === this.page ? this : this.setQueryParameters({
                            page: e
                        })
                    },
                    setFacets: function(e) {
                        return this.setQueryParameters({
                            facets: e
                        })
                    },
                    setDisjunctiveFacets: function(e) {
                        return this.setQueryParameters({
                            disjunctiveFacets: e
                        })
                    },
                    setHitsPerPage: function(e) {
                        return this.hitsPerPage === e ? this : this.setQueryParameters({
                            hitsPerPage: e
                        })
                    },
                    setTypoTolerance: function(e) {
                        return this.typoTolerance === e ? this : this.setQueryParameters({
                            typoTolerance: e
                        })
                    },
                    addNumericRefinement: function(e, t, n) {
                        var r = l(n);
                        if (this.isNumericRefined(e, t, r)) return this;
                        var i = a({}, this.numericRefinements);
                        return i[e] = a({}, i[e]), i[e][t] ? (i[e][t] = i[e][t].slice(), i[e][t].push(r)) : i[e][t] = [r], this.setQueryParameters({
                            numericRefinements: i
                        })
                    },
                    getConjunctiveRefinements: function(e) {
                        return this.isConjunctiveFacet(e) && this.facetsRefinements[e] || []
                    },
                    getDisjunctiveRefinements: function(e) {
                        return this.isDisjunctiveFacet(e) && this.disjunctiveFacetsRefinements[e] || []
                    },
                    getHierarchicalRefinement: function(e) {
                        return this.hierarchicalFacetsRefinements[e] || []
                    },
                    getExcludeRefinements: function(e) {
                        return this.isConjunctiveFacet(e) && this.facetsExcludes[e] || []
                    },
                    removeNumericRefinement: function(e, t, n) {
                        var r = n;
                        return void 0 !== r ? this.isNumericRefined(e, t, r) ? this.setQueryParameters({
                            numericRefinements: this._clearNumericRefinements((function(n, i) {
                                return i === e && n.op === t && p(n.val, l(r))
                            }))
                        }) : this : void 0 !== t ? this.isNumericRefined(e, t) ? this.setQueryParameters({
                            numericRefinements: this._clearNumericRefinements((function(n, r) {
                                return r === e && n.op === t
                            }))
                        }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
                            numericRefinements: this._clearNumericRefinements((function(t, n) {
                                return n === e
                            }))
                        }) : this
                    },
                    getNumericRefinements: function(e) {
                        return this.numericRefinements[e] || {}
                    },
                    getNumericRefinement: function(e, t) {
                        return this.numericRefinements[e] && this.numericRefinements[e][t]
                    },
                    _clearNumericRefinements: function(e) {
                        if (void 0 === e) return u(this.numericRefinements) ? {} : this.numericRefinements;
                        if ("string" === typeof e) return c(this.numericRefinements, [e]);
                        if ("function" === typeof e) {
                            var t = !1,
                                n = this.numericRefinements,
                                r = Object.keys(n).reduce((function(r, i) {
                                    var o = n[i],
                                        a = {};
                                    return o = o || {}, Object.keys(o).forEach((function(n) {
                                        var r = o[n] || [],
                                            u = [];
                                        r.forEach((function(t) {
                                            e({
                                                val: t,
                                                op: n
                                            }, i, "numeric") || u.push(t)
                                        })), u.length !== r.length && (t = !0), a[n] = u
                                    })), r[i] = a, r
                                }), {});
                            return t ? r : this.numericRefinements
                        }
                    },
                    addFacet: function(e) {
                        return this.isConjunctiveFacet(e) ? this : this.setQueryParameters({
                            facets: this.facets.concat([e])
                        })
                    },
                    addDisjunctiveFacet: function(e) {
                        return this.isDisjunctiveFacet(e) ? this : this.setQueryParameters({
                            disjunctiveFacets: this.disjunctiveFacets.concat([e])
                        })
                    },
                    addHierarchicalFacet: function(e) {
                        if (this.isHierarchicalFacet(e.name)) throw new Error("Cannot declare two hierarchical facets with the same name: `" + e.name + "`");
                        return this.setQueryParameters({
                            hierarchicalFacets: this.hierarchicalFacets.concat([e])
                        })
                    },
                    addFacetRefinement: function(e, t) {
                        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                        return f.isRefined(this.facetsRefinements, e, t) ? this : this.setQueryParameters({
                            facetsRefinements: f.addRefinement(this.facetsRefinements, e, t)
                        })
                    },
                    addExcludeRefinement: function(e, t) {
                        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                        return f.isRefined(this.facetsExcludes, e, t) ? this : this.setQueryParameters({
                            facetsExcludes: f.addRefinement(this.facetsExcludes, e, t)
                        })
                    },
                    addDisjunctiveFacetRefinement: function(e, t) {
                        if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                        return f.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this : this.setQueryParameters({
                            disjunctiveFacetsRefinements: f.addRefinement(this.disjunctiveFacetsRefinements, e, t)
                        })
                    },
                    addTagRefinement: function(e) {
                        if (this.isTagRefined(e)) return this;
                        var t = {
                            tagRefinements: this.tagRefinements.concat(e)
                        };
                        return this.setQueryParameters(t)
                    },
                    removeFacet: function(e) {
                        return this.isConjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                            facets: this.facets.filter((function(t) {
                                return t !== e
                            }))
                        }) : this
                    },
                    removeDisjunctiveFacet: function(e) {
                        return this.isDisjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                            disjunctiveFacets: this.disjunctiveFacets.filter((function(t) {
                                return t !== e
                            }))
                        }) : this
                    },
                    removeHierarchicalFacet: function(e) {
                        return this.isHierarchicalFacet(e) ? this.clearRefinements(e).setQueryParameters({
                            hierarchicalFacets: this.hierarchicalFacets.filter((function(t) {
                                return t.name !== e
                            }))
                        }) : this
                    },
                    removeFacetRefinement: function(e, t) {
                        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                        return f.isRefined(this.facetsRefinements, e, t) ? this.setQueryParameters({
                            facetsRefinements: f.removeRefinement(this.facetsRefinements, e, t)
                        }) : this
                    },
                    removeExcludeRefinement: function(e, t) {
                        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                        return f.isRefined(this.facetsExcludes, e, t) ? this.setQueryParameters({
                            facetsExcludes: f.removeRefinement(this.facetsExcludes, e, t)
                        }) : this
                    },
                    removeDisjunctiveFacetRefinement: function(e, t) {
                        if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                        return f.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this.setQueryParameters({
                            disjunctiveFacetsRefinements: f.removeRefinement(this.disjunctiveFacetsRefinements, e, t)
                        }) : this
                    },
                    removeTagRefinement: function(e) {
                        if (!this.isTagRefined(e)) return this;
                        var t = {
                            tagRefinements: this.tagRefinements.filter((function(t) {
                                return t !== e
                            }))
                        };
                        return this.setQueryParameters(t)
                    },
                    toggleRefinement: function(e, t) {
                        return this.toggleFacetRefinement(e, t)
                    },
                    toggleFacetRefinement: function(e, t) {
                        if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t);
                        if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t);
                        if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t);
                        throw new Error("Cannot refine the undeclared facet " + e + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets")
                    },
                    toggleConjunctiveFacetRefinement: function(e, t) {
                        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                        return this.setQueryParameters({
                            facetsRefinements: f.toggleRefinement(this.facetsRefinements, e, t)
                        })
                    },
                    toggleExcludeFacetRefinement: function(e, t) {
                        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                        return this.setQueryParameters({
                            facetsExcludes: f.toggleRefinement(this.facetsExcludes, e, t)
                        })
                    },
                    toggleDisjunctiveFacetRefinement: function(e, t) {
                        if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                        return this.setQueryParameters({
                            disjunctiveFacetsRefinements: f.toggleRefinement(this.disjunctiveFacetsRefinements, e, t)
                        })
                    },
                    toggleHierarchicalFacetRefinement: function(e, t) {
                        if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
                        var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                            i = {};
                        return void 0 !== this.hierarchicalFacetsRefinements[e] && this.hierarchicalFacetsRefinements[e].length > 0 && (this.hierarchicalFacetsRefinements[e][0] === t || 0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + n)) ? -1 === t.indexOf(n) ? i[e] = [] : i[e] = [t.slice(0, t.lastIndexOf(n))] : i[e] = [t], this.setQueryParameters({
                            hierarchicalFacetsRefinements: r({}, i, this.hierarchicalFacetsRefinements)
                        })
                    },
                    addHierarchicalFacetRefinement: function(e, t) {
                        if (this.isHierarchicalFacetRefined(e)) throw new Error(e + " is already refined.");
                        if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
                        var n = {};
                        return n[e] = [t], this.setQueryParameters({
                            hierarchicalFacetsRefinements: r({}, n, this.hierarchicalFacetsRefinements)
                        })
                    },
                    removeHierarchicalFacetRefinement: function(e) {
                        if (!this.isHierarchicalFacetRefined(e)) return this;
                        var t = {};
                        return t[e] = [], this.setQueryParameters({
                            hierarchicalFacetsRefinements: r({}, t, this.hierarchicalFacetsRefinements)
                        })
                    },
                    toggleTagRefinement: function(e) {
                        return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e)
                    },
                    isDisjunctiveFacet: function(e) {
                        return this.disjunctiveFacets.indexOf(e) > -1
                    },
                    isHierarchicalFacet: function(e) {
                        return void 0 !== this.getHierarchicalFacetByName(e)
                    },
                    isConjunctiveFacet: function(e) {
                        return this.facets.indexOf(e) > -1
                    },
                    isFacetRefined: function(e, t) {
                        return !!this.isConjunctiveFacet(e) && f.isRefined(this.facetsRefinements, e, t)
                    },
                    isExcludeRefined: function(e, t) {
                        return !!this.isConjunctiveFacet(e) && f.isRefined(this.facetsExcludes, e, t)
                    },
                    isDisjunctiveFacetRefined: function(e, t) {
                        return !!this.isDisjunctiveFacet(e) && f.isRefined(this.disjunctiveFacetsRefinements, e, t)
                    },
                    isHierarchicalFacetRefined: function(e, t) {
                        if (!this.isHierarchicalFacet(e)) return !1;
                        var n = this.getHierarchicalRefinement(e);
                        return t ? -1 !== n.indexOf(t) : n.length > 0
                    },
                    isNumericRefined: function(e, t, n) {
                        if (void 0 === n && void 0 === t) return Boolean(this.numericRefinements[e]);
                        var r = this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t];
                        if (void 0 === n || !r) return r;
                        var o, a, u = l(n),
                            c = void 0 !== (o = this.numericRefinements[e][t], a = u, i(o, (function(e) {
                                return p(e, a)
                            })));
                        return r && c
                    },
                    isTagRefined: function(e) {
                        return -1 !== this.tagRefinements.indexOf(e)
                    },
                    getRefinedDisjunctiveFacets: function() {
                        var e = this,
                            t = o(Object.keys(this.numericRefinements).filter((function(t) {
                                return Object.keys(e.numericRefinements[t]).length > 0
                            })), this.disjunctiveFacets);
                        return Object.keys(this.disjunctiveFacetsRefinements).filter((function(t) {
                            return e.disjunctiveFacetsRefinements[t].length > 0
                        })).concat(t).concat(this.getRefinedHierarchicalFacets()).sort()
                    },
                    getRefinedHierarchicalFacets: function() {
                        var e = this;
                        return o(this.hierarchicalFacets.map((function(e) {
                            return e.name
                        })), Object.keys(this.hierarchicalFacetsRefinements).filter((function(t) {
                            return e.hierarchicalFacetsRefinements[t].length > 0
                        }))).sort()
                    },
                    getUnrefinedDisjunctiveFacets: function() {
                        var e = this.getRefinedDisjunctiveFacets();
                        return this.disjunctiveFacets.filter((function(t) {
                            return -1 === e.indexOf(t)
                        }))
                    },
                    managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "hierarchicalFacets", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacetsRefinements"],
                    getQueryParams: function() {
                        var e = this.managedParameters,
                            t = {},
                            n = this;
                        return Object.keys(this).forEach((function(r) {
                            var i = n[r]; - 1 === e.indexOf(r) && void 0 !== i && (t[r] = i)
                        })), t
                    },
                    setQueryParameter: function(e, t) {
                        if (this[e] === t) return this;
                        var n = {};
                        return n[e] = t, this.setQueryParameters(n)
                    },
                    setQueryParameters: function(e) {
                        if (!e) return this;
                        var t = d.validate(this, e);
                        if (t) throw t;
                        var n = this,
                            r = d._parseNumbers(e),
                            i = Object.keys(this).reduce((function(e, t) {
                                return e[t] = n[t], e
                            }), {}),
                            o = Object.keys(r).reduce((function(e, t) {
                                var n = void 0 !== e[t],
                                    i = void 0 !== r[t];
                                return n && !i ? c(e, [t]) : (i && (e[t] = r[t]), e)
                            }), i);
                        return new this.constructor(o)
                    },
                    resetPage: function() {
                        return void 0 === this.page ? this : this.setPage(0)
                    },
                    _getHierarchicalFacetSortBy: function(e) {
                        return e.sortBy || ["isRefined:desc", "name:asc"]
                    },
                    _getHierarchicalFacetSeparator: function(e) {
                        return e.separator || " > "
                    },
                    _getHierarchicalRootPath: function(e) {
                        return e.rootPath || null
                    },
                    _getHierarchicalShowParentLevel: function(e) {
                        return "boolean" !== typeof e.showParentLevel || e.showParentLevel
                    },
                    getHierarchicalFacetByName: function(e) {
                        return i(this.hierarchicalFacets, (function(t) {
                            return t.name === e
                        }))
                    },
                    getHierarchicalFacetBreadcrumb: function(e) {
                        if (!this.isHierarchicalFacet(e)) return [];
                        var t = this.getHierarchicalRefinement(e)[0];
                        if (!t) return [];
                        var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e));
                        return t.split(n).map((function(e) {
                            return e.trim()
                        }))
                    },
                    toString: function() {
                        return JSON.stringify(this, null, 2)
                    }
                }, e.exports = d
            },
            760: (e, t, n) => {
                "use strict";
                e.exports = function(e) {
                    return function(t, n) {
                        var r = e.hierarchicalFacets[n],
                            l = e.hierarchicalFacetsRefinements[r.name] && e.hierarchicalFacetsRefinements[r.name][0] || "",
                            s = e._getHierarchicalFacetSeparator(r),
                            f = e._getHierarchicalRootPath(r),
                            p = e._getHierarchicalShowParentLevel(r),
                            d = o(e._getHierarchicalFacetSortBy(r)),
                            h = t.every((function(e) {
                                return e.exhaustive
                            })),
                            m = function(e, t, n, r, o) {
                                return function(l, s, f) {
                                    var p = l;
                                    if (f > 0) {
                                        var d = 0;
                                        for (p = l; d < f;) {
                                            var h = p && Array.isArray(p.data) ? p.data : [];
                                            p = i(h, (function(e) {
                                                return e.isRefined
                                            })), d++
                                        }
                                    }
                                    if (p) {
                                        var m = Object.keys(s.data).map((function(e) {
                                            return [e, s.data[e]]
                                        })).filter((function(e) {
                                            return function(e, t, n, r, i, o) {
                                                if (i && (0 !== e.indexOf(i) || i === e)) return !1;
                                                return !i && -1 === e.indexOf(r) || i && e.split(r).length - i.split(r).length === 1 || -1 === e.indexOf(r) && -1 === n.indexOf(r) || 0 === n.indexOf(e) || 0 === e.indexOf(t + r) && (o || 0 === e.indexOf(n))
                                            }(e[0], p.path || n, o, t, n, r)
                                        }));
                                        p.data = a(m.map((function(e) {
                                            var n = e[0];
                                            return function(e, t, n, r, i) {
                                                var o = t.split(n);
                                                return {
                                                    name: o[o.length - 1].trim(),
                                                    path: t,
                                                    escapedValue: u(t),
                                                    count: e,
                                                    isRefined: r === t || 0 === r.indexOf(t + n),
                                                    exhaustive: i,
                                                    data: null
                                                }
                                            }(e[1], n, t, c(o), s.exhaustive)
                                        })), e[0], e[1])
                                    }
                                    return l
                                }
                            }(d, s, f, p, l),
                            y = t;
                        return f && (y = t.slice(f.split(s).length)), y.reduce(m, {
                            name: e.hierarchicalFacets[n].name,
                            count: null,
                            isRefined: !0,
                            path: null,
                            escapedValue: null,
                            exhaustive: h,
                            data: null
                        })
                    }
                };
                var r = n(908),
                    i = n(756),
                    o = n(764),
                    a = n(106),
                    u = r.escapeFacetValue,
                    c = r.unescapeFacetValue
            },
            724: (e, t, n) => {
                "use strict";
                var r = n(274),
                    i = n(639),
                    o = n(908),
                    a = n(756),
                    u = n(142),
                    c = n(764),
                    l = n(631),
                    s = n(106),
                    f = o.escapeFacetValue,
                    p = o.unescapeFacetValue,
                    d = n(760);

                function h(e) {
                    var t = {};
                    return e.forEach((function(e, n) {
                        t[e] = n
                    })), t
                }

                function m(e, t, n) {
                    t && t[n] && (e.stats = t[n])
                }

                function y(e, t, n) {
                    var o = t[0];
                    this._rawResults = t;
                    var c = this;
                    Object.keys(o).forEach((function(e) {
                        c[e] = o[e]
                    })), Object.keys(n || {}).forEach((function(e) {
                        c[e] = n[e]
                    })), this.processingTimeMS = t.reduce((function(e, t) {
                        return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS
                    }), 0), this.disjunctiveFacets = [], this.hierarchicalFacets = e.hierarchicalFacets.map((function() {
                        return []
                    })), this.facets = [];
                    var s = e.getRefinedDisjunctiveFacets(),
                        f = h(e.facets),
                        y = h(e.disjunctiveFacets),
                        v = 1,
                        g = o.facets || {};
                    Object.keys(g).forEach((function(t) {
                        var n, r, i = g[t],
                            l = (n = e.hierarchicalFacets, r = t, a(n, (function(e) {
                                return (e.attributes || []).indexOf(r) > -1
                            })));
                        if (l) {
                            var s = l.attributes.indexOf(t),
                                p = u(e.hierarchicalFacets, (function(e) {
                                    return e.name === l.name
                                }));
                            c.hierarchicalFacets[p][s] = {
                                attribute: t,
                                data: i,
                                exhaustive: o.exhaustiveFacetsCount
                            }
                        } else {
                            var d, h = -1 !== e.disjunctiveFacets.indexOf(t),
                                v = -1 !== e.facets.indexOf(t);
                            h && (d = y[t], c.disjunctiveFacets[d] = {
                                name: t,
                                data: i,
                                exhaustive: o.exhaustiveFacetsCount
                            }, m(c.disjunctiveFacets[d], o.facets_stats, t)), v && (d = f[t], c.facets[d] = {
                                name: t,
                                data: i,
                                exhaustive: o.exhaustiveFacetsCount
                            }, m(c.facets[d], o.facets_stats, t))
                        }
                    })), this.hierarchicalFacets = r(this.hierarchicalFacets), s.forEach((function(n) {
                        var r = t[v],
                            a = r && r.facets ? r.facets : {},
                            s = e.getHierarchicalFacetByName(n);
                        Object.keys(a).forEach((function(t) {
                            var n, f = a[t];
                            if (s) {
                                n = u(e.hierarchicalFacets, (function(e) {
                                    return e.name === s.name
                                }));
                                var d = u(c.hierarchicalFacets[n], (function(e) {
                                    return e.attribute === t
                                }));
                                if (-1 === d) return;
                                c.hierarchicalFacets[n][d].data = l({}, c.hierarchicalFacets[n][d].data, f)
                            } else {
                                n = y[t];
                                var h = o.facets && o.facets[t] || {};
                                c.disjunctiveFacets[n] = {
                                    name: t,
                                    data: i({}, f, h),
                                    exhaustive: r.exhaustiveFacetsCount
                                }, m(c.disjunctiveFacets[n], r.facets_stats, t), e.disjunctiveFacetsRefinements[t] && e.disjunctiveFacetsRefinements[t].forEach((function(r) {
                                    !c.disjunctiveFacets[n].data[r] && e.disjunctiveFacetsRefinements[t].indexOf(p(r)) > -1 && (c.disjunctiveFacets[n].data[r] = 0)
                                }))
                            }
                        })), v++
                    })), e.getRefinedHierarchicalFacets().forEach((function(n) {
                        var r = e.getHierarchicalFacetByName(n),
                            o = e._getHierarchicalFacetSeparator(r),
                            a = e.getHierarchicalRefinement(n);
                        0 === a.length || a[0].split(o).length < 2 || t.slice(v).forEach((function(t) {
                            var n = t && t.facets ? t.facets : {};
                            Object.keys(n).forEach((function(t) {
                                var l = n[t],
                                    s = u(e.hierarchicalFacets, (function(e) {
                                        return e.name === r.name
                                    })),
                                    f = u(c.hierarchicalFacets[s], (function(e) {
                                        return e.attribute === t
                                    }));
                                if (-1 !== f) {
                                    var p = {};
                                    if (a.length > 0) {
                                        var d = a[0].split(o)[0];
                                        p[d] = c.hierarchicalFacets[s][f].data[d]
                                    }
                                    c.hierarchicalFacets[s][f].data = i(p, l, c.hierarchicalFacets[s][f].data)
                                }
                            })), v++
                        }))
                    })), Object.keys(e.facetsExcludes).forEach((function(t) {
                        var n = e.facetsExcludes[t],
                            r = f[t];
                        c.facets[r] = {
                            name: t,
                            data: g[t],
                            exhaustive: o.exhaustiveFacetsCount
                        }, n.forEach((function(e) {
                            c.facets[r] = c.facets[r] || {
                                name: t
                            }, c.facets[r].data = c.facets[r].data || {}, c.facets[r].data[e] = 0
                        }))
                    })), this.hierarchicalFacets = this.hierarchicalFacets.map(d(e)), this.facets = r(this.facets), this.disjunctiveFacets = r(this.disjunctiveFacets), this._state = e
                }

                function v(e, t) {
                    function n(e) {
                        return e.name === t
                    }
                    if (e._state.isConjunctiveFacet(t)) {
                        var r = a(e.facets, n);
                        return r ? Object.keys(r.data).map((function(n) {
                            var i = f(n);
                            return {
                                name: n,
                                escapedValue: i,
                                count: r.data[n],
                                isRefined: e._state.isFacetRefined(t, i),
                                isExcluded: e._state.isExcludeRefined(t, n)
                            }
                        })) : []
                    }
                    if (e._state.isDisjunctiveFacet(t)) {
                        var i = a(e.disjunctiveFacets, n);
                        return i ? Object.keys(i.data).map((function(n) {
                            var r = f(n);
                            return {
                                name: n,
                                escapedValue: r,
                                count: i.data[n],
                                isRefined: e._state.isDisjunctiveFacetRefined(t, r)
                            }
                        })) : []
                    }
                    if (e._state.isHierarchicalFacet(t)) {
                        var o = a(e.hierarchicalFacets, n);
                        if (!o) return o;
                        var u = e._state.getHierarchicalFacetByName(t),
                            c = e._state._getHierarchicalFacetSeparator(u),
                            l = p(e._state.getHierarchicalRefinement(t)[0] || "");
                        0 === l.indexOf(u.rootPath) && (l = l.replace(u.rootPath + c, ""));
                        var s = l.split(c);
                        return s.unshift(t), g(o, s, 0), o
                    }
                }

                function g(e, t, n) {
                    e.isRefined = e.name === t[n], e.data && e.data.forEach((function(e) {
                        g(e, t, n + 1)
                    }))
                }

                function b(e, t, n, r) {
                    if (r = r || 0, Array.isArray(t)) return e(t, n[r]);
                    if (!t.data || 0 === t.data.length) return t;
                    var o = t.data.map((function(t) {
                            return b(e, t, n, r + 1)
                        })),
                        a = e(o, n[r]);
                    return i({
                        data: a
                    }, t)
                }

                function w(e, t) {
                    var n = a(e, (function(e) {
                        return e.name === t
                    }));
                    return n && n.stats
                }

                function S(e, t, n, r, i) {
                    var o = a(i, (function(e) {
                            return e.name === n
                        })),
                        u = o && o.data && o.data[r] ? o.data[r] : 0,
                        c = o && o.exhaustive || !1;
                    return {
                        type: t,
                        attributeName: n,
                        name: r,
                        count: u,
                        exhaustive: c
                    }
                }
                y.prototype.getFacetByName = function(e) {
                    function t(t) {
                        return t.name === e
                    }
                    return a(this.facets, t) || a(this.disjunctiveFacets, t) || a(this.hierarchicalFacets, t)
                }, y.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"], y.prototype.getFacetValues = function(e, t) {
                    var n = v(this, e);
                    if (n) {
                        var r, o = i({}, t, {
                                sortBy: y.DEFAULT_SORT,
                                facetOrdering: !(t && t.sortBy)
                            }),
                            a = this;
                        if (Array.isArray(n)) r = [e];
                        else r = a._state.getHierarchicalFacetByName(n.name).attributes;
                        return b((function(e, t) {
                            if (o.facetOrdering) {
                                var n = function(e, t) {
                                    return e.renderingContent && e.renderingContent.facetOrdering && e.renderingContent.facetOrdering.values && e.renderingContent.facetOrdering.values[t]
                                }(a, t);
                                if (n) return function(e, t) {
                                    var n = [],
                                        r = [],
                                        i = (t.order || []).reduce((function(e, t, n) {
                                            return e[t] = n, e
                                        }), {});
                                    e.forEach((function(e) {
                                        var t = e.path || e.name;
                                        void 0 !== i[t] ? n[i[t]] = e : r.push(e)
                                    })), n = n.filter((function(e) {
                                        return e
                                    }));
                                    var o, a = t.sortRemainingBy;
                                    return "hidden" === a ? n : (o = "alpha" === a ? [
                                        ["path", "name"],
                                        ["asc", "asc"]
                                    ] : [
                                        ["count"],
                                        ["desc"]
                                    ], n.concat(s(r, o[0], o[1])))
                                }(e, n)
                            }
                            if (Array.isArray(o.sortBy)) {
                                var r = c(o.sortBy, y.DEFAULT_SORT);
                                return s(e, r[0], r[1])
                            }
                            if ("function" === typeof o.sortBy) return function(e, t) {
                                return t.sort(e)
                            }(o.sortBy, e);
                            throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function")
                        }), n, r)
                    }
                }, y.prototype.getFacetStats = function(e) {
                    return this._state.isConjunctiveFacet(e) ? w(this.facets, e) : this._state.isDisjunctiveFacet(e) ? w(this.disjunctiveFacets, e) : void 0
                }, y.prototype.getRefinements = function() {
                    var e = this._state,
                        t = this,
                        n = [];
                    return Object.keys(e.facetsRefinements).forEach((function(r) {
                        e.facetsRefinements[r].forEach((function(i) {
                            n.push(S(e, "facet", r, i, t.facets))
                        }))
                    })), Object.keys(e.facetsExcludes).forEach((function(r) {
                        e.facetsExcludes[r].forEach((function(i) {
                            n.push(S(e, "exclude", r, i, t.facets))
                        }))
                    })), Object.keys(e.disjunctiveFacetsRefinements).forEach((function(r) {
                        e.disjunctiveFacetsRefinements[r].forEach((function(i) {
                            n.push(S(e, "disjunctive", r, i, t.disjunctiveFacets))
                        }))
                    })), Object.keys(e.hierarchicalFacetsRefinements).forEach((function(r) {
                        e.hierarchicalFacetsRefinements[r].forEach((function(i) {
                            n.push(function(e, t, n, r) {
                                var i = e.getHierarchicalFacetByName(t),
                                    o = e._getHierarchicalFacetSeparator(i),
                                    u = n.split(o),
                                    c = a(r, (function(e) {
                                        return e.name === t
                                    })),
                                    l = u.reduce((function(e, t) {
                                        var n = e && a(e.data, (function(e) {
                                            return e.name === t
                                        }));
                                        return void 0 !== n ? n : e
                                    }), c),
                                    s = l && l.count || 0,
                                    f = l && l.exhaustive || !1,
                                    p = l && l.path || "";
                                return {
                                    type: "hierarchical",
                                    attributeName: t,
                                    name: p,
                                    count: s,
                                    exhaustive: f
                                }
                            }(e, r, i, t.hierarchicalFacets))
                        }))
                    })), Object.keys(e.numericRefinements).forEach((function(t) {
                        var r = e.numericRefinements[t];
                        Object.keys(r).forEach((function(e) {
                            r[e].forEach((function(r) {
                                n.push({
                                    type: "numeric",
                                    attributeName: t,
                                    name: r,
                                    numericValue: r,
                                    operator: e
                                })
                            }))
                        }))
                    })), e.tagRefinements.forEach((function(e) {
                        n.push({
                            type: "tag",
                            attributeName: "_tags",
                            name: e
                        })
                    })), n
                }, e.exports = y
            },
            970: (e, t, n) => {
                "use strict";
                var r = n(532),
                    i = n(923),
                    o = n(908).escapeFacetValue,
                    a = n(211),
                    u = n(631),
                    c = n(642),
                    l = n(658),
                    s = n(389),
                    f = n(250),
                    p = n(724),
                    d = n(893);

                function h(e, t, n) {
                    "function" === typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + d + ")"), this.setClient(e);
                    var r = n || {};
                    r.index = t, this.state = f.make(r), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0
                }

                function m(e) {
                    if (e < 0) throw new Error("Page requested below 0.");
                    return this._change({
                        state: this.state.setPage(e),
                        isPageReset: !1
                    }), this
                }

                function y() {
                    return this.state.page
                }
                a(h, r), h.prototype.search = function() {
                    return this._search({
                        onlyWithDerivedHelpers: !1
                    }), this
                }, h.prototype.searchOnlyWithDerivedHelpers = function() {
                    return this._search({
                        onlyWithDerivedHelpers: !0
                    }), this
                }, h.prototype.getQuery = function() {
                    var e = this.state;
                    return s._getHitsSearchParams(e)
                }, h.prototype.searchOnce = function(e, t) {
                    var n = e ? this.state.setQueryParameters(e) : this.state,
                        r = s._getQueries(n.index, n),
                        i = this;
                    if (this._currentNbQueries++, this.emit("searchOnce", {
                            state: n
                        }), !t) return this.client.search(r).then((function(e) {
                        return i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), {
                            content: new p(n, e.results),
                            state: n,
                            _originalResponse: e
                        }
                    }), (function(e) {
                        throw i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), e
                    }));
                    this.client.search(r).then((function(e) {
                        i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), t(null, new p(n, e.results), n)
                    })).catch((function(e) {
                        i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), t(e, null, n)
                    }))
                }, h.prototype.findAnswers = function(e) {
                    console.warn("[algoliasearch-helper] answers is no longer supported");
                    var t = this.state,
                        n = this.derivedHelpers[0];
                    if (!n) return Promise.resolve([]);
                    var r = n.getModifiedState(t),
                        i = u({
                            attributesForPrediction: e.attributesForPrediction,
                            nbHits: e.nbHits
                        }, {
                            params: l(s._getHitsSearchParams(r), ["attributesToSnippet", "hitsPerPage", "restrictSearchableAttributes", "snippetEllipsisText"])
                        }),
                        o = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
                    if ("function" !== typeof this.client.initIndex) throw new Error(o);
                    var a = this.client.initIndex(r.index);
                    if ("function" !== typeof a.findAnswers) throw new Error(o);
                    return a.findAnswers(r.query, e.queryLanguages, i)
                }, h.prototype.searchForFacetValues = function(e, t, n, r) {
                    var i = "function" === typeof this.client.searchForFacetValues,
                        a = "function" === typeof this.client.initIndex;
                    if (!i && !a && "function" !== typeof this.client.search) throw new Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
                    var u = this.state.setQueryParameters(r || {}),
                        c = u.isDisjunctiveFacet(e),
                        l = s.getSearchForFacetQuery(e, t, n, u);
                    this._currentNbQueries++;
                    var f, p = this;
                    return i ? f = this.client.searchForFacetValues([{
                        indexName: u.index,
                        params: l
                    }]) : a ? f = this.client.initIndex(u.index).searchForFacetValues(l) : (delete l.facetName, f = this.client.search([{
                        type: "facet",
                        facet: e,
                        indexName: u.index,
                        params: l
                    }]).then((function(e) {
                        return e.results[0]
                    }))), this.emit("searchForFacetValues", {
                        state: u,
                        facet: e,
                        query: t
                    }), f.then((function(t) {
                        return p._currentNbQueries--, 0 === p._currentNbQueries && p.emit("searchQueueEmpty"), (t = Array.isArray(t) ? t[0] : t).facetHits.forEach((function(t) {
                            t.escapedValue = o(t.value), t.isRefined = c ? u.isDisjunctiveFacetRefined(e, t.escapedValue) : u.isFacetRefined(e, t.escapedValue)
                        })), t
                    }), (function(e) {
                        throw p._currentNbQueries--, 0 === p._currentNbQueries && p.emit("searchQueueEmpty"), e
                    }))
                }, h.prototype.setQuery = function(e) {
                    return this._change({
                        state: this.state.resetPage().setQuery(e),
                        isPageReset: !0
                    }), this
                }, h.prototype.clearRefinements = function(e) {
                    return this._change({
                        state: this.state.resetPage().clearRefinements(e),
                        isPageReset: !0
                    }), this
                }, h.prototype.clearTags = function() {
                    return this._change({
                        state: this.state.resetPage().clearTags(),
                        isPageReset: !0
                    }), this
                }, h.prototype.addDisjunctiveFacetRefinement = function(e, t) {
                    return this._change({
                        state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
                        isPageReset: !0
                    }), this
                }, h.prototype.addDisjunctiveRefine = function() {
                    return this.addDisjunctiveFacetRefinement.apply(this, arguments)
                }, h.prototype.addHierarchicalFacetRefinement = function(e, t) {
                    return this._change({
                        state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
                        isPageReset: !0
                    }), this
                }, h.prototype.addNumericRefinement = function(e, t, n) {
                    return this._change({
                        state: this.state.resetPage().addNumericRefinement(e, t, n),
                        isPageReset: !0
                    }), this
                }, h.prototype.addFacetRefinement = function(e, t) {
                    return this._change({
                        state: this.state.resetPage().addFacetRefinement(e, t),
                        isPageReset: !0
                    }), this
                }, h.prototype.addRefine = function() {
                    return this.addFacetRefinement.apply(this, arguments)
                }, h.prototype.addFacetExclusion = function(e, t) {
                    return this._change({
                        state: this.state.resetPage().addExcludeRefinement(e, t),
                        isPageReset: !0
                    }), this
                }, h.prototype.addExclude = function() {
                    return this.addFacetExclusion.apply(this, arguments)
                }, h.prototype.addTag = function(e) {
                    return this._change({
                        state: this.state.resetPage().addTagRefinement(e),
                        isPageReset: !0
                    }), this
                }, h.prototype.removeNumericRefinement = function(e, t, n) {
                    return this._change({
                        state: this.state.resetPage().removeNumericRefinement(e, t, n),
                        isPageReset: !0
                    }), this
                }, h.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
                    return this._change({
                        state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
                        isPageReset: !0
                    }), this
                }, h.prototype.removeDisjunctiveRefine = function() {
                    return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
                }, h.prototype.removeHierarchicalFacetRefinement = function(e) {
                    return this._change({
                        state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
                        isPageReset: !0
                    }), this
                }, h.prototype.removeFacetRefinement = function(e, t) {
                    return this._change({
                        state: this.state.resetPage().removeFacetRefinement(e, t),
                        isPageReset: !0
                    }), this
                }, h.prototype.removeRefine = function() {
                    return this.removeFacetRefinement.apply(this, arguments)
                }, h.prototype.removeFacetExclusion = function(e, t) {
                    return this._change({
                        state: this.state.resetPage().removeExcludeRefinement(e, t),
                        isPageReset: !0
                    }), this
                }, h.prototype.removeExclude = function() {
                    return this.removeFacetExclusion.apply(this, arguments)
                }, h.prototype.removeTag = function(e) {
                    return this._change({
                        state: this.state.resetPage().removeTagRefinement(e),
                        isPageReset: !0
                    }), this
                }, h.prototype.toggleFacetExclusion = function(e, t) {
                    return this._change({
                        state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
                        isPageReset: !0
                    }), this
                }, h.prototype.toggleExclude = function() {
                    return this.toggleFacetExclusion.apply(this, arguments)
                }, h.prototype.toggleRefinement = function(e, t) {
                    return this.toggleFacetRefinement(e, t)
                }, h.prototype.toggleFacetRefinement = function(e, t) {
                    return this._change({
                        state: this.state.resetPage().toggleFacetRefinement(e, t),
                        isPageReset: !0
                    }), this
                }, h.prototype.toggleRefine = function() {
                    return this.toggleFacetRefinement.apply(this, arguments)
                }, h.prototype.toggleTag = function(e) {
                    return this._change({
                        state: this.state.resetPage().toggleTagRefinement(e),
                        isPageReset: !0
                    }), this
                }, h.prototype.nextPage = function() {
                    var e = this.state.page || 0;
                    return this.setPage(e + 1)
                }, h.prototype.previousPage = function() {
                    var e = this.state.page || 0;
                    return this.setPage(e - 1)
                }, h.prototype.setCurrentPage = m, h.prototype.setPage = m, h.prototype.setIndex = function(e) {
                    return this._change({
                        state: this.state.resetPage().setIndex(e),
                        isPageReset: !0
                    }), this
                }, h.prototype.setQueryParameter = function(e, t) {
                    return this._change({
                        state: this.state.resetPage().setQueryParameter(e, t),
                        isPageReset: !0
                    }), this
                }, h.prototype.setState = function(e) {
                    return this._change({
                        state: f.make(e),
                        isPageReset: !1
                    }), this
                }, h.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
                    return this.state = new f(e), this
                }, h.prototype.hasRefinements = function(e) {
                    return !!c(this.state.getNumericRefinements(e)) || (this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e))
                }, h.prototype.isExcluded = function(e, t) {
                    return this.state.isExcludeRefined(e, t)
                }, h.prototype.isDisjunctiveRefined = function(e, t) {
                    return this.state.isDisjunctiveFacetRefined(e, t)
                }, h.prototype.hasTag = function(e) {
                    return this.state.isTagRefined(e)
                }, h.prototype.isTagRefined = function() {
                    return this.hasTagRefinements.apply(this, arguments)
                }, h.prototype.getIndex = function() {
                    return this.state.index
                }, h.prototype.getCurrentPage = y, h.prototype.getPage = y, h.prototype.getTags = function() {
                    return this.state.tagRefinements
                }, h.prototype.getRefinements = function(e) {
                    var t = [];
                    if (this.state.isConjunctiveFacet(e)) this.state.getConjunctiveRefinements(e).forEach((function(e) {
                        t.push({
                            value: e,
                            type: "conjunctive"
                        })
                    })), this.state.getExcludeRefinements(e).forEach((function(e) {
                        t.push({
                            value: e,
                            type: "exclude"
                        })
                    }));
                    else if (this.state.isDisjunctiveFacet(e)) {
                        this.state.getDisjunctiveRefinements(e).forEach((function(e) {
                            t.push({
                                value: e,
                                type: "disjunctive"
                            })
                        }))
                    }
                    var n = this.state.getNumericRefinements(e);
                    return Object.keys(n).forEach((function(e) {
                        var r = n[e];
                        t.push({
                            value: r,
                            operator: e,
                            type: "numeric"
                        })
                    })), t
                }, h.prototype.getNumericRefinement = function(e, t) {
                    return this.state.getNumericRefinement(e, t)
                }, h.prototype.getHierarchicalFacetBreadcrumb = function(e) {
                    return this.state.getHierarchicalFacetBreadcrumb(e)
                }, h.prototype._search = function(e) {
                    var t = this.state,
                        n = [],
                        r = [];
                    e.onlyWithDerivedHelpers || (r = s._getQueries(t.index, t), n.push({
                        state: t,
                        queriesCount: r.length,
                        helper: this
                    }), this.emit("search", {
                        state: t,
                        results: this.lastResults
                    }));
                    var i = this.derivedHelpers.map((function(e) {
                            var r = e.getModifiedState(t),
                                i = r.index ? s._getQueries(r.index, r) : [];
                            return n.push({
                                state: r,
                                queriesCount: i.length,
                                helper: e
                            }), e.emit("search", {
                                state: r,
                                results: e.lastResults
                            }), i
                        })),
                        o = Array.prototype.concat.apply(r, i),
                        a = this._queryId++;
                    if (this._currentNbQueries++, !o.length) return Promise.resolve({
                        results: []
                    }).then(this._dispatchAlgoliaResponse.bind(this, n, a));
                    try {
                        this.client.search(o).then(this._dispatchAlgoliaResponse.bind(this, n, a)).catch(this._dispatchAlgoliaError.bind(this, a))
                    } catch (u) {
                        this.emit("error", {
                            error: u
                        })
                    }
                }, h.prototype._dispatchAlgoliaResponse = function(e, t, n) {
                    if (!(t < this._lastQueryIdReceived)) {
                        this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
                        var r = n.results.slice();
                        e.forEach((function(e) {
                            var t = e.state,
                                n = e.queriesCount,
                                i = e.helper,
                                o = r.splice(0, n);
                            t.index ? (i.lastResults = new p(t, o), i.emit("result", {
                                results: i.lastResults,
                                state: t
                            })) : i.emit("result", {
                                results: null,
                                state: t
                            })
                        }))
                    }
                }, h.prototype._dispatchAlgoliaError = function(e, t) {
                    e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
                        error: t
                    }), 0 === this._currentNbQueries && this.emit("searchQueueEmpty"))
                }, h.prototype.containsRefinement = function(e, t, n, r) {
                    return e || 0 !== t.length || 0 !== n.length || 0 !== r.length
                }, h.prototype._hasDisjunctiveRefinements = function(e) {
                    return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0
                }, h.prototype._change = function(e) {
                    var t = e.state,
                        n = e.isPageReset;
                    t !== this.state && (this.state = t, this.emit("change", {
                        state: this.state,
                        results: this.lastResults,
                        isPageReset: n
                    }))
                }, h.prototype.clearCache = function() {
                    return this.client.clearCache && this.client.clearCache(), this
                }, h.prototype.setClient = function(e) {
                    return this.client === e || ("function" === typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + d + ")"), this.client = e), this
                }, h.prototype.getClient = function() {
                    return this.client
                }, h.prototype.derive = function(e) {
                    var t = new i(this, e);
                    return this.derivedHelpers.push(t), t
                }, h.prototype.detachDerivedHelper = function(e) {
                    var t = this.derivedHelpers.indexOf(e);
                    if (-1 === t) throw new Error("Derived helper already detached");
                    this.derivedHelpers.splice(t, 1)
                }, h.prototype.hasPendingRequests = function() {
                    return this._currentNbQueries > 0
                }, e.exports = h
            },
            274: e => {
                "use strict";
                e.exports = function(e) {
                    return Array.isArray(e) ? e.filter(Boolean) : []
                }
            },
            639: e => {
                "use strict";
                e.exports = function() {
                    return Array.prototype.slice.call(arguments).reduceRight((function(e, t) {
                        return Object.keys(Object(t)).forEach((function(n) {
                            void 0 !== t[n] && (void 0 !== e[n] && delete e[n], e[n] = t[n])
                        })), e
                    }), {})
                }
            },
            908: e => {
                "use strict";
                e.exports = {
                    escapeFacetValue: function(e) {
                        return "string" !== typeof e ? e : String(e).replace(/^-/, "\\-")
                    },
                    unescapeFacetValue: function(e) {
                        return "string" !== typeof e ? e : e.replace(/^\\-/, "-")
                    }
                }
            },
            756: e => {
                "use strict";
                e.exports = function(e, t) {
                    if (Array.isArray(e))
                        for (var n = 0; n < e.length; n++)
                            if (t(e[n])) return e[n]
                }
            },
            142: e => {
                "use strict";
                e.exports = function(e, t) {
                    if (!Array.isArray(e)) return -1;
                    for (var n = 0; n < e.length; n++)
                        if (t(e[n])) return n;
                    return -1
                }
            },
            764: (e, t, n) => {
                "use strict";
                var r = n(756);
                e.exports = function(e, t) {
                    var n = (t || []).map((function(e) {
                        return e.split(":")
                    }));
                    return e.reduce((function(e, t) {
                        var i = t.split(":"),
                            o = r(n, (function(e) {
                                return e[0] === i[0]
                            }));
                        return i.length > 1 || !o ? (e[0].push(i[0]), e[1].push(i[1]), e) : (e[0].push(o[0]), e[1].push(o[1]), e)
                    }), [
                        [],
                        []
                    ])
                }
            },
            211: e => {
                "use strict";
                e.exports = function(e, t) {
                    e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })
                }
            },
            458: e => {
                "use strict";
                e.exports = function(e, t) {
                    return e.filter((function(n, r) {
                        return t.indexOf(n) > -1 && e.indexOf(n) === r
                    }))
                }
            },
            631: e => {
                "use strict";

                function t(e) {
                    return "function" === typeof e || Array.isArray(e) || "[object Object]" === Object.prototype.toString.call(e)
                }

                function n(e, r) {
                    if (e === r) return e;
                    for (var i in r)
                        if (Object.prototype.hasOwnProperty.call(r, i) && "__proto__" !== i && "constructor" !== i) {
                            var o = r[i],
                                a = e[i];
                            "undefined" !== typeof a && "undefined" === typeof o || (t(a) && t(o) ? e[i] = n(a, o) : e[i] = "object" === typeof(u = o) && null !== u ? n(Array.isArray(u) ? [] : {}, u) : u)
                        }
                    var u;
                    return e
                }
                e.exports = function(e) {
                    t(e) || (e = {});
                    for (var r = 1, i = arguments.length; r < i; r++) {
                        var o = arguments[r];
                        t(o) && n(e, o)
                    }
                    return e
                }
            },
            642: e => {
                "use strict";
                e.exports = function(e) {
                    return e && Object.keys(e).length > 0
                }
            },
            658: e => {
                "use strict";
                e.exports = function(e, t) {
                    if (null === e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }
            },
            106: e => {
                "use strict";

                function t(e, t) {
                    if (e !== t) {
                        var n = void 0 !== e,
                            r = null === e,
                            i = void 0 !== t,
                            o = null === t;
                        if (!o && e > t || r && i || !n) return 1;
                        if (!r && e < t || o && n || !i) return -1
                    }
                    return 0
                }
                e.exports = function(e, n, r) {
                    if (!Array.isArray(e)) return [];
                    Array.isArray(r) || (r = []);
                    var i = e.map((function(e, t) {
                        return {
                            criteria: n.map((function(t) {
                                return e[t]
                            })),
                            index: t,
                            value: e
                        }
                    }));
                    return i.sort((function(e, n) {
                        for (var i = -1; ++i < e.criteria.length;) {
                            var o = t(e.criteria[i], n.criteria[i]);
                            if (o) return i >= r.length ? o : "desc" === r[i] ? -o : o
                        }
                        return e.index - n.index
                    })), i.map((function(e) {
                        return e.value
                    }))
                }
            },
            0: e => {
                "use strict";
                e.exports = function e(t) {
                    if ("number" === typeof t) return t;
                    if ("string" === typeof t) return parseFloat(t);
                    if (Array.isArray(t)) return t.map(e);
                    throw new Error("The value should be a number, a parsable string or an array of those.")
                }
            },
            389: (e, t, n) => {
                "use strict";
                var r = n(631);

                function i(e) {
                    return Object.keys(e).sort().reduce((function(t, n) {
                        return t[n] = e[n], t
                    }), {})
                }
                var o = {
                    _getQueries: function(e, t) {
                        var n = [];
                        return n.push({
                            indexName: e,
                            params: o._getHitsSearchParams(t)
                        }), t.getRefinedDisjunctiveFacets().forEach((function(r) {
                            n.push({
                                indexName: e,
                                params: o._getDisjunctiveFacetSearchParams(t, r)
                            })
                        })), t.getRefinedHierarchicalFacets().forEach((function(r) {
                            var i = t.getHierarchicalFacetByName(r),
                                a = t.getHierarchicalRefinement(r),
                                u = t._getHierarchicalFacetSeparator(i);
                            if (a.length > 0 && a[0].split(u).length > 1) {
                                var c = a[0].split(u).slice(0, -1).reduce((function(e, t, n) {
                                    return e.concat({
                                        attribute: i.attributes[n],
                                        value: 0 === n ? t : [e[e.length - 1].value, t].join(u)
                                    })
                                }), []);
                                c.forEach((function(r, a) {
                                    var u = o._getDisjunctiveFacetSearchParams(t, r.attribute, 0 === a);

                                    function l(e) {
                                        return i.attributes.some((function(t) {
                                            return t === e.split(":")[0]
                                        }))
                                    }
                                    var s = (u.facetFilters || []).reduce((function(e, t) {
                                            if (Array.isArray(t)) {
                                                var n = t.filter((function(e) {
                                                    return !l(e)
                                                }));
                                                n.length > 0 && e.push(n)
                                            }
                                            return "string" !== typeof t || l(t) || e.push(t), e
                                        }), []),
                                        f = c[a - 1];
                                    u.facetFilters = a > 0 ? s.concat(f.attribute + ":" + f.value) : s.length > 0 ? s : void 0, n.push({
                                        indexName: e,
                                        params: u
                                    })
                                }))
                            }
                        })), n
                    },
                    _getHitsSearchParams: function(e) {
                        var t = e.facets.concat(e.disjunctiveFacets).concat(o._getHitsHierarchicalFacetsAttributes(e)).sort(),
                            n = o._getFacetFilters(e),
                            a = o._getNumericFilters(e),
                            u = o._getTagFilters(e),
                            c = {
                                facets: t.indexOf("*") > -1 ? ["*"] : t,
                                tagFilters: u
                            };
                        return n.length > 0 && (c.facetFilters = n), a.length > 0 && (c.numericFilters = a), i(r({}, e.getQueryParams(), c))
                    },
                    _getDisjunctiveFacetSearchParams: function(e, t, n) {
                        var a = o._getFacetFilters(e, t, n),
                            u = o._getNumericFilters(e, t),
                            c = o._getTagFilters(e),
                            l = {
                                hitsPerPage: 0,
                                page: 0,
                                analytics: !1,
                                clickAnalytics: !1
                            };
                        c.length > 0 && (l.tagFilters = c);
                        var s = e.getHierarchicalFacetByName(t);
                        return l.facets = s ? o._getDisjunctiveHierarchicalFacetAttribute(e, s, n) : t, u.length > 0 && (l.numericFilters = u), a.length > 0 && (l.facetFilters = a), i(r({}, e.getQueryParams(), l))
                    },
                    _getNumericFilters: function(e, t) {
                        if (e.numericFilters) return e.numericFilters;
                        var n = [];
                        return Object.keys(e.numericRefinements).forEach((function(r) {
                            var i = e.numericRefinements[r] || {};
                            Object.keys(i).forEach((function(e) {
                                var o = i[e] || [];
                                t !== r && o.forEach((function(t) {
                                    if (Array.isArray(t)) {
                                        var i = t.map((function(t) {
                                            return r + e + t
                                        }));
                                        n.push(i)
                                    } else n.push(r + e + t)
                                }))
                            }))
                        })), n
                    },
                    _getTagFilters: function(e) {
                        return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",")
                    },
                    _getFacetFilters: function(e, t, n) {
                        var r = [],
                            i = e.facetsRefinements || {};
                        Object.keys(i).sort().forEach((function(e) {
                            (i[e] || []).sort().forEach((function(t) {
                                r.push(e + ":" + t)
                            }))
                        }));
                        var o = e.facetsExcludes || {};
                        Object.keys(o).sort().forEach((function(e) {
                            (o[e] || []).sort().forEach((function(t) {
                                r.push(e + ":-" + t)
                            }))
                        }));
                        var a = e.disjunctiveFacetsRefinements || {};
                        Object.keys(a).sort().forEach((function(e) {
                            var n = a[e] || [];
                            if (e !== t && n && 0 !== n.length) {
                                var i = [];
                                n.sort().forEach((function(t) {
                                    i.push(e + ":" + t)
                                })), r.push(i)
                            }
                        }));
                        var u = e.hierarchicalFacetsRefinements || {};
                        return Object.keys(u).sort().forEach((function(i) {
                            var o = (u[i] || [])[0];
                            if (void 0 !== o) {
                                var a, c, l = e.getHierarchicalFacetByName(i),
                                    s = e._getHierarchicalFacetSeparator(l),
                                    f = e._getHierarchicalRootPath(l);
                                if (t === i) {
                                    if (-1 === o.indexOf(s) || !f && !0 === n || f && f.split(s).length === o.split(s).length) return;
                                    f ? (c = f.split(s).length - 1, o = f) : (c = o.split(s).length - 2, o = o.slice(0, o.lastIndexOf(s))), a = l.attributes[c]
                                } else c = o.split(s).length - 1, a = l.attributes[c];
                                a && r.push([a + ":" + o])
                            }
                        })), r
                    },
                    _getHitsHierarchicalFacetsAttributes: function(e) {
                        return e.hierarchicalFacets.reduce((function(t, n) {
                            var r = e.getHierarchicalRefinement(n.name)[0];
                            if (!r) return t.push(n.attributes[0]), t;
                            var i = e._getHierarchicalFacetSeparator(n),
                                o = r.split(i).length,
                                a = n.attributes.slice(0, o + 1);
                            return t.concat(a)
                        }), [])
                    },
                    _getDisjunctiveHierarchicalFacetAttribute: function(e, t, n) {
                        var r = e._getHierarchicalFacetSeparator(t);
                        if (!0 === n) {
                            var i = e._getHierarchicalRootPath(t),
                                o = 0;
                            return i && (o = i.split(r).length), [t.attributes[o]]
                        }
                        var a = (e.getHierarchicalRefinement(t.name)[0] || "").split(r).length - 1;
                        return t.attributes.slice(0, a + 1)
                    },
                    getSearchForFacetQuery: function(e, t, n, a) {
                        var u = a.isDisjunctiveFacet(e) ? a.clearRefinements(e) : a,
                            c = {
                                facetQuery: t,
                                facetName: e
                            };
                        return "number" === typeof n && (c.maxFacetHits = n), i(r({}, o._getHitsSearchParams(u), c))
                    }
                };
                e.exports = o
            },
            193: e => {
                "use strict";
                e.exports = function(e) {
                    return null !== e && /^[a-zA-Z0-9_-]{1,64}$/.test(e)
                }
            },
            893: e => {
                "use strict";
                e.exports = "3.14.0"
            },
            153: (e, t, n) => {
                "use strict";
                var r = n(43),
                    i = Symbol.for("react.element"),
                    o = Symbol.for("react.fragment"),
                    a = Object.prototype.hasOwnProperty,
                    u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    c = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function l(e, t, n) {
                    var r, o = {},
                        l = null,
                        s = null;
                    for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (s = t.ref), t) a.call(t, r) && !c.hasOwnProperty(r) && (o[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
                    return {
                        $$typeof: i,
                        type: e,
                        key: l,
                        ref: s,
                        props: o,
                        _owner: u.current
                    }
                }
                t.jsx = l, t.jsxs = l
            },
            202: (e, t) => {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    i = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    a = Symbol.for("react.profiler"),
                    u = Symbol.for("react.provider"),
                    c = Symbol.for("react.context"),
                    l = Symbol.for("react.forward_ref"),
                    s = Symbol.for("react.suspense"),
                    f = Symbol.for("react.memo"),
                    p = Symbol.for("react.lazy"),
                    d = Symbol.iterator;
                var h = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    m = Object.assign,
                    y = {};

                function v(e, t, n) {
                    this.props = e, this.context = t, this.refs = y, this.updater = n || h
                }

                function g() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = y, this.updater = n || h
                }
                v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, v.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, g.prototype = v.prototype;
                var w = b.prototype = new g;
                w.constructor = b, m(w, v.prototype), w.isPureReactComponent = !0;
                var S = Array.isArray,
                    O = Object.prototype.hasOwnProperty,
                    P = {
                        current: null
                    },
                    _ = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function j(e, t, r) {
                    var i, o = {},
                        a = null,
                        u = null;
                    if (null != t)
                        for (i in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (a = "" + t.key), t) O.call(t, i) && !_.hasOwnProperty(i) && (o[i] = t[i]);
                    var c = arguments.length - 2;
                    if (1 === c) o.children = r;
                    else if (1 < c) {
                        for (var l = Array(c), s = 0; s < c; s++) l[s] = arguments[s + 2];
                        o.children = l
                    }
                    if (e && e.defaultProps)
                        for (i in c = e.defaultProps) void 0 === o[i] && (o[i] = c[i]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: a,
                        ref: u,
                        props: o,
                        _owner: P.current
                    }
                }

                function x(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }
                var k = /\/+/g;

                function E(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function R(e, t, i, o, a) {
                    var u = typeof e;
                    "undefined" !== u && "boolean" !== u || (e = null);
                    var c = !1;
                    if (null === e) c = !0;
                    else switch (u) {
                        case "string":
                        case "number":
                            c = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    c = !0
                            }
                    }
                    if (c) return a = a(c = e), e = "" === o ? "." + E(c, 0) : o, S(a) ? (i = "", null != e && (i = e.replace(k, "$&/") + "/"), R(a, t, i, "", (function(e) {
                        return e
                    }))) : null != a && (x(a) && (a = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(a, i + (!a.key || c && c.key === a.key ? "" : ("" + a.key).replace(k, "$&/") + "/") + e)), t.push(a)), 1;
                    if (c = 0, o = "" === o ? "." : o + ":", S(e))
                        for (var l = 0; l < e.length; l++) {
                            var s = o + E(u = e[l], l);
                            c += R(u, t, i, s, a)
                        } else if (s = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = d && e[d] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof s)
                            for (e = s.call(e), l = 0; !(u = e.next()).done;) c += R(u = u.value, t, i, s = o + E(u, l++), a);
                        else if ("object" === u) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return c
                }

                function C(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        i = 0;
                    return R(e, r, "", "", (function(e) {
                        return t.call(n, e, i++)
                    })), r
                }

                function I(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var F = {
                        current: null
                    },
                    N = {
                        transition: null
                    },
                    T = {
                        ReactCurrentDispatcher: F,
                        ReactCurrentBatchConfig: N,
                        ReactCurrentOwner: P
                    };

                function A() {
                    throw Error("act(...) is not supported in production builds of React.")
                }
                t.Children = {
                    map: C,
                    forEach: function(e, t, n) {
                        C(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return C(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return C(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!x(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = v, t.Fragment = i, t.Profiler = a, t.PureComponent = b, t.StrictMode = o, t.Suspense = s, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, t.act = A, t.cloneElement = function(e, t, r) {
                    if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var i = m({}, e.props),
                        o = e.key,
                        a = e.ref,
                        u = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (a = t.ref, u = P.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                        for (l in t) O.call(t, l) && !_.hasOwnProperty(l) && (i[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l])
                    }
                    var l = arguments.length - 2;
                    if (1 === l) i.children = r;
                    else if (1 < l) {
                        c = Array(l);
                        for (var s = 0; s < l; s++) c[s] = arguments[s + 2];
                        i.children = c
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: o,
                        ref: a,
                        props: i,
                        _owner: u
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: c,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: u,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = j, t.createFactory = function(e) {
                    var t = j.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: l,
                        render: e
                    }
                }, t.isValidElement = x, t.lazy = function(e) {
                    return {
                        $$typeof: p,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: I
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: f,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = N.transition;
                    N.transition = {};
                    try {
                        e()
                    } finally {
                        N.transition = t
                    }
                }, t.unstable_act = A, t.useCallback = function(e, t) {
                    return F.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return F.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return F.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return F.current.useEffect(e, t)
                }, t.useId = function() {
                    return F.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return F.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return F.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return F.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return F.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return F.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return F.current.useRef(e)
                }, t.useState = function(e) {
                    return F.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return F.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return F.current.useTransition()
                }, t.version = "18.3.1"
            },
            43: (e, t, n) => {
                "use strict";
                e.exports = n(202)
            },
            579: (e, t, n) => {
                "use strict";
                e.exports = n(153)
            },
            234: (e, t) => {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            i = e[r];
                        if (!(0 < o(i, t))) break e;
                        e[r] = t, e[n] = i, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function i(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, i = e.length, a = i >>> 1; r < a;) {
                            var u = 2 * (r + 1) - 1,
                                c = e[u],
                                l = u + 1,
                                s = e[l];
                            if (0 > o(c, n)) l < i && 0 > o(s, c) ? (e[r] = s, e[l] = n, r = l) : (e[r] = c, e[u] = n, r = u);
                            else {
                                if (!(l < i && 0 > o(s, n))) break e;
                                e[r] = s, e[l] = n, r = l
                            }
                        }
                    }
                    return t
                }

                function o(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var a = performance;
                    t.unstable_now = function() {
                        return a.now()
                    }
                } else {
                    var u = Date,
                        c = u.now();
                    t.unstable_now = function() {
                        return u.now() - c
                    }
                }
                var l = [],
                    s = [],
                    f = 1,
                    p = null,
                    d = 3,
                    h = !1,
                    m = !1,
                    y = !1,
                    v = "function" === typeof setTimeout ? setTimeout : null,
                    g = "function" === typeof clearTimeout ? clearTimeout : null,
                    b = "undefined" !== typeof setImmediate ? setImmediate : null;

                function w(e) {
                    for (var t = r(s); null !== t;) {
                        if (null === t.callback) i(s);
                        else {
                            if (!(t.startTime <= e)) break;
                            i(s), t.sortIndex = t.expirationTime, n(l, t)
                        }
                        t = r(s)
                    }
                }

                function S(e) {
                    if (y = !1, w(e), !m)
                        if (null !== r(l)) m = !0, N(O);
                        else {
                            var t = r(s);
                            null !== t && T(S, t.startTime - e)
                        }
                }

                function O(e, n) {
                    m = !1, y && (y = !1, g(x), x = -1), h = !0;
                    var o = d;
                    try {
                        for (w(n), p = r(l); null !== p && (!(p.expirationTime > n) || e && !R());) {
                            var a = p.callback;
                            if ("function" === typeof a) {
                                p.callback = null, d = p.priorityLevel;
                                var u = a(p.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof u ? p.callback = u : p === r(l) && i(l), w(n)
                            } else i(l);
                            p = r(l)
                        }
                        if (null !== p) var c = !0;
                        else {
                            var f = r(s);
                            null !== f && T(S, f.startTime - n), c = !1
                        }
                        return c
                    } finally {
                        p = null, d = o, h = !1
                    }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var P, _ = !1,
                    j = null,
                    x = -1,
                    k = 5,
                    E = -1;

                function R() {
                    return !(t.unstable_now() - E < k)
                }

                function C() {
                    if (null !== j) {
                        var e = t.unstable_now();
                        E = e;
                        var n = !0;
                        try {
                            n = j(!0, e)
                        } finally {
                            n ? P() : (_ = !1, j = null)
                        }
                    } else _ = !1
                }
                if ("function" === typeof b) P = function() {
                    b(C)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var I = new MessageChannel,
                        F = I.port2;
                    I.port1.onmessage = C, P = function() {
                        F.postMessage(null)
                    }
                } else P = function() {
                    v(C, 0)
                };

                function N(e) {
                    j = e, _ || (_ = !0, P())
                }

                function T(e, n) {
                    x = v((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    m || h || (m = !0, N(O))
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return d
                }, t.unstable_getFirstCallbackNode = function() {
                    return r(l)
                }, t.unstable_next = function(e) {
                    switch (d) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = d
                    }
                    var n = d;
                    d = t;
                    try {
                        return e()
                    } finally {
                        d = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = d;
                    d = e;
                    try {
                        return t()
                    } finally {
                        d = n
                    }
                }, t.unstable_scheduleCallback = function(e, i, o) {
                    var a = t.unstable_now();
                    switch ("object" === typeof o && null !== o ? o = "number" === typeof(o = o.delay) && 0 < o ? a + o : a : o = a, e) {
                        case 1:
                            var u = -1;
                            break;
                        case 2:
                            u = 250;
                            break;
                        case 5:
                            u = 1073741823;
                            break;
                        case 4:
                            u = 1e4;
                            break;
                        default:
                            u = 5e3
                    }
                    return e = {
                        id: f++,
                        callback: i,
                        priorityLevel: e,
                        startTime: o,
                        expirationTime: u = o + u,
                        sortIndex: -1
                    }, o > a ? (e.sortIndex = o, n(s, e), null === r(l) && e === r(s) && (y ? (g(x), x = -1) : y = !0, T(S, o - a))) : (e.sortIndex = u, n(l, e), m || h || (m = !0, N(O))), e
                }, t.unstable_shouldYield = R, t.unstable_wrapCallback = function(e) {
                    var t = d;
                    return function() {
                        var n = d;
                        d = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            d = n
                        }
                    }
                }
            },
            853: (e, t, n) => {
                "use strict";
                e.exports = n(234)
            },
            139: (e, t) => {
                var n;
                ! function() {
                    "use strict";
                    var r = {}.hasOwnProperty;

                    function i() {
                        for (var e = "", t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            n && (e = a(e, o(n)))
                        }
                        return e
                    }

                    function o(e) {
                        if ("string" === typeof e || "number" === typeof e) return e;
                        if ("object" !== typeof e) return "";
                        if (Array.isArray(e)) return i.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                        var t = "";
                        for (var n in e) r.call(e, n) && e[n] && (t = a(t, n));
                        return t
                    }

                    function a(e, t) {
                        return t ? e ? e + " " + t : e + t : e
                    }
                    e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
                        return i
                    }.apply(t, [])) || (e.exports = n)
                }()
            }
        },
        t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        var e = n(43),
            t = n(950),
            r = n(788),
            i = n.n(r),
            o = n(173),
            a = n.n(o),
            u = n(366),
            c = n.n(u),
            l = (0, e.createContext)({
                onInternalStateUpdate: function() {},
                createHrefForState: function() {
                    return "#"
                },
                onSearchForFacetValues: function() {},
                onSearchStateChange: function() {},
                onSearchParameters: function() {},
                store: {},
                widgetsManager: {},
                mainTargetedIndex: ""
            }),
            s = l.Consumer,
            f = l.Provider,
            p = (0, e.createContext)(void 0),
            d = p.Consumer,
            h = (p.Provider, n(244)),
            m = n.n(h);

        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(Object(n), !0).forEach((function(t) {
                    g(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function g(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== b(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== b(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === b(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function b(e) {
            return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, b(e)
        }
        var w = Object.prototype.hasOwnProperty,
            S = function(e, t) {
                if (e === t) return !0;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (var i = 0; i < n.length; i++)
                    if (!w.call(t, n[i]) || e[n[i]] !== t[n[i]]) return !1;
                return !0
            },
            O = Promise.resolve(),
            P = function(e) {
                O.then(e)
            },
            _ = function e(t) {
                return Object.keys(t).forEach((function(n) {
                    var r, i = t[n];
                    (function(e) {
                        return "object" === b(e) && null !== e && !Array.isArray(e)
                    })(i) && ((r = i) && Object.keys(r).length > 0 ? e(i) : delete t[n])
                })), t
            };

        function j(e, t) {
            if (null === e || void 0 === e) return {};
            for (var n = {}, r = Object.keys(e), i = 0; i < r.length; i++) {
                var o = r[i];
                t.indexOf(o) >= 0 || (n[o] = e[o])
            }
            return n
        }

        function x(e) {
            return e.replace(/^\\-/, "-")
        }
        var k = {
            highlightPreTag: "<ais-highlight-0000000000>",
            highlightPostTag: "</ais-highlight-0000000000>"
        };

        function E(e) {
            return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, E(e)
        }

        function R(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(n), !0).forEach((function(t) {
                    I(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function I(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== E(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== E(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === E(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function F(e) {
            return T(e) ? e.multiIndexContext.targetedIndex : e.ais.mainTargetedIndex
        }

        function N(e, t) {
            if (e.results) {
                if (e.results.hits) return e.results;
                var n = F(t);
                if (e.results[n]) return e.results[n]
            }
            return null
        }

        function T(e) {
            return e && e.multiIndexContext
        }

        function A(e, t, n, r, i) {
            if (T(n)) {
                var o = F(n);
                return i ? function(e, t, n, r, i) {
                    var o, a = r ? {
                            page: 1
                        } : void 0,
                        u = e.indices && e.indices[n] ? C(C({}, e.indices), {}, I({}, n, C(C({}, e.indices[n]), {}, (I(o = {}, i, C(C({}, e.indices[n][i]), t)), I(o, "page", 1), o)))) : C(C({}, e.indices), {}, I({}, n, C(I({}, i, t), a)));
                    return C(C({}, e), {}, {
                        indices: u
                    })
                }(e, t, o, r, i) : function(e, t, n, r) {
                    var i = r ? {
                            page: 1
                        } : void 0,
                        o = e.indices && e.indices[n] ? C(C({}, e.indices), {}, I({}, n, C(C(C({}, e.indices[n]), t), i))) : C(C({}, e.indices), {}, I({}, n, C(C({}, t), i)));
                    return C(C({}, e), {}, {
                        indices: o
                    })
                }(e, t, o, r)
            }
            return e.indices && r && Object.keys(e.indices).forEach((function(t) {
                e = A(e, {
                    page: 1
                }, {
                    multiIndexContext: {
                        targetedIndex: t
                    }
                }, !0, i)
            })), i ? function(e, t, n, r) {
                var i = n ? {
                    page: 1
                } : void 0;
                return C(C({}, e), {}, I({}, r, C(C({}, e[r]), t)), i)
            }(e, t, r, i) : function(e, t, n) {
                var r = n ? {
                    page: 1
                } : void 0;
                return C(C(C({}, e), t), r)
            }(e, t, r)
        }

        function D(e) {
            var t = e.match(/^([^.]*)\.(.*)/);
            return {
                namespace: t && t[1],
                attributeName: t && t[2]
            }
        }

        function L(e, t, n, r, i) {
            var o = F(n),
                a = D(r),
                u = a.namespace,
                c = a.attributeName,
                l = {
                    multiIndex: T(n),
                    indexId: o,
                    namespace: u,
                    attributeName: c,
                    id: r,
                    searchState: t
                },
                s = function(e) {
                    var t = e.multiIndex,
                        n = e.indexId,
                        r = e.namespace,
                        i = e.attributeName,
                        o = e.id,
                        a = e.searchState;
                    return t && r ? a.indices && a.indices[n] && a.indices[n][r] && Object.hasOwnProperty.call(a.indices[n][r], i) : t ? a.indices && a.indices[n] && Object.hasOwnProperty.call(a.indices[n], o) : r ? a[r] && Object.hasOwnProperty.call(a[r], i) : Object.hasOwnProperty.call(a, o)
                }(l);
            return s ? function(e) {
                var t = e.multiIndex,
                    n = e.indexId,
                    r = e.namespace,
                    i = e.attributeName,
                    o = e.id,
                    a = e.searchState;
                return t && r ? a.indices[n][r][i] : t ? a.indices[n][o] : r ? a[r][i] : a[o]
            }(l) : e.defaultRefinement ? e.defaultRefinement : i
        }

        function M(e, t, n) {
            var r = F(t),
                i = D(n),
                o = i.namespace,
                a = i.attributeName;
            return T(t) && Boolean(e.indices) ? function(e) {
                var t = e.searchState,
                    n = e.indexId,
                    r = e.id,
                    i = e.namespace,
                    o = e.attribute,
                    a = t.indices[n];
                if (i && a) return C(C({}, t), {}, {
                    indices: C(C({}, t.indices), {}, I({}, n, C(C({}, a), {}, I({}, i, j(a[i], [o])))))
                });
                if (a) return C(C({}, t), {}, {
                    indices: C(C({}, t.indices), {}, I({}, n, j(a, [r])))
                });
                return t
            }({
                attribute: a,
                searchState: e,
                indexId: r,
                id: n,
                namespace: o
            }) : function(e) {
                var t = e.searchState,
                    n = e.id,
                    r = e.namespace,
                    i = e.attribute;
                if (r) return C(C({}, t), {}, I({}, r, j(t[r], [i])));
                return j(t, [n])
            }({
                attribute: a,
                searchState: e,
                id: n,
                namespace: o
            })
        }
        const U = "6.40.4";
        var V = ["resultsFacetValues"],
            q = ["resultsFacetValues"],
            z = ["resultsFacetValues"];

        function H(e) {
            return H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, H(e)
        }

        function B(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function Q(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Q(Object(n), !0).forEach((function(t) {
                    $(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function $(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== H(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== H(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === H(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function K(t) {
            "function" === typeof t.addAlgoliaAgent && (t.addAlgoliaAgent("react (".concat(e.version, ")")), t.addAlgoliaAgent("react-instantsearch (".concat(U, ")")))
        }
        var J = function(e) {
                return T({
                    ais: e.props.contextValue,
                    multiIndexContext: e.props.indexContextValue
                })
            },
            Y = function(e, t) {
                return e.props.indexContextValue.targetedIndex === t
            },
            X = function(e) {
                return Boolean(e.props.indexId)
            },
            G = function(e, t) {
                return e.props.indexId === t
            },
            Z = function(e, t) {
                var n = X(e),
                    r = X(t);
                return n && !r ? -1 : !n && r ? 1 : 0
            };

        function ee(e) {
            return Object.keys(e).map((function(t) {
                return function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = 0;
                    return e.replace(/%s/g, (function() {
                        return encodeURIComponent(n[i++])
                    }))
                }("%s=%s", t, (n = e[t], "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
                var n
            })).join("&")
        }

        function te(e) {
            var t = e.indexName,
                n = e.initialState,
                r = void 0 === n ? {} : n,
                i = e.searchClient,
                o = e.resultsState,
                a = e.stalledSearchDelay,
                u = m()(i, t, W({}, k));
            K(i), u.on("search", (function() {
                s || (s = setTimeout((function() {
                    var e = d.getState(),
                        t = (e.resultsFacetValues, B(e, z));
                    d.setState(W(W({}, t), {}, {
                        isSearchStalled: !0
                    }))
                }), a))
            })).on("result", g({
                indexId: t
            })).on("error", b);
            var c, l = !1,
                s = null,
                f = u.state,
                p = function(e) {
                    var t = [],
                        n = !1;

                    function r() {
                        n || (n = !0, P((function() {
                            n = !1, e()
                        })))
                    }
                    return {
                        registerWidget: function(e) {
                            return t.push(e), r(),
                                function() {
                                    t.splice(t.indexOf(e), 1), r()
                                }
                        },
                        update: r,
                        getWidgets: function() {
                            return t
                        }
                    }
                }((function() {
                    var e = h(d.getState().widgets);
                    d.setState(W(W({}, d.getState()), {}, {
                        metadata: e,
                        searching: !0
                    })), v()
                }));
            ! function(e, t) {
                if (!t) return;
                if ((!e.transporter || e._cacheHydrated) && (!e._useCache || "function" !== typeof e.addAlgoliaAgent)) return;
                if (e.transporter && !e._cacheHydrated) {
                    e._cacheHydrated = !0;
                    var n = e.search;
                    e.search = function(t) {
                        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                        var a = t.map((function(e) {
                            return W(W({}, e), {}, {
                                params: ee(e.params)
                            })
                        }));
                        return e.transporter.responsesCache.get({
                            method: "search",
                            args: [a].concat(i)
                        }, (function() {
                            return n.apply(void 0, [t].concat(i))
                        }))
                    }
                }
                if (Array.isArray(t.results)) return void
                function(e, t) {
                    if (e.transporter) return void e.transporter.responsesCache.set({
                        method: "search",
                        args: [t.reduce((function(e, t) {
                            return e.concat(t.rawResults.map((function(e) {
                                return {
                                    indexName: e.index,
                                    params: e.params
                                }
                            })))
                        }), [])]
                    }, {
                        results: t.reduce((function(e, t) {
                            return e.concat(t.rawResults)
                        }), [])
                    });
                    var n = "/1/indexes/*/queries_body_".concat(JSON.stringify({
                        requests: t.reduce((function(e, t) {
                            return e.concat(t.rawResults.map((function(e) {
                                return {
                                    indexName: e.index,
                                    params: e.params
                                }
                            })))
                        }), [])
                    }));
                    e.cache = W(W({}, e.cache), {}, $({}, n, JSON.stringify({
                        results: t.reduce((function(e, t) {
                            return e.concat(t.rawResults)
                        }), [])
                    })))
                }(e, t.results);
                ! function(e, t) {
                    if (e.transporter) return void e.transporter.responsesCache.set({
                        method: "search",
                        args: [t.rawResults.map((function(e) {
                            return {
                                indexName: e.index,
                                params: e.params
                            }
                        }))]
                    }, {
                        results: t.rawResults
                    });
                    var n = "/1/indexes/*/queries_body_".concat(JSON.stringify({
                        requests: t.rawResults.map((function(e) {
                            return {
                                indexName: e.index,
                                params: e.params
                            }
                        }))
                    }));
                    e.cache = W(W({}, e.cache), {}, $({}, n, JSON.stringify({
                        results: t.rawResults
                    })))
                }(e, t)
            }(i, o);
            var d = function(e) {
                var t = e,
                    n = [];
                return {
                    getState: function() {
                        return t
                    },
                    setState: function(e) {
                        t = e, n.forEach((function(e) {
                            return e()
                        }))
                    },
                    subscribe: function(e) {
                        return n.push(e),
                            function() {
                                n.splice(n.indexOf(e), 1)
                            }
                    }
                }
            }({
                widgets: r,
                metadata: ne(o),
                results: function(e) {
                    if (!e) return null;
                    if (Array.isArray(e.results)) return e.results.reduce((function(e, t) {
                        return W(W({}, e), {}, $({}, t._internalIndexId, new(m().SearchResults)(new(m().SearchParameters)(t.state), t.rawResults)))
                    }), {});
                    return new(m().SearchResults)(new(m().SearchParameters)(e.state), e.rawResults)
                }(o),
                error: null,
                searching: !1,
                isSearchStalled: !0,
                searchingForFacetValues: !1
            });

            function h(e) {
                return p.getWidgets().filter((function(e) {
                    return Boolean(e.getMetadata)
                })).map((function(t) {
                    return t.getMetadata(e)
                }))
            }

            function y() {
                var e = p.getWidgets().filter((function(e) {
                        return Boolean(e.getSearchParameters)
                    })).filter((function(e) {
                        return !J(e) && !X(e)
                    })).reduce((function(e, t) {
                        return t.getSearchParameters(e)
                    }), f),
                    n = p.getWidgets().filter((function(e) {
                        return Boolean(e.getSearchParameters)
                    })).filter((function(e) {
                        var n = J(e) && Y(e, t),
                            r = X(e) && G(e, t);
                        return n || r
                    })).sort(Z).reduce((function(e, t) {
                        return t.getSearchParameters(e)
                    }), e),
                    r = p.getWidgets().filter((function(e) {
                        return Boolean(e.getSearchParameters)
                    })).filter((function(e) {
                        var n = J(e) && !Y(e, t),
                            r = X(e) && !G(e, t);
                        return n || r
                    })).sort(Z).reduce((function(e, t) {
                        var n = J(t) ? t.props.indexContextValue.targetedIndex : t.props.indexId,
                            r = e[n] || [];
                        return W(W({}, e), {}, $({}, n, r.concat(t)))
                    }), {});
                return {
                    mainParameters: n,
                    derivedParameters: Object.keys(r).map((function(t) {
                        return {
                            parameters: r[t].reduce((function(e, t) {
                                return t.getSearchParameters(e)
                            }), e),
                            indexId: t
                        }
                    }))
                }
            }

            function v() {
                if (!l) {
                    var e = y(u.state),
                        t = e.mainParameters,
                        n = e.derivedParameters;
                    c = n.length + 1, u.derivedHelpers.slice().forEach((function(e) {
                        e.detach()
                    })), n.forEach((function(e) {
                        var t = e.indexId,
                            n = e.parameters;
                        u.derive((function() {
                            return n
                        })).on("result", g({
                            indexId: t
                        })).on("error", b)
                    })), u.setState(t), u.search()
                }
            }

            function g(e) {
                var t = e.indexId;
                return function(e) {
                    c--;
                    var n = d.getState(),
                        r = !u.derivedHelpers.length,
                        i = n.results ? n.results : {};
                    i = !r && i.getFacetByName ? {} : i, i = r ? e.results : W(W({}, i), {}, $({}, t, e.results));
                    var o = d.getState(),
                        a = o.isSearchStalled;
                    u.hasPendingRequests() || (clearTimeout(s), s = null, a = !1);
                    o.resultsFacetValues;
                    var l = B(o, V);
                    d.setState(W(W({}, l), {}, {
                        results: i,
                        isSearchStalled: a,
                        searching: c > 0,
                        error: null
                    }))
                }
            }

            function b(e) {
                var t = e.error,
                    n = d.getState(),
                    r = n.isSearchStalled;
                u.hasPendingRequests() || (clearTimeout(s), r = !1);
                n.resultsFacetValues;
                var i = B(n, q);
                d.setState(W(W({}, i), {}, {
                    isSearchStalled: r,
                    error: t,
                    searching: !1
                }))
            }
            return {
                store: d,
                widgetsManager: p,
                getWidgetsIds: function() {
                    return d.getState().metadata.reduce((function(e, t) {
                        return "undefined" !== typeof t.id ? e.concat(t.id) : e
                    }), [])
                },
                getSearchParameters: y,
                onSearchForFacetValues: function(e) {
                    var t = e.facetName,
                        n = e.query,
                        r = e.maxFacetHits,
                        i = void 0 === r ? 10 : r,
                        o = Math.max(1, Math.min(i, 100));
                    d.setState(W(W({}, d.getState()), {}, {
                        searchingForFacetValues: !0
                    })), u.searchForFacetValues(t, n, o).then((function(e) {
                        var r;
                        d.setState(W(W({}, d.getState()), {}, {
                            error: null,
                            searchingForFacetValues: !1,
                            resultsFacetValues: W(W({}, d.getState().resultsFacetValues), {}, (r = {}, $(r, t, e.facetHits), $(r, "query", n), r))
                        }))
                    }), (function(e) {
                        d.setState(W(W({}, d.getState()), {}, {
                            searchingForFacetValues: !1,
                            error: e
                        }))
                    })).catch((function(e) {
                        setTimeout((function() {
                            throw e
                        }))
                    }))
                },
                onExternalStateUpdate: function(e) {
                    var t = h(e);
                    d.setState(W(W({}, d.getState()), {}, {
                        widgets: e,
                        metadata: t,
                        searching: !0
                    })), v()
                },
                transitionState: function(e) {
                    var t = d.getState().widgets;
                    return p.getWidgets().filter((function(e) {
                        return Boolean(e.transitionState)
                    })).reduce((function(e, n) {
                        return n.transitionState(t, e)
                    }), e)
                },
                updateClient: function(e) {
                    K(e), u.setClient(e), v()
                },
                updateIndex: function(e) {
                    f = f.setIndex(e)
                },
                clearCache: function() {
                    u.clearCache(), v()
                },
                skipSearch: function() {
                    l = !0
                }
            }
        }

        function ne(e) {
            return e ? e.metadata.map((function(e) {
                return W(W({
                    value: function() {
                        return {}
                    }
                }, e), {}, {
                    items: e.items && e.items.map((function(e) {
                        return W(W({
                            value: function() {
                                return {}
                            }
                        }, e), {}, {
                            items: e.items && e.items.map((function(e) {
                                return W({
                                    value: function() {
                                        return {}
                                    }
                                }, e)
                            }))
                        })
                    }))
                })
            })) : []
        }

        function re(e) {
            return re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, re(e)
        }

        function ie(e, t) {
            var n = document.createElement("meta"),
                r = document.querySelector("head");
            n.name = "algolia:metadata";
            var i = function(e, t) {
                var n = ["contextValue", "indexContextValue"],
                    r = e.map((function(e) {
                        var t = e.props,
                            r = e.constructor,
                            i = r._connectorDesc || {},
                            o = i.defaultProps,
                            a = void 0 === o ? {} : o,
                            u = i.displayName;
                        return {
                            displayName: void 0 === u ? r.displayName : u,
                            $$type: r.$$type,
                            $$widgetType: r.$$widgetType,
                            params: Object.keys(t).filter((function(e) {
                                return !n.includes(e) && a[e] !== t[e] && void 0 !== t[e]
                            }))
                        }
                    })),
                    i = t;
                return {
                    ua: i.transporter && i.transporter.userAgent ? i.transporter.userAgent.value : i._ua,
                    widgets: r
                }
            }(e, t);
            n.content = JSON.stringify(i), r.appendChild(n)
        }

        function oe(e) {
            return oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, oe(e)
        }

        function ae(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ue(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ae(Object(n), !0).forEach((function(t) {
                    de(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ce(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, he(r.key), r)
            }
        }

        function le(e, t) {
            return le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, le(e, t)
        }

        function se(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (uu) {
                    return !1
                }
            }();
            return function() {
                var n, r = pe(e);
                if (t) {
                    var i = pe(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === oe(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return fe(e)
                }(this, n)
            }
        }

        function fe(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function pe(e) {
            return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, pe(e)
        }

        function de(e, t, n) {
            return (t = he(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function he(e) {
            var t = function(e, t) {
                if ("object" !== oe(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== oe(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === oe(t) ? t : String(t)
        }

        function me(e) {
            return Boolean(e.searchState)
        }
        var ye = function(t) {
            ! function(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && le(e, t)
            }(a, t);
            var n, r, i, o = se(a);

            function a(e) {
                var t;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), de(fe(t = o.call(this, e)), "cleanupTimerRef", null), de(fe(t), "isUnmounting", !1);
                var n = te({
                        indexName: t.props.indexName,
                        searchClient: t.props.searchClient,
                        initialState: t.props.searchState || {},
                        resultsState: t.props.resultsState,
                        stalledSearchDelay: t.props.stalledSearchDelay
                    }),
                    r = {
                        store: n.store,
                        widgetsManager: n.widgetsManager,
                        mainTargetedIndex: t.props.indexName,
                        onInternalStateUpdate: t.onWidgetsInternalStateUpdate.bind(fe(t)),
                        createHrefForState: t.createHrefForState.bind(fe(t)),
                        onSearchForFacetValues: t.onSearchForFacetValues.bind(fe(t)),
                        onSearchStateChange: t.onSearchStateChange.bind(fe(t)),
                        onSearchParameters: t.onSearchParameters.bind(fe(t))
                    };
                return t.state = {
                    isControlled: me(t.props),
                    instantSearchManager: n,
                    contextValue: r
                }, t
            }
            return n = a, r = [{
                key: "componentDidUpdate",
                value: function(e) {
                    var t = me(e);
                    if (t && !this.state.isControlled) throw new Error("You can't switch <InstantSearch> from being controlled to uncontrolled");
                    if (!t && this.state.isControlled) throw new Error("You can't switch <InstantSearch> from being uncontrolled to controlled");
                    this.props.refresh !== e.refresh && this.props.refresh && this.state.instantSearchManager.clearCache(), e.indexName !== this.props.indexName && this.state.instantSearchManager.updateIndex(this.props.indexName), e.searchClient !== this.props.searchClient && this.state.instantSearchManager.updateClient(this.props.searchClient)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.cleanupTimerRef && (clearTimeout(this.cleanupTimerRef), this.cleanupTimerRef = null), "object" === ("undefined" === typeof window ? "undefined" : re(window)) && "object" === re(window.navigator) && "string" === typeof window.navigator.userAgent && window.navigator.userAgent.includes("Algolia Crawler") && "object" === re(window.document) && ie(this.state.instantSearchManager.widgetsManager.getWidgets(), this.props.searchClient)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this;
                    this.cleanupTimerRef = setTimeout((function() {
                        e.isUnmounting = !0, e.state.instantSearchManager.skipSearch()
                    }))
                }
            }, {
                key: "createHrefForState",
                value: function(e) {
                    return e = this.state.instantSearchManager.transitionState(e), this.state.isControlled && this.props.createURL ? this.props.createURL(e, this.getKnownKeys()) : "#"
                }
            }, {
                key: "onWidgetsInternalStateUpdate",
                value: function(e) {
                    e = this.state.instantSearchManager.transitionState(e), this.onSearchStateChange(e), this.state.isControlled || this.state.instantSearchManager.onExternalStateUpdate(e)
                }
            }, {
                key: "onSearchStateChange",
                value: function(e) {
                    this.props.onSearchStateChange && !this.isUnmounting && this.props.onSearchStateChange(e)
                }
            }, {
                key: "onSearchParameters",
                value: function(e, t, n, r, i) {
                    if (this.props.onSearchParameters) {
                        var o = this.props.searchState ? this.props.searchState : {};
                        this.props.onSearchParameters(e, t, n, o)
                    }
                    if (this.props.widgetsCollector) {
                        var a = this.props.searchState ? this.props.searchState : {};
                        this.props.widgetsCollector({
                            getSearchParameters: e,
                            getMetadata: r,
                            context: t,
                            props: n,
                            searchState: a,
                            displayName: i
                        })
                    }
                }
            }, {
                key: "onSearchForFacetValues",
                value: function(e) {
                    this.state.instantSearchManager.onSearchForFacetValues(e)
                }
            }, {
                key: "getKnownKeys",
                value: function() {
                    return this.state.instantSearchManager.getWidgetsIds()
                }
            }, {
                key: "render",
                value: function() {
                    return 0 === e.Children.count(this.props.children) ? null : e.createElement(f, {
                        value: this.state.contextValue
                    }, this.props.children)
                }
            }], i = [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    var n = me(e),
                        r = t.instantSearchManager.store.getState().widgets,
                        i = e.searchState;
                    return n && !c()(r, i) && t.instantSearchManager.onExternalStateUpdate(e.searchState), {
                        isControlled: n,
                        contextValue: ue(ue({}, t.contextValue), {}, {
                            mainTargetedIndex: e.indexName
                        })
                    }
                }
            }], r && ce(n.prototype, r), i && ce(n, i), Object.defineProperty(n, "prototype", {
                writable: !1
            }), a
        }(e.Component);
        de(ye, "defaultProps", {
            stalledSearchDelay: 200,
            refresh: !1
        }), de(ye, "propTypes", {
            indexName: a().string.isRequired,
            searchClient: a().shape({
                search: a().func.isRequired,
                searchForFacetValues: a().func,
                addAlgoliaAgent: a().func,
                clearCache: a().func
            }).isRequired,
            createURL: a().func,
            refresh: a().bool,
            searchState: a().object,
            onSearchStateChange: a().func,
            onSearchParameters: a().func,
            widgetsCollector: a().func,
            resultsState: a().oneOfType([a().object, a().array]),
            children: a().node,
            stalledSearchDelay: a().number
        });
        const ve = ye;
        var ge = ["contextValue"];

        function be(e) {
            return be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, be(e)
        }

        function we() {
            return we = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, we.apply(this, arguments)
        }

        function Se(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function Oe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Pe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Oe(Object(n), !0).forEach((function(t) {
                    Re(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function _e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ce(r.key), r)
            }
        }

        function je(e, t) {
            return je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, je(e, t)
        }

        function xe(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (uu) {
                    return !1
                }
            }();
            return function() {
                var n, r = Ee(e);
                if (t) {
                    var i = Ee(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === be(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return ke(e)
                }(this, n)
            }
        }

        function ke(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Ee(e) {
            return Ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Ee(e)
        }

        function Re(e, t, n) {
            return (t = Ce(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Ce(e) {
            var t = function(e, t) {
                if ("object" !== be(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== be(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === be(t) ? t : String(t)
        }

        function Ie(t) {
            if (!t.displayName) throw new Error("`createConnector` requires you to provide a `displayName` property.");
            var n = "function" === typeof t.getSearchParameters || "function" === typeof t.getMetadata || "function" === typeof t.transitionState;
            return function(r) {
                var i, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = function(i) {
                        ! function(e, t) {
                            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && je(e, t)
                        }(s, i);
                        var o, a, u, l = xe(s);

                        function s(e) {
                            var n;
                            return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, s), Re(ke(n = l.call(this, e)), "unsubscribe", void 0), Re(ke(n), "unregisterWidget", void 0), Re(ke(n), "cleanupTimerRef", null), Re(ke(n), "isUnmounting", !1), Re(ke(n), "state", {
                                providedProps: n.getProvidedProps(n.props)
                            }), Re(ke(n), "refine", (function() {
                                for (var e, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                                n.props.contextValue.onInternalStateUpdate((e = t.refine).call.apply(e, [ke(n), n.props, n.props.contextValue.store.getState().widgets].concat(i)))
                            })), Re(ke(n), "createURL", (function() {
                                for (var e, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                                return n.props.contextValue.createHrefForState((e = t.refine).call.apply(e, [ke(n), n.props, n.props.contextValue.store.getState().widgets].concat(i)))
                            })), Re(ke(n), "searchForFacetValues", (function() {
                                for (var e, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                                n.props.contextValue.onSearchForFacetValues((e = t.searchForFacetValues).call.apply(e, [ke(n), n.props, n.props.contextValue.store.getState().widgets].concat(i)))
                            })), t.getSearchParameters && n.props.contextValue.onSearchParameters(t.getSearchParameters.bind(ke(n)), {
                                ais: n.props.contextValue,
                                multiIndexContext: n.props.indexContextValue
                            }, n.props, t.getMetadata && t.getMetadata.bind(ke(n)), t.displayName), n
                        }
                        return o = s, (a = [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this;
                                this.cleanupTimerRef && (clearTimeout(this.cleanupTimerRef), this.cleanupTimerRef = null), this.unsubscribe = this.props.contextValue.store.subscribe((function() {
                                    e.isUnmounting || e.setState({
                                        providedProps: e.getProvidedProps(e.props)
                                    })
                                })), n && (this.unregisterWidget = this.props.contextValue.widgetsManager.registerWidget(this))
                            }
                        }, {
                            key: "shouldComponentUpdate",
                            value: function(e, n) {
                                if ("function" === typeof t.shouldComponentUpdate) return t.shouldComponentUpdate.call(this, this.props, e, this.state, n);
                                var r = S(this.props, e);
                                return null === this.state.providedProps || null === n.providedProps ? this.state.providedProps !== n.providedProps || !r : !r || !S(this.state.providedProps, n.providedProps)
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(e) {
                                c()(e, this.props) || (this.setState({
                                    providedProps: this.getProvidedProps(this.props)
                                }), n && (this.props.contextValue.widgetsManager.update(), "function" === typeof t.transitionState && this.props.contextValue.onSearchStateChange(t.transitionState.call(this, this.props, this.props.contextValue.store.getState().widgets, this.props.contextValue.store.getState().widgets))))
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                var e = this;
                                this.cleanupTimerRef = setTimeout((function() {
                                    if (e.isUnmounting = !0, e.unsubscribe && e.unsubscribe(), e.unregisterWidget && (e.unregisterWidget(), "function" === typeof t.cleanUp)) {
                                        var n = t.cleanUp.call(e, e.props, e.props.contextValue.store.getState().widgets);
                                        e.props.contextValue.store.setState(Pe(Pe({}, e.props.contextValue.store.getState()), {}, {
                                            widgets: n
                                        })), e.props.contextValue.onSearchStateChange(_(n))
                                    }
                                }))
                            }
                        }, {
                            key: "getProvidedProps",
                            value: function(e) {
                                var n = this.props.contextValue.store.getState(),
                                    r = n.widgets,
                                    i = n.results,
                                    o = n.resultsFacetValues,
                                    a = n.searching,
                                    u = n.searchingForFacetValues,
                                    c = n.isSearchStalled,
                                    l = n.metadata,
                                    s = {
                                        results: i,
                                        searching: a,
                                        searchingForFacetValues: u,
                                        isSearchStalled: c,
                                        error: n.error
                                    };
                                return t.getProvidedProps.call(this, e, r, s, l, o)
                            }
                        }, {
                            key: "getSearchParameters",
                            value: function(e) {
                                return "function" === typeof t.getSearchParameters ? t.getSearchParameters.call(this, e, this.props, this.props.contextValue.store.getState().widgets) : null
                            }
                        }, {
                            key: "getMetadata",
                            value: function(e) {
                                return "function" === typeof t.getMetadata ? t.getMetadata.call(this, this.props, e) : {}
                            }
                        }, {
                            key: "transitionState",
                            value: function(e, n) {
                                return "function" === typeof t.transitionState ? t.transitionState.call(this, this.props, e, n) : n
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var n = this.props,
                                    i = (n.contextValue, Se(n, ge)),
                                    o = this.state.providedProps;
                                if (null === o) return null;
                                var a = "function" === typeof t.refine ? {
                                        refine: this.refine,
                                        createURL: this.createURL
                                    } : {},
                                    u = "function" === typeof t.searchForFacetValues ? {
                                        searchForItems: this.searchForFacetValues
                                    } : {};
                                return e.createElement(r, we({}, i, o, a, u))
                            }
                        }]) && _e(o.prototype, a), u && _e(o, u), Object.defineProperty(o, "prototype", {
                            writable: !1
                        }), s
                    }(e.Component);
                return Re(a, "displayName", "".concat(t.displayName, "(").concat((i = r).displayName || i.name || "UnknownComponent", ")")), Re(a, "$$type", t.$$type), Re(a, "$$widgetType", o.$$widgetType), Re(a, "propTypes", t.propTypes), Re(a, "defaultProps", t.defaultProps), Re(a, "_connectorDesc", t), a
            }
        }
        const Fe = function(t) {
            return function(n, r) {
                var i = Ie(t)(n, r);
                return function(t) {
                    return e.createElement(s, null, (function(n) {
                        return e.createElement(d, null, (function(r) {
                            return e.createElement(i, we({
                                contextValue: n,
                                indexContextValue: r
                            }, t))
                        }))
                    }))
                }
            }
        };

        function Ne(e) {
            return Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Ne(e)
        }
        var Te = ["children", "contextValue", "indexContextValue"],
            Ae = ["children", "contextValue", "indexContextValue"];

        function De(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Le(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? De(Object(n), !0).forEach((function(t) {
                    Me(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : De(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Me(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Ne(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Ne(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Ne(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Ue(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        const Ve = Fe({
            displayName: "AlgoliaConfigure",
            $$type: "ais.configure",
            getProvidedProps: function() {
                return {}
            },
            getSearchParameters: function(e, t) {
                t.children, t.contextValue, t.indexContextValue;
                var n = Ue(t, Te);
                return e.setQueryParameters(n)
            },
            transitionState: function(e, t, n) {
                var r = "configure",
                    i = (e.children, e.contextValue, e.indexContextValue, Ue(e, Ae)),
                    o = Object.keys(e),
                    a = this._props ? Object.keys(this._props).filter((function(e) {
                        return -1 === o.indexOf(e)
                    })) : [];
                return this._props = e, A(n, Me({}, r, Le(Le({}, j(n[r], a)), i)), {
                    ais: e.contextValue,
                    multiIndexContext: e.indexContextValue
                })
            },
            cleanUp: function(e, t) {
                var n = "configure",
                    r = F({
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    }),
                    i = T({
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    }) && t.indices ? t.indices[r] : t,
                    o = (i && i[n] ? Object.keys(i[n]) : []).reduce((function(t, r) {
                        return e[r] || (t[r] = i[n][r]), t
                    }), {});
                return A(t, Me({}, n, o), {
                    ais: e.contextValue,
                    multiIndexContext: e.indexContextValue
                })
            }
        })((function() {
            return null
        }), {
            $$widgetType: "ais.configure"
        });

        function qe(e) {
            return qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, qe(e)
        }

        function ze(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== qe(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== qe(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === qe(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function He(e, t, n) {
            var r = L(e, t, n, "query", "");
            return r || ""
        }

        function Be(e, t, n, r) {
            return A(t, ze({}, "query", n), r, !0)
        }
        const Qe = Fe({
            displayName: "AlgoliaSearchBox",
            $$type: "ais.searchBox",
            propTypes: {
                defaultRefinement: a().string
            },
            getProvidedProps: function(e, t, n) {
                return {
                    currentRefinement: He(e, t, {
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    }),
                    isSearchStalled: n.isSearchStalled
                }
            },
            refine: function(e, t, n) {
                return Be(0, t, n, {
                    ais: e.contextValue,
                    multiIndexContext: e.indexContextValue
                })
            },
            cleanUp: function(e, t) {
                return function(e, t, n) {
                    return M(t, n, "query")
                }(0, t, {
                    ais: e.contextValue,
                    multiIndexContext: e.indexContextValue
                })
            },
            getSearchParameters: function(e, t, n) {
                return e.setQuery(He(t, n, {
                    ais: t.contextValue,
                    multiIndexContext: t.indexContextValue
                }))
            },
            getMetadata: function(e, t) {
                var n = "query",
                    r = He(e, t, {
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    });
                return {
                    id: n,
                    index: F({
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    }),
                    items: null === r ? [] : [{
                        label: "".concat(n, ": ").concat(r),
                        value: function(t) {
                            return Be(0, t, "", {
                                ais: e.contextValue,
                                multiIndexContext: e.indexContextValue
                            })
                        },
                        currentRefinement: r
                    }]
                }
            }
        });
        var We = n(139),
            $e = n.n(We);

        function Ke(e) {
            return Ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Ke(e)
        }

        function Je() {
            return Je = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Je.apply(this, arguments)
        }

        function Ye(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, tt(r.key), r)
            }
        }

        function Xe(e, t) {
            return Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, Xe(e, t)
        }

        function Ge(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (uu) {
                    return !1
                }
            }();
            return function() {
                var n, r = et(e);
                if (t) {
                    var i = et(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Ke(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return Ze(e)
                }(this, n)
            }
        }

        function Ze(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function et(e) {
            return et = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, et(e)
        }

        function tt(e) {
            var t = function(e, t) {
                if ("object" !== Ke(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Ke(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ke(t) ? t : String(t)
        }

        function nt(t) {
            return function(n) {
                var r, i = function(r) {
                        ! function(e, t) {
                            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && Xe(e, t)
                        }(c, r);
                        var i, o, a, u = Ge(c);

                        function c() {
                            var e, n, r, i;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, c);
                            for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++) a[l] = arguments[l];
                            return e = u.call.apply(u, [this].concat(a)), n = Ze(e), i = function(n) {
                                var r = e.props.translations,
                                    i = r && r.hasOwnProperty(n) ? r[n] : t[n];
                                if ("function" === typeof i) {
                                    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) a[u - 1] = arguments[u];
                                    return i.apply(void 0, a)
                                }
                                return i
                            }, (r = tt(r = "translate")) in n ? Object.defineProperty(n, r, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[r] = i, e
                        }
                        return i = c, (o = [{
                            key: "render",
                            value: function() {
                                return e.createElement(n, Je({
                                    translate: this.translate
                                }, this.props))
                            }
                        }]) && Ye(i.prototype, o), a && Ye(i, a), Object.defineProperty(i, "prototype", {
                            writable: !1
                        }), c
                    }(e.Component),
                    o = n.displayName || n.name || "UnknownComponent";
                return i.displayName = "Translatable(".concat(o, ")"), i.propTypes = {
                    translations: (r = Object.keys(t), function(e, t, n) {
                        var i = e[t];
                        if (i)
                            for (var o = 0, a = Object.keys(i); o < a.length; o++) {
                                var u = a[o];
                                if (-1 === r.indexOf(u)) return new Error("Unknown `".concat(t, "` key `").concat(u, "`. Check the render method ") + "of `".concat(n, "`."))
                            }
                    })
                }, i
            }
        }

        function rt(e) {
            return function(e) {
                if (Array.isArray(e)) return it(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return it(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return it(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function it(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var ot = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ais";
                return function() {
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    var o = r.filter((function(e) {
                        return e || "" === e
                    })).map((function(n) {
                        var r = "".concat(t, "-").concat(e);
                        return n ? "".concat(r, "-").concat(n) : r
                    }));
                    return $e()(o)
                }
            },
            at = function(e) {
                return 0 === e.length ? "" : "".concat(e[0].toUpperCase()).concat(e.slice(1))
            };

        function ut(e) {
            var t = e.start,
                n = void 0 === t ? 0 : t,
                r = e.end,
                i = e.step,
                o = void 0 === i ? 1 : i,
                a = 0 === o ? 1 : o,
                u = Math.round((r - n) / a);
            return rt(Array(u)).map((function(e, t) {
                return (n + t) * a
            }))
        }

        function ct(e) {
            return ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, ct(e)
        }

        function lt() {
            return lt = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, lt.apply(this, arguments)
        }

        function st(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ft(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? st(Object(n), !0).forEach((function(t) {
                    vt(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function pt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, gt(r.key), r)
            }
        }

        function dt(e, t) {
            return dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, dt(e, t)
        }

        function ht(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (uu) {
                    return !1
                }
            }();
            return function() {
                var n, r = yt(e);
                if (t) {
                    var i = yt(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ct(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return mt(e)
                }(this, n)
            }
        }

        function mt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function yt(e) {
            return yt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, yt(e)
        }

        function vt(e, t, n) {
            return (t = gt(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function gt(e) {
            var t = function(e, t) {
                if ("object" !== ct(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== ct(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ct(t) ? t : String(t)
        }
        var bt = ot("SearchBox"),
            wt = e.createElement("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 38 38",
                xmlns: "http://www.w3.org/2000/svg",
                stroke: "#444",
                className: bt("loadingIcon"),
                "aria-hidden": "true"
            }, e.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, e.createElement("g", {
                transform: "translate(1 1)",
                strokeWidth: "2"
            }, e.createElement("circle", {
                strokeOpacity: ".5",
                cx: "18",
                cy: "18",
                r: "18"
            }), e.createElement("path", {
                d: "M36 18c0-9.94-8.06-18-18-18"
            }, e.createElement("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                from: "0 18 18",
                to: "360 18 18",
                dur: "1s",
                repeatCount: "indefinite"
            }))))),
            St = e.createElement("svg", {
                className: bt("resetIcon"),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                width: "10",
                height: "10",
                "aria-hidden": "true"
            }, e.createElement("path", {
                d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
            })),
            Ot = e.createElement("svg", {
                className: bt("submitIcon"),
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "10",
                viewBox: "0 0 40 40",
                "aria-hidden": "true"
            }, e.createElement("path", {
                d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
            })),
            Pt = function(t) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && dt(e, t)
                }(a, t);
                var n, r, i, o = ht(a);

                function a(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), vt(mt(t = o.call(this)), "getQuery", (function() {
                        return t.props.searchAsYouType ? t.props.currentRefinement : t.state.query
                    })), vt(mt(t), "onInputMount", (function(e) {
                        t.input = e, t.props.inputRef && ("function" === typeof t.props.inputRef ? t.props.inputRef(e) : t.props.inputRef.current = e)
                    })), vt(mt(t), "onKeyDown", (function(e) {
                        if (t.props.focusShortcuts) {
                            var n = t.props.focusShortcuts.map((function(e) {
                                    return "string" === typeof e ? e.toUpperCase().charCodeAt(0) : e
                                })),
                                r = e.target || e.srcElement,
                                i = r.tagName;
                            if (!r.isContentEditable && "INPUT" !== i && "SELECT" !== i && "TEXTAREA" !== i) {
                                var o = e.which || e.keyCode; - 1 !== n.indexOf(o) && (t.input.focus(), e.stopPropagation(), e.preventDefault())
                            }
                        }
                    })), vt(mt(t), "onSubmit", (function(e) {
                        e.preventDefault(), e.stopPropagation(), t.input.blur();
                        var n = t.props,
                            r = n.refine;
                        return n.searchAsYouType || r(t.getQuery()), !1
                    })), vt(mt(t), "onChange", (function(e) {
                        var n = t.props,
                            r = n.searchAsYouType,
                            i = n.refine,
                            o = n.onChange,
                            a = e.target.value;
                        r ? i(a) : t.setState({
                            query: a
                        }), o && o(e)
                    })), vt(mt(t), "onReset", (function(e) {
                        var n = t.props,
                            r = n.searchAsYouType,
                            i = n.refine,
                            o = n.onReset;
                        i(""), t.input.focus(), r || t.setState({
                            query: ""
                        }), o && o(e)
                    })), t.state = {
                        query: e.searchAsYouType ? null : e.currentRefinement
                    }, t
                }
                return n = a, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        document.addEventListener("keydown", this.onKeyDown)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.removeEventListener("keydown", this.onKeyDown)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.props.searchAsYouType || e.currentRefinement === this.props.currentRefinement || this.setState({
                            query: this.props.currentRefinement
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            n = this.props,
                            r = n.className,
                            i = n.inputId,
                            o = n.translate,
                            a = n.autoFocus,
                            u = n.loadingIndicator,
                            c = n.submit,
                            l = n.reset,
                            s = this.getQuery(),
                            f = Object.keys(this.props).reduce((function(e, n) {
                                return -1 === ["onsubmit", "onreset", "onchange"].indexOf(n.toLowerCase()) && 0 === n.indexOf("on") ? ft(ft({}, e), {}, vt({}, n, t.props[n])) : e
                            }), {}),
                            p = this.props.showLoadingIndicator && this.props.isSearchStalled;
                        return e.createElement("div", {
                            className: $e()(bt(""), r)
                        }, e.createElement("form", {
                            ref: this.props.formRef,
                            noValidate: !0,
                            onSubmit: this.props.onSubmit ? this.props.onSubmit : this.onSubmit,
                            onReset: this.onReset,
                            className: bt("form", p && "form--stalledSearch"),
                            action: "",
                            role: "search"
                        }, e.createElement("input", lt({
                            ref: this.onInputMount,
                            id: i,
                            type: "search",
                            placeholder: o("placeholder"),
                            autoFocus: a,
                            autoComplete: "off",
                            autoCorrect: "off",
                            autoCapitalize: "off",
                            spellCheck: "false",
                            required: !0,
                            maxLength: "512",
                            value: s,
                            onChange: this.onChange
                        }, f, {
                            className: bt("input")
                        })), e.createElement("button", {
                            type: "submit",
                            title: o("submitTitle"),
                            className: bt("submit")
                        }, c), e.createElement("button", {
                            type: "reset",
                            title: o("resetTitle"),
                            className: bt("reset"),
                            hidden: !s || p
                        }, l), this.props.showLoadingIndicator && e.createElement("span", {
                            hidden: !p,
                            className: bt("loadingIndicator")
                        }, u)))
                    }
                }]) && pt(n.prototype, r), i && pt(n, i), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), a
            }(e.Component);
        vt(Pt, "propTypes", {
            currentRefinement: a().string,
            className: a().string,
            refine: a().func.isRequired,
            translate: a().func.isRequired,
            loadingIndicator: a().node,
            reset: a().node,
            submit: a().node,
            focusShortcuts: a().arrayOf(a().oneOfType([a().string, a().number])),
            autoFocus: a().bool,
            searchAsYouType: a().bool,
            onSubmit: a().func,
            onReset: a().func,
            onChange: a().func,
            isSearchStalled: a().bool,
            showLoadingIndicator: a().bool,
            formRef: a().oneOfType([a().func, a().exact({
                current: a().object
            })]),
            inputRef: a().oneOfType([a().func, a().exact({
                current: a().object
            })]),
            inputId: a().string
        }), vt(Pt, "defaultProps", {
            currentRefinement: "",
            className: "",
            focusShortcuts: ["s", "/"],
            autoFocus: !1,
            searchAsYouType: !0,
            showLoadingIndicator: !1,
            isSearchStalled: !1,
            loadingIndicator: wt,
            reset: St,
            submit: Ot
        });
        const _t = Qe(nt({
                resetTitle: "Clear the search query.",
                submitTitle: "Submit your search query.",
                placeholder: "Search here\u2026"
            })(Pt), {
                $$widgetType: "ais.searchBox"
            }),
            jt = Fe({
                displayName: "AlgoliaHits",
                $$type: "ais.hits",
                getProvidedProps: function(e, t, n) {
                    var r = N(n, {
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    });
                    if (!r) return {
                        hits: []
                    };
                    var i, o, a, u = (i = r.hits, o = r.hitsPerPage, a = r.page, i.map((function(e, t) {
                            return v(v({}, e), {}, {
                                __position: o * a + t + 1
                            })
                        }))),
                        c = function(e, t) {
                            return t ? e.map((function(e) {
                                return v(v({}, e), {}, {
                                    __queryID: t
                                })
                            })) : e
                        }(u, r.queryID);
                    return {
                        hits: c
                    }
                },
                getSearchParameters: function(e) {
                    return e
                }
            });
        var xt = ot("Hits"),
            kt = function(t) {
                return e.createElement("div", {
                    style: {
                        borderBottom: "1px solid #bbb",
                        paddingBottom: "5px",
                        marginBottom: "5px",
                        wordBreak: "break-all"
                    }
                }, JSON.stringify(t).slice(0, 100), "...")
            },
            Et = function(t) {
                var n = t.hits,
                    r = t.className,
                    i = void 0 === r ? "" : r,
                    o = t.hitComponent,
                    a = void 0 === o ? kt : o;
                return e.createElement("div", {
                    className: $e()(xt(""), i)
                }, e.createElement("ul", {
                    className: xt("list")
                }, n.map((function(t) {
                    return e.createElement("li", {
                        className: xt("item"),
                        key: t.objectID
                    }, e.createElement(a, {
                        hit: t
                    }))
                }))))
            },
            Rt = a().shape({
                objectID: a().oneOfType([a().string, a().number]).isRequired
            });
        Et.propTypes = {
            hits: a().arrayOf(Rt.isRequired).isRequired,
            className: a().string,
            hitComponent: a().any
        };
        const Ct = jt(Et, {
            $$widgetType: "ais.hits"
        });

        function It(e) {
            return It = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, It(e)
        }

        function Ft(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== It(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== It(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === It(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Nt(e, t, n) {
            var r = L(e, t, n, "page", 1);
            return "string" === typeof r ? parseInt(r, 10) : r
        }
        const Tt = Fe({
            displayName: "AlgoliaPagination",
            $$type: "ais.pagination",
            getProvidedProps: function(e, t, n) {
                var r = N(n, {
                    ais: e.contextValue,
                    multiIndexContext: e.indexContextValue
                });
                if (!r) return null;
                var i = r.nbPages;
                return {
                    nbPages: i,
                    currentRefinement: Nt(e, t, {
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    }),
                    canRefine: i > 1
                }
            },
            refine: function(e, t, n) {
                return function(e, t, n, r) {
                    return A(t, Ft({}, "page", n), r, !1)
                }(0, t, n, {
                    ais: e.contextValue,
                    multiIndexContext: e.indexContextValue
                })
            },
            cleanUp: function(e, t) {
                return M(t, {
                    ais: e.contextValue,
                    multiIndexContext: e.indexContextValue
                }, "page")
            },
            getSearchParameters: function(e, t, n) {
                return e.setPage(Nt(t, n, {
                    ais: t.contextValue,
                    multiIndexContext: t.indexContextValue
                }) - 1)
            },
            getMetadata: function() {
                return {
                    id: "page"
                }
            }
        });

        function At(e) {
            return At = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, At(e)
        }

        function Dt() {
            return Dt = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Dt.apply(this, arguments)
        }

        function Lt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ht(r.key), r)
            }
        }

        function Mt(e, t) {
            return Mt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, Mt(e, t)
        }

        function Ut(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (uu) {
                    return !1
                }
            }();
            return function() {
                var n, r = qt(e);
                if (t) {
                    var i = qt(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === At(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return Vt(e)
                }(this, n)
            }
        }

        function Vt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function qt(e) {
            return qt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, qt(e)
        }

        function zt(e, t, n) {
            return (t = Ht(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Ht(e) {
            var t = function(e, t) {
                if ("object" !== At(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== At(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === At(t) ? t : String(t)
        }
        var Bt = function(t) {
            ! function(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && Mt(e, t)
            }(a, t);
            var n, r, i, o = Ut(a);

            function a() {
                var e;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return zt(Vt(e = o.call.apply(o, [this].concat(n))), "onClick", (function(t) {
                    (function(e) {
                        var t = 1 === e.button;
                        return Boolean(t || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
                    })(t) || (e.props.onClick(), t.preventDefault())
                })), e
            }
            return n = a, (r = [{
                key: "render",
                value: function() {
                    return e.createElement("a", Dt({}, this.props, {
                        onClick: this.onClick
                    }))
                }
            }]) && Lt(n.prototype, r), i && Lt(n, i), Object.defineProperty(n, "prototype", {
                writable: !1
            }), a
        }(e.Component);

        function Qt(e) {
            return Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Qt(e)
        }

        function Wt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Yt(r.key), r)
            }
        }

        function $t(e, t) {
            return $t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, $t(e, t)
        }

        function Kt(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (uu) {
                    return !1
                }
            }();
            return function() {
                var n, r = Jt(e);
                if (t) {
                    var i = Jt(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Qt(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, n)
            }
        }

        function Jt(e) {
            return Jt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Jt(e)
        }

        function Yt(e) {
            var t = function(e, t) {
                if ("object" !== Qt(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Qt(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Qt(t) ? t : String(t)
        }
        zt(Bt, "propTypes", {
            onClick: a().func.isRequired
        });
        var Xt, Gt, Zt, en = function(t) {
            ! function(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && $t(e, t)
            }(a, t);
            var n, r, i, o = Kt(a);

            function a() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), o.apply(this, arguments)
            }
            return n = a, r = [{
                key: "render",
                value: function() {
                    var t = this.props,
                        n = t.cx,
                        r = t.createURL,
                        i = t.items,
                        o = t.onSelect,
                        a = t.canRefine;
                    return e.createElement("ul", {
                        className: n("list", !a && "list--noRefinement")
                    }, i.map((function(t) {
                        return e.createElement("li", {
                            key: void 0 === t.key ? t.value : t.key,
                            className: n("item", t.selected && !t.disabled && "item--selected", t.disabled && "item--disabled", t.modifier)
                        }, t.disabled ? e.createElement("span", {
                            className: n("link")
                        }, void 0 === t.label ? t.value : t.label) : e.createElement(Bt, {
                            className: n("link", t.selected && "link--selected"),
                            "aria-label": t.ariaLabel,
                            href: r(t.value),
                            onClick: function() {
                                return o(t.value)
                            }
                        }, void 0 === t.label ? t.value : t.label))
                    })))
                }
            }], r && Wt(n.prototype, r), i && Wt(n, i), Object.defineProperty(n, "prototype", {
                writable: !1
            }), a
        }(e.Component);
        Xt = en, Gt = "propTypes", Zt = {
            cx: a().func.isRequired,
            createURL: a().func.isRequired,
            items: a().arrayOf(a().shape({
                value: a().oneOfType([a().string, a().number, a().object]).isRequired,
                key: a().oneOfType([a().string, a().number]),
                label: a().node,
                modifier: a().string,
                ariaLabel: a().string,
                disabled: a().bool
            })),
            onSelect: a().func.isRequired,
            canRefine: a().bool.isRequired
        }, (Gt = Yt(Gt)) in Xt ? Object.defineProperty(Xt, Gt, {
            value: Zt,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Xt[Gt] = Zt;
        var tn = ["listComponent", "nbPages", "totalPages", "currentRefinement", "padding", "showFirst", "showPrevious", "showNext", "showLast", "refine", "createURL", "canRefine", "translate", "className"];

        function nn(e) {
            return nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, nn(e)
        }

        function rn() {
            return rn = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, rn.apply(this, arguments)
        }

        function on(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function an(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, fn(r.key), r)
            }
        }

        function un(e, t) {
            return un = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, un(e, t)
        }

        function cn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (uu) {
                    return !1
                }
            }();
            return function() {
                var n, r = ln(e);
                if (t) {
                    var i = ln(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === nn(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, n)
            }
        }

        function ln(e) {
            return ln = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, ln(e)
        }

        function sn(e, t, n) {
            return (t = fn(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function fn(e) {
            var t = function(e, t) {
                if ("object" !== nn(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== nn(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === nn(t) ? t : String(t)
        }
        var pn = ot("Pagination");

        function dn(e, t, n) {
            var r = function(e, t) {
                return Math.min(2 * e + 1, t)
            }(n, t);
            if (r === t) return ut({
                start: 1,
                end: t + 1
            });
            var i = function(e, t, n, r) {
                return e <= t ? e : e >= n - t ? r - (n - e) : t + 1
            }(e, n, t, r);
            return ut({
                start: e - i + 1,
                end: e + (r - i) + 1
            })
        }
        var hn = function(t) {
            ! function(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && un(e, t)
            }(a, t);
            var n, r, i, o = cn(a);

            function a() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), o.apply(this, arguments)
            }
            return n = a, r = [{
                key: "getItem",
                value: function(e, t, n) {
                    var r = this.props,
                        i = r.nbPages,
                        o = r.totalPages,
                        a = r.translate;
                    return {
                        key: "".concat(e, ".").concat(n),
                        modifier: e,
                        disabled: n < 1 || n >= Math.min(o, i),
                        label: a(t, n),
                        value: n,
                        ariaLabel: a("aria".concat(at(t)), n)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props,
                        n = t.listComponent,
                        r = t.nbPages,
                        i = t.totalPages,
                        o = t.currentRefinement,
                        a = t.padding,
                        u = t.showFirst,
                        c = t.showPrevious,
                        l = t.showNext,
                        s = t.showLast,
                        f = t.refine,
                        p = t.createURL,
                        d = t.canRefine,
                        h = t.translate,
                        m = t.className,
                        y = on(t, tn),
                        v = Math.min(r, i),
                        g = v,
                        b = [];
                    return u && b.push({
                        key: "first",
                        modifier: "item--firstPage",
                        disabled: 1 === o,
                        label: h("first"),
                        value: 1,
                        ariaLabel: h("ariaFirst")
                    }), c && b.push({
                        key: "previous",
                        modifier: "item--previousPage",
                        disabled: 1 === o,
                        label: h("previous"),
                        value: o - 1,
                        ariaLabel: h("ariaPrevious")
                    }), b = b.concat(dn(o, v, a).map((function(e) {
                        return {
                            key: e,
                            modifier: "item--page",
                            label: h("page", e),
                            value: e,
                            selected: e === o,
                            ariaLabel: h("ariaPage", e)
                        }
                    }))), l && b.push({
                        key: "next",
                        modifier: "item--nextPage",
                        disabled: o === g || g <= 1,
                        label: h("next"),
                        value: o + 1,
                        ariaLabel: h("ariaNext")
                    }), s && b.push({
                        key: "last",
                        modifier: "item--lastPage",
                        disabled: o === g || g <= 1,
                        label: h("last"),
                        value: g,
                        ariaLabel: h("ariaLast")
                    }), e.createElement("div", {
                        className: $e()(pn("", !d && "-noRefinement"), m)
                    }, e.createElement(n, rn({}, y, {
                        cx: pn,
                        items: b,
                        onSelect: f,
                        createURL: p,
                        canRefine: d
                    })))
                }
            }], r && an(n.prototype, r), i && an(n, i), Object.defineProperty(n, "prototype", {
                writable: !1
            }), a
        }(e.Component);
        sn(hn, "propTypes", {
            nbPages: a().number.isRequired,
            currentRefinement: a().number.isRequired,
            refine: a().func.isRequired,
            createURL: a().func.isRequired,
            canRefine: a().bool.isRequired,
            translate: a().func.isRequired,
            listComponent: a().func,
            showFirst: a().bool,
            showPrevious: a().bool,
            showNext: a().bool,
            showLast: a().bool,
            padding: a().number,
            totalPages: a().number,
            className: a().string
        }), sn(hn, "defaultProps", {
            listComponent: en,
            showFirst: !0,
            showPrevious: !0,
            showNext: !0,
            showLast: !1,
            padding: 3,
            totalPages: 1 / 0,
            className: ""
        });
        const mn = nt({
            previous: "\u2039",
            next: "\u203a",
            first: "\xab",
            last: "\xbb",
            page: function(e) {
                return e.toString()
            },
            ariaPrevious: "Previous page",
            ariaNext: "Next page",
            ariaFirst: "First page",
            ariaLast: "Last page",
            ariaPage: function(e) {
                return "Page ".concat(e.toString())
            }
        })(hn);

        function yn(e) {
            return yn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, yn(e)
        }

        function vn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Pn(r.key), r)
            }
        }

        function gn(e, t) {
            return gn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, gn(e, t)
        }

        function bn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (uu) {
                    return !1
                }
            }();
            return function() {
                var n, r = Sn(e);
                if (t) {
                    var i = Sn(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === yn(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return wn(e)
                }(this, n)
            }
        }

        function wn(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Sn(e) {
            return Sn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Sn(e)
        }

        function On(e, t, n) {
            return (t = Pn(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Pn(e) {
            var t = function(e, t) {
                if ("object" !== yn(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== yn(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === yn(t) ? t : String(t)
        }
        var _n = ot("Panel"),
            jn = (0, e.createContext)((function() {})),
            xn = jn.Consumer,
            kn = jn.Provider,
            En = function(t) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && gn(e, t)
                }(a, t);
                var n, r, i, o = bn(a);

                function a() {
                    var e;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, a);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return On(wn(e = o.call.apply(o, [this].concat(n))), "state", {
                        canRefine: !0
                    }), On(wn(e), "setCanRefine", (function(t) {
                        e.setState({
                            canRefine: t
                        })
                    })), e
                }
                return n = a, (r = [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            n = t.children,
                            r = t.className,
                            i = t.header,
                            o = t.footer,
                            a = this.state.canRefine;
                        return e.createElement("div", {
                            className: $e()(_n("", !a && "-noRefinement"), r)
                        }, i && e.createElement("div", {
                            className: _n("header")
                        }, i), e.createElement("div", {
                            className: _n("body")
                        }, e.createElement(kn, {
                            value: this.setCanRefine
                        }, n)), o && e.createElement("div", {
                            className: _n("footer")
                        }, o))
                    }
                }]) && vn(n.prototype, r), i && vn(n, i), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), a
            }(e.Component);
        On(En, "propTypes", {
            children: a().node.isRequired,
            className: a().string,
            header: a().node,
            footer: a().node
        }), On(En, "defaultProps", {
            className: "",
            header: null,
            footer: null
        });

        function Rn(e) {
            return Rn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Rn(e)
        }

        function Cn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Tn(r.key), r)
            }
        }

        function In(e, t) {
            return In = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, In(e, t)
        }

        function Fn(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (uu) {
                    return !1
                }
            }();
            return function() {
                var n, r = Nn(e);
                if (t) {
                    var i = Nn(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Rn(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, n)
            }
        }

        function Nn(e) {
            return Nn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Nn(e)
        }

        function Tn(e) {
            var t = function(e, t) {
                if ("object" !== Rn(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Rn(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Rn(t) ? t : String(t)
        }
        var An = function(e) {
            ! function(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && In(e, t)
            }(o, e);
            var t, n, r, i = Fn(o);

            function o() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), i.apply(this, arguments)
            }
            return t = o, (n = [{
                key: "componentDidMount",
                value: function() {
                    this.props.setCanRefine(this.props.canRefine)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.canRefine !== this.props.canRefine && this.props.setCanRefine(this.props.canRefine)
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]) && Cn(t.prototype, n), r && Cn(t, r), Object.defineProperty(t, "prototype", {
                writable: !1
            }), o
        }(e.Component);
        ! function(e, t, n) {
            (t = Tn(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }(An, "propTypes", {
            children: a().node.isRequired,
            canRefine: a().bool.isRequired,
            setCanRefine: a().func.isRequired
        });
        var Dn = function(t) {
            var n = t.canRefine,
                r = t.children;
            return e.createElement(xn, null, (function(t) {
                return e.createElement(An, {
                    setCanRefine: t,
                    canRefine: n
                }, r)
            }))
        };
        Dn.propTypes = {
            canRefine: a().bool.isRequired,
            children: a().node.isRequired
        };
        const Ln = Dn;
        const Mn = Tt((function(t) {
            return e.createElement(Ln, t, e.createElement(mn, t))
        }), {
            $$widgetType: "ais.pagination"
        });
        var Un = "2.17.2";

        function Vn(e) {
            return e.reduce((function(e, t) {
                var n = e.events;
                e = e.additionalParams;
                return "index" in t ? {
                    additionalParams: e,
                    events: n.concat([t])
                } : {
                    events: n,
                    additionalParams: t
                }
            }), {
                events: [],
                additionalParams: void 0
            })
        }
        var qn = function() {};
        qn.get = function(e) {
            var t = null == (t = this.store) ? void 0 : t.getItem(e);
            if (!t) return null;
            try {
                return JSON.parse(t)
            } catch (e) {
                return null
            }
        }, qn.set = function(e, t) {
            var n;
            try {
                null != (n = this.store) && n.setItem(e, JSON.stringify(t))
            } catch (t) {
                console.error("Unable to set " + e + " in localStorage, storage may be full.")
            }
        }, qn.remove = function(e) {
            var t;
            null != (t = this.store) && t.removeItem(e)
        }, qn.store = function() {
            try {
                var e = "__test_localStorage__";
                return globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), globalThis.localStorage
            } catch (e) {}
        }();
        var zn = "AlgoliaObjectQueryCache",
            Hn = 5e3,
            Bn = 1e3;

        function Qn() {
            var e;
            return null != (e = qn.get(zn)) ? e : {}
        }

        function Wn(e) {
            qn.set(zn, function(e) {
                return Object.keys(e).length > Hn ? function(e) {
                    return e = Object.entries(e).sort((function(e, t) {
                        return e = e[1][1], t[1][1] - e
                    })), e.slice(0, e.length - Bn - 1).reduce((function(e, t) {
                        var n = t[0];
                        t = t[1];
                        return Object.assign(Object.assign({}, e), ((e = {})[n] = t, e))
                    }), {})
                }(e) : e
            }(e))
        }

        function $n(e, t) {
            return e + "_" + t
        }

        function Kn(e, t, n) {
            var r = Qn();
            r[$n(e, t)] = [n, Date.now()], Wn(r)
        }
        var Jn = function(e) {
                return void 0 === e
            },
            Yn = function(e) {
                return "function" == typeof e
            };

        function Xn(e) {
            return function(t) {
                for (var n = [], r = arguments.length - 1; 0 < r--;) n[r] = arguments[r + 1];
                if (t && Yn(e[t])) return e[t].apply(e, n);
                console.warn("The method `" + t + "` doesn't exist.")
            }
        }
        var Gn = ["insights-js (" + Un + ")", "insights-js-browser-esm (" + Un + ")"];

        function Zn(e) {
            -1 === this._ua.indexOf(e) && this._ua.push(e)
        }

        function er(e) {
            return Yn(e) && e(this.version), this.version
        }

        function tr(e, t) {
            var n = {};
            for (i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
            return n
        }

        function nr(e) {
            return e.map((function(e) {
                var t, n;
                return function(e) {
                    return !e.queryID && "conversion" === e.eventType
                }(e) && (t = [], n = null == (n = e.objectIDs) ? void 0 : n.map((function(n, r) {
                    var i = null == (i = e.objectData) ? void 0 : i[r];
                    return null != i && i.queryID ? i : ((r = (null != (r = function(e, t) {
                        return Qn()[$n(e, t)]
                    }(e.index, n)) ? r : [])[0]) && t.push(n), Object.assign(Object.assign({}, i), {
                        queryID: r
                    }))
                })), 0 !== t.length) ? Object.assign(Object.assign({}, e), {
                    objectData: n,
                    objectIDsWithInferredQueryID: t
                }) : e
            }))
        }

        function rr(e) {
            return function(t, n) {
                var r = this;
                if (this._userHasOptedOut) return Promise.resolve(!1);
                if (!(!Jn(this._apiKey) && !Jn(this._appId) || (null == (i = null == n ? void 0 : n.headers) ? void 0 : i["X-Algolia-Application-Id"]) && (null == (i = null == n ? void 0 : n.headers) ? void 0 : i["X-Algolia-API-Key"]))) throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with appId and apiKey parameters or provide custom credentials in additional parameters.");
                !this._userToken && this._anonymousUserToken && this.setAnonymousUserToken(!0);
                var i = (null != n && n.inferQueryID ? nr(t) : t).map((function(e) {
                    var t = e.filters,
                        n = tr(e, ["filters"]);
                    e = Object.assign(Object.assign({}, n), {
                        userToken: null != (n = null == e ? void 0 : e.userToken) ? n : r._userToken,
                        authenticatedUserToken: null != (n = null == e ? void 0 : e.authenticatedUserToken) ? n : r._authenticatedUserToken
                    });
                    return Jn(t) || (e.filters = t.map(encodeURIComponent)), e
                }));
                return 0 === i.length ? Promise.resolve(!1) : (t = function(e, t, n, r, i, o, a) {
                    var u = (a = void 0 === a ? {} : a)["X-Algolia-Application-Id"],
                        c = a["X-Algolia-API-Key"],
                        l = (a = tr(a, ["X-Algolia-Application-Id", "X-Algolia-API-Key"]), Object.assign({
                            "X-Algolia-Application-Id": null != u ? u : i,
                            "X-Algolia-API-Key": null != c ? c : o,
                            "X-Algolia-Agent": encodeURIComponent(t.join("; "))
                        }, a));
                    return e(n + "/1/events?" + Object.keys(l).map((function(e) {
                        return e + "=" + l[e]
                    })).join("&"), {
                        events: r
                    })
                }(e, this._ua, this._endpointOrigin, i, this._appId, this._apiKey, null == n ? void 0 : n.headers), function(e) {
                    return "function" == typeof(null == e ? void 0 : e.then)
                }(t) ? t.then(function(e) {
                    return function(t) {
                        return t && e.filter((function(e) {
                            var t = e.eventType,
                                n = e.eventSubtype;
                            e = e.objectIDs;
                            return "conversion" === t && "purchase" === n && (null == e ? void 0 : e.length)
                        })).forEach((function(e) {
                            return function(e, t) {
                                var n = Qn();
                                t.forEach((function(t) {
                                    delete n[$n(e, t)]
                                })), Wn(n)
                            }(e.index, e.objectIDs)
                        })), t
                    }
                }(i)) : t)
            }
        }

        function ir() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }))
        }
        var or = "_ALGOLIA",
            ar = 2592e6;

        function ur(e) {
            (e = void 0 !== e && e) ? this.setUserToken("anonymous-" + ir()): function() {
                try {
                    return Boolean(navigator.cookieEnabled)
                } catch (e) {
                    return !1
                }
            }() && ((e = function(e) {
                for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                    for (var i = n[r];
                        " " === i.charAt(0);) i = i.substring(1);
                    if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
                }
                return ""
            }(or)) && "" !== e && 0 === e.indexOf("anonymous-") ? this.setUserToken(e) : (e = this.setUserToken("anonymous-" + ir()), function(e, t, n) {
                var r = new Date;
                r.setTime(r.getTime() + n), n = "expires=" + r.toUTCString(), document.cookie = e + "=" + t + ";" + n + ";path=/"
            }(or, e, this._cookieDuration)))
        }

        function cr(e) {
            return this._userToken = e, Yn(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken), this._userToken
        }

        function lr(e, t) {
            return Yn(t) && t(null, this._userToken), this._userToken
        }

        function sr(e, t) {
            this._onUserTokenChangeCallback = e, t && t.immediate && Yn(this._onUserTokenChangeCallback) && this._onUserTokenChangeCallback(this._userToken)
        }

        function fr(e) {
            return this._authenticatedUserToken = e, Yn(this._onAuthenticatedUserTokenChangeCallback) && this._onAuthenticatedUserTokenChangeCallback(this._authenticatedUserToken), this._authenticatedUserToken
        }

        function pr(e, t) {
            return Yn(t) && t(null, this._authenticatedUserToken), this._authenticatedUserToken
        }

        function dr(e, t) {
            this._onAuthenticatedUserTokenChangeCallback = e, t && t.immediate && Yn(this._onAuthenticatedUserTokenChangeCallback) && this._onAuthenticatedUserTokenChangeCallback(this._authenticatedUserToken)
        }

        function hr(e, t) {
            return t.map((function(t) {
                return Object.assign({
                    eventType: e
                }, t)
            }))
        }

        function mr(e, t, n) {
            return n.map((function(n) {
                return Object.assign({
                    eventType: e,
                    eventSubtype: t
                }, n)
            }))
        }

        function yr() {
            for (var e = this, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            var r = (i = Vn(t)).events,
                i = i.additionalParams;
            return r.forEach((function(t) {
                var n = t.index,
                    r = t.queryID;
                return t.objectIDs.forEach((function(t) {
                    return !e._userHasOptedOut && Kn(n, t, r)
                }))
            })), this.sendEvents(hr("click", r), i)
        }

        function vr() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = (r = Vn(e)).events,
                r = r.additionalParams;
            return this.sendEvents(hr("click", n), r)
        }

        function gr() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = (r = Vn(e)).events,
                r = r.additionalParams;
            return this.sendEvents(hr("click", n), r)
        }

        function br() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = (r = Vn(e)).events,
                r = r.additionalParams;
            return this.sendEvents(hr("conversion", n), r)
        }

        function wr() {
            for (var e = this, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            var r = (i = Vn(t)).events,
                i = i.additionalParams;
            return r.forEach((function(t) {
                var n = t.index,
                    r = t.queryID,
                    i = t.objectIDs,
                    o = t.objectData;
                return i.forEach((function(t, i) {
                    i = null != (i = null == (i = null == o ? void 0 : o[i]) ? void 0 : i.queryID) ? i : r, !e._userHasOptedOut && i && Kn(n, t, i)
                }))
            })), this.sendEvents(mr("conversion", "addToCart", r), i)
        }

        function Sr() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = (r = Vn(e)).events,
                r = r.additionalParams;
            return this.sendEvents(mr("conversion", "purchase", n), r)
        }

        function Or() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = (r = Vn(e)).events,
                r = r.additionalParams;
            return this.sendEvents(hr("conversion", n), r)
        }

        function Pr() {
            for (var e = this, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            var r = (i = Vn(t)).events,
                i = i.additionalParams;
            return r.forEach((function(t) {
                var n = t.index,
                    r = t.objectIDs,
                    i = t.objectData;
                return r.forEach((function(t, r) {
                    r = null == (r = null == i ? void 0 : i[r]) ? void 0 : r.queryID, !e._userHasOptedOut && r && Kn(n, t, r)
                }))
            })), this.sendEvents(mr("conversion", "addToCart", r), i)
        }

        function _r() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = (r = Vn(e)).events,
                r = r.additionalParams;
            return this.sendEvents(mr("conversion", "purchase", n), r)
        }

        function jr() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = (r = Vn(e)).events,
                r = r.additionalParams;
            return this.sendEvents(hr("conversion", n), r)
        }
        var xr = ["de", "us"];

        function kr(e) {
            var t;
            if (!Jn((e = void 0 === e ? {} : e).region) && -1 === xr.indexOf(e.region)) throw new Error("optional region is incorrect, please provide either one of: " + xr.join(", ") + ".");
            if (!(Jn(e.cookieDuration) || function(e) {
                    return "number" == typeof e
                }(e.cookieDuration) && isFinite(e.cookieDuration) && Math.floor(e.cookieDuration) === e.cookieDuration)) throw new Error("optional cookieDuration is incorrect, expected an integer.");
            (function(e, t, n) {
                var r = t.partial,
                    i = tr(t, ["partial"]);
                r || Object.assign(e, n), Object.assign(e, Object.keys(i).reduce((function(e, t) {
                    return Object.assign(Object.assign({}, e), ((e = {})["_" + t] = i[t], e))
                }), {}))
            })(this, e, {
                _userHasOptedOut: Boolean(e.userHasOptedOut),
                _region: e.region,
                _host: e.host,
                _anonymousUserToken: null == (t = e.anonymousUserToken) || t,
                _useCookie: null != (t = e.useCookie) && t,
                _cookieDuration: e.cookieDuration || 6 * ar
            }), this._endpointOrigin = this._host || (this._region ? "https://insights." + this._region + ".algolia.io" : "https://insights.algolia.io"), this._ua = [].concat(Gn), e.authenticatedUserToken && this.setAuthenticatedUserToken(e.authenticatedUserToken), e.userToken ? this.setUserToken(e.userToken) : this._userToken || this._userHasOptedOut || !this._useCookie || this.setAnonymousUserToken()
        }

        function Er() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = (r = Vn(e)).events,
                r = r.additionalParams;
            return this.sendEvents(hr("view", n), r)
        }

        function Rr() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = (r = Vn(e)).events,
                r = r.additionalParams;
            return this.sendEvents(hr("view", n), r)
        }
        var Cr = function(e) {
            e = e.requestFn, this._endpointOrigin = "https://insights.algolia.io", this._anonymousUserToken = !0, this._userHasOptedOut = !1, this._useCookie = !1, this._cookieDuration = 6 * ar, this._ua = [], this.version = Un, this.sendEvents = rr(e).bind(this), this.init = kr.bind(this), this.addAlgoliaAgent = Zn.bind(this), this.setUserToken = cr.bind(this), this.setAnonymousUserToken = ur.bind(this), this.getUserToken = lr.bind(this), this.onUserTokenChange = sr.bind(this), this.setAuthenticatedUserToken = fr.bind(this), this.getAuthenticatedUserToken = pr.bind(this), this.onAuthenticatedUserTokenChange = dr.bind(this), this.clickedObjectIDsAfterSearch = yr.bind(this), this.clickedObjectIDs = vr.bind(this), this.clickedFilters = gr.bind(this), this.convertedObjectIDsAfterSearch = br.bind(this), this.purchasedObjectIDsAfterSearch = Sr.bind(this), this.addedToCartObjectIDsAfterSearch = wr.bind(this), this.convertedObjectIDs = Or.bind(this), this.addedToCartObjectIDs = Pr.bind(this), this.purchasedObjectIDs = _r.bind(this), this.convertedFilters = jr.bind(this), this.viewedObjectIDs = Er.bind(this), this.viewedFilters = Rr.bind(this), this.getVersion = er.bind(this)
        };
        var Ir = function(e, t) {
                return new Promise((function(n, r) {
                    var i = JSON.stringify(t),
                        o = new XMLHttpRequest;
                    o.addEventListener("readystatechange", (function() {
                        4 === o.readyState && 200 === o.status ? n(!0) : 4 === o.readyState && n(!1)
                    })), o.addEventListener("error", (function() {
                        return r()
                    })), o.addEventListener("timeout", (function() {
                        return n(!1)
                    })), o.open("POST", e), o.setRequestHeader("Content-Type", "application/json"), o.send(i)
                }))
            },
            Fr = function(e, t) {
                var n = JSON.stringify(t);
                n = navigator.sendBeacon(e, n);
                return Promise.resolve(!!n || Ir(e, t))
            },
            Nr = function(e, t) {
                return new Promise((function(n, r) {
                    fetch(e, {
                        method: "POST",
                        body: JSON.stringify(t),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((function(e) {
                        n(200 === e.status)
                    })).catch((function(e) {
                        r(e)
                    }))
                }))
            };
        var Tr = function(e) {
            var t;
            if (e = Xn(new Cr({
                    requestFn: e
                })), "object" == typeof window && !window.AlgoliaAnalyticsObject) {
                for (; t = ir(), void 0 !== window[t];);
                window.AlgoliaAnalyticsObject = t, window[window.AlgoliaAnalyticsObject] = e
            }
            return e.version = Un, e
        }(function() {
            if (function() {
                    try {
                        return Boolean(navigator.sendBeacon)
                    } catch (uu) {
                        return !1
                    }
                }()) return Fr;
            if (function() {
                    try {
                        return Boolean(XMLHttpRequest)
                    } catch (uu) {
                        return !1
                    }
                }()) return Ir;
            if (function() {
                    try {
                        return void 0 !== fetch
                    } catch (uu) {
                        return !1
                    }
                }()) return Nr;
            throw new Error("Could not find a supported HTTP request client in this environment.")
        }());
        const Ar = Tr;

        function Dr(e) {
            return Dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Dr(e)
        }

        function Lr(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Mr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Lr(Object(n), !0).forEach((function(t) {
                    Ur(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lr(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ur(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Dr(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Dr(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Dr(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Vr = function(e, t, n) {
            return function(r, i) {
                if ("function" !== typeof e) throw new TypeError("Expected insightsClient to be a Function");
                var o = function(e) {
                    var t = e.method,
                        n = e.results,
                        r = e.currentHit,
                        i = n.index,
                        o = r.__queryID,
                        a = [r.objectID];
                    if (!o) throw new Error("Could not infer `queryID`. Ensure `clickAnalytics: true` was added with the Configure widget.\nSee: https://alg.li/VpPpLt");
                    switch (t) {
                        case "clickedObjectIDsAfterSearch":
                            return {
                                index: i,
                                queryID: o,
                                objectIDs: a,
                                positions: [r.__position]
                            };
                        case "convertedObjectIDsAfterSearch":
                            return {
                                index: i,
                                queryID: o,
                                objectIDs: a
                            };
                        default:
                            throw new Error('Unsupported method "'.concat(t, '" passed to the insights function. The supported methods are: "clickedObjectIDsAfterSearch", "convertedObjectIDsAfterSearch".'))
                    }
                }({
                    method: r,
                    results: t,
                    currentHit: n
                });
                e(r, Mr(Mr({}, o), i))
            }
        };
        var qr = n(579);
        const zr = (Hr = Ar, Fe({
            displayName: "AlgoliaInsights",
            $$type: "ais.insights",
            getProvidedProps: function(e, t, n) {
                var r = N(n, {
                    ais: e.contextValue,
                    multiIndexContext: e.indexContextValue
                });
                return {
                    insights: Vr(Hr, r, e.hit)
                }
            }
        }))((e => {
            let {
                hit: t,
                insights: n
            } = e;
            return (0, qr.jsx)("div", {
                className: "hit container results-inner-wrapper",
                children: (0, qr.jsxs)("div", {
                    className: "row",
                    children: [t.image && !t.image.startsWith("https//play.vidyard.com/") && (0, qr.jsx)("div", {
                        className: "col-md-3 results-img-wrapper",
                        children: (0, qr.jsx)("div", {
                            className: "result-image",
                            children: (0, qr.jsx)("img", {
                                src: t.image,
                                className: "img-fluid",
                                alt: t.title
                            })
                        })
                    }), (0, qr.jsx)("div", {
                        className: t.image && !t.image.startsWith("https//play.vidyard.com/") ? "col-md-9" : "col-md-12",
                        children: (0, qr.jsx)("div", {
                            className: "result-description",
                            children: (0, qr.jsxs)("div", {
                                className: "result-name",
                                children: [(0, qr.jsx)("a", {
                                    href: t.url,
                                    target: t.url.includes("sierrawireless") ? "_blank" : "_self",
                                    onClick: () => {
                                        n("clickedObjectIDsAfterSearch", {
                                            eventName: "Hit Clicked",
                                            objectIDs: [t.objectID],
                                            positions: [t.__position],
                                            queryID: t.__queryID
                                        })
                                    },
                                    children: (0, qr.jsx)("h3", {
                                        children: -1 === t.url.indexOf("XpertRF.my.salesforce") ? t.title : t.description
                                    })
                                }), (0, qr.jsx)("p", {
                                    className: "mb-2",
                                    children: (0, qr.jsx)("a", {
                                        href: t.url,
                                        target: t.url.includes("sierrawireless") ? "_blank" : "_self",
                                        onClick: () => {
                                            n("clickedObjectIDsAfterSearch", {
                                                eventName: "Hit Clicked",
                                                objectIDs: [t.objectID],
                                                positions: [t.__position],
                                                queryID: t.__queryID
                                            })
                                        },
                                        children: t.url
                                    })
                                }), (0, qr.jsxs)("p", {
                                    className: "mb-2",
                                    children: [-1 === t.url.indexOf("XpertRF.my.salesforce") ? t.description : "".concat(t.XpertRFproduct, " | "), (0, qr.jsxs)("span", {
                                        className: "d-inline-block datasheet-cat",
                                        children: ["\xa0", t.XpertRFwebsitecategory || t.category || ""]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }, t.objectID)
        }));
        var Hr;
        const Br = Fe({
                displayName: "AlgoliaStateResults",
                $$type: "ais.stateResults",
                getProvidedProps: function(e, t, n) {
                    return {
                        searchState: t,
                        searchResults: N(n, {
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        }),
                        allSearchResults: n.results,
                        searching: n.searching,
                        isSearchStalled: n.isSearchStalled,
                        error: n.error,
                        searchingForFacetValues: n.searchingForFacetValues,
                        props: e
                    }
                }
            }),
            Qr = e => e.replace(/\xae|\u2122/g, ""),
            Wr = Br((e => {
                let {
                    searchResults: t
                } = e;
                const n = t && 0 !== t.nbHits,
                    r = t && t.query || "",
                    i = r.toLowerCase().trim(),
                    o = Qr(i),
                    a = t && t.hits || [],
                    u = new RegExp("\\b".concat(o, "\\b"), "i"),
                    c = a.some((e => [e.title, e.description, e.XpertRFproduct, e.category, e.XpertRFwebsitecategory, e.url].some((e => {
                        const t = e ? Qr(e.toLowerCase()) : "";
                        return u.test(t)
                    }))));
                let l = null;
                return n ? (!c && r && (l = (0, qr.jsx)("div", {
                    className: "approximate-match-message",
                    children: (0, qr.jsxs)("p", {
                        children: ["We couldn't find a 100% match for ", (0, qr.jsxs)("strong", {
                            children: ['"', r, '"']
                        }), ". Below are search results for a similar keyword."]
                    })
                })), (0, qr.jsx)("div", {
                    className: "container",
                    children: (0, qr.jsxs)("div", {
                        className: "row",
                        children: [(0, qr.jsx)("div", {
                            className: "col-12 results-total-message",
                            children: r && (0, qr.jsxs)("p", {
                                children: [t.nbHits, ' results for "', (0, qr.jsx)("strong", {
                                    children: r
                                }), '".']
                            })
                        }), (0, qr.jsx)("div", {
                            className: "col-12",
                            children: l
                        })]
                    })
                })) : (0, qr.jsx)("div", {
                    className: "no-results-message",
                    children: (0, qr.jsxs)("p", {
                        children: ["Sorry, no results for ", (0, qr.jsxs)("strong", {
                            children: ['"', r, '"']
                        }), ". Please use a different keyword."]
                    })
                })
            }));

        function $r(e) {
            return $r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, $r(e)
        }

        function Kr(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== $r(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== $r(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === $r(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Jr = "refinementList";

        function Yr(e) {
            return e.attribute
        }

        function Xr(e, t, n) {
            var r = L(e, t, n, "".concat(Jr, ".").concat(Yr(e)), []);
            return "string" !== typeof r ? r : r ? [r] : []
        }

        function Gr(e, t, n, r) {
            var i = Xr(t, n, r);
            return -1 === i.indexOf(e) ? i.concat([e]) : i.filter((function(t) {
                return t !== e
            }))
        }

        function Zr(e) {
            var t = e.showMore,
                n = e.limit,
                r = e.showMoreLimit;
            return t ? r : n
        }

        function ei(e, t, n, r) {
            return A(t, Kr({}, Yr(e), n.length > 0 ? n : ""), r, !0, Jr)
        }
        var ti = ["isRefined", "count:desc", "name:asc"];
        const ni = Fe({
                displayName: "AlgoliaRefinementList",
                $$type: "ais.refinementList",
                propTypes: {
                    id: a().string,
                    attribute: a().string.isRequired,
                    operator: a().oneOf(["and", "or"]),
                    showMore: a().bool,
                    limit: a().number,
                    showMoreLimit: a().number,
                    defaultRefinement: a().arrayOf(a().oneOfType([a().string, a().number])),
                    searchable: a().bool,
                    transformItems: a().func,
                    facetOrdering: a().bool
                },
                defaultProps: {
                    operator: "or",
                    showMore: !1,
                    limit: 10,
                    showMoreLimit: 20,
                    facetOrdering: !0
                },
                getProvidedProps: function(e, t, n, r, i) {
                    var o = e.attribute,
                        a = e.searchable,
                        u = e.indexContextValue,
                        c = e.facetOrdering,
                        l = N(n, {
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        }),
                        s = Boolean(l) && Boolean(l.getFacetByName(o)),
                        f = Boolean(i && i[o] && "" !== i.query);
                    if (a && u) throw new Error("react-instantsearch: searching in *List is not available when used inside a multi index context");
                    if (!s) return {
                        items: [],
                        currentRefinement: Xr(e, t, {
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        }),
                        canRefine: s,
                        isFromSearch: f,
                        searchable: a
                    };
                    var p = f ? i[o].map((function(n) {
                            return {
                                label: n.value,
                                value: Gr(n.escapedValue, e, t, {
                                    ais: e.contextValue,
                                    multiIndexContext: e.indexContextValue
                                }),
                                _highlightResult: {
                                    label: {
                                        value: n.highlighted
                                    }
                                },
                                count: n.count,
                                isRefined: n.isRefined
                            }
                        })) : l.getFacetValues(o, {
                            sortBy: ti,
                            facetOrdering: c
                        }).map((function(n) {
                            return {
                                label: n.name,
                                value: Gr(n.escapedValue, e, t, {
                                    ais: e.contextValue,
                                    multiIndexContext: e.indexContextValue
                                }),
                                count: n.count,
                                isRefined: n.isRefined
                            }
                        })),
                        d = e.transformItems ? e.transformItems(p) : p;
                    return {
                        items: d.slice(0, Zr(e)),
                        currentRefinement: Xr(e, t, {
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        }),
                        isFromSearch: f,
                        searchable: a,
                        canRefine: d.length > 0
                    }
                },
                refine: function(e, t, n) {
                    return ei(e, t, n, {
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    })
                },
                searchForFacetValues: function(e, t, n) {
                    return {
                        facetName: e.attribute,
                        query: n,
                        maxFacetHits: Zr(e)
                    }
                },
                cleanUp: function(e, t) {
                    return function(e, t, n) {
                        return M(t, n, "".concat(Jr, ".").concat(Yr(e)))
                    }(e, t, {
                        ais: e.contextValue,
                        multiIndexContext: e.indexContextValue
                    })
                },
                getSearchParameters: function(e, t, n) {
                    var r = t.attribute,
                        i = "and" === t.operator ? "addFacet" : "addDisjunctiveFacet",
                        o = "".concat(i, "Refinement");
                    return e = (e = e.setQueryParameters({
                        maxValuesPerFacet: Math.max(e.maxValuesPerFacet || 0, Zr(t))
                    }))[i](r), Xr(t, n, {
                        ais: t.contextValue,
                        multiIndexContext: t.indexContextValue
                    }).reduce((function(e, t) {
                        return e[o](r, t)
                    }), e)
                },
                getMetadata: function(e, t) {
                    var n = Yr(e),
                        r = {
                            ais: e.contextValue,
                            multiIndexContext: e.indexContextValue
                        };
                    return {
                        id: n,
                        index: F(r),
                        items: Xr(e, t, r).length > 0 ? [{
                            attribute: e.attribute,
                            label: "".concat(e.attribute, ": "),
                            currentRefinement: Xr(e, t, r),
                            value: function(t) {
                                return ei(e, t, [], r)
                            },
                            items: Xr(e, t, r).map((function(n) {
                                return {
                                    label: x("".concat(n)),
                                    value: function(i) {
                                        var o = Xr(e, i, r).filter((function(e) {
                                            return e !== n
                                        }));
                                        return ei(e, t, o, r)
                                    }
                                }
                            }))
                        }] : []
                    }
                }
            }),
            ri = ni((e => {
                let {
                    items: t,
                    refine: n,
                    title: r,
                    titleClassName: i,
                    attribute: o,
                    ...a
                } = e;
                return 0 === t.length ? null : (0, qr.jsxs)("div", {
                    className: "ais-RefinementList",
                    children: [(0, qr.jsx)("h4", {
                        className: i,
                        children: r
                    }), (0, qr.jsx)("ul", {
                        className: "ais-RefinementList-list",
                        children: t.map((e => (0, qr.jsx)("li", {
                            className: "ais-RefinementList-item",
                            children: (0, qr.jsxs)("label", {
                                className: "ais-RefinementList-label",
                                children: [(0, qr.jsx)("input", {
                                    className: "ais-RefinementList-checkbox",
                                    type: "checkbox",
                                    checked: e.isRefined,
                                    onChange: () => {
                                        n(e.value), Ar("clickedFilters", {
                                            eventName: "Filter Applied",
                                            index: "crawler_XpertRF",
                                            filters: ["".concat(o, ":").concat(e.label)]
                                        })
                                    }
                                }), (0, qr.jsx)("span", {
                                    className: "ais-RefinementList-labelText",
                                    children: e.label
                                }), (0, qr.jsx)("span", {
                                    className: "ais-RefinementList-count",
                                    children: e.count
                                })]
                            })
                        }, e.label)))
                    })]
                })
            }));
        Ar("init", {
            appId: "2E5235WJP6",
            apiKey: "013b93fcfbc49e670a11282026ebfe71",
            useCookie: !0
        });
        const ii = i()("2E5235WJP6", "013b93fcfbc49e670a11282026ebfe71"),
            oi = ii.initIndex("crawler_XpertRF"),
            ai = () => {
                const t = new URLSearchParams(window.location.search).get("crawler_XpertRF[query]"),
                    [n, r] = (0, e.useState)({
                        query: t
                    }),
                    [i, o] = (0, e.useState)({
                        documentType: [],
                        productCategory: [],
                        websites: []
                    }),
                    [a, u] = (0, e.useState)("");
                (0, e.useEffect)((() => {
                    const e = (e => {
                        let t = "";
                        switch (e) {
                            case "XpertRF.cn":
                            case "www.XpertRF.cn":
                                t = "Chinese";
                                break;
                            case "XpertRF.fr":
                            case "www.XpertRF.fr":
                                t = "French";
                                break;
                            case "XpertRF.jp":
                            case "www.XpertRF.jp":
                                t = "Japanese";
                                break;
                            default:
                                t = "English"
                        }
                        return t
                    })((() => {
                        const e = window.location.host;
                        return ["localhost:5000", "localhost:3000", "dev.XpertRF.info", "dev.XpertRF.com"].includes(e) ? "www.XpertRF.com" : ["cn.XpertRF.info"].includes(e) ? "XpertRF.cn" : ["XpertRF.jp"].includes(e) ? "XpertRF.jp" : ["XpertRF.fr"].includes(e) ? "XpertRF.fr" : e
                    })());
                    u(e)
                }), []), (0, e.useEffect)((() => {
                    (async () => {
                        try {
                            const e = await oi.search("", {
                                facets: ["documentType", "productCategory", "websites"],
                                hitsPerPage: 0,
                                analytics: !1,
                                clickAnalytics: !1
                            });
                            o({
                                documentType: Object.keys(e.facets.documentType || {}).map((t => ({
                                    label: t,
                                    count: e.facets.documentType[t]
                                }))),
                                productCategory: Object.keys(e.facets.productCategory || {}).map((t => ({
                                    label: t,
                                    count: e.facets.productCategory[t]
                                }))),
                                websites: Object.keys(e.facets.websites || {}).map((t => ({
                                    label: t,
                                    count: e.facets.websites[t]
                                })))
                            })
                        } catch (e) {
                            console.error("Error fetching refinement items:", e)
                        }
                    })()
                }), []);
                return (0, qr.jsx)("div", {
                    className: "search-page container-fluid",
                    children: (0, qr.jsx)("div", {
                        className: "row mt-4",
                        children: (0, qr.jsxs)(ve, {
                            indexName: "crawler_XpertRF",
                            searchClient: ii,
                            onStateChange: e => {
                                if (r(e), e.query) {
                                    const t = "crawler_XpertRF%5Bquery%5D=".concat(encodeURIComponent(e.query));
                                    window.history.pushState({}, "", "".concat(window.location.origin, "/search?").concat(t))
                                } else window.history.pushState({}, "", "".concat(window.location.origin, "/search"))
                            },
                            insightsClient: Ar,
                            searchFunction: e => {
                                e.state.query && e.search()
                            },
                            children: [(0, qr.jsx)(Ve, {
                                analytics: !0,
                                clickAnalytics: !0,
                                hitsPerPage: 10
                            }), (0, qr.jsx)("div", {
                                className: "col-md-4",
                                children: (0, qr.jsxs)("div", {
                                    className: "filters",
                                    children: [(0, qr.jsx)(ri, {
                                        attribute: "documentType",
                                        title: "Document Types",
                                        titleClassName: "document-types-title",
                                        allItems: i.documentType
                                    }), (0, qr.jsx)(ri, {
                                        attribute: "productCategory",
                                        title: "Product Category",
                                        titleClassName: "product-category-title",
                                        allItems: i.productCategory
                                    }), (0, qr.jsx)(ri, {
                                        attribute: "websites",
                                        title: "Websites",
                                        titleClassName: "websites-title",
                                        defaultRefinement: [a],
                                        allItems: i.websites
                                    })]
                                })
                            }), (0, qr.jsxs)("div", {
                                className: "col-md-8 search-results",
                                children: [(0, qr.jsx)(_t, {
                                    defaultRefinement: n.query,
                                    onSubmit: e => {
                                        e.preventDefault()
                                    }
                                }), (0, qr.jsx)(Wr, {}), (0, qr.jsx)(Ct, {
                                    hitComponent: zr
                                }), (0, qr.jsx)("div", {
                                    className: "pagination-wrapper",
                                    children: (0, qr.jsx)(Mn, {})
                                })]
                            })]
                        })
                    })
                })
            };

        function ui(e, t) {
            var n = void 0;
            return function() {
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                n && clearTimeout(n), n = setTimeout((function() {
                    return e.apply(void 0, i)
                }), t)
            }
        }

        function ci(e) {
            return {
                current: e
            }
        }

        function li(e) {
            return e !== Object(e)
        }

        function si(e, t) {
            if (e === t) return !0;
            if (li(e) || li(t) || "function" === typeof e || "function" === typeof t) return e === t;
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                var i = r[n];
                if (!(i in t)) return !1;
                if (!si(e[i], t[i])) return !1
            }
            return !0
        }
        var fi = function() {};

        function pi(e) {
            var t = e.item,
                n = e.items,
                r = void 0 === n ? [] : n;
            return {
                index: t.__autocomplete_indexName,
                items: [t],
                positions: [1 + r.findIndex((function(e) {
                    return e.objectID === t.objectID
                }))],
                queryID: t.__autocomplete_queryID,
                algoliaSource: ["autocomplete"]
            }
        }

        function di(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, o, a, u = [],
                        c = !0,
                        l = !1;
                    try {
                        if (o = (n = n.call(e)).next, 0 === t) {
                            if (Object(n) !== n) return;
                            c = !1
                        } else
                            for (; !(c = (r = o.call(n)).done) && (u.push(r.value), u.length !== t); c = !0);
                    } catch (s) {
                        l = !0, i = s
                    } finally {
                        try {
                            if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                        } finally {
                            if (l) throw i
                        }
                    }
                    return u
                }
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return hi(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hi(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function hi(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var mi = ["items"],
            yi = ["items"];

        function vi(e) {
            return vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, vi(e)
        }

        function gi(e) {
            return function(e) {
                if (Array.isArray(e)) return bi(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return bi(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bi(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function bi(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function wi(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function Si(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Oi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Si(Object(n), !0).forEach((function(t) {
                    Pi(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Si(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Pi(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== vi(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== vi(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === vi(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function _i(e) {
            return e.map((function(e) {
                var t = e.items,
                    n = wi(e, mi);
                return Oi(Oi({}, n), {}, {
                    objectIDs: (null === t || void 0 === t ? void 0 : t.map((function(e) {
                        return e.objectID
                    }))) || n.objectIDs
                })
            }))
        }

        function ji(e) {
            var t = function(e) {
                var t = di((e.version || "").split(".").map(Number), 2),
                    n = t[0],
                    r = t[1];
                return n >= 3 || 2 === n && r >= 4 || 1 === n && r >= 10
            }(e);

            function n(n, r, i) {
                if (t && "undefined" !== typeof i) {
                    var o = i[0].__autocomplete_algoliaCredentials,
                        a = {
                            "X-Algolia-Application-Id": o.appId,
                            "X-Algolia-API-Key": o.apiKey
                        };
                    e.apply(void 0, [n].concat(gi(r), [{
                        headers: a
                    }]))
                } else e.apply(void 0, [n].concat(gi(r)))
            }
            return {
                init: function(t, n) {
                    e("init", {
                        appId: t,
                        apiKey: n
                    })
                },
                setAuthenticatedUserToken: function(t) {
                    e("setAuthenticatedUserToken", t)
                },
                setUserToken: function(t) {
                    e("setUserToken", t)
                },
                clickedObjectIDsAfterSearch: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    t.length > 0 && n("clickedObjectIDsAfterSearch", _i(t), t[0].items)
                },
                clickedObjectIDs: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    t.length > 0 && n("clickedObjectIDs", _i(t), t[0].items)
                },
                clickedFilters: function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    n.length > 0 && e.apply(void 0, ["clickedFilters"].concat(n))
                },
                convertedObjectIDsAfterSearch: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    t.length > 0 && n("convertedObjectIDsAfterSearch", _i(t), t[0].items)
                },
                convertedObjectIDs: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    t.length > 0 && n("convertedObjectIDs", _i(t), t[0].items)
                },
                convertedFilters: function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    n.length > 0 && e.apply(void 0, ["convertedFilters"].concat(n))
                },
                viewedObjectIDs: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    t.length > 0 && t.reduce((function(e, t) {
                        var n = t.items,
                            r = wi(t, yi);
                        return [].concat(gi(e), gi(function(e) {
                            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n = [], r = 0; r < e.objectIDs.length; r += t) n.push(Oi(Oi({}, e), {}, {
                                objectIDs: e.objectIDs.slice(r, r + t)
                            }));
                            return n
                        }(Oi(Oi({}, r), {}, {
                            objectIDs: (null === n || void 0 === n ? void 0 : n.map((function(e) {
                                return e.objectID
                            }))) || r.objectIDs
                        })).map((function(e) {
                            return {
                                items: n,
                                payload: e
                            }
                        }))))
                    }), []).forEach((function(e) {
                        var t = e.items;
                        return n("viewedObjectIDs", [e.payload], t)
                    }))
                },
                viewedFilters: function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    n.length > 0 && e.apply(void 0, ["viewedFilters"].concat(n))
                }
            }
        }

        function xi(e) {
            var t = e.items.reduce((function(e, t) {
                var n;
                return e[t.__autocomplete_indexName] = (null !== (n = e[t.__autocomplete_indexName]) && void 0 !== n ? n : []).concat(t), e
            }), {});
            return Object.keys(t).map((function(e) {
                return {
                    index: e,
                    items: t[e],
                    algoliaSource: ["autocomplete"]
                }
            }))
        }

        function ki(e) {
            return e.objectID && e.__autocomplete_indexName && e.__autocomplete_queryID
        }

        function Ei(e) {
            return Ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Ei(e)
        }

        function Ri(e) {
            return function(e) {
                if (Array.isArray(e)) return Ci(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return Ci(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ci(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Ci(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Ii(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Fi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ii(Object(n), !0).forEach((function(t) {
                    Ni(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ii(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ni(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Ei(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Ei(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Ei(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Ti = "2.13.0",
            Ai = "https://cdn.jsdelivr.net/npm/search-insights@".concat(Ti, "/dist/search-insights.min.js"),
            Di = ui((function(e) {
                var t = e.onItemsChange,
                    n = e.items,
                    r = e.insights,
                    i = e.state;
                t({
                    insights: r,
                    insightsEvents: xi({
                        items: n
                    }).map((function(e) {
                        return Fi({
                            eventName: "Items Viewed"
                        }, e)
                    })),
                    state: i
                })
            }), 400);

        function Li(e) {
            var t = function(e) {
                    return Fi({
                        onItemsChange: function(e) {
                            var t = e.insights,
                                n = e.insightsEvents,
                                r = e.state;
                            t.viewedObjectIDs.apply(t, Ri(n.map((function(e) {
                                return Fi(Fi({}, e), {}, {
                                    algoliaSource: Mi(e.algoliaSource, r.context)
                                })
                            }))))
                        },
                        onSelect: function(e) {
                            var t = e.insights,
                                n = e.insightsEvents,
                                r = e.state;
                            t.clickedObjectIDsAfterSearch.apply(t, Ri(n.map((function(e) {
                                return Fi(Fi({}, e), {}, {
                                    algoliaSource: Mi(e.algoliaSource, r.context)
                                })
                            }))))
                        },
                        onActive: fi,
                        __autocomplete_clickAnalytics: !0
                    }, e)
                }(e),
                n = t.insightsClient,
                r = t.insightsInitParams,
                i = t.onItemsChange,
                o = t.onSelect,
                a = t.onActive,
                u = t.__autocomplete_clickAnalytics,
                c = n;
            if (n || function(e) {
                    if ("undefined" !== typeof window) e({
                        window: window
                    })
                }((function(e) {
                    var t = e.window,
                        n = t.AlgoliaAnalyticsObject || "aa";
                    "string" === typeof n && (c = t[n]), c || (t.AlgoliaAnalyticsObject = n, t[n] || (t[n] = function() {
                        t[n].queue || (t[n].queue = []);
                        for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                        t[n].queue.push(r)
                    }), t[n].version = Ti, c = t[n], function(e) {
                        var t = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
                        try {
                            var n = e.document.createElement("script");
                            n.async = !0, n.src = Ai, n.onerror = function() {
                                console.error(t)
                            }, document.body.appendChild(n)
                        } catch (r) {
                            console.error(t)
                        }
                    }(t))
                })), !c) return {};
            r && c("init", Fi({
                partial: !0
            }, r));
            var l = ji(c),
                s = ci([]),
                f = ui((function(e) {
                    var t = e.state;
                    if (t.isOpen) {
                        var n = t.collections.reduce((function(e, t) {
                            return [].concat(Ri(e), Ri(t.items))
                        }), []).filter(ki);
                        si(s.current.map((function(e) {
                            return e.objectID
                        })), n.map((function(e) {
                            return e.objectID
                        }))) || (s.current = n, n.length > 0 && Di({
                            onItemsChange: i,
                            items: n,
                            insights: l,
                            state: t
                        }))
                    }
                }), 0);
            return {
                name: "aa.algoliaInsightsPlugin",
                subscribe: function(e) {
                    var t = e.setContext,
                        n = e.onSelect,
                        r = e.onActive,
                        i = !1;

                    function s(e) {
                        t({
                            algoliaInsightsPlugin: {
                                __algoliaSearchParameters: Fi(Fi({}, u ? {
                                    clickAnalytics: !0
                                } : {}), e ? {
                                    userToken: Ui(e)
                                } : {}),
                                insights: l
                            }
                        })
                    }
                    c("addAlgoliaAgent", "insights-plugin"), s(), c("onUserTokenChange", (function(e) {
                        i || s(e)
                    })), c("getUserToken", null, (function(e, t) {
                        i || s(t)
                    })), c("onAuthenticatedUserTokenChange", (function(e) {
                        e ? (i = !0, s(e)) : (i = !1, c("getUserToken", null, (function(e, t) {
                            return s(t)
                        })))
                    })), c("getAuthenticatedUserToken", null, (function(e, t) {
                        t && (i = !0, s(t))
                    })), n((function(e) {
                        var t = e.item,
                            n = e.state,
                            r = e.event,
                            i = e.source;
                        ki(t) && o({
                            state: n,
                            event: r,
                            insights: l,
                            item: t,
                            insightsEvents: [Fi({
                                eventName: "Item Selected"
                            }, pi({
                                item: t,
                                items: i.getItems().filter(ki)
                            }))]
                        })
                    })), r((function(e) {
                        var t = e.item,
                            n = e.source,
                            r = e.state,
                            i = e.event;
                        ki(t) && a({
                            state: r,
                            event: i,
                            insights: l,
                            item: t,
                            insightsEvents: [Fi({
                                eventName: "Item Active"
                            }, pi({
                                item: t,
                                items: n.getItems().filter(ki)
                            }))]
                        })
                    }))
                },
                onStateChange: function(e) {
                    var t = e.state;
                    f({
                        state: t
                    })
                },
                __autocomplete_pluginOptions: e
            }
        }

        function Mi() {
            var e, t = arguments.length > 1 ? arguments[1] : void 0;
            return [].concat(Ri(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []), ["autocomplete-internal"], Ri(null !== (e = t.algoliaInsightsPlugin) && void 0 !== e && e.__automaticInsights ? ["autocomplete-automatic"] : []))
        }

        function Ui(e) {
            return "number" === typeof e ? e.toString() : e
        }

        function Vi() {
            var e = [];
            return {
                add: function(t) {
                    return e.push(t), t.finally((function() {
                        e = e.filter((function(e) {
                            return e !== t
                        }))
                    }))
                },
                cancelAll: function() {
                    e.forEach((function(e) {
                        return e.cancel()
                    }))
                },
                isEmpty: function() {
                    return 0 === e.length
                }
            }
        }

        function qi(e) {
            return qi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, qi(e)
        }

        function zi(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Hi(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== qi(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== qi(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === qi(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Bi(e, t, n) {
            var r = t.initialState;
            return {
                getState: function() {
                    return r
                },
                dispatch: function(i, o) {
                    var a = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? zi(Object(n), !0).forEach((function(t) {
                                Hi(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zi(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, r);
                    r = e(r, {
                        type: i,
                        props: t,
                        payload: o
                    }), n({
                        state: r,
                        prevState: a
                    })
                },
                pendingRequests: Vi()
            }
        }

        function Qi(e) {
            return e.reduce((function(e, t) {
                return e.concat(t)
            }), [])
        }

        function Wi(e) {
            return Wi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Wi(e)
        }

        function $i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Ki(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $i(Object(n), !0).forEach((function(t) {
                    Ji(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $i(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ji(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Wi(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Wi(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Wi(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Yi(e) {
            return 0 === e.collections.length ? 0 : e.collections.reduce((function(e, t) {
                return e + t.items.length
            }), 0)
        }
        var Xi = 0;

        function Gi() {
            return "autocomplete-".concat(Xi++)
        }

        function Zi(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function eo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zi(Object(n), !0).forEach((function(t) {
                    to(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zi(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function to(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== no(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== no(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === no(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function no(e) {
            return no = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, no(e)
        }

        function ro(e) {
            return ro = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, ro(e)
        }

        function io(e) {
            return function(e) {
                if (Array.isArray(e)) return oo(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return oo(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oo(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function oo(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function ao(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function uo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ao(Object(n), !0).forEach((function(t) {
                    co(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ao(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function co(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== ro(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== ro(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === ro(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function lo(e, t) {
            var n, r = "undefined" !== typeof window ? window : {},
                i = e.plugins || [];
            return uo(uo({
                debug: !1,
                openOnFocus: !1,
                enterKeyHint: void 0,
                ignoreCompositionEvents: !1,
                placeholder: "",
                autoFocus: !1,
                defaultActiveItemId: null,
                stallThreshold: 300,
                insights: void 0,
                environment: r,
                shouldPanelOpen: function(e) {
                    return Yi(e.state) > 0
                },
                reshape: function(e) {
                    return e.sources
                }
            }, e), {}, {
                id: null !== (n = e.id) && void 0 !== n ? n : Gi(),
                plugins: i,
                initialState: uo({
                    activeItemId: null,
                    query: "",
                    completion: null,
                    collections: [],
                    isOpen: !1,
                    status: "idle",
                    context: {}
                }, e.initialState),
                onStateChange: function(t) {
                    var n;
                    null === (n = e.onStateChange) || void 0 === n || n.call(e, t), i.forEach((function(e) {
                        var n;
                        return null === (n = e.onStateChange) || void 0 === n ? void 0 : n.call(e, t)
                    }))
                },
                onSubmit: function(t) {
                    var n;
                    null === (n = e.onSubmit) || void 0 === n || n.call(e, t), i.forEach((function(e) {
                        var n;
                        return null === (n = e.onSubmit) || void 0 === n ? void 0 : n.call(e, t)
                    }))
                },
                onReset: function(t) {
                    var n;
                    null === (n = e.onReset) || void 0 === n || n.call(e, t), i.forEach((function(e) {
                        var n;
                        return null === (n = e.onReset) || void 0 === n ? void 0 : n.call(e, t)
                    }))
                },
                getSources: function(n) {
                    return Promise.all([].concat(io(i.map((function(e) {
                        return e.getSources
                    }))), [e.getSources]).filter(Boolean).map((function(e) {
                        return function(e, t) {
                            var n = [];
                            return Promise.resolve(e(t)).then((function(e) {
                                return Array.isArray(e), Promise.all(e.filter((function(e) {
                                    return Boolean(e)
                                })).map((function(e) {
                                    if (e.sourceId, n.includes(e.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId), " is not unique."));
                                    n.push(e.sourceId);
                                    var t = {
                                        getItemInputValue: function(e) {
                                            return e.state.query
                                        },
                                        getItemUrl: function() {},
                                        onSelect: function(e) {
                                            (0, e.setIsOpen)(!1)
                                        },
                                        onActive: fi,
                                        onResolve: fi
                                    };
                                    Object.keys(t).forEach((function(e) {
                                        t[e].__default = !0
                                    }));
                                    var r = eo(eo({}, t), e);
                                    return Promise.resolve(r)
                                })))
                            }))
                        }(e, n)
                    }))).then((function(e) {
                        return Qi(e)
                    })).then((function(e) {
                        return e.map((function(e) {
                            return uo(uo({}, e), {}, {
                                onSelect: function(n) {
                                    e.onSelect(n), t.forEach((function(e) {
                                        var t;
                                        return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, n)
                                    }))
                                },
                                onActive: function(n) {
                                    e.onActive(n), t.forEach((function(e) {
                                        var t;
                                        return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, n)
                                    }))
                                },
                                onResolve: function(n) {
                                    e.onResolve(n), t.forEach((function(e) {
                                        var t;
                                        return null === (t = e.onResolve) || void 0 === t ? void 0 : t.call(e, n)
                                    }))
                                }
                            })
                        }))
                    }))
                },
                navigator: uo({
                    navigate: function(e) {
                        var t = e.itemUrl;
                        r.location.assign(t)
                    },
                    navigateNewTab: function(e) {
                        var t = e.itemUrl,
                            n = r.open(t, "_blank", "noopener");
                        null === n || void 0 === n || n.focus()
                    },
                    navigateNewWindow: function(e) {
                        var t = e.itemUrl;
                        r.open(t, "_blank", "noopener")
                    }
                }, e.navigator)
            })
        }

        function so(e) {
            return so = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, so(e)
        }

        function fo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function po(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? fo(Object(n), !0).forEach((function(t) {
                    ho(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fo(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ho(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== so(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== so(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === so(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function mo(e) {
            return mo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, mo(e)
        }

        function yo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function vo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? yo(Object(n), !0).forEach((function(t) {
                    go(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yo(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function go(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== mo(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== mo(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === mo(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function bo(e) {
            return function(e) {
                if (Array.isArray(e)) return wo(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return wo(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wo(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function wo(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function So(e) {
            return Boolean(e.execute)
        }

        function Oo(e, t, n) {
            if (i = e, Boolean(null === i || void 0 === i ? void 0 : i.execute)) {
                var r = "algolia" === e.requesterId ? Object.assign.apply(Object, [{}].concat(bo(Object.keys(n.context).map((function(e) {
                    var t;
                    return null === (t = n.context[e]) || void 0 === t ? void 0 : t.__algoliaSearchParameters
                }))))) : {};
                return vo(vo({}, e), {}, {
                    requests: e.queries.map((function(n) {
                        return {
                            query: "algolia" === e.requesterId ? vo(vo({}, n), {}, {
                                params: vo(vo({}, r), n.params)
                            }) : n,
                            sourceId: t,
                            transformResponse: e.transformResponse
                        }
                    }))
                })
            }
            var i;
            return {
                items: e,
                sourceId: t
            }
        }

        function Po(e) {
            var t = e.reduce((function(e, t) {
                    if (!So(t)) return e.push(t), e;
                    var n = t.searchClient,
                        r = t.execute,
                        i = t.requesterId,
                        o = t.requests,
                        a = e.find((function(e) {
                            return So(t) && So(e) && e.searchClient === n && Boolean(i) && e.requesterId === i
                        }));
                    if (a) {
                        var u;
                        (u = a.items).push.apply(u, bo(o))
                    } else {
                        var c = {
                            execute: r,
                            requesterId: i,
                            items: o,
                            searchClient: n
                        };
                        e.push(c)
                    }
                    return e
                }), []),
                n = t.map((function(e) {
                    if (!So(e)) return Promise.resolve(e);
                    var t = e,
                        n = t.execute,
                        r = t.items;
                    return n({
                        searchClient: t.searchClient,
                        requests: r
                    })
                }));
            return Promise.all(n).then((function(e) {
                return Qi(e)
            }))
        }

        function _o(e, t, n) {
            return t.map((function(t) {
                var r, i = e.filter((function(e) {
                        return e.sourceId === t.sourceId
                    })),
                    o = i.map((function(e) {
                        return e.items
                    })),
                    a = i[0].transformResponse,
                    u = a ? a({
                        results: r = o,
                        hits: r.map((function(e) {
                            return e.hits
                        })).filter(Boolean),
                        facetHits: r.map((function(e) {
                            var t;
                            return null === (t = e.facetHits) || void 0 === t ? void 0 : t.map((function(e) {
                                return {
                                    label: e.value,
                                    count: e.count,
                                    _highlightResult: {
                                        label: {
                                            value: e.highlighted
                                        }
                                    }
                                }
                            }))
                        })).filter(Boolean)
                    }) : o;
                return t.onResolve({
                    source: t,
                    results: o,
                    items: u,
                    state: n.getState()
                }), Array.isArray(u), u.every(Boolean), 'The `getItems` function from source "'.concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), {
                    source: t,
                    items: u
                }
            }))
        }

        function jo(e, t) {
            var n = t;
            return {
                then: function(t, r) {
                    return jo(e.then(Eo(t, n, e), Eo(r, n, e)), n)
                },
                catch: function(t) {
                    return jo(e.catch(Eo(t, n, e)), n)
                },
                finally: function(t) {
                    return t && n.onCancelList.push(t), jo(e.finally(Eo(t && function() {
                        return n.onCancelList = [], t()
                    }, n, e)), n)
                },
                cancel: function() {
                    n.isCanceled = !0;
                    var e = n.onCancelList;
                    n.onCancelList = [], e.forEach((function(e) {
                        e()
                    }))
                },
                isCanceled: function() {
                    return !0 === n.isCanceled
                }
            }
        }

        function xo(e) {
            return jo(new Promise((function(t, n) {
                return e(t, n)
            })), {
                isCanceled: !1,
                onCancelList: []
            })
        }

        function ko(e) {
            return jo(e, {
                isCanceled: !1,
                onCancelList: []
            })
        }

        function Eo(e, t, n) {
            return e ? function(n) {
                return t.isCanceled ? n : e(n)
            } : n
        }

        function Ro(e) {
            var t = function(e) {
                var t = e.collections.map((function(e) {
                        return e.items.length
                    })).reduce((function(e, t, n) {
                        var r = (e[n - 1] || 0) + t;
                        return e.push(r), e
                    }), []),
                    n = t.reduce((function(t, n) {
                        return n <= e.activeItemId ? t + 1 : t
                    }), 0);
                return e.collections[n]
            }(e);
            if (!t) return null;
            var n = t.items[function(e) {
                    for (var t = e.state, n = e.collection, r = !1, i = 0, o = 0; !1 === r;) {
                        var a = t.collections[i];
                        if (a === n) {
                            r = !0;
                            break
                        }
                        o += a.items.length, i++
                    }
                    return t.activeItemId - o
                }({
                    state: e,
                    collection: t
                })],
                r = t.source;
            return {
                item: n,
                itemInputValue: r.getItemInputValue({
                    item: n,
                    state: e
                }),
                itemUrl: r.getItemUrl({
                    item: n,
                    state: e
                }),
                source: r
            }
        }

        function Co(e) {
            return Co = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Co(e)
        }
        xo.resolve = function(e) {
            return ko(Promise.resolve(e))
        }, xo.reject = function(e) {
            return ko(Promise.reject(e))
        };
        var Io = ["event", "nextState", "props", "query", "refresh", "store"];

        function Fo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function No(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Fo(Object(n), !0).forEach((function(t) {
                    To(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fo(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function To(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Co(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Co(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Co(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Ao(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var Do = null,
            Lo = function() {
                var e = -1,
                    t = -1,
                    n = void 0;
                return function(r) {
                    var i = ++e;
                    return Promise.resolve(r).then((function(e) {
                        return n && i < t ? n : (t = i, n = e, e)
                    }))
                }
            }();

        function Mo(e) {
            var t = e.event,
                n = e.nextState,
                r = void 0 === n ? {} : n,
                i = e.props,
                o = e.query,
                a = e.refresh,
                u = e.store,
                c = Ao(e, Io);
            Do && i.environment.clearTimeout(Do);
            var l = c.setCollections,
                s = c.setIsOpen,
                f = c.setQuery,
                p = c.setActiveItemId,
                d = c.setStatus,
                h = c.setContext;
            if (f(o), p(i.defaultActiveItemId), !o && !1 === i.openOnFocus) {
                var m, y = u.getState().collections.map((function(e) {
                    return No(No({}, e), {}, {
                        items: []
                    })
                }));
                d("idle"), l(y), s(null !== (m = r.isOpen) && void 0 !== m ? m : i.shouldPanelOpen({
                    state: u.getState()
                }));
                var v = ko(Lo(y).then((function() {
                    return Promise.resolve()
                })));
                return u.pendingRequests.add(v)
            }
            d("loading"), Do = i.environment.setTimeout((function() {
                d("stalled")
            }), i.stallThreshold);
            var g = ko(Lo(i.getSources(No({
                query: o,
                refresh: a,
                state: u.getState()
            }, c)).then((function(e) {
                return Promise.all(e.map((function(e) {
                    return Promise.resolve(e.getItems(No({
                        query: o,
                        refresh: a,
                        state: u.getState()
                    }, c))).then((function(t) {
                        return Oo(t, e.sourceId, u.getState())
                    }))
                }))).then(Po).then((function(t) {
                    var n, r = t.some((function(e) {
                        return function(e) {
                            return !Array.isArray(e) && Boolean(null === e || void 0 === e ? void 0 : e._automaticInsights)
                        }(e.items)
                    }));
                    r && h({
                        algoliaInsightsPlugin: No(No({}, (null === (n = u.getState().context) || void 0 === n ? void 0 : n.algoliaInsightsPlugin) || {}), {}, {
                            __automaticInsights: r
                        })
                    });
                    return _o(t, e, u)
                })).then((function(e) {
                    return function(e) {
                        var t = e.collections,
                            n = e.props,
                            r = e.state,
                            i = t.reduce((function(e, t) {
                                return po(po({}, e), {}, ho({}, t.source.sourceId, po(po({}, t.source), {}, {
                                    getItems: function() {
                                        return Qi(t.items)
                                    }
                                })))
                            }), {}),
                            o = n.plugins.reduce((function(e, t) {
                                return t.reshape ? t.reshape(e) : e
                            }), {
                                sourcesBySourceId: i,
                                state: r
                            }).sourcesBySourceId;
                        return Qi(n.reshape({
                            sourcesBySourceId: o,
                            sources: Object.values(o),
                            state: r
                        })).filter(Boolean).map((function(e) {
                            return {
                                source: e,
                                items: e.getItems()
                            }
                        }))
                    }({
                        collections: e,
                        props: i,
                        state: u.getState()
                    })
                }))
            })))).then((function(e) {
                var n;
                d("idle"), l(e);
                var f = i.shouldPanelOpen({
                    state: u.getState()
                });
                s(null !== (n = r.isOpen) && void 0 !== n ? n : i.openOnFocus && !o && f || f);
                var p = Ro(u.getState());
                if (null !== u.getState().activeItemId && p) {
                    var h = p.item,
                        m = p.itemInputValue,
                        y = p.itemUrl,
                        v = p.source;
                    v.onActive(No({
                        event: t,
                        item: h,
                        itemInputValue: m,
                        itemUrl: y,
                        refresh: a,
                        source: v,
                        state: u.getState()
                    }, c))
                }
            })).finally((function() {
                d("idle"), Do && i.environment.clearTimeout(Do)
            }));
            return u.pendingRequests.add(g)
        }

        function Uo(e, t, n) {
            return [e, null === n || void 0 === n ? void 0 : n.sourceId, t].filter(Boolean).join("-").replace(/\s/g, "")
        }

        function Vo(e) {
            return Vo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Vo(e)
        }
        var qo = ["event", "props", "refresh", "store"];

        function zo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Ho(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? zo(Object(n), !0).forEach((function(t) {
                    Bo(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zo(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Bo(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Vo(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Vo(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Vo(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Qo(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var Wo = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;

        function $o(e) {
            return e.nativeEvent || e
        }

        function Ko(e) {
            return Ko = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Ko(e)
        }
        var Jo = ["props", "refresh", "store"],
            Yo = ["inputElement", "formElement", "panelElement"],
            Xo = ["inputElement"],
            Go = ["inputElement", "maxLength"],
            Zo = ["source"],
            ea = ["item", "source"];

        function ta(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function na(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ta(Object(n), !0).forEach((function(t) {
                    ra(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ta(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ra(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Ko(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Ko(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Ko(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function ia(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function oa(e) {
            var t = e.props,
                n = e.refresh,
                r = e.store,
                i = ia(e, Jo);
            return {
                getEnvironmentProps: function(e) {
                    var n = e.inputElement,
                        i = e.formElement,
                        o = e.panelElement;

                    function a(e) {
                        !r.getState().isOpen && r.pendingRequests.isEmpty() || e.target === n || !1 === [i, o].some((function(t) {
                            return n = t, r = e.target, n === r || n.contains(r);
                            var n, r
                        })) && (r.dispatch("blur", null), t.debug || r.pendingRequests.cancelAll())
                    }
                    return na({
                        onTouchStart: a,
                        onMouseDown: a,
                        onTouchMove: function(e) {
                            !1 !== r.getState().isOpen && n === t.environment.document.activeElement && e.target !== n && n.blur()
                        }
                    }, ia(e, Yo))
                },
                getRootProps: function(e) {
                    return na({
                        role: "combobox",
                        "aria-expanded": r.getState().isOpen,
                        "aria-haspopup": "listbox",
                        "aria-owns": r.getState().isOpen ? r.getState().collections.map((function(e) {
                            var n = e.source;
                            return Uo(t.id, "list", n)
                        })).join(" ") : void 0,
                        "aria-labelledby": Uo(t.id, "label")
                    }, e)
                },
                getFormProps: function(e) {
                    e.inputElement;
                    return na({
                        action: "",
                        noValidate: !0,
                        role: "search",
                        onSubmit: function(o) {
                            var a;
                            o.preventDefault(), t.onSubmit(na({
                                event: o,
                                refresh: n,
                                state: r.getState()
                            }, i)), r.dispatch("submit", null), null === (a = e.inputElement) || void 0 === a || a.blur()
                        },
                        onReset: function(o) {
                            var a;
                            o.preventDefault(), t.onReset(na({
                                event: o,
                                refresh: n,
                                state: r.getState()
                            }, i)), r.dispatch("reset", null), null === (a = e.inputElement) || void 0 === a || a.focus()
                        }
                    }, ia(e, Xo))
                },
                getLabelProps: function(e) {
                    return na({
                        htmlFor: Uo(t.id, "input"),
                        id: Uo(t.id, "label")
                    }, e)
                },
                getInputProps: function(e) {
                    var o;

                    function a(e) {
                        (t.openOnFocus || Boolean(r.getState().query)) && Mo(na({
                            event: e,
                            props: t,
                            query: r.getState().completion || r.getState().query,
                            refresh: n,
                            store: r
                        }, i)), r.dispatch("focus", null)
                    }
                    var u = e || {},
                        c = (u.inputElement, u.maxLength),
                        l = void 0 === c ? 512 : c,
                        s = ia(u, Go),
                        f = Ro(r.getState()),
                        p = function(e) {
                            return Boolean(e && e.match(Wo))
                        }((null === (o = t.environment.navigator) || void 0 === o ? void 0 : o.userAgent) || ""),
                        d = t.enterKeyHint || (null !== f && void 0 !== f && f.itemUrl && !p ? "go" : "search");
                    return na({
                        "aria-autocomplete": "both",
                        "aria-activedescendant": r.getState().isOpen && null !== r.getState().activeItemId ? Uo(t.id, "item-".concat(r.getState().activeItemId), null === f || void 0 === f ? void 0 : f.source) : void 0,
                        "aria-controls": r.getState().isOpen ? r.getState().collections.map((function(e) {
                            var n = e.source;
                            return Uo(t.id, "list", n)
                        })).join(" ") : void 0,
                        "aria-labelledby": Uo(t.id, "label"),
                        value: r.getState().completion || r.getState().query,
                        id: Uo(t.id, "input"),
                        autoComplete: "off",
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        enterKeyHint: d,
                        spellCheck: "false",
                        autoFocus: t.autoFocus,
                        placeholder: t.placeholder,
                        maxLength: l,
                        type: "search",
                        onChange: function(e) {
                            var o = e.currentTarget.value;
                            t.ignoreCompositionEvents && $o(e).isComposing ? i.setQuery(o) : Mo(na({
                                event: e,
                                props: t,
                                query: o.slice(0, l),
                                refresh: n,
                                store: r
                            }, i))
                        },
                        onCompositionEnd: function(e) {
                            Mo(na({
                                event: e,
                                props: t,
                                query: e.currentTarget.value.slice(0, l),
                                refresh: n,
                                store: r
                            }, i))
                        },
                        onKeyDown: function(e) {
                            $o(e).isComposing || function(e) {
                                var t = e.event,
                                    n = e.props,
                                    r = e.refresh,
                                    i = e.store,
                                    o = Qo(e, qo);
                                if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                                    var a = function() {
                                            var e = Ro(i.getState()),
                                                t = n.environment.document.getElementById(Uo(n.id, "item-".concat(i.getState().activeItemId), null === e || void 0 === e ? void 0 : e.source));
                                            t && (t.scrollIntoViewIfNeeded ? t.scrollIntoViewIfNeeded(!1) : t.scrollIntoView(!1))
                                        },
                                        u = function() {
                                            var e = Ro(i.getState());
                                            if (null !== i.getState().activeItemId && e) {
                                                var n = e.item,
                                                    a = e.itemInputValue,
                                                    u = e.itemUrl,
                                                    c = e.source;
                                                c.onActive(Ho({
                                                    event: t,
                                                    item: n,
                                                    itemInputValue: a,
                                                    itemUrl: u,
                                                    refresh: r,
                                                    source: c,
                                                    state: i.getState()
                                                }, o))
                                            }
                                        };
                                    t.preventDefault(), !1 === i.getState().isOpen && (n.openOnFocus || Boolean(i.getState().query)) ? Mo(Ho({
                                        event: t,
                                        props: n,
                                        query: i.getState().query,
                                        refresh: r,
                                        store: i
                                    }, o)).then((function() {
                                        i.dispatch(t.key, {
                                            nextActiveItemId: n.defaultActiveItemId
                                        }), u(), setTimeout(a, 0)
                                    })) : (i.dispatch(t.key, {}), u(), a())
                                } else if ("Escape" === t.key) t.preventDefault(), i.dispatch(t.key, null), i.pendingRequests.cancelAll();
                                else if ("Tab" === t.key) i.dispatch("blur", null), i.pendingRequests.cancelAll();
                                else if ("Enter" === t.key) {
                                    if (null === i.getState().activeItemId || i.getState().collections.every((function(e) {
                                            return 0 === e.items.length
                                        }))) return void(n.debug || i.pendingRequests.cancelAll());
                                    t.preventDefault();
                                    var c = Ro(i.getState()),
                                        l = c.item,
                                        s = c.itemInputValue,
                                        f = c.itemUrl,
                                        p = c.source;
                                    if (t.metaKey || t.ctrlKey) void 0 !== f && (p.onSelect(Ho({
                                        event: t,
                                        item: l,
                                        itemInputValue: s,
                                        itemUrl: f,
                                        refresh: r,
                                        source: p,
                                        state: i.getState()
                                    }, o)), n.navigator.navigateNewTab({
                                        itemUrl: f,
                                        item: l,
                                        state: i.getState()
                                    }));
                                    else if (t.shiftKey) void 0 !== f && (p.onSelect(Ho({
                                        event: t,
                                        item: l,
                                        itemInputValue: s,
                                        itemUrl: f,
                                        refresh: r,
                                        source: p,
                                        state: i.getState()
                                    }, o)), n.navigator.navigateNewWindow({
                                        itemUrl: f,
                                        item: l,
                                        state: i.getState()
                                    }));
                                    else if (t.altKey);
                                    else {
                                        if (void 0 !== f) return p.onSelect(Ho({
                                            event: t,
                                            item: l,
                                            itemInputValue: s,
                                            itemUrl: f,
                                            refresh: r,
                                            source: p,
                                            state: i.getState()
                                        }, o)), void n.navigator.navigate({
                                            itemUrl: f,
                                            item: l,
                                            state: i.getState()
                                        });
                                        Mo(Ho({
                                            event: t,
                                            nextState: {
                                                isOpen: !1
                                            },
                                            props: n,
                                            query: s,
                                            refresh: r,
                                            store: i
                                        }, o)).then((function() {
                                            p.onSelect(Ho({
                                                event: t,
                                                item: l,
                                                itemInputValue: s,
                                                itemUrl: f,
                                                refresh: r,
                                                source: p,
                                                state: i.getState()
                                            }, o))
                                        }))
                                    }
                                }
                            }(na({
                                event: e,
                                props: t,
                                refresh: n,
                                store: r
                            }, i))
                        },
                        onFocus: a,
                        onBlur: fi,
                        onClick: function(n) {
                            e.inputElement !== t.environment.document.activeElement || r.getState().isOpen || a(n)
                        }
                    }, s)
                },
                getPanelProps: function(e) {
                    return na({
                        onMouseDown: function(e) {
                            e.preventDefault()
                        },
                        onMouseLeave: function() {
                            r.dispatch("mouseleave", null)
                        }
                    }, e)
                },
                getListProps: function(e) {
                    var n = e || {},
                        r = n.source,
                        i = ia(n, Zo);
                    return na({
                        role: "listbox",
                        "aria-labelledby": Uo(t.id, "label"),
                        id: Uo(t.id, "list", r)
                    }, i)
                },
                getItemProps: function(e) {
                    var o = e.item,
                        a = e.source,
                        u = ia(e, ea);
                    return na({
                        id: Uo(t.id, "item-".concat(o.__autocomplete_id), a),
                        role: "option",
                        "aria-selected": r.getState().activeItemId === o.__autocomplete_id,
                        onMouseMove: function(e) {
                            if (o.__autocomplete_id !== r.getState().activeItemId) {
                                r.dispatch("mousemove", o.__autocomplete_id);
                                var t = Ro(r.getState());
                                if (null !== r.getState().activeItemId && t) {
                                    var a = t.item,
                                        u = t.itemInputValue,
                                        c = t.itemUrl,
                                        l = t.source;
                                    l.onActive(na({
                                        event: e,
                                        item: a,
                                        itemInputValue: u,
                                        itemUrl: c,
                                        refresh: n,
                                        source: l,
                                        state: r.getState()
                                    }, i))
                                }
                            }
                        },
                        onMouseDown: function(e) {
                            e.preventDefault()
                        },
                        onClick: function(e) {
                            var u = a.getItemInputValue({
                                    item: o,
                                    state: r.getState()
                                }),
                                c = a.getItemUrl({
                                    item: o,
                                    state: r.getState()
                                });
                            (c ? Promise.resolve() : Mo(na({
                                event: e,
                                nextState: {
                                    isOpen: !1
                                },
                                props: t,
                                query: u,
                                refresh: n,
                                store: r
                            }, i))).then((function() {
                                a.onSelect(na({
                                    event: e,
                                    item: o,
                                    itemInputValue: u,
                                    itemUrl: c,
                                    refresh: n,
                                    source: a,
                                    state: r.getState()
                                }, i))
                            }))
                        }
                    }, u)
                }
            }
        }
        var aa = "1.17.2",
            ua = [{
                segment: "autocomplete-core",
                version: aa
            }];

        function ca(e) {
            return ca = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, ca(e)
        }

        function la(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function sa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? la(Object(n), !0).forEach((function(t) {
                    fa(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : la(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function fa(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== ca(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== ca(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === ca(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function pa(e) {
            var t, n, r, i, o = e.plugins,
                a = e.options,
                u = null === (t = ((null === (n = a.__autocomplete_metadata) || void 0 === n ? void 0 : n.userAgents) || [])[0]) || void 0 === t ? void 0 : t.segment,
                c = u ? fa({}, u, Object.keys((null === (r = a.__autocomplete_metadata) || void 0 === r ? void 0 : r.options) || {})) : {};
            return {
                plugins: o.map((function(e) {
                    return {
                        name: e.name,
                        options: Object.keys(e.__autocomplete_pluginOptions || [])
                    }
                })),
                options: sa({
                    "autocomplete-core": Object.keys(a)
                }, c),
                ua: ua.concat((null === (i = a.__autocomplete_metadata) || void 0 === i ? void 0 : i.userAgents) || [])
            }
        }

        function da(e) {
            var t, n = e.state;
            return !1 === n.isOpen || null === n.activeItemId ? null : (null === (t = Ro(n)) || void 0 === t ? void 0 : t.itemInputValue) || null
        }

        function ha(e, t, n, r) {
            if (!n) return null;
            if (e < 0 && (null === t || null !== r && 0 === t)) return n + e;
            var i = (null === t ? -1 : t) + e;
            return i <= -1 || i >= n ? null === r ? null : 0 : i
        }

        function ma(e) {
            return ma = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, ma(e)
        }

        function ya(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function va(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ya(Object(n), !0).forEach((function(t) {
                    ga(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ya(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ga(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== ma(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== ma(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === ma(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var ba = function(e, t) {
            switch (t.type) {
                case "setActiveItemId":
                case "mousemove":
                    return va(va({}, e), {}, {
                        activeItemId: t.payload
                    });
                case "setQuery":
                    return va(va({}, e), {}, {
                        query: t.payload,
                        completion: null
                    });
                case "setCollections":
                    return va(va({}, e), {}, {
                        collections: t.payload
                    });
                case "setIsOpen":
                    return va(va({}, e), {}, {
                        isOpen: t.payload
                    });
                case "setStatus":
                    return va(va({}, e), {}, {
                        status: t.payload
                    });
                case "setContext":
                    return va(va({}, e), {}, {
                        context: va(va({}, e.context), t.payload)
                    });
                case "ArrowDown":
                    var n = va(va({}, e), {}, {
                        activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : ha(1, e.activeItemId, Yi(e), t.props.defaultActiveItemId)
                    });
                    return va(va({}, n), {}, {
                        completion: da({
                            state: n
                        })
                    });
                case "ArrowUp":
                    var r = va(va({}, e), {}, {
                        activeItemId: ha(-1, e.activeItemId, Yi(e), t.props.defaultActiveItemId)
                    });
                    return va(va({}, r), {}, {
                        completion: da({
                            state: r
                        })
                    });
                case "Escape":
                    return e.isOpen ? va(va({}, e), {}, {
                        activeItemId: null,
                        isOpen: !1,
                        completion: null
                    }) : va(va({}, e), {}, {
                        activeItemId: null,
                        query: "",
                        status: "idle",
                        collections: []
                    });
                case "submit":
                    return va(va({}, e), {}, {
                        activeItemId: null,
                        isOpen: !1,
                        status: "idle"
                    });
                case "reset":
                    return va(va({}, e), {}, {
                        activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
                        status: "idle",
                        completion: null,
                        query: ""
                    });
                case "focus":
                    return va(va({}, e), {}, {
                        activeItemId: t.props.defaultActiveItemId,
                        isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({
                            state: e
                        })
                    });
                case "blur":
                    return t.props.debug ? e : va(va({}, e), {}, {
                        isOpen: !1,
                        activeItemId: null
                    });
                case "mouseleave":
                    return va(va({}, e), {}, {
                        activeItemId: t.props.defaultActiveItemId
                    });
                default:
                    return "The reducer action ".concat(JSON.stringify(t.type), " is not supported."), e
            }
        };

        function wa(e) {
            return wa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, wa(e)
        }

        function Sa(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Oa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Sa(Object(n), !0).forEach((function(t) {
                    Pa(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sa(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Pa(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== wa(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== wa(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === wa(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function _a(e) {
            var t = [],
                n = lo(e, t),
                r = Bi(ba, n, (function(e) {
                    var t, r, o = e.prevState,
                        l = e.state;
                    if (n.onStateChange(Oa({
                            prevState: o,
                            state: l,
                            refresh: a,
                            navigator: n.navigator
                        }, i)), !c() && null !== (t = l.context) && void 0 !== t && null !== (r = t.algoliaInsightsPlugin) && void 0 !== r && r.__automaticInsights && !1 !== n.insights) {
                        var s = Li({
                            __autocomplete_clickAnalytics: !1
                        });
                        n.plugins.push(s), u([s])
                    }
                })),
                i = function(e) {
                    var t = e.store;
                    return {
                        setActiveItemId: function(e) {
                            t.dispatch("setActiveItemId", e)
                        },
                        setQuery: function(e) {
                            t.dispatch("setQuery", e)
                        },
                        setCollections: function(e) {
                            var n = 0,
                                r = e.map((function(e) {
                                    return Ki(Ki({}, e), {}, {
                                        items: Qi(e.items).map((function(e) {
                                            return Ki(Ki({}, e), {}, {
                                                __autocomplete_id: n++
                                            })
                                        }))
                                    })
                                }));
                            t.dispatch("setCollections", r)
                        },
                        setIsOpen: function(e) {
                            t.dispatch("setIsOpen", e)
                        },
                        setStatus: function(e) {
                            t.dispatch("setStatus", e)
                        },
                        setContext: function(e) {
                            t.dispatch("setContext", e)
                        }
                    }
                }({
                    store: r
                }),
                o = oa(Oa({
                    props: n,
                    refresh: a,
                    store: r,
                    navigator: n.navigator
                }, i));

            function a() {
                return Mo(Oa({
                    event: new Event("input"),
                    nextState: {
                        isOpen: r.getState().isOpen
                    },
                    props: n,
                    navigator: n.navigator,
                    query: r.getState().query,
                    refresh: a,
                    store: r
                }, i))
            }

            function u(e) {
                e.forEach((function(e) {
                    var r;
                    return null === (r = e.subscribe) || void 0 === r ? void 0 : r.call(e, Oa(Oa({}, i), {}, {
                        navigator: n.navigator,
                        refresh: a,
                        onSelect: function(e) {
                            t.push({
                                onSelect: e
                            })
                        },
                        onActive: function(e) {
                            t.push({
                                onActive: e
                            })
                        },
                        onResolve: function(e) {
                            t.push({
                                onResolve: e
                            })
                        }
                    }))
                }))
            }

            function c() {
                return n.plugins.some((function(e) {
                    return "aa.algoliaInsightsPlugin" === e.name
                }))
            }
            if (n.insights && !c()) {
                var l = "boolean" === typeof n.insights ? {} : n.insights;
                n.plugins.push(Li(l))
            }
            return u(n.plugins),
                function(e) {
                    var t, n, r = e.metadata,
                        i = e.environment;
                    if (null === (t = i.navigator) || void 0 === t || null === (n = t.userAgent) || void 0 === n ? void 0 : n.includes("Algolia Crawler")) {
                        var o = i.document.createElement("meta"),
                            a = i.document.querySelector("head");
                        o.name = "algolia:metadata", setTimeout((function() {
                            o.content = JSON.stringify(r), a.appendChild(o)
                        }), 0)
                    }
                }({
                    metadata: pa({
                        plugins: n.plugins,
                        options: e
                    }),
                    environment: n.environment
                }), Oa(Oa({
                    refresh: a,
                    navigator: n.navigator
                }, o), i)
        }
        var ja = function(e, t, n, r) {
                var i;
                t[0] = 0;
                for (var o = 1; o < t.length; o++) {
                    var a = t[o++],
                        u = t[o] ? (t[0] |= a ? 1 : 2, n[t[o++]]) : t[++o];
                    3 === a ? r[0] = u : 4 === a ? r[1] = Object.assign(r[1] || {}, u) : 5 === a ? (r[1] = r[1] || {})[t[++o]] = u : 6 === a ? r[1][t[++o]] += u + "" : a ? (i = e.apply(u, ja(e, u, n, ["", null])), r.push(i), u[0] ? t[0] |= 2 : (t[o - 2] = 0, t[o] = i)) : r.push(u)
                }
                return r
            },
            xa = new Map;

        function ka(e) {
            var t = xa.get(this);
            return t || (t = new Map, xa.set(this, t)), (t = ja(this, t.get(e) || (t.set(e, t = function(e) {
                for (var t, n, r = 1, i = "", o = "", a = [0], u = function(e) {
                        1 === r && (e || (i = i.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? a.push(0, e, i) : 3 === r && (e || i) ? (a.push(3, e, i), r = 2) : 2 === r && "..." === i && e ? a.push(4, e, 0) : 2 === r && i && !e ? a.push(5, 0, !0, i) : r >= 5 && ((i || !e && 5 === r) && (a.push(r, 0, i, n), r = 6), e && (a.push(r, e, 0, n), r = 6)), i = ""
                    }, c = 0; c < e.length; c++) {
                    c && (1 === r && u(), u(c));
                    for (var l = 0; l < e[c].length; l++) t = e[c][l], 1 === r ? "<" === t ? (u(), a = [a], r = 3) : i += t : 4 === r ? "--" === i && ">" === t ? (r = 1, i = "") : i = t + i[0] : o ? t === o ? o = "" : i += t : '"' === t || "'" === t ? o = t : ">" === t ? (u(), r = 1) : r && ("=" === t ? (r = 5, n = i, i = "") : "/" === t && (r < 5 || ">" === e[c][l + 1]) ? (u(), 3 === r && (a = a[0]), r = a, (a = a[0]).push(2, 0, r), r = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (u(), r = 2) : i += t), 3 === r && "!--" === i && (r = 4, a = a[0])
                }
                return u(), a
            }(e)), t), arguments, [])).length > 1 ? t : t[0]
        }
        var Ea = function(e) {
                var t = e.environment,
                    n = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
                n.setAttribute("class", "aa-SubmitIcon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", "20"), n.setAttribute("height", "20"), n.setAttribute("fill", "currentColor");
                var r = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
                return r.setAttribute("d", "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"), n.appendChild(r), n
            },
            Ra = function(e) {
                var t = e.environment,
                    n = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
                n.setAttribute("class", "aa-ClearIcon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", "18"), n.setAttribute("height", "18"), n.setAttribute("fill", "currentColor");
                var r = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
                return r.setAttribute("d", "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"), n.appendChild(r), n
            },
            Ca = function(e) {
                var t = e.environment.document.createElementNS("http://www.w3.org/2000/svg", "svg");
                return t.setAttribute("class", "aa-LoadingIcon"), t.setAttribute("viewBox", "0 0 100 100"), t.setAttribute("width", "20"), t.setAttribute("height", "20"), t.innerHTML = '<circle\n  cx="50"\n  cy="50"\n  fill="none"\n  r="35"\n  stroke="currentColor"\n  stroke-dasharray="164.93361431346415 56.97787143782138"\n  stroke-width="6"\n>\n  <animateTransform\n    attributeName="transform"\n    type="rotate"\n    repeatCount="indefinite"\n    dur="1s"\n    values="0 50 50;90 50 50;180 50 50;360 50 50"\n    keyTimes="0;0.40;0.65;1"\n  />\n</circle>', t
            },
            Ia = ["ontouchstart", "ontouchend", "ontouchmove", "ontouchcancel"];

        function Fa(e, t, n) {
            e[t] = null === n ? "" : "number" !== typeof n ? n : n + "px"
        }

        function Na(e) {
            this._listeners[e.type](e)
        }

        function Ta(e, t, n) {
            var r, i, o = e[t];
            if ("style" === t)
                if ("string" == typeof n) e.style = n;
                else if (null === n) e.style = "";
            else
                for (t in n) o && n[t] === o[t] || Fa(e.style, t, n[t]);
            else "o" === t[0] && "n" === t[1] ? (r = t !== (t = t.replace(/Capture$/, "")), ((i = t.toLowerCase()) in e || Ia.includes(i)) && (t = i), t = t.slice(2), e._listeners || (e._listeners = {}), e._listeners[t] = n, n ? o || e.addEventListener(t, Na, r) : e.removeEventListener(t, Na, r)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n))
        }

        function Aa(e) {
            switch (e) {
                case "onChange":
                    return "onInput";
                case "onCompositionEnd":
                    return "oncompositionend";
                default:
                    return e
            }
        }

        function Da(e, t) {
            for (var n in t) Ta(e, Aa(n), t[n])
        }

        function La(e, t) {
            for (var n in t) "o" === n[0] && "n" === n[1] || Ta(e, Aa(n), t[n])
        }
        var Ma = ["children"];

        function Ua(e) {
            return function(e) {
                if (Array.isArray(e)) return Va(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return Va(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Va(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Va(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function qa(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function za(e) {
            return function(t, n) {
                var r = n.children,
                    i = void 0 === r ? [] : r,
                    o = qa(n, Ma),
                    a = e.document.createElement(t);
                return Da(a, o), a.append.apply(a, Ua(i)), a
            }
        }

        function Ha(e) {
            return Ha = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Ha(e)
        }
        var Ba = ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "isDetached", "state"];

        function Qa(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Wa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Qa(Object(n), !0).forEach((function(t) {
                    $a(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qa(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function $a(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Ha(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Ha(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Ha(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Ka(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var Ja = function(e) {
            var t = e.autocompleteScopeApi,
                n = e.environment,
                r = (e.classNames, e.getInputProps),
                i = e.getInputPropsCore,
                o = e.isDetached,
                a = e.state,
                u = Ka(e, Ba),
                c = za(n)("input", u),
                l = r(Wa({
                    state: a,
                    props: i({
                        inputElement: c
                    }),
                    inputElement: c
                }, t));
            return Da(c, Wa(Wa({}, l), {}, {
                onKeyDown: function(e) {
                    o && "Tab" === e.key || l.onKeyDown(e)
                }
            })), c
        };

        function Ya(e) {
            return Ya = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Ya(e)
        }

        function Xa(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Ga(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Xa(Object(n), !0).forEach((function(t) {
                    Za(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xa(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Za(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Ya(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Ya(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Ya(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var eu, tu, nu, ru, iu, ou, au, uu, cu, lu, su = {},
            fu = [],
            pu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
            du = Array.isArray;

        function hu(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function mu(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function yu(e, t, n) {
            var r, i, o, a = {};
            for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : a[o] = t[o];
            if (arguments.length > 2 && (a.children = arguments.length > 3 ? eu.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                for (o in e.defaultProps) void 0 === a[o] && (a[o] = e.defaultProps[o]);
            return vu(e, a, r, i, null)
        }

        function vu(e, t, n, r, i) {
            var o = {
                type: e,
                props: t,
                key: n,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: null == i ? ++nu : i,
                __i: -1,
                __u: 0
            };
            return null == i && null != tu.vnode && tu.vnode(o), o
        }

        function gu(e) {
            return e.children
        }

        function bu(e, t) {
            this.props = e, this.context = t
        }

        function wu(e, t) {
            if (null == t) return e.__ ? wu(e.__, e.__i + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
            return "function" == typeof e.type ? wu(e) : null
        }

        function Su(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    }
                return Su(e)
            }
        }

        function Ou(e) {
            (!e.__d && (e.__d = !0) && ru.push(e) && !Pu.__r++ || iu !== tu.debounceRendering) && ((iu = tu.debounceRendering) || ou)(Pu)
        }

        function Pu() {
            var e, t, n, r, i, o, a, u;
            for (ru.sort(au); e = ru.shift();) e.__d && (t = ru.length, r = void 0, o = (i = (n = e).__v).__e, a = [], u = [], n.__P && ((r = hu({}, i)).__v = i.__v + 1, tu.vnode && tu.vnode(r), Iu(n.__P, r, i, n.__n, n.__P.namespaceURI, 32 & i.__u ? [o] : null, a, null == o ? wu(i) : o, !!(32 & i.__u), u), r.__v = i.__v, r.__.__k[r.__i] = r, Fu(a, r, u), r.__e != o && Su(r)), ru.length > t && ru.sort(au));
            Pu.__r = 0
        }

        function _u(e, t, n, r, i, o, a, u, c, l, s) {
            var f, p, d, h, m, y = r && r.__k || fu,
                v = t.length;
            for (n.__d = c, ju(n, t, y), c = n.__d, f = 0; f < v; f++) null != (d = n.__k[f]) && "boolean" != typeof d && "function" != typeof d && (p = -1 === d.__i ? su : y[d.__i] || su, d.__i = f, Iu(e, d, p, i, o, a, u, c, l, s), h = d.__e, d.ref && p.ref != d.ref && (p.ref && Tu(p.ref, null, d), s.push(d.ref, d.__c || h, d)), null == m && null != h && (m = h), 65536 & d.__u || p.__k === d.__k ? (c && "string" == typeof d.type && !e.contains(c) && (c = wu(p)), c = xu(d, c, e)) : "function" == typeof d.type && void 0 !== d.__d ? c = d.__d : h && (c = h.nextSibling), d.__d = void 0, d.__u &= -196609);
            n.__d = c, n.__e = m
        }

        function ju(e, t, n) {
            var r, i, o, a, u, c = t.length,
                l = n.length,
                s = l,
                f = 0;
            for (e.__k = [], r = 0; r < c; r++) a = r + f, null != (i = e.__k[r] = null == (i = t[r]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? vu(null, i, null, null, null) : du(i) ? vu(gu, {
                children: i
            }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? vu(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = e, i.__b = e.__b + 1, u = ku(i, n, a, s), i.__i = u, o = null, -1 !== u && (s--, (o = n[u]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == u && f--, "function" != typeof i.type && (i.__u |= 65536)) : u !== a && (u == a - 1 ? f = u - a : u == a + 1 ? f++ : u > a ? s > c - a ? f += u - a : f-- : u < a && f++, u !== r + f && (i.__u |= 65536))) : (o = n[a]) && null == o.key && o.__e && 0 == (131072 & o.__u) && (o.__e == e.__d && (e.__d = wu(o)), Au(o, o, !1), n[a] = null, s--);
            if (s)
                for (r = 0; r < l; r++) null != (o = n[r]) && 0 == (131072 & o.__u) && (o.__e == e.__d && (e.__d = wu(o)), Au(o, o))
        }

        function xu(e, t, n) {
            var r, i;
            if ("function" == typeof e.type) {
                for (r = e.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = e, t = xu(r[i], t, n));
                return t
            }
            e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
            do {
                t = t && t.nextSibling
            } while (null != t && 8 === t.nodeType);
            return t
        }

        function ku(e, t, n, r) {
            var i = e.key,
                o = e.type,
                a = n - 1,
                u = n + 1,
                c = t[n];
            if (null === c || c && i == c.key && o === c.type && 0 == (131072 & c.__u)) return n;
            if (r > (null != c && 0 == (131072 & c.__u) ? 1 : 0))
                for (; a >= 0 || u < t.length;) {
                    if (a >= 0) {
                        if ((c = t[a]) && 0 == (131072 & c.__u) && i == c.key && o === c.type) return a;
                        a--
                    }
                    if (u < t.length) {
                        if ((c = t[u]) && 0 == (131072 & c.__u) && i == c.key && o === c.type) return u;
                        u++
                    }
                }
            return -1
        }

        function Eu(e, t, n) {
            "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || pu.test(t) ? n : n + "px"
        }

        function Ru(e, t, n, r, i) {
            var o;
            e: if ("style" === t)
                if ("string" == typeof n) e.style.cssText = n;
                else {
                    if ("string" == typeof r && (e.style.cssText = r = ""), r)
                        for (t in r) n && t in n || Eu(e.style, t, "");
                    if (n)
                        for (t in n) r && n[t] === r[t] || Eu(e.style, t, n[t])
                }
            else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r ? n.u = r.u : (n.u = uu, e.addEventListener(t, o ? lu : cu, o)) : e.removeEventListener(t, o ? lu : cu, o);
            else {
                if ("http://www.w3.org/2000/svg" == i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e) try {
                    e[t] = null == n ? "" : n;
                    break e
                } catch (e) {}
                "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n))
            }
        }

        function Cu(e) {
            return function(t) {
                if (this.l) {
                    var n = this.l[t.type + e];
                    if (null == t.t) t.t = uu++;
                    else if (t.t < n.u) return;
                    return n(tu.event ? tu.event(t) : t)
                }
            }
        }

        function Iu(e, t, n, r, i, o, a, u, c, l) {
            var s, f, p, d, h, m, y, v, g, b, w, S, O, P, _, j, x = t.type;
            if (void 0 !== t.constructor) return null;
            128 & n.__u && (c = !!(32 & n.__u), o = [u = t.__e = n.__e]), (s = tu.__b) && s(t);
            e: if ("function" == typeof x) try {
                if (v = t.props, g = "prototype" in x && x.prototype.render, b = (s = x.contextType) && r[s.__c], w = s ? b ? b.props.value : s.__ : r, n.__c ? y = (f = t.__c = n.__c).__ = f.__E : (g ? t.__c = f = new x(v, w) : (t.__c = f = new bu(v, w), f.constructor = x, f.render = Du), b && b.sub(f), f.props = v, f.state || (f.state = {}), f.context = w, f.__n = r, p = f.__d = !0, f.__h = [], f._sb = []), g && null == f.__s && (f.__s = f.state), g && null != x.getDerivedStateFromProps && (f.__s == f.state && (f.__s = hu({}, f.__s)), hu(f.__s, x.getDerivedStateFromProps(v, f.__s))), d = f.props, h = f.state, f.__v = t, p) g && null == x.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), g && null != f.componentDidMount && f.__h.push(f.componentDidMount);
                else {
                    if (g && null == x.getDerivedStateFromProps && v !== d && null != f.componentWillReceiveProps && f.componentWillReceiveProps(v, w), !f.__e && (null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(v, f.__s, w) || t.__v === n.__v)) {
                        for (t.__v !== n.__v && (f.props = v, f.state = f.__s, f.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                                e && (e.__ = t)
                            })), S = 0; S < f._sb.length; S++) f.__h.push(f._sb[S]);
                        f._sb = [], f.__h.length && a.push(f);
                        break e
                    }
                    null != f.componentWillUpdate && f.componentWillUpdate(v, f.__s, w), g && null != f.componentDidUpdate && f.__h.push((function() {
                        f.componentDidUpdate(d, h, m)
                    }))
                }
                if (f.context = w, f.props = v, f.__P = e, f.__e = !1, O = tu.__r, P = 0, g) {
                    for (f.state = f.__s, f.__d = !1, O && O(t), s = f.render(f.props, f.state, f.context), _ = 0; _ < f._sb.length; _++) f.__h.push(f._sb[_]);
                    f._sb = []
                } else
                    do {
                        f.__d = !1, O && O(t), s = f.render(f.props, f.state, f.context), f.state = f.__s
                    } while (f.__d && ++P < 25);
                f.state = f.__s, null != f.getChildContext && (r = hu(hu({}, r), f.getChildContext())), g && !p && null != f.getSnapshotBeforeUpdate && (m = f.getSnapshotBeforeUpdate(d, h)), _u(e, du(j = null != s && s.type === gu && null == s.key ? s.props.children : s) ? j : [j], t, n, r, i, o, a, u, c, l), f.base = t.__e, t.__u &= -161, f.__h.length && a.push(f), y && (f.__E = f.__ = null)
            } catch (e) {
                t.__v = null, c || null != o ? (t.__e = u, t.__u |= c ? 160 : 32, o[o.indexOf(u)] = null) : (t.__e = n.__e, t.__k = n.__k), tu.__e(e, t, n)
            } else null == o && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Nu(n.__e, t, n, r, i, o, a, c, l);
            (s = tu.diffed) && s(t)
        }

        function Fu(e, t, n) {
            t.__d = void 0;
            for (var r = 0; r < n.length; r++) Tu(n[r], n[++r], n[++r]);
            tu.__c && tu.__c(t, e), e.some((function(t) {
                try {
                    e = t.__h, t.__h = [], e.some((function(e) {
                        e.call(t)
                    }))
                } catch (e) {
                    tu.__e(e, t.__v)
                }
            }))
        }

        function Nu(e, t, n, r, i, o, a, u, c) {
            var l, s, f, p, d, h, m, y = n.props,
                v = t.props,
                g = t.type;
            if ("svg" === g ? i = "http://www.w3.org/2000/svg" : "math" === g ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), null != o)
                for (l = 0; l < o.length; l++)
                    if ((d = o[l]) && "setAttribute" in d == !!g && (g ? d.localName === g : 3 === d.nodeType)) {
                        e = d, o[l] = null;
                        break
                    }
            if (null == e) {
                if (null === g) return document.createTextNode(v);
                e = document.createElementNS(i, g, v.is && v), o = null, u = !1
            }
            if (null === g) y === v || u && e.data === v || (e.data = v);
            else {
                if (o = o && eu.call(e.childNodes), y = n.props || su, !u && null != o)
                    for (y = {}, l = 0; l < e.attributes.length; l++) y[(d = e.attributes[l]).name] = d.value;
                for (l in y)
                    if (d = y[l], "children" == l);
                    else if ("dangerouslySetInnerHTML" == l) f = d;
                else if ("key" !== l && !(l in v)) {
                    if ("value" == l && "defaultValue" in v || "checked" == l && "defaultChecked" in v) continue;
                    Ru(e, l, null, d, i)
                }
                for (l in v) d = v[l], "children" == l ? p = d : "dangerouslySetInnerHTML" == l ? s = d : "value" == l ? h = d : "checked" == l ? m = d : "key" === l || u && "function" != typeof d || y[l] === d || Ru(e, l, d, y[l], i);
                if (s) u || f && (s.__html === f.__html || s.__html === e.innerHTML) || (e.innerHTML = s.__html), t.__k = [];
                else if (f && (e.innerHTML = ""), _u(e, du(p) ? p : [p], t, n, r, "foreignObject" === g ? "http://www.w3.org/1999/xhtml" : i, o, a, o ? o[0] : n.__k && wu(n, 0), u, c), null != o)
                    for (l = o.length; l--;) null != o[l] && mu(o[l]);
                u || (l = "value", void 0 !== h && (h !== e[l] || "progress" === g && !h || "option" === g && h !== y[l]) && Ru(e, l, h, y[l], i), l = "checked", void 0 !== m && m !== e[l] && Ru(e, l, m, y[l], i))
            }
            return e
        }

        function Tu(e, t, n) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                tu.__e(e, n)
            }
        }

        function Au(e, t, n) {
            var r, i;
            if (tu.unmount && tu.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Tu(r, null, t)), null != (r = e.__c)) {
                if (r.componentWillUnmount) try {
                    r.componentWillUnmount()
                } catch (e) {
                    tu.__e(e, t)
                }
                r.base = r.__P = null
            }
            if (r = e.__k)
                for (i = 0; i < r.length; i++) r[i] && Au(r[i], t, n || "function" != typeof e.type);
            n || null == e.__e || mu(e.__e), e.__c = e.__ = e.__e = e.__d = void 0
        }

        function Du(e, t, n) {
            return this.constructor(e, n)
        }

        function Lu(e, t, n) {
            var r, i, o, a;
            tu.__ && tu.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, o = [], a = [], Iu(t, e = (!r && n || t).__k = yu(gu, null, [e]), i || su, su, t.namespaceURI, !r && n ? [n] : i ? null : t.firstChild ? eu.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r, a), Fu(o, e, a)
        }

        function Mu(e, t) {
            return t.reduce((function(e, t) {
                return e && e[t]
            }), e)
        }
        eu = fu.slice, tu = {
            __e: function(e, t, n, r) {
                for (var i, o, a; t = t.__;)
                    if ((i = t.__c) && !i.__) try {
                        if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), a = i.__d), a) return i.__E = i
                    } catch (t) {
                        e = t
                    }
                throw e
            }
        }, nu = 0, bu.prototype.setState = function(e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = hu({}, this.state), "function" == typeof e && (e = e(hu({}, n), this.props)), e && hu(n, e), null != e && this.__v && (t && this._sb.push(t), Ou(this))
        }, bu.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), Ou(this))
        }, bu.prototype.render = gu, ru = [], ou = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, au = function(e, t) {
            return e.__v.__b - t.__v.__b
        }, Pu.__r = 0, uu = 0, cu = Cu(!1), lu = Cu(!0);
        var Uu = "__aa-highlight__",
            Vu = "__/aa-highlight__";

        function qu(e) {
            var t = e.highlightedValue.split(Uu),
                n = t.shift(),
                r = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return {
                        get: function() {
                            return e
                        },
                        add: function(t) {
                            var n = e[e.length - 1];
                            (null === n || void 0 === n ? void 0 : n.isHighlighted) === t.isHighlighted ? e[e.length - 1] = {
                                value: n.value + t.value,
                                isHighlighted: n.isHighlighted
                            } : e.push(t)
                        }
                    }
                }(n ? [{
                    value: n,
                    isHighlighted: !1
                }] : []);
            return t.forEach((function(e) {
                var t = e.split(Vu);
                r.add({
                    value: t[0],
                    isHighlighted: !0
                }), "" !== t[1] && r.add({
                    value: t[1],
                    isHighlighted: !1
                })
            })), r.get()
        }

        function zu(e) {
            return function(e) {
                if (Array.isArray(e)) return Hu(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return Hu(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Hu(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Hu(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Bu(e) {
            var t = e.hit,
                n = e.attribute,
                r = Array.isArray(n) ? n : [n],
                i = Mu(t, ["_highlightResult"].concat(zu(r), ["value"]));
            return "string" !== typeof i && (i = Mu(t, r) || ""), qu({
                highlightedValue: i
            })
        }

        function Qu(e) {
            var t = e.createElement,
                n = e.Fragment;

            function r(e) {
                var r = e.hit,
                    i = e.attribute,
                    o = e.tagName,
                    a = void 0 === o ? "mark" : o;
                return t(n, {}, Bu({
                    hit: r,
                    attribute: i
                }).map((function(e, n) {
                    return e.isHighlighted ? t(a, {
                        key: n
                    }, e.value) : e.value
                })))
            }
            return r.__autocomplete_componentName = "Highlight", r
        }
        var Wu = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            },
            $u = new RegExp(/\w/i),
            Ku = /&(amp|quot|lt|gt|#39);/g,
            Ju = RegExp(Ku.source);

        function Yu(e, t) {
            var n, r, i = e[t],
                o = (null === (n = e[t + 1]) || void 0 === n ? void 0 : n.isHighlighted) || !0,
                a = (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.isHighlighted) || !0;
            return $u.test(function(e) {
                return e && Ju.test(e) ? e.replace(Ku, (function(e) {
                    return Wu[e]
                })) : e
            }(i.value)) || a !== o ? i.isHighlighted : a
        }

        function Xu(e) {
            return Xu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Xu(e)
        }

        function Gu(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Zu(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Gu(Object(n), !0).forEach((function(t) {
                    ec(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gu(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ec(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Xu(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Xu(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Xu(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function tc(e) {
            return e.some((function(e) {
                return e.isHighlighted
            })) ? e.map((function(t, n) {
                return Zu(Zu({}, t), {}, {
                    isHighlighted: !Yu(e, n)
                })
            })) : e.map((function(e) {
                return Zu(Zu({}, e), {}, {
                    isHighlighted: !1
                })
            }))
        }

        function nc(e) {
            var t = e.createElement,
                n = e.Fragment;

            function r(e) {
                var r, i = e.hit,
                    o = e.attribute,
                    a = e.tagName,
                    u = void 0 === a ? "mark" : a;
                return t(n, {}, (r = {
                    hit: i,
                    attribute: o
                }, tc(Bu(r))).map((function(e, n) {
                    return e.isHighlighted ? t(u, {
                        key: n
                    }, e.value) : e.value
                })))
            }
            return r.__autocomplete_componentName = "ReverseHighlight", r
        }

        function rc(e) {
            return function(e) {
                if (Array.isArray(e)) return ic(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return ic(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ic(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ic(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function oc(e) {
            var t = e.hit,
                n = e.attribute,
                r = Array.isArray(n) ? n : [n],
                i = Mu(t, ["_snippetResult"].concat(rc(r), ["value"]));
            return "string" !== typeof i && (i = Mu(t, r) || ""), qu({
                highlightedValue: i
            })
        }

        function ac(e) {
            var t = e.createElement,
                n = e.Fragment;

            function r(e) {
                var r, i = e.hit,
                    o = e.attribute,
                    a = e.tagName,
                    u = void 0 === a ? "mark" : a;
                return t(n, {}, (r = {
                    hit: i,
                    attribute: o
                }, tc(oc(r))).map((function(e, n) {
                    return e.isHighlighted ? t(u, {
                        key: n
                    }, e.value) : e.value
                })))
            }
            return r.__autocomplete_componentName = "ReverseSnippet", r
        }

        function uc(e) {
            var t = e.createElement,
                n = e.Fragment;

            function r(e) {
                var r = e.hit,
                    i = e.attribute,
                    o = e.tagName,
                    a = void 0 === o ? "mark" : o;
                return t(n, {}, oc({
                    hit: r,
                    attribute: i
                }).map((function(e, n) {
                    return e.isHighlighted ? t(a, {
                        key: n
                    }, e.value) : e.value
                })))
            }
            return r.__autocomplete_componentName = "Snippet", r
        }

        function cc(e, t) {
            if ("string" === typeof t) {
                var n = e.document.querySelector(t);
                return "The element ".concat(JSON.stringify(t), " is not in the document."), n
            }
            return t
        }

        function lc() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.reduce((function(e, t) {
                return Object.keys(t).forEach((function(n) {
                    var r = e[n],
                        i = t[n];
                    r !== i && (e[n] = [r, i].filter(Boolean).join(" "))
                })), e
            }), {})
        }

        function sc(e) {
            return sc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, sc(e)
        }
        var fc = ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"];

        function pc(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function dc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? pc(Object(n), !0).forEach((function(t) {
                    hc(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pc(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function hc(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== sc(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== sc(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === sc(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function mc(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
        var yc = {
                clearButton: "aa-ClearButton",
                detachedCancelButton: "aa-DetachedCancelButton",
                detachedContainer: "aa-DetachedContainer",
                detachedFormContainer: "aa-DetachedFormContainer",
                detachedOverlay: "aa-DetachedOverlay",
                detachedSearchButton: "aa-DetachedSearchButton",
                detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
                detachedSearchButtonPlaceholder: "aa-DetachedSearchButtonPlaceholder",
                detachedSearchButtonQuery: "aa-DetachedSearchButtonQuery",
                form: "aa-Form",
                input: "aa-Input",
                inputWrapper: "aa-InputWrapper",
                inputWrapperPrefix: "aa-InputWrapperPrefix",
                inputWrapperSuffix: "aa-InputWrapperSuffix",
                item: "aa-Item",
                label: "aa-Label",
                list: "aa-List",
                loadingIndicator: "aa-LoadingIndicator",
                panel: "aa-Panel",
                panelLayout: "aa-PanelLayout aa-Panel--scrollable",
                root: "aa-Autocomplete",
                source: "aa-Source",
                sourceFooter: "aa-SourceFooter",
                sourceHeader: "aa-SourceHeader",
                sourceNoResults: "aa-SourceNoResults",
                submitButton: "aa-SubmitButton"
            },
            vc = function(e, t) {
                var n = e.children;
                (0, e.render)(n, t)
            },
            gc = {
                createElement: yu,
                Fragment: gu,
                render: Lu
            };

        function bc(e) {
            var t = e.panelPlacement,
                n = e.container,
                r = e.form,
                i = e.environment,
                o = n.getBoundingClientRect(),
                a = (i.pageYOffset || i.document.documentElement.scrollTop || i.document.body.scrollTop || 0) + o.top + o.height;
            switch (t) {
                case "start":
                    return {
                        top: a,
                        left: o.left
                    };
                case "end":
                    return {
                        top: a,
                        right: i.document.documentElement.clientWidth - (o.left + o.width)
                    };
                case "full-width":
                    return {
                        top: a,
                        left: 0,
                        right: 0,
                        width: "unset",
                        maxWidth: "unset"
                    };
                case "input-wrapper-width":
                    var u = r.getBoundingClientRect();
                    return {
                        top: a,
                        left: u.left,
                        right: i.document.documentElement.clientWidth - (u.left + u.width),
                        width: "unset",
                        maxWidth: "unset"
                    };
                default:
                    throw new Error("[Autocomplete] The `panelPlacement` value ".concat(JSON.stringify(t), " is not valid."))
            }
        }

        function wc(e) {
            return wc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, wc(e)
        }

        function Sc() {
            return Sc = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Sc.apply(this, arguments)
        }

        function Oc(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Pc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Oc(Object(n), !0).forEach((function(t) {
                    _c(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oc(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function _c(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== wc(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== wc(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === wc(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var jc = [{
            segment: "autocomplete-js",
            version: aa
        }];

        function xc(e) {
            return function(e) {
                if (Array.isArray(e)) return kc(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return kc(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return kc(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function kc(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Ec(e) {
            return Ec = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Ec(e)
        }
        var Rc = function(e) {
            return e && "object" === Ec(e) && "[object Object]" === Object.prototype.toString.call(e)
        };

        function Cc() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.reduce((function(e, t) {
                return Object.keys(t).forEach((function(n) {
                    var r = e[n],
                        i = t[n];
                    Array.isArray(r) && Array.isArray(i) ? e[n] = r.concat.apply(r, xc(i)) : Rc(r) && Rc(i) ? e[n] = Cc(r, i) : e[n] = i
                })), e
            }), {})
        }

        function Ic(e) {
            return Ic = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Ic(e)
        }

        function Fc(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Nc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Fc(Object(n), !0).forEach((function(t) {
                    Tc(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fc(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Tc(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Ic(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Ic(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Ic(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Ac(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, o, a, u = [],
                        c = !0,
                        l = !1;
                    try {
                        if (o = (n = n.call(e)).next, 0 === t) {
                            if (Object(n) !== n) return;
                            c = !1
                        } else
                            for (; !(c = (r = o.call(n)).done) && (u.push(r.value), u.length !== t); c = !0);
                    } catch (s) {
                        l = !0, i = s
                    } finally {
                        try {
                            if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                        } finally {
                            if (l) throw i
                        }
                    }
                    return u
                }
            }(e, t) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return Dc(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dc(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Dc(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Lc(e, t) {
            return Object.entries(e).reduce((function(e, n) {
                var r = Ac(n, 2),
                    i = r[0],
                    o = r[1];
                return t({
                    key: i,
                    value: o
                }) ? Nc(Nc({}, e), {}, Tc({}, i, o)) : e
            }), {})
        }
        var Mc = ["components"];

        function Uc(e) {
            return Uc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Uc(e)
        }

        function Vc(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function qc(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function zc(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? qc(Object(n), !0).forEach((function(t) {
                    Hc(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qc(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Hc(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Uc(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Uc(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Uc(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Bc(e) {
            var t = function() {
                    var e = [],
                        t = [];

                    function n(n) {
                        e.push(n);
                        var r = n();
                        t.push(r)
                    }
                    return {
                        runEffect: n,
                        cleanupEffects: function() {
                            var e = t;
                            t = [], e.forEach((function(e) {
                                e()
                            }))
                        },
                        runEffects: function() {
                            var t = e;
                            e = [], t.forEach((function(e) {
                                n(e)
                            }))
                        }
                    }
                }(),
                n = t.runEffect,
                r = t.cleanupEffects,
                i = t.runEffects,
                o = function() {
                    var e = [];
                    return {
                        reactive: function(t) {
                            var n = t(),
                                r = {
                                    _fn: t,
                                    _ref: {
                                        current: n
                                    },
                                    get value() {
                                        return this._ref.current
                                    },
                                    set value(e) {
                                        this._ref.current = e
                                    }
                                };
                            return e.push(r), r
                        },
                        runReactives: function() {
                            e.forEach((function(e) {
                                e._ref.current = e._fn()
                            }))
                        }
                    }
                }(),
                a = o.reactive,
                u = o.runReactives,
                c = ci(!1),
                l = ci(e),
                s = ci(void 0),
                f = a((function() {
                    return function(e) {
                        var t, n = e.classNames,
                            r = e.container,
                            i = e.getEnvironmentProps,
                            o = e.getFormProps,
                            a = e.getInputProps,
                            u = e.getItemProps,
                            c = e.getLabelProps,
                            l = e.getListProps,
                            s = e.getPanelProps,
                            f = e.getRootProps,
                            p = e.panelContainer,
                            d = e.panelPlacement,
                            h = e.render,
                            m = e.renderNoResults,
                            y = e.renderer,
                            v = e.detachedMediaQuery,
                            g = e.components,
                            b = e.translations,
                            w = mc(e, fc),
                            S = "undefined" !== typeof window ? window : {},
                            O = cc(S, r);
                        O.tagName;
                        var P = dc(dc({}, gc), y),
                            _ = {
                                Highlight: Qu(P),
                                ReverseHighlight: nc(P),
                                ReverseSnippet: ac(P),
                                Snippet: uc(P)
                            };
                        return {
                            renderer: {
                                classNames: lc(yc, null !== n && void 0 !== n ? n : {}),
                                container: O,
                                getEnvironmentProps: null !== i && void 0 !== i ? i : function(e) {
                                    return e.props
                                },
                                getFormProps: null !== o && void 0 !== o ? o : function(e) {
                                    return e.props
                                },
                                getInputProps: null !== a && void 0 !== a ? a : function(e) {
                                    return e.props
                                },
                                getItemProps: null !== u && void 0 !== u ? u : function(e) {
                                    return e.props
                                },
                                getLabelProps: null !== c && void 0 !== c ? c : function(e) {
                                    return e.props
                                },
                                getListProps: null !== l && void 0 !== l ? l : function(e) {
                                    return e.props
                                },
                                getPanelProps: null !== s && void 0 !== s ? s : function(e) {
                                    return e.props
                                },
                                getRootProps: null !== f && void 0 !== f ? f : function(e) {
                                    return e.props
                                },
                                panelContainer: p ? cc(S, p) : S.document.body,
                                panelPlacement: null !== d && void 0 !== d ? d : "input-wrapper-width",
                                render: null !== h && void 0 !== h ? h : vc,
                                renderNoResults: m,
                                renderer: P,
                                detachedMediaQuery: null !== v && void 0 !== v ? v : getComputedStyle(S.document.documentElement).getPropertyValue("--aa-detached-media-query"),
                                components: dc(dc({}, _), g),
                                translations: dc(dc({}, {
                                    clearButtonTitle: "Clear",
                                    detachedCancelButtonText: "Cancel",
                                    detachedSearchButtonTitle: "Search",
                                    submitButtonTitle: "Submit"
                                }), b)
                            },
                            core: dc(dc({}, w), {}, {
                                id: null !== (t = w.id) && void 0 !== t ? t : Gi(),
                                environment: S
                            })
                        }
                    }(l.current)
                })),
                p = a((function() {
                    return f.value.core.environment.matchMedia(f.value.renderer.detachedMediaQuery).matches
                })),
                d = a((function() {
                    return _a(zc(zc({}, f.value.core), {}, {
                        onStateChange: function(e) {
                            var t, n, r;
                            c.current = e.state.collections.some((function(e) {
                                return e.source.templates.noResults
                            })), null === (t = s.current) || void 0 === t || t.call(s, e), null === (n = (r = f.value.core).onStateChange) || void 0 === n || n.call(r, e)
                        },
                        shouldPanelOpen: l.current.shouldPanelOpen || function(e) {
                            var t = e.state;
                            if (p.value) return !0;
                            var n = Yi(t) > 0;
                            if (!f.value.core.openOnFocus && !t.query) return n;
                            var r = Boolean(c.current || f.value.renderer.renderNoResults);
                            return !n && r || n
                        },
                        __autocomplete_metadata: {
                            userAgents: jc,
                            options: e
                        }
                    }))
                })),
                h = ci(zc({
                    collections: [],
                    completion: null,
                    context: {},
                    isOpen: !1,
                    query: "",
                    activeItemId: null,
                    status: "idle"
                }, f.value.core.initialState)),
                m = {
                    getEnvironmentProps: f.value.renderer.getEnvironmentProps,
                    getFormProps: f.value.renderer.getFormProps,
                    getInputProps: f.value.renderer.getInputProps,
                    getItemProps: f.value.renderer.getItemProps,
                    getLabelProps: f.value.renderer.getLabelProps,
                    getListProps: f.value.renderer.getListProps,
                    getPanelProps: f.value.renderer.getPanelProps,
                    getRootProps: f.value.renderer.getRootProps
                },
                y = {
                    setActiveItemId: d.value.setActiveItemId,
                    setQuery: d.value.setQuery,
                    setCollections: d.value.setCollections,
                    setIsOpen: d.value.setIsOpen,
                    setStatus: d.value.setStatus,
                    setContext: d.value.setContext,
                    refresh: d.value.refresh,
                    navigator: d.value.navigator
                },
                v = a((function() {
                    return ka.bind(f.value.renderer.renderer.createElement)
                })),
                g = a((function() {
                    return function(e) {
                        var t = e.autocomplete,
                            n = e.autocompleteScopeApi,
                            r = e.classNames,
                            i = e.environment,
                            o = e.isDetached,
                            a = e.placeholder,
                            u = void 0 === a ? "Search" : a,
                            c = e.propGetters,
                            l = e.setIsModalOpen,
                            s = e.state,
                            f = e.translations,
                            p = za(i),
                            d = c.getRootProps(Ga({
                                state: s,
                                props: t.getRootProps({})
                            }, n)),
                            h = p("div", Ga({
                                class: r.root
                            }, d)),
                            m = p("div", {
                                class: r.detachedContainer,
                                onMouseDown: function(e) {
                                    e.stopPropagation()
                                }
                            }),
                            y = p("div", {
                                class: r.detachedOverlay,
                                children: [m],
                                onMouseDown: function() {
                                    l(!1), t.setIsOpen(!1)
                                }
                            }),
                            v = c.getLabelProps(Ga({
                                state: s,
                                props: t.getLabelProps({})
                            }, n)),
                            g = p("button", {
                                class: r.submitButton,
                                type: "submit",
                                title: f.submitButtonTitle,
                                children: [Ea({
                                    environment: i
                                })]
                            }),
                            b = p("label", Ga({
                                class: r.label,
                                children: [g],
                                ariaLabel: f.submitButtonTitle
                            }, v)),
                            w = p("button", {
                                class: r.clearButton,
                                type: "reset",
                                title: f.clearButtonTitle,
                                children: [Ra({
                                    environment: i
                                })]
                            }),
                            S = p("div", {
                                class: r.loadingIndicator,
                                children: [Ca({
                                    environment: i
                                })]
                            }),
                            O = Ja({
                                class: r.input,
                                environment: i,
                                state: s,
                                getInputProps: c.getInputProps,
                                getInputPropsCore: t.getInputProps,
                                autocompleteScopeApi: n,
                                isDetached: o
                            }),
                            P = p("div", {
                                class: r.inputWrapperPrefix,
                                children: [b, S]
                            }),
                            _ = p("div", {
                                class: r.inputWrapperSuffix,
                                children: [w]
                            }),
                            j = p("div", {
                                class: r.inputWrapper,
                                children: [O]
                            }),
                            x = c.getFormProps(Ga({
                                state: s,
                                props: t.getFormProps({
                                    inputElement: O
                                })
                            }, n)),
                            k = p("form", Ga({
                                class: r.form,
                                children: [P, j, _]
                            }, x)),
                            E = c.getPanelProps(Ga({
                                state: s,
                                props: t.getPanelProps({})
                            }, n)),
                            R = p("div", Ga({
                                class: r.panel
                            }, E)),
                            C = p("div", {
                                class: r.detachedSearchButtonQuery,
                                textContent: s.query
                            }),
                            I = p("div", {
                                class: r.detachedSearchButtonPlaceholder,
                                hidden: Boolean(s.query),
                                textContent: u
                            });
                        if (o) {
                            var F = p("div", {
                                    class: r.detachedSearchButtonIcon,
                                    children: [Ea({
                                        environment: i
                                    })]
                                }),
                                N = p("button", {
                                    type: "button",
                                    class: r.detachedSearchButton,
                                    title: f.detachedSearchButtonTitle,
                                    id: v.id,
                                    onClick: function() {
                                        l(!0)
                                    },
                                    children: [F, I, C]
                                }),
                                T = p("button", {
                                    type: "button",
                                    class: r.detachedCancelButton,
                                    textContent: f.detachedCancelButtonText,
                                    onTouchStart: function(e) {
                                        e.stopPropagation()
                                    },
                                    onClick: function() {
                                        t.setIsOpen(!1), l(!1)
                                    }
                                }),
                                A = p("div", {
                                    class: r.detachedFormContainer,
                                    children: [k, T]
                                });
                            m.appendChild(A), h.appendChild(N)
                        } else h.appendChild(k);
                        return {
                            detachedContainer: m,
                            detachedOverlay: y,
                            detachedSearchButtonQuery: C,
                            detachedSearchButtonPlaceholder: I,
                            inputWrapper: j,
                            input: O,
                            root: h,
                            form: k,
                            label: b,
                            submitButton: g,
                            clearButton: w,
                            loadingIndicator: S,
                            panel: R
                        }
                    }({
                        autocomplete: d.value,
                        autocompleteScopeApi: y,
                        classNames: f.value.renderer.classNames,
                        environment: f.value.core.environment,
                        isDetached: p.value,
                        placeholder: f.value.core.placeholder,
                        propGetters: m,
                        setIsModalOpen: O,
                        state: h.current,
                        translations: f.value.renderer.translations
                    })
                }));

            function b() {
                Da(g.value.panel, {
                    style: p.value ? {} : bc({
                        panelPlacement: f.value.renderer.panelPlacement,
                        container: g.value.root,
                        form: g.value.form,
                        environment: f.value.core.environment
                    })
                })
            }

            function w(e) {
                h.current = e;
                var t = {
                        autocomplete: d.value,
                        autocompleteScopeApi: y,
                        classNames: f.value.renderer.classNames,
                        components: f.value.renderer.components,
                        container: f.value.renderer.container,
                        html: v.value,
                        dom: g.value,
                        panelContainer: p.value ? g.value.detachedContainer : f.value.renderer.panelContainer,
                        propGetters: m,
                        state: h.current,
                        renderer: f.value.renderer.renderer
                    },
                    n = !Yi(e) && !c.current && f.value.renderer.renderNoResults || f.value.renderer.render;
                ! function(e) {
                    var t = e.autocomplete,
                        n = e.autocompleteScopeApi,
                        r = e.dom,
                        i = e.propGetters,
                        o = e.state;
                    La(r.root, i.getRootProps(Pc({
                        state: o,
                        props: t.getRootProps({})
                    }, n))), La(r.input, i.getInputProps(Pc({
                        state: o,
                        props: t.getInputProps({
                            inputElement: r.input
                        }),
                        inputElement: r.input
                    }, n))), Da(r.label, {
                        hidden: "stalled" === o.status
                    }), Da(r.loadingIndicator, {
                        hidden: "stalled" !== o.status
                    }), Da(r.clearButton, {
                        hidden: !o.query
                    }), Da(r.detachedSearchButtonQuery, {
                        textContent: o.query
                    }), Da(r.detachedSearchButtonPlaceholder, {
                        hidden: Boolean(o.query)
                    })
                }(t),
                function(e, t) {
                    var n = t.autocomplete,
                        r = t.autocompleteScopeApi,
                        i = t.classNames,
                        o = t.html,
                        a = t.dom,
                        u = t.panelContainer,
                        c = t.propGetters,
                        l = t.state,
                        s = t.components,
                        f = t.renderer;
                    if (l.isOpen) {
                        u.contains(a.panel) || "loading" === l.status || u.appendChild(a.panel), a.panel.classList.toggle("aa-Panel--stalled", "stalled" === l.status);
                        var p = l.collections.filter((function(e) {
                                var t = e.source,
                                    n = e.items;
                                return t.templates.noResults || n.length > 0
                            })).map((function(e, t) {
                                var a = e.source,
                                    u = e.items;
                                return f.createElement("section", {
                                    key: t,
                                    className: i.source,
                                    "data-autocomplete-source-id": a.sourceId
                                }, a.templates.header && f.createElement("div", {
                                    className: i.sourceHeader
                                }, a.templates.header({
                                    components: s,
                                    createElement: f.createElement,
                                    Fragment: f.Fragment,
                                    items: u,
                                    source: a,
                                    state: l,
                                    html: o
                                })), a.templates.noResults && 0 === u.length ? f.createElement("div", {
                                    className: i.sourceNoResults
                                }, a.templates.noResults({
                                    components: s,
                                    createElement: f.createElement,
                                    Fragment: f.Fragment,
                                    source: a,
                                    state: l,
                                    html: o
                                })) : f.createElement("ul", Sc({
                                    className: i.list
                                }, c.getListProps(Pc({
                                    state: l,
                                    props: n.getListProps({
                                        source: a
                                    })
                                }, r))), u.map((function(e) {
                                    var t = n.getItemProps({
                                        item: e,
                                        source: a
                                    });
                                    return f.createElement("li", Sc({
                                        key: t.id,
                                        className: i.item
                                    }, c.getItemProps(Pc({
                                        state: l,
                                        props: t
                                    }, r))), a.templates.item({
                                        components: s,
                                        createElement: f.createElement,
                                        Fragment: f.Fragment,
                                        item: e,
                                        state: l,
                                        html: o
                                    }))
                                }))), a.templates.footer && f.createElement("div", {
                                    className: i.sourceFooter
                                }, a.templates.footer({
                                    components: s,
                                    createElement: f.createElement,
                                    Fragment: f.Fragment,
                                    items: u,
                                    source: a,
                                    state: l,
                                    html: o
                                })))
                            })),
                            d = f.createElement(f.Fragment, null, f.createElement("div", {
                                className: i.panelLayout
                            }, p), f.createElement("div", {
                                className: "aa-GradientBottom"
                            })),
                            h = p.reduce((function(e, t) {
                                return e[t.props["data-autocomplete-source-id"]] = t, e
                            }), {});
                        e(Pc(Pc({
                            children: d,
                            state: l,
                            sections: p,
                            elements: h
                        }, f), {}, {
                            components: s,
                            html: o
                        }, r), a.panel)
                    } else u.contains(a.panel) && u.removeChild(a.panel)
                }(n, t)
            }

            function S() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                r();
                var t = f.value.renderer,
                    n = t.components,
                    o = Vc(t, Mc);
                l.current = Cc(o, f.value.core, {
                    components: Lc(n, (function(e) {
                        return !e.value.hasOwnProperty("__autocomplete_componentName")
                    })),
                    initialState: h.current
                }, e), u(), i(), d.value.refresh().then((function() {
                    w(h.current)
                }))
            }

            function O(e) {
                e !== f.value.core.environment.document.body.contains(g.value.detachedOverlay) && (e ? (f.value.core.environment.document.body.appendChild(g.value.detachedOverlay), f.value.core.environment.document.body.classList.add("aa-Detached"), g.value.input.focus()) : (f.value.core.environment.document.body.removeChild(g.value.detachedOverlay), f.value.core.environment.document.body.classList.remove("aa-Detached")))
            }
            return n((function() {
                var e = d.value.getEnvironmentProps({
                    formElement: g.value.form,
                    panelElement: g.value.panel,
                    inputElement: g.value.input
                });
                return Da(f.value.core.environment, e),
                    function() {
                        Da(f.value.core.environment, Object.keys(e).reduce((function(e, t) {
                            return zc(zc({}, e), {}, Hc({}, t, void 0))
                        }), {}))
                    }
            })), n((function() {
                var e = p.value ? f.value.core.environment.document.body : f.value.renderer.panelContainer,
                    t = p.value ? g.value.detachedOverlay : g.value.panel;
                return p.value && h.current.isOpen && O(!0), w(h.current),
                    function() {
                        e.contains(t) && (e.removeChild(t), e.classList.remove("aa-Detached"))
                    }
            })), n((function() {
                var e = f.value.renderer.container;
                return e.appendChild(g.value.root),
                    function() {
                        e.removeChild(g.value.root)
                    }
            })), n((function() {
                var e = ui((function(e) {
                    w(e.state)
                }), 0);
                return s.current = function(t) {
                        var n = t.state,
                            r = t.prevState;
                        (p.value && r.isOpen !== n.isOpen && O(n.isOpen), p.value || !n.isOpen || r.isOpen || b(), n.query !== r.query) && f.value.core.environment.document.querySelectorAll(".aa-Panel--scrollable").forEach((function(e) {
                            0 !== e.scrollTop && (e.scrollTop = 0)
                        }));
                        e({
                            state: n
                        })
                    },
                    function() {
                        s.current = void 0
                    }
            })), n((function() {
                var e = ui((function() {
                    var e = p.value;
                    p.value = f.value.core.environment.matchMedia(f.value.renderer.detachedMediaQuery).matches, e !== p.value ? S({}) : requestAnimationFrame(b)
                }), 20);
                return f.value.core.environment.addEventListener("resize", e),
                    function() {
                        f.value.core.environment.removeEventListener("resize", e)
                    }
            })), n((function() {
                if (!p.value) return function() {};

                function e(e) {
                    g.value.detachedContainer.classList.toggle("aa-DetachedContainer--modal", e)
                }

                function t(t) {
                    e(t.matches)
                }
                var n = f.value.core.environment.matchMedia(getComputedStyle(f.value.core.environment.document.documentElement).getPropertyValue("--aa-detached-modal-media-query"));
                e(n.matches);
                var r = Boolean(n.addEventListener);
                return r ? n.addEventListener("change", t) : n.addListener(t),
                    function() {
                        r ? n.removeEventListener("change", t) : n.removeListener(t)
                    }
            })), n((function() {
                return requestAnimationFrame(b),
                    function() {}
            })), zc(zc({}, y), {}, {
                update: S,
                destroy: function() {
                    r()
                }
            })
        }

        function Qc(e) {
            return Qc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Qc(e)
        }

        function Wc(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function $c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Wc(Object(n), !0).forEach((function(t) {
                    Kc(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wc(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Kc(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Qc(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Qc(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Qc(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Jc = "1.17.4",
            Yc = [{
                segment: "autocomplete-core",
                version: Jc
            }];

        function Xc(e) {
            return Xc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Xc(e)
        }
        var Gc = ["params"];

        function Zc(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function el(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zc(Object(n), !0).forEach((function(t) {
                    tl(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zc(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function tl(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== Xc(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== Xc(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === Xc(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function nl(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function rl(e) {
            return function(e) {
                if (Array.isArray(e)) return il(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" === typeof e) return il(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return il(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function il(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var ol = [{
            segment: "autocomplete-js",
            version: Jc
        }];

        function al(e) {
            return al = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, al(e)
        }

        function ul(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function cl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ul(Object(n), !0).forEach((function(t) {
                    ll(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ul(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ll(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== al(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== al(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === al(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var sl = function(e, t) {
                function n(t) {
                    return e({
                        searchClient: t.searchClient,
                        queries: t.requests.map((function(e) {
                            return e.query
                        }))
                    }).then((function(e) {
                        return e.map((function(e, n) {
                            var r = t.requests[n];
                            return {
                                items: e,
                                sourceId: r.sourceId,
                                transformResponse: r.transformResponse
                            }
                        }))
                    }))
                }
                return function(e) {
                    return function(r) {
                        return $c($c({
                            requesterId: t,
                            execute: n
                        }, e), r)
                    }
                }
            }((function(e) {
                return function(e) {
                    var t = e.searchClient,
                        n = e.queries,
                        r = e.userAgents,
                        i = void 0 === r ? [] : r;
                    "function" === typeof t.addAlgoliaAgent && [].concat(rl(Yc), rl(i)).forEach((function(e) {
                        var n = e.segment,
                            r = e.version;
                        t.addAlgoliaAgent(n, r)
                    }));
                    var o = function(e) {
                            var t = e.transporter || {},
                                n = t.headers || t.baseHeaders || {},
                                r = t.queryParameters || t.baseQueryParameters || {},
                                i = "x-algolia-application-id",
                                o = "x-algolia-api-key";
                            return {
                                appId: n[i] || r[i],
                                apiKey: n[o] || r[o]
                            }
                        }(t),
                        a = o.appId,
                        u = o.apiKey;
                    return Boolean(a), Boolean(u), t.search(n.map((function(e) {
                        var t = e.params;
                        return el(el({}, nl(e, Gc)), {}, {
                            params: el({
                                hitsPerPage: 5,
                                highlightPreTag: "__aa-highlight__",
                                highlightPostTag: "__/aa-highlight__"
                            }, t)
                        })
                    }))).then((function(e) {
                        return e.results.map((function(e, t) {
                            var r;
                            return el(el({}, e), {}, {
                                hits: null === (r = e.hits) || void 0 === r ? void 0 : r.map((function(r) {
                                    return el(el({}, r), {}, {
                                        __autocomplete_indexName: e.index || n[t].indexName,
                                        __autocomplete_queryID: e.queryID,
                                        __autocomplete_algoliaCredentials: {
                                            appId: a,
                                            apiKey: u
                                        }
                                    })
                                }))
                            })
                        }))
                    }))
                }(cl(cl({}, e), {}, {
                    userAgents: ol
                }))
            }), "algolia"),
            fl = sl({
                transformResponse: function(e) {
                    return e.hits
                }
            });

        function pl(e) {
            var t = e.onTapAhead;
            return {
                item: function(e) {
                    var n = e.item,
                        r = e.createElement,
                        i = e.components;
                    return n.__autocomplete_qsCategory ? r("div", {
                        className: "aa-ItemWrapper"
                    }, r("div", {
                        className: "aa-ItemContent aa-ItemContent--indented"
                    }, r("div", {
                        className: "aa-ItemContentSubtitle aa-ItemContentSubtitle--standalone"
                    }, r("span", {
                        className: "aa-ItemContentSubtitleIcon"
                    }), r("span", null, "in", " ", r("span", {
                        className: "aa-ItemContentSubtitleCategory"
                    }, n.__autocomplete_qsCategory))))) : r("div", {
                        className: "aa-ItemWrapper"
                    }, r("div", {
                        className: "aa-ItemContent"
                    }, r("div", {
                        className: "aa-ItemIcon aa-ItemIcon--noBorder"
                    }, r("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor"
                    }, r("path", {
                        d: "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
                    }))), r("div", {
                        className: "aa-ItemContentBody"
                    }, r("div", {
                        className: "aa-ItemContentTitle"
                    }, r(i.ReverseHighlight, {
                        hit: n,
                        attribute: "query"
                    })))), r("div", {
                        className: "aa-ItemActions"
                    }, r("button", {
                        className: "aa-ItemActionButton",
                        title: 'Fill query with "'.concat(n.query, '"'),
                        onClick: function(e) {
                            e.preventDefault(), e.stopPropagation(), t(n)
                        }
                    }, r("svg", {
                        viewBox: "0 0 24 24",
                        fill: "currentColor"
                    }, r("path", {
                        d: "M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"
                    })))))
                }
            }
        }

        function dl(e) {
            return dl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, dl(e)
        }

        function hl(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ml(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? hl(Object(n), !0).forEach((function(t) {
                    yl(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hl(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function yl(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== dl(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== dl(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === dl(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function vl(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return gl(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gl(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0,
                        i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0,
                u = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return a = e.done, e
                },
                e: function(e) {
                    u = !0, o = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (u) throw o
                    }
                }
            }
        }

        function gl(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        const bl = function(e) {
            var t = function(e) {
                    return ml({
                        getSearchParams: function() {
                            return {}
                        },
                        transformSource: function(e) {
                            return e.source
                        },
                        itemsWithCategories: 1,
                        categoriesPerItem: 1
                    }, e)
                }(e),
                n = t.searchClient,
                r = t.indexName,
                i = t.getSearchParams,
                o = t.transformSource,
                a = t.categoryAttribute,
                u = t.itemsWithCategories,
                c = t.categoriesPerItem;
            return {
                name: "aa.querySuggestionsPlugin",
                getSources: function(e) {
                    var t = e.query,
                        l = e.setQuery,
                        s = e.refresh,
                        f = e.state;

                    function p(e) {
                        l("".concat(e.query, " ")), s()
                    }
                    return [o({
                        source: {
                            sourceId: "querySuggestionsPlugin",
                            getItemInputValue: function(e) {
                                return e.item.query
                            },
                            getItems: function() {
                                return fl({
                                    searchClient: n,
                                    queries: [{
                                        indexName: r,
                                        query: t,
                                        params: i({
                                            state: f
                                        })
                                    }],
                                    transformResponse: function(e) {
                                        var n = e.hits[0];
                                        if (!t || !a) return n;
                                        var r = 0;
                                        return n.reduce((function(e, t) {
                                            var n = [t];
                                            if (r < u) {
                                                var i = (function(e, t) {
                                                    return t.reduce((function(e, t) {
                                                        return e && e[t]
                                                    }), e)
                                                }(t, Array.isArray(a) ? a : [a]) || []).map((function(e) {
                                                    return e.value
                                                })).slice(0, c);
                                                i.length > 0 && r++;
                                                var o, l = vl(i);
                                                try {
                                                    for (l.s(); !(o = l.n()).done;) {
                                                        var s = o.value;
                                                        n.push(ml({
                                                            __autocomplete_qsCategory: s
                                                        }, t))
                                                    }
                                                } catch (f) {
                                                    l.e(f)
                                                } finally {
                                                    l.f()
                                                }
                                            }
                                            return e.push.apply(e, n), e
                                        }), [])
                                    }
                                })
                            },
                            templates: pl({
                                onTapAhead: p
                            })
                        },
                        onTapAhead: p,
                        state: f
                    })]
                },
                __autocomplete_pluginOptions: e
            }
        }({
            searchClient: i()("2E5235WJP6", "013b93fcfbc49e670a11282026ebfe71"),
            indexName: "crawler_XpertRF_query_suggestions",
            getSearchParams(e) {
                let {
                    state: t
                } = e;
                return t.query ? {
                    hitsPerPage: 10,
                    clickAnalytics: !0,
                    analytics: !0
                } : {
                    hitsPerPage: 10,
                    clickAnalytics: !1,
                    analytics: !1
                }
            },
            transformSource(e) {
                let {
                    source: t
                } = e;
                return { ...t,
                    onSelect(e) {
                        let {
                            item: t,
                            setIsOpen: n
                        } = e;
                        console.log("Plugin onSelect triggered with item:", t), n(!0), window.location.href = "".concat(window.location.origin, "/search?crawler_XpertRF%5Bquery%5D=").concat(encodeURIComponent(t.query))
                    }
                }
            }
        });
        const wl = function() {
            const t = (0, e.useRef)(null);
            return (0, e.useEffect)((() => {
                if (!t.current) return void console.log("Autocomplete container not found.");
                const e = Bc({
                    container: t.current,
                    placeholder: "Search",
                    openOnFocus: !0,
                    insights: !0,
                    plugins: [bl],
                    shouldPanelOpen(e) {
                        let {
                            state: t
                        } = e;
                        return !0
                    },
                    onSubmit(e) {
                        let {
                            event: t,
                            state: n
                        } = e;
                        t.preventDefault(), console.log("onSubmit triggered with query:", n.query), window.location.href = "".concat(window.location.origin, "/search?crawler_XpertRF%5Bquery%5D=").concat(encodeURIComponent(n.query))
                    }
                });
                return () => {
                    e && (console.log("Destroying autocomplete instance."), e.destroy())
                }
            }), []), (0, qr.jsx)("div", {
                id: "autocomplete",
                ref: t
            })
        };
        const Sl = function() {
                return (0, qr.jsx)(wl, {})
            },
            Ol = document.getElementsByClassName("header-search");
        Array.from(Ol).forEach((e => {
            t.render((0, qr.jsx)(Sl, {}), e)
        }));
        if (window.location.pathname.startsWith("/search")) {
            const e = document.getElementById("search");
            e && t.render((0, qr.jsx)(ai, {}), e)
        }
    })()
})();
//# sourceMappingURL=main.6705ef89.js.map