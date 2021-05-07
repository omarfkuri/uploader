! function(e, t) {
	"function" == typeof define && define.amd ? define(function() {
		return t(e)
	}) : "object" == typeof module && module.exports ? module.exports = t(e) : e.ss = t(e)
}("undefined" != typeof window ? window : this, function(g) {
	var s
		, y = g.ss || {}
		, t = /^\s+/
		, n = /\s+$/
		, e = /[xy]/g
		, i = /.*(\/|\\)/
		, o = /.*[.]/
		, r = /[\t\r\n]/g
		, a = 0 < Object.prototype.toString.call(g.HTMLElement)
		.indexOf("Constructor")
		, l = -1 !== navigator.userAgent.indexOf("MSIE 7")
		, u = document.createElement("input");
	u.type = "file"
		, s = "multiple" in u && "undefined" != typeof File && void 0 !== (new XMLHttpRequest)
		.upload
		, y.obj2string = function(e, t) {
			"use strict";
			var s
				, n
				, i = [];
			for (var o in e) {
				e.hasOwnProperty(o) && (s = t ? t + "[" + o + "]" : o, n = e[o], i.push("object" == typeof n ? y.obj2string(n, s) : encodeURIComponent(s) + "=" + encodeURIComponent(n)))
			}
			return i.join("&")
		}
		, y.extendObj = function(e, t) {
			"use strict";
			for (var s in t)
				t.hasOwnProperty(s) && (e[s] = t[s])
		}
		, y.addEvent = function(e, t, s) {
			"use strict";
			return e.addEventListener ? e.addEventListener(t, s, !1) : e.attachEvent("on" + t, s)
				, function() {
					y.removeEvent(e, t, s)
				}
		}
		, y.removeEvent = document.removeEventListener ? function(e, t, s) {
			e.removeEventListener && e.removeEventListener(t, s, !1)
		} : function(e, t, s) {
			var n = "on" + t;
			void 0 === e[n] && (e[n] = null)
				, e.detachEvent(n, s)
		}
		, y.newXHR = function() {
			"use strict";
			if ("undefined" != typeof XMLHttpRequest)
				return new g.XMLHttpRequest;
			if (g.ActiveXObject)
				try {
					return new g.ActiveXObject("Microsoft.XMLHTTP")
				}
			catch (e) {
				return !1
			}
		}
		, y.encodeUTF8 = function(e) {
			"use strict";
			return unescape(encodeURIComponent(e))
		}
		, y.getIFrame = function() {
			"use strict";
			var e
				, t = y.getUID();
			return l ? e = document.createElement('<iframe src="javascript:false;" name="' + t + '">') : ((e = document.createElement("iframe"))
				.src = "javascript:false;", e.name = t), e.style.display = "none", e.id = t, e
		}
		, y.getForm = function(e) {
			"use strict";
			var t = document.createElement("form");
			for (var s in t.encoding = "multipart/form-data", t.enctype = "multipart/form-data", t.style.display = "none", e)
				e.hasOwnProperty(s) && (t[s] = e[s]);
			return t
		}
		, y.getHidden = function(e, t) {
			"use strict";
			var s = document.createElement("input");
			return s.type = "hidden", s.name = e, s.value = t, s
		}
		, y.parseJSON = function(e) {
			"use strict";
			if (!e)
				return !1;
			if (e = y.trim(e + ""), g.JSON && g.JSON.parse)
				try {
					return g.JSON.parse(e + "")
				}
			catch (e) {
				return !1
			}
			var i
				, o = null;
			return !(!e || y.trim(e.replace(/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g, function(e, t, s, n) {
				return i && t && (o = 0), 0 === o ? e : (i = s || t, o += !n - !s, "")
			}))) && Function("return " + e)()
		}
		, y.getBox = function(e) {
			"use strict";
			var t
				, s
				, n = 0
				, i = 0;
			if (e.getBoundingClientRect)
				t = e.getBoundingClientRect()
				, s = document.documentElement
				, n = t.top + (g.pageYOffset || s.scrollTop) - (s.clientTop || 0)
				, i = t.left + (g.pageXOffset || s.scrollLeft) - (s.clientLeft || 0);
			else
				for (; i += e.offsetLeft, n += e.offsetTop, e = e.offsetParent;)
			;
			return {
				top: Math.round(n)
				, left: Math.round(i)
			}
		}
		, y.addStyles = function(e, t) {
			"use strict";
			for (var s in t)
				t.hasOwnProperty(s) && (e.style[s] = t[s])
		}
		, y.copyLayout = function(e, t) {
			"use strict";
			y.getBox(e);
			y.addStyles(t
				, {
					position: "absolute"
					, width: e.offsetWidth + "px"
					, height: e.offsetHeight + "px"
				})
		}
		, y.getUID = function() {
			"use strict";
			return "axxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(e, function(e) {
				var t = 16 * Math.random() | 0;
				return ("x" == e ? t : 3 & t | 8)
					.toString(16)
			})
		};
	var d = "".trim;
	y.trim = d && !d.call("\ufeff ") ? function(e) {
		return null === e ? "" : d.call(e)
	} : function(e) {
		return null === e ? "" : e.toString()
			.replace(t, "")
			.replace(n, "")
	};
	return y.indexOf = [].indexOf ? function(e, t) {
		return e.indexOf(t)
	} : function(e, t) {
		for (var s = 0, n = e.length; s < n; s++)
			if (e[s] === t)
				return s;
		return -1
	}, y.arrayDelete = function(e, t) {
		var s = y.indexOf(e, t); -
		1 < s && e.splice(s, 1)
	}, y.getFilename = function(e) {
		"use strict";
		return e.replace(i, "")
	}, y.getExt = function(e) {
		"use strict";
		return -1 !== e.indexOf(".") ? e.replace(o, "") : ""
	}, y.isVisible = function(e) {
		"use strict";
		return !!e && (1 !== e.nodeType || e == document.body ? !(e = null) : e.parentNode && (0 < e.offsetWidth || 0 < e.offsetHeight || "none" != y.getStyle(e, "display")
			.toLowerCase()) ? y.isVisible(e.parentNode) : (e = null, !1))
	}, y.getStyle = function(e, t) {
		"use strict";
		return g.getComputedStyle ? e.ownerDocument.defaultView.getComputedStyle(e, null)
			.getPropertyValue(t) : e.currentStyle && e.currentStyle[t] ? e.currentStyle[t] : void 0
	}, y.getFormObj = function(e) {
		"use strict";
		for (var t, s = e.elements, n = ["button", "submit", "image", "reset"], i = {}, o = 0, r = s.length; o < r; o++)
			if (t = {}, s[o].name && !s[o].disabled && -1 === y.indexOf(n, s[o].type)) {
				if (("checkbox" == s[o].type || "radio" == s[o].type) && !s[o].checked)
					continue;
				t[s[o].name] = y.val(s[o])
					, y.extendObj(i, t)
			}
		return i
	}, y.val = function(e) {
		"use strict";
		if (e) {
			if ("SELECT" != e.nodeName.toUpperCase())
				return e.value;
			for (var t, s = e.options, n = e.selectedIndex, i = "select-one" === e.type || n < 0, o = i ? null : [], r = 0, a = s.length; r < a; r++)
				if ((s[r].selected || r === n) && !s[r].disabled) {
					if (t = s[r].value ? s[r].value : s[r].text, i)
						return t;
					o.push(t)
				}
			return o
		}
	}, y.hasClass = function(e, t) {
		"use strict";
		return !(!e || !t) && 0 <= (" " + e.className + " ")
			.replace(r, " ")
			.indexOf(" " + t + " ")
	}, y.addClass = function(e, t) {
		"use strict";
		if (!e || !t)
			return !1;
		y.hasClass(e, t) || (e.className += " " + t)
	}, y.removeClass = function() {
		"use strict";
		var s = {};
		return function(e, t) {
			if (!e || !t)
				return !1;
			s[t] || (s[t] = new RegExp("(?:^|\\s)" + t + "(?!\\S)"))
				, e.className = e.className.replace(s[t], "")
		}
	}(), y.purge = function(e) {
		"use strict";
		var t
			, s
			, n
			, i = e.attributes;
		if (i)
			for (t = i.length - 1; 0 <= t; --t)
				"function" == typeof e[n = i[t].name] && (e[n] = null);
		if (i = e.childNodes)
			for (s = i.length, t = 0; t < s; t += 1)
				y.purge(e.childNodes[t])
	}, y.remove = function(e) {
		"use strict";
		e && e.parentNode && (y.purge(e), e.parentNode.removeChild(e))
			, e = null
	}, y.verifyElem = function(e) {
		"use strict";
		return "undefined" != typeof jQuery && e instanceof jQuery ? e = e[0] : "string" == typeof e && ("#" == e.charAt(0) && (e = e.substr(1)), e = document.getElementById(e)), !(!e || 1 !== e.nodeType) && ("A" == e.nodeName.toUpperCase() && (e.style.cursor = "pointer", y.addEvent(e, "click", function(e) {
			e && e.preventDefault ? e.preventDefault() : g.event && (g.event.returnValue = !1)
		})), e)
	}, y._options = {}, y.uploadSetup = function(e) {
		"use strict";
		y.extendObj(y._options, e)
	}, y.SimpleUpload = function(e) {
		"use strict";
		if (this._opts = {
				button: ""
				, url: ""
				, dropzone: ""
				, dragClass: ""
				, form: ""
				, overrideSubmit: !0
				, cors: !1
				, withCredentials: !1
				, progressUrl: !1
				, sessionProgressUrl: !1
				, nginxProgressUrl: !1
				, multiple: !1
				, capture: !1
				, maxUploads: 3
				, queue: !0
				, checkProgressInterval: 500
				, keyParamName: "APC_UPLOAD_PROGRESS"
				, sessionProgressName: "PHP_SESSION_UPLOAD_PROGRESS"
				, nginxProgressHeader: "X-Progress-ID"
				, customProgressHeaders: {}
				, corsInputName: "XHR_CORS_TARGETORIGIN"
				, allowedExtensions: []
				, accept: ""
				, maxSize: !1
				, name: ""
				, data: {}
				, noParams: !0
				, autoSubmit: !0
				, multipart: !0
				, method: "POST"
				, responseType: ""
				, debug: !1
				, hoverClass: ""
				, focusClass: ""
				, disabledClass: ""
				, customHeaders: {}
				, encodeHeaders: !0
				, autoCalibrate: !0
				, onBlankSubmit: function() {}
				, onAbort: function(e, t, s) {}
				, onChange: function(e, t, s, n, i) {}
				, onSubmit: function(e, t, s, n) {}
				, onProgress: function(e) {}
				, onUpdateFileSize: function(e) {}
				, onComplete: function(e, t, s, n) {}
				, onExtError: function(e, t) {}
				, onSizeError: function(e, t) {}
				, onError: function(e, t, s, n, i, o, r) {}
				, startXHR: function(e, t, s) {}
				, endXHR: function(e, t, s) {}
				, startNonXHR: function(e, t) {}
				, endNonXHR: function(e, t) {}
			}, y.extendObj(this._opts, y._options), y.extendObj(this._opts, e), this._queue = [], this._active = 0, this._disabled = !1, this._maxFails = 10, this._progKeys = {}, this._sizeFlags = {}, this._btns = [], this.addButton(this._opts.button), delete this._opts.button, this._opts.button = e = null, !1 === this._opts.multiple && (this._opts.maxUploads = 1), "" !== this._opts.dropzone && this.addDZ(this._opts.dropzone), "" === this._opts.dropzone && this._btns.length < 1)
			throw new Error("Invalid upload button. Make sure the element you're passing exists.");
		"" !== this._opts.form && this.setForm(this._opts.form)
			, this._createInput()
			, this._manDisabled = !1
			, this.enable(!0)
	}, y.SimpleUpload.prototype = {
		destroy: function() {
			"use strict";
			for (var e = this._btns.length; e--;)
				this._btns[e].off && this._btns[e].off()
				, y.removeClass(this._btns[e], this._opts.hoverClass)
				, y.removeClass(this._btns[e], this._opts.focusClass)
				, y.removeClass(this._btns[e], this._opts.disabledClass)
				, this._btns[e].disabled = !1;
			this._killInput()
				, this._destroy = !0
		}
		, log: function(e) {
			"use strict";
			this._opts && this._opts.debug && g.console && g.console.log && g.console.log("[Uploader] " + e)
		}
		, setData: function(e) {
			"use strict";
			this._opts.data = e
		}
		, setOptions: function(e) {
			"use strict";
			y.extendObj(this._opts, e)
		}
		, addButton: function(e) {
			var t;
			if (e instanceof Array)
				for (var s = 0, n = e.length; s < n; s++)
					!1 !== (t = y.verifyElem(e[s])) ? this._btns.push(this.rerouteClicks(t)) : this.log("Button with array index " + s + " is invalid");
			else
				!1 !== (t = y.verifyElem(e)) && this._btns.push(this.rerouteClicks(t))
		}
		, addDZ: function(e) {
			s && ((e = y.verifyElem(e)) ? this.addDropZone(e) : this.log("Invalid or nonexistent element passed for drop zone"))
		}
		, setProgressBar: function(e) {
			"use strict";
			this._progBar = y.verifyElem(e)
		}
		, setPctBox: function(e) {
			"use strict";
			this._pctBox = y.verifyElem(e)
		}
		, setFileSizeBox: function(e) {
			"use strict";
			this._sizeBox = y.verifyElem(e)
		}
		, setProgressContainer: function(e) {
			"use strict";
			this._progBox = y.verifyElem(e)
		}
		, setAbortBtn: function(e, t) {
			"use strict";
			this._abortBtn = y.verifyElem(e)
				, this._removeAbort = !1
				, t && (this._removeAbort = !0)
		}
		, setForm: function(e) {
			"use strict";
			var t;
			this._form = y.verifyElem(e)
				, this._form && "FORM" == this._form.nodeName.toUpperCase() ? ((t = this)
					._opts.autoSubmit = !1, this._opts.overrideSubmit && (y.addEvent(this._form, "submit", function(e) {
						e.preventDefault ? e.preventDefault() : g.event && (g.event.returnValue = !1)
							, t._validateForm() && t.submit()
					}), this._form.submit = function() {
						t._validateForm() && t.submit()
					})) : this.log("Invalid or nonexistent element passed for form")
		}
		, getQueueSize: function() {
			"use strict";
			return this._queue.length
		}
		, removeCurrent: function(e) {
			"use strict";
			if (e) {
				for (var t = this._queue.length; t--;)
					if (this._queue[t].id === e) {
						this._queue.splice(t, 1);
						break
					}
			} else
				this._queue.splice(0, 1);
			this._cycleQueue()
		}
		, clearQueue: function() {
			"use strict";
			this._queue.length = 0
		}
		, disable: function(e) {
			"use strict";
			var t
				, s = this._btns.length;
			for (this._manDisabled = !e || !0 === this._manDisabled, this._disabled = !0; s--;)
				"INPUT" != (t = this._btns[s].nodeName.toUpperCase()) && "BUTTON" != t || (this._btns[s].disabled = !0)
				, "" !== this._opts.disabledClass && y.addClass(this._btns[s], this._opts.disabledClass);
			this._input && this._input.parentNode && (this._input.parentNode.style.visibility = "hidden")
		}
		, enable: function(e) {
			"use strict";
			if (e || (this._manDisabled = !1), !0 !== this._manDisabled) {
				var t = this._btns.length;
				for (this._disabled = !1; t--;)
					y.removeClass(this._btns[t], this._opts.disabledClass)
					, this._btns[t].disabled = !1
			}
		}
		, updatePosition: function(e) {
			"use strict";
			(e = e || this._btns[0]) && this._input && this._input.parentNode && y.copyLayout(e, this._input.parentNode)
				, e = null
		}
		, rerouteClicks: function(e) {
			"use strict";
			var t
				, s = this;
			return e.off = y.addEvent(e, "mouseover", function() {
				s._disabled || (s._input || s._createInput(), s._overBtn = e, y.copyLayout(e, s._input.parentNode), s._input.parentNode.style.visibility = "visible")
			}), s._opts.autoCalibrate && !y.isVisible(e) && (s.log("Upload button not visible"), t = function() {
				y.isVisible(e) ? (s.log("Upload button now visible"), g.setTimeout(function() {
					s.updatePosition(e)
						, 1 === s._btns.length && (s._input.parentNode.style.visibility = "hidden")
				}, 200)) : g.setTimeout(t, 500)
			}, g.setTimeout(t, 500)), e
		}
		, submit: function(e, t) {
			"use strict";
			!t && this._queue.length < 1 ? this._opts.onBlankSubmit.call(this) : this._disabled || this._active >= this._opts.maxUploads || this._queue.length < 1 || this._checkFile(this._queue[0]) && (!1 !== this._opts.onSubmit.call(this, this._queue[0].name, this._queue[0].ext, this._queue[0].btn, this._queue[0].size) ? (this._active++, (!1 === this._opts.multiple || !1 === this._opts.queue && this._active >= this._opts.maxUploads) && this.disable(!0), this._initUpload(this._queue[0])) : this.removeCurrent(this._queue[0].id))
		}
	}, y.IframeUpload = {
		_detachEvents: {}
		, _detach: function(e) {
			this._detachEvents[e] && (this._detachEvents[e](), delete this._detachEvents[e])
		}
		, _getHost: function(e) {
			var t = document.createElement("a");
			return t.href = e, t.hostname ? t.hostname.toLowerCase() : e
		}
		, _addFiles: function(e) {
			var t = y.getFilename(e.value)
				, s = y.getExt(t);
			return !1 !== this._opts.onChange.call(this, t, s, this._overBtn, void 0, e) && (this._queue.push({
				id: y.getUID()
				, file: e
				, name: t
				, ext: s
				, btn: this._overBtn
				, size: null
			}), !0)
		}
		, _uploadIframe: function(t, s, n, i, o, r, a) {
			"use strict";
			var l
				, u
				, d = this
				, c = this._opts
				, p = y.getUID()
				, h = y.getIFrame()
				, f = !1
				, m = !1
				, e = !0 !== c.noParams && c.nginxProgressUrl ? e + (-1 < e.indexOf("?") ? "&" : "?") + encodeURIComponent(c.nginxProgressHeader) + "=" + encodeURIComponent(p) : c.url
				, _ = y.getForm({
					action: e
					, target: h.name
					, method: c.method
				});
			c.onProgress.call(this, 0)
				, o && (o.innerHTML = "0%")
				, i && (i.style.width = "0%")
				, c.cors && (u = y.getUID(), d._detachEvents[u] = y.addEvent(g, "message", function(e) {
					d._getHost(e.origin) == d._getHost(c.url) ? (f = !0, d._detach(u), c.endNonXHR.call(d, t.name, t.btn), d._finish(t, "", "", e.data, n, s, o, r, a)) : d.log("Non-matching origin: " + e.origin)
				}))
				, d._detachEvents[h.id] = y.addEvent(h, label, function() {
					for (var e in d._detach(h.id), c.sessionProgressUrl ? _.appendChild(y.getHidden(c.sessionProgressName, p)) : c.progressUrl && _.appendChild(y.getHidden(c.keyParamName, p)), d._form && y.extendObj(c.data, y.getFormObj(d._form)), c.data)
						c.data.hasOwnProperty(e) && _.appendChild(y.getHidden(e, c.data[e]));
					c.cors && _.appendChild(y.getHidden(c.corsInputName, g.location.href))
						, _.appendChild(t.file)
						, d._detachEvents[t.id] = y.addEvent(h, label, function() {
							if (h && h.parentNode && !m)
								if (d._detach(t.id), m = !0, delete d._progKeys[p], delete d._sizeFlags[p], r && y.removeEvent(r, "click", l), c.cors)
									g.setTimeout(function() {
										y.remove(h)
											, f || d._errorFinish(t, "", "", !1, "error", s, n, o, r, a)
											, t = c = p = h = n = s = o = r = a = null
									}, 600);
								else {
									try {
										var e = (h.contentDocument ? h.contentDocument : h.contentWindow.document)
											.body.innerHTML;
										y.remove(h)
											, h = null
											, c.endNonXHR.call(d, t.name, t.btn)
											, d._finish(t, "", "", e, n, s, o, r, a)
									} catch (e) {
										d._errorFinish(t, "", e.message, !1, "error", s, n, o, r, a)
									}
									t = c = p = n = s = o = null
								}
						})
						, r && (l = function() {
							if (y.removeEvent(r, "click", l), delete d._progKeys[p], delete d._sizeFlags[p], h) {
								m = !0
									, d._detach(t.id);
								try {
									h.contentWindow.document.execCommand && h.contentWindow.document.execCommand("Stop")
								} catch (e) {}
								try {
									h.src = "javascript".concat(":false;")
								} catch (e) {}
								g.setTimeout(function() {
									y.remove(h)
										, h = null
								}, 1)
							}
							d.log("Upload aborted")
								, c.onAbort.call(d, t.name, t.btn, t.size)
								, d._last(n, s, o, r, a)
						}, y.addEvent(r, "click", l))
						, d.log("Commencing upload using iframe")
						, _.submit()
						, g.setTimeout(function() {
							y.remove(_)
								, _ = null
								, d.removeCurrent(t.id)
						}, 1)
						, d._hasProgUrl && (d._progKeys[p] = 1, g.setTimeout(function() {
							d._getProg(p, i, n, o, 1)
								, i = n = o = null
						}, 600))
				})
				, document.body.appendChild(_)
				, document.body.appendChild(h)
		}
		, _getProg: function(o, r, a, l, u) {
			"use strict";
			var e
				, d
				, c = this
				, p = this._opts
				, t = (new Date)
				.getTime();
			if (o)
				if (p.nginxProgressUrl ? e = p.nginxProgressUrl + "?" + encodeURIComponent(p.nginxProgressHeader) + "=" + encodeURIComponent(o) + "&_=" + t : p.sessionProgressUrl ? e = p.sessionProgressUrl : p.progressUrl && (e = p.progressUrl + "?progresskey=" + encodeURIComponent(o) + "&_=" + t), d = function() {
						var e
							, t
							, s
							, n
							, i;
						try {
							if (d && (p.cors || 4 === h.readyState)) {
								d = void 0
									, h.onreadystatechange = function() {};
								try {
									i = h.statusText
										, n = h.status
								} catch (e) {
									n = i = ""
								}
								if (p.cors || 200 <= n && n < 300) {
									if (!1 === (e = y.parseJSON(h.responseText)))
										return void c.log("Error parsing progress response (expecting JSON)");
									if (p.nginxProgressUrl) {
										if ("uploading" == e.state)
											0 < (t = parseInt(e.size, 10)) && (s = Math.round(parseInt(e.received, 10) / t * 100), t = Math.round(t / 1024));
										else if ("done" == e.state)
											s = 100;
										else if ("error" == e.state)
											return void c.log("Error requesting upload progress: " + e.status)
									} else
										(p.sessionProgressUrl || p.progressUrl) && !0 === e.success && (t = parseInt(e.size, 10), s = parseInt(e.pct, 10));
									if (s && (l && (l.innerHTML = s + "%"), r && (r.style.width = s + "%"), p.onProgress.call(c, s)), t && !c._sizeFlags[o] && (a && (a.innerHTML = t + "K"), c._sizeFlags[o] = 1, p.onUpdateFileSize.call(c, t)), !s && !t && u >= c._maxFails)
										return u++, void c.log("Failed progress request limit reached. Count: " + u);
									s < 100 && c._progKeys[o] && g.setTimeout(function() {
										c._getProg(o, r, a, l, u)
											, o = r = a = l = u = null
									}, p.checkProgressInterval)
								} else
									delete c._progKeys[o]
									, c.log("Error requesting upload progress: " + n + " " + i);
								h = t = s = n = i = e = null
							}
						} catch (e) {
							c.log("Error requesting upload progress: " + e.message)
						}
					}, p.cors && !p.sessionProgressUrl) {
					if (!g.XDomainRequest)
						return;
					(h = new g.XDomainRequest)
					.open("GET", e, !0)
						, h.onprogress = h.ontimeout = function() {}
						, h.onload = d
						, h.onerror = function() {
							delete c._progKeys[o]
								, o = null
								, c.log("Error requesting upload progress")
						}
				} else {
					var s
						, n = p.sessionProgressUrl ? "POST" : "GET"
						, i = {}
						, h = y.newXHR();
					for (var f in h.onreadystatechange = d, h.open(n, e, !0), p.sessionProgressUrl && (s = encodeURIComponent(p.sessionProgressName) + "=" + encodeURIComponent(o), i["Content-Type"] = "application/x-www-form-urlencoded"), p.nginxProgressUrl && (i[p.nginxProgressHeader] = o), i["X-Requested-With"] = "XMLHttpRequest", i.Accept = "application/json, text/javascript, */*; q=0.01", y.extendObj(i, p.customProgressHeaders), i)
						i.hasOwnProperty(f) && (p.encodeHeaders ? h.setRequestHeader(f, y.encodeUTF8(i[f] + "")) : h.setRequestHeader(f, i[f] + ""));
					h.send(p.sessionProgressUrl && s || null)
				}
		}
		, _initUpload: function(e) {
			if (!1 === this._opts.startNonXHR.call(this, e.name, e.btn))
				return this._disabled && this.enable(!0), void this._active--;
			this._hasProgUrl = !!(this._opts.progressUrl || this._opts.sessionProgressUrl || this._opts.nginxProgressUrl)
				, this._uploadIframe(e, this._progBox, this._sizeBox, this._progBar, this._pctBox, this._abortBtn, this._removeAbort)
				, e = this._progBox = this._sizeBox = this._progBar = this._pctBox = this._abortBtn = this._removeAbort = null
		}
	}, y.XhrUpload = {
		_addFiles: function(e) {
			var t
				, s
				, n
				, i
				, o = e.length;
			for (this._opts.multiple || (o = 1), i = 0; i < o; i++) {
				if (t = y.getFilename(e[i].name), s = y.getExt(t), n = Math.round(e[i].size / 1024), !1 === this._opts.onChange.call(this, t, s, this._overBtn, n, e[i]))
					return !1;
				this._queue.push({
					id: y.getUID()
					, file: e[i]
					, name: t
					, ext: s
					, btn: this._overBtn
					, size: n
				})
			}
			return !0
		}
		, _uploadXhr: function(n, e, t, s, i, o, r, a, l, u) {
			"use strict";
			var d
				, c
				, p = this
				, h = this._opts
				, f = y.newXHR();
			for (var m in i && (i.innerHTML = n.size + "K"), a && (a.innerHTML = "0%"), o && (o.style.width = "0%"), d = function(e, t) {
					var s;
					try {
						if (d && (t || 4 === f.readyState))
							if (d = void 0, f.onreadystatechange = function() {}, t)
								4 !== f.readyState && f.abort()
								, h.onAbort.call(p, n.name, n.btn, n.size)
								, p._last(i, r, a, l, u);
							else {
								l && y.removeEvent(l, "click", c);
								try {
									s = f.statusText
								} catch (e) {
									s = ""
								}
								200 <= f.status && f.status < 300 ? (h.endXHR.call(p, n.name, n.size, n.btn), p._finish(n, f.status, s, f.responseText, i, r, a, l, u)) : p._errorFinish(n, f.status, s, f.responseText, "error", r, i, a, l, u)
							}
					} catch (e) {
						t || p._errorFinish(n, -1, e.message, !1, "error", r, i, a, l, u)
					}
				}, l && (c = function() {
					y.removeEvent(l, "click", c)
						, d && d(void 0, !0)
				}, y.addEvent(l, "click", c)), f.onreadystatechange = d, f.open(h.method.toUpperCase(), e, !0), f.withCredentials = !!h.withCredentials, y.extendObj(s, h.customHeaders), s)
				s.hasOwnProperty(m) && (h.encodeHeaders ? f.setRequestHeader(m, y.encodeUTF8(s[m] + "")) : f.setRequestHeader(m, s[m] + ""));
			if (y.addEvent(f.upload, "progress", function(e) {
					var t;
					e.lengthComputable && (t = Math.round(e.loaded / e.total * 100), h.onProgress.call(p, t), a && (a.innerHTML = t + "%"), o && (o.style.width = t + "%"))
				}), h.onProgress.call(this, 0), !0 === h.multipart) {
				var _ = new FormData
					, g = !1;
				for (var v in t)
					t.hasOwnProperty(v) && (v !== h.name || !0 !== h.noParams || p._form || (g = !0), _.append(v, t[v]));
				g || _.append(h.name, n.file)
					, this.log("Commencing upload using multipart form")
					, f.send(_)
			} else
				this.log("Commencing upload using binary stream")
				, f.send(n.file);
			this.removeCurrent(n.id)
		}
		, _initUpload: function(e) {
			"use strict";
			var t
				, s = {}
				, n = {};
			if (!1 === this._opts.startXHR.call(this, e.name, e.size, e.btn))
				return this._disabled && this.enable(!0), void this._active--;
			n["X-Requested-With"] = "XMLHttpRequest"
				, n["X-File-Name"] = e.name
				, "json" == this._opts.responseType.toLowerCase() && (n.Accept = "application/json, text/javascript, */*; q=0.01")
				, this._opts.multipart || (n["Content-Type"] = "application/octet-stream")
				, this._form && y.extendObj(s, y.getFormObj(this._form))
				, y.extendObj(s, this._opts.data)
				, t = !0 === this._opts.noParams ? this._opts.url : this._opts.url + (-1 < this._opts.url.indexOf("?") ? "&" : "?") + y.obj2string(s)
				, this._uploadXhr(e, t, s, n, this._sizeBox, this._progBar, this._progBox, this._pctBox, this._abortBtn, this._removeAbort)
				, this._sizeBox = this._progBar = this._progBox = this._pctBox = this._abortBtn = this._removeAbort = null
		}
	}, y.DragAndDrop = {
		_dragFileCheck: function(e) {
			if (e.dataTransfer.types)
				for (var t = 0; t < e.dataTransfer.types.length; t++)
					if ("Files" == e.dataTransfer.types[t])
						return !0;
			return !1
		}
		, addDropZone: function(e) {
			var t = this
				, s = [];
			y.addStyles(e
					, {
						zIndex: 16777271
						, position: "relative"
					})
				, e.ondragenter = function(e) {
					return e.stopPropagation(), e.preventDefault(), t._dragFileCheck(e) && (0 === s.length && y.addClass(this, t._opts.dragClass), -1 === y.indexOf(s, e.target) && s.push(e.target)), !1
				}
				, e.ondragover = function(e) {
					return e.stopPropagation(), e.preventDefault(), t._dragFileCheck(e) && (e.dataTransfer.dropEffect = "copy"), !1
				}
				, e.ondragend = function() {
					return y.removeClass(this, t._opts.dragClass), !1
				}
				, e.ondragleave = function(e) {
					return y.arrayDelete(s, e.target), 0 === s.length && y.removeClass(this, t._opts.dragClass), !1
				}
				, e.ondrop = function(e) {
					e.stopPropagation()
						, e.preventDefault()
						, y.arrayDelete(s, e.target)
						, 0 === s.length && y.removeClass(this, t._opts.dragClass)
						, t._dragFileCheck(e) && !1 !== t._addFiles(e.dataTransfer.files) && t._cycleQueue()
				}
		}
	}, y.extendObj(y.SimpleUpload.prototype
		, {
			_createInput: function() {
				"use strict";
				var e = this
					, t = document.createElement("div");
				this._input = document.createElement("input")
					, this._input.type = "file"
					, this._input.name = this._opts.name
					, s && !a && this._opts.multiple && (this._input.multiple = !0)
					, "accept" in this._input && "" !== this._opts.accept && (this._input.accept = this._opts.accept)
					, this._opts.capture && (this._input.capture = !0)
					, y.addStyles(t
						, {
							display: "block"
							, position: "absolute"
							, overflow: "hidden"
							, cursor: "pointer"
							, margin: 0
							, top: 0
							, left: 0
							, padding: 0
							, opacity: 0
							, direction: "ltr"
							, zIndex: 2147483647
						})
					, "0" !== t.style.opacity && (t.style.filter = "alpha(opacity=0)")
					, y.addStyles(this._input
						, {
							position: "absolute"
							, right: 0
							, left: 0
							, margin: 0
							, padding: 0
							, fontSize: "480px"
							, fontFamily: "sans-serif"
							, cursor: "pointer"
							, height: "100%"
							, width: "100%"
							, zIndex: 11
						})
					, this._input.turnOff = y.addEvent(this._input, "change", function() {
						e._input && "" !== e._input.value && !1 !== e._addFiles(s ? e._input.files : e._input) && (y.removeClass(e._overBtn, e._opts.hoverClass), y.removeClass(e._overBtn, e._opts.focusClass), e._killInput(), e._createInput(), e._opts.autoSubmit && e.submit())
					})
					, "" !== e._opts.hoverClass && (t.mouseOverOff = y.addEvent(t, "mouseover", function() {
						y.addClass(e._overBtn, e._opts.hoverClass)
					}))
					, t.mouseOutOff = y.addEvent(t, "mouseout", function() {
						e._input.parentNode.style.visibility = "hidden"
							, "" !== e._opts.hoverClass && (y.removeClass(e._overBtn, e._opts.hoverClass), y.removeClass(e._overBtn, e._opts.focusClass))
					})
					, "" !== e._opts.focusClass && (this._input.focusOff = y.addEvent(this._input, "focus", function() {
						y.addClass(e._overBtn, e._opts.focusClass)
					}), this._input.blurOff = y.addEvent(this._input, "blur", function() {
						y.removeClass(e._overBtn, e._opts.focusClass)
					}))
					, t.appendChild(this._input)
					, e._btns[0].appendChild(t)
					, t = null
			}
			, _last: function(e, t, s, n, i) {
				"use strict";
				if (e && (e.innerHTML = ""), s && (s.innerHTML = ""), n && i && y.remove(n), t && y.remove(t), this._active--, e = t = s = n = i = null, this._disabled && this.enable(!0), this._destroy && 0 === this._queue.length && 0 === this._active)
					for (var o in this)
						this.hasOwnProperty(o) && delete this[o];
				else
					this._cycleQueue()
			}
			, _errorFinish: function(e, t, s, n, i, o, r, a, l, u) {
				"use strict";
				this.log("Upload failed: " + t + " " + s)
					, this._opts.onError.call(this, e.name, i, t, s, n, e.btn, e.size)
					, this._last(r, o, a, l, u)
					, e = t = s = n = i = r = o = a = l = u = null
			}
			, _finish: function(e, t, s, n, i, o, r, a, l) {
				"use strict";
				this.log("Server response: " + n)
					, "json" != this._opts.responseType.toLowerCase() || !1 !== (n = y.parseJSON(n)) ? (this._opts.onComplete.call(this, e.name, n, e.btn, e.size), this._last(i, o, r, a, l), e = t = s = n = i = o = r = a = l = null) : this._errorFinish(e, t, s, !1, "parseerror", o, i, a, l)
			}
			, _checkFile: function(e) {
				"use strict";
				var t = !1
					, s = this._opts.allowedExtensions.length;
				if (0 < s) {
					for (; s--;)
						if (this._opts.allowedExtensions[s].toLowerCase() == e.ext.toLowerCase()) {
							t = !0;
							break
						}
					if (!t)
						return this.removeCurrent(e.id), this.log("File extension not permitted"), this._opts.onExtError.call(this, e.name, e.ext), !1
				}
				return e.size && !1 !== this._opts.maxSize && e.size > this._opts.maxSize ? (this.removeCurrent(e.id), this.log(e.name + " exceeds " + this._opts.maxSize + "K limit"), this._opts.onSizeError.call(this, e.name, e.size), !1) : !(e = null)
			}
			, _killInput: function() {
				"use strict";
				this._input && (this._input.turnOff && this._input.turnOff(), this._input.focusOff && this._input.focusOff(), this._input.blurOff && this._input.blurOff(), this._input.parentNode.mouseOverOff && this._input.parentNode.mouseOverOff(), y.remove(this._input.parentNode), delete this._input, this._input = null)
			}
			, _cycleQueue: function() {
				"use strict";
				0 < this._queue.length && this._opts.autoSubmit && this.submit(void 0, !0)
			}
			, _validateForm: function() {
				"use strict";
				return !(this._form.checkValidity && !this._form.checkValidity())
			}
		}), s ? y.extendObj(y.SimpleUpload.prototype, y.XhrUpload) : y.extendObj(y.SimpleUpload.prototype, y.IframeUpload), y.extendObj(y.SimpleUpload.prototype, y.DragAndDrop), y
})
, function() {
	function o(e) {
		var n;
		e && e.currentTarget && (n = e.currentTarget)
			.onceAfter("rendered", function() {
				var e
					, t
					, s;
				!n.titleTextEl || "Add Form Field" !== n.titleTextEl.get("textContent") || "file" !== (t = (e = n.fields.fieldOptions)
						.get("options"))[0].icon && (t.unshift({
						icon: "file"
						, title: "Upload Files"
						, value: {
							description: "FileField;MaxSize=5120;Multiple;addText=Add_your_Files;"
							, placeholder: ".jpg, .jpeg, .png, .gif, .txt"
							, type: "textarea"
							, title: "Upload Files"
							, id: null
							, required: !1
							, textarea: !0
						}
					}), e.set("options", t))
					, "editor-block-form" === n.getName() && (s = n.getField("fields"))
					.after("dataChange", function() {
						s.get("contentBox")
							.all(".sqs-form-builder-field")
							.each(function(e) {
								e.one('textarea[placeholder="Description"]') && -1 < e.one('textarea[placeholder="Description"]')
									.get("innerText")
									.indexOf("FileField;") && e.addClass("icon-file")
							})
					})
			})
	}
	window.SQSFormUpload = function() {
			function e() {
				t(Array.prototype.slice.call(document.querySelectorAll(".form-wrapper:not(.hidden)")))
			}

			function t(e) {
				if (e.length)
					for (var t = 0; t < e.length; t++) {
						var s = function(e) {
							var s = [];
							return Array.prototype.slice.call(e.querySelectorAll(".form-item"))
								.forEach(function(e) {
									var t = e.querySelector(".description");
									t && -1 < t.textContent.indexOf("FileField") && s.push(e)
								}), s
						}(e[t]);
						s.length && s.forEach(function(e, t) {
							! function(l) {
								if (l.className.indexOf("sqsf-uploader") < 0) {
									var e = l.getAttribute("id");
									l.querySelector(".description") && (l.querySelector(".description")
										.style.display = "none");
									var t
										, s = l.querySelector(".description") ? l.querySelector(".description")
										.textContent.replace(/ /g, "") : ""
										, n = l.querySelector(".field-element")
										, i = n.getAttribute("placeholder") ? n.getAttribute("placeholder")
										.replace(/ /g, "")
										.split(",") : [".jpg", ".jpeg", ".png", ".gif", ".txt"];
									n && (n.style.display = "none")
										, n && "TEXTAREA" !== n.tagName && (n.style.display = "none", (t = document.createElement("textarea"))
											.id = n.id, t.style.display = "none", t.className = n.className, t.value = n.value.replace(/   /g, "   \n"), l.removeChild(n), n = t, l.appendChild(n));
									var u
										, o
										, r = 1024
										, a = "Add_Files"
										, d = "https://uploader.squarewebsites.org/api/upload/"
										, c = "https://uploader.squarewebsites.org/api/upload-progress/";
									s && -1 < s.indexOf("Multiple") && (u = !0)
										, s && -1 < s.indexOf("MaxSize") && (o = parseFloat(s.split("MaxSize")[1].split("=")[1].split(";")[0]), r = o || r)
										, s && -1 < s.indexOf("UploadUrl") && (d = s.split("UploadUrl")[1].split("=")[1].split(";")[0])
										, s && -1 < s.indexOf("addText") && (a = s.split("addText")[1].split("=")[1].split(";")[0])
										, s && -1 < s.indexOf("UploadProgressUrl") && (c = s.split("UploadProgressUrl")[1].split("=")[1].split(";")[0]);
									var p = !1; -
									1 < s.indexOf("capture") && (p = !0)
										, a = a.replace(/_/g, " ")
										, e && window.sqsf_uploaders[e] && (window.sqsf_uploaders[e].destroy(), window.sqsf_uploaders[e] = null);
									var h = l.querySelector(".fileInput");
									if (h) {
										for (; h.firstChild;)
											h.removeChild(h.firstChild);
										l.removeChild(h)
									}
									var f = document.createElement("div");
									f.innerHTML = '<div style="margin-right: 15px;" class="uploadButton button sqs-system-button sqs-editable-button">' + a + '</div><div class="progressBox"></div><div class="messageBox"></div>'
										, f.className = "fileInput field-element clear"
										, f.style = "background: none;border: none;padding-left: 0;";
									var m = document.createElement("div");
									m.className = "field-error"
										, l.appendChild(f);
									var _ = l.querySelectorAll(".messageBox")[0]
										, g = "";
									try {
										g = window.Static.SQUARESPACE_CONTEXT.website.internalUrl
									} catch (e) {
										console.warn("no internal found")
									}
									var v
										, y
										, b
										, x = new ss.SimpleUpload({
											customHeaders: {
												ssurl: g
											}
											, id: e
											, accept: i.toString()
											, multiple: u
											, button: l.querySelector(".uploadButton")
											, dropzone: l.querySelector(".uploadButton")
											, url: d
											, capture: p
											, name: "uploadfile"
											, sessionProgressUrl: c
											, responseType: "json"
											, allowedExtensions: i.map(function(e) {
												return e.replace(/\./g, "")
													.replace(/ /g, "")
											})
											, maxSize: r
											, hoverClass: "ui-state-hover"
											, focusClass: "ui-state-focus"
											, disabledClass: "ui-state-disabled"
											, onChange: function() {
												l.querySelector(".field-error") && l.removeChild(l.querySelector(".field-error"))
											}
											, onExtError: function(e, t) {
												m.innerHTML = "Your file " + e + ' is "' + t + '" type. We accept only these files ' + i
													, l.insertBefore(m, l.querySelector(".title"))
											}
											, onSizeError: function(e, t) {
												m.innerHTML = "Your file " + e + " is " + t + "KB size. We accept only files < " + this._opts.maxSize + "KB"
													, l.insertBefore(m, l.querySelector(".title"))
											}
											, onBlankSubmit: function(e) {}
											, onSubmit: function(e, t, s, n) {
												l.querySelector(".field-error") && l.removeChild(l.querySelector(".field-error"));
												var i = document.createElement("div")
													, o = document.createElement("div")
													, r = document.createElement("div")
													, a = l.querySelector(".progressBox");
												i.className = "progress"
													, i.style = "width:100%; height: 4px;margin: 5px 0;"
													, o.className = "progress-bar"
													, o.style = "background: #a5a5a5;height: 100%;transition: width 1s 0.1s ease;"
													, r.className = "wrapper"
													, u || Array.prototype.slice.call(l.querySelectorAll(".wrapper"))
													.forEach(function(e) {
														e.parentNode.removeChild(e)
													})
													, i.appendChild(o)
													, r.innerHTML = '<div class="name" style="margin:10px 10px 10px 0">' + e + " <span> - " + n + "KB</span></div>"
													, r.appendChild(i)
													, a.appendChild(r)
													, this.setProgressBar(o)
													, this.setProgressContainer(r)
											}
											, onComplete: function(e, t) {
												if (!t)
													return m.textContent = e + " upload failed", l.insertBefore(m, l.querySelector(".title")), console.warn(e + " upload failed"), !1;
												var s;
												t.success ? (n.value = n.value + "   \n" + t.fileUrl, (s = document.createElement("div"))
													.className = "upload-success", s.innerHTML = '<div class="name" style="margin:10px 10px 10px 0;color: green;">' + e + " <span> - " + (t.size / 1e3)
													.toFixed(2) + "KB of size bro</span></div>", _.appendChild(s)) : (m.innerHTML = t.msg, l.insertBefore(m, l.querySelector(".title")), Array.prototype.slice.call(l.querySelectorAll(".wrapper"))
													.forEach(function(e) {
														e.parentNode.removeChild(e)
													}), console.warn("Upload failed. " + t.msg))
											}
										});
									l.className = l.className + " sqsf-uploader"
										, e && (window.sqsf_uploaders[e] = x)
										, n.value && -1 < n.value.indexOf("https://") && (v = n.value.trim()
											.split("   \n")
											.length, y = 1 < v ? "s" : "", (b = document.createElement("div"))
											.className = "upload-success", b.innerHTML = '<div class="name" style="margin:10px 10px 10px 0;color: green;">' + v + " <span>file" + y + " already added.</span></div>", _.appendChild(b))
										, function(e) {
											try {
												var t = Static && Static.SQUARESPACE_CONTEXT
													, s = {
														pluginName: "Uploader"
														, pluginPage: t && t.website.baseUrl ? t.website.baseUrl + location.pathname : location.href
														, pageTitle: document.title
														, pluginData: e || "No plugin data"
														, siteTitle: t && t.website.siteTitle || ""
														, siteUrl: t && t.website.baseUrl || location.origin
													}
													, n = new XMLHttpRequest;
												n.open("POST", "https://tools.squarewebsites.org/api/sqs-plugins", !0)
													, n.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
													, n.send(JSON.stringify(s))
											} catch (e) {
												console.log(e)
											}
										}()
								}
							}(e)
						})
					}
			}
			return e()
				, {
					sync: function() {
						e()
					}
					, checkForms: function(e) {
						t(e)
					}
				}
		}
		, window.sqsf_uploaders = {};
	var t = null
		, e = !1
		, r = !1;

	function s() {
		var e
			, t
			, s
			, n
			, i;
		Y.Global.after("EditingDialog:show", o)
			, e = "https://uploader.squarewebsites.org/assets/css/site-style.css"
			, t = window.top.document.getElementsByTagName("head")[0]
			, s = "uploaderTopStyles"
			, t.querySelector("#" + s) || ((i = document.createElement("link"))
				.href = e, i.rel = "stylesheet", i.id = s || (new Date)
				.getTime(), i.onload = function() {
					n && n(null
						, {
							nodes: [this]
						})
				}, (t = t || document.getElementsByTagName("head")[0])
				.appendChild(i))
			, r && (window.clearInterval(r), r = null)
	}

	function n() {
		window.Squarespace.onInitialize(Y, function() {
				window.SQSFormUpload && !t && (t = window.SQSFormUpload())
					, window.sqsformuploader_observer || (window.sqsformuploader_observer = new MutationObserver(function(e) {
						e.forEach(function(e) {
							"childList" == e.type && e.addedNodes[0] && e.addedNodes[0].className && e.addedNodes[0].className.length && -1 < e.addedNodes[0].className.indexOf("form-wrapper") && t && t.checkForms([e.addedNodes[0]])
						})
					}), window.sqsformuploader_observer.observe(document
						, {
							attributes: !0
							, childList: !0
							, subtree: !0
						}))
					, e && t && t.checkForms(Array.prototype.slice.call(document.querySelectorAll(".form-wrapper:not(.hidden)")))
					, e = !0
					, window.self !== window.top && window.top.document.querySelector("html.squarespace-damask") && s()
			})
			, window.Squarespace.onDestroy(Y, function() {
				for (var e in window.sqsf_uploaders)
					e && window.sqsf_uploaders.hasOwnProperty(e) && window.sqsf_uploaders[e].destroy && window.sqsf_uploaders[e].destroy();
				window.sqsf_uploaders = {}
			})
	}
	window.Y ? n() : document.addEventListener("DOMContentLoaded", function e() {
		document.removeEventListener("DOMContentLoaded", e, !1)
			, setTimeout(function() {
				n()
			}, 16)
	}, !1)
}();
