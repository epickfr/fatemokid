System.register("chunks:///_virtual/Ad.ts", ["cc", "./GameConfig.ts", "./Util.ts", "./UtilSend.ts", "./GameData.ts"], (function(n) {
  "use strict";
  var e, a, t, o, d;
  return {
    setters: [function(n) {
      e = n.cclegacy
    }, function(n) {
      a = n.default
    }, function(n) {
      t = n.default
    }, function(n) {
      o = n.default
    }, function(n) {
      d = n.default
    }],
    execute: function() {
      e._RF.push({}, "ab44fZSTyFPQo3JRAmSEWHc", "Ad", void 0);
      n("AdSend", (function() {}));
      var i = n("Ad", function() {
        function n() {}
        return n.tip = function(n) {
          a.debug || "_tal0203" == t.getUrlParam("_adFree") ? n() : this.adReward((function() {
            n()
          }))
        }, n.start = function() {
          this.adBreak("start", (function() {
            o.start()
          }))
        }, n.restart = function() {
          o.toHome(), this.adBreak("next", (function() {}))
        }, n.adBreak = function(n, e) {
          window.adBreak && window.adBreak({
            type: n,
            name: n + "_ad",
            beforeAd: function() {
              e && e(), console.warn("begin ad"), t.gamePause()
            },
            afterAd: function() {
              console.info("ended ad!"), t.gameResume()
            },
            adBreakDone: function(n) {
              console.info("info", n)
            }
          })
        }, n.adReward = function(n) {
          window.adBreak && window.adBreak({
            type: "reward",
            name: "reward_ad",
            beforeAd: function() {
              console.warn("begin ad"), t.gamePause()
            },
            beforeReward: function(n) {
              n()
            },
            adViewed: function() {
              n()
            },
            adDismissed: function() {},
            afterAd: function() {
              console.info("ended ad!"), t.gameResume()
            },
            adBreakDone: function(n) {
              console.info("info", n), t.gameResume()
            }
          })
        }, n
      }());
      i.onReady = function() {}, window.adConfigOnReady = function() {
        d.adInit = !0, i.onReady && i.onReady()
      }, e._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Anim.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BSingleton.ts"], (function(t) {
  "use strict";
  var n, e, i, a, o, s, r, c, l, u;
  return {
    setters: [function(t) {
      n = t.inheritsLoose
    }, function(t) {
      e = t.cclegacy, i = t.resources, a = t.Prefab, o = t.instantiate, s = t.sp, r = t.color, c = t.tween, l = t.random
    }, function(t) {
      u = t.default
    }],
    execute: function() {
      e._RF.push({}, "3dc1d6BuKtB953IDxI4IGbR", "Anim", void 0);
      t("default", function(t) {
        function e() {
          for (var n, e = arguments.length, i = new Array(e), a = 0; a < e; a++) i[a] = arguments[a];
          return (n = t.call.apply(t, [this].concat(i)) || this).nodes = new Map, n
        }
        n(e, t);
        var u = e.prototype;
        return u.reset = function(t, n, e) {
          var i = n;
          i < 1 && (n = 1), this.play(t, n, e, (function(t) {
            i < 1 && (t.timeScale = 0)
          }))
        }, u.play = function(t, n, e, i, a) {
          var o = this.nodes.get(t),
            s = "animation" + n.toString();
          if (2 == t) {
            var r = function(t) {
                var e = t.setAnimation(0, "guffaw", !1);
                t.setTrackCompleteListener(e, (function() {
                  t.setAnimation(0, "standby", !0), t.setTrackCompleteListener(e, (function() {})), a && a()
                })), t.setAnimation(61, "anim-tool-" + n, !1), t.setAnimation(60, "default", !1)
              },
              c = function(t) {
                t.setAnimation(61, "default", !1);
                var n = t.setAnimation(0, s, !1);
                if (t.timeScale = 1, i && i(t), 0 == t.timeScale) t.timeScale = 1, t.setAnimation(0, "standby", !0);
                else try {
                  t.setTrackCompleteListener(n, (function() {
                    r(t), t.setTrackCompleteListener(n, (function() {}))
                  }))
                } catch (n) {
                  r(t)
                }
                var e = 0;
                t.unscheduleAllCallbacks(), t.schedule((function() {
                  if ("standby" == t.animation) {
                    if (0 != e && l() > .5) return;
                    e++, t.setMix("standby", "standby-left", .25), t.setMix("standby-left", "standby", .25);
                    var n = t.setAnimation(0, "standby-left", !1);
                    t.setTrackCompleteListener(n, (function() {
                      t.setAnimation(0, "standby", !0), t.setTrackCompleteListener(n, (function() {}))
                    }))
                  }
                }), 2)
              };
            o ? c(o) : this.load(t, n, e.nParentAnim, (function(t) {
              t.setAnimation(100, "blink", !0), c(t)
            }))
          } else {
            var u = function(t, e) {
              var o = 1 == n ? 0 : .25;
              t.animation && t.setMix(t.animation, s, o);
              var r = t.setAnimation(0, s, !1);
              t.timeScale = 1, i && i(t);
              try {
                a && t.setTrackCompleteListener(r, (function() {
                  a && a(), t.setTrackCompleteListener(r, (function() {}))
                }))
              } catch (t) {
                a && a()
              }
            };
            o ? u(o) : this.load(t, n, e.nParentAnim, (function(t) {
              u(t)
            }))
          }
        }, u.load = function(t, n, e, r) {
          var c = this;
          n.toString();
          if (this.nodes.has(t)) return r(this.nodes.get(t));
          var l = "prefab/spine/theme" + t.toString();
          i.load(l, a, (function() {}), (function(n, i) {
            if (n) return console.error(n);
            if (c.nodes.has(t)) return r(c.nodes.get(t));
            var a = o(i),
              l = a.getComponent(s.Skeleton);
            return c.nodes.set(t, l), c.opacityAnim(l), e.addChild(a), r(l)
          }))
        }, u.opacityAnim = function(t) {
          t.color = r(255, 255, 255, 0), c(t.color).to(.5, {
            a: 255
          }, {
            easing: "sineOut"
          }).start()
        }, e
      }(u.Instance0()));
      e._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Audio.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioLoad.ts", "./BSingleton.ts"], (function(o) {
  "use strict";
  var e, i, t, u, c, s, n, l;
  return {
    setters: [function(o) {
      e = o.inheritsLoose
    }, function(o) {
      i = o.cclegacy, t = o.error, u = o.game, c = o.Node, s = o.AudioSource
    }, function(o) {
      n = o.default
    }, function(o) {
      l = o.default
    }],
    execute: function() {
      i._RF.push({}, "3121eRYMFBES5E+ZFg7GPbR", "Audio", void 0);
      o("default", function(o) {
        function i() {
          var e;
          (e = o.call(this) || this).music = void 0, e.effect = void 0, e.AudioLoad = void 0, e.logMusicVolume = 0, e.logEffectVolume = 0, e.AudioLoad = new n;
          var i = new c("_Audio");
          return e.music = i.addComponent(s), e.effect = i.addComponent(s), e.music.loop = !0, e.effect.loop = !1, e
        }
        e(i, o);
        var l = i.prototype;
        return l.playMusic = function(o, e, i) {
          var u = this;
          void 0 === e && (e = !0), void 0 === i && (i = 1), this.logMusicVolume = i, this.AudioLoad.load(o, (function(o, c) {
            o ? t(o.message) : (u.music.volume = i, u.music.playing && u.music.stop(), u.music.playing && !e || (u.music.clip = c, u.music.play()))
          }))
        }, l.playEffect = function(o, e, i) {
          var c = this;
          void 0 === e && (e = 1), void 0 === i && (i = 10), this.logEffectVolume = e;
          var s = u.totalTime + 1e3 * i;
          this.AudioLoad.load(o, (function(o, i) {
            o ? t(o.message) : u.totalTime > s || (c.effect.volume = 1, c.effect.playOneShot(i, e))
          }))
        }, l.mute = function(o) {
          o ? (this.music.volume = 0, this.effect.volume = 0) : (this.music.volume = this.logMusicVolume, this.effect.volume = this.logEffectVolume)
        }, i
      }(l.Instance0()));
      i._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/AudioLoad.ts", ["cc"], (function(t) {
  "use strict";
  var e, o, a, i;
  return {
    setters: [function(t) {
      e = t.cclegacy, o = t.assetManager, a = t.resources, i = t.AudioClip
    }],
    execute: function() {
      e._RF.push({}, "2351fUZyKVHaLVAi1adKWwT", "AudioLoad", void 0);
      t("default", function() {
        function t() {
          this.cacheMap = new Map
        }
        var e = t.prototype;
        return e.load = function(t, e) {
          var o = this,
            a = this.cacheMap.get(t);
          a ? e(null, a) : (this.cacheMap.set(t, void 0), this.loadRes(t, (function(a, i) {
            a || o.cacheMap.set(t, i), e(a, i)
          })))
        }, e.preload = function(t, e) {
          var o = this;
          this.loadRes(t, (function(a, i) {
            if (!a)
              for (var n = 0; n < t.length; n++) o.cacheMap.set(t[n], i[n]);
            e && e()
          }))
        }, e.loadRes = function(t, e) {
          if ("string" == typeof t) {
            if (t.startsWith("http")) return void o.loadRemote(t, (function(t, o) {
              e(t, o)
            }));
            a.load(t, i, e)
          } else {
            if (t[0].startsWith("http")) {
              var n = [],
                c = t.length;
              return void t.forEach((function(t, a) {
                o.loadRemote(t, (function(t, o) {
                  n[a] = o, 0 == --c && e(t, n)
                }))
              }))
            }
            a.load(t, i, e)
          }
        }, t
      }());
      e._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/AudioManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BSingleton.ts", "./Audio.ts", "./GameData.ts"], (function(t) {
  "use strict";
  var i, a, o, n, e;
  return {
    setters: [function(t) {
      i = t.inheritsLoose
    }, function(t) {
      a = t.cclegacy
    }, function(t) {
      o = t.default
    }, function(t) {
      n = t.default
    }, function(t) {
      e = t.default
    }],
    execute: function() {
      a._RF.push({}, "e0d60HG6XREgafiLdShFnx2", "AudioManager", void 0);
      t("default", function(t) {
        function a() {
          return t.call(this) || this
        }
        i(a, t);
        var o = a.prototype;
        return o.load = function() {
          var t = this;
          n.instance.AudioLoad.preload(["audio/correct1", "audio/correct2", "audio/error1", "audio/error2", "audio/star"], (function() {
            n.instance.AudioLoad.preload(["audio/correct3", "audio/correct4", "audio/error3"], (function() {
              n.instance.AudioLoad.preload(["audio/bg"], (function() {
                t.playBg(), n.instance.AudioLoad.preload(["audio/switch_title", "audio/tip", "audio/win"])
              }))
            }))
          }))
        }, o.playTitle = function(t) {
          if (t) {
            var i = t;
            n.instance.AudioLoad.preload([i], (function() {
              var a, o;
              if ((null == (a = e.getData(e.lv)) ? void 0 : a.audio) == t) {
                n.instance.playEffect(i);
                var c = null == (o = e.getData(e.lv + 1)) ? void 0 : o.audio;
                c && c.length > 0 && n.instance.AudioLoad.preload([c])
              }
            }))
          }
        }, o.playResult = function(t, i) {
          t > 0 && this.playCorrect(t), i > 0 && this.playError(i)
        }, o.playBg = function() {
          n.instance.playMusic("audio/bg", !1, .4)
        }, o.playWelcome = function() {
          n.instance.playEffect("audio/welcome")
        }, o.playSwitchTitle = function() {
          n.instance.playEffect("audio/switch_title")
        }, o.playWin = function() {
          n.instance.playEffect("audio/win")
        }, o.playTip = function() {
          n.instance.playEffect("audio/tip", 1, 2)
        }, o.playStar = function() {
          n.instance.playEffect("audio/star", 1, 2)
        }, o.playError = function(t) {
          void 0 === t && (t = 1), t >= 3 && (t = t % 3 + 1);
          var i = "audio/error" + t.toString();
          n.instance.playEffect(i, 1, 1)
        }, o.playErrorCorrect = function() {
          n.instance.playEffect("audio/correct4", 1, 1)
        }, o.playCorrect = function(t) {
          void 0 === t && (t = 1), t >= 4 && (t &= 5);
          var i = "audio/correct" + t.toString();
          n.instance.playEffect(i, 1, 1)
        }, a
      }(o.Instance0()));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/BanTouch.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BSingleton.ts"], (function(n) {
  "use strict";
  var t, e, o, i, r, a, s, u;
  return {
    setters: [function(n) {
      t = n.inheritsLoose
    }, function(n) {
      e = n.cclegacy, o = n.find, i = n.Node, r = n.UITransform, a = n.BlockInputEvents, s = n.Layers
    }, function(n) {
      u = n.default
    }],
    execute: function() {
      e._RF.push({}, "fa04ftRUm9Po4+8zlzE2qMi", "BanTouch", void 0);
      n("default", function(n) {
        function e() {
          var t;
          (t = n.call(this) || this).node = void 0;
          var e = o("Canvas");
          if (!e) throw new Error("Canvas not found");
          var u = new i("_BanTouch");
          return u.parent = e, u.addComponent(r).setContentSize(3333, 3333), u.addComponent(a), u.layer = s.Enum.UI_2D, t.node = u, t.node.setSiblingIndex(99), t
        }
        t(e, n);
        var u = e.prototype;
        return u.open = function() {
          this.node.active = !0
        }, u.close = function() {
          this.node.active = !1
        }, e
      }(u.Instance0()));
      e._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/BgManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameData.ts", "./SceneDirection.ts", "./GamePlayer.ts", "./Game.ts", "./ClientEvent.ts"], (function(e) {
  "use strict";
  var t, n, i, o, a, r, l, s, m, c, u, d, f, g, h, p, C, y, v, B, b;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, o = e.assertThisInitialized
    }, function(e) {
      a = e.cclegacy, r = e._decorator, l = e.Node, s = e.UIOpacity, m = e.instantiate, c = e.sp, u = e.color, d = e.tween, f = e.resources, g = e.Prefab, h = e.Component
    }, function(e) {
      p = e.default
    }, function(e) {
      C = e.SceneDirection
    }, function(e) {
      y = e.GamePlayer
    }, function(e) {
      v = e.Game
    }, function(e) {
      B = e.default, b = e.ClientEventName
    }],
    execute: function() {
      var A, P, k, S, T, L, w, G, H;
      a._RF.push({}, "5be6bs+KBZDY5D/5H37qE0E", "BgManager", void 0);
      var j = r.ccclass,
        x = r.property;
      e("BgManager", (A = j("BgManager"), P = x(l), k = x(s), S = x(l), A((w = t((L = function(e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
          return t = e.call.apply(e, [this].concat(a)) || this, i(t, "nBgParent", w, o(t)), i(t, "oBgSprite", G, o(t)), i(t, "nBgPlayerParent", H, o(t)), t.spineCurrent = null, t
        }
        n(t, e);
        var a = t.prototype;
        return a.onHomeComplete = function() {}, a.onGameComplete = function() {}, a.playAnimation = function(e) {
          var t = this.spineCurrent;
          if (t) {
            if (1 == e) {
              var n = t.setAnimation(0, "daiji-2", !1);
              n.timeScale = 1.2, t.setTrackCompleteListener(n, (function() {
                t.setTrackCompleteListener(n, (function() {})), t.setAnimation(0, "daiji", !0)
              }))
            }
            if (2 == e) {
              var i = t.setAnimation(0, "guffaw-home", !1);
              t.setTrackCompleteListener(i, (function() {
                t.setTrackCompleteListener(i, (function() {}));
                var e = t.setAnimation(0, "standby-home-left", !1);
                t.setTrackCompleteListener(e, (function() {
                  t.setTrackCompleteListener(e, (function() {})), t.setAnimation(0, "standby-home", !0)
                }))
              }))
            }
          }
        }, a.onLoad = function() {}, a.start = function() {
          var e, t = this,
            n = null == (e = this.node.parent) ? void 0 : e.getComponent(v),
            i = p.themeIndex;
          n ? this.setTheme(i, "game") : B.once(b.GamePreloadComplete, (function() {
            t.load("game", (function(e) {
              i == p.themeIndex && t.setTheme(p.themeIndex, "home")
            }))
          }))
        }, a.setTheme = function(e, t) {
          3 == e && ("game" == t ? this.setGameBg3() : this.setHomeBg3()), 1 == e && ("game" == t ? this.setGameBg1() : this.setHomeBg1()), 2 == e && ("game" == t || this.setHomeBg2())
        }, a.setHomeBg2 = function() {
          var e = this;
          this.load("home", (function(t) {
            var n, i = m(t);
            e.nBgParent.addChild(i);
            var o = null == (n = i.getChildByName("home-player")) ? void 0 : n.getComponent(c.Skeleton);
            e.spineCurrent = o, o.setAnimation(100, "blink", !0), o.setAnimation(0, "standby-home", !0), o.setMix("standby-home", "standby-home-left", .25), o.setMix("standby-home-left", "standby-home", .25), o.setMix("guffaw-home", "standby-home", .25), o.setMix("standby-home-left", "guffaw-home", .25);
            var a = function() {
              var e = o.setAnimation(0, "guffaw-home", !1);
              o.setTrackCompleteListener(e, (function() {
                o.setTrackCompleteListener(e, (function() {}));
                var t = o.setAnimation(0, "standby-home-left", !1);
                o.setTrackCompleteListener(t, (function() {
                  o.setTrackCompleteListener(t, (function() {})), o.setAnimation(0, "standby-home", !0)
                }))
              }))
            };
            a(), e.schedule((function() {
              a()
            }), 8), e.scheduleOnce((function() {
              e.onHomeComplete()
            }))
          }))
        }, a.setGameBg1 = function() {
          var e = this;
          this.load("game", (function(t) {
            var n = m(t);
            e.nBgParent.addChild(n);
            var i = n.getChildByName("Player"),
              o = null == i ? void 0 : i.getComponent(y);
            e.node.parent.getComponent(v).gamePlayer = o;
            var a = null == i ? void 0 : i.getComponent(c.Skeleton);
            a.color = u(255, 255, 255, 0), d(a.color).to(.5, {
              a: 255
            }).start()
          }))
        }, a.setHomeBg1 = function() {
          var e = this;
          this.load("home", (function(t) {
            var n, i = m(t);
            e.nBgParent.addChild(i);
            var o = null == (n = i.getChildByName("home-player")) ? void 0 : n.getComponent(c.Skeleton);
            e.spineCurrent = o, o.setMix("daiji-2", "daiji", .25), o.setMix("daiji", "daiji-2", .25), o.setAnimation(100, "blink", !0);
            var a = function() {
              var e = o.setAnimation(0, "daiji-2", !1);
              e.timeScale = 1.2, o.setTrackCompleteListener(e, (function() {
                o.setTrackCompleteListener(e, (function() {})), o.setAnimation(0, "daiji", !0)
              }))
            };
            a(), e.schedule((function() {
              "daiji" == o.animation && a()
            }), 5), e.scheduleOnce((function() {
              e.onHomeComplete()
            }))
          }))
        }, a.setGameBg3 = function() {
          var e = this;
          this.load("game", (function(t) {
            var n, i = m(t);
            e.nBgParent.addChild(i);
            var o = null == (n = i.getChildByName("bg")) ? void 0 : n.getComponent(c.Skeleton);
            o.setAnimation(0, "animation", !0), o.setAnimation(1, "flower", !0), o.setAnimation(2, "flower-small", !0), o.setAnimation(3, "top-front", !0), o.setAnimation(4, "sunlight-enter", !1), o.setAnimation(6, "butterfly", !0), o.setAnimation(7, "butterfly-path", !0);
            var a = i.getChildByName("Player");
            if (e.nBgPlayerParent) {
              var r = a.getComponent(c.Skeleton);
              r.color = u(255, 255, 255, 0), d(r.color).to(.5, {
                a: 255
              }).start(), e.nBgPlayerParent.addChild(a)
            }
            var l = null == a ? void 0 : a.getComponent(y);
            e.node.parent.getComponent(v).gamePlayer = l, d(e.oBgSprite).to(.5, {
              opacity: 0
            }).start(), e.scheduleOnce((function() {
              e.onGameComplete()
            }))
          }))
        }, a.setHomeBg3 = function() {
          var e = this;
          this.load("home", (function(t) {
            var n, i, o, a = m(t);
            e.nBgParent.addChild(a);
            var r = null == (n = a.getChildByName("bg")) ? void 0 : n.getComponent(c.Skeleton);
            e.spineCurrent = r, r.setAnimation(0, "animation", !0), r.setAnimation(1, "flower", !0), r.setAnimation(2, "flower-small", !0), r.setAnimation(3, "top-front", !0), r.setAnimation(4, "sunlight-enter", !1), r.setAnimation(5, "dir-right", !1), r.setAnimation(6, "butterfly", !0), r.setAnimation(7, "butterfly-path", !0);
            var l = null == (i = a.getChildByName("home-player")) || null == (o = i.getChildByName("mao")) ? void 0 : o.getComponent(c.Skeleton);
            l.setAnimation(0, "jinchang2", !0);
            l.node.parent;
            C.direction, d(e.oBgSprite).to(.5, {
              opacity: 0
            }).start(), e.scheduleOnce((function() {
              e.onHomeComplete()
            }))
          }))
        }, a.load = function(e, t) {
          var n = p.themeIndex,
            i = "landscape" == C.direction ? "" : "-portrait",
            o = "prefab/bg/" + e + "-" + n.toString() + "-bg" + i;
          f.load(o, g, (function(e, n) {
            e ? console.error(e) : null == t || t(n)
          }))
        }, t
      }(h)).prototype, "nBgParent", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), G = t(L.prototype, "oBgSprite", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), H = t(L.prototype, "nBgPlayerParent", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), T = L)) || T));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/BSingleton.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
  "use strict";
  var t, i, e, s;
  return {
    setters: [function(n) {
      t = n.inheritsLoose, i = n.createClass
    }, function(n) {
      e = n.cclegacy, s = n.Component
    }],
    execute: function() {
      e._RF.push({}, "05dadOihZJC+4l/apqJcgeX", "BSingleton", void 0);
      n("default", function() {
        function n() {}
        return n.Complete = function() {
          var n;
          return (n = function(n) {
            function i() {
              return n.apply(this, arguments) || this
            }
            return t(i, n), i.prototype.onLoad = function() {
              i.instance = this
            }, i
          }(s)).instance = void 0, n
        }, n.Instance = function() {
          var n;
          return (n = function() {
            function n(n) {
              this.params = void 0, this.params = n
            }
            return n.init = function(n) {
              return this._instance || (this._instance = new this(n)), this._instance
            }, i(n, null, [{
              key: "instance",
              get: function() {
                if (!this._instance) throw new Error("undefined _instance");
                return this._instance
              }
            }]), n
          }())._instance = void 0, n
        }, n.Instance0 = function() {
          var n;
          return (n = function() {
            function n() {}
            return i(n, null, [{
              key: "instance",
              get: function() {
                return this._instance || (this._instance = new this), this._instance
              }
            }]), n
          }())._instance = void 0, n
        }, n
      }());
      e._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/ButtonEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SceneManager.ts", "./Game.ts", "./GameData.ts", "./Ad.ts", "./Main.ts", "./BanTouch.ts", "./Complete.ts", "./UtilSend.ts", "./AudioManager.ts"], (function(n) {
  "use strict";
  var e, t, a, o, i, c, s, u, r, l, d, f, m, p, g, h, v;
  return {
    setters: [function(n) {
      e = n.inheritsLoose
    }, function(n) {
      t = n.cclegacy, a = n._decorator, o = n.tween, i = n.v3, c = n.UITransform, s = n.size, u = n.Component
    }, function(n) {
      r = n.SceneManager
    }, function(n) {
      l = n.Game
    }, function(n) {
      d = n.default
    }, function(n) {
      f = n.Ad
    }, function(n) {
      m = n.Main
    }, function(n) {
      p = n.default
    }, function(n) {
      g = n.Complete
    }, function(n) {
      h = n.default
    }, function(n) {
      v = n.default
    }],
    execute: function() {
      var G;
      t._RF.push({}, "12c76RbVzRJb4CNiGErBWey", "ButtonEvent", void 0);
      var y = a.ccclass;
      a.property, n("ButtonEvent", y("ButtonEvent")(G = function(n) {
        function t() {
          return n.apply(this, arguments) || this
        }
        e(t, n);
        var a = t.prototype;
        return a.onLoad = function() {
          if ("Game" == this.node.name || "GamePortrait" == this.node.name || "Game-1" == this.node.name || "GamePortrait-1" == this.node.name || "Game-2" == this.node.name || "GamePortrait-2" == this.node.name) {
            var n = this.node.getChildByName("Button"),
              e = n.getChildByName("tip");
            o(e).by(.4, {
              scale: i(.08, .08, .08)
            }, {
              easing: "sineOut"
            }).by(.4, {
              scale: i(-.08, -.08, -.08)
            }, {
              easing: "sineOut"
            }).union().repeatForever().start();
            var t = n.getChildByName("theme").getComponent(c);
            o(t).delay(1).to(.1, {
              contentSize: s(180, 126)
            }, {
              onUpdate: function(n, e) {
                t.node.angle = 5 * -e
              }
            }).to(.1, {
              contentSize: s(180, 126)
            }, {
              onUpdate: function(n, e) {
                t.node.angle = 10 * e - 5
              }
            }).to(.1, {
              contentSize: s(180, 126)
            }, {
              onUpdate: function(n, e) {
                t.node.angle = 5 - 10 * e
              }
            }).to(.1, {
              contentSize: s(172, 120)
            }, {
              onUpdate: function(n, e) {
                t.node.angle = 5 * e - 5
              }
            }).union().repeatForever().start()
          }
        }, t.playGame = function() {
          h.onGameStart(), p.instance.open(), r.instance.changeLoading(!0, (function() {
            r.instance.toGame((function() {
              r.instance.getSceneNode("Home", (function(n) {
                n.active = !1
              })), r.instance.changeLoading(!1), p.instance.close()
            }))
          }))
        }, t.playGame2 = function() {
          h.onGameStart(), f.start(), p.instance.open(), r.instance.changeLoading(!0, (function() {
            r.instance.toGame((function() {
              r.instance.getSceneNode("Home", (function(n) {
                n.active = !1
              })), r.instance.changeLoading(!1), p.instance.close()
            }))
          }))
        }, a.play = function() {
          h.onGameStart(), f.start(), p.instance.open(), r.instance.changeLoading(!0, (function() {
            r.instance.toGame((function() {
              r.instance.getSceneNode("Home", (function(n) {
                n.active = !1
              })), r.instance.changeLoading(!1), p.instance.close()
            }))
          }))
        }, a.changeTitle = function() {
          var n = this;
          f.tip((function() {
            p.instance.open(), v.instance.playSwitchTitle();
            var e = n.getComponent(l);
            null == e || e.gameTitle.setTitleLoading(), m.updateData().then((function() {
              null == e || e.run(d.lv), p.instance.close()
            })).catch((function() {
              p.instance.close()
            }))
          }))
        }, a.tip = function() {
          var n = this;
          f.tip((function() {
            v.instance.playTip();
            var e = n.getComponent(l);
            null == e || e.click(d.lvData.correct)
          }))
        }, a.theme = function() {
          f.tip((function() {
            p.instance.open(), 3 == d.themeIndex ? d.themeIndex = 2 : 2 == d.themeIndex ? d.themeIndex = 1 : d.themeIndex = 3, r.instance.preload("Game"), r.instance.changeLoading(!0, (function() {
              r.instance.toGame((function(n) {
                r.instance.changeLoading(!1, (function() {
                  p.instance.close()
                }))
              }))
            }))
          }))
        }, a.replay = function() {
          var n;
          f.restart(), null == (n = this.getComponent(g)) || n.close(), r.instance.getSceneNode("Game", (function(n) {
            n && (n.active = !0);
            var e = null == n ? void 0 : n.getComponent(l);
            null == e || e.run(0, !0)
          }))
        }, a.next = function() {
          h.nextGame()
        }, t
      }(u)) || G);
      t._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/ClientEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
  "use strict";
  var t, n, i;
  return {
    setters: [function(e) {
      t = e.inheritsLoose
    }, function(e) {
      n = e.cclegacy, i = e.EventTarget
    }],
    execute: function() {
      n._RF.push({}, "a3015LtX5FFHqTv0POTgfbn", "ClientEvent", void 0);
      e("ClientEventName", {
        GamePreloadComplete: "GamePreloadComplete"
      }), e("default", new(function(e) {
        function n() {
          return e.apply(this, arguments) || this
        }
        return t(n, e), n
      }(i)));
      n._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Complete.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UtilSend.ts", "./AudioManager.ts", "./Util.ts", "./GameData.ts"], (function(e) {
  "use strict";
  var t, n, i, o, a, r, l, s, c, u, p, m, d, f, g, h, y;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, o = e.assertThisInitialized
    }, function(e) {
      a = e.cclegacy, r = e._decorator, l = e.Node, s = e.sp, c = e.Label, u = e.UIOpacity, p = e.tween, m = e.v3, d = e.Component
    }, function(e) {
      f = e.default
    }, function(e) {
      g = e.default
    }, function(e) {
      h = e.default
    }, function(e) {
      y = e.default
    }],
    execute: function() {
      var C, v, S, b, k, A, L, N, T;
      a._RF.push({}, "c8aa6xTPOFBjKe2nnoVZyuB", "Complete", void 0);
      var x = r.ccclass,
        B = r.property;
      e("Complete", (C = x("Complete"), v = B(l), S = B(s.Skeleton), b = B(c), C((L = t((A = function(e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
          return t = e.call.apply(e, [this].concat(a)) || this, i(t, "nContent", L, o(t)), i(t, "player", N, o(t)), i(t, "lScore", T, o(t)), t
        }
        n(t, e);
        var a = t.prototype;
        return a.onEnable = function() {}, a.close = function() {
          this.node.active = !1
        }, a.open = function() {
          var e, t, n, i = this;
          (this.node.active = !0, f.onGameOver(!0), g.instance.playWin(), this.nContent) && (1 == y.themeIndex ? this.nContent.getComponent(u).opacity = 0 : (this.nContent.setScale(.9, .9, 1), p(this.nContent).to(.5, {
            scale: m(1, 1, 1)
          }, {
            easing: "backOut"
          }).start()));
          var o = null == (e = this.player) ? void 0 : e.setAnimation(0, "shengli", !1);
          if (null == (t = this.player) || t.setMix("shengli", "daiji", .1), null == (n = this.player) || n.setTrackCompleteListener(o, (function() {
              var e, t;
              null == (e = i.player) || e.setAnimation(0, "daiji", !0), null == (t = i.player) || t.setTrackCompleteListener(o, (function() {}))
            })), this.lScore.string = this.getScore(), 2 == y.themeIndex) {
            var a, r = this.nContent.getComponentsInChildren(s.Skeleton)[0],
              l = null == (a = this.node.getChildByName("content-2")) ? void 0 : a.getComponent(s.Skeleton);
            if (l.timeScale = 1, l.setAnimation(0, "animation2", !1), r) {
              var c = r.setAnimation(0, "paper-start", !1);
              c.timeScale = 1.5, r.setTrackCompleteListener(c, (function() {
                r.setAnimation(0, "paper-standby", !0), r.setTrackCompleteListener(c, (function() {}))
              }))
            }
          }
          if (1 == y.themeIndex) {
            var d, h, C, v, S = null == (d = this.node.getChildByName("background")) || null == (h = d.getChildByName("Spine-bg")) ? void 0 : h.getComponent(s.Skeleton),
              b = S.setAnimation(0, "gameover", !1);
            S.setTrackCompleteListener(b, (function() {
              if (S.setAnimation(0, "gameover-light", !0).timeScale = .5, S.setTrackCompleteListener(b, (function() {})), 1 == y.themeIndex) {
                var e = i.nContent.getComponent(u);
                e.opacity = 0, p(e).to(.5, {
                  opacity: 255
                }, {
                  easing: "sineOut"
                }).start()
              }
            }));
            var k = null == (C = this.node.getChildByName("background")) || null == (v = C.getChildByName("Spine-player")) ? void 0 : v.getComponent(s.Skeleton),
              A = k.setAnimation(0, "gameover-player", !1);
            k.setAnimation(1, "gameover-player", !1);
            k.setMix("gameover-player", "gameover-player2", .2), k.setTrackCompleteListener(A, (function() {
              k.setAnimation(1, "gameover-player2", !0).timeScale = .5, k.setTrackCompleteListener(A, (function() {}))
            }))
          }
        }, a.getScore = function() {
          var e = 50,
            t = 70;
          return y.errNum < 1 ? (e = 90, t = 100) : y.errNum < 3 ? (e = 80, t = 100) : y.errNum < 5 ? (e = 70, t = 90) : y.errNum < 7 && (e = 60, t = 80), h.pseudoRandomInt(e, t).toString()
        }, t
      }(d)).prototype, "nContent", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), N = t(A.prototype, "player", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), T = t(A.prototype, "lScore", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), k = A)) || k));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Configuration.ts", ["cc"], (function(i) {
  "use strict";
  var t;
  return {
    setters: [function(i) {
      t = i.cclegacy
    }],
    execute: function() {
      t._RF.push({}, "f2262PsNotI3aKimJoSx7vK", "Configuration", void 0);
      i("Configuration", {
        information: {
          version: "2.22"
        },
        apiurl: "https://mashaquiz.com/api/quiz/"
      });
      t._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/d.ts", ["cc"], (function() {
  "use strict";
  var c;
  return {
    setters: [function(t) {
      c = t.cclegacy
    }],
    execute: function() {
      c._RF.push({}, "deccccnwp5CgLRcG50irfKc", "d", void 0), c._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Game.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameData.ts", "./GameOption.ts", "./GameTitle.ts", "./GameHand.ts", "./BanTouch.ts", "./Anim.ts", "./GameClamp.ts", "./GameReward.ts", "./SceneManager.ts", "./Complete.ts", "./GamePlayer.ts", "./GameStar.ts", "./GameLight.ts", "./AudioManager.ts", "./Recommend.ts", "./Ad.ts"], (function(e) {
  "use strict";
  var t, n, i, a, r, o, l, s, u, m, c, p, g, h, f, d, y, v, b, w, G, O, C, P, R;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, a = e.assertThisInitialized
    }, function(e) {
      r = e.cclegacy, o = e._decorator, l = e.Node, s = e.sp, u = e.Component
    }, function(e) {
      m = e.default
    }, function(e) {
      c = e.GameOption
    }, function(e) {
      p = e.GameTitle
    }, function(e) {
      g = e.GameHand
    }, function(e) {
      h = e.default
    }, function(e) {
      f = e.default
    }, function(e) {
      d = e.GameClamp
    }, function(e) {
      y = e.GameReward
    }, function(e) {
      v = e.SceneManager
    }, function(e) {
      b = e.Complete
    }, function(e) {
      w = e.GamePlayer
    }, function(e) {
      G = e.GameStar
    }, function(e) {
      O = e.GameLight
    }, function(e) {
      C = e.default
    }, function(e) {
      P = e.Recommend
    }, function(e) {
      R = e.Ad
    }],
    execute: function() {
      var T, A, L, S, z, I, x, B, k, D, H, W, M, N, _, E, F, U, X, j, q, K, Z, J, Q;
      r._RF.push({}, "1a9dbOw/qlDhKX20GZMX69b", "Game", void 0);
      var V = o.ccclass,
        Y = o.property;
      e("Game", (T = V("Game"), A = Y(l), L = Y(s.Skeleton), S = Y(c), z = Y(p), I = Y(g), x = Y(d), B = Y(y), k = Y(w), D = Y(G), H = Y(O), W = Y({
        type: l,
        tooltip: "动画父节点"
      }), T((_ = t((N = function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return t = e.call.apply(e, [this].concat(r)) || this, i(t, "nButton", _, a(t)), i(t, "spine", E, a(t)), i(t, "gameOption", F, a(t)), i(t, "gameTitle", U, a(t)), i(t, "gameHand", X, a(t)), i(t, "gameClamp", j, a(t)), i(t, "gameReward", q, a(t)), i(t, "gamePlayer", K, a(t)), i(t, "gameStar", Z, a(t)), i(t, "gameLight", J, a(t)), i(t, "nParentAnim", Q, a(t)), t
        }
        n(t, e);
        var r = t.prototype;
        return r.playTheme2Error = function() {
          if (2 == m.themeIndex) {
            var e, t = null == (e = this.nParentAnim.getComponentsInChildren(s.Skeleton)) ? void 0 : e[0];
            if (t) {
              var n = t.setAnimation(0, "cry", !1);
              t.setTrackCompleteListener(n, (function() {
                t.setAnimation(0, "standby", !0), t.setTrackCompleteListener(n, (function() {}))
              }))
            }
          }
        }, r.playTheme2Correct = function(e) {
          if (2 == m.themeIndex) {
            var t, n = null == (t = this.nParentAnim.getComponentsInChildren(s.Skeleton)) ? void 0 : t[0];
            if (n) {
              var i = "animation" + e.toString();
              n.setAnimation(0, i, !1).timeScale = 0, n.setAnimation(60, "strut", !1).timeScale = 1
            }
          }
        }, r.start = function() {
          var e = this;
          this.gameOption.onOptionClick = function(t) {
            e.click(Number(t.target.name))
          }
        }, r.onSceneOpen = function() {
          this.nButton.active = !1, this.run(m.lv, !0)
        }, r.click = function(e) {
          var t, n = this,
            i = e == m.lvData.correct;
          if (i ? this.gameOption.resultWin++ : this.gameOption.resultLose++, this.gameOption.showResult(e, i), null == (t = this.gamePlayer) || t.playByResult(this.gameOption.resultWin, this.gameOption.resultLose), this.gameLight.playByResultRandom(this.gameOption.resultWin, this.gameOption.resultLose), C.instance.playResult(this.gameOption.resultWin, this.gameOption.resultLose), i) {
            h.instance.open(), this.gameHand.stop();
            var a = this.gameOption.getWorldPos(e);
            this.gameTitle.setProgress(m.lv, a), this.gameReward.show(m.lv, a);
            var r = m.lv + 1 >= m.data.length;
            this.gameClamp.play(a, this.nParentAnim.getWorldPosition(), this.gameReward, (function() {
              f.instance.play(m.themeIndex, m.lv + 1, n, void 0, (function() {
                r && n.next()
              })), n.gameStar.play(), !r && n.next()
            })), this.playTheme2Correct(m.lv + 1)
          } else m.errNum++, this.playTheme2Error()
        }, r.run = function(e, t) {
          var n = this;
          void 0 === e && (e = 0), void 0 === t && (t = !1), m.lv = e;
          var i, a = m.getData(e),
            r = this.gameOption.getWorldPos(a.correct);
          (this.gameOption.updateOption(a), C.instance.playTitle(a.audio), this.gameTitle.updateTitle(a), this.gameTitle.resetProgress(e), this.gameHand.replay(r), h.instance.close(), c.loadAssetsByLv(e, !0), this.gameReward.reset(), t) && (f.instance.reset(m.themeIndex, e, this), this.gameClamp.reset(), this.gameOption.resultLose = 0, m.errNum = 0, m.adInit ? (null == (i = P.instance) || i.setUI(!0), this.nButton.active = !0) : R.onReady = function() {
            var e;
            null == (e = P.instance) || e.setUI(!0), m.adInit = !0, n.nButton.active = !0
          })
        }, r.next = function() {
          var e = this,
            t = m.lv + 1;
          t < m.data.length ? this.run(t) : v.instance.toComplete((function(t) {
            var n;
            h.instance.close(), null == t || null == (n = t.getComponent(b)) || n.open(), 1 != m.themeIndex && 2 != m.themeIndex || (e.node.active = !1)
          }))
        }, t
      }(u)).prototype, "nButton", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), E = t(N.prototype, "spine", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), F = t(N.prototype, "gameOption", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), U = t(N.prototype, "gameTitle", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), X = t(N.prototype, "gameHand", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), j = t(N.prototype, "gameClamp", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), q = t(N.prototype, "gameReward", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), K = t(N.prototype, "gamePlayer", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Z = t(N.prototype, "gameStar", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), J = t(N.prototype, "gameLight", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Q = t(N.prototype, "nParentAnim", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), M = N)) || M));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/GameClamp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
  "use strict";
  var n, e, o, i, r, a, l, s, u, c, f;
  return {
    setters: [function(t) {
      n = t.applyDecoratedDescriptor, e = t.inheritsLoose, o = t.initializerDefineProperty, i = t.assertThisInitialized
    }, function(t) {
      r = t.cclegacy, a = t._decorator, l = t.Node, s = t.Vec3, u = t.v3, c = t.tween, f = t.Component
    }],
    execute: function() {
      var p, d, m, h, b, y, g, v, P, C, w;
      r._RF.push({}, "2b87dJ0bq1NsaScZWYxZIpP", "GameClamp", void 0);
      var O = a.ccclass,
        W = a.property;
      t("GameClamp", (p = O("GameClamp"), d = W(l), m = W(l), h = W(s), b = W(s), p((v = n((g = function(t) {
        function n() {
          for (var n, e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
          return n = t.call.apply(t, [this].concat(r)) || this, o(n, "nl", v, i(n)), o(n, "nr", P, i(n)), o(n, "aOffset", C, i(n)), o(n, "bOffset", w, i(n)), n.defaultWorldPos = u(), n
        }
        e(n, t);
        var r = n.prototype;
        return r.reset = function() {
          this.defaultWorldPos.set(300, 1e3, 0), this.node.setWorldPosition(this.defaultWorldPos)
        }, r.play = function(t, n, e, o) {
          var i = this;
          this.moveClamp(t.add(this.aOffset), !0, (function() {
            i.closeClamp((function() {
              i.moveClamp(n.add(i.bOffset), !1, (function() {
                e.reset(), o && o(), i.openClamp((function() {
                  i.moveClamp(i.defaultWorldPos, !1)
                }))
              }), (function(t) {
                e.setWorldPos(t)
              }))
            }))
          }))
        }, r.moveClamp = function(t, n, e, o) {
          void 0 === n && (n = !0);
          var i = u(t.x, this.defaultWorldPos.y, 0),
            r = u(t.x, t.y, 0);
          n || (i.set(this.node.worldPosition.x, t.y), r.set(t.x, t.y)), c(this.node).to(.3, {
            worldPosition: i
          }, {
            onUpdate: function(t, n) {
              o && o(t.worldPosition)
            }
          }).to(.3, {
            worldPosition: r
          }, {
            onUpdate: function(t, n) {
              o && o(t.worldPosition)
            }
          }).call((function() {
            e && e()
          })).start()
        }, r.closeClamp = function(t) {
          c(this.nl).to(.2, {
            angle: 15,
            position: u(-70, 56)
          }, {
            easing: "sineOut"
          }).start(), c(this.nr).to(.2, {
            angle: -15,
            position: u(70, 56)
          }, {
            easing: "sineOut"
          }).call((function() {
            t && t()
          })).start()
        }, r.openClamp = function(t) {
          c(this.nl).to(.1, {
            angle: 0,
            position: u(-70, 60)
          }, {
            easing: "sineOut"
          }).start(), c(this.nr).to(.1, {
            angle: 0,
            position: u(70, 60)
          }, {
            easing: "sineOut"
          }).call((function() {
            t && t()
          })).start()
        }, n
      }(f)).prototype, "nl", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), P = n(g.prototype, "nr", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), C = n(g.prototype, "aOffset", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return u(0, 0, 0)
        }
      }), w = n(g.prototype, "bOffset", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return u(0, 0, 0)
        }
      }), y = g)) || y));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/GameConfig.ts", ["cc"], (function(e) {
  "use strict";
  var t;
  return {
    setters: [function(e) {
      t = e.cclegacy
    }],
    execute: function() {
      t._RF.push({}, "594f9cSj2hJsKc4Ig6ZW1ZQ", "GameConfig", void 0);
      e("default", {
        randomSeed: Date.now(),
        debug: !1
      });
      t._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/GameData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfig.ts", "./Util.ts"], (function(t) {
  "use strict";
  var e, n, i, a;
  return {
    setters: [function(t) {
      e = t.createClass
    }, function(t) {
      n = t.cclegacy
    }, function(t) {
      i = t.default
    }, function(t) {
      a = t.default
    }],
    execute: function() {
      n._RF.push({}, "b0c08+4VidEvqgbVmfe5Y06", "GameData", void 0);
      t("default", new(function() {
        function t() {
          this.themeIndex = 3, this.uid = "", this.lv = 0, this.sceneIndex = 0, this.data = [], this.recommendData = [], this.title = "", this.selectd = [], this.errNum = 0, this.status = {
            mute: !1,
            aMute: !1
          }
        }
        var n = t.prototype;
        return n.getData = function(t) {
          return this.data[t]
        }, n.getSelectd = function(t) {
          var e = 1;
          return null != this.selectd[t] ? e = this.selectd[t] : 2 == t && (e = 0), e
        }, e(t, [{
          key: "adInit",
          get: function() {
            return !(!i.debug && "_tal0203" != a.getUrlParam("_adFree")) || window._adInit
          },
          set: function(t) {
            window._adInit = t
          }
        }, {
          key: "lvData",
          get: function() {
            return this.getData(this.lv)
          }
        }, {
          key: "randomSeed",
          get: function() {
            return Date.now()
          }
        }]), t
      }()));
      n._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/GameHand.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
  "use strict";
  var i, e, c, a, l, n, o, r, s, h, d, p;
  return {
    setters: [function(t) {
      i = t.applyDecoratedDescriptor, e = t.inheritsLoose, c = t.initializerDefineProperty, a = t.assertThisInitialized
    }, function(t) {
      l = t.cclegacy, n = t._decorator, o = t.Node, r = t.UIOpacity, s = t.v3, h = t.Tween, d = t.tween, p = t.Component
    }],
    execute: function() {
      var u, y, f, v, g, m, b;
      l._RF.push({}, "ad193h8qo5ME5J0Dq8mr+E9", "GameHand", void 0);
      var w = n.ccclass,
        A = n.property;
      t("GameHand", (u = w("GameHand"), y = A(o), f = A(r), u((m = i((g = function(t) {
        function i() {
          for (var i, e = arguments.length, l = new Array(e), n = 0; n < e; n++) l[n] = arguments[n];
          return (i = t.call.apply(t, [this].concat(l)) || this).worldpos = s(), c(i, "child", m, a(i)), c(i, "opacity", b, a(i)), i
        }
        e(i, t);
        var l = i.prototype;
        return l.replay = function(t) {
          var i = this;
          this.node.active = !0, this.opacity.opacity = 0, this.unscheduleAllCallbacks(), h.stopAllByTag(96412), this.scheduleOnce((function() {
            i.schedule((function() {
              i.play(t)
            }), 2)
          }), 6)
        }, l.stop = function() {
          this.node.active = !0, this.opacity.opacity = 0, this.unscheduleAllCallbacks(), h.stopAllByTag(96412)
        }, l.play = function(t) {
          var i = this;
          this.worldpos.set(t), this.node.active = !0, this.getComponent(r).opacity = 255, this.node.setWorldPosition(t.x + 30, t.y - 30, 0), this.opacity.opacity = 0, this.child.setScale(1.2, 1.2, 1.2), this.child.setPosition(30, -30), d(this.opacity).tag(96412).to(.6, {
            opacity: 255
          }).delay(.6).to(.1, {
            opacity: 0
          }).start(), d(this.child).tag(96412).parallel(d().tag(96412).to(.4, {
            position: s()
          }), d().tag(96412).delay(.4).call((function() {
            i.child.children[0].active = !1, i.child.children[1].active = !0
          })).to(.2, {
            scale: s(1, 1, 1)
          }).call((function() {
            i.child.children[0].active = !0, i.child.children[1].active = !1
          })).to(.2, {
            scale: s(1.2, 1.2, 1.2)
          }).call((function() {
            i.child.children[0].active = !1, i.child.children[1].active = !0
          })).to(.2, {
            scale: s(1, 1, 1)
          }).call((function() {
            i.child.children[0].active = !0, i.child.children[1].active = !1
          })).to(.2, {
            scale: s(1.2, 1.2, 1.2)
          })).start()
        }, i
      }(p)).prototype, "child", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), b = i(g.prototype, "opacity", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), v = g)) || v));
      l._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/GameLight.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
  "use strict";
  var i, e, n, r, a, l, u, s, h, o, c, g;
  return {
    setters: [function(t) {
      i = t.applyDecoratedDescriptor, e = t.inheritsLoose, n = t.initializerDefineProperty, r = t.assertThisInitialized
    }, function(t) {
      a = t.cclegacy, l = t._decorator, u = t.Node, s = t.UIOpacity, h = t.Tween, o = t.tween, c = t.v3, g = t.Component
    }],
    execute: function() {
      var p, m, y, N, f, v, d;
      a._RF.push({}, "73773rBINJEPpiVackAaGY3", "GameLight", void 0);
      var E = l.ccclass,
        S = l.property;
      t("GameLight", (p = E("GameLight"), m = S(u), y = S(u), p((v = i((f = function(t) {
        function i() {
          for (var i, e = arguments.length, a = new Array(e), l = 0; l < e; l++) a[l] = arguments[l];
          return i = t.call.apply(t, [this].concat(a)) || this, n(i, "nContent", v, r(i)), n(i, "nV", d, r(i)), i.prevIndex = -1, i.lightErrNum = 0, i.lightSucNum = 0, i
        }
        e(i, t);
        var a = i.prototype;
        return a.play = function(t, i) {
          var e = this,
            n = this.getComponent(s);
          n.opacity = 0, this.node.active = !0, this.node.setScale(.5, .5), this.nV.angle = 0, this.nV.active = t <= 1, this.nContent.children.forEach((function(i, e) {
            i.active = e == t
          })), h.stopAllByTag(66213), o(n).tag(66213).to(.2, {
            opacity: 255
          }, {
            easing: "sineOut"
          }).delay(.7).to(.2, {
            opacity: 0
          }, {
            easing: "backIn"
          }).start(), o(this.node).tag(66213).to(.2, {
            scale: c(1, 1)
          }, {
            easing: "backOut"
          }).delay(.57).to(.2, {
            scale: c(.5, .5)
          }, {
            easing: "backIn"
          }).call((function() {
            e.node.active = !1, i && i()
          })).start(), o(this.nV).tag(66213).to(4, {
            angle: -360
          }).start()
        }, a.playByResult = function(t, i) {
          var e = 0;
          0 == t && 0 == i || (1 == t ? e = 0 : t > 1 ? e = 1 : 1 == i ? e = 2 : i > 1 && (e = 3), this.play(e))
        }, a.playByResultRandom = function(t, i) {
          var e = Math.random() > .5;
          this.lightSucNum > 0 && t > 0 ? (this.lightSucNum++, this.lightErrNum = 0) : this.lightSucNum = 0, this.lightErrNum > 0 && i > 0 ? (this.lightErrNum++, this.lightSucNum = 0) : this.lightErrNum = 0, e && 0 == this.lightErrNum && 0 == this.lightSucNum && (t > 0 && this.lightSucNum++, i > 0 && this.lightErrNum++);
          var n = void 0;
          1 == this.lightSucNum && (n = 0), 2 == this.lightSucNum && (n = 1, this.lightSucNum = 0), 1 == this.lightErrNum && (n = 2), 2 == this.lightErrNum && (n = 3, this.lightErrNum = 0), null != n && this.play(n)
        }, i
      }(g)).prototype, "nContent", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), d = i(f.prototype, "nV", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), N = f)) || N));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/GameOption.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameData.ts"], (function(t) {
  "use strict";
  var e, n, i, o, a, r, l, s, c, u, p, d, h, f, v, m, g;
  return {
    setters: [function(t) {
      e = t.inheritsLoose, n = t.createClass
    }, function(t) {
      i = t.cclegacy, o = t._decorator, a = t.Button, r = t.Component, l = t.UIOpacity, s = t.v3, c = t.tween, u = t.sp, p = t.Sprite, d = t.color, h = t.Vec3, f = t.SpriteFrame, v = t.assetManager, m = t.Texture2D
    }, function(t) {
      g = t.default
    }],
    execute: function() {
      var y;
      i._RF.push({}, "4efa2nk4MZFH6oYAAVAETEB", "GameOption", void 0);
      var C = o.ccclass;
      o.property, t("GameOption", C("GameOption")(y = function(t) {
        function i() {
          for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
          return (e = t.call.apply(t, [this].concat(i)) || this).data = null, e._resultWin = 0, e._resultLose = 0, e.onOptionClick = function() {}, e
        }
        e(i, t);
        var o = i.prototype;
        return o.onLoad = function() {
          var t = this;
          this.node.children.forEach((function(e) {
            var n = e.addComponent(a),
              i = new r.EventHandler;
            i.target = t.node, i.component = "GameOption", i.handler = "onOptionSelfClick", n.clickEvents[0] = i
          }))
        }, o.onOptionSelfClick = function(t) {
          t.target.getChildByName("result").active || this.onOptionClick(t, this)
        }, o.updateOption = function(t) {
          this.data = t, this.updateSprite(t), this.resetResult()
        }, o.getWorldPos = function(t) {
          return this.node.children[t].getWorldPosition()
        }, o.showResult = function(t, e, n) {
          var i = this.node.children[t],
            o = i.getChildByName("result");
          if (o.active = !0, o.children.forEach((function(t) {
              return t.active = !1
            })), e) {
            var a, r = null == (a = i.getChildByName("content")) ? void 0 : a.getComponent(l),
              f = o.getChildByName("correct");
            f.active = !0, f.eulerAngles = s(0, 0, -30), f.setScale(1, 1, 1), c(f).to(.3, {
              eulerAngles: s(0, 0, 0)
            }, {
              easing: "backOut"
            }).delay(.1).to(.1, {
              scale: s()
            }, {
              onUpdate: function(t, e) {
                r.opacity = 255 - 255 * e
              }
            }).call((function() {
              n && n()
            })).start()
          } else {
            var v, m, g = o.getChildByName("error");
            g.active = !0;
            var y = g.getChildByName("c");
            y.active = !1, null == y || y.setScale(1.5, 1.5, 1.5);
            var C = null == (v = i.getChildByName("boxspine")) ? void 0 : v.getComponent(u.Skeleton);
            C && (C.setAnimation(0, "animation", !1), C.timeScale = 1, C.node.active = !0);
            var B = null == (m = i.getChildByName("box")) ? void 0 : m.getChildByName("boxclone");
            if (B) {
              B.active = !0, B.setScale(1, 1, 1);
              var N = B.getComponent(p),
                E = d(255, 0, 0, 255);
              c(B).to(.7, {
                scale: s(1.05, 1.05, 1.05)
              }, {
                easing: "quartOut",
                onUpdate: function(t, e) {
                  var n = 255 - 255 * e;
                  E.a = n, N.color = E
                }
              }).call((function() {
                y.active = !0, c(y).to(.3, {
                  scale: h.ONE
                }, {
                  easing: "backOut"
                }).start()
              })).start()
            }
            c(i).by(.05, {
              position: s(4)
            }).by(.05, {
              position: s(-8)
            }).by(.05, {
              position: s(8)
            }).by(.05, {
              position: s(-8)
            }).by(.05, {
              position: s(4)
            }).start()
          }
        }, i.loadAssetsByLv = function(t, e, n) {
          void 0 === t && (t = void 0), void 0 === e && (e = !1);
          var o = null == t ? g.lvData : g.getData(t);
          if (o) {
            var a = [].concat(o.options),
              r = 0,
              l = function() {
                ++r < a.length || (null == n || n(), e && i.loadAssetsByLv(t + 1, !1))
              };
            a.forEach((function(t) {
              if (t.spriteFrame.texture) return l();
              v.loadRemote(t.url, {
                ext: ".png"
              }, (function(e, n) {
                if (e) throw e;
                if (t.spriteFrame.texture) return l();
                var i = new m;
                i.image = n, t.spriteFrame.texture = i, l()
              }))
            }))
          }
        }, o.resetResult = function() {
          this.node.children.forEach((function(t) {
            var e, n, i;
            t.getChildByName("result").active = !1;
            var o = null == (e = t.getChildByName("box")) ? void 0 : e.getChildByName("boxclone");
            o && (o.active = !1), (null == (n = t.getChildByName("content")) ? void 0 : n.getComponent(l)).opacity = 255;
            var a = null == (i = t.getChildByName("boxspine")) ? void 0 : i.getComponent(u.Skeleton);
            a && (a.setAnimation(0, "animation", !1).timeScale = 0)
          }))
        }, o.updateSprite = function(t) {
          var e = this;
          this.node.children.forEach((function(n, i) {
            var o, a = null == (o = n.getChildByName("content")) ? void 0 : o.getComponent(p);
            e.setSprite(t.options[i], a)
          }))
        }, o.setSprite = function(t, e) {
          var n = this;
          t.spriteFrame.texture ? e.spriteFrame = t.spriteFrame : (e.spriteFrame = null, t.spriteFrame.off(f.EVENT_UV_UPDATED), t.spriteFrame.once(f.EVENT_UV_UPDATED, (function(i) {
            n.data.options.findIndex((function(e) {
              return e.url == t.url
            })) >= 0 && (e.spriteFrame = i)
          })))
        }, n(i, [{
          key: "resultWin",
          get: function() {
            return this._resultWin
          },
          set: function(t) {
            this._resultWin = t, this._resultLose = 0
          }
        }, {
          key: "resultLose",
          get: function() {
            return this._resultLose
          },
          set: function(t) {
            this._resultLose = t, this._resultWin = 0
          }
        }]), i
      }(r)) || y);
      i._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/GamePlayer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameData.ts"], (function(i) {
  "use strict";
  var n, t, e, a, o, l;
  return {
    setters: [function(i) {
      n = i.inheritsLoose
    }, function(i) {
      t = i.cclegacy, e = i._decorator, a = i.sp, o = i.Component
    }, function(i) {
      l = i.default
    }],
    execute: function() {
      var u;
      t._RF.push({}, "4c795O2Tc9JsLSY1jgwP3VS", "GamePlayer", void 0);
      var s = e.ccclass;
      e.property, i("GamePlayer", s("GamePlayer")(u = function(i) {
        function t() {
          return i.apply(this, arguments) || this
        }
        n(t, i);
        var e = t.prototype;
        return e.onLoad = function() {
          if (1 == l.themeIndex) {
            var i = this.getComponent(a.Skeleton);
            i && (i.setAnimation(900, "blink", !0), i.setMix("daiji-2", "daiji", .25), i.setMix("daiji", "daiji-2", .25), i.setMix("dadui", "daiji", .25), i.setMix("dacuo", "daiji", .25), i.setMix("daiji", "dadui", .2), i.schedule((function() {
              if ("daiji" == (null == i ? void 0 : i.animation)) {
                var n = i.setAnimation(0, "daiji-2", !1);
                n.timeScale = 1.2, i.setTrackCompleteListener(n, (function() {
                  null == i || i.setAnimation(0, "daiji", !0), null == i || i.setTrackCompleteListener(n, (function() {}))
                }))
              }
            }), 4))
          }
        }, e.onEnable = function() {
          var i = this.getComponent(a.Skeleton);
          null == i || i.setAnimation(0, "daiji", !0)
        }, e.play = function(i) {
          var n = this.getComponent(a.Skeleton);
          "dacuo" == i ? null == n || n.setMix((null == n ? void 0 : n.animation) || "daiji", i, .05) : null == n || n.setMix((null == n ? void 0 : n.animation) || "daiji", i, .2);
          var t = null == n ? void 0 : n.setAnimation(0, i, !1);
          null == n || n.setTrackCompleteListener(t, (function() {
            (null == n ? void 0 : n.animation) && (null == n || n.setMix(n.animation, "daiji", .1)), null == n || n.setAnimation(0, "daiji", !0), null == n || n.setTrackCompleteListener(t, (function() {}))
          }))
        }, e.playTuzi = function(i, n) {
          var t = this.getComponent(a.Skeleton),
            e = "daiji";
          i > 0 ? e = "dadui" : n > 0 && (e = "dacuo");
          var o = null == t ? void 0 : t.setAnimation(0, e, !1);
          null == t || t.setTrackCompleteListener(o, (function() {
            null == t || t.setAnimation(0, "daiji", !0), null == t || t.setTrackCompleteListener(o, (function() {}))
          }))
        }, e.playByResult = function(i, n) {
          1 != l.themeIndex ? 0 == i && 0 == n ? this.play("daiji") : 1 == i ? this.play("dadui") : i > 1 ? this.play("liandui") : 1 == n ? this.play("dacuo") : n > 1 && this.play("liancuo") : this.playTuzi(i, n)
        }, t
      }(o)) || u);
      t._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/GameReward.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
  "use strict";
  var t, o, n, r;
  return {
    setters: [function(e) {
      t = e.inheritsLoose
    }, function(e) {
      o = e.cclegacy, n = e._decorator, r = e.Component
    }],
    execute: function() {
      var i;
      o._RF.push({}, "14122D7fD9O6bp+EzOj7nZE", "GameReward", void 0);
      var c = n.ccclass;
      n.property, e("GameReward", c("GameReward")(i = function(e) {
        function o() {
          return e.apply(this, arguments) || this
        }
        t(o, e);
        var n = o.prototype;
        return n.reset = function() {
          this.node.children.forEach((function(e) {
            e.active = !1
          }))
        }, n.setWorldPos = function(e) {
          this.node.setWorldPosition(e)
        }, n.show = function(e, t) {
          this.node.setWorldPosition(t), this.node.children.forEach((function(t, o) {
            t.active = o == e
          }))
        }, o
      }(r)) || i);
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/GameStar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AudioManager.ts"], (function(t) {
  "use strict";
  var a, n, e, o, i, r, c, s, d;
  return {
    setters: [function(t) {
      a = t.inheritsLoose
    }, function(t) {
      n = t.cclegacy, e = t._decorator, o = t.UIOpacity, i = t.v3, r = t.tween, c = t.math, s = t.Component
    }, function(t) {
      d = t.default
    }],
    execute: function() {
      var p;
      n._RF.push({}, "3550djbCd9CnIvbnwDj2erM", "GameStar", void 0);
      var u = e.ccclass;
      e.property, t("GameStar", u("GameStar")(p = function(t) {
        function n() {
          return t.apply(this, arguments) || this
        }
        return a(n, t), n.prototype.play = function() {
          d.instance.playStar();
          var t = this.node.children[0].children,
            a = this.node.children[1].children,
            n = t.length,
            e = 360 / n,
            s = this.node.children[0].getComponent(o);
          s.opacity = 0, s.node.active = !0;
          var p = this.node.children[1].getComponent(o);
          p.opacity = 0, p.node.active = !0;
          var u = i();
          r(u).to(1, {
            x: 1
          }, {
            easing: "quartOut",
            onUpdate: function(o, i) {
              var r = o.x,
                d = r;
              d > .5 ? d = 1 - (d - .5) / .5 * 1.5 : d *= 3, d = c.clamp(d, 0, 1);
              var u = r;
              u > .7 ? u = 1 - (u - .7) / .3 : u *= 5, u = c.clamp(u, 0, 1), s.opacity = 255 * d, p.opacity = 255 * u;
              for (var h = 1.1 * r, l = 0; l < n; l++) {
                var v = 220 * Math.cos(c.toRadian(e * l)) * h,
                  f = 220 * Math.sin(c.toRadian(e * l)) * h;
                t[l].setPosition(v, f)
              }
              for (var y = r, m = 0; m < n; m++) {
                var g = 130 * Math.cos(c.toRadian(e * m + 90)) * y,
                  M = 130 * Math.sin(c.toRadian(e * m + 90)) * y;
                a[m].setPosition(g, M)
              }
            }
          }).start()
        }, n
      }(s)) || p);
      n._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/GameTitle.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SuperText.ts", "./LGame.ts"], (function(e) {
  "use strict";
  var t, n, o, r, i, a, l, s, c, u, p, f, g, d;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, o = e.initializerDefineProperty, r = e.assertThisInitialized
    }, function(e) {
      i = e.cclegacy, a = e._decorator, l = e.Node, s = e.v3, c = e.tween, u = e.Tween, p = e.LabelOutline, f = e.Component
    }, function(e) {
      g = e.SuperText
    }, function(e) {
      d = e.LGame
    }],
    execute: function() {
      var b, h, y, v, T, m, x;
      i._RF.push({}, "f2c81URnoRJJaWz99oUuSHY", "GameTitle", void 0);
      var w = a.ccclass,
        L = a.property;
      e("GameTitle", (b = w("GameTitle"), h = L(g), y = L(l), b((m = t((T = function(e) {
        function t() {
          for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
          return t = e.call.apply(e, [this].concat(i)) || this, o(t, "label", m, r(t)), o(t, "progress", x, r(t)), t
        }
        n(t, e);
        var i = t.prototype;
        return i.setTitleLoading = function() {
          this.label.sourceText = "Loading..."
        }, i.updateTitle = function(e) {
          this.setLabel(e)
        }, i.resetProgress = function(e) {
          this.progress.children.forEach((function(t, n) {
            t.active = n < e
          }))
        }, i.setProgress = function(e, t) {
          var n = this.progress.children[e];
          if (n) {
            var o = s(n.worldPosition.x, n.worldPosition.y),
              r = s(t.x, t.y);
            n.setWorldPosition(t), n.active = !0, c(n).to(.5, {
              scale: s(2.1, 2.1, 2.1)
            }, {
              easing: "backOut"
            }).delay(.1).to(.25, {
              scale: s(1, 1, 1)
            }, {
              easing: "backIn",
              onStart: function(e) {
                c(r).parallel(c().to(.25, {
                  x: o.x
                }, {
                  easing: "sineIn"
                }), c().to(.25, {
                  y: o.y
                }, {
                  easing: "sineOut",
                  onUpdate: function(e, t) {
                    n.setWorldPosition(r)
                  }
                })).start()
              }
            }).start()
          }
        }, i.setLabel = function(e) {
          this.label.sourceText = e.title, u.stopAllByTag(6231);
          var t = this.label.getLabels(Object.keys(d.colors)),
            n = s(1, 1, 1);
          c(n).tag(6231).delay(1).to(.3, {
            x: 0,
            y: 0
          }, {
            easing: "backIn",
            onUpdate: function(e, o) {
              for (var r = 0; r < t.length; r++) t[r].node.setScale(n)
            }
          }).call((function() {
            for (var e = 0; e < t.length; e++) {
              var n = t[e].key;
              t[e].color = d.colors[n];
              var o = t[e].node.getComponent(p);
              o.enabled = "white" == n, "white" == n && (o.color = d.colorDefault, o.width = 3)
            }
          })).to(.3, {
            x: 1,
            y: 1
          }, {
            easing: "backOut",
            onUpdate: function(e, o) {
              for (var r = 0; r < t.length; r++) t[r].node.setScale(n)
            }
          }).start()
        }, t
      }(f)).prototype, "label", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), x = t(T.prototype, "progress", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), v = T)) || v));
      i._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Home.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SceneDirection.ts", "./GameData.ts"], (function(e) {
  "use strict";
  var t, n, i, o, r, a, l, c, u, s, p, f, y, b, m;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, o = e.assertThisInitialized
    }, function(e) {
      r = e.cclegacy, a = e._decorator, l = e.sp, c = e.Label, u = e.Node, s = e.UIOpacity, p = e.tween, f = e.v3, y = e.Component
    }, function(e) {
      b = e.SceneDirection
    }, function(e) {
      m = e.default
    }],
    execute: function() {
      var h, v, g, d, z, P, w, S, D, H, F, I, L;
      r._RF.push({}, "3351590ovxFzqjxqJlazlqM", "Home", void 0);
      var _ = a.ccclass,
        k = a.property;
      e("Home", (h = _("Home"), v = k({
        tooltip: "主题"
      }), g = k(l.Skeleton), d = k(l.Skeleton), z = k(c), P = k(u), h((D = t((S = function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
          return t = e.call.apply(e, [this].concat(r)) || this, i(t, "theme", D, o(t)), i(t, "spine", H, o(t)), i(t, "mao", F, o(t)), i(t, "label", I, o(t)), i(t, "nPlay", L, o(t)), t
        }
        n(t, e);
        var r = t.prototype;
        return r.onLoad = function() {
          this.nPlay.active = !1
        }, r.start = function() {
          this.setTitle()
        }, r.setTitle = function() {
          this.label && m.title && (this.label.string = m.title)
        }, r.playButton = function() {
          var e = this.nPlay;
          "portrait" == b.direction ? (e.setScale(.8, .8), e.setPosition(120, -80)) : (e.setScale(1.2, 1.2), e.setPosition(0, -30));
          var t = e.getComponent(s);
          e.active = !0, t.opacity = 0, p(e).by(.5, {
            scale: f(-.05, -.05, -.05)
          }, {
            easing: "sineInOut",
            onUpdate: function(e, n) {
              t.opacity < 255 && (t.opacity = 255 * n)
            }
          }).by(.5, {
            scale: f(.05, .05, .05)
          }, {
            easing: "sineInOut"
          }).union().repeatForever().start()
        }, t
      }(y)).prototype, "theme", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), H = t(S.prototype, "spine", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), F = t(S.prototype, "mao", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), I = t(S.prototype, "label", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), L = t(S.prototype, "nPlay", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), w = S)) || w));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/IData.ts", ["cc"], (function() {
  "use strict";
  var t;
  return {
    setters: [function(c) {
      t = c.cclegacy
    }],
    execute: function() {
      t._RF.push({}, "fb592N+2WNHAr+Ovrp4ZNI6", "IData", void 0), t._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/IRes.ts", ["cc"], (function() {
  "use strict";
  var e;
  return {
    setters: [function(t) {
      e = t.cclegacy
    }],
    execute: function() {
      e._RF.push({}, "bcebb4q9M1Kw7G05LokeITS", "IRes", void 0), e._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/LData.ts", ["cc", "./GameData.ts"], (function(t) {
  "use strict";
  var e, i, n;
  return {
    setters: [function(t) {
      e = t.cclegacy, i = t.SpriteFrame
    }, function(t) {
      n = t.default
    }],
    execute: function() {
      e._RF.push({}, "30a25LMARtFF4HmHcUZu5BP", "LData", void 0);
      t("LData", function() {
        function t() {}
        return t.generateLevels = function(t) {
          var e = this,
            i = [];
          return t.questions.forEach((function(t) {
            var n = {
              options: [],
              correct: 0,
              title: t.title,
              id: t.id,
              audio: t.audio
            };
            t.options.forEach((function(t, i) {
              var r = t.cover_img;
              n.options.push(e.giveImage(r)), t.is_correct && (n.correct = i)
            })), i.push(n)
          })), n.recommendData = t.recommends, n.data = i, n.title = t.title, n.uid = t.uid, i
        }, t.updateLevels = function(t, e) {
          var i = this,
            r = [];
          return t.questions.forEach((function(t, o) {
            if (!(o < e)) {
              var a = n.data[o];
              a.title = t.title, a.id = t.id, a.audio = t.audio, a.correct = t.options.findIndex((function(t) {
                return t.is_correct
              })), t.options.forEach((function(t, e) {
                var n = t.cover_img;
                a.options[e].spriteFrame.decRef(), a.options[e] = i.giveImage(n)
              })), r.push(a)
            }
          })), r
        }, t.giveImage = function(t) {
          return {
            url: t,
            spriteFrame: new i
          }
        }, t
      }());
      e._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/LGame.ts", ["cc"], (function(e) {
  "use strict";
  var r, c;
  return {
    setters: [function(e) {
      r = e.cclegacy, c = e.color
    }],
    execute: function() {
      r._RF.push({}, "8c8b2s5xDxInYk9BY1V0+Rd", "LGame", void 0);
      var t = e("LGame", (function() {}));
      t.colors = {
        red: c(220, 0, 0),
        yellow: c(255, 192, 0),
        blue: c(0, 192, 255),
        green: c(24, 208, 0),
        pink: c(255, 0, 168),
        purple: c(150, 0, 255),
        orange: c(255, 132, 0),
        grey: c(150, 150, 176),
        black: c(0, 0, 0),
        white: c(255, 255, 255)
      }, t.colorDefault = c().fromHEX("#3052CB"), r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/main", ["./AudioManager.ts", "./BgManager.ts", "./Main.ts", "./Recommend.ts", "./SceneDirection.ts", "./SceneManager.ts", "./SuperText.ts", "./BSingleton.ts", "./Ad.ts", "./ClientEvent.ts", "./Util.ts", "./UtilSend.ts", "./Audio.ts", "./AudioLoad.ts", "./GameData.ts", "./IData.ts", "./IRes.ts", "./Request.ts", "./Configuration.ts", "./GameConfig.ts", "./d.ts", "./BanTouch.ts", "./Scene.ts", "./Output.ts", "./LData.ts", "./LGame.ts", "./ButtonEvent.ts", "./Complete.ts", "./Game.ts", "./GameClamp.ts", "./GameHand.ts", "./GameLight.ts", "./GameOption.ts", "./GamePlayer.ts", "./GameReward.ts", "./GameStar.ts", "./GameTitle.ts", "./Home.ts", "./Anim.ts"], (function() {
  "use strict";
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function() {}
  }
}));

System.register("chunks:///_virtual/Main.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Request.ts", "./LData.ts", "./GameData.ts", "./SceneManager.ts", "./UtilSend.ts", "./Home.ts", "./AudioManager.ts", "./Util.ts", "./ButtonEvent.ts", "./BgManager.ts"], (function(e) {
  "use strict";
  var n, t, a, o, r, i, u, c, s, l, d, f, m, p, v, g;
  return {
    setters: [function(e) {
      n = e.inheritsLoose, t = e.asyncToGenerator, a = e.regeneratorRuntime
    }, function(e) {
      o = e.cclegacy, r = e._decorator, i = e.Component
    }, function(e) {
      u = e.default
    }, function(e) {
      c = e.LData
    }, function(e) {
      s = e.default
    }, function(e) {
      l = e.SceneManager
    }, function(e) {
      d = e.default
    }, function(e) {
      f = e.Home
    }, function(e) {
      m = e.default
    }, function(e) {
      p = e.default
    }, function(e) {
      v = e.ButtonEvent
    }, function(e) {
      g = e.BgManager
    }],
    execute: function() {
      var h;
      o._RF.push({}, "ed57a2Lg0tGDruYWErwNHW7", "Main", void 0);
      var w = r.ccclass,
        _ = (r.property, e("Main", w("Main")(h = function(e) {
          function o() {
            return e.apply(this, arguments) || this
          }
          return n(o, e), o.prototype.onLoad = function() {
            if (window._theme_index) s.themeIndex = Math.floor(window._theme_index);
            else {
              var e = Number(p.getUrlParam("_theme_index"));
              s.themeIndex = e && e > 0 && e <= 3 ? Math.floor(e) : 3
            }
            var n = 2,
              t = void 0,
              a = function() {
                var e, a;
                --n > 0 || (null == (e = t) || e.setTitle(), y || null == (a = t) || a.playButton())
              };
            o.initData().then((function(e) {
              a()
            })), l.instance.toHome((function(e) {
              t = null == e ? void 0 : e.getComponent(f), a(), d.onGameLoadingComplete(), window._sendGameInit && window._sendGameInit(), m.instance.playWelcome()
            }))
          }, o.updateData = function() {
            return o.initData(!0)
          }, o.initData = function() {
            var e = t(a().mark((function e(n) {
              var t, o;
              return a().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (void 0 === n && (n = !1), e.prev = 1, n) {
                      e.next = 5;
                      break
                    }
                    if (!window._GameData) {
                      e.next = 5;
                      break
                    }
                    return e.abrupt("return", Promise.resolve(c.generateLevels(window._GameData)));
                  case 5:
                    if (n) {
                      e.next = 11;
                      break
                    }
                    return e.next = 8, u.getData();
                  case 8:
                    e.t0 = e.sent, e.next = 14;
                    break;
                  case 11:
                    return e.next = 13, u.getDataRandom();
                  case 13:
                    e.t0 = e.sent;
                  case 14:
                    return t = e.t0, o = n ? c.updateLevels(t, s.lv) : c.generateLevels(t), e.abrupt("return", Promise.resolve(o));
                  case 19:
                    return e.prev = 19, e.t1 = e.catch(1), console.error(e.t1), e.abrupt("return", Promise.reject(e.t1));
                  case 23:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [1, 19]
              ])
            })));
            return function(n) {
              return e.apply(this, arguments)
            }
          }(), o.changeHomePlayTitle = function(e) {
            var n;
            void 0 === e && (e = !1);
            var t = l.instance.node.getComponentsInChildren(f);
            t.forEach((function(n) {
              n.nPlay.active = e, n.label.node.active = e
            })), null == (n = t[0].getComponentInChildren(g)) || n.playAnimation(window._theme_index)
          }, o
        }(i)) || h)),
        y = !1;
      window._onPlayGame = function() {
        y || (y = !0, _.changeHomePlayTitle(), v.playGame())
      }, window._onPlayGame2 = function() {
        y || (y = !0, v.playGame2())
      }, o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Output.ts", ["cc", "./Configuration.ts"], (function() {
  "use strict";
  var t, n;
  return {
    setters: [function(n) {
      t = n.cclegacy
    }, function(t) {
      n = t.Configuration
    }],
    execute: function() {
      t._RF.push({}, "3596952++xA3qVV58LejIhd", "Output", void 0), console.log("Game v" + n.information.version), t._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Recommend.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BSingleton.ts", "./SceneDirection.ts", "./GameData.ts"], (function(t) {
  "use strict";
  var e, n, i, o, r, a, s, l, c, u, d, h, p, f, v, m, g, y, b, x, C, S, w, _, D, F, O, I;
  return {
    setters: [function(t) {
      e = t.inheritsLoose, n = t.applyDecoratedDescriptor, i = t.initializerDefineProperty, o = t.assertThisInitialized
    }, function(t) {
      r = t.cclegacy, a = t._decorator, s = t.ScrollView, l = t.Material, c = t.UITransform, u = t.Layout, d = t.tween, h = t.v3, p = t.Component, f = t.resources, v = t.Prefab, m = t.instantiate, g = t.assetManager, y = t.SpriteFrame, b = t.Texture2D, x = t.Node, C = t.Layers, S = t.UIOpacity, w = t.Sprite, _ = t.Button, D = t.v2
    }, function(t) {
      F = t.default
    }, function(t) {
      O = t.SceneDirection
    }, function(t) {
      I = t.default
    }],
    execute: function() {
      var R, z, L, P, E, M, k, B, H;
      r._RF.push({}, "46b7cFgd2VJOLbbxY7EoSTE", "Recommend", void 0);
      var T = a.ccclass,
        U = a.property;
      t("Recommend", (R = T("Recommend"), z = U(s), L = U(l), P = U(c), R((M = function(t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
          return e = t.call.apply(t, [this].concat(r)) || this, i(e, "sv", k, o(e)), i(e, "mBorder", B, o(e)), i(e, "sfbg", H, o(e)), e.dir = -1, e.minx = 0, e.maxWidth = 0, e._stop = !1, e.config = {
            childHeight: 75,
            stopTime: 1,
            speed: 20
          }, e
        }
        e(n, t);
        var r = n.prototype;
        return r.onLoad = function() {
          t.prototype.onLoad.call(this), this.node.active = "portrait" == O.direction
        }, n.addRecommend = function(t, e) {
          return t.children.length > 0 || "portrait" != O.direction ? null == e ? void 0 : e() : void f.load("prefab/other/Recommend", v, (function(n, i) {
            if (n) throw null == e || e(), n;
            if (t.children.length > 0) return null == e ? void 0 : e();
            m(i).setParent(t), null == e || e()
          }))
        }, r.setUI = function(t) {
          var e, n, i;
          if (void 0 === t && (t = !1), "portrait" == O.direction) {
            var o = 530;
            t || (o = 640), this.maxWidth = o, null == (e = this.sv.node.getComponent(c)) || e.setContentSize(o, 91), this.sfbg.setContentSize(o, 91), null == (n = this.sv.content) || null == (i = n.getComponent(u)) || i.updateLayout(!0), this.minx = this.sv.getMaxScrollOffset().x
          }
        }, r.playAnim = function(t, e) {
          d(t).delay(.2).by(.23, {
            scale: h(.09, -.09)
          }, {
            easing: "sineOut"
          }).by(.13, {
            scale: h(-.11, .11)
          }, {
            easing: "sineInOut"
          }).by(.1, {
            scale: h(.03, -.03)
          }, {
            easing: "sineInOut"
          }).by(.1, {
            scale: h(-.01, .01)
          }, {
            easing: "sineInOut"
          }).by(.05, {
            scale: h(.01, -.01)
          }, {
            easing: "sineInOut"
          }).by(.05, {
            scale: h(-.01, .01)
          }, {
            easing: "sineInOut"
          }).call((function() {
            e && e()
          })).start()
        }, r.load = function() {
          "portrait" == O.direction && (this.minx = this.sv.getMaxScrollOffset().x, this.loadSprite())
        }, r.update = function(t) {
          var e = this;
          if (!this._stop && !(this.sv.isScrolling() || this.minx <= 0)) {
            if (-1 == this.dir)
              if (this.getFirst(85)) return this._stop = !0, void this.playFirst((function() {
                e._stop = !1
              }));
            var n = this.sv.content.position;
            n.x <= -this.minx ? (1 != this.dir && this.onChangeDirection(1), this.dir = 1) : n.x >= 0 && (-1 != this.dir && this.onChangeDirection(-1), this.dir = -1);
            var i = n.x + this.dir * t * this.config.speed;
            this.sv.content.setPosition(i, n.y)
          }
        }, r.onChangeDirection = function(t) {
          var e = this;
          1 == t ? (this._stop = !0, this.playFirst((function() {
            e._stop = !1
          }), 2e3)) : -1 == t && this.resetFirst()
        }, r.tolink = function(t, e) {
          top.location.href = e
        }, r.loadSprite = function() {
          var t = this,
            e = 0,
            n = function n(i, o) {
              if (!(i >= o)) {
                var r = I.recommendData[i];
                if (r) {
                  var a = r.cover_img;
                  g.loadRemote(a, {
                    ext: ".jpg"
                  }, (function(a, s) {
                    var l, h, p;
                    if (a) throw n(i + 1, o), a;
                    var f = new y,
                      v = new b;
                    v.image = s, f.texture = v;
                    var m = new x,
                      g = m.addComponent(c);
                    m.layer = C.Enum.UI_2D;
                    var F = m.addComponent(S);
                    F.opacity = 0, t.sv.content.addChild(m), d(F).delay(.1 * e++).to(.5, {
                      opacity: 255
                    }).start();
                    var O = new x,
                      I = O.addComponent(c);
                    O.layer = C.Enum.UI_2D;
                    var R = O.addComponent(w);
                    R.spriteFrame = f, O.addComponent(_).clickEvents[0] = t.getHandler(r.link), O.setParent(m), f.packable = !1, R.customMaterial = t.mBorder, null == (l = R.material) || l.setProperty("iResolution", D(f.width, f.height));
                    var z = t.config.childHeight / f.height;
                    I.setContentSize(f.width * z, f.height * z), g.setContentSize(f.width * z, f.height * z), null == (h = t.sv.content) || null == (p = h.getComponent(u)) || p.updateLayout(!0), t.minx = t.sv.getMaxScrollOffset().x, n(i + 1, o)
                  }))
                }
              }
            };
          n(0, 4), n(4, I.recommendData.length)
        }, r.getHandler = function(t) {
          var e = new p.EventHandler;
          return e.target = this.node, e.component = "Recommend", e.handler = "tolink", e.customEventData = t, e
        }, r.getFirst = function(t) {
          var e;
          void 0 === t && (t = 560);
          for (var n = null == (e = this.sv.content) ? void 0 : e.children, i = 0; i < n.length; i++) {
            var o = n[i];
            if (!o._isOut) {
              var r = o.worldPosition.x;
              if (r > 0 && r < t) return o
            }
          }
        }, r.playFirst = function(t, e) {
          var n = this;
          void 0 === e && (e = 560);
          var i = this.getFirst(e);
          if (!i) return t();
          i._isOut = !0, this.playAnim(i, (function() {
            n.playFirst(t)
          }))
        }, r.resetFirst = function() {
          for (var t, e = null == (t = this.sv.content) ? void 0 : t.children, n = 0; n < e.length; n++) {
            e[n]._isOut = !1
          }
        }, n
      }(F.Complete()), k = n(M.prototype, "sv", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), B = n(M.prototype, "mBorder", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), H = n(M.prototype, "sfbg", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), E = M)) || E));
      r._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Request.ts", ["cc", "./Configuration.ts", "./Util.ts", "./GameData.ts"], (function(i) {
  "use strict";
  var o, t, e, r;
  return {
    setters: [function(i) {
      o = i.cclegacy
    }, function(i) {
      t = i.Configuration
    }, function(i) {
      e = i.default
    }, function(i) {
      r = i.default
    }],
    execute: function() {
      o._RF.push({}, "df711ilpRFDf4U+SK+BQ0PK", "Request", void 0);
      var _ = i("default", function() {
        function i() {}
        return i.getData = function() {
          var i = e.getUrlParam("uid"),
            o = e.getUrlParam("_apiurl"),
            r = t.apiurl;
          return o && (r = o), r += i, this.uid = i, this.url = r, this.get(i, r)
        }, i.getDataRandom = function() {
          var i = e.getUrlParam("_apiurl"),
            o = e.getUrlParam("_local"),
            _ = t.apiurl;
          return i && (_ = i), "1" == o ? this.get(null, _ + r.uid + "/random") : this.get(r.uid, _ + r.uid + "/random")
        }, i.get = function(i, o) {
          var t = this;
          return new Promise((function(e, r) {
            if (!i) {
              var _ = c;
              return "random" == o.substring(o.length - 6) && ++t.randomIndex % 3 >= 1 && (_ = t.randomIndex % 3 == 1 ? m : a), void e(_.results)
            }
            s(o, (function(i) {
              var o = JSON.parse(i);
              e(o.results)
            }))
          }))
        }, i
      }());

      function s(i, o, t, e) {
        void 0 === t && (t = null), void 0 === e && (e = {}), e.method = e.method || "GET", e.startLimit = e.startLimit || 1e3, e.maxLimit = e.maxLimit || 6e5;
        var r = 0,
          _ = new XMLHttpRequest;
        _.onerror = function(o) {
          console.log("xhr: %s error", i, o), s.do(i, t, e, _, ++r)
        }, _.onload = function(c) {
          _.status >= 200 && _.status < 400 ? o(_.responseText) : (console.log("xhr: %s load error", i, c), s.do(i, t, e, _, ++r))
        }, _.ontimeout = function(o) {
          console.log("xhr: %s timeout", i, o), s.do(i, t, e, _, ++r)
        }, s.do(i, t, e, _, r)
      }
      _.uid = "", _.url = "", _.randomIndex = 0, s.do = function(i, o, t, e, r) {
        void 0 === o && (o = null);
        var _ = r ? Math.pow(2, r - 1) * t.startLimit : 0;
        _ = _ < t.maxLimit ? _ : t.maxLimit;
        var s = Math.random() * _;
        e.timeout = s < 2e3 ? 2e3 : s, setTimeout((function() {
          e.open(t.method, i), e.send(o)
        }), s)
      };
      var c = {
          status: "100",
          msg: "ok",
          results: {
            uid: "0F4ZgdNP",
            title: "How about color mixing？",
            cover_img: "https://img.mashaquiz.com/0F4ZgdNP__cover_480_251.jpg",
            category: "color",
            questions: [{
              id: 765,
              title: "Which picture shows a green shark?",
              order: 1,
              audio: "https://img1.b1.games/quiz_2/question_audio/ba3ebd548d1942b19ead42a5c6bd7f72.mp3",
              options: [{
                id: 1793,
                order: 1,
                cover_img: "https://img.mashaquiz.com/ce024c5aa98d472bbed44d39c8ac117a.png",
                is_correct: !1
              }, {
                id: 1794,
                order: 2,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_1__option_2_240_126.jpg",
                is_correct: !0
              }, {
                id: 1795,
                order: 3,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_1__option_3_240_126.jpg",
                is_correct: !1
              }, {
                id: 1796,
                order: 4,
                cover_img: "https://image.paintbyclick.com/iLZy68A0wT18j7ugUw7U1GLQyNQdjlPO6fX5ce9045I/rs:fit:500:500/q:80/f:png/aHR0cHM6Ly9hc3NldHMuYjEuZ2FtZXMvcGFpbnQvZHJhd19pbWcvOTkzNTczMzJmY2Y0NGVlZjhlZTdmMDI3YmMxMjM0MmEucG5n",
                is_correct: !1
              }]
            }, {
              id: 766,
              title: "Which picture shows a single pink fish?",
              order: 2,
              audio: "",
              options: [{
                id: 1797,
                order: 1,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_2__option_1_240_126.jpg",
                is_correct: !0
              }, {
                id: 1798,
                order: 2,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_2__option_2_240_126.jpg",
                is_correct: !1
              }, {
                id: 1799,
                order: 3,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_2__option_3_240_126.jpg",
                is_correct: !1
              }, {
                id: 1800,
                order: 4,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_2__option_4_240_126.jpg",
                is_correct: !1
              }]
            }, {
              id: 767,
              title: "Which picture shows three pink fishes?",
              order: 3,
              options: [{
                id: 1801,
                order: 1,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_3__option_1_240_126.jpg",
                is_correct: !0
              }, {
                id: 1802,
                order: 2,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_3__option_2_240_126.jpg",
                is_correct: !1
              }, {
                id: 1803,
                order: 3,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_3__option_3_240_126.jpg",
                is_correct: !1
              }, {
                id: 1804,
                order: 4,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_3__option_4_240_126.jpg",
                is_correct: !1
              }]
            }, {
              id: 768,
              title: "Which one has 4“Yellow Sharks”？",
              order: 4,
              audio: "https://img1.b1.games/quiz_2/question_audio/ba3ebd548d1942b19ead42a5c6bd7f72.mp3",
              options: [{
                id: 1805,
                order: 1,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_4__option_1_240_126.jpg",
                is_correct: !0
              }, {
                id: 1806,
                order: 2,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_4__option_2_240_126.jpg",
                is_correct: !1
              }, {
                id: 1807,
                order: 3,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_4__option_3_240_126.jpg",
                is_correct: !1
              }, {
                id: 1808,
                order: 4,
                cover_img: "https://img.mashaquiz.com/0F4ZgdNP__question_4__option_4_240_126.jpg",
                is_correct: !1
              }]
            }],
            recommends: [{
              uid: "cZiHvPIJ",
              title: "Learn about scientific inventions with baby",
              cover_img: "https://img.mashaquiz.com/U8LnaTve__cover_480_251_v1.jpg",
              link: "https://mashaquiz.com/p/cZiHvPIJ"
            }, {
              uid: "2twXpR9A",
              title: "Can you tell the right shapes of the following pictures？",
              cover_img: "https://img.mashaquiz.com/2twXpR9A__cover_480_251.jpg",
              link: "https://mashaquiz.com/p/2twXpR9A"
            }, {
              uid: "q8v6NOsK",
              title: "Learn about animals",
              cover_img: "https://img.mashaquiz.com/094a64e3-05bd-4395-b525-eaca54d22900.jpg",
              link: "https://mashaquiz.com/p/q8v6NOsK"
            }, {
              uid: "awBX7c8Z",
              title: "Fun math quiz",
              cover_img: "https://img.mashaquiz.com/awBX7c8Z__cover_480_251.jpg",
              link: "https://mashaquiz.com/p/awBX7c8Z"
            }, {
              uid: "ySZzHP35",
              title: "Do you know the music of baby？",
              cover_img: "https://img.mashaquiz.com/ae34fd10-f546-4bc7-86b1-159d5dd97d19.jpg",
              link: "https://mashaquiz.com/p/ySZzHP35"
            }, {
              uid: "oWntttKX",
              title: "Can you tell the color of  Bathtub Baby？",
              cover_img: "https://img.mashaquiz.com/oWntttKX__cover_480_251.jpg",
              link: "https://mashaquiz.com/p/oWntttKX"
            }, {
              uid: "9FC2oKKb",
              title: "Can you name these shapes？",
              cover_img: "https://img.mashaquiz.com/10907a04-1d23-47ad-ba7a-a59d31f7f45b.jpg",
              link: "https://mashaquiz.com/p/9FC2oKKb"
            }, {
              uid: "xh7ebmoO",
              title: "Learning colors with balloons",
              cover_img: "https://img.mashaquiz.com/526aa8e3-e7f8-4503-aab3-15d9ac376e35.jpg",
              link: "https://mashaquiz.com/p/xh7ebmoO"
            }]
          }
        },
        m = {
          status: "100",
          msg: "ok",
          results: {
            uid: "ySZzHP35",
            title: "Do you know the music of baby？",
            cover_img: "https://img.mashaquiz.com/15e06df6-0ea5-491f-8df7-ef06d43de466.jpg",
            category: "other",
            questions: [{
              id: 693,
              title: "Which song is The Wheels on the Bus?",
              order: 1,
              audio: "https://img1.b1.games/quiz_2/question_audio/2e69cdf628b04ddfb7caad9d5a9fc30c.mp3",
              options: [{
                id: 2721,
                order: 1,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_1__option_1_240_126.jpg",
                is_correct: !1
              }, {
                id: 2722,
                order: 2,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_1__option_2_240_126.jpg",
                is_correct: !1
              }, {
                id: 2723,
                order: 3,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_1__option_3_240_126.jpg",
                is_correct: !0
              }, {
                id: 2724,
                order: 4,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_1__option_4_240_126.jpg",
                is_correct: !1
              }]
            }, {
              id: 694,
              title: "Which song is The Baby Shark Dance?",
              order: 2,
              options: [{
                id: 2725,
                order: 1,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_2__option_1_240_126.jpg",
                is_correct: !0
              }, {
                id: 2726,
                order: 2,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_2__option_2_240_126.jpg",
                is_correct: !1
              }, {
                id: 2727,
                order: 3,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_2__option_3_240_126.jpg",
                is_correct: !1
              }, {
                id: 2728,
                order: 4,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_2__option_4_240_126.jpg",
                is_correct: !1
              }]
            }, {
              id: 695,
              title: "Which song is The Five Little Ducks?",
              order: 3,
              options: [{
                id: 2729,
                order: 1,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_3__option_1_240_126.jpg",
                is_correct: !0
              }, {
                id: 2730,
                order: 2,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_3__option_2_240_126.jpg",
                is_correct: !1
              }, {
                id: 2731,
                order: 3,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_3__option_3_240_126.jpg",
                is_correct: !1
              }, {
                id: 2732,
                order: 4,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_3__option_4_240_126.jpg",
                is_correct: !1
              }]
            }, {
              id: 696,
              title: "Which song is The Johny Johny Yes Papa?",
              order: 4,
              options: [{
                id: 2733,
                order: 1,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_4__option_1_240_126.jpg",
                is_correct: !0
              }, {
                id: 2734,
                order: 2,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_4__option_2_240_126.jpg",
                is_correct: !1
              }, {
                id: 2735,
                order: 3,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_4__option_3_240_126.jpg",
                is_correct: !1
              }, {
                id: 2736,
                order: 4,
                cover_img: "https://img.mashaquiz.com/ySZzHP35__question_4__option_4_240_126.jpg",
                is_correct: !1
              }]
            }]
          }
        },
        a = {
          status: "100",
          msg: "ok",
          results: {
            uid: "OoxWslTN",
            title: "Learn colors with eggs",
            cover_img: "https://img.mashaquiz.com/70c406d5-00cb-4f52-90c4-0e0acfe37703.jpg",
            category: "color",
            questions: [{
              id: 777,
              title: "Which egg is red?",
              order: 1,
              options: [{
                id: 3057,
                order: 1,
                cover_img: "https://img.mashaquiz.com/86ce9ff6-e0bd-4369-b7ac-ac8113595c56.jpg",
                is_correct: !1
              }, {
                id: 3058,
                order: 2,
                cover_img: "https://img.mashaquiz.com/d51b7cbf-24df-4281-b185-d3f6bda31da2.jpg",
                is_correct: !1
              }, {
                id: 3059,
                order: 3,
                cover_img: "https://img.mashaquiz.com/b94264a4-086a-4f0c-9e3d-373085359944.jpg",
                is_correct: !1
              }, {
                id: 3060,
                order: 4,
                cover_img: "https://img.mashaquiz.com/6902a74b-d7d9-4c12-9573-709470b6aa4e.jpg",
                is_correct: !0
              }]
            }, {
              id: 778,
              title: "Which egg is yellow?",
              order: 2,
              options: [{
                id: 3061,
                order: 1,
                cover_img: "https://img.mashaquiz.com/3457de1f-df5f-47b4-aef8-7e5b6110a972.jpg",
                is_correct: !0
              }, {
                id: 3062,
                order: 2,
                cover_img: "https://img.mashaquiz.com/240ddf69-7557-46a6-b679-8e0f48b989a1.jpg",
                is_correct: !1
              }, {
                id: 3063,
                order: 3,
                cover_img: "https://img.mashaquiz.com/0ae2e06b-a786-454c-b337-f246af421122.jpg",
                is_correct: !1
              }, {
                id: 3064,
                order: 4,
                cover_img: "https://img.mashaquiz.com/5df7679f-d3d0-4ab9-850b-f0e3de3f5063.jpg",
                is_correct: !1
              }]
            }, {
              id: 779,
              title: "Which egg is blue?",
              order: 3,
              options: [{
                id: 3065,
                order: 1,
                cover_img: "https://img.mashaquiz.com/23afee9c-24d4-478d-9983-dbe31aa0248c.jpg",
                is_correct: !1
              }, {
                id: 3066,
                order: 2,
                cover_img: "https://img.mashaquiz.com/24b8ecf3-03cf-4d0b-b3ed-4738b5ba0589.jpg",
                is_correct: !1
              }, {
                id: 3067,
                order: 3,
                cover_img: "https://img.mashaquiz.com/fe7cf6c8-d595-428f-a879-f0b591ff3e45.jpg",
                is_correct: !0
              }, {
                id: 3068,
                order: 4,
                cover_img: "https://img.mashaquiz.com/efd28fb6-bcf5-4b4f-a0ff-063d218403dd.jpg",
                is_correct: !1
              }]
            }, {
              id: 780,
              title: "Which egg is green?",
              order: 4,
              options: [{
                id: 3069,
                order: 1,
                cover_img: "https://img.mashaquiz.com/c8541f6e-59b0-4c11-ba89-53a503b594e1.jpg",
                is_correct: !1
              }, {
                id: 3070,
                order: 2,
                cover_img: "https://img.mashaquiz.com/a745a0d9-9667-494e-9900-164a4d92abf8.jpg",
                is_correct: !1
              }, {
                id: 3071,
                order: 3,
                cover_img: "https://img.mashaquiz.com/9b75da33-15c0-4d67-b831-b2ec37acbe15.jpg",
                is_correct: !1
              }, {
                id: 3072,
                order: 4,
                cover_img: "https://img.mashaquiz.com/c5105465-c208-410a-b848-baff4e789c5f.jpg",
                is_correct: !0
              }]
            }]
          }
        };
      o._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Scene.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BSingleton.ts"], (function(t) {
  "use strict";
  var n, e, a, r, s, i;
  return {
    setters: [function(t) {
      n = t.inheritsLoose
    }, function(t) {
      e = t.cclegacy, a = t.resources, r = t.Prefab, s = t.instantiate
    }, function(t) {
      i = t.default
    }],
    execute: function() {
      e._RF.push({}, "90141ss8WlFdoy3ZrA9d11g", "Scene", void 0);
      t("default", function(t) {
        function e(n) {
          var e;
          return (e = t.call(this, n) || this).status = new Set, e.nParent = void 0, e.nParent = e.params.nParent, e
        }
        n(e, t);
        var i = e.prototype;
        return i.load = function(t, n) {
          var e = this;
          if (this.status.has(t)) {
            var i = this.params.nParent.getChildByName(t);
            return n && n(i)
          }
          var u = this.params.path + "/" + t;
          a.load(u, r, (function(t, n) {}), (function(a, r) {
            if (a) return n && n(), console.error(a);
            if (e.status.has(t)) {
              var i = e.params.nParent.getChildByName(t);
              return n && n(i)
            }
            var u = s(r);
            return e.status.add(u.name), e.params.nParent.addChild(u), n && n(u)
          }))
        }, i.preload = function(t, n) {
          this.load(t, (function(t) {
            t && (t.active = !1), n && n()
          }))
        }, e
      }(i.Instance()));
      e._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/SceneDirection.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
  "use strict";
  var i, t, n, r, o, c, s, a, u, l, p;
  return {
    setters: [function(e) {
      i = e.applyDecoratedDescriptor, t = e.inheritsLoose, n = e.initializerDefineProperty, r = e.assertThisInitialized, o = e.createClass
    }, function(e) {
      c = e.cclegacy, s = e._decorator, a = e.UITransform, u = e.view, l = e.ResolutionPolicy, p = e.Component
    }],
    execute: function() {
      var d, h, f, y, g, v, S;
      c._RF.push({}, "c03e7hmuY1Md7/UHWBYXQYU", "SceneDirection", void 0);
      var D = s.ccclass,
        _ = s.property,
        z = s.executionOrder;
      e("SceneDirection", (d = D("SceneDirection"), h = z(-5), f = _(a), d(y = h(((S = function(e) {
        function i() {
          for (var i, t = arguments.length, o = new Array(t), c = 0; c < t; c++) o[c] = arguments[c];
          return i = e.call.apply(e, [this].concat(o)) || this, n(i, "uiMask", v, r(i)), i
        }
        return t(i, e), i.prototype.onLoad = function() {
          "landscape" == i.direction ? (u.setDesignResolutionSize(1280, 720, l.UNKNOWN), this.uiMask.setContentSize(1280, 720)) : (u.setDesignResolutionSize(640, 648, l.UNKNOWN), this.uiMask.setContentSize(640, 648))
        }, o(i, null, [{
          key: "direction",
          get: function() {
            if (this._direction) return this._direction;
            var e = u.getResolutionPolicy().canvasSize;
            return this._direction = e.height < e.width ? "landscape" : "portrait", this._direction
          }
        }]), i
      }(p))._direction = void 0, v = i((g = S).prototype, "uiMask", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), y = g)) || y) || y));
      c._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/SceneManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Scene.ts", "./SceneDirection.ts", "./BSingleton.ts", "./AudioManager.ts", "./GameOption.ts", "./GameData.ts", "./Recommend.ts", "./Game.ts", "./Complete.ts", "./ClientEvent.ts", "./Audio.ts"], (function(e) {
  "use strict";
  var n, t, o, i, a, c, r, s, l, d, u, p, m, f, h, g, v, C, P, I, y, G, S;
  return {
    setters: [function(e) {
      n = e.inheritsLoose, t = e.applyDecoratedDescriptor, o = e.initializerDefineProperty, i = e.assertThisInitialized
    }, function(e) {
      a = e.cclegacy, c = e._decorator, r = e.Node, s = e.UIOpacity, l = e.Tween, d = e.tween, u = e.v3
    }, function(e) {
      p = e.default
    }, function(e) {
      m = e.SceneDirection
    }, function(e) {
      f = e.default
    }, function(e) {
      h = e.default
    }, function(e) {
      g = e.GameOption
    }, function(e) {
      v = e.default
    }, function(e) {
      C = e.Recommend
    }, function(e) {
      P = e.Game
    }, function(e) {
      I = e.Complete
    }, function(e) {
      y = e.default, G = e.ClientEventName
    }, function(e) {
      S = e.default
    }],
    execute: function() {
      var x, L, H, b, O, R, M, w;
      a._RF.push({}, "efdf1cfbhBMI44cpwGhG8hj", "SceneManager", void 0);
      var A = c.ccclass,
        D = c.property,
        B = c.executionOrder;
      e("SceneManager", (x = A("SceneManager"), L = B(-5), H = D(r), b = D(r), x(O = L((R = function(e) {
        function t() {
          for (var n, t = arguments.length, a = new Array(t), c = 0; c < t; c++) a[c] = arguments[c];
          return n = e.call.apply(e, [this].concat(a)) || this, o(n, "nChangeLoading", M, i(n)), o(n, "nRecommend", w, i(n)), n
        }
        n(t, e);
        var a = t.prototype;
        return a.onLoad = function() {
          e.prototype.onLoad.call(this), p.init({
            nParent: this.node,
            path: "prefab/scene"
          })
        }, a.start = function() {}, a.changeLoading = function(e, n) {
          if (void 0 === e && (e = !0), !this.nChangeLoading) return null == n ? void 0 : n();
          var t = this.nChangeLoading.getComponent(s);
          l.stopAllByTarget(t);
          var o = 233.5,
            i = this.nChangeLoading.children[0],
            a = this.nChangeLoading.children[1],
            c = .5;
          e ? (i.setPosition(-668, 0, 0), a.setPosition(668, 0, 0), t.opacity = 0, d(t).to(c, {
            opacity: 255
          }, {
            easing: "sineOut"
          }).start(), d(i).to(c, {
            position: u(-o)
          }, {
            easing: "sineOut",
            onUpdate: function(e, n) {
              a.setPosition(-i.position.x, 0, 0)
            }
          }).call((function() {
            n && n()
          })).start()) : (i.setPosition(-o, 0, 0), a.setPosition(o, 0, 0), t.opacity = 255, d(t).to(c, {
            opacity: 0
          }, {
            easing: "sineIn"
          }).start(), d(i).to(c, {
            position: u(-668)
          }, {
            easing: "sineIn",
            onUpdate: function(e, n) {
              a.setPosition(-i.position.x, 0, 0)
            }
          }).call((function() {
            n && n()
          })).start())
        }, a.toHome = function(e) {
          var n = this,
            t = "landscape" == m.direction ? "Home" : "HomePortrait";
          3 != v.themeIndex && (t = t + "-" + v.themeIndex.toString()), C.addRecommend(this.nRecommend, (function() {
            p.instance.load(t, (function(t) {
              var o;
              e && e(t), n.preload("Game", (function() {
                g.loadAssetsByLv(v.lv, !1, (function() {
                  var e, n, t;
                  (null == (e = v.data[0]) ? void 0 : e.audio) && S.instance.AudioLoad.preload([null == (n = v.data[0]) ? void 0 : n.audio]), h.instance.load(), y.emit(G.GamePreloadComplete), null == (t = C.instance) || t.load()
                }))
              })), null == (o = C.instance) || o.setUI(!1)
            }))
          }))
        }, a.toGame = function(e) {
          var n = this,
            t = "landscape" == m.direction ? "Game" : "GamePortrait";
          3 != v.themeIndex && (t = t + "-" + v.themeIndex.toString()), p.instance.load(t, (function(t) {
            var o;
            t && (p.instance.nParent.getComponentsInChildren(P).forEach((function(e) {
              e.node.active = !1
            })), t.active = !0, null == (o = t.getComponent(P)) || o.onSceneOpen());
            e && e(t), n.scheduleOnce((function() {
              n.preload("Complete")
            }), 5)
          }))
        }, a.toComplete = function(e) {
          var n = "landscape" == m.direction ? "Complete" : "CompletePortrait";
          3 != v.themeIndex && (n = n + "-" + v.themeIndex.toString()), p.instance.load(n, (function(n) {
            var t;
            n && p.instance.nParent.getComponentsInChildren(I).forEach((function(e) {
              e.node.active = !1
            })), e && e(n), null == (t = C.instance) || t.setUI(!1)
          }))
        }, a.getSceneNode = function(e, n) {
          var t = "";
          "Home" == e ? t = "landscape" == m.direction ? "Home" : "HomePortrait" : "Game" == e ? t = "landscape" == m.direction ? "Game" : "GamePortrait" : "Complete" == e && (t = "landscape" == m.direction ? "Complete" : "CompletePortrait"), 3 != v.themeIndex && (t = t + "-" + v.themeIndex.toString()), p.instance.load(t, (function(e) {
            n && n(e)
          }))
        }, a.preload = function(e, n) {
          var t = "";
          "Home" == e ? t = "landscape" == m.direction ? "Home" : "HomePortrait" : "Game" == e ? t = "landscape" == m.direction ? "Game" : "GamePortrait" : "Complete" == e && (t = "landscape" == m.direction ? "Complete" : "CompletePortrait"), 3 != v.themeIndex && (t = t + "-" + v.themeIndex.toString()), p.instance.preload(t, n)
        }, t
      }(f.Complete()), M = t(R.prototype, "nChangeLoading", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), w = t(R.prototype, "nRecommend", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), O = R)) || O) || O));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/SuperText.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SceneDirection.ts", "./Util.ts", "./LGame.ts"], (function(e) {
  "use strict";
  var t, o, i, n, r, a, l, s, u, c, h, p, d, f, y, b;
  return {
    setters: [function(e) {
      t = e.applyDecoratedDescriptor, o = e.inheritsLoose, i = e.initializerDefineProperty, n = e.assertThisInitialized, r = e.createClass
    }, function(e) {
      a = e.cclegacy, l = e._decorator, s = e.Label, u = e.Node, c = e.Color, h = e.UITransform, p = e.RichText, d = e.LabelOutline
    }, function(e) {
      f = e.SceneDirection
    }, function(e) {
      y = e.default
    }, function(e) {
      b = e.LGame
    }],
    execute: function() {
      var g, L, v, x, m, S;
      a._RF.push({}, "eba1eSYqZFCn5/3Z+IlwGKx", "SuperText", void 0);
      var T = l.ccclass,
        C = l.property;
      e("SuperText", (g = T("SuperText"), L = C({
        tooltip: "默认文字颜色",
        displayOrder: 0
      }), v = C({
        tooltip: "源文本",
        displayOrder: 1,
        multiline: !0
      }), g((S = t((m = function(e) {
        function t() {
          for (var t, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
          return t = e.call.apply(e, [this].concat(r)) || this, i(t, "defaultColor", S, n(t)), t.layoutLabel = null, t._sourceText = "", t
        }
        o(t, e);
        var a = t.prototype;
        return a.getLabels = function(e) {
          var t = [],
            o = [],
            i = this.node.getComponentsInChildren(s);
          "string" == typeof e ? o.push(e) : o = e;
          for (var n = function(e) {
              var n = i[e],
                r = n.string.trim().toLowerCase(),
                a = o.findIndex((function(e) {
                  return e.trim().toLowerCase() == r
                })) >= 0;
              a && (n.key = r);
              var l = "one|two|three|four|five|six|seven|eight|nine|ten".indexOf(r),
                s = !isNaN(Number(r)) || l >= 0 && "" != r;
              if (s) {
                var u = Object.keys(b.colors);
                n.key = u[y.pseudoRandomInt(0, u.length - 1)]
              }
              if (a || s) {
                t.push(n);
                var c = n.node.getComponent(d);
                c || (c = n.node.addComponent(d)), c.enabled = !1
              }
            }, r = 0; r < i.length; r++) n(r);
          return t
        }, a.setString = function(e) {
          var t = this,
            o = this.defaultColor.toHEX(),
            i = e.replace(/\b(\d+|one|two|three|four|five|six|seven|eight|nine|ten|red|yellow|blue|green|pink|purple|orange|grey|black|white)/gi, "<color=" + o + ">$1</color>");
          i = "<color=" + o + ">" + i + "</color>", this.string = i, "portrait" == f.direction && this.scheduleOnce((function() {
            t.node.children.forEach((function(e) {
              var t = e.getComponent(s);
              t.string = t.string.trim() + " "
            })), t._updateLabelSegmentTextAttributes(), t._updateRichTextPosition()
          }))
        }, a.childLayoutText = function(e) {
          var t;
          if (this.layoutLabel = null == (t = this.node.getChildByName("LayoutLabel")) ? void 0 : t.getComponent(s), !this.layoutLabel) {
            var o = new u("LayoutLabel");
            o.layer = this.node.layer, o.parent = this.node, this.layoutLabel = o.addComponent(s), this.layoutLabel.fontSize = 40, this.layoutLabel.lineHeight = 40, this.layoutLabel.overflow = s.Overflow.SHRINK, this.layoutLabel.font = this.font, this.layoutLabel.color = c.TRANSPARENT;
            var i = this.layoutLabel.getComponent(h);
            i.width = 705, i.height = 75
          }
          this.layoutLabel.string = e, this.layoutLabel.updateRenderData(!0), "portrait" == f.direction ? this.fontSize = .85 * this.layoutLabel.actualFontSize : this.fontSize = this.layoutLabel.actualFontSize, this.lineHeight = this.layoutLabel.actualFontSize
        }, r(t, [{
          key: "sourceText",
          get: function() {
            return this._sourceText
          },
          set: function(e) {
            this._sourceText = e, this.setString(e), this.childLayoutText(e)
          }
        }]), t
      }(p)).prototype, "defaultColor", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new c(255, 255, 255, 255)
        }
      }), t(m.prototype, "sourceText", [v], Object.getOwnPropertyDescriptor(m.prototype, "sourceText"), m.prototype), x = m)) || x));
      a._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/Util.ts", ["cc", "./GameConfig.ts", "./BanTouch.ts", "./Audio.ts"], (function(t) {
  "use strict";
  var e, n, u, o, i, s;
  return {
    setters: [function(t) {
      e = t.cclegacy, n = t.pseudoRandomRange, u = t.game
    }, function(t) {
      o = t.default
    }, function(t) {
      i = t.default
    }, function(t) {
      s = t.default
    }],
    execute: function() {
      e._RF.push({}, "788d8k9lztPhIdiqtCB7BK0", "Util", void 0);
      var a = Math.pow(2, 32) - 1;
      t("default", function() {
        function t() {}
        return t.pseudoRandom = function(t, e) {
          var u = (1103515245 * this.seed + 123456789) % a;
          return this.seed = u, n(this.seed, t, e)
        }, t.pseudoRandomInt = function(t, e) {
          return Math.floor(this.pseudoRandom(t, e))
        }, t.formatTime = function(t) {
          void 0 === t && (t = 0);
          var e = Math.floor(t / 60).toString(),
            n = (t % 60).toString();
          return (e = e.length <= 2 ? ("00" + e).slice(e.length) : e) + ":" + (n = ("00" + n).slice(n.length))
        }, t.getUrlParam = function(t) {
          var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
            n = window.location.search.substring(1).match(e);
          return null != n ? decodeURI(n[2]) : null
        }, t.gamePause = function() {
          i.instance.open(), s.instance.mute(!0), u.pause()
        }, t.gameResume = function() {
          i.instance.close(), s.instance.mute(!1), u.resume()
        }, t
      }()).seed = o.randomSeed, e._RF.pop()
    }
  }
}));

System.register("chunks:///_virtual/UtilSend.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Util.ts"], (function(t) {
  "use strict";
  var n, e, i, c, a;
  return {
    setters: [function(t) {
      n = t.inheritsLoose, e = t.extends
    }, function(t) {
      i = t.cclegacy, c = t.log
    }, function(t) {
      a = t.default
    }],
    execute: function() {
      i._RF.push({}, "af797ZPkDxDu7uhVUIIzHcf", "UtilSend", void 0);
      t("default", function(t) {
        function e() {
          return t.apply(this, arguments) || this
        }
        return n(e, t), e.onGameLoadingComplete = function() {
          this.send({
            type: "frameOnLoadComplete"
          }), window.onGameLoaded && window.onGameLoaded()
        }, e.onGameOver = function(t) {
          this.send({
            type: "frameOnComplete",
            data: {
              status: t
            }
          })
        }, e.onGameStart = function() {
          this.send({
            type: "frameOnStart"
          })
        }, e.jumpPage = function(t) {
          this.click("jump", {
            uid: t
          })
        }, e.start = function() {
          this.click("start")
        }, e.restart = function() {
          this.click("restart")
        }, e.next = function() {
          this.click("next")
        }, e.nextGame = function() {
          this.click("nextGame")
        }, e.toHome = function() {
          this.click("index")
        }, e.voice = function() {
          this.click("voice")
        }, e.back = function() {
          this.click("back")
        }, e.complete = function() {
          this.click("complete")
        }, e.page = function() {
          this.click("page")
        }, e.scale = function() {
          this.click("scale")
        }, e.tip = function() {
          this.click("tip")
        }, e
      }(function() {
        function t() {}
        return t.send = function(t) {
          var n, e = {
            type: t.type,
            data: {}
          };
          t.data && (e.data = t.data), c(e), null == (n = window.top) || n.postMessage(e, "*")
        }, t.click = function(t, n) {
          void 0 === n && (n = {}), this.send({
            type: "frameOnClickBtn",
            data: e({
              type: t
            }, n)
          })
        }, t
      }()));
      var o = function() {
          function t() {}
          return t.tip = function(t) {
            t.status
          }, t
        }(),
        s = "pause";
      window.addEventListener("message", (function(t) {
        var n = t.data;
        if ("h5ClickBtnCallback" != n.type)
          if ("h5Control" != n.type);
          else {
            var e = n.data;
            e.type == s && (e.status ? a.gamePause() : a.gameResume())
          }
        else {
          var i = n.data;
          o.tip(i)
        }
      })), i._RF.pop()
    }
  }
}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
})(function(mid, cid) {
  System.register(mid, [cid], function(_export, _context) {
    return {
      setters: [function(_m) {
        var _exportObj = {};

        for (var _key in _m) {
          if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
        }

        _export(_exportObj);
      }],
      execute: function() {}
    };
  });
});