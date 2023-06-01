if (typeof window !== 'undefined') { !function (i) { if ("function" == typeof define && define.amd) define(["jquery"], i); else if ("object" == typeof module && module.exports) { var t = require("jquery"); i(t), module.exports = t } else i(jQuery) }(function (g) { function s(i) { this.init(i) } s.prototype = { value: 0, size: 100, startAngle: -Math.PI, thickness: "auto", fill: { gradient: ["#3aeabb", "#fdd250"] }, emptyFill: "rgba(0, 0, 0, .1)", animation: { duration: 1200, easing: "circleProgressEasing" }, animationStartValue: 0, reverse: !1, lineCap: "butt", insertMode: "prepend", constructor: s, el: null, canvas: null, ctx: null, radius: 0, arcFill: null, lastFrameValue: 0, init: function (i) { g.extend(this, i), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited") }, initWidget: function () { this.canvas || (this.canvas = g("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]); var i = this.canvas; if (i.width = this.size, i.height = this.size, this.ctx = i.getContext("2d"), 1 < window.devicePixelRatio) { var t = window.devicePixelRatio; i.style.width = i.style.height = this.size + "px", i.width = i.height = this.size * t, this.ctx.scale(t, t) } }, initFill: function () { function i() { var i = g("<canvas>")[0]; i.width = e.size, i.height = e.size, i.getContext("2d").drawImage(t, 0, 0, r, r), e.arcFill = e.ctx.createPattern(i, "no-repeat"), e.drawFrame(e.lastFrameValue) } var t, e = this, a = this.fill, n = this.ctx, r = this.size; if (!a) throw Error("The fill is not specified!"); if ("string" == typeof a && (a = { color: a }), a.color && (this.arcFill = a.color), a.gradient) { var s = a.gradient; if (1 == s.length) this.arcFill = s[0]; else if (1 < s.length) { for (var l = a.gradientAngle || 0, o = a.gradientDirection || [r / 2 * (1 - Math.cos(l)), r / 2 * (1 + Math.sin(l)), r / 2 * (1 + Math.cos(l)), r / 2 * (1 - Math.sin(l))], h = n.createLinearGradient.apply(n, o), c = 0; c < s.length; c++) { var d = s[c], u = c / (s.length - 1); g.isArray(d) && (u = d[1], d = d[0]), h.addColorStop(u, d) } this.arcFill = h } } a.image && (a.image instanceof Image ? t = a.image : (t = new Image).src = a.image, t.complete ? i() : t.onload = i) }, draw: function () { this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value) }, drawFrame: function (i) { this.lastFrameValue = i, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(i), this.drawArc(i) }, drawArc: function (i) { if (0 !== i) { var t = this.ctx, e = this.radius, a = this.getThickness(), n = this.startAngle; t.save(), t.beginPath(), this.reverse ? t.arc(e, e, e - a / 2, n - 2 * Math.PI * i, n) : t.arc(e, e, e - a / 2, n, n + 2 * Math.PI * i), t.lineWidth = a, t.lineCap = this.lineCap, t.strokeStyle = this.arcFill, t.stroke(), t.restore() } }, drawEmptyArc: function (i) { var t = this.ctx, e = this.radius, a = this.getThickness(), n = this.startAngle; i < 1 && (t.save(), t.beginPath(), i <= 0 ? t.arc(e, e, e - a / 2, 0, 2 * Math.PI) : this.reverse ? t.arc(e, e, e - a / 2, n, n - 2 * Math.PI * i) : t.arc(e, e, e - a / 2, n + 2 * Math.PI * i, n), t.lineWidth = a, t.strokeStyle = this.emptyFill, t.stroke(), t.restore()) }, drawAnimated: function (e) { var a = this, n = this.el, i = g(this.canvas); i.stop(!0, !1), n.trigger("circle-animation-start"), i.css({ animationProgress: 0 }).animate({ animationProgress: 1 }, g.extend({}, this.animation, { step: function (i) { var t = a.animationStartValue * (1 - i) + e * i; a.drawFrame(t), n.trigger("circle-animation-progress", [i, t]) } })).promise().always(function () { n.trigger("circle-animation-end") }) }, getThickness: function () { return g.isNumeric(this.thickness) ? this.thickness : this.size / 14 }, getValue: function () { return this.value }, setValue: function (i) { this.animation && (this.animationStartValue = this.lastFrameValue), this.value = i, this.draw() } }, g.circleProgress = { defaults: s.prototype }, g.easing.circleProgressEasing = function (i) { return i < .5 ? .5 * (i *= 2) * i * i : 1 - .5 * (i = 2 - 2 * i) * i * i }, g.fn.circleProgress = function (n, i) { var r = "circle-progress", t = this.data(r); if ("widget" == n) { if (!t) throw Error('Calling "widget" method on not initialized instance is forbidden'); return t.canvas } if ("value" != n) return this.each(function () { var i = g(this), t = i.data(r), e = g.isPlainObject(n) ? n : {}; if (t) t.init(e); else { var a = g.extend({}, i.data()); "string" == typeof a.fill && (a.fill = JSON.parse(a.fill)), "string" == typeof a.animation && (a.animation = JSON.parse(a.animation)), (e = g.extend(a, e)).el = i, t = new s(e), i.data(r, t) } }); if (!t) throw Error('Calling "value" method on not initialized instance is forbidden'); if (void 0 === i) return t.getValue(); var e = i; return this.each(function () { g(this).data(r).setValue(e) }) } }); }