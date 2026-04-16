function l(b, a, c, d) {
  b.s.Db(b.kb, a, c, d, void 0)
}

function m(b, a, c, d) {
  b.s.ca ? l(b, a, c, d) : b.s.ve()._OnMessageFromDOM({
    type: "event",
    component: b.kb,
    handler: a,
    dispatchOpts: d || null,
    data: c,
    responseId: null
  })
}

function n(b, a, c) {
  b.s.C(b.kb, a, c)
}

function t(b, a) {
  for (const [c, d] of a) n(b, c, d)
}

function u(b) {
  b.Pb || (b.s.gd(b.Pd), b.Pb = !0)
}
window.Ja = class {
  constructor(b, a) {
    this.s = b;
    this.kb = a;
    this.Pb = !1;
    this.Pd = () => this.Ma()
  }
  Zc() {}
  Ma() {}
};
window.df = class {
  constructor() {
    this.Wc = -1
  }
  j() {
    -1 !== this.Wc && (self.clearTimeout(this.Wc), this.Wc = -1)
  }
};
"use strict";

function aa(b, a) {
  n(b, "get-element", c => {
    const d = v(b, c.elementId);
    return a(d, c)
  })
}

function v(b, a) {
  b = b.Nb.get(a);
  if (!b) throw Error(`no element with id ${a}`);
  return b.sd
}
window.cf = class extends self.Ja {
  constructor(b, a) {
    super(b, a);
    this.Nb = new Map;
    this.Dc = !0;
    t(this, [
      ["create", () => {
        throw Error("required override");
      }],
      ["destroy", c => {
        c = c.elementId;
        const d = v(this, c);
        this.Dc && d.parentElement.removeChild(d);
        this.Nb.delete(c)
      }],
      ["set-visible", c => {
        if (this.Dc) {
          var d = this.Nb.get(c.elementId),
            e = d.sd;
          d.yd ? e.style.display = c.isVisible ? "" : "none" : d.Ke = !!c.isVisible
        }
      }],
      ["update-position", c => {
        if (this.Dc) {
          var d = this.Nb.get(c.elementId),
            e = d.sd;
          e.style.left = c.left + "px";
          e.style.top = c.top +
            "px";
          e.style.width = c.width + "px";
          e.style.height = c.height + "px";
          c = c.fontSize;
          null !== c && (e.style.fontSize = c + "em");
          d.yd || (d.yd = !0, d.Ke && (e.style.display = ""))
        }
      }],
      ["update-state", c => {
        v(this, c.elementId);
        throw Error("required override");
      }],
      ["focus", c => this.yc(c)],
      ["set-css-style", c => {
        const d = v(this, c.elementId),
          e = c.prop;
        c = c.val;
        e.startsWith("--") ? d.style.setProperty(e, c) : d.style[e] = c
      }],
      ["set-attribute", c => {
        v(this, c.elementId).setAttribute(c.name, c.val)
      }],
      ["remove-attribute", c => {
        v(this, c.elementId).removeAttribute(c.name)
      }]
    ]);
    aa(this, c => c)
  }
  yc(b) {
    var a = v(this, b.elementId);
    b.focus ? a.focus() : a.blur()
  }
};
"use strict";
const ba = /(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),
  w = /android/i.test(navigator.userAgent),
  ca = /safari/i.test(navigator.userAgent) && !/(chrome|chromium|edg\/|OPR\/|nwjs)/i.test(navigator.userAgent);
let da = 0;

function y(b) {
  const a = document.createElement("script");
  a.async = !1;
  a.type = "module";
  return b.Te ? new Promise(c => {
    const d = "c3_resolve_" + da;
    ++da;
    self[d] = c;
    a.textContent = b.Xe + `\n\nself["${d}"]();`;
    document.head.appendChild(a)
  }) : new Promise((c, d) => {
    a.onload = c;
    a.onerror = d;
    a.src = b;
    document.head.appendChild(a)
  })
}
let ea = !1,
  fa = !1;

function ha() {
  if (!ea) {
    try {
      new Worker("blob://", {
        get type() {
          fa = !0
        }
      })
    } catch (b) {}
    ea = !0
  }
  return fa
}
let z = new Audio;
const ia = {
  "audio/webm; codecs=opus": !!z.canPlayType("audio/webm; codecs=opus"),
  "audio/ogg; codecs=opus": !!z.canPlayType("audio/ogg; codecs=opus"),
  "audio/webm; codecs=vorbis": !!z.canPlayType("audio/webm; codecs=vorbis"),
  "audio/ogg; codecs=vorbis": !!z.canPlayType("audio/ogg; codecs=vorbis"),
  "audio/mp4": !!z.canPlayType("audio/mp4"),
  "audio/mpeg": !!z.canPlayType("audio/mpeg")
};
z = null;
async function ja(b) {
  b = await ka(b);
  return (new TextDecoder("utf-8")).decode(b)
}

function ka(b) {
  return new Promise((a, c) => {
    const d = new FileReader;
    d.onload = e => a(e.target.result);
    d.onerror = e => c(e);
    d.readAsArrayBuffer(b)
  })
}
const C = [];
let E = 0;
window.RealFile = window.File;
const F = [],
  G = new Map,
  H = new Map;
