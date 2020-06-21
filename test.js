/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
! function(e, a) {
    "object" == typeof exports && "undefined" != typeof module ? a(exports, require("@tensorflow/tfjs-converter"), require("@tensorflow/tfjs-core")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs-converter", "@tensorflow/tfjs-core"], a) : a(e.cocoSsd = {}, e.tf, e.tf)
}(this, function(e, a, i) {
    "use strict";

    function n(e, a, i, n) {
        return new(i || (i = Promise))(function(t, m) {
            function d(e) {
                try {
                    r(n.next(e))
                } catch (e) {
                    m(e)
                }
            }

            function s(e) {
                try {
                    r(n.throw(e))
                } catch (e) {
                    m(e)
                }
            }

            function r(e) {
                e.done ? t(e.value) : new i(function(a) {
                    a(e.value)
                }).then(d, s)
            }
            r((n = n.apply(e, a || [])).next())
        })
    }

    function t(e, a) {
        var i, n, t, m, d = {
            label: 0,
            sent: function() {
                if (1 & t[0]) throw t[1];
                return t[1]
            },
            trys: [],
            ops: []
        };
        return m = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (m[Symbol.iterator] = function() {
            return this
        }), m;

        function s(m) {
            return function(s) {
                return function(m) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; d;) try {
                        if (i = 1, n && (t = 2 & m[0] ? n.return : m[0] ? n.throw || ((t = n.return) && t.call(n), 0) : n.next) && !(t = t.call(n, m[1])).done) return t;
                        switch (n = 0, t && (m = [2 & m[0], t.value]), m[0]) {
                            case 0:
                            case 1:
                                t = m;
                                break;
                            case 4:
                                return d.label++, {
                                    value: m[1],
                                    done: !1
                                };
                            case 5:
                                d.label++, n = m[1], m = [0];
                                continue;
                            case 7:
                                m = d.ops.pop(), d.trys.pop();
                                continue;
                            default:
                                if (!(t = (t = d.trys).length > 0 && t[t.length - 1]) && (6 === m[0] || 2 === m[0])) {
                                    d = 0;
                                    continue
                                }
                                if (3 === m[0] && (!t || m[1] > t[0] && m[1] < t[3])) {
                                    d.label = m[1];
                                    break
                                }
                                if (6 === m[0] && d.label < t[1]) {
                                    d.label = t[1], t = m;
                                    break
                                }
                                if (t && d.label < t[2]) {
                                    d.label = t[2], d.ops.push(m);
                                    break
                                }
                                t[2] && d.ops.pop(), d.trys.pop();
                                continue
                        }
                        m = a.call(e, d)
                    } catch (e) {
                        m = [6, e], n = 0
                    } finally {
                        i = t = 0
                    }
                    if (5 & m[0]) throw m[1];
                    return {
                        value: m[0] ? m[1] : void 0,
                        done: !0
                    }
                }([m, s])
            }
        }
    }
    var m = {
            1: {
                name: "/m/workChair",
                id: 1,
                displayName: "workChair"
            },
            2: {
                name: "/m/meetingChair",
                id: 2,
                displayName: "meetingChair"
            }
        },
        d = "https://storage.googleapis.com/tfjs-models/savedmodel/";
    var s = function() {
        function e(e, a) {
            this.modelPath = a || "" + d + this.getPrefix(e) + "/model.json"
        }
        return e.prototype.getPrefix = function(e) {
            return "lite_mobilenet_v2" === e ? "ssd" + e : "ssd_" + e
        }, e.prototype.load = function() {
            return n(this, void 0, void 0, function() {
                var e, n, m;
                return t(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e = this, [4, a.loadGraphModel(this.modelPath)];
                        case 1:
                            return e.model = t.sent(), n = i.zeros([1, 300, 300, 3], "int32"), [4, this.model.executeAsync(n)];
                        case 2:
                            return m = t.sent(), [4, Promise.all(m.map(function(e) {
                                return e.data()
                            }))];
                        case 3:
                            return t.sent(), m.map(function(e) {
                                return e.dispose()
                            }), n.dispose(), [2]
                    }
                })
            })
        }, e.prototype.infer = function(e, a) {
            return n(this, void 0, void 0, function() {
                var n, m, d, s, r, o, l, p, c, y, u, f;
                return t(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return n = i.tidy(function() {
                                return e instanceof i.Tensor || (e = i.browser.fromPixels(e)), e.expandDims(0)
                            }), m = n.shape[1], d = n.shape[2], [4, this.model.executeAsync(n)];
                        case 1:
                            return s = t.sent(), r = s[0].dataSync(), o = s[1].dataSync(), n.dispose(), i.dispose(s), l = function(e, a) {
                                var i = "function" == typeof Symbol && e[Symbol.iterator];
                                if (!i) return e;
                                var n, t, m = i.call(e),
                                    d = [];
                                try {
                                    for (;
                                        (void 0 === a || a-- > 0) && !(n = m.next()).done;) d.push(n.value)
                                } catch (e) {
                                    t = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        n && !n.done && (i = m.return) && i.call(m)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                }
                                return d
                            }(this.calculateMaxScores(r, s[0].shape[1], s[0].shape[2]), 2), p = l[0], c = l[1], y = i.getBackend(), i.setBackend("cpu"), u = i.tidy(function() {
                                var e = i.tensor2d(o, [s[1].shape[1], s[1].shape[3]]);
                                return i.image.nonMaxSuppression(e, p, a, .5, .5)
                            }), f = u.dataSync(), u.dispose(), i.setBackend(y), [2, this.buildDetectedObjects(d, m, o, p, f, c)]
                    }
                })
            })
        }, e.prototype.buildDetectedObjects = function(e, a, i, n, t, d) {
            for (var s = t.length, r = [], o = 0; o < s; o++) {
                for (var l = [], p = 0; p < 4; p++) l[p] = i[4 * t[o] + p];
                var c = l[0] * a,
                    y = l[1] * e,
                    u = l[2] * a,
                    f = l[3] * e;
                l[0] = y, l[1] = c, l[2] = f - y, l[3] = u - c, r.push({
                    bbox: l,
                    class: m[d[t[o]] + 1].displayName,
                    score: n[t[o]]
                })
            }
            return r
        }, e.prototype.calculateMaxScores = function(e, a, i) {
            for (var n = [], t = [], m = 0; m < a; m++) {
                for (var d = Number.MIN_VALUE, s = -1, r = 0; r < i; r++) e[m * i + r] > d && (d = e[m * i + r], s = r);
                n[m] = d, t[m] = s
            }
            return [n, t]
        }, e.prototype.detect = function(e, a) {
            return void 0 === a && (a = 20), n(this, void 0, void 0, function() {
                return t(this, function(i) {
                    return [2, this.infer(e, a)]
                })
            })
        }, e.prototype.dispose = function() {
            null != this.model && this.model.dispose()
        }, e
    }();
    e.load = function(e) {
        return void 0 === e && (e = {}), n(this, void 0, void 0, function() {
            var a, n, m;
            return t(this, function(t) {
                switch (t.label) {
                    case 0:
                        if (null == i) throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");
                        if (a = e.base || "lite_mobilenet_v2", n = e.modelUrl, -1 === ["mobilenet_v1", "mobilenet_v2", "lite_mobilenet_v2"].indexOf(a)) throw new Error("ObjectDetection constructed with invalid base model " + a + ". Valid names are 'mobilenet_v1', 'mobilenet_v2' and 'lite_mobilenet_v2'.");
                        return [4, (m = new s(a, n)).load()];
                    case 1:
                        return t.sent(), [2, m]
                }
            })
        })
    }, e.ObjectDetection = s, e.version = "2.0.3", Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
