(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        2: function(e, t, n) {
            e.exports = n("Kqg8")
        },
        Kqg8: function(e, t, n) {
            "use strict";
            n.r(t), n("SN8V")
        },
        SN8V: function(e, t, n) {
            var o, r;
            void 0 === (r = "function" == typeof(o = function() {
                "use strict";
                ! function(e) {
                    const t = e.performance;

                    function n(e) {
                        t && t.mark && t.mark(e)
                    }

                    function o(e, n) {
                        t && t.measure && t.measure(e, n)
                    }
                    n("Zone");
                    const r = e.__Zone_symbol_prefix || "__zone_symbol__";

                    function s(e) {
                        return r + e
                    }
                    const a = !0 === e[s("forceDuplicateZoneCheck")];
                    if (e.Zone) {
                        if (a || "function" != typeof e.Zone.__symbol__) throw new Error("Zone already loaded.");
                        return e.Zone
                    }
                    class i {
                        constructor(e, t) {
                            this._parent = e, this._name = t ? t.name || "unnamed" : "<root>", this._properties = t && t.properties || {}, this._zoneDelegate = new l(this, this._parent && this._parent._zoneDelegate, t)
                        }
                        static assertZonePatched() {
                            if (e.Promise !== C.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                        }
                        static get root() {
                            let e = i.current;
                            for (; e.parent;) e = e.parent;
                            return e
                        }
                        static get current() {
                            return z.zone
                        }
                        static get currentTask() {
                            return j
                        }
                        static __load_patch(t, r) {
                            if (C.hasOwnProperty(t)) {
                                if (a) throw Error("Already loaded patch: " + t)
                            } else if (!e["__Zone_disable_" + t]) {
                                const s = "Zone:" + t;
                                n(s), C[t] = r(e, i, O), o(s, s)
                            }
                        }
                        get parent() {
                            return this._parent
                        }
                        get name() {
                            return this._name
                        }
                        get(e) {
                            const t = this.getZoneWith(e);
                            if (t) return t._properties[e]
                        }
                        getZoneWith(e) {
                            let t = this;
                            for (; t;) {
                                if (t._properties.hasOwnProperty(e)) return t;
                                t = t._parent
                            }
                            return null
                        }
                        fork(e) {
                            if (!e) throw new Error("ZoneSpec required!");
                            return this._zoneDelegate.fork(this, e)
                        }
                        wrap(e, t) {
                            if ("function" != typeof e) throw new Error("Expecting function got: " + e);
                            const n = this._zoneDelegate.intercept(this, e, t),
                                o = this;
                            return function() {
                                return o.runGuarded(n, this, arguments, t)
                            }
                        }
                        run(e, t, n, o) {
                            z = {
                                parent: z,
                                zone: this
                            };
                            try {
                                return this._zoneDelegate.invoke(this, e, t, n, o)
                            } finally {
                                z = z.parent
                            }
                        }
                        runGuarded(e, t = null, n, o) {
                            z = {
                                parent: z,
                                zone: this
                            };
                            try {
                                try {
                                    return this._zoneDelegate.invoke(this, e, t, n, o)
                                } catch (r) {
                                    if (this._zoneDelegate.handleError(this, r)) throw r
                                }
                            } finally {
                                z = z.parent
                            }
                        }
                        runTask(e, t, n) {
                            if (e.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (e.zone || y).name + "; Execution: " + this.name + ")");
                            if (e.state === v && (e.type === P || e.type === D)) return;
                            const o = e.state != E;
                            o && e._transitionTo(E, T), e.runCount++;
                            const r = j;
                            j = e, z = {
                                parent: z,
                                zone: this
                            };
                            try {
                                e.type == D && e.data && !e.data.isPeriodic && (e.cancelFn = void 0);
                                try {
                                    return this._zoneDelegate.invokeTask(this, e, t, n)
                                } catch (s) {
                                    if (this._zoneDelegate.handleError(this, s)) throw s
                                }
                            } finally {
                                e.state !== v && e.state !== Z && (e.type == P || e.data && e.data.isPeriodic ? o && e._transitionTo(T, E) : (e.runCount = 0, this._updateTaskCount(e, -1), o && e._transitionTo(v, E, v))), z = z.parent, j = r
                            }
                        }
                        scheduleTask(e) {
                            if (e.zone && e.zone !== this) {
                                let t = this;
                                for (; t;) {
                                    if (t === e.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);
                                    t = t.parent
                                }
                            }
                            e._transitionTo(b, v);
                            const t = [];
                            e._zoneDelegates = t, e._zone = this;
                            try {
                                e = this._zoneDelegate.scheduleTask(this, e)
                            } catch (n) {
                                throw e._transitionTo(Z, b, v), this._zoneDelegate.handleError(this, n), n
                            }
                            return e._zoneDelegates === t && this._updateTaskCount(e, 1), e.state == b && e._transitionTo(T, b), e
                        }
                        scheduleMicroTask(e, t, n, o) {
                            return this.scheduleTask(new u(S, e, t, n, o, void 0))
                        }
                        scheduleMacroTask(e, t, n, o, r) {
                            return this.scheduleTask(new u(D, e, t, n, o, r))
                        }
                        scheduleEventTask(e, t, n, o, r) {
                            return this.scheduleTask(new u(P, e, t, n, o, r))
                        }
                        cancelTask(e) {
                            if (e.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (e.zone || y).name + "; Execution: " + this.name + ")");
                            e._transitionTo(w, T, E);
                            try {
                                this._zoneDelegate.cancelTask(this, e)
                            } catch (t) {
                                throw e._transitionTo(Z, w), this._zoneDelegate.handleError(this, t), t
                            }
                            return this._updateTaskCount(e, -1), e._transitionTo(v, w), e.runCount = 0, e
                        }
                        _updateTaskCount(e, t) {
                            const n = e._zoneDelegates; - 1 == t && (e._zoneDelegates = null);
                            for (let o = 0; o < n.length; o++) n[o]._updateTaskCount(e.type, t)
                        }
                    }
                    i.__symbol__ = s;
                    const c = {
                        name: "",
                        onHasTask: (e, t, n, o) => e.hasTask(n, o),
                        onScheduleTask: (e, t, n, o) => e.scheduleTask(n, o),
                        onInvokeTask: (e, t, n, o, r, s) => e.invokeTask(n, o, r, s),
                        onCancelTask: (e, t, n, o) => e.cancelTask(n, o)
                    };
                    class l {
                        constructor(e, t, n) {
                            this._taskCounts = {
                                microTask: 0,
                                macroTask: 0,
                                eventTask: 0
                            }, this.zone = e, this._parentDelegate = t, this._forkZS = n && (n && n.onFork ? n : t._forkZS), this._forkDlgt = n && (n.onFork ? t : t._forkDlgt), this._forkCurrZone = n && (n.onFork ? this.zone : t._forkCurrZone), this._interceptZS = n && (n.onIntercept ? n : t._interceptZS), this._interceptDlgt = n && (n.onIntercept ? t : t._interceptDlgt), this._interceptCurrZone = n && (n.onIntercept ? this.zone : t._interceptCurrZone), this._invokeZS = n && (n.onInvoke ? n : t._invokeZS), this._invokeDlgt = n && (n.onInvoke ? t : t._invokeDlgt), this._invokeCurrZone = n && (n.onInvoke ? this.zone : t._invokeCurrZone), this._handleErrorZS = n && (n.onHandleError ? n : t._handleErrorZS), this._handleErrorDlgt = n && (n.onHandleError ? t : t._handleErrorDlgt), this._handleErrorCurrZone = n && (n.onHandleError ? this.zone : t._handleErrorCurrZone), this._scheduleTaskZS = n && (n.onScheduleTask ? n : t._scheduleTaskZS), this._scheduleTaskDlgt = n && (n.onScheduleTask ? t : t._scheduleTaskDlgt), this._scheduleTaskCurrZone = n && (n.onScheduleTask ? this.zone : t._scheduleTaskCurrZone), this._invokeTaskZS = n && (n.onInvokeTask ? n : t._invokeTaskZS), this._invokeTaskDlgt = n && (n.onInvokeTask ? t : t._invokeTaskDlgt), this._invokeTaskCurrZone = n && (n.onInvokeTask ? this.zone : t._invokeTaskCurrZone), this._cancelTaskZS = n && (n.onCancelTask ? n : t._cancelTaskZS), this._cancelTaskDlgt = n && (n.onCancelTask ? t : t._cancelTaskDlgt), this._cancelTaskCurrZone = n && (n.onCancelTask ? this.zone : t._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
                            const o = n && n.onHasTask;
                            (o || t && t._hasTaskZS) && (this._hasTaskZS = o ? n : c, this._hasTaskDlgt = t, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = e, n.onScheduleTask || (this._scheduleTaskZS = c, this._scheduleTaskDlgt = t, this._scheduleTaskCurrZone = this.zone), n.onInvokeTask || (this._invokeTaskZS = c, this._invokeTaskDlgt = t, this._invokeTaskCurrZone = this.zone), n.onCancelTask || (this._cancelTaskZS = c, this._cancelTaskDlgt = t, this._cancelTaskCurrZone = this.zone))
                        }
                        fork(e, t) {
                            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, e, t) : new i(e, t)
                        }
                        intercept(e, t, n) {
                            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, e, t, n) : t
                        }
                        invoke(e, t, n, o, r) {
                            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, e, t, n, o, r) : t.apply(n, o)
                        }
                        handleError(e, t) {
                            return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, e, t)
                        }
                        scheduleTask(e, t) {
                            let n = t;
                            if (this._scheduleTaskZS) this._hasTaskZS && n._zoneDelegates.push(this._hasTaskDlgtOwner), n = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, e, t), n || (n = t);
                            else if (t.scheduleFn) t.scheduleFn(t);
                            else {
                                if (t.type != S) throw new Error("Task is missing scheduleFn.");
                                k(t)
                            }
                            return n
                        }
                        invokeTask(e, t, n, o) {
                            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, e, t, n, o) : t.callback.apply(n, o)
                        }
                        cancelTask(e, t) {
                            let n;
                            if (this._cancelTaskZS) n = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, e, t);
                            else {
                                if (!t.cancelFn) throw Error("Task is not cancelable");
                                n = t.cancelFn(t)
                            }
                            return n
                        }
                        hasTask(e, t) {
                            try {
                                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, e, t)
                            } catch (n) {
                                this.handleError(e, n)
                            }
                        }
                        _updateTaskCount(e, t) {
                            const n = this._taskCounts,
                                o = n[e],
                                r = n[e] = o + t;
                            if (r < 0) throw new Error("More tasks executed then were scheduled.");
                            0 != o && 0 != r || this.hasTask(this.zone, {
                                microTask: n.microTask > 0,
                                macroTask: n.macroTask > 0,
                                eventTask: n.eventTask > 0,
                                change: e
                            })
                        }
                    }
                    class u {
                        constructor(t, n, o, r, s, a) {
                            if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = t, this.source = n, this.data = r, this.scheduleFn = s, this.cancelFn = a, !o) throw new Error("callback is not defined");
                            this.callback = o;
                            const i = this;
                            this.invoke = t === P && r && r.useG ? u.invokeTask : function() {
                                return u.invokeTask.call(e, i, this, arguments)
                            }
                        }
                        static invokeTask(e, t, n) {
                            e || (e = this), I++;
                            try {
                                return e.runCount++, e.zone.runTask(e, t, n)
                            } finally {
                                1 == I && m(), I--
                            }
                        }
                        get zone() {
                            return this._zone
                        }
                        get state() {
                            return this._state
                        }
                        cancelScheduleRequest() {
                            this._transitionTo(v, b)
                        }
                        _transitionTo(e, t, n) {
                            if (this._state !== t && this._state !== n) throw new Error(`${this.type} '${this.source}': can not transition to '${e}', expecting state '${t}'${n?" or '"+n+"'":""}, was '${this._state}'.`);
                            this._state = e, e == v && (this._zoneDelegates = null)
                        }
                        toString() {
                            return this.data && void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this)
                        }
                        toJSON() {
                            return {
                                type: this.type,
                                state: this.state,
                                source: this.source,
                                zone: this.zone.name,
                                runCount: this.runCount
                            }
                        }
                    }
                    const h = s("setTimeout"),
                        p = s("Promise"),
                        f = s("then");
                    let d, g = [],
                        _ = !1;

                    function k(t) {
                        if (0 === I && 0 === g.length)
                            if (d || e[p] && (d = e[p].resolve(0)), d) {
                                let e = d[f];
                                e || (e = d.then), e.call(d, m)
                            } else e[h](m, 0);
                        t && g.push(t)
                    }

                    function m() {
                        if (!_) {
                            for (_ = !0; g.length;) {
                                const t = g;
                                g = [];
                                for (let n = 0; n < t.length; n++) {
                                    const o = t[n];
                                    try {
                                        o.zone.runTask(o, null, null)
                                    } catch (e) {
                                        O.onUnhandledError(e)
                                    }
                                }
                            }
                            O.microtaskDrainDone(), _ = !1
                        }
                    }
                    const y = {
                            name: "NO ZONE"
                        },
                        v = "notScheduled",
                        b = "scheduling",
                        T = "scheduled",
                        E = "running",
                        w = "canceling",
                        Z = "unknown",
                        S = "microTask",
                        D = "macroTask",
                        P = "eventTask",
                        C = {},
                        O = {
                            symbol: s,
                            currentZoneFrame: () => z,
                            onUnhandledError: R,
                            microtaskDrainDone: R,
                            scheduleMicroTask: k,
                            showUncaughtError: () => !i[s("ignoreConsoleErrorUncaughtError")],
                            patchEventTarget: () => [],
                            patchOnProperties: R,
                            patchMethod: () => R,
                            bindArguments: () => [],
                            patchThen: () => R,
                            patchMacroTask: () => R,
                            setNativePromise: e => {
                                e && "function" == typeof e.resolve && (d = e.resolve(0))
                            },
                            patchEventPrototype: () => R,
                            isIEOrEdge: () => !1,
                            getGlobalObjects: () => {},
                            ObjectDefineProperty: () => R,
                            ObjectGetOwnPropertyDescriptor: () => {},
                            ObjectCreate: () => {},
                            ArraySlice: () => [],
                            patchClass: () => R,
                            wrapWithCurrentZone: () => R,
                            filterProperties: () => [],
                            attachOriginToPatched: () => R,
                            _redefineProperty: () => R,
                            patchCallbacks: () => R
                        };
                    let z = {
                            parent: null,
                            zone: new i(null, null)
                        },
                        j = null,
                        I = 0;

                    function R() {}
                    o("Zone", "Zone"), e.Zone = i
                }("undefined" != typeof window && window || "undefined" != typeof self && self || global), Zone.__load_patch("ZoneAwarePromise", (e, t, n) => {
                    const o = Object.getOwnPropertyDescriptor,
                        r = Object.defineProperty,
                        s = n.symbol,
                        a = [],
                        i = !0 === e[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                        c = s("Promise"),
                        l = s("then");
                    n.onUnhandledError = e => {
                        if (n.showUncaughtError()) {
                            const t = e && e.rejection;
                            t ? console.error("Unhandled Promise rejection:", t instanceof Error ? t.message : t, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", t, t instanceof Error ? t.stack : void 0) : console.error(e)
                        }
                    }, n.microtaskDrainDone = () => {
                        for (; a.length;) {
                            const t = a.shift();
                            try {
                                t.zone.runGuarded(() => {
                                    throw t
                                })
                            } catch (e) {
                                h(e)
                            }
                        }
                    };
                    const u = s("unhandledPromiseRejectionHandler");

                    function h(e) {
                        n.onUnhandledError(e);
                        try {
                            const n = t[u];
                            "function" == typeof n && n.call(this, e)
                        } catch (o) {}
                    }

                    function p(e) {
                        return e && e.then
                    }

                    function f(e) {
                        return e
                    }

                    function d(e) {
                        return D.reject(e)
                    }
                    const g = s("state"),
                        _ = s("value"),
                        k = s("finally"),
                        m = s("parentPromiseValue"),
                        y = s("parentPromiseState");

                    function v(e, t) {
                        return n => {
                            try {
                                T(e, t, n)
                            } catch (o) {
                                T(e, !1, o)
                            }
                        }
                    }
                    const b = s("currentTaskTrace");

                    function T(e, o, s) {
                        const c = function() {
                            let e = !1;
                            return function(t) {
                                return function() {
                                    e || (e = !0, t.apply(null, arguments))
                                }
                            }
                        }();
                        if (e === s) throw new TypeError("Promise resolved with itself");
                        if (null === e[g]) {
                            let h = null;
                            try {
                                "object" != typeof s && "function" != typeof s || (h = s && s.then)
                            } catch (u) {
                                return c(() => {
                                    T(e, !1, u)
                                })(), e
                            }
                            if (!1 !== o && s instanceof D && s.hasOwnProperty(g) && s.hasOwnProperty(_) && null !== s[g]) w(s), T(e, s[g], s[_]);
                            else if (!1 !== o && "function" == typeof h) try {
                                h.call(s, c(v(e, o)), c(v(e, !1)))
                            } catch (u) {
                                c(() => {
                                    T(e, !1, u)
                                })()
                            } else {
                                e[g] = o;
                                const c = e[_];
                                if (e[_] = s, e[k] === k && !0 === o && (e[g] = e[y], e[_] = e[m]), !1 === o && s instanceof Error) {
                                    const e = t.currentTask && t.currentTask.data && t.currentTask.data.__creationTrace__;
                                    e && r(s, b, {
                                        configurable: !0,
                                        enumerable: !1,
                                        writable: !0,
                                        value: e
                                    })
                                }
                                for (let t = 0; t < c.length;) Z(e, c[t++], c[t++], c[t++], c[t++]);
                                if (0 == c.length && 0 == o) {
                                    e[g] = 0;
                                    let o = s;
                                    if (!i) try {
                                        throw new Error("Uncaught (in promise): " + ((l = s) && l.toString === Object.prototype.toString ? (l.constructor && l.constructor.name || "") + ": " + JSON.stringify(l) : l ? l.toString() : Object.prototype.toString.call(l)) + (s && s.stack ? "\n" + s.stack : ""))
                                    } catch (u) {
                                        o = u
                                    }
                                    o.rejection = s, o.promise = e, o.zone = t.current, o.task = t.currentTask, a.push(o), n.scheduleMicroTask()
                                }
                            }
                        }
                        var l;
                        return e
                    }
                    const E = s("rejectionHandledHandler");

                    function w(e) {
                        if (0 === e[g]) {
                            try {
                                const n = t[E];
                                n && "function" == typeof n && n.call(this, {
                                    rejection: e[_],
                                    promise: e
                                })
                            } catch (n) {}
                            e[g] = !1;
                            for (let t = 0; t < a.length; t++) e === a[t].promise && a.splice(t, 1)
                        }
                    }

                    function Z(e, t, n, o, r) {
                        w(e);
                        const s = e[g],
                            a = s ? "function" == typeof o ? o : f : "function" == typeof r ? r : d;
                        t.scheduleMicroTask("Promise.then", () => {
                            try {
                                const o = e[_],
                                    r = !!n && k === n[k];
                                r && (n[m] = o, n[y] = s);
                                const i = t.run(a, void 0, r && a !== d && a !== f ? [] : [o]);
                                T(n, !0, i)
                            } catch (o) {
                                T(n, !1, o)
                            }
                        }, n)
                    }
                    const S = function() {};
                    class D {
                        static toString() {
                            return "function ZoneAwarePromise() { [native code] }"
                        }
                        static resolve(e) {
                            return T(new this(null), !0, e)
                        }
                        static reject(e) {
                            return T(new this(null), !1, e)
                        }
                        static race(e) {
                            let t, n, o = new this((e, o) => {
                                t = e, n = o
                            });

                            function r(e) {
                                t(e)
                            }

                            function s(e) {
                                n(e)
                            }
                            for (let a of e) p(a) || (a = this.resolve(a)), a.then(r, s);
                            return o
                        }
                        static all(e) {
                            return D.allWithCallback(e)
                        }
                        static allSettled(e) {
                            return (this && this.prototype instanceof D ? this : D).allWithCallback(e, {
                                thenCallback: e => ({
                                    status: "fulfilled",
                                    value: e
                                }),
                                errorCallback: e => ({
                                    status: "rejected",
                                    reason: e
                                })
                            })
                        }
                        static allWithCallback(e, t) {
                            let n, o, r = new this((e, t) => {
                                    n = e, o = t
                                }),
                                s = 2,
                                a = 0;
                            const i = [];
                            for (let l of e) {
                                p(l) || (l = this.resolve(l));
                                const e = a;
                                try {
                                    l.then(o => {
                                        i[e] = t ? t.thenCallback(o) : o, s--, 0 === s && n(i)
                                    }, r => {
                                        t ? (i[e] = t.errorCallback(r), s--, 0 === s && n(i)) : o(r)
                                    })
                                } catch (c) {
                                    o(c)
                                }
                                s++, a++
                            }
                            return s -= 2, 0 === s && n(i), r
                        }
                        constructor(e) {
                            const t = this;
                            if (!(t instanceof D)) throw new Error("Must be an instanceof Promise.");
                            t[g] = null, t[_] = [];
                            try {
                                e && e(v(t, !0), v(t, !1))
                            } catch (n) {
                                T(t, !1, n)
                            }
                        }
                        get[Symbol.toStringTag]() {
                            return "Promise"
                        }
                        get[Symbol.species]() {
                            return D
                        }
                        then(e, n) {
                            let o = this.constructor[Symbol.species];
                            o && "function" == typeof o || (o = this.constructor || D);
                            const r = new o(S),
                                s = t.current;
                            return null == this[g] ? this[_].push(s, r, e, n) : Z(this, s, r, e, n), r
                        } catch (e) {
                            return this.then(null, e)
                        } finally(e) {
                            let n = this.constructor[Symbol.species];
                            n && "function" == typeof n || (n = D);
                            const o = new n(S);
                            o[k] = k;
                            const r = t.current;
                            return null == this[g] ? this[_].push(r, o, e, e) : Z(this, r, o, e, e), o
                        }
                    }
                    D.resolve = D.resolve, D.reject = D.reject, D.race = D.race, D.all = D.all;
                    const P = e[c] = e.Promise,
                        C = t.__symbol__("ZoneAwarePromise");
                    let O = o(e, "Promise");
                    O && !O.configurable || (O && delete O.writable, O && delete O.value, O || (O = {
                        configurable: !0,
                        enumerable: !0
                    }), O.get = function() {
                        return e[C] ? e[C] : e[c]
                    }, O.set = function(t) {
                        t === D ? e[C] = t : (e[c] = t, t.prototype[l] || j(t), n.setNativePromise(t))
                    }, r(e, "Promise", O)), e.Promise = D;
                    const z = s("thenPatched");

                    function j(e) {
                        const t = e.prototype,
                            n = o(t, "then");
                        if (n && (!1 === n.writable || !n.configurable)) return;
                        const r = t.then;
                        t[l] = r, e.prototype.then = function(e, t) {
                            return new D((e, t) => {
                                r.call(this, e, t)
                            }).then(e, t)
                        }, e[z] = !0
                    }
                    if (n.patchThen = j, P) {
                        j(P);
                        const t = e.fetch;
                        "function" == typeof t && (e[n.symbol("fetch")] = t, e.fetch = (I = t, function() {
                            let e = I.apply(this, arguments);
                            if (e instanceof D) return e;
                            let t = e.constructor;
                            return t[z] || j(t), e
                        }))
                    }
                    var I;
                    return Promise[t.__symbol__("uncaughtPromiseErrors")] = a, D
                });
                const e = Object.getOwnPropertyDescriptor,
                    t = Object.defineProperty,
                    n = Object.getPrototypeOf,
                    o = Object.create,
                    r = Array.prototype.slice,
                    s = Zone.__symbol__("addEventListener"),
                    a = Zone.__symbol__("removeEventListener"),
                    i = Zone.__symbol__("");

                function c(e, t) {
                    return Zone.current.wrap(e, t)
                }

                function l(e, t, n, o, r) {
                    return Zone.current.scheduleMacroTask(e, t, n, o, r)
                }
                const u = Zone.__symbol__,
                    h = "undefined" != typeof window,
                    p = h ? window : void 0,
                    f = h && p || "object" == typeof self && self || global,
                    d = [null];

                function g(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) "function" == typeof e[n] && (e[n] = c(e[n], t + "_" + n));
                    return e
                }

                function _(e) {
                    return !e || !1 !== e.writable && !("function" == typeof e.get && void 0 === e.set)
                }
                const k = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
                    m = !("nw" in f) && void 0 !== f.process && "[object process]" === {}.toString.call(f.process),
                    y = !m && !k && !(!h || !p.HTMLElement),
                    v = void 0 !== f.process && "[object process]" === {}.toString.call(f.process) && !k && !(!h || !p.HTMLElement),
                    b = {},
                    T = function(e) {
                        if (!(e = e || f.event)) return;
                        let t = b[e.type];
                        t || (t = b[e.type] = u("ON_PROPERTY" + e.type));
                        const n = this || e.target || f,
                            o = n[t];
                        let r;
                        if (y && n === p && "error" === e.type) {
                            const t = e;
                            r = o && o.call(this, t.message, t.filename, t.lineno, t.colno, t.error), !0 === r && e.preventDefault()
                        } else r = o && o.apply(this, arguments), null == r || r || e.preventDefault();
                        return r
                    };

                function E(n, o, r) {
                    let s = e(n, o);
                    if (!s && r && e(r, o) && (s = {
                            enumerable: !0,
                            configurable: !0
                        }), !s || !s.configurable) return;
                    const a = u("on" + o + "patched");
                    if (n.hasOwnProperty(a) && n[a]) return;
                    delete s.writable, delete s.value;
                    const i = s.get,
                        c = s.set,
                        l = o.substr(2);
                    let h = b[l];
                    h || (h = b[l] = u("ON_PROPERTY" + l)), s.set = function(e) {
                        let t = this;
                        t || n !== f || (t = f), t && (t[h] && t.removeEventListener(l, T), c && c.apply(t, d), "function" == typeof e ? (t[h] = e, t.addEventListener(l, T, !1)) : t[h] = null)
                    }, s.get = function() {
                        let e = this;
                        if (e || n !== f || (e = f), !e) return null;
                        const t = e[h];
                        if (t) return t;
                        if (i) {
                            let t = i && i.call(this);
                            if (t) return s.set.call(this, t), "function" == typeof e.removeAttribute && e.removeAttribute(o), t
                        }
                        return null
                    }, t(n, o, s), n[a] = !0
                }

                function w(e, t, n) {
                    if (t)
                        for (let o = 0; o < t.length; o++) E(e, "on" + t[o], n);
                    else {
                        const t = [];
                        for (const n in e) "on" == n.substr(0, 2) && t.push(n);
                        for (let o = 0; o < t.length; o++) E(e, t[o], n)
                    }
                }
                const Z = u("originalInstance");

                function S(e) {
                    const n = f[e];
                    if (!n) return;
                    f[u(e)] = n, f[e] = function() {
                        const t = g(arguments, e);
                        switch (t.length) {
                            case 0:
                                this[Z] = new n;
                                break;
                            case 1:
                                this[Z] = new n(t[0]);
                                break;
                            case 2:
                                this[Z] = new n(t[0], t[1]);
                                break;
                            case 3:
                                this[Z] = new n(t[0], t[1], t[2]);
                                break;
                            case 4:
                                this[Z] = new n(t[0], t[1], t[2], t[3]);
                                break;
                            default:
                                throw new Error("Arg list too long.")
                        }
                    }, C(f[e], n);
                    const o = new n((function() {}));
                    let r;
                    for (r in o) "XMLHttpRequest" === e && "responseBlob" === r || function(n) {
                        "function" == typeof o[n] ? f[e].prototype[n] = function() {
                            return this[Z][n].apply(this[Z], arguments)
                        } : t(f[e].prototype, n, {
                            set: function(t) {
                                "function" == typeof t ? (this[Z][n] = c(t, e + "." + n), C(this[Z][n], t)) : this[Z][n] = t
                            },
                            get: function() {
                                return this[Z][n]
                            }
                        })
                    }(r);
                    for (r in n) "prototype" !== r && n.hasOwnProperty(r) && (f[e][r] = n[r])
                }

                function D(t, o, r) {
                    let s = t;
                    for (; s && !s.hasOwnProperty(o);) s = n(s);
                    !s && t[o] && (s = t);
                    const a = u(o);
                    let i = null;
                    if (s && !(i = s[a]) && (i = s[a] = s[o], _(s && e(s, o)))) {
                        const e = r(i, a, o);
                        s[o] = function() {
                            return e(this, arguments)
                        }, C(s[o], i)
                    }
                    return i
                }

                function P(e, t, n) {
                    let o = null;

                    function r(e) {
                        const t = e.data;
                        return t.args[t.cbIdx] = function() {
                            e.invoke.apply(this, arguments)
                        }, o.apply(t.target, t.args), e
                    }
                    o = D(e, t, e => function(t, o) {
                        const s = n(t, o);
                        return s.cbIdx >= 0 && "function" == typeof o[s.cbIdx] ? l(s.name, o[s.cbIdx], s, r) : e.apply(t, o)
                    })
                }

                function C(e, t) {
                    e[u("OriginalDelegate")] = t
                }
                let O = !1,
                    z = !1;

                function j() {
                    try {
                        const e = p.navigator.userAgent;
                        if (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/")) return !0
                    } catch (e) {}
                    return !1
                }

                function I() {
                    if (O) return z;
                    O = !0;
                    try {
                        const e = p.navigator.userAgent; - 1 === e.indexOf("MSIE ") && -1 === e.indexOf("Trident/") && -1 === e.indexOf("Edge/") || (z = !0)
                    } catch (e) {}
                    return z
                }
                Zone.__load_patch("toString", e => {
                    const t = Function.prototype.toString,
                        n = u("OriginalDelegate"),
                        o = u("Promise"),
                        r = u("Error"),
                        s = function() {
                            if ("function" == typeof this) {
                                const s = this[n];
                                if (s) return "function" == typeof s ? t.call(s) : Object.prototype.toString.call(s);
                                if (this === Promise) {
                                    const n = e[o];
                                    if (n) return t.call(n)
                                }
                                if (this === Error) {
                                    const n = e[r];
                                    if (n) return t.call(n)
                                }
                            }
                            return t.call(this)
                        };
                    s[n] = t, Function.prototype.toString = s;
                    const a = Object.prototype.toString;
                    Object.prototype.toString = function() {
                        return this instanceof Promise ? "[object Promise]" : a.call(this)
                    }
                });
                let R = !1;
                if ("undefined" != typeof window) try {
                    const e = Object.defineProperty({}, "passive", {
                        get: function() {
                            R = !0
                        }
                    });
                    window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
                } catch (ie) {
                    R = !1
                }
                const N = {
                        useG: !0
                    },
                    x = {},
                    L = {},
                    M = new RegExp("^" + i + "(\\w+)(true|false)$"),
                    A = u("propagationStopped");

                function H(e, t) {
                    const n = (t ? t(e) : e) + "false",
                        o = (t ? t(e) : e) + "true",
                        r = i + n,
                        s = i + o;
                    x[e] = {}, x[e].false = r, x[e].true = s
                }

                function F(e, t, o) {
                    const r = o && o.add || "addEventListener",
                        s = o && o.rm || "removeEventListener",
                        a = o && o.listeners || "eventListeners",
                        c = o && o.rmAll || "removeAllListeners",
                        l = u(r),
                        h = "." + r + ":",
                        p = function(e, t, n) {
                            if (e.isRemoved) return;
                            const o = e.callback;
                            "object" == typeof o && o.handleEvent && (e.callback = e => o.handleEvent(e), e.originalDelegate = o), e.invoke(e, t, [n]);
                            const r = e.options;
                            r && "object" == typeof r && r.once && t[s].call(t, n.type, e.originalDelegate ? e.originalDelegate : e.callback, r)
                        },
                        f = function(t) {
                            if (!(t = t || e.event)) return;
                            const n = this || t.target || e,
                                o = n[x[t.type].false];
                            if (o)
                                if (1 === o.length) p(o[0], n, t);
                                else {
                                    const e = o.slice();
                                    for (let o = 0; o < e.length && (!t || !0 !== t[A]); o++) p(e[o], n, t)
                                }
                        },
                        d = function(t) {
                            if (!(t = t || e.event)) return;
                            const n = this || t.target || e,
                                o = n[x[t.type].true];
                            if (o)
                                if (1 === o.length) p(o[0], n, t);
                                else {
                                    const e = o.slice();
                                    for (let o = 0; o < e.length && (!t || !0 !== t[A]); o++) p(e[o], n, t)
                                }
                        };

                    function g(t, o) {
                        if (!t) return !1;
                        let p = !0;
                        o && void 0 !== o.useG && (p = o.useG);
                        const g = o && o.vh;
                        let _ = !0;
                        o && void 0 !== o.chkDup && (_ = o.chkDup);
                        let k = !1;
                        o && void 0 !== o.rt && (k = o.rt);
                        let y = t;
                        for (; y && !y.hasOwnProperty(r);) y = n(y);
                        if (!y && t[r] && (y = t), !y) return !1;
                        if (y[l]) return !1;
                        const v = o && o.eventNameToString,
                            b = {},
                            T = y[l] = y[r],
                            E = y[u(s)] = y[s],
                            w = y[u(a)] = y[a],
                            Z = y[u(c)] = y[c];
                        let S;

                        function D(e, t) {
                            return !R && "object" == typeof e && e ? !!e.capture : R && t ? "boolean" == typeof e ? {
                                capture: e,
                                passive: !0
                            } : e ? "object" == typeof e && !1 !== e.passive ? Object.assign(Object.assign({}, e), {
                                passive: !0
                            }) : e : {
                                passive: !0
                            } : e
                        }
                        o && o.prepend && (S = y[u(o.prepend)] = y[o.prepend]);
                        const P = p ? function(e) {
                                if (!b.isExisting) return T.call(b.target, b.eventName, b.capture ? d : f, b.options)
                            } : function(e) {
                                return T.call(b.target, b.eventName, e.invoke, b.options)
                            },
                            O = p ? function(e) {
                                if (!e.isRemoved) {
                                    const t = x[e.eventName];
                                    let n;
                                    t && (n = t[e.capture ? "true" : "false"]);
                                    const o = n && e.target[n];
                                    if (o)
                                        for (let r = 0; r < o.length; r++)
                                            if (o[r] === e) {
                                                o.splice(r, 1), e.isRemoved = !0, 0 === o.length && (e.allRemoved = !0, e.target[n] = null);
                                                break
                                            }
                                }
                                if (e.allRemoved) return E.call(e.target, e.eventName, e.capture ? d : f, e.options)
                            } : function(e) {
                                return E.call(e.target, e.eventName, e.invoke, e.options)
                            },
                            z = o && o.diff ? o.diff : function(e, t) {
                                const n = typeof t;
                                return "function" === n && e.callback === t || "object" === n && e.originalDelegate === t
                            },
                            j = Zone[u("BLACK_LISTED_EVENTS")],
                            I = e[u("PASSIVE_EVENTS")],
                            A = function(t, n, r, s, a = !1, i = !1) {
                                return function() {
                                    const c = this || e;
                                    let l = arguments[0];
                                    o && o.transferEventName && (l = o.transferEventName(l));
                                    let u = arguments[1];
                                    if (!u) return t.apply(this, arguments);
                                    if (m && "uncaughtException" === l) return t.apply(this, arguments);
                                    let h = !1;
                                    if ("function" != typeof u) {
                                        if (!u.handleEvent) return t.apply(this, arguments);
                                        h = !0
                                    }
                                    if (g && !g(t, u, c, arguments)) return;
                                    const f = R && !!I && -1 !== I.indexOf(l),
                                        d = D(arguments[2], f);
                                    if (j)
                                        for (let e = 0; e < j.length; e++)
                                            if (l === j[e]) return f ? t.call(c, l, u, d) : t.apply(this, arguments);
                                    const k = !!d && ("boolean" == typeof d || d.capture),
                                        y = !(!d || "object" != typeof d) && d.once,
                                        T = Zone.current;
                                    let E = x[l];
                                    E || (H(l, v), E = x[l]);
                                    const w = E[k ? "true" : "false"];
                                    let Z, S = c[w],
                                        P = !1;
                                    if (S) {
                                        if (P = !0, _)
                                            for (let e = 0; e < S.length; e++)
                                                if (z(S[e], u)) return
                                    } else S = c[w] = [];
                                    const C = c.constructor.name,
                                        O = L[C];
                                    O && (Z = O[l]), Z || (Z = C + n + (v ? v(l) : l)), b.options = d, y && (b.options.once = !1), b.target = c, b.capture = k, b.eventName = l, b.isExisting = P;
                                    const M = p ? N : void 0;
                                    M && (M.taskData = b);
                                    const A = T.scheduleEventTask(Z, u, M, r, s);
                                    return b.target = null, M && (M.taskData = null), y && (d.once = !0), (R || "boolean" != typeof A.options) && (A.options = d), A.target = c, A.capture = k, A.eventName = l, h && (A.originalDelegate = u), i ? S.unshift(A) : S.push(A), a ? c : void 0
                                }
                            };
                        return y[r] = A(T, h, P, O, k), S && (y.prependListener = A(S, ".prependListener:", (function(e) {
                            return S.call(b.target, b.eventName, e.invoke, b.options)
                        }), O, k, !0)), y[s] = function() {
                            const t = this || e;
                            let n = arguments[0];
                            o && o.transferEventName && (n = o.transferEventName(n));
                            const r = arguments[2],
                                s = !!r && ("boolean" == typeof r || r.capture),
                                a = arguments[1];
                            if (!a) return E.apply(this, arguments);
                            if (g && !g(E, a, t, arguments)) return;
                            const c = x[n];
                            let l;
                            c && (l = c[s ? "true" : "false"]);
                            const u = l && t[l];
                            if (u)
                                for (let e = 0; e < u.length; e++) {
                                    const o = u[e];
                                    if (z(o, a)) return u.splice(e, 1), o.isRemoved = !0, 0 === u.length && (o.allRemoved = !0, t[l] = null, "string" == typeof n) && (t[i + "ON_PROPERTY" + n] = null), o.zone.cancelTask(o), k ? t : void 0
                                }
                            return E.apply(this, arguments)
                        }, y[a] = function() {
                            const t = this || e;
                            let n = arguments[0];
                            o && o.transferEventName && (n = o.transferEventName(n));
                            const r = [],
                                s = G(t, v ? v(n) : n);
                            for (let e = 0; e < s.length; e++) {
                                const t = s[e];
                                r.push(t.originalDelegate ? t.originalDelegate : t.callback)
                            }
                            return r
                        }, y[c] = function() {
                            const t = this || e;
                            let n = arguments[0];
                            if (n) {
                                o && o.transferEventName && (n = o.transferEventName(n));
                                const e = x[n];
                                if (e) {
                                    const o = t[e.false],
                                        r = t[e.true];
                                    if (o) {
                                        const e = o.slice();
                                        for (let t = 0; t < e.length; t++) {
                                            const o = e[t];
                                            this[s].call(this, n, o.originalDelegate ? o.originalDelegate : o.callback, o.options)
                                        }
                                    }
                                    if (r) {
                                        const e = r.slice();
                                        for (let t = 0; t < e.length; t++) {
                                            const o = e[t];
                                            this[s].call(this, n, o.originalDelegate ? o.originalDelegate : o.callback, o.options)
                                        }
                                    }
                                }
                            } else {
                                const e = Object.keys(t);
                                for (let t = 0; t < e.length; t++) {
                                    const n = M.exec(e[t]);
                                    let o = n && n[1];
                                    o && "removeListener" !== o && this[c].call(this, o)
                                }
                                this[c].call(this, "removeListener")
                            }
                            if (k) return this
                        }, C(y[r], T), C(y[s], E), Z && C(y[c], Z), w && C(y[a], w), !0
                    }
                    let _ = [];
                    for (let n = 0; n < t.length; n++) _[n] = g(t[n], o);
                    return _
                }

                function G(e, t) {
                    if (!t) {
                        const n = [];
                        for (let o in e) {
                            const r = M.exec(o);
                            let s = r && r[1];
                            if (s && (!t || s === t)) {
                                const t = e[o];
                                if (t)
                                    for (let e = 0; e < t.length; e++) n.push(t[e])
                            }
                        }
                        return n
                    }
                    let n = x[t];
                    n || (H(t), n = x[t]);
                    const o = e[n.false],
                        r = e[n.true];
                    return o ? r ? o.concat(r) : o.slice() : r ? r.slice() : []
                }

                function q(e, t) {
                    const n = e.Event;
                    n && n.prototype && t.patchMethod(n.prototype, "stopImmediatePropagation", e => function(t, n) {
                        t[A] = !0, e && e.apply(t, n)
                    })
                }

                function B(e, t, n, o, r) {
                    const s = Zone.__symbol__(o);
                    if (t[s]) return;
                    const a = t[s] = t[o];
                    t[o] = function(s, i, c) {
                        return i && i.prototype && r.forEach((function(t) {
                            const r = `${n}.${o}::` + t,
                                s = i.prototype;
                            if (s.hasOwnProperty(t)) {
                                const n = e.ObjectGetOwnPropertyDescriptor(s, t);
                                n && n.value ? (n.value = e.wrapWithCurrentZone(n.value, r), e._redefineProperty(i.prototype, t, n)) : s[t] && (s[t] = e.wrapWithCurrentZone(s[t], r))
                            } else s[t] && (s[t] = e.wrapWithCurrentZone(s[t], r))
                        })), a.call(t, s, i, c)
                    }, e.attachOriginToPatched(t[o], a)
                }
                const W = ["absolutedeviceorientation", "afterinput", "afterprint", "appinstalled", "beforeinstallprompt", "beforeprint", "beforeunload", "devicelight", "devicemotion", "deviceorientation", "deviceorientationabsolute", "deviceproximity", "hashchange", "languagechange", "message", "mozbeforepaint", "offline", "online", "paint", "pageshow", "pagehide", "popstate", "rejectionhandled", "storage", "unhandledrejection", "unload", "userproximity", "vrdisplayconnected", "vrdisplaydisconnected", "vrdisplaypresentchange"],
                    U = ["encrypted", "waitingforkey", "msneedkey", "mozinterruptbegin", "mozinterruptend"],
                    V = ["load"],
                    $ = ["blur", "error", "focus", "load", "resize", "scroll", "messageerror"],
                    X = ["bounce", "finish", "start"],
                    J = ["loadstart", "progress", "abort", "error", "load", "progress", "timeout", "loadend", "readystatechange"],
                    K = ["upgradeneeded", "complete", "abort", "success", "error", "blocked", "versionchange", "close"],
                    Y = ["close", "error", "open", "message"],
                    Q = ["error", "message"],
                    ee = ["abort", "animationcancel", "animationend", "animationiteration", "auxclick", "beforeinput", "blur", "cancel", "canplay", "canplaythrough", "change", "compositionstart", "compositionupdate", "compositionend", "cuechange", "click", "close", "contextmenu", "curechange", "dblclick", "drag", "dragend", "dragenter", "dragexit", "dragleave", "dragover", "drop", "durationchange", "emptied", "ended", "error", "focus", "focusin", "focusout", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadstart", "loadeddata", "loadedmetadata", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "orientationchange", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "mozpointerlockchange", "webkitpointerlockerchange", "pointerlockerror", "mozpointerlockerror", "webkitpointerlockerror", "pointermove", "pointout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "seeked", "seeking", "select", "selectionchange", "selectstart", "show", "sort", "stalled", "submit", "suspend", "timeupdate", "volumechange", "touchcancel", "touchmove", "touchstart", "touchend", "transitioncancel", "transitionend", "waiting", "wheel"].concat(["webglcontextrestored", "webglcontextlost", "webglcontextcreationerror"], ["autocomplete", "autocompleteerror"], ["toggle"], ["afterscriptexecute", "beforescriptexecute", "DOMContentLoaded", "freeze", "fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange", "fullscreenerror", "mozfullscreenerror", "webkitfullscreenerror", "msfullscreenerror", "readystatechange", "visibilitychange", "resume"], W, ["beforecopy", "beforecut", "beforepaste", "copy", "cut", "paste", "dragstart", "loadend", "animationstart", "search", "transitionrun", "transitionstart", "webkitanimationend", "webkitanimationiteration", "webkitanimationstart", "webkittransitionend"], ["activate", "afterupdate", "ariarequest", "beforeactivate", "beforedeactivate", "beforeeditfocus", "beforeupdate", "cellchange", "controlselect", "dataavailable", "datasetchanged", "datasetcomplete", "errorupdate", "filterchange", "layoutcomplete", "losecapture", "move", "moveend", "movestart", "propertychange", "resizeend", "resizestart", "rowenter", "rowexit", "rowsdelete", "rowsinserted", "command", "compassneedscalibration", "deactivate", "help", "mscontentzoom", "msmanipulationstatechanged", "msgesturechange", "msgesturedoubletap", "msgestureend", "msgesturehold", "msgesturestart", "msgesturetap", "msgotpointercapture", "msinertiastart", "mslostpointercapture", "mspointercancel", "mspointerdown", "mspointerenter", "mspointerhover", "mspointerleave", "mspointermove", "mspointerout", "mspointerover", "mspointerup", "pointerout", "mssitemodejumplistitemremoved", "msthumbnailclick", "stop", "storagecommit"]);

                function te(e, t, n) {
                    if (!n || 0 === n.length) return t;
                    const o = n.filter(t => t.target === e);
                    if (!o || 0 === o.length) return t;
                    const r = o[0].ignoreProperties;
                    return t.filter(e => -1 === r.indexOf(e))
                }

                function ne(e, t, n, o) {
                    e && w(e, te(e, t, n), o)
                }

                function oe(e, t) {
                    if (m && !v) return;
                    if (Zone[e.symbol("patchEvents")]) return;
                    const o = "undefined" != typeof WebSocket,
                        r = t.__Zone_ignore_on_properties;
                    if (y) {
                        const e = window,
                            t = j ? [{
                                target: e,
                                ignoreProperties: ["error"]
                            }] : [];
                        ne(e, ee.concat(["messageerror"]), r ? r.concat(t) : r, n(e)), ne(Document.prototype, ee, r), void 0 !== e.SVGElement && ne(e.SVGElement.prototype, ee, r), ne(Element.prototype, ee, r), ne(HTMLElement.prototype, ee, r), ne(HTMLMediaElement.prototype, U, r), ne(HTMLFrameSetElement.prototype, W.concat($), r), ne(HTMLBodyElement.prototype, W.concat($), r), ne(HTMLFrameElement.prototype, V, r), ne(HTMLIFrameElement.prototype, V, r);
                        const o = e.HTMLMarqueeElement;
                        o && ne(o.prototype, X, r);
                        const s = e.Worker;
                        s && ne(s.prototype, Q, r)
                    }
                    const s = t.XMLHttpRequest;
                    s && ne(s.prototype, J, r);
                    const a = t.XMLHttpRequestEventTarget;
                    a && ne(a && a.prototype, J, r), "undefined" != typeof IDBIndex && (ne(IDBIndex.prototype, K, r), ne(IDBRequest.prototype, K, r), ne(IDBOpenDBRequest.prototype, K, r), ne(IDBDatabase.prototype, K, r), ne(IDBTransaction.prototype, K, r), ne(IDBCursor.prototype, K, r)), o && ne(WebSocket.prototype, Y, r)
                }
                Zone.__load_patch("util", (n, s, a) => {
                    a.patchOnProperties = w, a.patchMethod = D, a.bindArguments = g, a.patchMacroTask = P;
                    const l = s.__symbol__("BLACK_LISTED_EVENTS"),
                        u = s.__symbol__("UNPATCHED_EVENTS");
                    n[u] && (n[l] = n[u]), n[l] && (s[l] = s[u] = n[l]), a.patchEventPrototype = q, a.patchEventTarget = F, a.isIEOrEdge = I, a.ObjectDefineProperty = t, a.ObjectGetOwnPropertyDescriptor = e, a.ObjectCreate = o, a.ArraySlice = r, a.patchClass = S, a.wrapWithCurrentZone = c, a.filterProperties = te, a.attachOriginToPatched = C, a._redefineProperty = Object.defineProperty, a.patchCallbacks = B, a.getGlobalObjects = () => ({
                        globalSources: L,
                        zoneSymbolEventNames: x,
                        eventNames: ee,
                        isBrowser: y,
                        isMix: v,
                        isNode: m,
                        TRUE_STR: "true",
                        FALSE_STR: "false",
                        ZONE_SYMBOL_PREFIX: i,
                        ADD_EVENT_LISTENER_STR: "addEventListener",
                        REMOVE_EVENT_LISTENER_STR: "removeEventListener"
                    })
                });
                const re = u("zoneTask");

                function se(e, t, n, o) {
                    let r = null,
                        s = null;
                    n += o;
                    const a = {};

                    function i(t) {
                        const n = t.data;
                        return n.args[0] = function() {
                            try {
                                t.invoke.apply(this, arguments)
                            } finally {
                                t.data && t.data.isPeriodic || ("number" == typeof n.handleId ? delete a[n.handleId] : n.handleId && (n.handleId[re] = null))
                            }
                        }, n.handleId = r.apply(e, n.args), t
                    }

                    function c(e) {
                        return s(e.data.handleId)
                    }
                    r = D(e, t += o, n => function(r, s) {
                        if ("function" == typeof s[0]) {
                            const e = l(t, s[0], {
                                isPeriodic: "Interval" === o,
                                delay: "Timeout" === o || "Interval" === o ? s[1] || 0 : void 0,
                                args: s
                            }, i, c);
                            if (!e) return e;
                            const n = e.data.handleId;
                            return "number" == typeof n ? a[n] = e : n && (n[re] = e), n && n.ref && n.unref && "function" == typeof n.ref && "function" == typeof n.unref && (e.ref = n.ref.bind(n), e.unref = n.unref.bind(n)), "number" == typeof n || n ? n : e
                        }
                        return n.apply(e, s)
                    }), s = D(e, n, t => function(n, o) {
                        const r = o[0];
                        let s;
                        "number" == typeof r ? s = a[r] : (s = r && r[re], s || (s = r)), s && "string" == typeof s.type ? "notScheduled" !== s.state && (s.cancelFn && s.data.isPeriodic || 0 === s.runCount) && ("number" == typeof r ? delete a[r] : r && (r[re] = null), s.zone.cancelTask(s)) : t.apply(e, o)
                    })
                }

                function ae(e, t) {
                    if (Zone[t.symbol("patchEventTarget")]) return;
                    const {
                        eventNames: n,
                        zoneSymbolEventNames: o,
                        TRUE_STR: r,
                        FALSE_STR: s,
                        ZONE_SYMBOL_PREFIX: a
                    } = t.getGlobalObjects();
                    for (let c = 0; c < n.length; c++) {
                        const e = n[c],
                            t = a + (e + s),
                            i = a + (e + r);
                        o[e] = {}, o[e][s] = t, o[e][r] = i
                    }
                    const i = e.EventTarget;
                    return i && i.prototype ? (t.patchEventTarget(e, [i && i.prototype]), !0) : void 0
                }
                Zone.__load_patch("legacy", e => {
                    const t = e[Zone.__symbol__("legacyPatch")];
                    t && t()
                }), Zone.__load_patch("timers", e => {
                    se(e, "set", "clear", "Timeout"), se(e, "set", "clear", "Interval"), se(e, "set", "clear", "Immediate")
                }), Zone.__load_patch("requestAnimationFrame", e => {
                    se(e, "request", "cancel", "AnimationFrame"), se(e, "mozRequest", "mozCancel", "AnimationFrame"), se(e, "webkitRequest", "webkitCancel", "AnimationFrame")
                }), Zone.__load_patch("blocking", (e, t) => {
                    const n = ["alert", "prompt", "confirm"];
                    for (let o = 0; o < n.length; o++) D(e, n[o], (n, o, r) => function(o, s) {
                        return t.current.run(n, e, s, r)
                    })
                }), Zone.__load_patch("EventTarget", (e, t, n) => {
                    (function(e, t) {
                        t.patchEventPrototype(e, t)
                    })(e, n), ae(e, n);
                    const o = e.XMLHttpRequestEventTarget;
                    o && o.prototype && n.patchEventTarget(e, [o.prototype]), S("MutationObserver"), S("WebKitMutationObserver"), S("IntersectionObserver"), S("FileReader")
                }), Zone.__load_patch("on_property", (e, t, n) => {
                    oe(n, e)
                }), Zone.__load_patch("customElements", (e, t, n) => {
                    ! function(e, t) {
                        const {
                            isBrowser: n,
                            isMix: o
                        } = t.getGlobalObjects();
                        (n || o) && e.customElements && "customElements" in e && t.patchCallbacks(t, e.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback"])
                    }(e, n)
                }), Zone.__load_patch("XHR", (e, t) => {
                    ! function(e) {
                        const p = e.XMLHttpRequest;
                        if (!p) return;
                        const f = p.prototype;
                        let d = f[s],
                            g = f[a];
                        if (!d) {
                            const t = e.XMLHttpRequestEventTarget;
                            if (t) {
                                const e = t.prototype;
                                d = e[s], g = e[a]
                            }
                        }

                        function _(e) {
                            const o = e.data,
                                c = o.target;
                            c[i] = !1, c[h] = !1;
                            const l = c[r];
                            d || (d = c[s], g = c[a]), l && g.call(c, "readystatechange", l);
                            const u = c[r] = () => {
                                if (c.readyState === c.DONE)
                                    if (!o.aborted && c[i] && "scheduled" === e.state) {
                                        const n = c[t.__symbol__("loadfalse")];
                                        if (n && n.length > 0) {
                                            const r = e.invoke;
                                            e.invoke = function() {
                                                const n = c[t.__symbol__("loadfalse")];
                                                for (let t = 0; t < n.length; t++) n[t] === e && n.splice(t, 1);
                                                o.aborted || "scheduled" !== e.state || r.call(e)
                                            }, n.push(e)
                                        } else e.invoke()
                                    } else o.aborted || !1 !== c[i] || (c[h] = !0)
                            };
                            return d.call(c, "readystatechange", u), c[n] || (c[n] = e), T.apply(c, o.args), c[i] = !0, e
                        }

                        function k() {}

                        function m(e) {
                            const t = e.data;
                            return t.aborted = !0, E.apply(t.target, t.args)
                        }
                        const y = D(f, "open", () => function(e, t) {
                                return e[o] = 0 == t[2], e[c] = t[1], y.apply(e, t)
                            }),
                            v = u("fetchTaskAborting"),
                            b = u("fetchTaskScheduling"),
                            T = D(f, "send", () => function(e, n) {
                                if (!0 === t.current[b]) return T.apply(e, n);
                                if (e[o]) return T.apply(e, n);
                                {
                                    const t = {
                                            target: e,
                                            url: e[c],
                                            isPeriodic: !1,
                                            args: n,
                                            aborted: !1
                                        },
                                        o = l("XMLHttpRequest.send", k, t, _, m);
                                    e && !0 === e[h] && !t.aborted && "scheduled" === o.state && o.invoke()
                                }
                            }),
                            E = D(f, "abort", () => function(e, o) {
                                const r = e[n];
                                if (r && "string" == typeof r.type) {
                                    if (null == r.cancelFn || r.data && r.data.aborted) return;
                                    r.zone.cancelTask(r)
                                } else if (!0 === t.current[v]) return E.apply(e, o)
                            })
                    }(e);
                    const n = u("xhrTask"),
                        o = u("xhrSync"),
                        r = u("xhrListener"),
                        i = u("xhrScheduled"),
                        c = u("xhrURL"),
                        h = u("xhrErrorBeforeScheduled")
                }), Zone.__load_patch("geolocation", t => {
                    t.navigator && t.navigator.geolocation && function(t, n) {
                        const o = t.constructor.name;
                        for (let r = 0; r < n.length; r++) {
                            const s = n[r],
                                a = t[s];
                            if (a) {
                                if (!_(e(t, s))) continue;
                                t[s] = (e => {
                                    const t = function() {
                                        return e.apply(this, g(arguments, o + "." + s))
                                    };
                                    return C(t, e), t
                                })(a)
                            }
                        }
                    }(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
                }), Zone.__load_patch("PromiseRejectionEvent", (e, t) => {
                    function n(t) {
                        return function(n) {
                            G(e, t).forEach(o => {
                                const r = e.PromiseRejectionEvent;
                                if (r) {
                                    const e = new r(t, {
                                        promise: n.promise,
                                        reason: n.rejection
                                    });
                                    o.invoke(e)
                                }
                            })
                        }
                    }
                    e.PromiseRejectionEvent && (t[u("unhandledPromiseRejectionHandler")] = n("unhandledrejection"), t[u("rejectionHandledHandler")] = n("rejectionhandled"))
                })
            }) ? o.call(t, n, t, e) : o) || (e.exports = r)
        }
    },
    [
        [2, 0]
    ]
]);
! function(e) {
    function r(r) {
        for (var n, l, f = r[0], i = r[1], p = r[2], c = 0, s = []; c < f.length; c++) l = f[c], Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), o[l] = 0;
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (a && a(r); s.length;) s.shift()();
        return u.push.apply(u, p || []), t()
    }

    function t() {
        for (var e, r = 0; r < u.length; r++) {
            for (var t = u[r], n = !0, f = 1; f < t.length; f++) 0 !== o[t[f]] && (n = !1);
            n && (u.splice(r--, 1), e = l(l.s = t[0]))
        }
        return e
    }
    var n = {},
        o = {
            0: 0
        },
        u = [];

    function l(r) {
        if (n[r]) return n[r].exports;
        var t = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports
    }
    l.m = e, l.c = n, l.d = function(e, r, t) {
        l.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: t
        })
    }, l.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, l.t = function(e, r) {
        if (1 & r && (e = l(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (l.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e)
            for (var n in e) l.d(t, n, (function(r) {
                return e[r]
            }).bind(null, n));
        return t
    }, l.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return l.d(r, "a", r), r
    }, l.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, l.p = "";
    var f = window.webpackJsonp = window.webpackJsonp || [],
        i = f.push.bind(f);
    f.push = r, f = f.slice();
    for (var p = 0; p < f.length; p++) r(f[p]);
    var a = i;
    t()
}([]);
(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        0: function(e, t, n) {
            e.exports = n("eAG3")
        },
        "1D88": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        "3Rp7": function(e, t, n) {
            "use strict";
            var i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UserRoleE = void 0, (i = t.UserRoleE || (t.UserRoleE = {})).ADMIN = "ADMIN", i.USER = "USER"
        },
        AJ5D: function(e, t, n) {
            "use strict";
            var i, s;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PaymentStatusE = t.PaymentGatewayE = void 0, (s = t.PaymentGatewayE || (t.PaymentGatewayE = {})).YOOKASSA = "YOOKASSA", s.INVOICE = "INVOICE", (i = t.PaymentStatusE || (t.PaymentStatusE = {})).PENDING = "PENDING", i.SUCCEEDED = "SUCCEEDED", i.CANCELLED = "CANCELLED"
        },
        Bx8h: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        K70k: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        MAYq: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        Oc93: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        QFtD: function(e, t, n) {
            var i;
            ! function(s, r, o, a) {
                "use strict";
                var l, u = ["", "webkit", "Moz", "MS", "ms", "o"],
                    c = r.createElement("div"),
                    h = Math.round,
                    d = Math.abs,
                    p = Date.now;

                function f(e, t, n) {
                    return setTimeout(b(e, n), t)
                }

                function g(e, t, n) {
                    return !!Array.isArray(e) && (m(e, n[t], n), !0)
                }

                function m(e, t, n) {
                    var i;
                    if (e)
                        if (e.forEach) e.forEach(t, n);
                        else if (void 0 !== e.length)
                        for (i = 0; i < e.length;) t.call(n, e[i], i, e), i++;
                    else
                        for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e)
                }

                function w(e, t, n) {
                    var i = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
                    return function() {
                        var t = new Error("get-stack-trace"),
                            n = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                            r = s.console && (s.console.warn || s.console.log);
                        return r && r.call(s.console, i, n), e.apply(this, arguments)
                    }
                }
                l = "function" != typeof Object.assign ? function(e) {
                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                    for (var t = Object(e), n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        if (null != i)
                            for (var s in i) i.hasOwnProperty(s) && (t[s] = i[s])
                    }
                    return t
                } : Object.assign;
                var v = w((function(e, t, n) {
                        for (var i = Object.keys(t), s = 0; s < i.length;)(!n || n && void 0 === e[i[s]]) && (e[i[s]] = t[i[s]]), s++;
                        return e
                    }), "extend", "Use `assign`."),
                    _ = w((function(e, t) {
                        return v(e, t, !0)
                    }), "merge", "Use `assign`.");

                function y(e, t, n) {
                    var i, s = t.prototype;
                    (i = e.prototype = Object.create(s)).constructor = e, i._super = s, n && l(i, n)
                }

                function b(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }

                function C(e, t) {
                    return "function" == typeof e ? e.apply(t && t[0] || void 0, t) : e
                }

                function x(e, t) {
                    return void 0 === e ? t : e
                }

                function S(e, t, n) {
                    m(I(t), (function(t) {
                        e.addEventListener(t, n, !1)
                    }))
                }

                function E(e, t, n) {
                    m(I(t), (function(t) {
                        e.removeEventListener(t, n, !1)
                    }))
                }

                function T(e, t) {
                    for (; e;) {
                        if (e == t) return !0;
                        e = e.parentNode
                    }
                    return !1
                }

                function k(e, t) {
                    return e.indexOf(t) > -1
                }

                function I(e) {
                    return e.trim().split(/\s+/g)
                }

                function M(e, t, n) {
                    if (e.indexOf && !n) return e.indexOf(t);
                    for (var i = 0; i < e.length;) {
                        if (n && e[i][n] == t || !n && e[i] === t) return i;
                        i++
                    }
                    return -1
                }

                function A(e) {
                    return Array.prototype.slice.call(e, 0)
                }

                function R(e, t, n) {
                    for (var i = [], s = [], r = 0; r < e.length;) {
                        var o = t ? e[r][t] : e[r];
                        M(s, o) < 0 && i.push(e[r]), s[r] = o, r++
                    }
                    return n && (i = t ? i.sort((function(e, n) {
                        return e[t] > n[t]
                    })) : i.sort()), i
                }

                function D(e, t) {
                    for (var n, i, s = t[0].toUpperCase() + t.slice(1), r = 0; r < u.length;) {
                        if ((i = (n = u[r]) ? n + s : t) in e) return i;
                        r++
                    }
                }
                var N = 1;

                function P(e) {
                    var t = e.ownerDocument || e;
                    return t.defaultView || t.parentWindow || s
                }
                var O = "ontouchstart" in s,
                    L = void 0 !== D(s, "PointerEvent"),
                    H = O && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                    F = ["x", "y"],
                    V = ["clientX", "clientY"];

                function j(e, t) {
                    var n = this;
                    this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                        C(e.options.enable, [e]) && n.handler(t)
                    }, this.init()
                }

                function B(e, t, n) {
                    var i = n.pointers.length,
                        s = n.changedPointers.length,
                        r = 1 & t && i - s == 0,
                        o = 12 & t && i - s == 0;
                    n.isFirst = !!r, n.isFinal = !!o, r && (e.session = {}), n.eventType = t,
                        function(e, t) {
                            var n = e.session,
                                i = t.pointers,
                                s = i.length;
                            n.firstInput || (n.firstInput = z(t)), s > 1 && !n.firstMultiple ? n.firstMultiple = z(t) : 1 === s && (n.firstMultiple = !1);
                            var r = n.firstInput,
                                o = n.firstMultiple,
                                a = o ? o.center : r.center,
                                l = t.center = $(i);
                            t.timeStamp = p(), t.deltaTime = t.timeStamp - r.timeStamp, t.angle = q(a, l), t.distance = Z(a, l),
                                function(e, t) {
                                    var n = t.center,
                                        i = e.offsetDelta || {},
                                        s = e.prevDelta || {},
                                        r = e.prevInput || {};
                                    1 !== t.eventType && 4 !== r.eventType || (s = e.prevDelta = {
                                        x: r.deltaX || 0,
                                        y: r.deltaY || 0
                                    }, i = e.offsetDelta = {
                                        x: n.x,
                                        y: n.y
                                    }), t.deltaX = s.x + (n.x - i.x), t.deltaY = s.y + (n.y - i.y)
                                }(n, t), t.offsetDirection = W(t.deltaX, t.deltaY);
                            var u, c, h = U(t.deltaTime, t.deltaX, t.deltaY);
                            t.overallVelocityX = h.x, t.overallVelocityY = h.y, t.overallVelocity = d(h.x) > d(h.y) ? h.x : h.y, t.scale = o ? (u = o.pointers, Z((c = i)[0], c[1], V) / Z(u[0], u[1], V)) : 1, t.rotation = o ? function(e, t) {
                                    return q(t[1], t[0], V) + q(e[1], e[0], V)
                                }(o.pointers, i) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length,
                                function(e, t) {
                                    var n, i, s, r, o = e.lastInterval || t,
                                        a = t.timeStamp - o.timeStamp;
                                    if (8 != t.eventType && (a > 25 || void 0 === o.velocity)) {
                                        var l = t.deltaX - o.deltaX,
                                            u = t.deltaY - o.deltaY,
                                            c = U(a, l, u);
                                        i = c.x, s = c.y, n = d(c.x) > d(c.y) ? c.x : c.y, r = W(l, u), e.lastInterval = t
                                    } else n = o.velocity, i = o.velocityX, s = o.velocityY, r = o.direction;
                                    t.velocity = n, t.velocityX = i, t.velocityY = s, t.direction = r
                                }(n, t);
                            var f = e.element;
                            T(t.srcEvent.target, f) && (f = t.srcEvent.target), t.target = f
                        }(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
                }

                function z(e) {
                    for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                        clientX: h(e.pointers[n].clientX),
                        clientY: h(e.pointers[n].clientY)
                    }, n++;
                    return {
                        timeStamp: p(),
                        pointers: t,
                        center: $(t),
                        deltaX: e.deltaX,
                        deltaY: e.deltaY
                    }
                }

                function $(e) {
                    var t = e.length;
                    if (1 === t) return {
                        x: h(e[0].clientX),
                        y: h(e[0].clientY)
                    };
                    for (var n = 0, i = 0, s = 0; s < t;) n += e[s].clientX, i += e[s].clientY, s++;
                    return {
                        x: h(n / t),
                        y: h(i / t)
                    }
                }

                function U(e, t, n) {
                    return {
                        x: t / e || 0,
                        y: n / e || 0
                    }
                }

                function W(e, t) {
                    return e === t ? 1 : d(e) >= d(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : 16
                }

                function Z(e, t, n) {
                    n || (n = F);
                    var i = t[n[0]] - e[n[0]],
                        s = t[n[1]] - e[n[1]];
                    return Math.sqrt(i * i + s * s)
                }

                function q(e, t, n) {
                    return n || (n = F), 180 * Math.atan2(t[n[1]] - e[n[1]], t[n[0]] - e[n[0]]) / Math.PI
                }
                j.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && S(this.element, this.evEl, this.domHandler), this.evTarget && S(this.target, this.evTarget, this.domHandler), this.evWin && S(P(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && E(this.element, this.evEl, this.domHandler), this.evTarget && E(this.target, this.evTarget, this.domHandler), this.evWin && E(P(this.element), this.evWin, this.domHandler)
                    }
                };
                var G = {
                    mousedown: 1,
                    mousemove: 2,
                    mouseup: 4
                };

                function Y() {
                    this.evEl = "mousedown", this.evWin = "mousemove mouseup", this.pressed = !1, j.apply(this, arguments)
                }
                y(Y, j, {
                    handler: function(e) {
                        var t = G[e.type];
                        1 & t && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = 4), this.pressed && (4 & t && (this.pressed = !1), this.callback(this.manager, t, {
                            pointers: [e],
                            changedPointers: [e],
                            pointerType: "mouse",
                            srcEvent: e
                        }))
                    }
                });
                var X = {
                        pointerdown: 1,
                        pointermove: 2,
                        pointerup: 4,
                        pointercancel: 8,
                        pointerout: 8
                    },
                    Q = {
                        2: "touch",
                        3: "pen",
                        4: "mouse",
                        5: "kinect"
                    },
                    K = "pointerdown",
                    J = "pointermove pointerup pointercancel";

                function ee() {
                    this.evEl = K, this.evWin = J, j.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                }
                s.MSPointerEvent && !s.PointerEvent && (K = "MSPointerDown", J = "MSPointerMove MSPointerUp MSPointerCancel"), y(ee, j, {
                    handler: function(e) {
                        var t = this.store,
                            n = !1,
                            i = e.type.toLowerCase().replace("ms", ""),
                            s = X[i],
                            r = Q[e.pointerType] || e.pointerType,
                            o = "touch" == r,
                            a = M(t, e.pointerId, "pointerId");
                        1 & s && (0 === e.button || o) ? a < 0 && (t.push(e), a = t.length - 1) : 12 & s && (n = !0), a < 0 || (t[a] = e, this.callback(this.manager, s, {
                            pointers: t,
                            changedPointers: [e],
                            pointerType: r,
                            srcEvent: e
                        }), n && t.splice(a, 1))
                    }
                });
                var te = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                };

                function ne() {
                    this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, j.apply(this, arguments)
                }

                function ie(e, t) {
                    var n = A(e.touches),
                        i = A(e.changedTouches);
                    return 12 & t && (n = R(n.concat(i), "identifier", !0)), [n, i]
                }
                y(ne, j, {
                    handler: function(e) {
                        var t = te[e.type];
                        if (1 === t && (this.started = !0), this.started) {
                            var n = ie.call(this, e, t);
                            12 & t && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                                pointers: n[0],
                                changedPointers: n[1],
                                pointerType: "touch",
                                srcEvent: e
                            })
                        }
                    }
                });
                var se = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                };

                function re() {
                    this.evTarget = "touchstart touchmove touchend touchcancel", this.targetIds = {}, j.apply(this, arguments)
                }

                function oe(e, t) {
                    var n = A(e.touches),
                        i = this.targetIds;
                    if (3 & t && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
                    var s, r, o = A(e.changedTouches),
                        a = [],
                        l = this.target;
                    if (r = n.filter((function(e) {
                            return T(e.target, l)
                        })), 1 === t)
                        for (s = 0; s < r.length;) i[r[s].identifier] = !0, s++;
                    for (s = 0; s < o.length;) i[o[s].identifier] && a.push(o[s]), 12 & t && delete i[o[s].identifier], s++;
                    return a.length ? [R(r.concat(a), "identifier", !0), a] : void 0
                }

                function ae() {
                    j.apply(this, arguments);
                    var e = b(this.handler, this);
                    this.touch = new re(this.manager, e), this.mouse = new Y(this.manager, e), this.primaryTouch = null, this.lastTouches = []
                }

                function le(e, t) {
                    1 & e ? (this.primaryTouch = t.changedPointers[0].identifier, ue.call(this, t)) : 12 & e && ue.call(this, t)
                }

                function ue(e) {
                    var t = e.changedPointers[0];
                    if (t.identifier === this.primaryTouch) {
                        var n = {
                            x: t.clientX,
                            y: t.clientY
                        };
                        this.lastTouches.push(n);
                        var i = this.lastTouches;
                        setTimeout((function() {
                            var e = i.indexOf(n);
                            e > -1 && i.splice(e, 1)
                        }), 2500)
                    }
                }

                function ce(e) {
                    for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                        var s = this.lastTouches[i],
                            r = Math.abs(t - s.x),
                            o = Math.abs(n - s.y);
                        if (r <= 25 && o <= 25) return !0
                    }
                    return !1
                }
                y(re, j, {
                    handler: function(e) {
                        var t = se[e.type],
                            n = oe.call(this, e, t);
                        n && this.callback(this.manager, t, {
                            pointers: n[0],
                            changedPointers: n[1],
                            pointerType: "touch",
                            srcEvent: e
                        })
                    }
                }), y(ae, j, {
                    handler: function(e, t, n) {
                        var i = "mouse" == n.pointerType;
                        if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                            if ("touch" == n.pointerType) le.call(this, t, n);
                            else if (i && ce.call(this, n)) return;
                            this.callback(e, t, n)
                        }
                    },
                    destroy: function() {
                        this.touch.destroy(), this.mouse.destroy()
                    }
                });
                var he = D(c.style, "touchAction"),
                    de = void 0 !== he,
                    pe = function() {
                        if (!de) return !1;
                        var e = {},
                            t = s.CSS && s.CSS.supports;
                        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(n) {
                            e[n] = !t || s.CSS.supports("touch-action", n)
                        })), e
                    }();

                function fe(e, t) {
                    this.manager = e, this.set(t)
                }

                function ge(e) {
                    this.options = l({}, this.defaults, e || {}), this.id = N++, this.manager = null, this.options.enable = x(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
                }

                function me(e) {
                    return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
                }

                function we(e) {
                    return 16 == e ? "down" : 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : ""
                }

                function ve(e, t) {
                    var n = t.manager;
                    return n ? n.get(e) : e
                }

                function _e() {
                    ge.apply(this, arguments)
                }

                function ye() {
                    _e.apply(this, arguments), this.pX = null, this.pY = null
                }

                function be() {
                    _e.apply(this, arguments)
                }

                function Ce() {
                    ge.apply(this, arguments), this._timer = null, this._input = null
                }

                function xe() {
                    _e.apply(this, arguments)
                }

                function Se() {
                    _e.apply(this, arguments)
                }

                function Ee() {
                    ge.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                }

                function Te(e, t) {
                    return (t = t || {}).recognizers = x(t.recognizers, Te.defaults.preset), new ke(e, t)
                }

                function ke(e, t) {
                    this.options = l({}, Te.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new(this.options.inputClass || (L ? ee : H ? re : O ? ae : Y))(this, B), this.touchAction = new fe(this, this.options.touchAction), Ie(this, !0), m(this.options.recognizers, (function(e) {
                        var t = this.add(new e[0](e[1]));
                        e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
                    }), this)
                }

                function Ie(e, t) {
                    var n, i = e.element;
                    i.style && (m(e.options.cssProps, (function(s, r) {
                        n = D(i.style, r), t ? (e.oldCssProps[n] = i.style[n], i.style[n] = s) : i.style[n] = e.oldCssProps[n] || ""
                    })), t || (e.oldCssProps = {}))
                }
                fe.prototype = {
                    set: function(e) {
                        "compute" == e && (e = this.compute()), de && this.manager.element.style && pe[e] && (this.manager.element.style[he] = e), this.actions = e.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var e = [];
                        return m(this.manager.recognizers, (function(t) {
                                C(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                            })),
                            function(e) {
                                if (k(e, "none")) return "none";
                                var t = k(e, "pan-x"),
                                    n = k(e, "pan-y");
                                return t && n ? "none" : t || n ? t ? "pan-x" : "pan-y" : k(e, "manipulation") ? "manipulation" : "auto"
                            }(e.join(" "))
                    },
                    preventDefaults: function(e) {
                        var t = e.srcEvent,
                            n = e.offsetDirection;
                        if (this.manager.session.prevented) t.preventDefault();
                        else {
                            var i = this.actions,
                                s = k(i, "none") && !pe.none,
                                r = k(i, "pan-y") && !pe["pan-y"],
                                o = k(i, "pan-x") && !pe["pan-x"];
                            if (s && 1 === e.pointers.length && e.distance < 2 && e.deltaTime < 250) return;
                            if (!o || !r) return s || r && 6 & n || o && 24 & n ? this.preventSrc(t) : void 0
                        }
                    },
                    preventSrc: function(e) {
                        this.manager.session.prevented = !0, e.preventDefault()
                    }
                }, ge.prototype = {
                    defaults: {},
                    set: function(e) {
                        return l(this.options, e), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function(e) {
                        if (g(e, "recognizeWith", this)) return this;
                        var t = this.simultaneous;
                        return t[(e = ve(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function(e) {
                        return g(e, "dropRecognizeWith", this) || (e = ve(e, this), delete this.simultaneous[e.id]), this
                    },
                    requireFailure: function(e) {
                        if (g(e, "requireFailure", this)) return this;
                        var t = this.requireFail;
                        return -1 === M(t, e = ve(e, this)) && (t.push(e), e.requireFailure(this)), this
                    },
                    dropRequireFailure: function(e) {
                        if (g(e, "dropRequireFailure", this)) return this;
                        e = ve(e, this);
                        var t = M(this.requireFail, e);
                        return t > -1 && this.requireFail.splice(t, 1), this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(e) {
                        return !!this.simultaneous[e.id]
                    },
                    emit: function(e) {
                        var t = this,
                            n = this.state;

                        function i(n) {
                            t.manager.emit(n, e)
                        }
                        n < 8 && i(t.options.event + me(n)), i(t.options.event), e.additionalEvent && i(e.additionalEvent), n >= 8 && i(t.options.event + me(n))
                    },
                    tryEmit: function(e) {
                        if (this.canEmit()) return this.emit(e);
                        this.state = 32
                    },
                    canEmit: function() {
                        for (var e = 0; e < this.requireFail.length;) {
                            if (!(33 & this.requireFail[e].state)) return !1;
                            e++
                        }
                        return !0
                    },
                    recognize: function(e) {
                        var t = l({}, e);
                        if (!C(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
                        56 & this.state && (this.state = 1), this.state = this.process(t), 30 & this.state && this.tryEmit(t)
                    },
                    process: function(e) {},
                    getTouchAction: function() {},
                    reset: function() {}
                }, y(_e, ge, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(e) {
                        var t = this.options.pointers;
                        return 0 === t || e.pointers.length === t
                    },
                    process: function(e) {
                        var t = this.state,
                            n = e.eventType,
                            i = 6 & t,
                            s = this.attrTest(e);
                        return i && (8 & n || !s) ? 16 | t : i || s ? 4 & n ? 8 | t : 2 & t ? 4 | t : 2 : 32
                    }
                }), y(ye, _e, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: 30
                    },
                    getTouchAction: function() {
                        var e = this.options.direction,
                            t = [];
                        return 6 & e && t.push("pan-y"), 24 & e && t.push("pan-x"), t
                    },
                    directionTest: function(e) {
                        var t = this.options,
                            n = !0,
                            i = e.distance,
                            s = e.direction,
                            r = e.deltaX,
                            o = e.deltaY;
                        return s & t.direction || (6 & t.direction ? (s = 0 === r ? 1 : r < 0 ? 2 : 4, n = r != this.pX, i = Math.abs(e.deltaX)) : (s = 0 === o ? 1 : o < 0 ? 8 : 16, n = o != this.pY, i = Math.abs(e.deltaY))), e.direction = s, n && i > t.threshold && s & t.direction
                    },
                    attrTest: function(e) {
                        return _e.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
                    },
                    emit: function(e) {
                        this.pX = e.deltaX, this.pY = e.deltaY;
                        var t = we(e.direction);
                        t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
                    }
                }), y(be, _e, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return ["none"]
                    },
                    attrTest: function(e) {
                        return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
                    },
                    emit: function(e) {
                        1 !== e.scale && (e.additionalEvent = this.options.event + (e.scale < 1 ? "in" : "out")), this._super.emit.call(this, e)
                    }
                }), y(Ce, ge, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 251,
                        threshold: 9
                    },
                    getTouchAction: function() {
                        return ["auto"]
                    },
                    process: function(e) {
                        var t = this.options,
                            n = e.pointers.length === t.pointers,
                            i = e.distance < t.threshold,
                            s = e.deltaTime > t.time;
                        if (this._input = e, !i || !n || 12 & e.eventType && !s) this.reset();
                        else if (1 & e.eventType) this.reset(), this._timer = f((function() {
                            this.state = 8, this.tryEmit()
                        }), t.time, this);
                        else if (4 & e.eventType) return 8;
                        return 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(e) {
                        8 === this.state && (e && 4 & e.eventType ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = p(), this.manager.emit(this.options.event, this._input)))
                    }
                }), y(xe, _e, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return ["none"]
                    },
                    attrTest: function(e) {
                        return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
                    }
                }), y(Se, _e, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .3,
                        direction: 30,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return ye.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(e) {
                        var t, n = this.options.direction;
                        return 30 & n ? t = e.overallVelocity : 6 & n ? t = e.overallVelocityX : 24 & n && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && d(t) > this.options.velocity && 4 & e.eventType
                    },
                    emit: function(e) {
                        var t = we(e.offsetDirection);
                        t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
                    }
                }), y(Ee, ge, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return ["manipulation"]
                    },
                    process: function(e) {
                        var t = this.options,
                            n = e.pointers.length === t.pointers,
                            i = e.distance < t.threshold,
                            s = e.deltaTime < t.time;
                        if (this.reset(), 1 & e.eventType && 0 === this.count) return this.failTimeout();
                        if (i && s && n) {
                            if (4 != e.eventType) return this.failTimeout();
                            var r = !this.pTime || e.timeStamp - this.pTime < t.interval,
                                o = !this.pCenter || Z(this.pCenter, e.center) < t.posThreshold;
                            if (this.pTime = e.timeStamp, this.pCenter = e.center, o && r ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = f((function() {
                                this.state = 8, this.tryEmit()
                            }), t.interval, this), 2) : 8
                        }
                        return 32
                    },
                    failTimeout: function() {
                        return this._timer = f((function() {
                            this.state = 32
                        }), this.options.interval, this), 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }), Te.VERSION = "2.0.7", Te.defaults = {
                    domEvents: !1,
                    touchAction: "compute",
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [
                        [xe, {
                            enable: !1
                        }],
                        [be, {
                                enable: !1
                            },
                            ["rotate"]
                        ],
                        [Se, {
                            direction: 6
                        }],
                        [ye, {
                                direction: 6
                            },
                            ["swipe"]
                        ],
                        [Ee],
                        [Ee, {
                                event: "doubletap",
                                taps: 2
                            },
                            ["tap"]
                        ],
                        [Ce]
                    ],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                }, ke.prototype = {
                    set: function(e) {
                        return l(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
                    },
                    stop: function(e) {
                        this.session.stopped = e ? 2 : 1
                    },
                    recognize: function(e) {
                        var t = this.session;
                        if (!t.stopped) {
                            var n;
                            this.touchAction.preventDefaults(e);
                            var i = this.recognizers,
                                s = t.curRecognizer;
                            (!s || s && 8 & s.state) && (s = t.curRecognizer = null);
                            for (var r = 0; r < i.length;) n = i[r], 2 === t.stopped || s && n != s && !n.canRecognizeWith(s) ? n.reset() : n.recognize(e), !s && 14 & n.state && (s = t.curRecognizer = n), r++
                        }
                    },
                    get: function(e) {
                        if (e instanceof ge) return e;
                        for (var t = this.recognizers, n = 0; n < t.length; n++)
                            if (t[n].options.event == e) return t[n];
                        return null
                    },
                    add: function(e) {
                        if (g(e, "add", this)) return this;
                        var t = this.get(e.options.event);
                        return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
                    },
                    remove: function(e) {
                        if (g(e, "remove", this)) return this;
                        if (e = this.get(e)) {
                            var t = this.recognizers,
                                n = M(t, e); - 1 !== n && (t.splice(n, 1), this.touchAction.update())
                        }
                        return this
                    },
                    on: function(e, t) {
                        if (void 0 !== e && void 0 !== t) {
                            var n = this.handlers;
                            return m(I(e), (function(e) {
                                n[e] = n[e] || [], n[e].push(t)
                            })), this
                        }
                    },
                    off: function(e, t) {
                        if (void 0 !== e) {
                            var n = this.handlers;
                            return m(I(e), (function(e) {
                                t ? n[e] && n[e].splice(M(n[e], t), 1) : delete n[e]
                            })), this
                        }
                    },
                    emit: function(e, t) {
                        this.options.domEvents && function(e, t) {
                            var n = r.createEvent("Event");
                            n.initEvent(e, !0, !0), n.gesture = t, t.target.dispatchEvent(n)
                        }(e, t);
                        var n = this.handlers[e] && this.handlers[e].slice();
                        if (n && n.length) {
                            t.type = e, t.preventDefault = function() {
                                t.srcEvent.preventDefault()
                            };
                            for (var i = 0; i < n.length;) n[i](t), i++
                        }
                    },
                    destroy: function() {
                        this.element && Ie(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                    }
                }, l(Te, {
                    INPUT_START: 1,
                    INPUT_MOVE: 2,
                    INPUT_END: 4,
                    INPUT_CANCEL: 8,
                    STATE_POSSIBLE: 1,
                    STATE_BEGAN: 2,
                    STATE_CHANGED: 4,
                    STATE_ENDED: 8,
                    STATE_RECOGNIZED: 8,
                    STATE_CANCELLED: 16,
                    STATE_FAILED: 32,
                    DIRECTION_NONE: 1,
                    DIRECTION_LEFT: 2,
                    DIRECTION_RIGHT: 4,
                    DIRECTION_UP: 8,
                    DIRECTION_DOWN: 16,
                    DIRECTION_HORIZONTAL: 6,
                    DIRECTION_VERTICAL: 24,
                    DIRECTION_ALL: 30,
                    Manager: ke,
                    Input: j,
                    TouchAction: fe,
                    TouchInput: re,
                    MouseInput: Y,
                    PointerEventInput: ee,
                    TouchMouseInput: ae,
                    SingleTouchInput: ne,
                    Recognizer: ge,
                    AttrRecognizer: _e,
                    Tap: Ee,
                    Pan: ye,
                    Swipe: Se,
                    Pinch: be,
                    Rotate: xe,
                    Press: Ce,
                    on: S,
                    off: E,
                    each: m,
                    merge: _,
                    extend: v,
                    assign: l,
                    inherit: y,
                    bindFn: b,
                    prefixed: D
                }), (void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer = Te, void 0 === (i = (function() {
                    return Te
                }).call(t, n, t, e)) || (e.exports = i)
            }(window, document)
        },
        YguL: function(e, t) {
            ! function(e) {
                e.ng = e.ng || {}, e.ng.common = e.ng.common || {}, e.ng.common.locales = e.ng.common.locales || {};
                const t = void 0;
                e.ng.common.locales.ru = ["ru", [
                        ["AM", "PM"], t, t
                    ], t, [
                        ["\u0432\u0441", "\u043f\u043d", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043f\u0442", "\u0441\u0431"], t, ["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435", "\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a", "\u0432\u0442\u043e\u0440\u043d\u0438\u043a", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0435\u0440\u0433", "\u043f\u044f\u0442\u043d\u0438\u0446\u0430", "\u0441\u0443\u0431\u0431\u043e\u0442\u0430"],
                        ["\u0432\u0441", "\u043f\u043d", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043f\u0442", "\u0441\u0431"]
                    ],
                    [
                        ["\u0412", "\u041f", "\u0412", "\u0421", "\u0427", "\u041f", "\u0421"],
                        ["\u0432\u0441", "\u043f\u043d", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043f\u0442", "\u0441\u0431"],
                        ["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435", "\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a", "\u0432\u0442\u043e\u0440\u043d\u0438\u043a", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0435\u0440\u0433", "\u043f\u044f\u0442\u043d\u0438\u0446\u0430", "\u0441\u0443\u0431\u0431\u043e\u0442\u0430"],
                        ["\u0432\u0441", "\u043f\u043d", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043f\u0442", "\u0441\u0431"]
                    ],
                    [
                        ["\u042f", "\u0424", "\u041c", "\u0410", "\u041c", "\u0418", "\u0418", "\u0410", "\u0421", "\u041e", "\u041d", "\u0414"],
                        ["\u044f\u043d\u0432.", "\u0444\u0435\u0432\u0440.", "\u043c\u0430\u0440.", "\u0430\u043f\u0440.", "\u043c\u0430\u044f", "\u0438\u044e\u043d.", "\u0438\u044e\u043b.", "\u0430\u0432\u0433.", "\u0441\u0435\u043d\u0442.", "\u043e\u043a\u0442.", "\u043d\u043e\u044f\u0431.", "\u0434\u0435\u043a."],
                        ["\u044f\u043d\u0432\u0430\u0440\u044f", "\u0444\u0435\u0432\u0440\u0430\u043b\u044f", "\u043c\u0430\u0440\u0442\u0430", "\u0430\u043f\u0440\u0435\u043b\u044f", "\u043c\u0430\u044f", "\u0438\u044e\u043d\u044f", "\u0438\u044e\u043b\u044f", "\u0430\u0432\u0433\u0443\u0441\u0442\u0430", "\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f", "\u043e\u043a\u0442\u044f\u0431\u0440\u044f", "\u043d\u043e\u044f\u0431\u0440\u044f", "\u0434\u0435\u043a\u0430\u0431\u0440\u044f"]
                    ],
                    [
                        ["\u042f", "\u0424", "\u041c", "\u0410", "\u041c", "\u0418", "\u0418", "\u0410", "\u0421", "\u041e", "\u041d", "\u0414"],
                        ["\u044f\u043d\u0432.", "\u0444\u0435\u0432\u0440.", "\u043c\u0430\u0440\u0442", "\u0430\u043f\u0440.", "\u043c\u0430\u0439", "\u0438\u044e\u043d\u044c", "\u0438\u044e\u043b\u044c", "\u0430\u0432\u0433.", "\u0441\u0435\u043d\u0442.", "\u043e\u043a\u0442.", "\u043d\u043e\u044f\u0431.", "\u0434\u0435\u043a."],
                        ["\u044f\u043d\u0432\u0430\u0440\u044c", "\u0444\u0435\u0432\u0440\u0430\u043b\u044c", "\u043c\u0430\u0440\u0442", "\u0430\u043f\u0440\u0435\u043b\u044c", "\u043c\u0430\u0439", "\u0438\u044e\u043d\u044c", "\u0438\u044e\u043b\u044c", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c", "\u043e\u043a\u0442\u044f\u0431\u0440\u044c", "\u043d\u043e\u044f\u0431\u0440\u044c", "\u0434\u0435\u043a\u0430\u0431\u0440\u044c"]
                    ],
                    [
                        ["\u0434\u043e \u043d.\u044d.", "\u043d.\u044d."],
                        ["\u0434\u043e \u043d. \u044d.", "\u043d. \u044d."],
                        ["\u0434\u043e \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043e\u0432\u0430", "\u043e\u0442 \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043e\u0432\u0430"]
                    ], 1, [6, 0],
                    ["dd.MM.y", "d MMM y '\u0433'.", "d MMMM y '\u0433'.", "EEEE, d MMMM y '\u0433'."],
                    ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"],
                    ["{1}, {0}", t, t, t],
                    [",", "\xa0", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "\u043d\u0435\xa0\u0447\u0438\u0441\u043b\u043e", ":"],
                    ["#,##0.###", "#,##0\xa0%", "#,##0.00\xa0\xa4", "#E0"], "RUB", "\u20bd", "\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c", {
                        GEL: [t, "\u10da"],
                        RON: [t, "L"],
                        RUB: ["\u20bd"],
                        RUR: ["\u0440."],
                        THB: ["\u0e3f"],
                        TMT: ["\u0422\u041c\u0422"],
                        TWD: ["NT$"],
                        UAH: ["\u20b4"],
                        XXX: ["XXXX"]
                    }, "ltr",
                    function(e) {
                        let t = Math.floor(Math.abs(e)),
                            n = e.toString().replace(/^[^.]*\.?/, "").length;
                        return 0 === n && t % 10 == 1 && t % 100 != 11 ? 1 : 0 === n && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && !(t % 100 >= 12 && t % 100 <= 14) ? 3 : 0 === n && t % 10 == 0 || 0 === n && t % 10 === Math.floor(t % 10) && t % 10 >= 5 && t % 10 <= 9 || 0 === n && t % 100 === Math.floor(t % 100) && t % 100 >= 11 && t % 100 <= 14 ? 4 : 5
                    },
                    [
                        [
                            ["\u043f\u043e\u043b\u043d.", "\u043f\u043e\u043b\u0434.", "\u0443\u0442\u0440\u0430", "\u0434\u043d\u044f", "\u0432\u0435\u0447.", "\u043d\u043e\u0447\u0438"],
                            ["\u043f\u043e\u043b\u043d.", "\u043f\u043e\u043b\u0434.", "\u0443\u0442\u0440\u0430", "\u0434\u043d\u044f", "\u0432\u0435\u0447\u0435\u0440\u0430", "\u043d\u043e\u0447\u0438"],
                            ["\u043f\u043e\u043b\u043d\u043e\u0447\u044c", "\u043f\u043e\u043b\u0434\u0435\u043d\u044c", "\u0443\u0442\u0440\u0430", "\u0434\u043d\u044f", "\u0432\u0435\u0447\u0435\u0440\u0430", "\u043d\u043e\u0447\u0438"]
                        ],
                        [
                            ["\u043f\u043e\u043b\u043d.", "\u043f\u043e\u043b\u0434.", "\u0443\u0442\u0440\u043e", "\u0434\u0435\u043d\u044c", "\u0432\u0435\u0447.", "\u043d\u043e\u0447\u044c"], t, ["\u043f\u043e\u043b\u043d\u043e\u0447\u044c", "\u043f\u043e\u043b\u0434\u0435\u043d\u044c", "\u0443\u0442\u0440\u043e", "\u0434\u0435\u043d\u044c", "\u0432\u0435\u0447\u0435\u0440", "\u043d\u043e\u0447\u044c"]
                        ],
                        ["00:00", "12:00", ["04:00", "12:00"],
                            ["12:00", "18:00"],
                            ["18:00", "24:00"],
                            ["00:00", "04:00"]
                        ]
                    ]
                ]
            }("undefined" != typeof globalThis && globalThis || "undefined" != typeof global && global || "undefined" != typeof window && window)
        },
        ZM9f: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        c9FL: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        eAG3: function(e, t, n) {
            "use strict";

            function i(e) {
                return "function" == typeof e
            }
            n.r(t);
            let s = !1;
            const r = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(e) {
                    if (e) {
                        const e = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + e.stack)
                    } else s && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    s = e
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return s
                }
            };

            function o(e) {
                setTimeout(() => {
                    throw e
                }, 0)
            }
            const a = {
                    closed: !0,
                    next(e) {},
                    error(e) {
                        if (r.useDeprecatedSynchronousErrorHandling) throw e;
                        o(e)
                    },
                    complete() {}
                },
                l = (() => Array.isArray || (e => e && "number" == typeof e.length))();

            function u(e) {
                return null !== e && "object" == typeof e
            }
            const c = (() => {
                function e(e) {
                    return Error.call(this), this.message = e ? `${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = e, this
                }
                return e.prototype = Object.create(Error.prototype), e
            })();
            let h = (() => {
                class e {
                    constructor(e) {
                        this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e)
                    }
                    unsubscribe() {
                        let t;
                        if (this.closed) return;
                        let {
                            _parentOrParents: n,
                            _ctorUnsubscribe: s,
                            _unsubscribe: r,
                            _subscriptions: o
                        } = this;
                        if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof e) n.remove(this);
                        else if (null !== n)
                            for (let e = 0; e < n.length; ++e) n[e].remove(this);
                        if (i(r)) {
                            s && (this._unsubscribe = void 0);
                            try {
                                r.call(this)
                            } catch (a) {
                                t = a instanceof c ? d(a.errors) : [a]
                            }
                        }
                        if (l(o)) {
                            let e = -1,
                                n = o.length;
                            for (; ++e < n;) {
                                const n = o[e];
                                if (u(n)) try {
                                    n.unsubscribe()
                                } catch (a) {
                                    t = t || [], a instanceof c ? t = t.concat(d(a.errors)) : t.push(a)
                                }
                            }
                        }
                        if (t) throw new c(t)
                    }
                    add(t) {
                        let n = t;
                        if (!t) return e.EMPTY;
                        switch (typeof t) {
                            case "function":
                                n = new e(t);
                            case "object":
                                if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if (!(n instanceof e)) {
                                    const t = n;
                                    n = new e, n._subscriptions = [t]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + t + " added to Subscription.")
                        }
                        let {
                            _parentOrParents: i
                        } = n;
                        if (null === i) n._parentOrParents = this;
                        else if (i instanceof e) {
                            if (i === this) return n;
                            n._parentOrParents = [i, this]
                        } else {
                            if (-1 !== i.indexOf(this)) return n;
                            i.push(this)
                        }
                        const s = this._subscriptions;
                        return null === s ? this._subscriptions = [n] : s.push(n), n
                    }
                    remove(e) {
                        const t = this._subscriptions;
                        if (t) {
                            const n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                        }
                    }
                }
                return e.EMPTY = function(e) {
                    return e.closed = !0, e
                }(new e), e
            })();

            function d(e) {
                return e.reduce((e, t) => e.concat(t instanceof c ? t.errors : t), [])
            }
            const p = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())();
            class f extends h {
                constructor(e, t, n) {
                    switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = a;
                            break;
                        case 1:
                            if (!e) {
                                this.destination = a;
                                break
                            }
                            if ("object" == typeof e) {
                                e instanceof f ? (this.syncErrorThrowable = e.syncErrorThrowable, this.destination = e, e.add(this)) : (this.syncErrorThrowable = !0, this.destination = new g(this, e));
                                break
                            }
                        default:
                            this.syncErrorThrowable = !0, this.destination = new g(this, e, t, n)
                    }
                } [p]() {
                    return this
                }
                static create(e, t, n) {
                    const i = new f(e, t, n);
                    return i.syncErrorThrowable = !1, i
                }
                next(e) {
                    this.isStopped || this._next(e)
                }
                error(e) {
                    this.isStopped || (this.isStopped = !0, this._error(e))
                }
                complete() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }
                unsubscribe() {
                    this.closed || (this.isStopped = !0, super.unsubscribe())
                }
                _next(e) {
                    this.destination.next(e)
                }
                _error(e) {
                    this.destination.error(e), this.unsubscribe()
                }
                _complete() {
                    this.destination.complete(), this.unsubscribe()
                }
                _unsubscribeAndRecycle() {
                    const {
                        _parentOrParents: e
                    } = this;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
                }
            }
            class g extends f {
                constructor(e, t, n, s) {
                    let r;
                    super(), this._parentSubscriber = e;
                    let o = this;
                    i(t) ? r = t : t && (r = t.next, n = t.error, s = t.complete, t !== a && (o = Object.create(t), i(o.unsubscribe) && this.add(o.unsubscribe.bind(o)), o.unsubscribe = this.unsubscribe.bind(this))), this._context = o, this._next = r, this._error = n, this._complete = s
                }
                next(e) {
                    if (!this.isStopped && this._next) {
                        const {
                            _parentSubscriber: t
                        } = this;
                        r.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                    }
                }
                error(e) {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: t
                        } = this, {
                            useDeprecatedSynchronousErrorHandling: n
                        } = r;
                        if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                        else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : o(e), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), n) throw e;
                            o(e)
                        }
                    }
                }
                complete() {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: e
                        } = this;
                        if (this._complete) {
                            const t = () => this._complete.call(this._context);
                            r.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, t), this.unsubscribe()) : (this.__tryOrUnsub(t), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }
                __tryOrUnsub(e, t) {
                    try {
                        e.call(this._context, t)
                    } catch (n) {
                        if (this.unsubscribe(), r.useDeprecatedSynchronousErrorHandling) throw n;
                        o(n)
                    }
                }
                __tryOrSetError(e, t, n) {
                    if (!r.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        t.call(this._context, n)
                    } catch (i) {
                        return r.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = i, e.syncErrorThrown = !0, !0) : (o(i), !0)
                    }
                    return !1
                }
                _unsubscribe() {
                    const {
                        _parentSubscriber: e
                    } = this;
                    this._context = null, this._parentSubscriber = null, e.unsubscribe()
                }
            }
            const m = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")();

            function w(e) {
                return e
            }
            let v = (() => {
                class e {
                    constructor(e) {
                        this._isScalar = !1, e && (this._subscribe = e)
                    }
                    lift(t) {
                        const n = new e;
                        return n.source = this, n.operator = t, n
                    }
                    subscribe(e, t, n) {
                        const {
                            operator: i
                        } = this, s = function(e, t, n) {
                            if (e) {
                                if (e instanceof f) return e;
                                if (e[p]) return e[p]()
                            }
                            return e || t || n ? new f(e, t, n) : new f(a)
                        }(e, t, n);
                        if (s.add(i ? i.call(s, this.source) : this.source || r.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), r.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
                        return s
                    }
                    _trySubscribe(e) {
                        try {
                            return this._subscribe(e)
                        } catch (t) {
                            r.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t),
                                function(e) {
                                    for (; e;) {
                                        const {
                                            closed: t,
                                            destination: n,
                                            isStopped: i
                                        } = e;
                                        if (t || i) return !1;
                                        e = n && n instanceof f ? n : null
                                    }
                                    return !0
                                }(e) ? e.error(t) : console.warn(t)
                        }
                    }
                    forEach(e, t) {
                        return new(t = _(t))((t, n) => {
                            let i;
                            i = this.subscribe(t => {
                                try {
                                    e(t)
                                } catch (s) {
                                    n(s), i && i.unsubscribe()
                                }
                            }, n, t)
                        })
                    }
                    _subscribe(e) {
                        const {
                            source: t
                        } = this;
                        return t && t.subscribe(e)
                    } [m]() {
                        return this
                    }
                    pipe(...e) {
                        return 0 === e.length ? this : (0 === (t = e).length ? w : 1 === t.length ? t[0] : function(e) {
                            return t.reduce((e, t) => t(e), e)
                        })(this);
                        var t
                    }
                    toPromise(e) {
                        return new(e = _(e))((e, t) => {
                            let n;
                            this.subscribe(e => n = e, e => t(e), () => e(n))
                        })
                    }
                }
                return e.create = t => new e(t), e
            })();

            function _(e) {
                if (e || (e = r.Promise || Promise), !e) throw new Error("no Promise impl found");
                return e
            }
            const y = (() => {
                function e() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return e.prototype = Object.create(Error.prototype), e
            })();
            class b extends h {
                constructor(e, t) {
                    super(), this.subject = e, this.subscriber = t, this.closed = !1
                }
                unsubscribe() {
                    if (this.closed) return;
                    this.closed = !0;
                    const e = this.subject,
                        t = e.observers;
                    if (this.subject = null, !t || 0 === t.length || e.isStopped || e.closed) return;
                    const n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1)
                }
            }
            class C extends f {
                constructor(e) {
                    super(e), this.destination = e
                }
            }
            let x = (() => {
                class e extends v {
                    constructor() {
                        super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                    } [p]() {
                        return new C(this)
                    }
                    lift(e) {
                        const t = new S(this, this);
                        return t.operator = e, t
                    }
                    next(e) {
                        if (this.closed) throw new y;
                        if (!this.isStopped) {
                            const {
                                observers: t
                            } = this, n = t.length, i = t.slice();
                            for (let s = 0; s < n; s++) i[s].next(e)
                        }
                    }
                    error(e) {
                        if (this.closed) throw new y;
                        this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                        const {
                            observers: t
                        } = this, n = t.length, i = t.slice();
                        for (let s = 0; s < n; s++) i[s].error(e);
                        this.observers.length = 0
                    }
                    complete() {
                        if (this.closed) throw new y;
                        this.isStopped = !0;
                        const {
                            observers: e
                        } = this, t = e.length, n = e.slice();
                        for (let i = 0; i < t; i++) n[i].complete();
                        this.observers.length = 0
                    }
                    unsubscribe() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }
                    _trySubscribe(e) {
                        if (this.closed) throw new y;
                        return super._trySubscribe(e)
                    }
                    _subscribe(e) {
                        if (this.closed) throw new y;
                        return this.hasError ? (e.error(this.thrownError), h.EMPTY) : this.isStopped ? (e.complete(), h.EMPTY) : (this.observers.push(e), new b(this, e))
                    }
                    asObservable() {
                        const e = new v;
                        return e.source = this, e
                    }
                }
                return e.create = (e, t) => new S(e, t), e
            })();
            class S extends x {
                constructor(e, t) {
                    super(), this.destination = e, this.source = t
                }
                next(e) {
                    const {
                        destination: t
                    } = this;
                    t && t.next && t.next(e)
                }
                error(e) {
                    const {
                        destination: t
                    } = this;
                    t && t.error && this.destination.error(e)
                }
                complete() {
                    const {
                        destination: e
                    } = this;
                    e && e.complete && this.destination.complete()
                }
                _subscribe(e) {
                    const {
                        source: t
                    } = this;
                    return t ? this.source.subscribe(e) : h.EMPTY
                }
            }

            function E(e) {
                return e && "function" == typeof e.schedule
            }

            function T(e, t) {
                return function(n) {
                    if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new k(e, t))
                }
            }
            class k {
                constructor(e, t) {
                    this.project = e, this.thisArg = t
                }
                call(e, t) {
                    return t.subscribe(new I(e, this.project, this.thisArg))
                }
            }
            class I extends f {
                constructor(e, t, n) {
                    super(e), this.project = t, this.count = 0, this.thisArg = n || this
                }
                _next(e) {
                    let t;
                    try {
                        t = this.project.call(this.thisArg, e, this.count++)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(t)
                }
            }
            const M = e => t => {
                for (let n = 0, i = e.length; n < i && !t.closed; n++) t.next(e[n]);
                t.complete()
            };

            function A() {
                return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
            }
            const R = A(),
                D = e => e && "number" == typeof e.length && "function" != typeof e;

            function N(e) {
                return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
            }
            const P = e => {
                if (e && "function" == typeof e[m]) return i = e, e => {
                    const t = i[m]();
                    if ("function" != typeof t.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return t.subscribe(e)
                };
                if (D(e)) return M(e);
                if (N(e)) return n = e, e => (n.then(t => {
                    e.closed || (e.next(t), e.complete())
                }, t => e.error(t)).then(null, o), e);
                if (e && "function" == typeof e[R]) return t = e, e => {
                    const n = t[R]();
                    for (;;) {
                        let t;
                        try {
                            t = n.next()
                        } catch (i) {
                            return e.error(i), e
                        }
                        if (t.done) {
                            e.complete();
                            break
                        }
                        if (e.next(t.value), e.closed) break
                    }
                    return "function" == typeof n.return && e.add(() => {
                        n.return && n.return()
                    }), e
                };
                {
                    const t = u(e) ? "an invalid object" : `'${e}'`;
                    throw new TypeError(`You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)
                }
                var t, n, i
            };

            function O(e, t) {
                return new v(n => {
                    const i = new h;
                    let s = 0;
                    return i.add(t.schedule((function() {
                        s !== e.length ? (n.next(e[s++]), n.closed || i.add(this.schedule())) : n.complete()
                    }))), i
                })
            }

            function L(e, t) {
                return t ? function(e, t) {
                    if (null != e) {
                        if (function(e) {
                                return e && "function" == typeof e[m]
                            }(e)) return function(e, t) {
                            return new v(n => {
                                const i = new h;
                                return i.add(t.schedule(() => {
                                    const s = e[m]();
                                    i.add(s.subscribe({
                                        next(e) {
                                            i.add(t.schedule(() => n.next(e)))
                                        },
                                        error(e) {
                                            i.add(t.schedule(() => n.error(e)))
                                        },
                                        complete() {
                                            i.add(t.schedule(() => n.complete()))
                                        }
                                    }))
                                })), i
                            })
                        }(e, t);
                        if (N(e)) return function(e, t) {
                            return new v(n => {
                                const i = new h;
                                return i.add(t.schedule(() => e.then(e => {
                                    i.add(t.schedule(() => {
                                        n.next(e), i.add(t.schedule(() => n.complete()))
                                    }))
                                }, e => {
                                    i.add(t.schedule(() => n.error(e)))
                                }))), i
                            })
                        }(e, t);
                        if (D(e)) return O(e, t);
                        if (function(e) {
                                return e && "function" == typeof e[R]
                            }(e) || "string" == typeof e) return function(e, t) {
                            if (!e) throw new Error("Iterable cannot be null");
                            return new v(n => {
                                const i = new h;
                                let s;
                                return i.add(() => {
                                    s && "function" == typeof s.return && s.return()
                                }), i.add(t.schedule(() => {
                                    s = e[R](), i.add(t.schedule((function() {
                                        if (n.closed) return;
                                        let e, t;
                                        try {
                                            const n = s.next();
                                            e = n.value, t = n.done
                                        } catch (i) {
                                            return void n.error(i)
                                        }
                                        t ? n.complete() : (n.next(e), this.schedule())
                                    })))
                                })), i
                            })
                        }(e, t)
                    }
                    throw new TypeError((null !== e && typeof e || e) + " is not observable")
                }(e, t) : e instanceof v ? e : new v(P(e))
            }
            class H extends f {
                constructor(e) {
                    super(), this.parent = e
                }
                _next(e) {
                    this.parent.notifyNext(e)
                }
                _error(e) {
                    this.parent.notifyError(e), this.unsubscribe()
                }
                _complete() {
                    this.parent.notifyComplete(), this.unsubscribe()
                }
            }
            class F extends f {
                notifyNext(e) {
                    this.destination.next(e)
                }
                notifyError(e) {
                    this.destination.error(e)
                }
                notifyComplete() {
                    this.destination.complete()
                }
            }

            function V(e, t) {
                if (t.closed) return;
                if (e instanceof v) return e.subscribe(t);
                let n;
                try {
                    n = P(e)(t)
                } catch (i) {
                    t.error(i)
                }
                return n
            }

            function j(e, t, n = Number.POSITIVE_INFINITY) {
                return "function" == typeof t ? i => i.pipe(j((n, i) => L(e(n, i)).pipe(T((e, s) => t(n, e, i, s))), n)) : ("number" == typeof t && (n = t), t => t.lift(new B(e, n)))
            }
            class B {
                constructor(e, t = Number.POSITIVE_INFINITY) {
                    this.project = e, this.concurrent = t
                }
                call(e, t) {
                    return t.subscribe(new z(e, this.project, this.concurrent))
                }
            }
            class z extends F {
                constructor(e, t, n = Number.POSITIVE_INFINITY) {
                    super(e), this.project = t, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                }
                _next(e) {
                    this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
                }
                _tryNext(e) {
                    let t;
                    const n = this.index++;
                    try {
                        t = this.project(e, n)
                    } catch (i) {
                        return void this.destination.error(i)
                    }
                    this.active++, this._innerSub(t)
                }
                _innerSub(e) {
                    const t = new H(this),
                        n = this.destination;
                    n.add(t);
                    const i = V(e, t);
                    i !== t && n.add(i)
                }
                _complete() {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                }
                notifyNext(e) {
                    this.destination.next(e)
                }
                notifyComplete() {
                    const e = this.buffer;
                    this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }
            }

            function $(e = Number.POSITIVE_INFINITY) {
                return j(w, e)
            }

            function U(e, t) {
                return t ? O(e, t) : new v(M(e))
            }

            function W(...e) {
                let t = Number.POSITIVE_INFINITY,
                    n = null,
                    i = e[e.length - 1];
                return E(i) ? (n = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (t = e.pop())) : "number" == typeof i && (t = e.pop()), null === n && 1 === e.length && e[0] instanceof v ? e[0] : $(t)(U(e, n))
            }

            function Z() {
                return function(e) {
                    return e.lift(new q(e))
                }
            }
            class q {
                constructor(e) {
                    this.connectable = e
                }
                call(e, t) {
                    const {
                        connectable: n
                    } = this;
                    n._refCount++;
                    const i = new G(e, n),
                        s = t.subscribe(i);
                    return i.closed || (i.connection = n.connect()), s
                }
            }
            class G extends f {
                constructor(e, t) {
                    super(e), this.connectable = t
                }
                _unsubscribe() {
                    const {
                        connectable: e
                    } = this;
                    if (!e) return void(this.connection = null);
                    this.connectable = null;
                    const t = e._refCount;
                    if (t <= 0) return void(this.connection = null);
                    if (e._refCount = t - 1, t > 1) return void(this.connection = null);
                    const {
                        connection: n
                    } = this, i = e._connection;
                    this.connection = null, !i || n && i !== n || i.unsubscribe()
                }
            }
            class Y extends v {
                constructor(e, t) {
                    super(), this.source = e, this.subjectFactory = t, this._refCount = 0, this._isComplete = !1
                }
                _subscribe(e) {
                    return this.getSubject().subscribe(e)
                }
                getSubject() {
                    const e = this._subject;
                    return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
                }
                connect() {
                    let e = this._connection;
                    return e || (this._isComplete = !1, e = this._connection = new h, e.add(this.source.subscribe(new Q(this.getSubject(), this))), e.closed && (this._connection = null, e = h.EMPTY)), e
                }
                refCount() {
                    return Z()(this)
                }
            }
            const X = (() => {
                const e = Y.prototype;
                return {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: e._subscribe
                    },
                    _isComplete: {
                        value: e._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: e.getSubject
                    },
                    connect: {
                        value: e.connect
                    },
                    refCount: {
                        value: e.refCount
                    }
                }
            })();
            class Q extends C {
                constructor(e, t) {
                    super(e), this.connectable = t
                }
                _error(e) {
                    this._unsubscribe(), super._error(e)
                }
                _complete() {
                    this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
                }
                _unsubscribe() {
                    const e = this.connectable;
                    if (e) {
                        this.connectable = null;
                        const t = e._connection;
                        e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                    }
                }
            }

            function K() {
                return new x
            }

            function J(e) {
                return {
                    toString: e
                }.toString()
            }

            function ee(e, t, n) {
                return J(() => {
                    const i = function(e) {
                        return function(...t) {
                            if (e) {
                                const n = e(...t);
                                for (const e in n) this[e] = n[e]
                            }
                        }
                    }(t);

                    function s(...e) {
                        if (this instanceof s) return i.apply(this, e), this;
                        const t = new s(...e);
                        return n.annotation = t, n;

                        function n(e, n, i) {
                            const s = e.hasOwnProperty("__parameters__") ? e.__parameters__ : Object.defineProperty(e, "__parameters__", {
                                value: []
                            }).__parameters__;
                            for (; s.length <= i;) s.push(null);
                            return (s[i] = s[i] || []).push(t), e
                        }
                    }
                    return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s
                })
            }
            const te = ee("Inject", e => ({
                    token: e
                })),
                ne = ee("Optional"),
                ie = ee("Self"),
                se = ee("SkipSelf");
            var re = function(e) {
                return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e
            }({});

            function oe(e) {
                for (let t in e)
                    if (e[t] === oe) return t;
                throw Error("Could not find renamed property on target object.")
            }

            function ae(e, t) {
                for (const n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
            }

            function le(e) {
                return {
                    token: e.token,
                    providedIn: e.providedIn || null,
                    factory: e.factory,
                    value: void 0
                }
            }

            function ue(e) {
                return {
                    factory: e.factory,
                    providers: e.providers || [],
                    imports: e.imports || []
                }
            }

            function ce(e) {
                return he(e, e[pe]) || he(e, e[me])
            }

            function he(e, t) {
                return t && t.token === e ? t : null
            }

            function de(e) {
                return e && (e.hasOwnProperty(fe) || e.hasOwnProperty(we)) ? e[fe] : null
            }
            const pe = oe({
                    \u0275prov: oe
                }),
                fe = oe({
                    \u0275inj: oe
                }),
                ge = oe({
                    \u0275provFallback: oe
                }),
                me = oe({
                    ngInjectableDef: oe
                }),
                we = oe({
                    ngInjectorDef: oe
                });

            function ve(e) {
                if ("string" == typeof e) return e;
                if (Array.isArray(e)) return "[" + e.map(ve).join(", ") + "]";
                if (null == e) return "" + e;
                if (e.overriddenName) return "" + e.overriddenName;
                if (e.name) return "" + e.name;
                const t = e.toString();
                if (null == t) return "" + t;
                const n = t.indexOf("\n");
                return -1 === n ? t : t.substring(0, n)
            }

            function _e(e, t) {
                return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
            }
            const ye = oe({
                __forward_ref__: oe
            });

            function be(e) {
                return e.__forward_ref__ = be, e.toString = function() {
                    return ve(this())
                }, e
            }

            function Ce(e) {
                return "function" == typeof(t = e) && t.hasOwnProperty(ye) && t.__forward_ref__ === be ? e() : e;
                var t
            }
            const xe = "undefined" != typeof globalThis && globalThis,
                Se = "undefined" != typeof window && window,
                Ee = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                Te = "undefined" != typeof global && global,
                ke = xe || Te || Se || Ee,
                Ie = oe({
                    \u0275cmp: oe
                }),
                Me = oe({
                    \u0275dir: oe
                }),
                Ae = oe({
                    \u0275pipe: oe
                }),
                Re = oe({
                    \u0275mod: oe
                }),
                De = oe({
                    \u0275loc: oe
                }),
                Ne = oe({
                    \u0275fac: oe
                }),
                Pe = oe({
                    __NG_ELEMENT_ID__: oe
                });
            class Oe {
                constructor(e, t) {
                    this._desc = e, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof t ? this.__NG_ELEMENT_ID__ = t : void 0 !== t && (this.\u0275prov = le({
                        token: this,
                        providedIn: t.providedIn || "root",
                        factory: t.factory
                    }))
                }
                toString() {
                    return "InjectionToken " + this._desc
                }
            }
            const Le = new Oe("INJECTOR", -1),
                He = {},
                Fe = /\n/gm,
                Ve = oe({
                    provide: String,
                    useValue: oe
                });
            let je, Be = void 0;

            function ze(e) {
                const t = Be;
                return Be = e, t
            }

            function $e(e) {
                const t = je;
                return je = e, t
            }

            function Ue(e, t = re.Default) {
                if (void 0 === Be) throw new Error("inject() must be called from an injection context");
                return null === Be ? Ze(e, void 0, t) : Be.get(e, t & re.Optional ? null : void 0, t)
            }

            function We(e, t = re.Default) {
                return (je || Ue)(Ce(e), t)
            }

            function Ze(e, t, n) {
                const i = ce(e);
                if (i && "root" == i.providedIn) return void 0 === i.value ? i.value = i.factory() : i.value;
                if (n & re.Optional) return null;
                if (void 0 !== t) return t;
                throw new Error(`Injector: NOT_FOUND [${ve(e)}]`)
            }

            function qe(e) {
                const t = [];
                for (let n = 0; n < e.length; n++) {
                    const i = Ce(e[n]);
                    if (Array.isArray(i)) {
                        if (0 === i.length) throw new Error("Arguments array must have arguments.");
                        let e = void 0,
                            n = re.Default;
                        for (let t = 0; t < i.length; t++) {
                            const s = i[t];
                            s instanceof ne || "Optional" === s.ngMetadataName || s === ne ? n |= re.Optional : s instanceof se || "SkipSelf" === s.ngMetadataName || s === se ? n |= re.SkipSelf : s instanceof ie || "Self" === s.ngMetadataName || s === ie ? n |= re.Self : e = s instanceof te || s === te ? s.token : s
                        }
                        t.push(We(e, n))
                    } else t.push(We(i))
                }
                return t
            }
            class Ge {
                get(e, t = He) {
                    if (t === He) {
                        const t = new Error(`NullInjectorError: No provider for ${ve(e)}!`);
                        throw t.name = "NullInjectorError", t
                    }
                    return t
                }
            }
            class Ye {}

            function Xe(e, t) {
                e.forEach(e => Array.isArray(e) ? Xe(e, t) : t(e))
            }

            function Qe(e, t, n) {
                t >= e.length ? e.push(n) : e.splice(t, 0, n)
            }

            function Ke(e, t) {
                return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
            }

            function Je(e, t) {
                const n = [];
                for (let i = 0; i < e; i++) n.push(t);
                return n
            }

            function et(e, t, n) {
                let i = nt(e, t);
                return i >= 0 ? e[1 | i] = n : (i = ~i, function(e, t, n, i) {
                    let s = e.length;
                    if (s == t) e.push(n, i);
                    else if (1 === s) e.push(i, e[0]), e[0] = n;
                    else {
                        for (s--, e.push(e[s - 1], e[s]); s > t;) e[s] = e[s - 2], s--;
                        e[t] = n, e[t + 1] = i
                    }
                }(e, i, t, n)), i
            }

            function tt(e, t) {
                const n = nt(e, t);
                if (n >= 0) return e[1 | n]
            }

            function nt(e, t) {
                return function(e, t, n) {
                    let i = 0,
                        s = e.length >> 1;
                    for (; s !== i;) {
                        const n = i + (s - i >> 1),
                            r = e[n << 1];
                        if (t === r) return n << 1;
                        r > t ? s = n : i = n + 1
                    }
                    return ~(s << 1)
                }(e, t)
            }
            var it = function(e) {
                    return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e
                }({}),
                st = function(e) {
                    return e[e.Emulated = 0] = "Emulated", e[e.Native = 1] = "Native", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e
                }({});
            const rt = {},
                ot = [];
            let at = 0;

            function lt(e) {
                return J(() => {
                    const t = {},
                        n = {
                            type: e.type,
                            providersResolver: null,
                            decls: e.decls,
                            vars: e.vars,
                            factory: null,
                            template: e.template || null,
                            consts: e.consts || null,
                            ngContentSelectors: e.ngContentSelectors,
                            hostBindings: e.hostBindings || null,
                            hostVars: e.hostVars || 0,
                            hostAttrs: e.hostAttrs || null,
                            contentQueries: e.contentQueries || null,
                            declaredInputs: t,
                            inputs: null,
                            outputs: null,
                            exportAs: e.exportAs || null,
                            onPush: e.changeDetection === it.OnPush,
                            directiveDefs: null,
                            pipeDefs: null,
                            selectors: e.selectors || ot,
                            viewQuery: e.viewQuery || null,
                            features: e.features || null,
                            data: e.data || {},
                            encapsulation: e.encapsulation || st.Emulated,
                            id: "c",
                            styles: e.styles || ot,
                            _: null,
                            setInput: null,
                            schemas: e.schemas || null,
                            tView: null
                        },
                        i = e.directives,
                        s = e.features,
                        r = e.pipes;
                    return n.id += at++, n.inputs = pt(e.inputs, t), n.outputs = pt(e.outputs), s && s.forEach(e => e(n)), n.directiveDefs = i ? () => ("function" == typeof i ? i() : i).map(ut) : null, n.pipeDefs = r ? () => ("function" == typeof r ? r() : r).map(ct) : null, n
                })
            }

            function ut(e) {
                return mt(e) || function(e) {
                    return e[Me] || null
                }(e)
            }

            function ct(e) {
                return function(e) {
                    return e[Ae] || null
                }(e)
            }
            const ht = {};

            function dt(e) {
                const t = {
                    type: e.type,
                    bootstrap: e.bootstrap || ot,
                    declarations: e.declarations || ot,
                    imports: e.imports || ot,
                    exports: e.exports || ot,
                    transitiveCompileScopes: null,
                    schemas: e.schemas || null,
                    id: e.id || null
                };
                return null != e.id && J(() => {
                    ht[e.id] = e.type
                }), t
            }

            function pt(e, t) {
                if (null == e) return rt;
                const n = {};
                for (const i in e)
                    if (e.hasOwnProperty(i)) {
                        let s = e[i],
                            r = s;
                        Array.isArray(s) && (r = s[1], s = s[0]), n[s] = i, t && (t[s] = r)
                    } return n
            }
            const ft = lt;

            function gt(e) {
                return {
                    type: e.type,
                    name: e.name,
                    factory: null,
                    pure: !1 !== e.pure,
                    onDestroy: e.type.prototype.ngOnDestroy || null
                }
            }

            function mt(e) {
                return e[Ie] || null
            }

            function wt(e, t) {
                return e.hasOwnProperty(Ne) ? e[Ne] : null
            }

            function vt(e, t) {
                const n = e[Re] || null;
                if (!n && !0 === t) throw new Error(`Type ${ve(e)} does not have '\u0275mod' property.`);
                return n
            }

            function _t(e) {
                return Array.isArray(e) && "object" == typeof e[1]
            }

            function yt(e) {
                return Array.isArray(e) && !0 === e[1]
            }

            function bt(e) {
                return 0 != (8 & e.flags)
            }

            function Ct(e) {
                return 2 == (2 & e.flags)
            }

            function xt(e) {
                return 1 == (1 & e.flags)
            }

            function St(e) {
                return null !== e.template
            }

            function Et(e) {
                return 0 != (512 & e[2])
            }
            class Tt {
                constructor(e, t, n) {
                    this.previousValue = e, this.currentValue = t, this.firstChange = n
                }
                isFirstChange() {
                    return this.firstChange
                }
            }

            function kt() {
                const e = Mt(this),
                    t = null == e ? void 0 : e.current;
                if (t) {
                    const n = e.previous;
                    if (n === rt) e.previous = t;
                    else
                        for (let e in t) n[e] = t[e];
                    e.current = null, this.ngOnChanges(t)
                }
            }

            function It(e, t, n, i) {
                const s = Mt(e) || function(e, t) {
                        return e.__ngSimpleChanges__ = t
                    }(e, {
                        previous: rt,
                        current: null
                    }),
                    r = s.current || (s.current = {}),
                    o = s.previous,
                    a = this.declaredInputs[n],
                    l = o[a];
                r[a] = new Tt(l && l.currentValue, t, o === rt), e[i] = t
            }

            function Mt(e) {
                return e.__ngSimpleChanges__ || null
            }
            let At = void 0;

            function Rt() {
                return void 0 !== At ? At : "undefined" != typeof document ? document : void 0
            }

            function Dt(e) {
                return !!e.listen
            }
            const Nt = {
                createRenderer: (e, t) => Rt()
            };

            function Pt(e) {
                for (; Array.isArray(e);) e = e[0];
                return e
            }

            function Ot(e, t) {
                return Pt(t[e + 20])
            }

            function Lt(e, t) {
                return Pt(t[e.index])
            }

            function Ht(e, t) {
                return e.data[t + 20]
            }

            function Ft(e, t) {
                return e[t + 20]
            }

            function Vt(e, t) {
                const n = t[e];
                return _t(n) ? n : n[0]
            }

            function jt(e) {
                const t = function(e) {
                    return e.__ngContext__ || null
                }(e);
                return t ? Array.isArray(t) ? t : t.lView : null
            }

            function Bt(e) {
                return 4 == (4 & e[2])
            }

            function zt(e) {
                return 128 == (128 & e[2])
            }

            function $t(e, t) {
                return null === e || null == t ? null : e[t]
            }

            function Ut(e) {
                e[18] = 0
            }

            function Wt(e, t) {
                e[5] += t;
                let n = e,
                    i = e[3];
                for (; null !== i && (1 === t && 1 === n[5] || -1 === t && 0 === n[5]);) i[5] += t, n = i, i = i[3]
            }
            const Zt = {
                lFrame: gn(null),
                bindingsEnabled: !0,
                checkNoChangesMode: !1
            };

            function qt() {
                return Zt.bindingsEnabled
            }

            function Gt() {
                return Zt.lFrame.lView
            }

            function Yt() {
                return Zt.lFrame.tView
            }

            function Xt(e) {
                Zt.lFrame.contextLView = e
            }

            function Qt() {
                return Zt.lFrame.currentTNode
            }

            function Kt(e, t) {
                Zt.lFrame.currentTNode = e, Zt.lFrame.isParent = t
            }

            function Jt() {
                return Zt.lFrame.isParent
            }

            function en() {
                Zt.lFrame.isParent = !1
            }

            function tn() {
                return Zt.checkNoChangesMode
            }

            function nn(e) {
                Zt.checkNoChangesMode = e
            }

            function sn() {
                const e = Zt.lFrame;
                let t = e.bindingRootIndex;
                return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
            }

            function rn() {
                return Zt.lFrame.bindingIndex
            }

            function on() {
                return Zt.lFrame.bindingIndex++
            }

            function an(e) {
                const t = Zt.lFrame,
                    n = t.bindingIndex;
                return t.bindingIndex = t.bindingIndex + e, n
            }

            function ln(e, t) {
                const n = Zt.lFrame;
                n.bindingIndex = n.bindingRootIndex = e, un(t)
            }

            function un(e) {
                Zt.lFrame.currentDirectiveIndex = e
            }

            function cn() {
                return Zt.lFrame.currentQueryIndex
            }

            function hn(e) {
                Zt.lFrame.currentQueryIndex = e
            }

            function dn(e, t) {
                const n = fn();
                Zt.lFrame = n, n.currentTNode = t, n.lView = e
            }

            function pn(e) {
                const t = fn(),
                    n = e[1];
                Zt.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex
            }

            function fn() {
                const e = Zt.lFrame,
                    t = null === e ? null : e.child;
                return null === t ? gn(e) : t
            }

            function gn(e) {
                const t = {
                    currentTNode: null,
                    isParent: !0,
                    lView: null,
                    tView: null,
                    selectedIndex: 0,
                    contextLView: null,
                    elementDepthCount: 0,
                    currentNamespace: null,
                    currentDirectiveIndex: -1,
                    bindingRootIndex: -1,
                    bindingIndex: -1,
                    currentQueryIndex: 0,
                    parent: e,
                    child: null
                };
                return null !== e && (e.child = t), t
            }

            function mn() {
                const e = Zt.lFrame;
                return Zt.lFrame = e.parent, e.currentTNode = null, e.lView = null, e
            }
            const wn = mn;

            function vn() {
                const e = mn();
                e.isParent = !0, e.tView = null, e.selectedIndex = 0, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
            }

            function _n() {
                return Zt.lFrame.selectedIndex
            }

            function yn(e) {
                Zt.lFrame.selectedIndex = e
            }

            function bn() {
                const e = Zt.lFrame;
                return Ht(e.tView, e.selectedIndex)
            }

            function Cn() {
                Zt.lFrame.currentNamespace = "http://www.w3.org/2000/svg"
            }

            function xn(e, t) {
                for (let n = t.directiveStart, i = t.directiveEnd; n < i; n++) {
                    const t = e.data[n].type.prototype,
                        {
                            ngAfterContentInit: i,
                            ngAfterContentChecked: s,
                            ngAfterViewInit: r,
                            ngAfterViewChecked: o,
                            ngOnDestroy: a
                        } = t;
                    i && (e.contentHooks || (e.contentHooks = [])).push(-n, i), s && ((e.contentHooks || (e.contentHooks = [])).push(n, s), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, s)), r && (e.viewHooks || (e.viewHooks = [])).push(-n, r), o && ((e.viewHooks || (e.viewHooks = [])).push(n, o), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, o)), null != a && (e.destroyHooks || (e.destroyHooks = [])).push(n, a)
                }
            }

            function Sn(e, t, n) {
                kn(e, t, 3, n)
            }

            function En(e, t, n, i) {
                (3 & e[2]) === n && kn(e, t, n, i)
            }

            function Tn(e, t) {
                let n = e[2];
                (3 & n) === t && (n &= 2047, n += 1, e[2] = n)
            }

            function kn(e, t, n, i) {
                const s = null != i ? i : -1;
                let r = 0;
                for (let o = void 0 !== i ? 65535 & e[18] : 0; o < t.length; o++)
                    if ("number" == typeof t[o + 1]) {
                        if (r = t[o], null != i && r >= i) break
                    } else t[o] < 0 && (e[18] += 65536), (r < s || -1 == s) && (In(e, n, t, o), e[18] = (4294901760 & e[18]) + o + 2), o++
            }

            function In(e, t, n, i) {
                const s = n[i] < 0,
                    r = n[i + 1],
                    o = e[s ? -n[i] : n[i]];
                s ? e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t && (e[2] += 2048, r.call(o)) : r.call(o)
            }
            class Mn {
                constructor(e, t, n) {
                    this.factory = e, this.resolving = !1, this.canSeeViewProviders = t, this.injectImpl = n
                }
            }

            function An(e, t, n) {
                const i = Dt(e);
                let s = 0;
                for (; s < n.length;) {
                    const r = n[s];
                    if ("number" == typeof r) {
                        if (0 !== r) break;
                        s++;
                        const o = n[s++],
                            a = n[s++],
                            l = n[s++];
                        i ? e.setAttribute(t, a, l, o) : t.setAttributeNS(o, a, l)
                    } else {
                        const o = r,
                            a = n[++s];
                        Rn(o) ? i && e.setProperty(t, o, a) : i ? e.setAttribute(t, o, a) : t.setAttribute(o, a), s++
                    }
                }
                return s
            }

            function Rn(e) {
                return 64 === e.charCodeAt(0)
            }

            function Dn(e, t) {
                if (null === t || 0 === t.length);
                else if (null === e || 0 === e.length) e = t.slice();
                else {
                    let n = -1;
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i];
                        "number" == typeof s ? n = s : 0 === n || Nn(e, n, s, null, -1 === n || 2 === n ? t[++i] : null)
                    }
                }
                return e
            }

            function Nn(e, t, n, i, s) {
                let r = 0,
                    o = e.length;
                if (-1 === t) o = -1;
                else
                    for (; r < e.length;) {
                        const n = e[r++];
                        if ("number" == typeof n) {
                            if (n === t) {
                                o = -1;
                                break
                            }
                            if (n > t) {
                                o = r - 1;
                                break
                            }
                        }
                    }
                for (; r < e.length;) {
                    const t = e[r];
                    if ("number" == typeof t) break;
                    if (t === n) {
                        if (null === i) return void(null !== s && (e[r + 1] = s));
                        if (i === e[r + 1]) return void(e[r + 2] = s)
                    }
                    r++, null !== i && r++, null !== s && r++
                } - 1 !== o && (e.splice(o, 0, t), r = o + 1), e.splice(r++, 0, n), null !== i && e.splice(r++, 0, i), null !== s && e.splice(r++, 0, s)
            }

            function Pn(e) {
                return -1 !== e
            }

            function On(e) {
                return 32767 & e
            }

            function Ln(e, t) {
                let n = e >> 16,
                    i = t;
                for (; n > 0;) i = i[15], n--;
                return i
            }

            function Hn(e) {
                return "string" == typeof e ? e : null == e ? "" : "" + e
            }

            function Fn(e) {
                return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : Hn(e)
            }
            const Vn = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(ke))();

            function jn(e) {
                return e instanceof Function ? e() : e
            }
            let Bn = !0;

            function zn(e) {
                const t = Bn;
                return Bn = e, t
            }
            let $n = 0;

            function Un(e, t) {
                const n = Zn(e, t);
                if (-1 !== n) return n;
                const i = t[1];
                i.firstCreatePass && (e.injectorIndex = t.length, Wn(i.data, e), Wn(t, null), Wn(i.blueprint, null));
                const s = qn(e, t),
                    r = e.injectorIndex;
                if (Pn(s)) {
                    const e = On(s),
                        n = Ln(s, t),
                        i = n[1].data;
                    for (let s = 0; s < 8; s++) t[r + s] = n[e + s] | i[e + s]
                }
                return t[r + 8] = s, r
            }

            function Wn(e, t) {
                e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
            }

            function Zn(e, t) {
                return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : e.injectorIndex
            }

            function qn(e, t) {
                if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
                let n = 0,
                    i = null,
                    s = t;
                for (; null !== s;) {
                    const e = s[1],
                        t = e.type;
                    if (i = 2 === t ? e.declTNode : 1 === t ? s[6] : null, null === i) return -1;
                    if (n++, s = s[15], -1 !== i.injectorIndex) return i.injectorIndex | n << 16
                }
                return -1
            }

            function Gn(e, t, n) {
                ! function(e, t, n) {
                    let i;
                    "string" == typeof n ? i = n.charCodeAt(0) || 0 : n.hasOwnProperty(Pe) && (i = n[Pe]), null == i && (i = n[Pe] = $n++);
                    const s = 255 & i,
                        r = 1 << s,
                        o = 64 & s,
                        a = 32 & s,
                        l = t.data;
                    128 & s ? o ? a ? l[e + 7] |= r : l[e + 6] |= r : a ? l[e + 5] |= r : l[e + 4] |= r : o ? a ? l[e + 3] |= r : l[e + 2] |= r : a ? l[e + 1] |= r : l[e] |= r
                }(e, t, n)
            }

            function Yn(e, t, n, i = re.Default, s) {
                if (null !== e) {
                    const s = function(e) {
                        if ("string" == typeof e) return e.charCodeAt(0) || 0;
                        const t = e.hasOwnProperty(Pe) ? e[Pe] : void 0;
                        return "number" == typeof t && t > 0 ? 255 & t : t
                    }(n);
                    if ("function" == typeof s) {
                        dn(t, e);
                        try {
                            const e = s();
                            if (null != e || i & re.Optional) return e;
                            throw new Error(`No provider for ${Fn(n)}!`)
                        } finally {
                            wn()
                        }
                    } else if ("number" == typeof s) {
                        if (-1 === s) return new ni(e, t);
                        let r = null,
                            o = Zn(e, t),
                            a = -1,
                            l = i & re.Host ? t[16][6] : null;
                        for ((-1 === o || i & re.SkipSelf) && (a = -1 === o ? qn(e, t) : t[o + 8], -1 !== a && ti(i, !1) ? (r = t[1], o = On(a), t = Ln(a, t)) : o = -1); - 1 !== o;) {
                            const e = t[1];
                            if (ei(s, o, e.data)) {
                                const e = Qn(o, t, n, r, i, l);
                                if (e !== Xn) return e
                            }
                            a = t[o + 8], -1 !== a && ti(i, t[1].data[o + 8] === l) && ei(s, o, t) ? (r = e, o = On(a), t = Ln(a, t)) : o = -1
                        }
                    }
                }
                if (i & re.Optional && void 0 === s && (s = null), 0 == (i & (re.Self | re.Host))) {
                    const e = t[9],
                        r = $e(void 0);
                    try {
                        return e ? e.get(n, s, i & re.Optional) : Ze(n, s, i & re.Optional)
                    } finally {
                        $e(r)
                    }
                }
                if (i & re.Optional) return s;
                throw new Error(`NodeInjector: NOT_FOUND [${Fn(n)}]`)
            }
            const Xn = {};

            function Qn(e, t, n, i, s, r) {
                const o = t[1],
                    a = o.data[e + 8],
                    l = Kn(a, o, n, null == i ? Ct(a) && Bn : i != o && 2 === a.type, s & re.Host && r === a);
                return null !== l ? Jn(t, o, l, a) : Xn
            }

            function Kn(e, t, n, i, s) {
                const r = e.providerIndexes,
                    o = t.data,
                    a = 1048575 & r,
                    l = e.directiveStart,
                    u = r >> 20,
                    c = s ? a + u : e.directiveEnd;
                for (let h = i ? a : a + u; h < c; h++) {
                    const e = o[h];
                    if (h < l && n === e || h >= l && e.type === n) return h
                }
                if (s) {
                    const e = o[l];
                    if (e && St(e) && e.type === n) return l
                }
                return null
            }

            function Jn(e, t, n, i) {
                let s = e[n];
                const r = t.data;
                if (s instanceof Mn) {
                    const o = s;
                    if (o.resolving) throw new Error("Circular dep for " + Fn(r[n]));
                    const a = zn(o.canSeeViewProviders);
                    o.resolving = !0;
                    const l = o.injectImpl ? $e(o.injectImpl) : null;
                    dn(e, i);
                    try {
                        s = e[n] = o.factory(void 0, r, e, i), t.firstCreatePass && n >= i.directiveStart && function(e, t, n) {
                            const {
                                ngOnChanges: i,
                                ngOnInit: s,
                                ngDoCheck: r
                            } = t.type.prototype;
                            if (i) {
                                const i = ((o = t).type.prototype.ngOnChanges && (o.setInput = It), kt);
                                (n.preOrderHooks || (n.preOrderHooks = [])).push(e, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, i)
                            }
                            var o;
                            s && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, s), r && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, r))
                        }(n, r[n], t)
                    } finally {
                        null !== l && $e(l), zn(a), o.resolving = !1, wn()
                    }
                }
                return s
            }

            function ei(e, t, n) {
                const i = 64 & e,
                    s = 32 & e;
                let r;
                return r = 128 & e ? i ? s ? n[t + 7] : n[t + 6] : s ? n[t + 5] : n[t + 4] : i ? s ? n[t + 3] : n[t + 2] : s ? n[t + 1] : n[t], !!(r & 1 << e)
            }

            function ti(e, t) {
                return !(e & re.Self || e & re.Host && t)
            }
            class ni {
                constructor(e, t) {
                    this._tNode = e, this._lView = t
                }
                get(e, t) {
                    return Yn(this._tNode, this._lView, e, void 0, t)
                }
            }

            function ii(e) {
                return e.ngDebugContext
            }

            function si(e) {
                return e.ngOriginalError
            }

            function ri(e, ...t) {
                e.error(...t)
            }
            class oi {
                constructor() {
                    this._console = console
                }
                handleError(e) {
                    const t = this._findOriginalError(e),
                        n = this._findContext(e),
                        i = function(e) {
                            return e.ngErrorLogger || ri
                        }(e);
                    i(this._console, "ERROR", e), t && i(this._console, "ORIGINAL ERROR", t), n && i(this._console, "ERROR CONTEXT", n)
                }
                _findContext(e) {
                    return e ? ii(e) ? ii(e) : this._findContext(si(e)) : null
                }
                _findOriginalError(e) {
                    let t = si(e);
                    for (; t && si(t);) t = si(t);
                    return t
                }
            }
            class ai {
                constructor(e) {
                    this.changingThisBreaksApplicationSecurity = e
                }
                toString() {
                    return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
                }
            }

            function li(e) {
                return e instanceof ai ? e.changingThisBreaksApplicationSecurity : e
            }

            function ui(e, t) {
                const n = function(e) {
                    return e instanceof ai && e.getTypeName() || null
                }(e);
                if (null != n && n !== t) {
                    if ("ResourceURL" === n && "URL" === t) return !0;
                    throw new Error(`Required a safe ${t}, got a ${n} (see http://g.co/ng/security#xss)`)
                }
                return n === t
            }
            let ci = !0,
                hi = !1;

            function di() {
                return hi = !0, ci
            }
            class pi {
                getInertBodyElement(e) {
                    e = "<body><remove></remove>" + e;
                    try {
                        const t = (new window.DOMParser).parseFromString(e, "text/html").body;
                        return t.removeChild(t.firstChild), t
                    } catch (t) {
                        return null
                    }
                }
            }
            class fi {
                constructor(e) {
                    if (this.defaultDoc = e, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), null == this.inertDocument.body) {
                        const e = this.inertDocument.createElement("html");
                        this.inertDocument.appendChild(e);
                        const t = this.inertDocument.createElement("body");
                        e.appendChild(t)
                    }
                }
                getInertBodyElement(e) {
                    const t = this.inertDocument.createElement("template");
                    if ("content" in t) return t.innerHTML = e, t;
                    const n = this.inertDocument.createElement("body");
                    return n.innerHTML = e, this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n
                }
                stripCustomNsAttrs(e) {
                    const t = e.attributes;
                    for (let i = t.length - 1; 0 < i; i--) {
                        const n = t.item(i).name;
                        "xmlns:ns1" !== n && 0 !== n.indexOf("ns1:") || e.removeAttribute(n)
                    }
                    let n = e.firstChild;
                    for (; n;) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), n = n.nextSibling
                }
            }
            const gi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
                mi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

            function wi(e) {
                return (e = String(e)).match(gi) || e.match(mi) ? e : (di() && console.warn(`WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`), "unsafe:" + e)
            }

            function vi(e) {
                const t = {};
                for (const n of e.split(",")) t[n] = !0;
                return t
            }

            function _i(...e) {
                const t = {};
                for (const n of e)
                    for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
                return t
            }
            const yi = vi("area,br,col,hr,img,wbr"),
                bi = vi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                Ci = vi("rp,rt"),
                xi = _i(Ci, bi),
                Si = _i(yi, _i(bi, vi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), _i(Ci, vi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), xi),
                Ei = vi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                Ti = vi("srcset"),
                ki = _i(Ei, Ti, vi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), vi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
                Ii = vi("script,style,template");
            class Mi {
                constructor() {
                    this.sanitizedSomething = !1, this.buf = []
                }
                sanitizeChildren(e) {
                    let t = e.firstChild,
                        n = !0;
                    for (; t;)
                        if (t.nodeType === Node.ELEMENT_NODE ? n = this.startElement(t) : t.nodeType === Node.TEXT_NODE ? this.chars(t.nodeValue) : this.sanitizedSomething = !0, n && t.firstChild) t = t.firstChild;
                        else
                            for (; t;) {
                                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                                let e = this.checkClobberedElement(t, t.nextSibling);
                                if (e) {
                                    t = e;
                                    break
                                }
                                t = this.checkClobberedElement(t, t.parentNode)
                            }
                    return this.buf.join("")
                }
                startElement(e) {
                    const t = e.nodeName.toLowerCase();
                    if (!Si.hasOwnProperty(t)) return this.sanitizedSomething = !0, !Ii.hasOwnProperty(t);
                    this.buf.push("<"), this.buf.push(t);
                    const n = e.attributes;
                    for (let s = 0; s < n.length; s++) {
                        const e = n.item(s),
                            t = e.name,
                            r = t.toLowerCase();
                        if (!ki.hasOwnProperty(r)) {
                            this.sanitizedSomething = !0;
                            continue
                        }
                        let o = e.value;
                        Ei[r] && (o = wi(o)), Ti[r] && (i = o, o = (i = String(i)).split(",").map(e => wi(e.trim())).join(", ")), this.buf.push(" ", t, '="', Di(o), '"')
                    }
                    var i;
                    return this.buf.push(">"), !0
                }
                endElement(e) {
                    const t = e.nodeName.toLowerCase();
                    Si.hasOwnProperty(t) && !yi.hasOwnProperty(t) && (this.buf.push("</"), this.buf.push(t), this.buf.push(">"))
                }
                chars(e) {
                    this.buf.push(Di(e))
                }
                checkClobberedElement(e, t) {
                    if (t && (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + e.outerHTML);
                    return t
                }
            }
            const Ai = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                Ri = /([^\#-~ |!])/g;

            function Di(e) {
                return e.replace(/&/g, "&amp;").replace(Ai, (function(e) {
                    return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";"
                })).replace(Ri, (function(e) {
                    return "&#" + e.charCodeAt(0) + ";"
                })).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            let Ni;

            function Pi(e) {
                return "content" in e && function(e) {
                    return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
                }(e) ? e.content : null
            }
            var Oi = function(e) {
                return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e
            }({});

            function Li(e) {
                const t = Fi();
                return t ? t.sanitize(Oi.HTML, e) || "" : ui(e, "HTML") ? li(e) : function(e, t) {
                    let n = null;
                    try {
                        Ni = Ni || function(e) {
                            return function() {
                                try {
                                    return !!(new window.DOMParser).parseFromString("", "text/html")
                                } catch (e) {
                                    return !1
                                }
                            }() ? new pi : new fi(e)
                        }(e);
                        let i = t ? String(t) : "";
                        n = Ni.getInertBodyElement(i);
                        let s = 5,
                            r = i;
                        do {
                            if (0 === s) throw new Error("Failed to sanitize html because the input is unstable");
                            s--, i = r, r = n.innerHTML, n = Ni.getInertBodyElement(i)
                        } while (i !== r);
                        const o = new Mi,
                            a = o.sanitizeChildren(Pi(n) || n);
                        return di() && o.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), a
                    } finally {
                        if (n) {
                            const e = Pi(n) || n;
                            for (; e.firstChild;) e.removeChild(e.firstChild)
                        }
                    }
                }(Rt(), Hn(e))
            }

            function Hi(e) {
                const t = Fi();
                return t ? t.sanitize(Oi.URL, e) || "" : ui(e, "URL") ? li(e) : wi(Hn(e))
            }

            function Fi() {
                const e = Gt();
                return e && e[12]
            }

            function Vi(e, t) {
                e.__ngContext__ = t
            }

            function ji(e, t, n) {
                let i = e.length;
                for (;;) {
                    const s = e.indexOf(t, n);
                    if (-1 === s) return s;
                    if (0 === s || e.charCodeAt(s - 1) <= 32) {
                        const n = t.length;
                        if (s + n === i || e.charCodeAt(s + n) <= 32) return s
                    }
                    n = s + 1
                }
            }

            function Bi(e, t, n) {
                let i = 0;
                for (; i < e.length;) {
                    let s = e[i++];
                    if (n && "class" === s) {
                        if (s = e[i], -1 !== ji(s.toLowerCase(), t, 0)) return !0
                    } else if (1 === s) {
                        for (; i < e.length && "string" == typeof(s = e[i++]);)
                            if (s.toLowerCase() === t) return !0;
                        return !1
                    }
                }
                return !1
            }

            function zi(e) {
                return 0 === e.type && "ng-template" !== e.tagName
            }

            function $i(e, t, n) {
                return t === (0 !== e.type || n ? e.tagName : "ng-template")
            }

            function Ui(e, t, n) {
                let i = 4;
                const s = e.attrs || [],
                    r = function(e) {
                        for (let n = 0; n < e.length; n++)
                            if (3 === (t = e[n]) || 4 === t || 6 === t) return n;
                        var t;
                        return e.length
                    }(s);
                let o = !1;
                for (let a = 0; a < t.length; a++) {
                    const l = t[a];
                    if ("number" != typeof l) {
                        if (!o)
                            if (4 & i) {
                                if (i = 2 | 1 & i, "" !== l && !$i(e, l, n) || "" === l && 1 === t.length) {
                                    if (Wi(i)) return !1;
                                    o = !0
                                }
                            } else {
                                const u = 8 & i ? l : t[++a];
                                if (8 & i && null !== e.attrs) {
                                    if (!Bi(e.attrs, u, n)) {
                                        if (Wi(i)) return !1;
                                        o = !0
                                    }
                                    continue
                                }
                                const c = Zi(8 & i ? "class" : l, s, zi(e), n);
                                if (-1 === c) {
                                    if (Wi(i)) return !1;
                                    o = !0;
                                    continue
                                }
                                if ("" !== u) {
                                    let e;
                                    e = c > r ? "" : s[c + 1].toLowerCase();
                                    const t = 8 & i ? e : null;
                                    if (t && -1 !== ji(t, u, 0) || 2 & i && u !== e) {
                                        if (Wi(i)) return !1;
                                        o = !0
                                    }
                                }
                            }
                    } else {
                        if (!o && !Wi(i) && !Wi(l)) return !1;
                        if (o && Wi(l)) continue;
                        o = !1, i = l | 1 & i
                    }
                }
                return Wi(i) || o
            }

            function Wi(e) {
                return 0 == (1 & e)
            }

            function Zi(e, t, n, i) {
                if (null === t) return -1;
                let s = 0;
                if (i || !n) {
                    let n = !1;
                    for (; s < t.length;) {
                        const i = t[s];
                        if (i === e) return s;
                        if (3 === i || 6 === i) n = !0;
                        else {
                            if (1 === i || 2 === i) {
                                let e = t[++s];
                                for (;
                                    "string" == typeof e;) e = t[++s];
                                continue
                            }
                            if (4 === i) break;
                            if (0 === i) {
                                s += 4;
                                continue
                            }
                        }
                        s += n ? 1 : 2
                    }
                    return -1
                }
                return function(e, t) {
                    let n = e.indexOf(4);
                    if (n > -1)
                        for (n++; n < e.length;) {
                            const i = e[n];
                            if ("number" == typeof i) return -1;
                            if (i === t) return n;
                            n++
                        }
                    return -1
                }(t, e)
            }

            function qi(e, t, n = !1) {
                for (let i = 0; i < t.length; i++)
                    if (Ui(e, t[i], n)) return !0;
                return !1
            }

            function Gi(e, t) {
                e: for (let n = 0; n < t.length; n++) {
                    const i = t[n];
                    if (e.length === i.length) {
                        for (let t = 0; t < e.length; t++)
                            if (e[t] !== i[t]) continue e;
                        return !0
                    }
                }
                return !1
            }

            function Yi(e, t) {
                return e ? ":not(" + t.trim() + ")" : t
            }

            function Xi(e) {
                let t = e[0],
                    n = 1,
                    i = 2,
                    s = "",
                    r = !1;
                for (; n < e.length;) {
                    let o = e[n];
                    if ("string" == typeof o)
                        if (2 & i) {
                            const t = e[++n];
                            s += "[" + o + (t.length > 0 ? '="' + t + '"' : "") + "]"
                        } else 8 & i ? s += "." + o : 4 & i && (s += " " + o);
                    else "" === s || Wi(o) || (t += Yi(r, s), s = ""), i = o, r = r || !Wi(i);
                    n++
                }
                return "" !== s && (t += Yi(r, s)), t
            }
            const Qi = {};

            function Ki(e) {
                const t = e[3];
                return yt(t) ? t[3] : t
            }

            function Ji(e) {
                return ts(e[13])
            }

            function es(e) {
                return ts(e[4])
            }

            function ts(e) {
                for (; null !== e && !yt(e);) e = e[4];
                return e
            }

            function ns(e) {
                is(Yt(), Gt(), _n() + e, tn())
            }

            function is(e, t, n, i) {
                if (!i)
                    if (3 == (3 & t[2])) {
                        const i = e.preOrderCheckHooks;
                        null !== i && Sn(t, i, n)
                    } else {
                        const i = e.preOrderHooks;
                        null !== i && En(t, i, 0, n)
                    } yn(n)
            }

            function ss(e, t) {
                return e << 17 | t << 2
            }

            function rs(e) {
                return e >> 17 & 32767
            }

            function os(e) {
                return 2 | e
            }

            function as(e) {
                return (131068 & e) >> 2
            }

            function ls(e, t) {
                return -131069 & e | t << 2
            }

            function us(e) {
                return 1 | e
            }

            function cs(e, t) {
                const n = e.contentQueries;
                if (null !== n)
                    for (let i = 0; i < n.length; i += 2) {
                        const s = n[i],
                            r = n[i + 1];
                        if (-1 !== r) {
                            const n = e.data[r];
                            hn(s), n.contentQueries(2, t[r], r)
                        }
                    }
            }

            function hs(e, t, n) {
                return Dt(t) ? t.createElement(e, n) : null === n ? t.createElement(e) : t.createElementNS(n, e)
            }

            function ds(e, t, n, i, s, r, o, a, l, u) {
                const c = t.blueprint.slice();
                return c[0] = s, c[2] = 140 | i, Ut(c), c[3] = c[15] = e, c[8] = n, c[10] = o || e && e[10], c[11] = a || e && e[11], c[12] = l || e && e[12] || null, c[9] = u || e && e[9] || null, c[6] = r, c[16] = 2 == t.type ? e[16] : c, c
            }

            function ps(e, t, n, i, s) {
                const r = t + 20,
                    o = e.data[r] || function(e, t, n, i, s) {
                        const r = Qt(),
                            o = Jt(),
                            a = e.data[t] = function(e, t, n, i, s, r) {
                                return {
                                    type: n,
                                    index: i,
                                    injectorIndex: t ? t.injectorIndex : -1,
                                    directiveStart: -1,
                                    directiveEnd: -1,
                                    directiveStylingLast: -1,
                                    propertyBindings: null,
                                    flags: 0,
                                    providerIndexes: 0,
                                    tagName: s,
                                    attrs: r,
                                    mergedAttrs: null,
                                    localNames: null,
                                    initialInputs: void 0,
                                    inputs: null,
                                    outputs: null,
                                    tViews: null,
                                    next: null,
                                    projectionNext: null,
                                    child: null,
                                    parent: t,
                                    projection: null,
                                    styles: null,
                                    stylesWithoutHost: null,
                                    residualStyles: void 0,
                                    classes: null,
                                    classesWithoutHost: null,
                                    residualClasses: void 0,
                                    classBindings: 0,
                                    styleBindings: 0
                                }
                            }(0, o ? r : r && r.parent, n, t, i, s);
                        return null === e.firstChild && (e.firstChild = a), null !== r && (o && null == r.child && null !== a.parent ? r.child = a : o || (r.next = a)), a
                    }(e, r, n, i, s);
                return Kt(o, !0), o
            }

            function fs(e, t, n) {
                pn(t);
                try {
                    const i = e.viewQuery;
                    null !== i && Ws(1, i, n);
                    const s = e.template;
                    null !== s && ws(e, t, s, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && cs(e, t), e.staticViewQueries && Ws(2, e.viewQuery, n);
                    const r = e.components;
                    null !== r && function(e, t) {
                        for (let n = 0; n < t.length; n++) js(e, t[n])
                    }(t, r)
                } catch (i) {
                    throw e.firstCreatePass && (e.incompleteFirstPass = !0), i
                } finally {
                    t[2] &= -5, vn()
                }
            }

            function gs(e, t, n, i) {
                const s = t[2];
                if (256 == (256 & s)) return;
                pn(t);
                const r = tn();
                try {
                    Ut(t), Zt.lFrame.bindingIndex = e.bindingStartIndex, null !== n && ws(e, t, n, 2, i);
                    const o = 3 == (3 & s);
                    if (!r)
                        if (o) {
                            const n = e.preOrderCheckHooks;
                            null !== n && Sn(t, n, null)
                        } else {
                            const n = e.preOrderHooks;
                            null !== n && En(t, n, 0, null), Tn(t, 0)
                        } if (function(e) {
                            for (let t = Ji(e); null !== t; t = es(t)) {
                                if (!t[2]) continue;
                                const e = t[9];
                                for (let t = 0; t < e.length; t++) {
                                    const n = e[t],
                                        i = n[3];
                                    0 == (1024 & n[2]) && Wt(i, 1), n[2] |= 1024
                                }
                            }
                        }(t), function(e) {
                            for (let t = Ji(e); null !== t; t = es(t))
                                for (let e = 10; e < t.length; e++) {
                                    const n = t[e],
                                        i = n[1];
                                    zt(n) && gs(i, n, i.template, n[8])
                                }
                        }(t), null !== e.contentQueries && cs(e, t), !r)
                        if (o) {
                            const n = e.contentCheckHooks;
                            null !== n && Sn(t, n)
                        } else {
                            const n = e.contentHooks;
                            null !== n && En(t, n, 1), Tn(t, 1)
                        }!
                    function(e, t) {
                        try {
                            const n = e.expandoInstructions;
                            if (null !== n) {
                                let i = e.expandoStartIndex,
                                    s = -1,
                                    r = -1;
                                for (let e = 0; e < n.length; e++) {
                                    const o = n[e];
                                    "number" == typeof o ? o <= 0 ? (r = 0 - o, yn(r), i += 9 + n[++e], s = i) : i += o : (null !== o && (ln(i, s), o(2, t[s])), s++)
                                }
                            }
                        } finally {
                            yn(-1)
                        }
                    }(e, t);
                    const a = e.components;
                    null !== a && function(e, t) {
                        for (let n = 0; n < t.length; n++) Vs(e, t[n])
                    }(t, a);
                    const l = e.viewQuery;
                    if (null !== l && Ws(2, l, i), !r)
                        if (o) {
                            const n = e.viewCheckHooks;
                            null !== n && Sn(t, n)
                        } else {
                            const n = e.viewHooks;
                            null !== n && En(t, n, 2), Tn(t, 2)
                        }! 0 === e.firstUpdatePass && (e.firstUpdatePass = !1), r || (t[2] &= -73), 1024 & t[2] && (t[2] &= -1025, Wt(t[3], -1))
                } finally {
                    vn()
                }
            }

            function ms(e, t, n, i) {
                const s = t[10],
                    r = !tn(),
                    o = Bt(t);
                try {
                    r && !o && s.begin && s.begin(), o && fs(e, t, i), gs(e, t, n, i)
                } finally {
                    r && !o && s.end && s.end()
                }
            }

            function ws(e, t, n, i, s) {
                const r = _n();
                try {
                    yn(-1), 2 & i && t.length > 20 && is(e, t, 0, tn()), n(i, s)
                } finally {
                    yn(r)
                }
            }

            function vs(e, t, n) {
                if (bt(t)) {
                    const i = t.directiveEnd;
                    for (let s = t.directiveStart; s < i; s++) {
                        const t = e.data[s];
                        t.contentQueries && t.contentQueries(1, n[s], s)
                    }
                }
            }

            function _s(e, t, n) {
                qt() && (function(e, t, n, i) {
                    const s = n.directiveStart,
                        r = n.directiveEnd;
                    e.firstCreatePass || Un(n, t), Vi(i, t);
                    const o = n.initialInputs;
                    for (let a = s; a < r; a++) {
                        const i = e.data[a],
                            r = St(i);
                        r && Os(t, n, i);
                        const l = Jn(t, e, a, n);
                        Vi(l, t), null !== o && Ls(0, a - s, l, i, 0, o), r && (Vt(n.index, t)[8] = l)
                    }
                }(e, t, n, Lt(n, t)), 128 == (128 & n.flags) && function(e, t, n) {
                    const i = n.directiveStart,
                        s = n.directiveEnd,
                        r = e.expandoInstructions,
                        o = e.firstCreatePass,
                        a = n.index - 20,
                        l = Zt.lFrame.currentDirectiveIndex;
                    try {
                        yn(a);
                        for (let n = i; n < s; n++) {
                            const i = e.data[n],
                                s = t[n];
                            un(n), null !== i.hostBindings || 0 !== i.hostVars || null !== i.hostAttrs ? Ms(i, s) : o && r.push(null)
                        }
                    } finally {
                        yn(-1), un(l)
                    }
                }(e, t, n))
            }

            function ys(e, t, n = Lt) {
                const i = t.localNames;
                if (null !== i) {
                    let s = t.index + 1;
                    for (let r = 0; r < i.length; r += 2) {
                        const o = i[r + 1],
                            a = -1 === o ? n(t, e) : e[o];
                        e[s++] = a
                    }
                }
            }

            function bs(e) {
                const t = e.tView;
                return null === t || t.incompleteFirstPass ? e.tView = Cs(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t
            }

            function Cs(e, t, n, i, s, r, o, a, l, u) {
                const c = 20 + i,
                    h = c + s,
                    d = function(e, t) {
                        const n = [];
                        for (let i = 0; i < t; i++) n.push(i < e ? null : Qi);
                        return n
                    }(c, h),
                    p = "function" == typeof u ? u() : u;
                return d[1] = {
                    type: e,
                    blueprint: d,
                    template: n,
                    queries: null,
                    viewQuery: a,
                    declTNode: t,
                    data: d.slice().fill(null, c),
                    bindingStartIndex: c,
                    expandoStartIndex: h,
                    expandoInstructions: null,
                    firstCreatePass: !0,
                    firstUpdatePass: !0,
                    staticViewQueries: !1,
                    staticContentQueries: !1,
                    preOrderHooks: null,
                    preOrderCheckHooks: null,
                    contentHooks: null,
                    contentCheckHooks: null,
                    viewHooks: null,
                    viewCheckHooks: null,
                    destroyHooks: null,
                    cleanup: null,
                    contentQueries: null,
                    components: null,
                    directiveRegistry: "function" == typeof r ? r() : r,
                    pipeRegistry: "function" == typeof o ? o() : o,
                    firstChild: null,
                    schemas: l,
                    consts: p,
                    incompleteFirstPass: !1
                }
            }

            function xs(e, t, n, i) {
                const s = qs(t);
                s.push(n), e.firstCreatePass && function(e) {
                    return e.cleanup || (e.cleanup = [])
                }(e).push(i, s.length - 1)
            }

            function Ss(e, t, n) {
                for (let i in e)
                    if (e.hasOwnProperty(i)) {
                        const s = e[i];
                        (n = null === n ? {} : n).hasOwnProperty(i) ? n[i].push(t, s) : n[i] = [t, s]
                    } return n
            }

            function Es(e, t, n, i, s, r, o, a) {
                const l = Lt(t, n);
                let u, c = t.inputs;
                var h;
                !a && null != c && (u = c[i]) ? (Ys(e, n, u, i, s), Ct(t) && function(e, t) {
                    const n = Vt(t, e);
                    16 & n[2] || (n[2] |= 64)
                }(n, t.index)) : 2 === t.type && (i = "class" === (h = i) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, s = null != o ? o(s, t.tagName || "", i) : s, Dt(r) ? r.setProperty(l, i, s) : Rn(i) || (l.setProperty ? l.setProperty(i, s) : l[i] = s))
            }

            function Ts(e, t, n, i) {
                let s = !1;
                if (qt()) {
                    const r = function(e, t, n) {
                            const i = e.directiveRegistry;
                            let s = null;
                            if (i)
                                for (let r = 0; r < i.length; r++) {
                                    const o = i[r];
                                    qi(n, o.selectors, !1) && (s || (s = []), Gn(Un(n, t), e, o.type), St(o) ? (Rs(e, n), s.unshift(o)) : s.push(o))
                                }
                            return s
                        }(e, t, n),
                        o = null === i ? null : {
                            "": -1
                        };
                    if (null !== r) {
                        let i = 0;
                        s = !0, Ns(n, e.data.length, r.length);
                        for (let e = 0; e < r.length; e++) {
                            const t = r[e];
                            t.providersResolver && t.providersResolver(t)
                        }
                        As(e, n, r.length);
                        let a = !1,
                            l = !1;
                        for (let s = 0; s < r.length; s++) {
                            const u = r[s];
                            n.mergedAttrs = Dn(n.mergedAttrs, u.hostAttrs), Ps(e, t, u), Ds(e.data.length - 1, u, o), null !== u.contentQueries && (n.flags |= 8), null === u.hostBindings && null === u.hostAttrs && 0 === u.hostVars || (n.flags |= 128);
                            const c = u.type.prototype;
                            !a && (c.ngOnChanges || c.ngOnInit || c.ngDoCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index - 20), a = !0), l || !c.ngOnChanges && !c.ngDoCheck || ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index - 20), l = !0), ks(e, u), i += u.hostVars
                        }! function(e, t) {
                            const n = t.directiveEnd,
                                i = e.data,
                                s = t.attrs,
                                r = [];
                            let o = null,
                                a = null;
                            for (let l = t.directiveStart; l < n; l++) {
                                const e = i[l],
                                    n = e.inputs,
                                    u = null === s || zi(t) ? null : Hs(n, s);
                                r.push(u), o = Ss(n, l, o), a = Ss(e.outputs, l, a)
                            }
                            null !== o && (o.hasOwnProperty("class") && (t.flags |= 16), o.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = r, t.inputs = o, t.outputs = a
                        }(e, n), Is(e, t, i)
                    }
                    o && function(e, t, n) {
                        if (t) {
                            const i = e.localNames = [];
                            for (let e = 0; e < t.length; e += 2) {
                                const s = n[t[e + 1]];
                                if (null == s) throw new Error(`Export of name '${t[e+1]}' not found!`);
                                i.push(t[e], s)
                            }
                        }
                    }(n, i, o)
                }
                return n.mergedAttrs = Dn(n.mergedAttrs, n.attrs), s
            }

            function ks(e, t) {
                const n = e.expandoInstructions;
                n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars)
            }

            function Is(e, t, n) {
                for (let i = 0; i < n; i++) t.push(Qi), e.blueprint.push(Qi), e.data.push(null)
            }

            function Ms(e, t) {
                null !== e.hostBindings && e.hostBindings(1, t)
            }

            function As(e, t, n) {
                const i = 20 - t.index,
                    s = e.data.length - (1048575 & t.providerIndexes);
                (e.expandoInstructions || (e.expandoInstructions = [])).push(i, s, n)
            }

            function Rs(e, t) {
                t.flags |= 2, (e.components || (e.components = [])).push(t.index)
            }

            function Ds(e, t, n) {
                if (n) {
                    if (t.exportAs)
                        for (let i = 0; i < t.exportAs.length; i++) n[t.exportAs[i]] = e;
                    St(t) && (n[""] = e)
                }
            }

            function Ns(e, t, n) {
                e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
            }

            function Ps(e, t, n) {
                e.data.push(n);
                const i = n.factory || (n.factory = wt(n.type)),
                    s = new Mn(i, St(n), null);
                e.blueprint.push(s), t.push(s)
            }

            function Os(e, t, n) {
                const i = Lt(t, e),
                    s = bs(n),
                    r = e[10],
                    o = Bs(e, ds(e, s, null, n.onPush ? 64 : 16, i, t, r, r.createRenderer(i, n), null, null));
                e[t.index] = o
            }

            function Ls(e, t, n, i, s, r) {
                const o = r[t];
                if (null !== o) {
                    const e = i.setInput;
                    for (let t = 0; t < o.length;) {
                        const s = o[t++],
                            r = o[t++],
                            a = o[t++];
                        null !== e ? i.setInput(n, a, s, r) : n[r] = a
                    }
                }
            }

            function Hs(e, t) {
                let n = null,
                    i = 0;
                for (; i < t.length;) {
                    const s = t[i];
                    if (0 !== s)
                        if (5 !== s) {
                            if ("number" == typeof s) break;
                            e.hasOwnProperty(s) && (null === n && (n = []), n.push(s, e[s], t[i + 1])), i += 2
                        } else i += 2;
                    else i += 4
                }
                return n
            }

            function Fs(e, t, n, i) {
                return new Array(e, !0, !1, t, null, 0, i, n, null, null)
            }

            function Vs(e, t) {
                const n = Vt(t, e);
                if (zt(n)) {
                    const e = n[1];
                    80 & n[2] ? gs(e, n, e.template, n[8]) : n[5] > 0 && function e(t) {
                        for (let i = Ji(t); null !== i; i = es(i))
                            for (let t = 10; t < i.length; t++) {
                                const n = i[t];
                                if (1024 & n[2]) {
                                    const e = n[1];
                                    gs(e, n, e.template, n[8])
                                } else n[5] > 0 && e(n)
                            }
                        const n = t[1].components;
                        if (null !== n)
                            for (let i = 0; i < n.length; i++) {
                                const s = Vt(n[i], t);
                                zt(s) && s[5] > 0 && e(s)
                            }
                    }(n)
                }
            }

            function js(e, t) {
                const n = Vt(t, e),
                    i = n[1];
                ! function(e, t) {
                    for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
                }(i, n), fs(i, n, n[8])
            }

            function Bs(e, t) {
                return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t
            }

            function zs(e) {
                for (; e;) {
                    e[2] |= 64;
                    const t = Ki(e);
                    if (Et(e) && !t) return e;
                    e = t
                }
                return null
            }

            function $s(e, t, n) {
                const i = t[10];
                i.begin && i.begin();
                try {
                    gs(e, t, e.template, n)
                } catch (s) {
                    throw Gs(t, s), s
                } finally {
                    i.end && i.end()
                }
            }

            function Us(e) {
                ! function(e) {
                    for (let t = 0; t < e.components.length; t++) {
                        const n = e.components[t],
                            i = jt(n),
                            s = i[1];
                        ms(s, i, s.template, n)
                    }
                }(e[8])
            }

            function Ws(e, t, n) {
                hn(0), t(e, n)
            }
            const Zs = (() => Promise.resolve(null))();

            function qs(e) {
                return e[7] || (e[7] = [])
            }

            function Gs(e, t) {
                const n = e[9],
                    i = n ? n.get(oi, null) : null;
                i && i.handleError(t)
            }

            function Ys(e, t, n, i, s) {
                for (let r = 0; r < n.length;) {
                    const o = n[r++],
                        a = n[r++],
                        l = t[o],
                        u = e.data[o];
                    null !== u.setInput ? u.setInput(l, s, i, a) : l[a] = s
                }
            }

            function Xs(e, t, n) {
                const i = Ot(t, e),
                    s = e[11];
                Dt(s) ? s.setValue(i, n) : i.textContent = n
            }

            function Qs(e, t, n, i, s) {
                if (null != i) {
                    let r, o = !1;
                    yt(i) ? r = i : _t(i) && (o = !0, i = i[0]);
                    const a = Pt(i);
                    0 === e && null !== n ? null == s ? sr(t, n, a) : ir(t, n, a, s || null) : 1 === e && null !== n ? ir(t, n, a, s || null) : 2 === e ? function(e, t, n) {
                        const i = or(e, t);
                        i && function(e, t, n, i) {
                            Dt(e) ? e.removeChild(t, n, i) : t.removeChild(n)
                        }(e, i, t, n)
                    }(t, a, o) : 3 === e && t.destroyNode(a), null != r && function(e, t, n, i, s) {
                        const r = n[7];
                        r !== Pt(n) && Qs(t, e, i, r, s);
                        for (let o = 10; o < n.length; o++) {
                            const s = n[o];
                            cr(s[1], s, e, t, i, r)
                        }
                    }(t, e, r, n, s)
                }
            }

            function Ks(e, t) {
                const n = e[9],
                    i = n.indexOf(t),
                    s = t[3];
                1024 & t[2] && (t[2] &= -1025, Wt(s, -1)), n.splice(i, 1)
            }

            function Js(e, t) {
                if (e.length <= 10) return;
                const n = 10 + t,
                    i = e[n];
                if (i) {
                    const r = i[17];
                    null !== r && r !== e && Ks(r, i), t > 0 && (e[n - 1][4] = i[4]);
                    const o = Ke(e, 10 + t);
                    cr(i[1], s = i, s[11], 2, null, null), s[0] = null, s[6] = null;
                    const a = o[19];
                    null !== a && a.detachView(o[1]), i[3] = null, i[4] = null, i[2] &= -129
                }
                var s;
                return i
            }

            function er(e, t) {
                if (!(256 & t[2])) {
                    const n = t[11];
                    Dt(n) && n.destroyNode && cr(e, t, n, 3, null, null),
                        function(e) {
                            let t = e[13];
                            if (!t) return tr(e[1], e);
                            for (; t;) {
                                let n = null;
                                if (_t(t)) n = t[13];
                                else {
                                    const e = t[10];
                                    e && (n = e)
                                }
                                if (!n) {
                                    for (; t && !t[4] && t !== e;) _t(t) && tr(t[1], t), t = t[3];
                                    null === t && (t = e), _t(t) && tr(t[1], t), n = t && t[4]
                                }
                                t = n
                            }
                        }(t)
                }
            }

            function tr(e, t) {
                if (!(256 & t[2])) {
                    t[2] &= -129, t[2] |= 256,
                        function(e, t) {
                            let n;
                            if (null != e && null != (n = e.destroyHooks))
                                for (let i = 0; i < n.length; i += 2) {
                                    const e = t[n[i]];
                                    if (!(e instanceof Mn)) {
                                        const t = n[i + 1];
                                        if (Array.isArray(t))
                                            for (let n = 0; n < t.length; n += 2) t[n + 1].call(e[t[n]]);
                                        else t.call(e)
                                    }
                                }
                        }(e, t),
                        function(e, t) {
                            const n = e.cleanup;
                            if (null !== n) {
                                const e = t[7];
                                for (let i = 0; i < n.length - 1; i += 2)
                                    if ("string" == typeof n[i]) {
                                        const s = n[i + 1],
                                            r = "function" == typeof s ? s(t) : Pt(t[s]),
                                            o = e[n[i + 2]],
                                            a = n[i + 3];
                                        "boolean" == typeof a ? r.removeEventListener(n[i], o, a) : a >= 0 ? e[a]() : e[-a].unsubscribe(), i += 2
                                    } else n[i].call(e[n[i + 1]]);
                                t[7] = null
                            }
                        }(e, t), 1 === t[1].type && Dt(t[11]) && t[11].destroy();
                    const n = t[17];
                    if (null !== n && yt(t[3])) {
                        n !== t[3] && Ks(n, t);
                        const i = t[19];
                        null !== i && i.detachView(e)
                    }
                }
            }

            function nr(e, t, n) {
                let i = t.parent;
                for (; null != i && (3 === i.type || 4 === i.type);) i = (t = i).parent;
                if (null === i) return n[0];
                if (t && 4 === t.type && 4 & t.flags) return Lt(t, n).parentNode;
                if (2 & i.flags) {
                    const t = e.data,
                        n = t[t[i.index].directiveStart].encapsulation;
                    if (n !== st.ShadowDom && n !== st.Native) return null
                }
                return Lt(i, n)
            }

            function ir(e, t, n, i) {
                Dt(e) ? e.insertBefore(t, n, i) : t.insertBefore(n, i, !0)
            }

            function sr(e, t, n) {
                Dt(e) ? e.appendChild(t, n) : t.appendChild(n)
            }

            function rr(e, t, n, i) {
                null !== i ? ir(e, t, n, i) : sr(e, t, n)
            }

            function or(e, t) {
                return Dt(e) ? e.parentNode(t) : t.parentNode
            }

            function ar(e, t) {
                return 3 === e.type || 4 === e.type ? Lt(e, t) : null
            }

            function lr(e, t, n, i) {
                const s = nr(e, i, t);
                if (null != s) {
                    const e = t[11],
                        r = ar(i.parent || t[6], t);
                    if (Array.isArray(n))
                        for (let t = 0; t < n.length; t++) rr(e, s, n[t], r);
                    else rr(e, s, n, r)
                }
            }

            function ur(e, t, n, i, s, r, o) {
                for (; null != n;) {
                    const a = i[n.index],
                        l = n.type;
                    o && 0 === t && (a && Vi(Pt(a), i), n.flags |= 4), 64 != (64 & n.flags) && (3 === l || 4 === l ? (ur(e, t, n.child, i, s, r, !1), Qs(t, e, s, a, r)) : 1 === l ? hr(e, t, i, n, s, r) : Qs(t, e, s, a, r)), n = o ? n.projectionNext : n.next
                }
            }

            function cr(e, t, n, i, s, r) {
                ur(n, i, e.firstChild, t, s, r, !1)
            }

            function hr(e, t, n, i, s, r) {
                const o = n[16],
                    a = o[6].projection[i.projection];
                if (Array.isArray(a))
                    for (let l = 0; l < a.length; l++) Qs(t, e, s, a[l], r);
                else ur(e, t, a, o[3], s, r, !0)
            }

            function dr(e, t, n) {
                Dt(e) ? e.setAttribute(t, "style", n) : t.style.cssText = n
            }

            function pr(e, t, n) {
                Dt(e) ? "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n) : t.className = n
            }
            class fr {
                constructor(e, t) {
                    this._lView = e, this._cdRefInjectingView = t, this._appRef = null, this._viewContainerRef = null
                }
                get rootNodes() {
                    const e = this._lView,
                        t = e[1];
                    return function e(t, n, i, s, r = !1) {
                        for (; null !== i;) {
                            const o = n[i.index];
                            if (null !== o && s.push(Pt(o)), yt(o))
                                for (let t = 10; t < o.length; t++) {
                                    const n = o[t],
                                        i = n[1].firstChild;
                                    null !== i && e(n[1], n, i, s)
                                }
                            const a = i.type;
                            if (3 === a || 4 === a) e(t, n, i.child, s);
                            else if (1 === a) {
                                const t = n[16],
                                    r = t[6].projection[i.projection];
                                if (Array.isArray(r)) s.push(...r);
                                else {
                                    const n = Ki(t);
                                    e(n[1], n, r, s, !0)
                                }
                            }
                            i = r ? i.projectionNext : i.next
                        }
                        return s
                    }(t, e, t.firstChild, [])
                }
                get context() {
                    return this._lView[8]
                }
                get destroyed() {
                    return 256 == (256 & this._lView[2])
                }
                destroy() {
                    if (this._appRef) this._appRef.detachView(this);
                    else if (this._viewContainerRef) {
                        const e = this._viewContainerRef.indexOf(this);
                        e > -1 && this._viewContainerRef.detach(e), this._viewContainerRef = null
                    }
                    er(this._lView[1], this._lView)
                }
                onDestroy(e) {
                    xs(this._lView[1], this._lView, null, e)
                }
                markForCheck() {
                    zs(this._cdRefInjectingView || this._lView)
                }
                detach() {
                    this._lView[2] &= -129
                }
                reattach() {
                    this._lView[2] |= 128
                }
                detectChanges() {
                    $s(this._lView[1], this._lView, this.context)
                }
                checkNoChanges() {
                    ! function(e, t, n) {
                        nn(!0);
                        try {
                            $s(e, t, n)
                        } finally {
                            nn(!1)
                        }
                    }(this._lView[1], this._lView, this.context)
                }
                attachToViewContainerRef(e) {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._viewContainerRef = e
                }
                detachFromAppRef() {
                    var e;
                    this._appRef = null, cr(this._lView[1], e = this._lView, e[11], 2, null, null)
                }
                attachToAppRef(e) {
                    if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = e
                }
            }
            class gr extends fr {
                constructor(e) {
                    super(e), this._view = e
                }
                detectChanges() {
                    Us(this._view)
                }
                checkNoChanges() {
                    ! function(e) {
                        nn(!0);
                        try {
                            Us(e)
                        } finally {
                            nn(!1)
                        }
                    }(this._view)
                }
                get context() {
                    return null
                }
            }
            let mr, wr, vr;

            function _r(e, t, n) {
                return mr || (mr = class extends e {}), new mr(Lt(t, n))
            }

            function yr(e, t, n, i) {
                return wr || (wr = class extends e {
                    constructor(e, t, n) {
                        super(), this._declarationView = e, this._declarationTContainer = t, this.elementRef = n
                    }
                    createEmbeddedView(e) {
                        const t = this._declarationTContainer.tViews,
                            n = ds(this._declarationView, t, e, 16, null, t.declTNode, null, null, null, null);
                        n[17] = this._declarationView[this._declarationTContainer.index];
                        const i = this._declarationView[19];
                        return null !== i && (n[19] = i.createEmbeddedView(t)), fs(t, n, e), new fr(n)
                    }
                }), 0 === n.type ? new wr(i, n, _r(t, n, i)) : null
            }

            function br(e, t, n, i) {
                let s;
                vr || (vr = class extends e {
                    constructor(e, t, n) {
                        super(), this._lContainer = e, this._hostTNode = t, this._hostView = n
                    }
                    get element() {
                        return _r(t, this._hostTNode, this._hostView)
                    }
                    get injector() {
                        return new ni(this._hostTNode, this._hostView)
                    }
                    get parentInjector() {
                        const e = qn(this._hostTNode, this._hostView);
                        if (Pn(e)) {
                            const t = Ln(e, this._hostView),
                                n = On(e);
                            return new ni(t[1].data[n + 8], t)
                        }
                        return new ni(null, this._hostView)
                    }
                    clear() {
                        for (; this.length > 0;) this.remove(this.length - 1)
                    }
                    get(e) {
                        return null !== this._lContainer[8] && this._lContainer[8][e] || null
                    }
                    get length() {
                        return this._lContainer.length - 10
                    }
                    createEmbeddedView(e, t, n) {
                        const i = e.createEmbeddedView(t || {});
                        return this.insert(i, n), i
                    }
                    createComponent(e, t, n, i, s) {
                        const r = n || this.parentInjector;
                        if (!s && null == e.ngModule && r) {
                            const e = r.get(Ye, null);
                            e && (s = e)
                        }
                        const o = e.create(r, i, void 0, s);
                        return this.insert(o.hostView, t), o
                    }
                    insert(e, t) {
                        const n = e._lView,
                            i = n[1];
                        if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                        if (this.allocateContainerIfNeeded(), yt(n[3])) {
                            const t = this.indexOf(e);
                            if (-1 !== t) this.detach(t);
                            else {
                                const t = n[3],
                                    i = new vr(t, t[6], t[3]);
                                i.detach(i.indexOf(e))
                            }
                        }
                        const s = this._adjustIndex(t),
                            r = this._lContainer;
                        ! function(e, t, n, i) {
                            const s = 10 + i,
                                r = n.length;
                            i > 0 && (n[s - 1][4] = t), i < r - 10 ? (t[4] = n[s], Qe(n, 10 + i, t)) : (n.push(t), t[4] = null), t[3] = n;
                            const o = t[17];
                            null !== o && n !== o && function(e, t) {
                                const n = e[9];
                                t[16] !== t[3][3][16] && (e[2] = !0), null === n ? e[9] = [t] : n.push(t)
                            }(o, t);
                            const a = t[19];
                            null !== a && a.insertView(e), t[2] |= 128
                        }(i, n, r, s);
                        const o = function e(t, n) {
                                const i = 10 + t + 1;
                                if (i < n.length) {
                                    const t = n[i],
                                        s = t[1].firstChild;
                                    if (null !== s) return function t(n, i) {
                                        if (null !== i) {
                                            const s = i.type;
                                            if (2 === s) return Lt(i, n);
                                            if (0 === s) return e(-1, n[i.index]);
                                            if (3 === s || 4 === s) {
                                                const s = i.child;
                                                if (null !== s) return t(n, s);
                                                {
                                                    const t = n[i.index];
                                                    return yt(t) ? e(-1, t) : Pt(t)
                                                }
                                            } {
                                                const e = n[16],
                                                    s = e[6],
                                                    r = Ki(e),
                                                    o = s.projection[i.projection];
                                                return null != o ? t(r, o) : t(n, i.next)
                                            }
                                        }
                                        return null
                                    }(t, s)
                                }
                                return n[7]
                            }(s, r),
                            a = n[11],
                            l = or(a, r[7]);
                        return null !== l && function(e, t, n, i, s, r) {
                            i[0] = s, i[6] = t, cr(e, i, n, 1, s, r)
                        }(i, r[6], a, n, l, o), e.attachToViewContainerRef(this), Qe(r[8], s, e), e
                    }
                    move(e, t) {
                        if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                        return this.insert(e, t)
                    }
                    indexOf(e) {
                        const t = this._lContainer[8];
                        return null !== t ? t.indexOf(e) : -1
                    }
                    remove(e) {
                        this.allocateContainerIfNeeded();
                        const t = this._adjustIndex(e, -1),
                            n = Js(this._lContainer, t);
                        n && (Ke(this._lContainer[8], t), er(n[1], n))
                    }
                    detach(e) {
                        this.allocateContainerIfNeeded();
                        const t = this._adjustIndex(e, -1),
                            n = Js(this._lContainer, t);
                        return n && null != Ke(this._lContainer[8], t) ? new fr(n) : null
                    }
                    _adjustIndex(e, t = 0) {
                        return null == e ? this.length + t : e
                    }
                    allocateContainerIfNeeded() {
                        null === this._lContainer[8] && (this._lContainer[8] = [])
                    }
                });
                const r = i[n.index];
                if (yt(r)) s = r;
                else {
                    let e;
                    if (3 === n.type) e = Pt(r);
                    else if (e = i[11].createComment(""), Et(i)) {
                        const t = i[11],
                            s = Lt(n, i);
                        ir(t, or(t, s), e, function(e, t) {
                            return Dt(e) ? e.nextSibling(t) : t.nextSibling
                        }(t, s))
                    } else lr(i[1], i, e, n);
                    i[n.index] = s = Fs(r, i, e, n), Bs(i, s)
                }
                return new vr(s, n, i)
            }
            let Cr = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = () => xr(), e
            })();
            const xr = function(e = !1) {
                    return function(e, t, n) {
                        if (!n && Ct(e)) {
                            const n = Vt(e.index, t);
                            return new fr(n, n)
                        }
                        return 2 === e.type || 0 === e.type || 3 === e.type || 4 === e.type ? new fr(t[16], t) : null
                    }(Qt(), Gt(), e)
                },
                Sr = new Oe("Set Injector scope."),
                Er = {},
                Tr = {},
                kr = [];
            let Ir = void 0;

            function Mr() {
                return void 0 === Ir && (Ir = new Ge), Ir
            }

            function Ar(e, t = null, n = null, i) {
                return new Rr(e, n, t || Mr(), i)
            }
            class Rr {
                constructor(e, t, n, i = null) {
                    this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                    const s = [];
                    t && Xe(t, n => this.processProvider(n, e, t)), Xe([e], e => this.processInjectorType(e, [], s)), this.records.set(Le, Nr(void 0, this));
                    const r = this.records.get(Sr);
                    this.scope = null != r ? r.value : null, this.source = i || ("object" == typeof e ? null : ve(e))
                }
                get destroyed() {
                    return this._destroyed
                }
                destroy() {
                    this.assertNotDestroyed(), this._destroyed = !0;
                    try {
                        this.onDestroy.forEach(e => e.ngOnDestroy())
                    } finally {
                        this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                    }
                }
                get(e, t = He, n = re.Default) {
                    this.assertNotDestroyed();
                    const i = ze(this);
                    try {
                        if (!(n & re.SkipSelf)) {
                            let t = this.records.get(e);
                            if (void 0 === t) {
                                const n = ("function" == typeof(s = e) || "object" == typeof s && s instanceof Oe) && ce(e);
                                t = n && this.injectableDefInScope(n) ? Nr(Dr(e), Er) : null, this.records.set(e, t)
                            }
                            if (null != t) return this.hydrate(e, t)
                        }
                        return (n & re.Self ? Mr() : this.parent).get(e, t = n & re.Optional && t === He ? null : t)
                    } catch (r) {
                        if ("NullInjectorError" === r.name) {
                            if ((r.ngTempTokenPath = r.ngTempTokenPath || []).unshift(ve(e)), i) throw r;
                            return function(e, t, n, i) {
                                const s = e.ngTempTokenPath;
                                throw t.__source && s.unshift(t.__source), e.message = function(e, t, n, i = null) {
                                    e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.substr(2) : e;
                                    let s = ve(t);
                                    if (Array.isArray(t)) s = t.map(ve).join(" -> ");
                                    else if ("object" == typeof t) {
                                        let e = [];
                                        for (let n in t)
                                            if (t.hasOwnProperty(n)) {
                                                let i = t[n];
                                                e.push(n + ":" + ("string" == typeof i ? JSON.stringify(i) : ve(i)))
                                            } s = `{${e.join(", ")}}`
                                    }
                                    return `${n}${i?"("+i+")":""}[${s}]: ${e.replace(Fe,"\n  ")}`
                                }("\n" + e.message, s, n, i), e.ngTokenPath = s, e.ngTempTokenPath = null, e
                            }(r, e, "R3InjectorError", this.source)
                        }
                        throw r
                    } finally {
                        ze(i)
                    }
                    var s
                }
                _resolveInjectorDefTypes() {
                    this.injectorDefTypes.forEach(e => this.get(e))
                }
                toString() {
                    const e = [];
                    return this.records.forEach((t, n) => e.push(ve(n))), `R3Injector[${e.join(", ")}]`
                }
                assertNotDestroyed() {
                    if (this._destroyed) throw new Error("Injector has already been destroyed.")
                }
                processInjectorType(e, t, n) {
                    if (!(e = Ce(e))) return !1;
                    let i = de(e);
                    const s = null == i && e.ngModule || void 0,
                        r = void 0 === s ? e : s,
                        o = -1 !== n.indexOf(r);
                    if (void 0 !== s && (i = de(s)), null == i) return !1;
                    if (null != i.imports && !o) {
                        let e;
                        n.push(r);
                        try {
                            Xe(i.imports, i => {
                                this.processInjectorType(i, t, n) && (void 0 === e && (e = []), e.push(i))
                            })
                        } finally {}
                        if (void 0 !== e)
                            for (let t = 0; t < e.length; t++) {
                                const {
                                    ngModule: n,
                                    providers: i
                                } = e[t];
                                Xe(i, e => this.processProvider(e, n, i || kr))
                            }
                    }
                    this.injectorDefTypes.add(r), this.records.set(r, Nr(i.factory, Er));
                    const a = i.providers;
                    if (null != a && !o) {
                        const t = e;
                        Xe(a, e => this.processProvider(e, t, a))
                    }
                    return void 0 !== s && void 0 !== e.providers
                }
                processProvider(e, t, n) {
                    let i = Or(e = Ce(e)) ? e : Ce(e && e.provide);
                    const s = function(e, t, n) {
                        return Pr(e) ? Nr(void 0, e.useValue) : Nr(function(e, t, n) {
                            let i = void 0;
                            if (Or(e)) {
                                const t = Ce(e);
                                return wt(t) || Dr(t)
                            }
                            if (Pr(e)) i = () => Ce(e.useValue);
                            else if ((s = e) && s.useFactory) i = () => e.useFactory(...qe(e.deps || []));
                            else if (function(e) {
                                    return !(!e || !e.useExisting)
                                }(e)) i = () => We(Ce(e.useExisting));
                            else {
                                const t = Ce(e && (e.useClass || e.provide));
                                if (! function(e) {
                                        return !!e.deps
                                    }(e)) return wt(t) || Dr(t);
                                i = () => new t(...qe(e.deps))
                            }
                            var s;
                            return i
                        }(e), Er)
                    }(e);
                    if (Or(e) || !0 !== e.multi) this.records.get(i);
                    else {
                        let t = this.records.get(i);
                        t || (t = Nr(void 0, Er, !0), t.factory = () => qe(t.multi), this.records.set(i, t)), i = e, t.multi.push(e)
                    }
                    this.records.set(i, s)
                }
                hydrate(e, t) {
                    var n;
                    return t.value === Er && (t.value = Tr, t.value = t.factory()), "object" == typeof t.value && t.value && null !== (n = t.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(t.value), t.value
                }
                injectableDefInScope(e) {
                    return !!e.providedIn && ("string" == typeof e.providedIn ? "any" === e.providedIn || e.providedIn === this.scope : this.injectorDefTypes.has(e.providedIn))
                }
            }

            function Dr(e) {
                const t = ce(e),
                    n = null !== t ? t.factory : wt(e);
                if (null !== n) return n;
                const i = de(e);
                if (null !== i) return i.factory;
                if (e instanceof Oe) throw new Error(`Token ${ve(e)} is missing a \u0275prov definition.`);
                if (e instanceof Function) return function(e) {
                    const t = e.length;
                    if (t > 0) {
                        const n = Je(t, "?");
                        throw new Error(`Can't resolve all parameters for ${ve(e)}: (${n.join(", ")}).`)
                    }
                    const n = function(e) {
                        const t = e && (e[pe] || e[me] || e[ge] && e[ge]());
                        if (t) {
                            const n = function(e) {
                                if (e.hasOwnProperty("name")) return e.name;
                                const t = ("" + e).match(/^function\s*([^\s(]+)/);
                                return null === t ? "" : t[1]
                            }(e);
                            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`), t
                        }
                        return null
                    }(e);
                    return null !== n ? () => n.factory(e) : () => new e
                }(e);
                throw new Error("unreachable")
            }

            function Nr(e, t, n = !1) {
                return {
                    factory: e,
                    value: t,
                    multi: n ? [] : void 0
                }
            }

            function Pr(e) {
                return null !== e && "object" == typeof e && Ve in e
            }

            function Or(e) {
                return "function" == typeof e
            }
            const Lr = function(e, t, n) {
                return function(e, t = null, n = null, i) {
                    const s = Ar(e, t, n, i);
                    return s._resolveInjectorDefTypes(), s
                }({
                    name: n
                }, t, e, n)
            };
            let Hr = (() => {
                class e {
                    static create(e, t) {
                        return Array.isArray(e) ? Lr(e, t, "") : Lr(e.providers, e.parent, e.name || "")
                    }
                }
                return e.THROW_IF_NOT_FOUND = He, e.NULL = new Ge, e.\u0275prov = le({
                    token: e,
                    providedIn: "any",
                    factory: () => We(Le)
                }), e.__NG_ELEMENT_ID__ = -1, e
            })();

            function Fr(e, t, n) {
                let i = n ? e.styles : null,
                    s = n ? e.classes : null,
                    r = 0;
                if (null !== t)
                    for (let o = 0; o < t.length; o++) {
                        const e = t[o];
                        "number" == typeof e ? r = e : 1 == r ? s = _e(s, e) : 2 == r && (i = _e(i, e + ": " + t[++o] + ";"))
                    }
                n ? e.styles = i : e.stylesWithoutHost = i, n ? e.classes = s : e.classesWithoutHost = s
            }

            function Vr(e, t) {
                const n = jt(e)[1],
                    i = n.data.length - 1;
                xn(n, {
                    directiveStart: i,
                    directiveEnd: i + 1
                })
            }

            function jr(e) {
                let t = Object.getPrototypeOf(e.type.prototype).constructor,
                    n = !0;
                const i = [e];
                for (; t;) {
                    let s = void 0;
                    if (St(e)) s = t.\u0275cmp || t.\u0275dir;
                    else {
                        if (t.\u0275cmp) throw new Error("Directives cannot inherit Components");
                        s = t.\u0275dir
                    }
                    if (s) {
                        if (n) {
                            i.push(s);
                            const t = e;
                            t.inputs = Br(e.inputs), t.declaredInputs = Br(e.declaredInputs), t.outputs = Br(e.outputs);
                            const n = s.hostBindings;
                            n && Ur(e, n);
                            const r = s.viewQuery,
                                o = s.contentQueries;
                            if (r && zr(e, r), o && $r(e, o), ae(e.inputs, s.inputs), ae(e.declaredInputs, s.declaredInputs), ae(e.outputs, s.outputs), St(s) && s.data.animation) {
                                const t = e.data;
                                t.animation = (t.animation || []).concat(s.data.animation)
                            }
                        }
                        const t = s.features;
                        if (t)
                            for (let i = 0; i < t.length; i++) {
                                const s = t[i];
                                s && s.ngInherit && s(e), s === jr && (n = !1)
                            }
                    }
                    t = Object.getPrototypeOf(t)
                }! function(e) {
                    let t = 0,
                        n = null;
                    for (let i = e.length - 1; i >= 0; i--) {
                        const s = e[i];
                        s.hostVars = t += s.hostVars, s.hostAttrs = Dn(s.hostAttrs, n = Dn(n, s.hostAttrs))
                    }
                }(i)
            }

            function Br(e) {
                return e === rt ? {} : e === ot ? [] : e
            }

            function zr(e, t) {
                const n = e.viewQuery;
                e.viewQuery = n ? (e, i) => {
                    t(e, i), n(e, i)
                } : t
            }

            function $r(e, t) {
                const n = e.contentQueries;
                e.contentQueries = n ? (e, i, s) => {
                    t(e, i, s), n(e, i, s)
                } : t
            }

            function Ur(e, t) {
                const n = e.hostBindings;
                e.hostBindings = n ? (e, i) => {
                    t(e, i), n(e, i)
                } : t
            }
            let Wr = null;

            function Zr() {
                if (!Wr) {
                    const e = ke.Symbol;
                    if (e && e.iterator) Wr = e.iterator;
                    else {
                        const e = Object.getOwnPropertyNames(Map.prototype);
                        for (let t = 0; t < e.length; ++t) {
                            const n = e[t];
                            "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (Wr = n)
                        }
                    }
                }
                return Wr
            }
            class qr {
                constructor(e) {
                    this.wrapped = e
                }
                static wrap(e) {
                    return new qr(e)
                }
                static unwrap(e) {
                    return qr.isWrapped(e) ? e.wrapped : e
                }
                static isWrapped(e) {
                    return e instanceof qr
                }
            }

            function Gr(e) {
                return !!Yr(e) && (Array.isArray(e) || !(e instanceof Map) && Zr() in e)
            }

            function Yr(e) {
                return null !== e && ("function" == typeof e || "object" == typeof e)
            }

            function Xr(e, t, n) {
                return e[t] = n
            }

            function Qr(e, t, n) {
                return !Object.is(e[t], n) && (e[t] = n, !0)
            }

            function Kr(e, t, n, i) {
                const s = Qr(e, t, n);
                return Qr(e, t + 1, i) || s
            }

            function Jr(e, t, n, i, s) {
                const r = Kr(e, t, n, i);
                return Qr(e, t + 2, s) || r
            }

            function eo(e, t, n, i, s, r) {
                const o = Kr(e, t, n, i);
                return Kr(e, t + 2, s, r) || o
            }

            function to(e, t, n, i) {
                return Qr(e, on(), n) ? t + Hn(n) + i : Qi
            }

            function no(e, t, n, i, s, r, o, a) {
                const l = Gt(),
                    u = Yt(),
                    c = e + 20,
                    h = u.firstCreatePass ? function(e, t, n, i, s, r, o, a, l) {
                        const u = t.consts,
                            c = ps(t, e, 0, o || null, $t(u, a));
                        Ts(t, n, c, $t(u, l)), xn(t, c);
                        const h = c.tViews = Cs(2, c, i, s, r, t.directiveRegistry, t.pipeRegistry, null, t.schemas, u);
                        return null !== t.queries && (t.queries.template(t, c), h.queries = t.queries.embeddedTView(c)), c
                    }(e, u, l, t, n, i, s, r, o) : u.data[c];
                Kt(h, !1);
                const d = l[11].createComment("");
                lr(u, l, d, h), Vi(d, l), Bs(l, l[c] = Fs(d, l, d, h)), xt(h) && _s(u, l, h), null != o && ys(l, h, a)
            }

            function io(e) {
                return Ft(Zt.lFrame.contextLView, e)
            }

            function so(e, t = re.Default) {
                const n = Gt();
                return null === n ? We(e, t) : Yn(Qt(), n, Ce(e), t)
            }

            function ro(e, t, n) {
                const i = Gt();
                return Qr(i, on(), t) && Es(Yt(), bn(), i, e, t, i[11], n, !1), ro
            }

            function oo(e, t, n, i, s) {
                const r = s ? "class" : "style";
                Ys(e, n, t.inputs[r], r, i)
            }

            function ao(e, t, n, i) {
                const s = Gt(),
                    r = Yt(),
                    o = 20 + e,
                    a = s[11],
                    l = s[o] = hs(t, a, Zt.lFrame.currentNamespace),
                    u = r.firstCreatePass ? function(e, t, n, i, s, r, o) {
                        const a = t.consts,
                            l = ps(t, e, 2, s, $t(a, r));
                        return Ts(t, n, l, $t(a, o)), null !== l.attrs && Fr(l, l.attrs, !1), null !== l.mergedAttrs && Fr(l, l.mergedAttrs, !0), null !== t.queries && t.queries.elementStart(t, l), l
                    }(e, r, s, 0, t, n, i) : r.data[o];
                Kt(u, !0);
                const c = u.mergedAttrs;
                null !== c && An(a, l, c);
                const h = u.classes;
                null !== h && pr(a, l, h);
                const d = u.styles;
                null !== d && dr(a, l, d), lr(r, s, l, u), 0 === Zt.lFrame.elementDepthCount && Vi(l, s), Zt.lFrame.elementDepthCount++, xt(u) && (_s(r, s, u), vs(r, u, s)), null !== i && ys(s, u)
            }

            function lo() {
                let e = Qt();
                Jt() ? en() : (e = e.parent, Kt(e, !1));
                const t = e;
                Zt.lFrame.elementDepthCount--;
                const n = Yt();
                n.firstCreatePass && (xn(n, e), bt(e) && n.queries.elementEnd(e)), null != t.classesWithoutHost && function(e) {
                    return 0 != (16 & e.flags)
                }(t) && oo(n, t, Gt(), t.classesWithoutHost, !0), null != t.stylesWithoutHost && function(e) {
                    return 0 != (32 & e.flags)
                }(t) && oo(n, t, Gt(), t.stylesWithoutHost, !1)
            }

            function uo(e, t, n, i) {
                ao(e, t, n, i), lo()
            }

            function co(e, t, n) {
                const i = Gt(),
                    s = Yt(),
                    r = e + 20,
                    o = s.firstCreatePass ? function(e, t, n, i, s) {
                        const r = t.consts,
                            o = $t(r, i),
                            a = ps(t, e, 3, "ng-container", o);
                        return null !== o && Fr(a, o, !0), Ts(t, n, a, $t(r, s)), null !== t.queries && t.queries.elementStart(t, a), a
                    }(e, s, i, t, n) : s.data[r];
                Kt(o, !0);
                const a = i[r] = i[11].createComment("");
                lr(s, i, a, o), Vi(a, i), xt(o) && (_s(s, i, o), vs(s, o, i)), null != n && ys(i, o)
            }

            function ho() {
                let e = Qt();
                const t = Yt();
                Jt() ? en() : (e = e.parent, Kt(e, !1)), t.firstCreatePass && (xn(t, e), bt(e) && t.queries.elementEnd(e))
            }

            function po() {
                return Gt()
            }

            function fo(e) {
                return !!e && "function" == typeof e.then
            }

            function go(e, t, n = !1, i) {
                const s = Gt(),
                    r = Yt(),
                    o = Qt();
                return function(e, t, n, i, s, r, o = !1, a) {
                    const l = xt(i),
                        u = e.firstCreatePass && (e.cleanup || (e.cleanup = [])),
                        c = qs(t);
                    let h = !0;
                    if (2 === i.type) {
                        const d = Lt(i, t),
                            p = a ? a(d) : rt,
                            f = p.target || d,
                            g = c.length,
                            m = a ? e => a(Pt(e[i.index])).target : i.index;
                        if (Dt(n)) {
                            let o = null;
                            if (!a && l && (o = function(e, t, n, i) {
                                    const s = e.cleanup;
                                    if (null != s)
                                        for (let r = 0; r < s.length - 1; r += 2) {
                                            const e = s[r];
                                            if (e === n && s[r + 1] === i) {
                                                const e = t[7],
                                                    n = s[r + 2];
                                                return e.length > n ? e[n] : null
                                            }
                                            "string" == typeof e && (r += 2)
                                        }
                                    return null
                                }(e, t, s, i.index)), null !== o)(o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = r, o.__ngLastListenerFn__ = r, h = !1;
                            else {
                                r = wo(i, t, r, !1);
                                const e = n.listen(p.name || f, s, r);
                                c.push(r, e), u && u.push(s, m, g, g + 1)
                            }
                        } else r = wo(i, t, r, !0), f.addEventListener(s, r, o), c.push(r), u && u.push(s, m, g, o)
                    }
                    const d = i.outputs;
                    let p;
                    if (h && null !== d && (p = d[s])) {
                        const e = p.length;
                        if (e)
                            for (let n = 0; n < e; n += 2) {
                                const e = t[p[n]][p[n + 1]].subscribe(r),
                                    o = c.length;
                                c.push(r, e), u && u.push(s, i.index, o, -(o + 1))
                            }
                    }
                }(r, s, s[11], o, e, t, n, i), go
            }

            function mo(e, t, n) {
                try {
                    return !1 !== t(n)
                } catch (i) {
                    return Gs(e, i), !1
                }
            }

            function wo(e, t, n, i) {
                return function s(r) {
                    if (r === Function) return n;
                    const o = 2 & e.flags ? Vt(e.index, t) : t;
                    0 == (32 & t[2]) && zs(o);
                    let a = mo(t, n, r),
                        l = s.__ngNextListenerFn__;
                    for (; l;) a = mo(t, l, r) && a, l = l.__ngNextListenerFn__;
                    return i && !1 === a && (r.preventDefault(), r.returnValue = !1), a
                }
            }

            function vo(e = 1) {
                return function(e) {
                    return (Zt.lFrame.contextLView = function(e, t) {
                        for (; e > 0;) t = t[15], e--;
                        return t
                    }(e, Zt.lFrame.contextLView))[8]
                }(e)
            }

            function _o(e, t) {
                let n = null;
                const i = function(e) {
                    const t = e.attrs;
                    if (null != t) {
                        const e = t.indexOf(5);
                        if (0 == (1 & e)) return t[e + 1]
                    }
                    return null
                }(e);
                for (let s = 0; s < t.length; s++) {
                    const r = t[s];
                    if ("*" !== r) {
                        if (null === i ? qi(e, r, !0) : Gi(i, r)) return s
                    } else n = s
                }
                return n
            }

            function yo(e) {
                const t = Gt()[16][6];
                if (!t.projection) {
                    const n = t.projection = Je(e ? e.length : 1, null),
                        i = n.slice();
                    let s = t.child;
                    for (; null !== s;) {
                        const t = e ? _o(s, e) : 0;
                        null !== t && (i[t] ? i[t].projectionNext = s : n[t] = s, i[t] = s), s = s.next
                    }
                }
            }

            function bo(e, t = 0, n) {
                const i = Gt(),
                    s = Yt(),
                    r = ps(s, e, 1, null, n || null);
                null === r.projection && (r.projection = t), en(),
                    function(e, t, n) {
                        hr(t[11], 0, t, n, nr(e, n, t), ar(n.parent || t[6], t))
                    }(s, i, r)
            }

            function Co(e, t, n) {
                return xo(e, "", t, "", n), Co
            }

            function xo(e, t, n, i, s) {
                const r = Gt(),
                    o = to(r, t, n, i);
                return o !== Qi && Es(Yt(), bn(), r, e, o, r[11], s, !1), xo
            }
            const So = [];

            function Eo(e, t, n, i, s) {
                const r = e[n + 1],
                    o = null === t;
                let a = i ? rs(r) : as(r),
                    l = !1;
                for (; 0 !== a && (!1 === l || o);) {
                    const n = e[a + 1];
                    To(e[a], t) && (l = !0, e[a + 1] = i ? us(n) : os(n)), a = i ? rs(n) : as(n)
                }
                l && (e[n + 1] = i ? os(r) : us(r))
            }

            function To(e, t) {
                return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && nt(e, t) >= 0
            }
            const ko = {
                textEnd: 0,
                key: 0,
                keyEnd: 0,
                value: 0,
                valueEnd: 0
            };

            function Io(e) {
                return e.substring(ko.key, ko.keyEnd)
            }

            function Mo(e) {
                return e.substring(ko.value, ko.valueEnd)
            }

            function Ao(e, t) {
                const n = ko.textEnd;
                return n === t ? -1 : (t = ko.keyEnd = function(e, t, n) {
                    for (; t < n && e.charCodeAt(t) > 32;) t++;
                    return t
                }(e, ko.key = t, n), No(e, t, n))
            }

            function Ro(e, t) {
                const n = ko.textEnd;
                let i = ko.key = No(e, t, n);
                return n === i ? -1 : (i = ko.keyEnd = function(e, t, n) {
                    let i;
                    for (; t < n && (45 === (i = e.charCodeAt(t)) || 95 === i || (-33 & i) >= 65 && (-33 & i) <= 90 || i >= 48 && i <= 57);) t++;
                    return t
                }(e, i, n), i = Po(e, i, n), i = ko.value = No(e, i, n), i = ko.valueEnd = function(e, t, n) {
                    let i = -1,
                        s = -1,
                        r = -1,
                        o = t,
                        a = o;
                    for (; o < n;) {
                        const l = e.charCodeAt(o++);
                        if (59 === l) return a;
                        34 === l || 39 === l ? a = o = Oo(e, l, o, n) : t === o - 4 && 85 === r && 82 === s && 76 === i && 40 === l ? a = o = Oo(e, 41, o, n) : l > 32 && (a = o), r = s, s = i, i = -33 & l
                    }
                    return a
                }(e, i, n), Po(e, i, n))
            }

            function Do(e) {
                ko.key = 0, ko.keyEnd = 0, ko.value = 0, ko.valueEnd = 0, ko.textEnd = e.length
            }

            function No(e, t, n) {
                for (; t < n && e.charCodeAt(t) <= 32;) t++;
                return t
            }

            function Po(e, t, n, i) {
                return (t = No(e, t, n)) < n && t++, t
            }

            function Oo(e, t, n, i) {
                let s = -1,
                    r = n;
                for (; r < i;) {
                    const n = e.charCodeAt(r++);
                    if (n == t && 92 !== s) return r;
                    s = 92 == n && 92 === s ? 0 : n
                }
                throw new Error
            }

            function Lo(e, t) {
                return function(e, t, n, i) {
                    const s = Gt(),
                        r = Yt(),
                        o = an(2);
                    r.firstUpdatePass && zo(r, e, o, true), t !== Qi && Qr(s, o, t) && Zo(r, r.data[_n() + 20], s, s[11], e, s[o + 1] = function(e, t) {
                        return null == e || "object" == typeof e && (e = ve(li(e))), e
                    }(t), true, o)
                }(e, t), Lo
            }

            function Ho(e) {
                jo(Wo, Fo, e, !1)
            }

            function Fo(e, t) {
                for (let n = function(e) {
                        return Do(e), Ro(e, No(e, 0, ko.textEnd))
                    }(t); n >= 0; n = Ro(t, n)) Wo(e, Io(t), Mo(t))
            }

            function Vo(e, t) {
                for (let n = function(e) {
                        return Do(e), Ao(e, No(e, 0, ko.textEnd))
                    }(t); n >= 0; n = Ao(t, n)) et(e, Io(t), !0)
            }

            function jo(e, t, n, i) {
                const s = Yt(),
                    r = an(2);
                s.firstUpdatePass && zo(s, null, r, i);
                const o = Gt();
                if (n !== Qi && Qr(o, r, n)) {
                    const a = s.data[_n() + 20];
                    if (Yo(a, i) && !Bo(s, r)) {
                        let e = i ? a.classesWithoutHost : a.stylesWithoutHost;
                        null !== e && (n = _e(e, n || "")), oo(s, a, o, n, i)
                    } else ! function(e, t, n, i, s, r, o, a) {
                        s === Qi && (s = So);
                        let l = 0,
                            u = 0,
                            c = 0 < s.length ? s[0] : null,
                            h = 0 < r.length ? r[0] : null;
                        for (; null !== c || null !== h;) {
                            const d = l < s.length ? s[l + 1] : void 0,
                                p = u < r.length ? r[u + 1] : void 0;
                            let f = null,
                                g = void 0;
                            c === h ? (l += 2, u += 2, d !== p && (f = h, g = p)) : null === h || null !== c && c < h ? (l += 2, f = c) : (u += 2, f = h, g = p), null !== f && Zo(e, t, n, i, f, g, o, a), c = l < s.length ? s[l] : null, h = u < r.length ? r[u] : null
                        }
                    }(s, a, o, o[11], o[r + 1], o[r + 1] = function(e, t, n) {
                        if (null == n || "" === n) return So;
                        const i = [],
                            s = li(n);
                        if (Array.isArray(s))
                            for (let r = 0; r < s.length; r++) e(i, s[r], !0);
                        else if ("object" == typeof s)
                            for (const r in s) s.hasOwnProperty(r) && e(i, r, s[r]);
                        else "string" == typeof s && t(i, s);
                        return i
                    }(e, t, n), i, r)
                }
            }

            function Bo(e, t) {
                return t >= e.expandoStartIndex
            }

            function zo(e, t, n, i) {
                const s = e.data;
                if (null === s[n + 1]) {
                    const r = s[_n() + 20],
                        o = Bo(e, n);
                    Yo(r, i) && null === t && !o && (t = !1), t = function(e, t, n, i) {
                            const s = function(e) {
                                const t = Zt.lFrame.currentDirectiveIndex;
                                return -1 === t ? null : e[t]
                            }(e);
                            let r = i ? t.residualClasses : t.residualStyles;
                            if (null === s) 0 === (i ? t.classBindings : t.styleBindings) && (n = Uo(n = $o(null, e, t, n, i), t.attrs, i), r = null);
                            else {
                                const o = t.directiveStylingLast;
                                if (-1 === o || e[o] !== s)
                                    if (n = $o(s, e, t, n, i), null === r) {
                                        let n = function(e, t, n) {
                                            const i = n ? t.classBindings : t.styleBindings;
                                            if (0 !== as(i)) return e[rs(i)]
                                        }(e, t, i);
                                        void 0 !== n && Array.isArray(n) && (n = $o(null, e, t, n[1], i), n = Uo(n, t.attrs, i), function(e, t, n, i) {
                                            e[rs(n ? t.classBindings : t.styleBindings)] = i
                                        }(e, t, i, n))
                                    } else r = function(e, t, n) {
                                        let i = void 0;
                                        const s = t.directiveEnd;
                                        for (let r = 1 + t.directiveStylingLast; r < s; r++) i = Uo(i, e[r].hostAttrs, n);
                                        return Uo(i, t.attrs, n)
                                    }(e, t, i)
                            }
                            return void 0 !== r && (i ? t.residualClasses = r : t.residualStyles = r), n
                        }(s, r, t, i),
                        function(e, t, n, i, s, r) {
                            let o = r ? t.classBindings : t.styleBindings,
                                a = rs(o),
                                l = as(o);
                            e[i] = n;
                            let u, c = !1;
                            if (Array.isArray(n)) {
                                const e = n;
                                u = e[1], (null === u || nt(e, u) > 0) && (c = !0)
                            } else u = n;
                            if (s)
                                if (0 !== l) {
                                    const t = rs(e[a + 1]);
                                    e[i + 1] = ss(t, a), 0 !== t && (e[t + 1] = ls(e[t + 1], i)), e[a + 1] = 131071 & e[a + 1] | i << 17
                                } else e[i + 1] = ss(a, 0), 0 !== a && (e[a + 1] = ls(e[a + 1], i)), a = i;
                            else e[i + 1] = ss(l, 0), 0 === a ? a = i : e[l + 1] = ls(e[l + 1], i), l = i;
                            c && (e[i + 1] = os(e[i + 1])), Eo(e, u, i, !0), Eo(e, u, i, !1),
                                function(e, t, n, i, s) {
                                    const r = s ? e.residualClasses : e.residualStyles;
                                    null != r && "string" == typeof t && nt(r, t) >= 0 && (n[i + 1] = us(n[i + 1]))
                                }(t, u, e, i, r), o = ss(a, l), r ? t.classBindings = o : t.styleBindings = o
                        }(s, r, t, n, o, i)
                }
            }

            function $o(e, t, n, i, s) {
                let r = null;
                const o = n.directiveEnd;
                let a = n.directiveStylingLast;
                for (-1 === a ? a = n.directiveStart : a++; a < o && (r = t[a], i = Uo(i, r.hostAttrs, s), r !== e);) a++;
                return null !== e && (n.directiveStylingLast = a), i
            }

            function Uo(e, t, n) {
                const i = n ? 1 : 2;
                let s = -1;
                if (null !== t)
                    for (let r = 0; r < t.length; r++) {
                        const o = t[r];
                        "number" == typeof o ? s = o : s === i && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]), et(e, o, !!n || t[++r]))
                    }
                return void 0 === e ? null : e
            }

            function Wo(e, t, n) {
                et(e, t, li(n))
            }

            function Zo(e, t, n, i, s, r, o, a) {
                if (2 !== t.type) return;
                const l = e.data,
                    u = l[a + 1];
                Go(1 == (1 & u) ? qo(l, t, n, s, as(u), o) : void 0) || (Go(r) || 2 == (2 & u) && (r = qo(l, null, n, s, a, o)), function(e, t, n, i, s) {
                    const r = Dt(e);
                    if (t) s ? r ? e.addClass(n, i) : n.classList.add(i) : r ? e.removeClass(n, i) : n.classList.remove(i);
                    else {
                        const t = -1 == i.indexOf("-") ? void 0 : 2;
                        null == s ? r ? e.removeStyle(n, i, t) : n.style.removeProperty(i) : r ? e.setStyle(n, i, s, t) : n.style.setProperty(i, s)
                    }
                }(i, o, Ot(_n(), n), s, r))
            }

            function qo(e, t, n, i, s, r) {
                const o = null === t;
                let a = void 0;
                for (; s > 0;) {
                    const t = e[s],
                        r = Array.isArray(t),
                        l = r ? t[1] : t,
                        u = null === l;
                    let c = n[s + 1];
                    c === Qi && (c = u ? So : void 0);
                    let h = u ? tt(c, i) : l === i ? c : void 0;
                    if (r && !Go(h) && (h = tt(t, i)), Go(h) && (a = h, o)) return a;
                    const d = e[s + 1];
                    s = o ? rs(d) : as(d)
                }
                if (null !== t) {
                    let e = r ? t.residualClasses : t.residualStyles;
                    null != e && (a = tt(e, i))
                }
                return a
            }

            function Go(e) {
                return void 0 !== e
            }

            function Yo(e, t) {
                return 0 != (e.flags & (t ? 16 : 32))
            }

            function Xo(e, t = "") {
                const n = Gt(),
                    i = Yt(),
                    s = e + 20,
                    r = i.firstCreatePass ? ps(i, e, 2, null, null) : i.data[s],
                    o = n[s] = function(e, t) {
                        return Dt(t) ? t.createText(e) : t.createTextNode(e)
                    }(t, n[11]);
                lr(i, n, o, r), Kt(r, !1)
            }

            function Qo(e) {
                return Ko("", e, ""), Qo
            }

            function Ko(e, t, n) {
                const i = Gt(),
                    s = to(i, e, t, n);
                return s !== Qi && Xs(i, _n(), s), Ko
            }

            function Jo(e, t, n, i, s, r, o) {
                const a = Gt(),
                    l = function(e, t, n, i, s, r, o, a) {
                        const l = Jr(e, rn(), n, s, o);
                        return an(3), l ? t + Hn(n) + i + Hn(s) + r + Hn(o) + a : Qi
                    }(a, e, t, n, i, s, r, o);
                return l !== Qi && Xs(a, _n(), l), Jo
            }

            function ea(e, t, n, i, s, r, o, a, l) {
                const u = Gt(),
                    c = function(e, t, n, i, s, r, o, a, l, u) {
                        const c = eo(e, rn(), n, s, o, l);
                        return an(4), c ? t + Hn(n) + i + Hn(s) + r + Hn(o) + a + Hn(l) + u : Qi
                    }(u, e, t, n, i, s, r, o, a, l);
                return c !== Qi && Xs(u, _n(), c), ea
            }

            function ta(e, t, n) {
                jo(et, Vo, to(Gt(), e, t, n), !0)
            }

            function na(e, t, n, i, s) {
                jo(et, Vo, function(e, t, n, i, s, r) {
                    const o = Kr(e, rn(), n, s);
                    return an(2), o ? t + Hn(n) + i + Hn(s) + r : Qi
                }(Gt(), e, t, n, i, s), !0)
            }
            class ia {}
            class sa {
                resolveComponentFactory(e) {
                    throw function(e) {
                        const t = Error(`No component factory found for ${ve(e)}. Did you add it to @NgModule.entryComponents?`);
                        return t.ngComponent = e, t
                    }(e)
                }
            }
            let ra = (() => {
                    class e {}
                    return e.NULL = new sa, e
                })(),
                oa = (() => {
                    class e {
                        constructor(e) {
                            this.nativeElement = e
                        }
                    }
                    return e.__NG_ELEMENT_ID__ = () => aa(e), e
                })();
            const aa = function(e) {
                return _r(e, Qt(), Gt())
            };
            class la {}
            var ua = function(e) {
                return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e
            }({});
            let ca = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = () => ha(), e
            })();
            const ha = function() {
                const e = Gt(),
                    t = Vt(Qt().index, e);
                return function(e) {
                    const t = e[11];
                    if (Dt(t)) return t;
                    throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
                }(_t(t) ? t : e)
            };
            let da = (() => {
                class e {}
                return e.\u0275prov = le({
                    token: e,
                    providedIn: "root",
                    factory: () => null
                }), e
            })();
            class pa {
                constructor(e) {
                    this.full = e, this.major = e.split(".")[0], this.minor = e.split(".")[1], this.patch = e.split(".").slice(2).join(".")
                }
            }
            const fa = new pa("10.1.6");
            class ga {
                constructor() {}
                supports(e) {
                    return Gr(e)
                }
                create(e) {
                    return new wa(e)
                }
            }
            const ma = (e, t) => t;
            class wa {
                constructor(e) {
                    this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || ma
                }
                forEachItem(e) {
                    let t;
                    for (t = this._itHead; null !== t; t = t._next) e(t)
                }
                forEachOperation(e) {
                    let t = this._itHead,
                        n = this._removalsHead,
                        i = 0,
                        s = null;
                    for (; t || n;) {
                        const r = !n || t && t.currentIndex < ba(n, i, s) ? t : n,
                            o = ba(r, i, s),
                            a = r.currentIndex;
                        if (r === n) i--, n = n._nextRemoved;
                        else if (t = t._next, null == r.previousIndex) i++;
                        else {
                            s || (s = []);
                            const e = o - i,
                                t = a - i;
                            if (e != t) {
                                for (let n = 0; n < e; n++) {
                                    const i = n < s.length ? s[n] : s[n] = 0,
                                        r = i + n;
                                    t <= r && r < e && (s[n] = i + 1)
                                }
                                s[r.previousIndex] = t - e
                            }
                        }
                        o !== a && e(r, o, a)
                    }
                }
                forEachPreviousItem(e) {
                    let t;
                    for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t)
                }
                forEachAddedItem(e) {
                    let t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                }
                forEachMovedItem(e) {
                    let t;
                    for (t = this._movesHead; null !== t; t = t._nextMoved) e(t)
                }
                forEachRemovedItem(e) {
                    let t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                }
                forEachIdentityChange(e) {
                    let t;
                    for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t)
                }
                diff(e) {
                    if (null == e && (e = []), !Gr(e)) throw new Error(`Error trying to diff '${ve(e)}'. Only arrays and iterables are allowed`);
                    return this.check(e) ? this : null
                }
                onDestroy() {}
                check(e) {
                    this._reset();
                    let t, n, i, s = this._itHead,
                        r = !1;
                    if (Array.isArray(e)) {
                        this.length = e.length;
                        for (let t = 0; t < this.length; t++) n = e[t], i = this._trackByFn(t, n), null !== s && Object.is(s.trackById, i) ? (r && (s = this._verifyReinsertion(s, n, i, t)), Object.is(s.item, n) || this._addIdentityChange(s, n)) : (s = this._mismatch(s, n, i, t), r = !0), s = s._next
                    } else t = 0,
                        function(e, t) {
                            if (Array.isArray(e))
                                for (let n = 0; n < e.length; n++) t(e[n]);
                            else {
                                const n = e[Zr()]();
                                let i;
                                for (; !(i = n.next()).done;) t(i.value)
                            }
                        }(e, e => {
                            i = this._trackByFn(t, e), null !== s && Object.is(s.trackById, i) ? (r && (s = this._verifyReinsertion(s, e, i, t)), Object.is(s.item, e) || this._addIdentityChange(s, e)) : (s = this._mismatch(s, e, i, t), r = !0), s = s._next, t++
                        }), this.length = t;
                    return this._truncate(s), this.collection = e, this.isDirty
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                }
                _reset() {
                    if (this.isDirty) {
                        let e;
                        for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                        for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                        for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = e._nextMoved) e.previousIndex = e.currentIndex;
                        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                    }
                }
                _mismatch(e, t, n, i) {
                    let s;
                    return null === e ? s = this._itTail : (s = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, i)) ? (Object.is(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, s, i)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Object.is(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, s, i)) : e = this._addAfter(new va(t, n), s, i), e
                }
                _verifyReinsertion(e, t, n, i) {
                    let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                    return null !== s ? e = this._reinsertAfter(s, e._prev, i) : e.currentIndex != i && (e.currentIndex = i, this._addToMoves(e, i)), e
                }
                _truncate(e) {
                    for (; null !== e;) {
                        const t = e._next;
                        this._addToRemovals(this._unlink(e)), e = t
                    }
                    null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                }
                _reinsertAfter(e, t, n) {
                    null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
                    const i = e._prevRemoved,
                        s = e._nextRemoved;
                    return null === i ? this._removalsHead = s : i._nextRemoved = s, null === s ? this._removalsTail = i : s._prevRemoved = i, this._insertAfter(e, t, n), this._addToMoves(e, n), e
                }
                _moveAfter(e, t, n) {
                    return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e
                }
                _addAfter(e, t, n) {
                    return this._insertAfter(e, t, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e
                }
                _insertAfter(e, t, n) {
                    const i = null === t ? this._itHead : t._next;
                    return e._next = i, e._prev = t, null === i ? this._itTail = e : i._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new ya), this._linkedRecords.put(e), e.currentIndex = n, e
                }
                _remove(e) {
                    return this._addToRemovals(this._unlink(e))
                }
                _unlink(e) {
                    null !== this._linkedRecords && this._linkedRecords.remove(e);
                    const t = e._prev,
                        n = e._next;
                    return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e
                }
                _addToMoves(e, t) {
                    return e.previousIndex === t || (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e), e
                }
                _addToRemovals(e) {
                    return null === this._unlinkedRecords && (this._unlinkedRecords = new ya), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
                }
                _addIdentityChange(e, t) {
                    return e.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e
                }
            }
            class va {
                constructor(e, t) {
                    this.item = e, this.trackById = t, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                }
            }
            class _a {
                constructor() {
                    this._head = null, this._tail = null
                }
                add(e) {
                    null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
                }
                get(e, t) {
                    let n;
                    for (n = this._head; null !== n; n = n._nextDup)
                        if ((null === t || t <= n.currentIndex) && Object.is(n.trackById, e)) return n;
                    return null
                }
                remove(e) {
                    const t = e._prevDup,
                        n = e._nextDup;
                    return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head
                }
            }
            class ya {
                constructor() {
                    this.map = new Map
                }
                put(e) {
                    const t = e.trackById;
                    let n = this.map.get(t);
                    n || (n = new _a, this.map.set(t, n)), n.add(e)
                }
                get(e, t) {
                    const n = this.map.get(e);
                    return n ? n.get(e, t) : null
                }
                remove(e) {
                    const t = e.trackById;
                    return this.map.get(t).remove(e) && this.map.delete(t), e
                }
                get isEmpty() {
                    return 0 === this.map.size
                }
                clear() {
                    this.map.clear()
                }
            }

            function ba(e, t, n) {
                const i = e.previousIndex;
                if (null === i) return i;
                let s = 0;
                return n && i < n.length && (s = n[i]), i + t + s
            }
            class Ca {
                constructor() {}
                supports(e) {
                    return e instanceof Map || Yr(e)
                }
                create() {
                    return new xa
                }
            }
            class xa {
                constructor() {
                    this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                }
                get isDirty() {
                    return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                }
                forEachItem(e) {
                    let t;
                    for (t = this._mapHead; null !== t; t = t._next) e(t)
                }
                forEachPreviousItem(e) {
                    let t;
                    for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t)
                }
                forEachChangedItem(e) {
                    let t;
                    for (t = this._changesHead; null !== t; t = t._nextChanged) e(t)
                }
                forEachAddedItem(e) {
                    let t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                }
                forEachRemovedItem(e) {
                    let t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                }
                diff(e) {
                    if (e) {
                        if (!(e instanceof Map || Yr(e))) throw new Error(`Error trying to diff '${ve(e)}'. Only maps and objects are allowed`)
                    } else e = new Map;
                    return this.check(e) ? this : null
                }
                onDestroy() {}
                check(e) {
                    this._reset();
                    let t = this._mapHead;
                    if (this._appendAfter = null, this._forEach(e, (e, n) => {
                            if (t && t.key === n) this._maybeAddToChanges(t, e), this._appendAfter = t, t = t._next;
                            else {
                                const i = this._getOrCreateRecordForKey(n, e);
                                t = this._insertBeforeOrAppend(t, i)
                            }
                        }), t) {
                        t._prev && (t._prev._next = null), this._removalsHead = t;
                        for (let e = t; null !== e; e = e._nextRemoved) e === this._mapHead && (this._mapHead = null), this._records.delete(e.key), e._nextRemoved = e._next, e.previousValue = e.currentValue, e.currentValue = null, e._prev = null, e._next = null
                    }
                    return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                }
                _insertBeforeOrAppend(e, t) {
                    if (e) {
                        const n = e._prev;
                        return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e
                    }
                    return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null
                }
                _getOrCreateRecordForKey(e, t) {
                    if (this._records.has(e)) {
                        const n = this._records.get(e);
                        this._maybeAddToChanges(n, t);
                        const i = n._prev,
                            s = n._next;
                        return i && (i._next = s), s && (s._prev = i), n._next = null, n._prev = null, n
                    }
                    const n = new Sa(e);
                    return this._records.set(e, n), n.currentValue = t, this._addToAdditions(n), n
                }
                _reset() {
                    if (this.isDirty) {
                        let e;
                        for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                        for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                        for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                    }
                }
                _maybeAddToChanges(e, t) {
                    Object.is(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e))
                }
                _addToAdditions(e) {
                    null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
                }
                _addToChanges(e) {
                    null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
                }
                _forEach(e, t) {
                    e instanceof Map ? e.forEach(t) : Object.keys(e).forEach(n => t(e[n], n))
                }
            }
            class Sa {
                constructor(e) {
                    this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                }
            }
            let Ea = (() => {
                    class e {
                        constructor(e) {
                            this.factories = e
                        }
                        static create(t, n) {
                            if (null != n) {
                                const e = n.factories.slice();
                                t = t.concat(e)
                            }
                            return new e(t)
                        }
                        static extend(t) {
                            return {
                                provide: e,
                                useFactory: n => {
                                    if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                    return e.create(t, n)
                                },
                                deps: [
                                    [e, new se, new ne]
                                ]
                            }
                        }
                        find(e) {
                            const t = this.factories.find(t => t.supports(e));
                            if (null != t) return t;
                            throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);
                            var n
                        }
                    }
                    return e.\u0275prov = le({
                        token: e,
                        providedIn: "root",
                        factory: () => new e([new ga])
                    }), e
                })(),
                Ta = (() => {
                    class e {
                        constructor(e) {
                            this.factories = e
                        }
                        static create(t, n) {
                            if (n) {
                                const e = n.factories.slice();
                                t = t.concat(e)
                            }
                            return new e(t)
                        }
                        static extend(t) {
                            return {
                                provide: e,
                                useFactory: n => {
                                    if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                    return e.create(t, n)
                                },
                                deps: [
                                    [e, new se, new ne]
                                ]
                            }
                        }
                        find(e) {
                            const t = this.factories.find(t => t.supports(e));
                            if (t) return t;
                            throw new Error(`Cannot find a differ supporting object '${e}'`)
                        }
                    }
                    return e.\u0275prov = le({
                        token: e,
                        providedIn: "root",
                        factory: () => new e([new Ca])
                    }), e
                })();
            const ka = [new Ca],
                Ia = new Ea([new ga]),
                Ma = new Ta(ka);
            let Aa = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = () => Ra(e, oa), e
            })();
            const Ra = function(e, t) {
                return yr(e, t, Qt(), Gt())
            };
            let Da = (() => {
                class e {}
                return e.__NG_ELEMENT_ID__ = () => Na(e, oa), e
            })();
            const Na = function(e, t) {
                    return br(e, t, Qt(), Gt())
                },
                Pa = {};
            class Oa extends ra {
                constructor(e) {
                    super(), this.ngModule = e
                }
                resolveComponentFactory(e) {
                    const t = mt(e);
                    return new Fa(t, this.ngModule)
                }
            }

            function La(e) {
                const t = [];
                for (let n in e) e.hasOwnProperty(n) && t.push({
                    propName: e[n],
                    templateName: n
                });
                return t
            }
            const Ha = new Oe("SCHEDULER_TOKEN", {
                providedIn: "root",
                factory: () => Vn
            });
            class Fa extends ia {
                constructor(e, t) {
                    super(), this.componentDef = e, this.ngModule = t, this.componentType = e.type, this.selector = e.selectors.map(Xi).join(","), this.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], this.isBoundToModule = !!t
                }
                get inputs() {
                    return La(this.componentDef.inputs)
                }
                get outputs() {
                    return La(this.componentDef.outputs)
                }
                create(e, t, n, i) {
                    const s = (i = i || this.ngModule) ? function(e, t) {
                            return {
                                get: (n, i, s) => {
                                    const r = e.get(n, Pa, s);
                                    return r !== Pa || i === Pa ? r : t.get(n, i, s)
                                }
                            }
                        }(e, i.injector) : e,
                        r = s.get(la, Nt),
                        o = s.get(da, null),
                        a = r.createRenderer(null, this.componentDef),
                        l = this.componentDef.selectors[0][0] || "div",
                        u = n ? function(e, t, n) {
                            if (Dt(e)) return e.selectRootElement(t, n === st.ShadowDom);
                            let i = "string" == typeof t ? e.querySelector(t) : t;
                            return i.textContent = "", i
                        }(a, n, this.componentDef.encapsulation) : hs(l, r.createRenderer(null, this.componentDef), function(e) {
                            const t = e.toLowerCase();
                            return "svg" === t ? "http://www.w3.org/2000/svg" : "math" === t ? "http://www.w3.org/1998/MathML/" : null
                        }(l)),
                        c = this.componentDef.onPush ? 576 : 528,
                        h = {
                            components: [],
                            scheduler: Vn,
                            clean: Zs,
                            playerHandler: null,
                            flags: 0
                        },
                        d = Cs(0, null, null, 1, 0, null, null, null, null, null),
                        p = ds(null, d, h, c, null, null, r, a, o, s);
                    let f, g;
                    pn(p);
                    try {
                        const e = function(e, t, n, i, s, r) {
                            const o = n[1];
                            n[20] = e;
                            const a = ps(o, 0, 2, null, null),
                                l = a.mergedAttrs = t.hostAttrs;
                            null !== l && (Fr(a, l, !0), null !== e && (An(s, e, l), null !== a.classes && pr(s, e, a.classes), null !== a.styles && dr(s, e, a.styles)));
                            const u = i.createRenderer(e, t),
                                c = ds(n, bs(t), null, t.onPush ? 64 : 16, n[20], a, i, u, null, null);
                            return o.firstCreatePass && (Gn(Un(a, n), o, t.type), Rs(o, a), Ns(a, n.length, 1)), Bs(n, c), n[20] = c
                        }(u, this.componentDef, p, r, a);
                        if (u)
                            if (n) An(a, u, ["ng-version", fa.full]);
                            else {
                                const {
                                    attrs: e,
                                    classes: t
                                } = function(e) {
                                    const t = [],
                                        n = [];
                                    let i = 1,
                                        s = 2;
                                    for (; i < e.length;) {
                                        let r = e[i];
                                        if ("string" == typeof r) 2 === s ? "" !== r && t.push(r, e[++i]) : 8 === s && n.push(r);
                                        else {
                                            if (!Wi(s)) break;
                                            s = r
                                        }
                                        i++
                                    }
                                    return {
                                        attrs: t,
                                        classes: n
                                    }
                                }(this.componentDef.selectors[0]);
                                e && An(a, u, e), t && t.length > 0 && pr(a, u, t.join(" "))
                            } if (g = Ht(d, 0), void 0 !== t) {
                            const e = g.projection = [];
                            for (let n = 0; n < this.ngContentSelectors.length; n++) {
                                const i = t[n];
                                e.push(null != i ? Array.from(i) : null)
                            }
                        }
                        f = function(e, t, n, i, s) {
                            const r = n[1],
                                o = function(e, t, n) {
                                    const i = Qt();
                                    e.firstCreatePass && (n.providersResolver && n.providersResolver(n), As(e, i, 1), Ps(e, t, n));
                                    const s = Jn(t, e, t.length - 1, i);
                                    Vi(s, t);
                                    const r = Lt(i, t);
                                    return r && Vi(r, t), s
                                }(r, n, t);
                            i.components.push(o), e[8] = o, s && s.forEach(e => e(o, t)), t.contentQueries && t.contentQueries(1, o, n.length - 1);
                            const a = Qt();
                            if (r.firstCreatePass && (null !== t.hostBindings || null !== t.hostAttrs)) {
                                yn(a.index - 20);
                                const e = n[1];
                                ks(e, t), Is(e, n, t.hostVars), Ms(t, o)
                            }
                            return o
                        }(e, this.componentDef, p, h, [Vr]), fs(d, p, null)
                    } finally {
                        vn()
                    }
                    return new Va(this.componentType, f, _r(oa, g, p), p, g)
                }
            }
            class Va extends class {} {
                constructor(e, t, n, i, s) {
                    super(), this.location = n, this._rootLView = i, this._tNode = s, this.destroyCbs = [], this.instance = t, this.hostView = this.changeDetectorRef = new gr(i), this.componentType = e
                }
                get injector() {
                    return new ni(this._tNode, this._rootLView)
                }
                destroy() {
                    this.destroyCbs && (this.destroyCbs.forEach(e => e()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
                }
                onDestroy(e) {
                    this.destroyCbs && this.destroyCbs.push(e)
                }
            }
            const ja = void 0;
            var Ba = ["en", [
                    ["a", "p"],
                    ["AM", "PM"], ja
                ],
                [
                    ["AM", "PM"], ja, ja
                ],
                [
                    ["S", "M", "T", "W", "T", "F", "S"],
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                ], ja, [
                    ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                ], ja, [
                    ["B", "A"],
                    ["BC", "AD"],
                    ["Before Christ", "Anno Domini"]
                ], 0, [6, 0],
                ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                ["{1}, {0}", ja, "{1} 'at' {0}", ja],
                [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
                function(e) {
                    let t = Math.floor(Math.abs(e)),
                        n = e.toString().replace(/^[^.]*\.?/, "").length;
                    return 1 === t && 0 === n ? 1 : 5
                }
            ];
            let za = {};

            function $a(e) {
                const t = function(e) {
                    return e.toLowerCase().replace(/_/g, "-")
                }(e);
                let n = Ua(t);
                if (n) return n;
                const i = t.split("-")[0];
                if (n = Ua(i), n) return n;
                if ("en" === i) return Ba;
                throw new Error(`Missing locale data for the locale "${e}".`)
            }

            function Ua(e) {
                return e in za || (za[e] = ke.ng && ke.ng.common && ke.ng.common.locales && ke.ng.common.locales[e]), za[e]
            }
            var Wa = function(e) {
                return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e
            }({});
            let Za = "en-US";

            function qa(e) {
                var t, n;
                n = "Expected localeId to be defined", null == (t = e) && function(e, t, n, i) {
                    throw new Error("ASSERTION ERROR: " + e + ` [Expected=> null != ${t} <=Actual]`)
                }(n, t), "string" == typeof e && (Za = e.toLowerCase().replace(/_/g, "-"))
            }
            const Ga = new Map;
            class Ya extends Ye {
                constructor(e, t) {
                    super(), this._parent = t, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new Oa(this);
                    const n = vt(e),
                        i = e[De] || null;
                    i && qa(i), this._bootstrapComponents = jn(n.bootstrap), this._r3Injector = Ar(e, t, [{
                        provide: Ye,
                        useValue: this
                    }, {
                        provide: ra,
                        useValue: this.componentFactoryResolver
                    }], ve(e)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(e)
                }
                get(e, t = Hr.THROW_IF_NOT_FOUND, n = re.Default) {
                    return e === Hr || e === Ye || e === Le ? this : this._r3Injector.get(e, t, n)
                }
                destroy() {
                    const e = this._r3Injector;
                    !e.destroyed && e.destroy(), this.destroyCbs.forEach(e => e()), this.destroyCbs = null
                }
                onDestroy(e) {
                    this.destroyCbs.push(e)
                }
            }
            class Xa extends class {} {
                constructor(e) {
                    super(), this.moduleType = e, null !== vt(e) && function e(t) {
                        if (null !== t.\u0275mod.id) {
                            const e = t.\u0275mod.id;
                            (function(e, t, n) {
                                if (t && t !== n) throw new Error(`Duplicate module registered for ${e} - ${ve(t)} vs ${ve(t.name)}`)
                            })(e, Ga.get(e), t), Ga.set(e, t)
                        }
                        let n = t.\u0275mod.imports;
                        n instanceof Function && (n = n()), n && n.forEach(t => e(t))
                    }(e)
                }
                create(e) {
                    return new Ya(this.moduleType, e)
                }
            }

            function Qa(e, t, n) {
                const i = sn() + e,
                    s = Gt();
                return s[i] === Qi ? Xr(s, i, n ? t.call(n) : t()) : function(e, t) {
                    return e[t]
                }(s, i)
            }

            function Ka(e, t, n, i) {
                return el(Gt(), sn(), e, t, n, i)
            }

            function Ja(e, t) {
                const n = e[t];
                return n === Qi ? void 0 : n
            }

            function el(e, t, n, i, s, r) {
                const o = t + n;
                return Qr(e, o, s) ? Xr(e, o + 1, r ? i.call(r, s) : i(s)) : Ja(e, o + 1)
            }

            function tl(e, t) {
                const n = Yt();
                let i;
                const s = e + 20;
                n.firstCreatePass ? (i = function(e, t) {
                    if (t)
                        for (let n = t.length - 1; n >= 0; n--) {
                            const i = t[n];
                            if (e === i.name) return i
                        }
                    throw new Error(`The pipe '${e}' could not be found!`)
                }(t, n.pipeRegistry), n.data[s] = i, i.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, i.onDestroy)) : i = n.data[s];
                const r = i.factory || (i.factory = wt(i.type)),
                    o = $e(so);
                try {
                    const t = zn(!1),
                        i = r();
                    return zn(t),
                        function(e, t, n, i) {
                            const s = n + 20;
                            s >= e.data.length && (e.data[s] = null, e.blueprint[s] = null), t[s] = i
                        }(n, Gt(), e, i), i
                } finally {
                    $e(o)
                }
            }

            function nl(e, t, n) {
                const i = Gt(),
                    s = Ft(i, e);
                return rl(i, sl(i, e) ? el(i, sn(), t, s.transform, n, s) : s.transform(n))
            }

            function il(e, t, n, i) {
                const s = Gt(),
                    r = Ft(s, e);
                return rl(s, sl(s, e) ? function(e, t, n, i, s, r, o) {
                    const a = t + n;
                    return Kr(e, a, s, r) ? Xr(e, a + 2, o ? i.call(o, s, r) : i(s, r)) : Ja(e, a + 2)
                }(s, sn(), t, r.transform, n, i, r) : r.transform(n, i))
            }

            function sl(e, t) {
                return e[1].data[t + 20].pure
            }

            function rl(e, t) {
                return qr.isWrapped(t) && (t = qr.unwrap(t), e[rn()] = Qi), t
            }
            const ol = class extends x {
                constructor(e = !1) {
                    super(), this.__isAsync = e
                }
                emit(e) {
                    super.next(e)
                }
                subscribe(e, t, n) {
                    let i, s = e => null,
                        r = () => null;
                    e && "object" == typeof e ? (i = this.__isAsync ? t => {
                        setTimeout(() => e.next(t))
                    } : t => {
                        e.next(t)
                    }, e.error && (s = this.__isAsync ? t => {
                        setTimeout(() => e.error(t))
                    } : t => {
                        e.error(t)
                    }), e.complete && (r = this.__isAsync ? () => {
                        setTimeout(() => e.complete())
                    } : () => {
                        e.complete()
                    })) : (i = this.__isAsync ? t => {
                        setTimeout(() => e(t))
                    } : t => {
                        e(t)
                    }, t && (s = this.__isAsync ? e => {
                        setTimeout(() => t(e))
                    } : e => {
                        t(e)
                    }), n && (r = this.__isAsync ? () => {
                        setTimeout(() => n())
                    } : () => {
                        n()
                    }));
                    const o = super.subscribe(i, s, r);
                    return e instanceof h && e.add(o), o
                }
            };

            function al() {
                return this._results[Zr()]()
            }
            class ll {
                constructor() {
                    this.dirty = !0, this._results = [], this.changes = new ol, this.length = 0;
                    const e = Zr(),
                        t = ll.prototype;
                    t[e] || (t[e] = al)
                }
                map(e) {
                    return this._results.map(e)
                }
                filter(e) {
                    return this._results.filter(e)
                }
                find(e) {
                    return this._results.find(e)
                }
                reduce(e, t) {
                    return this._results.reduce(e, t)
                }
                forEach(e) {
                    this._results.forEach(e)
                }
                some(e) {
                    return this._results.some(e)
                }
                toArray() {
                    return this._results.slice()
                }
                toString() {
                    return this._results.toString()
                }
                reset(e) {
                    this._results = function e(t, n) {
                        void 0 === n && (n = t);
                        for (let i = 0; i < t.length; i++) {
                            let s = t[i];
                            Array.isArray(s) ? (n === t && (n = t.slice(0, i)), e(s, n)) : n !== t && n.push(s)
                        }
                        return n
                    }(e), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
                }
                notifyOnChanges() {
                    this.changes.emit(this)
                }
                setDirty() {
                    this.dirty = !0
                }
                destroy() {
                    this.changes.complete(), this.changes.unsubscribe()
                }
            }
            class ul {
                constructor(e) {
                    this.queryList = e, this.matches = null
                }
                clone() {
                    return new ul(this.queryList)
                }
                setDirty() {
                    this.queryList.setDirty()
                }
            }
            class cl {
                constructor(e = []) {
                    this.queries = e
                }
                createEmbeddedView(e) {
                    const t = e.queries;
                    if (null !== t) {
                        const n = null !== e.contentQueries ? e.contentQueries[0] : t.length,
                            i = [];
                        for (let e = 0; e < n; e++) {
                            const n = t.getByIndex(e);
                            i.push(this.queries[n.indexInDeclarationView].clone())
                        }
                        return new cl(i)
                    }
                    return null
                }
                insertView(e) {
                    this.dirtyQueriesWithMatches(e)
                }
                detachView(e) {
                    this.dirtyQueriesWithMatches(e)
                }
                dirtyQueriesWithMatches(e) {
                    for (let t = 0; t < this.queries.length; t++) null !== Sl(e, t).matches && this.queries[t].setDirty()
                }
            }
            class hl {
                constructor(e, t, n, i = null) {
                    this.predicate = e, this.descendants = t, this.isStatic = n, this.read = i
                }
            }
            class dl {
                constructor(e = []) {
                    this.queries = e
                }
                elementStart(e, t) {
                    for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(e, t)
                }
                elementEnd(e) {
                    for (let t = 0; t < this.queries.length; t++) this.queries[t].elementEnd(e)
                }
                embeddedTView(e) {
                    let t = null;
                    for (let n = 0; n < this.length; n++) {
                        const i = null !== t ? t.length : 0,
                            s = this.getByIndex(n).embeddedTView(e, i);
                        s && (s.indexInDeclarationView = n, null !== t ? t.push(s) : t = [s])
                    }
                    return null !== t ? new dl(t) : null
                }
                template(e, t) {
                    for (let n = 0; n < this.queries.length; n++) this.queries[n].template(e, t)
                }
                getByIndex(e) {
                    return this.queries[e]
                }
                get length() {
                    return this.queries.length
                }
                track(e) {
                    this.queries.push(e)
                }
            }
            class pl {
                constructor(e, t = -1) {
                    this.metadata = e, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = t
                }
                elementStart(e, t) {
                    this.isApplyingToNode(t) && this.matchTNode(e, t)
                }
                elementEnd(e) {
                    this._declarationNodeIndex === e.index && (this._appliesToNextNode = !1)
                }
                template(e, t) {
                    this.elementStart(e, t)
                }
                embeddedTView(e, t) {
                    return this.isApplyingToNode(e) ? (this.crossesNgTemplate = !0, this.addMatch(-e.index, t), new pl(this.metadata)) : null
                }
                isApplyingToNode(e) {
                    if (this._appliesToNextNode && !1 === this.metadata.descendants) {
                        const t = this._declarationNodeIndex;
                        let n = e.parent;
                        for (; null !== n && 3 === n.type && n.index !== t;) n = n.parent;
                        return t === (null !== n ? n.index : -1)
                    }
                    return this._appliesToNextNode
                }
                matchTNode(e, t) {
                    const n = this.metadata.predicate;
                    if (Array.isArray(n))
                        for (let i = 0; i < n.length; i++) {
                            const s = n[i];
                            this.matchTNodeWithReadOption(e, t, fl(t, s)), this.matchTNodeWithReadOption(e, t, Kn(t, e, s, !1, !1))
                        } else n === Aa ? 0 === t.type && this.matchTNodeWithReadOption(e, t, -1) : this.matchTNodeWithReadOption(e, t, Kn(t, e, n, !1, !1))
                }
                matchTNodeWithReadOption(e, t, n) {
                    if (null !== n) {
                        const i = this.metadata.read;
                        if (null !== i)
                            if (i === oa || i === Da || i === Aa && 0 === t.type) this.addMatch(t.index, -2);
                            else {
                                const n = Kn(t, e, i, !1, !1);
                                null !== n && this.addMatch(t.index, n)
                            }
                        else this.addMatch(t.index, n)
                    }
                }
                addMatch(e, t) {
                    null === this.matches ? this.matches = [e, t] : this.matches.push(e, t)
                }
            }

            function fl(e, t) {
                const n = e.localNames;
                if (null !== n)
                    for (let i = 0; i < n.length; i += 2)
                        if (n[i] === t) return n[i + 1];
                return null
            }

            function gl(e, t, n, i) {
                return -1 === n ? function(e, t) {
                    return 2 === e.type || 3 === e.type ? _r(oa, e, t) : 0 === e.type ? yr(Aa, oa, e, t) : null
                }(t, e) : -2 === n ? function(e, t, n) {
                    return n === oa ? _r(oa, t, e) : n === Aa ? yr(Aa, oa, t, e) : n === Da ? br(Da, oa, t, e) : void 0
                }(e, t, i) : Jn(e, e[1], n, t)
            }

            function ml(e, t, n, i) {
                const s = t[19].queries[i];
                if (null === s.matches) {
                    const i = e.data,
                        r = n.matches,
                        o = [];
                    for (let e = 0; e < r.length; e += 2) {
                        const s = r[e];
                        o.push(s < 0 ? null : gl(t, i[s], r[e + 1], n.metadata.read))
                    }
                    s.matches = o
                }
                return s.matches
            }

            function wl(e) {
                const t = Gt(),
                    n = Yt(),
                    i = cn();
                hn(i + 1);
                const s = Sl(n, i);
                if (e.dirty && Bt(t) === s.metadata.isStatic) {
                    if (null === s.matches) e.reset([]);
                    else {
                        const r = s.crossesNgTemplate ? function e(t, n, i, s) {
                            const r = t.queries.getByIndex(i),
                                o = r.matches;
                            if (null !== o) {
                                const a = ml(t, n, r, i);
                                for (let t = 0; t < o.length; t += 2) {
                                    const i = o[t];
                                    if (i > 0) s.push(a[t / 2]);
                                    else {
                                        const r = o[t + 1],
                                            a = n[-i];
                                        for (let t = 10; t < a.length; t++) {
                                            const n = a[t];
                                            n[17] === n[3] && e(n[1], n, r, s)
                                        }
                                        if (null !== a[9]) {
                                            const t = a[9];
                                            for (let n = 0; n < t.length; n++) {
                                                const i = t[n];
                                                e(i[1], i, r, s)
                                            }
                                        }
                                    }
                                }
                            }
                            return s
                        }(n, t, i, []) : ml(n, t, s, i);
                        e.reset(r), e.notifyOnChanges()
                    }
                    return !0
                }
                return !1
            }

            function vl(e, t, n) {
                _l(Yt(), Gt(), e, t, n, !0)
            }

            function _l(e, t, n, i, s, r) {
                e.firstCreatePass && (xl(e, new hl(n, i, r, s), -1), r && (e.staticViewQueries = !0)), Cl(e, t)
            }

            function yl(e, t, n, i) {
                ! function(e, t, n, i, s, r, o, a) {
                    e.firstCreatePass && (xl(e, new hl(n, i, false, s), o.index), function(e, t) {
                        const n = e.contentQueries || (e.contentQueries = []);
                        t !== (e.contentQueries.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t)
                    }(e, a)), Cl(e, t)
                }(Yt(), Gt(), t, n, i, 0, Qt(), e)
            }

            function bl() {
                return e = Gt(), t = cn(), e[19].queries[t].queryList;
                var e, t
            }

            function Cl(e, t) {
                const n = new ll;
                xs(e, t, n, n.destroy), null === t[19] && (t[19] = new cl), t[19].queries.push(new ul(n))
            }

            function xl(e, t, n) {
                null === e.queries && (e.queries = new dl), e.queries.track(new pl(t, n))
            }

            function Sl(e, t) {
                return e.queries.getByIndex(t)
            }

            function El(e, t) {
                return yr(Aa, oa, e, t)
            }
            const Tl = new Oe("Application Initializer");
            let kl = (() => {
                class e {
                    constructor(e) {
                        this.appInits = e, this.initialized = !1, this.done = !1, this.donePromise = new Promise((e, t) => {
                            this.resolve = e, this.reject = t
                        })
                    }
                    runInitializers() {
                        if (this.initialized) return;
                        const e = [],
                            t = () => {
                                this.done = !0, this.resolve()
                            };
                        if (this.appInits)
                            for (let n = 0; n < this.appInits.length; n++) {
                                const t = this.appInits[n]();
                                fo(t) && e.push(t)
                            }
                        Promise.all(e).then(() => {
                            t()
                        }).catch(e => {
                            this.reject(e)
                        }), 0 === e.length && t(), this.initialized = !0
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(We(Tl, 8))
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const Il = new Oe("AppId"),
                Ml = {
                    provide: Il,
                    useFactory: function() {
                        return `${Al()}${Al()}${Al()}`
                    },
                    deps: []
                };

            function Al() {
                return String.fromCharCode(97 + Math.floor(25 * Math.random()))
            }
            const Rl = new Oe("Platform Initializer"),
                Dl = new Oe("Platform ID"),
                Nl = new Oe("appBootstrapListener");
            let Pl = (() => {
                class e {
                    log(e) {
                        console.log(e)
                    }
                    warn(e) {
                        console.warn(e)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const Ol = new Oe("LocaleId"),
                Ll = new Oe("DefaultCurrencyCode");
            class Hl {
                constructor(e, t) {
                    this.ngModuleFactory = e, this.componentFactories = t
                }
            }
            const Fl = function(e) {
                    return new Xa(e)
                },
                Vl = Fl,
                jl = function(e) {
                    return Promise.resolve(Fl(e))
                },
                Bl = function(e) {
                    const t = Fl(e),
                        n = jn(vt(e).declarations).reduce((e, t) => {
                            const n = mt(t);
                            return n && e.push(new Fa(n)), e
                        }, []);
                    return new Hl(t, n)
                },
                zl = Bl,
                $l = function(e) {
                    return Promise.resolve(Bl(e))
                };
            let Ul = (() => {
                class e {
                    constructor() {
                        this.compileModuleSync = Vl, this.compileModuleAsync = jl, this.compileModuleAndAllComponentsSync = zl, this.compileModuleAndAllComponentsAsync = $l
                    }
                    clearCache() {}
                    clearCacheFor(e) {}
                    getModuleId(e) {}
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const Wl = (() => Promise.resolve(0))();

            function Zl(e) {
                "undefined" == typeof Zone ? Wl.then(() => {
                    e && e.apply(null, null)
                }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
            }
            class ql {
                constructor({
                    enableLongStackTrace: e = !1,
                    shouldCoalesceEventChangeDetection: t = !1
                }) {
                    if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ol(!1), this.onMicrotaskEmpty = new ol(!1), this.onStable = new ol(!1), this.onError = new ol(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                    Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), e && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = t, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function() {
                            let e = ke.requestAnimationFrame,
                                t = ke.cancelAnimationFrame;
                            if ("undefined" != typeof Zone && e && t) {
                                const n = e[Zone.__symbol__("OriginalDelegate")];
                                n && (e = n);
                                const i = t[Zone.__symbol__("OriginalDelegate")];
                                i && (t = i)
                            }
                            return {
                                nativeRequestAnimationFrame: e,
                                nativeCancelAnimationFrame: t
                            }
                        }().nativeRequestAnimationFrame,
                        function(e) {
                            const t = !!e.shouldCoalesceEventChangeDetection && e.nativeRequestAnimationFrame && (() => {
                                ! function(e) {
                                    -1 === e.lastRequestAnimationFrameId && (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(ke, () => {
                                        e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                                            e.lastRequestAnimationFrameId = -1, Ql(e), Xl(e)
                                        }, void 0, () => {}, () => {})), e.fakeTopEventTask.invoke()
                                    }), Ql(e))
                                }(e)
                            });
                            e._inner = e._inner.fork({
                                name: "angular",
                                properties: {
                                    isAngularZone: !0,
                                    maybeDelayChangeDetection: t
                                },
                                onInvokeTask: (n, i, s, r, o, a) => {
                                    try {
                                        return Kl(e), n.invokeTask(s, r, o, a)
                                    } finally {
                                        t && "eventTask" === r.type && t(), Jl(e)
                                    }
                                },
                                onInvoke: (t, n, i, s, r, o, a) => {
                                    try {
                                        return Kl(e), t.invoke(i, s, r, o, a)
                                    } finally {
                                        Jl(e)
                                    }
                                },
                                onHasTask: (t, n, i, s) => {
                                    t.hasTask(i, s), n === i && ("microTask" == s.change ? (e._hasPendingMicrotasks = s.microTask, Ql(e), Xl(e)) : "macroTask" == s.change && (e.hasPendingMacrotasks = s.macroTask))
                                },
                                onHandleError: (t, n, i, s) => (t.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1)
                            })
                        }(this)
                }
                static isInAngularZone() {
                    return !0 === Zone.current.get("isAngularZone")
                }
                static assertInAngularZone() {
                    if (!ql.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                }
                static assertNotInAngularZone() {
                    if (ql.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                }
                run(e, t, n) {
                    return this._inner.run(e, t, n)
                }
                runTask(e, t, n, i) {
                    const s = this._inner,
                        r = s.scheduleEventTask("NgZoneEvent: " + i, e, Yl, Gl, Gl);
                    try {
                        return s.runTask(r, t, n)
                    } finally {
                        s.cancelTask(r)
                    }
                }
                runGuarded(e, t, n) {
                    return this._inner.runGuarded(e, t, n)
                }
                runOutsideAngular(e) {
                    return this._outer.run(e)
                }
            }

            function Gl() {}
            const Yl = {};

            function Xl(e) {
                if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
                    e._nesting++, e.onMicrotaskEmpty.emit(null)
                } finally {
                    if (e._nesting--, !e.hasPendingMicrotasks) try {
                        e.runOutsideAngular(() => e.onStable.emit(null))
                    } finally {
                        e.isStable = !0
                    }
                }
            }

            function Ql(e) {
                e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || e.shouldCoalesceEventChangeDetection && -1 !== e.lastRequestAnimationFrameId)
            }

            function Kl(e) {
                e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
            }

            function Jl(e) {
                e._nesting--, Xl(e)
            }
            class eu {
                constructor() {
                    this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ol, this.onMicrotaskEmpty = new ol, this.onStable = new ol, this.onError = new ol
                }
                run(e, t, n) {
                    return e.apply(t, n)
                }
                runGuarded(e, t, n) {
                    return e.apply(t, n)
                }
                runOutsideAngular(e) {
                    return e()
                }
                runTask(e, t, n, i) {
                    return e.apply(t, n)
                }
            }
            let tu = (() => {
                    class e {
                        constructor(e) {
                            this._ngZone = e, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), e.run(() => {
                                this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                            })
                        }
                        _watchAngularEvents() {
                            this._ngZone.onUnstable.subscribe({
                                next: () => {
                                    this._didWork = !0, this._isZoneStable = !1
                                }
                            }), this._ngZone.runOutsideAngular(() => {
                                this._ngZone.onStable.subscribe({
                                    next: () => {
                                        ql.assertNotInAngularZone(), Zl(() => {
                                            this._isZoneStable = !0, this._runCallbacksIfReady()
                                        })
                                    }
                                })
                            })
                        }
                        increasePendingRequestCount() {
                            return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                        }
                        decreasePendingRequestCount() {
                            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                            return this._runCallbacksIfReady(), this._pendingCount
                        }
                        isStable() {
                            return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                        }
                        _runCallbacksIfReady() {
                            if (this.isStable()) Zl(() => {
                                for (; 0 !== this._callbacks.length;) {
                                    let e = this._callbacks.pop();
                                    clearTimeout(e.timeoutId), e.doneCb(this._didWork)
                                }
                                this._didWork = !1
                            });
                            else {
                                let e = this.getPendingTasks();
                                this._callbacks = this._callbacks.filter(t => !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)), this._didWork = !0
                            }
                        }
                        getPendingTasks() {
                            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(e => ({
                                source: e.source,
                                creationLocation: e.creationLocation,
                                data: e.data
                            })) : []
                        }
                        addCallback(e, t, n) {
                            let i = -1;
                            t && t > 0 && (i = setTimeout(() => {
                                this._callbacks = this._callbacks.filter(e => e.timeoutId !== i), e(this._didWork, this.getPendingTasks())
                            }, t)), this._callbacks.push({
                                doneCb: e,
                                timeoutId: i,
                                updateCb: n
                            })
                        }
                        whenStable(e, t, n) {
                            if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                            this.addCallback(e, t, n), this._runCallbacksIfReady()
                        }
                        getPendingRequestCount() {
                            return this._pendingCount
                        }
                        findProviders(e, t, n) {
                            return []
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(We(ql))
                    }, e.\u0275prov = le({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                nu = (() => {
                    class e {
                        constructor() {
                            this._applications = new Map, ru.addToWindow(this)
                        }
                        registerApplication(e, t) {
                            this._applications.set(e, t)
                        }
                        unregisterApplication(e) {
                            this._applications.delete(e)
                        }
                        unregisterAllApplications() {
                            this._applications.clear()
                        }
                        getTestability(e) {
                            return this._applications.get(e) || null
                        }
                        getAllTestabilities() {
                            return Array.from(this._applications.values())
                        }
                        getAllRootElements() {
                            return Array.from(this._applications.keys())
                        }
                        findTestabilityInTree(e, t = !0) {
                            return ru.findTestabilityInTree(this, e, t)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275prov = le({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })();
            class iu {
                addToWindow(e) {}
                findTestabilityInTree(e, t, n) {
                    return null
                }
            }
            let su, ru = new iu;
            const ou = new Oe("AllowMultipleToken");

            function au(e, t, n = []) {
                const i = "Platform: " + t,
                    s = new Oe(i);
                return (t = []) => {
                    let r = lu();
                    if (!r || r.injector.get(ou, !1))
                        if (e) e(n.concat(t).concat({
                            provide: s,
                            useValue: !0
                        }));
                        else {
                            const e = n.concat(t).concat({
                                provide: s,
                                useValue: !0
                            }, {
                                provide: Sr,
                                useValue: "platform"
                            });
                            ! function(e) {
                                if (su && !su.destroyed && !su.injector.get(ou, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                su = e.get(uu);
                                const t = e.get(Rl, null);
                                t && t.forEach(e => e())
                            }(Hr.create({
                                providers: e,
                                name: i
                            }))
                        } return function(e) {
                        const t = lu();
                        if (!t) throw new Error("No platform exists!");
                        if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                        return t
                    }(s)
                }
            }

            function lu() {
                return su && !su.destroyed ? su : null
            }
            let uu = (() => {
                class e {
                    constructor(e) {
                        this._injector = e, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                    }
                    bootstrapModuleFactory(e, t) {
                        const n = function(e, t) {
                                let n;
                                return n = "noop" === e ? new eu : ("zone.js" === e ? void 0 : e) || new ql({
                                    enableLongStackTrace: di(),
                                    shouldCoalesceEventChangeDetection: t
                                }), n
                            }(t ? t.ngZone : void 0, t && t.ngZoneEventCoalescing || !1),
                            i = [{
                                provide: ql,
                                useValue: n
                            }];
                        return n.run(() => {
                            const t = Hr.create({
                                    providers: i,
                                    parent: this.injector,
                                    name: e.moduleType.name
                                }),
                                s = e.create(t),
                                r = s.injector.get(oi, null);
                            if (!r) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                            return s.onDestroy(() => du(this._modules, s)), n.runOutsideAngular(() => n.onError.subscribe({
                                    next: e => {
                                        r.handleError(e)
                                    }
                                })),
                                function(e, t, n) {
                                    try {
                                        const i = n();
                                        return fo(i) ? i.catch(n => {
                                            throw t.runOutsideAngular(() => e.handleError(n)), n
                                        }) : i
                                    } catch (i) {
                                        throw t.runOutsideAngular(() => e.handleError(i)), i
                                    }
                                }(r, n, () => {
                                    const e = s.injector.get(kl);
                                    return e.runInitializers(), e.donePromise.then(() => (qa(s.injector.get(Ol, "en-US") || "en-US"), this._moduleDoBootstrap(s), s))
                                })
                        })
                    }
                    bootstrapModule(e, t = []) {
                        const n = cu({}, t);
                        return function(e, t, n) {
                            const i = new Xa(n);
                            return Promise.resolve(i)
                        }(0, 0, e).then(e => this.bootstrapModuleFactory(e, n))
                    }
                    _moduleDoBootstrap(e) {
                        const t = e.injector.get(hu);
                        if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach(e => t.bootstrap(e));
                        else {
                            if (!e.instance.ngDoBootstrap) throw new Error(`The module ${ve(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
                            e.instance.ngDoBootstrap(t)
                        }
                        this._modules.push(e)
                    }
                    onDestroy(e) {
                        this._destroyListeners.push(e)
                    }
                    get injector() {
                        return this._injector
                    }
                    destroy() {
                        if (this._destroyed) throw new Error("The platform has already been destroyed!");
                        this._modules.slice().forEach(e => e.destroy()), this._destroyListeners.forEach(e => e()), this._destroyed = !0
                    }
                    get destroyed() {
                        return this._destroyed
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(We(Hr))
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function cu(e, t) {
                return Array.isArray(t) ? t.reduce(cu, e) : Object.assign(Object.assign({}, e), t)
            }
            let hu = (() => {
                class e {
                    constructor(e, t, n, i, s, r) {
                        this._zone = e, this._console = t, this._injector = n, this._exceptionHandler = i, this._componentFactoryResolver = s, this._initStatus = r, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = di(), this._zone.onMicrotaskEmpty.subscribe({
                            next: () => {
                                this._zone.run(() => {
                                    this.tick()
                                })
                            }
                        });
                        const o = new v(e => {
                                this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                                    e.next(this._stable), e.complete()
                                })
                            }),
                            a = new v(e => {
                                let t;
                                this._zone.runOutsideAngular(() => {
                                    t = this._zone.onStable.subscribe(() => {
                                        ql.assertNotInAngularZone(), Zl(() => {
                                            this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, e.next(!0))
                                        })
                                    })
                                });
                                const n = this._zone.onUnstable.subscribe(() => {
                                    ql.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                                        e.next(!1)
                                    }))
                                });
                                return () => {
                                    t.unsubscribe(), n.unsubscribe()
                                }
                            });
                        this.isStable = W(o, a.pipe(e => {
                            return Z()((t = K, function(e) {
                                let n;
                                n = "function" == typeof t ? t : function() {
                                    return t
                                };
                                const i = Object.create(e, X);
                                return i.source = e, i.subjectFactory = n, i
                            })(e));
                            var t
                        }))
                    }
                    bootstrap(e, t) {
                        if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                        let n;
                        n = e instanceof ia ? e : this._componentFactoryResolver.resolveComponentFactory(e), this.componentTypes.push(n.componentType);
                        const i = n.isBoundToModule ? void 0 : this._injector.get(Ye),
                            s = n.create(Hr.NULL, [], t || n.selector, i);
                        s.onDestroy(() => {
                            this._unloadComponent(s)
                        });
                        const r = s.injector.get(tu, null);
                        return r && s.injector.get(nu).registerApplication(s.location.nativeElement, r), this._loadComponent(s), di() && this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."), s
                    }
                    tick() {
                        if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                        try {
                            this._runningTick = !0;
                            for (let e of this._views) e.detectChanges();
                            if (this._enforceNoNewChanges)
                                for (let e of this._views) e.checkNoChanges()
                        } catch (e) {
                            this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(e))
                        } finally {
                            this._runningTick = !1
                        }
                    }
                    attachView(e) {
                        const t = e;
                        this._views.push(t), t.attachToAppRef(this)
                    }
                    detachView(e) {
                        const t = e;
                        du(this._views, t), t.detachFromAppRef()
                    }
                    _loadComponent(e) {
                        this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(Nl, []).concat(this._bootstrapListeners).forEach(t => t(e))
                    }
                    _unloadComponent(e) {
                        this.detachView(e.hostView), du(this.components, e)
                    }
                    ngOnDestroy() {
                        this._views.slice().forEach(e => e.destroy())
                    }
                    get viewCount() {
                        return this._views.length
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(We(ql), We(Pl), We(Hr), We(oi), We(ra), We(kl))
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function du(e, t) {
                const n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            const pu = au(null, "core", [{
                    provide: Dl,
                    useValue: "unknown"
                }, {
                    provide: uu,
                    deps: [Hr]
                }, {
                    provide: nu,
                    deps: []
                }, {
                    provide: Pl,
                    deps: []
                }]),
                fu = [{
                    provide: hu,
                    useClass: hu,
                    deps: [ql, Pl, Hr, oi, ra, kl]
                }, {
                    provide: Ha,
                    deps: [ql],
                    useFactory: function(e) {
                        let t = [];
                        return e.onStable.subscribe(() => {
                                for (; t.length;) t.pop()()
                            }),
                            function(e) {
                                t.push(e)
                            }
                    }
                }, {
                    provide: kl,
                    useClass: kl,
                    deps: [
                        [new ne, Tl]
                    ]
                }, {
                    provide: Ul,
                    useClass: Ul,
                    deps: []
                }, Ml, {
                    provide: Ea,
                    useFactory: function() {
                        return Ia
                    },
                    deps: []
                }, {
                    provide: Ta,
                    useFactory: function() {
                        return Ma
                    },
                    deps: []
                }, {
                    provide: Ol,
                    useFactory: function(e) {
                        return qa(e = e || "undefined" != typeof $localize && $localize.locale || "en-US"), e
                    },
                    deps: [
                        [new te(Ol), new ne, new se]
                    ]
                }, {
                    provide: Ll,
                    useValue: "USD"
                }];
            let gu = (() => {
                class e {
                    constructor(e) {}
                }
                return e.\u0275mod = dt({
                    type: e
                }), e.\u0275inj = ue({
                    factory: function(t) {
                        return new(t || e)(We(hu))
                    },
                    providers: fu
                }), e
            })();
            n("QFtD");
            let mu = null;

            function wu() {
                return mu
            }
            const vu = new Oe("DocumentToken");
            var _u = function(e) {
                    return e[e.Zero = 0] = "Zero", e[e.One = 1] = "One", e[e.Two = 2] = "Two", e[e.Few = 3] = "Few", e[e.Many = 4] = "Many", e[e.Other = 5] = "Other", e
                }({}),
                yu = function(e) {
                    return e[e.Format = 0] = "Format", e[e.Standalone = 1] = "Standalone", e
                }({}),
                bu = function(e) {
                    return e[e.Narrow = 0] = "Narrow", e[e.Abbreviated = 1] = "Abbreviated", e[e.Wide = 2] = "Wide", e[e.Short = 3] = "Short", e
                }({}),
                Cu = function(e) {
                    return e[e.Short = 0] = "Short", e[e.Medium = 1] = "Medium", e[e.Long = 2] = "Long", e[e.Full = 3] = "Full", e
                }({}),
                xu = function(e) {
                    return e[e.Decimal = 0] = "Decimal", e[e.Group = 1] = "Group", e[e.List = 2] = "List", e[e.PercentSign = 3] = "PercentSign", e[e.PlusSign = 4] = "PlusSign", e[e.MinusSign = 5] = "MinusSign", e[e.Exponential = 6] = "Exponential", e[e.SuperscriptingExponent = 7] = "SuperscriptingExponent", e[e.PerMille = 8] = "PerMille", e[e[1 / 0] = 9] = "Infinity", e[e.NaN = 10] = "NaN", e[e.TimeSeparator = 11] = "TimeSeparator", e[e.CurrencyDecimal = 12] = "CurrencyDecimal", e[e.CurrencyGroup = 13] = "CurrencyGroup", e
                }({});

            function Su(e, t) {
                return Mu($a(e)[Wa.DateFormat], t)
            }

            function Eu(e, t) {
                return Mu($a(e)[Wa.TimeFormat], t)
            }

            function Tu(e, t) {
                return Mu($a(e)[Wa.DateTimeFormat], t)
            }

            function ku(e, t) {
                const n = $a(e),
                    i = n[Wa.NumberSymbols][t];
                if (void 0 === i) {
                    if (t === xu.CurrencyDecimal) return n[Wa.NumberSymbols][xu.Decimal];
                    if (t === xu.CurrencyGroup) return n[Wa.NumberSymbols][xu.Group]
                }
                return i
            }

            function Iu(e) {
                if (!e[Wa.ExtraData]) throw new Error(`Missing extra locale data for the locale "${e[Wa.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)
            }

            function Mu(e, t) {
                for (let n = t; n > -1; n--)
                    if (void 0 !== e[n]) return e[n];
                throw new Error("Locale data API: locale data undefined")
            }

            function Au(e) {
                const [t, n] = e.split(":");
                return {
                    hours: +t,
                    minutes: +n
                }
            }
            const Ru = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
                Du = {},
                Nu = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
            var Pu = function(e) {
                    return e[e.Short = 0] = "Short", e[e.ShortGMT = 1] = "ShortGMT", e[e.Long = 2] = "Long", e[e.Extended = 3] = "Extended", e
                }({}),
                Ou = function(e) {
                    return e[e.FullYear = 0] = "FullYear", e[e.Month = 1] = "Month", e[e.Date = 2] = "Date", e[e.Hours = 3] = "Hours", e[e.Minutes = 4] = "Minutes", e[e.Seconds = 5] = "Seconds", e[e.FractionalSeconds = 6] = "FractionalSeconds", e[e.Day = 7] = "Day", e
                }({}),
                Lu = function(e) {
                    return e[e.DayPeriods = 0] = "DayPeriods", e[e.Days = 1] = "Days", e[e.Months = 2] = "Months", e[e.Eras = 3] = "Eras", e
                }({});

            function Hu(e, t) {
                return t && (e = e.replace(/\{([^}]+)}/g, (function(e, n) {
                    return null != t && n in t ? t[n] : e
                }))), e
            }

            function Fu(e, t, n = "-", i, s) {
                let r = "";
                (e < 0 || s && e <= 0) && (s ? e = 1 - e : (e = -e, r = n));
                let o = String(e);
                for (; o.length < t;) o = "0" + o;
                return i && (o = o.substr(o.length - t)), r + o
            }

            function Vu(e, t, n = 0, i = !1, s = !1) {
                return function(r, o) {
                    let a = function(e, t) {
                        switch (e) {
                            case Ou.FullYear:
                                return t.getFullYear();
                            case Ou.Month:
                                return t.getMonth();
                            case Ou.Date:
                                return t.getDate();
                            case Ou.Hours:
                                return t.getHours();
                            case Ou.Minutes:
                                return t.getMinutes();
                            case Ou.Seconds:
                                return t.getSeconds();
                            case Ou.FractionalSeconds:
                                return t.getMilliseconds();
                            case Ou.Day:
                                return t.getDay();
                            default:
                                throw new Error(`Unknown DateType value "${e}".`)
                        }
                    }(e, r);
                    if ((n > 0 || a > -n) && (a += n), e === Ou.Hours) 0 === a && -12 === n && (a = 12);
                    else if (e === Ou.FractionalSeconds) return l = t, Fu(a, 3).substr(0, l);
                    var l;
                    const u = ku(o, xu.MinusSign);
                    return Fu(a, t, u, i, s)
                }
            }

            function ju(e, t, n = yu.Format, i = !1) {
                return function(s, r) {
                    return function(e, t, n, i, s, r) {
                        switch (n) {
                            case Lu.Months:
                                return function(e, t, n) {
                                    const i = $a(e),
                                        s = Mu([i[Wa.MonthsFormat], i[Wa.MonthsStandalone]], t);
                                    return Mu(s, n)
                                }(t, s, i)[e.getMonth()];
                            case Lu.Days:
                                return function(e, t, n) {
                                    const i = $a(e),
                                        s = Mu([i[Wa.DaysFormat], i[Wa.DaysStandalone]], t);
                                    return Mu(s, n)
                                }(t, s, i)[e.getDay()];
                            case Lu.DayPeriods:
                                const o = e.getHours(),
                                    a = e.getMinutes();
                                if (r) {
                                    const e = function(e) {
                                            const t = $a(e);
                                            return Iu(t), (t[Wa.ExtraData][2] || []).map(e => "string" == typeof e ? Au(e) : [Au(e[0]), Au(e[1])])
                                        }(t),
                                        n = function(e, t, n) {
                                            const i = $a(e);
                                            Iu(i);
                                            const s = Mu([i[Wa.ExtraData][0], i[Wa.ExtraData][1]], t) || [];
                                            return Mu(s, n) || []
                                        }(t, s, i),
                                        r = e.findIndex(e => {
                                            if (Array.isArray(e)) {
                                                const [t, n] = e, i = o >= t.hours && a >= t.minutes, s = o < n.hours || o === n.hours && a < n.minutes;
                                                if (t.hours < n.hours) {
                                                    if (i && s) return !0
                                                } else if (i || s) return !0
                                            } else if (e.hours === o && e.minutes === a) return !0;
                                            return !1
                                        });
                                    if (-1 !== r) return n[r]
                                }
                                return function(e, t, n) {
                                    const i = $a(e),
                                        s = Mu([i[Wa.DayPeriodsFormat], i[Wa.DayPeriodsStandalone]], t);
                                    return Mu(s, n)
                                }(t, s, i)[o < 12 ? 0 : 1];
                            case Lu.Eras:
                                return function(e, t) {
                                    return Mu($a(e)[Wa.Eras], t)
                                }(t, i)[e.getFullYear() <= 0 ? 0 : 1];
                            default:
                                throw new Error("unexpected translation type " + n)
                        }
                    }(s, r, e, t, n, i)
                }
            }

            function Bu(e) {
                return function(t, n, i) {
                    const s = -1 * i,
                        r = ku(n, xu.MinusSign),
                        o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60);
                    switch (e) {
                        case Pu.Short:
                            return (s >= 0 ? "+" : "") + Fu(o, 2, r) + Fu(Math.abs(s % 60), 2, r);
                        case Pu.ShortGMT:
                            return "GMT" + (s >= 0 ? "+" : "") + Fu(o, 1, r);
                        case Pu.Long:
                            return "GMT" + (s >= 0 ? "+" : "") + Fu(o, 2, r) + ":" + Fu(Math.abs(s % 60), 2, r);
                        case Pu.Extended:
                            return 0 === i ? "Z" : (s >= 0 ? "+" : "") + Fu(o, 2, r) + ":" + Fu(Math.abs(s % 60), 2, r);
                        default:
                            throw new Error(`Unknown zone width "${e}"`)
                    }
                }
            }

            function zu(e, t = !1) {
                return function(n, i) {
                    let s;
                    if (t) {
                        const e = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                            t = n.getDate();
                        s = 1 + Math.floor((t + e) / 7)
                    } else {
                        const e = (r = n, new Date(r.getFullYear(), r.getMonth(), r.getDate() + (4 - r.getDay()))),
                            t = function(e) {
                                const t = new Date(e, 0, 1).getDay();
                                return new Date(e, 0, 1 + (t <= 4 ? 4 : 11) - t)
                            }(e.getFullYear()),
                            i = e.getTime() - t.getTime();
                        s = 1 + Math.round(i / 6048e5)
                    }
                    var r;
                    return Fu(s, e, ku(i, xu.MinusSign))
                }
            }
            const $u = {};

            function Uu(e, t) {
                e = e.replace(/:/g, "");
                const n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
                return isNaN(n) ? t : n
            }

            function Wu(e) {
                return e instanceof Date && !isNaN(e.valueOf())
            }
            class Zu {}
            let qu = (() => {
                class e extends Zu {
                    constructor(e) {
                        super(), this.locale = e
                    }
                    getPluralCategory(e, t) {
                        switch (function(e) {
                                return $a(e)[Wa.PluralCase]
                            }(t || this.locale)(e)) {
                            case _u.Zero:
                                return "zero";
                            case _u.One:
                                return "one";
                            case _u.Two:
                                return "two";
                            case _u.Few:
                                return "few";
                            case _u.Many:
                                return "many";
                            default:
                                return "other"
                        }
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(We(Ol))
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();

            function Gu(e, t) {
                t = encodeURIComponent(t);
                for (const n of e.split(";")) {
                    const e = n.indexOf("="),
                        [i, s] = -1 == e ? [n, ""] : [n.slice(0, e), n.slice(e + 1)];
                    if (i.trim() === t) return decodeURIComponent(s)
                }
                return null
            }
            let Yu = (() => {
                class e {
                    constructor(e, t, n, i) {
                        this._iterableDiffers = e, this._keyValueDiffers = t, this._ngEl = n, this._renderer = i, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null
                    }
                    set klass(e) {
                        this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof e ? e.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
                    }
                    set ngClass(e) {
                        this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof e ? e.split(/\s+/) : e, this._rawClass && (Gr(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                    }
                    ngDoCheck() {
                        if (this._iterableDiffer) {
                            const e = this._iterableDiffer.diff(this._rawClass);
                            e && this._applyIterableChanges(e)
                        } else if (this._keyValueDiffer) {
                            const e = this._keyValueDiffer.diff(this._rawClass);
                            e && this._applyKeyValueChanges(e)
                        }
                    }
                    _applyKeyValueChanges(e) {
                        e.forEachAddedItem(e => this._toggleClass(e.key, e.currentValue)), e.forEachChangedItem(e => this._toggleClass(e.key, e.currentValue)), e.forEachRemovedItem(e => {
                            e.previousValue && this._toggleClass(e.key, !1)
                        })
                    }
                    _applyIterableChanges(e) {
                        e.forEachAddedItem(e => {
                            if ("string" != typeof e.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + ve(e.item));
                            this._toggleClass(e.item, !0)
                        }), e.forEachRemovedItem(e => this._toggleClass(e.item, !1))
                    }
                    _applyClasses(e) {
                        e && (Array.isArray(e) || e instanceof Set ? e.forEach(e => this._toggleClass(e, !0)) : Object.keys(e).forEach(t => this._toggleClass(t, !!e[t])))
                    }
                    _removeClasses(e) {
                        e && (Array.isArray(e) || e instanceof Set ? e.forEach(e => this._toggleClass(e, !1)) : Object.keys(e).forEach(e => this._toggleClass(e, !1)))
                    }
                    _toggleClass(e, t) {
                        (e = e.trim()) && e.split(/\s+/g).forEach(e => {
                            t ? this._renderer.addClass(this._ngEl.nativeElement, e) : this._renderer.removeClass(this._ngEl.nativeElement, e)
                        })
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(so(Ea), so(Ta), so(oa), so(ca))
                }, e.\u0275dir = ft({
                    type: e,
                    selectors: [
                        ["", "ngClass", ""]
                    ],
                    inputs: {
                        klass: ["class", "klass"],
                        ngClass: "ngClass"
                    }
                }), e
            })();
            class Xu {
                constructor(e, t, n, i) {
                    this.$implicit = e, this.ngForOf = t, this.index = n, this.count = i
                }
                get first() {
                    return 0 === this.index
                }
                get last() {
                    return this.index === this.count - 1
                }
                get even() {
                    return this.index % 2 == 0
                }
                get odd() {
                    return !this.even
                }
            }
            let Qu = (() => {
                class e {
                    constructor(e, t, n) {
                        this._viewContainer = e, this._template = t, this._differs = n, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
                    }
                    set ngForOf(e) {
                        this._ngForOf = e, this._ngForOfDirty = !0
                    }
                    set ngForTrackBy(e) {
                        di() && null != e && "function" != typeof e && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(e)}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`), this._trackByFn = e
                    }
                    get ngForTrackBy() {
                        return this._trackByFn
                    }
                    set ngForTemplate(e) {
                        e && (this._template = e)
                    }
                    ngDoCheck() {
                        if (this._ngForOfDirty) {
                            this._ngForOfDirty = !1;
                            const n = this._ngForOf;
                            if (!this._differ && n) try {
                                this._differ = this._differs.find(n).create(this.ngForTrackBy)
                            } catch (t) {
                                throw new Error(`Cannot find a differ supporting object '${n}' of type '${e=n,e.name||typeof e}'. NgFor only supports binding to Iterables such as Arrays.`)
                            }
                        }
                        var e;
                        if (this._differ) {
                            const e = this._differ.diff(this._ngForOf);
                            e && this._applyChanges(e)
                        }
                    }
                    _applyChanges(e) {
                        const t = [];
                        e.forEachOperation((e, n, i) => {
                            if (null == e.previousIndex) {
                                const n = this._viewContainer.createEmbeddedView(this._template, new Xu(null, this._ngForOf, -1, -1), null === i ? void 0 : i),
                                    s = new Ku(e, n);
                                t.push(s)
                            } else if (null == i) this._viewContainer.remove(null === n ? void 0 : n);
                            else if (null !== n) {
                                const s = this._viewContainer.get(n);
                                this._viewContainer.move(s, i);
                                const r = new Ku(e, s);
                                t.push(r)
                            }
                        });
                        for (let n = 0; n < t.length; n++) this._perViewChange(t[n].view, t[n].record);
                        for (let n = 0, i = this._viewContainer.length; n < i; n++) {
                            const e = this._viewContainer.get(n);
                            e.context.index = n, e.context.count = i, e.context.ngForOf = this._ngForOf
                        }
                        e.forEachIdentityChange(e => {
                            this._viewContainer.get(e.currentIndex).context.$implicit = e.item
                        })
                    }
                    _perViewChange(e, t) {
                        e.context.$implicit = t.item
                    }
                    static ngTemplateContextGuard(e, t) {
                        return !0
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(so(Da), so(Aa), so(Ea))
                }, e.\u0275dir = ft({
                    type: e,
                    selectors: [
                        ["", "ngFor", "", "ngForOf", ""]
                    ],
                    inputs: {
                        ngForOf: "ngForOf",
                        ngForTrackBy: "ngForTrackBy",
                        ngForTemplate: "ngForTemplate"
                    }
                }), e
            })();
            class Ku {
                constructor(e, t) {
                    this.record = e, this.view = t
                }
            }
            let Ju = (() => {
                class e {
                    constructor(e, t) {
                        this._viewContainer = e, this._context = new ec, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = t
                    }
                    set ngIf(e) {
                        this._context.$implicit = this._context.ngIf = e, this._updateView()
                    }
                    set ngIfThen(e) {
                        tc("ngIfThen", e), this._thenTemplateRef = e, this._thenViewRef = null, this._updateView()
                    }
                    set ngIfElse(e) {
                        tc("ngIfElse", e), this._elseTemplateRef = e, this._elseViewRef = null, this._updateView()
                    }
                    _updateView() {
                        this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                    }
                    static ngTemplateContextGuard(e, t) {
                        return !0
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(so(Da), so(Aa))
                }, e.\u0275dir = ft({
                    type: e,
                    selectors: [
                        ["", "ngIf", ""]
                    ],
                    inputs: {
                        ngIf: "ngIf",
                        ngIfThen: "ngIfThen",
                        ngIfElse: "ngIfElse"
                    }
                }), e
            })();
            class ec {
                constructor() {
                    this.$implicit = null, this.ngIf = null
                }
            }

            function tc(e, t) {
                if (t && !t.createEmbeddedView) throw new Error(`${e} must be a TemplateRef, but received '${ve(t)}'.`)
            }

            function nc(e, t) {
                return Error(`InvalidPipeArgument: '${t}' for pipe '${ve(e)}'`)
            }
            let ic = (() => {
                    class e {
                        constructor(e) {
                            this.locale = e
                        }
                        transform(t, n = "mediumDate", i, s) {
                            if (null == t || "" === t || t != t) return null;
                            try {
                                return function(e, t, n, i) {
                                    let s = function(e) {
                                        if (Wu(e)) return e;
                                        if ("number" == typeof e && !isNaN(e)) return new Date(e);
                                        if ("string" == typeof e) {
                                            e = e.trim();
                                            const t = parseFloat(e);
                                            if (!isNaN(e - t)) return new Date(t);
                                            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
                                                const [t, n, i] = e.split("-").map(e => +e);
                                                return new Date(t, n - 1, i)
                                            }
                                            let n;
                                            if (n = e.match(Ru)) return function(e) {
                                                const t = new Date(0);
                                                let n = 0,
                                                    i = 0;
                                                const s = e[8] ? t.setUTCFullYear : t.setFullYear,
                                                    r = e[8] ? t.setUTCHours : t.setHours;
                                                e[9] && (n = Number(e[9] + e[10]), i = Number(e[9] + e[11])), s.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
                                                const o = Number(e[4] || 0) - n,
                                                    a = Number(e[5] || 0) - i,
                                                    l = Number(e[6] || 0),
                                                    u = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                                                return r.call(t, o, a, l, u), t
                                            }(n)
                                        }
                                        const t = new Date(e);
                                        if (!Wu(t)) throw new Error(`Unable to convert "${e}" into a date`);
                                        return t
                                    }(e);
                                    t = function e(t, n) {
                                        const i = function(e) {
                                            return $a(e)[Wa.LocaleId]
                                        }(t);
                                        if (Du[i] = Du[i] || {}, Du[i][n]) return Du[i][n];
                                        let s = "";
                                        switch (n) {
                                            case "shortDate":
                                                s = Su(t, Cu.Short);
                                                break;
                                            case "mediumDate":
                                                s = Su(t, Cu.Medium);
                                                break;
                                            case "longDate":
                                                s = Su(t, Cu.Long);
                                                break;
                                            case "fullDate":
                                                s = Su(t, Cu.Full);
                                                break;
                                            case "shortTime":
                                                s = Eu(t, Cu.Short);
                                                break;
                                            case "mediumTime":
                                                s = Eu(t, Cu.Medium);
                                                break;
                                            case "longTime":
                                                s = Eu(t, Cu.Long);
                                                break;
                                            case "fullTime":
                                                s = Eu(t, Cu.Full);
                                                break;
                                            case "short":
                                                const n = e(t, "shortTime"),
                                                    i = e(t, "shortDate");
                                                s = Hu(Tu(t, Cu.Short), [n, i]);
                                                break;
                                            case "medium":
                                                const r = e(t, "mediumTime"),
                                                    o = e(t, "mediumDate");
                                                s = Hu(Tu(t, Cu.Medium), [r, o]);
                                                break;
                                            case "long":
                                                const a = e(t, "longTime"),
                                                    l = e(t, "longDate");
                                                s = Hu(Tu(t, Cu.Long), [a, l]);
                                                break;
                                            case "full":
                                                const u = e(t, "fullTime"),
                                                    c = e(t, "fullDate");
                                                s = Hu(Tu(t, Cu.Full), [u, c])
                                        }
                                        return s && (Du[i][n] = s), s
                                    }(n, t) || t;
                                    let r, o = [];
                                    for (; t;) {
                                        if (r = Nu.exec(t), !r) {
                                            o.push(t);
                                            break
                                        } {
                                            o = o.concat(r.slice(1));
                                            const e = o.pop();
                                            if (!e) break;
                                            t = e
                                        }
                                    }
                                    let a = s.getTimezoneOffset();
                                    i && (a = Uu(i, a), s = function(e, t, n) {
                                        const i = e.getTimezoneOffset();
                                        return function(e, t) {
                                            return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e
                                        }(e, -1 * (Uu(t, i) - i))
                                    }(s, i));
                                    let l = "";
                                    return o.forEach(e => {
                                        const t = function(e) {
                                            if ($u[e]) return $u[e];
                                            let t;
                                            switch (e) {
                                                case "G":
                                                case "GG":
                                                case "GGG":
                                                    t = ju(Lu.Eras, bu.Abbreviated);
                                                    break;
                                                case "GGGG":
                                                    t = ju(Lu.Eras, bu.Wide);
                                                    break;
                                                case "GGGGG":
                                                    t = ju(Lu.Eras, bu.Narrow);
                                                    break;
                                                case "y":
                                                    t = Vu(Ou.FullYear, 1, 0, !1, !0);
                                                    break;
                                                case "yy":
                                                    t = Vu(Ou.FullYear, 2, 0, !0, !0);
                                                    break;
                                                case "yyy":
                                                    t = Vu(Ou.FullYear, 3, 0, !1, !0);
                                                    break;
                                                case "yyyy":
                                                    t = Vu(Ou.FullYear, 4, 0, !1, !0);
                                                    break;
                                                case "M":
                                                case "L":
                                                    t = Vu(Ou.Month, 1, 1);
                                                    break;
                                                case "MM":
                                                case "LL":
                                                    t = Vu(Ou.Month, 2, 1);
                                                    break;
                                                case "MMM":
                                                    t = ju(Lu.Months, bu.Abbreviated);
                                                    break;
                                                case "MMMM":
                                                    t = ju(Lu.Months, bu.Wide);
                                                    break;
                                                case "MMMMM":
                                                    t = ju(Lu.Months, bu.Narrow);
                                                    break;
                                                case "LLL":
                                                    t = ju(Lu.Months, bu.Abbreviated, yu.Standalone);
                                                    break;
                                                case "LLLL":
                                                    t = ju(Lu.Months, bu.Wide, yu.Standalone);
                                                    break;
                                                case "LLLLL":
                                                    t = ju(Lu.Months, bu.Narrow, yu.Standalone);
                                                    break;
                                                case "w":
                                                    t = zu(1);
                                                    break;
                                                case "ww":
                                                    t = zu(2);
                                                    break;
                                                case "W":
                                                    t = zu(1, !0);
                                                    break;
                                                case "d":
                                                    t = Vu(Ou.Date, 1);
                                                    break;
                                                case "dd":
                                                    t = Vu(Ou.Date, 2);
                                                    break;
                                                case "E":
                                                case "EE":
                                                case "EEE":
                                                    t = ju(Lu.Days, bu.Abbreviated);
                                                    break;
                                                case "EEEE":
                                                    t = ju(Lu.Days, bu.Wide);
                                                    break;
                                                case "EEEEE":
                                                    t = ju(Lu.Days, bu.Narrow);
                                                    break;
                                                case "EEEEEE":
                                                    t = ju(Lu.Days, bu.Short);
                                                    break;
                                                case "a":
                                                case "aa":
                                                case "aaa":
                                                    t = ju(Lu.DayPeriods, bu.Abbreviated);
                                                    break;
                                                case "aaaa":
                                                    t = ju(Lu.DayPeriods, bu.Wide);
                                                    break;
                                                case "aaaaa":
                                                    t = ju(Lu.DayPeriods, bu.Narrow);
                                                    break;
                                                case "b":
                                                case "bb":
                                                case "bbb":
                                                    t = ju(Lu.DayPeriods, bu.Abbreviated, yu.Standalone, !0);
                                                    break;
                                                case "bbbb":
                                                    t = ju(Lu.DayPeriods, bu.Wide, yu.Standalone, !0);
                                                    break;
                                                case "bbbbb":
                                                    t = ju(Lu.DayPeriods, bu.Narrow, yu.Standalone, !0);
                                                    break;
                                                case "B":
                                                case "BB":
                                                case "BBB":
                                                    t = ju(Lu.DayPeriods, bu.Abbreviated, yu.Format, !0);
                                                    break;
                                                case "BBBB":
                                                    t = ju(Lu.DayPeriods, bu.Wide, yu.Format, !0);
                                                    break;
                                                case "BBBBB":
                                                    t = ju(Lu.DayPeriods, bu.Narrow, yu.Format, !0);
                                                    break;
                                                case "h":
                                                    t = Vu(Ou.Hours, 1, -12);
                                                    break;
                                                case "hh":
                                                    t = Vu(Ou.Hours, 2, -12);
                                                    break;
                                                case "H":
                                                    t = Vu(Ou.Hours, 1);
                                                    break;
                                                case "HH":
                                                    t = Vu(Ou.Hours, 2);
                                                    break;
                                                case "m":
                                                    t = Vu(Ou.Minutes, 1);
                                                    break;
                                                case "mm":
                                                    t = Vu(Ou.Minutes, 2);
                                                    break;
                                                case "s":
                                                    t = Vu(Ou.Seconds, 1);
                                                    break;
                                                case "ss":
                                                    t = Vu(Ou.Seconds, 2);
                                                    break;
                                                case "S":
                                                    t = Vu(Ou.FractionalSeconds, 1);
                                                    break;
                                                case "SS":
                                                    t = Vu(Ou.FractionalSeconds, 2);
                                                    break;
                                                case "SSS":
                                                    t = Vu(Ou.FractionalSeconds, 3);
                                                    break;
                                                case "Z":
                                                case "ZZ":
                                                case "ZZZ":
                                                    t = Bu(Pu.Short);
                                                    break;
                                                case "ZZZZZ":
                                                    t = Bu(Pu.Extended);
                                                    break;
                                                case "O":
                                                case "OO":
                                                case "OOO":
                                                case "z":
                                                case "zz":
                                                case "zzz":
                                                    t = Bu(Pu.ShortGMT);
                                                    break;
                                                case "OOOO":
                                                case "ZZZZ":
                                                case "zzzz":
                                                    t = Bu(Pu.Long);
                                                    break;
                                                default:
                                                    return null
                                            }
                                            return $u[e] = t, t
                                        }(e);
                                        l += t ? t(s, n, a) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                                    }), l
                                }(t, n, s || this.locale, i)
                            } catch (r) {
                                throw nc(e, r.message)
                            }
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(so(Ol))
                    }, e.\u0275pipe = gt({
                        name: "date",
                        type: e,
                        pure: !0
                    }), e
                })(),
                sc = (() => {
                    class e {
                        transform(t, n, i) {
                            if (null == t) return t;
                            if (!this.supports(t)) throw nc(e, t);
                            return t.slice(n, i)
                        }
                        supports(e) {
                            return "string" == typeof e || Array.isArray(e)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275pipe = gt({
                        name: "slice",
                        type: e,
                        pure: !1
                    }), e
                })(),
                rc = (() => {
                    class e {}
                    return e.\u0275mod = dt({
                        type: e
                    }), e.\u0275inj = ue({
                        factory: function(t) {
                            return new(t || e)
                        },
                        providers: [{
                            provide: Zu,
                            useClass: qu
                        }]
                    }), e
                })();

            function oc(e) {
                return "browser" === e
            }
            class ac extends class extends class {} {
                constructor() {
                    super()
                }
                supportsDOMEvents() {
                    return !0
                }
            } {
                static makeCurrent() {
                    var e;
                    e = new ac, mu || (mu = e)
                }
                getProperty(e, t) {
                    return e[t]
                }
                log(e) {
                    window.console && window.console.log && window.console.log(e)
                }
                logGroup(e) {
                    window.console && window.console.group && window.console.group(e)
                }
                logGroupEnd() {
                    window.console && window.console.groupEnd && window.console.groupEnd()
                }
                onAndCancel(e, t, n) {
                    return e.addEventListener(t, n, !1), () => {
                        e.removeEventListener(t, n, !1)
                    }
                }
                dispatchEvent(e, t) {
                    e.dispatchEvent(t)
                }
                remove(e) {
                    return e.parentNode && e.parentNode.removeChild(e), e
                }
                getValue(e) {
                    return e.value
                }
                createElement(e, t) {
                    return (t = t || this.getDefaultDocument()).createElement(e)
                }
                createHtmlDocument() {
                    return document.implementation.createHTMLDocument("fakeTitle")
                }
                getDefaultDocument() {
                    return document
                }
                isElementNode(e) {
                    return e.nodeType === Node.ELEMENT_NODE
                }
                isShadowRoot(e) {
                    return e instanceof DocumentFragment
                }
                getGlobalEventTarget(e, t) {
                    return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null
                }
                getHistory() {
                    return window.history
                }
                getLocation() {
                    return window.location
                }
                getBaseHref(e) {
                    const t = uc || (uc = document.querySelector("base"), uc) ? uc.getAttribute("href") : null;
                    return null == t ? null : (n = t, lc || (lc = document.createElement("a")), lc.setAttribute("href", n), "/" === lc.pathname.charAt(0) ? lc.pathname : "/" + lc.pathname);
                    var n
                }
                resetBaseElement() {
                    uc = null
                }
                getUserAgent() {
                    return window.navigator.userAgent
                }
                performanceNow() {
                    return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                }
                supportsCookies() {
                    return !0
                }
                getCookie(e) {
                    return Gu(document.cookie, e)
                }
            }
            let lc, uc = null;
            const cc = new Oe("TRANSITION_ID"),
                hc = [{
                    provide: Tl,
                    useFactory: function(e, t, n) {
                        return () => {
                            n.get(kl).donePromise.then(() => {
                                const n = wu();
                                Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t => t.getAttribute("ng-transition") === e).forEach(e => n.remove(e))
                            })
                        }
                    },
                    deps: [cc, vu, Hr],
                    multi: !0
                }];
            class dc {
                static init() {
                    var e;
                    e = new dc, ru = e
                }
                addToWindow(e) {
                    ke.getAngularTestability = (t, n = !0) => {
                        const i = e.findTestabilityInTree(t, n);
                        if (null == i) throw new Error("Could not find testability for element.");
                        return i
                    }, ke.getAllAngularTestabilities = () => e.getAllTestabilities(), ke.getAllAngularRootElements = () => e.getAllRootElements(), ke.frameworkStabilizers || (ke.frameworkStabilizers = []), ke.frameworkStabilizers.push(e => {
                        const t = ke.getAllAngularTestabilities();
                        let n = t.length,
                            i = !1;
                        const s = function(t) {
                            i = i || t, n--, 0 == n && e(i)
                        };
                        t.forEach((function(e) {
                            e.whenStable(s)
                        }))
                    })
                }
                findTestabilityInTree(e, t, n) {
                    if (null == t) return null;
                    const i = e.getTestability(t);
                    return null != i ? i : n ? wu().isShadowRoot(t) ? this.findTestabilityInTree(e, t.host, !0) : this.findTestabilityInTree(e, t.parentElement, !0) : null
                }
            }
            const pc = new Oe("EventManagerPlugins");
            let fc = (() => {
                class e {
                    constructor(e, t) {
                        this._zone = t, this._eventNameToPlugin = new Map, e.forEach(e => e.manager = this), this._plugins = e.slice().reverse()
                    }
                    addEventListener(e, t, n) {
                        return this._findPluginFor(t).addEventListener(e, t, n)
                    }
                    addGlobalEventListener(e, t, n) {
                        return this._findPluginFor(t).addGlobalEventListener(e, t, n)
                    }
                    getZone() {
                        return this._zone
                    }
                    _findPluginFor(e) {
                        const t = this._eventNameToPlugin.get(e);
                        if (t) return t;
                        const n = this._plugins;
                        for (let i = 0; i < n.length; i++) {
                            const t = n[i];
                            if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t
                        }
                        throw new Error("No event manager plugin found for event " + e)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(We(pc), We(ql))
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            class gc {
                constructor(e) {
                    this._doc = e
                }
                addGlobalEventListener(e, t, n) {
                    const i = wu().getGlobalEventTarget(this._doc, e);
                    if (!i) throw new Error(`Unsupported event target ${i} for event ${t}`);
                    return this.addEventListener(i, t, n)
                }
            }
            let mc = (() => {
                    class e {
                        constructor() {
                            this._stylesSet = new Set
                        }
                        addStyles(e) {
                            const t = new Set;
                            e.forEach(e => {
                                this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e))
                            }), this.onStylesAdded(t)
                        }
                        onStylesAdded(e) {}
                        getAllStyles() {
                            return Array.from(this._stylesSet)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275prov = le({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                wc = (() => {
                    class e extends mc {
                        constructor(e) {
                            super(), this._doc = e, this._hostNodes = new Set, this._styleNodes = new Set, this._hostNodes.add(e.head)
                        }
                        _addStylesToHost(e, t) {
                            e.forEach(e => {
                                const n = this._doc.createElement("style");
                                n.textContent = e, this._styleNodes.add(t.appendChild(n))
                            })
                        }
                        addHost(e) {
                            this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e)
                        }
                        removeHost(e) {
                            this._hostNodes.delete(e)
                        }
                        onStylesAdded(e) {
                            this._hostNodes.forEach(t => this._addStylesToHost(e, t))
                        }
                        ngOnDestroy() {
                            this._styleNodes.forEach(e => wu().remove(e))
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(We(vu))
                    }, e.\u0275prov = le({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })();
            const vc = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                _c = /%COMP%/g;

            function yc(e, t, n) {
                for (let i = 0; i < t.length; i++) {
                    let s = t[i];
                    Array.isArray(s) ? yc(e, s, n) : (s = s.replace(_c, e), n.push(s))
                }
                return n
            }

            function bc(e) {
                return t => {
                    if ("__ngUnwrap__" === t) return e;
                    !1 === e(t) && (t.preventDefault(), t.returnValue = !1)
                }
            }
            let Cc = (() => {
                class e {
                    constructor(e, t, n) {
                        this.eventManager = e, this.sharedStylesHost = t, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new xc(e)
                    }
                    createRenderer(e, t) {
                        if (!e || !t) return this.defaultRenderer;
                        switch (t.encapsulation) {
                            case st.Emulated: {
                                let n = this.rendererByCompId.get(t.id);
                                return n || (n = new Sc(this.eventManager, this.sharedStylesHost, t, this.appId), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n
                            }
                            case st.Native:
                            case st.ShadowDom:
                                return new Ec(this.eventManager, this.sharedStylesHost, e, t);
                            default:
                                if (!this.rendererByCompId.has(t.id)) {
                                    const e = yc(t.id, t.styles, []);
                                    this.sharedStylesHost.addStyles(e), this.rendererByCompId.set(t.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }
                    begin() {}
                    end() {}
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(We(fc), We(wc), We(Il))
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            class xc {
                constructor(e) {
                    this.eventManager = e, this.data = Object.create(null)
                }
                destroy() {}
                createElement(e, t) {
                    return t ? document.createElementNS(vc[t] || t, e) : document.createElement(e)
                }
                createComment(e) {
                    return document.createComment(e)
                }
                createText(e) {
                    return document.createTextNode(e)
                }
                appendChild(e, t) {
                    e.appendChild(t)
                }
                insertBefore(e, t, n) {
                    e && e.insertBefore(t, n)
                }
                removeChild(e, t) {
                    e && e.removeChild(t)
                }
                selectRootElement(e, t) {
                    let n = "string" == typeof e ? document.querySelector(e) : e;
                    if (!n) throw new Error(`The selector "${e}" did not match any elements`);
                    return t || (n.textContent = ""), n
                }
                parentNode(e) {
                    return e.parentNode
                }
                nextSibling(e) {
                    return e.nextSibling
                }
                setAttribute(e, t, n, i) {
                    if (i) {
                        t = i + ":" + t;
                        const s = vc[i];
                        s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n)
                    } else e.setAttribute(t, n)
                }
                removeAttribute(e, t, n) {
                    if (n) {
                        const i = vc[n];
                        i ? e.removeAttributeNS(i, t) : e.removeAttribute(`${n}:${t}`)
                    } else e.removeAttribute(t)
                }
                addClass(e, t) {
                    e.classList.add(t)
                }
                removeClass(e, t) {
                    e.classList.remove(t)
                }
                setStyle(e, t, n, i) {
                    i & ua.DashCase ? e.style.setProperty(t, n, i & ua.Important ? "important" : "") : e.style[t] = n
                }
                removeStyle(e, t, n) {
                    n & ua.DashCase ? e.style.removeProperty(t) : e.style[t] = ""
                }
                setProperty(e, t, n) {
                    e[t] = n
                }
                setValue(e, t) {
                    e.nodeValue = t
                }
                listen(e, t, n) {
                    return "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, bc(n)) : this.eventManager.addEventListener(e, t, bc(n))
                }
            }
            class Sc extends xc {
                constructor(e, t, n, i) {
                    super(e), this.component = n;
                    const s = yc(i + "-" + n.id, n.styles, []);
                    t.addStyles(s), this.contentAttr = "_ngcontent-%COMP%".replace(_c, i + "-" + n.id), this.hostAttr = "_nghost-%COMP%".replace(_c, i + "-" + n.id)
                }
                applyToHost(e) {
                    super.setAttribute(e, this.hostAttr, "")
                }
                createElement(e, t) {
                    const n = super.createElement(e, t);
                    return super.setAttribute(n, this.contentAttr, ""), n
                }
            }
            class Ec extends xc {
                constructor(e, t, n, i) {
                    super(e), this.sharedStylesHost = t, this.hostEl = n, this.component = i, this.shadowRoot = i.encapsulation === st.ShadowDom ? n.attachShadow({
                        mode: "open"
                    }) : n.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot);
                    const s = yc(i.id, i.styles, []);
                    for (let r = 0; r < s.length; r++) {
                        const e = document.createElement("style");
                        e.textContent = s[r], this.shadowRoot.appendChild(e)
                    }
                }
                nodeOrShadowRoot(e) {
                    return e === this.hostEl ? this.shadowRoot : e
                }
                destroy() {
                    this.sharedStylesHost.removeHost(this.shadowRoot)
                }
                appendChild(e, t) {
                    return super.appendChild(this.nodeOrShadowRoot(e), t)
                }
                insertBefore(e, t, n) {
                    return super.insertBefore(this.nodeOrShadowRoot(e), t, n)
                }
                removeChild(e, t) {
                    return super.removeChild(this.nodeOrShadowRoot(e), t)
                }
                parentNode(e) {
                    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))
                }
            }
            let Tc = (() => {
                class e extends gc {
                    constructor(e) {
                        super(e)
                    }
                    supports(e) {
                        return !0
                    }
                    addEventListener(e, t, n) {
                        return e.addEventListener(t, n, !1), () => this.removeEventListener(e, t, n)
                    }
                    removeEventListener(e, t, n) {
                        return e.removeEventListener(t, n)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(We(vu))
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const kc = ["alt", "control", "meta", "shift"],
                Ic = {
                    "\b": "Backspace",
                    "\t": "Tab",
                    "\x7f": "Delete",
                    "\x1b": "Escape",
                    Del: "Delete",
                    Esc: "Escape",
                    Left: "ArrowLeft",
                    Right: "ArrowRight",
                    Up: "ArrowUp",
                    Down: "ArrowDown",
                    Menu: "ContextMenu",
                    Scroll: "ScrollLock",
                    Win: "OS"
                },
                Mc = {
                    A: "1",
                    B: "2",
                    C: "3",
                    D: "4",
                    E: "5",
                    F: "6",
                    G: "7",
                    H: "8",
                    I: "9",
                    J: "*",
                    K: "+",
                    M: "-",
                    N: ".",
                    O: "/",
                    "`": "0",
                    "\x90": "NumLock"
                },
                Ac = {
                    alt: e => e.altKey,
                    control: e => e.ctrlKey,
                    meta: e => e.metaKey,
                    shift: e => e.shiftKey
                };
            let Rc = (() => {
                class e extends gc {
                    constructor(e) {
                        super(e)
                    }
                    supports(t) {
                        return null != e.parseEventName(t)
                    }
                    addEventListener(t, n, i) {
                        const s = e.parseEventName(n),
                            r = e.eventCallback(s.fullKey, i, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(() => wu().onAndCancel(t, s.domEventName, r))
                    }
                    static parseEventName(t) {
                        const n = t.toLowerCase().split("."),
                            i = n.shift();
                        if (0 === n.length || "keydown" !== i && "keyup" !== i) return null;
                        const s = e._normalizeKey(n.pop());
                        let r = "";
                        if (kc.forEach(e => {
                                const t = n.indexOf(e);
                                t > -1 && (n.splice(t, 1), r += e + ".")
                            }), r += s, 0 != n.length || 0 === s.length) return null;
                        const o = {};
                        return o.domEventName = i, o.fullKey = r, o
                    }
                    static getEventFullKey(e) {
                        let t = "",
                            n = function(e) {
                                let t = e.key;
                                if (null == t) {
                                    if (t = e.keyIdentifier, null == t) return "Unidentified";
                                    t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && Mc.hasOwnProperty(t) && (t = Mc[t]))
                                }
                                return Ic[t] || t
                            }(e);
                        return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), kc.forEach(i => {
                            i != n && (0, Ac[i])(e) && (t += i + ".")
                        }), t += n, t
                    }
                    static eventCallback(t, n, i) {
                        return s => {
                            e.getEventFullKey(s) === t && i.runGuarded(() => n(s))
                        }
                    }
                    static _normalizeKey(e) {
                        switch (e) {
                            case "esc":
                                return "escape";
                            default:
                                return e
                        }
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(We(vu))
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const Dc = au(pu, "browser", [{
                    provide: Dl,
                    useValue: "browser"
                }, {
                    provide: Rl,
                    useValue: function() {
                        ac.makeCurrent(), dc.init()
                    },
                    multi: !0
                }, {
                    provide: vu,
                    useFactory: function() {
                        return function(e) {
                            At = e
                        }(document), document
                    },
                    deps: []
                }]),
                Nc = [
                    [], {
                        provide: Sr,
                        useValue: "root"
                    }, {
                        provide: oi,
                        useFactory: function() {
                            return new oi
                        },
                        deps: []
                    }, {
                        provide: pc,
                        useClass: Tc,
                        multi: !0,
                        deps: [vu, ql, Dl]
                    }, {
                        provide: pc,
                        useClass: Rc,
                        multi: !0,
                        deps: [vu]
                    },
                    [], {
                        provide: Cc,
                        useClass: Cc,
                        deps: [fc, wc, Il]
                    }, {
                        provide: la,
                        useExisting: Cc
                    }, {
                        provide: mc,
                        useExisting: wc
                    }, {
                        provide: wc,
                        useClass: wc,
                        deps: [vu]
                    }, {
                        provide: tu,
                        useClass: tu,
                        deps: [ql]
                    }, {
                        provide: fc,
                        useClass: fc,
                        deps: [pc, ql]
                    },
                    []
                ];
            let Pc = (() => {
                class e {
                    constructor(e) {
                        if (e) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                    }
                    static withServerTransition(t) {
                        return {
                            ngModule: e,
                            providers: [{
                                provide: Il,
                                useValue: t.appId
                            }, {
                                provide: cc,
                                useExisting: Il
                            }, hc]
                        }
                    }
                }
                return e.\u0275mod = dt({
                    type: e
                }), e.\u0275inj = ue({
                    factory: function(t) {
                        return new(t || e)(We(e, 12))
                    },
                    providers: Nc,
                    imports: [rc, gu]
                }), e
            })();

            function Oc(...e) {
                let t = e[e.length - 1];
                return E(t) ? (e.pop(), O(e, t)) : U(e)
            }
            "undefined" != typeof window && window;
            class Lc {
                constructor(e, t) {
                    this.predicate = e, this.thisArg = t
                }
                call(e, t) {
                    return t.subscribe(new Hc(e, this.predicate, this.thisArg))
                }
            }
            class Hc extends f {
                constructor(e, t, n) {
                    super(e), this.predicate = t, this.thisArg = n, this.count = 0
                }
                _next(e) {
                    let t;
                    try {
                        t = this.predicate.call(this.thisArg, e, this.count++)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    t && this.destination.next(e)
                }
            }
            class Fc {}
            class Vc {}
            class jc {
                constructor(e) {
                    this.normalizedNames = new Map, this.lazyUpdate = null, e ? this.lazyInit = "string" == typeof e ? () => {
                        this.headers = new Map, e.split("\n").forEach(e => {
                            const t = e.indexOf(":");
                            if (t > 0) {
                                const n = e.slice(0, t),
                                    i = n.toLowerCase(),
                                    s = e.slice(t + 1).trim();
                                this.maybeSetNormalizedName(n, i), this.headers.has(i) ? this.headers.get(i).push(s) : this.headers.set(i, [s])
                            }
                        })
                    } : () => {
                        this.headers = new Map, Object.keys(e).forEach(t => {
                            let n = e[t];
                            const i = t.toLowerCase();
                            "string" == typeof n && (n = [n]), n.length > 0 && (this.headers.set(i, n), this.maybeSetNormalizedName(t, i))
                        })
                    } : this.headers = new Map
                }
                has(e) {
                    return this.init(), this.headers.has(e.toLowerCase())
                }
                get(e) {
                    this.init();
                    const t = this.headers.get(e.toLowerCase());
                    return t && t.length > 0 ? t[0] : null
                }
                keys() {
                    return this.init(), Array.from(this.normalizedNames.values())
                }
                getAll(e) {
                    return this.init(), this.headers.get(e.toLowerCase()) || null
                }
                append(e, t) {
                    return this.clone({
                        name: e,
                        value: t,
                        op: "a"
                    })
                }
                set(e, t) {
                    return this.clone({
                        name: e,
                        value: t,
                        op: "s"
                    })
                }
                delete(e, t) {
                    return this.clone({
                        name: e,
                        value: t,
                        op: "d"
                    })
                }
                maybeSetNormalizedName(e, t) {
                    this.normalizedNames.has(t) || this.normalizedNames.set(t, e)
                }
                init() {
                    this.lazyInit && (this.lazyInit instanceof jc ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(e => this.applyUpdate(e)), this.lazyUpdate = null))
                }
                copyFrom(e) {
                    e.init(), Array.from(e.headers.keys()).forEach(t => {
                        this.headers.set(t, e.headers.get(t)), this.normalizedNames.set(t, e.normalizedNames.get(t))
                    })
                }
                clone(e) {
                    const t = new jc;
                    return t.lazyInit = this.lazyInit && this.lazyInit instanceof jc ? this.lazyInit : this, t.lazyUpdate = (this.lazyUpdate || []).concat([e]), t
                }
                applyUpdate(e) {
                    const t = e.name.toLowerCase();
                    switch (e.op) {
                        case "a":
                        case "s":
                            let n = e.value;
                            if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                            this.maybeSetNormalizedName(e.name, t);
                            const i = ("a" === e.op ? this.headers.get(t) : void 0) || [];
                            i.push(...n), this.headers.set(t, i);
                            break;
                        case "d":
                            const s = e.value;
                            if (s) {
                                let e = this.headers.get(t);
                                if (!e) return;
                                e = e.filter(e => -1 === s.indexOf(e)), 0 === e.length ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, e)
                            } else this.headers.delete(t), this.normalizedNames.delete(t)
                    }
                }
                forEach(e) {
                    this.init(), Array.from(this.normalizedNames.keys()).forEach(t => e(this.normalizedNames.get(t), this.headers.get(t)))
                }
            }
            class Bc {
                encodeKey(e) {
                    return zc(e)
                }
                encodeValue(e) {
                    return zc(e)
                }
                decodeKey(e) {
                    return decodeURIComponent(e)
                }
                decodeValue(e) {
                    return decodeURIComponent(e)
                }
            }

            function zc(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
            }
            class $c {
                constructor(e = {}) {
                    if (this.updates = null, this.cloneFrom = null, this.encoder = e.encoder || new Bc, e.fromString) {
                        if (e.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                        this.map = function(e, t) {
                            const n = new Map;
                            return e.length > 0 && e.split("&").forEach(e => {
                                const i = e.indexOf("="),
                                    [s, r] = -1 == i ? [t.decodeKey(e), ""] : [t.decodeKey(e.slice(0, i)), t.decodeValue(e.slice(i + 1))],
                                    o = n.get(s) || [];
                                o.push(r), n.set(s, o)
                            }), n
                        }(e.fromString, this.encoder)
                    } else e.fromObject ? (this.map = new Map, Object.keys(e.fromObject).forEach(t => {
                        const n = e.fromObject[t];
                        this.map.set(t, Array.isArray(n) ? n : [n])
                    })) : this.map = null
                }
                has(e) {
                    return this.init(), this.map.has(e)
                }
                get(e) {
                    this.init();
                    const t = this.map.get(e);
                    return t ? t[0] : null
                }
                getAll(e) {
                    return this.init(), this.map.get(e) || null
                }
                keys() {
                    return this.init(), Array.from(this.map.keys())
                }
                append(e, t) {
                    return this.clone({
                        param: e,
                        value: t,
                        op: "a"
                    })
                }
                set(e, t) {
                    return this.clone({
                        param: e,
                        value: t,
                        op: "s"
                    })
                }
                delete(e, t) {
                    return this.clone({
                        param: e,
                        value: t,
                        op: "d"
                    })
                }
                toString() {
                    return this.init(), this.keys().map(e => {
                        const t = this.encoder.encodeKey(e);
                        return this.map.get(e).map(e => t + "=" + this.encoder.encodeValue(e)).join("&")
                    }).filter(e => "" !== e).join("&")
                }
                clone(e) {
                    const t = new $c({
                        encoder: this.encoder
                    });
                    return t.cloneFrom = this.cloneFrom || this, t.updates = (this.updates || []).concat([e]), t
                }
                init() {
                    null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(e => this.map.set(e, this.cloneFrom.map.get(e))), this.updates.forEach(e => {
                        switch (e.op) {
                            case "a":
                            case "s":
                                const t = ("a" === e.op ? this.map.get(e.param) : void 0) || [];
                                t.push(e.value), this.map.set(e.param, t);
                                break;
                            case "d":
                                if (void 0 === e.value) {
                                    this.map.delete(e.param);
                                    break
                                } {
                                    let t = this.map.get(e.param) || [];
                                    const n = t.indexOf(e.value); - 1 !== n && t.splice(n, 1), t.length > 0 ? this.map.set(e.param, t) : this.map.delete(e.param)
                                }
                        }
                    }), this.cloneFrom = this.updates = null)
                }
            }

            function Uc(e) {
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            }

            function Wc(e) {
                return "undefined" != typeof Blob && e instanceof Blob
            }

            function Zc(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            }
            class qc {
                constructor(e, t, n, i) {
                    let s;
                    if (this.url = t, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = e.toUpperCase(), function(e) {
                            switch (e) {
                                case "DELETE":
                                case "GET":
                                case "HEAD":
                                case "OPTIONS":
                                case "JSONP":
                                    return !1;
                                default:
                                    return !0
                            }
                        }(this.method) || i ? (this.body = void 0 !== n ? n : null, s = i) : s = n, s && (this.reportProgress = !!s.reportProgress, this.withCredentials = !!s.withCredentials, s.responseType && (this.responseType = s.responseType), s.headers && (this.headers = s.headers), s.params && (this.params = s.params)), this.headers || (this.headers = new jc), this.params) {
                        const e = this.params.toString();
                        if (0 === e.length) this.urlWithParams = t;
                        else {
                            const n = t.indexOf("?");
                            this.urlWithParams = t + (-1 === n ? "?" : n < t.length - 1 ? "&" : "") + e
                        }
                    } else this.params = new $c, this.urlWithParams = t
                }
                serializeBody() {
                    return null === this.body ? null : Uc(this.body) || Wc(this.body) || Zc(this.body) || "string" == typeof this.body ? this.body : this.body instanceof $c ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
                }
                detectContentTypeHeader() {
                    return null === this.body || Zc(this.body) ? null : Wc(this.body) ? this.body.type || null : Uc(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof $c ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
                }
                clone(e = {}) {
                    const t = e.method || this.method,
                        n = e.url || this.url,
                        i = e.responseType || this.responseType,
                        s = void 0 !== e.body ? e.body : this.body,
                        r = void 0 !== e.withCredentials ? e.withCredentials : this.withCredentials,
                        o = void 0 !== e.reportProgress ? e.reportProgress : this.reportProgress;
                    let a = e.headers || this.headers,
                        l = e.params || this.params;
                    return void 0 !== e.setHeaders && (a = Object.keys(e.setHeaders).reduce((t, n) => t.set(n, e.setHeaders[n]), a)), e.setParams && (l = Object.keys(e.setParams).reduce((t, n) => t.set(n, e.setParams[n]), l)), new qc(t, n, s, {
                        params: l,
                        headers: a,
                        reportProgress: o,
                        responseType: i,
                        withCredentials: r
                    })
                }
            }
            var Gc = function(e) {
                return e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", e[e.User = 5] = "User", e
            }({});
            class Yc {
                constructor(e, t = 200, n = "OK") {
                    this.headers = e.headers || new jc, this.status = void 0 !== e.status ? e.status : t, this.statusText = e.statusText || n, this.url = e.url || null, this.ok = this.status >= 200 && this.status < 300
                }
            }
            class Xc extends Yc {
                constructor(e = {}) {
                    super(e), this.type = Gc.ResponseHeader
                }
                clone(e = {}) {
                    return new Xc({
                        headers: e.headers || this.headers,
                        status: void 0 !== e.status ? e.status : this.status,
                        statusText: e.statusText || this.statusText,
                        url: e.url || this.url || void 0
                    })
                }
            }
            class Qc extends Yc {
                constructor(e = {}) {
                    super(e), this.type = Gc.Response, this.body = void 0 !== e.body ? e.body : null
                }
                clone(e = {}) {
                    return new Qc({
                        body: void 0 !== e.body ? e.body : this.body,
                        headers: e.headers || this.headers,
                        status: void 0 !== e.status ? e.status : this.status,
                        statusText: e.statusText || this.statusText,
                        url: e.url || this.url || void 0
                    })
                }
            }
            class Kc extends Yc {
                constructor(e) {
                    super(e, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? "Http failure during parsing for " + (e.url || "(unknown url)") : `Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`, this.error = e.error || null
                }
            }

            function Jc(e, t) {
                return {
                    body: t,
                    headers: e.headers,
                    observe: e.observe,
                    params: e.params,
                    reportProgress: e.reportProgress,
                    responseType: e.responseType,
                    withCredentials: e.withCredentials
                }
            }
            let eh = (() => {
                class e {
                    constructor(e) {
                        this.handler = e
                    }
                    request(e, t, n = {}) {
                        let i;
                        if (e instanceof qc) i = e;
                        else {
                            let s = void 0;
                            s = n.headers instanceof jc ? n.headers : new jc(n.headers);
                            let r = void 0;
                            n.params && (r = n.params instanceof $c ? n.params : new $c({
                                fromObject: n.params
                            })), i = new qc(e, t, void 0 !== n.body ? n.body : null, {
                                headers: s,
                                params: r,
                                reportProgress: n.reportProgress,
                                responseType: n.responseType || "json",
                                withCredentials: n.withCredentials
                            })
                        }
                        const s = Oc(i).pipe(j(e => this.handler.handle(e), void 0, 1));
                        if (e instanceof qc || "events" === n.observe) return s;
                        const r = s.pipe((o = e => e instanceof Qc, function(e) {
                            return e.lift(new Lc(o, void 0))
                        }));
                        var o;
                        switch (n.observe || "body") {
                            case "body":
                                switch (i.responseType) {
                                    case "arraybuffer":
                                        return r.pipe(T(e => {
                                            if (null !== e.body && !(e.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                            return e.body
                                        }));
                                    case "blob":
                                        return r.pipe(T(e => {
                                            if (null !== e.body && !(e.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                            return e.body
                                        }));
                                    case "text":
                                        return r.pipe(T(e => {
                                            if (null !== e.body && "string" != typeof e.body) throw new Error("Response is not a string.");
                                            return e.body
                                        }));
                                    case "json":
                                    default:
                                        return r.pipe(T(e => e.body))
                                }
                            case "response":
                                return r;
                            default:
                                throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)
                        }
                    }
                    delete(e, t = {}) {
                        return this.request("DELETE", e, t)
                    }
                    get(e, t = {}) {
                        return this.request("GET", e, t)
                    }
                    head(e, t = {}) {
                        return this.request("HEAD", e, t)
                    }
                    jsonp(e, t) {
                        return this.request("JSONP", e, {
                            params: (new $c).append(t, "JSONP_CALLBACK"),
                            observe: "body",
                            responseType: "json"
                        })
                    }
                    options(e, t = {}) {
                        return this.request("OPTIONS", e, t)
                    }
                    patch(e, t, n = {}) {
                        return this.request("PATCH", e, Jc(n, t))
                    }
                    post(e, t, n = {}) {
                        return this.request("POST", e, Jc(n, t))
                    }
                    put(e, t, n = {}) {
                        return this.request("PUT", e, Jc(n, t))
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(We(Fc))
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            class th {
                constructor(e, t) {
                    this.next = e, this.interceptor = t
                }
                handle(e) {
                    return this.interceptor.intercept(e, this.next)
                }
            }
            const nh = new Oe("HTTP_INTERCEPTORS");
            let ih = (() => {
                class e {
                    intercept(e, t) {
                        return t.handle(e)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = le({
                    token: e,
                    factory: e.\u0275fac
                }), e
            })();
            const sh = /^\)\]\}',?\n/;
            class rh {}
            let oh = (() => {
                    class e {
                        constructor() {}
                        build() {
                            return new XMLHttpRequest
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275prov = le({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                ah = (() => {
                    class e {
                        constructor(e) {
                            this.xhrFactory = e
                        }
                        handle(e) {
                            if ("JSONP" === e.method) throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");
                            return new v(t => {
                                const n = this.xhrFactory.build();
                                if (n.open(e.method, e.urlWithParams), e.withCredentials && (n.withCredentials = !0), e.headers.forEach((e, t) => n.setRequestHeader(e, t.join(","))), e.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"), !e.headers.has("Content-Type")) {
                                    const t = e.detectContentTypeHeader();
                                    null !== t && n.setRequestHeader("Content-Type", t)
                                }
                                if (e.responseType) {
                                    const t = e.responseType.toLowerCase();
                                    n.responseType = "json" !== t ? t : "text"
                                }
                                const i = e.serializeBody();
                                let s = null;
                                const r = () => {
                                        if (null !== s) return s;
                                        const t = 1223 === n.status ? 204 : n.status,
                                            i = n.statusText || "OK",
                                            r = new jc(n.getAllResponseHeaders()),
                                            o = function(e) {
                                                return "responseURL" in e && e.responseURL ? e.responseURL : /^X-Request-URL:/m.test(e.getAllResponseHeaders()) ? e.getResponseHeader("X-Request-URL") : null
                                            }(n) || e.url;
                                        return s = new Xc({
                                            headers: r,
                                            status: t,
                                            statusText: i,
                                            url: o
                                        }), s
                                    },
                                    o = () => {
                                        let {
                                            headers: i,
                                            status: s,
                                            statusText: o,
                                            url: a
                                        } = r(), l = null;
                                        204 !== s && (l = void 0 === n.response ? n.responseText : n.response), 0 === s && (s = l ? 200 : 0);
                                        let u = s >= 200 && s < 300;
                                        if ("json" === e.responseType && "string" == typeof l) {
                                            const e = l;
                                            l = l.replace(sh, "");
                                            try {
                                                l = "" !== l ? JSON.parse(l) : null
                                            } catch (c) {
                                                l = e, u && (u = !1, l = {
                                                    error: c,
                                                    text: l
                                                })
                                            }
                                        }
                                        u ? (t.next(new Qc({
                                            body: l,
                                            headers: i,
                                            status: s,
                                            statusText: o,
                                            url: a || void 0
                                        })), t.complete()) : t.error(new Kc({
                                            error: l,
                                            headers: i,
                                            status: s,
                                            statusText: o,
                                            url: a || void 0
                                        }))
                                    },
                                    a = e => {
                                        const {
                                            url: i
                                        } = r(), s = new Kc({
                                            error: e,
                                            status: n.status || 0,
                                            statusText: n.statusText || "Unknown Error",
                                            url: i || void 0
                                        });
                                        t.error(s)
                                    };
                                let l = !1;
                                const u = i => {
                                        l || (t.next(r()), l = !0);
                                        let s = {
                                            type: Gc.DownloadProgress,
                                            loaded: i.loaded
                                        };
                                        i.lengthComputable && (s.total = i.total), "text" === e.responseType && n.responseText && (s.partialText = n.responseText), t.next(s)
                                    },
                                    c = e => {
                                        let n = {
                                            type: Gc.UploadProgress,
                                            loaded: e.loaded
                                        };
                                        e.lengthComputable && (n.total = e.total), t.next(n)
                                    };
                                return n.addEventListener("load", o), n.addEventListener("error", a), e.reportProgress && (n.addEventListener("progress", u), null !== i && n.upload && n.upload.addEventListener("progress", c)), n.send(i), t.next({
                                    type: Gc.Sent
                                }), () => {
                                    n.removeEventListener("error", a), n.removeEventListener("load", o), e.reportProgress && (n.removeEventListener("progress", u), null !== i && n.upload && n.upload.removeEventListener("progress", c)), n.readyState !== n.DONE && n.abort()
                                }
                            })
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(We(rh))
                    }, e.\u0275prov = le({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })();
            const lh = new Oe("XSRF_COOKIE_NAME"),
                uh = new Oe("XSRF_HEADER_NAME");
            class ch {}
            let hh = (() => {
                    class e {
                        constructor(e, t, n) {
                            this.doc = e, this.platform = t, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
                        }
                        getToken() {
                            if ("server" === this.platform) return null;
                            const e = this.doc.cookie || "";
                            return e !== this.lastCookieString && (this.parseCount++, this.lastToken = Gu(e, this.cookieName), this.lastCookieString = e), this.lastToken
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(We(vu), We(Dl), We(lh))
                    }, e.\u0275prov = le({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                dh = (() => {
                    class e {
                        constructor(e, t) {
                            this.tokenService = e, this.headerName = t
                        }
                        intercept(e, t) {
                            const n = e.url.toLowerCase();
                            if ("GET" === e.method || "HEAD" === e.method || n.startsWith("http://") || n.startsWith("https://")) return t.handle(e);
                            const i = this.tokenService.getToken();
                            return null === i || e.headers.has(this.headerName) || (e = e.clone({
                                headers: e.headers.set(this.headerName, i)
                            })), t.handle(e)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(We(ch), We(uh))
                    }, e.\u0275prov = le({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                ph = (() => {
                    class e {
                        constructor(e, t) {
                            this.backend = e, this.injector = t, this.chain = null
                        }
                        handle(e) {
                            if (null === this.chain) {
                                const e = this.injector.get(nh, []);
                                this.chain = e.reduceRight((e, t) => new th(e, t), this.backend)
                            }
                            return this.chain.handle(e)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(We(Vc), We(Hr))
                    }, e.\u0275prov = le({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                fh = (() => {
                    class e {
                        static disable() {
                            return {
                                ngModule: e,
                                providers: [{
                                    provide: dh,
                                    useClass: ih
                                }]
                            }
                        }
                        static withOptions(t = {}) {
                            return {
                                ngModule: e,
                                providers: [t.cookieName ? {
                                    provide: lh,
                                    useValue: t.cookieName
                                } : [], t.headerName ? {
                                    provide: uh,
                                    useValue: t.headerName
                                } : []]
                            }
                        }
                    }
                    return e.\u0275mod = dt({
                        type: e
                    }), e.\u0275inj = ue({
                        factory: function(t) {
                            return new(t || e)
                        },
                        providers: [dh, {
                            provide: nh,
                            useExisting: dh,
                            multi: !0
                        }, {
                            provide: ch,
                            useClass: hh
                        }, {
                            provide: lh,
                            useValue: "XSRF-TOKEN"
                        }, {
                            provide: uh,
                            useValue: "X-XSRF-TOKEN"
                        }]
                    }), e
                })(),
                gh = (() => {
                    class e {}
                    return e.\u0275mod = dt({
                        type: e
                    }), e.\u0275inj = ue({
                        factory: function(t) {
                            return new(t || e)
                        },
                        providers: [eh, {
                            provide: Fc,
                            useClass: ph
                        }, ah, {
                            provide: Vc,
                            useExisting: ah
                        }, oh, {
                            provide: rh,
                            useExisting: oh
                        }],
                        imports: [
                            [fh.withOptions({
                                cookieName: "XSRF-TOKEN",
                                headerName: "X-XSRF-TOKEN"
                            })]
                        ]
                    }), e
                })();

            function mh(e, t, n, s) {
                return i(n) && (s = n, n = void 0), s ? mh(e, t, n).pipe(T(e => l(e) ? s(...e) : s(e))) : new v(i => {
                    ! function e(t, n, i, s, r) {
                        let o;
                        if (function(e) {
                                return e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener
                            }(t)) {
                            const e = t;
                            t.addEventListener(n, i, r), o = () => e.removeEventListener(n, i, r)
                        } else if (function(e) {
                                return e && "function" == typeof e.on && "function" == typeof e.off
                            }(t)) {
                            const e = t;
                            t.on(n, i), o = () => e.off(n, i)
                        } else if (function(e) {
                                return e && "function" == typeof e.addListener && "function" == typeof e.removeListener
                            }(t)) {
                            const e = t;
                            t.addListener(n, i), o = () => e.removeListener(n, i)
                        } else {
                            if (!t || !t.length) throw new TypeError("Invalid event target");
                            for (let o = 0, a = t.length; o < a; o++) e(t[o], n, i, s, r)
                        }
                        s.add(o)
                    }(e, t, (function(e) {
                        i.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : e)
                    }), i, n)
                })
            }
            class wh extends h {
                constructor(e, t) {
                    super()
                }
                schedule(e, t = 0) {
                    return this
                }
            }
            class vh extends wh {
                constructor(e, t) {
                    super(e, t), this.scheduler = e, this.work = t, this.pending = !1
                }
                schedule(e, t = 0) {
                    if (this.closed) return this;
                    this.state = e;
                    const n = this.id,
                        i = this.scheduler;
                    return null != n && (this.id = this.recycleAsyncId(i, n, t)), this.pending = !0, this.delay = t, this.id = this.id || this.requestAsyncId(i, this.id, t), this
                }
                requestAsyncId(e, t, n = 0) {
                    return setInterval(e.flush.bind(e, this), n)
                }
                recycleAsyncId(e, t, n = 0) {
                    if (null !== n && this.delay === n && !1 === this.pending) return t;
                    clearInterval(t)
                }
                execute(e, t) {
                    if (this.closed) return new Error("executing a cancelled action");
                    this.pending = !1;
                    const n = this._execute(e, t);
                    if (n) return n;
                    !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                }
                _execute(e, t) {
                    let n = !1,
                        i = void 0;
                    try {
                        this.work(e)
                    } catch (s) {
                        n = !0, i = !!s && s || new Error(s)
                    }
                    if (n) return this.unsubscribe(), i
                }
                _unsubscribe() {
                    const e = this.id,
                        t = this.scheduler,
                        n = t.actions,
                        i = n.indexOf(this);
                    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== i && n.splice(i, 1), null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null
                }
            }
            let _h = (() => {
                class e {
                    constructor(t, n = e.now) {
                        this.SchedulerAction = t, this.now = n
                    }
                    schedule(e, t = 0, n) {
                        return new this.SchedulerAction(this, e).schedule(n, t)
                    }
                }
                return e.now = () => Date.now(), e
            })();
            class yh extends _h {
                constructor(e, t = _h.now) {
                    super(e, () => yh.delegate && yh.delegate !== this ? yh.delegate.now() : t()), this.actions = [], this.active = !1, this.scheduled = void 0
                }
                schedule(e, t = 0, n) {
                    return yh.delegate && yh.delegate !== this ? yh.delegate.schedule(e, t, n) : super.schedule(e, t, n)
                }
                flush(e) {
                    const {
                        actions: t
                    } = this;
                    if (this.active) return void t.push(e);
                    let n;
                    this.active = !0;
                    do {
                        if (n = e.execute(e.state, e.delay)) break
                    } while (e = t.shift());
                    if (this.active = !1, n) {
                        for (; e = t.shift();) e.unsubscribe();
                        throw n
                    }
                }
            }
            const bh = new yh(vh);

            function Ch(e) {
                const {
                    subscriber: t,
                    counter: n,
                    period: i
                } = e;
                t.next(n), this.schedule({
                    subscriber: t,
                    counter: n + 1,
                    period: i
                }, i)
            }
            const xh = new v(e => e.complete());
            class Sh {
                constructor(e) {
                    this.notifier = e
                }
                call(e, t) {
                    const n = new Eh(e),
                        i = V(this.notifier, new H(n));
                    return i && !n.seenValue ? (n.add(i), t.subscribe(n)) : n
                }
            }
            class Eh extends F {
                constructor(e) {
                    super(e), this.seenValue = !1
                }
                notifyNext() {
                    this.seenValue = !0, this.complete()
                }
                notifyComplete() {}
            }

            function Th(e) {
                return t => t.lift(new kh(e))
            }
            class kh {
                constructor(e) {
                    this.value = e
                }
                call(e, t) {
                    return t.subscribe(new Ih(e, this.value))
                }
            }
            class Ih extends f {
                constructor(e, t) {
                    super(e), this.value = t
                }
                _next(e) {
                    this.destination.next(this.value)
                }
            }

            function Mh(...e) {
                return $(1)(Oc(...e))
            }
            class Ah {
                constructor(e) {
                    this.project = e
                }
                call(e, t) {
                    return t.subscribe(new Rh(e, this.project))
                }
            }
            class Rh extends F {
                constructor(e, t) {
                    super(e), this.project = t, this.index = 0
                }
                _next(e) {
                    let t;
                    const n = this.index++;
                    try {
                        t = this.project(e, n)
                    } catch (i) {
                        return void this.destination.error(i)
                    }
                    this._innerSub(t)
                }
                _innerSub(e) {
                    const t = this.innerSubscription;
                    t && t.unsubscribe();
                    const n = new H(this),
                        i = this.destination;
                    i.add(n), this.innerSubscription = V(e, n), this.innerSubscription !== n && i.add(this.innerSubscription)
                }
                _complete() {
                    const {
                        innerSubscription: e
                    } = this;
                    e && !e.closed || super._complete(), this.unsubscribe()
                }
                _unsubscribe() {
                    this.innerSubscription = void 0
                }
                notifyComplete() {
                    this.innerSubscription = void 0, this.isStopped && super._complete()
                }
                notifyNext(e) {
                    this.destination.next(e)
                }
            }
            const Dh = ["ngucarousel"],
                Nh = ["nguItemsContainer"],
                Ph = ["touchContainer"],
                Oh = [
                    [
                        ["", "NguCarouselPrev", ""]
                    ],
                    [
                        ["", "NguCarouselNext", ""]
                    ],
                    [
                        ["", "NguCarouselPoint", ""]
                    ]
                ],
                Lh = ["[NguCarouselPrev]", "[NguCarouselNext]", "[NguCarouselPoint]"],
                Hh = ["*"];
            class Fh {}
            class Vh {}
            class jh {
                constructor(e = 0, t = 0, n = 0, i = 0, s = 0) {
                    this.xs = e, this.sm = t, this.md = n, this.lg = i, this.all = s, this.xl = 0
                }
            }
            class Bh {
                constructor(e = 768, t = 992, n = 1200, i = 1200) {
                    this.sm = e, this.md = t, this.lg = n, this.xl = i
                }
            }
            class zh {
                constructor(e) {
                    this.$implicit = e
                }
            }
            let $h = (() => {
                    class e {}
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275dir = ft({
                        type: e,
                        selectors: [
                            ["", "NguCarouselNext", ""]
                        ]
                    }), e
                })(),
                Uh = (() => {
                    class e {}
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275dir = ft({
                        type: e,
                        selectors: [
                            ["", "NguCarouselPrev", ""]
                        ]
                    }), e
                })(),
                Wh = (() => {
                    class e {}
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275dir = ft({
                        type: e,
                        selectors: [
                            ["", "NguCarouselPoint", ""]
                        ]
                    }), e
                })(),
                Zh = (() => {
                    class e {
                        constructor(e) {
                            this.template = e
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(so(Aa))
                    }, e.\u0275dir = ft({
                        type: e,
                        selectors: [
                            ["", "nguCarouselDef", ""]
                        ]
                    }), e
                })(),
                qh = (() => {
                    class e {
                        constructor(e) {
                            this.viewContainer = e
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(so(Da))
                    }, e.\u0275dir = ft({
                        type: e,
                        selectors: [
                            ["", "nguCarouselOutlet", ""]
                        ]
                    }), e
                })(),
                Gh = (() => {
                    class e extends class {
                        constructor(e = new Vh, t = new Fh, n, i = new jh, s, r, o, a = "fixed", l = "", u = 0, c = 0, h = 0, d = 0, p = 0, f = 0, g = 0, m = 0, w = 0, v = "cubic-bezier(0, 0, 0.2, 1)", _ = 200, y = !1, b = 0, C = 0, x = !1, S = !0, E = !1, T = !1, k = !0, I = 1) {
                            this.touch = e, this.vertical = t, this.interval = n, this.transform = i, this.button = s, this.visibleItems = r, this.deviceType = o, this.type = a, this.token = l, this.items = u, this.load = c, this.deviceWidth = h, this.carouselWidth = d, this.itemWidth = p, this.slideItems = f, this.itemWidthPer = g, this.itemLength = m, this.currentSlide = w, this.easing = v, this.speed = _, this.loop = y, this.dexVal = b, this.touchTransform = C, this.isEnd = x, this.isFirst = S, this.isLast = E, this.RTL = T, this.point = k, this.velocity = I
                        }
                    } {
                        constructor(e, t, n, i, s) {
                            super(), this._el = e, this._renderer = t, this._differs = n, this.platformId = i, this.cdr = s, this.withAnim = !0, this.isHovered = !1, this.carouselLoad = new ol, this.onMove = new ol, this._intervalController$ = new x, this.pointNumbers = []
                        }
                        get dataSource() {
                            return this._dataSource
                        }
                        set dataSource(e) {
                            e && this._switchDataSource(e)
                        }
                        set nextBtn(e) {
                            this.listener2 && this.listener2(), e && (this.listener2 = this._renderer.listen(e.nativeElement, "click", () => this._carouselScrollOne(1)))
                        }
                        set prevBtn(e) {
                            this.listener1 && this.listener1(), e && (this.listener1 = this._renderer.listen(e.nativeElement, "click", () => this._carouselScrollOne(0)))
                        }
                        get trackBy() {
                            return this._trackByFn
                        }
                        set trackBy(e) {
                            di() && null != e && "function" != typeof e && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(e)}.`), this._trackByFn = e
                        }
                        ngOnInit() {
                            this._dataDiffer = this._differs.find([]).create((e, t) => this.trackBy ? this.trackBy(e, t) : t)
                        }
                        ngDoCheck() {
                            this.arrayChanges = this._dataDiffer.diff(this.dataSource), this.arrayChanges && this._defDirec && this._observeRenderChanges()
                        }
                        _switchDataSource(e) {
                            this._dataSource = e, this._defDirec && this._observeRenderChanges()
                        }
                        _observeRenderChanges() {
                            let e;
                            var t;
                            this._dataSource instanceof v ? e = this._dataSource : Array.isArray(this._dataSource) && (e = Oc(this._dataSource)), e && (this._dataSubscription = e.pipe((t = this._intervalController$, e => e.lift(new Sh(t)))).subscribe(e => {
                                this.renderNodeChanges(e), this.isLast = !1
                            }))
                        }
                        renderNodeChanges(e, t = this._nodeOutlet.viewContainer) {
                            this.arrayChanges && (this.arrayChanges.forEachOperation((n, i, s) => {
                                const r = this._getNodeDef(e[s], s);
                                if (null == n.previousIndex) {
                                    const n = new zh(e[s]);
                                    n.index = s, t.createEmbeddedView(r.template, n, s)
                                } else if (null == s) t.remove(i);
                                else {
                                    const e = t.get(i);
                                    t.move(e, s)
                                }
                            }), this._updateItemIndexContext(), this.carousel && this._storeCarouselData())
                        }
                        _updateItemIndexContext() {
                            const e = this._nodeOutlet.viewContainer;
                            for (let t = 0, n = e.length; t < n; t++) {
                                const i = e.get(t).context;
                                i.count = n, i.first = 0 === t, i.last = t === n - 1, i.even = t % 2 == 0, i.odd = !i.even, i.index = t
                            }
                        }
                        _getNodeDef(e, t) {
                            return 1 === this._defDirec.length ? this._defDirec.first : this._defDirec.find(n => n.when && n.when(t, e)) || this._defaultNodeDef
                        }
                        ngAfterViewInit() {
                            this.carousel = this._el.nativeElement, this._inputValidation(), this.carouselCssNode = this._createStyleElem(), oc(this.platformId) && (this._carouselInterval(), this.vertical.enabled || this._touch(), this.listener3 = this._renderer.listen("window", "resize", e => {
                                this._onResizing(e)
                            }), this._onWindowScrolling())
                        }
                        ngAfterContentInit() {
                            this._observeRenderChanges(), this.cdr.markForCheck()
                        }
                        _inputValidation() {
                            this.inputs.gridBreakpoints = this.inputs.gridBreakpoints ? this.inputs.gridBreakpoints : new Bh, void 0 === this.inputs.grid.xl && (this.inputs.grid.xl = this.inputs.grid.lg), this.type = 0 !== this.inputs.grid.all ? "fixed" : "responsive", this.loop = this.inputs.loop || !1, this.inputs.easing = this.inputs.easing || "cubic-bezier(0, 0, 0.2, 1)", this.touch.active = this.inputs.touch || !1, this.RTL = !!this.inputs.RTL, this.interval = this.inputs.interval || null, this.velocity = "number" == typeof this.inputs.velocity ? this.inputs.velocity : this.velocity, this.inputs.vertical && this.inputs.vertical.enabled && (this.vertical.enabled = this.inputs.vertical.enabled, this.vertical.height = this.inputs.vertical.height), this.directionSym = this.RTL ? "" : "-", this.point = !this.inputs.point || void 0 === this.inputs.point.visible || this.inputs.point.visible, this._carouselSize()
                        }
                        ngOnDestroy() {
                            this.carouselInt && this.carouselInt.unsubscribe(), this._intervalController$.unsubscribe(), this.carouselLoad.complete(), this.onMove.complete(), clearTimeout(this.onScrolling);
                            for (let e = 1; e <= 4; e++) {
                                const t = "listener" + e;
                                this[t] && this[t]()
                            }
                        }
                        _onResizing(e) {
                            clearTimeout(this.onResize), this.onResize = setTimeout(() => {
                                this.deviceWidth !== e.target.outerWidth && (this._setStyle(this.nguItemsContainer.nativeElement, "transition", ""), this._storeCarouselData())
                            }, 500)
                        }
                        _touch() {
                            this.inputs.touch && Promise.resolve().then(n.t.bind(null, "QFtD", 7)).then(() => {
                                const e = new Hammer(this.touchContainer.nativeElement);
                                e.get("pan").set({
                                    direction: Hammer.DIRECTION_HORIZONTAL
                                }), e.on("panstart", e => {
                                    this.carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth, this.touchTransform = this.transform[this.deviceType], this.dexVal = 0, this._setStyle(this.nguItemsContainer.nativeElement, "transition", "")
                                }), this.vertical.enabled ? (e.on("panup", e => {
                                    this._touchHandling("panleft", e)
                                }), e.on("pandown", e => {
                                    this._touchHandling("panright", e)
                                })) : (e.on("panleft", e => {
                                    this._touchHandling("panleft", e)
                                }), e.on("panright", e => {
                                    this._touchHandling("panright", e)
                                })), e.on("panend pancancel", e => {
                                    if (Math.abs(e.velocity) >= this.velocity) {
                                        this.touch.velocity = e.velocity;
                                        let t = 0;
                                        t = this.RTL ? "panright" === this.touch.swipe ? 1 : 0 : "panright" === this.touch.swipe ? 0 : 1, this._carouselScrollOne(t)
                                    } else this.dexVal = 0, this._setStyle(this.nguItemsContainer.nativeElement, "transition", "transform 324ms cubic-bezier(0, 0, 0.2, 1)"), this._setStyle(this.nguItemsContainer.nativeElement, "transform", "")
                                }), e.on("hammer.input", e => {
                                    e.srcEvent.stopPropagation()
                                })
                            })
                        }
                        _touchHandling(e, t) {
                            if (0 === t.center.x) return;
                            let n = (t = Math.abs(this.vertical.enabled ? t.deltaY : t.deltaX)) - this.dexVal;
                            n = "responsive" === this.type ? Math.abs(t - this.dexVal) / (this.vertical.enabled ? this.vertical.height : this.carouselWidth) * 100 : n, this.dexVal = t, this.touch.swipe = e, this._setTouchTransfrom(e, n), this._setTransformFromTouch()
                        }
                        _setTouchTransfrom(e, t) {
                            this.touchTransform = e === (this.RTL ? "panright" : "panleft") ? t + this.touchTransform : this.touchTransform - t
                        }
                        _setTransformFromTouch() {
                            this.touchTransform < 0 && (this.touchTransform = 0);
                            const e = "responsive" === this.type ? "%" : "px";
                            this._setStyle(this.nguItemsContainer.nativeElement, "transform", this.vertical.enabled ? `translate3d(0, ${this.directionSym}${this.touchTransform}${e}, 0)` : `translate3d(${this.directionSym}${this.touchTransform}${e}, 0, 0)`)
                        }
                        _onWindowScrolling() {
                            const e = this.carousel.offsetTop,
                                t = window.scrollY,
                                n = window.innerHeight,
                                i = this.carousel.offsetHeight;
                            this._intervalController$.next(e <= t + n - i / 4 && e + i / 2 >= t ? 1 : 0)
                        }
                        _storeCarouselData() {
                            const e = this.inputs.gridBreakpoints;
                            this.deviceWidth = oc(this.platformId) ? window.innerWidth : e.xl, this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth, "responsive" === this.type ? (this.deviceType = this.deviceWidth >= e.xl ? "xl" : this.deviceWidth >= e.lg ? "lg" : this.deviceWidth >= e.md ? "md" : this.deviceWidth >= e.sm ? "sm" : "xs", this.items = this.inputs.grid[this.deviceType], this.itemWidth = this.carouselWidth / this.items) : (this.items = Math.trunc(this.carouselWidth / this.inputs.grid.all), this.itemWidth = this.inputs.grid.all, this.deviceType = "all"), this.slideItems = +(this.inputs.slide < this.items ? this.inputs.slide : this.items), this.load = this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems, this.speed = this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400, this._carouselPoint()
                        }
                        reset(e) {
                            e && (this.withAnim = !1), this.carouselCssNode.innerHTML = "", this.moveTo(0), this._carouselPoint()
                        }
                        _carouselPoint() {
                            this.pointIndex = Math.ceil((this.dataSource.length - (this.items - this.slideItems)) / this.slideItems);
                            const e = [];
                            if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide)
                                for (let t = 0; t < this.pointIndex; t++) e.push(t);
                            this.pointNumbers = e, this._carouselPointActiver(), this.pointIndex <= 1 ? this._btnBoolean(1, 1) : this._btnBoolean(0 !== this.currentSlide || this.loop ? 0 : 1, 0)
                        }
                        _carouselPointActiver() {
                            const e = Math.ceil(this.currentSlide / this.slideItems);
                            this.activePoint = e, this.cdr.markForCheck()
                        }
                        moveTo(e, t) {
                            if (t && (this.withAnim = !1), this.activePoint !== e && e < this.pointIndex) {
                                let t;
                                const n = this.currentSlide < e ? 1 : 0;
                                switch (e) {
                                    case 0:
                                        this._btnBoolean(1, 0), t = e * this.slideItems;
                                        break;
                                    case this.pointIndex - 1:
                                        this._btnBoolean(0, 1), t = this.dataSource.length - this.items;
                                        break;
                                    default:
                                        this._btnBoolean(0, 0), t = e * this.slideItems
                                }
                                this._carouselScrollTwo(n, t, this.speed)
                            }
                        }
                        _carouselSize() {
                            this.token = this._generateID();
                            let e = "";
                            this.styleid = `.${this.token} > .ngucarousel > .ngu-touch-container > .ngucarousel-items`, "banner" === this.inputs.custom && this._renderer.addClass(this.carousel, "banner"), "lazy" === this.inputs.animation && (e += this.styleid + " > .item {transition: transform .6s ease;}");
                            const t = this.inputs.gridBreakpoints;
                            let n = "";
                            n = this.vertical.enabled ? `@media (max-width:${t.sm-1}px){${this.styleid} > .item {height: ${this.vertical.height/+this.inputs.grid.xs}px}}\n                    @media (max-width:${t.sm}px){${this.styleid} > .item {height: ${this.vertical.height/+this.inputs.grid.sm}px}}\n                    @media (min-width:${t.md}px){${this.styleid} > .item {height: ${this.vertical.height/+this.inputs.grid.md}px}}\n                    @media (min-width:${t.lg}px){${this.styleid} > .item {height: ${this.vertical.height/+this.inputs.grid.lg}px}}\n                    @media (min-width:${t.xl}px){${this.styleid} > .item {height: ${this.vertical.height/+this.inputs.grid.xl}px}}` : "responsive" === this.type ? `@media (max-width:${t.sm-1}px){${"mobile"===this.inputs.type?`${this.styleid} .item {flex: 0 0 ${95/+this.inputs.grid.xs}%; width: ${95/+this.inputs.grid.xs}%;}`:`${this.styleid} .item {flex: 0 0 ${100/+this.inputs.grid.xs}%; width: ${100/+this.inputs.grid.xs}%;}`}}\n                    @media (min-width:${t.sm}px){${this.styleid} > .item {flex: 0 0 ${100/+this.inputs.grid.sm}%; width: ${100/+this.inputs.grid.sm}%}}\n                    @media (min-width:${t.md}px){${this.styleid} > .item {flex: 0 0 ${100/+this.inputs.grid.md}%; width: ${100/+this.inputs.grid.md}%}}\n                    @media (min-width:${t.lg}px){${this.styleid} > .item {flex: 0 0 ${100/+this.inputs.grid.lg}%; width: ${100/+this.inputs.grid.lg}%}}\n                    @media (min-width:${t.xl}px){${this.styleid} > .item {flex: 0 0 ${100/+this.inputs.grid.xl}%; width: ${100/+this.inputs.grid.xl}%}}` : `${this.styleid} .item {flex: 0 0 ${this.inputs.grid.all}px; width: ${this.inputs.grid.all}px;}`, this._renderer.addClass(this.carousel, this.token), this.vertical.enabled && (this._renderer.addClass(this.nguItemsContainer.nativeElement, "nguvertical"), this._renderer.setStyle(this.carouselMain1.nativeElement, "height", this.vertical.height + "px")), this.RTL && !this.vertical.enabled && this._renderer.addClass(this.carousel, "ngurtl"), this._createStyleElem(`${e} ${n}`), this._storeCarouselData()
                        }
                        _carouselScrollOne(e) {
                            let t = this.speed,
                                n = 0,
                                i = 0;
                            const s = Math.ceil(this.dexVal / this.itemWidth);
                            if (this._setStyle(this.nguItemsContainer.nativeElement, "transform", ""), 1 !== this.pointIndex)
                                if (0 !== e || (this.loop || this.isFirst) && !this.loop) 1 !== e || (this.loop || this.isLast) && !this.loop || (this.dataSource.length <= this.currentSlide + this.items + this.slideItems && !this.isLast ? (i = this.dataSource.length - this.items, this._btnBoolean(0, 1)) : this.isLast ? (i = n = 0, t = 400, this._btnBoolean(1, 0)) : (this._btnBoolean(0, 0), s > this.slideItems ? (i = this.currentSlide + this.slideItems + (s - this.slideItems), t = 200) : i = this.currentSlide + this.slideItems), this._carouselScrollTwo(e, i, t));
                                else {
                                    const r = this.currentSlide - this.slideItems + this.slideItems;
                                    this._btnBoolean(0, 1), 0 === this.currentSlide ? (i = this.dataSource.length - this.items, t = 400, this._btnBoolean(0, 1)) : this.slideItems >= r ? (i = n = 0, this._btnBoolean(1, 0)) : (this._btnBoolean(0, 0), s > this.slideItems ? (i = this.currentSlide - s, t = 200) : i = this.currentSlide - this.slideItems), this._carouselScrollTwo(e, i, t)
                                }
                        }
                        _carouselScrollTwo(e, t, n) {
                            if (0 !== this.dexVal) {
                                const e = Math.abs(this.touch.velocity);
                                let t = Math.floor(this.dexVal / e / this.dexVal * (this.deviceWidth - this.dexVal));
                                t = t > n ? n : t, n = t < 200 ? 200 : t, this.dexVal = 0
                            }
                            this.withAnim ? (this._setStyle(this.nguItemsContainer.nativeElement, "transition", `transform ${n}ms ${this.inputs.easing}`), this.inputs.animation && this._carouselAnimator(e, t + 1, t + this.items, n, Math.abs(this.currentSlide - t))) : this._setStyle(this.nguItemsContainer.nativeElement, "transition", ""), this.itemLength = this.dataSource.length, this._transformStyle(t), this.currentSlide = t, this.onMove.emit(this), this._carouselPointActiver(), this._carouselLoadTrigger(), this.withAnim = !0
                        }
                        _btnBoolean(e, t) {
                            this.isFirst = !!e, this.isLast = !!t
                        }
                        _transformString(e, t) {
                            let n = "";
                            return n += this.styleid + " { transform: translate3d(", this.vertical.enabled ? (this.transform[e] = this.vertical.height / this.inputs.grid[e] * t, n += `0, -${this.transform[e]}px, 0`) : (this.transform[e] = 100 / this.inputs.grid[e] * t, n += `${this.directionSym}${this.transform[e]}%, 0, 0`), n += "); }", n
                        }
                        _transformStyle(e) {
                            let t = "";
                            if ("responsive" === this.type) {
                                const n = this.inputs.gridBreakpoints;
                                t = `@media (max-width: ${n.sm-1}px) {${this._transformString("xs",e)}}\n      @media (min-width: ${n.sm}px) {${this._transformString("sm",e)} }\n      @media (min-width: ${n.md}px) {${this._transformString("md",e)} }\n      @media (min-width: ${n.lg}px) {${this._transformString("lg",e)} }\n      @media (min-width: ${n.xl}px) {${this._transformString("xl",e)} }`
                            } else this.transform.all = this.inputs.grid.all * e, t = `${this.styleid} { transform: translate3d(${this.directionSym}${this.transform.all}px, 0, 0);`;
                            this.carouselCssNode.textContent = t
                        }
                        _carouselLoadTrigger() {
                            "number" == typeof this.inputs.load && this.dataSource.length - this.load <= this.currentSlide + this.items && this.carouselLoad.emit(this.currentSlide)
                        }
                        _generateID() {
                            let e = "";
                            const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                            for (let n = 0; n < 6; n++) e += t.charAt(Math.floor(Math.random() * t.length));
                            return "ngucarousel" + e
                        }
                        _carouselInterval() {
                            const e = this.carouselMain1.nativeElement;
                            if (this.interval && this.loop) {
                                this.listener4 = this._renderer.listen("window", "scroll", () => {
                                    clearTimeout(this.onScrolling), this.onScrolling = setTimeout(() => {
                                        this._onWindowScrolling()
                                    }, 600)
                                });
                                const t = mh(e, "mouseleave").pipe(Th(1)),
                                    n = mh(e, "mouseenter").pipe(Th(0)),
                                    i = mh(e, "touchstart").pipe(Th(1)),
                                    s = mh(e, "touchend").pipe(Th(0)),
                                    r = function(e = 0, t = bh) {
                                        var n;
                                        return (l(n = e) || !(n - parseFloat(n) + 1 >= 0) || e < 0) && (e = 0), t && "function" == typeof t.schedule || (t = bh), new v(n => (n.add(t.schedule(Ch, e, {
                                            subscriber: n,
                                            counter: 0,
                                            period: e
                                        })), n))
                                    }(this.inputs.interval.timing).pipe(Th(1));
                                setTimeout(() => {
                                    this.carouselInt = W(t, i, n, s, this._intervalController$).pipe(function(...e) {
                                        const t = e[e.length - 1];
                                        return E(t) ? (e.pop(), n => Mh(e, n, t)) : t => Mh(e, t)
                                    }(1), function e(t, n) {
                                        return "function" == typeof n ? i => i.pipe(e((e, i) => L(t(e, i)).pipe(T((t, s) => n(e, t, i, s))))) : e => e.lift(new Ah(t))
                                    }(e => (this.isHovered = !e, this.cdr.markForCheck(), e ? r : xh))).subscribe(e => {
                                        this._carouselScrollOne(1)
                                    })
                                }, this.interval.initialDelay)
                            }
                        }
                        _updateItemIndexContextAni() {
                            const e = this._nodeOutlet.viewContainer;
                            for (let t = 0, n = e.length; t < n; t++) {
                                const i = e.get(t).context;
                                i.count = n, i.first = 0 === t, i.last = t === n - 1, i.even = t % 2 == 0, i.odd = !i.even, i.index = t
                            }
                        }
                        _carouselAnimator(e, t, n, i, s, r = this._nodeOutlet.viewContainer) {
                            let o = s < 5 ? s : 5;
                            o = 1 === o ? 3 : o;
                            const a = [];
                            if (1 === e)
                                for (let l = t - 1; l < n; l++) a.push(l), o *= 2, r.get(l).context.animate = {
                                    value: !0,
                                    params: {
                                        distance: o
                                    }
                                };
                            else
                                for (let l = n - 1; l >= t - 1; l--) a.push(l), o *= 2, r.get(l).context.animate = {
                                    value: !0,
                                    params: {
                                        distance: -o
                                    }
                                };
                            this.cdr.markForCheck(), setTimeout(() => {
                                this._removeAnimations(a)
                            }, .7 * i)
                        }
                        _removeAnimations(e) {
                            const t = this._nodeOutlet.viewContainer;
                            e.forEach(e => {
                                t.get(e).context.animate = {
                                    value: !1,
                                    params: {
                                        distance: 0
                                    }
                                }
                            }), this.cdr.markForCheck()
                        }
                        _setStyle(e, t, n) {
                            this._renderer.setStyle(e, t, n)
                        }
                        _createStyleElem(e) {
                            const t = this._renderer.createElement("style");
                            if (e) {
                                const n = this._renderer.createText(e);
                                this._renderer.appendChild(t, n)
                            }
                            return this._renderer.appendChild(this.carousel, t), t
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(so(oa), so(ca), so(Ea), so(Dl), so(Cr))
                    }, e.\u0275cmp = lt({
                        type: e,
                        selectors: [
                            ["ngu-carousel"]
                        ],
                        contentQueries: function(e, t, n) {
                            var i;
                            1 & e && (yl(n, $h, !0, oa), yl(n, Uh, !0, oa), yl(n, Zh, !1)), 2 & e && (wl(i = bl()) && (t.nextBtn = i.first), wl(i = bl()) && (t.prevBtn = i.first), wl(i = bl()) && (t._defDirec = i))
                        },
                        viewQuery: function(e, t) {
                            var n;
                            1 & e && (vl(qh, !0), vl(Dh, !0, oa), vl(Nh, !0, oa), vl(Ph, !0, oa)), 2 & e && (wl(n = bl()) && (t._nodeOutlet = n.first), wl(n = bl()) && (t.carouselMain1 = n.first), wl(n = bl()) && (t.nguItemsContainer = n.first), wl(n = bl()) && (t.touchContainer = n.first))
                        },
                        inputs: {
                            dataSource: "dataSource",
                            trackBy: "trackBy",
                            inputs: "inputs"
                        },
                        outputs: {
                            carouselLoad: "carouselLoad",
                            onMove: "onMove"
                        },
                        features: [jr],
                        ngContentSelectors: Lh,
                        decls: 11,
                        vars: 0,
                        consts: [
                            [1, "ngucarousel"],
                            ["ngucarousel", ""],
                            [1, "ngu-touch-container"],
                            ["touchContainer", ""],
                            [1, "ngucarousel-items"],
                            ["nguItemsContainer", ""],
                            ["nguCarouselOutlet", ""],
                            [1, "nguclearFix"]
                        ],
                        template: function(e, t) {
                            1 & e && (yo(Oh), ao(0, "div", 0, 1), bo(2), ao(3, "div", 2, 3), ao(5, "div", 4, 5), co(7, 6, undefined), ho(), lo(), lo(), uo(8, "div", 7), bo(9, 1), lo(), bo(10, 2))
                        },
                        directives: [qh],
                        styles: ["[_nghost-%COMP%]{display:block;position:relative}.ngurtl[_nghost-%COMP%]{direction:rtl}.ngucarousel[_ngcontent-%COMP%]{height:100%;overflow:hidden;position:relative}.ngucarousel[_ngcontent-%COMP%]   .ngucarousel-items[_ngcontent-%COMP%]{display:flex;height:100%;position:relative}.nguvertical[_ngcontent-%COMP%]{flex-direction:column}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{bottom:20px;position:absolute;width:100%}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.55)}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#fff}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{box-sizing:border-box;list-style-type:none;margin:0;overflow:auto;padding:12px;text-align:center;white-space:nowrap}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:rgba(0,0,0,.55);border-radius:50%;display:inline-block;margin:0 4px;padding:4px;transition:.4s;transition-timing-function:cubic-bezier(.17,.67,.83,.67)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#6b6b6b;transform:scale(1.8)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.nguclearFix[_ngcontent-%COMP%]{clear:both}"],
                        changeDetection: 0
                    }), e
                })(),
                Yh = (() => {
                    class e {
                        constructor() {
                            this.classes = !0
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275cmp = lt({
                        type: e,
                        selectors: [
                            ["ngu-tile"]
                        ],
                        hostVars: 2,
                        hostBindings: function(e, t) {
                            2 & e && Lo("item", t.classes)
                        },
                        ngContentSelectors: Hh,
                        decls: 2,
                        vars: 0,
                        consts: [
                            [1, "tile"]
                        ],
                        template: function(e, t) {
                            1 & e && (yo(), ao(0, "div", 0), bo(1), lo())
                        },
                        styles: ["[_nghost-%COMP%]{box-sizing:border-box;padding:10px}.tile[_ngcontent-%COMP%]{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
                    }), e
                })(),
                Xh = (() => {
                    class e {}
                    return e.\u0275mod = dt({
                        type: e
                    }), e.\u0275inj = ue({
                        factory: function(t) {
                            return new(t || e)
                        },
                        imports: [
                            [rc]
                        ]
                    }), e
                })(),
                Qh = (() => {
                    class e {
                        constructor(e) {
                            this.http = e
                        }
                        getWidget(e, t) {
                            return this.http.get(`\https://app.reviewlab.ru/api/v1/widgets/widget/${e}${t?"/remote":""}`)
                        }
                        getReviews(e, {
                            type: t,
                            skip: n,
                            limit: i
                        }, s) {
                            const r = {
                                skip: n.toString(),
                                limit: i.toString()
                            };
                            return t && (r.type = t.toString()), this.http.get(`\https://app.reviewlab.ru/api/v1/widgets/widget/${e}/reviews${s?"/remote":""}`, {
                                params: r
                            })
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(We(eh))
                    }, e.\u0275prov = le({
                        token: e,
                        factory: e.\u0275fac,
                        providedIn: "root"
                    }), e
                })();
            var Kh = n("ekE9");
            let Jh = (() => {
                    class e {
                        transform(e) {
                            return e ? Array.isArray(e) ? e[0] : e : ""
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275pipe = gt({
                        name: "sourceLink",
                        type: e,
                        pure: !0
                    }), e
                })(),
                ed = (() => {
                    class e extends sc {
                        constructor() {
                            super()
                        }
                        transform(e, t) {
                            if (!e) return "";
                            const n = e && e.length > t ? "..." : "";
                            return super.transform(e, 0, t) + n
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275pipe = gt({
                        name: "ellipsis",
                        type: e,
                        pure: !0
                    }), e
                })();

            function td(e, t) {
                if (1 & e && (uo(0, "a", 11), tl(1, "sourceLink")), 2 & e) {
                    const e = vo(2);
                    Ho(e.getIcon(e.review.type)), ro("href", nl(1, 3, e.review.type === e.ReviewTypeE.yaMarket || e.review.type === e.ReviewTypeE.yaSprav || e.review.type === e.ReviewTypeE.googleMap ? e.source : e.review.src), Hi)
                }
            }

            function nd(e, t) {
                if (1 & e && (ao(0, "div", 12), uo(1, "meta", 13), uo(2, "meta", 14), lo()), 2 & e) {
                    const e = vo(2);
                    ns(1), ro("content", e.averageRatings), ns(1), ro("content", e.reviewsCount)
                }
            }

            function id(e, t) {
                1 & e && uo(0, "img", 25), 2 & e && ro("src", vo(4).review.photo, Hi)
            }
            const sd = function(e) {
                return {
                    "background-color": e
                }
            };

            function rd(e, t) {
                if (1 & e && (ao(0, "div", 26), Xo(1), lo()), 2 & e) {
                    const e = vo(4);
                    Ho(Ka(3, sd, e.color)), ns(1), Ko(" ", e.getAvatarLetters(e.review.name), " ")
                }
            }

            function od(e, t) {
                if (1 & e && (ao(0, "div", 22), no(1, id, 1, 1, "img", 23), no(2, rd, 2, 5, "ng-template", null, 24, El), lo()), 2 & e) {
                    const e = io(3),
                        t = vo(3);
                    ns(1), ro("ngIf", t.review.photo)("ngIfElse", e)
                }
            }
            const ad = function(e) {
                return {
                    icon_active: e
                }
            };

            function ld(e, t) {
                if (1 & e && (co(0), Cn(), ao(1, "svg", 31), ao(2, "g"), uo(3, "rect", 32), uo(4, "polygon", 33), lo(), lo(), ho()), 2 & e) {
                    const e = t.index,
                        n = vo(4);
                    ns(1), ro("ngClass", Ka(1, ad, n.review.rating >= e + 1))
                }
            }
            const ud = function() {
                return []
            };

            function cd(e, t) {
                if (1 & e && (ao(0, "div", 27), uo(1, "meta", 28), uo(2, "meta", 29), uo(3, "meta", 13), no(4, ld, 5, 3, "ng-container", 30), lo()), 2 & e) {
                    const e = vo(3);
                    ns(3), ro("content", e.review.rating), ns(1), ro("ngForOf", Qa(2, ud).constructor(5))
                }
            }

            function hd(e, t) {
                if (1 & e && (ao(0, "div", 34), ao(1, "span", 35), Xo(2), lo(), lo()), 2 & e) {
                    const e = vo(3);
                    ns(2), Qo(e.review.name)
                }
            }

            function dd(e, t) {
                if (1 & e && (ao(0, "div", 36), Xo(1), tl(2, "date"), lo()), 2 & e) {
                    const e = vo(3);
                    ns(1), Qo(function(e, t, n, i, s, r) {
                        const o = Gt(),
                            a = Ft(o, e);
                        return rl(o, sl(o, e) ? function(e, t, n, i, s, r, o, a, l) {
                            const u = t + n;
                            return eo(e, u, s, r, o, a) ? Xr(e, u + 4, l ? i.call(l, s, r, o, a) : i(s, r, o, a)) : Ja(e, u + 4)
                        }(o, sn(), t, a.transform, n, i, s, r, a) : a.transform(n, i, s, r))
                    }(2, 1, e.review.date, "d MMM yyyy", void 0, "ru"))
                }
            }

            function pd(e, t) {
                1 & e && (uo(0, "meta", 37), tl(1, "date")), 2 & e && ro("content", il(1, 1, vo(3).review.date, "dd-MM-yyyy"))
            }

            function fd(e, t) {
                if (1 & e && (ao(0, "div", 15), no(1, od, 4, 2, "div", 16), ao(2, "div", 17), no(3, cd, 5, 3, "div", 18), no(4, hd, 3, 1, "div", 19), no(5, dd, 3, 6, "div", 20), no(6, pd, 2, 4, "meta", 21), lo(), lo()), 2 & e) {
                    const e = vo(2);
                    ns(1), ro("ngIf", e.customSettings.isShowUserImage), ns(2), ro("ngIf", e.review.rating && e.customSettings.isShowReviewRating), ns(1), ro("ngIf", e.customSettings.isShowUserName), ns(1), ro("ngIf", e.customSettings.isShowReviewDate && e.review.date), ns(1), ro("ngIf", e.customSettings.isShowReviewDate && e.review.date)
                }
            }

            function gd(e, t) {
                if (1 & e && uo(0, "img", 43), 2 & e) {
                    const e = t.$implicit,
                        n = vo(4);
                    ro("src", e, Hi)("alt", n.review.message)
                }
            }

            function md(e, t) {
                if (1 & e && (ao(0, "div"), no(1, gd, 1, 2, "img", 42), lo()), 2 & e) {
                    const e = vo(3);
                    ns(1), ro("ngForOf", e.review.images)
                }
            }

            function wd(e, t) {
                if (1 & e && (uo(0, "p", 44), tl(1, "ellipsis")), 2 & e) {
                    const e = vo(3);
                    ro("innerHTML", il(1, 1, e.review.message, +e.customSettings.reviewShortLength || 220), Li)
                }
            }

            function vd(e, t) {
                1 & e && uo(0, "p", 44), 2 & e && ro("innerHTML", vo(3).review.message, Li)
            }

            function _d(e, t) {
                if (1 & e) {
                    const e = po();
                    ao(0, "div", 45), go("click", (function() {
                        return Xt(e), vo(3).readMore()
                    })), Xo(1), lo()
                }
                if (2 & e) {
                    const e = vo(3);
                    ns(1), Ko(" ", e.isMore ? "\u0421\u043a\u0440\u044b\u0442\u044c" : "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435", " ")
                }
            }

            function yd(e, t) {
                if (1 & e && (ao(0, "div", 38), no(1, md, 2, 1, "div", 39), no(2, wd, 2, 4, "p", 40), no(3, vd, 1, 1, "p", 40), no(4, _d, 2, 1, "div", 41), lo()), 2 & e) {
                    const e = vo(2);
                    ns(1), ro("ngIf", e.review.images && e.review.images.length), ns(1), ro("ngIf", !e.isMore), ns(1), ro("ngIf", e.isMore), ns(1), ro("ngIf", (null == e.review.message ? null : e.review.message.length) > (+e.customSettings.reviewShortLength || 220) + 1)
                }
            }

            function bd(e, t) {
                if (1 & e && (ao(0, "div", 46), ao(1, "a", 47), tl(2, "sourceLink"), Xo(3), lo(), lo()), 2 & e) {
                    const e = vo(2);
                    ns(1), ro("href", nl(2, 2, e.review.type === e.ReviewTypeE.yaMarket || e.review.type === e.ReviewTypeE.yaSprav || e.review.type === e.ReviewTypeE.googleMap ? e.source : e.review.src), Hi), ns(2), Ko(" \u041e\u0442\u0437\u044b\u0432 \u0438\u0437 ", e.ReviewTypeNameE[e.review.type], " ")
                }
            }

            function Cd(e, t) {
                if (1 & e && (ao(0, "div", 1), no(1, td, 2, 5, "a", 2), uo(2, "meta", 3), ao(3, "div", 4), uo(4, "meta", 5), uo(5, "meta", 6), no(6, nd, 3, 2, "div", 7), uo(7, "meta", 3), lo(), no(8, fd, 7, 5, "div", 8), no(9, yd, 5, 4, "div", 9), no(10, bd, 4, 4, "div", 10), lo()), 2 & e) {
                    const e = vo();
                    ns(1), ro("ngIf", e.customSettings.reviewLayout === e.ReviewLayoutE.column && !e.isMobile), ns(1), ro("content", e.project), ns(4), ro("ngIf", e.averageRatings), ns(1), ro("content", e.project), ns(1), ro("ngIf", e.customSettings.isShowUserImage || e.customSettings.isShowReviewRating || e.customSettings.isShowUserName), ns(1), ro("ngIf", e.customSettings.isShowTextMessage), ns(1), ro("ngIf", e.customSettings.isShowReviewSource && e.customSettings.reviewLayout !== e.ReviewLayoutE.column || e.customSettings.isShowReviewSource && e.isMobile)
                }
            }
            let xd = (() => {
                class e {
                    constructor() {
                        this.ReviewTypeNameE = Kh.ReviewTypeNameE, this.ReviewTypeE = Kh.ReviewTypeE, this.ReviewLayoutE = Kh.ReviewLayoutE, this.colors = ["#8585CC", "#5798D9", "#B37DB3", "#5798D9", "#B37DB3", "#50C0E6", "#6CA632", "#F29D61", "#F285AA"], this.isMore = !1
                    }
                    ngOnInit() {
                        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
                    }
                    readMore() {
                        this.isMore = !this.isMore
                    }
                    getAvatarLetters(e) {
                        return (e || "").split(" ").map(e => e[0]).join("").slice(0, 2).toUpperCase()
                    }
                    getIcon(e) {
                        return `background-image: url(\https://app.reviewlab.ru/widget/assets/icons/${e}.${"googleMap"===e||"avito"===e||"yaMaps"===e||"yaSprav"===e||"doubleGis"===e?"svg":"png"})`
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275cmp = lt({
                    type: e,
                    selectors: [
                        ["widget-review"]
                    ],
                    inputs: {
                        review: "review",
                        isMobile: "isMobile",
                        source: "source",
                        project: "project",
                        averageRatings: "averageRatings",
                        reviewsCount: "reviewsCount",
                        customSettings: "customSettings"
                    },
                    decls: 1,
                    vars: 1,
                    consts: [
                        ["class", "review", "itemscope", "", "itemtype", "https://schema.org/Review", 4, "ngIf"],
                        ["itemscope", "", "itemtype", "https://schema.org/Review", 1, "review"],
                        ["class", "review__src review__src-isMobile", "target", "_blank", "itemprop", "url", "rel", "nofollow", 3, "style", "href", 4, "ngIf"],
                        ["itemprop", "name", 3, "content"],
                        ["itemprop", "itemReviewed", "itemscope", "", "itemtype", "https://schema.org/Organization"],
                        ["itemprop", "address", "content", ""],
                        ["itemprop", "telephone", "content", ""],
                        ["itemprop", "aggregateRating", "itemscope", "", "itemtype", "https://schema.org/AggregateRating", 4, "ngIf"],
                        ["class", "review__header", 4, "ngIf"],
                        ["class", "review__body", "itemprop", "reviewBody", 4, "ngIf"],
                        ["class", "review__footer", 4, "ngIf"],
                        ["target", "_blank", "itemprop", "url", "rel", "nofollow", 1, "review__src", "review__src-isMobile", 3, "href"],
                        ["itemprop", "aggregateRating", "itemscope", "", "itemtype", "https://schema.org/AggregateRating"],
                        ["itemprop", "ratingValue", 3, "content"],
                        ["itemprop", "reviewCount", 3, "content"],
                        [1, "review__header"],
                        ["class", "review__header-left", 4, "ngIf"],
                        [1, "review__header-right"],
                        ["class", "review__rating", "itemprop", "reviewRating", "itemscope", "", "itemtype", "https://schema.org/Rating", 4, "ngIf"],
                        ["class", "review__title", "itemprop", "author", "itemscope", "", "itemtype", "https://schema.org/Person", 4, "ngIf"],
                        ["class", "review__date", 4, "ngIf"],
                        ["itemprop", "datePublished", 3, "content", 4, "ngIf"],
                        [1, "review__header-left"],
                        ["class", "review__photo", "alt", "avatar", 3, "src", 4, "ngIf", "ngIfElse"],
                        ["defaultAvatar", ""],
                        ["alt", "avatar", 1, "review__photo", 3, "src"],
                        [1, "review__avatar"],
                        ["itemprop", "reviewRating", "itemscope", "", "itemtype", "https://schema.org/Rating", 1, "review__rating"],
                        ["itemprop", "worstRating", "content", "1"],
                        ["itemprop", "bestRating", "content", "5"],
                        [4, "ngFor", "ngForOf"],
                        ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "icon", 3, "ngClass"],
                        ["fill", "none", "height", "24", "width", "24", "x", "0"],
                        ["points", "14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"],
                        ["itemprop", "author", "itemscope", "", "itemtype", "https://schema.org/Person", 1, "review__title"],
                        ["itemprop", "name"],
                        [1, "review__date"],
                        ["itemprop", "datePublished", 3, "content"],
                        ["itemprop", "reviewBody", 1, "review__body"],
                        [4, "ngIf"],
                        ["class", "review__text", 3, "innerHTML", 4, "ngIf"],
                        ["class", "review__more", 3, "click", 4, "ngIf"],
                        ["class", "review__image", 3, "src", "alt", 4, "ngFor", "ngForOf"],
                        [1, "review__image", 3, "src", "alt"],
                        [1, "review__text", 3, "innerHTML"],
                        [1, "review__more", 3, "click"],
                        [1, "review__footer"],
                        ["target", "_blank", "itemprop", "url", "rel", "nofollow", 1, "review__src", 3, "href"]
                    ],
                    template: function(e, t) {
                        1 & e && no(0, Cd, 11, 7, "div", 0), 2 & e && ro("ngIf", t.review)
                    },
                    directives: [Ju, Qu, Yu],
                    pipes: [Jh, ic, ed],
                    styles: ["widget-review .review{height:100%;padding:24px 16px;position:relative;display:flex;flex-direction:column;border-radius:15px;box-shadow:0 6px 10px rgba(0,0,0,.2);background-color:#fff;transition:box-shadow .15s;margin:0}widget-review .review:hover{box-shadow:0 6px 10px rgba(0,0,0,.4)}widget-review .review__header{display:flex;align-items:center}widget-review .review__header-left{margin-right:12px}widget-review .review__avatar,widget-review .review__photo{height:48px;width:48px;min-width:48px;max-width:48px;display:block;border-radius:50%}widget-review .review__avatar{display:flex;align-items:center;justify-content:center;font-size:18px;color:#fff}widget-review .review__rating{display:flex;position:relative;left:-4px}widget-review .review__rating .icon{height:24px;width:24px;fill:rgba(43,43,43,.3)}widget-review .review__rating .icon_active{fill:#ffd426}widget-review .review__rating+.review__title{margin-top:2px}widget-review .review__title{grid-area:title;word-break:break-word;font-weight:700}widget-review .review__title>span{font-size:14px!important}widget-review .review__body{margin-top:10px;overflow:hidden;flex-grow:1}widget-review .review__body p{font-weight:inherit;line-height:inherit}widget-review .review__image{display:block;max-width:100%;height:auto;margin:0 auto 5px}widget-review .review__text{line-height:140%;color:#333;font-size:11pt}widget-review .review__text_mobile{display:none}@media (max-width:767px){widget-review .review__text_mobile{display:block}}@media (max-width:767px){widget-review .review__text_desktop{display:none}}widget-review .review__footer{margin-top:10px}widget-review .review__more{margin-top:4px;color:rgba(43,43,43,.8);font-weight:700;cursor:pointer;font-size:11pt;transition:color .15s}widget-review .review__more:hover{color:#2b2b2b}widget-review .review__src{color:rgba(43,43,43,.6)!important;text-decoration:underline!important;font-size:13px;transition:color .15s}widget-review .review__src:hover{color:#2b2b2b!important}widget-review .review__src-isMobile{position:absolute;top:20px;right:20px;width:24px;height:24px;background-size:contain}widget-review .review__date{color:rgba(43,43,43,.6);font-size:13px;line-height:160%}"],
                    encapsulation: 2
                }), e
            })();
            const Sd = ["widgetCarousel"];

            function Ed(e, t) {
                if (1 & e && (ao(0, "span", 14), Xo(1), lo()), 2 & e) {
                    const e = vo().$implicit;
                    ns(1), Qo(e.title)
                }
            }

            function Td(e, t) {
                if (1 & e && (ao(0, "span"), ao(1, "span", 15), Xo(2), lo(), lo()), 2 & e) {
                    const e = vo().$implicit,
                        t = vo(3);
                    ns(2), Qo("all" === e.type ? t.averageRatings || "" : t.widget[e.type + "Rating"])
                }
            }
            const kd = function(e) {
                return {
                    widget__tab_active: e
                }
            };

            function Id(e, t) {
                if (1 & e) {
                    const e = po();
                    co(0), ao(1, "div", 11), go("click", (function() {
                        Xt(e);
                        const n = t.$implicit;
                        return vo(3).changeTab(n.type)
                    })), uo(2, "span", 12), no(3, Ed, 2, 1, "span", 13), no(4, Td, 3, 1, "span", 0), lo(), ho()
                }
                if (2 & e) {
                    const e = t.$implicit,
                        n = vo(3);
                    ns(1), ro("className", "widget__tab_" + e.type)("ngClass", Ka(6, kd, e.type === n.tabActive)), ns(1), Ho(n.getIcon(e.type)), ns(1), ro("ngIf", "all" === e.type), ns(1), ro("ngIf", n.hasRatings && (null == n.customSettings ? null : n.customSettings.isShowSectionsRating))
                }
            }

            function Md(e, t) {
                if (1 & e && (ao(0, "a", 16), Cn(), ao(1, "svg", 17), uo(2, "path", 18), lo(), lo()), 2 & e) {
                    const e = vo(3);
                    ta("widget__src widget__src--desktop widget__src--logo widget__src--desktop-", null == e.customSettings ? null : e.customSettings.reviewLayout, "")
                }
            }

            function Ad(e, t) {
                if (1 & e && (ao(0, "div", 19), ao(1, "a", 20), Xo(2), lo(), lo()), 2 & e) {
                    const e = vo(3);
                    ns(1), Co("href", e.customSettings.leaveReviewLink, Hi), ns(1), Qo(e.customSettings.leaveReviewText)
                }
            }
            const Rd = function() {
                    return ["\u043e\u0442\u0437\u044b\u0432", "\u043e\u0442\u0437\u044b\u0432\u0430", "\u043e\u0442\u0437\u044b\u0432\u043e\u0432"]
                },
                Dd = function() {
                    return ["\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430", "\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432", "\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432"]
                };

            function Nd(e, t) {
                if (1 & e && (co(0), ao(1, "span", 21), Xo(2), lo(), ho()), 2 & e) {
                    const e = vo(3);
                    ns(2), ea(" ", e.fakeReviewsLength, " ", e.plural(e.fakeReviewsLength, Qa(4, Rd)), " \u0438\u0437 ", null == e.types ? null : e.types.length, " ", e.plural(null == e.types ? null : e.types.length, Qa(5, Dd)), " ")
                }
            }

            function Pd(e, t) {
                if (1 & e && (co(0), ao(1, "span", 21), Xo(2), lo(), ho()), 2 & e) {
                    const e = vo(3);
                    ns(2), Jo(" ", e.counts[e.tabActive] || 0, " ", e.plural(e.counts[e.tabActive], Qa(3, Rd)), " \u0438\u0437 ", e.ReviewTypeNameE[e.tabActive], " ")
                }
            }

            function Od(e, t) {
                if (1 & e && (ao(0, "div"), ao(1, "div", 6), ao(2, "div", 7), no(3, Id, 5, 8, "ng-container", 8), lo(), no(4, Md, 3, 3, "a", 9), no(5, Ad, 3, 2, "div", 10), lo(), no(6, Nd, 3, 6, "ng-container", 0), no(7, Pd, 3, 4, "ng-container", 0), lo()), 2 & e) {
                    const e = vo(2);
                    ta("widget__header ", null == e.customSettings ? null : e.customSettings.reviewLayout, ""), ns(3), ro("ngForOf", e.tabs), ns(1), ro("ngIf", !1 === (null == e.widget ? null : e.widget.hideWatermark) && (null == e.customSettings ? null : e.customSettings.sendReviewBtnPosition) !== e.sendReviewBtnPositionE.tr && !e.isMobile), ns(1), ro("ngIf", (null == e.customSettings ? null : e.customSettings.leaveReviewLink) && (null == e.customSettings ? null : e.customSettings.leaveReviewText) && (null == e.customSettings ? null : e.customSettings.sendReviewBtnPosition) === e.sendReviewBtnPositionE.tr && !e.isMobile), ns(1), ro("ngIf", "all" === e.tabActive && e.reviews && (null == e.customSettings ? null : e.customSettings.isShowCommonReviewAmount)), ns(1), ro("ngIf", "all" !== e.tabActive && e.reviews && (null == e.customSettings ? null : e.customSettings.isShowCommonReviewAmount))
                }
            }

            function Ld(e, t) {
                if (1 & e && uo(0, "widget-review", 23), 2 & e) {
                    const e = vo().$implicit,
                        t = vo(3);
                    ro("review", e)("project", t.widget.title)("averageRatings", t.averageRatings)("source", t.widget[e.type])("reviewsCount", t.widget.totalReviewAmount)("customSettings", t.customSettings)("isMobile", t.isMobile)
                }
            }

            function Hd(e, t) {
                if (1 & e && (co(0), no(1, Ld, 1, 7, "widget-review", 22), ho()), 2 & e) {
                    const e = t.$implicit;
                    ns(1), ro("ngIf", e)
                }
            }

            function Fd(e, t) {
                if (1 & e && (ao(0, "div"), ao(1, "div"), no(2, Hd, 2, 1, "ng-container", 8), tl(3, "slice"), lo(), lo()), 2 & e) {
                    const e = vo(2);
                    ns(1), ta("widget__layout ", null == e.customSettings ? null : e.customSettings.reviewLayout, ""), ns(1), ro("ngForOf", function(e, t, n, i, s) {
                        const r = Gt(),
                            o = Ft(r, e);
                        return rl(r, sl(r, e) ? function(e, t, n, i, s, r, o, a) {
                            const l = t + n;
                            return Jr(e, l, s, r, o) ? Xr(e, l + 3, a ? i.call(a, s, r, o) : i(s, r, o)) : Ja(e, l + 3)
                        }(r, sn(), t, o.transform, n, i, s, o) : o.transform(n, i, s))
                    }(3, 4, e.reviews, 0, e.showReviewsCount))
                }
            }

            function Vd(e, t) {
                if (1 & e && uo(0, "widget-review", 31), 2 & e) {
                    const e = vo().$implicit,
                        t = vo(3);
                    ro("review", e)("project", t.widget.title)("source", t.widget[e.type])("averageRatings", t.averageRatings)("reviewsCount", t.widget.totalReviewAmount)("customSettings", t.customSettings)
                }
            }

            function jd(e, t) {
                if (1 & e && (ao(0, "ngu-tile"), no(1, Vd, 1, 6, "widget-review", 30), lo()), 2 & e) {
                    const e = t.$implicit;
                    ns(1), ro("ngIf", e)
                }
            }

            function Bd(e, t) {
                if (1 & e) {
                    const e = po();
                    co(0), ao(1, "li", 33), go("click", (function() {
                        Xt(e);
                        const n = t.index;
                        return vo(2), io(1).moveTo(n)
                    })), lo(), ho()
                }
                if (2 & e) {
                    const e = t.index;
                    vo(2);
                    const n = io(1);
                    ns(1), Lo("widget__point_none", e <= n.activePoint - 3 || e >= n.activePoint + 3)("widget__point_tran", e === n.activePoint - 2 || e === n.activePoint + 2)("widget__point_half", e === n.activePoint - 1 || e === n.activePoint + 1)("widget__point_active", e === n.activePoint)
                }
            }

            function zd(e, t) {
                if (1 & e && (ao(0, "ul", 32), no(1, Bd, 2, 8, "ng-container", 8), lo()), 2 & e) {
                    vo();
                    const e = io(1);
                    ns(1), ro("ngForOf", e.pointNumbers)
                }
            }

            function $d(e, t) {
                if (1 & e && (ao(0, "div", 34), Cn(), ao(1, "svg", 35), uo(2, "path", 36), uo(3, "path", 37), lo(), lo()), 2 & e) {
                    const e = vo(3);
                    na("widget__pag widget__pag_prev widget__pag_prev-", null == e.customSettings ? null : e.customSettings.navigationBtnsPosition, " widget__pag-", null == e.customSettings ? null : e.customSettings.navigationBtnsPosition, "")
                }
            }

            function Ud(e, t) {
                if (1 & e && (ao(0, "div", 38), Cn(), ao(1, "svg", 35), uo(2, "path", 36), uo(3, "path", 39), lo(), lo()), 2 & e) {
                    const e = vo(3);
                    na("widget__pag widget__pag_next widget__pag_next-", null == e.customSettings ? null : e.customSettings.navigationBtnsPosition, " widget__pag-", null == e.customSettings ? null : e.customSettings.navigationBtnsPosition, "")
                }
            }

            function Wd(e, t) {
                if (1 & e) {
                    const e = po();
                    ao(0, "ngu-carousel", 24, 25), go("onMove", (function(t) {
                        return Xt(e), vo(2).onCarouselMove(t)
                    })), no(2, jd, 2, 1, "ngu-tile", 26), no(3, zd, 2, 1, "ul", 27), no(4, $d, 4, 4, "div", 28), no(5, Ud, 4, 4, "div", 29), lo()
                }
                if (2 & e) {
                    const e = vo(2);
                    ro("inputs", e.widgetCarouselConfig)("dataSource", e.reviews), ns(3), ro("ngIf", (null == e.customSettings ? null : e.customSettings.navigationBtnsPosition) !== e.navigationBtnsPositionE.bc && (null == e.customSettings ? null : e.customSettings.sendReviewBtnPosition) !== e.sendReviewBtnPositionE.bc || e.isMobile), ns(1), ro("ngIf", null == e.customSettings ? null : e.customSettings.showNavigationBtns), ns(1), ro("ngIf", null == e.customSettings ? null : e.customSettings.showNavigationBtns)
                }
            }

            function Zd(e, t) {
                if (1 & e && uo(0, "div"), 2 & e) {
                    const e = vo(2);
                    ta("widget__count  widget__count-", null == e.customSettings ? null : e.customSettings.reviewLayout, "")
                }
            }

            function qd(e, t) {
                if (1 & e) {
                    const e = po();
                    ao(0, "p", 40), go("click", (function() {
                        return Xt(e), vo(2).nextPage()
                    })), Xo(1, " \u0415\u0449\u0451 \u043e\u0442\u0437\u044b\u0432\u044b "), lo()
                }
                if (2 & e) {
                    const e = vo(2);
                    na("widget__show-more widget__show-more-", null == e.customSettings ? null : e.customSettings.reviewLayout, " widget__show-more-", null == e.customSettings ? null : e.customSettings.sendReviewBtnPosition, "")
                }
            }

            function Gd(e, t) {
                if (1 & e && (ao(0, "div"), ao(1, "a", 20), Xo(2), lo(), lo()), 2 & e) {
                    const e = vo(2);
                    ta("widget__leave widget__leave-", null == e.customSettings ? null : e.customSettings.sendReviewBtnPosition, ""), ns(1), Co("href", e.customSettings.leaveReviewLink, Hi), ns(1), Ko(" ", e.customSettings.leaveReviewText, " ")
                }
            }

            function Yd(e, t) {
                if (1 & e && (ao(0, "a", 16), Cn(), ao(1, "svg", 17), uo(2, "path", 18), lo(), lo()), 2 & e) {
                    const e = vo(2);
                    ta("widget__src widget__src--desktop widget__src--logo widget__src--desktop-", null == e.customSettings ? null : e.customSettings.reviewLayout, ""), Lo("widget__src-isMobile", e.isMobile)
                }
            }

            function Xd(e, t) {
                if (1 & e && (co(0), no(1, Od, 8, 8, "div", 1), no(2, Fd, 4, 8, "div", 0), no(3, Wd, 6, 5, "ngu-carousel", 2), ao(4, "div"), no(5, Zd, 1, 3, "div", 1), ao(6, "div", 3), no(7, qd, 2, 4, "p", 4), lo(), no(8, Gd, 3, 5, "div", 1), no(9, Yd, 3, 5, "a", 5), lo(), ho()), 2 & e) {
                    const e = vo();
                    ns(1), ro("ngIf", e.ratings), ns(1), ro("ngIf", (null == e.customSettings ? null : e.customSettings.reviewLayout) !== e.ReviewLayoutE.carousel), ns(1), ro("ngIf", (null == e.customSettings ? null : e.customSettings.reviewLayout) === e.ReviewLayoutE.carousel), ns(1), na("widget__footer ", null == e.customSettings ? null : e.customSettings.reviewLayout, "\n      widget__footer-", null == e.customSettings ? null : e.customSettings.sendReviewBtnPosition, ""), Lo("widget__footer-isMobile", e.isMobile), ns(1), ro("ngIf", e.reviews && e.types && (null == e.customSettings ? null : e.customSettings.isShowCommonReviewAmount) && !((null == e.customSettings ? null : e.customSettings.navigationBtnsPosition) === e.navigationBtnsPositionE.bottom && (null == e.customSettings ? null : e.customSettings.reviewLayout) === e.ReviewLayoutE.carousel)), ns(2), ro("ngIf", e.hasNextPage() && (null == e.customSettings ? null : e.customSettings.reviewLayout) !== e.ReviewLayoutE.carousel && !e.isMobile), ns(1), ro("ngIf", (null == e.customSettings ? null : e.customSettings.leaveReviewLink) && (null == e.customSettings ? null : e.customSettings.leaveReviewText) && ((null == e.customSettings ? null : e.customSettings.sendReviewBtnPosition) !== e.sendReviewBtnPositionE.tr || e.isMobile)), ns(1), ro("ngIf", !(null != e.widget && e.widget.hideWatermark) && (null == e.customSettings ? null : e.customSettings.sendReviewBtnPosition) === e.sendReviewBtnPositionE.tr || e.isMobile && !(null != e.widget && e.widget.hideWatermark))
                }
            }
            let Qd = (() => {
                class e {
                    constructor(e, t) {
                        this._widgets = e, this._changeDetector = t, this.ReviewLayoutE = Kh.ReviewLayoutE, this.ReviewTypeNameE = Kh.ReviewTypeNameE, this.showReviewsCount = 0, this.reviewsPageSize = 6, this.startReviewCount = 4, this.sendReviewBtnPositionE = Kh.SendReviewBtnPositionE, this.navigationBtnsPositionE = Kh.NavigationBtnsPositionE, this.reviews = [], this.tabs = [{
                            title: "\u0412\u0441\u0435 \u043e\u0442\u0437\u044b\u0432\u044b",
                            type: "all"
                        }], this.tabActive = "all"
                    }
                    set widgetCarousel(e) {
                        !this._widgetCarousel && e && (this.reviewsPageSize = e.load, this.loadReviews(0, e.load)), this._widgetCarousel = e
                    }
                    ngOnInit() {
                        const reviewLabElement = document.querySelector("review-lab");
						if (reviewLabElement) {
        					this.widgetID = reviewLabElement.getAttribute("data-widgetID");
    					}
    					this.isApp = !1;
    					this.initReviews();                        
                    }
                    ngOnDestroy() {
                        this.destroyCustomStyles()
                    }
                    destroyCustomStyles() {
                        const e = document.getElementById("custom_style_for_widget");
                        e && e.remove()
                    }
                    setCustomStyles() {
                        const e = (this.widget.customStyles || "").split("}").map(e => e.split("{")).map(e => {
                            const t = e.findIndex(e => !e.includes("@media"));
                            return t > -1 && !/^[\t\r\n]+$/.test(e[t]) && e[t] && (e[t] = `.widget-${this.widgetID} ` + e[t]), e.join("{")
                        }).join("} ");
                        this.parseStyles(e)
                    }
                    parseStyles(e) {
                        this.destroyCustomStyles();
                        const t = document.head || document.getElementsByTagName("head")[0],
                            n = document.createElement("style");
                        n.id = "custom_style_for_widget", n.appendChild(document.createTextNode(e)), t.appendChild(n)
                    }
                    initReviews() {
                        this.isMobile = window.innerWidth <= 600, this._widgets.getWidget(this.widgetID, !this.isApp).subscribe(e => {
                            var t;
                            if (this.widget = e, this.setCustomStyles(), this.customSettings = new Kh.CustomSettingsModel(this.widget.customSettings || "{}"), this.isMobile && (this.customSettings.reviewLayout = Kh.ReviewLayoutE.carousel), this.customSettings.reviewLayout === Kh.ReviewLayoutE.carousel) {
                                const e = window.innerWidth,
                                    n = null === (t = document.getElementsByClassName("widget-" + this.widgetID)[0]) || void 0 === t ? void 0 : t.getBoundingClientRect().width;
                                let i = {
                                    xs: 1,
                                    sm: 2,
                                    md: 2,
                                    lg: 4,
                                    all: 0
                                };
                                n && ((e > 1200 && n < 900 || this.customSettings.carouselDesktop3SlidesInsteadOf4) && (i = {
                                    xs: 1,
                                    sm: 1,
                                    md: 2,
                                    lg: 3,
                                    all: 0
                                }), e < 1200 && !this.isMobile && n / e < .65 && (i = {
                                    xs: 1,
                                    sm: 1,
                                    md: 1,
                                    lg: 2,
                                    all: 0
                                })), this.widgetCarouselConfig = {
                                    grid: i,
                                    speed: 250,
                                    point: {
                                        visible: !0,
                                        hideOnSingleSlide: !0
                                    },
                                    load: 1,
                                    velocity: 0,
                                    touch: !0,
                                    easing: "cubic-bezier(0, 0, 0.2, 1)"
                                }, this.customSettings.isCarouselLoop && (this.widgetCarouselConfig.loop = this.customSettings.isCarouselLoop), this.customSettings.isCarouselAutoplay && (this.widgetCarouselConfig.interval = {
                                    timing: +this.customSettings.carouselSlideIntervalAutoplay,
                                    initialDelay: 1e3
                                })
                            }
                            switch (this.customSettings.reviewLayout) {
                                case Kh.ReviewLayoutE.grid:
                                    this.startReviewCount = 6;
                                    break;
                                case Kh.ReviewLayoutE.column:
                                    this.startReviewCount = 5
                            }
                            this.showReviewsCount = this.startReviewCount, this.ratings = e.reviewStars;
                            const n = Object.keys(this.ratings).filter(e => this.ratings[e]);
                            this.hasRatings = !!n.length, this.averageRatings = this.widget.totalRating, this.types = Object.keys(e.reviewAmount).filter(t => !!e.reviewAmount[t]), this.counts = e.reviewAmount, this.types.forEach(e => {
                                Kh.ReviewTypeE[e] && Kh.ReviewTypeNameE[e] && this.tabs.push({
                                    title: Kh.ReviewTypeNameE[e],
                                    type: e
                                })
                            }), this.reviews = new Array(this.widget.totalReviewAmount), this.fakeReviewsLength = this.widget.totalReviewAmount, this.customSettings.reviewLayout !== Kh.ReviewLayoutE.carousel && this.loadReviews(0, this.showReviewsCount), this._changeDetector.detectChanges()
                        }, e => {
                            this.responseError = e
                        })
                    }
                    loadReviews(e, t) {
                        const n = e < 0 ? 0 : e;
                        this.isLoading = !0, this.getReviews(this.tabActive, n, t).subscribe(e => {
                            this.insertReviews(e, n, t), this.isLoading = !1
                        })
                    }
                    getReviews(e, t, n) {
                        const i = {
                            skip: t,
                            limit: n
                        };
                        return "all" !== e && (i.type = e), this._widgets.getReviews(this.widgetID, i, !this.isApp)
                    }
                    insertReviews(e, t, n) {
                        for (let i = 0; i < e.length; i++) this.reviews[t + i] = e[i];
                        e.length < n && (this.reviews.length = t + e.length, this.customSettings.reviewLayout === Kh.ReviewLayoutE.carousel && this._widgetCarousel.moveTo(this._widgetCarousel.pointNumbers.length - 1)), this._changeDetector.detectChanges()
                    }
                    onCarouselMove(e) {
                        const t = e.currentSlide;
                        if (t)
                            for (let n = 0; n < this._widgetCarousel.load; ++n)
                                if (!this.reviews[t + n] || "all" !== this.tabActive && this.reviews[t + n].type !== this.tabActive) return void this.loadReviews(t, this._widgetCarousel.load)
                    }
                    changeTab(e) {
                        const t = this.customSettings.reviewLayout === Kh.ReviewLayoutE.carousel ? this._widgetCarousel.load : this.startReviewCount;
                        this.getReviews(e, 0, t).subscribe(n => {
                            this.showReviewsCount = this.startReviewCount, this.customSettings.reviewLayout === Kh.ReviewLayoutE.carousel && this._widgetCarousel.moveTo(0), this.reviews = [], "all" === e ? (this.reviews.length = this.widget.totalReviewAmount, this.fakeReviewsLength = this.widget.totalReviewAmount) : (this.reviews.length = this.widget.reviewAmount[e], this.fakeReviewsLength = this.widget.reviewAmount[e]), this.tabActive = e, this.insertReviews(n, 0, t)
                        })
                    }
                    nextPage() {
                        this.loadReviews(this.showReviewsCount, this.reviewsPageSize), this.showReviewsCount += this.reviewsPageSize
                    }
                    hasNextPage() {
                        return this.reviews.length - this.showReviewsCount > 0
                    }
                    plural(e, t) {
                        return e % 10 == 1 && e % 100 != 11 ? t[0] : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? t[1] : t[2]
                    }
                    getIcon(e) {
                        return "all" === e ? null : `background-image: url(\https://app.reviewlab.ru/widget/assets/icons/${e}.${"googleMap"===e||"avito"===e||"yaMaps"===e||"yaSprav"===e||"doubleGis"===e?"svg":"png"})`
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(so(Qh), so(Cr))
                }, e.\u0275cmp = lt({
                    type: e,
                    selectors: [
                        ["review-lab"]
                    ],
                    viewQuery: function(e, t) {
                        var n, i;
                        1 & e && (i = Sd, !0, _l(Yt(), Gt(), i, true, undefined, !1)), 2 & e && wl(n = bl()) && (t.widgetCarousel = n.first)
                    },
                    decls: 2,
                    vars: 7,
                    consts: [
                        [4, "ngIf"],
                        [3, "class", 4, "ngIf"],
                        [3, "inputs", "dataSource", "onMove", 4, "ngIf"],
                        [2, "text-align", "center"],
                        [3, "class", "click", 4, "ngIf"],
                        ["href", "https://reviewlab.ru", "target", "_blank", 3, "class", "widget__src-isMobile", 4, "ngIf"],
                        [1, "widget__header__block"],
                        [1, "widget__tabs"],
                        [4, "ngFor", "ngForOf"],
                        ["href", "https://reviewlab.ru", "target", "_blank", 3, "class", 4, "ngIf"],
                        ["class", "widget__leave", 4, "ngIf"],
                        [1, "widget__tab", 3, "className", "ngClass", "click"],
                        [1, "before"],
                        ["class", "widget__tab-name", 4, "ngIf"],
                        [1, "widget__tab-name"],
                        [1, "widget__tab--rating"],
                        ["href", "https://reviewlab.ru", "target", "_blank"],
                        ["width", "171", "height", "16", "viewBox", "0 0 171 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                        ["d", "M11.108 5.28977H8.98295C8.92235 4.94129 8.81061 4.63258 8.64773 4.36364C8.48485 4.09091 8.2822 3.85985 8.03977 3.67045C7.79735 3.48106 7.52083 3.33901 7.21023 3.24432C6.90341 3.14583 6.57197 3.09659 6.21591 3.09659C5.58333 3.09659 5.02273 3.25568 4.53409 3.57386C4.04545 3.88826 3.66288 4.35038 3.38636 4.96023C3.10985 5.56629 2.97159 6.30682 2.97159 7.18182C2.97159 8.07197 3.10985 8.82197 3.38636 9.43182C3.66667 10.0379 4.04924 10.4962 4.53409 10.8068C5.02273 11.1136 5.58144 11.267 6.21023 11.267C6.55871 11.267 6.88447 11.2216 7.1875 11.1307C7.49432 11.036 7.76894 10.8977 8.01136 10.7159C8.25758 10.5341 8.46402 10.3106 8.63068 10.0455C8.80114 9.7803 8.91856 9.47727 8.98295 9.13636L11.108 9.14773C11.0284 9.70076 10.8561 10.2197 10.5909 10.7045C10.3295 11.1894 9.98674 11.6174 9.5625 11.9886C9.13826 12.3561 8.64205 12.6439 8.07386 12.8523C7.50568 13.0568 6.875 13.1591 6.18182 13.1591C5.15909 13.1591 4.24621 12.9223 3.44318 12.4489C2.64015 11.9754 2.00758 11.2917 1.54545 10.3977C1.08333 9.50379 0.852273 8.43182 0.852273 7.18182C0.852273 5.92803 1.08523 4.85606 1.55114 3.96591C2.01705 3.07197 2.65152 2.38826 3.45455 1.91477C4.25758 1.44129 5.16667 1.20455 6.18182 1.20455C6.82955 1.20455 7.43182 1.29545 7.98864 1.47727C8.54545 1.65909 9.04167 1.92614 9.47727 2.27841C9.91288 2.62689 10.2708 3.05492 10.5511 3.5625C10.8352 4.06629 11.0208 4.64205 11.108 5.28977ZM11.6947 15.5341V11.3068H12.3879C12.5735 11.1629 12.7288 10.9678 12.8538 10.7216C12.9788 10.4716 13.0811 10.178 13.1606 9.84091C13.244 9.5 13.3121 9.11932 13.3652 8.69886C13.4182 8.27462 13.4655 7.81818 13.5072 7.32955L13.7572 4.27273H20.064V11.3068H21.4163V15.5341H19.4277V13H13.7174V15.5341H11.6947ZM14.5015 11.3068H18.0981V5.93182H15.5413L15.4049 7.32955C15.3292 8.25379 15.2288 9.04545 15.1038 9.70455C14.9788 10.3636 14.778 10.8977 14.5015 11.3068ZM26.3355 13.1705C25.4605 13.1705 24.7048 12.9886 24.0684 12.625C23.4358 12.2576 22.9491 11.7386 22.6082 11.0682C22.2673 10.3939 22.0968 9.60038 22.0968 8.6875C22.0968 7.78977 22.2673 7.00189 22.6082 6.32386C22.9529 5.64205 23.4339 5.11174 24.0514 4.73295C24.6688 4.35038 25.3942 4.15909 26.2275 4.15909C26.7654 4.15909 27.273 4.24621 27.7502 4.42045C28.2313 4.59091 28.6555 4.85606 29.023 5.21591C29.3942 5.57576 29.6858 6.03409 29.898 6.59091C30.1101 7.14394 30.2161 7.80303 30.2161 8.56818V9.19886H23.0627V7.8125H28.2445C28.2408 7.41856 28.1555 7.06818 27.9889 6.76136C27.8222 6.45076 27.5892 6.20644 27.29 6.02841C26.9945 5.85038 26.6498 5.76136 26.2559 5.76136C25.8355 5.76136 25.4661 5.86364 25.148 6.06818C24.8298 6.26894 24.5817 6.53409 24.4036 6.86364C24.2294 7.18939 24.1404 7.54735 24.1366 7.9375V9.14773C24.1366 9.6553 24.2294 10.0909 24.415 10.4545C24.6006 10.8144 24.8601 11.0909 25.1934 11.2841C25.5267 11.4735 25.9169 11.5682 26.3639 11.5682C26.6631 11.5682 26.9339 11.5265 27.1764 11.4432C27.4188 11.3561 27.629 11.2292 27.807 11.0625C27.9851 10.8958 28.1195 10.6894 28.2105 10.4432L30.1309 10.6591C30.0097 11.1667 29.7786 11.6098 29.4377 11.9886C29.1006 12.3636 28.6688 12.6553 28.1423 12.8636C27.6158 13.0682 27.0135 13.1705 26.3355 13.1705ZM30.8739 13L30.8626 11.3068H31.1637C31.391 11.3068 31.5823 11.2557 31.7376 11.1534C31.8929 11.0511 32.0216 10.8807 32.1239 10.642C32.2262 10.3996 32.3057 10.0739 32.3626 9.66477C32.4194 9.25568 32.4591 8.74621 32.4819 8.13636L32.6353 4.27273H38.9989V13H37.0103V5.96023H34.5046L34.3682 8.77273C34.3341 9.5 34.2527 10.1307 34.1239 10.6648C33.9989 11.1951 33.8209 11.6326 33.5898 11.9773C33.3626 12.322 33.0766 12.5795 32.7319 12.75C32.3872 12.9167 31.98 13 31.5103 13H30.8739ZM43.1013 13.1761C42.5483 13.1761 42.0502 13.0777 41.607 12.8807C41.1676 12.6799 40.8191 12.3845 40.5615 11.9943C40.3077 11.6042 40.1809 11.1231 40.1809 10.5511C40.1809 10.0587 40.2718 9.65152 40.4536 9.32955C40.6354 9.00758 40.8835 8.75 41.1979 8.55682C41.5123 8.36364 41.8665 8.2178 42.2604 8.11932C42.6581 8.01705 43.0691 7.94318 43.4934 7.89773C44.0047 7.8447 44.4195 7.79735 44.7377 7.75568C45.0559 7.71023 45.2869 7.64205 45.4309 7.55114C45.5786 7.45644 45.6524 7.31061 45.6524 7.11364V7.07955C45.6524 6.65152 45.5256 6.32008 45.2718 6.08523C45.018 5.85038 44.6524 5.73295 44.1752 5.73295C43.6714 5.73295 43.2718 5.8428 42.9763 6.0625C42.6846 6.2822 42.4877 6.54167 42.3854 6.84091L40.4649 6.56818C40.6165 6.03788 40.8665 5.5947 41.2149 5.23864C41.5634 4.87879 41.9896 4.60985 42.4934 4.43182C42.9971 4.25 43.554 4.15909 44.1638 4.15909C44.5843 4.15909 45.0028 4.20833 45.4195 4.30682C45.8362 4.4053 46.2168 4.56818 46.5615 4.79545C46.9062 5.01894 47.1827 5.32386 47.3911 5.71023C47.6032 6.09659 47.7093 6.57955 47.7093 7.15909V13H45.732V11.8011H45.6638C45.5388 12.0436 45.3627 12.2708 45.1354 12.483C44.9119 12.6913 44.6297 12.8598 44.2888 12.9886C43.9517 13.1136 43.5559 13.1761 43.1013 13.1761ZM43.6354 11.6648C44.0483 11.6648 44.4062 11.5833 44.7093 11.4205C45.0123 11.2538 45.2452 11.0341 45.4081 10.7614C45.5748 10.4886 45.6581 10.1913 45.6581 9.86932V8.84091C45.5937 8.89394 45.4839 8.94318 45.3286 8.98864C45.1771 9.03409 45.0066 9.07386 44.8172 9.10795C44.6278 9.14205 44.4403 9.17235 44.2547 9.19886C44.0691 9.22538 43.9081 9.24811 43.7718 9.26705C43.4649 9.30871 43.1903 9.37689 42.9479 9.47159C42.7055 9.56629 42.5142 9.69886 42.374 9.86932C42.2339 10.036 42.1638 10.2519 42.1638 10.517C42.1638 10.8958 42.3021 11.1818 42.5786 11.375C42.8551 11.5682 43.2074 11.6648 43.6354 11.6648ZM55.2918 7.78409V9.47159H50.644V7.78409H55.2918ZM51.2804 4.27273V13H49.2974V4.27273H51.2804ZM56.6384 4.27273V13H54.6611V4.27273H56.6384ZM62.0461 13.1705C61.1939 13.1705 60.4552 12.983 59.8302 12.608C59.2052 12.233 58.7204 11.7083 58.3757 11.0341C58.0348 10.3598 57.8643 9.57197 57.8643 8.67045C57.8643 7.76894 58.0348 6.97917 58.3757 6.30114C58.7204 5.62311 59.2052 5.09659 59.8302 4.72159C60.4552 4.34659 61.1939 4.15909 62.0461 4.15909C62.8984 4.15909 63.637 4.34659 64.262 4.72159C64.887 5.09659 65.37 5.62311 65.7109 6.30114C66.0556 6.97917 66.228 7.76894 66.228 8.67045C66.228 9.57197 66.0556 10.3598 65.7109 11.0341C65.37 11.7083 64.887 12.233 64.262 12.608C63.637 12.983 62.8984 13.1705 62.0461 13.1705ZM62.0575 11.5227C62.5196 11.5227 62.906 11.3958 63.2166 11.142C63.5272 10.8845 63.7583 10.5398 63.9098 10.108C64.0651 9.67614 64.1427 9.19508 64.1427 8.66477C64.1427 8.13068 64.0651 7.64773 63.9098 7.21591C63.7583 6.7803 63.5272 6.43371 63.2166 6.17614C62.906 5.91856 62.5196 5.78977 62.0575 5.78977C61.584 5.78977 61.1901 5.91856 60.8757 6.17614C60.5651 6.43371 60.3321 6.7803 60.1768 7.21591C60.0253 7.64773 59.9495 8.13068 59.9495 8.66477C59.9495 9.19508 60.0253 9.67614 60.1768 10.108C60.3321 10.5398 60.5651 10.8845 60.8757 11.142C61.1901 11.3958 61.584 11.5227 62.0575 11.5227ZM76.9768 7.78409V9.47159H72.329V7.78409H76.9768ZM72.9654 4.27273V13H70.9824V4.27273H72.9654ZM78.3234 4.27273V13H76.3461V4.27273H78.3234ZM82.4357 13.1761C81.8827 13.1761 81.3845 13.0777 80.9414 12.8807C80.502 12.6799 80.1535 12.3845 79.8959 11.9943C79.6421 11.6042 79.5152 11.1231 79.5152 10.5511C79.5152 10.0587 79.6061 9.65152 79.788 9.32955C79.9698 9.00758 80.2179 8.75 80.5323 8.55682C80.8467 8.36364 81.2008 8.2178 81.5948 8.11932C81.9925 8.01705 82.4035 7.94318 82.8277 7.89773C83.3391 7.8447 83.7539 7.79735 84.072 7.75568C84.3902 7.71023 84.6213 7.64205 84.7652 7.55114C84.913 7.45644 84.9868 7.31061 84.9868 7.11364V7.07955C84.9868 6.65152 84.8599 6.32008 84.6061 6.08523C84.3523 5.85038 83.9868 5.73295 83.5095 5.73295C83.0058 5.73295 82.6061 5.8428 82.3107 6.0625C82.019 6.2822 81.822 6.54167 81.7198 6.84091L79.7993 6.56818C79.9508 6.03788 80.2008 5.5947 80.5493 5.23864C80.8978 4.87879 81.3239 4.60985 81.8277 4.43182C82.3315 4.25 82.8883 4.15909 83.4982 4.15909C83.9186 4.15909 84.3372 4.20833 84.7539 4.30682C85.1705 4.4053 85.5512 4.56818 85.8959 4.79545C86.2406 5.01894 86.5171 5.32386 86.7255 5.71023C86.9376 6.09659 87.0436 6.57955 87.0436 7.15909V13H85.0664V11.8011H84.9982C84.8732 12.0436 84.697 12.2708 84.4698 12.483C84.2463 12.6913 83.9641 12.8598 83.6232 12.9886C83.2861 13.1136 82.8902 13.1761 82.4357 13.1761ZM82.9698 11.6648C83.3827 11.6648 83.7406 11.5833 84.0436 11.4205C84.3467 11.2538 84.5796 11.0341 84.7425 10.7614C84.9092 10.4886 84.9925 10.1913 84.9925 9.86932V8.84091C84.9281 8.89394 84.8183 8.94318 84.663 8.98864C84.5114 9.03409 84.341 9.07386 84.1516 9.10795C83.9622 9.14205 83.7747 9.17235 83.5891 9.19886C83.4035 9.22538 83.2425 9.24811 83.1061 9.26705C82.7993 9.30871 82.5247 9.37689 82.2823 9.47159C82.0398 9.56629 81.8486 9.69886 81.7084 9.86932C81.5683 10.036 81.4982 10.2519 81.4982 10.517C81.4982 10.8958 81.6364 11.1818 81.913 11.375C82.1895 11.5682 82.5417 11.6648 82.9698 11.6648ZM92.2115 13V1.36364H96.5751C97.4691 1.36364 98.2191 1.51894 98.8251 1.82955C99.435 2.14015 99.8952 2.57576 100.206 3.13636C100.52 3.69318 100.677 4.3428 100.677 5.08523C100.677 5.83144 100.518 6.47917 100.2 7.02841C99.8857 7.57386 99.4217 7.99621 98.8081 8.29545C98.1944 8.59091 97.4406 8.73864 96.5467 8.73864H93.4388V6.98864H96.2626C96.7853 6.98864 97.2134 6.91667 97.5467 6.77273C97.88 6.625 98.1263 6.41098 98.2853 6.13068C98.4482 5.84659 98.5297 5.49811 98.5297 5.08523C98.5297 4.67235 98.4482 4.32008 98.2853 4.02841C98.1225 3.73295 97.8744 3.50947 97.541 3.35795C97.2077 3.20265 96.7778 3.125 96.2513 3.125H94.3194V13H92.2115ZM98.2228 7.72727L101.104 13H98.7513L95.9217 7.72727H98.2228ZM105.785 13.1705C104.91 13.1705 104.155 12.9886 103.518 12.625C102.886 12.2576 102.399 11.7386 102.058 11.0682C101.717 10.3939 101.547 9.60038 101.547 8.6875C101.547 7.78977 101.717 7.00189 102.058 6.32386C102.403 5.64205 102.884 5.11174 103.501 4.73295C104.119 4.35038 104.844 4.15909 105.677 4.15909C106.215 4.15909 106.723 4.24621 107.2 4.42045C107.681 4.59091 108.106 4.85606 108.473 5.21591C108.844 5.57576 109.136 6.03409 109.348 6.59091C109.56 7.14394 109.666 7.80303 109.666 8.56818V9.19886H102.513V7.8125H107.695C107.691 7.41856 107.606 7.06818 107.439 6.76136C107.272 6.45076 107.039 6.20644 106.74 6.02841C106.445 5.85038 106.1 5.76136 105.706 5.76136C105.285 5.76136 104.916 5.86364 104.598 6.06818C104.28 6.26894 104.032 6.53409 103.854 6.86364C103.679 7.18939 103.59 7.54735 103.587 7.9375V9.14773C103.587 9.6553 103.679 10.0909 103.865 10.4545C104.051 10.8144 104.31 11.0909 104.643 11.2841C104.977 11.4735 105.367 11.5682 105.814 11.5682C106.113 11.5682 106.384 11.5265 106.626 11.4432C106.869 11.3561 107.079 11.2292 107.257 11.0625C107.435 10.8958 107.57 10.6894 107.66 10.4432L109.581 10.6591C109.46 11.1667 109.229 11.6098 108.888 11.9886C108.551 12.3636 108.119 12.6553 107.592 12.8636C107.066 13.0682 106.463 13.1705 105.785 13.1705ZM118.472 4.27273L115.364 13H113.091L109.983 4.27273H112.176L114.182 10.7557H114.273L116.284 4.27273H118.472ZM119.415 13V4.27273H121.472V13H119.415ZM120.449 3.03409C120.123 3.03409 119.843 2.92614 119.608 2.71023C119.373 2.49053 119.256 2.22727 119.256 1.92045C119.256 1.60985 119.373 1.34659 119.608 1.13068C119.843 0.910984 120.123 0.801136 120.449 0.801136C120.779 0.801136 121.059 0.910984 121.29 1.13068C121.525 1.34659 121.642 1.60985 121.642 1.92045C121.642 2.22727 121.525 2.49053 121.29 2.71023C121.059 2.92614 120.779 3.03409 120.449 3.03409ZM126.97 13.1705C126.095 13.1705 125.34 12.9886 124.703 12.625C124.071 12.2576 123.584 11.7386 123.243 11.0682C122.902 10.3939 122.732 9.60038 122.732 8.6875C122.732 7.78977 122.902 7.00189 123.243 6.32386C123.588 5.64205 124.069 5.11174 124.686 4.73295C125.304 4.35038 126.029 4.15909 126.863 4.15909C127.4 4.15909 127.908 4.24621 128.385 4.42045C128.866 4.59091 129.291 4.85606 129.658 5.21591C130.029 5.57576 130.321 6.03409 130.533 6.59091C130.745 7.14394 130.851 7.80303 130.851 8.56818V9.19886H123.698V7.8125H128.88C128.876 7.41856 128.791 7.06818 128.624 6.76136C128.457 6.45076 128.224 6.20644 127.925 6.02841C127.63 5.85038 127.285 5.76136 126.891 5.76136C126.47 5.76136 126.101 5.86364 125.783 6.06818C125.465 6.26894 125.217 6.53409 125.039 6.86364C124.864 7.18939 124.775 7.54735 124.772 7.9375V9.14773C124.772 9.6553 124.864 10.0909 125.05 10.4545C125.236 10.8144 125.495 11.0909 125.828 11.2841C126.162 11.4735 126.552 11.5682 126.999 11.5682C127.298 11.5682 127.569 11.5265 127.811 11.4432C128.054 11.3561 128.264 11.2292 128.442 11.0625C128.62 10.8958 128.755 10.6894 128.845 10.4432L130.766 10.6591C130.645 11.1667 130.414 11.6098 130.073 11.9886C129.736 12.3636 129.304 12.6553 128.777 12.8636C128.251 13.0682 127.648 13.1705 126.97 13.1705ZM133.865 13L131.4 4.27273H133.496L135.03 10.4091H135.11L136.678 4.27273H138.752L140.32 10.375H140.405L141.917 4.27273H144.019L141.547 13H139.405L137.769 7.10227H137.65L136.013 13H133.865ZM145.066 13V1.36364H147.174V11.233H152.299V13H145.066ZM156.069 13.1761C155.516 13.1761 155.018 13.0777 154.574 12.8807C154.135 12.6799 153.787 12.3845 153.529 11.9943C153.275 11.6042 153.148 11.1231 153.148 10.5511C153.148 10.0587 153.239 9.65152 153.421 9.32955C153.603 9.00758 153.851 8.75 154.165 8.55682C154.48 8.36364 154.834 8.2178 155.228 8.11932C155.626 8.01705 156.037 7.94318 156.461 7.89773C156.972 7.8447 157.387 7.79735 157.705 7.75568C158.023 7.71023 158.254 7.64205 158.398 7.55114C158.546 7.45644 158.62 7.31061 158.62 7.11364V7.07955C158.62 6.65152 158.493 6.32008 158.239 6.08523C157.985 5.85038 157.62 5.73295 157.143 5.73295C156.639 5.73295 156.239 5.8428 155.944 6.0625C155.652 6.2822 155.455 6.54167 155.353 6.84091L153.432 6.56818C153.584 6.03788 153.834 5.5947 154.182 5.23864C154.531 4.87879 154.957 4.60985 155.461 4.43182C155.965 4.25 156.521 4.15909 157.131 4.15909C157.552 4.15909 157.97 4.20833 158.387 4.30682C158.804 4.4053 159.184 4.56818 159.529 4.79545C159.874 5.01894 160.15 5.32386 160.359 5.71023C160.571 6.09659 160.677 6.57955 160.677 7.15909V13H158.699V11.8011H158.631C158.506 12.0436 158.33 12.2708 158.103 12.483C157.879 12.6913 157.597 12.8598 157.256 12.9886C156.919 13.1136 156.523 13.1761 156.069 13.1761ZM156.603 11.6648C157.016 11.6648 157.374 11.5833 157.677 11.4205C157.98 11.2538 158.213 11.0341 158.376 10.7614C158.542 10.4886 158.626 10.1913 158.626 9.86932V8.84091C158.561 8.89394 158.451 8.94318 158.296 8.98864C158.145 9.03409 157.974 9.07386 157.785 9.10795C157.595 9.14205 157.408 9.17235 157.222 9.19886C157.037 9.22538 156.876 9.24811 156.739 9.26705C156.432 9.30871 156.158 9.37689 155.915 9.47159C155.673 9.56629 155.482 9.69886 155.342 9.86932C155.201 10.036 155.131 10.2519 155.131 10.517C155.131 10.8958 155.27 11.1818 155.546 11.375C155.823 11.5682 156.175 11.6648 156.603 11.6648ZM162.356 13V1.36364H164.413V5.71591H164.498C164.604 5.50379 164.754 5.27841 164.947 5.03977C165.14 4.79735 165.401 4.59091 165.731 4.42045C166.06 4.24621 166.481 4.15909 166.992 4.15909C167.666 4.15909 168.274 4.33144 168.816 4.67614C169.362 5.01705 169.793 5.52273 170.112 6.19318C170.434 6.85985 170.594 7.67803 170.594 8.64773C170.594 9.60606 170.437 10.4205 170.123 11.0909C169.809 11.7614 169.38 12.2727 168.839 12.625C168.297 12.9773 167.684 13.1534 166.998 13.1534C166.498 13.1534 166.083 13.0701 165.754 12.9034C165.424 12.7367 165.159 12.536 164.958 12.3011C164.761 12.0625 164.608 11.8371 164.498 11.625H164.379V13H162.356ZM164.373 8.63636C164.373 9.20076 164.452 9.69508 164.612 10.1193C164.774 10.5436 165.007 10.875 165.31 11.1136C165.617 11.3485 165.988 11.4659 166.424 11.4659C166.879 11.4659 167.259 11.3447 167.566 11.1023C167.873 10.8561 168.104 10.5208 168.259 10.0966C168.418 9.66856 168.498 9.18182 168.498 8.63636C168.498 8.0947 168.42 7.61364 168.265 7.19318C168.11 6.77273 167.879 6.44318 167.572 6.20455C167.265 5.96591 166.882 5.84659 166.424 5.84659C165.985 5.84659 165.612 5.96212 165.305 6.19318C164.998 6.42424 164.765 6.74811 164.606 7.16477C164.451 7.58144 164.373 8.07197 164.373 8.63636Z", "fill", "#7A7A7A"],
                        [1, "widget__leave"],
                        ["target", "_blank", 1, "widget__leave-link", 3, "href"],
                        [1, "widget__all-reviews"],
                        ["class", "widget__review", 3, "review", "project", "averageRatings", "source", "reviewsCount", "customSettings", "isMobile", 4, "ngIf"],
                        [1, "widget__review", 3, "review", "project", "averageRatings", "source", "reviewsCount", "customSettings", "isMobile"],
                        [3, "inputs", "dataSource", "onMove"],
                        ["widgetCarousel", ""],
                        [4, "nguCarouselDef"],
                        ["class", "widget__points", "NguCarouselPoint", "", 4, "ngIf"],
                        ["NguCarouselPrev", "", 3, "class", 4, "ngIf"],
                        ["NguCarouselNext", "", 3, "class", 4, "ngIf"],
                        ["class", "widget__review", 3, "review", "project", "source", "averageRatings", "reviewsCount", "customSettings", 4, "ngIf"],
                        [1, "widget__review", 3, "review", "project", "source", "averageRatings", "reviewsCount", "customSettings"],
                        ["NguCarouselPoint", "", 1, "widget__points"],
                        [1, "widget__point", 3, "click"],
                        ["NguCarouselPrev", ""],
                        ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24", 1, "icon"],
                        ["d", "M0 0h24v24H0z", "fill", "none"],
                        ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],
                        ["NguCarouselNext", ""],
                        ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],
                        [3, "click"]
                    ],
                    template: function(e, t) {
                        1 & e && (ao(0, "div"), no(1, Xd, 10, 13, "ng-container", 0), lo()), 2 & e && (Ho("max-width: " + (null == t.customSettings ? null : t.customSettings.containerWidth)), na("widget ", "widget-" + t.widgetID, " ", null == t.customSettings ? null : t.customSettings.reviewLayout, ""), ns(1), ro("ngIf", null == t.reviews ? null : t.reviews.length))
                    },
                    directives: [Ju, Qu, Yu, xd, Gh, Zh, Yh, Wh, Uh, $h],
                    pipes: [sc],
                    styles: ['review-lab{width:100%;color:inherit;font-size:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}review-lab *{margin:0;padding:0;box-sizing:border-box}review-lab .ngucarousel{overflow:inherit!important;padding:0 calc(48px + 8px * 2);min-height:75px}@media (max-width:900px){review-lab .ngucarousel{padding:0}}review-lab .ngucarousel .ngu-touch-container{overflow:hidden}review-lab .ngucarousel .ngu-touch-container .ngucarousel-items{margin-top:7px;align-items:stretch}review-lab .ngucarousel .ngu-touch-container .ngucarousel-items .item{display:block;margin:0;padding:8px}review-lab .ngucarousel .ngu-touch-container .ngucarousel-items .item .tile{width:100%;height:100%;padding-bottom:20px;box-shadow:0 0 0 0 transparent}review-lab .widget{margin:0 auto}@media (max-width:900px){review-lab .widget{padding:8px}}review-lab .widget.column{max-width:550px}review-lab .widget__header{margin:0 calc(48px + 8px * 3)}review-lab .widget__header__block{display:flex;justify-content:space-between;align-items:center}review-lab .widget__header.column{margin:0 auto 15px}review-lab .widget__header.grid{margin:0 calc(48px + 8px * 3)}@media (max-width:900px){review-lab .widget__header{margin:0 4px}}review-lab .widget__tabs{display:flex;flex-wrap:wrap;border-radius:16px;background-color:rgba(43,43,43,.05);box-shadow:0 0 2px 4px rgba(43,43,43,.05)}@media (max-width:500px){review-lab .widget__tabs{flex-wrap:nowrap;overflow:auto}review-lab .widget__tabs::-webkit-scrollbar-track{border-radius:0}review-lab .widget__tabs::-webkit-scrollbar{width:0}review-lab .widget__tabs::-webkit-scrollbar-thumb{border-radius:0;background-color:transparent}review-lab .widget__tabs:hover::-webkit-scrollbar-thumb{background-color:transparent}}review-lab .widget__all-reviews{margin:15px 0 0 16px;display:block;font-size:14px}review-lab .widget__tab{font-size:14px!important;padding:8px 16px;position:relative;cursor:pointer;border-radius:16px;transition:background-color .15s}@media (max-width:330px){review-lab .widget__tab{padding:8px 12px}}review-lab .widget__tab:hover{background-color:rgba(43,43,43,.05)}review-lab .widget__tab_active{cursor:default;background-color:#fff}review-lab .widget__tab_active:hover{background-color:#fff}review-lab .widget__tab_all{min-width:94px;display:flex;align-items:center}@media (max-width:900px){review-lab .widget__tab_all{padding:8px}}review-lab .widget__tab .before{content:"";position:absolute;top:50%;left:12px;transform:translateY(-50%);background-position:50%;background-size:cover}review-lab .widget__tab--rating{display:inline-block;font-weight:700;margin-left:3px}@media (max-width:900px){review-lab .widget__tab--rating{display:none}}@media (max-width:900px){review-lab .widget__tab_avito,review-lab .widget__tab_doubleGis,review-lab .widget__tab_googleMap,review-lab .widget__tab_instagram,review-lab .widget__tab_vkontakte,review-lab .widget__tab_yaMarket,review-lab .widget__tab_yaSprav{padding:8px 0;font-size:0}review-lab .widget__tab_avito .before,review-lab .widget__tab_doubleGis .before,review-lab .widget__tab_googleMap .before,review-lab .widget__tab_instagram .before,review-lab .widget__tab_vkontakte .before,review-lab .widget__tab_yaMarket .before,review-lab .widget__tab_yaSprav .before{left:50%;transform:translate(-50%,-50%)}}review-lab .widget__tab_avito,review-lab .widget__tab_doubleGis,review-lab .widget__tab_googleMap,review-lab .widget__tab_yaMarket,review-lab .widget__tab_yaSprav{padding:8px 16px 8px 40px}@media (max-width:900px){review-lab .widget__tab_avito,review-lab .widget__tab_doubleGis,review-lab .widget__tab_googleMap,review-lab .widget__tab_yaMarket,review-lab .widget__tab_yaSprav{padding:8px 0 8px 40px}}review-lab .widget__tab_yaMarket .before{height:20px;width:20px}review-lab .widget__tab_avito .before,review-lab .widget__tab_googleMap .before,review-lab .widget__tab_yaSprav .before{height:24px;width:24px}review-lab .widget__tab_doubleGis .before{height:32px;width:25px;left:10px}@media (max-width:900px){review-lab .widget__tab_doubleGis .before{left:50%}}review-lab .widget__tab_instagram,review-lab .widget__tab_vkontakte{padding:8px 8px 8px 42px}@media (max-width:900px){review-lab .widget__tab_instagram,review-lab .widget__tab_vkontakte{padding:8px 0 8px 40px}}review-lab .widget__tab_instagram .before,review-lab .widget__tab_vkontakte .before{height:24px;width:24px}review-lab .widget__count{display:none;color:#2b2b2b;line-height:24px}@media (max-width:900px){review-lab .widget__count{margin:12px 8px 0;display:flex;align-items:center}}review-lab .widget__count-column{margin-right:10px}review-lab .widget__layout.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:15px;margin:15px calc(48px + 8px * 3) 0}@media (max-width:500px){review-lab .widget__layout.grid{grid-template-columns:1fr;margin:15px 0}}review-lab .widget__layout.grid .widget__review{max-width:none;margin:0 auto}review-lab .widget__layout.column{display:grid;grid-template-columns:1fr;gap:15px;margin:15px auto 0}review-lab .widget__layout.column .widget__review{max-width:none}review-lab .widget__show-more{position:absolute;text-align:center;cursor:pointer;display:inline-block;background:#eee;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:10px;padding:9px 0;font-weight:700;font-size:16px;line-height:19px;color:#198cff;width:163.5px}review-lab .widget__show-more:hover{background:#e9eef3}review-lab .widget__show-more-bottom-center{position:static;transform:none;margin:0 7.5px}review-lab .widget__review{height:100%;max-width:calc(25% - 16px);width:100%;transition:left .15s}review-lab .widget__pag{height:48px;width:48px;padding:8px;position:absolute;top:50%;z-index:150;transform:translateY(-50%);cursor:pointer;border-radius:50%;background-color:#fff;box-shadow:0 6px 10px rgba(0,0,0,.2);transition:box-shadow .15s}review-lab .widget__pag-bottom,review-lab .widget__pag-bottom-center{top:calc(100% + 32px)}review-lab .widget__pag--center{position:static;transform:none;margin:0 10px}@media (max-width:1024px){review-lab .widget__pag{display:none}}review-lab .widget__pag:active{background-color:rgba(43,43,43,.05)}review-lab .widget__pag:hover{box-shadow:0 0 0 2px rgba(43,43,43,.2)}review-lab .widget__pag:hover .icon{fill:rgba(43,43,43,.5)}review-lab .widget__pag .icon{height:100%;width:100%;fill:rgba(43,43,43,.3);transition:fill .15s}review-lab .widget__pag_prev{left:8px}review-lab .widget__pag_prev-bottom{left:74px}review-lab .widget__pag_prev-bottom-center{left:calc(50% - 50px)}review-lab .widget__pag_next{right:8px}review-lab .widget__pag_next-bottom{left:140px;right:auto}review-lab .widget__pag_next-bottom-center{left:calc(50% + 12px);right:auto}review-lab .widget__points{position:absolute;left:50%;top:100%;transform:translateX(-50%);z-index:1;display:flex;align-items:center;justify-content:center;list-style:none;padding:0!important;margin:0!important}review-lab .widget__point{height:8px;width:8px;padding:0;margin:0 2px;border-radius:50%;background-color:rgba(43,43,43,.15);transition:opacity .25s linear,background-color .25s linear}review-lab .widget__point_active{background-color:rgba(43,43,43,.65)}review-lab .widget__point_none{display:none}review-lab .widget__point_tran{opacity:.3}review-lab .widget__point_half{opacity:.6}review-lab .widget__point:hover{opacity:.8}review-lab .widget__point:after,review-lab .widget__point:before{content:none!important}review-lab .widget__footer{position:relative;min-height:36px;margin:15px calc(48px + 8px * 3) 0;display:flex;align-items:center;justify-content:flex-end}@media (max-width:900px){review-lab .widget__footer{margin:5px 4px 0}}review-lab .widget__footer-isMobile{flex-direction:column;align-items:center}review-lab .widget__footer-bottom-center{justify-content:center}review-lab .widget__footer .widget__count{display:flex}@media (max-width:900px){review-lab .widget__footer .widget__count{display:none}}review-lab .widget__footer.column{margin:32px 0 0}review-lab .widget__footer.grid{margin:32px calc(48px + 8px * 3) 0}review-lab .widget__src{width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;display:block;position:relative;white-space:nowrap;margin-left:10px;color:rgba(43,43,43,.65)!important;text-decoration:none!important;transition:color .2s linear,border-color .2s linear}review-lab .widget__src-isMobile{margin-top:15px}review-lab .widget__src--logo:after{content:none!important}review-lab .widget__src--logo:hover>svg{fill:#838383}review-lab .widget__src:hover{color:#2b2b2b!important}review-lab .widget__src:hover:after{border-color:#2b2b2b!important}review-lab .widget__src:after{content:"";height:1px;width:100%;position:absolute;bottom:-2px;left:0;border-bottom:1px dashed rgba(43,43,43,.65)!important}@media (max-width:650px){review-lab .widget__src--desktop-grid{display:none}}review-lab .widget__src--mobile{display:none}@media (max-width:1024px){review-lab .widget__src--mobile{display:block;margin:15px auto 0}}review-lab .widget__src--mobile-column{display:none!important;display:block;margin:15px auto 0}review-lab .widget__leave{width:163.5px}review-lab .widget__leave-link{width:100%;text-align:center;text-decoration:none;display:block;margin:auto;background:#198cff;box-shadow:0 0 10px 1px rgba(0,0,0,.15);border-radius:10px;padding:9px 0;font-weight:700;font-size:16px;line-height:19px;color:#fff!important}review-lab .widget__leave-link:focus,review-lab .widget__leave-link:hover{color:#fff}review-lab .widget__leave-link:hover{background:#07e}review-lab .widget__leave-bottom-center{margin:0 7.5px}@media (max-width:500px){review-lab .widget__leave{margin-top:25px}}'],
                    encapsulation: 2,
                    changeDetection: 0
                }), e
            })();
            n("YguL");
            let Kd = (() => {
                class e {}
                return e.\u0275mod = dt({
                    type: e,
                    bootstrap: [Qd]
                }), e.\u0275inj = ue({
                    factory: function(t) {
                        return new(t || e)
                    },
                    providers: [Qh],
                    imports: [
                        [Pc, gh, Xh]
                    ]
                }), e
            })();
            (function() {
                if (hi) throw new Error("Cannot enable prod mode after platform setup.");
                ci = !1
            })(), Dc().bootstrapModule(Kd).catch(e => console.error(e))
        },
        eKXL: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        eLfi: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        ekE9: function(e, t, n) {
            "use strict";
            var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
                    void 0 === i && (i = n);
                    var s = Object.getOwnPropertyDescriptor(t, n);
                    s && !("get" in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, i, s)
                } : function(e, t, n, i) {
                    void 0 === i && (i = n), e[i] = t[n]
                }),
                s = this && this.__exportStar || function(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), s(n("c9FL"), t), s(n("ZM9f"), t), s(n("gS51"), t), s(n("3Rp7"), t), s(n("en7R"), t), s(n("unj4"), t), s(n("AJ5D"), t), s(n("1D88"), t), s(n("tfzh"), t), s(n("MAYq"), t), s(n("zQ7z"), t), s(n("eLfi"), t), s(n("Oc93"), t), s(n("eKXL"), t), s(n("Bx8h"), t), s(n("K70k"), t), s(n("n2pZ"), t)
        },
        en7R: function(e, t, n) {
            "use strict";
            var i, s, r, o, a, l;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ReviewTypeNamePluralE = t.ReviewTypeNameE = t.NavigationBtnsPositionE = t.SendReviewBtnPositionE = t.ReviewLayoutE = t.ReviewTypeE = t.CustomSettingsModel = void 0, t.CustomSettingsModel = class {
                    constructor(e = "{}") {
                        const t = JSON.parse(e);
                        this.isShowUserName = !1 !== t.isShowUserName && !0 !== t.isShowUserName || t.isShowUserName, this.isShowUserImage = !1 !== t.isShowUserImage && !0 !== t.isShowUserImage || t.isShowUserImage, this.isShowReviewRating = !1 !== t.isShowReviewRating && !0 !== t.isShowReviewRating || t.isShowReviewRating, this.isShowReviewSource = !1 !== t.isShowReviewSource && !0 !== t.isShowReviewSource || t.isShowReviewSource, this.isShowSectionsRating = !1 !== t.isShowSectionsRating && !0 !== t.isShowSectionsRating || t.isShowSectionsRating, this.isShowTextMessage = !1 !== t.isShowTextMessage && !0 !== t.isShowTextMessage || t.isShowTextMessage, this.isShowReviewDate = !1 !== t.isShowReviewDate && !0 !== t.isShowReviewDate || t.isShowReviewDate, this.reviewLayout = t.reviewLayout ? t.reviewLayout : i.carousel, this.sendReviewBtnPosition = t.sendReviewBtnPosition ? t.sendReviewBtnPosition : s.tr, this.navigationBtnsPosition = t.navigationBtnsPosition ? t.navigationBtnsPosition : r.along, this.showNavigationBtns = !1 !== t.showNavigationBtns && !0 !== t.showNavigationBtns || t.showNavigationBtns, this.leaveReviewText = t.leaveReviewText ? t.leaveReviewText : "\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432", this.leaveReviewLink = t.leaveReviewLink ? t.leaveReviewLink : "", this.containerWidth = t.containerWidth ? t.containerWidth : "1200px", this.reviewShortLength = t.reviewShortLength ? t.reviewShortLength : "220", this.isShowCommonReviewAmount = !1 !== t.isShowCommonReviewAmount && !0 !== t.isShowCommonReviewAmount || t.isShowCommonReviewAmount, this.isCarouselLoop = (!1 === t.isCarouselLoop || !0 === t.isCarouselLoop) && t.isCarouselLoop, this.isCarouselAutoplay = (!1 === t.isCarouselAutoplay || !0 === t.isCarouselAutoplay) && t.isCarouselAutoplay, this.carouselDesktop3SlidesInsteadOf4 = t.carouselDesktop3SlidesInsteadOf4 || !1, this.carouselSlideIntervalAutoplay = t.carouselSlideIntervalAutoplay || "10000"
                    }
                }, (l = t.ReviewTypeE || (t.ReviewTypeE = {})).yaMarket = "yaMarket", l.yaSprav = "yaSprav", l.vkontakte = "vkontakte", l.instagram = "instagram", l.googleMap = "googleMap", l.doubleGis = "doubleGis", l.avito = "avito",
                function(e) {
                    e.grid = "grid", e.carousel = "carousel", e.column = "column"
                }(i = t.ReviewLayoutE || (t.ReviewLayoutE = {})),
                function(e) {
                    e.tr = "top-right", e.br = "bottom-right", e.bc = "bottom-center"
                }(s = t.SendReviewBtnPositionE || (t.SendReviewBtnPositionE = {})),
                function(e) {
                    e.along = "along", e.bottom = "bottom", e.bc = "bottom-center"
                }(r = t.NavigationBtnsPositionE || (t.NavigationBtnsPositionE = {})), (a = t.ReviewTypeNameE || (t.ReviewTypeNameE = {})).yaMarket = "\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0430\u0440\u043a\u0435\u0442", a.yaSprav = "\u042f\u043d\u0434\u0435\u043a\u0441", a.vkontakte = "VK", a.instagram = "Instagram", a.googleMap = "Google", a.doubleGis = "2\u0413\u0418\u0421", a.avito = "Avito", (o = t.ReviewTypeNamePluralE || (t.ReviewTypeNamePluralE = {})).yaMarket = "\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0430\u0440\u043a\u0435\u0442\u0430", o.yaSprav = "\u042f\u043d\u0434\u0435\u043a\u0441.\u041a\u0430\u0440\u0442", o.vkontakte = "\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435", o.instagram = "Instagram", o.googleMap = "Google", o.doubleGis = "2\u0413\u0418\u0421", o.avito = "Avito"
        },
        gS51: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        kJkW: function(e, t) {
            function n(e) {
                return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }))
            }
            n.keys = function() {
                return []
            }, n.resolve = n, e.exports = n, n.id = "kJkW"
        },
        n2pZ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        tfzh: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        unj4: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        zQ7z: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
    },
    [
        [0, 0]
    ]
]);