let na = 0;
const oa = [];
self.runOnStartup = function(b) {
  if ("function" !== typeof b) throw Error("runOnStartup called without a function");
  oa.push(b)
};
const pa = new Set(["cordova", "playable-ad", "instant-games"]);
let qa = !1;
window.ua = class b {
  constructor(a) {
    this.ca = a.Ze;
    this.wa = null;
    this.ba = "";
    this.Za = a.We;
    this.Ab = {};
    this.Sa = this.ta = null;
    this.Mb = [];
    this.I = this.xa = null;
    this.Lc = !1;
    this.vd = 0;
    this.pb = null;
    this.Ya = -1;
    this.Oe = () => this.Ce();
    this.Xa = [];
    this.v = a.Qd;
    this.Qb = "file" === location.protocol.substr(0, 4);
    !this.ca || "undefined" !== typeof OffscreenCanvas && navigator.userActivation && ha() || (this.ca = !1);
    this.ca && ca && (this.ca = !1);
    if ("playable-ad" === this.v || "instant-games" === this.v) this.ca = !1;
    if ("cordova" === this.v && this.ca)
      if (w) {
        const c =
          /Chrome\/(\d+)/i.exec(navigator.userAgent);
        c && 90 <= parseInt(c[1], 10) || (this.ca = !1)
      } else this.ca = !1;
    this.Tb = this.qa = null;
    "html5" !== this.v || window.isSecureContext || console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");
    this.C("runtime", "cordova-fetch-local-file", c => this.ye(c));
    this.C("runtime", "create-job-worker", () => this.ze());
    "cordova" === this.v ? document.addEventListener("deviceready",
      () => this.kd(a)) : this.kd(a)
  }
  j() {
    this.rc();
    this.wa && (this.wa = this.wa.onmessage = null);
    this.ta && (this.ta.terminate(), this.ta = null);
    this.Sa && (this.Sa.j(), this.Sa = null);
    this.I && (this.I.parentElement.removeChild(this.I), this.I = null)
  }
  ke() {
    return ba && "cordova" === this.v
  }
  nc() {
    const a = navigator.userAgent;
    return ba && pa.has(this.v) || navigator.standalone || /crios\/|fxios\/|edgios\//i.test(a)
  }
  ie() {
    return w
  }
  dd() {
    return w && pa.has(this.v)
  }
  async kd(a) {
    "macos-wkwebview" === this.v && this.Bc({
      type: "ready"
    });
    if ("playable-ad" ===
      this.v) {
      this.qa = self.c3_base64files;
      this.Tb = {};
      await this.re();
      for (let d = 0, e = a.ab.length; d < e; ++d) {
        var c = a.ab[d];
        this.Tb.hasOwnProperty(c) ? a.ab[d] = {
          Te: !0,
          Xe: this.Tb[c]
        } : this.qa.hasOwnProperty(c) && (a.ab[d] = URL.createObjectURL(this.qa[c]))
      }
      a.fc = []
    }
    if ("nwjs" === this.v && self.nw && self.nw.App.manifest["c3-steam-mode"]) {
      let d = 0;
      this.gd(() => {
        d++;
        document.body.style.opacity = 0 === d % 2 ? "1" : "0.999"
      })
    }
    a.Ve ? this.ba = a.Ve : (c = location.origin, this.ba = ("null" === c ? "file:///" : c) + location.pathname, c = this.ba.lastIndexOf("/"),
      -1 !== c && (this.ba = this.ba.substr(0, c + 1)));
    a.af && (this.Ab = a.af);
    c = new MessageChannel;
    this.wa = c.port1;
    this.wa.onmessage = d => this._OnMessageFromRuntime(d.data);
    window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(d => this.Be(d));
    this.pb = new self.le(this);
    await ra(this.pb);
    "object" === typeof window.StatusBar && window.StatusBar.hide();
    if ("object" === typeof window.AndroidFullScreen) try {
      await new Promise((d, e) => {
        window.AndroidFullScreen.immersiveMode(d, e)
      })
    } catch (d) {
      console.error("Failed to enter Android immersive mode: ",
        d)
    }
    this.ca ? await this.xe(a, c.port2) : await this.we(a, c.port2)
  }
  tc(a) {
    a = this.Ab.hasOwnProperty(a) ? this.Ab[a] : a.endsWith("/workermain.js") && this.Ab.hasOwnProperty("workermain.js") ? this.Ab["workermain.js"] : "playable-ad" === this.v && this.qa.hasOwnProperty(a) ? this.qa[a] : a;
    a instanceof Blob && (a = URL.createObjectURL(a));
    return a
  }
  async ic(a, c, d) {
    if (a.startsWith("blob:")) return new Worker(a, d);
    if ("cordova" === this.v && this.Qb) return a = await this.Bb(d.Se ? a : this.Za + a), new Worker(URL.createObjectURL(new Blob([a], {
        type: "application/javascript"
      })),
      d);
    a = new URL(a, c);
    if (location.origin !== a.origin) {
      a = await fetch(a);
      if (!a.ok) throw Error("failed to fetch worker script");
      a = await a.blob();
      return new Worker(URL.createObjectURL(a), d)
    }
    return new Worker(a, d)
  }
  oa() {
    return Math.max(window.innerWidth, 1)
  }
  ha() {
    return Math.max(window.innerHeight, 1)
  }
  jd(a) {
    var c = this.ba,
      d = location.href,
      e = this.oa(),
      f = this.ha(),
      g = window.devicePixelRatio,
      h = b.gb(),
      k = a.jf,
      p = window.cr_previewImageBlobs || this.qa,
      q = window.cr_previewProjectFileBlobs,
      A = window.cr_previewProjectFiles,
      x = window.gf ||
      "";
    a = a.Qd;
    var r = (new URLSearchParams(self.location.search)).has("debug"),
      B = this.pb;
    return {
      runtimeBaseUrl: c,
      previewUrl: d,
      windowInnerWidth: e,
      windowInnerHeight: f,
      devicePixelRatio: g,
      isFullscreen: h,
      projectData: k,
      previewImageBlobs: p,
      previewProjectFileBlobs: q,
      previewProjectFileSWUrls: A,
      swClientId: x,
      exportType: a,
      isDebug: r,
      ife: !!self.hf,
      jobScheduler: {
        inputPort: B.Kc,
        outputPort: B.Rc,
        maxNumWorkers: B.Le
      },
      supportedAudioFormats: ia,
      opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.Za + "opus.wasm.js",
      opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl ||
        this.Za + "opus.wasm.wasm",
      isFileProtocol: this.Qb,
      isiOSCordova: this.ke(),
      isiOSWebView: this.nc(),
      isFBInstantAvailable: "undefined" !== typeof self.FBInstant
    }
  }
  async xe(a, c) {
    const d = this.tc(a.$e);
    "preview" === this.v ? (this.ta = new Worker("previewworker.js", {
      type: "module",
      name: "Runtime"
    }), await new Promise((h, k) => {
      const p = q => {
        this.ta.removeEventListener("message", p);
        q.data && "ok" === q.data.type ? h() : k()
      };
      this.ta.addEventListener("message", p);
      this.ta.postMessage({
        type: "construct-worker-init",
        "import": (new URL(d,
          this.ba)).toString()
      })
    })) : this.ta = await this.ic(d, this.ba, {
      type: "module",
      name: "Runtime",
      Se: !0
    });
    this.I = document.createElement("canvas");
    this.I.style.display = "none";
    const e = this.I.transferControlToOffscreen();
    document.body.appendChild(this.I);
    window.c3canvas = this.I;
    self.C3_InsertHTMLPlaceholders && self.C3_InsertHTMLPlaceholders();
    let f = a.fc || [],
      g = a.ab;
    f = await Promise.all(f.map(h => this.Na(h)));
    g = await Promise.all(g.map(h => this.Na(h)));
    if ("cordova" === this.v)
      for (let h = 0, k = a.ec.length; h < k; ++h) {
        const p =
          a.ec[h],
          q = p[0];
        if (q === a.Xc || "scriptsInEvents.js" === q || q.endsWith("/scriptsInEvents.js")) p[1] = await this.Na(q)
      }
    this.ta.postMessage(Object.assign(this.jd(a), {
      type: "init-runtime",
      isInWorker: !0,
      messagePort: c,
      canvas: e,
      workerDependencyScripts: f,
      engineScripts: g,
      projectScripts: a.ec,
      mainProjectScript: a.Xc,
      projectScriptsStatus: self.C3_ProjectScriptsStatus
    }), [c, e, ...sa(this.pb)]);
    this.Mb = F.map(h => new h(this));
    this.hd();
    ta(this.xa);
    self.c3_callFunction = (h, k) => {
      var p = this.xa;
      return p.s.fd(p.kb, "js-invoke-function", {
        name: h,
        params: k
      }, void 0, void 0)
    };
    "preview" === this.v && (self.goToLastErrorScript = () => this.Db("runtime", "go-to-last-error-script"))
  }
  async we(a, c) {
    this.I = document.createElement("canvas");
    this.I.style.display = "none";
    document.body.appendChild(this.I);
    window.c3canvas = this.I;
    self.C3_InsertHTMLPlaceholders && self.C3_InsertHTMLPlaceholders();
    this.Mb = F.map(g => new g(this));
    this.hd();
    var d = a.ab.map(g => "string" === typeof g ? (new URL(g, this.ba)).toString() : g);
    Array.isArray(a.fc) && d.unshift(...a.fc);
    d = await Promise.all(d.map(g =>
      this.Na(g)));
    await Promise.all(d.map(g => y(g)));
    d = self.C3_ProjectScriptsStatus;
    const e = a.Xc,
      f = a.ec;
    for (let [g, h] of f)
      if (h || (h = g), g === e) try {
        h = await this.Na(h), await y(h), "preview" !== this.v || d[g] || this.md(g, "main script did not run to completion")
      } catch (k) {
        this.md(g, k)
      } else if ("scriptsInEvents.js" === g || g.endsWith("/scriptsInEvents.js")) h = await this.Na(h), await y(h);
    "preview" === this.v && "object" !== typeof self.bf.ef ? (this.Hb(), console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
      alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")) : (a = Object.assign(this.jd(a), {
      isInWorker: !1,
      messagePort: c,
      canvas: this.I,
      runOnStartupFunctions: oa
    }), ta(this.xa), this.ld(), this.Sa = self.C3_CreateRuntime(a), await self.C3_InitRuntime(this.Sa, a))
  }
  md(a, c) {
    this.Hb();
    console.error(`[Preview] Failed to load project main script (${a}): `, c);
    alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)
  }
  ld() {
    this.Hb()
  }
  Hb() {
    const a =
      window.Qe;
    a && (a.parentElement.removeChild(a), window.Qe = null)
  }
  async ze() {
    const a = await va(this.pb);
    return {
      outputPort: a,
      transferables: [a]
    }
  }
  ve() {
    if (this.ca) throw Error("not available in worker mode");
    return this.Sa
  }
  Db(a, c, d, e, f) {
    this.wa.postMessage({
      type: "event",
      component: a,
      handler: c,
      dispatchOpts: e || null,
      data: d,
      responseId: null
    }, f)
  }
  fd(a, c, d, e, f) {
    const g = na++,
      h = new Promise((k, p) => {
        H.set(g, {
          resolve: k,
          reject: p
        })
      });
    this.wa.postMessage({
        type: "event",
        component: a,
        handler: c,
        dispatchOpts: e || null,
        data: d,
        responseId: g
      },
      f);
    return h
  }
  _OnMessageFromRuntime(a) {
    const c = a.type;
    if ("event" === c) return this.Ae(a);
    if ("result" === c) this.De(a);
    else if ("runtime-ready" === c) this.Ee();
    else if ("alert-error" === c) this.Hb(), alert(a.message);
    else if ("creating-runtime" === c) this.ld();
    else throw Error(`unknown message '${c}'`);
  }
  Ae(a) {
    const c = a.component,
      d = a.handler,
      e = a.data,
      f = a.responseId;
    if (a = G.get(c))
      if (a = a.get(d)) {
        var g = null;
        try {
          g = a(e)
        } catch (h) {
          console.error(`Exception in '${c}' handler '${d}':`, h);
          null !== f && this.Gb(f, !1, "" + h);
          return
        }
        if (null ===
          f) return g;
        g && g.then ? g.then(h => this.Gb(f, !0, h)).catch(h => {
          console.error(`Rejection from '${c}' handler '${d}':`, h);
          this.Gb(f, !1, "" + h)
        }) : this.Gb(f, !0, g)
      } else console.warn(`[DOM] No handler '${d}' for component '${c}'`);
    else console.warn(`[DOM] No event handlers for component '${c}'`)
  }
  Gb(a, c, d) {
    let e;
    d && d.transferables && (e = d.transferables);
    this.wa.postMessage({
      type: "result",
      responseId: a,
      isOk: c,
      result: d
    }, e)
  }
  De(a) {
    const c = a.responseId,
      d = a.isOk;
    a = a.result;
    const e = H.get(c);
    d ? e.resolve(a) : e.reject(a);
    H.delete(c)
  }
  C(a,
    c, d) {
    let e = G.get(a);
    e || (e = new Map, G.set(a, e));
    if (e.has(c)) throw Error(`[DOM] Component '${a}' already has handler '${c}'`);
    e.set(c, d)
  }
  static bb(a) {
    if (F.includes(a)) throw Error("DOM handler already added");
    F.push(a)
  }
  hd() {
    for (const a of this.Mb)
      if ("runtime" === a.kb) {
        this.xa = a;
        return
      } throw Error("cannot find runtime DOM handler");
  }
  Be(a) {
    this.Db("debugger", "message", a)
  }
  Ee() {
    for (const a of this.Mb) a.Zc()
  }
  static gb() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement ||
      qa)
  }
  static Ib(a) {
    qa = !!a
  }
  gd(a) {
    this.Xa.push(a);
    this.Ac()
  }
  Ge(a) {
    a = this.Xa.indexOf(a);
    if (-1 === a) throw Error("invalid callback");
    this.Xa.splice(a, 1);
    this.Xa.length || this.rc()
  }
  Ac() {
    -1 === this.Ya && this.Xa.length && (this.Ya = requestAnimationFrame(this.Oe))
  }
  rc() {
    -1 !== this.Ya && (cancelAnimationFrame(this.Ya), this.Ya = -1)
  }
  Ce() {
    this.Ya = -1;
    for (const a of this.Xa) a();
    this.Ac()
  }
  Ca(a) {
    this.xa.Ca(a)
  }
  La(a) {
    this.xa.La(a)
  }
  zc() {
    this.xa.zc()
  }
  Fb(a) {
    this.xa.Fb(a)
  }
  je() {
    return !!ia["audio/webm; codecs=opus"]
  }
  async He(a) {
    a = await this.fd("runtime",
      "opus-decode", {
        arrayBuffer: a
      }, null, [a]);
    return new Float32Array(a)
  }
  ne(a) {
    this.Lc = !0;
    this.vd = a
  }
  he(a) {
    return /^(?:[a-z\-]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
  }
  ed(a) {
    return !this.he(a)
  }
  async Na(a) {
    return "cordova" === this.v && (a.startsWith("file:") || this.Qb && this.ed(a)) ? (a.startsWith(this.ba) && (a = a.substr(this.ba.length)), a = await this.Bb(a), URL.createObjectURL(new Blob([a], {
      type: "application/javascript"
    }))) : a
  }
  async ye(a) {
    const c = a.filename;
    switch (a.as) {
      case "text":
        return await this.ge(c);
      case "buffer":
        return await this.Bb(c);
      default:
        throw Error("unsupported type");
    }
  }
  bd(a) {
    const c = window.cordova.file.applicationDirectory + "www/" + a;
    return new Promise((d, e) => {
      window.resolveLocalFileSystemURL(c, f => {
        f.file(d, e)
      }, e)
    })
  }
  async ge(a) {
    a = await this.bd(a);
    return await ja(a)
  }
  sc() {
    if (C.length && !(8 <= E)) {
      E++;
      var a = C.shift();
      this.se(a.filename, a.Ye, a.Re)
    }
  }
  Bb(a) {
    return new Promise((c, d) => {
      C.push({
        filename: a,
        Ye: e => {
          E--;
          this.sc();
          c(e)
        },
        Re: e => {
          E--;
          this.sc();
          d(e)
        }
      });
      this.sc()
    })
  }
  async se(a, c, d) {
    try {
      const e =
        await this.bd(a),
        f = await ka(e);
      c(f)
    } catch (e) {
      d(e)
    }
  }
  Bc(a) {
    if ("windows-webview2" === this.v) window.chrome.webview.postMessage(JSON.stringify(a));
    else if ("macos-wkwebview" === this.v) window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));
    else throw Error("cannot send wrapper message");
  }
  async re() {
    const a = [];
    for (const [c, d] of Object.entries(this.qa)) a.push(this.qe(c, d));
    await Promise.all(a)
  }
  async qe(a, c) {
    if ("object" === typeof c) this.qa[a] = new Blob([c.str], {
      type: c.type
    }), this.Tb[a] = c.str;
    else {
      let d =
        await this.ue(c);
      d || (d = this.te(c));
      this.qa[a] = d
    }
  }
  async ue(a) {
    try {
      return await (await fetch(a)).blob()
    } catch (c) {
      return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.", c), null
    }
  }
  te(a) {
    a = this.Fe(a);
    return this.pe(a.data, a.Ue)
  }
  Fe(a) {
    var c = a.indexOf(",");
    if (0 > c) throw new URIError("expected comma in data: uri");
    var d = a.substring(c + 1);
    c = a.substring(5,
      c).split(";");
    a = c[0] || "";
    const e = c[2];
    d = "base64" === c[1] || "base64" === e ? atob(d) : decodeURIComponent(d);
    return {
      Ue: a,
      data: d
    }
  }
  pe(a, c) {
    var d = a.length;
    let e = d >> 2,
      f = new Uint8Array(d),
      g = new Uint32Array(f.buffer, 0, e),
      h, k;
    for (k = h = 0; h < e; ++h) g[h] = a.charCodeAt(k++) | a.charCodeAt(k++) << 8 | a.charCodeAt(k++) << 16 | a.charCodeAt(k++) << 24;
    for (d &= 3; d--;) f[k] = a.charCodeAt(k), ++k;
    return new Blob([f], {
      type: c
    })
  }
};
"use strict";
const I = self.ua;

function wa(b) {
  return b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents || b.originalEvent && b.originalEvent.sourceCapabilities && b.originalEvent.sourceCapabilities.firesTouchEvents
}
const xa = new Map([
    ["OSLeft", "MetaLeft"],
    ["OSRight", "MetaRight"]
  ]),
  J = {
    dispatchRuntimeEvent: !0,
    dispatchUserScriptEvent: !0
  },
  ya = {
    dispatchUserScriptEvent: !0
  },
  za = {
    dispatchRuntimeEvent: !0
  };

function Aa(b) {
  return new Promise((a, c) => {
    const d = document.createElement("link");
    d.onload = () => a(d);
    d.onerror = e => c(e);
    d.rel = "stylesheet";
    d.href = b;
    document.head.appendChild(d)
  })
}

function Ba(b) {
  return new Promise((a, c) => {
    const d = new Image;
    d.onload = () => a(d);
    d.onerror = e => c(e);
    d.src = b
  })
}
async function K(b) {
  b = URL.createObjectURL(b);
  try {
    return await Ba(b)
  } finally {
    URL.revokeObjectURL(b)
  }
}

function Ca(b) {
  return new Promise((a, c) => {
    let d = new FileReader;
    d.onload = e => a(e.target.result);
    d.onerror = e => c(e);
    d.readAsText(b)
  })
}
async function Da(b, a, c) {
  if (!/firefox/i.test(navigator.userAgent)) return await K(b);
  var d = await Ca(b);
  d = (new DOMParser).parseFromString(d, "image/svg+xml");
  const e = d.documentElement;
  if (e.hasAttribute("width") && e.hasAttribute("height")) {
    const f = e.getAttribute("width"),
      g = e.getAttribute("height");
    if (!f.includes("%") && !g.includes("%")) return await K(b)
  }
  e.setAttribute("width", a + "px");
  e.setAttribute("height", c + "px");
  d = (new XMLSerializer).serializeToString(d);
  b = new Blob([d], {
    type: "image/svg+xml"
  });
  return await K(b)
}

function Ea(b) {
  do {
    if (b.parentNode && b.hasAttribute("contenteditable")) return !0;
    b = b.parentNode
  } while (b);
  return !1
}
const Fa = new Set(["input", "textarea", "datalist", "select"]),
  Ga = new Set(["canvas", "body", "html"]);

function L(b) {
  b.target.tagName && Ga.has(b.target.tagName.toLowerCase()) && b.preventDefault()
}

function Ha(b) {
  (b.metaKey || b.ctrlKey) && b.preventDefault()
}
self.C3_GetSvgImageSize = async function(b) {
  b = await K(b);
  if (0 < b.width && 0 < b.height) return [b.width, b.height];
  b.style.position = "absolute";
  b.style.left = "0px";
  b.style.top = "0px";
  b.style.visibility = "hidden";
  document.body.appendChild(b);
  const a = b.getBoundingClientRect();
  document.body.removeChild(b);
  return [a.width, a.height]
};
self.C3_RasterSvgImageBlob = async function(b, a, c, d, e) {
  b = await Da(b, a, c);
  const f = document.createElement("canvas");
  f.width = d;
  f.height = e;
  f.getContext("2d").drawImage(b, 0, 0, a, c);
  return f
};
let Ia = !1;
document.addEventListener("pause", () => Ia = !0);
document.addEventListener("resume", () => Ia = !1);

function ta(b) {
  b.ud = !0;
  b.Oc = b.s.oa();
  b.qb = b.s.ha()
}
async function Ka(b) {
  await Promise.all(b.webfonts.map(async a => {
    a = new FontFace(a.name, `url('${a.url}')`);
    document.fonts.add(a);
    await a.load()
  }))
}
async function La(b) {
  var a = b.imageBitmapOpts;
  b = await self.C3_RasterSvgImageBlob(b.blob, b.imageWidth, b.imageHeight, b.surfaceWidth, b.surfaceHeight);
  a = a ? await createImageBitmap(b, a) : await createImageBitmap(b);
  return {
    imageBitmap: a,
    transferables: [a]
  }
}
async function Ma(b) {
  return await self.C3_GetSvgImageSize(b.blob)
}

