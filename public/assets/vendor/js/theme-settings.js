! function (t, e) {
 var s = function (t) {
  var e = {};

  function s(n) {
   if (e[n]) return e[n].exports;
   var i = e[n] = {
    i: n,
    l: !1,
    exports: {}
   };
   return t[n].call(i.exports, i, i.exports, s), i.l = !0, i.exports
  }
  return s.m = t, s.c = e, s.d = function (t, e, n) {
   s.o(t, e) || Object.defineProperty(t, e, {
    enumerable: !0,
    get: n
   })
  }, s.r = function (t) {
   "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
    value: "Module"
   }), Object.defineProperty(t, "__esModule", {
    value: !0
   })
  }, s.t = function (t, e) {
   if (1 & e && (t = s(t)), 8 & e) return t;
   if (4 & e && "object" == typeof t && t && t.__esModule) return t;
   var n = Object.create(null);
   if (s.r(n), Object.defineProperty(n, "default", {
    enumerable: !0,
    value: t
   }), 2 & e && "string" != typeof t)
    for (var i in t) s.d(n, i, function (e) {
     return t[e]
    }.bind(null, i));
   return n
  }, s.n = function (t) {
   var e = t && t.__esModule ? function () {
    return t.default
   } : function () {
    return t
   };
   return s.d(e, "a", e), e
  }, s.o = function (t, e) {
   return Object.prototype.hasOwnProperty.call(t, e)
  }, s.p = "", s(s.s = 210)
 }({
  17: function (t, e) {
   t.exports = "<label class=theme-settings-bg-item> <input type=radio> <span class=theme-settings-bg-name></span> </label> "
  },
  18: function (t, e) {
   t.exports = function (t) {
    var e = [];
    return e.toString = function () {
     return this.map(function (e) {
      var s = function (t, e) {
       var s = t[1] || "",
        n = t[3];
       if (!n) return s;
       if (e && "function" == typeof btoa) {
        var i = function (t) {
         return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
        }(n),
         a = n.sources.map(function (t) {
          return "/*# sourceURL=" + n.sourceRoot + t + " */"
         });
        return [s].concat(a).concat([i]).join("\n")
       }
       return [s].join("\n")
      }(e, t);
      return e[2] ? "@media " + e[2] + "{" + s + "}" : s
     }).join("")
    }, e.i = function (t, s) {
     "string" == typeof t && (t = [
      [null, t, ""]
     ]);
     for (var n = {}, i = 0; i < this.length; i++) {
      var a = this[i][0];
      "number" == typeof a && (n[a] = !0)
     }
     for (i = 0; i < t.length; i++) {
      var r = t[i];
      "number" == typeof r[0] && n[r[0]] || (s && !r[2] ? r[2] = s : s && (r[2] = "(" + r[2] + ") and (" + s + ")"), e.push(r))
     }
    }, e
   }
  },
  187: function (t, e) {
   t.exports = '<div id=theme-settings style="display:none !important;"> <a href=javascript:void(0) class=theme-settings-open-btn tabindex=-1></a> <h5 class="p-4 m-0 line-height-1 font-weight-bolder bg-light theme-settings-header"> SETTINGS <a href=javascript:void(0) class="theme-settings-close-btn font-weight-light px-4 py-2 text-dark" tabindex=-1>&times;</a> </h5> <div class="theme-settings-inner pt-4"> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-rtl"> <div class=media-body>RTL direction</div> <div class="switcher switcher-sm d-block m-0"> <input class=switcher-input type=checkbox> <span class=switcher-indicator> <span class=switcher-yes></span> <span class=switcher-no></span> </span> </div> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-material"> <div class=media-body>Material style</div> <div class="switcher switcher-sm d-block m-0"> <input class=switcher-input type=checkbox> <span class=switcher-indicator> <span class=switcher-yes></span> <span class=switcher-no></span> </span> </div> </label> <div class=theme-settings-layout> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> LAYOUT </h5> <label class="m-0 px-4 pb-3 d-block theme-settings-layoutPosition"> <select class="custom-select custom-select-sm d-block w-100"> <option value=static>Static</option> <option value=static-offcanvas>Static offcanvas</option> <option value=fixed>Fixed</option> <option value=fixed-offcanvas>Fixed offcanvas</option> </select> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutNavbarFixed"> <div class=media-body>Fixed navbar</div> <div class="switcher switcher-sm d-block m-0"> <input class=switcher-input type=checkbox> <span class=switcher-indicator> <span class=switcher-yes></span> <span class=switcher-no></span> </span> </div> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutFooterFixed"> <div class=media-body>Fixed footer</div> <div class="switcher switcher-sm d-block m-0"> <input class=switcher-input type=checkbox> <span class=switcher-indicator> <span class=switcher-yes></span> <span class=switcher-no></span> </span> </div> </label> <label class="m-0 px-4 pb-3 d-flex media align-items-middle theme-settings-layoutReversed"> <div class=media-body>Reversed</div> <div class="switcher switcher-sm d-block m-0"> <input class=switcher-input type=checkbox> <span class=switcher-indicator> <span class=switcher-yes></span> <span class=switcher-no></span> </span> </div> </label> </div> <div class=theme-settings-navbarBg> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> NAVBAR BACKGROUND </h5> <fieldset class="m-0 px-4 pb-3 d-block clearfix theme-settings-navbarBg-inner"></fieldset> </div> <div class=theme-settings-sidenavBg> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> SIDENAV BACKGROUND </h5> <fieldset class="m-0 px-4 pb-3 d-block clearfix theme-settings-sidenavBg-inner"></fieldset> </div> <div class=theme-settings-footerBg> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> FOOTER BACKGROUND </h5> <fieldset class="m-0 px-4 pb-3 d-block clearfix theme-settings-footerBg-inner"></fieldset> </div> <div class=theme-settings-themes> <hr class="m-0 border-light"> <h5 class="m-0 px-4 py-3 line-height-1 text-light d-block"> THEME </h5> <div class=theme-settings-themes-inner></div> </div> </div> </div> '
  },
  188: function (t, e) {
   t.exports = '<label class="theme-settings-theme-item custom-controls-stacked"> <input type=radio name=theme-settings-current-theme> <span class="d-block mr-auto"> <span class=theme-settings-theme-checkmark></span> &nbsp;&nbsp; <span class=theme-settings-theme-name></span> </span> <span class="theme-settings-theme-colors d-flex"></span> </label> '
  },
  19: function (t, e, s) {
   var n = {},
    i = function (t) {
     var e;
     return function () {
      return void 0 === e && (e = t.apply(this, arguments)), e
     }
    }(function () {
     return window && document && document.all && !window.atob
    }),
    a = function (t) {
     var e = {};
     return function (t, s) {
      if ("function" == typeof t) return t();
      if (void 0 === e[t]) {
       var n = function (t, e) {
        return e ? e.querySelector(t) : document.querySelector(t)
       }.call(this, t, s);
       if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
        n = n.contentDocument.head
       } catch (t) {
        n = null
       }
       e[t] = n
      }
      return e[t]
     }
    }(),
    r = null,
    o = 0,
    l = [],
    c = s(20);

   function d(t, e) {
    for (var s = 0; s < t.length; s++) {
     var i = t[s],
      a = n[i.id];
     if (a) {
      a.refs++;
      for (var r = 0; r < a.parts.length; r++) a.parts[r](i.parts[r]);
      for (; r < i.parts.length; r++) a.parts.push(m(i.parts[r], e))
     } else {
      for (var o = [], r = 0; r < i.parts.length; r++) o.push(m(i.parts[r], e));
      n[i.id] = {
       id: i.id,
       refs: 1,
       parts: o
      }
     }
    }
   }

   function h(t, e) {
    for (var s = [], n = {}, i = 0; i < t.length; i++) {
     var a = t[i],
      r = e.base ? a[0] + e.base : a[0],
      o = a[1],
      l = a[2],
      c = a[3],
      d = {
       css: o,
       media: l,
       sourceMap: c
      };
     n[r] ? n[r].parts.push(d) : s.push(n[r] = {
      id: r,
      parts: [d]
     })
    }
    return s
   }

   function u(t, e) {
    var s = a(t.insertInto);
    if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var n = l[l.length - 1];
    if ("top" === t.insertAt) n ? n.nextSibling ? s.insertBefore(e, n.nextSibling) : s.appendChild(e) : s.insertBefore(e, s.firstChild), l.push(e);
    else if ("bottom" === t.insertAt) s.appendChild(e);
    else {
     if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
     var i = a(t.insertAt.before, s);
     s.insertBefore(e, i)
    }
   }

   function g(t) {
    if (null === t.parentNode) return !1;
    t.parentNode.removeChild(t);
    var e = l.indexOf(t);
    e >= 0 && l.splice(e, 1)
   }

   function v(t) {
    var e = document.createElement("style");
    if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
     var n = s.nc;
     n && (t.attrs.nonce = n)
    }
    return f(e, t.attrs), u(t, e), e
   }

   function f(t, e) {
    Object.keys(e).forEach(function (s) {
     t.setAttribute(s, e[s])
    })
   }

   function m(t, e) {
    var s, n, i, a;
    if (e.transform && t.css) {
     if (!(a = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () { };
     t.css = a
    }
    if (e.singleton) {
     var l = o++;
     s = r || (r = v(e)), n = b.bind(null, s, l, !1), i = b.bind(null, s, l, !0)
    } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (s = function (t) {
     var e = document.createElement("link");
     return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", f(e, t.attrs), u(t, e), e
    }(e), n = function (t, e, s) {
     var n = s.css,
      i = s.sourceMap,
      a = void 0 === e.convertToAbsoluteUrls && i;
     (e.convertToAbsoluteUrls || a) && (n = c(n)), i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
     var r = new Blob([n], {
      type: "text/css"
     }),
      o = t.href;
     t.href = URL.createObjectURL(r), o && URL.revokeObjectURL(o)
    }.bind(null, s, e), i = function () {
     g(s), s.href && URL.revokeObjectURL(s.href)
    }) : (s = v(e), n = function (t, e) {
     var s = e.css,
      n = e.media;
     if (n && t.setAttribute("media", n), t.styleSheet) t.styleSheet.cssText = s;
     else {
      for (; t.firstChild;) t.removeChild(t.firstChild);
      t.appendChild(document.createTextNode(s))
     }
    }.bind(null, s), i = function () {
     g(s)
    });
    return n(t),
     function (e) {
      if (e) {
       if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
       n(t = e)
      } else i()
     }
   }
   t.exports = function (t, e) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = i()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
    var s = h(t, e);
    return d(s, e),
     function (t) {
      for (var i = [], a = 0; a < s.length; a++) {
       var r = s[a],
        o = n[r.id];
       o.refs-- , i.push(o)
      }
      if (t) {
       var l = h(t, e);
       d(l, e)
      }
      for (var a = 0; a < i.length; a++) {
       var o = i[a];
       if (0 === o.refs) {
        for (var c = 0; c < o.parts.length; c++) o.parts[c]();
        delete n[o.id]
       }
      }
     }
   };
   var p = function () {
    var t = [];
    return function (e, s) {
     return t[e] = s, t.filter(Boolean).join("\n")
    }
   }();

   function b(t, e, s, n) {
    var i = s ? "" : n.css;
    if (t.styleSheet) t.styleSheet.cssText = p(e, i);
    else {
     var a = document.createTextNode(i),
      r = t.childNodes;
     r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(a, r[e]) : t.appendChild(a)
    }
   }
  },
  20: function (t, e) {
   t.exports = function (t) {
    var e = "undefined" != typeof window && window.location;
    if (!e) throw new Error("fixUrls requires window.location");
    if (!t || "string" != typeof t) return t;
    var s = e.protocol + "//" + e.host,
     n = s + e.pathname.replace(/\/[^\/]*$/, "/"),
     i = t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
      var i, a = e.trim().replace(/^"(.*)"$/, function (t, e) {
       return e
      }).replace(/^'(.*)'$/, function (t, e) {
       return e
      });
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? t : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? s + a : n + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
     });
    return i
   }
  },
  210: function (t, e, s) {
   "use strict";
   s.r(e), s.d(e, "ThemeSettings", function () {
    return k
   });
   var n = s(211),
    i = (s.n(n), s(187)),
    a = s.n(i),
    r = s(188),
    o = s.n(r),
    l = s(17),
    c = s.n(l);

   function d(t, e) {
    for (var s = 0; s < e.length; s++) {
     var n = e[s];
     n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
   }
   var h = [{
    name: "theme-air",
    title: "Air",
    colors: {
     primary: "#3c97fe",
     navbar: "#f8f8f8",
     sidenav: "#f8f8f8"
    }
   }, {
    name: "theme-corporate",
    title: "Corporate",
    colors: {
     primary: "#26B4FF",
     navbar: "#fff",
     sidenav: "#2e323a"
    }
   }, {
    name: "theme-cotton",
    title: "Сotton",
    colors: {
     primary: "#e84c64",
     navbar: "#ffffff",
     sidenav: "#ffffff"
    }
   }, {
    name: "theme-gradient",
    title: "Gradient",
    colors: {
     primary: "#775cdc",
     navbar: "#ffffff",
     sidenav: "linear-gradient(to top, #4e54c8, #8c55e4)"
    }
   }, {
    name: "theme-paper",
    title: "Paper",
    colors: {
     primary: "#17b3a3",
     navbar: "#ffffff",
     sidenav: "#ffffff"
    }
   }, {
    name: "theme-shadow",
    title: "Shadow",
    colors: {
     primary: "#7b83ff",
     navbar: "#f8f8f8",
     sidenav: "#ececf9"
    }
   }, {
    name: "theme-soft",
    title: "Soft",
    colors: {
     primary: "#1cbb84",
     navbar: "#39517b",
     sidenav: "#ffffff"
    }
   }, {
    name: "theme-sunrise",
    title: "Sunrise",
    colors: {
     primary: "#fc5a5c",
     navbar: "#222222",
     sidenav: "#ffffff"
    }
   }, {
    name: "theme-twitlight",
    title: "Twitlight",
    colors: {
     primary: "#4c84ff",
     navbar: "#343c44",
     sidenav: "#3f4853"
    }
   }, {
    name: "theme-vibrant",
    title: "Vibrant",
    colors: {
     primary: "#fc5a5c",
     navbar: "#f8f8f8",
     sidenav: "#222222"
    }
   }],
    u = 1,
    g = "%name%.css",
    v = ["rtl", "material", "layoutPosition", "layoutNavbarFixed", "layoutFooterFixed", "layoutReversed", "navbarBg", "sidenavBg", "footerBg", "themes"],
    f = ["navbar-theme", "primary", "primary-dark navbar-dark", "primary-darker navbar-dark", "secondary", "secondary-dark navbar-dark", "secondary-darker navbar-dark", "success", "success-dark navbar-dark", "success-darker navbar-dark", "info", "info-dark navbar-dark", "info-darker navbar-dark", "warning", "warning-dark navbar-light", "warning-darker navbar-light", "danger", "danger-dark navbar-dark", "danger-darker navbar-dark", "dark", "white", "light", "lighter"],
    m = "navbar-theme",
    p = ["sidenav-theme", "primary", "primary-dark sidenav-dark", "primary-darker sidenav-dark", "secondary", "secondary-dark sidenav-dark", "secondary-darker sidenav-dark", "success", "success-dark sidenav-dark", "success-darker sidenav-dark", "info", "info-dark sidenav-dark", "info-darker sidenav-dark", "warning", "warning-dark sidenav-light", "warning-darker sidenav-light", "danger", "danger-dark sidenav-dark", "danger-darker sidenav-dark", "dark", "white", "light", "lighter"],
    b = "sidenav-theme",
    y = ["footer-theme", "primary", "primary-dark footer-dark", "primary-darker footer-dark", "secondary", "secondary-dark footer-dark", "secondary-darker footer-dark", "success", "success-dark footer-dark", "success-darker footer-dark", "info", "info-dark footer-dark", "info-darker footer-dark", "warning", "warning-dark footer-light", "warning-darker footer-light", "danger", "danger-dark footer-dark", "danger-darker footer-dark", "dark", "white", "light", "lighter"],
    x = "footer-theme",
    k = function () {
     function t(e) {
      var s = e.cssPath,
       n = e.themesPath,
       i = e.cssFilenamePattern,
       a = e.controls,
       r = e.sidenavBgs,
       o = e.defaultSidenavBg,
       l = e.navbarBgs,
       c = e.defaultNavbarBg,
       d = e.footerBgs,
       k = e.defaultFooterBg,
       _ = e.availableThemes,
       w = e.defaultTheme,
       S = e.pathResolver;
      if (e.onSettingsChange, function (t, e) {
       if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), !this._ssr) {
       if (!window.layoutHelpers) throw new Error("window.layoutHelpers required.");
       this.settings = {}, this.settings.cssPath = s, this.settings.themesPath = n, this.settings.cssFilenamePattern = i || g, this.settings.navbarBgs = l || f, this.settings.defaultNavbarBg = c || m, this.settings.sidenavBgs = r || p, this.settings.defaultSidenavBg = o || b, this.settings.footerBgs = d || y, this.settings.defaultFooterBg = k || x, this.settings.availableThemes = _ || h, this.settings.defaultTheme = this.settings.availableThemes[void 0 !== w ? w : u], this.settings.controls = a || v, this.pathResolver = S || function (t) {
        return t
       }, this.settings.onSettingsChange = function () { }, this._loadSettings(), this._listeners = [], this._controls = {}, this._initDirection(), this._initStyle(), this._initTheme(), this.setLayoutPosition(this.settings.layoutPosition, !1), this.setLayoutNavbarFixed(this.settings.layoutNavbarFixed, !1), this.setLayoutFooterFixed(this.settings.layoutFooterFixed, !1), this.setLayoutReversed(this.settings.layoutReversed, !1), this._setup(), this._waitForNavs()
      }
     }
     return function (t, e, s) {
      e && d(t.prototype, e), s && d(t, s)
     }(t, [{
      key: "setRtl",
      value: function (t) {
       this._hasControls("rtl") && (this._setSetting("Rtl", String(t)), window.location.reload())
      }
     }, {
      key: "setMaterial",
      value: function (t) {
       this._hasControls("material") && (this._setSetting("Material", String(t)), window.location.reload())
      }
     }, {
      key: "setTheme",
      value: function (t) {
       var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
       if (this._hasControls("themes")) {
        for (var n = !1, i = 0, a = this.settings.availableThemes.length; i < a; i++) this.settings.availableThemes[i].name === t && (n = !0);
        if (n) {
         this.settings.theme = this._getThemeByFile(t), e && this._setSetting("Theme", t);
         var r = this.pathResolver(this.settings.themesPath + this.settings.cssFilenamePattern.replace("%name%", t + (this.settings.material ? "-material" : "")));
         this._loadStylesheets(function (t, e, s) {
          return e in t ? Object.defineProperty(t, e, {
           value: s,
           enumerable: !0,
           configurable: !0,
           writable: !0
          }) : t[e] = s, t
         }({}, r, document.querySelector(".theme-settings-theme-css")), s || function () { }), e && this.settings.onSettingsChange(this.settings)
        }
       }
      }
     }, {
      key: "setLayoutPosition",
      value: function (t) {
       var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
       this._hasControls("layoutPosition") && ("static" !== t && "static-offcanvas" !== t && "fixed" !== t && "fixed-offcanvas" !== t || (this.settings.layoutPosition = t, e && this._setSetting("LayoutPosition", t), window.layoutHelpers.setPosition("fixed" === t || "fixed-offcanvas" === t, "static-offcanvas" === t || "fixed-offcanvas" === t), e && this.settings.onSettingsChange(this.settings)))
      }
     }, {
      key: "setLayoutNavbarFixed",
      value: function (t) {
       var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
       this._hasControls("layoutNavbarFixed") && (this.settings.layoutNavbarFixed = t, e && this._setSetting("FixedNavbar", t), window.layoutHelpers.setNavbarFixed(t), e && this.settings.onSettingsChange(this.settings))
      }
     }, {
      key: "setLayoutFooterFixed",
      value: function (t) {
       var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
       this._hasControls("layoutFooterFixed") && (this.settings.layoutFooterFixed = t, e && this._setSetting("FixedFooter", t), window.layoutHelpers.setFooterFixed(t), e && this.settings.onSettingsChange(this.settings))
      }
     }, {
      key: "setLayoutReversed",
      value: function (t) {
       var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
       this._hasControls("layoutReversed") && (this.settings.layoutReversed = t, e && this._setSetting("LayoutReversed", t), window.layoutHelpers.setReversed(t), e && this.settings.onSettingsChange(this.settings))
      }
     }, {
      key: "setNavbarBg",
      value: function (t) {
       var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
       if (this._hasControls("navbarBg") && -1 !== this.settings.navbarBgs.indexOf(t)) {
        this.settings.navbarBg = t, e && this._setSetting("NavbarBg", t);
        var n = s.querySelector(".layout-navbar.navbar, .layout-navbar .navbar");
        if (n) {
         n.className = n.className.replace(/^bg\-[^ ]+| bg\-[^ ]+/gi, ""), n.classList.remove("navbar-light"), n.classList.remove("navbar-dark");
         var i = t.split(" ");
         n.classList.add("bg-".concat(i[0]));
         for (var a = 1, r = i.length; a < r; a++) n.classList.add(i[a]);
         e && this.settings.onSettingsChange(this.settings)
        }
       }
      }
     }, {
      key: "setSidenavBg",
      value: function (t) {
       var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
       if (this._hasControls("sidenavBg") && -1 !== this.settings.sidenavBgs.indexOf(t)) {
        this.settings.sidenavBg = t, e && this._setSetting("SidenavBg", t);
        var n = s.querySelector(".layout-sidenav.sidenav, .layout-sidenav .sidenav, .layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav");
        if (n) {
         n.className = n.className.replace(/^bg\-[^ ]+| bg\-[^ ]+/gi, ""), n.classList.remove("sidenav-light"), n.classList.remove("sidenav-dark");
         var i = t.split(" ");
         n.classList.contains("sidenav-horizontal") && ((i = i.join(" ").replace(" sidenav-dark", "").replace(" sidenav-light", "").split(" "))[0] = i[0].replace(/-darke?r?$/, "")), n.classList.add("bg-".concat(i[0]));
         for (var a = 1, r = i.length; a < r; a++) n.classList.add(i[a]);
         e && this.settings.onSettingsChange(this.settings)
        }
       }
      }
     }, {
      key: "setFooterBg",
      value: function (t) {
       var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
       if (this._hasControls("footerBg") && -1 !== this.settings.footerBgs.indexOf(t)) {
        this.settings.footerBg = t, e && this._setSetting("FooterBg", t);
        var n = s.querySelector(".layout-footer.footer, .layout-footer .footer");
        if (n) {
         n.className = n.className.replace(/^bg\-[^ ]+| bg\-[^ ]+/gi, ""), n.classList.remove("footer-light"), n.classList.remove("footer-dark");
         var i = t.split(" ");
         n.classList.add("bg-".concat(i[0]));
         for (var a = 1, r = i.length; a < r; a++) n.classList.add(i[a]);
         e && this.settings.onSettingsChange(this.settings)
        }
       }
      }
     }, {
      key: "update",
      value: function () {
       if (!this._ssr) {
        var t = !!document.querySelector(".layout-navbar"),
         e = !!document.querySelector(".layout-sidenav"),
         s = !!document.querySelector(".layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav"),
         n = !!document.querySelector(".layout-wrapper.layout-1"),
         i = !!document.querySelector(".layout-footer");
        if (this._controls.layoutReversed && (e ? (this._controls.layoutReversed.removeAttribute("disabled"), this._controls.layoutReversedW.classList.remove("disabled")) : (this._controls.layoutReversed.setAttribute("disabled", "disabled"), this._controls.layoutReversedW.classList.add("disabled"))), this._controls.layoutNavbarFixed && (t ? (this._controls.layoutNavbarFixed.removeAttribute("disabled"), this._controls.layoutNavbarFixedW.classList.remove("disabled")) : (this._controls.layoutNavbarFixed.setAttribute("disabled", "disabled"), this._controls.layoutNavbarFixedW.classList.add("disabled"))), this._controls.layoutFooterFixed && (i ? (this._controls.layoutFooterFixed.removeAttribute("disabled"), this._controls.layoutFooterFixedW.classList.remove("disabled")) : (this._controls.layoutFooterFixed.setAttribute("disabled", "disabled"), this._controls.layoutFooterFixedW.classList.add("disabled"))), this._controls.layoutPosition && (e ? (this._controls.layoutPosition.querySelector('[value="static-offcanvas"]').removeAttribute("disabled"), this._controls.layoutPosition.querySelector('[value="fixed-offcanvas"]').removeAttribute("disabled")) : (this._controls.layoutPosition.querySelector('[value="static-offcanvas"]').setAttribute("disabled", "disabled"), this._controls.layoutPosition.querySelector('[value="fixed-offcanvas"]').setAttribute("disabled", "disabled")), !t && !e || !e && !n ? this._controls.layoutPosition.setAttribute("disabled", "disabled") : this._controls.layoutPosition.removeAttribute("disabled")), this._controls.navbarBgWInner && (t ? this._controls.navbarBgWInner.removeAttribute("disabled") : this._controls.navbarBgWInner.setAttribute("disabled", "disabled")), this._controls.sidenavBgWInner) {
         var a = Array.prototype.slice.call(document.querySelectorAll(".theme-settings-sidenavBg-inner .theme-settings-bg-item"));
         e || s ? (a.forEach(function (t) {
          t.classList.remove("disabled"), t.querySelector("input").removeAttribute("disabled")
         }), s && a.forEach(function (t) {
          /-darke?r?/.test(t.className) && !/bg-dark/.test(t.className) && (t.classList.add("disabled"), t.querySelector("input").setAttribute("disabled", "disabled"))
         })) : a.forEach(function (t) {
          t.classList.add("disabled"), t.querySelector("input").setAttribute("disabled", "disabled")
         })
        }
        this._controls.footerBgWInner && (i ? this._controls.footerBgWInner.removeAttribute("disabled") : this._controls.footerBgWInner.setAttribute("disabled", "disabled"))
       }
      }
     }, {
      key: "updateNavbarBg",
      value: function () {
       var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
       this.setNavbarBg(this.settings.navbarBg, !1, t)
      }
     }, {
      key: "updateSidenavBg",
      value: function () {
       var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
       this.setSidenavBg(this.settings.sidenavBg, !1, t)
      }
     }, {
      key: "updateFooterBg",
      value: function () {
       var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
       this.setFooterBg(this.settings.footerBg, !1, t)
      }
     }, {
      key: "clearLocalStorage",
      value: function () {
       this._ssr || (this._setSetting("Theme", ""), this._setSetting("Rtl", ""), this._setSetting("Material", ""), this._setSetting("LayoutReversed", ""), this._setSetting("FixedNavbar", ""), this._setSetting("FixedFooter", ""), this._setSetting("LayoutPosition", ""), this._setSetting("NavbarBg", ""), this._setSetting("SidenavBg", ""), this._setSetting("FooterBg", ""))
      }
     }, {
      key: "destroy",
      value: function () {
       this._ssr || (this._cleanup(), this.settings = null, this.container.parentNode.removeChild(this.container), this.container = null)
      }
     }, {
      key: "_loadSettings",
      value: function () {
       var t, e = document.documentElement.classList,
        s = this._getSetting("Rtl"),
        n = this._getSetting("Material"),
        i = this._getSetting("LayoutReversed"),
        a = this._getSetting("FixedNavbar"),
        r = this._getSetting("FixedFooter"),
        o = this._getSetting("NavbarBg"),
        l = this._getSetting("SidenavBg"),
        c = this._getSetting("FooterBg"),
        d = this._getSetting("LayoutPosition");
       t = "" !== d && -1 !== ["static", "static-offcanvas", "fixed", "fixed-offcanvas"].indexOf(d) ? d : e.contains("layout-offcanvas") ? "static-offcanvas" : e.contains("layout-fixed") ? "fixed" : e.contains("layout-fixed-offcanvas") ? "fixed-offcanvas" : "static", this.settings.rtl = "" !== s ? "true" === s : "rtl" === document.documentElement.getAttribute("dir"), this.settings.material = "" !== n ? "true" === n : e.contains("material-style"), this.settings.layoutPosition = t, this.settings.layoutReversed = "" !== i ? "true" === i : e.contains("layout-reversed"), this.settings.layoutNavbarFixed = "" !== a ? "true" === a : e.contains("layout-navbar-fixed"), this.settings.layoutFooterFixed = "" !== r ? "true" === r : e.contains("layout-footer-fixed"), this.settings.navbarBg = -1 !== this.settings.navbarBgs.indexOf(o) ? o : this.settings.defaultNavbarBg, this.settings.sidenavBg = -1 !== this.settings.sidenavBgs.indexOf(l) ? l : this.settings.defaultSidenavBg, this.settings.footerBg = -1 !== this.settings.footerBgs.indexOf(c) ? c : this.settings.defaultFooterBg, this.settings.theme = this._getThemeByFile(this._getSetting("Theme")), this._hasControls("rtl") || (this.settings.rtl = "rtl" === document.documentElement.getAttribute("dir")), this._hasControls("material") || (this.settings.material = e.contains("material-style")), this._hasControls("layoutPosition") || (this.settings.layoutPosition = null), this._hasControls("layoutReversed") || (this.settings.layoutReversed = null), this._hasControls("layoutNavbarFixed") || (this.settings.layoutNavbarFixed = null), this._hasControls("layoutFooterFixed") || (this.settings.layoutFooterFixed = null), this._hasControls("navbarBg") || (this.settings.navbarBg = null), this._hasControls("sidenavBg") || (this.settings.sidenavBg = null), this._hasControls("footerBg") || (this.settings.footerBg = null), this._hasControls("themes") || (this.settings.theme = null)
      }
     }, {
      key: "_setup",
      value: function () {
       var t = this,
        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
       this._cleanup(), this.container = this._getElementFromString(a.a);
       var s = this.container.querySelector(".theme-settings-open-btn"),
        n = function () {
         t.container.classList.add("theme-settings-open"), t.update(), t._updateInterval && clearInterval(t._updateInterval), t._updateInterval = setInterval(function () {
          t.update()
         }, 1e3)
        };
       s.addEventListener("click", n), this._listeners.push([s, "click", n]);
       var i = this.container.querySelector(".theme-settings-close-btn"),
        r = function () {
         t.container.classList.remove("theme-settings-open"), t._updateInterval && (clearInterval(t._updateInterval), t._updateInterval = null)
        };
       i.addEventListener("click", r), this._listeners.push([i, "click", r]);
       var l = this.container.querySelector(".theme-settings-rtl");
       if (this._hasControls("rtl")) {
        var d = l.querySelector("input");
        this.settings.rtl && d.setAttribute("checked", "checked");
        var h = function (e) {
         t._loadingState(!0), t.setRtl(e.target.checked)
        };
        d.addEventListener("change", h), this._listeners.push([d, "change", h])
       } else l.parentNode.removeChild(l);
       var u = this.container.querySelector(".theme-settings-material");
       if (this._hasControls("material")) {
        var g = u.querySelector("input");
        this.settings.material && g.setAttribute("checked", "checked");
        var v = function (e) {
         t._loadingState(!0), t.setMaterial(e.target.checked)
        };
        g.addEventListener("change", v), this._listeners.push([g, "change", v])
       } else u.parentNode.removeChild(u);
       var f = this.container.querySelector(".theme-settings-layout");
       if (this._hasControls("layoutPosition layoutNavbarFixed layoutFooterFixed layoutReversed", !0)) {
        var m = this.container.querySelector(".theme-settings-layoutPosition");
        if (this._hasControls("layoutPosition")) {
         this._controls.layoutPosition = m.querySelector("select"), this._controls.layoutPosition.value = this.settings.layoutPosition;
         var p = function (e) {
          return t.setLayoutPosition(e.target.value)
         };
         this._controls.layoutPosition.addEventListener("change", p), this._listeners.push([this._controls.layoutPosition, "change", p])
        } else m.parentNode.removeChild(m);
        if (this._controls.layoutNavbarFixedW = this.container.querySelector(".theme-settings-layoutNavbarFixed"), this._hasControls("layoutNavbarFixed")) {
         this._controls.layoutNavbarFixed = this._controls.layoutNavbarFixedW.querySelector("input"), this.settings.layoutNavbarFixed && this._controls.layoutNavbarFixed.setAttribute("checked", "checked");
         var b = function (e) {
          return t.setLayoutNavbarFixed(e.target.checked)
         };
         this._controls.layoutNavbarFixed.addEventListener("change", b), this._listeners.push([this._controls.layoutNavbarFixed, "change", b])
        } else this._controls.layoutNavbarFixedW.parentNode.removeChild(this._controls.layoutNavbarFixedW);
        if (this._controls.layoutFooterFixedW = this.container.querySelector(".theme-settings-layoutFooterFixed"), this._hasControls("layoutFooterFixed")) {
         this._controls.layoutFooterFixed = this._controls.layoutFooterFixedW.querySelector("input"), this.settings.layoutFooterFixed && this._controls.layoutFooterFixed.setAttribute("checked", "checked");
         var y = function (e) {
          return t.setLayoutFooterFixed(e.target.checked)
         };
         this._controls.layoutFooterFixed.addEventListener("change", y), this._listeners.push([this._controls.layoutFooterFixed, "change", y])
        } else this._controls.layoutFooterFixedW.parentNode.removeChild(this._controls.layoutFooterFixedW);
        if (this._controls.layoutReversedW = this.container.querySelector(".theme-settings-layoutReversed"), this._hasControls("layoutReversed")) {
         this._controls.layoutReversed = this._controls.layoutReversedW.querySelector("input"), this.settings.layoutReversed && this._controls.layoutReversed.setAttribute("checked", "checked");
         var x = function (e) {
          return t.setLayoutReversed(e.target.checked)
         };
         this._controls.layoutReversed.addEventListener("change", x), this._listeners.push([this._controls.layoutReversed, "change", x])
        } else this._controls.layoutReversedW.parentNode.removeChild(this._controls.layoutReversedW)
       } else f.parentNode.removeChild(f);
       var k = this.container.querySelector(".theme-settings-navbarBg");
       this._hasControls("navbarBg") ? (this._controls.navbarBgWInner = k.querySelector(".theme-settings-navbarBg-inner"), this.settings.navbarBgs.forEach(function (e) {
        var s = t._getElementFromString(c.a),
         n = s.querySelector("input");
        s.classList.add("bg-".concat(e.split(" ")[0])), n.name = "theme-settings-navbarBg-input", n.value = e, t.settings.navbarBg === e && (n.setAttribute("checked", "checked"), s.classList.add("active"));
        var i = function (e) {
         for (var s = t._controls.navbarBgWInner.querySelectorAll(".theme-settings-bg-item"), n = 0, i = s.length; n < i; n++) s[n].classList.remove("active");
         e.target.parentNode.classList.add("active"), t.setNavbarBg(e.target.value)
        };
        n.addEventListener("change", i), t._listeners.push([n, "change", i]), t._controls.navbarBgWInner.appendChild(s)
       })) : k.parentNode.removeChild(k);
       var _ = this.container.querySelector(".theme-settings-sidenavBg");
       this._hasControls("sidenavBg") ? (this._controls.sidenavBgWInner = _.querySelector(".theme-settings-sidenavBg-inner"), this.settings.sidenavBgs.forEach(function (e) {
        var s = t._getElementFromString(c.a),
         n = s.querySelector("input");
        s.classList.add("bg-".concat(e.split(" ")[0])), n.name = "theme-settings-sidenavBg-input", n.value = e, t.settings.sidenavBg === e && (n.setAttribute("checked", "checked"), s.classList.add("active"));
        var i = function (e) {
         for (var s = t._controls.sidenavBgWInner.querySelectorAll(".theme-settings-bg-item"), n = 0, i = s.length; n < i; n++) s[n].classList.remove("active");
         e.target.parentNode.classList.add("active"), t.setSidenavBg(e.target.value)
        };
        n.addEventListener("change", i), t._listeners.push([n, "change", i]), t._controls.sidenavBgWInner.appendChild(s)
       })) : _.parentNode.removeChild(_);
       var w = this.container.querySelector(".theme-settings-footerBg");
       this._hasControls("footerBg") ? (this._controls.footerBgWInner = w.querySelector(".theme-settings-footerBg-inner"), this.settings.footerBgs.forEach(function (e) {
        var s = t._getElementFromString(c.a),
         n = s.querySelector("input");
        s.classList.add("bg-".concat(e.split(" ")[0])), n.name = "theme-settings-footerBg-input", n.value = e, t.settings.footerBg === e && (n.setAttribute("checked", "checked"), s.classList.add("active"));
        var i = function (e) {
         for (var s = t._controls.footerBgWInner.querySelectorAll(".theme-settings-bg-item"), n = 0, i = s.length; n < i; n++) s[n].classList.remove("active");
         e.target.parentNode.classList.add("active"), t.setFooterBg(e.target.value)
        };
        n.addEventListener("change", i), t._listeners.push([n, "change", i]), t._controls.footerBgWInner.appendChild(s)
       })) : w.parentNode.removeChild(w);
       var S = this.container.querySelector(".theme-settings-themes");
       if (this._hasControls("themes")) {
        var B = this.container.querySelector(".theme-settings-themes-inner");
        this.settings.availableThemes.forEach(function (e) {
         var s = t._getElementFromString(o.a),
          n = s.querySelector("input");
         s.querySelector(".theme-settings-theme-name").innerHTML = e.title, n.value = e.name, t.settings.theme.name === e.name && n.setAttribute("checked", "checked"), s.querySelector(".theme-settings-theme-colors").innerHTML = '\n          <span style="background: '.concat(e.colors.primary, '"></span>\n          <span style="background: ').concat(e.colors.navbar, '"></span>\n          <span style="background: ').concat(e.colors.sidenav, '"></span>\n        ');
         var i = function (e) {
          t._loading || (t._loading = !0, t._loadingState(!0, !0), t.setTheme(e.target.value, !0, function () {
           t._loading = !1, t._loadingState(!1, !0)
          }))
         };
         n.addEventListener("change", i), t._listeners.push([n, "change", i]), B.appendChild(s)
        })
       } else S.parentNode.removeChild(S);
       e === document ? e.body ? e.body.appendChild(this.container) : window.addEventListener("DOMContentLoaded", function () {
        return e.body.appendChild(t.container)
       }) : e.appendChild(this.container)
      }
     }, {
      key: "_initDirection",
      value: function () {
       this._hasControls("rtl") && document.documentElement.setAttribute("dir", this.settings.rtl ? "rtl" : "ltr")
      }
     }, {
      key: "_initStyle",
      value: function () {
       if (this._hasControls("material")) {
        var t = this.settings.material;
        this._insertStylesheet("theme-settings-bootstrap-css", this.pathResolver(this.settings.cssPath + this.settings.cssFilenamePattern.replace("%name%", "bootstrap" + (t ? "-material" : "")))), this._insertStylesheet("theme-settings-appwork-css", this.pathResolver(this.settings.cssPath + this.settings.cssFilenamePattern.replace("%name%", "appwork" + (t ? "-material" : "")))), this._insertStylesheet("theme-settings-colors-css", this.pathResolver(this.settings.cssPath + this.settings.cssFilenamePattern.replace("%name%", "colors" + (t ? "-material" : "")))), document.documentElement.classList.remove(t ? "default-style" : "material-style"), document.documentElement.classList.add(t ? "material-style" : "default-style"), t && window.attachMaterialRipple && (document.body ? window.attachMaterialRipple() : window.addEventListener("DOMContentLoaded", function () {
         return window.attachMaterialRipple()
        }))
       }
      }
     }, {
      key: "_initTheme",
      value: function () {
       this._hasControls("themes") && this._insertStylesheet("theme-settings-theme-css", this.pathResolver(this.settings.themesPath + this.settings.cssFilenamePattern.replace("%name%", this.settings.theme.name + (this.settings.material ? "-material" : ""))))
      }
     }, {
      key: "_insertStylesheet",
      value: function (t, e) {
       var s = document.querySelector(".".concat(t));
       if ("number" == typeof document.documentMode && document.documentMode < 11) {
        if (!s) return;
        if (e === s.getAttribute("href")) return;
        var n = document.createElement("link");
        n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.className = t, n.setAttribute("href", e), s.parentNode.insertBefore(n, s.nextSibling)
       } else document.write('<link rel="stylesheet" type="text/css" href="'.concat(e, '" class="').concat(t, '">'));
       s.parentNode.removeChild(s)
      }
     }, {
      key: "_loadStylesheets",
      value: function (t, e) {
       var s = Object.keys(t),
        n = s.length,
        i = 0;

       function a(t, e, s) {
        var n = document.createElement("link");
        n.setAttribute("href", t), n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.className = e.className;
        var i, a, r = "sheet" in n ? "sheet" : "styleSheet",
         o = "sheet" in n ? "cssRules" : "rules";
        i = setTimeout(function () {
         clearInterval(a), clearTimeout(i), e.parentNode.removeChild(n), s(!1, t)
        }, 15e3), a = setInterval(function () {
         try {
          n[r] && n[r][o].length && (clearInterval(a), clearTimeout(i), e.parentNode.removeChild(e), s(!0))
         } catch (t) {
          console.error(t)
         }
        }, 10), e.parentNode.insertBefore(n, e.nextSibling)
       }
       for (var r = 0; r < s.length; r++) a(s[r], t[s[r]], function (t, s) {
        t || (console && "function" == typeof console.error && console.error("Error occured while loading stylesheets!"), alert("Error occured while loading stylesheets!"), console.log(s)), ++i >= n && e()
       })
      }
     }, {
      key: "_loadingState",
      value: function (t, e) {
       this.container.classList[t ? "add" : "remove"]("theme-settings-loading".concat(e ? "-theme" : ""))
      }
     }, {
      key: "_waitForNavs",
      value: function () {
       var t = this;
       this._addObserver(".layout-navbar.navbar, .layout-navbar .navbar", function (t) {
        return t && t.classList && t.classList.contains("layout-navbar") && (t.classList.contains("navbar") || t.querySelector(".navbar"))
       }, function () {
        return t.setNavbarBg(t.settings.navbarBg, !1)
       }), this._addObserver(".layout-sidenav.sidenav, .layout-sidenav .sidenav, .layout-sidenav-horizontal.sidenav, .layout-sidenav-horizontal .sidenav", function (t) {
        return t && t.classList && (t.classList.contains("layout-sidenav") || t.classList.contains("layout-sidenav-horizontal")) && (t.classList.contains("sidenav") || t.querySelector(".sidenav"))
       }, function () {
        return t.setSidenavBg(t.settings.sidenavBg, !1)
       }), this._addObserver(".layout-footer.footer, .layout-footer .footer", function (t) {
        return t && t.classList && t.classList.contains("layout-footer") && (t.classList.contains("footer") || t.querySelector(".footer"))
       }, function () {
        return t.setFooterBg(t.settings.footerBg, !1)
       }), !document.body && (this._observers && this._observers.length || this._intervals && this._intervals.length) && window.addEventListener("load", function e() {
        t._clearObservers(), t.setNavbarBg(t.settings.navbarBg, !1), t.setSidenavBg(t.settings.sidenavBg, !1), t.setFooterBg(t.settings.footerBg, !1), window.removeEventListener("load", e)
       })
      }
     }, {
      key: "_addObserver",
      value: function (t, e, s) {
       var n, i, a = this;
       this._observers || (this._observers = []), this._intervals || (this._intervals = []), document.querySelector(t) ? s.call(this) : document.body || ("undefined" != typeof MutationObserver ? (n = new MutationObserver(function (t) {
        t.forEach(function (t) {
         if (t.addedNodes)
          for (var i = 0; i < t.addedNodes.length; i++) {
           var r = t.addedNodes[i];
           if (e.call(a, r)) {
            n.disconnect(), a._observers.splice(a._observers.indexOf(n), 1), n = null, s.call(a);
            break
           }
          }
        })
       }), this._observers.push(n), n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        attributes: !1,
        characterData: !1
       })) : (i = setInterval(function () {
        document.querySelector(t) && (clearInterval(i), a._intervals.splice(a._intervals.indexOf(i), 1), i = null, s.call(a))
       }, 10), this._intervals.push(i)))
      }
     }, {
      key: "_clearObservers",
      value: function () {
       if (this._observers && this._observers.length)
        for (var t = 0, e = this._observers.length; t < e; t++) this._observers[t].disconnect();
       if (this._intervals && this._intervals.length)
        for (var s = 0, n = this._intervals.length; s < n; s++) clearInterval(this._intervals[s]);
       this._observers = null, this._intervals = null
      }
     }, {
      key: "_getElementFromString",
      value: function (t) {
       var e = document.createElement("div");
       return e.innerHTML = t, e.firstChild
      }
     }, {
      key: "_getSetting",
      value: function (t) {
       var e = null;
       try {
        e = localStorage.getItem("themeSettings".concat(t))
       } catch (t) { }
       return String(e || "")
      }
     }, {
      key: "_setSetting",
      value: function (t, e) {
       try {
        localStorage.setItem("themeSettings".concat(t), String(e))
       } catch (t) { }
      }
     }, {
      key: "_getThemeByFile",
      value: function (t) {
       for (var e = null, s = 0, n = this.settings.availableThemes.length; s < n; s++) this.settings.availableThemes[s].name === t && (e = this.settings.availableThemes[s]);
       return e || this.settings.defaultTheme
      }
     }, {
      key: "_removeListeners",
      value: function () {
       for (var t = 0, e = this._listeners.length; t < e; t++) this._listeners[t][0].removeEventListener(this._listeners[t][1], this._listeners[t][2])
      }
     }, {
      key: "_cleanup",
      value: function () {
       this._removeListeners(), this._listeners = [], this._controls = {}, this._clearObservers(), this._updateInterval && (clearInterval(this._updateInterval), this._updateInterval = null)
      }
     }, {
      key: "_hasControls",
      value: function (t) {
       var e = this,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
       return t.split(" ").reduce(function (t, n) {
        return -1 !== e.settings.controls.indexOf(n) ? (s || !1 !== t) && (t = !0) : s && !0 === t || (t = !1), t
       }, null)
      }
     }, {
      key: "_ssr",
      get: function () {
       return "undefined" == typeof window
      }
     }]), t
    }()
  },
  211: function (t, e, s) {
   var n = s(212);
   "string" == typeof n && (n = [
    [t.i, n, ""]
   ]);
   var i = {
    hmr: !1,
    transform: void 0,
    insertInto: void 0
   };
   s(19)(n, i), n.locals && (t.exports = n.locals)
  },
  212: function (t, e, s) {
   (t.exports = s(18)(!1)).push([t.i, '#theme-settings {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;\n  font-size: 13px !important;\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  z-index: 99999999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 230px;\n  background: #fff;\n  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: all .2s ease-in;\n  -o-transition: all .2s ease-in;\n  transition: all .2s ease-in;\n  -webkit-transform: translateX(250px);\n  -ms-transform: translateX(250px);\n  transform: translateX(250px); }\n  #theme-settings h5 {\n    position: relative;\n    font-size: 11px;\n    font-weight: 600; }\n  #theme-settings .theme-settings-header {\n    font-size: 11px; }\n  #theme-settings .disabled {\n    color: #d1d2d3 !important; }\n  #theme-settings.theme-settings-open {\n    -webkit-transition-delay: .1s;\n    -o-transition-delay: .1s;\n    transition-delay: .1s;\n    -webkit-transform: none !important;\n    -ms-transform: none !important;\n    transform: none !important; }\n  #theme-settings .theme-settings-open-btn {\n    position: absolute;\n    top: 90px;\n    left: 0;\n    z-index: -1;\n    display: block;\n    width: 40px;\n    height: 40px;\n    border-top-left-radius: 50%;\n    border-bottom-left-radius: 50%;\n    background: #444;\n    color: #fff !important;\n    text-align: center;\n    font-size: 20px !important;\n    line-height: 40px;\n    opacity: 1;\n    -webkit-transition: all .1s linear .2s;\n    -o-transition: all .1s linear .2s;\n    transition: all .1s linear .2s;\n    -webkit-transform: translateX(-60px);\n    -ms-transform: translateX(-60px);\n    transform: translateX(-60px); }\n    #theme-settings .theme-settings-open-btn::before {\n      content: "";\n      width: 18px;\n      height: 18px;\n      display: block;\n      background-size: 100% 100%;\n      position: absolute;\n      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BJREFUeNrUml1IFFEUx8fNh6jMkkjY2pDAaokksVrItGLXhQiUPiDIjOg58CmISPt4EyIK3yKQEKIPhKJeCnM/lMyHonop6CUKE01Eow+Mxe1/6AytSzvec+fOpH/4gei952NmnHvuuVOUzWYtF1oHDoGDIAHaFeddAntBD/NJOwJKQIM4GMjO1k8QVpgb5rG2ZkAaxHRikU6oY2eFNApqHObT38Yc5idArZcJOAVvKwO6QQNYyzTw7zIK8/skMRULn7gnoG6OMYvAMUZHvZLBAaHxKct7ffUygVIfEij1MoH9PiSwTzK4SLAORMBzHxKggLaDFyYTWMEG11v+6D0nMWXiEaJb+sbH4EmV4DWIS+7AHnAW9IExsBrEQNT6v+plvoByjuci6M9PgH6xy1oYSoPduY9QfAEFT6oHDbkJnDNkeAY8BCfABrAMLAYVoAl0gW+GfLXb1WiIK0K36gVbFOqXcnA9a0YhMthqwFAHCAgLw+a8slpHraoVppOuaO4piCMufafpf2AATGs+h8/AaRfP8R1wTXMuxZyyr8TmOTYahRRxcfVtVoIJod9RjtnK3y1lBEb6DQRvc1ngl2Lcas/NLSWo1rktuIUPDL7XJbZugVeFaqGbAkMvDSYgsdXtVMy9Exj6bDCB74Ld3lunBGYkewnD5UHAxKSwYG7QYPBLQYni2E1OCbQInG4zmIDE1vFCCVSBowJDTQYTkNiiGKvzW4sbwYjGQrbTwBpQBiY1FrKwvZC1gR+atcggKHaZQKemb4q5jQwkXRZUnS6Cb3HpOxHg9rYbnQJXuaUo0Ulww6XvHroKawxtaOhOVitc9SDoMuCPYg7am/qkvUk20JR6DO5zqT0CfvGaQW+5RnAALDHgK0WdFDuBqLQrPA9EMffltlVM3QU/lOQjqll9Ier7n+dbM86NrajCeYDXon7VU262reKLfIF3kkonNI1gOOu/htm3Y3yqzd0y3vBU+HTVP4AaMGGqhJ0Q1klu1awSvLQGHwRDPgQ/xK9gTzYRj3xIQORjPh7yTXqZQIkPCSz3MoGYYof6LpcNlQz9fE9xzy07UBGWv/Ug5fDuHgc7HOZHeEwhpdiHZ58a2ES5+sytYqdBlcLcKh47q0mr+7GH5Jj1XwpZfz63OcxL+xnFeR2g1vr7uc1H3QB+CzAA7A9pvcD5g+8AAAAASUVORK5CYII=");\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      margin-left: 2px; }\n    [dir=rtl] #theme-settings .theme-settings-open-btn {\n      border-radius: 0;\n      border-top-right-radius: 50%;\n      border-bottom-right-radius: 50%; }\n      [dir=rtl] #theme-settings .theme-settings-open-btn::before {\n        margin-left: -2px; }\n  #theme-settings.theme-settings-open .theme-settings-open-btn {\n    opacity: 0;\n    -webkit-transition-delay: 0s;\n    -o-transition-delay: 0s;\n    transition-delay: 0s;\n    -webkit-transform: none !important;\n    -ms-transform: none !important;\n    transform: none !important; }\n  #theme-settings .theme-settings-close-btn {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    display: block;\n    font-size: 20px;\n    -webkit-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%); }\n  #theme-settings > h5 {\n    flex: 0 0 auto; }\n  #theme-settings .theme-settings-inner {\n    position: relative;\n    overflow: auto;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 1 auto;\n    flex: 0 1 auto;\n    opacity: 1;\n    -webkit-transition: opacity .2s;\n    -o-transition: opacity .2s;\n    transition: opacity .2s; }\n    #theme-settings .theme-settings-inner > div:first-child > hr:first-of-type {\n      display: none !important; }\n    #theme-settings .theme-settings-inner > div:first-child > h5:first-of-type {\n      padding-top: 0 !important; }\n  #theme-settings .theme-settings-themes-inner {\n    position: relative;\n    opacity: 1;\n    -webkit-transition: opacity .2s;\n    -o-transition: opacity .2s;\n    transition: opacity .2s; }\n  #theme-settings .theme-settings-theme-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    -ms-flex-align: center;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 100%;\n    flex: 1 1 100%;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    padding: 0 24px;\n    width: 100%;\n    cursor: pointer; }\n    #theme-settings .theme-settings-theme-item input {\n      position: absolute;\n      z-index: -1;\n      opacity: 0; }\n    #theme-settings .theme-settings-theme-item input ~ span {\n      opacity: .25;\n      -webkit-transition: all .2s;\n      -o-transition: all .2s;\n      transition: all .2s; }\n    #theme-settings .theme-settings-theme-item .theme-settings-theme-checkmark {\n      display: inline-block;\n      width: 6px;\n      height: 12px;\n      border-right: 1px solid;\n      border-bottom: 1px solid;\n      opacity: 0;\n      -webkit-transition: all .2s;\n      -o-transition: all .2s;\n      transition: all .2s;\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg); }\n      [dir=rtl] #theme-settings .theme-settings-theme-item .theme-settings-theme-checkmark {\n        border-right: none;\n        border-left: 1px solid;\n        -webkit-transform: rotate(-45deg);\n        -ms-transform: rotate(-45deg);\n        transform: rotate(-45deg); }\n    #theme-settings .theme-settings-theme-item input:checked:not([disabled]) ~ span,\n    #theme-settings .theme-settings-theme-item:hover input:not([disabled]) ~ span {\n      opacity: 1; }\n    #theme-settings .theme-settings-theme-item input:checked:not([disabled]) ~ span .theme-settings-theme-checkmark {\n      opacity: 1; }\n  #theme-settings .theme-settings-theme-colors span {\n    display: block;\n    margin: 0 1px;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset; }\n  #theme-settings.theme-settings-loading .theme-settings-inner,\n  #theme-settings.theme-settings-loading-theme .theme-settings-themes-inner {\n    opacity: .2; }\n    #theme-settings.theme-settings-loading .theme-settings-inner::after,\n    #theme-settings.theme-settings-loading-theme .theme-settings-themes-inner::after {\n      content: "";\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 999;\n      display: block; }\n  #theme-settings .theme-settings-navbarBg-inner[disabled] .theme-settings-bg-item,\n  #theme-settings .theme-settings-sidenavBg-inner[disabled] .theme-settings-bg-item,\n  #theme-settings .theme-settings-bg-item.disabled {\n    opacity: .2;\n    cursor: default; }\n  #theme-settings .theme-settings-bg-item {\n    display: block;\n    float: left;\n    margin: 3px;\n    width: 16px;\n    height: 16px;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;\n    cursor: pointer; }\n    #theme-settings .theme-settings-bg-item.active {\n      -webkit-box-shadow: 0 0 0 2px #000;\n      box-shadow: 0 0 0 2px #000; }\n    #theme-settings .theme-settings-bg-item input {\n      position: absolute;\n      visibility: hidden;\n      clip: rect(0, 0, 0, 0);\n      pointer-events: none; }\n\n.layout-sidenav-100vh #theme-settings {\n  height: 100vh; }\n\n[dir=rtl] #theme-settings {\n  right: auto;\n  left: 0;\n  -webkit-transform: translateX(-250px);\n  -ms-transform: translateX(-250px);\n  transform: translateX(-250px); }\n\n[dir=rtl] #theme-settings .theme-settings-open-btn {\n  right: 0;\n  left: auto;\n  -webkit-transform: translateX(60px);\n  -ms-transform: translateX(60px);\n  transform: translateX(60px); }\n\n[dir=rtl] #theme-settings .theme-settings-close-btn {\n  right: auto;\n  left: 0; }\n\n[dir=rtl] #theme-settings .theme-settings-bg-item {\n  float: right; }\n', ""])
  }
 });
 if ("object" == typeof s) {
  var n = ["object" == typeof module && "object" == typeof module.exports ? module.exports : null, "undefined" != typeof window ? window : null, t && t !== window ? t : null];
  for (var i in s) n[0] && (n[0][i] = s[i]), n[1] && "__esModule" !== i && (n[1][i] = s[i]), n[2] && (n[2][i] = s[i])
 }
}(this);