function Na(b) {
  window.c3_postToMessagePort && (b.from = "runtime", window.c3_postToMessagePort(b))
}

function Oa(b) {
  self.setTimeout(() => {
    b.td = !0
  }, 1E3);
  "cordova" === b.s.v ? (document.addEventListener("pause", () => Pa(b, !0)), document.addEventListener("resume", () => Pa(b, !1))) : document.addEventListener("visibilitychange", () => Pa(b, document.hidden));
  return {
    isSuspended: !(!document.hidden && !Ia)
  }
}

function Qa(b) {
  b.od || (b.od = !0, window.addEventListener("deviceorientation", a => {
    b.$ || l(b, "deviceorientation", {
      absolute: !!a.absolute,
      alpha: a.alpha || 0,
      beta: a.beta || 0,
      gamma: a.gamma || 0,
      timeStamp: a.timeStamp,
      webkitCompassHeading: a.webkitCompassHeading,
      webkitCompassAccuracy: a.webkitCompassAccuracy
    }, J)
  }), window.addEventListener("deviceorientationabsolute", a => {
    b.$ || l(b, "deviceorientationabsolute", {
      absolute: !!a.absolute,
      alpha: a.alpha || 0,
      beta: a.beta || 0,
      gamma: a.gamma || 0,
      timeStamp: a.timeStamp
    }, J)
  }))
}

function Ra(b) {
  b.nd || (b.nd = !0, window.addEventListener("devicemotion", a => {
    if (!b.$) {
      var c = null,
        d = a.acceleration;
      d && (c = {
        x: d.x || 0,
        y: d.y || 0,
        z: d.z || 0
      });
      d = null;
      var e = a.accelerationIncludingGravity;
      e && (d = {
        x: e.x || 0,
        y: e.y || 0,
        z: e.z || 0
      });
      e = null;
      var f = a.rotationRate;
      f && (e = {
        alpha: f.alpha || 0,
        beta: f.beta || 0,
        gamma: f.gamma || 0
      });
      l(b, "devicemotion", {
        acceleration: c,
        accelerationIncludingGravity: d,
        rotationRate: e,
        interval: a.interval,
        timeStamp: a.timeStamp
      }, J)
    }
  }))
}
async function Sa(b) {
  await Aa(b.url)
}

function Ta(b, a) {
  b.wd = a.message; - 1 === b.Gc && (b.Gc = setTimeout(() => {
    b.Gc = -1;
    const c = document.getElementById("exportToVideoMessage");
    c && (c.textContent = b.wd)
  }, 250))
}

function M(b) {
  if (!b.$) {
    var a = I.gb();
    a && "any" !== b.Uc && Ua(b);
    l(b, "fullscreenchange", {
      isFullscreen: a,
      innerWidth: b.oa(),
      innerHeight: b.ha()
    })
  }
}

function Va(b, a) {
  console.warn("[Construct] Fullscreen request failed: ", a);
  l(b, "fullscreenerror", {
    isFullscreen: I.gb(),
    innerWidth: b.oa(),
    innerHeight: b.ha()
  })
}

function Pa(b, a) {
  a ? b.s.rc() : b.s.Ac();
  l(b, "visibilitychange", {
    hidden: a
  })
}

function Wa(b, a, c) {
  "Backspace" === c.key && L(c);
  if (!b.$) {
    var d = xa.get(c.code) || c.code;
    m(b, a, {
      code: d,
      key: c.key,
      which: c.which,
      repeat: c.repeat,
      altKey: c.altKey,
      ctrlKey: c.ctrlKey,
      metaKey: c.metaKey,
      shiftKey: c.shiftKey,
      timeStamp: c.timeStamp
    }, J)
  }
}

function Xa(b, a, c, d) {
  b.$ || wa(c) || m(b, a, {
    button: c.button,
    buttons: c.buttons,
    clientX: c.clientX,
    clientY: c.clientY + b.da,
    pageX: c.pageX,
    pageY: c.pageY + b.da,
    movementX: c.movementX || 0,
    movementY: c.movementY || 0,
    timeStamp: c.timeStamp
  }, d)
}

function Ya(b) {
  window !== window.top && window.focus();
  Za(b.target) && document.activeElement && !Za(document.activeElement) && document.activeElement.blur()
}

function N(b, a, c) {
  if (!b.$) {
    var d = 0;
    "mouse" === c.pointerType && (d = b.vb);
    m(b, a, {
      pointerId: c.pointerId,
      pointerType: c.pointerType,
      button: c.button,
      buttons: c.buttons,
      lastButtons: d,
      clientX: c.clientX,
      clientY: c.clientY + b.da,
      pageX: c.pageX,
      pageY: c.pageY + b.da,
      movementX: c.movementX || 0,
      movementY: c.movementY || 0,
      width: c.width || 0,
      height: c.height || 0,
      pressure: c.pressure || 0,
      tangentialPressure: c.tangentialPressure || 0,
      tiltX: c.tiltX || 0,
      tiltY: c.tiltY || 0,
      twist: c.twist || 0,
      timeStamp: c.timeStamp
    }, J);
    "mouse" === c.pointerType && (d =
      "mousemove", "pointerdown" === a ? d = "mousedown" : "pointerup" === a && (d = "mouseup"), Xa(b, d, c, ya), b.vb = c.buttons)
  }
}

function $a(b, a, c) {
  if (!b.$ && !wa(c)) {
    var d = b.vb;
    "pointerdown" === a && 0 !== d ? a = "pointermove" : "pointerup" === a && 0 !== c.buttons && (a = "pointermove");
    m(b, a, {
      pointerId: 1,
      pointerType: "mouse",
      button: c.button,
      buttons: c.buttons,
      lastButtons: d,
      clientX: c.clientX,
      clientY: c.clientY + b.da,
      pageX: c.pageX,
      pageY: c.pageY + b.da,
      movementX: c.movementX || 0,
      movementY: c.movementY || 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      timeStamp: c.timeStamp
    }, J);
    b.vb = c.buttons;
    Xa(b, c.type, c, ya)
  }
}

function O(b, a, c) {
  if (!b.$)
    for (let d = 0, e = c.changedTouches.length; d < e; ++d) {
      const f = c.changedTouches[d];
      m(b, a, {
          pointerId: f.identifier,
          pointerType: "touch",
          button: 0,
          buttons: 0,
          lastButtons: 0,
          clientX: f.clientX,
          clientY: f.clientY + b.da,
          pageX: f.pageX,
          pageY: f.pageY + b.da,
          movementX: c.movementX || 0,
          movementY: c.movementY || 0,
          width: 2 * (f.radiusX || f.webkitRadiusX || 0),
          height: 2 * (f.radiusY || f.webkitRadiusY || 0),
          pressure: f.force || f.webkitForce || 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: f.rotationAngle || 0,
          timeStamp: c.timeStamp
        },
        J)
    }
}

function ab(b, a, c) {
  document.body.style.transform = "";
  b.da = 0;
  if (0 < c) {
    var d = document.activeElement;
    d && (d = d.getBoundingClientRect(), a = (d.top + d.bottom) / 2 - (a - c) / 2, a > c && (a = c), 0 > a && (a = 0), 0 < a && (document.body.style.transform = `translateY(${-a}px)`, b.da = a))
  }
}

function bb(b, a, c, d) {
  const e = b.oa(),
    f = b.ha();
  b.$a = -1;
  e != a || f != c ? l(b, "window-resize", {
    innerWidth: e,
    innerHeight: f,
    devicePixelRatio: window.devicePixelRatio,
    isFullscreen: I.gb()
  }) : 10 > d && db(b, e, f, d + 1)
}

function db(b, a, c, d) {
  -1 !== b.$a && clearTimeout(b.$a);
  b.$a = setTimeout(() => bb(b, a, c, d), 48)
}

function Ua(b) {
  b = b.Uc;
  if (screen.orientation && screen.orientation.lock) screen.orientation.lock(b).catch(a => console.warn("[Construct] Failed to lock orientation: ", a));
  else try {
    let a = !1;
    screen.lockOrientation ? a = screen.lockOrientation(b) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(b) : screen.mozLockOrientation ? a = screen.mozLockOrientation(b) : screen.msLockOrientation && (a = screen.msLockOrientation(b));
    a || console.warn("[Construct] Failed to lock orientation")
  } catch (a) {
    console.warn("[Construct] Failed to lock orientation: ",
      a)
  }
}

function Za(b) {
  return !b || b === document || b === window || b === document.body || "canvas" === b.tagName.toLowerCase()
}
I.bb(class extends self.Ja {
  constructor(b) {
    super(b, "runtime");
    this.Cd = !0;
    this.ud = !1;
    this.$a = -1;
    this.Uc = "any";
    this.nd = this.od = !1;
    this.bc = document.createElement("div");
    this.bc.className = "c3-screen-reader-text";
    this.bc.setAttribute("aria-live", "polite");
    document.body.appendChild(this.bc);
    this.Fa = null;
    this.$ = !1;
    this.wd = "";
    this.Gc = -1;
    this.td = !1;
    this.Oc = b.oa();
    this.qb = b.ha();
    this.da = this.zb = 0;
    b.C("canvas", "update-size", d => {
      var e = this.s;
      e.Lc || (e = e.I, e.style.width = d.styleWidth + "px", e.style.height = d.styleHeight +
        "px", e.style.marginLeft = d.marginLeft + "px", e.style.marginTop = d.marginTop + "px", document.documentElement.style.setProperty("--construct-scale", d.displayScale), this.Cd && (e.style.display = "", this.Cd = !1))
    });
    b.C("runtime", "invoke-download", d => {
      const e = d.url;
      d = d.filename;
      const f = document.createElement("a"),
        g = document.body;
      f.textContent = d;
      f.href = e;
      f.download = d;
      g.appendChild(f);
      f.click();
      g.removeChild(f)
    });
    b.C("runtime", "load-webfonts", d => Ka(d));
    b.C("runtime", "raster-svg-image", d => La(d));
    b.C("runtime", "get-svg-image-size",
      d => Ma(d));
    b.C("runtime", "set-target-orientation", d => {
      this.Uc = d.targetOrientation
    });
    b.C("runtime", "register-sw", () => {
      window.C3_RegisterSW && window.C3_RegisterSW()
    });
    b.C("runtime", "post-to-debugger", d => Na(d));
    b.C("runtime", "go-to-script", d => Na(d));
    b.C("runtime", "before-start-ticking", () => Oa(this));
    b.C("runtime", "debug-highlight", d => {
      if (d.show) {
        this.Fa || (this.Fa = document.createElement("div"), this.Fa.id = "inspectOutline", document.body.appendChild(this.Fa));
        var e = this.Fa;
        e.style.display = "";
        e.style.left =
          d.left - 1 + "px";
        e.style.top = d.top - 1 + "px";
        e.style.width = d.width + 2 + "px";
        e.style.height = d.height + 2 + "px";
        e.textContent = d.name
      } else this.Fa && (this.Fa.style.display = "none")
    });
    b.C("runtime", "enable-device-orientation", () => Qa(this));
    b.C("runtime", "enable-device-motion", () => Ra(this));
    b.C("runtime", "add-stylesheet", d => Sa(d));
    b.C("runtime", "script-create-worker", d => {
      const e = d.port2;
      (new Worker(d.url, d.opts)).postMessage({
        type: "construct-worker-init",
        port2: e
      }, [e])
    });
    b.C("runtime", "alert", d => this.wc(d));
    b.C("runtime",
      "screen-reader-text", d => {
        var e = d.type;
        "create" === e ? (e = document.createElement("p"), e.id = "c3-sr-" + d.id, e.textContent = d.text, this.bc.appendChild(e)) : "update" === e ? (e = document.getElementById("c3-sr-" + d.id)) ? e.textContent = d.text : console.warn(`[Construct] Missing screen reader text with id ${d.id}`) : "release" === e ? (e = document.getElementById("c3-sr-" + d.id)) ? e.remove() : console.warn(`[Construct] Missing screen reader text with id ${d.id}`) : console.warn(`[Construct] Unknown screen reader text update '${e}'`)
      });
    b.C("runtime", "hide-cordova-splash", () => {
      navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide()
    });
    b.C("runtime", "set-exporting-to-video", d => {
      this.$ = !0;
      const e = document.createElement("h1");
      e.id = "exportToVideoMessage";
      e.textContent = d.message;
      document.body.prepend(e);
      document.body.classList.add("exportingToVideo");
      this.s.I.style.display = "";
      this.s.ne(d.duration)
    });
    b.C("runtime", "export-to-video-progress", d => Ta(this, d));
    b.C("runtime", "exported-to-video", d => {
      window.Pe({
        type: "exported-video",
        blob: d.blob,
        time: d.time
      })
    });
    b.C("runtime", "exported-to-image-sequence", d => {
      window.Pe({
        type: "exported-image-sequence",
        blobArr: d.blobArr,
        time: d.time,
        gif: d.gif
      })
    });
    const a = new Set(["input", "textarea", "datalist"]);
    window.addEventListener("contextmenu", d => {
      const e = d.target;
      a.has(e.tagName.toLowerCase()) || Ea(e) || d.preventDefault()
    });
    const c = b.I;
    window.addEventListener("selectstart", L);
    window.addEventListener("gesturehold", L);
    c.addEventListener("selectstart", L);
    c.addEventListener("gesturehold", L);
    window.addEventListener("touchstart",
      L, {
        passive: !1
      });
    "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", L, {
      passive: !1
    }), c.addEventListener("pointerdown", L)) : c.addEventListener("touchstart", L);
    this.vb = 0;
    window.addEventListener("mousedown", d => {
      1 === d.button && d.preventDefault()
    });
    window.addEventListener("mousewheel", Ha, {
      passive: !1
    });
    window.addEventListener("wheel", Ha, {
      passive: !1
    });
    window.addEventListener("resize", () => {
      a: {
        if (!this.$ && this.ud) {
          var d = this.oa();
          var e = this.ha();
          if (this.s.dd()) {
            if (this.td) {
              if (this.Oc === d &&
                e < this.qb) {
                this.zb = this.qb - e;
                ab(this, this.qb, this.zb);
                d = void 0;
                break a
              }
              0 < this.zb && (this.zb = 0, ab(this, e, this.zb))
            }
            this.Oc = d;
            this.qb = e
          }
          l(this, "window-resize", {
            innerWidth: d,
            innerHeight: e,
            devicePixelRatio: window.devicePixelRatio,
            isFullscreen: I.gb()
          });
          this.s.nc() && (-1 !== this.$a && clearTimeout(this.$a), bb(this, d, e, 0))
        }
        d = void 0
      }
      return d
    });
    window.addEventListener("fullscreenchange", () => M(this));
    window.addEventListener("webkitfullscreenchange", () => M(this));
    window.addEventListener("mozfullscreenchange", () =>
      M(this));
    window.addEventListener("fullscreenerror", d => Va(this, d));
    window.addEventListener("webkitfullscreenerror", d => Va(this, d));
    window.addEventListener("mozfullscreenerror", d => Va(this, d));
    if (b.nc())
      if (window.visualViewport) {
        let d = Infinity;
        window.visualViewport.addEventListener("resize", () => {
          const e = window.visualViewport.height;
          e > d && (document.scrollingElement.scrollTop = 0);
          d = e
        })
      } else window.addEventListener("focusout", () => {
        {
          const f = document.activeElement;
          if (f) {
            var d = f.tagName.toLowerCase();
            var e = new Set("email number password search tel text url".split(" "));
            d = "textarea" === d ? !0 : "input" === d ? e.has(f.type.toLowerCase() || "text") : Ea(f)
          } else d = !1
        }
        d || (document.scrollingElement.scrollTop = 0)
      });
    self.C3WrapperOnMessage = d => {
      "entered-fullscreen" === d ? (I.Ib(!0), M(this)) : "exited-fullscreen" === d ? (I.Ib(!1), M(this)) : console.warn("Unknown wrapper message: ", d)
    };
    this.Ta = new Set;
    this.Vb = new WeakSet;
    this.va = !1
  }
  Zc() {
    window.addEventListener("focus", () => {
      l(this, "window-focus", null, za)
    });
    window.addEventListener("blur", () => {
      try {
        var a = window.parent && window.parent.document.hasFocus()
      } catch (c) {
        a = !1
      }
      l(this, "window-blur", {
        parentHasFocus: a
      }, za);
      this.vb = 0
    });
    window.addEventListener("focusin", a => {
      a = a.target;
      (Fa.has(a.tagName.toLowerCase()) || Ea(a)) && l(this, "keyboard-blur", null, za)
    });
    window.addEventListener("keydown", a => Wa(this, "keydown", a));
    window.addEventListener("keyup", a => Wa(this, "keyup", a));
    window.addEventListener("dblclick", a => Xa(this, "dblclick", a, J));
    window.addEventListener("wheel", a => {
      this.$ || l(this, "wheel", {
        clientX: a.clientX,
        clientY: a.clientY + this.da,
        pageX: a.pageX,
        pageY: a.pageY + this.da,
        deltaX: a.deltaX,
        deltaY: a.deltaY,
        deltaZ: a.deltaZ,
        deltaMode: a.deltaMode,
        timeStamp: a.timeStamp
      }, J)
    });
    "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", a => {
      Ya(a);
      N(this, "pointerdown", a)
    }), this.s.ca && "undefined" !== typeof window.onpointerrawupdate && self === self.top ? window.addEventListener("pointerrawupdate", a => {
      N(this, "pointermove", a)
    }) : window.addEventListener("pointermove", a => N(this, "pointermove", a)), window.addEventListener("pointerup", a => N(this, "pointerup", a)), window.addEventListener("pointercancel",
      a => N(this, "pointercancel", a))) : (window.addEventListener("mousedown", a => {
      Ya(a);
      $a(this, "pointerdown", a)
    }), window.addEventListener("mousemove", a => $a(this, "pointermove", a)), window.addEventListener("mouseup", a => $a(this, "pointerup", a)), window.addEventListener("touchstart", a => {
      Ya(a);
      O(this, "pointerdown", a)
    }), window.addEventListener("touchmove", a => O(this, "pointermove", a)), window.addEventListener("touchend", a => O(this, "pointerup", a)), window.addEventListener("touchcancel", a => O(this, "pointercancel", a)));
    const b =
      () => this.zc();
    window.addEventListener("pointerup", b, !0);
    window.addEventListener("touchend", b, !0);
    window.addEventListener("click", b, !0);
    window.addEventListener("keydown", b, !0);
    window.addEventListener("gamepadconnected", b, !0);
    this.s.ie() && !this.s.dd() && navigator.virtualKeyboard && (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange", () => {
      ab(this, this.ha(), navigator.virtualKeyboard.boundingRect.height)
    }))
  }
  oa() {
    return this.s.oa()
  }
  ha() {
    return this.s.ha()
  }
  zc() {
    var b = [...this.Ta];
    this.Ta.clear();
    if (!this.va)
      for (const a of b)(b = a.play()) && b.catch(() => {
        this.Vb.has(a) || this.Ta.add(a)
      })
  }
  Ca(b) {
    if ("function" !== typeof b.play) throw Error("missing play function");
    this.Vb.delete(b);
    let a;
    try {
      a = b.play()
    } catch (c) {
      this.Ta.add(b);
      return
    }
    a && a.catch(() => {
      this.Vb.has(b) || this.Ta.add(b)
    })
  }
  La(b) {
    this.Ta.delete(b);
    this.Vb.add(b)
  }
  Fb(b) {
    this.va = !!b
  }
  wc(b) {
    alert(b.message)
  }
});
"use strict";
async function ra(b) {
  if (b.Ie) throw Error("already initialised");
  b.Ie = !0;
  var a = b.ya.tc(("playable-ad" === b.ya.v ? b.ya.Za : "") + "dispatchworker.js");
  b.Fc = await b.ya.ic(a, b.jb, {
    name: "DispatchWorker"
  });
  a = new MessageChannel;
  b.Kc = a.port1;
  b.Fc.postMessage({
    type: "_init",
    "in-port": a.port2
  }, [a.port2]);
  b.Rc = await va(b)
}

function sa(b) {
  return [b.Kc, b.Rc]
}
async function va(b) {
  const a = b.Dd.length;
  var c = b.ya.tc(("playable-ad" === b.ya.v ? b.ya.Za : "") + "jobworker.js");
  c = await b.ya.ic(c, b.jb, {
    name: "JobWorker" + a
  });
  const d = new MessageChannel,
    e = new MessageChannel;
  b.Fc.postMessage({
    type: "_addJobWorker",
    port: d.port1
  }, [d.port1]);
  c.postMessage({
    type: "init",
    number: a,
    "dispatch-port": d.port2,
    "output-port": e.port2
  }, [d.port2, e.port2]);
  b.Dd.push(c);
  return e.port1
}
self.le = class {
  constructor(b) {
    this.ya = b;
    this.jb = b.ba;
    this.jb = "preview" === b.v ? this.jb + "workers/" : this.jb + b.Za;
    this.Le = Math.min(navigator.hardwareConcurrency || 2, 16);
    this.Fc = null;
    this.Dd = [];
    this.Rc = this.Kc = null
  }
};
"use strict";
window.C3_IsSupported && (window.c3_runtimeInterface = new self.ua({
  Ze: !0,
  $e: "workermain.js",
  ab: ["scripts/c3runtime.js"],
  ec: [],
  Xc: "",
  We: "scripts/",
  fc: [],
  Qd: "html5"
}));
"use strict";
async function eb(b, a) {
  a = a.type;
  let c = !0;
  0 === a ? c = await fb() : 1 === a && (c = await gb());
  l(b, "permission-result", {
    type: a,
    result: c
  })
}
async function fb() {
  if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
  try {
    return "granted" === await self.DeviceOrientationEvent.requestPermission()
  } catch (b) {
    return console.warn("[Touch] Failed to request orientation permission: ", b), !1
  }
}
async function gb() {
  if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
  try {
    return "granted" === await self.DeviceMotionEvent.requestPermission()
  } catch (b) {
    return console.warn("[Touch] Failed to request motion permission: ", b), !1
  }
}
self.ua.bb(class extends self.Ja {
  constructor(b) {
    super(b, "touch");
    n(this, "request-permission", a => eb(this, a))
  }
});
"use strict";

function hb() {}

function ib(b) {
  window.C3_RegisterSW && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(a => l(b, "sw-message", a.data))
}

function jb(b) {
  b = b.orientation;
  if (screen.orientation && screen.orientation.lock) screen.orientation.lock(b).catch(a => console.warn("[Construct] Failed to lock orientation: ", a));
  else try {
    let a = !1;
    screen.lockOrientation ? a = screen.lockOrientation(b) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(b) : screen.mozLockOrientation ? a = screen.mozLockOrientation(b) : screen.msLockOrientation && (a = screen.msLockOrientation(b));
    a || console.warn("[Construct] Failed to lock orientation")
  } catch (a) {
    console.warn("[Construct] Failed to lock orientation: ",
      a)
  }
}
self.ua.bb(class extends self.Ja {
  constructor(b) {
    super(b, "browser");
    this.v = "";
    t(this, [
      ["get-initial-state", a => {
        this.v = a.exportType;
        return {
          location: location.toString(),
          isOnline: !!navigator.onLine,
          referrer: document.referrer,
          title: document.title,
          isCookieEnabled: !!navigator.cookieEnabled,
          screenWidth: screen.width,
          screenHeight: screen.height,
          windowOuterWidth: window.outerWidth,
          windowOuterHeight: window.outerHeight,
          isConstructArcade: "undefined" !== typeof window.is_scirra_arcade
        }
      }],
      ["ready-for-sw-messages", () =>
        ib(this)
      ],
      ["alert", a => this.wc(a)],
      ["close", () => {
        navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : window.close()
      }],
      ["set-focus", a => this.yc(a)],
      ["vibrate", a => {
        navigator.vibrate && navigator.vibrate(a.pattern)
      }],
      ["lock-orientation", a => jb(a)],
      ["unlock-orientation", () => {
        try {
          screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ?
            screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
        } catch (a) {}
      }],
      ["navigate", a => {
        var c = a.type;
        if ("back" === c) navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : window.history.back();
        else if ("forward" === c) window.history.forward();
        else if ("reload" === c) location.reload();
        else if ("url" === c) {
          c = a.url;
          const d = a.target;
          a = a.exportType;
          self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(c,
            "_system") : "preview" === a || "windows-webview2" === a ? window.open(c, "_blank") : this.ff || (2 === d ? window.top.location = c : 1 === d ? window.parent.location = c : window.location = c)
        } else "new-window" === c && (c = a.url, a = a.tag, self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(c, "_system") : window.open(c, a))
      }],
      ["request-fullscreen", a => {
        if ("windows-webview2" === this.v || "macos-wkwebview" === this.v) self.ua.Ib(!0), this.s.Bc({
          type: "set-fullscreen",
          fullscreen: !0
        });
        else {
          const c = {
            navigationUI: "auto"
          };
          a = a.navUI;
          1 ===
            a ? c.navigationUI = "hide" : 2 === a && (c.navigationUI = "show");
          a = document.documentElement;
          let d;
          a.requestFullscreen ? d = a.requestFullscreen(c) : a.mozRequestFullScreen ? d = a.mozRequestFullScreen(c) : a.msRequestFullscreen ? d = a.msRequestFullscreen(c) : a.webkitRequestFullScreen && (d = "undefined" !== typeof Element.ALLOW_KEYBOARD_INPUT ? a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : a.webkitRequestFullScreen());
          d instanceof Promise && d.catch(hb)
        }
      }],
      ["exit-fullscreen", () => {
        if ("windows-webview2" === this.v || "macos-wkwebview" ===
          this.v) self.ua.Ib(!1), this.s.Bc({
          type: "set-fullscreen",
          fullscreen: !1
        });
        else {
          let a;
          document.exitFullscreen ? a = document.exitFullscreen() : document.mozCancelFullScreen ? a = document.mozCancelFullScreen() : document.msExitFullscreen ? a = document.msExitFullscreen() : document.webkitCancelFullScreen && (a = document.webkitCancelFullScreen());
          a instanceof Promise && a.catch(hb)
        }
      }],
      ["set-hash", a => {
        location.hash = a.hash
      }],
      ["set-document-css-style", a => {
        const c = a.prop,
          d = a.value;
        var e = a.selector;
        a = a["is-all"];
        try {
          if (e)
            if (a) var f =
              Array.from(document.querySelectorAll(e));
            else {
              var g = document.querySelector(e);
              f = g ? [g] : []
            }
          else f = [document.documentElement];
          e = f;
          for (const h of e) c.startsWith("--") ? h.style.setProperty(c, d) : h.style[c] = d
        } catch (h) {
          console.warn("[Browser] Failed to set style: ", h)
        }
      }],
      ["get-document-css-style", a => {
        {
          const d = a.prop;
          a = a.selector;
          try {
            const e = document.querySelector(a);
            var c = e ? {
              isOk: !0,
              result: window.getComputedStyle(e).getPropertyValue(d)
            } : {
              isOk: !1
            }
          } catch (e) {
            console.warn("[Browser] Failed to get style: ", e),
              c = {
                isOk: !1
              }
          }
        }
        return c
      }]
    ]);
    window.addEventListener("online", () => {
      l(this, "online-state", {
        isOnline: !0
      })
    });
    window.addEventListener("offline", () => {
      l(this, "online-state", {
        isOnline: !1
      })
    });
    window.addEventListener("hashchange", () => {
      l(this, "hashchange", {
        location: location.toString()
      })
    });
    document.addEventListener("backbutton", () => {
      l(this, "backbutton")
    })
  }
  wc(b) {
    alert(b.message)
  }
  yc(b) {
    b = b.isFocus;
    if ("nwjs" === this.v) {
      const a = "nwjs" === this.v ? nw.Window.get() : null;
      b ? a.focus() : a.blur()
    } else b ? window.focus() : window.blur()
  }
});
"use strict";
const kb = 180 / Math.PI;
async function lb(b, a) {
  if (a.isiOSCordova || a.isSafari) b.Yb = !0;
  b.Vc = a.timeScaleMode;
  b.Id = ["equalpower", "HRTF", "soundfield"][a.panningModel];
  b.rd = ["linear", "inverse", "exponential"][a.distanceModel];
  b.Jd = a.refDistance;
  b.Hd = a.maxDistance;
  b.Ld = a.rolloffFactor;
  if (b.s.Lc) b.Yb = !0, b.g = new OfflineAudioContext({
    numberOfChannels: 2,
    sampleRate: 48E3,
    length: Math.ceil(48E3 * b.s.vd)
  });
  else {
    var c = {
      latencyHint: a.latencyHint
    };
    b.Od || (c.sampleRate = 48E3);
    if ("undefined" !== typeof AudioContext) b.g = new AudioContext(c);
    else if ("undefined" !==
      typeof webkitAudioContext) b.g = new webkitAudioContext(c);
    else throw Error("Web Audio API not supported");
    mb(b);
    b.g.onstatechange = () => {
      "running" !== b.g.state && mb(b);
      l(b, "audiocontext-state", {
        audioContextState: b.g.state
      })
    }
  }
  b.Pa = b.g.createGain();
  b.Pa.connect(b.g.destination);
  c = a.listenerPos;
  b.aa[0] = c[0];
  b.aa[1] = c[1];
  b.aa[2] = c[2];
  b.g.listener.setPosition(c[0], c[1], c[2]);
  b.g.listener.setOrientation(...b.ea);
  self.C3_GetAudioContextCurrentTime = () => b.g.currentTime;
  try {
    await Promise.all(a.preloadList.map(d =>
      P(b, d.originalUrl, d.url, d.type, !1)))
  } catch (d) {
    console.error("[Construct] Preloading sounds failed: ", d)
  }
  return {
    sampleRate: b.g.sampleRate,
    audioContextState: b.g.state,
    outputLatency: b.g.outputLatency || 0
  }
}
async function nb(b, a) {
  var c = a.originalUrl,
    d = a.url;
  const e = a.type,
    f = a.isMusic,
    g = a.tags,
    h = a.isLooping,
    k = a.vol,
    p = a.pos,
    q = a.panning,
    A = a.stereoPan;
  let x = a.off;
  0 < x && !a.trueClock && (b.g.getOutputTimestamp ? (a = b.g.getOutputTimestamp(), x = x - a.performanceTime / 1E3 + a.contextTime) : x = x - performance.now() / 1E3 + b.g.currentTime);
  b.Ed = g.slice(0);
  ob(b, g);
  try {
    b.R = await pb(b, c, d, e, g, f);
    if (q) {
      Q(b.R, !0);
      var r = b.R,
        B = q.innerAngle,
        la = q.outerAngle,
        ma = q.outerGain;
      if (r.ob) {
        qb(r, q.x, q.y, q.z, q.angle);
        var D = self.cb.oe;
        r.ra[0] !== D(B) &&
          (r.ra[0] = D(B), r.F.coneInnerAngle = D(B));
        r.ra[1] !== D(la) && (r.ra[1] = D(la), r.F.coneOuterAngle = D(la));
        r.ra[2] !== ma && (r.ra[2] = ma, r.F.coneOuterGain = ma)
      }
      q.hasOwnProperty("uid") && (b.R.pa = q.uid)
    } else "number" === typeof A && 0 !== A ? (R(b.R, !0), rb(b.R, A)) : (Q(b.R, !1), R(b.R, !1));
    b.R.Play(h, k, p, x)
  } catch (Db) {
    console.error("[Construct] Audio: error starting playback: ", Db);
    return
  } finally {
    c = g.join(" ");
    d = b.xb.get(c);
    if (!d) throw Error("expected pending tag");
    d.Yc--;
    0 === d.Yc && (d.resolve(), b.xb.delete(c))
  }
  u(b)
}
async function sb(b, a) {
  var c = a.tags;
  const d = a.vol,
    e = a.duration;
  a = a.stopOnEnd;
  await tb(b, c);
  for (const q of S(b, c)) {
    c = q;
    var f = d,
      g = e,
      h = a;
    if (!c.Ra) {
      var k = c.G.gain;
      k.cancelScheduledValues(0);
      var p = c.u.g.currentTime;
      g = p + g;
      k.setValueAtTime(k.value, p);
      k.linearRampToValueAtTime(f, g);
      c.Ia = f;
      c.Qa = g;
      c.Nd = h
    }
  }
  T(b)
}
async function ub(b, a) {
  const c = a.tags;
  a = a.rate;
  await tb(b, c);
  for (const d of S(b, c)) b = d, b.la !== a && (b.la = a, b.Da())
}
async function vb(b, a) {
  const c = a.tags;
  a = a.pos;
  await tb(b, c);
  for (const d of S(b, c)) d.oc(a)
}
async function wb(b, a) {
  const c = a.originalUrl,
    d = a.url,
    e = a.type;
  a = a.isMusic;
  try {
    await pb(b, c, d, e, "", a)
  } catch (f) {
    console.error("[Construct] Audio: error preloading: ", f)
  }
}
async function xb(b, a) {
  if (a = await P(b, "", a.url, a.type, a.isMusic, !0)) a.j(), a = b.ja.indexOf(a), -1 !== a && b.ja.splice(a, 1)
}
async function yb(b, a) {
  const c = a.type;
  var d = a.tags;
  const e = a.params;
  let f;
  if ("convolution" === c) try {
    f = await P(b, a.bufferOriginalUrl, a.bufferUrl, a.bufferType, !1)
  } catch (k) {
    console.log("[Construct] Audio: error loading convolution: ", k);
    return
  }
  for (const k of d) {
    if ("filter" === c) d = new self.Wd(b, ...e);
    else if ("delay" === c) d = new self.Ud(b, ...e);
    else if ("convolution" === c) {
      var g = d = new self.Td(b, f.ia, ...e),
        h = a.bufferType;
      g.pd = a.bufferOriginalUrl;
      g.qd = h
    } else if ("flanger" === c) d = new self.Xd(b, ...e);
    else if ("phaser" ===
      c) d = new self.Zd(b, ...e);
    else if ("gain" === c) d = new self.Yd(b, ...e);
    else if ("stereopan" === c) d = new self.ae(b, ...e);
    else if ("tremolo" === c) d = new self.be(b, ...e);
    else if ("ringmod" === c) d = new self.$d(b, ...e);
    else if ("distortion" === c) d = new self.Vd(b, ...e);
    else if ("compressor" === c) d = new self.Sd(b, ...e);
    else if ("analyser" === c) d = new self.Rd(b, ...e);
    else throw Error("invalid effect type");
    g = b;
    h = k;
    h = h.toLowerCase();
    let p = g.ka.get(h);
    p || (p = [], g.ka.set(h, p));
    d.Bd = p.length;
    d.Tc = h;
    p.push(d);
    zb(g, h)
  }
  Ab(b)
}
async function Bb(b, a) {
  const c = a.saveLoadMode;
  if (3 !== c) {
    var d = [];
    for (var e of b.H) e.Aa() && 1 === c || !e.Aa() && 2 === c ? d.push(e) : e.j();
    b.H = d
  }
  for (const f of b.ka.values())
    for (const g of f) g.j();
  b.ka.clear();
  b.cc = a.timeScale;
  b.Hc = a.gameTime;
  d = a.listenerPos;
  b.aa[0] = d[0];
  b.aa[1] = d[1];
  b.aa[2] = d[2];
  b.g.listener.setPosition(d[0], d[1], d[2]);
  d = a.listenerOrientation;
  if (Array.isArray(d)) {
    for (e = 0; 6 > e; ++e) b.ea[e] = d[e];
    b.g.listener.setOrientation(...b.ea)
  }
  b.va = a.isSilent;
  b.s.Fb(b.va);
  b.Ub = a.masterVolume;
  b.Pa.gain.value =
    b.Ub;
  d = [];
  for (const f of Object.values(a.effects)) d.push(Promise.all(f.map(g => yb(b, g))));
  await Promise.all(d);
  await Promise.all(a.playing.map(f => Cb(b, f, c)));
  T(b)
}
async function Eb(b, a) {
  try {
    const c = b.g.suspend(a.time);
    b.Ad ? b.g.resume() : (b.g.startRendering().then(d => {
      const e = [];
      for (let f = 0, g = d.numberOfChannels; f < g; ++f) {
        const h = d.getChannelData(f);
        e.push(h.buffer)
      }
      b.s.Db("runtime", "offline-audio-render-completed", {
        duration: d.duration,
        length: d.length,
        numberOfChannels: d.numberOfChannels,
        sampleRate: d.sampleRate,
        channelData: e
      }, null, e)
    }).catch(d => Fb(d)), b.Ad = !0);
    await c
  } catch (c) {
    Fb(c)
  }
}

function mb(b) {
  b.Ob || (b.Jc = !1, window.addEventListener("pointerup", b.za, !0), window.addEventListener("touchend", b.za, !0), window.addEventListener("click", b.za, !0), window.addEventListener("keydown", b.za, !0), b.Ob = !0)
}
async function P(b, a, c, d, e, f) {
  for (var g of b.ja)
    if (g.fb() === c) return await Gb(g), g;
  if (f) return null;
  if (e && (b.Yb || b.zd)) {
    f = 0;
    for (let h = 0, k = b.ja.length; h < k; ++h) g = b.ja[h], b.ja[f] = g, g.Aa() ? g.j() : ++f;
    b.ja.length = f
  }
  f = "audio/webm; codecs=opus" === d && !b.Od;
  e && f && (b.zd = !0);
  c = !e || b.Yb || f ? new self.ee(b, a, c, d, e, f) : new self.ce(b, a, c, d, e);
  b.ja.push(c);
  await Gb(c);
  b.Gd.has(a) || (l(b, "buffer-metadata", {
    originalUrl: a,
    duration: c.ga()
  }), b.Gd.add(a));
  return c
}

function Hb(b, a) {
  return b === a || b.normalize().toLowerCase() === a.normalize().toLowerCase()
}

function Ib(b, a) {
  return (a = b.ka.get(a.toLowerCase())) ? a[0].N() : b.na()
}

function zb(b, a) {
  a = a.toLowerCase();
  let c = b.na();
  var d = b.ka.get(a);
  if (d && d.length) {
    c = d[0].N();
    for (let f = 0, g = d.length; f < g; ++f) {
      var e = d[f];
      f + 1 === g ? e.U(b.na()) : e.U(d[f + 1].N())
    }
  }
  for (const f of Jb(b, a)) d = c, e = f.fa || f.F || f.G, e.disconnect(), e.connect(d);
  b.Ga && b.Pc === a && (b.Ga.disconnect(), b.Ga.connect(c))
}

function* Jb(b, a) {
  if (a)
    for (const c of b.H) Hb(0 < c.ma.length ? c.ma[0] : "", a) && (yield c);
  else b.R && !b.R.O() && (yield b.R)
}

function Kb(b, a, c) {
  return c ? b.s.He(a).then(d => {
    const e = b.g.createBuffer(1, d.length, 48E3);
    e.getChannelData(0).set(d);
    return e
  }) : new Promise((d, e) => {
    b.g.decodeAudioData(a, d, e)
  })
}

function Lb(b, a) {
  let c = 0;
  for (let d = 0, e = b.H.length; d < e; ++d) {
    const f = b.H[d];
    b.H[c] = f;
    f.P === a ? f.j() : ++c
  }
  b.H.length = c
}

function* S(b, a) {
  if (0 < a.length)
    for (const d of b.H) {
      a: {
        b = d.ma;
        var c = a;
        for (const e of c) {
          c = !1;
          for (const f of b)
            if (Hb(f, e)) {
              c = !0;
              break
            } if (!c) {
            b = !1;
            break a
          }
        }
        b = !0
      }
      b && (yield d)
    }
  else b.R && !b.R.O() && (yield b.R)
}
async function pb(b, a, c, d, e, f) {
  for (const g of b.H)
    if (g.fb() === c && (g.hc() || f)) return g.ma = e, g;
  a = await P(b, a, c, d, f);
  e = "html5" === a.Cc ? new self.de(a.u, a, e) : new self.fe(a.u, a, e);
  b.H.push(e);
  return e
}

function ob(b, a) {
  a = a.join(" ");
  let c = b.xb.get(a);
  if (!c) {
    let d = null;
    c = {
      Yc: 0,
      promise: new Promise(e => d = e),
      resolve: d
    };
    b.xb.set(a, c)
  }
  c.Yc++
}

function tb(b, a) {
  return (b = b.xb.get((0 === a.length ? b.Ed : a).join(" "))) ? b.promise : Promise.resolve()
}

function T(b) {
  if (0 < b.Oa.size) u(b);
  else
    for (const a of b.H)
      if (!a.J && !a.O()) {
        u(b);
        break
      }
}

function Mb(b, a, c, d) {
  l(b, "trigger", {
    type: a,
    tags: c,
    aiid: d
  })
}

function Ab(b) {
  b.Mc || (b.Mc = !0, Promise.resolve().then(() => Nb(b)))
}

function Nb(b) {
  const a = {};
  for (const [c, d] of b.ka) a[c] = d.map(e => e.eb());
  l(b, "fxstate", {
    fxstate: a
  });
  b.Mc = !1
}
async function Cb(b, a, c) {
  if (3 !== c) {
    var d = a.bufferOriginalUrl,
      e = a.bufferUrl,
      f = a.bufferType,
      g = a.isMusic,
      h = a.tags,
      k = a.isLooping,
      p = a.volume,
      q = a.playbackTime;
    if (!g || 1 !== c)
      if (g || 2 !== c) {
        c = null;
        try {
          c = await pb(b, d, e, f, h, g)
        } catch (A) {
          console.error("[Construct] Audio: error loading audio state: ", A);
          return
        }
        b = c;
        (d = a.pan) ? (Q(b, !0), e = b.F, f = d.pos, b.Va[0] = f[0], b.Va[1] = f[1], b.Va[2] = f[2], f = d.orient, b.Ua[0] = f[0], b.Ua[1] = f[1], b.Ua[2] = f[2], e.setPosition(...b.Va), e.setOrientation(...b.Ua), b.ra[0] = d.cia, b.ra[1] = d.coa, b.ra[2] =
          d.cog, e.coneInnerAngle = d.cia, e.coneOuterAngle = d.coa, e.coneOuterGain = d.cog, b.pa = d.uid) : Q(b, !1);
        b = c;
        d = a.stereoPan;
        "number" !== typeof d ? R(b, !1) : (R(b, !0), rb(b, d));
        c.Play(k, p, q, 0);
        a.isPlaying || c.hb();
        c.vc(a)
      }
  }
}

function Fb(b) {
  console.error("[Audio] Offline rendering error: ", b)
}
self.cb = class extends self.Ja {
  constructor(b) {
    super(b, "audio");
    this.Pa = this.g = null;
    this.Ob = this.Jc = !1;
    this.za = () => {
      if (!this.Jc) {
        var a = this.g;
        "suspended" === a.state && a.resume && a.resume();
        var c = a.createBuffer(1, 220, 22050),
          d = a.createBufferSource();
        d.buffer = c;
        d.connect(a.destination);
        d.start(0);
        "running" === a.state && this.Ob && (this.Jc = !0, window.removeEventListener("pointerup", this.za, !0), window.removeEventListener("touchend", this.za, !0), window.removeEventListener("click", this.za, !0), window.removeEventListener("keydown",
          this.za, !0), this.Ob = !1)
      }
    };
    this.ja = [];
    this.H = [];
    this.R = null;
    this.Ed = [];
    this.Gd = new Set;
    this.Fd = -1;
    this.xb = new Map;
    this.Ub = 1;
    this.va = !1;
    this.Vc = 0;
    this.cc = 1;
    this.Hc = 0;
    this.Id = "HRTF";
    this.rd = "inverse";
    this.Jd = 600;
    this.Hd = 1E4;
    this.Ld = 1;
    this.aa = [0, 0, 0];
    this.ea = [0, 0, -1, 0, 1, 0];
    this.zd = this.Yb = !1;
    this.Od = this.s.je();
    this.ka = new Map;
    this.Oa = new Set;
    this.Ad = this.Mc = !1;
    this.Pc = "";
    this.Ga = null;
    self.C3Audio_OnMicrophoneStream = (a, c) => {
      this.Ga && this.Ga.disconnect();
      this.Pc = c.toLowerCase();
      this.Ga = this.g.createMediaStreamSource(a);
      this.Ga.connect(Ib(this, this.Pc))
    };
    this.Lb = null;
    self.C3Audio_GetOutputStream = () => {
      this.Lb || (this.Lb = this.g.createMediaStreamDestination(), this.Pa.connect(this.Lb));
      return this.Lb.stream
    };
    self.C3Audio_DOMInterface = this;
    t(this, [
      ["create-audio-context", a => lb(this, a)],
      ["play", a => nb(this, a)],
      ["stop", a => {
        a = a.tags;
        for (const c of S(this, a)) c.Ba()
      }],
      ["stop-all", () => {
        for (const a of this.H) a.Ba()
      }],
      ["set-paused", a => {
        const c = a.tags;
        a = a.paused;
        for (const d of S(this, c)) a ? d.hb() : d.Eb();
        T(this)
      }],
      ["set-volume", a => {
        const c = a.tags;
        a = a.vol;
        for (const d of S(this, c)) U(d, a)
      }],
      ["fade-volume", a => sb(this, a)],
      ["set-master-volume", a => {
        this.Ub = a.vol;
        this.Pa.gain.value = this.Ub
      }],
      ["set-muted", a => {
        const c = a.tags;
        a = a.isMuted;
        for (const d of S(this, c)) Ob(d, a)
      }],
      ["set-silent", a => {
        this.va = a.isSilent;
        this.s.Fb(this.va);
        for (const c of this.H) c.Jb()
      }],
      ["set-looping", a => {
        const c = a.tags;
        a = a.isLooping;
        for (const d of S(this, c)) d.pc(a)
      }],
      ["set-playback-rate", a => ub(this, a)],
      ["set-stereo-pan", a => {
        const c = a.tags;
        a = a.p;
        for (const d of S(this,
            c)) R(d, !0), rb(d, a)
      }],
      ["seek", a => vb(this, a)],
      ["preload", a => wb(this, a)],
      ["unload", a => xb(this, a)],
      ["unload-all", () => {
        for (const a of this.ja) a.j();
        this.ja.length = 0
      }],
      ["set-suspended", a => {
        a = a.isSuspended;
        !a && this.g.resume && this.g.resume();
        for (const c of this.H) c.qc(a);
        a && this.g.suspend && this.g.suspend()
      }],
      ["add-effect", a => yb(this, a)],
      ["set-effect-param", a => {
        var c = a.tags;
        const d = a.index,
          e = a.param,
          f = a.value,
          g = a.ramp;
        a = a.time;
        for (const h of c) c = this.ka.get(h.toLowerCase()), !c || 0 > d || d >= c.length || c[d].Z(e,
          f, g, a);
        Ab(this)
      }],
      ["remove-effects", a => {
        a = a.tags;
        for (const c of a) {
          a = c.toLowerCase();
          const d = this.ka.get(a);
          if (!d || !d.length) break;
          for (const e of d) e.j();
          this.ka.delete(a);
          zb(this, a)
        }
      }],
      ["tick", a => {
        this.cc = a.timeScale;
        this.Hc = a.gameTime;
        this.Fd = a.tickCount;
        if (0 !== this.Vc)
          for (var c of this.H) c.Da();
        !(c = a.listenerPos) || this.aa[0] === c[0] && this.aa[1] === c[1] && this.aa[2] === c[2] || (this.aa[0] = c[0], this.aa[1] = c[1], this.aa[2] = c[2], this.g.listener.setPosition(c[0], c[1], c[2]));
        if ((c = a.listenerOrientation) && (this.ea[0] !==
            c[0] || this.ea[1] !== c[1] || this.ea[2] !== c[2] || this.ea[3] !== c[3] || this.ea[4] !== c[4] || this.ea[5] !== c[5])) {
          for (let d = 0; 6 > d; ++d) this.ea[d] = c[d];
          this.g.listener.setOrientation(...this.ea)
        }
        for (const d of a.instPans) {
          a = d.uid;
          for (const e of this.H) e.pa === a && qb(e, d.x, d.y, d.z, d.angle)
        }
      }],
      ["load-state", a => Bb(this, a)],
      ["offline-render-audio", a => Eb(this, a)],
      ["offline-render-finish", () => {
        this.g.resume()
      }]
    ])
  }
  W() {
    return this.g
  }
  na() {
    return this.Pa
  }
  Cb() {
    return this.va
  }
  Ca(b) {
    this.s.Ca(b)
  }
  La(b) {
    this.s.La(b)
  }
  Ma() {
    for (var b of this.Oa) b.Ma();
    b = this.g.currentTime;
    for (var a of this.H) a.Ma(b);
    a = this.H.filter(c => !c.J && !c.O()).map(c => c.eb());
    l(this, "state", {
      tickCount: this.Fd,
      outputLatency: this.g.outputLatency || 0,
      audioInstances: a,
      analysers: [...this.Oa].map(c => ({
        tag: c.Tc,
        index: c.Bd,
        peak: c.Wa,
        rms: c.Kd,
        binCount: c.l.frequencyBinCount,
        freqBins: c.xd
      }))
    });
    0 === a.length && 0 === this.Oa.size && this.Pb && (this.s.Ge(this.Pd), this.Pb = !1)
  }
  static oe(b) {
    return b * kb
  }
  static cd(b) {
    return Math.max(Math.min(Math.pow(10, b / 20), 1), 0)
  }
  static me(b) {
    return Math.log(Math.max(Math.min(b,
      1), 0)) / Math.log(10) * 20
  }
};
self.ua.bb(self.cb);
"use strict";

function Gb(b) {
  b.Sb || (b.Sb = b.uc());
  return b.Sb
}
self.$c = class {
  constructor(b, a, c, d, e) {
    this.u = b;
    this.Ne = a;
    this.Ha = c;
    this.T = d;
    this.Je = e;
    this.Cc = "";
    this.Sb = null
  }
  j() {
    this.Sb = this.u = null
  }
  uc() {}
  W() {
    return this.u.W()
  }
  kc() {
    return this.Ne
  }
  fb() {
    return this.Ha
  }
  jc() {
    return this.T
  }
  Aa() {
    return this.Je
  }
  ga() {}
};
"use strict";
self.ce = class extends self.$c {
  constructor(b, a, c, d, e) {
    super(b, a, c, d, e);
    this.Cc = "html5";
    this.M = new Audio;
    this.M.crossOrigin = "anonymous";
    this.M.autoplay = !1;
    this.M.preload = "auto";
    this.rb = this.sb = null;
    this.M.addEventListener("canplaythrough", () => !0);
    this.wb = this.W().createGain();
    this.ub = null;
    this.M.addEventListener("canplay", () => {
      this.sb && (this.sb(), this.rb = this.sb = null);
      !this.ub && this.M && (this.ub = this.W().createMediaElementSource(this.M), this.ub.connect(this.wb))
    });
    this.onended = null;
    this.M.addEventListener("ended",
      () => {
        if (this.onended) this.onended()
      });
    this.M.addEventListener("error", f => {
      console.error(`[Construct] Audio '${this.Ha}' error: `, f);
      this.rb && (this.rb(f), this.rb = this.sb = null)
    })
  }
  j() {
    Lb(this.u, this);
    this.wb.disconnect();
    this.wb = null;
    this.ub.disconnect();
    this.ub = null;
    this.M && !this.M.paused && this.M.pause();
    this.M = this.onended = null;
    super.j()
  }
  uc() {
    return new Promise((b, a) => {
      this.sb = b;
      this.rb = a;
      this.M.src = this.Ha
    })
  }
  V() {
    return this.M
  }
  ga() {
    return this.M.duration
  }
};
"use strict";
async function Pb(b) {
  if (b.Ea) return b.Ea;
  var a = b.u.s;
  if ("cordova" === a.v && a.ed(b.Ha) && a.Qb) b.Ea = await a.Bb(b.Ha);
  else {
    a = await fetch(b.Ha);
    if (!a.ok) throw Error(`error fetching audio data: ${a.status} ${a.statusText}`);
    b.Ea = await a.arrayBuffer()
  }
}
async function Qb(b) {
  if (b.ia) return b.ia;
  b.ia = await Kb(b.u, b.Ea, b.Me);
  b.Ea = null
}
self.ee = class extends self.$c {
  constructor(b, a, c, d, e, f) {
    super(b, a, c, d, e);
    this.Cc = "webaudio";
    this.ia = this.Ea = null;
    this.Me = !!f
  }
  j() {
    Lb(this.u, this);
    this.ia = this.Ea = null;
    super.j()
  }
  async uc() {
    try {
      await Pb(this), await Qb(this)
    } catch (b) {
      console.error(`[Construct] Failed to load audio '${this.Ha}': `, b)
    }
  }
  ga() {
    return this.ia ? this.ia.duration : 0
  }
};
"use strict";
let Rb = 0;

function Q(b, a) {
  a = !!a;
  b.ob !== a && (b.ob = a, b.ob ? (R(b, !1), b.F || (b.F = b.W().createPanner(), b.F.panningModel = b.u.Id, b.F.distanceModel = b.u.rd, b.F.refDistance = b.u.Jd, b.F.maxDistance = b.u.Hd, b.F.rolloffFactor = b.u.Ld), b.G.disconnect(), b.G.connect(b.F), b.F.connect(b.na())) : (b.F.disconnect(), b.G.disconnect(), b.G.connect(b.na())))
}

function R(b, a) {
  a = !!a;
  b.Rb !== a && (b.Rb = a, b.Rb ? (Q(b, !1), b.fa = b.W().createStereoPanner(), b.G.disconnect(), b.G.connect(b.fa), b.fa.connect(b.na())) : (b.fa.disconnect(), b.fa = null, b.G.disconnect(), b.G.connect(b.na())))
}

function rb(b, a) {
  b.Rb && b.Sc !== a && (b.fa.pan.value = a, b.Sc = a)
}

function U(b, a) {
  b.Ia = a;
  b.G.gain.cancelScheduledValues(0);
  b.Qa = -1;
  b.G.gain.value = b.lc()
}

function Ob(b, a) {
  a = !!a;
  b.Ra !== a && (b.Ra = a, b.Jb())
}

function qb(b, a, c, d, e) {
  if (b.ob) {
    var f = b.Va,
      g = b.Ua,
      h = Math.cos(e);
    e = Math.sin(e);
    if (f[0] !== a || f[1] !== c || f[2] !== d) f[0] = a, f[1] = c, f[2] = d, b.F.setPosition(...f);
    if (g[0] !== h || g[1] !== e || 0 !== g[2]) g[0] = h, g[1] = e, g[2] = 0, b.F.setOrientation(...g)
  }
}

function V(b) {
  return b.Nc ? b.u.Hc : performance.now() / 1E3
}
self.ad = class {
  constructor(b, a, c) {
    this.u = b;
    this.P = a;
    this.ma = c;
    this.Kb = Rb++;
    this.G = this.W().createGain();
    this.G.connect(this.na());
    this.F = null;
    this.ob = !1;
    this.Va = [0, 0, 0];
    this.Ua = [0, 0, 0];
    this.ra = [0, 0, 0];
    this.fa = null;
    this.Rb = !1;
    this.Sc = 0;
    this.J = !0;
    this.Y = this.sa = this.K = !1;
    this.Ia = 1;
    this.Ra = !1;
    this.la = 1;
    b = this.u.Vc;
    this.Nc = 1 === b && !this.Aa() || 2 === b;
    this.Qa = this.pa = -1;
    this.Nd = !1
  }
  j() {
    this.P = this.u = null;
    this.F && (this.F.disconnect(), this.F = null);
    this.fa && (this.fa.disconnect(), this.fa = null);
    this.G.disconnect();
    this.G = null
  }
  W() {
    return this.u.W()
  }
  na() {
    return Ib(this.u, 0 < this.ma.length ? this.ma[0] : "")
  }
  kc() {
    return this.P.kc()
  }
  fb() {
    return this.P.fb()
  }
  jc() {
    return this.P.jc()
  }
  Aa() {
    return this.P.Aa()
  }
  O() {}
  hc() {}
  IsPlaying() {
    return !this.J && !this.K && !this.O()
  }
  Ka() {}
  ga() {
    return this.P.ga()
  }
  Play() {}
  Ba() {}
  hb() {}
  Eb() {}
  Ma(b) {
    -1 !== this.Qa && b >= this.Qa && (this.Qa = -1, this.Nd && this.Ba(), Mb(this.u, "fade-ended", this.ma, this.Kb))
  }
  lc() {
    const b = this.Ia;
    return isFinite(b) ? b : 0
  }
  Cb() {
    return this.u.Cb()
  }
  Jb() {}
  pc() {}
  Da() {}
  oc() {}
  qc() {}
  mc() {}
  eb() {
    var b =
      this.Kb,
      a = this.ma,
      c = this.ga(),
      d = -1 === this.Qa ? this.Ia : this.G.gain.value,
      e = this.IsPlaying();
    if (this.F) {
      var f = this.F;
      f = {
        pos: this.Va,
        orient: this.Ua,
        cia: f.coneInnerAngle,
        coa: f.coneOuterAngle,
        cog: f.coneOuterGain,
        uid: this.pa
      }
    } else f = null;
    return {
      aiid: b,
      tags: a,
      duration: c,
      volume: d,
      isPlaying: e,
      playbackTime: this.Ka(),
      playbackRate: this.la,
      uid: this.pa,
      bufferOriginalUrl: this.kc(),
      bufferUrl: "",
      bufferType: this.jc(),
      isMusic: this.Aa(),
      isLooping: this.Y,
      isMuted: this.Ra,
      resumePosition: this.mc(),
      pan: f,
      stereoPan: this.fa ?
        this.Sc : null
    }
  }
  vc(b) {
    var a = b.playbackRate;
    this.la !== a && (this.la = a, this.Da());
    Ob(this, b.isMuted)
  }
};
"use strict";
self.de = class extends self.ad {
  constructor(b, a, c) {
    super(b, a, c);
    this.P.wb.connect(this.G);
    this.P.onended = () => this.xc()
  }
  j() {
    this.Ba();
    this.P.wb.disconnect();
    super.j()
  }
  V() {
    return this.P.V()
  }
  xc() {
    this.J = !0;
    this.pa = -1;
    Mb(this.u, "ended", this.ma, this.Kb)
  }
  O() {
    return this.V().ended
  }
  hc() {
    return this.J ? !0 : this.O()
  }
  Ka() {
    let b = this.V().currentTime;
    this.Y || (b = Math.min(b, this.ga()));
    return b
  }
  Play(b, a, c) {
    const d = this.V();
    1 !== d.playbackRate && (d.playbackRate = 1);
    d.loop !== b && (d.loop = b);
    U(this, a);
    d.muted && (d.muted = !1);
    if (d.currentTime !== c) try {
      d.currentTime = c
    } catch (e) {
      console.warn(`[Construct] Exception seeking audio '${this.P.fb()}' to position '${c}': `, e)
    }
    this.u.Ca(d);
    this.K = this.J = !1;
    this.Y = b;
    this.la = 1
  }
  Ba() {
    const b = this.V();
    b.paused || b.pause();
    this.u.La(b);
    this.J = !0;
    this.K = !1;
    this.pa = -1
  }
  hb() {
    if (!(this.K || this.J || this.O())) {
      var b = this.V();
      b.paused || b.pause();
      this.u.La(b);
      this.K = !0
    }
  }
  Eb() {
    !this.K || this.J || this.O() || (this.u.Ca(this.V()), this.K = !1)
  }
  Jb() {
    this.V().muted = this.Ra || this.Cb()
  }
  pc(b) {
    b = !!b;
    this.Y !== b && (this.Y =
      b, this.V().loop = b)
  }
  Da() {
    let b = this.la;
    this.Nc && (b *= this.u.cc);
    try {
      this.V().playbackRate = b
    } catch (a) {
      console.warn(`[Construct] Unable to set playback rate '${b}':`, a)
    }
  }
  oc(b) {
    if (!this.J && !this.O()) try {
      this.V().currentTime = b
    } catch (a) {
      console.warn(`[Construct] Error seeking audio to '${b}': `, a)
    }
  }
  mc() {
    return this.Ka()
  }
  qc(b) {
    b ? this.IsPlaying() ? (this.V().pause(), this.sa = !0) : this.sa = !1 : this.sa && (this.u.Ca(this.V()), this.sa = !1)
  }
};
"use strict";

function W(b) {
  b.o && (b.o.onended = null, b.o.disconnect(), b.o.buffer = null);
  b.o = null;
  b.ib = null
}
self.fe = class extends self.ad {
  constructor(b, a, c) {
    super(b, a, c);
    this.o = null;
    this.Wb = d => this.xc(d);
    this.Ic = !0;
    this.ib = null;
    this.S = this.Xb = this.Zb = 0;
    this.Qc = 1
  }
  j() {
    this.Ba();
    W(this);
    this.Wb = null;
    super.j()
  }
  xc(b) {
    this.K || this.sa || b.target !== this.ib || (this.J = this.Ic = !0, this.pa = -1, W(this), Mb(this.u, "ended", this.ma, this.Kb))
  }
  O() {
    return !this.J && this.o && this.o.loop || this.K ? !1 : this.Ic
  }
  hc() {
    return !this.o || this.J ? !0 : this.O()
  }
  Ka() {
    let b;
    b = this.K ? this.S : this.Xb + (V(this) - this.Zb) * this.la;
    this.Y || (b = Math.min(b, this.ga()));
    return b
  }
  Play(b, a, c, d) {
    this.Qc = 1;
    U(this, a);
    W(this);
    this.o = this.W().createBufferSource();
    this.o.buffer = this.P.ia;
    this.o.connect(this.G);
    this.ib = this.o;
    this.o.onended = this.Wb;
    this.o.loop = b;
    this.o.start(d, c);
    this.K = this.J = this.Ic = !1;
    this.Y = b;
    this.la = 1;
    this.Zb = V(this);
    this.Xb = c
  }
  Ba() {
    if (this.o) try {
      this.o.stop(0)
    } catch (b) {}
    this.J = !0;
    this.K = !1;
    this.pa = -1
  }
  hb() {
    this.K || this.J || this.O() || (this.S = this.Ka(), this.Y && (this.S %= this.ga()), this.K = !0, this.o.stop(0))
  }
  Eb() {
    !this.K || this.J || this.O() || (W(this), this.o =
      this.W().createBufferSource(), this.o.buffer = this.P.ia, this.o.connect(this.G), this.ib = this.o, this.o.onended = this.Wb, this.o.loop = this.Y, U(this, this.Ia), this.Da(), this.o.start(0, this.S), this.Zb = V(this), this.Xb = this.S, this.K = !1)
  }
  lc() {
    return super.lc() * this.Qc
  }
  Jb() {
    this.Qc = this.Ra || this.Cb() ? 0 : 1;
    U(this, this.Ia)
  }
  pc(b) {
    b = !!b;
    this.Y !== b && (this.Y = b, this.o && (this.o.loop = b))
  }
  Da() {
    let b = this.la;
    this.Nc && (b *= this.u.cc);
    this.o && (this.o.playbackRate.value = b)
  }
  oc(b) {
    this.J || this.O() || (this.K ? this.S = b : (this.hb(), this.S =
      b, this.Eb()))
  }
  mc() {
    return this.S
  }
  qc(b) {
    b ? this.IsPlaying() ? (this.sa = !0, this.S = this.Ka(), this.Y && (this.S %= this.ga()), this.o.stop(0)) : this.sa = !1 : this.sa && (W(this), this.o = this.W().createBufferSource(), this.o.buffer = this.P.ia, this.o.connect(this.G), this.ib = this.o, this.o.onended = this.Wb, this.o.loop = this.Y, U(this, this.Ia), this.Da(), this.o.start(0, this.S), this.Zb = V(this), this.Xb = this.S, this.sa = !1)
  }
  vc(b) {
    super.vc(b);
    this.S = b.resumePosition
  }
};
"use strict";

function X(b) {
  return b.g.createGain()
}

function Y(b, a, c, d, e) {
  a.cancelScheduledValues(0);
  if (0 === e) a.value = c;
  else switch (b = b.g.currentTime, e += b, d) {
    case 0:
      a.setValueAtTime(c, e);
      break;
    case 1:
      a.setValueAtTime(a.value, b);
      a.linearRampToValueAtTime(c, e);
      break;
    case 2:
      a.setValueAtTime(a.value, b), a.exponentialRampToValueAtTime(c, e)
  }
}
class Z {
  constructor(b) {
    this.u = b;
    this.g = b.W();
    this.Bd = -1;
    this.T = this.Tc = "";
    this.m = null
  }
  j() {
    this.g = null
  }
  N() {}
  U() {}
  eb() {
    return {
      type: this.T,
      tag: this.Tc,
      params: this.m
    }
  }
}
self.Wd = class extends Z {
  constructor(b, a, c, d, e, f, g) {
    super(b);
    this.T = "filter";
    this.m = [a, c, d, e, f, g];
    this.A = X(this);
    this.i = X(this);
    this.i.gain.value = g;
    this.h = X(this);
    this.h.gain.value = 1 - g;
    this.D = this.g.createBiquadFilter();
    this.D.type = a;
    this.D.frequency.value = c;
    this.D.detune.value = d;
    this.D.Q.value = e;
    this.D.gain.vlaue = f;
    this.A.connect(this.D);
    this.A.connect(this.h);
    this.D.connect(this.i)
  }
  j() {
    this.A.disconnect();
    this.D.disconnect();
    this.i.disconnect();
    this.h.disconnect();
    super.j()
  }
  U(b) {
    this.i.disconnect();
    this.i.connect(b);
    this.h.disconnect();
    this.h.connect(b)
  }
  N() {
    return this.A
  }
  Z(b, a, c, d) {
    switch (b) {
      case 0:
        a = Math.max(Math.min(a / 100, 1), 0);
        this.m[5] = a;
        Y(this, this.i.gain, a, c, d);
        Y(this, this.h.gain, 1 - a, c, d);
        break;
      case 1:
        this.m[1] = a;
        Y(this, this.D.frequency, a, c, d);
        break;
      case 2:
        this.m[2] = a;
        Y(this, this.D.detune, a, c, d);
        break;
      case 3:
        this.m[3] = a;
        Y(this, this.D.Q, a, c, d);
        break;
      case 4:
        this.m[4] = a, Y(this, this.D.gain, a, c, d)
    }
  }
};
self.Ud = class extends Z {
  constructor(b, a, c, d) {
    super(b);
    this.T = "delay";
    this.m = [a, c, d];
    this.A = X(this);
    this.i = X(this);
    this.i.gain.value = d;
    this.h = X(this);
    this.h.gain.value = 1 - d;
    this.tb = X(this);
    this.X = this.g.createDelay(a);
    this.X.delayTime.value = a;
    this.mb = X(this);
    this.mb.gain.value = c;
    this.A.connect(this.tb);
    this.A.connect(this.h);
    this.tb.connect(this.i);
    this.tb.connect(this.X);
    this.X.connect(this.mb);
    this.mb.connect(this.tb)
  }
  j() {
    this.A.disconnect();
    this.i.disconnect();
    this.h.disconnect();
    this.tb.disconnect();
    this.X.disconnect();
    this.mb.disconnect();
    super.j()
  }
  U(b) {
    this.i.disconnect();
    this.i.connect(b);
    this.h.disconnect();
    this.h.connect(b)
  }
  N() {
    return this.A
  }
  Z(b, a, c, d) {
    const e = self.cb.cd;
    switch (b) {
      case 0:
        a = Math.max(Math.min(a / 100, 1), 0);
        this.m[2] = a;
        Y(this, this.i.gain, a, c, d);
        Y(this, this.h.gain, 1 - a, c, d);
        break;
      case 4:
        this.m[1] = e(a);
        Y(this, this.mb.gain, e(a), c, d);
        break;
      case 5:
        this.m[0] = a, Y(this, this.X.delayTime, a, c, d)
    }
  }
};
self.Td = class extends Z {
  constructor(b, a, c, d) {
    super(b);
    this.T = "convolution";
    this.m = [c, d];
    this.qd = this.pd = "";
    this.A = X(this);
    this.i = X(this);
    this.i.gain.value = d;
    this.h = X(this);
    this.h.gain.value = 1 - d;
    this.lb = this.g.createConvolver();
    this.lb.normalize = c;
    this.lb.buffer = a;
    this.A.connect(this.lb);
    this.A.connect(this.h);
    this.lb.connect(this.i)
  }
  j() {
    this.A.disconnect();
    this.lb.disconnect();
    this.i.disconnect();
    this.h.disconnect();
    super.j()
  }
  U(b) {
    this.i.disconnect();
    this.i.connect(b);
    this.h.disconnect();
    this.h.connect(b)
  }
  N() {
    return this.A
  }
  Z(b,
    a, c, d) {
    switch (b) {
      case 0:
        a = Math.max(Math.min(a / 100, 1), 0), this.m[1] = a, Y(this, this.i.gain, a, c, d), Y(this, this.h.gain, 1 - a, c, d)
    }
  }
  eb() {
    const b = super.eb();
    b.bufferOriginalUrl = this.pd;
    b.bufferUrl = "";
    b.bufferType = this.qd;
    return b
  }
};
self.Xd = class extends Z {
  constructor(b, a, c, d, e, f) {
    super(b);
    this.T = "flanger";
    this.m = [a, c, d, e, f];
    this.A = X(this);
    this.h = X(this);
    this.h.gain.value = 1 - f / 2;
    this.i = X(this);
    this.i.gain.value = f / 2;
    this.nb = X(this);
    this.nb.gain.value = e;
    this.X = this.g.createDelay(a + c);
    this.X.delayTime.value = a;
    this.B = this.g.createOscillator();
    this.B.frequency.value = d;
    this.L = X(this);
    this.L.gain.value = c;
    this.A.connect(this.X);
    this.A.connect(this.h);
    this.X.connect(this.i);
    this.X.connect(this.nb);
    this.nb.connect(this.X);
    this.B.connect(this.L);
    this.L.connect(this.X.delayTime);
    this.B.start(0)
  }
  j() {
    this.B.stop(0);
    this.A.disconnect();
    this.X.disconnect();
    this.B.disconnect();
    this.L.disconnect();
    this.h.disconnect();
    this.i.disconnect();
    this.nb.disconnect();
    super.j()
  }
  U(b) {
    this.i.disconnect();
    this.i.connect(b);
    this.h.disconnect();
    this.h.connect(b)
  }
  N() {
    return this.A
  }
  Z(b, a, c, d) {
    switch (b) {
      case 0:
        a = Math.max(Math.min(a / 100, 1), 0);
        this.m[4] = a;
        Y(this, this.i.gain, a / 2, c, d);
        Y(this, this.h.gain, 1 - a / 2, c, d);
        break;
      case 6:
        this.m[1] = a / 1E3;
        Y(this, this.L.gain, a / 1E3,
          c, d);
        break;
      case 7:
        this.m[2] = a;
        Y(this, this.B.frequency, a, c, d);
        break;
      case 8:
        this.m[3] = a / 100, Y(this, this.nb.gain, a / 100, c, d)
    }
  }
};
self.Zd = class extends Z {
  constructor(b, a, c, d, e, f, g) {
    super(b);
    this.T = "phaser";
    this.m = [a, c, d, e, f, g];
    this.A = X(this);
    this.h = X(this);
    this.h.gain.value = 1 - g / 2;
    this.i = X(this);
    this.i.gain.value = g / 2;
    this.D = this.g.createBiquadFilter();
    this.D.type = "allpass";
    this.D.frequency.value = a;
    this.D.detune.value = c;
    this.D.Q.value = d;
    this.B = this.g.createOscillator();
    this.B.frequency.value = f;
    this.L = X(this);
    this.L.gain.value = e;
    this.A.connect(this.D);
    this.A.connect(this.h);
    this.D.connect(this.i);
    this.B.connect(this.L);
    this.L.connect(this.D.frequency);
    this.B.start(0)
  }
  j() {
    this.B.stop(0);
    this.A.disconnect();
    this.D.disconnect();
    this.B.disconnect();
    this.L.disconnect();
    this.h.disconnect();
    this.i.disconnect();
    super.j()
  }
  U(b) {
    this.i.disconnect();
    this.i.connect(b);
    this.h.disconnect();
    this.h.connect(b)
  }
  N() {
    return this.A
  }
  Z(b, a, c, d) {
    switch (b) {
      case 0:
        a = Math.max(Math.min(a / 100, 1), 0);
        this.m[5] = a;
        Y(this, this.i.gain, a / 2, c, d);
        Y(this, this.h.gain, 1 - a / 2, c, d);
        break;
      case 1:
        this.m[0] = a;
        Y(this, this.D.frequency, a, c, d);
        break;
      case 2:
        this.m[1] = a;
        Y(this, this.D.detune, a, c, d);
        break;
      case 3:
        this.m[2] = a;
        Y(this, this.D.Q, a, c, d);
        break;
      case 6:
        this.m[3] = a;
        Y(this, this.L.gain, a, c, d);
        break;
      case 7:
        this.m[4] = a, Y(this, this.B.frequency, a, c, d)
    }
  }
};
self.Yd = class extends Z {
  constructor(b, a) {
    super(b);
    this.T = "gain";
    this.m = [a];
    this.l = X(this);
    this.l.gain.value = a
  }
  j() {
    this.l.disconnect();
    super.j()
  }
  U(b) {
    this.l.disconnect();
    this.l.connect(b)
  }
  N() {
    return this.l
  }
  Z(b, a, c, d) {
    const e = self.cb.cd;
    switch (b) {
      case 4:
        this.m[0] = e(a), Y(this, this.l.gain, e(a), c, d)
    }
  }
};
self.ae = class extends Z {
  constructor(b, a) {
    super(b);
    this.T = "stereopan";
    this.m = [a];
    this.l = this.g.createStereoPanner();
    this.l.pan.value = a
  }
  j() {
    this.l.disconnect();
    super.j()
  }
  U(b) {
    this.l.disconnect();
    this.l.connect(b)
  }
  N() {
    return this.l
  }
  Z(b, a, c, d) {
    a = Math.min(Math.max(a / 100, -1), 1);
    switch (b) {
      case 9:
        this.m[0] = a, Y(this, this.l.pan, a, c, d)
    }
  }
};
self.be = class extends Z {
  constructor(b, a, c) {
    super(b);
    this.T = "tremolo";
    this.m = [a, c];
    this.l = X(this);
    this.l.gain.value = 1 - c / 2;
    this.B = this.g.createOscillator();
    this.B.frequency.value = a;
    this.L = X(this);
    this.L.gain.value = c / 2;
    this.B.connect(this.L);
    this.L.connect(this.l.gain);
    this.B.start(0)
  }
  j() {
    this.B.stop(0);
    this.B.disconnect();
    this.L.disconnect();
    this.l.disconnect();
    super.j()
  }
  U(b) {
    this.l.disconnect();
    this.l.connect(b)
  }
  N() {
    return this.l
  }
  Z(b, a, c, d) {
    switch (b) {
      case 0:
        a = Math.max(Math.min(a / 100, 1), 0);
        this.m[1] =
          a;
        Y(this, this.l.gain, 1 - a / 2, c, d);
        Y(this, this.L.gain, a / 2, c, d);
        break;
      case 7:
        this.m[0] = a, Y(this, this.B.frequency, a, c, d)
    }
  }
};
self.$d = class extends Z {
  constructor(b, a, c) {
    super(b);
    this.T = "ringmod";
    this.m = [a, c];
    this.A = X(this);
    this.i = X(this);
    this.i.gain.value = c;
    this.h = X(this);
    this.h.gain.value = 1 - c;
    this.yb = X(this);
    this.yb.gain.value = 0;
    this.B = this.g.createOscillator();
    this.B.frequency.value = a;
    this.B.connect(this.yb.gain);
    this.B.start(0);
    this.A.connect(this.yb);
    this.A.connect(this.h);
    this.yb.connect(this.i)
  }
  j() {
    this.B.stop(0);
    this.B.disconnect();
    this.yb.disconnect();
    this.A.disconnect();
    this.i.disconnect();
    this.h.disconnect();
    super.j()
  }
  U(b) {
    this.i.disconnect();
    this.i.connect(b);
    this.h.disconnect();
    this.h.connect(b)
  }
  N() {
    return this.A
  }
  Z(b, a, c, d) {
    switch (b) {
      case 0:
        a = Math.max(Math.min(a / 100, 1), 0);
        this.m[1] = a;
        Y(this, this.i.gain, a, c, d);
        Y(this, this.h.gain, 1 - a, c, d);
        break;
      case 7:
        this.m[0] = a, Y(this, this.B.frequency, a, c, d)
    }
  }
};
self.Vd = class extends Z {
  constructor(b, a, c, d, e, f) {
    super(b);
    this.T = "distortion";
    this.m = [a, c, d, e, f];
    this.A = X(this);
    this.ac = X(this);
    this.$b = X(this);
    b = d;
    .01 > b && (b = .01);
    this.ac.gain.value = b;
    this.$b.gain.value = Math.pow(1 / b, .6) * e;
    this.i = X(this);
    this.i.gain.value = f;
    this.h = X(this);
    this.h.gain.value = 1 - f;
    this.dc = this.g.createWaveShaper();
    this.Ec = new Float32Array(65536);
    for (e = 0; 32768 > e; ++e) f = e / 32768, b = 1.05 * c * a - a, d = 0 > f ? -f : f, d < a ? b = d : (d = 1 - Math.exp(-(1 / b) * (d - a)), b = a + b * d), f = b * (0 > f ? -1 : 1), this.Ec[32768 + e] = f, this.Ec[32768 -
      e - 1] = -f;
    this.dc.curve = this.Ec;
    this.A.connect(this.ac);
    this.A.connect(this.h);
    this.ac.connect(this.dc);
    this.dc.connect(this.$b);
    this.$b.connect(this.i)
  }
  j() {
    this.A.disconnect();
    this.ac.disconnect();
    this.dc.disconnect();
    this.$b.disconnect();
    this.i.disconnect();
    this.h.disconnect();
    super.j()
  }
  U(b) {
    this.i.disconnect();
    this.i.connect(b);
    this.h.disconnect();
    this.h.connect(b)
  }
  N() {
    return this.A
  }
  Z(b, a, c, d) {
    switch (b) {
      case 0:
        a = Math.max(Math.min(a / 100, 1), 0), this.m[4] = a, Y(this, this.i.gain, a, c, d), Y(this, this.h.gain,
          1 - a, c, d)
    }
  }
};
self.Sd = class extends Z {
  constructor(b, a, c, d, e, f) {
    super(b);
    this.T = "compressor";
    this.m = [a, c, d, e, f];
    this.l = this.g.createDynamicsCompressor();
    this.l.threshold.value = a;
    this.l.knee.value = c;
    this.l.ratio.value = d;
    this.l.attack.value = e;
    this.l.release.value = f
  }
  j() {
    this.l.disconnect();
    super.j()
  }
  U(b) {
    this.l.disconnect();
    this.l.connect(b)
  }
  N() {
    return this.l
  }
  Z() {}
};
self.Rd = class extends Z {
  constructor(b, a, c) {
    super(b);
    this.T = "analyser";
    this.m = [a, c];
    this.l = this.g.createAnalyser();
    this.l.fftSize = a;
    this.l.smoothingTimeConstant = c;
    this.xd = new Float32Array(this.l.frequencyBinCount);
    this.Md = new Uint8Array(a);
    this.Kd = this.Wa = 0;
    b = this.u;
    b.Oa.add(this);
    T(b)
  }
  j() {
    this.u.Oa.delete(this);
    this.l.disconnect();
    super.j()
  }
  Ma() {
    this.l.getFloatFrequencyData(this.xd);
    this.l.getByteTimeDomainData(this.Md);
    const b = this.l.fftSize;
    let a = this.Wa = 0;
    for (var c = 0; c < b; ++c) {
      let d = (this.Md[c] -
        128) / 128;
      0 > d && (d = -d);
      this.Wa < d && (this.Wa = d);
      a += d * d
    }
    c = self.cb.me;
    this.Wa = c(this.Wa);
    this.Kd = c(Math.sqrt(a / b))
  }
  U(b) {
    this.l.disconnect();
    this.l.connect(b)
  }
  N() {
    return this.l
  }
  Z() {}
};
"use strict";
self.ua.bb(class extends self.Ja {
  constructor(b) {
    super(b, "mouse");
    t(this, [
      ["cursor", a => {
        document.documentElement.style.cursor = a
      }],
      ["request-pointer-lock", () => {
        this.s.I.requestPointerLock()
      }],
      ["release-pointer-lock", () => {
        document.exitPointerLock()
      }]
    ]);
    document.addEventListener("pointerlockchange", () => {
      l(this, "pointer-lock-change", {
        "has-pointer-lock": !!document.pointerLockElement
      })
    });
    document.addEventListener("pointerlockerror", () => {
      l(this, "pointer-lock-error", {
        "has-pointer-lock": !!document.pointerLockElement
      })
    })
  }
});